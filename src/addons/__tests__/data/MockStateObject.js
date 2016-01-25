module.exports = function (stateValues) {
  return Object.assign({
    columnMetrics: {
      columns: [{
        key: 'id',
        name: 'ID',
        width: 100,
        left: 0
      }, {
        key: 'title',
        name: 'Title',
        width: 100,
        left: 100
      }, {
        key: 'count',
        name: 'Count',
        width: 100,
        left: 200
      }],
      width: 300,
      totalWidth: 0,
      minColumnWidth: 80
    },
    selected: {
      rowIdx: 0,
      idx: 0,
      active: false
    },
    copied: null,
    canFilter: false,
    expandedRows: [],
    columnFilters: {},
    dragged: null,
    scrollOffset: 0
  }, stateValues);
};
