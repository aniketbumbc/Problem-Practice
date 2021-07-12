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
})({"IC Practice/Publicis Sapient/index.js":[function(require,module,exports) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 *   Count Unique Value In Array
 */
function countUniqueValues(arr) {
  var obj = {};
  var uniqueArr = [];
  arr.forEach(function (ele) {
    if (obj[ele] === undefined) {
      obj[ele] = 1;
    } else {
      obj[ele] += 1;
    }
  });

  for (key in obj) {
    if (obj[key] === 1) {
      uniqueArr.push(key);
    }
  }

  return uniqueArr.length;
}

var result = countUniqueValues([1, 3, 4, 5, 2, 3, 2, 55, 33, 55, 35]); // console.log(result);

/**
 *   Find max and min number into arry
 */

function findMaxMin(arr) {
  var max = 0;
  var min = 0;

  if (arr[0] > arr[1]) {
    max = arr[1];
    min = arr[0];
  }

  for (var j = 2; j <= arr.length; j++) {
    if (arr[j] > max) {
      max = arr[j];
    }

    if (arr[j] < min) {
      min = arr[j];
    }
  }

  console.log('min = ', min, 'max = ', max);
} // findMaxMin([200, 191, 112, -11, 330, 60]);

/**
 *  count pattern matching in longer string
 */


function patternMatch(longStr, shortStr) {
  var count = 0;

  for (var i = 0; i < longStr.length; i++) {
    for (var j = 0; j < shortStr.length; j++) {
      if (shortStr[j] !== longStr[i + j]) {
        break;
      }

      if (j === shortStr.length) {
        count++;
      }
    }
  }

  return count;
}

console.log(patternMatch('bunny is going college with bunny', 'bunny'));
/**
 *  binary search
 */

function binarySearch(arr, searchValue) {
  var start = 0;
  var end = arr.length - 1;
  var mid = Math.floor((start + end) / 2);

  while (arr[mid] !== searchValue && start <= end) {
    if (searchValue < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }

    mid = Math.floor((start + end) / 2);
  }

  if (arr[mid] === searchValue) {
    return mid;
  }

  return -1;
}

console.log(binarySearch([1, 3, 4, 5, 23, 25, 42], 5));
/**
 * Longest sequence of unique character
 */

function uniqueStr(str) {
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
  } // console.log(uniqueString);

} // uniqueStr('hello there');

/**
 *  Reverse String
 */


function reverseStr(str) {
  var revs = '';

  var _iterator = _createForOfIteratorHelper(str),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      char = _step.value;
      revs = char + revs;
    } // console.log(revs);

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
} // reverseStr('hello');


function reverSimple(str) {
  return str.split('').reverse().join('');
} // console.log(reverSimple('bunny'));

/**
 *  Reverse Number
 */


function revesNumber(num) {
  var result = 0;
  var temp = 0;

  while (num !== 0) {
    temp = num % 10;
    result = result * 10 + temp;
    num = Math.floor(num / 10);
  } // console.log(result);

} // revesNumber(4563);

/**
 *  Max character in string
 */


function findMaxChar(str) {
  str = str.toLowerCase();
  var obj = {};
  var maxChar = '';
  var maxCount = 0;

  var _iterator2 = _createForOfIteratorHelper(str),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      char = _step2.value;

      if (obj[char] === undefined) {
        obj[char] = 1;
      } else {
        obj[char] += 1;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  for (char in obj) {
    if (obj[char] > maxCount) {
      maxCount = obj[char];
      maxChar = char;
    }
  }

  console.log(maxCount, maxChar);
} // findMaxChar('Uncommited Msg');

/**
 *  Set Timout
 *
 */


function testSetTimeout(num) {
  var _loop = function _loop(i) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  };

  for (var i = 1; i <= num; i++) {
    _loop(i);
  }
} //testSetTimeout(10);


function testSetTimeoutFun(num) {
  for (var i = 1; i <= num; i++) {
    (function (i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    })(i);
  }
} // testSetTimeoutFun(10);

/**
 * Curring
 */


function curr(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a * b * c * d;
      };
    };
  };
} // let valueCurry = curr(2)(4)(5)(4);
// console.log(valueCurry);


function arrCurr(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a * b * c * d;
      };
    };
  };
}

var valueCurry = arrCurr(2)(8)(2)(4); // console.log(valueCurry);
//clourse

var global = 55;

function outer() {
  var abc = '34';

  function inner() {
    var kbc = '44';
    console.log(abc, kbc, global);
  }

  inner();
} // outer();
// factorial


function facto(num) {
  if (num === 1) {
    return 1;
  }

  return num * facto(num - 1);
} // console.log(facto(6));


function checkPrime(num) {
  var isPrime = true;

  if (num === 1) {
    return null;
  }

  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  console.log(isPrime);
} // checkPrime(3);
// checkPrime(30);
// checkPrime(17);
// checkPrime(35);
// sort arry


var number = [2, 4, 6, 7, 3, 1, 100, 34, 4343]; // console.log(number.sort((a, b) => a - b));
// console.log(number.sort((a, b) => b - a));
// fiz buzz

function fizzBuzz() {
  Array.from(new Array(45), function (value, index) {
    index++;

    if (index % 5 === 0 || index % 3 === 0) {
      if (index % 5 !== 0) return 'Fizz';
      if (index % 3 !== 0) return 'Buzz';
      return 'FizzBuzz';
    }

    return index;
  }).map(function (value) {
    return console.log(value);
  });
} // fizzBuzz();
// missing number in array


function findMissingNum(arr) {
  var sum = 0;
  var newTotal = Math.floor((arr.length + 1) * (arr.length + 2) / 2);

  var _iterator3 = _createForOfIteratorHelper(arr),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      val = _step3.value;
      sum += val;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return newTotal - sum;
}

var value = findMissingNum([1, 2, 4, 6, 3, 7, 8]);
console.log(value); // anagram find

function checkAnanGram(str1, str2) {
  var obj1 = checkFreq(str1);
  var obj2 = checkFreq(str2);

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }

    return true;
  }
}

function checkFreq(str) {
  var obj = {};

  var _iterator4 = _createForOfIteratorHelper(str),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _char = _step4.value;

      if (obj[_char] === undefined) {
        obj[_char] = 1;
      } else {
        obj[_char] += 1;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  return obj;
}

console.log(checkAnanGram('level', 'levell')); // fibo series

function fiboSeries(num) {
  var fibArray = [0, 1];

  for (var i = 2; i <= num; i++) {
    fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
  }

  return fibArray[fibArray.length - 1];
}

console.log(fiboSeries(8));

function fiboSeriesRec(n) {
  if (n <= 2) {
    return 1;
  }

  return fiboSeriesRec(n - 1) + fiboSeriesRec(n - 2);
}

console.log(fiboSeriesRec(8)); // Promise

var getData = new Promise(function (resolve, reject) {
  var connection = true;

  if (connection) {
    resolve('Yes it resolve now ');
  } else {
    reject('No it reject now');
  }
}).then(function (msg) {
  return console.log(msg);
}).catch(function (err) {
  return console.log(err);
}); //  Callback

function callbackFunction(name) {
  console.log('Hello ' + name);
}

function outerFunction(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
} // outerFunction(callbackFunction);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53178" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","IC Practice/Publicis Sapient/index.js"], null)
//# sourceMappingURL=/Publicis%20Sapient.a2ba88a8.js.map