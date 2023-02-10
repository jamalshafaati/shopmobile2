if (function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";

    function i(t, e) {
        e = e || et;
        var i = e.createElement("script");
        i.text = t, e.head.appendChild(i).parentNode.removeChild(i)
    }

    function n(t) {
        var e = !!t && "length" in t && t.length, i = ft.type(t);
        return "function" !== i && !ft.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function o(t, e, i) {
        return ft.isFunction(e) ? ft.grep(t, function (t, n) {
            return !!e.call(t, n, t) !== i
        }) : e.nodeType ? ft.grep(t, function (t) {
            return t === e !== i
        }) : "string" != typeof e ? ft.grep(t, function (t) {
            return rt.call(e, t) > -1 !== i
        }) : Ct.test(e) ? ft.filter(e, t, i) : (e = ft.filter(e, t), ft.grep(t, function (t) {
            return rt.call(e, t) > -1 !== i && 1 === t.nodeType
        }))
    }

    function s(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;) ;
        return t
    }

    function r(t) {
        var e = {};
        return ft.each(t.match(Et) || [], function (t, i) {
            e[i] = !0
        }), e
    }

    function a(t) {
        return t
    }

    function l(t) {
        throw t
    }

    function d(t, e, i) {
        var n;
        try {
            t && ft.isFunction(n = t.promise) ? n.call(t).done(e).fail(i) : t && ft.isFunction(n = t.then) ? n.call(t, e, i) : e.call(void 0, t)
        } catch (t) {
            i.call(void 0, t)
        }
    }

    function c() {
        et.removeEventListener("DOMContentLoaded", c), t.removeEventListener("load", c), ft.ready()
    }

    function h() {
        this.expando = ft.expando + h.uid++
    }

    function p(t) {
        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Pt.test(t) ? JSON.parse(t) : t)
    }

    function u(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType) if (n = "data-" + e.replace(It, "-$&").toLowerCase(), "string" == typeof (i = t.getAttribute(n))) {
            try {
                i = p(i)
            } catch (t) {
            }
            Dt.set(t, e, i)
        } else i = void 0;
        return i
    }

    function f(t, e, i, n) {
        var o, s = 1, r = 20, a = n ? function () {
                return n.cur()
            } : function () {
                return ft.css(t, e, "")
            }, l = a(), d = i && i[3] || (ft.cssNumber[e] ? "" : "px"),
            c = (ft.cssNumber[e] || "px" !== d && +l) && Nt.exec(ft.css(t, e));
        if (c && c[3] !== d) {
            d = d || c[3], i = i || [], c = +l || 1;
            do {
                s = s || ".5", c /= s, ft.style(t, e, c + d)
            } while (s !== (s = a() / l) && 1 !== s && --r)
        }
        return i && (c = +c || +l || 0, o = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = d, n.start = c, n.end = o)), o
    }

    function g(t) {
        var e, i = t.ownerDocument, n = t.nodeName, o = qt[n];
        return o || (e = i.body.appendChild(i.createElement(n)), o = ft.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), qt[n] = o, o)
    }

    function m(t, e) {
        for (var i, n, o = [], s = 0, r = t.length; s < r; s++) n = t[s], n.style && (i = n.style.display, e ? ("none" === i && (o[s] = Ht.get(n, "display") || null, o[s] || (n.style.display = "")), "" === n.style.display && Mt(n) && (o[s] = g(n))) : "none" !== i && (o[s] = "none", Ht.set(n, "display", i)));
        for (s = 0; s < r; s++) null != o[s] && (t[s].style.display = o[s]);
        return t
    }

    function v(t, e) {
        var i;
        return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && ft.nodeName(t, e) ? ft.merge([t], i) : i
    }

    function w(t, e) {
        for (var i = 0, n = t.length; i < n; i++) Ht.set(t[i], "globalEval", !e || Ht.get(e[i], "globalEval"))
    }

    function y(t, e, i, n, o) {
        for (var s, r, a, l, d, c, h = e.createDocumentFragment(), p = [], u = 0, f = t.length; u < f; u++) if ((s = t[u]) || 0 === s) if ("object" === ft.type(s)) ft.merge(p, s.nodeType ? [s] : s); else if (Qt.test(s)) {
            for (r = r || h.appendChild(e.createElement("div")), a = (Ut.exec(s) || ["", ""])[1].toLowerCase(), l = Zt[a] || Zt._default, r.innerHTML = l[1] + ft.htmlPrefilter(s) + l[2], c = l[0]; c--;) r = r.lastChild;
            ft.merge(p, r.childNodes), r = h.firstChild, r.textContent = ""
        } else p.push(e.createTextNode(s));
        for (h.textContent = "", u = 0; s = p[u++];) if (n && ft.inArray(s, n) > -1) o && o.push(s); else if (d = ft.contains(s.ownerDocument, s), r = v(h.appendChild(s), "script"), d && w(r), i) for (c = 0; s = r[c++];) Xt.test(s.type || "") && i.push(s);
        return h
    }

    function b() {
        return !0
    }

    function x() {
        return !1
    }

    function T() {
        try {
            return et.activeElement
        } catch (t) {
        }
    }

    function z(t, e, i, n, o, s) {
        var r, a;
        if ("object" == typeof e) {
            "string" != typeof i && (n = n || i, i = void 0);
            for (a in e) z(t, a, i, n, e[a], s);
            return t
        }
        if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = x; else if (!o) return t;
        return 1 === s && (r = o, o = function (t) {
            return ft().off(t), r.apply(this, arguments)
        }, o.guid = r.guid || (r.guid = ft.guid++)), t.each(function () {
            ft.event.add(this, e, o, n, i)
        })
    }

    function C(t, e) {
        return ft.nodeName(t, "table") && ft.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t
    }

    function k(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function S(t) {
        var e = ie.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function $(t, e) {
        var i, n, o, s, r, a, l, d;
        if (1 === e.nodeType) {
            if (Ht.hasData(t) && (s = Ht.access(t), r = Ht.set(e, s), d = s.events)) {
                delete r.handle, r.events = {};
                for (o in d) for (i = 0, n = d[o].length; i < n; i++) ft.event.add(e, o, d[o][i])
            }
            Dt.hasData(t) && (a = Dt.access(t), l = ft.extend({}, a), Dt.set(e, l))
        }
    }

    function A(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && Bt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
    }

    function E(t, e, n, o) {
        e = ot.apply([], e);
        var s, r, a, l, d, c, h = 0, p = t.length, u = p - 1, f = e[0], g = ft.isFunction(f);
        if (g || p > 1 && "string" == typeof f && !pt.checkClone && ee.test(f)) return t.each(function (i) {
            var s = t.eq(i);
            g && (e[0] = f.call(this, i, s.html())), E(s, e, n, o)
        });
        if (p && (s = y(e, t[0].ownerDocument, !1, t, o), r = s.firstChild, 1 === s.childNodes.length && (s = r), r || o)) {
            for (a = ft.map(v(s, "script"), k), l = a.length; h < p; h++) d = s, h !== u && (d = ft.clone(d, !0, !0), l && ft.merge(a, v(d, "script"))), n.call(t[h], d, h);
            if (l) for (c = a[a.length - 1].ownerDocument, ft.map(a, S), h = 0; h < l; h++) d = a[h], Xt.test(d.type || "") && !Ht.access(d, "globalEval") && ft.contains(c, d) && (d.src ? ft._evalUrl && ft._evalUrl(d.src) : i(d.textContent.replace(ne, ""), c))
        }
        return t
    }

    function _(t, e, i) {
        for (var n, o = e ? ft.filter(e, t) : t, s = 0; null != (n = o[s]); s++) i || 1 !== n.nodeType || ft.cleanData(v(n)), n.parentNode && (i && ft.contains(n.ownerDocument, n) && w(v(n, "script")), n.parentNode.removeChild(n));
        return t
    }

    function W(t, e, i) {
        var n, o, s, r, a = t.style;
        return i = i || re(t), i && (r = i.getPropertyValue(e) || i[e], "" !== r || ft.contains(t.ownerDocument, t) || (r = ft.style(t, e)), !pt.pixelMarginRight() && se.test(r) && oe.test(e) && (n = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s)), void 0 !== r ? r + "" : r
    }

    function L(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function O(t) {
        if (t in he) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), i = ce.length; i--;) if ((t = ce[i] + e) in he) return t
    }

    function H(t, e, i) {
        var n = Nt.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }

    function D(t, e, i, n, o) {
        var s, r = 0;
        for (s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0; s < 4; s += 2) "margin" === i && (r += ft.css(t, i + Rt[s], !0, o)), n ? ("content" === i && (r -= ft.css(t, "padding" + Rt[s], !0, o)), "margin" !== i && (r -= ft.css(t, "border" + Rt[s] + "Width", !0, o))) : (r += ft.css(t, "padding" + Rt[s], !0, o), "padding" !== i && (r += ft.css(t, "border" + Rt[s] + "Width", !0, o)));
        return r
    }

    function P(t, e, i) {
        var n, o = !0, s = re(t), r = "border-box" === ft.css(t, "boxSizing", !1, s);
        if (t.getClientRects().length && (n = t.getBoundingClientRect()[e]), n <= 0 || null == n) {
            if (n = W(t, e, s), (n < 0 || null == n) && (n = t.style[e]), se.test(n)) return n;
            o = r && (pt.boxSizingReliable() || n === t.style[e]), n = parseFloat(n) || 0
        }
        return n + D(t, e, i || (r ? "border" : "content"), o, s) + "px"
    }

    function I(t, e, i, n, o) {
        return new I.prototype.init(t, e, i, n, o)
    }

    function j() {
        ue && (t.requestAnimationFrame(j), ft.fx.tick())
    }

    function N() {
        return t.setTimeout(function () {
            pe = void 0
        }), pe = ft.now()
    }

    function R(t, e) {
        var i, n = 0, o = {height: t};
        for (e = e ? 1 : 0; n < 4; n += 2 - e) i = Rt[n], o["margin" + i] = o["padding" + i] = t;
        return e && (o.opacity = o.width = t), o
    }

    function M(t, e, i) {
        for (var n, o = (B.tweeners[e] || []).concat(B.tweeners["*"]), s = 0, r = o.length; s < r; s++) if (n = o[s].call(i, e, t)) return n
    }

    function F(t, e, i) {
        var n, o, s, r, a, l, d, c, h = "width" in e || "height" in e, p = this, u = {}, f = t.style,
            g = t.nodeType && Mt(t), v = Ht.get(t, "fxshow");
        i.queue || (r = ft._queueHooks(t, "fx"), null == r.unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function () {
            r.unqueued || a()
        }), r.unqueued++, p.always(function () {
            p.always(function () {
                r.unqueued--, ft.queue(t, "fx").length || r.empty.fire()
            })
        }));
        for (n in e) if (o = e[n], fe.test(o)) {
            if (delete e[n], s = s || "toggle" === o, o === (g ? "hide" : "show")) {
                if ("show" !== o || !v || void 0 === v[n]) continue;
                g = !0
            }
            u[n] = v && v[n] || ft.style(t, n)
        }
        if ((l = !ft.isEmptyObject(e)) || !ft.isEmptyObject(u)) {
            h && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], d = v && v.display, null == d && (d = Ht.get(t, "display")), c = ft.css(t, "display"), "none" === c && (d ? c = d : (m([t], !0), d = t.style.display || d, c = ft.css(t, "display"), m([t]))), ("inline" === c || "inline-block" === c && null != d) && "none" === ft.css(t, "float") && (l || (p.done(function () {
                f.display = d
            }), null == d && (c = f.display, d = "none" === c ? "" : c)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", p.always(function () {
                f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
            })), l = !1;
            for (n in u) l || (v ? "hidden" in v && (g = v.hidden) : v = Ht.access(t, "fxshow", {display: d}), s && (v.hidden = !g), g && m([t], !0), p.done(function () {
                g || m([t]), Ht.remove(t, "fxshow");
                for (n in u) ft.style(t, n, u[n])
            })), l = M(g ? v[n] : 0, n, p), n in v || (v[n] = l.start, g && (l.end = l.start, l.start = 0))
        }
    }

    function q(t, e) {
        var i, n, o, s, r;
        for (i in t) if (n = ft.camelCase(i), o = e[n], s = t[i], ft.isArray(s) && (o = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), (r = ft.cssHooks[n]) && "expand" in r) {
            s = r.expand(s), delete t[n];
            for (i in s) i in t || (t[i] = s[i], e[i] = o)
        } else e[n] = o
    }

    function B(t, e, i) {
        var n, o, s = 0, r = B.prefilters.length, a = ft.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (o) return !1;
            for (var e = pe || N(), i = Math.max(0, d.startTime + d.duration - e), n = i / d.duration || 0, s = 1 - n, r = 0, l = d.tweens.length; r < l; r++) d.tweens[r].run(s);
            return a.notifyWith(t, [d, s, i]), s < 1 && l ? i : (a.resolveWith(t, [d]), !1)
        }, d = a.promise({
            elem: t,
            props: ft.extend({}, e),
            opts: ft.extend(!0, {specialEasing: {}, easing: ft.easing._default}, i),
            originalProperties: e,
            originalOptions: i,
            startTime: pe || N(),
            duration: i.duration,
            tweens: [],
            createTween: function (e, i) {
                var n = ft.Tween(t, d.opts, e, i, d.opts.specialEasing[e] || d.opts.easing);
                return d.tweens.push(n), n
            },
            stop: function (e) {
                var i = 0, n = e ? d.tweens.length : 0;
                if (o) return this;
                for (o = !0; i < n; i++) d.tweens[i].run(1);
                return e ? (a.notifyWith(t, [d, 1, 0]), a.resolveWith(t, [d, e])) : a.rejectWith(t, [d, e]), this
            }
        }), c = d.props;
        for (q(c, d.opts.specialEasing); s < r; s++) if (n = B.prefilters[s].call(d, t, c, d.opts)) return ft.isFunction(n.stop) && (ft._queueHooks(d.elem, d.opts.queue).stop = ft.proxy(n.stop, n)), n;
        return ft.map(c, M, d), ft.isFunction(d.opts.start) && d.opts.start.call(t, d), ft.fx.timer(ft.extend(l, {
            elem: t,
            anim: d,
            queue: d.opts.queue
        })), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
    }

    function U(t) {
        return (t.match(Et) || []).join(" ")
    }

    function X(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function Z(t, e, i, n) {
        var o;
        if (ft.isArray(e)) ft.each(e, function (e, o) {
            i || ke.test(t) ? n(t, o) : Z(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, i, n)
        }); else if (i || "object" !== ft.type(e)) n(t, e); else for (o in e) Z(t + "[" + o + "]", e[o], i, n)
    }

    function Q(t) {
        return function (e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, o = 0, s = e.toLowerCase().match(Et) || [];
            if (ft.isFunction(i)) for (; n = s[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function Y(t, e, i, n) {
        function o(a) {
            var l;
            return s[a] = !0, ft.each(t[a] || [], function (t, a) {
                var d = a(e, i, n);
                return "string" != typeof d || r || s[d] ? r ? !(l = d) : void 0 : (e.dataTypes.unshift(d), o(d), !1)
            }), l
        }

        var s = {}, r = t === Ie;
        return o(e.dataTypes[0]) || !s["*"] && o("*")
    }

    function V(t, e) {
        var i, n, o = ft.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
        return n && ft.extend(!0, t, n), t
    }

    function G(t, e, i) {
        for (var n, o, s, r, a = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
        if (n) for (o in a) if (a[o] && a[o].test(n)) {
            l.unshift(o);
            break
        }
        if (l[0] in i) s = l[0]; else {
            for (o in i) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    s = o;
                    break
                }
                r || (r = o)
            }
            s = s || r
        }
        if (s) return s !== l[0] && l.unshift(s), i[s]
    }

    function J(t, e, i, n) {
        var o, s, r, a, l, d = {}, c = t.dataTypes.slice();
        if (c[1]) for (r in t.converters) d[r.toLowerCase()] = t.converters[r];
        for (s = c.shift(); s;) if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift()) if ("*" === s) s = l; else if ("*" !== l && l !== s) {
            if (!(r = d[l + " " + s] || d["* " + s])) for (o in d) if (a = o.split(" "), a[1] === s && (r = d[l + " " + a[0]] || d["* " + a[0]])) {
                !0 === r ? r = d[o] : !0 !== d[o] && (s = a[0], c.unshift(a[1]));
                break
            }
            if (!0 !== r) if (r && t.throws) e = r(e); else try {
                e = r(e)
            } catch (t) {
                return {state: "parsererror", error: r ? t : "No conversion from " + l + " to " + s}
            }
        }
        return {state: "success", data: e}
    }

    function K(t) {
        return ft.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }

    var tt = [], et = t.document, it = Object.getPrototypeOf, nt = tt.slice, ot = tt.concat, st = tt.push,
        rt = tt.indexOf, at = {}, lt = at.toString, dt = at.hasOwnProperty, ct = dt.toString, ht = ct.call(Object),
        pt = {}, ut = "3.1.1", ft = function (t, e) {
            return new ft.fn.init(t, e)
        }, gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, mt = /^-ms-/, vt = /-([a-z])/g, wt = function (t, e) {
            return e.toUpperCase()
        };
    ft.fn = ft.prototype = {
        jquery: ut, constructor: ft, length: 0, toArray: function () {
            return nt.call(this)
        }, get: function (t) {
            return null == t ? nt.call(this) : t < 0 ? this[t + this.length] : this[t]
        }, pushStack: function (t) {
            var e = ft.merge(this.constructor(), t);
            return e.prevObject = this, e
        }, each: function (t) {
            return ft.each(this, t)
        }, map: function (t) {
            return this.pushStack(ft.map(this, function (e, i) {
                return t.call(e, i, e)
            }))
        }, slice: function () {
            return this.pushStack(nt.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (t) {
            var e = this.length, i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: st, sort: tt.sort, splice: tt.splice
    }, ft.extend = ft.fn.extend = function () {
        var t, e, i, n, o, s, r = arguments[0] || {}, a = 1, l = arguments.length, d = !1;
        for ("boolean" == typeof r && (d = r, r = arguments[a] || {}, a++), "object" == typeof r || ft.isFunction(r) || (r = {}), a === l && (r = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) i = r[e], n = t[e], r !== n && (d && n && (ft.isPlainObject(n) || (o = ft.isArray(n))) ? (o ? (o = !1, s = i && ft.isArray(i) ? i : []) : s = i && ft.isPlainObject(i) ? i : {}, r[e] = ft.extend(d, s, n)) : void 0 !== n && (r[e] = n));
        return r
    }, ft.extend({
        expando: "jQuery" + (ut + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw new Error(t)
        }, noop: function () {
        }, isFunction: function (t) {
            return "function" === ft.type(t)
        }, isArray: Array.isArray, isWindow: function (t) {
            return null != t && t === t.window
        }, isNumeric: function (t) {
            var e = ft.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, isPlainObject: function (t) {
            var e, i;
            return !(!t || "[object Object]" !== lt.call(t) || (e = it(t)) && ("function" != typeof (i = dt.call(e, "constructor") && e.constructor) || ct.call(i) !== ht))
        }, isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        }, type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? at[lt.call(t)] || "object" : typeof t
        }, globalEval: function (t) {
            i(t)
        }, camelCase: function (t) {
            return t.replace(mt, "ms-").replace(vt, wt)
        }, nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }, each: function (t, e) {
            var i, o = 0;
            if (n(t)) for (i = t.length; o < i && !1 !== e.call(t[o], o, t[o]); o++) ; else for (o in t) if (!1 === e.call(t[o], o, t[o])) break;
            return t
        }, trim: function (t) {
            return null == t ? "" : (t + "").replace(gt, "")
        }, makeArray: function (t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? ft.merge(i, "string" == typeof t ? [t] : t) : st.call(i, t)), i
        }, inArray: function (t, e, i) {
            return null == e ? -1 : rt.call(e, t, i)
        }, merge: function (t, e) {
            for (var i = +e.length, n = 0, o = t.length; n < i; n++) t[o++] = e[n];
            return t.length = o, t
        }, grep: function (t, e, i) {
            for (var n = [], o = 0, s = t.length, r = !i; o < s; o++) !e(t[o], o) !== r && n.push(t[o]);
            return n
        }, map: function (t, e, i) {
            var o, s, r = 0, a = [];
            if (n(t)) for (o = t.length; r < o; r++) null != (s = e(t[r], r, i)) && a.push(s); else for (r in t) null != (s = e(t[r], r, i)) && a.push(s);
            return ot.apply([], a)
        }, guid: 1, proxy: function (t, e) {
            var i, n, o;
            if ("string" == typeof e && (i = t[e], e = t, t = i), ft.isFunction(t)) return n = nt.call(arguments, 2), o = function () {
                return t.apply(e || this, n.concat(nt.call(arguments)))
            }, o.guid = t.guid = t.guid || ft.guid++, o
        }, now: Date.now, support: pt
    }), "function" == typeof Symbol && (ft.fn[Symbol.iterator] = tt[Symbol.iterator]), ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        at["[object " + e + "]"] = e.toLowerCase()
    });
    var yt = function (t) {
        function e(t, e, i, n) {
            var o, s, r, a, l, c, p, u = e && e.ownerDocument, f = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return i;
            if (!n && ((e ? e.ownerDocument || e : N) !== W && _(e), e = e || W, O)) {
                if (11 !== f && (l = gt.exec(t))) if (o = l[1]) {
                    if (9 === f) {
                        if (!(r = e.getElementById(o))) return i;
                        if (r.id === o) return i.push(r), i
                    } else if (u && (r = u.getElementById(o)) && I(e, r) && r.id === o) return i.push(r), i
                } else {
                    if (l[2]) return V.apply(i, e.getElementsByTagName(t)), i;
                    if ((o = l[3]) && b.getElementsByClassName && e.getElementsByClassName) return V.apply(i, e.getElementsByClassName(o)), i
                }
                if (b.qsa && !B[t + " "] && (!H || !H.test(t))) {
                    if (1 !== f) u = e, p = t; else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(yt, bt) : e.setAttribute("id", a = j), c = C(t), s = c.length; s--;) c[s] = "#" + a + " " + h(c[s]);
                        p = c.join(","), u = mt.test(t) && d(e.parentNode) || e
                    }
                    if (p) try {
                        return V.apply(i, u.querySelectorAll(p)), i
                    } catch (t) {
                    } finally {
                        a === j && e.removeAttribute("id")
                    }
                }
            }
            return S(t.replace(st, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > x.cacheLength && delete t[e.shift()], t[i + " "] = n
            }

            var e = [];
            return t
        }

        function n(t) {
            return t[j] = !0, t
        }

        function o(t) {
            var e = W.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function s(t, e) {
            for (var i = t.split("|"), n = i.length; n--;) x.attrHandle[i[n]] = e
        }

        function r(t, e) {
            var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (n) return n;
            if (i) for (; i = i.nextSibling;) if (i === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Tt(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function l(t) {
            return n(function (e) {
                return e = +e, n(function (i, n) {
                    for (var o, s = t([], i.length, e), r = s.length; r--;) i[o = s[r]] && (i[o] = !(n[o] = i[o]))
                })
            })
        }

        function d(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }

        function c() {
        }

        function h(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n
        }

        function p(t, e, i) {
            var n = e.dir, o = e.next, s = o || n, r = i && "parentNode" === s, a = M++;
            return e.first ? function (e, i, o) {
                for (; e = e[n];) if (1 === e.nodeType || r) return t(e, i, o);
                return !1
            } : function (e, i, l) {
                var d, c, h, p = [R, a];
                if (l) {
                    for (; e = e[n];) if ((1 === e.nodeType || r) && t(e, i, l)) return !0
                } else for (; e = e[n];) if (1 === e.nodeType || r) if (h = e[j] || (e[j] = {}), c = h[e.uniqueID] || (h[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[n] || e; else {
                    if ((d = c[s]) && d[0] === R && d[1] === a) return p[2] = d[2];
                    if (c[s] = p, p[2] = t(e, i, l)) return !0
                }
                return !1
            }
        }

        function u(t) {
            return t.length > 1 ? function (e, i, n) {
                for (var o = t.length; o--;) if (!t[o](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function f(t, i, n) {
            for (var o = 0, s = i.length; o < s; o++) e(t, i[o], n);
            return n
        }

        function g(t, e, i, n, o) {
            for (var s, r = [], a = 0, l = t.length, d = null != e; a < l; a++) (s = t[a]) && (i && !i(s, n, o) || (r.push(s), d && e.push(a)));
            return r
        }

        function m(t, e, i, o, s, r) {
            return o && !o[j] && (o = m(o)), s && !s[j] && (s = m(s, r)), n(function (n, r, a, l) {
                var d, c, h, p = [], u = [], m = r.length, v = n || f(e || "*", a.nodeType ? [a] : a, []),
                    w = !t || !n && e ? v : g(v, p, t, a, l), y = i ? s || (n ? t : m || o) ? [] : r : w;
                if (i && i(w, y, a, l), o) for (d = g(y, u), o(d, [], a, l), c = d.length; c--;) (h = d[c]) && (y[u[c]] = !(w[u[c]] = h));
                if (n) {
                    if (s || t) {
                        if (s) {
                            for (d = [], c = y.length; c--;) (h = y[c]) && d.push(w[c] = h);
                            s(null, y = [], d, l)
                        }
                        for (c = y.length; c--;) (h = y[c]) && (d = s ? J(n, h) : p[c]) > -1 && (n[d] = !(r[d] = h))
                    }
                } else y = g(y === r ? y.splice(m, y.length) : y), s ? s(null, r, y, l) : V.apply(r, y)
            })
        }

        function v(t) {
            for (var e, i, n, o = t.length, s = x.relative[t[0].type], r = s || x.relative[" "], a = s ? 1 : 0, l = p(function (t) {
                return t === e
            }, r, !0), d = p(function (t) {
                return J(e, t) > -1
            }, r, !0), c = [function (t, i, n) {
                var o = !s && (n || i !== $) || ((e = i).nodeType ? l(t, i, n) : d(t, i, n));
                return e = null, o
            }]; a < o; a++) if (i = x.relative[t[a].type]) c = [p(u(c), i)]; else {
                if (i = x.filter[t[a].type].apply(null, t[a].matches), i[j]) {
                    for (n = ++a; n < o && !x.relative[t[n].type]; n++) ;
                    return m(a > 1 && u(c), a > 1 && h(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(st, "$1"), i, a < n && v(t.slice(a, n)), n < o && v(t = t.slice(n)), n < o && h(t))
                }
                c.push(i)
            }
            return u(c)
        }

        function w(t, i) {
            var o = i.length > 0, s = t.length > 0, r = function (n, r, a, l, d) {
                var c, h, p, u = 0, f = "0", m = n && [], v = [], w = $, y = n || s && x.find.TAG("*", d),
                    b = R += null == w ? 1 : Math.random() || .1, T = y.length;
                for (d && ($ = r === W || r || d); f !== T && null != (c = y[f]); f++) {
                    if (s && c) {
                        for (h = 0, r || c.ownerDocument === W || (_(c), a = !O); p = t[h++];) if (p(c, r || W, a)) {
                            l.push(c);
                            break
                        }
                        d && (R = b)
                    }
                    o && ((c = !p && c) && u--, n && m.push(c))
                }
                if (u += f, o && f !== u) {
                    for (h = 0; p = i[h++];) p(m, v, r, a);
                    if (n) {
                        if (u > 0) for (; f--;) m[f] || v[f] || (v[f] = Q.call(l));
                        v = g(v)
                    }
                    V.apply(l, v), d && !n && v.length > 0 && u + i.length > 1 && e.uniqueSort(l)
                }
                return d && (R = b, $ = w), m
            };
            return o ? n(r) : r
        }

        var y, b, x, T, z, C, k, S, $, A, E, _, W, L, O, H, D, P, I, j = "sizzle" + 1 * new Date, N = t.document, R = 0,
            M = 0, F = i(), q = i(), B = i(), U = function (t, e) {
                return t === e && (E = !0), 0
            }, X = {}.hasOwnProperty, Z = [], Q = Z.pop, Y = Z.push, V = Z.push, G = Z.slice, J = function (t, e) {
                for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            tt = "[\\x20\\t\\r\\n\\f]", et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            it = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]",
            nt = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
            ot = new RegExp(tt + "+", "g"), st = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
            rt = new RegExp("^" + tt + "*," + tt + "*"), at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
            lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"), dt = new RegExp(nt),
            ct = new RegExp("^" + et + "$"), ht = {
                ID: new RegExp("^#(" + et + ")"),
                CLASS: new RegExp("^\\.(" + et + ")"),
                TAG: new RegExp("^(" + et + "|[*])"),
                ATTR: new RegExp("^" + it),
                PSEUDO: new RegExp("^" + nt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
            }, pt = /^(?:input|select|textarea|button)$/i, ut = /^h\d$/i, ft = /^[^{]+\{\s*\[native \w/,
            gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, mt = /[+~]/,
            vt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"), wt = function (t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            }, yt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, bt = function (t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }, xt = function () {
                _()
            }, Tt = p(function (t) {
                return !0 === t.disabled && ("form" in t || "label" in t)
            }, {dir: "parentNode", next: "legend"});
        try {
            V.apply(Z = G.call(N.childNodes), N.childNodes), Z[N.childNodes.length].nodeType
        } catch (t) {
            V = {
                apply: Z.length ? function (t, e) {
                    Y.apply(t, G.call(e))
                } : function (t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];) ;
                    t.length = i - 1
                }
            }
        }
        b = e.support = {}, z = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, _ = e.setDocument = function (t) {
            var e, i, n = t ? t.ownerDocument || t : N;
            return n !== W && 9 === n.nodeType && n.documentElement ? (W = n, L = W.documentElement, O = !z(W), N !== W && (i = W.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", xt, !1) : i.attachEvent && i.attachEvent("onunload", xt)), b.attributes = o(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), b.getElementsByTagName = o(function (t) {
                return t.appendChild(W.createComment("")), !t.getElementsByTagName("*").length
            }), b.getElementsByClassName = ft.test(W.getElementsByClassName), b.getById = o(function (t) {
                return L.appendChild(t).id = j, !W.getElementsByName || !W.getElementsByName(j).length
            }), b.getById ? (x.filter.ID = function (t) {
                var e = t.replace(vt, wt);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }, x.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && O) {
                    var i = e.getElementById(t);
                    return i ? [i] : []
                }
            }) : (x.filter.ID = function (t) {
                var e = t.replace(vt, wt);
                return function (t) {
                    var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }, x.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && O) {
                    var i, n, o, s = e.getElementById(t);
                    if (s) {
                        if ((i = s.getAttributeNode("id")) && i.value === t) return [s];
                        for (o = e.getElementsByName(t), n = 0; s = o[n++];) if ((i = s.getAttributeNode("id")) && i.value === t) return [s]
                    }
                    return []
                }
            }), x.find.TAG = b.getElementsByTagName ? function (t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var i, n = [], o = 0, s = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = s[o++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return s
            }, x.find.CLASS = b.getElementsByClassName && function (t, e) {
                if (void 0 !== e.getElementsByClassName && O) return e.getElementsByClassName(t)
            }, D = [], H = [], (b.qsa = ft.test(W.querySelectorAll)) && (o(function (t) {
                L.appendChild(t).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || H.push("\\[" + tt + "*(?:value|" + K + ")"), t.querySelectorAll("[id~=" + j + "-]").length || H.push("~="), t.querySelectorAll(":checked").length || H.push(":checked"), t.querySelectorAll("a#" + j + "+*").length || H.push(".#.+[+~]")
            }), o(function (t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = W.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && H.push("name" + tt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && H.push(":enabled", ":disabled"), L.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && H.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), H.push(",.*:")
            })), (b.matchesSelector = ft.test(P = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && o(function (t) {
                b.disconnectedMatch = P.call(t, "*"), P.call(t, "[s!='']:x"), D.push("!=", nt)
            }), H = H.length && new RegExp(H.join("|")), D = D.length && new RegExp(D.join("|")), e = ft.test(L.compareDocumentPosition), I = e || ft.test(L.contains) ? function (t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function (t, e) {
                if (e) for (; e = e.parentNode;) if (e === t) return !0;
                return !1
            }, U = e ? function (t, e) {
                if (t === e) return E = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !b.sortDetached && e.compareDocumentPosition(t) === i ? t === W || t.ownerDocument === N && I(N, t) ? -1 : e === W || e.ownerDocument === N && I(N, e) ? 1 : A ? J(A, t) - J(A, e) : 0 : 4 & i ? -1 : 1)
            } : function (t, e) {
                if (t === e) return E = !0, 0;
                var i, n = 0, o = t.parentNode, s = e.parentNode, a = [t], l = [e];
                if (!o || !s) return t === W ? -1 : e === W ? 1 : o ? -1 : s ? 1 : A ? J(A, t) - J(A, e) : 0;
                if (o === s) return r(t, e);
                for (i = t; i = i.parentNode;) a.unshift(i);
                for (i = e; i = i.parentNode;) l.unshift(i);
                for (; a[n] === l[n];) n++;
                return n ? r(a[n], l[n]) : a[n] === N ? -1 : l[n] === N ? 1 : 0
            }, W) : W
        }, e.matches = function (t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function (t, i) {
            if ((t.ownerDocument || t) !== W && _(t), i = i.replace(lt, "='$1']"), b.matchesSelector && O && !B[i + " "] && (!D || !D.test(i)) && (!H || !H.test(i))) try {
                var n = P.call(t, i);
                if (n || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (t) {
            }
            return e(i, W, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return (t.ownerDocument || t) !== W && _(t), I(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== W && _(t);
            var i = x.attrHandle[e.toLowerCase()],
                n = i && X.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !O) : void 0;
            return void 0 !== n ? n : b.attributes || !O ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.escape = function (t) {
            return (t + "").replace(yt, bt)
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, i = [], n = 0, o = 0;
            if (E = !b.detectDuplicates, A = !b.sortStable && t.slice(0), t.sort(U), E) {
                for (; e = t[o++];) e === t[o] && (n = i.push(o));
                for (; n--;) t.splice(i[n], 1)
            }
            return A = null, t
        }, T = e.getText = function (t) {
            var e, i = "", n = 0, o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += T(t)
                } else if (3 === o || 4 === o) return t.nodeValue
            } else for (; e = t[n++];) i += T(e);
            return i
        }, x = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(vt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(vt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                }, CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                }, PSEUDO: function (t) {
                    var e, i = !t[6] && t[2];
                    return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && dt.test(i) && (e = C(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(vt, wt).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                }, CLASS: function (t) {
                    var e = F[t + " "];
                    return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && F(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                }, ATTR: function (t, i, n) {
                    return function (o) {
                        var s = e.attr(o, t);
                        return null == s ? "!=" === i : !i || (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(ot, " ") + " ").indexOf(n) > -1 : "|=" === i && (s === n || s.slice(0, n.length + 1) === n + "-"))
                    }
                }, CHILD: function (t, e, i, n, o) {
                    var s = "nth" !== t.slice(0, 3), r = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === n && 0 === o ? function (t) {
                        return !!t.parentNode
                    } : function (e, i, l) {
                        var d, c, h, p, u, f, g = s !== r ? "nextSibling" : "previousSibling", m = e.parentNode,
                            v = a && e.nodeName.toLowerCase(), w = !l && !a, y = !1;
                        if (m) {
                            if (s) {
                                for (; g;) {
                                    for (p = e; p = p[g];) if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [r ? m.firstChild : m.lastChild], r && w) {
                                for (p = m, h = p[j] || (p[j] = {}), c = h[p.uniqueID] || (h[p.uniqueID] = {}), d = c[t] || [], u = d[0] === R && d[1], y = u && d[2], p = u && m.childNodes[u]; p = ++u && p && p[g] || (y = u = 0) || f.pop();) if (1 === p.nodeType && ++y && p === e) {
                                    c[t] = [R, u, y];
                                    break
                                }
                            } else if (w && (p = e, h = p[j] || (p[j] = {}), c = h[p.uniqueID] || (h[p.uniqueID] = {}), d = c[t] || [], u = d[0] === R && d[1], y = u), !1 === y) for (; (p = ++u && p && p[g] || (y = u = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++y || (w && (h = p[j] || (p[j] = {}), c = h[p.uniqueID] || (h[p.uniqueID] = {}), c[t] = [R, y]), p !== e));) ;
                            return (y -= o) === n || y % n == 0 && y / n >= 0
                        }
                    }
                }, PSEUDO: function (t, i) {
                    var o, s = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return s[j] ? s(i) : s.length > 1 ? (o = [t, t, "", i], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
                        for (var n, o = s(t, i), r = o.length; r--;) n = J(t, o[r]), t[n] = !(e[n] = o[r])
                    }) : function (t) {
                        return s(t, 0, o)
                    }) : s
                }
            },
            pseudos: {
                not: n(function (t) {
                    var e = [], i = [], o = k(t.replace(st, "$1"));
                    return o[j] ? n(function (t, e, i, n) {
                        for (var s, r = o(t, null, n, []), a = t.length; a--;) (s = r[a]) && (t[a] = !(e[a] = s))
                    }) : function (t, n, s) {
                        return e[0] = t, o(e, null, s, i), e[0] = null, !i.pop()
                    }
                }), has: n(function (t) {
                    return function (i) {
                        return e(t, i).length > 0
                    }
                }), contains: n(function (t) {
                    return t = t.replace(vt, wt), function (e) {
                        return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                    }
                }), lang: n(function (t) {
                    return ct.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(vt, wt).toLowerCase(), function (e) {
                        var i;
                        do {
                            if (i = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                }, root: function (t) {
                    return t === L
                }, focus: function (t) {
                    return t === W.activeElement && (!W.hasFocus || W.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                }, enabled: a(!1), disabled: a(!0), checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                }, selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                }, empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                    return !0
                }, parent: function (t) {
                    return !x.pseudos.empty(t)
                }, header: function (t) {
                    return ut.test(t.nodeName)
                }, input: function (t) {
                    return pt.test(t.nodeName)
                }, button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                }, text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                }, first: l(function () {
                    return [0]
                }), last: l(function (t, e) {
                    return [e - 1]
                }), eq: l(function (t, e, i) {
                    return [i < 0 ? i + e : i]
                }), even: l(function (t, e) {
                    for (var i = 0; i < e; i += 2) t.push(i);
                    return t
                }), odd: l(function (t, e) {
                    for (var i = 1; i < e; i += 2) t.push(i);
                    return t
                }), lt: l(function (t, e, i) {
                    for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }), gt: l(function (t, e, i) {
                    for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (y in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) x.pseudos[y] = function (t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }(y);
        for (y in {submit: !0, reset: !0}) x.pseudos[y] = function (t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }(y);
        return c.prototype = x.filters = x.pseudos, x.setFilters = new c, C = e.tokenize = function (t, i) {
            var n, o, s, r, a, l, d, c = q[t + " "];
            if (c) return i ? 0 : c.slice(0);
            for (a = t, l = [], d = x.preFilter; a;) {
                n && !(o = rt.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(s = [])), n = !1, (o = at.exec(a)) && (n = o.shift(), s.push({
                    value: n,
                    type: o[0].replace(st, " ")
                }), a = a.slice(n.length));
                for (r in x.filter) !(o = ht[r].exec(a)) || d[r] && !(o = d[r](o)) || (n = o.shift(), s.push({
                    value: n,
                    type: r,
                    matches: o
                }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length : a ? e.error(t) : q(t, l).slice(0)
        }, k = e.compile = function (t, e) {
            var i, n = [], o = [], s = B[t + " "];
            if (!s) {
                for (e || (e = C(t)), i = e.length; i--;) s = v(e[i]), s[j] ? n.push(s) : o.push(s);
                s = B(t, w(o, n)), s.selector = t
            }
            return s
        }, S = e.select = function (t, e, i, n) {
            var o, s, r, a, l, c = "function" == typeof t && t, p = !n && C(t = c.selector || t);
            if (i = i || [], 1 === p.length) {
                if (s = p[0] = p[0].slice(0), s.length > 2 && "ID" === (r = s[0]).type && 9 === e.nodeType && O && x.relative[s[1].type]) {
                    if (!(e = (x.find.ID(r.matches[0].replace(vt, wt), e) || [])[0])) return i;
                    c && (e = e.parentNode), t = t.slice(s.shift().value.length)
                }
                for (o = ht.needsContext.test(t) ? 0 : s.length; o-- && (r = s[o], !x.relative[a = r.type]);) if ((l = x.find[a]) && (n = l(r.matches[0].replace(vt, wt), mt.test(s[0].type) && d(e.parentNode) || e))) {
                    if (s.splice(o, 1), !(t = n.length && h(s))) return V.apply(i, n), i;
                    break
                }
            }
            return (c || k(t, p))(n, e, !O, i, !e || mt.test(t) && d(e.parentNode) || e), i
        }, b.sortStable = j.split("").sort(U).join("") === j, b.detectDuplicates = !!E, _(), b.sortDetached = o(function (t) {
            return 1 & t.compareDocumentPosition(W.createElement("fieldset"))
        }), o(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function (t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), b.attributes && o(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || s("value", function (t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), o(function (t) {
            return null == t.getAttribute("disabled")
        }) || s(K, function (t, e, i) {
            var n;
            if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    ft.find = yt, ft.expr = yt.selectors, ft.expr[":"] = ft.expr.pseudos, ft.uniqueSort = ft.unique = yt.uniqueSort, ft.text = yt.getText, ft.isXMLDoc = yt.isXML, ft.contains = yt.contains, ft.escapeSelector = yt.escape;
    var bt = function (t, e, i) {
            for (var n = [], o = void 0 !== i; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
                if (o && ft(t).is(i)) break;
                n.push(t)
            }
            return n
        }, xt = function (t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }, Tt = ft.expr.match.needsContext, zt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Ct = /^.[^:#\[\.,]*$/;
    ft.filter = function (t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? ft.find.matchesSelector(n, t) ? [n] : [] : ft.find.matches(t, ft.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, ft.fn.extend({
        find: function (t) {
            var e, i, n = this.length, o = this;
            if ("string" != typeof t) return this.pushStack(ft(t).filter(function () {
                for (e = 0; e < n; e++) if (ft.contains(o[e], this)) return !0
            }));
            for (i = this.pushStack([]), e = 0; e < n; e++) ft.find(t, o[e], i);
            return n > 1 ? ft.uniqueSort(i) : i
        }, filter: function (t) {
            return this.pushStack(o(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack(o(this, t || [], !0))
        }, is: function (t) {
            return !!o(this, "string" == typeof t && Tt.test(t) ? ft(t) : t || [], !1).length
        }
    });
    var kt, St = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ft.fn.init = function (t, e, i) {
        var n, o;
        if (!t) return this;
        if (i = i || kt, "string" == typeof t) {
            if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : St.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof ft ? e[0] : e, ft.merge(this, ft.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : et, !0)), zt.test(n[1]) && ft.isPlainObject(e)) for (n in e) ft.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            return o = et.getElementById(n[2]), o && (this[0] = o, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : ft.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(ft) : ft.makeArray(t, this)
    }).prototype = ft.fn, kt = ft(et);
    var $t = /^(?:parents|prev(?:Until|All))/, At = {children: !0, contents: !0, next: !0, prev: !0};
    ft.fn.extend({
        has: function (t) {
            var e = ft(t, this), i = e.length;
            return this.filter(function () {
                for (var t = 0; t < i; t++) if (ft.contains(this, e[t])) return !0
            })
        }, closest: function (t, e) {
            var i, n = 0, o = this.length, s = [], r = "string" != typeof t && ft(t);
            if (!Tt.test(t)) for (; n < o; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && ft.find.matchesSelector(i, t))) {
                s.push(i);
                break
            }
            return this.pushStack(s.length > 1 ? ft.uniqueSort(s) : s)
        }, index: function (t) {
            return t ? "string" == typeof t ? rt.call(ft(t), this[0]) : rt.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ft.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return bt(t, "parentNode")
        }, parentsUntil: function (t, e, i) {
            return bt(t, "parentNode", i)
        }, next: function (t) {
            return s(t, "nextSibling")
        }, prev: function (t) {
            return s(t, "previousSibling")
        }, nextAll: function (t) {
            return bt(t, "nextSibling")
        }, prevAll: function (t) {
            return bt(t, "previousSibling")
        }, nextUntil: function (t, e, i) {
            return bt(t, "nextSibling", i)
        }, prevUntil: function (t, e, i) {
            return bt(t, "previousSibling", i)
        }, siblings: function (t) {
            return xt((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return xt(t.firstChild)
        }, contents: function (t) {
            return t.contentDocument || ft.merge([], t.childNodes)
        }
    }, function (t, e) {
        ft.fn[t] = function (i, n) {
            var o = ft.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = ft.filter(n, o)), this.length > 1 && (At[t] || ft.uniqueSort(o), $t.test(t) && o.reverse()), this.pushStack(o)
        }
    });
    var Et = /[^\x20\t\r\n\f]+/g;
    ft.Callbacks = function (t) {
        t = "string" == typeof t ? r(t) : ft.extend({}, t);
        var e, i, n, o, s = [], a = [], l = -1, d = function () {
            for (o = t.once, n = e = !0; a.length; l = -1) for (i = a.shift(); ++l < s.length;) !1 === s[l].apply(i[0], i[1]) && t.stopOnFalse && (l = s.length, i = !1);
            t.memory || (i = !1), e = !1, o && (s = i ? [] : "")
        }, c = {
            add: function () {
                return s && (i && !e && (l = s.length - 1, a.push(i)), function e(i) {
                    ft.each(i, function (i, n) {
                        ft.isFunction(n) ? t.unique && c.has(n) || s.push(n) : n && n.length && "string" !== ft.type(n) && e(n)
                    })
                }(arguments), i && !e && d()), this
            }, remove: function () {
                return ft.each(arguments, function (t, e) {
                    for (var i; (i = ft.inArray(e, s, i)) > -1;) s.splice(i, 1), i <= l && l--
                }), this
            }, has: function (t) {
                return t ? ft.inArray(t, s) > -1 : s.length > 0
            }, empty: function () {
                return s && (s = []), this
            }, disable: function () {
                return o = a = [], s = i = "", this
            }, disabled: function () {
                return !s
            }, lock: function () {
                return o = a = [], i || e || (s = i = ""), this
            }, locked: function () {
                return !!o
            }, fireWith: function (t, i) {
                return o || (i = i || [], i = [t, i.slice ? i.slice() : i], a.push(i), e || d()), this
            }, fire: function () {
                return c.fireWith(this, arguments), this
            }, fired: function () {
                return !!n
            }
        };
        return c
    }, ft.extend({
        Deferred: function (e) {
            var i = [["notify", "progress", ft.Callbacks("memory"), ft.Callbacks("memory"), 2], ["resolve", "done", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 1, "rejected"]],
                n = "pending", o = {
                    state: function () {
                        return n
                    }, always: function () {
                        return s.done(arguments).fail(arguments), this
                    }, catch: function (t) {
                        return o.then(null, t)
                    }, pipe: function () {
                        var t = arguments;
                        return ft.Deferred(function (e) {
                            ft.each(i, function (i, n) {
                                var o = ft.isFunction(t[n[4]]) && t[n[4]];
                                s[n[1]](function () {
                                    var t = o && o.apply(this, arguments);
                                    t && ft.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, o ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    }, then: function (e, n, o) {
                        function s(e, i, n, o) {
                            return function () {
                                var d = this, c = arguments, h = function () {
                                    var t, h;
                                    if (!(e < r)) {
                                        if ((t = n.apply(d, c)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                        h = t && ("object" == typeof t || "function" == typeof t) && t.then, ft.isFunction(h) ? o ? h.call(t, s(r, i, a, o), s(r, i, l, o)) : (r++, h.call(t, s(r, i, a, o), s(r, i, l, o), s(r, i, a, i.notifyWith))) : (n !== a && (d = void 0, c = [t]), (o || i.resolveWith)(d, c))
                                    }
                                }, p = o ? h : function () {
                                    try {
                                        h()
                                    } catch (t) {
                                        ft.Deferred.exceptionHook && ft.Deferred.exceptionHook(t, p.stackTrace), e + 1 >= r && (n !== l && (d = void 0, c = [t]), i.rejectWith(d, c))
                                    }
                                };
                                e ? p() : (ft.Deferred.getStackHook && (p.stackTrace = ft.Deferred.getStackHook()), t.setTimeout(p))
                            }
                        }

                        var r = 0;
                        return ft.Deferred(function (t) {
                            i[0][3].add(s(0, t, ft.isFunction(o) ? o : a, t.notifyWith)), i[1][3].add(s(0, t, ft.isFunction(e) ? e : a)), i[2][3].add(s(0, t, ft.isFunction(n) ? n : l))
                        }).promise()
                    }, promise: function (t) {
                        return null != t ? ft.extend(t, o) : o
                    }
                }, s = {};
            return ft.each(i, function (t, e) {
                var r = e[2], a = e[5];
                o[e[1]] = r.add, a && r.add(function () {
                    n = a
                }, i[3 - t][2].disable, i[0][2].lock), r.add(e[3].fire), s[e[0]] = function () {
                    return s[e[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[e[0] + "With"] = r.fireWith
            }), o.promise(s), e && e.call(s, s), s
        }, when: function (t) {
            var e = arguments.length, i = e, n = Array(i), o = nt.call(arguments), s = ft.Deferred(), r = function (t) {
                return function (i) {
                    n[t] = this, o[t] = arguments.length > 1 ? nt.call(arguments) : i, --e || s.resolveWith(n, o)
                }
            };
            if (e <= 1 && (d(t, s.done(r(i)).resolve, s.reject), "pending" === s.state() || ft.isFunction(o[i] && o[i].then))) return s.then();
            for (; i--;) d(o[i], r(i), s.reject);
            return s.promise()
        }
    });
    var _t = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ft.Deferred.exceptionHook = function (e, i) {
        t.console && t.console.warn && e && _t.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
    }, ft.readyException = function (e) {
        t.setTimeout(function () {
            throw e
        })
    };
    var Wt = ft.Deferred();
    ft.fn.ready = function (t) {
        return Wt.then(t).catch(function (t) {
            ft.readyException(t)
        }), this
    }, ft.extend({
        isReady: !1, readyWait: 1, holdReady: function (t) {
            t ? ft.readyWait++ : ft.ready(!0)
        }, ready: function (t) {
            (!0 === t ? --ft.readyWait : ft.isReady) || (ft.isReady = !0, !0 !== t && --ft.readyWait > 0 || Wt.resolveWith(et, [ft]))
        }
    }), ft.ready.then = Wt.then, "complete" === et.readyState || "loading" !== et.readyState && !et.documentElement.doScroll ? t.setTimeout(ft.ready) : (et.addEventListener("DOMContentLoaded", c), t.addEventListener("load", c));
    var Lt = function (t, e, i, n, o, s, r) {
        var a = 0, l = t.length, d = null == i;
        if ("object" === ft.type(i)) {
            o = !0;
            for (a in i) Lt(t, e, a, i[a], !0, s, r)
        } else if (void 0 !== n && (o = !0, ft.isFunction(n) || (r = !0), d && (r ? (e.call(t, n), e = null) : (d = e, e = function (t, e, i) {
            return d.call(ft(t), i)
        })), e)) for (; a < l; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
        return o ? t : d ? e.call(t) : l ? e(t[0], i) : s
    }, Ot = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };
    h.uid = 1, h.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, Ot(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        }, set: function (t, e, i) {
            var n, o = this.cache(t);
            if ("string" == typeof e) o[ft.camelCase(e)] = i; else for (n in e) o[ft.camelCase(n)] = e[n];
            return o
        }, get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][ft.camelCase(e)]
        }, access: function (t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
        }, remove: function (t, e) {
            var i, n = t[this.expando];
            if (void 0 !== n) {
                if (void 0 !== e) {
                    ft.isArray(e) ? e = e.map(ft.camelCase) : (e = ft.camelCase(e), e = e in n ? [e] : e.match(Et) || []), i = e.length;
                    for (; i--;) delete n[e[i]]
                }
                (void 0 === e || ft.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        }, hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !ft.isEmptyObject(e)
        }
    };
    var Ht = new h, Dt = new h, Pt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, It = /[A-Z]/g;
    ft.extend({
        hasData: function (t) {
            return Dt.hasData(t) || Ht.hasData(t)
        }, data: function (t, e, i) {
            return Dt.access(t, e, i)
        }, removeData: function (t, e) {
            Dt.remove(t, e)
        }, _data: function (t, e, i) {
            return Ht.access(t, e, i)
        }, _removeData: function (t, e) {
            Ht.remove(t, e)
        }
    }), ft.fn.extend({
        data: function (t, e) {
            var i, n, o, s = this[0], r = s && s.attributes;
            if (void 0 === t) {
                if (this.length && (o = Dt.get(s), 1 === s.nodeType && !Ht.get(s, "hasDataAttrs"))) {
                    for (i = r.length; i--;) r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = ft.camelCase(n.slice(5)), u(s, n, o[n])));
                    Ht.set(s, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function () {
                Dt.set(this, t)
            }) : Lt(this, function (e) {
                var i;
                if (s && void 0 === e) {
                    if (void 0 !== (i = Dt.get(s, t))) return i;
                    if (void 0 !== (i = u(s, t))) return i
                } else this.each(function () {
                    Dt.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        }, removeData: function (t) {
            return this.each(function () {
                Dt.remove(this, t)
            })
        }
    }), ft.extend({
        queue: function (t, e, i) {
            var n;
            if (t) return e = (e || "fx") + "queue", n = Ht.get(t, e), i && (!n || ft.isArray(i) ? n = Ht.access(t, e, ft.makeArray(i)) : n.push(i)), n || []
        }, dequeue: function (t, e) {
            e = e || "fx";
            var i = ft.queue(t, e), n = i.length, o = i.shift(), s = ft._queueHooks(t, e), r = function () {
                ft.dequeue(t, e)
            };
            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete s.stop, o.call(t, r, s)), !n && s && s.empty.fire()
        }, _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return Ht.get(t, i) || Ht.access(t, i, {
                empty: ft.Callbacks("once memory").add(function () {
                    Ht.remove(t, [e + "queue", i])
                })
            })
        }
    }), ft.fn.extend({
        queue: function (t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? ft.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var i = ft.queue(this, t, e);
                ft._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && ft.dequeue(this, t)
            })
        }, dequeue: function (t) {
            return this.each(function () {
                ft.dequeue(this, t)
            })
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            var i, n = 1, o = ft.Deferred(), s = this, r = this.length, a = function () {
                --n || o.resolveWith(s, [s])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) (i = Ht.get(s[r], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), o.promise(e)
        }
    });
    var jt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Nt = new RegExp("^(?:([+-])=|)(" + jt + ")([a-z%]*)$", "i"),
        Rt = ["Top", "Right", "Bottom", "Left"], Mt = function (t, e) {
            return t = e || t, "none" === t.style.display || "" === t.style.display && ft.contains(t.ownerDocument, t) && "none" === ft.css(t, "display")
        }, Ft = function (t, e, i, n) {
            var o, s, r = {};
            for (s in e) r[s] = t.style[s], t.style[s] = e[s];
            o = i.apply(t, n || []);
            for (s in e) t.style[s] = r[s];
            return o
        }, qt = {};
    ft.fn.extend({
        show: function () {
            return m(this, !0)
        }, hide: function () {
            return m(this)
        }, toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Mt(this) ? ft(this).show() : ft(this).hide()
            })
        }
    });
    var Bt = /^(?:checkbox|radio)$/i, Ut = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Xt = /^$|\/(?:java|ecma)script/i, Zt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Zt.optgroup = Zt.option, Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead, Zt.th = Zt.td;
    var Qt = /<|&#?\w+;/;
    !function () {
        var t = et.createDocumentFragment(), e = t.appendChild(et.createElement("div")), i = et.createElement("input");
        i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), pt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", pt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Yt = et.documentElement, Vt = /^key/, Gt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Jt = /^([^.]*)(?:\.(.+)|)/;
    ft.event = {
        global: {}, add: function (t, e, i, n, o) {
            var s, r, a, l, d, c, h, p, u, f, g, m = Ht.get(t);
            if (m) for (i.handler && (s = i, i = s.handler, o = s.selector), o && ft.find.matchesSelector(Yt, o), i.guid || (i.guid = ft.guid++), (l = m.events) || (l = m.events = {}), (r = m.handle) || (r = m.handle = function (e) {
                return void 0 !== ft && ft.event.triggered !== e.type ? ft.event.dispatch.apply(t, arguments) : void 0
            }), e = (e || "").match(Et) || [""], d = e.length; d--;) a = Jt.exec(e[d]) || [], u = g = a[1], f = (a[2] || "").split(".").sort(), u && (h = ft.event.special[u] || {}, u = (o ? h.delegateType : h.bindType) || u, h = ft.event.special[u] || {}, c = ft.extend({
                type: u,
                origType: g,
                data: n,
                handler: i,
                guid: i.guid,
                selector: o,
                needsContext: o && ft.expr.match.needsContext.test(o),
                namespace: f.join(".")
            }, s), (p = l[u]) || (p = l[u] = [], p.delegateCount = 0, h.setup && !1 !== h.setup.call(t, n, f, r) || t.addEventListener && t.addEventListener(u, r)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), ft.event.global[u] = !0)
        }, remove: function (t, e, i, n, o) {
            var s, r, a, l, d, c, h, p, u, f, g, m = Ht.hasData(t) && Ht.get(t);
            if (m && (l = m.events)) {
                for (e = (e || "").match(Et) || [""], d = e.length; d--;) if (a = Jt.exec(e[d]) || [], u = g = a[1], f = (a[2] || "").split(".").sort(), u) {
                    for (h = ft.event.special[u] || {}, u = (n ? h.delegateType : h.bindType) || u, p = l[u] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = p.length; s--;) c = p[s], !o && g !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (p.splice(s, 1), c.selector && p.delegateCount--, h.remove && h.remove.call(t, c));
                    r && !p.length && (h.teardown && !1 !== h.teardown.call(t, f, m.handle) || ft.removeEvent(t, u, m.handle), delete l[u])
                } else for (u in l) ft.event.remove(t, u + e[d], i, n, !0);
                ft.isEmptyObject(l) && Ht.remove(t, "handle events")
            }
        }, dispatch: function (t) {
            var e, i, n, o, s, r, a = ft.event.fix(t), l = new Array(arguments.length),
                d = (Ht.get(this, "events") || {})[a.type] || [], c = ft.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (r = ft.event.handlers.call(this, a, d), e = 0; (o = r[e++]) && !a.isPropagationStopped();) for (a.currentTarget = o.elem, i = 0; (s = o.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, void 0 !== (n = ((ft.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        }, handlers: function (t, e) {
            var i, n, o, s, r, a = [], l = e.delegateCount, d = t.target;
            if (l && d.nodeType && !("click" === t.type && t.button >= 1)) for (; d !== this; d = d.parentNode || this) if (1 === d.nodeType && ("click" !== t.type || !0 !== d.disabled)) {
                for (s = [], r = {}, i = 0; i < l; i++) n = e[i], o = n.selector + " ", void 0 === r[o] && (r[o] = n.needsContext ? ft(o, this).index(d) > -1 : ft.find(o, this, null, [d]).length), r[o] && s.push(n);
                s.length && a.push({elem: d, handlers: s})
            }
            return d = this, l < e.length && a.push({elem: d, handlers: e.slice(l)}), a
        }, addProp: function (t, e) {
            Object.defineProperty(ft.Event.prototype, t, {
                enumerable: !0, configurable: !0, get: ft.isFunction(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                }, set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (t) {
            return t[ft.expando] ? t : new ft.Event(t)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== T() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === T() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && ft.nodeName(this, "input")) return this.click(), !1
                }, _default: function (t) {
                    return ft.nodeName(t.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, ft.removeEvent = function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, ft.Event = function (t, e) {
        return this instanceof ft.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? b : x, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && ft.extend(this, e), this.timeStamp = t && t.timeStamp || ft.now(), void (this[ft.expando] = !0)) : new ft.Event(t, e)
    }, ft.Event.prototype = {
        constructor: ft.Event,
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = b, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = b, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = b, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ft.each({
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
        which: function (t) {
            var e = t.button;
            return null == t.which && Vt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Gt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, ft.event.addProp), ft.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        ft.event.special[t] = {
            delegateType: e, bindType: e, handle: function (t) {
                var i, n = this, o = t.relatedTarget, s = t.handleObj;
                return o && (o === n || ft.contains(n, o)) || (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), ft.fn.extend({
        on: function (t, e, i, n) {
            return z(this, t, e, i, n)
        }, one: function (t, e, i, n) {
            return z(this, t, e, i, n, 1)
        }, off: function (t, e, i) {
            var n, o;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, ft(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this
            }
            return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = x), this.each(function () {
                ft.event.remove(this, t, i, e)
            })
        }
    });
    var Kt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        te = /<script|<style|<link/i, ee = /checked\s*(?:[^=]|=\s*.checked.)/i, ie = /^true\/(.*)/,
        ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ft.extend({
        htmlPrefilter: function (t) {
            return t.replace(Kt, "<$1></$2>")
        }, clone: function (t, e, i) {
            var n, o, s, r, a = t.cloneNode(!0), l = ft.contains(t.ownerDocument, t);
            if (!(pt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t))) for (r = v(a), s = v(t), n = 0, o = s.length; n < o; n++) A(s[n], r[n]);
            if (e) if (i) for (s = s || v(t), r = r || v(a), n = 0, o = s.length; n < o; n++) $(s[n], r[n]); else $(t, a);
            return r = v(a, "script"), r.length > 0 && w(r, !l && v(t, "script")), a
        }, cleanData: function (t) {
            for (var e, i, n, o = ft.event.special, s = 0; void 0 !== (i = t[s]); s++) if (Ot(i)) {
                if (e = i[Ht.expando]) {
                    if (e.events) for (n in e.events) o[n] ? ft.event.remove(i, n) : ft.removeEvent(i, n, e.handle);
                    i[Ht.expando] = void 0
                }
                i[Dt.expando] && (i[Dt.expando] = void 0)
            }
        }
    }), ft.fn.extend({
        detach: function (t) {
            return _(this, t, !0)
        }, remove: function (t) {
            return _(this, t)
        }, text: function (t) {
            return Lt(this, function (t) {
                return void 0 === t ? ft.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        }, append: function () {
            return E(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    C(this, t).appendChild(t)
                }
            })
        }, prepend: function () {
            return E(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = C(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        }, before: function () {
            return E(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        }, after: function () {
            return E(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ft.cleanData(v(t, !1)), t.textContent = "");
            return this
        }, clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return ft.clone(this, t, e)
            })
        }, html: function (t) {
            return Lt(this, function (t) {
                var e = this[0] || {}, i = 0, n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !te.test(t) && !Zt[(Ut.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = ft.htmlPrefilter(t);
                    try {
                        for (; i < n; i++) e = this[i] || {}, 1 === e.nodeType && (ft.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function () {
            var t = [];
            return E(this, arguments, function (e) {
                var i = this.parentNode;
                ft.inArray(this, t) < 0 && (ft.cleanData(v(this)), i && i.replaceChild(e, this))
            }, t)
        }
    }), ft.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        ft.fn[t] = function (t) {
            for (var i, n = [], o = ft(t), s = o.length - 1, r = 0; r <= s; r++) i = r === s ? this : this.clone(!0), ft(o[r])[e](i), st.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var oe = /^margin/, se = new RegExp("^(" + jt + ")(?!px)[a-z%]+$", "i"), re = function (e) {
        var i = e.ownerDocument.defaultView;
        return i && i.opener || (i = t), i.getComputedStyle(e)
    };
    !function () {
        function e() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Yt.appendChild(r);
                var e = t.getComputedStyle(a);
                i = "1%" !== e.top, s = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", o = "4px" === e.marginRight, Yt.removeChild(r), a = null
            }
        }

        var i, n, o, s, r = et.createElement("div"), a = et.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", pt.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(a), ft.extend(pt, {
            pixelPosition: function () {
                return e(), i
            }, boxSizingReliable: function () {
                return e(), n
            }, pixelMarginRight: function () {
                return e(), o
            }, reliableMarginLeft: function () {
                return e(), s
            }
        }))
    }();
    var ae = /^(none|table(?!-c[ea]).+)/, le = {position: "absolute", visibility: "hidden", display: "block"},
        de = {letterSpacing: "0", fontWeight: "400"}, ce = ["Webkit", "Moz", "ms"], he = et.createElement("div").style;
    ft.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = W(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: "cssFloat"},
        style: function (t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, s, r, a = ft.camelCase(e), l = t.style;
                return e = ft.cssProps[a] || (ft.cssProps[a] = O(a) || a), r = ft.cssHooks[e] || ft.cssHooks[a], void 0 === i ? r && "get" in r && void 0 !== (o = r.get(t, !1, n)) ? o : l[e] : (s = typeof i, "string" === s && (o = Nt.exec(i)) && o[1] && (i = f(t, e, o), s = "number"), void (null != i && i === i && ("number" === s && (i += o && o[3] || (ft.cssNumber[a] ? "" : "px")), pt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l[e] = i))))
            }
        },
        css: function (t, e, i, n) {
            var o, s, r, a = ft.camelCase(e);
            return e = ft.cssProps[a] || (ft.cssProps[a] = O(a) || a), r = ft.cssHooks[e] || ft.cssHooks[a], r && "get" in r && (o = r.get(t, !0, i)), void 0 === o && (o = W(t, e, n)), "normal" === o && e in de && (o = de[e]), "" === i || i ? (s = parseFloat(o), !0 === i || isFinite(s) ? s || 0 : o) : o
        }
    }), ft.each(["height", "width"], function (t, e) {
        ft.cssHooks[e] = {
            get: function (t, i, n) {
                if (i) return !ae.test(ft.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? P(t, e, n) : Ft(t, le, function () {
                    return P(t, e, n)
                })
            }, set: function (t, i, n) {
                var o, s = n && re(t), r = n && D(t, e, n, "border-box" === ft.css(t, "boxSizing", !1, s), s);
                return r && (o = Nt.exec(i)) && "px" !== (o[3] || "px") && (t.style[e] = i, i = ft.css(t, e)), H(t, i, r)
            }
        }
    }), ft.cssHooks.marginLeft = L(pt.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(W(t, "marginLeft")) || t.getBoundingClientRect().left - Ft(t, {marginLeft: 0}, function () {
            return t.getBoundingClientRect().left
        })) + "px"
    }), ft.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        ft.cssHooks[t + e] = {
            expand: function (i) {
                for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) o[t + Rt[n] + e] = s[n] || s[n - 2] || s[0];
                return o
            }
        }, oe.test(t) || (ft.cssHooks[t + e].set = H)
    }), ft.fn.extend({
        css: function (t, e) {
            return Lt(this, function (t, e, i) {
                var n, o, s = {}, r = 0;
                if (ft.isArray(e)) {
                    for (n = re(t), o = e.length; r < o; r++) s[e[r]] = ft.css(t, e[r], !1, n);
                    return s
                }
                return void 0 !== i ? ft.style(t, e, i) : ft.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), ft.Tween = I, I.prototype = {
        constructor: I, init: function (t, e, i, n, o, s) {
            this.elem = t, this.prop = i, this.easing = o || ft.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (ft.cssNumber[i] ? "" : "px")
        }, cur: function () {
            var t = I.propHooks[this.prop];
            return t && t.get ? t.get(this) : I.propHooks._default.get(this)
        }, run: function (t) {
            var e, i = I.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : I.propHooks._default.set(this), this
        }
    }, I.prototype.init.prototype = I.prototype, I.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            }, set: function (t) {
                ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ft.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }, _default: "swing"
    }, ft.fx = I.prototype.init, ft.fx.step = {};
    var pe, ue, fe = /^(?:toggle|show|hide)$/, ge = /queueHooks$/;
    ft.Animation = ft.extend(B, {
        tweeners: {
            "*": [function (t, e) {
                var i = this.createTween(t, e);
                return f(i.elem, t, Nt.exec(e), i), i
            }]
        }, tweener: function (t, e) {
            ft.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Et);
            for (var i, n = 0, o = t.length; n < o; n++) i = t[n], B.tweeners[i] = B.tweeners[i] || [], B.tweeners[i].unshift(e)
        }, prefilters: [F], prefilter: function (t, e) {
            e ? B.prefilters.unshift(t) : B.prefilters.push(t)
        }
    }), ft.speed = function (t, e, i) {
        var n = t && "object" == typeof t ? ft.extend({}, t) : {
            complete: i || !i && e || ft.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !ft.isFunction(e) && e
        };
        return ft.fx.off || et.hidden ? n.duration = 0 : "number" != typeof n.duration && (n.duration in ft.fx.speeds ? n.duration = ft.fx.speeds[n.duration] : n.duration = ft.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            ft.isFunction(n.old) && n.old.call(this), n.queue && ft.dequeue(this, n.queue)
        }, n
    }, ft.fn.extend({
        fadeTo: function (t, e, i, n) {
            return this.filter(Mt).css("opacity", 0).show().end().animate({opacity: e}, t, i, n)
        }, animate: function (t, e, i, n) {
            var o = ft.isEmptyObject(t), s = ft.speed(e, i, n), r = function () {
                var e = B(this, ft.extend({}, t), s);
                (o || Ht.get(this, "finish")) && e.stop(!0)
            };
            return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
        }, stop: function (t, e, i) {
            var n = function (t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
                var e = !0, o = null != t && t + "queueHooks", s = ft.timers, r = Ht.get(this);
                if (o) r[o] && r[o].stop && n(r[o]); else for (o in r) r[o] && r[o].stop && ge.test(o) && n(r[o]);
                for (o = s.length; o--;) s[o].elem !== this || null != t && s[o].queue !== t || (s[o].anim.stop(i), e = !1, s.splice(o, 1));
                !e && i || ft.dequeue(this, t)
            })
        }, finish: function (t) {
            return !1 !== t && (t = t || "fx"), this.each(function () {
                var e, i = Ht.get(this), n = i[t + "queue"], o = i[t + "queueHooks"], s = ft.timers,
                    r = n ? n.length : 0;
                for (i.finish = !0, ft.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            })
        }
    }), ft.each(["toggle", "show", "hide"], function (t, e) {
        var i = ft.fn[e];
        ft.fn[e] = function (t, n, o) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(R(e, !0), t, n, o)
        }
    }), ft.each({
        slideDown: R("show"),
        slideUp: R("hide"),
        slideToggle: R("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (t, e) {
        ft.fn[t] = function (t, i, n) {
            return this.animate(e, t, i, n)
        }
    }), ft.timers = [], ft.fx.tick = function () {
        var t, e = 0, i = ft.timers;
        for (pe = ft.now(); e < i.length; e++) (t = i[e])() || i[e] !== t || i.splice(e--, 1);
        i.length || ft.fx.stop(), pe = void 0
    }, ft.fx.timer = function (t) {
        ft.timers.push(t), t() ? ft.fx.start() : ft.timers.pop()
    }, ft.fx.interval = 13, ft.fx.start = function () {
        ue || (ue = t.requestAnimationFrame ? t.requestAnimationFrame(j) : t.setInterval(ft.fx.tick, ft.fx.interval))
    }, ft.fx.stop = function () {
        t.cancelAnimationFrame ? t.cancelAnimationFrame(ue) : t.clearInterval(ue), ue = null
    }, ft.fx.speeds = {slow: 600, fast: 200, _default: 400}, ft.fn.delay = function (e, i) {
        return e = ft.fx ? ft.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function (i, n) {
            var o = t.setTimeout(i, e);
            n.stop = function () {
                t.clearTimeout(o)
            }
        })
    }, function () {
        var t = et.createElement("input"), e = et.createElement("select"),
            i = e.appendChild(et.createElement("option"));
        t.type = "checkbox", pt.checkOn = "" !== t.value, pt.optSelected = i.selected, t = et.createElement("input"), t.value = "t", t.type = "radio", pt.radioValue = "t" === t.value
    }();
    var me, ve = ft.expr.attrHandle;
    ft.fn.extend({
        attr: function (t, e) {
            return Lt(this, ft.attr, t, e, arguments.length > 1)
        }, removeAttr: function (t) {
            return this.each(function () {
                ft.removeAttr(this, t)
            })
        }
    }), ft.extend({
        attr: function (t, e, i) {
            var n, o, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? ft.prop(t, e, i) : (1 === s && ft.isXMLDoc(t) || (o = ft.attrHooks[e.toLowerCase()] || (ft.expr.match.bool.test(e) ? me : void 0)), void 0 !== i ? null === i ? void ft.removeAttr(t, e) : o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : o && "get" in o && null !== (n = o.get(t, e)) ? n : (n = ft.find.attr(t, e), null == n ? void 0 : n))
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!pt.radioValue && "radio" === e && ft.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }, removeAttr: function (t, e) {
            var i, n = 0, o = e && e.match(Et);
            if (o && 1 === t.nodeType) for (; i = o[n++];) t.removeAttribute(i)
        }
    }), me = {
        set: function (t, e, i) {
            return !1 === e ? ft.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, ft.each(ft.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var i = ve[e] || ft.find.attr;
        ve[e] = function (t, e, n) {
            var o, s, r = e.toLowerCase();
            return n || (s = ve[r], ve[r] = o, o = null != i(t, e, n) ? r : null, ve[r] = s), o
        }
    });
    var we = /^(?:input|select|textarea|button)$/i, ye = /^(?:a|area)$/i;
    ft.fn.extend({
        prop: function (t, e) {
            return Lt(this, ft.prop, t, e, arguments.length > 1)
        }, removeProp: function (t) {
            return this.each(function () {
                delete this[ft.propFix[t] || t]
            })
        }
    }), ft.extend({
        prop: function (t, e, i) {
            var n, o, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && ft.isXMLDoc(t) || (e = ft.propFix[e] || e, o = ft.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = ft.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : we.test(t.nodeName) || ye.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), pt.optSelected || (ft.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }, set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ft.propFix[this.toLowerCase()] = this
    }), ft.fn.extend({
        addClass: function (t) {
            var e, i, n, o, s, r, a, l = 0;
            if (ft.isFunction(t)) return this.each(function (e) {
                ft(this).addClass(t.call(this, e, X(this)))
            });
            if ("string" == typeof t && t) for (e = t.match(Et) || []; i = this[l++];) if (o = X(i), n = 1 === i.nodeType && " " + U(o) + " ") {
                for (r = 0; s = e[r++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                a = U(n), o !== a && i.setAttribute("class", a)
            }
            return this
        }, removeClass: function (t) {
            var e, i, n, o, s, r, a, l = 0;
            if (ft.isFunction(t)) return this.each(function (e) {
                ft(this).removeClass(t.call(this, e, X(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t) for (e = t.match(Et) || []; i = this[l++];) if (o = X(i), n = 1 === i.nodeType && " " + U(o) + " ") {
                for (r = 0; s = e[r++];) for (; n.indexOf(" " + s + " ") > -1;) n = n.replace(" " + s + " ", " ");
                a = U(n), o !== a && i.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : ft.isFunction(t) ? this.each(function (i) {
                ft(this).toggleClass(t.call(this, i, X(this), e), e)
            }) : this.each(function () {
                var e, n, o, s;
                if ("string" === i) for (n = 0, o = ft(this), s = t.match(Et) || []; e = s[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else void 0 !== t && "boolean" !== i || (e = X(this), e && Ht.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Ht.get(this, "__className__") || ""))
            })
        }, hasClass: function (t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];) if (1 === i.nodeType && (" " + U(X(i)) + " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var be = /\r/g;
    ft.fn.extend({
        val: function (t) {
            var e, i, n, o = this[0];
            return arguments.length ? (n = ft.isFunction(t), this.each(function (i) {
                var o;
                1 === this.nodeType && (o = n ? t.call(this, i, ft(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : ft.isArray(o) && (o = ft.map(o, function (t) {
                    return null == t ? "" : t + ""
                })), (e = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
            })) : o ? (e = ft.valHooks[o.type] || ft.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(be, "") : null == i ? "" : i)) : void 0
        }
    }), ft.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = ft.find.attr(t, "value");
                    return null != e ? e : U(ft.text(t))
                }
            }, select: {
                get: function (t) {
                    var e, i, n, o = t.options, s = t.selectedIndex, r = "select-one" === t.type, a = r ? null : [],
                        l = r ? s + 1 : o.length;
                    for (n = s < 0 ? l : r ? s : 0; n < l; n++) if (i = o[n], (i.selected || n === s) && !i.disabled && (!i.parentNode.disabled || !ft.nodeName(i.parentNode, "optgroup"))) {
                        if (e = ft(i).val(), r) return e;
                        a.push(e)
                    }
                    return a
                }, set: function (t, e) {
                    for (var i, n, o = t.options, s = ft.makeArray(e), r = o.length; r--;) n = o[r], (n.selected = ft.inArray(ft.valHooks.option.get(n), s) > -1) && (i = !0);
                    return i || (t.selectedIndex = -1), s
                }
            }
        }
    }), ft.each(["radio", "checkbox"], function () {
        ft.valHooks[this] = {
            set: function (t, e) {
                if (ft.isArray(e)) return t.checked = ft.inArray(ft(t).val(), e) > -1
            }
        }, pt.checkOn || (ft.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var xe = /^(?:focusinfocus|focusoutblur)$/;
    ft.extend(ft.event, {
        trigger: function (e, i, n, o) {
            var s, r, a, l, d, c, h, p = [n || et], u = dt.call(e, "type") ? e.type : e,
                f = dt.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = a = n = n || et, 3 !== n.nodeType && 8 !== n.nodeType && !xe.test(u + ft.event.triggered) && (u.indexOf(".") > -1 && (f = u.split("."), u = f.shift(), f.sort()), d = u.indexOf(":") < 0 && "on" + u, e = e[ft.expando] ? e : new ft.Event(u, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : ft.makeArray(i, [e]), h = ft.event.special[u] || {}, o || !h.trigger || !1 !== h.trigger.apply(n, i))) {
                if (!o && !h.noBubble && !ft.isWindow(n)) {
                    for (l = h.delegateType || u, xe.test(l + u) || (r = r.parentNode); r; r = r.parentNode) p.push(r), a = r;
                    a === (n.ownerDocument || et) && p.push(a.defaultView || a.parentWindow || t)
                }
                for (s = 0; (r = p[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : h.bindType || u, c = (Ht.get(r, "events") || {})[e.type] && Ht.get(r, "handle"), c && c.apply(r, i), (c = d && r[d]) && c.apply && Ot(r) && (e.result = c.apply(r, i), !1 === e.result && e.preventDefault());
                return e.type = u, o || e.isDefaultPrevented() || h._default && !1 !== h._default.apply(p.pop(), i) || !Ot(n) || d && ft.isFunction(n[u]) && !ft.isWindow(n) && (a = n[d], a && (n[d] = null), ft.event.triggered = u, n[u](), ft.event.triggered = void 0, a && (n[d] = a)), e.result
            }
        }, simulate: function (t, e, i) {
            var n = ft.extend(new ft.Event, i, {type: t, isSimulated: !0});
            ft.event.trigger(n, null, e)
        }
    }), ft.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                ft.event.trigger(t, e, this)
            })
        }, triggerHandler: function (t, e) {
            var i = this[0];
            if (i) return ft.event.trigger(t, e, i, !0)
        }
    }), ft.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
        ft.fn[e] = function (t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), ft.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), pt.focusin = "onfocusin" in t, pt.focusin || ft.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var i = function (t) {
            ft.event.simulate(e, t.target, ft.event.fix(t))
        };
        ft.event.special[e] = {
            setup: function () {
                var n = this.ownerDocument || this, o = Ht.access(n, e);
                o || n.addEventListener(t, i, !0), Ht.access(n, e, (o || 0) + 1)
            }, teardown: function () {
                var n = this.ownerDocument || this, o = Ht.access(n, e) - 1;
                o ? Ht.access(n, e, o) : (n.removeEventListener(t, i, !0), Ht.remove(n, e))
            }
        }
    });
    var Te = t.location, ze = ft.now(), Ce = /\?/;
    ft.parseXML = function (e) {
        var i;
        if (!e || "string" != typeof e) return null;
        try {
            i = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + e), i
    };
    var ke = /\[\]$/, Se = /\r?\n/g, $e = /^(?:submit|button|image|reset|file)$/i,
        Ae = /^(?:input|select|textarea|keygen)/i;
    ft.param = function (t, e) {
        var i, n = [], o = function (t, e) {
            var i = ft.isFunction(e) ? e() : e;
            n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
        };
        if (ft.isArray(t) || t.jquery && !ft.isPlainObject(t)) ft.each(t, function () {
            o(this.name, this.value)
        }); else for (i in t) Z(i, t[i], e, o);
        return n.join("&")
    }, ft.fn.extend({
        serialize: function () {
            return ft.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var t = ft.prop(this, "elements");
                return t ? ft.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !ft(this).is(":disabled") && Ae.test(this.nodeName) && !$e.test(t) && (this.checked || !Bt.test(t))
            }).map(function (t, e) {
                var i = ft(this).val();
                return null == i ? null : ft.isArray(i) ? ft.map(i, function (t) {
                    return {name: e.name, value: t.replace(Se, "\r\n")}
                }) : {name: e.name, value: i.replace(Se, "\r\n")}
            }).get()
        }
    });
    var Ee = /%20/g, _e = /#.*$/, We = /([?&])_=[^&]*/, Le = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Oe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, He = /^(?:GET|HEAD)$/, De = /^\/\//, Pe = {},
        Ie = {}, je = "*/".concat("*"), Ne = et.createElement("a");
    Ne.href = Te.href, ft.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Te.href,
            type: "GET",
            isLocal: Oe.test(Te.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": je,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": ft.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (t, e) {
            return e ? V(V(t, ft.ajaxSettings), e) : V(ft.ajaxSettings, t)
        },
        ajaxPrefilter: Q(Pe),
        ajaxTransport: Q(Ie),
        ajax: function (e, i) {
            function n(e, i, n, a) {
                var d, p, u, b, x, T = i;
                c || (c = !0, l && t.clearTimeout(l), o = void 0, r = a || "", z.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, n && (b = G(f, z, n)), b = J(f, b, z, d), d ? (f.ifModified && (x = z.getResponseHeader("Last-Modified"), x && (ft.lastModified[s] = x), (x = z.getResponseHeader("etag")) && (ft.etag[s] = x)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, p = b.data, u = b.error, d = !u)) : (u = T, !e && T || (T = "error", e < 0 && (e = 0))), z.status = e, z.statusText = (i || T) + "", d ? v.resolveWith(g, [p, T, z]) : v.rejectWith(g, [z, T, u]), z.statusCode(y), y = void 0, h && m.trigger(d ? "ajaxSuccess" : "ajaxError", [z, f, d ? p : u]), w.fireWith(g, [z, T]), h && (m.trigger("ajaxComplete", [z, f]), --ft.active || ft.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var o, s, r, a, l, d, c, h, p, u, f = ft.ajaxSetup({}, i), g = f.context || f,
                m = f.context && (g.nodeType || g.jquery) ? ft(g) : ft.event, v = ft.Deferred(),
                w = ft.Callbacks("once memory"), y = f.statusCode || {}, b = {}, x = {}, T = "canceled", z = {
                    readyState: 0, getResponseHeader: function (t) {
                        var e;
                        if (c) {
                            if (!a) for (a = {}; e = Le.exec(r);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    }, getAllResponseHeaders: function () {
                        return c ? r : null
                    }, setRequestHeader: function (t, e) {
                        return null == c && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, b[t] = e), this
                    }, overrideMimeType: function (t) {
                        return null == c && (f.mimeType = t), this
                    }, statusCode: function (t) {
                        var e;
                        if (t) if (c) z.always(t[z.status]); else for (e in t) y[e] = [y[e], t[e]];
                        return this
                    }, abort: function (t) {
                        var e = t || T;
                        return o && o.abort(e), n(0, e), this
                    }
                };
            if (v.promise(z), f.url = ((e || f.url || Te.href) + "").replace(De, Te.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Et) || [""], null == f.crossDomain) {
                d = et.createElement("a");
                try {
                    d.href = f.url, d.href = d.href, f.crossDomain = Ne.protocol + "//" + Ne.host != d.protocol + "//" + d.host
                } catch (t) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = ft.param(f.data, f.traditional)), Y(Pe, f, i, z), c) return z;
            h = ft.event && f.global, h && 0 == ft.active++ && ft.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !He.test(f.type), s = f.url.replace(_e, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ee, "+")) : (u = f.url.slice(s.length), f.data && (s += (Ce.test(s) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (s = s.replace(We, "$1"), u = (Ce.test(s) ? "&" : "?") + "_=" + ze++ + u), f.url = s + u), f.ifModified && (ft.lastModified[s] && z.setRequestHeader("If-Modified-Since", ft.lastModified[s]), ft.etag[s] && z.setRequestHeader("If-None-Match", ft.etag[s])), (f.data && f.hasContent && !1 !== f.contentType || i.contentType) && z.setRequestHeader("Content-Type", f.contentType), z.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + je + "; q=0.01" : "") : f.accepts["*"]);
            for (p in f.headers) z.setRequestHeader(p, f.headers[p]);
            if (f.beforeSend && (!1 === f.beforeSend.call(g, z, f) || c)) return z.abort();
            if (T = "abort", w.add(f.complete), z.done(f.success), z.fail(f.error), o = Y(Ie, f, i, z)) {
                if (z.readyState = 1, h && m.trigger("ajaxSend", [z, f]), c) return z;
                f.async && f.timeout > 0 && (l = t.setTimeout(function () {
                    z.abort("timeout")
                }, f.timeout));
                try {
                    c = !1, o.send(b, n)
                } catch (t) {
                    if (c) throw t;
                    n(-1, t)
                }
            } else n(-1, "No Transport");
            return z
        },
        getJSON: function (t, e, i) {
            return ft.get(t, e, i, "json")
        },
        getScript: function (t, e) {
            return ft.get(t, void 0, e, "script")
        }
    }), ft.each(["get", "post"], function (t, e) {
        ft[e] = function (t, i, n, o) {
            return ft.isFunction(i) && (o = o || n, n = i, i = void 0), ft.ajax(ft.extend({
                url: t,
                type: e,
                dataType: o,
                data: i,
                success: n
            }, ft.isPlainObject(t) && t))
        }
    }), ft._evalUrl = function (t) {
        return ft.ajax({url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, ft.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (ft.isFunction(t) && (t = t.call(this[0])), e = ft(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        }, wrapInner: function (t) {
            return ft.isFunction(t) ? this.each(function (e) {
                ft(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = ft(this), i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        }, wrap: function (t) {
            var e = ft.isFunction(t);
            return this.each(function (i) {
                ft(this).wrapAll(e ? t.call(this, i) : t)
            })
        }, unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                ft(this).replaceWith(this.childNodes)
            }), this
        }
    }), ft.expr.pseudos.hidden = function (t) {
        return !ft.expr.pseudos.visible(t)
    }, ft.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, ft.ajaxSettings.xhr = function () {
        try {
            return new t.XMLHttpRequest
        } catch (t) {
        }
    };
    var Re = {0: 200, 1223: 204}, Me = ft.ajaxSettings.xhr();
    pt.cors = !!Me && "withCredentials" in Me, pt.ajax = Me = !!Me, ft.ajaxTransport(function (e) {
        var i, n;
        if (pt.cors || Me && !e.crossDomain) return {
            send: function (o, s) {
                var r, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (r in e.xhrFields) a[r] = e.xhrFields[r];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (r in o) a.setRequestHeader(r, o[r]);
                i = function (t) {
                    return function () {
                        i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Re[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                    }
                }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function () {
                    4 === a.readyState && t.setTimeout(function () {
                        i && n()
                    })
                }, i = i("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (i) throw t
                }
            }, abort: function () {
                i && i()
            }
        }
    }), ft.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), ft.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (t) {
                return ft.globalEval(t), t
            }
        }
    }), ft.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), ft.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, i;
            return {
                send: function (n, o) {
                    e = ft("<script>").prop({charset: t.scriptCharset, src: t.url}).on("load error", i = function (t) {
                        e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                    }), et.head.appendChild(e[0])
                }, abort: function () {
                    i && i()
                }
            }
        }
    });
    var Fe = [], qe = /(=)\?(?=&|$)|\?\?/;
    ft.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = Fe.pop() || ft.expando + "_" + ze++;
            return this[t] = !0, t
        }
    }), ft.ajaxPrefilter("json jsonp", function (e, i, n) {
        var o, s, r,
            a = !1 !== e.jsonp && (qe.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && qe.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = ft.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(qe, "$1" + o) : !1 !== e.jsonp && (e.url += (Ce.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
            return r || ft.error(o + " was not called"), r[0]
        }, e.dataTypes[0] = "json", s = t[o], t[o] = function () {
            r = arguments
        }, n.always(function () {
            void 0 === s ? ft(t).removeProp(o) : t[o] = s, e[o] && (e.jsonpCallback = i.jsonpCallback, Fe.push(o)), r && ft.isFunction(s) && s(r[0]), r = s = void 0
        }), "script"
    }), pt.createHTMLDocument = function () {
        var t = et.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), ft.parseHTML = function (t, e, i) {
        if ("string" != typeof t) return [];
        "boolean" == typeof e && (i = e, e = !1);
        var n, o, s;
        return e || (pt.createHTMLDocument ? (e = et.implementation.createHTMLDocument(""), n = e.createElement("base"), n.href = et.location.href, e.head.appendChild(n)) : e = et), o = zt.exec(t), s = !i && [], o ? [e.createElement(o[1])] : (o = y([t], e, s), s && s.length && ft(s).remove(), ft.merge([], o.childNodes))
    }, ft.fn.load = function (t, e, i) {
        var n, o, s, r = this, a = t.indexOf(" ");
        return a > -1 && (n = U(t.slice(a)), t = t.slice(0, a)), ft.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), r.length > 0 && ft.ajax({
            url: t,
            type: o || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            s = arguments, r.html(n ? ft("<div>").append(ft.parseHTML(t)).find(n) : t)
        }).always(i && function (t, e) {
            r.each(function () {
                i.apply(this, s || [t.responseText, e, t])
            })
        }), this
    }, ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        ft.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), ft.expr.pseudos.animated = function (t) {
        return ft.grep(ft.timers, function (e) {
            return t === e.elem
        }).length
    }, ft.offset = {
        setOffset: function (t, e, i) {
            var n, o, s, r, a, l, d, c = ft.css(t, "position"), h = ft(t), p = {};
            "static" === c && (t.style.position = "relative"), a = h.offset(), s = ft.css(t, "top"), l = ft.css(t, "left"), d = ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1, d ? (n = h.position(), r = n.top, o = n.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), ft.isFunction(e) && (e = e.call(t, i, ft.extend({}, a))), null != e.top && (p.top = e.top - a.top + r), null != e.left && (p.left = e.left - a.left + o), "using" in e ? e.using.call(t, p) : h.css(p)
        }
    }, ft.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                ft.offset.setOffset(this, t, e)
            });
            var e, i, n, o, s = this[0];
            return s ? s.getClientRects().length ? (n = s.getBoundingClientRect(), n.width || n.height ? (o = s.ownerDocument, i = K(o), e = o.documentElement, {
                top: n.top + i.pageYOffset - e.clientTop,
                left: n.left + i.pageXOffset - e.clientLeft
            }) : n) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var t, e, i = this[0], n = {top: 0, left: 0};
                return "fixed" === ft.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ft.nodeName(t[0], "html") || (n = t.offset()), n = {
                    top: n.top + ft.css(t[0], "borderTopWidth", !0),
                    left: n.left + ft.css(t[0], "borderLeftWidth", !0)
                }), {
                    top: e.top - n.top - ft.css(i, "marginTop", !0),
                    left: e.left - n.left - ft.css(i, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === ft.css(t, "position");) t = t.offsetParent;
                return t || Yt
            })
        }
    }), ft.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
        var i = "pageYOffset" === e;
        ft.fn[t] = function (n) {
            return Lt(this, function (t, n, o) {
                var s = K(t);
                return void 0 === o ? s ? s[e] : t[n] : void (s ? s.scrollTo(i ? s.pageXOffset : o, i ? o : s.pageYOffset) : t[n] = o)
            }, t, n, arguments.length)
        }
    }), ft.each(["top", "left"], function (t, e) {
        ft.cssHooks[e] = L(pt.pixelPosition, function (t, i) {
            if (i) return i = W(t, e), se.test(i) ? ft(t).position()[e] + "px" : i
        })
    }), ft.each({Height: "height", Width: "width"}, function (t, e) {
        ft.each({padding: "inner" + t, content: e, "": "outer" + t}, function (i, n) {
            ft.fn[n] = function (o, s) {
                var r = arguments.length && (i || "boolean" != typeof o),
                    a = i || (!0 === o || !0 === s ? "margin" : "border");
                return Lt(this, function (e, i, o) {
                    var s;
                    return ft.isWindow(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === o ? ft.css(e, i, a) : ft.style(e, i, o, a)
                }, e, r ? o : void 0, r)
            }
        })
    }), ft.fn.extend({
        bind: function (t, e, i) {
            return this.on(t, null, e, i)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, i, n) {
            return this.on(e, t, i, n)
        }, undelegate: function (t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    }), ft.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ft
    });
    var Be = t.jQuery, Ue = t.$;
    return ft.noConflict = function (e) {
        return t.$ === ft && (t.$ = Ue), e && t.jQuery === ft && (t.jQuery = Be), ft
    }, e || (t.jQuery = t.$ = ft), ft
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), function (t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"), e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var i in e) if (void 0 !== t.style[i]) return {end: e[i]};
        return !1
    }

    t.fn.emulateTransitionEnd = function (e) {
        var i = !1, n = this;
        t(this).one("bsTransitionEnd", function () {
            i = !0
        });
        var o = function () {
            i || t(n).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end, delegateType: t.support.transition.end, handle: function (e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.alert");
            o || i.data("bs.alert", o = new n(this)), "string" == typeof e && o[e].call(i)
        })
    }

    var i = '[data-dismiss="alert"]', n = function (e) {
        t(e).on("click", i, this.close)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.close = function (e) {
        function i() {
            r.detach().trigger("closed.bs.alert").remove()
        }

        var o = t(this), s = o.attr("data-target");
        s || (s = o.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t("#" === s ? [] : s);
        e && e.preventDefault(), r.length || (r = o.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function () {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
}(jQuery), function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this), o = n.data("bs.button"), s = "object" == typeof e && e;
            o || n.data("bs.button", o = new i(this, s)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }

    var i = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
    };
    i.VERSION = "3.3.7", i.DEFAULTS = {loadingText: "loading..."}, i.prototype.setState = function (e) {
        var i = "disabled", n = this.$element, o = n.is("input") ? "val" : "html", s = n.data();
        e += "Text", null == s.resetText && n.data("resetText", n[o]()), setTimeout(t.proxy(function () {
            n[o](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i).prop(i, !1))
        }, this), 0)
    }, i.prototype.toggle = function () {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var n = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
        return t.fn.button = n, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
        var n = t(i.target).closest(".btn");
        e.call(n, "toggle"), t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), n.is("input,button") ? n.trigger("focus") : n.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this), o = n.data("bs.carousel"),
                s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                r = "string" == typeof e ? e : s.slide;
            o || n.data("bs.carousel", o = new i(this, s)), "number" == typeof e ? o.to(e) : r ? o[r]() : s.interval && o.pause().cycle()
        })
    }

    var i = function (e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function (t, e) {
        var i = this.getItemIndex(e);
        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
        var n = "prev" == t ? -1 : 1, o = (i + n) % this.$items.length;
        return this.$items.eq(o)
    }, i.prototype.to = function (t) {
        var e = this, i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function () {
        if (!this.sliding) return this.slide("next")
    }, i.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev")
    }, i.prototype.slide = function (e, n) {
        var o = this.$element.find(".item.active"), s = n || this.getItemForDirection(e, o), r = this.interval,
            a = "next" == e ? "left" : "right", l = this;
        if (s.hasClass("active")) return this.sliding = !1;
        var d = s[0], c = t.Event("slide.bs.carousel", {relatedTarget: d, direction: a});
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var h = t(this.$indicators.children()[this.getItemIndex(s)]);
                h && h.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {relatedTarget: d, direction: a});
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, o.addClass(a), s.addClass(a), o.one("bsTransitionEnd", function () {
                s.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (o.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(p)), r && this.cycle(), this
        }
    };
    var n = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = n, this
    };
    var o = function (i) {
        var n, o = t(this), s = t(o.attr("data-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var r = t.extend({}, s.data(), o.data()), a = o.attr("data-slide-to");
            a && (r.interval = !1), e.call(s, r), a && s.data("bs.carousel").to(a), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), function (t) {
    "use strict";

    function e(e) {
        var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(n)
    }

    function i(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.collapse"),
                s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !o && s.toggle && /show|hide/.test(e) && (s.toggle = !1), o || i.data("bs.collapse", o = new n(this, s)), "string" == typeof e && o[e]()
        })
    }

    var n = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 350, n.DEFAULTS = {toggle: !0}, n.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height"
    }, n.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse")) && e.transitioning)) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    o && o.length && (i.call(o, "hide"), e || o.data("bs.collapse", null));
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[r](this.$element[0][l])
                }
            }
        }
    }, n.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, n.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, n.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, n) {
            var o = t(n);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, n.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var o = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (n) {
        var o = t(this);
        o.attr("data-target") || n.preventDefault();
        var s = e(o), r = s.data("bs.collapse"), a = r ? "toggle" : o.data();
        i.call(s, a)
    })
}(jQuery), function (t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var n = i && t(i);
        return n && n.length ? n : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(o).remove(), t(s).each(function () {
            var n = t(this), o = e(n), s = {relatedTarget: this};
            o.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(o[0], i.target) || (o.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))))
        }))
    }

    function n(e) {
        return this.each(function () {
            var i = t(this), n = i.data("bs.dropdown");
            n || i.data("bs.dropdown", n = new r(this)), "string" == typeof e && n[e].call(i)
        })
    }

    var o = ".dropdown-backdrop", s = '[data-toggle="dropdown"]', r = function (e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    r.VERSION = "3.3.7", r.prototype.toggle = function (n) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var s = e(o), r = s.hasClass("open");
            if (i(), !r) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var a = {relatedTarget: this};
                if (s.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, r.prototype.keydown = function (i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var n = t(this);
            if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
                var o = e(n), r = o.hasClass("open");
                if (!r && 27 != i.which || r && 27 == i.which) return 27 == i.which && o.find(s).trigger("focus"), n.trigger("click");
                var a = o.find(".dropdown-menu li:not(.disabled):visible a");
                if (a.length) {
                    var l = a.index(i.target);
                    38 == i.which && l > 0 && l--, 40 == i.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = n, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, r.prototype.toggle).on("keydown.bs.dropdown.data-api", s, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
}(jQuery), function (t) {
    "use strict";

    function e(e, n) {
        return this.each(function () {
            var o = t(this), s = o.data("bs.modal"), r = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
            s || o.data("bs.modal", s = new i(this, r)), "string" == typeof e ? s[e](n) : r.show && s.show(n)
        })
    }

    var i = function (e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function (e) {
        var n = this, o = t.Event("show.bs.modal", {relatedTarget: e});
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            n.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var o = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), o && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
            var s = t.Event("shown.bs.modal", {relatedTarget: e});
            o ? n.$dialog.one("bsTransitionEnd", function () {
                n.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(s)
        }))
    }, i.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function (e) {
        var n = this, o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function () {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : r()
        } else e && e()
    }, i.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, i.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var n = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
        return t.fn.modal = n, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
        var n = t(this), o = n.attr("href"), s = t(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            r = s.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(o) && o}, s.data(), n.data());
        n.is("a") && i.preventDefault(), s.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
                n.is(":visible") && n.trigger("focus")
            })
        }), e.call(s, r, this)
    })
}(jQuery), function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this), o = n.data("bs.tooltip"), s = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || n.data("bs.tooltip", o = new i(this, s)), "string" == typeof e && o[e]())
        })
    }

    var i = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, i.prototype.init = function (e, i, n) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), s = o.length; s--;) {
            var r = o[s];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin", l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function () {
        var e = {}, i = this.getDefaults();
        return this._options && t.each(this._options, function (t, n) {
            i[t] != n && (e[t] = n)
        }), e
    }, i.prototype.enter = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void (i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void (i.timeout = setTimeout(function () {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function () {
        for (var t in this.inState) if (this.inState[t]) return !0;
        return !1
    }, i.prototype.leave = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void (i.timeout = setTimeout(function () {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    }, i.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var o = this, s = this.tip(), r = this.getUID(this.type);
            this.setContent(), s.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && s.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i, d = l.test(a);
            d && (a = a.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(), h = s[0].offsetWidth, p = s[0].offsetHeight;
            if (d) {
                var u = a, f = this.getPosition(this.$viewport);
                a = "bottom" == a && c.bottom + p > f.bottom ? "top" : "top" == a && c.top - p < f.top ? "bottom" : "right" == a && c.right + h > f.width ? "left" : "left" == a && c.left - h < f.left ? "right" : a, s.removeClass(u).addClass(a)
            }
            var g = this.getCalculatedOffset(a, c, h, p);
            this.applyPlacement(g, a);
            var m = function () {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m()
        }
    }, i.prototype.applyPlacement = function (e, i) {
        var n = this.tip(), o = n[0].offsetWidth, s = n[0].offsetHeight, r = parseInt(n.css("margin-top"), 10),
            a = parseInt(n.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.left += a, t.offset.setOffset(n[0], t.extend({
            using: function (t) {
                n.css({top: Math.round(t.top), left: Math.round(t.left)})
            }
        }, e), 0), n.addClass("in");
        var l = n[0].offsetWidth, d = n[0].offsetHeight;
        "top" == i && d != s && (e.top = e.top + s - d);
        var c = this.getViewportAdjustedDelta(i, e, l, d);
        c.left ? e.left += c.left : e.top += c.top;
        var h = /top|bottom/.test(i), p = h ? 2 * c.left - o + l : 2 * c.top - s + d,
            u = h ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(p, n[0][u], h)
    }, i.prototype.replaceArrow = function (t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function (e) {
        function n() {
            "in" != o.hoverState && s.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
        }

        var o = this, s = t(this.$tip), r = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(r), !r.isDefaultPrevented()) return s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this
    }, i.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function () {
        return this.getTitle()
    }, i.prototype.getPosition = function (e) {
        e = e || this.$element;
        var i = e[0], n = "BODY" == i.tagName, o = i.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {width: o.right - o.left, height: o.bottom - o.top}));
        var s = window.SVGElement && i instanceof window.SVGElement, r = n ? {top: 0, left: 0} : s ? null : e.offset(),
            a = {scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()},
            l = n ? {width: t(window).width(), height: t(window).height()} : null;
        return t.extend({}, o, a, l, r)
    }, i.prototype.getCalculatedOffset = function (t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {top: e.top + e.height / 2 - n / 2, left: e.left - i} : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function (t, e, i, n) {
        var o = {top: 0, left: 0};
        if (!this.$viewport) return o;
        var s = this.options.viewport && this.options.viewport.padding || 0, r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - s - r.scroll, l = e.top + s - r.scroll + n;
            a < r.top ? o.top = r.top - a : l > r.top + r.height && (o.top = r.top + r.height - l)
        } else {
            var d = e.left - s, c = e.left + s + i;
            d < r.left ? o.left = r.left - d : c > r.right && (o.left = r.left + r.width - c)
        }
        return o
    }, i.prototype.getTitle = function () {
        var t = this.$element, e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, i.prototype.getUID = function (t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, i.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function () {
        this.enabled = !0
    }, i.prototype.disable = function () {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function (e) {
        var i = this;
        e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = n, this
    }
}(jQuery), function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this), o = n.data("bs.popover"), s = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || n.data("bs.popover", o = new i(this, s)), "string" == typeof e && o[e]())
        })
    }

    var i = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.7", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle(), i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function () {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var n = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function () {
        return t.fn.popover = n, this
    }
}(jQuery), function (t) {
    "use strict";

    function e(i, n) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function () {
            var n = t(this), o = n.data("bs.scrollspy"), s = "object" == typeof i && i;
            o || n.data("bs.scrollspy", o = new e(this, s)), "string" == typeof i && o[i]()
        })
    }

    e.VERSION = "3.3.7", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this, i = "offset", n = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this), o = e.data("target") || e.attr("href"), s = /^#./.test(o) && t(o);
            return s && s.length && s.is(":visible") && [[s[i]().top + n, o]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(),
            n = this.options.offset + i - this.$scrollElement.height(), o = this.offsets, s = this.targets,
            r = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= n) return r != (t = s[s.length - 1]) && this.activate(t);
        if (r && e < o[0]) return this.activeTarget = null, this.clear();
        for (t = o.length; t--;) r != s[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = n, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this), o = n.data("bs.tab");
            o || n.data("bs.tab", o = new i(this)), "string" == typeof e && o[e]()
        })
    }

    var i = function (e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
        var e = this.element, i = e.closest("ul:not(.dropdown-menu)"), n = e.data("target");
        if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = i.find(".active:last a"), s = t.Event("hide.bs.tab", {relatedTarget: e[0]}),
                r = t.Event("show.bs.tab", {relatedTarget: o[0]});
            if (o.trigger(s), e.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var a = t(n);
                this.activate(e.closest("li"), i), this.activate(a, a.parent(), function () {
                    o.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function (e, n, o) {
        function s() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }

        var r = n.find("> .active"),
            a = o && t.support.transition && (r.length && r.hasClass("fade") || !!n.find("> .fade").length);
        r.length && a ? r.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), r.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
        return t.fn.tab = n, this
    };
    var o = function (i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this), o = n.data("bs.affix"), s = "object" == typeof e && e;
            o || n.data("bs.affix", o = new i(this, s)), "string" == typeof e && o[e]()
        })
    }

    var i = function (e, n) {
        this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function (t, e, i, n) {
        var o = this.$target.scrollTop(), s = this.$element.offset(), r = this.$target.height();
        if (null != i && "top" == this.affixed) return o < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= s.top) && "bottom" : !(o + r <= t - n) && "bottom";
        var a = null == this.affixed, l = a ? o : s.top, d = a ? r : e;
        return null != i && o <= i ? "top" : null != n && l + d >= t - n && "bottom"
    }, i.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(), e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(), n = this.options.offset, o = n.top, s = n.bottom,
                r = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof n && (s = o = n), "function" == typeof o && (o = n.top(this.$element)), "function" == typeof s && (s = n.bottom(this.$element));
            var a = this.getState(r, e, o, s);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""), d = t.Event(l + ".bs.affix");
                if (this.$element.trigger(d), d.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({top: r - e - s})
        }
    };
    var n = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
        return t.fn.affix = n, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var i = t(this), n = i.data();
            n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
        })
    })
}(jQuery), function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
    "use strict";
    var e = window.Slick || {};
    (e = function () {
        var e = 0;
        return function (i, n) {
            var o, s = this;
            s.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(i),
                appendDots: t(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, i) {
                    return t('<button type="button" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, s.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, t.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = t(i), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = t(i).data("slick") || {}, s.options = t.extend({}, s.defaults, n, o), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = t.proxy(s.autoPlay, s), s.autoPlayClear = t.proxy(s.autoPlayClear, s), s.autoPlayIterator = t.proxy(s.autoPlayIterator, s), s.changeSlide = t.proxy(s.changeSlide, s), s.clickHandler = t.proxy(s.clickHandler, s), s.selectHandler = t.proxy(s.selectHandler, s), s.setPosition = t.proxy(s.setPosition, s), s.swipeHandler = t.proxy(s.swipeHandler, s), s.dragHandler = t.proxy(s.dragHandler, s), s.keyHandler = t.proxy(s.keyHandler, s), s.instanceUid = e++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
        }
    }()).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
    }, e.prototype.addSlide = e.prototype.slickAdd = function (e, i, n) {
        var o = this;
        if ("boolean" == typeof i) n = i, i = null; else if (i < 0 || i >= o.slideCount) return !1;
        o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : n ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : !0 === n ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (e, i) {
            t(i).attr("data-slick-index", e)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, e.prototype.animateHeight = function () {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({height: e}, t.options.speed)
        }
    }, e.prototype.animateSlide = function (e, i) {
        var n = {}, o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (e = -e), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({left: e}, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({top: e}, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), t({animStart: o.currentLeft}).animate({animStart: e}, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function (t) {
                t = Math.ceil(t), !1 === o.options.vertical ? (n[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(n))
            },
            complete: function () {
                i && i.call()
            }
        })) : (o.applyTransition(), e = Math.ceil(e), !1 === o.options.vertical ? n[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function () {
            o.disableTransition(), i.call()
        }, o.options.speed))
    }, e.prototype.getNavTarget = function () {
        var e = this, i = e.options.asNavFor;
        return i && null !== i && (i = t(i).not(e.$slider)), i
    }, e.prototype.asNavFor = function (e) {
        var i = this.getNavTarget();
        null !== i && "object" == typeof i && i.each(function () {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function (t) {
        var e = this, i = {};
        !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.autoPlay = function () {
        var t = this;
        t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function () {
        var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function () {
        var t = this, e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
    }, e.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function () {
        var e, i, n = this;
        if (!0 === n.options.dots) {
            for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
            n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
        }
    }, e.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, i) {
            t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function () {
        var t, e, i, n, o, s, r, a = this;
        if (n = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
            for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), t = 0; t < o; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var d = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var c = t * r + (e * a.options.slidesPerRow + i);
                        s.get(c) && d.appendChild(s.get(c))
                    }
                    l.appendChild(d)
                }
                n.appendChild(l)
            }
            a.$slider.empty().append(n), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function (e, i) {
        var n, o, s, r = this, a = !1, l = r.$slider.width(), d = window.innerWidth || t(window).width();
        if ("window" === r.respondTo ? s = d : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(d, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            o = null;
            for (n in r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[n] && (o = r.breakpoints[n]) : s > r.breakpoints[n] && (o = r.breakpoints[n]));
            null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || i) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), a = o), e || !1 === a || r.$slider.trigger("breakpoint", [r, a])
        }
    }, e.prototype.changeSlide = function (e, i) {
        var n, o, s, r = this, a = t(e.currentTarget);
        switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), s = r.slideCount % r.options.slidesToScroll != 0, n = s ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case"previous":
                o = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
                break;
            case"next":
                o = 0 === n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
                break;
            case"index":
                var l = 0 === e.data.index ? 0 : e.data.index || a.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(l), !1, i), a.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function (t) {
        var e, i;
        if (e = this.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1]; else for (var n in e) {
            if (t < e[n]) {
                t = i;
                break
            }
            i = e[n]
        }
        return t
    }, e.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function () {
        var t, e = this;
        e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(t))
    }, e.prototype.clickHandler = function (t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
    }, e.prototype.destroy = function (e) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            t(this).attr("style", t(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
    }, e.prototype.disableTransition = function (t) {
        var e = this, i = {};
        i[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.fadeSlide = function (t, e) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(t).css({zIndex: i.options.zIndex}), i.$slides.eq(t).animate({opacity: 1}, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), e && setTimeout(function () {
            i.disableTransition(t), e.call()
        }, i.options.speed))
    }, e.prototype.fadeSlideOut = function (t) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function () {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (i) {
            i.stopImmediatePropagation();
            var n = t(this);
            setTimeout(function () {
                e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, e.prototype.getDotCount = function () {
        var t = this, e = 0, i = 0, n = 0;
        if (!0 === t.options.infinite) if (t.slideCount <= t.options.slidesToShow) ++n; else for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else if (!0 === t.options.centerMode) n = t.slideCount; else if (t.options.asNavFor) for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return n - 1
    }, e.prototype.getLeft = function (t) {
        var e, i, n, o, s = this, r = 0;
        return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, o = -1, !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? o = -1.5 : 1 === s.options.slidesToShow && (o = -2)), r = i * s.options.slidesToShow * o), s.slideCount % s.options.slidesToScroll != 0 && t + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (t > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (t - s.slideCount)) * s.slideWidth * -1, r = (s.options.slidesToShow - (t - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, r = s.slideCount % s.options.slidesToScroll * i * -1))) : t + s.options.slidesToShow > s.slideCount && (s.slideOffset = (t + s.options.slidesToShow - s.slideCount) * s.slideWidth, r = (t + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, r = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), e = !1 === s.options.vertical ? t * s.slideWidth * -1 + s.slideOffset : t * i * -1 + r, !0 === s.options.variableWidth && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow), e = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === s.options.centerMode && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow + 1), e = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (s.$list.width() - n.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function (t) {
        return this.options[t]
    }, e.prototype.getNavigableIndexes = function () {
        var t, e = this, i = 0, n = 0, o = [];
        for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); i < t;) o.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return o
    }, e.prototype.getSlick = function () {
        return this
    }, e.prototype.getSlideCount = function () {
        var e, i, n = this;
        return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function (o, s) {
            if (s.offsetLeft - i + t(s).outerWidth() / 2 > -1 * n.swipeLeft) return e = s, !1
        }), Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
        this.changeSlide({data: {message: "index", index: parseInt(t)}}, e)
    }, e.prototype.init = function (e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, e.prototype.initADA = function () {
        var e = this, i = Math.ceil(e.slideCount / e.options.slidesToShow),
            n = e.getNavigableIndexes().filter(function (t) {
                return t >= 0 && t < e.slideCount
            });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({tabindex: "-1"}), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (i) {
            var o = n.indexOf(i);
            t(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + i,
                tabindex: -1
            }), -1 !== o && t(this).attr({"aria-describedby": "slick-slide-control" + e.instanceUid + o})
        }), e.$dots.attr("role", "tablist").find("li").each(function (o) {
            var s = n[o];
            t(this).attr({role: "presentation"}), t(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + o,
                "aria-controls": "slick-slide" + e.instanceUid + s,
                "aria-label": o + 1 + " of " + i,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end());
        for (var o = e.currentSlide, s = o + e.options.slidesToShow; o < s; o++) e.$slides.eq(o).attr("tabindex", 0);
        e.activateADA()
    }, e.prototype.initArrowEvents = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
    }, e.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots && (t("li", e.$dots).on("click.slick", {message: "index"}, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {action: "start"}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {action: "move"}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {action: "end"}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(e.setPosition)
    }, e.prototype.initUI = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }, e.prototype.keyHandler = function (t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({data: {message: !0 === e.options.rtl ? "next" : "previous"}}) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({data: {message: !0 === e.options.rtl ? "previous" : "next"}}))
    }, e.prototype.lazyLoad = function () {
        function e(e) {
            t("img[data-lazy]", e).each(function () {
                var e = t(this), i = t(this).attr("data-lazy"), n = t(this).attr("data-srcset"),
                    o = t(this).attr("data-sizes") || s.$slider.attr("data-sizes"), r = document.createElement("img");
                r.onload = function () {
                    e.animate({opacity: 0}, 100, function () {
                        n && (e.attr("srcset", n), o && e.attr("sizes", o)), e.attr("src", i).animate({opacity: 1}, 200, function () {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), s.$slider.trigger("lazyLoaded", [s, e, i])
                    })
                }, r.onerror = function () {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, i])
                }, r.src = i
            })
        }

        var i, n, o, s = this;
        if (!0 === s.options.centerMode ? !0 === s.options.infinite ? o = (n = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (n = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), o = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (n = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, o = Math.ceil(n + s.options.slidesToShow), !0 === s.options.fade && (n > 0 && n--, o <= s.slideCount && o++)), i = s.$slider.find(".slick-slide").slice(n, o), "anticipated" === s.options.lazyLoad) for (var r = n - 1, a = o, l = s.$slider.find(".slick-slide"), d = 0; d < s.options.slidesToScroll; d++) r < 0 && (r = s.slideCount - 1), i = (i = i.add(l.eq(r))).add(l.eq(a)), r--, a++;
        e(i), s.slideCount <= s.options.slidesToShow ? e(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? e(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && e(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
    }, e.prototype.loadSlider = function () {
        var t = this;
        t.setPosition(), t.$slideTrack.css({opacity: 1}), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function () {
        this.changeSlide({data: {message: "next"}})
    }, e.prototype.orientationChange = function () {
        var t = this;
        t.checkResponsive(), t.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function () {
        var t = this;
        t.autoPlayClear(), t.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function () {
        var t = this;
        t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
    }, e.prototype.postSlide = function (e) {
        var i = this;
        i.unslicked || (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
    }, e.prototype.prev = e.prototype.slickPrev = function () {
        this.changeSlide({data: {message: "previous"}})
    }, e.prototype.preventDefault = function (t) {
        t.preventDefault()
    }, e.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var i, n, o, s, r, a = this, l = t("img[data-lazy]", a.$slider);
        l.length ? (i = l.first(), n = i.attr("data-lazy"), o = i.attr("data-srcset"), s = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
            o && (i.attr("srcset", o), s && i.attr("sizes", s)), i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, n]), a.progressiveLazyLoad()
        }, r.onerror = function () {
            e < 3 ? setTimeout(function () {
                a.progressiveLazyLoad(e + 1)
            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, n]), a.progressiveLazyLoad())
        }, r.src = n) : a.$slider.trigger("allImagesLoaded", [a])
    }, e.prototype.refresh = function (e) {
        var i, n, o = this;
        n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), t.extend(o, o.initials, {currentSlide: i}), o.init(), e || o.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function () {
        var e, i, n, o = this, s = o.options.responsive || null;
        if ("array" === t.type(s) && s.length) {
            o.respondTo = o.options.respondTo || "window";
            for (e in s) if (n = o.breakpoints.length - 1, s.hasOwnProperty(e)) {
                for (i = s[e].breakpoint; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                o.breakpoints.push(i), o.breakpointSettings[i] = s[e].settings
            }
            o.breakpoints.sort(function (t, e) {
                return o.options.mobileFirst ? t - e : e - t
            })
        }
    }, e.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function () {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
            e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, i) {
        var n = this;
        if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : n.slideCount - 1 : !0 === e ? --t : t, n.slideCount < 1 || t < 0 || t > n.slideCount - 1) return !1;
        n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
    }, e.prototype.setCSS = function (t) {
        var e, i, n = this, o = {};
        !0 === n.options.rtl && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", o[n.positionProp] = t, !1 === n.transformsEnabled ? n.$slideTrack.css(o) : (o = {}, !1 === n.cssTransitions ? (o[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(o)))
    }, e.prototype.setDimensions = function () {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({padding: "0px " + t.options.centerPadding}) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({padding: t.options.centerPadding + " 0px"})), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }, e.prototype.setFade = function () {
        var e, i = this;
        i.$slides.each(function (n, o) {
            e = i.slideWidth * n * -1, !0 === i.options.rtl ? t(o).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : t(o).css({position: "relative", left: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0})
        }), i.$slides.eq(i.currentSlide).css({zIndex: i.options.zIndex - 1, opacity: 1})
    }, e.prototype.setHeight = function () {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function () {
        var e, i, n, o, s, r = this, a = !1;
        if ("object" === t.type(arguments[0]) ? (n = arguments[0], a = arguments[1], s = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) r.options[n] = o; else if ("multiple" === s) t.each(n, function (t, e) {
            r.options[t] = e
        }); else if ("responsive" === s) for (i in o) if ("array" !== t.type(r.options.responsive)) r.options.responsive = [o[i]]; else {
            for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === o[i].breakpoint && r.options.responsive.splice(e, 1), e--;
            r.options.responsive.push(o[i])
        }
        a && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function () {
        var t = this;
        t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
    }, e.prototype.setProps = function () {
        var t = this, e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
    }, e.prototype.setSlideClasses = function (t) {
        var e, i, n, o, s = this;
        if (i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(t).addClass("slick-current"), !0 === s.options.centerMode) {
            var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (t >= e && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e + r, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + t, i.slice(n - e + 1 + r, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")
        } else t >= 0 && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = !0 === s.options.infinite ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
    }, e.prototype.setupInfinite = function () {
        var e, i, n, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, o.slideCount > o.options.slidesToShow)) {
            for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - n; e -= 1) i = e - 1, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < n + o.slideCount; e += 1) i = e, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                t(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function (t) {
        var e = this;
        t || e.autoPlay(), e.interrupted = t
    }, e.prototype.selectHandler = function (e) {
        var i = this, n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
            o = parseInt(n.attr("data-slick-index"));
        o || (o = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(o, !1, !0) : i.slideHandler(o)
    }, e.prototype.slideHandler = function (t, e, i) {
        var n, o, s, r, a, l = null, d = this;
        if (e = e || !1, !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === t)) if (!1 === e && d.asNavFor(t), n = t, l = d.getLeft(n), r = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (t < 0 || t > d.getDotCount() * d.options.slidesToScroll)) !1 === d.options.fade && (n = d.currentSlide, !0 !== i ? d.animateSlide(r, function () {
            d.postSlide(n)
        }) : d.postSlide(n)); else if (!1 === d.options.infinite && !0 === d.options.centerMode && (t < 0 || t > d.slideCount - d.options.slidesToScroll)) !1 === d.options.fade && (n = d.currentSlide, !0 !== i ? d.animateSlide(r, function () {
            d.postSlide(n)
        }) : d.postSlide(n)); else {
            if (d.options.autoplay && clearInterval(d.autoPlayTimer), o = n < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + n : n >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : n - d.slideCount : n, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, o]), s = d.currentSlide, d.currentSlide = o, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (a = (a = d.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(d.currentSlide), d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== i ? (d.fadeSlideOut(s), d.fadeSlide(o, function () {
                d.postSlide(o)
            })) : d.postSlide(o), void d.animateHeight();
            !0 !== i ? d.animateSlide(l, function () {
                d.postSlide(o)
            }) : d.postSlide(o)
        }
    }, e.prototype.startLoad = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function () {
        var t, e, i, n, o = this;
        return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(e, t), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? !1 === o.options.rtl ? "left" : "right" : n <= 360 && n >= 315 ? !1 === o.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function (t) {
        var e, i, n = this;
        if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1, !1;
        if (n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
        if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
                case"left":
                case"down":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                    break;
                case"right":
                case"up":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
            }
            "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, e.prototype.swipeHandler = function (t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
            case"start":
                e.swipeStart(t);
                break;
            case"move":
                e.swipeMove(t);
                break;
            case"end":
                e.swipeEnd(t)
        }
    }, e.prototype.swipeMove = function (t) {
        var e, i, n, o, s, r, a = this;
        return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), i = a.swipeDirection(), void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, t.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + n * o : a.swipeLeft = e + n * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
    }, e.prototype.swipeStart = function (t) {
        var e, i = this;
        if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
        void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, i.dragging = !0
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
        var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
    }, e.prototype.unload = function () {
        var e = this;
        t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function (t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]), e.destroy()
    }, e.prototype.updateArrows = function () {
        var t = this;
        Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function () {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function () {
        var t = this;
        t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
    }, t.fn.slick = function () {
        var t, i, n = this, o = arguments[0], s = Array.prototype.slice.call(arguments, 1), r = n.length;
        for (t = 0; t < r; t++) if ("object" == typeof o || void 0 === o ? n[t].slick = new e(n[t], o) : i = n[t].slick[o].apply(n[t].slick, s), void 0 !== i) return i;
        return n
    }
}), function (t, e, i, n) {
    function o(e, i) {
        this.settings = null, this.options = t.extend({}, o.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {start: null, current: null},
            direction: null
        }, this._states = {
            current: {},
            tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}
        }, t.each(["onResize", "onThrottledResize"], t.proxy(function (e, i) {
            this._handlers[i] = t.proxy(this[i], this)
        }, this)), t.each(o.Plugins, t.proxy(function (t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(o.Workers, t.proxy(function (e, i) {
            this._pipe.push({filter: i.filter, run: t.proxy(i.run, this)})
        }, this)), this.setup(), this.initialize()
    }

    o.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, o.Width = {Default: "default", Inner: "inner", Outer: "outer"}, o.Type = {
        Event: "event",
        State: "state"
    }, o.Plugins = {}, o.Workers = [{
        filter: ["width", "settings"], run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"], run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = this.settings.margin || "", i = !this.settings.autoWidth, n = this.settings.rtl,
                o = {width: "auto", "margin-left": n ? e : "", "margin-right": n ? "" : e};
            !i && this.$stage.children().css(o), t.css = o
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, i = null,
                n = this._items.length, o = !this.settings.autoWidth, s = [];
            for (t.items = {
                merge: !1,
                width: e
            }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, s[n] = o ? e * i : this._items[n].width();
            this._widths = s
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var e = [], i = this._items, n = this.settings, o = Math.max(2 * n.items, 4),
                s = 2 * Math.ceil(i.length / 2), r = n.loop && i.length ? n.rewind ? o : Math.max(o, s) : 0, a = "",
                l = "";
            for (r /= 2; r > 0;) e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l, r -= 1;
            this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, o = 0, s = []; ++i < e;) n = s[i - 1] || 0, o = this._widths[this.relative(i)] + this.settings.margin, s.push(n + o * t);
            this._coordinates = s
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var t = this.settings.stagePadding, e = this._coordinates, i = {
                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                "padding-left": t || "",
                "padding-right": t || ""
            };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = this._coordinates.length, i = !this.settings.autoWidth, n = this.$stage.children();
            if (i && t.items.merge) for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css); else i && (t.css.width = t.items.width, n.css(t.css))
        }
    }, {
        filter: ["items"], run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"], run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"], run: function () {
            var t, e, i, n, o = this.settings.rtl ? 1 : -1, s = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + s, a = r + this.width() * o, l = [];
            for (i = 0, n = this._coordinates.length; i < n; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + s * o, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], o.prototype.initializeStage = function () {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", {class: this.settings.stageClass}).wrap(t("<div/>", {class: this.settings.stageOuterClass})), this.$element.append(this.$stage.parent()))
    }, o.prototype.initializeItems = function () {
        var e = this.$element.find(".owl-item");
        if (e.length) return this._items = e.get().map(function (e) {
            return t(e)
        }), this._mergers = this._items.map(function () {
            return 1
        }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }, o.prototype.initialize = function () {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var t, e, i;
            t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t)
        }
        this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, o.prototype.isVisible = function () {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }, o.prototype.setup = function () {
        var e = this.viewport(), i = this.options.responsive, n = -1, o = null;
        i ? (t.each(i, function (t) {
            t <= e && t > n && (n = Number(t))
        }), o = t.extend({}, this.options, i[n]), "function" == typeof o.stagePadding && (o.stagePadding = o.stagePadding()), delete o.responsive, o.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : o = t.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: o
            }
        }), this._breakpoint = n, this.settings = o, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, o.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, o.prototype.prepare = function (e) {
        var i = this.trigger("prepare", {content: e});
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {content: i.data}), i.data
    }, o.prototype.update = function () {
        for (var e = 0, i = this._pipe.length, n = t.proxy(function (t) {
            return this[t]
        }, this._invalidated), o = {}; e < i;) (this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(o), e++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, o.prototype.width = function (t) {
        switch (t = t || o.Width.Default) {
            case o.Width.Inner:
            case o.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, o.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, o.prototype.onThrottledResize = function () {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, o.prototype.onResize = function () {
        return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, o.prototype.registerEventHandlers = function () {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }, o.prototype.onDragStart = function (e) {
        var n = null;
        3 !== e.which && (t.support.transform ? (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), n = {
            x: n[16 === n.length ? 12 : 4],
            y: n[16 === n.length ? 13 : 5]
        }) : (n = this.$stage.position(), n = {
            x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
            y: n.top
        }), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function (e) {
            var n = this.difference(this._drag.pointer, this.pointer(e));
            t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, o.prototype.onDragMove = function (t) {
        var e = null, i = null, n = null, o = this.difference(this._drag.pointer, this.pointer(t)),
            s = this.difference(this._drag.stage.start, o);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, s.x = ((s.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * o.x / 5 : 0, s.x = Math.max(Math.min(s.x, e + n), i + n)), this._drag.stage.current = s, this.animate(s.x))
    }, o.prototype.onDragEnd = function (e) {
        var n = this.difference(this._drag.pointer, this.pointer(e)), o = this._drag.stage.current,
            s = n.x > 0 ^ this.settings.rtl ? "left" : "right";
        t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(o.x, 0 !== n.x ? s : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = s, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, o.prototype.closest = function (e, i) {
        var o = -1, s = this.width(), r = this.coordinates();
        return this.settings.freeDrag || t.each(r, t.proxy(function (t, a) {
            return "left" === i && e > a - 30 && e < a + 30 ? o = t : "right" === i && e > a - s - 30 && e < a - s + 30 ? o = t + 1 : this.op(e, "<", a) && this.op(e, ">", r[t + 1] !== n ? r[t + 1] : a - s) && (o = "left" === i ? t + 1 : t), -1 === o
        }, this)), this.settings.loop || (this.op(e, ">", r[this.minimum()]) ? o = e = this.minimum() : this.op(e, "<", r[this.maximum()]) && (o = e = this.maximum())), o
    }, o.prototype.animate = function (e) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : i ? this.$stage.animate({left: e + "px"}, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: e + "px"})
    }, o.prototype.is = function (t) {
        return this._states.current[t] && this._states.current[t] > 0
    }, o.prototype.current = function (t) {
        if (t === n) return this._current;
        if (0 === this._items.length) return n;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {property: {name: "position", value: t}});
            e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, o.prototype.invalidate = function (e) {
        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function (t, e) {
            return e
        })
    }, o.prototype.reset = function (t) {
        (t = this.normalize(t)) !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, o.prototype.normalize = function (t, e) {
        var i = this._items.length, o = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = n : (t < 0 || t >= i + o) && (t = ((t - o / 2) % i + i) % i + o / 2), t
    }, o.prototype.relative = function (t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, o.prototype.maximum = function (t) {
        var e, i, n, o = this.settings, s = this._coordinates.length;
        if (o.loop) s = this._clones.length / 2 + this._items.length - 1; else if (o.autoWidth || o.merge) {
            if (e = this._items.length) for (i = this._items[--e].width(), n = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > n);) ;
            s = e + 1
        } else s = o.center ? this._items.length - 1 : this._items.length - o.items;
        return t && (s -= this._clones.length / 2), Math.max(s, 0)
    }, o.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2
    }, o.prototype.items = function (t) {
        return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, o.prototype.mergers = function (t) {
        return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, o.prototype.clones = function (e) {
        var i = this._clones.length / 2, o = i + this._items.length, s = function (t) {
            return t % 2 == 0 ? o + t / 2 : i - (t + 1) / 2
        };
        return e === n ? t.map(this._clones, function (t, e) {
            return s(e)
        }) : t.map(this._clones, function (t, i) {
            return t === e ? s(i) : null
        })
    }, o.prototype.speed = function (t) {
        return t !== n && (this._speed = t), this._speed
    }, o.prototype.coordinates = function (e) {
        var i, o = 1, s = e - 1;
        return e === n ? t.map(this._coordinates, t.proxy(function (t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (o = -1, s = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[s] || 0)) / 2 * o) : i = this._coordinates[s] || 0, i = Math.ceil(i))
    }, o.prototype.duration = function (t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, o.prototype.to = function (t, e) {
        var i = this.current(), n = null, o = t - this.relative(i), s = (o > 0) - (o < 0), r = this._items.length,
            a = this.minimum(), l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(o) > r / 2 && (o += -1 * s * r), t = i + o, (n = ((t - a) % r + r) % r + a) !== t && n - o <= l && n - o > 0 && (i = n - o, t = n, this.reset(i))) : this.settings.rewind ? (l += 1, t = (t % l + l) % l) : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.isVisible() && this.update()
    }, o.prototype.next = function (t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, o.prototype.prev = function (t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, o.prototype.onTransitionEnd = function (t) {
        if (t !== n && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, o.prototype.viewport = function () {
        var n;
        return this.options.responsiveBaseElement !== e ? n = t(this.options.responsiveBaseElement).width() : e.innerWidth ? n = e.innerWidth : i.documentElement && i.documentElement.clientWidth ? n = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), n
    }, o.prototype.replace = function (e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
            return 1 === this.nodeType
        }).each(t.proxy(function (t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, o.prototype.add = function (e, i) {
        var o = this.relative(this._current);
        i = i === n ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
            content: e,
            position: i
        }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[o] && this.reset(this._items[o].index()), this.invalidate("items"), this.trigger("added", {
            content: e,
            position: i
        })
    }, o.prototype.remove = function (t) {
        (t = this.normalize(t, !0)) !== n && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, o.prototype.preloadAutoWidthImages = function (e) {
        e.each(t.proxy(function (e, i) {
            this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function (t) {
                i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }, this))
    }, o.prototype.destroy = function () {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize));
        for (var n in this._plugins) this._plugins[n].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, o.prototype.op = function (t, e, i) {
        var n = this.settings.rtl;
        switch (e) {
            case"<":
                return n ? t > i : t < i;
            case">":
                return n ? t < i : t > i;
            case">=":
                return n ? t <= i : t >= i;
            case"<=":
                return n ? t >= i : t <= i
        }
    }, o.prototype.on = function (t, e, i, n) {
        t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
    }, o.prototype.off = function (t, e, i, n) {
        t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
    }, o.prototype.trigger = function (e, i, n, s, r) {
        var a = {item: {count: this._items.length, index: this.current()}},
            l = t.camelCase(t.grep(["on", e, n], function (t) {
                return t
            }).join("-").toLowerCase()),
            d = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({relatedTarget: this}, a, i));
        return this._supress[e] || (t.each(this._plugins, function (t, e) {
            e.onTrigger && e.onTrigger(d)
        }), this.register({
            type: o.Type.Event,
            name: e
        }), this.$element.trigger(d), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, d)), d
    }, o.prototype.enter = function (e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
            this._states.current[e] === n && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
    }, o.prototype.leave = function (e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
            this._states.current[e]--
        }, this))
    }, o.prototype.register = function (e) {
        if (e.type === o.Type.Event) {
            if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                var i = t.event.special[e.name]._default;
                t.event.special[e.name]._default = function (t) {
                    return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                }, t.event.special[e.name].owl = !0
            }
        } else e.type === o.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function (i, n) {
            return t.inArray(i, this._states.tags[e.name]) === n
        }, this)))
    }, o.prototype.suppress = function (e) {
        t.each(e, t.proxy(function (t, e) {
            this._supress[e] = !0
        }, this))
    }, o.prototype.release = function (e) {
        t.each(e, t.proxy(function (t, e) {
            delete this._supress[e]
        }, this))
    }, o.prototype.pointer = function (t) {
        var i = {x: null, y: null};
        return t = t.originalEvent || t || e.event, t = t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, t.pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
    }, o.prototype.isNumeric = function (t) {
        return !isNaN(parseFloat(t))
    }, o.prototype.difference = function (t, e) {
        return {x: t.x - e.x, y: t.y - e.y}
    }, t.fn.owlCarousel = function (e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var n = t(this), s = n.data("owl.carousel");
            s || (s = new o(this, "object" == typeof e && e), n.data("owl.carousel", s), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (e, i) {
                s.register({
                    type: o.Type.Event,
                    name: i
                }), s.$element.on(i + ".owl.carousel.core", t.proxy(function (t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([i]), s[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                }, s))
            })), "string" == typeof e && "_" !== e.charAt(0) && s[e].apply(s, i)
        })
    }, t.fn.owlCarousel.Constructor = o
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    var o = function (e) {
        this._core = e, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    o.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, o.prototype.watch = function () {
        this._interval || (this._visible = this._core.isVisible(), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, o.prototype.refresh = function () {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, o.prototype.destroy = function () {
        var t, i;
        e.clearInterval(this._interval);
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    var o = function (e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function (e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
                    var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items,
                        o = i.center && -1 * n || 0,
                        s = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + o,
                        r = this._core.clones().length, a = t.proxy(function (t, e) {
                            this.load(e)
                        }, this);
                    for (i.lazyLoadEager > 0 && (n += i.lazyLoadEager, i.loop && (s -= i.lazyLoadEager, n++)); o++ < n;) this.load(r / 2 + this._core.relative(s)), r && t.each(this._core.clones(this._core.relative(s)), a), s++
                }
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    o.Defaults = {lazyLoad: !1, lazyLoadEager: 0}, o.prototype.load = function (i) {
        var n = this._core.$stage.children().eq(i), o = n && n.find(".owl-lazy");
        !o || t.inArray(n.get(0), this._loaded) > -1 || (o.each(t.proxy(function (i, n) {
            var o, s = t(n),
                r = e.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src") || s.attr("data-srcset");
            this._core.trigger("load", {
                element: s,
                url: r
            }, "lazy"), s.is("img") ? s.one("load.owl.lazy", t.proxy(function () {
                s.css("opacity", 1), this._core.trigger("loaded", {element: s, url: r}, "lazy")
            }, this)).attr("src", r) : s.is("source") ? s.one("load.owl.lazy", t.proxy(function () {
                this._core.trigger("loaded", {element: s, url: r}, "lazy")
            }, this)).attr("srcset", r) : (o = new Image, o.onload = t.proxy(function () {
                s.css({"background-image": 'url("' + r + '")', opacity: "1"}), this._core.trigger("loaded", {
                    element: s,
                    url: r
                }, "lazy")
            }, this), o.src = r)
        }, this)), this._loaded.push(n.get(0)))
    }, o.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = o
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    var o = function (i) {
        this._core = i, this._previousHeight = null, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this), "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
            }, this), "loaded.owl.lazy": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var n = this;
        t(e).on("load", function () {
            n._core.settings.autoHeight && n.update()
        }), t(e).resize(function () {
            n._core.settings.autoHeight && (null != n._intervalId && clearTimeout(n._intervalId), n._intervalId = setTimeout(function () {
                n.update()
            }, 250))
        })
    };
    o.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, o.prototype.update = function () {
        var e = this._core._current, i = e + this._core.settings.items, n = this._core.settings.lazyLoad,
            o = this._core.$stage.children().toArray().slice(e, i), s = [], r = 0;
        t.each(o, function (e, i) {
            s.push(t(i).height())
        }), r = Math.max.apply(null, s), r <= 1 && n && this._previousHeight && (r = this._previousHeight), this._previousHeight = r, this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass)
    }, o.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = o
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    var o = function (e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
            }, this), "resize.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this), "refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this), "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this), "prepared.owl.carousel": t.proxy(function (e) {
                if (e.namespace) {
                    var i = t(e.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                }
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function (t) {
            this.play(t)
        }, this))
    };
    o.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, o.prototype.fetch = function (t, e) {
        var i = function () {
                return t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }(), n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            o = t.attr("data-width") || this._core.settings.videoWidth,
            s = t.attr("data-height") || this._core.settings.videoHeight, r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (n = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), n[3].indexOf("youtu") > -1) i = "youtube"; else if (n[3].indexOf("vimeo") > -1) i = "vimeo"; else {
            if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        n = n[6], this._videos[r] = {
            type: i,
            id: n,
            width: o,
            height: s
        }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, o.prototype.thumbnail = function (e, i) {
        var n, o, s, r = i.width && i.height ? "width:" + i.width + "px;height:" + i.height + "px;" : "",
            a = e.find("img"), l = "src", d = "", c = this._core.settings, h = function (i) {
                o = '<div class="owl-video-play-icon"></div>', n = c.lazyLoad ? t("<div/>", {
                    class: "owl-video-tn " + d,
                    srcType: i
                }) : t("<div/>", {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + i + ")"
                }), e.after(n), e.after(o)
            };
        if (e.wrap(t("<div/>", {
            class: "owl-video-wrapper",
            style: r
        })), this._core.settings.lazyLoad && (l = "data-src", d = "owl-lazy"), a.length) return h(a.attr(l)), a.remove(), !1;
        "youtube" === i.type ? (s = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", h(s)) : "vimeo" === i.type ? t.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                s = t[0].thumbnail_large, h(s)
            }
        }) : "vzaar" === i.type && t.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                s = t.framegrab_url, h(s)
            }
        })
    }, o.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, o.prototype.play = function (e) {
        var i, n = t(e.target), o = n.closest("." + this._core.settings.itemClass),
            s = this._videos[o.attr("data-video")], r = s.width || "100%", a = s.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), o = this._core.items(this._core.relative(o.index())), this._core.reset(o.index()), i = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'), i.attr("height", a), i.attr("width", r), "youtube" === s.type ? i.attr("src", "//www.youtube.com/embed/" + s.id + "?autoplay=1&rel=0&v=" + s.id) : "vimeo" === s.type ? i.attr("src", "//player.vimeo.com/video/" + s.id + "?autoplay=1") : "vzaar" === s.type && i.attr("src", "//view.vzaar.com/" + s.id + "/player?autoplay=true"), t(i).wrap('<div class="owl-video-frame" />').insertAfter(o.find(".owl-video")), this._playing = o.addClass("owl-video-playing"))
    }, o.prototype.isInFullScreen = function () {
        var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame")
    }, o.prototype.destroy = function () {
        var t, e;
        this._core.$element.off("click.owl.video");
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = o
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    var o = function (e) {
        this.core = e, this.core.options = t.extend({}, o.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
            "change.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this), "translate.owl.carousel": t.proxy(function (t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    o.Defaults = {animateOut: !1, animateIn: !1}, o.prototype.swap = function () {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this), n = this.core.$stage.children().eq(this.previous),
                o = this.core.$stage.children().eq(this.next), s = this.core.settings.animateIn,
                r = this.core.settings.animateOut;
            this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(t.support.animation.end, i).css({left: e + "px"}).addClass("animated owl-animated-out").addClass(r)), s && o.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(s))
        }
    }, o.prototype.clear = function (e) {
        t(e.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, o.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = o
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    var o = function (e) {
        this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
            }, this), "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this), "play.owl.autoplay": t.proxy(function (t, e, i) {
                t.namespace && this.play(e, i)
            }, this), "stop.owl.autoplay": t.proxy(function (t) {
                t.namespace && this.stop()
            }, this), "mouseover.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "mouseleave.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this), "touchstart.owl.core": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "touchend.owl.core": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, o.Defaults, this._core.options)
    };
    o.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, o.prototype._next = function (n) {
        this._call = e.setTimeout(t.proxy(this._next, this, n), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || i.hidden || this._core.next(n || this._core.settings.autoplaySpeed)
    }, o.prototype.read = function () {
        return (new Date).getTime() - this._time
    }, o.prototype.play = function (i, n) {
        var o;
        this._core.is("rotating") || this._core.enter("rotating"), i = i || this._core.settings.autoplayTimeout, o = Math.min(this._time % (this._timeout || i), i), this._paused ? (this._time = this.read(), this._paused = !1) : e.clearTimeout(this._call), this._time += this.read() % i - o, this._timeout = i, this._call = e.setTimeout(t.proxy(this._next, this, n), i - o)
    }, o.prototype.stop = function () {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, e.clearTimeout(this._call), this._core.leave("rotating"))
    }, o.prototype.pause = function () {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, e.clearTimeout(this._call))
    }, o.prototype.destroy = function () {
        var t, e;
        this.stop();
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = o
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    "use strict";
    var o = function (e) {
        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function (e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this), "added.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this), "remove.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this), "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this), "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this), "refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    o.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, o.prototype.initialize = function () {
        var e, i = this._core.settings;
        this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function (t) {
            this.prev(i.navSpeed)
        }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function (t) {
            this.next(i.navSpeed)
        }, this)), i.dotsData || (this._templates = [t('<button role="button">').addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy(function (e) {
            var n = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(), this.to(n, i.dotsSpeed)
        }, this));
        for (e in this._overrides) this._core[e] = t.proxy(this[e], this)
    }, o.prototype.destroy = function () {
        var t, e, i, n, o;
        o = this._core.settings;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) "$relative" === e && o.navContainer ? this._controls[e].html("") : this._controls[e].remove();
        for (n in this.overides) this._core[n] = this._overrides[n];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, o.prototype.update = function () {
        var t, e, i, n = this._core.clones().length / 2, o = n + this._core.items().length, s = this._core.maximum(!0),
            r = this._core.settings, a = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
        if ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)), r.dots || "page" == r.slideBy) for (this._pages = [], t = n, e = 0, i = 0; t < o; t++) {
            if (e >= a || 0 === e) {
                if (this._pages.push({start: Math.min(s, t - n), end: t - n + a - 1}), Math.min(s, t - n) === s) break;
                e = 0, ++i
            }
            e += this._core.mergers(this._core.relative(t))
        }
    }, o.prototype.draw = function () {
        var e, i = this._core.settings, n = this._core.items().length <= i.items,
            o = this._core.relative(this._core.current()), s = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !s && o <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && o >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, o.prototype.onTrigger = function (e) {
        var i = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        }
    }, o.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy(function (t, i) {
            return t.start <= e && t.end >= e
        }, this)).pop()
    }, o.prototype.getPosition = function (e) {
        var i, n, o = this._core.settings;
        return "page" == o.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += o.slideBy : i -= o.slideBy), i
    }, o.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, o.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, o.prototype.to = function (e, i, n) {
        var o;
        !n && this._pages.length ? (o = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % o + o) % o].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = o
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    "use strict";
    var o = function (i) {
        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (i) {
                i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this), "prepared.owl.carousel": t.proxy(function (e) {
                if (e.namespace) {
                    var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!i) return;
                    this._hashes[i] = e.content
                }
            }, this), "changed.owl.carousel": t.proxy(function (i) {
                if (i.namespace && "position" === i.property.name) {
                    var n = this._core.items(this._core.relative(this._core.current())),
                        o = t.map(this._hashes, function (t, e) {
                            return t === n ? e : null
                        }).join();
                    if (!o || e.location.hash.slice(1) === o) return;
                    e.location.hash = o
                }
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function (t) {
            var i = e.location.hash.substring(1), n = this._core.$stage.children(),
                o = this._hashes[i] && n.index(this._hashes[i]);
            void 0 !== o && o !== this._core.current() && this._core.to(this._core.relative(o), !1, !0)
        }, this))
    };
    o.Defaults = {URLhashListener: !1}, o.prototype.destroy = function () {
        var i, n;
        t(e).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = o
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    function o(e, i) {
        var o = !1, s = e.charAt(0).toUpperCase() + e.slice(1);
        return t.each((e + " " + a.join(s + " ") + s).split(" "), function (t, e) {
            if (r[e] !== n) return o = !i || e, !1
        }), o
    }

    function s(t) {
        return o(t, !0)
    }

    var r = t("<support>").get(0).style, a = "Webkit Moz O ms".split(" "), l = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }, d = {
        csstransforms: function () {
            return !!o("transform")
        }, csstransforms3d: function () {
            return !!o("perspective")
        }, csstransitions: function () {
            return !!o("transition")
        }, cssanimations: function () {
            return !!o("animation")
        }
    };
    d.csstransitions() && (t.support.transition = new String(s("transition")), t.support.transition.end = l.transition.end[t.support.transition]), d.cssanimations() && (t.support.animation = new String(s("animation")), t.support.animation.end = l.animation.end[t.support.animation]), d.csstransforms() && (t.support.transform = new String(s("transform")), t.support.transform3d = d.csstransforms3d())
}(window.Zepto || window.jQuery, window, document), "function" != typeof Object.create && (Object.create = function (t) {
    function e() {
    }

    return e.prototype = t, new e
}), function (t, e, i, n) {
    var o = {
        init: function (e, i) {
            var n = this;
            n.elem = i, n.$elem = t(i), n.imageSrc = n.$elem.data("zoom-image") ? n.$elem.data("zoom-image") : n.$elem.attr("src"), n.options = t.extend({}, t.fn.elevateZoom.options, e), n.options.tint && (n.options.lensColour = "none", n.options.lensOpacity = "1"), "inner" == n.options.zoomType && (n.options.showLens = !1), n.$elem.parent().removeAttr("title").removeAttr("alt"), n.zoomImage = n.imageSrc, n.refresh(1), t("#" + n.options.gallery + " a").click(function (e) {
                return n.options.galleryActiveClass && (t("#" + n.options.gallery + " a").removeClass(n.options.galleryActiveClass), t(this).addClass(n.options.galleryActiveClass)), e.preventDefault(), t(this).data("zoom-image") ? n.zoomImagePre = t(this).data("zoom-image") : n.zoomImagePre = t(this).data("image"), n.swaptheimage(t(this).data("image"), n.zoomImagePre), !1
            })
        }, refresh: function (t) {
            var e = this;
            setTimeout(function () {
                e.fetch(e.imageSrc)
            }, t || e.options.refresh)
        }, fetch: function (t) {
            var e = this, i = new Image;
            i.onload = function () {
                e.largeWidth = i.width, e.largeHeight = i.height, e.startZoom(), e.currentImage = e.imageSrc, e.options.onZoomedImageLoaded(e.$elem)
            }, i.src = t
        }, startZoom: function () {
            var e = this;
            if (e.nzWidth = e.$elem.width(), e.nzHeight = e.$elem.height(), e.isWindowActive = !1, e.isLensActive = !1, e.isTintActive = !1, e.overWindow = !1, e.options.imageCrossfade && (e.zoomWrap = e.$elem.wrap('<div style="height:' + e.nzHeight + "px;width:" + e.nzWidth + 'px;" class="zoomWrapper" />'), e.$elem.css("position", "absolute")), e.zoomLock = 1, e.scrollingLock = !1, e.changeBgSize = !1, e.currentZoomLevel = e.options.zoomLevel, e.nzOffset = e.$elem.offset(), e.widthRatio = e.largeWidth / e.currentZoomLevel / e.nzWidth, e.heightRatio = e.largeHeight / e.currentZoomLevel / e.nzHeight, "window" == e.options.zoomType && (e.zoomWindowStyle = "overflow: hidden;background-position: 0px 0px;text-align:center;background-color: " + String(e.options.zoomWindowBgColour) + ";width: " + String(e.options.zoomWindowWidth) + "px;height: " + String(e.options.zoomWindowHeight) + "px;float: left;background-size: " + e.largeWidth / e.currentZoomLevel + "px " + e.largeHeight / e.currentZoomLevel + "px;display: none;z-index:100;border: " + String(e.options.borderSize) + "px solid " + e.options.borderColour + ";background-repeat: no-repeat;position: absolute;"), "inner" == e.options.zoomType) {
                var i = e.$elem.css("border-left-width");
                e.zoomWindowStyle = "overflow: hidden;margin-left: " + String(i) + ";margin-top: " + String(i) + ";background-position: 0px 0px;width: " + String(e.nzWidth) + "px;height: " + String(e.nzHeight) + "px;px;float: left;display: none;cursor:" + e.options.cursor + ";px solid " + e.options.borderColour + ";background-repeat: no-repeat;position: absolute;"
            }
            "window" == e.options.zoomType && (e.nzHeight < e.options.zoomWindowWidth / e.widthRatio ? lensHeight = e.nzHeight : lensHeight = String(e.options.zoomWindowHeight / e.heightRatio), e.largeWidth < e.options.zoomWindowWidth ? lensWidth = e.nzWidth : lensWidth = e.options.zoomWindowWidth / e.widthRatio, e.lensStyle = "background-position: 0px 0px;width: " + String(e.options.zoomWindowWidth / e.widthRatio) + "px;height: " + String(e.options.zoomWindowHeight / e.heightRatio) + "px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:" + e.options.lensOpacity + ";filter: alpha(opacity = " + 100 * e.options.lensOpacity + "); zoom:1;width:" + lensWidth + "px;height:" + lensHeight + "px;background-color:" + e.options.lensColour + ";cursor:" + e.options.cursor + ";border: " + e.options.lensBorderSize + "px solid " + e.options.lensBorderColour + ";background-repeat: no-repeat;position: absolute;"), e.tintStyle = "display: block;position: absolute;background-color: " + e.options.tintColour + ";filter:alpha(opacity=0);opacity: 0;width: " + e.nzWidth + "px;height: " + e.nzHeight + "px;", e.lensRound = "", "lens" == e.options.zoomType && (e.lensStyle = "background-position: 0px 0px;float: left;display: none;border: " + String(e.options.borderSize) + "px solid " + e.options.borderColour + ";width:" + String(e.options.lensSize) + "px;height:" + String(e.options.lensSize) + "px;background-repeat: no-repeat;position: absolute;"), "round" == e.options.lensShape && (e.lensRound = "border-top-left-radius: " + String(e.options.lensSize / 2 + e.options.borderSize) + "px;border-top-right-radius: " + String(e.options.lensSize / 2 + e.options.borderSize) + "px;border-bottom-left-radius: " + String(e.options.lensSize / 2 + e.options.borderSize) + "px;border-bottom-right-radius: " + String(e.options.lensSize / 2 + e.options.borderSize) + "px;"), e.zoomContainer = t('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' + e.nzOffset.left + "px;top:" + e.nzOffset.top + "px;height:" + e.nzHeight + "px;width:" + e.nzWidth + 'px;"></div>'), t("body").append(e.zoomContainer), e.options.containLensZoom && "lens" == e.options.zoomType && e.zoomContainer.css("overflow", "hidden"), "inner" != e.options.zoomType && (e.zoomLens = t("<div class='zoomLens' style='" + e.lensStyle + e.lensRound + "'>&nbsp;</div>").appendTo(e.zoomContainer).click(function () {
                e.$elem.trigger("click")
            }), e.options.tint && (e.tintContainer = t("<div/>").addClass("tintContainer"), e.zoomTint = t("<div class='zoomTint' style='" + e.tintStyle + "'></div>"), e.zoomLens.wrap(e.tintContainer), e.zoomTintcss = e.zoomLens.after(e.zoomTint), e.zoomTintImage = t('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' + e.nzWidth + "px; height: " + e.nzHeight + 'px;" src="' + e.imageSrc + '">').appendTo(e.zoomLens).click(function () {
                e.$elem.trigger("click")
            }))), isNaN(e.options.zoomWindowPosition) ? e.zoomWindow = t("<div style='z-index:999;left:" + e.windowOffsetLeft + "px;top:" + e.windowOffsetTop + "px;" + e.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function () {
                e.$elem.trigger("click")
            }) : e.zoomWindow = t("<div style='z-index:999;left:" + e.windowOffsetLeft + "px;top:" + e.windowOffsetTop + "px;" + e.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo(e.zoomContainer).click(function () {
                e.$elem.trigger("click")
            }), e.zoomWindowContainer = t("<div/>").addClass("zoomWindowContainer").css("width", e.options.zoomWindowWidth), e.zoomWindow.wrap(e.zoomWindowContainer), "lens" == e.options.zoomType && e.zoomLens.css({backgroundImage: "url('" + e.imageSrc + "')"}), "window" == e.options.zoomType && e.zoomWindow.css({backgroundImage: "url('" + e.imageSrc + "')"}), "inner" == e.options.zoomType && e.zoomWindow.css({backgroundImage: "url('" + e.imageSrc + "')"}), e.$elem.bind("touchmove", function (t) {
                t.preventDefault();
                var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0];
                e.setPosition(i)
            }), e.zoomContainer.bind("touchmove", function (t) {
                "inner" == e.options.zoomType && e.showHideWindow("show"), t.preventDefault();
                var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0];
                e.setPosition(i)
            }), e.zoomContainer.bind("touchend", function (t) {
                e.showHideWindow("hide"), e.options.showLens && e.showHideLens("hide"), e.options.tint && "inner" != e.options.zoomType && e.showHideTint("hide")
            }), e.$elem.bind("touchend", function (t) {
                e.showHideWindow("hide"), e.options.showLens && e.showHideLens("hide"), e.options.tint && "inner" != e.options.zoomType && e.showHideTint("hide")
            }), e.options.showLens && (e.zoomLens.bind("touchmove", function (t) {
                t.preventDefault();
                var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0];
                e.setPosition(i)
            }), e.zoomLens.bind("touchend", function (t) {
                e.showHideWindow("hide"), e.options.showLens && e.showHideLens("hide"), e.options.tint && "inner" != e.options.zoomType && e.showHideTint("hide")
            })), e.$elem.bind("mousemove", function (t) {
                0 == e.overWindow && e.setElements("show"), e.lastX === t.clientX && e.lastY === t.clientY || (e.setPosition(t), e.currentLoc = t), e.lastX = t.clientX, e.lastY = t.clientY
            }), e.zoomContainer.bind("mousemove", function (t) {
                0 == e.overWindow && e.setElements("show"), e.lastX === t.clientX && e.lastY === t.clientY || (e.setPosition(t), e.currentLoc = t), e.lastX = t.clientX, e.lastY = t.clientY
            }), "inner" != e.options.zoomType && e.zoomLens.bind("mousemove", function (t) {
                e.lastX === t.clientX && e.lastY === t.clientY || (e.setPosition(t), e.currentLoc = t), e.lastX = t.clientX, e.lastY = t.clientY
            }), e.options.tint && "inner" != e.options.zoomType && e.zoomTint.bind("mousemove", function (t) {
                e.lastX === t.clientX && e.lastY === t.clientY || (e.setPosition(t), e.currentLoc = t), e.lastX = t.clientX, e.lastY = t.clientY
            }), "inner" == e.options.zoomType && e.zoomWindow.bind("mousemove", function (t) {
                e.lastX === t.clientX && e.lastY === t.clientY || (e.setPosition(t), e.currentLoc = t), e.lastX = t.clientX, e.lastY = t.clientY
            }), e.zoomContainer.add(e.$elem).mouseenter(function () {
                0 == e.overWindow && e.setElements("show")
            }).mouseleave(function () {
                e.scrollLock || (e.setElements("hide"), e.options.onDestroy(e.$elem))
            }), "inner" != e.options.zoomType && e.zoomWindow.mouseenter(function () {
                e.overWindow = !0, e.setElements("hide")
            }).mouseleave(function () {
                e.overWindow = !1
            }), e.options.zoomLevel, e.options.minZoomLevel ? e.minZoomLevel = e.options.minZoomLevel : e.minZoomLevel = 2 * e.options.scrollZoomIncrement, e.options.scrollZoom && e.zoomContainer.add(e.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function (i) {
                e.scrollLock = !0, clearTimeout(t.data(this, "timer")), t.data(this, "timer", setTimeout(function () {
                    e.scrollLock = !1
                }, 250));
                var n = i.originalEvent.wheelDelta || -1 * i.originalEvent.detail;
                return i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault(), n / 120 > 0 ? e.currentZoomLevel >= e.minZoomLevel && e.changeZoomLevel(e.currentZoomLevel - e.options.scrollZoomIncrement) : e.options.maxZoomLevel ? e.currentZoomLevel <= e.options.maxZoomLevel && e.changeZoomLevel(parseFloat(e.currentZoomLevel) + e.options.scrollZoomIncrement) : e.changeZoomLevel(parseFloat(e.currentZoomLevel) + e.options.scrollZoomIncrement), !1
            })
        }, setElements: function (t) {
            var e = this;
            if (!e.options.zoomEnabled) return !1;
            "show" == t && e.isWindowSet && ("inner" == e.options.zoomType && e.showHideWindow("show"), "window" == e.options.zoomType && e.showHideWindow("show"), e.options.showLens && e.showHideLens("show"), e.options.tint && "inner" != e.options.zoomType && e.showHideTint("show")), "hide" == t && ("window" == e.options.zoomType && e.showHideWindow("hide"), e.options.tint || e.showHideWindow("hide"), e.options.showLens && e.showHideLens("hide"), e.options.tint && e.showHideTint("hide"))
        }, setPosition: function (t) {
            var e = this;
            return !!e.options.zoomEnabled && (e.nzHeight = e.$elem.height(), e.nzWidth = e.$elem.width(), e.nzOffset = e.$elem.offset(), e.options.tint && "inner" != e.options.zoomType && (e.zoomTint.css({top: 0}), e.zoomTint.css({left: 0})), e.options.responsive && !e.options.scrollZoom && e.options.showLens && (e.nzHeight < e.options.zoomWindowWidth / e.widthRatio ? lensHeight = e.nzHeight : lensHeight = String(e.options.zoomWindowHeight / e.heightRatio), e.largeWidth < e.options.zoomWindowWidth ? lensWidth = e.nzWidth : lensWidth = e.options.zoomWindowWidth / e.widthRatio, e.widthRatio = e.largeWidth / e.nzWidth, e.heightRatio = e.largeHeight / e.nzHeight, "lens" != e.options.zoomType && (e.nzHeight < e.options.zoomWindowWidth / e.widthRatio ? lensHeight = e.nzHeight : lensHeight = String(e.options.zoomWindowHeight / e.heightRatio), e.nzWidth < e.options.zoomWindowHeight / e.heightRatio ? lensWidth = e.nzWidth : lensWidth = String(e.options.zoomWindowWidth / e.widthRatio), e.zoomLens.css("width", lensWidth), e.zoomLens.css("height", lensHeight), e.options.tint && (e.zoomTintImage.css("width", e.nzWidth), e.zoomTintImage.css("height", e.nzHeight))), "lens" == e.options.zoomType && e.zoomLens.css({
                width: String(e.options.lensSize) + "px",
                height: String(e.options.lensSize) + "px"
            })), e.zoomContainer.css({top: e.nzOffset.top}), e.zoomContainer.css({left: e.nzOffset.left}), e.mouseLeft = parseInt(t.pageX - e.nzOffset.left), e.mouseTop = parseInt(t.pageY - e.nzOffset.top), "window" == e.options.zoomType && (e.Etoppos = e.mouseTop < e.zoomLens.height() / 2, e.Eboppos = e.mouseTop > e.nzHeight - e.zoomLens.height() / 2 - 2 * e.options.lensBorderSize, e.Eloppos = e.mouseLeft < 0 + e.zoomLens.width() / 2, e.Eroppos = e.mouseLeft > e.nzWidth - e.zoomLens.width() / 2 - 2 * e.options.lensBorderSize), "inner" == e.options.zoomType && (e.Etoppos = e.mouseTop < e.nzHeight / 2 / e.heightRatio, e.Eboppos = e.mouseTop > e.nzHeight - e.nzHeight / 2 / e.heightRatio, e.Eloppos = e.mouseLeft < 0 + e.nzWidth / 2 / e.widthRatio, e.Eroppos = e.mouseLeft > e.nzWidth - e.nzWidth / 2 / e.widthRatio - 2 * e.options.lensBorderSize), e.mouseLeft < 0 || e.mouseTop < 0 || e.mouseLeft > e.nzWidth || e.mouseTop > e.nzHeight ? void e.setElements("hide") : (e.options.showLens && (e.lensLeftPos = String(Math.floor(e.mouseLeft - e.zoomLens.width() / 2)), e.lensTopPos = String(Math.floor(e.mouseTop - e.zoomLens.height() / 2))), e.Etoppos && (e.lensTopPos = 0), e.Eloppos && (e.windowLeftPos = 0, e.lensLeftPos = 0, e.tintpos = 0), "window" == e.options.zoomType && (e.Eboppos && (e.lensTopPos = Math.max(e.nzHeight - e.zoomLens.height() - 2 * e.options.lensBorderSize, 0)), e.Eroppos && (e.lensLeftPos = e.nzWidth - e.zoomLens.width() - 2 * e.options.lensBorderSize)), "inner" == e.options.zoomType && (e.Eboppos && (e.lensTopPos = Math.max(e.nzHeight - 2 * e.options.lensBorderSize, 0)), e.Eroppos && (e.lensLeftPos = e.nzWidth - e.nzWidth - 2 * e.options.lensBorderSize)), "lens" == e.options.zoomType && (e.windowLeftPos = String(-1 * ((t.pageX - e.nzOffset.left) * e.widthRatio - e.zoomLens.width() / 2)), e.windowTopPos = String(-1 * ((t.pageY - e.nzOffset.top) * e.heightRatio - e.zoomLens.height() / 2)), e.zoomLens.css({backgroundPosition: e.windowLeftPos + "px " + e.windowTopPos + "px"}), e.changeBgSize && (e.nzHeight > e.nzWidth ? ("lens" == e.options.zoomType && e.zoomLens.css({"background-size": e.largeWidth / e.newvalueheight + "px " + e.largeHeight / e.newvalueheight + "px"}), e.zoomWindow.css({"background-size": e.largeWidth / e.newvalueheight + "px " + e.largeHeight / e.newvalueheight + "px"})) : ("lens" == e.options.zoomType && e.zoomLens.css({"background-size": e.largeWidth / e.newvaluewidth + "px " + e.largeHeight / e.newvaluewidth + "px"}), e.zoomWindow.css({"background-size": e.largeWidth / e.newvaluewidth + "px " + e.largeHeight / e.newvaluewidth + "px"})), e.changeBgSize = !1), e.setWindowPostition(t)), e.options.tint && "inner" != e.options.zoomType && e.setTintPosition(t), "window" == e.options.zoomType && e.setWindowPostition(t), "inner" == e.options.zoomType && e.setWindowPostition(t), e.options.showLens && (e.fullwidth && "lens" != e.options.zoomType && (e.lensLeftPos = 0), e.zoomLens.css({
                left: e.lensLeftPos + "px",
                top: e.lensTopPos + "px"
            })), void 0))
        }, showHideWindow: function (t) {
            var e = this;
            "show" == t && (e.isWindowActive || (e.options.zoomWindowFadeIn ? e.zoomWindow.stop(!0, !0, !1).fadeIn(e.options.zoomWindowFadeIn) : e.zoomWindow.show(), e.isWindowActive = !0)), "hide" == t && e.isWindowActive && (e.options.zoomWindowFadeOut ? e.zoomWindow.stop(!0, !0).fadeOut(e.options.zoomWindowFadeOut, function () {
                e.loop && (clearInterval(e.loop), e.loop = !1)
            }) : e.zoomWindow.hide(), e.isWindowActive = !1)
        }, showHideLens: function (t) {
            var e = this;
            "show" == t && (e.isLensActive || (e.options.lensFadeIn ? e.zoomLens.stop(!0, !0, !1).fadeIn(e.options.lensFadeIn) : e.zoomLens.show(), e.isLensActive = !0)), "hide" == t && e.isLensActive && (e.options.lensFadeOut ? e.zoomLens.stop(!0, !0).fadeOut(e.options.lensFadeOut) : e.zoomLens.hide(), e.isLensActive = !1)
        }, showHideTint: function (t) {
            var e = this;
            "show" == t && (e.isTintActive || (e.options.zoomTintFadeIn ? e.zoomTint.css({opacity: e.options.tintOpacity}).animate().stop(!0, !0).fadeIn("slow") : (e.zoomTint.css({opacity: e.options.tintOpacity}).animate(), e.zoomTint.show()), e.isTintActive = !0)), "hide" == t && e.isTintActive && (e.options.zoomTintFadeOut ? e.zoomTint.stop(!0, !0).fadeOut(e.options.zoomTintFadeOut) : e.zoomTint.hide(), e.isTintActive = !1)
        }, setLensPostition: function (t) {
        }, setWindowPostition: function (e) {
            var i = this;
            if (isNaN(i.options.zoomWindowPosition)) i.externalContainer = t("#" + i.options.zoomWindowPosition), i.externalContainerWidth = i.externalContainer.width(), i.externalContainerHeight = i.externalContainer.height(), i.externalContainerOffset = i.externalContainer.offset(), i.windowOffsetTop = i.externalContainerOffset.top, i.windowOffsetLeft = i.externalContainerOffset.left; else switch (i.options.zoomWindowPosition) {
                case 1:
                    i.windowOffsetTop = i.options.zoomWindowOffety, i.windowOffsetLeft = +i.nzWidth;
                    break;
                case 2:
                    i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = -1 * (i.options.zoomWindowHeight / 2 - i.nzHeight / 2), i.windowOffsetLeft = i.nzWidth);
                    break;
                case 3:
                    i.windowOffsetTop = i.nzHeight - i.zoomWindow.height() - 2 * i.options.borderSize, i.windowOffsetLeft = i.nzWidth;
                    break;
                case 4:
                    i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = i.nzWidth;
                    break;
                case 5:
                    i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = i.nzWidth - i.zoomWindow.width() - 2 * i.options.borderSize;
                    break;
                case 6:
                    i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = -1 * (i.options.zoomWindowWidth / 2 - i.nzWidth / 2 + 2 * i.options.borderSize));
                    break;
                case 7:
                    i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = 0;
                    break;
                case 8:
                    i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = -1 * (i.zoomWindow.width() + 2 * i.options.borderSize);
                    break;
                case 9:
                    i.windowOffsetTop = i.nzHeight - i.zoomWindow.height() - 2 * i.options.borderSize, i.windowOffsetLeft = -1 * (i.zoomWindow.width() + 2 * i.options.borderSize);
                    break;
                case 10:
                    i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = -1 * (i.options.zoomWindowHeight / 2 - i.nzHeight / 2), i.windowOffsetLeft = -1 * (i.zoomWindow.width() + 2 * i.options.borderSize));
                    break;
                case 11:
                    i.windowOffsetTop = i.options.zoomWindowOffety, i.windowOffsetLeft = -1 * (i.zoomWindow.width() + 2 * i.options.borderSize);
                    break;
                case 12:
                    i.windowOffsetTop = -1 * (i.zoomWindow.height() + 2 * i.options.borderSize), i.windowOffsetLeft = -1 * (i.zoomWindow.width() + 2 * i.options.borderSize);
                    break;
                case 13:
                    i.windowOffsetTop = -1 * (i.zoomWindow.height() + 2 * i.options.borderSize), i.windowOffsetLeft = 0;
                    break;
                case 14:
                    i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = -1 * (i.zoomWindow.height() + 2 * i.options.borderSize), i.windowOffsetLeft = -1 * (i.options.zoomWindowWidth / 2 - i.nzWidth / 2 + 2 * i.options.borderSize));
                    break;
                case 15:
                    i.windowOffsetTop = -1 * (i.zoomWindow.height() + 2 * i.options.borderSize), i.windowOffsetLeft = i.nzWidth - i.zoomWindow.width() - 2 * i.options.borderSize;
                    break;
                case 16:
                    i.windowOffsetTop = -1 * (i.zoomWindow.height() + 2 * i.options.borderSize), i.windowOffsetLeft = i.nzWidth;
                    break;
                default:
                    i.windowOffsetTop = i.options.zoomWindowOffety, i.windowOffsetLeft = i.nzWidth
            }
            i.isWindowSet = !0, i.windowOffsetTop = i.windowOffsetTop + i.options.zoomWindowOffety, i.windowOffsetLeft = i.windowOffsetLeft + i.options.zoomWindowOffetx, i.zoomWindow.css({top: i.windowOffsetTop}), i.zoomWindow.css({left: i.windowOffsetLeft}), "inner" == i.options.zoomType && (i.zoomWindow.css({top: 0}), i.zoomWindow.css({left: 0})), i.windowLeftPos = String(-1 * ((e.pageX - i.nzOffset.left) * i.widthRatio - i.zoomWindow.width() / 2)), i.windowTopPos = String(-1 * ((e.pageY - i.nzOffset.top) * i.heightRatio - i.zoomWindow.height() / 2)), i.Etoppos && (i.windowTopPos = 0), i.Eloppos && (i.windowLeftPos = 0), i.Eboppos && (i.windowTopPos = -1 * (i.largeHeight / i.currentZoomLevel - i.zoomWindow.height())), i.Eroppos && (i.windowLeftPos = -1 * (i.largeWidth / i.currentZoomLevel - i.zoomWindow.width())), i.fullheight && (i.windowTopPos = 0), i.fullwidth && (i.windowLeftPos = 0), "window" != i.options.zoomType && "inner" != i.options.zoomType || (1 == i.zoomLock && (i.widthRatio <= 1 && (i.windowLeftPos = 0), i.heightRatio <= 1 && (i.windowTopPos = 0)), "window" == i.options.zoomType && (i.largeHeight < i.options.zoomWindowHeight && (i.windowTopPos = 0), i.largeWidth < i.options.zoomWindowWidth && (i.windowLeftPos = 0)), i.options.easing ? (i.xp || (i.xp = 0), i.yp || (i.yp = 0), i.loop || (i.loop = setInterval(function () {
                i.xp += (i.windowLeftPos - i.xp) / i.options.easingAmount, i.yp += (i.windowTopPos - i.yp) / i.options.easingAmount, i.scrollingLock ? (clearInterval(i.loop), i.xp = i.windowLeftPos, i.yp = i.windowTopPos, i.xp = -1 * ((e.pageX - i.nzOffset.left) * i.widthRatio - i.zoomWindow.width() / 2), i.yp = -1 * ((e.pageY - i.nzOffset.top) * i.heightRatio - i.zoomWindow.height() / 2), i.changeBgSize && (i.nzHeight > i.nzWidth ? ("lens" == i.options.zoomType && i.zoomLens.css({"background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"}), i.zoomWindow.css({"background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"})) : ("lens" != i.options.zoomType && i.zoomLens.css({"background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvalueheight + "px"}), i.zoomWindow.css({"background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px"})), i.changeBgSize = !1), i.zoomWindow.css({backgroundPosition: i.windowLeftPos + "px " + i.windowTopPos + "px"}), i.scrollingLock = !1, i.loop = !1) : Math.round(Math.abs(i.xp - i.windowLeftPos) + Math.abs(i.yp - i.windowTopPos)) < 1 ? (clearInterval(i.loop), i.zoomWindow.css({backgroundPosition: i.windowLeftPos + "px " + i.windowTopPos + "px"}), i.loop = !1) : (i.changeBgSize && (i.nzHeight > i.nzWidth ? ("lens" == i.options.zoomType && i.zoomLens.css({"background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"}), i.zoomWindow.css({"background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"})) : ("lens" != i.options.zoomType && i.zoomLens.css({"background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px"}), i.zoomWindow.css({"background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px"})), i.changeBgSize = !1), i.zoomWindow.css({backgroundPosition: i.xp + "px " + i.yp + "px"}))
            }, 16))) : (i.changeBgSize && (i.nzHeight > i.nzWidth ? ("lens" == i.options.zoomType && i.zoomLens.css({"background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"}), i.zoomWindow.css({"background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"})) : ("lens" == i.options.zoomType && i.zoomLens.css({"background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px"}), i.largeHeight / i.newvaluewidth < i.options.zoomWindowHeight ? i.zoomWindow.css({"background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px"}) : i.zoomWindow.css({"background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"})), i.changeBgSize = !1), i.zoomWindow.css({backgroundPosition: i.windowLeftPos + "px " + i.windowTopPos + "px"})))
        }, setTintPosition: function (t) {
            var e = this;
            e.nzOffset = e.$elem.offset(), e.tintpos = String(-1 * (t.pageX - e.nzOffset.left - e.zoomLens.width() / 2)), e.tintposy = String(-1 * (t.pageY - e.nzOffset.top - e.zoomLens.height() / 2)), e.Etoppos && (e.tintposy = 0), e.Eloppos && (e.tintpos = 0), e.Eboppos && (e.tintposy = -1 * (e.nzHeight - e.zoomLens.height() - 2 * e.options.lensBorderSize)), e.Eroppos && (e.tintpos = -1 * (e.nzWidth - e.zoomLens.width() - 2 * e.options.lensBorderSize)), e.options.tint && (e.fullheight && (e.tintposy = 0), e.fullwidth && (e.tintpos = 0), e.zoomTintImage.css({left: e.tintpos + "px"}), e.zoomTintImage.css({top: e.tintposy + "px"}))
        }, swaptheimage: function (e, i) {
            var n = this, o = new Image;
            n.options.loadingIcon && (n.spinner = t("<div style=\"background: url('" + n.options.loadingIcon + "') no-repeat center;height:" + n.nzHeight + "px;width:" + n.nzWidth + 'px;z-index: 2000;position: absolute; background-position: center center;"></div>'), n.$elem.after(n.spinner)), n.options.onImageSwap(n.$elem), o.onload = function () {
                n.largeWidth = o.width, n.largeHeight = o.height, n.zoomImage = i, n.zoomWindow.css({"background-size": n.largeWidth + "px " + n.largeHeight + "px"}), n.swapAction(e, i)
            }, o.src = i
        }, swapAction: function (e, i) {
            var n = this, o = new Image;
            if (o.onload = function () {
                n.nzHeight = o.height, n.nzWidth = o.width, n.options.onImageSwapComplete(n.$elem), n.doneCallback()
            }, o.src = e, n.currentZoomLevel = n.options.zoomLevel, n.options.maxZoomLevel = !1, "lens" == n.options.zoomType && n.zoomLens.css({backgroundImage: "url('" + i + "')"}), "window" == n.options.zoomType && n.zoomWindow.css({backgroundImage: "url('" + i + "')"}), "inner" == n.options.zoomType && n.zoomWindow.css({backgroundImage: "url('" + i + "')"}), n.currentImage = i, n.options.imageCrossfade) {
                var s = n.$elem, r = s.clone();
                if (n.$elem.attr("src", e), n.$elem.after(r), r.stop(!0).fadeOut(n.options.imageCrossfade, function () {
                    t(this).remove()
                }), n.$elem.width("auto").removeAttr("width"), n.$elem.height("auto").removeAttr("height"), s.fadeIn(n.options.imageCrossfade), n.options.tint && "inner" != n.options.zoomType) {
                    var a = n.zoomTintImage, l = a.clone();
                    n.zoomTintImage.attr("src", i), n.zoomTintImage.after(l), l.stop(!0).fadeOut(n.options.imageCrossfade, function () {
                        t(this).remove()
                    }), a.fadeIn(n.options.imageCrossfade), n.zoomTint.css({height: n.$elem.height()}), n.zoomTint.css({width: n.$elem.width()})
                }
                n.zoomContainer.css("height", n.$elem.height()), n.zoomContainer.css("width", n.$elem.width()), "inner" == n.options.zoomType && (n.options.constrainType || (n.zoomWrap.parent().css("height", n.$elem.height()), n.zoomWrap.parent().css("width", n.$elem.width()), n.zoomWindow.css("height", n.$elem.height()), n.zoomWindow.css("width", n.$elem.width()))), n.options.imageCrossfade && (n.zoomWrap.css("height", n.$elem.height()), n.zoomWrap.css("width", n.$elem.width()))
            } else n.$elem.attr("src", e), n.options.tint && (n.zoomTintImage.attr("src", i), n.zoomTintImage.attr("height", n.$elem.height()), n.zoomTintImage.css({height: n.$elem.height()}), n.zoomTint.css({height: n.$elem.height()})), n.zoomContainer.css("height", n.$elem.height()), n.zoomContainer.css("width", n.$elem.width()), n.options.imageCrossfade && (n.zoomWrap.css("height", n.$elem.height()), n.zoomWrap.css("width", n.$elem.width()));
            n.options.constrainType && ("height" == n.options.constrainType && (n.zoomContainer.css("height", n.options.constrainSize), n.zoomContainer.css("width", "auto"), n.options.imageCrossfade ? (n.zoomWrap.css("height", n.options.constrainSize), n.zoomWrap.css("width", "auto"), n.constwidth = n.zoomWrap.width()) : (n.$elem.css("height", n.options.constrainSize), n.$elem.css("width", "auto"), n.constwidth = n.$elem.width()), "inner" == n.options.zoomType && (n.zoomWrap.parent().css("height", n.options.constrainSize), n.zoomWrap.parent().css("width", n.constwidth), n.zoomWindow.css("height", n.options.constrainSize), n.zoomWindow.css("width", n.constwidth)), n.options.tint && (n.tintContainer.css("height", n.options.constrainSize), n.tintContainer.css("width", n.constwidth), n.zoomTint.css("height", n.options.constrainSize), n.zoomTint.css("width", n.constwidth), n.zoomTintImage.css("height", n.options.constrainSize), n.zoomTintImage.css("width", n.constwidth))), "width" == n.options.constrainType && (n.zoomContainer.css("height", "auto"), n.zoomContainer.css("width", n.options.constrainSize), n.options.imageCrossfade ? (n.zoomWrap.css("height", "auto"), n.zoomWrap.css("width", n.options.constrainSize), n.constheight = n.zoomWrap.height()) : (n.$elem.css("height", "auto"), n.$elem.css("width", n.options.constrainSize), n.constheight = n.$elem.height()), "inner" == n.options.zoomType && (n.zoomWrap.parent().css("height", n.constheight), n.zoomWrap.parent().css("width", n.options.constrainSize), n.zoomWindow.css("height", n.constheight), n.zoomWindow.css("width", n.options.constrainSize)), n.options.tint && (n.tintContainer.css("height", n.constheight), n.tintContainer.css("width", n.options.constrainSize), n.zoomTint.css("height", n.constheight), n.zoomTint.css("width", n.options.constrainSize), n.zoomTintImage.css("height", n.constheight), n.zoomTintImage.css("width", n.options.constrainSize))))
        }, doneCallback: function () {
            var t = this;
            t.options.loadingIcon && t.spinner.hide(), t.nzOffset = t.$elem.offset(), t.nzWidth = t.$elem.width(), t.nzHeight = t.$elem.height(), t.currentZoomLevel = t.options.zoomLevel, t.widthRatio = t.largeWidth / t.nzWidth, t.heightRatio = t.largeHeight / t.nzHeight, "window" == t.options.zoomType && (t.nzHeight < t.options.zoomWindowWidth / t.widthRatio ? lensHeight = t.nzHeight : lensHeight = String(t.options.zoomWindowHeight / t.heightRatio), t.options.zoomWindowWidth < t.options.zoomWindowWidth ? lensWidth = t.nzWidth : lensWidth = t.options.zoomWindowWidth / t.widthRatio, t.zoomLens && (t.zoomLens.css("width", lensWidth), t.zoomLens.css("height", lensHeight)))
        }, getCurrentImage: function () {
            return this.zoomImage
        }, getGalleryList: function () {
            var e = this;
            return e.gallerylist = [], e.options.gallery ? t("#" + e.options.gallery + " a").each(function () {
                var i = "";
                t(this).data("zoom-image") ? i = t(this).data("zoom-image") : t(this).data("image") && (i = t(this).data("image")), i == e.zoomImage ? e.gallerylist.unshift({
                    href: "" + i,
                    title: t(this).find("img").attr("title")
                }) : e.gallerylist.push({href: "" + i, title: t(this).find("img").attr("title")})
            }) : e.gallerylist.push({href: "" + e.zoomImage, title: t(this).find("img").attr("title")}), e.gallerylist
        }, changeZoomLevel: function (t) {
            var e = this;
            e.scrollingLock = !0, e.newvalue = parseFloat(t).toFixed(2), newvalue = parseFloat(t).toFixed(2), maxheightnewvalue = e.largeHeight / (e.options.zoomWindowHeight / e.nzHeight * e.nzHeight), maxwidthtnewvalue = e.largeWidth / (e.options.zoomWindowWidth / e.nzWidth * e.nzWidth), "inner" != e.options.zoomType && (maxheightnewvalue <= newvalue ? (e.heightRatio = e.largeHeight / maxheightnewvalue / e.nzHeight, e.newvalueheight = maxheightnewvalue, e.fullheight = !0) : (e.heightRatio = e.largeHeight / newvalue / e.nzHeight, e.newvalueheight = newvalue, e.fullheight = !1), maxwidthtnewvalue <= newvalue ? (e.widthRatio = e.largeWidth / maxwidthtnewvalue / e.nzWidth, e.newvaluewidth = maxwidthtnewvalue, e.fullwidth = !0) : (e.widthRatio = e.largeWidth / newvalue / e.nzWidth, e.newvaluewidth = newvalue, e.fullwidth = !1), "lens" == e.options.zoomType && (maxheightnewvalue <= newvalue ? (e.fullwidth = !0, e.newvaluewidth = maxheightnewvalue) : (e.widthRatio = e.largeWidth / newvalue / e.nzWidth, e.newvaluewidth = newvalue, e.fullwidth = !1))), "inner" == e.options.zoomType && (maxheightnewvalue = parseFloat(e.largeHeight / e.nzHeight).toFixed(2), maxwidthtnewvalue = parseFloat(e.largeWidth / e.nzWidth).toFixed(2), newvalue > maxheightnewvalue && (newvalue = maxheightnewvalue), newvalue > maxwidthtnewvalue && (newvalue = maxwidthtnewvalue), maxheightnewvalue <= newvalue ? (e.heightRatio = e.largeHeight / newvalue / e.nzHeight, newvalue > maxheightnewvalue ? e.newvalueheight = maxheightnewvalue : e.newvalueheight = newvalue, e.fullheight = !0) : (e.heightRatio = e.largeHeight / newvalue / e.nzHeight, newvalue > maxheightnewvalue ? e.newvalueheight = maxheightnewvalue : e.newvalueheight = newvalue, e.fullheight = !1), maxwidthtnewvalue <= newvalue ? (e.widthRatio = e.largeWidth / newvalue / e.nzWidth, newvalue > maxwidthtnewvalue ? e.newvaluewidth = maxwidthtnewvalue : e.newvaluewidth = newvalue, e.fullwidth = !0) : (e.widthRatio = e.largeWidth / newvalue / e.nzWidth, e.newvaluewidth = newvalue, e.fullwidth = !1)), scrcontinue = !1, "inner" == e.options.zoomType && (e.nzWidth >= e.nzHeight && (e.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, e.fullheight = !0, e.fullwidth = !0)), e.nzHeight > e.nzWidth && (e.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, e.fullheight = !0, e.fullwidth = !0))), "inner" != e.options.zoomType && (scrcontinue = !0), scrcontinue && (e.zoomLock = 0, e.changeZoom = !0, e.options.zoomWindowHeight / e.heightRatio <= e.nzHeight && (e.currentZoomLevel = e.newvalueheight, "lens" != e.options.zoomType && "inner" != e.options.zoomType && (e.changeBgSize = !0, e.zoomLens.css({height: String(e.options.zoomWindowHeight / e.heightRatio) + "px"})), "lens" != e.options.zoomType && "inner" != e.options.zoomType || (e.changeBgSize = !0)), e.options.zoomWindowWidth / e.widthRatio <= e.nzWidth && ("inner" != e.options.zoomType && e.newvaluewidth > e.newvalueheight && (e.currentZoomLevel = e.newvaluewidth), "lens" != e.options.zoomType && "inner" != e.options.zoomType && (e.changeBgSize = !0, e.zoomLens.css({width: String(e.options.zoomWindowWidth / e.widthRatio) + "px"})), "lens" != e.options.zoomType && "inner" != e.options.zoomType || (e.changeBgSize = !0)), "inner" == e.options.zoomType && (e.changeBgSize = !0, e.nzWidth > e.nzHeight && (e.currentZoomLevel = e.newvaluewidth), e.nzHeight > e.nzWidth && (e.currentZoomLevel = e.newvaluewidth))), e.setPosition(e.currentLoc)
        }, closeAll: function () {
            self.zoomWindow && self.zoomWindow.hide(), self.zoomLens && self.zoomLens.hide(), self.zoomTint && self.zoomTint.hide()
        }, changeState: function (t) {
            var e = this;
            "enable" == t && (e.options.zoomEnabled = !0), "disable" == t && (e.options.zoomEnabled = !1)
        }
    };
    t.fn.elevateZoom = function (e) {
        return this.each(function () {
            var i = Object.create(o);
            i.init(e, this), t.data(this, "elevateZoom", i)
        })
    }, t.fn.elevateZoom.options = {
        zoomActivation: "hover",
        zoomEnabled: !0,
        preloading: 1,
        zoomLevel: 1,
        scrollZoom: !1,
        scrollZoomIncrement: .1,
        minZoomLevel: !1,
        maxZoomLevel: !1,
        easing: !1,
        easingAmount: 12,
        lensSize: 200,
        zoomWindowWidth: 400,
        zoomWindowHeight: 400,
        zoomWindowOffetx: 0,
        zoomWindowOffety: 0,
        zoomWindowPosition: 1,
        zoomWindowBgColour: "#fff",
        lensFadeIn: !1,
        lensFadeOut: !1,
        debug: !1,
        zoomWindowFadeIn: !1,
        zoomWindowFadeOut: !1,
        zoomWindowAlwaysShow: !1,
        zoomTintFadeIn: !1,
        zoomTintFadeOut: !1,
        borderSize: 4,
        showLens: !0,
        borderColour: "#888",
        lensBorderSize: 1,
        lensBorderColour: "#000",
        lensShape: "square",
        zoomType: "window",
        containLensZoom: !1,
        lensColour: "white",
        lensOpacity: .4,
        lenszoom: !1,
        tint: !1,
        tintColour: "#333",
        tintOpacity: .4,
        gallery: !1,
        galleryActiveClass: "zoomGalleryActive",
        imageCrossfade: !1,
        constrainType: !1,
        constrainSize: !1,
        loadingIcon: !1,
        cursor: "default",
        responsive: !0,
        onComplete: t.noop,
        onDestroy: function () {
        },
        onZoomedImageLoaded: function () {
        },
        onImageSwap: t.noop,
        onImageSwapComplete: t.noop
    }
}(jQuery, window, document), function (t) {
    "use strict";

    function e(t, e) {
        var i = "";
        return t.indexOf("-") > -1 && (t = t.replace("-", ""), i = "-"), t.indexOf(e.prefix) > -1 && (t = t.replace(e.prefix, "")), t.indexOf(e.suffix) > -1 && (t = t.replace(e.suffix, "")), i + e.prefix + t + e.suffix
    }

    function i(t, e) {
        return e.allowEmpty && "" === t ? "" : e.reverse ? o(t, e) : n(t, e)
    }

    function n(t, i) {
        var n, o, r, a = t.indexOf("-") > -1 && i.allowNegative ? "-" : "", l = t.replace(/[^0-9]/g, ""),
            d = l.slice(0, l.length - i.precision);
        if (n = s(d, a, i), i.precision > 0) {
            if (!isNaN(t) && t.indexOf(".")) {
                var c = t.substr(t.indexOf(".") + 1);
                l += new Array(i.precision + 1 - c.length).join(0), d = l.slice(0, l.length - i.precision), n = s(d, a, i)
            }
            o = l.slice(l.length - i.precision), r = new Array(i.precision + 1 - o.length).join(0), n += i.decimal + r + o
        }
        return e(n, i)
    }

    function o(t, i) {
        var n, o = t.indexOf("-") > -1 && i.allowNegative ? "-" : "", r = t.replace(i.prefix, "").replace(i.suffix, ""),
            a = r.split(i.decimal)[0], l = "";
        if ("" === a && (a = "0"), n = s(a, o, i), i.precision > 0) {
            var d = r.split(i.decimal);
            d.length > 1 && (l = d[1]), n += i.decimal + l;
            var c = Number.parseFloat(a + "." + l).toFixed(i.precision), h = c.toString().split(i.decimal)[1];
            n = n.split(i.decimal)[0] + "." + h
        }
        return e(n, i)
    }

    function s(t, e, i) {
        return t = t.replace(/^0*/g, ""), t = t.replace(/\B(?=(\d{3})+(?!\d))/g, i.thousands), "" === t && (t = "0"), e + t
    }

    t.browser || (t.browser = {}, t.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase()), t.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase()), t.browser.opera = /opera/.test(navigator.userAgent.toLowerCase()), t.browser.msie = /msie/.test(navigator.userAgent.toLowerCase()), t.browser.device = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
    var r = {
        prefix: "",
        suffix: "",
        affixesStay: !0,
        thousands: ",",
        decimal: ".",
        precision: 2,
        allowZero: !1,
        allowNegative: !1,
        doubleClickSelection: !0,
        allowEmpty: !1,
        bringCaretAtEndOnFocus: !0
    }, a = {
        destroy: function () {
            return t(this).unbind(".maskMoney"), t.browser.msie && (this.onpaste = null), this
        }, applyMask: function (e) {
            return i(e, t(this).data("settings"))
        }, mask: function (e) {
            return this.each(function () {
                var i = t(this);
                return "number" == typeof e && i.val(e), i.trigger("mask")
            })
        }, unmasked: function () {
            return this.map(function () {
                var e, i = t(this).val() || "0", n = -1 !== i.indexOf("-");
                return t(i.split(/\D/).reverse()).each(function (t, i) {
                    if (i) return e = i, !1
                }), i = i.replace(/\D/g, ""), i = i.replace(new RegExp(e + "$"), "." + e), n && (i = "-" + i), parseFloat(i)
            })
        }, unmaskedWithOptions: function () {
            return this.map(function () {
                var e = t(this).val() || "0", i = t(this).data("settings") || r,
                    n = new RegExp(i.thousandsForUnmasked || i.thousands, "g");
                return e = e.replace(n, ""), parseFloat(e)
            })
        }, init: function (n) {
            return n = t.extend(t.extend({}, r), n), this.each(function () {
                function o() {
                    var t, e, i, n, o, s = S.get(0), r = 0, a = 0;
                    return "number" == typeof s.selectionStart && "number" == typeof s.selectionEnd ? (r = s.selectionStart, a = s.selectionEnd) : (e = document.selection.createRange()) && e.parentElement() === s && (n = s.value.length, t = s.value.replace(/\r\n/g, "\n"), i = s.createTextRange(), i.moveToBookmark(e.getBookmark()), o = s.createTextRange(), o.collapse(!1), i.compareEndPoints("StartToEnd", o) > -1 ? r = a = n : (r = -i.moveStart("character", -n), r += t.slice(0, r).split("\n").length - 1, i.compareEndPoints("EndToEnd", o) > -1 ? a = n : (a = -i.moveEnd("character", -n), a += t.slice(0, a).split("\n").length - 1))), {
                        start: r,
                        end: a
                    }
                }

                function s() {
                    var t = !(S.val().length >= S.attr("maxlength") && S.attr("maxlength") >= 0), e = o(), i = e.start,
                        n = e.end, s = !(e.start === e.end || !S.val().substring(i, n).match(/\d/)),
                        r = "0" === S.val().substring(0, 1);
                    return t || s || r
                }

                function r(t) {
                    C.formatOnBlur || S.each(function (e, i) {
                        if (i.setSelectionRange) i.focus(), i.setSelectionRange(t, t); else if (i.createTextRange) {
                            var n = i.createTextRange();
                            n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", t), n.select()
                        }
                    })
                }

                function a(t) {
                    var e, n = S.val().length;
                    S.val(i(S.val(), C)), e = S.val().length, C.reverse || (t -= n - e), r(t)
                }

                function l() {
                    var t = S.val();
                    if (!C.allowEmpty || "" !== t) {
                        var e = !isNaN(t), n = e ? t.indexOf(".") : t.indexOf(C.decimal);
                        if (C.precision > 0) if (n < 0) t += C.decimal + new Array(C.precision + 1).join(0); else {
                            var o = t.slice(0, n), s = t.slice(n + 1);
                            t = o + C.decimal + s + new Array(C.precision + 1 - s.length).join(0)
                        } else n > 0 && (t = t.slice(0, n));
                        S.val(i(t, C))
                    }
                }

                function d() {
                    var t = S.val();
                    return C.allowNegative ? "" !== t && "-" === t.charAt(0) ? t.replace("-", "") : "-" + t : t
                }

                function c(t) {
                    t.preventDefault ? t.preventDefault() : t.returnValue = !1
                }

                function h(t) {
                    t = t || window.event;
                    var e = t.which || t.charCode || t.keyCode, i = C.decimal.charCodeAt(0);
                    return void 0 !== e && (!(e < 48 || e > 57) || e === i && C.reverse ? !!s() && ((e !== i || !p()) && (!!C.formatOnBlur || (c(t), g(t), !1))) : m(e, t))
                }

                function p() {
                    return !u() && f()
                }

                function u() {
                    var t = S.val().length, e = o();
                    return 0 === e.start && e.end === t
                }

                function f() {
                    return S.val().indexOf(C.decimal) > -1
                }

                function g(t) {
                    t = t || window.event;
                    var e, i, n, s, r = t.which || t.charCode || t.keyCode, l = "";
                    r >= 48 && r <= 57 && (l = String.fromCharCode(r)), e = o(), i = e.start, n = e.end, s = S.val(), S.val(s.substring(0, i) + l + s.substring(n, s.length)), a(i + 1)
                }

                function m(e, i) {
                    return 45 === e ? (S.val(d()), !1) : 43 === e ? (S.val(S.val().replace("-", "")), !1) : 13 === e || 9 === e || (!(!t.browser.mozilla || 37 !== e && 39 !== e || 0 !== i.charCode) || (c(i), !0))
                }

                function v(t) {
                    t = t || window.event;
                    var e, i, n, s, r, l = t.which || t.charCode || t.keyCode;
                    return void 0 !== l && (e = o(), i = e.start, n = e.end, 8 !== l && 46 !== l && 63272 !== l || (c(t), s = S.val(), i === n && (8 === l ? "" === C.suffix ? i -= 1 : (r = s.split("").reverse().join("").search(/\d/), i = s.length - r - 1, n = i + 1) : n += 1), S.val(s.substring(0, i) + s.substring(n, s.length)), a(i), !1))
                }

                function w() {
                    k = S.val(), l();
                    var t, e = S.get(0);
                    C.selectAllOnFocus ? e.select() : e.createTextRange && C.bringCaretAtEndOnFocus && (t = e.createTextRange(), t.collapse(!1), t.select())
                }

                function y() {
                    setTimeout(function () {
                        l()
                    }, 0)
                }

                function b() {
                    return (parseFloat("0") / Math.pow(10, C.precision)).toFixed(C.precision).replace(new RegExp("\\.", "g"), C.decimal)
                }

                function x(i) {
                    if (t.browser.msie && h(i), C.formatOnBlur && S.val() !== k && g(i), "" === S.val() && C.allowEmpty) S.val(""); else if ("" === S.val() || S.val() === e(b(), C)) C.allowZero ? C.affixesStay ? S.val(e(b(), C)) : S.val(b()) : S.val(""); else if (!C.affixesStay) {
                        var n = S.val().replace(C.prefix, "").replace(C.suffix, "");
                        S.val(n)
                    }
                    S.val() !== k && S.change()
                }

                function T() {
                    var t, e = S.get(0);
                    C.selectAllOnFocus || (e.setSelectionRange && C.bringCaretAtEndOnFocus ? (t = S.val().length, e.setSelectionRange(t, t)) : S.val(S.val()))
                }

                function z() {
                    var t, e, i = S.get(0);
                    i.setSelectionRange && C.bringCaretAtEndOnFocus ? (e = S.val().length, t = C.doubleClickSelection ? 0 : e, i.setSelectionRange(t, e)) : S.val(S.val())
                }

                var C, k, S = t(this);
                C = t.extend({}, n), C = t.extend(C, S.data()), S.data("settings", C), function () {
                    t.browser.device && S.attr("type", "tel")
                }(), S.unbind(".maskMoney"), S.bind("keypress.maskMoney", h), S.bind("keydown.maskMoney", v), S.bind("blur.maskMoney", x), S.bind("focus.maskMoney", w), S.bind("click.maskMoney", T), S.bind("dblclick.maskMoney", z), S.bind("cut.maskMoney", y), S.bind("paste.maskMoney", y), S.bind("mask.maskMoney", l)
            })
        }
    };
    t.fn.maskMoney = function (e) {
        return a[e] ? a[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist on jQuery.maskMoney") : a.init.apply(this, arguments)
    }
}(window.jQuery || window.Zepto), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = function (e, i) {
        return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(i), i
    } : t(jQuery)
}(function (t) {
    function e(e, i, n) {
        "string" == typeof n && (n = {className: n}), this.options = T(x, t.isPlainObject(n) ? n : {}), this.loadHTML(), this.wrapper = t(u.html), this.options.clickToHide && this.wrapper.addClass(o + "-hidable"), this.wrapper.data(o, this), this.arrow = this.wrapper.find("." + o + "-arrow"), this.container = this.wrapper.find("." + o + "-container"), this.container.append(this.userContainer), e && e.length && (this.elementType = e.attr("type"), this.originalElement = e, this.elem = S(e), this.elem.data(o, this), this.elem.before(this.wrapper)), this.container.hide(), this.run(i)
    }

    var i = [].indexOf || function (t) {
            for (var e = 0, i = this.length; e < i; e++) if (e in this && this[e] === t) return e;
            return -1
        }, n = "notify", o = n + "js", s = n + "!blank",
        r = {t: "top", m: "middle", b: "bottom", l: "left", c: "center", r: "right"}, a = ["l", "c", "r"],
        l = ["t", "m", "b"], d = ["t", "b", "l", "r"], c = {t: "b", m: null, b: "t", l: "r", c: null, r: "l"},
        h = function (e) {
            var i;
            return i = [], t.each(e.split(/\W+/), function (t, e) {
                var n;
                if (n = e.toLowerCase().charAt(0), r[n]) return i.push(n)
            }), i
        }, p = {}, u = {
            name: "core",
            html: '<div class="' + o + '-wrapper">\n\t<div class="' + o + '-arrow"></div>\n\t<div class="' + o + '-container"></div>\n</div>',
            css: "." + o + "-corner {\n\tposition: fixed;\n\tmargin: 5px;\n\tz-index: 1050;\n}\n\n." + o + "-corner ." + o + "-wrapper,\n." + o + "-corner ." + o + "-container {\n\tposition: relative;\n\tdisplay: block;\n\theight: inherit;\n\twidth: inherit;\n\tmargin: 3px;\n}\n\n." + o + "-wrapper {\n\tz-index: 1;\n\tposition: absolute;\n\tdisplay: inline-block;\n\theight: 0;\n\twidth: 0;\n}\n\n." + o + "-container {\n\tdisplay: none;\n\tz-index: 1;\n\tposition: absolute;\n}\n\n." + o + "-hidable {\n\tcursor: pointer;\n}\n\n[data-notify-text],[data-notify-html] {\n\tposition: relative;\n}\n\n." + o + "-arrow {\n\tposition: absolute;\n\tz-index: 2;\n\twidth: 0;\n\theight: 0;\n}"
        }, f = {"border-radius": ["-webkit-", "-moz-"]}, g = function (t) {
            return p[t]
        }, m = function (t) {
            if (!t) throw"Missing Style name";
            p[t] && delete p[t]
        }, v = function (e, i) {
            if (!e) throw"Missing Style name";
            if (!i) throw"Missing Style definition";
            if (!i.html) throw"Missing Style HTML";
            var s = p[e];
            s && s.cssElem && (window.console && console.warn(n + ": overwriting style '" + e + "'"), p[e].cssElem.remove()), i.name = e, p[e] = i;
            var r = "";
            i.classes && t.each(i.classes, function (e, n) {
                return r += "." + o + "-" + i.name + "-" + e + " {\n", t.each(n, function (e, i) {
                    return f[e] && t.each(f[e], function (t, n) {
                        return r += "\t" + n + e + ": " + i + ";\n"
                    }), r += "\t" + e + ": " + i + ";\n"
                }), r += "}\n"
            }), i.css && (r += "/* styles for " + i.name + " */\n" + i.css), r && (i.cssElem = w(r), i.cssElem.attr("id", "notify-" + i.name));
            var a = {}, l = t(i.html);
            y("html", l, a), y("text", l, a), i.fields = a
        }, w = function (e) {
            var i;
            i = C("style"), i.attr("type", "text/css"), t("head").append(i);
            try {
                i.html(e)
            } catch (t) {
                i[0].styleSheet.cssText = e
            }
            return i
        }, y = function (e, i, n) {
            var o;
            return "html" !== e && (e = "text"), o = "data-notify-" + e, b(i, "[" + o + "]").each(function () {
                var i;
                i = t(this).attr(o), i || (i = s), n[i] = e
            })
        }, b = function (t, e) {
            return t.is(e) ? t : t.find(e)
        }, x = {
            clickToHide: !0,
            autoHide: !0,
            autoHideDelay: 5e3,
            arrowShow: !0,
            arrowSize: 5,
            breakNewLines: !0,
            elementPosition: "bottom",
            globalPosition: "top right",
            style: "bootstrap",
            className: "error",
            showAnimation: "slideDown",
            showDuration: 400,
            hideAnimation: "slideUp",
            hideDuration: 200,
            gap: 5
        }, T = function (e, i) {
            var n;
            return n = function () {
            }, n.prototype = e, t.extend(!0, new n, i)
        }, z = function (e) {
            return t.extend(x, e)
        }, C = function (e) {
            return t("<" + e + "></" + e + ">")
        }, k = {}, S = function (e) {
            var i;
            return e.is("[type=radio]") && (i = e.parents("form:first").find("[type=radio]").filter(function (i, n) {
                return t(n).attr("name") === e.attr("name")
            }), e = i.first()), e
        }, $ = function (t, e, i) {
            var n;
            if ("string" == typeof i) i = parseInt(i, 10); else if ("number" != typeof i) return;
            if (!isNaN(i)) return n = r[c[e.charAt(0)]], e, void 0 !== t[n] && (e = r[n.charAt(0)], i = -i), void 0 === t[e] ? t[e] = i : t[e] += i, null
        }, A = function (t, e, i) {
            if ("l" === t || "t" === t) return 0;
            if ("c" === t || "m" === t) return i / 2 - e / 2;
            if ("r" === t || "b" === t) return i - e;
            throw"Invalid alignment"
        }, E = function (t) {
            return E.e = E.e || C("div"), E.e.text(t).html()
        };
    e.prototype.loadHTML = function () {
        var e;
        e = this.getStyle(), this.userContainer = t(e.html), this.userFields = e.fields
    }, e.prototype.show = function (t, e) {
        var i, n, o, s, r;
        if (n = function (i) {
            return function () {
                if (!t && !i.elem && i.destroy(), e) return e()
            }
        }(this), r = this.container.parent().parents(":hidden").length > 0, o = this.container.add(this.arrow), i = [], r && t) s = "show"; else if (r && !t) s = "hide"; else if (!r && t) s = this.options.showAnimation, i.push(this.options.showDuration); else {
            if (r || t) return n();
            s = this.options.hideAnimation, i.push(this.options.hideDuration)
        }
        return i.push(n), o[s].apply(o, i)
    }, e.prototype.setGlobalPosition = function () {
        var e = this.getPosition(), i = e[0], n = e[1], s = r[i], a = r[n], l = i + "|" + n, d = k[l];
        if (!d || !document.body.contains(d[0])) {
            d = k[l] = C("div");
            var c = {};
            c[s] = 0, "middle" === a ? c.top = "45%" : "center" === a ? c.left = "45%" : c[a] = 0, d.css(c).addClass(o + "-corner"), t("body").append(d)
        }
        return d.prepend(this.wrapper)
    }, e.prototype.setElementPosition = function () {
        var e, n, o, s, h, p, u, f, g, m, v, w, y, b, x, T, z, C, k, S, E, _, W, L, O, H, D, P;
        for (H = this.getPosition(), W = H[0], _ = H[1], H[2], v = this.elem.position(), f = this.elem.outerHeight(), w = this.elem.outerWidth(), g = this.elem.innerHeight(), m = this.elem.innerWidth(), P = this.wrapper.position(), h = this.container.height(), p = this.container.width(), C = r[W], S = c[W], E = r[S], u = {}, u[E] = "b" === W ? f : "r" === W ? w : 0, $(u, "top", v.top - P.top), $(u, "left", v.left - P.left), D = ["top", "left"], b = 0, T = D.length; b < T; b++) L = D[b], (k = parseInt(this.elem.css("margin-" + L), 10)) && $(u, L, k);
        if (y = Math.max(0, this.options.gap - (this.options.arrowShow ? o : 0)), $(u, E, y), this.options.arrowShow) {
            for (o = this.options.arrowSize, n = t.extend({}, u), e = this.userContainer.css("border-color") || this.userContainer.css("border-top-color") || this.userContainer.css("background-color") || "white", x = 0, z = d.length; x < z; x++) L = d[x], O = r[L], L !== S && (s = O === C ? e : "transparent", n["border-" + O] = o + "px solid " + s);
            $(u, r[S], o), i.call(d, _) >= 0 && $(n, r[_], 2 * o)
        } else this.arrow.hide();
        if (i.call(l, W) >= 0 ? ($(u, "left", A(_, p, w)), n && $(n, "left", A(_, o, m))) : i.call(a, W) >= 0 && ($(u, "top", A(_, h, f)), n && $(n, "top", A(_, o, g))), this.container.is(":visible") && (u.display = "block"), this.container.removeAttr("style").css(u), n) return this.arrow.removeAttr("style").css(n)
    }, e.prototype.getPosition = function () {
        var t, e, n, o, s, r, c, p;
        if (p = this.options.position || (this.elem ? this.options.elementPosition : this.options.globalPosition), t = h(p), 0 === t.length && (t[0] = "b"), e = t[0], i.call(d, e) < 0) throw"Must be one of [" + d + "]";
        return (1 === t.length || (n = t[0], i.call(l, n) >= 0 && (o = t[1], i.call(a, o) < 0)) || (s = t[0], i.call(a, s) >= 0 && (r = t[1], i.call(l, r) < 0))) && (t[1] = (c = t[0], i.call(a, c) >= 0 ? "m" : "l")), 2 === t.length && (t[2] = t[1]), t
    }, e.prototype.getStyle = function (t) {
        var e;
        if (t || (t = this.options.style), t || (t = "default"), e = p[t], !e) throw"Missing style: " + t;
        return e
    }, e.prototype.updateClasses = function () {
        var e, i;
        return e = ["base"], t.isArray(this.options.className) ? e = e.concat(this.options.className) : this.options.className && e.push(this.options.className), i = this.getStyle(), e = t.map(e, function (t) {
            return o + "-" + i.name + "-" + t
        }).join(" "), this.userContainer.attr("class", e)
    }, e.prototype.run = function (e, i) {
        var n, o, r, a, l;
        if (t.isPlainObject(i) ? t.extend(this.options, i) : "string" === t.type(i) && (this.options.className = i), this.container && !e) return void this.show(!1);
        if (this.container || e) {
            o = {}, t.isPlainObject(e) ? o = e : o[s] = e;
            for (r in o) n = o[r], a = this.userFields[r], a && ("text" === a && (n = E(n), this.options.breakNewLines && (n = n.replace(/\n/g, "<br/>"))), l = r === s ? "" : "=" + r, b(this.userContainer, "[data-notify-" + a + l + "]").html(n));
            this.updateClasses(), this.elem ? this.setElementPosition() : this.setGlobalPosition(), this.show(!0), this.options.autoHide && (clearTimeout(this.autohideTimer), this.autohideTimer = setTimeout(this.show.bind(this, !1), this.options.autoHideDelay))
        }
    }, e.prototype.destroy = function () {
        this.wrapper.data(o, null), this.wrapper.remove()
    }, t[n] = function (i, o, s) {
        return i && i.nodeName || i.jquery ? t(i)[n](o, s) : (s = o, o = i, new e(null, o, s)), i
    }, t.fn[n] = function (i, n) {
        return t(this).each(function () {
            var s = S(t(this)).data(o);
            s && s.destroy();
            new e(t(this), i, n)
        }), this
    }, t.extend(t[n], {
        defaults: z,
        addStyle: v,
        removeStyle: m,
        pluginOptions: x,
        getStyle: g,
        insertCSS: w
    }), v("bootstrap", {
        html: "<div>\n<span data-notify-text></span>\n</div>",
        classes: {
            base: {
                "font-weight": "bold",
                padding: "8px 15px 8px 14px",
                "text-shadow": "0 1px 0 rgba(255, 255, 255, 0.5)",
                "background-color": "#fcf8e3",
                border: "1px solid #fbeed5",
                "border-radius": "4px",
                "white-space": "nowrap",
                "padding-left": "25px",
                "background-repeat": "no-repeat",
                "background-position": "3px 7px"
            },
            error: {
                color: "#B94A48",
                "background-color": "#F2DEDE",
                "border-color": "#EED3D7",
                "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtRJREFUeNqkVc1u00AQHq+dOD+0poIQfkIjalW0SEGqRMuRnHos3DjwAH0ArlyQeANOOSMeAA5VjyBxKBQhgSpVUKKQNGloFdw4cWw2jtfMOna6JOUArDTazXi/b3dm55socPqQhFka++aHBsI8GsopRJERNFlY88FCEk9Yiwf8RhgRyaHFQpPHCDmZG5oX2ui2yilkcTT1AcDsbYC1NMAyOi7zTX2Agx7A9luAl88BauiiQ/cJaZQfIpAlngDcvZZMrl8vFPK5+XktrWlx3/ehZ5r9+t6e+WVnp1pxnNIjgBe4/6dAysQc8dsmHwPcW9C0h3fW1hans1ltwJhy0GxK7XZbUlMp5Ww2eyan6+ft/f2FAqXGK4CvQk5HueFz7D6GOZtIrK+srupdx1GRBBqNBtzc2AiMr7nPplRdKhb1q6q6zjFhrklEFOUutoQ50xcX86ZlqaZpQrfbBdu2R6/G19zX6XSgh6RX5ubyHCM8nqSID6ICrGiZjGYYxojEsiw4PDwMSL5VKsC8Yf4VRYFzMzMaxwjlJSlCyAQ9l0CW44PBADzXhe7xMdi9HtTrdYjFYkDQL0cn4Xdq2/EAE+InCnvADTf2eah4Sx9vExQjkqXT6aAERICMewd/UAp/IeYANM2joxt+q5VI+ieq2i0Wg3l6DNzHwTERPgo1ko7XBXj3vdlsT2F+UuhIhYkp7u7CarkcrFOCtR3H5JiwbAIeImjT/YQKKBtGjRFCU5IUgFRe7fF4cCNVIPMYo3VKqxwjyNAXNepuopyqnld602qVsfRpEkkz+GFL1wPj6ySXBpJtWVa5xlhpcyhBNwpZHmtX8AGgfIExo0ZpzkWVTBGiXCSEaHh62/PoR0p/vHaczxXGnj4bSo+G78lELU80h1uogBwWLf5YlsPmgDEd4M236xjm+8nm4IuE/9u+/PH2JXZfbwz4zw1WbO+SQPpXfwG/BBgAhCNZiSb/pOQAAAAASUVORK5CYII=)"
            },
            success: {
                color: "#468847",
                "background-color": "#DFF0D8",
                "border-color": "#D6E9C6",
                "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAutJREFUeNq0lctPE0Ecx38zu/RFS1EryqtgJFA08YCiMZIAQQ4eRG8eDGdPJiYeTIwHTfwPiAcvXIwXLwoXPaDxkWgQ6islKlJLSQWLUraPLTv7Gme32zoF9KSTfLO7v53vZ3d/M7/fIth+IO6INt2jjoA7bjHCJoAlzCRw59YwHYjBnfMPqAKWQYKjGkfCJqAF0xwZjipQtA3MxeSG87VhOOYegVrUCy7UZM9S6TLIdAamySTclZdYhFhRHloGYg7mgZv1Zzztvgud7V1tbQ2twYA34LJmF4p5dXF1KTufnE+SxeJtuCZNsLDCQU0+RyKTF27Unw101l8e6hns3u0PBalORVVVkcaEKBJDgV3+cGM4tKKmI+ohlIGnygKX00rSBfszz/n2uXv81wd6+rt1orsZCHRdr1Imk2F2Kob3hutSxW8thsd8AXNaln9D7CTfA6O+0UgkMuwVvEFFUbbAcrkcTA8+AtOk8E6KiQiDmMFSDqZItAzEVQviRkdDdaFgPp8HSZKAEAL5Qh7Sq2lIJBJwv2scUqkUnKoZgNhcDKhKg5aH+1IkcouCAdFGAQsuWZYhOjwFHQ96oagWgRoUov1T9kRBEODAwxM2QtEUl+Wp+Ln9VRo6BcMw4ErHRYjH4/B26AlQoQQTRdHWwcd9AH57+UAXddvDD37DmrBBV34WfqiXPl61g+vr6xA9zsGeM9gOdsNXkgpEtTwVvwOklXLKm6+/p5ezwk4B+j6droBs2CsGa/gNs6RIxazl4Tc25mpTgw/apPR1LYlNRFAzgsOxkyXYLIM1V8NMwyAkJSctD1eGVKiq5wWjSPdjmeTkiKvVW4f2YPHWl3GAVq6ymcyCTgovM3FzyRiDe2TaKcEKsLpJvNHjZgPNqEtyi6mZIm4SRFyLMUsONSSdkPeFtY1n0mczoY3BHTLhwPRy9/lzcziCw9ACI+yql0VLzcGAZbYSM5CCSZg1/9oc/nn7+i8N9p/8An4JMADxhH+xHfuiKwAAAABJRU5ErkJggg==)"
            },
            info: {
                color: "#3A87AD",
                "background-color": "#D9EDF7",
                "border-color": "#BCE8F1",
                "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QYFAhkSsdes/QAAA8dJREFUOMvVlGtMW2UYx//POaWHXg6lLaW0ypAtw1UCgbniNOLcVOLmAjHZolOYlxmTGXVZdAnRfXQm+7SoU4mXaOaiZsEpC9FkiQs6Z6bdCnNYruM6KNBw6YWewzl9z+sHImEWv+vz7XmT95f/+3/+7wP814v+efDOV3/SoX3lHAA+6ODeUFfMfjOWMADgdk+eEKz0pF7aQdMAcOKLLjrcVMVX3xdWN29/GhYP7SvnP0cWfS8caSkfHZsPE9Fgnt02JNutQ0QYHB2dDz9/pKX8QjjuO9xUxd/66HdxTeCHZ3rojQObGQBcuNjfplkD3b19Y/6MrimSaKgSMmpGU5WevmE/swa6Oy73tQHA0Rdr2Mmv/6A1n9w9suQ7097Z9lM4FlTgTDrzZTu4StXVfpiI48rVcUDM5cmEksrFnHxfpTtU/3BFQzCQF/2bYVoNbH7zmItbSoMj40JSzmMyX5qDvriA7QdrIIpA+3cdsMpu0nXI8cV0MtKXCPZev+gCEM1S2NHPvWfP/hL+7FSr3+0p5RBEyhEN5JCKYr8XnASMT0xBNyzQGQeI8fjsGD39RMPk7se2bd5ZtTyoFYXftF6y37gx7NeUtJJOTFlAHDZLDuILU3j3+H5oOrD3yWbIztugaAzgnBKJuBLpGfQrS8wO4FZgV+c1IxaLgWVU0tMLEETCos4xMzEIv9cJXQcyagIwigDGwJgOAtHAwAhisQUjy0ORGERiELgG4iakkzo4MYAxcM5hAMi1WWG1yYCJIcMUaBkVRLdGeSU2995TLWzcUAzONJ7J6FBVBYIggMzmFbvdBV44Corg8vjhzC+EJEl8U1kJtgYrhCzgc/vvTwXKSib1paRFVRVORDAJAsw5FuTaJEhWM2SHB3mOAlhkNxwuLzeJsGwqWzf5TFNdKgtY5qHp6ZFf67Y/sAVadCaVY5YACDDb3Oi4NIjLnWMw2QthCBIsVhsUTU9tvXsjeq9+X1d75/KEs4LNOfcdf/+HthMnvwxOD0wmHaXr7ZItn2wuH2SnBzbZAbPJwpPx+VQuzcm7dgRCB57a1uBzUDRL4bfnI0RE0eaXd9W89mpjqHZnUI5Hh2l2dkZZUhOqpi2qSmpOmZ64Tuu9qlz/SEXo6MEHa3wOip46F1n7633eekV8ds8Wxjn37Wl63VVa+ej5oeEZ/82ZBETJjpJ1Rbij2D3Z/1trXUvLsblCK0XfOx0SX2kMsn9dX+d+7Kf6h8o4AIykuffjT8L20LU+w4AZd5VvEPY+XpWqLV327HR7DzXuDnD8r+ovkBehJ8i+y8YAAAAASUVORK5CYII=)"
            },
            warn: {
                color: "#C09853",
                "background-color": "#FCF8E3",
                "border-color": "#FBEED5",
                "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABJlBMVEXr6eb/2oD/wi7/xjr/0mP/ykf/tQD/vBj/3o7/uQ//vyL/twebhgD/4pzX1K3z8e349vK6tHCilCWbiQymn0jGworr6dXQza3HxcKkn1vWvV/5uRfk4dXZ1bD18+/52YebiAmyr5S9mhCzrWq5t6ufjRH54aLs0oS+qD751XqPhAybhwXsujG3sm+Zk0PTwG6Shg+PhhObhwOPgQL4zV2nlyrf27uLfgCPhRHu7OmLgAafkyiWkD3l49ibiAfTs0C+lgCniwD4sgDJxqOilzDWowWFfAH08uebig6qpFHBvH/aw26FfQTQzsvy8OyEfz20r3jAvaKbhgG9q0nc2LbZxXanoUu/u5WSggCtp1anpJKdmFz/zlX/1nGJiYmuq5Dx7+sAAADoPUZSAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfdBgUBGhh4aah5AAAAlklEQVQY02NgoBIIE8EUcwn1FkIXM1Tj5dDUQhPU502Mi7XXQxGz5uVIjGOJUUUW81HnYEyMi2HVcUOICQZzMMYmxrEyMylJwgUt5BljWRLjmJm4pI1hYp5SQLGYxDgmLnZOVxuooClIDKgXKMbN5ggV1ACLJcaBxNgcoiGCBiZwdWxOETBDrTyEFey0jYJ4eHjMGWgEAIpRFRCUt08qAAAAAElFTkSuQmCC)"
            }
        }
    }), t(function () {
        w(u.css).attr("id", "core-notify"), t(document).on("click", "." + o + "-hidable", function (e) {
            t(this).trigger("notify-hide")
        }), t(document).on("notify-hide", "." + o + "-wrapper", function (e) {
            var i = t(this).data(o);
            i && i.show(!1)
        })
    })
});