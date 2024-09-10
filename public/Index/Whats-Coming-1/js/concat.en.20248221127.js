!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (e.document) return t(e);
            throw new Error("jQuery requires a window with a document");
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (x, q) {
  "use strict";
  function y(e) {
    return (
      "function" == typeof e &&
      "number" != typeof e.nodeType &&
      "function" != typeof e.item
    );
  }
  function m(e) {
    return null != e && e === e.window;
  }
  var t = [],
    B = Object.getPrototypeOf,
    s = t.slice,
    P = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    H = t.push,
    O = t.indexOf,
    W = {},
    R = W.toString,
    F = W.hasOwnProperty,
    z = F.toString,
    _ = z.call(Object),
    g = {},
    k = x.document,
    Y = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function U(e, t, n) {
    var i,
      o,
      r = (n = n || k).createElement("script");
    if (((r.text = e), t))
      for (i in Y)
        (o = t[i] || (t.getAttribute && t.getAttribute(i))) &&
          r.setAttribute(i, o);
    n.head.appendChild(r).parentNode.removeChild(r);
  }
  function f(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? W[R.call(e)] || "object"
      : typeof e;
  }
  var e = "3.6.0",
    E = function (e, t) {
      return new E.fn.init(e, t);
    };
  function G(e) {
    var t = !!e && "length" in e && e.length,
      n = f(e);
    return (
      !y(e) &&
      !m(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (E.fn = E.prototype =
    {
      jquery: e,
      constructor: E,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        e = E.merge(this.constructor(), e);
        return (e.prevObject = this), e;
      },
      each: function (e) {
        return E.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          E.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          E.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          E.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          e = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= e && e < t ? [this[e]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: H,
      sort: t.sort,
      splice: t.splice,
    }),
    (E.extend = E.fn.extend =
      function () {
        var e,
          t,
          n,
          i,
          o,
          r = arguments[0] || {},
          a = 1,
          s = arguments.length,
          l = !1;
        for (
          "boolean" == typeof r && ((l = r), (r = arguments[a] || {}), a++),
            "object" == typeof r || y(r) || (r = {}),
            a === s && ((r = this), a--);
          a < s;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (n = e[t]),
                "__proto__" !== t &&
                  r !== n &&
                  (l && n && (E.isPlainObject(n) || (i = Array.isArray(n)))
                    ? ((o = r[t]),
                      (o =
                        i && !Array.isArray(o)
                          ? []
                          : i || E.isPlainObject(o)
                          ? o
                          : {}),
                      (i = !1),
                      (r[t] = E.extend(l, o, n)))
                    : void 0 !== n && (r[t] = n));
        return r;
      }),
    E.extend({
      expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        return !(
          !e ||
          "[object Object]" !== R.call(e) ||
          ((e = B(e)) &&
            ("function" !=
              typeof (e = F.call(e, "constructor") && e.constructor) ||
              z.call(e) !== _))
        );
      },
      isEmptyObject: function (e) {
        for (var t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        U(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (G(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      makeArray: function (e, t) {
        t = t || [];
        return (
          null != e &&
            (G(Object(e))
              ? E.merge(t, "string" == typeof e ? [e] : e)
              : H.call(t, e)),
          t
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : O.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
        return (e.length = o), e;
      },
      grep: function (e, t, n) {
        for (var i = [], o = 0, r = e.length, a = !n; o < r; o++)
          !t(e[o], o) != a && i.push(e[o]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          o,
          r = 0,
          a = [];
        if (G(e))
          for (i = e.length; r < i; r++)
            null != (o = t(e[r], r, n)) && a.push(o);
        else for (r in e) null != (o = t(e[r], r, n)) && a.push(o);
        return P(a);
      },
      guid: 1,
      support: g,
    }),
    "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]),
    E.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        W["[object " + t + "]"] = t.toLowerCase();
      }
    );
  function i(e, t, n) {
    for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
      if (1 === e.nodeType) {
        if (o && E(e).is(n)) break;
        i.push(e);
      }
    return i;
  }
  function Q(e, t) {
    for (var n = []; e; e = e.nextSibling)
      1 === e.nodeType && e !== t && n.push(e);
    return n;
  }
  var e = (function (q) {
      function u(e, t) {
        return (
          (e = "0x" + e.slice(1) - 65536),
          t ||
            (e < 0
              ? String.fromCharCode(65536 + e)
              : String.fromCharCode((e >> 10) | 55296, (1023 & e) | 56320))
        );
      }
      function B(e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      }
      function P() {
        x();
      }
      var e,
        h,
        w,
        r,
        H,
        p,
        O,
        W,
        L,
        l,
        c,
        x,
        k,
        n,
        E,
        f,
        i,
        o,
        m,
        C = "sizzle" + +new Date(),
        d = q.document,
        T = 0,
        R = 0,
        F = $(),
        z = $(),
        _ = $(),
        g = $(),
        Y = function (e, t) {
          return e === t && (c = !0), 0;
        },
        U = {}.hasOwnProperty,
        t = [],
        G = t.pop,
        Q = t.push,
        S = t.push,
        K = t.slice,
        y = function (e, t) {
          for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
          return -1;
        },
        X =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        a = "[\\x20\\t\\r\\n\\f]",
        s =
          "(?:\\\\[\\da-fA-F]{1,6}" +
          a +
          "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        J =
          "\\[" +
          a +
          "*(" +
          s +
          ")(?:" +
          a +
          "*([*^$|!~]?=)" +
          a +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          s +
          "))|)" +
          a +
          "*\\]",
        Z =
          ":(" +
          s +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          J +
          ")*)|.*)\\)|)",
        ee = new RegExp(a + "+", "g"),
        v = new RegExp("^" + a + "+|((?:^|[^\\\\])(?:\\\\.)*)" + a + "+$", "g"),
        te = new RegExp("^" + a + "*," + a + "*"),
        ne = new RegExp("^" + a + "*([>+~]|" + a + ")" + a + "*"),
        ie = new RegExp(a + "|>"),
        oe = new RegExp(Z),
        re = new RegExp("^" + s + "$"),
        b = {
          ID: new RegExp("^#(" + s + ")"),
          CLASS: new RegExp("^\\.(" + s + ")"),
          TAG: new RegExp("^(" + s + "|[*])"),
          ATTR: new RegExp("^" + J),
          PSEUDO: new RegExp("^" + Z),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              a +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              a +
              "*(?:([+-]|)" +
              a +
              "*(\\d+)|))" +
              a +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + X + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              a +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              a +
              "*((?:-\\d)?\\d*)" +
              a +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        ae = /HTML$/i,
        se = /^(?:input|select|textarea|button)$/i,
        le = /^h\d$/i,
        A = /^[^{]+\{\s*\[native \w/,
        ce = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        de = /[+~]/,
        V = new RegExp(
          "\\\\[\\da-fA-F]{1,6}" + a + "?|\\\\([^\\r\\n\\f])",
          "g"
        ),
        ue = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        he = ye(
          function (e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
          },
          { dir: "parentNode", next: "legend" }
        );
      try {
        S.apply((t = K.call(d.childNodes)), d.childNodes),
          t[d.childNodes.length].nodeType;
      } catch (e) {
        S = {
          apply: t.length
            ? function (e, t) {
                Q.apply(e, K.call(t));
              }
            : function (e, t) {
                for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                e.length = n - 1;
              },
        };
      }
      function D(e, t, n, i) {
        var o,
          r,
          a,
          s,
          l,
          c,
          d = t && t.ownerDocument,
          u = t ? t.nodeType : 9;
        if (
          ((n = n || []),
          "string" != typeof e || !e || (1 !== u && 9 !== u && 11 !== u))
        )
          return n;
        if (!i && (x(t), (t = t || k), E)) {
          if (11 !== u && (s = ce.exec(e)))
            if ((o = s[1])) {
              if (9 === u) {
                if (!(c = t.getElementById(o))) return n;
                if (c.id === o) return n.push(c), n;
              } else if (
                d &&
                (c = d.getElementById(o)) &&
                m(t, c) &&
                c.id === o
              )
                return n.push(c), n;
            } else {
              if (s[2]) return S.apply(n, t.getElementsByTagName(e)), n;
              if (
                (o = s[3]) &&
                h.getElementsByClassName &&
                t.getElementsByClassName
              )
                return S.apply(n, t.getElementsByClassName(o)), n;
            }
          if (
            h.qsa &&
            !g[e + " "] &&
            (!f || !f.test(e)) &&
            (1 !== u || "object" !== t.nodeName.toLowerCase())
          ) {
            if (((c = e), (d = t), 1 === u && (ie.test(e) || ne.test(e)))) {
              for (
                ((d = (de.test(e) && ge(t.parentNode)) || t) === t &&
                  h.scope) ||
                  ((a = t.getAttribute("id"))
                    ? (a = a.replace(ue, B))
                    : t.setAttribute("id", (a = C))),
                  r = (l = p(e)).length;
                r--;

              )
                l[r] = (a ? "#" + a : ":scope") + " " + j(l[r]);
              c = l.join(",");
            }
            try {
              return S.apply(n, d.querySelectorAll(c)), n;
            } catch (t) {
              g(e, !0);
            } finally {
              a === C && t.removeAttribute("id");
            }
          }
        }
        return W(e.replace(v, "$1"), t, n, i);
      }
      function $() {
        var i = [];
        return function e(t, n) {
          return (
            i.push(t + " ") > w.cacheLength && delete e[i.shift()],
            (e[t + " "] = n)
          );
        };
      }
      function I(e) {
        return (e[C] = !0), e;
      }
      function N(e) {
        var t = k.createElement("fieldset");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t);
        }
      }
      function pe(e, t) {
        for (var n = e.split("|"), i = n.length; i--; ) w.attrHandle[n[i]] = t;
      }
      function fe(e, t) {
        var n = t && e,
          i =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            e.sourceIndex - t.sourceIndex;
        if (i) return i;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function me(t) {
        return function (e) {
          return "form" in e
            ? e.parentNode && !1 === e.disabled
              ? "label" in e
                ? "label" in e.parentNode
                  ? e.parentNode.disabled === t
                  : e.disabled === t
                : e.isDisabled === t || (e.isDisabled !== !t && he(e) === t)
              : e.disabled === t
            : "label" in e && e.disabled === t;
        };
      }
      function M(a) {
        return I(function (r) {
          return (
            (r = +r),
            I(function (e, t) {
              for (var n, i = a([], e.length, r), o = i.length; o--; )
                e[(n = i[o])] && (e[n] = !(t[n] = e[n]));
            })
          );
        });
      }
      function ge(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }
      for (e in ((h = D.support = {}),
      (H = D.isXML =
        function (e) {
          var t = e && e.namespaceURI,
            e = e && (e.ownerDocument || e).documentElement;
          return !ae.test(t || (e && e.nodeName) || "HTML");
        }),
      (x = D.setDocument =
        function (e) {
          var e = e ? e.ownerDocument || e : d;
          return (
            e != k &&
              9 === e.nodeType &&
              e.documentElement &&
              ((n = (k = e).documentElement),
              (E = !H(k)),
              d != k &&
                (e = k.defaultView) &&
                e.top !== e &&
                (e.addEventListener
                  ? e.addEventListener("unload", P, !1)
                  : e.attachEvent && e.attachEvent("onunload", P)),
              (h.scope = N(function (e) {
                return (
                  n.appendChild(e).appendChild(k.createElement("div")),
                  void 0 !== e.querySelectorAll &&
                    !e.querySelectorAll(":scope fieldset div").length
                );
              })),
              (h.attributes = N(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (h.getElementsByTagName = N(function (e) {
                return (
                  e.appendChild(k.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (h.getElementsByClassName = A.test(k.getElementsByClassName)),
              (h.getById = N(function (e) {
                return (
                  (n.appendChild(e).id = C),
                  !k.getElementsByName || !k.getElementsByName(C).length
                );
              })),
              h.getById
                ? ((w.filter.ID = function (e) {
                    var t = e.replace(V, u);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                  (w.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && E)
                      return (t = t.getElementById(e)) ? [t] : [];
                  }))
                : ((w.filter.ID = function (e) {
                    var t = e.replace(V, u);
                    return function (e) {
                      e =
                        void 0 !== e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return e && e.value === t;
                    };
                  }),
                  (w.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && E) {
                      var n,
                        i,
                        o,
                        r = t.getElementById(e);
                      if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === e)
                          return [r];
                        for (o = t.getElementsByName(e), i = 0; (r = o[i++]); )
                          if ((n = r.getAttributeNode("id")) && n.value === e)
                            return [r];
                      }
                      return [];
                    }
                  })),
              (w.find.TAG = h.getElementsByTagName
                ? function (e, t) {
                    return void 0 !== t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : h.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      i = [],
                      o = 0,
                      r = t.getElementsByTagName(e);
                    if ("*" !== e) return r;
                    for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                    return i;
                  }),
              (w.find.CLASS =
                h.getElementsByClassName &&
                function (e, t) {
                  if (void 0 !== t.getElementsByClassName && E)
                    return t.getElementsByClassName(e);
                }),
              (i = []),
              (f = []),
              (h.qsa = A.test(k.querySelectorAll)) &&
                (N(function (e) {
                  var t;
                  (n.appendChild(e).innerHTML =
                    "<a id='" +
                    C +
                    "'></a><select id='" +
                    C +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      f.push("[*^$]=" + a + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      f.push("\\[" + a + "*(?:value|" + X + ")"),
                    e.querySelectorAll("[id~=" + C + "-]").length ||
                      f.push("~="),
                    (t = k.createElement("input")).setAttribute("name", ""),
                    e.appendChild(t),
                    e.querySelectorAll("[name='']").length ||
                      f.push(
                        "\\[" + a + "*name" + a + "*=" + a + "*(?:''|\"\")"
                      ),
                    e.querySelectorAll(":checked").length || f.push(":checked"),
                    e.querySelectorAll("a#" + C + "+*").length ||
                      f.push(".#.+[+~]"),
                    e.querySelectorAll("\\\f"),
                    f.push("[\\r\\n\\f]");
                }),
                N(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = k.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      f.push("name" + a + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length &&
                      f.push(":enabled", ":disabled"),
                    (n.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length &&
                      f.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    f.push(",.*:");
                })),
              (h.matchesSelector = A.test(
                (o =
                  n.matches ||
                  n.webkitMatchesSelector ||
                  n.mozMatchesSelector ||
                  n.oMatchesSelector ||
                  n.msMatchesSelector)
              )) &&
                N(function (e) {
                  (h.disconnectedMatch = o.call(e, "*")),
                    o.call(e, "[s!='']:x"),
                    i.push("!=", Z);
                }),
              (f = f.length && new RegExp(f.join("|"))),
              (i = i.length && new RegExp(i.join("|"))),
              (e = A.test(n.compareDocumentPosition)),
              (m =
                e || A.test(n.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        t = t && t.parentNode;
                      return (
                        e === t ||
                        !(
                          !t ||
                          1 !== t.nodeType ||
                          !(n.contains
                            ? n.contains(t)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(t))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (Y = e
                ? function (e, t) {
                    var n;
                    return e === t
                      ? ((c = !0), 0)
                      : !e.compareDocumentPosition -
                          !t.compareDocumentPosition ||
                          (1 &
                            (n =
                              (e.ownerDocument || e) == (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!h.sortDetached &&
                            t.compareDocumentPosition(e) === n)
                            ? e == k || (e.ownerDocument == d && m(d, e))
                              ? -1
                              : t == k || (t.ownerDocument == d && m(d, t))
                              ? 1
                              : l
                              ? y(l, e) - y(l, t)
                              : 0
                            : 4 & n
                            ? -1
                            : 1);
                  }
                : function (e, t) {
                    if (e === t) return (c = !0), 0;
                    var n,
                      i = 0,
                      o = e.parentNode,
                      r = t.parentNode,
                      a = [e],
                      s = [t];
                    if (!o || !r)
                      return e == k
                        ? -1
                        : t == k
                        ? 1
                        : o
                        ? -1
                        : r
                        ? 1
                        : l
                        ? y(l, e) - y(l, t)
                        : 0;
                    if (o === r) return fe(e, t);
                    for (n = e; (n = n.parentNode); ) a.unshift(n);
                    for (n = t; (n = n.parentNode); ) s.unshift(n);
                    for (; a[i] === s[i]; ) i++;
                    return i
                      ? fe(a[i], s[i])
                      : a[i] == d
                      ? -1
                      : s[i] == d
                      ? 1
                      : 0;
                  })),
            k
          );
        }),
      (D.matches = function (e, t) {
        return D(e, null, null, t);
      }),
      (D.matchesSelector = function (e, t) {
        if (
          (x(e),
          h.matchesSelector &&
            E &&
            !g[t + " "] &&
            (!i || !i.test(t)) &&
            (!f || !f.test(t)))
        )
          try {
            var n = o.call(e, t);
            if (
              n ||
              h.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return n;
          } catch (e) {
            g(t, !0);
          }
        return 0 < D(t, k, null, [e]).length;
      }),
      (D.contains = function (e, t) {
        return (e.ownerDocument || e) != k && x(e), m(e, t);
      }),
      (D.attr = function (e, t) {
        (e.ownerDocument || e) != k && x(e);
        var n = w.attrHandle[t.toLowerCase()],
          n = n && U.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
        return void 0 !== n
          ? n
          : h.attributes || !E
          ? e.getAttribute(t)
          : (n = e.getAttributeNode(t)) && n.specified
          ? n.value
          : null;
      }),
      (D.escape = function (e) {
        return (e + "").replace(ue, B);
      }),
      (D.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (D.uniqueSort = function (e) {
        var t,
          n = [],
          i = 0,
          o = 0;
        if (
          ((c = !h.detectDuplicates),
          (l = !h.sortStable && e.slice(0)),
          e.sort(Y),
          c)
        ) {
          for (; (t = e[o++]); ) t === e[o] && (i = n.push(o));
          for (; i--; ) e.splice(n[i], 1);
        }
        return (l = null), e;
      }),
      (r = D.getText =
        function (e) {
          var t,
            n = "",
            i = 0,
            o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else for (; (t = e[i++]); ) n += r(t);
          return n;
        }),
      ((w = D.selectors =
        {
          cacheLength: 50,
          createPseudo: I,
          match: b,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(V, u)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(V, u)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || D.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && D.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return b.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      oe.test(n) &&
                      (t =
                        (t = p(n, !0)) &&
                        n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(V, u).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = F[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + a + ")" + e + "(" + a + "|$)")) &&
                  F(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        (void 0 !== e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (t, n, i) {
              return function (e) {
                e = D.attr(e, t);
                return null == e
                  ? "!=" === n
                  : !n ||
                      ((e += ""),
                      "=" === n
                        ? e === i
                        : "!=" === n
                        ? e !== i
                        : "^=" === n
                        ? i && 0 === e.indexOf(i)
                        : "*=" === n
                        ? i && -1 < e.indexOf(i)
                        : "$=" === n
                        ? i && e.slice(-i.length) === i
                        : "~=" === n
                        ? -1 < (" " + e.replace(ee, " ") + " ").indexOf(i)
                        : "|=" === n &&
                          (e === i || e.slice(0, i.length + 1) === i + "-"));
              };
            },
            CHILD: function (f, e, t, m, g) {
              var v = "nth" !== f.slice(0, 3),
                y = "last" !== f.slice(-4),
                b = "of-type" === e;
              return 1 === m && 0 === g
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (e, t, n) {
                    var i,
                      o,
                      r,
                      a,
                      s,
                      l,
                      c = v != y ? "nextSibling" : "previousSibling",
                      d = e.parentNode,
                      u = b && e.nodeName.toLowerCase(),
                      h = !n && !b,
                      p = !1;
                    if (d) {
                      if (v) {
                        for (; c; ) {
                          for (a = e; (a = a[c]); )
                            if (
                              b
                                ? a.nodeName.toLowerCase() === u
                                : 1 === a.nodeType
                            )
                              return !1;
                          l = c = "only" === f && !l && "nextSibling";
                        }
                        return !0;
                      }
                      if (((l = [y ? d.firstChild : d.lastChild]), y && h)) {
                        for (
                          p =
                            (s =
                              (i =
                                (o =
                                  (r = (a = d)[C] || (a[C] = {}))[a.uniqueID] ||
                                  (r[a.uniqueID] = {}))[f] || [])[0] === T &&
                              i[1]) && i[2],
                            a = s && d.childNodes[s];
                          (a = (++s && a && a[c]) || ((p = s = 0), l.pop()));

                        )
                          if (1 === a.nodeType && ++p && a === e) {
                            o[f] = [T, s, p];
                            break;
                          }
                      } else if (
                        !1 ===
                        (p = h
                          ? (s =
                              (i =
                                (o =
                                  (r = (a = e)[C] || (a[C] = {}))[a.uniqueID] ||
                                  (r[a.uniqueID] = {}))[f] || [])[0] === T &&
                              i[1])
                          : p)
                      )
                        for (
                          ;
                          (a = (++s && a && a[c]) || ((p = s = 0), l.pop())) &&
                          ((b
                            ? a.nodeName.toLowerCase() !== u
                            : 1 !== a.nodeType) ||
                            !++p ||
                            (h &&
                              ((o =
                                (r = a[C] || (a[C] = {}))[a.uniqueID] ||
                                (r[a.uniqueID] = {}))[f] = [T, p]),
                            a !== e));

                        );
                      return (p -= g) === m || (p % m == 0 && 0 <= p / m);
                    }
                  };
            },
            PSEUDO: function (e, r) {
              var t,
                a =
                  w.pseudos[e] ||
                  w.setFilters[e.toLowerCase()] ||
                  D.error("unsupported pseudo: " + e);
              return a[C]
                ? a(r)
                : 1 < a.length
                ? ((t = [e, e, "", r]),
                  w.setFilters.hasOwnProperty(e.toLowerCase())
                    ? I(function (e, t) {
                        for (var n, i = a(e, r), o = i.length; o--; )
                          e[(n = y(e, i[o]))] = !(t[n] = i[o]);
                      })
                    : function (e) {
                        return a(e, 0, t);
                      })
                : a;
            },
          },
          pseudos: {
            not: I(function (e) {
              var i = [],
                o = [],
                s = O(e.replace(v, "$1"));
              return s[C]
                ? I(function (e, t, n, i) {
                    for (var o, r = s(e, null, i, []), a = e.length; a--; )
                      (o = r[a]) && (e[a] = !(t[a] = o));
                  })
                : function (e, t, n) {
                    return (
                      (i[0] = e), s(i, null, n, o), (i[0] = null), !o.pop()
                    );
                  };
            }),
            has: I(function (t) {
              return function (e) {
                return 0 < D(t, e).length;
              };
            }),
            contains: I(function (t) {
              return (
                (t = t.replace(V, u)),
                function (e) {
                  return -1 < (e.textContent || r(e)).indexOf(t);
                }
              );
            }),
            lang: I(function (n) {
              return (
                re.test(n || "") || D.error("unsupported lang: " + n),
                (n = n.replace(V, u).toLowerCase()),
                function (e) {
                  var t;
                  do {
                    if (
                      (t = E
                        ? e.lang
                        : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                    )
                      return (
                        (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                      );
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1;
                }
              );
            }),
            target: function (e) {
              var t = q.location && q.location.hash;
              return t && t.slice(1) === e.id;
            },
            root: function (e) {
              return e === n;
            },
            focus: function (e) {
              return (
                e === k.activeElement &&
                (!k.hasFocus || k.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: me(!1),
            disabled: me(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !w.pseudos.empty(e);
            },
            header: function (e) {
              return le.test(e.nodeName);
            },
            input: function (e) {
              return se.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (e = e.getAttribute("type")) ||
                  "text" === e.toLowerCase())
              );
            },
            first: M(function () {
              return [0];
            }),
            last: M(function (e, t) {
              return [t - 1];
            }),
            eq: M(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: M(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: M(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: M(function (e, t, n) {
              for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; ) e.push(i);
              return e;
            }),
            gt: M(function (e, t, n) {
              for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
              return e;
            }),
          },
        }).pseudos.nth = w.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        w.pseudos[e] = (function (t) {
          return function (e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t;
          };
        })(e);
      for (e in { submit: !0, reset: !0 })
        w.pseudos[e] = (function (n) {
          return function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t || "button" === t) && e.type === n;
          };
        })(e);
      function ve() {}
      function j(e) {
        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
        return i;
      }
      function ye(a, e, t) {
        var s = e.dir,
          l = e.next,
          c = l || s,
          d = t && "parentNode" === c,
          u = R++;
        return e.first
          ? function (e, t, n) {
              for (; (e = e[s]); ) if (1 === e.nodeType || d) return a(e, t, n);
              return !1;
            }
          : function (e, t, n) {
              var i,
                o,
                r = [T, u];
              if (n) {
                for (; (e = e[s]); )
                  if ((1 === e.nodeType || d) && a(e, t, n)) return !0;
              } else
                for (; (e = e[s]); )
                  if (1 === e.nodeType || d)
                    if (
                      ((o =
                        (o = e[C] || (e[C] = {}))[e.uniqueID] ||
                        (o[e.uniqueID] = {})),
                      l && l === e.nodeName.toLowerCase())
                    )
                      e = e[s] || e;
                    else {
                      if ((i = o[c]) && i[0] === T && i[1] === u)
                        return (r[2] = i[2]);
                      if (((o[c] = r)[2] = a(e, t, n))) return !0;
                    }
              return !1;
            };
      }
      function be(o) {
        return 1 < o.length
          ? function (e, t, n) {
              for (var i = o.length; i--; ) if (!o[i](e, t, n)) return !1;
              return !0;
            }
          : o[0];
      }
      function we(e, t, n, i, o) {
        for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++)
          !(r = e[s]) || (n && !n(r, i, o)) || (a.push(r), c && t.push(s));
        return a;
      }
      function Le(e) {
        for (
          var i,
            t,
            n,
            o = e.length,
            r = w.relative[e[0].type],
            a = r || w.relative[" "],
            s = r ? 1 : 0,
            l = ye(
              function (e) {
                return e === i;
              },
              a,
              !0
            ),
            c = ye(
              function (e) {
                return -1 < y(i, e);
              },
              a,
              !0
            ),
            d = [
              function (e, t, n) {
                e =
                  (!r && (n || t !== L)) || ((i = t).nodeType ? l : c)(e, t, n);
                return (i = null), e;
              },
            ];
          s < o;
          s++
        )
          if ((t = w.relative[e[s].type])) d = [ye(be(d), t)];
          else {
            if ((t = w.filter[e[s].type].apply(null, e[s].matches))[C]) {
              for (n = ++s; n < o && !w.relative[e[n].type]; n++);
              return (function e(p, f, m, g, v, t) {
                return (
                  g && !g[C] && (g = e(g)),
                  v && !v[C] && (v = e(v, t)),
                  I(function (e, t, n, i) {
                    var o,
                      r,
                      a,
                      s = [],
                      l = [],
                      c = t.length,
                      d =
                        e ||
                        (function (e, t, n) {
                          for (var i = 0, o = t.length; i < o; i++)
                            D(e, t[i], n);
                          return n;
                        })(f || "*", n.nodeType ? [n] : n, []),
                      u = !p || (!e && f) ? d : we(d, s, p, n, i),
                      h = m ? (v || (e ? p : c || g) ? [] : t) : u;
                    if ((m && m(u, h, n, i), g))
                      for (o = we(h, l), g(o, [], n, i), r = o.length; r--; )
                        (a = o[r]) && (h[l[r]] = !(u[l[r]] = a));
                    if (e) {
                      if (v || p) {
                        if (v) {
                          for (o = [], r = h.length; r--; )
                            (a = h[r]) && o.push((u[r] = a));
                          v(null, (h = []), o, i);
                        }
                        for (r = h.length; r--; )
                          (a = h[r]) &&
                            -1 < (o = v ? y(e, a) : s[r]) &&
                            (e[o] = !(t[o] = a));
                      }
                    } else (h = we(h === t ? h.splice(c, h.length) : h)), v ? v(null, t, h, i) : S.apply(t, h);
                  })
                );
              })(
                1 < s && be(d),
                1 < s &&
                  j(
                    e
                      .slice(0, s - 1)
                      .concat({ value: " " === e[s - 2].type ? "*" : "" })
                  ).replace(v, "$1"),
                t,
                s < n && Le(e.slice(s, n)),
                n < o && Le((e = e.slice(n))),
                n < o && j(e)
              );
            }
            d.push(t);
          }
        return be(d);
      }
      return (
        (ve.prototype = w.filters = w.pseudos),
        (w.setFilters = new ve()),
        (p = D.tokenize =
          function (e, t) {
            var n,
              i,
              o,
              r,
              a,
              s,
              l,
              c = z[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, s = [], l = w.preFilter; a; ) {
              for (r in ((n && !(i = te.exec(a))) ||
                (i && (a = a.slice(i[0].length) || a), s.push((o = []))),
              (n = !1),
              (i = ne.exec(a)) &&
                ((n = i.shift()),
                o.push({ value: n, type: i[0].replace(v, " ") }),
                (a = a.slice(n.length))),
              w.filter))
                !(i = b[r].exec(a)) ||
                  (l[r] && !(i = l[r](i))) ||
                  ((n = i.shift()),
                  o.push({ value: n, type: r, matches: i }),
                  (a = a.slice(n.length)));
              if (!n) break;
            }
            return t ? a.length : a ? D.error(e) : z(e, s).slice(0);
          }),
        (O = D.compile =
          function (e, t) {
            var n,
              g,
              v,
              y,
              b,
              i,
              o = [],
              r = [],
              a = _[e + " "];
            if (!a) {
              for (n = (t = t || p(e)).length; n--; )
                ((a = Le(t[n]))[C] ? o : r).push(a);
              (a = _(
                e,
                ((y = 0 < (v = o).length),
                (b = 0 < (g = r).length),
                (i = function (e, t, n, i, o) {
                  var r,
                    a,
                    s,
                    l = 0,
                    c = "0",
                    d = e && [],
                    u = [],
                    h = L,
                    p = e || (b && w.find.TAG("*", o)),
                    f = (T += null == h ? 1 : Math.random() || 0.1),
                    m = p.length;
                  for (
                    o && (L = t == k || t || o);
                    c !== m && null != (r = p[c]);
                    c++
                  ) {
                    if (b && r) {
                      for (
                        a = 0, t || r.ownerDocument == k || (x(r), (n = !E));
                        (s = g[a++]);

                      )
                        if (s(r, t || k, n)) {
                          i.push(r);
                          break;
                        }
                      o && (T = f);
                    }
                    y && ((r = !s && r) && l--, e) && d.push(r);
                  }
                  if (((l += c), y && c !== l)) {
                    for (a = 0; (s = v[a++]); ) s(d, u, t, n);
                    if (e) {
                      if (0 < l)
                        for (; c--; ) d[c] || u[c] || (u[c] = G.call(i));
                      u = we(u);
                    }
                    S.apply(i, u),
                      o &&
                        !e &&
                        0 < u.length &&
                        1 < l + v.length &&
                        D.uniqueSort(i);
                  }
                  return o && ((T = f), (L = h)), d;
                }),
                y ? I(i) : i)
              )).selector = e;
            }
            return a;
          }),
        (W = D.select =
          function (e, t, n, i) {
            var o,
              r,
              a,
              s,
              l,
              c = "function" == typeof e && e,
              d = !i && p((e = c.selector || e));
            if (((n = n || []), 1 === d.length)) {
              if (
                2 < (r = d[0] = d[0].slice(0)).length &&
                "ID" === (a = r[0]).type &&
                9 === t.nodeType &&
                E &&
                w.relative[r[1].type]
              ) {
                if (!(t = (w.find.ID(a.matches[0].replace(V, u), t) || [])[0]))
                  return n;
                c && (t = t.parentNode), (e = e.slice(r.shift().value.length));
              }
              for (
                o = b.needsContext.test(e) ? 0 : r.length;
                o-- && ((a = r[o]), !w.relative[(s = a.type)]);

              )
                if (
                  (l = w.find[s]) &&
                  (i = l(
                    a.matches[0].replace(V, u),
                    (de.test(r[0].type) && ge(t.parentNode)) || t
                  ))
                ) {
                  if ((r.splice(o, 1), (e = i.length && j(r)))) break;
                  return S.apply(n, i), n;
                }
            }
            return (
              (c || O(e, d))(
                i,
                t,
                !E,
                n,
                !t || (de.test(e) && ge(t.parentNode)) || t
              ),
              n
            );
          }),
        (h.sortStable = C.split("").sort(Y).join("") === C),
        (h.detectDuplicates = !!c),
        x(),
        (h.sortDetached = N(function (e) {
          return 1 & e.compareDocumentPosition(k.createElement("fieldset"));
        })),
        N(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          pe("type|href|height|width", function (e, t, n) {
            if (!n)
              return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (h.attributes &&
          N(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          pe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
              return e.defaultValue;
          }),
        N(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          pe(X, function (e, t, n) {
            if (!n)
              return !0 === e[t]
                ? t.toLowerCase()
                : (n = e.getAttributeNode(t)) && n.specified
                ? n.value
                : null;
          }),
        D
      );
    })(x),
    K =
      ((E.find = e),
      (E.expr = e.selectors),
      (E.expr[":"] = E.expr.pseudos),
      (E.uniqueSort = E.unique = e.uniqueSort),
      (E.text = e.getText),
      (E.isXMLDoc = e.isXML),
      (E.contains = e.contains),
      (E.escapeSelector = e.escape),
      E.expr.match.needsContext);
  function l(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var X = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function J(e, n, i) {
    return y(n)
      ? E.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== i;
        })
      : n.nodeType
      ? E.grep(e, function (e) {
          return (e === n) !== i;
        })
      : "string" != typeof n
      ? E.grep(e, function (e) {
          return -1 < O.call(n, e) !== i;
        })
      : E.filter(n, e, i);
  }
  (E.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? E.find.matchesSelector(i, e)
          ? [i]
          : []
        : E.find.matches(
            e,
            E.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    E.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          o = this;
        if ("string" != typeof e)
          return this.pushStack(
            E(e).filter(function () {
              for (t = 0; t < i; t++) if (E.contains(o[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) E.find(e, o[t], n);
        return 1 < i ? E.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(J(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(J(this, e || [], !0));
      },
      is: function (e) {
        return !!J(this, "string" == typeof e && K.test(e) ? E(e) : e || [], !1)
          .length;
      },
    });
  var Z,
    ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    te =
      (((E.fn.init = function (e, t, n) {
        if (e) {
          if (((n = n || Z), "string" != typeof e))
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : y(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(E)
              : E.makeArray(e, this);
          if (
            !(i =
              "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
                ? [null, e, null]
                : ee.exec(e)) ||
            (!i[1] && t)
          )
            return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
          if (i[1]) {
            if (
              ((t = t instanceof E ? t[0] : t),
              E.merge(
                this,
                E.parseHTML(
                  i[1],
                  t && t.nodeType ? t.ownerDocument || t : k,
                  !0
                )
              ),
              X.test(i[1]) && E.isPlainObject(t))
            )
              for (var i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          } else
            (n = k.getElementById(i[2])) && ((this[0] = n), (this.length = 1));
        }
        return this;
      }).prototype = E.fn),
      (Z = E(k)),
      /^(?:parents|prev(?:Until|All))/),
    ne = { children: !0, contents: !0, next: !0, prev: !0 };
  function ie(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  E.fn.extend({
    has: function (e) {
      var t = E(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        o = this.length,
        r = [],
        a = "string" != typeof e && E(e);
      if (!K.test(e))
        for (; i < o; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && E.find.matchesSelector(n, e))
            ) {
              r.push(n);
              break;
            }
      return this.pushStack(1 < r.length ? E.uniqueSort(r) : r);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? O.call(E(e), this[0])
          : O.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    E.each(
      {
        parent: function (e) {
          e = e.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (e) {
          return i(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return i(e, "parentNode", n);
        },
        next: function (e) {
          return ie(e, "nextSibling");
        },
        prev: function (e) {
          return ie(e, "previousSibling");
        },
        nextAll: function (e) {
          return i(e, "nextSibling");
        },
        prevAll: function (e) {
          return i(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return i(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return i(e, "previousSibling", n);
        },
        siblings: function (e) {
          return Q((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return Q(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && B(e.contentDocument)
            ? e.contentDocument
            : (l(e, "template") && (e = e.content || e),
              E.merge([], e.childNodes));
        },
      },
      function (i, o) {
        E.fn[i] = function (e, t) {
          var n = E.map(this, o, e);
          return (
            (t = "Until" !== i.slice(-5) ? e : t) &&
              "string" == typeof t &&
              (n = E.filter(t, n)),
            1 < this.length &&
              (ne[i] || E.uniqueSort(n), te.test(i)) &&
              n.reverse(),
            this.pushStack(n)
          );
        };
      }
    );
  var C = /[^\x20\t\r\n\f]+/g;
  function d(e) {
    return e;
  }
  function oe(e) {
    throw e;
  }
  function re(e, t, n, i) {
    var o;
    try {
      e && y((o = e.promise))
        ? o.call(e).done(t).fail(n)
        : e && y((o = e.then))
        ? o.call(e, t, n)
        : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (E.Callbacks = function (i) {
    var e, n;
    i =
      "string" == typeof i
        ? ((e = i),
          (n = {}),
          E.each(e.match(C) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : E.extend({}, i);
    function o() {
      for (s = s || i.once, a = r = !0; c.length; d = -1)
        for (t = c.shift(); ++d < l.length; )
          !1 === l[d].apply(t[0], t[1]) &&
            i.stopOnFalse &&
            ((d = l.length), (t = !1));
      i.memory || (t = !1), (r = !1), s && (l = t ? [] : "");
    }
    var r,
      t,
      a,
      s,
      l = [],
      c = [],
      d = -1,
      u = {
        add: function () {
          return (
            l &&
              (t && !r && ((d = l.length - 1), c.push(t)),
              (function n(e) {
                E.each(e, function (e, t) {
                  y(t)
                    ? (i.unique && u.has(t)) || l.push(t)
                    : t && t.length && "string" !== f(t) && n(t);
                });
              })(arguments),
              t) &&
              !r &&
              o(),
            this
          );
        },
        remove: function () {
          return (
            E.each(arguments, function (e, t) {
              for (var n; -1 < (n = E.inArray(t, l, n)); )
                l.splice(n, 1), n <= d && d--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < E.inArray(e, l) : 0 < l.length;
        },
        empty: function () {
          return (l = l && []), this;
        },
        disable: function () {
          return (s = c = []), (l = t = ""), this;
        },
        disabled: function () {
          return !l;
        },
        lock: function () {
          return (s = c = []), t || r || (l = t = ""), this;
        },
        locked: function () {
          return !!s;
        },
        fireWith: function (e, t) {
          return (
            s ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]), c.push(t), r) ||
              o(),
            this
          );
        },
        fire: function () {
          return u.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!a;
        },
      };
    return u;
  }),
    E.extend({
      Deferred: function (e) {
        var r = [
            [
              "notify",
              "progress",
              E.Callbacks("memory"),
              E.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              E.Callbacks("once memory"),
              E.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              E.Callbacks("once memory"),
              E.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          o = "pending",
          a = {
            state: function () {
              return o;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var o = arguments;
              return E.Deferred(function (i) {
                E.each(r, function (e, t) {
                  var n = y(o[t[4]]) && o[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && y(e.promise)
                      ? e
                          .promise()
                          .progress(i.notify)
                          .done(i.resolve)
                          .fail(i.reject)
                      : i[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (o = null);
              }).promise();
            },
            then: function (t, n, i) {
              var l = 0;
              function c(o, r, a, s) {
                return function () {
                  function e() {
                    var e, t;
                    if (!(o < l)) {
                      if ((e = a.apply(n, i)) === r.promise())
                        throw new TypeError("Thenable self-resolution");
                      (t =
                        e &&
                        ("object" == typeof e || "function" == typeof e) &&
                        e.then),
                        y(t)
                          ? s
                            ? t.call(e, c(l, r, d, s), c(l, r, oe, s))
                            : (l++,
                              t.call(
                                e,
                                c(l, r, d, s),
                                c(l, r, oe, s),
                                c(l, r, d, r.notifyWith)
                              ))
                          : (a !== d && ((n = void 0), (i = [e])),
                            (s || r.resolveWith)(n, i));
                    }
                  }
                  var n = this,
                    i = arguments,
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            E.Deferred.exceptionHook &&
                              E.Deferred.exceptionHook(e, t.stackTrace),
                              l <= o + 1 &&
                                (a !== oe && ((n = void 0), (i = [e])),
                                r.rejectWith(n, i));
                          }
                        };
                  o
                    ? t()
                    : (E.Deferred.getStackHook &&
                        (t.stackTrace = E.Deferred.getStackHook()),
                      x.setTimeout(t));
                };
              }
              return E.Deferred(function (e) {
                r[0][3].add(c(0, e, y(i) ? i : d, e.notifyWith)),
                  r[1][3].add(c(0, e, y(t) ? t : d)),
                  r[2][3].add(c(0, e, y(n) ? n : oe));
              }).promise();
            },
            promise: function (e) {
              return null != e ? E.extend(e, a) : a;
            },
          },
          s = {};
        return (
          E.each(r, function (e, t) {
            var n = t[2],
              i = t[5];
            (a[t[1]] = n.add),
              i &&
                n.add(
                  function () {
                    o = i;
                  },
                  r[3 - e][2].disable,
                  r[3 - e][3].disable,
                  r[0][2].lock,
                  r[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        function t(t) {
          return function (e) {
            (o[t] = this),
              (r[t] = 1 < arguments.length ? s.call(arguments) : e),
              --n || a.resolveWith(o, r);
          };
        }
        var n = arguments.length,
          i = n,
          o = Array(i),
          r = s.call(arguments),
          a = E.Deferred();
        if (
          n <= 1 &&
          (re(e, a.done(t(i)).resolve, a.reject, !n),
          "pending" === a.state() || y(r[i] && r[i].then))
        )
          return a.then();
        for (; i--; ) re(r[i], t(i), a.reject);
        return a.promise();
      },
    });
  var ae = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
    se =
      ((E.Deferred.exceptionHook = function (e, t) {
        x.console &&
          x.console.warn &&
          e &&
          ae.test(e.name) &&
          x.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
      (E.readyException = function (e) {
        x.setTimeout(function () {
          throw e;
        });
      }),
      E.Deferred());
  function le() {
    k.removeEventListener("DOMContentLoaded", le),
      x.removeEventListener("load", le),
      E.ready();
  }
  (E.fn.ready = function (e) {
    return (
      se.then(e).catch(function (e) {
        E.readyException(e);
      }),
      this
    );
  }),
    E.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --E.readyWait : E.isReady) ||
          ((E.isReady = !0) !== e && 0 < --E.readyWait) ||
          se.resolveWith(k, [E]);
      },
    }),
    (E.ready.then = se.then),
    "complete" === k.readyState ||
    ("loading" !== k.readyState && !k.documentElement.doScroll)
      ? x.setTimeout(E.ready)
      : (k.addEventListener("DOMContentLoaded", le),
        x.addEventListener("load", le));
  function u(e, t, n, i, o, r, a) {
    var s = 0,
      l = e.length,
      c = null == n;
    if ("object" === f(n)) for (s in ((o = !0), n)) u(e, t, s, n[s], !0, r, a);
    else if (
      void 0 !== i &&
      ((o = !0),
      y(i) || (a = !0),
      (t = c
        ? a
          ? (t.call(e, i), null)
          : ((c = t),
            function (e, t, n) {
              return c.call(E(e), n);
            })
        : t))
    )
      for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
    return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
  }
  var ce = /^-ms-/,
    de = /-([a-z])/g;
  function ue(e, t) {
    return t.toUpperCase();
  }
  function b(e) {
    return e.replace(ce, "ms-").replace(de, ue);
  }
  function v(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }
  function he() {
    this.expando = E.expando + he.uid++;
  }
  (he.uid = 1),
    (he.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            v(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var i,
          o = this.cache(e);
        if ("string" == typeof t) o[b(t)] = n;
        else for (i in t) o[b(i)] = t[i];
        return o;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][b(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(b)
              : (t = b(t)) in i
              ? [t]
              : t.match(C) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (void 0 !== t && !E.isEmptyObject(i)) ||
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        e = e[this.expando];
        return void 0 !== e && !E.isEmptyObject(e);
      },
    });
  var w = new he(),
    c = new he(),
    pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    fe = /[A-Z]/g;
  function me(e, t, n) {
    var i, o;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = "data-" + t.replace(fe, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n =
            "true" === (o = n) ||
            ("false" !== o &&
              ("null" === o
                ? null
                : o === +o + ""
                ? +o
                : pe.test(o)
                ? JSON.parse(o)
                : o));
        } catch (e) {}
        c.set(e, t, n);
      } else n = void 0;
    return n;
  }
  E.extend({
    hasData: function (e) {
      return c.hasData(e) || w.hasData(e);
    },
    data: function (e, t, n) {
      return c.access(e, t, n);
    },
    removeData: function (e, t) {
      c.remove(e, t);
    },
    _data: function (e, t, n) {
      return w.access(e, t, n);
    },
    _removeData: function (e, t) {
      w.remove(e, t);
    },
  }),
    E.fn.extend({
      data: function (n, e) {
        var t,
          i,
          o,
          r = this[0],
          a = r && r.attributes;
        if (void 0 !== n)
          return "object" == typeof n
            ? this.each(function () {
                c.set(this, n);
              })
            : u(
                this,
                function (e) {
                  var t;
                  if (r && void 0 === e)
                    return void 0 !== (t = c.get(r, n)) ||
                      void 0 !== (t = me(r, n))
                      ? t
                      : void 0;
                  this.each(function () {
                    c.set(this, n, e);
                  });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0
              );
        if (
          this.length &&
          ((o = c.get(r)), 1 === r.nodeType) &&
          !w.get(r, "hasDataAttrs")
        ) {
          for (t = a.length; t--; )
            a[t] &&
              0 === (i = a[t].name).indexOf("data-") &&
              ((i = b(i.slice(5))), me(r, i, o[i]));
          w.set(r, "hasDataAttrs", !0);
        }
        return o;
      },
      removeData: function (e) {
        return this.each(function () {
          c.remove(this, e);
        });
      },
    }),
    E.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (i = w.get(e, (t = (t || "fx") + "queue"))),
            n &&
              (!i || Array.isArray(n)
                ? (i = w.access(e, t, E.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = E.queue(e, t),
          i = n.length,
          o = n.shift(),
          r = E._queueHooks(e, t);
        "inprogress" === o && ((o = n.shift()), i--),
          o &&
            ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            o.call(
              e,
              function () {
                E.dequeue(e, t);
              },
              r
            )),
          !i && r && r.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          w.get(e, n) ||
          w.access(e, n, {
            empty: E.Callbacks("once memory").add(function () {
              w.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    E.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? E.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          E.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        function n() {
          --o || r.resolveWith(a, [a]);
        }
        var i,
          o = 1,
          r = E.Deferred(),
          a = this,
          s = this.length;
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          s--;

        )
          (i = w.get(a[s], e + "queueHooks")) &&
            i.empty &&
            (o++, i.empty.add(n));
        return n(), r.promise(t);
      },
    });
  function ge(e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && T(e) && "none" === E.css(e, "display"))
    );
  }
  var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ve = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
    h = ["Top", "Right", "Bottom", "Left"],
    L = k.documentElement,
    T = function (e) {
      return E.contains(e.ownerDocument, e);
    },
    ye = { composed: !0 };
  L.getRootNode &&
    (T = function (e) {
      return (
        E.contains(e.ownerDocument, e) || e.getRootNode(ye) === e.ownerDocument
      );
    });
  function be(e, t, n, i) {
    var o,
      r,
      a = 20,
      s = i
        ? function () {
            return i.cur();
          }
        : function () {
            return E.css(e, t, "");
          },
      l = s(),
      c = (n && n[3]) || (E.cssNumber[t] ? "" : "px"),
      d =
        e.nodeType &&
        (E.cssNumber[t] || ("px" !== c && +l)) &&
        ve.exec(E.css(e, t));
    if (d && d[3] !== c) {
      for (c = c || d[3], d = +(l /= 2) || 1; a--; )
        E.style(e, t, d + c),
          (1 - r) * (1 - (r = s() / l || 0.5)) <= 0 && (a = 0),
          (d /= r);
      E.style(e, t, (d *= 2) + c), (n = n || []);
    }
    return (
      n &&
        ((d = +d || +l || 0), (o = n[1] ? d + (n[1] + 1) * n[2] : +n[2]), i) &&
        ((i.unit = c), (i.start = d), (i.end = o)),
      o
    );
  }
  var we = {};
  function S(e, t) {
    for (var n, i, o, r, a, s, l = [], c = 0, d = e.length; c < d; c++)
      (i = e[c]).style &&
        ((n = i.style.display),
        t
          ? ("none" === n &&
              ((l[c] = w.get(i, "display") || null),
              l[c] || (i.style.display = "")),
            "" === i.style.display &&
              ge(i) &&
              (l[c] =
                ((s = r = o = void 0),
                (r = i.ownerDocument),
                (a = i.nodeName),
                (s = we[a]) ||
                  ((o = r.body.appendChild(r.createElement(a))),
                  (s = E.css(o, "display")),
                  o.parentNode.removeChild(o),
                  (we[a] = s = "none" === s ? "block" : s)))))
          : "none" !== n && ((l[c] = "none"), w.set(i, "display", n)));
    for (c = 0; c < d; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  E.fn.extend({
    show: function () {
      return S(this, !0);
    },
    hide: function () {
      return S(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ge(this) ? E(this).show() : E(this).hide();
          });
    },
  });
  var Le = /^(?:checkbox|radio)$/i,
    xe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    ke = /^$|^module$|\/(?:java|ecma)script/i,
    n = k.createDocumentFragment().appendChild(k.createElement("div")),
    A =
      ((I = k.createElement("input")).setAttribute("type", "radio"),
      I.setAttribute("checked", "checked"),
      I.setAttribute("name", "t"),
      n.appendChild(I),
      (g.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (n.innerHTML = "<textarea>x</textarea>"),
      (g.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue),
      (n.innerHTML = "<option></option>"),
      (g.option = !!n.lastChild),
      {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      });
  function V(e, t) {
    var n =
      void 0 !== e.getElementsByTagName
        ? e.getElementsByTagName(t || "*")
        : void 0 !== e.querySelectorAll
        ? e.querySelectorAll(t || "*")
        : [];
    return void 0 === t || (t && l(e, t)) ? E.merge([e], n) : n;
  }
  function Ee(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      w.set(e[n], "globalEval", !t || w.get(t[n], "globalEval"));
  }
  (A.tbody = A.tfoot = A.colgroup = A.caption = A.thead),
    (A.th = A.td),
    g.option ||
      (A.optgroup = A.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var Ce = /<|&#?\w+;/;
  function Te(e, t, n, i, o) {
    for (
      var r,
        a,
        s,
        l,
        c,
        d = t.createDocumentFragment(),
        u = [],
        h = 0,
        p = e.length;
      h < p;
      h++
    )
      if ((r = e[h]) || 0 === r)
        if ("object" === f(r)) E.merge(u, r.nodeType ? [r] : r);
        else if (Ce.test(r)) {
          for (
            a = a || d.appendChild(t.createElement("div")),
              s = (xe.exec(r) || ["", ""])[1].toLowerCase(),
              s = A[s] || A._default,
              a.innerHTML = s[1] + E.htmlPrefilter(r) + s[2],
              c = s[0];
            c--;

          )
            a = a.lastChild;
          E.merge(u, a.childNodes), ((a = d.firstChild).textContent = "");
        } else u.push(t.createTextNode(r));
    for (d.textContent = "", h = 0; (r = u[h++]); )
      if (i && -1 < E.inArray(r, i)) o && o.push(r);
      else if (((l = T(r)), (a = V(d.appendChild(r), "script")), l && Ee(a), n))
        for (c = 0; (r = a[c++]); ) ke.test(r.type || "") && n.push(r);
    return d;
  }
  var Se = /^([^.]*)(?:\.(.+)|)/;
  function a() {
    return !0;
  }
  function p() {
    return !1;
  }
  function Ae(e, t) {
    return (
      (e ===
        (function () {
          try {
            return k.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ve(e, t, n, i, o, r) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
        Ve(e, s, n, i, t[s], r);
      return e;
    }
    if (
      (null == i && null == o
        ? ((o = n), (i = n = void 0))
        : null == o &&
          ("string" == typeof n
            ? ((o = i), (i = void 0))
            : ((o = i), (i = n), (n = void 0))),
      !1 === o)
    )
      o = p;
    else if (!o) return e;
    return (
      1 === r &&
        ((a = o),
        ((o = function (e) {
          return E().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = E.guid++))),
      e.each(function () {
        E.event.add(this, t, o, i, n);
      })
    );
  }
  function De(e, o, r) {
    r
      ? (w.set(e, o, !1),
        E.event.add(e, o, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              i = w.get(this, o);
            if (1 & e.isTrigger && this[o]) {
              if (i.length)
                (E.event.special[o] || {}).delegateType && e.stopPropagation();
              else if (
                ((i = s.call(arguments)),
                w.set(this, o, i),
                (t = r(this, o)),
                this[o](),
                i !== (n = w.get(this, o)) || t ? w.set(this, o, !1) : (n = {}),
                i !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                );
            } else
              i.length &&
                (w.set(this, o, {
                  value: E.event.trigger(
                    E.extend(i[0], E.Event.prototype),
                    i.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === w.get(e, o) && E.event.add(e, o, a);
  }
  (E.event = {
    global: {},
    add: function (t, e, n, i, o) {
      var r,
        a,
        s,
        l,
        c,
        d,
        u,
        h,
        p,
        f = w.get(t);
      if (v(t))
        for (
          n.handler && ((n = (r = n).handler), (o = r.selector)),
            o && E.find.matchesSelector(L, o),
            n.guid || (n.guid = E.guid++),
            s = (s = f.events) || (f.events = Object.create(null)),
            a =
              (a = f.handle) ||
              (f.handle = function (e) {
                return void 0 !== E && E.event.triggered !== e.type
                  ? E.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
            l = (e = (e || "").match(C) || [""]).length;
          l--;

        )
          (u = p = (h = Se.exec(e[l]) || [])[1]),
            (h = (h[2] || "").split(".").sort()),
            u &&
              ((c = E.event.special[u] || {}),
              (u = (o ? c.delegateType : c.bindType) || u),
              (c = E.event.special[u] || {}),
              (p = E.extend(
                {
                  type: u,
                  origType: p,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && E.expr.match.needsContext.test(o),
                  namespace: h.join("."),
                },
                r
              )),
              (d = s[u]) ||
                (((d = s[u] = []).delegateCount = 0),
                c.setup && !1 !== c.setup.call(t, i, h, a)) ||
                (t.addEventListener && t.addEventListener(u, a)),
              c.add &&
                (c.add.call(t, p), p.handler.guid || (p.handler.guid = n.guid)),
              o ? d.splice(d.delegateCount++, 0, p) : d.push(p),
              (E.event.global[u] = !0));
    },
    remove: function (e, t, n, i, o) {
      var r,
        a,
        s,
        l,
        c,
        d,
        u,
        h,
        p,
        f,
        m,
        g = w.hasData(e) && w.get(e);
      if (g && (l = g.events)) {
        for (c = (t = (t || "").match(C) || [""]).length; c--; )
          if (
            ((p = m = (s = Se.exec(t[c]) || [])[1]),
            (f = (s[2] || "").split(".").sort()),
            p)
          ) {
            for (
              u = E.event.special[p] || {},
                h = l[(p = (i ? u.delegateType : u.bindType) || p)] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = r = h.length;
              r--;

            )
              (d = h[r]),
                (!o && m !== d.origType) ||
                  (n && n.guid !== d.guid) ||
                  (s && !s.test(d.namespace)) ||
                  (i && i !== d.selector && ("**" !== i || !d.selector)) ||
                  (h.splice(r, 1),
                  d.selector && h.delegateCount--,
                  u.remove && u.remove.call(e, d));
            a &&
              !h.length &&
              ((u.teardown && !1 !== u.teardown.call(e, f, g.handle)) ||
                E.removeEvent(e, p, g.handle),
              delete l[p]);
          } else for (p in l) E.event.remove(e, p + t[c], n, i, !0);
        E.isEmptyObject(l) && w.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        o,
        r,
        a = new Array(arguments.length),
        s = E.event.fix(e),
        e = (w.get(this, "events") || Object.create(null))[s.type] || [],
        l = E.event.special[s.type] || {};
      for (a[0] = s, t = 1; t < arguments.length; t++) a[t] = arguments[t];
      if (
        ((s.delegateTarget = this),
        !l.preDispatch || !1 !== l.preDispatch.call(this, s))
      ) {
        for (
          r = E.event.handlers.call(this, s, e), t = 0;
          (i = r[t++]) && !s.isPropagationStopped();

        )
          for (
            s.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();

          )
            (s.rnamespace &&
              !1 !== o.namespace &&
              !s.rnamespace.test(o.namespace)) ||
              ((s.handleObj = o),
              (s.data = o.data),
              void 0 !==
                (o = (
                  (E.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, a)) &&
                !1 === (s.result = o) &&
                (s.preventDefault(), s.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        o,
        r,
        a,
        s = [],
        l = t.delegateCount,
        c = e.target;
      if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (r = [], a = {}, n = 0; n < l; n++)
              void 0 === a[(o = (i = t[n]).selector + " ")] &&
                (a[o] = i.needsContext
                  ? -1 < E(o, this).index(c)
                  : E.find(o, this, null, [c]).length),
                a[o] && r.push(i);
            r.length && s.push({ elem: c, handlers: r });
          }
      return (
        (c = this), l < t.length && s.push({ elem: c, handlers: t.slice(l) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(E.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: y(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[E.expando] ? e : new E.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          e = this || e;
          return (
            Le.test(e.type) && e.click && l(e, "input") && De(e, "click", a), !1
          );
        },
        trigger: function (e) {
          e = this || e;
          return (
            Le.test(e.type) && e.click && l(e, "input") && De(e, "click"), !0
          );
        },
        _default: function (e) {
          e = e.target;
          return (
            (Le.test(e.type) &&
              e.click &&
              l(e, "input") &&
              w.get(e, "click")) ||
            l(e, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (E.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (E.Event = function (e, t) {
      if (!(this instanceof E.Event)) return new E.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? a
              : p),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && E.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[E.expando] = !0);
    }),
    (E.Event.prototype = {
      constructor: E.Event,
      isDefaultPrevented: p,
      isPropagationStopped: p,
      isImmediatePropagationStopped: p,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = a),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = a),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = a),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    E.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      E.event.addProp
    ),
    E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      E.event.special[e] = {
        setup: function () {
          return De(this, e, Ae), !1;
        },
        trigger: function () {
          return De(this, e), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: t,
      };
    }),
    E.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, o) {
        E.event.special[e] = {
          delegateType: o,
          bindType: o,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              i = e.handleObj;
            return (
              (n && (n === this || E.contains(this, n))) ||
                ((e.type = i.origType),
                (t = i.handler.apply(this, arguments)),
                (e.type = o)),
              t
            );
          },
        };
      }
    ),
    E.fn.extend({
      on: function (e, t, n, i) {
        return Ve(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return Ve(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, o;
        if (e && e.preventDefault && e.handleObj)
          (i = e.handleObj),
            E(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            );
        else {
          if ("object" != typeof e)
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = p),
              this.each(function () {
                E.event.remove(this, e, n, t);
              })
            );
          for (o in e) this.off(o, t, e[o]);
        }
        return this;
      },
    });
  var $e = /<script|<style|<link/i,
    Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Me(e, t) {
    return (
      (l(e, "table") &&
        l(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        E(e).children("tbody")[0]) ||
      e
    );
  }
  function je(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function qe(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Be(e, t) {
    var n, i, o, r;
    if (1 === t.nodeType) {
      if (w.hasData(e) && (r = w.get(e).events))
        for (o in (w.remove(t, "handle events"), r))
          for (n = 0, i = r[o].length; n < i; n++) E.event.add(t, o, r[o][n]);
      c.hasData(e) && ((e = c.access(e)), (e = E.extend({}, e)), c.set(t, e));
    }
  }
  function D(n, i, o, r) {
    i = P(i);
    var e,
      t,
      a,
      s,
      l,
      c,
      d = 0,
      u = n.length,
      h = u - 1,
      p = i[0],
      f = y(p);
    if (f || (1 < u && "string" == typeof p && !g.checkClone && Ie.test(p)))
      return n.each(function (e) {
        var t = n.eq(e);
        f && (i[0] = p.call(this, e, t.html())), D(t, i, o, r);
      });
    if (
      u &&
      ((t = (e = Te(i, n[0].ownerDocument, !1, n, r)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || r)
    ) {
      for (s = (a = E.map(V(e, "script"), je)).length; d < u; d++)
        (l = e),
          d !== h &&
            ((l = E.clone(l, !0, !0)), s) &&
            E.merge(a, V(l, "script")),
          o.call(n[d], l, d);
      if (s)
        for (c = a[a.length - 1].ownerDocument, E.map(a, qe), d = 0; d < s; d++)
          (l = a[d]),
            ke.test(l.type || "") &&
              !w.access(l, "globalEval") &&
              E.contains(c, l) &&
              (l.src && "module" !== (l.type || "").toLowerCase()
                ? E._evalUrl &&
                  !l.noModule &&
                  E._evalUrl(
                    l.src,
                    { nonce: l.nonce || l.getAttribute("nonce") },
                    c
                  )
                : U(l.textContent.replace(Ne, ""), l, c));
    }
    return n;
  }
  function Pe(e, t, n) {
    for (var i, o = t ? E.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
      n || 1 !== i.nodeType || E.cleanData(V(i)),
        i.parentNode &&
          (n && T(i) && Ee(V(i, "script")), i.parentNode.removeChild(i));
    return e;
  }
  E.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var i,
        o,
        r,
        a,
        s,
        l,
        c,
        d = e.cloneNode(!0),
        u = T(e);
      if (
        !(
          g.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          E.isXMLDoc(e)
        )
      )
        for (a = V(d), i = 0, o = (r = V(e)).length; i < o; i++)
          (s = r[i]),
            "input" === (c = (l = a[i]).nodeName.toLowerCase()) &&
            Le.test(s.type)
              ? (l.checked = s.checked)
              : ("input" !== c && "textarea" !== c) ||
                (l.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (r = r || V(e), a = a || V(d), i = 0, o = r.length; i < o; i++)
            Be(r[i], a[i]);
        else Be(e, d);
      return 0 < (a = V(d, "script")).length && Ee(a, !u && V(e, "script")), d;
    },
    cleanData: function (e) {
      for (var t, n, i, o = E.event.special, r = 0; void 0 !== (n = e[r]); r++)
        if (v(n)) {
          if ((t = n[w.expando])) {
            if (t.events)
              for (i in t.events)
                o[i] ? E.event.remove(n, i) : E.removeEvent(n, i, t.handle);
            n[w.expando] = void 0;
          }
          n[c.expando] && (n[c.expando] = void 0);
        }
    },
  }),
    E.fn.extend({
      detach: function (e) {
        return Pe(this, e, !0);
      },
      remove: function (e) {
        return Pe(this, e);
      },
      text: function (e) {
        return u(
          this,
          function (e) {
            return void 0 === e
              ? E.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return D(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Me(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return D(this, arguments, function (e) {
          var t;
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            (t = Me(this, e)).insertBefore(e, t.firstChild);
        });
      },
      before: function () {
        return D(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return D(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (E.cleanData(V(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return E.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return u(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !$e.test(e) &&
              !A[(xe.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = E.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (E.cleanData(V(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return D(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            E.inArray(this, n) < 0 &&
              (E.cleanData(V(this)), t) &&
              t.replaceChild(e, this);
          },
          n
        );
      },
    }),
    E.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        E.fn[e] = function (e) {
          for (var t, n = [], i = E(e), o = i.length - 1, r = 0; r <= o; r++)
            (t = r === o ? this : this.clone(!0)),
              E(i[r])[a](t),
              H.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  function He(e) {
    var t = e.ownerDocument.defaultView;
    return (t = t && t.opener ? t : x).getComputedStyle(e);
  }
  function Oe(e, t, n) {
    var i,
      o = {};
    for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
    for (i in ((n = n.call(e)), t)) e.style[i] = o[i];
    return n;
  }
  var We,
    Re,
    Fe,
    ze,
    _e,
    Ye,
    Ue,
    o,
    Ge = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
    Qe = new RegExp(h.join("|"), "i");
  function Ke(e, t, n) {
    var i,
      o,
      r = e.style;
    return (
      (n = n || He(e)) &&
        ("" !== (o = n.getPropertyValue(t) || n[t]) ||
          T(e) ||
          (o = E.style(e, t)),
        !g.pixelBoxStyles()) &&
        Ge.test(o) &&
        Qe.test(t) &&
        ((e = r.width),
        (t = r.minWidth),
        (i = r.maxWidth),
        (r.minWidth = r.maxWidth = r.width = o),
        (o = n.width),
        (r.width = e),
        (r.minWidth = t),
        (r.maxWidth = i)),
      void 0 !== o ? o + "" : o
    );
  }
  function Xe(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  function Je() {
    var e;
    o &&
      ((Ue.style.cssText =
        "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
      (o.style.cssText =
        "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
      L.appendChild(Ue).appendChild(o),
      (e = x.getComputedStyle(o)),
      (We = "1%" !== e.top),
      (Ye = 12 === Ze(e.marginLeft)),
      (o.style.right = "60%"),
      (ze = 36 === Ze(e.right)),
      (Re = 36 === Ze(e.width)),
      (o.style.position = "absolute"),
      (Fe = 12 === Ze(o.offsetWidth / 3)),
      L.removeChild(Ue),
      (o = null));
  }
  function Ze(e) {
    return Math.round(parseFloat(e));
  }
  (Ue = k.createElement("div")),
    (o = k.createElement("div")).style &&
      ((o.style.backgroundClip = "content-box"),
      (o.cloneNode(!0).style.backgroundClip = ""),
      (g.clearCloneStyle = "content-box" === o.style.backgroundClip),
      E.extend(g, {
        boxSizingReliable: function () {
          return Je(), Re;
        },
        pixelBoxStyles: function () {
          return Je(), ze;
        },
        pixelPosition: function () {
          return Je(), We;
        },
        reliableMarginLeft: function () {
          return Je(), Ye;
        },
        scrollboxSize: function () {
          return Je(), Fe;
        },
        reliableTrDimensions: function () {
          var e, t, n;
          return (
            null == _e &&
              ((e = k.createElement("table")),
              (t = k.createElement("tr")),
              (n = k.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              L.appendChild(e).appendChild(t).appendChild(n),
              (n = x.getComputedStyle(t)),
              (_e =
                parseInt(n.height, 10) +
                  parseInt(n.borderTopWidth, 10) +
                  parseInt(n.borderBottomWidth, 10) ===
                t.offsetHeight),
              L.removeChild(e)),
            _e
          );
        },
      }));
  var et = ["Webkit", "Moz", "ms"],
    tt = k.createElement("div").style,
    nt = {};
  function it(e) {
    return (
      E.cssProps[e] ||
      nt[e] ||
      (e in tt
        ? e
        : (nt[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = et.length;
                n--;

              )
                if ((e = et[n] + t) in tt) return e;
            })(e) || e))
    );
  }
  var ot = /^(none|table(?!-c[ea]).+)/,
    rt = /^--/,
    at = { position: "absolute", visibility: "hidden", display: "block" },
    st = { letterSpacing: "0", fontWeight: "400" };
  function lt(e, t, n) {
    var i = ve.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }
  function ct(e, t, n, i, o, r) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      l = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (l += E.css(e, n + h[a], !0, o)),
        i
          ? ("content" === n && (l -= E.css(e, "padding" + h[a], !0, o)),
            "margin" !== n && (l -= E.css(e, "border" + h[a] + "Width", !0, o)))
          : ((l += E.css(e, "padding" + h[a], !0, o)),
            "padding" !== n
              ? (l += E.css(e, "border" + h[a] + "Width", !0, o))
              : (s += E.css(e, "border" + h[a] + "Width", !0, o)));
    return (
      !i &&
        0 <= r &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - s - 0.5
            )
          ) || 0),
      l
    );
  }
  function dt(e, t, n) {
    var i = He(e),
      o =
        (!g.boxSizingReliable() || n) &&
        "border-box" === E.css(e, "boxSizing", !1, i),
      r = o,
      a = Ke(e, t, i),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Ge.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!g.boxSizingReliable() && o) ||
        (!g.reliableTrDimensions() && l(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === E.css(e, "display", !1, i))) &&
        e.getClientRects().length &&
        ((o = "border-box" === E.css(e, "boxSizing", !1, i)), (r = s in e)) &&
        (a = e[s]),
      (a = parseFloat(a) || 0) +
        ct(e, t, n || (o ? "border" : "content"), r, i, a) +
        "px"
    );
  }
  function r(e, t, n, i, o) {
    return new r.prototype.init(e, t, n, i, o);
  }
  E.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) return "" === (t = Ke(e, "opacity")) ? "1" : t;
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          r,
          a,
          s = b(t),
          l = rt.test(t),
          c = e.style;
        if (
          (l || (t = it(s)), (a = E.cssHooks[t] || E.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : c[t];
        "string" == (r = typeof n) &&
          (o = ve.exec(n)) &&
          o[1] &&
          ((n = be(e, t, o)), (r = "number")),
          null != n &&
            n == n &&
            ("number" !== r ||
              l ||
              (n += (o && o[3]) || (E.cssNumber[s] ? "" : "px")),
            g.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (c[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, i))) ||
              (l ? c.setProperty(t, n) : (c[t] = n)));
      }
    },
    css: function (e, t, n, i) {
      var o,
        r = b(t);
      return (
        rt.test(t) || (t = it(r)),
        "normal" ===
          (o =
            void 0 ===
            (o =
              (r = E.cssHooks[t] || E.cssHooks[r]) && "get" in r
                ? r.get(e, !0, n)
                : o)
              ? Ke(e, t, i)
              : o) &&
          t in st &&
          (o = st[t]),
        ("" === n || n) && ((r = parseFloat(o)), !0 === n || isFinite(r))
          ? r || 0
          : o
      );
    },
  }),
    E.each(["height", "width"], function (e, a) {
      E.cssHooks[a] = {
        get: function (e, t, n) {
          if (t)
            return !ot.test(E.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? dt(e, a, n)
              : Oe(e, at, function () {
                  return dt(e, a, n);
                });
        },
        set: function (e, t, n) {
          var i = He(e),
            o = !g.scrollboxSize() && "absolute" === i.position,
            r = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i),
            n = n ? ct(e, a, n, r, i) : 0;
          return (
            r &&
              o &&
              (n -= Math.ceil(
                e["offset" + a[0].toUpperCase() + a.slice(1)] -
                  parseFloat(i[a]) -
                  ct(e, a, "border", !1, i) -
                  0.5
              )),
            n &&
              (r = ve.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[a] = t), (t = E.css(e, a))),
            lt(0, t, n)
          );
        },
      };
    }),
    (E.cssHooks.marginLeft = Xe(g.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Ke(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Oe(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    E.each({ margin: "", padding: "", border: "Width" }, function (o, r) {
      (E.cssHooks[o + r] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[o + h[t] + r] = i[t] || i[t - 2] || i[0];
          return n;
        },
      }),
        "margin" !== o && (E.cssHooks[o + r].set = lt);
    }),
    E.fn.extend({
      css: function (e, t) {
        return u(
          this,
          function (e, t, n) {
            var i,
              o,
              r = {},
              a = 0;
            if (Array.isArray(t)) {
              for (i = He(e), o = t.length; a < o; a++)
                r[t[a]] = E.css(e, t[a], !1, i);
              return r;
            }
            return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((E.Tween = r).prototype = {
      constructor: r,
      init: function (e, t, n, i, o, r) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = o || E.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = r || (E.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = r.propHooks[this.prop];
        return (e && e.get ? e : r.propHooks._default).get(this);
      },
      run: function (e) {
        var t,
          n = r.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                E.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          (n && n.set ? n : r.propHooks._default).set(this),
          this
        );
      },
    }).init.prototype = r.prototype),
    ((r.propHooks = {
      _default: {
        get: function (e) {
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (e = E.css(e.elem, e.prop, "")) && "auto" !== e
            ? e
            : 0;
        },
        set: function (e) {
          E.fx.step[e.prop]
            ? E.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!E.cssHooks[e.prop] && null == e.elem.style[it(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : E.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = r.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (E.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (E.fx = r.prototype.init),
    (E.fx.step = {});
  var $,
    ut,
    I,
    ht = /^(?:toggle|show|hide)$/,
    pt = /queueHooks$/;
  function ft() {
    ut &&
      (!1 === k.hidden && x.requestAnimationFrame
        ? x.requestAnimationFrame(ft)
        : x.setTimeout(ft, E.fx.interval),
      E.fx.tick());
  }
  function mt() {
    return (
      x.setTimeout(function () {
        $ = void 0;
      }),
      ($ = Date.now())
    );
  }
  function gt(e, t) {
    var n,
      i = 0,
      o = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      o["margin" + (n = h[i])] = o["padding" + n] = e;
    return t && (o.opacity = o.width = e), o;
  }
  function vt(e, t, n) {
    for (
      var i,
        o = (N.tweeners[t] || []).concat(N.tweeners["*"]),
        r = 0,
        a = o.length;
      r < a;
      r++
    )
      if ((i = o[r].call(n, t, e))) return i;
  }
  function N(o, e, t) {
    var n,
      r,
      i,
      a,
      s,
      l,
      c,
      d = 0,
      u = N.prefilters.length,
      h = E.Deferred().always(function () {
        delete p.elem;
      }),
      p = function () {
        if (r) return !1;
        for (
          var e = $ || mt(),
            e = Math.max(0, f.startTime + f.duration - e),
            t = 1 - (e / f.duration || 0),
            n = 0,
            i = f.tweens.length;
          n < i;
          n++
        )
          f.tweens[n].run(t);
        return (
          h.notifyWith(o, [f, t, e]),
          t < 1 && i
            ? e
            : (i || h.notifyWith(o, [f, 1, 0]), h.resolveWith(o, [f]), !1)
        );
      },
      f = h.promise({
        elem: o,
        props: E.extend({}, e),
        opts: E.extend(!0, { specialEasing: {}, easing: E.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: $ || mt(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          t = E.Tween(
            o,
            f.opts,
            e,
            t,
            f.opts.specialEasing[e] || f.opts.easing
          );
          return f.tweens.push(t), t;
        },
        stop: function (e) {
          var t = 0,
            n = e ? f.tweens.length : 0;
          if (!r) {
            for (r = !0; t < n; t++) f.tweens[t].run(1);
            e
              ? (h.notifyWith(o, [f, 1, 0]), h.resolveWith(o, [f, e]))
              : h.rejectWith(o, [f, e]);
          }
          return this;
        },
      }),
      m = f.props,
      g = m,
      v = f.opts.specialEasing;
    for (i in g)
      if (
        ((s = v[(a = b(i))]),
        (l = g[i]),
        Array.isArray(l) && ((s = l[1]), (l = g[i] = l[0])),
        i !== a && ((g[a] = l), delete g[i]),
        (c = E.cssHooks[a]) && "expand" in c)
      )
        for (i in ((l = c.expand(l)), delete g[a], l))
          i in g || ((g[i] = l[i]), (v[i] = s));
      else v[a] = s;
    for (; d < u; d++)
      if ((n = N.prefilters[d].call(f, o, m, f.opts)))
        return (
          y(n.stop) &&
            (E._queueHooks(f.elem, f.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      E.map(m, vt, f),
      y(f.opts.start) && f.opts.start.call(o, f),
      f
        .progress(f.opts.progress)
        .done(f.opts.done, f.opts.complete)
        .fail(f.opts.fail)
        .always(f.opts.always),
      E.fx.timer(E.extend(p, { elem: o, anim: f, queue: f.opts.queue })),
      f
    );
  }
  (E.Animation = E.extend(N, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return be(n.elem, e, ve.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      for (
        var n, i = 0, o = (e = y(e) ? ((t = e), ["*"]) : e.match(C)).length;
        i < o;
        i++
      )
        (n = e[i]),
          (N.tweeners[n] = N.tweeners[n] || []),
          N.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var i,
          o,
          r,
          a,
          s,
          l,
          c,
          d = "width" in t || "height" in t,
          u = this,
          h = {},
          p = e.style,
          f = e.nodeType && ge(e),
          m = w.get(e, "fxshow");
        for (i in (n.queue ||
          (null == (a = E._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          u.always(function () {
            u.always(function () {
              a.unqueued--, E.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((o = t[i]), ht.test(o))) {
            if (
              (delete t[i],
              (r = r || "toggle" === o),
              o === (f ? "hide" : "show"))
            ) {
              if ("show" !== o || !m || void 0 === m[i]) continue;
              f = !0;
            }
            h[i] = (m && m[i]) || E.style(e, i);
          }
        if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(h))
          for (i in (d &&
            1 === e.nodeType &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
            null == (c = m && m.display) && (c = w.get(e, "display")),
            "none" === (d = E.css(e, "display")) &&
              (c
                ? (d = c)
                : (S([e], !0),
                  (c = e.style.display || c),
                  (d = E.css(e, "display")),
                  S([e]))),
            "inline" === d || ("inline-block" === d && null != c)) &&
            "none" === E.css(e, "float") &&
            (l ||
              (u.done(function () {
                p.display = c;
              }),
              null == c && ((d = p.display), (c = "none" === d ? "" : d))),
            (p.display = "inline-block")),
          n.overflow &&
            ((p.overflow = "hidden"),
            u.always(function () {
              (p.overflow = n.overflow[0]),
                (p.overflowX = n.overflow[1]),
                (p.overflowY = n.overflow[2]);
            })),
          (l = !1),
          h))
            l ||
              (m
                ? "hidden" in m && (f = m.hidden)
                : (m = w.access(e, "fxshow", { display: c })),
              r && (m.hidden = !f),
              f && S([e], !0),
              u.done(function () {
                for (i in (f || S([e]), w.remove(e, "fxshow"), h))
                  E.style(e, i, h[i]);
              })),
              (l = vt(f ? m[i] : 0, i, u)),
              i in m ||
                ((m[i] = l.start), f && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? N.prefilters.unshift(e) : N.prefilters.push(e);
    },
  })),
    (E.speed = function (e, t, n) {
      var i =
        e && "object" == typeof e
          ? E.extend({}, e)
          : {
              complete: n || (!n && t) || (y(e) && e),
              duration: e,
              easing: (n && t) || (t && !y(t) && t),
            };
      return (
        E.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration in E.fx.speeds
              ? (i.duration = E.fx.speeds[i.duration])
              : (i.duration = E.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          y(i.old) && i.old.call(this), i.queue && E.dequeue(this, i.queue);
        }),
        i
      );
    }),
    E.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(ge)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (t, e, n, i) {
        function o() {
          var e = N(this, E.extend({}, t), a);
          (r || w.get(this, "finish")) && e.stop(!0);
        }
        var r = E.isEmptyObject(t),
          a = E.speed(e, n, i);
        return (
          (o.finish = o),
          r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
        );
      },
      stop: function (o, e, r) {
        function a(e) {
          var t = e.stop;
          delete e.stop, t(r);
        }
        return (
          "string" != typeof o && ((r = e), (e = o), (o = void 0)),
          e && this.queue(o || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != o && o + "queueHooks",
              n = E.timers,
              i = w.get(this);
            if (t) i[t] && i[t].stop && a(i[t]);
            else for (t in i) i[t] && i[t].stop && pt.test(t) && a(i[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != o && n[t].queue !== o) ||
                (n[t].anim.stop(r), (e = !1), n.splice(t, 1));
            (!e && r) || E.dequeue(this, o);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = w.get(this),
              n = t[a + "queue"],
              i = t[a + "queueHooks"],
              o = E.timers,
              r = n ? n.length : 0;
            for (
              t.finish = !0,
                E.queue(this, a, []),
                i && i.stop && i.stop.call(this, !0),
                e = o.length;
              e--;

            )
              o[e].elem === this &&
                o[e].queue === a &&
                (o[e].anim.stop(!0), o.splice(e, 1));
            for (e = 0; e < r; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    E.each(["toggle", "show", "hide"], function (e, i) {
      var o = E.fn[i];
      E.fn[i] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? o.apply(this, arguments)
          : this.animate(gt(i, !0), e, t, n);
      };
    }),
    E.each(
      {
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, i) {
        E.fn[e] = function (e, t, n) {
          return this.animate(i, e, t, n);
        };
      }
    ),
    (E.timers = []),
    (E.fx.tick = function () {
      var e,
        t = 0,
        n = E.timers;
      for ($ = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || E.fx.stop(), ($ = void 0);
    }),
    (E.fx.timer = function (e) {
      E.timers.push(e), E.fx.start();
    }),
    (E.fx.interval = 13),
    (E.fx.start = function () {
      ut || ((ut = !0), ft());
    }),
    (E.fx.stop = function () {
      ut = null;
    }),
    (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (E.fn.delay = function (i, e) {
      return (
        (i = (E.fx && E.fx.speeds[i]) || i),
        this.queue((e = e || "fx"), function (e, t) {
          var n = x.setTimeout(e, i);
          t.stop = function () {
            x.clearTimeout(n);
          };
        })
      );
    }),
    (I = k.createElement("input")),
    (n = k.createElement("select").appendChild(k.createElement("option"))),
    (I.type = "checkbox"),
    (g.checkOn = "" !== I.value),
    (g.optSelected = n.selected),
    ((I = k.createElement("input")).value = "t"),
    (I.type = "radio"),
    (g.radioValue = "t" === I.value);
  var yt,
    bt = E.expr.attrHandle,
    wt =
      (E.fn.extend({
        attr: function (e, t) {
          return u(this, E.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
          return this.each(function () {
            E.removeAttr(this, e);
          });
        },
      }),
      E.extend({
        attr: function (e, t, n) {
          var i,
            o,
            r = e.nodeType;
          if (3 !== r && 8 !== r && 2 !== r)
            return void 0 === e.getAttribute
              ? E.prop(e, t, n)
              : ((1 === r && E.isXMLDoc(e)) ||
                  (o =
                    E.attrHooks[t.toLowerCase()] ||
                    (E.expr.match.bool.test(t) ? yt : void 0)),
                void 0 !== n
                  ? null === n
                    ? void E.removeAttr(e, t)
                    : o && "set" in o && void 0 !== (i = o.set(e, n, t))
                    ? i
                    : (e.setAttribute(t, n + ""), n)
                  : !(o && "get" in o && null !== (i = o.get(e, t))) &&
                    null == (i = E.find.attr(e, t))
                  ? void 0
                  : i);
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              var n;
              if (!g.radioValue && "radio" === t && l(e, "input"))
                return (
                  (n = e.value),
                  e.setAttribute("type", t),
                  n && (e.value = n),
                  t
                );
            },
          },
        },
        removeAttr: function (e, t) {
          var n,
            i = 0,
            o = t && t.match(C);
          if (o && 1 === e.nodeType)
            for (; (n = o[i++]); ) e.removeAttribute(n);
        },
      }),
      (yt = {
        set: function (e, t, n) {
          return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = bt[t] || E.find.attr;
        bt[t] = function (e, t, n) {
          var i,
            o,
            r = t.toLowerCase();
          return (
            n ||
              ((o = bt[r]),
              (bt[r] = i),
              (i = null != a(e, t, n) ? r : null),
              (bt[r] = o)),
            i
          );
        };
      }),
      /^(?:input|select|textarea|button)$/i),
    Lt = /^(?:a|area)$/i;
  function M(e) {
    return (e.match(C) || []).join(" ");
  }
  function j(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function xt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(C)) || [];
  }
  E.fn.extend({
    prop: function (e, t) {
      return u(this, E.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[E.propFix[e] || e];
      });
    },
  }),
    E.extend({
      prop: function (e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return (
            (1 === r && E.isXMLDoc(e)) ||
              ((t = E.propFix[t] || t), (o = E.propHooks[t])),
            void 0 !== n
              ? o && "set" in o && void 0 !== (i = o.set(e, n, t))
                ? i
                : (e[t] = n)
              : o && "get" in o && null !== (i = o.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = E.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : wt.test(e.nodeName) || (Lt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    g.optSelected ||
      (E.propHooks.selected = {
        get: function (e) {
          e = e.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set: function (e) {
          e = e.parentNode;
          e && (e.selectedIndex, e.parentNode) && e.parentNode.selectedIndex;
        },
      }),
    E.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        E.propFix[this.toLowerCase()] = this;
      }
    ),
    E.fn.extend({
      addClass: function (t) {
        var e,
          n,
          i,
          o,
          r,
          a,
          s = 0;
        if (y(t))
          return this.each(function (e) {
            E(this).addClass(t.call(this, e, j(this)));
          });
        if ((e = xt(t)).length)
          for (; (n = this[s++]); )
            if (((a = j(n)), (i = 1 === n.nodeType && " " + M(a) + " "))) {
              for (r = 0; (o = e[r++]); )
                i.indexOf(" " + o + " ") < 0 && (i += o + " ");
              a !== (a = M(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          i,
          o,
          r,
          a,
          s = 0;
        if (y(t))
          return this.each(function (e) {
            E(this).removeClass(t.call(this, e, j(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = xt(t)).length)
          for (; (n = this[s++]); )
            if (((a = j(n)), (i = 1 === n.nodeType && " " + M(a) + " "))) {
              for (r = 0; (o = e[r++]); )
                for (; -1 < i.indexOf(" " + o + " "); )
                  i = i.replace(" " + o + " ", " ");
              a !== (a = M(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      toggleClass: function (o, t) {
        var r = typeof o,
          a = "string" == r || Array.isArray(o);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(o)
            : this.removeClass(o)
          : y(o)
          ? this.each(function (e) {
              E(this).toggleClass(o.call(this, e, j(this), t), t);
            })
          : this.each(function () {
              var e, t, n, i;
              if (a)
                for (t = 0, n = E(this), i = xt(o); (e = i[t++]); )
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              else
                (void 0 !== o && "boolean" != r) ||
                  ((e = j(this)) && w.set(this, "__className__", e),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      (!e && !1 !== o && w.get(this, "__className__")) || ""
                    ));
            });
      },
      hasClass: function (e) {
        for (var t, n = 0, i = " " + e + " "; (t = this[n++]); )
          if (1 === t.nodeType && -1 < (" " + M(j(t)) + " ").indexOf(i))
            return !0;
        return !1;
      },
    });
  function kt(e) {
    e.stopPropagation();
  }
  var Et = /\r/g,
    Ct =
      (E.fn.extend({
        val: function (t) {
          var n,
            e,
            i,
            o = this[0];
          return arguments.length
            ? ((i = y(t)),
              this.each(function (e) {
                1 === this.nodeType &&
                  (null == (e = i ? t.call(this, e, E(this).val()) : t)
                    ? (e = "")
                    : "number" == typeof e
                    ? (e += "")
                    : Array.isArray(e) &&
                      (e = E.map(e, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((n =
                    E.valHooks[this.type] ||
                    E.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in n &&
                    void 0 !== n.set(this, e, "value")) ||
                    (this.value = e));
              }))
            : o
            ? (n =
                E.valHooks[o.type] || E.valHooks[o.nodeName.toLowerCase()]) &&
              "get" in n &&
              void 0 !== (e = n.get(o, "value"))
              ? e
              : "string" == typeof (e = o.value)
              ? e.replace(Et, "")
              : null == e
              ? ""
              : e
            : void 0;
        },
      }),
      E.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = E.find.attr(e, "value");
              return null != t ? t : M(E.text(e));
            },
          },
          select: {
            get: function (e) {
              for (
                var t,
                  n = e.options,
                  i = e.selectedIndex,
                  o = "select-one" === e.type,
                  r = o ? null : [],
                  a = o ? i + 1 : n.length,
                  s = i < 0 ? a : o ? i : 0;
                s < a;
                s++
              )
                if (
                  ((t = n[s]).selected || s === i) &&
                  !t.disabled &&
                  (!t.parentNode.disabled || !l(t.parentNode, "optgroup"))
                ) {
                  if (((t = E(t).val()), o)) return t;
                  r.push(t);
                }
              return r;
            },
            set: function (e, t) {
              for (
                var n, i, o = e.options, r = E.makeArray(t), a = o.length;
                a--;

              )
                ((i = o[a]).selected =
                  -1 < E.inArray(E.valHooks.option.get(i), r)) && (n = !0);
              return n || (e.selectedIndex = -1), r;
            },
          },
        },
      }),
      E.each(["radio", "checkbox"], function () {
        (E.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t))
              return (e.checked = -1 < E.inArray(E(e).val(), t));
          },
        }),
          g.checkOn ||
            (E.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
      }),
      (g.focusin = "onfocusin" in x),
      /^(?:focusinfocus|focusoutblur)$/),
    Tt =
      (E.extend(E.event, {
        trigger: function (e, t, n, i) {
          var o,
            r,
            a,
            s,
            l,
            c,
            d,
            u = [n || k],
            h = F.call(e, "type") ? e.type : e,
            p = F.call(e, "namespace") ? e.namespace.split(".") : [],
            f = (d = r = n = n || k);
          if (
            3 !== n.nodeType &&
            8 !== n.nodeType &&
            !Ct.test(h + E.event.triggered) &&
            (-1 < h.indexOf(".") &&
              ((h = (p = h.split(".")).shift()), p.sort()),
            (s = h.indexOf(":") < 0 && "on" + h),
            ((e = e[E.expando]
              ? e
              : new E.Event(h, "object" == typeof e && e)).isTrigger = i
              ? 2
              : 3),
            (e.namespace = p.join(".")),
            (e.rnamespace = e.namespace
              ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = void 0),
            e.target || (e.target = n),
            (t = null == t ? [e] : E.makeArray(t, [e])),
            (c = E.event.special[h] || {}),
            i || !c.trigger || !1 !== c.trigger.apply(n, t))
          ) {
            if (!i && !c.noBubble && !m(n)) {
              for (
                a = c.delegateType || h, Ct.test(a + h) || (f = f.parentNode);
                f;
                f = f.parentNode
              )
                u.push(f), (r = f);
              r === (n.ownerDocument || k) &&
                u.push(r.defaultView || r.parentWindow || x);
            }
            for (o = 0; (f = u[o++]) && !e.isPropagationStopped(); )
              (d = f),
                (e.type = 1 < o ? a : c.bindType || h),
                (l =
                  (w.get(f, "events") || Object.create(null))[e.type] &&
                  w.get(f, "handle")) && l.apply(f, t),
                (l = s && f[s]) &&
                  l.apply &&
                  v(f) &&
                  ((e.result = l.apply(f, t)), !1 === e.result) &&
                  e.preventDefault();
            return (
              (e.type = h),
              i ||
                e.isDefaultPrevented() ||
                (c._default && !1 !== c._default.apply(u.pop(), t)) ||
                !v(n) ||
                (s &&
                  y(n[h]) &&
                  !m(n) &&
                  ((r = n[s]) && (n[s] = null),
                  (E.event.triggered = h),
                  e.isPropagationStopped() && d.addEventListener(h, kt),
                  n[h](),
                  e.isPropagationStopped() && d.removeEventListener(h, kt),
                  (E.event.triggered = void 0),
                  r) &&
                  (n[s] = r)),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          n = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });
          E.event.trigger(n, null, t);
        },
      }),
      E.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            E.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return E.event.trigger(e, t, n, !0);
        },
      }),
      g.focusin ||
        E.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
          function o(e) {
            E.event.simulate(i, e.target, E.event.fix(e));
          }
          E.event.special[i] = {
            setup: function () {
              var e = this.ownerDocument || this.document || this,
                t = w.access(e, i);
              t || e.addEventListener(n, o, !0), w.access(e, i, (t || 0) + 1);
            },
            teardown: function () {
              var e = this.ownerDocument || this.document || this,
                t = w.access(e, i) - 1;
              t
                ? w.access(e, i, t)
                : (e.removeEventListener(n, o, !0), w.remove(e, i));
            },
          };
        }),
      x.location),
    St = { guid: Date.now() },
    At = /\?/,
    Vt =
      ((E.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
          t = new x.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {}
        return (
          (n = t && t.getElementsByTagName("parsererror")[0]),
          (t && !n) ||
            E.error(
              "Invalid XML: " +
                (n
                  ? E.map(n.childNodes, function (e) {
                      return e.textContent;
                    }).join("\n")
                  : e)
            ),
          t
        );
      }),
      /\[\]$/),
    Dt = /\r?\n/g,
    $t = /^(?:submit|button|image|reset|file)$/i,
    It = /^(?:input|select|textarea|keygen)/i;
  (E.param = function (e, t) {
    function n(e, t) {
      (t = y(t) ? t() : t),
        (o[o.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t));
    }
    var i,
      o = [];
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
      E.each(e, function () {
        n(this.name, this.value);
      });
    else
      for (i in e)
        !(function n(i, e, o, r) {
          if (Array.isArray(e))
            E.each(e, function (e, t) {
              o || Vt.test(i)
                ? r(i, t)
                : n(
                    i +
                      "[" +
                      ("object" == typeof t && null != t ? e : "") +
                      "]",
                    t,
                    o,
                    r
                  );
            });
          else if (o || "object" !== f(e)) r(i, e);
          else for (var t in e) n(i + "[" + t + "]", e[t], o, r);
        })(i, e[i], t, n);
    return o.join("&");
  }),
    E.fn.extend({
      serialize: function () {
        return E.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = E.prop(this, "elements");
          return e ? E.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !E(this).is(":disabled") &&
              It.test(this.nodeName) &&
              !$t.test(e) &&
              (this.checked || !Le.test(e))
            );
          })
          .map(function (e, t) {
            var n = E(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? E.map(n, function (e) {
                  return { name: t.name, value: e.replace(Dt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Dt, "\r\n") };
          })
          .get();
      },
    });
  var Nt = /%20/g,
    Mt = /#.*$/,
    jt = /([?&])_=[^&]*/,
    qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Bt = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Ht = {},
    Ot = {},
    Wt = "*/".concat("*"),
    Rt = k.createElement("a");
  function Ft(r) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        i = 0,
        o = e.toLowerCase().match(C) || [];
      if (y(t))
        for (; (n = o[i++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (r[n] = r[n] || []).unshift(t))
            : (r[n] = r[n] || []).push(t);
    };
  }
  function zt(t, i, o, r) {
    var a = {},
      s = t === Ot;
    function l(e) {
      var n;
      return (
        (a[e] = !0),
        E.each(t[e] || [], function (e, t) {
          t = t(i, o, r);
          return "string" != typeof t || s || a[t]
            ? s
              ? !(n = t)
              : void 0
            : (i.dataTypes.unshift(t), l(t), !1);
        }),
        n
      );
    }
    return l(i.dataTypes[0]) || (!a["*"] && l("*"));
  }
  function _t(e, t) {
    var n,
      i,
      o = E.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : (i = i || {}))[n] = t[n]);
    return i && E.extend(!0, e, i), e;
  }
  (Rt.href = Tt.href),
    E.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Tt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Wt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": E.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? _t(_t(e, E.ajaxSettings), t) : _t(E.ajaxSettings, e);
      },
      ajaxPrefilter: Ft(Ht),
      ajaxTransport: Ft(Ot),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0));
        var l,
          c,
          d,
          n,
          u,
          h,
          p,
          i,
          o,
          f = E.ajaxSetup({}, (t = t || {})),
          m = f.context || f,
          g = f.context && (m.nodeType || m.jquery) ? E(m) : E.event,
          v = E.Deferred(),
          y = E.Callbacks("once memory"),
          b = f.statusCode || {},
          r = {},
          a = {},
          s = "canceled",
          w = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n)
                  for (n = {}; (t = qt.exec(d)); )
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? d : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = a[e.toLowerCase()] = a[e.toLowerCase()] || e),
                  (r[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (f.mimeType = e), this;
            },
            statusCode: function (e) {
              if (e)
                if (h) w.always(e[w.status]);
                else for (var t in e) b[t] = [b[t], e[t]];
              return this;
            },
            abort: function (e) {
              e = e || s;
              return l && l.abort(e), L(0, e), this;
            },
          };
        if (
          (v.promise(w),
          (f.url = ((e || f.url || Tt.href) + "").replace(
            Pt,
            Tt.protocol + "//"
          )),
          (f.type = t.method || t.type || f.method || f.type),
          (f.dataTypes = (f.dataType || "*").toLowerCase().match(C) || [""]),
          null == f.crossDomain)
        ) {
          o = k.createElement("a");
          try {
            (o.href = f.url),
              (o.href = o.href),
              (f.crossDomain =
                Rt.protocol + "//" + Rt.host != o.protocol + "//" + o.host);
          } catch (e) {
            f.crossDomain = !0;
          }
        }
        if (
          (f.data &&
            f.processData &&
            "string" != typeof f.data &&
            (f.data = E.param(f.data, f.traditional)),
          zt(Ht, f, t, w),
          !h)
        ) {
          for (i in ((p = E.event && f.global) &&
            0 == E.active++ &&
            E.event.trigger("ajaxStart"),
          (f.type = f.type.toUpperCase()),
          (f.hasContent = !Bt.test(f.type)),
          (c = f.url.replace(Mt, "")),
          f.hasContent
            ? f.data &&
              f.processData &&
              0 ===
                (f.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (f.data = f.data.replace(Nt, "+"))
            : ((o = f.url.slice(c.length)),
              f.data &&
                (f.processData || "string" == typeof f.data) &&
                ((c += (At.test(c) ? "&" : "?") + f.data), delete f.data),
              !1 === f.cache &&
                ((c = c.replace(jt, "$1")),
                (o = (At.test(c) ? "&" : "?") + "_=" + St.guid++ + o)),
              (f.url = c + o)),
          f.ifModified &&
            (E.lastModified[c] &&
              w.setRequestHeader("If-Modified-Since", E.lastModified[c]),
            E.etag[c]) &&
            w.setRequestHeader("If-None-Match", E.etag[c]),
          ((f.data && f.hasContent && !1 !== f.contentType) || t.contentType) &&
            w.setRequestHeader("Content-Type", f.contentType),
          w.setRequestHeader(
            "Accept",
            f.dataTypes[0] && f.accepts[f.dataTypes[0]]
              ? f.accepts[f.dataTypes[0]] +
                  ("*" !== f.dataTypes[0] ? ", " + Wt + "; q=0.01" : "")
              : f.accepts["*"]
          ),
          f.headers))
            w.setRequestHeader(i, f.headers[i]);
          if (f.beforeSend && (!1 === f.beforeSend.call(m, w, f) || h))
            return w.abort();
          if (
            ((s = "abort"),
            y.add(f.complete),
            w.done(f.success),
            w.fail(f.error),
            (l = zt(Ot, f, t, w)))
          ) {
            if (((w.readyState = 1), p && g.trigger("ajaxSend", [w, f]), h))
              return w;
            f.async &&
              0 < f.timeout &&
              (u = x.setTimeout(function () {
                w.abort("timeout");
              }, f.timeout));
            try {
              (h = !1), l.send(r, L);
            } catch (e) {
              if (h) throw e;
              L(-1, e);
            }
          } else L(-1, "No Transport");
        }
        return w;
        function L(e, t, n, i) {
          var o,
            r,
            a,
            s = t;
          h ||
            ((h = !0),
            u && x.clearTimeout(u),
            (l = void 0),
            (d = i || ""),
            (w.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (a = (function (e, t, n) {
                for (
                  var i, o, r, a, s = e.contents, l = e.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === i &&
                      (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                  for (o in s)
                    if (s[o] && s[o].test(i)) {
                      l.unshift(o);
                      break;
                    }
                if (l[0] in n) r = l[0];
                else {
                  for (o in n) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                      r = o;
                      break;
                    }
                    a = a || o;
                  }
                  r = r || a;
                }
                if (r) return r !== l[0] && l.unshift(r), n[r];
              })(f, w, n)),
            !i &&
              -1 < E.inArray("script", f.dataTypes) &&
              E.inArray("json", f.dataTypes) < 0 &&
              (f.converters["text script"] = function () {}),
            (a = (function (e, t, n, i) {
              var o,
                r,
                a,
                s,
                l,
                c = {},
                d = e.dataTypes.slice();
              if (d[1])
                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
              for (r = d.shift(); r; )
                if (
                  (e.responseFields[r] && (n[e.responseFields[r]] = t),
                  !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = r),
                  (r = d.shift()))
                )
                  if ("*" === r) r = l;
                  else if ("*" !== l && l !== r) {
                    if (!(a = c[l + " " + r] || c["* " + r]))
                      for (o in c)
                        if (
                          (s = o.split(" "))[1] === r &&
                          (a = c[l + " " + s[0]] || c["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = c[o])
                            : !0 !== c[o] && ((r = s[0]), d.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e.throws) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + l + " to " + r,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(f, a, w, i)),
            i
              ? (f.ifModified &&
                  ((n = w.getResponseHeader("Last-Modified")) &&
                    (E.lastModified[c] = n),
                  (n = w.getResponseHeader("etag"))) &&
                  (E.etag[c] = n),
                204 === e || "HEAD" === f.type
                  ? (s = "nocontent")
                  : 304 === e
                  ? (s = "notmodified")
                  : ((s = a.state), (o = a.data), (i = !(r = a.error))))
              : ((r = s), (!e && s) || ((s = "error"), e < 0 && (e = 0))),
            (w.status = e),
            (w.statusText = (t || s) + ""),
            i ? v.resolveWith(m, [o, s, w]) : v.rejectWith(m, [w, s, r]),
            w.statusCode(b),
            (b = void 0),
            p && g.trigger(i ? "ajaxSuccess" : "ajaxError", [w, f, i ? o : r]),
            y.fireWith(m, [w, s]),
            p &&
              (g.trigger("ajaxComplete", [w, f]),
              --E.active || E.event.trigger("ajaxStop")));
        }
      },
      getJSON: function (e, t, n) {
        return E.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return E.get(e, void 0, t, "script");
      },
    }),
    E.each(["get", "post"], function (e, o) {
      E[o] = function (e, t, n, i) {
        return (
          y(t) && ((i = i || n), (n = t), (t = void 0)),
          E.ajax(
            E.extend(
              { url: e, type: o, dataType: i, data: t, success: n },
              E.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    E.ajaxPrefilter(function (e) {
      for (var t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (E._evalUrl = function (e, t, n) {
      return E.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          E.globalEval(e, t, n);
        },
      });
    }),
    E.fn.extend({
      wrapAll: function (e) {
        return (
          this[0] &&
            (y(e) && (e = e.call(this[0])),
            (e = E(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return y(n)
          ? this.each(function (e) {
              E(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = E(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = y(t);
        return this.each(function (e) {
          E(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              E(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (E.expr.pseudos.hidden = function (e) {
      return !E.expr.pseudos.visible(e);
    }),
    (E.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (E.ajaxSettings.xhr = function () {
      try {
        return new x.XMLHttpRequest();
      } catch (e) {}
    });
  var Yt = { 0: 200, 1223: 204 },
    Ut = E.ajaxSettings.xhr();
  (g.cors = !!Ut && "withCredentials" in Ut),
    (g.ajax = Ut = !!Ut),
    E.ajaxTransport(function (o) {
      var r, a;
      if (g.cors || (Ut && !o.crossDomain))
        return {
          send: function (e, t) {
            var n,
              i = o.xhr();
            if (
              (i.open(o.type, o.url, o.async, o.username, o.password),
              o.xhrFields)
            )
              for (n in o.xhrFields) i[n] = o.xhrFields[n];
            for (n in (o.mimeType &&
              i.overrideMimeType &&
              i.overrideMimeType(o.mimeType),
            o.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              i.setRequestHeader(n, e[n]);
            (r = function (e) {
              return function () {
                r &&
                  ((r =
                    a =
                    i.onload =
                    i.onerror =
                    i.onabort =
                    i.ontimeout =
                    i.onreadystatechange =
                      null),
                  "abort" === e
                    ? i.abort()
                    : "error" === e
                    ? "number" != typeof i.status
                      ? t(0, "error")
                      : t(i.status, i.statusText)
                    : t(
                        Yt[i.status] || i.status,
                        i.statusText,
                        "text" !== (i.responseType || "text") ||
                          "string" != typeof i.responseText
                          ? { binary: i.response }
                          : { text: i.responseText },
                        i.getAllResponseHeaders()
                      ));
              };
            }),
              (i.onload = r()),
              (a = i.onerror = i.ontimeout = r("error")),
              void 0 !== i.onabort
                ? (i.onabort = a)
                : (i.onreadystatechange = function () {
                    4 === i.readyState &&
                      x.setTimeout(function () {
                        r && a();
                      });
                  }),
              (r = r("abort"));
            try {
              i.send((o.hasContent && o.data) || null);
            } catch (e) {
              if (r) throw e;
            }
          },
          abort: function () {
            r && r();
          },
        };
    }),
    E.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    E.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return E.globalEval(e), e;
        },
      },
    }),
    E.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    E.ajaxTransport("script", function (n) {
      var i, o;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (i = E("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (o = function (e) {
                  i.remove(),
                    (o = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              k.head.appendChild(i[0]);
          },
          abort: function () {
            o && o();
          },
        };
    });
  var Gt = [],
    Qt = /(=)\?(?=&|$)|\?\?/,
    Kt =
      (E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Gt.pop() || E.expando + "_" + St.guid++;
          return (this[e] = !0), e;
        },
      }),
      E.ajaxPrefilter("json jsonp", function (e, t, n) {
        var i,
          o,
          r,
          a =
            !1 !== e.jsonp &&
            (Qt.test(e.url)
              ? "url"
              : "string" == typeof e.data &&
                0 ===
                  (e.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                Qt.test(e.data) &&
                "data");
        if (a || "jsonp" === e.dataTypes[0])
          return (
            (i = e.jsonpCallback =
              y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
            a
              ? (e[a] = e[a].replace(Qt, "$1" + i))
              : !1 !== e.jsonp &&
                (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
            (e.converters["script json"] = function () {
              return r || E.error(i + " was not called"), r[0];
            }),
            (e.dataTypes[0] = "json"),
            (o = x[i]),
            (x[i] = function () {
              r = arguments;
            }),
            n.always(function () {
              void 0 === o ? E(x).removeProp(i) : (x[i] = o),
                e[i] && ((e.jsonpCallback = t.jsonpCallback), Gt.push(i)),
                r && y(o) && o(r[0]),
                (r = o = void 0);
            }),
            "script"
          );
      }),
      (g.createHTMLDocument =
        (((e = k.implementation.createHTMLDocument("").body).innerHTML =
          "<form></form><form></form>"),
        2 === e.childNodes.length)),
      (E.parseHTML = function (e, t, n) {
        return "string" != typeof e
          ? []
          : ("boolean" == typeof t && ((n = t), (t = !1)),
            t ||
              (g.createHTMLDocument
                ? (((i = (t =
                    k.implementation.createHTMLDocument("")).createElement(
                    "base"
                  )).href = k.location.href),
                  t.head.appendChild(i))
                : (t = k)),
            (i = !n && []),
            (n = X.exec(e))
              ? [t.createElement(n[1])]
              : ((n = Te([e], t, i)),
                i && i.length && E(i).remove(),
                E.merge([], n.childNodes)));
        var i;
      }),
      (E.fn.load = function (e, t, n) {
        var i,
          o,
          r,
          a = this,
          s = e.indexOf(" ");
        return (
          -1 < s && ((i = M(e.slice(s))), (e = e.slice(0, s))),
          y(t)
            ? ((n = t), (t = void 0))
            : t && "object" == typeof t && (o = "POST"),
          0 < a.length &&
            E.ajax({ url: e, type: o || "GET", dataType: "html", data: t })
              .done(function (e) {
                (r = arguments),
                  a.html(i ? E("<div>").append(E.parseHTML(e)).find(i) : e);
              })
              .always(
                n &&
                  function (e, t) {
                    a.each(function () {
                      n.apply(this, r || [e.responseText, t, e]);
                    });
                  }
              ),
          this
        );
      }),
      (E.expr.pseudos.animated = function (t) {
        return E.grep(E.timers, function (e) {
          return t === e.elem;
        }).length;
      }),
      (E.offset = {
        setOffset: function (e, t, n) {
          var i,
            o,
            r,
            a,
            s = E.css(e, "position"),
            l = E(e),
            c = {};
          "static" === s && (e.style.position = "relative"),
            (r = l.offset()),
            (i = E.css(e, "top")),
            (a = E.css(e, "left")),
            (s =
              ("absolute" === s || "fixed" === s) &&
              -1 < (i + a).indexOf("auto")
                ? ((o = (s = l.position()).top), s.left)
                : ((o = parseFloat(i) || 0), parseFloat(a) || 0)),
            null != (t = y(t) ? t.call(e, n, E.extend({}, r)) : t).top &&
              (c.top = t.top - r.top + o),
            null != t.left && (c.left = t.left - r.left + s),
            "using" in t ? t.using.call(e, c) : l.css(c);
        },
      }),
      E.fn.extend({
        offset: function (t) {
          var e, n;
          return arguments.length
            ? void 0 === t
              ? this
              : this.each(function (e) {
                  E.offset.setOffset(this, t, e);
                })
            : (n = this[0])
            ? n.getClientRects().length
              ? ((e = n.getBoundingClientRect()),
                (n = n.ownerDocument.defaultView),
                { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
              : { top: 0, left: 0 }
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n,
              i = this[0],
              o = { top: 0, left: 0 };
            if ("fixed" === E.css(i, "position")) t = i.getBoundingClientRect();
            else {
              for (
                t = this.offset(),
                  n = i.ownerDocument,
                  e = i.offsetParent || n.documentElement;
                e &&
                (e === n.body || e === n.documentElement) &&
                "static" === E.css(e, "position");

              )
                e = e.parentNode;
              e &&
                e !== i &&
                1 === e.nodeType &&
                (((o = E(e).offset()).top += E.css(e, "borderTopWidth", !0)),
                (o.left += E.css(e, "borderLeftWidth", !0)));
            }
            return {
              top: t.top - o.top - E.css(i, "marginTop", !0),
              left: t.left - o.left - E.css(i, "marginLeft", !0),
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent;
              e && "static" === E.css(e, "position");

            )
              e = e.offsetParent;
            return e || L;
          });
        },
      }),
      E.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (t, o) {
          var r = "pageYOffset" === o;
          E.fn[t] = function (e) {
            return u(
              this,
              function (e, t, n) {
                var i;
                if (
                  (m(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView),
                  void 0 === n)
                )
                  return i ? i[o] : e[t];
                i
                  ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset)
                  : (e[t] = n);
              },
              t,
              e,
              arguments.length
            );
          };
        }
      ),
      E.each(["top", "left"], function (e, n) {
        E.cssHooks[n] = Xe(g.pixelPosition, function (e, t) {
          if (t)
            return (t = Ke(e, n)), Ge.test(t) ? E(e).position()[n] + "px" : t;
        });
      }),
      E.each({ Height: "height", Width: "width" }, function (a, s) {
        E.each(
          { padding: "inner" + a, content: s, "": "outer" + a },
          function (i, r) {
            E.fn[r] = function (e, t) {
              var n = arguments.length && (i || "boolean" != typeof e),
                o = i || (!0 === e || !0 === t ? "margin" : "border");
              return u(
                this,
                function (e, t, n) {
                  var i;
                  return m(e)
                    ? 0 === r.indexOf("outer")
                      ? e["inner" + a]
                      : e.document.documentElement["client" + a]
                    : 9 === e.nodeType
                    ? ((i = e.documentElement),
                      Math.max(
                        e.body["scroll" + a],
                        i["scroll" + a],
                        e.body["offset" + a],
                        i["offset" + a],
                        i["client" + a]
                      ))
                    : void 0 === n
                    ? E.css(e, t, o)
                    : E.style(e, t, n, o);
                },
                s,
                n ? e : void 0,
                n
              );
            };
          }
        );
      }),
      E.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          E.fn[t] = function (e) {
            return this.on(t, e);
          };
        }
      ),
      E.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, i) {
          return this.on(t, e, n, i);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
      }),
      E.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, n) {
          E.fn[n] = function (e, t) {
            return 0 < arguments.length
              ? this.on(n, null, e, t)
              : this.trigger(n);
          };
        }
      ),
      /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g),
    Xt =
      ((E.proxy = function (e, t) {
        var n, i;
        if (("string" == typeof t && ((i = e[t]), (t = e), (e = i)), y(e)))
          return (
            (n = s.call(arguments, 2)),
            ((i = function () {
              return e.apply(t || this, n.concat(s.call(arguments)));
            }).guid = e.guid =
              e.guid || E.guid++),
            i
          );
      }),
      (E.holdReady = function (e) {
        e ? E.readyWait++ : E.ready(!0);
      }),
      (E.isArray = Array.isArray),
      (E.parseJSON = JSON.parse),
      (E.nodeName = l),
      (E.isFunction = y),
      (E.isWindow = m),
      (E.camelCase = b),
      (E.type = f),
      (E.now = Date.now),
      (E.isNumeric = function (e) {
        var t = E.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      }),
      (E.trim = function (e) {
        return null == e ? "" : (e + "").replace(Kt, "");
      }),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return E;
        }),
      x.jQuery),
    Jt = x.$;
  return (
    (E.noConflict = function (e) {
      return x.$ === E && (x.$ = Jt), e && x.jQuery === E && (x.jQuery = Xt), E;
    }),
    void 0 === q && (x.jQuery = x.$ = E),
    E
  );
}),
  (jQuery.ajaxSettings.traditional = !0);
var VL = VL || {};
function addSwipeEvent(e, i, o) {
  var r = 0,
    a = 0;
  e.addEventListener(
    "touchstart",
    function (e) {
      switch (i) {
        case 0:
          r = e.targetTouches[0].clientY;
          break;
        case 0:
          r = e.targetTouches[0].clientX;
          break;
        default:
          r = e.targetTouches[0].clientY;
      }
    },
    !1
  ),
    e.addEventListener(
      "mousedown",
      function (e) {
        switch (i) {
          case 0:
            r = e.clientY;
            break;
          case 0:
            r = e.clientX;
            break;
          default:
            r = e.clientY;
        }
      },
      !1
    ),
    e.addEventListener(
      "touchmove",
      function (e) {
        e.preventDefault();
      },
      !1
    ),
    e.addEventListener(
      "mousemove",
      function (e) {
        e.preventDefault();
      },
      !1
    ),
    e.addEventListener(
      "touchend",
      function (e) {
        switch (i) {
          case 0:
            a = e.changedTouches[0].clientY;
            break;
          case 0:
            a = e.changedTouches[0].clientX;
            break;
          default:
            a = e.changedTouches[0].clientY;
        }
        var t = a - r,
          n = Math.abs(t);
        t < 0 && 30 < n && "swipeUp" == i && o(),
          0 < t && 30 < n && "swipeDown" == i && o(),
          t < 0 && 30 < n && "swipeLeft" == i && o(),
          0 < t && 30 < n && "swipeRight" == i && o();
      },
      !1
    ),
    e.addEventListener(
      "mouseup",
      function (e) {
        switch (i) {
          case 0:
            a = e.clientY;
            break;
          case 0:
            a = e.clientX;
            break;
          default:
            a = e.clientY;
        }
        var t = a - r,
          n = Math.abs(t);
        t < 0 && 30 < n && "swipeUp" == i && o(),
          0 < t && 30 < n && "swipeDown" == i && o(),
          t < 0 && 30 < n && "swipeLeft" == i && o(),
          0 < t && 30 < n && "swipeRight" == i && o();
      },
      !1
    );
}
(VL.util = {}),
  (VL.ui = {}),
  (VL.lang = VL.lang || "en"),
  (VL.country = VL.country || "GB"),
  (VL.user = VL.user || { country: "GB", lang: "en", journey: "" }),
  (VL.CDN = VL.CDN || "https://cdn.londonandpartners.com"),
  (VL.extraCDNpath = ""),
  (VL.currentDate = VL.currentDate || new Date()),
  (VL.buildNumber = VL.buildNumber || VL.currentDate.getTime()),
  (VL.SitecoreTest = function () {
    return /^(qa|cms|local)|\-sc/.test(window.location.host);
  }),
  (VL.keys = {
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ESC: 27,
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    PAGEUP: 33,
    PAGEDOWN: 34,
  }),
  (VL.internalDomains =
    /(?:(?:(?:(?:[a-z0-9\-]+\.)*visitlondon)|(www\.)?vlstatic|(?:cdn|cms|files)\.londonandpartners))\.(?:com|local)/i),
  (VL.cdnDomains =
    /(?:((www\.)?vlstatic|(?:cdn|files)\.londonandpartners)\.com)|cdn\-lnp\.dataweavers\.io/i),
  (VL.whiteLabelDomains =
    /(?:tickets\.london|hotels\.london|booking\.com|londonpass\.com|visitbritainshop\.com|gttix\.com|visitlondon\.gttickets\.com|prf\.hn)/i),
  (VL.trackedWhiteLabelDomains = /(?:tickets\.london)/i),
  (VL.downloadSuffixes =
    /\.(zip|mp3|pdf|ppt|pptx|doc|docx|wmv|xls|xlsx|jpg|jpeg)(\?|\#|$)/i),
  (VL.trackedDownloadSuffixes = /\.pdf(\?|\#|$)/i),
  (window.log = function () {
    (log.history = log.history || []),
      log.history.push(arguments),
      this.console && console.log(Array.prototype.slice.call(arguments));
  }),
  (function (e) {
    "undefined" != typeof module && module.exports
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : (this.$script = e());
  })(function () {
    var c,
      o,
      r = document,
      a = r.getElementsByTagName("head")[0],
      s = !1,
      d = "push",
      l = "readyState",
      u = "onreadystatechange",
      h = {},
      p = {},
      f = {};
    function m(e, t) {
      for (var n = 0, i = e.length; n < i; ++n) if (!t(e[n])) return s;
      return 1;
    }
    function g(e, t) {
      m(e, function (e) {
        return t(e), 1;
      });
    }
    function v(e, t, n) {
      e = e[d] ? e : [e];
      var i = t && t.call,
        o = i ? t : n,
        r = i ? e.join("") : t,
        a = e.length;
      function s(e) {
        return e.call ? e() : h[e];
      }
      function l() {
        if (!--a)
          for (var e in ((h[r] = 1), o && o(), p))
            m(e.split("|"), s) && (g(p[e], s), (p[e] = []));
      }
      return (
        setTimeout(function () {
          g(e, function e(t, n) {
            return null === t
              ? l()
              : (n ||
                  /^https?:\/\//.test(t) ||
                  !c ||
                  (t = -1 === t.indexOf(".js") ? c + t + ".js" : c + t),
                f[t]
                  ? (r && (r, 0),
                    2 == f[t]
                      ? l()
                      : setTimeout(function () {
                          e(t, !0);
                        }, 0))
                  : ((f[t] = 1), r && (r, 0), void y(t, l)));
          });
        }, 0),
        v
      );
    }
    function y(e, t) {
      var n,
        i = r.createElement("script");
      (i.onload =
        i.onerror =
        i[u] =
          function () {
            (i[l] && !/^c|loade/.test(i[l])) ||
              n ||
              ((i.onload = i[u] = null), (n = 1), (f[e] = 2), t());
          }),
        (i.async = 1),
        (i.src = o ? e + (-1 === e.indexOf("?") ? "?" : "&") + o : e),
        a.insertBefore(i, a.lastChild);
    }
    return (
      (v.get = y),
      (v.order = function (n, i, o) {
        !(function e(t) {
          (t = n.shift()), n.length ? v(t, e) : v(t, i, o);
        })();
      }),
      (v.path = function (e) {
        c = e;
      }),
      (v.urlArgs = function (e) {
        o = e;
      }),
      (v.ready = function (e, t, n) {
        e = e[d] ? e : [e];
        var i = [];
        return (
          g(e, function (e) {
            h[e] || i[d](e);
          }),
          m(e, function (e) {
            return h[e];
          })
            ? t()
            : ((e = e.join("|")), (p[e] = p[e] || []), p[e][d](t), n && n(i)),
          v
        );
      }),
      (v.done = function (e) {
        v([null], e);
      }),
      v
    );
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "object" == typeof module && module.exports
      ? (module.exports = t(require("jquery")))
      : t(e.jQuery);
  })(this, function (e) {
    var o;
    ((o = e).fn.iframeTracker = function (e) {
      "function" == typeof e && (e = { blurCallback: e });
      var t = this.get();
      if (null === e || !1 === e) o.iframeTracker.untrack(t);
      else {
        if ("object" != typeof e)
          throw new Error(
            "Wrong handler type (must be an object, or null|false to untrack)"
          );
        o.iframeTracker.track(t, e);
      }
      return this;
    }),
      (o.iframeTracker = {
        focusRetriever: null,
        focusRetrieved: !1,
        handlersList: [],
        isIE8AndOlder: !1,
        init: function () {
          try {
            !0 === o.browser.msie &&
              o.browser.version < 9 &&
              (this.isIE8AndOlder = !0);
          } catch (e) {
            try {
              navigator.userAgent.match(/(msie) ([\w.]+)/i)[2] < 9 &&
                (this.isIE8AndOlder = !0);
            } catch (e) {}
          }
          if (
            (o(window).focus(),
            o(window).blur(function (e) {
              o.iframeTracker.windowLoseFocus(e);
            }),
            o("body").append(
              '<label style="position:fixed; top:0; left:0; overflow:hidden;"><span style="position: absolute;left:-300px;">Focus</span><input style="position:absolute; left:-300px;" type="text" value="" id="focus_retriever" readonly="true" /></label>'
            ),
            (this.focusRetriever = o("#focus_retriever")),
            (this.focusRetrieved = !1),
            this.isIE8AndOlder)
          ) {
            this.focusRetriever.blur(function (e) {
              e.stopPropagation(),
                e.preventDefault(),
                o.iframeTracker.windowLoseFocus(e);
            }),
              o("body").click(function (e) {
                o(window).focus();
              }),
              o("form").click(function (e) {
                e.stopPropagation();
              });
            try {
              o("body").on("click", "form", function (e) {
                e.stopPropagation();
              });
            } catch (e) {
              console.log(
                "[iframeTracker] Please update jQuery to 1.7 or newer. (exception: " +
                  e.message +
                  ")"
              );
            }
          }
        },
        track: function (e, t) {
          (t.target = e),
            o.iframeTracker.handlersList.push(t),
            o(e)
              .bind(
                "mouseover",
                { handler: t },
                o.iframeTracker.mouseoverListener
              )
              .bind(
                "mouseout",
                { handler: t },
                o.iframeTracker.mouseoutListener
              );
        },
        untrack: function (e) {
          if ("function" != typeof Array.prototype.filter)
            console.log(
              "Your browser doesn't support Array filter, untrack disabled"
            );
          else {
            o(e).each(function (e) {
              o(this)
                .unbind("mouseover", o.iframeTracker.mouseoverListener)
                .unbind("mouseout", o.iframeTracker.mouseoutListener);
            });
            function t(e) {
              return null !== e;
            }
            for (var n in this.handlersList) {
              for (var i in this.handlersList[n].target)
                -1 !== o.inArray(this.handlersList[n].target[i], e) &&
                  (this.handlersList[n].target[i] = null);
              (this.handlersList[n].target =
                this.handlersList[n].target.filter(t)),
                0 === this.handlersList[n].target.length &&
                  (this.handlersList[n] = null);
            }
            this.handlersList = this.handlersList.filter(t);
          }
        },
        mouseoverListener: function (e) {
          (e.data.handler.over = !0), o.iframeTracker.retrieveFocus();
          try {
            e.data.handler.overCallback(this, e);
          } catch (e) {}
        },
        mouseoutListener: function (e) {
          (e.data.handler.over = !1), o.iframeTracker.retrieveFocus();
          try {
            e.data.handler.outCallback(this, e);
          } catch (e) {}
        },
        retrieveFocus: function () {
          document.activeElement &&
            "IFRAME" === document.activeElement.tagName &&
            (o.iframeTracker.focusRetriever.focus(),
            (o.iframeTracker.focusRetrieved = !0));
        },
        windowLoseFocus: function (e) {
          for (var t in this.handlersList)
            if (!0 === this.handlersList[t].over)
              try {
                this.handlersList[t].blurCallback(e);
              } catch (e) {}
        },
      }),
      o(document).ready(function () {
        o.iframeTracker.init();
      });
  }),
  (function (t) {
    t.fn.randomize = function (e) {
      return (
        (e ? this.find(e) : this).parent().each(function () {
          t(this)
            .children(e)
            .sort(function () {
              return Math.random() - 0.5;
            })
            .detach()
            .appendTo(this);
        }),
        this
      );
    };
  })(jQuery),
  (function (a, t) {
    var n,
      i = a([]),
      o = (a.resize = a.extend(a.resize, {})),
      s = "setTimeout",
      r = "resize",
      l = r + "-special-event",
      c = "throttleWindow";
    (o.delay = 250),
      (o[c] = !0),
      (a.event.special[r] = {
        setup: function () {
          if (!o[c] && this[s]) return !1;
          var e = a(this);
          (i = i.add(e)),
            a.data(this, l, { w: e.width(), h: e.height() }),
            1 === i.length &&
              (function e() {
                n = t[s](function () {
                  i.each(function () {
                    var e = a(this),
                      t = e.width(),
                      n = e.height(),
                      i = a.data(this, l);
                    (t === i.w && n === i.h) ||
                      e.trigger(r, [(i.w = t), (i.h = n)]);
                  }),
                    e();
                }, o.delay);
              })();
        },
        teardown: function () {
          if (!o[c] && this[s]) return !1;
          var e = a(this);
          (i = i.not(e)), e.removeData(l), i.length || clearTimeout(n);
        },
        add: function (e) {
          var r;
          return (
            !(!o[c] && this[s]) &&
            (a.isFunction(e)
              ? ((r = e), t)
              : ((r = e.handler), void (e.handler = t)))
          );
          function t(e, t, n) {
            var i = a(this),
              o = a.data(this, l);
            (o.w = void 0 !== t ? t : i.width()),
              (o.h = void 0 !== n ? n : i.height()),
              r.apply(this, arguments);
          }
        },
      });
  })(jQuery, this),
  (function (c) {
    c.fn.rwdImageMaps = function () {
      var e = this;
      return (
        c(window)
          .resize(function () {
            e.each(function () {
              var t;
              void 0 !== c(this).attr("usemap") &&
                ((t = c(this)),
                c("<img />")
                  .on("load", function () {
                    var o = t.attr("width"),
                      r = t.attr("height"),
                      a =
                        ((o && r) ||
                          (((e = new Image()).src = t.attr("src")),
                          (o = o || e.width),
                          (r = r || e.height)),
                        t.width() / 100),
                      s = t.height() / 100,
                      e = t.attr("usemap").replace("#", ""),
                      l = "coords";
                    c('map[name="' + e + '"]')
                      .find("area")
                      .each(function () {
                        for (
                          var e = c(this),
                            t =
                              (e.data(l) || e.data(l, e.attr(l)),
                              e.data(l).split(",")),
                            n = new Array(t.length),
                            i = 0;
                          i < n.length;
                          ++i
                        )
                          n[i] =
                            i % 2 == 0
                              ? parseInt((t[i] / o) * 100 * a)
                              : parseInt((t[i] / r) * 100 * s);
                        e.attr(l, n.toString());
                      });
                  })
                  .attr("src", t.attr("src")));
            });
          })
          .trigger("resize"),
        this
      );
    };
  })(jQuery),
  (function (s) {
    "use strict";
    function e(e) {
      var e = s(e),
        t = s(":focus"),
        n = 0;
      1 === t.length && (t = e.index(t)) + 1 < e.length && (n = t + 1),
        e.eq(n).focus();
    }
    function t(e) {
      var e = s(e),
        t = s(":focus"),
        n = e.length - 1;
      1 === t.length && 0 < (t = e.index(t)) && (n = t - 1), e.eq(n).focus();
    }
    function i(e) {
      function t(e) {
        return (
          s.expr.filters.visible(e) &&
          !s(e)
            .parents()
            .addBack()
            .filter(function () {
              return "hidden" === s.css(this, "visibility");
            }).length
        );
      }
      var n,
        i,
        o,
        r = e.nodeName.toLowerCase(),
        a = !isNaN(s.attr(e, "tabindex"));
      return "area" === r
        ? ((i = (n = e.parentNode).name),
          !(
            !e.href ||
            !i ||
            "map" !== n.nodeName.toLowerCase() ||
            !(o = s("img[usemap=#" + i + "]")[0])
          ) && t(o))
        : (/input|select|textarea|button|object/.test(r)
            ? !e.disabled
            : ("a" === r && e.href) || a) && t(e);
    }
    (s.focusNext = function () {
      e(":focusable");
    }),
      (s.focusPrev = function () {
        t(":focusable");
      }),
      (s.tabNext = function () {
        e(":tabbable");
      }),
      (s.tabPrev = function () {
        t(":tabbable");
      }),
      s.extend(s.expr[":"], {
        data: s.expr.createPseudo
          ? s.expr.createPseudo(function (t) {
              return function (e) {
                return !!s.data(e, t);
              };
            })
          : function (e, t, n) {
              return !!s.data(e, n[3]);
            },
        focusable: function (e) {
          return i(e, isNaN(s.attr(e, "tabindex")));
        },
        tabbable: function (e) {
          var t = s.attr(e, "tabindex"),
            n = isNaN(t);
          return (n || 0 <= t) && i(e);
        },
      });
  })(jQuery),
  (function (e) {
    var t = e({});
    (e.subscribe = function () {
      t.on.apply(t, arguments);
    }),
      (e.unsubscribe = function () {
        t.off.apply(t, arguments);
      }),
      (e.publish = function () {
        t.trigger.apply(t, arguments);
      });
  })(jQuery),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("jquery")))
      : e(jQuery);
  })(function (d) {
    function e() {
      for (
        var e = u.scrollTop(),
          t = h.height(),
          n = t - f,
          i = n < e ? n - e : 0,
          o = 0,
          r = p.length;
        o < r;
        o++
      ) {
        var a,
          s,
          l = p[o],
          c = l.stickyWrapper.offset().top - l.topSpacing - i;
        l.stickyWrapper.css("height", l.stickyElement.outerHeight()),
          e <= c
            ? null !== l.currentTop &&
              (l.stickyElement.css({
                width: "",
                position: "",
                top: "",
                "z-index": "",
              }),
              l.stickyElement.parent().removeClass(l.className),
              l.stickyElement.trigger("sticky-end", [l]),
              (l.currentTop = null))
            : ((c =
                t -
                l.stickyElement.outerHeight() -
                l.topSpacing -
                l.bottomSpacing -
                e -
                i) < 0
                ? (c += l.topSpacing)
                : (c = l.topSpacing),
              l.currentTop !== c &&
                (l.getWidthFrom
                  ? ((padding =
                      l.stickyElement.innerWidth() - l.stickyElement.width()),
                    (a = d(l.getWidthFrom).width() - padding || null))
                  : l.widthFromWrapper && (a = l.stickyWrapper.width()),
                null == a && (a = l.stickyElement.width()),
                l.stickyElement
                  .css("width", a)
                  .css("position", "fixed")
                  .css("top", c)
                  .css("z-index", l.zIndex),
                l.stickyElement.parent().addClass(l.className),
                null === l.currentTop
                  ? l.stickyElement.trigger("sticky-start", [l])
                  : l.stickyElement.trigger("sticky-update", [l]),
                (l.currentTop === l.topSpacing && l.currentTop > c) ||
                (null === l.currentTop && c < l.topSpacing)
                  ? l.stickyElement.trigger("sticky-bottom-reached", [l])
                  : null !== l.currentTop &&
                    c === l.topSpacing &&
                    l.currentTop < c &&
                    l.stickyElement.trigger("sticky-bottom-unreached", [l]),
                (l.currentTop = c)),
              (s = l.stickyWrapper.parent()),
              l.stickyElement.offset().top + l.stickyElement.outerHeight() >=
                s.offset().top + s.outerHeight() &&
              l.stickyElement.offset().top <= l.topSpacing
                ? l.stickyElement
                    .css("position", "absolute")
                    .css("top", "")
                    .css("bottom", 0)
                    .css("z-index", "")
                : l.stickyElement
                    .css("position", "fixed")
                    .css("top", c)
                    .css("bottom", "")
                    .css("z-index", l.zIndex));
      }
    }
    function t() {
      f = u.height();
      for (var e = 0, t = p.length; e < t; e++) {
        var n = p[e],
          i = null;
        n.getWidthFrom
          ? n.responsiveWidth && (i = d(n.getWidthFrom).width())
          : n.widthFromWrapper && (i = n.stickyWrapper.width()),
          null != i && n.stickyElement.css("width", i);
      }
    }
    var n = Array.prototype.slice,
      i = Array.prototype.splice,
      a = {
        topSpacing: 0,
        bottomSpacing: 0,
        className: "is-sticky",
        wrapperClassName: "sticky-wrapper",
        center: !1,
        getWidthFrom: "",
        widthFromWrapper: !0,
        responsiveWidth: !1,
        zIndex: "inherit",
      },
      u = d(window),
      h = d(document),
      p = [],
      f = u.height(),
      s = {
        init: function (r) {
          return this.each(function () {
            var e = d.extend({}, a, r),
              t = d(this),
              n = t.attr("id"),
              i = n ? n + "-" + a.wrapperClassName : a.wrapperClassName,
              o = d("<div></div>").attr("id", i).addClass(e.wrapperClassName),
              n =
                (t.wrapAll(function () {
                  if (0 == d(this).parent("#" + i).length) return o;
                }),
                t.parent());
            e.center &&
              n.css({
                width: t.outerWidth(),
                marginLeft: "auto",
                marginRight: "auto",
              }),
              "right" === t.css("float") &&
                t.css({ float: "none" }).parent().css({ float: "right" }),
              (e.stickyElement = t),
              (e.stickyWrapper = n),
              (e.currentTop = null),
              p.push(e),
              s.setWrapperHeight(this),
              s.setupChangeListeners(this);
          });
        },
        setWrapperHeight: function (e) {
          var e = d(e),
            t = e.parent();
          t && t.css("height", e.outerHeight());
        },
        setupChangeListeners: function (t) {
          window.MutationObserver
            ? new window.MutationObserver(function (e) {
                (e[0].addedNodes.length || e[0].removedNodes.length) &&
                  s.setWrapperHeight(t);
              }).observe(t, { subtree: !0, childList: !0 })
            : window.addEventListener
            ? (t.addEventListener(
                "DOMNodeInserted",
                function () {
                  s.setWrapperHeight(t);
                },
                !1
              ),
              t.addEventListener(
                "DOMNodeRemoved",
                function () {
                  s.setWrapperHeight(t);
                },
                !1
              ))
            : window.attachEvent &&
              (t.attachEvent("onDOMNodeInserted", function () {
                s.setWrapperHeight(t);
              }),
              t.attachEvent("onDOMNodeRemoved", function () {
                s.setWrapperHeight(t);
              }));
        },
        update: e,
        unstick: function (e) {
          return this.each(function () {
            for (var e = d(this), t = -1, n = p.length; 0 < n--; )
              p[n].stickyElement.get(0) === this && (i.call(p, n, 1), (t = n));
            -1 !== t &&
              (e.unwrap(),
              e.css({
                width: "",
                position: "",
                top: "",
                float: "",
                "z-index": "",
              }));
          });
        },
      };
    window.addEventListener
      ? (window.addEventListener("scroll", e, !1),
        window.addEventListener("resize", t, !1))
      : window.attachEvent &&
        (window.attachEvent("onscroll", e), window.attachEvent("onresize", t)),
      (d.fn.sticky = function (e) {
        return s[e]
          ? s[e].apply(this, n.call(arguments, 1))
          : "object" != typeof e && e
          ? void d.error("Method " + e + " does not exist on jQuery.sticky")
          : s.init.apply(this, arguments);
      }),
      (d.fn.unstick = function (e) {
        return s[e]
          ? s[e].apply(this, n.call(arguments, 1))
          : "object" != typeof e && e
          ? void d.error("Method " + e + " does not exist on jQuery.sticky")
          : s.unstick.apply(this, arguments);
      }),
      d(function () {
        setTimeout(e, 0);
      });
  }),
  (function (e) {
    var t, n;
    "function" == typeof define && define.amd
      ? define(e)
      : "object" == typeof exports
      ? (module.exports = e())
      : ((t = window.Cookies),
        ((n = window.Cookies = e()).noConflict = function () {
          return (window.Cookies = t), n;
        }));
  })(function () {
    function p() {
      for (var e = 0, t = {}; e < arguments.length; e++) {
        var n,
          i = arguments[e];
        for (n in i) t[n] = i[n];
      }
      return t;
    }
    return (function e(u) {
      function h(e, t, n) {
        var i, o;
        if ("undefined" != typeof document) {
          if (1 < arguments.length) {
            "number" == typeof (n = p({ path: "/" }, h.defaults, n)).expires &&
              ((o = new Date()).setMilliseconds(
                o.getMilliseconds() + 864e5 * n.expires
              ),
              (n.expires = o));
            try {
              (i = JSON.stringify(t)), /^[\{\[]/.test(i) && (t = i);
            } catch (e) {}
            return (
              (t = u.write
                ? u.write(t, e)
                : encodeURIComponent(String(t)).replace(
                    /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                    decodeURIComponent
                  )),
              (e = (e = (e = encodeURIComponent(String(e))).replace(
                /%(23|24|26|2B|5E|60|7C)/g,
                decodeURIComponent
              )).replace(/[\(\)]/g, escape)),
              (document.cookie = [
                e,
                "=",
                t,
                n.expires && "; expires=" + n.expires.toUTCString(),
                n.path && "; path=" + n.path,
                n.domain && "; domain=" + n.domain,
                n.secure ? "; secure" : "",
              ].join(""))
            );
          }
          e || (i = {});
          for (
            var r = document.cookie ? document.cookie.split("; ") : [],
              a = /(%[0-9A-Z]{2})+/g,
              s = 0;
            s < r.length;
            s++
          ) {
            var l = r[s].split("=");
            '"' === (d = l.slice(1).join("=")).charAt(0) &&
              (d = d.slice(1, -1));
            try {
              var c = l[0].replace(a, decodeURIComponent),
                d = u.read
                  ? u.read(d, c)
                  : u(d, c) || d.replace(a, decodeURIComponent);
              if (this.json)
                try {
                  d = JSON.parse(d);
                } catch (e) {}
              if (e === c) {
                i = d;
                break;
              }
              e || (i[c] = d);
            } catch (e) {}
          }
          return i;
        }
      }
      return (
        ((h.set = h).get = function (e) {
          return h(e);
        }),
        (h.getJSON = function () {
          return h.apply({ json: !0 }, [].slice.call(arguments));
        }),
        (h.defaults = {}),
        (h.remove = function (e, t) {
          h(e, "", p(t, { expires: -1 }));
        }),
        (h.withConverter = e),
        h
      );
    })(function () {});
  });
class LiteYTEmbed extends HTMLElement {
  connectedCallback() {
    this.videoId = this.getAttribute("videoid");
    let e = this.querySelector(".lty-playbtn");
    var t;
    (this.playLabel =
      (e && e.textContent.trim()) || this.getAttribute("playlabel") || "Play"),
      this.style.backgroundImage ||
        (this.style.backgroundImage = `url("https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg")`),
      e ||
        (((e = document.createElement("button")).type = "button"),
        e.classList.add("lty-playbtn"),
        this.append(e)),
      e.textContent ||
        (((t = document.createElement("span")).className =
          "lyt-visually-hidden"),
        (t.textContent = this.playLabel),
        e.append(t)),
      e.removeAttribute("href"),
      this.addEventListener("pointerover", LiteYTEmbed.warmConnections, {
        once: !0,
      }),
      this.addEventListener("click", this.addIframe),
      (this.needsYTApiForAutoplay =
        navigator.vendor.includes("Apple") ||
        navigator.userAgent.includes("Mobi"));
  }
  static addPrefetch(e, t, n) {
    var i = document.createElement("link");
    (i.rel = e), (i.href = t), n && (i.as = n), document.head.append(i);
  }
  static warmConnections() {
    LiteYTEmbed.preconnected ||
      (LiteYTEmbed.addPrefetch(
        "preconnect",
        "https://www.youtube-nocookie.com"
      ),
      LiteYTEmbed.addPrefetch("preconnect", "https://www.google.com"),
      LiteYTEmbed.addPrefetch(
        "preconnect",
        "https://googleads.g.doubleclick.net"
      ),
      LiteYTEmbed.addPrefetch("preconnect", "https://static.doubleclick.net"),
      (LiteYTEmbed.preconnected = !0));
  }
  fetchYTPlayerApi() {
    window.YT ||
      (window.YT && window.YT.Player) ||
      (this.ytApiPromise = new Promise((t, e) => {
        var n = document.createElement("script");
        (n.src = "https://www.youtube.com/iframe_api"),
          (n.async = !0),
          (n.onload = (e) => {
            YT.ready(t);
          }),
          (n.onerror = e),
          this.append(n);
      }));
  }
  async addYTPlayerIframe(e) {
    this.fetchYTPlayerApi(), await this.ytApiPromise;
    var t = document.createElement("div"),
      e = (this.append(t), Object.fromEntries(e.entries()));
    new YT.Player(t, {
      width: "100%",
      videoId: this.videoId,
      playerVars: e,
      events: {
        onReady: (e) => {
          e.target.playVideo();
        },
      },
    });
  }
  async addIframe() {
    if (!this.classList.contains("lyt-activated")) {
      this.classList.add("lyt-activated");
      var e = new URLSearchParams(this.getAttribute("params") || []);
      if (
        (e.append("autoplay", "1"),
        e.append("playsinline", "1"),
        this.needsYTApiForAutoplay)
      )
        return this.addYTPlayerIframe(e);
      var t = document.createElement("iframe");
      (t.width = 560),
        (t.height = 315),
        (t.title = this.playLabel),
        (t.allow =
          "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),
        (t.allowFullscreen = !0),
        (t.src =
          `https://www.youtube-nocookie.com/embed/${encodeURIComponent(
            this.videoId
          )}?` + e.toString()),
        this.append(t),
        t.focus();
    }
  }
}
customElements.define("lite-youtube", LiteYTEmbed),
  (window.Modernizr = (function (e, d) {
    function t(e) {
      a.cssText = e;
    }
    function n(e, t, n, i) {
      var o,
        r,
        a,
        s = d.createElement("div"),
        l = d.body,
        c = l || d.createElement("body");
      if (parseInt(n, 10))
        for (; n--; )
          ((r = d.createElement("div")).id = i ? i[n] : h + (n + 1)),
            s.appendChild(r);
      return (
        (o = ["&#173;", '<style id="s', h, '">', e, "</style>"].join("")),
        (s.id = h),
        ((l ? s : c).innerHTML += o),
        c.appendChild(s),
        l ||
          ((c.style.background = ""),
          (c.style.overflow = "hidden"),
          (a = u.style.overflow),
          (u.style.overflow = "hidden"),
          u.appendChild(c)),
        (o = t(s, e)),
        l
          ? s.parentNode.removeChild(s)
          : (c.parentNode.removeChild(c), (u.style.overflow = a)),
        !!o
      );
    }
    var i,
      o,
      r = {},
      u = d.documentElement,
      h = "modernizr",
      a = d.createElement(h).style,
      s = " -webkit- -moz- -o- -ms- ".split(" "),
      l = {},
      c = [],
      p = c.slice,
      f = {}.hasOwnProperty,
      m =
        void 0 !== f && void 0 !== f.call
          ? function (e, t) {
              return f.call(e, t);
            }
          : function (e, t) {
              return t in e && void 0 === e.constructor.prototype[t];
            };
    for (o in (Function.prototype.bind ||
      (Function.prototype.bind = function (n) {
        var i = this;
        if ("function" != typeof i) throw new TypeError();
        var o = p.call(arguments, 1),
          r = function () {
            var e, t;
            return this instanceof r
              ? (((e = function () {}).prototype = i.prototype),
                (e = new e()),
                (t = i.apply(e, o.concat(p.call(arguments)))),
                Object(t) === t ? t : e)
              : i.apply(n, o.concat(p.call(arguments)));
          };
        return r;
      }),
    (l.touch = function () {
      var t;
      return (
        "ontouchstart" in e || (e.DocumentTouch && d instanceof DocumentTouch)
          ? (t = !0)
          : n(
              [
                "@media (",
                s.join("touch-enabled),("),
                h,
                ")",
                "{#modernizr{top:9px;position:absolute}}",
              ].join(""),
              function (e) {
                t = 9 === e.offsetTop;
              }
            ),
        t
      );
    }),
    (l.geolocation = function () {
      return "geolocation" in navigator;
    }),
    l))
      m(l, o) &&
        ((i = o.toLowerCase()),
        (r[i] = l[o]()),
        c.push((r[i] ? "" : "no-") + i));
    return (
      (r.addTest = function (e, t) {
        if ("object" == typeof e)
          for (var n in e) m(e, n) && r.addTest(n, e[n]);
        else {
          if (((e = e.toLowerCase()), void 0 !== r[e])) return r;
          (t = "function" == typeof t ? t() : t),
            "undefined" != typeof enableClasses &&
              enableClasses &&
              (u.className += " " + (t ? "" : "no-") + e),
            (r[e] = t);
        }
        return r;
      }),
      t(""),
      0,
      (r._version = "2.8.3"),
      (r._prefixes = s),
      (r.testStyles = n),
      r
    );
  })(this, this.document)),
  (String.prototype.vlHtmlEscape = function () {
    return $("<div/>").text(this.toString()).html();
  }),
  (VL.util.shiftOrCtrl = !1),
  $(document).on("keydown", function (e) {
    (e.which != VL.keys.SHIFT && e.which != VL.keys.CTRL) ||
      (VL.util.shiftOrCtrl = !0);
  }),
  $(document).on("keyup", function () {
    VL.util.shiftOrCtrl = !1;
  }),
  window.addEventListener(
    "touchstart",
    function e() {
      (VL.util.touchEvent = !0),
        window.removeEventListener("touchstart", e, { passive: !0 });
    },
    !1
  ),
  window.addEventListener(
    "mouseover",
    function e() {
      (VL.util.hoverEvent = !0),
        window.removeEventListener("mouseover", e, { passive: !0 });
    },
    !1
  ),
  (VL.util.isNumber = function (e) {
    return "number" == typeof e && isFinite(e);
  }),
  (VL.util.formatInt = function (e) {
    return isNaN(e) ? "" : e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }),
  (VL.util.parseBreaks = function (e) {
    return e.replace(/[\r\n]+/g, "</p><p>");
  }),
  (VL.util.isElement = function (e) {
    return e instanceof Element || e instanceof HTMLDocument;
  }),
  (VL.util.queryParam = function (e, t) {
    t = t || window.location;
    e = new RegExp("[\\?&#]" + e + "=([^&#]*)").exec(t);
    if (null !== e) return unescape(e[1]);
  }),
  (VL.util.addQueryParam = function (e, t, n) {
    return (n = n || window.location).includes("?")
      ? n + "&" + e + "=" + t
      : n + "?" + e + "=" + t;
  }),
  (VL.util.executeFunctionByName = function (e, t) {
    for (
      var n = Array.prototype.slice.call(arguments, 2),
        i = e.split("."),
        o = i.pop(),
        r = 0;
      r < i.length;
      r++
    )
      t = t[i[r]];
    return t[o].apply(t, n);
  }),
  (VL.util.testBrowser = {
    html5Video: function () {
      return !!document.createElement("video").canPlayType;
    },
    html5VideoMP4: function () {
      return (
        !!this.html5Video() &&
        document
          .createElement("video")
          .canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')
      );
    },
    html5VideoOgg: function () {
      return (
        !!this.html5Video() &&
        document
          .createElement("video")
          .canPlayType('video/ogg; codecs="theora, vorbis"')
      );
    },
    html5VideoWebm: function () {
      return (
        !!this.html5Video() &&
        document
          .createElement("video")
          .canPlayType('video/webm; codecs="vp8, vorbis"')
      );
    },
    iOS: function () {
      var e = navigator.userAgent.toLowerCase();
      return (
        -1 < e.indexOf("ipad") ||
        -1 < e.indexOf("iphone") ||
        -1 < e.indexOf("ipod")
      );
    },
    touchEnabled: function () {
      return Modernizr.touch;
    },
    svg: function () {
      return (
        document.createElementNS &&
        document.createElementNS("https://www.w3.org/2000/svg", "svg")
          .createSVGRect
      );
    },
    cssFeature: function (e) {
      var t = (document.body || document.documentElement).style,
        n = ["Moz", "Webkit", "Khtml", "O", "ms"];
      if ("string" == typeof t[(i = e)]) return !0;
      for (
        var i = i.charAt(0).toUpperCase() + i.substr(1), o = 0, r = n.length;
        o < r;
        o++
      )
        if ("string" == typeof t[n[o] + i]) return !0;
      return !1;
    },
    historyAPI: function () {
      return !(!window.history || !history.pushState);
    },
  }),
  (VL.util.quickLoad = function (e, t, n) {
    var i;
    document.getElementById(t) ||
      (((i = document.createElement("script")).id = t),
      (i.async = n),
      (i.src = e),
      (t = document.getElementsByTagName("script")[0]).parentNode.insertBefore(
        i,
        t
      ));
  }),
  (VL.util.quickLoadCSS = function (e) {
    var t = document.createElement("link"),
      e =
        ((t.href = e),
        (t.rel = "stylesheet"),
        (t.media = "screen"),
        document.getElementsByTagName("link")[0]);
    e.parentNode.insertBefore(t, e);
  }),
  (VL.ui.datepickerLoad = {
    init: function () {
      $(".datebox, .datebox-mob").length && VL.ui.datepickerLoad.setup();
    },
    setup: function () {
      VL.util.quickLoad(
        VL.CDN + "/visit/js/jqui-datepicker." + VL.buildNumber + ".js",
        "jquidatepicker",
        !0
      );
    },
  }),
  (VL.window = {
    size: 1,
    sizeLabels: ["", "Mobile", "Tablet", "Desktop"],
    resize: function () {
      var e = $(window).width(),
        t = VL.window.size,
        n = VL.window.size;
      e < 755 && 1 < n
        ? (3 < $(".slideshow-menu li").length &&
            !1 === VL.ui.slideshow.carouselified &&
            VL.ui.slideshow.carouselify(),
          $(".header").length
            ? $("#lang-container").appendTo("#menu .mobile-nav")
            : $("#lang-container").prependTo("#menu"),
          (t = 1))
        : 754 < e && e < 1020 && 2 !== n && (t = 2),
        754 < e &&
          1 === n &&
          ($("#lang-container").appendTo("#header"),
          $(".header-search").appendTo("#header"),
          $(".secondary-nav-1 .sub, .lang-drop-down")
            .css("display", "")
            .css("min-height", ""),
          $(".mobile-hidden-video").doYouTube(),
          $(".header-search-submit i")
            .removeClass("icon-search-white-outline")
            .addClass("icon-search-red-outline"),
          $(".header")
            .removeClass("show-mobile-nav")
            .removeClass("show-mobile-search")),
        1019 < e && n < 3 && (t = 3),
        ((3 === n && 3 !== t) || (3 !== n && 3 === t)) &&
          VL.searchRefine.filterPosition(),
        VL.loadImages.setup(),
        (VL.window.size = t),
        VL.ui.overlay.sizeOverlay(),
        VL.ui.overlay.sizeOverlayContents();
    },
  });
var sitecore_preview = VL.util.queryParam("sc_site");
function onYouTubeIframeAPIReady() {
  var e = VL.stats.trackYouTube;
  e.setup();
  for (var t = 0; t < e.videoArray.length; t++)
    e.playerArray[t] = new YT.Player(e.videoArray[t], {
      events: { onStateChange: e.change },
    });
}
sitecore_preview &&
  $('a[href^="/"]').attr("href", function (e, t) {
    return VL.util.addQueryParam("sc_site", sitecore_preview, t);
  }),
  (VL.stats = {}),
  (VL.stats.checkExternalDomain = function (e) {
    var t = document.domain,
      n = VL.internalDomains,
      i = e.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i),
      i = i && i[1];
    return (
      null !== e && -1 == e.indexOf(t) && null !== n && null !== i && !n.test(i)
    );
  }),
  (VL.stats.checkWhiteLabelDomain = function (e) {
    var t = VL.whiteLabelDomains,
      n = e.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i),
      n = n && n[1];
    return !(null === e || null === t || null === n || !t.test(n));
  }),
  (VL.stats.checkCrossSiteTracking = function (e) {
    var t = VL.trackedWhiteLabelDomains,
      n = e.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i),
      n = n && n[1];
    return !(null === e || null === t || null === n || !t.test(n));
  }),
  (VL.stats.trackLinks = function () {
    $("body").on("mousedown", "a", function (e) {
      var t,
        n = $(this),
        i = this.href,
        o = i.match(/[^?#]+/i) || i,
        r = i,
        a = {},
        s = !1;
      n.hasClass("trackanchor") &&
        ((t = "Page Anchors"), (r = n.attr("data-ga-anchor"))),
        VL.downloadSuffixes.test(o) &&
          ((s = !0), VL.cdnDomains.test(o)) &&
          VL.trackedDownloadSuffixes.test(o) &&
          $.publish("linkClickDownloadInternalTracked"),
        (VL.stats.checkExternalDomain(i) || n.is("[data-ga-link]")) &&
          n.is(":not(.slideshow-menu a, .gallery-menu a, .launch-video)") &&
          ((s = !0),
          n.is("[data-ga-link]")
            ? (t = n.attr("data-ga-link"))
            : VL.stats.checkWhiteLabelDomain(i)
            ? ((t = "White Label Link"),
              n.parents(".main-nav").length &&
                ((t = "White Label Menu Link"), n.parents(".snippet").length) &&
                (t = "White Label Menu Promo"))
            : (t = "External"),
          VL.stats.checkWhiteLabelDomain(i)
            ? $.publish("linkClickWhiteLabel", ["Links", t, r, a])
            : $.publish("linkClickExternal", ["Links", t, r, a]),
          n.hasClass("btn")) &&
          (VL.stats.checkCrossSiteTracking(i)
            ? $.publish("linkClickPageView", [
                "/book-now/tickets-london-button",
                "Book Now - Tickets.London",
              ])
            : VL.stats.checkWhiteLabelDomain(i)
            ? $.publish("linkClickPageView", [
                "/book-now/white-label-button",
                "Book Now - Affiliate",
              ])
            : $.publish("linkClickPageView", [
                "/book-now/external",
                "Book Now - External",
              ])),
        !0 === s &&
          1 === e.which &&
          !VL.util.shiftOrCtrl &&
          n.is(":not([target])") &&
          ((o = e.currentTarget.parentElement.parentElement),
          e.currentTarget.hasAttribute("no-mousedown") ||
            (o && o.getAttribute("drag-scrolling")) ||
            (e.preventDefault(),
            setTimeout(function () {
              location.href = e.target.href || $(e.target).parents("a")[0].href;
            }, 150)));
    });
  }),
  (VL.stats.trackForms = function () {
    $("form").on("submit", function (e) {
      var t = $(this),
        n = this.action,
        i = n + "?" + $(this).serialize();
      VL.stats.checkExternalDomain(n) &&
        ((t = t.is("[data-ga-link]")
          ? t.attr("data-ga-link")
          : whiteLabel.test(n)
          ? "White Label Form"
          : "External Form"),
        VL.stats.checkWhiteLabelDomain(n)
          ? $.publish("linkClickWhiteLabel", ["Links", t, i])
          : $.publish("linkClickExternal", ["Links", t, i]));
    });
  }),
  (VL.stats.trackIframes = function () {
    $(".iframetrack iframe").iframeTracker({
      blurCallback: function () {
        $.publish("customEvent", [
          "Actions",
          "Iframe interaction",
          this._overId,
        ]);
      },
      overCallback: function (e) {
        this._overId = $(e).parents(".iframetrack").attr("data-ga-track");
      },
      outCallback: function (e) {
        this._overId = null;
      },
      _overId: null,
    });
  }),
  (VL.stats.trackYouTube = {
    videoArray: [],
    playerArray: [],
    videoPlaying: !1,
    youTubeRegex:
      /h?t?t?p?s?\:?\/\/www\.youtube\.com\/embed\/([\w-]{11})(?:\?.*)?/,
    setup: function () {
      var e,
        t,
        n = 0,
        i = VL.stats.trackYouTube;
      $("iframe").each(function () {
        (e = $(this)),
          (t = void 0 === e.attr("src") ? "" : e.attr("src")),
          (t = t.match(i.youTubeRegex)) &&
            1 < t.length &&
            ((i.videoArray[n] = t[1]), e.attr("id", t[1]), n++);
      });
    },
    add: function (e) {
      var t = VL.stats.trackYouTube,
        n = void 0 === e.attr("src") ? "" : e.attr("src"),
        n = n.match(t.youTubeRegex);
      n &&
        1 < n.length &&
        (t.videoArray.push(n[1]),
        e.attr("id", n[1]),
        t.playerArray.push(
          new YT.Player(n[1], { events: { onStateChange: t.change } })
        ));
    },
    change: function (e) {
      var t = e.target.getIframe().id,
        n = VL.stats.trackYouTube;
      e.data != YT.PlayerState.PLAYING ||
        n.videoPlaying ||
        ((n.videoPlaying = !0), $.publish("videoPlay", ["Video", "Play", t])),
        e.data == YT.PlayerState.ENDED &&
          $.publish("videoEnded", ["Video", "Play", t]);
    },
  }),
  (function () {
    "use strict";
    (VL.stats = VL.stats || {}),
      (VL.stats.ga = {}),
      (VL.stats.ga.sendEvent = function (e, t, n, i) {
        e &&
          t &&
          n &&
          void 0 !== gtag &&
          gtag("event", t, { event_category: e, event_label: n });
      }),
      (VL.stats.ga.sendPageView = function (e, t) {
        e &&
          void 0 !== gtag &&
          gtag("event", "page_view", { page_title: t, page_location: e });
      }),
      $.subscribe("linkClickPageView", function (e, t, n) {
        VL.stats.ga.sendPageView(t, n);
      });
  })(),
  (function () {
    "use strict";
    function e(t) {
      return function (e) {
        VL.stats.sitecore.postData(t);
      };
    }
    (VL.stats = VL.stats || {}),
      (VL.stats.sitecore = {}),
      (VL.stats.sitecore.postData = function (e) {
        e = JSON.stringify({ configuration: e });
        jQuery.ajax({
          type: "POST",
          url: "/london/api/Tracking/TriggerGoal",
          data: JSON.stringify(e),
          contentType: "application/json; charset=utf-8",
          success: function (e) {},
        });
      }),
      $("body").one("click", ".map, .area-results-map", function () {
        VL.stats.sitecore.postData("Analytics.GoalsTracking.Goals.GoogleMaps");
      }),
      $.subscribe("videoPlay", e("Analytics.GoalsTracking.Goals.VideoView")),
      $.subscribe(
        "accordionOpen",
        e("Analytics.GoalsTracking.Goals.ProductAccordion")
      ),
      $.subscribe(
        "linkClickWhiteLabel",
        e("Analytics.GoalsTracking.Goals.Whitelabel")
      ),
      $.subscribe(
        "linkClickExternal",
        e("Analytics.GoalsTracking.Goals.ExternalSite")
      ),
      $.subscribe(
        "linkClickDownloadInternalTracked",
        e("Analytics.GoalsTracking.Goals.PDFDownload")
      );
  })(),
  $(document).ready(function (i) {
    i(".vl-article-toplist") &&
      document
        .querySelectorAll('script[type="application/ld+json"]')
        .forEach(function (e) {
          var t,
            n = JSON.parse(e.innerText);
          "Article" == n["@type"] &&
            ((t = [n.image.url]),
            n.image.url && t.push(n.image.url),
            i("figure.tile img").each(function () {
              i(this).attr("src") && t.push(i(this).attr("src"));
            }),
            (n.image = t),
            (e.innerText = JSON.stringify(n)));
        });
  }),
  jQuery(document).ready(function (o) {
    var e = o(window).width(),
      e =
        ((VL.window.size = e < 755 ? 1 : e < 1020 ? 2 : 3),
        VL.ui.tabs.setup(o(".tabbedPanels")),
        VL.ui.tabs.setup(o(".search-grid")),
        VL.ui.accordion.setup(o(".accordion")),
        VL.ui.datepickerLoad.init(),
        VL.searchRefine.init(),
        o(".accordion-standalone .acc-label").click(function () {
          o(this).next(".tab-content").slideToggle();
        }),
        VL.util.testBrowser.cssFeature("transition") ||
          (o(".intro-block .spotlight a p").addClass("no-trans"),
          o(".intro-block .spotlight a").hover(
            function () {
              o(this).find("p").animate({ maxHeight: "100px" }, 200);
            },
            function () {
              o(this).find("p").animate({ maxHeight: "0" }, 200);
            }
          )),
        o(".vlSnPanel3Col .columns3").each(function () {
          var e = o(this);
          e.children(".snippet").length == e.children(".lp-310-panel").length &&
            e.addClass("shrink200");
        }),
        window.innerWidth < 755 &&
          (o("#lang-container").appendTo(".megamenu-nav"),
          o(".megamenu-nav").length || o("#lang-container").prependTo("#menu")),
        o("#lang-trigger2").click(function (e) {
          var t = o(".lang-picker-menu, .lang-switcher-menu");
          t.is(":visible")
            ? (t.slideUp(200), o("#lang-trigger2").removeClass("active"))
            : (t.slideDown(200),
              o("#lang-trigger2").addClass("active"),
              (t = o(".currency-switcher-menu")) &&
                (t.slideUp(1), o("#currency-trigger").removeClass("active")));
        }),
        o(".lang-switcher-close").click(function (e) {
          o(".lang-switcher-menu").slideUp(200),
            o("#lang-trigger2").removeClass("active");
        }),
        o("#currency-trigger").click(function (e) {
          var t = o(".currency-switcher-menu");
          t.is(":visible")
            ? (t.slideUp(200), o("#currency-trigger").removeClass("active"))
            : (t.slideDown(200),
              o("#currency-trigger").addClass("active"),
              (t = o(".lang-picker-menu, .lang-switcher-menu")) &&
                (t.slideUp(1), o("#lang-trigger2").removeClass("active")));
        }),
        o(".currency-switcher-close").click(function (e) {
          o(".currency-switcher-menu").slideUp(200),
            o("#currency-trigger").removeClass("active");
        }),
        o("a[href]")
          .not("a[target]")
          .filter(function () {
            return VL.stats.checkExternalDomain(o(this).attr("href"));
          })
          .attr("title", function () {
            var e = o(this).attr("title");
            return e && 0 < e.length
              ? e + " (" + VL.copy.newWindow + ")"
              : VL.copy.newWindow;
          })
          .attr("target", "_blank")
          .attr("rel", function () {
            var e = o(this).attr("rel");
            return e && 0 < e.length
              ? e.includes("noopener")
                ? e
                : e + " noopener"
              : "noopener";
          }),
        o("a")
          .filter(function () {
            return VL.downloadSuffixes.test(o(this).attr("href"));
          })
          .attr("title", function () {
            var e = o(this).attr("title");
            return e && 0 < e.length
              ? e + " (" + VL.copy.newWindow + ")"
              : VL.copy.newWindow;
          })
          .attr("target", "_blank"),
        VL.stats.trackLinks(),
        VL.stats.trackForms(),
        VL.stats.trackIframes(),
        o(".skip-link, .skip-links a").on("click", function (e) {
          e.preventDefault(),
            o(o(this).attr("href")).attr("tabIndex", -1).focus();
        }),
        o("#show-search-options").on("click", function (e) {
          e.preventDefault(),
            o(".search-n-r").toggleClass("expanded"),
            o(".search-n-r").hasClass("expanded")
              ? o("#show-search-options")
                  .html(VL.copy.hideSearch)
                  .addClass("hide-adv-search")
              : o("#show-search-options")
                  .html(VL.copy.showSearch)
                  .removeClass("hide-adv-search");
        }),
        o("#searchreorder").length && VL.searchReorder.initSelect(),
        o(".lottie").length &&
          (VL.util.queryParam("_nohack") ||
            o(".lottie").each(function () {
              o(this).attr("src") &&
                o(this).attr(
                  "src",
                  o(this)
                    .attr("src")
                    .replace("cdn-lnp.dataweavers.io", "www.visitlondon.com")
                );
            }),
          VL.util.quickLoad(
            "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
            "lottie-library",
            !0
          )),
        VL.util.testBrowser.cssFeature("appearance") &&
          o("body").addClass("css--appearance"),
        o(".search-strip-header").on("click", function (e) {
          e.preventDefault(),
            o(this)
              .parent(".search-strip")
              .toggleClass("search-strip-expanded");
        }),
        VL.loadImages.setup(),
        o(".embed-instagram")
          .removeClass("embed-instagram")
          .addClass("embed-instagram-loading"),
        (o.fn.isInViewport = function () {
          var e = o(this).offset().top,
            t = e + o(this).outerHeight(),
            n = o(window).scrollTop(),
            i = n + o(window).height();
          return n < t && e < i;
        }),
        o(window).on("resize scroll", function () {
          o(".embed-instagram-loading").each(function () {
            o(this).attr("class");
            o(this).isInViewport() &&
              o(this)
                .addClass("embed-instagram")
                .removeClass("embed-instagram-loading");
          });
        }),
        o(".slideshow-menu li a").on("focus", function (e) {
          o(".slideshow-menu li a").attr("tabIndex", "");
        }),
        o(".vlSnCallout640 .readmore, .callout.h174 .readmore").each(
          function () {
            o(this).appendTo(o(this).siblings("p:last"));
          }
        ),
        o("#menu")),
      t = o(".header"),
      n = e.length ? e.offset().top : 0;
    function i() {
      let e = 0;
      var t = document.querySelector("header.header"),
        t =
          (t &&
            (t = (t = t.getBoundingClientRect()).y + t.height) > e &&
            (e = t),
          document.querySelector(".header .nav-menu-container")),
        t =
          (t &&
            window.matchMedia("(min-width: 755px)").matches &&
            (t = (t = t.getBoundingClientRect()).y + t.height) > e &&
            (e = t),
          document.querySelector("iframe#scWebEditRibbon")),
        t =
          (t && t.offsetHeight > e && (e = t.offsetHeight),
          window.cssHeaderHeight != e &&
            (document.documentElement.style.setProperty(
              "--header-height",
              e + "px"
            ),
            (window.cssHeaderHeight = e),
            window.dispatchEvent(new Event("resize"))),
          document.querySelector("div.breadcrumb"));
      (e = t ? t.offsetHeight : 0),
        window.cssBreadcrumbHeight != e &&
          (document.documentElement.style.setProperty(
            "--breadcrumb-height",
            e + "px"
          ),
          (window.cssBreadcrumbHeight = e));
    }
    o(".sticky-nav-init")[0] || o("body").addClass("sticky-nav-init"),
      767 < o(window).width() &&
        o(window).scroll(function () {
          var e = o(window).scrollTop();
          n < e
            ? t.addClass("sticky-nav--stick")
            : t.removeClass("sticky-nav--stick");
        }),
      o(".delayed-iframe").each(function () {
        var e = o(this),
          t = o("<iframe>").attr(e.data());
        e.replaceWith(t);
      }),
      o(".reg-login-static, .comp-entry").length &&
        VL.util.quickLoad(
          VL.CDN + "/visit/js/jq-validation." + VL.buildNumber + ".js",
          "jqvalidation",
          !0
        ),
      o("#category-expand").on("click", function (e) {
        e.preventDefault(), o(this).remove();
      }),
      o("#category-icons-expand").on("click", function (e) {
        e.preventDefault(), o(this).addClass("opened");
      }),
      o("#category-icons-compact").on("click", function (e) {
        e.preventDefault(),
          o("#category-icons-expand").removeClass("opened"),
          this.parentElement.scrollIntoView({ block: "center" });
      }),
      o(".fireplace-wrapper").length ||
        o(".advert-skyscraper").length ||
        o("body").removeClass("takeover"),
      o("#expand-search").on("click", function (e) {
        e.preventDefault(),
          o(".header-search-submit i").toggleClass(
            "icon-search-red-outline icon-search-white-outline"
          ),
          o(".header")
            .removeClass("show-mobile-nav")
            .toggleClass("show-mobile-search"),
          o(".header-search .search-field:visible").focus();
      }),
      o(".banner-tcslink, .close-disclaimer").on("click", function (e) {
        e.preventDefault(), o("#banner-disclaimer").toggleClass("show");
      }),
      o("img[usemap]").rwdImageMaps(),
      o("body").on("resize", function () {
        VL.window.resize();
      }),
      o(".lp-snippets .tile").length &&
        !o(".mm-container").length &&
        (o(".lp-snippets .tile").wrapAll('<div class="mm-container"></div>'),
        o(".lp-snippets .tile")
          .slice(0, 5)
          .wrapAll('<div class="cf row row-odd"></div>'),
        o(".lp-snippets .tile")
          .slice(5, 9)
          .wrapAll('<div class="cf row row-sponsor row-even"></div>'),
        o(".lp-snippets .tile")
          .slice(9)
          .wrapAll('<div class="cf row row-odd"></div>'),
        o(".lp-snippets .tile h3").html(function () {
          return o(this).html().replace("Win", "<strong>Win</strong>");
        })),
      0 < o(".newsletter-cta a[href]").length &&
        o(".newsletter-cta a").attr("href").match("/register") &&
        o(".newsletter-cta a").click(function (e) {
          e.preventDefault();
        }),
      o(".bridges-home")[0] &&
        o(".home")[0] &&
        (o(".hero-section h1").insertBefore(o(".home .gr:first-child")),
        o(".hero-usp").insertAfter(".content h1")),
      (window.cssHeaderHeight = 0),
      (window.cssBreadcrumbHeight = 0),
      window.addEventListener("resize", () => i()),
      window.addEventListener("scroll", () => i()),
      i(),
      o(window).scroll(function () {
        o(".embed-instagram").length &&
          VL.util.quickLoad(
            "//platform.instagram.com/en_US/embeds.js",
            "instajs",
            !0
          );
      }),
      o(".map-toplist .map-static").length &&
        (o(".map-toplist .map-static .overlay").remove(),
        o(".map-toplist .map-static")
          .addClass("map")
          .removeClass("map-static")),
      o(".map ~ .map-lists").length && VL.map.load("VL.map.setup"),
      (o(".map").not(".tab-content .map").length ||
        o(".map + .map-venues > div[data-venueid]").length) &&
        o(".map").not("#map .map").length &&
        VL.map.load("VL.map.setup"),
      o("#gmap-results").not(".tab-content #gmap-results").length &&
        o("li[data-ll]").length &&
        VL.map.load("VL.map.makeResultsMap");
  }),
  $(document).ready(function () {
    String.prototype.endsWith ||
      (String.prototype.endsWith = function (e, t) {
        return (
          (void 0 === t || t > this.length) && (t = this.length),
          this.substring(t - e.length, t) === e
        );
      }),
      window.location.pathname.endsWith("lets-do-london") &&
        $("body").addClass("lets-do-london"),
      $(".standfirst .intro:empty").remove(),
      $(".vlSnCallout640 .callout-booking .price").each(function () {
        $(this).find("a").remove(),
          $(this).html(
            $(this)
              .html()
              .replace(/[\(\)]/g, "")
          );
      }),
      $(".lp-310-panel, .tile").each(function () {
        0 === $(this).find("img").length &&
          0 === $(this).text().trim().length &&
          $(this).remove();
      }),
      "undefined" == typeof slots && $(".advert-search-grid").remove(),
      $('.article-body img[title][title!=""]')
        .not(
          ".hero, figure img, .callout-image-container-200 img, .OUTBRAIN img, .currency-widget img"
        )
        .each(function () {
          var e = $(this),
            t = e.attr("title");
          e.wrap('<figure class="inline-figure"></figure>')
            .after('<figcaption class="image-caption">' + t + "</figcation>")
            .removeAttr("title");
        }),
      $(".row-of-2-container:not(:has(.panel:first h2))").addClass(
        "realign-advert-heading"
      ),
      $(".with-price > span:first-child").html(
        $(".with-price > span:first-child").html()?.split("(")[0]
      );
    var e = $(".with-price > span:first-child");
    /[£\s]+0\.00/.test(e.text()) && e.remove(),
      $(".product-keyinfo dd:has(a[href^=http])").prev("dt").remove(),
      $(".product-keyinfo dd:has(a[href^=http])").remove(),
      window.location.pathname.includes("39545651") &&
        "Christmas" === $("h1").text().trim() &&
        ($("h1").text("Christmas at Kew"),
        $("title").text(
          $("title").text().replace("Christmas - ", "Christmas at Kew - ")
        ));
  }),
  $(document).ready(function (n) {
    var e = n(".article-body, .product-body .description")
        .find(
          'a[href*="visitbritainshop.com"],a[href*="booking.com"],a[href*="hotels.london"],a[href*="prf.hn"],a[href*="gttix.com"],a[href*="gttickets.com"],a[href*="londonpass.com"]'
        )
        .not(function () {
          var e = n(this).text().trim();
          return e.endsWith("*") || !e.length;
        })
        .not(":has(img)"),
      t = n("<div/>");
    t.addClass("affiliate-text"),
      t.text(VL.copy.affiliateMessage),
      n.each(e, function (e, t) {
        (n(t).has("span") ? n(t).find("span") : n(t)).append(" *");
      }),
      e &&
        !n(".affiliate-text") &&
        (n("#about").before(t), n(".standfirst").append(t));
  }),
  (function () {
    VL.ui.animatedStatistics = {
      setup: function () {
        VL.ui.animatedStatistics.getPixelSize(o, i, a),
          window.addEventListener(
            "scroll",
            VL.ui.animatedStatistics.animatedScrollHandler
          ),
          window.addEventListener(
            "load",
            VL.ui.animatedStatistics.animatedOnloadHandler
          );
      },
      isInViewport: function (e) {
        var e = e.getBoundingClientRect(),
          t = document.documentElement;
        return (
          0 <= e.top &&
          0 <= e.left &&
          e.bottom <= (window.innerHeight || t.clientHeight) &&
          e.right <= (window.innerWidth || t.clientWidth)
        );
      },
      countUpAnimation: function (e, t, n) {
        var i = Math.floor(t);
        (e += Math.ceil(i / 100)),
          (n.innerHTML = new Intl.NumberFormat("en-GB").format(e)),
          e < i
            ? requestAnimationFrame(function () {
                VL.ui.animatedStatistics.countUpAnimation(e, t, n);
              })
            : (n.innerHTML = new Intl.NumberFormat("en-GB").format(t));
      },
      getAnimatedElementValue: function (e, t) {
        t = e.getAttribute(t);
        VL.ui.animatedStatistics.countUpAnimation(0, t, e),
          (e.dataset.animation = !0),
          r--;
      },
      getPixelSize: function (e, t, n) {
        var i,
          o = e
            .map(function (e) {
              return e.getAttribute(t).length;
            })
            .reduce(function (e, t) {
              return e < t ? t : e;
            });
        n < o &&
          ((i = VL.ui.animatedStatistics.pixelsCalc(o, n)),
          e.forEach(function (e) {
            VL.ui.animatedStatistics.setPixels(e.parentNode, i);
          }));
      },
      pixelsCalc: function (e, t) {
        return Math.floor(100 / ((e * t) / 10));
      },
      setPixels: function (e, t) {
        e.style.fontSize = t + "px";
      },
      triggerAnimation: function (e, t, n) {
        e.filter(function (e) {
          return VL.ui.animatedStatistics.isInViewport(e) && !e.hasAttribute(t);
        }).forEach(function (e) {
          VL.ui.animatedStatistics.getAnimatedElementValue(e, n);
        });
      },
      animatedScrollHandler: function () {
        e && clearTimeout(e),
          (e = setTimeout(function () {
            VL.ui.animatedStatistics.triggerAnimation(o, n, i);
          }, 100)),
          VL.ui.animatedStatistics.clearAnimationEvents();
      },
      animatedOnloadHandler: function () {
        VL.ui.animatedStatistics.triggerAnimation(o, n, i),
          VL.ui.animatedStatistics.clearAnimationEvents();
      },
      clearAnimationEvents: function () {
        r ||
          (window.removeEventListener(
            "load",
            VL.ui.animatedStatistics.animatedOnloadHandler
          ),
          window.removeEventListener(
            "scroll",
            VL.ui.animatedStatistics.animatedScrollHandler
          ));
      },
    };
    var e,
      t = Array.prototype.slice.call(
        document.querySelectorAll(".statistic-number")
      ),
      n = "data-animation",
      i = "data-animated-number",
      o = t.filter((e) => !isNaN(e.getAttribute(i))),
      t = t.filter((e) => isNaN(e.getAttribute(i))),
      r = o.length,
      a = 3;
    t.length &&
      (VL.ui.animatedStatistics.getPixelSize(t, i, a),
      t.forEach(function (e) {
        e.innerHTML = e.getAttribute(i);
      })),
      o.length && VL.ui.animatedStatistics.setup();
  })(jQuery);
class ImageGallery {
  constructor(e) {
    let n = e.dataset.sized;
    for (
      this.imageList = [],
        this.sourceElems = Array.from(e.querySelectorAll("ul.gallery-menu a")),
        this.sourceElems.forEach(
          function (e) {
            var t = {};
            (t.url = e.getAttribute("href")),
              (t.mobileUrl = e.dataset.mobileurl || t.url),
              (t.width = parseInt(e.dataset.width) || (n ? 640 : 960)),
              (t.height = parseInt(e.dataset.height) || (9 * t.width) / 16),
              (t.title =
                e.firstElementChild.dataset.title ||
                e.firstElementChild.getAttribute("title")),
              (t.thumbUrl = e.firstElementChild.getAttribute("src")),
              (t.purpose = e.dataset.purpose),
              t.purpose ||
                (t.url.includes("youtube.com/")
                  ? (t.purpose = "video")
                  : (t.purpose = "image")),
              "video" == t.purpose &&
                ((t.videoId = e.dataset.youtubeid || t.url.split("=")[1]),
                (t.thumbUrl = e.dataset.youtubethumb || t.thumbUrl),
                (t.start = e.dataset.youtubestart),
                (t.end = e.dataset.youtubeend),
                (t.cc = e.dataset.youtubecc),
                (t.autoplay = e.dataset.youtubeautoplay)),
              this.imageList.push(t);
          }.bind(this)
        );
      e.firstChild;

    )
      e.removeChild(e.lastChild);
    for (let e = this.imageList.length - 1; 0 < e; e--)
      this.imageList[e].url == this.imageList[0].url &&
        this.imageList.splice(e, 1);
    new ImageGalleryController(e, this.imageList);
  }
}
class ImageGalleryController {
  constructor(e, t) {
    (this.rootElem = e),
      (this.imageList = t),
      (this.components = []),
      (this.currentIndex = 0);
    e.dataset.modal &&
      new ImageGalleryModal({
        rootElem: null,
        creator: this,
        navKeyboard: !0,
        closeBelowWidth: 1020,
      });
    var t = e.dataset.skippyId,
      t =
        (t &&
          (t = document.getElementById(t)) &&
          new ImageGalleryController(t, this.imageList.slice(1)),
        e.dataset.slippyId),
      t =
        (t &&
          (t = document.getElementById(t)) &&
          new ImageGallerySlippy({
            rootElem: t,
            creator: this,
            navButtons: !0,
            navKeyboard: !0,
          }),
        e.dataset.flippyId),
      t =
        (t &&
          (t = document.getElementById(t)) &&
          new ImageGalleryFlippy({
            rootElem: t,
            creator: this,
            navButtons: !1,
            navKeyboard: !0,
          }),
        e.dataset.thumbrollId),
      t =
        (t &&
          (t = document.getElementById(t)) &&
          new ImageGalleryThumbroll({
            rootElem: t,
            creator: this,
            navButtons: !0,
            navKeyboard: !0,
          }),
        e.dataset.herothumbsId);
    t &&
      (e = document.getElementById(t)) &&
      new ImageGalleryHeroThumbs({ rootElem: e, creator: this }),
      this.select(0);
  }
  prev() {
    0 == this.currentIndex
      ? this.select(this.imageList.length - 1)
      : this.select(this.currentIndex - 1);
  }
  next() {
    this.currentIndex >= this.imageList.length - 1
      ? this.select(0)
      : this.select(this.currentIndex + 1);
  }
  attachKeyboardEvents(e) {
    e.addEventListener("keydown", this.ignoreKeys.bind(this)),
      e.addEventListener("keypress", this.ignoreKeys.bind(this)),
      e.addEventListener("keyup", this.handleKeys.bind(this));
  }
  ignoreKeys(e) {
    ["ArrowLeft", "ArrowRight", "Space", "Enter", "Escape"].includes(e.code) &&
      e.preventDefault();
  }
  handleKeys(e) {
    ["ArrowLeft"].includes(e.code) && this.prev(),
      ["ArrowRight"].includes(e.code) && this.next(),
      ["Escape"].includes(e.code) && this.close();
  }
  makeMediaElement(t, n = !0) {
    var i = this.imageList[t];
    let o;
    if ("image" == i.purpose)
      (o = document.createElement("img")).setAttribute("loading", "lazy"),
        (o.src = i.url),
        o.setAttribute("alt", i.title),
        o.setAttribute("title", i.title),
        (o.style.maxWidth = i.width + "px"),
        (o.style.maxHeight = i.height + "px");
    else if (
      "video" == i.purpose &&
      (((o = document.createElement("iframe")).dataset.ImageGalleryIndex = t),
      o.classList.add("video"),
      o.setAttribute("alt", i.title),
      o.setAttribute("title", i.title),
      (o.frameborder = "0"),
      i.url.includes("youtube"))
    ) {
      t = document.querySelector("html").lang;
      let e =
        `https://www.youtube.com/embed/${i.videoId}?wmode=transparent&rel=0&enablejsapi=1&cc_lang_pref=` +
        t;
      i.start && 0 < i.start && (e += "&start=" + i.start),
        i.end && 0 < i.end && (e += "&end=" + i.end),
        "True" === i.cc && (e += "&cc_load_policy=1"),
        n && ((e += "&autoplay=1"), o.setAttribute("allow", "autoplay")),
        (o.src = e);
    }
    return o;
  }
  select(t) {
    (this.currentIndex = t),
      this.components.forEach(function (e) {
        e.select && e.select(t);
      });
  }
  open(t) {
    (this.currentIndex = t),
      this.components.forEach(function (e) {
        e.open && e.open(t), e.select && e.select(t);
      });
  }
  close() {
    this.stopVideo(),
      this.components.forEach(function (e) {
        e.close && e.close();
      });
  }
  stopVideo() {
    document.querySelectorAll("iframe.video").forEach(function (e) {
      (e.src = ""), e.remove();
    });
  }
}
class ImageGalleryFlippy {
  constructor(e) {
    for (this.rootElem = e.rootElem; this.rootElem.hasChildNodes(); )
      this.rootElem.removeChild(this.rootElem.lastChild);
    (this.creator = e.creator),
      this.creator.components.push(this),
      (this.imageList = this.creator.imageList),
      this.rootElem.classList.add("evo-gallery-flippy"),
      (this.containerElem = document.createElement("div")),
      this.containerElem.classList.add("container"),
      this.rootElem.appendChild(this.containerElem),
      (this.visible = !1),
      e.modal || (this.containerElem.style.aspectRatio = "16 / 9"),
      e.navButtons &&
        ((t = document.createElement("span")).classList.add(
          "icon-evo-arrow-left-white-on-black"
        ),
        t.classList.add("prev"),
        t.setAttribute("title", VL.copy.previous),
        t.addEventListener("click", this.creator.prev.bind(this.creator)),
        this.containerElem.appendChild(t));
    var t = document.createElement("div");
    t.classList.add("middle"),
      this.containerElem.appendChild(t),
      (this.imgBoxElem = document.createElement("div")),
      this.imgBoxElem.classList.add("imgbox"),
      e.navKeyboard && this.imgBoxElem.setAttribute("tabindex", "0"),
      t.appendChild(this.imgBoxElem),
      e.navButtons &&
        ((t = document.createElement("span")).classList.add(
          "icon-evo-arrow-right-white-on-black"
        ),
        t.classList.add("next"),
        t.setAttribute("title", VL.copy.next),
        t.addEventListener("click", this.creator.next.bind(this.creator)),
        this.containerElem.appendChild(t)),
      (this.captionElem = document.createElement("div")),
      this.captionElem.classList.add("caption"),
      this.rootElem.appendChild(this.captionElem),
      e.navKeyboard && this.creator.attachKeyboardEvents(this.imgBoxElem),
      window.addEventListener("resize", () =>
        setTimeout(this.resize.bind(this), 100)
      ),
      window.addEventListener("orientationchange", () =>
        setTimeout(this.resize.bind(this), 100)
      );
  }
  resize() {
    var n = this.imgBoxElem.firstElementChild;
    if (n) {
      let e = this.imgBoxElem.offsetWidth,
        t = this.imgBoxElem.offsetHeight;
      e / t > 16 / 9
        ? (e = t * (16 / 9))
        : e / t < 16 / 9 && (t = e / (16 / 9)),
        (n.style.width = e + "px"),
        (n.style.height = t + "px");
    }
  }
  select(e) {
    for (; this.imgBoxElem.hasChildNodes(); )
      this.imgBoxElem.removeChild(this.imgBoxElem.lastChild);
    this.captionElem &&
      (this.captionElem.innerText = this.creator.imageList[e].title),
      this.visible &&
        ((e = this.creator.makeMediaElement(e)),
        this.imgBoxElem.appendChild(e),
        this.resize());
  }
  open() {
    this.visible = !0;
  }
  close() {
    this.visible = !1;
  }
}
class ImageGallerySlippy {
  constructor(e) {
    for (this.rootElem = e.rootElem; this.rootElem.hasChildNodes(); )
      this.rootElem.removeChild(this.rootElem.lastChild);
    (this.creator = e.creator),
      this.creator.components.push(this),
      (this.imageList = this.creator.imageList),
      (this.selectHook = this.creator.select.bind(this.creator)),
      this.rootElem.classList.add("evo-gallery-slippy");
    var t = document.createElement("div"),
      n =
        (t.classList.add("evo-gallery-modal"),
        (this.modalElem = t),
        document.body.appendChild(t),
        document.createElement("div"));
    n.setAttribute("tabindex", "0"), n.classList.add("close");
    const i = document.createElement("span");
    i.classList.add("icon-close"), n.appendChild(i);
    var o = document.createElement("span"),
      o =
        (o.classList.add("caption-close"),
        (o.innerText = VL.copy.close),
        n.appendChild(o),
        t.appendChild(n),
        n.addEventListener(
          "click",
          function (e) {
            e.preventDefault(), this.closeVideo();
          }.bind(this)
        ),
        n.addEventListener(
          "keyup",
          function (e) {
            ["Space", "Enter", "Escape"].includes(e.code) &&
              (e.preventDefault(), e.stopPropagation(), this.closeVideo());
          }.bind(this)
        ),
        document.createElement("div")),
      r =
        (o.classList.add("videowrapper"),
        t.appendChild(o),
        (this.videoBox = document.createElement("div")),
        this.videoBox.classList.add("videobox"),
        o.appendChild(this.videoBox),
        (this.containerElem = document.createElement("div")),
        this.containerElem.classList.add("container"),
        e.navKeyboard && this.containerElem.setAttribute("tabindex", "0"),
        this.rootElem.appendChild(this.containerElem),
        document.createElement("div"));
    r.classList.add("roll"), this.containerElem.appendChild(r);
    for (let e = 0; e < this.imageList.length; e++) {
      var a = document.createElement("div"),
        s = (a.classList.add("panel"), document.createElement("div")),
        l =
          (s.classList.add("mediabox"),
          a.appendChild(s),
          document.createElement("img"));
      if ("video" == this.imageList[e].purpose) {
        l.src = this.imageList[e].thumbUrl;
        var c = document.createElement("div");
        c.classList.add("overlay"), s.appendChild(c);
        const i = document.createElement("div");
        i.classList.add("icon-youtube-white-transparent"),
          c.appendChild(i),
          this.tryReplaceImage(
            l,
            `https://i.ytimg.com/vi/${this.imageList[e].videoId}/maxresdefault.jpg`
          ),
          s.addEventListener("click", () => this.openVideo(e)),
          (s.style.cursor = "pointer");
      } else
        "image" == this.imageList[e].purpose &&
          (l.setAttribute("loading", "lazy"),
          (l.src = this.imageList[e].mobileUrl || this.imageList[e].url));
      s.appendChild(l), r.appendChild(a);
      var c = document.createElement("span"),
        s =
          (c.appendChild(
            document.createTextNode(e + 1 + "/" + this.imageList.length)
          ),
          s.appendChild(c),
          document.createElement("div")),
        d = (s.classList.add("caption"), this.creator.imageList[e].title);
      (s.innerText = d),
        l.setAttribute("alt", d),
        l.setAttribute("title", d),
        a.appendChild(s);
    }
    e.navButtons &&
      ((n = document.createElement("div")).classList.add("prev"),
      n.setAttribute("title", VL.copy.previous),
      n.addEventListener("click", this.creator.prev.bind(this.creator)),
      this.rootElem.appendChild(n),
      (t = document.createElement("span")).classList.add(
        "icon-evo-chevron-left-white"
      ),
      n.appendChild(t),
      (o = document.createElement("div")).classList.add("next"),
      o.setAttribute("title", VL.copy.next),
      o.addEventListener("click", this.creator.next.bind(this.creator)),
      this.rootElem.appendChild(o),
      (n = document.createElement("span")).classList.add(
        "icon-evo-chevron-right-white"
      ),
      o.appendChild(n)),
      e.navButtons && this.creator.attachKeyboardEvents(this.containerElem),
      this.containerElem.addEventListener(
        "keyup",
        function (e) {
          ["Space", "Enter"].includes(e.code) &&
            (e.preventDefault(), this.openVideo(this.creator.currentIndex));
        }.bind(this)
      ),
      this.containerElem.addEventListener("scroll", this.scroll.bind(this)),
      window.addEventListener("resize", this.resize.bind(this)),
      this.resize();
  }
  openVideo(e) {
    "video" == this.imageList[e].purpose &&
      (this.modalElem.classList.add("active"),
      (e = this.creator.makeMediaElement(e, !0)),
      this.videoBox.appendChild(e),
      this.modalElem.querySelector(".close").focus());
  }
  closeVideo() {
    this.creator.stopVideo(),
      this.modalElem.classList.contains("active") &&
        (this.modalElem.classList.remove("active"), this.containerElem.focus());
  }
  select(e) {
    e *= this.containerElem.offsetWidth;
    this.containerElem.scrollTo({ left: e, top: 0, behavior: "smooth" });
  }
  scroll() {
    this.scrollTimer && window.clearTimeout(this.scrollTimer),
      (this.scrollTimer = window.setTimeout(this.scrollDone.bind(this), 100));
  }
  scrollDone() {
    var e = Math.round(
      this.containerElem.scrollLeft / this.containerElem.offsetWidth
    );
    this.selectHook(e);
  }
  resize() {
    const t = this.containerElem.offsetWidth;
    var e = this.containerElem.getElementsByClassName("panel"),
      e =
        (Array.from(e).forEach(function (e) {
          e.style.width = t + "px";
        }),
        this.containerElem.parentElement.querySelectorAll(
          ".mediabox, .prev, .next"
        ));
    Array.from(e).forEach(function (e) {
      e.style.height = (9 * t) / 16 + "px";
    }),
      this.containerElem.scrollTo({ left: 0, top: 0, behaviour: "instant" }),
      this.closeVideo(),
      this.creator.select(0);
  }
  tryReplaceImage(e, t) {
    var n = new Image();
    (n.src = t), this.waitForImage(3e4, e, n);
  }
  waitForImage(e, t, n) {
    n.complete && n.naturalHeight
      ? 360 < n.naturalHeight && (t.src = n.src)
      : 0 < e && setTimeout(() => this.waitForImage(e - 200, t, n), 200);
  }
}
class ImageGalleryThumbroll {
  constructor(e) {
    for (
      this.rootElem = e.rootElem,
        e.navKeyboard && this.rootElem.setAttribute("tabindex", "0");
      this.rootElem.hasChildNodes();

    )
      this.rootElem.removeChild(this.rootElem.lastChild);
    var t;
    (this.creator = e.creator),
      this.creator.components.push(this),
      (this.imageList = this.creator.imageList),
      (this.selectHook = this.creator.select.bind(this.creator)),
      (this.thumbElems = []),
      this.rootElem.classList.add("evo-gallery-thumbroll"),
      e.navButtons &&
        ((t = document.createElement("span")).classList.add(
          "icon-evo-chevron-left-grey"
        ),
        t.classList.add("prev"),
        t.setAttribute("title", VL.copy.previous),
        t.addEventListener("click", this.creator.prev.bind(this.creator)),
        this.rootElem.appendChild(t)),
      (this.containerElem = document.createElement("div")),
      this.containerElem.classList.add("container"),
      this.rootElem.appendChild(this.containerElem),
      (this.rollElem = document.createElement("div")),
      this.rollElem.classList.add("roll"),
      this.containerElem.appendChild(this.rollElem);
    for (let e = 0; e < this.imageList.length; e++) {
      var n,
        i,
        o = document.createElement("span");
      o.classList.add("panel"),
        o.setAttribute("alt", this.imageList[e].title),
        o.setAttribute("title", this.imageList[e].title),
        (o.style.backgroundImage = `url(${this.imageList[e].thumbUrl})`),
        this.rollElem.appendChild(o),
        "video" == this.imageList[e].purpose &&
          ((n = document.createElement("div")).classList.add("overlay"),
          o.appendChild(n),
          (i = document.createElement("div")).classList.add(
            "icon-youtube-white-transparent"
          ),
          n.appendChild(i)),
        this.thumbElems.push(o),
        o.addEventListener(
          "click",
          function () {
            this.rootElem.focus(), this.selectHook(e);
          }.bind(this)
        );
    }
    e.navButtons &&
      ((t = document.createElement("span")).classList.add(
        "icon-evo-chevron-right-grey"
      ),
      t.classList.add("next"),
      t.setAttribute("title", VL.copy.next),
      t.addEventListener("click", this.creator.next.bind(this.creator)),
      this.rootElem.appendChild(t)),
      e.navButtons && this.creator.attachKeyboardEvents(this.rootElem);
  }
  select(e) {
    this.thumbElems.forEach((e) => e.classList.remove("current")),
      this.thumbElems[e].classList.add("current");
    var t = this.containerElem.offsetWidth,
      n = this.rollElem.offsetWidth,
      i = this.thumbElems[e].offsetWidth,
      e = this.thumbElems[e].offsetLeft;
    t < n &&
      this.containerElem.scrollTo({
        left: e + i / 2 + 3 - t / 2,
        top: 0,
        behavior: "smooth",
      });
  }
}
class ImageGalleryHeroThumbs {
  constructor(e) {
    (this.rootElem = e.rootElem),
      (this.creator = e.creator),
      this.creator.components.push(this),
      (this.imageList = this.creator.imageList),
      (this.openHook = this.creator.open.bind(this.creator)),
      (this.thumbElems = []);
    var t = parseInt(this.rootElem.dataset.count) || 5,
      n = this.imageList.length;
    this.rootElem.classList.add("evo-gallery-herothumbs"),
      this.rootElem.setAttribute("tabindex", "0");
    let i = this.rootElem.querySelector(".herobox");
    if (!i) {
      for (; this.rootElem.hasChildNodes(); )
        this.rootElem.removeChild(this.rootElem.lastChild);
      (i = document.createElement("div")).classList.add("herobox"),
        this.rootElem.appendChild(i);
    }
    let o = this.rootElem.querySelector(".thumbs");
    if (!o) {
      (o = document.createElement("div")).classList.add("thumbs"),
        this.rootElem.appendChild(o);
      for (let e = 0; e < t - 1; e++) {
        var r = document.createElement("div");
        r.classList.add("hero-thumb"), o.appendChild(r);
      }
    }
    var a,
      s,
      l = Array.from(o.children);
    l.unshift(i);
    let c,
      d = n - t;
    for (let e = 0; e < t; e++)
      (c = l[e]),
        e < n &&
          ((c.style.cursor = "pointer"),
          e || "video" == this.imageList[e].purpose
            ? (c.style.backgroundImage = `url(${this.imageList[e].thumbUrl})`)
            : (c.style.backgroundImage = `url(${this.imageList[e].url})`),
          "video" == this.imageList[e].purpose &&
            ((d < 1 || e < t - 1) &&
              ((a = document.createElement("div")).classList.add("overlay"),
              c.appendChild(a),
              (s = document.createElement("div")).classList.add(
                "icon-youtube-white-transparent"
              ),
              a.appendChild(s)),
            0 == e) &&
            this.tryReplaceImage(
              c,
              `https://i.ytimg.com/vi/${this.imageList[e].videoId}/maxresdefault.jpg`
            ),
          c.setAttribute("alt", this.imageList[e].title),
          c.setAttribute("title", this.imageList[e].title),
          c.addEventListener(
            "click",
            function () {
              this.creator.stopVideo(), this.openHook(e);
            }.bind(this)
          ));
    0 < d &&
      ((d += 1),
      (e = document.createElement("div")).classList.add("additional"),
      c.appendChild(e),
      e.appendChild(document.createTextNode("+" + d))),
      this.rootElem.addEventListener(
        "keydown",
        function (e) {
          ["Space", "Enter"].includes(e.code) && e.preventDefault();
        }.bind(this)
      ),
      this.rootElem.addEventListener(
        "keyup",
        function (e) {
          ["Space", "Enter"].includes(e.code) &&
            (e.preventDefault(), this.openHook(0));
        }.bind(this)
      );
  }
  tryReplaceImage(e, t) {
    var n = new Image();
    (n.src = t), this.waitForImage(3e4, e, n);
  }
  waitForImage(e, t, n) {
    n.complete && n.naturalHeight
      ? 360 < n.naturalHeight && (t.style.backgroundImage = `url('${n.src}')`)
      : 0 < e && setTimeout(() => this.waitForImage(e - 200, t, n), 200);
  }
}
class ImageGalleryModal {
  constructor(e) {
    (this.creator = e.creator),
      this.creator.components.push(this),
      (this.rootElem = e.rootElem),
      this.rootElem ||
        ((this.rootElem = document.createElement("div")),
        document.body.appendChild(this.rootElem)),
      this.rootElem.classList.add("evo-gallery-modal"),
      e.navKeyboard && this.rootElem.setAttribute("tabindex", "0");
    var t = document.createElement("button"),
      n =
        (t.setAttribute("type", "button"),
        t.classList.add("close"),
        document.createElement("span")),
      n =
        (n.classList.add("icon-close"),
        t.appendChild(n),
        document.createElement("span")),
      n =
        (n.classList.add("caption-close"),
        (n.innerText = VL.copy.close),
        t.appendChild(n),
        this.rootElem.appendChild(t),
        t.addEventListener("click", this.creator.close.bind(this.creator)),
        t.addEventListener(
          "keyup",
          function (e) {
            ["Space", "Enter"].includes(e.code) &&
              (e.preventDefault(), this.creator.close());
          }.bind(this)
        ),
        document.createElement("div")),
      t =
        (n.classList.add("inner"),
        this.rootElem.appendChild(n),
        document.createElement("div")),
      i = (n.appendChild(t), document.createElement("div"));
    n.appendChild(i),
      new ImageGalleryFlippy({
        rootElem: t,
        creator: this.creator,
        navButtons: !0,
        navKeyboard: !1,
        modal: !0,
      }),
      new ImageGalleryThumbroll({
        rootElem: i,
        creator: this.creator,
        navButtons: !1,
        navKeyboard: !1,
        modal: !0,
      }),
      e.navKeyboard && this.creator.attachKeyboardEvents(this.rootElem),
      e.closeBelowWidth &&
        ((this.closeBelowWidth = e.closeBelowWidth),
        window.addEventListener("resize", this.resize.bind(this)));
  }
  resize() {
    window.innerWidth < this.closeBelowWidth && this.creator.close();
  }
  open() {
    this.rootElem.classList.add("active"), this.rootElem.focus();
  }
  close() {
    this.rootElem.classList.remove("active");
    var e = this.creator.components.filter(
      (e) => "ImageGalleryHeroThumbs" == e.constructor.name
    );
    e.length && e[0].rootElem.focus();
  }
}
$(function () {
  Array.from(document.getElementsByClassName("evo-gallery")).forEach(
    (e) => new ImageGallery(e)
  );
}),
  (function (c) {
    VL.ui.tabs = {
      isSetup: !1,
      hide: function (e) {
        e = e || c("body");
        e.find(".tab-content").hide().attr("aria-hidden", "true"),
          e.find(".tabs a").attr("tabindex", "-1"),
          e.find(".tabs li").attr("tabindex", "-1"),
          e
            .find(".tabs .current")
            .removeClass("current")
            .removeAttr("aria-selected");
      },
      show: function (n, e, t) {
        var e = e || c("body"),
          i =
            ((t = void 0 === t || t),
            VL.util.isNumber(n)
              ? (this.hide(e),
                e
                  .find(".tabs li:eq(" + n + ")")
                  .addClass("current")
                  .attr("aria-selected", "true")
                  .attr("tabindex", "0"))
              : n &&
                "" !== n &&
                (this.hide(e),
                e
                  .find('.tabs a[href="#' + n + '"]')
                  .parent()
                  .addClass("current")
                  .attr("aria-selected", "true")
                  .attr("tabindex", "0")),
            c("#" + e.find(".tabs .current a").attr("href").substring(1))),
          o = c("#tabs-sidebar").detach();
        t && e.find(".tabs .current").focus(),
          i.show().removeAttr("aria-hidden"),
          i.children(".gr").append(o),
          i.find(".delayed-image").length && VL.loadImages.parentReplace(i),
          0 !== i.find(".map").length &&
            (i.css("display", "grid"), VL.map.load("VL.map.setup")),
          0 !== i.find("#gmap-results").length &&
            VL.map.load("VL.map.makeResultsMap"),
          n &&
            "" !== n &&
            c(".pager a").length &&
            c(".pager a").attr("href", function () {
              var e = c(this).attr("href"),
                t = "tab=" + n;
              return -1 !== e.indexOf("tab=")
                ? e.replace(/tab=[\w\-]*/, t)
                : e + (-1 === e.indexOf("?") ? "?" : "&") + t;
            }),
          t &&
            ((o = window.matchMedia("(min-width: 660px)").matches ? 80 : 110),
            c("html, body").animate(
              { scrollTop: e.find(".tabs").offset().top - o },
              500
            )),
          window.dispatchEvent(new Event("resize"));
      },
      keysdown: function (e, t) {
        var t = t || c("body"),
          n = t.find(".tabs .current").index(),
          i = t.find(".tabs li").length,
          o = e.which,
          r = !0,
          a = !0,
          e = e.altKey,
          s = 0;
        return (
          (o !== VL.keys.ENTER && o !== VL.keys.SPACE) ||
            c(document.activeElement).find("a").click(),
          (o !== VL.keys.LEFT && o !== VL.keys.RIGHT) || e
            ? (a = !1)
            : ((r = !1),
              o === VL.keys.RIGHT ? (s = 1) : o === VL.keys.LEFT && (s = -1)),
          !0 === a &&
            !0 === (a = (e = +n + s) === i || e < 0 ? !1 : a) &&
            this.show(e, t),
          r
        );
      },
      setup: function (e) {
        var n,
          t,
          i = this,
          o = {},
          r = e || c("body"),
          e = r.find(".tabs a"),
          a = r.find(".tab-content"),
          s = VL.util.queryParam("tab"),
          l = window.location.hash;
        (r.find(".tabbedPanels").length || r.hasClass("tabbedPanels")) &&
          !e.length &&
          a.length &&
          (a.find(".tab-content-heading").length &&
            a.find(".tab-content-heading").each(function () {
              r.find(".tabs ul").append("<li>" + c(this).text() + "</li>"),
                c(this).remove();
            }),
          (n = c(".tabs").index(r.find(".tabs"))),
          r.find(".tabs li").each(function (e) {
            var t = "tab-" + n + "-" + e;
            c(this).html('<a href="#' + t + '">' + c(this).html() + "</a>"),
              (o[a.eq(e).attr("id")] = t),
              a.eq(e).attr("id", t),
              0 === e &&
                c(this)
                  .addClass("current")
                  .attr("aria-selected", "true")
                  .attr("tabindex", "0");
          }),
          (t = r.find(".tabs li").length),
          r.find(".tabs ul").addClass(t < 2 ? "single-tab" : "multiple-tabs"),
          c("#mapList").length &&
            (a
              .last()
              .after(
                '<section id="map" class="tab-content tab-content-flat"></section>'
              ),
            c("#mapList").detach().appendTo(c("#map")),
            r
              .find(".tabs ul")
              .append(
                '<li class="track tab-map-link"><a href="#map"><span class="svg icon-map-pin"></span>' +
                  VL.copy.mapView +
                  "</a></li>"
              )),
          (e = r.find(".tabs a")),
          (a = r.find(".tab-content"))),
          e.length && a.length
            ? (r.find(".tabs ul").attr("role", "tablist"),
              r.find(".tabs ul li").attr("role", "tab"),
              r
                .find(".tabs")
                .removeAttr("role")
                .on("keydown", function (e) {
                  i.keysdown(e, r);
                }),
              a.hide().attr("role", "tabpanel").attr("aria-hidden", "true"),
              e.attr("tabindex", "-1"),
              e
                .removeAttr("role")
                .on("click", function () {
                  return (
                    i.hide(r),
                    c(this)
                      .parent()
                      .addClass("current")
                      .attr("aria-selected", "true")
                      .attr("tabindex", "0"),
                    i.show("", r),
                    !1
                  );
                })
                .each(function () {
                  var e = c(this).attr("href");
                  c('a[href="' + e + '"]').on("click", function () {
                    if (c(this).parents("nav").hasClass("tabs")) return !1;
                    i.show(e.substring(1), r);
                  });
                }),
              s && c("#" + s).length
                ? this.show(s, r)
                : l && o[l.substring(1)]
                ? this.show(o[l.substring(1)], r)
                : l && c(l).length
                ? this.show(l.substring(1), r)
                : this.show("", r, !1),
              window.addEventListener("hashchange", function (e) {
                e = e.newURL.split("#")[1];
                o[e] && i.show(o[e], r, !0);
              }),
              (this.isSetup = !0))
            : (r.hasClass("tabbedPanels")
                ? r
                : r.find(".tabbedPanels")
              ).addClass("empty");
      },
    };
  })(jQuery),
  (function (l) {
    VL.ui.accordion = {
      isSetup: !1,
      hide: function (e) {
        e = e || l("body");
        e.find(".tab-content").attr("aria-hidden", "true"),
          e.find(".acc-label.current").removeClass("current");
      },
      show: function (n, e, t) {
        e || l("body");
        var i,
          o,
          r,
          e = l("#" + n);
        VL.loadImages.parentReplace(e),
          l("#" + n + "-acc").toggleClass("open"),
          e.removeAttr("aria-hidden"),
          0 !== e.find("#galleryPlayer").length &&
            ((i = l("#galleryPlayer").attr("data-src")),
            (o = l("#galleryPlayer").attr("data-height")),
            (r = l("#galleryPlayer").attr("data-width")),
            l("#galleryPlayer").html(
              '<iframe src="' +
                i +
                '" height="' +
                o +
                '"  width="' +
                r +
                '"></iframe>'
            )),
          0 !== e.find(".map").length && VL.map.load("VL.map.setup"),
          0 !== e.find("#gmap-results").length &&
            VL.map.load("VL.map.makeResultsMap"),
          n &&
            "" !== n &&
            l(".pager a").length &&
            l(".pager a").attr("href", function () {
              var e = l(this).attr("href"),
                t = "tab=" + n;
              return -1 !== e.indexOf("tab=")
                ? e.replace(/tab=[\w\-]*/, t)
                : e + (-1 === e.indexOf("?") ? "?" : "&") + t;
            });
      },
      keysdown: function (e, t) {
        var t = t || l("body"),
          n = t.find(".tabs .current").index(),
          i = t.find(".tabs li").length,
          o = e.which,
          r = !0,
          a = !0,
          e = e.altKey,
          s = 0;
        return (
          (o !== VL.keys.LEFT && o !== VL.keys.RIGHT) || e
            ? (a = !1)
            : ((r = !1),
              o === VL.keys.RIGHT ? (s = 1) : o === VL.keys.LEFT && (s = -1)),
          !0 === a &&
            !0 === (a = (e = +n + s) === i || e < 0 ? !1 : a) &&
            this.show(e, t),
          r
        );
      },
      setup: function (e) {
        var o = this,
          r = e || l(".accordion"),
          t = r.find(".tab-content");
        window.location.hash;
        r.each(function () {
          var i = l(this),
            e = i.find(".tab-content").length;
          t.each(function () {
            var e = l(this),
              t = e.find(".acc-title"),
              n = l("<a>")
                .attr({
                  class: "acc-label",
                  href: "#" + e.attr("id"),
                  id: e.attr("id") + "-acc",
                })
                .html(
                  t.text() + '<i class="svg icon-arrow-down-red-outline"></i>'
                );
            t.remove(),
              e.before(n),
              i.addClass("acc-loaded"),
              640 < l(window).width() &&
                (e.data("tab-dt-open") || e.data("open")) &&
                o.show(e.attr("id"), r),
              n.on("click", function (e) {
                e.preventDefault(),
                  o.show(l(this).attr("href").split("#").slice(-1)[0], r),
                  i.data("acc-collapsible") && o.hide(r);
              }),
              l('a[href="#' + e.attr("id") + '"]').on("click", function (e) {
                if (l(this).parent("div").hasClass("accordion")) return !1;
                e.preventDefault(),
                  l("html,body").animate(
                    {
                      scrollTop: l(l(this).attr("href") + "-acc").offset().top,
                    },
                    500
                  ),
                  l(l(this).attr("href") + "-acc").hasClass("open") ||
                    o.show(l(this).attr("href").substring(1), r);
              });
          }),
            0 === i.find(".tab-content.open").length &&
              (e < 3 || 0 !== l(".product-info .placeholder-image").length
                ? o.show(0, r)
                : o.show("events", r));
        }),
          (this.isSetup = !0);
      },
    };
  })(jQuery),
  (function (i) {
    VL.ui.spinner = {
      show: function (e, t) {
        var e = e || i(window),
          n = e.offset(),
          t = t || VL.copy.spinner,
          t = i(
            '<div id="spinner">' +
              t +
              '<img src="//cdn.londonandpartners.com/images/gallery/lightbox-ico-loading.gif" alt="" width="32" height="32"/></div>'
          );
        t.css({
          left: n.left + e.width() / 2 + "px",
          top: n.top + e.height() / 2 + "px",
        }),
          i("body").append(t);
      },
      hide: function () {
        i("#spinner").remove();
      },
    };
  })(jQuery),
  (VL.ui.overlay = {
    sizeOverlay: function () {
      $("#overlay").is(":visible") &&
        $("#overlay")
          .hide()
          .css({ width: $(document).width(), height: $(document).height() })
          .show();
    },
    sizeOverlayContents: function () {
      $("#overlay-contents").is(":visible") &&
        $("#overlay-contents").css({
          top:
            $(window).scrollTop() +
            ($(window).width() < 755 ? 70 : $(window).height() / 10),
          left:
            0 < $("#overlay-contents").width()
              ? ($(window).width() - $("#overlay-contents").width()) / 2
              : $(window).width() / 20,
          right:
            0 < $("#overlay-contents").width()
              ? "auto"
              : $(window).width() / 20,
        });
    },
    show: function (e, t, n) {
      t = t || $("body");
      $("#overlay-contents");
      (this.opener = document.activeElement),
        $("#overlay").length || t.append('<div id="overlay"></div>'),
        $("#overlay-contents").length ||
          n ||
          t.append(
            '<div id="overlay-contents" role="dialog" aria-labelledby="dialogueLabel"></div>'
          ),
        t.children("#overlay").length ||
          ($("#overlay").appendTo(t), n) ||
          $("#overlay-contents").appendTo(t),
        $("embed, object, select")
          .not(
            "#overlay-contents embed, #overlay-contents object, #overlay-contents select"
          )
          .css({ visibility: "hidden" }),
        VL.ui.overlay.sizeOverlay(),
        $("#overlay").fadeIn(),
        $("#overlay")
          .off("click.overlay")
          .on("click.overlay", function (e) {
            e.stopPropagation(), VL.ui.overlay.hide();
          }),
        $(document)
          .off("keydown.overlay")
          .on("keydown.overlay", function (e) {
            e.which === VL.keys.ESC &&
              (e.preventDefault(), VL.ui.overlay.hide());
          }),
        n ||
          (e && $("#overlay-contents").addClass(e),
          VL.ui.overlay.sizeOverlayContents(),
          $("#overlay-contents").show(),
          $("#overlay-contents")
            .off("click.overlay", "#overlay-close, .continue")
            .on("click.overlay", "#overlay-close, .continue", function (e) {
              e.preventDefault(), VL.ui.overlay.hide();
            }),
          window.setTimeout(function () {
            $("#overlay-contents")
              .off("keydown.overlay")
              .on("keydown.overlay", function (e) {
                VL.ui.keyboardTrap(e, $(this));
              }),
              $("#overlay-contents").find(":tabbable").filter(":first").focus();
          }, 50));
    },
    hide: function (e) {
      var t;
      if (VL.ui.overlay.oldOverlay)
        return (
          (t = $("#overlay-contents").parent()),
          $("#overlay-contents").remove(),
          VL.ui.overlay.oldOverlay.attr("id", "overlay-contents").appendTo(t),
          (VL.ui.overlay.oldOverlay = null),
          (VL.ui.overlay.opener = VL.ui.overlay.originalOpener),
          (VL.ui.overlay.originalOpener = null),
          !1
        );
      $("#overlay-contents").hide().removeAttr("class"),
        $("#overlay").fadeOut(),
        $("embed, object, select").css({ visibility: "visible" }),
        $(document).off("keydown.overlay"),
        $("#overlay-contents .video").length && $("#overlay-contents").empty(),
        e && VL.ui.overlay.opener.focus();
    },
  }),
  jQuery,
  (VL.ui.keyboardTrap = function (e, t) {
    var n;
    e.which === VL.keys.TAB &&
      ((n = (t = t.find(":tabbable")).filter(":first")),
      (t = t.filter(":last")),
      e.target !== t[0] || e.shiftKey
        ? e.target === n[0] && e.shiftKey && (t.focus(), e.preventDefault())
        : (n.focus(), e.preventDefault()));
  }),
  $(function () {
    window.matchMedia("(hover: hover)").matches &&
      document
        .querySelectorAll(
          ".hp-row4-square .panel a, .row4-feature .tile a, .row4-feature .tile .nolink"
        )
        .forEach(function (i) {
          i.addEventListener("mouseover", function (e) {
            var t,
              n = i.querySelector("h3");
            n &&
              ((n = i.offsetHeight - n.offsetHeight - 22),
              (t = i.querySelector("p"))) &&
              ((n = Math.min(t.scrollHeight, n)),
              (t.style.maxHeight = n + "px"));
          }),
            i.addEventListener("mouseout", function (e) {
              var t = i.querySelector("p");
              t && (t.style.maxHeight = 0);
            }),
            i.addEventListener("click", function (e) {
              var t = i.querySelector("p");
              t && (t.style.maxHeight = 0);
            });
        });
  }),
  $(function () {
    const i = document.querySelectorAll(".vl-footer details");
    i.forEach(function (t) {
      const n = t.parentElement.querySelector(".menu-items");
      (n.style.minHeight = "0"),
        t.addEventListener("toggle", function (e) {
          console.log(n, n.scrollHeight),
            t.hasAttribute("open")
              ? ((n.style.minHeight = n.scrollHeight + "px"),
                i.forEach(function (e) {
                  e !== t && e.removeAttribute("open");
                }))
              : (n.style.minHeight = "0");
        });
    });
  }),
  $(function () {
    document.querySelectorAll(".ellipsis").forEach(function (n) {
      (n.dataset.content = n.innerText),
        window.addEventListener("resize", function () {
          if (n.scrollHeight <= n.offsetHeight) {
            if (!n.innerText.includes("…")) return;
            n.innerText = n.dataset.content;
          }
          let e = n.dataset.content;
          for (; n.scrollHeight > n.offsetHeight && e.includes(" "); ) {
            var t = e.lastIndexOf(" ");
            (e = e.slice(0, t) + "…"), (n.innerText = e);
          }
        });
    }),
      window.dispatchEvent(new Event("resize"));
  });
class vlABDragToScroll {
  constructor(e) {
    (this.scroller = e),
      (this.scrollSnap = e.classList.contains("scrollsnap")),
      (this.panels = e.querySelectorAll(".panel, .tile")),
      (this.links = e.querySelectorAll(".panel a, .tile a")),
      (this.buttonsBox = e.parentElement.querySelector(".rowbtns")),
      (this.dotsBox = e.parentElement.querySelector(".navdots")),
      (this.current = 0),
      this.buttonsBox &&
        ((this.prevBtn = document.createElement("div")),
        this.prevBtn.classList.add("prev"),
        (this.nextBtn = document.createElement("div")),
        this.nextBtn.classList.add("next"),
        this.buttonsBox.appendChild(this.prevBtn),
        this.buttonsBox.appendChild(this.nextBtn),
        this.prevBtn.addEventListener(
          "click",
          function (e) {
            return this.scrollLeft(), e.preventDefault(), !1;
          }.bind(this)
        ),
        this.nextBtn.addEventListener(
          "click",
          function (e) {
            return this.scrollRight(), e.preventDefault(), !1;
          }.bind(this)
        )),
      this.dotsBox && (this.navDots = this.dotsBox.querySelectorAll("a, span")),
      (this.ignoreScroll = !1),
      (this.visibleThen = [1]),
      (this.movedBy = 0),
      (this.left = 0),
      (this.x = 0),
      (this.isMouseDragging = !1),
      (this.isTouchDragging = !1);
    for (let t = 0; t < this.panels.length; t++) {
      this.dotsBox;
      var n = this.panels[t].querySelector("img"),
        n =
          (n && n.setAttribute("draggable", "false"),
          this.panels[t].querySelector("a"));
      n &&
        (n.setAttribute("draggable", "false"),
        n.addEventListener(
          "focus",
          function (e) {
            this.setCurrentTile(t);
          }.bind(this)
        ));
    }
    this.scroller.addEventListener("mousedown", (e) => this.mouseDown(e)),
      this.scroller.addEventListener("click", (e) => this.click(e), {
        capture: !0,
      }),
      this.scroller.addEventListener("scroll", (e) => this.scrolling(e)),
      this.scroller.addEventListener("scrollend", (e) => this.scrollEnd(e)),
      this.scroller.addEventListener("keydown", (e) =>
        this.catchKeyboardNav(e)
      ),
      window.addEventListener("mousemove", (e) => this.mouseMove(e)),
      window.addEventListener("mouseup", (e) => this.mouseUp(e)),
      this.scroller.addEventListener("touchstart", (e) => this.touchDown(e)),
      window.addEventListener("touchend", (e) => this.touchUp(e)),
      window.addEventListener("resize", () => this.resize()),
      this.resize(),
      this.setCurrentTile(0);
  }
  catchKeyboardNav(e) {
    ("ArrowLeft" == e.key || ("Tab" == e.key && e.shiftKey)) &&
      0 < this.current &&
      (this.prev(), this.focusCurrentTile(), e.preventDefault()),
      ("ArrowRight" == e.key || ("Tab" == e.key && !e.shiftKey)) &&
        this.current < this.panels.length - 1 &&
        (this.next(), this.focusCurrentTile(), e.preventDefault());
  }
  click(e) {
    20 < this.movedBy && (e.stopPropagation(), e.preventDefault()),
      (this.movedBy = 0);
  }
  mouseDown(e) {
    (this.isMouseDragging = !0),
      (this.movedBy = 0),
      (this.left = this.scroller.scrollLeft),
      (this.x = e.clientX),
      this.scroller.setAttribute("drag-scrolling", "true");
  }
  touchDown(e) {
    this.isTouchDragging = !0;
  }
  mouseMove(e) {
    this.isMouseDragging &&
      ((e = e.clientX - this.x),
      (this.scroller.scrollLeft = this.left - e),
      (this.movedBy = Math.abs(e)));
  }
  mouseUp(e) {
    this.isMouseDragging &&
      ((this.isMouseDragging = !1),
      this.scroller.removeAttribute("drag-scrolling"),
      this.scrollSnap) &&
      this.scrollToCurrentTile();
  }
  touchUp(e) {
    this.isTouchDragging && (this.isTouchDragging = !1);
  }
  resize() {
    var e =
      this.scroller.scrollWidth > this.scroller.offsetWidth ? "block" : "none";
    this.dotsBox && (this.dotsBox.style.display = e),
      this.buttonsBox && (this.buttonsBox.style.display = e),
      this.scrollSnap && this.scrollToCurrentTile();
  }
  scrolling(e) {
    this.timer && clearTimeout(this.timer),
      (this.timer = setTimeout(this.scrollTimeout.bind(this), 100)),
      this.ignoreScroll || this.checkForTileScrolledIntoView();
  }
  scrollEnd(e) {
    (this.ignoreScroll = !1),
      !this.scrollSnap ||
        this.isMouseDragging ||
        this.isTouchDragging ||
        this.scrollToCurrentTile();
  }
  scrollTimeout() {
    (this.ignoreScroll = !1),
      !this.scrollSnap ||
        this.isMouseDragging ||
        this.isTouchDragging ||
        this.scrollToCurrentTile();
  }
  checkForTileScrolledIntoView() {
    var e = this.getVisiblePanels(),
      t = e[0],
      n = e[e.length - 1],
      i = this.visibleThen[0],
      o = this.visibleThen[this.visibleThen.length - 1];
    (t < i || n < o) && this.setCurrentTile(t),
      (i < t || o < n) && this.setCurrentTile(n),
      (this.visibleThen = e);
  }
  getVisiblePanels() {
    var n = this.scroller.scrollLeft,
      i = n + this.scroller.offsetWidth,
      o = [];
    let r = null,
      a = 0;
    for (let t = 0; t < this.panels.length; t++) {
      var s = this.panels[t].offsetLeft - this.scroller.offsetLeft,
        l = s + this.panels[t].offsetWidth;
      let e = this.panels[t].offsetWidth;
      l < n || i < s ? (e = 0) : (s < n && (e -= n - s), i < l && (e -= l - i)),
        e > a && ((r = t), (a = e)),
        n <= s && l <= i && o.push(t);
    }
    return o.length || o.push(r), o;
  }
  prev() {
    (this.ignoreScroll = !0),
      this.setCurrentTile(this.current - 1),
      this.scrollToCurrentTile();
  }
  next() {
    (this.ignoreScroll = !0),
      this.setCurrentTile(this.current + 1),
      this.scrollToCurrentTile();
  }
  scrollLeft() {
    var e = parseInt(getComputedStyle(this.scroller).columnGap) || 0,
      t = this.panels[0].offsetWidth,
      e = this.scroller.scrollLeft - e - t;
    this.setCurrentTile(this.current - 1),
      this.scroller.scrollTo({ top: 0, left: e, behavior: "smooth" });
  }
  scrollRight() {
    var e = parseInt(getComputedStyle(this.scroller).columnGap) || 0,
      t = this.panels[0].offsetWidth,
      e = this.scroller.scrollLeft + e + t;
    this.setCurrentTile(this.current + 1),
      this.scroller.scrollTo({ top: 0, left: e, behavior: "smooth" });
  }
  scrollToCurrentTile() {
    var e = parseInt(getComputedStyle(this.scroller).columnGap) || 0,
      t = parseInt(getComputedStyle(this.scroller).paddingLeft) || 0,
      n = this.panels[0].offsetWidth,
      i = this.scroller.offsetWidth,
      t = t + e * this.current + n * this.current + n / 2 - i / 2;
    this.scroller.scrollTo({ top: 0, left: t, behavior: "smooth" });
  }
  focusCurrentTile() {
    this.links[this.current] && this.links[this.current].focus();
  }
  setCurrentTile(t) {
    if (
      ((t = t < 0 ? 0 : t) >= this.panels.length &&
        (t = this.panels.length - 1),
      (this.current = t),
      this.dotsBox && this.navDots)
    )
      for (let e = 0; e < this.navDots.length; e++)
        e == t
          ? this.navDots[e].classList.add("current")
          : this.navDots[e].classList.remove("current");
    this.buttonsBox &&
      (0 == t
        ? this.prevBtn.classList.add("disabled")
        : this.prevBtn.classList.remove("disabled"),
      t == this.panels.length - 1
        ? this.nextBtn.classList.add("disabled")
        : this.nextBtn.classList.remove("disabled"));
  }
}
$(function () {
  var e = document.querySelectorAll(
    ".lp-row3, .hp-video-roll, .video-roll, .tile-row, .image-slider"
  );
  for (i = 0; i < e.length; i++) {
    var t = e[i].querySelector(".mosaic");
    new vlABDragToScroll(t);
  }
});
class vlIconRowHoverAnimations {
  constructor(e) {
    const t = this;
    (this.comp = e).querySelectorAll(".panel").forEach(function (e) {
      e.addEventListener("mouseenter", () => t.startHoverAnimation(e)),
        e.addEventListener("mouseleave", () => t.stopHoverAnimation(e));
    }),
      (this.mobAnims = e.querySelectorAll(".panel .anim lottie-player"));
    for (let e = 0; e < this.mobAnims.length; e++) {
      const n = this.mobAnims[e];
      n.addEventListener("complete", function () {
        n.stop(), t.startRandomAnimation();
      });
    }
    (this.lastPlayed = -1),
      1 < this.mobAnims.length &&
        window.addEventListener("load", () => t.startRandomAnimation());
  }
  startHoverAnimation(e) {
    var t = e.querySelector(".anim lottie-player"),
      e = e.querySelector(".hoveranim lottie-player");
    t &&
      e &&
      t.getLottie &&
      t.getLottie() &&
      t.getLottie().isLoaded &&
      (e.getLottie && e.getLottie() && e.getLottie().isLoaded
        ? e.stop()
        : ((t = JSON.parse(JSON.stringify(t.getLottie().animationData))),
          this.recolor(t),
          e.load(t)),
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        e.play());
  }
  stopHoverAnimation(e) {
    e = e.querySelector(".hoveranim lottie-player");
    e && e.getLottie && e.getLottie() && e.getLottie().isLoaded && e.stop();
  }
  startRandomAnimation() {
    const e = this;
    if (
      window.matchMedia("(min-width: 1020px)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      window.setTimeout(() => e.startRandomAnimation(), 1e3);
    else {
      let e = Math.floor(Math.random() * (this.mobAnims.length - 1));
      e >= this.lastPlayed && ++e;
      const t = this.mobAnims[e];
      (this.lastPlayed = e), window.setTimeout(() => t.play(), 100);
    }
  }
  recolor(e) {
    const t = this;
    e.hasOwnProperty("layers")
      ? e.layers.forEach((e) => t.recolor(e))
      : e.hasOwnProperty("shapes")
      ? e.shapes.forEach((e) => t.recolor(e))
      : "gr" == e.ty
      ? e.it.forEach((e) => t.recolor(e))
      : ("st" != e.ty && "fl" != e.ty) ||
        (1 == (e = e.c.k)[0] && 1 == e[1] && 1 == e[2]
          ? ((e[0] = 0.878431372549), (e[1] = 0), (e[2] = 0.105882352941))
          : ((e[0] = 1), (e[1] = 1), (e[2] = 1)),
        (e[3] = 1));
  }
}
function vlSetupHoverAnimations() {
  document
    .querySelectorAll(".row6-icons-animated")
    .forEach((e) => new vlIconRowHoverAnimations(e));
}
"loading" == document.readyState
  ? document.addEventListener("DOMContentLoaded", vlSetupHoverAnimations)
  : vlSetupHoverAnimations();
class vlEdArticleSummaryDropdowns {
  constructor(e) {
    const n = this;
    (this.rootElem = e),
      (this.list = e.querySelector("ol, ul")),
      (this.listItems = Array.from(this.list.querySelectorAll("li"))),
      (this.isOpen = !1),
      (this.currentIndex = 0),
      (this.targets = []),
      this.listItems.forEach(function (t) {
        t = t.querySelector("a").getAttribute("href").split("#")[1];
        if (t) {
          let e = document.querySelector(`a[name='${t}']`);
          (e = e || document.getElementById(t)), n.targets.push(e);
        } else n.targets.push(null);
      }),
      this.list.addEventListener("click", (e) => this.clicked(e)),
      window.addEventListener("scroll", (e) => this.scrolled(e));
  }
  clicked(e) {
    if ((e.preventDefault(), this.isOpen)) {
      this.closeList();
      let t = e.target;
      if ("LI" == (t = "A" == t.tagName ? t.parentElement : t).tagName) {
        var n = t.querySelector("a").getAttribute("href").split("#")[1];
        let e = document.querySelector("#" + n);
        if ((e = e || document.querySelector(`[name=${n}]`))) {
          var i =
              e.getBoundingClientRect().top +
              document.documentElement.scrollTop -
              30,
            o = document.querySelectorAll(".content-body h2, .content-body h3");
          for (let e = 0; e < o.length; e++) {
            var r =
              o[e].getBoundingClientRect().top +
              document.documentElement.scrollTop;
            if (i < r) {
              window.matchMedia("(prefers-reduced-motion)").matches,
                window.scrollTo({
                  left: 0,
                  top: r - cssHeaderHeight - 70,
                  behavior: "instant",
                });
              break;
            }
          }
        }
      }
    } else this.openList();
    return e.preventDefault(), !1;
  }
  scrolled(e) {
    let t = 0;
    for (let e = 0; e < this.targets.length; e++) {
      var n = this.targets[e];
      n && n.getBoundingClientRect().y < cssHeaderHeight + 100 && (t = e);
    }
    t != this.currentIndex && this.closeList(t);
  }
  openList() {
    (this.isOpen = !0),
      this.list.setAttribute("start", "1"),
      this.list.classList.add("open"),
      this.listItems.forEach(function (e) {
        (e.style.display = "list-item"), e.removeAttribute("aria-label");
      });
  }
  closeList(t = this.currentIndex) {
    (this.isOpen = !1),
      this.list.setAttribute("start", t + 1),
      this.list.classList.remove("open");
    for (let e = 0; e < this.listItems.length; e++) {
      var n = this.listItems[e];
      e == t
        ? ((n.style.display = "list-item"),
          n.setAttribute("aria-label", "Show table of contents"))
        : ((n.style.display = "none"), n.removeAttribute("aria-label"));
    }
    this.currentIndex = t;
  }
}
function vlEdInitArticleSummaryDropdowns() {
  document
    .querySelectorAll(".panel-article-summary-jumplinks")
    .forEach((e) => new vlEdArticleSummaryDropdowns(e));
}
"loading" == document.readyState
  ? document.addEventListener(
      "DOMContentLoaded",
      vlEdInitArticleSummaryDropdowns
    )
  : vlEdInitArticleSummaryDropdowns(),
  (function () {
    "use strict";
    function t() {
      $("#lang-container").removeClass("expand-lang"),
        VL.ui.overlay.hide(!1),
        $("#lang-trigger").focus();
    }
    $("#lang-trigger").on("click", function (e) {
      e.preventDefault(),
        $(window).width() < 755
          ? ($(".lang-drop-down").css({
              "min-height": function () {
                return $(".megamenu-nav").outerHeight() + "px";
              },
              display: "block",
            }),
            "BODY" !== document.activeElement.tagName &&
              $(".lang-drop-down").find(":tabbable:first").focus(),
            window.setTimeout(function () {
              $("#lang-container").addClass("selected");
            }, 5),
            $(".lang-drop-down")
              .off("keydown.topnav")
              .on("keydown.topnav", function (e) {
                VL.ui.keyboardTrap(e, $(this));
              }))
          : ($("#lang-container").hasClass("expand-lang")
              ? t()
              : ($("#lang-container").toggleClass("expand-lang"),
                VL.ui.overlay.show("", $(".header"), !0),
                $("#lang-container")
                  .find(".lang-drop-down :tabbable:first")
                  .focus()),
            $("#overlay, #lang-container .close")
              .off("click.overlay")
              .on("click.overlay", function () {
                e.preventDefault(), t();
              }),
            $(document)
              .off("keydown.overlay")
              .on("keydown.overlay", function (e) {
                e.which === VL.keys.ESC
                  ? (e.preventDefault(), t())
                  : VL.ui.keyboardTrap(e, $(".lang-drop-down"));
              }));
    });
  })(),
  (VL.ui.megaMenu = {
    desktopMinWidth: 755,
    show: function (e) {
      e.addClass("selected");
    },
    addFurniture: function () {
      window.innerWidth < VL.ui.megaMenu.desktopMinWidth ||
        $("#menu .sub").each(function (e) {
          var t = $(this).find(".ww"),
            n = $(this)
              .parent(".megamenu-tab")
              .next()
              .find(".main-navigation-link"),
            i = n.attr("id"),
            o = n.text();
          n.length
            ? t.before(
                '<a href="#' + i + '" class="skip-link">Skip to ' + o + "</a>"
              )
            : t.before(
                '<a href="#content" class="skip-link">Skip to content</a>'
              );
        });
    },
  }),
  (function () {
    "use strict";
    VL.ui.megaMenu.addFurniture(),
      $("#menu .main-navigation-link").on("click", function (e) {
        var t = $(this).parent("li"),
          n = t.find(".sub"),
          i = VL.ui.megaMenu.desktopMinWidth,
          o = $(this).attr("href"),
          r = $(this).children("span").html();
        !n.length ||
          (window.innerWidth >= i &&
            (!VL.util.touchEvent || t.hasClass("selected"))) ||
          (e.preventDefault(),
          window.innerWidth < i
            ? ((e =
                "<h3><a href='" + o + "' title='" + r + "'>" + r + "</a></h3>"),
              t.find(".sub > h3").length || t.find(".sub").prepend(e),
              t.find(".sub > .menu-back").length ||
                t
                  .find(".sub")
                  .prepend(
                    '<a class="close menu-back" href="#menu-back" title="Close"><i class="symbol notranslate" aria-hidden="true">2</i><span class="mobonly"><i class="arrow left-arrow"></i>Back to menu</span></a>'
                  ),
              t.find(".sub").css({ display: "block" }),
              window.setTimeout(function () {
                t.toggleClass("selected");
              }, 5),
              "BODY" !== document.activeElement.tagName &&
                n.find(":tabbable :first").focus(),
              n.off("keydown.topnav").on("keydown.topnav", function (e) {
                VL.ui.keyboardTrap(e, $(this));
              }))
            : VL.util.touchEvent &&
              (t.siblings().removeClass("selected"), VL.ui.megaMenu.show(t)));
      }),
      $("#menu li").on({
        "mouseenter focusin": function () {
          !VL.util.touchEvent &&
            window.innerWidth >= VL.ui.megaMenu.desktopMinWidth &&
            VL.ui.megaMenu.show($(this));
        },
        "mouseleave focusout": function (e) {
          var t;
          !VL.util.touchEvent &&
            window.innerWidth >= VL.ui.megaMenu.desktopMinWidth &&
            ((t = $(e.currentTarget)),
            setTimeout(function () {
              var e = document.activeElement;
              null !== e && 0 === t.has(e).length && t.removeClass("selected");
            }, 1));
        },
      }),
      $("#menu").on("click.back", ".menu-back", function (e) {
        e.preventDefault(),
          window.innerWidth < VL.ui.megaMenu.desktopMinWidth &&
            ("BODY" !== document.activeElement.tagName &&
              $(this).parents(".selected").find("a:first").focus(),
            $(this).parents(".selected").removeClass("selected"),
            window.setTimeout(function () {
              $(".sub, .lang-drop-down").css("display", "none");
            }, 300));
      });
  })(),
  jQuery(document).ready(function (t) {
    window.innerWidth < 755 &&
      (t("#expand-nav").off("click"),
      t(".main-navigation-link").off("click"),
      t("#lang-picker").addClass("lang-picker-mobile").appendTo("#menu"),
      t("#lang-switcher").addClass("lang-switcher-mobile").appendTo("#menu"),
      t("#currency-switcher")
        .addClass("currency-switcher-mobile")
        .appendTo("#menu")),
      t("#expand-nav").on("click", function (e) {
        e.preventDefault(),
          t(".nav-menu-container").addClass("show-mobile-nav"),
          setTimeout(function () {
            t("#close").focus();
          }, 1);
      }),
      t("#close-mobile-menu").on("click", function (e) {
        e.preventDefault(),
          t(".nav-menu-container").removeClass("show-mobile-nav");
        (e = t(".lang-picker-menu, .lang-switcher-menu")),
          e.is(":visible") &&
            (e.slideUp(1), t("#lang-trigger2").removeClass("active")),
          (e = t(".currency-switcher-menu"));
        e.is(":visible") &&
          (e.slideUp(1), t("#currency-trigger").removeClass("active")),
          setTimeout(function () {
            t("#expand-nav").focus();
          }, 1);
      }),
      t(".main-navigation-tab a:not(:only-child)").on("click", function (e) {
        e.preventDefault(),
          t(this)
            .parent()
            .toggleClass("selected")
            .siblings()
            .removeClass("selected");
      });
  });
var slotAdded,
  VLOldWindowWidth = window.innerWidth,
  $articleSummary =
    (window.addEventListener("resize", function () {
      var e = window.innerWidth;
      VLOldWindowWidth < 755 && 755 <= e
        ? ($("#lang-switcher")
            .removeClass("lang-switcher-mobile")
            .appendTo("#header"),
          $("#currency-switcher")
            .removeClass("currency-switcher-mobile")
            .appendTo("#header"))
        : 755 <= VLOldWindowWidth &&
          e < 755 &&
          ($("#lang-switcher")
            .addClass("lang-switcher-mobile")
            .appendTo("#menu"),
          $("#currency-switcher")
            .addClass("currency-switcher-mobile")
            .appendTo("#menu")),
        (VLOldWindowWidth = e);
    }),
    (VL.monthPicker = {
      init: function () {
        -1 < window.location.href.indexOf("london-events-calendar") &&
          VL.monthPicker.setup();
      },
      setup: function () {
        var e = $(".content-body .article-body h2"),
          t = e.length,
          n = $("<select>").addClass("monthpicker");
        n.append($("<option>", { value: "", text: "Select month" }));
        for (var i = 0; i < t; i++) {
          var o = "quicklink-" + i,
            r = $(e[i]);
          1 < r.text().length &&
            (r.attr("id", o),
            r.attr("class", "skip-target"),
            n.append($("<option>", { value: o, text: r.text() })));
        }
        var a,
          s = $("#content .article-body");
        0 < t &&
          ((a = $("<div>").addClass("monthpicker-panel")),
          s.find("h1").length || s.find(".intro").length
            ? (s.find(".intro").length ? s.find(".intro") : s.find("h1")).after(
                a.append(n)
              )
            : a.append(n).prependTo(s)),
          $(".monthpicker").change(function () {
            var e = "#" + $(this).find("option:selected").val();
            $("html,body").animate(
              { scrollTop: VL.monthPicker.scrollPos(e) },
              500,
              function () {
                window.location.hash = e;
              }
            );
          }),
          window.setTimeout(function () {
            VL.monthPicker.jumpOnLoad();
          }, 100);
      },
      jumpOnLoad: function () {
        var e = window.location.hash;
        e.length && window.scrollTo(0, this.scrollPos(e));
      },
      scrollPos: function (e) {
        return $(e).offset().top;
      },
    }),
    $(document).ready(function () {
      VL.monthPicker.init();
    }),
    $(".article-body .panel-article-summary").first()),
  $firstArticleH2 = $(".article-body h2").not(".tabbedPanels h2").first(),
  $adSlotMarkup = $(
    '<div class="c advert-mobile"><span class="advert-heading">Advertisement</span><div id="ad_mobile_mpu1" class="advert advert-mpu"></div></div>'
  );
window.innerWidth < 1020 &&
  0 == $(".error-hero").length &&
  ((slotAdded = !1),
  $articleSummary.length
    ? ($articleSummary.after($adSlotMarkup), (slotAdded = !0))
    : $firstArticleH2.length &&
      ($firstArticleH2.before($adSlotMarkup), (slotAdded = !0)),
  1 == slotAdded) &&
  googletag.cmd.push(function () {
    googletag
      .defineSlot(
        "/70940382/VL-Microsite-Set-1/VL-Microsite-Set-1-MPU",
        [[300, 250]],
        "ad_mobile_mpu1"
      )
      .setCollapseEmptyDiv(!0)
      .addService(googletag.pubads()),
      googletag.display("ad_mobile_mpu1");
  }),
  (function (a) {
    VL.loadImages = {
      setup: function () {
        for (var e = a("span.delayed-image:visible"), t = 0; t < e.length; t++)
          this.scrollReplace(e[t]);
      },
      scrollReplace: function (e) {
        var t = this,
          n = a(window),
          i = n.scrollTop() + 2 * n.height(),
          o = a(e).offset().top;
        function r() {
          0 < o && o < i && t.replaceImage(a(e));
        }
        r(),
          a(window).scroll(function () {
            (n = a(window)), (i = n.scrollTop() + 2 * n.height()), r();
          });
      },
      parentReplace: function (e) {
        for (var t = e.find("span.delayed-image"), n = 0; n < t.length; n++)
          this.replaceImage(a(t[n]));
      },
      loadAll: function () {
        this.parentReplace(a("body"));
      },
      replaceImage: function (e) {
        var t,
          n,
          i = e.parent();
        e.parent("figure").length &&
          ((t = a("<figcaption>").text(e.attr("data-title"))),
          e.removeAttr("data-title")),
          e.attr("data-backgroundcolor") &&
            0 < e.attr("data-backgroundcolor").length &&
            i.hasClass("area-background") &&
            i.css("background-color", "#" + e.attr("data-backgroundcolor")),
          e.removeAttr("data-backgroundcolor"),
          e.data("src").length &&
            ((n = a("<img/>").attr(e.data())), e.replaceWith(n)),
          i.append(t).addClass("has-caption");
      },
    };
  })(jQuery),
  (function (n) {
    (VL.taxonomy = {}),
      (VL.searchReorder = {
        initSelect: function () {
          var e = document.getElementById("searchreorderselect");
          return (
            (e.changed = !1),
            (e.onfocus = VL.searchReorder.selectFocussed),
            (e.onchange = VL.searchReorder.selectChanged),
            (e.onkeydown = VL.searchReorder.selectKeyed),
            (e.onclick = VL.searchReorder.selectClicked),
            !0
          );
        },
        selectChanged: function (e) {
          e = e && e.value ? e : this;
          return (
            !!e.changed &&
            (document.getElementById("searchreorder").submit(), !0)
          );
        },
        selectClicked: function () {
          this.changed = !0;
        },
        selectFocussed: function () {
          return (this.initValue = this.value), !0;
        },
        selectKeyed: function (e) {
          e = e || event;
          return (
            (e.keyCode != VL.keys.ENTER && e.keyCode != VL.keys.TAB) ||
            this.value == this.initValue
              ? e.keyCode == VL.keys.ESC
                ? (this.value = this.initValue)
                : (this.changed = !1)
              : ((this.changed = !0), VL.searchReorder.selectChanged(this)),
            !0
          );
        },
      }),
      (VL.searchRefine = {
        filterPosition: function () {
          1e3 <= n(window).width()
            ? n(".search-refine-wrapper").insertBefore(n(".search-grid"))
            : n(".search-refine-wrapper").appendTo("body");
        },
        init: function () {
          var e = n("#searchRefine");
          n(".clear-refine-set").on("click", function () {
            n(this)
              .parents(".search-refine-set")
              .find(":input")
              .prop("checked", !1)
              .prop("selected", !1)
              .not(":radio, :checkbox")
              .val("")
              .end()
              .end()
              .find("#sr-user-rating-selected")
              .removeClass();
          }),
            e.on("click", "input", function () {
              var e = n(this),
                t = e.attr("name");
              "free" == t &&
                e.is(":checked") &&
                n("input[name=price-band]").prop("checked", !1),
                "price-band" == t &&
                  e.is(":checked") &&
                  n("input[name=free]").prop("checked", !1);
            }),
            VL.searchRefine.filterPosition(),
            n(".sr-user-rating input").on("change", function () {
              n("#sr-user-rating-selected")
                .removeClass()
                .addClass("user-rating-" + n(this).val());
            }),
            n(".search-cat-more").on("click", function (e) {
              e.preventDefault(),
                n(this).parents(".search-refine-set").addClass("show-more");
            }),
            n("#open-search-refine").on("click", function () {
              n(".search-refine-wrapper").addClass("show");
              var e = n("<a/>")
                .addClass("search-refine-overlay")
                .attr("href", "#");
              n("body").prepend(e),
                e.on("click", function (e) {
                  e.preventDefault(),
                    n(".search-refine-wrapper").removeClass("show"),
                    n(".search-refine-overlay").remove();
                });
            }),
            n("#close-search-refine").on("click", function () {
              n(".search-refine-wrapper").removeClass("show"),
                n(".search-refine-overlay").remove();
            });
        },
      });
  })(jQuery),
  (VL.map = {
    isSetUp: !1,
    ourMarkers: { default: [] },
    defaults: {
      coords: [51.507415, -0.1277879],
      zoom: 11,
      pinColour: "e0001b",
    },
    pinColours: [
      "d00732",
      "006811",
      "de277d",
      "7638de",
      "00aaa8",
      "ee5f08",
      "165fcd",
      "eccf0a",
      "94b208",
    ],
    load: function (e) {
      VL.util.quickLoadCSS(
        "https://api.mapbox.com/mapbox-gl-js/v0.47.0/mapbox-gl.css"
      ),
        $script(
          "https://api.mapbox.com/mapbox-gl-js/v0.47.0/mapbox-gl.js",
          "mapboxjs"
        ),
        $script.ready("mapboxjs", function () {
          (mapboxgl.accessToken =
            "pk.eyJ1Ijoia2VudGFiZGV2IiwiYSI6ImNpczRtYWQ4czAwMGgyeXA0cWhrZXlxbDQifQ.UDWYFeZ3j7jMcHEe52kC6w"),
            VL.util.executeFunctionByName(e, window);
        });
    },
    setup: function () {
      if ("object" != typeof mapboxgl) return !1;
      $(".map")
        .not(".mapbox-map")
        .each(function () {
          var e = $(this),
            t = e.data(),
            n =
              (e.attr("id") || e.attr("id", "map" + $(".map").index(e)),
              e.attr("id"));
          VL.map.draw(n, t),
            (VL.map.isSetUp = !0),
            e.addClass("mapbox-map"),
            $("#map-top10s").length && VL.map.top10s(n, t),
            $(".wrapper-map-data").length && VL.map.markersFromWrappers(n, t);
        });
    },
    draw: function (e, t) {
      var n, i;
      return (
        "object" == typeof mapboxgl &&
        ((t.latlng && "," != t.latlng) ||
        (t.markers && "," != t.markers) ||
        (t.points && 0 != t.points.length)
          ? ((n = VL.map.defaults.coords),
            t.latlng &&
              "," !== t.latlng &&
              0 < t.latlng.split(",").length &&
              (n = t.latlng.split(",")),
            (i = t.zoom || VL.map.defaults.zoom),
            (this.theMap = new mapboxgl.Map({
              container: e,
              style: "mapbox://styles/mapbox/streets-v10?optimize=true",
              center: [n[1], n[0]],
              minZoom: 7,
              maxZoom: 17,
              zoom: i,
            })),
            this.theMap.addControl(new mapboxgl.NavigationControl()),
            (this.theMap.fullscreenCtrl = new mapboxgl.FullscreenControl()),
            this.theMap.addControl(this.theMap.fullscreenCtrl),
            void (
              t.markers &&
              "," !== t.markers &&
              ((i = {
                latitude: (n = t.markers.split(","))[0],
                longitude: n[1],
              }),
              this.addMarker(i))
            ))
          : ($("#" + e).remove(), !1))
      );
    },
    makePoints: function (e, s) {
      var t;
      for (
        s.points = [],
          $("#" + s.pointsid)
            .children("[data-venueid]")
            .each(function (e) {
              var t,
                n = $(this),
                i = "",
                o = "",
                r = s.pinColour || VL.map.defaults.pinColour,
                a = $("<div/>");
              s.markerElement && (t = s.markerElement.cloneNode()),
                n.attr("data-lat") &&
                  n.attr("data-lng") &&
                  ((i = n.attr("data-lat")), (o = n.attr("data-lng"))),
                0 != i &&
                  0 != o &&
                  (n.find("a").appendTo(a),
                  a.find("a[href]").attr("href", function () {
                    VL.util.addQueryParam("ref", "map", $(this).attr("href"));
                  }),
                  s.points.push({
                    content: a,
                    latitude: i,
                    longitude: o,
                    pinColour: r,
                    markerElement: t,
                  }));
            }),
          t = s.points.length - 1;
        0 <= t;
        t--
      )
        (s.points[t].longitude && s.points[t].latitude) ||
          s.points.splice(t, 1);
      for (VL.map.theMap || VL.map.draw(e, s), t = 0; t < s.points.length; t++)
        this.addMarker(s.points[t], s.category);
      e = s.points.reduce(function (e, t) {
        return e.extend([t.longitude, t.latitude]);
      }, new mapboxgl.LngLatBounds(
        [s.points[0].longitude, s.points[0].latitude],
        [s.points[0].longitude, s.points[0].latitude]
      ));
      this.theMap.fitBounds(e, { padding: 50 });
    },
    checkDuplicates: function (e, t, n) {
      for (var i = null, o = 0; o < n.points.length; o++)
        n.points[o].latitude === e && n.points[o].longitude === t && (i = o);
      return i;
    },
    makeResultsMap: function () {
      var n,
        o,
        r,
        a,
        s = { points: [] };
      for (
        $("li[data-ll]").each(function (e) {
          var t;
          (o = $(this).attr("data-ll").split(",")),
            (n = o[0]),
            (o = o[1]),
            0 != n &&
              0 != o &&
              ((r = VL.map.checkDuplicates(n, o, s)),
              (t = $(this).find(".search-tile-image").clone()),
              null === r
                ? ((a = $("<div/>")),
                  t.appendTo(a),
                  s.points.push({ content: a, latitude: n, longitude: o }))
                : ((a = s.points[r].content).find("img").remove(),
                  t.appendTo(a),
                  (s.points[r].content = a)));
        }),
          s.points.reverse(),
          VL.map.draw("gmap-results", s),
          i = 0;
        i < s.points.length;
        i++
      )
        this.addMarker(s.points[i], s.category);
      var e = s.points.reduce(function (e, t) {
        return e.extend([t.longitude, t.latitude]);
      }, new mapboxgl.LngLatBounds(
        [s.points[0].longitude, s.points[0].latitude],
        [s.points[0].longitude, s.points[0].latitude]
      ));
      this.theMap.fitBounds(e, { padding: 50 });
    },
    addMarker: function (e, t) {
      var n, i;
      0 != e.latitude &&
        0 != e.longitude &&
        ((n = e.pinColour || VL.map.defaults.pinColour),
        ((i = {}).color = "#" + n),
        e.markerElement && (i.element = e.markerElement),
        (n = new mapboxgl.Marker(i).setLngLat([e.longitude, e.latitude])),
        e.content &&
          VL.util.isElement(e.content[0]) &&
          ((i = new mapboxgl.Popup({ offset: 25 }).setDOMContent(e.content[0])),
          (n.getElement().style.cursor = "pointer"),
          n.setPopup(i),
          i.on("open", function (e) {
            window.setTimeout(VL.map.trackMarker, 100);
          })),
        n.addTo(VL.map.theMap),
        (void 0 !== VL.map.ourMarkers[t] &&
        VL.map.ourMarkers[t] instanceof Array
          ? VL.map.ourMarkers[t]
          : VL.map.ourMarkers.default
        ).push(n));
    },
    markersFromWrappers: function (e, t) {
      VL.map.testHover = new TestForInputDeviceHover(
        document.querySelector(".map")
      );
      const a = this;
      let s;
      $(".wrapper-map-data").each(function (e, t) {
        let n = t.dataset.ll;
        var i,
          o = t.dataset.name,
          r = t.dataset.thumb;
        (img = r
          ? `<img src=${r} loading="lazy" height="82" width="145" alt="">`
          : ""),
          n &&
            !n.includes(";") &&
            ((r = function () {
              $(".map-toplist").removeClass("fullscreen"),
                $(".map-toggle .map-view-btn").css("display", "inline"),
                $(".map-toggle .list-view-btn").css("display", "none"),
                $("div.breadcrumb").removeClass("sticky");
              var e = VL.map.theMap.fullscreenCtrl;
              e && e._isFullscreen() && e._onClickFullscreen(),
                window.matchMedia("(prefers-reduced-motion)").matches ||
                  setTimeout(
                    () => t.scrollIntoView({ behavior: "instant" }),
                    10
                  ),
                setTimeout(
                  () => t.scrollIntoView({ behavior: "instant" }),
                  100
                );
            }),
            (i = $(t).closest(".tabpanel").attr("id") || "default"),
            (n = n.split(",")),
            ($content = $(
              `<div class="wrapper-map-poptext">${img}<span>${o}</span></div>`
            )).click(r),
            (o = {
              latitude: n[0],
              longitude: n[1],
              content: $content,
              navfunc: r,
            }),
            void 0 === VL.map.ourMarkers[i] && (VL.map.ourMarkers[i] = []),
            a.addMagicMarker(o, i),
            (s = s || i));
      }),
        $("nav.tabs a").on("click", function (e) {
          e = e.target.href.split("#")[1];
          VL.map.showOnlyMarkersForTab(e);
        }),
        VL.map.showOnlyMarkersForTab(s);
    },
    showOnlyMarkersForTab(e) {
      for (cat of Object.getOwnPropertyNames(VL.map.ourMarkers))
        if (((arr = VL.map.ourMarkers[cat]), cat == e)) {
          const n = [],
            o = [];
          arr.forEach(function (e) {
            e.addTo(VL.map.theMap);
            e = e.getLngLat();
            o.push(e.lat), n.push(e.lng);
          });
          var t = [
            Math.min(...n),
            Math.min(...o),
            Math.max(...n),
            Math.max(...o),
          ];
          this.theMap.fitBounds(t, { padding: 50, duration: 0 });
        } else for (i = 0; i < arr.length; i++) arr[i].remove();
    },
    addMagicMarker: function (t, e) {
      var n, i;
      0 != t.latitude &&
        0 != t.longitude &&
        ((n = t.pinColour || VL.map.defaults.pinColour),
        (n = new mapboxgl.Marker({ color: "#" + n }).setLngLat([
          t.longitude,
          t.latitude,
        ])),
        t.content &&
          VL.util.isElement(t.content[0]) &&
          ((i = new mapboxgl.Popup({ offset: 25 }).setDOMContent(t.content[0])),
          (n.getElement().style.cursor = "pointer"),
          n.getElement().addEventListener("mouseenter", function (e) {
            VL.map.testHover.canHover() && i.addTo(VL.map.theMap);
          }),
          n.getElement().addEventListener("mouseleave", function (e) {
            VL.map.testHover.canHover() && i.remove();
          }),
          n.getElement().addEventListener("click", function (e) {
            VL.map.testHover.canHover() && t.navfunc();
          }),
          n.setPopup(i),
          i.on("open", function (e) {
            window.setTimeout(VL.map.trackMarker, 100);
          })),
        n.addTo(VL.map.theMap),
        (void 0 !== VL.map.ourMarkers[e] &&
        VL.map.ourMarkers[e] instanceof Array
          ? VL.map.ourMarkers[e]
          : VL.map.ourMarkers.default
        ).push(n));
    },
  }),
  $(document).ready(function () {
    const t = document.querySelector(".product-keyinfo .map-static");
    if (t) {
      var e = document.querySelector(
        ".product-keyinfo section:first-of-type .map-static"
      );
      const i = t.querySelector("img"),
        o = t.querySelector(".overlay");
      t == e
        ? o.addEventListener("click", function (e) {
            o.remove(),
              i.remove(),
              t.classList.add("map"),
              t.classList.remove("map-static"),
              VL.map.load("VL.map.setup"),
              e.preventDefault();
          })
        : (o.remove(),
          i.remove(),
          t.classList.add("map"),
          t.classList.remove("map-static"));
    }
    const n = document.querySelector(".product-keyinfo #gmap-results-static");
    if (n) {
      e = document.querySelector(
        ".product-keyinfo section:first-of-type #gmap-results-static"
      );
      const r = n.querySelector("img"),
        a = n.querySelector(".overlay");
      n == e
        ? a.addEventListener("click", function (e) {
            a.remove(),
              r.remove(),
              (n.id = "gmap-results"),
              VL.map.load("VL.map.makeResultsMap"),
              e.preventDefault();
          })
        : (a.remove(), r.remove(), (n.id = "gmap-results"));
    }
  }),
  $(".map-toggle").click(function () {
    ($map = $(".map-toplist")).hasClass("fullscreen")
      ? ($map.removeClass("fullscreen"),
        $(".map-toggle .map-view-btn").css("display", "inline"),
        $(".map-toggle .list-view-btn").css("display", "none"),
        $("div.breadcrumb").removeClass("sticky"))
      : ($map.addClass("fullscreen"),
        $(".map-toggle .map-view-btn").css("display", "none"),
        $(".map-toggle .list-view-btn").css("display", "inline"),
        $("div.breadcrumb").addClass("sticky")),
      window.dispatchEvent(new Event("resize"));
  });
class TestForInputDeviceHover {
  constructor(e) {
    (this.mouseIsDown = !1),
      (this.mouseHoverCount = 0),
      (this.oldMouseHoverCount = 0),
      e.addEventListener("mousedown", this.mouseDownHook.bind(this)),
      e.addEventListener("mouseup", this.mouseUpHook.bind(this)),
      e.addEventListener("mousemove", this.mouseMoveHook.bind(this));
  }
  mouseDownHook() {
    this.mouseIsDown = !0;
  }
  mouseUpHook() {
    (this.mouseIsDown = !1),
      (this.oldMouseHoverCount = this.mouseHoverCount),
      (this.mouseHoverCount = 0);
  }
  mouseMoveHook() {
    this.mouseIsDown || this.mouseHoverCount++;
  }
  canHover() {
    return 2 < this.oldMouseHoverCount || 2 < this.mouseHoverCount;
  }
}
(VL.map.top10s = function (o, r) {
  $("#map-top10s input").attr("value", function (e, t) {
    return t.replace(/[,&;#]/g, "");
  }),
    $(".map-venues").attr("id", function (e, t) {
      return t.replace(/[,&;#]/g, "");
    });
  var a = VL.map.pinColours.length,
    e =
      ($("#map-top10s input").length &&
        !$("#map-top10s img").length &&
        $("#map-top10s input").each(function (e) {
          "points-taylor-trail-red" == $(this).val()
            ? $(this).before(
                '<img src="https://cdn.londonandpartners.com/webui/visit/images/taylor-gemstone-red.png" alt="" width="40" height="35 class="taylor-gemstone">'
              )
            : "points-taylor-trail-blue" == $(this).val()
            ? $(this).before(
                '<img src="https://cdn.londonandpartners.com/webui/visit/images/taylor-gemstone-blue.png" alt="" width="40" height="35" class="taylor-gemstone">'
              )
            : "points-taylor-trail-green" == $(this).val()
            ? $(this).before(
                '<img src="https://cdn.londonandpartners.com/webui/visit/images/taylor-gemstone-green.png" alt="" width="40" height="35" class="taylor-gemstone">'
              )
            : $(this).before(VL.map.createPin(VL.map.pinColours[e % a]));
        }),
      $("#map-top10s input:checkbox").on("click", function () {
        var e,
          t = $("#map-top10s input:checkbox").index(this),
          n = $(this).val(),
          i = VL.map.ourMarkers[n];
        if (void 0 !== i && i instanceof Array && 0 < i.length)
          if ($(this).is(":checked"))
            for (e = 0; e < i.length; e++) i[e].addTo(VL.map.theMap);
          else for (e = 0; e < i.length; e++) i[e].remove();
        else
          (VL.map.ourMarkers[n] = []),
            (r.points = r.points || []),
            (r.points.length = 0),
            (r.pointsid = r.category = n),
            (r.pinColour = VL.map.pinColours[t % a]),
            n.includes("taylor-trail")
              ? (r.markerElement = $(this).prev("img").clone()[0])
              : (r.markerElement = null),
            VL.map.makePoints(o, r);
      }),
      VL.util.queryParam("map"));
  (e
    ? $("#map-top10s input[value=points-" + e + "]")
    : "true" == $("#" + o).attr("data-showall")
    ? $("#map-top10s input:checkbox")
    : $("#map-top10s input:checkbox").first()
  ).click();
}),
  (VL.map.createPin = function (e) {
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" height="41" width="27"><g transform="translate(3 29)"><ellipse opacity=".04" cx="10.5" cy="5.8" rx="10.5" ry="5.25"/><ellipse opacity=".04" cx="10.5" cy="5.8" rx="10.5" ry="5.25"/><ellipse opacity=".04" cx="10.5" cy="5.8" rx="9.5" ry="4.773"/><ellipse opacity=".04" cx="10.5" cy="5.8" rx="8.5" ry="4.295"/><ellipse opacity=".04" cx="10.5" cy="5.8" rx="7.5" ry="3.818"/><ellipse opacity=".04" cx="10.5" cy="5.8" rx="6.5" ry="3.341"/><ellipse opacity=".04" cx="10.5" cy="5.8" rx="5.5" ry="2.864"/><ellipse opacity=".04" cx="10.5" cy="5.8" rx="4.5" ry="2.386"/></g><path d="M27 13.5c0 5.575-6.75 13.5-12.25 21-.733 1-1.767 1-2.5 0C6.75 27 0 19.223 0 13.5 0 6.044 6.044 0 13.5 0S27 6.044 27 13.5z" fill="#' +
      e +
      '"/><path d="M13.5 0C6.044 0 0 6.044 0 13.5c0 5.723 6.75 13.5 12.25 21 .75 1.023 1.767 1 2.5 0C20.25 27 27 19.075 27 13.5 27 6.044 20.956 0 13.5 0zm0 1C20.415 1 26 6.585 26 13.5c0 2.399-1.504 5.681-3.78 9.238-2.274 3.557-5.515 7.404-8.277 11.17-.2.273-.33.415-.443.533a4.934 4.934 0 0 1-.443-.533c-2.773-3.78-5.642-7.594-8.041-11.135C2.616 19.233 1 15.953 1 13.5 1 6.585 6.585 1 13.5 1z" opacity=".25"/><g transform="translate(8 8)"><circle opacity=".25" cx="5.5" cy="5.5" r="5.5"/><circle fill="#FFF" cx="5.5" cy="5.5" r="5.5"/></g></svg>'
    );
  }),
  (function () {
    "use strict";
    $(".launch-image").each(function () {
      var e = $(this),
        i = e.attr("href");
      e.removeAttr("href").off("click"),
        e.on("click", function (e) {
          e.preventDefault();
          var e = $("<img/>").attr({ src: i, class: "overlay-image" }),
            t = $("<div/>"),
            n = $(
              '<a href="#" id="overlay-close" class="close image-close" title="' +
                VL.copy.close +
                '">&times;</a>'
            );
          t.html(e).prepend(n),
            VL.ui.overlay.show("video-player image-viewer"),
            $("#overlay-contents").html(t);
        });
    });
  })(),
  (VL.video = {}),
  (VL.video.loadYouTubeAPI = function () {
    $script("https://www.youtube.com/iframe_api", "ytapi");
  }),
  (VL.video.loadVimeoAPI = function () {
    $script("https://player.vimeo.com/api/player.js", "vimapi");
  }),
  (function (a) {
    a.fn.doYouTube = function (o, r) {
      return this.each(function () {
        var e = a(this),
          t = e.data(),
          n = "4x3" !== t.youtubeformat,
          i = a(
            '<iframe loading="lazy" width="640" frameborder="0" allowfullscreen></iframe>'
          );
        t.autoplay && (r = !0),
          (ytSrc = t.youtubechannelid
            ? "https://www.youtube.com/embed/live_stream?channel=" +
              t.youtubechannelid +
              "&enablejsapi=1"
            : "https://www.youtube.com/embed/" +
              t.youtubeid +
              "?wmode=transparent&rel=0&enablejsapi=1&cc_lang_pref=" +
              a("html").attr("lang")),
          a(window).width() < 755 &&
          (0 < e.parents(".article-body .panel").length ||
            0 < e.parents(".article-body section").length)
            ? e.addClass("mobile-hidden-video")
            : (e.removeClass("mobile-hidden-video"),
              t.youtubestart &&
                0 < t.youtubestart &&
                (ytSrc += "&start=" + t.youtubestart),
              t.youtubeend &&
                0 < t.youtubeend &&
                (ytSrc += "&end=" + t.youtubeend),
              "True" === t.youtubecc && (ytSrc += "&cc_load_policy=1"),
              r && (ytSrc += "&autoplay=1"),
              i.attr("src", ytSrc),
              i.attr("height", function () {
                return n ? 360 : 480;
              }),
              e.addClass("video-container").addClass(function () {
                return n ? "ar169" : "ar43";
              }),
              (e.is("figure.hero") || e.parent("figure.hero").length) &&
                a("figure.hero")
                  .addClass("sl-align")
                  .append(
                    '<a class="skip-link" href="https://www.youtube.com/watch?v=' +
                      t.youtubeid +
                      '#player">' +
                      VL.copy.watchOnYouTube +
                      "</a>"
                  ),
              e.empty().append(i),
              o && VL.stats.trackYouTube.add(i));
      });
    };
  })(jQuery),
  (function (o) {
    o.fn.doVimeo = function () {
      return this.each(function () {
        var e = o(this),
          t =
            "https://player.vimeo.com/video/" +
            e.attr("data-vimeoid") +
            "?title=0&amp;byline=0&amp;portrait=0",
          n = "16x9" === e.attr("data-youtubeformat"),
          i = o(
            '<iframe width="640" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
          );
        i.attr("height", function () {
          return n ? 360 : 480;
        }),
          i.attr("src", t),
          e
            .addClass("video-container")
            .addClass(function () {
              return n ? "ar169" : "ar43";
            })
            .empty()
            .append(i),
          o("figure.hero")
            .addClass("sl-align")
            .append(
              '<a class="skip-link" href="https://vimeo.com/' +
                e.attr("data-vimeoid") +
                '#content">' +
                VL.copy.watchOnVimeo +
                "</a>"
            );
      });
    };
  })(jQuery),
  (function (n) {
    n.fn.fetchVimeoThumbnail = function () {
      return this.each(function () {
        var t = n(this),
          e =
            (e = t.attr("data-vimeo")) &&
            t.parents("a").attr("href").split(".com/")[1];
        n.ajax({
          type: "GET",
          url: "https://vimeo.com/api/v2/video/" + e + ".json",
          jsonp: "callback",
          dataType: "jsonp",
          success: function (e) {
            e = e[0].thumbnail_large;
            t.attr("src", e);
          },
        });
      });
    };
  })(jQuery),
  (function (r) {
    (VL.video.popup = (function () {
      "use strict";
      r(".launch-video").length &&
        r(".launch-video").each(function () {
          var o,
            e = r(this);
          e.hasClass("launch-youtube") && (o = "youtube"),
            "youtube" == (o = e.hasClass("launch-vimeo") ? "vimeo" : o) &&
              VL.video.loadYouTubeAPI(),
            e.removeAttr("href").off("click"),
            e.on("click", function (e) {
              e.preventDefault();
              var e = r(this),
                t = r("<div/>").attr({
                  "data-youtubeformat": e.data("youtubeformat"),
                  class: "video",
                }),
                n = r("<div/>"),
                i = r(
                  '<a href="#" id="overlay-close" class="close video-close" title="' +
                    VL.copy.close +
                    '">&times;</a>'
                );
              "youtube" == o &&
                t.attr({ "data-youtubeid": e.data("youtubeid") }),
                "vimeo" == o && t.attr({ "data-vimeoid": e.data("vimeoid") }),
                n.html(t).prepend(i),
                VL.ui.overlay.show("video-player"),
                r("#overlay-contents").html(n),
                "youtube" == o &&
                  (r("#overlay-contents").find(".video").doYouTube(!0),
                  e.data("playcounter")) &&
                  VL.video.videoViewsCalc(e, VL.video.addViewsCounter),
                "vimeo" == o &&
                  r("#overlay-contents").find(".video").doVimeo(!0);
            }),
            -1 != window.location.search.indexOf("video=") &&
              r(".launch-video:first").click();
        });
    })()),
      (VL.video.videoViewsCalc = function (e, t) {
        "use strict";
        var n = e.data("videoViews") || 0,
          i = e.data("manualplaycounter"),
          o = {
            part: "statistics",
            id: e.data("youtubeid"),
            key: "AIzaSyAng8pY3LVSbfPrQn2h7nbB8ILlrr4fRwg",
          };
        t && 0 < n
          ? t(n)
          : r
              .when(
                r.getJSON(
                  "https://www.googleapis.com/youtube/v3/videos",
                  o,
                  function (e) {
                    n += parseInt(e.items[0].statistics.viewCount, 10);
                  }
                ),
                r.ajax({
                  type: "GET",
                  url:
                    "https://cdn.londonandpartners.com/plays?_=" +
                    VL.currentDate.getMonth().toString() +
                    VL.currentDate.getDate().toString() +
                    VL.currentDate.getHours().toString(),
                  async: !1,
                  cache: !0,
                  jsonpCallback: "getCount",
                  contentType: "application/javascript",
                  dataType: "jsonp",
                  success: function (e) {
                    n += parseInt(e[i], 10);
                  },
                })
              )
              .then(function () {
                t && 0 < n && t(n), e.data("videoViews", n);
              });
      }),
      (VL.video.addViewsCounter = function (e, t) {
        "use strict";
        t = t || 5e3;
        (loc = VL.locale.replace("_", "-")),
          t <= e &&
            r("#overlay-contents").append(
              '<span class="video-plays">' +
                e.toLocaleString(loc) +
                " " +
                VL.copy.views +
                "</span>"
            );
      });
  })(jQuery),
  (function (e) {
    "use strict";
    (e(".youtubevideo").length ||
      e(".slideshow-menu .video").length ||
      e(".gallery-menu .video").length ||
      e(".youtubeThumbnail").length) &&
      (VL.video.loadYouTubeAPI(), e(".youtubevideo").doYouTube()),
      e(".vimeovideo").doVimeo(),
      e(".vimeo-thumbnail").fetchVimeoThumbnail();
  })(jQuery);
class ModalVideoPlayer {
  constructor() {
    document.querySelectorAll(".video-launcher").forEach(
      function (e) {
        const t = "A" == e.tagName.toUpperCase() ? e : e.querySelector("a");
        const n = (
          e.dataset.youtubeid ? e : e.querySelector("[data-youtubeid]")
        ).dataset;
        t &&
          n &&
          (t.addEventListener(
            "click",
            function (e) {
              return e.preventDefault(), this.playModalVideo(e, n, t), !1;
            }.bind(this)
          ),
          t.addEventListener(
            "keydown",
            function (e) {
              if (["Enter"].includes(e.code)) return e.preventDefault(), !1;
            }.bind(this)
          ),
          t.addEventListener(
            "keyup",
            function (e) {
              if (["Enter"].includes(e.code))
                return e.preventDefault(), this.playModalVideo(e, n, t), !1;
            }.bind(this)
          ),
          t.setAttribute("href", "#"));
      }.bind(this)
    );
  }
  playModalVideo(e, t, n) {
    e.preventDefault();
    e = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const i = document.createElement("div");
    i.classList.add("modal-video-container"),
      e &&
        ((i.style.opacity = "0"),
        (i.style.transition = "opacity 0.3s ease-in-out")),
      document.body.appendChild(i);
    var o = document.createElement("div"),
      r =
        (o.setAttribute("tabindex", "0"),
        o.classList.add("close-button"),
        document.createElement("span")),
      r =
        (r.classList.add("icon-close"),
        o.appendChild(r),
        document.createElement("span")),
      a =
        (r.classList.add("close-caption"),
        i.appendChild(o),
        document.documentElement.lang.toLowerCase().substring(0, 2)),
      r =
        ((r.innerText = VL.copy.close),
        o.appendChild(r),
        i.appendChild(o),
        o.focus(),
        o.addEventListener(
          "click",
          function (e) {
            e.preventDefault(), this.closeModalVideo(i, n);
          }.bind(this)
        ),
        o.addEventListener(
          "keydown",
          function (e) {
            ["Space", "Enter", "Escape"].includes(e.code) && e.preventDefault();
          }.bind(this)
        ),
        o.addEventListener(
          "keyup",
          function (e) {
            ["Space", "Enter", "Escape"].includes(e.code) &&
              (e.preventDefault(), this.closeModalVideo(i, n));
          }.bind(this)
        ),
        document.createElement("div")),
      o =
        (r.classList.add("box-height"),
        i.appendChild(r),
        document.createElement("div"));
    if ((o.classList.add("box-width"), r.appendChild(o), e)) {
      (r = n.querySelector(".imgbox")), (e = (r || n).getBoundingClientRect());
      const l = o.getBoundingClientRect(),
        c = document.createElement("img");
      c.classList.add("hp-videoopen");
      r = n.querySelector("img");
      r
        ? (c.src = r.src)
        : (r = n.querySelector(".youtube-wrapper")) &&
          (c.src = r.style.backgroundImage.split('"')[1]),
        (c.style.position = "fixed"),
        (c.style.left = e.left + "px"),
        (c.style.top = e.top + "px"),
        (c.style.width = e.width + "px"),
        (c.style.height = e.height + "px"),
        (c.style.objectFit = "cover"),
        (c.style.zIndex = "3000"),
        (c.style.borderRadius = "20px"),
        c.src &&
          (document.body.appendChild(c),
          window.setTimeout(function () {
            (c.style.transition =
              "all 0.3s ease-out, opacity 0.3s ease-out 0.1s"),
              (c.style.left = l.left + "px"),
              (c.style.top = l.top + "px"),
              (c.style.width = l.width + "px"),
              (c.style.height = l.height + "px"),
              (c.style.opacity = "0"),
              (i.style.opacity = "1"),
              (c.style.borderRadius = "0"),
              window.setTimeout(() => c.remove(), 400);
          }, 50));
    }
    r = document.createElement("iframe");
    r.classList.add("video");
    let s = `https://www.youtube.com/embed/${t.youtubeid}?wmode=transparent&rel=0&enablejsapi=1&cc_lang_pref=${a}&autoplay=1`;
    0 < t.youtubestart && (s += "&start=" + t.youtubestart),
      0 < t.youtubeend && (s += "&start=" + t.youtubeend),
      "True" === t.youtubecc && (s += "&cc_load_policy=1"),
      r.setAttribute("allow", "autoplay"),
      (r.src = s),
      o.appendChild(r);
  }
  closeModalVideo(e, t) {
    var n = e.querySelector("iframe");
    n && ((n.src = ""), n.remove()), e.remove(), t.focus();
  }
}
function gtag() {
  dataLayer.push(arguments);
}
function implementExperimentNotForProfitMessage(e) {
  var t = Cookies.get("vl_nfpBarHidden"),
    n = Cookies.get("vl_nfpBadgeClosed"),
    i =
      '<div class="priority-message-bar not-for-profit"><div class="gw"><p><span class="svg icon-nfp-heart"></span> <b>We are not-for-profit.</b> <span>All purchases support London\'s jobs and economy.</span></p></div></div>',
    o =
      '<div class="page-badge not-for-profit' +
      (n ? " closed" : "") +
      '"><span class="svg icon-nfp-heart"></span><b>We are not-for-profit.</b> <span>All purchases support London\'s jobs and economy.</span></div>';
  $(document).ready(function () {
    "1" == e &&
      (755 < $(window).width()
        ? ($("main > .priority-message-bar").length &&
            $("main > .priority-message-bar").prependTo("body"),
          (VL.priorityMessageParent = $("body")),
          $("main").prepend(i))
        : t ||
          ($("body").append(i),
          $(window).on("scroll.nfpCheck", function () {
            300 < $(window).scrollTop() &&
              ($(window).off("scroll.nfpCheck"),
              $(".priority-message-bar.not-for-profit").toggleClass("closed"),
              Cookies.set("vl_nfpBarHidden", "true", { path: "/" }));
          }))),
      "2" == e &&
        (log("Badge"),
        log(o),
        $("body").append(o),
        $(".page-badge").on("click", function () {
          $(this).toggleClass("closed"),
            Cookies.set("vl_nfpBadgeClosed", "true", { path: "/" });
        }));
  });
}
"loading" == document.readyState
  ? document.addEventListener(
      "DOMContentLoaded",
      () => (window.mvp = new ModalVideoPlayer())
    )
  : (window.mvp = new ModalVideoPlayer()),
  (function (a) {
    (VL.tripAdvisor = {
      fetchReviews: function (o) {
        var e = location.protocol;
        let t = location.hostname;
        var e =
            e +
            "//" +
            (t = t.replace("local.", "www.")) +
            "/london/api/reviews/product/" +
            o.venueId,
          n = { source: "TripAdvisor" },
          r = "";
        (n.language = o.lang || "en"),
          a.getJSON(e, n, function (e) {
            var t, n, i;
            if (e.reviews.TripAdvisor && 0 !== e.reviews.TripAdvisor.length) {
              for (n = 0; n < e.reviews.TripAdvisor.length; n++)
                t = e.reviews.TripAdvisor[n];
              for (
                r =
                  "<h3>" +
                  VL.copy.TripAdvisor.latest(e.reviews.TripAdvisor.length) +
                  " " +
                  a("h1:first").text() +
                  "</h3>",
                  n = 0;
                n < e.reviews.TripAdvisor.length;
                n++
              )
                (i =
                  '<div class="gr cf hreview product-review tripadvisor-review"><div class="tripadvisor-review-info gc gs4"><img width="69" height="14" src="https://cdn.tripadvisor.com/img2/ratings/traveler/s' +
                  (i = (t = e.reviews.TripAdvisor[n]).Rating) +
                  '.0.svg" alt="' +
                  i +
                  '" title="' +
                  i +
                  " " +
                  VL.copy.TripAdvisor.outof5 +
                  '" /><span class="rating invisible">' +
                  VL.copy.TripAdvisor.rating +
                  " " +
                  i +
                  '</span><br/><abbr class="dtreviewed">' +
                  t.Created.substr(0, 10) +
                  '</abbr><div class="reviewer vcard">by <span class="fn">' +
                  t.Author +
                  '</span></div></div><div class="gc gs8 last"><h4 class="summary">' +
                  t.Title +
                  '</h4><div class="product-review-description tripadvisor-review-description description"><p>' +
                  VL.util.parseBreaks(t.Body) +
                  "</p>"),
                  (r += i += "</div></div></div>");
              a(".tripadvisor-reviews-wrapper").html(r);
            } else (r = '<p><a rel="external nofollow" href="https://www.tripadvisor.co.uk/UserReview-g186338-d' + o.taId + '?partnerReturnTo=[RETURNTO]">Be the first to write a review.</a></p>'), a("#ta-reviews").empty().append(r);
          });
      },
    }),
      a(".tripadvisor-reviews-wrapper").length &&
        a(".tripadvisor-reviews-loading-message").length &&
        location.pathname.split("/").slice(-1)[0] &&
        VL.tripAdvisor.fetchReviews({
          venueId: location.pathname
            .split("/")
            .slice(-1)[0]
            .match(/^(\d+)/)[0],
          taId: a(".tripadvisor-reviews").first().attr("data-taId"),
          lang: a("html").attr("lang"),
        });
  })(jQuery),
  gtag("event", "optimize.callback", {
    name: "ZtxIaRPnReavJrs7zNk7qQ",
    callback: implementExperimentNotForProfitMessage,
  });
class VLProductBookingCalendar {
  constructor() {
    this.tryLoad();
  }
  tryLoad() {
    const e = this;
    if (((this.loaded = !1), 0 == $(".product-page-content").length)) return !1;
    var t = $('script:contains("product_category")');
    if (0 == t.length) return !1;
    (t = t[0].innerText),
      (t = Array.from(t.matchAll(/'product_category':'(.*?)'/g)));
    if (0 == t.length) return !1;
    if (
      ((this.category = t[0][1]), this.category.startsWith("/dersim-stiftung"))
    )
      return !1;
    if (
      ((this.bookingBox = document.querySelector(".product-booking-box")),
      !this.bookingBox)
    )
      return !1;
    if (
      ((this.bookingButton = this.bookingBox.querySelector(
        ".product-info-booking span a"
      )),
      !this.bookingButton)
    )
      return !1;
    if (
      ((this.bookingLink = this.bookingButton.href.split("?")[0]),
      !this.bookingLink.startsWith("https://tickets.london/"))
    )
      return !1;
    if (this.bookingLink.includes("/gt/")) return !1;
    this.bookingLink = this.bookingLink.slice(22);
    location.pathname;
    (this.calBoxOuter = document.createElement("div")),
      this.calBoxOuter.classList.add("calbox-outer"),
      (this.calBoxInner = document.createElement("div")),
      (this.calBoxInner.classList = "calbox-inner"),
      (this.calBoxInner.id = "calbox"),
      document.body.appendChild(this.calBoxOuter),
      this.calBoxOuter.appendChild(this.calBoxInner),
      (this.observer = new MutationObserver(this.domChanged.bind(this))),
      this.observer.observe(this.calBoxInner, { childList: !0, subtree: !0 }),
      $.getScript(
        "https://www.seetickets.com/content/simple-calendar-widget-js",
        function () {
          simpleCalendarWidget.init({
            hostName: "https://tickets.london",
            culture: VL.lang,
            resultContainerId: e.calBoxInner.id,
            useDefaultStyle: !1,
            offerCode: null,
            tourUrl: e.bookingLink,
          });
        }
      );
  }
  domChanged(e, t) {
    for (const s of e) {
      for (const l of s.removedNodes)
        l.nodeType == Node.ELEMENT_NODE &&
          "tooltip-row" == l.id &&
          this.onResize();
      for (const c of s.addedNodes)
        if (c.nodeType == Node.ELEMENT_NODE) {
          c.classList.contains("see-error") &&
            this.loadFailed("Calendar widget loader returned an error"),
            c.classList.contains("year") &&
              (this.loaded
                ? this.onResize()
                : ((this.loaded = !0), this.loadComplete())),
            c.classList.contains("calendar") &&
              (n = this.calBoxOuter.querySelector(".calbox-focus-target")) &&
              n.focus();
          var n = c.querySelectorAll(".multipleEventButton");
          for (const d of n) {
            d.parentElement.setAttribute("no-mousedown", "true");
            var i = d.querySelector("p");
            let e = i.innerText;
            (e = `<span class='time'>${e.slice(
              0,
              5
            )}</span><span class='etc'>${e.slice(5)}</span>`),
              (i.innerHTML = e);
          }
          var o = c.querySelector("#simple-calendar-tooltip");
          if (o) {
            var r = document.createElement("div"),
              a =
                (r.classList.add("tt-prev"),
                o.appendChild(r),
                document.createElement("div"));
            a.classList.add("tt-next"), o.appendChild(a);
            const u = o.querySelector(
              "#simple-calendar-tooltip-events-container"
            );
            r.addEventListener("click", () => {
              u.scrollTo({
                left: u.scrollLeft - 162,
                top: 0,
                behavior: "smooth",
              }),
                this.scrolled();
            }),
              a.addEventListener("click", () => {
                u.scrollTo({
                  left: u.scrollLeft + 162,
                  top: 0,
                  behavior: "smooth",
                }),
                  this.scrolled();
              }),
              u.addEventListener("scroll", this.scrolled.bind(this)),
              this.scrolled();
          }
          if ("TABLE" == c.tagName) {
            for (const p of c.querySelectorAll(".day.has-event a"))
              p.setAttribute("no-mousedown", "true");
            const h = c.querySelectorAll(".simple-calendar-has-tooltip");
            for (const f of h)
              f.setAttribute("tabindex", "0"),
                f.addEventListener("keyup", function (e) {
                  "Enter" == e.key && f.click();
                }),
                f.addEventListener("click", function (e) {
                  h.forEach((e) => e.classList.remove("selected")),
                    f.classList.add("selected");
                });
          }
          "tooltip-row" == c.id && this.onResize();
        }
      0 === s.target.childNodes.length && t.disconnect();
    }
  }
  scrolled() {
    var e = document.querySelector("#simple-calendar-tooltip-events-container"),
      t = document.querySelector(".tt-prev"),
      n = document.querySelector(".tt-next"),
      i = e.scrollLeft,
      e = e.scrollWidth - e.offsetWidth;
    (t.style.display = 0 == i ? "none" : "block"),
      (n.style.display = i == e ? "none" : "block");
  }
  onResize() {
    var e, t, n;
    this.loaded &&
      ((e = this.mobile),
      (this.mobile = innerWidth < 660),
      this.mobile != e &&
        (this.mobile ? this.inlineContainer : this.modalContainer).appendChild(
          this.calBoxOuter
        ),
      (t =
        (e = document.querySelector(".calendar-container")).scrollWidth /
        e.scrollHeight),
      (n = (document.body.clientWidth - 20) / e.scrollWidth),
      (n = Math.min(n, 1)),
      (e.style.transformOrigin = "left top"),
      (e.style.transform = `scale(${n})`),
      (this.calBoxInner.style.height =
        Math.floor((e.scrollWidth / t) * n) + "px"),
      (this.calBoxInner.style.width =
        Math.floor(e.scrollWidth * n - 1) + "px"));
  }
  bookingButtonClick(e) {
    e && e.preventDefault(),
      innerWidth < 660
        ? this.calBoxOuter.scrollIntoView({ block: "center" })
        : this.openModal();
  }
  openModal() {
    this.modalContainer.style.display = "flex";
  }
  closeModal() {
    this.modalContainer.style.display = "none";
  }
  loadFailed(e) {
    console.log(e), this.calBoxOuter.remove();
  }
  loadComplete() {
    if (0 == this.calBoxInner.querySelectorAll(".day.has-event").length)
      this.loadFailed("Calendar data not valid - has no bookable dates");
    else {
      for (const t of this.calBoxInner.querySelectorAll(".costsmall")) {
        let e = t.innerText;
        if ((e = e.split("."))[1] && 2 < e[1].length)
          return void this.loadFailed(
            "Calendar data not valid - prices not rounded"
          );
      }
      this.loadSuccess();
    }
  }
  loadSuccess() {
    ($.fx.off = !0),
      (this.inlineContainer = document.createElement("div")),
      this.inlineContainer.classList.add("calbox-inline"),
      document
        .querySelector(".product-booking-box")
        .after(this.inlineContainer),
      (this.modalContainer = document.createElement("div")),
      this.modalContainer.classList.add("calbox-modal"),
      document.body.appendChild(this.modalContainer),
      (this.focusTarget = document.createElement("span")),
      this.focusTarget.setAttribute("tabindex", "0"),
      this.focusTarget.classList.add("calbox-focus-target"),
      this.calBoxOuter.insertBefore(this.focusTarget, this.calBoxInner),
      (this.closeButton = document.createElement("div")),
      this.closeButton.classList.add("calbox-close"),
      this.closeButton.addEventListener("click", this.closeModal.bind(this)),
      this.calBoxOuter.appendChild(this.closeButton),
      this.bookingButton.addEventListener(
        "click",
        this.bookingButtonClick.bind(this)
      );
    var e = {
      en: "Check<br>availability",
      fr: "Vérifier la<br>disponibilité",
      de: "Verfügbarkeit<br>prüfen",
      es: "Consultar<br>disponibilidad",
      it: "Verificare la<br>disponibilità",
    }[VL.lang.toLowerCase().slice(0, 2)];
    this.bookingButton.setAttribute("title", e.replace("<br>", " ")),
      (this.bookingButton.querySelector("span").innerHTML = "" + e),
      window.addEventListener("resize", this.onResize.bind(this)),
      this.onResize();
  }
}
var vlcal = null;
function vlABMoveNewsletterForm() {
  var t = document.querySelector("#lp-form-placeholder, #hp-form-placeholder");
  if (t) {
    var n = document.querySelector(".dynamic-form");
    if (n) {
      let e = n;
      for (; e && "H2" != e.tagName; ) e = e.previousElementSibling;
      e && t.appendChild(e);
      var i = document.querySelector(".hp-newsletter-sub .desc"),
        i =
          (i && t.appendChild(i),
          t.appendChild(n),
          (t.id = ""),
          n.querySelector(".checkbox")),
        t =
          (i &&
            ((t = i.querySelector("label")) && i.appendChild(t),
            (i = document.querySelector("p.privacy"))) &&
            n.querySelector(".checkbox").after(i),
          n.querySelector("input[type='email']")),
        i = t.previousElementSibling,
        t =
          (t && i && t.setAttribute("placeholder", i.innerText),
          n.querySelector("button"));
      t &&
        (t.classList.add("hover-arrow", "red"),
        (i = document.createElement("span")).appendChild(t.firstChild),
        t.appendChild(i));
    }
  }
}
function vlhpInitDropdownScroll() {
  var e = document.querySelector(".hp-hero-section details");
  e && e.addEventListener("toggle", vlhpDropdownScroll);
}
function vlhpDropdownScroll(e) {
  e.target.hasAttribute("open") &&
    e.target.parentElement
      .querySelector(".listbox")
      .scrollIntoView({ behavior: "smooth", block: "nearest" });
}
function vlhpFormatDdMmYyyy(e) {
  var t = e.getFullYear(),
    n = ("0" + (e.getMonth() + 1)).slice(-2);
  return ("0" + e.getDate()).slice(-2) + `-${n}-` + t;
}
function vlhpFixDateLinks() {
  var n = document.querySelector('li a[href="weekend"]');
  if (n) {
    let e = new Date(),
      t = new Date();
    var i = e.getDay();
    0 != i &&
      (i < 6 && (e.setDate(e.getDate() + (6 - i)), t.setMonth(e.getMonth())),
      t.setDate(e.getDate() + 1)),
      (e = vlhpFormatDdMmYyyy(e)),
      (t = vlhpFormatDdMmYyyy(t)),
      n.setAttribute(
        "href",
        `https://www.visitlondon.com/search/events?from=${e}&to=` + t
      );
  }
  var i = document.querySelector('li a[href="week"]'),
    n =
      (i &&
        ((start = new Date()),
        (end = new Date()).setDate(start.getDate() + 6),
        (start = vlhpFormatDdMmYyyy(start)),
        (end = vlhpFormatDdMmYyyy(end)),
        i.setAttribute(
          "href",
          `https://www.visitlondon.com/search/events?from=${start}&to=` + end
        )),
      document.querySelector('li a[href="month"]')),
    n =
      (n &&
        ((i = (start = new Date())
          .toLocaleString("en-GB", { month: "long" })
          .toLowerCase()),
        n.setAttribute(
          "href",
          "https://www.visitlondon.com/things-to-do/london-by-month/" + i
        )),
      document.querySelector('li a[href="season"]'));
  if (n) {
    (start = new Date()), (end = new Date());
    var i = 1 + start.getMonth(),
      t = Math.floor(i / 3) % 4,
      o = 3 * t + 3;
    let e = start.getFullYear();
    o < i && ++e,
      end.setFullYear(e),
      end.setMonth(o - 1),
      end.setDate(0),
      (start = vlhpFormatDdMmYyyy(start)),
      (end = vlhpFormatDdMmYyyy(end));
    i = ["winter", "spring", "summer", "autumn"][t];
    (n.innerText = "This " + i),
      n.setAttribute(
        "href",
        `https://www.visitlondon.com/things-to-do/${i}-in-london`
      );
  }
}
function vlhpInitHoverAnimations() {
  document
    .querySelectorAll(".hp-row6-categories.large a")
    .forEach(function (e) {
      const t = e.querySelector(".anim lottie-player");
      t &&
        (e.addEventListener("mouseover", function () {
          !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
            window.matchMedia("(min-width: 1020px)").matches &&
            t.play();
        }),
        e.addEventListener("mouseout", function () {
          !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
            window.matchMedia("(min-width: 1020px)").matches &&
            t.stop();
        }));
    });
  const i = document.querySelectorAll(
    ".hp-row6-categories.large .usemobanim .mobanim .lottie"
  );
  for (let n = 0; n < i.length; n++) {
    const o = i[n];
    o.removeAttribute("loop"),
      o.removeAttribute("autoplay"),
      o.addEventListener("complete", function () {
        o.stop();
        let e = Math.floor(Math.random() * (i.length - 1));
        e >= n && ++e;
        const t = i[e];
        window.setTimeout(() => t.play(), 300);
      });
  }
  i.length &&
    window.addEventListener("load", function () {
      i[0].play();
    });
}
function vlCurrencySwitcherSetup() {
  document.querySelectorAll(".currency-switcher-hook").forEach(function (e) {
    const t = e.dataset.currencyCode;
    e.addEventListener("click", function (e) {
      e.preventDefault(),
        Cookies.set("currencyInfo", "currencyCode=" + t, { expires: 1 }),
        window.location.reload();
    });
  });
}
function vlABInit() {
  vlABMoveNewsletterForm(),
    vlhpInitDropdownScroll(),
    vlhpFixDateLinks(),
    vlhpInitHoverAnimations(),
    vlCurrencySwitcherSetup();
}
function vlShowImageSizes() {
  $("img,div,span").each(function (e, t) {
    if ("IMG" == t.tagName) {
      var n = "lazy" == t.getAttribute("loading") ? "#8F8" : "#F82",
        n = $(
          `<span style="position: relative; top: -21px; background-color: ${n}; color: #000">${t.naturalWidth}x${t.naturalHeight}</span>`
        );
      $(t).after(n);
    } else if (t.style.backgroundImage) {
      n = t.style.backgroundImage.replace(/(?:^url\(["']?|["']?\)$)/g, "");
      const i = new Image();
      (i.onload = function () {
        var e = $(
          `<span style="position: absolute; display: block; background-color: #FF8; color: #000">${i.width}x${i.height}</span>`
        );
        $(t).prepend(e);
      }),
        (i.src = n);
    }
  });
}
window.location.search.includes("caltest") &&
  $(function () {
    vlcal = new VLProductBookingCalendar();
  }),
  "loading" == document.readyState
    ? document.addEventListener("DOMContentLoaded", vlABInit)
    : vlABInit(),
  (VL.lang = "en"),
  (VL.locale = "en_GB"),
  (VL.monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]),
  (VL.monthNamesShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]),
  (VL.dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]),
  (VL.dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]),
  (VL.dayNamesMin = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]),
  (VL.expediaDateFormat = "m/d/yy"),
  (VL.copy = {
    views: "views",
    mapView: "Map view",
    hideSearch: "Hide Search options",
    showSearch: "Show Search options",
    ageOfChildren: "Age of children",
    advertisement: "Advertisement",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    current: "Current",
    newWindow: "Link will open in a new window",
    adults: "Adults:",
    children: "Children:",
    room: "Room",
    selectArea: "Please select an area",
    allCentral: "All Central London",
    allNorth: "All North London",
    allEast: "All East London",
    allSouth: "All South London",
    allWest: "All West London",
    orArea: "Or search by area",
    orPostcode: "Or search by postcode",
    orDates: "Or search specific dates",
    orPeriod: "Or search date period",
    all: "All ",
    no: "No",
    yes: "Yes",
    orSearchIdeas: "Or search visitlondon.com for ideas",
    pleaseChoose: "Please choose an option above",
    or: "or",
    tripsAdd: "Add another trip",
    trip: "Trip ",
    remove: "Remove",
    edit: "edit",
    hide: "hide",
    update: "Update",
    save: "Save",
    close: "Close",
    logout: "Sign Out",
    TripAdvisor: {
      outof5: "out of 5",
      latest: function (e) {
        return "Latest " + e + " reviews of ";
      },
      rating: "Rating: ",
    },
    thisWeekend: "This Weekend",
    nextWeekend: "Next Weekend",
    today: "Today",
    errors: {
      heading: "Sorry, something went wrong",
      http403: "You don't have permission to do that.",
      http404: "The list you were trying to update couldn't be found.",
      http500: "The server couldn't process your request.",
      "country.empty": "Please select a country",
      "country.malformed": "Please select a country",
      "score.empty": "Please select a rating",
      "password.empty": "Please enter a password",
      "email.empty": "Please enter an email address",
      "email.malformed": "Please enter a valid email address",
      "email.exists":
        'Email address already registered. Please sign in or <a href="/forgot-password">request a new password</a>',
      "login.failed": "Sorry, your email address and password don't match",
      "name.empty": "Please enter a name for your list",
      "alias.empty": "Please enter a username",
      "login.required": "Please sign in",
      "1.arrival.invalid": "Please select a future date for your arrival",
      "1.departure.invalid": "Please select a future date for your departure",
    },
    preferences: "My London",
    continueBrowsing: "Continue Browsing",
    reg: {
      country: "Country of residence",
      heading: "Free London guide book ",
      desc: "Get discounts, things to do ideas and free maps in the London Planner guide.",
      login: {
        title: "Sign in to visitlondon.com:",
        heading: "Sign in to visitlondon.com",
        emailLabel: "Email address",
        passwordLabel: "Password",
        submit: "Sign in",
        forgotPassword: [
          "Forgotten your password or not yet created a password?",
          "Click here",
        ],
      },
      register: {
        title: "Sign up to visitlondon.com:",
        heading: "Join now",
        emailLabel: "Email address",
        passwordLabel: "Password",
        postcodeLabel: "Postcode",
        inLondonLabel: "I live in London",
        marketResearchLabel: "I want to participate in market research",
        marketingOptinLabel:
          "I want to receive news, inspiration, travel tips and great visitor offers!",
        newsletterTitle: "Newsletter sign up",
        confirm: [
          "By subscribing you agree to our",
          "Terms and Conditions",
          "and",
          "Privacy Policy",
          "",
        ],
        submit: "Subscribe",
        datesCopy: [
          "Trip Dates <em>(optional)</em>:",
          "Get offers, events &amp; ideas. We will email you just before you arrive.",
        ],
        interests: {
          heading: "What are you interested in? (tick all that apply)",
          attractions: "Attractions",
          shoppingNewsAndEvents: "Shopping",
          sportAndGettingActive: "Sport",
          eatingOut: "Food and Drink",
          theatreAndShows: "Theatre, musicals and shows",
          londonForChildrenAndFamilies: "Family",
          museums: "Museums",
          art: "Art",
          music: "Music",
          specialOffersAndLateDeals: "Special offers",
          accommodation: "Accommodation",
          cityBreaks: "City breaks",
          budget: "Budget",
          events: "Events",
        },
      },
      noAccount:
        'Already have an account? <a href="#login" class="login">Sign in</a>',
      hasAccount:
        'Don\'t have an account? <a href="#register" class="register">Sign up</a>',
    },
    confirm: {
      heading: "Thank you for registering",
      copy: "Your free London guide has been emailed to you. Don't forget to check your junk mail or spam folder.",
      arrivalForm: {
        heading1: "Get offers, events & ideas",
        heading2: "We will email you just before you arrive",
        tripsUrl: "/my-london/trips",
        fields: {
          arrival: "Planned arrival",
          arrivalExperiment: "Arrival",
          departure: "Planned departure",
          departureExperiment: "Departure",
          unsureLabel: "I'm not sure yet",
          button: "Submit",
        },
        confirm: {
          header: "<h2>Enjoy your trip!</h2>",
          copy: '<p>Thanks for submitting - you can <a href="/my-london/trips">alter your dates here</a></p><p><a href="/my-london/interests">Tell us what interests you</a> so we can send you relevant ideas, events and offers</p>',
        },
      },
      noMarket: {
        heading: "You're all set",
        copy: "Your free London guide is waiting.",
        link: "Download the guide now!",
      },
    },
    spinner: "Please Wait...",
    mapSpinner: "Loading Locations...",
    facebookApiUrl: "https://connect.facebook.net/en_US/sdk.js",
    embedInfographic: "Embed Infographic",
    watchOnYouTube: "Watch on YouTube",
    watchOnVimeo: "Watch on Vimeo",
    thumbnailTitle: function (e, t) {
      return "Thumbnail " + e + " of " + t;
    },
    next: "Next",
    previous: "Previous",
    ticketsFrom: "Tickets from",
    pricesFrom: "Prices from",
    bookNow: "Book Now",
    free: "Free",
    cookies: {
      message:
        "Our website uses various cookies. These cookies allow us to distinguish you from other users of our website, which helps us to provide you with a good experience when you browse our website and also allows us to improve our site.",
      dismiss: "Agreed",
      link: "Read more about the types of cookies we use.",
      href: "/about-us/privacy?ref=cookie",
    },
    compChooseAnswer: "Please choose one or more options",
    affiliateMessage:
      "Content contains affiliate links, marked with asterisks (*). If you click through and make a purchase, Visit London receives a commission – every purchase supports London’s jobs and economy.",
  });
