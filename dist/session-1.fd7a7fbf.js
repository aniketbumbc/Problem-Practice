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
})({"IC Practice/gerFinal/session-1.js":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//Binary Serarch 1
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

  return null;
} //console.log(binarySearch([1, 3, 4, 5, 23, 25, 42], 12));

/**
 *  Search smaller string in larger string.
 */


function searchStr(longStr, smlStr) {
  var tempObj = {};
  var temLongStr = longStr.split(' ');

  var _iterator = _createForOfIteratorHelper(temLongStr),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _str = _step.value;

      if (tempObj[_str] !== undefined) {
        tempObj[_str] += 1;
      } else {
        tempObj[_str] = 1;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  for (var str in tempObj) {
    if (str === smlStr) {
      return [smlStr, tempObj[smlStr]];
    }
  }
}

console.log(searchStr('bunny is going college with bunny college is college', 'is')); // revers number

function reverNo(number) {
  var result = 0;
  var temp = 0;

  while (number) {
    temp = number % 10;
    result = result * 10 + temp;
    number = Math.floor(number / 10);
  }

  console.log(result);
}

reverNo(0987654321); //reverse string

function revStr(str) {
  var reveString = '';

  var _iterator2 = _createForOfIteratorHelper(str),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var char = _step2.value;
      reveString = char + reveString;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  console.log(reveString);
} //revStr('aniket');

/**
 *  Find Max and Min Number in to array
 */


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
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }

  console.log('max:---', max, 'min:-----', min);
} //findMaxMin([1, 2, 3, 4, 5, 6, 3, 6, -22, 120]);

/**
 * Longest sequence of unique charactors
 */


function longSequeChar(str) {
  var currentStr = '';
  var longSequ = '';
  var char = '';
  var position = 0;

  for (var i = 0; i < str.length; i++) {
    char = str[i];
    position = currentStr.indexOf(char);

    if (position !== -1) {
      longSequ = currentStr;
      currentStr = currentStr.substr(position + 1);
    }

    currentStr += char;
  }

  if (!longSequ.length) {
    longSequ = currentStr;
  }

  console.log(longSequ);
}

longSequeChar('hello there');
/**
 * Count Unique values in array
 */

function uniqueValue(arr) {
  var tempObj = {};
  var count = 0;
  var values = [];

  var _iterator3 = _createForOfIteratorHelper(arr),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var val = _step3.value;

      if (tempObj[val]) {
        tempObj[val] += 1;
      } else {
        tempObj[val] = 1;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  for (var key in tempObj) {
    if (tempObj[key] === 1) {
      count++;
      values.push(key);
    }
  }

  console.log([values, count]);
} //uniqueValue([2, 4, 5, 3, 44, 55, 55, 44]);


function findMaxChar(str) {
  var tempString = str.split('');
  var tempObj = {};
  var maxCount = 0;
  var maxStr = '';

  var _iterator4 = _createForOfIteratorHelper(tempString),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var char = _step4.value;

      if (tempObj[char]) {
        tempObj[char] += 1;
      } else {
        tempObj[char] = 1;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  for (var key in tempObj) {
    if (tempObj[key] > maxCount) {
      maxCount = tempObj[key];
      maxStr = key;
    }
  }

  console.log(maxCount, maxStr);
} //findMaxChar('aniketwillbeingermanyyyyeee');

/*
 * Factorial Number
 */


function facto(num) {
  if (num === 1) {
    return 1;
  }

  return facto(num - 1) * num;
} //console.log(facto(4));
//find missing number in array


function findMissNo(arr) {
  var n = arr.length;
  var sumNnumber = Math.floor((n + 1) * (n + 2) / 2);
  var arrTotal = 0;

  for (var i = 0; i < arr.length; i++) {
    arrTotal += arr[i];
  }

  console.log(sumNnumber - arrTotal);
} // findMissNo([1, 2, 4, 5, 6]);

/**
 * Find vovelws in string
 */


function findVowels(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;

  var _iterator5 = _createForOfIteratorHelper(str),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var char = _step5.value;

      if (vowels.includes(char)) {
        count++;
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  console.log(count);
}

findVowels('euouae');
var getData = new Promise(function (reslove, reject) {
  var result = true;

  if (result) {
    reslove('Here promise ');
  } else {
    reject('No it reject');
  }
}).then(function (value) {
  return console.log(value);
}); //curring

function curry(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

console.log(curry(2)(4)(5));
var student = 'Aniket';

(function display() {
  var student = 'bunny';
  console.log('inside', student);
})();

var numberArr = [34, 35, 64, 23, 1, 7, 8, 5343, 232, 12]; // console.log(numberArr.sort((a, b) => a - b));
// console.log(numberArr.sort((a, b) => b - a));
//fibo series

function fibo(num) {
  var num1 = 0;
  var num2 = 1;
  var num3;

  for (var i = 3; i <= num; i++) {
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
    console.log(num3);
  }
} //fibo(10);


function fibRecursive(num) {
  if (num === 1) {
    return 0;
  }

  if (num === 2) {
    return 1;
  }

  return fibRecursive(num - 1) + fibRecursive(num - 2);
} //console.log(fibRecursive(10));


function sum(x) {
  if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  } else {
    return function (y) {
      return x + y;
    };
  }
}

console.log(sum(2, 3)); // Outputs 5

console.log(sum(2)(3)); // Outputs 5

var d = {};
['zebra', 'horse'].forEach(function (k) {
  d[k] = undefined;
}); //console.log(d);

var x = 21;
var boo = 100;

var girl = function girl() {
  //console.log(boo);
  var x = 20;
  var boo = 1;
}; //girl();


var b = 1;

function outer() {
  var b = 2;

  function inner() {
    b++;
    var b = 300; // console.log(b);
  }

  inner();
}

outer();
var obj = {
  a: 1,
  b: 2,
  c: {
    age: 30
  }
};
var freshObj = JSON.parse(JSON.stringify(obj)); //console.log(freshObj);

obj.c.age = 45; //console.log(freshObj);
//console.log(obj);
// call bind apply

var studentNew = {
  name: 'aniket',
  class: 'IS620'
};
var developer = {
  name: 'Java',
  class: 12
};

function showData() {// console.log(this.name, this.class, arg1);
} //showData.call(studentNew, 'hello');


showData.apply(studentNew, [1, 3, 4, 1]);
var bindTest = showData.bind(developer, [34, 36, 64])(); // bindTest();

function setTime(num) {
  var _loop = function _loop(i) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  };

  for (var i = 0; i <= num; i++) {
    _loop(i);
  }
} // setTime(5);


function setTimeFun(num) {
  for (var i = 0; i <= num; i++) {
    (function (i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    })(i);
  }
} //setTimeFun(8);


function fizzBuzz(num) {
  Array.from(new Array(num), function (ele, index) {
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
} //fizzBuzz(30);


var animal = {};
var dog = {
  name: 'buuny'
};
var cat = {
  name: 'yahiii'
}; // animal[dog] = { ...dog, name: 'mike' };
// animal[cat] = { ...cat, name: 'sata' };

animal[dog] = 'doggi';
animal[cat] = 'stat';
console.log(animal);

function cb() {
  setTimeout(function () {
    console.log('Hello from callback ');
  }, 2000);
}

function callCB(cb) {
  console.log('enter into callCb');
  cb();
}

callCB(cb);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61576" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","IC Practice/gerFinal/session-1.js"], null)
//# sourceMappingURL=/session-1.fd7a7fbf.js.map