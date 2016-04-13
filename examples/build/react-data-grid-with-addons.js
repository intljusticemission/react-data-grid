(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactDataGrid"] = factory(require("react"), require("react-dom"));
	else
		root["ReactDataGrid"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(1);
	module.exports.Editors = __webpack_require__(74);
	module.exports.Formatters = __webpack_require__(76);
	module.exports.Toolbar = __webpack_require__(78);
	module.exports.Row = __webpack_require__(48);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	
	"use strict";

	var _extends = __webpack_require__(2)['default'];

	var React = __webpack_require__(18);
	var ReactDOM = __webpack_require__(19);
	var uncontrollable = __webpack_require__(20);
	var BaseGrid = __webpack_require__(25);
	var KeyboardHandlerMixin = __webpack_require__(52);
	var CheckboxEditor = __webpack_require__(70);
	var FilterableHeaderCell = __webpack_require__(71);
	var DOMMetrics = __webpack_require__(68);
	var ColumnMetricsMixin = __webpack_require__(72);
	var RowUtils = __webpack_require__(73);
	var ColumnUtils = __webpack_require__(31);
	var SORT_TYPES = __webpack_require__(33).SORT;

	var notify = function notify(handler) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }

	  return handler && handler.apply(undefined, args);
	};

	var ReactDataGrid = React.createClass({
	  displayName: 'ReactDataGrid',

	  propTypes: {
	    rowHeight: React.PropTypes.number.isRequired,
	    headerRowHeight: React.PropTypes.number,
	    minHeight: React.PropTypes.number.isRequired,
	    minWidth: React.PropTypes.number,

	    enableCellSelect: React.PropTypes.bool,
	    enableRowSelect: React.PropTypes.bool,

	    /**
	     * A column definition for the "select row" cell
	     */
	    selectRowColumn: React.PropTypes.object,
	    selectRowIndex: React.PropTypes.number,

	    onRowUpdated: React.PropTypes.func,
	    rowGetter: React.PropTypes.func.isRequired,
	    rowsCount: React.PropTypes.number.isRequired,
	    toolbar: React.PropTypes.element,
	    columns: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]).isRequired,
	    sortType: React.PropTypes.oneOf(['simple', 'multiple']),
	    onFilter: React.PropTypes.func,
	    onGridSort: React.PropTypes.func,
	    onSelectRow: React.PropTypes.func,
	    onSelectCell: React.PropTypes.func,
	    onCellCopyPaste: React.PropTypes.func,
	    onCellsDragged: React.PropTypes.func,
	    onAddFilter: React.PropTypes.func
	  },

	  mixins: [ColumnMetricsMixin, DOMMetrics.MetricsComputatorMixin, KeyboardHandlerMixin],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      enableCellSelect: false,
	      tabIndex: -1,
	      rowHeight: 35,
	      enableRowSelect: false,
	      minHeight: 350,
	      sortType: 'simple',
	      selectedRows: []
	    };
	  },

	  getInitialState: function getInitialState() {
	    var columnMetrics = this.createColumnMetrics();
	    var initialState = _extends({
	      columnMetrics: columnMetrics
	    }, this.getSelectedState(this.props), {
	      copied: null,
	      expandedRows: [],
	      canFilter: false,
	      columnFilters: {},
	      dragged: null,
	      scrollOffset: 0
	    });

	    return initialState;
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.setState(this.getSelectedState(nextProps));
	    if (nextProps.rowsCount === this.props.rowsCount + 1) {
	      this.onAfterAddRow(nextProps.rowsCount + 1);
	    }
	  },

	  getSelectedState: function getSelectedState(props) {
	    var active = props.active;
	    var _props$selectedCell = props.selectedCell;
	    _props$selectedCell = _props$selectedCell === undefined ? [0, 0] : _props$selectedCell;
	    var idx = _props$selectedCell[0];
	    var rowIdx = _props$selectedCell[1];

	    if (!this.props.enableCellSelect) idx = rowIdx = -1;

	    var selected = {
	      idx: idx,
	      rowIdx: rowIdx,
	      active: !!active
	    };

	    if (active && active !== true) selected.initialKeyCode = active;

	    return { selected: selected };
	  },

	  componentDidMount: function componentDidMount() {
	    var scrollOffset = 0;
	    var canvas = ReactDOM.findDOMNode(this).querySelector('.react-grid-Canvas');
	    if (canvas != null) {
	      scrollOffset = canvas.offsetWidth - canvas.clientWidth;
	    }
	    this.setState({ scrollOffset: scrollOffset });
	  },

	  render: function render() {
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
	    };

	    var toolbar = this.renderToolbar();
	    var containerWidth = this.props.minWidth || this.DOMMetrics.gridWidth();
	    var gridWidth = containerWidth - this.state.scrollOffset;

	    //if NaN without coercion
	    if (gridWidth !== gridWidth) gridWidth = 0;

	    return React.createElement(
	      'div',
	      { className: 'react-grid-Container', style: { width: containerWidth } },
	      toolbar,
	      React.createElement(
	        'div',
	        { className: 'react-grid-Main' },
	        React.createElement(BaseGrid, _extends({
	          ref: 'base'
	        }, this.props, {
	          headerRows: this.getHeaderRows(),
	          columnMetrics: this.state.columnMetrics,
	          rowGetter: this.props.rowGetter,
	          rowsCount: this.props.rowsCount,
	          rowHeight: this.props.rowHeight,
	          cellMetaData: cellMetaData,
	          selectedRows: this.props.selectedRows,
	          expandedRows: this.state.expandedRows,
	          rowOffsetHeight: this.getRowOffsetHeight(),
	          sortInfo: this.props.sortInfo,
	          onSort: this.handleSort,
	          minHeight: this.props.minHeight,
	          totalWidth: gridWidth,
	          onViewportKeydown: this.onKeyDown,
	          onViewportDragStart: this.onDragStart,
	          onViewportDragEnd: this.handleDragEnd,
	          onViewportDoubleClick: this.onViewportDoubleClick,
	          onColumnResize: this.onColumnResize
	        }))
	      )
	    );
	  },

	  renderToolbar: function renderToolbar() {
	    var Toolbar = this.props.toolbar;
	    if (React.isValidElement(Toolbar)) {
	      return React.cloneElement(Toolbar, { onToggleFilter: this.onToggleFilter, numberOfRows: this.props.rowsCount });
	    }
	  },

	  focus: function focus() {
	    this.refs.base.focus();
	  },

	  onSelect: function onSelect(selected) {
	    var old = this.state.selected;

	    if (this.props.enableCellSelect) {
	      if (!(old.rowIdx === selected.rowIdx && old.idx === selected.idx && old.active === true)) {
	        var idx = selected.idx;
	        var rowIdx = selected.rowIdx;
	        if (idx >= 0 && rowIdx >= 0 && idx < ColumnUtils.getSize(this.state.columnMetrics.columns) && rowIdx < this.props.rowsCount) {
	          this.setInactive();
	          notify(this.props.onSelectCell, [idx, rowIdx], [old.idx, old.rowIdx]);
	        }
	      }
	    }
	  },

	  onCellClick: function onCellClick(cell) {
	    this.onSelect({ rowIdx: cell.rowIdx, idx: cell.idx });
	  },

	  onCellDoubleClick: function onCellDoubleClick(cell) {
	    this.onSelect({ rowIdx: cell.rowIdx, idx: cell.idx });
	    this.setActive('Enter');
	  },

	  onViewportDoubleClick: function onViewportDoubleClick() {
	    this.setActive();
	  },

	  onPressArrowUp: function onPressArrowUp(e) {
	    this.moveSelectedCell(e, -1, 0);
	  },

	  onPressArrowDown: function onPressArrowDown(e) {
	    this.moveSelectedCell(e, 1, 0);
	  },

	  onPressArrowLeft: function onPressArrowLeft(e) {
	    this.moveSelectedCell(e, 0, -1);
	  },

	  onPressArrowRight: function onPressArrowRight(e) {
	    this.moveSelectedCell(e, 0, 1);
	  },

	  onPressTab: function onPressTab(e) {
	    this.moveSelectedCell(e, 0, e.shiftKey ? -1 : 1);
	  },

	  onPressEnter: function onPressEnter(e) {
	    this.setActive(e.key);
	  },

	  onPressDelete: function onPressDelete(e) {
	    this.setActive(e.key);
	  },

	  onPressEscape: function onPressEscape(e) {
	    if (this.isActive()) {
	      this.setInactive(e.key);
	    } else if (this.state.copied) {
	      this.setState({ copied: null });
	    }
	  },

	  onPressBackspace: function onPressBackspace(e) {
	    this.setActive(e.key);
	  },

	  onPressChar: function onPressChar(e) {
	    if (this.isKeyPrintable(e.keyCode)) {
	      this.setActive(e.keyCode);
	    }
	  },

	  onPressKeyWithCtrl: function onPressKeyWithCtrl(e) {
	    var keys = {
	      KeyCode_c: 99,
	      KeyCode_C: 67,
	      KeyCode_V: 86,
	      KeyCode_v: 118
	    };

	    var _state$selected = this.state.selected;
	    var rowIdx = _state$selected.rowIdx;
	    var idx = _state$selected.idx;

	    if (this.canEdit(idx, rowIdx)) {
	      if (e.keyCode == keys.KeyCode_c || e.keyCode == keys.KeyCode_C) {
	        var value = this.getSelectedValue();
	        this.handleCopy({ value: value });
	      } else if (e.keyCode == keys.KeyCode_v || e.keyCode == keys.KeyCode_V) {
	        this.handlePaste();
	      }
	    }
	  },

	  onDragStart: function onDragStart(e) {
	    var value = this.getSelectedValue();
	    this.handleDragStart({ idx: this.state.selected.idx, rowIdx: this.state.selected.rowIdx, value: value });
	    //need to set dummy data for FF
	    if (e && e.dataTransfer && e.dataTransfer.setData) e.dataTransfer.setData('text/plain', 'dummy');
	  },

	  moveSelectedCell: function moveSelectedCell(e, rowDelta, cellDelta) {
	    // we need to prevent default as we control grid scroll
	    // otherwise it moves every time you left/right which is janky
	    e && e.preventDefault();
	    var rowIdx = this.state.selected.rowIdx + rowDelta;
	    var idx = this.state.selected.idx + cellDelta;
	    this.onSelect({ idx: idx, rowIdx: rowIdx });
	  },

	  getSelectedValue: function getSelectedValue() {
	    var rowIdx = this.state.selected.rowIdx;
	    var idx = this.state.selected.idx;
	    var cellKey = this.getColumn(idx).key;
	    var row = this.props.rowGetter(rowIdx);
	    return RowUtils.get(row, cellKey);
	  },

	  setActive: function setActive(keyPressed) {
	    var _state$selected2 = this.state.selected;
	    var rowIdx = _state$selected2.rowIdx;
	    var idx = _state$selected2.idx;

	    if (this.canEdit(idx, rowIdx) && !this.isActive()) {
	      notify(this.props.onActive, keyPressed || true);
	    }
	  },

	  setInactive: function setInactive() {
	    if (this.isActive()) {
	      notify(this.props.onActive, false);
	    }
	  },

	  canEdit: function canEdit(idx, rowIdx) {
	    var col = this.getColumn(idx);
	    var row = this.props.rowGetter(rowIdx);
	    if (this.props.enableCellSelect === true) {
	      if (col.editable === false) return false;
	      if (col.editable === true) return true;
	      if (typeof col.editable === 'function') return col.editable(row, rowIdx);

	      return col.editor != null;
	    }
	  },

	  copy: function copy() {
	    var _state$selected3 = this.state.selected;
	    var idx = _state$selected3.idx;
	    var rowIdx = _state$selected3.rowIdx;

	    if (this.canEdit(idx, rowIdx)) {
	      this.handleCopy({ value: this.getSelectedValue() });
	    }
	  },

	  paste: function paste() {
	    var _state$selected4 = this.state.selected;
	    var idx = _state$selected4.idx;
	    var rowIdx = _state$selected4.rowIdx;

	    if (this.canEdit(idx, rowIdx)) {
	      this.handlePaste();
	    }
	  },

	  isActive: function isActive() {
	    return this.state.selected.active === true;
	  },

	  onCellCommit: function onCellCommit(commit) {
	    this.setInactive();
	    if (commit.key === 'Tab') {
	      this.moveSelectedCell(null, 0, 1);
	    }

	    this.props.onRowUpdated(commit);
	  },

	  setupGridColumns: function setupGridColumns() {
	    var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	    var cols = props.columns.slice(0),
	        idx = props.selectRowIndex || 0;

	    if (props.enableRowSelect) {
	      var userProps = props.selectRowColumn;

	      var selectColumn = _extends({
	        formatter: React.createElement(CheckboxEditor, null),
	        filterable: false,
	        headerRenderer: React.createElement('input', { type: 'checkbox', onChange: this.handleCheckboxChange }),
	        width: 40,
	        locked: true
	      }, userProps, {
	        onCellChange: this.handleRowSelect,
	        key: 'select-row',
	        name: ''
	      });

	      cols.splice(idx, 0, selectColumn);
	    }
	    return cols;
	  },

	  handleCheckboxChange: function handleCheckboxChange(e) {
	    var selectedRows = [];
	    if (e.currentTarget instanceof HTMLInputElement && e.currentTarget.checked === true) {
	      for (var i = 0; i < this.props.rowsCount; i++) {
	        selectedRows.push(this.props.rowGetter(i));
	      }
	    }

	    this.props.onSelectRow(selectedRows);
	  },

	  // columnKey not used here as this function will select the whole row,
	  // but needed to match the function signature in the CheckboxEditor
	  handleRowSelect: function handleRowSelect(rowIdx, columnKey, e) {
	    var selectedRows = this.props.selectedRows.slice();
	    e.stopPropagation();

	    var row = this.props.rowGetter(rowIdx),
	        idx = selectedRows.indexOf(row);

	    if (idx !== -1) {
	      selectedRows.splice(idx, 1);
	    } else {
	      selectedRows.push(row);
	    }

	    this.props.onSelectRow(selectedRows);
	  },

	  onAfterAddRow: function onAfterAddRow(numberOfRows) {
	    var selected = this.state.selected;

	    notify(this.props.onSelectCell, [0, numberOfRows - 2], [selected.idx, selected.rowIdx]);
	  },

	  onToggleFilter: function onToggleFilter() {
	    this.setState({ canFilter: !this.state.canFilter });
	  },

	  getHeaderRows: function getHeaderRows() {
	    var rows = [{ ref: 'row', height: this.props.headerRowHeight || this.props.rowHeight }];
	    if (this.state.canFilter === true) {
	      rows.push({
	        ref: 'filterRow',
	        headerCellRenderer: React.createElement(FilterableHeaderCell, { onChange: this.props.onAddFilter, column: this.props.column }),
	        height: 45
	      });
	    }
	    return rows;
	  },

	  getRowOffsetHeight: function getRowOffsetHeight() {
	    var offsetHeight = 0;
	    this.getHeaderRows().forEach(function (row) {
	      return offsetHeight += parseFloat(row.height, 10);
	    });
	    return offsetHeight;
	  },

	  handleSort: function handleSort(columnKey, direction) {
	    var _props = this.props;
	    var sortInfo = _props.sortInfo;
	    var sortType = _props.sortType;

	    var existing = (sortInfo || {})[columnKey];

	    if (existing && existing === direction || !existing && direction === SORT_TYPES.NONE) {
	      return;
	    }

	    sortInfo = sortType === 'simple' ? {} : _extends({}, sortInfo);

	    if (direction === SORT_TYPES.NONE && sortInfo[columnKey]) delete sortInfo[columnKey];else sortInfo[columnKey] = direction;

	    this.props.onGridSort && this.props.onGridSort(sortInfo);
	  },

	  copyPasteEnabled: function copyPasteEnabled() {
	    return this.props.onCellCopyPaste !== null;
	  },

	  handleCopy: function handleCopy(_ref) {
	    var value = _ref.value;

	    if (!this.copyPasteEnabled()) return;
	    var textToCopy = value;
	    var selected = this.state.selected;
	    var copied = { idx: selected.idx, rowIdx: selected.rowIdx };
	    this.setState({ textToCopy: textToCopy, copied: copied });
	  },

	  handlePaste: function handlePaste() {
	    var selected = this.state.selected;

	    if (!this.copyPasteEnabled()) return;

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
	        toColumn: toKey
	      });
	    }
	    this.setState({ copied: null });
	  },

	  dragEnabled: function dragEnabled() {
	    return this.props.onCellsDragged !== null;
	  },

	  handleDragStart: function handleDragStart(dragged) {
	    if (!this.dragEnabled()) {
	      return;
	    }
	    var idx = dragged.idx;
	    var rowIdx = dragged.rowIdx;
	    if (idx >= 0 && rowIdx >= 0 && idx < this.getSize() && rowIdx < this.props.rowsCount) {
	      this.setState({ dragged: dragged });
	    }
	  },

	  handleDragEnter: function handleDragEnter(row) {
	    if (!this.dragEnabled()) return;
	    var dragged = this.state.dragged;
	    dragged.overRowIdx = row;
	    this.setState({ dragged: dragged });
	  },

	  handleDragEnd: function handleDragEnd() {
	    if (!this.dragEnabled()) return;

	    var fromRow, toRow;
	    var selected = this.state.selected;
	    var dragged = this.state.dragged;
	    var cellKey = this.getColumn(this.state.selected.idx).key;

	    fromRow = selected.rowIdx;
	    toRow = dragged.overRowIdx;
	    if (this.props.onCellsDragged) {
	      this.props.onCellsDragged({
	        cellKey: cellKey,
	        fromRow: fromRow,
	        toRow: toRow,
	        value: dragged.value
	      });
	    }
	    this.setState({ dragged: { complete: true } });
	  },

	  handleTerminateDrag: function handleTerminateDrag() {
	    if (!this.dragEnabled()) {
	      return;
	    }
	    this.setState({ dragged: null });
	  }

	});

	module.exports = uncontrollable(ReactDataGrid, {
	  active: 'onActive',
	  selectedCell: 'onSelectCell',
	  selectedRows: 'onSelectRow',
	  sortInfo: 'onGridSort'
	}, ['focus', 'copy', 'paste']);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$assign = __webpack_require__(3)["default"];

	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	exports.__esModule = true;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	module.exports = __webpack_require__(8).Object.assign;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(6);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(11)});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(7)
	  , core      = __webpack_require__(8)
	  , ctx       = __webpack_require__(9)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 7 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(10);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(12)
	  , toObject = __webpack_require__(13)
	  , IObject  = __webpack_require__(15);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(17)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 12 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(14);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(16);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createUncontrollable = __webpack_require__(21);

	var _createUncontrollable2 = _interopRequireDefault(_createUncontrollable);

	var mixin = {
	  shouldComponentUpdate: function shouldComponentUpdate() {
	    //let the forceUpdate trigger the update
	    return !this._notifying;
	  }
	};

	function set(component, propName, handler, value, args) {
	  if (handler) {
	    component._notifying = true;
	    handler.call.apply(handler, [component, value].concat(args));
	    component._notifying = false;
	  }

	  component._values[propName] = value;

	  if (component.isMounted()) component.forceUpdate();
	}

	exports['default'] = _createUncontrollable2['default']([mixin], set);
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = createUncontrollable;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(18);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(22);

	var utils = _interopRequireWildcard(_utils);

	function createUncontrollable(mixins, set) {

	  return uncontrollable;

	  function uncontrollable(Component, controlledValues) {
	    var methods = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

	    var displayName = Component.displayName || Component.name || 'Component',
	        basePropTypes = utils.getType(Component).propTypes,
	        propTypes;

	    propTypes = utils.uncontrolledPropTypes(controlledValues, basePropTypes, displayName);

	    methods = utils.transform(methods, function (obj, method) {
	      obj[method] = function () {
	        var _refs$inner;

	        return (_refs$inner = this.refs.inner)[method].apply(_refs$inner, arguments);
	      };
	    }, {});

	    var component = _react2['default'].createClass(_extends({

	      displayName: 'Uncontrolled(' + displayName + ')',

	      mixins: mixins,

	      propTypes: propTypes

	    }, methods, {

	      componentWillMount: function componentWillMount() {
	        var props = this.props,
	            keys = Object.keys(controlledValues);

	        this._values = utils.transform(keys, function (values, key) {
	          values[key] = props[utils.defaultKey(key)];
	        }, {});
	      },

	      /**
	       * If a prop switches from controlled to Uncontrolled
	       * reset its value to the defaultValue
	       */
	      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        var _this = this;

	        var props = this.props,
	            keys = Object.keys(controlledValues);

	        keys.forEach(function (key) {
	          if (utils.getValue(nextProps, key) === undefined && utils.getValue(props, key) !== undefined) {
	            _this._values[key] = nextProps[utils.defaultKey(key)];
	          }
	        });
	      },

	      render: function render() {
	        var _this2 = this;

	        var newProps = {};
	        var _props = this.props;
	        var valueLink = _props.valueLink;
	        var checkedLink = _props.checkedLink;

	        var props = _objectWithoutProperties(_props, ['valueLink', 'checkedLink']);

	        utils.each(controlledValues, function (handle, propName) {
	          var linkPropName = utils.getLinkName(propName),
	              prop = _this2.props[propName];

	          if (linkPropName && !isProp(_this2.props, propName) && isProp(_this2.props, linkPropName)) {
	            prop = _this2.props[linkPropName].value;
	          }

	          newProps[propName] = prop !== undefined ? prop : _this2._values[propName];

	          newProps[handle] = setAndNotify.bind(_this2, propName);
	        });

	        newProps = _extends({}, props, newProps, { ref: 'inner' });

	        return _react2['default'].createElement(Component, newProps);
	      }

	    }));

	    component.ControlledComponent = Component;

	    /**
	     * useful when wrapping a Component and you want to control
	     * everything
	     */
	    component.deferControlTo = function (newComponent, additions, nextMethods) {
	      if (additions === undefined) additions = {};

	      return uncontrollable(newComponent, _extends({}, controlledValues, additions), nextMethods);
	    };

	    return component;

	    function setAndNotify(propName, value) {
	      var linkName = utils.getLinkName(propName),
	          handler = this.props[controlledValues[propName]];

	      if (linkName && isProp(this.props, linkName) && !handler) {
	        handler = this.props[linkName].requestChange;
	      }

	      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        args[_key - 2] = arguments[_key];
	      }

	      set(this, propName, handler, value, args);
	    }

	    function isProp(props, prop) {
	      return props[prop] !== undefined;
	    }
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.customPropType = customPropType;
	exports.uncontrolledPropTypes = uncontrolledPropTypes;
	exports.getType = getType;
	exports.getValue = getValue;
	exports.getLinkName = getLinkName;
	exports.defaultKey = defaultKey;
	exports.chain = chain;
	exports.transform = transform;
	exports.each = each;
	exports.has = has;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(18);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(24);

	var _invariant2 = _interopRequireDefault(_invariant);

	function customPropType(handler, propType, name) {

	  return function (props, propName) {

	    if (props[propName] !== undefined) {
	      if (!props[handler]) {
	        return new Error('You have provided a `' + propName + '` prop to ' + '`' + name + '` without an `' + handler + '` handler. This will render a read-only field. ' + 'If the field should be mutable use `' + defaultKey(propName) + '`. Otherwise, set `' + handler + '`');
	      }

	      return propType && propType(props, propName, name);
	    }
	  };
	}

	function uncontrolledPropTypes(controlledValues, basePropTypes, displayName) {
	  var propTypes = {};

	  if (process.env.NODE_ENV !== 'production' && basePropTypes) {
	    transform(controlledValues, function (obj, handler, prop) {
	      var type = basePropTypes[prop];

	      _invariant2['default'](typeof handler === 'string' && handler.trim().length, 'Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable', displayName, prop);

	      obj[prop] = customPropType(handler, type, displayName);

	      if (type !== undefined) obj[defaultKey(prop)] = type;
	    }, propTypes);
	  }

	  return propTypes;
	}

	var version = _react2['default'].version.split('.').map(parseFloat);

	exports.version = version;

	function getType(component) {
	  if (version[0] >= 15 || version[0] === 0 && version[1] >= 13) return component;

	  return component.type;
	}

	function getValue(props, name) {
	  var linkPropName = getLinkName(name);

	  if (linkPropName && !isProp(props, name) && isProp(props, linkPropName)) return props[linkPropName].value;

	  return props[name];
	}

	function isProp(props, prop) {
	  return props[prop] !== undefined;
	}

	function getLinkName(name) {
	  return name === 'value' ? 'valueLink' : name === 'checked' ? 'checkedLink' : null;
	}

	function defaultKey(key) {
	  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
	}

	function chain(thisArg, a, b) {
	  return function chainedFunction() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    a && a.call.apply(a, [thisArg].concat(args));
	    b && b.call.apply(b, [thisArg].concat(args));
	  };
	}

	function transform(obj, cb, seed) {
	  each(obj, cb.bind(null, seed = seed || (Array.isArray(obj) ? [] : {})));
	  return seed;
	}

	function each(obj, cb, thisArg) {
	  if (Array.isArray(obj)) return obj.forEach(cb, thisArg);

	  for (var key in obj) if (has(obj, key)) cb.call(thisArg, obj[key], key, obj);
	}

	function has(o, k) {
	  return o ? Object.prototype.hasOwnProperty.call(o, k) : false;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)))

