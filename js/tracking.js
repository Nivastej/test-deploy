const isFirefox = /Firefox\//.test(window.navigator.userAgent);
const isSafari = /^((?!Chrome).)*Safari\//.test(window.navigator.userAgent);
const isChromeBased = /Chrome\//.test(window.navigator.userAgent);

const isSupportedBrowser = isChromeBased && !isFirefox && !isSafari;

const isSidebarPath = window.location.pathname.includes("/sidebar");

const IFRAME_ID = "Iframe";
const BACKGROUND_SERVICE_ID = "Service_Background";
const API_ENDPOINT = "https://api.teleparty.com";

const EXTENSION_IDS = [
    "bpgopfmgmnojmhnhmgpfmpnookgbmkko",
    "oocalimimngaihdkbihfgmpkcpnmlaoa",
    "igbncjcgfkfnfgbaieiimpfkobabmkce",
];

const SIDEBAR_ALLOWED_EVENTS = [
    "upgrade",
    "copy_link",
    "close_chat",
    "toggle_mic",
    "toggle_video",
    "reaction_holder-reaction",
    "preview_gif",
    "emoji_picker-emoji",
];

let mainExtensionFrameWindow;
let extensionId;
let _targetOrigin;
const NO_CALLBACK = "null";
const _callbackMap = new Map();

const ExtensionService = {
    async getExtensionId() {
        if (extensionId !== undefined) {
            return extensionId;
        }

        return new Promise((resolve, reject) => {
            const detectHelper = (index) => {
                if (index >= EXTENSION_IDS.length) {
                    reject();
                    return;
                }
                try {
                    const img = new Image();
                    img.onload = () => {
                        extensionId = EXTENSION_IDS[index];
                        ``;
                        resolve(EXTENSION_IDS[index]);
                    };

                    img.onerror = () => {
                        const img2 = new Image();
                        img2.src = `chrome-extension://${EXTENSION_IDS[index]}/img/Batman.svg`;
                        img2.onload = () => {
                            extensionId = EXTENSION_IDS[index];
                            resolve(EXTENSION_IDS[index]);
                        };
                        img2.onerror = () => {
                            detectHelper(index + 1);
                        };
                    };
                    img.src = `chrome-extension://${EXTENSION_IDS[index]}/img/icons/General/Batman.svg`;
                } catch (e) {
                    console.log("Error", e);
                }
            };
            detectHelper(0);
        });
    },

    formatExtensionId(extensionId) {
        return `chrome-extension://${extensionId}`;
    },
};

async function setupIFrameWindowAsync() {
    try {
        mainExtensionFrameWindow = undefined;

        const currentExtensionId = await ExtensionService.getExtensionId();
        _targetOrigin = ExtensionService.formatExtensionId(currentExtensionId);

        const tempFrame = document.createElement("iframe");
        tempFrame.frameborder = 0;
        tempFrame.scrolling = "no";
        tempFrame.style.display = "none";
        tempFrame.id = "extensionFrame";

        document.querySelector("body").appendChild(tempFrame);

        const frame = document.querySelector("#extensionFrame");
        frame.src = `${_targetOrigin}/web/connectFrame.html`;

        frame.onload = () => {
            if (frame !== null) {
                const extensionFrameWindow = frame.contentWindow;
                if (extensionFrameWindow) {
                    mainExtensionFrameWindow = extensionFrameWindow;
                }
            }
        };
    } catch (error) {
        console.error("Error setting up iframe:", error);
    }
}

function makeId() {
    let result = "";
    const hexChars = "0123456789abcdef";
    for (let i = 0; i < 16; i += 1) {
        result += hexChars[Math.floor(Math.random() * 16)];
    }
    return result;
}

function addCallback(callback) {
    let newId = makeId();
    while (_callbackMap.has(newId)) {
        newId = makeId();
    }
    _callbackMap.set(newId, callback);
    return newId;
}

function executeCallback(callbackId, data) {
    const callback = _callbackMap.get(callbackId);
    if (callback) {
        callback({
            data: data
        });
        _callbackMap.delete(callbackId);
    }
}

function _isMessageTrusted(e) {
    return true;
    //   return (
    //     e.isTrusted &&
    //     (EXTENSION_IDS.some((id) => e.origin === `chrome-extension://${id}`) ||
    //       e.origin.match(
    //         /^https?:\/\/((?:([^.]*\.)?teleparty\.com(:[0-9]+)?)|(?:localhost(:[0-9]+)?))$/,
    //       ) != null)
    //   );
}

