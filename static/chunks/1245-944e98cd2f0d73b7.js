(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1245], {
        95193: function(e, n, t) {
            "use strict";
            t.d(n, {
                DW: function() {
                    return m
                },
                EO: function() {
                    return h
                },
                G3: function() {
                    return p
                },
                G5: function() {
                    return d
                },
                GV: function() {
                    return U
                },
                IZ: function() {
                    return g
                },
                J6: function() {
                    return y
                },
                Kq: function() {
                    return s
                },
                Nb: function() {
                    return r
                },
                Ox: function() {
                    return S
                },
                SF: function() {
                    return j
                },
                X7: function() {
                    return u
                },
                YK: function() {
                    return k
                },
                Zm: function() {
                    return N
                },
                aS: function() {
                    return o
                },
                by: function() {
                    return E
                },
                dV: function() {
                    return b
                },
                dd: function() {
                    return P
                },
                kq: function() {
                    return L
                },
                lZ: function() {
                    return w
                },
                li: function() {
                    return T
                },
                nO: function() {
                    return x
                },
                oD: function() {
                    return v
                },
                sK: function() {
                    return f
                },
                uE: function() {
                    return _
                },
                ut: function() {
                    return I
                },
                vM: function() {
                    return A
                },
                z7: function() {
                    return c
                }
            });
            var i, r, l = t(68429),
                a = t(63858);
            let o = ["bpgopfmgmnojmhnhmgpfmpnookgbmkko", "oocalimimngaihdkbihfgmpkcpnmlaoa", "igbncjcgfkfnfgbaieiimpfkobabmkce"],
                s = "permissions_request",
                c = "Content_Script",
                u = "Iframe",
                m = "null",
                d = "GetPermissions",
                f = "CheckHasPermissions",
                h = "onboard",
                p = "https://netflixparty.b-cdn.net",
                g = 6048e5,
                b = 36e5,
                _ = 2e3,
                v = "TP_Sidebar",
                x = "Service_Background",
                w = 500,
                N = 6e4,
                k = 200,
                A = 300,
                j = 500,
                y = 1500,
                S = 10,
                I = 1e4,
                E = 4,
                L = 20,
                T = "".concat(l.Nu, "/upgrade"),
                U = [{
                    inActiveImage: "".concat(p, "/img/refactor/platform_icons/Netflix_Full_Logo_White.svg"),
                    activeImage: "".concat(p, "/img/refactor/platform_icons/Netflix_Full_Logo_White.svg"),
                    serviceName: "netflix",
                    url: "https://netflix.com"
                }, {
                    inActiveImage: "".concat(p, "/img/refactor/platform_icons/Hulu_Full_Logo_White.svg"),
                    activeImage: "".concat(p, "/img/refactor/platform_icons/Hulu_Full_Logo_White.svg"),
                    serviceName: "hulu",
                    url: "https://hulu.com"
                }, {
                    inActiveImage: "".concat(p, "/img/refactor/platform_icons/Disney_Full_Logo_All_White.svg"),
                    activeImage: "".concat(p, "/img/refactor/platform_icons/Disney_Full_Logo_All_White.svg"),
                    serviceName: "disney",
                    url: "https://disneyplus.com"
                }, {
                    inActiveImage: "".concat(p, "/img/refactor/platform_icons/HBO_Icon_White.svg"),
                    activeImage: "".concat(p, "/img/refactor/platform_icons/HBO_Icon_White.svg"),
                    serviceName: "hbomax",
                    url: "https://hbomax.com"
                }, {
                    inActiveImage: "".concat(p, "/img/refactor/platform_icons/Amazon_Full_Logo_White.svg"),
                    activeImage: "".concat(p, "/img/refactor/platform_icons/Amazon_Full_Logo_White.svg"),
                    serviceName: "amazon",
                    url: "https://www.amazon.com/gp/video/storefront/ref=topnav_storetab_atv"
                }];

            function P(e, n, t) {
                if (a.vU) return "/not-supported";
                let i = "https://chromewebstore.google.com/detail/netflix-party-is-now-tele/oocalimimngaihdkbihfgmpkcpnmlaoa",
                    r = new URLSearchParams;
                e && r.append("utm_source", e), n && r.append("utm_medium", n), t && r.append("utm_campaign", t);
                let l = r.toString();
                return l && (i += (i.includes("?") ? "&" : "?") + l), i
            }(i = r || (r = {})).NETFLIX = "Netflix", i.HULU = "Hulu", i.DISNEY_PLUS = "Disney", i.DISNEY_PLUS_MENA = "DisneyMena", i.HBO_MAX = "HBOMax", i.MAX = "Max", i.YOUTUBE = "Youtube", i.YOUTUBE_TV = "YoutubeTV", i.AMAZON = "Amazon", i.CRUNCHYROLL = "Crunchyroll", i.ESPN = "ESPN+", i.PARAMOUNT = "Paramount+", i.FUNIMATION = "Funimation", i.HOTSTAR = "Hotstar", i.PEACOCK = "peacock", i.STAR_PLUS = "Starplus", i.PLUTO_TV = "PlutoTV", i.APPLE_TV = "AppleTV", i.JIO_CINEMA = "JioCinema", i.TUBI_TV = "TubiTV", i.MUBI = "Mubi", i.STAN = "Stan", i.CRAVE = "Crave", i.SLING = "slingtv", i.FUBO = "fubo", i.PHILO = "philo", i.VIKI = "viki"
        },
        68429: function(e, n, t) {
            "use strict";
            t.d(n, {
                Nu: function() {
                    return f
                },
                OL: function() {
                    return m
                },
                QP: function() {
                    return d
                },
                Qe: function() {
                    return s
                },
                Rf: function() {
                    return u
                },
                ci: function() {
                    return g
                },
                lG: function() {
                    return p
                },
                pq: function() {
                    return o
                },
                w: function() {
                    return h
                },
                xD: function() {
                    return c
                }
            });
            var i, r, l, a = t(20357);
            let o = {
                    apiKey: "AIzaSyDvZJAoFJkT2lBrhloA0e9XwKmLgELTAeQ",
                    authDomain: "teleparty-mobile.firebaseapp.com",
                    projectId: "teleparty-mobile",
                    storageBucket: "teleparty-mobile.appspot.com",
                    messagingSenderId: "961974665980",
                    appId: "1:961974665980:web:fe4179db8591331aeb8d79",
                    measurementId: "G-PC36DK40FL"
                },
                s = "pk_live_51LLeWCBfFIa77EcosTcVLToNETuBWSuAh0FJgkzwQJuDgKaU7PT4z47Ld4aaUxx0cwbxiP5Gr2fp2tiY9YH456jz00JjCONOWy",
                c = null !== (i = a.env.NEXT_PUBLIC_AGORA_APP_ID) && void 0 !== i ? i : "b312fc4565774c818db60da56f474e2f",
                u = null !== (r = a.env.NEXT_PUBLIC_USE_EMBEDDED_STRIPE_CHECKOUT) && void 0 !== r && r,
                m = null !== (l = a.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) && void 0 !== l ? l : "6Le9Xi8pAAAAAPvH_ikCkpk2NsnepSn9aMf9hSNp",
                d = "https://api.teleparty.com",
                f = "https://www.teleparty.com",
                h = "https://events.teleparty.com/record",
                p = "https://sessions.teleparty.com",
                g = "https://files.teleparty.com"
        },
        37052: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return s
                }
            });
            var i = t(57437),
                r = t(95193),
                l = t(87138),
                a = t(31877),
                o = t(2265);

            function s() {
                let [e, n] = o.useState(!1);
                return (0, o.useEffect)(() => {
                    n(function() {
                        let e = !1;
                        if (window.navigator.userAgentData) {
                            var n;
                            e = null === (n = window.navigator.userAgentData) || void 0 === n ? void 0 : n.mobile
                        } else {
                            let n = window.matchMedia("(pointer:coarse)");
                            if (n && "(pointer:coarse)" === n.media) e = !!n.matches;
                            else if ("orientation" in window) e = !0;
                            else {
                                let n = navigator.userAgent;
                                e = /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(n) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test(n)
                            }
                        }
                        return e
                    }())
                }, []), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("nav", {
                        className: "web-nav-wrapper",
                        children: (0, i.jsxs)("ul", {
                            className: "nav-container web-container",
                            children: [(0, i.jsxs)("ul", {
                                className: "links",
                                children: [(0, i.jsxs)("ul", {
                                    className: "web-mobile",
                                    children: [(0, i.jsx)("a", {
                                        id: "mobile-menu",
                                        className: "tp-logo-holder web-link txt-red",
                                        children: (0, i.jsx)("img", {
                                            className: "tp-logo",
                                            alt: "Hamburger Menu",
                                            src: "/img/Hamburger.png"
                                        })
                                    }), (0, i.jsx)("a", {
                                        href: "/",
                                        className: "tp-logo-holder web-link txt-red",
                                        children: (0, i.jsx)("img", {
                                            className: "tp-logo",
                                            alt: "Teleparty Logo",
                                            src: "/img/IconRed.svg"
                                        })
                                    })]
                                }), (0, i.jsxs)("ul", {
                                    className: "web-desktop",
                                    children: [(0, i.jsx)("li", {
                                        children: (0, i.jsx)(l.default, {
                                            href: "/",
                                            className: "web-link txt-red",
                                            children: "Teleparty"
                                        })
                                    }), (0, i.jsx)("li", {
                                        children: (0, i.jsx)("a", {
                                            href: "/#show",
                                            className: "web-link",
                                            children: "Features"
                                        })
                                    }), (0, i.jsx)("li", {
                                        children: (0, i.jsx)("a", {
                                            href: "/#howitworks",
                                            className: "web-link",
                                            children: "How It Works"
                                        })
                                    }), (0, i.jsx)("li", {
                                        children: (0, i.jsx)("a", {
                                            href: "/support",
                                            className: "web-link",
                                            children: "Support"
                                        })
                                    }), (0, i.jsx)("li", {
                                        children: (0, i.jsx)("a", {
                                            style: {
                                                color: "gold"
                                            },
                                            href: "premium",
                                            className: "web-link",
                                            children: "Go Premium"
                                        })
                                    })]
                                })]
                            }), !e && (0, i.jsx)("ul", {
                                children: (0, i.jsx)("li", {
                                    children: (0, i.jsxs)("a", {
                                        className: "install-href web-link install-btn install-btn-gradient install-desktop",
                                        href: (0, r.dd)("teleparty-next-landing", "install-button", "default"),
                                        target: "_blank",
                                        children: [(0, i.jsx)("div", {
                                            className: "web-mobile install-href web-link",
                                            children: "Install"
                                        }), (0, i.jsx)("div", {
                                            className: "web-desktop install-href web-link",
                                            children: "Install Teleparty"
                                        })]
                                    })
                                })
                            }), e && (0, i.jsx)("ul", {
                                className: "install-mobile",
                                children: (0, i.jsx)("li", {
                                    children: (0, i.jsx)("button", {
                                        className: "install-btn-gradient install-btn",
                                        children: (0, i.jsx)("a", {
                                            className: "install-href web-link",
                                            href: "https://www.teleparty.com/mobile-beta",
                                            target: "_blank",
                                            children: "Get the app"
                                        })
                                    })
                                })
                            })]
                        })
                    }), (0, i.jsxs)("div", {
                        className: "mobile-menu-holder",
                        children: [(0, i.jsxs)("div", {
                            className: "mobile-menu-link",
                            children: [(0, i.jsx)("div", {
                                className: "mobile-menu-hyphen"
                            }), (0, i.jsxs)("a", {
                                className: "mobile-menu-link-header web-link",
                                href: "/#show",
                                children: [" ", "Features"]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "mobile-menu-link",
                            children: [(0, i.jsx)("div", {
                                className: "mobile-menu-hyphen"
                            }), (0, i.jsx)("a", {
                                className: "mobile-menu-link-header web-link",
                                href: "/#show",
                                children: "How It Works"
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "mobile-menu-link",
                            children: [(0, i.jsx)("div", {
                                className: "mobile-menu-hyphen"
                            }), (0, i.jsx)("a", {
                                className: "mobile-menu-link-header web-link",
                                href: "support",
                                children: "Support"
                            })]
                        }), (0, i.jsx)("button", {
                            className: "install-btn-gradient install-btn !h-10 !w-full",
                            style: {
                                width: "100% !important",
                                height: "2.5rem !important"
                            },
                            children: (0, i.jsx)("a", {
                                className: "install-href web-link",
                                href: "https://www.teleparty.com/mobile-beta",
                                target: "_blank",
                                children: "Join the Mobile Waitlist"
                            })
                        })]
                    }), (0, i.jsx)(a.default, {
                        id: "loadBrowser",
                        children: "\n            var isEdge = navigator.userAgent.toLowerCase().indexOf(\"edg\") > -1;\n            var isFirefox = navigator.userAgent.toLowerCase().indexOf(\"firefox\") > -1;\n            var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&\n               navigator.userAgent &&\n               navigator.userAgent.indexOf('CriOS') == -1 &&\n               navigator.userAgent.indexOf('FxiOS') == -1;\n            var isChrome = !isEdge && !isFirefox && !isSafari;\n\n            var chromeUrl = \"".concat((0, r.dd)("teleparty-next-landing", "install-button", "default"), '"\n            var edgeUrl = "https://microsoftedge.microsoft.com/addons/detail/netflix-party/igbncjcgfkfnfgbaieiimpfkobabmkce";\n            var safariUrl = "https://apps.apple.com/us/app/teleparty-watch-tv-together/id6471985961?mt=12"\n            var firefoxUrl = "https://teleparty.com/not-supported?utm_source=teleparty.com&utm_medium=referral"\n            \n            let storeUrl = isEdge ? edgeUrl : isSafari ? safariUrl : isFirefox ? firefoxUrl : chromeUrl;\n\n            document.querySelectorAll(".install-href").forEach((el) => {\n                el.href = storeUrl;\n            });\n\n            document.querySelectorAll(".txt-chrome").forEach((el) => {\n                el.classList.toggle("hidden", !isChrome)\n            })\n\n            document.querySelectorAll(".txt-edge").forEach((el) => {\n                el.classList.toggle("hidden", !isEdge)\n            })\n\n            document.querySelectorAll(".txt-firefox").forEach((el) => {\n                el.classList.toggle("hidden", !isFirefox)\n            })\n\n            document.querySelectorAll(".txt-safari").forEach((el) => {\n                el.classList.toggle("hidden", !isSafari)\n            })\n\n            document.querySelectorAll(".is-chrome").forEach((el) => {\n                el.classList.toggle("hidden", !isChrome)\n            })\n            document.querySelectorAll(".hide-chrome").forEach((el) => {\n                el.classList.toggle("hidden", isChrome)\n            }) \n\n            if (!isChrome) {\n                document.querySelector(".intro-video source").src =\n                "https://netflixparty.b-cdn.net/img/land/hiw_netflix_msft_new.mp4";\n                document.querySelector(".intro-video").load()         \n            }\n        ')
                    })]
                })
            }
        },
        83916: function() {}
    }
]);