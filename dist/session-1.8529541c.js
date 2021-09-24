// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"IC Practice/Oviva/session-1.js":[function(require,module,exports) {
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 *  Valid parenthesis
 */
var isValid = function isValid(str) {
  var obj = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  var stack = [];

  var _iterator = _createForOfIteratorHelper(str),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _char = _step.value;

      if (_char.match(/^[0-9a-z]+$/)) {
        str = str.replace(_char, ' ');
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var newStr = str.replaceAll(' ', '');
  console.log(newStr);

  var _iterator2 = _createForOfIteratorHelper(newStr),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _char2 = _step2.value;

      if (obj.hasOwnProperty(_char2)) {
        stack.push(_char2);
      } else {
        var removeChar = stack.pop();

        if (_char2 !== obj[removeChar]) {
          return false;
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return stack.length === 0;
};

var isValidParenthesis = function isValidParenthesis(str) {
  var obj = {
    '{': '}',
    '(': ')',
    '[': ']'
  };
  var stack = [];

  var _iterator3 = _createForOfIteratorHelper(str),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      char = _step3.value;

      if (char.match(/^[0-9a-z]+$/)) {
        str = str.replace(char, ' ');
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  var newStr = str.replaceAll(' ', '');

  var _iterator4 = _createForOfIteratorHelper(newStr),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _char3 = _step4.value;

      if (obj.hasOwnProperty(_char3)) {
        stack.push(_char3);
      } else {
        var removeChar = stack.pop();

        if (_char3 !== obj[removeChar]) {
          return false;
        }
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  return stack.length === 0;
}; // console.log(isValidParenthesis('[()]{}{[()(fgfgfsdfg5454)]()fdfdfd}'));
// console.log(isValidParenthesis('[5a(]'));
//First unique charactor in the string


function uniqueChar(str) {
  var tempObj = {};

  var _iterator5 = _createForOfIteratorHelper(str),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var _char4 = _step5.value;

      if (tempObj[_char4] === undefined) {
        tempObj[_char4] = 1;
      } else {
        tempObj[_char4] += 1;
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  var _iterator6 = _createForOfIteratorHelper(str),
      _step6;

  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var _char5 = _step6.value;

      if (tempObj[_char5] === 1) {
        return [_char5, str.indexOf(_char5)];
      }
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }

  return -1;
} //console.log(uniqueChar('aabb'));
// find second largest element in array


var numArr = [12, 35, 1, 10, 34, 1];

var secondLargeEle = function secondLargeEle() {
  var maxElement = Math.max.apply(Math, _toConsumableArray(numArr));
  numArr = numArr.filter(function (num) {
    return num !== maxElement;
  });
  return Math.max.apply(Math, _toConsumableArray(numArr));
}; //console.log(secondLargeEle());
// reverse string


function revStr(str) {
  var revString = '';

  var _iterator7 = _createForOfIteratorHelper(str),
      _step7;

  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var _char6 = _step7.value;
      revString = _char6 + revString;
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }

  console.log(revString);
}

revStr('aniket'); // reverse number

function reversNum(num) {
  var num2 = 0;
  var reverNum = 0;

  while (num) {
    num2 = num % 10;
    reverNum = reverNum * 10 + num2;
    num = Math.floor(num / 10);
  }

  console.log(reverNum);
}

reversNum(123456); //count number of vowels in string

function countVowels(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;

  var _iterator8 = _createForOfIteratorHelper(str),
      _step8;

  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var _char7 = _step8.value;

      if (vowels.includes(_char7)) {
        count++;
      }
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }

  console.log(count);
} //countVowels('Pneumonoultramicroscopicsilicovolcanoconiosis');
//curring


function curry(a, b) {
  if (b === undefined) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  } else {
    return a + b;
  }
} // console.log(curry(2)(4)(3));
// console.log(curry(10, 34));
// // sort array
// console.log(numArr.sort((a, b) => a - b));
// console.log(numArr.sort((a, b) => b - a));
//factorial number


function facto(num) {
  if (num === 1) {
    return num;
  }

  return num * facto(num - 1);
} //console.log(facto(5));


function printSecond(num) {
  for (var i = 1; i <= num; i++) {
    setTimeout(function () {// console.log(i);
    }, 1000 * i);
  }
} //printSecond(10);
// set Timeout using var


function printSecondV(num) {
  for (var i = 1; i <= num; i++) {
    (function (i) {
      setTimeout(function () {//console.log(i);
      }, 1000 * i);
    })(i);
  }
} // printSecondV(10);


function findMaxMin(arr) {
  var max = 0;
  var min = 0;

  if (arr.length === 1) {
    max = arr[0];
    min = arr[0];
  }

  max = arr[1];
  min = arr[0];

  for (var i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  } //  console.log('max:---', max, 'min:-----', min);

} // findMaxMin([1, 2, 3, 4, 5, 6, 3, 6, -22, 120]);
// Anagram string


function isAnangram(str1, str2) {
  var objStr1 = countChar(str1);
  var objStr2 = countChar(str2);

  if (Object.keys(objStr1).length !== Object.keys(objStr2).length) {
    return false;
  }

  for (var _char8 in objStr1) {
    if (objStr1[_char8] !== objStr2[_char8]) {
      return false;
    }
  }

  return true;
}

function countChar(str) {
  var tempObj = {};

  var _iterator9 = _createForOfIteratorHelper(str),
      _step9;

  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var _char9 = _step9.value;

      if (tempObj[_char9] !== undefined) {
        tempObj[_char9] += 1;
      } else {
        tempObj[_char9] = 1;
      }
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }

  return tempObj;
}

console.log(isAnangram('lvel', 'levlr')); // fibo series

function fiboSeries(num) {
  var num1 = 0;
  var num2 = 1;
  var nextTerm = 0;

  for (var i = 1; i < num; i++) {
    nextTerm = num1 + num2;
    num1 = num2;
    num2 = nextTerm;
  }

  console.log(nextTerm);
} //fiboSeries(12);

/**
 *  Fizz Buzz
 */


function fizzBuzz(num) {
  Array.from(new Array(num), function (value, index) {
    index++;

    if (index % 5 === 0 || index % 3 === 0) {
      if (index % 5 !== 0) return 'Fizz';
      if (index % 3 !== 0) return 'Buzz';
      return 'Fizz Buzz';
    }

    return index;
  }).map(function (value) {
    return console.log(value);
  });
} //fizzBuzz(45);
// find missing number


function findMissNumber(arr) {
  var currentTotal = 0;

  var _iterator10 = _createForOfIteratorHelper(arr),
      _step10;

  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var ele = _step10.value;
      currentTotal += ele;
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }

  var newTotal = Math.floor((arr.length + 1) * (arr.length + 2) / 2);
  return newTotal - currentTotal;
} //console.log(findMissNumber([1, 2, 4, 6, 3, 7, 8]));

