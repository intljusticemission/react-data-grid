/* @flow */
'use strict';

var React             = require('react');
var ReactDOM = require('react-dom');
var joinClasses       = require('classnames');
var EditorContainer   = require('./addons/editors/EditorContainer');
var ExcelColumn       = require('./addons/grids/ExcelColumn');
var isFunction        = require('./addons/utils/isFunction');
var CellMetaDataShape = require('./PropTypeShapes/CellMetaData');

var Cell = React.createClass({

  propTypes : {
    rowIdx : React.PropTypes.number.isRequired,
    idx : React.PropTypes.number.isRequired,
    selected : React.PropTypes.shape({
      idx : React.PropTypes.number.isRequired,
    }),
    tabIndex : React.PropTypes.number,
    ref : React.PropTypes.string,
    column: React.PropTypes.shape(ExcelColumn).isRequired,
    isExpanded: React.PropTypes.bool,
    cellMetaData: React.PropTypes.shape(CellMetaDataShape).isRequired,
    handleDragStart: React.PropTypes.func,
    className: React.PropTypes.string,
    rowData : React.PropTypes.object.isRequired
  },

  getDefaultProps(): {tabIndex: number; ref: string; isExpanded: boolean } {
    return {
      tabIndex: -1,
      ref: 'cell',
      isExpanded: false
    }
  },

  getInitialState() {
    return {
      isRowChanging: false,
      isCellValueChanging: false
    }
  },

  componentDidMount() {
    this.checkFocus();
  },

  componentDidUpdate(prevProps) {
    var dragged = this.props.cellMetaData.dragged;

    if (this.isSelected() !== this.isSelected(prevProps))
      this.checkFocus();

    if (dragged && dragged.complete === true) {
      this.props.cellMetaData.handleTerminateDrag();
    }
    if (this.state.isRowChanging && this.props.selectedColumn != null) {
      this.applyUpdateClass();
    }
  },

  componentWillReceiveProps(nextProps) {
    this.setState({
      isRowChanging : this.props.rowData !== nextProps.rowData,
      isCellValueChanging: this.props.value !== nextProps.value
    });
  },

  shouldComponentUpdate(nextProps: any): boolean {
    return this.props.column.width !== nextProps.column.width
      || this.props.column.left !== nextProps.column.left
      || this.props.rowData !== nextProps.rowData
      || this.props.height !== nextProps.height
      || this.props.rowIdx !== nextProps.rowIdx
      || this.isCellSelectionChanging(nextProps)
      || this.isDraggedCellChanging(nextProps)
      || this.isCopyCellChanging(nextProps)
      || this.props.isRowSelected !== nextProps.isRowSelected
      || this.isSelected();
  },

  getStyle(): {position:string; width: number; height: number; left: number} {
    var style = {
      position: 'absolute',
      width: this.props.column.width,
      height: this.props.height,
      left: this.props.column.left
    };
    return style;
  },

  render(): ?ReactElement {
    var style = this.getStyle();
    var className = this.getCellClass();

    return (
      <div
        {...this.props}
        className={className}
        style={style}
        onClick={this.onCellClick}
        onDoubleClick={this.onCellDoubleClick}
      >
        { this.renderCellContent() }
        { this.props.children }
        <div className="drag-handle" draggable="true"/>
      </div>
    );
  },

  renderCellContent(): ReactElement {
    var {
        cellMetaData, column, idx
      , rowIdx, rowData, height, isExpanded, isRowSelected } = this.props
      , formatter = column.formatter
      , CellContent;

    let props = {
        cellMetaData, column, idx, rowIdx
      , rowData, height
      , isExpanded, isRowSelected
      , value: this.getValue()
      , isSelected: this.isSelected()
    }

    if (this.isActive()) {
      CellContent = <EditorContainer {...props}/>
    }
    else if (React.isValidElement(formatter)) {
      CellContent = React.cloneElement(formatter, props);
    }
    else if (isFunction(formatter)) {
      CellContent = React.createElement(formatter, props);
    }
    else {
      CellContent = <SimpleCellFormatter {...props}/>;
    }

    return (
      <div
        ref="cell"
        className="react-grid-Cell__value"
      >
        { CellContent }
        {this.props.cellControls}
      </div>
    )
  },

  isColumnSelected() {
    var meta = this.props.cellMetaData;
    if (meta == null || meta.selected == null) { return false; }

    return (
      meta.selected
      && meta.selected.idx === this.props.idx
    );
  },

  isSelected(props = this.props): boolean {
    var meta = props.cellMetaData;
    if (meta == null || meta.selected == null) { return false; }

    return !!(
      meta.selected
      && meta.selected.rowIdx === props.rowIdx
      && meta.selected.idx === props.idx
    );
  },

  isActive(): boolean {
    var meta = this.props.cellMetaData;
    if (meta == null || meta.selected == null) { return false; }
    return this.isSelected() && meta.selected.active === true;
  },

  isCellSelectionChanging(nextProps: {idx: number; cellMetaData: {selected: {idx: number}}}): boolean {
    var meta = this.props.cellMetaData;
    if (meta == null || meta.selected == null) { return false; }
    var nextSelected = nextProps.cellMetaData.selected;
    if (meta.selected && nextSelected) {
      return this.props.idx === nextSelected.idx || this.props.idx === meta.selected.idx;
    }
    else {
      return true;
    }
  },

  getRowData() {
    return this.props.rowData.toJSON ? this.props.rowData.toJSON() : this.props.rowData;
  },

  onCellClick() {
    var meta = this.props.cellMetaData;
    if (meta != null && meta.onCellClick != null) {
      meta.onCellClick({ rowIdx : this.props.rowIdx, idx : this.props.idx });
    }
  },

  onCellDoubleClick() {
    var meta = this.props.cellMetaData;
    if (meta != null && meta.onCellDoubleClick != null) {
      meta.onCellDoubleClick({ rowIdx : this.props.rowIdx, idx : this.props.idx });
    }
  },

  checkFocus() {
    if (this.isSelected() && !this.isActive()) {
      let node = ReactDOM.findDOMNode(this);

      if (document.activeElement !== ReactDOM.findDOMNode(this))
        node.focus();
    }
  },

  getCellClass (): string {
    var className = joinClasses(
      this.props.column.cellClass,
      'react-grid-Cell',
      this.props.className,
      this.props.column.locked ? 'react-grid-Cell--locked' : null
    );
    var extraClasses = joinClasses({
      'selected' : this.isSelected() && !this.isActive(),
      'editing' : this.isActive(),
      'copied' : this.isCopied(),
      'active-drag-cell' : this.isSelected() || this.isDraggedOver(),
      'is-dragged-over-up' :  this.isDraggedOverUpwards(),
      'is-dragged-over-down' :  this.isDraggedOverDownwards(),
      'was-dragged-over' : this.wasDraggedOver()
    });
    return joinClasses(className, extraClasses);
  },

  getUpdateCellClass() {
    return this.props.column.getUpdateCellClass
      ? this.props.column.getUpdateCellClass(
        this.props.selectedColumn,
        this.props.column,
        this.state.isCellValueChanging
      ) : '';
  },

  applyUpdateClass() {
    var updateCellClass = this.getUpdateCellClass();
    // -> removing the class
    if (updateCellClass != null && updateCellClass != '') {
      var cellDOMNode = ReactDOM.findDOMNode(this);
      if (cellDOMNode.classList) {
        cellDOMNode.classList.remove(updateCellClass);
      // -> and re-adding the class
        cellDOMNode.classList.add(updateCellClass);
      }
      else if (cellDOMNode.className.indexOf(updateCellClass) === -1) {
        // IE9 doesn't support classList, nor (I think) altering element.className
        // without replacing it wholesale.
        cellDOMNode.className = cellDOMNode.className + ' ' + updateCellClass;
      }
    }
  },

  setScrollLeft(scrollLeft: number) {
    var ctrl: any = this; //flow on windows has an outdated react declaration, once that gets updated, we can remove this
    if (ctrl.isMounted()) {
      var node = ReactDOM.findDOMNode(this);
      var transform = `translate3d(${scrollLeft}px, 0px, 0px)`;
      node.style.webkitTransform = transform;
      node.style.transform = transform;
    }
  },

  isCopied(): boolean {
    var copied = this.props.cellMetaData.copied;
    return (
      copied
      && copied.rowIdx === this.props.rowIdx
      && copied.idx === this.props.idx
    );
  },

  isDraggedOver(): boolean {
    var dragged = this.props.cellMetaData.dragged;
    return (
      dragged &&
      dragged.overRowIdx === this.props.rowIdx
      && dragged.idx === this.props.idx
    )
  },

  wasDraggedOver(): boolean {
    var dragged = this.props.cellMetaData.dragged;
    return (
      dragged
      && ((dragged.overRowIdx < this.props.rowIdx && this.props.rowIdx < dragged.rowIdx)
      ||  (dragged.overRowIdx > this.props.rowIdx && this.props.rowIdx > dragged.rowIdx))
      && dragged.idx === this.props.idx
    );
  },

  isDraggedCellChanging(nextProps: any): boolean {
    var isChanging;
    var dragged = this.props.cellMetaData.dragged;
    var nextDragged = nextProps.cellMetaData.dragged;
    if (dragged) {
      isChanging = (nextDragged && this.props.idx === nextDragged.idx)
      || (dragged && this.props.idx === dragged.idx);
      return isChanging;
    }
    else {
      return false;
    }
  },

  isCopyCellChanging(nextProps: any): boolean {
    var copied = this.props.cellMetaData.copied;
    var nextCopied = nextProps.cellMetaData.copied;

    if (copied) {
      return (nextCopied && this.props.idx ===  nextCopied.idx)
          || (copied && this.props.idx === copied.idx);
    }
    else {
      return false;
    }
  },

  isDraggedOverUpwards(): boolean {
    var dragged = this.props.cellMetaData.dragged;
    return !this.isSelected() && this.isDraggedOver() && this.props.rowIdx < dragged.rowIdx;
  },

  isDraggedOverDownwards(): boolean {
    var dragged = this.props.cellMetaData.dragged;
    return !this.isSelected() && this.isDraggedOver() && this.props.rowIdx > dragged.rowIdx;
  },

  getValue(props = this.props) {
    var { key } = props.column
      , row = props.rowData;

    if (key === 'select-row')
      return props.isRowSelected;
    else if (isFunction(row.get))
      return row.get(key);
    else
      return row[key];
  },
});

var SimpleCellFormatter = React.createClass({
  render(): ?ReactElement {
    // objects like dates will throw when specified as children
    // so cast to a string
    return <span>{'' + this.props.value}</span>
  },

  shouldComponentUpdate(nextProps: any): boolean {
    return nextProps.value !== this.props.value;
  }
})

module.exports = Cell;
