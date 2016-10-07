/*! tinyColorPicker - v1.0.0 2015-03-31 */ ! function(a, b) {
    "use strict";

    function c(a, c, d, f, g) {
        if ("string" == typeof c) {
            var c = t.txt2color(c);
            d = c.type, n[d] = c[d], g = g !== b ? g : c.alpha
        } else if (c)
            for (var h in c) a[d][h] = k(c[h] / l[d][h][1], 0, 1);
        return g !== b && (a.alpha = +g), e(d, f ? a : b)
    }

    function d(a, b, c) {
        var d = m.options.grey,
            e = {};
        return e.RGB = {
            r: a.r,
            g: a.g,
            b: a.b
        }, e.rgb = {
            r: b.r,
            g: b.g,
            b: b.b
        }, e.alpha = c, e.equivalentGrey = Math.round(d.r * a.r + d.g * a.g + d.b * a.b), e.rgbaMixBlack = i(b, {
            r: 0,
            g: 0,
            b: 0
        }, c, 1), e.rgbaMixWhite = i(b, {
            r: 1,
            g: 1,
            b: 1
        }, c, 1), e.rgbaMixBlack.luminance = h(e.rgbaMixBlack, !0), e.rgbaMixWhite.luminance = h(e.rgbaMixWhite, !0), m.options.customBG && (e.rgbaMixCustom = i(b, m.options.customBG, c, 1), e.rgbaMixCustom.luminance = h(e.rgbaMixCustom, !0), m.options.customBG.luminance = h(m.options.customBG, !0)), e
    }

    function e(a, b) {
        var c, e, k, o = b || n,
            p = t,
            q = m.options,
            r = l,
            s = o.RND,
            u = "",
            v = "",
            w = {
                hsl: "hsv",
                rgb: a
            },
            x = s.rgb;
        if ("alpha" !== a) {
            for (var y in r)
                if (!r[y][y]) {
                    a !== y && (v = w[y] || "rgb", o[y] = p[v + "2" + y](o[v])), s[y] || (s[y] = {}), c = o[y];
                    for (u in c) s[y][u] = Math.round(c[u] * r[y][u][1])
                }
            x = s.rgb, o.HEX = p.RGB2HEX(x), o.equivalentGrey = q.grey.r * o.rgb.r + q.grey.g * o.rgb.g + q.grey.b * o.rgb.b, o.webSave = e = f(x, 51), o.webSmart = k = f(x, 17), o.saveColor = x.r === e.r && x.g === e.g && x.b === e.b ? "web save" : x.r === k.r && x.g === k.g && x.b === k.b ? "web smart" : "", o.hueRGB = t.hue2RGB(o.hsv.h), b && (o.background = d(x, o.rgb, o.alpha))
        }
        var z, A, B, C = o.rgb,
            D = o.alpha,
            E = "luminance",
            F = o.background;
        return z = i(C, {
            r: 0,
            g: 0,
            b: 0
        }, D, 1), z[E] = h(z, !0), o.rgbaMixBlack = z, A = i(C, {
            r: 1,
            g: 1,
            b: 1
        }, D, 1), A[E] = h(A, !0), o.rgbaMixWhite = A, q.customBG && (B = i(C, F.rgbaMixCustom, D, 1), B[E] = h(B, !0), B.WCAG2Ratio = j(B[E], F.rgbaMixCustom[E]), o.rgbaMixBGMixCustom = B, B.luminanceDelta = Math.abs(B[E] - F.rgbaMixCustom[E]), B.hueDelta = g(F.rgbaMixCustom, B, !0)), o.RGBLuminance = h(x), o.HUELuminance = h(o.hueRGB), q.convertCallback && q.convertCallback(o, a), o
    }

    function f(a, b) {
        var c = {},
            d = 0,
            e = b / 2;
        for (var f in a) d = a[f] % b, c[f] = a[f] + (d > e ? b - d : -d);
        return c
    }

    function g(a, b, c) {
        return (Math.max(a.r - b.r, b.r - a.r) + Math.max(a.g - b.g, b.g - a.g) + Math.max(a.b - b.b, b.b - a.b)) * (c ? 255 : 1) / 765
    }

    function h(a, b) {
        for (var c = b ? 1 : 255, d = [a.r / c, a.g / c, a.b / c], e = m.options.luminance, f = d.length; f--;) d[f] = d[f] <= .03928 ? d[f] / 12.92 : Math.pow((d[f] + .055) / 1.055, 2.4);
        return e.r * d[0] + e.g * d[1] + e.b * d[2]
    }

    function i(a, c, d, e) {
        var f = {},
            g = d !== b ? d : 1,
            h = e !== b ? e : 1,
            i = g + h * (1 - g);
        for (var j in a) f[j] = (a[j] * g + c[j] * h * (1 - g)) / i;
        return f.a = i, f
    }

    function j(a, b) {
        var c = 1;
        return c = a >= b ? (a + .05) / (b + .05) : (b + .05) / (a + .05), Math.round(100 * c) / 100
    }

    function k(a, b, c) {
        return a > c ? c : b > a ? b : a
    }
    var l = {
            rgb: {
                r: [0, 255],
                g: [0, 255],
                b: [0, 255]
            },
            hsv: {
                h: [0, 360],
                s: [0, 100],
                v: [0, 100]
            },
            hsl: {
                h: [0, 360],
                s: [0, 100],
                l: [0, 100]
            },
            alpha: {
                alpha: [0, 1]
            },
            HEX: {
                HEX: [0, 16777215]
            }
        },
        m = {},
        n = {},
        o = {
            r: .298954,
            g: .586434,
            b: .114612
        },
        p = {
            r: .2126,
            g: .7152,
            b: .0722
        },
        q = a.Colors = function(a) {
            this.colors = {
                RND: {}
            }, this.options = {
                color: "rgba(204, 82, 37, 0.8)",
                grey: o,
                luminance: p,
                valueRanges: l
            }, r(this, a || {})
        },
        r = function(a, d) {
            var e, f = a.options;
            s(a);
            for (var g in d) d[g] !== b && (f[g] = d[g]);
            e = f.customBG, f.customBG = "string" == typeof e ? t.txt2color(e).rgb : e, n = c(a.colors, f.color, b, !0)
        },
        s = function(a) {
            m !== a && (m = a, n = a.colors)
        };
    q.prototype.setColor = function(a, d, f) {
        return s(this), a ? c(this.colors, a, d, b, f) : (f !== b && (this.colors.alpha = f), e(d))
    }, q.prototype.setCustomBackground = function(a) {
        return s(this), this.options.customBG = "string" == typeof a ? t.txt2color(a).rgb : a, c(this.colors, b, "rgb")
    }, q.prototype.saveAsBackground = function() {
        return s(this), c(this.colors, b, "rgb", !0)
    };
    var t = {
        txt2color: function(a) {
            var b = {},
                c = a.replace(/(?:#|\)|%)/g, "").split("("),
                d = (c[1] || "").split(/,\s*/),
                e = c[1] ? c[0].substr(0, 3) : "rgb",
                f = "";
            if (b.type = e, b[e] = {}, c[1])
                for (var g = 3; g--;) f = e[g] || e.charAt(g), b[e][f] = +d[g] / l[e][f][1];
            else b.rgb = t.HEX2rgb(c[0]);
            return b.alpha = d[3] ? +d[3] : 1, b
        },
        RGB2HEX: function(a) {
            return ((a.r < 16 ? "0" : "") + a.r.toString(16) + (a.g < 16 ? "0" : "") + a.g.toString(16) + (a.b < 16 ? "0" : "") + a.b.toString(16)).toUpperCase()
        },
        HEX2rgb: function(a) {
            return a = a.split(""), {
                r: parseInt(a[0] + a[a[3] ? 1 : 0], 16) / 255,
                g: parseInt(a[a[3] ? 2 : 1] + (a[3] || a[1]), 16) / 255,
                b: parseInt((a[4] || a[2]) + (a[5] || a[2]), 16) / 255
            }
        },
        hue2RGB: function(a) {
            var b = 6 * a,
                c = ~~b % 6,
                d = 6 === b ? 0 : b - c;
            return {
                r: Math.round(255 * [1, 1 - d, 0, 0, d, 1][c]),
                g: Math.round(255 * [d, 1, 1, 1 - d, 0, 0][c]),
                b: Math.round(255 * [0, 0, d, 1, 1, 1 - d][c])
            }
        },
        rgb2hsv: function(a) {
            var b, c, d, e = a.r,
                f = a.g,
                g = a.b,
                h = 0;
            return g > f && (f = g + (g = f, 0), h = -1), c = g, f > e && (e = f + (f = e, 0), h = -2 / 6 - h, c = Math.min(f, g)), b = e - c, d = e ? b / e : 0, {
                h: 1e-15 > d ? n && n.hsl && n.hsl.h || 0 : b ? Math.abs(h + (f - g) / (6 * b)) : 0,
                s: e ? b / e : n && n.hsv && n.hsv.s || 0,
                v: e
            }
        },
        hsv2rgb: function(a) {
            var b = 6 * a.h,
                c = a.s,
                d = a.v,
                e = ~~b,
                f = b - e,
                g = d * (1 - c),
                h = d * (1 - f * c),
                i = d * (1 - (1 - f) * c),
                j = e % 6;
            return {
                r: [d, h, g, g, i, d][j],
                g: [i, d, d, h, g, g][j],
                b: [g, g, i, d, d, h][j]
            }
        },
        hsv2hsl: function(a) {
            var b = (2 - a.s) * a.v,
                c = a.s * a.v;
            return c = a.s ? 1 > b ? b ? c / b : 0 : c / (2 - b) : 0, {
                h: a.h,
                s: a.v || c ? c : n && n.hsl && n.hsl.s || 0,
                l: b / 2
            }
        },
        rgb2hsl: function(a, b) {
            var c = t.rgb2hsv(a);
            return t.hsv2hsl(b ? c : n.hsv = c)
        },
        hsl2rgb: function(a) {
            var b = 6 * a.h,
                c = a.s,
                d = a.l,
                e = .5 > d ? d * (1 + c) : d + c - c * d,
                f = d + d - e,
                g = e ? (e - f) / e : 0,
                h = ~~b,
                i = b - h,
                j = e * g * i,
                k = f + j,
                l = e - j,
                m = h % 6;
            return {
                r: [e, l, f, f, k, e][m],
                g: [k, e, e, l, f, f][m],
                b: [f, f, k, e, e, l][m]
            }
        }
    }
}(window);
! function(a, b, c) {
    "use strict";

    function d(b) {
        return b.value || b.getAttribute("value") || a(b).css("background-color") || "#fff"
    }

    function e(a) {
        return a.originalEvent.touches ? a.originalEvent.touches[0] : a
    }

    function f(b) {
        return a(b.find(s.doRender)[0] || b[0])
    }

    function g(b) {
        var c = a(this),
            e = c.offset(),
            g = a(window),
            i = s.gap;
        b ? (t = f(c), q.$trigger = c, (u || h()).css({
            left: (u[0]._left = e.left) - ((u[0]._left = u[0]._left + u[0]._width - (g.scrollLeft() + g.width())) + i > 0 ? u[0]._left + i : 0),
            top: (u[0]._top = e.top + c.outerHeight()) - ((u[0]._top = u[0]._top + u[0]._height - (g.scrollTop() + g.height())) + i > 0 ? u[0]._top + i : 0)
        }).show(s.animationSpeed, function() {
            b !== !0 && (y._width = y.width(), v._width = v.width(), v._height = v.height(), r.setColor(d(t[0])), n(!0))
        })) : a(u).hide(s.animationSpeed, function() {
            t.blur(), q.$trigger = null, n(!1)
        })
    }

    function h() {
        return a("head").append('<style type="text/css">' + (s.css || H) + (s.cssAddon || "") + "</style>"), q.$UI = u = a(G).css({
            margin: s.margin
        }).appendTo("body").show(0, function() {
            var b = a(this);
            E = s.GPU && b.css("perspective") !== c, v = a(".cp-xy-slider", this), w = a(".cp-xy-cursor", this), x = a(".cp-z-cursor", this), y = a(".cp-alpha", this).toggle(!!s.opacity), z = a(".cp-alpha-cursor", this), s.buildCallback.call(q, b), b.prepend("<div>").children().eq(0).css("width", b.children().eq(0).width()), this._width = this.offsetWidth, this._height = this.offsetHeight
        }).hide().on("touchstart mousedown pointerdown", ".cp-xy-slider,.cp-z-slider,.cp-alpha", i)
    }

    function i(b) {
        var c = this.className.replace(/cp-(.*?)(?:\s*|$)/, "$1").replace("-", "_");
        b.preventDefault && b.preventDefault(), b.returnValue = !1, t._offset = a(this).offset(), (c = "xy_slider" === c ? k : "z_slider" === c ? l : m)(b), A.on(D, j).on(C, c)
    }

    function j() {
        A.off(C).off(D)
    }

    function k(a) {
        var b = e(a),
            c = b.pageX - t._offset.left,
            d = b.pageY - t._offset.top;
        r.setColor({
            s: c / v._width * 100,
            v: 100 - d / v._height * 100
        }, "hsv"), n()
    }

    function l(a) {
        {
            var b = e(a).pageY - t._offset.top;
            r.colors.hsv
        }
        r.setColor({
            h: 360 - b / v._height * 360
        }, "hsv"), n()
    }

    function m(a) {
        var b = e(a).pageX - t._offset.left,
            c = b / y._width;
        r.setColor({}, "rgb", c > 1 ? 1 : 0 > c ? 0 : c), n()
    }

    function n(a) {
        var b = r.colors,
            d = b.hueRGB,
            e = b.RND.rgb,
            f = b.RND.hsl,
            g = "#222",
            h = "#ddd",
            i = t.data("colorMode"),
            j = 1 !== b.alpha,
            k = Math.round(100 * b.alpha) / 100,
            l = e.r + ", " + e.g + ", " + e.b,
            m = "HEX" !== i || j ? "rgb" === i || "HEX" === i && j ? j ? "rgba(" + l + ", " + k + ")" : "rgb(" + l + ")" : "hsl" + (j ? "a(" : "(") + f.h + ", " + f.s + "%, " + f.l + "%" + (j ? ", " + k : "") + ")" : "#" + b.HEX,
            n = b.HUELuminance > .22 ? g : h,
            p = b.rgbaMixBlack.luminance > .22 ? g : h,
            q = (1 - b.hsv.h) * v._height,
            s = b.hsv.s * v._width,
            u = (1 - b.hsv.v) * v._height,
            A = k * y._width,
            B = E ? "translate3d" : "",
            C = t.val(),
            D = t[0].hasAttribute("value") && "" === C && a !== c;
        v._css = {
            backgroundColor: "rgb(" + d.r + "," + d.g + "," + d.b + ")"
        }, w._css = {
            transform: B + "(" + s + "px, " + u + "px, 0)",
            left: E ? "" : s,
            top: E ? "" : u,
            borderColor: b.RGBLuminance > .22 ? g : h
        }, x._css = {
            transform: B + "(0, " + q + "px, 0)",
            top: E ? "" : q,
            borderColor: "transparent " + n
        }, y._css = {
            backgroundColor: "rgb(" + l + ")"
        }, z._css = {
            transform: B + "(" + A + "px, 0, 0)",
            left: E ? "" : A,
            borderColor: p + " transparent"
        }, t._css = {
            backgroundColor: D ? "" : m,
            color: D ? "" : b.rgbaMixBGMixCustom.luminance > .22 ? g : h
        }, t.text = D ? "" : C !== m ? m : "", a !== c ? o(a) : F(o)
    }

    function o(a) {
        v.css(v._css), w.css(w._css), x.css(x._css), y.css(y._css), z.css(z._css), s.doRender && t.css(t._css), t.text && t.val(t.text), s.renderCallback.call(q, t, "boolean" == typeof a ? a : c)
    }
    var p, q, r, s, t, u, v, w, x, y, z, A = a(document),
        B = "",
        C = "touchmove mousemove pointermove",
        D = "touchend mouseup pointerup",
        E = !1,
        F = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(a) {
            a()
        },
        G = '<div class="cp-color-picker"><div class="cp-z-slider"><div class="cp-z-cursor"></div></div><div class="cp-xy-slider"><div class="cp-white"></div><div class="cp-xy-cursor"></div></div><div style="display: none;"><div class="cp-alpha" ><div class="cp-alpha-cursor"></div></div></div></div>',
        H = ".cp-color-picker{position:absolute;overflow:hidden;padding:6px 6px 0;background-color:#444;color:#bbb;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:400;cursor:default;border-radius:5px}.cp-color-picker>div{position:relative;overflow:hidden}.cp-xy-slider{float:left;height:128px;width:128px;margin-bottom:6px;background:linear-gradient(to right,#FFF,rgba(255,255,255,0))}.cp-white{height:100%;width:100%;background:linear-gradient(rgba(0,0,0,0),#000)}.cp-xy-cursor{position:absolute;top:0;width:10px;height:10px;margin:-5px;border:1px solid #fff;border-radius:100%;box-sizing:border-box}.cp-z-slider{float:right;margin-left:6px;height:128px;width:20px;background:linear-gradient(red 0,#f0f 17%,#00f 33%,#0ff 50%,#0f0 67%,#ff0 83%,red 100%)}.cp-z-cursor{position:absolute;margin-top:-4px;width:100%;border:4px solid #fff;border-color:transparent #fff;box-sizing:border-box}.cp-alpha{clear:both;width:100%;height:16px;margin:6px 0;background:linear-gradient(to right,#444,rgba(0,0,0,0))}.cp-alpha-cursor{position:absolute;margin-left:-4px;height:100%;border:4px solid #fff;border-color:#fff transparent;box-sizing:border-box}",
        I = function(a) {
            r = this.color = new b(a), s = r.options
        };
    I.prototype = {
        render: n,
        toggle: g
    }, a.fn.colorPicker = function(b) {
        var c = function() {};
        return b = a.extend({
            animationSpeed: 150,
            GPU: !0,
            doRender: !0,
            customBG: "#FFF",
            opacity: !0,
            renderCallback: c,
            buildCallback: c,
            body: document.body,
            scrollResize: !0,
            gap: 4
        }, b), !q && b.scrollResize && a(window).on("resize scroll", function() {
            q.$trigger && q.toggle.call(q.$trigger[0], !0)
        }), p = p ? p.add(this) : this, p.colorPicker = q || (q = new I(b)), B += (B ? ", " : "") + this.selector, a(b.body).off(".a").on("touchstart.a mousedown.a pointerdown.a", function(b) {
            var c = a(b.target); - 1 !== a.inArray(c.closest(B)[0], p) || c.closest(u).length || g()
        }).on("focus.a click.a", B, g).on("change.a", B, function() {
            r.setColor(this.value || "#FFF"), p.colorPicker.render(!0)
        }), this.each(function() {
            var c = d(this),
                e = c.split("("),
                g = f(a(this));
            g.data("colorMode", e[1] ? e[0].substr(0, 3) : "HEX").attr("readonly", s.preventFocus), b.doRender && g.css({
                "background-color": c,
                color: function() {
                    return r.setColor(c).rgbaMixBGMixCustom.luminance > .22 ? "#222" : "#ddd"
                }
            })
        })
    }
}(jQuery, Colors);
//# sourceMappingURL=jqColorPicker.js.map