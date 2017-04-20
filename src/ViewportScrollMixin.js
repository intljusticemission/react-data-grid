var PropTypes = require('prop-types');
/* TODO@flow mixins */

var React = require('react');
var ReactDOM = require('react-dom');
var DOMMetrics = require('./DOMMetrics');
var getScrollbarSize = require('./getScrollbarSize');
var min   = Math.min;
var max   = Math.max;
var floor = Math.floor;
var ceil  = Math.ceil;

type ViewportScrollState = {
  displayStart: number;
  displayEnd: number;
  height: number;
  scrollTop: number;
  scrollLeft: number;
};

module.exports = {
  mixins: [DOMMetrics.MetricsMixin],

  DOMMetrics: {
    viewportHeight(): number {
      return ReactDOM.findDOMNode(this).offsetHeight;
    }
  },

  propTypes: {
    rowHeight: PropTypes.number,
    rowsCount: PropTypes.number.isRequired
  },

  getDefaultProps(): { rowHeight: number } {
    return {
      rowHeight: 30
    };
  },

  getInitialState(): ViewportScrollState {
    return this.getGridState(this.props);
  },

  getGridState(props: {rowHeight: number; rowsCount: number; minHeight: number}): ViewportScrollState  {
    var renderedRowsCount = ceil((props.minHeight - props.rowHeight) / props.rowHeight);
    var totalRowCount = min(renderedRowsCount * 2, props.rowsCount);
    return {
      displayStart: 0,
      displayEnd: totalRowCount,
      height: props.minHeight,
      scrollTop: 0,
      scrollLeft: 0
    };
  },

  scrollToCell([x, y], props = this.props) {
    let { rowHeight, rowsCount, columnMetrics } = props;
    let { columns, totalWidth: width } = columnMetrics;
    let { height, scrollTop, scrollLeft } = this.state;


    let cellTop = Math.min(y, rowsCount) * rowHeight
      , scrollBar = columnMetrics.width > columnMetrics.totalWidth
          ? getScrollbarSize() : 0

    cellTop = cellTop < scrollTop // moving up
      ? cellTop
      : (cellTop + rowHeight) > (scrollTop + height)// moving down
          ? cellTop + rowHeight - height + scrollBar
          : null

    let column = columns[x]
    let cellLeft = column.locked ? 0 : column.left

    let lockedLeft = columns
      .filter(c => c.locked)
      .reduce((left, c) => left + c.width, 0)

    cellLeft = cellLeft < (scrollLeft + lockedLeft) // moving left
      ? Math.max(0, cellLeft - lockedLeft)
      : (cellLeft + column.width) > (scrollLeft + width) //moving right
        ? (cellLeft + column.width) - width
        : null

    return { scrollTop: cellTop, scrollLeft: cellLeft }
  },

  updateScroll(scrollTop: number, scrollLeft: number, height: number, rowHeight: number, length: number) {
    var renderedRowsCount = ceil(height / rowHeight);

    var visibleStart = floor(scrollTop / rowHeight);

    var visibleEnd = min(
        visibleStart + renderedRowsCount,
        length);

    var displayStart = max(
        0,
        visibleStart - renderedRowsCount * 2);

    var displayEnd = min(
        visibleStart + renderedRowsCount * 2,
        length);

    var nextScrollState = {
      visibleStart,
      visibleEnd,
      displayStart,
      displayEnd,
      height,
      scrollTop,
      scrollLeft
    };

    this.setState(nextScrollState);
  },

  metricsUpdated() {
    var height = this.DOMMetrics.viewportHeight();
    if (height) {
      this.updateScroll(
        this.state.scrollTop,
        this.state.scrollLeft,
        height,
        this.props.rowHeight,
        this.props.rowsCount
      );
    }
  },

  componentWillReceiveProps(nextProps: { rowHeight: number; rowsCount: number }) {
    if (this.props.rowHeight !== nextProps.rowHeight ||
        this.props.minHeight !== nextProps.minHeight) {
      this.setState(this.getGridState(nextProps));
    }
    else if (this.props.rowsCount !== nextProps.rowsCount) {
      this.updateScroll(
        this.state.scrollTop,
        this.state.scrollLeft,
        this.state.height,
        nextProps.rowHeight,
        nextProps.rowsCount
      );
    }
  }
};
