(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185], {
        8238: function(e, t, n) {
            Promise.resolve().then(n.t.bind(n, 58877, 23)), Promise.resolve().then(n.bind(n, 64404)), Promise.resolve().then(n.bind(n, 27640)), Promise.resolve().then(n.bind(n, 90239)), Promise.resolve().then(n.t.bind(n, 84080, 23)), Promise.resolve().then(n.t.bind(n, 25672, 23)), Promise.resolve().then(n.t.bind(n, 72362, 23)), Promise.resolve().then(n.t.bind(n, 44193, 23))
        },
        90239: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let a = n(57437),
                o = n(2265);
            t.default = function(e) {
                let {
                    html: t,
                    height: n = null,
                    width: i = null,
                    children: l,
                    dataNtpc: r = ""
                } = e;
                return (0, o.useEffect)(() => {
                    r && performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-".concat(r)
                        }
                    })
                }, [r]), (0, a.jsxs)(a.Fragment, {
                    children: [l, t ? (0, a.jsx)("div", {
                        style: {
                            height: null != n ? "".concat(n, "px") : "auto",
                            width: null != i ? "".concat(i, "px") : "auto"
                        },
                        "data-ntpc": r,
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    }) : null]
                })
            }
        },
        64404: function(e, t, n) {
            "use strict";
            var a;
            let o;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGAEvent = t.GoogleAnalytics = void 0;
            let i = n(57437),
                l = n(2265),
                r = (a = n(31877)) && a.__esModule ? a : {
                    default: a
                };
            t.GoogleAnalytics = function(e) {
                let {
                    gaId: t,
                    dataLayerName: n = "dataLayer"
                } = e;
                return void 0 === o && (o = n), (0, l.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-ga"
                        }
                    })
                }, []), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(r.default, {
                        id: "_next-ga-init",
                        dangerouslySetInnerHTML: {
                            __html: "\n          window['".concat(n, "'] = window['").concat(n, "'] || [];\n          function gtag(){window['").concat(n, "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t, "');")
                        }
                    }), (0, i.jsx)(r.default, {
                        id: "_next-ga",
                        src: "https://www.googletagmanager.com/gtag/js?id=".concat(t)
                    })]
                })
            }, t.sendGAEvent = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (void 0 === o) {
                    console.warn("@next/third-parties: GA has not been initialized");
                    return
                }
                window[o] ? window[o].push(arguments) : console.warn("@next/third-parties: GA dataLayer ".concat(o, " does not exist"))
            }
        },
        27640: function(e, t, n) {
            "use strict";
            var a;
            let o;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGTMEvent = t.GoogleTagManager = void 0;
            let i = n(57437),
                l = n(2265),
                r = (a = n(31877)) && a.__esModule ? a : {
                    default: a
                };
            t.GoogleTagManager = function(e) {
                let {
                    gtmId: t,
                    dataLayerName: n = "dataLayer",
                    auth: a,
                    preview: s,
                    dataLayer: c
                } = e;
                void 0 === o && (o = n);
                let d = "dataLayer" !== n ? "&l=".concat(n) : "";
                return (0, l.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-gtm"
                        }
                    })
                }, []), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(r.default, {
                        id: "_next-gtm-init",
                        dangerouslySetInnerHTML: {
                            __html: "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(c ? "w[l].push(".concat(JSON.stringify(c), ")") : "", "\n      })(window,'").concat(n, "');")
                        }
                    }), (0, i.jsx)(r.default, {
                        id: "_next-gtm",
                        "data-ntpc": "GTM",
                        src: "https://www.googletagmanager.com/gtm.js?id=".concat(t).concat(d).concat(a ? "&gtm_auth=".concat(a) : "").concat(s ? "&gtm_preview=".concat(s, "&gtm_cookies_win=x") : "")
                    })]
                })
            }, t.sendGTMEvent = e => {
                if (void 0 === o) {
                    console.warn("@next/third-parties: GTM has not been initialized");
                    return
                }
                window[o] ? window[o].push(e) : console.warn("@next/third-parties: GTM dataLayer ".concat(o, " does not exist"))
            }
        },
        49189: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    cancelIdleCallback: function() {
                        return a
                    },
                    requestIdleCallback: function() {
                        return n
                    }
                });
            let n = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
                    let t = Date.now();
                    return self.setTimeout(function() {
                        e({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - t))
                            }
                        })
                    }, 1)
                },
                a = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
                    return clearTimeout(e)
                };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        58877: function() {},
        44193: function() {},
        25672: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__Poppins_9b9fd1', '__Poppins_Fallback_9b9fd1'",
                    fontStyle: "normal"
                },
                className: "__className_9b9fd1",
                variable: "__variable_9b9fd1"
            }
        },
        72362: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__monaSans_c4db31', '__monaSans_Fallback_c4db31'"
                },
                className: "__className_c4db31",
                variable: "__variable_c4db31"
            }
        }
    },
    function(e) {
        e.O(0, [2503, 404, 1877, 2971, 7023, 1744], function() {
            return e(e.s = 8238)
        }), _N_E = e.O()
    }
]);