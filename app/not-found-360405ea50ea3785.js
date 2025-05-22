(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9160], {
        53854: function(e, r, n) {
            Promise.resolve().then(n.bind(n, 70618))
        },
        22251: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return u
                }
            });
            var t = n(95193);
            let o = {
                    name: t.EO,
                    versionData: [{
                        versionName: "D",
                        probability: 100
                    }]
                },
                i = {
                    name: t.Kq,
                    versionData: [{
                        versionName: "all_sites",
                        probability: 100
                    }]
                };
            var a = n(77294),
                s = n(14850),
                c = n(20357);
            class l {
                validateVersionData(e) {
                    let r = 0;
                    return e.forEach(e => {
                        r += e.probability
                    }), 100 === r
                }
                getRandomVersion(e) {
                    if (!this.validateVersionData(e)) throw Error("Invalid Version Data");
                    let r = 0,
                        n = 100 * Math.random();
                    for (let t = 0; t < e.length; t++) {
                        let o = e[t];
                        if (n <= (r += o.probability)) return o.versionName
                    }
                    throw Error("Invalid Version Data")
                }
                getRandomVersionForExperiment(e) {
                    let r = this.activeExperiments.find(r => r.name === e);
                    if (r) {
                        let e = r.versionData;
                        return this.getRandomVersion(e)
                    }
                    throw Error("Unknown experiment")
                }
                async logOnboardingEvent(e, r) {
                    let n = e[t.EO];
                    n ? await this.logExperimentData(t.EO, n, r) : console.error("No experiment version found, skip logging")
                }
                async storeExperimentVersionInExtension(e, r) {
                    return new Promise((n, t) => {
                        a.Z.sendMessage("storeExperimentVersion", {
                            experimentName: e,
                            experimentVersion: r
                        }, e => {
                            e.error ? t(e.error) : n()
                        })
                    })
                }
                async logExperimentData(e, r, n) {
                    return new Promise((t, o) => {
                        a.Z.sendMessage("logExperiment", {
                            experimentName: e,
                            experimentVersion: r,
                            event: n
                        }, e => {
                            e.error ? o(e.error) : t()
                        })
                    })
                }
                async capturePosthogEventOnReady(e) {
                    try {
                        await (0, s.vS)(() => window.initializedData, 5e3)(), window.capturePosthogEvent && window.capturePosthogEvent(e)
                    } catch (e) {
                        console.error("Failed to capture Posthog event on ready", e)
                    }
                }
                async logEvent(e) {
                    if (e.screen = {
                            width: window.innerWidth,
                            height: window.innerHeight
                        }, e.page) {
                        var r;
                        "" !== document.referrer && (e.page.referral = document.referrer), (null === (r = e.page) || void 0 === r ? void 0 : r.url) === void 0 && (e.page.url = window.location.href), void 0 === e.page.version && (e.page.version = c.env.REACT_APP_VERSION)
                    }
                    return this.capturePosthogEventOnReady(e), new Promise((r, n) => {
                        a.Z.sendMessage("logEvent", {
                            event: e
                        }, e => {
                            r()
                        })
                    })
                }
                logPosthogEvent(e) {
                    try {
                        if (e.screen = {
                                width: window.innerWidth,
                                height: window.innerHeight
                            }, e.page) {
                            var r;
                            "" !== document.referrer && (e.page.referral = document.referrer), (null === (r = e.page) || void 0 === r ? void 0 : r.url) === void 0 && (e.page.url = window.location.href), void 0 === e.page.version && (e.page.version = c.env.REACT_APP_VERSION)
                        }
                        this.capturePosthogEventOnReady(e)
                    } catch (e) {
                        console.error("Failed to log Posthog event", e)
                    }
                }
                constructor() {
                    this.activeExperiments = [o, i]
                }
            }
            let d = new l;
            Object.freeze(d);
            var u = d
        },
        70618: function(e, r, n) {
            "use strict";
            n.r(r);
            var t = n(57437),
                o = n(2265),
                i = n(95232),
                a = n(22251),
                s = n(14850),
                c = n(92614),
                l = n(61965),
                d = n.n(l),
                u = n(66648);
            n(14292), n(13846);
            var h = n(16463);
            r.default = () => {
                let e = (0, h.useRouter)();
                return (0, o.useEffect)(() => {
                    a.Z.logEvent({
                        name: "page_view",
                        page: {
                            name: "Error404Screen",
                            url: window.location.href
                        }
                    }), (0, s.RQ)("Error404Screen");
                    let r = new URLSearchParams(window.location.search).get("sessionId");
                    r && e.push("/join/".concat(r))
                }, []), (0, t.jsx)(c.Z, {
                    leftContent: (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)("p", {
                            className: "".concat(d().webHero40Sb, " ").concat(d().baseWhite, " ").concat(d().redirectErrorHero),
                            children: "Oops, It looks like something went wrong"
                        }), (0, t.jsx)("p", {
                            className: "".concat(d().webBody16R, " ").concat(d().white5),
                            children: "We couldn't find the page you were looking for!"
                        }), (0, t.jsxs)("p", {
                            className: "".concat(d().webCaption13R, " ").concat(d().white20, " ").concat(d().redirectErrorCaption),
                            children: ["Still running into issues?", " ", (0, t.jsx)("a", {
                                href: "mailto:team@teleparty.com",
                                target: "_blank",
                                className: d().baseRed,
                                rel: "noreferrer",
                                children: "Contact Us"
                            })]
                        })]
                    }),
                    rightContent: (0, t.jsx)(t.Fragment, {
                        children: (0, t.jsx)(u.default, {
                            style: {
                                width: "400px"
                            },
                            alt: "Invalid Session",
                            src: i.FN
                        })
                    })
                })
            }
        },
        57032: function(e, r, n) {
            "use strict";
            var t, o;
            n.d(r, {
                E: function() {
                    return t
                }
            }), (o = t || (t = {}))[o.BASE_BLACK = 0] = "BASE_BLACK", o[o.MOVIE_BACKGROUND = 1] = "MOVIE_BACKGROUND", o[o.STRANGER_BG = 2] = "STRANGER_BG", o[o.GRADIENT = 3] = "GRADIENT"
        },
        36571: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return f
                }
            });
            var t = n(57437),
                o = n(2265),
                i = n(57032),
                a = n(61965),
                s = n.n(a),
                c = n(40180),
                l = n.n(c),
                d = n(72498),
                u = n(95193),
                h = n(87138);
            class g extends o.Component {
                render() {
                    let e = (0, t.jsx)("img", {
                        src: "".concat(u.G3, "/img/refactor/tp-icon/red/IconRed.svg"),
                        alt: "Red Teleparty Logo"
                    });
                    return this.props.accent === d.A.WHITE && (e = (0, t.jsx)("img", {
                        src: "".concat(u.G3, "/img/refactor/tp-icon/white/IconWhite.svg"),
                        alt: "White Teleparty Logo"
                    })), (0, t.jsxs)("nav", {
                        style: this.props.style,
                        className: s().onboardNav,
                        children: [(0, t.jsx)(h.default, {
                            href: "/",
                            children: e
                        }), this.props.showFaq ? (0, t.jsxs)("p", {
                            className: s().webBody14M,
                            children: ["Having Trouble?\xa0", (0, t.jsx)(h.default, {
                                href: "/support",
                                target: "none",
                                className: this.props.accent !== d.A.RED ? s().white5 : s().baseRed,
                                children: "View our FAQ"
                            })]
                        }) : (0, t.jsx)(t.Fragment, {
                            children: " "
                        })]
                    })
                }
            }
            g.defaultProps = {
                accent: d.A.RED,
                showFaq: !0
            };
            var f = e => {
                let {
                    backgroundType: r = i.E.BASE_BLACK,
                    showNavBar: n = !0,
                    accent: a = d.A.RED,
                    showFaq: c = !0,
                    overflow: u = !0,
                    children: h
                } = e, f = () => {
                    l()("body").removeClass()
                }, v = e => {
                    if (f(), e === i.E.BASE_BLACK) return
                };
                return (0, o.useEffect)(() => {
                    v(r);
                    let e = e => {
                        "tp_reload" === e.data && e.isTrusted && window.location.reload()
                    };
                    return window.addEventListener("message", e), () => {
                        window.removeEventListener("message", e), f()
                    }
                }, [r]), (0, o.useEffect)(() => {
                    v(r)
                }, [r]), (0, t.jsxs)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        height: "100vh"
                    },
                    children: [n ? r === i.E.MOVIE_BACKGROUND ? (0, t.jsx)(g, {
                        accent: a,
                        showFaq: c
                    }) : r === i.E.GRADIENT ? (0, t.jsx)(g, {
                        accent: d.A.WHITE,
                        showFaq: c
                    }) : (0, t.jsx)(g, {
                        accent: a,
                        showFaq: c
                    }) : null, (0, t.jsx)("div", {
                        style: {
                            flex: 1,
                            overflow: u ? "" : "hidden"
                        },
                        children: h
                    }), r === i.E.MOVIE_BACKGROUND ? (0, t.jsx)("div", {
                        className: s().onboardImagebg,
                        children: (0, t.jsx)("div", {
                            className: s().permissionBgImg
                        })
                    }) : r === i.E.GRADIENT ? (0, t.jsx)("div", {
                        className: "".concat(s().onboardGradientbg)
                    }) : r === i.E.STRANGER_BG ? (0, t.jsx)("div", {
                        className: s().onboardStrangerBg
                    }) : null]
                })
            }
        },
        92614: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return d
                }
            });
            var t = n(57437),
                o = n(2265),
                i = n(57032),
                a = n(36571),
                s = n(72498),
                c = n(61965),
                l = n.n(c);
            class d extends o.Component {
                render() {
                    return (0, t.jsx)(a.Z, {
                        backgroundType: i.E.BASE_BLACK,
                        accent: s.A.RED,
                        showFaq: !1,
                        children: (0, t.jsx)("div", {
                            className: "".concat(l().errorScreenContainer, " ").concat(l().onboardContainer),
                            children: (0, t.jsxs)("div", {
                                className: l().errorScreenDescription,
                                children: [(0, t.jsx)("div", {
                                    className: l().errorScreenLeft,
                                    children: this.props.leftContent
                                }), (0, t.jsx)("div", {
                                    className: l().errorScreenRight,
                                    children: this.props.rightContent
                                })]
                            })
                        })
                    })
                }
            }
        },
        72498: function(e, r, n) {
            "use strict";
            var t, o;
            n.d(r, {
                A: function() {
                    return t
                }
            }), (o = t || (t = {}))[o.RED = 0] = "RED", o[o.WHITE = 1] = "WHITE", o[o.RED_WHITE = 2] = "RED_WHITE"
        },
        66648: function(e, r, n) {
            "use strict";
            n.d(r, {
                default: function() {
                    return o.a
                }
            });
            var t = n(55601),
                o = n.n(t)
        },
        16463: function(e, r, n) {
            "use strict";
            var t = n(71169);
            n.o(t, "useRouter") && n.d(r, {
                useRouter: function() {
                    return t.useRouter
                }
            }), n.o(t, "useServerInsertedHTML") && n.d(r, {
                useServerInsertedHTML: function() {
                    return t.useServerInsertedHTML
                }
            })
        },
        55601: function(e, r, n) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                    value: !0
                }),
                function(e, r) {
                    for (var n in r) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: r[n]
                    })
                }(r, {
                    default: function() {
                        return c
                    },
                    getImageProps: function() {
                        return s
                    }
                });
            let t = n(99920),
                o = n(80497),
                i = n(38173),
                a = t._(n(21241));

            function s(e) {
                let {
                    props: r
                } = (0, o.getImgProps)(e, {
                    defaultLoader: a.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/_next/image",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !1
                    }
                });
                for (let [e, n] of Object.entries(r)) void 0 === n && delete r[e];
                return {
                    props: r
                }
            }
            let c = i.Image
        },
        14292: function() {},
        13846: function() {}
    },
    function(e) {
        e.O(0, [828, 241, 8038, 7961, 4073, 7138, 8173, 7294, 1965, 5232, 2971, 7023, 1744], function() {
            return e(e.s = 53854)
        }), _N_E = e.O()
    }
]);