function _formatMessage(type, data, callbackId) {
    return {
        type: type,
        data: data,
        callbackId: callbackId,
        sender: IFRAME_ID,
        target: BACKGROUND_SERVICE_ID,
    };
}

async function sendMessage(type, data, callback) {
    let callbackId = NO_CALLBACK;
    if (callback) {
        callbackId = addCallback(callback);
    }

    if (
        mainExtensionFrameWindow !== undefined &&
        mainExtensionFrameWindow.window == null
    ) {
        await setupIFrameWindowAsync();
    }

    try {
        if (mainExtensionFrameWindow !== undefined) {
            const formattedMessage = _formatMessage(type, data, callbackId);
            mainExtensionFrameWindow.postMessage(formattedMessage, _targetOrigin);
        } else {
            throw new Error("Extension frame window not initialized");
        }
    } catch (error) {
        if (callback) {
            callback({
                error: "Couldn't load Iframe"
            });
        }
    }
}

function onWindowMessage(e) {
    try {
        if (_isMessageTrusted(e)) {
            const message = e.data;
            if (message && message.callbackId) {
                executeCallback(message.callbackId, message.data);
            }
        }
    } catch (error) {
        console.log(
            "An error occurred while parsing the response from the Extension.",
            error,
        );
    }
}

const updateToken = async (refresh = false) => {
    return new Promise((resolve, reject) => {
        const tokenTimeout = setTimeout(() => {
            reject("Token timeout");
        }, 3000);

        sendMessage(
            "getAuthToken", {
                refresh,
            },
            (response) => {
                clearTimeout(tokenTimeout);
                const responseData = response.data;
                if (!responseData) {
                    reject("No Token Response");
                    return;
                }
                if (responseData.error) {
                    reject(responseData.error);
                } else {
                    const responseToken = responseData.token;
                    resolve(responseToken);
                }
            },
        );
    });
};

function delayUntil(condition, maxDelay = 10000, delayStep = 250) {
    return new Promise((resolve, reject) => {
        const startTime = Date.now();

        const checkCondition = () => {
            if (condition()) {
                resolve();
                return;
            }

            if (Date.now() - startTime > maxDelay) {
                reject(new Error("Timeout waiting for condition"));
                return;
            }

            setTimeout(checkCondition, delayStep);
        };

        checkCondition();
    });
}

async function waitIframeReady() {
    return delayUntil(() => mainExtensionFrameWindow !== undefined);
}

const isUserLoggedIn = async () => {
    try {
        await waitIframeReady();
        const token = await updateToken();
        return !!token;
    } catch (error) {
        return false;
    }
};

const getUserSubscription = async () => {
    try {
        const token = await updateToken();
        if (!token) {
            return null;
        }

        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", `${API_ENDPOINT}/subscription`);
        xmlhttp.setRequestHeader("Authorization", `Bearer ${token}`);
        xmlhttp.setRequestHeader("Content-Type", "application/json");

        return new Promise((resolve, reject) => {
            xmlhttp.onreadystatechange = () => {
                if (xmlhttp.readyState === XMLHttpRequest.DONE) {
                    if (xmlhttp.status >= 200 && xmlhttp.status < 400) {
                        const subscriptionData = JSON.parse(xmlhttp.responseText);
                        resolve({
                            hasSubscription: subscriptionData !== undefined &&
                                !["canceled", "unpaid", "incomplete_expired"].includes(
                                    subscriptionData.subscriptionStatus,
                                ),
                            ...subscriptionData,
                        });
                    } else {
                        reject(xmlhttp.responseText);
                    }
                }
            };
            xmlhttp.timeout = 5000;
            xmlhttp.send();
        });
    } catch (error) {
        return null;
    }
};

