(function (sttc) {
  var window = this;
  if (window.googletag && googletag.evalScripts) {
    googletag.evalScripts();
  }
  if (window.googletag && googletag._loaded_) return;
  var p,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ba =
      typeof Object.defineProperties == "function"
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    ca = function (a) {
      a = [
        "object" == typeof globalThis && globalThis,
        a,
        "object" == typeof window && window,
        "object" == typeof self && self,
        "object" == typeof global && global,
      ];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
      }
      throw Error("Cannot find global object");
    },
    da = ca(this),
    ea = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
    u = {},
    fa = {},
    v = function (a, b, c) {
      if (!c || a != null) {
        c = fa[b];
        if (c == null) return a[b];
        c = a[c];
        return c !== void 0 ? c : a[b];
      }
    },
    w = function (a, b, c) {
      if (b)
        a: {
          var d = a.split(".");
          a = d.length === 1;
          var e = d[0],
            f;
          !a && e in u ? (f = u) : (f = da);
          for (e = 0; e < d.length - 1; e++) {
            var g = d[e];
            if (!(g in f)) break a;
            f = f[g];
          }
          d = d[d.length - 1];
          c = ea && c === "es6" ? f[d] : null;
          b = b(c);
          b != null &&
            (a
              ? ba(u, d, { configurable: !0, writable: !0, value: b })
              : b !== c &&
                (fa[d] === void 0 &&
                  ((a = (Math.random() * 1e9) >>> 0),
                  (fa[d] = ea ? da.Symbol(d) : "$jscp$" + a + "$" + d)),
                ba(f, fa[d], { configurable: !0, writable: !0, value: b })));
        }
    };
  w(
    "Symbol",
    function (a) {
      if (a) return a;
      var b = function (f, g) {
        this.g = f;
        ba(this, "description", { configurable: !0, writable: !0, value: g });
      };
      b.prototype.toString = function () {
        return this.g;
      };
      var c = "jscomp_symbol_" + ((Math.random() * 1e9) >>> 0) + "_",
        d = 0,
        e = function (f) {
          if (this instanceof e)
            throw new TypeError("Symbol is not a constructor");
          return new b(c + (f || "") + "_" + d++, f);
        };
      return e;
    },
    "es6"
  );
  w(
    "Symbol.iterator",
    function (a) {
      if (a) return a;
      a = (0, u.Symbol)("Symbol.iterator");
      for (
        var b =
            "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
              " "
            ),
          c = 0;
        c < b.length;
        c++
      ) {
        var d = da[b[c]];
        typeof d === "function" &&
          typeof d.prototype[a] != "function" &&
          ba(d.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
              return ha(aa(this));
            },
          });
      }
      return a;
    },
    "es6"
  );
  var ha = function (a) {
      a = { next: a };
      a[v(u.Symbol, "iterator")] = function () {
        return this;
      };
      return a;
    },
    ia = function (a) {
      return (a.raw = a);
    },
    x = function (a) {
      var b =
        typeof u.Symbol != "undefined" &&
        v(u.Symbol, "iterator") &&
        a[v(u.Symbol, "iterator")];
      if (b) return b.call(a);
      if (typeof a.length == "number") return { next: aa(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    ja = function (a) {
      if (!(a instanceof Array)) {
        a = x(a);
        for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
        a = c;
      }
      return a;
    },
    ka = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    ma =
      ea && typeof v(Object, "assign") == "function"
        ? v(Object, "assign")
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d) for (var e in d) ka(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  w(
    "Object.assign",
    function (a) {
      return a || ma;
    },
    "es6"
  );
  var na =
      typeof Object.create == "function"
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    oa;
  if (ea && typeof Object.setPrototypeOf == "function")
    oa = Object.setPrototypeOf;
  else {
    var pa;
    a: {
      var qa = { a: !0 },
        ra = {};
      try {
        ra.__proto__ = qa;
        pa = ra.a;
        break a;
      } catch (a) {}
      pa = !1;
    }
    oa = pa
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var sa = oa,
    y = function (a, b) {
      a.prototype = na(b.prototype);
      a.prototype.constructor = a;
      if (sa) sa(a, b);
      else
        for (var c in b)
          if (c != "prototype")
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Ab = b.prototype;
    },
    ta = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c];
      return b;
    };
  w(
    "Array.prototype.find",
    function (a) {
      return a
        ? a
        : function (b, c) {
            a: {
              var d = this;
              d instanceof String && (d = String(d));
              for (var e = d.length, f = 0; f < e; f++) {
                var g = d[f];
                if (b.call(c, g, f, d)) {
                  b = g;
                  break a;
                }
              }
              b = void 0;
            }
            return b;
          };
    },
    "es6"
  );
  w(
    "WeakMap",
    function (a) {
      function b() {}
      function c(g) {
        var h = typeof g;
        return (h === "object" && g !== null) || h === "function";
      }
      if (
        (function () {
          if (!a || !Object.seal) return !1;
          try {
            var g = Object.seal({}),
              h = Object.seal({}),
              k = new a([
                [g, 2],
                [h, 3],
              ]);
            if (k.get(g) != 2 || k.get(h) != 3) return !1;
            k.delete(g);
            k.set(h, 4);
            return !k.has(g) && k.get(h) == 4;
          } catch (l) {
            return !1;
          }
        })()
      )
        return a;
      var d = "$jscomp_hidden_" + Math.random(),
        e = 0,
        f = function (g) {
          this.g = (e += Math.random() + 1).toString();
          if (g) {
            g = x(g);
            for (var h; !(h = g.next()).done; )
              (h = h.value), this.set(h[0], h[1]);
          }
        };
      f.prototype.set = function (g, h) {
        if (!c(g)) throw Error("Invalid WeakMap key");
        if (!ka(g, d)) {
          var k = new b();
          ba(g, d, { value: k });
        }
        if (!ka(g, d)) throw Error("WeakMap key fail: " + g);
        g[d][this.g] = h;
        return this;
      };
      f.prototype.get = function (g) {
        return c(g) && ka(g, d) ? g[d][this.g] : void 0;
      };
      f.prototype.has = function (g) {
        return c(g) && ka(g, d) && ka(g[d], this.g);
      };
      f.prototype.delete = function (g) {
        return c(g) && ka(g, d) && ka(g[d], this.g) ? delete g[d][this.g] : !1;
      };
      return f;
    },
    "es6"
  );
  w(
    "Map",
    function (a) {
      if (
        (function () {
          if (
            !a ||
            typeof a != "function" ||
            !v(a.prototype, "entries") ||
            typeof Object.seal != "function"
          )
            return !1;
          try {
            var h = Object.seal({ x: 4 }),
              k = new a(x([[h, "s"]]));
            if (
              k.get(h) != "s" ||
              k.size != 1 ||
              k.get({ x: 4 }) ||
              k.set({ x: 4 }, "t") != k ||
              k.size != 2
            )
              return !1;
            var l = v(k, "entries").call(k),
              q = l.next();
            if (q.done || q.value[0] != h || q.value[1] != "s") return !1;
            q = l.next();
            return q.done ||
              q.value[0].x != 4 ||
              q.value[1] != "t" ||
              !l.next().done
              ? !1
              : !0;
          } catch (m) {
            return !1;
          }
        })()
      )
        return a;
      var b = new u.WeakMap(),
        c = function (h) {
          this[0] = {};
          this[1] = f();
          this.size = 0;
          if (h) {
            h = x(h);
            for (var k; !(k = h.next()).done; )
              (k = k.value), this.set(k[0], k[1]);
          }
        };
      c.prototype.set = function (h, k) {
        h = h === 0 ? 0 : h;
        var l = d(this, h);
        l.list || (l.list = this[0][l.id] = []);
        l.u
          ? (l.u.value = k)
          : ((l.u = {
              next: this[1],
              H: this[1].H,
              head: this[1],
              key: h,
              value: k,
            }),
            l.list.push(l.u),
            (this[1].H.next = l.u),
            (this[1].H = l.u),
            this.size++);
        return this;
      };
      c.prototype.delete = function (h) {
        h = d(this, h);
        return h.u && h.list
          ? (h.list.splice(h.index, 1),
            h.list.length || delete this[0][h.id],
            (h.u.H.next = h.u.next),
            (h.u.next.H = h.u.H),
            (h.u.head = null),
            this.size--,
            !0)
          : !1;
      };
      c.prototype.clear = function () {
        this[0] = {};
        this[1] = this[1].H = f();
        this.size = 0;
      };
      c.prototype.has = function (h) {
        return !!d(this, h).u;
      };
      c.prototype.get = function (h) {
        return (h = d(this, h).u) && h.value;
      };
      c.prototype.entries = function () {
        return e(this, function (h) {
          return [h.key, h.value];
        });
      };
      c.prototype.keys = function () {
        return e(this, function (h) {
          return h.key;
        });
      };
      c.prototype.values = function () {
        return e(this, function (h) {
          return h.value;
        });
      };
      c.prototype.forEach = function (h, k) {
        for (var l = v(this, "entries").call(this), q; !(q = l.next()).done; )
          (q = q.value), h.call(k, q[1], q[0], this);
      };
      c.prototype[v(u.Symbol, "iterator")] = v(c.prototype, "entries");
      var d = function (h, k) {
          var l = k && typeof k;
          l == "object" || l == "function"
            ? b.has(k)
              ? (l = b.get(k))
              : ((l = "" + ++g), b.set(k, l))
            : (l = "p_" + k);
          var q = h[0][l];
          if (q && ka(h[0], l))
            for (h = 0; h < q.length; h++) {
              var m = q[h];
              if ((k !== k && m.key !== m.key) || k === m.key)
                return { id: l, list: q, index: h, u: m };
            }
          return { id: l, list: q, index: -1, u: void 0 };
        },
        e = function (h, k) {
          var l = h[1];
          return ha(function () {
            if (l) {
              for (; l.head != h[1]; ) l = l.H;
              for (; l.next != l.head; )
                return (l = l.next), { done: !1, value: k(l) };
              l = null;
            }
            return { done: !0, value: void 0 };
          });
        },
        f = function () {
          var h = {};
          return (h.H = h.next = h.head = h);
        },
        g = 0;
      return c;
    },
    "es6"
  );
  w(
    "Set",
    function (a) {
      if (
        (function () {
          if (
            !a ||
            typeof a != "function" ||
            !v(a.prototype, "entries") ||
            typeof Object.seal != "function"
          )
            return !1;
          try {
            var c = Object.seal({ x: 4 }),
              d = new a(x([c]));
            if (
              !d.has(c) ||
              d.size != 1 ||
              d.add(c) != d ||
              d.size != 1 ||
              d.add({ x: 4 }) != d ||
              d.size != 2
            )
              return !1;
            var e = v(d, "entries").call(d),
              f = e.next();
            if (f.done || f.value[0] != c || f.value[1] != c) return !1;
            f = e.next();
            return f.done ||
              f.value[0] == c ||
              f.value[0].x != 4 ||
              f.value[1] != f.value[0]
              ? !1
              : e.next().done;
          } catch (g) {
            return !1;
          }
        })()
      )
        return a;
      var b = function (c) {
        this.g = new u.Map();
        if (c) {
          c = x(c);
          for (var d; !(d = c.next()).done; ) this.add(d.value);
        }
        this.size = this.g.size;
      };
      b.prototype.add = function (c) {
        c = c === 0 ? 0 : c;
        this.g.set(c, c);
        this.size = this.g.size;
        return this;
      };
      b.prototype.delete = function (c) {
        c = this.g.delete(c);
        this.size = this.g.size;
        return c;
      };
      b.prototype.clear = function () {
        this.g.clear();
        this.size = 0;
      };
      b.prototype.has = function (c) {
        return this.g.has(c);
      };
      b.prototype.entries = function () {
        return v(this.g, "entries").call(this.g);
      };
      b.prototype.values = function () {
        return v(this.g, "values").call(this.g);
      };
      b.prototype.keys = v(b.prototype, "values");
      b.prototype[v(u.Symbol, "iterator")] = v(b.prototype, "values");
      b.prototype.forEach = function (c, d) {
        var e = this;
        this.g.forEach(function (f) {
          return c.call(d, f, f, e);
        });
      };
      return b;
    },
    "es6"
  );
  w(
    "Object.values",
    function (a) {
      return a
        ? a
        : function (b) {
            var c = [],
              d;
            for (d in b) ka(b, d) && c.push(b[d]);
            return c;
          };
    },
    "es8"
  );
  w(
    "Object.is",
    function (a) {
      return a
        ? a
        : function (b, c) {
            return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c;
          };
    },
    "es6"
  );
  w(
    "Array.prototype.includes",
    function (a) {
      return a
        ? a
        : function (b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
              var f = d[c];
              if (f === b || v(Object, "is").call(Object, f, b)) return !0;
            }
            return !1;
          };
    },
    "es7"
  );
  var ua = function (a, b, c) {
    if (a == null)
      throw new TypeError(
        "The 'this' value for String.prototype." +
          c +
          " must not be null or undefined"
      );
    if (b instanceof RegExp)
      throw new TypeError(
        "First argument to String.prototype." +
          c +
          " must not be a regular expression"
      );
    return a + "";
  };
  w(
    "String.prototype.includes",
    function (a) {
      return a
        ? a
        : function (b, c) {
            return ua(this, b, "includes").indexOf(b, c || 0) !== -1;
          };
    },
    "es6"
  );
  w(
    "Number.MAX_SAFE_INTEGER",
    function () {
      return 9007199254740991;
    },
    "es6"
  );
  w(
    "Number.MIN_SAFE_INTEGER",
    function () {
      return -9007199254740991;
    },
    "es6"
  );
  w(
    "Number.isFinite",
    function (a) {
      return a
        ? a
        : function (b) {
            return typeof b !== "number"
              ? !1
              : !isNaN(b) && b !== Infinity && b !== -Infinity;
          };
    },
    "es6"
  );
  w(
    "Number.isInteger",
    function (a) {
      return a
        ? a
        : function (b) {
            return v(Number, "isFinite").call(Number, b)
              ? b === Math.floor(b)
              : !1;
          };
    },
    "es6"
  );
  w(
    "Number.isSafeInteger",
    function (a) {
      return a
        ? a
        : function (b) {
            return (
              v(Number, "isInteger").call(Number, b) &&
              Math.abs(b) <= v(Number, "MAX_SAFE_INTEGER")
            );
          };
    },
    "es6"
  );
  w(
    "Math.trunc",
    function (a) {
      return a
        ? a
        : function (b) {
            b = Number(b);
            if (isNaN(b) || b === Infinity || b === -Infinity || b === 0)
              return b;
            var c = Math.floor(Math.abs(b));
            return b < 0 ? -c : c;
          };
    },
    "es6"
  );
  w(
    "Array.from",
    function (a) {
      return a
        ? a
        : function (b, c, d) {
            c =
              c != null
                ? c
                : function (h) {
                    return h;
                  };
            var e = [],
              f =
                typeof u.Symbol != "undefined" &&
                v(u.Symbol, "iterator") &&
                b[v(u.Symbol, "iterator")];
            if (typeof f == "function") {
              b = f.call(b);
              for (var g = 0; !(f = b.next()).done; )
                e.push(c.call(d, f.value, g++));
            } else
              for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e;
          };
    },
    "es6"
  );
  w(
    "Object.entries",
    function (a) {
      return a
        ? a
        : function (b) {
            var c = [],
              d;
            for (d in b) ka(b, d) && c.push([d, b[d]]);
            return c;
          };
    },
    "es8"
  );
  w(
    "String.prototype.startsWith",
    function (a) {
      return a
        ? a
        : function (b, c) {
            var d = ua(this, b, "startsWith"),
              e = d.length,
              f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
            return g >= f;
          };
    },
    "es6"
  );
  var va = function (a, b) {
    a instanceof String && (a += "");
    var c = 0,
      d = !1,
      e = {
        next: function () {
          if (!d && c < a.length) {
            var f = c++;
            return { value: b(f, a[f]), done: !1 };
          }
          d = !0;
          return { done: !0, value: void 0 };
        },
      };
    e[v(u.Symbol, "iterator")] = function () {
      return e;
    };
    return e;
  };
  w(
    "Array.prototype.entries",
    function (a) {
      return a
        ? a
        : function () {
            return va(this, function (b, c) {
              return [b, c];
            });
          };
    },
    "es6"
  );
  w(
    "globalThis",
    function (a) {
      return a || da;
    },
    "es_2020"
  );
  w(
    "Array.prototype.keys",
    function (a) {
      return a
        ? a
        : function () {
            return va(this, function (b) {
              return b;
            });
          };
    },
    "es6"
  );
  w(
    "Array.prototype.values",
    function (a) {
      return a
        ? a
        : function () {
            return va(this, function (b, c) {
              return c;
            });
          };
    },
    "es8"
  );
  w(
    "String.prototype.repeat",
    function (a) {
      return a
        ? a
        : function (b) {
            var c = ua(this, null, "repeat");
            if (b < 0 || b > 1342177279)
              throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b; ) if ((b & 1 && (d += c), (b >>>= 1))) c += c;
            return d;
          };
    },
    "es6"
  );
  w(
    "String.prototype.padStart",
    function (a) {
      return a
        ? a
        : function (b, c) {
            var d = ua(this, null, "padStart");
            b -= d.length;
            c = c !== void 0 ? String(c) : " ";
            return (
              (b > 0 && c
                ? v(c, "repeat")
                    .call(c, Math.ceil(b / c.length))
                    .substring(0, b)
                : "") + d
            );
          };
    },
    "es8"
  ); /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
  var z = this || self,
    xa = function (a, b) {
      var c = wa("CLOSURE_FLAGS");
      a = c && c[a];
      return a != null ? a : b;
    },
    wa = function (a) {
      a = a.split(".");
      for (var b = z, c = 0; c < a.length; c++)
        if (((b = b[a[c]]), b == null)) return null;
      return b;
    },
    ya = function (a, b, c) {
      a = a.split(".");
      c = c || z;
      a[0] in c ||
        typeof c.execScript == "undefined" ||
        c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift()); )
        a.length || b === void 0
          ? c[d] && c[d] !== Object.prototype[d]
            ? (c = c[d])
            : (c = c[d] = {})
          : (c[d] = b);
    };
  function za(a) {
    z.setTimeout(function () {
      throw a;
    }, 0);
  }
  var Aa = function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    },
    Ca = function (a, b) {
      var c = 0;
      a = Aa(String(a)).split(".");
      b = Aa(String(b)).split(".");
      for (var d = Math.max(a.length, b.length), e = 0; c == 0 && e < d; e++) {
        var f = a[e] || "",
          g = b[e] || "";
        do {
          f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
          if (f[0].length == 0 && g[0].length == 0) break;
          c =
            Ba(
              f[1].length == 0 ? 0 : parseInt(f[1], 10),
              g[1].length == 0 ? 0 : parseInt(g[1], 10)
            ) ||
            Ba(f[2].length == 0, g[2].length == 0) ||
            Ba(f[2], g[2]);
          f = f[3];
          g = g[3];
        } while (c == 0);
      }
      return c;
    },
    Ba = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
  var Da = xa(610401301, !1),
    Ea = xa(188588736, !0),
    Fa = xa(645172343, xa(1, !0));
  var Ga,
    Ha = z.navigator;
  Ga = Ha ? Ha.userAgentData || null : null;
  function Ia(a) {
    return Da
      ? Ga
        ? Ga.brands.some(function (b) {
            return (b = b.brand) && b.indexOf(a) != -1;
          })
        : !1
      : !1;
  }
  function A(a) {
    var b;
    a: {
      if ((b = z.navigator)) if ((b = b.userAgent)) break a;
      b = "";
    }
    return b.indexOf(a) != -1;
  }
  function Ja() {
    return Da ? !!Ga && Ga.brands.length > 0 : !1;
  }
  function Ka() {
    return Ja()
      ? Ia("Chromium")
      : ((A("Chrome") || A("CriOS")) && !(Ja() ? 0 : A("Edge"))) || A("Silk");
  }
  var La = function (a, b) {
    return Array.prototype.map.call(a, b, void 0);
  };
  function Ma(a, b) {
    a: {
      for (
        var c = typeof a === "string" ? a.split("") : a, d = a.length - 1;
        d >= 0;
        d--
      )
        if (d in c && b.call(void 0, c[d], d, a)) {
          b = d;
          break a;
        }
      b = -1;
    }
    return b < 0 ? null : typeof a === "string" ? a.charAt(b) : a[b];
  }
  var Na = function (a) {
    Na[" "](a);
    return a;
  };
  Na[" "] = function () {};
  var Oa = Ja() ? !1 : A("Trident") || A("MSIE");
  !A("Android") || Ka();
  Ka();
  A("Safari") &&
    (Ka() ||
      (Ja() ? 0 : A("Coast")) ||
      (Ja() ? 0 : A("Opera")) ||
      (Ja() ? 0 : A("Edge")) ||
      (Ja() ? Ia("Microsoft Edge") : A("Edg/")) ||
      (Ja() && Ia("Opera")));
  var Pa = {},
    Qa = null,
    Sa = function (a) {
      var b = [];
      Ra(a, function (c) {
        b.push(c);
      });
      return b;
    },
    Ra = function (a, b) {
      function c(k) {
        for (; d < a.length; ) {
          var l = a.charAt(d++),
            q = Qa[l];
          if (q != null) return q;
          if (!/^[\s\xa0]*$/.test(l))
            throw Error("Unknown base64 encoding at char: " + l);
        }
        return k;
      }
      Ta();
      for (var d = 0; ; ) {
        var e = c(-1),
          f = c(0),
          g = c(64),
          h = c(64);
        if (h === 64 && e === -1) break;
        b((e << 2) | (f >> 4));
        g != 64 &&
          (b(((f << 4) & 240) | (g >> 2)), h != 64 && b(((g << 6) & 192) | h));
      }
    },
    Ta = function () {
      if (!Qa) {
        Qa = {};
        for (
          var a =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            b = ["+/=", "+/", "-_=", "-_.", "-_"],
            c = 0;
          c < 5;
          c++
        ) {
          var d = a.concat(b[c].split(""));
          Pa[c] = d;
          for (var e = 0; e < d.length; e++) {
            var f = d[e];
            Qa[f] === void 0 && (Qa[f] = e);
          }
        }
      }
    };
  var Ua = typeof Uint8Array !== "undefined",
    Wa = !Oa && typeof btoa === "function";
  var Xa = function (a, b) {
    a.__closure__error__context__984382 ||
      (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = b;
  };
  var Ya, Za;
  function $a(a) {
    if (Za) throw Error("");
    Za = function (b) {
      z.setTimeout(function () {
        a(b);
      }, 0);
    };
  }
  function ab(a) {
    if (Za)
      try {
        Za(a);
      } catch (b) {
        throw ((b.cause = a), b);
      }
  }
  function bb() {
    var a = Error();
    Xa(a, "incident");
    Za ? ab(a) : za(a);
  }
  function cb(a) {
    a = Error(a);
    Xa(a, "warning");
    ab(a);
    return a;
  }
  function db(a, b) {
    if (b != null) {
      if (a == null) {
        var c;
        a = (c = Ya) != null ? c : (Ya = {});
      } else a = a.constructor;
      c = a[b] || 0;
      c >= 4 || ((a[b] = c + 1), bb());
    }
  }
  function eb() {
    return typeof BigInt === "function";
  }
  function fb(a) {
    return Array.prototype.slice.call(a);
  }
  var gb =
    typeof u.Symbol === "function" && typeof (0, u.Symbol)() === "symbol";
  function hb(a) {
    return typeof u.Symbol === "function" && typeof (0, u.Symbol)() === "symbol"
      ? (0, u.Symbol)()
      : a;
  }
  var ib = hb(),
    jb = hb("0di"),
    kb = hb("2ex"),
    lb = hb("1oa"),
    nb = hb("0dg"),
    ob = hb("64big");
  var pb = gb
      ? function (a, b) {
          a[ib] |= b;
        }
      : function (a, b) {
          a.g !== void 0
            ? (a.g |= b)
            : Object.defineProperties(a, {
                g: { value: b, configurable: !0, writable: !0, enumerable: !1 },
              });
        },
    qb = gb
      ? function (a, b) {
          a[ib] &= ~b;
        }
      : function (a, b) {
          a.g !== void 0 && (a.g &= ~b);
        },
    D = gb
      ? function (a) {
          return a[ib] | 0;
        }
      : function (a) {
          return a.g | 0;
        },
    E = gb
      ? function (a) {
          return a[ib];
        }
      : function (a) {
          return a.g;
        },
    F = gb
      ? function (a, b) {
          a[ib] = b;
        }
      : function (a, b) {
          a.g !== void 0
            ? (a.g = b)
            : Object.defineProperties(a, {
                g: { value: b, configurable: !0, writable: !0, enumerable: !1 },
              });
        };
  function rb(a, b) {
    F(b, (a | 0) & -14591);
  }
  function sb(a, b) {
    F(b, (a | 34) & -14557);
  }
  var tb = {},
    ub = {};
  function vb(a) {
    return !(!a || typeof a !== "object" || a.g !== ub);
  }
  function wb(a) {
    return (
      a !== null &&
      typeof a === "object" &&
      !Array.isArray(a) &&
      a.constructor === Object
    );
  }
  function xb(a, b, c) {
    if (!Array.isArray(a) || a.length) return !1;
    var d = D(a);
    if (d & 1) return !0;
    if (!(b && (Array.isArray(b) ? v(b, "includes").call(b, c) : b.has(c))))
      return !1;
    F(a, d | 1);
    return !0;
  }
  var yb,
    zb = [];
  F(zb, 55);
  yb = Object.freeze(zb);
  function Ab(a) {
    if (a & 2) throw Error();
  }
  var Bb = Object.freeze({});
  Object.freeze({});
  var Cb = Object.freeze({});
  var G = 0,
    H = 0;
  function Db(a) {
    var b = a >>> 0;
    G = b;
    H = ((a - b) / 4294967296) >>> 0;
  }
  function Eb(a) {
    if (a < 0) {
      Db(-a);
      var b = x(Fb(G, H));
      a = b.next().value;
      b = b.next().value;
      G = a >>> 0;
      H = b >>> 0;
    } else Db(a);
  }
  function Gb(a, b) {
    b >>>= 0;
    a >>>= 0;
    if (b <= 2097151) var c = "" + (4294967296 * b + a);
    else
      eb()
        ? (c = "" + ((BigInt(b) << BigInt(32)) | BigInt(a)))
        : ((c = ((a >>> 24) | (b << 8)) & 16777215),
          (b = (b >> 16) & 65535),
          (a = (a & 16777215) + c * 6777216 + b * 6710656),
          (c += b * 8147497),
          (b *= 2),
          a >= 1e7 && ((c += (a / 1e7) >>> 0), (a %= 1e7)),
          c >= 1e7 && ((b += (c / 1e7) >>> 0), (c %= 1e7)),
          (c = b + Hb(c) + Hb(a)));
    return c;
  }
  function Hb(a) {
    a = String(a);
    return "0000000".slice(a.length) + a;
  }
  function Ib() {
    var a = G,
      b = H;
    b & 2147483648
      ? eb()
        ? (a = "" + ((BigInt(b | 0) << BigInt(32)) | BigInt(a >>> 0)))
        : ((b = x(Fb(a, b))),
          (a = b.next().value),
          (b = b.next().value),
          (a = "-" + Gb(a, b)))
      : (a = Gb(a, b));
    return a;
  }
  function Fb(a, b) {
    b = ~b;
    a ? (a = ~a + 1) : (b += 1);
    return [a, b];
  }
  function Jb() {
    var a = !I(Kb).g,
      b = Lb;
    if (!a) throw Error((typeof b === "function" ? b() : b) || String(a));
  }
  function Mb(a) {
    a.wb = !0;
    return a;
  }
  var Lb = void 0;
  var Nb = Mb(function (a) {
      return typeof a === "number";
    }),
    Ob = Mb(function (a) {
      return typeof a === "string";
    }),
    Pb = Mb(function (a) {
      return typeof a === "boolean";
    });
  var Qb = typeof z.BigInt === "function" && typeof z.BigInt(0) === "bigint";
  function Rb(a) {
    var b = a;
    if (Ob(b)) {
      if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) throw Error(String(b));
    } else if (Nb(b) && !v(Number, "isSafeInteger").call(Number, b))
      throw Error(String(b));
    return Qb
      ? BigInt(a)
      : (a = Pb(a) ? (a ? "1" : "0") : Ob(a) ? a.trim() || "0" : String(a));
  }
  var Xb = Mb(function (a) {
      return Qb ? a >= Sb && a <= Tb : a[0] === "-" ? Ub(a, Vb) : Ub(a, Wb);
    }),
    Vb = v(Number, "MIN_SAFE_INTEGER").toString(),
    Sb = Qb ? BigInt(v(Number, "MIN_SAFE_INTEGER")) : void 0,
    Wb = v(Number, "MAX_SAFE_INTEGER").toString(),
    Tb = Qb ? BigInt(v(Number, "MAX_SAFE_INTEGER")) : void 0;
  function Ub(a, b) {
    if (a.length > b.length) return !1;
    if (a.length < b.length || a === b) return !0;
    for (var c = 0; c < a.length; c++) {
      var d = a[c],
        e = b[c];
      if (d > e) return !1;
      if (d < e) return !0;
    }
  }
  function Yb(a, b) {
    throw Error(b === void 0 ? "unexpected value " + a + "!" : b);
  }
  function Zb(a) {
    if (typeof a !== "boolean") {
      var b = typeof a;
      throw Error(
        "Expected boolean but got " +
          (b != "object" ? b : a ? (Array.isArray(a) ? "array" : b) : "null") +
          ": " +
          a
      );
    }
    return a;
  }
  var $b = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
  function ac(a) {
    var b = typeof a;
    switch (b) {
      case "bigint":
        return !0;
      case "number":
        return v(Number, "isFinite").call(Number, a);
    }
    return b !== "string" ? !1 : $b.test(a);
  }
  function J(a) {
    if (a != null) {
      if (!v(Number, "isFinite").call(Number, a)) throw cb("enum");
      a |= 0;
    }
    return a;
  }
  function bc(a) {
    if (typeof a !== "number") throw cb("int32");
    if (!v(Number, "isFinite").call(Number, a)) throw cb("int32");
    return a | 0;
  }
  function cc(a) {
    return a == null ? a : bc(a);
  }
  function dc(a) {
    if (a == null) return a;
    if (typeof a === "string") {
      if (!a) return;
      a = +a;
    }
    if (typeof a === "number")
      return v(Number, "isFinite").call(Number, a) ? a | 0 : void 0;
  }
  function ec(a) {
    if (a == null) return a;
    if (typeof a === "string") {
      if (!a) return;
      a = +a;
    }
    if (typeof a === "number")
      return v(Number, "isFinite").call(Number, a) ? a >>> 0 : void 0;
  }
  function fc(a) {
    var b = b === void 0 ? 0 : b;
    if (!ac(a)) throw cb("int64");
    var c = typeof a;
    switch (b) {
      case 4096:
        switch (c) {
          case "string":
            return gc(a);
          case "bigint":
            return String(BigInt.asIntN(64, a));
          default:
            return hc(a);
        }
      case 8192:
        switch (c) {
          case "string":
            return (
              (b = v(Math, "trunc").call(Math, Number(a))),
              v(Number, "isSafeInteger").call(Number, b)
                ? (a = Rb(b))
                : ((b = a.indexOf(".")),
                  b !== -1 && (a = a.substring(0, b)),
                  (a = eb() ? Rb(BigInt.asIntN(64, BigInt(a))) : Rb(ic(a)))),
              a
            );
          case "bigint":
            return Rb(BigInt.asIntN(64, a));
          default:
            return Rb(jc(a));
        }
      case 0:
        switch (c) {
          case "string":
            return gc(a);
          case "bigint":
            return Rb(BigInt.asIntN(64, a));
          default:
            return jc(a);
        }
      default:
        return Yb(b, "Unknown format requested type for int64");
    }
  }
  function kc(a) {
    return a == null ? a : fc(a);
  }
  function lc(a) {
    return a[0] === "-"
      ? a.length < 20
        ? !0
        : a.length === 20 && Number(a.substring(0, 7)) > -922337
      : a.length < 19
      ? !0
      : a.length === 19 && Number(a.substring(0, 6)) < 922337;
  }
  function ic(a) {
    if (lc(a)) return a;
    if (a.length < 16) Eb(Number(a));
    else if (eb())
      (a = BigInt(a)),
        (G = Number(a & BigInt(4294967295)) >>> 0),
        (H = Number((a >> BigInt(32)) & BigInt(4294967295)));
    else {
      var b = +(a[0] === "-");
      H = G = 0;
      for (
        var c = a.length, d = b, e = ((c - b) % 6) + b;
        e <= c;
        d = e, e += 6
      )
        (d = Number(a.slice(d, e))),
          (H *= 1e6),
          (G = G * 1e6 + d),
          G >= 4294967296 &&
            ((H += v(Math, "trunc").call(Math, G / 4294967296)),
            (H >>>= 0),
            (G >>>= 0));
      b &&
        ((b = x(Fb(G, H))),
        (a = b.next().value),
        (b = b.next().value),
        (G = a),
        (H = b));
    }
    return Ib();
  }
  function jc(a) {
    a = v(Math, "trunc").call(Math, a);
    if (!v(Number, "isSafeInteger").call(Number, a)) {
      Eb(a);
      var b = G,
        c = H;
      if ((a = c & 2147483648))
        (b = (~b + 1) >>> 0), (c = ~c >>> 0), b == 0 && (c = (c + 1) >>> 0);
      b = c * 4294967296 + (b >>> 0);
      a = a ? -b : b;
    }
    return a;
  }
  function hc(a) {
    a = v(Math, "trunc").call(Math, a);
    if (v(Number, "isSafeInteger").call(Number, a)) a = String(a);
    else {
      var b = String(a);
      lc(b) ? (a = b) : (Eb(a), (a = Ib()));
    }
    return a;
  }
  function gc(a) {
    var b = v(Math, "trunc").call(Math, Number(a));
    if (v(Number, "isSafeInteger").call(Number, b)) return String(b);
    b = a.indexOf(".");
    b !== -1 && (a = a.substring(0, b));
    return ic(a);
  }
  function mc(a) {
    if (typeof a !== "string") throw Error();
    return a;
  }
  function K(a) {
    if (a != null && typeof a !== "string") throw Error();
    return a;
  }
  function nc(a) {
    return a == null || typeof a === "string" ? a : void 0;
  }
  function oc(a, b, c, d) {
    if (a != null && typeof a === "object" && a.ha === tb) return a;
    if (!Array.isArray(a)) return c ? (d & 2 ? pc(b) : new b()) : void 0;
    var e = (c = D(a));
    e === 0 && (e |= d & 32);
    e |= d & 2;
    e !== c && F(a, e);
    return new b(a);
  }
  function pc(a) {
    var b = a[jb];
    if (b) return b;
    b = new a();
    pb(b.i, 34);
    return (a[jb] = b);
  }
  var uc = function (a) {
    var b = qc(a);
    if (b) return b;
    if (Math.random() > 0.01) return a;
    if (rc === void 0)
      if (typeof Proxy !== "function") rc = null;
      else
        try {
          rc = Proxy.toString().indexOf("[native code]") !== -1 ? Proxy : null;
        } catch (c) {
          rc = null;
        }
    b = rc;
    if (!b) return a;
    b = new b(a, {
      set: function (c, d, e) {
        sc();
        c[d] = e;
        return !0;
      },
    });
    tc(a, b);
    return b;
  };
  function sc() {
    bb();
  }
  var vc = void 0,
    wc = void 0,
    qc = function (a) {
      var b;
      return (b = vc) == null ? void 0 : b.get(a);
    },
    xc = function (a) {
      var b;
      return ((b = wc) == null ? void 0 : b.get(a)) || a;
    };
  function tc(a, b) {
    (vc || (vc = new u.WeakMap())).set(a, b);
    (wc || (wc = new u.WeakMap())).set(b, a);
  }
  var rc = void 0;
  var yc;
  function zc(a, b) {
    yc = b;
    a = new a(b);
    yc = void 0;
    return a;
  }
  function L(a, b, c) {
    a == null && (a = yc);
    yc = void 0;
    if (a == null) {
      var d = 96;
      c ? ((a = [c]), (d |= 512)) : (a = []);
      b && (d = (d & -16760833) | ((b & 1023) << 14));
    } else {
      if (!Array.isArray(a)) throw Error("narr");
      d = D(a);
      if (d & 2048) throw Error("farr");
      if (d & 64) return a;
      d |= 64;
      if (c && ((d |= 512), c !== a[0])) throw Error("mid");
      a: {
        c = a;
        var e = c.length;
        if (e) {
          var f = e - 1;
          if (wb(c[f])) {
            d |= 256;
            b = f - (+!!(d & 512) - 1);
            if (b >= 1024) throw Error("pvtlmt");
            d = (d & -16760833) | ((b & 1023) << 14);
            break a;
          }
        }
        if (b) {
          b = Math.max(b, e - (+!!(d & 512) - 1));
          if (b > 1024) throw Error("spvt");
          d = (d & -16760833) | ((b & 1023) << 14);
        }
      }
    }
    F(a, d);
    return a;
  }
  function Ac(a, b) {
    return Bc(b);
  }
  function Bc(a) {
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (a)
          if (Array.isArray(a)) {
            if (xb(a, void 0, 0)) return;
          } else if (Ua && a != null && a instanceof Uint8Array) {
            if (Wa) {
              for (var b = "", c = 0, d = a.length - 10240; c < d; )
                b += String.fromCharCode.apply(
                  null,
                  a.subarray(c, (c += 10240))
                );
              b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
              a = btoa(b);
            } else {
              b === void 0 && (b = 0);
              Ta();
              b = Pa[b];
              c = Array(Math.floor(a.length / 3));
              d = b[64] || "";
              for (var e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e],
                  h = a[e + 1],
                  k = a[e + 2],
                  l = b[g >> 2];
                g = b[((g & 3) << 4) | (h >> 4)];
                h = b[((h & 15) << 2) | (k >> 6)];
                k = b[k & 63];
                c[f++] = l + g + h + k;
              }
              l = 0;
              k = d;
              switch (a.length - e) {
                case 2:
                  (l = a[e + 1]), (k = b[(l & 15) << 2] || d);
                case 1:
                  (a = a[e]),
                    (c[f] = b[a >> 2] + b[((a & 3) << 4) | (l >> 4)] + k + d);
              }
              a = c.join("");
            }
            return a;
          }
    }
    return a;
  }
  function Cc(a, b, c) {
    a = fb(a);
    var d = a.length,
      e = b & 256 ? a[d - 1] : void 0;
    d += e ? -1 : 0;
    for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
    if (e) {
      b = a[b] = {};
      for (var f in e)
        Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]));
    }
    return a;
  }
  function Dc(a, b, c, d, e) {
    if (a != null) {
      if (Array.isArray(a))
        a = xb(a, void 0, 0)
          ? void 0
          : e && D(a) & 2
          ? a
          : Ec(a, b, c, d !== void 0, e);
      else if (wb(a)) {
        var f = {},
          g;
        for (g in a)
          Object.prototype.hasOwnProperty.call(a, g) &&
            (f[g] = Dc(a[g], b, c, d, e));
        a = f;
      } else a = b(a, d);
      return a;
    }
  }
  function Ec(a, b, c, d, e) {
    var f = d || c ? D(a) : 0;
    d = d ? !!(f & 32) : void 0;
    a = fb(a);
    for (var g = 0; g < a.length; g++) a[g] = Dc(a[g], b, c, d, e);
    c && c(f, a);
    return a;
  }
  function Fc(a) {
    return a.ha === tb ? a.toJSON() : Bc(a);
  }
  function Gc(a, b, c) {
    c = c === void 0 ? sb : c;
    if (a != null) {
      if (Ua && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        var d = D(a);
        if (d & 2) return a;
        b && (b = d === 0 || (!!(d & 32) && !(d & 64 || !(d & 16))));
        return b
          ? (F(a, (d | 34) & -12293), a)
          : Ec(a, Gc, d & 4 ? sb : c, !0, !0);
      }
      a.ha === tb &&
        ((c = a.i),
        (d = E(c)),
        (a = d & 2 ? a : zc(a.constructor, Hc(c, d, !0))));
      return a;
    }
  }
  function Hc(a, b, c) {
    var d = c || b & 2 ? sb : rb,
      e = !!(b & 32);
    a = Cc(a, b, function (f) {
      return Gc(f, e, d);
    });
    pb(a, 32 | (c ? 2 : 0));
    return a;
  }
  function Ic(a) {
    var b = a.i,
      c = E(b);
    return c & 2 ? zc(a.constructor, Hc(b, c, !1)) : a;
  }
  function Jc(a, b, c, d) {
    if (!(4 & b)) return !0;
    if (c == null) return !1;
    !d &&
      c === 0 &&
      (4096 & b || 8192 & b) &&
      (a.constructor[nb] = (a.constructor[nb] | 0) + 1) < 5 &&
      bb();
    return c === 0 ? !1 : !(c & b);
  }
  var M = function (a, b) {
    a = a.i;
    return Kc(a, E(a), b);
  };
  function Lc(a, b, c, d) {
    b = d + (+!!(b & 512) - 1);
    if (!(b < 0 || b >= a.length || b >= c)) return a[b];
  }
  var Kc = function (a, b, c, d) {
      if (c === -1) return null;
      var e = (b >> 14) & 1023 || 536870912;
      if (c >= e) {
        if (b & 256) return a[a.length - 1][c];
      } else {
        var f = a.length;
        return d && b & 256 && ((d = a[f - 1][c]), d != null)
          ? (Lc(a, b, e, c) && db(void 0, kb), d)
          : Lc(a, b, e, c);
      }
    },
    O = function (a, b, c) {
      var d = a.i,
        e = E(d);
      Ab(e);
      N(d, e, b, c);
      return a;
    };
  function N(a, b, c, d, e) {
    var f = (b >> 14) & 1023 || 536870912;
    if (c >= f || (e && !Fa)) {
      var g = b;
      if (b & 256) e = a[a.length - 1];
      else {
        if (d == null) return g;
        e = a[f + (+!!(b & 512) - 1)] = {};
        g |= 256;
      }
      e[c] = d;
      c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
      g !== b && F(a, g);
      return g;
    }
    a[c + (+!!(b & 512) - 1)] = d;
    b & 256 && ((a = a[a.length - 1]), c in a && delete a[c]);
    return b;
  }
  var P = function (a) {
    return a === Bb ? 2 : 5;
  };
  function Mc(a, b, c, d) {
    var e = a.i,
      f = E(e),
      g = 2 & f ? 1 : d;
    d = Nc(e, f, b);
    var h = D(d);
    if (Jc(a, h, void 0, !1)) {
      if (4 & h || Object.isFrozen(d))
        (d = fb(d)), (h = Oc(h, f)), (f = N(e, f, b, d));
      for (var k = (a = 0); a < d.length; a++) {
        var l = c(d[a]);
        l != null && (d[k++] = l);
      }
      k < a && (d.length = k);
      h = Pc(h, f);
      h = (h | 20) & -4097;
      h &= -8193;
      F(d, h);
      2 & h && Object.freeze(d);
    }
    var q;
    g === 1 || (g === 4 && 32 & h)
      ? Qc(h) || ((f = h), (h |= 2), h !== f && F(d, h), Object.freeze(d))
      : ((c = g !== 5 ? !1 : !!(32 & h) || Qc(h) || !!qc(d)),
        (g === 2 || c) &&
          Qc(h) &&
          ((d = fb(d)),
          (h = Oc(h, f)),
          (h = Rc(h, f, !1)),
          F(d, h),
          (f = N(e, f, b, d))),
        Qc(h) || ((b = h), (h = Rc(h, f, !1)), h !== b && F(d, h)),
        c && (q = uc(d)));
    return q || d;
  }
  function Nc(a, b, c) {
    a = Kc(a, b, c);
    return Array.isArray(a) ? a : yb;
  }
  function Pc(a, b) {
    a === 0 && (a = Oc(a, b));
    return a | 1;
  }
  function Qc(a) {
    return (!!(2 & a) && !!(4 & a)) || !!(2048 & a);
  }
  function Sc(a, b, c, d) {
    var e = a.i,
      f = E(e);
    Ab(f);
    if (c == null) return N(e, f, b), a;
    c = xc(c);
    var g = D(c),
      h = g,
      k = !!(2 & g) || Object.isFrozen(c),
      l = !k && (void 0 === Cb || !1);
    if (Jc(a, g))
      for (
        g = 21,
          k && ((c = fb(c)), (h = 0), (g = Oc(g, f)), (g = Rc(g, f, !0))),
          k = 0;
        k < c.length;
        k++
      )
        c[k] = d(c[k]);
    l && ((c = fb(c)), (h = 0), (g = Oc(g, f)), (g = Rc(g, f, !0)));
    g !== h && F(c, g);
    N(e, f, b, c);
    return a;
  }
  function Q(a, b, c, d) {
    var e = a.i,
      f = E(e);
    Ab(f);
    N(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
    return a;
  }
  function Tc(a, b) {
    var c = a.i,
      d = D(c);
    Ab(E(a.i));
    var e = d & 2;
    a = Kc(c, d, 4, !1);
    Array.isArray(a) || (a = yb);
    var f = !!(d & 32),
      g = D(a);
    g === 0 && f && !e ? ((g |= 33), F(a, g)) : g & 1 || ((g |= 1), F(a, g));
    if (e) g & 2 || pb(a, 34), Object.freeze(a);
    else if (2 & g || 2048 & g)
      (a = fb(a)), (e = 1), f && (e |= 32), F(a, e), N(c, d, 4, a, !1);
    c = a;
    d = D(c);
    d = 4 & d ? (4096 & d ? 4096 : 8192 & d ? 8192 : 0) : void 0;
    d = d != null ? d : 0;
    if (Array.isArray(b)) for (a = 0; a < b.length; a++) c.push(mc(b[a], d));
    else
      for (b = x(b), a = b.next(); !a.done; a = b.next())
        c.push(mc(a.value, d));
  }
  var R = function (a, b, c, d) {
      var e = a.i,
        f = E(e);
      Ab(f);
      if (d == null) {
        var g = Uc(e);
        if (Vc(g, e, f, c) === b) g.set(c, 0);
        else return a;
      } else {
        g = Uc(e);
        var h = Vc(g, e, f, c);
        h !== b && (h && (f = N(e, f, h)), g.set(c, b));
      }
      N(e, f, b, d);
      return a;
    },
    Xc = function (a, b, c) {
      return Wc(a, b) === c ? c : -1;
    },
    Wc = function (a, b) {
      a = a.i;
      return Vc(Uc(a), a, E(a), b);
    };
  function Uc(a) {
    if (gb) {
      var b;
      return (b = a[lb]) != null ? b : (a[lb] = new u.Map());
    }
    if (lb in a) return a[lb];
    b = new u.Map();
    Object.defineProperty(a, lb, { value: b });
    return b;
  }
  function Vc(a, b, c, d) {
    var e = a.get(d);
    if (e != null) return e;
    for (var f = (e = 0); f < d.length; f++) {
      var g = d[f];
      Kc(b, c, g) != null && (e !== 0 && (c = N(b, c, e)), (e = g));
    }
    a.set(d, e);
    return e;
  }
  var Zc = function (a) {
    var b = Yc;
    a = a.i;
    var c = E(a);
    Ab(c);
    var d = Kc(a, c, 4);
    b = Ic(oc(d, b, !0, c));
    d !== b && N(a, c, 4, b);
    return b;
  };
  function $c(a, b, c, d) {
    a = a.i;
    var e = E(a),
      f = Kc(a, e, c, d);
    b = oc(f, b, !1, e);
    b !== f && b != null && N(a, e, c, b, d);
    return b;
  }
  var ad = function (a, b, c) {
      return (a = $c(a, b, c, !1)) ? a : pc(b);
    },
    S = function (a, b, c) {
      var d = d === void 0 ? !1 : d;
      b = $c(a, b, c, d);
      if (b == null) return b;
      a = a.i;
      var e = E(a);
      if (!(e & 2)) {
        var f = Ic(b);
        f !== b && ((b = f), N(a, e, c, b, d));
      }
      return b;
    };
  function bd(a, b, c, d, e, f, g) {
    var h = !!(2 & b);
    e = h ? 1 : e;
    f = !!f;
    g && (g = !h);
    h = Nc(a, b, d);
    var k = D(h),
      l = !!(4 & k);
    if (!l) {
      k = Pc(k, b);
      var q = h,
        m = b,
        n = !!(2 & k);
      n && (m |= 2);
      for (var r = !n, t = !0, B = 0, C = 0; B < q.length; B++) {
        var la = oc(q[B], c, !1, m);
        if (la instanceof c) {
          if (!n) {
            var mb = !!(D(la.i) & 2);
            r && (r = !mb);
            t && (t = mb);
          }
          q[C++] = la;
        }
      }
      C < B && (q.length = C);
      k |= 4;
      k = t ? k | 16 : k & -17;
      k = r ? k | 8 : k & -9;
      F(q, k);
      n && Object.freeze(q);
    }
    if (g && !(8 & k || (!h.length && (e === 1 || (e === 4 && 32 & k))))) {
      Qc(k) && ((h = fb(h)), (k = Oc(k, b)), (b = N(a, b, d, h)));
      c = h;
      g = k;
      for (q = 0; q < c.length; q++)
        (k = c[q]), (m = Ic(k)), k !== m && (c[q] = m);
      g |= 8;
      g = c.length ? g & -17 : g | 16;
      F(c, g);
      k = g;
    }
    var Va;
    e === 1 || (e === 4 && 32 & k)
      ? Qc(k) ||
        ((b = k),
        (k |= !h.length || (16 & k && (!l || 32 & k)) ? 2 : 2048),
        k !== b && F(h, k),
        Object.freeze(h))
      : ((l = e !== 5 ? !1 : !!(32 & k) || Qc(k) || !!qc(h)),
        (e === 2 || l) &&
          Qc(k) &&
          ((h = fb(h)),
          (k = Oc(k, b)),
          (k = Rc(k, b, f)),
          F(h, k),
          (b = N(a, b, d, h))),
        Qc(k) || ((a = k), (k = Rc(k, b, f)), k !== a && F(h, k)),
        l && (Va = uc(h)));
    return Va || h;
  }
  var T = function (a, b, c, d) {
      a = a.i;
      var e = E(a);
      return bd(a, e, b, c, d, !1, !(2 & e));
    },
    cd = function (a, b, c) {
      c == null && (c = void 0);
      return O(a, b, c);
    },
    dd = function (a, b, c, d) {
      d == null && (d = void 0);
      return R(a, b, c, d);
    },
    ed = function (a, b, c) {
      var d = a.i,
        e = E(d);
      Ab(e);
      if (c == null) return N(d, e, b), a;
      c = xc(c);
      for (
        var f = D(c),
          g = f,
          h = !!(2 & f) || !!(2048 & f),
          k = h || Object.isFrozen(c),
          l = !k && (void 0 === Cb || !1),
          q = !0,
          m = !0,
          n = 0;
        n < c.length;
        n++
      ) {
        var r = c[n];
        h || ((r = !!(D(r.i) & 2)), q && (q = !r), m && (m = r));
      }
      h || ((f |= 5), (f = q ? f | 8 : f & -9), (f = m ? f | 16 : f & -17));
      if (l || (k && f !== g))
        (c = fb(c)), (g = 0), (f = Oc(f, e)), (f = Rc(f, e, !0));
      f !== g && F(c, f);
      N(d, e, b, c);
      return a;
    };
  function Oc(a, b) {
    a = (2 & b ? a | 2 : a & -3) | 32;
    return (a &= -2049);
  }
  function Rc(a, b, c) {
    (32 & b && c) || (a &= -33);
    return a;
  }
  function fd(a, b) {
    return a != null ? a : b;
  }
  var gd = function (a, b) {
      a = M(a, b);
      return a == null
        ? a
        : v(Number, "isFinite").call(Number, a)
        ? a | 0
        : void 0;
    },
    hd = function (a, b) {
      var c = c === void 0 ? !1 : c;
      a = M(a, b);
      return fd(
        a == null || typeof a === "boolean"
          ? a
          : typeof a === "number"
          ? !!a
          : void 0,
        c
      );
    },
    id = function (a, b) {
      var c = c === void 0 ? 0 : c;
      return fd(dc(M(a, b)), c);
    },
    jd = function (a, b) {
      var c = c === void 0 ? 0 : c;
      return fd(ec(M(a, b)), c);
    },
    kd = function (a, b) {
      var c = c === void 0 ? 0 : c;
      a = M(a, b);
      a != null &&
        (typeof a === "bigint"
          ? Xb(a)
            ? (a = Number(a))
            : ((a = BigInt.asIntN(64, a)), (a = Xb(a) ? Number(a) : String(a)))
          : (a = ac(a) ? (typeof a === "number" ? jc(a) : gc(a)) : void 0));
      return fd(a, c);
    },
    ld = function (a, b) {
      var c = c === void 0 ? 0 : c;
      a = a.i;
      var d = E(a),
        e = Kc(a, d, b);
      var f =
        e == null || typeof e === "number"
          ? e
          : e === "NaN" || e === "Infinity" || e === "-Infinity"
          ? Number(e)
          : void 0;
      f != null && f !== e && N(a, d, b, f);
      return fd(f, c);
    },
    U = function (a, b) {
      var c = c === void 0 ? "" : c;
      return fd(nc(M(a, b)), c);
    },
    V = function (a, b) {
      var c = 0;
      c = c === void 0 ? 0 : c;
      return fd(gd(a, b), c);
    },
    md = function (a, b) {
      return Mc(a, b, nc, P());
    },
    nd = function (a, b, c) {
      return V(a, Xc(a, c, b));
    };
  var od,
    W = function (a, b, c) {
      this.i = L(a, b, c);
    };
  W.prototype.toJSON = function () {
    return pd(this);
  };
  var qd = function (a) {
    try {
      return (od = !0), JSON.stringify(pd(a), Ac);
    } finally {
      od = !1;
    }
  };
  W.prototype.ha = tb;
  function pd(a) {
    var b = od ? a.i : Ec(a.i, Fc, void 0, void 0, !1);
    var c = !od;
    var d = Ea ? void 0 : a.constructor.xb;
    var e = E(c ? a.i : b);
    if ((a = b.length)) {
      var f = b[a - 1],
        g = wb(f);
      g ? a-- : (f = void 0);
      e = +!!(e & 512) - 1;
      var h = b;
      if (g) {
        b: {
          var k = f;
          var l = {};
          g = !1;
          if (k)
            for (var q in k)
              if (Object.prototype.hasOwnProperty.call(k, q))
                if (isNaN(+q)) l[q] = k[q];
                else {
                  var m = k[q];
                  Array.isArray(m) &&
                    (xb(m, d, +q) || (vb(m) && m.size === 0)) &&
                    (m = null);
                  m == null && (g = !0);
                  m != null && (l[q] = m);
                }
          if (g) {
            for (var n in l) break b;
            l = null;
          } else l = k;
        }
        k = l == null ? f != null : l !== f;
      }
      for (var r; a > 0; a--) {
        n = a - 1;
        q = h[n];
        n -= e;
        if (!(q == null || xb(q, d, n) || (vb(q) && q.size === 0))) break;
        r = !0;
      }
      if (h !== b || k || r) {
        if (!c) h = Array.prototype.slice.call(h, 0, a);
        else if (r || k || l) h.length = a;
        l && h.push(l);
      }
      b = h;
    }
    return b;
  }
  function rd(a) {
    return function (b) {
      if (b == null || b == "") b = new a();
      else {
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error("dnarr");
        pb(b, 32);
        b = zc(a, b);
      }
      return b;
    };
  }
  var sd = function (a) {
    this.i = L(a);
  };
  y(sd, W);
  var td = function (a) {
    this.i = L(a);
  };
  y(td, W);
  var ud = rd(td);
  var xd = function (a, b) {
    this.g = (a === vd && b) || "";
    this.j = wd;
  };
  xd.prototype.toString = function () {
    return this.g;
  };
  var wd = {},
    vd = {};
  var yd = function (a) {
    var b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  };
  var zd = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function Ad(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b;
  }
  var Bd = function (a) {
    this.g = a;
  };
  Bd.prototype.toString = function () {
    return this.g + "";
  };
  var Cd = function (a) {
      return a instanceof Bd && a.constructor === Bd
        ? a.g
        : "type_error:TrustedResourceUrl";
    },
    Dd = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
    Ed = {},
    Fd = function (a, b, c) {
      if (c == null) return b;
      if (typeof c === "string") return c ? a + encodeURIComponent(c) : "";
      for (var d in c)
        if (Object.prototype.hasOwnProperty.call(c, d)) {
          var e = c[d];
          e = Array.isArray(e) ? e : [e];
          for (var f = 0; f < e.length; f++) {
            var g = e[f];
            g != null &&
              (b || (b = a),
              (b +=
                (b.length > a.length ? "&" : "") +
                encodeURIComponent(d) +
                "=" +
                encodeURIComponent(String(g))));
          }
        }
      return b;
    };
  var Gd = {},
    Hd = function (a) {
      this.g = a;
    };
  Hd.prototype.toString = function () {
    return this.g.toString();
  }; /* 
 
 SPDX-License-Identifier: Apache-2.0 
*/
  function Id(a, b) {
    b = b === void 0 ? {} : b;
    a = '<script src="' + Jd(Cd(a).toString()) + '"';
    b.async && (a += " async");
    b.Ma && (a += ' custom-element="' + Jd(b.Ma) + '"');
    b.defer && (a += " defer");
    b.id && (a += ' id="' + Jd(b.id) + '"');
    b.nonce && (a += ' nonce="' + Jd(b.nonce) + '"');
    b.type && (a += ' type="' + Jd(b.type) + '"');
    b.Aa && (a += ' crossorigin="' + Jd(b.Aa) + '"');
    return new Hd(a + ">\x3c/script>", Gd);
  }
  function Jd(a) {
    return a
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  }
  function Kd(a) {
    var b = a.split(/\?|#/),
      c = /\?/.test(a) ? "?" + b[1] : "";
    return {
      path: b[0],
      Za: c,
      hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : "",
    };
  }
  function Ld(a) {
    var b = ta.apply(1, arguments);
    if (b.length === 0) return new Bd(a[0], Ed);
    for (var c = a[0], d = 0; d < b.length; d++)
      c += encodeURIComponent(b[d]) + a[d + 1];
    return new Bd(c, Ed);
  }
  function Md(a, b) {
    a = Kd(Cd(a).toString());
    var c = a.Za,
      d = c.length ? "&" : "?";
    b.forEach(function (e, f) {
      e = e instanceof Array ? e : [e];
      for (var g = 0; g < e.length; g++) {
        var h = e[g];
        h !== null &&
          h !== void 0 &&
          ((c +=
            d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h))),
          (d = "&"));
      }
    });
    return new Bd(a.path + c + a.hash, Ed);
  }
  function Nd(a) {
    var b, c;
    return (a =
      (c = (b = a.document).querySelector) == null
        ? void 0
        : c.call(b, "script[nonce]"))
      ? a.nonce || a.getAttribute("nonce") || ""
      : "";
  }
  function Od(a, b) {
    a.src = Cd(b);
    (b = Nd((a.ownerDocument && a.ownerDocument.defaultView) || window)) &&
      a.setAttribute("nonce", b);
  }
  function Pd(a, b) {
    a.write(
      b instanceof Hd && b.constructor === Hd ? b.g : "type_error:SafeHtml"
    );
  }
  var Qd = function () {
    return Da && Ga
      ? !Ga.mobile && (A("iPad") || A("Android") || A("Silk"))
      : A("iPad") || (A("Android") && !A("Mobile")) || A("Silk");
  };
  var Rd = RegExp(
      "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
    ),
    Sd = function (a) {
      return a ? decodeURI(a) : a;
    },
    Td = /#|$/,
    Ud = function (a, b) {
      var c = a.search(Td);
      a: {
        var d = 0;
        for (var e = b.length; (d = a.indexOf(b, d)) >= 0 && d < c; ) {
          var f = a.charCodeAt(d - 1);
          if (f == 38 || f == 63)
            if (
              ((f = a.charCodeAt(d + e)), !f || f == 61 || f == 38 || f == 35)
            )
              break a;
          d += e + 1;
        }
        d = -1;
      }
      if (d < 0) return null;
      e = a.indexOf("&", d);
      if (e < 0 || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " ")
      );
    };
  var Vd = function (a) {
      try {
        var b;
        if ((b = !!a && a.location.href != null))
          a: {
            try {
              Na(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Wd = function (a) {
      var b = b === void 0 ? !1 : b;
      var c = c === void 0 ? z : c;
      for (var d = 0; c && d++ < 40 && ((!b && !Vd(c)) || !a(c)); )
        a: {
          try {
            var e = c.parent;
            if (e && e != c) {
              c = e;
              break a;
            }
          } catch (f) {}
          c = null;
        }
    },
    Xd = function (a) {
      var b = a;
      Wd(function (c) {
        b = c;
        return !1;
      });
      return b;
    },
    Yd = function (a) {
      return Vd(a.top) ? a.top : null;
    },
    Zd = function () {
      if (!u.globalThis.crypto) return Math.random();
      try {
        var a = new Uint32Array(1);
        u.globalThis.crypto.getRandomValues(a);
        return a[0] / 65536 / 65536;
      } catch (b) {
        return Math.random();
      }
    },
    $d = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    },
    ae = function (a) {
      var b = a.length;
      if (b == 0) return 0;
      for (var c = 305419896, d = 0; d < b; d++)
        c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
      return c > 0 ? c : 4294967296 + c;
    },
    be = yd(function () {
      return (
        Da && Ga
          ? Ga.mobile
          : !Qd() && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile"))
      )
        ? 2
        : Qd()
        ? 1
        : 0;
    });
  function ce(a, b) {
    if (a.length && b.head) {
      a = x(a);
      for (var c = a.next(); !c.done; c = a.next())
        if ((c = c.value) && b.head) {
          var d = de("META");
          b.head.appendChild(d);
          d.httpEquiv = "origin-trial";
          d.content = c;
        }
    }
  }
  var ee = function (a) {
      if (typeof a.goog_pvsid !== "number")
        try {
          var b = Object,
            c = b.defineProperty,
            d = void 0;
          d = d === void 0 ? Math.random : d;
          var e = Math.floor(d() * Math.pow(2, 52));
          c.call(b, a, "goog_pvsid", { value: e, configurable: !1 });
        } catch (f) {}
      return Number(a.goog_pvsid) || -1;
    },
    de = function (a, b) {
      b = b === void 0 ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  var fe = {
    qb: 0,
    pb: 1,
    mb: 2,
    hb: 3,
    nb: 4,
    ib: 5,
    ob: 6,
    kb: 7,
    lb: 8,
    gb: 9,
    jb: 10,
    rb: 11,
  };
  var ge = { tb: 0, ub: 1, sb: 2 };
  var he = function (a) {
    this.i = L(a);
  };
  y(he, W);
  he.prototype.getVersion = function () {
    return id(this, 2);
  };
  function ie(a) {
    return Sa(a.length % 4 !== 0 ? a + "A" : a)
      .map(function (b) {
        return ((p = b.toString(2)), v(p, "padStart")).call(p, 8, "0");
      })
      .join("");
  }
  function je(a) {
    if (!/^[0-1]+$/.test(a))
      throw Error("Invalid input [" + a + "] not a bit string.");
    return parseInt(a, 2);
  }
  function ke(a) {
    if (!/^[0-1]+$/.test(a))
      throw Error("Invalid input [" + a + "] not a bit string.");
    for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++)
      b.length <= d && b.push(b[d - 1] + b[d - 2]),
        (c += parseInt(a[d], 2) * b[d]);
    return c;
  }
  function le(a) {
    var b = ie(a),
      c = je(b.slice(0, 6));
    a = je(b.slice(6, 12));
    var d = new he();
    c = Q(d, 1, cc(c), 0);
    a = Q(c, 2, cc(a), 0);
    b = b.slice(12);
    c = je(b.slice(0, 12));
    d = [];
    for (var e = b.slice(12).replace(/0+$/, ""), f = 0; f < c; f++) {
      if (e.length === 0)
        throw Error(
          "Found " +
            f +
            " of " +
            c +
            " sections [" +
            d +
            "] but reached end of input [" +
            b +
            "]"
        );
      var g = je(e[0]) === 0;
      e = e.slice(1);
      var h = me(e, b),
        k = d.length === 0 ? 0 : d[d.length - 1];
      k = ke(h) + k;
      e = e.slice(h.length);
      if (g) d.push(k);
      else {
        g = me(e, b);
        h = ke(g);
        for (var l = 0; l <= h; l++) d.push(k + l);
        e = e.slice(g.length);
      }
    }
    if (e.length > 0)
      throw Error(
        "Found " +
          c +
          " sections [" +
          d +
          "] but has remaining input [" +
          e +
          "], entire input [" +
          b +
          "]"
      );
    return Sc(a, 3, d, bc);
  }
  function me(a, b) {
    var c = a.indexOf("11");
    if (c === -1)
      throw Error(
        "Expected section bitstring but not found in [" +
          a +
          "] part of [" +
          b +
          "]"
      );
    return a.slice(0, c + 2);
  }
  var ne = "a".charCodeAt(),
    oe = Ad(fe),
    pe = Ad(ge);
  var qe = function (a) {
    this.i = L(a);
  };
  y(qe, W);
  var re = function () {
      var a = new qe();
      return Q(a, 1, kc(0), "0");
    },
    se = function (a) {
      var b = Number;
      var c = c === void 0 ? "0" : c;
      var d = M(a, 1);
      var e = !0;
      e = e === void 0 ? !1 : e;
      var f = typeof d;
      d =
        d == null
          ? d
          : f === "bigint"
          ? String(BigInt.asIntN(64, d))
          : ac(d)
          ? f === "string"
            ? gc(d)
            : e
            ? hc(d)
            : jc(d)
          : void 0;
      b = b(fd(d, c));
      a = id(a, 2);
      return new Date(b * 1e3 + a / 1e6);
    };
  var te = function (a) {
      if (/[^01]/.test(a))
        throw Error("Input bitstring " + a + " is malformed!");
      this.j = a;
      this.g = 0;
    },
    we = function (a) {
      var b = X(a, 16);
      return !!X(a, 1) === !0
        ? ((a = ue(a)),
          a.forEach(function (c) {
            if (c > b)
              throw Error("ID " + c + " is past MaxVendorId " + b + "!");
          }),
          a)
        : ve(a, b);
    },
    ue = function (a) {
      for (var b = X(a, 12), c = []; b--; ) {
        var d = !!X(a, 1) === !0,
          e = X(a, 16);
        if (d) for (d = X(a, 16); e <= d; e++) c.push(e);
        else c.push(e);
      }
      c.sort(function (f, g) {
        return f - g;
      });
      return c;
    },
    ve = function (a, b, c) {
      for (var d = [], e = 0; e < b; e++)
        if (X(a, 1)) {
          var f = e + 1;
          if (c && c.indexOf(f) === -1)
            throw Error("ID: " + f + " is outside of allowed values!");
          d.push(f);
        }
      return d;
    },
    X = function (a, b) {
      if (a.g + b > a.j.length)
        throw Error("Requested length " + b + " is past end of string.");
      var c = a.j.substring(a.g, a.g + b);
      a.g += b;
      return parseInt(c, 2);
    };
  te.prototype.skip = function (a) {
    this.g += a;
  };
  var ye = function (a) {
      try {
        var b = Sa(a.split(".")[0])
            .map(function (d) {
              return ((p = d.toString(2)), v(p, "padStart")).call(p, 8, "0");
            })
            .join(""),
          c = new te(b);
        b = {};
        b.tcString = a;
        b.gdprApplies = !0;
        c.skip(78);
        b.cmpId = X(c, 12);
        b.cmpVersion = X(c, 12);
        c.skip(30);
        b.tcfPolicyVersion = X(c, 6);
        b.isServiceSpecific = !!X(c, 1);
        b.useNonStandardStacks = !!X(c, 1);
        b.specialFeatureOptins = xe(ve(c, 12, pe), pe);
        b.purpose = {
          consents: xe(ve(c, 24, oe), oe),
          legitimateInterests: xe(ve(c, 24, oe), oe),
        };
        b.purposeOneTreatment = !!X(c, 1);
        b.publisherCC =
          String.fromCharCode(ne + X(c, 6)) + String.fromCharCode(ne + X(c, 6));
        b.vendor = {
          consents: xe(we(c), null),
          legitimateInterests: xe(we(c), null),
        };
        return b;
      } catch (d) {
        return null;
      }
    },
    xe = function (a, b) {
      var c = {};
      if (Array.isArray(b) && b.length !== 0) {
        b = x(b);
        for (var d = b.next(); !d.done; d = b.next())
          (d = d.value), (c[d] = a.indexOf(d) !== -1);
      } else
        for (a = x(a), b = a.next(); !b.done; b = a.next()) c[b.value] = !0;
      delete c[0];
      return c;
    };
  var ze = function (a) {
    this.i = L(a);
  };
  y(ze, W);
  var Ae = function (a, b) {
    var c = c === void 0 ? {} : c;
    this.error = a;
    this.context = b.context;
    this.msg = b.message || "";
    this.id = b.id || "jserror";
    this.meta = c;
  };
  var Be = null;
  function Ce(a) {
    a = a === void 0 ? z : a;
    return (a = a.performance) && a.now ? a.now() : null;
  }
  function De(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = de("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            h = Array.prototype.indexOf.call(g, e, void 0);
          h >= 0 && Array.prototype.splice.call(g, h, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      zd(e, "load", f);
      zd(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Fe = function (a) {
      var b = b === void 0 ? !1 : b;
      var c =
        "https://pagead2.googlesyndication.com/pagead/gen_204?id=rcs_internal";
      $d(a, function (d, e) {
        if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Ee(c, b);
    },
    Ee = function (a, b) {
      var c = window;
      b = b === void 0 ? !1 : b;
      var d = d === void 0 ? !1 : d;
      c.fetch
        ? ((b = {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors",
          }),
          d &&
            ((b.mode = "cors"),
            "setAttributionReporting" in XMLHttpRequest.prototype
              ? (b.attributionReporting = {
                  eventSourceEligible: "true",
                  triggerEligible: "false",
                })
              : (b.headers = {
                  "Attribution-Reporting-Eligible": "event-source",
                })),
          c.fetch(a, b))
        : De(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d);
    };
  function Ge(a, b) {
    try {
      var c = function (d) {
        var e = {};
        return [((e[d.ja] = d.ga), e)];
      };
      return JSON.stringify([
        a
          .filter(function (d) {
            return d.U;
          })
          .map(c),
        pd(b),
        a
          .filter(function (d) {
            return !d.U;
          })
          .map(c),
      ]);
    } catch (d) {
      return He(d, b), "";
    }
  }
  function He(a, b) {
    try {
      var c = a instanceof Error ? a : Error(String(a)),
        d = c.toString();
      c.name && d.indexOf(c.name) == -1 && (d += ": " + c.name);
      c.message && d.indexOf(c.message) == -1 && (d += ": " + c.message);
      if (c.stack)
        a: {
          var e = c.stack;
          a = d;
          try {
            e.indexOf(a) == -1 && (e = a + "\n" + e);
            for (var f; e != f; )
              (f = e),
                (e = e.replace(
                  RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),
                  "$1"
                ));
            d = e.replace(RegExp("\n *", "g"), "\n");
            break a;
          } catch (g) {
            d = a;
            break a;
          }
          d = void 0;
        }
      Fe({ m: d, b: V(b, 1) || null, v: U(b, 2) || null });
    } catch (g) {}
  }
  var Ie = function (a, b) {
    var c = new ze();
    a = Q(c, 1, J(a), 0);
    b = Q(a, 2, K(b), "");
    a = b.i;
    c = E(a);
    this.l = c & 2 ? b : zc(b.constructor, Hc(a, c, !0));
  };
  var Je = function (a) {
    this.i = L(a);
  };
  y(Je, W);
  var Le = function (a, b) {
      return R(a, 3, Ke, b == null ? b : Zb(b));
    },
    Ke = [1, 2, 3];
  var Me = function (a) {
    this.i = L(a);
  };
  y(Me, W);
  var Ne = [2, 4];
  var Oe = function (a) {
    this.i = L(a);
  };
  y(Oe, W);
  var Pe = function (a) {
      var b = new Oe();
      return Q(b, 1, K(a), "");
    },
    Qe = function (a, b) {
      var c = a.i,
        d = E(c);
      Ab(d);
      c = bd(c, d, Je, 4, 2, !0);
      b = b != null ? b : new Je();
      c.push(b);
      D(b.i) & 2 ? qb(c, 8) : qb(c, 16);
      return a;
    };
  var Re = function (a) {
    this.i = L(a);
  };
  y(Re, W);
  var Se = function (a) {
    this.i = L(a);
  };
  y(Se, W);
  var Te = function (a, b) {
      return Q(a, 1, J(b), 0);
    },
    Ue = function (a, b) {
      return Q(a, 2, J(b), 0);
    };
  var Ve = function (a) {
    this.i = L(a);
  };
  y(Ve, W);
  var We = [1, 2];
  var Xe = function (a) {
    this.i = L(a);
  };
  y(Xe, W);
  var Ye = function (a, b) {
      return cd(a, 1, b);
    },
    Ze = function (a, b) {
      return ed(a, 2, b);
    },
    $e = function (a, b) {
      return Sc(a, 4, b, bc);
    },
    af = function (a, b) {
      return ed(a, 5, b);
    },
    bf = function (a, b) {
      return Q(a, 6, J(b), 0);
    };
  var cf = function (a) {
    this.i = L(a);
  };
  y(cf, W);
  var df = [1, 2, 3, 4, 6];
  var ef = function (a) {
    this.i = L(a);
  };
  y(ef, W);
  var ff = function (a) {
    this.i = L(a);
  };
  y(ff, W);
  var gf = [2, 3, 4];
  var hf = function (a) {
    this.i = L(a);
  };
  y(hf, W);
  var jf = [3, 4, 5],
    kf = [6, 7];
  var lf = function (a) {
    this.i = L(a);
  };
  y(lf, W);
  var mf = [4, 5];
  var nf = function (a) {
    this.i = L(a);
  };
  y(nf, W);
  nf.prototype.getTagSessionCorrelator = function () {
    db(this, ob);
    return kd(this, 2);
  };
  var pf = function (a) {
      var b = new nf();
      return dd(b, 4, of, a);
    },
    of = [4, 5, 7, 8, 9];
  var qf = function (a) {
    this.i = L(a);
  };
  y(qf, W);
  var rf = function (a) {
    this.i = L(a);
  };
  y(rf, W);
  var sf = function (a) {
    this.i = L(a);
  };
  y(sf, W);
  sf.prototype.getTagSessionCorrelator = function () {
    db(this, ob);
    return kd(this, 1);
  };
  var tf = function (a) {
    this.i = L(a);
  };
  y(tf, W);
  var uf = [4, 6];
  var wf = function (a) {
      this.g = a;
      this.fb = new vf(this.g);
    },
    vf = function (a) {
      this.g = a;
      this.Ra = new xf(this.g);
    },
    xf = function (a) {
      this.g = a;
      this.outstream = new yf();
      this.request = new zf();
      this.Sa = new Af(this.g);
      this.Ua = new Bf(this.g);
    },
    Af = function (a) {
      this.g = a;
    };
  Af.prototype.ba = function (a) {
    var b = this.g,
      c = b.J,
      d = Qe(Qe(Pe("JwITQ"), Le(new Je(), a.da)), Le(new Je(), a.fa)),
      e = new Me();
    a = R(e, 2, Ne, kc(Math.round(a.ia)));
    d = cd(d, 3, a);
    c.call(b, d);
  };
  var Bf = function (a) {
    this.g = a;
  };
  Bf.prototype.ba = function (a) {
    var b = this.g,
      c = b.J,
      d = Qe(Qe(Pe("Pn3Upd"), Le(new Je(), a.da)), Le(new Je(), a.fa)),
      e = new Me();
    a = R(e, 2, Ne, kc(Math.round(a.ia)));
    d = cd(d, 3, a);
    c.call(b, d);
  };
  var yf = function () {},
    zf = function () {},
    Cf = function () {
      Ie.apply(this, arguments);
      this.Xa = new wf(this);
    };
  y(Cf, Ie);
  var Df = function () {
    Cf.apply(this, arguments);
  };
  y(Df, Cf);
  Df.prototype.eb = function () {
    this.o.apply(
      this,
      ja(
        ta.apply(0, arguments).map(function (a) {
          return { U: !0, ja: 2, ga: pd(a) };
        })
      )
    );
  };
  Df.prototype.V = function () {
    this.o.apply(
      this,
      ja(
        ta.apply(0, arguments).map(function (a) {
          return { U: !0, ja: 4, ga: pd(a) };
        })
      )
    );
  };
  Df.prototype.J = function () {
    this.o.apply(
      this,
      ja(
        ta.apply(0, arguments).map(function (a) {
          return { U: !1, ja: 1, ga: pd(a) };
        })
      )
    );
  };
  var Ef = function (a, b) {
    if (u.globalThis.fetch)
      u.globalThis
        .fetch(a, {
          method: "POST",
          body: b,
          keepalive: b.length < 65536,
          credentials: "omit",
          mode: "no-cors",
          redirect: "follow",
        })
        .catch(function () {});
    else {
      var c = new XMLHttpRequest();
      c.open("POST", a, !0);
      c.send(b);
    }
  };
  var Ff = function (a, b, c, d, e, f, g, h) {
    Df.call(this, a, b);
    this.P = c;
    this.O = d;
    this.R = e;
    this.M = f;
    this.N = g;
    this.A = h;
    this.g = [];
    this.j = null;
    this.I = !1;
  };
  y(Ff, Df);
  var Gf = function (a) {
    a.j !== null && (clearTimeout(a.j), (a.j = null));
    if (a.g.length) {
      var b = Ge(a.g, a.l);
      a.O(a.P + "?e=1", b);
      a.g = [];
    }
  };
  Ff.prototype.o = function () {
    var a = ta.apply(0, arguments),
      b = this;
    try {
      this.N && Ge(this.g.concat(a), this.l).length >= 65536 && Gf(this),
        this.A &&
          !this.I &&
          ((this.I = !0),
          this.A.g(function () {
            Gf(b);
          })),
        this.g.push.apply(this.g, ja(a)),
        this.g.length >= this.M && Gf(this),
        this.g.length &&
          this.j === null &&
          (this.j = setTimeout(function () {
            Gf(b);
          }, this.R));
    } catch (c) {
      He(c, this.l);
    }
  };
  var Hf = function (a, b, c, d, e, f) {
    Ff.call(
      this,
      a,
      b,
      "https://pagead2.googlesyndication.com/pagead/ping",
      Ef,
      c === void 0 ? 1e3 : c,
      d === void 0 ? 100 : d,
      (e === void 0 ? !1 : e) && !!u.globalThis.fetch,
      f
    );
  };
  y(Hf, Ff);
  var If = function (a, b) {
      this.g = a;
      this.defaultValue = b === void 0 ? !1 : b;
    },
    Jf = function (a, b) {
      this.g = a;
      this.defaultValue = b === void 0 ? 0 : b;
    };
  var Kf = new If(501898423),
    Lf = new If(642361450, !0),
    Mf = new If(45624259),
    Nf = new Jf(635239304, 100),
    Of = new Jf(523264412),
    Pf = new Jf(24),
    Qf = new (function (a, b) {
      b = b === void 0 ? [] : b;
      this.g = a;
      this.defaultValue = b;
    })(1934, [
      "AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==",
      "Amm8/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==",
      "A9uiHDzQFAhqALUhTgTYJcz9XrGH2y0/9AORwCSapUO/f7Uh7ysIzyszNkuWDLqNYg8446Uj48XIstBW1qv/wAQAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
      "A9R+gkZL3TWq+Z7RJ2L0c7ZN7FZD5z4mHmVvjrPitg/EMz9P3j5d3W7Vw5ZR9jtJGmWKltM4BO3smNzpCgwYuwwAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
    ]);
  var Rf = new If(203);
  var Sf = function (a) {
    this.i = L(a);
  };
  y(Sf, W);
  var Tf = function (a) {
    this.i = L(a);
  };
  y(Tf, W);
  var Uf = function (a) {
    this.i = L(a);
  };
  y(Uf, W);
  var Vf = function (a) {
    this.i = L(a);
  };
  y(Vf, W);
  var Wf = rd(Vf);
  var Xf = function (a) {
    this.g = a || { cookie: "" };
  };
  Xf.prototype.set = function (a, b, c) {
    var d = !1;
    if (typeof c === "object") {
      var e = c.yb;
      d = c.zb || !1;
      var f = c.domain || void 0;
      var g = c.path || void 0;
      var h = c.Wa;
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    h === void 0 && (h = -1);
    this.g.cookie =
      a +
      "=" +
      b +
      (f ? ";domain=" + f : "") +
      (g ? ";path=" + g : "") +
      (h < 0
        ? ""
        : h == 0
        ? ";expires=" + new Date(1970, 1, 1).toUTCString()
        : ";expires=" + new Date(Date.now() + h * 1e3).toUTCString()) +
      (d ? ";secure" : "") +
      (e != null ? ";samesite=" + e : "");
  };
  Xf.prototype.get = function (a, b) {
    for (
      var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f;
      e < d.length;
      e++
    ) {
      f = Aa(d[e]);
      if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
      if (f == a) return "";
    }
    return b;
  };
  Xf.prototype.isEmpty = function () {
    return !this.g.cookie;
  };
  Xf.prototype.clear = function () {
    for (
      var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0;
      f < a.length;
      f++
    )
      (e = Aa(a[f])),
        (d = e.indexOf("=")),
        d == -1
          ? (b.push(""), c.push(e))
          : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; a >= 0; a--)
      (c = b[a]),
        this.get(c),
        this.set(c, "", { Wa: 0, path: void 0, domain: void 0 });
  };
  function Yf(a) {
    a = Zf(a);
    try {
      var b = a ? Wf(a) : null;
    } catch (c) {
      b = null;
    }
    return b ? S(b, Uf, 4) || null : null;
  }
  function Zf(a) {
    a = new Xf(a).get("FCCDCF", "");
    if (a)
      if (v(a, "startsWith").call(a, "%"))
        try {
          var b = decodeURIComponent(a);
        } catch (c) {
          b = null;
        }
      else b = a;
    else b = null;
    return b;
  }
  Ad(fe).map(function (a) {
    return Number(a);
  });
  Ad(ge).map(function (a) {
    return Number(a);
  });
  var $f = function (a) {
      this.g = a;
    },
    bg = function (a) {
      a.__tcfapiPostMessageReady || ag(new $f(a));
    },
    ag = function (a) {
      a.j = function (b) {
        var c = typeof b.data === "string";
        try {
          var d = c ? JSON.parse(b.data) : b.data;
        } catch (f) {
          return;
        }
        var e = d.__tcfapiCall;
        e &&
          (e.command === "ping" ||
            e.command === "addEventListener" ||
            e.command === "removeEventListener") &&
          (0, a.g.__tcfapi)(
            e.command,
            e.version,
            function (f, g) {
              var h = {};
              h.__tcfapiReturn =
                e.command === "removeEventListener"
                  ? { success: f, callId: e.callId }
                  : { returnValue: f, success: g, callId: e.callId };
              f = c ? JSON.stringify(h) : h;
              b.source &&
                typeof b.source.postMessage === "function" &&
                b.source.postMessage(f, b.origin);
              return f;
            },
            e.parameter
          );
      };
      a.g.addEventListener("message", a.j);
      a.g.__tcfapiPostMessageReady = !0;
    };
  var cg = function (a) {
      this.g = a;
      this.j = null;
    },
    eg = function (a) {
      a.__uspapiPostMessageReady || dg(new cg(a));
    },
    dg = function (a) {
      a.j = function (b) {
        var c = typeof b.data === "string";
        try {
          var d = c ? JSON.parse(b.data) : b.data;
        } catch (f) {
          return;
        }
        var e = d.__uspapiCall;
        e &&
          e.command === "getUSPData" &&
          a.g.__uspapi(e.command, e.version, function (f, g) {
            var h = {};
            h.__uspapiReturn = { returnValue: f, success: g, callId: e.callId };
            f = c ? JSON.stringify(h) : h;
            b.source &&
              typeof b.source.postMessage === "function" &&
              b.source.postMessage(f, b.origin);
            return f;
          });
      };
      a.g.addEventListener("message", a.j);
      a.g.__uspapiPostMessageReady = !0;
    };
  var fg = function (a) {
    this.i = L(a);
  };
  y(fg, W);
  var gg = function (a) {
    this.i = L(a);
  };
  y(gg, W);
  var hg = rd(gg);
  function ig(a, b, c) {
    function d(m) {
      if (m.length < 10) return null;
      var n = h(m.slice(0, 4));
      n = k(n);
      m = h(m.slice(6, 10));
      m = l(m);
      return "1" + n + m + "N";
    }
    function e(m) {
      if (m.length < 10) return null;
      var n = h(m.slice(0, 6));
      n = k(n);
      m = h(m.slice(6, 10));
      m = l(m);
      return "1" + n + m + "N";
    }
    function f(m) {
      if (m.length < 12) return null;
      var n = h(m.slice(0, 6));
      n = k(n);
      m = h(m.slice(8, 12));
      m = l(m);
      return "1" + n + m + "N";
    }
    function g(m) {
      if (m.length < 18) return null;
      var n = h(m.slice(0, 8));
      n = k(n);
      m = h(m.slice(12, 18));
      m = l(m);
      return "1" + n + m + "N";
    }
    function h(m) {
      for (var n = [], r = 0, t = 0; t < m.length / 2; t++)
        n.push(je(m.slice(r, r + 2))), (r += 2);
      return n;
    }
    function k(m) {
      return m.every(function (n) {
        return n === 1;
      })
        ? "Y"
        : "N";
    }
    function l(m) {
      return m.some(function (n) {
        return n === 1;
      })
        ? "Y"
        : "N";
    }
    if (a.length === 0) return null;
    a = a.split(".");
    if (a.length > 2) return null;
    a = ie(a[0]);
    var q = je(a.slice(0, 6));
    a = a.slice(6);
    if (q !== 1) return null;
    switch (b) {
      case 8:
        return d(a);
      case 10:
      case 12:
      case 9:
        return e(a);
      case 11:
        return f(a);
      case 7:
        return c ? g(a) : null;
      default:
        return null;
    }
  }
  function jg(a, b) {
    var c = a.document,
      d = function () {
        if (!a.frames[b])
          if (c.body) {
            var e = de("IFRAME", c);
            e.style.display = "none";
            e.style.width = "0px";
            e.style.height = "0px";
            e.style.border = "none";
            e.style.zIndex = "-1000";
            e.style.left = "-1000px";
            e.style.top = "-1000px";
            e.name = b;
            c.body.appendChild(e);
          } else a.setTimeout(d, 5);
      };
    d();
  }
  var mg = function (a, b) {
      this.g = a;
      this.o = b;
      b = Zf(this.g.document);
      try {
        var c = b ? Wf(b) : null;
      } catch (e) {
        c = null;
      }
      (b = c)
        ? ((c = S(b, Tf, 5) || null),
          (b = T(b, Sf, 7, P())),
          (b = kg(b != null ? b : [])),
          (c = { ya: c, Ba: b }))
        : (c = { ya: null, Ba: null });
      b = c;
      c = lg(this, b.Ba);
      b = b.ya;
      if (b != null && nc(M(b, 2)) != null && U(b, 2).length !== 0) {
        var d = $c(b, qe, 1, !1) !== void 0 ? S(b, qe, 1) : re();
        b = { uspString: U(b, 2), Z: se(d) };
      } else b = null;
      this.l =
        b && c
          ? c.Z > b.Z
            ? c.uspString
            : b.uspString
          : b
          ? b.uspString
          : c
          ? c.uspString
          : null;
      this.tcString =
        (c = Yf(a.document)) && nc(M(c, 1)) != null ? U(c, 1) : null;
      this.j = (a = Yf(a.document)) && nc(M(a, 2)) != null ? U(a, 2) : null;
    },
    qg = function (a) {
      var b = ng(Lf);
      a !== a.top ||
        a.__uspapi ||
        a.frames.__uspapiLocator ||
        ((a = new mg(a, b)), og(a), pg(a));
    },
    og = function (a) {
      !a.l ||
        a.g.__uspapi ||
        a.g.frames.__uspapiLocator ||
        ((a.g.__uspapiManager = "fc"),
        jg(a.g, "__uspapiLocator"),
        ya(
          "__uspapi",
          function (b, c, d) {
            typeof d === "function" &&
              b === "getUSPData" &&
              d({ version: 1, uspString: a.l }, !0);
          },
          a.g
        ),
        eg(a.g));
    },
    kg = function (a) {
      a = v(a, "find").call(a, function (b) {
        return b && V(b, 1) === 13;
      });
      if (a == null ? 0 : nc(M(a, 2)) != null)
        try {
          return hg(U(a, 2));
        } catch (b) {}
      return null;
    },
    lg = function (a, b) {
      if (
        b == null ||
        nc(M(b, 1)) == null ||
        U(b, 1).length === 0 ||
        T(b, fg, 2, P()).length === 0
      )
        return null;
      var c = U(b, 1);
      try {
        var d = le(c.split("~")[0]);
        var e = v(c, "includes").call(c, "~") ? c.split("~").slice(1) : [];
      } catch (f) {
        return null;
      }
      b = T(b, fg, 2, P()).reduce(function (f, g) {
        return kd(rg(f), 1) > kd(rg(g), 1) ? f : g;
      });
      d = Mc(d, 3, dc, P()).indexOf(id(b, 1));
      return d === -1 || d >= e.length
        ? null
        : { uspString: ig(e[d], id(b, 1), a.o), Z: se(rg(b)) };
    },
    rg = function (a) {
      return $c(a, qe, 2, !1) !== void 0 ? S(a, qe, 2) : re();
    },
    pg = function (a) {
      !a.tcString ||
        a.g.__tcfapi ||
        a.g.frames.__tcfapiLocator ||
        ((a.g.__tcfapiManager = "fc"),
        jg(a.g, "__tcfapiLocator"),
        (a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || []),
        ya(
          "__tcfapi",
          function (b, c, d, e) {
            if (typeof d === "function")
              if (c && (c > 2.2 || c <= 1)) d(null, !1);
              else
                switch (((c = a.g.__tcfapiEventListeners), b)) {
                  case "ping":
                    d({
                      gdprApplies: !0,
                      cmpLoaded: !0,
                      cmpStatus: "loaded",
                      displayStatus: "disabled",
                      apiVersion: "2.2",
                      cmpVersion: 2,
                      cmpId: 300,
                    });
                    break;
                  case "addEventListener":
                    b = c.push(d) - 1;
                    a.tcString
                      ? ((e = ye(a.tcString)),
                        (e.addtlConsent = a.j != null ? a.j : void 0),
                        (e.cmpStatus = "loaded"),
                        (e.eventStatus = "tcloaded"),
                        b != null && (e.listenerId = b),
                        (b = e))
                      : (b = null);
                    d(b, !0);
                    break;
                  case "removeEventListener":
                    e !== void 0 && c[e] ? ((c[e] = null), d(!0)) : d(!1);
                    break;
                  case "getInAppTCData":
                  case "getVendorList":
                    d(null, !1);
                    break;
                  case "getTCData":
                    d(null, !1);
                }
          },
          a.g
        ),
        bg(a.g));
    };
  function sg(a, b) {
    var c = T(a, hf, 2, P());
    if (!c.length) return tg(a, b);
    a = V(a, 1);
    if (a === 1) {
      var d = sg(c[0], b);
      return d.success ? { success: !0, value: !d.value } : d;
    }
    c = La(c, function (h) {
      return sg(h, b);
    });
    switch (a) {
      case 2:
        var e;
        return (e =
          (d = v(c, "find").call(c, function (h) {
            return h.success && !h.value;
          })) != null
            ? d
            : v(c, "find").call(c, function (h) {
                return !h.success;
              })) != null
          ? e
          : { success: !0, value: !0 };
      case 3:
        var f, g;
        return (g =
          (f = v(c, "find").call(c, function (h) {
            return h.success && h.value;
          })) != null
            ? f
            : v(c, "find").call(c, function (h) {
                return !h.success;
              })) != null
          ? g
          : { success: !0, value: !1 };
      default:
        return { success: !1, D: 3 };
    }
  }
  function tg(a, b) {
    var c = Wc(a, jf);
    a: {
      switch (c) {
        case 3:
          var d = nd(a, 3, jf);
          break a;
        case 4:
          d = nd(a, 4, jf);
          break a;
        case 5:
          d = nd(a, 5, jf);
          break a;
      }
      d = void 0;
    }
    if (!d) return { success: !1, D: 2 };
    b = (b = b[c]) && b[d];
    if (!b) return { success: !1, L: d, S: c, D: 1 };
    try {
      var e = b.apply;
      var f = md(a, 8);
      var g = e.call(b, null, ja(f));
    } catch (h) {
      return { success: !1, L: d, S: c, D: 2 };
    }
    e = V(a, 1);
    if (e === 4) return { success: !0, value: !!g };
    if (e === 5) return { success: !0, value: g != null };
    if (e === 12) a = U(a, Xc(a, kf, 7));
    else
      a: {
        switch (c) {
          case 4:
            a = ld(a, Xc(a, kf, 6));
            break a;
          case 5:
            a = U(a, Xc(a, kf, 7));
            break a;
        }
        a = void 0;
      }
    if (a == null) return { success: !1, L: d, S: c, D: 3 };
    if (e === 6) return { success: !0, value: g === a };
    if (e === 9)
      return { success: !0, value: g != null && Ca(String(g), a) === 0 };
    if (g == null) return { success: !1, L: d, S: c, D: 4 };
    switch (e) {
      case 7:
        c = g < a;
        break;
      case 8:
        c = g > a;
        break;
      case 12:
        c = Ob(a) && Ob(g) && new RegExp(a).test(g);
        break;
      case 10:
        c = g != null && Ca(String(g), a) === -1;
        break;
      case 11:
        c = g != null && Ca(String(g), a) === 1;
        break;
      default:
        return { success: !1, D: 3 };
    }
    return { success: !0, value: c };
  }
  function ug(a, b) {
    return a
      ? b
        ? sg(a, b)
        : { success: !1, D: 1 }
      : { success: !0, value: !0 };
  }
  var Yc = function (a) {
    this.i = L(a);
  };
  y(Yc, W);
  var vg = function (a) {
    this.i = L(a);
  };
  y(vg, W);
  vg.prototype.getValue = function () {
    return S(this, Yc, 2);
  };
  var wg = function (a) {
    this.i = L(a);
  };
  y(wg, W);
  var xg = rd(wg),
    yg = [1, 2, 3, 6, 7, 8];
  var zg = function (a, b, c) {
      var d = d === void 0 ? new Hf(6, "unknown", b) : d;
      this.A = a;
      this.o = c;
      this.j = d;
      this.g = [];
      this.l = a > 0 && Zd() < 1 / a;
    },
    Bg = function (a, b, c, d, e, f) {
      if (a.l) {
        var g = Ue(Te(new Se(), b), c);
        b = bf(Ze(Ye(af($e(new Xe(), d), e), g), a.g.slice()), f);
        b = pf(b);
        a.j.V(Ag(a, b));
        if (
          f === 1 ||
          f === 3 ||
          (f === 4 &&
            !a.g.some(function (h) {
              return V(h, 1) === V(g, 1) && V(h, 2) === c;
            }))
        )
          a.g.push(g), a.g.length > 100 && a.g.shift();
      }
    },
    Cg = function (a, b, c, d) {
      if (a.l) {
        var e = new Re();
        b = O(e, 1, cc(b));
        c = O(b, 2, cc(c));
        d = O(c, 3, J(d));
        c = new nf();
        d = dd(c, 8, of, d);
        a.j.V(Ag(a, d));
      }
    },
    Dg = function (a, b, c, d, e) {
      if (a.l) {
        var f = new lf();
        b = cd(f, 1, b);
        c = O(b, 2, J(c));
        d = O(c, 3, cc(d));
        if (e.S === void 0) R(d, 4, mf, J(e.D));
        else
          switch (e.S) {
            case 3:
              c = new ff();
              c = R(c, 2, gf, J(e.L));
              e = O(c, 1, J(e.D));
              dd(d, 5, mf, e);
              break;
            case 4:
              c = new ff();
              c = R(c, 3, gf, J(e.L));
              e = O(c, 1, J(e.D));
              dd(d, 5, mf, e);
              break;
            case 5:
              (c = new ff()),
                (c = R(c, 4, gf, J(e.L))),
                (e = O(c, 1, J(e.D))),
                dd(d, 5, mf, e);
          }
        e = new nf();
        e = dd(e, 9, of, d);
        a.j.V(Ag(a, e));
      }
    },
    Ag = function (a, b) {
      var c = Date.now();
      c = v(Number, "isFinite").call(Number, c) ? Math.round(c) : 0;
      b = Q(b, 1, kc(c), "0");
      c = ee(window);
      b = Q(b, 2, kc(c), "0");
      return Q(b, 6, kc(a.A), "0");
    };
  var I = function (a) {
    var b = "ca";
    if (a.ca && a.hasOwnProperty(b)) return a.ca;
    b = new a();
    return (a.ca = b);
  };
  var Eg = function () {
    var a = {};
    this.C = ((a[3] = {}), (a[4] = {}), (a[5] = {}), a);
  };
  var Fg = /^true$/.test("false");
  function Gg(a, b) {
    switch (b) {
      case 1:
        return nd(a, 1, yg);
      case 2:
        return nd(a, 2, yg);
      case 3:
        return nd(a, 3, yg);
      case 6:
        return nd(a, 6, yg);
      case 8:
        return nd(a, 8, yg);
      default:
        return null;
    }
  }
  function Hg(a, b) {
    if (!a) return null;
    switch (b) {
      case 1:
        return hd(a, 1);
      case 7:
        return U(a, 3);
      case 2:
        return ld(a, 2);
      case 3:
        return U(a, 3);
      case 6:
        return md(a, 4);
      case 8:
        return md(a, 4);
      default:
        return null;
    }
  }
  var Ig = yd(function () {
    if (!Fg) return {};
    try {
      var a;
      var b = b === void 0 ? window : b;
      try {
        var c = b.sessionStorage;
      } catch (e) {
        c = null;
      }
      var d = (a = c) == null ? void 0 : a.getItem("GGDFSSK");
      if (d) return JSON.parse(d);
    } catch (e) {}
    return {};
  });
  function Jg(a, b, c, d) {
    var e = (d = d === void 0 ? 0 : d),
      f,
      g;
    I(Kg).l[e] =
      (g = (f = I(Kg).l[e]) == null ? void 0 : f.add(b)) != null
        ? g
        : new u.Set().add(b);
    e = Ig();
    if (e[b] != null) return e[b];
    b = Lg(d)[b];
    if (!b) return c;
    b = xg(JSON.stringify(b));
    b = Mg(b);
    a = Hg(b, a);
    return a != null ? a : c;
  }
  function Mg(a) {
    var b = I(Eg).C;
    if (b && Wc(a, yg) !== 8) {
      var c = Ma(T(a, vg, 5, P()), function (f) {
        f = ug(S(f, hf, 1), b);
        return f.success && f.value;
      });
      if (c) {
        var d;
        return (d = c.getValue()) != null ? d : null;
      }
    }
    var e;
    return (e = S(a, Yc, 4)) != null ? e : null;
  }
  var Kg = function () {
    this.j = {};
    this.o = [];
    this.l = {};
    this.g = new u.Map();
  };
  function Ng(a, b, c) {
    return !!Jg(1, a, b === void 0 ? !1 : b, c);
  }
  function Og(a, b, c) {
    b = b === void 0 ? 0 : b;
    a = Number(Jg(2, a, b, c));
    return isNaN(a) ? b : a;
  }
  function Pg(a, b, c) {
    b = b === void 0 ? "" : b;
    a = Jg(3, a, b, c);
    return typeof a === "string" ? a : b;
  }
  function Qg(a, b, c) {
    b = b === void 0 ? [] : b;
    a = Jg(6, a, b, c);
    return Array.isArray(a) ? a : b;
  }
  function Rg(a, b, c) {
    b = b === void 0 ? [] : b;
    a = Jg(8, a, b, c);
    return Array.isArray(a) ? a : b;
  }
  function Lg(a) {
    return I(Kg).j[a] || (I(Kg).j[a] = {});
  }
  function Sg(a, b) {
    var c = Lg(b);
    $d(a, function (d, e) {
      if (c[e]) {
        d = xg(JSON.stringify(d));
        if (gd(d, Xc(d, yg, 8)) != null) {
          var f = xg(JSON.stringify(c[e])),
            g = Zc(d);
          f = md(ad(f, Yc, 4), 4);
          Tc(g, f);
        }
        c[e] = pd(d);
      } else c[e] = d;
    });
  }
  function Tg(a, b, c, d, e) {
    e = e === void 0 ? !1 : e;
    var f = [],
      g = [];
    b = x(b);
    for (var h = b.next(); !h.done; h = b.next()) {
      h = h.value;
      for (var k = Lg(h), l = x(a), q = l.next(); !q.done; q = l.next()) {
        q = q.value;
        var m = Wc(q, yg),
          n = Gg(q, m);
        if (n) {
          var r = void 0,
            t = void 0,
            B = void 0;
          var C =
            (r =
              (B = I(Kg).g.get(h)) == null
                ? void 0
                : (t = B.get(n)) == null
                ? void 0
                : t.slice(0)) != null
              ? r
              : [];
          a: {
            r = n;
            t = m;
            B = new cf();
            switch (t) {
              case 1:
                R(B, 1, df, J(r));
                break;
              case 2:
                R(B, 2, df, J(r));
                break;
              case 3:
                R(B, 3, df, J(r));
                break;
              case 6:
                R(B, 4, df, J(r));
                break;
              case 8:
                R(B, 6, df, J(r));
                break;
              default:
                C = void 0;
                break a;
            }
            Sc(B, 5, C, bc);
            C = B;
          }
          if ((r = C))
            (t = void 0), (r = !((t = I(Kg).l[h]) == null || !t.has(n)));
          r && f.push(C);
          if (m === 8 && k[n])
            (C = xg(JSON.stringify(k[n]))),
              (m = Zc(q)),
              (C = md(ad(C, Yc, 4), 4)),
              Tc(m, C);
          else {
            if ((m = C))
              (r = void 0), (m = !((r = I(Kg).g.get(h)) == null || !r.has(n)));
            m && g.push(C);
          }
          e ||
            ((m = n),
            (C = h),
            (r = d),
            (t = I(Kg)),
            t.g.has(C) || t.g.set(C, new u.Map()),
            t.g.get(C).has(m) || t.g.get(C).set(m, []),
            r && t.g.get(C).get(m).push(r));
          k[n] = pd(q);
        }
      }
    }
    if (f.length || g.length)
      (a = d != null ? d : void 0),
        c.l &&
          c.o &&
          ((d = new ef()),
          (f = ed(d, 2, f)),
          (g = ed(f, 3, g)),
          a && Q(g, 1, cc(a), 0),
          (f = new nf()),
          (g = dd(f, 7, of, g)),
          c.j.V(Ag(c, g)));
  }
  function Ug(a, b) {
    b = Lg(b);
    a = x(a);
    for (var c = a.next(); !c.done; c = a.next()) {
      c = c.value;
      var d = xg(JSON.stringify(c)),
        e = Wc(d, yg);
      (d = Gg(d, e)) && (b[d] || (b[d] = c));
    }
  }
  function Vg() {
    return v(Object, "keys")
      .call(Object, I(Kg).j)
      .map(function (a) {
        return Number(a);
      });
  }
  function Wg(a) {
    ((p = I(Kg).o), v(p, "includes")).call(p, a) || Sg(Lg(4), a);
  }
  function Y(a, b, c) {
    c.hasOwnProperty(a) || Object.defineProperty(c, String(a), { value: b });
  }
  function Z(a, b, c) {
    return b[a] || c;
  }
  function Xg(a) {
    Y(5, Ng, a);
    Y(6, Og, a);
    Y(7, Pg, a);
    Y(8, Qg, a);
    Y(17, Rg, a);
    Y(13, Ug, a);
    Y(15, Wg, a);
  }
  function Yg(a) {
    Y(
      4,
      function (b) {
        I(Eg).C = b;
      },
      a
    );
    Y(
      9,
      function (b, c) {
        var d = I(Eg);
        d.C[3][b] == null && (d.C[3][b] = c);
      },
      a
    );
    Y(
      10,
      function (b, c) {
        var d = I(Eg);
        d.C[4][b] == null && (d.C[4][b] = c);
      },
      a
    );
    Y(
      11,
      function (b, c) {
        var d = I(Eg);
        d.C[5][b] == null && (d.C[5][b] = c);
      },
      a
    );
    Y(
      14,
      function (b) {
        for (
          var c = I(Eg), d = x([3, 4, 5]), e = d.next();
          !e.done;
          e = d.next()
        )
          (e = e.value), v(Object, "assign").call(Object, c.C[e], b[e]);
      },
      a
    );
  }
  function Zg(a) {
    a.hasOwnProperty("init-done") ||
      Object.defineProperty(a, "init-done", { value: !0 });
  }
  var $g = function () {};
  $g.prototype.l = function () {};
  $g.prototype.j = function () {};
  $g.prototype.g = function () {
    return [];
  };
  var ah = function (a, b, c) {
    a.j = function (d, e) {
      Z(2, b, function () {
        return [];
      })(d, c, e);
    };
    a.g = function () {
      return Z(3, b, function () {
        return [];
      })(c);
    };
    a.l = function (d) {
      Z(16, b, function () {})(d, c);
    };
  };
  function bh(a) {
    I($g).l(a);
  }
  function ch(a, b) {
    try {
      var c = a.split(".");
      a = z;
      for (var d = 0, e; a != null && d < c.length; d++)
        (e = a), (a = a[c[d]]), typeof a === "function" && (a = e[c[d]]());
      var f = a;
      if (typeof f === b) return f;
    } catch (g) {}
  }
  var dh = {},
    eh = {},
    fh = {},
    gh = {},
    hh =
      ((gh[3] =
        ((dh[8] = function (a) {
          try {
            return wa(a) != null;
          } catch (b) {}
        }),
        (dh[9] = function (a) {
          try {
            var b = wa(a);
          } catch (c) {
            return;
          }
          if ((a = typeof b === "function"))
            (b = b && b.toString && b.toString()),
              (a = typeof b === "string" && b.indexOf("[native code]") != -1);
          return a;
        }),
        (dh[10] = function () {
          return window === window.top;
        }),
        (dh[6] = function (a) {
          var b = I($g).g();
          return Array.prototype.indexOf.call(b, Number(a), void 0) >= 0;
        }),
        (dh[27] = function (a) {
          a = ch(a, "boolean");
          return a !== void 0 ? a : void 0;
        }),
        (dh[60] = function (a) {
          try {
            return !!z.document.querySelector(a);
          } catch (b) {}
        }),
        (dh[80] = function (a) {
          try {
            return !!z.matchMedia(a).matches;
          } catch (b) {}
        }),
        (dh[69] = function (a) {
          var b = z.document;
          b = b === void 0 ? document : b;
          var c;
          return !(
            (c = b.featurePolicy) == null ||
            !((p = c.features()), v(p, "includes")).call(p, a)
          );
        }),
        (dh[70] = function (a) {
          var b = z.document;
          b = b === void 0 ? document : b;
          var c;
          return !(
            (c = b.featurePolicy) == null ||
            !((p = c.allowedFeatures()), v(p, "includes")).call(p, a)
          );
        }),
        (dh[79] = function (a) {
          var b = z.navigator;
          b = b === void 0 ? navigator : b;
          try {
            var c, d;
            var e = !!((c = b.protectedAudience) == null
              ? 0
              : (d = c.queryFeatureSupport) == null
              ? 0
              : d.call(c, a));
          } catch (f) {
            e = !1;
          }
          return e;
        }),
        dh)),
      (gh[4] =
        ((eh[3] = function () {
          return be();
        }),
        (eh[6] = function (a) {
          a = ch(a, "number");
          return a !== void 0 ? a : void 0;
        }),
        eh)),
      (gh[5] =
        ((fh[2] = function () {
          return window.location.href;
        }),
        (fh[3] = function () {
          try {
            return window.top.location.hash;
          } catch (a) {
            return "";
          }
        }),
        (fh[4] = function (a) {
          a = ch(a, "string");
          return a !== void 0 ? a : void 0;
        }),
        fh)),
      gh);
  function ih() {
    var a = a === void 0 ? z : a;
    return a.ggeac || (a.ggeac = {});
  }
  var jh = function (a) {
    this.i = L(a);
  };
  y(jh, W);
  jh.prototype.getId = function () {
    return id(this, 1);
  };
  var kh = function (a) {
    this.i = L(a);
  };
  y(kh, W);
  var lh = function (a) {
    return T(a, jh, 2, P());
  };
  var mh = function (a) {
    this.i = L(a);
  };
  y(mh, W);
  var nh = function (a) {
    this.i = L(a);
  };
  y(nh, W);
  var oh = function (a) {
    this.i = L(a);
  };
  y(oh, W);
  function ph(a) {
    var b = {};
    return qh(
      ((b[0] = new u.Map()), (b[1] = new u.Map()), (b[2] = new u.Map()), b),
      a
    );
  }
  function qh(a, b) {
    for (
      var c = new u.Map(), d = x(v(a[1], "entries").call(a[1])), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = x(e.value);
      e = f.next().value;
      f = f.next().value;
      f = f[f.length - 1];
      c.set(e, f.Ia + f.Ea * f.Fa);
    }
    b = x(b);
    for (d = b.next(); !d.done; d = b.next())
      for (
        d = d.value, e = T(d, kh, 2, P()), e = x(e), f = e.next();
        !f.done;
        f = e.next()
      )
        if (((f = f.value), lh(f).length !== 0)) {
          var g = jd(f, 8);
          if (V(f, 4) && !V(f, 13) && !V(f, 14)) {
            var h = void 0;
            g = (h = c.get(V(f, 4))) != null ? h : 0;
            h = jd(f, 1) * lh(f).length;
            c.set(V(f, 4), g + h);
          }
          h = [];
          for (var k = 0; k < lh(f).length; k++) {
            var l = {
              Ia: g,
              Ea: jd(f, 1),
              Fa: lh(f).length,
              Ya: k,
              T: V(d, 1),
              W: f,
              G: lh(f)[k],
            };
            h.push(l);
          }
          rh(a[2], V(f, 10), h) ||
            rh(a[1], V(f, 4), h) ||
            rh(a[0], lh(f)[0].getId(), h);
        }
    return a;
  }
  function rh(a, b, c) {
    if (!b) return !1;
    a.has(b) || a.set(b, []);
    var d;
    (d = a.get(b)).push.apply(d, ja(c));
    return !0;
  }
  function sh(a) {
    a = a === void 0 ? Zd() : a;
    return function (b) {
      return ae(b + " + " + a) % 1e3;
    };
  }
  var th = [12, 13, 20],
    uh = function (a, b, c, d) {
      d = d === void 0 ? {} : d;
      var e = d.aa === void 0 ? !1 : d.aa;
      d = d.bb === void 0 ? [] : d.bb;
      this.K = a;
      this.B = c;
      this.o = {};
      this.aa = e;
      a = {};
      this.g = ((a[b] = []), (a[4] = []), a);
      this.j = {};
      this.l = {};
      var f;
      if (Be === null) {
        Be = "";
        try {
          b = "";
          try {
            b = z.top.location.hash;
          } catch (g) {
            b = z.location.hash;
          }
          b && (Be = (f = b.match(/\bdeid=([\d,]+)/)) ? f[1] : "");
        } catch (g) {}
      }
      if ((f = Be))
        for (f = x(f.split(",") || []), b = f.next(); !b.done; b = f.next())
          (b = Number(b.value)) && (this.j[b] = !0);
      d = x(d);
      for (f = d.next(); !f.done; f = d.next()) this.j[f.value] = !0;
    },
    xh = function (a, b, c, d) {
      var e = [],
        f;
      if ((f = b !== 9)) a.o[b] ? (f = !0) : ((a.o[b] = !0), (f = !1));
      if (f) return Bg(a.B, b, c, e, [], 4), e;
      f = v(th, "includes").call(th, b);
      for (
        var g = [], h = [], k = x([0, 1, 2]), l = k.next();
        !l.done;
        l = k.next()
      ) {
        l = l.value;
        for (
          var q = x(v(a.K[l], "entries").call(a.K[l])), m = q.next();
          !m.done;
          m = q.next()
        ) {
          var n = x(m.value);
          m = n.next().value;
          n = n.next().value;
          var r = m,
            t = n;
          m = new Ve();
          n = t.filter(function (Va) {
            return Va.T === b && a.j[Va.G.getId()] && vh(a, Va);
          });
          if (n.length)
            for (m = x(n), n = m.next(); !n.done; n = m.next())
              h.push(n.value.G);
          else if (!a.aa) {
            n = void 0;
            l === 2 ? ((n = d[1]), R(m, 2, We, J(r))) : (n = d[0]);
            var B = void 0,
              C = void 0;
            n =
              (C = (B = n) == null ? void 0 : B(String(r))) != null
                ? C
                : l === 2 && V(t[0].W, 11) === 1
                ? void 0
                : d[0](String(r));
            if (n !== void 0) {
              r = x(t);
              for (t = r.next(); !t.done; t = r.next())
                if (((t = t.value), t.T === b)) {
                  B = n - t.Ia;
                  var la = t;
                  C = la.Ea;
                  var mb = la.Fa;
                  la = la.Ya;
                  B < 0 ||
                    B >= C * mb ||
                    B % mb !== la ||
                    !vh(a, t) ||
                    ((B = V(t.W, 13)),
                    B !== 0 &&
                      B !== void 0 &&
                      ((C = a.l[String(B)]),
                      C !== void 0 && C !== t.G.getId()
                        ? Cg(a.B, a.l[String(B)], t.G.getId(), B)
                        : (a.l[String(B)] = t.G.getId())),
                    h.push(t.G));
                }
              Wc(m, We) !== 0 && (Q(m, 3, cc(n), 0), g.push(m));
            }
          }
        }
      }
      d = x(h);
      for (h = d.next(); !h.done; h = d.next())
        (h = h.value),
          (k = h.getId()),
          e.push(k),
          wh(a, k, f ? 4 : c),
          Tg(T(h, wg, 2, P()), f ? Vg() : [c], a.B, k);
      Bg(a.B, b, c, e, g, 1);
      return e;
    },
    wh = function (a, b, c) {
      a.g[c] || (a.g[c] = []);
      a = a.g[c];
      v(a, "includes").call(a, b) || a.push(b);
    },
    vh = function (a, b) {
      var c = I(Eg).C,
        d = ug(S(b.W, hf, 3), c);
      if (!d.success) return Dg(a.B, S(b.W, hf, 3), b.T, b.G.getId(), d), !1;
      if (!d.value) return !1;
      c = ug(S(b.G, hf, 3), c);
      return c.success
        ? c.value
          ? !0
          : !1
        : (Dg(a.B, S(b.G, hf, 3), b.T, b.G.getId(), c), !1);
    },
    yh = function (a, b) {
      b = b
        .map(function (c) {
          return new mh(c);
        })
        .filter(function (c) {
          return !v(th, "includes").call(th, V(c, 1));
        });
      a.K = qh(a.K, b);
    },
    zh = function (a, b) {
      Y(
        1,
        function (c) {
          a.j[c] = !0;
        },
        b
      );
      Y(
        2,
        function (c, d, e) {
          return xh(a, c, d, e);
        },
        b
      );
      Y(
        3,
        function (c) {
          return (a.g[c] || []).concat(a.g[4]);
        },
        b
      );
      Y(
        12,
        function (c) {
          return void yh(a, c);
        },
        b
      );
      Y(
        16,
        function (c, d) {
          return void wh(a, c, d);
        },
        b
      );
    };
  var Ah = function () {
    var a = {};
    this.g = function (b, c) {
      return a[b] != null ? a[b] : c;
    };
    this.j = function (b, c) {
      return a[b] != null ? a[b] : c;
    };
    this.I = function (b, c) {
      return a[b] != null ? a[b] : c;
    };
    this.l = function (b, c) {
      return a[b] != null ? a[b] : c;
    };
    this.A = function (b, c) {
      return a[b] != null ? c.concat(a[b]) : c;
    };
    this.o = function () {};
  };
  function ng(a) {
    return I(Ah).g(a.g, a.defaultValue);
  }
  function Bh(a) {
    return I(Ah).j(a.g, a.defaultValue);
  }
  var Ch = function () {
      this.g = function () {};
    },
    Dh = function (a, b) {
      a.g = Z(14, b, function () {});
    };
  function Eh(a) {
    I(Ch).g(a);
  }
  var Fh, Gh, Hh, Ih, Jh, Kh;
  function Lh(a) {
    var b = a.Pa;
    var c = a.C;
    var d = a.config;
    var e = a.Ka === void 0 ? ih() : a.Ka;
    var f = a.xa === void 0 ? 0 : a.xa;
    var g =
      a.B === void 0
        ? new zg(
            (Ih = (Fh = S(b, nh, 5)) == null ? void 0 : kd(Fh, 2)) != null
              ? Ih
              : 0,
            (Jh = (Gh = S(b, nh, 5)) == null ? void 0 : kd(Gh, 4)) != null
              ? Jh
              : 0,
            (Kh = (Hh = S(b, nh, 5)) == null ? void 0 : hd(Hh, 3)) != null
              ? Kh
              : !1
          )
        : a.B;
    a = a.K === void 0 ? ph(T(b, mh, 2, P(Bb))) : a.K;
    e.hasOwnProperty("init-done")
      ? (Z(12, e, function () {})(
          T(b, mh, 2, P()).map(function (h) {
            return pd(h);
          })
        ),
        Z(13, e, function () {})(
          T(b, wg, 1, P()).map(function (h) {
            return pd(h);
          }),
          f
        ),
        c && Z(14, e, function () {})(c),
        Mh(f, e))
      : (zh(new uh(a, f, g, d), e),
        Xg(e),
        Yg(e),
        Zg(e),
        Mh(f, e),
        Tg(T(b, wg, 1, P(Bb)), [f], g, void 0, !0),
        (Fg = Fg || !(!d || !d.ea)),
        Eh(hh),
        c && Eh(c));
  }
  function Mh(a, b) {
    var c = (b = b === void 0 ? ih() : b);
    ah(I($g), c, a);
    Nh(b, a);
    a = b;
    Dh(I(Ch), a);
    I(Ah).o();
  }
  function Nh(a, b) {
    var c = I(Ah);
    c.g = function (d, e) {
      return Z(5, a, function () {
        return !1;
      })(d, e, b);
    };
    c.j = function (d, e) {
      return Z(6, a, function () {
        return 0;
      })(d, e, b);
    };
    c.I = function (d, e) {
      return Z(7, a, function () {
        return "";
      })(d, e, b);
    };
    c.l = function (d, e) {
      return Z(8, a, function () {
        return [];
      })(d, e, b);
    };
    c.A = function (d, e) {
      return Z(17, a, function () {
        return [];
      })(d, e, b);
    };
    c.o = function () {
      Z(15, a, function () {})(b);
    };
  }
  var Oh = ia(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
    Ph = function () {
      var a = a === void 0 ? "jserror" : a;
      var b = b === void 0 ? 0.01 : b;
      var c = c === void 0 ? Ld(Oh) : c;
      this.l = a;
      this.j = b;
      this.g = c;
    };
  var Qh = function (a, b) {
      b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
      b.length < 2048 && b.push(a);
    },
    Rh = function (a, b) {
      var c = Ce(b);
      c && Qh({ label: a, type: 9, value: c }, b);
    },
    Sh = function (a, b, c) {
      var d = !1;
      d = d === void 0 ? !1 : d;
      var e = window,
        f = typeof queueMicrotask !== "undefined";
      return function () {
        d &&
          f &&
          queueMicrotask(function () {
            e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
            e.google_rum_task_id_counter += 1;
          });
        var g = Ce(),
          h = 3;
        try {
          var k = b.apply(this, arguments);
        } catch (l) {
          h = 13;
          if (!c) throw l;
          c(a, l);
        } finally {
          e.google_measure_js_timing &&
            g &&
            Qh(
              v(Object, "assign").call(
                Object,
                {},
                {
                  label: a.toString(),
                  value: g,
                  duration: (Ce() || 0) - g,
                  type: h,
                },
                d &&
                  f && {
                    taskId: (e.google_rum_task_id_counter =
                      e.google_rum_task_id_counter || 1),
                  }
              ),
              e
            );
        }
        return k;
      };
    },
    Th = function (a, b) {
      return Sh(a, b, function (c, d) {
        var e = new Ph();
        var f = f === void 0 ? e.j : f;
        var g = g === void 0 ? e.l : g;
        Math.random() > f ||
          ((d.error && d.meta && d.id) ||
            (d = new Ae(d, { context: c, id: g })),
          (z.google_js_errors = z.google_js_errors || []),
          z.google_js_errors.push(d),
          z.error_rep_loaded ||
            ((f = z.document),
            (c = de("SCRIPT", f)),
            Od(c, e.g),
            (e = f.getElementsByTagName("script")[0]) &&
              e.parentNode &&
              e.parentNode.insertBefore(c, e),
            (z.error_rep_loaded = !0)));
      });
    };
  function Uh(a, b) {
    return b == null ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b);
  }
  function Vh(a, b) {
    return "&" + a + "=" + b.toFixed(3);
  }
  function Wh() {
    var a = new u.Set();
    var b = window.googletag;
    b = (b == null ? 0 : b.apiReady) ? b : void 0;
    try {
      if (!b) return a;
      for (
        var c = b.pubads(), d = x(c.getSlots()), e = d.next();
        !e.done;
        e = d.next()
      )
        a.add(e.value.getSlotId().getDomId());
    } catch (f) {}
    return a;
  }
  function Xh(a) {
    a = a.id;
    return (
      a != null &&
      (Wh().has(a) ||
        v(a, "startsWith").call(a, "google_ads_iframe_") ||
        v(a, "startsWith").call(a, "aswift"))
    );
  }
  function Yh(a, b, c) {
    if (!a.sources) return !1;
    switch (Zh(a)) {
      case 2:
        var d = $h(a);
        if (d)
          return c.some(function (f) {
            return ai(d, f);
          });
        break;
      case 1:
        var e = bi(a);
        if (e)
          return b.some(function (f) {
            return ai(e, f);
          });
    }
    return !1;
  }
  function Zh(a) {
    if (!a.sources) return 0;
    a = a.sources.filter(function (b) {
      return b.previousRect && b.currentRect;
    });
    if (a.length >= 1) {
      a = a[0];
      if (a.previousRect.top < a.currentRect.top) return 2;
      if (a.previousRect.top > a.currentRect.top) return 1;
    }
    return 0;
  }
  function bi(a) {
    return ci(a, function (b) {
      return b.currentRect;
    });
  }
  function $h(a) {
    return ci(a, function (b) {
      return b.previousRect;
    });
  }
  function ci(a, b) {
    return a.sources.reduce(function (c, d) {
      d = b(d);
      return c
        ? d && d.width * d.height !== 0
          ? d.top < c.top
            ? d
            : c
          : c
        : d;
    }, null);
  }
  function ai(a, b) {
    var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
    a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
    return c <= 0 || a <= 0
      ? !1
      : (100 * c * a) / ((b.right - b.left) * (b.bottom - b.top)) >= 50;
  }
  var di = function () {
      var a = { za: !0 };
      a = a === void 0 ? { za: !1 } : a;
      this.l = this.j = this.R = this.O = this.J = 0;
      this.ta = this.qa = Number.NEGATIVE_INFINITY;
      this.g = [];
      this.M = {};
      this.na = 0;
      this.P = Infinity;
      this.la =
        this.oa =
        this.pa =
        this.ra =
        this.wa =
        this.A =
        this.va =
        this.Y =
        this.o =
          0;
      this.ma = !1;
      this.X = this.N = this.I = 0;
      this.B = null;
      this.sa = !1;
      this.ka = function () {};
      var b = document.querySelector("[data-google-query-id]");
      this.ua = b ? b.getAttribute("data-google-query-id") : null;
      this.Ja = a;
    },
    ei,
    fi,
    ii = function () {
      var a = new di();
      if (ng(Rf)) {
        var b = window;
        if (!b.google_plmetrics && window.PerformanceObserver) {
          b.google_plmetrics = !0;
          b = [
            "layout-shift",
            "largest-contentful-paint",
            "first-input",
            "longtask",
          ];
          a.Ja.za && b.push("event");
          b = x(b);
          for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = { type: c, buffered: !0 };
            c === "event" && (d.durationThreshold = 40);
            gi(a).observe(d);
          }
          hi(a);
        }
      }
    },
    gi = function (a) {
      a.B ||
        (a.B = new PerformanceObserver(
          Th(640, function (b) {
            ji(a, b);
          })
        ));
      return a.B;
    },
    hi = function (a) {
      var b = Th(641, function () {
          var d = document;
          (d.prerendering
            ? 3
            : { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
                d.visibilityState ||
                  d.webkitVisibilityState ||
                  d.mozVisibilityState ||
                  ""
              ] || 0) === 2 && ki(a);
        }),
        c = Th(641, function () {
          return void ki(a);
        });
      document.addEventListener("visibilitychange", b);
      document.addEventListener("pagehide", c);
      a.ka = function () {
        document.removeEventListener("visibilitychange", b);
        document.removeEventListener("pagehide", c);
        gi(a).disconnect();
      };
    },
    ki = function (a) {
      if (!a.sa) {
        a.sa = !0;
        gi(a).takeRecords();
        var b =
          "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
        window.LayoutShift &&
          ((b += Vh("cls", a.J)),
          (b += Vh("mls", a.O)),
          (b += Uh("nls", a.R)),
          window.LayoutShiftAttribution &&
            ((b += Vh("cas", a.A)),
            (b += Uh("nas", a.ra)),
            (b += Vh("was", a.wa))),
          (b += Vh("wls", a.Y)),
          (b += Vh("tls", a.va)));
        window.LargestContentfulPaint &&
          ((b += Uh("lcp", a.pa)), (b += Uh("lcps", a.oa)));
        window.PerformanceEventTiming && a.ma && (b += Uh("fid", a.la));
        window.PerformanceLongTaskTiming &&
          ((b += Uh("cbt", a.I)), (b += Uh("mbt", a.N)), (b += Uh("nlt", a.X)));
        for (
          var c = 0,
            d = x(document.getElementsByTagName("iframe")),
            e = d.next();
          !e.done;
          e = d.next()
        )
          Xh(e.value) && c++;
        b += Uh("nif", c);
        c = window.google_unique_id;
        b += Uh("ifi", typeof c === "number" ? c : 0);
        c = I($g).g();
        b += "&eid=" + encodeURIComponent(c.join());
        b += "&top=" + (z === z.top ? 1 : 0);
        b += a.ua ? "&qqid=" + encodeURIComponent(a.ua) : Uh("pvsid", ee(z));
        window.googletag && (b += "&gpt=1");
        c = Math.min(
          a.g.length - 1,
          Math.floor((a.B ? a.na : performance.interactionCount || 0) / 50)
        );
        c >= 0 && ((c = a.g[c].latency), c >= 0 && (b += Uh("inp", c)));
        window.fetch(b, {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        });
        a.ka();
      }
    },
    li = function (a, b, c, d) {
      if (!b.hadRecentInput) {
        a.J += Number(b.value);
        Number(b.value) > a.O && (a.O = Number(b.value));
        a.R += 1;
        if ((c = Yh(b, c, d))) (a.A += b.value), a.ra++;
        if (b.startTime - a.qa > 5e3 || b.startTime - a.ta > 1e3)
          (a.qa = b.startTime), (a.j = 0), (a.l = 0);
        a.ta = b.startTime;
        a.j += b.value;
        c && (a.l += b.value);
        a.j > a.Y &&
          ((a.Y = a.j), (a.wa = a.l), (a.va = b.startTime + b.duration));
      }
    },
    ji = function (a, b) {
      var c = ei !== window.scrollX || fi !== window.scrollY ? [] : mi,
        d = ni();
      b = x(b.getEntries());
      for (var e = b.next(), f = {}; !e.done; f = { F: void 0 }, e = b.next())
        switch (((f.F = e.value), (e = f.F.entryType), e)) {
          case "layout-shift":
            li(a, f.F, c, d);
            break;
          case "largest-contentful-paint":
            f = f.F;
            a.pa = Math.floor(f.renderTime || f.loadTime);
            a.oa = f.size;
            break;
          case "first-input":
            e = f.F;
            a.la = Number((e.processingStart - e.startTime).toFixed(3));
            a.ma = !0;
            a.g.some(
              (function (g) {
                return function (h) {
                  return v(h, "entries").some(function (k) {
                    return (
                      g.F.duration === k.duration &&
                      g.F.startTime === k.startTime
                    );
                  });
                };
              })(f)
            ) || oi(a, f.F);
            break;
          case "longtask":
            f = Math.max(0, f.F.duration - 50);
            a.I += f;
            a.N = Math.max(a.N, f);
            a.X += 1;
            break;
          case "event":
            oi(a, f.F);
            break;
          default:
            Yb(e);
        }
    },
    oi = function (a, b) {
      pi(a, b);
      var c = a.g[a.g.length - 1],
        d = a.M[b.interactionId];
      if (d || a.g.length < 10 || b.duration > c.latency)
        d
          ? (v(d, "entries").push(b),
            (d.latency = Math.max(d.latency, b.duration)))
          : ((b = { id: b.interactionId, latency: b.duration, entries: [b] }),
            (a.M[b.id] = b),
            a.g.push(b)),
          a.g.sort(function (e, f) {
            return f.latency - e.latency;
          }),
          a.g.splice(10).forEach(function (e) {
            delete a.M[e.id];
          });
    },
    pi = function (a, b) {
      b.interactionId &&
        ((a.P = Math.min(a.P, b.interactionId)),
        (a.o = Math.max(a.o, b.interactionId)),
        (a.na = a.o ? (a.o - a.P) / 7 + 1 : 0));
    },
    ni = function () {
      var a = v(Array, "from")
          .call(Array, document.getElementsByTagName("iframe"))
          .filter(Xh),
        b = []
          .concat(ja(Wh()))
          .map(function (c) {
            return document.getElementById(c);
          })
          .filter(function (c) {
            return c !== null;
          });
      ei = window.scrollX;
      fi = window.scrollY;
      return (mi = [].concat(ja(a), ja(b)).map(function (c) {
        return c.getBoundingClientRect();
      }));
    },
    mi = [];
  var qi = function (a) {
    this.i = L(a);
  };
  y(qi, W);
  qi.prototype.getVersion = function () {
    return U(this, 2);
  };
  var ri = function (a) {
    this.i = L(a);
  };
  y(ri, W);
  var si = function (a, b) {
      return O(a, 2, K(b));
    },
    ti = function (a, b) {
      return O(a, 3, K(b));
    },
    ui = function (a, b) {
      return O(a, 4, K(b));
    },
    vi = function (a, b) {
      return O(a, 5, K(b));
    },
    wi = function (a, b) {
      return O(a, 9, K(b));
    },
    xi = function (a, b) {
      return ed(a, 10, b);
    },
    yi = function (a, b) {
      return O(a, 11, b == null ? b : Zb(b));
    },
    zi = function (a, b) {
      return O(a, 1, K(b));
    },
    Ai = function (a, b) {
      return O(a, 7, b == null ? b : Zb(b));
    };
  var Bi =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function Ci(a) {
    var b;
    return (b = a.google_tag_data) != null ? b : (a.google_tag_data = {});
  }
  function Di(a) {
    var b, c;
    return (
      typeof ((b = a.navigator) == null
        ? void 0
        : (c = b.userAgentData) == null
        ? void 0
        : c.getHighEntropyValues) === "function"
    );
  }
  function Ei(a) {
    if (!Di(a)) return null;
    var b = Ci(a);
    if (b.uach_promise) return b.uach_promise;
    a = a.navigator.userAgentData.getHighEntropyValues(Bi).then(function (c) {
      b.uach != null || (b.uach = c);
      return c;
    });
    return (b.uach_promise = a);
  }
  function Fi(a) {
    var b;
    return yi(
      xi(
        vi(
          si(
            zi(
              ui(
                Ai(
                  wi(ti(new ri(), a.architecture || ""), a.bitness || ""),
                  a.mobile || !1
                ),
                a.model || ""
              ),
              a.platform || ""
            ),
            a.platformVersion || ""
          ),
          a.uaFullVersion || ""
        ),
        ((b = a.fullVersionList) == null
          ? void 0
          : b.map(function (c) {
              var d = new qi();
              d = O(d, 1, K(c.brand));
              return O(d, 2, K(c.version));
            })) || []
      ),
      a.wow64 || !1
    );
  }
  function Gi(a) {
    var b, c;
    return (c =
      (b = Ei(a)) == null
        ? void 0
        : b.then(function (d) {
            return Fi(d);
          })) != null
      ? c
      : null;
  }
  function Hi(a, b) {
    var c = {};
    b = ((c[0] = sh(b.ab)), c);
    I($g).j(a, b);
  }
  var Ii = {},
    Ji =
      ((Ii[253] = !1),
      (Ii[246] = []),
      (Ii[150] = ""),
      (Ii[221] = !1),
      (Ii[263] = !1),
      (Ii[36] = /^true$/.test("false")),
      (Ii[264] = !1),
      (Ii[172] = null),
      (Ii[260] = void 0),
      (Ii[251] = null),
      Ii),
    Kb = function () {
      this.g = !1;
    };
  function Ki(a) {
    I(Kb).g = !0;
    return Ji[a];
  }
  function Li(a, b) {
    I(Kb).g = !0;
    Ji[a] = b;
  }
  var Mi =
    /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js)/;
  function Ni(a) {
    var b = a.Ca;
    var c = a.Va;
    var d = a.Ha;
    var e = a.Ta;
    var f = a.Oa;
    var g = a.Qa;
    var h = b ? !Mi.test(b.src) : !0;
    a = {};
    b = {};
    var k = {};
    return (
      (k[3] =
        ((a[3] = function () {
          return !h;
        }),
        (a[59] = function () {
          var l = ta.apply(0, arguments),
            q = v(l, "includes"),
            m = String,
            n;
          var r = r === void 0 ? window : r;
          var t;
          r =
            (t =
              (n = Sd(r.location.href.match(Rd)[3] || null)) == null
                ? void 0
                : n.split(".")) != null
              ? t
              : [];
          n =
            r.length < 2
              ? null
              : r[r.length - 1] === "uk"
              ? r.length < 3
                ? null
                : ae(r.splice(r.length - 3).join("."))
              : ae(r.splice(r.length - 2).join("."));
          return q.call(l, m(n));
        }),
        (a[61] = function () {
          return e;
        }),
        (a[63] = function () {
          return e || g === ".google.ch";
        }),
        (a[73] = function (l) {
          return v(d, "includes").call(d, Number(l));
        }),
        a)),
      (k[4] =
        ((b[1] = function () {
          return f;
        }),
        (b[13] = function () {
          return c || 0;
        }),
        b)),
      (k[5] = {}),
      k
    );
  }
  function Oi(a, b) {
    var c = new oh(Ki(246));
    if (!T(c, wg, 1, P()).length && T(a, wg, 1, P()).length) {
      var d = T(a, wg, 1, P());
      ed(c, 1, d);
    }
    !T(c, mh, 2, P()).length &&
      T(a, mh, 2, P()).length &&
      ((d = T(a, mh, 2, P())), ed(c, 2, d));
    $c(c, nh, 5, !1) === void 0 &&
      $c(a, nh, 5, !1) !== void 0 &&
      ((a = S(a, nh, 5)), cd(c, 5, a));
    Lh({ Pa: c, C: Ni(b), xa: 2, config: { ea: b.ea } });
    b.Ha.forEach(bh);
  }
  function Pi(a, b, c, d, e) {
    a = a.location.host;
    var f = Ud(b.src, "domain");
    b = Ud(b.src, "network-code");
    if (a || f || b) {
      var g = {};
      a && (g.ippd = a);
      f && (g.pppd = f);
      b && (g.pppnc = b);
      Bh(Of) && (g.ppc_eid = Bh(Of).toString());
      a = g;
    } else a = void 0;
    if (a) {
      c = [
        c
          ? new xd(vd, "https://pagead2.googlesyndication.com")
          : new xd(vd, "https://securepubads.g.doubleclick.net"),
        new xd(vd, "/pagead/ppub_config"),
      ];
      f = "";
      for (b = 0; b < c.length; b++)
        (g = c[b]),
          (f +=
            g instanceof xd && g.constructor === xd && g.j === wd
              ? g.g
              : "type_error:Const");
      c = Dd.exec(Cd(new Bd(f, Ed)).toString());
      f = c[3] || "";
      c = new Bd(c[1] + Fd("?", c[2] || "", a) + Fd("#", f), Ed);
      Qi(c, d, e);
    } else e(new u.globalThis.Error("no provided or inferred data"));
  }
  function Qi(a, b, c) {
    var d = new u.globalThis.XMLHttpRequest();
    d.open("GET", a.toString(), !0);
    d.withCredentials = !1;
    d.onload = function () {
      d.status < 300
        ? (Rh("13", window), b(d.status === 204 ? "" : d.responseText))
        : c(new u.globalThis.Error("resp:" + d.status));
    };
    d.onerror = function () {
      return void c(
        new u.globalThis.Error("s:" + d.status + " rs:" + d.readyState)
      );
    };
    d.send();
  }
  var Ri = function () {
      this.o = [];
      this.l = [];
    },
    Ui = function (a, b, c, d, e) {
      if (Xd(b) === Yd(b) && c) {
        var f = e == null ? void 0 : U(ad(e, sd, 1), 1);
        (f == null ? 0 : f.length) &&
        v(b.location.hostname, "includes").call(b.location.hostname, f)
          ? (Si(a), Ti(a, void 0, e))
          : ((p = ["http:", "https:"]), v(p, "includes")).call(
              p,
              b.location.protocol
            ) &&
            (Si(a),
            Pi(
              b.top,
              c,
              d,
              function (g) {
                return void Ti(a, g);
              },
              function (g) {
                Ti(a, void 0, void 0, g);
              }
            ));
      }
    },
    Si = function (a) {
      Ki(260);
      Li(260, function (b) {
        a.g !== void 0 || a.j ? b(a.g, a.j) : a.o.push(b);
      });
    },
    Ti = function (a, b, c, d) {
      a.g = b != null ? b : c == null ? void 0 : qd(c);
      a.A = c;
      !a.A && a.g && a.l.length && (a.A = ud(a.g));
      a.j = d;
      b = x(a.o);
      for (c = b.next(); !c.done; c = b.next()) (c = c.value), c(a.g, a.j);
      b = x(a.l);
      for (c = b.next(); !c.done; c = b.next()) (c = c.value), c(a.A, a.j);
      a.o.length = 0;
      a.l.length = 0;
    };
  var Vi = function (a) {
    this.i = L(a);
  };
  y(Vi, W);
  var Wi = rd(Vi);
  var Yi = function () {
      return [].concat(ja(v(Xi, "values").call(Xi))).reduce(function (a, b) {
        return a + b;
      }, 0);
    },
    Xi = new u.Map();
  function Zi(a, b, c) {
    if (a.cb) {
      c = c.error && c.meta && c.id ? c.error : c;
      var d = new tf(),
        e = new sf();
      try {
        var f = ee(window);
        Q(e, 1, kc(f), "0");
      } catch (n) {}
      try {
        var g = I($g).g();
        Sc(e, 2, g, bc);
      } catch (n) {}
      try {
        Q(e, 3, K(window.document.URL), "");
      } catch (n) {}
      f = cd(d, 2, e);
      g = new rf();
      b = Q(g, 1, J(b), 0);
      try {
        var h = Ob(c == null ? void 0 : c.name) ? c.name : "Unknown error";
        Q(b, 2, K(h), "");
      } catch (n) {}
      try {
        var k = Ob(c == null ? void 0 : c.message) ? c.message : "Caught " + c;
        Q(b, 3, K(k), "");
      } catch (n) {}
      try {
        var l = Ob(c == null ? void 0 : c.stack) ? c.stack : Error().stack;
        l && Sc(b, 4, l.split(/\n\s*/), mc);
      } catch (n) {}
      h = cd(f, 1, b);
      k = new qf();
      try {
        Q(k, 1, K(a.Da), "");
      } catch (n) {}
      try {
        var q = Yi();
        Q(k, 2, cc(q), 0);
      } catch (n) {}
      try {
        var m = [].concat(ja(v(Xi, "keys").call(Xi)));
        Sc(k, 3, m, mc);
      } catch (n) {}
      dd(h, 4, uf, k);
      Q(h, 5, kc(a.Na), "0");
      a.Ga.eb(h);
    }
  }
  function $i(a, b) {
    try {
      var c = Lb;
      if (!Ob(a)) {
        var d,
          e,
          f =
            (e =
              (d = typeof c === "function" ? c() : c) == null
                ? void 0
                : d.concat("\n")) != null
              ? e
              : "";
        throw Error(f + String(a));
      }
      return Wi(a);
    } catch (g) {
      return Zi(b, 838, g), new Vi();
    }
  }
  function aj() {
    var a;
    return (a = z.googletag) != null ? a : (z.googletag = { cmd: [] });
  }
  function bj(a, b) {
    var c = aj();
    c.hasOwnProperty(a) || (c[a] = b);
  }
  var cj = ia([
      "https://pagead2.googlesyndication.com/pagead/managed/js/gpt/",
      "/pubads_impl.js",
    ]),
    dj = ia([
      "https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/",
      "/pubads_impl.js",
    ]);
  function ej() {
    var a = sttc,
      b = fj();
    $a(function (t) {
      Zi(b, 1189, t);
    });
    var c = aj();
    a = $i(a, b);
    Jb();
    v(Object, "assign").call(Object, Ji, c._vars_);
    c._vars_ = Ji;
    a &&
      (hd(a, 3) && Li(36, !0),
      hd(a, 5) && Li(221, !0),
      U(a, 6) && Li(150, U(a, 6)),
      hd(a, 12) && Li(263, !0));
    var d = ad(a, oh, 1),
      e = {
        Ta: hd(a, 5),
        Va: id(a, 2),
        Ha: Mc(a, 10, dc, P(Bb)),
        Oa: id(a, 7),
        Qa: U(a, 6),
        ea: hd(a, 4),
      };
    a = S(a, td, 9);
    var f,
      g = (f = c.fifWin) != null ? f : window,
      h = g.document;
    f = c.fifWin ? window : g;
    bj("_loaded_", !0);
    bj("cmd", []);
    var k,
      l = (k = gj(h)) != null ? k : hj(h);
    ij(d, g, v(Object, "assign").call(Object, {}, { Ca: l }, e), b);
    try {
      ii();
    } catch (t) {}
    Rh("1", g);
    k = jj(b, l);
    d = (l == null ? void 0 : l.crossOrigin) === "anonymous";
    e = Bh(Nf);
    e > 0 &&
      b.La < 1 / e &&
      ((g = b.Ga.Xa.fb.Ra),
      g.Ua.ba({
        ia: e,
        da: (l == null ? void 0 : l.crossOrigin) === "anonymous",
        fa: kj(l),
      }),
      g.Sa.ba({
        ia: e,
        da: d,
        fa:
          Sd(k.toString().match(Rd)[3] || null) ===
          "pagead2.googlesyndication.com",
      }));
    e = !1;
    if (!lj(h)) {
      g = "gpt-impl-" + Math.random();
      try {
        Pd(
          h,
          Id(k, { id: g, nonce: Nd(window), Aa: d ? "anonymous" : void 0 })
        );
      } catch (t) {}
      h.getElementById(g) && (ng(Kf) ? (e = !0) : (c._loadStarted_ = !0));
    }
    if (ng(Kf) ? !e : !c._loadStarted_) {
      var q = de("SCRIPT");
      Od(q, k);
      q.async = !0;
      d && (q.crossOrigin = "anonymous");
      h = c.fifWin ? f.document : h;
      k = h.body;
      d = h.documentElement;
      var m,
        n,
        r = (n = (m = h.head) != null ? m : k) != null ? n : d;
      f.document.readyState !== "complete" && c.fifWin
        ? zd(f, "load", function () {
            return void r.appendChild(q);
          })
        : r.appendChild(q);
      ng(Kf) || (c._loadStarted_ = !0);
    }
    if (f === f.top)
      try {
        qg(f);
      } catch (t) {
        Zi(b, 1209, t);
      }
    Ui(new Ri(), f, l, kj(l), a);
    ng(Mf) && mj(f);
  }
  function mj(a) {
    var b = function (c) {
      (c.data != null && c.data !== "") ||
        c.origin.indexOf("android-app://") !== 0 ||
        (Li(264, !0), a.removeEventListener("message", b));
    };
    a.addEventListener("message", b);
  }
  function fj() {
    var a = Zd();
    return {
      Da: "m202408080101",
      vb: "202408080101",
      ab: ee(window),
      Ga: new Hf(11, "m202408080101"),
      La: a,
      cb: a < 0.01,
      Na: 100,
    };
  }
  function gj(a) {
    return (a = a.currentScript) ? a : null;
  }
  function hj(a) {
    var b;
    a = x((b = a.scripts) != null ? b : []);
    for (b = a.next(); !b.done; b = a.next())
      if (((b = b.value), v(b.src, "includes").call(b.src, "/tag/js/gpt")))
        return b;
    return null;
  }
  function jj(a, b) {
    a = a.Da;
    b = kj(b) ? Ld(cj, a) : Ld(dj, a);
    return (a = Bh(Pf)) ? Md(b, new u.Map([["cb", a]])) : b;
  }
  function ij(a, b, c, d) {
    Li(172, c.Ca);
    Oi(a, c);
    Hi(12, d);
    Hi(5, d);
    (a = Gi(b)) &&
      a.then(function (e) {
        return void Li(251, qd(e));
      });
    ce(I(Ah).l(Qf.g, Qf.defaultValue), b.document);
  }
  function lj(a) {
    var b = gj(a);
    return (
      a.readyState === "complete" ||
      a.readyState === "loaded" ||
      !(b == null || !b.async)
    );
  }
  function kj(a) {
    return (
      !(a == null || !a.src) &&
      Sd(a.src.match(Rd)[3] || null) === "pagead2.googlesyndication.com"
    );
  }
  try {
    ej();
  } catch (a) {
    try {
      Zi(fj(), 420, a);
    } catch (b) {}
  }
}).call(
  this.googletag && googletag.fifWin ? googletag.fifWin.parent : this,
  '[[[[560703441,null,null,[1]],[null,7,null,[null,0.1]],[null,null,null,[],null,657770675],[null,659579380,null,[null,-1]],[null,659579379,null,[null,-1]],[null,null,null,[null,null,null,["1 dbm/(ad|clkk)"]],null,655300591],[476475256,null,null,[1]],[null,427198696,null,[null,1]],[null,578655462,null,[null,20]],[591917863,null,null,[1]],[648390950,null,null,[1]],[null,632270607,null,[null,1000]],[null,625028671,null,[null,0.8]],[null,625028672,null,[null,50]],[null,629733890,null,[null,1000]],[644091943,null,null,[1]],[573236024,null,null,[1]],[619946851,null,null,[1]],[620930073,null,null,[1]],[null,null,null,[],null,489560439],[null,null,null,[],null,505762507],[null,1921,null,[null,72]],[null,1920,null,[null,12]],[null,426169222,null,[null,1000]],[null,377289019,null,[null,10000]],[null,529,null,[null,20]],[null,573282293,null,[null,0.01]],[null,610770343,null,[null,5]],[642361450,null,null,[1]],[45624259,null,null,[]],[45627954,null,null,[1]],[45622305,null,null,[]],[null,447000223,null,[null,0.01]],[360245597,null,null,[1]],[45628169,null,null,[1]],[45401685,null,null,[1]],[561164161,null,null,[1]],[null,550718589,null,[null,250],[[[3,[[4,null,15,null,null,null,null,["22814497764"]],[4,null,15,null,null,null,null,["6581"]],[4,null,15,null,null,null,null,["18190176"]],[4,null,15,null,null,null,null,["21881754602"]],[4,null,15,null,null,null,null,["6782"]],[4,null,15,null,null,null,null,["309565630"]],[4,null,15,null,null,null,null,["22306534072"]],[4,null,15,null,null,null,null,["7229"]],[4,null,15,null,null,null,null,["28253241"]],[4,null,15,null,null,null,null,["1254144"]],[4,null,15,null,null,null,null,["21732118914"]],[4,null,15,null,null,null,null,["5441"]],[4,null,15,null,null,null,null,["162717810"]],[4,null,15,null,null,null,null,["51912183"]],[4,null,15,null,null,null,null,["23202586"]],[4,null,15,null,null,null,null,["44520695"]],[4,null,15,null,null,null,null,["1030006"]],[4,null,15,null,null,null,null,["21830601346"]],[4,null,15,null,null,null,null,["23081961"]],[4,null,15,null,null,null,null,["21880406607"]],[4,null,15,null,null,null,null,["93656639"]],[4,null,15,null,null,null,null,["1020351"]],[4,null,15,null,null,null,null,["5931321"]],[4,null,15,null,null,null,null,["3355436"]],[4,null,15,null,null,null,null,["22106840220"]],[4,null,15,null,null,null,null,["22875833199"]],[4,null,15,null,null,null,null,["32866417"]],[4,null,15,null,null,null,null,["8095840"]],[4,null,15,null,null,null,null,["71161633"]],[4,null,15,null,null,null,null,["22668755367"]],[4,null,15,null,null,null,null,["6177"]],[4,null,15,null,null,null,null,["147246189"]],[4,null,15,null,null,null,null,["22152718"]],[4,null,15,null,null,null,null,["21751243814"]],[4,null,15,null,null,null,null,["22013536576"]],[4,null,15,null,null,null,null,["4444"]],[4,null,15,null,null,null,null,["44890869"]],[4,null,15,null,null,null,null,["248415179"]],[4,null,15,null,null,null,null,["5293"]],[4,null,15,null,null,null,null,["21675937462"]],[4,null,15,null,null,null,null,["21726375739"]],[4,null,15,null,null,null,null,["1002212"]],[4,null,15,null,null,null,null,["6718395"]]]],[null,500]]]],[null,609494714,null,[null,1]],[null,575880738,null,[null,10]],[null,586681283,null,[null,100]],[599186119,null,null,[1]],[531615531,null,null,null,[[[3,[[4,null,15,null,null,null,null,["22814497764"]],[4,null,15,null,null,null,null,["6581"]],[4,null,15,null,null,null,null,["18190176"]],[4,null,15,null,null,null,null,["21881754602"]],[4,null,15,null,null,null,null,["6782"]],[4,null,15,null,null,null,null,["309565630"]],[4,null,15,null,null,null,null,["22306534072"]],[4,null,15,null,null,null,null,["7229"]],[4,null,15,null,null,null,null,["28253241"]],[4,null,15,null,null,null,null,["1254144"]],[4,null,15,null,null,null,null,["21732118914"]],[4,null,15,null,null,null,null,["5441"]],[4,null,15,null,null,null,null,["162717810"]],[4,null,15,null,null,null,null,["51912183"]],[4,null,15,null,null,null,null,["23202586"]],[4,null,15,null,null,null,null,["44520695"]],[4,null,15,null,null,null,null,["1030006"]],[4,null,15,null,null,null,null,["21830601346"]],[4,null,15,null,null,null,null,["23081961"]],[4,null,15,null,null,null,null,["21880406607"]],[4,null,15,null,null,null,null,["93656639"]],[4,null,15,null,null,null,null,["1020351"]],[4,null,15,null,null,null,null,["5931321"]],[4,null,15,null,null,null,null,["3355436"]],[4,null,15,null,null,null,null,["22106840220"]],[4,null,15,null,null,null,null,["22875833199"]],[4,null,15,null,null,null,null,["32866417"]],[4,null,15,null,null,null,null,["8095840"]],[4,null,15,null,null,null,null,["71161633"]],[4,null,15,null,null,null,null,["22668755367"]],[4,null,15,null,null,null,null,["6177"]],[4,null,15,null,null,null,null,["147246189"]],[4,null,15,null,null,null,null,["22152718"]],[4,null,15,null,null,null,null,["21751243814"]],[4,null,15,null,null,null,null,["22013536576"]],[4,null,15,null,null,null,null,["4444"]],[4,null,15,null,null,null,null,["44890869"]],[4,null,15,null,null,null,null,["248415179"]],[4,null,15,null,null,null,null,["5293"]],[4,null,15,null,null,null,null,["21675937462"]],[4,null,15,null,null,null,null,["21726375739"]],[4,null,15,null,null,null,null,["1002212"]],[4,null,15,null,null,null,null,["6718395"]]]],[1]]]],[null,635239304,null,[null,100]],[null,618260805,null,[null,10]],[639096031,null,null,[1]],[644156683,null,null,[1]],[647753412,null,null,[1]],[null,532520346,null,[null,120]],[557870754,null,null,[1]],[614048762,null,null,[1]],[654220659,null,null,[1]],[null,630428304,null,[null,100]],[641346575,null,null,[1]],[632286145,null,null,[1]],[null,624264750,null,[null,-1]],[607106222,null,null,[1]],[31077334,null,null,[1]],[null,398776877,null,[null,60000]],[null,374201269,null,[null,60000]],[null,371364213,null,[null,60000]],[null,376149757,null,[null,0.0025]],[583154251,null,null,[1]],[570764855,null,null,[1]],[null,null,579921177,[null,null,"control_1\\\\.\\\\d"]],[null,570764854,null,[null,50]],[578725095,null,null,[1]],[655999818,null,null,[1]],[377936516,null,null,[1]],[null,599575765,null,[null,1000]],[null,null,2,[null,null,"1-0-40"]],[null,626653285,null,[null,1000]],[null,642407444,null,[null,10]],[652574591,null,null,[1]],[null,506394061,null,[null,100]],[null,null,null,[null,null,null,["95335247"]],null,631604025],[null,null,null,[],null,489],[392065905,null,null,null,[[[4,null,68],[1]]]],[null,360245595,null,[null,500]],[563462360,null,null,[1]],[555237688,null,null,[],[[[2,[[4,null,70,null,null,null,null,["browsing-topics"]],[1,[[4,null,27,null,null,null,null,["isSecureContext"]]]]]],[1]]]],[555237686,null,null,[]],[507033477,null,null,[1]],[null,638742197,null,[null,500]],[45420038,null,null,[1]],[null,514795754,null,[null,2]],[638770075,null,null,[1]],[590730356,null,null,null,[[[12,null,null,null,4,null,"Chrome\\\\/((?!1[0-1]\\\\d)(?!12[0-3])\\\\d{3,})",["navigator.userAgent"]],[1]]]],[564724551,null,null,null,[[[12,null,null,null,4,null,"Chrome\\\\/((?!10\\\\d)(?!11[0-6])\\\\d{3,})",["navigator.userAgent"]],[1]]]],[567489814,null,null,[1]],[45415915,null,null,[1]],[582338617,null,null,[1]],[582287318,null,null,[1]],[null,596918936,null,[null,500]],[null,607730666,null,[null,10]],[632286496,null,null,[1]],[616896918,null,null,[1]],[638632925,null,null,[1]],[647331452,null,null,[1]],[null,642727723,null,[null,10]],[null,null,null,[null,null,null,["AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==","Amm8/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==","A9uiHDzQFAhqALUhTgTYJcz9XrGH2y0/9AORwCSapUO/f7Uh7ysIzyszNkuWDLqNYg8446Uj48XIstBW1qv/wAQAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A9R+gkZL3TWq+Z7RJ2L0c7ZN7FZD5z4mHmVvjrPitg/EMz9P3j5d3W7Vw5ZR9jtJGmWKltM4BO3smNzpCgwYuwwAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"]],null,1934],[485990406,null,null,[]]],[[3,[[null,[[1337,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]],[84,null,null,[1]],[188,null,null,[1]]]]]],[1000,[[31072561]],[2,[[4,null,70,null,null,null,null,["run-ad-auction"]],[12,null,null,null,4,null,"FLEDGE_GAM_EXTERNAL_TESTER",["navigator.userAgent"]]]]],[1,[[31075124,[[null,514795754,null,[null,4]]]]],[4,null,74,null,null,null,null,["1585821863","3976716532"]],59],[10,[[31080344],[95328403],[95328405],[95328406,[[null,514795754,null,[null,4]]]],[95336063,[[null,514795754,null,[null,4]],[null,641937776,null,[null,32768]]]],[95337987],[95337988,[[null,514795754,null,[null,4]],[null,641937776,null,[null,32768]]]],[95339697,[[null,514795754,null,[null,4]],[null,641937776,null,[null,32768]]]],[95339698,[[null,514795754,null,[null,4]],[null,641937776,null,[null,32768]]]],[95339699,[[null,514795754,null,[null,4]],[null,641937776,null,[null,32768]]]]],[2,[[4,null,9,null,null,null,null,["fetch"]],[4,null,9,null,null,null,null,["navigator.getInterestGroupAdAuctionData"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,["1585821863","3976716532"]]]]]],59],[10,[[31084125],[31084126]]],[100,[[31084180,null,[4,null,10]]],null,122,null,null,null,null,null,null,null,null,23],[100,[[31084181,null,[4,null,10]]],null,122,null,null,null,200,null,null,null,null,23],[100,[[31084182,null,[4,null,10]]],null,122,null,null,null,600,null,null,null,null,23],[100,[[31084183,null,[4,null,10]]],null,122,null,null,null,800,null,null,null,null,23],[50,[[31084270,null,[3,[[4,null,10],[1,[[4,null,10]]]]]]],null,121,null,null,null,null,null,null,null,null,22],[50,[[31084271,[[610525552,null,null,[1]]],[3,[[4,null,10],[1,[[4,null,10]]]]]]],null,121,null,null,null,500,null,null,null,null,22],[1000,[[31084732,null,[4,null,27,null,null,null,null,["crossOriginIsolated"]]]],[2,[[12,null,null,null,4,null,"Chrome\\\\/((?!10\\\\d)\\\\d{3,})",["navigator.userAgent"]]]]],[1000,[[31084733,null,[2,[[4,null,27,null,null,null,null,["crossOriginIsolated"]],[4,null,8,null,null,null,null,["credentialless"]]]]]],[2,[[12,null,null,null,4,null,"Chrome\\\\/((?!10\\\\d)\\\\d{3,})",["navigator.userAgent"]]]]],[1000,[[31084734,null,[4,null,9,null,null,null,null,["SharedArrayBuffer"]]]],[2,[[12,null,null,null,4,null,"Chrome\\\\/((?!10\\\\d)\\\\d{3,})",["navigator.userAgent"]]]]],[1000,[[31085720,null,[4,null,6,null,null,null,null,["31085718"]]]],[4,null,9,null,null,null,null,["scheduler.postTask"]],125,null,null,null,null,null,null,null,null,25],[1000,[[31085721,null,[4,null,6,null,null,null,null,["31085719"]]]],[4,null,9,null,null,null,null,["scheduler.postTask"]],125,null,null,null,null,null,null,null,null,25],[1000,[[31085774,null,[2,[[4,null,6,null,null,null,null,["31085772"]],[4,null,9,null,null,null,null,["scheduler.yield"]]]]]],[4,null,9,null,null,null,null,["scheduler.postTask"]],125,null,null,null,null,null,null,null,null,25],[1000,[[31085775,null,[2,[[4,null,6,null,null,null,null,["31085773"]],[4,null,9,null,null,null,null,["scheduler.yield"]]]]]],[4,null,9,null,null,null,null,["scheduler.postTask"]],125,null,null,null,null,null,null,null,null,25],[null,[[44798283,[[null,514795754,null,[null,4]]]]],[2,[[4,null,70,null,null,null,null,["run-ad-auction"]],[1,[[4,null,63]]]]],59],[null,[[95331143],[95331207],[95333497]],[2,[[4,null,9,null,null,null,null,["fetch"]],[4,null,9,null,null,null,null,["navigator.getInterestGroupAdAuctionData"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,["1585821863","3976716532"]]]]]],59],[10,[[95332149],[95332150,[[616896918,null,null,[]]]]],null,59],[null,[[95335986]],[2,[[4,null,9,null,null,null,null,["fetch"]],[4,null,9,null,null,null,null,["navigator.getInterestGroupAdAuctionData"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,["1585821863","3976716532"]]]]]],59],[null,[[676982960],[676982998]]]]],[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,["LayoutShift"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,["31061691"]]],[1000,[[31078663,null,[2,[[4,null,70,null,null,null,null,["browsing-topics"]],[4,null,8,null,null,null,null,["document.browsingTopics"]]]]]]],[1000,[[31078664,null,[2,[[4,null,69,null,null,null,null,["browsing-topics"]],[1,[[4,null,70,null,null,null,null,["browsing-topics"]]]]]]]]],[1000,[[31078665,null,[2,[[4,null,8,null,null,null,null,["navigator.runAdAuction"]],[4,null,70,null,null,null,null,["run-ad-auction"]],[4,null,70,null,null,null,null,["join-ad-interest-group"]]]]]]],[1000,[[31078666,null,[2,[[4,null,69,null,null,null,null,["join-ad-interest-group"]],[1,[[4,null,70,null,null,null,null,["join-ad-interest-group"]]]]]]]]],[1000,[[31078667,null,[2,[[4,null,69,null,null,null,null,["run-ad-auction"]],[1,[[4,null,70,null,null,null,null,["run-ad-auction"]]]]]]]]],[1000,[[31078668,null,[4,null,70,null,null,null,null,["attribution-reporting"]]]]],[1000,[[31078669,null,[2,[[4,null,69,null,null,null,null,["attribution-reporting"]],[1,[[4,null,70,null,null,null,null,["attribution-reporting"]]]]]]]]],[1000,[[31078670,null,[4,null,70,null,null,null,null,["shared-storage"]]]]],[1000,[[31078671,null,[2,[[4,null,69,null,null,null,null,["shared-storage"]],[1,[[4,null,70,null,null,null,null,["shared-storage"]]]]]]]]]]],[5,[[50,[[31067420],[31067421,[[360245597,null,null,[]]]],[31077191]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]],69],[200,[[31079956],[31079957,[[561985307,null,null,[1]]]],[44809527,[[561985307,null,null,[1]]]]]],[50,[[31083339],[31083340,[[624264747,null,null,[1]]]]]],[50,[[31083341],[31083342,[[624264746,null,null,[1]]]]]],[50,[[31083343],[31083344,[[624264749,null,null,[1]]]]]],[50,[[31083345],[31083346,[[null,624264750,null,[null,5]]]]]],[1000,[[31084129,null,[2,[[2,[[8,null,null,1,null,-1],[7,null,null,1,null,10]]],[4,null,3]]]]],null,80,null,null,null,null,null,null,null,null,4],[1000,[[31084130,null,[2,[[2,[[8,null,null,1,null,9],[7,null,null,1,null,20]]],[4,null,3]]]]],null,80,null,null,null,null,null,null,null,null,4],[1,[[31084401],[31084402,[[624264748,null,null,[1]]]]]],[10,[[31084948],[31084949,[[null,null,null,[null,null,null,["679602798","965728666","3786422334","4071951799"]],null,603422363]]]]],[10,[[31085375],[31085376,[[null,610770343,null,[null,6]]]]],null,59],[50,[[31085718],[31085719,[[647331452,null,null,[]]]]],null,119],[100,[[31085738],[31085739,[[647262744,null,null,[1]]]]]],[10,[[31085772],[31085773,[[647331451,null,null,[1]]]]],null,119],[10,[[31085776],[31085777,[[45624259,null,null,[1]]]]],null,114],[10,[[31085778,[[45624259,null,null,[1]]]]],[4,null,74,null,null,null,null,["1361264289","592241938","3803786894"]],114],[10,[[31085822],[31085823,[[null,653204221,null,[null,1]]]]]],[1000,[[31085906,null,[2,[[2,[[8,null,null,1,null,19],[7,null,null,1,null,22]]],[4,null,3]]]]],null,128,null,null,null,null,null,null,null,null,27],[1000,[[31085907,[[657763206,null,null,[1]],[null,null,null,[null,null,null,["AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==","Amm8/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==","A9uiHDzQFAhqALUhTgTYJcz9XrGH2y0/9AORwCSapUO/f7Uh7ysIzyszNkuWDLqNYg8446Uj48XIstBW1qv/wAQAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A9R+gkZL3TWq+Z7RJ2L0c7ZN7FZD5z4mHmVvjrPitg/EMz9P3j5d3W7Vw5ZR9jtJGmWKltM4BO3smNzpCgwYuwwAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A9ejJbmUme7Mcan6LhOEb3xu1rtOR0wo0OFCsvDNtVQAURUxNE6WVKpi/8UDE+6qpeiTuYwhQz0aFpxSXDuNegAAAACQeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29tcHJlc3Npb25EaWN0aW9uYXJ5VHJhbnNwb3J0VjMiLCJleHBpcnkiOjE3MzMyNzAzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A/nLJchvU3DZp7nqa9ODYDqcEW3b40Jf9gdp1+gffTKguFiYpx8XBAicRlpA9PUDtTTLbSxWz5laQxLp0R6WdAAAAACWeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29tcHJlc3Npb25EaWN0aW9uYXJ5VHJhbnNwb3J0VjMiLCJleHBpcnkiOjE3MzMyNzAzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"]],null,1934]],[2,[[2,[[8,null,null,1,null,29],[7,null,null,1,null,32]]],[4,null,3]]]]],null,128,null,null,null,null,null,null,null,null,27],[100,[[31085908],[31085909,[[630167509,null,null,[1]]]]]],[50,[[31085947],[31085948]]],[100,[[31086033],[31086034,[[658158409,null,null,[1]]]]]],[100,[[31086047],[31086048,[[651138387,null,null,[1]]]]]],[1000,[[31086067,[[null,24,null,[null,31086067]]],[6,null,null,13,null,31086067]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[1000,[[31086068,[[null,24,null,[null,31086068]]],[6,null,null,13,null,31086068]]],[4,null,3],1,null,null,null,null,null,null,null,null,3]]],[2,[[10,[[31082137],[31082138,[[null,609494714,null,[null,1]]]]],null,null,null,null,null,null,null,102],[1000,[[31084215,null,[2,[[4,null,8,null,null,null,null,["pbjs"]],[12,null,null,null,4,null,".*userId.*",["pbjs.installedModules.join"]]]]]]],[10,[[31084489],[31084490]],null,null,null,null,32,null,null,142,1],[50,[[31084528],[31084529]],null,null,null,null,36,900,null,166,1],[1000,[[31084739,[[null,612427114,null,[null,100]]]]],[4,null,6,null,null,null,null,["31065645"]]],[10,[[31084865],[31084866]],null,null,null,null,35,null,null,166,1],[null,[[31084974],[31084975],[31084976],[31084977]],null,null,null,null,37,820,null,166,1],[null,[[31085660],[31085661,[[629201869,null,null,[1]],[630224494,null,null,[1]]]],[31085662,[[629201869,null,null,[1]],[630224494,null,null,[1]]]],[31085663,[[629201869,null,null,[1]],[630224494,null,null,[1]]]]],null,null,null,null,null,41,null,102,1],[10,[[31085856],[31085857]],null,null,null,null,null,20,null,102],[50,[[95330141],[95330142]],[4,null,59,null,null,null,null,["2443349923"]],null,null,null,33,null,null,152,1],[300,[[95331847],[95331848]],[4,null,59,null,null,null,null,["1163038905"]],null,null,null,34,400,null,152,1],[50,[[95337885],[95337886,[[null,643185309,null,[null,30]],[null,643185308,null,[null,30]],[null,643185311,null,[null,30]],[null,643185310,null,[null,30]]]]],[4,null,6,null,null,null,null,["31065645"]]],[10,[[95339599],[95339600,[[null,null,null,[null,null,null,["1 dbm/(ad|clkk)","2 adsrvr\\\\\\\\.org/bid/","3 criteo\\\\\\\\.com/(delivery)|(.*auction)","4 yahoo\\\\\\\\.com/.*/imp/","5 (adnxs)|(adnxs-simple)\\\\\\\\.com/it","6 amazon-adsystem\\\\\\\\.com/.*/impb"]],null,655300591],[null,643045660,null,[null,1]]]],[95340125,[[null,659579379,null,[null,500]],[null,null,null,[null,null,null,["1 dbm/(ad|clkk)","2 adsrvr\\\\\\\\.org/bid/","3 criteo\\\\\\\\.com/(delivery)|(.*auction)","4 yahoo\\\\\\\\.com/.*/imp/","5 (adnxs)|(adnxs-simple)\\\\\\\\.com/it","6 amazon-adsystem\\\\\\\\.com/.*/impb"]],null,655300591],[null,643045660,null,[null,1]]]],[95340126,[[null,659579379,null,[null,1000]],[null,null,null,[null,null,null,["1 dbm/(ad|clkk)","2 adsrvr\\\\\\\\.org/bid/","3 criteo\\\\\\\\.com/(delivery)|(.*auction)","4 yahoo\\\\\\\\.com/.*/imp/","5 (adnxs)|(adnxs-simple)\\\\\\\\.com/it","6 amazon-adsystem\\\\\\\\.com/.*/impb"]],null,655300591],[null,643045660,null,[null,1]]]],[95340127,[[null,659579379,null,[null,2000]],[null,null,null,[null,null,null,["1 dbm/(ad|clkk)","2 adsrvr\\\\\\\\.org/bid/","3 criteo\\\\\\\\.com/(delivery)|(.*auction)","4 yahoo\\\\\\\\.com/.*/imp/","5 (adnxs)|(adnxs-simple)\\\\\\\\.com/it","6 amazon-adsystem\\\\\\\\.com/.*/impb"]],null,655300591],[null,643045660,null,[null,1]]]],[95340128,[[null,659579379,null,[null,5000]],[null,null,null,[null,null,null,["1 dbm/(ad|clkk)","2 adsrvr\\\\\\\\.org/bid/","3 criteo\\\\\\\\.com/(delivery)|(.*auction)","4 yahoo\\\\\\\\.com/.*/imp/","5 (adnxs)|(adnxs-simple)\\\\\\\\.com/it","6 amazon-adsystem\\\\\\\\.com/.*/impb"]],null,655300591],[null,643045660,null,[null,1]]]]],[4,null,6,null,null,null,null,["31065645"]]]]],[9,[[1000,[[31083577]],[4,null,13,null,null,null,null,["cxbbhbxm"]]]]],[4,[[null,[[44714449,[[null,7,null,[null,1]]]],[676982961,[[null,7,null,[null,0.4]],[212,null,null,[1]]]],[676982996,[[null,7,null,[null,1]]]]],null,78]]]],null,null,[null,1000,1,1000]],null,null,null,1,".google.co.uk",651,2021,[["visitlondon.com",null,"https://www.visitlondon.com/sehirici-ulasim/getting-around-london",null,null,["70940382"]],[],[],null,null,null,null,[[["114719345",1],["70940382",1]]],[[["114719345",1],["70940382",1]]],null,[[60771,1723548000],[52179,1723549200],[23384,1723550400],[49266,1723551600]]]]'
);