/***/ },
/* 23 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	
	"use strict";

	var _extends = __webpack_require__(2)['default'];

	var React = __webpack_require__(18);
	var PropTypes = React.PropTypes;
	var Header = __webpack_require__(26);
	var Viewport = __webpack_require__(45);
	var GridScrollMixin = __webpack_require__(69);
	var DOMMetrics = __webpack_require__(68);

	var Grid = React.createClass({
	  displayName: 'Grid',

	  propTypes: {
	    rowGetter: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
	    columns: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
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
	    onViewportKeydown: PropTypes.func.isRequired,
	    onViewportDragStart: PropTypes.func.isRequired,
	    onViewportDragEnd: PropTypes.func.isRequired,
	    onViewportDoubleClick: PropTypes.func.isRequired
	  },

	  mixins: [GridScrollMixin, DOMMetrics.MetricsComputatorMixin],

	  getStyle: function getStyle() {
	    return {
	      overflow: 'hidden',
	      outline: 0,
	      position: 'relative',
	      minHeight: this.props.minHeight
	    };
	  },

	  render: function render() {
	    var headerRows = this.props.headerRows || [{ ref: 'row' }];
	    var EmptyRowsView = this.props.emptyRowsView;

	    return React.createElement(
	      'div',
	      _extends({}, this.props, { style: this.getStyle(), className: 'react-grid-Grid' }),
	      React.createElement(Header, {
	        ref: 'header',
	        columnMetrics: this.props.columnMetrics,
	        onColumnResize: this.props.onColumnResize,
	        height: this.props.rowHeight,
	        totalWidth: this.props.totalWidth,
	        headerRows: headerRows,
	        sortInfo: this.props.sortInfo,
	        onSort: this.props.onSort
	      }),
	      this.props.rowsCount >= 1 || this.props.rowsCount === 0 && !this.props.emptyRowsView ? React.createElement(
	        'div',
	        {
	          tabIndex: '-1',
	          ref: 'viewPortContainer',
	          onKeyDown: this.props.onViewportKeydown,
	          onDoubleClick: this.props.onViewportDoubleClick,
	          onDragStart: this.props.onViewportDragStart,
	          onDragEnd: this.props.onViewportDragEnd
	        },
	        React.createElement(Viewport, {
	          ref: 'viewport',
	          width: this.props.columnMetrics.width,
	          getRowKey: this.props.getRowKey,
	          rowHeight: this.props.rowHeight,
	          rowRenderer: this.props.rowRenderer,
	          rowGetter: this.props.rowGetter,
	          rowsCount: this.props.rowsCount,
	          selectedRows: this.props.selectedRows,
	          expandedRows: this.props.expandedRows,
	          columnMetrics: this.props.columnMetrics,
	          totalWidth: this.props.totalWidth,
	          onScroll: this.onScroll,
	          onRows: this.props.onRows,
	          cellMetaData: this.props.cellMetaData,
	          rowOffsetHeight: this.props.rowOffsetHeight || this.props.rowHeight * headerRows.length,
	          minHeight: this.props.minHeight
	        })
	      ) : React.createElement(
	        'div',
	        { ref: 'emptyView', className: 'react-grid-Empty' },
	        React.createElement(EmptyRowsView, null)
	      )
	    );
	  },

	  focus: function focus() {
	    this.refs.viewPortContainer.focus();
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      rowHeight: 35,
	      minHeight: 350
	    };
	  }
	});

	module.exports = Grid;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	
	"use strict";

	var _extends = __webpack_require__(2)['default'];

	var React = __webpack_require__(18);
	var ReactDOM = __webpack_require__(19);
	var joinClasses = __webpack_require__(27);
	var shallowCloneObject = __webpack_require__(28);
	var ColumnMetrics = __webpack_require__(29);
	var ColumnUtils = __webpack_require__(31);
	var HeaderRow = __webpack_require__(33);

	var Header = React.createClass({
	  displayName: 'Header',

	  propTypes: {
	    columnMetrics: React.PropTypes.shape({ width: React.PropTypes.number.isRequired }).isRequired,
	    totalWidth: React.PropTypes.number,
	    height: React.PropTypes.number.isRequired,
	    headerRows: React.PropTypes.array.isRequired,
	    sortInfo: HeaderRow.propTypes.sortInfo
	  },

	  render: function render() {
	    var className = joinClasses({
	      'react-grid-Header': true,
	      'react-grid-Header--resizing': !!this.state.resizing
	    });

	    var headerRows = this.getHeaderRows();

	    return React.createElement(
	      'div',
	      _extends({}, this.props, { style: this.getStyle(), className: className }),
	      headerRows
	    );
	  },

	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    var update = !ColumnMetrics.sameColumns(this.props.columnMetrics.columns, nextProps.columnMetrics.columns, ColumnMetrics.sameColumn) || this.props.totalWidth != nextProps.totalWidth || this.props.headerRows.length != nextProps.headerRows.length || this.state.resizing != nextState.resizing || this.props.sortInfo != nextProps.sortInfo;
	    return update;
	  },

	  getHeaderRows: function getHeaderRows() {
	    var _this = this;

	    var columnMetrics = this.getColumnMetrics();
	    var resizeColumn;
	    if (this.state.resizing) {
	      resizeColumn = this.state.resizing.column;
	    }
	    var headerRows = [];
	    this.props.headerRows.forEach(function (row, index) {
	      var headerRowStyle = {
	        position: 'absolute',
	        top: _this.getCombinedHeaderHeights(index),
	        left: 0,
	        width: _this.props.totalWidth,
	        overflow: 'hidden'
	      };

	      headerRows.push(React.createElement(HeaderRow, {
	        key: row.ref,
	        ref: row.ref,
	        style: headerRowStyle,
	        onColumnResize: _this.onColumnResize,
	        onColumnResizeEnd: _this.onColumnResizeEnd,
	        width: columnMetrics.width,
	        height: row.height || _this.props.height,
	        columns: columnMetrics.columns,
	        resizing: resizeColumn,
	        headerCellRenderer: row.headerCellRenderer,
	        sortInfo: _this.props.sortInfo,
	        onSort: _this.props.onSort
	      }));
	    });
	    return headerRows;
	  },

	  getInitialState: function getInitialState() {
	    return { resizing: null };
	  },

	  componentWillReceiveProps: function componentWillReceiveProps() {
	    this.setState({ resizing: null });
	  },

	  onColumnResize: function onColumnResize(column, width) {
	    var state = this.state.resizing || this.props;

	    var pos = this.getColumnPosition(column);

	    if (pos != null) {
	      var resizing = {
	        columnMetrics: shallowCloneObject(state.columnMetrics)
	      };
	      resizing.columnMetrics = ColumnMetrics.resizeColumn(resizing.columnMetrics, pos, width);

	      // we don't want to influence scrollLeft while resizing
	      if (resizing.columnMetrics.totalWidth < state.columnMetrics.totalWidth) {
	        resizing.columnMetrics.totalWidth = state.columnMetrics.totalWidth;
	      }

	      resizing.column = ColumnUtils.getColumn(resizing.columnMetrics.columns, pos);
	      this.setState({ resizing: resizing });
	    }
	  },

	  getColumnMetrics: function getColumnMetrics() {
	    var columnMetrics;
	    if (this.state.resizing) {
	      columnMetrics = this.state.resizing.columnMetrics;
	    } else {
	      columnMetrics = this.props.columnMetrics;
	    }
	    return columnMetrics;
	  },

	  getColumnPosition: function getColumnPosition(column) {
	    var columnMetrics = this.getColumnMetrics();
	    var pos = -1;
	    columnMetrics.columns.forEach(function (c, idx) {
	      if (c.key === column.key) {
	        pos = idx;
	      }
	    });
	    return pos === -1 ? null : pos;
	  },

	  onColumnResizeEnd: function onColumnResizeEnd(column, width) {
	    var pos = this.getColumnPosition(column);
	    if (pos !== null && this.props.onColumnResize) {
	      this.props.onColumnResize(pos, width || column.width);
	    }
	  },

	  setScrollLeft: function setScrollLeft(scrollLeft) {
	    var node = ReactDOM.findDOMNode(this.refs.row);
	    node.scrollLeft = scrollLeft;
	    this.refs.row.setScrollLeft(scrollLeft);
	    if (this.refs.filterRow) {
	      var nodeFilters = ReactDOM.findDOMNode(this.refs.filterRow);
	      nodeFilters.scrollLeft = scrollLeft;
	      this.refs.filterRow.setScrollLeft(scrollLeft);
	    }
	  },

	  getCombinedHeaderHeights: function getCombinedHeaderHeights(until) {
	    var stop_at = this.props.headerRows.length;
	    if (typeof until != 'undefined') stop_at = until;

	    var height = 0;
	    for (var index = 0; index < stop_at; index++) {
	      height += this.props.headerRows[index].height || this.props.height;
	    }
	    return height;
	  },

	  getStyle: function getStyle() {
	    return {
	      position: 'relative',
	      height: this.getCombinedHeaderHeights(),
	      overflow: 'hidden'
	    };
	  }
	});

	module.exports = Header;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	function classNames() {
		var classes = '';
		var arg;

		for (var i = 0; i < arguments.length; i++) {
			arg = arguments[i];
			if (!arg) {
				continue;
			}

			if ('string' === typeof arg || 'number' === typeof arg) {
				classes += ' ' + arg;
			} else if (Object.prototype.toString.call(arg) === '[object Array]') {
				classes += ' ' + classNames.apply(null, arg);
			} else if ('object' === typeof arg) {
				for (var key in arg) {
					if (!arg.hasOwnProperty(key) || !arg[key]) {
						continue;
					}
					classes += ' ' + key;
				}
			}
		}
		return classes.substr(1);
	}

	// safely export classNames for node / browserify
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	}

	// safely export classNames for RequireJS
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}


/***/ },
/* 28 */
/***/ function(module, exports) {

	
	'use strict';

	function shallowCloneObject(obj) {
	  var result = {};
	  for (var k in obj) {
	    if (obj.hasOwnProperty(k)) {
	      result[k] = obj[k];
	    }
	  }
	  return result;
	}

	module.exports = shallowCloneObject;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	
	/*global Immutable */
	"use strict";

	var _extends = __webpack_require__(2)['default'];

	var shallowCloneObject = __webpack_require__(28);
	var sameColumn = __webpack_require__(30);
	var ColumnUtils = __webpack_require__(31);
	var getScrollbarSize = __webpack_require__(32);

	/**
	 * Update column metrics calculation.
	 *
	 * @param {ColumnMetricsType} metrics
	 */
	function recalculate(metrics) {
	  // compute width for columns which specify width
	  var columns = setColumnWidths(metrics.columns, metrics.totalWidth);

	  var unallocatedWidth = columns.filter(function (c) {
	    return c.width;
	  }).reduce(function (w, column) {
	    return w - column.width;
	  }, metrics.totalWidth);
	  unallocatedWidth -= getScrollbarSize();

	  var width = columns.filter(function (c) {
	    return c.width;
	  }).reduce(function (w, column) {
	    return w + column.width;
	  }, 0);

	  // compute width for columns which doesn't specify width
	  columns = setDefferedColumnWidths(columns, unallocatedWidth, metrics.minColumnWidth);

	  // compute left offset
	  columns = setColumnOffsets(columns);

	  return {
	    columns: columns,
	    width: width,
	    totalWidth: metrics.totalWidth,
	    minColumnWidth: metrics.minColumnWidth
	  };
	}

	function setColumnOffsets(columns) {
	  var left = 0;
	  return columns.map(function (column) {
	    column.left = left;
	    left += column.width;
	    return column;
	  });
	}

	function setColumnWidths(columns, totalWidth) {
	  return columns.map(function (column) {
	    var colInfo = _extends({}, column);
	    if (column.width) {
	      if (/^([0-9]+)%$/.exec(column.width.toString())) {
	        colInfo.width = Math.floor(column.width / 100 * totalWidth);
	      }
	    }
	    return colInfo;
	  });
	}

	function setDefferedColumnWidths(columns, unallocatedWidth, minColumnWidth) {
	  var defferedColumns = columns.filter(function (c) {
	    return !c.width;
	  });
	  return columns.map(function (column) {
	    if (!column.width) {
	      if (unallocatedWidth <= 0) {
	        column.width = minColumnWidth;
	      } else {
	        column.width = Math.floor(unallocatedWidth / ColumnUtils.getSize(defferedColumns));
	      }
	    }
	    return column;
	  });
	}

	/**
	 * Update column metrics calculation by resizing a column.
	 *
	 * @param {ColumnMetricsType} metrics
	 * @param {Column} column
	 * @param {number} width
	 */
	function resizeColumn(metrics, index, width) {
	  var column = ColumnUtils.getColumn(metrics.columns, index);
	  metrics = shallowCloneObject(metrics);
	  metrics.columns = metrics.columns.slice(0);

	  var updatedColumn = shallowCloneObject(column);
	  updatedColumn.width = Math.max(width, metrics.minColumnWidth);

	  metrics = ColumnUtils.spliceColumn(metrics, index, updatedColumn);

	  return recalculate(metrics);
	}

	function areColumnsImmutable(prevColumns, nextColumns) {
	  return typeof Immutable !== 'undefined' && Immutable.List.isList(prevColumns) && Immutable.List.isList(nextColumns);
	}

	function compareEachColumn(prevColumns, nextColumns, sameColumn) {
	  var i, len, column;
	  var prevColumnsByKey = {};
	  var nextColumnsByKey = {};

	  if (ColumnUtils.getSize(prevColumns) !== ColumnUtils.getSize(nextColumns)) {
	    return false;
	  }

	  for (i = 0, len = ColumnUtils.getSize(prevColumns); i < len; i++) {
	    column = prevColumns[i];
	    prevColumnsByKey[column.key] = column;
	  }

	  for (i = 0, len = ColumnUtils.getSize(nextColumns); i < len; i++) {
	    column = nextColumns[i];
	    nextColumnsByKey[column.key] = column;
	    var prevColumn = prevColumnsByKey[column.key];
	    if (prevColumn === undefined || !sameColumn(prevColumn, column)) {
	      return false;
	    }
	  }

	  for (i = 0, len = ColumnUtils.getSize(prevColumns); i < len; i++) {
	    column = prevColumns[i];
	    var nextColumn = nextColumnsByKey[column.key];
	    if (nextColumn === undefined) {
	      return false;
	    }
	  }
	  return true;
	}

	function sameColumns(prevColumns, nextColumns, sameColumn) {
	  if (areColumnsImmutable(prevColumns, nextColumns)) {
	    return prevColumns === nextColumns;
	  } else {
	    return compareEachColumn(prevColumns, nextColumns, sameColumn);
	  }
	}

	module.exports = { recalculate: recalculate, resizeColumn: resizeColumn, sameColumn: sameColumn, sameColumns: sameColumns };

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* TODO objects as a map */
	'use strict';

	var isValidElement = __webpack_require__(18).isValidElement;

	module.exports = function sameColumn(a, b) {
	  var k;

	  for (k in a) {
	    if (a.hasOwnProperty(k)) {
	      if (typeof a[k] === 'function' && typeof b[k] === 'function' || isValidElement(a[k]) && isValidElement(b[k])) {
	        continue;
	      }
	      if (!b.hasOwnProperty(k) || a[k] !== b[k]) {
	        return false;
	      }
	    }
	  }

	  for (k in b) {
	    if (b.hasOwnProperty(k) && !a.hasOwnProperty(k)) {
	      return false;
	    }
	  }

	  return true;
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	  getColumn: function getColumn(columns, idx) {
	    if (Array.isArray(columns)) {
	      return columns[idx];
	    } else if (typeof Immutable !== 'undefined') {
	      return columns.get(idx);
	    }
	  },

	  spliceColumn: function spliceColumn(metrics, idx, column) {
	    if (Array.isArray(metrics.columns)) {
	      metrics.columns.splice(idx, 1, column);
	    } else if (typeof Immutable !== 'undefined') {
	      metrics.columns = metrics.columns.splice(idx, 1, column);
	    }
	    return metrics;
	  },

	  getSize: function getSize(columns) {
	    if (Array.isArray(columns)) {
	      return columns.length;
	    } else if (typeof Immutable !== 'undefined') {
	      return columns.size;
	    }
	  }
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	/*  offsetWidth in HTMLElement */
	"use strict";

	var size;

	function getScrollbarSize() {
	    if (size === undefined) {

	        var outer = document.createElement('div');
	        outer.style.width = '50px';
	        outer.style.height = '50px';
	        outer.style.position = 'absolute';
	        outer.style.top = '-200px';
	        outer.style.left = '-200px';

	        var inner = document.createElement('div');
	        inner.style.height = '100px';
	        inner.style.width = '100%';

	        outer.appendChild(inner);
	        document.body.appendChild(outer);

	        var outerWidth = outer.clientWidth;
	        outer.style.overflowY = 'scroll';
	        var innerWidth = inner.clientWidth;

	        document.body.removeChild(outer);

	        size = outerWidth - innerWidth;
	    }

	    return size;
	}

	module.exports = getScrollbarSize;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * @jsx React.DOM
	 */
	"use strict";

	var _extends = __webpack_require__(2)['default'];

	var _Object$keys = __webpack_require__(34)['default'];

	var React = __webpack_require__(18);
	var PropTypes = React.PropTypes;
	var shallowEqual = __webpack_require__(38);
	var HeaderCell = __webpack_require__(39);
	var getScrollbarSize = __webpack_require__(32);
	var ColumnUtilsMixin = __webpack_require__(31);
	var SortableHeaderCell = __webpack_require__(44);

	var HeaderRowStyle = {
	  overflow: React.PropTypes.string,
	  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	  height: React.PropTypes.number,
	  position: React.PropTypes.string
	};

	function objectOf(propType) {
	  return function (props, name) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }

	    var obj = props[name] || {};
	    var invalid = _Object$keys(obj).some(function (k) {
	      return propType.apply(undefined, [obj, k].concat(args));
	    });

	    if (invalid) return new Error('Invalid object key');
	  };
	}

	var DEFINE_SORT = {
	  ASC: 'ASC',
	  DESC: 'DESC',
	  NONE: 'NONE'
	};

	var HeaderRow = React.createClass({
	  displayName: 'HeaderRow',

	  propTypes: {
	    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	    height: PropTypes.number.isRequired,
	    columns: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	    onColumnResize: PropTypes.func,
	    onSort: PropTypes.func.isRequired,
	    sortInfo: objectOf(PropTypes.oneOf(_Object$keys(DEFINE_SORT).map(function (k) {
	      return DEFINE_SORT[k];
	    }))),
	    style: PropTypes.shape(HeaderRowStyle)

	  },

	  mixins: [ColumnUtilsMixin],

	  render: function render() {
	    var cellsStyle = {
	      width: this.props.width ? this.props.width + getScrollbarSize() : '100%',
	      height: this.props.height,
	      whiteSpace: 'nowrap',
	      overflowX: 'hidden',
	      overflowY: 'hidden'
	    };

	    var cells = this.getCells();
	    return React.createElement(
	      'div',
	      _extends({}, this.props, { className: 'react-grid-HeaderRow' }),
	      React.createElement(
	        'div',
	        { style: cellsStyle },
	        cells
	      )
	    );
	  },

	  getHeaderRenderer: function getHeaderRenderer(column) {
	    if (column.sortable) {
	      var sortDirection = (this.props.sortInfo || {})[column.key] || DEFINE_SORT.NONE;
	      return React.createElement(SortableHeaderCell, { columnKey: column.key, onSort: this.props.onSort, sortDirection: sortDirection });
	    } else {
	      return this.props.headerCellRenderer || column.headerRenderer || this.props.cellRenderer;
	    }
	  },

	  getCells: function getCells() {
	    var cells = [];
	    var lockedCells = [];

	    for (var i = 0, len = this.getSize(this.props.columns); i < len; i++) {
	      var column = this.getColumn(this.props.columns, i);
	      var cell = React.createElement(HeaderCell, {
	        ref: i,
	        key: i,
	        height: this.props.height,
	        column: column,
	        renderer: this.getHeaderRenderer(column),
	        resizing: this.props.resizing === column,
	        onResize: this.props.onColumnResize,
	        onResizeEnd: this.props.onColumnResizeEnd
	      });
	      if (column.locked) {
	        lockedCells.push(cell);
	      } else {
	        cells.push(cell);
	      }
	    }

	    return cells.concat(lockedCells);
	  },

	  setScrollLeft: function setScrollLeft(scrollLeft) {
	    var _this = this;

	    this.props.columns.forEach(function (column, i) {
	      if (column.locked) {
	        _this.refs[i].setScrollLeft(scrollLeft);
	      }
	    });
	  },

	  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	    return nextProps.width !== this.props.width || nextProps.height !== this.props.height || nextProps.columns !== this.props.columns || !shallowEqual(nextProps.style, this.props.style) || this.props.sortInfo != nextProps.sortInfo;
	  },

	  getStyle: function getStyle() {
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

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(35), __esModule: true };

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(36);
	module.exports = __webpack_require__(8).Object.keys;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(13);

	__webpack_require__(37)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(6)
	  , core    = __webpack_require__(8)
	  , fails   = __webpack_require__(17);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 * @typechecks
	 * 
	 */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var bHasOwnProperty = hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(18);
	var ReactDOM = __webpack_require__(19);
	var joinClasses = __webpack_require__(27);
	var PropTypes = React.PropTypes;
	var ExcelColumn = __webpack_require__(40);
	var ResizeHandle = __webpack_require__(41);

	var HeaderCell = React.createClass({
	  displayName: 'HeaderCell',

	  propTypes: {
	    renderer: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
	    column: PropTypes.shape(ExcelColumn).isRequired,
	    onResize: PropTypes.func.isRequired,
	    height: PropTypes.number.isRequired,
	    onResizeEnd: PropTypes.func.isRequired
	  },

	  render: function render() {
	    var resizeHandle;
	    if (this.props.column.resizable) {
	      resizeHandle = React.createElement(ResizeHandle, {
	        onDrag: this.onDrag,
	        onDragStart: this.onDragStart,
	        onDragEnd: this.onDragEnd
	      });
	    }
	    var className = joinClasses({
	      'react-grid-HeaderCell': true,
	      'react-grid-HeaderCell--resizing': this.state.resizing,
	      'react-grid-HeaderCell--locked': this.props.column.locked
	    });

	    className = joinClasses(className, this.props.className, this.props.column.cellClass);

	    var cell = this.getCell();
	    return React.createElement(
	      'div',
	      { className: className, style: this.getStyle() },
	      cell,
	      resizeHandle
	    );
	  },

	  getCell: function getCell() {
	    var props = {
	      column: this.props.column,
	      className: 'react-grid-HeaderCell__value'
	    };

	    if (React.isValidElement(this.props.renderer)) {
	      return React.cloneElement(this.props.renderer, props);
	    } else {
	      return this.props.renderer(props);
	    }
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      renderer: simpleCellRenderer
	    };
	  },

	  getInitialState: function getInitialState() {
	    return { resizing: false };
	  },

	  setScrollLeft: function setScrollLeft(scrollLeft) {
	    var node = ReactDOM.findDOMNode(this);
	    node.style.webkitTransform = 'translate3d(' + scrollLeft + 'px, 0px, 0px)';
	    node.style.transform = 'translate3d(' + scrollLeft + 'px, 0px, 0px)';
	  },

	  getStyle: function getStyle() {
	    return {
	      width: this.props.column.width,
	      left: this.props.column.left,
	      display: 'inline-block',
	      position: 'absolute',
	      overflow: 'hidden',
	      height: this.props.height,
	      margin: 0,
	      textOverflow: 'ellipsis',
	      whiteSpace: 'nowrap'
	    };
	  },

	  onDragStart: function onDragStart(e) {
	    this.setState({ resizing: true });
	    //need to set dummy data for FF
	    if (e && e.dataTransfer && e.dataTransfer.setData) e.dataTransfer.setData('text/plain', 'dummy');
	  },

	  onDrag: function onDrag(e) {
	    var resize = this.props.onResize || null; //for flows sake, doesnt recognise a null check direct
	    if (resize) {
	      var width = this.getWidthFromMouseEvent(e);
	      if (width > 0) {
	        resize(this.props.column, width);
	      }
	    }
	  },

	  onDragEnd: function onDragEnd(e) {
	    var width = this.getWidthFromMouseEvent(e);
	    this.props.onResizeEnd(this.props.column, width);
	    this.setState({ resizing: false });
	  },

	  getWidthFromMouseEvent: function getWidthFromMouseEvent(e) {
	    var right = e.pageX;
	    var left = ReactDOM.findDOMNode(this).getBoundingClientRect().left;
	    return right - left;
	  }
	});

	function simpleCellRenderer(props) {
	  return React.createElement(
	    'div',
	    props,
	    props.column.name
	  );
	}

	module.exports = HeaderCell;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(18);

	var ExcelColumnShape = {
	  name: React.PropTypes.string,
	  key: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
	  width: React.PropTypes.number.isRequired
	};

	module.exports = ExcelColumnShape;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = __webpack_require__(2)['default'];

	var React = __webpack_require__(18);
	var Draggable = __webpack_require__(42);

	var ResizeHandle = React.createClass({
	  displayName: 'ResizeHandle',

	  style: {
	    position: 'absolute',
	    top: 0,
	    right: 0,
	    width: 6,
	    height: '100%'
	  },

	  render: function render() {
	    return React.createElement(Draggable, _extends({}, this.props, {
	      className: 'react-grid-HeaderCell__resizeHandle',
	      style: this.style
	    }));
	  }
	});

	module.exports = ResizeHandle;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/*  need   */
	'use strict';

	var _extends = __webpack_require__(2)['default'];

	var React = __webpack_require__(18);
	var PropTypes = React.PropTypes;
	var emptyFunction = __webpack_require__(43);

	var Draggable = React.createClass({
	  displayName: 'Draggable',

	  propTypes: {
	    onDragStart: PropTypes.func,
	    onDragEnd: PropTypes.func,
	    onDrag: PropTypes.func,
	    component: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
	  },

	  render: function render() {
	    return React.createElement('div', _extends({}, this.props, {
	      onMouseDown: this.onMouseDown,
	      className: 'react-grid-HeaderCell__draggable' }));
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onDragStart: emptyFunction.thatReturnsTrue,
	      onDragEnd: emptyFunction,
	      onDrag: emptyFunction
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      drag: null
	    };
	  },

	  onMouseDown: function onMouseDown(e) {
	    var drag = this.props.onDragStart(e);

	    if (drag === null && e.button !== 0) {
	      return;
	    }

	    window.addEventListener('mouseup', this.onMouseUp);
	    window.addEventListener('mousemove', this.onMouseMove);

	    this.setState({ drag: drag });
	  },

	  onMouseMove: function onMouseMove(e) {
	    if (this.state.drag === null) {
	      return;
	    }

	    if (e.preventDefault) {
	      e.preventDefault();
	    }

	    this.props.onDrag(e);
	  },

	  onMouseUp: function onMouseUp(e) {
	    this.cleanUp();
	    this.props.onDragEnd(e, this.state.drag);
	    this.setState({ drag: null });
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this.cleanUp();
	  },

	  cleanUp: function cleanUp() {
	    window.removeEventListener('mouseup', this.onMouseUp);
	    window.removeEventListener('mousemove', this.onMouseMove);
	  }
	});

	module.exports = Draggable;