async function initializeTelepartyState() {
    try {
        const is_logged_in = await window.TelepartyAnalytics.isUserLoggedIn();
        window.TelepartyState.is_logged_in = is_logged_in;
        window.TelepartyState.signed_in = is_logged_in;

        try {
            const userData = await getUserData();
            if (userData ? .currentUser) {
                const userIds = userData.currentUser.userIds ?
                    {
                        firebase_id: userData.currentUser.userIds.firebaseId,
                        perm_id: userData.currentUser.userIds.permId,
                        uuid: userData.currentUser.userIds.uuid,
                    } :
                    {};
                window.TelepartyState = {
                    ...window.TelepartyState,
                    name: userData.currentUser.displayName || userData.currentUser.email,
                    email: userData.currentUser.email,
                    ...userIds,
                };
            }
        } catch (error) {
            console.error("Failed to get user data:", error);
        }

        if (is_logged_in) {
            const subscription =
                await window.TelepartyAnalytics.getUserSubscription();
            if (subscription) {
                window.TelepartyState = {
                    ...window.TelepartyState,
                    stripe_id: subscription.customerId,
                    id: subscription.uid,
                    plan: `premium_${subscription.subscriptionType}`,
                    on_trial: subscription.subscriptionStatus === "trialing",
                };
            }
        }
        window.initializedData = true;
    } catch (error) {
        console.error("Failed to initialize Teleparty state:", error);
        window.initializedData = false;
    }
}

async function getUserData() {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject("User data timeout");
        }, 10000);

        sendMessage("getInitUserSettings", {}, (response) => {
            clearTimeout(timeout);
            if (response.error) {
                reject(response.error);
                return;
            }
            if (response.data) {
                resolve(response.data);
            } else {
                reject("No user data");
            }
        });
    });
}

if (isSupportedBrowser) {
    window.TelepartyAnalytics = {
        isUserLoggedIn,
        getUserSubscription,
    };

    window.TelepartyState = {
        is_logged_in: false,
        signed_in: false,
    };

    window.initializedData = false;

    // Call initialization when page loads
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeTelepartyState);
    } else {
        initializeTelepartyState();
    }

    !(function(t, e) {
        var o, n, p, r;
        e.__SV ||
            ((window.posthog = e),
                (e._i = []),
                (e.init = function(i, s, a) {
                    function g(t, e) {
                        var o = e.split(".");
                        2 == o.length && ((t = t[o[0]]), (e = o[1])),
                            (t[e] = function() {
                                t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
                            });
                    }
                    ((p = t.createElement("script")).type = "text/javascript"),
                    (p.crossOrigin = "anonymous"),
                    (p.async = !0),
                    (p.src =
                        s.api_host.replace(".i.posthog.com", "-assets.i.posthog.com") +
                        "/static/array.js"),
                    (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(
                        p,
                        r,
                    );
                    var u = e;
                    for (
                        void 0 !== a ? (u = e[a] = []) : (a = "posthog"),
                        u.people = u.people || [],
                        u.toString = function(t) {
                            var e = "posthog";
                            return (
                                "posthog" !== a && (e += "." + a), t || (e += " (stub)"), e
                            );
                        },
                        u.people.toString = function() {
                            return u.toString(1) + ".people (stub)";
                        },
                        o =
                        "init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug getPageViewId captureTraceFeedback captureTraceMetric".split(
                            " ",
                        ),
                        n = 0; n < o.length; n++
                    )
                        g(u, o[n]);
                    e._i.push([i, s, a]);
                }),
                (e.__SV = 1));
    })(document, window.posthog || []);
    if (window.posthog) {
        window.posthog.init(window.POSTHOG_KEY, {
            api_host: "https://us.i.posthog.com",
            auto_capture: false,
            capture_pageview: false,
        });
    }

    window.capturePosthogEvent = async (event) => {
        if (
            isSidebarPath &&
            (event.name !== "user_click" ||
                !event.component ||
                (event.name === "user_click" &&
                    !SIDEBAR_ALLOWED_EVENTS.includes(event.component.name)))
        ) {
            return;
        }
        try {
            if (!window.initializedData) {
                // Wait for all initialization calls to complete
                await initializeTelepartyState();
            }

            // Enhance event with user data
            const eventData = {
                ...event,
                user: {
                    ...window.TelepartyState,
                    ...event.user,
                },
            };

            // Send event to Posthog
            window.posthog.capture(event.name, eventData);
        } catch (error) {
            // Still send the event, but with whatever state we have
            window.posthog.capture(event.name, {
                ...event,
                user: {
                    ...window.TelepartyState,
                    ...event.user,
                },
            });
        }
    };

    // Initialize everything
    (async function init() {
        try {
            await setupIFrameWindowAsync();
        } catch (error) {
            console.error("Setup failed:", error);
        }
    })();

    window.addEventListener("message", onWindowMessage);
} else {
    window.initializedData = true;
}