"use strict";

function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(t) {
  return (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
    return _typeof2(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
  })(t);
}

var tns = function () {
  Object.keys || (Object.keys = function (t) {
    var e = [];

    for (var n in t) {
      Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
    }

    return e;
  }), "remove" in Element.prototype || (Element.prototype.remove = function () {
    this.parentNode && this.parentNode.removeChild(this);
  });

  var t = window,
      e = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function (t) {
    return setTimeout(t, 16);
  },
      n = window,
      i = n.cancelAnimationFrame || n.mozCancelAnimationFrame || function (t) {
    clearTimeout(t);
  };

  function o() {
    for (var t, e, n, i = arguments[0] || {}, o = 1, r = arguments.length; o < r; o++) {
      if (null !== (t = arguments[o])) for (e in t) {
        i !== (n = t[e]) && void 0 !== n && (i[e] = n);
      }
    }

    return i;
  }

  function r(t) {
    return 0 <= ["true", "false"].indexOf(t) ? JSON.parse(t) : t;
  }

  function a(t, e, n, i) {
    if (i) try {
      t.setItem(e, n);
    } catch (t) {}
    return n;
  }

  function u() {
    var t = document,
        e = t.body;
    return e || ((e = t.createElement("body")).fake = !0), e;
  }

  var l = document.documentElement;

  function s(t) {
    var e = "";
    return t.fake && (e = l.style.overflow, t.style.background = "", t.style.overflow = l.style.overflow = "hidden", l.appendChild(t)), e;
  }

  function c(t, e) {
    t.fake && (t.remove(), l.style.overflow = e, l.offsetHeight);
  }

  function f(t, e, n, i) {
    "insertRule" in t ? t.insertRule(e + "{" + n + "}", i) : t.addRule(e, n, i);
  }

  function d(t) {
    return ("insertRule" in t ? t.cssRules : t.rules).length;
  }

  function v(t, e, n) {
    for (var i = 0, o = t.length; i < o; i++) {
      e.call(n, t[i], i);
    }
  }

  var p = ("classList" in document.createElement("_")),
      m = p ? function (t, e) {
    return t.classList.contains(e);
  } : function (t, e) {
    return 0 <= t.className.indexOf(e);
  },
      h = p ? function (t, e) {
    m(t, e) || t.classList.add(e);
  } : function (t, e) {
    m(t, e) || (t.className += " " + e);
  },
      g = p ? function (t, e) {
    m(t, e) && t.classList.remove(e);
  } : function (t, e) {
    m(t, e) && (t.className = t.className.replace(e, ""));
  };

  function y(t, e) {
    return t.hasAttribute(e);
  }

  function x(t, e) {
    return t.getAttribute(e);
  }

  function b(t) {
    return void 0 !== t.item;
  }

  function w(t, e) {
    if (t = b(t) || t instanceof Array ? t : [t], "[object Object]" === Object.prototype.toString.call(e)) for (var n = t.length; n--;) {
      for (var i in e) {
        t[n].setAttribute(i, e[i]);
      }
    }
  }

  function C(t, e) {
    t = b(t) || t instanceof Array ? t : [t];

    for (var n = (e = e instanceof Array ? e : [e]).length, i = t.length; i--;) {
      for (var o = n; o--;) {
        t[i].removeAttribute(e[o]);
      }
    }
  }

  function T(t) {
    for (var e = [], n = 0, i = t.length; n < i; n++) {
      e.push(t[n]);
    }

    return e;
  }

  function M(t, e) {
    "none" !== t.style.display && (t.style.display = "none");
  }

  function E(t, e) {
    "none" === t.style.display && (t.style.display = "");
  }

  function L(t) {
    return "none" !== window.getComputedStyle(t).display;
  }

  function A(t) {
    if ("string" == typeof t) {
      var e = [t],
          n = t.charAt(0).toUpperCase() + t.substr(1);
      ["Webkit", "Moz", "ms", "O"].forEach(function (i) {
        "ms" === i && "transform" !== t || e.push(i + n);
      }), t = e;
    }

    for (var i = document.createElement("fakeelement"), o = (t.length, 0); o < t.length; o++) {
      var r = t[o];
      if (void 0 !== i.style[r]) return r;
    }

    return !1;
  }

  function S(t, e) {
    var n = !1;
    return /^Webkit/.test(t) ? n = "webkit" + e + "End" : /^O/.test(t) ? n = "o" + e + "End" : t && (n = e.toLowerCase() + "end"), n;
  }

  var B = !1;

  try {
    var N = Object.defineProperty({}, "passive", {
      get: function get() {
        B = !0;
      }
    });
    window.addEventListener("test", null, N);
  } catch (t) {}

  var _ = !!B && {
    passive: !0
  };

  function H(t, e, n) {
    for (var i in e) {
      var o = 0 <= ["touchstart", "touchmove"].indexOf(i) && !n && _;

      t.addEventListener(i, e[i], o);
    }
  }

  function k(t, e) {
    for (var n in e) {
      var i = 0 <= ["touchstart", "touchmove"].indexOf(n) && _;

      t.removeEventListener(n, e[n], i);
    }
  }

  function D() {
    return {
      topics: {},
      on: function on(t, e) {
        this.topics[t] = this.topics[t] || [], this.topics[t].push(e);
      },
      off: function off(t, e) {
        if (this.topics[t]) for (var n = 0; n < this.topics[t].length; n++) {
          if (this.topics[t][n] === e) {
            this.topics[t].splice(n, 1);
            break;
          }
        }
      },
      emit: function emit(t, e) {
        e.type = t, this.topics[t] && this.topics[t].forEach(function (n) {
          n(e, t);
        });
      }
    };
  }

  return function t(n) {
    n = o({
      container: ".slider",
      mode: "carousel",
      axis: "horizontal",
      items: 1,
      gutter: 0,
      edgePadding: 0,
      fixedWidth: !1,
      autoWidth: !1,
      viewportMax: !1,
      slideBy: 1,
      center: !1,
      controls: !0,
      controlsPosition: "top",
      controlsText: ["prev", "next"],
      controlsContainer: !1,
      prevButton: !1,
      nextButton: !1,
      nav: !0,
      navPosition: "top",
      navContainer: !1,
      navAsThumbnails: !1,
      arrowKeys: !1,
      speed: 300,
      autoplay: !1,
      autoplayPosition: "top",
      autoplayTimeout: 5e3,
      autoplayDirection: "forward",
      autoplayText: ["start", "stop"],
      autoplayHoverPause: !1,
      autoplayButton: !1,
      autoplayButtonOutput: !0,
      autoplayResetOnVisibility: !0,
      animateIn: "tns-fadeIn",
      animateOut: "tns-fadeOut",
      animateNormal: "tns-normal",
      animateDelay: !1,
      loop: !0,
      rewind: !1,
      autoHeight: !1,
      responsive: !1,
      lazyload: !1,
      lazyloadSelector: ".tns-lazy-img",
      touch: !0,
      mouseDrag: !1,
      swipeAngle: 15,
      nested: !1,
      preventActionWhenRunning: !1,
      preventScrollOnTouch: !1,
      freezable: !0,
      onInit: !1,
      useLocalStorage: !0
    }, n || {});
    var l = document,
        p = window,
        b = {
      ENTER: 13,
      SPACE: 32,
      LEFT: 37,
      RIGHT: 39
    },
        B = {},
        N = n.useLocalStorage;

    if (N) {
      var _ = navigator.userAgent,
          O = new Date();

      try {
        (B = p.localStorage) ? (B.setItem(O, O), N = B.getItem(O) == O, B.removeItem(O)) : N = !1, N || (B = {});
      } catch (_) {
        N = !1;
      }

      N && (B.tnsApp && B.tnsApp !== _ && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function (t) {
        B.removeItem(t);
      }), localStorage.tnsApp = _);
    }

    var I,
        R,
        P,
        z,
        W,
        q,
        F,
        j = B.tC ? r(B.tC) : a(B, "tC", function () {
      var t = document,
          e = u(),
          n = s(e),
          i = t.createElement("div"),
          o = !1;
      e.appendChild(i);

      try {
        for (var r, a = "(10px * 10)", l = ["calc" + a, "-moz-calc" + a, "-webkit-calc" + a], f = 0; f < 3; f++) {
          if (r = l[f], i.style.width = r, 100 === i.offsetWidth) {
            o = r.replace(a, "");
            break;
          }
        }
      } catch (t) {}

      return e.fake ? c(e, n) : i.remove(), o;
    }(), N),
        V = B.tPL ? r(B.tPL) : a(B, "tPL", function () {
      var t,
          e = document,
          n = u(),
          i = s(n),
          o = e.createElement("div"),
          r = e.createElement("div"),
          a = "";
      o.className = "tns-t-subp2", r.className = "tns-t-ct";

      for (var l = 0; l < 70; l++) {
        a += "<div></div>";
      }

      return r.innerHTML = a, o.appendChild(r), n.appendChild(o), t = Math.abs(o.getBoundingClientRect().left - r.children[67].getBoundingClientRect().left) < 2, n.fake ? c(n, i) : o.remove(), t;
    }(), N),
        Y = B.tMQ ? r(B.tMQ) : a(B, "tMQ", (R = document, z = s(P = u()), W = R.createElement("div"), F = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", (q = R.createElement("style")).type = "text/css", W.className = "tns-mq-test", P.appendChild(q), P.appendChild(W), q.styleSheet ? q.styleSheet.cssText = F : q.appendChild(R.createTextNode(F)), I = window.getComputedStyle ? window.getComputedStyle(W).position : W.currentStyle.position, P.fake ? c(P, z) : W.remove(), "absolute" === I), N),
        G = B.tTf ? r(B.tTf) : a(B, "tTf", A("transform"), N),
        Q = B.t3D ? r(B.t3D) : a(B, "t3D", function (t) {
      if (!t) return !1;
      if (!window.getComputedStyle) return !1;
      var e,
          n = document,
          i = u(),
          o = s(i),
          r = n.createElement("p"),
          a = 9 < t.length ? "-" + t.slice(0, -9).toLowerCase() + "-" : "";
      return a += "transform", i.insertBefore(r, null), r.style[t] = "translate3d(1px,1px,1px)", e = window.getComputedStyle(r).getPropertyValue(a), i.fake ? c(i, o) : r.remove(), void 0 !== e && 0 < e.length && "none" !== e;
    }(G), N),
        X = B.tTDu ? r(B.tTDu) : a(B, "tTDu", A("transitionDuration"), N),
        K = B.tTDe ? r(B.tTDe) : a(B, "tTDe", A("transitionDelay"), N),
        J = B.tADu ? r(B.tADu) : a(B, "tADu", A("animationDuration"), N),
        U = B.tADe ? r(B.tADe) : a(B, "tADe", A("animationDelay"), N),
        Z = B.tTE ? r(B.tTE) : a(B, "tTE", S(X, "Transition"), N),
        $ = B.tAE ? r(B.tAE) : a(B, "tAE", S(J, "Animation"), N),
        tt = p.console && "function" == typeof p.console.warn,
        et = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"],
        nt = {};

    if (et.forEach(function (t) {
      if ("string" == typeof n[t]) {
        var e = n[t],
            i = l.querySelector(e);
        if (nt[t] = e, !i || !i.nodeName) return void (tt && console.warn("Can't find", n[t]));
        n[t] = i;
      }
    }), !(n.container.children.length < 1)) {
      var it = n.responsive,
          ot = n.nested,
          rt = "carousel" === n.mode;

      if (it) {
        0 in it && (n = o(n, it[0]), delete it[0]);
        var at = {};

        for (var ut in it) {
          var lt = it[ut];
          lt = "number" == typeof lt ? {
            items: lt
          } : lt, at[ut] = lt;
        }

        it = at, at = null;
      }

      if (rt || function t(e) {
        for (var n in e) {
          rt || ("slideBy" === n && (e[n] = "page"), "edgePadding" === n && (e[n] = !1), "autoHeight" === n && (e[n] = !1)), "responsive" === n && t(e[n]);
        }
      }(n), !rt) {
        n.axis = "horizontal", n.slideBy = "page", n.edgePadding = !1;
        var st = n.animateIn,
            ct = n.animateOut,
            ft = n.animateDelay,
            dt = n.animateNormal;
      }

      var vt,
          pt,
          mt = "horizontal" === n.axis,
          ht = l.createElement("div"),
          gt = l.createElement("div"),
          yt = n.container,
          xt = yt.parentNode,
          bt = yt.outerHTML,
          wt = yt.children,
          Ct = wt.length,
          Tt = In(),
          Mt = !1;
      it && ni(), rt && (yt.className += " tns-vpfix");

      var Et,
          Lt,
          At,
          St,
          Bt,
          Nt,
          _t,
          Ht = n.autoWidth,
          kt = Wn("fixedWidth"),
          Dt = Wn("edgePadding"),
          Ot = Wn("gutter"),
          It = Pn(),
          Rt = Wn("center"),
          Pt = Ht ? 1 : Math.floor(Wn("items")),
          zt = Wn("slideBy"),
          Wt = n.viewportMax || n.fixedWidthViewportWidth,
          qt = Wn("arrowKeys"),
          Ft = Wn("speed"),
          jt = n.rewind,
          Vt = !jt && n.loop,
          Yt = Wn("autoHeight"),
          Gt = Wn("controls"),
          Qt = Wn("controlsText"),
          Xt = Wn("nav"),
          Kt = Wn("touch"),
          Jt = Wn("mouseDrag"),
          Ut = Wn("autoplay"),
          Zt = Wn("autoplayTimeout"),
          $t = Wn("autoplayText"),
          te = Wn("autoplayHoverPause"),
          ee = Wn("autoplayResetOnVisibility"),
          ne = (_t = document.createElement("style"), document.querySelector("head").appendChild(_t), _t.sheet ? _t.sheet : _t.styleSheet),
          ie = n.lazyload,
          oe = (n.lazyloadSelector, []),
          re = Vt ? (Bt = function () {
        if (Ht || kt && !Wt) return Ct - 1;
        var t = kt ? "fixedWidth" : "items",
            e = [];
        if ((kt || n[t] < Ct) && e.push(n[t]), it) for (var i in it) {
          var o = it[i][t];
          o && (kt || o < Ct) && e.push(o);
        }
        return e.length || e.push(0), Math.ceil(kt ? Wt / Math.min.apply(null, e) : Math.max.apply(null, e));
      }(), Nt = rt ? Math.ceil((5 * Bt - Ct) / 2) : 4 * Bt - Ct, Nt = Math.max(Bt, Nt), zn("edgePadding") ? Nt + 1 : Nt) : 0,
          ae = rt ? Ct + 2 * re : Ct + re,
          ue = !(!kt && !Ht || Vt),
          le = kt ? Bi() : null,
          se = !rt || !Vt,
          ce = mt ? "left" : "top",
          fe = "",
          de = "",
          ve = kt ? function () {
        return Rt && !Vt ? Ct - 1 : Math.ceil(-le / (kt + Ot));
      } : Ht ? function () {
        for (var t = ae; t--;) {
          if (Et[t] >= -le) return t;
        }
      } : function () {
        return Rt && rt && !Vt ? Ct - 1 : Vt || rt ? Math.max(0, ae - Math.ceil(Pt)) : ae - 1;
      },
          pe = kn(Wn("startIndex")),
          me = pe,
          he = (Hn(), 0),
          ge = Ht ? null : ve(),
          ye = n.preventActionWhenRunning,
          xe = n.swipeAngle,
          be = !xe || "?",
          we = !1,
          Ce = n.onInit,
          Te = new D(),
          Me = " tns-slider tns-" + n.mode,
          Ee = yt.id || (St = window.tnsId, window.tnsId = St ? St + 1 : 1, "tns" + window.tnsId),
          Le = Wn("disable"),
          Ae = !1,
          Se = n.freezable,
          Be = !(!Se || Ht) && ei(),
          Ne = !1,
          _e = {
        click: Pi,
        keydown: function keydown(t) {
          t = Gi(t);
          var e = [b.LEFT, b.RIGHT].indexOf(t.keyCode);
          0 <= e && (0 === e ? Ze.disabled || Pi(t, -1) : $e.disabled || Pi(t, 1));
        }
      },
          He = {
        click: function click(t) {
          if (we) {
            if (ye) return;
            Ii();
          }

          for (var e = Qi(t = Gi(t)); e !== on && !y(e, "data-nav");) {
            e = e.parentNode;
          }

          if (y(e, "data-nav")) {
            var n = ln = Number(x(e, "data-nav")),
                i = kt || Ht ? n * Ct / an : n * Pt;
            Ri(We ? n : Math.min(Math.ceil(i), Ct - 1), t), sn === n && (mn && ji(), ln = -1);
          }
        },
        keydown: function keydown(t) {
          t = Gi(t);
          var e = l.activeElement;

          if (y(e, "data-nav")) {
            var n = [b.LEFT, b.RIGHT, b.ENTER, b.SPACE].indexOf(t.keyCode),
                i = Number(x(e, "data-nav"));
            0 <= n && (0 === n ? 0 < i && Yi(nn[i - 1]) : 1 === n ? i < an - 1 && Yi(nn[i + 1]) : Ri(ln = i, t));
          }
        }
      },
          ke = {
        mouseover: function mouseover() {
          mn && (Wi(), hn = !0);
        },
        mouseout: function mouseout() {
          hn && (zi(), hn = !1);
        }
      },
          De = {
        visibilitychange: function visibilitychange() {
          l.hidden ? mn && (Wi(), yn = !0) : yn && (zi(), yn = !1);
        }
      },
          Oe = {
        keydown: function keydown(t) {
          t = Gi(t);
          var e = [b.LEFT, b.RIGHT].indexOf(t.keyCode);
          0 <= e && Pi(t, 0 === e ? -1 : 1);
        }
      },
          Ie = {
        touchstart: Ui,
        touchmove: Zi,
        touchend: $i,
        touchcancel: $i
      },
          Re = {
        mousedown: Ui,
        mousemove: Zi,
        mouseup: $i,
        mouseleave: $i
      },
          Pe = zn("controls"),
          ze = zn("nav"),
          We = !!Ht || n.navAsThumbnails,
          qe = zn("autoplay"),
          Fe = zn("touch"),
          je = zn("mouseDrag"),
          Ve = "tns-slide-active",
          Ye = "tns-complete",
          Ge = {
        load: function load(t) {
          fi(Qi(t));
        },
        error: function error(t) {
          var e;
          e = Qi(t), h(e, "failed"), di(e);
        }
      },
          Qe = "force" === n.preventScrollOnTouch;

      if (Pe) var Xe,
          Ke,
          Je = n.controlsContainer,
          Ue = n.controlsContainer ? n.controlsContainer.outerHTML : "",
          Ze = n.prevButton,
          $e = n.nextButton,
          tn = n.prevButton ? n.prevButton.outerHTML : "",
          en = n.nextButton ? n.nextButton.outerHTML : "";
      if (ze) var nn,
          on = n.navContainer,
          rn = n.navContainer ? n.navContainer.outerHTML : "",
          an = Ht ? Ct : eo(),
          un = 0,
          ln = -1,
          sn = On(),
          cn = sn,
          fn = "tns-nav-active",
          dn = "Carousel Page ",
          vn = " (Current Slide)";
      if (qe) var pn,
          mn,
          hn,
          gn,
          yn,
          xn = "forward" === n.autoplayDirection ? 1 : -1,
          bn = n.autoplayButton,
          wn = n.autoplayButton ? n.autoplayButton.outerHTML : "",
          Cn = ["<span class='tns-visually-hidden'>", " animation</span>"];
      if (Fe || je) var Tn,
          Mn,
          En = {},
          Ln = {},
          An = !1,
          Sn = mt ? function (t, e) {
        return t.x - e.x;
      } : function (t, e) {
        return t.y - e.y;
      };
      Ht || _n(Le || Be), G && (ce = G, fe = "translate", Q ? (fe += mt ? "3d(" : "3d(0px, ", de = mt ? ", 0px, 0px)" : ", 0px)") : (fe += mt ? "X(" : "Y(", de = ")")), rt && (yt.className = yt.className.replace("tns-vpfix", "")), function () {
        (zn("gutter"), ht.className = "tns-outer", gt.className = "tns-inner", ht.id = Ee + "-ow", gt.id = Ee + "-iw", "" === yt.id && (yt.id = Ee), Me += V || Ht ? " tns-subpixel" : " tns-no-subpixel", Me += j ? " tns-calc" : " tns-no-calc", Ht && (Me += " tns-autowidth"), Me += " tns-" + n.axis, yt.className += Me, rt ? ((vt = l.createElement("div")).id = Ee + "-mw", vt.className = "tns-ovh", ht.appendChild(vt), vt.appendChild(gt)) : ht.appendChild(gt), Yt) && ((vt || gt).className += " tns-ah");

        if (xt.insertBefore(ht, yt), gt.appendChild(yt), v(wt, function (t, e) {
          h(t, "tns-item"), t.id || (t.id = Ee + "-item" + e), !rt && dt && h(t, dt), w(t, {
            "aria-hidden": "true",
            tabindex: "-1"
          });
        }), re) {
          for (var t = l.createDocumentFragment(), e = l.createDocumentFragment(), i = re; i--;) {
            var o = i % Ct,
                r = wt[o].cloneNode(!0);

            if (C(r, "id"), e.insertBefore(r, e.firstChild), rt) {
              var a = wt[Ct - 1 - o].cloneNode(!0);
              C(a, "id"), t.appendChild(a);
            }
          }

          yt.insertBefore(t, yt.firstChild), yt.appendChild(e), wt = yt.children;
        }
      }(), function () {
        if (!rt) for (var t = pe, e = pe + Math.min(Ct, Pt); t < e; t++) {
          var i = wt[t];
          i.style.left = 100 * (t - pe) / Pt + "%", h(i, st), g(i, dt);
        }

        if (mt && (V || Ht ? (f(ne, "#" + Ee + " > .tns-item", "font-size:" + p.getComputedStyle(wt[0]).fontSize + ";", d(ne)), f(ne, "#" + Ee, "font-size:0;", d(ne))) : rt && v(wt, function (t, e) {
          var n;
          t.style.marginLeft = (n = e, j ? j + "(" + 100 * n + "% / " + ae + ")" : 100 * n / ae + "%");
        })), Y) {
          if (X) {
            var o = vt && n.autoHeight ? Gn(n.speed) : "";
            f(ne, "#" + Ee + "-mw", o, d(ne));
          }

          o = qn(n.edgePadding, n.gutter, n.fixedWidth, n.speed, n.autoHeight), f(ne, "#" + Ee + "-iw", o, d(ne)), rt && (o = mt && !Ht ? "width:" + Fn(n.fixedWidth, n.gutter, n.items) + ";" : "", X && (o += Gn(Ft)), f(ne, "#" + Ee, o, d(ne))), o = mt && !Ht ? jn(n.fixedWidth, n.gutter, n.items) : "", n.gutter && (o += Vn(n.gutter)), rt || (X && (o += Gn(Ft)), J && (o += Qn(Ft))), o && f(ne, "#" + Ee + " > .tns-item", o, d(ne));
        } else {
          gi(), gt.style.cssText = qn(Dt, Ot, kt, Yt), rt && mt && !Ht && (yt.style.width = Fn(kt, Ot, Pt));
          o = mt && !Ht ? jn(kt, Ot, Pt) : "";
          Ot && (o += Vn(Ot)), o && f(ne, "#" + Ee + " > .tns-item", o, d(ne));
        }

        if (it && Y) for (var r in it) {
          r = parseInt(r);
          var a = it[r],
              u = (o = "", ""),
              l = "",
              s = "",
              c = "",
              m = Ht ? null : Wn("items", r),
              y = Wn("fixedWidth", r),
              x = Wn("speed", r),
              b = Wn("edgePadding", r),
              w = Wn("autoHeight", r),
              C = Wn("gutter", r);
          X && vt && Wn("autoHeight", r) && "speed" in a && (u = "#" + Ee + "-mw{" + Gn(x) + "}"), ("edgePadding" in a || "gutter" in a) && (l = "#" + Ee + "-iw{" + qn(b, C, y, x, w) + "}"), rt && mt && !Ht && ("fixedWidth" in a || "items" in a || kt && "gutter" in a) && (s = "width:" + Fn(y, C, m) + ";"), X && "speed" in a && (s += Gn(x)), s && (s = "#" + Ee + "{" + s + "}"), ("fixedWidth" in a || kt && "gutter" in a || !rt && "items" in a) && (c += jn(y, C, m)), "gutter" in a && (c += Vn(C)), !rt && "speed" in a && (X && (c += Gn(x)), J && (c += Qn(x))), c && (c = "#" + Ee + " > .tns-item{" + c + "}"), (o = u + l + s + c) && ne.insertRule("@media (min-width: " + r / 16 + "em) {" + o + "}", ne.cssRules.length);
        }
      }(), Xn();
      var Bn = Vt ? rt ? function () {
        var t = he,
            e = ge;
        t += zt, e -= zt, Dt ? (t += 1, e -= 1) : kt && (It + Ot) % (kt + Ot) && (e -= 1), re && (e < pe ? pe -= Ct : pe < t && (pe += Ct));
      } : function () {
        if (ge < pe) for (; he + Ct <= pe;) {
          pe -= Ct;
        } else if (pe < he) for (; pe <= ge - Ct;) {
          pe += Ct;
        }
      } : function () {
        pe = Math.max(he, Math.min(ge, pe));
      },
          Nn = rt ? function () {
        var t, e, n, i, o, r, a, u, l, s, c;
        Ai(yt, ""), X || !Ft ? (Hi(), Ft && L(yt) || Ii()) : (t = yt, e = ce, n = fe, i = de, o = Ni(), r = Ft, a = Ii, u = Math.min(r, 10), l = 0 <= o.indexOf("%") ? "%" : "px", o = o.replace(l, ""), s = Number(t.style[e].replace(n, "").replace(i, "").replace(l, "")), c = (o - s) / r * u, setTimeout(function o() {
          r -= u, s += c, t.style[e] = n + s + l + i, 0 < r ? setTimeout(o, u) : a();
        }, u)), mt || to();
      } : function () {
        oe = [];
        var t = {};
        t[Z] = t[$] = Ii, k(wt[me], t), H(wt[pe], t), ki(me, st, ct, !0), ki(pe, dt, st), Z && $ && Ft && L(yt) || Ii();
      };
      return {
        version: "2.9.2",
        getInfo: io,
        events: Te,
        goTo: Ri,
        play: function play() {
          Ut && !mn && (Fi(), gn = !1);
        },
        pause: function pause() {
          mn && (ji(), gn = !0);
        },
        isOn: Mt,
        updateSliderHeight: xi,
        refresh: Xn,
        destroy: function destroy() {
          if (ne.disabled = !0, ne.ownerNode && ne.ownerNode.remove(), k(p, {
            resize: $n
          }), qt && k(l, Oe), Je && k(Je, _e), on && k(on, He), k(yt, ke), k(yt, De), bn && k(bn, {
            click: Vi
          }), Ut && clearInterval(pn), rt && Z) {
            var t = {};
            t[Z] = Ii, k(yt, t);
          }

          Kt && k(yt, Ie), Jt && k(yt, Re);
          var e = [bt, Ue, tn, en, rn, wn];

          for (var i in et.forEach(function (t, i) {
            var o = "container" === t ? ht : n[t];

            if ("object" == _typeof(o)) {
              var r = !!o.previousElementSibling && o.previousElementSibling,
                  a = o.parentNode;
              o.outerHTML = e[i], n[t] = r ? r.nextElementSibling : a.firstElementChild;
            }
          }), et = st = ct = ft = dt = mt = ht = gt = yt = xt = bt = wt = Ct = pt = Tt = Ht = kt = Dt = Ot = It = Pt = zt = Wt = qt = Ft = jt = Vt = Yt = ne = ie = Et = oe = re = ae = ue = le = se = ce = fe = de = ve = pe = me = he = ge = xe = be = we = Ce = Te = Me = Ee = Le = Ae = Se = Be = Ne = _e = He = ke = De = Oe = Ie = Re = Pe = ze = We = qe = Fe = je = Ve = Ye = Ge = Lt = Gt = Qt = Je = Ue = Ze = $e = Xe = Ke = Xt = on = rn = nn = an = un = ln = sn = cn = fn = dn = vn = Ut = Zt = xn = $t = te = bn = wn = ee = Cn = pn = mn = hn = gn = yn = En = Ln = Tn = An = Mn = Sn = Kt = Jt = null, this) {
            "rebuild" !== i && (this[i] = null);
          }

          Mt = !1;
        },
        rebuild: function rebuild() {
          return t(o(n, nt));
        }
      };
    }

    function _n(t) {
      t && (Gt = Xt = Kt = Jt = qt = Ut = te = ee = !1);
    }

    function Hn() {
      for (var t = rt ? pe - re : pe; t < 0;) {
        t += Ct;
      }

      return t % Ct + 1;
    }

    function kn(t) {
      return t = t ? Math.max(0, Math.min(Vt ? Ct - 1 : Ct - Pt, t)) : 0, rt ? t + re : t;
    }

    function Dn(t) {
      for (null == t && (t = pe), rt && (t -= re); t < 0;) {
        t += Ct;
      }

      return Math.floor(t % Ct);
    }

    function On() {
      var t,
          e = Dn();
      return t = We ? e : kt || Ht ? Math.ceil((e + 1) * an / Ct - 1) : Math.floor(e / Pt), !Vt && rt && pe === ge && (t = an - 1), t;
    }

    function In() {
      return p.innerWidth || l.documentElement.clientWidth || l.body.clientWidth;
    }

    function Rn(t) {
      return "top" === t ? "afterbegin" : "beforeend";
    }

    function Pn() {
      var t = Dt ? 2 * Dt - Ot : 0;
      return function t(e) {
        var n,
            i,
            o = l.createElement("div");
        return e.appendChild(o), i = (n = o.getBoundingClientRect()).right - n.left, o.remove(), i || t(e.parentNode);
      }(xt) - t;
    }

    function zn(t) {
      if (n[t]) return !0;
      if (it) for (var e in it) {
        if (it[e][t]) return !0;
      }
      return !1;
    }

    function Wn(t, e) {
      if (null == e && (e = Tt), "items" === t && kt) return Math.floor((It + Ot) / (kt + Ot)) || 1;
      var i = n[t];
      if (it) for (var o in it) {
        e >= parseInt(o) && t in it[o] && (i = it[o][t]);
      }
      return "slideBy" === t && "page" === i && (i = Wn("items")), rt || "slideBy" !== t && "items" !== t || (i = Math.floor(i)), i;
    }

    function qn(t, e, n, i, o) {
      var r = "";

      if (void 0 !== t) {
        var a = t;
        e && (a -= e), r = mt ? "margin: 0 " + a + "px 0 " + t + "px;" : "margin: " + t + "px 0 " + a + "px 0;";
      } else if (e && !n) {
        var u = "-" + e + "px";
        r = "margin: 0 " + (mt ? u + " 0 0" : "0 " + u + " 0") + ";";
      }

      return !rt && o && X && i && (r += Gn(i)), r;
    }

    function Fn(t, e, n) {
      return t ? (t + e) * ae + "px" : j ? j + "(" + 100 * ae + "% / " + n + ")" : 100 * ae / n + "%";
    }

    function jn(t, e, n) {
      var i;
      if (t) i = t + e + "px";else {
        rt || (n = Math.floor(n));
        var o = rt ? ae : n;
        i = j ? j + "(100% / " + o + ")" : 100 / o + "%";
      }
      return i = "width:" + i, "inner" !== ot ? i + ";" : i + " !important;";
    }

    function Vn(t) {
      var e = "";
      return !1 !== t && (e = (mt ? "padding-" : "margin-") + (mt ? "right" : "bottom") + ": " + t + "px;"), e;
    }

    function Yn(t, e) {
      var n = t.substring(0, t.length - e).toLowerCase();
      return n && (n = "-" + n + "-"), n;
    }

    function Gn(t) {
      return Yn(X, 18) + "transition-duration:" + t / 1e3 + "s;";
    }

    function Qn(t) {
      return Yn(J, 17) + "animation-duration:" + t / 1e3 + "s;";
    }

    function Xn() {
      if (zn("autoHeight") || Ht || !mt) {
        var t = yt.querySelectorAll("img");
        v(t, function (t) {
          var e = t.src;
          e && e.indexOf("data:image") < 0 ? (H(t, Ge), t.src = "", t.src = e, h(t, "loading")) : ie || fi(t);
        }), e(function () {
          mi(T(t), function () {
            Lt = !0;
          });
        }), !Ht && mt && (t = vi(pe, Math.min(pe + Pt - 1, ae - 1))), ie ? Kn() : e(function () {
          mi(T(t), Kn);
        });
      } else rt && _i(), Un(), Zn();
    }

    function Kn() {
      if (Ht) {
        var t = Vt ? pe : Ct - 1;
        !function e() {
          wt[t - 1].getBoundingClientRect().right.toFixed(2) === wt[t].getBoundingClientRect().left.toFixed(2) ? Jn() : setTimeout(function () {
            e();
          }, 16);
        }();
      } else Jn();
    }

    function Jn() {
      mt && !Ht || (bi(), Ht ? (le = Bi(), Se && (Be = ei()), ge = ve(), _n(Le || Be)) : to()), rt && _i(), Un(), Zn();
    }

    function Un() {
      if (wi(), ht.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + li() + "</span>  of " + Ct + "</div>"), At = ht.querySelector(".tns-liveregion .current"), qe) {
        var t = Ut ? "stop" : "start";
        bn ? w(bn, {
          "data-action": t
        }) : n.autoplayButtonOutput && (ht.insertAdjacentHTML(Rn(n.autoplayPosition), '<button data-action="' + t + '">' + Cn[0] + t + Cn[1] + $t[0] + "</button>"), bn = ht.querySelector("[data-action]")), bn && H(bn, {
          click: Vi
        }), Ut && (Fi(), te && H(yt, ke), ee && H(yt, De));
      }

      if (ze) {
        if (on) w(on, {
          "aria-label": "Carousel Pagination"
        }), v(nn = on.children, function (t, e) {
          w(t, {
            "data-nav": e,
            tabindex: "-1",
            "aria-label": dn + (e + 1),
            "aria-controls": Ee
          });
        });else {
          for (var e = "", i = We ? "" : 'style="display:none"', o = 0; o < Ct; o++) {
            e += '<button data-nav="' + o + '" tabindex="-1" aria-controls="' + Ee + '" ' + i + ' aria-label="' + dn + (o + 1) + '"></button>';
          }

          e = '<div class="tns-nav" aria-label="Carousel Pagination">' + e + "</div>", ht.insertAdjacentHTML(Rn(n.navPosition), e), on = ht.querySelector(".tns-nav"), nn = on.children;
        }

        if (no(), X) {
          var r = X.substring(0, X.length - 18).toLowerCase(),
              a = "transition: all " + Ft / 1e3 + "s";
          r && (a = "-" + r + "-" + a), f(ne, "[aria-controls^=" + Ee + "-item]", a, d(ne));
        }

        w(nn[sn], {
          "aria-label": dn + (sn + 1) + vn
        }), C(nn[sn], "tabindex"), h(nn[sn], fn), H(on, He);
      }

      Pe && (Je || Ze && $e || (ht.insertAdjacentHTML(Rn(n.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + Ee + '">' + Qt[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + Ee + '">' + Qt[1] + "</button></div>"), Je = ht.querySelector(".tns-controls")), Ze && $e || (Ze = Je.children[0], $e = Je.children[1]), n.controlsContainer && w(Je, {
        "aria-label": "Carousel Navigation",
        tabindex: "0"
      }), (n.controlsContainer || n.prevButton && n.nextButton) && w([Ze, $e], {
        "aria-controls": Ee,
        tabindex: "-1"
      }), (n.controlsContainer || n.prevButton && n.nextButton) && (w(Ze, {
        "data-controls": "prev"
      }), w($e, {
        "data-controls": "next"
      })), Xe = Ti(Ze), Ke = Ti($e), Li(), Je ? H(Je, _e) : (H(Ze, _e), H($e, _e))), ii();
    }

    function Zn() {
      if (rt && Z) {
        var t = {};
        t[Z] = Ii, H(yt, t);
      }

      Kt && H(yt, Ie, n.preventScrollOnTouch), Jt && H(yt, Re), qt && H(l, Oe), "inner" === ot ? Te.on("outerResized", function () {
        ti(), Te.emit("innerLoaded", io());
      }) : (it || kt || Ht || Yt || !mt) && H(p, {
        resize: $n
      }), Yt && ("outer" === ot ? Te.on("innerLoaded", pi) : Le || pi()), ci(), Le ? ai() : Be && ri(), Te.on("indexChanged", hi), "inner" === ot && Te.emit("innerLoaded", io()), "function" == typeof Ce && Ce(io()), Mt = !0;
    }

    function $n(t) {
      e(function () {
        ti(Gi(t));
      });
    }

    function ti(t) {
      if (Mt) {
        "outer" === ot && Te.emit("outerResized", io(t)), Tt = In();
        var e,
            i = pt,
            o = !1;
        it && (ni(), (e = i !== pt) && Te.emit("newBreakpointStart", io(t)));
        var r,
            a,
            u,
            s,
            c = Pt,
            p = Le,
            m = Be,
            y = qt,
            x = Gt,
            b = Xt,
            w = Kt,
            C = Jt,
            T = Ut,
            L = te,
            A = ee,
            S = pe;

        if (e) {
          var B = kt,
              N = Yt,
              _ = Qt,
              D = Rt,
              O = $t;
          if (!Y) var I = Ot,
              R = Dt;
        }

        if (qt = Wn("arrowKeys"), Gt = Wn("controls"), Xt = Wn("nav"), Kt = Wn("touch"), Rt = Wn("center"), Jt = Wn("mouseDrag"), Ut = Wn("autoplay"), te = Wn("autoplayHoverPause"), ee = Wn("autoplayResetOnVisibility"), e && (Le = Wn("disable"), kt = Wn("fixedWidth"), Ft = Wn("speed"), Yt = Wn("autoHeight"), Qt = Wn("controlsText"), $t = Wn("autoplayText"), Zt = Wn("autoplayTimeout"), Y || (Dt = Wn("edgePadding"), Ot = Wn("gutter"))), _n(Le), It = Pn(), mt && !Ht || Le || (bi(), mt || (to(), o = !0)), (kt || Ht) && (le = Bi(), ge = ve()), (e || kt) && (Pt = Wn("items"), zt = Wn("slideBy"), (a = Pt !== c) && (kt || Ht || (ge = ve()), Bn())), e && Le !== p && (Le ? ai() : function () {
          if (Ae) {
            if (ne.disabled = !1, yt.className += Me, _i(), Vt) for (var t = re; t--;) {
              rt && E(wt[t]), E(wt[ae - t - 1]);
            }
            if (!rt) for (var e = pe, n = pe + Ct; e < n; e++) {
              var i = wt[e],
                  o = e < pe + Pt ? st : dt;
              i.style.left = 100 * (e - pe) / Pt + "%", h(i, o);
            }
            oi(), Ae = !1;
          }
        }()), Se && (e || kt || Ht) && (Be = ei()) !== m && (Be ? (Hi(Ni(kn(0))), ri()) : (function () {
          if (Ne) {
            if (Dt && Y && (gt.style.margin = ""), re) for (var t = "tns-transparent", e = re; e--;) {
              rt && g(wt[e], t), g(wt[ae - e - 1], t);
            }
            oi(), Ne = !1;
          }
        }(), o = !0)), _n(Le || Be), Ut || (te = ee = !1), qt !== y && (qt ? H(l, Oe) : k(l, Oe)), Gt !== x && (Gt ? Je ? E(Je) : (Ze && E(Ze), $e && E($e)) : Je ? M(Je) : (Ze && M(Ze), $e && M($e))), Xt !== b && (Xt ? E(on) : M(on)), Kt !== w && (Kt ? H(yt, Ie, n.preventScrollOnTouch) : k(yt, Ie)), Jt !== C && (Jt ? H(yt, Re) : k(yt, Re)), Ut !== T && (Ut ? (bn && E(bn), mn || gn || Fi()) : (bn && M(bn), mn && ji())), te !== L && (te ? H(yt, ke) : k(yt, ke)), ee !== A && (ee ? H(l, De) : k(l, De)), e) {
          if (kt === B && Rt === D || (o = !0), Yt !== N && (Yt || (gt.style.height = "")), Gt && Qt !== _ && (Ze.innerHTML = Qt[0], $e.innerHTML = Qt[1]), bn && $t !== O) {
            var P = Ut ? 1 : 0,
                z = bn.innerHTML,
                W = z.length - O[P].length;
            z.substring(W) === O[P] && (bn.innerHTML = z.substring(0, W) + $t[P]);
          }
        } else Rt && (kt || Ht) && (o = !0);

        if ((a || kt && !Ht) && (an = eo(), no()), (r = pe !== S) ? (Te.emit("indexChanged", io()), o = !0) : a ? r || hi() : (kt || Ht) && (ci(), wi(), ui()), a && !rt && function () {
          for (var t = pe + Math.min(Ct, Pt), e = ae; e--;) {
            var n = wt[e];
            pe <= e && e < t ? (h(n, "tns-moving"), n.style.left = 100 * (e - pe) / Pt + "%", h(n, st), g(n, dt)) : n.style.left && (n.style.left = "", h(n, dt), g(n, st)), g(n, ct);
          }

          setTimeout(function () {
            v(wt, function (t) {
              g(t, "tns-moving");
            });
          }, 300);
        }(), !Le && !Be) {
          if (e && !Y && (Yt === autoheightTem && Ft === speedTem || gi(), Dt === R && Ot === I || (gt.style.cssText = qn(Dt, Ot, kt, Ft, Yt)), mt)) {
            rt && (yt.style.width = Fn(kt, Ot, Pt));
            var q = jn(kt, Ot, Pt) + Vn(Ot);
            s = d(u = ne) - 1, "deleteRule" in u ? u.deleteRule(s) : u.removeRule(s), f(ne, "#" + Ee + " > .tns-item", q, d(ne));
          }

          Yt && pi(), o && (_i(), me = pe);
        }

        e && Te.emit("newBreakpointEnd", io(t));
      }
    }

    function ei() {
      if (!kt && !Ht) return Ct <= (Rt ? Pt - (Pt - 1) / 2 : Pt);
      var t = kt ? (kt + Ot) * Ct : Et[Ct],
          e = Dt ? It + 2 * Dt : It + Ot;
      return Rt && (e -= kt ? (It - kt) / 2 : (It - (Et[pe + 1] - Et[pe] - Ot)) / 2), t <= e;
    }

    function ni() {
      for (var t in pt = 0, it) {
        (t = parseInt(t)) <= Tt && (pt = t);
      }
    }

    function ii() {
      !Ut && bn && M(bn), !Xt && on && M(on), Gt || (Je ? M(Je) : (Ze && M(Ze), $e && M($e)));
    }

    function oi() {
      Ut && bn && E(bn), Xt && on && E(on), Gt && (Je ? E(Je) : (Ze && E(Ze), $e && E($e)));
    }

    function ri() {
      if (!Ne) {
        if (Dt && (gt.style.margin = "0px"), re) for (var t = "tns-transparent", e = re; e--;) {
          rt && h(wt[e], t), h(wt[ae - e - 1], t);
        }
        ii(), Ne = !0;
      }
    }

    function ai() {
      if (!Ae) {
        if (ne.disabled = !0, yt.className = yt.className.replace(Me.substring(1), ""), C(yt, ["style"]), Vt) for (var t = re; t--;) {
          rt && M(wt[t]), M(wt[ae - t - 1]);
        }
        if (mt && rt || C(gt, ["style"]), !rt) for (var e = pe, n = pe + Ct; e < n; e++) {
          var i = wt[e];
          C(i, ["style"]), g(i, st), g(i, dt);
        }
        ii(), Ae = !0;
      }
    }

    function ui() {
      var t = li();
      At.innerHTML !== t && (At.innerHTML = t);
    }

    function li() {
      var t = si(),
          e = t[0] + 1,
          n = t[1] + 1;
      return e === n ? e + "" : e + " to " + n;
    }

    function si(t) {
      null == t && (t = Ni());
      var e,
          n,
          i,
          o = pe;
      if (Rt || Dt ? (Ht || kt) && (n = -(parseFloat(t) + Dt), i = n + It + 2 * Dt) : Ht && (n = Et[pe], i = n + It), Ht) Et.forEach(function (t, r) {
        r < ae && ((Rt || Dt) && t <= n + .5 && (o = r), .5 <= i - t && (e = r));
      });else {
        if (kt) {
          var r = kt + Ot;
          Rt || Dt ? (o = Math.floor(n / r), e = Math.ceil(i / r - 1)) : e = o + Math.ceil(It / r) - 1;
        } else if (Rt || Dt) {
          var a = Pt - 1;

          if (Rt ? (o -= a / 2, e = pe + a / 2) : e = pe + a, Dt) {
            var u = Dt * Pt / It;
            o -= u, e += u;
          }

          o = Math.floor(o), e = Math.ceil(e);
        } else e = o + Pt - 1;

        o = Math.max(o, 0), e = Math.min(e, ae - 1);
      }
      return [o, e];
    }

    function ci() {
      ie && !Le && vi.apply(null, si()).forEach(function (t) {
        if (!m(t, Ye)) {
          var e = {};
          e[Z] = function (t) {
            t.stopPropagation();
          }, H(t, e), H(t, Ge), t.src = x(t, "data-src");
          var n = x(t, "data-srcset");
          n && (t.srcset = n), h(t, "loading");
        }
      });
    }

    function fi(t) {
      h(t, "loaded"), di(t);
    }

    function di(t) {
      h(t, "tns-complete"), g(t, "loading"), k(t, Ge);
    }

    function vi(t, e) {
      for (var n = []; t <= e;) {
        v(wt[t].querySelectorAll("img"), function (t) {
          n.push(t);
        }), t++;
      }

      return n;
    }

    function pi() {
      var t = vi.apply(null, si());
      e(function () {
        mi(t, xi);
      });
    }

    function mi(t, n) {
      return Lt ? n() : (t.forEach(function (e, n) {
        m(e, Ye) && t.splice(n, 1);
      }), t.length ? void e(function () {
        mi(t, n);
      }) : n());
    }

    function hi() {
      ci(), wi(), ui(), Li(), function () {
        if (Xt && (sn = 0 <= ln ? ln : On(), ln = -1, sn !== cn)) {
          var t = nn[cn],
              e = nn[sn];
          w(t, {
            tabindex: "-1",
            "aria-label": dn + (cn + 1)
          }), g(t, fn), w(e, {
            "aria-label": dn + (sn + 1) + vn
          }), C(e, "tabindex"), h(e, fn), cn = sn;
        }
      }();
    }

    function gi() {
      rt && Yt && (vt.style[X] = Ft / 1e3 + "s");
    }

    function yi(t, e) {
      for (var n = [], i = t, o = Math.min(t + e, ae); i < o; i++) {
        n.push(wt[i].offsetHeight);
      }

      return Math.max.apply(null, n);
    }

    function xi() {
      var t = Yt ? yi(pe, Pt) : yi(re, Ct),
          e = vt || gt;
      e.style.height !== t && (e.style.height = t + "px");
    }

    function bi() {
      Et = [0];
      var t = mt ? "left" : "top",
          e = mt ? "right" : "bottom",
          n = wt[0].getBoundingClientRect()[t];
      v(wt, function (i, o) {
        o && Et.push(i.getBoundingClientRect()[t] - n), o === ae - 1 && Et.push(i.getBoundingClientRect()[e] - n);
      });
    }

    function wi() {
      var t = si(),
          e = t[0],
          n = t[1];
      v(wt, function (t, i) {
        e <= i && i <= n ? y(t, "aria-hidden") && (C(t, ["aria-hidden", "tabindex"]), h(t, Ve)) : y(t, "aria-hidden") || (w(t, {
          "aria-hidden": "true",
          tabindex: "-1"
        }), g(t, Ve));
      });
    }

    function Ci(t) {
      return t.nodeName.toLowerCase();
    }

    function Ti(t) {
      return "button" === Ci(t);
    }

    function Mi(t) {
      return "true" === t.getAttribute("aria-disabled");
    }

    function Ei(t, e, n) {
      t ? e.disabled = n : e.setAttribute("aria-disabled", n.toString());
    }

    function Li() {
      if (Gt && !jt && !Vt) {
        var t = Xe ? Ze.disabled : Mi(Ze),
            e = Ke ? $e.disabled : Mi($e),
            n = pe <= he,
            i = !jt && ge <= pe;
        n && !t && Ei(Xe, Ze, !0), !n && t && Ei(Xe, Ze, !1), i && !e && Ei(Ke, $e, !0), !i && e && Ei(Ke, $e, !1);
      }
    }

    function Ai(t, e) {
      X && (t.style[X] = e);
    }

    function Si(t) {
      return null == t && (t = pe), Ht ? (It - (Dt ? Ot : 0) - (Et[t + 1] - Et[t] - Ot)) / 2 : kt ? (It - kt) / 2 : (Pt - 1) / 2;
    }

    function Bi() {
      var t = It + (Dt ? Ot : 0) - (kt ? (kt + Ot) * ae : Et[ae]);
      return Rt && !Vt && (t = kt ? -(kt + Ot) * (ae - 1) - Si() : Si(ae - 1) - Et[ae - 1]), 0 < t && (t = 0), t;
    }

    function Ni(t) {
      var e;
      if (null == t && (t = pe), mt && !Ht) {
        if (kt) e = -(kt + Ot) * t, Rt && (e += Si());else {
          var n = G ? ae : Pt;
          Rt && (t -= Si()), e = 100 * -t / n;
        }
      } else e = -Et[t], Rt && Ht && (e += Si());
      return ue && (e = Math.max(e, le)), e + (!mt || Ht || kt ? "px" : "%");
    }

    function _i(t) {
      Ai(yt, "0s"), Hi(t);
    }

    function Hi(t) {
      null == t && (t = Ni()), yt.style[ce] = fe + t + de;
    }

    function ki(t, e, n, i) {
      var o = t + Pt;
      Vt || (o = Math.min(o, ae));

      for (var r = t; r < o; r++) {
        var a = wt[r];
        i || (a.style.left = 100 * (r - pe) / Pt + "%"), ft && K && (a.style[K] = a.style[U] = ft * (r - t) / 1e3 + "s"), g(a, e), h(a, n), i && oe.push(a);
      }
    }

    function Di(t, e) {
      se && Bn(), (pe !== me || e) && (Te.emit("indexChanged", io()), Te.emit("transitionStart", io()), Yt && pi(), mn && t && 0 <= ["click", "keydown"].indexOf(t.type) && ji(), we = !0, Nn());
    }

    function Oi(t) {
      return t.toLowerCase().replace(/-/g, "");
    }

    function Ii(t) {
      if (rt || we) {
        if (Te.emit("transitionEnd", io(t)), !rt && 0 < oe.length) for (var e = 0; e < oe.length; e++) {
          var n = oe[e];
          n.style.left = "", U && K && (n.style[U] = "", n.style[K] = ""), g(n, ct), h(n, dt);
        }

        if (!t || !rt && t.target.parentNode === yt || t.target === yt && Oi(t.propertyName) === Oi(ce)) {
          if (!se) {
            var i = pe;
            Bn(), pe !== i && (Te.emit("indexChanged", io()), _i());
          }

          "inner" === ot && Te.emit("innerLoaded", io()), we = !1, me = pe;
        }
      }
    }

    function Ri(t, e) {
      if (!Be) if ("prev" === t) Pi(e, -1);else if ("next" === t) Pi(e, 1);else {
        if (we) {
          if (ye) return;
          Ii();
        }

        var n = Dn(),
            i = 0;

        if ("first" === t ? i = -n : "last" === t ? i = rt ? Ct - Pt - n : Ct - 1 - n : ("number" != typeof t && (t = parseInt(t)), isNaN(t) || (e || (t = Math.max(0, Math.min(Ct - 1, t))), i = t - n)), !rt && i && Math.abs(i) < Pt) {
          var o = 0 < i ? 1 : -1;
          i += he <= pe + i - Ct ? Ct * o : 2 * Ct * o * -1;
        }

        pe += i, rt && Vt && (pe < he && (pe += Ct), ge < pe && (pe -= Ct)), Dn(pe) !== Dn(me) && Di(e);
      }
    }

    function Pi(t, e) {
      if (we) {
        if (ye) return;
        Ii();
      }

      var n;

      if (!e) {
        for (var i = Qi(t = Gi(t)); i !== Je && [Ze, $e].indexOf(i) < 0;) {
          i = i.parentNode;
        }

        var o = [Ze, $e].indexOf(i);
        0 <= o && (n = !0, e = 0 === o ? -1 : 1);
      }

      if (jt) {
        if (pe === he && -1 === e) return void Ri("last", t);
        if (pe === ge && 1 === e) return void Ri("first", t);
      }

      e && (pe += zt * e, Ht && (pe = Math.floor(pe)), Di(n || t && "keydown" === t.type ? t : null));
    }

    function zi() {
      pn = setInterval(function () {
        Pi(null, xn);
      }, Zt), mn = !0;
    }

    function Wi() {
      clearInterval(pn), mn = !1;
    }

    function qi(t, e) {
      w(bn, {
        "data-action": t
      }), bn.innerHTML = Cn[0] + t + Cn[1] + e;
    }

    function Fi() {
      zi(), bn && qi("stop", $t[1]);
    }

    function ji() {
      Wi(), bn && qi("start", $t[0]);
    }

    function Vi() {
      mn ? (ji(), gn = !0) : (Fi(), gn = !1);
    }

    function Yi(t) {
      t.focus();
    }

    function Gi(t) {
      return Xi(t = t || p.event) ? t.changedTouches[0] : t;
    }

    function Qi(t) {
      return t.target || p.event.srcElement;
    }

    function Xi(t) {
      return 0 <= t.type.indexOf("touch");
    }

    function Ki(t) {
      t.preventDefault ? t.preventDefault() : t.returnValue = !1;
    }

    function Ji() {
      return r = Ln.y - En.y, a = Ln.x - En.x, t = Math.atan2(r, a) * (180 / Math.PI), i = !1, 90 - (e = xe) <= (o = Math.abs(90 - Math.abs(t))) ? i = "horizontal" : o <= e && (i = "vertical"), i === n.axis;
      var t, e, i, o, r, a;
    }

    function Ui(t) {
      if (we) {
        if (ye) return;
        Ii();
      }

      Ut && mn && Wi(), An = !0, Mn && (i(Mn), Mn = null);
      var e = Gi(t);
      Te.emit(Xi(t) ? "touchStart" : "dragStart", io(t)), !Xi(t) && 0 <= ["img", "a"].indexOf(Ci(Qi(t))) && Ki(t), Ln.x = En.x = e.clientX, Ln.y = En.y = e.clientY, rt && (Tn = parseFloat(yt.style[ce].replace(fe, "")), Ai(yt, "0s"));
    }

    function Zi(t) {
      if (An) {
        var n = Gi(t);
        Ln.x = n.clientX, Ln.y = n.clientY, rt ? Mn || (Mn = e(function () {
          !function t(n) {
            if (be) {
              if (i(Mn), An && (Mn = e(function () {
                t(n);
              })), "?" === be && (be = Ji()), be) {
                !Qe && Xi(n) && (Qe = !0);

                try {
                  n.type && Te.emit(Xi(n) ? "touchMove" : "dragMove", io(n));
                } catch (t) {}

                var o = Tn,
                    r = Sn(Ln, En);
                if (!mt || kt || Ht) o += r, o += "px";else o += G ? r * Pt * 100 / ((It + Ot) * ae) : 100 * r / (It + Ot), o += "%";
                yt.style[ce] = fe + o + de;
              }
            } else An = !1;
          }(t);
        })) : ("?" === be && (be = Ji()), be && (Qe = !0)), Qe && t.preventDefault();
      }
    }

    function $i(t) {
      if (An) {
        Mn && (i(Mn), Mn = null), rt && Ai(yt, ""), An = !1;
        var o = Gi(t);
        Ln.x = o.clientX, Ln.y = o.clientY;
        var r = Sn(Ln, En);

        if (Math.abs(r)) {
          if (!Xi(t)) {
            var a = Qi(t);
            H(a, {
              click: function t(e) {
                Ki(e), k(a, {
                  click: t
                });
              }
            });
          }

          rt ? Mn = e(function () {
            if (mt && !Ht) {
              var e = -r * Pt / (It + Ot);
              e = 0 < r ? Math.floor(e) : Math.ceil(e), pe += e;
            } else {
              var n = -(Tn + r);
              if (n <= 0) pe = he;else if (n >= Et[ae - 1]) pe = ge;else for (var i = 0; i < ae && n >= Et[i];) {
                n > Et[pe = i] && r < 0 && (pe += 1), i++;
              }
            }

            Di(t, r), Te.emit(Xi(t) ? "touchEnd" : "dragEnd", io(t));
          }) : be && Pi(t, 0 < r ? -1 : 1);
        }
      }

      "auto" === n.preventScrollOnTouch && (Qe = !1), xe && (be = "?"), Ut && !mn && zi();
    }

    function to() {
      (vt || gt).style.height = Et[pe + Pt] - Et[pe] + "px";
    }

    function eo() {
      var t = kt ? (kt + Ot) * Ct / It : Ct / Pt;
      return Math.min(Math.ceil(t), Ct);
    }

    function no() {
      if (Xt && !We && an !== un) {
        var t = un,
            e = an,
            n = E;

        for (an < un && (t = an, e = un, n = M); t < e;) {
          n(nn[t]), t++;
        }

        un = an;
      }
    }

    function io(t) {
      return {
        container: yt,
        slideItems: wt,
        navContainer: on,
        navItems: nn,
        controlsContainer: Je,
        hasControls: Pe,
        prevButton: Ze,
        nextButton: $e,
        items: Pt,
        slideBy: zt,
        cloneCount: re,
        slideCount: Ct,
        slideCountNew: ae,
        index: pe,
        indexCached: me,
        displayIndex: Hn(),
        navCurrentIndex: sn,
        navCurrentIndexCached: cn,
        pages: an,
        pagesCached: un,
        sheet: ne,
        isOn: Mt,
        event: t || {}
      };
    }

    tt && console.warn("No slides found in", n.container);
  };
}();

window.addEventListener("load", function () {
  function t(t) {
    return document.querySelector(t);
  }

  function e(t) {
    return document.querySelectorAll(t);
  }

  t(".toggle-menu").onclick = function () {
    return e = t(".toggle-menu__line"), n = t(".main-menu"), e.classList.toggle("toggle-menu__line_active"), void n.classList.toggle("main-menu_active");
    var e, n;
  };

  var n = t(".search-form__input"),
      i = t(".user-bar__search-btn"),
      o = t(".search-form__wrap");

  function r() {
    n.classList.toggle("search-form__input_active");
  }

  i.onclick = function () {
    return r();
  }, document.addEventListener("click", function (t) {
    var e = t.target,
        a = e == o || o.contains(e),
        u = n.classList.contains("search-form__input_active");
    a || e == i || !u || r();
  }), function (n, i) {
    for (var o, r = e(n).length, a = t(i), u = 0; u < r; u++) {
      var l = (o = "div", document.createElement(o));
      l.className = "".concat(i.slice(1), "__dot"), a.appendChild(l);
    }
  }(".slider__item", ".header-nav-container");
  var a = tns({
    container: ".slider",
    items: 1,
    slideBy: "page",
    speed: 400,
    mouseDrag: !0,
    controls: !0,
    nav: !0,
    navPosition: "bottom",
    navContainer: ".header-nav-container",
    controlsContainer: ".header-controls-btns",
    prevButton: ".header-controls-btns__prev",
    nextButton: ".header-controls-btns__next",
    startIndex: 1
  });

  function u(e) {
    t(e).innerHTML = "0" + a.getInfo().index;
  }

  t(".pagination__total-number").innerHTML = "0" + a.getInfo().slideCount, u(".pagination__active-slide-number"), a.events.on("indexChanged", function () {
    setTimeout(function () {
      u(".pagination__active-slide-number"), u(".pagination__cur-number");
    }, 500);
  });

  var l = function () {
    if ("scrollingElement" in document) return document.scrollingElement;
    var t = document.documentElement,
        e = t.scrollTop;
    t.scrollTop = e + 1;
    var n = t.scrollTop;
    return t.scrollTop = e, n > e ? t : document.body;
  }(),
      s = function s(t, e, n, i) {
    return Math.round(i * (1 - Math.pow(2, -10 * e / t)) + n);
  },
      c = function c(e) {
    var n = e.getAttribute("href"),
        i = function (e) {
      var n = l.scrollTop,
          i = function () {
        if (e.length < 2) return -n;
        var i = t(e);

        if (i) {
          var o = i.getBoundingClientRect().top,
              r = l.scrollHeight - window.innerHeight;
          return n + o < r ? o : r - n;
        }
      }();

      if (i) return new Map([["start", n], ["delta", i]]);
    }(n);

    if (i) {
      var o = new Map([["duration", 800]]),
          r = performance.now();
      requestAnimationFrame(function t(e) {
        o.set("elapsed", e - r);
        var a = [],
            u = [];
        o.forEach(function (t) {
          a.push(t);
        }), i.forEach(function (t) {
          u.push(t);
        }), l.scrollTop = s.apply(void 0, a.concat(u)), o.get("elapsed") < o.get("duration") ? requestAnimationFrame(t) : f(n, i);
      });
    }
  },
      f = function f(t, e) {
    history.pushState(null, null, t), l.scrollTop = e.get("start") + e.get("delta");
  },
      d = e('a[href^="#"]'),
      v = d.length - 1;

  if (!(v < 0)) {
    !function t(e, n) {
      var i = e.item(n);
      if (i.addEventListener("click", function (t) {
        t.preventDefault(), c(i);
      }), n) return t(e, n - 1);
    }(d, v);
    var p,
        m = t(".to-top");
    window.onscroll = function () {
      var t;
      t = window.pageYOffset, m.style.display = t > 300 ? "flex" : "none";
    }, (p = e(".categories__filter")).forEach(function (t) {
      t.onclick = function (t) {
        var n,
            i,
            o = t.target.getAttribute("data-filter");
        n = "categories__filter_active", p.forEach(function (t) {
          t.classList.remove(n);
        }), t.target.classList.add("categories__filter_active"), i = o, e(".content__item").forEach(function (t) {
          t.classList.add("visuallyhidden"), "all" === i ? (t.classList.remove("hidden"), setTimeout(function () {
            t.classList.remove("visuallyhidden");
          }, 350)) : t.getAttribute("data-for") !== i ? setTimeout(function () {
            t.classList.add("hidden"), t.classList.remove("visuallyhidden");
          }, 350) : (t.classList.remove("hidden"), setTimeout(function () {
            t.classList.remove("visuallyhidden");
          }, 350));
        });
      };
    });
  }
});

var tns = function () {
  Object.keys || (Object.keys = function (t) {
    var e = [];

    for (var n in t) {
      Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
    }

    return e;
  }), "remove" in Element.prototype || (Element.prototype.remove = function () {
    this.parentNode && this.parentNode.removeChild(this);
  });

  var t = window,
      Oi = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function (t) {
    return setTimeout(t, 16);
  },
      e = window,
      Di = e.cancelAnimationFrame || e.mozCancelAnimationFrame || function (t) {
    clearTimeout(t);
  };

  function Hi() {
    for (var t, e, n, i = arguments[0] || {}, a = 1, r = arguments.length; a < r; a++) {
      if (null !== (t = arguments[a])) for (e in t) {
        i !== (n = t[e]) && void 0 !== n && (i[e] = n);
      }
    }

    return i;
  }

  function ki(t) {
    return 0 <= ["true", "false"].indexOf(t) ? JSON.parse(t) : t;
  }

  function Ri(t, e, n, i) {
    if (i) try {
      t.setItem(e, n);
    } catch (t) {}
    return n;
  }

  function Ii() {
    var t = document,
        e = t.body;
    return e || ((e = t.createElement("body")).fake = !0), e;
  }

  var n = document.documentElement;

  function Pi(t) {
    var e = "";
    return t.fake && (e = n.style.overflow, t.style.background = "", t.style.overflow = n.style.overflow = "hidden", n.appendChild(t)), e;
  }

  function zi(t, e) {
    t.fake && (t.remove(), n.style.overflow = e, n.offsetHeight);
  }

  function Wi(t, e, n, i) {
    "insertRule" in t ? t.insertRule(e + "{" + n + "}", i) : t.addRule(e, n, i);
  }

  function Fi(t) {
    return ("insertRule" in t ? t.cssRules : t.rules).length;
  }

  function qi(t, e, n) {
    for (var i = 0, a = t.length; i < a; i++) {
      e.call(n, t[i], i);
    }
  }

  var i = ("classList" in document.createElement("_")),
      ji = i ? function (t, e) {
    return t.classList.contains(e);
  } : function (t, e) {
    return 0 <= t.className.indexOf(e);
  },
      Vi = i ? function (t, e) {
    ji(t, e) || t.classList.add(e);
  } : function (t, e) {
    ji(t, e) || (t.className += " " + e);
  },
      Gi = i ? function (t, e) {
    ji(t, e) && t.classList.remove(e);
  } : function (t, e) {
    ji(t, e) && (t.className = t.className.replace(e, ""));
  };

  function Qi(t, e) {
    return t.hasAttribute(e);
  }

  function Xi(t, e) {
    return t.getAttribute(e);
  }

  function r(t) {
    return void 0 !== t.item;
  }

  function Yi(t, e) {
    if (t = r(t) || t instanceof Array ? t : [t], "[object Object]" === Object.prototype.toString.call(e)) for (var n = t.length; n--;) {
      for (var i in e) {
        t[n].setAttribute(i, e[i]);
      }
    }
  }

  function Ki(t, e) {
    t = r(t) || t instanceof Array ? t : [t];

    for (var n = (e = e instanceof Array ? e : [e]).length, i = t.length; i--;) {
      for (var a = n; a--;) {
        t[i].removeAttribute(e[a]);
      }
    }
  }

  function Ji(t) {
    for (var e = [], n = 0, i = t.length; n < i; n++) {
      e.push(t[n]);
    }

    return e;
  }

  function Ui(t, e) {
    "none" !== t.style.display && (t.style.display = "none");
  }

  function _i(t, e) {
    "none" === t.style.display && (t.style.display = "");
  }

  function Zi(t) {
    return "none" !== window.getComputedStyle(t).display;
  }

  function $i(e) {
    if ("string" == typeof e) {
      var n = [e],
          i = e.charAt(0).toUpperCase() + e.substr(1);
      ["Webkit", "Moz", "ms", "O"].forEach(function (t) {
        "ms" === t && "transform" !== e || n.push(t + i);
      }), e = n;
    }

    for (var t = document.createElement("fakeelement"), a = (e.length, 0); a < e.length; a++) {
      var r = e[a];
      if (void 0 !== t.style[r]) return r;
    }

    return !1;
  }

  function ta(t, e) {
    var n = !1;
    return /^Webkit/.test(t) ? n = "webkit" + e + "End" : /^O/.test(t) ? n = "o" + e + "End" : t && (n = e.toLowerCase() + "end"), n;
  }

  var a = !1;

  try {
    var o = Object.defineProperty({}, "passive", {
      get: function get() {
        a = !0;
      }
    });
    window.addEventListener("test", null, o);
  } catch (t) {}

  var u = !!a && {
    passive: !0
  };

  function ea(t, e, n) {
    for (var i in e) {
      var a = 0 <= ["touchstart", "touchmove"].indexOf(i) && !n && u;
      t.addEventListener(i, e[i], a);
    }
  }

  function na(t, e) {
    for (var n in e) {
      var i = 0 <= ["touchstart", "touchmove"].indexOf(n) && u;
      t.removeEventListener(n, e[n], i);
    }
  }

  function ia() {
    return {
      topics: {},
      on: function on(t, e) {
        this.topics[t] = this.topics[t] || [], this.topics[t].push(e);
      },
      off: function off(t, e) {
        if (this.topics[t]) for (var n = 0; n < this.topics[t].length; n++) {
          if (this.topics[t][n] === e) {
            this.topics[t].splice(n, 1);
            break;
          }
        }
      },
      emit: function emit(e, n) {
        n.type = e, this.topics[e] && this.topics[e].forEach(function (t) {
          t(n, e);
        });
      }
    };
  }

  var aa = function aa(O) {
    O = Hi({
      container: ".slider",
      mode: "carousel",
      axis: "horizontal",
      items: 1,
      gutter: 0,
      edgePadding: 0,
      fixedWidth: !1,
      autoWidth: !1,
      viewportMax: !1,
      slideBy: 1,
      center: !1,
      controls: !0,
      controlsPosition: "top",
      controlsText: ["prev", "next"],
      controlsContainer: !1,
      prevButton: !1,
      nextButton: !1,
      nav: !0,
      navPosition: "top",
      navContainer: !1,
      navAsThumbnails: !1,
      arrowKeys: !1,
      speed: 300,
      autoplay: !1,
      autoplayPosition: "top",
      autoplayTimeout: 5e3,
      autoplayDirection: "forward",
      autoplayText: ["start", "stop"],
      autoplayHoverPause: !1,
      autoplayButton: !1,
      autoplayButtonOutput: !0,
      autoplayResetOnVisibility: !0,
      animateIn: "tns-fadeIn",
      animateOut: "tns-fadeOut",
      animateNormal: "tns-normal",
      animateDelay: !1,
      loop: !0,
      rewind: !1,
      autoHeight: !1,
      responsive: !1,
      lazyload: !1,
      lazyloadSelector: ".tns-lazy-img",
      touch: !0,
      mouseDrag: !1,
      swipeAngle: 15,
      nested: !1,
      preventActionWhenRunning: !1,
      preventScrollOnTouch: !1,
      freezable: !0,
      onInit: !1,
      useLocalStorage: !0
    }, O || {});
    var D = document,
        h = window,
        a = {
      ENTER: 13,
      SPACE: 32,
      LEFT: 37,
      RIGHT: 39
    },
        e = {},
        n = O.useLocalStorage;

    if (n) {
      var t = navigator.userAgent,
          i = new Date();

      try {
        (e = h.localStorage) ? (e.setItem(i, i), n = e.getItem(i) == i, e.removeItem(i)) : n = !1, n || (e = {});
      } catch (t) {
        n = !1;
      }

      n && (e.tnsApp && e.tnsApp !== t && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function (t) {
        e.removeItem(t);
      }), localStorage.tnsApp = t);
    }

    var r,
        o,
        u,
        l,
        s,
        c,
        f,
        y = e.tC ? ki(e.tC) : Ri(e, "tC", function () {
      var t = document,
          e = Ii(),
          n = Pi(e),
          i = t.createElement("div"),
          a = !1;
      e.appendChild(i);

      try {
        for (var r, o = "(10px * 10)", u = ["calc" + o, "-moz-calc" + o, "-webkit-calc" + o], l = 0; l < 3; l++) {
          if (r = u[l], i.style.width = r, 100 === i.offsetWidth) {
            a = r.replace(o, "");
            break;
          }
        }
      } catch (t) {}

      return e.fake ? zi(e, n) : i.remove(), a;
    }(), n),
        g = e.tPL ? ki(e.tPL) : Ri(e, "tPL", function () {
      var t,
          e = document,
          n = Ii(),
          i = Pi(n),
          a = e.createElement("div"),
          r = e.createElement("div"),
          o = "";
      a.className = "tns-t-subp2", r.className = "tns-t-ct";

      for (var u = 0; u < 70; u++) {
        o += "<div></div>";
      }

      return r.innerHTML = o, a.appendChild(r), n.appendChild(a), t = Math.abs(a.getBoundingClientRect().left - r.children[67].getBoundingClientRect().left) < 2, n.fake ? zi(n, i) : a.remove(), t;
    }(), n),
        H = e.tMQ ? ki(e.tMQ) : Ri(e, "tMQ", (o = document, u = Ii(), l = Pi(u), s = o.createElement("div"), c = o.createElement("style"), f = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", c.type = "text/css", s.className = "tns-mq-test", u.appendChild(c), u.appendChild(s), c.styleSheet ? c.styleSheet.cssText = f : c.appendChild(o.createTextNode(f)), r = window.getComputedStyle ? window.getComputedStyle(s).position : s.currentStyle.position, u.fake ? zi(u, l) : s.remove(), "absolute" === r), n),
        d = e.tTf ? ki(e.tTf) : Ri(e, "tTf", $i("transform"), n),
        v = e.t3D ? ki(e.t3D) : Ri(e, "t3D", function (t) {
      if (!t) return !1;
      if (!window.getComputedStyle) return !1;
      var e,
          n = document,
          i = Ii(),
          a = Pi(i),
          r = n.createElement("p"),
          o = 9 < t.length ? "-" + t.slice(0, -9).toLowerCase() + "-" : "";
      return o += "transform", i.insertBefore(r, null), r.style[t] = "translate3d(1px,1px,1px)", e = window.getComputedStyle(r).getPropertyValue(o), i.fake ? zi(i, a) : r.remove(), void 0 !== e && 0 < e.length && "none" !== e;
    }(d), n),
        x = e.tTDu ? ki(e.tTDu) : Ri(e, "tTDu", $i("transitionDuration"), n),
        p = e.tTDe ? ki(e.tTDe) : Ri(e, "tTDe", $i("transitionDelay"), n),
        b = e.tADu ? ki(e.tADu) : Ri(e, "tADu", $i("animationDuration"), n),
        m = e.tADe ? ki(e.tADe) : Ri(e, "tADe", $i("animationDelay"), n),
        C = e.tTE ? ki(e.tTE) : Ri(e, "tTE", ta(x, "Transition"), n),
        w = e.tAE ? ki(e.tAE) : Ri(e, "tAE", ta(b, "Animation"), n),
        M = h.console && "function" == typeof h.console.warn,
        T = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"],
        E = {};

    if (T.forEach(function (t) {
      if ("string" == typeof O[t]) {
        var e = O[t],
            n = D.querySelector(e);
        if (E[t] = e, !n || !n.nodeName) return void (M && console.warn("Can't find", O[t]));
        O[t] = n;
      }
    }), !(O.container.children.length < 1)) {
      var k = O.responsive,
          R = O.nested,
          I = "carousel" === O.mode;

      if (k) {
        0 in k && (O = Hi(O, k[0]), delete k[0]);
        var A = {};

        for (var N in k) {
          var L = k[N];
          L = "number" == typeof L ? {
            items: L
          } : L, A[N] = L;
        }

        k = A, A = null;
      }

      if (I || function t(e) {
        for (var n in e) {
          I || ("slideBy" === n && (e[n] = "page"), "edgePadding" === n && (e[n] = !1), "autoHeight" === n && (e[n] = !1)), "responsive" === n && t(e[n]);
        }
      }(O), !I) {
        O.axis = "horizontal", O.slideBy = "page", O.edgePadding = !1;
        var P = O.animateIn,
            z = O.animateOut,
            B = O.animateDelay,
            W = O.animateNormal;
      }

      var S,
          F,
          q = "horizontal" === O.axis,
          j = D.createElement("div"),
          V = D.createElement("div"),
          G = O.container,
          Q = G.parentNode,
          X = G.outerHTML,
          Y = G.children,
          K = Y.length,
          J = sn(),
          U = !1;
      k && Bn(), I && (G.className += " tns-vpfix");

      var _,
          Z,
          $,
          tt,
          et,
          nt,
          it,
          at,
          rt = O.autoWidth,
          ot = vn("fixedWidth"),
          ut = vn("edgePadding"),
          lt = vn("gutter"),
          st = fn(),
          ct = vn("center"),
          ft = rt ? 1 : Math.floor(vn("items")),
          dt = vn("slideBy"),
          vt = O.viewportMax || O.fixedWidthViewportWidth,
          pt = vn("arrowKeys"),
          mt = vn("speed"),
          ht = O.rewind,
          yt = !ht && O.loop,
          gt = vn("autoHeight"),
          xt = vn("controls"),
          bt = vn("controlsText"),
          Ct = vn("nav"),
          wt = vn("touch"),
          Mt = vn("mouseDrag"),
          Tt = vn("autoplay"),
          Et = vn("autoplayTimeout"),
          At = vn("autoplayText"),
          Nt = vn("autoplayHoverPause"),
          Lt = vn("autoplayResetOnVisibility"),
          Bt = (at = document.createElement("style"), it && at.setAttribute("media", it), document.querySelector("head").appendChild(at), at.sheet ? at.sheet : at.styleSheet),
          St = O.lazyload,
          Ot = (O.lazyloadSelector, []),
          Dt = yt ? (et = function () {
        {
          if (rt || ot && !vt) return K - 1;
          var t = ot ? "fixedWidth" : "items",
              e = [];
          if ((ot || O[t] < K) && e.push(O[t]), k) for (var n in k) {
            var i = k[n][t];
            i && (ot || i < K) && e.push(i);
          }
          return e.length || e.push(0), Math.ceil(ot ? vt / Math.min.apply(null, e) : Math.max.apply(null, e));
        }
      }(), nt = I ? Math.ceil((5 * et - K) / 2) : 4 * et - K, nt = Math.max(et, nt), dn("edgePadding") ? nt + 1 : nt) : 0,
          Ht = I ? K + 2 * Dt : K + Dt,
          kt = !(!ot && !rt || yt),
          Rt = ot ? ni() : null,
          It = !I || !yt,
          Pt = q ? "left" : "top",
          zt = "",
          Wt = "",
          Ft = ot ? function () {
        return ct && !yt ? K - 1 : Math.ceil(-Rt / (ot + lt));
      } : rt ? function () {
        for (var t = Ht; t--;) {
          if (_[t] >= -Rt) return t;
        }
      } : function () {
        return ct && I && !yt ? K - 1 : yt || I ? Math.max(0, Ht - Math.ceil(ft)) : Ht - 1;
      },
          qt = on(vn("startIndex")),
          jt = qt,
          Vt = (rn(), 0),
          Gt = rt ? null : Ft(),
          Qt = O.preventActionWhenRunning,
          Xt = O.swipeAngle,
          Yt = !Xt || "?",
          Kt = !1,
          Jt = O.onInit,
          Ut = new ia(),
          _t = " tns-slider tns-" + O.mode,
          Zt = G.id || (tt = window.tnsId, window.tnsId = tt ? tt + 1 : 1, "tns" + window.tnsId),
          $t = vn("disable"),
          te = !1,
          ee = O.freezable,
          ne = !(!ee || rt) && Ln(),
          ie = !1,
          ae = {
        click: fi,
        keydown: function keydown(t) {
          t = xi(t);
          var e = [a.LEFT, a.RIGHT].indexOf(t.keyCode);
          0 <= e && (0 === e ? Ee.disabled || fi(t, -1) : Ae.disabled || fi(t, 1));
        }
      },
          re = {
        click: function click(t) {
          if (Kt) {
            if (Qt) return;
            si();
          }

          var e = bi(t = xi(t));

          for (; e !== Se && !Qi(e, "data-nav");) {
            e = e.parentNode;
          }

          if (Qi(e, "data-nav")) {
            var n = ke = Number(Xi(e, "data-nav")),
                i = ot || rt ? n * K / De : n * ft,
                a = ve ? n : Math.min(Math.ceil(i), K - 1);
            ci(a, t), Re === n && (qe && hi(), ke = -1);
          }
        },
        keydown: function keydown(t) {
          t = xi(t);
          var e = D.activeElement;
          if (!Qi(e, "data-nav")) return;
          var n = [a.LEFT, a.RIGHT, a.ENTER, a.SPACE].indexOf(t.keyCode),
              i = Number(Xi(e, "data-nav"));
          0 <= n && (0 === n ? 0 < i && gi(Be[i - 1]) : 1 === n ? i < De - 1 && gi(Be[i + 1]) : ci(ke = i, t));
        }
      },
          oe = {
        mouseover: function mouseover() {
          qe && (vi(), je = !0);
        },
        mouseout: function mouseout() {
          je && (di(), je = !1);
        }
      },
          ue = {
        visibilitychange: function visibilitychange() {
          D.hidden ? qe && (vi(), Ge = !0) : Ge && (di(), Ge = !1);
        }
      },
          le = {
        keydown: function keydown(t) {
          t = xi(t);
          var e = [a.LEFT, a.RIGHT].indexOf(t.keyCode);
          0 <= e && fi(t, 0 === e ? -1 : 1);
        }
      },
          se = {
        touchstart: Ti,
        touchmove: Ei,
        touchend: Ai,
        touchcancel: Ai
      },
          ce = {
        mousedown: Ti,
        mousemove: Ei,
        mouseup: Ai,
        mouseleave: Ai
      },
          fe = dn("controls"),
          de = dn("nav"),
          ve = !!rt || O.navAsThumbnails,
          pe = dn("autoplay"),
          me = dn("touch"),
          he = dn("mouseDrag"),
          ye = "tns-slide-active",
          ge = "tns-complete",
          xe = {
        load: function load(t) {
          zn(bi(t));
        },
        error: function error(t) {
          e = bi(t), Vi(e, "failed"), Wn(e);
          var e;
        }
      },
          be = "force" === O.preventScrollOnTouch;

      if (fe) var Ce,
          we,
          Me = O.controlsContainer,
          Te = O.controlsContainer ? O.controlsContainer.outerHTML : "",
          Ee = O.prevButton,
          Ae = O.nextButton,
          Ne = O.prevButton ? O.prevButton.outerHTML : "",
          Le = O.nextButton ? O.nextButton.outerHTML : "";
      if (de) var Be,
          Se = O.navContainer,
          Oe = O.navContainer ? O.navContainer.outerHTML : "",
          De = rt ? K : Li(),
          He = 0,
          ke = -1,
          Re = ln(),
          Ie = Re,
          Pe = "tns-nav-active",
          ze = "Carousel Page ",
          We = " (Current Slide)";
      if (pe) var Fe,
          qe,
          je,
          Ve,
          Ge,
          Qe = "forward" === O.autoplayDirection ? 1 : -1,
          Xe = O.autoplayButton,
          Ye = O.autoplayButton ? O.autoplayButton.outerHTML : "",
          Ke = ["<span class='tns-visually-hidden'>", " animation</span>"];
      if (me || he) var Je,
          Ue,
          _e = {},
          Ze = {},
          $e = !1,
          tn = q ? function (t, e) {
        return t.x - e.x;
      } : function (t, e) {
        return t.y - e.y;
      };
      rt || an($t || ne), d && (Pt = d, zt = "translate", v ? (zt += q ? "3d(" : "3d(0px, ", Wt = q ? ", 0px, 0px)" : ", 0px)") : (zt += q ? "X(" : "Y(", Wt = ")")), I && (G.className = G.className.replace("tns-vpfix", "")), function () {
        dn("gutter");
        j.className = "tns-outer", V.className = "tns-inner", j.id = Zt + "-ow", V.id = Zt + "-iw", "" === G.id && (G.id = Zt);
        _t += g || rt ? " tns-subpixel" : " tns-no-subpixel", _t += y ? " tns-calc" : " tns-no-calc", rt && (_t += " tns-autowidth");
        _t += " tns-" + O.axis, G.className += _t, I ? ((S = D.createElement("div")).id = Zt + "-mw", S.className = "tns-ovh", j.appendChild(S), S.appendChild(V)) : j.appendChild(V);

        if (gt) {
          var t = S || V;
          t.className += " tns-ah";
        }

        if (Q.insertBefore(j, G), V.appendChild(G), qi(Y, function (t, e) {
          Vi(t, "tns-item"), t.id || (t.id = Zt + "-item" + e), !I && W && Vi(t, W), Yi(t, {
            "aria-hidden": "true",
            tabindex: "-1"
          });
        }), Dt) {
          for (var e = D.createDocumentFragment(), n = D.createDocumentFragment(), i = Dt; i--;) {
            var a = i % K,
                r = Y[a].cloneNode(!0);

            if (Ki(r, "id"), n.insertBefore(r, n.firstChild), I) {
              var o = Y[K - 1 - a].cloneNode(!0);
              Ki(o, "id"), e.appendChild(o);
            }
          }

          G.insertBefore(e, G.firstChild), G.appendChild(n), Y = G.children;
        }
      }(), function () {
        if (!I) for (var t = qt, e = qt + Math.min(K, ft); t < e; t++) {
          var n = Y[t];
          n.style.left = 100 * (t - qt) / ft + "%", Vi(n, P), Gi(n, W);
        }
        q && (g || rt ? (Wi(Bt, "#" + Zt + " > .tns-item", "font-size:" + h.getComputedStyle(Y[0]).fontSize + ";", Fi(Bt)), Wi(Bt, "#" + Zt, "font-size:0;", Fi(Bt))) : I && qi(Y, function (t, e) {
          var n;
          t.style.marginLeft = (n = e, y ? y + "(" + 100 * n + "% / " + Ht + ")" : 100 * n / Ht + "%");
        }));

        if (H) {
          if (x) {
            var i = S && O.autoHeight ? xn(O.speed) : "";
            Wi(Bt, "#" + Zt + "-mw", i, Fi(Bt));
          }

          i = pn(O.edgePadding, O.gutter, O.fixedWidth, O.speed, O.autoHeight), Wi(Bt, "#" + Zt + "-iw", i, Fi(Bt)), I && (i = q && !rt ? "width:" + mn(O.fixedWidth, O.gutter, O.items) + ";" : "", x && (i += xn(mt)), Wi(Bt, "#" + Zt, i, Fi(Bt))), i = q && !rt ? hn(O.fixedWidth, O.gutter, O.items) : "", O.gutter && (i += yn(O.gutter)), I || (x && (i += xn(mt)), b && (i += bn(mt))), i && Wi(Bt, "#" + Zt + " > .tns-item", i, Fi(Bt));
        } else {
          Gn(), V.style.cssText = pn(ut, lt, ot, gt), I && q && !rt && (G.style.width = mn(ot, lt, ft));
          var i = q && !rt ? hn(ot, lt, ft) : "";
          lt && (i += yn(lt)), i && Wi(Bt, "#" + Zt + " > .tns-item", i, Fi(Bt));
        }

        if (k && H) for (var a in k) {
          a = parseInt(a);
          var r = k[a],
              i = "",
              o = "",
              u = "",
              l = "",
              s = "",
              c = rt ? null : vn("items", a),
              f = vn("fixedWidth", a),
              d = vn("speed", a),
              v = vn("edgePadding", a),
              p = vn("autoHeight", a),
              m = vn("gutter", a);
          x && S && vn("autoHeight", a) && "speed" in r && (o = "#" + Zt + "-mw{" + xn(d) + "}"), ("edgePadding" in r || "gutter" in r) && (u = "#" + Zt + "-iw{" + pn(v, m, f, d, p) + "}"), I && q && !rt && ("fixedWidth" in r || "items" in r || ot && "gutter" in r) && (l = "width:" + mn(f, m, c) + ";"), x && "speed" in r && (l += xn(d)), l && (l = "#" + Zt + "{" + l + "}"), ("fixedWidth" in r || ot && "gutter" in r || !I && "items" in r) && (s += hn(f, m, c)), "gutter" in r && (s += yn(m)), !I && "speed" in r && (x && (s += xn(d)), b && (s += bn(d))), s && (s = "#" + Zt + " > .tns-item{" + s + "}"), (i = o + u + l + s) && Bt.insertRule("@media (min-width: " + a / 16 + "em) {" + i + "}", Bt.cssRules.length);
        }
      }(), Cn();
      var en = yt ? I ? function () {
        var t = Vt,
            e = Gt;
        t += dt, e -= dt, ut ? (t += 1, e -= 1) : ot && (st + lt) % (ot + lt) && (e -= 1), Dt && (e < qt ? qt -= K : qt < t && (qt += K));
      } : function () {
        if (Gt < qt) for (; Vt + K <= qt;) {
          qt -= K;
        } else if (qt < Vt) for (; qt <= Gt - K;) {
          qt += K;
        }
      } : function () {
        qt = Math.max(Vt, Math.min(Gt, qt));
      },
          nn = I ? function () {
        var e, n, i, a, t, r, o, u, l, s, c;
        ti(G, ""), x || !mt ? (ri(), mt && Zi(G) || si()) : (e = G, n = Pt, i = zt, a = Wt, t = ii(), r = mt, o = si, u = Math.min(r, 10), l = 0 <= t.indexOf("%") ? "%" : "px", t = t.replace(l, ""), s = Number(e.style[n].replace(i, "").replace(a, "").replace(l, "")), c = (t - s) / r * u, setTimeout(function t() {
          r -= u, s += c, e.style[n] = i + s + l + a, 0 < r ? setTimeout(t, u) : o();
        }, u)), q || Ni();
      } : function () {
        Ot = [];
        var t = {};
        t[C] = t[w] = si, na(Y[jt], t), ea(Y[qt], t), oi(jt, P, z, !0), oi(qt, W, P), C && w && mt && Zi(G) || si();
      };
      return {
        version: "2.9.2",
        getInfo: Si,
        events: Ut,
        goTo: ci,
        play: function play() {
          Tt && !qe && (mi(), Ve = !1);
        },
        pause: function pause() {
          qe && (hi(), Ve = !0);
        },
        isOn: U,
        updateSliderHeight: Xn,
        refresh: Cn,
        destroy: function destroy() {
          if (Bt.disabled = !0, Bt.ownerNode && Bt.ownerNode.remove(), na(h, {
            resize: An
          }), pt && na(D, le), Me && na(Me, ae), Se && na(Se, re), na(G, oe), na(G, ue), Xe && na(Xe, {
            click: yi
          }), Tt && clearInterval(Fe), I && C) {
            var t = {};
            t[C] = si, na(G, t);
          }

          wt && na(G, se), Mt && na(G, ce);
          var r = [X, Te, Ne, Le, Oe, Ye];

          for (var e in T.forEach(function (t, e) {
            var n = "container" === t ? j : O[t];

            if ("object" == _typeof2(n)) {
              var i = !!n.previousElementSibling && n.previousElementSibling,
                  a = n.parentNode;
              n.outerHTML = r[e], O[t] = i ? i.nextElementSibling : a.firstElementChild;
            }
          }), T = P = z = B = W = q = j = V = G = Q = X = Y = K = F = J = rt = ot = ut = lt = st = ft = dt = vt = pt = mt = ht = yt = gt = Bt = St = _ = Ot = Dt = Ht = kt = Rt = It = Pt = zt = Wt = Ft = qt = jt = Vt = Gt = Xt = Yt = Kt = Jt = Ut = _t = Zt = $t = te = ee = ne = ie = ae = re = oe = ue = le = se = ce = fe = de = ve = pe = me = he = ye = ge = xe = Z = xt = bt = Me = Te = Ee = Ae = Ce = we = Ct = Se = Oe = Be = De = He = ke = Re = Ie = Pe = ze = We = Tt = Et = Qe = At = Nt = Xe = Ye = Lt = Ke = Fe = qe = je = Ve = Ge = _e = Ze = Je = $e = Ue = tn = wt = Mt = null, this) {
            "rebuild" !== e && (this[e] = null);
          }

          U = !1;
        },
        rebuild: function rebuild() {
          return aa(Hi(O, E));
        }
      };
    }

    function an(t) {
      t && (xt = Ct = wt = Mt = pt = Tt = Nt = Lt = !1);
    }

    function rn() {
      for (var t = I ? qt - Dt : qt; t < 0;) {
        t += K;
      }

      return t % K + 1;
    }

    function on(t) {
      return t = t ? Math.max(0, Math.min(yt ? K - 1 : K - ft, t)) : 0, I ? t + Dt : t;
    }

    function un(t) {
      for (null == t && (t = qt), I && (t -= Dt); t < 0;) {
        t += K;
      }

      return Math.floor(t % K);
    }

    function ln() {
      var t,
          e = un();
      return t = ve ? e : ot || rt ? Math.ceil((e + 1) * De / K - 1) : Math.floor(e / ft), !yt && I && qt === Gt && (t = De - 1), t;
    }

    function sn() {
      return h.innerWidth || D.documentElement.clientWidth || D.body.clientWidth;
    }

    function cn(t) {
      return "top" === t ? "afterbegin" : "beforeend";
    }

    function fn() {
      var t = ut ? 2 * ut - lt : 0;
      return function t(e) {
        var n,
            i,
            a = D.createElement("div");
        return e.appendChild(a), i = (n = a.getBoundingClientRect()).right - n.left, a.remove(), i || t(e.parentNode);
      }(Q) - t;
    }

    function dn(t) {
      if (O[t]) return !0;
      if (k) for (var e in k) {
        if (k[e][t]) return !0;
      }
      return !1;
    }

    function vn(t, e) {
      if (null == e && (e = J), "items" === t && ot) return Math.floor((st + lt) / (ot + lt)) || 1;
      var n = O[t];
      if (k) for (var i in k) {
        e >= parseInt(i) && t in k[i] && (n = k[i][t]);
      }
      return "slideBy" === t && "page" === n && (n = vn("items")), I || "slideBy" !== t && "items" !== t || (n = Math.floor(n)), n;
    }

    function pn(t, e, n, i, a) {
      var r = "";

      if (void 0 !== t) {
        var o = t;
        e && (o -= e), r = q ? "margin: 0 " + o + "px 0 " + t + "px;" : "margin: " + t + "px 0 " + o + "px 0;";
      } else if (e && !n) {
        var u = "-" + e + "px";
        r = "margin: 0 " + (q ? u + " 0 0" : "0 " + u + " 0") + ";";
      }

      return !I && a && x && i && (r += xn(i)), r;
    }

    function mn(t, e, n) {
      return t ? (t + e) * Ht + "px" : y ? y + "(" + 100 * Ht + "% / " + n + ")" : 100 * Ht / n + "%";
    }

    function hn(t, e, n) {
      var i;
      if (t) i = t + e + "px";else {
        I || (n = Math.floor(n));
        var a = I ? Ht : n;
        i = y ? y + "(100% / " + a + ")" : 100 / a + "%";
      }
      return i = "width:" + i, "inner" !== R ? i + ";" : i + " !important;";
    }

    function yn(t) {
      var e = "";
      !1 !== t && (e = (q ? "padding-" : "margin-") + (q ? "right" : "bottom") + ": " + t + "px;");
      return e;
    }

    function gn(t, e) {
      var n = t.substring(0, t.length - e).toLowerCase();
      return n && (n = "-" + n + "-"), n;
    }

    function xn(t) {
      return gn(x, 18) + "transition-duration:" + t / 1e3 + "s;";
    }

    function bn(t) {
      return gn(b, 17) + "animation-duration:" + t / 1e3 + "s;";
    }

    function Cn() {
      if (dn("autoHeight") || rt || !q) {
        var t = G.querySelectorAll("img");
        qi(t, function (t) {
          var e = t.src;
          e && e.indexOf("data:image") < 0 ? (ea(t, xe), t.src = "", t.src = e, Vi(t, "loading")) : St || zn(t);
        }), Oi(function () {
          jn(Ji(t), function () {
            Z = !0;
          });
        }), !rt && q && (t = Fn(qt, Math.min(qt + ft - 1, Ht - 1))), St ? wn() : Oi(function () {
          jn(Ji(t), wn);
        });
      } else I && ai(), Tn(), En();
    }

    function wn() {
      if (rt) {
        var e = yt ? qt : K - 1;
        !function t() {
          Y[e - 1].getBoundingClientRect().right.toFixed(2) === Y[e].getBoundingClientRect().left.toFixed(2) ? Mn() : setTimeout(function () {
            t();
          }, 16);
        }();
      } else Mn();
    }

    function Mn() {
      q && !rt || (Yn(), rt ? (Rt = ni(), ee && (ne = Ln()), Gt = Ft(), an($t || ne)) : Ni()), I && ai(), Tn(), En();
    }

    function Tn() {
      if (Kn(), j.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + Rn() + "</span>  of " + K + "</div>"), $ = j.querySelector(".tns-liveregion .current"), pe) {
        var t = Tt ? "stop" : "start";
        Xe ? Yi(Xe, {
          "data-action": t
        }) : O.autoplayButtonOutput && (j.insertAdjacentHTML(cn(O.autoplayPosition), '<button data-action="' + t + '">' + Ke[0] + t + Ke[1] + At[0] + "</button>"), Xe = j.querySelector("[data-action]")), Xe && ea(Xe, {
          click: yi
        }), Tt && (mi(), Nt && ea(G, oe), Lt && ea(G, ue));
      }

      if (de) {
        if (Se) Yi(Se, {
          "aria-label": "Carousel Pagination"
        }), qi(Be = Se.children, function (t, e) {
          Yi(t, {
            "data-nav": e,
            tabindex: "-1",
            "aria-label": ze + (e + 1),
            "aria-controls": Zt
          });
        });else {
          for (var e = "", n = ve ? "" : 'style="display:none"', i = 0; i < K; i++) {
            e += '<button data-nav="' + i + '" tabindex="-1" aria-controls="' + Zt + '" ' + n + ' aria-label="' + ze + (i + 1) + '"></button>';
          }

          e = '<div class="tns-nav" aria-label="Carousel Pagination">' + e + "</div>", j.insertAdjacentHTML(cn(O.navPosition), e), Se = j.querySelector(".tns-nav"), Be = Se.children;
        }

        if (Bi(), x) {
          var a = x.substring(0, x.length - 18).toLowerCase(),
              r = "transition: all " + mt / 1e3 + "s";
          a && (r = "-" + a + "-" + r), Wi(Bt, "[aria-controls^=" + Zt + "-item]", r, Fi(Bt));
        }

        Yi(Be[Re], {
          "aria-label": ze + (Re + 1) + We
        }), Ki(Be[Re], "tabindex"), Vi(Be[Re], Pe), ea(Se, re);
      }

      fe && (Me || Ee && Ae || (j.insertAdjacentHTML(cn(O.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + Zt + '">' + bt[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + Zt + '">' + bt[1] + "</button></div>"), Me = j.querySelector(".tns-controls")), Ee && Ae || (Ee = Me.children[0], Ae = Me.children[1]), O.controlsContainer && Yi(Me, {
        "aria-label": "Carousel Navigation",
        tabindex: "0"
      }), (O.controlsContainer || O.prevButton && O.nextButton) && Yi([Ee, Ae], {
        "aria-controls": Zt,
        tabindex: "-1"
      }), (O.controlsContainer || O.prevButton && O.nextButton) && (Yi(Ee, {
        "data-controls": "prev"
      }), Yi(Ae, {
        "data-controls": "next"
      })), Ce = Un(Ee), we = Un(Ae), $n(), Me ? ea(Me, ae) : (ea(Ee, ae), ea(Ae, ae))), Sn();
    }

    function En() {
      if (I && C) {
        var t = {};
        t[C] = si, ea(G, t);
      }

      wt && ea(G, se, O.preventScrollOnTouch), Mt && ea(G, ce), pt && ea(D, le), "inner" === R ? Ut.on("outerResized", function () {
        Nn(), Ut.emit("innerLoaded", Si());
      }) : (k || ot || rt || gt || !q) && ea(h, {
        resize: An
      }), gt && ("outer" === R ? Ut.on("innerLoaded", qn) : $t || qn()), Pn(), $t ? Hn() : ne && Dn(), Ut.on("indexChanged", Vn), "inner" === R && Ut.emit("innerLoaded", Si()), "function" == typeof Jt && Jt(Si()), U = !0;
    }

    function An(t) {
      Oi(function () {
        Nn(xi(t));
      });
    }

    function Nn(t) {
      if (U) {
        "outer" === R && Ut.emit("outerResized", Si(t)), J = sn();
        var e,
            n = F,
            i = !1;
        k && (Bn(), (e = n !== F) && Ut.emit("newBreakpointStart", Si(t)));
        var a,
            r,
            o,
            u,
            l = ft,
            s = $t,
            c = ne,
            f = pt,
            d = xt,
            v = Ct,
            p = wt,
            m = Mt,
            h = Tt,
            y = Nt,
            g = Lt,
            x = qt;

        if (e) {
          var b = ot,
              C = gt,
              w = bt,
              M = ct,
              T = At;
          if (!H) var E = lt,
              A = ut;
        }

        if (pt = vn("arrowKeys"), xt = vn("controls"), Ct = vn("nav"), wt = vn("touch"), ct = vn("center"), Mt = vn("mouseDrag"), Tt = vn("autoplay"), Nt = vn("autoplayHoverPause"), Lt = vn("autoplayResetOnVisibility"), e && ($t = vn("disable"), ot = vn("fixedWidth"), mt = vn("speed"), gt = vn("autoHeight"), bt = vn("controlsText"), At = vn("autoplayText"), Et = vn("autoplayTimeout"), H || (ut = vn("edgePadding"), lt = vn("gutter"))), an($t), st = fn(), q && !rt || $t || (Yn(), q || (Ni(), i = !0)), (ot || rt) && (Rt = ni(), Gt = Ft()), (e || ot) && (ft = vn("items"), dt = vn("slideBy"), (r = ft !== l) && (ot || rt || (Gt = Ft()), en())), e && $t !== s && ($t ? Hn() : function () {
          if (!te) return;
          if (Bt.disabled = !1, G.className += _t, ai(), yt) for (var t = Dt; t--;) {
            I && _i(Y[t]), _i(Y[Ht - t - 1]);
          }
          if (!I) for (var e = qt, n = qt + K; e < n; e++) {
            var i = Y[e],
                a = e < qt + ft ? P : W;
            i.style.left = 100 * (e - qt) / ft + "%", Vi(i, a);
          }
          On(), te = !1;
        }()), ee && (e || ot || rt) && (ne = Ln()) !== c && (ne ? (ri(ii(on(0))), Dn()) : (!function () {
          if (!ie) return;
          ut && H && (V.style.margin = "");
          if (Dt) for (var t = "tns-transparent", e = Dt; e--;) {
            I && Gi(Y[e], t), Gi(Y[Ht - e - 1], t);
          }
          On(), ie = !1;
        }(), i = !0)), an($t || ne), Tt || (Nt = Lt = !1), pt !== f && (pt ? ea(D, le) : na(D, le)), xt !== d && (xt ? Me ? _i(Me) : (Ee && _i(Ee), Ae && _i(Ae)) : Me ? Ui(Me) : (Ee && Ui(Ee), Ae && Ui(Ae))), Ct !== v && (Ct ? _i(Se) : Ui(Se)), wt !== p && (wt ? ea(G, se, O.preventScrollOnTouch) : na(G, se)), Mt !== m && (Mt ? ea(G, ce) : na(G, ce)), Tt !== h && (Tt ? (Xe && _i(Xe), qe || Ve || mi()) : (Xe && Ui(Xe), qe && hi())), Nt !== y && (Nt ? ea(G, oe) : na(G, oe)), Lt !== g && (Lt ? ea(D, ue) : na(D, ue)), e) {
          if (ot === b && ct === M || (i = !0), gt !== C && (gt || (V.style.height = "")), xt && bt !== w && (Ee.innerHTML = bt[0], Ae.innerHTML = bt[1]), Xe && At !== T) {
            var N = Tt ? 1 : 0,
                L = Xe.innerHTML,
                B = L.length - T[N].length;
            L.substring(B) === T[N] && (Xe.innerHTML = L.substring(0, B) + At[N]);
          }
        } else ct && (ot || rt) && (i = !0);

        if ((r || ot && !rt) && (De = Li(), Bi()), (a = qt !== x) ? (Ut.emit("indexChanged", Si()), i = !0) : r ? a || Vn() : (ot || rt) && (Pn(), Kn(), kn()), r && !I && function () {
          for (var t = qt + Math.min(K, ft), e = Ht; e--;) {
            var n = Y[e];
            qt <= e && e < t ? (Vi(n, "tns-moving"), n.style.left = 100 * (e - qt) / ft + "%", Vi(n, P), Gi(n, W)) : n.style.left && (n.style.left = "", Vi(n, W), Gi(n, P)), Gi(n, z);
          }

          setTimeout(function () {
            qi(Y, function (t) {
              Gi(t, "tns-moving");
            });
          }, 300);
        }(), !$t && !ne) {
          if (e && !H && (gt === autoheightTem && mt === speedTem || Gn(), ut === A && lt === E || (V.style.cssText = pn(ut, lt, ot, mt, gt)), q)) {
            I && (G.style.width = mn(ot, lt, ft));
            var S = hn(ot, lt, ft) + yn(lt);
            u = Fi(o = Bt) - 1, "deleteRule" in o ? o.deleteRule(u) : o.removeRule(u), Wi(Bt, "#" + Zt + " > .tns-item", S, Fi(Bt));
          }

          gt && qn(), i && (ai(), jt = qt);
        }

        e && Ut.emit("newBreakpointEnd", Si(t));
      }
    }

    function Ln() {
      if (!ot && !rt) return K <= (ct ? ft - (ft - 1) / 2 : ft);
      var t = ot ? (ot + lt) * K : _[K],
          e = ut ? st + 2 * ut : st + lt;
      return ct && (e -= ot ? (st - ot) / 2 : (st - (_[qt + 1] - _[qt] - lt)) / 2), t <= e;
    }

    function Bn() {
      for (var t in F = 0, k) {
        (t = parseInt(t)) <= J && (F = t);
      }
    }

    function Sn() {
      !Tt && Xe && Ui(Xe), !Ct && Se && Ui(Se), xt || (Me ? Ui(Me) : (Ee && Ui(Ee), Ae && Ui(Ae)));
    }

    function On() {
      Tt && Xe && _i(Xe), Ct && Se && _i(Se), xt && (Me ? _i(Me) : (Ee && _i(Ee), Ae && _i(Ae)));
    }

    function Dn() {
      if (!ie) {
        if (ut && (V.style.margin = "0px"), Dt) for (var t = "tns-transparent", e = Dt; e--;) {
          I && Vi(Y[e], t), Vi(Y[Ht - e - 1], t);
        }
        Sn(), ie = !0;
      }
    }

    function Hn() {
      if (!te) {
        if (Bt.disabled = !0, G.className = G.className.replace(_t.substring(1), ""), Ki(G, ["style"]), yt) for (var t = Dt; t--;) {
          I && Ui(Y[t]), Ui(Y[Ht - t - 1]);
        }
        if (q && I || Ki(V, ["style"]), !I) for (var e = qt, n = qt + K; e < n; e++) {
          var i = Y[e];
          Ki(i, ["style"]), Gi(i, P), Gi(i, W);
        }
        Sn(), te = !0;
      }
    }

    function kn() {
      var t = Rn();
      $.innerHTML !== t && ($.innerHTML = t);
    }

    function Rn() {
      var t = In(),
          e = t[0] + 1,
          n = t[1] + 1;
      return e === n ? e + "" : e + " to " + n;
    }

    function In(t) {
      null == t && (t = ii());
      var n,
          i,
          a,
          r = qt;
      if (ct || ut ? (rt || ot) && (i = -(parseFloat(t) + ut), a = i + st + 2 * ut) : rt && (i = _[qt], a = i + st), rt) _.forEach(function (t, e) {
        e < Ht && ((ct || ut) && t <= i + .5 && (r = e), .5 <= a - t && (n = e));
      });else {
        if (ot) {
          var e = ot + lt;
          ct || ut ? (r = Math.floor(i / e), n = Math.ceil(a / e - 1)) : n = r + Math.ceil(st / e) - 1;
        } else if (ct || ut) {
          var o = ft - 1;

          if (ct ? (r -= o / 2, n = qt + o / 2) : n = qt + o, ut) {
            var u = ut * ft / st;
            r -= u, n += u;
          }

          r = Math.floor(r), n = Math.ceil(n);
        } else n = r + ft - 1;

        r = Math.max(r, 0), n = Math.min(n, Ht - 1);
      }
      return [r, n];
    }

    function Pn() {
      St && !$t && Fn.apply(null, In()).forEach(function (t) {
        if (!ji(t, ge)) {
          var e = {};
          e[C] = function (t) {
            t.stopPropagation();
          }, ea(t, e), ea(t, xe), t.src = Xi(t, "data-src");
          var n = Xi(t, "data-srcset");
          n && (t.srcset = n), Vi(t, "loading");
        }
      });
    }

    function zn(t) {
      Vi(t, "loaded"), Wn(t);
    }

    function Wn(t) {
      Vi(t, "tns-complete"), Gi(t, "loading"), na(t, xe);
    }

    function Fn(t, e) {
      for (var n = []; t <= e;) {
        qi(Y[t].querySelectorAll("img"), function (t) {
          n.push(t);
        }), t++;
      }

      return n;
    }

    function qn() {
      var t = Fn.apply(null, In());
      Oi(function () {
        jn(t, Xn);
      });
    }

    function jn(n, t) {
      return Z ? t() : (n.forEach(function (t, e) {
        ji(t, ge) && n.splice(e, 1);
      }), n.length ? void Oi(function () {
        jn(n, t);
      }) : t());
    }

    function Vn() {
      Pn(), Kn(), kn(), $n(), function () {
        if (Ct && (Re = 0 <= ke ? ke : ln(), ke = -1, Re !== Ie)) {
          var t = Be[Ie],
              e = Be[Re];
          Yi(t, {
            tabindex: "-1",
            "aria-label": ze + (Ie + 1)
          }), Gi(t, Pe), Yi(e, {
            "aria-label": ze + (Re + 1) + We
          }), Ki(e, "tabindex"), Vi(e, Pe), Ie = Re;
        }
      }();
    }

    function Gn() {
      I && gt && (S.style[x] = mt / 1e3 + "s");
    }

    function Qn(t, e) {
      for (var n = [], i = t, a = Math.min(t + e, Ht); i < a; i++) {
        n.push(Y[i].offsetHeight);
      }

      return Math.max.apply(null, n);
    }

    function Xn() {
      var t = gt ? Qn(qt, ft) : Qn(Dt, K),
          e = S || V;
      e.style.height !== t && (e.style.height = t + "px");
    }

    function Yn() {
      _ = [0];
      var n = q ? "left" : "top",
          i = q ? "right" : "bottom",
          a = Y[0].getBoundingClientRect()[n];
      qi(Y, function (t, e) {
        e && _.push(t.getBoundingClientRect()[n] - a), e === Ht - 1 && _.push(t.getBoundingClientRect()[i] - a);
      });
    }

    function Kn() {
      var t = In(),
          n = t[0],
          i = t[1];
      qi(Y, function (t, e) {
        n <= e && e <= i ? Qi(t, "aria-hidden") && (Ki(t, ["aria-hidden", "tabindex"]), Vi(t, ye)) : Qi(t, "aria-hidden") || (Yi(t, {
          "aria-hidden": "true",
          tabindex: "-1"
        }), Gi(t, ye));
      });
    }

    function Jn(t) {
      return t.nodeName.toLowerCase();
    }

    function Un(t) {
      return "button" === Jn(t);
    }

    function _n(t) {
      return "true" === t.getAttribute("aria-disabled");
    }

    function Zn(t, e, n) {
      t ? e.disabled = n : e.setAttribute("aria-disabled", n.toString());
    }

    function $n() {
      if (xt && !ht && !yt) {
        var t = Ce ? Ee.disabled : _n(Ee),
            e = we ? Ae.disabled : _n(Ae),
            n = qt <= Vt,
            i = !ht && Gt <= qt;
        n && !t && Zn(Ce, Ee, !0), !n && t && Zn(Ce, Ee, !1), i && !e && Zn(we, Ae, !0), !i && e && Zn(we, Ae, !1);
      }
    }

    function ti(t, e) {
      x && (t.style[x] = e);
    }

    function ei(t) {
      return null == t && (t = qt), rt ? (st - (ut ? lt : 0) - (_[t + 1] - _[t] - lt)) / 2 : ot ? (st - ot) / 2 : (ft - 1) / 2;
    }

    function ni() {
      var t = st + (ut ? lt : 0) - (ot ? (ot + lt) * Ht : _[Ht]);
      return ct && !yt && (t = ot ? -(ot + lt) * (Ht - 1) - ei() : ei(Ht - 1) - _[Ht - 1]), 0 < t && (t = 0), t;
    }

    function ii(t) {
      var e;
      if (null == t && (t = qt), q && !rt) {
        if (ot) e = -(ot + lt) * t, ct && (e += ei());else {
          var n = d ? Ht : ft;
          ct && (t -= ei()), e = 100 * -t / n;
        }
      } else e = -_[t], ct && rt && (e += ei());
      return kt && (e = Math.max(e, Rt)), e += !q || rt || ot ? "px" : "%";
    }

    function ai(t) {
      ti(G, "0s"), ri(t);
    }

    function ri(t) {
      null == t && (t = ii()), G.style[Pt] = zt + t + Wt;
    }

    function oi(t, e, n, i) {
      var a = t + ft;
      yt || (a = Math.min(a, Ht));

      for (var r = t; r < a; r++) {
        var o = Y[r];
        i || (o.style.left = 100 * (r - qt) / ft + "%"), B && p && (o.style[p] = o.style[m] = B * (r - t) / 1e3 + "s"), Gi(o, e), Vi(o, n), i && Ot.push(o);
      }
    }

    function ui(t, e) {
      It && en(), (qt !== jt || e) && (Ut.emit("indexChanged", Si()), Ut.emit("transitionStart", Si()), gt && qn(), qe && t && 0 <= ["click", "keydown"].indexOf(t.type) && hi(), Kt = !0, nn());
    }

    function li(t) {
      return t.toLowerCase().replace(/-/g, "");
    }

    function si(t) {
      if (I || Kt) {
        if (Ut.emit("transitionEnd", Si(t)), !I && 0 < Ot.length) for (var e = 0; e < Ot.length; e++) {
          var n = Ot[e];
          n.style.left = "", m && p && (n.style[m] = "", n.style[p] = ""), Gi(n, z), Vi(n, W);
        }

        if (!t || !I && t.target.parentNode === G || t.target === G && li(t.propertyName) === li(Pt)) {
          if (!It) {
            var i = qt;
            en(), qt !== i && (Ut.emit("indexChanged", Si()), ai());
          }

          "inner" === R && Ut.emit("innerLoaded", Si()), Kt = !1, jt = qt;
        }
      }
    }

    function ci(t, e) {
      if (!ne) if ("prev" === t) fi(e, -1);else if ("next" === t) fi(e, 1);else {
        if (Kt) {
          if (Qt) return;
          si();
        }

        var n = un(),
            i = 0;

        if ("first" === t ? i = -n : "last" === t ? i = I ? K - ft - n : K - 1 - n : ("number" != typeof t && (t = parseInt(t)), isNaN(t) || (e || (t = Math.max(0, Math.min(K - 1, t))), i = t - n)), !I && i && Math.abs(i) < ft) {
          var a = 0 < i ? 1 : -1;
          i += Vt <= qt + i - K ? K * a : 2 * K * a * -1;
        }

        qt += i, I && yt && (qt < Vt && (qt += K), Gt < qt && (qt -= K)), un(qt) !== un(jt) && ui(e);
      }
    }

    function fi(t, e) {
      if (Kt) {
        if (Qt) return;
        si();
      }

      var n;

      if (!e) {
        for (var i = bi(t = xi(t)); i !== Me && [Ee, Ae].indexOf(i) < 0;) {
          i = i.parentNode;
        }

        var a = [Ee, Ae].indexOf(i);
        0 <= a && (n = !0, e = 0 === a ? -1 : 1);
      }

      if (ht) {
        if (qt === Vt && -1 === e) return void ci("last", t);
        if (qt === Gt && 1 === e) return void ci("first", t);
      }

      e && (qt += dt * e, rt && (qt = Math.floor(qt)), ui(n || t && "keydown" === t.type ? t : null));
    }

    function di() {
      Fe = setInterval(function () {
        fi(null, Qe);
      }, Et), qe = !0;
    }

    function vi() {
      clearInterval(Fe), qe = !1;
    }

    function pi(t, e) {
      Yi(Xe, {
        "data-action": t
      }), Xe.innerHTML = Ke[0] + t + Ke[1] + e;
    }

    function mi() {
      di(), Xe && pi("stop", At[1]);
    }

    function hi() {
      vi(), Xe && pi("start", At[0]);
    }

    function yi() {
      qe ? (hi(), Ve = !0) : (mi(), Ve = !1);
    }

    function gi(t) {
      t.focus();
    }

    function xi(t) {
      return Ci(t = t || h.event) ? t.changedTouches[0] : t;
    }

    function bi(t) {
      return t.target || h.event.srcElement;
    }

    function Ci(t) {
      return 0 <= t.type.indexOf("touch");
    }

    function wi(t) {
      t.preventDefault ? t.preventDefault() : t.returnValue = !1;
    }

    function Mi() {
      return a = Ze.y - _e.y, r = Ze.x - _e.x, t = Math.atan2(a, r) * (180 / Math.PI), e = Xt, n = !1, i = Math.abs(90 - Math.abs(t)), 90 - e <= i ? n = "horizontal" : i <= e && (n = "vertical"), n === O.axis;
      var t, e, n, i, a, r;
    }

    function Ti(t) {
      if (Kt) {
        if (Qt) return;
        si();
      }

      Tt && qe && vi(), $e = !0, Ue && (Di(Ue), Ue = null);
      var e = xi(t);
      Ut.emit(Ci(t) ? "touchStart" : "dragStart", Si(t)), !Ci(t) && 0 <= ["img", "a"].indexOf(Jn(bi(t))) && wi(t), Ze.x = _e.x = e.clientX, Ze.y = _e.y = e.clientY, I && (Je = parseFloat(G.style[Pt].replace(zt, "")), ti(G, "0s"));
    }

    function Ei(t) {
      if ($e) {
        var e = xi(t);
        Ze.x = e.clientX, Ze.y = e.clientY, I ? Ue || (Ue = Oi(function () {
          !function t(e) {
            if (!Yt) return void ($e = !1);
            Di(Ue);
            $e && (Ue = Oi(function () {
              t(e);
            }));
            "?" === Yt && (Yt = Mi());

            if (Yt) {
              !be && Ci(e) && (be = !0);

              try {
                e.type && Ut.emit(Ci(e) ? "touchMove" : "dragMove", Si(e));
              } catch (t) {}

              var n = Je,
                  i = tn(Ze, _e);
              if (!q || ot || rt) n += i, n += "px";else {
                var a = d ? i * ft * 100 / ((st + lt) * Ht) : 100 * i / (st + lt);
                n += a, n += "%";
              }
              G.style[Pt] = zt + n + Wt;
            }
          }(t);
        })) : ("?" === Yt && (Yt = Mi()), Yt && (be = !0)), be && t.preventDefault();
      }
    }

    function Ai(i) {
      if ($e) {
        Ue && (Di(Ue), Ue = null), I && ti(G, ""), $e = !1;
        var t = xi(i);
        Ze.x = t.clientX, Ze.y = t.clientY;
        var a = tn(Ze, _e);

        if (Math.abs(a)) {
          if (!Ci(i)) {
            var n = bi(i);
            ea(n, {
              click: function t(e) {
                wi(e), na(n, {
                  click: t
                });
              }
            });
          }

          I ? Ue = Oi(function () {
            if (q && !rt) {
              var t = -a * ft / (st + lt);
              t = 0 < a ? Math.floor(t) : Math.ceil(t), qt += t;
            } else {
              var e = -(Je + a);
              if (e <= 0) qt = Vt;else if (e >= _[Ht - 1]) qt = Gt;else for (var n = 0; n < Ht && e >= _[n];) {
                e > _[qt = n] && a < 0 && (qt += 1), n++;
              }
            }

            ui(i, a), Ut.emit(Ci(i) ? "touchEnd" : "dragEnd", Si(i));
          }) : Yt && fi(i, 0 < a ? -1 : 1);
        }
      }

      "auto" === O.preventScrollOnTouch && (be = !1), Xt && (Yt = "?"), Tt && !qe && di();
    }

    function Ni() {
      (S || V).style.height = _[qt + ft] - _[qt] + "px";
    }

    function Li() {
      var t = ot ? (ot + lt) * K / st : K / ft;
      return Math.min(Math.ceil(t), K);
    }

    function Bi() {
      if (Ct && !ve && De !== He) {
        var t = He,
            e = De,
            n = _i;

        for (De < He && (t = De, e = He, n = Ui); t < e;) {
          n(Be[t]), t++;
        }

        He = De;
      }
    }

    function Si(t) {
      return {
        container: G,
        slideItems: Y,
        navContainer: Se,
        navItems: Be,
        controlsContainer: Me,
        hasControls: fe,
        prevButton: Ee,
        nextButton: Ae,
        items: ft,
        slideBy: dt,
        cloneCount: Dt,
        slideCount: K,
        slideCountNew: Ht,
        index: qt,
        indexCached: jt,
        displayIndex: rn(),
        navCurrentIndex: Re,
        navCurrentIndexCached: Ie,
        pages: De,
        pagesCached: He,
        sheet: Bt,
        isOn: U,
        event: t || {}
      };
    }

    M && console.warn("No slides found in", O.container);
  };

  return aa;
}();

(function () {
  // Custom JS
  window.addEventListener('load', function () {
    // ----------------------------------------------
    //		common functions
    // ----------------------------------------------
    function getEl(className) {
      return document.querySelector(className);
    }

    function getAllEl(className) {
      return document.querySelectorAll(className);
    }

    function createEl(type) {
      return document.createElement(type);
    } // ----------------------------------------------
    //		humburger menu
    // ----------------------------------------------


    function toggleMenu() {
      var toggleLine = getEl('.toggle-menu__line');
      var mainMenu = getEl('.main-menu');
      toggleLine.classList.toggle('toggle-menu__line_active');
      mainMenu.classList.toggle('main-menu_active');
    }

    var toggleBtn = getEl('.toggle-menu');

    toggleBtn.onclick = function () {
      return toggleMenu();
    }; // ----------------------------------------------
    //		search form
    // ----------------------------------------------


    var searchInput = getEl('.search-form__input');
    var searchBtn = getEl('.user-bar__search-btn');
    var formWrap = getEl('.search-form__wrap');

    function toggleSearch() {
      searchInput.classList.toggle('search-form__input_active');
    }

    searchBtn.onclick = function () {
      return toggleSearch();
    };

    document.addEventListener('click', function (e) {
      var target = e.target;
      var its_form = target == formWrap || formWrap.contains(target);
      var search_is_active = searchInput.classList.contains('search-form__input_active');
      var its_hamburger = target == searchBtn;

      if (!its_form && !its_hamburger && search_is_active) {
        toggleSearch();
      }
    }); // ----------------------------------------------
    //		header slider
    //    https://github.com/ganlanyuan/tiny-slider
    // ----------------------------------------------
    // add nav dots

    function addNavDots(itemClass, containerClass) {
      var count = getAllEl(itemClass).length;
      var container = getEl(containerClass);

      for (var i = 0; i < count; i++) {
        var dot = createEl('div');
        dot.className = "".concat(containerClass.slice(1), "__dot");
        container.appendChild(dot);
      }
    }

    addNavDots('.slider__item', '.header-nav-container'); // add slider

    var slider = tns({
      container: '.slider',
      items: 1,
      slideBy: 'page',
      speed: 400,
      mouseDrag: true,
      controls: true,
      nav: true,
      navPosition: 'bottom',
      navContainer: '.header-nav-container',
      controlsContainer: '.header-controls-btns',
      prevButton: '.header-controls-btns__prev',
      nextButton: '.header-controls-btns__next',
      startIndex: 1
    }); // change slide number

    var totalSlide = getEl('.pagination__total-number');
    totalSlide.innerHTML = '0' + slider.getInfo().slideCount;

    function changeSlideNumber(className) {
      var element = getEl(className);
      element.innerHTML = '0' + slider.getInfo().index;
    }

    changeSlideNumber('.pagination__active-slide-number');
    slider.events.on('indexChanged', function () {
      setTimeout(function () {
        changeSlideNumber('.pagination__active-slide-number');
        changeSlideNumber('.pagination__cur-number');
      }, 500);
    }); // ----------------------------------------------
    //		smooth scroll when clicking an anchor link
    // ----------------------------------------------

    var root = function () {
      if ('scrollingElement' in document) return document.scrollingElement;
      var html = document.documentElement;
      var start = html.scrollTop;
      html.scrollTop = start + 1;
      var end = html.scrollTop;
      html.scrollTop = start;
      return end > start ? html : document.body;
    }();

    var ease = function ease(duration, elapsed, start, end) {
      return Math.round(end * (-Math.pow(2, -10 * elapsed / duration) + 1) + start);
    };

    var getCoordinates = function getCoordinates(hash) {
      var start = root.scrollTop;

      var delta = function () {
        if (hash.length < 2) return -start;
        var target = getEl(hash);
        if (!target) return;
        var top = target.getBoundingClientRect().top;
        var max = root.scrollHeight - window.innerHeight;
        return start + top < max ? top : max - start;
      }();

      if (delta) return new Map([['start', start], ['delta', delta]]);
    };

    var scroll = function scroll(link) {
      var hash = link.getAttribute('href');
      var coordinates = getCoordinates(hash);
      if (!coordinates) return;

      var tick = function tick(timestamp) {
        progress.set('elapsed', timestamp - start);
        var progressValues = [];
        var coordinatesValues = [];
        progress.forEach(function (element) {
          progressValues.push(element);
        });
        coordinates.forEach(function (element) {
          coordinatesValues.push(element);
        });
        root.scrollTop = ease.apply(void 0, progressValues.concat(coordinatesValues));
        progress.get('elapsed') < progress.get('duration') ? requestAnimationFrame(tick) : complete(hash, coordinates);
      };

      var progress = new Map([['duration', 800]]);
      var start = performance.now();
      requestAnimationFrame(tick);
    };

    var complete = function complete(hash, coordinates) {
      history.pushState(null, null, hash);
      root.scrollTop = coordinates.get('start') + coordinates.get('delta');
    };

    var attachHandler = function attachHandler(links, index) {
      var link = links.item(index);
      link.addEventListener('click', function (event) {
        event.preventDefault();
        scroll(link);
      });
      if (index) return attachHandler(links, index - 1);
    };

    var links = getAllEl('a[href^="#"]');
    var last = links.length - 1;
    if (last < 0) return;
    attachHandler(links, last); // ----------------------------------------------
    //		scroll to top
    // ----------------------------------------------

    function toggleBtnToTop() {
      var pos = window.pageYOffset;

      if (pos > 300) {
        toTop.style.display = 'flex';
      } else {
        toTop.style.display = 'none';
      }
    }

    var toTop = getEl('.to-top');

    window.onscroll = function () {
      toggleBtnToTop();
    }; // ----------------------------------------------
    //		portfolio filter
    // ----------------------------------------------


    function removeClass(elements, className) {
      elements.forEach(function (el) {
        el.classList.remove(className);
      });
    }

    function activeCategory() {
      var categoryFilters = getAllEl('.categories__filter');
      categoryFilters.forEach(function (el) {
        el.onclick = function (e) {
          var filterName = e.target.getAttribute('data-filter');
          removeClass(categoryFilters, 'categories__filter_active');
          e.target.classList.add('categories__filter_active');
          showCategory(filterName);
        };
      });
    }

    activeCategory();

    function showCategory(category) {
      var contentItems = getAllEl('.content__item');
      contentItems.forEach(function (el) {
        el.classList.add('visuallyhidden');

        if (category === 'all') {
          el.classList.remove('hidden');
          setTimeout(function () {
            el.classList.remove('visuallyhidden');
          }, 350);
        } else if (el.getAttribute('data-for') !== category) {
          setTimeout(function () {
            el.classList.add('hidden');
            el.classList.remove('visuallyhidden');
          }, 350);
        } else {
          el.classList.remove('hidden');
          setTimeout(function () {
            el.classList.remove('visuallyhidden');
          }, 350);
        }
      });
    }
  });
})();