/***/ },
/* 43 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyFunction
	 */

	"use strict";

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	function emptyFunction() {}

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';

	var React = __webpack_require__(18);
	var joinClasses = __webpack_require__(27);
	var DEFINE_SORT = {
	  ASC: 'ASC',
	  DESC: 'DESC',
	  NONE: 'NONE'
	};

	var SortableHeaderCell = React.createClass({
	  displayName: 'SortableHeaderCell',

	  propTypes: {
	    columnKey: React.PropTypes.string.isRequired,
	    onSort: React.PropTypes.func.isRequired,
	    sortDirection: React.PropTypes.oneOf(['ASC', 'DESC', 'NONE'])
	  },

	  onClick: function onClick() {
	    var direction;
	    switch (this.props.sortDirection) {
	      case null:
	      case undefined:
	      case DEFINE_SORT.NONE:
	        direction = DEFINE_SORT.ASC;
	        break;
	      case DEFINE_SORT.ASC:
	        direction = DEFINE_SORT.DESC;
	        break;
	      case DEFINE_SORT.DESC:
	        direction = DEFINE_SORT.NONE;
	        break;
	    }
	    this.props.onSort(this.props.columnKey, direction);
	  },

	  getSortByText: function getSortByText() {
	    var unicodeKeys = {
	      'ASC': '9650',
	      'DESC': '9660',
	      'NONE': ''
	    };
	    return String.fromCharCode(unicodeKeys[this.props.sortDirection]);
	  },

	  render: function render() {
	    var sorting = this.props.sortDirection && this.props.sortDirection !== DEFINE_SORT.NONE;
	    var className = joinClasses(this.props.className, {
	      'react-grid-HeaderCell-sortable': true,
	      'react-grid-HeaderCell-sortable--ascending': this.props.sortDirection === 'ASC',
	      'react-grid-HeaderCell-sortable--descending': this.props.sortDirection === 'DESC'
	    });

	    return React.createElement(
	      'div',
	      {
	        title: this.props.column.name,
	        className: className,
	        onClick: this.onClick,
	        style: {
	          cursor: 'pointer',
	          position: 'relative',
	          paddingRight: sorting ? 15 : undefined
	        }
	      },
	      this.props.column.name,
	      !!sorting && React.createElement(
	        'span',
	        { style: { position: 'absolute', right: 0 } },
	        this.getSortByText()
	      )
	    );
	  }
	});

	module.exports = SortableHeaderCell;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';

	var React = __webpack_require__(18);
	var Canvas = __webpack_require__(46);
	var PropTypes = React.PropTypes;
	var colUtils = __webpack_require__(31);
	var ViewportScroll = __webpack_require__(67);

	var Viewport = React.createClass({
	  displayName: 'Viewport',

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
	    minHeight: PropTypes.number
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var _this = this;

	    var cellMetaData = nextProps.cellMetaData;
	    var columnMetrics = nextProps.columnMetrics;
	    var _cellMetaData$selected = cellMetaData.selected;
	    var rowIdx = _cellMetaData$selected.rowIdx;
	    var idx = _cellMetaData$selected.idx;

	    var column = colUtils.getColumn(columnMetrics.columns, idx);

	    if (idx !== -1 && !column.locked && this.selectedCellChanged(cellMetaData)) {
	      (function () {
	        var _scrollToCell = _this.scrollToCell([idx, rowIdx], nextProps);

	        var scrollTop = _scrollToCell.scrollTop;
	        var scrollLeft = _scrollToCell.scrollLeft;

	        cancelAnimationFrame(_this._raf);
	        _this._raf = requestAnimationFrame(function () {
	          if (_this.isMounted()) _this.refs.canvas.setScroll(scrollTop, scrollLeft);
	        });
	      })();
	    }
	  },

	  render: function render() {
	    var style = {
	      padding: 0,
	      bottom: 0,
	      left: 0,
	      right: 0,
	      overflow: 'hidden',
	      position: 'absolute',
	      top: this.props.rowOffsetHeight
	    };
	    return React.createElement(
	      'div',
	      {
	        className: 'react-grid-Viewport',
	        style: style },
	      React.createElement(Canvas, {
	        ref: 'canvas',
	        getRowKey: this.props.getRowKey,
	        totalWidth: this.props.totalWidth,
	        width: this.props.columnMetrics.width,
	        rowGetter: this.props.rowGetter,
	        rowsCount: this.props.rowsCount,
	        selectedRows: this.props.selectedRows,
	        expandedRows: this.props.expandedRows,
	        columns: this.props.columnMetrics.columns,
	        rowRenderer: this.props.rowRenderer,
	        visibleStart: this.state.visibleStart,
	        visibleEnd: this.state.visibleEnd,
	        displayStart: this.state.displayStart,
	        displayEnd: this.state.displayEnd,
	        cellMetaData: this.props.cellMetaData,
	        height: this.state.height,
	        rowHeight: this.props.rowHeight,
	        onScroll: this.onScroll,
	        onRows: this.props.onRows
	      })
	    );
	  },

	  getScroll: function getScroll() {
	    return this.refs.canvas.getScroll();
	  },

	  onScroll: function onScroll(scroll) {
	    this.updateScroll(scroll.scrollTop, scroll.scrollLeft, this.state.height, this.props.rowHeight, this.props.rowsCount);

	    if (this.props.onScroll) {
	      this.props.onScroll({ scrollTop: scroll.scrollTop, scrollLeft: scroll.scrollLeft });
	    }
	  },

	  setScrollLeft: function setScrollLeft(scrollLeft) {
	    this.refs.canvas.setScrollLeft(scrollLeft);
	  },

	  selectedCellChanged: function selectedCellChanged(cellMetaData) {
	    var oldMeta = this.props.cellMetaData;
	    return oldMeta.selected.rowIdx !== cellMetaData.selected.rowIdx || oldMeta.selected.idx !== cellMetaData.selected.idx;
	  }
	});

	module.exports = Viewport;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	
	"use strict";
	var React = __webpack_require__(18);
	var ReactDOM = __webpack_require__(19);
	var joinClasses = __webpack_require__(27);
	var PropTypes = React.PropTypes;
	var shallowEqual = __webpack_require__(38);
	var emptyFunction = __webpack_require__(43);
	var ScrollShim = __webpack_require__(47);
	var Row = __webpack_require__(48);

	var Canvas = React.createClass({
	  displayName: 'Canvas',

	  mixins: [ScrollShim],

	  propTypes: {
	    rowRenderer: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
	    rowHeight: PropTypes.number.isRequired,
	    height: PropTypes.number.isRequired,
	    displayStart: PropTypes.number.isRequired,
	    displayEnd: PropTypes.number.isRequired,
	    rowsCount: PropTypes.number.isRequired,
	    rowGetter: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.array.isRequired]),
	    onRows: PropTypes.func,
	    columns: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
	  },

	  render: function render() {
	    var _this = this;

	    var displayStart = this.state.displayStart;
	    var displayEnd = this.state.displayEnd;
	    var rowHeight = this.props.rowHeight;
	    var length = this.props.rowsCount;
	    var getKey = this.props.getRowKey;

	    var rows = this.getRows(displayStart, displayEnd).map(function (row, idx) {
	      return _this.renderRow({
	        key: getKey ? getKey(row) : displayStart + idx,
	        ref: idx,
	        idx: displayStart + idx,
	        row: row,
	        height: rowHeight,
	        columns: _this.props.columns,
	        isSelected: _this.isRowSelected(row),
	        expandedRows: _this.props.expandedRows,
	        cellMetaData: _this.props.cellMetaData
	      });
	    });

	    this._currentRowsLength = rows.length;

	    if (displayStart > 0) {
	      rows.unshift(this.renderPlaceholder('top', displayStart * rowHeight));
	    }

	    if (length - displayEnd > 0) {
	      rows.push(this.renderPlaceholder('bottom', (length - displayEnd) * rowHeight));
	    }

	    var style = {
	      position: 'absolute',
	      top: 0,
	      left: 0,
	      overflowX: 'auto',
	      overflowY: 'scroll',
	      width: this.props.totalWidth + this.state.scrollbarWidth,
	      height: this.props.height,
	      transform: 'translate3d(0, 0, 0)'
	    };

	    return React.createElement(
	      'div',
	      {
	        style: style,
	        onScroll: this.onScroll,
	        className: joinClasses('react-grid-Canvas', this.props.className, {
	          opaque: this.props.cellMetaData.selected && this.props.cellMetaData.selected.active
	        })
	      },
	      React.createElement(
	        'div',
	        { style: { width: this.props.width, overflow: 'hidden' } },
	        rows
	      )
	    );
	  },

	  renderRow: function renderRow(props) {
	    var RowsRenderer = this.props.rowRenderer;
	    if (typeof RowsRenderer === 'function') {
	      return React.createElement(RowsRenderer, props);
	    } else if (React.isValidElement(this.props.rowRenderer)) {
	      return React.cloneElement(this.props.rowRenderer, props);
	    }
	  },

	  renderPlaceholder: function renderPlaceholder(key, height) {
	    return React.createElement(
	      'div',
	      { key: key, style: { height: height } },
	      this.props.columns.map(function (column, idx) {
	        return React.createElement('div', { style: { width: column.width }, key: idx });
	      })
	    );
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      rowRenderer: Row,
	      onRows: emptyFunction
	    };
	  },

	  isRowSelected: function isRowSelected(row) {
	    return this.props.selectedRows && this.props.selectedRows.indexOf(row) !== -1;
	  },

	  _currentRowsLength: 0,
	  _currentRowsRange: { start: 0, end: 0 },
	  _scroll: { scrollTop: 0, scrollLeft: 0 },

	  getInitialState: function getInitialState() {
	    return {
	      shouldUpdate: true,
	      displayStart: this.props.displayStart,
	      displayEnd: this.props.displayEnd,
	      scrollbarWidth: 0
	    };
	  },

	  componentWillMount: function componentWillMount() {
	    this._currentRowsLength = 0;
	    this._currentRowsRange = { start: 0, end: 0 };
	    this._scroll = { scrollTop: 0, scrollLeft: 0 };
	  },

	  componentDidMount: function componentDidMount() {
	    ReactDOM.findDOMNode(this).scrollLeft = 0;
	    this.onRows();
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    if (this._scroll.scrollTop !== 0 && this._scroll.scrollLeft !== 0) {
	      this.setScrollLeft(this._scroll.scrollLeft);
	    }
	    this.onRows();
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this._currentRowsLength = 0;
	    this._currentRowsRange = { start: 0, end: 0 };
	    this._scroll = { scrollTop: 0, scrollLeft: 0 };
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.rowsCount > this.props.rowsCount) {
	      ReactDOM.findDOMNode(this).scrollTop = nextProps.rowsCount * this.props.rowHeight;
	    }
	    var scrollbarWidth = this.getScrollbarWidth();
	    var shouldUpdate = !(nextProps.visibleStart > this.state.displayStart && nextProps.visibleEnd < this.state.displayEnd) || nextProps.rowsCount !== this.props.rowsCount || nextProps.rowHeight !== this.props.rowHeight || nextProps.columns !== this.props.columns || nextProps.width !== this.props.width || nextProps.cellMetaData !== this.props.cellMetaData || !shallowEqual(nextProps.style, this.props.style);

	    if (shouldUpdate) {
	      this.setState({
	        shouldUpdate: true,
	        displayStart: nextProps.displayStart,
	        displayEnd: nextProps.displayEnd,
	        scrollbarWidth: scrollbarWidth
	      });
	    } else {
	      this.setState({ shouldUpdate: false, scrollbarWidth: scrollbarWidth });
	    }
	  },

	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return !nextState || nextState.shouldUpdate;
	  },

	  onRows: function onRows() {
	    if (this._currentRowsRange !== { start: 0, end: 0 }) {
	      this.props.onRows(this._currentRowsRange);
	      this._currentRowsRange = { start: 0, end: 0 };
	    }
	  },

	  getRows: function getRows(displayStart, displayEnd) {
	    this._currentRowsRange = { start: displayStart, end: displayEnd };
	    if (Array.isArray(this.props.rowGetter)) {
	      return this.props.rowGetter.slice(displayStart, displayEnd);
	    } else {
	      var rows = [];
	      for (var i = displayStart; i < displayEnd; i++) {
	        rows.push(this.props.rowGetter(i));
	      }
	      return rows;
	    }
	  },

	  getScrollbarWidth: function getScrollbarWidth() {
	    var scrollbarWidth = 0;
	    // Get the scrollbar width
	    var canvas = ReactDOM.findDOMNode(this);
	    scrollbarWidth = canvas.offsetWidth - canvas.clientWidth;
	    return scrollbarWidth;
	  },

	  setScrollLeft: function setScrollLeft(scrollLeft) {
	    if (this._currentRowsLength !== 0) {
	      if (!this.refs) return;
	      for (var i = 0, len = this._currentRowsLength; i < len; i++) {
	        if (this.refs[i] && this.refs[i].setScrollLeft) {
	          this.refs[i].setScrollLeft(scrollLeft);
	        }
	      }
	    }
	  },

	  getScroll: function getScroll() {
	    var _ReactDOM$findDOMNode = ReactDOM.findDOMNode(this);

	    var scrollTop = _ReactDOM$findDOMNode.scrollTop;
	    var scrollLeft = _ReactDOM$findDOMNode.scrollLeft;

	    return { scrollTop: scrollTop, scrollLeft: scrollLeft };
	  },

	  setScroll: function setScroll(scrollTop, scrollLeft) {
	    var current = this.getScroll();
	    scrollTop = scrollTop == null ? current.scrollTop : scrollTop;
	    scrollLeft = scrollLeft == null ? current.scrollLeft : scrollLeft;

	    var node = ReactDOM.findDOMNode(this);

	    if (scrollTop !== current.scrollTop) node.scrollTop = scrollTop;

	    if (scrollLeft !== current.scrollLeft) {
	      node.scrollLeft = scrollLeft;
	    }
	  },

	  onScroll: function onScroll(e) {
	    if (e.target !== ReactDOM.findDOMNode(this)) return;
	    this.appendScrollShim();
	    var _e$target = e.target;
	    var scrollTop = _e$target.scrollTop;
	    var scrollLeft = _e$target.scrollLeft;

	    var scroll = { scrollTop: scrollTop, scrollLeft: scrollLeft };
	    this._scroll = scroll;
	    this.props.onScroll(scroll);
	  }
	});

	module.exports = Canvas;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* TODO mixin not compatible and HTMLElement classList */
	/**
	 * @jsx React.DOM


	 */
	'use strict';

	var ReactDOM = __webpack_require__(19);

	var ScrollShim = {

	  appendScrollShim: function appendScrollShim() {
	    if (!this._scrollShim) {
	      var size = this._scrollShimSize();
	      var shim = document.createElement('div');
	      if (shim.classList) {
	        shim.classList.add('react-grid-ScrollShim'); //flow - not compatible with HTMLElement
	      } else {
	          shim.className += ' react-grid-ScrollShim';
	        }
	      shim.style.position = 'absolute';
	      shim.style.top = 0;
	      shim.style.left = 0;
	      shim.style.width = size.width + 'px';
	      shim.style.height = size.height + 'px';
	      ReactDOM.findDOMNode(this).appendChild(shim);
	      this._scrollShim = shim;
	    }
	    this._scheduleRemoveScrollShim();
	  },

	  _scrollShimSize: function _scrollShimSize() {
	    return {
	      width: this.props.width,
	      height: this.props.length * this.props.rowHeight
	    };
	  },

	  _scheduleRemoveScrollShim: function _scheduleRemoveScrollShim() {
	    if (this._scheduleRemoveScrollShimTimer) {
	      clearTimeout(this._scheduleRemoveScrollShimTimer);
	    }
	    this._scheduleRemoveScrollShimTimer = setTimeout(this._removeScrollShim, 200);
	  },

	  _removeScrollShim: function _removeScrollShim() {
	    if (this._scrollShim) {
	      this._scrollShim.parentNode.removeChild(this._scrollShim);
	      this._scrollShim = undefined;
	    }
	  }
	};

	module.exports = ScrollShim;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';

	var _extends = __webpack_require__(2)['default'];

	var React = __webpack_require__(18);
	var joinClasses = __webpack_require__(27);
	var Cell = __webpack_require__(49);
	var ColumnMetrics = __webpack_require__(29);
	var ColumnUtilsMixin = __webpack_require__(31);

	var Row = React.createClass({
	  displayName: 'Row',

	  propTypes: {
	    height: React.PropTypes.number.isRequired,
	    columns: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]).isRequired,
	    row: React.PropTypes.object.isRequired,
	    cellRenderer: React.PropTypes.func,
	    isSelected: React.PropTypes.bool,
	    idx: React.PropTypes.number.isRequired,
	    expandedRows: React.PropTypes.arrayOf(React.PropTypes.object)
	  },

	  mixins: [ColumnUtilsMixin],

	  render: function render() {
	    var className = joinClasses(this.props.className, 'react-grid-Row', 'react-grid-Row--' + (this.props.idx % 2 === 0 ? 'even' : 'odd'));

	    var style = _extends({}, this.props.style, {
	      height: this.getRowHeight(this.props),
	      overflow: 'hidden'
	    });

	    var cells = this.getCells();
	    return React.createElement(
	      'div',
	      _extends({}, this.props, { className: className, style: style, onDragEnter: this.handleDragEnter }),
	      React.isValidElement(this.props.row) ? this.props.row : cells
	    );
	  },

	  getCells: function getCells() {
	    var _this = this;

	    var cells = [];
	    var lockedCells = [];
	    var selectedColumn = this.getSelectedColumn();

	    this.props.columns.forEach(function (column, i) {

	      var CellRenderer = _this.props.cellRenderer;
	      var cell = React.createElement(CellRenderer, {
	        ref: i,
	        key: column.key + '-' + i,
	        idx: i,
	        rowIdx: _this.props.idx,
	        column: column,
	        height: _this.getRowHeight(),
	        formatter: column.formatter,
	        cellMetaData: _this.props.cellMetaData,
	        rowData: _this.props.row,
	        selectedColumn: selectedColumn,
	        isRowSelected: _this.props.isSelected
	      });
	      if (column.locked) {
	        lockedCells.push(cell);
	      } else {
	        cells.push(cell);
	      }
	    });

	    return cells.concat(lockedCells);
	  },

	  getRowHeight: function getRowHeight() {
	    var rows = this.props.expandedRows || null;
	    if (rows && this.props.key) {
	      var row = rows[this.props.key] || null;
	      if (row) {
	        return row.height;
	      }
	    }
	    return this.props.height;
	  },

	  renderCell: function renderCell(props) {
	    if (typeof this.props.cellRenderer == 'function') {
	      this.props.cellRenderer.call(this, props);
	    }
	    if (React.isValidElement(this.props.cellRenderer)) {
	      return React.cloneElement(this.props.cellRenderer, props);
	    } else {
	      return this.props.cellRenderer(props);
	    }
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      cellRenderer: Cell,
	      isSelected: false,
	      height: 35
	    };
	  },

	  setScrollLeft: function setScrollLeft(scrollLeft) {
	    var _this2 = this;

	    this.props.columns.forEach(function (column, i) {
	      if (column.locked) {
	        if (!_this2.refs[i]) return;
	        _this2.refs[i].setScrollLeft(scrollLeft);
	      }
	    });
	  },

	  doesRowContainSelectedCell: function doesRowContainSelectedCell(props) {
	    var selected = props.cellMetaData.selected;
	    if (selected && selected.rowIdx === props.idx) {
	      return true;
	    } else {
	      return false;
	    }
	  },

	  willRowBeDraggedOver: function willRowBeDraggedOver(props) {
	    var dragged = props.cellMetaData.dragged;
	    return dragged != null && (dragged.rowIdx >= 0 || dragged.complete === true);
	  },

	  hasRowBeenCopied: function hasRowBeenCopied() {
	    var copied = this.props.cellMetaData.copied;
	    return copied != null && copied.rowIdx === this.props.idx;
	  },

	  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	    return !ColumnMetrics.sameColumns(this.props.columns, nextProps.columns, ColumnMetrics.sameColumn) || this.doesRowContainSelectedCell(this.props) || this.doesRowContainSelectedCell(nextProps) || this.willRowBeDraggedOver(nextProps) || nextProps.row !== this.props.row || nextProps.idx !== this.props.idx || this.hasRowBeenCopied() || this.props.isSelected !== nextProps.isSelected || nextProps.height !== this.props.height;
	  },

	  handleDragEnter: function handleDragEnter() {
	    var handleDragEnterRow = this.props.cellMetaData.handleDragEnterRow;
	    if (handleDragEnterRow) {
	      handleDragEnterRow(this.props.idx);
	    }
	  },

	  getSelectedColumn: function getSelectedColumn() {
	    var selected = this.props.cellMetaData.selected;
	    if (selected && selected.idx) {
	      return this.getColumn(this.props.columns, selected.idx);
	    }
	  }

	});

	module.exports = Row;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';

	var _extends = __webpack_require__(2)['default'];

	var React = __webpack_require__(18);
	var ReactDOM = __webpack_require__(19);
	var joinClasses = __webpack_require__(27);
	var EditorContainer = __webpack_require__(50);
	var ExcelColumn = __webpack_require__(40);
	var isFunction = __webpack_require__(65);
	var CellMetaDataShape = __webpack_require__(66);

	function shouldCellUpdate(props, context) {
	  var column = props.column;

	  var formatter = column.formatter || SimpleCellFormatter;
	  formatter = formatter.type || formatter;
	  return !!formatter.shouldCellUpdate && formatter.shouldCellUpdate(props, context);
	}

	var Cell = React.createClass({
	  displayName: 'Cell',

	  propTypes: {
	    rowIdx: React.PropTypes.number.isRequired,
	    idx: React.PropTypes.number.isRequired,
	    selected: React.PropTypes.shape({
	      idx: React.PropTypes.number.isRequired
	    }),
	    tabIndex: React.PropTypes.number,
	    ref: React.PropTypes.string,
	    column: React.PropTypes.shape(ExcelColumn).isRequired,
	    isExpanded: React.PropTypes.bool,
	    cellMetaData: React.PropTypes.shape(CellMetaDataShape).isRequired,
	    handleDragStart: React.PropTypes.func,
	    className: React.PropTypes.string,
	    rowData: React.PropTypes.object.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      tabIndex: -1,
	      ref: 'cell',
	      isExpanded: false
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      isRowChanging: false,
	      isCellValueChanging: false
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    this.checkFocus();
	  },

	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    var dragged = this.props.cellMetaData.dragged;

	    if (this.isSelected() !== this.isSelected(prevProps) || this.isActive() !== this.isActive(prevProps)) this.checkFocus();

	    if (dragged && dragged.complete === true) {
	      this.props.cellMetaData.handleTerminateDrag();
	    }
	    if (this.state.isRowChanging && this.props.selectedColumn != null) {
	      this.applyUpdateClass();
	    }
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.setState({
	      isRowChanging: this.props.rowData !== nextProps.rowData,
	      isCellValueChanging: this.props.value !== nextProps.value
	    });
	  },

	  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	    return this.props.column.width !== nextProps.column.width || this.props.column.left !== nextProps.column.left || this.props.rowData !== nextProps.rowData || this.props.height !== nextProps.height || this.props.rowIdx !== nextProps.rowIdx || this.isCellSelectionChanging(nextProps) || this.isDraggedCellChanging(nextProps) || this.isCopyCellChanging(nextProps) || this.props.isRowSelected !== nextProps.isRowSelected || this.isSelected() || shouldCellUpdate(nextProps);
	  },

	  getStyle: function getStyle() {
	    var style = {
	      position: 'absolute',
	      width: this.props.column.width,
	      height: this.props.height,
	      left: this.props.column.left
	    };
	    return style;
	  },

	  render: function render() {
	    var style = this.getStyle();
	    var className = this.getCellClass();

	    return React.createElement(
	      'div',
	      _extends({}, this.props, {
	        className: className,
	        style: style,
	        onClick: this.onCellClick,
	        onDoubleClick: this.onCellDoubleClick
	      }),
	      this.renderCellContent(),
	      this.props.children,
	      React.createElement('div', { className: 'drag-handle', draggable: 'true' })
	    );
	  },

	  renderCellContent: function renderCellContent() {
	    var _props = this.props;
	    var cellMetaData = _props.cellMetaData;
	    var column = _props.column;
	    var idx = _props.idx;
	    var rowIdx = _props.rowIdx;
	    var rowData = _props.rowData;
	    var height = _props.height;
	    var isExpanded = _props.isExpanded;
	    var isRowSelected = _props.isRowSelected;
	    var formatter = column.formatter;
	    var CellContent;

	    var props = {
	      cellMetaData: cellMetaData, column: column, idx: idx, rowIdx: rowIdx,
	      rowData: rowData, height: height,
	      isExpanded: isExpanded, isRowSelected: isRowSelected,
	      value: this.getValue(),
	      isSelected: this.isSelected()
	    };

	    if (this.isActive()) {
	      CellContent = React.createElement(EditorContainer, props);
	    } else if (React.isValidElement(formatter)) {
	      CellContent = React.cloneElement(formatter, props);
	    } else if (isFunction(formatter)) {
	      CellContent = React.createElement(formatter, props);
	    } else {
	      CellContent = React.createElement(SimpleCellFormatter, props);
	    }

	    return React.createElement(
	      'div',
	      {
	        ref: 'cell',
	        className: 'react-grid-Cell__value'
	      },
	      CellContent,
	      this.props.cellControls
	    );
	  },

	  isColumnSelected: function isColumnSelected() {
	    var meta = this.props.cellMetaData;
	    if (meta == null || meta.selected == null) {
	      return false;
	    }

	    return meta.selected && meta.selected.idx === this.props.idx;
	  },

	  isSelected: function isSelected() {
	    var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	    var meta = props.cellMetaData;
	    if (meta == null || meta.selected == null) {
	      return false;
	    }

	    return !!(meta.selected && meta.selected.rowIdx === props.rowIdx && meta.selected.idx === props.idx);
	  },

	  isActive: function isActive() {
	    var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	    var meta = props.cellMetaData;
	    if (meta == null || meta.selected == null) {
	      return false;
	    }
	    return this.isSelected(props) && meta.selected.active === true;
	  },

	  isCellSelectionChanging: function isCellSelectionChanging(nextProps) {
	    var meta = this.props.cellMetaData;
	    if (meta == null || meta.selected == null) {
	      return false;
	    }
	    var nextSelected = nextProps.cellMetaData.selected;
	    if (meta.selected && nextSelected) {
	      return this.props.idx === nextSelected.idx || this.props.idx === meta.selected.idx;
	    } else {
	      return true;
	    }
	  },

	  getRowData: function getRowData() {
	    return this.props.rowData.toJSON ? this.props.rowData.toJSON() : this.props.rowData;
	  },

	  onCellClick: function onCellClick() {
	    var meta = this.props.cellMetaData;
	    if (meta != null && meta.onCellClick != null) {
	      meta.onCellClick({ rowIdx: this.props.rowIdx, idx: this.props.idx });
	    }
	  },

	  onCellDoubleClick: function onCellDoubleClick() {
	    var meta = this.props.cellMetaData;
	    if (meta != null && meta.onCellDoubleClick != null) {
	      meta.onCellDoubleClick({ rowIdx: this.props.rowIdx, idx: this.props.idx });
	    }
	  },

	  checkFocus: function checkFocus() {
	    if (this.isSelected() && !this.isActive()) {
	      ReactDOM.findDOMNode(this).focus();
	    }
	  },

	  getCellClass: function getCellClass() {
	    var className = joinClasses(this.props.column.cellClass, 'react-grid-Cell', this.props.className, this.props.column.locked ? 'react-grid-Cell--locked' : null);
	    var extraClasses = joinClasses({
	      'selected': this.isSelected() && !this.isActive(),
	      'editing': this.isActive(),
	      'copied': this.isCopied(),
	      'active-drag-cell': this.isSelected() || this.isDraggedOver(),
	      'is-dragged-over-up': this.isDraggedOverUpwards(),
	      'is-dragged-over-down': this.isDraggedOverDownwards(),
	      'was-dragged-over': this.wasDraggedOver()
	    });
	    return joinClasses(className, extraClasses);
	  },

	  getUpdateCellClass: function getUpdateCellClass() {
	    return this.props.column.getUpdateCellClass ? this.props.column.getUpdateCellClass(this.props.selectedColumn, this.props.column, this.state.isCellValueChanging) : '';
	  },

	  applyUpdateClass: function applyUpdateClass() {
	    var updateCellClass = this.getUpdateCellClass();
	    // -> removing the class
	    if (updateCellClass != null && updateCellClass != '') {
	      var cellDOMNode = ReactDOM.findDOMNode(this);
	      if (cellDOMNode.classList) {
	        cellDOMNode.classList.remove(updateCellClass);
	        // -> and re-adding the class
	        cellDOMNode.classList.add(updateCellClass);
	      } else if (cellDOMNode.className.indexOf(updateCellClass) === -1) {
	        // IE9 doesn't support classList, nor (I think) altering element.className
	        // without replacing it wholesale.
	        cellDOMNode.className = cellDOMNode.className + ' ' + updateCellClass;
	      }
	    }
	  },

	  setScrollLeft: function setScrollLeft(scrollLeft) {
	    var ctrl = this; //flow on windows has an outdated react declaration, once that gets updated, we can remove this
	    if (ctrl.isMounted()) {
	      var node = ReactDOM.findDOMNode(this);
	      var transform = 'translate3d(' + scrollLeft + 'px, 0px, 0px)';
	      node.style.webkitTransform = transform;
	      node.style.transform = transform;
	    }
	  },

	  isCopied: function isCopied() {
	    var copied = this.props.cellMetaData.copied;
	    return copied && copied.rowIdx === this.props.rowIdx && copied.idx === this.props.idx;
	  },

	  isDraggedOver: function isDraggedOver() {
	    var dragged = this.props.cellMetaData.dragged;
	    return dragged && dragged.overRowIdx === this.props.rowIdx && dragged.idx === this.props.idx;
	  },

	  wasDraggedOver: function wasDraggedOver() {
	    var dragged = this.props.cellMetaData.dragged;
	    return dragged && (dragged.overRowIdx < this.props.rowIdx && this.props.rowIdx < dragged.rowIdx || dragged.overRowIdx > this.props.rowIdx && this.props.rowIdx > dragged.rowIdx) && dragged.idx === this.props.idx;
	  },

	  isDraggedCellChanging: function isDraggedCellChanging(nextProps) {
	    var isChanging;
	    var dragged = this.props.cellMetaData.dragged;
	    var nextDragged = nextProps.cellMetaData.dragged;
	    if (dragged) {
	      isChanging = nextDragged && this.props.idx === nextDragged.idx || dragged && this.props.idx === dragged.idx;
	      return isChanging;
	    } else {
	      return false;
	    }
	  },

	  isCopyCellChanging: function isCopyCellChanging(nextProps) {
	    var copied = this.props.cellMetaData.copied;
	    var nextCopied = nextProps.cellMetaData.copied;

	    if (copied) {
	      return nextCopied && this.props.idx === nextCopied.idx || copied && this.props.idx === copied.idx;
	    } else {
	      return false;
	    }
	  },

	  isDraggedOverUpwards: function isDraggedOverUpwards() {
	    var dragged = this.props.cellMetaData.dragged;
	    return !this.isSelected() && this.isDraggedOver() && this.props.rowIdx < dragged.rowIdx;
	  },

	  isDraggedOverDownwards: function isDraggedOverDownwards() {
	    var dragged = this.props.cellMetaData.dragged;
	    return !this.isSelected() && this.isDraggedOver() && this.props.rowIdx > dragged.rowIdx;
	  },

	  getValue: function getValue() {
	    var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
	    var key = props.column.key;
	    var row = props.rowData;

	    if (key === 'select-row') return props.isRowSelected;else if (isFunction(row.get)) return row.get(key);else return row[key];
	  }
	});

	var SimpleCellFormatter = React.createClass({
	  displayName: 'SimpleCellFormatter',

	  render: function render() {
	    // objects like dates will throw when specified as children
	    // so cast to a string
	    return React.createElement(
	      'span',
	      null,
	      '' + this.props.value
	    );
	  },

	  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	    return nextProps.value !== this.props.value;
	  }
	});

	module.exports = Cell;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';
	var React = __webpack_require__(18);
	var isTextInputElement = __webpack_require__(51);
	var joinClasses = __webpack_require__(27);
	var keyboardHandlerMixin = __webpack_require__(52);
	var SimpleTextEditor = __webpack_require__(53);
	var isFunction = __webpack_require__(65);

	var checkAndCallOnEditor = function checkAndCallOnEditor(ctx, fn) {
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  var _ctx$getEditor;

	  return isFunction(ctx.getEditor()[fn]) ? (_ctx$getEditor = ctx.getEditor())[fn].apply(_ctx$getEditor, args) : false;
	};

	var EditorContainer = React.createClass({
	  displayName: 'EditorContainer',

	  mixins: [keyboardHandlerMixin],

	  propTypes: {
	    rowData: React.PropTypes.object.isRequired,
	    cellMetaData: React.PropTypes.shape({
	      selected: React.PropTypes.object.isRequired,
	      copied: React.PropTypes.object,
	      dragged: React.PropTypes.object,
	      onCellClick: React.PropTypes.func,
	      onCellDoubleClick: React.PropTypes.func
	    }).isRequired,
	    column: React.PropTypes.object.isRequired,
	    height: React.PropTypes.number.isRequired
	  },

	  changeCommitted: false,

	  getInitialState: function getInitialState() {
	    return { isInvalid: false };
	  },

	  componentDidMount: function componentDidMount() {
	    checkAndCallOnEditor(this, 'editorWillMount', this.props.cellMetaData);
	  },

	  createEditor: function createEditor() {
	    var _this = this;

	    var customEditor = this.props.column.editor;
	    var editorProps = {
	      ref: function ref(c) {
	        return _this.editor = c;
	      },
	      column: this.props.column,
	      value: this.getInitialValue(),
	      onCommit: this.commit,
	      rowData: this.props.rowData,
	      height: this.props.height
	    };

	    if (customEditor) {
	      if (React.isValidElement(customEditor)) return React.cloneElement(customEditor, editorProps);else if (typeof customEditor === 'function') return customEditor(editorProps);
	    }

	    return React.createElement(SimpleTextEditor, editorProps);
	  },

	  onPressEnter: function onPressEnter() {
	    if (!this.editorIsSelectOpen()) {
	      this.commit({ key: 'Enter' });
	    }
	  },

	  onPressTab: function onPressTab() {
	    this.commit({ key: 'Tab' });
	  },

	  onPressEscape: function onPressEscape(e) {
	    if (!this.editorIsSelectOpen()) {
	      this.props.cellMetaData.onCommitCancel();
	    } else {
	      // prevent event from bubbling if editor has results to select
	      e.stopPropagation();
	    }
	  },

	  onPressArrowDown: function onPressArrowDown(e) {
	    if (this.editorHasResults()) {
	      //dont want to propogate as that then moves us round the grid
	      e.stopPropagation();
	    } else {
	      this.commit(e);
	    }
	  },

	  onPressArrowUp: function onPressArrowUp(e) {
	    if (this.editorHasResults()) {
	      //dont want to propogate as that then moves us round the grid
	      e.stopPropagation();
	    } else {
	      this.commit(e);
	    }
	  },

	  onPressArrowLeft: function onPressArrowLeft(e) {
	    //prevent event propogation. this disables left cell navigation
	    if (!this.isCaretAtBeginningOfInput()) {
	      e.stopPropagation();
	    } else {
	      this.commit(e);
	    }
	  },

	  onPressArrowRight: function onPressArrowRight(e) {
	    //prevent event propogation. this disables right cell navigation
	    if (!this.isCaretAtEndOfInput()) {
	      e.stopPropagation();
	    } else {
	      this.commit(e);
	    }
	  },

	  shouldPreventKeyDown: function shouldPreventKeyDown(e) {
	    return checkAndCallOnEditor(this, 'shouldPreventKeyDown', e);
	  },

	  editorHasResults: function editorHasResults() {
	    return checkAndCallOnEditor(this, 'hasResults');
	  },

	  editorIsSelectOpen: function editorIsSelectOpen() {
	    return checkAndCallOnEditor(this, 'isSelectOpen');
	  },

	  getEditor: function getEditor() {
	    return this.editor;
	  },

	  commit: function commit(args) {
	    var opts = args || {},
	        editor = this.getEditor(),
	        updated;

	    if (editor.getValue) updated = editor.getValue();

	    if (this.isNewValueValid(updated)) {
	      var cellKey = this.props.column.key;
	      this.props.cellMetaData.onCommit({
	        cellKey: cellKey,
	        updated: updated,
	        rowIdx: this.props.rowIdx,
	        key: opts.key
	      });
	    }
	    this.changeCommitted = true;
	  },

	  isNewValueValid: function isNewValueValid(value) {
	    if (isFunction(this.getEditor().validate)) {
	      var isValid = checkAndCallOnEditor(this, 'validate', value);
	      this.setState({ isInvalid: !isValid });
	      return isValid;
	    } else {
	      return true;
	    }
	  },

	  getInputNode: function getInputNode() {
	    return this.getEditor().getInputNode && this.getEditor().getInputNode();
	  },

	  getInitialValue: function getInitialValue() {
	    var selected = this.props.cellMetaData.selected;
	    var keyCode = selected.initialKeyCode;

	    if (!keyCode || keyCode === 'Enter') {
	      return this.props.value;
	    } else {
	      return '';
	    }
	  },

	  getContainerClass: function getContainerClass() {
	    return joinClasses({
	      'has-error': this.state.isInvalid === true
	    });
	  },

	  renderStatusIcon: function renderStatusIcon() {
	    if (this.state.isInvalid === true) {
	      return React.createElement('span', { className: 'glyphicon glyphicon-remove form-control-feedback' });
	    }
	  },

	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: this.getContainerClass(), onKeyDown: this.onKeyDown },
	      this.createEditor(),
	      this.renderStatusIcon()
	    );
	  },

	  isCaretAtBeginningOfInput: function isCaretAtBeginningOfInput() {
	    var inputNode = this.getInputNode();

	    if (!isTextInputElement(inputNode)) return true;

	    return inputNode.selectionStart === inputNode.selectionEnd && inputNode.selectionStart === 0;
	  },

	  isCaretAtEndOfInput: function isCaretAtEndOfInput() {
	    var inputNode = this.getInputNode();

	    if (!isTextInputElement(inputNode)) return true;

	    return inputNode.selectionStart === (inputNode.value || '').length;
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    if (!this.changeCommitted && !this.hasEscapeBeenPressed()) {
	      this.commit({ key: 'Enter' });
	    }
	  },

	  hasEscapeBeenPressed: function hasEscapeBeenPressed() {
	    var pressed = false;
	    var escapeKey = 27;
	    if (window.event) {
	      if (window.event.keyCode === escapeKey) {
	        pressed = true;
	      } else if (window.event.which === escapeKey) {
	        pressed = true;
	      }
	    }
	    return pressed;
	  }
	});

	module.exports = EditorContainer;

