(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"), require("faker"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM", "faker"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("ReactDOM"), require("faker")) : factory(root["React"], root["ReactDOM"], root["faker"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_125__) {
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

	var React = __webpack_require__(1);
	window.React = React;
	var ReactDOM = __webpack_require__(2);
	var ReactRouter = __webpack_require__(3);

	var basicExample = __webpack_require__(62);
	var resizableExample = __webpack_require__(67);
	var fixedColsExample = __webpack_require__(113);
	var editableExample = __webpack_require__(114);
	var formatterExample = __webpack_require__(115);
	var editorsExample = __webpack_require__(116);
	var sortableExample = __webpack_require__(117);
	var filterableExample = __webpack_require__(118);
	var millionRowsExample = __webpack_require__(119);
	var immutableDataExample = __webpack_require__(120);
	var customRowRenderer = __webpack_require__(122);
	var fullExample = __webpack_require__(124);
	var fullExampleImmutable = __webpack_require__(126);
	var emptyRowsExample = __webpack_require__(129);

	var Route = ReactRouter.Route;
	var Router = ReactRouter.Router;
	var Link = ReactRouter.Link;
	var IndexRoute = ReactRouter.IndexRoute;
	var hashHistory = ReactRouter.hashHistory;

	window.AutoCompleteEditor = __webpack_require__(130);

	var App = React.createClass({
	  displayName: 'App',

	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'container-fluid top-space' },
	      React.createElement(
	        'div',
	        { className: 'row' },
	        React.createElement(
	          'div',
	          { className: 'col-md-2 top-space' },
	          React.createElement(
	            'nav',
	            { id: 'sidebar', className: 'bs-docs-sidebar hidden-print hidden-xs hidden-sm' },
	            React.createElement(
	              'ul',
	              { className: 'nav bs-docs-sidenav' },
	              React.createElement(
	                'li',
	                null,
	                React.createElement(
	                  Link,
	                  { to: '/basic' },
	                  'Basic Example'
	                )
	              ),
	              React.createElement(
	                'li',
	                null,
	                React.createElement(
	                  Link,
	                  { to: '/resizable' },
	                  'Resizable Columns'
	                )
	              ),
	              React.createElement(
	                'li',
	                null,
	                React.createElement(
	                  Link,
	                  { to: '/fixed' },
	                  'Frozen Columns'
	                )
	              ),
	              React.createElement(
	                'li',
	                null,
	                React.createElement(
	                  Link,
	                  { to: '/editable' },
	                  'Editable Grid'
	                )
	              ),
	              React.createElement(
	                'li',
	                null,
	                React.createElement(
	                  Link,
	                  { to: '/formatters' },
	                  'Custom Formatters'
	                )
	              ),
	              React.createElement(
	                'li',
	                null,
	                React.createElement(
	                  Link,
	                  { to: '/editors' },
	                  'Rich Cell Editors'
	                )
	              ),
	              React.createElement(
	                'li',
	                null,
	                React.createElement(
	                  Link,
	                  { to: '/million-rows' },
	                  'One Million Rows'
	                )
	              ),
	              React.createElement(
	                'li',
	                null,
	                React.createElement(
	                  Link,
	                  { to: '/sortable' },
	                  'Sortable Grid'
	                )
	              ),
	              React.createElement(
	                'li',
	                null,
	                React.createElement(
	                  Link,
	                  { to: '/filterable' },
	                  'Filterable Grid'
	                )
	              ),
	              React.createElement(
	                'li',
	                null,
	                React.createElement(
	                  Link,
	                  { to: '/immutable-data' },
	                  'Immutable Data Grid'
	                )
	              ),
	              React.createElement(
	                'li',
	                null,
	                React.createElement(
	                  Link,
	                  { to: '/custom-row-renderer' },
	                  'Custom Row Render'
	                )
	              ),
	              React.createElement(
	                'li',
	                null,
	                React.createElement(
	                  Link,
	                  { to: '/empty-rows' },
	                  'Empty Rows'
	                )
	              ),
	              React.createElement(
	                'li',
	                null,
	                React.createElement(
	                  Link,
	                  { to: '/all-the-features' },
	                  'All-The-Features Grid'
	                )
	              ),
	              React.createElement(
	                'li',
	                null,
	                React.createElement(
	                  Link,
	                  { to: '/all-features-immutable' },
	                  'All-The-Features with Immutable Data'
	                )
	              )
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-md-10' },
	          React.createElement(
	            'div',
	            { id: 'example' },
	            React.createElement(
	              'h1',
	              { className: 'page-header' },
	              'React Data Grid Examples'
	            ),
	            this.props.children
	          )
	        )
	      )
	    );
	  }
	});

	var routes = React.createElement(
	  Route,
	  { path: '/', component: App },
	  React.createElement(IndexRoute, { component: basicExample }),
	  React.createElement(Route, { path: 'basic', component: basicExample }),
	  React.createElement(Route, { path: 'resizable', component: resizableExample }),
	  React.createElement(Route, { path: 'fixed', component: fixedColsExample }),
	  React.createElement(Route, { path: 'editable', component: editableExample }),
	  React.createElement(Route, { path: 'formatters', component: formatterExample }),
	  React.createElement(Route, { path: 'editors', component: editorsExample }),
	  React.createElement(Route, { path: 'sortable', component: sortableExample }),
	  React.createElement(Route, { path: 'filterable', component: filterableExample }),
	  React.createElement(Route, { path: 'million-rows', component: millionRowsExample }),
	  React.createElement(Route, { path: 'all-the-features', component: fullExample }),
	  React.createElement(Route, { path: 'all-features-immutable', component: fullExampleImmutable }),
	  React.createElement(Route, { path: 'immutable-data', component: immutableDataExample }),
	  React.createElement(Route, { path: 'custom-row-renderer', component: customRowRenderer }),
	  React.createElement(Route, { path: 'empty-rows', component: emptyRowsExample })
	);

	ReactDOM.render(React.createElement(
	  Router,
	  { history: hashHistory },
	  routes
	), document.getElementById('app'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* components */
	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Router2 = __webpack_require__(4);

	var _Router3 = _interopRequireDefault(_Router2);

	exports.Router = _Router3['default'];

	var _Link2 = __webpack_require__(42);

	var _Link3 = _interopRequireDefault(_Link2);

	exports.Link = _Link3['default'];

	var _IndexLink2 = __webpack_require__(43);

	var _IndexLink3 = _interopRequireDefault(_IndexLink2);

	exports.IndexLink = _IndexLink3['default'];

	/* components (configuration) */

	var _IndexRedirect2 = __webpack_require__(44);

	var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);

	exports.IndexRedirect = _IndexRedirect3['default'];

	var _IndexRoute2 = __webpack_require__(46);

	var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);

	exports.IndexRoute = _IndexRoute3['default'];

	var _Redirect2 = __webpack_require__(45);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	exports.Redirect = _Redirect3['default'];

	var _Route2 = __webpack_require__(47);

	var _Route3 = _interopRequireDefault(_Route2);

	exports.Route = _Route3['default'];

	/* mixins */

	var _History2 = __webpack_require__(48);

	var _History3 = _interopRequireDefault(_History2);

	exports.History = _History3['default'];

	var _Lifecycle2 = __webpack_require__(49);

	var _Lifecycle3 = _interopRequireDefault(_Lifecycle2);

	exports.Lifecycle = _Lifecycle3['default'];

	var _RouteContext2 = __webpack_require__(50);

	var _RouteContext3 = _interopRequireDefault(_RouteContext2);

	exports.RouteContext = _RouteContext3['default'];

	/* utils */

	var _useRoutes2 = __webpack_require__(51);

	var _useRoutes3 = _interopRequireDefault(_useRoutes2);

	exports.useRoutes = _useRoutes3['default'];

	var _RouteUtils = __webpack_require__(36);

	exports.createRoutes = _RouteUtils.createRoutes;

	var _RouterContext2 = __webpack_require__(38);

	var _RouterContext3 = _interopRequireDefault(_RouterContext2);

	exports.RouterContext = _RouterContext3['default'];

	var _RoutingContext2 = __webpack_require__(52);

	var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);

	exports.RoutingContext = _RoutingContext3['default'];

	var _PropTypes2 = __webpack_require__(37);

	var _PropTypes3 = _interopRequireDefault(_PropTypes2);

	exports.PropTypes = _PropTypes3['default'];

	var _match2 = __webpack_require__(53);

	var _match3 = _interopRequireDefault(_match2);

	exports.match = _match3['default'];

	var _useRouterHistory2 = __webpack_require__(57);

	var _useRouterHistory3 = _interopRequireDefault(_useRouterHistory2);

	exports.useRouterHistory = _useRouterHistory3['default'];

	var _PatternUtils = __webpack_require__(29);

	exports.formatPattern = _PatternUtils.formatPattern;

	/* histories */

	var _browserHistory2 = __webpack_require__(58);

	var _browserHistory3 = _interopRequireDefault(_browserHistory2);

	exports.browserHistory = _browserHistory3['default'];

	var _hashHistory2 = __webpack_require__(61);

	var _hashHistory3 = _interopRequireDefault(_hashHistory2);

	exports.hashHistory = _hashHistory3['default'];

	var _createMemoryHistory2 = __webpack_require__(54);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	exports.createMemoryHistory = _createMemoryHistory3['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _historyLibCreateHashHistory = __webpack_require__(6);

	var _historyLibCreateHashHistory2 = _interopRequireDefault(_historyLibCreateHashHistory);

	var _historyLibUseQueries = __webpack_require__(23);

	var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _createTransitionManager = __webpack_require__(26);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _PropTypes = __webpack_require__(37);

	var _RouterContext = __webpack_require__(38);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _RouteUtils = __webpack_require__(36);

	var _RouterUtils = __webpack_require__(41);

	var _routerWarning = __webpack_require__(27);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function isDeprecatedHistory(history) {
	  return !history || !history.__v2_compatible__;
	}

	var _React$PropTypes = _react2['default'].PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RouterContext> with all the props
	 * it needs each time the URL changes.
	 */
	var Router = _react2['default'].createClass({
	  displayName: 'Router',

	  propTypes: {
	    history: object,
	    children: _PropTypes.routes,
	    routes: _PropTypes.routes, // alias for children
	    render: func,
	    createElement: func,
	    onError: func,
	    onUpdate: func,

	    // PRIVATE: For client-side rehydration of server match.
	    matchContext: object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      render: function render(props) {
	        return _react2['default'].createElement(_RouterContext2['default'], props);
	      }
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  },

	  handleError: function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  },

	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    var _props = this.props;
	    var parseQueryString = _props.parseQueryString;
	    var stringifyQuery = _props.stringifyQuery;

	    process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](!(parseQueryString || stringifyQuery), '`parseQueryString` and `stringifyQuery` are deprecated. Please create a custom history. http://tiny.cc/router-customquerystring') : undefined;

	    var _createRouterObjects = this.createRouterObjects();

	    var history = _createRouterObjects.history;
	    var transitionManager = _createRouterObjects.transitionManager;
	    var router = _createRouterObjects.router;

	    this._unlisten = transitionManager.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });

	    this.history = history;
	    this.router = router;
	  },

	  createRouterObjects: function createRouterObjects() {
	    var matchContext = this.props.matchContext;

	    if (matchContext) {
	      return matchContext;
	    }

	    var history = this.props.history;
	    var _props2 = this.props;
	    var routes = _props2.routes;
	    var children = _props2.children;

	    if (isDeprecatedHistory(history)) {
	      history = this.wrapDeprecatedHistory(history);
	    }

	    var transitionManager = _createTransitionManager2['default'](history, _RouteUtils.createRoutes(routes || children));
	    var router = _RouterUtils.createRouterObject(history, transitionManager);
	    var routingHistory = _RouterUtils.createRoutingHistory(history, transitionManager);

	    return { history: routingHistory, transitionManager: transitionManager, router: router };
	  },

	  wrapDeprecatedHistory: function wrapDeprecatedHistory(history) {
	    var _props3 = this.props;
	    var parseQueryString = _props3.parseQueryString;
	    var stringifyQuery = _props3.stringifyQuery;

	    var createHistory = undefined;
	    if (history) {
	      process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'It appears you have provided a deprecated history object to `<Router/>`, please use a history provided by ' + 'React Router with `import { browserHistory } from \'react-router\'` or `import { hashHistory } from \'react-router\'`. ' + 'If you are using a custom history please create it with `useRouterHistory`, see http://tiny.cc/router-usinghistory for details.') : undefined;
	      createHistory = function () {
	        return history;
	      };
	    } else {
	      process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, '`Router` no longer defaults the history prop to hash history. Please use the `hashHistory` singleton instead. http://tiny.cc/router-defaulthistory') : undefined;
	      createHistory = _historyLibCreateHashHistory2['default'];
	    }

	    return _historyLibUseQueries2['default'](createHistory)({ parseQueryString: parseQueryString, stringifyQuery: stringifyQuery });
	  },

	  /* istanbul ignore next: sanity check */
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : undefined;

	    process.env.NODE_ENV !== 'production' ? _routerWarning2['default']((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : undefined;
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  },

	  render: function render() {
	    var _state = this.state;
	    var location = _state.location;
	    var routes = _state.routes;
	    var params = _state.params;
	    var components = _state.components;
	    var _props4 = this.props;
	    var createElement = _props4.createElement;
	    var render = _props4.render;

	    var props = _objectWithoutProperties(_props4, ['createElement', 'render']);

	    if (location == null) return null; // Async match

	    // Only forward non-Router-specific props to routing context, as those are
	    // the only ones that might be custom routing context props.
	    Object.keys(Router.propTypes).forEach(function (propType) {
	      return delete props[propType];
	    });

	    return render(_extends({}, props, {
	      history: this.history,
	      router: this.router,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components,
	      createElement: createElement
	    }));
	  }

	});

	exports['default'] = Router;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(7);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(8);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(9);

	var _PathUtils = __webpack_require__(10);

	var _ExecutionEnvironment = __webpack_require__(11);

	var _DOMUtils = __webpack_require__(12);

	var _DOMStateStorage = __webpack_require__(13);

	var _createDOMHistory = __webpack_require__(14);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	function isAbsolutePath(path) {
	  return typeof path === 'string' && path.charAt(0) === '/';
	}

	function ensureSlash() {
	  var path = _DOMUtils.getHashPath();

	  if (isAbsolutePath(path)) return true;

	  _DOMUtils.replaceHashPath('/' + path);

	  return false;
	}

	function addQueryStringValueToPath(path, key, value) {
	  return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
	}

	function stripQueryStringValueFromPath(path, key) {
	  return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
	}

	function getQueryStringValueFromPath(path, key) {
	  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
	  return match && match[1];
	}

	var DefaultQueryKey = '_k';

	function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Hash history needs a DOM') : _invariant2['default'](false) : undefined;

	  var queryKey = options.queryKey;

	  if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;

	  function getCurrentLocation() {
	    var path = _DOMUtils.getHashPath();

	    var key = undefined,
	        state = undefined;
	    if (queryKey) {
	      key = getQueryStringValueFromPath(path, queryKey);
	      path = stripQueryStringValueFromPath(path, queryKey);

	      if (key) {
	        state = _DOMStateStorage.readState(key);
	      } else {
	        state = null;
	        key = history.createKey();
	        _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
	      }
	    } else {
	      key = state = null;
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function startHashChangeListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function hashChangeListener() {
	      if (!ensureSlash()) return; // Always make sure hashes are preceeded with a /.

	      transitionTo(getCurrentLocation());
	    }

	    ensureSlash();
	    _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    var path = (basename || '') + pathname + search;

	    if (queryKey) {
	      path = addQueryStringValueToPath(path, queryKey, key);
	      _DOMStateStorage.saveState(key, state);
	    } else {
	      // Drop key and state.
	      location.key = location.state = null;
	    }

	    var currentHash = _DOMUtils.getHashPath();

	    if (action === _Actions.PUSH) {
	      if (currentHash !== path) {
	        window.location.hash = path;
	      } else {
	        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'You cannot PUSH the same path using hash history') : undefined;
	      }
	    } else if (currentHash !== path) {
	      // REPLACE
	      _DOMUtils.replaceHashPath(path);
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopHashChangeListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }

	  function push(location) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.push(location);
	  }

	  function replace(location) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.replace(location);
	  }

	  var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();

	  function go(n) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;

	    history.go(n);
	  }

	  function createHref(path) {
	    return '#' + history.createHref(path);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopHashChangeListener();
	  }

	  // deprecated
	  function pushState(state, path) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.pushState(state, path);
	  }

	  // deprecated
	  function replaceState(state, path) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.replaceState(state, path);
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    push: push,
	    replace: replace,
	    go: go,
	    createHref: createHref,

	    registerTransitionHook: registerTransitionHook, // deprecated - warning is in createHistory
	    unregisterTransitionHook: unregisterTransitionHook, // deprecated - warning is in createHistory
	    pushState: pushState, // deprecated - warning is in createHistory
	    replaceState: replaceState // deprecated - warning is in createHistory
	  });
	}

	exports['default'] = createHashHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 8 */
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	'use strict';

	exports.__esModule = true;
	var PUSH = 'PUSH';

	exports.PUSH = PUSH;
	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = 'REPLACE';

	exports.REPLACE = REPLACE;
	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = 'POP';

	exports.POP = POP;
	exports['default'] = {
	  PUSH: PUSH,
	  REPLACE: REPLACE,
	  POP: POP
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.extractPath = extractPath;
	exports.parsePath = parsePath;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(7);

	var _warning2 = _interopRequireDefault(_warning);

	function extractPath(string) {
	  var match = string.match(/^https?:\/\/[^\/]*/);

	  if (match == null) return string;

	  return string.substring(match[0].length);
	}

	function parsePath(path) {
	  var pathname = extractPath(path);
	  var search = '';
	  var hash = '';

	  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }

	  if (pathname === '') pathname = '/';

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	exports.canUseDOM = canUseDOM;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;
	exports.getHashPath = getHashPath;
	exports.replaceHashPath = replaceHashPath;
	exports.getWindowPath = getWindowPath;
	exports.go = go;
	exports.getUserConfirmation = getUserConfirmation;
	exports.supportsHistory = supportsHistory;
	exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

	function addEventListener(node, event, listener) {
	  if (node.addEventListener) {
	    node.addEventListener(event, listener, false);
	  } else {
	    node.attachEvent('on' + event, listener);
	  }
	}

	function removeEventListener(node, event, listener) {
	  if (node.removeEventListener) {
	    node.removeEventListener(event, listener, false);
	  } else {
	    node.detachEvent('on' + event, listener);
	  }
	}

	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  return window.location.href.split('#')[1] || '';
	}

	function replaceHashPath(path) {
	  window.location.replace(window.location.pathname + window.location.search + '#' + path);
	}

	function getWindowPath() {
	  return window.location.pathname + window.location.search + window.location.hash;
	}

	function go(n) {
	  if (n) window.history.go(n);
	}

	function getUserConfirmation(message, callback) {
	  callback(window.confirm(message));
	}

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	 */

	function supportsHistory() {
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  return window.history && 'pushState' in window.history;
	}

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */

	function supportsGoWithoutReloadUsingHash() {
	  var ua = navigator.userAgent;
	  return ua.indexOf('Firefox') === -1;
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*eslint-disable no-empty */
	'use strict';

	exports.__esModule = true;
	exports.saveState = saveState;
	exports.readState = readState;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(7);

	var _warning2 = _interopRequireDefault(_warning);

	var KeyPrefix = '@@History/';
	var QuotaExceededErrors = ['QuotaExceededError', 'QUOTA_EXCEEDED_ERR'];

	var SecurityError = 'SecurityError';

	function createKey(key) {
	  return KeyPrefix + key;
	}

	function saveState(key, state) {
	  try {
	    if (state == null) {
	      window.sessionStorage.removeItem(createKey(key));
	    } else {
	      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	    }
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

	      return;
	    }

	    if (QuotaExceededErrors.indexOf(error.name) >= 0 && window.sessionStorage.length === 0) {
	      // Safari "private mode" throws QuotaExceededError.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

	      return;
	    }

	    throw error;
	  }
	}

	function readState(key) {
	  var json = undefined;
	  try {
	    json = window.sessionStorage.getItem(createKey(key));
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

	      return null;
	    }
	  }

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }

	  return null;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(8);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(11);

	var _DOMUtils = __webpack_require__(12);

	var _createHistory = __webpack_require__(15);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createDOMHistory(options) {
	  var history = _createHistory2['default'](_extends({
	    getUserConfirmation: _DOMUtils.getUserConfirmation
	  }, options, {
	    go: _DOMUtils.go
	  }));

	  function listen(listener) {
	    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

	    return history.listen(listener);
	  }

	  return _extends({}, history, {
	    listen: listen
	  });
	}

	exports['default'] = createDOMHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(7);

	var _warning2 = _interopRequireDefault(_warning);

	var _deepEqual = __webpack_require__(16);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _PathUtils = __webpack_require__(10);

	var _AsyncUtils = __webpack_require__(19);

	var _Actions = __webpack_require__(9);

	var _createLocation2 = __webpack_require__(20);

	var _createLocation3 = _interopRequireDefault(_createLocation2);

	var _runTransitionHook = __webpack_require__(21);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _deprecate = __webpack_require__(22);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function createRandomKey(length) {
	  return Math.random().toString(36).substr(2, length);
	}

	function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search &&
	  //a.action === b.action && // Different action !== location change.
	  a.key === b.key && _deepEqual2['default'](a.state, b.state);
	}

	var DefaultKeyLength = 6;

	function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var finishTransition = options.finishTransition;
	  var saveState = options.saveState;
	  var go = options.go;
	  var getUserConfirmation = options.getUserConfirmation;
	  var keyLength = options.keyLength;

	  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

	  var transitionHooks = [];

	  function listenBefore(hook) {
	    transitionHooks.push(hook);

	    return function () {
	      transitionHooks = transitionHooks.filter(function (item) {
	        return item !== hook;
	      });
	    };
	  }

	  var allKeys = [];
	  var changeListeners = [];
	  var location = undefined;

	  function getCurrent() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) {
	      return allKeys.indexOf(pendingLocation.key);
	    } else if (location) {
	      return allKeys.indexOf(location.key);
	    } else {
	      return -1;
	    }
	  }

	  function updateLocation(newLocation) {
	    var current = getCurrent();

	    location = newLocation;

	    if (location.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
	    } else if (location.action === _Actions.REPLACE) {
	      allKeys[current] = location.key;
	    }

	    changeListeners.forEach(function (listener) {
	      listener(location);
	    });
	  }

	  function listen(listener) {
	    changeListeners.push(listener);

	    if (location) {
	      listener(location);
	    } else {
	      var _location = getCurrentLocation();
	      allKeys = [_location.key];
	      updateLocation(_location);
	    }

	    return function () {
	      changeListeners = changeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }

	  function confirmTransitionTo(location, callback) {
	    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
	      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
	        if (result != null) {
	          done(result);
	        } else {
	          next();
	        }
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  }

	  var pendingLocation = undefined;

	  function transitionTo(nextLocation) {
	    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

	    pendingLocation = nextLocation;

	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

	      if (ok) {
	        // treat PUSH to current path like REPLACE to be consistent with browsers
	        if (nextLocation.action === _Actions.PUSH) {
	          var prevPath = createPath(location);
	          var nextPath = createPath(nextLocation);

	          if (nextPath === prevPath && _deepEqual2['default'](location.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
	        }

	        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
	      } else if (location && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(location.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);

	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
	      }
	    });
	  }

	  function push(location) {
	    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
	  }

	  function replace(location) {
	    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
	  }

	  function goBack() {
	    go(-1);
	  }

	  function goForward() {
	    go(1);
	  }

	  function createKey() {
	    return createRandomKey(keyLength);
	  }

	  function createPath(location) {
	    if (location == null || typeof location === 'string') return location;

	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;

	    var result = pathname;

	    if (search) result += search;

	    if (hash) result += hash;

	    return result;
	  }

	  function createHref(location) {
	    return createPath(location);
	  }

	  function createLocation(location, action) {
	    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

	    if (typeof action === 'object') {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to history.createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

	      if (typeof location === 'string') location = _PathUtils.parsePath(location);

	      location = _extends({}, location, { state: action });

	      action = key;
	      key = arguments[3] || createKey();
	    }

	    return _createLocation3['default'](location, action, key);
	  }

	  // deprecated
	  function setState(state) {
	    if (location) {
	      updateLocationState(location, state);
	      updateLocation(location);
	    } else {
	      updateLocationState(getCurrentLocation(), state);
	    }
	  }

	  function updateLocationState(location, state) {
	    location.state = _extends({}, location.state, state);
	    saveState(location.key, location.state);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    transitionHooks = transitionHooks.filter(function (item) {
	      return item !== hook;
	    });
	  }

	  // deprecated
	  function pushState(state, path) {
	    if (typeof path === 'string') path = _PathUtils.parsePath(path);

	    push(_extends({ state: state }, path));
	  }

	  // deprecated
	  function replaceState(state, path) {
	    if (typeof path === 'string') path = _PathUtils.parsePath(path);

	    replace(_extends({ state: state }, path));
	  }

	  return {
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: createPath,
	    createHref: createHref,
	    createLocation: createLocation,

	    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
	    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
	    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
	    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	  };
	}

	exports['default'] = createHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(17);
	var isArguments = __webpack_require__(18);

	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;

	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}

	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },
/* 17 */
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;

	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },
/* 18 */
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';

	exports = module.exports = supportsArgumentsClass ? supported : unsupported;

	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};

	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports.loopAsync = loopAsync;

	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = undefined;

	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(_slice.call(arguments));
	      return;
	    }

	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) {
	      return;
	    }

	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }

	    sync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }

	    sync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }

	  next();
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(7);

	var _warning2 = _interopRequireDefault(_warning);

	var _Actions = __webpack_require__(9);

	var _PathUtils = __webpack_require__(10);

	function createLocation() {
	  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
	  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

	  if (typeof location === 'string') location = _PathUtils.parsePath(location);

	  if (typeof action === 'object') {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

	    location = _extends({}, location, { state: action });

	    action = key || _Actions.POP;
	    key = _fourthArg;
	  }

	  var pathname = location.pathname || '/';
	  var search = location.search || '';
	  var hash = location.hash || '';
	  var state = location.state || null;

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	}

	exports['default'] = createLocation;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(7);

	var _warning2 = _interopRequireDefault(_warning);

	function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);

	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
	  }
	}

	exports['default'] = runTransitionHook;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(7);

	var _warning2 = _interopRequireDefault(_warning);

	function deprecate(fn, message) {
	  return function () {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] ' + message) : undefined;
	    return fn.apply(this, arguments);
	  };
	}

	exports['default'] = deprecate;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(7);

	var _warning2 = _interopRequireDefault(_warning);

	var _queryString = __webpack_require__(24);

	var _runTransitionHook = __webpack_require__(21);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _PathUtils = __webpack_require__(10);

	var _deprecate = __webpack_require__(22);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var SEARCH_BASE_KEY = '$searchBase';

	function defaultStringifyQuery(query) {
	  return _queryString.stringify(query).replace(/%20/g, '+');
	}

	var defaultParseQueryString = _queryString.parse;

	function isNestedObject(object) {
	  for (var p in object) {
	    if (object.hasOwnProperty(p) && typeof object[p] === 'object' && !Array.isArray(object[p]) && object[p] !== null) return true;
	  }return false;
	}

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);

	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;

	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

	    function addQuery(location) {
	      if (location.query == null) {
	        var search = location.search;

	        location.query = parseQueryString(search.substring(1));
	        location[SEARCH_BASE_KEY] = { search: search, searchBase: '' };
	      }

	      // TODO: Instead of all the book-keeping here, this should just strip the
	      // stringified query from the search.

	      return location;
	    }

	    function appendQuery(location, query) {
	      var _extends2;

	      var searchBaseSpec = location[SEARCH_BASE_KEY];
	      var queryString = query ? stringifyQuery(query) : '';
	      if (!searchBaseSpec && !queryString) {
	        return location;
	      }

	      process.env.NODE_ENV !== 'production' ? _warning2['default'](stringifyQuery !== defaultStringifyQuery || !isNestedObject(query), 'useQueries does not stringify nested query objects by default; ' + 'use a custom stringifyQuery function') : undefined;

	      if (typeof location === 'string') location = _PathUtils.parsePath(location);

	      var searchBase = undefined;
	      if (searchBaseSpec && location.search === searchBaseSpec.search) {
	        searchBase = searchBaseSpec.searchBase;
	      } else {
	        searchBase = location.search || '';
	      }

	      var search = searchBase;
	      if (queryString) {
	        search += (search ? '&' : '?') + queryString;
	      }

	      return _extends({}, location, (_extends2 = {
	        search: search
	      }, _extends2[SEARCH_BASE_KEY] = { search: search, searchBase: searchBase }, _extends2));
	    }

	    // Override all read methods with query-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addQuery(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addQuery(location));
	      });
	    }

	    // Override all write methods with query-aware versions.
	    function push(location) {
	      history.push(appendQuery(location, location.query));
	    }

	    function replace(location) {
	      history.replace(appendQuery(location, location.query));
	    }

	    function createPath(location, query) {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createPath is deprecated; use a location descriptor instead') : undefined;

	      return history.createPath(appendQuery(location, query || location.query));
	    }

	    function createHref(location, query) {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createHref is deprecated; use a location descriptor instead') : undefined;

	      return history.createHref(appendQuery(location, query || location.query));
	    }

	    function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var fullLocation = history.createLocation.apply(history, [appendQuery(location, location.query)].concat(args));
	      if (location.query) {
	        fullLocation.query = location.query;
	      }
	      return addQuery(fullLocation);
	    }

	    // deprecated
	    function pushState(state, path, query) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      push(_extends({ state: state }, path, { query: query }));
	    }

	    // deprecated
	    function replaceState(state, path, query) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      replace(_extends({ state: state }, path, { query: query }));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useQueries;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(25);

	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};

	exports.parse = function (str) {
		if (typeof str !== 'string') {
			return {};
		}

		str = str.trim().replace(/^(\?|#|&)/, '');

		if (!str) {
			return {};
		}

		return str.split('&').reduce(function (ret, param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;

			key = decodeURIComponent(key);

			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			if (!ret.hasOwnProperty(key)) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}

			return ret;
		}, {});
	};

	exports.stringify = function (obj) {
		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];

			if (val === undefined) {
				return '';
			}

			if (val === null) {
				return key;
			}

			if (Array.isArray(val)) {
				return val.slice().sort().map(function (val2) {
					return strictUriEncode(key) + '=' + strictUriEncode(val2);
				}).join('&');
			}

			return strictUriEncode(key) + '=' + strictUriEncode(val);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = createTransitionManager;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _routerWarning = __webpack_require__(27);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _historyLibActions = __webpack_require__(9);

	var _computeChangedRoutes2 = __webpack_require__(28);

	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

	var _TransitionUtils = __webpack_require__(31);

	var _isActive2 = __webpack_require__(33);

	var _isActive3 = _interopRequireDefault(_isActive2);

	var _getComponents = __webpack_require__(34);

	var _getComponents2 = _interopRequireDefault(_getComponents);

	var _matchRoutes = __webpack_require__(35);

	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

	function hasAnyProperties(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
	  }return false;
	}

	function createTransitionManager(history, routes) {
	  var state = {};

	  // Signature should be (location, indexOnly), but needs to support (path,
	  // query, indexOnly)
	  function isActive(location) {
	    var indexOnlyOrDeprecatedQuery = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	    var deprecatedIndexOnly = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	    var indexOnly = undefined;
	    if (indexOnlyOrDeprecatedQuery && indexOnlyOrDeprecatedQuery !== true || deprecatedIndexOnly !== null) {
	      process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, '`isActive(pathname, query, indexOnly) is deprecated; use `isActive(location, indexOnly)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : undefined;
	      location = { pathname: location, query: indexOnlyOrDeprecatedQuery };
	      indexOnly = deprecatedIndexOnly || false;
	    } else {
	      location = history.createLocation(location);
	      indexOnly = indexOnlyOrDeprecatedQuery;
	    }

	    return _isActive3['default'](location, indexOnly, state.location, state.routes, state.params);
	  }

	  function createLocationFromRedirectInfo(location) {
	    return history.createLocation(location, _historyLibActions.REPLACE);
	  }

	  var partialNextState = undefined;

	  function match(location, callback) {
	    if (partialNextState && partialNextState.location === location) {
	      // Continue from where we left off.
	      finishMatch(partialNextState, callback);
	    } else {
	      _matchRoutes2['default'](routes, location, function (error, nextState) {
	        if (error) {
	          callback(error);
	        } else if (nextState) {
	          finishMatch(_extends({}, nextState, { location: location }), callback);
	        } else {
	          callback();
	        }
	      });
	    }
	  }

	  function finishMatch(nextState, callback) {
	    var _computeChangedRoutes = _computeChangedRoutes3['default'](state, nextState);

	    var leaveRoutes = _computeChangedRoutes.leaveRoutes;
	    var changeRoutes = _computeChangedRoutes.changeRoutes;
	    var enterRoutes = _computeChangedRoutes.enterRoutes;

	    _TransitionUtils.runLeaveHooks(leaveRoutes);

	    // Tear down confirmation hooks for left routes
	    leaveRoutes.filter(function (route) {
	      return enterRoutes.indexOf(route) === -1;
	    }).forEach(removeListenBeforeHooksForRoute);

	    // change and enter hooks are run in series
	    _TransitionUtils.runChangeHooks(changeRoutes, state, nextState, function (error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      _TransitionUtils.runEnterHooks(enterRoutes, nextState, finishEnterHooks);
	    });

	    function finishEnterHooks(error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      // TODO: Fetch components after state is updated.
	      _getComponents2['default'](nextState, function (error, components) {
	        if (error) {
	          callback(error);
	        } else {
	          // TODO: Make match a pure function and have some other API
	          // for "match and update state".
	          callback(null, null, state = _extends({}, nextState, { components: components }));
	        }
	      });
	    }

	    function handleErrorOrRedirect(error, redirectInfo) {
	      if (error) callback(error);else callback(null, createLocationFromRedirectInfo(redirectInfo));
	    }
	  }

	  var RouteGuid = 1;

	  function getRouteID(route) {
	    var create = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	    return route.__id__ || create && (route.__id__ = RouteGuid++);
	  }

	  var RouteHooks = Object.create(null);

	  function getRouteHooksForRoutes(routes) {
	    return routes.reduce(function (hooks, route) {
	      hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
	      return hooks;
	    }, []);
	  }

	  function transitionHook(location, callback) {
	    _matchRoutes2['default'](routes, location, function (error, nextState) {
	      if (nextState == null) {
	        // TODO: We didn't actually match anything, but hang
	        // onto error/nextState so we don't have to matchRoutes
	        // again in the listen callback.
	        callback();
	        return;
	      }

	      // Cache some state here so we don't have to
	      // matchRoutes() again in the listen callback.
	      partialNextState = _extends({}, nextState, { location: location });

	      var hooks = getRouteHooksForRoutes(_computeChangedRoutes3['default'](state, partialNextState).leaveRoutes);

	      var result = undefined;
	      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
	        // Passing the location arg here indicates to
	        // the user that this is a transition hook.
	        result = hooks[i](location);
	      }

	      callback(result);
	    });
	  }

	  /* istanbul ignore next: untestable with Karma */
	  function beforeUnloadHook() {
	    // Synchronously check to see if any route hooks want
	    // to prevent the current window/tab from closing.
	    if (state.routes) {
	      var hooks = getRouteHooksForRoutes(state.routes);

	      var message = undefined;
	      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
	        // Passing no args indicates to the user that this is a
	        // beforeunload hook. We don't know the next location.
	        message = hooks[i]();
	      }

	      return message;
	    }
	  }

	  var unlistenBefore = undefined,
	      unlistenBeforeUnload = undefined;

	  function removeListenBeforeHooksForRoute(route) {
	    var routeID = getRouteID(route, false);
	    if (!routeID) {
	      return;
	    }

	    delete RouteHooks[routeID];

	    if (!hasAnyProperties(RouteHooks)) {
	      // teardown transition & beforeunload hooks
	      if (unlistenBefore) {
	        unlistenBefore();
	        unlistenBefore = null;
	      }

	      if (unlistenBeforeUnload) {
	        unlistenBeforeUnload();
	        unlistenBeforeUnload = null;
	      }
	    }
	  }

	  /**
	   * Registers the given hook function to run before leaving the given route.
	   *
	   * During a normal transition, the hook function receives the next location
	   * as its only argument and must return either a) a prompt message to show
	   * the user, to make sure they want to leave the page or b) false, to prevent
	   * the transition.
	   *
	   * During the beforeunload event (in browsers) the hook receives no arguments.
	   * In this case it must return a prompt message to prevent the transition.
	   *
	   * Returns a function that may be used to unbind the listener.
	   */
	  function listenBeforeLeavingRoute(route, hook) {
	    // TODO: Warn if they register for a route that isn't currently
	    // active. They're probably doing something wrong, like re-creating
	    // route objects on every location change.
	    var routeID = getRouteID(route);
	    var hooks = RouteHooks[routeID];

	    if (!hooks) {
	      var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);

	      RouteHooks[routeID] = [hook];

	      if (thereWereNoRouteHooks) {
	        // setup transition & beforeunload hooks
	        unlistenBefore = history.listenBefore(transitionHook);

	        if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
	      }
	    } else {
	      if (hooks.indexOf(hook) === -1) {
	        process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'adding multiple leave hooks for the same route is deprecated; manage multiple confirmations in your own code instead') : undefined;

	        hooks.push(hook);
	      }
	    }

	    return function () {
	      var hooks = RouteHooks[routeID];

	      if (hooks) {
	        var newHooks = hooks.filter(function (item) {
	          return item !== hook;
	        });

	        if (newHooks.length === 0) {
	          removeListenBeforeHooksForRoute(route);
	        } else {
	          RouteHooks[routeID] = newHooks;
	        }
	      }
	    };
	  }

	  /**
	   * This is the API for stateful environments. As the location
	   * changes, we update state and call the listener. We can also
	   * gracefully handle errors and redirects.
	   */
	  function listen(listener) {
	    // TODO: Only use a single history listener. Otherwise we'll
	    // end up with multiple concurrent calls to match.
	    return history.listen(function (location) {
	      if (state.location === location) {
	        listener(null, state);
	      } else {
	        match(location, function (error, redirectLocation, nextState) {
	          if (error) {
	            listener(error);
	          } else if (redirectLocation) {
	            history.transitionTo(redirectLocation);
	          } else if (nextState) {
	            listener(null, nextState);
	          } else {
	            process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : undefined;
	          }
	        });
	      }
	    });
	  }

	  return {
	    isActive: isActive,
	    match: match,
	    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
	    listen: listen
	  };
	}

	//export default useRoutes
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = routerWarning;
	exports._resetWarned = _resetWarned;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(7);

	var _warning2 = _interopRequireDefault(_warning);

	var warned = {};

	function routerWarning(falseToWarn, message) {
	  // Only issue deprecation warnings once.
	  if (message.indexOf('deprecated') !== -1) {
	    if (warned[message]) {
	      return;
	    }

	    warned[message] = true;
	  }

	  message = '[react-router] ' + message;

	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  process.env.NODE_ENV !== 'production' ? _warning2['default'].apply(undefined, [falseToWarn, message].concat(args)) : undefined;
	}

	function _resetWarned() {
	  warned = {};
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(29);

	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;

	  var paramNames = _PatternUtils.getParamNames(route.path);

	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}

	/**
	 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
	 * the change from prevState to nextState. We leave routes if either
	 * 1) they are not in the next state or 2) they are in the next state
	 * but their params have changed (i.e. /users/123 => /users/456).
	 *
	 * leaveRoutes are ordered starting at the leaf route of the tree
	 * we're leaving up to the common parent route. enterRoutes are ordered
	 * from the top of the tree we're entering down to the leaf route.
	 *
	 * changeRoutes are any routes that didn't leave or enter during
	 * the transition.
	 */
	function computeChangedRoutes(prevState, nextState) {
	  var prevRoutes = prevState && prevState.routes;
	  var nextRoutes = nextState.routes;

	  var leaveRoutes = undefined,
	      changeRoutes = undefined,
	      enterRoutes = undefined;
	  if (prevRoutes) {
	    (function () {
	      var parentIsLeaving = false;
	      leaveRoutes = prevRoutes.filter(function (route) {
	        if (parentIsLeaving) {
	          return true;
	        } else {
	          var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	          if (isLeaving) parentIsLeaving = true;
	          return isLeaving;
	        }
	      });

	      // onLeave hooks start at the leaf route.
	      leaveRoutes.reverse();

	      enterRoutes = [];
	      changeRoutes = [];

	      nextRoutes.forEach(function (route) {
	        var isNew = prevRoutes.indexOf(route) === -1;
	        var paramsChanged = leaveRoutes.indexOf(route) !== -1;

	        if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
	      });
	    })();
	  } else {
	    leaveRoutes = [];
	    changeRoutes = [];
	    enterRoutes = nextRoutes;
	  }

	  return {
	    leaveRoutes: leaveRoutes,
	    changeRoutes: changeRoutes,
	    enterRoutes: enterRoutes
	  };
	}

	exports['default'] = computeChangedRoutes;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(30);

	var _invariant2 = _interopRequireDefault(_invariant);

	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function escapeSource(string) {
	  return escapeRegExp(string).replace(/\/+/g, '/+');
	}

	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];

	  var match = undefined,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeSource(pattern.slice(lastIndex, match.index));
	    }

	    if (match[1]) {
	      regexpSource += '([^/]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '**') {
	      regexpSource += '(.*)';
	      paramNames.push('splat');
	    } else if (match[0] === '*') {
	      regexpSource += '(.*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }

	    tokens.push(match[0]);

	    lastIndex = matcher.lastIndex;
	  }

	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeSource(pattern.slice(lastIndex, pattern.length));
	  }

	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}

	var CompiledPatternsCache = {};

	function compilePattern(pattern) {
	  if (!(pattern in CompiledPatternsCache)) CompiledPatternsCache[pattern] = _compilePattern(pattern);

	  return CompiledPatternsCache[pattern];
	}

	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 * - **             Consumes (greedy) all characters up to the next character
	 *                  in the pattern, or to the end of the URL if there is none
	 *
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */

	function matchPattern(pattern, pathname) {
	  // Make leading slashes consistent between pattern and pathname.
	  if (pattern.charAt(0) !== '/') {
	    pattern = '/' + pattern;
	  }
	  if (pathname.charAt(0) !== '/') {
	    pathname = '/' + pathname;
	  }

	  var _compilePattern2 = compilePattern(pattern);

	  var regexpSource = _compilePattern2.regexpSource;
	  var paramNames = _compilePattern2.paramNames;
	  var tokens = _compilePattern2.tokens;

	  regexpSource += '/*'; // Capture path separators

	  // Special-case patterns like '*' for catch-all routes.
	  if (tokens[tokens.length - 1] === '*') {
	    regexpSource += '$';
	  }

	  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));

	  var remainingPathname = undefined,
	      paramValues = undefined;
	  if (match != null) {
	    var matchedPath = match[0];
	    remainingPathname = pathname.substr(matchedPath.length);

	    // If we didn't match the entire pathname, then make sure that the match we
	    // did get ends at a path separator (potentially the one we added above at
	    // the beginning of the path, if the actual match was empty).
	    if (remainingPathname && matchedPath.charAt(matchedPath.length - 1) !== '/') {
	      return {
	        remainingPathname: null,
	        paramNames: paramNames,
	        paramValues: null
	      };
	    }

	    paramValues = match.slice(1).map(function (v) {
	      return v && decodeURIComponent(v);
	    });
	  } else {
	    remainingPathname = paramValues = null;
	  }

	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: paramValues
	  };
	}

	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}

	function getParams(pattern, pathname) {
	  var _matchPattern = matchPattern(pattern, pathname);

	  var paramNames = _matchPattern.paramNames;
	  var paramValues = _matchPattern.paramValues;

	  if (paramValues != null) {
	    return paramNames.reduce(function (memo, paramName, index) {
	      memo[paramName] = paramValues[index];
	      return memo;
	    }, {});
	  }

	  return null;
	}

	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */

	function formatPattern(pattern, params) {
	  params = params || {};

	  var _compilePattern3 = compilePattern(pattern);

	  var tokens = _compilePattern3.tokens;

	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0;

	  var token = undefined,
	      paramName = undefined,
	      paramValue = undefined;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];

	    if (token === '*' || token === '**') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : _invariant2['default'](false) : undefined;

	      if (paramValue != null) pathname += encodeURI(paramValue);
	    } else if (token === '(') {
	      parenCount += 1;
	    } else if (token === ')') {
	      parenCount -= 1;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];

	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : _invariant2['default'](false) : undefined;

	      if (paramValue != null) pathname += encodeURIComponent(paramValue);
	    } else {
	      pathname += token;
	    }
	  }

	  return pathname.replace(/\/+/g, '/');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 30 */
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runChangeHooks = runChangeHooks;
	exports.runLeaveHooks = runLeaveHooks;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _AsyncUtils = __webpack_require__(32);

	var _routerWarning = __webpack_require__(27);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function createTransitionHook(hook, route, asyncArity) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    hook.apply(route, args);

	    if (hook.length < asyncArity) {
	      var callback = args[args.length - 1];
	      // Assume hook executes synchronously and
	      // automatically call the callback.
	      callback();
	    }
	  };
	}

	function getEnterHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3));

	    return hooks;
	  }, []);
	}

	function getChangeHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4));
	    return hooks;
	  }, []);
	}

	function runTransitionHooks(length, iter, callback) {
	  if (!length) {
	    callback();
	    return;
	  }

	  var redirectInfo = undefined;
	  function replace(location, deprecatedPathname, deprecatedQuery) {
	    if (deprecatedPathname) {
	      process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, '`replaceState(state, pathname, query) is deprecated; use `replace(location)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : undefined;
	      redirectInfo = {
	        pathname: deprecatedPathname,
	        query: deprecatedQuery,
	        state: location
	      };

	      return;
	    }

	    redirectInfo = location;
	  }

	  _AsyncUtils.loopAsync(length, function (index, next, done) {
	    iter(index, replace, function (error) {
	      if (error || redirectInfo) {
	        done(error, redirectInfo); // No need to continue.
	      } else {
	          next();
	        }
	    });
	  }, callback);
	}

	/**
	 * Runs all onEnter hooks in the given array of routes in order
	 * with onEnter(nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */

	function runEnterHooks(routes, nextState, callback) {
	  var hooks = getEnterHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    hooks[index](nextState, replace, next);
	  }, callback);
	}

	/**
	 * Runs all onChange hooks in the given array of routes in order
	 * with onChange(prevState, nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */

	function runChangeHooks(routes, state, nextState, callback) {
	  var hooks = getChangeHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    hooks[index](state, nextState, replace, next);
	  }, callback);
	}

	/**
	 * Runs all onLeave hooks in the given array of routes in order.
	 */

	function runLeaveHooks(routes) {
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    if (routes[i].onLeave) routes[i].onLeave.call(routes[i]);
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;

	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = undefined;

	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(_slice.call(arguments));
	      return;
	    }

	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) {
	      return;
	    }

	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }

	    sync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }

	    sync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }

	  next();
	}

	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];

	  if (length === 0) return callback(null, values);

	  var isDone = false,
	      doneCount = 0;

	  function done(index, error, value) {
	    if (isDone) return;

	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;

	      isDone = ++doneCount === length;

	      if (isDone) callback(null, values);
	    }
	  }

	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isActive;

	var _PatternUtils = __webpack_require__(29);

	function deepEqual(a, b) {
	  if (a == b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return deepEqual(item, b[index]);
	    });
	  }

	  if (typeof a === 'object') {
	    for (var p in a) {
	      if (!Object.prototype.hasOwnProperty.call(a, p)) {
	        continue;
	      }

	      if (a[p] === undefined) {
	        if (b[p] !== undefined) {
	          return false;
	        }
	      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
	        return false;
	      } else if (!deepEqual(a[p], b[p])) {
	        return false;
	      }
	    }

	    return true;
	  }

	  return String(a) === String(b);
	}

	function paramsAreActive(paramNames, paramValues, activeParams) {
	  // FIXME: This doesn't work on repeated params in activeParams.
	  return paramNames.every(function (paramName, index) {
	    return String(paramValues[index]) === String(activeParams[paramName]);
	  });
	}

	function getMatchingRouteIndex(pathname, activeRoutes, activeParams) {
	  var remainingPathname = pathname,
	      paramNames = [],
	      paramValues = [];

	  for (var i = 0, len = activeRoutes.length; i < len; ++i) {
	    var route = activeRoutes[i];
	    var pattern = route.path || '';

	    if (pattern.charAt(0) === '/') {
	      remainingPathname = pathname;
	      paramNames = [];
	      paramValues = [];
	    }

	    if (remainingPathname !== null) {
	      var matched = _PatternUtils.matchPattern(pattern, remainingPathname);
	      remainingPathname = matched.remainingPathname;
	      paramNames = [].concat(paramNames, matched.paramNames);
	      paramValues = [].concat(paramValues, matched.paramValues);
	    }

	    if (remainingPathname === '' && route.path && paramsAreActive(paramNames, paramValues, activeParams)) return i;
	  }

	  return null;
	}

	/**
	 * Returns true if the given pathname matches the active routes
	 * and params.
	 */
	function routeIsActive(pathname, routes, params, indexOnly) {
	  var i = getMatchingRouteIndex(pathname, routes, params);

	  if (i === null) {
	    // No match.
	    return false;
	  } else if (!indexOnly) {
	    // Any match is good enough.
	    return true;
	  }

	  // If any remaining routes past the match index have paths, then we can't
	  // be on the index route.
	  return routes.slice(i + 1).every(function (route) {
	    return !route.path;
	  });
	}

	/**
	 * Returns true if all key/value pairs in the given query are
	 * currently active.
	 */
	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;

	  if (query == null) return true;

	  return deepEqual(query, activeQuery);
	}

	/**
	 * Returns true if a <Link> to the given pathname/query combination is
	 * currently active.
	 */

	function isActive(_ref, indexOnly, currentLocation, routes, params) {
	  var pathname = _ref.pathname;
	  var query = _ref.query;

	  if (currentLocation == null) return false;

	  if (!routeIsActive(pathname, routes, params, indexOnly)) return false;

	  return queryIsActive(query, currentLocation.query);
	}

	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AsyncUtils = __webpack_require__(32);

	function getComponentsForRoute(location, route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	  } else if (route.getComponent) {
	    route.getComponent(location, callback);
	  } else if (route.getComponents) {
	    route.getComponents(location, callback);
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getComponents method.
	 */
	function getComponents(nextState, callback) {
	  _AsyncUtils.mapAsync(nextState.routes, function (route, index, callback) {
	    getComponentsForRoute(nextState.location, route, callback);
	  }, callback);
	}

	exports['default'] = getComponents;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _routerWarning = __webpack_require__(27);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _AsyncUtils = __webpack_require__(32);

	var _PatternUtils = __webpack_require__(29);

	var _RouteUtils = __webpack_require__(36);

	function getChildRoutes(route, location, callback) {
	  if (route.childRoutes) {
	    return [null, route.childRoutes];
	  }
	  if (!route.getChildRoutes) {
	    return [];
	  }

	  var sync = true,
	      result = undefined;

	  route.getChildRoutes(location, function (error, childRoutes) {
	    childRoutes = !error && _RouteUtils.createRoutes(childRoutes);
	    if (sync) {
	      result = [error, childRoutes];
	      return;
	    }

	    callback(error, childRoutes);
	  });

	  sync = false;
	  return result; // Might be undefined.
	}

	function getIndexRoute(route, location, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    route.getIndexRoute(location, function (error, indexRoute) {
	      callback(error, !error && _RouteUtils.createRoutes(indexRoute)[0]);
	    });
	  } else if (route.childRoutes) {
	    (function () {
	      var pathless = route.childRoutes.filter(function (childRoute) {
	        return !childRoute.path;
	      });

	      _AsyncUtils.loopAsync(pathless.length, function (index, next, done) {
	        getIndexRoute(pathless[index], location, function (error, indexRoute) {
	          if (error || indexRoute) {
	            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
	            done(error, routes);
	          } else {
	            next();
	          }
	        });
	      }, function (err, routes) {
	        callback(null, routes);
	      });
	    })();
	  } else {
	    callback();
	  }
	}

	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduce(function (params, paramName, index) {
	    var paramValue = paramValues && paramValues[index];

	    if (Array.isArray(params[paramName])) {
	      params[paramName].push(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [params[paramName], paramValue];
	    } else {
	      params[paramName] = paramValue;
	    }

	    return params;
	  }, params);
	}

	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}

	function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
	  var pattern = route.path || '';

	  if (pattern.charAt(0) === '/') {
	    remainingPathname = location.pathname;
	    paramNames = [];
	    paramValues = [];
	  }

	  if (remainingPathname !== null) {
	    var matched = _PatternUtils.matchPattern(pattern, remainingPathname);
	    remainingPathname = matched.remainingPathname;
	    paramNames = [].concat(paramNames, matched.paramNames);
	    paramValues = [].concat(paramValues, matched.paramValues);

	    if (remainingPathname === '' && route.path) {
	      var _ret2 = (function () {
	        var match = {
	          routes: [route],
	          params: createParams(paramNames, paramValues)
	        };

	        getIndexRoute(route, location, function (error, indexRoute) {
	          if (error) {
	            callback(error);
	          } else {
	            if (Array.isArray(indexRoute)) {
	              var _match$routes;

	              process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](indexRoute.every(function (route) {
	                return !route.path;
	              }), 'Index routes should not have paths') : undefined;
	              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
	            } else if (indexRoute) {
	              process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](!indexRoute.path, 'Index routes should not have paths') : undefined;
	              match.routes.push(indexRoute);
	            }

	            callback(null, match);
	          }
	        });
	        return {
	          v: undefined
	        };
	      })();

	      if (typeof _ret2 === 'object') return _ret2.v;
	    }
	  }

	  if (remainingPathname != null || route.childRoutes) {
	    // Either a) this route matched at least some of the path or b)
	    // we don't have to load this route's children asynchronously. In
	    // either case continue checking for matches in the subtree.
	    var onChildRoutes = function onChildRoutes(error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, location, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            match.routes.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        }, remainingPathname, paramNames, paramValues);
	      } else {
	        callback();
	      }
	    };

	    var result = getChildRoutes(route, location, onChildRoutes);
	    if (result) {
	      onChildRoutes.apply(undefined, result);
	    }
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object will have the
	 * following properties:
	 *
	 * - routes       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */
	function matchRoutes(routes, location, callback) {
	  var remainingPathname = arguments.length <= 3 || arguments[3] === undefined ? location.pathname : arguments[3];
	  var paramNames = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
	  var paramValues = arguments.length <= 5 || arguments[5] === undefined ? [] : arguments[5];
	  return (function () {
	    _AsyncUtils.loopAsync(routes.length, function (index, next, done) {
	      matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
	        if (error || match) {
	          done(error, match);
	        } else {
	          next();
	        }
	      });
	    }, callback);
	  })();
	}

	exports['default'] = matchRoutes;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(27);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function isValidChild(object) {
	  return object == null || _react2['default'].isValidElement(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	function checkPropTypes(componentName, propTypes, props) {
	  componentName = componentName || 'UnknownComponent';

	  for (var propName in propTypes) {
	    if (Object.prototype.hasOwnProperty.call(propTypes, propName)) {
	      var error = propTypes[propName](props, propName, componentName);

	      /* istanbul ignore if: error logging */
	      if (error instanceof Error) process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, error.message) : undefined;
	    }
	  }
	}

	function createRoute(defaultProps, props) {
	  return _extends({}, defaultProps, props);
	}

	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = createRoute(type.defaultProps, element.props);

	  if (type.propTypes) checkPropTypes(type.displayName || type.name, type.propTypes, route);

	  if (route.children) {
	    var childRoutes = createRoutesFromReactChildren(route.children, route);

	    if (childRoutes.length) route.childRoutes = childRoutes;

	    delete route.children;
	  }

	  return route;
	}

	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router'
	 *   
	 *   const routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   )
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */

	function createRoutesFromReactChildren(children, parentRoute) {
	  var routes = [];

	  _react2['default'].Children.forEach(children, function (element) {
	    if (_react2['default'].isValidElement(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        var route = element.type.createRouteFromReactElement(element, parentRoute);

	        if (route) routes.push(route);
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });

	  return routes;
	}

	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */

	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (routes && !Array.isArray(routes)) {
	    routes = [routes];
	  }

	  return routes;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.falsy = falsy;

	var _react = __webpack_require__(1);

	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var arrayOf = _react.PropTypes.arrayOf;
	var oneOfType = _react.PropTypes.oneOfType;
	var element = _react.PropTypes.element;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;

	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}

	var history = shape({
	  listen: func.isRequired,
	  pushState: func.isRequired,
	  replaceState: func.isRequired,
	  go: func.isRequired
	});

	exports.history = history;
	var location = shape({
	  pathname: string.isRequired,
	  search: string.isRequired,
	  state: object,
	  action: string.isRequired,
	  key: string
	});

	exports.location = location;
	var component = oneOfType([func, string]);
	exports.component = component;
	var components = oneOfType([component, object]);
	exports.components = components;
	var route = oneOfType([object, element]);
	exports.route = route;
	var routes = oneOfType([route, arrayOf(route)]);

	exports.routes = routes;
	exports['default'] = {
	  falsy: falsy,
	  history: history,
	  location: location,
	  component: component,
	  components: components,
	  route: route
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(30);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _deprecateObjectProperties = __webpack_require__(39);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	var _getRouteParams = __webpack_require__(40);

	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

	var _RouteUtils = __webpack_require__(36);

	var _routerWarning = __webpack_require__(27);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _React$PropTypes = _react2['default'].PropTypes;
	var array = _React$PropTypes.array;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <RouterContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */
	var RouterContext = _react2['default'].createClass({
	  displayName: 'RouterContext',

	  propTypes: {
	    history: object,
	    router: object.isRequired,
	    location: object.isRequired,
	    routes: array.isRequired,
	    params: object.isRequired,
	    components: array.isRequired,
	    createElement: func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      createElement: _react2['default'].createElement
	    };
	  },

	  childContextTypes: {
	    history: object,
	    location: object.isRequired,
	    router: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    var _props = this.props;
	    var router = _props.router;
	    var history = _props.history;
	    var location = _props.location;

	    if (!router) {
	      process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, '`<RouterContext>` expects a `router` rather than a `history`') : undefined;

	      router = _extends({}, history, {
	        setRouteLeaveHook: history.listenBeforeLeavingRoute
	      });
	      delete router.listenBeforeLeavingRoute;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      location = _deprecateObjectProperties2['default'](location, '`context.location` is deprecated, please use a route component\'s `props.location` instead. http://tiny.cc/router-accessinglocation');
	    }

	    return { history: history, location: location, router: router };
	  },

	  createElement: function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  },

	  render: function render() {
	    var _this = this;

	    var _props2 = this.props;
	    var history = _props2.history;
	    var location = _props2.location;
	    var routes = _props2.routes;
	    var params = _props2.params;
	    var components = _props2.components;

	    var element = null;

	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.

	        var route = routes[index];
	        var routeParams = _getRouteParams2['default'](route, params);
	        var props = {
	          history: history,
	          location: location,
	          params: params,
	          route: route,
	          routeParams: routeParams,
	          routes: routes
	        };

	        if (_RouteUtils.isReactChildren(element)) {
	          props.children = element;
	        } else if (element) {
	          for (var prop in element) {
	            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
	          }
	        }

	        if (typeof components === 'object') {
	          var elements = {};

	          for (var key in components) {
	            if (Object.prototype.hasOwnProperty.call(components, key)) {
	              // Pass through the key as a prop to createElement to allow
	              // custom createElement functions to know which named component
	              // they're rendering, for e.g. matching up to fetched data.
	              elements[key] = _this.createElement(components[key], _extends({
	                key: key }, props));
	            }
	          }

	          return elements;
	        }

	        return _this.createElement(components, props);
	      }, element);
	    }

	    !(element === null || element === false || _react2['default'].isValidElement(element)) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'The root route must render a single element') : _invariant2['default'](false) : undefined;

	    return element;
	  }

	});

	exports['default'] = RouterContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*eslint no-empty: 0*/
	'use strict';

	exports.__esModule = true;
	exports['default'] = deprecateObjectProperties;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _routerWarning = __webpack_require__(27);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var useMembrane = false;

	if (process.env.NODE_ENV !== 'production') {
	  try {
	    if (Object.defineProperty({}, 'x', { get: function get() {
	        return true;
	      } }).x) {
	      useMembrane = true;
	    }
	  } catch (e) {}
	}

	// wraps an object in a membrane to warn about deprecated property access

	function deprecateObjectProperties(object, message) {
	  if (!useMembrane) return object;

	  var membrane = {};

	  var _loop = function (prop) {
	    if (typeof object[prop] === 'function') {
	      membrane[prop] = function () {
	        process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, message) : undefined;
	        return object[prop].apply(object, arguments);
	      };
	    } else {
	      Object.defineProperty(membrane, prop, {
	        configurable: false,
	        enumerable: false,
	        get: function get() {
	          process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, message) : undefined;
	          return object[prop];
	        }
	      });
	    }
	  };

	  for (var prop in object) {
	    _loop(prop);
	  }

	  return membrane;
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(29);

	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */
	function getRouteParams(route, params) {
	  var routeParams = {};

	  if (!route.path) return routeParams;

	  var paramNames = _PatternUtils.getParamNames(route.path);

	  for (var p in params) {
	    if (Object.prototype.hasOwnProperty.call(params, p) && paramNames.indexOf(p) !== -1) {
	      routeParams[p] = params[p];
	    }
	  }

	  return routeParams;
	}

	exports['default'] = getRouteParams;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.createRouterObject = createRouterObject;
	exports.createRoutingHistory = createRoutingHistory;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deprecateObjectProperties = __webpack_require__(39);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	function createRouterObject(history, transitionManager) {
	  return _extends({}, history, {
	    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
	    isActive: transitionManager.isActive
	  });
	}

	// deprecated

	function createRoutingHistory(history, transitionManager) {
	  history = _extends({}, history, transitionManager);

	  if (process.env.NODE_ENV !== 'production') {
	    history = _deprecateObjectProperties2['default'](history, '`props.history` and `context.history` are deprecated. Please use `context.router`. http://tiny.cc/router-contextchanges');
	  }

	  return history;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(27);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _React$PropTypes = _react2['default'].PropTypes;
	var bool = _React$PropTypes.bool;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;
	var oneOfType = _React$PropTypes.oneOfType;

	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
	function isEmptyObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
	  }return true;
	}

	function createLocationDescriptor(to, _ref) {
	  var query = _ref.query;
	  var hash = _ref.hash;
	  var state = _ref.state;

	  if (query || hash || state) {
	    return { pathname: to, query: query, hash: hash, state: state };
	  }

	  return to;
	}

	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets the value of its
	 * activeClassName prop.
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route path="/posts/:postID" component={Post} />
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
	 */
	var Link = _react2['default'].createClass({
	  displayName: 'Link',

	  contextTypes: {
	    router: object
	  },

	  propTypes: {
	    to: oneOfType([string, object]).isRequired,
	    query: object,
	    hash: string,
	    state: object,
	    activeStyle: object,
	    activeClassName: string,
	    onlyActiveOnIndex: bool.isRequired,
	    onClick: func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onlyActiveOnIndex: false,
	      className: '',
	      style: {}
	    };
	  },

	  handleClick: function handleClick(event) {
	    var allowTransition = true;

	    if (this.props.onClick) this.props.onClick(event);

	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

	    if (event.defaultPrevented === true) allowTransition = false;

	    // If target prop is set (e.g. to "_blank") let browser handle link.
	    /* istanbul ignore if: untestable with Karma */
	    if (this.props.target) {
	      if (!allowTransition) event.preventDefault();

	      return;
	    }

	    event.preventDefault();

	    if (allowTransition) {
	      var _props = this.props;
	      var to = _props.to;
	      var query = _props.query;
	      var hash = _props.hash;
	      var state = _props.state;

	      var _location = createLocationDescriptor(to, { query: query, hash: hash, state: state });

	      this.context.router.push(_location);
	    }
	  },

	  render: function render() {
	    var _props2 = this.props;
	    var to = _props2.to;
	    var query = _props2.query;
	    var hash = _props2.hash;
	    var state = _props2.state;
	    var activeClassName = _props2.activeClassName;
	    var activeStyle = _props2.activeStyle;
	    var onlyActiveOnIndex = _props2.onlyActiveOnIndex;

	    var props = _objectWithoutProperties(_props2, ['to', 'query', 'hash', 'state', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

	    process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](!(query || hash || state), 'the `query`, `hash`, and `state` props on `<Link>` are deprecated, use `<Link to={{ pathname, query, hash, state }}/>. http://tiny.cc/router-isActivedeprecated') : undefined;

	    // Ignore if rendered outside the context of router, simplifies unit testing.
	    var router = this.context.router;

	    if (router) {
	      var _location2 = createLocationDescriptor(to, { query: query, hash: hash, state: state });
	      props.href = router.createHref(_location2);

	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (router.isActive(_location2, onlyActiveOnIndex)) {
	          if (activeClassName) props.className += props.className === '' ? activeClassName : ' ' + activeClassName;

	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }

	    return _react2['default'].createElement('a', _extends({}, props, { onClick: this.handleClick }));
	  }

	});

	exports['default'] = Link;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Link = __webpack_require__(42);

	var _Link2 = _interopRequireDefault(_Link);

	/**
	 * An <IndexLink> is used to link to an <IndexRoute>.
	 */
	var IndexLink = _react2['default'].createClass({
	  displayName: 'IndexLink',

	  render: function render() {
	    return _react2['default'].createElement(_Link2['default'], _extends({}, this.props, { onlyActiveOnIndex: true }));
	  }

	});

	exports['default'] = IndexLink;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(27);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(30);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Redirect = __webpack_require__(45);

	var _Redirect2 = _interopRequireDefault(_Redirect);

	var _PropTypes = __webpack_require__(37);

	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * An <IndexRedirect> is used to redirect from an indexRoute.
	 */
	var IndexRedirect = _react2['default'].createClass({
	  displayName: 'IndexRedirect',

	  statics: {

	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = _Redirect2['default'].createRouteFromReactElement(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'An <IndexRedirect> does not make sense at the root of your route config') : undefined;
	      }
	    }

	  },

	  propTypes: {
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _PropTypes.falsy,
	    children: _PropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  }

	});

	exports['default'] = IndexRedirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(30);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(36);

	var _PatternUtils = __webpack_require__(29);

	var _PropTypes = __webpack_require__(37);

	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * A <Redirect> is used to declare another URL path a client should
	 * be sent to when they request a given URL.
	 *
	 * Redirects are placed alongside routes in the route configuration
	 * and are traversed in the same manner.
	 */
	var Redirect = _react2['default'].createClass({
	  displayName: 'Redirect',

	  statics: {

	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = _RouteUtils.createRouteFromReactElement(element);

	      if (route.from) route.path = route.from;

	      route.onEnter = function (nextState, replace) {
	        var location = nextState.location;
	        var params = nextState.params;

	        var pathname = undefined;
	        if (route.to.charAt(0) === '/') {
	          pathname = _PatternUtils.formatPattern(route.to, params);
	        } else if (!route.to) {
	          pathname = location.pathname;
	        } else {
	          var routeIndex = nextState.routes.indexOf(route);
	          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
	          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
	          pathname = _PatternUtils.formatPattern(pattern, params);
	        }

	        replace({
	          pathname: pathname,
	          query: route.query || location.query,
	          state: route.state || location.state
	        });
	      };

	      return route;
	    },

	    getRoutePattern: function getRoutePattern(routes, routeIndex) {
	      var parentPattern = '';

	      for (var i = routeIndex; i >= 0; i--) {
	        var route = routes[i];
	        var pattern = route.path || '';

	        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

	        if (pattern.indexOf('/') === 0) break;
	      }

	      return '/' + parentPattern;
	    }

	  },

	  propTypes: {
	    path: string,
	    from: string, // Alias for path
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _PropTypes.falsy,
	    children: _PropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, '<Redirect> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  }

	});

	exports['default'] = Redirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(27);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(30);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(36);

	var _PropTypes = __webpack_require__(37);

	var func = _react2['default'].PropTypes.func;

	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */
	var IndexRoute = _react2['default'].createClass({
	  displayName: 'IndexRoute',

	  statics: {

	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = _RouteUtils.createRouteFromReactElement(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'An <IndexRoute> does not make sense at the root of your route config') : undefined;
	      }
	    }

	  },

	  propTypes: {
	    path: _PropTypes.falsy,
	    component: _PropTypes.component,
	    components: _PropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, '<IndexRoute> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  }

	});

	exports['default'] = IndexRoute;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(30);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(36);

	var _PropTypes = __webpack_require__(37);

	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;

	/**
	 * A <Route> is used to declare which components are rendered to the
	 * page when the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is
	 * requested, the tree is searched depth-first to find a route whose
	 * path matches the URL.  When one is found, all routes in the tree
	 * that lead to it are considered "active" and their components are
	 * rendered into the DOM, nested in the same order as in the tree.
	 */
	var Route = _react2['default'].createClass({
	  displayName: 'Route',

	  statics: {
	    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
	  },

	  propTypes: {
	    path: string,
	    component: _PropTypes.component,
	    components: _PropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, '<Route> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  }

	});

	exports['default'] = Route;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _routerWarning = __webpack_require__(27);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _PropTypes = __webpack_require__(37);

	/**
	 * A mixin that adds the "history" instance variable to components.
	 */
	var History = {

	  contextTypes: {
	    history: _PropTypes.history
	  },

	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'the `History` mixin is deprecated, please access `context.router` with your own `contextTypes`. http://tiny.cc/router-historymixin') : undefined;
	    this.history = this.context.history;
	  }

	};

	exports['default'] = History;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _routerWarning = __webpack_require__(27);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(30);

	var _invariant2 = _interopRequireDefault(_invariant);

	var object = _react2['default'].PropTypes.object;

	/**
	 * The Lifecycle mixin adds the routerWillLeave lifecycle method to a
	 * component that may be used to cancel a transition or prompt the user
	 * for confirmation.
	 *
	 * On standard transitions, routerWillLeave receives a single argument: the
	 * location we're transitioning to. To cancel the transition, return false.
	 * To prompt the user for confirmation, return a prompt message (string).
	 *
	 * During the beforeunload event (assuming you're using the useBeforeUnload
	 * history enhancer), routerWillLeave does not receive a location object
	 * because it isn't possible for us to know the location we're transitioning
	 * to. In this case routerWillLeave must return a prompt message to prevent
	 * the user from closing the window/tab.
	 */
	var Lifecycle = {

	  contextTypes: {
	    history: object.isRequired,
	    // Nested children receive the route as context, either
	    // set by the route component using the RouteContext mixin
	    // or by some other ancestor.
	    route: object
	  },

	  propTypes: {
	    // Route components receive the route object as a prop.
	    route: object
	  },

	  componentDidMount: function componentDidMount() {
	    process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'the `Lifecycle` mixin is deprecated, please use `context.router.setRouteLeaveHook(route, hook)`. http://tiny.cc/router-lifecyclemixin') : undefined;
	    !this.routerWillLeave ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'The Lifecycle mixin requires you to define a routerWillLeave method') : _invariant2['default'](false) : undefined;

	    var route = this.props.route || this.context.route;

	    !route ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'The Lifecycle mixin must be used on either a) a <Route component> or ' + 'b) a descendant of a <Route component> that uses the RouteContext mixin') : _invariant2['default'](false) : undefined;

	    this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(route, this.routerWillLeave);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlistenBeforeLeavingRoute) this._unlistenBeforeLeavingRoute();
	  }

	};

	exports['default'] = Lifecycle;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _routerWarning = __webpack_require__(27);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var object = _react2['default'].PropTypes.object;

	/**
	 * The RouteContext mixin provides a convenient way for route
	 * components to set the route in context. This is needed for
	 * routes that render elements that want to use the Lifecycle
	 * mixin to prevent transitions.
	 */
	var RouteContext = {

	  propTypes: {
	    route: object.isRequired
	  },

	  childContextTypes: {
	    route: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      route: this.props.route
	    };
	  },

	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'The `RouteContext` mixin is deprecated. You can provide `this.props.route` on context with your own `contextTypes`. http://tiny.cc/router-routecontextmixin') : undefined;
	  }

	};

	exports['default'] = RouteContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _historyLibUseQueries = __webpack_require__(23);

	var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

	var _createTransitionManager = __webpack_require__(26);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _routerWarning = __webpack_require__(27);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know about routing.
	 *
	 * Enhances history objects with the following methods:
	 *
	 * - listen((error, nextState) => {})
	 * - listenBeforeLeavingRoute(route, (nextLocation) => {})
	 * - match(location, (error, redirectLocation, nextState) => {})
	 * - isActive(pathname, query, indexOnly=false)
	 */
	function useRoutes(createHistory) {
	  process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, '`useRoutes` is deprecated. Please use `createTransitionManager` instead.') : undefined;

	  return function () {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var routes = _ref.routes;

	    var options = _objectWithoutProperties(_ref, ['routes']);

	    var history = _historyLibUseQueries2['default'](createHistory)(options);
	    var transitionManager = _createTransitionManager2['default'](history, routes);
	    return _extends({}, history, transitionManager);
	  };
	}

	exports['default'] = useRoutes;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RouterContext = __webpack_require__(38);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _routerWarning = __webpack_require__(27);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var RoutingContext = _react2['default'].createClass({
	  displayName: 'RoutingContext',

	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, '`RoutingContext` has been renamed to `RouterContext`. Please use `import { RouterContext } from \'react-router\'`. http://tiny.cc/router-routercontext') : undefined;
	  },

	  render: function render() {
	    return _react2['default'].createElement(_RouterContext2['default'], this.props);
	  }
	});

	exports['default'] = RoutingContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _invariant = __webpack_require__(30);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _createMemoryHistory = __webpack_require__(54);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	var _createTransitionManager = __webpack_require__(26);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _RouteUtils = __webpack_require__(36);

	var _RouterUtils = __webpack_require__(41);

	/**
	 * A high-level API to be used for server-side rendering.
	 *
	 * This function matches a location to a set of routes and calls
	 * callback(error, redirectLocation, renderProps) when finished.
	 *
	 * Note: You probably don't want to use this in a browser unless you're using
	 * server-side rendering with async routes.
	 */
	function match(_ref, callback) {
	  var history = _ref.history;
	  var routes = _ref.routes;
	  var location = _ref.location;

	  var options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);

	  !(history || location) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'match needs a history or a location') : _invariant2['default'](false) : undefined;

	  history = history ? history : _createMemoryHistory2['default'](options);
	  var transitionManager = _createTransitionManager2['default'](history, _RouteUtils.createRoutes(routes));

	  var unlisten = undefined;

	  if (location) {
	    // Allow match({ location: '/the/path', ... })
	    location = history.createLocation(location);
	  } else {
	    // Pick up the location from the history via synchronous history.listen
	    // call if needed.
	    unlisten = history.listen(function (historyLocation) {
	      location = historyLocation;
	    });
	  }

	  var router = _RouterUtils.createRouterObject(history, transitionManager);
	  history = _RouterUtils.createRoutingHistory(history, transitionManager);

	  transitionManager.match(location, function (error, redirectLocation, nextState) {
	    callback(error, redirectLocation, nextState && _extends({}, nextState, {
	      history: history,
	      router: router,
	      matchContext: { history: history, transitionManager: transitionManager, router: router }
	    }));

	    // Defer removing the listener to here to prevent DOM histories from having
	    // to unwind DOM event listeners unnecessarily, in case callback renders a
	    // <Router> and attaches another history listener.
	    if (unlisten) {
	      unlisten();
	    }
	  });
	}

	exports['default'] = match;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createMemoryHistory;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _historyLibUseQueries = __webpack_require__(23);

	var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

	var _historyLibUseBasename = __webpack_require__(55);

	var _historyLibUseBasename2 = _interopRequireDefault(_historyLibUseBasename);

	var _historyLibCreateMemoryHistory = __webpack_require__(56);

	var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

	function createMemoryHistory(options) {
	  // signatures and type checking differ between `useRoutes` and
	  // `createMemoryHistory`, have to create `memoryHistory` first because
	  // `useQueries` doesn't understand the signature
	  var memoryHistory = _historyLibCreateMemoryHistory2['default'](options);
	  var createHistory = function createHistory() {
	    return memoryHistory;
	  };
	  var history = _historyLibUseQueries2['default'](_historyLibUseBasename2['default'](createHistory))(options);
	  history.__v2_compatible__ = true;
	  return history;
	}

	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _ExecutionEnvironment = __webpack_require__(11);

	var _PathUtils = __webpack_require__(10);

	var _runTransitionHook = __webpack_require__(21);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _deprecate = __webpack_require__(22);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);

	    var basename = options.basename;

	    // Automatically use the value of <base href> in HTML
	    // documents as basename if it's not explicitly given.
	    if (basename == null && _ExecutionEnvironment.canUseDOM) {
	      var base = document.getElementsByTagName('base')[0];

	      if (base) basename = _PathUtils.extractPath(base.href);
	    }

	    function addBasename(location) {
	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;

	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }

	      return location;
	    }

	    function prependBasename(location) {
	      if (!basename) return location;

	      if (typeof location === 'string') location = _PathUtils.parsePath(location);

	      var pname = location.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;

	      return _extends({}, location, {
	        pathname: pathname
	      });
	    }

	    // Override all read methods with basename-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addBasename(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addBasename(location));
	      });
	    }

	    // Override all write methods with basename-aware versions.
	    function push(location) {
	      history.push(prependBasename(location));
	    }

	    function replace(location) {
	      history.replace(prependBasename(location));
	    }

	    function createPath(location) {
	      return history.createPath(prependBasename(location));
	    }

	    function createHref(location) {
	      return history.createHref(prependBasename(location));
	    }

	    function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
	    }

	    // deprecated
	    function pushState(state, path) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      push(_extends({ state: state }, path));
	    }

	    // deprecated
	    function replaceState(state, path) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      replace(_extends({ state: state }, path));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useBasename;
	module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(7);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(8);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _PathUtils = __webpack_require__(10);

	var _Actions = __webpack_require__(9);

	var _createHistory = __webpack_require__(15);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	}

	function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }

	  var history = _createHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: saveState,
	    go: go
	  }));

	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;

	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }

	  entries = entries.map(function (entry) {
	    var key = history.createKey();

	    if (typeof entry === 'string') return { pathname: entry, key: key };

	    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });

	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
	  });

	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
	  }

	  var storage = createStateStorage(entries);

	  function saveState(key, state) {
	    storage[key] = state;
	  }

	  function readState(key) {
	    return storage[key];
	  }

	  function getCurrentLocation() {
	    var entry = entries[current];
	    var basename = entry.basename;
	    var pathname = entry.pathname;
	    var search = entry.search;

	    var path = (basename || '') + pathname + (search || '');

	    var key = undefined,
	        state = undefined;
	    if (entry.key) {
	      key = entry.key;
	      state = readState(key);
	    } else {
	      key = history.createKey();
	      state = null;
	      entry.key = key;
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  }

	  function go(n) {
	    if (n) {
	      if (!canGo(n)) {
	        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Cannot go(%s) there is not enough history', n) : undefined;
	        return;
	      }

	      current += n;

	      var currentLocation = getCurrentLocation();

	      // change action to POP
	      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	    }
	  }

	  function finishTransition(location) {
	    switch (location.action) {
	      case _Actions.PUSH:
	        current += 1;

	        // if we are not on the top of stack
	        // remove rest and push new
	        if (current < entries.length) entries.splice(current);

	        entries.push(location);
	        saveState(location.key, location.state);
	        break;
	      case _Actions.REPLACE:
	        entries[current] = location;
	        saveState(location.key, location.state);
	        break;
	    }
	  }

	  return history;
	}

	exports['default'] = createMemoryHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = useRouterHistory;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _historyLibUseQueries = __webpack_require__(23);

	var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

	var _historyLibUseBasename = __webpack_require__(55);

	var _historyLibUseBasename2 = _interopRequireDefault(_historyLibUseBasename);

	function useRouterHistory(createHistory) {
	  return function (options) {
	    var history = _historyLibUseQueries2['default'](_historyLibUseBasename2['default'](createHistory))(options);
	    history.__v2_compatible__ = true;
	    return history;
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _historyLibCreateBrowserHistory = __webpack_require__(59);

	var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

	var _createRouterHistory = __webpack_require__(60);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	exports['default'] = _createRouterHistory2['default'](_historyLibCreateBrowserHistory2['default']);
	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(8);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(9);

	var _PathUtils = __webpack_require__(10);

	var _ExecutionEnvironment = __webpack_require__(11);

	var _DOMUtils = __webpack_require__(12);

	var _DOMStateStorage = __webpack_require__(13);

	var _createDOMHistory = __webpack_require__(14);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve URLs.
	 */
	function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

	  var forceRefresh = options.forceRefresh;

	  var isSupported = _DOMUtils.supportsHistory();
	  var useRefresh = !isSupported || forceRefresh;

	  function getCurrentLocation(historyState) {
	    historyState = historyState || window.history.state || {};

	    var path = _DOMUtils.getWindowPath();
	    var _historyState = historyState;
	    var key = _historyState.key;

	    var state = undefined;
	    if (key) {
	      state = _DOMStateStorage.readState(key);
	    } else {
	      state = null;
	      key = history.createKey();

	      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function startPopStateListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function popStateListener(event) {
	      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

	      transitionTo(getCurrentLocation(event.state));
	    }

	    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    _DOMStateStorage.saveState(key, state);

	    var path = (basename || '') + pathname + search + hash;
	    var historyState = {
	      key: key
	    };

	    if (action === _Actions.PUSH) {
	      if (useRefresh) {
	        window.location.href = path;
	        return false; // Prevent location update.
	      } else {
	          window.history.pushState(historyState, null, path);
	        }
	    } else {
	      // REPLACE
	      if (useRefresh) {
	        window.location.replace(path);
	        return false; // Prevent location update.
	      } else {
	          window.history.replaceState(historyState, null, path);
	        }
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopPopStateListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopPopStateListener();
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    registerTransitionHook: registerTransitionHook,
	    unregisterTransitionHook: unregisterTransitionHook
	  });
	}

	exports['default'] = createBrowserHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _useRouterHistory = __webpack_require__(57);

	var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	exports['default'] = function (createHistory) {
	  var history = undefined;
	  if (canUseDOM) history = _useRouterHistory2['default'](createHistory)();
	  return history;
	};

	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _historyLibCreateHashHistory = __webpack_require__(6);

	var _historyLibCreateHashHistory2 = _interopRequireDefault(_historyLibCreateHashHistory);

	var _createRouterHistory = __webpack_require__(60);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	exports['default'] = _createRouterHistory2['default'](_historyLibCreateHashHistory2['default']);
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var QuickStartDescription = __webpack_require__(63);
	var ReactPlayground = __webpack_require__(66);

	var SimpleExample = '\n\nvar _rows = [];\nfor (var i = 1; i < 1000; i++) {\n  _rows.push({\n    id: i,\n    title: \'Title \' + i,\n    count: i * 1000\n  });\n}\n\n//A rowGetter function is required by the grid to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\'\n},\n{\n  key: \'title\',\n  name: \'Title\'\n},\n{\n  key: \'count\',\n  name: \'Count\'\n}\n]\n\nvar Example = React.createClass({\n  render: function() {\n    return  (<ReactDataGrid\n    columns={columns}\n    rowGetter={rowGetter}\n    rowsCount={_rows.length}\n    minHeight={500} />);\n  }\n});\nReactDOM.render(<Example />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'A Simple Example'
	      ),
	      React.createElement(ReactPlayground, { codeText: SimpleExample })
	    );
	  }

	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var RowsDescription = __webpack_require__(64);
	var ColsDescription = __webpack_require__(65);

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        { id: 'js-basic-example' },
	        this.props.title
	      ),
	      React.createElement(
	        'p',
	        null,
	        'The most basic implementation of ReactDataGrid requires 4 properties; an array of columns, a rowGetter function to retrive a row for a given index, the number of rows the grid expects and the minimum height of the grid.'
	      ),
	      React.createElement(ColsDescription, null),
	      React.createElement(RowsDescription, null),
	      React.createElement(
	        'p',
	        null,
	        'Now simply invoke React.render(..) passing the array of rows and columns as props'
	      ),
	      React.createElement(
	        'div',
	        { className: 'code-block js' },
	        React.createElement(
	          'pre',
	          null,
	          React.createElement(
	            'code',
	            { className: 'javascript' },
	            "React.render(<ReactDataGrid columns={columns} rowGetter={rowGetter} rowsCount={rowsCount()} minHeight={500} />, document.getElementById('example'))"
	          )
	        )
	      )
	    );
	  }
	});

/***/ },
/* 64 */
/***/ function(module, exports) {

	/**
	* @jsx React.DOM
	*/
	"use strict";

	module.exports = React.createClass({
	  displayName: "exports",

	  render: function render() {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "p",
	        null,
	        "The rows property should be an array of objects whose property names match the key property of each column"
	      ),
	      React.createElement(
	        "div",
	        { className: "code-block js" },
	        React.createElement(
	          "pre",
	          null,
	          React.createElement(
	            "code",
	            { className: "javascript" },
	            "var _rows = [];\nfor (var i = 0; i < 1000; i++) {\n  _rows.push({\n    id: i,\n    title: \'Title \' + i,\n    count: i * 1000\n  });\n}\n\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\nvar rowsCount = function(){\n  return _rows.length;\n}\n"
	          )
	        )
	      )
	    );
	  }
	});

/***/ },
/* 65 */
/***/ function(module, exports) {

	/**
	* @jsx React.DOM
	*/
	"use strict";

	module.exports = React.createClass({
	  displayName: "exports",

	  render: function render() {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "p",
	        null,
	        "The columns property is an array of objects that has at a minimum key and name properties"
	      ),
	      React.createElement(
	        "div",
	        { className: "code-block js" },
	        React.createElement(
	          "pre",
	          null,
	          "var columns = [\n{\n  key: \'id\',\n  name: \'ID\'\n},\n{\n  key: \'title\',\n  name: \'Title\'\n},\n{\n  key: \'count\',\n  name: \'Count\'\n}]\n\}"
	        )
	      )
	    );
	  }
	});

/***/ },
/* 66 */
/***/ function(module, exports) {

	'use strict';

	var IS_MOBILE = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i);
	var IS_MOBILE = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i);

	var CodeMirrorEditor = React.createClass({
	  displayName: 'CodeMirrorEditor',

	  propTypes: {
	    lineNumbers: React.PropTypes.bool,
	    onChange: React.PropTypes.func
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      lineNumbers: false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    if (IS_MOBILE) return;

	    this.editor = CodeMirror.fromTextArea(this.refs.editor, {
	      mode: 'javascript',
	      lineNumbers: this.props.lineNumbers,
	      lineWrapping: true,
	      smartIndent: false, // javascript mode does bad things with jsx indents
	      matchBrackets: true,
	      theme: 'solarized-light',
	      readOnly: this.props.readOnly
	    });
	    this.editor.on('change', this.handleChange);
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    if (this.props.readOnly) {
	      this.editor.setValue(this.props.codeText);
	    }
	  },

	  handleChange: function handleChange() {
	    if (!this.props.readOnly) {
	      this.props.onChange && this.props.onChange(this.editor.getValue());
	    }
	  },

	  render: function render() {
	    // wrap in a div to fully contain CodeMirror
	    var editor;

	    if (IS_MOBILE) {
	      editor = React.createElement(
	        'pre',
	        { style: { overflow: 'scroll' } },
	        this.props.codeText
	      );
	    } else {
	      editor = React.createElement('textarea', { ref: 'editor', defaultValue: this.props.codeText });
	    }

	    return React.createElement(
	      'div',
	      { style: this.props.style, className: this.props.className },
	      editor
	    );
	  }
	});

	var selfCleaningTimeout = {
	  componentDidUpdate: function componentDidUpdate() {
	    clearTimeout(this.timeoutID);
	  },

	  setTimeout: (function (_setTimeout) {
	    function setTimeout() {
	      return _setTimeout.apply(this, arguments);
	    }

	    setTimeout.toString = function () {
	      return _setTimeout.toString();
	    };

	    return setTimeout;
	  })(function () {
	    clearTimeout(this.timeoutID);
	    this.timeoutID = setTimeout.apply(null, arguments);
	  })
	};

	module.exports = React.createClass({
	  displayName: 'exports',

	  mixins: [selfCleaningTimeout],

	  MODES: { JSX: 'JSX', JS: 'JS' }, //keyMirror({JSX: true, JS: true}),

	  propTypes: {
	    codeText: React.PropTypes.string.isRequired,
	    transformer: React.PropTypes.func,
	    renderCode: React.PropTypes.bool,
	    showCompiledJSTab: React.PropTypes.bool,
	    showLineNumbers: React.PropTypes.bool,
	    editorTabTitle: React.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      transformer: function transformer(code) {
	        return JSXTransformer.transform(code).code;
	      },
	      editorTabTitle: 'Live JSX Editor',
	      showCompiledJSTab: true,
	      showLineNumbers: false
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      mode: this.MODES.JSX,
	      code: this.props.codeText
	    };
	  },

	  handleCodeChange: function handleCodeChange(value) {
	    this.setState({ code: value });
	    this.executeCode();
	  },

	  handleCodeModeSwitch: function handleCodeModeSwitch(mode) {
	    this.setState({ mode: mode });
	  },

	  compileCode: function compileCode() {
	    return this.props.transformer(this.state.code);
	  },

	  render: function render() {
	    var isJS = this.state.mode === this.MODES.JS;
	    var compiledCode = '';
	    try {
	      compiledCode = this.compileCode();
	    } catch (err) {}

	    var JSContent = React.createElement(CodeMirrorEditor, {
	      key: 'js',
	      className: 'playgroundStage CodeMirror-readonly',
	      onChange: this.handleCodeChange,
	      codeText: compiledCode,
	      readOnly: true,
	      lineNumbers: this.props.showLineNumbers
	    });

	    var JSXContent = React.createElement(CodeMirrorEditor, {
	      key: 'jsx',
	      onChange: this.handleCodeChange,
	      className: 'playgroundStage',
	      codeText: this.state.code,
	      lineNumbers: this.props.showLineNumbers
	    });

	    var JSXTabClassName = 'playground-tab' + (isJS ? '' : ' playground-tab-active');
	    var JSTabClassName = 'playground-tab' + (isJS ? ' playground-tab-active' : '');

	    var JSTab = React.createElement(
	      'div',
	      {
	        className: JSTabClassName,
	        onClick: this.handleCodeModeSwitch.bind(this, this.MODES.JS) },
	      'Compiled JS'
	    );

	    var JSXTab = React.createElement(
	      'div',
	      {
	        className: JSXTabClassName,
	        onClick: this.handleCodeModeSwitch.bind(this, this.MODES.JSX) },
	      this.props.editorTabTitle
	    );

	    return React.createElement(
	      'div',
	      { className: 'playground' },
	      React.createElement(
	        'div',
	        { className: 'playgroundPreview' },
	        React.createElement('div', { ref: 'mount' })
	      ),
	      React.createElement(
	        'div',
	        null,
	        JSXTab,
	        this.props.showCompiledJSTab && JSTab
	      ),
	      React.createElement(
	        'div',
	        { className: 'playgroundCode' },
	        isJS ? JSContent : JSXContent
	      )
	    );
	  },

	  componentDidMount: function componentDidMount() {
	    this.executeCode();
	  },

	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    // execute code only when the state's not being updated by switching tab
	    // this avoids re-displaying the error, which comes after a certain delay
	    if (this.props.transformer !== prevProps.transformer || this.state.code !== prevState.code) {
	      this.executeCode();
	    }
	  },

	  executeCode: function executeCode() {
	    var mountNode = this.refs.mount;

	    try {
	      ReactDOM.unmountComponentAtNode(mountNode);
	    } catch (e) {}

	    try {
	      var compiledCode = this.compileCode();
	      if (this.props.renderCode) {
	        React.render(React.createElement(CodeMirrorEditor, { codeText: compiledCode, readOnly: true }), mountNode);
	      } else {
	        eval(compiledCode);
	      }
	    } catch (err) {
	      this.setTimeout(function () {
	        React.render(React.createElement(
	          'div',
	          { className: 'playgroundError' },
	          err.toString()
	        ), mountNode);
	      }, 500);
	    }
	  }
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ReactGrid = __webpack_require__(68);
	var QuickStartDescription = __webpack_require__(63);
	var ReactPlayground = __webpack_require__(66);

	var ResizableExample = '\n//helper to generate a random date\nfunction randomDate(start, end) {\n  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();\n};\n\nvar _rows = [];\nfor (var i = 1; i < 1000; i++) {\n  _rows.push({\n    id: i,\n    task: \'Task \' + i,\n    complete: Math.min(100, Math.round(Math.random() * 110)),\n    priority : [\'Critical\', \'High\', \'Medium\', \'Low\'][Math.floor((Math.random() * 3) + 1)],\n    issueType : [\'Bug\', \'Improvement\', \'Epic\', \'Story\'][Math.floor((Math.random() * 3) + 1)],\n    startDate: randomDate(new Date(2015, 3, 1), new Date()),\n    completeDate: randomDate(new Date(), new Date(2016, 0, 1))\n  });\n}\n\n//function to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n\n//Columns definition\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\',\n  resizable : true\n\n},\n{\n  key: \'task\',\n  name: \'Title\',\n  resizable : true\n},\n{\n  key: \'priority\',\n  name: \'Priority\',\n  resizable : true\n},\n{\n  key: \'issueType\',\n  name: \'Issue Type\',\n  resizable : true\n},\n{\n  key: \'complete\',\n  name: \'% Complete\',\n  resizable : true\n},\n{\n  key: \'startDate\',\n  name: \'Start Date\',\n  resizable : true\n},\n{\n  key: \'completeDate\',\n  name: \'Expected Complete\',\n  resizable : true\n}\n]\n\nReactDOM.render(<ReactDataGrid\n  columns={columns}\n  rowGetter={rowGetter}\n  rowsCount={_rows.length}\n  minHeight={500} />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Resizable Columns Example'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'To make a given column resizable, set ',
	        React.createElement(
	          'code',
	          null,
	          'column.resizable = true'
	        )
	      ),
	      React.createElement(ReactPlayground, { codeText: ResizableExample })
	    );
	  }

	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _Object$assign2=__webpack_require__(69)['default'];var _Symbol=__webpack_require__(84)['default'];var _Object$keys2=__webpack_require__(105)['default'];var _Object$setPrototypeOf2=__webpack_require__(109)['default'];(function webpackUniversalModuleDefinition(root,factory){if(true)module.exports = factory(__webpack_require__(1),__webpack_require__(2));else if(typeof define === 'function' && define.amd)define(["react","react-dom"],factory);else if(typeof exports === 'object')exports["ReactDataGrid"] = factory(require("react"),require("react-dom"));else root["ReactDataGrid"] = factory(root["React"],root["ReactDOM"]);})(undefined,function(__WEBPACK_EXTERNAL_MODULE_18__,__WEBPACK_EXTERNAL_MODULE_19__){return  (/******/(function(modules){ // webpackBootstrap
	/******/ // The module cache
	/******/var installedModules={}; /******/ // The require function
	/******/function __webpack_require__(moduleId){ /******/ // Check if module is in cache
	/******/if(installedModules[moduleId]) /******/return installedModules[moduleId].exports; /******/ // Create a new module (and put it into the cache)
	/******/var module=installedModules[moduleId] = { /******/exports:{}, /******/id:moduleId, /******/loaded:false /******/}; /******/ // Execute the module function
	/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__); /******/ // Flag the module as loaded
	/******/module.loaded = true; /******/ // Return the exports of the module
	/******/return module.exports; /******/} /******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules; /******/ // expose the module cache
	/******/__webpack_require__.c = installedModules; /******/ // __webpack_public_path__
	/******/__webpack_require__.p = ""; /******/ // Load entry module and return exports
	/******/return __webpack_require__(0); /******/})( /************************************************************************/ /******/[ /* 0 */function(module,exports,__webpack_require__){'use strict';var Grid=__webpack_require__(1);var Row=__webpack_require__(48);var Cell=__webpack_require__(49);module.exports = Grid;module.exports.Row = Row;module.exports.Cell = Cell; /***/}, /* 1 */function(module,exports,__webpack_require__){"use strict";var _extends=__webpack_require__(2)['default'];var React=__webpack_require__(18);var ReactDOM=__webpack_require__(19);var uncontrollable=__webpack_require__(20);var BaseGrid=__webpack_require__(25);var KeyboardHandlerMixin=__webpack_require__(52);var CheckboxEditor=__webpack_require__(70);var FilterableHeaderCell=__webpack_require__(71);var DOMMetrics=__webpack_require__(68);var ColumnMetricsMixin=__webpack_require__(72);var RowUtils=__webpack_require__(73);var ColumnUtils=__webpack_require__(31);var SORT_TYPES=__webpack_require__(33).SORT;var notify=function notify(handler){for(var _len=arguments.length,args=Array(_len > 1?_len - 1:0),_key=1;_key < _len;_key++) {args[_key - 1] = arguments[_key];}return handler && handler.apply(undefined,args);};var ReactDataGrid=React.createClass({displayName:'ReactDataGrid',propTypes:{rowHeight:React.PropTypes.number.isRequired,headerRowHeight:React.PropTypes.number,minHeight:React.PropTypes.number.isRequired,minWidth:React.PropTypes.number,enableCellSelect:React.PropTypes.bool,enableRowSelect:React.PropTypes.bool, /**
		     * A column definition for the "select row" cell
		     */selectRowColumn:React.PropTypes.object,selectRowIndex:React.PropTypes.number,onRowUpdated:React.PropTypes.func,rowGetter:React.PropTypes.func.isRequired,rowsCount:React.PropTypes.number.isRequired,toolbar:React.PropTypes.element,columns:React.PropTypes.oneOfType([React.PropTypes.object,React.PropTypes.array]).isRequired,sortType:React.PropTypes.oneOf(['simple','multiple']),onFilter:React.PropTypes.func,onGridSort:React.PropTypes.func,onSelectRow:React.PropTypes.func,onSelectCell:React.PropTypes.func,onCellCopyPaste:React.PropTypes.func,onCellsDragged:React.PropTypes.func,onAddFilter:React.PropTypes.func},mixins:[ColumnMetricsMixin,DOMMetrics.MetricsComputatorMixin,KeyboardHandlerMixin],getDefaultProps:function getDefaultProps(){return {enableCellSelect:false,tabIndex:-1,rowHeight:35,enableRowSelect:false,minHeight:350,sortType:'simple',selectedRows:[]};},getInitialState:function getInitialState(){var columnMetrics=this.createColumnMetrics();var initialState=_extends({columnMetrics:columnMetrics},this.getSelectedState(this.props),{copied:null,expandedRows:[],canFilter:false,columnFilters:{},dragged:null,scrollOffset:0});return initialState;},componentWillReceiveProps:function componentWillReceiveProps(nextProps){this.setState(this.getSelectedState(nextProps));if(nextProps.rowsCount === this.props.rowsCount + 1){this.onAfterAddRow(nextProps.rowsCount + 1);}},getSelectedState:function getSelectedState(props){var active=props.active;var _props$selectedCell=props.selectedCell;_props$selectedCell = _props$selectedCell === undefined?[0,0]:_props$selectedCell;var idx=_props$selectedCell[0];var rowIdx=_props$selectedCell[1];if(!this.props.enableCellSelect)idx = rowIdx = -1;var selected={idx:idx,rowIdx:rowIdx,active:!!active};if(active && active !== true)selected.initialKeyCode = active;return {selected:selected};},componentDidMount:function componentDidMount(){var scrollOffset=0;var canvas=ReactDOM.findDOMNode(this).querySelector('.react-grid-Canvas');if(canvas != null){scrollOffset = canvas.offsetWidth - canvas.clientWidth;}this.setState({scrollOffset:scrollOffset});},render:function render(){var cellMetaData={selected:this.state.selected,dragged:this.state.dragged,onCellClick:this.onCellClick,onCellDoubleClick:this.onCellDoubleClick,onCommit:this.onCellCommit,onCommitCancel:this.setInactive,copied:this.state.copied,handleDragEnterRow:this.handleDragEnter,handleTerminateDrag:this.handleTerminateDrag};var toolbar=this.renderToolbar();var containerWidth=this.props.minWidth || this.DOMMetrics.gridWidth();var gridWidth=containerWidth - this.state.scrollOffset; //if NaN without coercion
	if(gridWidth !== gridWidth)gridWidth = 0;return React.createElement('div',{className:'react-grid-Container',style:{width:containerWidth}},toolbar,React.createElement('div',{className:'react-grid-Main'},React.createElement(BaseGrid,_extends({ref:'base'},this.props,{headerRows:this.getHeaderRows(),columnMetrics:this.state.columnMetrics,rowGetter:this.props.rowGetter,rowsCount:this.props.rowsCount,rowHeight:this.props.rowHeight,cellMetaData:cellMetaData,selectedRows:this.props.selectedRows,expandedRows:this.state.expandedRows,rowOffsetHeight:this.getRowOffsetHeight(),sortInfo:this.props.sortInfo,onSort:this.handleSort,minHeight:this.props.minHeight,totalWidth:gridWidth,onViewportKeydown:this.onKeyDown,onViewportDragStart:this.onDragStart,onViewportDragEnd:this.handleDragEnd,onViewportDoubleClick:this.onViewportDoubleClick,onColumnResize:this.onColumnResize}))));},renderToolbar:function renderToolbar(){var Toolbar=this.props.toolbar;if(React.isValidElement(Toolbar)){return React.cloneElement(Toolbar,{onToggleFilter:this.onToggleFilter,numberOfRows:this.props.rowsCount});}},focus:function focus(){this.refs.base.focus();},onSelect:function onSelect(selected){var old=this.state.selected;if(this.props.enableCellSelect){if(!(old.rowIdx === selected.rowIdx && old.idx === selected.idx && old.active === true)){var idx=selected.idx;var rowIdx=selected.rowIdx;if(idx >= 0 && rowIdx >= 0 && idx < ColumnUtils.getSize(this.state.columnMetrics.columns) && rowIdx < this.props.rowsCount){this.setInactive();notify(this.props.onSelectCell,[idx,rowIdx],[old.idx,old.rowIdx]);}}}},onCellClick:function onCellClick(cell){this.onSelect({rowIdx:cell.rowIdx,idx:cell.idx});},onCellDoubleClick:function onCellDoubleClick(cell){this.onSelect({rowIdx:cell.rowIdx,idx:cell.idx});this.setActive('Enter');},onViewportDoubleClick:function onViewportDoubleClick(){this.setActive();},onPressArrowUp:function onPressArrowUp(e){this.moveSelectedCell(e,-1,0);},onPressArrowDown:function onPressArrowDown(e){this.moveSelectedCell(e,1,0);},onPressArrowLeft:function onPressArrowLeft(e){this.moveSelectedCell(e,0,-1);},onPressArrowRight:function onPressArrowRight(e){this.moveSelectedCell(e,0,1);},onPressTab:function onPressTab(e){this.moveSelectedCell(e,0,e.shiftKey?-1:1);},onPressEnter:function onPressEnter(e){this.setActive(e.key);},onPressDelete:function onPressDelete(e){this.setActive(e.key);},onPressEscape:function onPressEscape(e){if(this.isActive()){this.setInactive(e.key);}else if(this.state.copied){this.setState({copied:null});}},onPressBackspace:function onPressBackspace(e){this.setActive(e.key);},onPressChar:function onPressChar(e){if(this.isKeyPrintable(e.keyCode)){this.setActive(e.keyCode);}},onPressKeyWithCtrl:function onPressKeyWithCtrl(e){var keys={KeyCode_c:99,KeyCode_C:67,KeyCode_V:86,KeyCode_v:118};var _state$selected=this.state.selected;var rowIdx=_state$selected.rowIdx;var idx=_state$selected.idx;if(this.canEdit(idx,rowIdx)){if(e.keyCode == keys.KeyCode_c || e.keyCode == keys.KeyCode_C){var value=this.getSelectedValue();this.handleCopy({value:value});}else if(e.keyCode == keys.KeyCode_v || e.keyCode == keys.KeyCode_V){this.handlePaste();}}},onDragStart:function onDragStart(e){var value=this.getSelectedValue();this.handleDragStart({idx:this.state.selected.idx,rowIdx:this.state.selected.rowIdx,value:value}); //need to set dummy data for FF
	if(e && e.dataTransfer && e.dataTransfer.setData)e.dataTransfer.setData('text/plain','dummy');},moveSelectedCell:function moveSelectedCell(e,rowDelta,cellDelta){ // we need to prevent default as we control grid scroll
	// otherwise it moves every time you left/right which is janky
	e && e.preventDefault();var rowIdx=this.state.selected.rowIdx + rowDelta;var idx=this.state.selected.idx + cellDelta;this.onSelect({idx:idx,rowIdx:rowIdx});},getSelectedValue:function getSelectedValue(){var rowIdx=this.state.selected.rowIdx;var idx=this.state.selected.idx;var cellKey=this.getColumn(idx).key;var row=this.props.rowGetter(rowIdx);return RowUtils.get(row,cellKey);},setActive:function setActive(keyPressed){var _state$selected2=this.state.selected;var rowIdx=_state$selected2.rowIdx;var idx=_state$selected2.idx;if(this.canEdit(idx,rowIdx) && !this.isActive()){notify(this.props.onActive,keyPressed || true);}},setInactive:function setInactive(){if(this.isActive()){notify(this.props.onActive,false);}},canEdit:function canEdit(idx,rowIdx){var col=this.getColumn(idx);var row=this.props.rowGetter(rowIdx);if(this.props.enableCellSelect === true){if(col.editable === false)return false;if(col.editable === true)return true;if(typeof col.editable === 'function')return col.editable(row,rowIdx);return col.editor != null;}},copy:function copy(){var _state$selected3=this.state.selected;var idx=_state$selected3.idx;var rowIdx=_state$selected3.rowIdx;if(this.canEdit(idx,rowIdx)){this.handleCopy({value:this.getSelectedValue()});}},paste:function paste(){var _state$selected4=this.state.selected;var idx=_state$selected4.idx;var rowIdx=_state$selected4.rowIdx;if(this.canEdit(idx,rowIdx)){this.handlePaste();}},isActive:function isActive(){return this.state.selected.active === true;},onCellCommit:function onCellCommit(commit){this.setInactive();if(commit.key === 'Tab'){this.moveSelectedCell(null,0,1);}this.props.onRowUpdated(commit);},setupGridColumns:function setupGridColumns(){var props=arguments.length <= 0 || arguments[0] === undefined?this.props:arguments[0];var cols=props.columns.slice(0),idx=props.selectRowIndex || 0;if(props.enableRowSelect){var userProps=props.selectRowColumn;var selectColumn=_extends({formatter:React.createElement(CheckboxEditor,null),filterable:false,headerRenderer:React.createElement('input',{type:'checkbox',onChange:this.handleCheckboxChange}),width:40,locked:true},userProps,{onCellChange:this.handleRowSelect,key:'select-row',name:''});cols.splice(idx,0,selectColumn);}return cols;},handleCheckboxChange:function handleCheckboxChange(e){var selectedRows=[];if(e.currentTarget instanceof HTMLInputElement && e.currentTarget.checked === true){for(var i=0;i < this.props.rowsCount;i++) {selectedRows.push(this.props.rowGetter(i));}}this.props.onSelectRow(selectedRows);}, // columnKey not used here as this function will select the whole row,
	// but needed to match the function signature in the CheckboxEditor
	handleRowSelect:function handleRowSelect(rowIdx,columnKey,e){var selectedRows=this.props.selectedRows.slice();e.stopPropagation();var row=this.props.rowGetter(rowIdx),idx=selectedRows.indexOf(row);if(idx !== -1){selectedRows.splice(idx,1);}else {selectedRows.push(row);}this.props.onSelectRow(selectedRows);},onAfterAddRow:function onAfterAddRow(numberOfRows){var selected=this.state.selected;notify(this.props.onSelectCell,[0,numberOfRows - 2],[selected.idx,selected.rowIdx]);},onToggleFilter:function onToggleFilter(){this.setState({canFilter:!this.state.canFilter});},getHeaderRows:function getHeaderRows(){var rows=[{ref:'row',height:this.props.headerRowHeight || this.props.rowHeight}];if(this.state.canFilter === true){rows.push({ref:'filterRow',headerCellRenderer:React.createElement(FilterableHeaderCell,{onChange:this.props.onAddFilter,column:this.props.column}),height:45});}return rows;},getRowOffsetHeight:function getRowOffsetHeight(){var offsetHeight=0;this.getHeaderRows().forEach(function(row){return offsetHeight += parseFloat(row.height,10);});return offsetHeight;},handleSort:function handleSort(columnKey,direction){var _props=this.props;var sortInfo=_props.sortInfo;var sortType=_props.sortType;var existing=(sortInfo || {})[columnKey];if(existing && existing === direction || !existing && direction === SORT_TYPES.NONE){return;}sortInfo = sortType === 'simple'?{}:_extends({},sortInfo);if(direction === SORT_TYPES.NONE && sortInfo[columnKey])delete sortInfo[columnKey];else sortInfo[columnKey] = direction;this.props.onGridSort && this.props.onGridSort(sortInfo);},copyPasteEnabled:function copyPasteEnabled(){return this.props.onCellCopyPaste !== null;},handleCopy:function handleCopy(_ref){var value=_ref.value;if(!this.copyPasteEnabled())return;var textToCopy=value;var selected=this.state.selected;var copied={idx:selected.idx,rowIdx:selected.rowIdx};this.setState({textToCopy:textToCopy,copied:copied});},handlePaste:function handlePaste(){var selected=this.state.selected;if(!this.copyPasteEnabled())return;var fromKey=this.getColumn(this.state.copied.idx).key;var toKey=this.getColumn(selected.idx).key;if(this.props.onCellCopyPaste){this.props.onCellCopyPaste({cellKey:toKey,rowIdx:selected.rowIdx,value:this.state.textToCopy,fromColumn:fromKey,fromRow:this.state.copied.rowIdx,toRow:selected.rowIdx,toColumn:toKey});}this.setState({copied:null});},dragEnabled:function dragEnabled(){return this.props.onCellsDragged !== null;},handleDragStart:function handleDragStart(dragged){if(!this.dragEnabled()){return;}var idx=dragged.idx;var rowIdx=dragged.rowIdx;if(idx >= 0 && rowIdx >= 0 && idx < this.getSize() && rowIdx < this.props.rowsCount){this.setState({dragged:dragged});}},handleDragEnter:function handleDragEnter(row){if(!this.dragEnabled())return;var dragged=this.state.dragged;dragged.overRowIdx = row;this.setState({dragged:dragged});},handleDragEnd:function handleDragEnd(){if(!this.dragEnabled())return;var fromRow,toRow;var selected=this.state.selected;var dragged=this.state.dragged;var cellKey=this.getColumn(this.state.selected.idx).key;fromRow = selected.rowIdx;toRow = dragged.overRowIdx;if(this.props.onCellsDragged){this.props.onCellsDragged({cellKey:cellKey,fromRow:fromRow,toRow:toRow,value:dragged.value});}this.setState({dragged:{complete:true}});},handleTerminateDrag:function handleTerminateDrag(){if(!this.dragEnabled()){return;}this.setState({dragged:null});}});module.exports = uncontrollable(ReactDataGrid,{active:'onActive',selectedCell:'onSelectCell',selectedRows:'onSelectRow',sortInfo:'onGridSort'},['focus','copy','paste']); /***/}, /* 2 */function(module,exports,__webpack_require__){"use strict";var _Object$assign=__webpack_require__(3)["default"];exports["default"] = _Object$assign || function(target){for(var i=1;i < arguments.length;i++) {var source=arguments[i];for(var key in source) {if(Object.prototype.hasOwnProperty.call(source,key)){target[key] = source[key];}}}return target;};exports.__esModule = true; /***/}, /* 3 */function(module,exports,__webpack_require__){module.exports = {"default":__webpack_require__(4),__esModule:true}; /***/}, /* 4 */function(module,exports,__webpack_require__){__webpack_require__(5);module.exports = __webpack_require__(8).Object.assign; /***/}, /* 5 */function(module,exports,__webpack_require__){ // 19.1.3.1 Object.assign(target, source)
	var $export=__webpack_require__(6);$export($export.S + $export.F,'Object',{assign:__webpack_require__(11)}); /***/}, /* 6 */function(module,exports,__webpack_require__){var global=__webpack_require__(7),core=__webpack_require__(8),ctx=__webpack_require__(9),PROTOTYPE='prototype';var $export=function $export(type,name,source){var IS_FORCED=type & $export.F,IS_GLOBAL=type & $export.G,IS_STATIC=type & $export.S,IS_PROTO=type & $export.P,IS_BIND=type & $export.B,IS_WRAP=type & $export.W,exports=IS_GLOBAL?core:core[name] || (core[name] = {}),target=IS_GLOBAL?global:IS_STATIC?global[name]:(global[name] || {})[PROTOTYPE],key,own,out;if(IS_GLOBAL)source = name;for(key in source) { // contains in native
	own = !IS_FORCED && target && key in target;if(own && key in exports)continue; // export native or passed
	out = own?target[key]:source[key]; // prevent global pollution for namespaces
	exports[key] = IS_GLOBAL && typeof target[key] != 'function'?source[key] // bind timers to global for call from export context
	:IS_BIND && own?ctx(out,global) // wrap global constructors for prevent change them in library
	:IS_WRAP && target[key] == out?(function(C){var F=function F(param){return this instanceof C?new C(param):C(param);};F[PROTOTYPE] = C[PROTOTYPE];return F; // make static versions for prototype methods
	})(out):IS_PROTO && typeof out == 'function'?ctx(Function.call,out):out;if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;}}; // type bitmap
	$export.F = 1; // forced
	$export.G = 2; // global
	$export.S = 4; // static
	$export.P = 8; // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export; /***/}, /* 7 */function(module,exports){ // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global=module.exports = typeof window != 'undefined' && window.Math == Math?window:typeof self != 'undefined' && self.Math == Math?self:Function('return this')();if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
	/***/}, /* 8 */function(module,exports){var core=module.exports = {version:'1.2.6'};if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
	/***/}, /* 9 */function(module,exports,__webpack_require__){ // optional / simple context binding
	var aFunction=__webpack_require__(10);module.exports = function(fn,that,length){aFunction(fn);if(that === undefined)return fn;switch(length){case 1:return function(a){return fn.call(that,a);};case 2:return function(a,b){return fn.call(that,a,b);};case 3:return function(a,b,c){return fn.call(that,a,b,c);};}return function() /* ...args */{return fn.apply(that,arguments);};}; /***/}, /* 10 */function(module,exports){module.exports = function(it){if(typeof it != 'function')throw TypeError(it + ' is not a function!');return it;}; /***/}, /* 11 */function(module,exports,__webpack_require__){ // 19.1.2.1 Object.assign(target, source, ...)
	var $=__webpack_require__(12),toObject=__webpack_require__(13),IObject=__webpack_require__(15); // should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(17)(function(){var a=_Object$assign2,A={},B={},S=_Symbol(),K='abcdefghijklmnopqrst';A[S] = 7;K.split('').forEach(function(k){B[k] = k;});return a({},A)[S] != 7 || _Object$keys2(a({},B)).join('') != K;})?function assign(target,source){ // eslint-disable-line no-unused-vars
	var T=toObject(target),$$=arguments,$$len=$$.length,index=1,getKeys=$.getKeys,getSymbols=$.getSymbols,isEnum=$.isEnum;while($$len > index) {var S=IObject($$[index++]),keys=getSymbols?getKeys(S).concat(getSymbols(S)):getKeys(S),length=keys.length,j=0,key;while(length > j) if(isEnum.call(S,key = keys[j++]))T[key] = S[key];}return T;}:_Object$assign2; /***/}, /* 12 */function(module,exports){var $Object=Object;module.exports = {create:$Object.create,getProto:$Object.getPrototypeOf,isEnum:({}).propertyIsEnumerable,getDesc:$Object.getOwnPropertyDescriptor,setDesc:$Object.defineProperty,setDescs:$Object.defineProperties,getKeys:$Object.keys,getNames:$Object.getOwnPropertyNames,getSymbols:$Object.getOwnPropertySymbols,each:[].forEach}; /***/}, /* 13 */function(module,exports,__webpack_require__){ // 7.1.13 ToObject(argument)
	var defined=__webpack_require__(14);module.exports = function(it){return Object(defined(it));}; /***/}, /* 14 */function(module,exports){ // 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){if(it == undefined)throw TypeError("Can't call method on  " + it);return it;}; /***/}, /* 15 */function(module,exports,__webpack_require__){ // fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof=__webpack_require__(16);module.exports = Object('z').propertyIsEnumerable(0)?Object:function(it){return cof(it) == 'String'?it.split(''):Object(it);}; /***/}, /* 16 */function(module,exports){var toString=({}).toString;module.exports = function(it){return toString.call(it).slice(8,-1);}; /***/}, /* 17 */function(module,exports){module.exports = function(exec){try{return !!exec();}catch(e) {return true;}}; /***/}, /* 18 */function(module,exports){module.exports = __WEBPACK_EXTERNAL_MODULE_18__; /***/}, /* 19 */function(module,exports){module.exports = __WEBPACK_EXTERNAL_MODULE_19__; /***/}, /* 20 */function(module,exports,__webpack_require__){'use strict';exports.__esModule = true;function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{'default':obj};}var _createUncontrollable=__webpack_require__(21);var _createUncontrollable2=_interopRequireDefault(_createUncontrollable);var mixin={shouldComponentUpdate:function shouldComponentUpdate(){ //let the forceUpdate trigger the update
	return !this._notifying;}};function set(component,propName,handler,value,args){if(handler){component._notifying = true;handler.call.apply(handler,[component,value].concat(args));component._notifying = false;}component._values[propName] = value;if(component.isMounted())component.forceUpdate();}exports['default'] = _createUncontrollable2['default']([mixin],set);module.exports = exports['default']; /***/}, /* 21 */function(module,exports,__webpack_require__){'use strict';exports.__esModule = true;var _extends=_Object$assign2 || function(target){for(var i=1;i < arguments.length;i++) {var source=arguments[i];for(var key in source) {if(Object.prototype.hasOwnProperty.call(source,key)){target[key] = source[key];}}}return target;};exports['default'] = createUncontrollable;function _interopRequireWildcard(obj){if(obj && obj.__esModule){return obj;}else {var newObj={};if(obj != null){for(var key in obj) {if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key] = obj[key];}}newObj['default'] = obj;return newObj;}}function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{'default':obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj) {if(keys.indexOf(i) >= 0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i] = obj[i];}return target;}var _react=__webpack_require__(18);var _react2=_interopRequireDefault(_react);var _utils=__webpack_require__(22);var utils=_interopRequireWildcard(_utils);function createUncontrollable(mixins,set){return uncontrollable;function uncontrollable(Component,controlledValues){var methods=arguments.length <= 2 || arguments[2] === undefined?[]:arguments[2];var displayName=Component.displayName || Component.name || 'Component',basePropTypes=utils.getType(Component).propTypes,propTypes;propTypes = utils.uncontrolledPropTypes(controlledValues,basePropTypes,displayName);methods = utils.transform(methods,function(obj,method){obj[method] = function(){var _refs$inner;return (_refs$inner = this.refs.inner)[method].apply(_refs$inner,arguments);};},{});var component=_react2['default'].createClass(_extends({displayName:'Uncontrolled(' + displayName + ')',mixins:mixins,propTypes:propTypes},methods,{componentWillMount:function componentWillMount(){var props=this.props,keys=_Object$keys2(controlledValues);this._values = utils.transform(keys,function(values,key){values[key] = props[utils.defaultKey(key)];},{});}, /**
		       * If a prop switches from controlled to Uncontrolled
		       * reset its value to the defaultValue
		       */componentWillReceiveProps:function componentWillReceiveProps(nextProps){var _this=this;var props=this.props,keys=_Object$keys2(controlledValues);keys.forEach(function(key){if(utils.getValue(nextProps,key) === undefined && utils.getValue(props,key) !== undefined){_this._values[key] = nextProps[utils.defaultKey(key)];}});},render:function render(){var _this2=this;var newProps={};var _props=this.props;var valueLink=_props.valueLink;var checkedLink=_props.checkedLink;var props=_objectWithoutProperties(_props,['valueLink','checkedLink']);utils.each(controlledValues,function(handle,propName){var linkPropName=utils.getLinkName(propName),prop=_this2.props[propName];if(linkPropName && !isProp(_this2.props,propName) && isProp(_this2.props,linkPropName)){prop = _this2.props[linkPropName].value;}newProps[propName] = prop !== undefined?prop:_this2._values[propName];newProps[handle] = setAndNotify.bind(_this2,propName);});newProps = _extends({},props,newProps,{ref:'inner'});return _react2['default'].createElement(Component,newProps);}}));component.ControlledComponent = Component; /**
		     * useful when wrapping a Component and you want to control
		     * everything
		     */component.deferControlTo = function(newComponent,additions,nextMethods){if(additions === undefined)additions = {};return uncontrollable(newComponent,_extends({},controlledValues,additions),nextMethods);};return component;function setAndNotify(propName,value){var linkName=utils.getLinkName(propName),handler=this.props[controlledValues[propName]];if(linkName && isProp(this.props,linkName) && !handler){handler = this.props[linkName].requestChange;}for(var _len=arguments.length,args=Array(_len > 2?_len - 2:0),_key=2;_key < _len;_key++) {args[_key - 2] = arguments[_key];}set(this,propName,handler,value,args);}function isProp(props,prop){return props[prop] !== undefined;}}}module.exports = exports['default']; /***/}, /* 22 */function(module,exports,__webpack_require__){ /* WEBPACK VAR INJECTION */(function(process){'use strict';exports.__esModule = true;exports.customPropType = customPropType;exports.uncontrolledPropTypes = uncontrolledPropTypes;exports.getType = getType;exports.getValue = getValue;exports.getLinkName = getLinkName;exports.defaultKey = defaultKey;exports.chain = chain;exports.transform = transform;exports.each = each;exports.has = has;function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{'default':obj};}var _react=__webpack_require__(18);var _react2=_interopRequireDefault(_react);var _invariant=__webpack_require__(24);var _invariant2=_interopRequireDefault(_invariant);function customPropType(handler,propType,name){return function(props,propName){if(props[propName] !== undefined){if(!props[handler]){return new Error('You have provided a `' + propName + '` prop to ' + '`' + name + '` without an `' + handler + '` handler. This will render a read-only field. ' + 'If the field should be mutable use `' + defaultKey(propName) + '`. Otherwise, set `' + handler + '`');}return propType && propType(props,propName,name);}};}function uncontrolledPropTypes(controlledValues,basePropTypes,displayName){var propTypes={};if(process.env.NODE_ENV !== 'production' && basePropTypes){transform(controlledValues,function(obj,handler,prop){var type=basePropTypes[prop];_invariant2['default'](typeof handler === 'string' && handler.trim().length,'Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable',displayName,prop);obj[prop] = customPropType(handler,type,displayName);if(type !== undefined)obj[defaultKey(prop)] = type;},propTypes);}return propTypes;}var version=_react2['default'].version.split('.').map(parseFloat);exports.version = version;function getType(component){if(version[0] >= 15 || version[0] === 0 && version[1] >= 13)return component;return component.type;}function getValue(props,name){var linkPropName=getLinkName(name);if(linkPropName && !isProp(props,name) && isProp(props,linkPropName))return props[linkPropName].value;return props[name];}function isProp(props,prop){return props[prop] !== undefined;}function getLinkName(name){return name === 'value'?'valueLink':name === 'checked'?'checkedLink':null;}function defaultKey(key){return 'default' + key.charAt(0).toUpperCase() + key.substr(1);}function chain(thisArg,a,b){return function chainedFunction(){for(var _len=arguments.length,args=Array(_len),_key=0;_key < _len;_key++) {args[_key] = arguments[_key];}a && a.call.apply(a,[thisArg].concat(args));b && b.call.apply(b,[thisArg].concat(args));};}function transform(obj,cb,seed){each(obj,cb.bind(null,seed = seed || (Array.isArray(obj)?[]:{})));return seed;}function each(obj,cb,thisArg){if(Array.isArray(obj))return obj.forEach(cb,thisArg);for(var key in obj) if(has(obj,key))cb.call(thisArg,obj[key],key,obj);}function has(o,k){return o?Object.prototype.hasOwnProperty.call(o,k):false;} /* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(23)); /***/}, /* 23 */function(module,exports){ // shim for using process in browser
	var process=module.exports = {};var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){draining = false;if(currentQueue.length){queue = currentQueue.concat(queue);}else {queueIndex = -1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=setTimeout(cleanUpNextTick);draining = true;var len=queue.length;while(len) {currentQueue = queue;queue = [];while(++queueIndex < len) {if(currentQueue){currentQueue[queueIndex].run();}}queueIndex = -1;len = queue.length;}currentQueue = null;draining = false;clearTimeout(timeout);}process.nextTick = function(fun){var args=new Array(arguments.length - 1);if(arguments.length > 1){for(var i=1;i < arguments.length;i++) {args[i - 1] = arguments[i];}}queue.push(new Item(fun,args));if(queue.length === 1 && !draining){setTimeout(drainQueue,0);}}; // v8 likes predictible objects
	function Item(fun,array){this.fun = fun;this.array = array;}Item.prototype.run = function(){this.fun.apply(null,this.array);};process.title = 'browser';process.browser = true;process.env = {};process.argv = [];process.version = ''; // empty string to avoid regexp issues
	process.versions = {};function noop(){}process.on = noop;process.addListener = noop;process.once = noop;process.off = noop;process.removeListener = noop;process.removeAllListeners = noop;process.emit = noop;process.binding = function(name){throw new Error('process.binding is not supported');};process.cwd = function(){return '/';};process.chdir = function(dir){throw new Error('process.chdir is not supported');};process.umask = function(){return 0;}; /***/}, /* 24 */function(module,exports,__webpack_require__){ /* WEBPACK VAR INJECTION */(function(process){ /**
		 * Copyright 2013-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 */'use strict'; /**
		 * Use invariant() to assert state which your program assumes to be true.
		 *
		 * Provide sprintf-style format (only %s is supported) and arguments
		 * to provide information about what broke and what you were
		 * expecting.
		 *
		 * The invariant message will be stripped in production, but the invariant
		 * will remain to ensure logic does not differ in production.
		 */var invariant=function invariant(condition,format,a,b,c,d,e,f){if(process.env.NODE_ENV !== 'production'){if(format === undefined){throw new Error('invariant requires an error message argument');}}if(!condition){var error;if(format === undefined){error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');}else {var args=[a,b,c,d,e,f];var argIndex=0;error = new Error(format.replace(/%s/g,function(){return args[argIndex++];}));error.name = 'Invariant Violation';}error.framesToPop = 1; // we don't care about invariant's own frame
	throw error;}};module.exports = invariant; /* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(23)); /***/}, /* 25 */function(module,exports,__webpack_require__){"use strict";var _extends=__webpack_require__(2)['default'];var React=__webpack_require__(18);var PropTypes=React.PropTypes;var Header=__webpack_require__(26);var Viewport=__webpack_require__(45);var GridScrollMixin=__webpack_require__(69);var DOMMetrics=__webpack_require__(68);var Grid=React.createClass({displayName:'Grid',propTypes:{rowGetter:PropTypes.oneOfType([PropTypes.array,PropTypes.func]).isRequired,columns:PropTypes.oneOfType([PropTypes.array,PropTypes.object]),minHeight:PropTypes.number,headerRows:PropTypes.oneOfType([PropTypes.array,PropTypes.func]),rowHeight:PropTypes.number,rowRenderer:PropTypes.func,emptyRowsView:PropTypes.func,expandedRows:PropTypes.oneOfType([PropTypes.array,PropTypes.func]),selectedRows:PropTypes.oneOfType([PropTypes.array,PropTypes.func]),rowsCount:PropTypes.number,onRows:PropTypes.func,sortInfo:Header.propTypes.sortInfo,rowOffsetHeight:PropTypes.number.isRequired,onViewportKeydown:PropTypes.func.isRequired,onViewportDragStart:PropTypes.func.isRequired,onViewportDragEnd:PropTypes.func.isRequired,onViewportDoubleClick:PropTypes.func.isRequired},mixins:[GridScrollMixin,DOMMetrics.MetricsComputatorMixin],getStyle:function getStyle(){return {overflow:'hidden',outline:0,position:'relative',minHeight:this.props.minHeight};},render:function render(){var headerRows=this.props.headerRows || [{ref:'row'}];var EmptyRowsView=this.props.emptyRowsView;return React.createElement('div',_extends({},this.props,{style:this.getStyle(),className:'react-grid-Grid'}),React.createElement(Header,{ref:'header',columnMetrics:this.props.columnMetrics,onColumnResize:this.props.onColumnResize,height:this.props.rowHeight,totalWidth:this.props.totalWidth,headerRows:headerRows,sortInfo:this.props.sortInfo,onSort:this.props.onSort}),this.props.rowsCount >= 1 || this.props.rowsCount === 0 && !this.props.emptyRowsView?React.createElement('div',{tabIndex:'-1',ref:'viewPortContainer',onKeyDown:this.props.onViewportKeydown,onDoubleClick:this.props.onViewportDoubleClick,onDragStart:this.props.onViewportDragStart,onDragEnd:this.props.onViewportDragEnd},React.createElement(Viewport,{ref:'viewport',width:this.props.columnMetrics.width,getRowKey:this.props.getRowKey,rowHeight:this.props.rowHeight,rowRenderer:this.props.rowRenderer,rowGetter:this.props.rowGetter,rowsCount:this.props.rowsCount,selectedRows:this.props.selectedRows,expandedRows:this.props.expandedRows,columnMetrics:this.props.columnMetrics,totalWidth:this.props.totalWidth,onScroll:this.onScroll,onRows:this.props.onRows,cellMetaData:this.props.cellMetaData,rowOffsetHeight:this.props.rowOffsetHeight || this.props.rowHeight * headerRows.length,minHeight:this.props.minHeight})):React.createElement('div',{ref:'emptyView',className:'react-grid-Empty'},React.createElement(EmptyRowsView,null)));},focus:function focus(){this.refs.viewPortContainer.focus();},getDefaultProps:function getDefaultProps(){return {rowHeight:35,minHeight:350};}});module.exports = Grid; /***/}, /* 26 */function(module,exports,__webpack_require__){"use strict";var _extends=__webpack_require__(2)['default'];var React=__webpack_require__(18);var ReactDOM=__webpack_require__(19);var joinClasses=__webpack_require__(27);var shallowCloneObject=__webpack_require__(28);var ColumnMetrics=__webpack_require__(29);var ColumnUtils=__webpack_require__(31);var HeaderRow=__webpack_require__(33);var Header=React.createClass({displayName:'Header',propTypes:{columnMetrics:React.PropTypes.shape({width:React.PropTypes.number.isRequired}).isRequired,totalWidth:React.PropTypes.number,height:React.PropTypes.number.isRequired,headerRows:React.PropTypes.array.isRequired,sortInfo:HeaderRow.propTypes.sortInfo},render:function render(){var className=joinClasses({'react-grid-Header':true,'react-grid-Header--resizing':!!this.state.resizing});var headerRows=this.getHeaderRows();return React.createElement('div',_extends({},this.props,{style:this.getStyle(),className:className}),headerRows);},shouldComponentUpdate:function shouldComponentUpdate(nextProps,nextState){var update=!ColumnMetrics.sameColumns(this.props.columnMetrics.columns,nextProps.columnMetrics.columns,ColumnMetrics.sameColumn) || this.props.totalWidth != nextProps.totalWidth || this.props.headerRows.length != nextProps.headerRows.length || this.state.resizing != nextState.resizing || this.props.sortInfo != nextProps.sortInfo;return update;},getHeaderRows:function getHeaderRows(){var _this=this;var columnMetrics=this.getColumnMetrics();var resizeColumn;if(this.state.resizing){resizeColumn = this.state.resizing.column;}var headerRows=[];this.props.headerRows.forEach(function(row,index){var headerRowStyle={position:'absolute',top:_this.getCombinedHeaderHeights(index),left:0,width:_this.props.totalWidth,overflow:'hidden'};headerRows.push(React.createElement(HeaderRow,{key:row.ref,ref:row.ref,style:headerRowStyle,onColumnResize:_this.onColumnResize,onColumnResizeEnd:_this.onColumnResizeEnd,width:columnMetrics.width,height:row.height || _this.props.height,columns:columnMetrics.columns,resizing:resizeColumn,headerCellRenderer:row.headerCellRenderer,sortInfo:_this.props.sortInfo,onSort:_this.props.onSort}));});return headerRows;},getInitialState:function getInitialState(){return {resizing:null};},componentWillReceiveProps:function componentWillReceiveProps(){this.setState({resizing:null});},onColumnResize:function onColumnResize(column,width){var state=this.state.resizing || this.props;var pos=this.getColumnPosition(column);if(pos != null){var resizing={columnMetrics:shallowCloneObject(state.columnMetrics)};resizing.columnMetrics = ColumnMetrics.resizeColumn(resizing.columnMetrics,pos,width); // we don't want to influence scrollLeft while resizing
	if(resizing.columnMetrics.totalWidth < state.columnMetrics.totalWidth){resizing.columnMetrics.totalWidth = state.columnMetrics.totalWidth;}resizing.column = ColumnUtils.getColumn(resizing.columnMetrics.columns,pos);this.setState({resizing:resizing});}},getColumnMetrics:function getColumnMetrics(){var columnMetrics;if(this.state.resizing){columnMetrics = this.state.resizing.columnMetrics;}else {columnMetrics = this.props.columnMetrics;}return columnMetrics;},getColumnPosition:function getColumnPosition(column){var columnMetrics=this.getColumnMetrics();var pos=-1;columnMetrics.columns.forEach(function(c,idx){if(c.key === column.key){pos = idx;}});return pos === -1?null:pos;},onColumnResizeEnd:function onColumnResizeEnd(column,width){var pos=this.getColumnPosition(column);if(pos !== null && this.props.onColumnResize){this.props.onColumnResize(pos,width || column.width);}},setScrollLeft:function setScrollLeft(scrollLeft){var node=ReactDOM.findDOMNode(this.refs.row);node.scrollLeft = scrollLeft;this.refs.row.setScrollLeft(scrollLeft);if(this.refs.filterRow){var nodeFilters=ReactDOM.findDOMNode(this.refs.filterRow);nodeFilters.scrollLeft = scrollLeft;this.refs.filterRow.setScrollLeft(scrollLeft);}},getCombinedHeaderHeights:function getCombinedHeaderHeights(until){var stop_at=this.props.headerRows.length;if(typeof until != 'undefined')stop_at = until;var height=0;for(var index=0;index < stop_at;index++) {height += this.props.headerRows[index].height || this.props.height;}return height;},getStyle:function getStyle(){return {position:'relative',height:this.getCombinedHeaderHeights(),overflow:'hidden'};}});module.exports = Header; /***/}, /* 27 */function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__; /*!
		  Copyright (c) 2015 Jed Watson.
		  Licensed under the MIT License (MIT), see
		  http://jedwatson.github.io/classnames
		*/function classNames(){var classes='';var arg;for(var i=0;i < arguments.length;i++) {arg = arguments[i];if(!arg){continue;}if('string' === typeof arg || 'number' === typeof arg){classes += ' ' + arg;}else if(Object.prototype.toString.call(arg) === '[object Array]'){classes += ' ' + classNames.apply(null,arg);}else if('object' === typeof arg){for(var key in arg) {if(!arg.hasOwnProperty(key) || !arg[key]){continue;}classes += ' ' + key;}}}return classes.substr(1);} // safely export classNames for node / browserify
	if(typeof module !== 'undefined' && module.exports){module.exports = classNames;} // safely export classNames for RequireJS
	if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [],__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return classNames;}).apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} /***/}, /* 28 */function(module,exports){'use strict';function shallowCloneObject(obj){var result={};for(var k in obj) {if(obj.hasOwnProperty(k)){result[k] = obj[k];}}return result;}module.exports = shallowCloneObject; /***/}, /* 29 */function(module,exports,__webpack_require__){ /*global Immutable */"use strict";var _extends=__webpack_require__(2)['default'];var shallowCloneObject=__webpack_require__(28);var sameColumn=__webpack_require__(30);var ColumnUtils=__webpack_require__(31);var getScrollbarSize=__webpack_require__(32); /**
		 * Update column metrics calculation.
		 *
		 * @param {ColumnMetricsType} metrics
		 */function recalculate(metrics){ // compute width for columns which specify width
	var columns=setColumnWidths(metrics.columns,metrics.totalWidth);var unallocatedWidth=columns.filter(function(c){return c.width;}).reduce(function(w,column){return w - column.width;},metrics.totalWidth);unallocatedWidth -= getScrollbarSize();var width=columns.filter(function(c){return c.width;}).reduce(function(w,column){return w + column.width;},0); // compute width for columns which doesn't specify width
	columns = setDefferedColumnWidths(columns,unallocatedWidth,metrics.minColumnWidth); // compute left offset
	columns = setColumnOffsets(columns);return {columns:columns,width:width,totalWidth:metrics.totalWidth,minColumnWidth:metrics.minColumnWidth};}function setColumnOffsets(columns){var left=0;return columns.map(function(column){column.left = left;left += column.width;return column;});}function setColumnWidths(columns,totalWidth){return columns.map(function(column){var colInfo=_extends({},column);if(column.width){if(/^([0-9]+)%$/.exec(column.width.toString())){colInfo.width = Math.floor(column.width / 100 * totalWidth);}}return colInfo;});}function setDefferedColumnWidths(columns,unallocatedWidth,minColumnWidth){var defferedColumns=columns.filter(function(c){return !c.width;});return columns.map(function(column){if(!column.width){if(unallocatedWidth <= 0){column.width = minColumnWidth;}else {column.width = Math.floor(unallocatedWidth / ColumnUtils.getSize(defferedColumns));}}return column;});} /**
		 * Update column metrics calculation by resizing a column.
		 *
		 * @param {ColumnMetricsType} metrics
		 * @param {Column} column
		 * @param {number} width
		 */function resizeColumn(metrics,index,width){var column=ColumnUtils.getColumn(metrics.columns,index);metrics = shallowCloneObject(metrics);metrics.columns = metrics.columns.slice(0);var updatedColumn=shallowCloneObject(column);updatedColumn.width = Math.max(width,metrics.minColumnWidth);metrics = ColumnUtils.spliceColumn(metrics,index,updatedColumn);return recalculate(metrics);}function areColumnsImmutable(prevColumns,nextColumns){return typeof Immutable !== 'undefined' && Immutable.List.isList(prevColumns) && Immutable.List.isList(nextColumns);}function compareEachColumn(prevColumns,nextColumns,sameColumn){var i,len,column;var prevColumnsByKey={};var nextColumnsByKey={};if(ColumnUtils.getSize(prevColumns) !== ColumnUtils.getSize(nextColumns)){return false;}for(i = 0,len = ColumnUtils.getSize(prevColumns);i < len;i++) {column = prevColumns[i];prevColumnsByKey[column.key] = column;}for(i = 0,len = ColumnUtils.getSize(nextColumns);i < len;i++) {column = nextColumns[i];nextColumnsByKey[column.key] = column;var prevColumn=prevColumnsByKey[column.key];if(prevColumn === undefined || !sameColumn(prevColumn,column)){return false;}}for(i = 0,len = ColumnUtils.getSize(prevColumns);i < len;i++) {column = prevColumns[i];var nextColumn=nextColumnsByKey[column.key];if(nextColumn === undefined){return false;}}return true;}function sameColumns(prevColumns,nextColumns,sameColumn){if(areColumnsImmutable(prevColumns,nextColumns)){return prevColumns === nextColumns;}else {return compareEachColumn(prevColumns,nextColumns,sameColumn);}}module.exports = {recalculate:recalculate,resizeColumn:resizeColumn,sameColumn:sameColumn,sameColumns:sameColumns}; /***/}, /* 30 */function(module,exports,__webpack_require__){ /* TODO objects as a map */'use strict';var isValidElement=__webpack_require__(18).isValidElement;module.exports = function sameColumn(a,b){var k;for(k in a) {if(a.hasOwnProperty(k)){if(typeof a[k] === 'function' && typeof b[k] === 'function' || isValidElement(a[k]) && isValidElement(b[k])){continue;}if(!b.hasOwnProperty(k) || a[k] !== b[k]){return false;}}}for(k in b) {if(b.hasOwnProperty(k) && !a.hasOwnProperty(k)){return false;}}return true;}; /***/}, /* 31 */function(module,exports){'use strict';module.exports = {getColumn:function getColumn(columns,idx){if(Array.isArray(columns)){return columns[idx];}else if(typeof Immutable !== 'undefined'){return columns.get(idx);}},spliceColumn:function spliceColumn(metrics,idx,column){if(Array.isArray(metrics.columns)){metrics.columns.splice(idx,1,column);}else if(typeof Immutable !== 'undefined'){metrics.columns = metrics.columns.splice(idx,1,column);}return metrics;},getSize:function getSize(columns){if(Array.isArray(columns)){return columns.length;}else if(typeof Immutable !== 'undefined'){return columns.size;}}}; /***/}, /* 32 */function(module,exports){ /*  offsetWidth in HTMLElement */"use strict";var size;function getScrollbarSize(){if(size === undefined){var outer=document.createElement('div');outer.style.width = '50px';outer.style.height = '50px';outer.style.position = 'absolute';outer.style.top = '-200px';outer.style.left = '-200px';var inner=document.createElement('div');inner.style.height = '100px';inner.style.width = '100%';outer.appendChild(inner);document.body.appendChild(outer);var outerWidth=outer.clientWidth;outer.style.overflowY = 'scroll';var innerWidth=inner.clientWidth;document.body.removeChild(outer);size = outerWidth - innerWidth;}return size;}module.exports = getScrollbarSize; /***/}, /* 33 */function(module,exports,__webpack_require__){ /**
		 * @jsx React.DOM
		 */"use strict";var _extends=__webpack_require__(2)['default'];var _Object$keys=__webpack_require__(34)['default'];var React=__webpack_require__(18);var PropTypes=React.PropTypes;var shallowEqual=__webpack_require__(38);var HeaderCell=__webpack_require__(39);var getScrollbarSize=__webpack_require__(32);var ColumnUtilsMixin=__webpack_require__(31);var SortableHeaderCell=__webpack_require__(44);var HeaderRowStyle={overflow:React.PropTypes.string,width:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),height:React.PropTypes.number,position:React.PropTypes.string};function objectOf(propType){return function(props,name){for(var _len=arguments.length,args=Array(_len > 2?_len - 2:0),_key=2;_key < _len;_key++) {args[_key - 2] = arguments[_key];}var obj=props[name] || {};var invalid=_Object$keys(obj).some(function(k){return propType.apply(undefined,[obj,k].concat(args));});if(invalid)return new Error('Invalid object key');};}var DEFINE_SORT={ASC:'ASC',DESC:'DESC',NONE:'NONE'};var HeaderRow=React.createClass({displayName:'HeaderRow',propTypes:{width:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),height:PropTypes.number.isRequired,columns:PropTypes.oneOfType([PropTypes.array,PropTypes.object]),onColumnResize:PropTypes.func,onSort:PropTypes.func.isRequired,sortInfo:objectOf(PropTypes.oneOf(_Object$keys(DEFINE_SORT).map(function(k){return DEFINE_SORT[k];}))),style:PropTypes.shape(HeaderRowStyle)},mixins:[ColumnUtilsMixin],render:function render(){var cellsStyle={width:this.props.width?this.props.width + getScrollbarSize():'100%',height:this.props.height,whiteSpace:'nowrap',overflowX:'hidden',overflowY:'hidden'};var cells=this.getCells();return React.createElement('div',_extends({},this.props,{className:'react-grid-HeaderRow'}),React.createElement('div',{style:cellsStyle},cells));},getHeaderRenderer:function getHeaderRenderer(column){if(column.sortable){var sortDirection=(this.props.sortInfo || {})[column.key] || DEFINE_SORT.NONE;return React.createElement(SortableHeaderCell,{columnKey:column.key,onSort:this.props.onSort,sortDirection:sortDirection});}else {return this.props.headerCellRenderer || column.headerRenderer || this.props.cellRenderer;}},getCells:function getCells(){var cells=[];var lockedCells=[];for(var i=0,len=this.getSize(this.props.columns);i < len;i++) {var column=this.getColumn(this.props.columns,i);var cell=React.createElement(HeaderCell,{ref:i,key:i,height:this.props.height,column:column,renderer:this.getHeaderRenderer(column),resizing:this.props.resizing === column,onResize:this.props.onColumnResize,onResizeEnd:this.props.onColumnResizeEnd});if(column.locked){lockedCells.push(cell);}else {cells.push(cell);}}return cells.concat(lockedCells);},setScrollLeft:function setScrollLeft(scrollLeft){var _this=this;this.props.columns.forEach(function(column,i){if(column.locked){_this.refs[i].setScrollLeft(scrollLeft);}});},shouldComponentUpdate:function shouldComponentUpdate(nextProps){return nextProps.width !== this.props.width || nextProps.height !== this.props.height || nextProps.columns !== this.props.columns || !shallowEqual(nextProps.style,this.props.style) || this.props.sortInfo != nextProps.sortInfo;},getStyle:function getStyle(){return {overflow:'hidden',width:'100%',height:this.props.height,position:'absolute'};}});HeaderRow.SORT = DEFINE_SORT;module.exports = HeaderRow; /***/}, /* 34 */function(module,exports,__webpack_require__){module.exports = {"default":__webpack_require__(35),__esModule:true}; /***/}, /* 35 */function(module,exports,__webpack_require__){__webpack_require__(36);module.exports = __webpack_require__(8).Object.keys; /***/}, /* 36 */function(module,exports,__webpack_require__){ // 19.1.2.14 Object.keys(O)
	var toObject=__webpack_require__(13);__webpack_require__(37)('keys',function($keys){return function keys(it){return $keys(toObject(it));};}); /***/}, /* 37 */function(module,exports,__webpack_require__){ // most Object methods by ES6 should accept primitives
	var $export=__webpack_require__(6),core=__webpack_require__(8),fails=__webpack_require__(17);module.exports = function(KEY,exec){var fn=(core.Object || {})[KEY] || Object[KEY],exp={};exp[KEY] = exec(fn);$export($export.S + $export.F * fails(function(){fn(1);}),'Object',exp);}; /***/}, /* 38 */function(module,exports){ /**
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
		 */'use strict';var hasOwnProperty=Object.prototype.hasOwnProperty; /**
		 * Performs equality by iterating through keys on an object and returning false
		 * when any key has values which are not strictly equal between the arguments.
		 * Returns true when the values of all keys are strictly equal.
		 */function shallowEqual(objA,objB){if(objA === objB){return true;}if(typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null){return false;}var keysA=_Object$keys2(objA);var keysB=_Object$keys2(objB);if(keysA.length !== keysB.length){return false;} // Test for A's keys different from B.
	var bHasOwnProperty=hasOwnProperty.bind(objB);for(var i=0;i < keysA.length;i++) {if(!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]){return false;}}return true;}module.exports = shallowEqual; /***/}, /* 39 */function(module,exports,__webpack_require__){"use strict";var React=__webpack_require__(18);var ReactDOM=__webpack_require__(19);var joinClasses=__webpack_require__(27);var PropTypes=React.PropTypes;var ExcelColumn=__webpack_require__(40);var ResizeHandle=__webpack_require__(41);var HeaderCell=React.createClass({displayName:'HeaderCell',propTypes:{renderer:PropTypes.oneOfType([PropTypes.func,PropTypes.element]).isRequired,column:PropTypes.shape(ExcelColumn).isRequired,onResize:PropTypes.func.isRequired,height:PropTypes.number.isRequired,onResizeEnd:PropTypes.func.isRequired},render:function render(){var resizeHandle;if(this.props.column.resizable){resizeHandle = React.createElement(ResizeHandle,{onDrag:this.onDrag,onDragStart:this.onDragStart,onDragEnd:this.onDragEnd});}var className=joinClasses({'react-grid-HeaderCell':true,'react-grid-HeaderCell--resizing':this.state.resizing,'react-grid-HeaderCell--locked':this.props.column.locked});className = joinClasses(className,this.props.className,this.props.column.cellClass);var cell=this.getCell();return React.createElement('div',{className:className,style:this.getStyle()},cell,resizeHandle);},getCell:function getCell(){var props={column:this.props.column,className:'react-grid-HeaderCell__value'};if(React.isValidElement(this.props.renderer)){return React.cloneElement(this.props.renderer,props);}else {return this.props.renderer(props);}},getDefaultProps:function getDefaultProps(){return {renderer:simpleCellRenderer};},getInitialState:function getInitialState(){return {resizing:false};},setScrollLeft:function setScrollLeft(scrollLeft){var node=ReactDOM.findDOMNode(this);node.style.webkitTransform = 'translate3d(' + scrollLeft + 'px, 0px, 0px)';node.style.transform = 'translate3d(' + scrollLeft + 'px, 0px, 0px)';},getStyle:function getStyle(){return {width:this.props.column.width,left:this.props.column.left,display:'inline-block',position:'absolute',overflow:'hidden',height:this.props.height,margin:0,textOverflow:'ellipsis',whiteSpace:'nowrap'};},onDragStart:function onDragStart(e){this.setState({resizing:true}); //need to set dummy data for FF
	if(e && e.dataTransfer && e.dataTransfer.setData)e.dataTransfer.setData('text/plain','dummy');},onDrag:function onDrag(e){var resize=this.props.onResize || null; //for flows sake, doesnt recognise a null check direct
	if(resize){var width=this.getWidthFromMouseEvent(e);if(width > 0){resize(this.props.column,width);}}},onDragEnd:function onDragEnd(e){var width=this.getWidthFromMouseEvent(e);this.props.onResizeEnd(this.props.column,width);this.setState({resizing:false});},getWidthFromMouseEvent:function getWidthFromMouseEvent(e){var right=e.pageX;var left=ReactDOM.findDOMNode(this).getBoundingClientRect().left;return right - left;}});function simpleCellRenderer(props){return React.createElement('div',props,props.column.name);}module.exports = HeaderCell; /***/}, /* 40 */function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(18);var ExcelColumnShape={name:React.PropTypes.string,key:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number]).isRequired,width:React.PropTypes.number.isRequired};module.exports = ExcelColumnShape; /***/}, /* 41 */function(module,exports,__webpack_require__){'use strict';var _extends=__webpack_require__(2)['default'];var React=__webpack_require__(18);var Draggable=__webpack_require__(42);var ResizeHandle=React.createClass({displayName:'ResizeHandle',style:{position:'absolute',top:0,right:0,width:6,height:'100%'},render:function render(){return React.createElement(Draggable,_extends({},this.props,{className:'react-grid-HeaderCell__resizeHandle',style:this.style}));}});module.exports = ResizeHandle; /***/}, /* 42 */function(module,exports,__webpack_require__){ /*  need   */'use strict';var _extends=__webpack_require__(2)['default'];var React=__webpack_require__(18);var PropTypes=React.PropTypes;var emptyFunction=__webpack_require__(43);var Draggable=React.createClass({displayName:'Draggable',propTypes:{onDragStart:PropTypes.func,onDragEnd:PropTypes.func,onDrag:PropTypes.func,component:PropTypes.oneOfType([PropTypes.func,PropTypes.string])},render:function render(){return React.createElement('div',_extends({},this.props,{onMouseDown:this.onMouseDown,className:'react-grid-HeaderCell__draggable'}));},getDefaultProps:function getDefaultProps(){return {onDragStart:emptyFunction.thatReturnsTrue,onDragEnd:emptyFunction,onDrag:emptyFunction};},getInitialState:function getInitialState(){return {drag:null};},onMouseDown:function onMouseDown(e){var drag=this.props.onDragStart(e);if(drag === null && e.button !== 0){return;}window.addEventListener('mouseup',this.onMouseUp);window.addEventListener('mousemove',this.onMouseMove);this.setState({drag:drag});},onMouseMove:function onMouseMove(e){if(this.state.drag === null){return;}if(e.preventDefault){e.preventDefault();}this.props.onDrag(e);},onMouseUp:function onMouseUp(e){this.cleanUp();this.props.onDragEnd(e,this.state.drag);this.setState({drag:null});},componentWillUnmount:function componentWillUnmount(){this.cleanUp();},cleanUp:function cleanUp(){window.removeEventListener('mouseup',this.onMouseUp);window.removeEventListener('mousemove',this.onMouseMove);}});module.exports = Draggable; /***/}, /* 43 */function(module,exports){ /**
		 * Copyright 2013-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule emptyFunction
		 */"use strict";function makeEmptyFunction(arg){return function(){return arg;};} /**
		 * This function accepts and discards inputs; it has no side effects. This is
		 * primarily useful idiomatically for overridable function endpoints which
		 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
		 */function emptyFunction(){}emptyFunction.thatReturns = makeEmptyFunction;emptyFunction.thatReturnsFalse = makeEmptyFunction(false);emptyFunction.thatReturnsTrue = makeEmptyFunction(true);emptyFunction.thatReturnsNull = makeEmptyFunction(null);emptyFunction.thatReturnsThis = function(){return this;};emptyFunction.thatReturnsArgument = function(arg){return arg;};module.exports = emptyFunction; /***/}, /* 44 */function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(18);var joinClasses=__webpack_require__(27);var DEFINE_SORT={ASC:'ASC',DESC:'DESC',NONE:'NONE'};var SortableHeaderCell=React.createClass({displayName:'SortableHeaderCell',propTypes:{columnKey:React.PropTypes.string.isRequired,onSort:React.PropTypes.func.isRequired,sortDirection:React.PropTypes.oneOf(['ASC','DESC','NONE'])},onClick:function onClick(){var direction;switch(this.props.sortDirection){case null:case undefined:case DEFINE_SORT.NONE:direction = DEFINE_SORT.ASC;break;case DEFINE_SORT.ASC:direction = DEFINE_SORT.DESC;break;case DEFINE_SORT.DESC:direction = DEFINE_SORT.NONE;break;}this.props.onSort(this.props.columnKey,direction);},getSortByText:function getSortByText(){var unicodeKeys={'ASC':'9650','DESC':'9660','NONE':''};return String.fromCharCode(unicodeKeys[this.props.sortDirection]);},render:function render(){var sorting=this.props.sortDirection && this.props.sortDirection !== DEFINE_SORT.NONE;var className=joinClasses(this.props.className,{'react-grid-HeaderCell-sortable':true,'react-grid-HeaderCell-sortable--ascending':this.props.sortDirection === 'ASC','react-grid-HeaderCell-sortable--descending':this.props.sortDirection === 'DESC'});return React.createElement('div',{title:this.props.column.name,className:className,onClick:this.onClick,style:{cursor:'pointer',position:'relative',paddingRight:sorting?15:undefined}},this.props.column.name,!!sorting && React.createElement('span',{style:{position:'absolute',right:0}},this.getSortByText()));}});module.exports = SortableHeaderCell; /***/}, /* 45 */function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(18);var Canvas=__webpack_require__(46);var PropTypes=React.PropTypes;var colUtils=__webpack_require__(31);var ViewportScroll=__webpack_require__(67);var Viewport=React.createClass({displayName:'Viewport',mixins:[ViewportScroll],propTypes:{rowOffsetHeight:PropTypes.number.isRequired,totalWidth:PropTypes.number.isRequired,columnMetrics:PropTypes.object.isRequired,rowGetter:PropTypes.oneOfType([PropTypes.array,PropTypes.func]).isRequired,selectedRows:PropTypes.array,expandedRows:PropTypes.array,rowRenderer:PropTypes.func,rowsCount:PropTypes.number.isRequired,rowHeight:PropTypes.number.isRequired,onRows:PropTypes.func,onScroll:PropTypes.func,minHeight:PropTypes.number},componentWillReceiveProps:function componentWillReceiveProps(nextProps){var _this=this;var cellMetaData=nextProps.cellMetaData;var columnMetrics=nextProps.columnMetrics;var _cellMetaData$selected=cellMetaData.selected;var rowIdx=_cellMetaData$selected.rowIdx;var idx=_cellMetaData$selected.idx;var column=colUtils.getColumn(columnMetrics.columns,idx);if(idx !== -1 && !column.locked && this.selectedCellChanged(cellMetaData)){(function(){var _scrollToCell=_this.scrollToCell([idx,rowIdx],nextProps);var scrollTop=_scrollToCell.scrollTop;var scrollLeft=_scrollToCell.scrollLeft;cancelAnimationFrame(_this._raf);_this._raf = requestAnimationFrame(function(){if(_this.isMounted())_this.refs.canvas.setScroll(scrollTop,scrollLeft);});})();}},render:function render(){var style={padding:0,bottom:0,left:0,right:0,overflow:'hidden',position:'absolute',top:this.props.rowOffsetHeight};return React.createElement('div',{className:'react-grid-Viewport',style:style},React.createElement(Canvas,{ref:'canvas',getRowKey:this.props.getRowKey,totalWidth:this.props.totalWidth,width:this.props.columnMetrics.width,rowGetter:this.props.rowGetter,rowsCount:this.props.rowsCount,selectedRows:this.props.selectedRows,expandedRows:this.props.expandedRows,columns:this.props.columnMetrics.columns,rowRenderer:this.props.rowRenderer,visibleStart:this.state.visibleStart,visibleEnd:this.state.visibleEnd,displayStart:this.state.displayStart,displayEnd:this.state.displayEnd,cellMetaData:this.props.cellMetaData,height:this.state.height,rowHeight:this.props.rowHeight,onScroll:this.onScroll,onRows:this.props.onRows}));},getScroll:function getScroll(){return this.refs.canvas.getScroll();},onScroll:function onScroll(scroll){this.updateScroll(scroll.scrollTop,scroll.scrollLeft,this.state.height,this.props.rowHeight,this.props.rowsCount);if(this.props.onScroll){this.props.onScroll({scrollTop:scroll.scrollTop,scrollLeft:scroll.scrollLeft});}},setScrollLeft:function setScrollLeft(scrollLeft){this.refs.canvas.setScrollLeft(scrollLeft);},selectedCellChanged:function selectedCellChanged(cellMetaData){var oldMeta=this.props.cellMetaData;return oldMeta.selected.rowIdx !== cellMetaData.selected.rowIdx || oldMeta.selected.idx !== cellMetaData.selected.idx;}});module.exports = Viewport; /***/}, /* 46 */function(module,exports,__webpack_require__){"use strict";var React=__webpack_require__(18);var ReactDOM=__webpack_require__(19);var joinClasses=__webpack_require__(27);var PropTypes=React.PropTypes;var shallowEqual=__webpack_require__(38);var emptyFunction=__webpack_require__(43);var ScrollShim=__webpack_require__(47);var Row=__webpack_require__(48);var Canvas=React.createClass({displayName:'Canvas',mixins:[ScrollShim],propTypes:{rowRenderer:PropTypes.oneOfType([PropTypes.func,PropTypes.element]),rowHeight:PropTypes.number.isRequired,height:PropTypes.number.isRequired,displayStart:PropTypes.number.isRequired,displayEnd:PropTypes.number.isRequired,rowsCount:PropTypes.number.isRequired,rowGetter:PropTypes.oneOfType([PropTypes.func.isRequired,PropTypes.array.isRequired]),onRows:PropTypes.func,columns:PropTypes.oneOfType([PropTypes.object,PropTypes.array]).isRequired},render:function render(){var _this=this;var displayStart=this.state.displayStart;var displayEnd=this.state.displayEnd;var rowHeight=this.props.rowHeight;var length=this.props.rowsCount;var getKey=this.props.getRowKey;var rows=this.getRows(displayStart,displayEnd).map(function(row,idx){return _this.renderRow({key:getKey?getKey(row):displayStart + idx,ref:idx,idx:displayStart + idx,row:row,height:rowHeight,columns:_this.props.columns,isSelected:_this.isRowSelected(row),expandedRows:_this.props.expandedRows,cellMetaData:_this.props.cellMetaData});});this._currentRowsLength = rows.length;if(displayStart > 0){rows.unshift(this.renderPlaceholder('top',displayStart * rowHeight));}if(length - displayEnd > 0){rows.push(this.renderPlaceholder('bottom',(length - displayEnd) * rowHeight));}var style={position:'absolute',top:0,left:0,overflowX:'auto',overflowY:'scroll',width:this.props.totalWidth + this.state.scrollbarWidth,height:this.props.height,transform:'translate3d(0, 0, 0)'};return React.createElement('div',{style:style,onScroll:this.onScroll,className:joinClasses('react-grid-Canvas',this.props.className,{opaque:this.props.cellMetaData.selected && this.props.cellMetaData.selected.active})},React.createElement('div',{style:{width:this.props.width,overflow:'hidden'}},rows));},renderRow:function renderRow(props){var RowsRenderer=this.props.rowRenderer;if(typeof RowsRenderer === 'function'){return React.createElement(RowsRenderer,props);}else if(React.isValidElement(this.props.rowRenderer)){return React.cloneElement(this.props.rowRenderer,props);}},renderPlaceholder:function renderPlaceholder(key,height){return React.createElement('div',{key:key,style:{height:height}},this.props.columns.map(function(column,idx){return React.createElement('div',{style:{width:column.width},key:idx});}));},getDefaultProps:function getDefaultProps(){return {rowRenderer:Row,onRows:emptyFunction};},isRowSelected:function isRowSelected(row){return this.props.selectedRows && this.props.selectedRows.indexOf(row) !== -1;},_currentRowsLength:0,_currentRowsRange:{start:0,end:0},_scroll:{scrollTop:0,scrollLeft:0},getInitialState:function getInitialState(){return {shouldUpdate:true,displayStart:this.props.displayStart,displayEnd:this.props.displayEnd,scrollbarWidth:0};},componentWillMount:function componentWillMount(){this._currentRowsLength = 0;this._currentRowsRange = {start:0,end:0};this._scroll = {scrollTop:0,scrollLeft:0};},componentDidMount:function componentDidMount(){ReactDOM.findDOMNode(this).scrollLeft = 0;this.onRows();},componentDidUpdate:function componentDidUpdate(){if(this._scroll.scrollTop !== 0 && this._scroll.scrollLeft !== 0){this.setScrollLeft(this._scroll.scrollLeft);}this.onRows();},componentWillUnmount:function componentWillUnmount(){this._currentRowsLength = 0;this._currentRowsRange = {start:0,end:0};this._scroll = {scrollTop:0,scrollLeft:0};},componentWillReceiveProps:function componentWillReceiveProps(nextProps){if(nextProps.rowsCount > this.props.rowsCount){ReactDOM.findDOMNode(this).scrollTop = nextProps.rowsCount * this.props.rowHeight;}var scrollbarWidth=this.getScrollbarWidth();var shouldUpdate=!(nextProps.visibleStart > this.state.displayStart && nextProps.visibleEnd < this.state.displayEnd) || nextProps.rowsCount !== this.props.rowsCount || nextProps.rowHeight !== this.props.rowHeight || nextProps.columns !== this.props.columns || nextProps.width !== this.props.width || nextProps.cellMetaData !== this.props.cellMetaData || !shallowEqual(nextProps.style,this.props.style);if(shouldUpdate){this.setState({shouldUpdate:true,displayStart:nextProps.displayStart,displayEnd:nextProps.displayEnd,scrollbarWidth:scrollbarWidth});}else {this.setState({shouldUpdate:false,scrollbarWidth:scrollbarWidth});}},shouldComponentUpdate:function shouldComponentUpdate(nextProps,nextState){return !nextState || nextState.shouldUpdate;},onRows:function onRows(){if(this._currentRowsRange !== {start:0,end:0}){this.props.onRows(this._currentRowsRange);this._currentRowsRange = {start:0,end:0};}},getRows:function getRows(displayStart,displayEnd){this._currentRowsRange = {start:displayStart,end:displayEnd};if(Array.isArray(this.props.rowGetter)){return this.props.rowGetter.slice(displayStart,displayEnd);}else {var rows=[];for(var i=displayStart;i < displayEnd;i++) {rows.push(this.props.rowGetter(i));}return rows;}},getScrollbarWidth:function getScrollbarWidth(){var scrollbarWidth=0; // Get the scrollbar width
	var canvas=ReactDOM.findDOMNode(this);scrollbarWidth = canvas.offsetWidth - canvas.clientWidth;return scrollbarWidth;},setScrollLeft:function setScrollLeft(scrollLeft){if(this._currentRowsLength !== 0){if(!this.refs)return;for(var i=0,len=this._currentRowsLength;i < len;i++) {if(this.refs[i] && this.refs[i].setScrollLeft){this.refs[i].setScrollLeft(scrollLeft);}}}},getScroll:function getScroll(){var _ReactDOM$findDOMNode=ReactDOM.findDOMNode(this);var scrollTop=_ReactDOM$findDOMNode.scrollTop;var scrollLeft=_ReactDOM$findDOMNode.scrollLeft;return {scrollTop:scrollTop,scrollLeft:scrollLeft};},setScroll:function setScroll(scrollTop,scrollLeft){var current=this.getScroll();scrollTop = scrollTop == null?current.scrollTop:scrollTop;scrollLeft = scrollLeft == null?current.scrollLeft:scrollLeft;var node=ReactDOM.findDOMNode(this);if(scrollTop !== current.scrollTop)node.scrollTop = scrollTop;if(scrollLeft !== current.scrollLeft){node.scrollLeft = scrollLeft;}},onScroll:function onScroll(e){if(e.target !== ReactDOM.findDOMNode(this))return;this.appendScrollShim();var _e$target=e.target;var scrollTop=_e$target.scrollTop;var scrollLeft=_e$target.scrollLeft;var scroll={scrollTop:scrollTop,scrollLeft:scrollLeft};this._scroll = scroll;this.props.onScroll(scroll);}});module.exports = Canvas; /***/}, /* 47 */function(module,exports,__webpack_require__){ /* TODO mixin not compatible and HTMLElement classList */ /**
		 * @jsx React.DOM


		 */'use strict';var ReactDOM=__webpack_require__(19);var ScrollShim={appendScrollShim:function appendScrollShim(){if(!this._scrollShim){var size=this._scrollShimSize();var shim=document.createElement('div');if(shim.classList){shim.classList.add('react-grid-ScrollShim'); //flow - not compatible with HTMLElement
	}else {shim.className += ' react-grid-ScrollShim';}shim.style.position = 'absolute';shim.style.top = 0;shim.style.left = 0;shim.style.width = size.width + 'px';shim.style.height = size.height + 'px';ReactDOM.findDOMNode(this).appendChild(shim);this._scrollShim = shim;}this._scheduleRemoveScrollShim();},_scrollShimSize:function _scrollShimSize(){return {width:this.props.width,height:this.props.length * this.props.rowHeight};},_scheduleRemoveScrollShim:function _scheduleRemoveScrollShim(){if(this._scheduleRemoveScrollShimTimer){clearTimeout(this._scheduleRemoveScrollShimTimer);}this._scheduleRemoveScrollShimTimer = setTimeout(this._removeScrollShim,200);},_removeScrollShim:function _removeScrollShim(){if(this._scrollShim){this._scrollShim.parentNode.removeChild(this._scrollShim);this._scrollShim = undefined;}}};module.exports = ScrollShim; /***/}, /* 48 */function(module,exports,__webpack_require__){'use strict';var _extends=__webpack_require__(2)['default'];var React=__webpack_require__(18);var joinClasses=__webpack_require__(27);var Cell=__webpack_require__(49);var ColumnMetrics=__webpack_require__(29);var ColumnUtilsMixin=__webpack_require__(31);var Row=React.createClass({displayName:'Row',propTypes:{height:React.PropTypes.number.isRequired,columns:React.PropTypes.oneOfType([React.PropTypes.object,React.PropTypes.array]).isRequired,row:React.PropTypes.object.isRequired,cellRenderer:React.PropTypes.func,isSelected:React.PropTypes.bool,idx:React.PropTypes.number.isRequired,expandedRows:React.PropTypes.arrayOf(React.PropTypes.object)},mixins:[ColumnUtilsMixin],render:function render(){var className=joinClasses(this.props.className,'react-grid-Row','react-grid-Row--' + (this.props.idx % 2 === 0?'even':'odd'));var style=_extends({},this.props.style,{height:this.getRowHeight(this.props),overflow:'hidden'});var cells=this.getCells();return React.createElement('div',_extends({},this.props,{className:className,style:style,onDragEnter:this.handleDragEnter}),React.isValidElement(this.props.row)?this.props.row:cells);},getCells:function getCells(){var _this=this;var cells=[];var lockedCells=[];var selectedColumn=this.getSelectedColumn();this.props.columns.forEach(function(column,i){var CellRenderer=_this.props.cellRenderer;var cell=React.createElement(CellRenderer,{ref:i,key:column.key + '-' + i,idx:i,rowIdx:_this.props.idx,column:column,height:_this.getRowHeight(),formatter:column.formatter,cellMetaData:_this.props.cellMetaData,rowData:_this.props.row,selectedColumn:selectedColumn,isRowSelected:_this.props.isSelected});if(column.locked){lockedCells.push(cell);}else {cells.push(cell);}});return cells.concat(lockedCells);},getRowHeight:function getRowHeight(){var rows=this.props.expandedRows || null;if(rows && this.props.key){var row=rows[this.props.key] || null;if(row){return row.height;}}return this.props.height;},renderCell:function renderCell(props){if(typeof this.props.cellRenderer == 'function'){this.props.cellRenderer.call(this,props);}if(React.isValidElement(this.props.cellRenderer)){return React.cloneElement(this.props.cellRenderer,props);}else {return this.props.cellRenderer(props);}},getDefaultProps:function getDefaultProps(){return {cellRenderer:Cell,isSelected:false,height:35};},setScrollLeft:function setScrollLeft(scrollLeft){var _this2=this;this.props.columns.forEach(function(column,i){if(column.locked){if(!_this2.refs[i])return;_this2.refs[i].setScrollLeft(scrollLeft);}});},doesRowContainSelectedCell:function doesRowContainSelectedCell(props){var selected=props.cellMetaData.selected;if(selected && selected.rowIdx === props.idx){return true;}else {return false;}},willRowBeDraggedOver:function willRowBeDraggedOver(props){var dragged=props.cellMetaData.dragged;return dragged != null && (dragged.rowIdx >= 0 || dragged.complete === true);},hasRowBeenCopied:function hasRowBeenCopied(){var copied=this.props.cellMetaData.copied;return copied != null && copied.rowIdx === this.props.idx;},shouldComponentUpdate:function shouldComponentUpdate(nextProps){return !ColumnMetrics.sameColumns(this.props.columns,nextProps.columns,ColumnMetrics.sameColumn) || this.doesRowContainSelectedCell(this.props) || this.doesRowContainSelectedCell(nextProps) || this.willRowBeDraggedOver(nextProps) || nextProps.row !== this.props.row || nextProps.idx !== this.props.idx || this.hasRowBeenCopied() || this.props.isSelected !== nextProps.isSelected || nextProps.height !== this.props.height;},handleDragEnter:function handleDragEnter(){var handleDragEnterRow=this.props.cellMetaData.handleDragEnterRow;if(handleDragEnterRow){handleDragEnterRow(this.props.idx);}},getSelectedColumn:function getSelectedColumn(){var selected=this.props.cellMetaData.selected;if(selected && selected.idx){return this.getColumn(this.props.columns,selected.idx);}}});module.exports = Row; /***/}, /* 49 */function(module,exports,__webpack_require__){'use strict';var _extends=__webpack_require__(2)['default'];var React=__webpack_require__(18);var ReactDOM=__webpack_require__(19);var joinClasses=__webpack_require__(27);var EditorContainer=__webpack_require__(50);var ExcelColumn=__webpack_require__(40);var isFunction=__webpack_require__(65);var CellMetaDataShape=__webpack_require__(66);function shouldCellUpdate(props,context){var column=props.column;var formatter=column.formatter || SimpleCellFormatter;formatter = formatter.type || formatter;return !!formatter.shouldCellUpdate && formatter.shouldCellUpdate(props,context);}var Cell=React.createClass({displayName:'Cell',propTypes:{rowIdx:React.PropTypes.number.isRequired,idx:React.PropTypes.number.isRequired,selected:React.PropTypes.shape({idx:React.PropTypes.number.isRequired}),tabIndex:React.PropTypes.number,ref:React.PropTypes.string,column:React.PropTypes.shape(ExcelColumn).isRequired,isExpanded:React.PropTypes.bool,cellMetaData:React.PropTypes.shape(CellMetaDataShape).isRequired,handleDragStart:React.PropTypes.func,className:React.PropTypes.string,rowData:React.PropTypes.object.isRequired},getDefaultProps:function getDefaultProps(){return {tabIndex:-1,ref:'cell',isExpanded:false};},getInitialState:function getInitialState(){return {isRowChanging:false,isCellValueChanging:false};},componentDidMount:function componentDidMount(){this.checkFocus();},componentDidUpdate:function componentDidUpdate(prevProps){var dragged=this.props.cellMetaData.dragged;if(this.isSelected() !== this.isSelected(prevProps) || this.isActive() !== this.isActive(prevProps))this.checkFocus();if(dragged && dragged.complete === true){this.props.cellMetaData.handleTerminateDrag();}if(this.state.isRowChanging && this.props.selectedColumn != null){this.applyUpdateClass();}},componentWillReceiveProps:function componentWillReceiveProps(nextProps){this.setState({isRowChanging:this.props.rowData !== nextProps.rowData,isCellValueChanging:this.props.value !== nextProps.value});},shouldComponentUpdate:function shouldComponentUpdate(nextProps){return this.props.column.width !== nextProps.column.width || this.props.column.left !== nextProps.column.left || this.props.rowData !== nextProps.rowData || this.props.height !== nextProps.height || this.props.rowIdx !== nextProps.rowIdx || this.isCellSelectionChanging(nextProps) || this.isDraggedCellChanging(nextProps) || this.isCopyCellChanging(nextProps) || this.props.isRowSelected !== nextProps.isRowSelected || this.isSelected() || shouldCellUpdate(nextProps);},getStyle:function getStyle(){var style={position:'absolute',width:this.props.column.width,height:this.props.height,left:this.props.column.left};return style;},render:function render(){var style=this.getStyle();var className=this.getCellClass();return React.createElement('div',_extends({},this.props,{className:className,style:style,onClick:this.onCellClick,onDoubleClick:this.onCellDoubleClick}),this.renderCellContent(),this.props.children,React.createElement('div',{className:'drag-handle',draggable:'true'}));},renderCellContent:function renderCellContent(){var _props=this.props;var cellMetaData=_props.cellMetaData;var column=_props.column;var idx=_props.idx;var rowIdx=_props.rowIdx;var rowData=_props.rowData;var height=_props.height;var isExpanded=_props.isExpanded;var isRowSelected=_props.isRowSelected;var formatter=column.formatter;var CellContent;var props={cellMetaData:cellMetaData,column:column,idx:idx,rowIdx:rowIdx,rowData:rowData,height:height,isExpanded:isExpanded,isRowSelected:isRowSelected,value:this.getValue(),isSelected:this.isSelected()};if(this.isActive()){CellContent = React.createElement(EditorContainer,props);}else if(React.isValidElement(formatter)){CellContent = React.cloneElement(formatter,props);}else if(isFunction(formatter)){CellContent = React.createElement(formatter,props);}else {CellContent = React.createElement(SimpleCellFormatter,props);}return React.createElement('div',{ref:'cell',className:'react-grid-Cell__value'},CellContent,this.props.cellControls);},isColumnSelected:function isColumnSelected(){var meta=this.props.cellMetaData;if(meta == null || meta.selected == null){return false;}return meta.selected && meta.selected.idx === this.props.idx;},isSelected:function isSelected(){var props=arguments.length <= 0 || arguments[0] === undefined?this.props:arguments[0];var meta=props.cellMetaData;if(meta == null || meta.selected == null){return false;}return !!(meta.selected && meta.selected.rowIdx === props.rowIdx && meta.selected.idx === props.idx);},isActive:function isActive(){var props=arguments.length <= 0 || arguments[0] === undefined?this.props:arguments[0];var meta=props.cellMetaData;if(meta == null || meta.selected == null){return false;}return this.isSelected(props) && meta.selected.active === true;},isCellSelectionChanging:function isCellSelectionChanging(nextProps){var meta=this.props.cellMetaData;if(meta == null || meta.selected == null){return false;}var nextSelected=nextProps.cellMetaData.selected;if(meta.selected && nextSelected){return this.props.idx === nextSelected.idx || this.props.idx === meta.selected.idx;}else {return true;}},getRowData:function getRowData(){return this.props.rowData.toJSON?this.props.rowData.toJSON():this.props.rowData;},onCellClick:function onCellClick(){var meta=this.props.cellMetaData;if(meta != null && meta.onCellClick != null){meta.onCellClick({rowIdx:this.props.rowIdx,idx:this.props.idx});}},onCellDoubleClick:function onCellDoubleClick(){var meta=this.props.cellMetaData;if(meta != null && meta.onCellDoubleClick != null){meta.onCellDoubleClick({rowIdx:this.props.rowIdx,idx:this.props.idx});}},checkFocus:function checkFocus(){if(this.isSelected() && !this.isActive()){ReactDOM.findDOMNode(this).focus();}},getCellClass:function getCellClass(){var className=joinClasses(this.props.column.cellClass,'react-grid-Cell',this.props.className,this.props.column.locked?'react-grid-Cell--locked':null);var extraClasses=joinClasses({'selected':this.isSelected() && !this.isActive(),'editing':this.isActive(),'copied':this.isCopied(),'active-drag-cell':this.isSelected() || this.isDraggedOver(),'is-dragged-over-up':this.isDraggedOverUpwards(),'is-dragged-over-down':this.isDraggedOverDownwards(),'was-dragged-over':this.wasDraggedOver()});return joinClasses(className,extraClasses);},getUpdateCellClass:function getUpdateCellClass(){return this.props.column.getUpdateCellClass?this.props.column.getUpdateCellClass(this.props.selectedColumn,this.props.column,this.state.isCellValueChanging):'';},applyUpdateClass:function applyUpdateClass(){var updateCellClass=this.getUpdateCellClass(); // -> removing the class
	if(updateCellClass != null && updateCellClass != ''){var cellDOMNode=ReactDOM.findDOMNode(this);if(cellDOMNode.classList){cellDOMNode.classList.remove(updateCellClass); // -> and re-adding the class
	cellDOMNode.classList.add(updateCellClass);}else if(cellDOMNode.className.indexOf(updateCellClass) === -1){ // IE9 doesn't support classList, nor (I think) altering element.className
	// without replacing it wholesale.
	cellDOMNode.className = cellDOMNode.className + ' ' + updateCellClass;}}},setScrollLeft:function setScrollLeft(scrollLeft){var ctrl=this; //flow on windows has an outdated react declaration, once that gets updated, we can remove this
	if(ctrl.isMounted()){var node=ReactDOM.findDOMNode(this);var transform='translate3d(' + scrollLeft + 'px, 0px, 0px)';node.style.webkitTransform = transform;node.style.transform = transform;}},isCopied:function isCopied(){var copied=this.props.cellMetaData.copied;return copied && copied.rowIdx === this.props.rowIdx && copied.idx === this.props.idx;},isDraggedOver:function isDraggedOver(){var dragged=this.props.cellMetaData.dragged;return dragged && dragged.overRowIdx === this.props.rowIdx && dragged.idx === this.props.idx;},wasDraggedOver:function wasDraggedOver(){var dragged=this.props.cellMetaData.dragged;return dragged && (dragged.overRowIdx < this.props.rowIdx && this.props.rowIdx < dragged.rowIdx || dragged.overRowIdx > this.props.rowIdx && this.props.rowIdx > dragged.rowIdx) && dragged.idx === this.props.idx;},isDraggedCellChanging:function isDraggedCellChanging(nextProps){var isChanging;var dragged=this.props.cellMetaData.dragged;var nextDragged=nextProps.cellMetaData.dragged;if(dragged){isChanging = nextDragged && this.props.idx === nextDragged.idx || dragged && this.props.idx === dragged.idx;return isChanging;}else {return false;}},isCopyCellChanging:function isCopyCellChanging(nextProps){var copied=this.props.cellMetaData.copied;var nextCopied=nextProps.cellMetaData.copied;if(copied){return nextCopied && this.props.idx === nextCopied.idx || copied && this.props.idx === copied.idx;}else {return false;}},isDraggedOverUpwards:function isDraggedOverUpwards(){var dragged=this.props.cellMetaData.dragged;return !this.isSelected() && this.isDraggedOver() && this.props.rowIdx < dragged.rowIdx;},isDraggedOverDownwards:function isDraggedOverDownwards(){var dragged=this.props.cellMetaData.dragged;return !this.isSelected() && this.isDraggedOver() && this.props.rowIdx > dragged.rowIdx;},getValue:function getValue(){var props=arguments.length <= 0 || arguments[0] === undefined?this.props:arguments[0];var key=props.column.key;var row=props.rowData;if(key === 'select-row')return props.isRowSelected;else if(isFunction(row.get))return row.get(key);else return row[key];}});var SimpleCellFormatter=React.createClass({displayName:'SimpleCellFormatter',render:function render(){ // objects like dates will throw when specified as children
	// so cast to a string
	return React.createElement('span',null,'' + this.props.value);},shouldComponentUpdate:function shouldComponentUpdate(nextProps){return nextProps.value !== this.props.value;}});module.exports = Cell; /***/}, /* 50 */function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(18);var isTextInputElement=__webpack_require__(51);var joinClasses=__webpack_require__(27);var keyboardHandlerMixin=__webpack_require__(52);var SimpleTextEditor=__webpack_require__(53);var isFunction=__webpack_require__(65);var checkAndCallOnEditor=function checkAndCallOnEditor(ctx,fn){for(var _len=arguments.length,args=Array(_len > 2?_len - 2:0),_key=2;_key < _len;_key++) {args[_key - 2] = arguments[_key];}var _ctx$getEditor;return isFunction(ctx.getEditor()[fn])?(_ctx$getEditor = ctx.getEditor())[fn].apply(_ctx$getEditor,args):false;};var EditorContainer=React.createClass({displayName:'EditorContainer',mixins:[keyboardHandlerMixin],propTypes:{rowData:React.PropTypes.object.isRequired,cellMetaData:React.PropTypes.shape({selected:React.PropTypes.object.isRequired,copied:React.PropTypes.object,dragged:React.PropTypes.object,onCellClick:React.PropTypes.func,onCellDoubleClick:React.PropTypes.func}).isRequired,column:React.PropTypes.object.isRequired,height:React.PropTypes.number.isRequired},changeCommitted:false,getInitialState:function getInitialState(){return {isInvalid:false};},componentDidMount:function componentDidMount(){checkAndCallOnEditor(this,'editorWillMount',this.props.cellMetaData);},createEditor:function createEditor(){var _this=this;var customEditor=this.props.column.editor;var editorProps={ref:function ref(c){return _this.editor = c;},column:this.props.column,value:this.getInitialValue(),onCommit:this.commit,rowData:this.props.rowData,height:this.props.height};if(customEditor){if(React.isValidElement(customEditor))return React.cloneElement(customEditor,editorProps);else if(typeof customEditor === 'function')return customEditor(editorProps);}return React.createElement(SimpleTextEditor,editorProps);},onPressEnter:function onPressEnter(){if(!this.editorIsSelectOpen()){this.commit({key:'Enter'});}},onPressTab:function onPressTab(){this.commit({key:'Tab'});},onPressEscape:function onPressEscape(e){if(!this.editorIsSelectOpen()){this.props.cellMetaData.onCommitCancel();}else { // prevent event from bubbling if editor has results to select
	e.stopPropagation();}},onPressArrowDown:function onPressArrowDown(e){if(this.editorHasResults()){ //dont want to propogate as that then moves us round the grid
	e.stopPropagation();}else {this.commit(e);}},onPressArrowUp:function onPressArrowUp(e){if(this.editorHasResults()){ //dont want to propogate as that then moves us round the grid
	e.stopPropagation();}else {this.commit(e);}},onPressArrowLeft:function onPressArrowLeft(e){ //prevent event propogation. this disables left cell navigation
	if(!this.isCaretAtBeginningOfInput()){e.stopPropagation();}else {this.commit(e);}},onPressArrowRight:function onPressArrowRight(e){ //prevent event propogation. this disables right cell navigation
	if(!this.isCaretAtEndOfInput()){e.stopPropagation();}else {this.commit(e);}},shouldPreventKeyDown:function shouldPreventKeyDown(e){return checkAndCallOnEditor(this,'shouldPreventKeyDown',e);},editorHasResults:function editorHasResults(){return checkAndCallOnEditor(this,'hasResults');},editorIsSelectOpen:function editorIsSelectOpen(){return checkAndCallOnEditor(this,'isSelectOpen');},getEditor:function getEditor(){return this.editor;},commit:function commit(args){var opts=args || {},editor=this.getEditor(),updated;if(editor.getValue)updated = editor.getValue();if(this.isNewValueValid(updated)){var cellKey=this.props.column.key;this.props.cellMetaData.onCommit({cellKey:cellKey,updated:updated,rowIdx:this.props.rowIdx,key:opts.key});}this.changeCommitted = true;},isNewValueValid:function isNewValueValid(value){if(isFunction(this.getEditor().validate)){var isValid=checkAndCallOnEditor(this,'validate',value);this.setState({isInvalid:!isValid});return isValid;}else {return true;}},getInputNode:function getInputNode(){return this.getEditor().getInputNode && this.getEditor().getInputNode();},getInitialValue:function getInitialValue(){var selected=this.props.cellMetaData.selected;var keyCode=selected.initialKeyCode;if(!keyCode || keyCode === 'Enter'){return this.props.value;}else {return '';}},getContainerClass:function getContainerClass(){return joinClasses({'has-error':this.state.isInvalid === true});},renderStatusIcon:function renderStatusIcon(){if(this.state.isInvalid === true){return React.createElement('span',{className:'glyphicon glyphicon-remove form-control-feedback'});}},render:function render(){return React.createElement('div',{className:this.getContainerClass(),onKeyDown:this.onKeyDown},this.createEditor(),this.renderStatusIcon());},isCaretAtBeginningOfInput:function isCaretAtBeginningOfInput(){var inputNode=this.getInputNode();if(!isTextInputElement(inputNode))return true;return inputNode.selectionStart === inputNode.selectionEnd && inputNode.selectionStart === 0;},isCaretAtEndOfInput:function isCaretAtEndOfInput(){var inputNode=this.getInputNode();if(!isTextInputElement(inputNode))return true;return inputNode.selectionStart === (inputNode.value || '').length;},componentWillUnmount:function componentWillUnmount(){if(!this.changeCommitted && !this.hasEscapeBeenPressed()){this.commit({key:'Enter'});}},hasEscapeBeenPressed:function hasEscapeBeenPressed(){var pressed=false;var escapeKey=27;if(window.event){if(window.event.keyCode === escapeKey){pressed = true;}else if(window.event.which === escapeKey){pressed = true;}}return pressed;}});module.exports = EditorContainer; /***/}, /* 51 */function(module,exports){ /**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule isTextInputElement
		 */'use strict'; /**
		 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
		 */var supportedInputTypes={'color':true,'date':true,'datetime':true,'datetime-local':true,'email':true,'month':true,'number':true,'password':true,'range':true,'search':true,'tel':true,'text':true,'time':true,'url':true,'week':true};function isTextInputElement(elem){var nodeName=elem && elem.nodeName && elem.nodeName.toLowerCase();return nodeName && (nodeName === 'input' && supportedInputTypes[elem.type] || nodeName === 'textarea');}module.exports = isTextInputElement; /***/}, /* 52 */function(module,exports){'use strict';var KeyboardHandlerMixin={onKeyDown:function onKeyDown(e){if(!this.shouldPreventKeyDown || !this.shouldPreventKeyDown(e)){if(this.isCtrlKeyHeldDown(e)){this.checkAndCall('onPressKeyWithCtrl',e);}else if(this.isKeyExplicitlyHandled(e.key)){ //break up individual keyPress events to have their own specific callbacks
	//this allows multiple mixins to listen to onKeyDown events and somewhat reduces methodName clashing
	var callBack='onPress' + e.key;this.checkAndCall(callBack,e);}else if(this.isKeyPrintable(e.keyCode)){this.checkAndCall('onPressChar',e);}}}, //taken from http://stackoverflow.com/questions/12467240/determine-if-javascript-e-keycode-is-a-printable-non-control-character
	isKeyPrintable:function isKeyPrintable(keycode){var valid=keycode > 47 && keycode < 58 ||  // number keys
	keycode == 32 || keycode == 13 ||  // spacebar & return key(s) (if you want to allow carriage returns)
	keycode > 64 && keycode < 91 ||  // letter keys
	keycode > 95 && keycode < 112 ||  // numpad keys
	keycode > 185 && keycode < 193 ||  // ;=,-./` (in order)
	keycode > 218 && keycode < 223; // [\]' (in order)
	return valid;},isKeyExplicitlyHandled:function isKeyExplicitlyHandled(key){return typeof this['onPress' + key] === 'function';},isCtrlKeyHeldDown:function isCtrlKeyHeldDown(e){return e.ctrlKey === true && e.key !== 'Control';},checkAndCall:function checkAndCall(methodName,args){if(typeof this[methodName] === 'function'){this[methodName](args);}}};module.exports = KeyboardHandlerMixin; /***/}, /* 53 */function(module,exports,__webpack_require__){'use strict';var _inherits=__webpack_require__(54)['default'];var _classCallCheck=__webpack_require__(63)['default'];var React=__webpack_require__(18);var EditorBase=__webpack_require__(64);var SimpleTextEditor=(function(_EditorBase){_inherits(SimpleTextEditor,_EditorBase);function SimpleTextEditor(){_classCallCheck(this,SimpleTextEditor);_EditorBase.apply(this,arguments);}SimpleTextEditor.prototype.render = function render(){return React.createElement('input',{ref:'input',type:'text',className:'form-control',onBlur:this.props.onCommit,defaultValue:this.props.value});};return SimpleTextEditor;})(EditorBase);module.exports = SimpleTextEditor; /***/}, /* 54 */function(module,exports,__webpack_require__){"use strict";var _Object$create=__webpack_require__(55)["default"];var _Object$setPrototypeOf=__webpack_require__(57)["default"];exports["default"] = function(subClass,superClass){if(typeof superClass !== "function" && superClass !== null){throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = _Object$create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)_Object$setPrototypeOf?_Object$setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;};exports.__esModule = true; /***/}, /* 55 */function(module,exports,__webpack_require__){module.exports = {"default":__webpack_require__(56),__esModule:true}; /***/}, /* 56 */function(module,exports,__webpack_require__){var $=__webpack_require__(12);module.exports = function create(P,D){return $.create(P,D);}; /***/}, /* 57 */function(module,exports,__webpack_require__){module.exports = {"default":__webpack_require__(58),__esModule:true}; /***/}, /* 58 */function(module,exports,__webpack_require__){__webpack_require__(59);module.exports = __webpack_require__(8).Object.setPrototypeOf; /***/}, /* 59 */function(module,exports,__webpack_require__){ // 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export=__webpack_require__(6);$export($export.S,'Object',{setPrototypeOf:__webpack_require__(60).set}); /***/}, /* 60 */function(module,exports,__webpack_require__){ // Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */var getDesc=__webpack_require__(12).getDesc,isObject=__webpack_require__(61),anObject=__webpack_require__(62);var check=function check(O,proto){anObject(O);if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");};module.exports = {set:_Object$setPrototypeOf2 || ('__proto__' in {}? // eslint-disable-line
	(function(test,buggy,set){try{set = __webpack_require__(9)(Function.call,getDesc(Object.prototype,'__proto__').set,2);set(test,[]);buggy = !(test instanceof Array);}catch(e) {buggy = true;}return function setPrototypeOf(O,proto){check(O,proto);if(buggy)O.__proto__ = proto;else set(O,proto);return O;};})({},false):undefined),check:check}; /***/}, /* 61 */function(module,exports){module.exports = function(it){return typeof it === 'object'?it !== null:typeof it === 'function';}; /***/}, /* 62 */function(module,exports,__webpack_require__){var isObject=__webpack_require__(61);module.exports = function(it){if(!isObject(it))throw TypeError(it + ' is not an object!');return it;}; /***/}, /* 63 */function(module,exports){"use strict";exports["default"] = function(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}};exports.__esModule = true; /***/}, /* 64 */function(module,exports,__webpack_require__){'use strict';var _inherits=__webpack_require__(54)['default'];var _classCallCheck=__webpack_require__(63)['default'];var React=__webpack_require__(18);var ReactDOM=__webpack_require__(19);var ExcelColumn=__webpack_require__(40);var EditorBase=(function(_React$Component){_inherits(EditorBase,_React$Component);function EditorBase(){_classCallCheck(this,EditorBase);_React$Component.apply(this,arguments);}EditorBase.prototype.getStyle = function getStyle(){return {width:'100%',height:this.props.height};};EditorBase.prototype.getValue = function getValue(){var updated={};updated[this.props.column.key] = this.getInputNode().value;return updated;};EditorBase.prototype.getInputNode = function getInputNode(){var domNode=ReactDOM.findDOMNode(this);if(domNode.tagName === 'INPUT'){return domNode;}else {return domNode.querySelector('input:not([type=hidden])');}};EditorBase.prototype.editorWillMount = function editorWillMount(){var inputNode=this.getInputNode();if(typeof inputNode.focus === 'function')inputNode.focus();};return EditorBase;})(React.Component);EditorBase.propTypes = {value:React.PropTypes.any,column:React.PropTypes.shape(ExcelColumn).isRequired,onCommit:React.PropTypes.func.isRequired};module.exports = EditorBase; /***/}, /* 65 */function(module,exports){"use strict";var isFunction=function isFunction(functionToCheck){var getType={};return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';};module.exports = isFunction; /***/}, /* 66 */function(module,exports,__webpack_require__){'use strict';var PropTypes=__webpack_require__(18).PropTypes;module.exports = {selected:PropTypes.object.isRequired,copied:PropTypes.object,dragged:PropTypes.object,onCellClick:PropTypes.func.isRequired}; /***/}, /* 67 */function(module,exports,__webpack_require__){ /* TODO mixins */'use strict';var React=__webpack_require__(18);var ReactDOM=__webpack_require__(19);var DOMMetrics=__webpack_require__(68);var getScrollbarSize=__webpack_require__(32);var min=Math.min;var max=Math.max;var floor=Math.floor;var ceil=Math.ceil;module.exports = {mixins:[DOMMetrics.MetricsMixin],DOMMetrics:{viewportHeight:function viewportHeight(){return ReactDOM.findDOMNode(this).offsetHeight;}},propTypes:{rowHeight:React.PropTypes.number,rowsCount:React.PropTypes.number.isRequired},getDefaultProps:function getDefaultProps(){return {rowHeight:30};},getInitialState:function getInitialState(){return this.getGridState(this.props);},getGridState:function getGridState(props){var renderedRowsCount=ceil((props.minHeight - props.rowHeight) / props.rowHeight);var totalRowCount=min(renderedRowsCount * 2,props.rowsCount);return {displayStart:0,displayEnd:totalRowCount,height:props.minHeight,scrollTop:0,scrollLeft:0};},scrollToCell:function scrollToCell(_ref){var x=_ref[0];var y=_ref[1];var props=arguments.length <= 1 || arguments[1] === undefined?this.props:arguments[1];var rowHeight=props.rowHeight;var rowsCount=props.rowsCount;var columnMetrics=props.columnMetrics;var columns=columnMetrics.columns;var width=columnMetrics.totalWidth;var _state=this.state;var height=_state.height;var scrollTop=_state.scrollTop;var scrollLeft=_state.scrollLeft;var cellTop=Math.min(y,rowsCount) * rowHeight,scrollBar=columnMetrics.width > columnMetrics.totalWidth?getScrollbarSize():0;cellTop = cellTop < scrollTop // moving up
	?cellTop:cellTop + rowHeight > scrollTop + height // moving down
	?cellTop + rowHeight - height + scrollBar:null;var column=columns[x];var cellLeft=column.locked?0:column.left;var lockedLeft=columns.filter(function(c){return c.locked;}).reduce(function(left,c){return left + c.width;},0);cellLeft = cellLeft < scrollLeft + lockedLeft // moving left
	?Math.max(0,cellLeft - lockedLeft):cellLeft + column.width > scrollLeft + width //moving right
	?cellLeft + column.width - width:null;return {scrollTop:cellTop,scrollLeft:cellLeft};},updateScroll:function updateScroll(scrollTop,scrollLeft,height,rowHeight,length){var renderedRowsCount=ceil(height / rowHeight);var visibleStart=floor(scrollTop / rowHeight);var visibleEnd=min(visibleStart + renderedRowsCount,length);var displayStart=max(0,visibleStart - renderedRowsCount * 2);var displayEnd=min(visibleStart + renderedRowsCount * 2,length);var nextScrollState={visibleStart:visibleStart,visibleEnd:visibleEnd,displayStart:displayStart,displayEnd:displayEnd,height:height,scrollTop:scrollTop,scrollLeft:scrollLeft};this.setState(nextScrollState);},metricsUpdated:function metricsUpdated(){var height=this.DOMMetrics.viewportHeight();if(height){this.updateScroll(this.state.scrollTop,this.state.scrollLeft,height,this.props.rowHeight,this.props.rowsCount);}},componentWillReceiveProps:function componentWillReceiveProps(nextProps){if(this.props.rowHeight !== nextProps.rowHeight || this.props.minHeight !== nextProps.minHeight){this.setState(this.getGridState(nextProps));}else if(this.props.rowsCount !== nextProps.rowsCount){this.updateScroll(this.state.scrollTop,this.state.scrollLeft,this.state.height,nextProps.rowHeight,nextProps.rowsCount);}}}; /***/}, /* 68 */function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(18);var emptyFunction=__webpack_require__(43);var shallowCloneObject=__webpack_require__(28);var contextTypes={metricsComputator:React.PropTypes.object};var MetricsComputatorMixin={childContextTypes:contextTypes,getChildContext:function getChildContext(){return {metricsComputator:this};},getMetricImpl:function getMetricImpl(name){return this._DOMMetrics.metrics[name].value;},registerMetricsImpl:function registerMetricsImpl(component,metrics){var getters={};var s=this._DOMMetrics;for(var name in metrics) {if(s.metrics[name] !== undefined){throw new Error('DOM metric ' + name + ' is already defined');}s.metrics[name] = {component:component,computator:metrics[name].bind(component)};getters[name] = this.getMetricImpl.bind(null,name);}if(s.components.indexOf(component) === -1){s.components.push(component);}return getters;},unregisterMetricsFor:function unregisterMetricsFor(component){var s=this._DOMMetrics;var idx=s.components.indexOf(component);if(idx > -1){s.components.splice(idx,1);var name;var metricsToDelete={};for(name in s.metrics) {if(s.metrics[name].component === component){metricsToDelete[name] = true;}}for(name in metricsToDelete) {delete s.metrics[name];}}},updateMetrics:function updateMetrics(){var s=this._DOMMetrics;var needUpdate=false;for(var name in s.metrics) {var newMetric=s.metrics[name].computator();if(newMetric !== s.metrics[name].value){needUpdate = true;}s.metrics[name].value = newMetric;}if(needUpdate){for(var i=0,len=s.components.length;i < len;i++) {if(s.components[i].metricsUpdated){s.components[i].metricsUpdated();}}}},componentWillMount:function componentWillMount(){this._DOMMetrics = {metrics:{},components:[]};},componentDidMount:function componentDidMount(){if(window.addEventListener){window.addEventListener('resize',this.updateMetrics);}else {window.attachEvent('resize',this.updateMetrics);}this.updateMetrics();},componentWillUnmount:function componentWillUnmount(){window.removeEventListener('resize',this.updateMetrics);}};var MetricsMixin={contextTypes:contextTypes,componentWillMount:function componentWillMount(){if(this.DOMMetrics){this._DOMMetricsDefs = shallowCloneObject(this.DOMMetrics);this.DOMMetrics = {};for(var name in this._DOMMetricsDefs) {this.DOMMetrics[name] = emptyFunction;}}},componentDidMount:function componentDidMount(){if(this.DOMMetrics){this.DOMMetrics = this.registerMetrics(this._DOMMetricsDefs);}},componentWillUnmount:function componentWillUnmount(){if(!this.registerMetricsImpl){return this.context.metricsComputator.unregisterMetricsFor(this);}if(this.hasOwnProperty('DOMMetrics')){delete this.DOMMetrics;}},registerMetrics:function registerMetrics(metrics){if(this.registerMetricsImpl){return this.registerMetricsImpl(this,metrics);}else {return this.context.metricsComputator.registerMetricsImpl(this,metrics);}},getMetric:function getMetric(name){if(this.getMetricImpl){return this.getMetricImpl(name);}else {return this.context.metricsComputator.getMetricImpl(name);}}};module.exports = {MetricsComputatorMixin:MetricsComputatorMixin,MetricsMixin:MetricsMixin}; /***/}, /* 69 */function(module,exports){ /* TODO mixins */"use strict";module.exports = {componentDidMount:function componentDidMount(){this._scrollLeft = this.refs.viewport?this.refs.viewport.getScroll().scrollLeft:0;this._onScroll();},componentDidUpdate:function componentDidUpdate(){this._onScroll();},componentWillMount:function componentWillMount(){this._scrollLeft = undefined;},componentWillUnmount:function componentWillUnmount(){this._scrollLeft = undefined;},onScroll:function onScroll(props){if(this._scrollLeft !== props.scrollLeft){this._scrollLeft = props.scrollLeft;this._onScroll();}},_onScroll:function _onScroll(){if(this._scrollLeft !== undefined){this.refs.header.setScrollLeft(this._scrollLeft);if(this.refs.viewport){this.refs.viewport.setScrollLeft(this._scrollLeft);}}}}; /***/}, /* 70 */function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(18);var CheckboxEditor=React.createClass({displayName:'CheckboxEditor',PropTypes:{value:React.PropTypes.bool.isRequired,rowIdx:React.PropTypes.number.isRequired,column:React.PropTypes.shape({key:React.PropTypes.string.isRequired,onCellChange:React.PropTypes.func.isRequired}).isRequired},render:function render(){var checked=this.props.value != null?this.props.value:false;return React.createElement('input',{className:'react-grid-CheckBox',type:'checkbox',checked:checked,onClick:this.handleChange});},handleChange:function handleChange(e){this.props.column.onCellChange(this.props.rowIdx,this.props.column.key,e);}});module.exports = CheckboxEditor; /***/}, /* 71 */function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(18);var ExcelColumn=__webpack_require__(40);var FilterableHeaderCell=React.createClass({displayName:'FilterableHeaderCell',propTypes:{onChange:React.PropTypes.func.isRequired,column:React.PropTypes.shape(ExcelColumn).isRequired},getInitialState:function getInitialState(){return {filterTerm:''};},handleChange:function handleChange(e){var val=e.target.value;this.setState({filterTerm:val});this.props.onChange({filterTerm:val,columnKey:this.props.column.key});},render:function render(){return React.createElement('div',null,React.createElement('div',{className:'form-group'},this.renderInput()));},renderInput:function renderInput(){if(this.props.column.filterable === false){return React.createElement('span',null);}else {var input_key='header-filter-' + this.props.column.key;return React.createElement('input',{key:input_key,type:'text',className:'form-control input-sm',placeholder:'Search',value:this.state.filterTerm,onChange:this.handleChange});}}});module.exports = FilterableHeaderCell; /***/}, /* 72 */function(module,exports,__webpack_require__){ /* TODO mixins */'use strict';var _classCallCheck=__webpack_require__(63)['default'];var ColumnMetrics=__webpack_require__(29);var DOMMetrics=__webpack_require__(68);var PropTypes=__webpack_require__(18).PropTypes;var ColumnUtils=__webpack_require__(31);var ReactDOM=__webpack_require__(19);var Column=function Column(){_classCallCheck(this,Column);};module.exports = {mixins:[DOMMetrics.MetricsMixin],propTypes:{columns:PropTypes.arrayOf(Column),minColumnWidth:PropTypes.number,columnEquality:PropTypes.func},DOMMetrics:{gridWidth:function gridWidth(){return ReactDOM.findDOMNode(this).parentElement.offsetWidth;}},getDefaultProps:function getDefaultProps(){return {minColumnWidth:80,columnEquality:ColumnMetrics.sameColumn};},componentWillMount:function componentWillMount(){this._mounted = true;},componentWillReceiveProps:function componentWillReceiveProps(nextProps){if(nextProps.columns){if(!ColumnMetrics.sameColumns(this.props.columns,nextProps.columns,this.props.columnEquality) || nextProps.minWidth !== this.props.minWidth){var columnMetrics=this.createColumnMetrics(nextProps);this.setState({columnMetrics:columnMetrics});}}},getTotalWidth:function getTotalWidth(){var totalWidth=0; // avoid the warning about checking in render
	if(this._mounted){totalWidth = this.DOMMetrics.gridWidth();}else {totalWidth = ColumnUtils.getSize(this.props.columns) * this.props.minColumnWidth;}return totalWidth;},getColumnMetricsType:function getColumnMetricsType(metrics){var totalWidth=metrics.totalWidth || this.getTotalWidth();var currentMetrics={columns:metrics.columns,totalWidth:totalWidth,minColumnWidth:metrics.minColumnWidth};var updatedMetrics=ColumnMetrics.recalculate(currentMetrics);return updatedMetrics;},getColumn:function getColumn(idx){var columns=this.state.columnMetrics.columns;if(Array.isArray(columns)){return columns[idx];}else if(typeof Immutable !== 'undefined'){return columns.get(idx);}},getSize:function getSize(){var columns=this.state.columnMetrics.columns;if(Array.isArray(columns)){return columns.length;}else if(typeof Immutable !== 'undefined'){return columns.size;}},metricsUpdated:function metricsUpdated(){var columnMetrics=this.createColumnMetrics();this.setState({columnMetrics:columnMetrics});},createColumnMetrics:function createColumnMetrics(){var props=arguments.length <= 0 || arguments[0] === undefined?this.props:arguments[0];var gridColumns=this.setupGridColumns(props);return this.getColumnMetricsType({columns:gridColumns,minColumnWidth:props.minColumnWidth,totalWidth:props.minWidth});},onColumnResize:function onColumnResize(index,width){var columnMetrics=ColumnMetrics.resizeColumn(this.state.columnMetrics,index,width);this.setState({columnMetrics:columnMetrics});}}; /***/}, /* 73 */function(module,exports){'use strict';var RowUtils={get:function get(row,property){if(typeof row.get === 'function'){return row.get(property);}else {return row[property];}}};module.exports = RowUtils; /***/} /******/]));});; /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(70), __esModule: true };

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(71);
	module.exports = __webpack_require__(74).Object.assign;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(72);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(77)});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(73)
	  , core      = __webpack_require__(74)
	  , ctx       = __webpack_require__(75)
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
/* 73 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 74 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(76);
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
/* 76 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(78)
	  , toObject = __webpack_require__(79)
	  , IObject  = __webpack_require__(81);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(83)(function(){
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
/* 78 */
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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(80);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 80 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(82);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 82 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(86);
	__webpack_require__(104);
	module.exports = __webpack_require__(74).Symbol;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(78)
	  , global         = __webpack_require__(73)
	  , has            = __webpack_require__(87)
	  , DESCRIPTORS    = __webpack_require__(88)
	  , $export        = __webpack_require__(72)
	  , redefine       = __webpack_require__(89)
	  , $fails         = __webpack_require__(83)
	  , shared         = __webpack_require__(92)
	  , setToStringTag = __webpack_require__(93)
	  , uid            = __webpack_require__(95)
	  , wks            = __webpack_require__(94)
	  , keyOf          = __webpack_require__(96)
	  , $names         = __webpack_require__(98)
	  , enumKeys       = __webpack_require__(99)
	  , isArray        = __webpack_require__(100)
	  , anObject       = __webpack_require__(101)
	  , toIObject      = __webpack_require__(97)
	  , createDesc     = __webpack_require__(91)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });

	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };

	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(103)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});

	setter = true;

	$export($export.G + $export.W, {Symbol: $Symbol});

	$export($export.S, 'Symbol', symbolStatics);

	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 87 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(83)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(90);

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(78)
	  , createDesc = __webpack_require__(91);
	module.exports = __webpack_require__(88) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(73)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(78).setDesc
	  , has = __webpack_require__(87)
	  , TAG = __webpack_require__(94)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(92)('wks')
	  , uid    = __webpack_require__(95)
	  , Symbol = __webpack_require__(73).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 95 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(78)
	  , toIObject = __webpack_require__(97);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(81)
	  , defined = __webpack_require__(80);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(97)
	  , getNames  = __webpack_require__(78).getNames
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(78);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(82);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(102);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 104 */
/***/ function(module, exports) {

	

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(107);
	module.exports = __webpack_require__(74).Object.keys;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(79);

	__webpack_require__(108)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(72)
	  , core    = __webpack_require__(74)
	  , fails   = __webpack_require__(83);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(111);
	module.exports = __webpack_require__(74).Object.setPrototypeOf;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(72);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(112).set});

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(78).getDesc
	  , isObject = __webpack_require__(102)
	  , anObject = __webpack_require__(101);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(75)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
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
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ReactGrid = __webpack_require__(68);
	var QuickStartDescription = __webpack_require__(63);
	var ReactPlayground = __webpack_require__(66);

	var FixedExample = '\n\n//helper to generate a random date\nfunction randomDate(start, end) {\n  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();\n};\n\nvar _rows = [];\nfor (var i = 1; i < 1000; i++) {\n  _rows.push({\n    id: i,\n    task: \'Task \' + i,\n    complete: Math.min(100, Math.round(Math.random() * 110)),\n    priority : [\'Critical\', \'High\', \'Medium\', \'Low\'][Math.floor((Math.random() * 3) + 1)],\n    issueType : [\'Bug\', \'Improvement\', \'Epic\', \'Story\'][Math.floor((Math.random() * 3) + 1)],\n    startDate: randomDate(new Date(2015, 3, 1), new Date()),\n    completeDate: randomDate(new Date(), new Date(2016, 0, 1))\n  });\n};\n\n//function to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n\n//Columns definition\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\',\n  locked : true\n},\n{\n  key: \'task\',\n  name: \'Title\',\n  width: 200\n},\n{\n  key: \'priority\',\n  name: \'Priority\',\n  width: 200\n},\n{\n  key: \'issueType\',\n  name: \'Issue Type\',\n  width: 200\n},\n{\n  key: \'complete\',\n  name: \'% Complete\',\n  width: 200\n},\n{\n  key: \'startDate\',\n  name: \'Start Date\',\n  width: 200\n},\n{\n  key: \'completeDate\',\n  name: \'Expected Complete\',\n  width: 200\n},\n{\n  key: \'completeDate\',\n  name: \'Expected Complete\',\n  width: 200\n}\n]\n\n\nReactDOM.render(<ReactDataGrid\n  columns={columns}\n  rowGetter={rowGetter}\n  rowsCount={_rows.length}\n  minHeight={500} />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Frozen Columns Example'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'To make a given column frozen, set ',
	        React.createElement(
	          'code',
	          null,
	          'column.locked = true'
	        ),
	        '. In this example, the ID columns has been frozen and will remain in position as you scroll horizontally'
	      ),
	      React.createElement(ReactPlayground, { codeText: FixedExample })
	    );
	  }

	});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ReactGrid = __webpack_require__(68);
	var QuickStartDescription = __webpack_require__(63);
	var ReactPlayground = __webpack_require__(66);

	var EditableExample = '\n//helper to generate a random date\nfunction randomDate(start, end) {\n  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();\n}\n\n//helper to create a fixed number of rows\nfunction createRows(numberOfRows){\n  var _rows = [];\n  for (var i = 1; i < numberOfRows; i++) {\n    _rows.push({\n      id: i,\n      task: \'Task \' + i,\n      complete: Math.min(100, Math.round(Math.random() * 110)),\n      priority : [\'Critical\', \'High\', \'Medium\', \'Low\'][Math.floor((Math.random() * 3) + 1)],\n      issueType : [\'Bug\', \'Improvement\', \'Epic\', \'Story\'][Math.floor((Math.random() * 3) + 1)],\n      startDate: randomDate(new Date(2015, 3, 1), new Date()),\n      completeDate: randomDate(new Date(), new Date(2016, 0, 1))\n    });\n  }\n  return _rows;\n}\n\n//function to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n//Columns definition\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\',\n  width: 80\n},\n{\n  key: \'task\',\n  name: \'Title\',\n  editable : true\n},\n{\n  key: \'priority\',\n  name: \'Priority\',\n  editable : true\n},\n{\n  key: \'issueType\',\n  name: \'Issue Type\',\n  editable : true\n},\n{\n  key: \'complete\',\n  name: \'% Complete\',\n  editable : true\n},\n{\n  key: \'startDate\',\n  name: \'Start Date\',\n  editable : true\n},\n{\n  key: \'completeDate\',\n  name: \'Expected Complete\',\n  editable : true\n}\n]\n\n\nvar Example = React.createClass({\n\n  getInitialState : function(){\n    return {rows : createRows(1000)}\n  },\n\n  rowGetter : function(rowIdx){\n    return this.state.rows[rowIdx]\n  },\n\n  handleRowUpdated : function(e){\n    //merge updated row with current row and rerender by setting state\n    var rows = this.state.rows;\n    Object.assign(rows[e.rowIdx], e.updated);\n    this.setState({rows:rows});\n  },\n\n  render:function(){\n    return(\n      <ReactDataGrid\n      enableCellSelect={true}\n      columns={columns}\n      rowGetter={this.rowGetter}\n      rowsCount={this.state.rows.length}\n      minHeight={500}\n      onRowUpdated={this.handleRowUpdated} />\n    )\n  }\n\n});\n\nReactDOM.render(<Example />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Editable Example'
	      ),
	      React.createElement(ReactPlayground, { codeText: EditableExample })
	    );
	  }

	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var QuickStartDescription = __webpack_require__(63);
	var ReactPlayground = __webpack_require__(66);

	var SimpleExample = '\n//helper to generate a random date\nfunction randomDate(start, end) {\n  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();\n}\n\n//generate a fixed number of rows and set their properties\nvar _rows = [];\nfor (var i = 1; i < 100; i++) {\n  _rows.push({\n    id: i,\n    task: \'Task \' + i,\n    complete: Math.min(100, Math.round(Math.random() * 110)),\n    priority : [\'Critical\', \'High\', \'Medium\', \'Low\'][Math.floor((Math.random() * 3) + 1)],\n    issueType : [\'Bug\', \'Improvement\', \'Epic\', \'Story\'][Math.floor((Math.random() * 3) + 1)],\n    startDate: randomDate(new Date(2015, 3, 1), new Date()),\n    completeDate: randomDate(new Date(), new Date(2016, 0, 1))\n  });\n}\n\n\n//function to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n//Custom Formatter component\nvar PercentCompleteFormatter = React.createClass({\n  render:function(){\n    var percentComplete = this.props.value + \'%\';\n    return (\n      <div className="progress" style={{marginTop:\'20px\'}}>\n        <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:percentComplete}}>\n        {percentComplete}\n      </div>\n      </div>);\n    }\n  });\n\n//Columns definition\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\',\n  width: 80\n},\n{\n  key: \'task\',\n  name: \'Title\'\n},\n{\n  key: \'priority\',\n  name: \'Priority\'\n},\n{\n  key: \'issueType\',\n  name: \'Issue Type\'\n},\n{\n  key: \'complete\',\n  name: \'% Complete\',\n  formatter : PercentCompleteFormatter\n},\n{\n  key: \'startDate\',\n  name: \'Start Date\'\n},\n{\n  key: \'completeDate\',\n  name: \'Expected Complete\'\n}\n]\n\nvar Example = React.createClass({\n  render: function() {\n    return  (<ReactDataGrid\n    columns={columns}\n    rowGetter={rowGetter}\n    rowsCount={_rows.length}\n    minHeight={500} />);\n  }\n});\nReactDOM.render(<Example />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Custom Formatter Example'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'Its possible to create your own formatters for a given column by setting its ',
	        React.createElement(
	          'code',
	          null,
	          'formatter'
	        ),
	        ' property. Here a React component is used to format the %complete column. A custom formatter will always receive a ',
	        React.createElement(
	          'code',
	          null,
	          'value'
	        ),
	        ' prop, the value of the cell and this can be used however needed. Here we render a progress bar based on the ',
	        React.createElement(
	          'code',
	          null,
	          'props.value'
	        )
	      ),
	      React.createElement(ReactPlayground, { codeText: SimpleExample })
	    );
	  }

	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var QuickStartDescription = __webpack_require__(63);
	var ReactPlayground = __webpack_require__(66);

	var EditableExample = '\n\n//options for priorities autocomplete editor\nvar priorities = [{id:0, title : \'Critical\'}, {id:1, title : \'High\'}, {id:2, title : \'Medium\'}, {id:3, title : \'Low\'}]\nvar AutoCompleteEditor = window.AutoCompleteEditor;\nvar PrioritiesEditor = <AutoCompleteEditor options={priorities}/>\n\n//options for IssueType dropdown editor\nvar issueTypes = [\'Bug\', \'Improvement\', \'Epic\', \'Story\'];\nvar DropDownEditor = ReactDataGrid.Editors.DropDownEditor;\nvar IssueTypesEditor = <DropDownEditor options={issueTypes}/>\n\n//helper to generate a random date\nfunction randomDate(start, end) {\n  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();\n}\n\n//helper to create a fixed number of rows\nfunction createRows(numberOfRows){\n  var _rows = [];\n  for (var i = 1; i < numberOfRows; i++) {\n    _rows.push({\n      id: i,\n      task: \'Task \' + i,\n      complete: Math.min(100, Math.round(Math.random() * 110)),\n      priority : [\'Critical\', \'High\', \'Medium\', \'Low\'][Math.floor((Math.random() * 3) + 1)],\n      issueType : issueTypes[Math.floor((Math.random() * 3) + 1)],\n      startDate: randomDate(new Date(2015, 3, 1), new Date()),\n      completeDate: randomDate(new Date(), new Date(2016, 0, 1))\n    });\n  }\n  return _rows;\n}\n\n//function to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n//Columns definition\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\',\n  width: 80\n},\n{\n  key: \'task\',\n  name: \'Title\',\n  editable : true\n},\n{\n  key : \'priority\',\n  name : \'Priority\',\n  editor : PrioritiesEditor\n},\n{\n  key : \'issueType\',\n  name : \'Issue Type\',\n  editor : IssueTypesEditor\n}\n]\n\n\nvar Example = React.createClass({\n\n  getInitialState : function(){\n    return {rows : createRows(1000)}\n  },\n\n  rowGetter : function(rowIdx){\n    return this.state.rows[rowIdx]\n  },\n\n  handleRowUpdated : function(e){\n    //merge updated row with current row and rerender by setting state\n    var rows = this.state.rows;\n    Object.assign(rows[e.rowIdx], e.updated);\n    this.setState({rows:rows});\n  },\n\n  render:function(){\n    return(\n      <ReactDataGrid\n      enableCellSelect={true}\n      columns={columns}\n      rowGetter={this.rowGetter}\n      rowsCount={this.state.rows.length}\n      minHeight={500}\n      onRowUpdated={this.handleRowUpdated} />\n    )\n  }\n\n});\n\nReactDOM.render(<Example />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Built-In Cell Editor Example'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'This example uses the built in ',
	        React.createElement(
	          'strong',
	          null,
	          'Autocomplete'
	        ),
	        ' editor for the priorities column and the ',
	        React.createElement(
	          'strong',
	          null,
	          'DropdownEditor'
	        ),
	        ' for the IssueType column. ',
	        React.createElement(
	          'strong',
	          null,
	          'You must be using the ',
	          React.createElement(
	            'code',
	            null,
	            'react-data-grid-with-addons.js'
	          ),
	          ' package to use the built in editors.'
	        )
	      ),
	      React.createElement(ReactPlayground, { codeText: EditableExample })
	    );
	  }

	});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ReactGrid = __webpack_require__(68);
	var QuickStartDescription = __webpack_require__(63);
	var ReactPlayground = __webpack_require__(66);

	var EditableExample = '\n//helper to generate a random date\nfunction randomDate(start, end) {\n  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();\n}\n\n//helper to create a fixed number of rows\nfunction createRows(numberOfRows){\n  var _rows = [];\n  for (var i = 1; i < numberOfRows; i++) {\n    _rows.push({\n      id: i,\n      task: \'Task \' + i,\n      complete: Math.min(100, Math.round(Math.random() * 110)),\n      priority : [\'Critical\', \'High\', \'Medium\', \'Low\'][Math.floor((Math.random() * 3) + 1)],\n      issueType : [\'Bug\', \'Improvement\', \'Epic\', \'Story\'][Math.floor((Math.random() * 3) + 1)],\n      startDate: randomDate(new Date(2015, 3, 1), new Date()),\n      completeDate: randomDate(new Date(), new Date(2016, 0, 1))\n    });\n  }\n  return _rows;\n}\n\n//function to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n//Columns definition\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\',\n  width: 80\n},\n{\n  key: \'task\',\n  name: \'Title\',\n  sortable : true\n},\n{\n  key: \'priority\',\n  name: \'Priority\',\n  sortable : true\n},\n{\n  key: \'issueType\',\n  name: \'Issue Type\',\n  sortable : true\n},\n{\n  key: \'complete\',\n  name: \'% Complete\',\n  sortable : true\n},\n{\n  key: \'startDate\',\n  name: \'Start Date\',\n  sortable : true\n},\n{\n  key: \'completeDate\',\n  name: \'Expected Complete\',\n  sortable : true\n}\n]\n\n\nvar Example = React.createClass({\n\n  getInitialState : function(){\n    var originalRows = createRows(1000);\n    var rows = originalRows.slice(0);\n    //store the original rows array, and make a copy that can be used for modifying eg.filtering, sorting\n    return {originalRows : originalRows, rows : rows};\n  },\n\n  rowGetter : function(rowIdx){\n    return this.state.rows[rowIdx];\n  },\n\n  handleGridSort : function(sortInfo){\n    let rows = this.state.originalRows.slice(0);\n\n    rows = Object.keys(sortInfo).reduce((rows, sortColumn) => {\n      let sortDirection = sortInfo[sortColumn];\n      rows.sort(function (a, b) {\n        if(sortDirection === \'ASC\'){\n          return (a[sortColumn] > b[sortColumn]) ? 1 : -1;\n        }else if(sortDirection === \'DESC\'){\n          return (a[sortColumn] < b[sortColumn]) ? 1 : -1;\n        }\n      })\n      return rows;\n    }, rows)\n\n\n    this.setState({ rows, sortInfo });\n  },\n\n  render:function(){\n    return(\n      <ReactDataGrid\n        sortInfo={this.state.sortInfo}\n        onGridSort={this.handleGridSort}\n        columns={columns}\n        rowGetter={this.rowGetter}\n        rowsCount={this.state.rows.length}\n        minHeight={500}\n        onRowUpdated={this.handleRowUpdated} />\n    )\n  }\n\n});\n\nReactDOM.render(<Example />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Sortable Columns Example'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'While ReactDataGrid doesnt not provide the ability to sort directly, it does provide hooks that allow you to provide your own sort function. This is done via the ',
	        React.createElement(
	          'code',
	          null,
	          'onGridSort'
	        ),
	        ' prop. To enable sorting for a given column, set ',
	        React.createElement(
	          'code',
	          null,
	          'column.sortable = true'
	        ),
	        ' for that column. Now when the header cell is clicked for that column, ',
	        React.createElement(
	          'code',
	          null,
	          'onGridSort'
	        ),
	        ' will be triggered passing the column name and the sort direction.'
	      ),
	      React.createElement(ReactPlayground, { codeText: EditableExample })
	    );
	  }

	});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ReactGrid = __webpack_require__(68);
	var QuickStartDescription = __webpack_require__(63);
	var ReactPlayground = __webpack_require__(66);

	var EditableExample = '\nvar Toolbar = ReactDataGrid.Toolbar;\n\n//helper to generate a random date\nfunction randomDate(start, end) {\n  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();\n}\n\n//helper to create a fixed number of rows\nfunction createRows(numberOfRows){\n  var _rows = [];\n  for (var i = 1; i < numberOfRows; i++) {\n    _rows.push({\n      id: i,\n      task: \'Task \' + i,\n      complete: Math.min(100, Math.round(Math.random() * 110)),\n      priority : [\'Critical\', \'High\', \'Medium\', \'Low\'][Math.floor((Math.random() * 3) + 1)],\n      issueType : [\'Bug\', \'Improvement\', \'Epic\', \'Story\'][Math.floor((Math.random() * 3) + 1)],\n      startDate: randomDate(new Date(2015, 3, 1), new Date()),\n      completeDate: randomDate(new Date(), new Date(2016, 0, 1))\n    });\n  }\n  return _rows;\n}\n\n//function to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n//Columns definition\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\',\n  width: 80,\n  filterable: true\n},\n{\n  key: \'task\',\n  name: \'Title\',\n  filterable: true\n},\n{\n  key: \'priority\',\n  name: \'Priority\',\n  filterable: true\n},\n{\n  key: \'issueType\',\n  name: \'Issue Type\',\n  filterable: true\n},\n{\n  key: \'complete\',\n  name: \'% Complete\',\n  filterable: true\n},\n{\n  key: \'startDate\',\n  name: \'Start Date\',\n  filterable: true\n},\n{\n  key: \'completeDate\',\n  name: \'Expected Complete\',\n  filterable: true\n}\n]\n\n\nvar Example = React.createClass({\n\n  getInitialState : function(){\n    var originalRows = createRows(1000);\n    var rows = originalRows.slice(0);\n    //store the original rows array, and make a copy that can be used for modifying eg.filtering, sorting\n    return {originalRows : originalRows, rows : rows, filters : {}};\n  },\n\n  rowGetter : function(rowIdx){\n    return this.state.rows[rowIdx];\n  },\n\n  filterRows : function(originalRows, filters) {\n    var rows = originalRows.filter(function(r){\n      var include = true;\n      for (var columnKey in filters) {\n        if(filters.hasOwnProperty(columnKey)) {\n          var rowValue = r[columnKey].toString().toLowerCase();\n          if(rowValue.indexOf(filters[columnKey].toLowerCase()) === -1) {\n            include = false;\n          }\n        }\n      }\n      return include;\n    });\n    return rows;\n  },\n\n  handleFilterChange : function(filter){\n    this.setState(function(currentState) {\n      if (filter.filterTerm) {\n        currentState.filters[filter.columnKey] = filter.filterTerm;\n      } else {\n        delete currentState.filters[filter.columnKey];\n      }\n      currentState.rows = this.filterRows(currentState.originalRows, currentState.filters);\n      return currentState;\n    });\n  },\n\n  render:function(){\n    return(\n      <ReactDataGrid\n        columns={columns}\n        rowGetter={this.rowGetter}\n        rowsCount={this.state.rows.length}\n        minHeight={500}\n        toolbar={<Toolbar enableFilter={true}/>}\n        onAddFilter={this.handleFilterChange}/>\n    )\n  }\n\n});\n\nReactDOM.render(<Example />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Filterable Columns Example'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'While ReactDataGrid doesn\'t not provide the ability to filter directly, it does provide hooks that allow you to provide your own filter function. This is done via the ',
	        React.createElement(
	          'code',
	          null,
	          'onAddFilter'
	        ),
	        ' prop. To enable filtering for a given column, set ',
	        React.createElement(
	          'code',
	          null,
	          'column.filterable = true'
	        ),
	        ' for that column. Now when the header cell has a new filter value entered for that column, ',
	        React.createElement(
	          'code',
	          null,
	          'onAddFilter'
	        ),
	        ' will be triggered passing the filter key and value.'
	      ),
	      React.createElement(ReactPlayground, { codeText: EditableExample })
	    );
	  }

	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ReactGrid = __webpack_require__(68);
	var QuickStartDescription = __webpack_require__(63);
	var ReactPlayground = __webpack_require__(66);

	var millionRowsExample = '\n//helper to generate a random date\nfunction randomDate(start, end) {\n  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();\n};\n\nvar _rows = [];\nfor (var i = 1; i < 1000000; i++) {\n  _rows.push({\n    id: i,\n    task: \'Task \' + i,\n    complete: \'a\',\n    priority : \'b\',\n    issueType : \'c\'\n  });\n}\n\n//function to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n\n//Columns definition\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\'\n\n},\n{\n  key: \'task\',\n  name: \'Title\'\n},\n{\n  key: \'priority\',\n  name: \'Priority\'\n},\n{\n  key: \'issueType\',\n  name: \'Issue Type\'\n},\n{\n  key: \'complete\',\n  name: \'% Complete\'\n}\n]\n\nReactDOM.render(<ReactDataGrid\n  columns={columns}\n  rowGetter={rowGetter}\n  rowsCount={_rows.length}\n  minHeight={500} />, mountNode);\n  ';

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'One Million Rows Example'
	      ),
	      React.createElement('p', null),
	      React.createElement(ReactPlayground, { codeText: millionRowsExample })
	    );
	  }

	});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ReactGrid = __webpack_require__(68);
	var QuickStartDescription = __webpack_require__(63);
	var ReactPlayground = __webpack_require__(66);
	var Immutable = __webpack_require__(121);

	var immutableDataExample = '\n//helper to generate a random date\nfunction randomDate(start, end) {\n  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();\n};\n\nvar _rows = [];\nvar _cols = [];\nfor(var j = 0; j < 50; j++){\n    _cols.push({key: \'col\' + j, name: \'col\' + j, width: 150, editable:true});\n};\n\nfor (var rowIdx = 1; rowIdx < 100; rowIdx++) {\n  var row = {};\n  _cols.forEach(function(c, colIdx){\n    row[c.key] = \'(\' + colIdx + \',\' + rowIdx + \')\';\n  });\n  _rows.push(row);\n}\n\nvar Example = React.createClass({\n\n  getInitialState : function(){\n    return {rows : new Immutable.fromJS(_rows), cols: new Immutable.List(_cols)}\n  },\n\n  rowGetter : function(rowIdx){\n    return this.state.rows.get(rowIdx)\n  },\n\n  handleRowUpdated : function(e){\n    //merge updated row with current row and rerender by setting state\n    var rows = this.state.rows.update(e.rowIdx, function(row){\n      return row.merge(e.updated);\n    });\n    this.setState({rows:rows});\n  },\n\n  render:function(){\n    return(\n      <ReactDataGrid\n      enableCellSelect={true}\n      columns={this.state.cols}\n      rowGetter={this.rowGetter}\n      rowsCount={this.state.rows.size}\n      minHeight={500}\n      onRowUpdated={this.handleRowUpdated} />\n    )\n  }\n\n});\n\nReactDOM.render(<Example />, mountNode);\n  ';

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Immutable Data Example'
	      ),
	      React.createElement('p', null),
	      React.createElement(ReactPlayground, { codeText: immutableDataExample })
	    );
	  }

	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2014-2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.Immutable = factory();
	}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

	  function createClass(ctor, superClass) {
	    if (superClass) {
	      ctor.prototype = Object.create(superClass.prototype);
	    }
	    ctor.prototype.constructor = ctor;
	  }

	  function Iterable(value) {
	      return isIterable(value) ? value : Seq(value);
	    }


	  createClass(KeyedIterable, Iterable);
	    function KeyedIterable(value) {
	      return isKeyed(value) ? value : KeyedSeq(value);
	    }


	  createClass(IndexedIterable, Iterable);
	    function IndexedIterable(value) {
	      return isIndexed(value) ? value : IndexedSeq(value);
	    }


	  createClass(SetIterable, Iterable);
	    function SetIterable(value) {
	      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
	    }



	  function isIterable(maybeIterable) {
	    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
	  }

	  function isKeyed(maybeKeyed) {
	    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
	  }

	  function isIndexed(maybeIndexed) {
	    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
	  }

	  function isAssociative(maybeAssociative) {
	    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
	  }

	  function isOrdered(maybeOrdered) {
	    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
	  }

	  Iterable.isIterable = isIterable;
	  Iterable.isKeyed = isKeyed;
	  Iterable.isIndexed = isIndexed;
	  Iterable.isAssociative = isAssociative;
	  Iterable.isOrdered = isOrdered;

	  Iterable.Keyed = KeyedIterable;
	  Iterable.Indexed = IndexedIterable;
	  Iterable.Set = SetIterable;


	  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  // Used for setting prototype methods that IE8 chokes on.
	  var DELETE = 'delete';

	  // Constants describing the size of trie nodes.
	  var SHIFT = 5; // Resulted in best performance after ______?
	  var SIZE = 1 << SHIFT;
	  var MASK = SIZE - 1;

	  // A consistent shared value representing "not set" which equals nothing other
	  // than itself, and nothing that could be provided externally.
	  var NOT_SET = {};

	  // Boolean references, Rough equivalent of `bool &`.
	  var CHANGE_LENGTH = { value: false };
	  var DID_ALTER = { value: false };

	  function MakeRef(ref) {
	    ref.value = false;
	    return ref;
	  }

	  function SetRef(ref) {
	    ref && (ref.value = true);
	  }

	  // A function which returns a value representing an "owner" for transient writes
	  // to tries. The return value will only ever equal itself, and will not equal
	  // the return of any subsequent call of this function.
	  function OwnerID() {}

	  // http://jsperf.com/copy-array-inline
	  function arrCopy(arr, offset) {
	    offset = offset || 0;
	    var len = Math.max(0, arr.length - offset);
	    var newArr = new Array(len);
	    for (var ii = 0; ii < len; ii++) {
	      newArr[ii] = arr[ii + offset];
	    }
	    return newArr;
	  }

	  function ensureSize(iter) {
	    if (iter.size === undefined) {
	      iter.size = iter.__iterate(returnTrue);
	    }
	    return iter.size;
	  }

	  function wrapIndex(iter, index) {
	    // This implements "is array index" which the ECMAString spec defines as:
	    //
	    //     A String property name P is an array index if and only if
	    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
	    //     to 2^32−1.
	    //
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
	    if (typeof index !== 'number') {
	      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
	      if ('' + uint32Index !== index || uint32Index === 4294967295) {
	        return NaN;
	      }
	      index = uint32Index;
	    }
	    return index < 0 ? ensureSize(iter) + index : index;
	  }

	  function returnTrue() {
	    return true;
	  }

	  function wholeSlice(begin, end, size) {
	    return (begin === 0 || (size !== undefined && begin <= -size)) &&
	      (end === undefined || (size !== undefined && end >= size));
	  }

	  function resolveBegin(begin, size) {
	    return resolveIndex(begin, size, 0);
	  }

	  function resolveEnd(end, size) {
	    return resolveIndex(end, size, size);
	  }

	  function resolveIndex(index, size, defaultIndex) {
	    return index === undefined ?
	      defaultIndex :
	      index < 0 ?
	        Math.max(0, size + index) :
	        size === undefined ?
	          index :
	          Math.min(size, index);
	  }

	  /* global Symbol */

	  var ITERATE_KEYS = 0;
	  var ITERATE_VALUES = 1;
	  var ITERATE_ENTRIES = 2;

	  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator';

	  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


	  function Iterator(next) {
	      this.next = next;
	    }

	    Iterator.prototype.toString = function() {
	      return '[Iterator]';
	    };


	  Iterator.KEYS = ITERATE_KEYS;
	  Iterator.VALUES = ITERATE_VALUES;
	  Iterator.ENTRIES = ITERATE_ENTRIES;

	  Iterator.prototype.inspect =
	  Iterator.prototype.toSource = function () { return this.toString(); }
	  Iterator.prototype[ITERATOR_SYMBOL] = function () {
	    return this;
	  };


	  function iteratorValue(type, k, v, iteratorResult) {
	    var value = type === 0 ? k : type === 1 ? v : [k, v];
	    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
	      value: value, done: false
	    });
	    return iteratorResult;
	  }

	  function iteratorDone() {
	    return { value: undefined, done: true };
	  }

	  function hasIterator(maybeIterable) {
	    return !!getIteratorFn(maybeIterable);
	  }

	  function isIterator(maybeIterator) {
	    return maybeIterator && typeof maybeIterator.next === 'function';
	  }

	  function getIterator(iterable) {
	    var iteratorFn = getIteratorFn(iterable);
	    return iteratorFn && iteratorFn.call(iterable);
	  }

	  function getIteratorFn(iterable) {
	    var iteratorFn = iterable && (
	      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
	      iterable[FAUX_ITERATOR_SYMBOL]
	    );
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  function isArrayLike(value) {
	    return value && typeof value.length === 'number';
	  }

	  createClass(Seq, Iterable);
	    function Seq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        isIterable(value) ? value.toSeq() : seqFromValue(value);
	    }

	    Seq.of = function(/*...values*/) {
	      return Seq(arguments);
	    };

	    Seq.prototype.toSeq = function() {
	      return this;
	    };

	    Seq.prototype.toString = function() {
	      return this.__toString('Seq {', '}');
	    };

	    Seq.prototype.cacheResult = function() {
	      if (!this._cache && this.__iterateUncached) {
	        this._cache = this.entrySeq().toArray();
	        this.size = this._cache.length;
	      }
	      return this;
	    };

	    // abstract __iterateUncached(fn, reverse)

	    Seq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, true);
	    };

	    // abstract __iteratorUncached(type, reverse)

	    Seq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, true);
	    };



	  createClass(KeyedSeq, Seq);
	    function KeyedSeq(value) {
	      return value === null || value === undefined ?
	        emptySequence().toKeyedSeq() :
	        isIterable(value) ?
	          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
	          keyedSeqFromValue(value);
	    }

	    KeyedSeq.prototype.toKeyedSeq = function() {
	      return this;
	    };



	  createClass(IndexedSeq, Seq);
	    function IndexedSeq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
	    }

	    IndexedSeq.of = function(/*...values*/) {
	      return IndexedSeq(arguments);
	    };

	    IndexedSeq.prototype.toIndexedSeq = function() {
	      return this;
	    };

	    IndexedSeq.prototype.toString = function() {
	      return this.__toString('Seq [', ']');
	    };

	    IndexedSeq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, false);
	    };

	    IndexedSeq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, false);
	    };



	  createClass(SetSeq, Seq);
	    function SetSeq(value) {
	      return (
	        value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value
	      ).toSetSeq();
	    }

	    SetSeq.of = function(/*...values*/) {
	      return SetSeq(arguments);
	    };

	    SetSeq.prototype.toSetSeq = function() {
	      return this;
	    };



	  Seq.isSeq = isSeq;
	  Seq.Keyed = KeyedSeq;
	  Seq.Set = SetSeq;
	  Seq.Indexed = IndexedSeq;

	  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

	  Seq.prototype[IS_SEQ_SENTINEL] = true;



	  createClass(ArraySeq, IndexedSeq);
	    function ArraySeq(array) {
	      this._array = array;
	      this.size = array.length;
	    }

	    ArraySeq.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
	    };

	    ArraySeq.prototype.__iterate = function(fn, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ArraySeq.prototype.__iterator = function(type, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
	      );
	    };



	  createClass(ObjectSeq, KeyedSeq);
	    function ObjectSeq(object) {
	      var keys = Object.keys(object);
	      this._object = object;
	      this._keys = keys;
	      this.size = keys.length;
	    }

	    ObjectSeq.prototype.get = function(key, notSetValue) {
	      if (notSetValue !== undefined && !this.has(key)) {
	        return notSetValue;
	      }
	      return this._object[key];
	    };

	    ObjectSeq.prototype.has = function(key) {
	      return this._object.hasOwnProperty(key);
	    };

	    ObjectSeq.prototype.__iterate = function(fn, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        if (fn(object[key], key, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ObjectSeq.prototype.__iterator = function(type, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, key, object[key]);
	      });
	    };

	  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(IterableSeq, IndexedSeq);
	    function IterableSeq(iterable) {
	      this._iterable = iterable;
	      this.size = iterable.length || iterable.size;
	    }

	    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      var iterations = 0;
	      if (isIterator(iterator)) {
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (fn(step.value, iterations++, this) === false) {
	            break;
	          }
	        }
	      }
	      return iterations;
	    };

	    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      if (!isIterator(iterator)) {
	        return new Iterator(iteratorDone);
	      }
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step : iteratorValue(type, iterations++, step.value);
	      });
	    };



	  createClass(IteratorSeq, IndexedSeq);
	    function IteratorSeq(iterator) {
	      this._iterator = iterator;
	      this._iteratorCache = [];
	    }

	    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      while (iterations < cache.length) {
	        if (fn(cache[iterations], iterations++, this) === false) {
	          return iterations;
	        }
	      }
	      var step;
	      while (!(step = iterator.next()).done) {
	        var val = step.value;
	        cache[iterations] = val;
	        if (fn(val, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };

	    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      return new Iterator(function()  {
	        if (iterations >= cache.length) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          cache[iterations] = step.value;
	        }
	        return iteratorValue(type, iterations, cache[iterations++]);
	      });
	    };




	  // # pragma Helper functions

	  function isSeq(maybeSeq) {
	    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
	  }

	  var EMPTY_SEQ;

	  function emptySequence() {
	    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
	  }

	  function keyedSeqFromValue(value) {
	    var seq =
	      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
	      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
	      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
	      typeof value === 'object' ? new ObjectSeq(value) :
	      undefined;
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of [k, v] entries, '+
	        'or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function indexedSeqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value);
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values: ' + value
	      );
	    }
	    return seq;
	  }

	  function seqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value) ||
	      (typeof value === 'object' && new ObjectSeq(value));
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values, or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function maybeIndexedSeqFromValue(value) {
	    return (
	      isArrayLike(value) ? new ArraySeq(value) :
	      isIterator(value) ? new IteratorSeq(value) :
	      hasIterator(value) ? new IterableSeq(value) :
	      undefined
	    );
	  }

	  function seqIterate(seq, fn, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    }
	    return seq.__iterateUncached(fn, reverse);
	  }

	  function seqIterator(seq, type, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
	      });
	    }
	    return seq.__iteratorUncached(type, reverse);
	  }

	  function fromJS(json, converter) {
	    return converter ?
	      fromJSWith(converter, json, '', {'': json}) :
	      fromJSDefault(json);
	  }

	  function fromJSWith(converter, json, key, parentJSON) {
	    if (Array.isArray(json)) {
	      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    if (isPlainObj(json)) {
	      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    return json;
	  }

	  function fromJSDefault(json) {
	    if (Array.isArray(json)) {
	      return IndexedSeq(json).map(fromJSDefault).toList();
	    }
	    if (isPlainObj(json)) {
	      return KeyedSeq(json).map(fromJSDefault).toMap();
	    }
	    return json;
	  }

	  function isPlainObj(value) {
	    return value && (value.constructor === Object || value.constructor === undefined);
	  }

	  /**
	   * An extension of the "same-value" algorithm as [described for use by ES6 Map
	   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
	   *
	   * NaN is considered the same as NaN, however -0 and 0 are considered the same
	   * value, which is different from the algorithm described by
	   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
	   *
	   * This is extended further to allow Objects to describe the values they
	   * represent, by way of `valueOf` or `equals` (and `hashCode`).
	   *
	   * Note: because of this extension, the key equality of Immutable.Map and the
	   * value equality of Immutable.Set will differ from ES6 Map and Set.
	   *
	   * ### Defining custom values
	   *
	   * The easiest way to describe the value an object represents is by implementing
	   * `valueOf`. For example, `Date` represents a value by returning a unix
	   * timestamp for `valueOf`:
	   *
	   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
	   *     var date2 = new Date(1234567890000);
	   *     date1.valueOf(); // 1234567890000
	   *     assert( date1 !== date2 );
	   *     assert( Immutable.is( date1, date2 ) );
	   *
	   * Note: overriding `valueOf` may have other implications if you use this object
	   * where JavaScript expects a primitive, such as implicit string coercion.
	   *
	   * For more complex types, especially collections, implementing `valueOf` may
	   * not be performant. An alternative is to implement `equals` and `hashCode`.
	   *
	   * `equals` takes another object, presumably of similar type, and returns true
	   * if the it is equal. Equality is symmetrical, so the same result should be
	   * returned if this and the argument are flipped.
	   *
	   *     assert( a.equals(b) === b.equals(a) );
	   *
	   * `hashCode` returns a 32bit integer number representing the object which will
	   * be used to determine how to store the value object in a Map or Set. You must
	   * provide both or neither methods, one must not exist without the other.
	   *
	   * Also, an important relationship between these methods must be upheld: if two
	   * values are equal, they *must* return the same hashCode. If the values are not
	   * equal, they might have the same hashCode; this is called a hash collision,
	   * and while undesirable for performance reasons, it is acceptable.
	   *
	   *     if (a.equals(b)) {
	   *       assert( a.hashCode() === b.hashCode() );
	   *     }
	   *
	   * All Immutable collections implement `equals` and `hashCode`.
	   *
	   */
	  function is(valueA, valueB) {
	    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	      return true;
	    }
	    if (!valueA || !valueB) {
	      return false;
	    }
	    if (typeof valueA.valueOf === 'function' &&
	        typeof valueB.valueOf === 'function') {
	      valueA = valueA.valueOf();
	      valueB = valueB.valueOf();
	      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	        return true;
	      }
	      if (!valueA || !valueB) {
	        return false;
	      }
	    }
	    if (typeof valueA.equals === 'function' &&
	        typeof valueB.equals === 'function' &&
	        valueA.equals(valueB)) {
	      return true;
	    }
	    return false;
	  }

	  function deepEqual(a, b) {
	    if (a === b) {
	      return true;
	    }

	    if (
	      !isIterable(b) ||
	      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
	      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
	      isKeyed(a) !== isKeyed(b) ||
	      isIndexed(a) !== isIndexed(b) ||
	      isOrdered(a) !== isOrdered(b)
	    ) {
	      return false;
	    }

	    if (a.size === 0 && b.size === 0) {
	      return true;
	    }

	    var notAssociative = !isAssociative(a);

	    if (isOrdered(a)) {
	      var entries = a.entries();
	      return b.every(function(v, k)  {
	        var entry = entries.next().value;
	        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
	      }) && entries.next().done;
	    }

	    var flipped = false;

	    if (a.size === undefined) {
	      if (b.size === undefined) {
	        if (typeof a.cacheResult === 'function') {
	          a.cacheResult();
	        }
	      } else {
	        flipped = true;
	        var _ = a;
	        a = b;
	        b = _;
	      }
	    }

	    var allEqual = true;
	    var bSize = b.__iterate(function(v, k)  {
	      if (notAssociative ? !a.has(v) :
	          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
	        allEqual = false;
	        return false;
	      }
	    });

	    return allEqual && a.size === bSize;
	  }

	  createClass(Repeat, IndexedSeq);

	    function Repeat(value, times) {
	      if (!(this instanceof Repeat)) {
	        return new Repeat(value, times);
	      }
	      this._value = value;
	      this.size = times === undefined ? Infinity : Math.max(0, times);
	      if (this.size === 0) {
	        if (EMPTY_REPEAT) {
	          return EMPTY_REPEAT;
	        }
	        EMPTY_REPEAT = this;
	      }
	    }

	    Repeat.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Repeat []';
	      }
	      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
	    };

	    Repeat.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._value : notSetValue;
	    };

	    Repeat.prototype.includes = function(searchValue) {
	      return is(this._value, searchValue);
	    };

	    Repeat.prototype.slice = function(begin, end) {
	      var size = this.size;
	      return wholeSlice(begin, end, size) ? this :
	        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
	    };

	    Repeat.prototype.reverse = function() {
	      return this;
	    };

	    Repeat.prototype.indexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return 0;
	      }
	      return -1;
	    };

	    Repeat.prototype.lastIndexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return this.size;
	      }
	      return -1;
	    };

	    Repeat.prototype.__iterate = function(fn, reverse) {
	      for (var ii = 0; ii < this.size; ii++) {
	        if (fn(this._value, ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
	      );
	    };

	    Repeat.prototype.equals = function(other) {
	      return other instanceof Repeat ?
	        is(this._value, other._value) :
	        deepEqual(other);
	    };


	  var EMPTY_REPEAT;

	  function invariant(condition, error) {
	    if (!condition) throw new Error(error);
	  }

	  createClass(Range, IndexedSeq);

	    function Range(start, end, step) {
	      if (!(this instanceof Range)) {
	        return new Range(start, end, step);
	      }
	      invariant(step !== 0, 'Cannot step a Range by 0');
	      start = start || 0;
	      if (end === undefined) {
	        end = Infinity;
	      }
	      step = step === undefined ? 1 : Math.abs(step);
	      if (end < start) {
	        step = -step;
	      }
	      this._start = start;
	      this._end = end;
	      this._step = step;
	      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
	      if (this.size === 0) {
	        if (EMPTY_RANGE) {
	          return EMPTY_RANGE;
	        }
	        EMPTY_RANGE = this;
	      }
	    }

	    Range.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Range []';
	      }
	      return 'Range [ ' +
	        this._start + '...' + this._end +
	        (this._step > 1 ? ' by ' + this._step : '') +
	      ' ]';
	    };

	    Range.prototype.get = function(index, notSetValue) {
	      return this.has(index) ?
	        this._start + wrapIndex(this, index) * this._step :
	        notSetValue;
	    };

	    Range.prototype.includes = function(searchValue) {
	      var possibleIndex = (searchValue - this._start) / this._step;
	      return possibleIndex >= 0 &&
	        possibleIndex < this.size &&
	        possibleIndex === Math.floor(possibleIndex);
	    };

	    Range.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      begin = resolveBegin(begin, this.size);
	      end = resolveEnd(end, this.size);
	      if (end <= begin) {
	        return new Range(0, 0);
	      }
	      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
	    };

	    Range.prototype.indexOf = function(searchValue) {
	      var offsetValue = searchValue - this._start;
	      if (offsetValue % this._step === 0) {
	        var index = offsetValue / this._step;
	        if (index >= 0 && index < this.size) {
	          return index
	        }
	      }
	      return -1;
	    };

	    Range.prototype.lastIndexOf = function(searchValue) {
	      return this.indexOf(searchValue);
	    };

	    Range.prototype.__iterate = function(fn, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(value, ii, this) === false) {
	          return ii + 1;
	        }
	        value += reverse ? -step : step;
	      }
	      return ii;
	    };

	    Range.prototype.__iterator = function(type, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      var ii = 0;
	      return new Iterator(function()  {
	        var v = value;
	        value += reverse ? -step : step;
	        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
	      });
	    };

	    Range.prototype.equals = function(other) {
	      return other instanceof Range ?
	        this._start === other._start &&
	        this._end === other._end &&
	        this._step === other._step :
	        deepEqual(this, other);
	    };


	  var EMPTY_RANGE;

	  createClass(Collection, Iterable);
	    function Collection() {
	      throw TypeError('Abstract');
	    }


	  createClass(KeyedCollection, Collection);function KeyedCollection() {}

	  createClass(IndexedCollection, Collection);function IndexedCollection() {}

	  createClass(SetCollection, Collection);function SetCollection() {}


	  Collection.Keyed = KeyedCollection;
	  Collection.Indexed = IndexedCollection;
	  Collection.Set = SetCollection;

	  var imul =
	    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
	    Math.imul :
	    function imul(a, b) {
	      a = a | 0; // int
	      b = b | 0; // int
	      var c = a & 0xffff;
	      var d = b & 0xffff;
	      // Shift by 0 fixes the sign on the high part.
	      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
	    };

	  // v8 has an optimization for storing 31-bit signed numbers.
	  // Values which have either 00 or 11 as the high order bits qualify.
	  // This function drops the highest order bit in a signed number, maintaining
	  // the sign bit.
	  function smi(i32) {
	    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
	  }

	  function hash(o) {
	    if (o === false || o === null || o === undefined) {
	      return 0;
	    }
	    if (typeof o.valueOf === 'function') {
	      o = o.valueOf();
	      if (o === false || o === null || o === undefined) {
	        return 0;
	      }
	    }
	    if (o === true) {
	      return 1;
	    }
	    var type = typeof o;
	    if (type === 'number') {
	      var h = o | 0;
	      if (h !== o) {
	        h ^= o * 0xFFFFFFFF;
	      }
	      while (o > 0xFFFFFFFF) {
	        o /= 0xFFFFFFFF;
	        h ^= o;
	      }
	      return smi(h);
	    }
	    if (type === 'string') {
	      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
	    }
	    if (typeof o.hashCode === 'function') {
	      return o.hashCode();
	    }
	    if (type === 'object') {
	      return hashJSObj(o);
	    }
	    if (typeof o.toString === 'function') {
	      return hashString(o.toString());
	    }
	    throw new Error('Value type ' + type + ' cannot be hashed.');
	  }

	  function cachedHashString(string) {
	    var hash = stringHashCache[string];
	    if (hash === undefined) {
	      hash = hashString(string);
	      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
	        STRING_HASH_CACHE_SIZE = 0;
	        stringHashCache = {};
	      }
	      STRING_HASH_CACHE_SIZE++;
	      stringHashCache[string] = hash;
	    }
	    return hash;
	  }

	  // http://jsperf.com/hashing-strings
	  function hashString(string) {
	    // This is the hash from JVM
	    // The hash code for a string is computed as
	    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
	    // where s[i] is the ith character of the string and n is the length of
	    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
	    // (exclusive) by dropping high bits.
	    var hash = 0;
	    for (var ii = 0; ii < string.length; ii++) {
	      hash = 31 * hash + string.charCodeAt(ii) | 0;
	    }
	    return smi(hash);
	  }

	  function hashJSObj(obj) {
	    var hash;
	    if (usingWeakMap) {
	      hash = weakMap.get(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = obj[UID_HASH_KEY];
	    if (hash !== undefined) {
	      return hash;
	    }

	    if (!canDefineProperty) {
	      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
	      if (hash !== undefined) {
	        return hash;
	      }

	      hash = getIENodeHash(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = ++objHashUID;
	    if (objHashUID & 0x40000000) {
	      objHashUID = 0;
	    }

	    if (usingWeakMap) {
	      weakMap.set(obj, hash);
	    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
	      throw new Error('Non-extensible objects are not allowed as keys.');
	    } else if (canDefineProperty) {
	      Object.defineProperty(obj, UID_HASH_KEY, {
	        'enumerable': false,
	        'configurable': false,
	        'writable': false,
	        'value': hash
	      });
	    } else if (obj.propertyIsEnumerable !== undefined &&
	               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
	      // Since we can't define a non-enumerable property on the object
	      // we'll hijack one of the less-used non-enumerable properties to
	      // save our hash on it. Since this is a function it will not show up in
	      // `JSON.stringify` which is what we want.
	      obj.propertyIsEnumerable = function() {
	        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
	      };
	      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
	    } else if (obj.nodeType !== undefined) {
	      // At this point we couldn't get the IE `uniqueID` to use as a hash
	      // and we couldn't use a non-enumerable property to exploit the
	      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
	      // itself.
	      obj[UID_HASH_KEY] = hash;
	    } else {
	      throw new Error('Unable to set a non-enumerable property on object.');
	    }

	    return hash;
	  }

	  // Get references to ES5 object methods.
	  var isExtensible = Object.isExtensible;

	  // True if Object.defineProperty works as expected. IE8 fails this test.
	  var canDefineProperty = (function() {
	    try {
	      Object.defineProperty({}, '@', {});
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }());

	  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
	  // and avoid memory leaks from the IE cloneNode bug.
	  function getIENodeHash(node) {
	    if (node && node.nodeType > 0) {
	      switch (node.nodeType) {
	        case 1: // Element
	          return node.uniqueID;
	        case 9: // Document
	          return node.documentElement && node.documentElement.uniqueID;
	      }
	    }
	  }

	  // If possible, use a WeakMap.
	  var usingWeakMap = typeof WeakMap === 'function';
	  var weakMap;
	  if (usingWeakMap) {
	    weakMap = new WeakMap();
	  }

	  var objHashUID = 0;

	  var UID_HASH_KEY = '__immutablehash__';
	  if (typeof Symbol === 'function') {
	    UID_HASH_KEY = Symbol(UID_HASH_KEY);
	  }

	  var STRING_HASH_CACHE_MIN_STRLEN = 16;
	  var STRING_HASH_CACHE_MAX_SIZE = 255;
	  var STRING_HASH_CACHE_SIZE = 0;
	  var stringHashCache = {};

	  function assertNotInfinite(size) {
	    invariant(
	      size !== Infinity,
	      'Cannot perform this action with an infinite size.'
	    );
	  }

	  createClass(Map, KeyedCollection);

	    // @pragma Construction

	    function Map(value) {
	      return value === null || value === undefined ? emptyMap() :
	        isMap(value) && !isOrdered(value) ? value :
	        emptyMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    Map.prototype.toString = function() {
	      return this.__toString('Map {', '}');
	    };

	    // @pragma Access

	    Map.prototype.get = function(k, notSetValue) {
	      return this._root ?
	        this._root.get(0, undefined, k, notSetValue) :
	        notSetValue;
	    };

	    // @pragma Modification

	    Map.prototype.set = function(k, v) {
	      return updateMap(this, k, v);
	    };

	    Map.prototype.setIn = function(keyPath, v) {
	      return this.updateIn(keyPath, NOT_SET, function()  {return v});
	    };

	    Map.prototype.remove = function(k) {
	      return updateMap(this, k, NOT_SET);
	    };

	    Map.prototype.deleteIn = function(keyPath) {
	      return this.updateIn(keyPath, function()  {return NOT_SET});
	    };

	    Map.prototype.update = function(k, notSetValue, updater) {
	      return arguments.length === 1 ?
	        k(this) :
	        this.updateIn([k], notSetValue, updater);
	    };

	    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
	      if (!updater) {
	        updater = notSetValue;
	        notSetValue = undefined;
	      }
	      var updatedValue = updateInDeepMap(
	        this,
	        forceIterator(keyPath),
	        notSetValue,
	        updater
	      );
	      return updatedValue === NOT_SET ? undefined : updatedValue;
	    };

	    Map.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._root = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyMap();
	    };

	    // @pragma Composition

	    Map.prototype.merge = function(/*...iters*/) {
	      return mergeIntoMapWith(this, undefined, arguments);
	    };

	    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, merger, iters);
	    };

	    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.merge === 'function' ?
	          m.merge.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    Map.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoMapWith(this, deepMerger, arguments);
	    };

	    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
	    };

	    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.mergeDeep === 'function' ?
	          m.mergeDeep.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    Map.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator));
	    };

	    Map.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator, mapper));
	    };

	    // @pragma Mutability

	    Map.prototype.withMutations = function(fn) {
	      var mutable = this.asMutable();
	      fn(mutable);
	      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
	    };

	    Map.prototype.asMutable = function() {
	      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
	    };

	    Map.prototype.asImmutable = function() {
	      return this.__ensureOwner();
	    };

	    Map.prototype.wasAltered = function() {
	      return this.__altered;
	    };

	    Map.prototype.__iterator = function(type, reverse) {
	      return new MapIterator(this, type, reverse);
	    };

	    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      this._root && this._root.iterate(function(entry ) {
	        iterations++;
	        return fn(entry[1], entry[0], this$0);
	      }, reverse);
	      return iterations;
	    };

	    Map.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeMap(this.size, this._root, ownerID, this.__hash);
	    };


	  function isMap(maybeMap) {
	    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
	  }

	  Map.isMap = isMap;

	  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

	  var MapPrototype = Map.prototype;
	  MapPrototype[IS_MAP_SENTINEL] = true;
	  MapPrototype[DELETE] = MapPrototype.remove;
	  MapPrototype.removeIn = MapPrototype.deleteIn;


	  // #pragma Trie Nodes



	    function ArrayMapNode(ownerID, entries) {
	      this.ownerID = ownerID;
	      this.entries = entries;
	    }

	    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && entries.length === 1) {
	        return; // undefined
	      }

	      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
	        return createNodes(ownerID, entries, key, value);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new ArrayMapNode(ownerID, newEntries);
	    };




	    function BitmapIndexedNode(ownerID, bitmap, nodes) {
	      this.ownerID = ownerID;
	      this.bitmap = bitmap;
	      this.nodes = nodes;
	    }

	    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
	      var bitmap = this.bitmap;
	      return (bitmap & bit) === 0 ? notSetValue :
	        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
	    };

	    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var bit = 1 << keyHashFrag;
	      var bitmap = this.bitmap;
	      var exists = (bitmap & bit) !== 0;

	      if (!exists && value === NOT_SET) {
	        return this;
	      }

	      var idx = popCount(bitmap & (bit - 1));
	      var nodes = this.nodes;
	      var node = exists ? nodes[idx] : undefined;
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

	      if (newNode === node) {
	        return this;
	      }

	      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
	        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
	      }

	      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
	        return nodes[idx ^ 1];
	      }

	      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
	        return newNode;
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
	      var newNodes = exists ? newNode ?
	        setIn(nodes, idx, newNode, isEditable) :
	        spliceOut(nodes, idx, isEditable) :
	        spliceIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.bitmap = newBitmap;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
	    };




	    function HashArrayMapNode(ownerID, count, nodes) {
	      this.ownerID = ownerID;
	      this.count = count;
	      this.nodes = nodes;
	    }

	    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var node = this.nodes[idx];
	      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
	    };

	    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var removed = value === NOT_SET;
	      var nodes = this.nodes;
	      var node = nodes[idx];

	      if (removed && !node) {
	        return this;
	      }

	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	      if (newNode === node) {
	        return this;
	      }

	      var newCount = this.count;
	      if (!node) {
	        newCount++;
	      } else if (!newNode) {
	        newCount--;
	        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
	          return packNodes(ownerID, nodes, newCount, idx);
	        }
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newNodes = setIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.count = newCount;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new HashArrayMapNode(ownerID, newCount, newNodes);
	    };




	    function HashCollisionNode(ownerID, keyHash, entries) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entries = entries;
	    }

	    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }

	      var removed = value === NOT_SET;

	      if (keyHash !== this.keyHash) {
	        if (removed) {
	          return this;
	        }
	        SetRef(didAlter);
	        SetRef(didChangeSize);
	        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
	      }

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && len === 2) {
	        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
	    };




	    function ValueNode(ownerID, keyHash, entry) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entry = entry;
	    }

	    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
	    };

	    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	      var keyMatch = is(key, this.entry[0]);
	      if (keyMatch ? value === this.entry[1] : removed) {
	        return this;
	      }

	      SetRef(didAlter);

	      if (removed) {
	        SetRef(didChangeSize);
	        return; // undefined
	      }

	      if (keyMatch) {
	        if (ownerID && ownerID === this.ownerID) {
	          this.entry[1] = value;
	          return this;
	        }
	        return new ValueNode(ownerID, this.keyHash, [key, value]);
	      }

	      SetRef(didChangeSize);
	      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
	    };



	  // #pragma Iterators

	  ArrayMapNode.prototype.iterate =
	  HashCollisionNode.prototype.iterate = function (fn, reverse) {
	    var entries = this.entries;
	    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
	      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
	        return false;
	      }
	    }
	  }

	  BitmapIndexedNode.prototype.iterate =
	  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
	    var nodes = this.nodes;
	    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
	      var node = nodes[reverse ? maxIndex - ii : ii];
	      if (node && node.iterate(fn, reverse) === false) {
	        return false;
	      }
	    }
	  }

	  ValueNode.prototype.iterate = function (fn, reverse) {
	    return fn(this.entry);
	  }

	  createClass(MapIterator, Iterator);

	    function MapIterator(map, type, reverse) {
	      this._type = type;
	      this._reverse = reverse;
	      this._stack = map._root && mapIteratorFrame(map._root);
	    }

	    MapIterator.prototype.next = function() {
	      var type = this._type;
	      var stack = this._stack;
	      while (stack) {
	        var node = stack.node;
	        var index = stack.index++;
	        var maxIndex;
	        if (node.entry) {
	          if (index === 0) {
	            return mapIteratorValue(type, node.entry);
	          }
	        } else if (node.entries) {
	          maxIndex = node.entries.length - 1;
	          if (index <= maxIndex) {
	            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
	          }
	        } else {
	          maxIndex = node.nodes.length - 1;
	          if (index <= maxIndex) {
	            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
	            if (subNode) {
	              if (subNode.entry) {
	                return mapIteratorValue(type, subNode.entry);
	              }
	              stack = this._stack = mapIteratorFrame(subNode, stack);
	            }
	            continue;
	          }
	        }
	        stack = this._stack = this._stack.__prev;
	      }
	      return iteratorDone();
	    };


	  function mapIteratorValue(type, entry) {
	    return iteratorValue(type, entry[0], entry[1]);
	  }

	  function mapIteratorFrame(node, prev) {
	    return {
	      node: node,
	      index: 0,
	      __prev: prev
	    };
	  }

	  function makeMap(size, root, ownerID, hash) {
	    var map = Object.create(MapPrototype);
	    map.size = size;
	    map._root = root;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_MAP;
	  function emptyMap() {
	    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
	  }

	  function updateMap(map, k, v) {
	    var newRoot;
	    var newSize;
	    if (!map._root) {
	      if (v === NOT_SET) {
	        return map;
	      }
	      newSize = 1;
	      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
	    } else {
	      var didChangeSize = MakeRef(CHANGE_LENGTH);
	      var didAlter = MakeRef(DID_ALTER);
	      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
	      if (!didAlter.value) {
	        return map;
	      }
	      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
	    }
	    if (map.__ownerID) {
	      map.size = newSize;
	      map._root = newRoot;
	      map.__hash = undefined;
	      map.__altered = true;
	      return map;
	    }
	    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
	  }

	  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	    if (!node) {
	      if (value === NOT_SET) {
	        return node;
	      }
	      SetRef(didAlter);
	      SetRef(didChangeSize);
	      return new ValueNode(ownerID, keyHash, [key, value]);
	    }
	    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
	  }

	  function isLeafNode(node) {
	    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
	  }

	  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
	    if (node.keyHash === keyHash) {
	      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
	    }

	    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
	    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

	    var newNode;
	    var nodes = idx1 === idx2 ?
	      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
	      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

	    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
	  }

	  function createNodes(ownerID, entries, key, value) {
	    if (!ownerID) {
	      ownerID = new OwnerID();
	    }
	    var node = new ValueNode(ownerID, hash(key), [key, value]);
	    for (var ii = 0; ii < entries.length; ii++) {
	      var entry = entries[ii];
	      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
	    }
	    return node;
	  }

	  function packNodes(ownerID, nodes, count, excluding) {
	    var bitmap = 0;
	    var packedII = 0;
	    var packedNodes = new Array(count);
	    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
	      var node = nodes[ii];
	      if (node !== undefined && ii !== excluding) {
	        bitmap |= bit;
	        packedNodes[packedII++] = node;
	      }
	    }
	    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
	  }

	  function expandNodes(ownerID, nodes, bitmap, including, node) {
	    var count = 0;
	    var expandedNodes = new Array(SIZE);
	    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
	      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
	    }
	    expandedNodes[including] = node;
	    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
	  }

	  function mergeIntoMapWith(map, merger, iterables) {
	    var iters = [];
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = KeyedIterable(value);
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    return mergeIntoCollectionWith(map, merger, iters);
	  }

	  function deepMerger(existing, value, key) {
	    return existing && existing.mergeDeep && isIterable(value) ?
	      existing.mergeDeep(value) :
	      is(existing, value) ? existing : value;
	  }

	  function deepMergerWith(merger) {
	    return function(existing, value, key)  {
	      if (existing && existing.mergeDeepWith && isIterable(value)) {
	        return existing.mergeDeepWith(merger, value);
	      }
	      var nextValue = merger(existing, value, key);
	      return is(existing, nextValue) ? existing : nextValue;
	    };
	  }

	  function mergeIntoCollectionWith(collection, merger, iters) {
	    iters = iters.filter(function(x ) {return x.size !== 0});
	    if (iters.length === 0) {
	      return collection;
	    }
	    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
	      return collection.constructor(iters[0]);
	    }
	    return collection.withMutations(function(collection ) {
	      var mergeIntoMap = merger ?
	        function(value, key)  {
	          collection.update(key, NOT_SET, function(existing )
	            {return existing === NOT_SET ? value : merger(existing, value, key)}
	          );
	        } :
	        function(value, key)  {
	          collection.set(key, value);
	        }
	      for (var ii = 0; ii < iters.length; ii++) {
	        iters[ii].forEach(mergeIntoMap);
	      }
	    });
	  }

	  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
	    var isNotSet = existing === NOT_SET;
	    var step = keyPathIter.next();
	    if (step.done) {
	      var existingValue = isNotSet ? notSetValue : existing;
	      var newValue = updater(existingValue);
	      return newValue === existingValue ? existing : newValue;
	    }
	    invariant(
	      isNotSet || (existing && existing.set),
	      'invalid keyPath'
	    );
	    var key = step.value;
	    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
	    var nextUpdated = updateInDeepMap(
	      nextExisting,
	      keyPathIter,
	      notSetValue,
	      updater
	    );
	    return nextUpdated === nextExisting ? existing :
	      nextUpdated === NOT_SET ? existing.remove(key) :
	      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
	  }

	  function popCount(x) {
	    x = x - ((x >> 1) & 0x55555555);
	    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
	    x = (x + (x >> 4)) & 0x0f0f0f0f;
	    x = x + (x >> 8);
	    x = x + (x >> 16);
	    return x & 0x7f;
	  }

	  function setIn(array, idx, val, canEdit) {
	    var newArray = canEdit ? array : arrCopy(array);
	    newArray[idx] = val;
	    return newArray;
	  }

	  function spliceIn(array, idx, val, canEdit) {
	    var newLen = array.length + 1;
	    if (canEdit && idx + 1 === newLen) {
	      array[idx] = val;
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        newArray[ii] = val;
	        after = -1;
	      } else {
	        newArray[ii] = array[ii + after];
	      }
	    }
	    return newArray;
	  }

	  function spliceOut(array, idx, canEdit) {
	    var newLen = array.length - 1;
	    if (canEdit && idx === newLen) {
	      array.pop();
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        after = 1;
	      }
	      newArray[ii] = array[ii + after];
	    }
	    return newArray;
	  }

	  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
	  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
	  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

	  createClass(List, IndexedCollection);

	    // @pragma Construction

	    function List(value) {
	      var empty = emptyList();
	      if (value === null || value === undefined) {
	        return empty;
	      }
	      if (isList(value)) {
	        return value;
	      }
	      var iter = IndexedIterable(value);
	      var size = iter.size;
	      if (size === 0) {
	        return empty;
	      }
	      assertNotInfinite(size);
	      if (size > 0 && size < SIZE) {
	        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
	      }
	      return empty.withMutations(function(list ) {
	        list.setSize(size);
	        iter.forEach(function(v, i)  {return list.set(i, v)});
	      });
	    }

	    List.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    List.prototype.toString = function() {
	      return this.__toString('List [', ']');
	    };

	    // @pragma Access

	    List.prototype.get = function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      if (index >= 0 && index < this.size) {
	        index += this._origin;
	        var node = listNodeFor(this, index);
	        return node && node.array[index & MASK];
	      }
	      return notSetValue;
	    };

	    // @pragma Modification

	    List.prototype.set = function(index, value) {
	      return updateList(this, index, value);
	    };

	    List.prototype.remove = function(index) {
	      return !this.has(index) ? this :
	        index === 0 ? this.shift() :
	        index === this.size - 1 ? this.pop() :
	        this.splice(index, 1);
	    };

	    List.prototype.insert = function(index, value) {
	      return this.splice(index, 0, value);
	    };

	    List.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = this._origin = this._capacity = 0;
	        this._level = SHIFT;
	        this._root = this._tail = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyList();
	    };

	    List.prototype.push = function(/*...values*/) {
	      var values = arguments;
	      var oldSize = this.size;
	      return this.withMutations(function(list ) {
	        setListBounds(list, 0, oldSize + values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(oldSize + ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.pop = function() {
	      return setListBounds(this, 0, -1);
	    };

	    List.prototype.unshift = function(/*...values*/) {
	      var values = arguments;
	      return this.withMutations(function(list ) {
	        setListBounds(list, -values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.shift = function() {
	      return setListBounds(this, 1);
	    };

	    // @pragma Composition

	    List.prototype.merge = function(/*...iters*/) {
	      return mergeIntoListWith(this, undefined, arguments);
	    };

	    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, merger, iters);
	    };

	    List.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoListWith(this, deepMerger, arguments);
	    };

	    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, deepMergerWith(merger), iters);
	    };

	    List.prototype.setSize = function(size) {
	      return setListBounds(this, 0, size);
	    };

	    // @pragma Iteration

	    List.prototype.slice = function(begin, end) {
	      var size = this.size;
	      if (wholeSlice(begin, end, size)) {
	        return this;
	      }
	      return setListBounds(
	        this,
	        resolveBegin(begin, size),
	        resolveEnd(end, size)
	      );
	    };

	    List.prototype.__iterator = function(type, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      return new Iterator(function()  {
	        var value = values();
	        return value === DONE ?
	          iteratorDone() :
	          iteratorValue(type, index++, value);
	      });
	    };

	    List.prototype.__iterate = function(fn, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      var value;
	      while ((value = values()) !== DONE) {
	        if (fn(value, index++, this) === false) {
	          break;
	        }
	      }
	      return index;
	    };

	    List.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        return this;
	      }
	      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
	    };


	  function isList(maybeList) {
	    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
	  }

	  List.isList = isList;

	  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

	  var ListPrototype = List.prototype;
	  ListPrototype[IS_LIST_SENTINEL] = true;
	  ListPrototype[DELETE] = ListPrototype.remove;
	  ListPrototype.setIn = MapPrototype.setIn;
	  ListPrototype.deleteIn =
	  ListPrototype.removeIn = MapPrototype.removeIn;
	  ListPrototype.update = MapPrototype.update;
	  ListPrototype.updateIn = MapPrototype.updateIn;
	  ListPrototype.mergeIn = MapPrototype.mergeIn;
	  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  ListPrototype.withMutations = MapPrototype.withMutations;
	  ListPrototype.asMutable = MapPrototype.asMutable;
	  ListPrototype.asImmutable = MapPrototype.asImmutable;
	  ListPrototype.wasAltered = MapPrototype.wasAltered;



	    function VNode(array, ownerID) {
	      this.array = array;
	      this.ownerID = ownerID;
	    }

	    // TODO: seems like these methods are very similar

	    VNode.prototype.removeBefore = function(ownerID, level, index) {
	      if (index === level ? 1 << level : 0 || this.array.length === 0) {
	        return this;
	      }
	      var originIndex = (index >>> level) & MASK;
	      if (originIndex >= this.array.length) {
	        return new VNode([], ownerID);
	      }
	      var removingFirst = originIndex === 0;
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[originIndex];
	        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && removingFirst) {
	          return this;
	        }
	      }
	      if (removingFirst && !newChild) {
	        return this;
	      }
	      var editable = editableVNode(this, ownerID);
	      if (!removingFirst) {
	        for (var ii = 0; ii < originIndex; ii++) {
	          editable.array[ii] = undefined;
	        }
	      }
	      if (newChild) {
	        editable.array[originIndex] = newChild;
	      }
	      return editable;
	    };

	    VNode.prototype.removeAfter = function(ownerID, level, index) {
	      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
	        return this;
	      }
	      var sizeIndex = ((index - 1) >>> level) & MASK;
	      if (sizeIndex >= this.array.length) {
	        return this;
	      }

	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[sizeIndex];
	        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
	          return this;
	        }
	      }

	      var editable = editableVNode(this, ownerID);
	      editable.array.splice(sizeIndex + 1);
	      if (newChild) {
	        editable.array[sizeIndex] = newChild;
	      }
	      return editable;
	    };



	  var DONE = {};

	  function iterateList(list, reverse) {
	    var left = list._origin;
	    var right = list._capacity;
	    var tailPos = getTailOffset(right);
	    var tail = list._tail;

	    return iterateNodeOrLeaf(list._root, list._level, 0);

	    function iterateNodeOrLeaf(node, level, offset) {
	      return level === 0 ?
	        iterateLeaf(node, offset) :
	        iterateNode(node, level, offset);
	    }

	    function iterateLeaf(node, offset) {
	      var array = offset === tailPos ? tail && tail.array : node && node.array;
	      var from = offset > left ? 0 : left - offset;
	      var to = right - offset;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        if (from === to) {
	          return DONE;
	        }
	        var idx = reverse ? --to : from++;
	        return array && array[idx];
	      };
	    }

	    function iterateNode(node, level, offset) {
	      var values;
	      var array = node && node.array;
	      var from = offset > left ? 0 : (left - offset) >> level;
	      var to = ((right - offset) >> level) + 1;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        do {
	          if (values) {
	            var value = values();
	            if (value !== DONE) {
	              return value;
	            }
	            values = null;
	          }
	          if (from === to) {
	            return DONE;
	          }
	          var idx = reverse ? --to : from++;
	          values = iterateNodeOrLeaf(
	            array && array[idx], level - SHIFT, offset + (idx << level)
	          );
	        } while (true);
	      };
	    }
	  }

	  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
	    var list = Object.create(ListPrototype);
	    list.size = capacity - origin;
	    list._origin = origin;
	    list._capacity = capacity;
	    list._level = level;
	    list._root = root;
	    list._tail = tail;
	    list.__ownerID = ownerID;
	    list.__hash = hash;
	    list.__altered = false;
	    return list;
	  }

	  var EMPTY_LIST;
	  function emptyList() {
	    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
	  }

	  function updateList(list, index, value) {
	    index = wrapIndex(list, index);

	    if (index !== index) {
	      return list;
	    }

	    if (index >= list.size || index < 0) {
	      return list.withMutations(function(list ) {
	        index < 0 ?
	          setListBounds(list, index).set(0, value) :
	          setListBounds(list, 0, index + 1).set(index, value)
	      });
	    }

	    index += list._origin;

	    var newTail = list._tail;
	    var newRoot = list._root;
	    var didAlter = MakeRef(DID_ALTER);
	    if (index >= getTailOffset(list._capacity)) {
	      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
	    } else {
	      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
	    }

	    if (!didAlter.value) {
	      return list;
	    }

	    if (list.__ownerID) {
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
	  }

	  function updateVNode(node, ownerID, level, index, value, didAlter) {
	    var idx = (index >>> level) & MASK;
	    var nodeHas = node && idx < node.array.length;
	    if (!nodeHas && value === undefined) {
	      return node;
	    }

	    var newNode;

	    if (level > 0) {
	      var lowerNode = node && node.array[idx];
	      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
	      if (newLowerNode === lowerNode) {
	        return node;
	      }
	      newNode = editableVNode(node, ownerID);
	      newNode.array[idx] = newLowerNode;
	      return newNode;
	    }

	    if (nodeHas && node.array[idx] === value) {
	      return node;
	    }

	    SetRef(didAlter);

	    newNode = editableVNode(node, ownerID);
	    if (value === undefined && idx === newNode.array.length - 1) {
	      newNode.array.pop();
	    } else {
	      newNode.array[idx] = value;
	    }
	    return newNode;
	  }

	  function editableVNode(node, ownerID) {
	    if (ownerID && node && ownerID === node.ownerID) {
	      return node;
	    }
	    return new VNode(node ? node.array.slice() : [], ownerID);
	  }

	  function listNodeFor(list, rawIndex) {
	    if (rawIndex >= getTailOffset(list._capacity)) {
	      return list._tail;
	    }
	    if (rawIndex < 1 << (list._level + SHIFT)) {
	      var node = list._root;
	      var level = list._level;
	      while (node && level > 0) {
	        node = node.array[(rawIndex >>> level) & MASK];
	        level -= SHIFT;
	      }
	      return node;
	    }
	  }

	  function setListBounds(list, begin, end) {
	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      end = end | 0;
	    }
	    var owner = list.__ownerID || new OwnerID();
	    var oldOrigin = list._origin;
	    var oldCapacity = list._capacity;
	    var newOrigin = oldOrigin + begin;
	    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
	    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
	      return list;
	    }

	    // If it's going to end after it starts, it's empty.
	    if (newOrigin >= newCapacity) {
	      return list.clear();
	    }

	    var newLevel = list._level;
	    var newRoot = list._root;

	    // New origin might need creating a higher root.
	    var offsetShift = 0;
	    while (newOrigin + offsetShift < 0) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
	      newLevel += SHIFT;
	      offsetShift += 1 << newLevel;
	    }
	    if (offsetShift) {
	      newOrigin += offsetShift;
	      oldOrigin += offsetShift;
	      newCapacity += offsetShift;
	      oldCapacity += offsetShift;
	    }

	    var oldTailOffset = getTailOffset(oldCapacity);
	    var newTailOffset = getTailOffset(newCapacity);

	    // New size might need creating a higher root.
	    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
	      newLevel += SHIFT;
	    }

	    // Locate or create the new tail.
	    var oldTail = list._tail;
	    var newTail = newTailOffset < oldTailOffset ?
	      listNodeFor(list, newCapacity - 1) :
	      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

	    // Merge Tail into tree.
	    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
	      newRoot = editableVNode(newRoot, owner);
	      var node = newRoot;
	      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
	        var idx = (oldTailOffset >>> level) & MASK;
	        node = node.array[idx] = editableVNode(node.array[idx], owner);
	      }
	      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
	    }

	    // If the size has been reduced, there's a chance the tail needs to be trimmed.
	    if (newCapacity < oldCapacity) {
	      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
	    }

	    // If the new origin is within the tail, then we do not need a root.
	    if (newOrigin >= newTailOffset) {
	      newOrigin -= newTailOffset;
	      newCapacity -= newTailOffset;
	      newLevel = SHIFT;
	      newRoot = null;
	      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

	    // Otherwise, if the root has been trimmed, garbage collect.
	    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
	      offsetShift = 0;

	      // Identify the new top root node of the subtree of the old root.
	      while (newRoot) {
	        var beginIndex = (newOrigin >>> newLevel) & MASK;
	        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
	          break;
	        }
	        if (beginIndex) {
	          offsetShift += (1 << newLevel) * beginIndex;
	        }
	        newLevel -= SHIFT;
	        newRoot = newRoot.array[beginIndex];
	      }

	      // Trim the new sides of the new root.
	      if (newRoot && newOrigin > oldOrigin) {
	        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
	      }
	      if (newRoot && newTailOffset < oldTailOffset) {
	        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
	      }
	      if (offsetShift) {
	        newOrigin -= offsetShift;
	        newCapacity -= offsetShift;
	      }
	    }

	    if (list.__ownerID) {
	      list.size = newCapacity - newOrigin;
	      list._origin = newOrigin;
	      list._capacity = newCapacity;
	      list._level = newLevel;
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
	  }

	  function mergeIntoListWith(list, merger, iterables) {
	    var iters = [];
	    var maxSize = 0;
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = IndexedIterable(value);
	      if (iter.size > maxSize) {
	        maxSize = iter.size;
	      }
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    if (maxSize > list.size) {
	      list = list.setSize(maxSize);
	    }
	    return mergeIntoCollectionWith(list, merger, iters);
	  }

	  function getTailOffset(size) {
	    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
	  }

	  createClass(OrderedMap, Map);

	    // @pragma Construction

	    function OrderedMap(value) {
	      return value === null || value === undefined ? emptyOrderedMap() :
	        isOrderedMap(value) ? value :
	        emptyOrderedMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    OrderedMap.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedMap.prototype.toString = function() {
	      return this.__toString('OrderedMap {', '}');
	    };

	    // @pragma Access

	    OrderedMap.prototype.get = function(k, notSetValue) {
	      var index = this._map.get(k);
	      return index !== undefined ? this._list.get(index)[1] : notSetValue;
	    };

	    // @pragma Modification

	    OrderedMap.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._map.clear();
	        this._list.clear();
	        return this;
	      }
	      return emptyOrderedMap();
	    };

	    OrderedMap.prototype.set = function(k, v) {
	      return updateOrderedMap(this, k, v);
	    };

	    OrderedMap.prototype.remove = function(k) {
	      return updateOrderedMap(this, k, NOT_SET);
	    };

	    OrderedMap.prototype.wasAltered = function() {
	      return this._map.wasAltered() || this._list.wasAltered();
	    };

	    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._list.__iterate(
	        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
	        reverse
	      );
	    };

	    OrderedMap.prototype.__iterator = function(type, reverse) {
	      return this._list.fromEntrySeq().__iterator(type, reverse);
	    };

	    OrderedMap.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      var newList = this._list.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        this._list = newList;
	        return this;
	      }
	      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
	    };


	  function isOrderedMap(maybeOrderedMap) {
	    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
	  }

	  OrderedMap.isOrderedMap = isOrderedMap;

	  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
	  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



	  function makeOrderedMap(map, list, ownerID, hash) {
	    var omap = Object.create(OrderedMap.prototype);
	    omap.size = map ? map.size : 0;
	    omap._map = map;
	    omap._list = list;
	    omap.__ownerID = ownerID;
	    omap.__hash = hash;
	    return omap;
	  }

	  var EMPTY_ORDERED_MAP;
	  function emptyOrderedMap() {
	    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
	  }

	  function updateOrderedMap(omap, k, v) {
	    var map = omap._map;
	    var list = omap._list;
	    var i = map.get(k);
	    var has = i !== undefined;
	    var newMap;
	    var newList;
	    if (v === NOT_SET) { // removed
	      if (!has) {
	        return omap;
	      }
	      if (list.size >= SIZE && list.size >= map.size * 2) {
	        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
	        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
	        if (omap.__ownerID) {
	          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
	        }
	      } else {
	        newMap = map.remove(k);
	        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
	      }
	    } else {
	      if (has) {
	        if (v === list.get(i)[1]) {
	          return omap;
	        }
	        newMap = map;
	        newList = list.set(i, [k, v]);
	      } else {
	        newMap = map.set(k, list.size);
	        newList = list.set(list.size, [k, v]);
	      }
	    }
	    if (omap.__ownerID) {
	      omap.size = newMap.size;
	      omap._map = newMap;
	      omap._list = newList;
	      omap.__hash = undefined;
	      return omap;
	    }
	    return makeOrderedMap(newMap, newList);
	  }

	  createClass(ToKeyedSequence, KeyedSeq);
	    function ToKeyedSequence(indexed, useKeys) {
	      this._iter = indexed;
	      this._useKeys = useKeys;
	      this.size = indexed.size;
	    }

	    ToKeyedSequence.prototype.get = function(key, notSetValue) {
	      return this._iter.get(key, notSetValue);
	    };

	    ToKeyedSequence.prototype.has = function(key) {
	      return this._iter.has(key);
	    };

	    ToKeyedSequence.prototype.valueSeq = function() {
	      return this._iter.valueSeq();
	    };

	    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
	      var reversedSequence = reverseFactory(this, true);
	      if (!this._useKeys) {
	        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
	      }
	      return reversedSequence;
	    };

	    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
	      var mappedSequence = mapFactory(this, mapper, context);
	      if (!this._useKeys) {
	        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
	      }
	      return mappedSequence;
	    };

	    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var ii;
	      return this._iter.__iterate(
	        this._useKeys ?
	          function(v, k)  {return fn(v, k, this$0)} :
	          ((ii = reverse ? resolveSize(this) : 0),
	            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
	        reverse
	      );
	    };

	    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
	      if (this._useKeys) {
	        return this._iter.__iterator(type, reverse);
	      }
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var ii = reverse ? resolveSize(this) : 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
	      });
	    };

	  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(ToIndexedSequence, IndexedSeq);
	    function ToIndexedSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToIndexedSequence.prototype.includes = function(value) {
	      return this._iter.includes(value);
	    };

	    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
	    };

	    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, iterations++, step.value, step)
	      });
	    };



	  createClass(ToSetSequence, SetSeq);
	    function ToSetSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToSetSequence.prototype.has = function(key) {
	      return this._iter.includes(key);
	    };

	    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
	    };

	    ToSetSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, step.value, step.value, step);
	      });
	    };



	  createClass(FromEntriesSequence, KeyedSeq);
	    function FromEntriesSequence(entries) {
	      this._iter = entries;
	      this.size = entries.size;
	    }

	    FromEntriesSequence.prototype.entrySeq = function() {
	      return this._iter.toSeq();
	    };

	    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(entry ) {
	        // Check if entry exists first so array access doesn't throw for holes
	        // in the parent iteration.
	        if (entry) {
	          validateEntry(entry);
	          var indexedIterable = isIterable(entry);
	          return fn(
	            indexedIterable ? entry.get(1) : entry[1],
	            indexedIterable ? entry.get(0) : entry[0],
	            this$0
	          );
	        }
	      }, reverse);
	    };

	    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          // Check if entry exists first so array access doesn't throw for holes
	          // in the parent iteration.
	          if (entry) {
	            validateEntry(entry);
	            var indexedIterable = isIterable(entry);
	            return iteratorValue(
	              type,
	              indexedIterable ? entry.get(0) : entry[0],
	              indexedIterable ? entry.get(1) : entry[1],
	              step
	            );
	          }
	        }
	      });
	    };


	  ToIndexedSequence.prototype.cacheResult =
	  ToKeyedSequence.prototype.cacheResult =
	  ToSetSequence.prototype.cacheResult =
	  FromEntriesSequence.prototype.cacheResult =
	    cacheResultThrough;


	  function flipFactory(iterable) {
	    var flipSequence = makeSequence(iterable);
	    flipSequence._iter = iterable;
	    flipSequence.size = iterable.size;
	    flipSequence.flip = function()  {return iterable};
	    flipSequence.reverse = function () {
	      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
	      reversedSequence.flip = function()  {return iterable.reverse()};
	      return reversedSequence;
	    };
	    flipSequence.has = function(key ) {return iterable.includes(key)};
	    flipSequence.includes = function(key ) {return iterable.has(key)};
	    flipSequence.cacheResult = cacheResultThrough;
	    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
	    }
	    flipSequence.__iteratorUncached = function(type, reverse) {
	      if (type === ITERATE_ENTRIES) {
	        var iterator = iterable.__iterator(type, reverse);
	        return new Iterator(function()  {
	          var step = iterator.next();
	          if (!step.done) {
	            var k = step.value[0];
	            step.value[0] = step.value[1];
	            step.value[1] = k;
	          }
	          return step;
	        });
	      }
	      return iterable.__iterator(
	        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
	        reverse
	      );
	    }
	    return flipSequence;
	  }


	  function mapFactory(iterable, mapper, context) {
	    var mappedSequence = makeSequence(iterable);
	    mappedSequence.size = iterable.size;
	    mappedSequence.has = function(key ) {return iterable.has(key)};
	    mappedSequence.get = function(key, notSetValue)  {
	      var v = iterable.get(key, NOT_SET);
	      return v === NOT_SET ?
	        notSetValue :
	        mapper.call(context, v, key, iterable);
	    };
	    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(
	        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
	        reverse
	      );
	    }
	    mappedSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var key = entry[0];
	        return iteratorValue(
	          type,
	          key,
	          mapper.call(context, entry[1], key, iterable),
	          step
	        );
	      });
	    }
	    return mappedSequence;
	  }


	  function reverseFactory(iterable, useKeys) {
	    var reversedSequence = makeSequence(iterable);
	    reversedSequence._iter = iterable;
	    reversedSequence.size = iterable.size;
	    reversedSequence.reverse = function()  {return iterable};
	    if (iterable.flip) {
	      reversedSequence.flip = function () {
	        var flipSequence = flipFactory(iterable);
	        flipSequence.reverse = function()  {return iterable.flip()};
	        return flipSequence;
	      };
	    }
	    reversedSequence.get = function(key, notSetValue) 
	      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
	    reversedSequence.has = function(key )
	      {return iterable.has(useKeys ? key : -1 - key)};
	    reversedSequence.includes = function(value ) {return iterable.includes(value)};
	    reversedSequence.cacheResult = cacheResultThrough;
	    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
	    };
	    reversedSequence.__iterator =
	      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
	    return reversedSequence;
	  }


	  function filterFactory(iterable, predicate, context, useKeys) {
	    var filterSequence = makeSequence(iterable);
	    if (useKeys) {
	      filterSequence.has = function(key ) {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
	      };
	      filterSequence.get = function(key, notSetValue)  {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
	          v : notSetValue;
	      };
	    }
	    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      }, reverse);
	      return iterations;
	    };
	    filterSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          var key = entry[0];
	          var value = entry[1];
	          if (predicate.call(context, value, key, iterable)) {
	            return iteratorValue(type, useKeys ? key : iterations++, value, step);
	          }
	        }
	      });
	    }
	    return filterSequence;
	  }


	  function countByFactory(iterable, grouper, context) {
	    var groups = Map().asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        0,
	        function(a ) {return a + 1}
	      );
	    });
	    return groups.asImmutable();
	  }


	  function groupByFactory(iterable, grouper, context) {
	    var isKeyedIter = isKeyed(iterable);
	    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
	      );
	    });
	    var coerce = iterableClass(iterable);
	    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
	  }


	  function sliceFactory(iterable, begin, end, useKeys) {
	    var originalSize = iterable.size;

	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      end = end | 0;
	    }

	    if (wholeSlice(begin, end, originalSize)) {
	      return iterable;
	    }

	    var resolvedBegin = resolveBegin(begin, originalSize);
	    var resolvedEnd = resolveEnd(end, originalSize);

	    // begin or end will be NaN if they were provided as negative numbers and
	    // this iterable's size is unknown. In that case, cache first so there is
	    // a known size and these do not resolve to NaN.
	    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
	      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
	    }

	    // Note: resolvedEnd is undefined when the original sequence's length is
	    // unknown and this slice did not supply an end and should contain all
	    // elements after resolvedBegin.
	    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
	    var resolvedSize = resolvedEnd - resolvedBegin;
	    var sliceSize;
	    if (resolvedSize === resolvedSize) {
	      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
	    }

	    var sliceSeq = makeSequence(iterable);

	    // If iterable.size is undefined, the size of the realized sliceSeq is
	    // unknown at this point unless the number of items to slice is 0
	    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

	    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
	      sliceSeq.get = function (index, notSetValue) {
	        index = wrapIndex(this, index);
	        return index >= 0 && index < sliceSize ?
	          iterable.get(index + resolvedBegin, notSetValue) :
	          notSetValue;
	      }
	    }

	    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (sliceSize === 0) {
	        return 0;
	      }
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var skipped = 0;
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k)  {
	        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
	                 iterations !== sliceSize;
	        }
	      });
	      return iterations;
	    };

	    sliceSeq.__iteratorUncached = function(type, reverse) {
	      if (sliceSize !== 0 && reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      // Don't bother instantiating parent iterator if taking 0.
	      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
	      var skipped = 0;
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (skipped++ < resolvedBegin) {
	          iterator.next();
	        }
	        if (++iterations > sliceSize) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (useKeys || type === ITERATE_VALUES) {
	          return step;
	        } else if (type === ITERATE_KEYS) {
	          return iteratorValue(type, iterations - 1, undefined, step);
	        } else {
	          return iteratorValue(type, iterations - 1, step.value[1], step);
	        }
	      });
	    }

	    return sliceSeq;
	  }


	  function takeWhileFactory(iterable, predicate, context) {
	    var takeSequence = makeSequence(iterable);
	    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c) 
	        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
	      );
	      return iterations;
	    };
	    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterating = true;
	      return new Iterator(function()  {
	        if (!iterating) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var k = entry[0];
	        var v = entry[1];
	        if (!predicate.call(context, v, k, this$0)) {
	          iterating = false;
	          return iteratorDone();
	        }
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return takeSequence;
	  }


	  function skipWhileFactory(iterable, predicate, context, useKeys) {
	    var skipSequence = makeSequence(iterable);
	    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      });
	      return iterations;
	    };
	    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var skipping = true;
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step, k, v;
	        do {
	          step = iterator.next();
	          if (step.done) {
	            if (useKeys || type === ITERATE_VALUES) {
	              return step;
	            } else if (type === ITERATE_KEYS) {
	              return iteratorValue(type, iterations++, undefined, step);
	            } else {
	              return iteratorValue(type, iterations++, step.value[1], step);
	            }
	          }
	          var entry = step.value;
	          k = entry[0];
	          v = entry[1];
	          skipping && (skipping = predicate.call(context, v, k, this$0));
	        } while (skipping);
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return skipSequence;
	  }


	  function concatFactory(iterable, values) {
	    var isKeyedIterable = isKeyed(iterable);
	    var iters = [iterable].concat(values).map(function(v ) {
	      if (!isIterable(v)) {
	        v = isKeyedIterable ?
	          keyedSeqFromValue(v) :
	          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
	      } else if (isKeyedIterable) {
	        v = KeyedIterable(v);
	      }
	      return v;
	    }).filter(function(v ) {return v.size !== 0});

	    if (iters.length === 0) {
	      return iterable;
	    }

	    if (iters.length === 1) {
	      var singleton = iters[0];
	      if (singleton === iterable ||
	          isKeyedIterable && isKeyed(singleton) ||
	          isIndexed(iterable) && isIndexed(singleton)) {
	        return singleton;
	      }
	    }

	    var concatSeq = new ArraySeq(iters);
	    if (isKeyedIterable) {
	      concatSeq = concatSeq.toKeyedSeq();
	    } else if (!isIndexed(iterable)) {
	      concatSeq = concatSeq.toSetSeq();
	    }
	    concatSeq = concatSeq.flatten(true);
	    concatSeq.size = iters.reduce(
	      function(sum, seq)  {
	        if (sum !== undefined) {
	          var size = seq.size;
	          if (size !== undefined) {
	            return sum + size;
	          }
	        }
	      },
	      0
	    );
	    return concatSeq;
	  }


	  function flattenFactory(iterable, depth, useKeys) {
	    var flatSequence = makeSequence(iterable);
	    flatSequence.__iterateUncached = function(fn, reverse) {
	      var iterations = 0;
	      var stopped = false;
	      function flatDeep(iter, currentDepth) {var this$0 = this;
	        iter.__iterate(function(v, k)  {
	          if ((!depth || currentDepth < depth) && isIterable(v)) {
	            flatDeep(v, currentDepth + 1);
	          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
	            stopped = true;
	          }
	          return !stopped;
	        }, reverse);
	      }
	      flatDeep(iterable, 0);
	      return iterations;
	    }
	    flatSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(type, reverse);
	      var stack = [];
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (iterator) {
	          var step = iterator.next();
	          if (step.done !== false) {
	            iterator = stack.pop();
	            continue;
	          }
	          var v = step.value;
	          if (type === ITERATE_ENTRIES) {
	            v = v[1];
	          }
	          if ((!depth || stack.length < depth) && isIterable(v)) {
	            stack.push(iterator);
	            iterator = v.__iterator(type, reverse);
	          } else {
	            return useKeys ? step : iteratorValue(type, iterations++, v, step);
	          }
	        }
	        return iteratorDone();
	      });
	    }
	    return flatSequence;
	  }


	  function flatMapFactory(iterable, mapper, context) {
	    var coerce = iterableClass(iterable);
	    return iterable.toSeq().map(
	      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
	    ).flatten(true);
	  }


	  function interposeFactory(iterable, separator) {
	    var interposedSequence = makeSequence(iterable);
	    interposedSequence.size = iterable.size && iterable.size * 2 -1;
	    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k) 
	        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
	        fn(v, iterations++, this$0) !== false},
	        reverse
	      );
	      return iterations;
	    };
	    interposedSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      var step;
	      return new Iterator(function()  {
	        if (!step || iterations % 2) {
	          step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	        }
	        return iterations % 2 ?
	          iteratorValue(type, iterations++, separator) :
	          iteratorValue(type, iterations++, step.value, step);
	      });
	    };
	    return interposedSequence;
	  }


	  function sortFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    var isKeyedIterable = isKeyed(iterable);
	    var index = 0;
	    var entries = iterable.toSeq().map(
	      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
	    ).toArray();
	    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
	      isKeyedIterable ?
	      function(v, i)  { entries[i].length = 2; } :
	      function(v, i)  { entries[i] = v[1]; }
	    );
	    return isKeyedIterable ? KeyedSeq(entries) :
	      isIndexed(iterable) ? IndexedSeq(entries) :
	      SetSeq(entries);
	  }


	  function maxFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    if (mapper) {
	      var entry = iterable.toSeq()
	        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
	        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
	      return entry && entry[0];
	    } else {
	      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
	    }
	  }

	  function maxCompare(comparator, a, b) {
	    var comp = comparator(b, a);
	    // b is considered the new max if the comparator declares them equal, but
	    // they are not equal and b is in fact a nullish value.
	    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
	  }


	  function zipWithFactory(keyIter, zipper, iters) {
	    var zipSequence = makeSequence(keyIter);
	    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
	    // Note: this a generic base implementation of __iterate in terms of
	    // __iterator which may be more generically useful in the future.
	    zipSequence.__iterate = function(fn, reverse) {
	      /* generic:
	      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        iterations++;
	        if (fn(step.value[1], step.value[0], this) === false) {
	          break;
	        }
	      }
	      return iterations;
	      */
	      // indexed:
	      var iterator = this.__iterator(ITERATE_VALUES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        if (fn(step.value, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	    zipSequence.__iteratorUncached = function(type, reverse) {
	      var iterators = iters.map(function(i )
	        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
	      );
	      var iterations = 0;
	      var isDone = false;
	      return new Iterator(function()  {
	        var steps;
	        if (!isDone) {
	          steps = iterators.map(function(i ) {return i.next()});
	          isDone = steps.some(function(s ) {return s.done});
	        }
	        if (isDone) {
	          return iteratorDone();
	        }
	        return iteratorValue(
	          type,
	          iterations++,
	          zipper.apply(null, steps.map(function(s ) {return s.value}))
	        );
	      });
	    };
	    return zipSequence
	  }


	  // #pragma Helper Functions

	  function reify(iter, seq) {
	    return isSeq(iter) ? seq : iter.constructor(seq);
	  }

	  function validateEntry(entry) {
	    if (entry !== Object(entry)) {
	      throw new TypeError('Expected [K, V] tuple: ' + entry);
	    }
	  }

	  function resolveSize(iter) {
	    assertNotInfinite(iter.size);
	    return ensureSize(iter);
	  }

	  function iterableClass(iterable) {
	    return isKeyed(iterable) ? KeyedIterable :
	      isIndexed(iterable) ? IndexedIterable :
	      SetIterable;
	  }

	  function makeSequence(iterable) {
	    return Object.create(
	      (
	        isKeyed(iterable) ? KeyedSeq :
	        isIndexed(iterable) ? IndexedSeq :
	        SetSeq
	      ).prototype
	    );
	  }

	  function cacheResultThrough() {
	    if (this._iter.cacheResult) {
	      this._iter.cacheResult();
	      this.size = this._iter.size;
	      return this;
	    } else {
	      return Seq.prototype.cacheResult.call(this);
	    }
	  }

	  function defaultComparator(a, b) {
	    return a > b ? 1 : a < b ? -1 : 0;
	  }

	  function forceIterator(keyPath) {
	    var iter = getIterator(keyPath);
	    if (!iter) {
	      // Array might not be iterable in this environment, so we need a fallback
	      // to our wrapped type.
	      if (!isArrayLike(keyPath)) {
	        throw new TypeError('Expected iterable or array-like: ' + keyPath);
	      }
	      iter = getIterator(Iterable(keyPath));
	    }
	    return iter;
	  }

	  createClass(Record, KeyedCollection);

	    function Record(defaultValues, name) {
	      var hasInitialized;

	      var RecordType = function Record(values) {
	        if (values instanceof RecordType) {
	          return values;
	        }
	        if (!(this instanceof RecordType)) {
	          return new RecordType(values);
	        }
	        if (!hasInitialized) {
	          hasInitialized = true;
	          var keys = Object.keys(defaultValues);
	          setProps(RecordTypePrototype, keys);
	          RecordTypePrototype.size = keys.length;
	          RecordTypePrototype._name = name;
	          RecordTypePrototype._keys = keys;
	          RecordTypePrototype._defaultValues = defaultValues;
	        }
	        this._map = Map(values);
	      };

	      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
	      RecordTypePrototype.constructor = RecordType;

	      return RecordType;
	    }

	    Record.prototype.toString = function() {
	      return this.__toString(recordName(this) + ' {', '}');
	    };

	    // @pragma Access

	    Record.prototype.has = function(k) {
	      return this._defaultValues.hasOwnProperty(k);
	    };

	    Record.prototype.get = function(k, notSetValue) {
	      if (!this.has(k)) {
	        return notSetValue;
	      }
	      var defaultVal = this._defaultValues[k];
	      return this._map ? this._map.get(k, defaultVal) : defaultVal;
	    };

	    // @pragma Modification

	    Record.prototype.clear = function() {
	      if (this.__ownerID) {
	        this._map && this._map.clear();
	        return this;
	      }
	      var RecordType = this.constructor;
	      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
	    };

	    Record.prototype.set = function(k, v) {
	      if (!this.has(k)) {
	        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
	      }
	      var newMap = this._map && this._map.set(k, v);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.remove = function(k) {
	      if (!this.has(k)) {
	        return this;
	      }
	      var newMap = this._map && this._map.remove(k);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
	    };

	    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
	    };

	    Record.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map && this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return makeRecord(this, newMap, ownerID);
	    };


	  var RecordPrototype = Record.prototype;
	  RecordPrototype[DELETE] = RecordPrototype.remove;
	  RecordPrototype.deleteIn =
	  RecordPrototype.removeIn = MapPrototype.removeIn;
	  RecordPrototype.merge = MapPrototype.merge;
	  RecordPrototype.mergeWith = MapPrototype.mergeWith;
	  RecordPrototype.mergeIn = MapPrototype.mergeIn;
	  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
	  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
	  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  RecordPrototype.setIn = MapPrototype.setIn;
	  RecordPrototype.update = MapPrototype.update;
	  RecordPrototype.updateIn = MapPrototype.updateIn;
	  RecordPrototype.withMutations = MapPrototype.withMutations;
	  RecordPrototype.asMutable = MapPrototype.asMutable;
	  RecordPrototype.asImmutable = MapPrototype.asImmutable;


	  function makeRecord(likeRecord, map, ownerID) {
	    var record = Object.create(Object.getPrototypeOf(likeRecord));
	    record._map = map;
	    record.__ownerID = ownerID;
	    return record;
	  }

	  function recordName(record) {
	    return record._name || record.constructor.name || 'Record';
	  }

	  function setProps(prototype, names) {
	    try {
	      names.forEach(setProp.bind(undefined, prototype));
	    } catch (error) {
	      // Object.defineProperty failed. Probably IE8.
	    }
	  }

	  function setProp(prototype, name) {
	    Object.defineProperty(prototype, name, {
	      get: function() {
	        return this.get(name);
	      },
	      set: function(value) {
	        invariant(this.__ownerID, 'Cannot set on an immutable record.');
	        this.set(name, value);
	      }
	    });
	  }

	  createClass(Set, SetCollection);

	    // @pragma Construction

	    function Set(value) {
	      return value === null || value === undefined ? emptySet() :
	        isSet(value) && !isOrdered(value) ? value :
	        emptySet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    Set.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    Set.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    Set.prototype.toString = function() {
	      return this.__toString('Set {', '}');
	    };

	    // @pragma Access

	    Set.prototype.has = function(value) {
	      return this._map.has(value);
	    };

	    // @pragma Modification

	    Set.prototype.add = function(value) {
	      return updateSet(this, this._map.set(value, true));
	    };

	    Set.prototype.remove = function(value) {
	      return updateSet(this, this._map.remove(value));
	    };

	    Set.prototype.clear = function() {
	      return updateSet(this, this._map.clear());
	    };

	    // @pragma Composition

	    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
	      iters = iters.filter(function(x ) {return x.size !== 0});
	      if (iters.length === 0) {
	        return this;
	      }
	      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
	        return this.constructor(iters[0]);
	      }
	      return this.withMutations(function(set ) {
	        for (var ii = 0; ii < iters.length; ii++) {
	          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
	        }
	      });
	    };

	    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (!iters.every(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (iters.some(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    Set.prototype.merge = function() {
	      return this.union.apply(this, arguments);
	    };

	    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return this.union.apply(this, iters);
	    };

	    Set.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator));
	    };

	    Set.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator, mapper));
	    };

	    Set.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
	    };

	    Set.prototype.__iterator = function(type, reverse) {
	      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
	    };

	    Set.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return this.__make(newMap, ownerID);
	    };


	  function isSet(maybeSet) {
	    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
	  }

	  Set.isSet = isSet;

	  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

	  var SetPrototype = Set.prototype;
	  SetPrototype[IS_SET_SENTINEL] = true;
	  SetPrototype[DELETE] = SetPrototype.remove;
	  SetPrototype.mergeDeep = SetPrototype.merge;
	  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
	  SetPrototype.withMutations = MapPrototype.withMutations;
	  SetPrototype.asMutable = MapPrototype.asMutable;
	  SetPrototype.asImmutable = MapPrototype.asImmutable;

	  SetPrototype.__empty = emptySet;
	  SetPrototype.__make = makeSet;

	  function updateSet(set, newMap) {
	    if (set.__ownerID) {
	      set.size = newMap.size;
	      set._map = newMap;
	      return set;
	    }
	    return newMap === set._map ? set :
	      newMap.size === 0 ? set.__empty() :
	      set.__make(newMap);
	  }

	  function makeSet(map, ownerID) {
	    var set = Object.create(SetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_SET;
	  function emptySet() {
	    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
	  }

	  createClass(OrderedSet, Set);

	    // @pragma Construction

	    function OrderedSet(value) {
	      return value === null || value === undefined ? emptyOrderedSet() :
	        isOrderedSet(value) ? value :
	        emptyOrderedSet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    OrderedSet.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedSet.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    OrderedSet.prototype.toString = function() {
	      return this.__toString('OrderedSet {', '}');
	    };


	  function isOrderedSet(maybeOrderedSet) {
	    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
	  }

	  OrderedSet.isOrderedSet = isOrderedSet;

	  var OrderedSetPrototype = OrderedSet.prototype;
	  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

	  OrderedSetPrototype.__empty = emptyOrderedSet;
	  OrderedSetPrototype.__make = makeOrderedSet;

	  function makeOrderedSet(map, ownerID) {
	    var set = Object.create(OrderedSetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_ORDERED_SET;
	  function emptyOrderedSet() {
	    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
	  }

	  createClass(Stack, IndexedCollection);

	    // @pragma Construction

	    function Stack(value) {
	      return value === null || value === undefined ? emptyStack() :
	        isStack(value) ? value :
	        emptyStack().unshiftAll(value);
	    }

	    Stack.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    Stack.prototype.toString = function() {
	      return this.__toString('Stack [', ']');
	    };

	    // @pragma Access

	    Stack.prototype.get = function(index, notSetValue) {
	      var head = this._head;
	      index = wrapIndex(this, index);
	      while (head && index--) {
	        head = head.next;
	      }
	      return head ? head.value : notSetValue;
	    };

	    Stack.prototype.peek = function() {
	      return this._head && this._head.value;
	    };

	    // @pragma Modification

	    Stack.prototype.push = function(/*...values*/) {
	      if (arguments.length === 0) {
	        return this;
	      }
	      var newSize = this.size + arguments.length;
	      var head = this._head;
	      for (var ii = arguments.length - 1; ii >= 0; ii--) {
	        head = {
	          value: arguments[ii],
	          next: head
	        };
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pushAll = function(iter) {
	      iter = IndexedIterable(iter);
	      if (iter.size === 0) {
	        return this;
	      }
	      assertNotInfinite(iter.size);
	      var newSize = this.size;
	      var head = this._head;
	      iter.reverse().forEach(function(value ) {
	        newSize++;
	        head = {
	          value: value,
	          next: head
	        };
	      });
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pop = function() {
	      return this.slice(1);
	    };

	    Stack.prototype.unshift = function(/*...values*/) {
	      return this.push.apply(this, arguments);
	    };

	    Stack.prototype.unshiftAll = function(iter) {
	      return this.pushAll(iter);
	    };

	    Stack.prototype.shift = function() {
	      return this.pop.apply(this, arguments);
	    };

	    Stack.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._head = undefined;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyStack();
	    };

	    Stack.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      var resolvedBegin = resolveBegin(begin, this.size);
	      var resolvedEnd = resolveEnd(end, this.size);
	      if (resolvedEnd !== this.size) {
	        // super.slice(begin, end);
	        return IndexedCollection.prototype.slice.call(this, begin, end);
	      }
	      var newSize = this.size - resolvedBegin;
	      var head = this._head;
	      while (resolvedBegin--) {
	        head = head.next;
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    // @pragma Mutability

	    Stack.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeStack(this.size, this._head, ownerID, this.__hash);
	    };

	    // @pragma Iteration

	    Stack.prototype.__iterate = function(fn, reverse) {
	      if (reverse) {
	        return this.reverse().__iterate(fn);
	      }
	      var iterations = 0;
	      var node = this._head;
	      while (node) {
	        if (fn(node.value, iterations++, this) === false) {
	          break;
	        }
	        node = node.next;
	      }
	      return iterations;
	    };

	    Stack.prototype.__iterator = function(type, reverse) {
	      if (reverse) {
	        return this.reverse().__iterator(type);
	      }
	      var iterations = 0;
	      var node = this._head;
	      return new Iterator(function()  {
	        if (node) {
	          var value = node.value;
	          node = node.next;
	          return iteratorValue(type, iterations++, value);
	        }
	        return iteratorDone();
	      });
	    };


	  function isStack(maybeStack) {
	    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
	  }

	  Stack.isStack = isStack;

	  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

	  var StackPrototype = Stack.prototype;
	  StackPrototype[IS_STACK_SENTINEL] = true;
	  StackPrototype.withMutations = MapPrototype.withMutations;
	  StackPrototype.asMutable = MapPrototype.asMutable;
	  StackPrototype.asImmutable = MapPrototype.asImmutable;
	  StackPrototype.wasAltered = MapPrototype.wasAltered;


	  function makeStack(size, head, ownerID, hash) {
	    var map = Object.create(StackPrototype);
	    map.size = size;
	    map._head = head;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_STACK;
	  function emptyStack() {
	    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
	  }

	  /**
	   * Contributes additional methods to a constructor
	   */
	  function mixin(ctor, methods) {
	    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
	    Object.keys(methods).forEach(keyCopier);
	    Object.getOwnPropertySymbols &&
	      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
	    return ctor;
	  }

	  Iterable.Iterator = Iterator;

	  mixin(Iterable, {

	    // ### Conversion to other types

	    toArray: function() {
	      assertNotInfinite(this.size);
	      var array = new Array(this.size || 0);
	      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
	      return array;
	    },

	    toIndexedSeq: function() {
	      return new ToIndexedSequence(this);
	    },

	    toJS: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
	      ).__toJS();
	    },

	    toJSON: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
	      ).__toJS();
	    },

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, true);
	    },

	    toMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Map(this.toKeyedSeq());
	    },

	    toObject: function() {
	      assertNotInfinite(this.size);
	      var object = {};
	      this.__iterate(function(v, k)  { object[k] = v; });
	      return object;
	    },

	    toOrderedMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedMap(this.toKeyedSeq());
	    },

	    toOrderedSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Set(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSetSeq: function() {
	      return new ToSetSequence(this);
	    },

	    toSeq: function() {
	      return isIndexed(this) ? this.toIndexedSeq() :
	        isKeyed(this) ? this.toKeyedSeq() :
	        this.toSetSeq();
	    },

	    toStack: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Stack(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toList: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return List(isKeyed(this) ? this.valueSeq() : this);
	    },


	    // ### Common JavaScript methods and properties

	    toString: function() {
	      return '[Iterable]';
	    },

	    __toString: function(head, tail) {
	      if (this.size === 0) {
	        return head + tail;
	      }
	      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    concat: function() {var values = SLICE$0.call(arguments, 0);
	      return reify(this, concatFactory(this, values));
	    },

	    includes: function(searchValue) {
	      return this.some(function(value ) {return is(value, searchValue)});
	    },

	    entries: function() {
	      return this.__iterator(ITERATE_ENTRIES);
	    },

	    every: function(predicate, context) {
	      assertNotInfinite(this.size);
	      var returnValue = true;
	      this.__iterate(function(v, k, c)  {
	        if (!predicate.call(context, v, k, c)) {
	          returnValue = false;
	          return false;
	        }
	      });
	      return returnValue;
	    },

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, true));
	    },

	    find: function(predicate, context, notSetValue) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[1] : notSetValue;
	    },

	    findEntry: function(predicate, context) {
	      var found;
	      this.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          found = [k, v];
	          return false;
	        }
	      });
	      return found;
	    },

	    findLastEntry: function(predicate, context) {
	      return this.toSeq().reverse().findEntry(predicate, context);
	    },

	    forEach: function(sideEffect, context) {
	      assertNotInfinite(this.size);
	      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
	    },

	    join: function(separator) {
	      assertNotInfinite(this.size);
	      separator = separator !== undefined ? '' + separator : ',';
	      var joined = '';
	      var isFirst = true;
	      this.__iterate(function(v ) {
	        isFirst ? (isFirst = false) : (joined += separator);
	        joined += v !== null && v !== undefined ? v.toString() : '';
	      });
	      return joined;
	    },

	    keys: function() {
	      return this.__iterator(ITERATE_KEYS);
	    },

	    map: function(mapper, context) {
	      return reify(this, mapFactory(this, mapper, context));
	    },

	    reduce: function(reducer, initialReduction, context) {
	      assertNotInfinite(this.size);
	      var reduction;
	      var useFirst;
	      if (arguments.length < 2) {
	        useFirst = true;
	      } else {
	        reduction = initialReduction;
	      }
	      this.__iterate(function(v, k, c)  {
	        if (useFirst) {
	          useFirst = false;
	          reduction = v;
	        } else {
	          reduction = reducer.call(context, reduction, v, k, c);
	        }
	      });
	      return reduction;
	    },

	    reduceRight: function(reducer, initialReduction, context) {
	      var reversed = this.toKeyedSeq().reverse();
	      return reversed.reduce.apply(reversed, arguments);
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, true));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, true));
	    },

	    some: function(predicate, context) {
	      return !this.every(not(predicate), context);
	    },

	    sort: function(comparator) {
	      return reify(this, sortFactory(this, comparator));
	    },

	    values: function() {
	      return this.__iterator(ITERATE_VALUES);
	    },


	    // ### More sequential methods

	    butLast: function() {
	      return this.slice(0, -1);
	    },

	    isEmpty: function() {
	      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
	    },

	    count: function(predicate, context) {
	      return ensureSize(
	        predicate ? this.toSeq().filter(predicate, context) : this
	      );
	    },

	    countBy: function(grouper, context) {
	      return countByFactory(this, grouper, context);
	    },

	    equals: function(other) {
	      return deepEqual(this, other);
	    },

	    entrySeq: function() {
	      var iterable = this;
	      if (iterable._cache) {
	        // We cache as an entries array, so we can just return the cache!
	        return new ArraySeq(iterable._cache);
	      }
	      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
	      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
	      return entriesSequence;
	    },

	    filterNot: function(predicate, context) {
	      return this.filter(not(predicate), context);
	    },

	    findLast: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
	    },

	    first: function() {
	      return this.find(returnTrue);
	    },

	    flatMap: function(mapper, context) {
	      return reify(this, flatMapFactory(this, mapper, context));
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, true));
	    },

	    fromEntrySeq: function() {
	      return new FromEntriesSequence(this);
	    },

	    get: function(searchKey, notSetValue) {
	      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
	    },

	    getIn: function(searchKeyPath, notSetValue) {
	      var nested = this;
	      // Note: in an ES6 environment, we would prefer:
	      // for (var key of searchKeyPath) {
	      var iter = forceIterator(searchKeyPath);
	      var step;
	      while (!(step = iter.next()).done) {
	        var key = step.value;
	        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
	        if (nested === NOT_SET) {
	          return notSetValue;
	        }
	      }
	      return nested;
	    },

	    groupBy: function(grouper, context) {
	      return groupByFactory(this, grouper, context);
	    },

	    has: function(searchKey) {
	      return this.get(searchKey, NOT_SET) !== NOT_SET;
	    },

	    hasIn: function(searchKeyPath) {
	      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
	    },

	    isSubset: function(iter) {
	      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
	      return this.every(function(value ) {return iter.includes(value)});
	    },

	    isSuperset: function(iter) {
	      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
	      return iter.isSubset(this);
	    },

	    keySeq: function() {
	      return this.toSeq().map(keyMapper).toIndexedSeq();
	    },

	    last: function() {
	      return this.toSeq().reverse().first();
	    },

	    max: function(comparator) {
	      return maxFactory(this, comparator);
	    },

	    maxBy: function(mapper, comparator) {
	      return maxFactory(this, comparator, mapper);
	    },

	    min: function(comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
	    },

	    minBy: function(mapper, comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
	    },

	    rest: function() {
	      return this.slice(1);
	    },

	    skip: function(amount) {
	      return this.slice(Math.max(0, amount));
	    },

	    skipLast: function(amount) {
	      return reify(this, this.toSeq().reverse().skip(amount).reverse());
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, true));
	    },

	    skipUntil: function(predicate, context) {
	      return this.skipWhile(not(predicate), context);
	    },

	    sortBy: function(mapper, comparator) {
	      return reify(this, sortFactory(this, comparator, mapper));
	    },

	    take: function(amount) {
	      return this.slice(0, Math.max(0, amount));
	    },

	    takeLast: function(amount) {
	      return reify(this, this.toSeq().reverse().take(amount).reverse());
	    },

	    takeWhile: function(predicate, context) {
	      return reify(this, takeWhileFactory(this, predicate, context));
	    },

	    takeUntil: function(predicate, context) {
	      return this.takeWhile(not(predicate), context);
	    },

	    valueSeq: function() {
	      return this.toIndexedSeq();
	    },


	    // ### Hashable Object

	    hashCode: function() {
	      return this.__hash || (this.__hash = hashIterable(this));
	    }


	    // ### Internal

	    // abstract __iterate(fn, reverse)

	    // abstract __iterator(type, reverse)
	  });

	  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  var IterablePrototype = Iterable.prototype;
	  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
	  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
	  IterablePrototype.__toJS = IterablePrototype.toArray;
	  IterablePrototype.__toStringMapper = quoteString;
	  IterablePrototype.inspect =
	  IterablePrototype.toSource = function() { return this.toString(); };
	  IterablePrototype.chain = IterablePrototype.flatMap;
	  IterablePrototype.contains = IterablePrototype.includes;

	  // Temporary warning about using length
	  (function () {
	    try {
	      Object.defineProperty(IterablePrototype, 'length', {
	        get: function () {
	          if (!Iterable.noLengthWarning) {
	            var stack;
	            try {
	              throw new Error();
	            } catch (error) {
	              stack = error.stack;
	            }
	            if (stack.indexOf('_wrapObject') === -1) {
	              console && console.warn && console.warn(
	                'iterable.length has been deprecated, '+
	                'use iterable.size or iterable.count(). '+
	                'This warning will become a silent error in a future version. ' +
	                stack
	              );
	              return this.size;
	            }
	          }
	        }
	      });
	    } catch (e) {}
	  })();



	  mixin(KeyedIterable, {

	    // ### More sequential methods

	    flip: function() {
	      return reify(this, flipFactory(this));
	    },

	    findKey: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry && entry[0];
	    },

	    findLastKey: function(predicate, context) {
	      return this.toSeq().reverse().findKey(predicate, context);
	    },

	    keyOf: function(searchValue) {
	      return this.findKey(function(value ) {return is(value, searchValue)});
	    },

	    lastKeyOf: function(searchValue) {
	      return this.findLastKey(function(value ) {return is(value, searchValue)});
	    },

	    mapEntries: function(mapper, context) {var this$0 = this;
	      var iterations = 0;
	      return reify(this,
	        this.toSeq().map(
	          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
	        ).fromEntrySeq()
	      );
	    },

	    mapKeys: function(mapper, context) {var this$0 = this;
	      return reify(this,
	        this.toSeq().flip().map(
	          function(k, v)  {return mapper.call(context, k, v, this$0)}
	        ).flip()
	      );
	    }

	  });

	  var KeyedIterablePrototype = KeyedIterable.prototype;
	  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
	  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
	  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
	  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



	  mixin(IndexedIterable, {

	    // ### Conversion to other types

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, false);
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, false));
	    },

	    findIndex: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },

	    indexOf: function(searchValue) {
	      var key = this.toKeyedSeq().keyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },

	    lastIndexOf: function(searchValue) {
	      var key = this.toKeyedSeq().reverse().keyOf(searchValue);
	      return key === undefined ? -1 : key;

	      // var index =
	      // return this.toSeq().reverse().indexOf(searchValue);
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, false));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, false));
	    },

	    splice: function(index, removeNum /*, ...values*/) {
	      var numArgs = arguments.length;
	      removeNum = Math.max(removeNum | 0, 0);
	      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
	        return this;
	      }
	      // If index is negative, it should resolve relative to the size of the
	      // collection. However size may be expensive to compute if not cached, so
	      // only call count() if the number is in fact negative.
	      index = resolveBegin(index, index < 0 ? this.count() : this.size);
	      var spliced = this.slice(0, index);
	      return reify(
	        this,
	        numArgs === 1 ?
	          spliced :
	          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
	      );
	    },


	    // ### More collection methods

	    findLastIndex: function(predicate, context) {
	      var key = this.toKeyedSeq().findLastKey(predicate, context);
	      return key === undefined ? -1 : key;
	    },

	    first: function() {
	      return this.get(0);
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, false));
	    },

	    get: function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      return (index < 0 || (this.size === Infinity ||
	          (this.size !== undefined && index > this.size))) ?
	        notSetValue :
	        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
	    },

	    has: function(index) {
	      index = wrapIndex(this, index);
	      return index >= 0 && (this.size !== undefined ?
	        this.size === Infinity || index < this.size :
	        this.indexOf(index) !== -1
	      );
	    },

	    interpose: function(separator) {
	      return reify(this, interposeFactory(this, separator));
	    },

	    interleave: function(/*...iterables*/) {
	      var iterables = [this].concat(arrCopy(arguments));
	      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
	      var interleaved = zipped.flatten(true);
	      if (zipped.size) {
	        interleaved.size = zipped.size * iterables.length;
	      }
	      return reify(this, interleaved);
	    },

	    last: function() {
	      return this.get(-1);
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, false));
	    },

	    zip: function(/*, ...iterables */) {
	      var iterables = [this].concat(arrCopy(arguments));
	      return reify(this, zipWithFactory(this, defaultZipper, iterables));
	    },

	    zipWith: function(zipper/*, ...iterables */) {
	      var iterables = arrCopy(arguments);
	      iterables[0] = this;
	      return reify(this, zipWithFactory(this, zipper, iterables));
	    }

	  });

	  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
	  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



	  mixin(SetIterable, {

	    // ### ES6 Collection methods (ES6 Array and Map)

	    get: function(value, notSetValue) {
	      return this.has(value) ? value : notSetValue;
	    },

	    includes: function(value) {
	      return this.has(value);
	    },


	    // ### More sequential methods

	    keySeq: function() {
	      return this.valueSeq();
	    }

	  });

	  SetIterable.prototype.has = IterablePrototype.includes;


	  // Mixin subclasses

	  mixin(KeyedSeq, KeyedIterable.prototype);
	  mixin(IndexedSeq, IndexedIterable.prototype);
	  mixin(SetSeq, SetIterable.prototype);

	  mixin(KeyedCollection, KeyedIterable.prototype);
	  mixin(IndexedCollection, IndexedIterable.prototype);
	  mixin(SetCollection, SetIterable.prototype);


	  // #pragma Helper functions

	  function keyMapper(v, k) {
	    return k;
	  }

	  function entryMapper(v, k) {
	    return [k, v];
	  }

	  function not(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    }
	  }

	  function neg(predicate) {
	    return function() {
	      return -predicate.apply(this, arguments);
	    }
	  }

	  function quoteString(value) {
	    return typeof value === 'string' ? JSON.stringify(value) : value;
	  }

	  function defaultZipper() {
	    return arrCopy(arguments);
	  }

	  function defaultNegComparator(a, b) {
	    return a < b ? 1 : a > b ? -1 : 0;
	  }

	  function hashIterable(iterable) {
	    if (iterable.size === Infinity) {
	      return 0;
	    }
	    var ordered = isOrdered(iterable);
	    var keyed = isKeyed(iterable);
	    var h = ordered ? 1 : 0;
	    var size = iterable.__iterate(
	      keyed ?
	        ordered ?
	          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
	          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
	        ordered ?
	          function(v ) { h = 31 * h + hash(v) | 0; } :
	          function(v ) { h = h + hash(v) | 0; }
	    );
	    return murmurHashOfSize(size, h);
	  }

	  function murmurHashOfSize(size, h) {
	    h = imul(h, 0xCC9E2D51);
	    h = imul(h << 15 | h >>> -15, 0x1B873593);
	    h = imul(h << 13 | h >>> -13, 5);
	    h = (h + 0xE6546B64 | 0) ^ size;
	    h = imul(h ^ h >>> 16, 0x85EBCA6B);
	    h = imul(h ^ h >>> 13, 0xC2B2AE35);
	    h = smi(h ^ h >>> 16);
	    return h;
	  }

	  function hashMerge(a, b) {
	    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
	  }

	  var Immutable = {

	    Iterable: Iterable,

	    Seq: Seq,
	    Collection: Collection,
	    Map: Map,
	    OrderedMap: OrderedMap,
	    List: List,
	    Stack: Stack,
	    Set: Set,
	    OrderedSet: OrderedSet,

	    Record: Record,
	    Range: Range,
	    Repeat: Repeat,

	    is: is,
	    fromJS: fromJS

	  };

	  return Immutable;

	}));

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var QuickStartDescription = __webpack_require__(63);
	var ReactPlayground = __webpack_require__(66);
	//this leads to Row is undefined?
	var Row = __webpack_require__(123).Row;

	var SimpleExample = '\n\n//helper to generate a random date\nfunction randomDate(start, end) {\n  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();\n};\n\nvar _rows = [];\nfor (var i = 1; i < 1000; i++) {\n  _rows.push({\n    id: i,\n    task: \'Task \' + i,\n    complete: Math.min(100, Math.round(Math.random() * 110)),\n    priority : [\'Critical\', \'High\', \'Medium\', \'Low\'][Math.floor((Math.random() * 3) + 1)],\n    issueType : [\'Bug\', \'Improvement\', \'Epic\', \'Story\'][Math.floor((Math.random() * 3) + 1)],\n    startDate: randomDate(new Date(2015, 3, 1), new Date()),\n    completeDate: randomDate(new Date(), new Date(2016, 0, 1))\n  });\n};\n\n//function to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n\n//Columns definition\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\',\n  locked : true\n},\n{\n  key: \'task\',\n  name: \'Title\',\n  width: 200\n},\n{\n  key: \'priority\',\n  name: \'Priority\',\n  width: 200\n},\n{\n  key: \'issueType\',\n  name: \'Issue Type\',\n  width: 200\n},\n{\n  key: \'complete\',\n  name: \'% Complete\',\n  width: 200\n},\n{\n  key: \'startDate\',\n  name: \'Start Date\',\n  width: 200\n},\n{\n  key: \'completeDate\',\n  name: \'Expected Complete\',\n  width: 200\n},\n{\n  key: \'completeDate\',\n  name: \'Expected Complete\',\n  width: 200\n}\n]\n\n\n\n\nvar RowRenderer = React.createClass({\n  setScrollLeft: function(scrollBy) {\n    //if you want freeze columns to work, you need to make sure you implement this as apass through\n    this.refs.row.setScrollLeft(scrollBy);\n  },\n getRowStyle: function() {\n   return {\n     backgroundColor: this.getRowBackground()\n   }\n },\n getRowBackground: function() {\n   return this.props.idx % 2 ?  \'green\' : \'white\'\n },\n render: function() {\n   //here we are just changing the style\n   //but we could replace this with anything we liked, cards, images, etc\n   //usually though it will just be a matter of wrapping a div, and then calling back through to the grid\n   return (<div style={this.getRowStyle()}><ReactDataGrid.Row ref="row" {...this.props}/></div>)\n }\n});\n\nvar Example = React.createClass({\n  render: function() {\n    return  (<ReactDataGrid\n    columns={columns}\n    rowGetter={rowGetter}\n    rowsCount={_rows.length}\n    minHeight={500}\n    rowRenderer={RowRenderer}/>);\n  }\n});\nReactDOM.render(<Example />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Overriding the row renderer'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'This shows how you can easily override the default row renderer'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'Here we are just using that to wrap the default renderer, and then going back into the \'normal\' flow, just changing some backgrounds'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'NOTE: if you want to use fixed columns as well, make sure you implement and pass through the call to setScrollLeft'
	      ),
	      React.createElement(ReactPlayground, { codeText: SimpleExample })
	    );
	  }

	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _Object$assign2=__webpack_require__(69)['default'];var _Symbol=__webpack_require__(84)['default'];var _Object$keys2=__webpack_require__(105)['default'];var _Object$setPrototypeOf2=__webpack_require__(109)['default'];(function webpackUniversalModuleDefinition(root,factory){if(true)module.exports = factory(__webpack_require__(1),__webpack_require__(2));else if(typeof define === 'function' && define.amd)define(["react","react-dom"],factory);else if(typeof exports === 'object')exports["ReactDataGrid"] = factory(require("react"),require("react-dom"));else root["ReactDataGrid"] = factory(root["React"],root["ReactDOM"]);})(undefined,function(__WEBPACK_EXTERNAL_MODULE_18__,__WEBPACK_EXTERNAL_MODULE_19__){return  (/******/(function(modules){ // webpackBootstrap
	/******/ // The module cache
	/******/var installedModules={}; /******/ // The require function
	/******/function __webpack_require__(moduleId){ /******/ // Check if module is in cache
	/******/if(installedModules[moduleId]) /******/return installedModules[moduleId].exports; /******/ // Create a new module (and put it into the cache)
	/******/var module=installedModules[moduleId] = { /******/exports:{}, /******/id:moduleId, /******/loaded:false /******/}; /******/ // Execute the module function
	/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__); /******/ // Flag the module as loaded
	/******/module.loaded = true; /******/ // Return the exports of the module
	/******/return module.exports; /******/} /******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules; /******/ // expose the module cache
	/******/__webpack_require__.c = installedModules; /******/ // __webpack_public_path__
	/******/__webpack_require__.p = ""; /******/ // Load entry module and return exports
	/******/return __webpack_require__(0); /******/})( /************************************************************************/ /******/[ /* 0 */function(module,exports,__webpack_require__){'use strict';module.exports = __webpack_require__(1);module.exports.Editors = __webpack_require__(74);module.exports.Formatters = __webpack_require__(76);module.exports.Toolbar = __webpack_require__(78);module.exports.Row = __webpack_require__(48); /***/}, /* 1 */function(module,exports,__webpack_require__){"use strict";var _extends=__webpack_require__(2)['default'];var React=__webpack_require__(18);var ReactDOM=__webpack_require__(19);var uncontrollable=__webpack_require__(20);var BaseGrid=__webpack_require__(25);var KeyboardHandlerMixin=__webpack_require__(52);var CheckboxEditor=__webpack_require__(70);var FilterableHeaderCell=__webpack_require__(71);var DOMMetrics=__webpack_require__(68);var ColumnMetricsMixin=__webpack_require__(72);var RowUtils=__webpack_require__(73);var ColumnUtils=__webpack_require__(31);var SORT_TYPES=__webpack_require__(33).SORT;var notify=function notify(handler){for(var _len=arguments.length,args=Array(_len > 1?_len - 1:0),_key=1;_key < _len;_key++) {args[_key - 1] = arguments[_key];}return handler && handler.apply(undefined,args);};var ReactDataGrid=React.createClass({displayName:'ReactDataGrid',propTypes:{rowHeight:React.PropTypes.number.isRequired,headerRowHeight:React.PropTypes.number,minHeight:React.PropTypes.number.isRequired,minWidth:React.PropTypes.number,enableCellSelect:React.PropTypes.bool,enableRowSelect:React.PropTypes.bool, /**
		     * A column definition for the "select row" cell
		     */selectRowColumn:React.PropTypes.object,selectRowIndex:React.PropTypes.number,onRowUpdated:React.PropTypes.func,rowGetter:React.PropTypes.func.isRequired,rowsCount:React.PropTypes.number.isRequired,toolbar:React.PropTypes.element,columns:React.PropTypes.oneOfType([React.PropTypes.object,React.PropTypes.array]).isRequired,sortType:React.PropTypes.oneOf(['simple','multiple']),onFilter:React.PropTypes.func,onGridSort:React.PropTypes.func,onSelectRow:React.PropTypes.func,onSelectCell:React.PropTypes.func,onCellCopyPaste:React.PropTypes.func,onCellsDragged:React.PropTypes.func,onAddFilter:React.PropTypes.func},mixins:[ColumnMetricsMixin,DOMMetrics.MetricsComputatorMixin,KeyboardHandlerMixin],getDefaultProps:function getDefaultProps(){return {enableCellSelect:false,tabIndex:-1,rowHeight:35,enableRowSelect:false,minHeight:350,sortType:'simple',selectedRows:[]};},getInitialState:function getInitialState(){var columnMetrics=this.createColumnMetrics();var initialState=_extends({columnMetrics:columnMetrics},this.getSelectedState(this.props),{copied:null,expandedRows:[],canFilter:false,columnFilters:{},dragged:null,scrollOffset:0});return initialState;},componentWillReceiveProps:function componentWillReceiveProps(nextProps){this.setState(this.getSelectedState(nextProps));if(nextProps.rowsCount === this.props.rowsCount + 1){this.onAfterAddRow(nextProps.rowsCount + 1);}},getSelectedState:function getSelectedState(props){var active=props.active;var _props$selectedCell=props.selectedCell;_props$selectedCell = _props$selectedCell === undefined?[0,0]:_props$selectedCell;var idx=_props$selectedCell[0];var rowIdx=_props$selectedCell[1];if(!this.props.enableCellSelect)idx = rowIdx = -1;var selected={idx:idx,rowIdx:rowIdx,active:!!active};if(active && active !== true)selected.initialKeyCode = active;return {selected:selected};},componentDidMount:function componentDidMount(){var scrollOffset=0;var canvas=ReactDOM.findDOMNode(this).querySelector('.react-grid-Canvas');if(canvas != null){scrollOffset = canvas.offsetWidth - canvas.clientWidth;}this.setState({scrollOffset:scrollOffset});},render:function render(){var cellMetaData={selected:this.state.selected,dragged:this.state.dragged,onCellClick:this.onCellClick,onCellDoubleClick:this.onCellDoubleClick,onCommit:this.onCellCommit,onCommitCancel:this.setInactive,copied:this.state.copied,handleDragEnterRow:this.handleDragEnter,handleTerminateDrag:this.handleTerminateDrag};var toolbar=this.renderToolbar();var containerWidth=this.props.minWidth || this.DOMMetrics.gridWidth();var gridWidth=containerWidth - this.state.scrollOffset; //if NaN without coercion
	if(gridWidth !== gridWidth)gridWidth = 0;return React.createElement('div',{className:'react-grid-Container',style:{width:containerWidth}},toolbar,React.createElement('div',{className:'react-grid-Main'},React.createElement(BaseGrid,_extends({ref:'base'},this.props,{headerRows:this.getHeaderRows(),columnMetrics:this.state.columnMetrics,rowGetter:this.props.rowGetter,rowsCount:this.props.rowsCount,rowHeight:this.props.rowHeight,cellMetaData:cellMetaData,selectedRows:this.props.selectedRows,expandedRows:this.state.expandedRows,rowOffsetHeight:this.getRowOffsetHeight(),sortInfo:this.props.sortInfo,onSort:this.handleSort,minHeight:this.props.minHeight,totalWidth:gridWidth,onViewportKeydown:this.onKeyDown,onViewportDragStart:this.onDragStart,onViewportDragEnd:this.handleDragEnd,onViewportDoubleClick:this.onViewportDoubleClick,onColumnResize:this.onColumnResize}))));},renderToolbar:function renderToolbar(){var Toolbar=this.props.toolbar;if(React.isValidElement(Toolbar)){return React.cloneElement(Toolbar,{onToggleFilter:this.onToggleFilter,numberOfRows:this.props.rowsCount});}},focus:function focus(){this.refs.base.focus();},onSelect:function onSelect(selected){var old=this.state.selected;if(this.props.enableCellSelect){if(!(old.rowIdx === selected.rowIdx && old.idx === selected.idx && old.active === true)){var idx=selected.idx;var rowIdx=selected.rowIdx;if(idx >= 0 && rowIdx >= 0 && idx < ColumnUtils.getSize(this.state.columnMetrics.columns) && rowIdx < this.props.rowsCount){this.setInactive();notify(this.props.onSelectCell,[idx,rowIdx],[old.idx,old.rowIdx]);}}}},onCellClick:function onCellClick(cell){this.onSelect({rowIdx:cell.rowIdx,idx:cell.idx});},onCellDoubleClick:function onCellDoubleClick(cell){this.onSelect({rowIdx:cell.rowIdx,idx:cell.idx});this.setActive('Enter');},onViewportDoubleClick:function onViewportDoubleClick(){this.setActive();},onPressArrowUp:function onPressArrowUp(e){this.moveSelectedCell(e,-1,0);},onPressArrowDown:function onPressArrowDown(e){this.moveSelectedCell(e,1,0);},onPressArrowLeft:function onPressArrowLeft(e){this.moveSelectedCell(e,0,-1);},onPressArrowRight:function onPressArrowRight(e){this.moveSelectedCell(e,0,1);},onPressTab:function onPressTab(e){this.moveSelectedCell(e,0,e.shiftKey?-1:1);},onPressEnter:function onPressEnter(e){this.setActive(e.key);},onPressDelete:function onPressDelete(e){this.setActive(e.key);},onPressEscape:function onPressEscape(e){if(this.isActive()){this.setInactive(e.key);}else if(this.state.copied){this.setState({copied:null});}},onPressBackspace:function onPressBackspace(e){this.setActive(e.key);},onPressChar:function onPressChar(e){if(this.isKeyPrintable(e.keyCode)){this.setActive(e.keyCode);}},onPressKeyWithCtrl:function onPressKeyWithCtrl(e){var keys={KeyCode_c:99,KeyCode_C:67,KeyCode_V:86,KeyCode_v:118};var _state$selected=this.state.selected;var rowIdx=_state$selected.rowIdx;var idx=_state$selected.idx;if(this.canEdit(idx,rowIdx)){if(e.keyCode == keys.KeyCode_c || e.keyCode == keys.KeyCode_C){var value=this.getSelectedValue();this.handleCopy({value:value});}else if(e.keyCode == keys.KeyCode_v || e.keyCode == keys.KeyCode_V){this.handlePaste();}}},onDragStart:function onDragStart(e){var value=this.getSelectedValue();this.handleDragStart({idx:this.state.selected.idx,rowIdx:this.state.selected.rowIdx,value:value}); //need to set dummy data for FF
	if(e && e.dataTransfer && e.dataTransfer.setData)e.dataTransfer.setData('text/plain','dummy');},moveSelectedCell:function moveSelectedCell(e,rowDelta,cellDelta){ // we need to prevent default as we control grid scroll
	// otherwise it moves every time you left/right which is janky
	e && e.preventDefault();var rowIdx=this.state.selected.rowIdx + rowDelta;var idx=this.state.selected.idx + cellDelta;this.onSelect({idx:idx,rowIdx:rowIdx});},getSelectedValue:function getSelectedValue(){var rowIdx=this.state.selected.rowIdx;var idx=this.state.selected.idx;var cellKey=this.getColumn(idx).key;var row=this.props.rowGetter(rowIdx);return RowUtils.get(row,cellKey);},setActive:function setActive(keyPressed){var _state$selected2=this.state.selected;var rowIdx=_state$selected2.rowIdx;var idx=_state$selected2.idx;if(this.canEdit(idx,rowIdx) && !this.isActive()){notify(this.props.onActive,keyPressed || true);}},setInactive:function setInactive(){if(this.isActive()){notify(this.props.onActive,false);}},canEdit:function canEdit(idx,rowIdx){var col=this.getColumn(idx);var row=this.props.rowGetter(rowIdx);if(this.props.enableCellSelect === true){if(col.editable === false)return false;if(col.editable === true)return true;if(typeof col.editable === 'function')return col.editable(row,rowIdx);return col.editor != null;}},copy:function copy(){var _state$selected3=this.state.selected;var idx=_state$selected3.idx;var rowIdx=_state$selected3.rowIdx;if(this.canEdit(idx,rowIdx)){this.handleCopy({value:this.getSelectedValue()});}},paste:function paste(){var _state$selected4=this.state.selected;var idx=_state$selected4.idx;var rowIdx=_state$selected4.rowIdx;if(this.canEdit(idx,rowIdx)){this.handlePaste();}},isActive:function isActive(){return this.state.selected.active === true;},onCellCommit:function onCellCommit(commit){this.setInactive();if(commit.key === 'Tab'){this.moveSelectedCell(null,0,1);}this.props.onRowUpdated(commit);},setupGridColumns:function setupGridColumns(){var props=arguments.length <= 0 || arguments[0] === undefined?this.props:arguments[0];var cols=props.columns.slice(0),idx=props.selectRowIndex || 0;if(props.enableRowSelect){var userProps=props.selectRowColumn;var selectColumn=_extends({formatter:React.createElement(CheckboxEditor,null),filterable:false,headerRenderer:React.createElement('input',{type:'checkbox',onChange:this.handleCheckboxChange}),width:40,locked:true},userProps,{onCellChange:this.handleRowSelect,key:'select-row',name:''});cols.splice(idx,0,selectColumn);}return cols;},handleCheckboxChange:function handleCheckboxChange(e){var selectedRows=[];if(e.currentTarget instanceof HTMLInputElement && e.currentTarget.checked === true){for(var i=0;i < this.props.rowsCount;i++) {selectedRows.push(this.props.rowGetter(i));}}this.props.onSelectRow(selectedRows);}, // columnKey not used here as this function will select the whole row,
	// but needed to match the function signature in the CheckboxEditor
	handleRowSelect:function handleRowSelect(rowIdx,columnKey,e){var selectedRows=this.props.selectedRows.slice();e.stopPropagation();var row=this.props.rowGetter(rowIdx),idx=selectedRows.indexOf(row);if(idx !== -1){selectedRows.splice(idx,1);}else {selectedRows.push(row);}this.props.onSelectRow(selectedRows);},onAfterAddRow:function onAfterAddRow(numberOfRows){var selected=this.state.selected;notify(this.props.onSelectCell,[0,numberOfRows - 2],[selected.idx,selected.rowIdx]);},onToggleFilter:function onToggleFilter(){this.setState({canFilter:!this.state.canFilter});},getHeaderRows:function getHeaderRows(){var rows=[{ref:'row',height:this.props.headerRowHeight || this.props.rowHeight}];if(this.state.canFilter === true){rows.push({ref:'filterRow',headerCellRenderer:React.createElement(FilterableHeaderCell,{onChange:this.props.onAddFilter,column:this.props.column}),height:45});}return rows;},getRowOffsetHeight:function getRowOffsetHeight(){var offsetHeight=0;this.getHeaderRows().forEach(function(row){return offsetHeight += parseFloat(row.height,10);});return offsetHeight;},handleSort:function handleSort(columnKey,direction){var _props=this.props;var sortInfo=_props.sortInfo;var sortType=_props.sortType;var existing=(sortInfo || {})[columnKey];if(existing && existing === direction || !existing && direction === SORT_TYPES.NONE){return;}sortInfo = sortType === 'simple'?{}:_extends({},sortInfo);if(direction === SORT_TYPES.NONE && sortInfo[columnKey])delete sortInfo[columnKey];else sortInfo[columnKey] = direction;this.props.onGridSort && this.props.onGridSort(sortInfo);},copyPasteEnabled:function copyPasteEnabled(){return this.props.onCellCopyPaste !== null;},handleCopy:function handleCopy(_ref){var value=_ref.value;if(!this.copyPasteEnabled())return;var textToCopy=value;var selected=this.state.selected;var copied={idx:selected.idx,rowIdx:selected.rowIdx};this.setState({textToCopy:textToCopy,copied:copied});},handlePaste:function handlePaste(){var selected=this.state.selected;if(!this.copyPasteEnabled())return;var fromKey=this.getColumn(this.state.copied.idx).key;var toKey=this.getColumn(selected.idx).key;if(this.props.onCellCopyPaste){this.props.onCellCopyPaste({cellKey:toKey,rowIdx:selected.rowIdx,value:this.state.textToCopy,fromColumn:fromKey,fromRow:this.state.copied.rowIdx,toRow:selected.rowIdx,toColumn:toKey});}this.setState({copied:null});},dragEnabled:function dragEnabled(){return this.props.onCellsDragged !== null;},handleDragStart:function handleDragStart(dragged){if(!this.dragEnabled()){return;}var idx=dragged.idx;var rowIdx=dragged.rowIdx;if(idx >= 0 && rowIdx >= 0 && idx < this.getSize() && rowIdx < this.props.rowsCount){this.setState({dragged:dragged});}},handleDragEnter:function handleDragEnter(row){if(!this.dragEnabled())return;var dragged=this.state.dragged;dragged.overRowIdx = row;this.setState({dragged:dragged});},handleDragEnd:function handleDragEnd(){if(!this.dragEnabled())return;var fromRow,toRow;var selected=this.state.selected;var dragged=this.state.dragged;var cellKey=this.getColumn(this.state.selected.idx).key;fromRow = selected.rowIdx;toRow = dragged.overRowIdx;if(this.props.onCellsDragged){this.props.onCellsDragged({cellKey:cellKey,fromRow:fromRow,toRow:toRow,value:dragged.value});}this.setState({dragged:{complete:true}});},handleTerminateDrag:function handleTerminateDrag(){if(!this.dragEnabled()){return;}this.setState({dragged:null});}});module.exports = uncontrollable(ReactDataGrid,{active:'onActive',selectedCell:'onSelectCell',selectedRows:'onSelectRow',sortInfo:'onGridSort'},['focus','copy','paste']); /***/}, /* 2 */function(module,exports,__webpack_require__){"use strict";var _Object$assign=__webpack_require__(3)["default"];exports["default"] = _Object$assign || function(target){for(var i=1;i < arguments.length;i++) {var source=arguments[i];for(var key in source) {if(Object.prototype.hasOwnProperty.call(source,key)){target[key] = source[key];}}}return target;};exports.__esModule = true; /***/}, /* 3 */function(module,exports,__webpack_require__){module.exports = {"default":__webpack_require__(4),__esModule:true}; /***/}, /* 4 */function(module,exports,__webpack_require__){__webpack_require__(5);module.exports = __webpack_require__(8).Object.assign; /***/}, /* 5 */function(module,exports,__webpack_require__){ // 19.1.3.1 Object.assign(target, source)
	var $export=__webpack_require__(6);$export($export.S + $export.F,'Object',{assign:__webpack_require__(11)}); /***/}, /* 6 */function(module,exports,__webpack_require__){var global=__webpack_require__(7),core=__webpack_require__(8),ctx=__webpack_require__(9),PROTOTYPE='prototype';var $export=function $export(type,name,source){var IS_FORCED=type & $export.F,IS_GLOBAL=type & $export.G,IS_STATIC=type & $export.S,IS_PROTO=type & $export.P,IS_BIND=type & $export.B,IS_WRAP=type & $export.W,exports=IS_GLOBAL?core:core[name] || (core[name] = {}),target=IS_GLOBAL?global:IS_STATIC?global[name]:(global[name] || {})[PROTOTYPE],key,own,out;if(IS_GLOBAL)source = name;for(key in source) { // contains in native
	own = !IS_FORCED && target && key in target;if(own && key in exports)continue; // export native or passed
	out = own?target[key]:source[key]; // prevent global pollution for namespaces
	exports[key] = IS_GLOBAL && typeof target[key] != 'function'?source[key] // bind timers to global for call from export context
	:IS_BIND && own?ctx(out,global) // wrap global constructors for prevent change them in library
	:IS_WRAP && target[key] == out?(function(C){var F=function F(param){return this instanceof C?new C(param):C(param);};F[PROTOTYPE] = C[PROTOTYPE];return F; // make static versions for prototype methods
	})(out):IS_PROTO && typeof out == 'function'?ctx(Function.call,out):out;if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;}}; // type bitmap
	$export.F = 1; // forced
	$export.G = 2; // global
	$export.S = 4; // static
	$export.P = 8; // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export; /***/}, /* 7 */function(module,exports){ // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global=module.exports = typeof window != 'undefined' && window.Math == Math?window:typeof self != 'undefined' && self.Math == Math?self:Function('return this')();if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
	/***/}, /* 8 */function(module,exports){var core=module.exports = {version:'1.2.6'};if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
	/***/}, /* 9 */function(module,exports,__webpack_require__){ // optional / simple context binding
	var aFunction=__webpack_require__(10);module.exports = function(fn,that,length){aFunction(fn);if(that === undefined)return fn;switch(length){case 1:return function(a){return fn.call(that,a);};case 2:return function(a,b){return fn.call(that,a,b);};case 3:return function(a,b,c){return fn.call(that,a,b,c);};}return function() /* ...args */{return fn.apply(that,arguments);};}; /***/}, /* 10 */function(module,exports){module.exports = function(it){if(typeof it != 'function')throw TypeError(it + ' is not a function!');return it;}; /***/}, /* 11 */function(module,exports,__webpack_require__){ // 19.1.2.1 Object.assign(target, source, ...)
	var $=__webpack_require__(12),toObject=__webpack_require__(13),IObject=__webpack_require__(15); // should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(17)(function(){var a=_Object$assign2,A={},B={},S=_Symbol(),K='abcdefghijklmnopqrst';A[S] = 7;K.split('').forEach(function(k){B[k] = k;});return a({},A)[S] != 7 || _Object$keys2(a({},B)).join('') != K;})?function assign(target,source){ // eslint-disable-line no-unused-vars
	var T=toObject(target),$$=arguments,$$len=$$.length,index=1,getKeys=$.getKeys,getSymbols=$.getSymbols,isEnum=$.isEnum;while($$len > index) {var S=IObject($$[index++]),keys=getSymbols?getKeys(S).concat(getSymbols(S)):getKeys(S),length=keys.length,j=0,key;while(length > j) if(isEnum.call(S,key = keys[j++]))T[key] = S[key];}return T;}:_Object$assign2; /***/}, /* 12 */function(module,exports){var $Object=Object;module.exports = {create:$Object.create,getProto:$Object.getPrototypeOf,isEnum:({}).propertyIsEnumerable,getDesc:$Object.getOwnPropertyDescriptor,setDesc:$Object.defineProperty,setDescs:$Object.defineProperties,getKeys:$Object.keys,getNames:$Object.getOwnPropertyNames,getSymbols:$Object.getOwnPropertySymbols,each:[].forEach}; /***/}, /* 13 */function(module,exports,__webpack_require__){ // 7.1.13 ToObject(argument)
	var defined=__webpack_require__(14);module.exports = function(it){return Object(defined(it));}; /***/}, /* 14 */function(module,exports){ // 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){if(it == undefined)throw TypeError("Can't call method on  " + it);return it;}; /***/}, /* 15 */function(module,exports,__webpack_require__){ // fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof=__webpack_require__(16);module.exports = Object('z').propertyIsEnumerable(0)?Object:function(it){return cof(it) == 'String'?it.split(''):Object(it);}; /***/}, /* 16 */function(module,exports){var toString=({}).toString;module.exports = function(it){return toString.call(it).slice(8,-1);}; /***/}, /* 17 */function(module,exports){module.exports = function(exec){try{return !!exec();}catch(e) {return true;}}; /***/}, /* 18 */function(module,exports){module.exports = __WEBPACK_EXTERNAL_MODULE_18__; /***/}, /* 19 */function(module,exports){module.exports = __WEBPACK_EXTERNAL_MODULE_19__; /***/}, /* 20 */function(module,exports,__webpack_require__){'use strict';exports.__esModule = true;function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{'default':obj};}var _createUncontrollable=__webpack_require__(21);var _createUncontrollable2=_interopRequireDefault(_createUncontrollable);var mixin={shouldComponentUpdate:function shouldComponentUpdate(){ //let the forceUpdate trigger the update
	return !this._notifying;}};function set(component,propName,handler,value,args){if(handler){component._notifying = true;handler.call.apply(handler,[component,value].concat(args));component._notifying = false;}component._values[propName] = value;if(component.isMounted())component.forceUpdate();}exports['default'] = _createUncontrollable2['default']([mixin],set);module.exports = exports['default']; /***/}, /* 21 */function(module,exports,__webpack_require__){'use strict';exports.__esModule = true;var _extends=_Object$assign2 || function(target){for(var i=1;i < arguments.length;i++) {var source=arguments[i];for(var key in source) {if(Object.prototype.hasOwnProperty.call(source,key)){target[key] = source[key];}}}return target;};exports['default'] = createUncontrollable;function _interopRequireWildcard(obj){if(obj && obj.__esModule){return obj;}else {var newObj={};if(obj != null){for(var key in obj) {if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key] = obj[key];}}newObj['default'] = obj;return newObj;}}function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{'default':obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj) {if(keys.indexOf(i) >= 0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i] = obj[i];}return target;}var _react=__webpack_require__(18);var _react2=_interopRequireDefault(_react);var _utils=__webpack_require__(22);var utils=_interopRequireWildcard(_utils);function createUncontrollable(mixins,set){return uncontrollable;function uncontrollable(Component,controlledValues){var methods=arguments.length <= 2 || arguments[2] === undefined?[]:arguments[2];var displayName=Component.displayName || Component.name || 'Component',basePropTypes=utils.getType(Component).propTypes,propTypes;propTypes = utils.uncontrolledPropTypes(controlledValues,basePropTypes,displayName);methods = utils.transform(methods,function(obj,method){obj[method] = function(){var _refs$inner;return (_refs$inner = this.refs.inner)[method].apply(_refs$inner,arguments);};},{});var component=_react2['default'].createClass(_extends({displayName:'Uncontrolled(' + displayName + ')',mixins:mixins,propTypes:propTypes},methods,{componentWillMount:function componentWillMount(){var props=this.props,keys=_Object$keys2(controlledValues);this._values = utils.transform(keys,function(values,key){values[key] = props[utils.defaultKey(key)];},{});}, /**
		       * If a prop switches from controlled to Uncontrolled
		       * reset its value to the defaultValue
		       */componentWillReceiveProps:function componentWillReceiveProps(nextProps){var _this=this;var props=this.props,keys=_Object$keys2(controlledValues);keys.forEach(function(key){if(utils.getValue(nextProps,key) === undefined && utils.getValue(props,key) !== undefined){_this._values[key] = nextProps[utils.defaultKey(key)];}});},render:function render(){var _this2=this;var newProps={};var _props=this.props;var valueLink=_props.valueLink;var checkedLink=_props.checkedLink;var props=_objectWithoutProperties(_props,['valueLink','checkedLink']);utils.each(controlledValues,function(handle,propName){var linkPropName=utils.getLinkName(propName),prop=_this2.props[propName];if(linkPropName && !isProp(_this2.props,propName) && isProp(_this2.props,linkPropName)){prop = _this2.props[linkPropName].value;}newProps[propName] = prop !== undefined?prop:_this2._values[propName];newProps[handle] = setAndNotify.bind(_this2,propName);});newProps = _extends({},props,newProps,{ref:'inner'});return _react2['default'].createElement(Component,newProps);}}));component.ControlledComponent = Component; /**
		     * useful when wrapping a Component and you want to control
		     * everything
		     */component.deferControlTo = function(newComponent,additions,nextMethods){if(additions === undefined)additions = {};return uncontrollable(newComponent,_extends({},controlledValues,additions),nextMethods);};return component;function setAndNotify(propName,value){var linkName=utils.getLinkName(propName),handler=this.props[controlledValues[propName]];if(linkName && isProp(this.props,linkName) && !handler){handler = this.props[linkName].requestChange;}for(var _len=arguments.length,args=Array(_len > 2?_len - 2:0),_key=2;_key < _len;_key++) {args[_key - 2] = arguments[_key];}set(this,propName,handler,value,args);}function isProp(props,prop){return props[prop] !== undefined;}}}module.exports = exports['default']; /***/}, /* 22 */function(module,exports,__webpack_require__){ /* WEBPACK VAR INJECTION */(function(process){'use strict';exports.__esModule = true;exports.customPropType = customPropType;exports.uncontrolledPropTypes = uncontrolledPropTypes;exports.getType = getType;exports.getValue = getValue;exports.getLinkName = getLinkName;exports.defaultKey = defaultKey;exports.chain = chain;exports.transform = transform;exports.each = each;exports.has = has;function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{'default':obj};}var _react=__webpack_require__(18);var _react2=_interopRequireDefault(_react);var _invariant=__webpack_require__(24);var _invariant2=_interopRequireDefault(_invariant);function customPropType(handler,propType,name){return function(props,propName){if(props[propName] !== undefined){if(!props[handler]){return new Error('You have provided a `' + propName + '` prop to ' + '`' + name + '` without an `' + handler + '` handler. This will render a read-only field. ' + 'If the field should be mutable use `' + defaultKey(propName) + '`. Otherwise, set `' + handler + '`');}return propType && propType(props,propName,name);}};}function uncontrolledPropTypes(controlledValues,basePropTypes,displayName){var propTypes={};if(process.env.NODE_ENV !== 'production' && basePropTypes){transform(controlledValues,function(obj,handler,prop){var type=basePropTypes[prop];_invariant2['default'](typeof handler === 'string' && handler.trim().length,'Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable',displayName,prop);obj[prop] = customPropType(handler,type,displayName);if(type !== undefined)obj[defaultKey(prop)] = type;},propTypes);}return propTypes;}var version=_react2['default'].version.split('.').map(parseFloat);exports.version = version;function getType(component){if(version[0] >= 15 || version[0] === 0 && version[1] >= 13)return component;return component.type;}function getValue(props,name){var linkPropName=getLinkName(name);if(linkPropName && !isProp(props,name) && isProp(props,linkPropName))return props[linkPropName].value;return props[name];}function isProp(props,prop){return props[prop] !== undefined;}function getLinkName(name){return name === 'value'?'valueLink':name === 'checked'?'checkedLink':null;}function defaultKey(key){return 'default' + key.charAt(0).toUpperCase() + key.substr(1);}function chain(thisArg,a,b){return function chainedFunction(){for(var _len=arguments.length,args=Array(_len),_key=0;_key < _len;_key++) {args[_key] = arguments[_key];}a && a.call.apply(a,[thisArg].concat(args));b && b.call.apply(b,[thisArg].concat(args));};}function transform(obj,cb,seed){each(obj,cb.bind(null,seed = seed || (Array.isArray(obj)?[]:{})));return seed;}function each(obj,cb,thisArg){if(Array.isArray(obj))return obj.forEach(cb,thisArg);for(var key in obj) if(has(obj,key))cb.call(thisArg,obj[key],key,obj);}function has(o,k){return o?Object.prototype.hasOwnProperty.call(o,k):false;} /* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(23)); /***/}, /* 23 */function(module,exports){ // shim for using process in browser
	var process=module.exports = {};var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){draining = false;if(currentQueue.length){queue = currentQueue.concat(queue);}else {queueIndex = -1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=setTimeout(cleanUpNextTick);draining = true;var len=queue.length;while(len) {currentQueue = queue;queue = [];while(++queueIndex < len) {if(currentQueue){currentQueue[queueIndex].run();}}queueIndex = -1;len = queue.length;}currentQueue = null;draining = false;clearTimeout(timeout);}process.nextTick = function(fun){var args=new Array(arguments.length - 1);if(arguments.length > 1){for(var i=1;i < arguments.length;i++) {args[i - 1] = arguments[i];}}queue.push(new Item(fun,args));if(queue.length === 1 && !draining){setTimeout(drainQueue,0);}}; // v8 likes predictible objects
	function Item(fun,array){this.fun = fun;this.array = array;}Item.prototype.run = function(){this.fun.apply(null,this.array);};process.title = 'browser';process.browser = true;process.env = {};process.argv = [];process.version = ''; // empty string to avoid regexp issues
	process.versions = {};function noop(){}process.on = noop;process.addListener = noop;process.once = noop;process.off = noop;process.removeListener = noop;process.removeAllListeners = noop;process.emit = noop;process.binding = function(name){throw new Error('process.binding is not supported');};process.cwd = function(){return '/';};process.chdir = function(dir){throw new Error('process.chdir is not supported');};process.umask = function(){return 0;}; /***/}, /* 24 */function(module,exports,__webpack_require__){ /* WEBPACK VAR INJECTION */(function(process){ /**
		 * Copyright 2013-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 */'use strict'; /**
		 * Use invariant() to assert state which your program assumes to be true.
		 *
		 * Provide sprintf-style format (only %s is supported) and arguments
		 * to provide information about what broke and what you were
		 * expecting.
		 *
		 * The invariant message will be stripped in production, but the invariant
		 * will remain to ensure logic does not differ in production.
		 */var invariant=function invariant(condition,format,a,b,c,d,e,f){if(process.env.NODE_ENV !== 'production'){if(format === undefined){throw new Error('invariant requires an error message argument');}}if(!condition){var error;if(format === undefined){error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');}else {var args=[a,b,c,d,e,f];var argIndex=0;error = new Error(format.replace(/%s/g,function(){return args[argIndex++];}));error.name = 'Invariant Violation';}error.framesToPop = 1; // we don't care about invariant's own frame
	throw error;}};module.exports = invariant; /* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(23)); /***/}, /* 25 */function(module,exports,__webpack_require__){"use strict";var _extends=__webpack_require__(2)['default'];var React=__webpack_require__(18);var PropTypes=React.PropTypes;var Header=__webpack_require__(26);var Viewport=__webpack_require__(45);var GridScrollMixin=__webpack_require__(69);var DOMMetrics=__webpack_require__(68);var Grid=React.createClass({displayName:'Grid',propTypes:{rowGetter:PropTypes.oneOfType([PropTypes.array,PropTypes.func]).isRequired,columns:PropTypes.oneOfType([PropTypes.array,PropTypes.object]),minHeight:PropTypes.number,headerRows:PropTypes.oneOfType([PropTypes.array,PropTypes.func]),rowHeight:PropTypes.number,rowRenderer:PropTypes.func,emptyRowsView:PropTypes.func,expandedRows:PropTypes.oneOfType([PropTypes.array,PropTypes.func]),selectedRows:PropTypes.oneOfType([PropTypes.array,PropTypes.func]),rowsCount:PropTypes.number,onRows:PropTypes.func,sortInfo:Header.propTypes.sortInfo,rowOffsetHeight:PropTypes.number.isRequired,onViewportKeydown:PropTypes.func.isRequired,onViewportDragStart:PropTypes.func.isRequired,onViewportDragEnd:PropTypes.func.isRequired,onViewportDoubleClick:PropTypes.func.isRequired},mixins:[GridScrollMixin,DOMMetrics.MetricsComputatorMixin],getStyle:function getStyle(){return {overflow:'hidden',outline:0,position:'relative',minHeight:this.props.minHeight};},render:function render(){var headerRows=this.props.headerRows || [{ref:'row'}];var EmptyRowsView=this.props.emptyRowsView;return React.createElement('div',_extends({},this.props,{style:this.getStyle(),className:'react-grid-Grid'}),React.createElement(Header,{ref:'header',columnMetrics:this.props.columnMetrics,onColumnResize:this.props.onColumnResize,height:this.props.rowHeight,totalWidth:this.props.totalWidth,headerRows:headerRows,sortInfo:this.props.sortInfo,onSort:this.props.onSort}),this.props.rowsCount >= 1 || this.props.rowsCount === 0 && !this.props.emptyRowsView?React.createElement('div',{tabIndex:'-1',ref:'viewPortContainer',onKeyDown:this.props.onViewportKeydown,onDoubleClick:this.props.onViewportDoubleClick,onDragStart:this.props.onViewportDragStart,onDragEnd:this.props.onViewportDragEnd},React.createElement(Viewport,{ref:'viewport',width:this.props.columnMetrics.width,getRowKey:this.props.getRowKey,rowHeight:this.props.rowHeight,rowRenderer:this.props.rowRenderer,rowGetter:this.props.rowGetter,rowsCount:this.props.rowsCount,selectedRows:this.props.selectedRows,expandedRows:this.props.expandedRows,columnMetrics:this.props.columnMetrics,totalWidth:this.props.totalWidth,onScroll:this.onScroll,onRows:this.props.onRows,cellMetaData:this.props.cellMetaData,rowOffsetHeight:this.props.rowOffsetHeight || this.props.rowHeight * headerRows.length,minHeight:this.props.minHeight})):React.createElement('div',{ref:'emptyView',className:'react-grid-Empty'},React.createElement(EmptyRowsView,null)));},focus:function focus(){this.refs.viewPortContainer.focus();},getDefaultProps:function getDefaultProps(){return {rowHeight:35,minHeight:350};}});module.exports = Grid; /***/}, /* 26 */function(module,exports,__webpack_require__){"use strict";var _extends=__webpack_require__(2)['default'];var React=__webpack_require__(18);var ReactDOM=__webpack_require__(19);var joinClasses=__webpack_require__(27);var shallowCloneObject=__webpack_require__(28);var ColumnMetrics=__webpack_require__(29);var ColumnUtils=__webpack_require__(31);var HeaderRow=__webpack_require__(33);var Header=React.createClass({displayName:'Header',propTypes:{columnMetrics:React.PropTypes.shape({width:React.PropTypes.number.isRequired}).isRequired,totalWidth:React.PropTypes.number,height:React.PropTypes.number.isRequired,headerRows:React.PropTypes.array.isRequired,sortInfo:HeaderRow.propTypes.sortInfo},render:function render(){var className=joinClasses({'react-grid-Header':true,'react-grid-Header--resizing':!!this.state.resizing});var headerRows=this.getHeaderRows();return React.createElement('div',_extends({},this.props,{style:this.getStyle(),className:className}),headerRows);},shouldComponentUpdate:function shouldComponentUpdate(nextProps,nextState){var update=!ColumnMetrics.sameColumns(this.props.columnMetrics.columns,nextProps.columnMetrics.columns,ColumnMetrics.sameColumn) || this.props.totalWidth != nextProps.totalWidth || this.props.headerRows.length != nextProps.headerRows.length || this.state.resizing != nextState.resizing || this.props.sortInfo != nextProps.sortInfo;return update;},getHeaderRows:function getHeaderRows(){var _this=this;var columnMetrics=this.getColumnMetrics();var resizeColumn;if(this.state.resizing){resizeColumn = this.state.resizing.column;}var headerRows=[];this.props.headerRows.forEach(function(row,index){var headerRowStyle={position:'absolute',top:_this.getCombinedHeaderHeights(index),left:0,width:_this.props.totalWidth,overflow:'hidden'};headerRows.push(React.createElement(HeaderRow,{key:row.ref,ref:row.ref,style:headerRowStyle,onColumnResize:_this.onColumnResize,onColumnResizeEnd:_this.onColumnResizeEnd,width:columnMetrics.width,height:row.height || _this.props.height,columns:columnMetrics.columns,resizing:resizeColumn,headerCellRenderer:row.headerCellRenderer,sortInfo:_this.props.sortInfo,onSort:_this.props.onSort}));});return headerRows;},getInitialState:function getInitialState(){return {resizing:null};},componentWillReceiveProps:function componentWillReceiveProps(){this.setState({resizing:null});},onColumnResize:function onColumnResize(column,width){var state=this.state.resizing || this.props;var pos=this.getColumnPosition(column);if(pos != null){var resizing={columnMetrics:shallowCloneObject(state.columnMetrics)};resizing.columnMetrics = ColumnMetrics.resizeColumn(resizing.columnMetrics,pos,width); // we don't want to influence scrollLeft while resizing
	if(resizing.columnMetrics.totalWidth < state.columnMetrics.totalWidth){resizing.columnMetrics.totalWidth = state.columnMetrics.totalWidth;}resizing.column = ColumnUtils.getColumn(resizing.columnMetrics.columns,pos);this.setState({resizing:resizing});}},getColumnMetrics:function getColumnMetrics(){var columnMetrics;if(this.state.resizing){columnMetrics = this.state.resizing.columnMetrics;}else {columnMetrics = this.props.columnMetrics;}return columnMetrics;},getColumnPosition:function getColumnPosition(column){var columnMetrics=this.getColumnMetrics();var pos=-1;columnMetrics.columns.forEach(function(c,idx){if(c.key === column.key){pos = idx;}});return pos === -1?null:pos;},onColumnResizeEnd:function onColumnResizeEnd(column,width){var pos=this.getColumnPosition(column);if(pos !== null && this.props.onColumnResize){this.props.onColumnResize(pos,width || column.width);}},setScrollLeft:function setScrollLeft(scrollLeft){var node=ReactDOM.findDOMNode(this.refs.row);node.scrollLeft = scrollLeft;this.refs.row.setScrollLeft(scrollLeft);if(this.refs.filterRow){var nodeFilters=ReactDOM.findDOMNode(this.refs.filterRow);nodeFilters.scrollLeft = scrollLeft;this.refs.filterRow.setScrollLeft(scrollLeft);}},getCombinedHeaderHeights:function getCombinedHeaderHeights(until){var stop_at=this.props.headerRows.length;if(typeof until != 'undefined')stop_at = until;var height=0;for(var index=0;index < stop_at;index++) {height += this.props.headerRows[index].height || this.props.height;}return height;},getStyle:function getStyle(){return {position:'relative',height:this.getCombinedHeaderHeights(),overflow:'hidden'};}});module.exports = Header; /***/}, /* 27 */function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__; /*!
		  Copyright (c) 2015 Jed Watson.
		  Licensed under the MIT License (MIT), see
		  http://jedwatson.github.io/classnames
		*/function classNames(){var classes='';var arg;for(var i=0;i < arguments.length;i++) {arg = arguments[i];if(!arg){continue;}if('string' === typeof arg || 'number' === typeof arg){classes += ' ' + arg;}else if(Object.prototype.toString.call(arg) === '[object Array]'){classes += ' ' + classNames.apply(null,arg);}else if('object' === typeof arg){for(var key in arg) {if(!arg.hasOwnProperty(key) || !arg[key]){continue;}classes += ' ' + key;}}}return classes.substr(1);} // safely export classNames for node / browserify
	if(typeof module !== 'undefined' && module.exports){module.exports = classNames;} // safely export classNames for RequireJS
	if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [],__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return classNames;}).apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} /***/}, /* 28 */function(module,exports){'use strict';function shallowCloneObject(obj){var result={};for(var k in obj) {if(obj.hasOwnProperty(k)){result[k] = obj[k];}}return result;}module.exports = shallowCloneObject; /***/}, /* 29 */function(module,exports,__webpack_require__){ /*global Immutable */"use strict";var _extends=__webpack_require__(2)['default'];var shallowCloneObject=__webpack_require__(28);var sameColumn=__webpack_require__(30);var ColumnUtils=__webpack_require__(31);var getScrollbarSize=__webpack_require__(32); /**
		 * Update column metrics calculation.
		 *
		 * @param {ColumnMetricsType} metrics
		 */function recalculate(metrics){ // compute width for columns which specify width
	var columns=setColumnWidths(metrics.columns,metrics.totalWidth);var unallocatedWidth=columns.filter(function(c){return c.width;}).reduce(function(w,column){return w - column.width;},metrics.totalWidth);unallocatedWidth -= getScrollbarSize();var width=columns.filter(function(c){return c.width;}).reduce(function(w,column){return w + column.width;},0); // compute width for columns which doesn't specify width
	columns = setDefferedColumnWidths(columns,unallocatedWidth,metrics.minColumnWidth); // compute left offset
	columns = setColumnOffsets(columns);return {columns:columns,width:width,totalWidth:metrics.totalWidth,minColumnWidth:metrics.minColumnWidth};}function setColumnOffsets(columns){var left=0;return columns.map(function(column){column.left = left;left += column.width;return column;});}function setColumnWidths(columns,totalWidth){return columns.map(function(column){var colInfo=_extends({},column);if(column.width){if(/^([0-9]+)%$/.exec(column.width.toString())){colInfo.width = Math.floor(column.width / 100 * totalWidth);}}return colInfo;});}function setDefferedColumnWidths(columns,unallocatedWidth,minColumnWidth){var defferedColumns=columns.filter(function(c){return !c.width;});return columns.map(function(column){if(!column.width){if(unallocatedWidth <= 0){column.width = minColumnWidth;}else {column.width = Math.floor(unallocatedWidth / ColumnUtils.getSize(defferedColumns));}}return column;});} /**
		 * Update column metrics calculation by resizing a column.
		 *
		 * @param {ColumnMetricsType} metrics
		 * @param {Column} column
		 * @param {number} width
		 */function resizeColumn(metrics,index,width){var column=ColumnUtils.getColumn(metrics.columns,index);metrics = shallowCloneObject(metrics);metrics.columns = metrics.columns.slice(0);var updatedColumn=shallowCloneObject(column);updatedColumn.width = Math.max(width,metrics.minColumnWidth);metrics = ColumnUtils.spliceColumn(metrics,index,updatedColumn);return recalculate(metrics);}function areColumnsImmutable(prevColumns,nextColumns){return typeof Immutable !== 'undefined' && Immutable.List.isList(prevColumns) && Immutable.List.isList(nextColumns);}function compareEachColumn(prevColumns,nextColumns,sameColumn){var i,len,column;var prevColumnsByKey={};var nextColumnsByKey={};if(ColumnUtils.getSize(prevColumns) !== ColumnUtils.getSize(nextColumns)){return false;}for(i = 0,len = ColumnUtils.getSize(prevColumns);i < len;i++) {column = prevColumns[i];prevColumnsByKey[column.key] = column;}for(i = 0,len = ColumnUtils.getSize(nextColumns);i < len;i++) {column = nextColumns[i];nextColumnsByKey[column.key] = column;var prevColumn=prevColumnsByKey[column.key];if(prevColumn === undefined || !sameColumn(prevColumn,column)){return false;}}for(i = 0,len = ColumnUtils.getSize(prevColumns);i < len;i++) {column = prevColumns[i];var nextColumn=nextColumnsByKey[column.key];if(nextColumn === undefined){return false;}}return true;}function sameColumns(prevColumns,nextColumns,sameColumn){if(areColumnsImmutable(prevColumns,nextColumns)){return prevColumns === nextColumns;}else {return compareEachColumn(prevColumns,nextColumns,sameColumn);}}module.exports = {recalculate:recalculate,resizeColumn:resizeColumn,sameColumn:sameColumn,sameColumns:sameColumns}; /***/}, /* 30 */function(module,exports,__webpack_require__){ /* TODO objects as a map */'use strict';var isValidElement=__webpack_require__(18).isValidElement;module.exports = function sameColumn(a,b){var k;for(k in a) {if(a.hasOwnProperty(k)){if(typeof a[k] === 'function' && typeof b[k] === 'function' || isValidElement(a[k]) && isValidElement(b[k])){continue;}if(!b.hasOwnProperty(k) || a[k] !== b[k]){return false;}}}for(k in b) {if(b.hasOwnProperty(k) && !a.hasOwnProperty(k)){return false;}}return true;}; /***/}, /* 31 */function(module,exports){'use strict';module.exports = {getColumn:function getColumn(columns,idx){if(Array.isArray(columns)){return columns[idx];}else if(typeof Immutable !== 'undefined'){return columns.get(idx);}},spliceColumn:function spliceColumn(metrics,idx,column){if(Array.isArray(metrics.columns)){metrics.columns.splice(idx,1,column);}else if(typeof Immutable !== 'undefined'){metrics.columns = metrics.columns.splice(idx,1,column);}return metrics;},getSize:function getSize(columns){if(Array.isArray(columns)){return columns.length;}else if(typeof Immutable !== 'undefined'){return columns.size;}}}; /***/}, /* 32 */function(module,exports){ /*  offsetWidth in HTMLElement */"use strict";var size;function getScrollbarSize(){if(size === undefined){var outer=document.createElement('div');outer.style.width = '50px';outer.style.height = '50px';outer.style.position = 'absolute';outer.style.top = '-200px';outer.style.left = '-200px';var inner=document.createElement('div');inner.style.height = '100px';inner.style.width = '100%';outer.appendChild(inner);document.body.appendChild(outer);var outerWidth=outer.clientWidth;outer.style.overflowY = 'scroll';var innerWidth=inner.clientWidth;document.body.removeChild(outer);size = outerWidth - innerWidth;}return size;}module.exports = getScrollbarSize; /***/}, /* 33 */function(module,exports,__webpack_require__){ /**
		 * @jsx React.DOM
		 */"use strict";var _extends=__webpack_require__(2)['default'];var _Object$keys=__webpack_require__(34)['default'];var React=__webpack_require__(18);var PropTypes=React.PropTypes;var shallowEqual=__webpack_require__(38);var HeaderCell=__webpack_require__(39);var getScrollbarSize=__webpack_require__(32);var ColumnUtilsMixin=__webpack_require__(31);var SortableHeaderCell=__webpack_require__(44);var HeaderRowStyle={overflow:React.PropTypes.string,width:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),height:React.PropTypes.number,position:React.PropTypes.string};function objectOf(propType){return function(props,name){for(var _len=arguments.length,args=Array(_len > 2?_len - 2:0),_key=2;_key < _len;_key++) {args[_key - 2] = arguments[_key];}var obj=props[name] || {};var invalid=_Object$keys(obj).some(function(k){return propType.apply(undefined,[obj,k].concat(args));});if(invalid)return new Error('Invalid object key');};}var DEFINE_SORT={ASC:'ASC',DESC:'DESC',NONE:'NONE'};var HeaderRow=React.createClass({displayName:'HeaderRow',propTypes:{width:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),height:PropTypes.number.isRequired,columns:PropTypes.oneOfType([PropTypes.array,PropTypes.object]),onColumnResize:PropTypes.func,onSort:PropTypes.func.isRequired,sortInfo:objectOf(PropTypes.oneOf(_Object$keys(DEFINE_SORT).map(function(k){return DEFINE_SORT[k];}))),style:PropTypes.shape(HeaderRowStyle)},mixins:[ColumnUtilsMixin],render:function render(){var cellsStyle={width:this.props.width?this.props.width + getScrollbarSize():'100%',height:this.props.height,whiteSpace:'nowrap',overflowX:'hidden',overflowY:'hidden'};var cells=this.getCells();return React.createElement('div',_extends({},this.props,{className:'react-grid-HeaderRow'}),React.createElement('div',{style:cellsStyle},cells));},getHeaderRenderer:function getHeaderRenderer(column){if(column.sortable){var sortDirection=(this.props.sortInfo || {})[column.key] || DEFINE_SORT.NONE;return React.createElement(SortableHeaderCell,{columnKey:column.key,onSort:this.props.onSort,sortDirection:sortDirection});}else {return this.props.headerCellRenderer || column.headerRenderer || this.props.cellRenderer;}},getCells:function getCells(){var cells=[];var lockedCells=[];for(var i=0,len=this.getSize(this.props.columns);i < len;i++) {var column=this.getColumn(this.props.columns,i);var cell=React.createElement(HeaderCell,{ref:i,key:i,height:this.props.height,column:column,renderer:this.getHeaderRenderer(column),resizing:this.props.resizing === column,onResize:this.props.onColumnResize,onResizeEnd:this.props.onColumnResizeEnd});if(column.locked){lockedCells.push(cell);}else {cells.push(cell);}}return cells.concat(lockedCells);},setScrollLeft:function setScrollLeft(scrollLeft){var _this=this;this.props.columns.forEach(function(column,i){if(column.locked){_this.refs[i].setScrollLeft(scrollLeft);}});},shouldComponentUpdate:function shouldComponentUpdate(nextProps){return nextProps.width !== this.props.width || nextProps.height !== this.props.height || nextProps.columns !== this.props.columns || !shallowEqual(nextProps.style,this.props.style) || this.props.sortInfo != nextProps.sortInfo;},getStyle:function getStyle(){return {overflow:'hidden',width:'100%',height:this.props.height,position:'absolute'};}});HeaderRow.SORT = DEFINE_SORT;module.exports = HeaderRow; /***/}, /* 34 */function(module,exports,__webpack_require__){module.exports = {"default":__webpack_require__(35),__esModule:true}; /***/}, /* 35 */function(module,exports,__webpack_require__){__webpack_require__(36);module.exports = __webpack_require__(8).Object.keys; /***/}, /* 36 */function(module,exports,__webpack_require__){ // 19.1.2.14 Object.keys(O)
	var toObject=__webpack_require__(13);__webpack_require__(37)('keys',function($keys){return function keys(it){return $keys(toObject(it));};}); /***/}, /* 37 */function(module,exports,__webpack_require__){ // most Object methods by ES6 should accept primitives
	var $export=__webpack_require__(6),core=__webpack_require__(8),fails=__webpack_require__(17);module.exports = function(KEY,exec){var fn=(core.Object || {})[KEY] || Object[KEY],exp={};exp[KEY] = exec(fn);$export($export.S + $export.F * fails(function(){fn(1);}),'Object',exp);}; /***/}, /* 38 */function(module,exports){ /**
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
		 */'use strict';var hasOwnProperty=Object.prototype.hasOwnProperty; /**
		 * Performs equality by iterating through keys on an object and returning false
		 * when any key has values which are not strictly equal between the arguments.
		 * Returns true when the values of all keys are strictly equal.
		 */function shallowEqual(objA,objB){if(objA === objB){return true;}if(typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null){return false;}var keysA=_Object$keys2(objA);var keysB=_Object$keys2(objB);if(keysA.length !== keysB.length){return false;} // Test for A's keys different from B.
	var bHasOwnProperty=hasOwnProperty.bind(objB);for(var i=0;i < keysA.length;i++) {if(!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]){return false;}}return true;}module.exports = shallowEqual; /***/}, /* 39 */function(module,exports,__webpack_require__){"use strict";var React=__webpack_require__(18);var ReactDOM=__webpack_require__(19);var joinClasses=__webpack_require__(27);var PropTypes=React.PropTypes;var ExcelColumn=__webpack_require__(40);var ResizeHandle=__webpack_require__(41);var HeaderCell=React.createClass({displayName:'HeaderCell',propTypes:{renderer:PropTypes.oneOfType([PropTypes.func,PropTypes.element]).isRequired,column:PropTypes.shape(ExcelColumn).isRequired,onResize:PropTypes.func.isRequired,height:PropTypes.number.isRequired,onResizeEnd:PropTypes.func.isRequired},render:function render(){var resizeHandle;if(this.props.column.resizable){resizeHandle = React.createElement(ResizeHandle,{onDrag:this.onDrag,onDragStart:this.onDragStart,onDragEnd:this.onDragEnd});}var className=joinClasses({'react-grid-HeaderCell':true,'react-grid-HeaderCell--resizing':this.state.resizing,'react-grid-HeaderCell--locked':this.props.column.locked});className = joinClasses(className,this.props.className,this.props.column.cellClass);var cell=this.getCell();return React.createElement('div',{className:className,style:this.getStyle()},cell,resizeHandle);},getCell:function getCell(){var props={column:this.props.column,className:'react-grid-HeaderCell__value'};if(React.isValidElement(this.props.renderer)){return React.cloneElement(this.props.renderer,props);}else {return this.props.renderer(props);}},getDefaultProps:function getDefaultProps(){return {renderer:simpleCellRenderer};},getInitialState:function getInitialState(){return {resizing:false};},setScrollLeft:function setScrollLeft(scrollLeft){var node=ReactDOM.findDOMNode(this);node.style.webkitTransform = 'translate3d(' + scrollLeft + 'px, 0px, 0px)';node.style.transform = 'translate3d(' + scrollLeft + 'px, 0px, 0px)';},getStyle:function getStyle(){return {width:this.props.column.width,left:this.props.column.left,display:'inline-block',position:'absolute',overflow:'hidden',height:this.props.height,margin:0,textOverflow:'ellipsis',whiteSpace:'nowrap'};},onDragStart:function onDragStart(e){this.setState({resizing:true}); //need to set dummy data for FF
	if(e && e.dataTransfer && e.dataTransfer.setData)e.dataTransfer.setData('text/plain','dummy');},onDrag:function onDrag(e){var resize=this.props.onResize || null; //for flows sake, doesnt recognise a null check direct
	if(resize){var width=this.getWidthFromMouseEvent(e);if(width > 0){resize(this.props.column,width);}}},onDragEnd:function onDragEnd(e){var width=this.getWidthFromMouseEvent(e);this.props.onResizeEnd(this.props.column,width);this.setState({resizing:false});},getWidthFromMouseEvent:function getWidthFromMouseEvent(e){var right=e.pageX;var left=ReactDOM.findDOMNode(this).getBoundingClientRect().left;return right - left;}});function simpleCellRenderer(props){return React.createElement('div',props,props.column.name);}module.exports = HeaderCell; /***/}, /* 40 */function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(18);var ExcelColumnShape={name:React.PropTypes.string,key:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number]).isRequired,width:React.PropTypes.number.isRequired};module.exports = ExcelColumnShape; /***/}, /* 41 */function(module,exports,__webpack_require__){'use strict';var _extends=__webpack_require__(2)['default'];var React=__webpack_require__(18);var Draggable=__webpack_require__(42);var ResizeHandle=React.createClass({displayName:'ResizeHandle',style:{position:'absolute',top:0,right:0,width:6,height:'100%'},render:function render(){return React.createElement(Draggable,_extends({},this.props,{className:'react-grid-HeaderCell__resizeHandle',style:this.style}));}});module.exports = ResizeHandle; /***/}, /* 42 */function(module,exports,__webpack_require__){ /*  need   */'use strict';var _extends=__webpack_require__(2)['default'];var React=__webpack_require__(18);var PropTypes=React.PropTypes;var emptyFunction=__webpack_require__(43);var Draggable=React.createClass({displayName:'Draggable',propTypes:{onDragStart:PropTypes.func,onDragEnd:PropTypes.func,onDrag:PropTypes.func,component:PropTypes.oneOfType([PropTypes.func,PropTypes.string])},render:function render(){return React.createElement('div',_extends({},this.props,{onMouseDown:this.onMouseDown,className:'react-grid-HeaderCell__draggable'}));},getDefaultProps:function getDefaultProps(){return {onDragStart:emptyFunction.thatReturnsTrue,onDragEnd:emptyFunction,onDrag:emptyFunction};},getInitialState:function getInitialState(){return {drag:null};},onMouseDown:function onMouseDown(e){var drag=this.props.onDragStart(e);if(drag === null && e.button !== 0){return;}window.addEventListener('mouseup',this.onMouseUp);window.addEventListener('mousemove',this.onMouseMove);this.setState({drag:drag});},onMouseMove:function onMouseMove(e){if(this.state.drag === null){return;}if(e.preventDefault){e.preventDefault();}this.props.onDrag(e);},onMouseUp:function onMouseUp(e){this.cleanUp();this.props.onDragEnd(e,this.state.drag);this.setState({drag:null});},componentWillUnmount:function componentWillUnmount(){this.cleanUp();},cleanUp:function cleanUp(){window.removeEventListener('mouseup',this.onMouseUp);window.removeEventListener('mousemove',this.onMouseMove);}});module.exports = Draggable; /***/}, /* 43 */function(module,exports){ /**
		 * Copyright 2013-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule emptyFunction
		 */"use strict";function makeEmptyFunction(arg){return function(){return arg;};} /**
		 * This function accepts and discards inputs; it has no side effects. This is
		 * primarily useful idiomatically for overridable function endpoints which
		 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
		 */function emptyFunction(){}emptyFunction.thatReturns = makeEmptyFunction;emptyFunction.thatReturnsFalse = makeEmptyFunction(false);emptyFunction.thatReturnsTrue = makeEmptyFunction(true);emptyFunction.thatReturnsNull = makeEmptyFunction(null);emptyFunction.thatReturnsThis = function(){return this;};emptyFunction.thatReturnsArgument = function(arg){return arg;};module.exports = emptyFunction; /***/}, /* 44 */function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(18);var joinClasses=__webpack_require__(27);var DEFINE_SORT={ASC:'ASC',DESC:'DESC',NONE:'NONE'};var SortableHeaderCell=React.createClass({displayName:'SortableHeaderCell',propTypes:{columnKey:React.PropTypes.string.isRequired,onSort:React.PropTypes.func.isRequired,sortDirection:React.PropTypes.oneOf(['ASC','DESC','NONE'])},onClick:function onClick(){var direction;switch(this.props.sortDirection){case null:case undefined:case DEFINE_SORT.NONE:direction = DEFINE_SORT.ASC;break;case DEFINE_SORT.ASC:direction = DEFINE_SORT.DESC;break;case DEFINE_SORT.DESC:direction = DEFINE_SORT.NONE;break;}this.props.onSort(this.props.columnKey,direction);},getSortByText:function getSortByText(){var unicodeKeys={'ASC':'9650','DESC':'9660','NONE':''};return String.fromCharCode(unicodeKeys[this.props.sortDirection]);},render:function render(){var sorting=this.props.sortDirection && this.props.sortDirection !== DEFINE_SORT.NONE;var className=joinClasses(this.props.className,{'react-grid-HeaderCell-sortable':true,'react-grid-HeaderCell-sortable--ascending':this.props.sortDirection === 'ASC','react-grid-HeaderCell-sortable--descending':this.props.sortDirection === 'DESC'});return React.createElement('div',{title:this.props.column.name,className:className,onClick:this.onClick,style:{cursor:'pointer',position:'relative',paddingRight:sorting?15:undefined}},this.props.column.name,!!sorting && React.createElement('span',{style:{position:'absolute',right:0}},this.getSortByText()));}});module.exports = SortableHeaderCell; /***/}, /* 45 */function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(18);var Canvas=__webpack_require__(46);var PropTypes=React.PropTypes;var colUtils=__webpack_require__(31);var ViewportScroll=__webpack_require__(67);var Viewport=React.createClass({displayName:'Viewport',mixins:[ViewportScroll],propTypes:{rowOffsetHeight:PropTypes.number.isRequired,totalWidth:PropTypes.number.isRequired,columnMetrics:PropTypes.object.isRequired,rowGetter:PropTypes.oneOfType([PropTypes.array,PropTypes.func]).isRequired,selectedRows:PropTypes.array,expandedRows:PropTypes.array,rowRenderer:PropTypes.func,rowsCount:PropTypes.number.isRequired,rowHeight:PropTypes.number.isRequired,onRows:PropTypes.func,onScroll:PropTypes.func,minHeight:PropTypes.number},componentWillReceiveProps:function componentWillReceiveProps(nextProps){var _this=this;var cellMetaData=nextProps.cellMetaData;var columnMetrics=nextProps.columnMetrics;var _cellMetaData$selected=cellMetaData.selected;var rowIdx=_cellMetaData$selected.rowIdx;var idx=_cellMetaData$selected.idx;var column=colUtils.getColumn(columnMetrics.columns,idx);if(idx !== -1 && !column.locked && this.selectedCellChanged(cellMetaData)){(function(){var _scrollToCell=_this.scrollToCell([idx,rowIdx],nextProps);var scrollTop=_scrollToCell.scrollTop;var scrollLeft=_scrollToCell.scrollLeft;cancelAnimationFrame(_this._raf);_this._raf = requestAnimationFrame(function(){if(_this.isMounted())_this.refs.canvas.setScroll(scrollTop,scrollLeft);});})();}},render:function render(){var style={padding:0,bottom:0,left:0,right:0,overflow:'hidden',position:'absolute',top:this.props.rowOffsetHeight};return React.createElement('div',{className:'react-grid-Viewport',style:style},React.createElement(Canvas,{ref:'canvas',getRowKey:this.props.getRowKey,totalWidth:this.props.totalWidth,width:this.props.columnMetrics.width,rowGetter:this.props.rowGetter,rowsCount:this.props.rowsCount,selectedRows:this.props.selectedRows,expandedRows:this.props.expandedRows,columns:this.props.columnMetrics.columns,rowRenderer:this.props.rowRenderer,visibleStart:this.state.visibleStart,visibleEnd:this.state.visibleEnd,displayStart:this.state.displayStart,displayEnd:this.state.displayEnd,cellMetaData:this.props.cellMetaData,height:this.state.height,rowHeight:this.props.rowHeight,onScroll:this.onScroll,onRows:this.props.onRows}));},getScroll:function getScroll(){return this.refs.canvas.getScroll();},onScroll:function onScroll(scroll){this.updateScroll(scroll.scrollTop,scroll.scrollLeft,this.state.height,this.props.rowHeight,this.props.rowsCount);if(this.props.onScroll){this.props.onScroll({scrollTop:scroll.scrollTop,scrollLeft:scroll.scrollLeft});}},setScrollLeft:function setScrollLeft(scrollLeft){this.refs.canvas.setScrollLeft(scrollLeft);},selectedCellChanged:function selectedCellChanged(cellMetaData){var oldMeta=this.props.cellMetaData;return oldMeta.selected.rowIdx !== cellMetaData.selected.rowIdx || oldMeta.selected.idx !== cellMetaData.selected.idx;}});module.exports = Viewport; /***/}, /* 46 */function(module,exports,__webpack_require__){"use strict";var React=__webpack_require__(18);var ReactDOM=__webpack_require__(19);var joinClasses=__webpack_require__(27);var PropTypes=React.PropTypes;var shallowEqual=__webpack_require__(38);var emptyFunction=__webpack_require__(43);var ScrollShim=__webpack_require__(47);var Row=__webpack_require__(48);var Canvas=React.createClass({displayName:'Canvas',mixins:[ScrollShim],propTypes:{rowRenderer:PropTypes.oneOfType([PropTypes.func,PropTypes.element]),rowHeight:PropTypes.number.isRequired,height:PropTypes.number.isRequired,displayStart:PropTypes.number.isRequired,displayEnd:PropTypes.number.isRequired,rowsCount:PropTypes.number.isRequired,rowGetter:PropTypes.oneOfType([PropTypes.func.isRequired,PropTypes.array.isRequired]),onRows:PropTypes.func,columns:PropTypes.oneOfType([PropTypes.object,PropTypes.array]).isRequired},render:function render(){var _this=this;var displayStart=this.state.displayStart;var displayEnd=this.state.displayEnd;var rowHeight=this.props.rowHeight;var length=this.props.rowsCount;var getKey=this.props.getRowKey;var rows=this.getRows(displayStart,displayEnd).map(function(row,idx){return _this.renderRow({key:getKey?getKey(row):displayStart + idx,ref:idx,idx:displayStart + idx,row:row,height:rowHeight,columns:_this.props.columns,isSelected:_this.isRowSelected(row),expandedRows:_this.props.expandedRows,cellMetaData:_this.props.cellMetaData});});this._currentRowsLength = rows.length;if(displayStart > 0){rows.unshift(this.renderPlaceholder('top',displayStart * rowHeight));}if(length - displayEnd > 0){rows.push(this.renderPlaceholder('bottom',(length - displayEnd) * rowHeight));}var style={position:'absolute',top:0,left:0,overflowX:'auto',overflowY:'scroll',width:this.props.totalWidth + this.state.scrollbarWidth,height:this.props.height,transform:'translate3d(0, 0, 0)'};return React.createElement('div',{style:style,onScroll:this.onScroll,className:joinClasses('react-grid-Canvas',this.props.className,{opaque:this.props.cellMetaData.selected && this.props.cellMetaData.selected.active})},React.createElement('div',{style:{width:this.props.width,overflow:'hidden'}},rows));},renderRow:function renderRow(props){var RowsRenderer=this.props.rowRenderer;if(typeof RowsRenderer === 'function'){return React.createElement(RowsRenderer,props);}else if(React.isValidElement(this.props.rowRenderer)){return React.cloneElement(this.props.rowRenderer,props);}},renderPlaceholder:function renderPlaceholder(key,height){return React.createElement('div',{key:key,style:{height:height}},this.props.columns.map(function(column,idx){return React.createElement('div',{style:{width:column.width},key:idx});}));},getDefaultProps:function getDefaultProps(){return {rowRenderer:Row,onRows:emptyFunction};},isRowSelected:function isRowSelected(row){return this.props.selectedRows && this.props.selectedRows.indexOf(row) !== -1;},_currentRowsLength:0,_currentRowsRange:{start:0,end:0},_scroll:{scrollTop:0,scrollLeft:0},getInitialState:function getInitialState(){return {shouldUpdate:true,displayStart:this.props.displayStart,displayEnd:this.props.displayEnd,scrollbarWidth:0};},componentWillMount:function componentWillMount(){this._currentRowsLength = 0;this._currentRowsRange = {start:0,end:0};this._scroll = {scrollTop:0,scrollLeft:0};},componentDidMount:function componentDidMount(){ReactDOM.findDOMNode(this).scrollLeft = 0;this.onRows();},componentDidUpdate:function componentDidUpdate(){if(this._scroll.scrollTop !== 0 && this._scroll.scrollLeft !== 0){this.setScrollLeft(this._scroll.scrollLeft);}this.onRows();},componentWillUnmount:function componentWillUnmount(){this._currentRowsLength = 0;this._currentRowsRange = {start:0,end:0};this._scroll = {scrollTop:0,scrollLeft:0};},componentWillReceiveProps:function componentWillReceiveProps(nextProps){if(nextProps.rowsCount > this.props.rowsCount){ReactDOM.findDOMNode(this).scrollTop = nextProps.rowsCount * this.props.rowHeight;}var scrollbarWidth=this.getScrollbarWidth();var shouldUpdate=!(nextProps.visibleStart > this.state.displayStart && nextProps.visibleEnd < this.state.displayEnd) || nextProps.rowsCount !== this.props.rowsCount || nextProps.rowHeight !== this.props.rowHeight || nextProps.columns !== this.props.columns || nextProps.width !== this.props.width || nextProps.cellMetaData !== this.props.cellMetaData || !shallowEqual(nextProps.style,this.props.style);if(shouldUpdate){this.setState({shouldUpdate:true,displayStart:nextProps.displayStart,displayEnd:nextProps.displayEnd,scrollbarWidth:scrollbarWidth});}else {this.setState({shouldUpdate:false,scrollbarWidth:scrollbarWidth});}},shouldComponentUpdate:function shouldComponentUpdate(nextProps,nextState){return !nextState || nextState.shouldUpdate;},onRows:function onRows(){if(this._currentRowsRange !== {start:0,end:0}){this.props.onRows(this._currentRowsRange);this._currentRowsRange = {start:0,end:0};}},getRows:function getRows(displayStart,displayEnd){this._currentRowsRange = {start:displayStart,end:displayEnd};if(Array.isArray(this.props.rowGetter)){return this.props.rowGetter.slice(displayStart,displayEnd);}else {var rows=[];for(var i=displayStart;i < displayEnd;i++) {rows.push(this.props.rowGetter(i));}return rows;}},getScrollbarWidth:function getScrollbarWidth(){var scrollbarWidth=0; // Get the scrollbar width
	var canvas=ReactDOM.findDOMNode(this);scrollbarWidth = canvas.offsetWidth - canvas.clientWidth;return scrollbarWidth;},setScrollLeft:function setScrollLeft(scrollLeft){if(this._currentRowsLength !== 0){if(!this.refs)return;for(var i=0,len=this._currentRowsLength;i < len;i++) {if(this.refs[i] && this.refs[i].setScrollLeft){this.refs[i].setScrollLeft(scrollLeft);}}}},getScroll:function getScroll(){var _ReactDOM$findDOMNode=ReactDOM.findDOMNode(this);var scrollTop=_ReactDOM$findDOMNode.scrollTop;var scrollLeft=_ReactDOM$findDOMNode.scrollLeft;return {scrollTop:scrollTop,scrollLeft:scrollLeft};},setScroll:function setScroll(scrollTop,scrollLeft){var current=this.getScroll();scrollTop = scrollTop == null?current.scrollTop:scrollTop;scrollLeft = scrollLeft == null?current.scrollLeft:scrollLeft;var node=ReactDOM.findDOMNode(this);if(scrollTop !== current.scrollTop)node.scrollTop = scrollTop;if(scrollLeft !== current.scrollLeft){node.scrollLeft = scrollLeft;}},onScroll:function onScroll(e){if(e.target !== ReactDOM.findDOMNode(this))return;this.appendScrollShim();var _e$target=e.target;var scrollTop=_e$target.scrollTop;var scrollLeft=_e$target.scrollLeft;var scroll={scrollTop:scrollTop,scrollLeft:scrollLeft};this._scroll = scroll;this.props.onScroll(scroll);}});module.exports = Canvas; /***/}, /* 47 */function(module,exports,__webpack_require__){ /* TODO mixin not compatible and HTMLElement classList */ /**
		 * @jsx React.DOM


		 */'use strict';var ReactDOM=__webpack_require__(19);var ScrollShim={appendScrollShim:function appendScrollShim(){if(!this._scrollShim){var size=this._scrollShimSize();var shim=document.createElement('div');if(shim.classList){shim.classList.add('react-grid-ScrollShim'); //flow - not compatible with HTMLElement
	}else {shim.className += ' react-grid-ScrollShim';}shim.style.position = 'absolute';shim.style.top = 0;shim.style.left = 0;shim.style.width = size.width + 'px';shim.style.height = size.height + 'px';ReactDOM.findDOMNode(this).appendChild(shim);this._scrollShim = shim;}this._scheduleRemoveScrollShim();},_scrollShimSize:function _scrollShimSize(){return {width:this.props.width,height:this.props.length * this.props.rowHeight};},_scheduleRemoveScrollShim:function _scheduleRemoveScrollShim(){if(this._scheduleRemoveScrollShimTimer){clearTimeout(this._scheduleRemoveScrollShimTimer);}this._scheduleRemoveScrollShimTimer = setTimeout(this._removeScrollShim,200);},_removeScrollShim:function _removeScrollShim(){if(this._scrollShim){this._scrollShim.parentNode.removeChild(this._scrollShim);this._scrollShim = undefined;}}};module.exports = ScrollShim; /***/}, /* 48 */function(module,exports,__webpack_require__){'use strict';var _extends=__webpack_require__(2)['default'];var React=__webpack_require__(18);var joinClasses=__webpack_require__(27);var Cell=__webpack_require__(49);var ColumnMetrics=__webpack_require__(29);var ColumnUtilsMixin=__webpack_require__(31);var Row=React.createClass({displayName:'Row',propTypes:{height:React.PropTypes.number.isRequired,columns:React.PropTypes.oneOfType([React.PropTypes.object,React.PropTypes.array]).isRequired,row:React.PropTypes.object.isRequired,cellRenderer:React.PropTypes.func,isSelected:React.PropTypes.bool,idx:React.PropTypes.number.isRequired,expandedRows:React.PropTypes.arrayOf(React.PropTypes.object)},mixins:[ColumnUtilsMixin],render:function render(){var className=joinClasses(this.props.className,'react-grid-Row','react-grid-Row--' + (this.props.idx % 2 === 0?'even':'odd'));var style=_extends({},this.props.style,{height:this.getRowHeight(this.props),overflow:'hidden'});var cells=this.getCells();return React.createElement('div',_extends({},this.props,{className:className,style:style,onDragEnter:this.handleDragEnter}),React.isValidElement(this.props.row)?this.props.row:cells);},getCells:function getCells(){var _this=this;var cells=[];var lockedCells=[];var selectedColumn=this.getSelectedColumn();this.props.columns.forEach(function(column,i){var CellRenderer=_this.props.cellRenderer;var cell=React.createElement(CellRenderer,{ref:i,key:column.key + '-' + i,idx:i,rowIdx:_this.props.idx,column:column,height:_this.getRowHeight(),formatter:column.formatter,cellMetaData:_this.props.cellMetaData,rowData:_this.props.row,selectedColumn:selectedColumn,isRowSelected:_this.props.isSelected});if(column.locked){lockedCells.push(cell);}else {cells.push(cell);}});return cells.concat(lockedCells);},getRowHeight:function getRowHeight(){var rows=this.props.expandedRows || null;if(rows && this.props.key){var row=rows[this.props.key] || null;if(row){return row.height;}}return this.props.height;},renderCell:function renderCell(props){if(typeof this.props.cellRenderer == 'function'){this.props.cellRenderer.call(this,props);}if(React.isValidElement(this.props.cellRenderer)){return React.cloneElement(this.props.cellRenderer,props);}else {return this.props.cellRenderer(props);}},getDefaultProps:function getDefaultProps(){return {cellRenderer:Cell,isSelected:false,height:35};},setScrollLeft:function setScrollLeft(scrollLeft){var _this2=this;this.props.columns.forEach(function(column,i){if(column.locked){if(!_this2.refs[i])return;_this2.refs[i].setScrollLeft(scrollLeft);}});},doesRowContainSelectedCell:function doesRowContainSelectedCell(props){var selected=props.cellMetaData.selected;if(selected && selected.rowIdx === props.idx){return true;}else {return false;}},willRowBeDraggedOver:function willRowBeDraggedOver(props){var dragged=props.cellMetaData.dragged;return dragged != null && (dragged.rowIdx >= 0 || dragged.complete === true);},hasRowBeenCopied:function hasRowBeenCopied(){var copied=this.props.cellMetaData.copied;return copied != null && copied.rowIdx === this.props.idx;},shouldComponentUpdate:function shouldComponentUpdate(nextProps){return !ColumnMetrics.sameColumns(this.props.columns,nextProps.columns,ColumnMetrics.sameColumn) || this.doesRowContainSelectedCell(this.props) || this.doesRowContainSelectedCell(nextProps) || this.willRowBeDraggedOver(nextProps) || nextProps.row !== this.props.row || nextProps.idx !== this.props.idx || this.hasRowBeenCopied() || this.props.isSelected !== nextProps.isSelected || nextProps.height !== this.props.height;},handleDragEnter:function handleDragEnter(){var handleDragEnterRow=this.props.cellMetaData.handleDragEnterRow;if(handleDragEnterRow){handleDragEnterRow(this.props.idx);}},getSelectedColumn:function getSelectedColumn(){var selected=this.props.cellMetaData.selected;if(selected && selected.idx){return this.getColumn(this.props.columns,selected.idx);}}});module.exports = Row; /***/}, /* 49 */function(module,exports,__webpack_require__){'use strict';var _extends=__webpack_require__(2)['default'];var React=__webpack_require__(18);var ReactDOM=__webpack_require__(19);var joinClasses=__webpack_require__(27);var EditorContainer=__webpack_require__(50);var ExcelColumn=__webpack_require__(40);var isFunction=__webpack_require__(65);var CellMetaDataShape=__webpack_require__(66);function shouldCellUpdate(props,context){var column=props.column;var formatter=column.formatter || SimpleCellFormatter;formatter = formatter.type || formatter;return !!formatter.shouldCellUpdate && formatter.shouldCellUpdate(props,context);}var Cell=React.createClass({displayName:'Cell',propTypes:{rowIdx:React.PropTypes.number.isRequired,idx:React.PropTypes.number.isRequired,selected:React.PropTypes.shape({idx:React.PropTypes.number.isRequired}),tabIndex:React.PropTypes.number,ref:React.PropTypes.string,column:React.PropTypes.shape(ExcelColumn).isRequired,isExpanded:React.PropTypes.bool,cellMetaData:React.PropTypes.shape(CellMetaDataShape).isRequired,handleDragStart:React.PropTypes.func,className:React.PropTypes.string,rowData:React.PropTypes.object.isRequired},getDefaultProps:function getDefaultProps(){return {tabIndex:-1,ref:'cell',isExpanded:false};},getInitialState:function getInitialState(){return {isRowChanging:false,isCellValueChanging:false};},componentDidMount:function componentDidMount(){this.checkFocus();},componentDidUpdate:function componentDidUpdate(prevProps){var dragged=this.props.cellMetaData.dragged;if(this.isSelected() !== this.isSelected(prevProps) || this.isActive() !== this.isActive(prevProps))this.checkFocus();if(dragged && dragged.complete === true){this.props.cellMetaData.handleTerminateDrag();}if(this.state.isRowChanging && this.props.selectedColumn != null){this.applyUpdateClass();}},componentWillReceiveProps:function componentWillReceiveProps(nextProps){this.setState({isRowChanging:this.props.rowData !== nextProps.rowData,isCellValueChanging:this.props.value !== nextProps.value});},shouldComponentUpdate:function shouldComponentUpdate(nextProps){return this.props.column.width !== nextProps.column.width || this.props.column.left !== nextProps.column.left || this.props.rowData !== nextProps.rowData || this.props.height !== nextProps.height || this.props.rowIdx !== nextProps.rowIdx || this.isCellSelectionChanging(nextProps) || this.isDraggedCellChanging(nextProps) || this.isCopyCellChanging(nextProps) || this.props.isRowSelected !== nextProps.isRowSelected || this.isSelected() || shouldCellUpdate(nextProps);},getStyle:function getStyle(){var style={position:'absolute',width:this.props.column.width,height:this.props.height,left:this.props.column.left};return style;},render:function render(){var style=this.getStyle();var className=this.getCellClass();return React.createElement('div',_extends({},this.props,{className:className,style:style,onClick:this.onCellClick,onDoubleClick:this.onCellDoubleClick}),this.renderCellContent(),this.props.children,React.createElement('div',{className:'drag-handle',draggable:'true'}));},renderCellContent:function renderCellContent(){var _props=this.props;var cellMetaData=_props.cellMetaData;var column=_props.column;var idx=_props.idx;var rowIdx=_props.rowIdx;var rowData=_props.rowData;var height=_props.height;var isExpanded=_props.isExpanded;var isRowSelected=_props.isRowSelected;var formatter=column.formatter;var CellContent;var props={cellMetaData:cellMetaData,column:column,idx:idx,rowIdx:rowIdx,rowData:rowData,height:height,isExpanded:isExpanded,isRowSelected:isRowSelected,value:this.getValue(),isSelected:this.isSelected()};if(this.isActive()){CellContent = React.createElement(EditorContainer,props);}else if(React.isValidElement(formatter)){CellContent = React.cloneElement(formatter,props);}else if(isFunction(formatter)){CellContent = React.createElement(formatter,props);}else {CellContent = React.createElement(SimpleCellFormatter,props);}return React.createElement('div',{ref:'cell',className:'react-grid-Cell__value'},CellContent,this.props.cellControls);},isColumnSelected:function isColumnSelected(){var meta=this.props.cellMetaData;if(meta == null || meta.selected == null){return false;}return meta.selected && meta.selected.idx === this.props.idx;},isSelected:function isSelected(){var props=arguments.length <= 0 || arguments[0] === undefined?this.props:arguments[0];var meta=props.cellMetaData;if(meta == null || meta.selected == null){return false;}return !!(meta.selected && meta.selected.rowIdx === props.rowIdx && meta.selected.idx === props.idx);},isActive:function isActive(){var props=arguments.length <= 0 || arguments[0] === undefined?this.props:arguments[0];var meta=props.cellMetaData;if(meta == null || meta.selected == null){return false;}return this.isSelected(props) && meta.selected.active === true;},isCellSelectionChanging:function isCellSelectionChanging(nextProps){var meta=this.props.cellMetaData;if(meta == null || meta.selected == null){return false;}var nextSelected=nextProps.cellMetaData.selected;if(meta.selected && nextSelected){return this.props.idx === nextSelected.idx || this.props.idx === meta.selected.idx;}else {return true;}},getRowData:function getRowData(){return this.props.rowData.toJSON?this.props.rowData.toJSON():this.props.rowData;},onCellClick:function onCellClick(){var meta=this.props.cellMetaData;if(meta != null && meta.onCellClick != null){meta.onCellClick({rowIdx:this.props.rowIdx,idx:this.props.idx});}},onCellDoubleClick:function onCellDoubleClick(){var meta=this.props.cellMetaData;if(meta != null && meta.onCellDoubleClick != null){meta.onCellDoubleClick({rowIdx:this.props.rowIdx,idx:this.props.idx});}},checkFocus:function checkFocus(){if(this.isSelected() && !this.isActive()){ReactDOM.findDOMNode(this).focus();}},getCellClass:function getCellClass(){var className=joinClasses(this.props.column.cellClass,'react-grid-Cell',this.props.className,this.props.column.locked?'react-grid-Cell--locked':null);var extraClasses=joinClasses({'selected':this.isSelected() && !this.isActive(),'editing':this.isActive(),'copied':this.isCopied(),'active-drag-cell':this.isSelected() || this.isDraggedOver(),'is-dragged-over-up':this.isDraggedOverUpwards(),'is-dragged-over-down':this.isDraggedOverDownwards(),'was-dragged-over':this.wasDraggedOver()});return joinClasses(className,extraClasses);},getUpdateCellClass:function getUpdateCellClass(){return this.props.column.getUpdateCellClass?this.props.column.getUpdateCellClass(this.props.selectedColumn,this.props.column,this.state.isCellValueChanging):'';},applyUpdateClass:function applyUpdateClass(){var updateCellClass=this.getUpdateCellClass(); // -> removing the class
	if(updateCellClass != null && updateCellClass != ''){var cellDOMNode=ReactDOM.findDOMNode(this);if(cellDOMNode.classList){cellDOMNode.classList.remove(updateCellClass); // -> and re-adding the class
	cellDOMNode.classList.add(updateCellClass);}else if(cellDOMNode.className.indexOf(updateCellClass) === -1){ // IE9 doesn't support classList, nor (I think) altering element.className
	// without replacing it wholesale.
	cellDOMNode.className = cellDOMNode.className + ' ' + updateCellClass;}}},setScrollLeft:function setScrollLeft(scrollLeft){var ctrl=this; //flow on windows has an outdated react declaration, once that gets updated, we can remove this
	if(ctrl.isMounted()){var node=ReactDOM.findDOMNode(this);var transform='translate3d(' + scrollLeft + 'px, 0px, 0px)';node.style.webkitTransform = transform;node.style.transform = transform;}},isCopied:function isCopied(){var copied=this.props.cellMetaData.copied;return copied && copied.rowIdx === this.props.rowIdx && copied.idx === this.props.idx;},isDraggedOver:function isDraggedOver(){var dragged=this.props.cellMetaData.dragged;return dragged && dragged.overRowIdx === this.props.rowIdx && dragged.idx === this.props.idx;},wasDraggedOver:function wasDraggedOver(){var dragged=this.props.cellMetaData.dragged;return dragged && (dragged.overRowIdx < this.props.rowIdx && this.props.rowIdx < dragged.rowIdx || dragged.overRowIdx > this.props.rowIdx && this.props.rowIdx > dragged.rowIdx) && dragged.idx === this.props.idx;},isDraggedCellChanging:function isDraggedCellChanging(nextProps){var isChanging;var dragged=this.props.cellMetaData.dragged;var nextDragged=nextProps.cellMetaData.dragged;if(dragged){isChanging = nextDragged && this.props.idx === nextDragged.idx || dragged && this.props.idx === dragged.idx;return isChanging;}else {return false;}},isCopyCellChanging:function isCopyCellChanging(nextProps){var copied=this.props.cellMetaData.copied;var nextCopied=nextProps.cellMetaData.copied;if(copied){return nextCopied && this.props.idx === nextCopied.idx || copied && this.props.idx === copied.idx;}else {return false;}},isDraggedOverUpwards:function isDraggedOverUpwards(){var dragged=this.props.cellMetaData.dragged;return !this.isSelected() && this.isDraggedOver() && this.props.rowIdx < dragged.rowIdx;},isDraggedOverDownwards:function isDraggedOverDownwards(){var dragged=this.props.cellMetaData.dragged;return !this.isSelected() && this.isDraggedOver() && this.props.rowIdx > dragged.rowIdx;},getValue:function getValue(){var props=arguments.length <= 0 || arguments[0] === undefined?this.props:arguments[0];var key=props.column.key;var row=props.rowData;if(key === 'select-row')return props.isRowSelected;else if(isFunction(row.get))return row.get(key);else return row[key];}});var SimpleCellFormatter=React.createClass({displayName:'SimpleCellFormatter',render:function render(){ // objects like dates will throw when specified as children
	// so cast to a string
	return React.createElement('span',null,'' + this.props.value);},shouldComponentUpdate:function shouldComponentUpdate(nextProps){return nextProps.value !== this.props.value;}});module.exports = Cell; /***/}, /* 50 */function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(18);var isTextInputElement=__webpack_require__(51);var joinClasses=__webpack_require__(27);var keyboardHandlerMixin=__webpack_require__(52);var SimpleTextEditor=__webpack_require__(53);var isFunction=__webpack_require__(65);var checkAndCallOnEditor=function checkAndCallOnEditor(ctx,fn){for(var _len=arguments.length,args=Array(_len > 2?_len - 2:0),_key=2;_key < _len;_key++) {args[_key - 2] = arguments[_key];}var _ctx$getEditor;return isFunction(ctx.getEditor()[fn])?(_ctx$getEditor = ctx.getEditor())[fn].apply(_ctx$getEditor,args):false;};var EditorContainer=React.createClass({displayName:'EditorContainer',mixins:[keyboardHandlerMixin],propTypes:{rowData:React.PropTypes.object.isRequired,cellMetaData:React.PropTypes.shape({selected:React.PropTypes.object.isRequired,copied:React.PropTypes.object,dragged:React.PropTypes.object,onCellClick:React.PropTypes.func,onCellDoubleClick:React.PropTypes.func}).isRequired,column:React.PropTypes.object.isRequired,height:React.PropTypes.number.isRequired},changeCommitted:false,getInitialState:function getInitialState(){return {isInvalid:false};},componentDidMount:function componentDidMount(){checkAndCallOnEditor(this,'editorWillMount',this.props.cellMetaData);},createEditor:function createEditor(){var _this=this;var customEditor=this.props.column.editor;var editorProps={ref:function ref(c){return _this.editor = c;},column:this.props.column,value:this.getInitialValue(),onCommit:this.commit,rowData:this.props.rowData,height:this.props.height};if(customEditor){if(React.isValidElement(customEditor))return React.cloneElement(customEditor,editorProps);else if(typeof customEditor === 'function')return customEditor(editorProps);}return React.createElement(SimpleTextEditor,editorProps);},onPressEnter:function onPressEnter(){if(!this.editorIsSelectOpen()){this.commit({key:'Enter'});}},onPressTab:function onPressTab(){this.commit({key:'Tab'});},onPressEscape:function onPressEscape(e){if(!this.editorIsSelectOpen()){this.props.cellMetaData.onCommitCancel();}else { // prevent event from bubbling if editor has results to select
	e.stopPropagation();}},onPressArrowDown:function onPressArrowDown(e){if(this.editorHasResults()){ //dont want to propogate as that then moves us round the grid
	e.stopPropagation();}else {this.commit(e);}},onPressArrowUp:function onPressArrowUp(e){if(this.editorHasResults()){ //dont want to propogate as that then moves us round the grid
	e.stopPropagation();}else {this.commit(e);}},onPressArrowLeft:function onPressArrowLeft(e){ //prevent event propogation. this disables left cell navigation
	if(!this.isCaretAtBeginningOfInput()){e.stopPropagation();}else {this.commit(e);}},onPressArrowRight:function onPressArrowRight(e){ //prevent event propogation. this disables right cell navigation
	if(!this.isCaretAtEndOfInput()){e.stopPropagation();}else {this.commit(e);}},shouldPreventKeyDown:function shouldPreventKeyDown(e){return checkAndCallOnEditor(this,'shouldPreventKeyDown',e);},editorHasResults:function editorHasResults(){return checkAndCallOnEditor(this,'hasResults');},editorIsSelectOpen:function editorIsSelectOpen(){return checkAndCallOnEditor(this,'isSelectOpen');},getEditor:function getEditor(){return this.editor;},commit:function commit(args){var opts=args || {},editor=this.getEditor(),updated;if(editor.getValue)updated = editor.getValue();if(this.isNewValueValid(updated)){var cellKey=this.props.column.key;this.props.cellMetaData.onCommit({cellKey:cellKey,updated:updated,rowIdx:this.props.rowIdx,key:opts.key});}this.changeCommitted = true;},isNewValueValid:function isNewValueValid(value){if(isFunction(this.getEditor().validate)){var isValid=checkAndCallOnEditor(this,'validate',value);this.setState({isInvalid:!isValid});return isValid;}else {return true;}},getInputNode:function getInputNode(){return this.getEditor().getInputNode && this.getEditor().getInputNode();},getInitialValue:function getInitialValue(){var selected=this.props.cellMetaData.selected;var keyCode=selected.initialKeyCode;if(!keyCode || keyCode === 'Enter'){return this.props.value;}else {return '';}},getContainerClass:function getContainerClass(){return joinClasses({'has-error':this.state.isInvalid === true});},renderStatusIcon:function renderStatusIcon(){if(this.state.isInvalid === true){return React.createElement('span',{className:'glyphicon glyphicon-remove form-control-feedback'});}},render:function render(){return React.createElement('div',{className:this.getContainerClass(),onKeyDown:this.onKeyDown},this.createEditor(),this.renderStatusIcon());},isCaretAtBeginningOfInput:function isCaretAtBeginningOfInput(){var inputNode=this.getInputNode();if(!isTextInputElement(inputNode))return true;return inputNode.selectionStart === inputNode.selectionEnd && inputNode.selectionStart === 0;},isCaretAtEndOfInput:function isCaretAtEndOfInput(){var inputNode=this.getInputNode();if(!isTextInputElement(inputNode))return true;return inputNode.selectionStart === (inputNode.value || '').length;},componentWillUnmount:function componentWillUnmount(){if(!this.changeCommitted && !this.hasEscapeBeenPressed()){this.commit({key:'Enter'});}},hasEscapeBeenPressed:function hasEscapeBeenPressed(){var pressed=false;var escapeKey=27;if(window.event){if(window.event.keyCode === escapeKey){pressed = true;}else if(window.event.which === escapeKey){pressed = true;}}return pressed;}});module.exports = EditorContainer; /***/}, /* 51 */function(module,exports){ /**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule isTextInputElement
		 */'use strict'; /**
		 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
		 */var supportedInputTypes={'color':true,'date':true,'datetime':true,'datetime-local':true,'email':true,'month':true,'number':true,'password':true,'range':true,'search':true,'tel':true,'text':true,'time':true,'url':true,'week':true};function isTextInputElement(elem){var nodeName=elem && elem.nodeName && elem.nodeName.toLowerCase();return nodeName && (nodeName === 'input' && supportedInputTypes[elem.type] || nodeName === 'textarea');}module.exports = isTextInputElement; /***/}, /* 52 */function(module,exports){'use strict';var KeyboardHandlerMixin={onKeyDown:function onKeyDown(e){if(!this.shouldPreventKeyDown || !this.shouldPreventKeyDown(e)){if(this.isCtrlKeyHeldDown(e)){this.checkAndCall('onPressKeyWithCtrl',e);}else if(this.isKeyExplicitlyHandled(e.key)){ //break up individual keyPress events to have their own specific callbacks
	//this allows multiple mixins to listen to onKeyDown events and somewhat reduces methodName clashing
	var callBack='onPress' + e.key;this.checkAndCall(callBack,e);}else if(this.isKeyPrintable(e.keyCode)){this.checkAndCall('onPressChar',e);}}}, //taken from http://stackoverflow.com/questions/12467240/determine-if-javascript-e-keycode-is-a-printable-non-control-character
	isKeyPrintable:function isKeyPrintable(keycode){var valid=keycode > 47 && keycode < 58 ||  // number keys
	keycode == 32 || keycode == 13 ||  // spacebar & return key(s) (if you want to allow carriage returns)
	keycode > 64 && keycode < 91 ||  // letter keys
	keycode > 95 && keycode < 112 ||  // numpad keys
	keycode > 185 && keycode < 193 ||  // ;=,-./` (in order)
	keycode > 218 && keycode < 223; // [\]' (in order)
	return valid;},isKeyExplicitlyHandled:function isKeyExplicitlyHandled(key){return typeof this['onPress' + key] === 'function';},isCtrlKeyHeldDown:function isCtrlKeyHeldDown(e){return e.ctrlKey === true && e.key !== 'Control';},checkAndCall:function checkAndCall(methodName,args){if(typeof this[methodName] === 'function'){this[methodName](args);}}};module.exports = KeyboardHandlerMixin; /***/}, /* 53 */function(module,exports,__webpack_require__){'use strict';var _inherits=__webpack_require__(54)['default'];var _classCallCheck=__webpack_require__(63)['default'];var React=__webpack_require__(18);var EditorBase=__webpack_require__(64);var SimpleTextEditor=(function(_EditorBase){_inherits(SimpleTextEditor,_EditorBase);function SimpleTextEditor(){_classCallCheck(this,SimpleTextEditor);_EditorBase.apply(this,arguments);}SimpleTextEditor.prototype.render = function render(){return React.createElement('input',{ref:'input',type:'text',className:'form-control',onBlur:this.props.onCommit,defaultValue:this.props.value});};return SimpleTextEditor;})(EditorBase);module.exports = SimpleTextEditor; /***/}, /* 54 */function(module,exports,__webpack_require__){"use strict";var _Object$create=__webpack_require__(55)["default"];var _Object$setPrototypeOf=__webpack_require__(57)["default"];exports["default"] = function(subClass,superClass){if(typeof superClass !== "function" && superClass !== null){throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = _Object$create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)_Object$setPrototypeOf?_Object$setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;};exports.__esModule = true; /***/}, /* 55 */function(module,exports,__webpack_require__){module.exports = {"default":__webpack_require__(56),__esModule:true}; /***/}, /* 56 */function(module,exports,__webpack_require__){var $=__webpack_require__(12);module.exports = function create(P,D){return $.create(P,D);}; /***/}, /* 57 */function(module,exports,__webpack_require__){module.exports = {"default":__webpack_require__(58),__esModule:true}; /***/}, /* 58 */function(module,exports,__webpack_require__){__webpack_require__(59);module.exports = __webpack_require__(8).Object.setPrototypeOf; /***/}, /* 59 */function(module,exports,__webpack_require__){ // 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export=__webpack_require__(6);$export($export.S,'Object',{setPrototypeOf:__webpack_require__(60).set}); /***/}, /* 60 */function(module,exports,__webpack_require__){ // Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */var getDesc=__webpack_require__(12).getDesc,isObject=__webpack_require__(61),anObject=__webpack_require__(62);var check=function check(O,proto){anObject(O);if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");};module.exports = {set:_Object$setPrototypeOf2 || ('__proto__' in {}? // eslint-disable-line
	(function(test,buggy,set){try{set = __webpack_require__(9)(Function.call,getDesc(Object.prototype,'__proto__').set,2);set(test,[]);buggy = !(test instanceof Array);}catch(e) {buggy = true;}return function setPrototypeOf(O,proto){check(O,proto);if(buggy)O.__proto__ = proto;else set(O,proto);return O;};})({},false):undefined),check:check}; /***/}, /* 61 */function(module,exports){module.exports = function(it){return typeof it === 'object'?it !== null:typeof it === 'function';}; /***/}, /* 62 */function(module,exports,__webpack_require__){var isObject=__webpack_require__(61);module.exports = function(it){if(!isObject(it))throw TypeError(it + ' is not an object!');return it;}; /***/}, /* 63 */function(module,exports){"use strict";exports["default"] = function(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}};exports.__esModule = true; /***/}, /* 64 */function(module,exports,__webpack_require__){'use strict';var _inherits=__webpack_require__(54)['default'];var _classCallCheck=__webpack_require__(63)['default'];var React=__webpack_require__(18);var ReactDOM=__webpack_require__(19);var ExcelColumn=__webpack_require__(40);var EditorBase=(function(_React$Component){_inherits(EditorBase,_React$Component);function EditorBase(){_classCallCheck(this,EditorBase);_React$Component.apply(this,arguments);}EditorBase.prototype.getStyle = function getStyle(){return {width:'100%',height:this.props.height};};EditorBase.prototype.getValue = function getValue(){var updated={};updated[this.props.column.key] = this.getInputNode().value;return updated;};EditorBase.prototype.getInputNode = function getInputNode(){var domNode=ReactDOM.findDOMNode(this);if(domNode.tagName === 'INPUT'){return domNode;}else {return domNode.querySelector('input:not([type=hidden])');}};EditorBase.prototype.editorWillMount = function editorWillMount(){var inputNode=this.getInputNode();if(typeof inputNode.focus === 'function')inputNode.focus();};return EditorBase;})(React.Component);EditorBase.propTypes = {value:React.PropTypes.any,column:React.PropTypes.shape(ExcelColumn).isRequired,onCommit:React.PropTypes.func.isRequired};module.exports = EditorBase; /***/}, /* 65 */function(module,exports){"use strict";var isFunction=function isFunction(functionToCheck){var getType={};return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';};module.exports = isFunction; /***/}, /* 66 */function(module,exports,__webpack_require__){'use strict';var PropTypes=__webpack_require__(18).PropTypes;module.exports = {selected:PropTypes.object.isRequired,copied:PropTypes.object,dragged:PropTypes.object,onCellClick:PropTypes.func.isRequired}; /***/}, /* 67 */function(module,exports,__webpack_require__){ /* TODO mixins */'use strict';var React=__webpack_require__(18);var ReactDOM=__webpack_require__(19);var DOMMetrics=__webpack_require__(68);var getScrollbarSize=__webpack_require__(32);var min=Math.min;var max=Math.max;var floor=Math.floor;var ceil=Math.ceil;module.exports = {mixins:[DOMMetrics.MetricsMixin],DOMMetrics:{viewportHeight:function viewportHeight(){return ReactDOM.findDOMNode(this).offsetHeight;}},propTypes:{rowHeight:React.PropTypes.number,rowsCount:React.PropTypes.number.isRequired},getDefaultProps:function getDefaultProps(){return {rowHeight:30};},getInitialState:function getInitialState(){return this.getGridState(this.props);},getGridState:function getGridState(props){var renderedRowsCount=ceil((props.minHeight - props.rowHeight) / props.rowHeight);var totalRowCount=min(renderedRowsCount * 2,props.rowsCount);return {displayStart:0,displayEnd:totalRowCount,height:props.minHeight,scrollTop:0,scrollLeft:0};},scrollToCell:function scrollToCell(_ref){var x=_ref[0];var y=_ref[1];var props=arguments.length <= 1 || arguments[1] === undefined?this.props:arguments[1];var rowHeight=props.rowHeight;var rowsCount=props.rowsCount;var columnMetrics=props.columnMetrics;var columns=columnMetrics.columns;var width=columnMetrics.totalWidth;var _state=this.state;var height=_state.height;var scrollTop=_state.scrollTop;var scrollLeft=_state.scrollLeft;var cellTop=Math.min(y,rowsCount) * rowHeight,scrollBar=columnMetrics.width > columnMetrics.totalWidth?getScrollbarSize():0;cellTop = cellTop < scrollTop // moving up
	?cellTop:cellTop + rowHeight > scrollTop + height // moving down
	?cellTop + rowHeight - height + scrollBar:null;var column=columns[x];var cellLeft=column.locked?0:column.left;var lockedLeft=columns.filter(function(c){return c.locked;}).reduce(function(left,c){return left + c.width;},0);cellLeft = cellLeft < scrollLeft + lockedLeft // moving left
	?Math.max(0,cellLeft - lockedLeft):cellLeft + column.width > scrollLeft + width //moving right
	?cellLeft + column.width - width:null;return {scrollTop:cellTop,scrollLeft:cellLeft};},updateScroll:function updateScroll(scrollTop,scrollLeft,height,rowHeight,length){var renderedRowsCount=ceil(height / rowHeight);var visibleStart=floor(scrollTop / rowHeight);var visibleEnd=min(visibleStart + renderedRowsCount,length);var displayStart=max(0,visibleStart - renderedRowsCount * 2);var displayEnd=min(visibleStart + renderedRowsCount * 2,length);var nextScrollState={visibleStart:visibleStart,visibleEnd:visibleEnd,displayStart:displayStart,displayEnd:displayEnd,height:height,scrollTop:scrollTop,scrollLeft:scrollLeft};this.setState(nextScrollState);},metricsUpdated:function metricsUpdated(){var height=this.DOMMetrics.viewportHeight();if(height){this.updateScroll(this.state.scrollTop,this.state.scrollLeft,height,this.props.rowHeight,this.props.rowsCount);}},componentWillReceiveProps:function componentWillReceiveProps(nextProps){if(this.props.rowHeight !== nextProps.rowHeight || this.props.minHeight !== nextProps.minHeight){this.setState(this.getGridState(nextProps));}else if(this.props.rowsCount !== nextProps.rowsCount){this.updateScroll(this.state.scrollTop,this.state.scrollLeft,this.state.height,nextProps.rowHeight,nextProps.rowsCount);}}}; /***/}, /* 68 */function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(18);var emptyFunction=__webpack_require__(43);var shallowCloneObject=__webpack_require__(28);var contextTypes={metricsComputator:React.PropTypes.object};var MetricsComputatorMixin={childContextTypes:contextTypes,getChildContext:function getChildContext(){return {metricsComputator:this};},getMetricImpl:function getMetricImpl(name){return this._DOMMetrics.metrics[name].value;},registerMetricsImpl:function registerMetricsImpl(component,metrics){var getters={};var s=this._DOMMetrics;for(var name in metrics) {if(s.metrics[name] !== undefined){throw new Error('DOM metric ' + name + ' is already defined');}s.metrics[name] = {component:component,computator:metrics[name].bind(component)};getters[name] = this.getMetricImpl.bind(null,name);}if(s.components.indexOf(component) === -1){s.components.push(component);}return getters;},unregisterMetricsFor:function unregisterMetricsFor(component){var s=this._DOMMetrics;var idx=s.components.indexOf(component);if(idx > -1){s.components.splice(idx,1);var name;var metricsToDelete={};for(name in s.metrics) {if(s.metrics[name].component === component){metricsToDelete[name] = true;}}for(name in metricsToDelete) {delete s.metrics[name];}}},updateMetrics:function updateMetrics(){var s=this._DOMMetrics;var needUpdate=false;for(var name in s.metrics) {var newMetric=s.metrics[name].computator();if(newMetric !== s.metrics[name].value){needUpdate = true;}s.metrics[name].value = newMetric;}if(needUpdate){for(var i=0,len=s.components.length;i < len;i++) {if(s.components[i].metricsUpdated){s.components[i].metricsUpdated();}}}},componentWillMount:function componentWillMount(){this._DOMMetrics = {metrics:{},components:[]};},componentDidMount:function componentDidMount(){if(window.addEventListener){window.addEventListener('resize',this.updateMetrics);}else {window.attachEvent('resize',this.updateMetrics);}this.updateMetrics();},componentWillUnmount:function componentWillUnmount(){window.removeEventListener('resize',this.updateMetrics);}};var MetricsMixin={contextTypes:contextTypes,componentWillMount:function componentWillMount(){if(this.DOMMetrics){this._DOMMetricsDefs = shallowCloneObject(this.DOMMetrics);this.DOMMetrics = {};for(var name in this._DOMMetricsDefs) {this.DOMMetrics[name] = emptyFunction;}}},componentDidMount:function componentDidMount(){if(this.DOMMetrics){this.DOMMetrics = this.registerMetrics(this._DOMMetricsDefs);}},componentWillUnmount:function componentWillUnmount(){if(!this.registerMetricsImpl){return this.context.metricsComputator.unregisterMetricsFor(this);}if(this.hasOwnProperty('DOMMetrics')){delete this.DOMMetrics;}},registerMetrics:function registerMetrics(metrics){if(this.registerMetricsImpl){return this.registerMetricsImpl(this,metrics);}else {return this.context.metricsComputator.registerMetricsImpl(this,metrics);}},getMetric:function getMetric(name){if(this.getMetricImpl){return this.getMetricImpl(name);}else {return this.context.metricsComputator.getMetricImpl(name);}}};module.exports = {MetricsComputatorMixin:MetricsComputatorMixin,MetricsMixin:MetricsMixin}; /***/}, /* 69 */function(module,exports){ /* TODO mixins */"use strict";module.exports = {componentDidMount:function componentDidMount(){this._scrollLeft = this.refs.viewport?this.refs.viewport.getScroll().scrollLeft:0;this._onScroll();},componentDidUpdate:function componentDidUpdate(){this._onScroll();},componentWillMount:function componentWillMount(){this._scrollLeft = undefined;},componentWillUnmount:function componentWillUnmount(){this._scrollLeft = undefined;},onScroll:function onScroll(props){if(this._scrollLeft !== props.scrollLeft){this._scrollLeft = props.scrollLeft;this._onScroll();}},_onScroll:function _onScroll(){if(this._scrollLeft !== undefined){this.refs.header.setScrollLeft(this._scrollLeft);if(this.refs.viewport){this.refs.viewport.setScrollLeft(this._scrollLeft);}}}}; /***/}, /* 70 */function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(18);var CheckboxEditor=React.createClass({displayName:'CheckboxEditor',PropTypes:{value:React.PropTypes.bool.isRequired,rowIdx:React.PropTypes.number.isRequired,column:React.PropTypes.shape({key:React.PropTypes.string.isRequired,onCellChange:React.PropTypes.func.isRequired}).isRequired},render:function render(){var checked=this.props.value != null?this.props.value:false;return React.createElement('input',{className:'react-grid-CheckBox',type:'checkbox',checked:checked,onClick:this.handleChange});},handleChange:function handleChange(e){this.props.column.onCellChange(this.props.rowIdx,this.props.column.key,e);}});module.exports = CheckboxEditor; /***/}, /* 71 */function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(18);var ExcelColumn=__webpack_require__(40);var FilterableHeaderCell=React.createClass({displayName:'FilterableHeaderCell',propTypes:{onChange:React.PropTypes.func.isRequired,column:React.PropTypes.shape(ExcelColumn).isRequired},getInitialState:function getInitialState(){return {filterTerm:''};},handleChange:function handleChange(e){var val=e.target.value;this.setState({filterTerm:val});this.props.onChange({filterTerm:val,columnKey:this.props.column.key});},render:function render(){return React.createElement('div',null,React.createElement('div',{className:'form-group'},this.renderInput()));},renderInput:function renderInput(){if(this.props.column.filterable === false){return React.createElement('span',null);}else {var input_key='header-filter-' + this.props.column.key;return React.createElement('input',{key:input_key,type:'text',className:'form-control input-sm',placeholder:'Search',value:this.state.filterTerm,onChange:this.handleChange});}}});module.exports = FilterableHeaderCell; /***/}, /* 72 */function(module,exports,__webpack_require__){ /* TODO mixins */'use strict';var _classCallCheck=__webpack_require__(63)['default'];var ColumnMetrics=__webpack_require__(29);var DOMMetrics=__webpack_require__(68);var PropTypes=__webpack_require__(18).PropTypes;var ColumnUtils=__webpack_require__(31);var ReactDOM=__webpack_require__(19);var Column=function Column(){_classCallCheck(this,Column);};module.exports = {mixins:[DOMMetrics.MetricsMixin],propTypes:{columns:PropTypes.arrayOf(Column),minColumnWidth:PropTypes.number,columnEquality:PropTypes.func},DOMMetrics:{gridWidth:function gridWidth(){return ReactDOM.findDOMNode(this).parentElement.offsetWidth;}},getDefaultProps:function getDefaultProps(){return {minColumnWidth:80,columnEquality:ColumnMetrics.sameColumn};},componentWillMount:function componentWillMount(){this._mounted = true;},componentWillReceiveProps:function componentWillReceiveProps(nextProps){if(nextProps.columns){if(!ColumnMetrics.sameColumns(this.props.columns,nextProps.columns,this.props.columnEquality) || nextProps.minWidth !== this.props.minWidth){var columnMetrics=this.createColumnMetrics(nextProps);this.setState({columnMetrics:columnMetrics});}}},getTotalWidth:function getTotalWidth(){var totalWidth=0; // avoid the warning about checking in render
	if(this._mounted){totalWidth = this.DOMMetrics.gridWidth();}else {totalWidth = ColumnUtils.getSize(this.props.columns) * this.props.minColumnWidth;}return totalWidth;},getColumnMetricsType:function getColumnMetricsType(metrics){var totalWidth=metrics.totalWidth || this.getTotalWidth();var currentMetrics={columns:metrics.columns,totalWidth:totalWidth,minColumnWidth:metrics.minColumnWidth};var updatedMetrics=ColumnMetrics.recalculate(currentMetrics);return updatedMetrics;},getColumn:function getColumn(idx){var columns=this.state.columnMetrics.columns;if(Array.isArray(columns)){return columns[idx];}else if(typeof Immutable !== 'undefined'){return columns.get(idx);}},getSize:function getSize(){var columns=this.state.columnMetrics.columns;if(Array.isArray(columns)){return columns.length;}else if(typeof Immutable !== 'undefined'){return columns.size;}},metricsUpdated:function metricsUpdated(){var columnMetrics=this.createColumnMetrics();this.setState({columnMetrics:columnMetrics});},createColumnMetrics:function createColumnMetrics(){var props=arguments.length <= 0 || arguments[0] === undefined?this.props:arguments[0];var gridColumns=this.setupGridColumns(props);return this.getColumnMetricsType({columns:gridColumns,minColumnWidth:props.minColumnWidth,totalWidth:props.minWidth});},onColumnResize:function onColumnResize(index,width){var columnMetrics=ColumnMetrics.resizeColumn(this.state.columnMetrics,index,width);this.setState({columnMetrics:columnMetrics});}}; /***/}, /* 73 */function(module,exports){'use strict';var RowUtils={get:function get(row,property){if(typeof row.get === 'function'){return row.get(property);}else {return row[property];}}};module.exports = RowUtils; /***/}, /* 74 */function(module,exports,__webpack_require__){'use strict';var Editors={DropDownEditor:__webpack_require__(75),SimpleTextEditor:__webpack_require__(53),CheckboxEditor:__webpack_require__(70)};module.exports = Editors; /***/}, /* 75 */function(module,exports,__webpack_require__){'use strict';var _inherits=__webpack_require__(54)['default'];var _classCallCheck=__webpack_require__(63)['default'];var React=__webpack_require__(18);var ReactDOM=__webpack_require__(19);var EditorBase=__webpack_require__(64);var DropDownEditor=(function(_EditorBase){_inherits(DropDownEditor,_EditorBase);function DropDownEditor(){_classCallCheck(this,DropDownEditor);_EditorBase.apply(this,arguments);}DropDownEditor.prototype.getInputNode = function getInputNode(){return ReactDOM.findDOMNode(this);};DropDownEditor.prototype.onClick = function onClick(){this.getInputNode().focus();};DropDownEditor.prototype.onDoubleClick = function onDoubleClick(){this.getInputNode().focus();};DropDownEditor.prototype.render = function render(){return React.createElement('select',{style:this.getStyle(),defaultValue:this.props.value,onBlur:this.props.onBlur,onChange:this.onChange},this.renderOptions());};DropDownEditor.prototype.renderOptions = function renderOptions(){var options=[];this.props.options.forEach(function(name){options.push(React.createElement('option',{key:name,value:name},name));},this);return options;};return DropDownEditor;})(EditorBase);DropDownEditor.propTypes = {options:React.PropTypes.arrayOf(React.PropTypes.string).isRequired};module.exports = DropDownEditor; /***/}, /* 76 */function(module,exports,__webpack_require__){ //not including this
	//it currently requires the whole of moment, which we dont want to take as a dependency
	'use strict';var ImageFormatter=__webpack_require__(77);var Formatters={ImageFormatter:ImageFormatter};module.exports = Formatters; /***/}, /* 77 */function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(18);var PendingPool={};var ReadyPool={};var ImageFormatter=React.createClass({displayName:'ImageFormatter',propTypes:{value:React.PropTypes.string.isRequired},getInitialState:function getInitialState(){return {ready:false};},componentWillMount:function componentWillMount(){this._load(this.props.value);},componentWillReceiveProps:function componentWillReceiveProps(nextProps){if(nextProps.value !== this.props.value){this.setState({value:null});this._load(nextProps.value);}},render:function render(){var style=this.state.value?{backgroundImage:'url(' + this.state.value + ')'}:undefined;return React.createElement('div',{className:'react-grid-image',style:style});},_load:function _load( /*string*/src){if(ReadyPool[src]){this.setState({value:src});return;}if(PendingPool[src]){PendingPool[src].push(this._onLoad);return;}PendingPool[src] = [this._onLoad];var img=new Image();img.onload = function(){PendingPool[src].forEach( /*function*/function(callback){callback(src);});delete PendingPool[src];img.onload = null;src = undefined;};img.src = src;},_onLoad:function _onLoad( /*string*/src){if(this.isMounted() && src === this.props.value){this.setState({value:src});}}});module.exports = ImageFormatter; /***/}, /* 78 */function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(18);var Toolbar=React.createClass({displayName:'Toolbar',propTypes:{onAddRow:React.PropTypes.func,onToggleFilter:React.PropTypes.func.isRequired,enableFilter:React.PropTypes.bool,numberOfRows:React.PropTypes.number.isRequired},onAddRow:function onAddRow(){if(this.props.onAddRow !== null && this.props.onAddRow instanceof Function){this.props.onAddRow({newRowIndex:this.props.numberOfRows});}},getDefaultProps:function getDefaultProps(){return {enableAddRow:true};},renderAddRowButton:function renderAddRowButton(){if(this.props.onAddRow){return React.createElement('button',{type:'button',className:'btn',onClick:this.onAddRow},'Add Row');}},renderToggleFilterButton:function renderToggleFilterButton(){if(this.props.enableFilter){return React.createElement('button',{type:'button',className:'btn',onClick:this.props.onToggleFilter},'Filter Rows');}},render:function render(){return React.createElement('div',{className:'react-grid-Toolbar'},React.createElement('div',{className:'tools'},this.renderAddRowButton(),this.renderToggleFilterButton()));}});module.exports = Toolbar; /***/} /******/]));});; /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var QuickStartDescription = __webpack_require__(63);
	var ReactPlayground = __webpack_require__(66);
	var faker = __webpack_require__(125);

	var AllFeaturesExample = '\n  var Editors             = ReactDataGrid.Editors;\n  var Toolbar             = ReactDataGrid.Toolbar;\n  var AutoCompleteEditor  = window.AutoCompleteEditor;\n  var DropDownEditor      = Editors.DropDownEditor;\n\n  faker.locale = \'en_GB\';\n\n  function createFakeRowObjectData(/*number*/ index) {\n    return {\n      id: \'id_\' + index,\n      avartar: faker.image.avatar(),\n      county: faker.address.county(),\n      email: faker.internet.email(),\n      title: faker.name.prefix(),\n      firstName: faker.name.firstName(),\n      lastName: faker.name.lastName(),\n      street: faker.address.streetName(),\n      zipCode: faker.address.zipCode(),\n      date: faker.date.past(),\n      bs: faker.company.bs(),\n      catchPhrase: faker.company.catchPhrase(),\n      companyName: faker.company.companyName(),\n      words: faker.lorem.words(),\n      sentence: faker.lorem.sentence()\n    };\n  }\n\n  function createRows(numberOfRows) {\n    var rows = [];\n    for (var i = 0; i < numberOfRows; i++) {\n      rows[i] = createFakeRowObjectData(i);\n    }\n    return rows;\n  }\n\n  var counties = [{id : 0, title : \'Bedfordshire\'}, { id : 1, title : \'Berkshire\'}, { id : 2, title : \'Buckinghamshire\'}, { id : 3, title : \'Cambridgeshire\'}, { id : 4, title : \'Cheshire\'}, { id : 5, title :\'Cornwall\'}, {id : 6, title : \'Cumbria, (Cumberland)\'}, {id : 7, title : \'Derbyshire\'}, { id : 8, title :\'Devon\'}, { id : 9, title :\'Dorset\'},\n   { id : 10, title :\'Durham\'},\n   { id : 11, title :\'Essex\'},\n   { id : 12, title :\'Gloucestershire\'},\n   { id : 13, title :\'Hampshire\'},\n   { id : 14, title :\'Hertfordshire\'},\n   { id : 15, title :\'Huntingdonshire\'},\n   { id : 16, title :\'Kent\'},\n   { id : 17, title :\'Lancashire\'},\n   { id : 18, title :\'Leicestershire\'},\n   { id : 19, title :\'Lincolnshire\'},\n   { id : 20, title :\'Middlesex\'},\n   { id : 21, title :\'Norfolk\'},\n   { id : 22, title :\'Northamptonshire\'},\n   { id : 23, title :\'Northumberland\'},\n   { id : 24, title :\'Nottinghamshire\'},\n   { id : 25, title :\'Northamptonshire\'},\n   { id : 26, title :\'Oxfordshire\'},\n   { id : 27, title :\'Northamptonshire\'},\n   { id : 28, title :\'Rutland\'},\n   { id : 29, title :\'Shropshire\'},\n   { id : 30, title :\'Somerset\'},\n   { id : 31, title :\'Staffordshire\'},\n   { id : 32, title :\'Suffolk\'},\n   { id : 33, title :\'Surrey\'},\n   { id : 34, title :\'Sussex\'},\n   { id : 35, title :\'Warwickshire\'},\n   { id : 36, title :\'Westmoreland\'},\n   { id : 37, title :\'Wiltshire\'},\n   { id : 38, title :\'Worcestershire\'},\n   { id : 39, title :\'Yorkshire\'}]\n\n  var titles = [\'Dr.\', \'Mr.\', \'Mrs.\', \'Miss\', \'Ms.\'];\n\n  var columns = [\n    {\n      key: \'id\',\n      name: \'ID\',\n      width : 80,\n      resizable: true\n    },\n    {\n      key: \'avartar\',\n      name: \'Avartar\',\n      width : 60,\n      formatter : ReactDataGrid.Formatters.ImageFormatter,\n      resizable : true\n    },\n    {\n      key: \'county\',\n      name: \'County\',\n      editor: <AutoCompleteEditor options={counties}/>,\n      width : 200,\n      resizable: true\n    },\n    {\n      key: \'title\',\n      name: \'Title\',\n      editor : <DropDownEditor options={titles}/>,\n      width : 200,\n      resizable: true\n    },\n    {\n      key: \'firstName\',\n      name: \'First Name\',\n      editable:true,\n      width : 200,\n      resizable: true\n    },\n    {\n      key: \'lastName\',\n      name: \'Last Name\',\n      editable:true,\n      width : 200,\n      resizable: true\n    },\n    {\n      key: \'email\',\n      name: \'Email\',\n      editable:true,\n      width : 200,\n      resizable: true\n    },\n    {\n      key: \'street\',\n      name: \'Street\',\n      editable:true,\n      width : 200,\n      resizable: true\n    },\n    {\n      key: \'zipCode\',\n      name: \'ZipCode\',\n      editable:true,\n      width : 200,\n      resizable: true\n    },\n    {\n      key: \'date\',\n      name: \'Date\',\n      editable:true,\n      width : 200,\n      resizable: true\n    },\n    {\n      key: \'bs\',\n      name: \'bs\',\n      editable:true,\n      width : 200,\n      resizable: true\n    },\n    {\n      key: \'catchPhrase\',\n      name: \'Catch Phrase\',\n      editable:true,\n      width : 200,\n      resizable: true\n    },\n    {\n      key: \'companyName\',\n      name: \'Company Name\',\n      editable:true,\n      width : 200,\n      resizable: true\n    },\n    {\n      key: \'sentence\',\n      name: \'Sentence\',\n      editable:true,\n      width : 200,\n      resizable: true\n    }\n  ];\n\n\n var Example = React.createClass({displayName: \'component\',\n\n    getInitialState : function(){\n      var fakeRows = createRows(2000);\n      return {rows :fakeRows};\n    },\n\n    handleRowUpdated : function(commit){\n      //merge the updated row values with the existing row\n      var rows = this.state.rows;\n      var updatedRow = React.addons.update(rows[commit.rowIdx], {$merge : commit.updated});\n      rows[commit.rowIdx] = updatedRow;\n      this.setState({rows:rows});\n    },\n\n    handleCellDrag : function(e){\n        var rows = this.state.rows;\n        for (var i = e.fromRow; i <= e.toRow; i++){\n          var rowToChange = rows[i];\n          if(rowToChange){\n            rowToChange[e.cellKey] = e.value;\n          }\n        }\n        if(this.props.handleCellDrag) {this.props.handleCellDrag(e)}\n        this.setState({rows:rows});\n    },\n\n    handleCellCopyPaste : function(e){\n      var rows = this.state.rows;\n      rows[e.toRow][e.cellKey] = e.value;\n      this.setState({rows:rows});\n    },\n\n    handleAddRow : function(e){\n      var newRow = {\n        value: e.newRowIndex,\n        userStory: \'\',\n        developer : \'\',\n        epic : \'\'};\n        var rows = React.addons.update(this.state.rows, {$push : [newRow]});\n        this.setState({rows : rows});\n    },\n\n    getRowAt : function(index){\n      if (index < 0 || index > this.getSize()){\n        return undefined;\n      }\n      return this.state.rows[index];\n    },\n\n    getSize : function() {\n      return this.state.rows.length;\n    },\n\n    render : function() {\n      return (\n            <ReactDataGrid\n              enableCellSelect={true}\n              columns={columns}\n              rowGetter={this.getRowAt}\n              rowsCount={this.getSize()}\n              onRowUpdated={this.handleRowUpdated}\n              onCellsDragged={this.handleCellDrag}\n              onCellCopyPaste={this.handleCellCopyPaste}\n              toolbar={<Toolbar onAddRow={this.handleAddRow}/>}\n              enableRowSelect={true}\n              rowHeight={50}\n              minHeight={600}\n              />\n\n      );\n    }\n  });\n  ReactDOM.render(<Example />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'All the features grid'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'This example demonstrates all the features from the previous examples. The ReactDataGrid with addons is globally available in this example so you need to have \'react-data-grid-with-addons.js\' on the page or require(\'react-data-grid\'/addons) if you are using Common JS.'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'Fake data is generated using the ',
	        React.createElement(
	          'a',
	          { href: 'https://github.com/Marak/faker.js' },
	          'Faker'
	        ),
	        ' library which is also a global variable in this example.'
	      ),
	      React.createElement(ReactPlayground, { codeText: AllFeaturesExample })
	    );
	  }

	});

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_125__;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @jsx React.DOM
	 */
	'use strict';

	(function () {
	  var React = __webpack_require__(1);
	  var ReactDataGrid = __webpack_require__(123);
	  var Editors = ReactDataGrid.Editors;
	  var Toolbar = ReactDataGrid.Toolbar;
	  var AutoCompleteEditor = window.AutoCompleteEditor;
	  var DropDownEditor = Editors.DropDownEditor;
	  var joinClasses = __webpack_require__(127);
	  var FakeObjectDataStore = __webpack_require__(128);
	  var counties = [{ id: 0, title: 'Bedfordshire' }, { id: 1, title: 'Berkshire' }, { id: 2, title: 'Buckinghamshire' }, { id: 3, title: 'Cambridgeshire' }, { id: 4, title: 'Cheshire' }, { id: 5, title: 'Cornwall' }, { id: 6, title: 'Cumbria, (Cumberland)' }, { id: 7, title: 'Derbyshire' }, { id: 8, title: 'Devon' }, { id: 9, title: 'Dorset' }, { id: 10, title: 'Durham' }, { id: 11, title: 'Essex' }, { id: 12, title: 'Gloucestershire' }, { id: 13, title: 'Hampshire' }, { id: 14, title: 'Hertfordshire' }, { id: 15, title: 'Huntingdonshire' }, { id: 16, title: 'Kent' }, { id: 17, title: 'Lancashire' }, { id: 18, title: 'Leicestershire' }, { id: 19, title: 'Lincolnshire' }, { id: 20, title: 'Middlesex' }, { id: 21, title: 'Norfolk' }, { id: 22, title: 'Northamptonshire' }, { id: 23, title: 'Northumberland' }, { id: 24, title: 'Nottinghamshire' }, { id: 25, title: 'Northamptonshire' }, { id: 26, title: 'Oxfordshire' }, { id: 27, title: 'Northamptonshire' }, { id: 28, title: 'Rutland' }, { id: 29, title: 'Shropshire' }, { id: 30, title: 'Somerset' }, { id: 31, title: 'Staffordshire' }, { id: 32, title: 'Suffolk' }, { id: 33, title: 'Surrey' }, { id: 34, title: 'Sussex' }, { id: 35, title: 'Warwickshire' }, { id: 36, title: 'Westmoreland' }, { id: 37, title: 'Wiltshire' }, { id: 38, title: 'Worcestershire' }, { id: 39, title: 'Yorkshire' }];

	  var titles = ['Dr.', 'Mr.', 'Mrs.', 'Miss', 'Ms.'];

	  var columns = new Immutable.List([{
	    key: 'id',
	    name: 'ID',
	    width: 80,
	    resizable: true
	  }, {
	    key: 'avartar',
	    name: 'Avartar',
	    width: 60,
	    formatter: ReactDataGrid.Formatters.ImageFormatter,
	    resizable: true
	  }, {
	    key: 'county',
	    name: 'County',
	    editor: React.createElement(AutoCompleteEditor, { options: counties }),
	    width: 200,
	    resizable: true
	  }, {
	    key: 'title',
	    name: 'Title',
	    editor: React.createElement(DropDownEditor, { options: titles }),
	    width: 200,
	    resizable: true
	  }, {
	    key: 'firstName',
	    name: 'First Name',
	    editable: true,
	    width: 200,
	    resizable: true
	  }, {
	    key: 'lastName',
	    name: 'Last Name',
	    editable: true,
	    width: 200,
	    resizable: true
	  }, {
	    key: 'email',
	    name: 'Email',
	    editable: true,
	    width: 200,
	    resizable: true
	  }, {
	    key: 'street',
	    name: 'Street',
	    editable: true,
	    width: 200,
	    resizable: true
	  }, {
	    key: 'zipCode',
	    name: 'ZipCode',
	    editable: true,
	    width: 200,
	    resizable: true
	  }, {
	    key: 'date',
	    name: 'Date',
	    editable: true,
	    width: 200,
	    resizable: true
	  }, {
	    key: 'bs',
	    name: 'bs',
	    editable: true,
	    width: 200,
	    resizable: true
	  }, {
	    key: 'catchPhrase',
	    name: 'Catch Phrase',
	    editable: true,
	    width: 200,
	    resizable: true
	  }, {
	    key: 'companyName',
	    name: 'Company Name',
	    editable: true,
	    width: 200,
	    resizable: true
	  }, {
	    key: 'sentence',
	    name: 'Sentence',
	    editable: true,
	    width: 200,
	    resizable: true
	  }]);

	  var Component = React.createClass({ displayName: 'component',

	    getInitialState: function getInitialState() {
	      var fakeRows = FakeObjectDataStore.createRows(100);
	      return { rows: Immutable.fromJS(fakeRows) };
	    },

	    handleRowUpdated: function handleRowUpdated(commit) {
	      //merge the updated row values with the existing row
	      var newRows = this.state.rows.update(commit.rowIdx, function (r) {
	        return r.merge(commit.updated);
	      });
	      this.setState({ rows: newRows });
	    },

	    handleCellDrag: function handleCellDrag(e) {
	      var rows = this.state.rows;
	      for (var i = e.fromRow; i <= e.toRow; i++) {
	        rows = rows.update(i, function (r) {
	          return r.set(e.cellKey, e.value);
	        });
	      }
	      if (this.props.handleCellDrag) {
	        this.props.handleCellDrag(e);
	      }
	      this.setState({ rows: rows });
	    },

	    handleCellCopyPaste: function handleCellCopyPaste(e) {
	      var rows = this.state.rows.update(e.toRow, function (r) {
	        return r.set(e.cellKey, e.value);
	      });
	      this.setState({ rows: rows });
	    },

	    handleAddRow: function handleAddRow(e) {
	      var newRow = {
	        id: e.newRowIndex,
	        userStory: '',
	        developer: '',
	        epic: '' };
	      var rows = this.state.rows.push(newRow);
	      this.setState({ rows: rows });
	    },

	    getRowAt: function getRowAt(index) {
	      if (index < 0 || index > this.getSize()) {
	        return undefined;
	      }
	      return this.state.rows.get(index);
	    },

	    getSize: function getSize() {
	      return this.state.rows.size;
	    },

	    render: function render() {
	      return React.createElement(ReactDataGrid, {
	        ref: 'reactDataGrid',
	        enableCellSelect: true,
	        columns: columns,
	        rowGetter: this.getRowAt,
	        rowsCount: this.getSize(),
	        onRowUpdated: this.handleRowUpdated,
	        onCellsDragged: this.handleCellDrag,
	        onCellCopyPaste: this.handleCellCopyPaste,
	        toolbar: React.createElement(Toolbar, { onAddRow: this.handleAddRow }),
	        enableRowSelect: true,
	        rowHeight: 50,
	        minHeight: 600
	      });
	    }
	  });

	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = Component;
	  } else {
	    this.ReactDataGrid = Component;
	  }
	}).call(undefined);

/***/ },
/* 127 */
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
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var faker = __webpack_require__(125);
	faker.locale = 'en_GB';
	var SIZE = 2000;
	var _cache = [];

	function createFakeRowObjectData( /*number*/index) {
	  return {
	    id: 'id_' + index,
	    avartar: faker.image.avatar(),
	    county: faker.address.county(),
	    email: faker.internet.email(),
	    title: faker.name.prefix(),
	    firstName: faker.name.firstName(),
	    lastName: faker.name.lastName(),
	    street: faker.address.streetName(),
	    zipCode: faker.address.zipCode(),
	    date: faker.date.past(),
	    bs: faker.company.bs(),
	    catchPhrase: faker.company.catchPhrase(),
	    companyName: faker.company.companyName(),
	    words: faker.lorem.words(),
	    sentence: faker.lorem.sentence()
	  };
	}

	function getObjectAt( /*number*/index) /*?object*/{
	  if (index < 0 || index > SIZE) {
	    return undefined;
	  }
	  if (_cache[index] === undefined) {
	    _cache[index] = createFakeRowObjectData(index);
	  }
	  return _cache[index];
	}

	function getSize() {
	  return SIZE;
	}

	function createRows(numberOfRows) {
	  for (var i = 0; i < numberOfRows; i++) {
	    _cache[i] = createFakeRowObjectData(i);
	  }
	  return _cache;
	}

	var FakeObjectDataListStore = {
	  getObjectAt: getObjectAt,
	  getSize: getSize,
	  createRows: createRows
	};
	module.exports = FakeObjectDataListStore;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var QuickStartDescription = __webpack_require__(63);
	var ReactPlayground = __webpack_require__(66);

	var EmptyRowsExample = '\nvar _rows = [];\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\'\n},\n{\n  key: \'title\',\n  name: \'Title\'\n},\n{\n  key: \'count\',\n  name: \'Count\'\n}\n]\n\nvar EmptyRowsView = React.createClass({\n render: function() {\n   return (<div>Nothing to show</div>)\n }\n});\n\n\nvar Example = React.createClass({\n  render: function() {\n    return  (<ReactDataGrid\n    columns={columns}\n    rowGetter={rowGetter}\n    rowsCount={_rows.length}\n    minHeight={500}\n    emptyRowsView={EmptyRowsView} />);\n  }\n});\nReact.render(<Example />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Empty Rows Example'
	      ),
	      React.createElement(ReactPlayground, { codeText: EmptyRowsExample })
	    );
	  }

	});

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	
	/* Flow issues:
	overrides? getDefaultValue, getStyle, onKeyDown
	*/
	/**
	 * @jsx React.DOM
	 */
	'use strict';

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var ReactAutocomplete = __webpack_require__(131);
	var ExcelColumn = __webpack_require__(132);

	var optionPropType = React.PropTypes.shape({
	  id: React.PropTypes.required,
	  title: React.PropTypes.string
	});

	var AutoCompleteEditor = React.createClass({
	  displayName: 'AutoCompleteEditor',

	  propTypes: {
	    onCommit: React.PropTypes.func.isRequired,
	    options: React.PropTypes.arrayOf(optionPropType).isRequired,
	    label: React.PropTypes.string,
	    value: React.PropTypes.any.isRequired,
	    valueParams: React.PropTypes.arrayOf(React.PropTypes.string),
	    column: React.PropTypes.shape(ExcelColumn).isRequired,
	    resultIdentifier: React.PropTypes.string,
	    search: React.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      resultIdentifier: 'id'
	    };
	  },

	  getValue: function getValue() {
	    var value,
	        updated = {};
	    if (this.hasResults() && this.isFocusedOnSuggestion()) {
	      value = this.getLabel(this.refs.autoComplete.state.focusedValue);
	      if (this.props.valueParams) {
	        value = this.constuctValueFromParams(this.refs.autoComplete.state.focusedValue, this.props.valueParams);
	      }
	    } else {
	      value = this.refs.autoComplete.state.searchTerm;
	    }
	    updated[this.props.column.key] = value;
	    return updated;
	  },

	  getInputNode: function getInputNode() {
	    return ReactDOM.findDOMNode(this).getElementsByTagName('input')[0];
	  },

	  render: function render() {
	    var label = this.props.label != null ? this.props.label : 'title';
	    return React.createElement(
	      'div',
	      { height: this.props.height, onKeyDown: this.props.onKeyDown },
	      React.createElement(ReactAutocomplete, { search: this.props.search, ref: 'autoComplete', label: label, onChange: this.handleChange, resultIdentifier: this.props.resultIdentifier, options: this.props.options, value: { title: this.props.value } })
	    );
	  },

	  handleChange: function handleChange() {
	    this.props.onCommit();
	  },

	  hasResults: function hasResults() {
	    return this.refs.autoComplete.state.results.length > 0;
	  },

	  isFocusedOnSuggestion: function isFocusedOnSuggestion() {
	    var autoComplete = this.refs.autoComplete;
	    return autoComplete.state.focusedValue != null;
	  },

	  getLabel: function getLabel(item) {
	    var label = this.props.label != null ? this.props.label : 'title';
	    if (typeof label === 'function') {
	      return label(item);
	    } else if (typeof label === 'string') {
	      return item[label];
	    }
	  },

	  constuctValueFromParams: function constuctValueFromParams(obj, props) {
	    if (!props) {
	      return '';
	    }
	    var ret = [];
	    for (var i = 0, ii = props.length; i < ii; i++) {
	      ret.push(obj[props[i]]);
	    }
	    return ret.join('|');
	  }
	});

	module.exports = AutoCompleteEditor;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1));
		else if(typeof define === 'function' && define.amd)
			define(["react"], factory);
		else if(typeof exports === 'object')
			exports["ReactAutocomplete"] = factory(require("react"));
		else
			root["ReactAutocomplete"] = factory(root["React"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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

		/**
		 * @jsx React.DOM
		 */
		"use strict";

		var React = __webpack_require__(1);
		var joinClasses = __webpack_require__(2);

		var Autocomplete = React.createClass({ displayName: "Autocomplete",

		  propTypes: {
		    options: React.PropTypes.any,
		    search: React.PropTypes.func,
		    resultRenderer: React.PropTypes.oneOfType([React.PropTypes.component, React.PropTypes.func]),
		    value: React.PropTypes.object,
		    onChange: React.PropTypes.func,
		    onError: React.PropTypes.func
		  },

		  getDefaultProps: function () {
		    return { search: searchArray };
		  },

		  getInitialState: function () {
		    var searchTerm = this.props.searchTerm ? this.props.searchTerm : this.props.value ? this.props.value.title : "";
		    return {
		      results: [],
		      showResults: false,
		      showResultsInProgress: false,
		      searchTerm: searchTerm,
		      focusedValue: null
		    };
		  },

		  getResultIdentifier: function (result) {
		    if (this.props.resultIdentifier === undefined) {
		      return result.id;
		    } else {
		      return result[this.props.resultIdentifier];
		    }
		  },


		  render: function () {
		    var className = joinClasses(this.props.className, "react-autocomplete-Autocomplete", this.state.showResults ? "react-autocomplete-Autocomplete--resultsShown" : undefined);
		    var style = {
		      position: "relative",
		      outline: "none"
		    };
		    return React.createElement("div", {
		      tabIndex: "1",
		      className: className,
		      onFocus: this.onFocus,
		      onBlur: this.onBlur,
		      style: style }, React.createElement("input", {
		      ref: "search",
		      className: "react-autocomplete-Autocomplete__search",
		      style: { width: "100%" },
		      onClick: this.showAllResults,
		      onChange: this.onQueryChange,
		      onFocus: this.showAllResults,
		      onBlur: this.onQueryBlur,
		      onKeyDown: this.onQueryKeyDown,
		      value: this.state.searchTerm }), React.createElement(Results, {
		      className: "react-autocomplete-Autocomplete__results",
		      onSelect: this.onValueChange,
		      onFocus: this.onValueFocus,
		      results: this.state.results,
		      focusedValue: this.state.focusedValue,
		      show: this.state.showResults,
		      renderer: this.props.resultRenderer,
		      label: this.props.label,
		      resultIdentifier: this.props.resultIdentifier }));
		  },

		  componentWillReceiveProps: function (nextProps) {
		    var searchTerm = nextProps.searchTerm ? nextProps.searchTerm : nextProps.value ? nextProps.value.title : "";
		    this.setState({ searchTerm: searchTerm });
		  },

		  componentWillMount: function () {
		    this.blurTimer = null;
		  },

		  /**
		    * Show results for a search term value.
		    *
		    * This method doesn't update search term value itself.
		    *
		    * @param {Search} searchTerm
		    */
		  showResults: function (searchTerm) {
		    this.setState({ showResultsInProgress: true });
		    this.props.search(this.props.options, searchTerm.trim(), this.onSearchComplete);
		  },

		  showAllResults: function () {
		    if (!this.state.showResultsInProgress && !this.state.showResults) {
		      this.showResults("");
		    }
		  },

		  onValueChange: function (value) {
		    var state = {
		      value: value,
		      showResults: false
		    };

		    if (value) {
		      state.searchTerm = value.title;
		    }

		    this.setState(state);

		    if (this.props.onChange) {
		      this.props.onChange(value);
		    }
		  },

		  onSearchComplete: function (err, results) {
		    if (err) {
		      if (this.props.onError) {
		        this.props.onError(err);
		      } else {
		        throw err;
		      }
		    }

		    this.setState({
		      showResultsInProgress: false,
		      showResults: true,
		      results: results
		    });
		  },

		  onValueFocus: function (value) {
		    this.setState({ focusedValue: value });
		  },

		  onQueryChange: function (e) {
		    var searchTerm = e.target.value;
		    this.setState({
		      searchTerm: searchTerm,
		      focusedValue: null
		    });
		    this.showResults(searchTerm);
		  },

		  onFocus: function () {
		    if (this.blurTimer) {
		      clearTimeout(this.blurTimer);
		      this.blurTimer = null;
		    }
		    this.refs.search.getDOMNode().focus();
		  },

		  onBlur: function () {
		    // wrap in setTimeout so we can catch a click on results
		    this.blurTimer = setTimeout((function () {
		      if (this.isMounted()) {
		        this.setState({ showResults: false });
		      }
		    }).bind(this), 100);
		  },

		  onQueryKeyDown: function (e) {
		    if (e.key === "Enter") {
		      e.preventDefault();
		      if (this.state.focusedValue) {
		        this.onValueChange(this.state.focusedValue);
		      }
		    } else if (e.key === "ArrowUp" && this.state.showResults) {
		      e.preventDefault();
		      var prevIdx = Math.max(this.focusedValueIndex() - 1, 0);
		      this.setState({
		        focusedValue: this.state.results[prevIdx]
		      });
		    } else if (e.key === "ArrowDown") {
		      e.preventDefault();
		      if (this.state.showResults) {
		        var nextIdx = Math.min(this.focusedValueIndex() + (this.state.showResults ? 1 : 0), this.state.results.length - 1);
		        this.setState({
		          showResults: true,
		          focusedValue: this.state.results[nextIdx]
		        });
		      } else {
		        this.showAllResults();
		      }
		    }
		  },

		  focusedValueIndex: function () {
		    if (!this.state.focusedValue) {
		      return -1;
		    }
		    for (var i = 0, len = this.state.results.length; i < len; i++) {
		      if (this.getResultIdentifier(this.state.results[i]) === this.getResultIdentifier(this.state.focusedValue)) {
		        return i;
		      }
		    }
		    return -1;
		  }
		});

		var Results = React.createClass({ displayName: "Results",

		  getResultIdentifier: function (result) {
		    if (this.props.resultIdentifier === undefined) {
		      if (!result.id) {
		        throw "id property not found on result. You must specify a resultIdentifier and pass as props to autocomplete component";
		      }
		      return result.id;
		    } else {
		      return result[this.props.resultIdentifier];
		    }
		  },

		  render: function () {
		    var style = {
		      display: this.props.show ? "block" : "none",
		      position: "absolute",
		      listStyleType: "none"
		    };
		    var $__0 = this.props,
		        className = $__0.className,
		        props = (function (source, exclusion) {
		      var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {
		        throw new TypeError();
		      }for (var key in source) {
		        if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {
		          rest[key] = source[key];
		        }
		      }return rest;
		    })($__0, { className: 1 });

		    return React.createElement("ul", React.__spread({}, props, { style: style, className: className + " react-autocomplete-Results" }), this.props.results.map(this.renderResult));
		  },

		  renderResult: function (result) {
		    var focused = this.props.focusedValue && this.getResultIdentifier(this.props.focusedValue) === this.getResultIdentifier(result);
		    var Renderer = this.props.renderer || Result;
		    return React.createElement(Renderer, {
		      ref: focused ? "focused" : undefined,
		      key: this.getResultIdentifier(result),
		      result: result,
		      focused: focused,
		      onMouseEnter: this.onMouseEnterResult,
		      onClick: this.props.onSelect,
		      label: this.props.label });
		  },

		  componentDidUpdate: function () {
		    this.scrollToFocused();
		  },

		  componentDidMount: function () {
		    this.scrollToFocused();
		  },

		  componentWillMount: function () {
		    this.ignoreFocus = false;
		  },

		  scrollToFocused: function () {
		    var focused = this.refs && this.refs.focused;
		    if (focused) {
		      var containerNode = this.getDOMNode();
		      var scroll = containerNode.scrollTop;
		      var height = containerNode.offsetHeight;

		      var node = focused.getDOMNode();
		      var top = node.offsetTop;
		      var bottom = top + node.offsetHeight;

		      // we update ignoreFocus to true if we change the scroll position so
		      // the mouseover event triggered because of that won't have an
		      // effect
		      if (top < scroll) {
		        this.ignoreFocus = true;
		        containerNode.scrollTop = top;
		      } else if (bottom - scroll > height) {
		        this.ignoreFocus = true;
		        containerNode.scrollTop = bottom - height;
		      }
		    }
		  },

		  onMouseEnterResult: function (e, result) {
		    // check if we need to prevent the next onFocus event because it was
		    // probably caused by a mouseover due to scroll position change
		    if (this.ignoreFocus) {
		      this.ignoreFocus = false;
		    } else {
		      // we need to make sure focused node is visible
		      // for some reason mouse events fire on visible nodes due to
		      // box-shadow
		      var containerNode = this.getDOMNode();
		      var scroll = containerNode.scrollTop;
		      var height = containerNode.offsetHeight;

		      var node = e.target;
		      var top = node.offsetTop;
		      var bottom = top + node.offsetHeight;

		      if (bottom > scroll && top < scroll + height) {
		        this.props.onFocus(result);
		      }
		    }
		  }
		});

		var Result = React.createClass({ displayName: "Result",

		  getDefaultProps: function () {
		    return {
		      label: function (result) {
		        return result.title;
		      }
		    };
		  },

		  getLabel: function (result) {
		    if (typeof this.props.label === "function") {
		      return this.props.label(result);
		    } else if (typeof this.props.label === "string") {
		      return result[this.props.label];
		    }
		  },

		  render: function () {
		    var className = joinClasses({
		      "react-autocomplete-Result": true,
		      "react-autocomplete-Result--active": this.props.focused
		    });

		    return React.createElement("li", {
		      style: { listStyleType: "none" },
		      className: className,
		      onClick: this.onClick,
		      onMouseEnter: this.onMouseEnter }, React.createElement("a", null, this.getLabel(this.props.result)));
		  },

		  onClick: function () {
		    this.props.onClick(this.props.result);
		  },

		  onMouseEnter: function (e) {
		    if (this.props.onMouseEnter) {
		      this.props.onMouseEnter(e, this.props.result);
		    }
		  },

		  shouldComponentUpdate: function (nextProps) {
		    return nextProps.result.id !== this.props.result.id || nextProps.focused !== this.props.focused;
		  }
		});

		/**
		* Search options using specified search term treating options as an array
		* of candidates.
		*
		* @param {Array.<Object>} options
		* @param {String} searchTerm
		* @param {Callback} cb
		*/
		function searchArray(options, searchTerm, cb) {
		  if (!options) {
		    return cb(null, []);
		  }

		  searchTerm = new RegExp(searchTerm, "i");

		  var results = [];

		  for (var i = 0, len = options.length; i < len; i++) {
		    if (searchTerm.exec(options[i].title)) {
		      results.push(options[i]);
		    }
		  }

		  cb(null, results);
		}

		module.exports = Autocomplete;

	/***/ },
	/* 1 */
	/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

	/***/ },
	/* 2 */
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


	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var ExcelColumnShape = {
	  name: React.PropTypes.string,
	  key: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
	  width: React.PropTypes.number.isRequired
	};

	module.exports = ExcelColumnShape;

/***/ }
/******/ ])
});
;