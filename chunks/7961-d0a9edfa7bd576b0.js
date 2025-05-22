(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7961], {
        20357: function(i, e, o) {
            "use strict";
            var r, n;
            i.exports = (null == (r = o.g.process) ? void 0 : r.env) && "object" == typeof(null == (n = o.g.process) ? void 0 : n.env) ? o.g.process : o(88081)
        },
        88081: function(i) {
            ! function() {
                var e = {
                        229: function(i) {
                            var e, o, r, n = i.exports = {};

                            function t() {
                                throw Error("setTimeout has not been defined")
                            }

                            function a() {
                                throw Error("clearTimeout has not been defined")
                            }

                            function s(i) {
                                if (e === setTimeout) return setTimeout(i, 0);
                                if ((e === t || !e) && setTimeout) return e = setTimeout, setTimeout(i, 0);
                                try {
                                    return e(i, 0)
                                } catch (o) {
                                    try {
                                        return e.call(null, i, 0)
                                    } catch (o) {
                                        return e.call(this, i, 0)
                                    }
                                }
                            }! function() {
                                try {
                                    e = "function" == typeof setTimeout ? setTimeout : t
                                } catch (i) {
                                    e = t
                                }
                                try {
                                    o = "function" == typeof clearTimeout ? clearTimeout : a
                                } catch (i) {
                                    o = a
                                }
                            }();
                            var b = [],
                                l = !1,
                                w = -1;

                            function u() {
                                l && r && (l = !1, r.length ? b = r.concat(b) : w = -1, b.length && d())
                            }

                            function d() {
                                if (!l) {
                                    var i = s(u);
                                    l = !0;
                                    for (var e = b.length; e;) {
                                        for (r = b, b = []; ++w < e;) r && r[w].run();
                                        w = -1, e = b.length
                                    }
                                    r = null, l = !1,
                                        function(i) {
                                            if (o === clearTimeout) return clearTimeout(i);
                                            if ((o === a || !o) && clearTimeout) return o = clearTimeout, clearTimeout(i);
                                            try {
                                                o(i)
                                            } catch (e) {
                                                try {
                                                    return o.call(null, i)
                                                } catch (e) {
                                                    return o.call(this, i)
                                                }
                                            }
                                        }(i)
                                }
                            }

                            function c(i, e) {
                                this.fun = i, this.array = e
                            }

                            function m() {}
                            n.nextTick = function(i) {
                                var e = Array(arguments.length - 1);
                                if (arguments.length > 1)
                                    for (var o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
                                b.push(new c(i, e)), 1 !== b.length || l || s(d)
                            }, c.prototype.run = function() {
                                this.fun.apply(null, this.array)
                            }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = m, n.addListener = m, n.once = m, n.off = m, n.removeListener = m, n.removeAllListeners = m, n.emit = m, n.prependListener = m, n.prependOnceListener = m, n.listeners = function(i) {
                                return []
                            }, n.binding = function(i) {
                                throw Error("process.binding is not supported")
                            }, n.cwd = function() {
                                return "/"
                            }, n.chdir = function(i) {
                                throw Error("process.chdir is not supported")
                            }, n.umask = function() {
                                return 0
                            }
                        }
                    },
                    o = {};

                function r(i) {
                    var n = o[i];
                    if (void 0 !== n) return n.exports;
                    var t = o[i] = {
                            exports: {}
                        },
                        a = !0;
                    try {
                        e[i](t, t.exports, r), a = !1
                    } finally {
                        a && delete o[i]
                    }
                    return t.exports
                }
                r.ab = "//";
                var n = r(229);
                i.exports = n
            }()
        },
        63858: function(i, e, o) {
            "use strict";
            var r, n, t, a, s, b, l = o(2265);
            l && "object" == typeof l && "default" in l && l.default;
            var w = o(13299),
                u = new w,
                d = u.getBrowser(),
                c = u.getCPU(),
                m = u.getDevice(),
                p = u.getEngine(),
                f = u.getOS(),
                h = u.getUA(),
                v = {
                    Mobile: "mobile",
                    Tablet: "tablet",
                    SmartTv: "smarttv",
                    Console: "console",
                    Wearable: "wearable",
                    Embedded: "embedded",
                    Browser: void 0
                },
                g = {
                    Chrome: "Chrome",
                    Firefox: "Firefox",
                    Opera: "Opera",
                    Yandex: "Yandex",
                    Safari: "Safari",
                    InternetExplorer: "Internet Explorer",
                    Edge: "Edge",
                    Chromium: "Chromium",
                    Ie: "IE",
                    MobileSafari: "Mobile Safari",
                    MIUI: "MIUI Browser",
                    SamsungBrowser: "Samsung Browser"
                },
                x = function(i) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
                    return i || e
                },
                k = function() {
                    return !!("undefined" != typeof window && (window.navigator || navigator)) && (window.navigator || navigator)
                },
                y = function(i) {
                    var e = k();
                    return e && e.platform && (-1 !== e.platform.indexOf(i) || "MacIntel" === e.platform && e.maxTouchPoints > 1 && !window.MSStream)
                },
                T = function(i) {
                    return i.type === v.Browser
                },
                S = function(i) {
                    return i.name === g.Edge
                },
                _ = function(i) {
                    return "string" == typeof i && -1 !== i.indexOf("Edg/")
                },
                E = function() {
                    return y("iPad")
                };
            m.type, v.SmartTv, m.type, v.Console, m.type, v.Wearable, m.type, v.Embedded, d.name === g.MobileSafari || E(), d.name, g.Chromium;
            var C = (r = m.type) === v.Mobile || r === v.Tablet || E(),
                A = (m.type, v.Mobile, m.type === v.Tablet || E(), T(m), T(m), "Android" === f.name),
                M = (f.name, "iOS" === f.name || E()),
                O = d.name === g.Chrome,
                q = d.name === g.Firefox,
                N = (n = d.name) === g.Safari || n === g.MobileSafari,
                z = (d.name, g.Opera, (t = d.name) === g.InternetExplorer || g.Ie, x(f.version), x(f.name), x(d.version)),
                P = (x(d.major), x(d.name)),
                U = (x(m.vendor), x(m.model), x(p.name), x(p.version), x(h), S(d) || _(h));
            d.name, g.Yandex, x(m.type, "browser"), (a = k()) && (/iPad|iPhone|iPod/.test(a.platform) || "MacIntel" === a.platform && a.maxTouchPoints > 1) && window.MSStream, E(), y("iPhone"), y("iPod"), "string" == typeof(b = (s = k()) && s.userAgent && s.userAgent.toLowerCase()) && /electron/.test(b), _(h), S(d) && _(h), f.name, f.name, d.name, g.MIUI, d.name, g.SamsungBrowser, e.KC = P, e.o3 = z, e.Dt = A, e.i7 = O, e.un = U, e.vU = q, e.gn = M, e.tq = C, e.G6 = N
        },
        13299: function(i, e, o) {
            var r;
            ! function(n, t) {
                "use strict";
                var a = "function",
                    s = "undefined",
                    b = "object",
                    l = "string",
                    w = "major",
                    u = "model",
                    d = "name",
                    c = "type",
                    m = "vendor",
                    p = "version",
                    f = "architecture",
                    h = "console",
                    v = "mobile",
                    g = "tablet",
                    x = "smarttv",
                    k = "wearable",
                    y = "embedded",
                    T = "Amazon",
                    S = "Apple",
                    _ = "ASUS",
                    E = "BlackBerry",
                    C = "Browser",
                    A = "Chrome",
                    M = "Firefox",
                    O = "Google",
                    q = "Huawei",
                    N = "Microsoft",
                    z = "Motorola",
                    P = "Opera",
                    U = "Samsung",
                    I = "Sharp",
                    B = "Sony",
                    j = "Xiaomi",
                    L = "Zebra",
                    R = "Facebook",
                    D = "Chromium OS",
                    G = "Mac OS",
                    V = function(i, e) {
                        var o = {};
                        for (var r in i) e[r] && e[r].length % 2 == 0 ? o[r] = e[r].concat(i[r]) : o[r] = i[r];
                        return o
                    },
                    F = function(i) {
                        for (var e = {}, o = 0; o < i.length; o++) e[i[o].toUpperCase()] = i[o];
                        return e
                    },
                    W = function(i, e) {
                        return typeof i === l && -1 !== H(e).indexOf(H(i))
                    },
                    H = function(i) {
                        return i.toLowerCase()
                    },
                    Z = function(i, e) {
                        if (typeof i === l) return i = i.replace(/^\s\s*/, ""), typeof e === s ? i : i.substring(0, 500)
                    },
                    X = function(i, e) {
                        for (var o, r, n, s, l, w, u = 0; u < e.length && !l;) {
                            var d = e[u],
                                c = e[u + 1];
                            for (o = r = 0; o < d.length && !l && d[o];)
                                if (l = d[o++].exec(i))
                                    for (n = 0; n < c.length; n++) w = l[++r], typeof(s = c[n]) === b && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, w) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = w ? w.replace(s[1], s[2]) : void 0 : this[s[0]] = w ? s[1].call(this, w, s[2]) : void 0 : 4 === s.length && (this[s[0]] = w ? s[3].call(this, w.replace(s[1], s[2])) : void 0) : this[s] = w || t;
                            u += 2
                        }
                    },
                    Y = function(i, e) {
                        for (var o in e)
                            if (typeof e[o] === b && e[o].length > 0) {
                                for (var r = 0; r < e[o].length; r++)
                                    if (W(e[o][r], i)) return "?" === o ? t : o
                            } else if (W(e[o], i)) return "?" === o ? t : o;
                        return i
                    },
                    $ = {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    },
                    K = {
                        browser: [
                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                            [p, [d, "Chrome"]],
                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                            [p, [d, "Edge"]],
                            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                            [d, p],
                            [/opios[\/ ]+([\w\.]+)/i],
                            [p, [d, P + " Mini"]],
                            [/\bop(?:rg)?x\/([\w\.]+)/i],
                            [p, [d, P + " GX"]],
                            [/\bopr\/([\w\.]+)/i],
                            [p, [d, P]],
                            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                            [p, [d, "Baidu"]],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                            [d, p],
                            [/\bddg\/([\w\.]+)/i],
                            [p, [d, "DuckDuckGo"]],
                            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                            [p, [d, "UC" + C]],
                            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                            [p, [d, "WeChat"]],
                            [/konqueror\/([\w\.]+)/i],
                            [p, [d, "Konqueror"]],
                            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                            [p, [d, "IE"]],
                            [/ya(?:search)?browser\/([\w\.]+)/i],
                            [p, [d, "Yandex"]],
                            [/slbrowser\/([\w\.]+)/i],
                            [p, [d, "Smart Lenovo " + C]],
                            [/(avast|avg)\/([\w\.]+)/i],
                            [
                                [d, /(.+)/, "$1 Secure " + C], p
                            ],
                            [/\bfocus\/([\w\.]+)/i],
                            [p, [d, M + " Focus"]],
                            [/\bopt\/([\w\.]+)/i],
                            [p, [d, P + " Touch"]],
                            [/coc_coc\w+\/([\w\.]+)/i],
                            [p, [d, "Coc Coc"]],
                            [/dolfin\/([\w\.]+)/i],
                            [p, [d, "Dolphin"]],
                            [/coast\/([\w\.]+)/i],
                            [p, [d, P + " Coast"]],
                            [/miuibrowser\/([\w\.]+)/i],
                            [p, [d, "MIUI " + C]],
                            [/fxios\/([-\w\.]+)/i],
                            [p, [d, M]],
                            [/\bqihu|(qi?ho?o?|360)browser/i],
                            [
                                [d, "360 " + C]
                            ],
                            [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
                            [
                                [d, /(.+)/, "$1 " + C], p
                            ],
                            [/samsungbrowser\/([\w\.]+)/i],
                            [p, [d, U + " Internet"]],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [d, /_/g, " "], p
                            ],
                            [/metasr[\/ ]?([\d\.]+)/i],
                            [p, [d, "Sogou Explorer"]],
                            [/(sogou)mo\w+\/([\d\.]+)/i],
                            [
                                [d, "Sogou Mobile"], p
                            ],
                            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],
                            [d, p],
                            [/(lbbrowser)/i, /\[(linkedin)app\]/i],
                            [d],
                            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                            [
                                [d, R], p
                            ],
                            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                            [d, p],
                            [/\bgsa\/([\w\.]+) .*safari\//i],
                            [p, [d, "GSA"]],
                            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                            [p, [d, "TikTok"]],
                            [/headlesschrome(?:\/([\w\.]+)| )/i],
                            [p, [d, A + " Headless"]],
                            [/ wv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [d, A + " WebView"], p
                            ],
                            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                            [p, [d, "Android " + C]],
                            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                            [d, p],
                            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                            [p, [d, "Mobile Safari"]],
                            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                            [p, d],
                            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                            [d, [p, Y, {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [d, p],
                            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                            [
                                [d, "Netscape"], p
                            ],
                            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                            [p, [d, M + " Reality"]],
                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                            [d, p],
                            [/(cobalt)\/([\w\.]+)/i],
                            [d, [p, /master.|lts./, ""]]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                            [
                                [f, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [f, H]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [f, "ia32"]
                            ],
                            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                            [
                                [f, "arm64"]
                            ],
                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                            [
                                [f, "armhf"]
                            ],
                            [/windows (ce|mobile); ppc;/i],
                            [
                                [f, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                            [
                                [f, /ower/, "", H]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [f, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                            [
                                [f, H]
                            ]
                        ],
                        device: [
                            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                            [u, [m, U],
                                [c, g]
                            ],
                            [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                            [u, [m, U],
                                [c, v]
                            ],
                            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                            [u, [m, S],
                                [c, v]
                            ],
                            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                            [u, [m, S],
                                [c, g]
                            ],
                            [/(macintosh);/i],
                            [u, [m, S]],
                            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                            [u, [m, I],
                                [c, v]
                            ],
                            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                            [u, [m, q],
                                [c, g]
                            ],
                            [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                            [u, [m, q],
                                [c, v]
                            ],
                            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                            [
                                [u, /_/g, " "],
                                [m, j],
                                [c, v]
                            ],
                            [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                            [
                                [u, /_/g, " "],
                                [m, j],
                                [c, g]
                            ],
                            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                            [u, [m, "OPPO"],
                                [c, v]
                            ],
                            [/\b(opd2\d{3}a?) bui/i],
                            [u, [m, "OPPO"],
                                [c, g]
                            ],
                            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                            [u, [m, "Vivo"],
                                [c, v]
                            ],
                            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                            [u, [m, "Realme"],
                                [c, v]
                            ],
                            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                            [u, [m, z],
                                [c, v]
                            ],
                            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                            [u, [m, z],
                                [c, g]
                            ],
                            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                            [u, [m, "LG"],
                                [c, g]
                            ],
                            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                            [u, [m, "LG"],
                                [c, v]
                            ],
                            [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                            [u, [m, "Lenovo"],
                                [c, g]
                            ],
                            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                            [
                                [u, /_/g, " "],
                                [m, "Nokia"],
                                [c, v]
                            ],
                            [/(pixel c)\b/i],
                            [u, [m, O],
                                [c, g]
                            ],
                            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                            [u, [m, O],
                                [c, v]
                            ],
                            [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [u, [m, B],
                                [c, v]
                            ],
                            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                            [
                                [u, "Xperia Tablet"],
                                [m, B],
                                [c, g]
                            ],
                            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                            [u, [m, "OnePlus"],
                                [c, v]
                            ],
                            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                            [u, [m, T],
                                [c, g]
                            ],
                            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                            [
                                [u, /(.+)/g, "Fire Phone $1"],
                                [m, T],
                                [c, v]
                            ],
                            [/(playbook);[-\w\),; ]+(rim)/i],
                            [u, m, [c, g]],
                            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                            [u, [m, E],
                                [c, v]
                            ],
                            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                            [u, [m, _],
                                [c, g]
                            ],
                            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                            [u, [m, _],
                                [c, v]
                            ],
                            [/(nexus 9)/i],
                            [u, [m, "HTC"],
                                [c, g]
                            ],
                            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                            [m, [u, /_/g, " "],
                                [c, v]
                            ],
                            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                            [u, [m, "Acer"],
                                [c, g]
                            ],
                            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                            [u, [m, "Meizu"],
                                [c, v]
                            ],
                            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                            [u, [m, "Ulefone"],
                                [c, v]
                            ],
                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                            [m, u, [c, v]],
                            [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                            [m, u, [c, g]],
                            [/(surface duo)/i],
                            [u, [m, N],
                                [c, g]
                            ],
                            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                            [u, [m, "Fairphone"],
                                [c, v]
                            ],
                            [/(u304aa)/i],
                            [u, [m, "AT&T"],
                                [c, v]
                            ],
                            [/\bsie-(\w*)/i],
                            [u, [m, "Siemens"],
                                [c, v]
                            ],
                            [/\b(rct\w+) b/i],
                            [u, [m, "RCA"],
                                [c, g]
                            ],
                            [/\b(venue[\d ]{2,7}) b/i],
                            [u, [m, "Dell"],
                                [c, g]
                            ],
                            [/\b(q(?:mv|ta)\w+) b/i],
                            [u, [m, "Verizon"],
                                [c, g]
                            ],
                            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                            [u, [m, "Barnes & Noble"],
                                [c, g]
                            ],
                            [/\b(tm\d{3}\w+) b/i],
                            [u, [m, "NuVision"],
                                [c, g]
                            ],
                            [/\b(k88) b/i],
                            [u, [m, "ZTE"],
                                [c, g]
                            ],
                            [/\b(nx\d{3}j) b/i],
                            [u, [m, "ZTE"],
                                [c, v]
                            ],
                            [/\b(gen\d{3}) b.+49h/i],
                            [u, [m, "Swiss"],
                                [c, v]
                            ],
                            [/\b(zur\d{3}) b/i],
                            [u, [m, "Swiss"],
                                [c, g]
                            ],
                            [/\b((zeki)?tb.*\b) b/i],
                            [u, [m, "Zeki"],
                                [c, g]
                            ],
                            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                            [
                                [m, "Dragon Touch"], u, [c, g]
                            ],
                            [/\b(ns-?\w{0,9}) b/i],
                            [u, [m, "Insignia"],
                                [c, g]
                            ],
                            [/\b((nxa|next)-?\w{0,9}) b/i],
                            [u, [m, "NextBook"],
                                [c, g]
                            ],
                            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                            [
                                [m, "Voice"], u, [c, v]
                            ],
                            [/\b(lvtel\-)?(v1[12]) b/i],
                            [
                                [m, "LvTel"], u, [c, v]
                            ],
                            [/\b(ph-1) /i],
                            [u, [m, "Essential"],
                                [c, v]
                            ],
                            [/\b(v(100md|700na|7011|917g).*\b) b/i],
                            [u, [m, "Envizen"],
                                [c, g]
                            ],
                            [/\b(trio[-\w\. ]+) b/i],
                            [u, [m, "MachSpeed"],
                                [c, g]
                            ],
                            [/\btu_(1491) b/i],
                            [u, [m, "Rotor"],
                                [c, g]
                            ],
                            [/(shield[\w ]+) b/i],
                            [u, [m, "Nvidia"],
                                [c, g]
                            ],
                            [/(sprint) (\w+)/i],
                            [m, u, [c, v]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [u, /\./g, " "],
                                [m, N],
                                [c, v]
                            ],
                            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                            [u, [m, L],
                                [c, g]
                            ],
                            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                            [u, [m, L],
                                [c, v]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [m, [c, x]],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [u, /^/, "SmartTV"],
                                [m, U],
                                [c, x]
                            ],
                            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                            [
                                [m, "LG"],
                                [c, x]
                            ],
                            [/(apple) ?tv/i],
                            [m, [u, S + " TV"],
                                [c, x]
                            ],
                            [/crkey/i],
                            [
                                [u, A + "cast"],
                                [m, O],
                                [c, x]
                            ],
                            [/droid.+aft(\w+)( bui|\))/i],
                            [u, [m, T],
                                [c, x]
                            ],
                            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                            [u, [m, I],
                                [c, x]
                            ],
                            [/(bravia[\w ]+)( bui|\))/i],
                            [u, [m, B],
                                [c, x]
                            ],
                            [/(mitv-\w{5}) bui/i],
                            [u, [m, j],
                                [c, x]
                            ],
                            [/Hbbtv.*(technisat) (.*);/i],
                            [m, u, [c, x]],
                            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                            [
                                [m, Z],
                                [u, Z],
                                [c, x]
                            ],
                            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                            [
                                [c, x]
                            ],
                            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                            [m, u, [c, h]],
                            [/droid.+; (shield) bui/i],
                            [u, [m, "Nvidia"],
                                [c, h]
                            ],
                            [/(playstation [345portablevi]+)/i],
                            [u, [m, B],
                                [c, h]
                            ],
                            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                            [u, [m, N],
                                [c, h]
                            ],
                            [/((pebble))app/i],
                            [m, u, [c, k]],
                            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                            [u, [m, S],
                                [c, k]
                            ],
                            [/droid.+; (glass) \d/i],
                            [u, [m, O],
                                [c, k]
                            ],
                            [/droid.+; (wt63?0{2,3})\)/i],
                            [u, [m, L],
                                [c, k]
                            ],
                            [/(quest( \d| pro)?)/i],
                            [u, [m, R],
                                [c, k]
                            ],
                            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                            [m, [c, y]],
                            [/(aeobc)\b/i],
                            [u, [m, T],
                                [c, y]
                            ],
                            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                            [u, [c, v]],
                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                            [u, [c, g]],
                            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                            [
                                [c, g]
                            ],
                            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                            [
                                [c, v]
                            ],
                            [/(android[-\w\. ]{0,9});.+buil/i],
                            [u, [m, "Generic"]]
                        ],
                        engine: [
                            [/windows.+ edge\/([\w\.]+)/i],
                            [p, [d, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [p, [d, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                            [d, p],
                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                            [p, d]
                        ],
                        os: [
                            [/microsoft (windows) (vista|xp)/i],
                            [d, p],
                            [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                            [d, [p, Y, $]],
                            [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                            [
                                [p, Y, $],
                                [d, "Windows"]
                            ],
                            [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                            [
                                [p, /_/g, "."],
                                [d, "iOS"]
                            ],
                            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                            [
                                [d, G],
                                [p, /_/g, "."]
                            ],
                            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                            [p, d],
                            [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                            [d, p],
                            [/\(bb(10);/i],
                            [p, [d, E]],
                            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                            [p, [d, "Symbian"]],
                            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                            [p, [d, M + " OS"]],
                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                            [p, [d, "webOS"]],
                            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                            [p, [d, "watchOS"]],
                            [/crkey\/([\d\.]+)/i],
                            [p, [d, A + "cast"]],
                            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                            [
                                [d, D], p
                            ],
                            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                            [d, p],
                            [/(sunos) ?([\w\.\d]*)/i],
                            [
                                [d, "Solaris"], p
                            ],
                            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                            [d, p]
                        ]
                    },
                    Q = function(i, e) {
                        if (typeof i === b && (e = i, i = t), !(this instanceof Q)) return new Q(i, e).getResult();
                        var o = typeof n !== s && n.navigator ? n.navigator : t,
                            r = i || (o && o.userAgent ? o.userAgent : ""),
                            h = o && o.userAgentData ? o.userAgentData : t,
                            x = e ? V(K, e) : K,
                            k = o && o.userAgent == r;
                        return this.getBrowser = function() {
                            var i, e = {};
                            return e[d] = t, e[p] = t, X.call(e, r, x.browser), e[w] = typeof(i = e[p]) === l ? i.replace(/[^\d\.]/g, "").split(".")[0] : t, k && o && o.brave && typeof o.brave.isBrave == a && (e[d] = "Brave"), e
                        }, this.getCPU = function() {
                            var i = {};
                            return i[f] = t, X.call(i, r, x.cpu), i
                        }, this.getDevice = function() {
                            var i = {};
                            return i[m] = t, i[u] = t, i[c] = t, X.call(i, r, x.device), k && !i[c] && h && h.mobile && (i[c] = v), k && "Macintosh" == i[u] && o && typeof o.standalone !== s && o.maxTouchPoints && o.maxTouchPoints > 2 && (i[u] = "iPad", i[c] = g), i
                        }, this.getEngine = function() {
                            var i = {};
                            return i[d] = t, i[p] = t, X.call(i, r, x.engine), i
                        }, this.getOS = function() {
                            var i = {};
                            return i[d] = t, i[p] = t, X.call(i, r, x.os), k && !i[d] && h && h.platform && "Unknown" != h.platform && (i[d] = h.platform.replace(/chrome os/i, D).replace(/macos/i, G)), i
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return r
                        }, this.setUA = function(i) {
                            return r = typeof i === l && i.length > 500 ? Z(i, 500) : i, this
                        }, this.setUA(r), this
                    };
                Q.VERSION = "1.0.38", Q.BROWSER = F([d, p, w]), Q.CPU = F([f]), Q.DEVICE = F([u, m, c, h, v, x, g, k, y]), Q.ENGINE = Q.OS = F([d, p]), typeof e !== s ? (i.exports && (e = i.exports = Q), e.UAParser = Q) : o.amdO ? t !== (r = (function() {
                    return Q
                }).call(e, o, e, i)) && (i.exports = r) : typeof n !== s && (n.UAParser = Q);
                var J = typeof n !== s && (n.jQuery || n.Zepto);
                if (J && !J.ua) {
                    var ii = new Q;
                    J.ua = ii.getResult(), J.ua.get = function() {
                        return ii.getUA()
                    }, J.ua.set = function(i) {
                        ii.setUA(i);
                        var e = ii.getResult();
                        for (var o in e) J.ua[o] = e[o]
                    }
                }
            }("object" == typeof window ? window : this)
        }
    }
]);