/* @flow  */
'use strict';

var React           = require('react');
var joinClasses      = require('classnames');
var Cell            = require('./Cell');
var ColumnMetrics   = require('./ColumnMetrics');
var ColumnUtilsMixin  = require('./ColumnUtils');

var Row = React.createClass({

  propTypes: {
    height: React.PropTypes.number.isRequired,
    columns: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]).isRequired,
    row: React.PropTypes.object.isRequired,
    cellRenderer: React.PropTypes.func,
    isSelected: React.PropTypes.bool,
    idx : React.PropTypes.number.isRequired,
    expandedRows : React.PropTypes.arrayOf(React.PropTypes.object)
  },

  mixins: [ColumnUtilsMixin],

  render(): ?ReactElement {
    var className = joinClasses(
      this.props.className,
      'react-grid-Row',
      `react-grid-Row--${this.props.idx % 2 === 0 ? 'even' : 'odd'}`
    );

    var style = {
      ...this.props.style,
      height: this.getRowHeight(this.props),
      overflow: 'hidden'
    };

    var cells = this.getCells();
    return (
      <div {...this.props} className={className} style={style} onDragEnter={this.handleDragEnter}>
        {React.isValidElement(this.props.row) ?
          this.props.row : cells}
      </div>
    );
  },

  getCells(): Array<ReactElement> {
    var cells = [];
    var lockedCells = [];
    var selectedColumn = this.getSelectedColumn();

    this.props.columns.forEach((column, i) => {

      var CellRenderer = this.props.cellRenderer;
      var cell = (
        <CellRenderer
          ref={i}
          key={`${column.key}-${i}`}
          idx={i}
          rowIdx={this.props.idx}
          column={column}
          height={this.getRowHeight()}
          formatter={column.formatter}
          cellMetaData={this.props.cellMetaData}
          rowData={this.props.row}
          selectedColumn={selectedColumn}
          isRowSelected={this.props.isSelected}
        />
      )
      if (column.locked) {
        lockedCells.push(cell);
      }
      else {
        cells.push(cell);
      }
    });

    return cells.concat(lockedCells);
  },

  getRowHeight(): number {
    var rows = this.props.expandedRows || null;
    if (rows && this.props.key) {
      var row = rows[this.props.key] || null;
      if (row) {
        return row.height;
      }
    }
    return this.props.height;
  },

  renderCell(props: any): ReactElement {
    if (typeof this.props.cellRenderer == 'function') {
      this.props.cellRenderer.call(this, props);
    }
    if (React.isValidElement(this.props.cellRenderer)) {
      return React.cloneElement(this.props.cellRenderer, props);
    }
    else {
      return this.props.cellRenderer(props);
    }
  },

  getDefaultProps(): {cellRenderer: Cell} {
    return {
      cellRenderer: Cell,
      isSelected: false,
      height : 35
    };
  },


  setScrollLeft(scrollLeft: number) {
    this.props.columns.forEach( (column, i) => {
      if (column.locked) {
        if (!this.refs[i]) return;
        this.refs[i].setScrollLeft(scrollLeft);
      }
    });
  },

  doesRowContainSelectedCell(props: any): boolean {
    var selected = props.cellMetaData.selected;
    if (selected && selected.rowIdx === props.idx) {
      return true;
    }
    else {
      return false;
    }
  },

  willRowBeDraggedOver(props: any): boolean {
    var dragged = props.cellMetaData.dragged;
    return  dragged != null && (dragged.rowIdx>=0 || dragged.complete === true);
  },

  hasRowBeenCopied(): boolean {
    var copied = this.props.cellMetaData.copied;
    return copied != null && copied.rowIdx === this.props.idx;
  },

  shouldComponentUpdate(nextProps: any): boolean {
    return !(ColumnMetrics.sameColumns(this.props.columns, nextProps.columns, ColumnMetrics.sameColumn)) ||
           this.doesRowContainSelectedCell(this.props)                                                   ||
           this.doesRowContainSelectedCell(nextProps)                                                    ||
           this.willRowBeDraggedOver(nextProps)                                                          ||
           nextProps.row !== this.props.row                                                              ||
           nextProps.idx !== this.props.idx                                                              ||
           this.hasRowBeenCopied()                                                                       ||
           this.props.isSelected !== nextProps.isSelected                                                ||
           nextProps.height !== this.props.height;
  },

  handleDragEnter() {
    var handleDragEnterRow = this.props.cellMetaData.handleDragEnterRow;
    if (handleDragEnterRow) {
      handleDragEnterRow(this.props.idx);
    }
  },

  getSelectedColumn() {
    var selected = this.props.cellMetaData.selected;
    if (selected && selected.idx) {
      return this.getColumn(this.props.columns, selected.idx);
    }
  }

});

module.exports = Row;
