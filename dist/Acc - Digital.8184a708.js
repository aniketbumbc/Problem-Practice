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
})({"IC Practice/Acc - Digital/index.js":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Longest Sequeces of Unique charater
function longSequ(str) {
  var position = 0;
  var uniqueStr = '';
  var currentStr = '';
  var char = '';

  for (var i = 0; i < str.length; i++) {
    char = str[i];
    position = currentStr.indexOf(char);

    if (position !== -1) {
      uniqueStr = currentStr;
      currentStr = currentStr.substr(position + 1);
    }

    currentStr += char;
  }

  if (!uniqueStr.length) {
    uniqueStr = currentStr;
  }

  return uniqueStr;
} //console.log(longSequ('hello there'));

/**
 *  Count unique value in array
 */


function countUniqueValues(arr) {
  var tempObj = {};
  var count = 0;

  var _iterator = _createForOfIteratorHelper(arr),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var value = _step.value;

      if (tempObj[value] === undefined) {
        tempObj[value] = 1;
      } else {
        tempObj[value] += 1;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  for (val in tempObj) {
    if (tempObj[val] === 1) {
      count++;
    }
  }

  console.log(count);
} //countUniqueValues([2, 4, 5, 3, 44, 55, 55, 44]);

/**
 *  Search smaller string in larger string
 *
 */


function searchStr(largStr, smallStr) {
  var tempObj = {};
  var count = 0;
  var findStr = '';
  var longStr = largStr.split(' ');

  var _iterator2 = _createForOfIteratorHelper(longStr),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      str = _step2.value;

      if (tempObj[str] === undefined) {
        tempObj[str] = 1;
      } else {
        tempObj[str] += 1;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  for (temStr in tempObj) {
    if (temStr === smallStr) {
      count = tempObj[temStr];
      findStr = temStr;
    }
  }

  console.log([count, findStr]);
} //searchStr('bunny is going college with bunny college is college', 'is');

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

  if (arr[0] > arr[1]) {
    min = arr[1];
    max = arr[0];
  }

  for (var i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }

  console.log('max =', max, 'min =', min);
} //findMaxMin([1, 2, 3, 4, 5, 6, 3, 6, 0, 120]);

/**
 *  Binary seach
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
  } else {
    return null;
  }
}

console.log(binarySearch([1, 3, 4, 5, 23, 25, 42], 23));
/**
 *  Missing Number in array
 */

function missingNum(arr) {
  var n = arr.length;
  var total = Math.floor((n + 1) * (n + 2) / 2);
  console.log(total);

  for (var i = 0; i < arr.length; i++) {
    total = total - arr[i];
  }

  console.log(total);
} //missingNum([1, 2, 4, 5, 6]);

/**
 *  reverse string
 */


function reves(str) {
  var rev = '';

  var _iterator3 = _createForOfIteratorHelper(str),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var char = _step3.value;
      rev = char + rev;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  console.log(rev);
} //reves('aniker');

/**
 *  Reverse Number
 */


function reverNo(num) {
  var reves = 0;

  while (num) {
    temp = num % 10;
    reves = reves * 10 + temp;
    num = Math.floor(num / 10);
  }

  console.log(reves);
} //reverNo(234);


function setTimeTest(num) {
  var _loop = function _loop(i) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  };

  for (var i = 0; i <= num; i++) {
    _loop(i);
  }
} //setTimeTest(10);


function setTimeFun(num) {
  for (var i = 0; i < num; i++) {
    (function (i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    })(i);
  }
} // setTimeFun(5);
// Factorial Number


function facto(num) {
  if (num === 1) {
    return 1;
  }

  return facto(num - 1) * num;
} //console.log(facto(4));
//fibonacci Series


function fiboSeries(num) {
  if (num <= 2) {
    return 1;
  }

  return fiboSeries(num - 1) + fiboSeries(num - 2);
} //console.log(fiboSeries(10));

/**
 *  Sort Array
 */


var numberSeries = [1, 3, 4, 5, 6, 6, 20, 121, 3434, 64]; //console.log(numberSeries.sort((a, b) => a - b));
//console.log(numberSeries.sort((a, b) => b - a));

var getData = new Promise(function (reslove, reject) {
  var temp = false;

  if (temp) {
    reslove('Hello Promoise Reslove');
  } else {
    reject('No.. Reject Promise');
  }
}).then(function (result) {
  return console.log(result);
}).catch(function (err) {
  return console.log(err);
});

function curr(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
} //console.log(curr(23)(40)(50));
//IIFE


var getInfo = 'This is information';

(function getInfo() {
  var getInfo = ' Inside IIFE';
  var numberSeries = [3, 5, 4, 5]; //console.log(numberSeries);
  //console.log(getInfo);
})();

var student = {
  name: 'Bunny',
  class: 'Internet-things',
  address: {
    city: 'Baltimore',
    country: 'USA'
  }
}; //console.log(student);

var student1 = Object.assign(student, {});
student1.name = 'Mike';
student1.address.city = 'Florida';
var studet2 = JSON.parse(JSON.stringify(student));
studet2.address.city = 'Pune';
studet2.address.country = 'Ind'; //console.log(studet2);
//console.log('student ', student);

Array.prototype.display = function () {
  //   let newArry = this;
  console.log(this);
}; //[33, 54, 232, 545].display();
//Prime Number


function checkPrime(num) {
  var isPrime = true;

  if (num <= 2) {
    return isPrime;
  }

  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
} //console.log(checkPrime(12));


function fizzBuzz(num) {
  Array.from(new Array(num), function (ele, index) {
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
} // fizzBuzz(30);


function fizzBuz(num) {
  Array.from(new Array(num), function (value, index) {
    index++;

    if (index % 5 === 0 || index % 3 === 0) {
      if (index % 5 === 0) return 'fizz';
      if (index % 3 === 0) return 'buzz';
      return 'fizzbuzz';
    }

    return index;
  }).map(function (value) {
    return console.log(value);
  });
} //fizzBuz(30);

/**
 *  Anangram
 */


function checkAnangram(str1, str2) {
  var obj1 = frequencyCheck(str1);
  var obj2 = frequencyCheck(str2);

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (var char in obj1) {
    if (obj1[char] !== obj2[char]) {
      return false;
    }
  }

  return true;
}

function frequencyCheck(str) {
  var temp = {};

  var _iterator4 = _createForOfIteratorHelper(str),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var char = _step4.value;

      if (temp[char] === undefined) {
        temp[char] = 1;
      } else {
        temp[char] += 1;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  return temp;
}

console.log(checkAnangram('lever', 'level'));
var city = {
  name: 'pune',
  country: 'India'
};

function display() {
  for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
    arg[_key] = arguments[_key];
  }

  console.log(this.name, ' ', this.country, arg);
}

display.apply(city, [343, 'ere']);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50003" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","IC Practice/Acc - Digital/index.js"], null)
//# sourceMappingURL=/Acc%20-%20Digital.8184a708.js.map