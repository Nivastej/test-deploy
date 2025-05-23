import {
    v4 as uuid
} from "https://jspm.dev/uuid";

console.log("load");
const mobileMenu = document.querySelector("#mobile-menu");
if (mobileMenu) {
    mobileMenu.addEventListener("click", (e) => {
        document
            .querySelector(".mobile-menu-holder")
            .classList.toggle("mobile-menu-holder-visible");
    });
}
const main = document.querySelector("main");
if (main) {
    main.addEventListener("click", () => {
        const mobileHolder = document.querySelector(".mobile-menu-holder");
        if (mobileHolder) {
            mobileHolder.classList.remove("mobile-menu-holder-visible");
        }
    });
}

var acc = document.getElementsByClassName("accordion");
var i;

if (document.querySelector("#hiw-active-content")) {
    var active = document.querySelector(".accordion-active");
    if (active) {
        var panel = active.nextElementSibling;
        document.querySelector("#hiw-active-content").innerHTML = panel.innerHTML;
    }
}
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;

        if (document.querySelector("#hiw-active-content")) {
            for (
                var i = 0, elem;
                (elem = document.getElementsByClassName("accordion-active")[i]); i++
            ) {
                elem.classList.remove("accordion-active");
            }
            this.classList.toggle("accordion-active");
            document.querySelector("#hiw-active-content").innerHTML = panel.innerHTML;
        } else {
            if (!panel.classList.contains("visible")) {
                this.firstElementChild.outerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                `;
            } else {
                this.firstElementChild.outerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                `;
            }
            panel.classList.toggle("visible");
        }
    });
}

document.querySelectorAll(".article-content button").forEach((element) => {
    element.innerHTML += `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    `;
});

window.addEventListener("popstate", (event) => {
    // Code to execute when the user navigates back or forward
    console.log("History state changed:", event.state);
});

if (window.location.pathname.includes("/support")) {
    window.addEventListener("scroll", function() {
        const targets = [
            "system",
            "installation",
            "hostparty",
            "joinparty",
            "chatsettings",
            "privacy",
            "premium",
            "mobile",
        ];
        for (var i = targets.length - 1; i >= 0; i--) {
            const tocTarget = document.getElementById(targets[i] + "-toc");
            if (!tocTarget) {
                return;
            }
            if (i == 0) {
                document.querySelectorAll(".support-toc a").forEach((elem) => {
                    elem.classList.remove("accordion-active");
                });
                tocTarget.classList.add("accordion-active");
            } else {
                const prevScrollTarget = document.getElementById(targets[i]);
                if (
                    prevScrollTarget &&
                    window.scrollY + 250 >= prevScrollTarget.offsetTop
                ) {
                    document.querySelectorAll(".support-toc a").forEach((elem) => {
                        elem.classList.remove("accordion-active");
                    });
                    tocTarget.classList.add("accordion-active");
                    break;
                }
            }
        }
        // var elementTarget = document.getElementById("system");
        // if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
        //     alert("You've scrolled past the second div");
        // }
    });
}

// document.querySelectorAll(".accordion.web-link").forEach((sample) => {const data = { "@type": "Question", "name": sample.innerText, "acceptedAnswer": { "@type": "Answer", "text": sample.nextElementSibling.querySelector(".web-txt").outerHTML}}; answerArray.push(data)})

// GET EXTENSION INFORMATION

var mainExtensionFrameWindow;
var extensionId;
var EXTENSION_IDS = [
    "bpgopfmgmnojmhnhmgpfmpnookgbmkko",
    "oocalimimngaihdkbihfgmpkcpnmlaoa",
    "igbncjcgfkfnfgbaieiimpfkobabmkce",
];
var _callbackMap = new Map();
var _targetOrigin;
var NO_CALLBACK = "null";
var currentPermId;

async function delay(milliseconds) {
    return function(result) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(result);
            }, milliseconds);
        });
    };
}

function delayUntil(condition, maxDelay, delayStep = 250) {
    return function(result) {
        const startTime = new Date().getTime();
        const checkForCondition = function() {
            if (condition()) {
                return Promise.resolve(result);
            }
            if (maxDelay !== null && new Date().getTime() - startTime > maxDelay) {
                return Promise.reject(new Error("delayUntil timed out" + condition));
            }
            return delay(delayStep).then(checkForCondition);
        };
        return checkForCondition();
    };
}

