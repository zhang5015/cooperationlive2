Site.ImageEffect = !!Site.ImageEffect ? Site.ImageEffect: {}; (function(a, c, b) {
    c.DATA = {};
    c.DATA.imageEffectHtml = "<div class='imageEffects imageEffectsAnimate'></div>";
    c.DATA.KEY = {
        OPT_MODULE_ID: "moduleId",
        OPT_IMG_EFF_OPTION: "imgEffOption",
        OPT_TG_OPTION: "tagetOption",
        OPT_CALLBACK: "callback",
        OPT_CALLBACK_ARGS: "callbackArgs",
        FULL_MASK_BG_STYLE: "fmbgs",
        FULL_MASK_NAME_STYLE: "fmns",
        FULL_MASK_NAME_ALIG: "fmna",
        FULL_MASK_DISC_STYLE: "fmds",
        FULL_MASK_DISC_ALIG: "fmda",
        FULL_MASK_CUS_BG: "fullMaskCusBg",
        FULL_MASK_CUS_NAME: "fullMaskCusName",
        FULL_MASK_CUS_DISC: "fullMaskCusDisc",
        FULL_MASK_OPEN_DISC: "fullMaskOpenDisc",
        HALF_MASK_BG_STYLE: "hmbgs",
        HALF_MASK_DISC_STYLE: "hmds",
        HALF_MASK_DISC_ALIG: "hmda",
        HALF_MASK_CUS_BG: "halfMaskCusBg",
        HALF_MASK_CUS_DISC: "halfMaskCusDisc",
        HALF_MASK_OPEN_DISC: "halfMaskOpenDisc",
        ALIG: {
            CENTER: 1,
            LEFT: 2,
            RIGHT: 3
        }
    };
    c.FUNC = {
        BASIC: {},
        BUS: {},
        TOOL: {}
    };
    c.ITF = {
        cardTd: Site.bindImageEffectCusEvent_photo,
        moreCardTd: Site.bindImageEffectCusEvent_photo,
        "photo-container": Site.bindImageEffectCusEvent_photo,
        photoForm: Site.bindImageEffectCusEvent_photo,
        photoMarqueeForm: Site.bindImageEffectCusEvent_photo,
        photoSmallPic_table: Site.bindImageEffectCusEvent_photo,
        productTileForm: Site.bindImageEffectCusEvent_product,
        productMarqueeForm: Site.bindImageEffectCusEvent_product,
        "product-container": Site.bindImageEffectCusEvent_product,
        productDoublePicListForm: Site.bindImageEffectCusEvent_product,
        containerLeft: Site.bindImageEffectCusEvent_product,
        productHotTextListHot: Site.bindImageEffectCusEvent_product,
        productPicListForm: Site.bindImageEffectCusEvent_product,
        floatImg_J: Site.bindImageEffectCusEvent_floatImg
    }
})(jQuery, Site.ImageEffect); (function(a, c, b) {
    c.FUNC.TOOL.resetImgEff = function(g, n, t, q) {
        var f = g.targetParent;
        var u = a(n).find("img");
        if (u.length == 0) {
            u = a(n).find(".J_fonticon")
        }
        var d = a(u).position().top;
        var h = a(u).position().left;
        var e = a(u).width();
        var l = a(u).height();
        var s = a(u).css("margin-left");
        var m = a(t).css("border-left-width");
        var i = a(n).css("padding").replace("px", "");
        var k = g.paramLayoutType || 0;
        var j = g.picScale || 0;
        var r = a(n).position().top;
        var p = a(n).height();
        var o = a(n).parent().css("padding-top").replace("px", "");
        s = c.FUNC.TOOL.parsePixelToInt(s);
        m = c.FUNC.TOOL.parsePixelToInt(m);
        if (f == "photoSmallPic_table") {
            h = 0;
            d = 0;
            s = 0;
            e = a(n).width();
            l = a(n).height();
            a(t).css("z-index", 1);
            a(t).css("left", h + s).css("top", d);
            a(t).css("width", e - (m * 2) + "px");
            a(t).css("height", l - (m * 2) + "px")
        }
        if (f == "photo-container" || f == "product-container") {
            if (q != 5) {
                if (k == 8 && q == 2) {
                    a(t).css("left", 0).css("top", r - o)
                } else {
                    a(t).css("left", h + s).css("top", d)
                }
                if ((q == 2 || q == 3 || q == 5) && j == 2) {
                    a(t).css("left", 0)
                }
            } else {
                a(t).css("left", h + s)
            }
        }
    };
    c.FUNC.TOOL.parsePixelToInt = function(d) {
        var e;
        if (typeof d == "undefined" || d == "auto") {
            e = 0
        } else {
            e = parseInt(d.replace("px"))
        }
        return e
    };
    c.FUNC.TOOL.colorRgb = function(e) {
        var g = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        var e = e.toLowerCase();
        var d = "#";
        var h = [];
        if (e && g.test(e)) {
            if (e.length === 4) {
                for (var f = 1; f < 4; f += 1) {
                    d += e.slice(f, f + 1).concat(e.slice(f, f + 1))
                }
                e = d
            }
            for (var f = 1; f < 7; f += 2) {
                h.push(parseInt("0x" + e.slice(f, f + 2)))
            }
            return h.join(",")
        } else {
            return e
        }
    }
})(jQuery, Site.ImageEffect); (function(d, f, e) {
    f.FUNC.BUS.bindImgEffCusEvent = function(h, g) {
        if (typeof f.ITF[g.targetParent] == "function") {
            f.ITF[g.targetParent](h, g)
        }
    };
    f.FUNC.BUS.ImgEffAnimate = function(m, g, k, l, h) {
        var j = {
            hover: {},
            leave: {}
        };
        var i = d(g).attr("fk_fixed");
        if ( !! !i) {
            if (d(l).hasClass("cardDiv")) {
                c(g, k, l)
            } else {
                b(g, k)
            }
        }
        a(j, g, k, h, l);
        if (!Fai.isIE()) {
            if (m == "mouseenter") {
                d(g).css(j.hover)
            } else {
                if (m == "mouseleave") {
                    d(g).css(j.leave)
                }
            }
        } else {
            if (m == "mouseenter") {
                d(g).stop().animate(j.hover, 250)
            } else {
                if (m == "mouseleave") {
                    d(g).stop().animate(j.leave, 250)
                }
            }
        }
    };
    function a(v, w, l, k, n) {
        var s = l.effType;
        var u = 1;
        if (l.imgShapeType) {
            var j = l.imgShapeType
        }
        var p;
        if (d(w).parent().hasClass("cardDiv")) {
            p = d(w).parent()
        }
        if (Fai.isIE6() || Fai.isIE7() || Fai.isIE8()) {
            if (l.backgroundType) {
                u = l.fullmaskBackgroundOpacity
            } else {
                u = 80
            }
            if (l[f.DATA.KEY.FULL_MASK_CUS_BG]) {
                var i = l[f.DATA.KEY.FULL_MASK_BG_STYLE];
                if (typeof i == "string" && i.length > 0) {
                    var h = d.parseJSON(i);
                    u = typeof h.o == "number" ? h.o: 80
                }
            }
            u /= 100
        }
        switch (s) {
        case 2:
            v.hover.opacity = 1;
            v.leave.opacity = 0;
            var m = d(n).height() || l.h,
            t = d(n).width() || l.w;
            if (j) {
                var g = parseInt(d(w).css("borderWidth"));
                if (j == 2 || j == 4) {
                    if (m > t) {
                        d(w).css({
                            height: t - 2 + "px",
                            width: t - 2 * g + "px"
                        })
                    } else {
                        d(w).css({
                            height: m - 2 * g + "px",
                            width: m - 2 * g + "px"
                        })
                    }
                }
                if (j == 1 || j == 3) {
                    d(w).css({
                        height: m - 2 * g + "px",
                        width: t - 2 * g + "px"
                    })
                }
            }
            break;
        case 3:
            v.hover.opacity = 1;
            v.leave.opacity = 0;
            break;
        case 4:
            v.hover.opacity = u;
            v.leave.opacity = 0;
            break;
        case 5:
            d(w).css("opacity", 1);
            v.hover.bottom = 0;
            v.leave.bottom = "-" + d(w).height() + "px";
            var o;
            if (p && p.length > 0) {
                o = parseFloat(p.css("margin-top").replace("px", "")) || 0;
                v.hover.bottom = -o;
                v.leave.bottom = ( - o - d(w).height()) + "px"
            }
            break;
        case 6:
            var r = parseInt(d(w).attr("_initWidth"));
            var q = parseInt(d(w).attr("_initHeight"));
            v.hover.width = r + 50;
            v.hover.height = q + 50;
            if (k == 8) {
                v.hover.margin = "-25px"
            } else {
                v.hover["margin-left"] = "-25px";
                v.hover["margin-top"] = "-25px"
            }
            if ( !! l.isFontIcon) {
                v.hover.fontSize = (r < q ? r: q) + 50 + "px";
                v.hover.lineHeight = q + 50 + "px"
            }
            v.leave.width = r;
            v.leave.height = q;
            if (k == 8) {
                v.leave.margin = "0px"
            } else {
                v.leave["margin-left"] = "0px";
                v.leave["margin-top"] = "0px"
            }
            if ( !! l.isFontIcon) {
                v.leave.fontSize = (r < q ? r: q) + "px";
                v.leave.lineHeight = q + "px"
            }
            break;
        case 7:
            v.hover["margin-left"] = "-10px";
            v.leave["margin-left"] = "0px";
            break
        }
    }
    function b(t, m) {
        var r = m.effType;
        if (r == 4) {
            var u = d(t).find(".props .propList");
            var g = d(u).height();
            var o = d(t).height();
            var q = ((o - g) / 2 - 10);
            d(u).css("padding-top", q + "px")
        }
        if (r == 5) {
            var u = d(t).find(".props .propList");
            var l = d(t).find(".props .propBuy");
            var i = d(u).height();
            var n = parseInt(d(u).css("padding-top"));
            var p = parseInt(d(u).css("margin-bottom"));
            var s = d(t).parent().find("img").position().left;
            var k = d(t).parent().find("img").css("margin-left");
            i += n + p;
            if (d(l).length > 0) {
                var j = parseInt(d(l).css("margin-top"));
                var h = d(l).height() + j + 8;
                i += h
            }
            d(t).css({
                height: i + "px",
                bottom: "-" + i + "px",
                left: s + k + "px"
            })
        }
        d(t).attr("fk_fixed", 1)
    }
    function c(j, s, A) {
        var t = s.effType;
        var B, q, w;
        if (t == 4) {
            var h = d(A).parent(),
            o = -parseInt(d(A).css("marginLeft").replace("px", "")) || 0;
            cardDivMT = -parseInt(d(A).css("marginTop").replace("px", "")) || 0;
            d(j).css({
                width: h.width() + "px",
                height: h.height() + "px",
                left: o + "px",
                top: cardDivMT + "px"
            });
            var n = d(j).find(".props .propList");
            var r = d(n).height();
            var u = d(j).height();
            var z = ((u - r) / 2);
            d(n).css("padding-top", z + "px")
        } else {
            if (t == 5) {
                var j = d(A).find(".imageEffects");
                B = d(A).parent();
                q = d(B).width();
                w = d(B).height();
                var m = d(B).css("margin-left"),
                l = parseFloat(d(A).css("margin-left").replace("px", ""));
                var m = f.FUNC.TOOL.parsePixelToInt(m);
                d(j).removeClass("imageEffectsAnimate").addClass("imageEffectsAnimate_Half");
                d(j).css("width", q);
                var g = d(n).height(),
                n = d(j).find(".props .propList"),
                v = d(j).find(".props .propBuy"),
                g = d(n).height(),
                x = parseInt(d(n).css("padding-top")),
                p = parseInt(d(n).css("margin-bottom")),
                i = d(j).parent().find("img").position().left;
                if (g > 0) {
                    g += x + p
                }
                if (d(v).length > 0) {
                    var k = parseInt(d(v).css("margin-top"));
                    var y = d(v).height() + k + 8;
                    g += y
                }
                d(j).css("height", g + "px");
                d(j).css({
                    "padding-left": ( - l) + "px"
                })
            } else {
                if (t == 6) {
                    B = d(A).find("img");
                    q = B.width();
                    w = B.height();
                    if (q == 0 || w == 0) {
                        return
                    }
                    d(B).attr("_initWidth", q).attr("_initHeight", w)
                } else {
                    if (t == 7) {
                        B = d(A).find("img");
                        q = B.width();
                        if (q == 0) {
                            return
                        }
                        B.css("width", q + 10 + "px")
                    }
                }
            }
        }
        d(j).attr("fk_fixed", 1)
    }
})(jQuery, Site.ImageEffect); (function(f, h, g) {
    h.FUNC.BASIC.Init = function(q) {
        var n = {};
        n[h.DATA.KEY.OPT_MODULE_ID] = 0;
        n[h.DATA.KEY.OPT_IMG_EFF_OPTION] = {};
        n[h.DATA.KEY.OPT_TG_OPTION] = {};
        n[h.DATA.KEY.OPT_CALLBACK] = g;
        n[h.DATA.KEY.OPT_CALLBACK_ARGS] = g;
        if (q.imgShapeEff) {
            var m = q.imgShapeEff
        }
        var i = q.moduleId,
        l = q.imgEffOption;
        if ( !! !e(q, n)) {
            return
        }
        var k = f("#module" + n[h.DATA.KEY.OPT_MODULE_ID]);
        var j = n[h.DATA.KEY.OPT_IMG_EFF_OPTION].effType;
        if (j == 1 || Fai.isNull(k)) {
            return
        }
        if (k.attr("_intab") != 0) {
            h.cashOptions = h.cashOptions || {};
            h.cashOptions[q.moduleId] = q
        }
        var o = f(k).find(".imageEffects");
        var p = f(k).find("." + n[h.DATA.KEY.OPT_TG_OPTION].target);
        if (f(o).length > 0) {
            f(o).remove()
        }
        f.each(p,
        function(r, s) {
            if (j > 1 && j < 6) {
                h.FUNC.BASIC.CreateGE(s, n);
                h.FUNC.BUS.bindImgEffCusEvent(s, n[h.DATA.KEY.OPT_TG_OPTION]);
                if (j == 4 || j == 5) {
                    if (!Fai.isNull(n[h.DATA.KEY.OPT_CALLBACK])) {
                        n[h.DATA.KEY.OPT_CALLBACK](s, n[h.DATA.KEY.OPT_IMG_EFF_OPTION], n[h.DATA.KEY.OPT_TG_OPTION], n[h.DATA.KEY.OPT_CALLBACK_ARGS])
                    }
                }
            } else {
                if (j <= 7) {
                    h.FUNC.BASIC.CreateSP(s, n)
                }
            }
        });
        if (j == 8) {
            Site.hoverChangeImage(f(k))
        } else {
            f(p).off("mouseenter.imageEffectPlugs mouseleave.imageEffectPlugs").on("mouseenter.imageEffectPlugs mouseleave.imageEffectPlugs",
            function(t) {
                var s = f(this).find(".imageEffects"),
                r = "";
                if (j < 6) {
                    h.FUNC.TOOL.resetImgEff(n[h.DATA.KEY.OPT_TG_OPTION], this, s, j)
                } else {
                    if (j <= 8) {
                        s = f(this).find("img");
                        if (s.length == 0) {
                            s = f(this).find(".J_fonticon")
                        }
                    }
                }
                r = t.type == "mouseenter" ? "mouseenter": "mouseleave";
                if (j > 1 && j <= 7) {
                    h.FUNC.BUS.ImgEffAnimate(r, s, n[h.DATA.KEY.OPT_IMG_EFF_OPTION], this, n[h.DATA.KEY.OPT_TG_OPTION].paramLayoutType || 0)
                }
            })
        }
        var o = f(k).find(".imageEffects");
        if (q.imgEffOption && q.imgEffOption.isNeedCallFunc) {
            Site.picShape(i, m, l)
        }
    };
    h.FUNC.BASIC.CreateGE = function(j, i) {
        c(j, i);
        b(j, i)
    };
    h.FUNC.BASIC.CreateSP = function(j, i) {
        a(j, i);
        d(j, i)
    };
    function e(i, j) {
        if (i.length == 0) {
            return false
        }
        if (i[h.DATA.KEY.OPT_MODULE_ID] == 0) {
            return false
        }
        f.extend(j, i);
        return true
    }
    function c(k, i) {
        var l = !Fai.isNull(f(k).find("a")) && f(k).find("a").length != 0,
        j;
        if (l) {
            f(k).find("a").after(h.DATA.imageEffectHtml)
        } else {
            j = f(k).find("img");
            if (j.length == 0) {
                j = f(k).find(".J_fonticon")
            }
            j.after(h.DATA.imageEffectHtml)
        }
    }
    function b(i, Q) {
        if (f(i).find(".J_photoImgPanel").length == 0) {
            if (f(i).hasClass("floatImg_J_special")) {
                f(i).css("position", "relative")
            } else {
                f(i).css("position", "relative").css("overflow", "hidden")
            }
        }
        if (Fai.isIE6() && Q[h.DATA.KEY.OPT_TG_OPTION].targetParent == "photoSmallPic_table") {
            f(i).removeAttr("style")
        }
        var A = Q[h.DATA.KEY.OPT_TG_OPTION].paramLayoutType || 0;
        if (Q[h.DATA.KEY.OPT_TG_OPTION].picScale) {
            var E = Q[h.DATA.KEY.OPT_TG_OPTION].picScale || 0
        } else {
            var E = Q[h.DATA.KEY.OPT_IMG_EFF_OPTION].ns || 0
        }
        var m = Q[h.DATA.KEY.OPT_IMG_EFF_OPTION].effType;
        var w = f(i).find(".imageEffects"),
        n = (m == 2) ? "imageEffects_Border": (m == 3) ? "imageEffects_Magnifier": (m == 4) ? "imageEffects_FullMaks": (m == 5) ? "imageEffects_HalfMaks": "";
        var v = {
            bw: (Q[h.DATA.KEY.OPT_IMG_EFF_OPTION].borderType) ? Q[h.DATA.KEY.OPT_IMG_EFF_OPTION].borderWidth: 1,
            bs: (Q[h.DATA.KEY.OPT_IMG_EFF_OPTION].borderType) ? Q[h.DATA.KEY.OPT_IMG_EFF_OPTION].borderStyle: 1,
            bc: (Q[h.DATA.KEY.OPT_IMG_EFF_OPTION].borderType) ? Q[h.DATA.KEY.OPT_IMG_EFF_OPTION].borderColor: (A == 8 ? "#808080": "#000")
        },
        C = (v.bs == 1) ? "solid": (v.bs == 2) ? "dotted": (v.bs == 3) ? "dashed": "",
        U = Q[h.DATA.KEY.OPT_IMG_EFF_OPTION][h.DATA.KEY.FULL_MASK_BG_STYLE],
        z = Q[h.DATA.KEY.OPT_IMG_EFF_OPTION][h.DATA.KEY.HALF_MASK_BG_STYLE],
        L = {
            fbc: Q[h.DATA.KEY.OPT_IMG_EFF_OPTION].fullmaskBackgroundColor,
            fbo: Q[h.DATA.KEY.OPT_IMG_EFF_OPTION].fullmaskBackgroundOpacity
        },
        o = {
            hbc: Q[h.DATA.KEY.OPT_IMG_EFF_OPTION].halfmaskBackgroundColor,
            hbo: Q[h.DATA.KEY.OPT_IMG_EFF_OPTION].halfmaskBackgroundOpacity
        },
        K = {
            color: "#555555",
            opacity: 80
        },
        k = {
            color: "#000",
            opacity: 85
        };
        var r, D, l, T, G, x, s, H, I, y, t, P, u, j, O, R;
        if (Q.moduleType == "photoCard" || Q.moduleType == "photoNewCard" || Q.moduleType == "photoMoreCard") {
            r = f(i).parent();
            D = f(r).width();
            l = f(r).height();
            T = f(r).css("margin-left");
            imgMarginTop = f(r).css("margin-top");
            G = f(r).position().top;
            x = f(r).position().left;
            P = parseFloat(f(i).css("margin-top").replace("px", ""));
            u = parseFloat(f(i).css("margin-left").replace("px", ""))
        } else {
            s = f(i).position().top;
            H = f(i).height();
            I = f(i).width();
            y = f(i).position().left;
            t = f(i).parent().css("padding-top");
            r = f(i).find("img");
            if (r.length == 0) {
                r = f(i).find(".J_fonticon")
            }
            D = f(r).width();
            l = f(r).height();
            T = f(r).css("margin-left");
            G = f(r).position().top;
            x = f(r).position().left;
            O = f(i).width();
            R = f(i).height()
        }
        var S = Fai.isIE6() || Fai.isIE7() || Fai.isIE8();
        var B = Q[h.DATA.KEY.OPT_IMG_EFF_OPTION].backgroundType;
        if (typeof L == "object" && B) {
            K.color = L.fbc.length != 0 ? L.fbc: K.color;
            K.opacity = typeof L.fbo == "number" ? L.fbo: K.opacity
        }
        var N = Q[h.DATA.KEY.OPT_IMG_EFF_OPTION][h.DATA.KEY.FULL_MASK_CUS_BG];
        if (typeof U == "string" && U.length != 0 && N) {
            U = f.parseJSON(U);
            K.color = U.c.length != 0 ? U.c: K.color;
            K.opacity = typeof U.o == "number" ? U.o: K.opacity
        }
        var J = Q[h.DATA.KEY.OPT_IMG_EFF_OPTION].backgroundHalfType;
        if (typeof o == "object" && J) {
            k.color = o.hbc.length != 0 ? o.hbc: k.color;
            k.opacity = typeof o.hbo == "number" ? o.hbo: k.opacity
        }
        var q = Q[h.DATA.KEY.OPT_IMG_EFF_OPTION][h.DATA.KEY.HALF_MASK_CUS_BG];
        var F = Q[h.DATA.KEY.OPT_IMG_EFF_OPTION][h.DATA.KEY.HALF_MASK_OPEN_DISC];
        if (typeof z == "string" && z.length != 0 && q) {
            z = f.parseJSON(z);
            k.color = z.c.length != 0 ? z.c: k.color;
            k.opacity = typeof z.o == "number" ? z.o: k.opacity
        }
        T = h.FUNC.TOOL.parsePixelToInt(T);
        t = h.FUNC.TOOL.parsePixelToInt(t);
        switch (m) {
        case 1:
            f(w).css("top", G);
            break;
        case 2:
            if (A == 8) {
                I -= v.bw * 2;
                H -= v.bw * 2;
                j = f(i).css("padding").replace("px", "");
                D = I + 2 * j;
                l = H + 2 * j;
                f(w).css("top", s - t)
            } else {
                D -= v.bw * 2;
                l -= v.bw * 2;
                f(w).css("top", G)
            }
            f(w).css("border", v.bw + "px " + C + " " + v.bc);
            break;
        case 3:
            f(w).css("top", G);
            f(w).css("z-index", "1");
            break;
        case 4:
            var M = K.color;
            if (!S) {
                var p = h.FUNC.TOOL.colorRgb(K.color);
                var V = p.split(",");
                M = "rgba(" + V[0] + ", " + V[1] + ", " + V[2] + ", " + K.opacity / 100 + ")"
            }
            f(w).css("background", M);
            f(w).css("top", G);
            break;
        case 5:
            var M = k.color;
            if (!S) {
                var p = h.FUNC.TOOL.colorRgb(k.color);
                var V = p.split(",");
                M = "rgba(" + V[0] + ", " + V[1] + ", " + V[2] + ", " + k.opacity / 100 + ")"
            }
            if (q || J) {
                f(w).css("background", M)
            }
            f(w).removeClass("imageEffectsAnimate").addClass("imageEffectsAnimate_Half");
            f(w).css("bottom", "-" + l + "px");
            break;
        case 6:
            f(w).css("top", G);
            break;
        case 7:
            f(w).css("top", G);
            break
        }
        if (Q.moduleType == "photoCard" || Q.moduleType == "photoNewCard" || Q.moduleType == "photoMoreCard") {
            if (m != 5) {
                f(w).css({
                    top: ( - P) + "px"
                });
                f(w).css({
                    left: ( - u) + "px"
                })
            } else {
                f(w).css({
                    "padding-left": ( - u) + "px"
                })
            }
        } else {
            if (m == 2 && A == 8) {
                f(w).css("left", 0)
            } else {
                f(w).css("left", x + T)
            }
        }
        if (E == 2 && (m == 2 || m == 3 || m == 5)) {
            if (m == 5) {
                f(w).css("width", O).css("height", R)
            } else {
                if (m == 2) {
                    f(w).css("width", O - v.bw * 2).css("height", R - v.bw * 2)
                } else {
                    f(w).css("width", O - 2).css("height", R - 2)
                }
            }
            f(w).css("left", 0)
        } else {
            f(w).css("width", D);
            f(w).css("height", l)
        }
        f(w).addClass(n)
    }
    function a(o, k) {
        var l = f(o).find("img"),
        j = k[h.DATA.KEY.OPT_IMG_EFF_OPTION],
        m,
        n;
        if (l.length == 0) {
            l = f(o).find(".J_fonticon")
        }
        var i = k[h.DATA.KEY.OPT_TG_OPTION].paramLayoutType || 0;
        if (j.effType == 6) {
            var q = f(l).width();
            var p = f(l).height();
            if ( !! j.forRefreshPic) {
                if ( !! l.data("realWidth")) {
                    q = l.data("realWidth")
                }
                if ( !! l.data("realHeight")) {
                    p = l.data("realHeight")
                }
            }
            if (q == 0 || p == 0) {
                return
            }
            f(l).attr("_initWidth", q).attr("_initHeight", p);
            n = f(l).parent();
            if ( !! j.spScaleUp) {
                if (!n.hasClass("J_spScaleUp")) {
                    m = '<div class="J_spScaleUp" style="position:relative; overflow:hidden; margin:0px auto;"></div>';
                    n.append(m);
                    n.find(".J_spScaleUp").append(f(l)).css({
                        width: q,
                        height: p
                    })
                }
            } else {
                if (n.hasClass("J_spScaleUp")) {
                    n.parent().append(f(l));
                    n.remove()
                }
            }
        }
        if (j.effType == 7) {
            var q = f(l).width();
            if (q == 0) {
                return
            }
            if (i == 8) {
                f(l).css("width", q + "px")
            } else {
                f(l).css("width", q + 10 + "px")
            }
        }
    }
    function d(n, j) {
        var o = (j[h.DATA.KEY.OPT_IMG_EFF_OPTION].effType == 6) ? "imageEffectsAnimate_Magnify": "imageEffectsAnimate_MoveLeft";
        var i = j[h.DATA.KEY.OPT_IMG_EFF_OPTION].style == 88 || j[h.DATA.KEY.OPT_IMG_EFF_OPTION].style == 89 || j[h.DATA.KEY.OPT_IMG_EFF_OPTION].style == 90;
        var m = j[h.DATA.KEY.OPT_IMG_EFF_OPTION].effType == 6 || j[h.DATA.KEY.OPT_IMG_EFF_OPTION].effType == 7;
        var k = j[h.DATA.KEY.OPT_TG_OPTION].picScale || 0,
        l = f(n).find("img");
        if (l.length == 0) {
            l = f(n).find(".J_fonticon")
        }
        if (!m || !i) {
            f(n).css({
                overflow: "hidden"
            })
        }
        l.addClass(o).css("margin", "0px")
    }
})(jQuery, Site.ImageEffect);