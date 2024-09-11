(function (sttc) {
  var window = this;
  if (window.googletag && googletag.evalScripts) {
    googletag.evalScripts();
  }
  if (window.googletag && googletag._loaded_) return;
  var n,
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
      a.zb = b.prototype;
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
    Ea = xa(645172343, xa(1, !0));
  var Fa,
    Ga = z.navigator;
  Fa = Ga ? Ga.userAgentData || null : null;
  function Ha(a) {
    return Da
      ? Fa
        ? Fa.brands.some(function (b) {
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
  function Ia() {
    return Da ? !!Fa && Fa.brands.length > 0 : !1;
  }
  function Ja() {
    return Ia()
      ? Ha("Chromium")
      : ((A("Chrome") || A("CriOS")) && !(Ia() ? 0 : A("Edge"))) || A("Silk");
  }
  var Ka = function (a, b) {
    return Array.prototype.map.call(a, b, void 0);
  };
  function La(a, b) {
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
  var Ma = function (a) {
    Ma[" "](a);
    return a;
  };
  Ma[" "] = function () {};
  var Na = Ia() ? !1 : A("Trident") || A("MSIE");
  !A("Android") || Ja();
  Ja();
  A("Safari") &&
    (Ja() ||
      (Ia() ? 0 : A("Coast")) ||
      (Ia() ? 0 : A("Opera")) ||
      (Ia() ? 0 : A("Edge")) ||
      (Ia() ? Ha("Microsoft Edge") : A("Edg/")) ||
      (Ia() && Ha("Opera")));
  var Oa = {},
    Pa = null,
    Ra = function (a) {
      var b = [];
      Qa(a, function (c) {
        b.push(c);
      });
      return b;
    },
    Qa = function (a, b) {
      function c(k) {
        for (; d < a.length; ) {
          var l = a.charAt(d++),
            q = Pa[l];
          if (q != null) return q;
          if (!/^[\s\xa0]*$/.test(l))
            throw Error("Unknown base64 encoding at char: " + l);
        }
        return k;
      }
      Sa();
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
    Sa = function () {
      if (!Pa) {
        Pa = {};
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
          Oa[c] = d;
          for (var e = 0; e < d.length; e++) {
            var f = d[e];
            Pa[f] === void 0 && (Pa[f] = e);
          }
        }
      }
    };
  var Ta = typeof Uint8Array !== "undefined",
    Ua = !Na && typeof btoa === "function";
  var Wa = function (a, b) {
    a.__closure__error__context__984382 ||
      (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = b;
  };
  var Xa, Ya;
  function Za(a) {
    if (Ya) throw Error("");
    Ya = function (b) {
      z.setTimeout(function () {
        a(b);
      }, 0);
    };
  }
  function $a(a) {
    if (Ya)
      try {
        Ya(a);
      } catch (b) {
        throw ((b.cause = a), b);
      }
  }
  function ab() {
    var a = Error();
    Wa(a, "incident");
    Ya ? $a(a) : za(a);
  }
  function bb(a) {
    a = Error(a);
    Wa(a, "warning");
    $a(a);
    return a;
  }
  function cb(a, b) {
    if (b != null) {
      if (a == null) {
        var c;
        a = (c = Xa) != null ? c : (Xa = {});
      } else a = a.constructor;
      c = a[b] || 0;
      c >= 4 || ((a[b] = c + 1), ab());
    }
  }
  function db() {
    return typeof BigInt === "function";
  }
  function eb(a) {
    return Array.prototype.slice.call(a);
  }
  var fb =
    typeof u.Symbol === "function" && typeof (0, u.Symbol)() === "symbol";
  function gb(a) {
    return typeof u.Symbol === "function" && typeof (0, u.Symbol)() === "symbol"
      ? (0, u.Symbol)()
      : a;
  }
  var hb = gb(),
    ib = gb("0di"),
    jb = gb("2ex"),
    kb = gb("1oa"),
    lb = gb("0dg"),
    nb = gb("64big");
  var ob = fb
      ? function (a, b) {
          a[hb] |= b;
        }
      : function (a, b) {
          a.g !== void 0
            ? (a.g |= b)
            : Object.defineProperties(a, {
                g: { value: b, configurable: !0, writable: !0, enumerable: !1 },
              });
        },
    pb = fb
      ? function (a, b) {
          a[hb] &= ~b;
        }
      : function (a, b) {
          a.g !== void 0 && (a.g &= ~b);
        },
    D = fb
      ? function (a) {
          return a[hb] | 0;
        }
      : function (a) {
          return a.g | 0;
        },
    E = fb
      ? function (a) {
          return a[hb];
        }
      : function (a) {
          return a.g;
        },
    F = fb
      ? function (a, b) {
          a[hb] = b;
        }
      : function (a, b) {
          a.g !== void 0
            ? (a.g = b)
            : Object.defineProperties(a, {
                g: { value: b, configurable: !0, writable: !0, enumerable: !1 },
              });
        };
  function qb(a, b) {
    F(b, (a | 0) & -14591);
  }
  function rb(a, b) {
    F(b, (a | 34) & -14557);
  }
  var sb = {},
    tb = {};
  function ub(a) {
    return !(!a || typeof a !== "object" || a.g !== tb);
  }
  function vb(a) {
    return (
      a !== null &&
      typeof a === "object" &&
      !Array.isArray(a) &&
      a.constructor === Object
    );
  }
  function wb(a) {
    return !Array.isArray(a) || a.length ? !1 : D(a) & 1 ? !0 : !1;
  }
  var xb,
    yb = [];
  F(yb, 55);
  xb = Object.freeze(yb);
  function zb(a) {
    if (a & 2) throw Error();
  }
  var Ab = Object.freeze({});
  Object.freeze({});
  var Bb = Object.freeze({});
  var G = 0,
    H = 0;
  function Cb(a) {
    var b = a >>> 0;
    G = b;
    H = ((a - b) / 4294967296) >>> 0;
  }
  function Db(a) {
    if (a < 0) {
      Cb(-a);
      var b = x(Eb(G, H));
      a = b.next().value;
      b = b.next().value;
      G = a >>> 0;
      H = b >>> 0;
    } else Cb(a);
  }
  function Fb(a, b) {
    b >>>= 0;
    a >>>= 0;
    if (b <= 2097151) var c = "" + (4294967296 * b + a);
    else
      db()
        ? (c = "" + ((BigInt(b) << BigInt(32)) | BigInt(a)))
        : ((c = ((a >>> 24) | (b << 8)) & 16777215),
          (b = (b >> 16) & 65535),
          (a = (a & 16777215) + c * 6777216 + b * 6710656),
          (c += b * 8147497),
          (b *= 2),
          a >= 1e7 && ((c += (a / 1e7) >>> 0), (a %= 1e7)),
          c >= 1e7 && ((b += (c / 1e7) >>> 0), (c %= 1e7)),
          (c = b + Gb(c) + Gb(a)));
    return c;
  }
  function Gb(a) {
    a = String(a);
    return "0000000".slice(a.length) + a;
  }
  function Hb() {
    var a = G,
      b = H;
    b & 2147483648
      ? db()
        ? (a = "" + ((BigInt(b | 0) << BigInt(32)) | BigInt(a >>> 0)))
        : ((b = x(Eb(a, b))),
          (a = b.next().value),
          (b = b.next().value),
          (a = "-" + Fb(a, b)))
      : (a = Fb(a, b));
    return a;
  }
  function Eb(a, b) {
    b = ~b;
    a ? (a = ~a + 1) : (b += 1);
    return [a, b];
  }
  function Ib() {
    var a = !I(Jb).g,
      b = Kb;
    if (!a) throw Error((typeof b === "function" ? b() : b) || String(a));
  }
  function Lb(a) {
    a.wb = !0;
    return a;
  }
  var Kb = void 0;
  var Mb = Lb(function (a) {
      return typeof a === "number";
    }),
    Nb = Lb(function (a) {
      return typeof a === "string";
    }),
    Ob = Lb(function (a) {
      return typeof a === "boolean";
    });
  var Pb = typeof z.BigInt === "function" && typeof z.BigInt(0) === "bigint";
  function Qb(a) {
    var b = a;
    if (Nb(b)) {
      if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) throw Error(String(b));
    } else if (Mb(b) && !v(Number, "isSafeInteger").call(Number, b))
      throw Error(String(b));
    return Pb
      ? BigInt(a)
      : (a = Ob(a) ? (a ? "1" : "0") : Nb(a) ? a.trim() || "0" : String(a));
  }
  var Wb = Lb(function (a) {
      return Pb ? a >= Rb && a <= Sb : a[0] === "-" ? Tb(a, Ub) : Tb(a, Vb);
    }),
    Ub = v(Number, "MIN_SAFE_INTEGER").toString(),
    Rb = Pb ? BigInt(v(Number, "MIN_SAFE_INTEGER")) : void 0,
    Vb = v(Number, "MAX_SAFE_INTEGER").toString(),
    Sb = Pb ? BigInt(v(Number, "MAX_SAFE_INTEGER")) : void 0;
  function Tb(a, b) {
    if (a.length > b.length) return !1;
    if (a.length < b.length || a === b) return !0;
    for (var c = 0; c < a.length; c++) {
      var d = a[c],
        e = b[c];
      if (d > e) return !1;
      if (d < e) return !0;
    }
  }
  function Xb(a, b) {
    throw Error(b === void 0 ? "unexpected value " + a + "!" : b);
  }
  function Yb(a) {
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
  var Zb = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
  function $b(a) {
    var b = typeof a;
    switch (b) {
      case "bigint":
        return !0;
      case "number":
        return v(Number, "isFinite").call(Number, a);
    }
    return b !== "string" ? !1 : Zb.test(a);
  }
  function J(a) {
    if (a != null) {
      if (!v(Number, "isFinite").call(Number, a)) throw bb("enum");
      a |= 0;
    }
    return a;
  }
  function ac(a) {
    if (typeof a !== "number") throw bb("int32");
    if (!v(Number, "isFinite").call(Number, a)) throw bb("int32");
    return a | 0;
  }
  function bc(a) {
    return a == null ? a : ac(a);
  }
  function cc(a) {
    if (a == null) return a;
    if (typeof a === "string") {
      if (!a) return;
      a = +a;
    }
    if (typeof a === "number")
      return v(Number, "isFinite").call(Number, a) ? a | 0 : void 0;
  }
  function dc(a) {
    if (a == null) return a;
    if (typeof a === "string") {
      if (!a) return;
      a = +a;
    }
    if (typeof a === "number")
      return v(Number, "isFinite").call(Number, a) ? a >>> 0 : void 0;
  }
  function ec(a) {
    var b = 0;
    b = b === void 0 ? 0 : b;
    if (!$b(a)) throw bb("int64");
    var c = typeof a;
    switch (b) {
      case 4096:
        switch (c) {
          case "string":
            return fc(a);
          case "bigint":
            return String(BigInt.asIntN(64, a));
          default:
            return gc(a);
        }
      case 8192:
        switch (c) {
          case "string":
            return (
              (b = v(Math, "trunc").call(Math, Number(a))),
              v(Number, "isSafeInteger").call(Number, b)
                ? (a = Qb(b))
                : ((b = a.indexOf(".")),
                  b !== -1 && (a = a.substring(0, b)),
                  (a = db() ? Qb(BigInt.asIntN(64, BigInt(a))) : Qb(hc(a)))),
              a
            );
          case "bigint":
            return Qb(BigInt.asIntN(64, a));
          default:
            return Qb(ic(a));
        }
      case 0:
        switch (c) {
          case "string":
            return fc(a);
          case "bigint":
            return Qb(BigInt.asIntN(64, a));
          default:
            return ic(a);
        }
      default:
        return Xb(b, "Unknown format requested type for int64");
    }
  }
  function jc(a) {
    return a == null ? a : ec(a);
  }
  function kc(a) {
    return a[0] === "-"
      ? a.length < 20
        ? !0
        : a.length === 20 && Number(a.substring(0, 7)) > -922337
      : a.length < 19
      ? !0
      : a.length === 19 && Number(a.substring(0, 6)) < 922337;
  }
  function hc(a) {
    if (kc(a)) return a;
    if (a.length < 16) Db(Number(a));
    else if (db())
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
        ((b = x(Eb(G, H))),
        (a = b.next().value),
        (b = b.next().value),
        (G = a),
        (H = b));
    }
    return Hb();
  }
  function ic(a) {
    a = v(Math, "trunc").call(Math, a);
    if (!v(Number, "isSafeInteger").call(Number, a)) {
      Db(a);
      var b = G,
        c = H;
      if ((a = c & 2147483648))
        (b = (~b + 1) >>> 0), (c = ~c >>> 0), b == 0 && (c = (c + 1) >>> 0);
      b = c * 4294967296 + (b >>> 0);
      a = a ? -b : b;
    }
    return a;
  }
  function gc(a) {
    a = v(Math, "trunc").call(Math, a);
    if (v(Number, "isSafeInteger").call(Number, a)) a = String(a);
    else {
      var b = String(a);
      kc(b) ? (a = b) : (Db(a), (a = Hb()));
    }
    return a;
  }
  function fc(a) {
    var b = v(Math, "trunc").call(Math, Number(a));
    if (v(Number, "isSafeInteger").call(Number, b)) return String(b);
    b = a.indexOf(".");
    b !== -1 && (a = a.substring(0, b));
    return hc(a);
  }
  function lc(a) {
    if (typeof a !== "string") throw Error();
    return a;
  }
  function K(a) {
    if (a != null && typeof a !== "string") throw Error();
    return a;
  }
  function mc(a) {
    return a == null || typeof a === "string" ? a : void 0;
  }
  function nc(a, b, c, d) {
    if (a != null && typeof a === "object" && a.ha === sb) return a;
    if (!Array.isArray(a)) return c ? (d & 2 ? oc(b) : new b()) : void 0;
    var e = (c = D(a));
    e === 0 && (e |= d & 32);
    e |= d & 2;
    e !== c && F(a, e);
    return new b(a);
  }
  function oc(a) {
    var b = a[ib];
    if (b) return b;
    b = new a();
    ob(b.i, 34);
    return (a[ib] = b);
  }
  var tc = function (a) {
    var b = pc(a);
    if (b) return b;
    if (Math.random() > 0.01) return a;
    if (qc === void 0)
      if (typeof Proxy !== "function") qc = null;
      else
        try {
          qc = Proxy.toString().indexOf("[native code]") !== -1 ? Proxy : null;
        } catch (c) {
          qc = null;
        }
    b = qc;
    if (!b) return a;
    b = new b(a, {
      set: function (c, d, e) {
        rc();
        c[d] = e;
        return !0;
      },
    });
    sc(a, b);
    return b;
  };
  function rc() {
    ab();
  }
  var uc = void 0,
    vc = void 0,
    pc = function (a) {
      var b;
      return (b = uc) == null ? void 0 : b.get(a);
    },
    wc = function (a) {
      var b;
      return ((b = vc) == null ? void 0 : b.get(a)) || a;
    };
  function sc(a, b) {
    (uc || (uc = new u.WeakMap())).set(a, b);
    (vc || (vc = new u.WeakMap())).set(b, a);
  }
  var qc = void 0;
  var xc;
  function yc(a, b) {
    xc = b;
    a = new a(b);
    xc = void 0;
    return a;
  }
  function L(a, b, c) {
    a == null && (a = xc);
    xc = void 0;
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
          if (vb(c[f])) {
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
  function zc(a, b) {
    return Ac(b);
  }
  function Ac(a) {
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (a)
          if (Array.isArray(a)) {
            if (wb(a)) return;
          } else if (Ta && a != null && a instanceof Uint8Array) {
            if (Ua) {
              for (var b = "", c = 0, d = a.length - 10240; c < d; )
                b += String.fromCharCode.apply(
                  null,
                  a.subarray(c, (c += 10240))
                );
              b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
              a = btoa(b);
            } else {
              b === void 0 && (b = 0);
              Sa();
              b = Oa[b];
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
  function Bc(a, b, c) {
    a = eb(a);
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
  function Cc(a, b, c, d, e) {
    if (a != null) {
      if (Array.isArray(a))
        a = wb(a) ? void 0 : e && D(a) & 2 ? a : Dc(a, b, c, d !== void 0, e);
      else if (vb(a)) {
        var f = {},
          g;
        for (g in a)
          Object.prototype.hasOwnProperty.call(a, g) &&
            (f[g] = Cc(a[g], b, c, d, e));
        a = f;
      } else a = b(a, d);
      return a;
    }
  }
  function Dc(a, b, c, d, e) {
    var f = d || c ? D(a) : 0;
    d = d ? !!(f & 32) : void 0;
    a = eb(a);
    for (var g = 0; g < a.length; g++) a[g] = Cc(a[g], b, c, d, e);
    c && c(f, a);
    return a;
  }
  function Ec(a) {
    return a.ha === sb ? a.toJSON() : Ac(a);
  }
  function Fc(a, b, c) {
    c = c === void 0 ? rb : c;
    if (a != null) {
      if (Ta && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        var d = D(a);
        if (d & 2) return a;
        b && (b = d === 0 || (!!(d & 32) && !(d & 64 || !(d & 16))));
        return b
          ? (F(a, (d | 34) & -12293), a)
          : Dc(a, Fc, d & 4 ? rb : c, !0, !0);
      }
      a.ha === sb &&
        ((c = a.i),
        (d = E(c)),
        (a = d & 2 ? a : yc(a.constructor, Gc(c, d, !0))));
      return a;
    }
  }
  function Gc(a, b, c) {
    var d = c || b & 2 ? rb : qb,
      e = !!(b & 32);
    a = Bc(a, b, function (f) {
      return Fc(f, e, d);
    });
    ob(a, 32 | (c ? 2 : 0));
    return a;
  }
  function Hc(a) {
    var b = a.i,
      c = E(b);
    return c & 2 ? yc(a.constructor, Gc(b, c, !1)) : a;
  }
  function Ic(a, b, c, d) {
    if (!(4 & b)) return !0;
    if (c == null) return !1;
    !d &&
      c === 0 &&
      (4096 & b || 8192 & b) &&
      (a.constructor[lb] = (a.constructor[lb] | 0) + 1) < 5 &&
      ab();
    return c === 0 ? !1 : !(c & b);
  }
  var M = function (a, b) {
    a = a.i;
    return Jc(a, E(a), b);
  };
  function Kc(a, b, c, d) {
    b = d + (+!!(b & 512) - 1);
    if (!(b < 0 || b >= a.length || b >= c)) return a[b];
  }
  var Jc = function (a, b, c, d) {
      if (c === -1) return null;
      var e = (b >> 14) & 1023 || 536870912;
      if (c >= e) {
        if (b & 256) return a[a.length - 1][c];
      } else {
        var f = a.length;
        return d && b & 256 && ((d = a[f - 1][c]), d != null)
          ? (Kc(a, b, e, c) && cb(void 0, jb), d)
          : Kc(a, b, e, c);
      }
    },
    O = function (a, b, c) {
      var d = a.i,
        e = E(d);
      zb(e);
      N(d, e, b, c);
      return a;
    };
  function N(a, b, c, d, e) {
    var f = (b >> 14) & 1023 || 536870912;
    if (c >= f || (e && !Ea)) {
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
    return a === Ab ? 2 : 5;
  };
  function Lc(a, b, c, d) {
    var e = a.i,
      f = E(e),
      g = 2 & f ? 1 : d;
    d = Mc(e, f, b);
    var h = D(d);
    if (Ic(a, h, void 0, !1)) {
      if (4 & h || Object.isFrozen(d))
        (d = eb(d)), (h = Nc(h, f)), (f = N(e, f, b, d));
      for (var k = (a = 0); a < d.length; a++) {
        var l = c(d[a]);
        l != null && (d[k++] = l);
      }
      k < a && (d.length = k);
      h = Oc(h, f);
      h = (h | 20) & -4097;
      h &= -8193;
      F(d, h);
      2 & h && Object.freeze(d);
    }
    var q;
    g === 1 || (g === 4 && 32 & h)
      ? Pc(h) || ((f = h), (h |= 2), h !== f && F(d, h), Object.freeze(d))
      : ((c = g !== 5 ? !1 : !!(32 & h) || Pc(h) || !!pc(d)),
        (g === 2 || c) &&
          Pc(h) &&
          ((d = eb(d)),
          (h = Nc(h, f)),
          (h = Qc(h, f, !1)),
          F(d, h),
          (f = N(e, f, b, d))),
        Pc(h) || ((b = h), (h = Qc(h, f, !1)), h !== b && F(d, h)),
        c && (q = tc(d)));
    return q || d;
  }
  function Mc(a, b, c) {
    a = Jc(a, b, c);
    return Array.isArray(a) ? a : xb;
  }
  function Oc(a, b) {
    a === 0 && (a = Nc(a, b));
    return a | 1;
  }
  function Pc(a) {
    return (!!(2 & a) && !!(4 & a)) || !!(2048 & a);
  }
  function Rc(a, b, c, d) {
    var e = a.i,
      f = E(e);
    zb(f);
    if (c == null) return N(e, f, b), a;
    c = wc(c);
    var g = D(c),
      h = g,
      k = !!(2 & g) || Object.isFrozen(c),
      l = !k && (void 0 === Bb || !1);
    if (Ic(a, g))
      for (
        g = 21,
          k && ((c = eb(c)), (h = 0), (g = Nc(g, f)), (g = Qc(g, f, !0))),
          k = 0;
        k < c.length;
        k++
      )
        c[k] = d(c[k]);
    l && ((c = eb(c)), (h = 0), (g = Nc(g, f)), (g = Qc(g, f, !0)));
    g !== h && F(c, g);
    N(e, f, b, c);
    return a;
  }
  function Q(a, b, c, d) {
    var e = a.i,
      f = E(e);
    zb(f);
    N(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
    return a;
  }
  function Sc(a, b) {
    var c = a.i,
      d = D(c);
    zb(E(a.i));
    var e = d & 2;
    a = Jc(c, d, 4, !1);
    Array.isArray(a) || (a = xb);
    var f = !!(d & 32),
      g = D(a);
    g === 0 && f && !e ? ((g |= 33), F(a, g)) : g & 1 || ((g |= 1), F(a, g));
    if (e) g & 2 || ob(a, 34), Object.freeze(a);
    else if (2 & g || 2048 & g)
      (a = eb(a)), (e = 1), f && (e |= 32), F(a, e), N(c, d, 4, a, !1);
    c = a;
    d = D(c);
    d = 4 & d ? (4096 & d ? 4096 : 8192 & d ? 8192 : 0) : void 0;
    d = d != null ? d : 0;
    if (Array.isArray(b)) for (a = 0; a < b.length; a++) c.push(lc(b[a], d));
    else
      for (b = x(b), a = b.next(); !a.done; a = b.next())
        c.push(lc(a.value, d));
  }
  var R = function (a, b, c, d) {
      var e = a.i,
        f = E(e);
      zb(f);
      if (d == null) {
        var g = Tc(e);
        if (Uc(g, e, f, c) === b) g.set(c, 0);
        else return a;
      } else {
        g = Tc(e);
        var h = Uc(g, e, f, c);
        h !== b && (h && (f = N(e, f, h)), g.set(c, b));
      }
      N(e, f, b, d);
      return a;
    },
    Wc = function (a, b, c) {
      return Vc(a, b) === c ? c : -1;
    },
    Vc = function (a, b) {
      a = a.i;
      return Uc(Tc(a), a, E(a), b);
    };
  function Tc(a) {
    if (fb) {
      var b;
      return (b = a[kb]) != null ? b : (a[kb] = new u.Map());
    }
    if (kb in a) return a[kb];
    b = new u.Map();
    Object.defineProperty(a, kb, { value: b });
    return b;
  }
  function Uc(a, b, c, d) {
    var e = a.get(d);
    if (e != null) return e;
    for (var f = (e = 0); f < d.length; f++) {
      var g = d[f];
      Jc(b, c, g) != null && (e !== 0 && (c = N(b, c, e)), (e = g));
    }
    a.set(d, e);
    return e;
  }
  var Yc = function (a) {
    var b = Xc;
    a = a.i;
    var c = E(a);
    zb(c);
    var d = Jc(a, c, 4);
    b = Hc(nc(d, b, !0, c));
    d !== b && N(a, c, 4, b);
    return b;
  };
  function Zc(a, b, c, d) {
    a = a.i;
    var e = E(a),
      f = Jc(a, e, c, d);
    b = nc(f, b, !1, e);
    b !== f && b != null && N(a, e, c, b, d);
    return b;
  }
  var $c = function (a, b, c) {
      return (a = Zc(a, b, c, !1)) ? a : oc(b);
    },
    S = function (a, b, c) {
      var d = d === void 0 ? !1 : d;
      b = Zc(a, b, c, d);
      if (b == null) return b;
      a = a.i;
      var e = E(a);
      if (!(e & 2)) {
        var f = Hc(b);
        f !== b && ((b = f), N(a, e, c, b, d));
      }
      return b;
    };
  function ad(a, b, c, d, e, f, g) {
    var h = !!(2 & b);
    e = h ? 1 : e;
    f = !!f;
    g && (g = !h);
    h = Mc(a, b, d);
    var k = D(h),
      l = !!(4 & k);
    if (!l) {
      k = Oc(k, b);
      var q = h,
        m = b,
        p = !!(2 & k);
      p && (m |= 2);
      for (var r = !p, t = !0, B = 0, C = 0; B < q.length; B++) {
        var la = nc(q[B], c, !1, m);
        if (la instanceof c) {
          if (!p) {
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
      p && Object.freeze(q);
    }
    if (g && !(8 & k || (!h.length && (e === 1 || (e === 4 && 32 & k))))) {
      Pc(k) && ((h = eb(h)), (k = Nc(k, b)), (b = N(a, b, d, h)));
      c = h;
      g = k;
      for (q = 0; q < c.length; q++)
        (k = c[q]), (m = Hc(k)), k !== m && (c[q] = m);
      g |= 8;
      g = c.length ? g & -17 : g | 16;
      F(c, g);
      k = g;
    }
    var Va;
    e === 1 || (e === 4 && 32 & k)
      ? Pc(k) ||
        ((b = k),
        (k |= !h.length || (16 & k && (!l || 32 & k)) ? 2 : 2048),
        k !== b && F(h, k),
        Object.freeze(h))
      : ((l = e !== 5 ? !1 : !!(32 & k) || Pc(k) || !!pc(h)),
        (e === 2 || l) &&
          Pc(k) &&
          ((h = eb(h)),
          (k = Nc(k, b)),
          (k = Qc(k, b, f)),
          F(h, k),
          (b = N(a, b, d, h))),
        Pc(k) || ((a = k), (k = Qc(k, b, f)), k !== a && F(h, k)),
        l && (Va = tc(h)));
    return Va || h;
  }
  var T = function (a, b, c, d) {
      a = a.i;
      var e = E(a);
      return ad(a, e, b, c, d, !1, !(2 & e));
    },
    bd = function (a, b, c) {
      c == null && (c = void 0);
      return O(a, b, c);
    },
    cd = function (a, b, c, d) {
      d == null && (d = void 0);
      return R(a, b, c, d);
    },
    dd = function (a, b, c) {
      var d = a.i,
        e = E(d);
      zb(e);
      if (c == null) return N(d, e, b), a;
      c = wc(c);
      for (
        var f = D(c),
          g = f,
          h = !!(2 & f) || !!(2048 & f),
          k = h || Object.isFrozen(c),
          l = !k && (void 0 === Bb || !1),
          q = !0,
          m = !0,
          p = 0;
        p < c.length;
        p++
      ) {
        var r = c[p];
        h || ((r = !!(D(r.i) & 2)), q && (q = !r), m && (m = r));
      }
      h || ((f |= 5), (f = q ? f | 8 : f & -9), (f = m ? f | 16 : f & -17));
      if (l || (k && f !== g))
        (c = eb(c)), (g = 0), (f = Nc(f, e)), (f = Qc(f, e, !0));
      f !== g && F(c, f);
      N(d, e, b, c);
      return a;
    };
  function Nc(a, b) {
    a = (2 & b ? a | 2 : a & -3) | 32;
    return (a &= -2049);
  }
  function Qc(a, b, c) {
    (32 & b && c) || (a &= -33);
    return a;
  }
  function ed(a, b) {
    return a != null ? a : b;
  }
  var fd = function (a, b) {
      a = M(a, b);
      return a == null
        ? a
        : v(Number, "isFinite").call(Number, a)
        ? a | 0
        : void 0;
    },
    gd = function (a, b) {
      var c = c === void 0 ? !1 : c;
      a = M(a, b);
      return ed(
        a == null || typeof a === "boolean"
          ? a
          : typeof a === "number"
          ? !!a
          : void 0,
        c
      );
    },
    hd = function (a, b) {
      var c = c === void 0 ? 0 : c;
      return ed(cc(M(a, b)), c);
    },
    id = function (a, b) {
      var c = c === void 0 ? 0 : c;
      return ed(dc(M(a, b)), c);
    },
    jd = function (a, b) {
      var c = c === void 0 ? 0 : c;
      a = M(a, b);
      a != null &&
        (typeof a === "bigint"
          ? Wb(a)
            ? (a = Number(a))
            : ((a = BigInt.asIntN(64, a)), (a = Wb(a) ? Number(a) : String(a)))
          : (a = $b(a) ? (typeof a === "number" ? ic(a) : fc(a)) : void 0));
      return ed(a, c);
    },
    kd = function (a, b) {
      var c = c === void 0 ? 0 : c;
      a = a.i;
      var d = E(a),
        e = Jc(a, d, b);
      var f =
        e == null || typeof e === "number"
          ? e
          : e === "NaN" || e === "Infinity" || e === "-Infinity"
          ? Number(e)
          : void 0;
      f != null && f !== e && N(a, d, b, f);
      return ed(f, c);
    },
    U = function (a, b) {
      var c = c === void 0 ? "" : c;
      return ed(mc(M(a, b)), c);
    },
    V = function (a, b) {
      var c = 0;
      c = c === void 0 ? 0 : c;
      return ed(fd(a, b), c);
    },
    ld = function (a, b) {
      return Lc(a, b, mc, P());
    },
    md = function (a, b, c) {
      return V(a, Wc(a, c, b));
    };
  var nd,
    W = function (a, b, c) {
      this.i = L(a, b, c);
    };
  W.prototype.toJSON = function () {
    return od(this);
  };
  var pd = function (a) {
    try {
      return (nd = !0), JSON.stringify(od(a), zc);
    } finally {
      nd = !1;
    }
  };
  W.prototype.ha = sb;
  function od(a) {
    a = nd ? a.i : Dc(a.i, Ec, void 0, void 0, !1);
    var b = !nd,
      c = a.length;
    if (c) {
      var d = a[c - 1],
        e = vb(d);
      e ? c-- : (d = void 0);
      var f = a;
      if (e) {
        b: {
          var g = d;
          var h = {};
          e = !1;
          if (g)
            for (var k in g)
              if (Object.prototype.hasOwnProperty.call(g, k))
                if (isNaN(+k)) h[k] = g[k];
                else {
                  var l = g[k];
                  Array.isArray(l) &&
                    (wb(l) || (ub(l) && l.size === 0)) &&
                    (l = null);
                  l == null && (e = !0);
                  l != null && (h[k] = l);
                }
          if (e) {
            for (var q in h) break b;
            h = null;
          } else h = g;
        }
        g = h == null ? d != null : h !== d;
      }
      for (; c > 0; c--) {
        k = f[c - 1];
        if (!(k == null || wb(k) || (ub(k) && k.size === 0))) break;
        var m = !0;
      }
      if (f !== a || g || m) {
        if (!b) f = Array.prototype.slice.call(f, 0, c);
        else if (m || g || h) f.length = c;
        h && f.push(h);
      }
      m = f;
    } else m = a;
    return m;
  }
  function qd(a) {
    return function (b) {
      if (b == null || b == "") b = new a();
      else {
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error("dnarr");
        ob(b, 32);
        b = yc(a, b);
      }
      return b;
    };
  }
  var rd = function (a) {
    this.i = L(a);
  };
  y(rd, W);
  var sd = function (a) {
    this.i = L(a);
  };
  y(sd, W);
  var td = qd(sd);
  var wd = function (a, b) {
    this.g = (a === ud && b) || "";
    this.j = vd;
  };
  wd.prototype.toString = function () {
    return this.g;
  };
  var vd = {},
    ud = {};
  var xd = function (a) {
    var b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  };
  var yd = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function zd(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b;
  }
  var Ad = function (a) {
    this.g = a;
  };
  Ad.prototype.toString = function () {
    return this.g + "";
  };
  var Bd = function (a) {
      return a instanceof Ad && a.constructor === Ad
        ? a.g
        : "type_error:TrustedResourceUrl";
    },
    Cd = {};
  var Dd = {},
    Ed = function (a) {
      this.g = a;
    };
  Ed.prototype.toString = function () {
    return this.g.toString();
  }; /* 
 
 Copyright Google LLC 
 SPDX-License-Identifier: Apache-2.0 
*/
  function Fd(a, b) {
    b = b === void 0 ? {} : b;
    a = '<script src="' + Gd(Bd(a).toString()) + '"';
    b.async && (a += " async");
    b.Ma && (a += ' custom-element="' + Gd(b.Ma) + '"');
    b.defer && (a += " defer");
    b.id && (a += ' id="' + Gd(b.id) + '"');
    b.nonce && (a += ' nonce="' + Gd(b.nonce) + '"');
    b.type && (a += ' type="' + Gd(b.type) + '"');
    b.Aa && (a += ' crossorigin="' + Gd(b.Aa) + '"');
    return new Ed(a + ">\x3c/script>", Dd);
  }
  function Gd(a) {
    return a
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  }
  function Hd(a) {
    var b = a.split(/\?|#/),
      c = /\?/.test(a) ? "?" + b[1] : "";
    return {
      path: b[0],
      Za: c,
      hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : "",
    };
  }
  function Id(a) {
    var b = ta.apply(1, arguments);
    if (b.length === 0) return new Ad(a[0], Cd);
    for (var c = a[0], d = 0; d < b.length; d++)
      c += encodeURIComponent(b[d]) + a[d + 1];
    return new Ad(c, Cd);
  }
  function Jd(a, b) {
    a = Hd(Bd(a).toString());
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
    return new Ad(a.path + c + a.hash, Cd);
  }
  function Kd(a) {
    var b, c;
    return (a =
      (c = (b = a.document).querySelector) == null
        ? void 0
        : c.call(b, "script[nonce]"))
      ? a.nonce || a.getAttribute("nonce") || ""
      : "";
  }
  function Ld(a, b) {
    a.src = Bd(b);
    (b = Kd((a.ownerDocument && a.ownerDocument.defaultView) || window)) &&
      a.setAttribute("nonce", b);
  }
  function Md(a, b) {
    a.write(
      b instanceof Ed && b.constructor === Ed ? b.g : "type_error:SafeHtml"
    );
  }
  var Nd = function () {
    return Da && Fa
      ? !Fa.mobile && (A("iPad") || A("Android") || A("Silk"))
      : A("iPad") || (A("Android") && !A("Mobile")) || A("Silk");
  };
  var Od = RegExp(
      "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
    ),
    Pd = function (a) {
      return a ? decodeURI(a) : a;
    },
    Qd = /#|$/,
    Rd = function (a, b) {
      var c = a.search(Qd);
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
  var Sd = function (a) {
      try {
        var b;
        if ((b = !!a && a.location.href != null))
          a: {
            try {
              Ma(a.foo);
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
    Td = function (a) {
      var b = b === void 0 ? !1 : b;
      var c = c === void 0 ? z : c;
      for (var d = 0; c && d++ < 40 && ((!b && !Sd(c)) || !a(c)); )
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
    Ud = function (a) {
      var b = a;
      Td(function (c) {
        b = c;
        return !1;
      });
      return b;
    },
    Vd = function (a) {
      return Sd(a.top) ? a.top : null;
    },
    Wd = function () {
      if (!u.globalThis.crypto) return Math.random();
      try {
        var a = new Uint32Array(1);
        u.globalThis.crypto.getRandomValues(a);
        return a[0] / 65536 / 65536;
      } catch (b) {
        return Math.random();
      }
    },
    Xd = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    },
    Yd = function (a) {
      var b = a.length;
      if (b == 0) return 0;
      for (var c = 305419896, d = 0; d < b; d++)
        c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
      return c > 0 ? c : 4294967296 + c;
    },
    Zd = xd(function () {
      return (
        Da && Fa
          ? Fa.mobile
          : !Nd() && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile"))
      )
        ? 2
        : Nd()
        ? 1
        : 0;
    });
  function $d(a, b) {
    if (a.length && b.head) {
      a = x(a);
      for (var c = a.next(); !c.done; c = a.next())
        if ((c = c.value) && b.head) {
          var d = ae("META");
          b.head.appendChild(d);
          d.httpEquiv = "origin-trial";
          d.content = c;
        }
    }
  }
  var be = function (a) {
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
    ae = function (a, b) {
      b = b === void 0 ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  var ce = {
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
  var de = { tb: 0, ub: 1, sb: 2 };
  var ee = function (a) {
    this.i = L(a);
  };
  y(ee, W);
  ee.prototype.getVersion = function () {
    return hd(this, 2);
  };
  function fe(a) {
    return Ra(a.length % 4 !== 0 ? a + "A" : a)
      .map(function (b) {
        return ((n = b.toString(2)), v(n, "padStart")).call(n, 8, "0");
      })
      .join("");
  }
  function ge(a) {
    if (!/^[0-1]+$/.test(a))
      throw Error("Invalid input [" + a + "] not a bit string.");
    return parseInt(a, 2);
  }
  function he(a) {
    if (!/^[0-1]+$/.test(a))
      throw Error("Invalid input [" + a + "] not a bit string.");
    for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++)
      b.length <= d && b.push(b[d - 1] + b[d - 2]),
        (c += parseInt(a[d], 2) * b[d]);
    return c;
  }
  function ie(a) {
    var b = fe(a),
      c = ge(b.slice(0, 6));
    a = ge(b.slice(6, 12));
    var d = new ee();
    c = Q(d, 1, bc(c), 0);
    a = Q(c, 2, bc(a), 0);
    b = b.slice(12);
    c = ge(b.slice(0, 12));
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
      var g = ge(e[0]) === 0;
      e = e.slice(1);
      var h = je(e, b),
        k = d.length === 0 ? 0 : d[d.length - 1];
      k = he(h) + k;
      e = e.slice(h.length);
      if (g) d.push(k);
      else {
        g = je(e, b);
        h = he(g);
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
    return Rc(a, 3, d, ac);
  }
  function je(a, b) {
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
  var ke = "a".charCodeAt(),
    le = zd(ce),
    me = zd(de);
  var ne = function (a) {
    this.i = L(a);
  };
  y(ne, W);
  var oe = function () {
      var a = new ne();
      return Q(a, 1, jc(0), "0");
    },
    pe = function (a) {
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
          : $b(d)
          ? f === "string"
            ? fc(d)
            : e
            ? gc(d)
            : ic(d)
          : void 0;
      b = b(ed(d, c));
      a = hd(a, 2);
      return new Date(b * 1e3 + a / 1e6);
    };
  var qe = function (a) {
      if (/[^01]/.test(a))
        throw Error("Input bitstring " + a + " is malformed!");
      this.j = a;
      this.g = 0;
    },
    te = function (a) {
      var b = X(a, 16);
      return !!X(a, 1) === !0
        ? ((a = re(a)),
          a.forEach(function (c) {
            if (c > b)
              throw Error("ID " + c + " is past MaxVendorId " + b + "!");
          }),
          a)
        : se(a, b);
    },
    re = function (a) {
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
    se = function (a, b, c) {
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
  qe.prototype.skip = function (a) {
    this.g += a;
  };
  var ve = function (a) {
      try {
        var b = Ra(a.split(".")[0])
            .map(function (d) {
              return ((n = d.toString(2)), v(n, "padStart")).call(n, 8, "0");
            })
            .join(""),
          c = new qe(b);
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
        b.specialFeatureOptins = ue(se(c, 12, me), me);
        b.purpose = {
          consents: ue(se(c, 24, le), le),
          legitimateInterests: ue(se(c, 24, le), le),
        };
        b.purposeOneTreatment = !!X(c, 1);
        b.publisherCC =
          String.fromCharCode(ke + X(c, 6)) + String.fromCharCode(ke + X(c, 6));
        b.vendor = {
          consents: ue(te(c), null),
          legitimateInterests: ue(te(c), null),
        };
        return b;
      } catch (d) {
        return null;
      }
    },
    ue = function (a, b) {
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
  var we = function (a) {
    this.i = L(a);
  };
  y(we, W);
  var xe = function (a, b) {
    var c = c === void 0 ? {} : c;
    this.error = a;
    this.context = b.context;
    this.msg = b.message || "";
    this.id = b.id || "jserror";
    this.meta = c;
  };
  var ye = null;
  function ze(a) {
    a = a === void 0 ? z : a;
    return (a = a.performance) && a.now ? a.now() : null;
  }
  function Ae(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = ae("IMG", a.document);
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
      yd(e, "load", f);
      yd(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Ce = function (a) {
      var b = b === void 0 ? !1 : b;
      var c =
        "https://pagead2.googlesyndication.com/pagead/gen_204?id=rcs_internal";
      Xd(a, function (d, e) {
        if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Be(c, b);
    },
    Be = function (a, b) {
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
        : Ae(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d);
    };
  function De(a, b) {
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
        od(b),
        a
          .filter(function (d) {
            return !d.U;
          })
          .map(c),
      ]);
    } catch (d) {
      return Ee(d, b), "";
    }
  }
  function Ee(a, b) {
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
      Ce({ m: d, b: V(b, 1) || null, v: U(b, 2) || null });
    } catch (g) {}
  }
  var Fe = function (a, b) {
    var c = new we();
    a = Q(c, 1, J(a), 0);
    b = Q(a, 2, K(b), "");
    a = b.i;
    c = E(a);
    this.l = c & 2 ? b : yc(b.constructor, Gc(a, c, !0));
  };
  var Ge = function (a) {
    this.i = L(a);
  };
  y(Ge, W);
  var Ie = function (a, b) {
      return R(a, 3, He, b == null ? b : Yb(b));
    },
    He = [1, 2, 3];
  var Je = function (a) {
    this.i = L(a);
  };
  y(Je, W);
  var Ke = [2, 4];
  var Le = function (a) {
    this.i = L(a);
  };
  y(Le, W);
  var Me = function (a) {
      var b = new Le();
      return Q(b, 1, K(a), "");
    },
    Ne = function (a, b) {
      var c = a.i,
        d = E(c);
      zb(d);
      c = ad(c, d, Ge, 4, 2, !0);
      b = b != null ? b : new Ge();
      c.push(b);
      D(b.i) & 2 ? pb(c, 8) : pb(c, 16);
      return a;
    };
  var Oe = function (a) {
    this.i = L(a);
  };
  y(Oe, W);
  var Pe = function (a) {
    this.i = L(a);
  };
  y(Pe, W);
  var Qe = function (a, b) {
      return Q(a, 1, J(b), 0);
    },
    Re = function (a, b) {
      return Q(a, 2, J(b), 0);
    };
  var Se = function (a) {
    this.i = L(a);
  };
  y(Se, W);
  var Te = [1, 2];
  var Ue = function (a) {
    this.i = L(a);
  };
  y(Ue, W);
  var Ve = function (a, b) {
      return bd(a, 1, b);
    },
    We = function (a, b) {
      return dd(a, 2, b);
    },
    Xe = function (a, b) {
      return Rc(a, 4, b, ac);
    },
    Ye = function (a, b) {
      return dd(a, 5, b);
    },
    Ze = function (a, b) {
      return Q(a, 6, J(b), 0);
    };
  var $e = function (a) {
    this.i = L(a);
  };
  y($e, W);
  var af = [1, 2, 3, 4, 6];
  var bf = function (a) {
    this.i = L(a);
  };
  y(bf, W);
  var cf = function (a) {
    this.i = L(a);
  };
  y(cf, W);
  var df = [2, 3, 4];
  var ef = function (a) {
    this.i = L(a);
  };
  y(ef, W);
  var ff = [3, 4, 5],
    gf = [6, 7];
  var hf = function (a) {
    this.i = L(a);
  };
  y(hf, W);
  var jf = [4, 5];
  var kf = function (a) {
    this.i = L(a);
  };
  y(kf, W);
  kf.prototype.getTagSessionCorrelator = function () {
    cb(this, nb);
    return jd(this, 2);
  };
  var mf = function (a) {
      var b = new kf();
      return cd(b, 4, lf, a);
    },
    lf = [4, 5, 7, 8, 9];
  var nf = function (a) {
    this.i = L(a);
  };
  y(nf, W);
  var of = function (a) {
    this.i = L(a);
  };
  y(of, W);
  var pf = function (a) {
    this.i = L(a);
  };
  y(pf, W);
  pf.prototype.getTagSessionCorrelator = function () {
    cb(this, nb);
    return jd(this, 1);
  };
  var qf = function (a) {
    this.i = L(a);
  };
  y(qf, W);
  var rf = [4, 6];
  var tf = function (a) {
      this.g = a;
      this.fb = new sf(this.g);
    },
    sf = function (a) {
      this.g = a;
      this.Ra = new uf(this.g);
    },
    uf = function (a) {
      this.g = a;
      this.outstream = new vf();
      this.request = new wf();
      this.threadYield = new xf();
      this.Sa = new yf(this.g);
      this.Ua = new zf(this.g);
    },
    yf = function (a) {
      this.g = a;
    };
  yf.prototype.ba = function (a) {
    var b = this.g,
      c = b.J,
      d = Ne(Ne(Me("JwITQ"), Ie(new Ge(), a.da)), Ie(new Ge(), a.fa)),
      e = new Je();
    a = R(e, 2, Ke, jc(Math.round(a.ia)));
    d = bd(d, 3, a);
    c.call(b, d);
  };
  var zf = function (a) {
    this.g = a;
  };
  zf.prototype.ba = function (a) {
    var b = this.g,
      c = b.J,
      d = Ne(Ne(Me("Pn3Upd"), Ie(new Ge(), a.da)), Ie(new Ge(), a.fa)),
      e = new Je();
    a = R(e, 2, Ke, jc(Math.round(a.ia)));
    d = bd(d, 3, a);
    c.call(b, d);
  };
  var vf = function () {},
    wf = function () {},
    xf = function () {
      this.latency = new Af();
    },
    Af = function () {},
    Bf = function () {
      Fe.apply(this, arguments);
      this.Xa = new tf(this);
    };
  y(Bf, Fe);
  var Cf = function () {
    Bf.apply(this, arguments);
  };
  y(Cf, Bf);
  Cf.prototype.eb = function () {
    this.o.apply(
      this,
      ja(
        ta.apply(0, arguments).map(function (a) {
          return { U: !0, ja: 2, ga: od(a) };
        })
      )
    );
  };
  Cf.prototype.V = function () {
    this.o.apply(
      this,
      ja(
        ta.apply(0, arguments).map(function (a) {
          return { U: !0, ja: 4, ga: od(a) };
        })
      )
    );
  };
  Cf.prototype.J = function () {
    this.o.apply(
      this,
      ja(
        ta.apply(0, arguments).map(function (a) {
          return { U: !1, ja: 1, ga: od(a) };
        })
      )
    );
  };
  var Df = function (a, b) {
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
  var Ef = function (a, b, c, d, e, f, g, h) {
    Cf.call(this, a, b);
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
  y(Ef, Cf);
  var Ff = function (a) {
    a.j !== null && (clearTimeout(a.j), (a.j = null));
    if (a.g.length) {
      var b = De(a.g, a.l);
      a.O(a.P + "?e=1", b);
      a.g = [];
    }
  };
  Ef.prototype.o = function () {
    var a = ta.apply(0, arguments),
      b = this;
    try {
      this.N && De(this.g.concat(a), this.l).length >= 65536 && Ff(this),
        this.A &&
          !this.I &&
          ((this.I = !0),
          this.A.g(function () {
            Ff(b);
          })),
        this.g.push.apply(this.g, ja(a)),
        this.g.length >= this.M && Ff(this),
        this.g.length &&
          this.j === null &&
          (this.j = setTimeout(function () {
            Ff(b);
          }, this.R));
    } catch (c) {
      Ee(c, this.l);
    }
  };
  var Gf = function (a, b, c, d, e, f) {
    Ef.call(
      this,
      a,
      b,
      "https://pagead2.googlesyndication.com/pagead/ping",
      Df,
      c === void 0 ? 1e3 : c,
      d === void 0 ? 100 : d,
      (e === void 0 ? !1 : e) && !!u.globalThis.fetch,
      f
    );
  };
  y(Gf, Ef);
  var Hf = function (a, b) {
      this.g = a;
      this.defaultValue = b === void 0 ? !1 : b;
    },
    If = function (a, b) {
      this.g = a;
      this.defaultValue = b === void 0 ? 0 : b;
    };
  var Jf = new Hf(501898423),
    Kf = new Hf(642361450, !0),
    Lf = new Hf(45624259),
    Mf = new If(635239304, 100),
    Nf = new If(523264412),
    Of = new If(24),
    Pf = new (function (a, b) {
      b = b === void 0 ? [] : b;
      this.g = a;
      this.defaultValue = b;
    })(1934, [
      "AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==",
      "Amm8/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==",
      "A9uiHDzQFAhqALUhTgTYJcz9XrGH2y0/9AORwCSapUO/f7Uh7ysIzyszNkuWDLqNYg8446Uj48XIstBW1qv/wAQAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
      "A9R+gkZL3TWq+Z7RJ2L0c7ZN7FZD5z4mHmVvjrPitg/EMz9P3j5d3W7Vw5ZR9jtJGmWKltM4BO3smNzpCgwYuwwAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
    ]);
  var Qf = new Hf(203);
  var Rf = function (a) {
    this.i = L(a);
  };
  y(Rf, W);
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
  var Vf = qd(Uf);
  var Wf = function (a) {
    this.g = a || { cookie: "" };
  };
  Wf.prototype.set = function (a, b, c) {
    var d = !1;
    if (typeof c === "object") {
      var e = c.xb;
      d = c.yb || !1;
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
  Wf.prototype.get = function (a, b) {
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
  Wf.prototype.isEmpty = function () {
    return !this.g.cookie;
  };
  Wf.prototype.clear = function () {
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
  function Xf(a) {
    a = Yf(a);
    try {
      var b = a ? Vf(a) : null;
    } catch (c) {
      b = null;
    }
    return b ? S(b, Tf, 4) || null : null;
  }
  function Yf(a) {
    a = new Wf(a).get("FCCDCF", "");
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
  zd(ce).map(function (a) {
    return Number(a);
  });
  zd(de).map(function (a) {
    return Number(a);
  });
  var Zf = function (a) {
      this.g = a;
    },
    ag = function (a) {
      a.__tcfapiPostMessageReady || $f(new Zf(a));
    },
    $f = function (a) {
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
  var bg = function (a) {
      this.g = a;
      this.j = null;
    },
    dg = function (a) {
      a.__uspapiPostMessageReady || cg(new bg(a));
    },
    cg = function (a) {
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
  var eg = function (a) {
    this.i = L(a);
  };
  y(eg, W);
  var fg = function (a) {
    this.i = L(a);
  };
  y(fg, W);
  var gg = qd(fg);
  function hg(a, b, c) {
    function d(m) {
      if (m.length < 10) return null;
      var p = h(m.slice(0, 4));
      p = k(p);
      m = h(m.slice(6, 10));
      m = l(m);
      return "1" + p + m + "N";
    }
    function e(m) {
      if (m.length < 10) return null;
      var p = h(m.slice(0, 6));
      p = k(p);
      m = h(m.slice(6, 10));
      m = l(m);
      return "1" + p + m + "N";
    }
    function f(m) {
      if (m.length < 12) return null;
      var p = h(m.slice(0, 6));
      p = k(p);
      m = h(m.slice(8, 12));
      m = l(m);
      return "1" + p + m + "N";
    }
    function g(m) {
      if (m.length < 18) return null;
      var p = h(m.slice(0, 8));
      p = k(p);
      m = h(m.slice(12, 18));
      m = l(m);
      return "1" + p + m + "N";
    }
    function h(m) {
      for (var p = [], r = 0, t = 0; t < m.length / 2; t++)
        p.push(ge(m.slice(r, r + 2))), (r += 2);
      return p;
    }
    function k(m) {
      return m.every(function (p) {
        return p === 1;
      })
        ? "Y"
        : "N";
    }
    function l(m) {
      return m.some(function (p) {
        return p === 1;
      })
        ? "Y"
        : "N";
    }
    if (a.length === 0) return null;
    a = a.split(".");
    if (a.length > 2) return null;
    a = fe(a[0]);
    var q = ge(a.slice(0, 6));
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
  function ig(a, b) {
    var c = a.document,
      d = function () {
        if (!a.frames[b])
          if (c.body) {
            var e = ae("IFRAME", c);
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
  var lg = function (a, b) {
      this.g = a;
      this.o = b;
      b = Yf(this.g.document);
      try {
        var c = b ? Vf(b) : null;
      } catch (e) {
        c = null;
      }
      (b = c)
        ? ((c = S(b, Sf, 5) || null),
          (b = T(b, Rf, 7, P())),
          (b = jg(b != null ? b : [])),
          (c = { ya: c, Ba: b }))
        : (c = { ya: null, Ba: null });
      b = c;
      c = kg(this, b.Ba);
      b = b.ya;
      if (b != null && mc(M(b, 2)) != null && U(b, 2).length !== 0) {
        var d = Zc(b, ne, 1, !1) !== void 0 ? S(b, ne, 1) : oe();
        b = { uspString: U(b, 2), Z: pe(d) };
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
        (c = Xf(a.document)) && mc(M(c, 1)) != null ? U(c, 1) : null;
      this.j = (a = Xf(a.document)) && mc(M(a, 2)) != null ? U(a, 2) : null;
    },
    pg = function (a) {
      var b = mg(Kf);
      a !== a.top ||
        a.__uspapi ||
        a.frames.__uspapiLocator ||
        ((a = new lg(a, b)), ng(a), og(a));
    },
    ng = function (a) {
      !a.l ||
        a.g.__uspapi ||
        a.g.frames.__uspapiLocator ||
        ((a.g.__uspapiManager = "fc"),
        ig(a.g, "__uspapiLocator"),
        ya(
          "__uspapi",
          function (b, c, d) {
            typeof d === "function" &&
              b === "getUSPData" &&
              d({ version: 1, uspString: a.l }, !0);
          },
          a.g
        ),
        dg(a.g));
    },
    jg = function (a) {
      a = v(a, "find").call(a, function (b) {
        return b && V(b, 1) === 13;
      });
      if (a == null ? 0 : mc(M(a, 2)) != null)
        try {
          return gg(U(a, 2));
        } catch (b) {}
      return null;
    },
    kg = function (a, b) {
      if (
        b == null ||
        mc(M(b, 1)) == null ||
        U(b, 1).length === 0 ||
        T(b, eg, 2, P()).length === 0
      )
        return null;
      var c = U(b, 1);
      try {
        var d = ie(c.split("~")[0]);
        var e = v(c, "includes").call(c, "~") ? c.split("~").slice(1) : [];
      } catch (f) {
        return null;
      }
      b = T(b, eg, 2, P()).reduce(function (f, g) {
        return jd(qg(f), 1) > jd(qg(g), 1) ? f : g;
      });
      d = Lc(d, 3, cc, P()).indexOf(hd(b, 1));
      return d === -1 || d >= e.length
        ? null
        : { uspString: hg(e[d], hd(b, 1), a.o), Z: pe(qg(b)) };
    },
    qg = function (a) {
      return Zc(a, ne, 2, !1) !== void 0 ? S(a, ne, 2) : oe();
    },
    og = function (a) {
      !a.tcString ||
        a.g.__tcfapi ||
        a.g.frames.__tcfapiLocator ||
        ((a.g.__tcfapiManager = "fc"),
        ig(a.g, "__tcfapiLocator"),
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
                      ? ((e = ve(a.tcString)),
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
        ag(a.g));
    };
  function rg(a, b) {
    var c = T(a, ef, 2, P());
    if (!c.length) return sg(a, b);
    a = V(a, 1);
    if (a === 1) {
      var d = rg(c[0], b);
      return d.success ? { success: !0, value: !d.value } : d;
    }
    c = Ka(c, function (h) {
      return rg(h, b);
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
  function sg(a, b) {
    var c = Vc(a, ff);
    a: {
      switch (c) {
        case 3:
          var d = md(a, 3, ff);
          break a;
        case 4:
          d = md(a, 4, ff);
          break a;
        case 5:
          d = md(a, 5, ff);
          break a;
      }
      d = void 0;
    }
    if (!d) return { success: !1, D: 2 };
    b = (b = b[c]) && b[d];
    if (!b) return { success: !1, L: d, S: c, D: 1 };
    try {
      var e = b.apply;
      var f = ld(a, 8);
      var g = e.call(b, null, ja(f));
    } catch (h) {
      return { success: !1, L: d, S: c, D: 2 };
    }
    e = V(a, 1);
    if (e === 4) return { success: !0, value: !!g };
    if (e === 5) return { success: !0, value: g != null };
    if (e === 12) a = U(a, Wc(a, gf, 7));
    else
      a: {
        switch (c) {
          case 4:
            a = kd(a, Wc(a, gf, 6));
            break a;
          case 5:
            a = U(a, Wc(a, gf, 7));
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
        c = Nb(a) && Nb(g) && new RegExp(a).test(g);
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
  function tg(a, b) {
    return a
      ? b
        ? rg(a, b)
        : { success: !1, D: 1 }
      : { success: !0, value: !0 };
  }
  var Xc = function (a) {
    this.i = L(a);
  };
  y(Xc, W);
  var ug = function (a) {
    this.i = L(a);
  };
  y(ug, W);
  ug.prototype.getValue = function () {
    return S(this, Xc, 2);
  };
  var vg = function (a) {
    this.i = L(a);
  };
  y(vg, W);
  var wg = qd(vg),
    xg = [1, 2, 3, 6, 7, 8];
  var yg = function (a, b, c) {
      var d = d === void 0 ? new Gf(6, "unknown", b) : d;
      this.A = a;
      this.o = c;
      this.j = d;
      this.g = [];
      this.l = a > 0 && Wd() < 1 / a;
    },
    Ag = function (a, b, c, d, e, f) {
      if (a.l) {
        var g = Re(Qe(new Pe(), b), c);
        b = Ze(We(Ve(Ye(Xe(new Ue(), d), e), g), a.g.slice()), f);
        b = mf(b);
        a.j.V(zg(a, b));
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
    Bg = function (a, b, c, d) {
      if (a.l) {
        var e = new Oe();
        b = O(e, 1, bc(b));
        c = O(b, 2, bc(c));
        d = O(c, 3, J(d));
        c = new kf();
        d = cd(c, 8, lf, d);
        a.j.V(zg(a, d));
      }
    },
    Cg = function (a, b, c, d, e) {
      if (a.l) {
        var f = new hf();
        b = bd(f, 1, b);
        c = O(b, 2, J(c));
        d = O(c, 3, bc(d));
        if (e.S === void 0) R(d, 4, jf, J(e.D));
        else
          switch (e.S) {
            case 3:
              c = new cf();
              c = R(c, 2, df, J(e.L));
              e = O(c, 1, J(e.D));
              cd(d, 5, jf, e);
              break;
            case 4:
              c = new cf();
              c = R(c, 3, df, J(e.L));
              e = O(c, 1, J(e.D));
              cd(d, 5, jf, e);
              break;
            case 5:
              (c = new cf()),
                (c = R(c, 4, df, J(e.L))),
                (e = O(c, 1, J(e.D))),
                cd(d, 5, jf, e);
          }
        e = new kf();
        e = cd(e, 9, lf, d);
        a.j.V(zg(a, e));
      }
    },
    zg = function (a, b) {
      var c = Date.now();
      c = v(Number, "isFinite").call(Number, c) ? Math.round(c) : 0;
      b = Q(b, 1, jc(c), "0");
      c = be(window);
      b = Q(b, 2, jc(c), "0");
      return Q(b, 6, jc(a.A), "0");
    };
  var I = function (a) {
    var b = "ca";
    if (a.ca && a.hasOwnProperty(b)) return a.ca;
    b = new a();
    return (a.ca = b);
  };
  var Dg = function () {
    var a = {};
    this.C = ((a[3] = {}), (a[4] = {}), (a[5] = {}), a);
  };
  var Eg = /^true$/.test("false");
  function Fg(a, b) {
    switch (b) {
      case 1:
        return md(a, 1, xg);
      case 2:
        return md(a, 2, xg);
      case 3:
        return md(a, 3, xg);
      case 6:
        return md(a, 6, xg);
      case 8:
        return md(a, 8, xg);
      default:
        return null;
    }
  }
  function Gg(a, b) {
    if (!a) return null;
    switch (b) {
      case 1:
        return gd(a, 1);
      case 7:
        return U(a, 3);
      case 2:
        return kd(a, 2);
      case 3:
        return U(a, 3);
      case 6:
        return ld(a, 4);
      case 8:
        return ld(a, 4);
      default:
        return null;
    }
  }
  var Hg = xd(function () {
    if (!Eg) return {};
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
  function Ig(a, b, c, d) {
    var e = (d = d === void 0 ? 0 : d),
      f,
      g;
    I(Jg).l[e] =
      (g = (f = I(Jg).l[e]) == null ? void 0 : f.add(b)) != null
        ? g
        : new u.Set().add(b);
    e = Hg();
    if (e[b] != null) return e[b];
    b = Kg(d)[b];
    if (!b) return c;
    b = wg(JSON.stringify(b));
    b = Lg(b);
    a = Gg(b, a);
    return a != null ? a : c;
  }
  function Lg(a) {
    var b = I(Dg).C;
    if (b && Vc(a, xg) !== 8) {
      var c = La(T(a, ug, 5, P()), function (f) {
        f = tg(S(f, ef, 1), b);
        return f.success && f.value;
      });
      if (c) {
        var d;
        return (d = c.getValue()) != null ? d : null;
      }
    }
    var e;
    return (e = S(a, Xc, 4)) != null ? e : null;
  }
  var Jg = function () {
    this.j = {};
    this.o = [];
    this.l = {};
    this.g = new u.Map();
  };
  function Mg(a, b, c) {
    return !!Ig(1, a, b === void 0 ? !1 : b, c);
  }
  function Ng(a, b, c) {
    b = b === void 0 ? 0 : b;
    a = Number(Ig(2, a, b, c));
    return isNaN(a) ? b : a;
  }
  function Og(a, b, c) {
    b = b === void 0 ? "" : b;
    a = Ig(3, a, b, c);
    return typeof a === "string" ? a : b;
  }
  function Pg(a, b, c) {
    b = b === void 0 ? [] : b;
    a = Ig(6, a, b, c);
    return Array.isArray(a) ? a : b;
  }
  function Qg(a, b, c) {
    b = b === void 0 ? [] : b;
    a = Ig(8, a, b, c);
    return Array.isArray(a) ? a : b;
  }
  function Kg(a) {
    return I(Jg).j[a] || (I(Jg).j[a] = {});
  }
  function Rg(a, b) {
    var c = Kg(b);
    Xd(a, function (d, e) {
      if (c[e]) {
        d = wg(JSON.stringify(d));
        if (fd(d, Wc(d, xg, 8)) != null) {
          var f = wg(JSON.stringify(c[e])),
            g = Yc(d);
          f = ld($c(f, Xc, 4), 4);
          Sc(g, f);
        }
        c[e] = od(d);
      } else c[e] = d;
    });
  }
  function Sg(a, b, c, d, e) {
    e = e === void 0 ? !1 : e;
    var f = [],
      g = [];
    b = x(b);
    for (var h = b.next(); !h.done; h = b.next()) {
      h = h.value;
      for (var k = Kg(h), l = x(a), q = l.next(); !q.done; q = l.next()) {
        q = q.value;
        var m = Vc(q, xg),
          p = Fg(q, m);
        if (p) {
          var r = void 0,
            t = void 0,
            B = void 0;
          var C =
            (r =
              (B = I(Jg).g.get(h)) == null
                ? void 0
                : (t = B.get(p)) == null
                ? void 0
                : t.slice(0)) != null
              ? r
              : [];
          a: {
            r = p;
            t = m;
            B = new $e();
            switch (t) {
              case 1:
                R(B, 1, af, J(r));
                break;
              case 2:
                R(B, 2, af, J(r));
                break;
              case 3:
                R(B, 3, af, J(r));
                break;
              case 6:
                R(B, 4, af, J(r));
                break;
              case 8:
                R(B, 6, af, J(r));
                break;
              default:
                C = void 0;
                break a;
            }
            Rc(B, 5, C, ac);
            C = B;
          }
          if ((r = C))
            (t = void 0), (r = !((t = I(Jg).l[h]) == null || !t.has(p)));
          r && f.push(C);
          if (m === 8 && k[p])
            (C = wg(JSON.stringify(k[p]))),
              (m = Yc(q)),
              (C = ld($c(C, Xc, 4), 4)),
              Sc(m, C);
          else {
            if ((m = C))
              (r = void 0), (m = !((r = I(Jg).g.get(h)) == null || !r.has(p)));
            m && g.push(C);
          }
          e ||
            ((m = p),
            (C = h),
            (r = d),
            (t = I(Jg)),
            t.g.has(C) || t.g.set(C, new u.Map()),
            t.g.get(C).has(m) || t.g.get(C).set(m, []),
            r && t.g.get(C).get(m).push(r));
          k[p] = od(q);
        }
      }
    }
    if (f.length || g.length)
      (a = d != null ? d : void 0),
        c.l &&
          c.o &&
          ((d = new bf()),
          (f = dd(d, 2, f)),
          (g = dd(f, 3, g)),
          a && Q(g, 1, bc(a), 0),
          (f = new kf()),
          (g = cd(f, 7, lf, g)),
          c.j.V(zg(c, g)));
  }
  function Tg(a, b) {
    b = Kg(b);
    a = x(a);
    for (var c = a.next(); !c.done; c = a.next()) {
      c = c.value;
      var d = wg(JSON.stringify(c)),
        e = Vc(d, xg);
      (d = Fg(d, e)) && (b[d] || (b[d] = c));
    }
  }
  function Ug() {
    return v(Object, "keys")
      .call(Object, I(Jg).j)
      .map(function (a) {
        return Number(a);
      });
  }
  function Vg(a) {
    ((n = I(Jg).o), v(n, "includes")).call(n, a) || Rg(Kg(4), a);
  }
  function Y(a, b, c) {
    c.hasOwnProperty(a) || Object.defineProperty(c, String(a), { value: b });
  }
  function Z(a, b, c) {
    return b[a] || c;
  }
  function Wg(a) {
    Y(5, Mg, a);
    Y(6, Ng, a);
    Y(7, Og, a);
    Y(8, Pg, a);
    Y(17, Qg, a);
    Y(13, Tg, a);
    Y(15, Vg, a);
  }
  function Xg(a) {
    Y(
      4,
      function (b) {
        I(Dg).C = b;
      },
      a
    );
    Y(
      9,
      function (b, c) {
        var d = I(Dg);
        d.C[3][b] == null && (d.C[3][b] = c);
      },
      a
    );
    Y(
      10,
      function (b, c) {
        var d = I(Dg);
        d.C[4][b] == null && (d.C[4][b] = c);
      },
      a
    );
    Y(
      11,
      function (b, c) {
        var d = I(Dg);
        d.C[5][b] == null && (d.C[5][b] = c);
      },
      a
    );
    Y(
      14,
      function (b) {
        for (
          var c = I(Dg), d = x([3, 4, 5]), e = d.next();
          !e.done;
          e = d.next()
        )
          (e = e.value), v(Object, "assign").call(Object, c.C[e], b[e]);
      },
      a
    );
  }
  function Yg(a) {
    a.hasOwnProperty("init-done") ||
      Object.defineProperty(a, "init-done", { value: !0 });
  }
  var Zg = function () {};
  Zg.prototype.l = function () {};
  Zg.prototype.j = function () {};
  Zg.prototype.g = function () {
    return [];
  };
  var $g = function (a, b, c) {
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
  function ah(a) {
    I(Zg).l(a);
  }
  function bh(a, b) {
    try {
      var c = a.split(".");
      a = z;
      for (var d = 0, e; a != null && d < c.length; d++)
        (e = a), (a = a[c[d]]), typeof a === "function" && (a = e[c[d]]());
      var f = a;
      if (typeof f === b) return f;
    } catch (g) {}
  }
  var ch = {},
    dh = {},
    eh = {},
    fh = {},
    gh =
      ((fh[3] =
        ((ch[8] = function (a) {
          try {
            return wa(a) != null;
          } catch (b) {}
        }),
        (ch[9] = function (a) {
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
        (ch[10] = function () {
          return window === window.top;
        }),
        (ch[6] = function (a) {
          var b = I(Zg).g();
          return Array.prototype.indexOf.call(b, Number(a), void 0) >= 0;
        }),
        (ch[27] = function (a) {
          a = bh(a, "boolean");
          return a !== void 0 ? a : void 0;
        }),
        (ch[60] = function (a) {
          try {
            return !!z.document.querySelector(a);
          } catch (b) {}
        }),
        (ch[80] = function (a) {
          try {
            return !!z.matchMedia(a).matches;
          } catch (b) {}
        }),
        (ch[69] = function (a) {
          var b = z.document;
          b = b === void 0 ? document : b;
          var c;
          return !(
            (c = b.featurePolicy) == null ||
            !((n = c.features()), v(n, "includes")).call(n, a)
          );
        }),
        (ch[70] = function (a) {
          var b = z.document;
          b = b === void 0 ? document : b;
          var c;
          return !(
            (c = b.featurePolicy) == null ||
            !((n = c.allowedFeatures()), v(n, "includes")).call(n, a)
          );
        }),
        (ch[79] = function (a) {
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
        ch)),
      (fh[4] =
        ((dh[3] = function () {
          return Zd();
        }),
        (dh[6] = function (a) {
          a = bh(a, "number");
          return a !== void 0 ? a : void 0;
        }),
        dh)),
      (fh[5] =
        ((eh[2] = function () {
          return window.location.href;
        }),
        (eh[3] = function () {
          try {
            return window.top.location.hash;
          } catch (a) {
            return "";
          }
        }),
        (eh[4] = function (a) {
          a = bh(a, "string");
          return a !== void 0 ? a : void 0;
        }),
        eh)),
      fh);
  function hh() {
    var a = a === void 0 ? z : a;
    return a.ggeac || (a.ggeac = {});
  }
  var ih = function (a) {
    this.i = L(a);
  };
  y(ih, W);
  ih.prototype.getId = function () {
    return hd(this, 1);
  };
  var jh = function (a) {
    this.i = L(a);
  };
  y(jh, W);
  var kh = function (a) {
    return T(a, ih, 2, P());
  };
  var lh = function (a) {
    this.i = L(a);
  };
  y(lh, W);
  var mh = function (a) {
    this.i = L(a);
  };
  y(mh, W);
  var nh = function (a) {
    this.i = L(a);
  };
  y(nh, W);
  function oh(a) {
    var b = {};
    return ph(
      ((b[0] = new u.Map()), (b[1] = new u.Map()), (b[2] = new u.Map()), b),
      a
    );
  }
  function ph(a, b) {
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
        d = d.value, e = T(d, jh, 2, P()), e = x(e), f = e.next();
        !f.done;
        f = e.next()
      )
        if (((f = f.value), kh(f).length !== 0)) {
          var g = id(f, 8);
          if (V(f, 4) && !V(f, 13) && !V(f, 14)) {
            var h = void 0;
            g = (h = c.get(V(f, 4))) != null ? h : 0;
            h = id(f, 1) * kh(f).length;
            c.set(V(f, 4), g + h);
          }
          h = [];
          for (var k = 0; k < kh(f).length; k++) {
            var l = {
              Ia: g,
              Ea: id(f, 1),
              Fa: kh(f).length,
              Ya: k,
              T: V(d, 1),
              W: f,
              G: kh(f)[k],
            };
            h.push(l);
          }
          qh(a[2], V(f, 10), h) ||
            qh(a[1], V(f, 4), h) ||
            qh(a[0], kh(f)[0].getId(), h);
        }
    return a;
  }
  function qh(a, b, c) {
    if (!b) return !1;
    a.has(b) || a.set(b, []);
    var d;
    (d = a.get(b)).push.apply(d, ja(c));
    return !0;
  }
  function rh(a) {
    a = a === void 0 ? Wd() : a;
    return function (b) {
      return Yd(b + " + " + a) % 1e3;
    };
  }
  var sh = [12, 13, 20],
    th = function (a, b, c, d) {
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
      if (ye === null) {
        ye = "";
        try {
          b = "";
          try {
            b = z.top.location.hash;
          } catch (g) {
            b = z.location.hash;
          }
          b && (ye = (f = b.match(/\bdeid=([\d,]+)/)) ? f[1] : "");
        } catch (g) {}
      }
      if ((f = ye))
        for (f = x(f.split(",") || []), b = f.next(); !b.done; b = f.next())
          (b = Number(b.value)) && (this.j[b] = !0);
      d = x(d);
      for (f = d.next(); !f.done; f = d.next()) this.j[f.value] = !0;
    },
    wh = function (a, b, c, d) {
      var e = [],
        f;
      if ((f = b !== 9)) a.o[b] ? (f = !0) : ((a.o[b] = !0), (f = !1));
      if (f) return Ag(a.B, b, c, e, [], 4), e;
      f = v(sh, "includes").call(sh, b);
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
          var p = x(m.value);
          m = p.next().value;
          p = p.next().value;
          var r = m,
            t = p;
          m = new Se();
          p = t.filter(function (Va) {
            return Va.T === b && a.j[Va.G.getId()] && uh(a, Va);
          });
          if (p.length)
            for (m = x(p), p = m.next(); !p.done; p = m.next())
              h.push(p.value.G);
          else if (!a.aa) {
            p = void 0;
            l === 2 ? ((p = d[1]), R(m, 2, Te, J(r))) : (p = d[0]);
            var B = void 0,
              C = void 0;
            p =
              (C = (B = p) == null ? void 0 : B(String(r))) != null
                ? C
                : l === 2 && V(t[0].W, 11) === 1
                ? void 0
                : d[0](String(r));
            if (p !== void 0) {
              r = x(t);
              for (t = r.next(); !t.done; t = r.next())
                if (((t = t.value), t.T === b)) {
                  B = p - t.Ia;
                  var la = t;
                  C = la.Ea;
                  var mb = la.Fa;
                  la = la.Ya;
                  B < 0 ||
                    B >= C * mb ||
                    B % mb !== la ||
                    !uh(a, t) ||
                    ((B = V(t.W, 13)),
                    B !== 0 &&
                      B !== void 0 &&
                      ((C = a.l[String(B)]),
                      C !== void 0 && C !== t.G.getId()
                        ? Bg(a.B, a.l[String(B)], t.G.getId(), B)
                        : (a.l[String(B)] = t.G.getId())),
                    h.push(t.G));
                }
              Vc(m, Te) !== 0 && (Q(m, 3, bc(p), 0), g.push(m));
            }
          }
        }
      }
      d = x(h);
      for (h = d.next(); !h.done; h = d.next())
        (h = h.value),
          (k = h.getId()),
          e.push(k),
          vh(a, k, f ? 4 : c),
          Sg(T(h, vg, 2, P()), f ? Ug() : [c], a.B, k);
      Ag(a.B, b, c, e, g, 1);
      return e;
    },
    vh = function (a, b, c) {
      a.g[c] || (a.g[c] = []);
      a = a.g[c];
      v(a, "includes").call(a, b) || a.push(b);
    },
    uh = function (a, b) {
      var c = I(Dg).C,
        d = tg(S(b.W, ef, 3), c);
      if (!d.success) return Cg(a.B, S(b.W, ef, 3), b.T, b.G.getId(), d), !1;
      if (!d.value) return !1;
      c = tg(S(b.G, ef, 3), c);
      return c.success
        ? c.value
          ? !0
          : !1
        : (Cg(a.B, S(b.G, ef, 3), b.T, b.G.getId(), c), !1);
    },
    xh = function (a, b) {
      b = b
        .map(function (c) {
          return new lh(c);
        })
        .filter(function (c) {
          return !v(sh, "includes").call(sh, V(c, 1));
        });
      a.K = ph(a.K, b);
    },
    yh = function (a, b) {
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
          return wh(a, c, d, e);
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
          return void xh(a, c);
        },
        b
      );
      Y(
        16,
        function (c, d) {
          return void vh(a, c, d);
        },
        b
      );
    };
  var zh = function () {
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
  function mg(a) {
    return I(zh).g(a.g, a.defaultValue);
  }
  function Ah(a) {
    return I(zh).j(a.g, a.defaultValue);
  }
  var Bh = function () {
      this.g = function () {};
    },
    Ch = function (a, b) {
      a.g = Z(14, b, function () {});
    };
  function Dh(a) {
    I(Bh).g(a);
  }
  var Eh, Fh, Gh, Hh, Ih, Jh;
  function Kh(a) {
    var b = a.Pa;
    var c = a.C;
    var d = a.config;
    var e = a.Ka === void 0 ? hh() : a.Ka;
    var f = a.xa === void 0 ? 0 : a.xa;
    var g =
      a.B === void 0
        ? new yg(
            (Hh = (Eh = S(b, mh, 5)) == null ? void 0 : jd(Eh, 2)) != null
              ? Hh
              : 0,
            (Ih = (Fh = S(b, mh, 5)) == null ? void 0 : jd(Fh, 4)) != null
              ? Ih
              : 0,
            (Jh = (Gh = S(b, mh, 5)) == null ? void 0 : gd(Gh, 3)) != null
              ? Jh
              : !1
          )
        : a.B;
    a = a.K === void 0 ? oh(T(b, lh, 2, P(Ab))) : a.K;
    e.hasOwnProperty("init-done")
      ? (Z(12, e, function () {})(
          T(b, lh, 2, P()).map(function (h) {
            return od(h);
          })
        ),
        Z(13, e, function () {})(
          T(b, vg, 1, P()).map(function (h) {
            return od(h);
          }),
          f
        ),
        c && Z(14, e, function () {})(c),
        Lh(f, e))
      : (yh(new th(a, f, g, d), e),
        Wg(e),
        Xg(e),
        Yg(e),
        Lh(f, e),
        Sg(T(b, vg, 1, P(Ab)), [f], g, void 0, !0),
        (Eg = Eg || !(!d || !d.ea)),
        Dh(gh),
        c && Dh(c));
  }
  function Lh(a, b) {
    var c = (b = b === void 0 ? hh() : b);
    $g(I(Zg), c, a);
    Mh(b, a);
    a = b;
    Ch(I(Bh), a);
    I(zh).o();
  }
  function Mh(a, b) {
    var c = I(zh);
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
  var Nh = ia(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
    Oh = function () {
      var a = a === void 0 ? "jserror" : a;
      var b = b === void 0 ? 0.01 : b;
      var c = c === void 0 ? Id(Nh) : c;
      this.l = a;
      this.j = b;
      this.g = c;
    };
  var Ph = function (a, b) {
      b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
      b.length < 2048 && b.push(a);
    },
    Qh = function (a, b) {
      var c = ze(b);
      c && Ph({ label: a, type: 9, value: c }, b);
    },
    Rh = function (a, b, c) {
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
        var g = ze(),
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
            Ph(
              v(Object, "assign").call(
                Object,
                {},
                {
                  label: a.toString(),
                  value: g,
                  duration: (ze() || 0) - g,
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
    Sh = function (a, b) {
      return Rh(a, b, function (c, d) {
        var e = new Oh();
        var f = f === void 0 ? e.j : f;
        var g = g === void 0 ? e.l : g;
        Math.random() > f ||
          ((d.error && d.meta && d.id) ||
            (d = new xe(d, { context: c, id: g })),
          (z.google_js_errors = z.google_js_errors || []),
          z.google_js_errors.push(d),
          z.error_rep_loaded ||
            ((f = z.document),
            (c = ae("SCRIPT", f)),
            Ld(c, e.g),
            (e = f.getElementsByTagName("script")[0]) &&
              e.parentNode &&
              e.parentNode.insertBefore(c, e),
            (z.error_rep_loaded = !0)));
      });
    };
  function Th(a, b) {
    return b == null ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b);
  }
  function Uh(a, b) {
    return "&" + a + "=" + b.toFixed(3);
  }
  function Vh() {
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
  function Wh(a) {
    a = a.id;
    return (
      a != null &&
      (Vh().has(a) ||
        v(a, "startsWith").call(a, "google_ads_iframe_") ||
        v(a, "startsWith").call(a, "aswift"))
    );
  }
  function Xh(a, b, c) {
    if (!a.sources) return !1;
    switch (Yh(a)) {
      case 2:
        var d = Zh(a);
        if (d)
          return c.some(function (f) {
            return $h(d, f);
          });
        break;
      case 1:
        var e = ai(a);
        if (e)
          return b.some(function (f) {
            return $h(e, f);
          });
    }
    return !1;
  }
  function Yh(a) {
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
  function ai(a) {
    return bi(a, function (b) {
      return b.currentRect;
    });
  }
  function Zh(a) {
    return bi(a, function (b) {
      return b.previousRect;
    });
  }
  function bi(a, b) {
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
  function $h(a, b) {
    var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
    a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
    return c <= 0 || a <= 0
      ? !1
      : (100 * c * a) / ((b.right - b.left) * (b.bottom - b.top)) >= 50;
  }
  var ci = function () {
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
    di,
    ei,
    hi = function () {
      var a = new ci();
      if (mg(Qf)) {
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
            fi(a).observe(d);
          }
          gi(a);
        }
      }
    },
    fi = function (a) {
      a.B ||
        (a.B = new PerformanceObserver(
          Sh(640, function (b) {
            ii(a, b);
          })
        ));
      return a.B;
    },
    gi = function (a) {
      var b = Sh(641, function () {
          var d = document;
          (d.prerendering
            ? 3
            : { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
                d.visibilityState ||
                  d.webkitVisibilityState ||
                  d.mozVisibilityState ||
                  ""
              ] || 0) === 2 && ji(a);
        }),
        c = Sh(641, function () {
          return void ji(a);
        });
      document.addEventListener("visibilitychange", b);
      document.addEventListener("pagehide", c);
      a.ka = function () {
        document.removeEventListener("visibilitychange", b);
        document.removeEventListener("pagehide", c);
        fi(a).disconnect();
      };
    },
    ji = function (a) {
      if (!a.sa) {
        a.sa = !0;
        fi(a).takeRecords();
        var b =
          "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
        window.LayoutShift &&
          ((b += Uh("cls", a.J)),
          (b += Uh("mls", a.O)),
          (b += Th("nls", a.R)),
          window.LayoutShiftAttribution &&
            ((b += Uh("cas", a.A)),
            (b += Th("nas", a.ra)),
            (b += Uh("was", a.wa))),
          (b += Uh("wls", a.Y)),
          (b += Uh("tls", a.va)));
        window.LargestContentfulPaint &&
          ((b += Th("lcp", a.pa)), (b += Th("lcps", a.oa)));
        window.PerformanceEventTiming && a.ma && (b += Th("fid", a.la));
        window.PerformanceLongTaskTiming &&
          ((b += Th("cbt", a.I)), (b += Th("mbt", a.N)), (b += Th("nlt", a.X)));
        for (
          var c = 0,
            d = x(document.getElementsByTagName("iframe")),
            e = d.next();
          !e.done;
          e = d.next()
        )
          Wh(e.value) && c++;
        b += Th("nif", c);
        c = window.google_unique_id;
        b += Th("ifi", typeof c === "number" ? c : 0);
        c = I(Zg).g();
        b += "&eid=" + encodeURIComponent(c.join());
        b += "&top=" + (z === z.top ? 1 : 0);
        b += a.ua ? "&qqid=" + encodeURIComponent(a.ua) : Th("pvsid", be(z));
        window.googletag && (b += "&gpt=1");
        c = Math.min(
          a.g.length - 1,
          Math.floor((a.B ? a.na : performance.interactionCount || 0) / 50)
        );
        c >= 0 && ((c = a.g[c].latency), c >= 0 && (b += Th("inp", c)));
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
    ki = function (a, b, c, d) {
      if (!b.hadRecentInput) {
        a.J += Number(b.value);
        Number(b.value) > a.O && (a.O = Number(b.value));
        a.R += 1;
        if ((c = Xh(b, c, d))) (a.A += b.value), a.ra++;
        if (b.startTime - a.qa > 5e3 || b.startTime - a.ta > 1e3)
          (a.qa = b.startTime), (a.j = 0), (a.l = 0);
        a.ta = b.startTime;
        a.j += b.value;
        c && (a.l += b.value);
        a.j > a.Y &&
          ((a.Y = a.j), (a.wa = a.l), (a.va = b.startTime + b.duration));
      }
    },
    ii = function (a, b) {
      var c = di !== window.scrollX || ei !== window.scrollY ? [] : li,
        d = mi();
      b = x(b.getEntries());
      for (var e = b.next(), f = {}; !e.done; f = { F: void 0 }, e = b.next())
        switch (((f.F = e.value), (e = f.F.entryType), e)) {
          case "layout-shift":
            ki(a, f.F, c, d);
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
            ) || ni(a, f.F);
            break;
          case "longtask":
            f = Math.max(0, f.F.duration - 50);
            a.I += f;
            a.N = Math.max(a.N, f);
            a.X += 1;
            break;
          case "event":
            ni(a, f.F);
            break;
          default:
            Xb(e);
        }
    },
    ni = function (a, b) {
      oi(a, b);
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
    oi = function (a, b) {
      b.interactionId &&
        ((a.P = Math.min(a.P, b.interactionId)),
        (a.o = Math.max(a.o, b.interactionId)),
        (a.na = a.o ? (a.o - a.P) / 7 + 1 : 0));
    },
    mi = function () {
      var a = v(Array, "from")
          .call(Array, document.getElementsByTagName("iframe"))
          .filter(Wh),
        b = []
          .concat(ja(Vh()))
          .map(function (c) {
            return document.getElementById(c);
          })
          .filter(function (c) {
            return c !== null;
          });
      di = window.scrollX;
      ei = window.scrollY;
      return (li = [].concat(ja(a), ja(b)).map(function (c) {
        return c.getBoundingClientRect();
      }));
    },
    li = [];
  var pi = function (a) {
    this.i = L(a);
  };
  y(pi, W);
  pi.prototype.getVersion = function () {
    return U(this, 2);
  };
  var qi = function (a) {
    this.i = L(a);
  };
  y(qi, W);
  var ri = function (a, b) {
      return O(a, 2, K(b));
    },
    si = function (a, b) {
      return O(a, 3, K(b));
    },
    ti = function (a, b) {
      return O(a, 4, K(b));
    },
    ui = function (a, b) {
      return O(a, 5, K(b));
    },
    vi = function (a, b) {
      return O(a, 9, K(b));
    },
    wi = function (a, b) {
      return dd(a, 10, b);
    },
    xi = function (a, b) {
      return O(a, 11, b == null ? b : Yb(b));
    },
    yi = function (a, b) {
      return O(a, 1, K(b));
    },
    zi = function (a, b) {
      return O(a, 7, b == null ? b : Yb(b));
    };
  var Ai =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function Bi(a) {
    var b;
    return (b = a.google_tag_data) != null ? b : (a.google_tag_data = {});
  }
  function Ci(a) {
    var b, c;
    return (
      typeof ((b = a.navigator) == null
        ? void 0
        : (c = b.userAgentData) == null
        ? void 0
        : c.getHighEntropyValues) === "function"
    );
  }
  function Di(a) {
    if (!Ci(a)) return null;
    var b = Bi(a);
    if (b.uach_promise) return b.uach_promise;
    a = a.navigator.userAgentData.getHighEntropyValues(Ai).then(function (c) {
      b.uach != null || (b.uach = c);
      return c;
    });
    return (b.uach_promise = a);
  }
  function Ei(a) {
    var b;
    return xi(
      wi(
        ui(
          ri(
            yi(
              ti(
                zi(
                  vi(si(new qi(), a.architecture || ""), a.bitness || ""),
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
              var d = new pi();
              d = O(d, 1, K(c.brand));
              return O(d, 2, K(c.version));
            })) || []
      ),
      a.wow64 || !1
    );
  }
  function Fi(a) {
    var b, c;
    return (c =
      (b = Di(a)) == null
        ? void 0
        : b.then(function (d) {
            return Ei(d);
          })) != null
      ? c
      : null;
  }
  function Gi(a, b) {
    var c = {};
    b = ((c[0] = rh(b.ab)), c);
    I(Zg).j(a, b);
  }
  var Hi = {},
    Ii =
      ((Hi[253] = !1),
      (Hi[246] = []),
      (Hi[150] = ""),
      (Hi[221] = !1),
      (Hi[263] = !1),
      (Hi[36] = /^true$/.test("false")),
      (Hi[264] = !1),
      (Hi[172] = null),
      (Hi[260] = void 0),
      (Hi[251] = null),
      Hi),
    Jb = function () {
      this.g = !1;
    };
  function Ji(a) {
    I(Jb).g = !0;
    return Ii[a];
  }
  function Ki(a, b) {
    I(Jb).g = !0;
    Ii[a] = b;
  }
  var Li =
    /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js)/;
  function Mi(a) {
    var b = a.Ca;
    var c = a.Va;
    var d = a.Ha;
    var e = a.Ta;
    var f = a.Oa;
    var g = a.Qa;
    var h = b ? !Li.test(b.src) : !0;
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
            p;
          var r = r === void 0 ? window : r;
          var t;
          r =
            (t =
              (p = Pd(r.location.href.match(Od)[3] || null)) == null
                ? void 0
                : p.split(".")) != null
              ? t
              : [];
          p =
            r.length < 2
              ? null
              : r[r.length - 1] === "uk"
              ? r.length < 3
                ? null
                : Yd(r.splice(r.length - 3).join("."))
              : Yd(r.splice(r.length - 2).join("."));
          return q.call(l, m(p));
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
  function Ni(a, b) {
    var c = new nh(Ji(246));
    if (!T(c, vg, 1, P()).length && T(a, vg, 1, P()).length) {
      var d = T(a, vg, 1, P());
      dd(c, 1, d);
    }
    !T(c, lh, 2, P()).length &&
      T(a, lh, 2, P()).length &&
      ((d = T(a, lh, 2, P())), dd(c, 2, d));
    Zc(c, mh, 5, !1) === void 0 &&
      Zc(a, mh, 5, !1) !== void 0 &&
      ((a = S(a, mh, 5)), bd(c, 5, a));
    Kh({ Pa: c, C: Mi(b), xa: 2, config: { ea: b.ea } });
    b.Ha.forEach(ah);
  }
  function Oi(a, b, c, d, e) {
    a = a.location.host;
    var f = Rd(b.src, "domain");
    b = Rd(b.src, "network-code");
    if (a || f || b) {
      var g = {};
      a && (g.ippd = a);
      f && (g.pppd = f);
      b && (g.pppnc = b);
      Ah(Nf) && (g.ppc_eid = Ah(Nf).toString());
      a = g;
    } else a = void 0;
    if (a) {
      c = [
        c
          ? new wd(ud, "https://pagead2.googlesyndication.com")
          : new wd(ud, "https://securepubads.g.doubleclick.net"),
        new wd(ud, "/pagead/ppub_config"),
      ];
      f = "";
      for (b = 0; b < c.length; b++)
        (g = c[b]),
          (f +=
            g instanceof wd && g.constructor === wd && g.j === vd
              ? g.g
              : "type_error:Const");
      c = Jd(new Ad(f, Cd), new u.Map(v(Object, "entries").call(Object, a)));
      Pi(c, d, e);
    } else e(new u.globalThis.Error("no provided or inferred data"));
  }
  function Pi(a, b, c) {
    var d = new u.globalThis.XMLHttpRequest();
    d.open("GET", a.toString(), !0);
    d.withCredentials = !1;
    d.onload = function () {
      d.status < 300
        ? (Qh("13", window), b(d.status === 204 ? "" : d.responseText))
        : c(new u.globalThis.Error("resp:" + d.status));
    };
    d.onerror = function () {
      return void c(
        new u.globalThis.Error("s:" + d.status + " rs:" + d.readyState)
      );
    };
    d.send();
  }
  var Qi = function () {
      this.o = [];
      this.l = [];
    },
    Ti = function (a, b, c, d, e) {
      if (Ud(b) === Vd(b) && c) {
        var f = e == null ? void 0 : U($c(e, rd, 1), 1);
        (f == null ? 0 : f.length) &&
        v(b.location.hostname, "includes").call(b.location.hostname, f)
          ? (Ri(a), Si(a, void 0, e))
          : ((n = ["http:", "https:"]), v(n, "includes")).call(
              n,
              b.location.protocol
            ) &&
            (Ri(a),
            Oi(
              b.top,
              c,
              d,
              function (g) {
                return void Si(a, g);
              },
              function (g) {
                Si(a, void 0, void 0, g);
              }
            ));
      }
    },
    Ri = function (a) {
      Ji(260);
      Ki(260, function (b) {
        a.g !== void 0 || a.j ? b(a.g, a.j) : a.o.push(b);
      });
    },
    Si = function (a, b, c, d) {
      a.g = b != null ? b : c == null ? void 0 : pd(c);
      a.A = c;
      !a.A && a.g && a.l.length && (a.A = td(a.g));
      a.j = d;
      b = x(a.o);
      for (c = b.next(); !c.done; c = b.next()) (c = c.value), c(a.g, a.j);
      b = x(a.l);
      for (c = b.next(); !c.done; c = b.next()) (c = c.value), c(a.A, a.j);
      a.o.length = 0;
      a.l.length = 0;
    };
  var Ui = function (a) {
    this.i = L(a);
  };
  y(Ui, W);
  var Vi = qd(Ui);
  var Xi = function () {
      return [].concat(ja(v(Wi, "values").call(Wi))).reduce(function (a, b) {
        return a + b;
      }, 0);
    },
    Wi = new u.Map();
  function Yi(a, b, c) {
    if (a.cb) {
      c = c.error && c.meta && c.id ? c.error : c;
      var d = new qf(),
        e = new pf();
      try {
        var f = be(window);
        Q(e, 1, jc(f), "0");
      } catch (p) {}
      try {
        var g = I(Zg).g();
        Rc(e, 2, g, ac);
      } catch (p) {}
      try {
        Q(e, 3, K(window.document.URL), "");
      } catch (p) {}
      f = bd(d, 2, e);
      g = new of();
      b = Q(g, 1, J(b), 0);
      try {
        var h = Nb(c == null ? void 0 : c.name) ? c.name : "Unknown error";
        Q(b, 2, K(h), "");
      } catch (p) {}
      try {
        var k = Nb(c == null ? void 0 : c.message) ? c.message : "Caught " + c;
        Q(b, 3, K(k), "");
      } catch (p) {}
      try {
        var l = Nb(c == null ? void 0 : c.stack) ? c.stack : Error().stack;
        l && Rc(b, 4, l.split(/\n\s*/), lc);
      } catch (p) {}
      h = bd(f, 1, b);
      k = new nf();
      try {
        Q(k, 1, K(a.Da), "");
      } catch (p) {}
      try {
        var q = Xi();
        Q(k, 2, bc(q), 0);
      } catch (p) {}
      try {
        var m = [].concat(ja(v(Wi, "keys").call(Wi)));
        Rc(k, 3, m, lc);
      } catch (p) {}
      cd(h, 4, rf, k);
      Q(h, 5, jc(a.Na), "0");
      a.Ga.eb(h);
    }
  }
  function Zi(a, b) {
    try {
      var c = Kb;
      if (!Nb(a)) {
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
      return Vi(a);
    } catch (g) {
      return Yi(b, 838, g), new Ui();
    }
  }
  function $i() {
    var a;
    return (a = z.googletag) != null ? a : (z.googletag = { cmd: [] });
  }
  function aj(a, b) {
    var c = $i();
    c.hasOwnProperty(a) || (c[a] = b);
  }
  var bj = ia([
      "https://pagead2.googlesyndication.com/pagead/managed/js/gpt/",
      "/pubads_impl.js",
    ]),
    cj = ia([
      "https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/",
      "/pubads_impl.js",
    ]);
  function dj() {
    var a = sttc,
      b = ej();
    Za(function (t) {
      Yi(b, 1189, t);
    });
    var c = $i();
    a = Zi(a, b);
    Ib();
    v(Object, "assign").call(Object, Ii, c._vars_);
    c._vars_ = Ii;
    a &&
      (gd(a, 3) && Ki(36, !0),
      gd(a, 5) && Ki(221, !0),
      U(a, 6) && Ki(150, U(a, 6)),
      gd(a, 12) && Ki(263, !0));
    var d = $c(a, nh, 1),
      e = {
        Ta: gd(a, 5),
        Va: hd(a, 2),
        Ha: Lc(a, 10, cc, P(Ab)),
        Oa: hd(a, 7),
        Qa: U(a, 6),
        ea: gd(a, 4),
      };
    a = S(a, sd, 9);
    var f,
      g = (f = c.fifWin) != null ? f : window,
      h = g.document;
    f = c.fifWin ? window : g;
    aj("_loaded_", !0);
    aj("cmd", []);
    var k,
      l = (k = fj(h)) != null ? k : gj(h);
    hj(d, g, v(Object, "assign").call(Object, {}, { Ca: l }, e), b);
    try {
      hi();
    } catch (t) {}
    Qh("1", g);
    k = ij(b, l);
    d = (l == null ? void 0 : l.crossOrigin) === "anonymous";
    e = Ah(Mf);
    e > 0 &&
      b.La < 1 / e &&
      ((g = b.Ga.Xa.fb.Ra),
      g.Ua.ba({
        ia: e,
        da: (l == null ? void 0 : l.crossOrigin) === "anonymous",
        fa: jj(l),
      }),
      g.Sa.ba({
        ia: e,
        da: d,
        fa:
          Pd(k.toString().match(Od)[3] || null) ===
          "pagead2.googlesyndication.com",
      }));
    e = !1;
    if (!kj(h)) {
      g = "gpt-impl-" + Math.random();
      try {
        Md(
          h,
          Fd(k, { id: g, nonce: Kd(window), Aa: d ? "anonymous" : void 0 })
        );
      } catch (t) {}
      h.getElementById(g) && (mg(Jf) ? (e = !0) : (c._loadStarted_ = !0));
    }
    if (mg(Jf) ? !e : !c._loadStarted_) {
      var q = ae("SCRIPT");
      Ld(q, k);
      q.async = !0;
      d && (q.crossOrigin = "anonymous");
      h = c.fifWin ? f.document : h;
      k = h.body;
      d = h.documentElement;
      var m,
        p,
        r = (p = (m = h.head) != null ? m : k) != null ? p : d;
      f.document.readyState !== "complete" && c.fifWin
        ? yd(f, "load", function () {
            return void r.appendChild(q);
          })
        : r.appendChild(q);
      mg(Jf) || (c._loadStarted_ = !0);
    }
    if (f === f.top)
      try {
        pg(f);
      } catch (t) {
        Yi(b, 1209, t);
      }
    Ti(new Qi(), f, l, jj(l), a);
    mg(Lf) && lj(f);
  }
  function lj(a) {
    var b = function (c) {
      (c.data != null && c.data !== "") ||
        c.origin.indexOf("android-app://") !== 0 ||
        (Ki(264, !0), a.removeEventListener("message", b));
    };
    a.addEventListener("message", b);
  }
  function ej() {
    var a = Wd();
    return {
      Da: "m202408150101",
      vb: "202408150101",
      ab: be(window),
      Ga: new Gf(11, "m202408150101"),
      La: a,
      cb: a < 0.01,
      Na: 100,
    };
  }
  function fj(a) {
    return (a = a.currentScript) ? a : null;
  }
  function gj(a) {
    var b;
    a = x((b = a.scripts) != null ? b : []);
    for (b = a.next(); !b.done; b = a.next())
      if (((b = b.value), v(b.src, "includes").call(b.src, "/tag/js/gpt")))
        return b;
    return null;
  }
  function ij(a, b) {
    a = a.Da;
    b = jj(b) ? Id(bj, a) : Id(cj, a);
    return (a = Ah(Of)) ? Jd(b, new u.Map([["cb", a]])) : b;
  }
  function hj(a, b, c, d) {
    Ki(172, c.Ca);
    Ni(a, c);
    Gi(12, d);
    Gi(5, d);
    (a = Fi(b)) &&
      a.then(function (e) {
        return void Ki(251, pd(e));
      });
    $d(I(zh).l(Pf.g, Pf.defaultValue), b.document);
  }
  function kj(a) {
    var b = fj(a);
    return (
      a.readyState === "complete" ||
      a.readyState === "loaded" ||
      !(b == null || !b.async)
    );
  }
  function jj(a) {
    return (
      !(a == null || !a.src) &&
      Pd(a.src.match(Od)[3] || null) === "pagead2.googlesyndication.com"
    );
  }
  try {
    dj();
  } catch (a) {
    try {
      Yi(ej(), 420, a);
    } catch (b) {}
  }
}).call(
  this.googletag && googletag.fifWin ? googletag.fifWin.parent : this,
  '[[[[null,7,null,[null,0.1]],[null,null,null,[],null,657770675],[null,659575329,null,null,[[[4,null,83],[null,1]]]],[null,663827948,null,[null,-1]],[null,659579380,null,[null,-1]],[null,659579379,null,[null,-1]],[null,null,null,[null,null,null,["1 dbm/(ad|clkk)"]],null,655300591],[476475256,null,null,[1]],[null,427198696,null,[null,1]],[659638322,null,null,null,[[[4,null,83],[1]]]],[null,578655462,null,[null,20]],[591917863,null,null,[1]],[null,632270607,null,[null,1000]],[null,625028671,null,[null,0.8]],[null,625028672,null,[null,50]],[null,629733890,null,[null,1000]],[662657172,null,null,[1]],[573236024,null,null,[1]],[619946851,null,null,[1]],[620930073,null,null,[1]],[null,null,null,[],null,489560439],[null,null,null,[],null,505762507],[null,1921,null,[null,72]],[null,1920,null,[null,12]],[null,426169222,null,[null,1000]],[null,377289019,null,[null,10000]],[null,529,null,[null,20]],[null,573282293,null,[null,0.01]],[null,610770343,null,[null,5]],[642361450,null,null,[1]],[45624259,null,null,[]],[45627954,null,null,[1]],[45646888,null,null,[]],[45622305,null,null,[]],[null,447000223,null,[null,0.01]],[360245597,null,null,[1]],[45628169,null,null,[1]],[45401685,null,null,[1]],[561164161,null,null,[1]],[null,550718589,null,[null,250],[[[3,[[4,null,15,null,null,null,null,["22814497764"]],[4,null,15,null,null,null,null,["6581"]],[4,null,15,null,null,null,null,["18190176"]],[4,null,15,null,null,null,null,["21881754602"]],[4,null,15,null,null,null,null,["6782"]],[4,null,15,null,null,null,null,["309565630"]],[4,null,15,null,null,null,null,["22306534072"]],[4,null,15,null,null,null,null,["7229"]],[4,null,15,null,null,null,null,["28253241"]],[4,null,15,null,null,null,null,["1254144"]],[4,null,15,null,null,null,null,["21732118914"]],[4,null,15,null,null,null,null,["5441"]],[4,null,15,null,null,null,null,["162717810"]],[4,null,15,null,null,null,null,["51912183"]],[4,null,15,null,null,null,null,["23202586"]],[4,null,15,null,null,null,null,["44520695"]],[4,null,15,null,null,null,null,["1030006"]],[4,null,15,null,null,null,null,["21830601346"]],[4,null,15,null,null,null,null,["23081961"]],[4,null,15,null,null,null,null,["21880406607"]],[4,null,15,null,null,null,null,["93656639"]],[4,null,15,null,null,null,null,["1020351"]],[4,null,15,null,null,null,null,["5931321"]],[4,null,15,null,null,null,null,["3355436"]],[4,null,15,null,null,null,null,["22106840220"]],[4,null,15,null,null,null,null,["22875833199"]],[4,null,15,null,null,null,null,["32866417"]],[4,null,15,null,null,null,null,["8095840"]],[4,null,15,null,null,null,null,["71161633"]],[4,null,15,null,null,null,null,["22668755367"]],[4,null,15,null,null,null,null,["6177"]],[4,null,15,null,null,null,null,["147246189"]],[4,null,15,null,null,null,null,["22152718"]],[4,null,15,null,null,null,null,["21751243814"]],[4,null,15,null,null,null,null,["22013536576"]],[4,null,15,null,null,null,null,["4444"]],[4,null,15,null,null,null,null,["44890869"]],[4,null,15,null,null,null,null,["248415179"]],[4,null,15,null,null,null,null,["5293"]],[4,null,15,null,null,null,null,["21675937462"]],[4,null,15,null,null,null,null,["21726375739"]],[4,null,15,null,null,null,null,["1002212"]],[4,null,15,null,null,null,null,["6718395"]]]],[null,500]]]],[null,609494714,null,[null,1]],[null,575880738,null,[null,10]],[null,586681283,null,[null,100]],[599186119,null,null,[1]],[531615531,null,null,null,[[[3,[[4,null,15,null,null,null,null,["22814497764"]],[4,null,15,null,null,null,null,["6581"]],[4,null,15,null,null,null,null,["18190176"]],[4,null,15,null,null,null,null,["21881754602"]],[4,null,15,null,null,null,null,["6782"]],[4,null,15,null,null,null,null,["309565630"]],[4,null,15,null,null,null,null,["22306534072"]],[4,null,15,null,null,null,null,["7229"]],[4,null,15,null,null,null,null,["28253241"]],[4,null,15,null,null,null,null,["1254144"]],[4,null,15,null,null,null,null,["21732118914"]],[4,null,15,null,null,null,null,["5441"]],[4,null,15,null,null,null,null,["162717810"]],[4,null,15,null,null,null,null,["51912183"]],[4,null,15,null,null,null,null,["23202586"]],[4,null,15,null,null,null,null,["44520695"]],[4,null,15,null,null,null,null,["1030006"]],[4,null,15,null,null,null,null,["21830601346"]],[4,null,15,null,null,null,null,["23081961"]],[4,null,15,null,null,null,null,["21880406607"]],[4,null,15,null,null,null,null,["93656639"]],[4,null,15,null,null,null,null,["1020351"]],[4,null,15,null,null,null,null,["5931321"]],[4,null,15,null,null,null,null,["3355436"]],[4,null,15,null,null,null,null,["22106840220"]],[4,null,15,null,null,null,null,["22875833199"]],[4,null,15,null,null,null,null,["32866417"]],[4,null,15,null,null,null,null,["8095840"]],[4,null,15,null,null,null,null,["71161633"]],[4,null,15,null,null,null,null,["22668755367"]],[4,null,15,null,null,null,null,["6177"]],[4,null,15,null,null,null,null,["147246189"]],[4,null,15,null,null,null,null,["22152718"]],[4,null,15,null,null,null,null,["21751243814"]],[4,null,15,null,null,null,null,["22013536576"]],[4,null,15,null,null,null,null,["4444"]],[4,null,15,null,null,null,null,["44890869"]],[4,null,15,null,null,null,null,["248415179"]],[4,null,15,null,null,null,null,["5293"]],[4,null,15,null,null,null,null,["21675937462"]],[4,null,15,null,null,null,null,["21726375739"]],[4,null,15,null,null,null,null,["1002212"]],[4,null,15,null,null,null,null,["6718395"]]]],[1]]]],[null,635239304,null,[null,100]],[null,660986078,null,[null,0.1]],[null,618260805,null,[null,10]],[639096031,null,null,[1]],[644156683,null,null,[1]],[null,532520346,null,[null,120]],[557870754,null,null,[1]],[614048762,null,null,[1]],[654220659,null,null,[1]],[null,630428304,null,[null,100]],[641346575,null,null,[1]],[632286145,null,null,[1]],[null,624264750,null,[null,-1]],[607106222,null,null,[1]],[31077334,null,null,[1]],[null,398776877,null,[null,60000]],[null,374201269,null,[null,60000]],[null,371364213,null,[null,60000]],[null,376149757,null,[null,0.0025]],[583154251,null,null,[1]],[570764855,null,null,[1]],[null,null,579921177,[null,null,"control_1\\\\.\\\\d"]],[null,570764854,null,[null,50]],[578725095,null,null,[1]],[655999818,null,null,[1]],[377936516,null,null,[1]],[null,599575765,null,[null,1000]],[null,null,2,[null,null,"1-0-40"]],[null,626653285,null,[null,1000]],[null,642407444,null,[null,10]],[652574591,null,null,[1]],[null,506394061,null,[null,100]],[null,null,null,[null,null,null,["95335247"]],null,631604025],[null,null,null,[],null,489],[392065905,null,null,null,[[[4,null,68],[1]]]],[null,360245595,null,[null,500]],[563462360,null,null,[1]],[555237688,null,null,[],[[[2,[[4,null,70,null,null,null,null,["browsing-topics"]],[1,[[4,null,27,null,null,null,null,["isSecureContext"]]]]]],[1]]]],[555237686,null,null,[]],[507033477,null,null,[1]],[null,638742197,null,[null,500]],[45420038,null,null,[1]],[null,514795754,null,[null,2]],[638770075,null,null,[1]],[590730356,null,null,null,[[[12,null,null,null,4,null,"Chrome\\\\/((?!1[0-1]\\\\d)(?!12[0-3])\\\\d{3,})",["navigator.userAgent"]],[1]]]],[564724551,null,null,null,[[[12,null,null,null,4,null,"Chrome\\\\/((?!10\\\\d)(?!11[0-6])\\\\d{3,})",["navigator.userAgent"]],[1]]]],[567489814,null,null,[1]],[45415915,null,null,[1]],[582338617,null,null,[1]],[582287318,null,null,[1]],[null,596918936,null,[null,500]],[null,607730666,null,[null,10]],[632286496,null,null,[1]],[651138387,null,null,[1]],[616896918,null,null,[1]],[638632925,null,null,[1]],[647331452,null,null,[1]],[null,642727723,null,[null,10]],[null,null,null,[null,null,null,["AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==","Amm8/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==","A9uiHDzQFAhqALUhTgTYJcz9XrGH2y0/9AORwCSapUO/f7Uh7ysIzyszNkuWDLqNYg8446Uj48XIstBW1qv/wAQAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A9R+gkZL3TWq+Z7RJ2L0c7ZN7FZD5z4mHmVvjrPitg/EMz9P3j5d3W7Vw5ZR9jtJGmWKltM4BO3smNzpCgwYuwwAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"]],null,1934],[485990406,null,null,[]]],[[3,[[null,[[1337,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]],[84,null,null,[1]],[188,null,null,[1]]]]]],[1000,[[31072561]],[2,[[4,null,70,null,null,null,null,["run-ad-auction"]],[12,null,null,null,4,null,"FLEDGE_GAM_EXTERNAL_TESTER",["navigator.userAgent"]]]]],[1,[[31075124,[[null,514795754,null,[null,4]]]]],[4,null,74,null,null,null,null,["1585821863","3976716532"]],59],[10,[[31080344],[95328403],[95328405],[95328406,[[null,514795754,null,[null,4]]]],[95336063,[[null,514795754,null,[null,4]],[null,641937776,null,[null,32768]]]],[95337987],[95337988,[[null,514795754,null,[null,4]],[null,641937776,null,[null,32768]]]],[95339697,[[null,514795754,null,[null,4]],[null,641937776,null,[null,32768]]]],[95339698,[[null,514795754,null,[null,4]],[null,641937776,null,[null,32768]]]],[95339699,[[null,514795754,null,[null,4]],[null,641937776,null,[null,32768]]]]],[2,[[4,null,9,null,null,null,null,["fetch"]],[4,null,9,null,null,null,null,["navigator.getInterestGroupAdAuctionData"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,["1585821863","3976716532"]]]]]],59],[10,[[31084125],[31084126]]],[50,[[31084270],[31084271,[[610525552,null,null,[1]]]]],null,121,null,null,null,null,null,null,null,null,null,6],[1000,[[31084732,null,[4,null,27,null,null,null,null,["crossOriginIsolated"]]]],[2,[[12,null,null,null,4,null,"Chrome\\\\/((?!10\\\\d)\\\\d{3,})",["navigator.userAgent"]]]]],[1000,[[31084733,null,[2,[[4,null,27,null,null,null,null,["crossOriginIsolated"]],[4,null,8,null,null,null,null,["credentialless"]]]]]],[2,[[12,null,null,null,4,null,"Chrome\\\\/((?!10\\\\d)\\\\d{3,})",["navigator.userAgent"]]]]],[1000,[[31084734,null,[4,null,9,null,null,null,null,["SharedArrayBuffer"]]]],[2,[[12,null,null,null,4,null,"Chrome\\\\/((?!10\\\\d)\\\\d{3,})",["navigator.userAgent"]]]]],[1000,[[31085774,null,[4,null,6,null,null,null,null,["31085772"]]]],[4,null,9,null,null,null,null,["scheduler.yield"]],125,null,null,null,null,null,null,null,null,25],[1000,[[31085775,null,[4,null,6,null,null,null,null,["31085773"]]]],[4,null,9,null,null,null,null,["scheduler.yield"]],125,null,null,null,null,null,null,null,null,25],[50,[[31085995],[31085996,[[624961684,null,null,[1]]]]]],[100,[[31086135],[31086136],[31086137],[31086138]],null,122,null,null,null,null,null,null,null,null,null,4],[50,[[31086223],[31086224,[[null,626653286,null,[null,2]]]]]],[null,[[44798283,[[null,514795754,null,[null,4]]]]],[2,[[4,null,70,null,null,null,null,["run-ad-auction"]],[1,[[4,null,63]]]]],59],[null,[[95331143],[95331207],[95333497]],[2,[[4,null,9,null,null,null,null,["fetch"]],[4,null,9,null,null,null,null,["navigator.getInterestGroupAdAuctionData"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,["1585821863","3976716532"]]]]]],59],[10,[[95332149],[95332150,[[616896918,null,null,[]]]]],null,59],[null,[[95335986]],[2,[[4,null,9,null,null,null,null,["fetch"]],[4,null,9,null,null,null,null,["navigator.getInterestGroupAdAuctionData"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,["1585821863","3976716532"]]]]]],59],[null,[[676982960],[676982998]]]]],[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,["LayoutShift"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61],[40,[[95340252],[95340253,[[662101537,null,null,[1]]]]],[4,null,9,null,null,null,null,["LayoutShift"]],71,null,null,null,800,null,null,null,null,null,5],[40,[[95340254],[95340255,[[662101539,null,null,[1]]]]],[4,null,9,null,null,null,null,["LayoutShift"]],71,null,null,null,800,null,null,null,null,null,5]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,["31061691"]]]]],[5,[[50,[[31067420],[31067421,[[360245597,null,null,[]]]],[31077191]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]],69],[200,[[31079956],[31079957,[[561985307,null,null,[1]]]],[44809527,[[561985307,null,null,[1]]]]]],[50,[[31083339],[31083340,[[624264747,null,null,[1]]]]]],[50,[[31083341],[31083342,[[624264746,null,null,[1]]]]]],[50,[[31083343],[31083344,[[624264749,null,null,[1]]]]]],[50,[[31083345],[31083346,[[null,624264750,null,[null,5]]]]]],[1000,[[31084129,null,[2,[[2,[[8,null,null,1,null,-1],[7,null,null,1,null,10]]],[4,null,3]]]]],null,80,null,null,null,null,null,null,null,null,4],[1000,[[31084130,null,[2,[[2,[[8,null,null,1,null,9],[7,null,null,1,null,20]]],[4,null,3]]]]],null,80,null,null,null,null,null,null,null,null,4],[1,[[31084401],[31084402,[[624264748,null,null,[1]]]]]],[10,[[31084948],[31084949,[[null,null,null,[null,null,null,["679602798","965728666","3786422334","4071951799"]],null,603422363]]]]],[50,[[31085375],[31085376,[[null,610770343,null,[null,6]]]]],null,59],[100,[[31085738],[31085739,[[647262744,null,null,[1]]]]]],[10,[[31085772],[31085773,[[647331451,null,null,[1]]]]],null,119],[10,[[31085776],[31085777,[[45624259,null,null,[1]]]]],null,114],[10,[[31085778,[[45624259,null,null,[1]]]]],[4,null,74,null,null,null,null,["1361264289","592241938","3803786894"]],114],[10,[[31085822],[31085823,[[null,653204221,null,[null,1]]]]]],[null,[[31085906,null,[2,[[2,[[8,null,null,1,null,19],[7,null,null,1,null,22]]],[4,null,3]]]]],null,128,null,null,null,null,null,null,null,null,27],[null,[[31085907,[[657763206,null,null,[1]],[null,null,null,[null,null,null,["AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==","Amm8/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==","A9uiHDzQFAhqALUhTgTYJcz9XrGH2y0/9AORwCSapUO/f7Uh7ysIzyszNkuWDLqNYg8446Uj48XIstBW1qv/wAQAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A9R+gkZL3TWq+Z7RJ2L0c7ZN7FZD5z4mHmVvjrPitg/EMz9P3j5d3W7Vw5ZR9jtJGmWKltM4BO3smNzpCgwYuwwAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A9ejJbmUme7Mcan6LhOEb3xu1rtOR0wo0OFCsvDNtVQAURUxNE6WVKpi/8UDE+6qpeiTuYwhQz0aFpxSXDuNegAAAACQeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29tcHJlc3Npb25EaWN0aW9uYXJ5VHJhbnNwb3J0VjMiLCJleHBpcnkiOjE3MzMyNzAzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A/nLJchvU3DZp7nqa9ODYDqcEW3b40Jf9gdp1+gffTKguFiYpx8XBAicRlpA9PUDtTTLbSxWz5laQxLp0R6WdAAAAACWeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29tcHJlc3Npb25EaWN0aW9uYXJ5VHJhbnNwb3J0VjMiLCJleHBpcnkiOjE3MzMyNzAzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"]],null,1934]],[2,[[2,[[8,null,null,1,null,29],[7,null,null,1,null,32]]],[4,null,3]]]]],null,128,null,null,null,null,null,null,null,null,27],[100,[[31085908],[31085909,[[630167509,null,null,[1]]]]]],[100,[[31086033],[31086034,[[658158409,null,null,[1]]]]]],[100,[[31086221],[31086222,[[659638322,null,null,[1]]]]]],[1000,[[31086257,[[null,24,null,[null,31086257]]],[6,null,null,13,null,31086257]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[1000,[[31086258,[[null,24,null,[null,31086258]]],[6,null,null,13,null,31086258]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[10,[[31086283],[31086284,[[661357594,null,null,[1]]]]]],[10,[[31086285],[31086286,[[658401009,null,null,[1]]]]]],[10,[[31086287],[31086288,[[660866370,null,null,[1]]]]]],[10,[[31086289],[31086290,[[662509757,null,null,[1]]]]]],[10,[[31086291],[31086292,[[662179621,null,null,[1]]]]]],[1000,[[31086319,[[null,24,null,[null,31086319]]],[6,null,null,13,null,31086319]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[1000,[[31086320,[[null,24,null,[null,31086320]]],[6,null,null,13,null,31086320]]],[4,null,3],1,null,null,null,null,null,null,null,null,3]]],[2,[[10,[[31082137],[31082138,[[null,609494714,null,[null,1]]]]],null,null,null,null,null,null,null,102],[1000,[[31084215,null,[2,[[4,null,8,null,null,null,null,["pbjs"]],[12,null,null,null,4,null,".*userId.*",["pbjs.installedModules.join"]]]]]]],[10,[[31084489],[31084490]],null,null,null,null,32,null,null,142,1],[50,[[31084528],[31084529]],null,null,null,null,36,900,null,166,1],[1000,[[31084739,[[null,612427114,null,[null,100]]]]],[4,null,6,null,null,null,null,["31065645"]]],[10,[[31084865],[31084866]],null,null,null,null,35,null,null,166,1],[null,[[31084974],[31084975],[31084976],[31084977]],null,null,null,null,37,820,null,166,1],[null,[[31085660],[31085661,[[629201869,null,null,[1]],[630224494,null,null,[1]]]],[31085662,[[629201869,null,null,[1]],[630224494,null,null,[1]]]],[31085663,[[629201869,null,null,[1]],[630224494,null,null,[1]]]]],null,null,null,null,null,41,null,102,1],[10,[[31085856],[31085857]],null,null,null,null,null,20,null,102],[50,[[95330141],[95330142]],[4,null,59,null,null,null,null,["2443349923"]],null,null,null,33,null,null,152,1],[300,[[95331847],[95331848]],[4,null,59,null,null,null,null,["1163038905"]],null,null,null,34,400,null,152,1],[50,[[95337885],[95337886,[[null,643185309,null,[null,30]],[null,643185308,null,[null,30]],[null,643185311,null,[null,30]],[null,643185310,null,[null,30]]]]],[4,null,6,null,null,null,null,["31065645"]]],[10,[[95340503,[[null,659579380,null,[]],[null,null,null,[null,null,null,["1 dbm/(ad|clkk)","2 (adsrvr|adserver)\\\\\\\\.org/bid/","3 criteo\\\\\\\\.com/(delivery)|(.*auction)","4 yahoo\\\\\\\\.com/.*/imp/","5 (adnxs)|(adnxs-simple)\\\\\\\\.com/it","6 amazon-adsystem\\\\\\\\.com/.*/impb"]],null,655300591],[null,643045660,null,[null,1]]]],[95340517]],[4,null,83],129],[10,[[95340629],[95340765]],null,129],[50,[[95340642],[95340676,[[null,659579380,null,[null,5000]],[null,659579379,null,[null,15000]],[null,null,null,[null,null,null,["1 dbm/(ad|clkk)","2 (adsrvr|adserver)\\\\\\\\.org/bid/","3 criteo\\\\\\\\.com/(delivery)|(.*auction)","4 yahoo\\\\\\\\.com/.*/imp/","5 (adnxs)|(adnxs-simple)\\\\\\\\.com/it","6 amazon-adsystem\\\\\\\\.com/.*/impb"]],null,655300591],[null,643045660,null,[null,1]]]]],[4,null,83],129],[10,[[95340735],[95340737,[[null,null,null,[null,null,null,["1 bidderRequests.bids bidder userIdAsEids.source","2 bidderRequests.bids.userIdAsEids source provider","3 bidderRequests.bids bidder ortb2Imp.ext.tid?","5 bidderRequests.bids bidder mediaTypes.banner","6 bidderRequests.bids bidder mediaTypes.native?","7 bidderRequests.bids bidder mediaTypes.video","8 bidderRequests.bids bidder ortb2Imp.ext.gpid?","9 bidderRequests.bids bidder ortb2.site.content.data.ext.segment?","10 bidderRequests.bids bidder ortb2.site.page","11 bidderRequests.bids bidder ortb2.user.data.segment?","12 bidderRequests.bids bidder ortb2.user.data.ext.segtax?"]],null,657770675]]]],[4,null,83],129],[1,[[95340738]],[4,null,8,null,null,null,null,["pbjs"]]],[1,[[95340739,null,[12,null,null,null,4,null,".",["pbjs.getConfig.userSync.ppid"]]]],[4,null,8,null,null,null,null,["pbjs"]]]]],[9,[[1000,[[31083577]],[4,null,13,null,null,null,null,["cxbbhbxm"]]]]],[4,[[null,[[44714449,[[null,7,null,[null,1]]]],[676982961,[[null,7,null,[null,0.4]],[212,null,null,[1]]]],[676982996,[[null,7,null,[null,1]]]]],null,78]]]],null,null,[null,1000,1,1000]],null,null,null,1,".google.co.uk",984,2021,[["visitlondon.com",null,"https://www.visitlondon.com/sehirici-ulasim/place/48383714-go-city-london-explorer-pass",null,null,["70940382"]],[],[],[31079527],null,null,null,[[["114719345",1],["70940382",1]]],[[["114719345",1],["70940382",1]]],null,[[22877,1724166000],[54885,1724167200],[17125,1724168400],[28169,1724169600]]]]'
);