async function getExtensionId() {
    if (extensionId !== undefined) {
        return extensionId;
    } else {
        return new Promise((resolve, reject) => {
            var detectHelper = (index) => {
                if (index >= EXTENSION_IDS.length) {
                    reject();
                    return;
                }
                try {
                    var img = new Image();
                    img.onload = () => {
                        extensionId = EXTENSION_IDS[index];
                        resolve(EXTENSION_IDS[index]);
                    };

                    img.onerror = () => {
                        var img2 = new Image();
                        img2.src =
                            "chrome-extension://" + EXTENSION_IDS[index] + "/img/Batman.svg";
                        img2.onload = () => {
                            extensionId = EXTENSION_IDS[index];
                            resolve(EXTENSION_IDS[index]);
                        };
                        img2.onerror = function() {
                            detectHelper(index + 1);
                        };
                    };
                    img.src =
                        "chrome-extension://" +
                        EXTENSION_IDS[index] +
                        "/img/icons/General/Batman.svg";
                } catch (e) {
                    console.log("Error", e);
                }
            };
            detectHelper(0);
        });
    }
}

async function setupIFrameWindowAsync() {
    try {
        mainExtensionFrameWindow = undefined;

        const currentExtensionId = await getExtensionId();
        _targetOrigin = "chrome-extension://" + currentExtensionId;
        let frame;

        const tempFrame = document.createElement("iframe");
        tempFrame.frameborder = 0;
        tempFrame.scrolling = "no";
        tempFrame.style.display = "none";
        tempFrame.id = "extensionFrame";

        document.querySelector("body").appendChild(tempFrame);

        frame = document.querySelector("#extensionFrame");

        frame.src = `${_targetOrigin}/web/connectFrame.html`;
        frame.onload = () => {
            console.log("Loaded iframe");
            if (frame !== null) {
                var extensionFrameWindow = frame.contentWindow;
                if (extensionFrameWindow) {
                    mainExtensionFrameWindow = extensionFrameWindow;
                }
            }
        };
    } catch (error) {}
}

function makeId() {
    let result = "";
    const hexChars = "0123456789abcdef";
    for (let i = 0; i < 16; i += 1) {
        result += hexChars[Math.floor(Math.random() * 16)];
    }
    return result;
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
    if (
        e.isTrusted &&
        (e.origin === `chrome-extension://${EXTENSION_IDS[2]}` ||
            e.origin === `chrome-extension://${EXTENSION_IDS[0]}` ||
            e.origin === `chrome-extension://${EXTENSION_IDS[1]}` ||
            e.origin.match(
                /^https?:\/\/((?:([^.]*\.)?teleparty\.com(:[0-9]+)?)|(?:localhost(:[0-9]+)?))$/,
            ) != null)
    ) {
        return true;
    } else {
        console.warn("Blocked unauthorized message");
    }
}

function getCallbackFunction(event) {
    return (message) => {
        const data = event.data;
        if (data.callbackId) {
            const callbackId = event.data.callbackId;
            const returnMessage = {
                callbackId: callbackId,
                data: message,
            };
            window.top ? .postMessage(returnMessage, event.origin);
        } else {
            window.top ? .postMessage(message, event.origin);
        }
    };
}

function onWindowMessage(e) {
    try {
        if (_isMessageTrusted(e)) {
            const message = e.data;
            if (message) {
                if (message.type === "returnPermId") {
                    const callback = getCallbackFunction(e);

                    callback(localStorage.getItem("currentPermId"));
                    return;
                }
            }
            if (message && message.callbackId) {
                executeCallback(message.callbackId, message.data);
            }
        }
    } catch (error) {
        console.log(
            "An error occured while parsing the response from the Extension.",
            error,
        );
    }
}

function addCallback(callback) {
    let newId = makeId();
    while (_callbackMap.has(newId)) {
        newId = makeId();
    }
    _callbackMap.set(newId, callback);
    return newId;
}

async function _waitIframeReady() {
    return delayUntil(
        () => {
            return mainExtensionFrameWindow !== undefined;
        },
        1000,
        10,
    )();
}

function _formatMessage(type, data, callbackId) {
    return {
        type: type,
        data: data,
        callbackId: callbackId,
    };
}

async function getPermId() {
    await sendMessage("GetPermId", {}, (res) => {
        if (res.data) {
            currentPermId = res.data;
            localStorage.setItem("currentPermId", currentPermId);
            console.log("Perm ID:", currentPermId);
        }
    });
}

