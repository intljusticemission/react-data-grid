/* @flow */
"use strict";
var React               = require('react');
var ReactDOM            = require('react-dom');
var joinClasses         = require('classnames');
var shallowCloneObject  = require('./shallowCloneObject');
var ColumnMetrics       = require('./ColumnMetrics');
var ColumnUtils         = require('./ColumnUtils');
var HeaderRow           = require('./HeaderRow');

type Column = {
  width: number
}

var Header = React.createClass({
  propTypes: {
    columnMetrics: React.PropTypes.shape({  width: React.PropTypes.number.isRequired }).isRequired,
    totalWidth: React.PropTypes.number,
    height: React.PropTypes.number.isRequired,
    headerRows: React.PropTypes.array.isRequired,
    sortInfo: HeaderRow.propTypes.sortInfo
  },

  render(): ?ReactElement {
    var className = joinClasses({
      'react-grid-Header': true,
      'react-grid-Header--resizing': !!this.state.resizing
    });

    var headerRows = this.getHeaderRows();

    return (
      <div {...this.props} style={this.getStyle()} className={className}>
        {headerRows}
      </div>
    );
  },

  shouldComponentUpdate : function(nextProps: any, nextState: any): boolean {
    var update =  !(ColumnMetrics.sameColumns(
      this.props.columnMetrics.columns,
      nextProps.columnMetrics.columns, ColumnMetrics.sameColumn)
    )
    || this.props.totalWidth != nextProps.totalWidth
    || (this.props.headerRows.length != nextProps.headerRows.length)
    || (this.state.resizing != nextState.resizing)
    || this.props.sortInfo != nextProps.sortInfo;
    return update;
  },

  getHeaderRows(): Array<HeaderRow> {
    var columnMetrics = this.getColumnMetrics();
    var resizeColumn;
    if (this.state.resizing) {
      resizeColumn = this.state.resizing.column;
    }
    var headerRows = [];
    this.props.headerRows.forEach((row, index) => {
      var headerRowStyle = {
        position: 'absolute',
        top: this.getCombinedHeaderHeights(index),
        left: 0,
        width: this.props.totalWidth,
        overflow : 'hidden'
      };

      headerRows.push(
        <HeaderRow
          key={row.ref}
          ref={row.ref}
          style={headerRowStyle}
          onColumnResize={this.onColumnResize}
          onColumnResizeEnd={this.onColumnResizeEnd}
          width={columnMetrics.width}
          height={row.height || this.props.height}
          columns={columnMetrics.columns}
          resizing={resizeColumn}
          headerCellRenderer={row.headerCellRenderer}
          sortInfo={this.props.sortInfo}
          onSort={this.props.onSort}
        />
      )
    });
    return headerRows;
  },

  getInitialState(): {resizing: any} {
    return { resizing: null };
  },

  componentWillReceiveProps() {
    this.setState({ resizing: null });
  },

  onColumnResize(column: Column, width: number) {
    var state = this.state.resizing || this.props;

    var pos = this.getColumnPosition(column);

    if (pos != null) {
      var resizing = {
        columnMetrics: shallowCloneObject(state.columnMetrics)
      };
      resizing.columnMetrics = ColumnMetrics.resizeColumn(
          resizing.columnMetrics, pos, width);

      // we don't want to influence scrollLeft while resizing
      if (resizing.columnMetrics.totalWidth < state.columnMetrics.totalWidth) {
        resizing.columnMetrics.totalWidth = state.columnMetrics.totalWidth;
      }

      resizing.column = ColumnUtils.getColumn(resizing.columnMetrics.columns, pos);
      this.setState({ resizing });
    }
  },

  getColumnMetrics() {
    var columnMetrics;
    if (this.state.resizing) {
      columnMetrics = this.state.resizing.columnMetrics;
    }
    else {
      columnMetrics = this.props.columnMetrics;
    }
    return columnMetrics;
  },

  getColumnPosition(column: Column): ?number {
    var columnMetrics = this.getColumnMetrics();
    var pos = -1;
    columnMetrics.columns.forEach((c, idx) => {
      if (c.key === column.key) {
        pos = idx;
      }
    });
    return pos === -1 ? null : pos;
  },

  onColumnResizeEnd(column: Column, width: number) {
    var pos = this.getColumnPosition(column);
    if (pos !== null && this.props.onColumnResize) {
      this.props.onColumnResize(pos, width || column.width);
    }
  },

  setScrollLeft(scrollLeft: number) {
    var node = ReactDOM.findDOMNode(this.refs.row);
    node.scrollLeft = scrollLeft;
    this.refs.row.setScrollLeft(scrollLeft);
    if (this.refs.filterRow) {
      var nodeFilters = ReactDOM.findDOMNode(this.refs.filterRow);
      nodeFilters.scrollLeft = scrollLeft;
      this.refs.filterRow.setScrollLeft(scrollLeft);
    }
  },

  getCombinedHeaderHeights(until: ?number): number {
    var stop_at = this.props.headerRows.length;
    if (typeof until != 'undefined')
      stop_at = until;

    var height = 0;
    for (var index = 0; index < stop_at; index++) {
      height += this.props.headerRows[index].height || this.props.height;
    }
    return height;
  },

  getStyle(): {position: string; height: number} {
    return {
      position: 'relative',
      height: this.getCombinedHeaderHeights(),
      overflow : 'hidden'
    };
  },
});


module.exports = Header;
