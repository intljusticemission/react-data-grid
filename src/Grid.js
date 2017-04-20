/* @flow */
"use strict";

var PropTypes = require('prop-types');
var React                = require('react');
var Header               = require('./Header');
var Viewport             = require('./Viewport');
var GridScrollMixin      = require('./GridScrollMixin');
var DOMMetrics           = require('./DOMMetrics');

var Grid = React.createClass({

  propTypes: {
    rowGetter: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
    columns:  PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    minHeight: PropTypes.number,
    headerRows: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
    rowHeight: PropTypes.number,
    rowRenderer: PropTypes.func,
    emptyRowsView: PropTypes.func,
    expandedRows: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
    selectedRows: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
    rowsCount: PropTypes.number,
    onRows: PropTypes.func,
    sortInfo: Header.propTypes.sortInfo,
    rowOffsetHeight: PropTypes.number.isRequired,
    onViewportKeydown : PropTypes.func.isRequired,
    onViewportDragStart : PropTypes.func.isRequired,
    onViewportDragEnd : PropTypes.func.isRequired,
    onViewportDoubleClick : PropTypes.func.isRequired
  },

  mixins: [
    GridScrollMixin,
    DOMMetrics.MetricsComputatorMixin
  ],


  getStyle: function(): { overflow: string; outline: number; position: string; minHeight: number } {
    return{
      overflow: 'hidden',
      outline: 0,
      position: 'relative',
      minHeight: this.props.minHeight
    }
  },

  render(): ?ReactElement {
    var headerRows = this.props.headerRows || [{ ref : 'row' }];
    var EmptyRowsView = this.props.emptyRowsView;

    return (
      <div {...this.props} style={this.getStyle()} className="react-grid-Grid">
        <Header
          ref="header"
          columnMetrics={this.props.columnMetrics}
          onColumnResize={this.props.onColumnResize}
          height={this.props.rowHeight}
          totalWidth={this.props.totalWidth}
          headerRows={headerRows}
          sortInfo={this.props.sortInfo}
          onSort={this.props.onSort}
        />
        { this.props.rowsCount >= 1 || (this.props.rowsCount === 0 && !this.props.emptyRowsView)
            ?
              <div
                tabIndex='-1'
                ref="viewPortContainer"
                onKeyDown={this.props.onViewportKeydown}
                onDoubleClick={this.props.onViewportDoubleClick}
                onDragStart={this.props.onViewportDragStart}
                onDragEnd={this.props.onViewportDragEnd}
              >
                <Viewport
                  ref="viewport"
                  width={this.props.columnMetrics.width}
                  getRowKey={this.props.getRowKey}
                  rowHeight={this.props.rowHeight}
                  rowRenderer={this.props.rowRenderer}
                  rowGetter={this.props.rowGetter}
                  rowsCount={this.props.rowsCount}
                  selectedRows={this.props.selectedRows}
                  expandedRows={this.props.expandedRows}
                  columnMetrics={this.props.columnMetrics}
                  totalWidth={this.props.totalWidth}
                  onScroll={this.onScroll}
                  onRows={this.props.onRows}
                  cellMetaData={this.props.cellMetaData}
                  rowOffsetHeight={this.props.rowOffsetHeight || this.props.rowHeight * headerRows.length}
                  minHeight={this.props.minHeight}
                />
            </div>
          :
            <div ref="emptyView" className="react-grid-Empty">
                <EmptyRowsView />
            </div>
        }
      </div>
    );
  },

  focus() {
    this.refs.viewPortContainer.focus();
  },

  getDefaultProps() {
    return {
      rowHeight: 35,
      minHeight: 350
    };
  }
});

module.exports = Grid;
