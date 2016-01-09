(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"), require("faker"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM", "faker"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("ReactDOM"), require("faker")) : factory(root["React"], root["ReactDOM"], root["faker"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_112__) {
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
	var ReactDom = __webpack_require__(2);

	window.React = React;

	var ReactDataGrid = __webpack_require__(113);
	ReactDom.render(React.createElement(ReactDataGrid, null), document.getElementById('excel-example'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(58);
	module.exports = __webpack_require__(61).Object.assign;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(59);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(64)});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(60)
	  , core      = __webpack_require__(61)
	  , ctx       = __webpack_require__(62)
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
/* 60 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 61 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(63);
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
/* 63 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(65)
	  , toObject = __webpack_require__(66)
	  , IObject  = __webpack_require__(68);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(70)(function(){
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
/* 65 */
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(67);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(69);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(72), __esModule: true };

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(73);
	__webpack_require__(91);
	module.exports = __webpack_require__(61).Symbol;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(65)
	  , global         = __webpack_require__(60)
	  , has            = __webpack_require__(74)
	  , DESCRIPTORS    = __webpack_require__(75)
	  , $export        = __webpack_require__(59)
	  , redefine       = __webpack_require__(76)
	  , $fails         = __webpack_require__(70)
	  , shared         = __webpack_require__(79)
	  , setToStringTag = __webpack_require__(80)
	  , uid            = __webpack_require__(82)
	  , wks            = __webpack_require__(81)
	  , keyOf          = __webpack_require__(83)
	  , $names         = __webpack_require__(85)
	  , enumKeys       = __webpack_require__(86)
	  , isArray        = __webpack_require__(87)
	  , anObject       = __webpack_require__(88)
	  , toIObject      = __webpack_require__(84)
	  , createDesc     = __webpack_require__(78)
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

	  if(DESCRIPTORS && !__webpack_require__(90)){
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
/* 74 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(70)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(77);

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(65)
	  , createDesc = __webpack_require__(78);
	module.exports = __webpack_require__(75) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 78 */
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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(60)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(65).setDesc
	  , has = __webpack_require__(74)
	  , TAG = __webpack_require__(81)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(79)('wks')
	  , uid    = __webpack_require__(82)
	  , Symbol = __webpack_require__(60).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 82 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(65)
	  , toIObject = __webpack_require__(84);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(68)
	  , defined = __webpack_require__(67);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(84)
	  , getNames  = __webpack_require__(65).getNames
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
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(65);
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
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(69);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(89);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 91 */
/***/ function(module, exports) {

	

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(94);
	module.exports = __webpack_require__(61).Object.keys;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(66);

	__webpack_require__(95)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(59)
	  , core    = __webpack_require__(61)
	  , fails   = __webpack_require__(70);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(98);
	module.exports = __webpack_require__(61).Object.setPrototypeOf;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(59);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(99).set});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(65).getDesc
	  , isObject = __webpack_require__(89)
	  , anObject = __webpack_require__(88);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(62)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
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
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _Object$assign2=__webpack_require__(56)['default'];var _Symbol=__webpack_require__(71)['default'];var _Object$keys=__webpack_require__(92)['default'];var _Object$setPrototypeOf2=__webpack_require__(96)['default'];(function webpackUniversalModuleDefinition(root,factory){if(true)module.exports = factory(__webpack_require__(1),__webpack_require__(2));else if(typeof define === 'function' && define.amd)define(["react","react-dom"],factory);else if(typeof exports === 'object')exports["ReactDataGrid"] = factory(require("react"),require("react-dom"));else root["ReactDataGrid"] = factory(root["React"],root["ReactDOM"]);})(undefined,function(__WEBPACK_EXTERNAL_MODULE_18__,__WEBPACK_EXTERNAL_MODULE_19__){return  (/******/(function(modules){ // webpackBootstrap
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
	/******/return __webpack_require__(0); /******/})( /************************************************************************/ /******/[ /* 0 */function(module,exports,__webpack_require__){'use strict';module.exports = __webpack_require__(1);module.exports.Editors = __webpack_require__(69);module.exports.Formatters = __webpack_require__(73);module.exports.Toolbar = __webpack_require__(75);module.exports.Row = __webpack_require__(44); /***/}, /* 1 */function(module,exports,__webpack_require__){"use strict";var _extends=__webpack_require__(2)['default'];var React=__webpack_require__(18);var ReactDOM=__webpack_require__(19);var uncontrollable=__webpack_require__(20);var BaseGrid=__webpack_require__(25);var KeyboardHandlerMixin=__webpack_require__(47);var CheckboxEditor=__webpack_require__(65);var FilterableHeaderCell=__webpack_require__(66);var DOMMetrics=__webpack_require__(63);var ColumnMetricsMixin=__webpack_require__(67);var RowUtils=__webpack_require__(68);var ColumnUtils=__webpack_require__(31);var notify=function notify(handler){for(var _len=arguments.length,args=Array(_len > 1?_len - 1:0),_key=1;_key < _len;_key++) {args[_key - 1] = arguments[_key];}return handler && handler.apply(undefined,args);};var ReactDataGrid=React.createClass({displayName:'ReactDataGrid',propTypes:{rowHeight:React.PropTypes.number.isRequired,headerRowHeight:React.PropTypes.number,minHeight:React.PropTypes.number.isRequired,minWidth:React.PropTypes.number,enableRowSelect:React.PropTypes.bool,onRowUpdated:React.PropTypes.func,rowGetter:React.PropTypes.func.isRequired,rowsCount:React.PropTypes.number.isRequired,toolbar:React.PropTypes.element,enableCellSelect:React.PropTypes.bool,columns:React.PropTypes.oneOfType([React.PropTypes.object,React.PropTypes.array]).isRequired,onFilter:React.PropTypes.func,onCellCopyPaste:React.PropTypes.func,onCellsDragged:React.PropTypes.func,onAddFilter:React.PropTypes.func},mixins:[ColumnMetricsMixin,DOMMetrics.MetricsComputatorMixin,KeyboardHandlerMixin],getDefaultProps:function getDefaultProps(){return {enableCellSelect:false,tabIndex:-1,rowHeight:35,enableRowSelect:false,minHeight:350};},getInitialState:function getInitialState(){var columnMetrics=this.createColumnMetrics();var initialState=_extends({columnMetrics:columnMetrics},this.getSelectedState(this.props),{selectedRows:this.getInitialSelectedRows(),copied:null,expandedRows:[],canFilter:false,columnFilters:{},sortDirection:null,sortColumn:null,dragged:null,scrollOffset:0});return initialState;},getInitialSelectedRows:function getInitialSelectedRows(){var selectedRows=[];for(var i=0;i < this.props.rowsCount;i++) {selectedRows.push(false);}return selectedRows;},componentWillReceiveProps:function componentWillReceiveProps(nextProps){this.setState(this.getSelectedState(nextProps));if(nextProps.rowsCount === this.props.rowsCount + 1){this.onAfterAddRow(nextProps.rowsCount + 1);}},getSelectedState:function getSelectedState(props){var active=props.active;var _props$selectedCell=props.selectedCell;_props$selectedCell = _props$selectedCell === undefined?[0,0]:_props$selectedCell;var idx=_props$selectedCell[0];var rowIdx=_props$selectedCell[1];if(!this.props.enableCellSelect)idx = rowIdx = -1;var selected={idx:idx,rowIdx:rowIdx,active:!!active};if(active && active !== true)selected.initialKeyCode = active;return {selected:selected};},componentDidMount:function componentDidMount(){var scrollOffset=0;var canvas=ReactDOM.findDOMNode(this).querySelector('.react-grid-Canvas');if(canvas != null){scrollOffset = canvas.offsetWidth - canvas.clientWidth;}this.setState({scrollOffset:scrollOffset});},render:function render(){var cellMetaData={selected:this.state.selected,dragged:this.state.dragged,onCellClick:this.onCellClick,onCellDoubleClick:this.onCellDoubleClick,onCommit:this.onCellCommit,onCommitCancel:this.setInactive,copied:this.state.copied,handleDragEnterRow:this.handleDragEnter,handleTerminateDrag:this.handleTerminateDrag};var toolbar=this.renderToolbar();var containerWidth=this.props.minWidth || this.DOMMetrics.gridWidth();var gridWidth=containerWidth - this.state.scrollOffset; //if NaN without coercion
	if(gridWidth !== gridWidth)gridWidth = 0;return React.createElement('div',{className:'react-grid-Container',style:{width:containerWidth}},toolbar,React.createElement('div',{className:'react-grid-Main'},React.createElement(BaseGrid,_extends({ref:'base'},this.props,{headerRows:this.getHeaderRows(),columnMetrics:this.state.columnMetrics,rowGetter:this.props.rowGetter,rowsCount:this.props.rowsCount,rowHeight:this.props.rowHeight,cellMetaData:cellMetaData,selectedRows:this.state.selectedRows,expandedRows:this.state.expandedRows,rowOffsetHeight:this.getRowOffsetHeight(),sortColumn:this.state.sortColumn,sortDirection:this.state.sortDirection,onSort:this.handleSort,minHeight:this.props.minHeight,totalWidth:gridWidth,onViewportKeydown:this.onKeyDown,onViewportDragStart:this.onDragStart,onViewportDragEnd:this.handleDragEnd,onViewportDoubleClick:this.onViewportDoubleClick,onColumnResize:this.onColumnResize}))));},renderToolbar:function renderToolbar(){var Toolbar=this.props.toolbar;if(React.isValidElement(Toolbar)){return React.cloneElement(Toolbar,{onToggleFilter:this.onToggleFilter,numberOfRows:this.props.rowsCount});}},onSelect:function onSelect(selected){var old=this.state.selected;if(this.props.enableCellSelect){if(!(old.rowIdx === selected.rowIdx && old.idx === selected.idx && old.active === true)){var idx=selected.idx;var rowIdx=selected.rowIdx;if(idx >= 0 && rowIdx >= 0 && idx < ColumnUtils.getSize(this.state.columnMetrics.columns) && rowIdx < this.props.rowsCount){notify(this.props.onSelectCell,[idx,rowIdx],[old.idx,old.rowIdx]);}}}},onCellClick:function onCellClick(cell){this.onSelect({rowIdx:cell.rowIdx,idx:cell.idx});},onCellDoubleClick:function onCellDoubleClick(cell){this.onSelect({rowIdx:cell.rowIdx,idx:cell.idx});this.setActive('Enter');},onViewportDoubleClick:function onViewportDoubleClick(){this.setActive();},onPressArrowUp:function onPressArrowUp(e){this.moveSelectedCell(e,-1,0);},onPressArrowDown:function onPressArrowDown(e){this.moveSelectedCell(e,1,0);},onPressArrowLeft:function onPressArrowLeft(e){this.moveSelectedCell(e,0,-1);},onPressArrowRight:function onPressArrowRight(e){this.moveSelectedCell(e,0,1);},onPressTab:function onPressTab(e){this.moveSelectedCell(e,0,e.shiftKey?-1:1);},onPressEnter:function onPressEnter(e){this.setActive(e.key);},onPressDelete:function onPressDelete(e){this.setActive(e.key);},onPressEscape:function onPressEscape(e){this.setInactive(e.key);},onPressBackspace:function onPressBackspace(e){this.setActive(e.key);},onPressChar:function onPressChar(e){if(this.isKeyPrintable(e.keyCode)){this.setActive(e.keyCode);}},onPressKeyWithCtrl:function onPressKeyWithCtrl(e){var keys={KeyCode_c:99,KeyCode_C:67,KeyCode_V:86,KeyCode_v:118};var idx=this.state.selected.idx;if(this.canEdit(idx)){if(e.keyCode == keys.KeyCode_c || e.keyCode == keys.KeyCode_C){var value=this.getSelectedValue();this.handleCopy({value:value});}else if(e.keyCode == keys.KeyCode_v || e.keyCode == keys.KeyCode_V){this.handlePaste();}}},onDragStart:function onDragStart(e){var value=this.getSelectedValue();this.handleDragStart({idx:this.state.selected.idx,rowIdx:this.state.selected.rowIdx,value:value}); //need to set dummy data for FF
	if(e && e.dataTransfer && e.dataTransfer.setData)e.dataTransfer.setData('text/plain','dummy');},moveSelectedCell:function moveSelectedCell(e,rowDelta,cellDelta){ // we need to prevent default as we control grid scroll
	// otherwise it moves every time you left/right which is janky
	e && e.preventDefault();var rowIdx=this.state.selected.rowIdx + rowDelta;var idx=this.state.selected.idx + cellDelta;this.onSelect({idx:idx,rowIdx:rowIdx});},getSelectedValue:function getSelectedValue(){var rowIdx=this.state.selected.rowIdx;var idx=this.state.selected.idx;var cellKey=this.getColumn(idx).key;var row=this.props.rowGetter(rowIdx);return RowUtils.get(row,cellKey);},setActive:function setActive(keyPressed){var idx=this.state.selected.idx;if(this.canEdit(idx) && !this.isActive()){notify(this.props.onActive,keyPressed || true);}},setInactive:function setInactive(){var idx=this.state.selected.idx;if(this.canEdit(idx) && this.isActive()){notify(this.props.onActive,false);}},canEdit:function canEdit(idx){var col=this.getColumn(idx);return this.props.enableCellSelect === true && (col.editor != null || col.editable);},isActive:function isActive(){return this.state.selected.active === true;},onCellCommit:function onCellCommit(commit){this.setInactive();if(commit.key === 'Tab'){this.moveSelectedCell(null,0,-1);}this.props.onRowUpdated(commit);},setupGridColumns:function setupGridColumns(){var props=arguments.length <= 0 || arguments[0] === undefined?this.props:arguments[0];var cols=props.columns.slice(0);if(props.enableRowSelect){var selectColumn={key:'select-row',name:'',formatter:props.selectRowRenderer || React.createElement(CheckboxEditor,null),onCellChange:this.handleRowSelect,filterable:false,headerRenderer:React.createElement('input',{type:'checkbox',onChange:this.handleCheckboxChange}),width:60,locked:true};var unshiftedCols=cols.unshift(selectColumn);cols = unshiftedCols > 0?cols:unshiftedCols;}return cols;}, // getSelectRowCell(props) {
	//   let Renderer = props.rowSelectRenderer || <CheckboxEditor/>;
	//
	//   if (React.isValidElement(Renderer))
	// },
	handleCheckboxChange:function handleCheckboxChange(e){var allRowsSelected;if(e.currentTarget instanceof HTMLInputElement && e.currentTarget.checked === true){allRowsSelected = true;}else {allRowsSelected = false;}var selectedRows=[];for(var i=0;i < this.props.rowsCount;i++) {selectedRows.push(allRowsSelected);}this.setState({selectedRows:selectedRows});}, // columnKey not used here as this function will select the whole row,
	// but needed to match the function signature in the CheckboxEditor
	handleRowSelect:function handleRowSelect(rowIdx,columnKey,e){e.stopPropagation();if(this.state.selectedRows != null && this.state.selectedRows.length > 0){var selectedRows=this.state.selectedRows.slice();if(selectedRows[rowIdx] == null || selectedRows[rowIdx] == false){selectedRows[rowIdx] = true;}else {selectedRows[rowIdx] = false;}this.setState({selectedRows:selectedRows});}},onAfterAddRow:function onAfterAddRow(numberOfRows){var selected=this.state.selected;notify(this.props.onSelectCell,[1,numberOfRows - 2],[selected.idx,selected.rowIdx]);},onToggleFilter:function onToggleFilter(){this.setState({canFilter:!this.state.canFilter});},getHeaderRows:function getHeaderRows(){var rows=[{ref:'row',height:this.props.headerRowHeight || this.props.rowHeight}];if(this.state.canFilter === true){rows.push({ref:'filterRow',headerCellRenderer:React.createElement(FilterableHeaderCell,{onChange:this.props.onAddFilter,column:this.props.column}),height:45});}return rows;},getRowOffsetHeight:function getRowOffsetHeight(){var offsetHeight=0;this.getHeaderRows().forEach(function(row){return offsetHeight += parseFloat(row.height,10);});return offsetHeight;},handleSort:function handleSort(columnKey,direction){this.setState({sortDirection:direction,sortColumn:columnKey},function(){this.props.onGridSort(columnKey,direction);});},copyPasteEnabled:function copyPasteEnabled(){return this.props.onCellCopyPaste !== null;},handleCopy:function handleCopy(args){if(!this.copyPasteEnabled()){return;}var textToCopy=args.value;var selected=this.state.selected;var copied={idx:selected.idx,rowIdx:selected.rowIdx};this.setState({textToCopy:textToCopy,copied:copied});},handlePaste:function handlePaste(){if(!this.copyPasteEnabled()){return;}var selected=this.state.selected;var cellKey=this.getColumn(this.state.selected.idx).key;if(this.props.onCellCopyPaste){this.props.onCellCopyPaste({cellKey:cellKey,rowIdx:selected.rowIdx,value:this.state.textToCopy,fromRow:this.state.copied.rowIdx,toRow:selected.rowIdx});}this.setState({copied:null});},dragEnabled:function dragEnabled(){return this.props.onCellsDragged !== null;},handleDragStart:function handleDragStart(dragged){if(!this.dragEnabled()){return;}var idx=dragged.idx;var rowIdx=dragged.rowIdx;if(idx >= 0 && rowIdx >= 0 && idx < this.getSize() && rowIdx < this.props.rowsCount){this.setState({dragged:dragged});}},handleDragEnter:function handleDragEnter(row){if(!this.dragEnabled())return;var dragged=this.state.dragged;dragged.overRowIdx = row;this.setState({dragged:dragged});},handleDragEnd:function handleDragEnd(){if(!this.dragEnabled())return;var fromRow,toRow;var selected=this.state.selected;var dragged=this.state.dragged;var cellKey=this.getColumn(this.state.selected.idx).key;fromRow = selected.rowIdx < dragged.overRowIdx?selected.rowIdx:dragged.overRowIdx;toRow = selected.rowIdx > dragged.overRowIdx?selected.rowIdx:dragged.overRowIdx;if(this.props.onCellsDragged){this.props.onCellsDragged({cellKey:cellKey,fromRow:fromRow,toRow:toRow,value:dragged.value});}this.setState({dragged:{complete:true}});},handleTerminateDrag:function handleTerminateDrag(){if(!this.dragEnabled()){return;}this.setState({dragged:null});}});module.exports = uncontrollable(ReactDataGrid,{active:'onActive',selectedCell:'onSelectCell'}); /***/}, /* 2 */function(module,exports,__webpack_require__){"use strict";var _Object$assign=__webpack_require__(3)["default"];exports["default"] = _Object$assign || function(target){for(var i=1;i < arguments.length;i++) {var source=arguments[i];for(var key in source) {if(Object.prototype.hasOwnProperty.call(source,key)){target[key] = source[key];}}}return target;};exports.__esModule = true; /***/}, /* 3 */function(module,exports,__webpack_require__){module.exports = {"default":__webpack_require__(4),__esModule:true}; /***/}, /* 4 */function(module,exports,__webpack_require__){__webpack_require__(5);module.exports = __webpack_require__(8).Object.assign; /***/}, /* 5 */function(module,exports,__webpack_require__){ // 19.1.3.1 Object.assign(target, source)
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
	module.exports = __webpack_require__(17)(function(){var a=_Object$assign2,A={},B={},S=_Symbol(),K='abcdefghijklmnopqrst';A[S] = 7;K.split('').forEach(function(k){B[k] = k;});return a({},A)[S] != 7 || _Object$keys(a({},B)).join('') != K;})?function assign(target,source){ // eslint-disable-line no-unused-vars
	var T=toObject(target),$$=arguments,$$len=$$.length,index=1,getKeys=$.getKeys,getSymbols=$.getSymbols,isEnum=$.isEnum;while($$len > index) {var S=IObject($$[index++]),keys=getSymbols?getKeys(S).concat(getSymbols(S)):getKeys(S),length=keys.length,j=0,key;while(length > j) if(isEnum.call(S,key = keys[j++]))T[key] = S[key];}return T;}:_Object$assign2; /***/}, /* 12 */function(module,exports){var $Object=Object;module.exports = {create:$Object.create,getProto:$Object.getPrototypeOf,isEnum:({}).propertyIsEnumerable,getDesc:$Object.getOwnPropertyDescriptor,setDesc:$Object.defineProperty,setDescs:$Object.defineProperties,getKeys:$Object.keys,getNames:$Object.getOwnPropertyNames,getSymbols:$Object.getOwnPropertySymbols,each:[].forEach}; /***/}, /* 13 */function(module,exports,__webpack_require__){ // 7.1.13 ToObject(argument)
	var defined=__webpack_require__(14);module.exports = function(it){return Object(defined(it));}; /***/}, /* 14 */function(module,exports){ // 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){if(it == undefined)throw TypeError("Can't call method on  " + it);return it;}; /***/}, /* 15 */function(module,exports,__webpack_require__){ // fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof=__webpack_require__(16);module.exports = Object('z').propertyIsEnumerable(0)?Object:function(it){return cof(it) == 'String'?it.split(''):Object(it);}; /***/}, /* 16 */function(module,exports){var toString=({}).toString;module.exports = function(it){return toString.call(it).slice(8,-1);}; /***/}, /* 17 */function(module,exports){module.exports = function(exec){try{return !!exec();}catch(e) {return true;}}; /***/}, /* 18 */function(module,exports){module.exports = __WEBPACK_EXTERNAL_MODULE_18__; /***/}, /* 19 */function(module,exports){module.exports = __WEBPACK_EXTERNAL_MODULE_19__; /***/}, /* 20 */function(module,exports,__webpack_require__){'use strict';exports.__esModule = true;function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{'default':obj};}var _createUncontrollable=__webpack_require__(21);var _createUncontrollable2=_interopRequireDefault(_createUncontrollable);var mixin={shouldComponentUpdate:function shouldComponentUpdate(){ //let the forceUpdate trigger the update
	return !this._notifying;}};function set(component,propName,handler,value,args){if(handler){component._notifying = true;handler.call.apply(handler,[component,value].concat(args));component._notifying = false;}component._values[propName] = value;if(component.isMounted())component.forceUpdate();}exports['default'] = _createUncontrollable2['default']([mixin],set);module.exports = exports['default']; /***/}, /* 21 */function(module,exports,__webpack_require__){'use strict';exports.__esModule = true;var _extends=_Object$assign2 || function(target){for(var i=1;i < arguments.length;i++) {var source=arguments[i];for(var key in source) {if(Object.prototype.hasOwnProperty.call(source,key)){target[key] = source[key];}}}return target;};exports['default'] = createUncontrollable;function _interopRequireWildcard(obj){if(obj && obj.__esModule){return obj;}else {var newObj={};if(obj != null){for(var key in obj) {if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key] = obj[key];}}newObj['default'] = obj;return newObj;}}function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{'default':obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj) {if(keys.indexOf(i) >= 0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i] = obj[i];}return target;}var _react=__webpack_require__(18);var _react2=_interopRequireDefault(_react);var _utils=__webpack_require__(22);var utils=_interopRequireWildcard(_utils);function createUncontrollable(mixins,set){return uncontrollable;function uncontrollable(Component,controlledValues){var methods=arguments.length <= 2 || arguments[2] === undefined?[]:arguments[2];var displayName=Component.displayName || Component.name || 'Component',basePropTypes=utils.getType(Component).propTypes,propTypes;propTypes = utils.uncontrolledPropTypes(controlledValues,basePropTypes,displayName);methods = utils.transform(methods,function(obj,method){obj[method] = function(){var _refs$inner;return (_refs$inner = this.refs.inner)[method].apply(_refs$inner,arguments);};},{});var component=_react2['default'].createClass(_extends({displayName:'Uncontrolled(' + displayName + ')',mixins:mixins,propTypes:propTypes},methods,{componentWillMount:function componentWillMount(){var props=this.props,keys=_Object$keys(controlledValues);this._values = utils.transform(keys,function(values,key){values[key] = props[utils.defaultKey(key)];},{});}, /**
		       * If a prop switches from controlled to Uncontrolled
		       * reset its value to the defaultValue
		       */componentWillReceiveProps:function componentWillReceiveProps(nextProps){var _this=this;var props=this.props,keys=_Object$keys(controlledValues);keys.forEach(function(key){if(utils.getValue(nextProps,key) === undefined && utils.getValue(props,key) !== undefined){_this._values[key] = nextProps[utils.defaultKey(key)];}});},render:function render(){var _this2=this;var newProps={};var _props=this.props;var valueLink=_props.valueLink;var checkedLink=_props.checkedLink;var props=_objectWithoutProperties(_props,['valueLink','checkedLink']);utils.each(controlledValues,function(handle,propName){var linkPropName=utils.getLinkName(propName),prop=_this2.props[propName];if(linkPropName && !isProp(_this2.props,propName) && isProp(_this2.props,linkPropName)){prop = _this2.props[linkPropName].value;}newProps[propName] = prop !== undefined?prop:_this2._values[propName];newProps[handle] = setAndNotify.bind(_this2,propName);});newProps = _extends({},props,newProps,{ref:'inner'});return _react2['default'].createElement(Component,newProps);}}));component.ControlledComponent = Component; /**
		     * useful when wrapping a Component and you want to control
		     * everything
		     */component.deferControlTo = function(newComponent,additions,nextMethods){if(additions === undefined)additions = {};return uncontrollable(newComponent,_extends({},controlledValues,additions),nextMethods);};return component;function setAndNotify(propName,value){var linkName=utils.getLinkName(propName),handler=this.props[controlledValues[propName]];if(linkName && isProp(this.props,linkName) && !handler){handler = this.props[linkName].requestChange;}for(var _len=arguments.length,args=Array(_len > 2?_len - 2:0),_key=2;_key < _len;_key++) {args[_key - 2] = arguments[_key];}set(this,propName,handler,value,args);}function isProp(props,prop){return props[prop] !== undefined;}}}module.exports = exports['default']; /***/}, /* 22 */function(module,exports,__webpack_require__){ /* WEBPACK VAR INJECTION */(function(process){'use strict';exports.__esModule = true;exports.customPropType = customPropType;exports.uncontrolledPropTypes = uncontrolledPropTypes;exports.getType = getType;exports.getValue = getValue;exports.getLinkName = getLinkName;exports.defaultKey = defaultKey;exports.chain = chain;exports.transform = transform;exports.each = each;exports.has = has;function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{'default':obj};}var _react=__webpack_require__(18);var _react2=_interopRequireDefault(_react);var _invariant=__webpack_require__(24);var _invariant2=_interopRequireDefault(_invariant);function customPropType(handler,propType,name){return function(props,propName){if(props[propName] !== undefined){if(!props[handler]){return new Error('You have provided a `' + propName + '` prop to ' + '`' + name + '` without an `' + handler + '` handler. This will render a read-only field. ' + 'If the field should be mutable use `' + defaultKey(propName) + '`. Otherwise, set `' + handler + '`');}return propType && propType(props,propName,name);}};}function uncontrolledPropTypes(controlledValues,basePropTypes,displayName){var propTypes={};if(process.env.NODE_ENV !== 'production' && basePropTypes){transform(controlledValues,function(obj,handler,prop){var type=basePropTypes[prop];_invariant2['default'](typeof handler === 'string' && handler.trim().length,'Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable',displayName,prop);obj[prop] = customPropType(handler,type,displayName);if(type !== undefined)obj[defaultKey(prop)] = type;},propTypes);}return propTypes;}var version=_react2['default'].version.split('.').map(parseFloat);exports.version = version;function getType(component){if(version[0] === 0 && version[1] >= 13)return component;return component.type;}function getValue(props,name){var linkPropName=getLinkName(name);if(linkPropName && !isProp(props,name) && isProp(props,linkPropName))return props[linkPropName].value;return props[name];}function isProp(props,prop){return props[prop] !== undefined;}function getLinkName(name){return name === 'value'?'valueLink':name === 'checked'?'checkedLink':null;}function defaultKey(key){return 'default' + key.charAt(0).toUpperCase() + key.substr(1);}function chain(thisArg,a,b){return function chainedFunction(){for(var _len=arguments.length,args=Array(_len),_key=0;_key < _len;_key++) {args[_key] = arguments[_key];}a && a.call.apply(a,[thisArg].concat(args));b && b.call.apply(b,[thisArg].concat(args));};}function transform(obj,cb,seed){each(obj,cb.bind(null,seed = seed || (Array.isArray(obj)?[]:{})));return seed;}function each(obj,cb,thisArg){if(Array.isArray(obj))return obj.forEach(cb,thisArg);for(var key in obj) if(has(obj,key))cb.call(thisArg,obj[key],key,obj);}function has(o,k){return o?Object.prototype.hasOwnProperty.call(o,k):false;} /* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(23)); /***/}, /* 23 */function(module,exports){ // shim for using process in browser
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
	throw error;}};module.exports = invariant; /* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(23)); /***/}, /* 25 */function(module,exports,__webpack_require__){"use strict";var _extends=__webpack_require__(2)['default'];var React=__webpack_require__(18);var PropTypes=React.PropTypes;var Header=__webpack_require__(26);var Viewport=__webpack_require__(41);var GridScrollMixin=__webpack_require__(64);var DOMMetrics=__webpack_require__(63);var Grid=React.createClass({displayName:'Grid',propTypes:{rowGetter:PropTypes.oneOfType([PropTypes.array,PropTypes.func]).isRequired,columns:PropTypes.oneOfType([PropTypes.array,PropTypes.object]),minHeight:PropTypes.number,headerRows:PropTypes.oneOfType([PropTypes.array,PropTypes.func]),rowHeight:PropTypes.number,rowRenderer:PropTypes.func,expandedRows:PropTypes.oneOfType([PropTypes.array,PropTypes.func]),selectedRows:PropTypes.oneOfType([PropTypes.array,PropTypes.func]),rowsCount:PropTypes.number,onRows:PropTypes.func,sortColumn:React.PropTypes.string,sortDirection:React.PropTypes.oneOf(['ASC','DESC','NONE']),rowOffsetHeight:PropTypes.number.isRequired,onViewportKeydown:PropTypes.func.isRequired,onViewportDragStart:PropTypes.func.isRequired,onViewportDragEnd:PropTypes.func.isRequired,onViewportDoubleClick:PropTypes.func.isRequired},mixins:[GridScrollMixin,DOMMetrics.MetricsComputatorMixin],getStyle:function getStyle(){return {overflow:'hidden',outline:0,position:'relative',minHeight:this.props.minHeight};},render:function render(){var headerRows=this.props.headerRows || [{ref:'row'}];return React.createElement('div',_extends({},this.props,{style:this.getStyle(),className:'react-grid-Grid'}),React.createElement(Header,{ref:'header',columnMetrics:this.props.columnMetrics,onColumnResize:this.props.onColumnResize,height:this.props.rowHeight,totalWidth:this.props.totalWidth,headerRows:headerRows,sortColumn:this.props.sortColumn,sortDirection:this.props.sortDirection,onSort:this.props.onSort}),React.createElement('div',{ref:'viewPortContainer',onKeyDown:this.props.onViewportKeydown,onDoubleClick:this.props.onViewportDoubleClick,onDragStart:this.props.onViewportDragStart,onDragEnd:this.props.onViewportDragEnd},React.createElement(Viewport,{ref:'viewport',width:this.props.columnMetrics.width,rowHeight:this.props.rowHeight,rowRenderer:this.props.rowRenderer,rowGetter:this.props.rowGetter,rowsCount:this.props.rowsCount,selectedRows:this.props.selectedRows,expandedRows:this.props.expandedRows,columnMetrics:this.props.columnMetrics,totalWidth:this.props.totalWidth,onScroll:this.onScroll,onRows:this.props.onRows,cellMetaData:this.props.cellMetaData,rowOffsetHeight:this.props.rowOffsetHeight || this.props.rowHeight * headerRows.length,minHeight:this.props.minHeight})));},getDefaultProps:function getDefaultProps(){return {rowHeight:35,minHeight:350};}});module.exports = Grid; /***/}, /* 26 */function(module,exports,__webpack_require__){"use strict";var _extends=__webpack_require__(2)['default'];var React=__webpack_require__(18);var ReactDOM=__webpack_require__(19);var joinClasses=__webpack_require__(27);var shallowCloneObject=__webpack_require__(28);var ColumnMetrics=__webpack_require__(29);var ColumnUtils=__webpack_require__(31);var HeaderRow=__webpack_require__(33);var Header=React.createClass({displayName:'Header',propTypes:{columnMetrics:React.PropTypes.shape({width:React.PropTypes.number.isRequired}).isRequired,totalWidth:React.PropTypes.number,height:React.PropTypes.number.isRequired,headerRows:React.PropTypes.array.isRequired},render:function render(){var className=joinClasses({'react-grid-Header':true,'react-grid-Header--resizing':!!this.state.resizing});var headerRows=this.getHeaderRows();return React.createElement('div',_extends({},this.props,{style:this.getStyle(),className:className}),headerRows);},shouldComponentUpdate:function shouldComponentUpdate(nextProps,nextState){var update=!ColumnMetrics.sameColumns(this.props.columnMetrics.columns,nextProps.columnMetrics.columns,ColumnMetrics.sameColumn) || this.props.totalWidth != nextProps.totalWidth || this.props.headerRows.length != nextProps.headerRows.length || this.state.resizing != nextState.resizing || this.props.sortColumn != nextProps.sortColumn || this.props.sortDirection != nextProps.sortDirection;return update;},getHeaderRows:function getHeaderRows(){var _this=this;var columnMetrics=this.getColumnMetrics();var resizeColumn;if(this.state.resizing){resizeColumn = this.state.resizing.column;}var headerRows=[];this.props.headerRows.forEach(function(row,index){var headerRowStyle={position:'absolute',top:_this.getCombinedHeaderHeights(index),left:0,width:_this.props.totalWidth,overflow:'hidden'};headerRows.push(React.createElement(HeaderRow,{key:row.ref,ref:row.ref,style:headerRowStyle,onColumnResize:_this.onColumnResize,onColumnResizeEnd:_this.onColumnResizeEnd,width:columnMetrics.width,height:row.height || _this.props.height,columns:columnMetrics.columns,resizing:resizeColumn,headerCellRenderer:row.headerCellRenderer,sortColumn:_this.props.sortColumn,sortDirection:_this.props.sortDirection,onSort:_this.props.onSort}));});return headerRows;},getInitialState:function getInitialState(){return {resizing:null};},componentWillReceiveProps:function componentWillReceiveProps(){this.setState({resizing:null});},onColumnResize:function onColumnResize(column,width){var state=this.state.resizing || this.props;var pos=this.getColumnPosition(column);if(pos != null){var resizing={columnMetrics:shallowCloneObject(state.columnMetrics)};resizing.columnMetrics = ColumnMetrics.resizeColumn(resizing.columnMetrics,pos,width); // we don't want to influence scrollLeft while resizing
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
		 */"use strict";var _extends=__webpack_require__(2)['default'];var React=__webpack_require__(18);var PropTypes=React.PropTypes;var shallowEqual=__webpack_require__(34);var HeaderCell=__webpack_require__(35);var getScrollbarSize=__webpack_require__(32);var ColumnUtilsMixin=__webpack_require__(31);var SortableHeaderCell=__webpack_require__(40);var HeaderRowStyle={overflow:React.PropTypes.string,width:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),height:React.PropTypes.number,position:React.PropTypes.string};var DEFINE_SORT={ASC:'ASC',DESC:'DESC',NONE:'NONE'};var HeaderRow=React.createClass({displayName:'HeaderRow',propTypes:{width:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),height:PropTypes.number.isRequired,columns:PropTypes.oneOfType([PropTypes.array,PropTypes.object]),onColumnResize:PropTypes.func,onSort:PropTypes.func.isRequired,style:PropTypes.shape(HeaderRowStyle)},mixins:[ColumnUtilsMixin],render:function render(){var cellsStyle={width:this.props.width?this.props.width + getScrollbarSize():'100%',height:this.props.height,whiteSpace:'nowrap',overflowX:'hidden',overflowY:'hidden'};var cells=this.getCells();return React.createElement('div',_extends({},this.props,{className:'react-grid-HeaderRow'}),React.createElement('div',{style:cellsStyle},cells));},getHeaderRenderer:function getHeaderRenderer(column){if(column.sortable){var sortDirection=this.props.sortColumn === column.key?this.props.sortDirection:DEFINE_SORT.NONE;return React.createElement(SortableHeaderCell,{columnKey:column.key,onSort:this.props.onSort,sortDirection:sortDirection});}else {return this.props.headerCellRenderer || column.headerRenderer || this.props.cellRenderer;}},getCells:function getCells(){var cells=[];var lockedCells=[];for(var i=0,len=this.getSize(this.props.columns);i < len;i++) {var column=this.getColumn(this.props.columns,i);var cell=React.createElement(HeaderCell,{ref:i,key:i,height:this.props.height,column:column,renderer:this.getHeaderRenderer(column),resizing:this.props.resizing === column,onResize:this.props.onColumnResize,onResizeEnd:this.props.onColumnResizeEnd});if(column.locked){lockedCells.push(cell);}else {cells.push(cell);}}return cells.concat(lockedCells);},setScrollLeft:function setScrollLeft(scrollLeft){var _this=this;this.props.columns.forEach(function(column,i){if(column.locked){_this.refs[i].setScrollLeft(scrollLeft);}});},shouldComponentUpdate:function shouldComponentUpdate(nextProps){return nextProps.width !== this.props.width || nextProps.height !== this.props.height || nextProps.columns !== this.props.columns || !shallowEqual(nextProps.style,this.props.style) || this.props.sortColumn != nextProps.sortColumn || this.props.sortDirection != nextProps.sortDirection;},getStyle:function getStyle(){return {overflow:'hidden',width:'100%',height:this.props.height,position:'absolute'};}});module.exports = HeaderRow; /***/}, /* 34 */function(module,exports){ /**
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
		 */function shallowEqual(objA,objB){if(objA === objB){return true;}if(typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null){return false;}var keysA=_Object$keys(objA);var keysB=_Object$keys(objB);if(keysA.length !== keysB.length){return false;} // Test for A's keys different from B.
	var bHasOwnProperty=hasOwnProperty.bind(objB);for(var i=0;i < keysA.length;i++) {if(!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]){return false;}}return true;}module.exports = shallowEqual; /***/}, /* 35 */function(module,exports,__webpack_require__){"use strict";var React=__webpack_require__(18);var ReactDOM=__webpack_require__(19);var joinClasses=__webpack_require__(27);var PropTypes=React.PropTypes;var ExcelColumn=__webpack_require__(36);var ResizeHandle=__webpack_require__(37);var HeaderCell=React.createClass({displayName:'HeaderCell',propTypes:{renderer:PropTypes.oneOfType([PropTypes.func,PropTypes.element]).isRequired,column:PropTypes.shape(ExcelColumn).isRequired,onResize:PropTypes.func.isRequired,height:PropTypes.number.isRequired,onResizeEnd:PropTypes.func.isRequired},render:function render(){var resizeHandle;if(this.props.column.resizable){resizeHandle = React.createElement(ResizeHandle,{onDrag:this.onDrag,onDragStart:this.onDragStart,onDragEnd:this.onDragEnd});}var className=joinClasses({'react-grid-HeaderCell':true,'react-grid-HeaderCell--resizing':this.state.resizing,'react-grid-HeaderCell--locked':this.props.column.locked});className = joinClasses(className,this.props.className);var cell=this.getCell();return React.createElement('div',{className:className,style:this.getStyle()},cell,resizeHandle);},getCell:function getCell(){if(React.isValidElement(this.props.renderer)){return React.cloneElement(this.props.renderer,{column:this.props.column});}else {return this.props.renderer({column:this.props.column});}},getDefaultProps:function getDefaultProps(){return {renderer:simpleCellRenderer};},getInitialState:function getInitialState(){return {resizing:false};},setScrollLeft:function setScrollLeft(scrollLeft){var node=ReactDOM.findDOMNode(this);node.style.webkitTransform = 'translate3d(' + scrollLeft + 'px, 0px, 0px)';node.style.transform = 'translate3d(' + scrollLeft + 'px, 0px, 0px)';},getStyle:function getStyle(){return {width:this.props.column.width,left:this.props.column.left,display:'inline-block',position:'absolute',overflow:'hidden',height:this.props.height,margin:0,textOverflow:'ellipsis',whiteSpace:'nowrap'};},onDragStart:function onDragStart(e){this.setState({resizing:true}); //need to set dummy data for FF
	if(e && e.dataTransfer && e.dataTransfer.setData)e.dataTransfer.setData('text/plain','dummy');},onDrag:function onDrag(e){var resize=this.props.onResize || null; //for flows sake, doesnt recognise a null check direct
	if(resize){var width=this.getWidthFromMouseEvent(e);if(width > 0){resize(this.props.column,width);}}},onDragEnd:function onDragEnd(e){var width=this.getWidthFromMouseEvent(e);this.props.onResizeEnd(this.props.column,width);this.setState({resizing:false});},getWidthFromMouseEvent:function getWidthFromMouseEvent(e){var right=e.pageX;var left=ReactDOM.findDOMNode(this).getBoundingClientRect().left;return right - left;}});function simpleCellRenderer(props){return React.createElement('div',{className:'widget-HeaderCell__value'},props.column.name);}module.exports = HeaderCell; /***/}, /* 36 */function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(18);var ExcelColumnShape={name:React.PropTypes.string.isRequired,key:React.PropTypes.string.isRequired,width:React.PropTypes.number.isRequired};module.exports = ExcelColumnShape; /***/}, /* 37 */function(module,exports,__webpack_require__){'use strict';var _extends=__webpack_require__(2)['default'];var React=__webpack_require__(18);var Draggable=__webpack_require__(38);var ResizeHandle=React.createClass({displayName:'ResizeHandle',style:{position:'absolute',top:0,right:0,width:6,height:'100%'},render:function render(){return React.createElement(Draggable,_extends({},this.props,{className:'react-grid-HeaderCell__resizeHandle',style:this.style}));}});module.exports = ResizeHandle; /***/}, /* 38 */function(module,exports,__webpack_require__){ /*  need   */'use strict';var _extends=__webpack_require__(2)['default'];var React=__webpack_require__(18);var PropTypes=React.PropTypes;var emptyFunction=__webpack_require__(39);var Draggable=React.createClass({displayName:'Draggable',propTypes:{onDragStart:PropTypes.func,onDragEnd:PropTypes.func,onDrag:PropTypes.func,component:PropTypes.oneOfType([PropTypes.func,PropTypes.string])},render:function render(){return React.createElement('div',_extends({},this.props,{onMouseDown:this.onMouseDown,className:'react-grid-HeaderCell__draggable'}));},getDefaultProps:function getDefaultProps(){return {onDragStart:emptyFunction.thatReturnsTrue,onDragEnd:emptyFunction,onDrag:emptyFunction};},getInitialState:function getInitialState(){return {drag:null};},onMouseDown:function onMouseDown(e){var drag=this.props.onDragStart(e);if(drag === null && e.button !== 0){return;}window.addEventListener('mouseup',this.onMouseUp);window.addEventListener('mousemove',this.onMouseMove);this.setState({drag:drag});},onMouseMove:function onMouseMove(e){if(this.state.drag === null){return;}if(e.preventDefault){e.preventDefault();}this.props.onDrag(e);},onMouseUp:function onMouseUp(e){this.cleanUp();this.props.onDragEnd(e,this.state.drag);this.setState({drag:null});},componentWillUnmount:function componentWillUnmount(){this.cleanUp();},cleanUp:function cleanUp(){window.removeEventListener('mouseup',this.onMouseUp);window.removeEventListener('mousemove',this.onMouseMove);}});module.exports = Draggable; /***/}, /* 39 */function(module,exports){ /**
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
		 */function emptyFunction(){}emptyFunction.thatReturns = makeEmptyFunction;emptyFunction.thatReturnsFalse = makeEmptyFunction(false);emptyFunction.thatReturnsTrue = makeEmptyFunction(true);emptyFunction.thatReturnsNull = makeEmptyFunction(null);emptyFunction.thatReturnsThis = function(){return this;};emptyFunction.thatReturnsArgument = function(arg){return arg;};module.exports = emptyFunction; /***/}, /* 40 */function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(18);var joinClasses=__webpack_require__(27);var DEFINE_SORT={ASC:'ASC',DESC:'DESC',NONE:'NONE'};var SortableHeaderCell=React.createClass({displayName:'SortableHeaderCell',propTypes:{columnKey:React.PropTypes.string.isRequired,onSort:React.PropTypes.func.isRequired,sortDirection:React.PropTypes.oneOf(['ASC','DESC','NONE'])},onClick:function onClick(){var direction;switch(this.props.sortDirection){case null:case undefined:case DEFINE_SORT.NONE:direction = DEFINE_SORT.ASC;break;case DEFINE_SORT.ASC:direction = DEFINE_SORT.DESC;break;case DEFINE_SORT.DESC:direction = DEFINE_SORT.NONE;break;}this.props.onSort(this.props.columnKey,direction);},getSortByText:function getSortByText(){var unicodeKeys={'ASC':'9650','DESC':'9660','NONE':''};return String.fromCharCode(unicodeKeys[this.props.sortDirection]);},render:function render(){var className=joinClasses({'react-grid-HeaderCell-sortable':true,'react-grid-HeaderCell-sortable--ascending':this.props.sortDirection === 'ASC','react-grid-HeaderCell-sortable--descending':this.props.sortDirection === 'DESC'});return React.createElement('div',{className:className,onClick:this.onClick,style:{cursor:'pointer'}},this.props.column.name,React.createElement('span',{className:'pull-right'},this.getSortByText()));}});module.exports = SortableHeaderCell; /***/}, /* 41 */function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(18);var Canvas=__webpack_require__(42);var PropTypes=React.PropTypes;var ViewportScroll=__webpack_require__(62);var Viewport=React.createClass({displayName:'Viewport',mixins:[ViewportScroll],propTypes:{rowOffsetHeight:PropTypes.number.isRequired,totalWidth:PropTypes.number.isRequired,columnMetrics:PropTypes.object.isRequired,rowGetter:PropTypes.oneOfType([PropTypes.array,PropTypes.func]).isRequired,selectedRows:PropTypes.array,expandedRows:PropTypes.array,rowRenderer:PropTypes.func,rowsCount:PropTypes.number.isRequired,rowHeight:PropTypes.number.isRequired,onRows:PropTypes.func,onScroll:PropTypes.func,minHeight:PropTypes.number},render:function render(){var style={padding:0,bottom:0,left:0,right:0,overflow:'hidden',position:'absolute',top:this.props.rowOffsetHeight};return React.createElement('div',{className:'react-grid-Viewport',style:style},React.createElement(Canvas,{ref:'canvas',totalWidth:this.props.totalWidth,width:this.props.columnMetrics.width,rowGetter:this.props.rowGetter,rowsCount:this.props.rowsCount,selectedRows:this.props.selectedRows,expandedRows:this.props.expandedRows,columns:this.props.columnMetrics.columns,rowRenderer:this.props.rowRenderer,visibleStart:this.state.visibleStart,visibleEnd:this.state.visibleEnd,displayStart:this.state.displayStart,displayEnd:this.state.displayEnd,cellMetaData:this.props.cellMetaData,height:this.state.height,rowHeight:this.props.rowHeight,onScroll:this.onScroll,onRows:this.props.onRows}));},getScroll:function getScroll(){return this.refs.canvas.getScroll();},onScroll:function onScroll(scroll){this.updateScroll(scroll.scrollTop,scroll.scrollLeft,this.state.height,this.props.rowHeight,this.props.rowsCount);if(this.props.onScroll){this.props.onScroll({scrollTop:scroll.scrollTop,scrollLeft:scroll.scrollLeft});}},setScrollLeft:function setScrollLeft(scrollLeft){this.refs.canvas.setScrollLeft(scrollLeft);}});module.exports = Viewport; /***/}, /* 42 */function(module,exports,__webpack_require__){"use strict";var React=__webpack_require__(18);var ReactDOM=__webpack_require__(19);var joinClasses=__webpack_require__(27);var PropTypes=React.PropTypes;var shallowEqual=__webpack_require__(34);var emptyFunction=__webpack_require__(39);var ScrollShim=__webpack_require__(43);var Row=__webpack_require__(44);var Canvas=React.createClass({displayName:'Canvas',mixins:[ScrollShim],propTypes:{rowRenderer:PropTypes.oneOfType([PropTypes.func,PropTypes.element]),rowHeight:PropTypes.number.isRequired,height:PropTypes.number.isRequired,displayStart:PropTypes.number.isRequired,displayEnd:PropTypes.number.isRequired,rowsCount:PropTypes.number.isRequired,rowGetter:PropTypes.oneOfType([PropTypes.func.isRequired,PropTypes.array.isRequired]),onRows:PropTypes.func,columns:PropTypes.oneOfType([PropTypes.object,PropTypes.array]).isRequired},render:function render(){var _this=this;var displayStart=this.state.displayStart;var displayEnd=this.state.displayEnd;var rowHeight=this.props.rowHeight;var length=this.props.rowsCount;var rows=this.getRows(displayStart,displayEnd).map(function(row,idx){return _this.renderRow({key:displayStart + idx,ref:idx,idx:displayStart + idx,row:row,height:rowHeight,columns:_this.props.columns,isSelected:_this.isRowSelected(displayStart + idx),expandedRows:_this.props.expandedRows,cellMetaData:_this.props.cellMetaData});});this._currentRowsLength = rows.length;if(displayStart > 0){rows.unshift(this.renderPlaceholder('top',displayStart * rowHeight));}if(length - displayEnd > 0){rows.push(this.renderPlaceholder('bottom',(length - displayEnd) * rowHeight));}var style={position:'absolute',top:0,left:0,overflowX:'auto',overflowY:'scroll',width:this.props.totalWidth + this.state.scrollbarWidth,height:this.props.height,transform:'translate3d(0, 0, 0)'};return React.createElement('div',{style:style,onScroll:this.onScroll,className:joinClasses('react-grid-Canvas',this.props.className,{opaque:this.props.cellMetaData.selected && this.props.cellMetaData.selected.active})},React.createElement('div',{style:{width:this.props.width,overflow:'hidden'}},rows));},renderRow:function renderRow(props){var RowsRenderer=this.props.rowRenderer;if(typeof RowsRenderer === 'function'){return React.createElement(RowsRenderer,props);}else if(React.isValidElement(this.props.rowRenderer)){return React.cloneElement(this.props.rowRenderer,props);}},renderPlaceholder:function renderPlaceholder(key,height){return React.createElement('div',{key:key,style:{height:height}},this.props.columns.map(function(column,idx){return React.createElement('div',{style:{width:column.width},key:idx});}));},getDefaultProps:function getDefaultProps(){return {rowRenderer:Row,onRows:emptyFunction};},isRowSelected:function isRowSelected(rowIdx){return this.props.selectedRows && this.props.selectedRows[rowIdx] === true;},_currentRowsLength:0,_currentRowsRange:{start:0,end:0},_scroll:{scrollTop:0,scrollLeft:0},getInitialState:function getInitialState(){return {shouldUpdate:true,displayStart:this.props.displayStart,displayEnd:this.props.displayEnd,scrollbarWidth:0};},componentWillMount:function componentWillMount(){this._currentRowsLength = 0;this._currentRowsRange = {start:0,end:0};this._scroll = {scrollTop:0,scrollLeft:0};},componentDidMount:function componentDidMount(){this.onRows();},componentDidUpdate:function componentDidUpdate(){if(this._scroll.scrollTop !== 0 && this._scroll.scrollLeft !== 0){this.setScrollLeft(this._scroll.scrollLeft);}this.onRows();},componentWillUnmount:function componentWillUnmount(){this._currentRowsLength = 0;this._currentRowsRange = {start:0,end:0};this._scroll = {scrollTop:0,scrollLeft:0};},componentWillReceiveProps:function componentWillReceiveProps(nextProps){if(nextProps.rowsCount > this.props.rowsCount){ReactDOM.findDOMNode(this).scrollTop = nextProps.rowsCount * this.props.rowHeight;}var scrollbarWidth=this.getScrollbarWidth();var shouldUpdate=!(nextProps.visibleStart > this.state.displayStart && nextProps.visibleEnd < this.state.displayEnd) || nextProps.rowsCount !== this.props.rowsCount || nextProps.rowHeight !== this.props.rowHeight || nextProps.columns !== this.props.columns || nextProps.width !== this.props.width || nextProps.cellMetaData !== this.props.cellMetaData || !shallowEqual(nextProps.style,this.props.style);if(shouldUpdate){this.setState({shouldUpdate:true,displayStart:nextProps.displayStart,displayEnd:nextProps.displayEnd,scrollbarWidth:scrollbarWidth});}else {this.setState({shouldUpdate:false,scrollbarWidth:scrollbarWidth});}},shouldComponentUpdate:function shouldComponentUpdate(nextProps,nextState){return !nextState || nextState.shouldUpdate;},onRows:function onRows(){if(this._currentRowsRange !== {start:0,end:0}){this.props.onRows(this._currentRowsRange);this._currentRowsRange = {start:0,end:0};}},getRows:function getRows(displayStart,displayEnd){this._currentRowsRange = {start:displayStart,end:displayEnd};if(Array.isArray(this.props.rowGetter)){return this.props.rowGetter.slice(displayStart,displayEnd);}else {var rows=[];for(var i=displayStart;i < displayEnd;i++) {rows.push(this.props.rowGetter(i));}return rows;}},getScrollbarWidth:function getScrollbarWidth(){var scrollbarWidth=0; // Get the scrollbar width
	var canvas=ReactDOM.findDOMNode(this);scrollbarWidth = canvas.offsetWidth - canvas.clientWidth;return scrollbarWidth;},setScrollLeft:function setScrollLeft(scrollLeft){if(this._currentRowsLength !== 0){if(!this.refs)return;for(var i=0,len=this._currentRowsLength;i < len;i++) {if(this.refs[i] && this.refs[i].setScrollLeft){this.refs[i].setScrollLeft(scrollLeft);}}}},getScroll:function getScroll(){var _ReactDOM$findDOMNode=ReactDOM.findDOMNode(this);var scrollTop=_ReactDOM$findDOMNode.scrollTop;var scrollLeft=_ReactDOM$findDOMNode.scrollLeft;return {scrollTop:scrollTop,scrollLeft:scrollLeft};},onScroll:function onScroll(e){this.appendScrollShim();var _e$target=e.target;var scrollTop=_e$target.scrollTop;var scrollLeft=_e$target.scrollLeft;var scroll={scrollTop:scrollTop,scrollLeft:scrollLeft};this._scroll = scroll;this.props.onScroll(scroll);}});module.exports = Canvas; /***/}, /* 43 */function(module,exports,__webpack_require__){ /* TODO mixin not compatible and HTMLElement classList */ /**
		 * @jsx React.DOM


		 */'use strict';var ReactDOM=__webpack_require__(19);var ScrollShim={appendScrollShim:function appendScrollShim(){if(!this._scrollShim){var size=this._scrollShimSize();var shim=document.createElement('div');if(shim.classList){shim.classList.add('react-grid-ScrollShim'); //flow - not compatible with HTMLElement
	}else {shim.className += ' react-grid-ScrollShim';}shim.style.position = 'absolute';shim.style.top = 0;shim.style.left = 0;shim.style.width = size.width + 'px';shim.style.height = size.height + 'px';ReactDOM.findDOMNode(this).appendChild(shim);this._scrollShim = shim;}this._scheduleRemoveScrollShim();},_scrollShimSize:function _scrollShimSize(){return {width:this.props.width,height:this.props.length * this.props.rowHeight};},_scheduleRemoveScrollShim:function _scheduleRemoveScrollShim(){if(this._scheduleRemoveScrollShimTimer){clearTimeout(this._scheduleRemoveScrollShimTimer);}this._scheduleRemoveScrollShimTimer = setTimeout(this._removeScrollShim,200);},_removeScrollShim:function _removeScrollShim(){if(this._scrollShim){this._scrollShim.parentNode.removeChild(this._scrollShim);this._scrollShim = undefined;}}};module.exports = ScrollShim; /***/}, /* 44 */function(module,exports,__webpack_require__){'use strict';var _extends=__webpack_require__(2)['default'];var React=__webpack_require__(18);var joinClasses=__webpack_require__(27);var Cell=__webpack_require__(45);var ColumnMetrics=__webpack_require__(29);var ColumnUtilsMixin=__webpack_require__(31);var Row=React.createClass({displayName:'Row',propTypes:{height:React.PropTypes.number.isRequired,columns:React.PropTypes.oneOfType([React.PropTypes.object,React.PropTypes.array]).isRequired,row:React.PropTypes.object.isRequired,cellRenderer:React.PropTypes.func,isSelected:React.PropTypes.bool,idx:React.PropTypes.number.isRequired,expandedRows:React.PropTypes.arrayOf(React.PropTypes.object)},mixins:[ColumnUtilsMixin],render:function render(){var className=joinClasses('react-grid-Row','react-grid-Row--' + (this.props.idx % 2 === 0?'even':'odd'));var style={height:this.getRowHeight(this.props),overflow:'hidden'};var cells=this.getCells();return React.createElement('div',_extends({},this.props,{className:className,style:style,onDragEnter:this.handleDragEnter}),React.isValidElement(this.props.row)?this.props.row:cells);},getCells:function getCells(){var _this=this;var cells=[];var lockedCells=[];var selectedColumn=this.getSelectedColumn();this.props.columns.forEach(function(column,i){var CellRenderer=_this.props.cellRenderer;var cell=React.createElement(CellRenderer,{ref:i,key:column.key + '-' + i,idx:i,rowIdx:_this.props.idx,value:_this.getCellValue(column.key || i),column:column,height:_this.getRowHeight(),formatter:column.formatter,cellMetaData:_this.props.cellMetaData,rowData:_this.props.row,selectedColumn:selectedColumn,isRowSelected:_this.props.isSelected});if(column.locked){lockedCells.push(cell);}else {cells.push(cell);}});return cells.concat(lockedCells);},getRowHeight:function getRowHeight(){var rows=this.props.expandedRows || null;if(rows && this.props.key){var row=rows[this.props.key] || null;if(row){return row.height;}}return this.props.height;},getCellValue:function getCellValue(key){var val;if(key === 'select-row'){return this.props.isSelected;}else if(typeof this.props.row.get === 'function'){val = this.props.row.get(key);}else {val = this.props.row[key];}return val;},renderCell:function renderCell(props){if(typeof this.props.cellRenderer == 'function'){this.props.cellRenderer.call(this,props);}if(React.isValidElement(this.props.cellRenderer)){return React.cloneElement(this.props.cellRenderer,props);}else {return this.props.cellRenderer(props);}},getDefaultProps:function getDefaultProps(){return {cellRenderer:Cell,isSelected:false,height:35};},setScrollLeft:function setScrollLeft(scrollLeft){var _this2=this;this.props.columns.forEach(function(column,i){if(column.locked){if(!_this2.refs[i])return;_this2.refs[i].setScrollLeft(scrollLeft);}});},doesRowContainSelectedCell:function doesRowContainSelectedCell(props){var selected=props.cellMetaData.selected;if(selected && selected.rowIdx === props.idx){return true;}else {return false;}},willRowBeDraggedOver:function willRowBeDraggedOver(props){var dragged=props.cellMetaData.dragged;return dragged != null && (dragged.rowIdx >= 0 || dragged.complete === true);},hasRowBeenCopied:function hasRowBeenCopied(){var copied=this.props.cellMetaData.copied;return copied != null && copied.rowIdx === this.props.idx;},shouldComponentUpdate:function shouldComponentUpdate(nextProps){return !ColumnMetrics.sameColumns(this.props.columns,nextProps.columns,ColumnMetrics.sameColumn) || this.doesRowContainSelectedCell(this.props) || this.doesRowContainSelectedCell(nextProps) || this.willRowBeDraggedOver(nextProps) || nextProps.row !== this.props.row || this.hasRowBeenCopied() || this.props.isSelected !== nextProps.isSelected || nextProps.height !== this.props.height;},handleDragEnter:function handleDragEnter(){var handleDragEnterRow=this.props.cellMetaData.handleDragEnterRow;if(handleDragEnterRow){handleDragEnterRow(this.props.idx);}},getSelectedColumn:function getSelectedColumn(){var selected=this.props.cellMetaData.selected;if(selected && selected.idx){return this.getColumn(this.props.columns,selected.idx);}}});module.exports = Row; /***/}, /* 45 */function(module,exports,__webpack_require__){'use strict';var _extends=__webpack_require__(2)['default'];var React=__webpack_require__(18);var ReactDOM=__webpack_require__(19);var joinClasses=__webpack_require__(27);var EditorContainer=__webpack_require__(46);var ExcelColumn=__webpack_require__(36);var isFunction=__webpack_require__(60);var CellMetaDataShape=__webpack_require__(61);var Cell=React.createClass({displayName:'Cell',propTypes:{rowIdx:React.PropTypes.number.isRequired,idx:React.PropTypes.number.isRequired,selected:React.PropTypes.shape({idx:React.PropTypes.number.isRequired}),tabIndex:React.PropTypes.number,ref:React.PropTypes.string,column:React.PropTypes.shape(ExcelColumn).isRequired,value:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number,React.PropTypes.object,React.PropTypes.bool]).isRequired,isExpanded:React.PropTypes.bool,cellMetaData:React.PropTypes.shape(CellMetaDataShape).isRequired,handleDragStart:React.PropTypes.func,className:React.PropTypes.string,rowData:React.PropTypes.object.isRequired},getDefaultProps:function getDefaultProps(){return {tabIndex:-1,ref:'cell',isExpanded:false};},getInitialState:function getInitialState(){return {isRowChanging:false,isCellValueChanging:false};},componentDidMount:function componentDidMount(){this.checkFocus();},componentDidUpdate:function componentDidUpdate(){this.checkFocus();var dragged=this.props.cellMetaData.dragged;if(dragged && dragged.complete === true){this.props.cellMetaData.handleTerminateDrag();}if(this.state.isRowChanging && this.props.selectedColumn != null){this.applyUpdateClass();}},componentWillReceiveProps:function componentWillReceiveProps(nextProps){this.setState({isRowChanging:this.props.rowData !== nextProps.rowData,isCellValueChanging:this.props.value !== nextProps.value});},shouldComponentUpdate:function shouldComponentUpdate(nextProps){return this.props.column.width !== nextProps.column.width || this.props.column.left !== nextProps.column.left || this.props.rowData !== nextProps.rowData || this.props.height !== nextProps.height || this.props.rowIdx !== nextProps.rowIdx || this.isCellSelectionChanging(nextProps) || this.isDraggedCellChanging(nextProps) || this.isCopyCellChanging(nextProps) || this.props.isRowSelected !== nextProps.isRowSelected || this.isSelected();},getStyle:function getStyle(){var style={position:'absolute',width:this.props.column.width,height:this.props.height,left:this.props.column.left};return style;},render:function render(){var style=this.getStyle();var className=this.getCellClass();var cellContent=this.renderCellContent({value:this.props.value,column:this.props.column,rowIdx:this.props.rowIdx,isExpanded:this.props.isExpanded});return React.createElement('div',_extends({},this.props,{className:className,style:style,onClick:this.onCellClick,onDoubleClick:this.onCellDoubleClick}),cellContent,React.createElement('div',{className:'drag-handle',draggable:'true'}));},renderCellContent:function renderCellContent(props){var CellContent;var Formatter=this.getFormatter();if(React.isValidElement(Formatter)){props.dependentValues = this.getFormatterDependencies();CellContent = React.cloneElement(Formatter,props);}else if(isFunction(Formatter)){CellContent = React.createElement(Formatter,{value:this.props.value,dependentValues:this.getFormatterDependencies()});}else {CellContent = React.createElement(SimpleCellFormatter,{value:this.props.value});}return React.createElement('div',{ref:'cell',className:'react-grid-Cell__value'},CellContent,' ',this.props.cellControls);},isColumnSelected:function isColumnSelected(){var meta=this.props.cellMetaData;if(meta == null || meta.selected == null){return false;}return meta.selected && meta.selected.idx === this.props.idx;},isSelected:function isSelected(){var meta=this.props.cellMetaData;if(meta == null || meta.selected == null){return false;}return meta.selected && meta.selected.rowIdx === this.props.rowIdx && meta.selected.idx === this.props.idx;},isActive:function isActive(){var meta=this.props.cellMetaData;if(meta == null || meta.selected == null){return false;}return this.isSelected() && meta.selected.active === true;},isCellSelectionChanging:function isCellSelectionChanging(nextProps){var meta=this.props.cellMetaData;if(meta == null || meta.selected == null){return false;}var nextSelected=nextProps.cellMetaData.selected;if(meta.selected && nextSelected){return this.props.idx === nextSelected.idx || this.props.idx === meta.selected.idx;}else {return true;}},getFormatter:function getFormatter(){var col=this.props.column;if(this.isActive()){return React.createElement(EditorContainer,{rowData:this.getRowData(),rowIdx:this.props.rowIdx,idx:this.props.idx,cellMetaData:this.props.cellMetaData,column:col,height:this.props.height});}else {return this.props.column.formatter;}},getRowData:function getRowData(){return this.props.rowData.toJSON?this.props.rowData.toJSON():this.props.rowData;},getFormatterDependencies:function getFormatterDependencies(){ //convention based method to get corresponding Id or Name of any Name or Id property
	if(typeof this.props.column.getRowMetaData === 'function'){return this.props.column.getRowMetaData(this.getRowData(),this.props.column);}},onCellClick:function onCellClick(){var meta=this.props.cellMetaData;if(meta != null && meta.onCellClick != null){meta.onCellClick({rowIdx:this.props.rowIdx,idx:this.props.idx});}},onCellDoubleClick:function onCellDoubleClick(){var meta=this.props.cellMetaData;if(meta != null && meta.onCellDoubleClick != null){meta.onCellDoubleClick({rowIdx:this.props.rowIdx,idx:this.props.idx});}},checkFocus:function checkFocus(){if(this.isSelected() && !this.isActive()){ReactDOM.findDOMNode(this).focus();}},getCellClass:function getCellClass(){var className=joinClasses(this.props.column.cellClass,'react-grid-Cell',this.props.className,this.props.column.locked?'react-grid-Cell--locked':null);var extraClasses=joinClasses({'selected':this.isSelected() && !this.isActive(),'editing':this.isActive(),'copied':this.isCopied(),'active-drag-cell':this.isSelected() || this.isDraggedOver(),'is-dragged-over-up':this.isDraggedOverUpwards(),'is-dragged-over-down':this.isDraggedOverDownwards(),'was-dragged-over':this.wasDraggedOver()});return joinClasses(className,extraClasses);},getUpdateCellClass:function getUpdateCellClass(){return this.props.column.getUpdateCellClass?this.props.column.getUpdateCellClass(this.props.selectedColumn,this.props.column,this.state.isCellValueChanging):'';},applyUpdateClass:function applyUpdateClass(){var updateCellClass=this.getUpdateCellClass(); // -> removing the class
	if(updateCellClass != null && updateCellClass != ''){var cellDOMNode=ReactDOM.findDOMNode(this);if(cellDOMNode.classList){cellDOMNode.classList.remove(updateCellClass); // -> and re-adding the class
	cellDOMNode.classList.add(updateCellClass);}else if(cellDOMNode.className.indexOf(updateCellClass) === -1){ // IE9 doesn't support classList, nor (I think) altering element.className
	// without replacing it wholesale.
	cellDOMNode.className = cellDOMNode.className + ' ' + updateCellClass;}}},setScrollLeft:function setScrollLeft(scrollLeft){var ctrl=this; //flow on windows has an outdated react declaration, once that gets updated, we can remove this
	if(ctrl.isMounted()){var node=ReactDOM.findDOMNode(this);var transform='translate3d(' + scrollLeft + 'px, 0px, 0px)';node.style.webkitTransform = transform;node.style.transform = transform;}},isCopied:function isCopied(){var copied=this.props.cellMetaData.copied;return copied && copied.rowIdx === this.props.rowIdx && copied.idx === this.props.idx;},isDraggedOver:function isDraggedOver(){var dragged=this.props.cellMetaData.dragged;return dragged && dragged.overRowIdx === this.props.rowIdx && dragged.idx === this.props.idx;},wasDraggedOver:function wasDraggedOver(){var dragged=this.props.cellMetaData.dragged;return dragged && (dragged.overRowIdx < this.props.rowIdx && this.props.rowIdx < dragged.rowIdx || dragged.overRowIdx > this.props.rowIdx && this.props.rowIdx > dragged.rowIdx) && dragged.idx === this.props.idx;},isDraggedCellChanging:function isDraggedCellChanging(nextProps){var isChanging;var dragged=this.props.cellMetaData.dragged;var nextDragged=nextProps.cellMetaData.dragged;if(dragged){isChanging = nextDragged && this.props.idx === nextDragged.idx || dragged && this.props.idx === dragged.idx;return isChanging;}else {return false;}},isCopyCellChanging:function isCopyCellChanging(nextProps){var isChanging;var copied=this.props.cellMetaData.copied;var nextCopied=nextProps.cellMetaData.copied;if(copied){isChanging = nextCopied && this.props.idx === nextCopied.idx || copied && this.props.idx === copied.idx;return isChanging;}else {return false;}},isDraggedOverUpwards:function isDraggedOverUpwards(){var dragged=this.props.cellMetaData.dragged;return !this.isSelected() && this.isDraggedOver() && this.props.rowIdx < dragged.rowIdx;},isDraggedOverDownwards:function isDraggedOverDownwards(){var dragged=this.props.cellMetaData.dragged;return !this.isSelected() && this.isDraggedOver() && this.props.rowIdx > dragged.rowIdx;}});var SimpleCellFormatter=React.createClass({displayName:'SimpleCellFormatter',propTypes:{value:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number,React.PropTypes.object,React.PropTypes.bool]).isRequired},render:function render(){ // objects like dates will throw when specified as children
	// so cast to a string
	return React.createElement('span',null,'' + this.props.value);},shouldComponentUpdate:function shouldComponentUpdate(nextProps){return nextProps.value !== this.props.value;}});module.exports = Cell; /***/}, /* 46 */function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(18);var joinClasses=__webpack_require__(27);var keyboardHandlerMixin=__webpack_require__(47);var SimpleTextEditor=__webpack_require__(48);var isFunction=__webpack_require__(60);var checkAndCallOnEditor=function checkAndCallOnEditor(ctx,fn){for(var _len=arguments.length,args=Array(_len > 2?_len - 2:0),_key=2;_key < _len;_key++) {args[_key - 2] = arguments[_key];}var _ctx$getEditor;return isFunction(ctx.getEditor()[fn])?(_ctx$getEditor = ctx.getEditor())[fn].apply(_ctx$getEditor,args):false;};var EditorContainer=React.createClass({displayName:'EditorContainer',mixins:[keyboardHandlerMixin],propTypes:{rowData:React.PropTypes.object.isRequired,value:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number,React.PropTypes.object,React.PropTypes.bool]).isRequired,cellMetaData:React.PropTypes.shape({selected:React.PropTypes.object.isRequired,copied:React.PropTypes.object,dragged:React.PropTypes.object,onCellClick:React.PropTypes.func,onCellDoubleClick:React.PropTypes.func}).isRequired,column:React.PropTypes.object.isRequired,height:React.PropTypes.number.isRequired},changeCommitted:false,getInitialState:function getInitialState(){return {isInvalid:false};},componentDidMount:function componentDidMount(){var inputNode=this.getInputNode();if(inputNode !== undefined){checkAndCallOnEditor(this,'focus',this.props.cellMetaData);if(!this.getEditor().disableContainerStyles){inputNode.className += ' editor-main';inputNode.style.height = this.props.height - 1 + 'px';}}},createEditor:function createEditor(){var _this=this;var editorRef=function editorRef(c){return _this.editor = c;};var editorProps={ref:editorRef,column:this.props.column,value:this.getInitialValue(),onCommit:this.commit,rowMetaData:this.getRowMetaData(),height:this.props.height,onBlur:this.commit,onOverrideKeyDown:this.onKeyDown};var customEditor=this.props.column.editor;if(customEditor && React.isValidElement(customEditor)){ //return custom column editor or SimpleEditor if none specified
	return React.cloneElement(customEditor,editorProps);}else {return React.createElement(SimpleTextEditor,{ref:editorRef,column:this.props.column,value:this.getInitialValue(),onBlur:this.commit,rowMetaData:this.getRowMetaData()});}},getRowMetaData:function getRowMetaData(){ //convention based method to get corresponding Id or Name of any Name or Id property
	if(typeof this.props.column.getRowMetaData === 'function'){return this.props.column.getRowMetaData(this.props.rowData,this.props.column);}},onPressEnter:function onPressEnter(){if(!this.editorIsSelectOpen()){this.commit({key:'Enter'});}},onPressTab:function onPressTab(){this.commit({key:'Tab'});},onPressEscape:function onPressEscape(e){if(!this.editorIsSelectOpen()){this.props.cellMetaData.onCommitCancel();}else { // prevent event from bubbling if editor has results to select
	e.stopPropagation();}},onPressArrowDown:function onPressArrowDown(e){if(this.editorHasResults()){ //dont want to propogate as that then moves us round the grid
	e.stopPropagation();}else {this.commit(e);}},onPressArrowUp:function onPressArrowUp(e){if(this.editorHasResults()){ //dont want to propogate as that then moves us round the grid
	e.stopPropagation();}else {this.commit(e);}},onPressArrowLeft:function onPressArrowLeft(e){ //prevent event propogation. this disables left cell navigation
	if(!this.isCaretAtBeginningOfInput()){e.stopPropagation();}else {this.commit(e);}},onPressArrowRight:function onPressArrowRight(e){ //prevent event propogation. this disables right cell navigation
	if(!this.isCaretAtEndOfInput()){e.stopPropagation();}else {this.commit(e);}},shouldPreventKeyDown:function shouldPreventKeyDown(e){return checkAndCallOnEditor(this,'shouldPreventKeyDown',e);},editorHasResults:function editorHasResults(){return checkAndCallOnEditor(this,'hasResults');},editorIsSelectOpen:function editorIsSelectOpen(){return checkAndCallOnEditor(this,'isSelectOpen');},getEditor:function getEditor(){return this.editor;},commit:function commit(args){var opts=args || {};var updated=this.getEditor().getValue();if(this.isNewValueValid(updated)){var cellKey=this.props.column.key;this.props.cellMetaData.onCommit({cellKey:cellKey,updated:updated,rowIdx:this.props.rowIdx,key:opts.key});}this.changeCommitted = true;},isNewValueValid:function isNewValueValid(value){if(isFunction(this.getEditor().validate)){var isValid=checkAndCallOnEditor(this,'validate',value);this.setState({isInvalid:!isValid});return isValid;}else {return true;}},getInputNode:function getInputNode(){return this.getEditor().getInputNode();},getInitialValue:function getInitialValue(){var selected=this.props.cellMetaData.selected;var keyCode=selected.initialKeyCode;if(keyCode === 'Delete' || keyCode === 'Backspace'){return '';}else if(keyCode === 'Enter'){return this.props.value;}else {var text=keyCode?String.fromCharCode(keyCode):this.props.value;return text;}},getContainerClass:function getContainerClass(){return joinClasses({'has-error':this.state.isInvalid === true});},renderStatusIcon:function renderStatusIcon(){if(this.state.isInvalid === true){return React.createElement('span',{className:'glyphicon glyphicon-remove form-control-feedback'});}},render:function render(){return React.createElement('div',{className:this.getContainerClass(),onKeyDown:this.onKeyDown},this.createEditor(),this.renderStatusIcon());}, // setCaretAtEndOfInput() {
	//   var input = this.getInputNode();
	//   //taken from http://stackoverflow.com/questions/511088/use-javascript-to-place-cursor-at-end-of-text-in-text-input-element
	//   var txtLength = input.value.length;
	//   if (input.setSelectionRange) {
	//     input.setSelectionRange(txtLength, txtLength);
	//   }
	//   else if (input.createTextRange) {
	//     var fieldRange = input.createTextRange();
	//     fieldRange.moveStart('character', txtLength);
	//     fieldRange.collapse();
	//     fieldRange.select();
	//   }
	// },
	isCaretAtBeginningOfInput:function isCaretAtBeginningOfInput(){var inputNode=this.getInputNode();return inputNode.selectionStart === inputNode.selectionEnd && inputNode.selectionStart === 0;},isCaretAtEndOfInput:function isCaretAtEndOfInput(){var inputNode=this.getInputNode();return inputNode.selectionStart === inputNode.value.length;},componentWillUnmount:function componentWillUnmount(){if(!this.changeCommitted && !this.hasEscapeBeenPressed()){this.commit({key:'Enter'});}},hasEscapeBeenPressed:function hasEscapeBeenPressed(){var pressed=false;var escapeKey=27;if(window.event){if(window.event.keyCode === escapeKey){pressed = true;}else if(window.event.which === escapeKey){pressed = true;}}return pressed;}});module.exports = EditorContainer; /***/}, /* 47 */function(module,exports){'use strict';var KeyboardHandlerMixin={onKeyDown:function onKeyDown(e){if(!this.shouldPreventKeyDown || !this.shouldPreventKeyDown(e)){if(this.isCtrlKeyHeldDown(e)){this.checkAndCall('onPressKeyWithCtrl',e);}else if(this.isKeyExplicitlyHandled(e.key)){ //break up individual keyPress events to have their own specific callbacks
	//this allows multiple mixins to listen to onKeyDown events and somewhat reduces methodName clashing
	var callBack='onPress' + e.key;this.checkAndCall(callBack,e);}else if(this.isKeyPrintable(e.keyCode)){this.checkAndCall('onPressChar',e);}}}, //taken from http://stackoverflow.com/questions/12467240/determine-if-javascript-e-keycode-is-a-printable-non-control-character
	isKeyPrintable:function isKeyPrintable(keycode){var valid=keycode > 47 && keycode < 58 ||  // number keys
	keycode == 32 || keycode == 13 ||  // spacebar & return key(s) (if you want to allow carriage returns)
	keycode > 64 && keycode < 91 ||  // letter keys
	keycode > 95 && keycode < 112 ||  // numpad keys
	keycode > 185 && keycode < 193 ||  // ;=,-./` (in order)
	keycode > 218 && keycode < 223; // [\]' (in order)
	return valid;},isKeyExplicitlyHandled:function isKeyExplicitlyHandled(key){return typeof this['onPress' + key] === 'function';},isCtrlKeyHeldDown:function isCtrlKeyHeldDown(e){return e.ctrlKey === true && e.key !== 'Control';},checkAndCall:function checkAndCall(methodName,args){if(typeof this[methodName] === 'function'){this[methodName](args);}}};module.exports = KeyboardHandlerMixin; /***/}, /* 48 */function(module,exports,__webpack_require__){'use strict';var _inherits=__webpack_require__(49)['default'];var _classCallCheck=__webpack_require__(58)['default'];var React=__webpack_require__(18);var EditorBase=__webpack_require__(59);var SimpleTextEditor=(function(_EditorBase){_inherits(SimpleTextEditor,_EditorBase);function SimpleTextEditor(){_classCallCheck(this,SimpleTextEditor);_EditorBase.apply(this,arguments);}SimpleTextEditor.prototype.render = function render(){return React.createElement('input',{ref:'input',type:'text',onBlur:this.props.onBlur,className:'form-control',defaultValue:this.props.value});};return SimpleTextEditor;})(EditorBase);module.exports = SimpleTextEditor; /***/}, /* 49 */function(module,exports,__webpack_require__){"use strict";var _Object$create=__webpack_require__(50)["default"];var _Object$setPrototypeOf=__webpack_require__(52)["default"];exports["default"] = function(subClass,superClass){if(typeof superClass !== "function" && superClass !== null){throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = _Object$create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)_Object$setPrototypeOf?_Object$setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;};exports.__esModule = true; /***/}, /* 50 */function(module,exports,__webpack_require__){module.exports = {"default":__webpack_require__(51),__esModule:true}; /***/}, /* 51 */function(module,exports,__webpack_require__){var $=__webpack_require__(12);module.exports = function create(P,D){return $.create(P,D);}; /***/}, /* 52 */function(module,exports,__webpack_require__){module.exports = {"default":__webpack_require__(53),__esModule:true}; /***/}, /* 53 */function(module,exports,__webpack_require__){__webpack_require__(54);module.exports = __webpack_require__(8).Object.setPrototypeOf; /***/}, /* 54 */function(module,exports,__webpack_require__){ // 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export=__webpack_require__(6);$export($export.S,'Object',{setPrototypeOf:__webpack_require__(55).set}); /***/}, /* 55 */function(module,exports,__webpack_require__){ // Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */var getDesc=__webpack_require__(12).getDesc,isObject=__webpack_require__(56),anObject=__webpack_require__(57);var check=function check(O,proto){anObject(O);if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");};module.exports = {set:_Object$setPrototypeOf2 || ('__proto__' in {}? // eslint-disable-line
	(function(test,buggy,set){try{set = __webpack_require__(9)(Function.call,getDesc(Object.prototype,'__proto__').set,2);set(test,[]);buggy = !(test instanceof Array);}catch(e) {buggy = true;}return function setPrototypeOf(O,proto){check(O,proto);if(buggy)O.__proto__ = proto;else set(O,proto);return O;};})({},false):undefined),check:check}; /***/}, /* 56 */function(module,exports){module.exports = function(it){return typeof it === 'object'?it !== null:typeof it === 'function';}; /***/}, /* 57 */function(module,exports,__webpack_require__){var isObject=__webpack_require__(56);module.exports = function(it){if(!isObject(it))throw TypeError(it + ' is not an object!');return it;}; /***/}, /* 58 */function(module,exports){"use strict";exports["default"] = function(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}};exports.__esModule = true; /***/}, /* 59 */function(module,exports,__webpack_require__){'use strict';var _inherits=__webpack_require__(49)['default'];var _classCallCheck=__webpack_require__(58)['default'];var React=__webpack_require__(18);var ReactDOM=__webpack_require__(19);var ExcelColumn=__webpack_require__(36);var keyboardHandlerMixin=__webpack_require__(47);var EditorBase=(function(_React$Component){_inherits(EditorBase,_React$Component);function EditorBase(){_classCallCheck(this,EditorBase);_React$Component.apply(this,arguments);}EditorBase.prototype.getStyle = function getStyle(){return {width:'100%'};};EditorBase.prototype.getValue = function getValue(){var updated={};updated[this.props.column.key] = this.getInputNode().value;return updated;};EditorBase.prototype.getInputNode = function getInputNode(){var domNode=ReactDOM.findDOMNode(this);if(domNode.tagName === 'INPUT'){return domNode;}else {return domNode.querySelector('input:not([type=hidden])');}};EditorBase.prototype.focus = function focus(){var inputNode=this.getInputNode();if(typeof inputNode.focus === 'function')inputNode.focus();};EditorBase.prototype.inheritContainerStyles = function inheritContainerStyles(){return true;};return EditorBase;})(React.Component);EditorBase.propTypes = {onKeyDown:React.PropTypes.func.isRequired,value:React.PropTypes.any.isRequired,onBlur:React.PropTypes.func.isRequired,column:React.PropTypes.shape(ExcelColumn).isRequired,commit:React.PropTypes.func.isRequired};module.exports = EditorBase; /***/}, /* 60 */function(module,exports){"use strict";var isFunction=function isFunction(functionToCheck){var getType={};return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';};module.exports = isFunction; /***/}, /* 61 */function(module,exports,__webpack_require__){'use strict';var PropTypes=__webpack_require__(18).PropTypes;module.exports = {selected:PropTypes.object.isRequired,copied:PropTypes.object,dragged:PropTypes.object,onCellClick:PropTypes.func.isRequired}; /***/}, /* 62 */function(module,exports,__webpack_require__){ /* TODO mixins */'use strict';var React=__webpack_require__(18);var ReactDOM=__webpack_require__(19);var DOMMetrics=__webpack_require__(63);var min=Math.min;var max=Math.max;var floor=Math.floor;var ceil=Math.ceil;module.exports = {mixins:[DOMMetrics.MetricsMixin],DOMMetrics:{viewportHeight:function viewportHeight(){return ReactDOM.findDOMNode(this).offsetHeight;}},propTypes:{rowHeight:React.PropTypes.number,rowsCount:React.PropTypes.number.isRequired},getDefaultProps:function getDefaultProps(){return {rowHeight:30};},getInitialState:function getInitialState(){return this.getGridState(this.props);},getGridState:function getGridState(props){var renderedRowsCount=ceil((props.minHeight - props.rowHeight) / props.rowHeight);var totalRowCount=min(renderedRowsCount * 2,props.rowsCount);return {displayStart:0,displayEnd:totalRowCount,height:props.minHeight,scrollTop:0,scrollLeft:0};},updateScroll:function updateScroll(scrollTop,scrollLeft,height,rowHeight,length){var renderedRowsCount=ceil(height / rowHeight);var visibleStart=floor(scrollTop / rowHeight);var visibleEnd=min(visibleStart + renderedRowsCount,length);var displayStart=max(0,visibleStart - renderedRowsCount * 2);var displayEnd=min(visibleStart + renderedRowsCount * 2,length);var nextScrollState={visibleStart:visibleStart,visibleEnd:visibleEnd,displayStart:displayStart,displayEnd:displayEnd,height:height,scrollTop:scrollTop,scrollLeft:scrollLeft};this.setState(nextScrollState);},metricsUpdated:function metricsUpdated(){var height=this.DOMMetrics.viewportHeight();if(height){this.updateScroll(this.state.scrollTop,this.state.scrollLeft,height,this.props.rowHeight,this.props.rowsCount);}},componentWillReceiveProps:function componentWillReceiveProps(nextProps){if(this.props.rowHeight !== nextProps.rowHeight || this.props.minHeight !== nextProps.minHeight){this.setState(this.getGridState(nextProps));}else if(this.props.rowsCount !== nextProps.rowsCount){this.updateScroll(this.state.scrollTop,this.state.scrollLeft,this.state.height,nextProps.rowHeight,nextProps.rowsCount);}}}; /***/}, /* 63 */function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(18);var emptyFunction=__webpack_require__(39);var shallowCloneObject=__webpack_require__(28);var contextTypes={metricsComputator:React.PropTypes.object};var MetricsComputatorMixin={childContextTypes:contextTypes,getChildContext:function getChildContext(){return {metricsComputator:this};},getMetricImpl:function getMetricImpl(name){return this._DOMMetrics.metrics[name].value;},registerMetricsImpl:function registerMetricsImpl(component,metrics){var getters={};var s=this._DOMMetrics;for(var name in metrics) {if(s.metrics[name] !== undefined){throw new Error('DOM metric ' + name + ' is already defined');}s.metrics[name] = {component:component,computator:metrics[name].bind(component)};getters[name] = this.getMetricImpl.bind(null,name);}if(s.components.indexOf(component) === -1){s.components.push(component);}return getters;},unregisterMetricsFor:function unregisterMetricsFor(component){var s=this._DOMMetrics;var idx=s.components.indexOf(component);if(idx > -1){s.components.splice(idx,1);var name;var metricsToDelete={};for(name in s.metrics) {if(s.metrics[name].component === component){metricsToDelete[name] = true;}}for(name in metricsToDelete) {delete s.metrics[name];}}},updateMetrics:function updateMetrics(){var s=this._DOMMetrics;var needUpdate=false;for(var name in s.metrics) {var newMetric=s.metrics[name].computator();if(newMetric !== s.metrics[name].value){needUpdate = true;}s.metrics[name].value = newMetric;}if(needUpdate){for(var i=0,len=s.components.length;i < len;i++) {if(s.components[i].metricsUpdated){s.components[i].metricsUpdated();}}}},componentWillMount:function componentWillMount(){this._DOMMetrics = {metrics:{},components:[]};},componentDidMount:function componentDidMount(){if(window.addEventListener){window.addEventListener('resize',this.updateMetrics);}else {window.attachEvent('resize',this.updateMetrics);}this.updateMetrics();},componentWillUnmount:function componentWillUnmount(){window.removeEventListener('resize',this.updateMetrics);}};var MetricsMixin={contextTypes:contextTypes,componentWillMount:function componentWillMount(){if(this.DOMMetrics){this._DOMMetricsDefs = shallowCloneObject(this.DOMMetrics);this.DOMMetrics = {};for(var name in this._DOMMetricsDefs) {this.DOMMetrics[name] = emptyFunction;}}},componentDidMount:function componentDidMount(){if(this.DOMMetrics){this.DOMMetrics = this.registerMetrics(this._DOMMetricsDefs);}},componentWillUnmount:function componentWillUnmount(){if(!this.registerMetricsImpl){return this.context.metricsComputator.unregisterMetricsFor(this);}if(this.hasOwnProperty('DOMMetrics')){delete this.DOMMetrics;}},registerMetrics:function registerMetrics(metrics){if(this.registerMetricsImpl){return this.registerMetricsImpl(this,metrics);}else {return this.context.metricsComputator.registerMetricsImpl(this,metrics);}},getMetric:function getMetric(name){if(this.getMetricImpl){return this.getMetricImpl(name);}else {return this.context.metricsComputator.getMetricImpl(name);}}};module.exports = {MetricsComputatorMixin:MetricsComputatorMixin,MetricsMixin:MetricsMixin}; /***/}, /* 64 */function(module,exports){ /* TODO mixins */"use strict";module.exports = {componentDidMount:function componentDidMount(){this._scrollLeft = this.refs.viewport.getScroll().scrollLeft;this._onScroll();},componentDidUpdate:function componentDidUpdate(){this._onScroll();},componentWillMount:function componentWillMount(){this._scrollLeft = undefined;},componentWillUnmount:function componentWillUnmount(){this._scrollLeft = undefined;},onScroll:function onScroll(props){if(this._scrollLeft !== props.scrollLeft){this._scrollLeft = props.scrollLeft;this._onScroll();}},_onScroll:function _onScroll(){if(this._scrollLeft !== undefined){this.refs.header.setScrollLeft(this._scrollLeft);this.refs.viewport.setScrollLeft(this._scrollLeft);}}}; /***/}, /* 65 */function(module,exports,__webpack_require__){ /**
		 * @jsx React.DOM
		 */'use strict';var React=__webpack_require__(18);var CheckboxEditor=React.createClass({displayName:'CheckboxEditor',PropTypes:{value:React.PropTypes.bool.isRequired,rowIdx:React.PropTypes.number.isRequired,column:React.PropTypes.shape({key:React.PropTypes.string.isRequired,onCellChange:React.PropTypes.func.isRequired}).isRequired},render:function render(){var checked=this.props.value != null?this.props.value:false;return React.createElement('input',{className:'react-grid-CheckBox',type:'checkbox',checked:checked,onClick:this.handleChange});},handleChange:function handleChange(e){this.props.column.onCellChange(this.props.rowIdx,this.props.column.key,e);}});module.exports = CheckboxEditor; /***/}, /* 66 */function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(18);var ExcelColumn=__webpack_require__(36);var FilterableHeaderCell=React.createClass({displayName:'FilterableHeaderCell',propTypes:{onChange:React.PropTypes.func.isRequired,column:React.PropTypes.shape(ExcelColumn).isRequired},getInitialState:function getInitialState(){return {filterTerm:''};},handleChange:function handleChange(e){var val=e.target.value;this.setState({filterTerm:val});this.props.onChange({filterTerm:val,columnKey:this.props.column.key});},render:function render(){return React.createElement('div',null,React.createElement('div',{className:'form-group'},this.renderInput()));},renderInput:function renderInput(){if(this.props.column.filterable === false){return React.createElement('span',null);}else {var input_key='header-filter-' + this.props.column.key;return React.createElement('input',{key:input_key,type:'text',className:'form-control input-sm',placeholder:'Search',value:this.state.filterTerm,onChange:this.handleChange});}}});module.exports = FilterableHeaderCell; /***/}, /* 67 */function(module,exports,__webpack_require__){ /* TODO mixins */'use strict';var _classCallCheck=__webpack_require__(58)['default'];var ColumnMetrics=__webpack_require__(29);var DOMMetrics=__webpack_require__(63);var PropTypes=__webpack_require__(18).PropTypes;var ColumnUtils=__webpack_require__(31);var ReactDOM=__webpack_require__(19);var Column=function Column(){_classCallCheck(this,Column);};module.exports = {mixins:[DOMMetrics.MetricsMixin],propTypes:{columns:PropTypes.arrayOf(Column),minColumnWidth:PropTypes.number,columnEquality:PropTypes.func},DOMMetrics:{gridWidth:function gridWidth(){return ReactDOM.findDOMNode(this).parentElement.offsetWidth;}},getDefaultProps:function getDefaultProps(){return {minColumnWidth:80,columnEquality:ColumnMetrics.sameColumn};},componentWillMount:function componentWillMount(){this._mounted = true;},componentWillReceiveProps:function componentWillReceiveProps(nextProps){if(nextProps.columns){if(!ColumnMetrics.sameColumns(this.props.columns,nextProps.columns,this.props.columnEquality)){var columnMetrics=this.createColumnMetrics(nextProps);this.setState({columnMetrics:columnMetrics});}}},getTotalWidth:function getTotalWidth(){var totalWidth=0; // avoid the warning about checking in render
	if(this._mounted){totalWidth = this.DOMMetrics.gridWidth();}else {totalWidth = ColumnUtils.getSize(this.props.columns) * this.props.minColumnWidth;}return totalWidth;},getColumnMetricsType:function getColumnMetricsType(metrics){var totalWidth=this.getTotalWidth();var currentMetrics={columns:metrics.columns,totalWidth:totalWidth,minColumnWidth:metrics.minColumnWidth};var updatedMetrics=ColumnMetrics.recalculate(currentMetrics);return updatedMetrics;},getColumn:function getColumn(idx){var columns=this.state.columnMetrics.columns;if(Array.isArray(columns)){return columns[idx];}else if(typeof Immutable !== 'undefined'){return columns.get(idx);}},getSize:function getSize(){var columns=this.state.columnMetrics.columns;if(Array.isArray(columns)){return columns.length;}else if(typeof Immutable !== 'undefined'){return columns.size;}},metricsUpdated:function metricsUpdated(){var columnMetrics=this.createColumnMetrics();this.setState({columnMetrics:columnMetrics});},createColumnMetrics:function createColumnMetrics(){var props=arguments.length <= 0 || arguments[0] === undefined?this.props:arguments[0];var gridColumns=this.setupGridColumns(props);return this.getColumnMetricsType({columns:gridColumns,minColumnWidth:this.props.minColumnWidth});},onColumnResize:function onColumnResize(index,width){var columnMetrics=ColumnMetrics.resizeColumn(this.state.columnMetrics,index,width);this.setState({columnMetrics:columnMetrics});}}; /***/}, /* 68 */function(module,exports){'use strict';var RowUtils={get:function get(row,property){if(typeof row.get === 'function'){return row.get(property);}else {return row[property];}}};module.exports = RowUtils; /***/}, /* 69 */function(module,exports,__webpack_require__){'use strict';var Editors={AutoComplete:__webpack_require__(70),DropDownEditor:__webpack_require__(72),SimpleTextEditor:__webpack_require__(48),CheckboxEditor:__webpack_require__(65)};module.exports = Editors; /***/}, /* 70 */function(module,exports,__webpack_require__){ /* Flow issues:
		overrides? getDefaultValue, getStyle, onKeyDown
		*/ /**
		 * @jsx React.DOM
		 */'use strict';var React=__webpack_require__(18);var ReactDOM=__webpack_require__(19);var ReactAutocomplete=__webpack_require__(71);var ExcelColumn=__webpack_require__(36);var optionPropType=React.PropTypes.shape({id:React.PropTypes.required,title:React.PropTypes.string});var AutoCompleteEditor=React.createClass({displayName:'AutoCompleteEditor',propTypes:{onCommit:React.PropTypes.func.isRequired,options:React.PropTypes.arrayOf(optionPropType).isRequired,label:React.PropTypes.string,value:React.PropTypes.any.isRequired,valueParams:React.PropTypes.arrayOf(React.PropTypes.string),column:React.PropTypes.shape(ExcelColumn).isRequired,resultIdentifier:React.PropTypes.string,search:React.PropTypes.string},getDefaultProps:function getDefaultProps(){return {resultIdentifier:'id'};},getValue:function getValue(){var value,updated={};if(this.hasResults() && this.isFocusedOnSuggestion()){value = this.getLabel(this.refs.autoComplete.state.focusedValue);if(this.props.valueParams){value = this.constuctValueFromParams(this.refs.autoComplete.state.focusedValue,this.props.valueParams);}}else {value = this.refs.autoComplete.state.searchTerm;}updated[this.props.column.key] = value;return updated;},getInputNode:function getInputNode(){return ReactDOM.findDOMNode(this).getElementsByTagName('input')[0];},render:function render(){var label=this.props.label != null?this.props.label:'title';return React.createElement('div',{height:this.props.height,onKeyDown:this.props.onKeyDown},React.createElement(ReactAutocomplete,{search:this.props.search,ref:'autoComplete',label:label,onChange:this.handleChange,resultIdentifier:this.props.resultIdentifier,options:this.props.options,value:{title:this.props.value}}));},handleChange:function handleChange(){this.props.onCommit();},hasResults:function hasResults(){return this.refs.autoComplete.state.results.length > 0;},isFocusedOnSuggestion:function isFocusedOnSuggestion(){var autoComplete=this.refs.autoComplete;return autoComplete.state.focusedValue != null;},getLabel:function getLabel(item){var label=this.props.label != null?this.props.label:'title';if(typeof label === 'function'){return label(item);}else if(typeof label === 'string'){return item[label];}},constuctValueFromParams:function constuctValueFromParams(obj,props){if(!props){return '';}var ret=[];for(var i=0,ii=props.length;i < ii;i++) {ret.push(obj[props[i]]);}return ret.join('|');}});module.exports = AutoCompleteEditor; /***/}, /* 71 */function(module,exports,__webpack_require__){(function webpackUniversalModuleDefinition(root,factory){if(true)module.exports = factory(__webpack_require__(18));else if(typeof define === 'function' && define.amd)define(["react"],factory);else if(typeof exports === 'object')exports["ReactAutocomplete"] = factory(require("react"));else root["ReactAutocomplete"] = factory(root["React"]);})(this,function(__WEBPACK_EXTERNAL_MODULE_1__){return  (/******/(function(modules){ // webpackBootstrap
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
	/******/return __webpack_require__(0); /******/})( /************************************************************************/ /******/[ /* 0 */function(module,exports,__webpack_require__){ /**
			 * @jsx React.DOM
			 */"use strict";var React=__webpack_require__(1);var joinClasses=__webpack_require__(2);var Autocomplete=React.createClass({displayName:"Autocomplete",propTypes:{options:React.PropTypes.any,search:React.PropTypes.func,resultRenderer:React.PropTypes.oneOfType([React.PropTypes.component,React.PropTypes.func]),value:React.PropTypes.object,onChange:React.PropTypes.func,onError:React.PropTypes.func},getDefaultProps:function getDefaultProps(){return {search:searchArray};},getInitialState:function getInitialState(){var searchTerm=this.props.searchTerm?this.props.searchTerm:this.props.value?this.props.value.title:"";return {results:[],showResults:false,showResultsInProgress:false,searchTerm:searchTerm,focusedValue:null};},getResultIdentifier:function getResultIdentifier(result){if(this.props.resultIdentifier === undefined){return result.id;}else {return result[this.props.resultIdentifier];}},render:function render(){var className=joinClasses(this.props.className,"react-autocomplete-Autocomplete",this.state.showResults?"react-autocomplete-Autocomplete--resultsShown":undefined);var style={position:"relative",outline:"none"};return React.createElement("div",{tabIndex:"1",className:className,onFocus:this.onFocus,onBlur:this.onBlur,style:style},React.createElement("input",{ref:"search",className:"react-autocomplete-Autocomplete__search",style:{width:"100%"},onClick:this.showAllResults,onChange:this.onQueryChange,onFocus:this.showAllResults,onBlur:this.onQueryBlur,onKeyDown:this.onQueryKeyDown,value:this.state.searchTerm}),React.createElement(Results,{className:"react-autocomplete-Autocomplete__results",onSelect:this.onValueChange,onFocus:this.onValueFocus,results:this.state.results,focusedValue:this.state.focusedValue,show:this.state.showResults,renderer:this.props.resultRenderer,label:this.props.label,resultIdentifier:this.props.resultIdentifier}));},componentWillReceiveProps:function componentWillReceiveProps(nextProps){var searchTerm=nextProps.searchTerm?nextProps.searchTerm:nextProps.value?nextProps.value.title:"";this.setState({searchTerm:searchTerm});},componentWillMount:function componentWillMount(){this.blurTimer = null;}, /**
			    * Show results for a search term value.
			    *
			    * This method doesn't update search term value itself.
			    *
			    * @param {Search} searchTerm
			    */showResults:function showResults(searchTerm){this.setState({showResultsInProgress:true});this.props.search(this.props.options,searchTerm.trim(),this.onSearchComplete);},showAllResults:function showAllResults(){if(!this.state.showResultsInProgress && !this.state.showResults){this.showResults("");}},onValueChange:function onValueChange(value){var state={value:value,showResults:false};if(value){state.searchTerm = value.title;}this.setState(state);if(this.props.onChange){this.props.onChange(value);}},onSearchComplete:function onSearchComplete(err,results){if(err){if(this.props.onError){this.props.onError(err);}else {throw err;}}this.setState({showResultsInProgress:false,showResults:true,results:results});},onValueFocus:function onValueFocus(value){this.setState({focusedValue:value});},onQueryChange:function onQueryChange(e){var searchTerm=e.target.value;this.setState({searchTerm:searchTerm,focusedValue:null});this.showResults(searchTerm);},onFocus:function onFocus(){if(this.blurTimer){clearTimeout(this.blurTimer);this.blurTimer = null;}this.refs.search.getDOMNode().focus();},onBlur:function onBlur(){ // wrap in setTimeout so we can catch a click on results
	this.blurTimer = setTimeout((function(){if(this.isMounted()){this.setState({showResults:false});}}).bind(this),100);},onQueryKeyDown:function onQueryKeyDown(e){if(e.key === "Enter"){e.preventDefault();if(this.state.focusedValue){this.onValueChange(this.state.focusedValue);}}else if(e.key === "ArrowUp" && this.state.showResults){e.preventDefault();var prevIdx=Math.max(this.focusedValueIndex() - 1,0);this.setState({focusedValue:this.state.results[prevIdx]});}else if(e.key === "ArrowDown"){e.preventDefault();if(this.state.showResults){var nextIdx=Math.min(this.focusedValueIndex() + (this.state.showResults?1:0),this.state.results.length - 1);this.setState({showResults:true,focusedValue:this.state.results[nextIdx]});}else {this.showAllResults();}}},focusedValueIndex:function focusedValueIndex(){if(!this.state.focusedValue){return -1;}for(var i=0,len=this.state.results.length;i < len;i++) {if(this.getResultIdentifier(this.state.results[i]) === this.getResultIdentifier(this.state.focusedValue)){return i;}}return -1;}});var Results=React.createClass({displayName:"Results",getResultIdentifier:function getResultIdentifier(result){if(this.props.resultIdentifier === undefined){if(!result.id){throw "id property not found on result. You must specify a resultIdentifier and pass as props to autocomplete component";}return result.id;}else {return result[this.props.resultIdentifier];}},render:function render(){var style={display:this.props.show?"block":"none",position:"absolute",listStyleType:"none"};var $__0=this.props,className=$__0.className,props=(function(source,exclusion){var rest={};var hasOwn=Object.prototype.hasOwnProperty;if(source == null){throw new TypeError();}for(var key in source) {if(hasOwn.call(source,key) && !hasOwn.call(exclusion,key)){rest[key] = source[key];}}return rest;})($__0,{className:1});return React.createElement("ul",React.__spread({},props,{style:style,className:className + " react-autocomplete-Results"}),this.props.results.map(this.renderResult));},renderResult:function renderResult(result){var focused=this.props.focusedValue && this.getResultIdentifier(this.props.focusedValue) === this.getResultIdentifier(result);var Renderer=this.props.renderer || Result;return React.createElement(Renderer,{ref:focused?"focused":undefined,key:this.getResultIdentifier(result),result:result,focused:focused,onMouseEnter:this.onMouseEnterResult,onClick:this.props.onSelect,label:this.props.label});},componentDidUpdate:function componentDidUpdate(){this.scrollToFocused();},componentDidMount:function componentDidMount(){this.scrollToFocused();},componentWillMount:function componentWillMount(){this.ignoreFocus = false;},scrollToFocused:function scrollToFocused(){var focused=this.refs && this.refs.focused;if(focused){var containerNode=this.getDOMNode();var scroll=containerNode.scrollTop;var height=containerNode.offsetHeight;var node=focused.getDOMNode();var top=node.offsetTop;var bottom=top + node.offsetHeight; // we update ignoreFocus to true if we change the scroll position so
	// the mouseover event triggered because of that won't have an
	// effect
	if(top < scroll){this.ignoreFocus = true;containerNode.scrollTop = top;}else if(bottom - scroll > height){this.ignoreFocus = true;containerNode.scrollTop = bottom - height;}}},onMouseEnterResult:function onMouseEnterResult(e,result){ // check if we need to prevent the next onFocus event because it was
	// probably caused by a mouseover due to scroll position change
	if(this.ignoreFocus){this.ignoreFocus = false;}else { // we need to make sure focused node is visible
	// for some reason mouse events fire on visible nodes due to
	// box-shadow
	var containerNode=this.getDOMNode();var scroll=containerNode.scrollTop;var height=containerNode.offsetHeight;var node=e.target;var top=node.offsetTop;var bottom=top + node.offsetHeight;if(bottom > scroll && top < scroll + height){this.props.onFocus(result);}}}});var Result=React.createClass({displayName:"Result",getDefaultProps:function getDefaultProps(){return {label:function label(result){return result.title;}};},getLabel:function getLabel(result){if(typeof this.props.label === "function"){return this.props.label(result);}else if(typeof this.props.label === "string"){return result[this.props.label];}},render:function render(){var className=joinClasses({"react-autocomplete-Result":true,"react-autocomplete-Result--active":this.props.focused});return React.createElement("li",{style:{listStyleType:"none"},className:className,onClick:this.onClick,onMouseEnter:this.onMouseEnter},React.createElement("a",null,this.getLabel(this.props.result)));},onClick:function onClick(){this.props.onClick(this.props.result);},onMouseEnter:function onMouseEnter(e){if(this.props.onMouseEnter){this.props.onMouseEnter(e,this.props.result);}},shouldComponentUpdate:function shouldComponentUpdate(nextProps){return nextProps.result.id !== this.props.result.id || nextProps.focused !== this.props.focused;}}); /**
			* Search options using specified search term treating options as an array
			* of candidates.
			*
			* @param {Array.<Object>} options
			* @param {String} searchTerm
			* @param {Callback} cb
			*/function searchArray(options,searchTerm,cb){if(!options){return cb(null,[]);}searchTerm = new RegExp(searchTerm,"i");var results=[];for(var i=0,len=options.length;i < len;i++) {if(searchTerm.exec(options[i].title)){results.push(options[i]);}}cb(null,results);}module.exports = Autocomplete; /***/}, /* 1 */function(module,exports){module.exports = __WEBPACK_EXTERNAL_MODULE_1__; /***/}, /* 2 */function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__; /*!
			  Copyright (c) 2015 Jed Watson.
			  Licensed under the MIT License (MIT), see
			  http://jedwatson.github.io/classnames
			*/function classNames(){var classes='';var arg;for(var i=0;i < arguments.length;i++) {arg = arguments[i];if(!arg){continue;}if('string' === typeof arg || 'number' === typeof arg){classes += ' ' + arg;}else if(Object.prototype.toString.call(arg) === '[object Array]'){classes += ' ' + classNames.apply(null,arg);}else if('object' === typeof arg){for(var key in arg) {if(!arg.hasOwnProperty(key) || !arg[key]){continue;}classes += ' ' + key;}}}return classes.substr(1);} // safely export classNames for node / browserify
	if(typeof module !== 'undefined' && module.exports){module.exports = classNames;} // safely export classNames for RequireJS
	if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [],__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return classNames;}).apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} /***/} /******/]));});; /***/}, /* 72 */function(module,exports,__webpack_require__){'use strict';var _inherits=__webpack_require__(49)['default'];var _classCallCheck=__webpack_require__(58)['default'];var React=__webpack_require__(18);var ReactDOM=__webpack_require__(19);var EditorBase=__webpack_require__(59);var DropDownEditor=(function(_EditorBase){_inherits(DropDownEditor,_EditorBase);function DropDownEditor(){_classCallCheck(this,DropDownEditor);_EditorBase.apply(this,arguments);}DropDownEditor.prototype.getInputNode = function getInputNode(){return ReactDOM.findDOMNode(this);};DropDownEditor.prototype.onClick = function onClick(){this.getInputNode().focus();};DropDownEditor.prototype.onDoubleClick = function onDoubleClick(){this.getInputNode().focus();};DropDownEditor.prototype.render = function render(){return React.createElement('select',{style:this.getStyle(),defaultValue:this.props.value,onBlur:this.props.onBlur,onChange:this.onChange},this.renderOptions());};DropDownEditor.prototype.renderOptions = function renderOptions(){var options=[];this.props.options.forEach(function(name){options.push(React.createElement('option',{key:name,value:name},name));},this);return options;};return DropDownEditor;})(EditorBase);DropDownEditor.propTypes = {options:React.PropTypes.arrayOf(React.PropTypes.string).isRequired};module.exports = DropDownEditor; /***/}, /* 73 */function(module,exports,__webpack_require__){ //not including this
	//it currently requires the whole of moment, which we dont want to take as a dependency
	'use strict';var ImageFormatter=__webpack_require__(74);var Formatters={ImageFormatter:ImageFormatter};module.exports = Formatters; /***/}, /* 74 */function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(18);var PendingPool={};var ReadyPool={};var ImageFormatter=React.createClass({displayName:'ImageFormatter',propTypes:{value:React.PropTypes.string.isRequired},getInitialState:function getInitialState(){return {ready:false};},componentWillMount:function componentWillMount(){this._load(this.props.value);},componentWillReceiveProps:function componentWillReceiveProps(nextProps){if(nextProps.value !== this.props.value){this.setState({value:null});this._load(nextProps.value);}},render:function render(){var style=this.state.value?{backgroundImage:'url(' + this.state.value + ')'}:undefined;return React.createElement('div',{className:'react-grid-image',style:style});},_load:function _load( /*string*/src){if(ReadyPool[src]){this.setState({value:src});return;}if(PendingPool[src]){PendingPool[src].push(this._onLoad);return;}PendingPool[src] = [this._onLoad];var img=new Image();img.onload = function(){PendingPool[src].forEach( /*function*/function(callback){callback(src);});delete PendingPool[src];img.onload = null;src = undefined;};img.src = src;},_onLoad:function _onLoad( /*string*/src){if(this.isMounted() && src === this.props.value){this.setState({value:src});}}});module.exports = ImageFormatter; /***/}, /* 75 */function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(18);var Toolbar=React.createClass({displayName:'Toolbar',propTypes:{onAddRow:React.PropTypes.func,onToggleFilter:React.PropTypes.func.isRequired,enableFilter:React.PropTypes.bool,numberOfRows:React.PropTypes.number.isRequired},onAddRow:function onAddRow(){if(this.props.onAddRow !== null && this.props.onAddRow instanceof Function){this.props.onAddRow({newRowIndex:this.props.numberOfRows});}},getDefaultProps:function getDefaultProps(){return {enableAddRow:true};},renderAddRowButton:function renderAddRowButton(){if(this.props.onAddRow){return React.createElement('button',{type:'button',className:'btn',onClick:this.onAddRow},'Add Row');}},renderToggleFilterButton:function renderToggleFilterButton(){if(this.props.enableFilter){return React.createElement('button',{type:'button',className:'btn',onClick:this.props.onToggleFilter},'Filter Rows');}},render:function render(){return React.createElement('div',{className:'react-grid-Toolbar'},React.createElement('div',{className:'tools'},this.renderAddRowButton(),this.renderToggleFilterButton()));}});module.exports = Toolbar; /***/} /******/]));});; /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/

/***/ },
/* 111 */,
/* 112 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_112__;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @jsx React.DOM
	 */
	'use strict';

	(function () {
	  var React = __webpack_require__(1);
	  var ReactDataGrid = __webpack_require__(110);
	  var Editors = ReactDataGrid.Editors;
	  var Toolbar = ReactDataGrid.Toolbar;
	  var AutoCompleteEditor = Editors.AutoComplete;
	  var DropDownEditor = Editors.DropDownEditor;
	  var joinClasses = __webpack_require__(114);
	  var FakeObjectDataStore = __webpack_require__(115);
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
/* 114 */
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
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var faker = __webpack_require__(112);
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

/***/ }
/******/ ])
});
;