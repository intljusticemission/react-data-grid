/* @flow */
"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var uncontrollable = require('uncontrollable');
var BaseGrid = require('../../Grid');
var KeyboardHandlerMixin = require('../../KeyboardHandlerMixin');
var CheckboxEditor  = require('../editors/CheckboxEditor');
var FilterableHeaderCell  = require('../cells/headerCells/FilterableHeaderCell');
var DOMMetrics = require('../../DOMMetrics');
var ColumnMetricsMixin = require('../../ColumnMetricsMixin');
var RowUtils = require('../../RowUtils');
var ColumnUtils = require('../../ColumnUtils');
var SORT_TYPES = require('../../HeaderRow').SORT;

let notify = (handler, ...args) => handler && handler(...args)

var ReactDataGrid = React.createClass({

  propTypes: {
    rowHeight: React.PropTypes.number.isRequired,
    headerRowHeight: React.PropTypes.number,
    minHeight: React.PropTypes.number.isRequired,
    minWidth: React.PropTypes.number,

    enableCellSelect : React.PropTypes.bool,
    enableRowSelect: React.PropTypes.bool,

    /**
     * A column definition for the "select row" cell
     */
    selectRowColumn: React.PropTypes.object,

    onRowUpdated:React.PropTypes.func,
    rowGetter: React.PropTypes.func.isRequired,
    rowsCount: React.PropTypes.number.isRequired,
    toolbar:React.PropTypes.element,
    columns: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array
    ]).isRequired,
    sortType: React.PropTypes.oneOf(['simple', 'multiple']),
    onFilter: React.PropTypes.func,
    onGridSort: React.PropTypes.func,
    onCellCopyPaste: React.PropTypes.func,
    onCellsDragged: React.PropTypes.func,
    onAddFilter: React.PropTypes.func
  },

  mixins: [
    ColumnMetricsMixin,
    DOMMetrics.MetricsComputatorMixin,
    KeyboardHandlerMixin
  ],

  getDefaultProps() {
    return {
      enableCellSelect : false,
      tabIndex : -1,
      rowHeight: 35,
      enableRowSelect : false,
      minHeight : 350,
      sortType: 'simple',
      selectedRows: []
    };
  },

  getInitialState: function(): {
    selected: SelectedType;
    copied: ?{idx: number; rowIdx: number};
    expandedRows: Array<Row>;
    canFilter: boolean;
    columnFilters: any;
    sortDirection: ?SortType;
    sortColumn: ?ExcelColumn;
    dragged: ?DraggedType;
  } {
    var columnMetrics = this.createColumnMetrics();
    var initialState = {
      columnMetrics,
      ...this.getSelectedState(this.props),
      copied: null,
      expandedRows: [],
      canFilter: false,
      columnFilters: {},
      dragged: null,
      scrollOffset: 0
    }

    return initialState;
  },

  componentWillReceiveProps(nextProps: ReactDataGridProps) {
    this.setState(this.getSelectedState(nextProps))
    if (nextProps.rowsCount === this.props.rowsCount + 1) {
      this.onAfterAddRow(nextProps.rowsCount + 1);
    }
  },

  getSelectedState(props) {
    let {
      active,
      selectedCell: [idx, rowIdx] = [0, 0]
    } = props

    if (!this.props.enableCellSelect)
      idx = rowIdx = -1

    let selected = {
      idx,
      rowIdx,
      active: !!active
    };

    if (active && active !== true)
      selected.initialKeyCode = active

    return { selected }
  },

  componentDidMount() {
    var scrollOffset = 0;
    var canvas = ReactDOM.findDOMNode(this).querySelector('.react-grid-Canvas');
    if (canvas != null) {
      scrollOffset = canvas.offsetWidth - canvas.clientWidth;
    }
    this.setState({ scrollOffset: scrollOffset });
  },

  render: function(): ?ReactElement {
    var cellMetaData = {
      selected: this.state.selected,
      dragged: this.state.dragged,
      onCellClick: this.onCellClick,
      onCellDoubleClick: this.onCellDoubleClick,
      onCommit: this.onCellCommit,
      onCommitCancel: this.setInactive,
      copied: this.state.copied,
      handleDragEnterRow: this.handleDragEnter,
      handleTerminateDrag: this.handleTerminateDrag
    }

    var toolbar = this.renderToolbar();
    var containerWidth = this.props.minWidth || this.DOMMetrics.gridWidth();
    var gridWidth = containerWidth  - this.state.scrollOffset;

    //if NaN without coercion
    if (gridWidth !== gridWidth)
      gridWidth = 0;

    return (
      <div className="react-grid-Container" style={{ width: containerWidth }}>
      {toolbar}
        <div className="react-grid-Main">
          <BaseGrid
            ref="base"
            {...this.props}
            headerRows={this.getHeaderRows()}
            columnMetrics={this.state.columnMetrics}
            rowGetter={this.props.rowGetter}
            rowsCount={this.props.rowsCount}
            rowHeight={this.props.rowHeight}
            cellMetaData={cellMetaData}
            selectedRows={this.props.selectedRows}
            expandedRows={this.state.expandedRows}
            rowOffsetHeight={this.getRowOffsetHeight()}
            sortInfo={this.props.sortInfo}
            onSort={this.handleSort}
            minHeight={this.props.minHeight}
            totalWidth={gridWidth}
            onViewportKeydown={this.onKeyDown}
            onViewportDragStart={this.onDragStart}
            onViewportDragEnd={this.handleDragEnd}
            onViewportDoubleClick={this.onViewportDoubleClick}
            onColumnResize={this.onColumnResize}
          />
        </div>
      </div>
    )
  },

  renderToolbar(): ReactElement {
    var Toolbar = this.props.toolbar;
    if (React.isValidElement(Toolbar)) {
      return( React.cloneElement(Toolbar, { onToggleFilter : this.onToggleFilter, numberOfRows : this.props.rowsCount }));
    }
  },

  onSelect(selected: SelectedType) {
    let { selected: old } = this.state;

    if (this.props.enableCellSelect) {
      if (!(
           old.rowIdx === selected.rowIdx
        && old.idx === selected.idx
        && old.active === true
      )) {
        var idx = selected.idx;
        var rowIdx = selected.rowIdx;
        if (
          idx >= 0
          && rowIdx >= 0
          && idx < ColumnUtils.getSize(this.state.columnMetrics.columns)
          && rowIdx < this.props.rowsCount
        ) {
          notify(this.props.onSelectCell,
            [idx, rowIdx],
            [old.idx, old.rowIdx]
          )
        }
      }
    }
  },

  onCellClick(cell: SelectedType) {
    this.onSelect({ rowIdx: cell.rowIdx, idx: cell.idx });
  },

  onCellDoubleClick(cell: SelectedType) {
    this.onSelect({ rowIdx: cell.rowIdx, idx: cell.idx });
    this.setActive('Enter');
  },

  onViewportDoubleClick() {
    this.setActive();
  },

  onPressArrowUp(e: SyntheticEvent) {
    this.moveSelectedCell(e, -1, 0);
  },

  onPressArrowDown(e: SyntheticEvent) {
    this.moveSelectedCell(e, 1, 0);
  },

  onPressArrowLeft(e: SyntheticEvent) {
    this.moveSelectedCell(e, 0, -1);
  },

  onPressArrowRight(e: SyntheticEvent) {
    this.moveSelectedCell(e, 0, 1);
  },

  onPressTab(e: SyntheticEvent) {
    this.moveSelectedCell(e, 0, e.shiftKey ? -1 : 1);
  },

  onPressEnter(e: SyntheticKeyboardEvent) {
    this.setActive(e.key);
  },

  onPressDelete(e: SyntheticKeyboardEvent) {
    this.setActive(e.key);
  },

  onPressEscape(e: SyntheticKeyboardEvent) {
    this.setInactive(e.key);
  },

  onPressBackspace(e: SyntheticKeyboardEvent) {
    this.setActive(e.key);
  },

  onPressChar(e: SyntheticKeyboardEvent) {
    if (this.isKeyPrintable(e.keyCode)) {
      this.setActive(e.keyCode);
    }
  },

  onPressKeyWithCtrl(e: SyntheticKeyboardEvent) {
    var keys = {
      KeyCode_c : 99,
      KeyCode_C : 67,
      KeyCode_V : 86,
      KeyCode_v : 118,
    }

    var { rowIdx, idx } = this.state.selected;

    if (this.canEdit(idx, rowIdx)) {
      if (e.keyCode == keys.KeyCode_c || e.keyCode == keys.KeyCode_C) {
        var value = this.getSelectedValue();
        this.handleCopy({ value : value });
      }
      else if (e.keyCode == keys.KeyCode_v || e.keyCode == keys.KeyCode_V) {
        this.handlePaste();
      }
    }
  },

  onDragStart(e: SyntheticEvent) {
    var value = this.getSelectedValue();
    this.handleDragStart({ idx: this.state.selected.idx, rowIdx : this.state.selected.rowIdx, value : value });
    //need to set dummy data for FF
    if (e && e.dataTransfer && e.dataTransfer.setData) e.dataTransfer.setData('text/plain', 'dummy');
  },

  moveSelectedCell(e: SyntheticEvent, rowDelta: number, cellDelta: number) {
    // we need to prevent default as we control grid scroll
    // otherwise it moves every time you left/right which is janky
    e && e.preventDefault();
    var rowIdx = this.state.selected.rowIdx + rowDelta;
    var idx = this.state.selected.idx + cellDelta;
    this.onSelect({ idx: idx, rowIdx: rowIdx });
  },

  getSelectedValue(): string {
    var rowIdx = this.state.selected.rowIdx;
    var idx = this.state.selected.idx;
    var cellKey = this.getColumn(idx).key;
    var row = this.props.rowGetter(rowIdx);
    return RowUtils.get(row, cellKey);
  },

  setActive(keyPressed: string) {
    var { rowIdx, idx } = this.state.selected;
    if (this.canEdit(idx, rowIdx) && !this.isActive()) {
      notify(this.props.onActive, keyPressed || true)
    }
  },

  setInactive() {
    if (this.isActive()) {
      notify(this.props.onActive, false)
    }
  },

  canEdit(idx: number, rowIdx): boolean {
    var col = this.getColumn(idx);
    var row = this.props.rowGetter(rowIdx);
    if (this.props.enableCellSelect === true) {
      if (col.editable === false) return false
      if (col.editable === true) return true
      if (typeof col.editable === 'function') return col.editable(row, idx, rowIdx)

      return col.editor != null
    }
  },

  isActive(): boolean {
    return this.state.selected.active === true;
  },

  onCellCommit(commit: RowUpdateEvent) {
    this.setInactive();
    if (commit.key === 'Tab') {
      this.moveSelectedCell(null, 0, 1);
    }

    this.props.onRowUpdated(commit);
  },

  setupGridColumns(props = this.props): Array<any> {
    var cols = props.columns.slice(0);
    if (props.enableRowSelect) {
      let userProps = props.selectRowColumn

      var selectColumn = {
          formatter: <CheckboxEditor/>,
          filterable: false,
          headerRenderer: <input type="checkbox" onChange={this.handleCheckboxChange} />,
          width : 30,
          locked: true,
          ...userProps,
          onCellChange: this.handleRowSelect,
          key: 'select-row',
          name: ''
      };
      var unshiftedCols = cols.unshift(selectColumn);
      cols = unshiftedCols > 0 ? cols : unshiftedCols;
    }
    return cols;
  },

  handleCheckboxChange : function(e: SyntheticEvent) {
    var selectedRows = [];
    if (e.currentTarget instanceof HTMLInputElement && e.currentTarget.checked === true) {
      for (var i = 0; i < this.props.rowsCount; i++) {
        selectedRows.push(this.props.rowGetter(i));
      }
    }

    this.props.onSelectRow(selectedRows)
  },

  // columnKey not used here as this function will select the whole row,
  // but needed to match the function signature in the CheckboxEditor
  handleRowSelect(rowIdx: number, columnKey: string, e: Event) {
    var selectedRows = this.props.selectedRows.slice()
    e.stopPropagation();

    var row = this.props.rowGetter(rowIdx)
      , idx = selectedRows.indexOf(row);

    if (idx !== -1) {
      selectedRows.splice(idx, 1)
    }
    else {
      selectedRows.push(row);
    }

    this.props.onSelectRow(selectedRows)
  },

  onAfterAddRow:function(numberOfRows: number) {
    let { selected } = this.state;
    notify(this.props.onSelectCell,
      [0, numberOfRows - 2],
      [selected.idx, selected.rowIdx]
    )
  },

  onToggleFilter() {
    this.setState({ canFilter : !this.state.canFilter });
  },

  getHeaderRows(): Array<{ref: string; height: number;}> {
    var rows = [{ ref:'row', height: this.props.headerRowHeight || this.props.rowHeight }];
    if (this.state.canFilter === true) {
      rows.push({
        ref:'filterRow',
        headerCellRenderer : <FilterableHeaderCell onChange={this.props.onAddFilter} column={this.props.column}/>,
        height : 45
      });
    }
    return rows;
  },

  getRowOffsetHeight(): number {
    var offsetHeight = 0;
    this.getHeaderRows().forEach((row) => offsetHeight += parseFloat(row.height, 10) );
    return offsetHeight;
  },

  handleSort(columnKey: string, direction: SortType) {
    let { sortInfo, sortType } = this.props;
    let existing = (sortInfo || {})[columnKey];

    if ((existing && existing === direction) ||
        (!existing && direction === SORT_TYPES.NONE)
    ) {
      return
    }

    sortInfo = sortType === 'simple' ? {} : { ...sortInfo }

    if (direction === SORT_TYPES.NONE && sortInfo[columnKey])
      delete sortInfo[columnKey];
    else
      sortInfo[columnKey] = direction;

    this.props.onGridSort &&
      this.props.onGridSort(sortInfo);
  },

  copyPasteEnabled: function(): boolean {
    return this.props.onCellCopyPaste !== null;
  },

  handleCopy({ value }) {
    if (!this.copyPasteEnabled())
      return;
    var textToCopy = value;
    var selected = this.state.selected;
    var copied = { idx : selected.idx, rowIdx : selected.rowIdx };
    this.setState({ textToCopy, copied });
  },

  handlePaste() {
    var selected = this.state.selected;

    if (!this.copyPasteEnabled())
      return;

    var fromKey = this.getColumn(this.state.copied.idx).key;
    var toKey = this.getColumn(selected.idx).key;

    if (this.props.onCellCopyPaste) {

      this.props.onCellCopyPaste({
        cellKey: toKey,
        rowIdx: selected.rowIdx,
        value: this.state.textToCopy,
        fromColumn: fromKey,
        fromRow: this.state.copied.rowIdx,
        toRow: selected.rowIdx,
        toColumn: toKey,
      });
    }
    this.setState({ copied : null });
  },

  dragEnabled: function(): boolean {
    return this.props.onCellsDragged !== null;
  },

  handleDragStart(dragged: DraggedType) {
    if (!this.dragEnabled()) { return; }
      var idx = dragged.idx;
      var rowIdx = dragged.rowIdx;
      if (
        idx >= 0
        && rowIdx >= 0
        && idx < this.getSize()
        && rowIdx < this.props.rowsCount
      ) {
        this.setState({ dragged });
      }
  },

  handleDragEnter(row: any) {
    if (!this.dragEnabled()) return;
    var dragged = this.state.dragged;
    dragged.overRowIdx = row;
    this.setState({ dragged });
  },

  handleDragEnd() {
    if (!this.dragEnabled())
      return;

    var fromRow, toRow;
    var selected = this.state.selected;
    var dragged = this.state.dragged;
    var cellKey = this.getColumn(this.state.selected.idx).key;

    fromRow = selected.rowIdx;
    toRow   = dragged.overRowIdx;
    if (this.props.onCellsDragged) {
      this.props.onCellsDragged({
        cellKey,
        fromRow,
        toRow,
        value: dragged.value
      });
    }
    this.setState({ dragged: { complete : true }});
  },

  handleTerminateDrag() {
    if (!this.dragEnabled()) { return; }
      this.setState({ dragged: null });
  }

});


module.exports = uncontrollable(ReactDataGrid, {
  active: 'onActive',
  selectedCell: 'onSelectCell',
  selectedRows: 'onSelectRow',
  sortInfo: 'onGridSort'
})