/**
 *  Search smaller string in large string
 */


function findStr(longStr, smlStr) {
  var tempObj = {};

  var _iterator11 = _createForOfIteratorHelper(longStr.split(' ')),
      _step11;

  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var _char11 = _step11.value;

      if (tempObj[_char11] !== undefined) {
        tempObj[_char11] += 1;
      } else {
        tempObj[_char11] = 1;
      }
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }

  for (var _char10 in tempObj) {
    if (_char10 === smlStr) {
      return [_char10, tempObj[_char10]];
    }
  }
}

console.log(findStr('bunny is going college with bunny college is college', 'is'));
/**
 *  long sequence unique characters
 */

function longSequ(str) {
  var position = 0;
  var char = '';
  var currentString = '';
  var uniqueString = '';

  for (var i = 0; i < str.length; i++) {
    char = str.charAt(i);
    position = currentString.indexOf(char);

    if (position !== -1) {
      uniqueString = currentString;
      currentString = currentString.substr(position + 1);
    }

    currentString += char;
  }

  if (!uniqueString.length) {
    uniqueString = currentString;
  }

  console.log(uniqueString);
} //longSequ('hello there');
//Prime number


function isPrime(num) {
  var prime = true;

  if (num < 2) {
    return null;
  }

  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      prime = false;
      return prime;
    }
  }

  return prime;
} // for (var i = 0; i < 100; i++) {
//   if (isPrime(i)) console.log(i);
// }
// const isPromise = new Promise((resolve, reject) => {
//   let temp = false;
//   if (temp) {
//     resolve('Yahooo');
//   } else {
//     reject('no Yahoo');
//   }
// });
// isPromise
//   .then((value) => console.log(value))
//   .catch((err) => console.log('err', err));

/**
 *  Map data types
 */


var myMap = new Map();
myMap.set(0, 'bunny');
myMap.set(1, 'Kapil');
myMap.set(2, 'Gaju');
myMap.set(3, 'Omi');
console.log(myMap);

var _iterator12 = _createForOfIteratorHelper(myMap.values()),
    _step12;

try {
  for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {//console.log(value);

    var value = _step12.value;
  }
} catch (err) {
  _iterator12.e(err);
} finally {
  _iterator12.f();
}

myMap.set(10, 'set new bun');

var _iterator13 = _createForOfIteratorHelper(myMap),
    _step13;

try {
  for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
    var _step13$value = _slicedToArray(_step13.value, 2),
        key = _step13$value[0],
        _value = _step13$value[1];

    console.log("".concat(key, " == ").concat(_value));
  }
} catch (err) {
  _iterator13.e(err);
} finally {
  _iterator13.f();
}

console.log(myMap.get(10));
console.log('has', myMap.has(10));
console.log(myMap.size);
var obj = {
  '(': ')',
  '{': '}',
  '[': ']'
};
console.log(Object.entries(obj).length);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51777" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","IC Practice/Oviva/session-1.js"], null)
//# sourceMappingURL=/session-1.8529541c.js.map