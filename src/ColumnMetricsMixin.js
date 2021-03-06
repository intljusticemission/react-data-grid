/* TODO@flow mixins */

var ColumnMetrics        = require('./ColumnMetrics');
var DOMMetrics           = require('./DOMMetrics');
var PropTypes            = require('react').PropTypes;
var ColumnUtils = require('./ColumnUtils');
var ReactDOM = require('react-dom');

type ColumnMetricsType = {
    columns: Array<Column>;
    totalWidth: number;
    minColumnWidth: number;
};

class Column {
  key: string;
  left: number;
  width: number;
}

module.exports = {
  mixins: [DOMMetrics.MetricsMixin],

  propTypes: {
    columns: PropTypes.arrayOf(Column),
    minColumnWidth: PropTypes.number,
    columnEquality: PropTypes.func
  },

  DOMMetrics: {
    gridWidth(): number {
      return ReactDOM.findDOMNode(this).parentElement.offsetWidth;
    }
  },

  getDefaultProps(): {minColumnWidth: number; columnEquality: (a: Column, b: Column) => boolean}  {
    return {
      minColumnWidth: 80,
      columnEquality: ColumnMetrics.sameColumn
    };
  },

  componentWillMount() {
    this._mounted = true;
  },

  componentWillReceiveProps(nextProps: ColumnMetricsType) {
    if (nextProps.columns) {
      if (!ColumnMetrics.sameColumns(this.props.columns, nextProps.columns, this.props.columnEquality) ||
          nextProps.minWidth !== this.props.minWidth) {
        var columnMetrics = this.createColumnMetrics(nextProps);
        this.setState({ columnMetrics: columnMetrics });
      }
    }
  },

  getTotalWidth() {
    var totalWidth = 0;
    // avoid the warning about checking in render
    if (this._mounted) {
      totalWidth = this.DOMMetrics.gridWidth();
    }
    else {
      totalWidth = ColumnUtils.getSize(this.props.columns) * this.props.minColumnWidth;
    }
    return totalWidth;
  },

  getColumnMetricsType(metrics: ColumnMetricsType): { columns: ColumnMetricsType } {
    var totalWidth = metrics.totalWidth || this.getTotalWidth();
    var currentMetrics = {
      columns: metrics.columns,
      totalWidth: totalWidth,
      minColumnWidth: metrics.minColumnWidth
    };
    var updatedMetrics = ColumnMetrics.recalculate(currentMetrics);
    return updatedMetrics;
  },

  getColumn(idx) {
    var columns = this.state.columnMetrics.columns;
    if (Array.isArray(columns)) {
      return columns[idx];
    }
    else if (typeof Immutable !== 'undefined') {
      return columns.get(idx);
    }
  },

  getSize() {
    var columns = this.state.columnMetrics.columns;
    if (Array.isArray(columns)) {
      return columns.length;
    }
    else if (typeof Immutable !== 'undefined') {
      return columns.size;
    }
  },

  metricsUpdated() {
    var columnMetrics = this.createColumnMetrics();
    this.setState({ columnMetrics });
  },

  createColumnMetrics(props = this.props) {
    var gridColumns = this.setupGridColumns(props);
    return this.getColumnMetricsType({
      columns:gridColumns,
      minColumnWidth: props.minColumnWidth,
      totalWidth: props.minWidth
    });
  },

  onColumnResize(index: number, width: number) {
    var columnMetrics = ColumnMetrics.resizeColumn(this.state.columnMetrics, index, width);
    this.setState({ columnMetrics });
  }
};