/***/ },
/* 51 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isTextInputElement
	 */

	'use strict';

	/**
	 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
	 */

	var supportedInputTypes = {
	  'color': true,
	  'date': true,
	  'datetime': true,
	  'datetime-local': true,
	  'email': true,
	  'month': true,
	  'number': true,
	  'password': true,
	  'range': true,
	  'search': true,
	  'tel': true,
	  'text': true,
	  'time': true,
	  'url': true,
	  'week': true
	};

	function isTextInputElement(elem) {
	  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
	  return nodeName && (nodeName === 'input' && supportedInputTypes[elem.type] || nodeName === 'textarea');
	}

	module.exports = isTextInputElement;

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';
	var KeyboardHandlerMixin = {

	  onKeyDown: function onKeyDown(e) {
	    if (!this.shouldPreventKeyDown || !this.shouldPreventKeyDown(e)) {
	      if (this.isCtrlKeyHeldDown(e)) {
	        this.checkAndCall('onPressKeyWithCtrl', e);
	      } else if (this.isKeyExplicitlyHandled(e.key)) {
	        //break up individual keyPress events to have their own specific callbacks
	        //this allows multiple mixins to listen to onKeyDown events and somewhat reduces methodName clashing
	        var callBack = 'onPress' + e.key;
	        this.checkAndCall(callBack, e);
	      } else if (this.isKeyPrintable(e.keyCode)) {
	        this.checkAndCall('onPressChar', e);
	      }
	    }
	  },

	  //taken from http://stackoverflow.com/questions/12467240/determine-if-javascript-e-keycode-is-a-printable-non-control-character
	  isKeyPrintable: function isKeyPrintable(keycode) {
	    var valid = keycode > 47 && keycode < 58 || // number keys
	    keycode == 32 || keycode == 13 || // spacebar & return key(s) (if you want to allow carriage returns)
	    keycode > 64 && keycode < 91 || // letter keys
	    keycode > 95 && keycode < 112 || // numpad keys
	    keycode > 185 && keycode < 193 || // ;=,-./` (in order)
	    keycode > 218 && keycode < 223; // [\]' (in order)

	    return valid;
	  },

	  isKeyExplicitlyHandled: function isKeyExplicitlyHandled(key) {
	    return typeof this['onPress' + key] === 'function';
	  },

	  isCtrlKeyHeldDown: function isCtrlKeyHeldDown(e) {
	    return e.ctrlKey === true && e.key !== 'Control';
	  },

	  checkAndCall: function checkAndCall(methodName, args) {
	    if (typeof this[methodName] === 'function') {
	      this[methodName](args);
	    }
	  }
	};

	module.exports = KeyboardHandlerMixin;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';

	var _inherits = __webpack_require__(54)['default'];

	var _classCallCheck = __webpack_require__(63)['default'];

	var React = __webpack_require__(18);
	var EditorBase = __webpack_require__(64);

	var SimpleTextEditor = (function (_EditorBase) {
	  _inherits(SimpleTextEditor, _EditorBase);

	  function SimpleTextEditor() {
	    _classCallCheck(this, SimpleTextEditor);

	    _EditorBase.apply(this, arguments);
	  }

	  SimpleTextEditor.prototype.render = function render() {
	    return React.createElement('input', {
	      ref: 'input',
	      type: 'text',
	      className: 'form-control',
	      onBlur: this.props.onCommit,
	      defaultValue: this.props.value
	    });
	  };

	  return SimpleTextEditor;
	})(EditorBase);

	module.exports = SimpleTextEditor;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$create = __webpack_require__(55)["default"];

	var _Object$setPrototypeOf = __webpack_require__(57)["default"];

	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	exports.__esModule = true;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(56), __esModule: true };

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(12);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(58), __esModule: true };

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(59);
	module.exports = __webpack_require__(8).Object.setPrototypeOf;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(6);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(60).set});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(12).getDesc
	  , isObject = __webpack_require__(61)
	  , anObject = __webpack_require__(62);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(9)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(61);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';

	var _inherits = __webpack_require__(54)['default'];

	var _classCallCheck = __webpack_require__(63)['default'];

	var React = __webpack_require__(18);
	var ReactDOM = __webpack_require__(19);
	var ExcelColumn = __webpack_require__(40);

	var EditorBase = (function (_React$Component) {
	  _inherits(EditorBase, _React$Component);

	  function EditorBase() {
	    _classCallCheck(this, EditorBase);

	    _React$Component.apply(this, arguments);
	  }

	  EditorBase.prototype.getStyle = function getStyle() {
	    return {
	      width: '100%',
	      height: this.props.height
	    };
	  };

	  EditorBase.prototype.getValue = function getValue() {
	    var updated = {};
	    updated[this.props.column.key] = this.getInputNode().value;
	    return updated;
	  };

	  EditorBase.prototype.getInputNode = function getInputNode() {
	    var domNode = ReactDOM.findDOMNode(this);
	    if (domNode.tagName === 'INPUT') {
	      return domNode;
	    } else {
	      return domNode.querySelector('input:not([type=hidden])');
	    }
	  };

	  EditorBase.prototype.editorWillMount = function editorWillMount() {
	    var inputNode = this.getInputNode();

	    if (typeof inputNode.focus === 'function') inputNode.focus();
	  };

	  return EditorBase;
	})(React.Component);

	EditorBase.propTypes = {
	  value: React.PropTypes.any,
	  column: React.PropTypes.shape(ExcelColumn).isRequired,
	  onCommit: React.PropTypes.func.isRequired
	};

	module.exports = EditorBase;

