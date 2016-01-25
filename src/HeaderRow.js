/* @flow */
/**
 * @jsx React.DOM
 */
"use strict";

var React             = require('react');
var PropTypes         = React.PropTypes;
var shallowEqual      = require('fbjs/lib/shallowEqual');
var HeaderCell        = require('./HeaderCell');
var getScrollbarSize  = require('./getScrollbarSize');
var ColumnUtilsMixin  = require('./ColumnUtils');
var SortableHeaderCell    = require('./addons/cells/headerCells/SortableHeaderCell');

var HeaderRowStyle  = {
  overflow: React.PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: React.PropTypes.number,
  position: React.PropTypes.string
};


type SortType = {ASC: string; DESC: string};

function objectOf(propType) {
  return function (props, name, ...args) {
    let obj = props[name] || {}
    let invalid = Object.keys(obj)
      .some(k => propType(obj, k, ...args))

    if (invalid) return new Error('Invalid object key')
  }
}

const DEFINE_SORT = {
  ASC : 'ASC',
  DESC : 'DESC',
  NONE  : 'NONE'
}

var HeaderRow = React.createClass({

  propTypes: {
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.number.isRequired,
    columns:  PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    onColumnResize: PropTypes.func,
    onSort: PropTypes.func.isRequired,
    sortInfo: objectOf(
      PropTypes.oneOf(Object.keys(DEFINE_SORT).map(k => DEFINE_SORT[k]))
    ),
    style: PropTypes.shape(HeaderRowStyle)

  },

  mixins: [ColumnUtilsMixin],

  render(): ?ReactElement {
    var cellsStyle = {
      width: this.props.width ? (this.props.width + getScrollbarSize()) : '100%',
      height: this.props.height,
      whiteSpace: 'nowrap',
      overflowX: 'hidden',
      overflowY: 'hidden'
    };

    var cells = this.getCells();
    return (
      <div {...this.props}  className="react-grid-HeaderRow">
        <div style={cellsStyle}>
          {cells}
        </div>
      </div>
    );
  },

  getHeaderRenderer(column) {
    if (column.sortable) {
      var sortDirection = (this.props.sortInfo || {})[column.key] || DEFINE_SORT.NONE
      return <SortableHeaderCell columnKey={column.key} onSort={this.props.onSort} sortDirection={sortDirection}/>;
    }
    else {
      return this.props.headerCellRenderer || column.headerRenderer || this.props.cellRenderer;
    }
  },

  getCells(): Array<HeaderCell> {
    var cells = [];
    var lockedCells = [];

    for (var i = 0, len = this.getSize(this.props.columns); i < len; i++) {
      var column = this.getColumn(this.props.columns, i);
      var cell = (
        <HeaderCell
          ref={i}
          key={i}
          height={this.props.height}
          column={column}
          renderer={this.getHeaderRenderer(column)}
          resizing={this.props.resizing === column}
          onResize={this.props.onColumnResize}
          onResizeEnd={this.props.onColumnResizeEnd}
          />
      );
      if (column.locked) {
        lockedCells.push(cell);
      }
      else {
        cells.push(cell);
      }
    }

    return cells.concat(lockedCells);
  },

  setScrollLeft(scrollLeft: number) {
    this.props.columns.forEach( (column, i) => {
      if (column.locked) {
        this.refs[i].setScrollLeft(scrollLeft);
      }
    });
  },


  shouldComponentUpdate(nextProps: {
    width: ?(number | string);
    height: number;
    columns: Array<ExcelColumn>;
    style: ?HeaderRowStyle;
    onColumnResize: ?any}
  ) : boolean {
    return (
      nextProps.width !== this.props.width
      || nextProps.height !== this.props.height
      || nextProps.columns !== this.props.columns
      || !shallowEqual(nextProps.style, this.props.style)
      || this.props.sortInfo != nextProps.sortInfo
    );
  },

  getStyle(): HeaderRowStyle {
    return {
      overflow: 'hidden',
      width: '100%',
      height: this.props.height,
      position: 'absolute'
    };
  }

});

HeaderRow.SORT = DEFINE_SORT;

module.exports = HeaderRow;
