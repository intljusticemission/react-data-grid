/* @flow */
'use strict';

var React = require('react');
var Canvas = require('./Canvas');
var PropTypes = React.PropTypes;
var colUtils = require('./ColumnUtils')
var ViewportScroll = require('./ViewportScrollMixin');



var Viewport = React.createClass({
  mixins: [ViewportScroll],

  propTypes: {
    rowOffsetHeight: PropTypes.number.isRequired,
    totalWidth: PropTypes.number.isRequired,
    columnMetrics: PropTypes.object.isRequired,
    rowGetter: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
    selectedRows: PropTypes.array,
    expandedRows: PropTypes.array,
    rowRenderer: PropTypes.func,
    rowsCount: PropTypes.number.isRequired,
    rowHeight: PropTypes.number.isRequired,
    onRows: PropTypes.func,
    onScroll: PropTypes.func,
    minHeight : PropTypes.number
  },

  componentWillReceiveProps(nextProps) {
    let { cellMetaData, columnMetrics } = nextProps;
    let { selected: { rowIdx, idx }} = cellMetaData
    let column = colUtils.getColumn(columnMetrics.columns, idx)

    if (idx !== -1 && !column.locked && this.selectedCellChanged(cellMetaData)) {
      let { scrollTop, scrollLeft } = this.scrollToCell([idx, rowIdx], nextProps)

      cancelAnimationFrame(this._raf)
      this._raf = requestAnimationFrame(() => {
        if (this.isMounted())
          this.refs.canvas.setScroll(scrollTop, scrollLeft)
      })
    }
  },

  render(): ?ReactElement {
    var style = {
      padding: 0,
      bottom: 0,
      left: 0,
      right: 0,
      overflow: 'hidden',
      position: 'absolute',
      top: this.props.rowOffsetHeight
    };
    return (
      <div
        className="react-grid-Viewport"
        style={style}>
        <Canvas
          ref="canvas"
          totalWidth={this.props.totalWidth}
          width={this.props.columnMetrics.width}
          rowGetter={this.props.rowGetter}
          rowsCount={this.props.rowsCount}
          selectedRows={this.props.selectedRows}
          expandedRows={this.props.expandedRows}
          columns={this.props.columnMetrics.columns}
          rowRenderer={this.props.rowRenderer}
          visibleStart={this.state.visibleStart}
          visibleEnd={this.state.visibleEnd}
          displayStart={this.state.displayStart}
          displayEnd={this.state.displayEnd}
          cellMetaData={this.props.cellMetaData}
          height={this.state.height}
          rowHeight={this.props.rowHeight}
          onScroll={this.onScroll}
          onRows={this.props.onRows}
          />
      </div>
    );
  },

  getScroll(): {scrollLeft: number; scrollTop: number} {
    return this.refs.canvas.getScroll();
  },

  onScroll(scroll: {scrollTop: number; scrollLeft: number}) {
    this.updateScroll(
      scroll.scrollTop, scroll.scrollLeft,
      this.state.height,
      this.props.rowHeight,
      this.props.rowsCount
    );

    if (this.props.onScroll) {
      this.props.onScroll({ scrollTop: scroll.scrollTop, scrollLeft: scroll.scrollLeft });
    }
  },

  setScrollLeft(scrollLeft: number) {
    this.refs.canvas.setScrollLeft(scrollLeft);
  },

  selectedCellChanged(cellMetaData) {
    let oldMeta = this.props.cellMetaData;
    return oldMeta.selected.rowIdx !== cellMetaData.selected.rowIdx
        || oldMeta.selected.idx !== cellMetaData.selected.idx
  },
});

module.exports = Viewport;