/***/ },
/* 65 */
/***/ function(module, exports) {

	
	"use strict";

	var isFunction = function isFunction(functionToCheck) {
	    var getType = {};
	    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	};

	module.exports = isFunction;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var PropTypes = __webpack_require__(18).PropTypes;

	module.exports = {
	  selected: PropTypes.object.isRequired,
	  copied: PropTypes.object,
	  dragged: PropTypes.object,
	  onCellClick: PropTypes.func.isRequired
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/* TODO mixins */

	'use strict';

	var React = __webpack_require__(18);
	var ReactDOM = __webpack_require__(19);
	var DOMMetrics = __webpack_require__(68);
	var getScrollbarSize = __webpack_require__(32);
	var min = Math.min;
	var max = Math.max;
	var floor = Math.floor;
	var ceil = Math.ceil;

	module.exports = {
	  mixins: [DOMMetrics.MetricsMixin],

	  DOMMetrics: {
	    viewportHeight: function viewportHeight() {
	      return ReactDOM.findDOMNode(this).offsetHeight;
	    }
	  },

	  propTypes: {
	    rowHeight: React.PropTypes.number,
	    rowsCount: React.PropTypes.number.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      rowHeight: 30
	    };
	  },

	  getInitialState: function getInitialState() {
	    return this.getGridState(this.props);
	  },

	  getGridState: function getGridState(props) {
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

	  scrollToCell: function scrollToCell(_ref) {
	    var x = _ref[0];
	    var y = _ref[1];
	    var props = arguments.length <= 1 || arguments[1] === undefined ? this.props : arguments[1];
	    var rowHeight = props.rowHeight;
	    var rowsCount = props.rowsCount;
	    var columnMetrics = props.columnMetrics;
	    var columns = columnMetrics.columns;
	    var width = columnMetrics.totalWidth;
	    var _state = this.state;
	    var height = _state.height;
	    var scrollTop = _state.scrollTop;
	    var scrollLeft = _state.scrollLeft;

	    var cellTop = Math.min(y, rowsCount) * rowHeight,
	        scrollBar = columnMetrics.width > columnMetrics.totalWidth ? getScrollbarSize() : 0;

	    cellTop = cellTop < scrollTop // moving up
	    ? cellTop : cellTop + rowHeight > scrollTop + height // moving down
	    ? cellTop + rowHeight - height + scrollBar : null;

	    var column = columns[x];
	    var cellLeft = column.locked ? 0 : column.left;

	    var lockedLeft = columns.filter(function (c) {
	      return c.locked;
	    }).reduce(function (left, c) {
	      return left + c.width;
	    }, 0);

	    cellLeft = cellLeft < scrollLeft + lockedLeft // moving left
	    ? Math.max(0, cellLeft - lockedLeft) : cellLeft + column.width > scrollLeft + width //moving right
	    ? cellLeft + column.width - width : null;

	    return { scrollTop: cellTop, scrollLeft: cellLeft };
	  },

	  updateScroll: function updateScroll(scrollTop, scrollLeft, height, rowHeight, length) {
	    var renderedRowsCount = ceil(height / rowHeight);

	    var visibleStart = floor(scrollTop / rowHeight);

	    var visibleEnd = min(visibleStart + renderedRowsCount, length);

	    var displayStart = max(0, visibleStart - renderedRowsCount * 2);

	    var displayEnd = min(visibleStart + renderedRowsCount * 2, length);

	    var nextScrollState = {
	      visibleStart: visibleStart,
	      visibleEnd: visibleEnd,
	      displayStart: displayStart,
	      displayEnd: displayEnd,
	      height: height,
	      scrollTop: scrollTop,
	      scrollLeft: scrollLeft
	    };

	    this.setState(nextScrollState);
	  },

	  metricsUpdated: function metricsUpdated() {
	    var height = this.DOMMetrics.viewportHeight();
	    if (height) {
	      this.updateScroll(this.state.scrollTop, this.state.scrollLeft, height, this.props.rowHeight, this.props.rowsCount);
	    }
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (this.props.rowHeight !== nextProps.rowHeight || this.props.minHeight !== nextProps.minHeight) {
	      this.setState(this.getGridState(nextProps));
	    } else if (this.props.rowsCount !== nextProps.rowsCount) {
	      this.updateScroll(this.state.scrollTop, this.state.scrollLeft, this.state.height, nextProps.rowHeight, nextProps.rowsCount);
	    }
	  }
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(18);
	var emptyFunction = __webpack_require__(43);
	var shallowCloneObject = __webpack_require__(28);

	var contextTypes = {
	  metricsComputator: React.PropTypes.object
	};

	var MetricsComputatorMixin = {

	  childContextTypes: contextTypes,

	  getChildContext: function getChildContext() {
	    return { metricsComputator: this };
	  },

	  getMetricImpl: function getMetricImpl(name) {
	    return this._DOMMetrics.metrics[name].value;
	  },

	  registerMetricsImpl: function registerMetricsImpl(component, metrics) {
	    var getters = {};
	    var s = this._DOMMetrics;

	    for (var name in metrics) {
	      if (s.metrics[name] !== undefined) {
	        throw new Error('DOM metric ' + name + ' is already defined');
	      }
	      s.metrics[name] = { component: component, computator: metrics[name].bind(component) };
	      getters[name] = this.getMetricImpl.bind(null, name);
	    }

	    if (s.components.indexOf(component) === -1) {
	      s.components.push(component);
	    }

	    return getters;
	  },

	  unregisterMetricsFor: function unregisterMetricsFor(component) {
	    var s = this._DOMMetrics;
	    var idx = s.components.indexOf(component);

	    if (idx > -1) {
	      s.components.splice(idx, 1);

	      var name;
	      var metricsToDelete = {};

	      for (name in s.metrics) {
	        if (s.metrics[name].component === component) {
	          metricsToDelete[name] = true;
	        }
	      }

	      for (name in metricsToDelete) {
	        delete s.metrics[name];
	      }
	    }
	  },

	  updateMetrics: function updateMetrics() {
	    var s = this._DOMMetrics;

	    var needUpdate = false;

	    for (var name in s.metrics) {
	      var newMetric = s.metrics[name].computator();
	      if (newMetric !== s.metrics[name].value) {
	        needUpdate = true;
	      }
	      s.metrics[name].value = newMetric;
	    }

	    if (needUpdate) {
	      for (var i = 0, len = s.components.length; i < len; i++) {
	        if (s.components[i].metricsUpdated) {
	          s.components[i].metricsUpdated();
	        }
	      }
	    }
	  },

	  componentWillMount: function componentWillMount() {
	    this._DOMMetrics = {
	      metrics: {},
	      components: []
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    if (window.addEventListener) {
	      window.addEventListener('resize', this.updateMetrics);
	    } else {
	      window.attachEvent('resize', this.updateMetrics);
	    }
	    this.updateMetrics();
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    window.removeEventListener('resize', this.updateMetrics);
	  }

	};

	var MetricsMixin = {

	  contextTypes: contextTypes,

	  componentWillMount: function componentWillMount() {
	    if (this.DOMMetrics) {
	      this._DOMMetricsDefs = shallowCloneObject(this.DOMMetrics);

	      this.DOMMetrics = {};
	      for (var name in this._DOMMetricsDefs) {
	        this.DOMMetrics[name] = emptyFunction;
	      }
	    }
	  },

	  componentDidMount: function componentDidMount() {
	    if (this.DOMMetrics) {
	      this.DOMMetrics = this.registerMetrics(this._DOMMetricsDefs);
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    if (!this.registerMetricsImpl) {
	      return this.context.metricsComputator.unregisterMetricsFor(this);
	    }
	    if (this.hasOwnProperty('DOMMetrics')) {
	      delete this.DOMMetrics;
	    }
	  },

	  registerMetrics: function registerMetrics(metrics) {
	    if (this.registerMetricsImpl) {
	      return this.registerMetricsImpl(this, metrics);
	    } else {
	      return this.context.metricsComputator.registerMetricsImpl(this, metrics);
	    }
	  },

	  getMetric: function getMetric(name) {
	    if (this.getMetricImpl) {
	      return this.getMetricImpl(name);
	    } else {
	      return this.context.metricsComputator.getMetricImpl(name);
	    }
	  }
	};

	module.exports = {
	  MetricsComputatorMixin: MetricsComputatorMixin,
	  MetricsMixin: MetricsMixin
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	/* TODO mixins */
	"use strict";

	module.exports = {

	  componentDidMount: function componentDidMount() {
	    this._scrollLeft = this.refs.viewport ? this.refs.viewport.getScroll().scrollLeft : 0;
	    this._onScroll();
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    this._onScroll();
	  },

	  componentWillMount: function componentWillMount() {
	    this._scrollLeft = undefined;
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this._scrollLeft = undefined;
	  },

	  onScroll: function onScroll(props) {
	    if (this._scrollLeft !== props.scrollLeft) {
	      this._scrollLeft = props.scrollLeft;
	      this._onScroll();
	    }
	  },

	  _onScroll: function _onScroll() {
	    if (this._scrollLeft !== undefined) {
	      this.refs.header.setScrollLeft(this._scrollLeft);
	      if (this.refs.viewport) {
	        this.refs.viewport.setScrollLeft(this._scrollLeft);
	      }
	    }
	  }
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';
	var React = __webpack_require__(18);

	var CheckboxEditor = React.createClass({
	  displayName: 'CheckboxEditor',

	  PropTypes: {
	    value: React.PropTypes.bool.isRequired,
	    rowIdx: React.PropTypes.number.isRequired,
	    column: React.PropTypes.shape({
	      key: React.PropTypes.string.isRequired,
	      onCellChange: React.PropTypes.func.isRequired
	    }).isRequired
	  },

	  render: function render() {
	    var checked = this.props.value != null ? this.props.value : false;
	    return React.createElement('input', {
	      className: 'react-grid-CheckBox',
	      type: 'checkbox',
	      checked: checked,
	      onClick: this.handleChange
	    });
	  },

	  handleChange: function handleChange(e) {
	    this.props.column.onCellChange(this.props.rowIdx, this.props.column.key, e);
	  }
	});

	module.exports = CheckboxEditor;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';
	var React = __webpack_require__(18);
	var ExcelColumn = __webpack_require__(40);

	var FilterableHeaderCell = React.createClass({
	  displayName: 'FilterableHeaderCell',

	  propTypes: {
	    onChange: React.PropTypes.func.isRequired,
	    column: React.PropTypes.shape(ExcelColumn).isRequired
	  },

	  getInitialState: function getInitialState() {
	    return { filterTerm: '' };
	  },

	  handleChange: function handleChange(e) {
	    var val = e.target.value;
	    this.setState({ filterTerm: val });
	    this.props.onChange({ filterTerm: val, columnKey: this.props.column.key });
	  },

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'div',
	        { className: 'form-group' },
	        this.renderInput()
	      )
	    );
	  },

	  renderInput: function renderInput() {
	    if (this.props.column.filterable === false) {
	      return React.createElement('span', null);
	    } else {
	      var input_key = 'header-filter-' + this.props.column.key;
	      return React.createElement('input', { key: input_key, type: 'text', className: 'form-control input-sm', placeholder: 'Search', value: this.state.filterTerm, onChange: this.handleChange });
	    }
	  }
	});

	module.exports = FilterableHeaderCell;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/* TODO mixins */

	'use strict';

	var _classCallCheck = __webpack_require__(63)['default'];

	var ColumnMetrics = __webpack_require__(29);
	var DOMMetrics = __webpack_require__(68);
	var PropTypes = __webpack_require__(18).PropTypes;
	var ColumnUtils = __webpack_require__(31);
	var ReactDOM = __webpack_require__(19);

	var Column = function Column() {
	  _classCallCheck(this, Column);
	};

	module.exports = {
	  mixins: [DOMMetrics.MetricsMixin],

	  propTypes: {
	    columns: PropTypes.arrayOf(Column),
	    minColumnWidth: PropTypes.number,
	    columnEquality: PropTypes.func
	  },

	  DOMMetrics: {
	    gridWidth: function gridWidth() {
	      return ReactDOM.findDOMNode(this).parentElement.offsetWidth;
	    }
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      minColumnWidth: 80,
	      columnEquality: ColumnMetrics.sameColumn
	    };
	  },

	  componentWillMount: function componentWillMount() {
	    this._mounted = true;
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.columns) {
	      if (!ColumnMetrics.sameColumns(this.props.columns, nextProps.columns, this.props.columnEquality) || nextProps.minWidth !== this.props.minWidth) {
	        var columnMetrics = this.createColumnMetrics(nextProps);
	        this.setState({ columnMetrics: columnMetrics });
	      }
	    }
	  },

	  getTotalWidth: function getTotalWidth() {
	    var totalWidth = 0;
	    // avoid the warning about checking in render
	    if (this._mounted) {
	      totalWidth = this.DOMMetrics.gridWidth();
	    } else {
	      totalWidth = ColumnUtils.getSize(this.props.columns) * this.props.minColumnWidth;
	    }
	    return totalWidth;
	  },

	  getColumnMetricsType: function getColumnMetricsType(metrics) {
	    var totalWidth = metrics.totalWidth || this.getTotalWidth();
	    var currentMetrics = {
	      columns: metrics.columns,
	      totalWidth: totalWidth,
	      minColumnWidth: metrics.minColumnWidth
	    };
	    var updatedMetrics = ColumnMetrics.recalculate(currentMetrics);
	    return updatedMetrics;
	  },

	  getColumn: function getColumn(idx) {
	    var columns = this.state.columnMetrics.columns;
	    if (Array.isArray(columns)) {
	      return columns[idx];
	    } else if (typeof Immutable !== 'undefined') {
	      return columns.get(idx);
	    }
	  },

	  getSize: function getSize() {
	    var columns = this.state.columnMetrics.columns;
	    if (Array.isArray(columns)) {
	      return columns.length;
	    } else if (typeof Immutable !== 'undefined') {
	      return columns.size;
	    }
	  },

	  metricsUpdated: function metricsUpdated() {
	    var columnMetrics = this.createColumnMetrics();
	    this.setState({ columnMetrics: columnMetrics });
	  },

	  createColumnMetrics: function createColumnMetrics() {
	    var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	    var gridColumns = this.setupGridColumns(props);
	    return this.getColumnMetricsType({
	      columns: gridColumns,
	      minColumnWidth: props.minColumnWidth,
	      totalWidth: props.minWidth
	    });
	  },

	  onColumnResize: function onColumnResize(index, width) {
	    var columnMetrics = ColumnMetrics.resizeColumn(this.state.columnMetrics, index, width);
	    this.setState({ columnMetrics: columnMetrics });
	  }
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	'use strict';

	var RowUtils = {
	  get: function get(row, property) {
	    if (typeof row.get === 'function') {
	      return row.get(property);
	    } else {
	      return row[property];
	    }
	  }
	};

	module.exports = RowUtils;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Editors = {
	  DropDownEditor: __webpack_require__(75),
	  SimpleTextEditor: __webpack_require__(53),
	  CheckboxEditor: __webpack_require__(70)
	};

	module.exports = Editors;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';

	var _inherits = __webpack_require__(54)['default'];

	var _classCallCheck = __webpack_require__(63)['default'];

	var React = __webpack_require__(18);
	var ReactDOM = __webpack_require__(19);
	var EditorBase = __webpack_require__(64);

	var DropDownEditor = (function (_EditorBase) {
	  _inherits(DropDownEditor, _EditorBase);

	  function DropDownEditor() {
	    _classCallCheck(this, DropDownEditor);

	    _EditorBase.apply(this, arguments);
	  }

	  DropDownEditor.prototype.getInputNode = function getInputNode() {
	    return ReactDOM.findDOMNode(this);
	  };

	  DropDownEditor.prototype.onClick = function onClick() {
	    this.getInputNode().focus();
	  };

	  DropDownEditor.prototype.onDoubleClick = function onDoubleClick() {
	    this.getInputNode().focus();
	  };

	  DropDownEditor.prototype.render = function render() {
	    return React.createElement(
	      'select',
	      { style: this.getStyle(), defaultValue: this.props.value, onBlur: this.props.onBlur, onChange: this.onChange },
	      this.renderOptions()
	    );
	  };

	  DropDownEditor.prototype.renderOptions = function renderOptions() {
	    var options = [];
	    this.props.options.forEach(function (name) {
	      options.push(React.createElement(
	        'option',
	        { key: name, value: name },
	        name
	      ));
	    }, this);
	    return options;
	  };

	  return DropDownEditor;
	})(EditorBase);

	DropDownEditor.propTypes = {
	  options: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
	};

	module.exports = DropDownEditor;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	
	//not including this
	//it currently requires the whole of moment, which we dont want to take as a dependency
	'use strict';

	var ImageFormatter = __webpack_require__(77);

	var Formatters = {
	  ImageFormatter: ImageFormatter
	};

	module.exports = Formatters;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(18);
	var PendingPool = {};
	var ReadyPool = {};

	var ImageFormatter = React.createClass({
	  displayName: 'ImageFormatter',

	  propTypes: {
	    value: React.PropTypes.string.isRequired
	  },

	  getInitialState: function getInitialState() {
	    return {
	      ready: false
	    };
	  },

	  componentWillMount: function componentWillMount() {
	    this._load(this.props.value);
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.value !== this.props.value) {
	      this.setState({ value: null });
	      this._load(nextProps.value);
	    }
	  },

	  render: function render() {
	    var style = this.state.value ? { backgroundImage: 'url(' + this.state.value + ')' } : undefined;

	    return React.createElement('div', { className: 'react-grid-image', style: style });
	  },

	  _load: function _load( /*string*/src) {
	    if (ReadyPool[src]) {
	      this.setState({ value: src });
	      return;
	    }

	    if (PendingPool[src]) {
	      PendingPool[src].push(this._onLoad);
	      return;
	    }

	    PendingPool[src] = [this._onLoad];

	    var img = new Image();
	    img.onload = function () {
	      PendingPool[src].forEach( /*function*/function (callback) {
	        callback(src);
	      });
	      delete PendingPool[src];
	      img.onload = null;
	      src = undefined;
	    };
	    img.src = src;
	  },

	  _onLoad: function _onLoad( /*string*/src) {
	    if (this.isMounted() && src === this.props.value) {
	      this.setState({
	        value: src
	      });
	    }
	  }
	});

	module.exports = ImageFormatter;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	

	'use strict';

	var React = __webpack_require__(18);

	var Toolbar = React.createClass({
	  displayName: 'Toolbar',

	  propTypes: {
	    onAddRow: React.PropTypes.func,
	    onToggleFilter: React.PropTypes.func.isRequired,
	    enableFilter: React.PropTypes.bool,
	    numberOfRows: React.PropTypes.number.isRequired
	  },
	  onAddRow: function onAddRow() {
	    if (this.props.onAddRow !== null && this.props.onAddRow instanceof Function) {
	      this.props.onAddRow({ newRowIndex: this.props.numberOfRows });
	    }
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      enableAddRow: true
	    };
	  },

	  renderAddRowButton: function renderAddRowButton() {
	    if (this.props.onAddRow) {
	      return React.createElement(
	        'button',
	        { type: 'button', className: 'btn', onClick: this.onAddRow },
	        'Add Row'
	      );
	    }
	  },

	  renderToggleFilterButton: function renderToggleFilterButton() {
	    if (this.props.enableFilter) {
	      return React.createElement(
	        'button',
	        { type: 'button', className: 'btn', onClick: this.props.onToggleFilter },
	        'Filter Rows'
	      );
	    }
	  },

	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'react-grid-Toolbar' },
	      React.createElement(
	        'div',
	        { className: 'tools' },
	        this.renderAddRowButton(),
	        this.renderToggleFilterButton()
	      )
	    );
	  }
	});

	module.exports = Toolbar;

/***/ }
/******/ ])
});
;