function resetAppId() {
    const FIFTEEN_MINUTES_DELAY = 900000;
    let appId = localStorage.getItem("appId");
    if (!appId) {
        appId = uuid();
        localStorage.setItem("appId", appId);
        localStorage.setItem("appIdTime", Date.now());
        localStorage.setItem("startAppIdTime", Date.now());
        localStorage.setItem("eventNumber", 0);
    } else if (appId) {
        if (
            Date.now() - parseInt(localStorage.getItem("appIdTime")) >
            FIFTEEN_MINUTES_DELAY
        ) {
            appId = uuid();
            localStorage.setItem("appId", appId);
            localStorage.setItem("appIdTime", Date.now());
            localStorage.setItem("startAppIdTime", Date.now());
            localStorage.setItem("eventNumber", 0);
        }
    }
}

function getSessionReferrer() {
    if (document.referrer && !document.referrer.includes(".teleparty.")) {
        localStorage.setItem("sessionReferrer", document.referrer);
    }
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
        console.log("Need refresh");
        setupIFrameWindowAsync();
    }

    try {
        if (mainExtensionFrameWindow !== undefined) {
            const formattedMessage = _formatMessage(type, data, callbackId);
            mainExtensionFrameWindow.postMessage(formattedMessage, _targetOrigin);
        }
    } catch (error) {
        console.log("Error", error);
        if (callback) {
            console.log("Couldn't load frame");
            callback({
                error: "Couldn't load Iframe"
            });
            currentPermId = localStorage.getItem("currentPermId");
            if (!currentPermId) {
                currentPermId = uuid();
                localStorage.setItem("currentPermId", currentPermId);
            }
        }
    }
}

const PROD_LOG_EVENT_LINK = "https://metis.teleparty.com/v1/record";
const STAGING_LOG_EVENT_LINK = "https://metis-staging.teleparty.com/v1/record";

async function logEvent(event) {
    resetAppId();
    localStorage.setItem("appIdTime", Date.now());
    localStorage.setItem(
        "eventNumber",
        parseInt(localStorage.getItem("eventNumber")) + 1,
    );
    event.app_session = {
        id: localStorage.getItem("appId"),
        start_time_ms: parseInt(localStorage.getItem("startAppIdTime")),
        event_number: parseInt(localStorage.getItem("eventNumber")),
        referrer: localStorage.getItem("sessionReferrer"),
    };
    event.client_timestamp_ms = Date.now();
    event.app = {
        name: "web",
        version: get_browser(),
    };
    event.screen = {
        width: window.innerWidth,
        height: window.innerHeight,
    };

    event.page = {
        url: window.location.href,
        referrer: document.referrer,
    };

    event.user = {
        id: localStorage.getItem("currentPermId"),
    };

    if (window.capturePosthogEvent) {
        window.capturePosthogEvent(event);
    }

    try {
        if (mainExtensionFrameWindow !== undefined) {
            return new Promise((resolve, reject) => {
                sendMessage(
                    "logEvent", {
                        event,
                    },
                    (res) => {
                        resolve();
                        // Ignore errors from old versions.
                    },
                );
            });
        } else {
            const xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
            xmlhttp.open("PUT", PROD_LOG_EVENT_LINK);
            xmlhttp.setRequestHeader("Content-Type", "application/json");
            xmlhttp.send(JSON.stringify(event));
        }
    } catch (e) {
        console.log("An unknown error has occurred", e);
    }
}

setupIFrameWindowAsync();

window.addEventListener("message", (e) => onWindowMessage(e));

function get_browser() {
    var ua = navigator.userAgent,
        tem,
        M =
        ua.match(
            /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i,
        ) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return `IE v${tem[1] || ""}`;
    }
    if (M[1] === "Chrome") {
        tem = ua.match(/\bOPR|Edge\/(\d+)/);
        if (tem != null) {
            return `Opera v${tem[1]}`;
        }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
    }
    return `${M[0]} v${M[1]}`;
}

const pageViewEvent = () => {
    getPermId().then(() => {
        resetAppId();
        getSessionReferrer();
        console.log("Trying to call page view");
        let event = {
            name: "page_view",
        };
        logEvent(event);
    });
};

// Check if page is already loaded
if (document.readyState === "complete") {
    pageViewEvent();
} else {
    window.addEventListener("load", pageViewEvent);
}

window.onclick = function(e) {
    let event = {
        name: "user_click",
        component: {
            name: e.target.className,
            origin: "tpWebsite",
        },
    };
    logEvent(event);
};