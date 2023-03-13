/**
 * WinBox.js v0.2.6 (Bundle)
 * Copyright 2022 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/winbox
 */
(function () {
  "use strict";
  var f,
    ba = document.createElement("style");
  ba.innerHTML =
    "@keyframes wb-fade-in{0%{opacity:0}to{opacity:.85}}.winbox{position:fixed;left:0;top:0;background:#0050ff;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transition:width .3s,height .3s,left .3s,top .3s;transition-timing-function:cubic-bezier(.3,1,.3,1);contain:layout size;text-align:left;touch-action:none}.wb-body,.wb-header{position:absolute;left:0}.wb-header{top:0;width:100%;height:35px;line-height:35px;color:#fff;overflow:hidden;z-index:1}.wb-body{top:35px;right:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;will-change:contents;background:#fff;margin-top:0!important;contain:strict;z-index:0}.wb-control *,.wb-icon{background-repeat:no-repeat}body>.wb-body{position:relative;display:inline-block;visibility:hidden;contain:none}.wb-drag{height:100%;padding-left:10px;cursor:move}.wb-title{font-family:Arial,sans-serif;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wb-icon{display:none;width:20px;height:100%;margin:-1px 8px 0-3px;float:left;background-size:100%;background-position:center}.wb-e,.wb-w{width:10px;top:0}.wb-n,.wb-s{left:0;height:10px;position:absolute}.wb-n{top:-5px;right:0;cursor:n-resize;z-index:2}.wb-e{position:absolute;right:-5px;bottom:0;cursor:w-resize;z-index:2}.wb-s{bottom:-5px;right:0;cursor:n-resize;z-index:2}.wb-nw,.wb-sw,.wb-w{left:-5px}.wb-w{position:absolute;bottom:0;cursor:w-resize;z-index:2}.wb-ne,.wb-nw,.wb-sw{width:15px;height:15px;z-index:2;position:absolute}.wb-nw{top:-5px;cursor:nw-resize}.wb-ne,.wb-sw{cursor:ne-resize}.wb-ne{top:-5px;right:-5px}.wb-se,.wb-sw{bottom:-5px}.wb-se{position:absolute;right:-5px;width:15px;height:15px;cursor:nw-resize;z-index:2}.wb-control{float:right;height:100%;max-width:100%;text-align:center}.wb-control *{display:inline-block;width:30px;height:100%;max-width:100%;background-position:center;cursor:pointer}.no-close .wb-close,.no-full .wb-full,.no-header .wb-header,.no-max .wb-max,.no-min .wb-min,.no-resize .wb-body~div,.wb-body .wb-hide,.wb-show,.winbox.hide,.winbox.min .wb-body>*,.winbox.min .wb-full,.winbox.min .wb-min,.winbox.modal .wb-full,.winbox.modal .wb-max,.winbox.modal .wb-min{display:none}.winbox.max .wb-drag,.winbox.min .wb-drag{cursor:default}.wb-min{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDAgMSAwLTJoN3oiLz48L3N2Zz4=);background-size:14px auto;background-position:center calc(50% + 6px)}.wb-max{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);background-size:17px auto}.wb-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMS42MTMuMjEuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAgMSAxLjQwMyAxLjQwM2wtLjA4My4wOTRMOS40MTUgOGw2LjI5MiA2LjI5M2ExIDEgMCAwIDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAgMSAuMjEgMTQuMzg3bC4wODMtLjA5NEw2LjU4NSA4IC4yOTMgMS43MDdBMSAxIDAgMCAxIDEuNjEzLjIxeiIvPjwvc3ZnPg==);background-size:15px auto;background-position:5px center}.wb-full{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDMiLz48L3N2Zz4=);background-size:16px auto}.winbox.max .wb-body~div,.winbox.min .wb-body~div,.winbox.modal .wb-body~div,.winbox.modal .wb-drag,body.wb-lock iframe{pointer-events:none}.winbox.max{box-shadow:none}.winbox.max .wb-body{margin:0!important}.winbox iframe{position:absolute;width:100%;height:100%;border:0}body.wb-lock .winbox{will-change:left,top,width,height;transition:none}.winbox.modal:before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:inherit;border-radius:inherit}.winbox.modal:after{content:'';position:absolute;top:-50vh;left:-50vw;right:-50vw;bottom:-50vh;background:#0d1117;animation:wb-fade-in .2s ease-out forwards;z-index:-1}.no-animation{transition:none}.no-shadow{box-shadow:none}.no-header .wb-body{top:0}.no-move:not(.min) .wb-title{pointer-events:none}.wb-body .wb-show{display:revert}";
  var k = document.getElementsByTagName("head")[0];
  k.firstChild ? k.insertBefore(ba, k.firstChild) : k.appendChild(ba);
  var ca = document.createElement("div");
  ca.innerHTML =
    "<div class=wb-header><div class=wb-control><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div><div class=wb-drag><div class=wb-icon></div><div class=wb-title></div></div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>";
  function m(a, b, c, e) {
    a && a.addEventListener(b, c, e || !1);
  }
  function p(a, b, c) {
    var e = window;
    e && e.removeEventListener(a, b, c || !1);
  }
  function r(a) {
    a.stopPropagation();
    a.cancelable && a.preventDefault();
  }
  function w(a, b, c) {
    c = "" + c;
    a["_s_" + b] !== c && (a.style.setProperty(b, c), (a["_s_" + b] = c));
  }
  var x = [],
    y = { capture: !0, passive: !0 },
    z,
    da = 0,
    A = 10,
    J,
    K,
    L,
    fa,
    P,
    Q;
  function V(a, b) {
    if (!(this instanceof V)) return new V(a);
    z || ha();
    var c;
    if (a) {
      if (b) {
        var e = a;
        a = b;
      }
      if ("string" === typeof a) e = a;
      else {
        var d = a.id;
        var g = a.index;
        var l = a.root;
        var F = a.template;
        e = e || a.title;
        var t = a.icon;
        var R = a.mount;
        var h = a.html;
        var B = a.url;
        var n = a.width;
        var q = a.height;
        var C = a.minwidth;
        var D = a.minheight;
        var u = a.maxwidth;
        var v = a.maxheight;
        var E = a.autosize;
        var G = a.min;
        var H = a.max;
        var I = a.hidden;
        var ea = a.modal;
        var Y = a.x || (ea ? "center" : 0);
        var Z = a.y || (ea ? "center" : 0);
        var M = a.top;
        var N = a.left;
        var S = a.bottom;
        var T = a.right;
        var ja = a.background;
        var O = a.border;
        var U = a.header;
        var aa = a["class"];
        var na = a.onclose;
        var oa = a.onfocus;
        var pa = a.onblur;
        var qa = a.onmove;
        var ra = a.onresize;
        var sa = a.onfullscreen;
        var ta = a.onmaximize;
        var ua = a.onminimize;
        var va = a.onrestore;
        var wa = a.onhide;
        var xa = a.onshow;
        var ya = a.onload;
      }
    }
    this.g = (F || ca).cloneNode(!0);
    this.g.id = this.id = d || "winbox-" + ++da;
    this.g.className =
      "winbox" +
      (aa ? " " + ("string" === typeof aa ? aa : aa.join(" ")) : "") +
      (ea ? " modal" : "");
    this.g.winbox = this;
    this.window = this.g;
    this.body = this.g.getElementsByClassName("wb-body")[0];
    this.h = U || 35;
    ja && this.setBackground(ja);
    O ? w(this.body, "margin", O + (isNaN(O) ? "" : "px")) : (O = 0);
    U &&
      ((b = this.g.getElementsByClassName("wb-header")[0]),
      w(b, "height", U + "px"),
      w(b, "line-height", U + "px"),
      w(this.body, "top", U + "px"));
    e && this.setTitle(e);
    t && this.setIcon(t);
    R ? this.mount(R) : h ? (this.body.innerHTML = h) : B && this.setUrl(B, ya);
    M = M ? W(M, Q) : 0;
    S = S ? W(S, Q) : 0;
    N = N ? W(N, P) : 0;
    T = T ? W(T, P) : 0;
    e = P - N - T;
    t = Q - M - S;
    u = u ? W(u, e) : e;
    v = v ? W(v, t) : t;
    C = C ? W(C, u) : 150;
    D = D ? W(D, v) : this.h;
    E
      ? ((l || z).appendChild(this.body),
        (n = Math.max(Math.min(this.body.clientWidth + 2 * O + 1, u), C)),
        (q = Math.max(Math.min(this.body.clientHeight + this.h + O + 1, v), D)),
        this.g.appendChild(this.body))
      : ((n = n ? W(n, u) : Math.max(u / 2, C) | 0),
        (q = q ? W(q, v) : Math.max(v / 2, D) | 0));
    Y = Y ? W(Y, e, n) : N;
    Z = Z ? W(Z, t, q) : M;
    this.x = Y;
    this.y = Z;
    this.width = n;
    this.height = q;
    this.o = C;
    this.m = D;
    this.l = u;
    this.j = v;
    this.top = M;
    this.right = T;
    this.bottom = S;
    this.left = N;
    this.index = g;
    this.focused = this.hidden = this.full = this.max = this.min = !1;
    this.onclose = na;
    this.onfocus = oa;
    this.onblur = pa;
    this.onmove = qa;
    this.onresize = ra;
    this.onfullscreen = sa;
    this.onmaximize = ta;
    this.onminimize = ua;
    this.onrestore = va;
    this.onhide = wa;
    this.onshow = xa;
    H ? this.maximize() : G ? this.minimize() : this.resize().move();
    if (I) this.hide();
    else if ((this.focus(), g || 0 === g))
      (this.index = g), w(this.g, "z-index", g), g > A && (A = g);
    ia(this);
    (l || z).appendChild(this.g);
    (c = a.oncreate) && c.call(this, a);
  }
  V["new"] = function (a) {
    return new V(a);
  };
  function W(a, b, c) {
    "string" === typeof a &&
      ("center" === a
        ? (a = ((b - c) / 2) | 0)
        : "right" === a || "bottom" === a
        ? (a = b - c)
        : ((c = parseFloat(a)),
          (a =
            "%" === ("" + c !== a && a.substring(("" + c).length))
              ? ((b / 100) * c) | 0
              : c)));
    return a;
  }
  function ha() {
    z = document.body;
    z[(L = "requestFullscreen")] ||
      z[(L = "msRequestFullscreen")] ||
      z[(L = "webkitRequestFullscreen")] ||
      z[(L = "mozRequestFullscreen")] ||
      (L = "");
    fa =
      L &&
      L.replace("request", "exit")
        .replace("mozRequest", "mozCancel")
        .replace("Request", "Exit");
    m(window, "resize", function () {
      ka();
      la();
    });
    ka();
  }
  function ia(a) {
    X(a, "drag");
    X(a, "n");
    X(a, "s");
    X(a, "w");
    X(a, "e");
    X(a, "nw");
    X(a, "ne");
    X(a, "se");
    X(a, "sw");
    m(a.g.getElementsByClassName("wb-min")[0], "click", function (b) {
      r(b);
      a.min ? a.focus().restore() : a.blur().minimize();
    });
    m(a.g.getElementsByClassName("wb-max")[0], "click", function () {
      a.max ? a.restore() : a.maximize();
    });
    L
      ? m(a.g.getElementsByClassName("wb-full")[0], "click", function () {
          a.fullscreen();
        })
      : a.addClass("no-full");
    m(a.g.getElementsByClassName("wb-close")[0], "click", function (b) {
      r(b);
      a.close() || (a = null);
    });
    m(a.g, "click", function () {
      a.focus();
    });
  }
  function ma(a) {
    x.splice(x.indexOf(a), 1);
    la();
    a.removeClass("min");
    a.min = !1;
    a.g.title = "";
  }
  function la() {
    for (var a = x.length, b = {}, c = {}, e = 0, d; e < a; e++)
      (d = x[e]),
        (d = (d.left || d.right) + ":" + (d.top || d.bottom)),
        c[d] ? c[d]++ : ((b[d] = 0), (c[d] = 1));
    e = 0;
    for (var g, l; e < a; e++)
      (d = x[e]),
        (g = (d.left || d.right) + ":" + (d.top || d.bottom)),
        (l = Math.min((P - d.left - d.right) / c[g], 250)),
        d
          .resize((l + 1) | 0, d.h, !0)
          .move((d.left + b[g] * l) | 0, Q - d.bottom - d.h, !0),
        b[g]++;
  }
  function X(a, b) {
    function c(h) {
      r(h);
      a.focus();
      if ("drag" === b) {
        if (a.min) {
          a.restore();
          return;
        }
        var B = Date.now(),
          n = B - R;
        R = B;
        if (300 > n) {
          a.max ? a.restore() : a.maximize();
          return;
        }
      }
      a.max ||
        a.min ||
        (z.classList.add("wb-lock"),
        (l = h.touches) && (l = l[0])
          ? ((h = l), m(window, "touchmove", e, y), m(window, "touchend", d, y))
          : (m(window, "mousemove", e), m(window, "mouseup", d)),
        (F = h.pageX),
        (t = h.pageY));
    }
    function e(h) {
      r(h);
      l && (h = h.touches[0]);
      var B = h.pageX;
      h = h.pageY;
      var n = B - F,
        q = h - t,
        C = a.width,
        D = a.height,
        u = a.x,
        v = a.y,
        E;
      if ("drag" === b) {
        a.x += n;
        a.y += q;
        var G = (E = 1);
      } else {
        if ("e" === b || "se" === b || "ne" === b) {
          a.width += n;
          var H = 1;
        } else if ("w" === b || "sw" === b || "nw" === b)
          (a.x += n), (a.width -= n), (G = H = 1);
        if ("s" === b || "se" === b || "sw" === b) {
          a.height += q;
          var I = 1;
        } else if ("n" === b || "ne" === b || "nw" === b)
          (a.y += q), (a.height -= q), (E = I = 1);
      }
      H &&
        ((a.width = Math.max(Math.min(a.width, a.l, P - a.x - a.right), a.o)),
        (H = a.width !== C));
      I &&
        ((a.height = Math.max(
          Math.min(a.height, a.j, Q - a.y - a.bottom),
          a.m
        )),
        (I = a.height !== D));
      (H || I) && a.resize();
      G &&
        ((a.x = Math.max(Math.min(a.x, P - a.width - a.right), a.left)),
        (G = a.x !== u));
      E &&
        ((a.y = Math.max(Math.min(a.y, Q - a.height - a.bottom), a.top)),
        (E = a.y !== v));
      (G || E) && a.move();
      if (H || G) F = B;
      if (I || E) t = h;
    }
    function d(h) {
      r(h);
      z.classList.remove("wb-lock");
      l
        ? (p("touchmove", e, y), p("touchend", d, y))
        : (p("mousemove", e), p("mouseup", d));
    }
    var g = a.g.getElementsByClassName("wb-" + b)[0];
    if (g) {
      var l,
        F,
        t,
        R = 0;
      m(g, "mousedown", c);
      m(g, "touchstart", c, y);
    }
  }
  function ka() {
    var a = document.documentElement;
    P = a.clientWidth;
    Q = a.clientHeight;
  }
  f = V.prototype;
  f.mount = function (a) {
    this.unmount();
    a.i || (a.i = a.parentNode);
    this.body.textContent = "";
    this.body.appendChild(a);
    return this;
  };
  f.unmount = function (a) {
    var b = this.body.firstChild;
    if (b) {
      var c = a || b.i;
      c && c.appendChild(b);
      b.i = a;
    }
    return this;
  };
  f.setTitle = function (a) {
    var b = this.g.getElementsByClassName("wb-title")[0];
    a = this.title = a;
    var c = b.firstChild;
    c ? (c.nodeValue = a) : (b.textContent = a);
    return this;
  };
  f.setIcon = function (a) {
    var b = this.g.getElementsByClassName("wb-icon")[0];
    w(b, "background-image", "url(" + a + ")");
    w(b, "display", "inline-block");
    return this;
  };
  f.setBackground = function (a) {
    w(this.g, "background", a);
    return this;
  };
  f.setUrl = function (a, b) {
    var c = this.body.firstChild;
    c && "iframe" === c.tagName.toLowerCase()
      ? (c.src = a)
      : ((this.body.innerHTML = '<iframe src="' + a + '"></iframe>'),
        b && (this.body.firstChild.onload = b));
    return this;
  };
  f.focus = function (a) {
    if (!1 === a) return this.blur();
    K !== this &&
      this.g &&
      (K && K.blur(),
      w(this.g, "z-index", ++A),
      (this.index = A),
      this.addClass("focus"),
      (K = this),
      (this.focused = !0),
      this.onfocus && this.onfocus());
    return this;
  };
  f.blur = function (a) {
    if (!1 === a) return this.focus();
    K === this &&
      (this.removeClass("focus"),
      (this.focused = !1),
      this.onblur && this.onblur(),
      (K = null));
    return this;
  };
  f.hide = function (a) {
    if (!1 === a) return this.show();
    if (!this.hidden)
      return (
        this.onhide && this.onhide(), (this.hidden = !0), this.addClass("hide")
      );
  };
  f.show = function (a) {
    if (!1 === a) return this.hide();
    if (this.hidden)
      return (
        this.onshow && this.onshow(),
        (this.hidden = !1),
        this.removeClass("hide")
      );
  };
  f.minimize = function (a) {
    if (!1 === a) return this.restore();
    J && za();
    this.max && (this.removeClass("max"), (this.max = !1));
    this.min ||
      (x.push(this),
      la(),
      (this.g.title = this.title),
      this.addClass("min"),
      (this.min = !0),
      this.onminimize && this.onminimize());
    return this;
  };
  f.restore = function () {
    J && za();
    this.min &&
      (ma(this), this.resize().move(), this.onrestore && this.onrestore());
    this.max &&
      ((this.max = !1),
      this.removeClass("max").resize().move(),
      this.onrestore && this.onrestore());
    return this;
  };
  f.maximize = function (a) {
    if (!1 === a) return this.restore();
    J && za();
    this.min && ma(this);
    this.max ||
      (this.addClass("max")
        .resize(P - this.left - this.right, Q - this.top - this.bottom, !0)
        .move(this.left, this.top, !0),
      (this.max = !0),
      this.onmaximize && this.onmaximize());
    return this;
  };
  f.fullscreen = function (a) {
    this.min && (ma(this), this.resize().move());
    if (!J || !za())
      this.body[L](),
        (J = this),
        (this.full = !0),
        this.onfullscreen && this.onfullscreen();
    else if (!1 === a) return this.restore();
    return this;
  };
  function za() {
    J.full = !1;
    if (
      document.fullscreen ||
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement
    )
      return document[fa](), !0;
  }
  f.close = function (a) {
    if (this.onclose && this.onclose(a)) return !0;
    this.min && ma(this);
    this.unmount();
    this.g.remove();
    this.g.textContent = "";
    this.g = this.body = this.g.winbox = null;
    K === this && (K = null);
  };
  f.move = function (a, b, c) {
    a || 0 === a
      ? c ||
        ((this.x = a ? (a = W(a, P - this.left - this.right, this.width)) : 0),
        (this.y = b ? (b = W(b, Q - this.top - this.bottom, this.height)) : 0))
      : ((a = this.x), (b = this.y));
    w(this.g, "left", a + "px");
    w(this.g, "top", b + "px");
    this.onmove && this.onmove(a, b);
    return this;
  };
  f.resize = function (a, b, c) {
    a || 0 === a
      ? c ||
        ((this.width = a ? (a = W(a, this.l)) : 0),
        (this.height = b ? (b = W(b, this.j)) : 0),
        (a = Math.max(a, this.o)),
        (b = Math.max(b, this.m)))
      : ((a = this.width), (b = this.height));
    w(this.g, "width", a + "px");
    w(this.g, "height", b + "px");
    this.onresize && this.onresize(a, b);
    return this;
  };
  f.addControl = function (a) {
    var b = a["class"],
      c = a.image,
      e = a.click;
    a = a.index;
    var d = document.createElement("span"),
      g = this.g.getElementsByClassName("wb-control")[0],
      l = this;
    b && (d.className = b);
    c && w(d, "background-image", "url(" + c + ")");
    e &&
      (d.onclick = function (F) {
        e.call(this, F, l);
      });
    g.insertBefore(d, g.childNodes[a || 0]);
    return this;
  };
  f.removeControl = function (a) {
    (a = this.g.getElementsByClassName(a)[0]) && a.remove();
    return this;
  };
  f.addClass = function (a) {
    this.g.classList.add(a);
    return this;
  };
  f.removeClass = function (a) {
    this.g.classList.remove(a);
    return this;
  };
  f.toggleClass = function (a) {
    return this.g.classList.contains(a)
      ? this.removeClass(a)
      : this.addClass(a);
  };
  window.WinBox = V;
}.call(this));
