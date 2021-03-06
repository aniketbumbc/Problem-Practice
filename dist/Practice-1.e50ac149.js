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
        var currentRequire =
          typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
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
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
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
})(
  {
    'IC Practice/JP Practice/Practice-1.js': [
      function (require, module, exports) {
        function _createForOfIteratorHelper(o, allowArrayLike) {
          var it =
            (typeof Symbol !== 'undefined' && o[Symbol.iterator]) ||
            o['@@iterator'];
          if (!it) {
            if (
              Array.isArray(o) ||
              (it = _unsupportedIterableToArray(o)) ||
              (allowArrayLike && o && typeof o.length === 'number')
            ) {
              if (it) o = it;
              var i = 0;
              var F = function F() {};
              return {
                s: F,
                n: function n() {
                  if (i >= o.length) return { done: true };
                  return { done: false, value: o[i++] };
                },
                e: function e(_e) {
                  throw _e;
                },
                f: F,
              };
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }
          var normalCompletion = true,
            didErr = false,
            err;
          return {
            s: function s() {
              it = it.call(o);
            },
            n: function n() {
              var step = it.next();
              normalCompletion = step.done;
              return step;
            },
            e: function e(_e2) {
              didErr = true;
              err = _e2;
            },
            f: function f() {
              try {
                if (!normalCompletion && it.return != null) it.return();
              } finally {
                if (didErr) throw err;
              }
            },
          };
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === 'Object' && o.constructor) n = o.constructor.name;
          if (n === 'Map' || n === 'Set') return Array.from(o);
          if (
            n === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        /**
         *  Reverse String
         */
        function reversString(str) {
          var revers = '';

          var _iterator = _createForOfIteratorHelper(str),
            _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var char = _step.value;
              revers = char + revers;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return revers; //  return str.split('').reverse().join();
        } // console.log(reversString('Aniket'));

        /**
         * Reverse Number
         */

        function revNumber(number) {
          var result = 0;
          var digit = 0;

          while (number) {
            digit = number % 10;
            result = result * 10 + digit;
            number = (number / 10) | 0;
          }

          return result;
        } // console.log(revNumber(1234));

        /**
         *  Palindrome
         */

        function checkPalindrome(str) {
          str = str.toLowerCase();
          var revs = '';

          var _iterator2 = _createForOfIteratorHelper(str),
            _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var char = _step2.value;
              revs = char + revs;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          if (revs === str) {
            return true;
          }

          return false;
        } // console.log(checkPalindrome('Kayak'));

        /**
         *  Find Vowels in string
         */

        function findVowel(str) {
          var vowels = ['a', 'e', 'i', 'o', 'u'];
          var count = 0;

          var _iterator3 = _createForOfIteratorHelper(str),
            _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var char = _step3.value;

              if (vowels.includes(char)) {
                count++;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          return count;
        } // console.log(findVowel('configured'));

        /**
         *  Find Max charater in string
         */

        function findMaxChar(str) {
          var charObj = {};
          var maxCount = 0;
          var maxChar = '';

          var _iterator4 = _createForOfIteratorHelper(str),
            _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              var _char = _step4.value;

              if (charObj[_char] === undefined) {
                charObj[_char] = 1;
              } else {
                charObj[_char] += 1;
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          for (var char in charObj) {
            if (charObj[char] > maxCount) {
              maxCount = charObj[char];
              maxChar = char;
            }

            return [maxCount, maxChar];
          }
        } // console.log(findMaxChar('ccccbbaa'));

        /**
         *  Anangram find anangram in two words
         */

        function findAnagram(str1, str2) {
          var objStr1 = countFreq(str1);
          var objStr2 = countFreq(str2);

          if (Object.keys(objStr1).length !== Object.keys(objStr2).length) {
            return false;
          }

          for (var char in objStr1) {
            if (objStr1[char] !== objStr2[char]) {
              return false;
            }
          }

          return true;
        }

        function countFreq(str) {
          var objChar = {};

          var _iterator5 = _createForOfIteratorHelper(str),
            _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
              var char = _step5.value;

              if (objChar[char] === undefined) {
                objChar[char] = 1;
              } else {
                objChar[char] += 1;
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          return objChar;
        } // console.log(findAnagram('elbow', 'below'));

        /**
         *  Prime Number
         */

        function isPrime(num) {
          var isPrime = true;

          for (var i = 2; i < num; i++) {
            if (num % i === 0) {
              isPrime = false;
              break;
            }
          }

          return isPrime;
        } // console.log(isPrime(7));

        /**
         * Fibo series
         */

        function fiboSeries(num) {
          var n1 = 0;
          var n2 = 1;
          var nextTerm = 0;

          for (var i = 0; i <= num; i++) {
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
          }

          return nextTerm;
        } // console.log(fiboSeries(3));

        /**
         * Fizz Buzz
         *
         */

        function fizzBuzz(num) {
          for (var i = 1; i <= num; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
              console.log('FizzzBuzz');
            } else if (i % 5 === 0) {
              console.log('Buzzzz');
            } else if (i % 3 === 0) {
              console.log('Fizzzz');
            } else {
              console.log(i);
            }
          }
        } // console.log(fizzBuzz(30));

        /**
         * Factorial
         */

        function facto(num) {
          if (num === 1) {
            return 1;
          }

          return num * facto(num - 1);
        }

        console.log(facto(5));
      },
      {},
    ],
    'node_modules/parcel-bundler/src/builtins/hmr-runtime.js': [
      function (require, module, exports) {
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
            },
          };
          module.bundle.hotData = null;
        }

        module.bundle.Module = Module;
        var checkedAssets, assetsToAccept;
        var parent = module.bundle.parent;

        if (
          (!parent || !parent.isParcelRequire) &&
          typeof WebSocket !== 'undefined'
        ) {
          var hostname = '' || location.hostname;
          var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
          var ws = new WebSocket(
            protocol + '://' + hostname + ':' + '49637' + '/'
          );

          ws.onmessage = function (event) {
            checkedAssets = {};
            assetsToAccept = [];
            var data = JSON.parse(event.data);

            if (data.type === 'update') {
              var handled = false;
              data.assets.forEach(function (asset) {
                if (!asset.isNew) {
                  var didAccept = hmrAcceptCheck(
                    global.parcelRequire,
                    asset.id
                  );

                  if (didAccept) {
                    handled = true;
                  }
                }
              }); // Enable HMR for CSS by default.

              handled =
                handled ||
                data.assets.every(function (asset) {
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
              console.log('[parcel] ??? Error resolved');
              removeErrorOverlay();
            }

            if (data.type === 'error') {
              console.error(
                '[parcel] ????  ' + data.error.message + '\n' + data.error.stack
              );
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
          overlay.innerHTML =
            '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' +
            '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' +
            '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' +
            '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' +
            message.innerHTML +
            '</div>' +
            '<pre>' +
            stackTrace.innerHTML +
            '</pre>' +
            '</div>';
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

              if (
                dep === id ||
                (Array.isArray(dep) && dep[dep.length - 1] === id)
              ) {
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
            var fn = new Function(
              'require',
              'module',
              'exports',
              asset.generated.js
            );
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
      },
      {},
    ],
  },
  {},
  [
    'node_modules/parcel-bundler/src/builtins/hmr-runtime.js',
    'IC Practice/JP Practice/Practice-1.js',
  ],
  null
);
//# sourceMappingURL=/Practice-1.e50ac149.js.map
