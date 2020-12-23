
/* Smart UI v9.0.0 (2020-Dec) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

(function () {


    const Version = '8.0.1';
    const templates = [];

    let namespace = 'Smart';

    if (window[namespace] && window[namespace].Version) {
        if (window[namespace].Version === Version) {
            return;
        }
        else if (window[namespace].Version !== Version) {
            namespace += Version;
        }
        else {
            let suffix = 2;
            while (window[namespace]) {
                namespace += suffix.toString();
                suffix++;
            }
        }
    }

    const isEdge = navigator.userAgent.indexOf('Edge') > -1 && navigator.appVersion.indexOf('Edge') > -1;

    if (!document.elementsFromPoint) {
        document.elementsFromPoint = document.msElementsFromPoint;
    }

    function Import(urls, async) {
        let loadedScriptsLength = 0;

        const loadScript = function (url, baseUrl) {
            return new Promise(resolve => {
                const script = document.createElement('script');

                script.src = url;
                script.onload = resolve;

                for (let j = 0; j < document.head.children.length; j++) {
                    const child = document.head.children[j];

                    if (child.src && child.src.toString().indexOf(baseUrl) >= 0) {
                        resolve();
                        return;
                    }
                }

                document.head.appendChild(script);
            });
        }

        return new Promise(resolve => {
            const urlBase = Utilities.Core.getScriptLocation();

            const syncLoadScripts = function (index) {
                if (!urls[index]) {
                    return;
                }

                const url = urlBase + '/' + urls[index];

                loadScript(url, urls[index]).then(function () {
                    loadedScriptsLength++;

                    if (loadedScriptsLength === urls.length) {
                        resolve();
                    }

                    syncLoadScripts(index + 1)
                });
            }

            if (async) {
                for (let i = 0; i < urls.length; i++) {
                    const url = urlBase + '/' + urls[i];

                    loadScript(url, urls[i]).then(function () {
                        loadedScriptsLength++;

                        if (loadedScriptsLength === urls.length) {
                            resolve();
                        }
                    });
                }
            }
            else {
                syncLoadScripts(0);
            }
        })
    }


    /** This is a class with utility methods for determing the type of a value. */
    class Types {
        /**
         * Determines whether a value is Boolean.
         * @param {Object}.
         * @return {Boolean}.
         */
        static isBoolean(value) {
            return typeof value === 'boolean';
        }

        /**
         * Determines whether a value is Function.
         * @param {Object}.
         * @return {Boolean}.
         */
        static isFunction(value) {
            return !!(value && value.constructor && value.call && value.apply);
        }

        /**
         * Determines whether a value is Array.
         * @param {Object}.
         * @return {Boolean}.
         */
        static isArray(value) {
            return Array.isArray(value);
        }

        /**
         * Determines whether a value is Object.
         * @param {Object}.
         * @return {Boolean}.
         */
        static isObject(value) {
            const that = this;

            return (value && (typeof value === 'object' || that.isFunction(value))) || false;
        }

        /**
         * Determines whether a value is Date.
         * @param {Object}.
         * @return {Boolean}.
         */
        static isDate(value) {
            return value instanceof Date;
        }

        /**
         * Determines whether a value is String.
         * @param {Object}.
         * @return {Boolean}.
         */
        static isString(value) {
            return typeof value === 'string';
        }

        /**
         * Determines whether a value is Number.
         * @param {Object}.
         * @return {Boolean}.
         */
        static isNumber(value) {
            return typeof value === 'number';
        }

        /**
         * Determines the type of an object.
         * @param {Object}.
         * @return {String} The value's type or undefined, if the type is unknown.
         */
        static getType(value) {
            const that = this;

            const types = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'Object'];
            const type = types.find(type => {
                if (that['is' + type](value)) {
                    return type;
                }
            });

            return type ? type.toLowerCase() : undefined;
        }
    }

    class Ripple {
        static animate(element, left, top, callback) {
            const target = element;

            if (!target || target instanceof HTMLElement === false) {
                return;
            }

            if (target.getElementsByClassName('smart-ripple').length === 0) {
                const span = document.createElement('span');

                span.classList.add('smart-ripple');
                span.setAttribute('role', 'presentation');

                let canAppendRipple = true;
                let firstElementChild = null;

                if (window[namespace].EnableShadowDOM && target.enableShadowDOM && target.isInShadowDOM !== true) {

                    for (let i = 0; i < target.shadowRoot.host.shadowRoot.children.length; i++) {
                        if (target.shadowRoot.host.shadowRoot.children[i].tagName.toLowerCase() === 'link') {
                            continue;
                        }

                        firstElementChild = target.shadowRoot.host.shadowRoot.children[i];
                    }

                    if (target.shadowRoot.host.shadowRoot.querySelector('.smart-ripple')) {
                        canAppendRipple = false;
                    }
                }
                else {
                    firstElementChild = target.firstElementChild;
                }

                if (canAppendRipple) {
                    if (firstElementChild && !firstElementChild.noRipple && firstElementChild.offsetHeight > 0) {
                        firstElementChild.appendChild(span);
                    }
                    else {
                        target.appendChild(span);
                    }
                }
            }

            let ripple = null;

            if (window[namespace].EnableShadowDOM && target.shadowRoot) {
                ripple = target.shadowRoot.host.shadowRoot.querySelector('.smart-ripple');
            }
            else {
                ripple = target.getElementsByClassName('smart-ripple')[0];
            }

            if (!ripple) {
                return;
            }

            ripple.innerHTML = '';
            ripple.classList.remove('smart-animate');
            ripple.style.height = ripple.style.width = Math.max(target.offsetHeight, target.offsetWidth) + 'px';

            const parentStyle = window.getComputedStyle(ripple.parentElement),
                borderLeftWidth = parseInt(parentStyle.borderLeftWidth) || 0,
                borderTopWidth = parseInt(parentStyle.borderTopWidth) || 0,
                rect = target.getBoundingClientRect(),
                x = left - (rect.left + window.pageXOffset) - ripple.offsetWidth / 2 - borderLeftWidth,
                y = top - (rect.top + window.pageYOffset) - ripple.offsetHeight / 2 - borderTopWidth;

            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('smart-animate');

            //Remove the ripple element when animation is over
            ripple.addEventListener('animationend', function handler() {
                if (ripple.parentElement) {
                    ripple.parentElement.removeChild(ripple);
                }

                if (callback) {
                    callback();
                }

                ripple.removeEventListener('animationend', handler);
                ripple.removeEventListener('animationcancel', handler);
            });

            //Remove the ripple element if the animation is canceled. Just in case
            ripple.addEventListener('animationcancel', function handler() {
                if (ripple.parentElement) {
                    ripple.parentElement.removeChild(ripple);
                }

                if (callback) {
                    callback();
                }

                ripple.removeEventListener('animationcancel', handler);
                ripple.removeEventListener('animationend', handler);
            });
        }
    }

    class Easings {
        static easeInQuad(t, b, c, d) {
            return c * (t /= d) * t + b;
        }

        static easeOutQuad(t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        }

        static easeInOutQuad(t, b, c, d) {
            if ((t /= d / 2) < 1) {
                return c / 2 * t * t + b;
            }
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        }

        static easeInCubic(t, b, c, d) {
            return c * (t /= d) * t * t + b;
        }

        static easeOutCubic(t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        }

        static easeInOutCubic(t, b, c, d) {
            if ((t /= d / 2) < 1) {
                return c / 2 * t * t * t + b;
            }

            return c / 2 * ((t -= 2) * t * t + 2) + b;
        }

        static easeInQuart(t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        }

        static easeOutQuart(t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        }

        static easeInOutQuart(t, b, c, d) {
            if ((t /= d / 2) < 1) {
                return c / 2 * t * t * t * t + b;
            }
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        }

        static easeInQuint(t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        }

        static easeOutQuint(t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        }

        static easeInOutQuint(t, b, c, d) {
            if ((t /= d / 2) < 1) {
                return c / 2 * t * t * t * t * t + b;
            }
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        }

        static easeInSine(t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        }

        static easeOutSine(t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        }

        static easeInOutSine(t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        }

        static easeInExpo(t, b, c, d) {
            return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        }

        static easeOutExpo(t, b, c, d) {
            return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        }

        static easeInOutExpo(t, b, c, d) {
            if (t === 0) {
                return b;
            }
            if (t === d) {
                return b + c;
            }
            if ((t /= d / 2) < 1) {
                return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            }
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }

        static easeInCirc(t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        }

        static easeOutCirc(t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        }

        static easeInOutCirc(t, b, c, d) {
            if ((t /= d / 2) < 1) {
                return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            }
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        }

        static easeInElastic(t, b, c, d) {
            let s = 1.70158;
            let p = 0;
            let a = c;

            if (t === 0) {
                return b;
            }

            if ((t /= d) === 1) {
                return b + c;
            }

            if (!p) {
                p = d * .3;
            }

            if (a < Math.abs(c)) {
                a = c;
                s = p / 4;
            }
            else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }

            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        }

        static easeOutElastic(t, b, c, d) {
            let s = 1.70158;
            let p = 0;
            let a = c;

            if (t === 0) {
                return b;
            }
            if ((t /= d) === 1) {
                return b + c;
            }
            if (!p) {
                p = d * .3;
            }
            if (a < Math.abs(c)) {
                a = c;
                s = p / 4;
            }
            else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }

            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
        }

        static easeInOutElastic(t, b, c, d) {
            let s = 1.70158;
            let p = 0;
            let a = c;

            if (t === 0) {
                return b;
            }
            if ((t /= d / 2) === 2) {
                return b + c;
            }
            if (!p) {
                p = d * (.3 * 1.5);
            }
            if (a < Math.abs(c)) {
                a = c;
                s = p / 4;
            }
            else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            if (t < 1) {
                return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            }

            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        }

        static easeInBack(t, b, c, d, s) {
            if (s === undefined) {
                s = 1.70158;
            }

            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        }

        static easeOutBack(t, b, c, d, s) {
            if (s === undefined) {
                s = 1.70158;
            }
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        }

        static easeInOutBack(t, b, c, d, s) {
            if (s === undefined) {
                s = 1.70158;
            }
            if ((t /= d / 2) < 1) {
                return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            }
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        }

        static easeInBounce(t, b, c, d) {
            return c - this.easeOutBounce(d - t, 0, c, d) + b;
        }

        static easeOutBounce(t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            }
            else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            }
            else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            }
            else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        }

        static easeInOutBounce(t, b, c, d) {
            if (t < d / 2) {
                return this.easeInBounce(t * 2, 0, c, d) * .5 + b;
            }
            return this.easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
        }
    }

    /** This is a class with utility methods. */
    class Core {
        static get isMobile() {
            const isMobile = /(iphone|ipod|ipad|android|iemobile|blackberry|bada)/.test(window.navigator.userAgent.toLowerCase());

            return isMobile;
        }

        static get Browser() {
            let versionSearchString;

            const browser = function () {
                const data = [
                    {
                        string: navigator.userAgent, subString: 'Edge', identity: 'Edge'
                    },
                    {
                        string: navigator.userAgent, subString: 'MSIE', identity: 'IE'
                    },
                    {
                        string: navigator.userAgent, subString: 'Trident', identity: 'IE'
                    },
                    {
                        string: navigator.userAgent, subString: 'Firefox', identity: 'Firefox'
                    },
                    {
                        string: navigator.userAgent, subString: 'Opera', identity: 'Opera'
                    },
                    {
                        string: navigator.userAgent, subString: 'OPR', identity: 'Opera'
                    },
                    {
                        string: navigator.userAgent, subString: 'Chrome', identity: 'Chrome'
                    },
                    { string: navigator.userAgent, subString: 'Safari', identity: 'Safari' }
                ];

                for (let i = 0; i < data.length; i++) {
                    let dataString = data[i].string;
                    versionSearchString = data[i].subString;

                    if (dataString.indexOf(data[i].subString) !== -1) {
                        return data[i].identity;
                    }
                }

                return 'Other';
            };

            const version = function (dataString) {
                let index = dataString.indexOf(versionSearchString);
                if (index === -1) {
                    return;
                }

                const rv = dataString.indexOf('rv:');

                if (versionSearchString === 'Trident' && rv !== -1) {
                    return parseFloat(dataString.substring(rv + 3));
                }
                else {
                    return parseFloat(dataString.substring(index + versionSearchString.length + 1));
                }
            }

            let result = {
            };

            result[browser()] = true;
            result.version = version(navigator.userAgent) || version(navigator.appVersion) || 'Unknown';

            return result;
        }

        static toCamelCase(value) {
            return value.replace(/-([a-z])/g, function (g) {
                return g[1].toUpperCase();
            });
        }

        static toDash(value) {
            return value.split(/(?=[A-Z])/).join('-').toLowerCase();
        }

        static unescapeHTML(value) {
            let doc = new DOMParser().parseFromString(value, 'text/html');
            return doc.documentElement.textContent;
        }

        static escapeHTML(value) {
            const entityMap = {
                '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&#39;', '/': '&#x2F;', '`': '&#x60;', '=': '&#x3D;'
            };

            return String(value).replace(/[&<>"'`=\/]/g, s => entityMap[s]);
        }

        static createGUID() {
            function part() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }

            return part() + part() + '-' + part() + '-' + part() + '-' + part() + '-' + part() + part() + part();
        }

        static getScriptLocation() {
            if (window[namespace].BaseUrl !== './') {
                return window[namespace].BaseUrl;
            }

            const location = (function () {
                if (document.currentScript) {
                    let link = document.currentScript.src;
                    let lastIndex = link.lastIndexOf('/');

                    link = link.substring(0, lastIndex);

                    return link;
                }

                const error = new Error();
                let startCharacter = '(',
                    endCharacter = ')';

                if (Smart.Utilities.Core.Browser.Safari) {
                    startCharacter = '@';
                    endCharacter = '\n';
                }

                if (error.fileName) {
                    return error.fileName.replace('/smart.element.js', '');
                }

                let link = error.stack.split(startCharacter);

                link = link[1];
                link = link.split(endCharacter)[0];
                link = link.split(':')
                link.splice(-2, 2)
                link = link.join(':')

                return link.replace('/smart.element.js', '');
            })();

            return location;
        }

        static CSSVariablesSupport() {
            return window.CSS && window.CSS.supports && window.CSS.supports('(--fake-var: 0)');
        }

        static assign(target, source) {
            const isObject = item => {
                return (item && typeof item === 'object' && !Array.isArray(item) && item !== null);
            }

            let output = Object.assign({}, target);
            if (isObject(target) && isObject(source)) {
                Object.keys(source).forEach(key => {
                    if (isObject(source[key])) {
                        if (!(key in target)) {
                            Object.assign(output, { [key]: source[key] });
                        }
                        else {
                            output[key] = this.assign(target[key], source[key]);
                        }
                    }
                    else {
                        Object.assign(output, { [key]: source[key] });
                    }
                });
            }

            return output;
        }

        static html(node, htmlString) {
            const that = this;

            let output = '';
            let nodes = node.childNodes;

            if (htmlString) {
                const rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi;

                node.innerHTML = htmlString.replace(rxhtmlTag, '<$1></$2>');
                return;
            }

            for (let i = 0, l = nodes.length, child; (i < l) && (child = nodes[i]); i++) {
                const miscElements = ['strong'];

                if (child instanceof HTMLElement || (child.tagName && miscElements.indexOf(child.tagName.toLowerCase()) >= 0)) {
                    const tagName = child.tagName.toLowerCase();
                    const attrs = child.attributes;

                    let nodeOutput = '<' + tagName;

                    for (let j = 0, attr; (attr = attrs[j]); j++) {
                        nodeOutput += ' ' + attr.name + '="' + attr.value.replace(/[&\u00A0"]/g, Utilities.Core.escapeHTML) + '"';
                    }

                    nodeOutput += '>';

                    const voidElements = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];

                    if (voidElements[tagName]) {
                        output += nodeOutput;
                    }

                    output = output + nodeOutput + that.html(child) + '</' + tagName + '>';
                }
                else if (child.nodeType === 8) {
                    continue;
                }
                else {
                    output += child.textContent.replace(/[&\u00A0<>]/g, Utilities.Core.escapeHTML);
                }
            }
            return output;
        }
    }

    let styleObservedElements = [];
    class StyleObserver {
        static watch(element) {
            styleObservedElements.push(element);

            if (StyleObserver.interval) {
                clearInterval(StyleObserver.interval);
            }

            StyleObserver.interval = setInterval(function () {
                StyleObserver.observe();
            }, 100);
        }

        static observeElement(element) {
            const that = element;

            let computedStyle = element._computedStyle || that.hasStyleObserver !== 'resize' ? document.defaultView.getComputedStyle(that, null) : {
            };

            let canRaiseResize = true;
            let styleProperties = that.hasStyleObserver !== 'resize' ? ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth', 'display', 'visibility', 'font-size', 'font-family', 'font-style', 'font-weight', 'max-height', 'min-height', 'max-width', 'min-width', 'overflow', 'overflow-x', 'overflow-y']
                : [];

            if (element.styleProperties) {
                styleProperties = styleProperties.concat(element.styleProperties);
            }

            if (element.observableStyleProperties) {
                styleProperties = element.observableStyleProperties;
            }

            if (!that._styleInfo) {
                that._styleInfo = [];

                for (let i = 0; i < styleProperties.length; i++) {
                    const styleProperty = styleProperties[i];
                    const propertyValue = styleProperty.startsWith('--') ? computedStyle.getPropertyValue(styleProperty) : computedStyle[styleProperty];

                    that._styleInfo[styleProperty] = propertyValue;
                }

                return;
            }

            if (!element.isHidden) {
                if (computedStyle['display'] !== 'none') {
                    if (element.offsetWidth === 0 || element.offsetHeight === 0) {
                        element.isHidden = true;
                    }
                }
            }

            if (element.isHidden) {
                element.visibilityChangedHandler();

                if (!element.isHidden) {
                    canRaiseResize = false;
                }
                else {
                    return;
                }
            }

            let changedStyleProperties = [];

            for (let i = 0; i < styleProperties.length; i++) {
                const styleProperty = styleProperties[i];
                const propertyValue = styleProperty.startsWith('--') ? computedStyle.getPropertyValue(styleProperty) : computedStyle[styleProperty];

                if (that._styleInfo[styleProperty] !== propertyValue) {
                    changedStyleProperties[styleProperty] = {
                        oldValue: that._styleInfo[styleProperty], value: propertyValue
                    };
                    changedStyleProperties.length++;
                }

                that._styleInfo[styleProperty] = propertyValue;
            }

            if (changedStyleProperties.length > 0) {
                that.$.fireEvent('styleChanged', {
                    styleProperties: changedStyleProperties
                },
                    {
                        bubbles: false,
                        cancelable: true
                    }
                );

                if (changedStyleProperties['display'] && canRaiseResize) {
                    that.$.fireEvent('resize', that, {
                        bubbles: false,
                        cancelable: true
                    });
                }
            }
        }

        static observe() {
            for (let i = 0; i < styleObservedElements.length; i++) {
                const that = styleObservedElements[i];

                this.observeElement(that);
            }
        }

        static unwatch(element) {
            if (StyleObserver.interval) {
                clearInterval(StyleObserver.interval);
            }

            const elementIndex = styleObservedElements.indexOf(element);

            if (elementIndex !== -1) {
                styleObservedElements.splice(elementIndex, 1);
            }

            if (styleObservedElements.length > 0) {
                StyleObserver.interval = setInterval(function () {
                    StyleObserver.observe();
                }, 100);
            }
        }
    }

    let dataContextInfo = [];

    const data = [];
    const inputEventTypes = ['resize', 'down', 'up', 'move', 'tap', 'taphold', 'swipeleft', 'swiperight', 'swipetop', 'swipebottom'];

    /** This is a class which extends an element and adds custom input events to it. */
    class InputEvents {
        constructor(target) {
            const that = this;

            that.target = target;
            that.$target = new Extend(target);
            that.$document = target.$document ? target.$document : new Extend(document);

            that.id = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
            // that.target === document ? '' : that.target.id || that.target.getAttribute('smart-id');

            let result = {
                handlers: {}, boundEventTypes: [], listen: that.listen.bind(that), unlisten: that.unlisten.bind(that)
            };

            //The taphold delay. If this delay is passed then taphold event will be fired.
            that.tapHoldDelay = 750;
            //Defines the minimum swipe distance required by the plugin.
            that.swipeMin = 10;
            //Defines the maximum swipe distance. After it is passed the propagation of the event will be restored, therefore the scrolling will be available.
            that.swipeMax = 5000;
            //The swipe delay. After it is passed swipe event won't be fired.
            that.swipeDelay = 1000;
            //The taphold delay. If this delay is passed then taphold event will be fired.
            that.tapHoldDelay = 750;

            that.inputEventProperties = ['clientX', 'clientY', 'pageX', 'pageY', 'screenX', 'screenY'];

            inputEventTypes.forEach((eventType) => {
                result[eventType] = (handler) => {
                    result.handlers[eventType] = handler;
                }

                that[eventType] = (event) => {
                    if (!result.handlers[event.type]) {
                        if ((event.type === 'mousemove' || event.type === 'pointermove' || event.type === 'touchmove') && result.handlers['move']) {
                            const moveEvent = that.createEvent(event, 'move');
                            result.handlers['move'](moveEvent);
                        }

                        return true;
                    }

                    return result.handlers[event.type](event);
                };
            });

            that.listen();

            that.handlers = result.handlers;

            return result;
        }

        listen(eventType) {
            const that = this;

            if (eventType === 'resize' && that.target !== document && that.target !== window && that.target.hasResizeObserver !== false) {
                if (Smart.Utilities.Core.Browser.Firefox) {
                    if (!that.target.resizeObserver) {
                        let firstCallPassed = false;
                        const resizeObserver = new ResizeObserver(() => {
                            if (!firstCallPassed) {
                                firstCallPassed = true;
                                return;
                            }

                            const resizeEvent = new CustomEvent('resize', {
                                bubbles: false,
                                cancelable: true
                            });

                            that.resize(resizeEvent);
                        });

                        resizeObserver.observe(that.target);
                        that.target.resizeObserver = resizeObserver;
                    }
                }
                else if (!that.target.resizeTrigger) {
                    const container = document.createElement('div');
                    container.className = 'smart-resize-trigger-container';
                    container.innerHTML =
                        '<div class="smart-resize-trigger-container">' +
                        '<div class="smart-resize-trigger"></div>' +
                        '</div>' +
                        '<div class="smart-resize-trigger-container">' +
                        '<div class="smart-resize-trigger-shrink"></div>' +
                        '</div>';
                    container.setAttribute('aria-hidden', true);

                    if (window[namespace].EnableShadowDOM && that.target.shadowRoot) {
                        that.target.shadowRoot.appendChild(container);
                    }
                    else {
                        that.target.appendChild(container);
                    }

                    that.target.resizeTrigger = container;

                    const expand = container.childNodes[0];
                    const expandChild = expand.childNodes[0];
                    const shrink = container.childNodes[1];
                    const reset = function () {
                        expandChild.style.width = '100000px';
                        expandChild.style.height = '100000px';

                        expand.scrollLeft = 100000;
                        expand.scrollTop = 100000;

                        shrink.scrollLeft = 100000;
                        shrink.scrollTop = 100000;
                    };

                    let dirty, requestAnimationFrameId, newWidth, newHeight;

                    let lastWidth = that.target.offsetWidth;
                    let lastHeight = that.target.offsetHeight;

                    if (lastWidth === 0 || lastHeight === 0) {
                        const resizeFunc = function () {
                            reset();
                            that.target.removeEventListener('resize', resizeFunc);
                        }

                        that.target.addEventListener('resize', resizeFunc);
                        reset();
                    }
                    else {
                        reset();
                    }

                    that.target.resizeHandler = function () {
                        if (!requestAnimationFrameId) {
                            requestAnimationFrameId = requestAnimationFrame(function () {
                                requestAnimationFrameId = 0;
                                newWidth = that.target.offsetWidth;
                                newHeight = that.target.offsetHeight;
                                dirty = newWidth !== lastWidth || newHeight !== lastHeight;
                                if (that.target.requiresLayout) {
                                    dirty = true;
                                }

                                if (!dirty) {
                                    return;
                                }

                                lastWidth = newWidth;
                                lastHeight = newHeight;

                                const resizeEvent = new CustomEvent('resize', {
                                    bubbles: false,
                                    cancelable: true
                                });

                                that.resize(resizeEvent);

                                that.target.requiresLayout = false;
                            });
                        }

                        reset();
                    };

                    expand.addEventListener('scroll', that.target.resizeHandler);
                    shrink.addEventListener('scroll', that.target.resizeHandler);
                }
            }

            if (that.isListening) {
                return;
            }

            that.isListening = true;
            that.isPressed = false;
            that.isReleased = false;
            that.isInBounds = false;

            if (window.PointerEvent) {
                that.$target.listen('pointerdown.inputEvents' + that.id, that.pointerDown.bind(that));
                that.$target.listen('pointerup.inputEvents' + that.id, that.pointerUp.bind(that));
                that.$target.listen('pointermove.inputEvents' + that.id, that.pointerMove.bind(that));
                that.$target.listen('pointercancel.inputEvents' + that.id, that.pointerCancel.bind(that));
            }
            else {
                const hasTouch = 'ontouchstart' in window;

                if (hasTouch) {
                    that.$target.listen('touchmove.inputEvents' + that.id, that.touchMove.bind(that));
                    that.$target.listen('touchstart.inputEvents' + that.id, that.touchStart.bind(that));
                    that.$target.listen('touchend.inputEvents' + that.id, that.touchEnd.bind(that));
                    that.$target.listen('touchcancel.inputEvents' + that.id, that.touchCancel.bind(that));
                }

                that.$target.listen('mousedown.inputEvents' + that.id, that.mouseDown.bind(that));
                that.$target.listen('mouseup.inputEvents' + that.id, that.mouseUp.bind(that));
                that.$target.listen('mousemove.inputEvents' + that.id, that.mouseMove.bind(that));
                that.$target.listen('mouseleave.inputEvents' + that.id, that.mouseLeave.bind(that));
            }

            if (!that.target._handleDocumentUp) {
                that.target._handleDocumentUp = that.handleDocumentUp.bind(that);
                that.target._handleDocumentUpId = that.id;
                that.$document.listen('mouseup.inputEvents' + that.target._handleDocumentUpId, that.target._handleDocumentUp);
            }
        }

        unlisten(eventType) {
            const that = this;

            that.isListening = false;
            if (window.PointerEvent) {
                that.$target.unlisten('pointerdown.inputEvents' + that.id);
                that.$target.unlisten('pointerup.inputEvents' + that.id);
                that.$target.unlisten('pointermove.inputEvents' + that.id);
                that.$target.unlisten('pointercancel.inputEvents' + that.id);
            }
            else {
                const hasTouch = 'ontouchstart' in window;
                if (hasTouch) {
                    that.$target.unlisten('touchstart.inputEvents' + that.id);
                    that.$target.unlisten('touchmove.inputEvents' + that.id);
                    that.$target.unlisten('touchend.inputEvents' + that.id);
                    that.$target.unlisten('touchcancel.inputEvents' + that.id);
                }

                that.$target.unlisten('mousedown.inputEvents' + that.id);
                that.$target.unlisten('mouseup.inputEvents' + that.id);
                that.$target.unlisten('mousemove.inputEvents' + that.id);
                that.$target.unlisten('mouseleave.inputEvents' + that.id);
            }

            if (that.target._handleDocumentUp) {
                that.$document.unlisten('mouseup.inputEvents' + that.target._handleDocumentUpId, that.target._handleDocumentUp);
                delete that.target._handleDocumentUp;
                delete that.target._handleDocumentUpId;
            }

            if (eventType === 'resize') {
                if (Smart.Utilities.Core.Browser.Firefox) {
                    if (that.target.resizeObserver) {
                        that.target.resizeObserver.unobserve(that.target);
                        delete that.target.resizeObserver;
                    }
                }
                else if (that.target.resizeTrigger) {
                    const container = that.target.resizeTrigger;
                    const expand = container.childNodes[0];
                    const shrink = container.childNodes[1];

                    expand.removeEventListener('scroll', that.target.resizeHandler);
                    shrink.removeEventListener('scroll', that.target.resizeHandler);

                    that.target.resizeHandler = null;
                    container.parentNode.removeChild(container);

                    delete that.target.resizeTrigger;
                }
            }
        }

        handleDocumentUp(event) {
            const that = this;

            that.isPressed = false;
            that.isReleased = false;
            that.resetSwipe(event);
        }

        createEvent(event, eventType) {
            const that = this;
            const touches = event.touches;
            const changedTouches = event.changedTouches;
            const touch = (touches && touches.length) ? touches[0] : ((changedTouches && changedTouches.length) ? changedTouches[0] : undefined);
            const customEvent = new CustomEvent(eventType, {
                bubbles: true,
                cancelable: true,
                composed: that.$target.element.getRootNode().host !== undefined
            });
            customEvent.originalEvent = event;
            if (touch) {
                for (let j = 0; j < that.inputEventProperties.length; j++) {
                    const key = that.inputEventProperties[j];

                    customEvent[key] = touch[key];
                }

                return customEvent;
            }

            for (let key in event) {
                if (!(key in customEvent)) {
                    customEvent[key] = event[key];
                }
            }

            return customEvent;
        }

        fireTap(event) {
            const that = this;

            clearTimeout(this.tapHoldTimeout);
            if (!this.tapHoldFired && this.isInBounds) {
                const tap = that.createEvent(event, 'tap');
                that.tap(tap);
            }
        }

        initTap(event) {
            const that = this;

            that.isInBounds = true;
            that.tapHoldFired = false;
            that.tapHoldTimeout = setTimeout(function () {
                if (that.isInBounds) {
                    that.tapHoldFired = true;
                    const taphold = that.createEvent(event, 'taphold');
                    that.taphold(taphold);
                }
            }, that.tapHoldDelay);
        }

        pointerDown(event) {
            const that = this;

            return that.handleDown(event);
        }

        mouseDown(event) {
            const that = this;

            if (that.isPressed || (that.touchStartTime && new Date() - that.touchStartTime < 500)) {
                return;
            }

            return that.handleDown(event);
        }

        touchStart(event) {
            const that = this;

            that.touchStartTime = new Date();
            that.isTouchMoved = true;

            return that.handleDown(event);
        }

        mouseUp(event) {
            const that = this;

            if (that.isReleased || (that.touchEndTime && new Date() - that.touchEndTime < 500)) {
                return;
            }

            return that.handleUp(event);
        }

        handleDown(event) {
            const that = this;

            that.isReleased = false;
            that.isPressed = true;

            const down = that.createEvent(event, 'down');

            if (that.handlers['tap'] || that.handlers['taphold']) {
                that.initTap(down);
            }

            if (that.handlers['swipeleft'] || that.handlers['swiperight'] || that.handlers['swipetop'] || that.handlers['swipebottom']) {
                that.initSwipe(down);
            }

            return that.down(down);
        }

        handleUp(event) {
            const that = this;

            that.isReleased = true;
            that.isPressed = false;

            const up = that.createEvent(event, 'up');
            const result = that.up(up);

            if (that.handlers['tap'] || that.handlers['taphold']) {
                that.fireTap(up);
            }

            that.resetSwipe(up);

            return result;
        }

        handleMove(event) {
            const that = this;

            let eventResult = that.move(event);

            if (that.isPressed) {
                that._maxSwipeVerticalDistance = Math.max(that._maxSwipeVerticalDistance, Math.abs(that._startY - event.pageY));
                that._maxSwipeHorizontalDistance = Math.max(that._maxSwipeHorizontalDistance, Math.abs(that._startX - event.pageX));
                eventResult = that.handleSwipeEvents(event);
            }

            return eventResult;
        }

        touchEnd(event) {
            const that = this;

            that.touchEndTime = new Date();
            return that.handleUp(event);
        }

        pointerUp(event) {
            const that = this;

            return that.handleUp(event);

        }

        pointerCancel(event) {
            const that = this;

            that.pointerUp(event);
        }

        touchCancel(event) {
            const that = this;

            that.touchEnd(event);
        }

        mouseLeave() {
            const that = this;

            that.isInBounds = false;
        }

        mouseMove(event) {
            const that = this;

            if (that.isTouchMoved) {
                return;
            }

            return that.handleMove(event);
        }

        pointerMove(event) {
            const that = this;

            return that.handleMove(event);
        }

        touchMove(event) {
            const that = this;
            const touches = event.touches;
            const changedTouches = event.changedTouches;
            const touch = (touches && touches.length) ? touches[0] : ((changedTouches && changedTouches.length) ? changedTouches[0] : undefined);

            for (let j = 0; j < that.inputEventProperties.length; j++) {
                const key = that.inputEventProperties[j];

                if (event[key] === undefined) {
                    event[key] = touch[key];
                }
            }

            that.isTouchMoved = true;

            return that.handleMove(event);
        }

        handleSwipeEvents(event) {
            const that = this;

            let eventResult = true;

            if (that.handlers['swipetop'] || that.handlers['swipebottom']) {
                eventResult = this.handleVerticalSwipeEvents(event);
            }

            if (eventResult === false) {
                return eventResult;
            }

            if (that.handlers['swipeleft'] || that.handlers['swiperight']) {
                eventResult = this.handleHorizontalSwipeEvents(event);
            }

            return eventResult;
        }

        handleVerticalSwipeEvents(event) {
            let current, diff;
            current = event.pageY;
            diff = current - this._startY;

            return this.swiped(event, diff, 'vertical');
        }

        handleHorizontalSwipeEvents(event) {
            let current, diff;
            current = event.pageX;
            diff = current - this._startX;

            return this.swiped(event, diff, 'horizontal');
        }

        swiped(event, diff, direction) {
            const that = this;

            direction = direction || 0;
            if (Math.abs(diff) >= that.swipeMin && !that._swipeEvent && !that._swipeLocked) {
                let eventType = diff < 0 ? 'swipeleft' : 'swiperight';
                if (direction === 'horizontal') {
                    that._swipeEvent = that.createEvent(event, eventType);
                }
                else {
                    eventType = diff < 0 ? 'swipetop' : 'swipebottom';
                    that._swipeEvent = that.createEvent(event, diff < 0 ? 'swipetop' : 'swipebottom')
                }

                if (that[eventType]) {
                    that[eventType](this._swipeEvent);
                    if (Math.abs(diff) <= this.swipeMax) {
                        event.stopImmediatePropagation();
                        return false;
                    }
                }
            }

            return true;
        }

        resetSwipe() {
            const that = this;

            that._swipeEvent = null;
            clearTimeout(this._swipeTimeout);
        }

        initSwipe(event) {
            const that = this;

            that._maxSwipeVerticalDistance = 0;
            that._maxSwipeHorizontalDistance = 0;
            that._startX = event.pageX;
            that._startY = event.pageY;
            that._swipeLocked = false;
            that._swipeEvent = null;
            that._swipeTimeout = setTimeout(function () {
                that._swipeLocked = true;
            }, that.swipeDelay);
        }
    }


    class Scroll {
        get scrollWidth() {
            const that = this;

            if (that.horizontalScrollBar) {
                return that.horizontalScrollBar.max;
            }

            return -1;
        }

        set scrollWidth(value) {
            const that = this;

            if (value < 0) {
                value = 0;
            }

            if (that.horizontalScrollBar) {
                that.horizontalScrollBar.max = value;
            }
        }

        get scrollHeight() {
            const that = this;

            if (that.verticalScrollBar) {
                return that.verticalScrollBar.max;
            }

            return -1;
        }

        set scrollHeight(value) {
            const that = this;

            if (value < 0) {
                value = 0;
            }

            if (that.verticalScrollBar) {
                that.verticalScrollBar.max = value;
            }
        }

        get scrollLeft() {
            const that = this;

            if (that.horizontalScrollBar) {
                return that.horizontalScrollBar.value;
            }

            return -1;
        }

        set scrollLeft(value) {
            const that = this;

            if (value < 0) {
                value = 0;
            }

            if (that.horizontalScrollBar) {
                that.horizontalScrollBar.value = value;
            }
        }

        get scrollTop() {
            const that = this;

            if (that.verticalScrollBar) {
                return that.verticalScrollBar.value;
            }

            return -1;
        }

        set scrollTop(value) {
            const that = this;

            if (value < 0) {
                value = 0;
            }

            if (that.verticalScrollBar) {
                that.verticalScrollBar.value = value;
            }
        }

        get vScrollBar() {
            const that = this;

            return that.verticalScrollBar;
        }

        get hScrollBar() {
            const that = this;

            return that.horizontalScrollBar;
        }

        constructor(container, horizontalScrollBar, verticalScrollBar) {
            const that = this;

            that.container = container;
            that.horizontalScrollBar = horizontalScrollBar;
            that.verticalScrollBar = verticalScrollBar;
            that.disableSwipeScroll = false;
            that.listen();
        }

        listen() {
            const that = this;
            const isMobile = Core.isMobile;
            const horizontalScrollBar = that.horizontalScrollBar;
            const verticalScrollBar = that.verticalScrollBar;

            that.inputEvents = new InputEvents(that.container);

            let dragStarted, rafId, pointerCaptured, timestamp, ticker, now, elapsed, timeConstant = 500, currentScrollInfo;

            const createScrollInfo = function (scrollBar) {
                return {
                    amplitude: 0,
                    delta: 0,
                    initialValue: 0,
                    min: 0,
                    max: scrollBar.max,
                    previousValue: 0,
                    pointerPosition: 0,
                    targetValue: 0,
                    scrollBar: scrollBar,
                    value: 0,
                    velocity: 0
                }
            }

            const hScrollInfo = createScrollInfo(horizontalScrollBar);
            const vScrollInfo = createScrollInfo(verticalScrollBar);

            const track = function () {
                const velocityCoefficient = that.container.touchVelocityCoefficient || 50;

                now = Date.now();
                elapsed = now - timestamp;
                timestamp = now;

                const updateScrollInfo = function (scrollInfo) {
                    scrollInfo.delta = scrollInfo.value - scrollInfo.previousValue;
                    scrollInfo.previousValue = scrollInfo.value;
                    let velocity = velocityCoefficient * scrollInfo.delta / (1 + elapsed);
                    scrollInfo.velocity = 0.8 * velocity + 0.2 * scrollInfo.velocity;
                }

                updateScrollInfo(vScrollInfo);
                updateScrollInfo(hScrollInfo);
            }

            const scroll = function (value) {
                currentScrollInfo.value = (value > currentScrollInfo.max) ? currentScrollInfo.max : (value < currentScrollInfo.min) ? currentScrollInfo.min : value;
                currentScrollInfo.scrollBar.value = currentScrollInfo.value;

                return (value > currentScrollInfo.max) ? 'max' : (value < currentScrollInfo.min) ? 'min' : 'value';
            }

            function autoScroll() {
                let elapsed, delta;
                if (currentScrollInfo.amplitude) {
                    that.container.$.fireEvent('kineticScroll');
                    elapsed = Date.now() - timestamp;
                    delta = -currentScrollInfo.amplitude * Math.exp(-elapsed / timeConstant);
                    if (delta > 5 || delta < -5) {
                        scroll(currentScrollInfo.targetValue + delta);
                        cancelAnimationFrame(rafId);
                        rafId = 0;
                        rafId = requestAnimationFrame(autoScroll);
                    }
                    else {
                        scroll(currentScrollInfo.targetValue);
                    }
                }
            }

            that.inputEvents['down'](function (event) {
                if (!isMobile) {
                    return;
                }

                const originalTarget = event.originalEvent.target,
                    target = originalTarget && originalTarget.closest ? originalTarget.closest('smart-scroll-bar') : undefined;

                if (target === that.horizontalScrollBar || target === that.verticalScrollBar) {
                    return;
                }

                pointerCaptured = true;
                dragStarted = false;

                const updateScrollInfo = function (scrollInfo, pointerPosition) {
                    scrollInfo.amplitude = 0;
                    scrollInfo.pointerPosition = pointerPosition;
                    scrollInfo.previousValue = scrollInfo.value;
                    scrollInfo.value = scrollInfo.scrollBar.value;
                    scrollInfo.initialValue = scrollInfo.value;
                    scrollInfo.max = scrollInfo.scrollBar.max;
                }

                updateScrollInfo(vScrollInfo, event.clientY);
                updateScrollInfo(hScrollInfo, event.clientX);

                timestamp = Date.now();
                clearInterval(ticker);
                ticker = setInterval(track, timeConstant);
            });

            that.inputEvents['up'](function () {
                if (!pointerCaptured) {
                    return true;
                }

                clearInterval(ticker);

                if (that.disableSwipeScroll) {
                    pointerCaptured = false;
                    return;
                }

                const startScroll = function (scrollInfo) {
                    currentScrollInfo = scrollInfo;
                    scrollInfo.amplitude = 0.8 * scrollInfo.velocity;
                    scrollInfo.targetValue = Math.round(scrollInfo.value + scrollInfo.amplitude);
                    timestamp = Date.now();
                    cancelAnimationFrame(rafId);
                    rafId = requestAnimationFrame(autoScroll);
                    scrollInfo.velocity = 0;
                }

                if (vScrollInfo.velocity > 10 || vScrollInfo.velocity < -10) {
                    startScroll(vScrollInfo);
                }
                else if (hScrollInfo.velocity > 10 || hScrollInfo.velocity < -10) {
                    startScroll(hScrollInfo);
                }

                pointerCaptured = false;
            });

            that.inputEvents['move'](function (event) {
                if (!pointerCaptured) {
                    return true;
                }

                if (that.disableSwipeScroll) {
                    return;
                }

                if (dragStarted) {
                    event.originalEvent.preventDefault();
                    event.originalEvent.stopPropagation();
                }

                hScrollInfo.visible = horizontalScrollBar.offsetHeight > 0;
                vScrollInfo.visible = verticalScrollBar.offsetWidth > 0;

                if (!pointerCaptured || (!hScrollInfo.visible && !vScrollInfo.visible)) {
                    return;
                }

                const touchScrollRatio = that.container.touchScrollRatio;
                let vScrollRatio, hScrollRatio;

                if (touchScrollRatio) {
                    if (typeof touchScrollRatio === 'number') {
                        vScrollRatio = -touchScrollRatio;
                        hScrollRatio = -touchScrollRatio;
                    }
                    else if (typeof touchScrollRatio === 'function') {
                        vScrollRatio = touchScrollRatio(vScrollInfo.max, vScrollInfo.scrollBar.offsetHeight);
                        hScrollRatio = touchScrollRatio(hScrollInfo.max, hScrollInfo.scrollBar.offsetWidth);
                    }
                }

                vScrollInfo.ratio = vScrollRatio || (-vScrollInfo.max / vScrollInfo.scrollBar.offsetHeight);
                vScrollInfo.delta = (event.clientY - vScrollInfo.pointerPosition) * vScrollInfo.ratio;

                hScrollInfo.ratio = hScrollRatio || (-hScrollInfo.max / hScrollInfo.scrollBar.offsetWidth);
                hScrollInfo.delta = (event.clientX - hScrollInfo.pointerPosition) * hScrollInfo.ratio;

                let dragged = 'value';

                const doDrag = function (scrollInfo, pointerPosition, event) {
                    if (scrollInfo.delta > 5 || scrollInfo.delta < -5) {
                        currentScrollInfo = scrollInfo;

                        dragged = (scrollInfo.initialValue + scrollInfo.delta > currentScrollInfo.max) ? 'max' : (scrollInfo.initialValue + scrollInfo.delta < currentScrollInfo.min) ? 'min' : 'value';

                        if (dragged === 'min' && scrollInfo.initialValue === 0) {
                            return true;
                        }

                        if (dragged === 'max' && scrollInfo.initialValue === scrollInfo.max) {
                            return true;
                        }

                        if (!scrollInfo.visible) {
                            return true;
                        }

                        that.container.$.fireEvent('kineticScroll');
                        scroll(scrollInfo.initialValue + scrollInfo.delta);
                        track();

                        event.originalEvent.preventDefault();
                        event.originalEvent.stopPropagation();
                        dragStarted = true;

                        return false;
                    }

                    return null;
                }

                let verticalDragResult = doDrag(vScrollInfo, event.clientY, event);
                if (verticalDragResult === null) {
                    let horizontalDragResult = doDrag(hScrollInfo, event.clientX, event);
                    if (horizontalDragResult !== null) {
                        return horizontalDragResult;
                    }
                }
                else {
                    return verticalDragResult;
                }
            });

            let elapsedScrollTo;
            that.scrollTo = function (value, vertically) {
                const scrollInfo = vertically === false ? hScrollInfo : vScrollInfo;
                let isScrolling = false;

                if (!timestamp) {
                    timestamp = Date.now();
                }

                if (!elapsedScrollTo) {
                    elapsedScrollTo = Date.now();
                }

                if (Math.abs(Date.now() - elapsedScrollTo) > 375) {
                    timestamp = Date.now();
                }
                else {
                    isScrolling = true;
                }

                elapsedScrollTo = Date.now();

                scrollInfo.value = scrollInfo.scrollBar.value;
                scrollInfo.delta = value - scrollInfo.value;
                scrollInfo.max = scrollInfo.scrollBar.max;

                if (value <= scrollInfo.min) {
                    value = scrollInfo.min;
                }

                if (value >= scrollInfo.max) {
                    value = scrollInfo.max;
                }

                scrollInfo.targetValue = value;

                const to = value;
                let from = scrollInfo.value;

                scrollInfo.velocity = 100 * scrollInfo.delta / (1 + scrollInfo.max);
                scrollInfo.from = from;

                const scroll = function (value) {
                    scrollInfo.value = (value > scrollInfo.max) ? scrollInfo.max : (value < scrollInfo.min) ? scrollInfo.min : value;
                    scrollInfo.scrollBar.value = scrollInfo.value;

                    return (value > scrollInfo.max) ? 'max' : (value < scrollInfo.min) ? 'min' : 'value';
                }

                const autoScroll = function () {
                    let delta;
                    let duration = 175;
                    let time = Date.now() - elapsedScrollTo;
                    let elapsed = Math.min(1000, Date.now() - timestamp);
                    let amplitude = scrollInfo.velocity * Math.exp(elapsed / duration);

                    if (isScrolling) {
                        if (amplitude < 0 && scrollInfo.value <= value) {
                            amplitude = 0;
                        }
                        else if (amplitude > 0 && scrollInfo.value >= value) {
                            amplitude = 0;
                        }
                        if (scrollInfo.value + amplitude <= scrollInfo.min || scrollInfo.value + amplitude >= scrollInfo.max) {
                            amplitude = 0;
                        }

                        if (amplitude > 0.5 || amplitude < -0.5) {
                            scroll(scrollInfo.value + amplitude);
                            cancelAnimationFrame(rafId);
                            rafId = 0;
                            rafId = requestAnimationFrame(autoScroll);
                        }
                        else {
                            scroll(scrollInfo.targetValue);
                        }
                    }
                    else {
                        if (time >= duration) {
                            cancelAnimationFrame(rafId);
                            that.container.$.fireEvent('kineticScroll');
                            rafId = 0;
                            return;
                        }

                        delta = Utilities.Animation.Easings.easeInSine(time, from, to - from, duration);
                        scroll(delta);
                        cancelAnimationFrame(rafId);
                        rafId = 0;
                        rafId = requestAnimationFrame(autoScroll);
                    }
                }

                cancelAnimationFrame(rafId);
                rafId = requestAnimationFrame(autoScroll);
            }

            that.inputEvents.listen();
        }

        unlisten() {
            const that = this;

            if (that.inputEvents) {
                that.inputEvents.unlisten();
            }

            delete that.inputEvents;
        }
    }

    /** This is a class which extends an element with utility methods. */
    class Extend {
        constructor(element) {
            this.events = {
            };
            this.handlers = {
            };
            this.element = element;
        }

        /**
         * Gets whether an element has a CSS Class.
         * @param {String}.
         */
        hasClass(className) {
            const that = this;
            const classNames = className.split(' ');

            for (let i = 0; i < classNames.length; i++) {
                const result = that.element.classList.contains(classNames[i]);

                if (!result) {
                    return false;
                }
            }

            return true;
        }

        /**
         * Adds a CSS Class to an element.
         * @param {String}.
         */
        addClass(className) {
            const that = this;

            if (that.hasClass(className)) {
                return;
            }

            const classNames = className.split(' ');

            for (let i = 0; i < classNames.length; i++) {
                that.element.classList.add(classNames[i]);
            }

            if (!that.isNativeElement) {
                StyleObserver.observeElement(that.element);
            }
        }

        /**
         * Removes a CSS Class from an element.
         * @param {String}.
         */
        removeClass(className) {
            const that = this;

            if (arguments.length === 0) {
                that.element.removeAttribute('class');
                return;
            }

            const classNames = className.split(' ');

            for (let i = 0; i < classNames.length; i++) {
                that.element.classList.remove(classNames[i]);
            }

            if (that.element.className === '') {
                that.element.removeAttribute('class');
            }
            if (!that.isNativeElement) {
                StyleObserver.observeElement(that.element);
            }
        }

        get isCustomElement() {
            const that = this;

            if (that.element.tagName.startsWith(namespace)) {
                return true;
            }

            if (that.element instanceof window[namespace].BaseElement === true) {
                return true;
            }

            if (that.element.tagName === 'DIV' || that.element.tagName === 'SPAN' || that.element.tagName === 'BUTTON'
                || that.element.tagName === 'INPUT' || that.element.tagName === 'UL' || that.element.tagName === 'LI') {
                return false;
            }

            if (document.createElement(that.element.nodeName) instanceof window[namespace].BaseElement === true) {
                return true;
            }

            return false;
        }

        /** Determines whether this element is native HTMLElement. */
        get isNativeElement() {
            const that = this;

            if (!that.isCustomElement) {
                return true;
            }

            return false;
        }

        /**
         * Applies the event handlers.
         * @param {Event} - event object.
         */
        dispatch(event) {
            const that = this;
            const handleObjects = that.events[event.type];
            let shouldSort = false;

            if (handleObjects.length > 1) {
                for (let i = 0; i < handleObjects.length; i++) {
                    const handleObject = handleObjects[i];

                    if (handleObject.namespace && handleObject.namespace.indexOf('_') >= 0) {
                        shouldSort = true;
                        break;
                    }
                }
            }

            if (shouldSort) {
                handleObjects.sort(function (element1, element2) {
                    let namespace1 = element1.namespace;
                    let namespace2 = element2.namespace;

                    if (namespace1.indexOf('_') === -1) {
                        namespace1 = 0;
                    }
                    else {
                        namespace1 = parseInt(namespace1.substring(namespace1.indexOf('_') + 1));
                    }

                    if (namespace2.indexOf('_') === -1) {
                        namespace2 = 0;
                    }
                    else {
                        namespace2 = parseInt(namespace2.substring(namespace2.indexOf('_') + 1));
                    }

                    if (namespace1 < namespace2) {
                        return -1;
                    }

                    if (namespace1 > namespace2) {
                        return 1;
                    }

                    return 0;
                });
            }

            for (let i = 0; i < handleObjects.length; i++) {
                const handleObject = handleObjects[i];
                event.namespace = handleObject.namespace;
                event.context = handleObject.context;

                if (event.defaultPrevented) {
                    break;
                }

                const result = handleObject.handler.apply(that.element, [event]);

                if (result !== undefined) {
                    event.result = result;

                    if (result === false) {
                        event.preventDefault();
                        event.stopPropagation();
                        break;
                    }
                }
            }

            return event.result;
        }

        /**
         * Fires a new event.
         * @param {String} - event type.
         * @param {Object} - event details.
         * @param {Object} - event options.
         */
        fireEvent(eventType, detail, options) {
            const that = this;

            if (!options) {
                options = {
                    bubbles: true,
                    cancelable: true,
                    composed: that.element.getRootNode().host !== null
                }
            }
            options.detail = detail || {
            };

            const customEvent = new CustomEvent(eventType, options);
            customEvent.originalStopPropagation = customEvent.stopPropagation;
            customEvent.stopPropagation = function () {
                customEvent.isPropagationStopped = true;
                return customEvent.originalStopPropagation();
            }

            that.dispatchEvent(customEvent);

            return customEvent;
        }



        get isPassiveSupported() {
            // Test via a getter in the options object to see if the passive property is accessed
            const that = this;

            if (that.supportsPassive !== undefined) {
                return that.supportsPassive;
            }

            that.supportsPassive = false;
            try {
                let opts = Object.defineProperty({
                }, 'passive', {
                    get: function () {
                        that.supportsPassive = true;
                    }
                });
                window.addEventListener('testPassive', null, opts);
                window.removeEventListener('testPassive', null, opts);
            }
            catch (e) {
                //
            }

            return that.supportsPassive;
        }
        /**
            * Dispatches an event.
            * @param {CustomEvent} - event.
            */
        dispatchEvent(customEvent) {
            const that = this;
            const eventType = customEvent.type;
            const context = that.element.context;
            const normalizedEventType = eventType.substring(0, 1).toUpperCase() + eventType.substring(1);

            that.element.context = document;

            if (that.element['on' + normalizedEventType]) {
                that.element['on' + normalizedEventType](customEvent);
            }
            else if (that.element['on' + eventType.toLowerCase()]) {
                that.element['on' + eventType.toLowerCase()](customEvent);
            }
            else {
                that.element.dispatchEvent(customEvent);
            }

            that.element.context = context;
        }

        /**
         * Adds an event listener.
         * @param {String} - event types.
         * @param {Function} - the event handler.
         */
        listen(types, handler) {
            const that = this;
            const typesArray = types.split('.');
            const namespace = typesArray.slice(1).join('.');
            const eventType = typesArray[0];

            if (!that.events[eventType]) {
                that.events[eventType] = [];
            }

            const handleObject = {
                type: eventType,
                handler: handler,
                context: that.element,
                namespace: namespace
            };

            if (inputEventTypes.indexOf(eventType) >= 0) {
                if (!that.inputEvents) {
                    that.inputEvents = new InputEvents(that.element);
                }

                that.inputEvents[eventType](function (event) {
                    that.dispatchEvent(event);
                });

                that.inputEvents.boundEventTypes.push(eventType);
                that.inputEvents.listen(eventType);
            }

            if (that.events[eventType].length === 0) {
                that.handlers[eventType] = that.dispatch.bind(that);

                if (eventType === 'wheel') {
                    that.element.addEventListener('wheel', that.handlers[eventType], that.isPassiveSupported ? { passive: false } : false);
                }
                else if (eventType === 'touchmove' || eventType === 'touchstart' || eventType === 'touchend') {
                    that.element.addEventListener(eventType, that.handlers[eventType], that.isPassiveSupported ? { passive: false } : false);
                }
                else {
                    that.element.addEventListener(eventType, that.handlers[eventType], false);
                }
            }

            that.events[eventType].push(handleObject);
        }

        /**
         * Removes an event listener.
         * @param {String} - event types.
         */
        unlisten(types) {
            const that = this;
            const typesArray = types.split('.');
            const namespace = typesArray.slice(1).join('.');
            const eventType = typesArray[0];

            let handleObjects = that.events[eventType];

            if (that.inputEvents && that.inputEvents.boundEventTypes.indexOf(eventType) >= 0) {
                that.inputEvents.boundEventTypes.splice(that.inputEvents.boundEventTypes.indexOf(eventType), 1);
                if (that.inputEvents.boundEventTypes.length === 0) {
                    that.inputEvents.unlisten(eventType);
                }
            }

            if (!handleObjects) {
                return;
            }

            for (let i = 0; i < handleObjects.length; i++) {
                if (namespace !== '') {
                    let index = handleObjects.findIndex(o => o.namespace === namespace);
                    handleObjects.splice(index, 1);
                    break;
                }
                else {
                    handleObjects = [];
                }
            }
            if (handleObjects.length === 0) {
                that.element.removeEventListener(eventType, that.handlers[eventType]);
                that.events[eventType] = [];
                delete that.handlers[eventType];
            }
        }

        /**
       * Gets the element's attribute value by using the property's value.
       * @param {String} - attribute's name.
       * @param {String} - property's type.
       * @return {Object} The converted from String attribute value.
       */
        getAttributeValue(attributeName, type) {
            const that = this;
            const attributeString = that.element.getAttribute(attributeName);

            if (that.isNativeElement) {
                return that.deserialize(attributeString, type);
            }

            const propertyConfig = that.element.propertyByAttributeName[attributeName];
            const typedValue = propertyConfig.deserialize === undefined ? that.deserialize(attributeString, type, propertyConfig.nullable) : that.element[propertyConfig.deserialize](attributeString);

            return typedValue;
        }

        /**
         * Sets the element's attribute using the property's value.
         * @param {String} - attribute's name.
         * @param {Object} - property's value.
         * @param {String} - property's type.
         */
        setAttributeValue(attributeName, value, type) {
            const that = this;
            let newAttributeValue;
            let nullable = false;

            if (!that.isNativeElement) {
                const propertyConfig = that.element.propertyByAttributeName[attributeName];

                nullable = propertyConfig ? propertyConfig.nullable : true;

                if (propertyConfig && propertyConfig.serialize) {
                    newAttributeValue = that.element[propertyConfig.serialize](value);
                }
                else {
                    newAttributeValue = that.serialize(value, type, nullable);
                }
            }
            else {
                newAttributeValue = that.serialize(value, type);
                if (type === 'boolean') {
                    const booleans = ['checked', 'selected', 'async', 'autofocus', 'autoplay', 'controls', 'defer', 'disabled', 'hidden', 'ismap', 'loop', 'multiple', 'open', 'readonly', 'required', 'scoped'];
                    if (booleans.indexOf(attributeName) >= 0) {
                        if (!value) {
                            that.element.removeAttribute(attributeName);
                        }
                        else {
                            that.element.setAttribute(attributeName, '');
                        }
                        return;
                    }
                }
            }

            if (type === 'array' || type === 'object') {
                if (newAttributeValue === '[]' || newAttributeValue === '{}') {
                    that.element.removeAttribute(attributeName);
                    return;
                }
            }

            if (newAttributeValue === undefined) {
                that.element.removeAttribute(attributeName);

                if (that.element.shadowRoot && that.element.$.root) {
                    that.element.$.root.removeAttribute(attributeName);
                }
            }
            else {
                that.element.setAttribute(attributeName, newAttributeValue);

                if (that.element.shadowRoot && that.element.$.root) {
                    that.element.$.root.setAttribute(attributeName, newAttributeValue);
                }
            }
        }

        /**
         * Converts a javascript value to string.
         * @param {Object} the value to be converted.
         * @return {String} The converted to String value. If the type is unknown, returns undefined.
         */
        serialize(value, type, nullable) {
            if (type === undefined) {
                type = Utilities.Types.getType(value);
            }

            if (value === undefined || (!nullable && value === null)) {
                return undefined;
            }

            if (nullable && value === null) {
                return 'null';
            }

            if (type === 'string') {
                return value;
            }

            if (type === 'boolean' || type === 'bool') {
                if (value === true || value === 'true' || value === 1 || value === '1') {
                    return '';
                }
                else if (value === false || value === 'false' || value === 0 || value === '0') {
                    return undefined;
                }
            }

            if (type === 'array') {
                return JSON.stringify(value);
            }

            const types = ['string', 'number', 'int', 'integer', 'float', 'date', 'any', 'function'];
            if (types.indexOf(type) >= 0) {
                return value.toString();
            }

            if (type === 'object') {
                return JSON.stringify(value);
            }

            return undefined;
        }

        /**
         * Converts a string to a Javascript value.
         * @param {String}
         * @param {String}
         * @return {Object} The converted String value.
         */
        deserialize(stringValue, type, nullable) {
            const nullValue = stringValue === 'null';

            if (stringValue === undefined || (nullValue && !nullable)) {
                return undefined;
            }

            if (nullValue && nullable) {
                return null;
            }

            if (type === 'boolean' || type === 'bool') {
                if (stringValue === null) {
                    return false;
                }

                // Boolean properties are set based on the presence of the attribute: if the attribute exists at all, the value is true.
                return true;
            }
            else if (type === 'number' || type === 'float') {
                if (stringValue === 'NaN') {
                    return NaN;
                }

                if (stringValue === 'Infinity') {
                    return Infinity;
                }

                if (stringValue === '-Infinity') {
                    return -Infinity;
                }

                return parseFloat(stringValue);
            }
            else if (type === 'int' || type === 'integer') {
                if (stringValue === 'NaN') {
                    return NaN;
                }

                if (stringValue === 'Infinity') {
                    return Infinity;
                }

                if (stringValue === '-Infinity') {
                    return -Infinity;
                }

                return parseInt(stringValue);
            }
            else if (type === 'string') {
                return stringValue;
            }
            else if (type === 'any') {
                return stringValue;
            }
            else if (type === 'date') {
                return new Date(stringValue);
            }
            else if (type === 'function') {
                if (typeof window[stringValue] === 'function') {
                    return window[stringValue];
                }
            }
            else if (type === 'array' || type === 'object') {
                try {
                    const jsonObject = JSON.parse(stringValue);

                    if (jsonObject) {
                        return jsonObject;
                    }
                }
                catch (er) {
                    if (window[stringValue] && (typeof window[stringValue] === 'object')) {
                        return window[stringValue];
                    }
                    else if (type === 'array' && stringValue.indexOf('[') >= 0) {
                        if (stringValue.indexOf('{') >= 0) {
                            let array = stringValue.replace(/{/ig, '').replace('[', '').replace(']', '').replace(/'/ig, '').replace(/"/ig, '').trim();

                            array = array.split('},');

                            for (let i = 0; i < array.length; i++) {
                                let parsedObject = {
                                };

                                let parts = array[i].trim().split(',');

                                for (let j = 0; j < parts.length; j++) {
                                    const key = parts[j].split(':')[0].trim();
                                    const value = parts[j].split(':')[1].trim();

                                    parsedObject[key] = value;
                                }

                                array[i] = parsedObject;
                            }

                            return array;
                        }

                        const array = stringValue.replace('[', '').replace(']', '').replace(/'/ig, '').replace(/"/ig, '').trim().split(',');

                        return array;
                    }
                }
            }

            return undefined;
        }
    }

    /** Animation class. */
    class Animation {

        /** Get access to Ripple class. */
        static get Ripple() {
            return Ripple;
        }

        /** Get access to Easings class. */
        static get Easings() {
            return Easings;
        }
    }

    /** Utilities class. */
    class Utilities {

        /** Get access to Types class. */
        static get Types() {
            return Types;
        }

        static get Core() {
            return Core;
        }

        static get Animation() {
            return Animation;
        }

        static get Scroll() {
            return Scroll;
        }

        static get InputEvents() {
            return InputEvents;
        }

        /**
         * Extends Element with useful methods.
         * @param {HTMLElement}
         */
        static Extend(element) {
            return new Extend(element);
        }

        static Assign(moduleName, module) {
            if (moduleName.indexOf('.') >= 0) {
                const modules = moduleName.split('.');

                if (!Utilities[modules[0]]) {
                    Utilities[modules[0]] = {
                    };
                }

                Utilities[modules[0]][modules[1]] = module;
                return;
            }

            Utilities[moduleName] = module;
        }
    }

    const $document = Utilities.Extend(document);

    class BindingModule {

    }

    BindingModule.cache = {
    };

    /**
     * This is a base class for Smart Elements. It extends HTMLElement.
     */
    class BaseElement extends HTMLElement {
        /**
         * Element's properties.
         *
         * @return {Object} - element's properties.
         */
        static get properties() {
            return {
                'animation': {
                    value: 'advanced',
                    type: 'string',
                    allowedValues: ['none', 'simple', 'advanced']
                },
                'unfocusable': {
                    value: false,
                    type: 'boolean'
                },
                'disabled': {
                    value: false,
                    type: 'boolean'
                },
                'dataContext': {
                    value: null,
                    reflectToAttribute: false,
                    type: 'any'
                },
                'debugMode': {
                    value: true,
                    type: 'boolean',
                    reflectToAttribute: false
                },
                'locale': {
                    value: 'en',
                    type: 'string',
                    reflectToAttribute: false
                },
                'localizeFormatFunction': {
                    value: undefined,
                    type: 'function',
                    reflectToAttribute: false
                },
                'messages': {
                    value: {
                        'en': {
                            'propertyUnknownName': 'Invalid property name: \'{{name}}\'!',
                            'propertyUnknownType': '\'{{name}}\' property is with undefined \'type\' member!',
                            'propertyInvalidValue': 'Invalid \'{{name}}\' property value! Actual value: \'{{actualValue}}\', Expected value: \'{{value}}\'!',
                            'propertyInvalidValueType': 'Invalid \'{{name}}\' property value type! Actual type: \'{{actualType}}\', Expected type: \'{{type}}\'!',
                            'methodInvalidValueType': 'Invalid \'{{name}}\' method argument value type! Actual type: \'{{actualType}}\', Expected type: \'{{type}}\' for argument with index: \'{{argumentIndex}}\'!',
                            'methodInvalidArgumentsCount': 'Invalid \'{{name}}\' method arguments count! Actual arguments count: \'{{actualArgumentsCount}}\', Expected at least: \'{{argumentsCount}}\' argument(s)!',
                            'methodInvalidReturnType': 'Invalid \'{{name}}\' method return type! Actual type: \'{{actualType}}\', Expected type: \'{{type}}\'!',
                            'elementNotInDOM': 'Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.',
                            'moduleUndefined': 'Module is undefined.',
                            'missingReference': '{{elementType}}: Missing reference to \'{{files}}\'.',
                            'htmlTemplateNotSuported': '{{elementType}}: Web Browser doesn\'t support HTMLTemplate elements.',
                            'invalidTemplate': '{{elementType}}: \'{{property}}\' property accepts a string that must match the id of an HTMLTemplate element from the DOM.'
                        }
                    },
                    reflectToAttribute: false,
                    inherit: true,
                    type: 'object'
                },
                'props': {
                    value: null,
                    reflectToAttribute: false,
                    isHierarchicalProperty: true,
                    type: 'any'
                },
                'readonly': {
                    value: false,
                    type: 'boolean'
                },
                'renderMode': {
                    value: 'auto',
                    type: 'string',
                    reflectToAttribute: false,
                    allowedValues: ['auto', 'manual']
                },
                'rightToLeft': {
                    value: false,
                    type: 'boolean'
                },
                'rethrowError': {
                    value: true,
                    type: 'boolean',
                    reflectToAttribute: false
                },
                'theme': {
                    value: window[namespace].Theme,
                    type: 'string'
                },
                'visibility': {
                    value: 'visible',
                    allowedValues: ['visible', 'collapsed', 'hidden'],
                    type: 'string'
                },
                'wait': {
                    value: false,
                    type: 'boolean'
                }
            };
        }

        /**
            * @typedef {Object} bindings
            * @property {Array<Node>} children The child nodes.
            * @property {Node} node The node.
            * @property {BindingData} data The node's binding data.
            */

        /**
         * @typedef {Object} BindingData
         * @property {Boolean} twoWay - Deterimes whether it's one way or two way data binding.
         * @property {Boolean} updating - Determines whether the node is in update state.
         * @property {Object}  value - The bound property's value.
         * @property {String}  name - The bound property's name.
         */
        getBindings(node, ownerMap) {
            const that = this;

            let index = 0;
            let map = {
            };
            let boundData = (node => {
                if (node instanceof HTMLElement) {
                    return that.parseAttributes(node);
                }
                else {
                    let boundProperty = that.parseProperty(node.data ? node.data.trim() : null, 'textContent', node);

                    if (boundProperty) {
                        if (that && node.parentNode === that.$.content) {
                            boundProperty.value = that.$.html !== '' ? that.$.html : undefined;
                            that.innerHTML = '';
                        }

                        return {
                            'textContent': boundProperty
                        };
                    }
                }

                return undefined;
            })(node);

            if (boundData) {
                map.data = boundData;
            }

            if (!ownerMap) {
                map.mapping = [];
                ownerMap = map;
            }

            if (node.getAttribute) {
                map.nodeId = node.getAttribute('smart-id');

                if (ownerMap && boundData) {
                    ownerMap.mapping[map.nodeId] = boundData;
                }
            }

            map.node = node;

            if (node.firstChild) {
                map.children = {
                };
            }

            for (let child = node.firstChild; child; child = child.nextSibling) {
                map.children[index++] = that.getBindings(child, ownerMap);
            }

            return map;
        }

        _addRemovePropertyBinding(hostPropertyName, targetPropertyName, targetElement, removeBinding, parentElement) {
            if (!hostPropertyName || !targetPropertyName || !targetElement) {
                return;
            }

            const that = this;

            const bindings = that.bindings;
            const id = targetElement.getAttribute('smart-id');
            const twoWayBinding = hostPropertyName.indexOf('{{') >= 0;

            hostPropertyName = hostPropertyName.replace('{{', '').replace('}}', '').replace('[[', '').replace(']]', '');

            let not = false;

            if (hostPropertyName.indexOf('!') >= 0) {
                hostPropertyName = hostPropertyName.replace('!', '');
                not = true;
            }

            const hostProperty = that._properties[hostPropertyName];
            const boundProperty = {
                name: hostPropertyName, reflectToAttribute: hostProperty.reflectToAttribute, twoWay: twoWayBinding, type: hostProperty.type, not: not
            };

            if (parentElement && !removeBinding) {
                const map = {};

                const targetBoundProperty = {
                    name: hostPropertyName, targetPropertyName: targetPropertyName, reflectToAttribute: hostProperty.reflectToAttribute, twoWay: twoWayBinding, type: hostProperty.type, not: not
                };

                map[hostPropertyName] = targetBoundProperty;
                bindings.mapping[id] = map;
            }

            const setBinding = function (boundChildren) {
                for (let childIndex in boundChildren) {
                    const child = boundChildren[childIndex];

                    if (child.nodeId === id) {
                        if (!child.data) {
                            child.data = {
                            };
                        }

                        if (removeBinding) {
                            child.data[targetPropertyName] = null;
                            delete child.data[targetPropertyName];
                        }
                        else {
                            child.data[targetPropertyName] = boundProperty;
                        }

                        break;
                    }

                    if (child.children) {
                        setBinding(child.children);
                    }
                    else if (child.node && child.node.children && child.node === targetElement.parentElement) {
                        const node = child.node;

                        if (node.firstChild) {
                            child.children = {
                            };
                        }
                        else {
                            continue;
                        }

                        let index = 0;

                        for (let currentChild = node.firstChild; currentChild; currentChild = currentChild.nextSibling) {
                            child.children[index++] = that.getBindings(currentChild);
                        }

                        setBinding(child.children);
                    }
                }
            }
            setBinding(bindings.children);

            if (!removeBinding) {
                that.boundProperties[hostPropertyName] = true;
            }
            else {
                delete that.boundProperties[hostPropertyName];
            }

            that.updateBoundNodes(hostPropertyName);
        }

        addPropertyBinding(hostPropertyName, targetPropertyName, targetElement, parentElement) {
            const that = this;

            that._addRemovePropertyBinding(hostPropertyName, targetPropertyName, targetElement, false, parentElement);
        }

        removePropertyBinding(hostPropertyName, targetPropertyName, targetElement, parentElement) {
            const that = this;

            that._addRemovePropertyBinding(hostPropertyName, targetPropertyName, targetElement, true, parentElement);
        }

        /**
         * Parses the element's attributes.
         * @param {HTMLElement} - html element.
         * @return {Array<BindingData>}
         */
        parseAttributes(htmlElement) {
            const that = this;

            let boundProperties = undefined;

            for (let i = 0; i < htmlElement.attributes.length; i++) {
                const attribute = htmlElement.attributes[i];
                const attributeName = attribute.name;
                const attributeValue = attribute.value;
                if (!BindingModule.cache['toCamelCase' + attributeName]) {
                    BindingModule.cache['toCamelCase' + attributeName] = Utilities.Core.toCamelCase(attributeName);
                }

                const propertyName = BindingModule.cache['toCamelCase' + attributeName];

                if (attributeName.indexOf('(') >= 0) {
                    let eventName = attributeName.substring(1, attributeName.length - 1);
                    if (that && !that.dataContext) {
                        that.templateListeners[htmlElement.getAttribute('smart-id') + '.' + eventName] = attributeValue;
                        htmlElement.removeAttribute(attributeName);
                        continue;
                    }
                    else {
                        if (!boundProperties) {
                            boundProperties = {
                            };
                        }

                        const handlerName = attributeValue.substring(0, attributeValue.indexOf('('));

                        boundProperties[propertyName] = {
                            isEvent: true, name: eventName, value: handlerName
                        };
                        continue;
                    }
                }

                let boundProperty = that.parseProperty(attributeValue, attributeName, htmlElement);
                if (!boundProperty) {
                    continue;
                }

                if (!boundProperties) {
                    boundProperties = {
                    };
                }

                boundProperties[propertyName] = boundProperty;
            }

            return boundProperties;
        }

        /**
         * Parses a property.
         * @param {String} - The string to parse.
         * @param {name} - property's name.
         * @param {Node} - the node.
         * @return {BindingData}
         */
        parseProperty(text, elementAttributeName/*, name, node*/) {
            if (!text || !text.length)
                return;

            const that = this;

            let boundProperty;
            let length = text.length;
            let startIndex = 0, lastIndex = 0, endIndex = 0;
            let twoWay = true;

            while (lastIndex < length) {
                startIndex = text.indexOf('{{', lastIndex);
                let twoWayStart = text.indexOf('[[', lastIndex);
                let terminator = '}}';

                if (twoWayStart >= 0 &&
                    (startIndex < 0 || twoWayStart < startIndex)) {
                    startIndex = twoWayStart;
                    twoWay = false;
                    terminator = ']]';
                }

                endIndex = startIndex < 0 ? -1 : text.indexOf(terminator, startIndex + 2);

                if (endIndex < 0) {
                    return;
                }

                boundProperty = boundProperty || {
                };
                let pathString = text.slice(startIndex + 2, endIndex).trim();
                let attributeName = pathString;

                boundProperty.name = attributeName;
                lastIndex = endIndex + 2;
            }

            const propertyName = boundProperty.name;
            const elementProperty = that ? that._properties[propertyName] : null;

            boundProperty.twoWay = twoWay;
            boundProperty.ready = false;

            if (that) {
                if (propertyName.indexOf('::') >= 0) {
                    that.boundProperties[propertyName.substring(0, propertyName.indexOf('::'))] = true;
                }
                else {
                    that.boundProperties[propertyName] = true;
                }
            }

            if (elementProperty) {
                boundProperty.type = elementProperty.type;
                boundProperty.reflectToAttribute = elementProperty.reflectToAttribute;
            }
            else {
                const booleans = ['checked', 'selected', 'async', 'autofocus', 'autoplay', 'controls', 'defer', 'disabled', 'hidden', 'ismap', 'loop', 'multiple', 'open', 'readonly', 'required', 'scoped'];
                if (booleans.indexOf(elementAttributeName) >= 0) {
                    boundProperty.type = 'boolean';
                }
                else {
                    boundProperty.type = 'string';
                }

                boundProperty.reflectToAttribute = true;
            }

            return boundProperty;
        }

        /**
         * Updates element's data bound nodes.
         */
        updateTextNodes() {
            const that = this;

            that.updateTextNode(that.shadowRoot || that, that.bindings, that);
        }

        /**
         * Updates a data bound node.
         * @param {Node} - The bound node.
         * @param {Array<BindingData>} - The node's binding data.
         * @param {Element} - The element to be updated.
         */
        updateTextNode(node, bindings, element) {
            const that = this;

            if (!bindings) {
                return;
            }

            let index = 0;
            for (let child = node.firstChild; child; child = child.nextSibling) {
                if (!bindings.children) {
                    break;
                }

                that.updateTextNode(child, bindings.children[index++], element);
            }

            if (!bindings || !bindings.data) {
                return;
            }

            for (let name in bindings.data) {
                const boundProperty = bindings.data[name];
                const boundPropertyName = boundProperty.name;

                if (name !== 'textContent' || !boundProperty.twoWay || boundProperty.updating || boundProperty.value === undefined) {
                    continue;
                }

                element[boundPropertyName] = boundProperty.value;
            }
        }

        /**
         * Updates a data bound property.
         * @param {String} - The propery's name.
         * @param {Object} - The property's value.
         */
        updateBoundProperty(propertyName, propertyConfig) {
            if (propertyConfig.updating) {
                return;
            }

            const that = this;
            const element = that;

            propertyConfig.updating = true;
            element[propertyName] = propertyConfig.value;
            propertyConfig.updating = false;
        }

        /**
         * Updates element's data bound nodes.
         */
        updateBoundNodes(propertyName) {
            const that = this;

            that.updateBoundNode(that.shadowRoot || that, that.bindings, that, propertyName);
            if (that.detachedChildren.length > 0) {
                for (let i = 0; i < that.detachedChildren.length; i++) {
                    const node = that.detachedChildren[i];
                    const smartId = node.getAttribute('smart-id');

                    const getBindings = function (bindings) {
                        if (bindings.nodeId === smartId) {
                            return bindings;
                        }

                        for (let index in bindings.children) {
                            const node = bindings.children[index];
                            const attribute = node.getAttribute ? node.getAttribute('smart-id') : '';

                            if (attribute === smartId) {
                                return bindings;
                            }

                            if (node.children) {
                                const result = getBindings(node);
                                if (result) {
                                    return result;
                                }
                            }
                        }

                        return null;
                    }

                    const bindings = getBindings(that.bindings);

                    if (bindings) {
                        that.updateBoundNode(node, bindings, that, propertyName, true);
                    }
                    else {
                        if (node.getAttribute && that.bindings.mapping) {
                            const element = that;
                            const bindings = that.bindings;

                            if (bindings) {
                                for (let mapping in bindings.mapping) {
                                    const childNode = element.querySelector('[smart-id="' + mapping + '"]');

                                    if (childNode) {
                                        const dataBoundProperties = bindings.mapping[mapping];

                                        that.updateBoundData(childNode, dataBoundProperties, element, propertyName);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        updateBoundMappedNodes() {
            const that = this;
            const bindings = that.bindings;
            const element = that;

            if (!bindings.mapping) {
                return;
            }

            for (let mapping in bindings.mapping) {
                let childNode = element.querySelector('[smart-id="' + mapping + '"]');

                if (element.shadowRoot) {
                    childNode = element.querySelector('[id="' + mapping + '"]');

                    if (!childNode) {
                        childNode = element.shadowRoot.querySelector('[id="' + mapping + '"]') || element.shadowRoot.querySelector('[smart-id="' + mapping + '"]');
                    }
                }

                if (childNode) {
                    const dataBoundProperties = bindings.mapping[mapping];

                    that.updateBoundData(childNode, dataBoundProperties, element);
                }
                else if (element.getAttribute('aria-controls')) {
                    let detachedChildNode = document.getElementById(element.getAttribute('aria-controls'));

                    if (!detachedChildNode && element.shadowRoot) {
                        detachedChildNode = element.shadowRoot.getElementById(element.getAttribute('aria-controls'));
                    }

                    childNode = detachedChildNode.querySelector('[smart-id="' + mapping + '"]');

                    if (childNode) {
                        const dataBoundProperties = bindings.mapping[mapping];

                        that.updateBoundData(childNode, dataBoundProperties, element);
                    }
                }
            }
        }

        /**
         * Updates a data bound node.
         * @param {Node} - The bound node.
         * @param {Array<BindingData>} - The node's binding data.
         * @param {Element} - The element to be updated.
         */
        updateBoundNode(node, bindings, element, propertyName, detached) {
            const that = this;

            if (!bindings) {
                return;
            }

            let index = 0;
            if (!detached) {
                for (let child = node.firstChild; child; child = child.nextSibling) {
                    if (!bindings.children) {
                        break;
                    }
                    //       that.updateBoundNode(child, bindings.children[index++], element, propertyName);

                    if (child.getAttribute) {
                        const childId = child.getAttribute('smart-id');
                        const childBindings = function () {
                            for (let binding in bindings.children) {
                                if (bindings.children[binding].nodeId === childId) {
                                    return bindings.children[binding];
                                }
                            }
                        }();

                        that.updateBoundNode(child, childBindings, element, propertyName);
                        index++;
                    }
                    else {
                        that.updateBoundNode(child, bindings.children[index++], element, propertyName);
                    }
                }
            }
            else if (detached && !bindings.data) {
                for (let child = node.firstChild; child; child = child.nextSibling) {
                    if (!bindings.children) {
                        break;
                    }

                    //   that.updateBoundNode(child, bindings.children[index++], element, propertyName, detached);

                    if (child.getAttribute) {
                        const childId = child.getAttribute('smart-id');
                        const childBindings = function () {
                            for (let binding in bindings.children) {
                                if (bindings.children[binding].nodeId === childId) {
                                    return bindings.children[binding];
                                }
                            }
                        }();

                        that.updateBoundNode(child, childBindings, element, propertyName);
                        index++;
                    }
                    else {
                        that.updateBoundNode(child, bindings.children[index++], element, propertyName, detached);
                    }
                }
            }

            if (!bindings || !bindings.data) {
                return;
            }

            const dataBoundProperties = bindings.data;

            that.updateBoundData(node, dataBoundProperties, element, propertyName);
        }

        updateBoundData(node, dataBoundProperties, element, propertyName) {
            const that = this;

            for (let name in dataBoundProperties) {
                const boundProperty = dataBoundProperties[name];
                let boundPropertyName = boundProperty.name;

                if (boundProperty.updating) {
                    continue;
                }

                if (boundPropertyName.indexOf('::') >= 0) {
                    boundPropertyName = boundPropertyName.substring(0, boundPropertyName.indexOf('::'));
                }

                if (propertyName !== undefined && propertyName !== boundPropertyName) {
                    continue;
                }

                if (boundPropertyName.indexOf('(') >= 0) {
                    let args = boundPropertyName.substring(boundPropertyName.indexOf('('));

                    const methodName = boundPropertyName.substring(0, boundPropertyName.indexOf('('));

                    args = args.substring(1, args.length - 1);
                    args = args.replace(/ /ig, '');
                    args = args.split(',');
                    if (args.length > 0 && args[0] !== '') {
                        let values = [];
                        for (let i = 0; i < args.length; i++) {
                            values.push(element[args[i]]);
                        }

                        boundProperty.value = element[methodName].apply(element, values);
                    }
                    else {
                        boundProperty.value = element[methodName]();
                    }

                    boundProperty.type = typeof boundProperty.value;
                }
                else {
                    boundProperty.value = element[boundPropertyName];
                }

                if (boundPropertyName === 'innerHTML') {
                    if (node[name].toString().trim() !== element[boundPropertyName].toString().trim()) {
                        if (boundProperty.ready) {
                            node[name] = boundProperty.value.toString().trim();
                        }
                        else if (element._properties[boundPropertyName].defaultValue !== boundProperty.value) {
                            node[name] = boundProperty.value.toString().trim();
                        }
                    }
                }
                else {
                    if (boundProperty.not) {
                        node[name] = !boundProperty.value;

                        if (boundProperty.targetPropertyName) {
                            node[boundProperty.targetPropertyName] = !boundProperty.value;
                        }
                    }
                    else {
                        node[name] = boundProperty.value;

                        if (boundProperty.targetPropertyName) {
                            node[boundProperty.targetPropertyName] = boundProperty.value;
                        }
                    }
                }

                if (node.$ && node.$.isNativeElement) {
                    if (!BindingModule.cache['toDash' + name]) {
                        BindingModule.cache['toDash' + name] = Utilities.Core.toDash(name);
                    }

                    const attributeName = BindingModule.cache['toDash' + name];
                    const oldValue = node.$.getAttributeValue(attributeName, boundProperty.type);
                    if (boundProperty.reflectToAttribute && (oldValue !== boundProperty.value || !boundProperty.ready)) {
                        node.$.setAttributeValue(attributeName, boundProperty.value, boundProperty.type);
                    }
                    if (!boundProperty.reflectToAttribute) {
                        node.$.setAttributeValue(attributeName, null, boundProperty.type);
                    }
                }

                if (!boundProperty.ready) {
                    if (node.$ && node.$.isCustomElement) {
                        if (!BindingModule.cache['toDash' + name]) {
                            BindingModule.cache['toDash' + name] = Utilities.Core.toDash(name);
                        }

                        const attributeName = BindingModule.cache['toDash' + name];

                        if (!node._properties) {
                            node._beforeCreatedProperties = node._properties = node.propertyByAttributeName = [];
                        }

                        if (!node._properties[name]) {
                            node._properties[name] = {
                                attributeName: attributeName
                            }

                            if (node._beforeCreatedProperties) {
                                node._beforeCreatedProperties[name] = node._properties[name];
                            }

                            node.propertyByAttributeName[attributeName] = node._properties[name];
                        }

                        const propertyConfig = node._properties[name];

                        propertyConfig.isUpdating = true;

                        if (boundProperty.reflectToAttribute) {
                            if (boundProperty.not) {
                                node.$.setAttributeValue(propertyConfig.attributeName, !boundProperty.value, boundProperty.type);
                            }
                            else {
                                node.$.setAttributeValue(propertyConfig.attributeName, boundProperty.value, boundProperty.type);
                            }
                        }

                        if (!boundProperty.reflectToAttribute) {
                            node.$.setAttributeValue(propertyConfig.attributeName, null, boundProperty.type);
                        }

                        propertyConfig.isUpdating = false;
                    }

                    if (boundProperty.twoWay) {
                        const updateToken = function (value) {
                            boundProperty.value = value;

                            if (node.$ && node.$.isNativeElement) {
                                if (!BindingModule.cache['toDash' + name]) {
                                    BindingModule.cache['toDash' + name] = Utilities.Core.toDash(name);
                                }

                                const attributeName = BindingModule.cache['toDash' + name];
                                const oldValue = node.$.getAttributeValue(attributeName, boundProperty.type);

                                if (boundProperty.reflectToAttribute && oldValue !== boundProperty.value) {
                                    node.$.setAttributeValue(attributeName, boundProperty.value, boundProperty.type);
                                }
                                if (!boundProperty.reflectToAttribute) {
                                    node.$.setAttributeValue(attributeName, null, boundProperty.type);
                                }
                            }
                        }

                        if (boundProperty.name.indexOf('::') >= 0) {
                            const eventIndex = boundProperty.name.indexOf('::');
                            const eventName = boundProperty.name.substring(eventIndex + 2);

                            that['$' + node.getAttribute('smart-id')].listen(eventName, function () {
                                updateToken(node[name]);

                                const boundPropertyName = boundProperty.name.substring(0, boundProperty.name.indexOf('::'));

                                that.updateBoundProperty(boundPropertyName, boundProperty);
                            });
                        }

                        if (node.$ && node.$.isCustomElement) {
                            if (node._properties[name]) {
                                node._properties[name].notify = true;
                            }

                            if (!BindingModule.cache['toDash' + name]) {
                                BindingModule.cache['toDash' + name] = Utilities.Core.toDash(name);
                            }

                            const attributeName = BindingModule.cache['toDash' + name];

                            that['$' + node.getAttribute('smart-id')].listen(attributeName + '-changed', function (event) {
                                let detail = event.detail;
                                updateToken(detail.value);

                                const context = that.context;

                                if (event.context !== document) {
                                    that.context = that;
                                }

                                that.updateBoundProperty(boundProperty.name, boundProperty);

                                //    that.updateBoundProperty(name, boundProperty);

                                that.context = context;
                            });
                        }
                    }
                }

                boundProperty.ready = true;
            }

        }
        static clearCache() {
            const that = this;

            that.cache = {
            };
        }

        /**
         * Adds messages.
         * @param {String} - the string value's key.
         * @param {Object} - the messages object.
         */
        addMessages(messageKey, messages) {
            const that = this;

            Object.assign(that.messages[messageKey], messages);
        }

        /**
          * Translates a text.
          * @param {String} the string value's key.
          * @param {Object} the values to be replaced in the string.
          * @return {String} the translated text.
         */
        localize(messageKey, messageArguments) {
            const that = this;

            if (!that.messages || !that.messages[that.locale]) {
                return undefined;
            }

            let message = that.messages[that.locale][messageKey];

            if (message === '') {
                return '';
            }

            if (!message) {
                return undefined;
            }

            const defaultMessage = message;
            for (let messageName in messageArguments) {
                let messageValue = messageArguments[messageName];
                message = message.replace(new RegExp('{{' + messageName + '}}', 'g'), messageValue);
            }

            if (that.localizeFormatFunction) {
                that.localizeFormatFunction(defaultMessage, message, messageArguments)
            }

            return message;
        }

        /**
         * Element's requires.
         *
         * @return {Object} - element's required modules.
         */
        static get requires() {
            return {
            };
        }

        /**
         * Element's listeners.
         *
         * @return {Object} - element's listeners.
         */
        static get listeners() {
            return {
                'theme-changed': function (event) {
                    this.theme = event.detail.newValue;
                }
            };
        }

        static get methods() {
            return {

            };
        }

        get classNamesMap() {
            return {
                animation: 'smart-animate',
                rippleAnimation: 'smart-ripple'
            }
        }

        get hasAnimation() {
            const that = this;

            if (that.animation === 'none') {
                return false;
            }

            return true;
        }

        get hasRippleAnimation() {
            const that = this;

            if (that.animation === 'none') {
                return false;
            }

            if (that.animation === 'advanced') {
                return true;
            }

            return false;
        }

        /**
         * Element's modules.
         *
         * @return {Array<Module>} - element's modules.
         */
        static get modules() {
            return window[namespace].Modules;
        }

        get properties() {
            const that = this;

            if (!that._properties) {
                that._properties = [];
            }

            return that._properties;
        }

        /**
         * Gets the element's parents.
         *
         * @return {Array<HTMLElement>} - element's parents.
         */
        get parents() {
            const that = this;

            let matched = [],
                current = that.parentNode;

            while (current && current.nodeType !== 9) {
                if (current instanceof HTMLElement === true) {
                    matched.push(current);
                }
                current = current.parentNode;
            }

            const rootNode = that.getRootNode();

            if (rootNode.host) {
                const getNodeParents = (node) => {
                    let matched = [node],
                        current = node.parentNode;

                    while (current && current.nodeType !== 9) {
                        if (current instanceof HTMLElement === true) {
                            matched.push(current);
                        }
                        current = current.parentNode;
                    }

                    return matched;
                }

                matched = matched.concat(getNodeParents(rootNode.host));
            }

            if (window[namespace].EnableShadowDOM && that.isInShadowDOM && that.shadowParent) {
                matched = matched.concat(that.shadowParent.parents);
            }

            return matched;
        }

        /** Displays a log in the console.*/
        log(message) {
            const that = this;

            that._logger('log', message);
        }

        /** Displays a warning in the console.*/
        warn(message) {
            const that = this;

            that._logger('warn', message);
        }

        /** Displays an error in the console.*/
        error(message) {
            const that = this;

            that._logger('error', message);
        }

        /**
          Logs an Error.
          @param {String} the error's level - 'warn', 'error' or 'log'.
          @param {Error} the error to be logged.
         */
        _logger(level, error) {
            const that = this;

            if (that.debugMode) {
                const errorMessage = error instanceof Error ? error.message : error.toString();

                console[level](errorMessage);
            }

            if (that.rethrowError && level === 'error') {
                throw error;
            }
        }

        /**
         * Gets if the element is currently focused.
         *
         * @return {Boolean}.
         */
        get focused() {
            return this.contains(document.activeElement);
        }

        /**
         * Gets the element's HTML Template.
         *
         * @returns {String} - element's template.
         */
        template() {
            return '<div></div>';
        }

        /** Called when the element is registered. */
        registered() {
            const that = this;

            if (that.onRegistered) {
                that.onRegistered();
            }
        }

        /** Called when the element has been created. */
        created() {
            const that = this;

            that.isReady = false;
            that._initElement(that);
            that._setModuleState('created');

            if (that.onCreated) {
                that.onCreated();
            }
        }

        /** Called when the element is rendered and configured. Use for one-time post configuration of your element. */
        completed() {
            const that = this;

            that.isCompleted = true;

            if (that._onCompleted) {
                that._onCompleted();
            }

            if (that.onCompleted) {
                that.onCompleted();
            }
        }

        whenReady(callback) {
            const that = this;

            if (that.isCompleted) {
                callback();
                return;
            }

            if (!that.whenReadyCallbacks) {
                that.whenReadyCallbacks = [];
            }

            that.whenReadyCallbacks.push(callback);
        }

        whenRendered(callback) {
            const that = this;

            if (that.isRendered) {
                callback();
                return;
            }

            if (!that.whenRenderedCallbacks) {
                that.whenRenderedCallbacks = [];
            }

            that.whenRenderedCallbacks.push(callback);
        }

        addThemeClass() {
            const that = this;

            if (that.theme !== '') {
                that.classList.add('smart-' + that.theme);
            }
        }

        addDefaultClass() {
            const that = this;

            that.classList.add(namespace.toLowerCase() + '-element');
            that.classList.add(that.nodeName.toLowerCase());
        }

        _renderShadowRoot() {
            const that = this;

            if (that.shadowRoot) {
                that.$.root.classList.add(that.nodeName.toLowerCase());

                for (let i = 0; i < that.attributes.length; i++) {
                    const attribute = that.attributes[i];

                    if (attribute.name === 'class' || attribute.name === 'id' || attribute.name === 'style' || attribute.name === 'tabindex' || attribute.name.indexOf('aria') >= 0) {
                        continue;
                    }

                    that.$.root.setAttribute(attribute.name, attribute.value);
                }

                for (let i = 0; i < that.classList.length; i++) {
                    const className = that.classList[i];

                    if (className === 'smart-element-init' || className === 'smart-element' || className === 'smart-hidden' || className === 'smart-visibility-hidden') {
                        continue;
                    }

                    that.$.root.classList.add(className);
                }
            }
        }

        render() {
            const that = this;

            if (!that.isRendered) {
                that.isRendered = true;
                that.isRendering = false;
                that.context = document;

                that._renderShadowRoot();
                if (that.whenRenderedCallbacks) {
                    for (let i = 0; i < that.whenRenderedCallbacks.length; i++) {
                        that.whenRenderedCallbacks[i]();
                    }

                    that.whenRenderedCallbacks = [];
                }
            }

            if (that.onRender) {
                that.onRender();
            }

            if (that.disabled) {
                that.setAttribute('aria-disabled', true);
            }

            if (that.readonly &&
                ['checkbox', 'combobox', 'grid', 'gridcell', 'listbox', 'radiogroup', 'slider', 'spinbutton', 'textbox'].indexOf(that.getAttribute('role')) !== -1) {
                that.setAttribute('aria-readonly', true);
            }
        }

        /** Called when the element is ready. Use for one-time configuration of your element. */
        ready() {
            const that = this;

            that._setId();
            that.addThemeClass();
            that.addDefaultClass();

            if (that.visibility === 'collapsed') {
                that.classList.add('smart-hidden');
            }
            else if (that.visibility === 'hidden') {
                that.classList.add('smart-visibility-hidden');
            }

            if (that.dataContext) {
                that.applyDataContext();
            }

            if (that.onReady) {
                that.onReady();
            }

            if (that.shadowRoot && Smart(that._selector)) {
                if (Smart(that._selector).styleUrls) {
                    const styleUrls = Smart(that._selector).styleUrls;

                    for (let i = 0; i < styleUrls.length; i++) {
                        that.importStyle(styleUrls[i]);
                    }
                }

                if (Smart(that._selector).styles) {
                    const scopedStyle = document.createElement('style');
                    scopedStyle.innerHTML = Smart(that._selector).styles;
                    that.shadowRoot.insertBefore(scopedStyle, that.shadowRoot.firstChild);
                }
            }

            if (Smart(that._selector) && Smart(that._selector).ready) {
                Smart(that._selector).ready();
            }
        }

        /**
         * Sets an id to the element if one is not provided by the user.
         */
        _setId() {
            const that = this;

            if (!that.id) {
                const elementName = that.elementName;

                that.id = elementName.slice(0, 1).toLowerCase() + elementName.slice(1) +
                    Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
        }

        checkLicense() {
            const that = this;
            if (window[namespace].License === 'Evaluation' && window.location.hostname.indexOf('htmlelements') === -1) {
                that.logWatermark();
                that.logLicense();
                window[namespace].License = ''
            }
        }

        logWatermark() {
            //const that = this;
            const anchor = document.createElement('a');
            const delay = 6000;

            anchor.href = 'https://www.htmlelements.com/';
            anchor.innerHTML = 'https://www.htmlelements.com/';
            anchor.style.position = 'absolute';
            anchor.style.right = '5px';
            anchor.style.bottom = '5px';
            anchor.style.color = '#fff';
            anchor.style.padding = '20px';
            anchor.style.borderRadius = '5px';
            anchor.style.background = '#0C3D78';
            anchor.style.cursor = 'pointer';
            anchor.style.zIndex = '999999';
            anchor.style.display = 'block';
            anchor.style.fontSize = '24px';
            anchor.style.textDecoration = 'none';
            anchor.style.fontWeight = 'bold';
            anchor.style.opacity = 0;
            anchor.style.transition = 'opacity .35s ease-in-out';
            anchor.id = 'watermark';

            if (document.getElementById('watermark')) {
                return;
            }

            setTimeout(() => {
                if (document.getElementById('watermark')) {
                    return;
                }

                document.body.appendChild(anchor);

                setTimeout(() => {
                    anchor.style.opacity = 1;
                });

                setTimeout(() => {
                    anchor.style.opacity = 0;

                    setTimeout(() => {
                        anchor.parentNode.removeChild(anchor);
                    }, 350);
                }, delay);
            }, 1000);
        }

        logLicense() {
            console.log('****************************************************************************************************************');
            console.log('****************************************************************************************************************');
            console.log('****************************************************************************************************************');
            console.log('*Smart HTML Elements License Key Not Found.');
            console.log('*This is an evaluation only version, it is not licensed for development projects intended for production.');
            console.log('*if you want to hide the watermark, please send an email to: sales@htmlelements.com for a license.');
            console.log('****************************************************************************************************************');
            console.log('****************************************************************************************************************');
            console.log('****************************************************************************************************************');
        }

        get _selector() {
            const that = this;

            if (that.id) {
                return '#' + that.id;
            }

            if (that.classList.length > 0) {
                return '.' + that.classList[0];
            }

            return '';
        }

        applyDataContext(dataContextObject) {
            const that = this;
            let dataContext = typeof that.dataContext === 'string' ? window[that.dataContext] || document[that.dataContext] : that.dataContext;

            if (dataContextObject) {
                dataContext = dataContextObject;
                that.dataContext = dataContextObject;
            }

            if (!dataContext) {
                that.dataContextProperties = null;

                const lazyApplyDataContext = function () {
                    const dataContext = typeof that.dataContext === 'string' ? window[that.dataContext] || document[that.dataContext] : that.dataContext;

                    if (dataContext) {
                        that.applyDataContext();
                        window.removeEventListener('load', lazyApplyDataContext);
                    }
                }
                window.addEventListener('load', lazyApplyDataContext);

                return;
            }

            if (!dataContext._uid) {
                dataContext._uid = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();

                dataContext._properties = [];

                for (let propertyName in dataContext) {
                    const dataContextItem = dataContext[propertyName];

                    if (typeof dataContextItem === 'function' || propertyName === '_properties' || propertyName === '_uid') {
                        continue;
                    }

                    dataContext._properties[propertyName] = dataContextItem;
                    Object.defineProperty(dataContext, propertyName, {
                        configurable: false,
                        enumerable: true,
                        get() {
                            return dataContext._properties[propertyName];
                        },
                        set(value) {
                            const oldValue = dataContext._properties[propertyName];
                            dataContext._properties[propertyName] = value;
                            let changedProperties = [];

                            changedProperties[propertyName] = {
                                oldValue: oldValue, value: value
                            };
                            changedProperties.length++;
                            that.updatingDataContext = true;
                            $document.fireEvent('dataContextPropertyChanged', {
                                dataContext: dataContext,
                                properties: changedProperties
                            },
                                {
                                    bubbles: false,
                                    cancelable: true
                                });
                            that.updatingDataContext = false;

                        }
                    });
                }
            }



            that.dataContextProperties = that.parseAttributes(that);
            that.dataContextPropertiesMap = {
            };

            that.dataContextListeners = {
            };

            if (!that.dataContextProperties) {
                that.dataContextProperties = null;
                return;
            }

            that.updatingDataContext = true;

            for (let boundProperty in that.dataContextProperties) {
                const binding = that.dataContextProperties[boundProperty];
                const name = binding.name;

                binding.propertyName = boundProperty;

                that.dataContextPropertiesMap[name] = boundProperty;

                if (!BindingModule.cache['toDash' + boundProperty]) {
                    BindingModule.cache['toDash' + boundProperty] = Utilities.Core.toDash(name);
                }

                if (binding.isEvent) {
                    const handlerName = binding.value;
                    if (that.dataContextListeners[name]) {
                        that.removeEventListener(name, that.dataContextListeners[name]);
                    }

                    that.dataContextListeners[name] = function (event) {
                        dataContext[handlerName](event);
                    };
                    that.addEventListener(name, that.dataContextListeners[name]);
                }

                if (name.indexOf('.') >= 0) {
                    const path = name.split('.');
                    let dataBoundObject = dataContext[path[0]];

                    for (let i = 1; i < path.length; i++) {
                        dataBoundObject = dataBoundObject[path[i]];
                    }

                    if (dataBoundObject !== undefined) {
                        that[boundProperty] = dataBoundObject;
                    }
                }
                else {
                    that[boundProperty] = dataContext[name];
                }
            }

            that.dataContextPropertyChangedHandler = function (event) {
                const properties = event.detail.properties;
                const dataContext = event.detail.dataContext;
                const elementDataContext = typeof that.dataContext === 'string' ? window[that.dataContext] || document[that.dataContext] : that.dataContext;

                if (dataContext === elementDataContext) {
                    for (let property in properties) {
                        const elementPropertyName = that.dataContextPropertiesMap[property];
                        const context = that.context;

                        if (!elementPropertyName) {
                            continue;
                        }

                        that.context = document;
                        that[elementPropertyName] = properties[property].value;
                        that.context = context;
                    }
                }
            }

            $document.listen('dataContextPropertyChanged', that.dataContextPropertyChangedHandler);

            that.updatingDataContext = false;
        }

        updateDataContextProperty(propertyName) {
            const that = this;
            const dataContext = typeof that.dataContext === 'string' ? window[that.dataContext] || document[that.dataContext] : that.dataContext;
            const boundProperty = that.dataContextProperties[propertyName];

            if (that.updatingDataContext) {
                return;
            }

            if (boundProperty.twoWay) {
                const name = boundProperty.name;

                if (name.indexOf('.') >= 0) {
                    const path = name.split('.');
                    let dataBoundObject = dataContext[path[0]];

                    for (let i = 1; i < path.length; i++) {
                        dataBoundObject = dataBoundObject[path[i]];
                    }

                    if (dataBoundObject !== undefined) {
                        dataBoundObject = that[propertyName];

                        if (dataContextInfo[dataContext._uid]) {
                            dataContextInfo[dataContext._uid][propertyName] = dataBoundObject;
                        }
                    }
                }
                else {
                    dataContext[name] = that[propertyName];

                    if (dataContextInfo[dataContext._uid]) {
                        dataContextInfo[dataContext._uid][propertyName] = dataContext[name];
                    }
                }
            }
        }

        static get version() {
            return window[namespace].Version;
        }

        initProperties() {
            const that = this;

            if (Smart(that._selector) && Smart(that._selector).properties) {
                that._initProperties = Smart(that._selector).properties;
            }

            if (that.hasAttribute('props') && !that.props) {
                that._initProperties = window[that.getAttribute('props')];
            }
            else if (that.props) {
                that._initProperties = that.props;
            }

            if (that._initProperties) {
                const propertyNames = Object.keys(that._initProperties);

                for (let i = 0; i < propertyNames.length; i++) {
                    const propertyName = propertyNames[i];
                    const propertyValue = that._initProperties[propertyName]

                    if (propertyValue.constructor === Smart.ObservableArray || propertyValue instanceof Smart.ObservableArray) {
                        that[propertyName] = propertyValue.toArray();
                        continue;
                    }

                    if (propertyValue.constructor === Smart.DataAdapter || propertyValue.constructor.name === 'smartDataAdapter' || (typeof propertyValue === 'object' && Smart.DataAdapter && propertyValue instanceof Smart.DataAdapter) || propertyValue instanceof Smart.Observable || propertyValue.constructor === Smart.Observable || typeof propertyValue !== 'object' || Utilities.Types.isArray(propertyValue) || propertyValue instanceof Date) {
                        if (that[propertyName] === undefined && ['onReady', 'onAttached', 'onDetached', 'onCreated', 'onCompleted'].indexOf(propertyName) === -1) {
                            const localizedError = that.localize('propertyUnknownName', {
                                name: propertyName
                            });
                            that.log(localizedError);
                        }

                        that[propertyName] = propertyValue;
                        continue;
                    }

                    if (propertyName === 'messages' || propertyName === 'dataSourceMap') {
                        that[propertyName] = propertyValue;
                        continue;
                    }

                    if (typeof propertyValue === 'object') {
                        const setHierarchicalProperty = function (propertyValue, path) {
                            const subPropertyNames = Object.keys(propertyValue);

                            for (let i = 0; i < subPropertyNames.length; i++) {
                                const propertyName = subPropertyNames[i];
                                const subPropertyValue = propertyValue[propertyName]

                                const property = that._properties[path + '_' + propertyName];

                                if (property && property.value === null) {
                                    if (that[path + '_' + propertyName] === undefined) {
                                        const localizedError = that.localize('propertyUnknownName', {
                                            name: path + '_' + propertyName
                                        });
                                        that.log(localizedError);
                                    }

                                    that[path + '_' + propertyName] = subPropertyValue;
                                    continue;
                                }

                                if (typeof subPropertyValue === 'object' && !Utilities.Types.isArray(subPropertyValue) && subPropertyValue && subPropertyValue.constructor !== Date) {
                                    setHierarchicalProperty(subPropertyValue, path + '_' + propertyName);
                                }
                                else {
                                    if (that[path + '_' + propertyName] === undefined) {
                                        const localizedError = that.localize('propertyUnknownName', {
                                            name: path + '_' + propertyName
                                        });
                                        that.log(localizedError);
                                    }


                                    that[path + '_' + propertyName] = subPropertyValue;
                                }
                            }
                        }

                        setHierarchicalProperty(propertyValue, propertyName);
                    }
                }
            }
        }

        setup() {
            const that = this;

            that.context = this;

            if (that.isReady && !that.isCompleted) {
                return;
            }

            if (that.isReady) {
                that._setModuleState('attached');
                that.isAttached = true;
                that.attached();
                that._handleListeners('listen');

                that.context = document;
                return;
            }

            if (that.ownerElement && that.ownerElement.detachedChildren.indexOf(that) >= 0) {
                that.ownerElement.detachedChildren.splice(that.ownerElement.detachedChildren.indexOf(that), 1);
            }

            that.isReady = true;

            that.methods = that.getStaticMember('methods');

            that.initProperties();
            const isMobile = Core.isMobile;

            if (isMobile) {
                that.classList.add('smart-mobile');
            }
            /* Updates the properties by using the attribute values. */

            for (let i = 0; i < that.attributes.length; i += 1) {
                const property = that.propertyByAttributeName[that.attributes[i].name];

                if (!property) {
                    continue;
                }

                let attributeValue = that.$.getAttributeValue(property.attributeName, property.type);
                const attributeValueString = attributeValue ? attributeValue.toString() : '';

                if (attributeValueString.indexOf('{{') >= 0 || attributeValueString.indexOf('[[') >= 0) {
                    continue;
                }

                if (property.type !== 'object' && property.type !== 'array') {
                    if (that.attributes[i].value.indexOf('{{') >= 0 || that.attributes[i].value.indexOf('[[') >= 0) {
                        continue;
                    }
                }

                if (attributeValue !== undefined && property.value !== attributeValue) {
                    const attributeValueType = Utilities.Types.getType(attributeValue);
                    const attributeUntypedValue = that.attributes[i].value;

                    if (property.type === 'any' || property.type === 'object') {
                        if ('' + that[property.name] === attributeValue) {
                            continue;
                        }
                    }

                    if (property.type === 'array') {
                        if (that[property.name] && JSON.stringify(that[property.name]) === attributeValue) {
                            continue;
                        }
                    }

                    if (attributeValueType === 'number' && isNaN(attributeValue) && attributeUntypedValue !== 'NaN' && attributeUntypedValue !== 'Infinity' && attributeUntypedValue !== '-Infinity') {
                        const localizedError = that.localize('propertyInvalidValueType', { name: property.name, actualType: 'string', type: property.type });
                        that.log(localizedError);
                    }

                    property.isUpdatingFromAttribute = true;
                    that[property.name] = attributeValue;
                    property.isUpdatingFromAttribute = false;
                }
            }

            /* Set the default boolean and innerhtml attributes by using the property values. */
            for (let propertyName in that._properties) {
                const property = that._properties[propertyName];

                if (propertyName === 'innerHTML' && property.value === property.defaultValue) {
                    property.value = property.defaultValue = Utilities.Core.html(that);
                }

                if (property.type === 'boolean' || property.type === 'bool') {
                    if (that.getAttribute(property.attributeName) === 'false') {
                        property.isUpdating = true;
                        that.setAttribute(property.attributeName, '');
                        property.isUpdating = false;
                    }
                }

                if (!property.defaultReflectToAttribute || !property.reflectToAttribute) {
                    continue;
                }

                if (property.defaultReflectToAttribute && property.defaultReflectToAttributeConditions) {
                    let reflectToAttribute = true;

                    for (let i = 0; i < property.defaultReflectToAttributeConditions.length; i++) {
                        const condition = property.defaultReflectToAttributeConditions[i];
                        let conditionName;
                        let conditionValue;

                        for (let name in condition) {
                            conditionName = name;
                            conditionValue = condition[name];
                        }

                        if (that._properties[conditionName] && that._properties[conditionName].value !== conditionValue) {
                            reflectToAttribute = false;
                        }
                    }

                    if (!reflectToAttribute) {
                        continue;
                    }
                }

                property.isUpdating = true;
                that.$.setAttributeValue(property.attributeName, property.value, property.type);
                property.isUpdating = false;
            }

            const children = [];


            if (that.children.length > 0) {
                for (let i = 0; i < that.children.length; i++) {
                    const node = that.children[i];

                    if (Utilities.Extend(node).isCustomElement) {
                        children.push(node);
                    }
                }
            }

            that.applyTemplate();


            that.complete = function () {
                if (!that.templateBindingsReady) {
                    const updateTemplateBindings = (node) => {
                        if (node.templateBindingsReady) {
                            return;
                        }

                        node.templateBindingsReady = true;
                        node.updateTextNodes();
                        node.updateBoundNodes();
                    }

                    if (!that.ownerElement) {
                        updateTemplateBindings(that);
                    }
                    else {
                        let owner = that.ownerElement;
                        let owners = [];
                        while (owner) {
                            owners.push(owner);
                            owner = owner.ownerElement;
                        }

                        for (let i = owners.length - 1; i >= 0; i--) {
                            updateTemplateBindings(owners[i]);
                        }

                        updateTemplateBindings(that);
                    }
                }

                const init = () => {
                    that._setModuleState('ready');

                    that.ready();

                    if (that.renderMode === 'auto' && !that.isRendered) {
                        that.render();
                    }

                    that.isAttached = true;
                    that._setModuleState('attached');
                    that.attached();
                    that._handleListeners('listen');

                    if (!that.isHidden) {
                        if (that.offsetWidth === 0 || that.offsetHeight === 0) {
                            that.isHidden = true;
                        }
                    }

                    that.completed();

                    if (that.isRendered) {
                        that.context = document;
                    }

                    if (that.whenReadyCallbacks) {
                        for (let i = 0; i < that.whenReadyCallbacks.length; i++) {
                            that.whenReadyCallbacks[i]();
                        }

                        that.whenReadyCallbacks = [];
                    }
                }

                if (!that.wait) {
                    if (!that.classList.contains('smart-async')) {
                        const shadowParent = that.shadowParent;
                        that.shadowParent = null;
                        const parents = that.parents;
                        that.shadowParent = shadowParent;

                        if (parents.length === 0) {
                            return;
                        }

                        const updateBindings = () => {
                            let owner = that.ownerElement;
                            let owners = [];
                            while (owner) {
                                owners.push(owner);
                                owner = owner.ownerElement;
                            }

                            for (let i = owners.length - 1; i >= 0; i--) {
                                owners[i].updateBoundMappedNodes();
                            }
                        }

                        if (!that.ownerElement || parents[parents.length - 1].nodeName === 'HTML') {
                            init();
                        }
                        else if (that.getRootNode().host) {
                            init();
                        }
                        else if (that.ownerElement && that.ownerElement.parents[that.ownerElement.parents.length - 1].nodeName === 'HTML') {
                            updateBindings();
                            init();
                        }
                        else {
                            that.checkIsInDomInterval = setInterval(() => {
                                const parents = that.parents;

                                if (parents[parents.length - 1].nodeName === 'HTML') {
                                    clearInterval(that.checkIsInDomInterval);
                                    updateBindings();
                                    init();
                                }
                            }, 100);
                        }
                    }
                    else {
                        requestAnimationFrame(() => {
                            init();
                        });
                    }
                }
                else {
                    that.classList.add('smart-visibility-hidden');
                }
            }

            // All of the registered elements inside the element's local DOM are ready, and have had their ready methods called.
            let templateNodes = [].slice.call(that.querySelectorAll('[smart-id]')).concat(children);

            if (window[namespace].EnableShadowDOM && that.isInShadowDOM !== true) {
                templateNodes = [].slice.call(that.shadowRoot.querySelectorAll('[smart-id]')).concat(children);
            }

            if (templateNodes.length === 0) {
                that.complete();
            }
            else {
                that._completeListeners = 0;

                for (let i = 0; i < templateNodes.length; i++) {
                    const node = templateNodes[i];

                    if (Utilities.Extend(node).isCustomElement) {
                        const completeEventHandler = function () {
                            that._completeListeners--;
                            if (that._completeListeners === 0) {
                                that.complete();

                                delete that._completeListeners;
                            }
                        }.bind(that);

                        if (!node.isCompleted && !node.isUtilityElement && node.wait !== true) {
                            that._completeListeners++;

                            if (!node._onCompleted) {
                                node.completeHandlers = [];

                                node._onCompleted = function () {
                                    for (let i = 0; i < node.completeHandlers.length; i++) {
                                        node.completeHandlers[i]();
                                    }
                                }
                            }
                            node.completeHandlers.push(completeEventHandler);
                        }
                    }
                }

                if (that._completeListeners === 0) {
                    that.complete();
                }
            }
        }

        visibilityChangedHandler() {
            const that = this;

            if (!that.isReady) {
                return;
            }

            requestAnimationFrame(() => {
                if (that.offsetWidth === 0 || that.offsetHeight === 0) {
                    that.isHidden = true;
                }
                else {
                    that.isHidden = false;

                    that.$.fireEvent('resize', that, {
                        bubbles: false,
                        cancelable: true
                    });
                }
            });
        }

        /** Called when an attribute is changed. */
        attributeChangedCallback(name, oldValue, newValue) {
            const that = this;
            const property = that.propertyByAttributeName[name];

            if (name === 'class' || name === 'style') {
                that.visibilityChangedHandler();
            }

            if (!property) {
                that.attributeChanged(name, oldValue, newValue);
            }

            if (that.onAttributeChanged) {
                that.onAttributeChanged(name, oldValue, newValue);
            }

            if (!property || (property && property.isUpdating)) {
                return;
            }

            let newPropertyValue = that.$.getAttributeValue(property.attributeName, property.type);
            if (newValue !== undefined && that[property.name] !== newPropertyValue) {
                property.isUpdatingFromAttribute = true;
                if (newPropertyValue !== undefined) {
                    that[property.name] = newPropertyValue;
                }
                else {
                    that[property.name] = that._properties[property.name].defaultValue;
                }
                property.isUpdatingFromAttribute = false;
            }
        }

        /** Called when one of the element's attributes is changed. Use to handle attribute changes that don't correspond to declared properties. */
        attributeChanged(name, oldValue, newValue) {
            if (oldValue !== newValue) {
                /* attribute change handling logic here. */
            }
        }

        set hasStyleObserver(value) {
            const that = this;

            if (that._hasStyleObserver === undefined) {
                that._hasStyleObserver = value;
            }

            if (value) {
                StyleObserver.watch(that);
            }
            else {
                StyleObserver.unwatch(that);
            }
        }

        get hasStyleObserver() {
            const that = this;

            if (that._hasStyleObserver !== undefined) {
                return that._hasStyleObserver;
            }

            return true;
        }

        /** Called after the element is attached to the document. Can be called multiple times during the lifetime of an element. */
        attached() {
            const that = this;

            if (that.hasStyleObserver) {
                StyleObserver.watch(that);
            }

            if (that.onAttached) {
                that.onAttached();
            }

            if (Smart(that._selector) && Smart(that._selector).attached) {
                Smart(that._selector).attached();
            }
        }

        /** Called after the element is detached from the document. Can be called multiple times during the lifetime of an element. */
        detached() {
            const that = this;

            if (that.hasStyleObserver) {
                StyleObserver.unwatch(that);
            }

            that._setModuleState('detached');
            that.isAttached = false;

            if (that.ownerElement && that.ownerElement.detachedChildren.indexOf(that) === -1) {
                that.ownerElement.detachedChildren.push(that);
            }
            that._handleListeners('unlisten');

            if (that.onDetached) {
                that.onDetached();
            }

            if (Smart(that._selector) && Smart(that._selector).detached) {
                Smart(that._selector).detached();
            }

            if (data && data[that._selector]) {
				delete data[that._selector];
			}
        }

        /** Called when a property value is changed. */
        propertyChangedHandler(propertyName, oldValue, newValue) {
            const that = this;

            if (oldValue === newValue) {
                return;
            }

            if (propertyName === 'theme') {
                if (oldValue !== '') {
                    that.classList.remove('smart-' + oldValue);
                }

                if (newValue !== '') {
                    that.classList.add('smart-' + newValue);
                }
            }

            if (propertyName === 'visibility') {
                if (oldValue === 'collapsed') {
                    that.classList.remove('smart-hidden');
                }
                else if (oldValue === 'hidden') {
                    that.classList.remove('smart-visibility-hidden');
                }

                if (newValue === 'collapsed') {
                    that.classList.add('smart-hidden');
                }
                else if (newValue === 'hidden') {
                    that.classList.add('smart-visibility-hidden');
                }
            }
            else if (propertyName === 'disabled') {
                that._ariaPropertyChangedHandler(propertyName, newValue);
            }
            else if (propertyName === 'readonly') {
                that._ariaPropertyChangedHandler(propertyName, newValue);
            }

            if (that.propertyChanged) {
                that.propertyChanged(propertyName, oldValue, newValue);
            }
            /* Property changed logic goes here. */
        }

        _ariaPropertyChangedHandler(propertyName, newValue) {
            const that = this;

            if (propertyName === 'readonly' &&
                ['checkbox', 'combobox', 'grid', 'gridcell', 'listbox', 'radiogroup', 'slider', 'spinbutton', 'textbox'].indexOf(that.getAttribute('role')) === -1) {
                return;
            }

            if (newValue) {
                that.setAttribute('aria-' + propertyName, true);
            }
            else {
                that.removeAttribute('aria-' + propertyName);
            }
        }

        _handleListeners(action) {
            const that = this;
            const tagName = that.tagName.toLowerCase();
            const listeners = that.getStaticMember('listeners');

            const processListeners = (listeners) => {
                for (let listener in listeners) {
                    const path = listener.split('.');
                    let eventType = path[0];
                    let element = that.$;

                    if (path[1]) {
                        eventType = path[1];
                        element = that['$' + path[0]];

                        if (path[0] === 'document') {
                            let id = that.smartId;
                            if (id === '') {
                                id = Utilities.Core.toCamelCase(tagName);
                            }
                            eventType = eventType + '.' + id;
                        }
                        else if (that.smartId) {
                            eventType = eventType + '.' + that.smartId + '_' + that.parents.length;
                        }
                    }
                    else if (that.smartId) {
                        eventType = eventType + '.' + that.smartId;
                    }

                    const handlerName = listeners[listener];
                    const handler = function (event) {
                        const context = that.context;
                        that.context = that;
                        if (that[handlerName]) {
                            that[handlerName].apply(that, [event]);
                        }
                        that.context = context;
                    }

                    if (!element) {
                        continue;
                    }

                    element[action](eventType, handler);
                }
            }

            processListeners(listeners);
            processListeners(that.templateListeners);
            if (Smart(that._selector) && Smart(that._selector).properties) {
                processListeners(Smart(that._selector).listeners);
            }
        }

        /** Parses the element's template. */
        parseTemplate() {
            const that = this;
            const template = that.template();
            const fragment = document.createDocumentFragment();

            if (templates[that.nodeName] && !isEdge) {
                return templates[that.nodeName].cloneNode(true);
            }

            if (template === '') {
                return null;
            }

            /* Create a wrapper DIV tag. */
            let tmpElement = document.createElement('div');
            fragment.appendChild(tmpElement);

            /* Fill the nodes array with the wrapper's childNodes. */
            tmpElement.innerHTML = template;
            let nodes = tmpElement.childNodes;

            /* Remove the wrapper DIV tag. */
            tmpElement.parentNode.removeChild(tmpElement);

            /* Add the nodes to the fragment. */
            for (let i = 0; i < nodes.length; i++) {
                fragment.appendChild(nodes[i]);
            }

            templates[that.nodeName] = fragment;

            return !isEdge ? fragment.cloneNode(true) : fragment;
        }

        applyTemplate() {
            const that = this;

            const template = that.parseTemplate();

            if (!template) {
                return;
            }

            //const template = document.importNode(templateElement, true);

            if (!template.hasChildNodes) {
                return;
            }

            const rootElement = template.childNodes[0];
            const map = (name, element) => {
                that['$' + name] = element.$ = Utilities.Extend(element);
                that.$[name] = element;
                element.ownerElement = that;
            };

            /* Create a content element. */
            let contentElement = rootElement;

            if (rootElement.getElementsByTagName('content').length > 0) {
                let contentInsertionPoint = rootElement.getElementsByTagName('content')[0];
                contentElement = contentInsertionPoint.parentNode;
                contentElement.removeChild(contentInsertionPoint);
            }
            else {
                const preudoContentElement = template.querySelectorAll('[inner-h-t-m-l]');
                if (preudoContentElement && preudoContentElement.length > 0) {
                    contentElement = preudoContentElement[0];
                }
            }

            that.$.template = rootElement.nodeName.toLowerCase() === 'template' ? rootElement : rootElement.querySelector('template');

            /* Build nodes map. */
            let templateNodes = template.querySelectorAll('[id]');
            if (templateNodes.length === 0) {
                templateNodes = template.querySelectorAll('*');
            }

            map('root', rootElement);
            map('content', contentElement);

            that.$.html = that.innerHTML.toString().trim();

            for (let i = 0; i < templateNodes.length; i += 1) {
                let templateNode = templateNodes[i];
                if (templateNode.id === '') {
                    templateNode.id = 'child' + i;
                }

                map(templateNode.id, templateNode);
                templateNode.setAttribute('smart-id', templateNode.id);

                if (!that.shadowRoot) {
                    templateNode.removeAttribute('id');
                }
                else {
                    templateNode.shadowParent = that;
                }
            }

            if (that.hasTemplateBindings !== false) {
                that.bindings = that.getBindings(template);
            }
            else {
                that.bindings = [];
            }
            that.$root.addClass('smart-container');

            /* Move element's initial nodes to the content element. */
            while (that.childNodes.length) {
                contentElement.appendChild(that.firstChild);
            }

            /* Append the template. */
            that.appendTemplate(template);

            if (that.$.template) {
                const templateContainer = document.createElement('div');

                templateContainer.classList.add('smart-template-container');
                that.$.templateContainer = templateContainer;
                that.$.template.parentNode.insertBefore(templateContainer, that.$.template);
                that.refreshTemplate();
            }
        }

        refreshTemplate() {
            const that = this;

            if (!that.$.templateContainer) {
                return;
            }

            that.templateDetached(that.$.templateContainer);

            const templateContent = that.$.template.content.cloneNode(true);
            that.templateBindings = that.getBindings(templateContent);
            that.templateProperties = [];

            let fragment = document.createDocumentFragment();

            const applyBindings = function (boundChildren, ownerElement, item) {
                for (let childIndex in boundChildren) {
                    const child = boundChildren[childIndex];
                    const node = child.node.cloneNode();

                    ownerElement.appendChild(node);

                    let array = [];
                    let hasArray = false;

                    if (child.data) {
                        for (let templatePropertyName in child.data) {
                            const data = child.data[templatePropertyName];
                            const hostPropertyName = data.name;

                            that.templateProperties[hostPropertyName] = true;
                            node.removeAttribute(Utilities.Core.toDash(templatePropertyName));

                            if (templatePropertyName === '*items') {
                                array = that[hostPropertyName];
                                hasArray = true;
                            }
                            else if (hostPropertyName.indexOf('item.') >= 0 && item !== undefined) {
                                data.value = item[hostPropertyName.substring('item.'.length)];
                                node[templatePropertyName] = data.value;
                            }
                            else if (hostPropertyName.indexOf('item') >= 0 && item !== undefined) {
                                data.value = item;
                                node[templatePropertyName] = data.value;
                            }
                            else if (templatePropertyName === '*if') {
                                if (hostPropertyName.indexOf('(') >= 0) {

                                    let args = hostPropertyName.substring(hostPropertyName.indexOf('('));
                                    let result;

                                    const methodName = hostPropertyName.substring(0, hostPropertyName.indexOf('('));

                                    args = args.substring(1, args.length - 1);
                                    args = args.replace(/ /ig, '');
                                    args = args.split(',');
                                    if (args.length > 0 && args[0] !== '') {
                                        let values = [];
                                        for (let i = 0; i < args.length; i++) {
                                            values.push(that[args[i]]);
                                        }

                                        result = that[methodName].apply(that, values);
                                    }
                                    else {
                                        result = that[methodName]();
                                    }

                                    if (false === result) {
                                        ownerElement.removeChild(node);
                                    }
                                }
                                else if (!that[hostPropertyName]) {
                                    ownerElement.removeChild(node);
                                }
                            }
                            else {
                                that.updateBoundNode(node, child, that, hostPropertyName);
                            }
                        }
                    }

                    if (array.length > 0 || hasArray) {
                        for (let i = 0; i < array.length; i++) {
                            if (child.children) {
                                applyBindings(child.children, node, array[i]);
                            }
                        }

                        if (typeof array === 'number') {
                            for (let i = 0; i < array; i++) {
                                if (child.children) {
                                    applyBindings(child.children, node, i);
                                }
                            }
                        }
                    }
                    else {
                        if (child.children) {
                            applyBindings(child.children, node, item);
                        }
                    }
                }
            }

            applyBindings(that.templateBindings.children, fragment);

            that.$.templateContainer.innerHTML = '';
            that.$.templateContainer.appendChild(fragment);

            that.templateAttached(that.$.templateContainer);
        }

        templateAttached() {

        }

        templateDetached() {

        }

        appendTemplate(template) {
            const that = this;

            that.appendChild(template);
        }

        /** Defines the custom element's default modules. The function is called once when the element's script file is referred. */
        defineElementModules() {
            const that = this;

            const proto = that.constructor.prototype;

            if (proto.elementName === 'BaseElement') {
                proto.modules = that.constructor.modules;

                const modules = proto.modules;

                for (let i = 0; i < modules.length; i += 1) {
                    that.addModule(modules[i]);
                }
            }
            else {
                const modules = proto.modules;

                for (let i = 0; i < modules.length; i += 1) {
                    const module = modules[i];
                    const proto = module.prototype;

                    that.defineElementMethods(proto.methodNames, proto);
                    that.defineElementProperties(module.properties);
                }
            }
        }

        watch(properties, propertyChangedCallback) {
            const that = this;

            if (properties === null || propertyChangedCallback === null) {
                that._watch = null;
                return;
            }

            that._watch = {
                properties: properties,
                propertyChangedCallback: propertyChangedCallback
            }
        }

        unwatch() {
            const that = this;

            that._watch = null;
        }

        set(propertyName, value, notify) {
            const that = this;

            const context = that.context;

            if (notify === true) {
                that.context = document;
            }
            else {
                that.context = that;
            }

            that[propertyName] = value;

            that.context = context;
        }

        get(propertyName) {
            const that = this;

            return that[propertyName];
        }

        _setModuleState(stateName, args) {
            const that = this;
            const statusName = 'is' + stateName.substring(0, 1).toUpperCase() + stateName.substring(1);
            const callbackName = 'on' + stateName.substring(0, 1).toUpperCase() + stateName.substring(1);

            for (let i = 0; i < that.modulesList.length; i++) {
                const module = that.modulesList[i];

                module[statusName] = true;

                if (module[stateName]) {
                    module[stateName](args);
                }

                if (module[callbackName]) {
                    module[callbackName](args);
                }
            }
        }

        /**
         * Adds a module to the the element. Module's methods and properties are mixed into the element's prototype.
         * @param {Object}.
         */
        addModule(module, subclasses) {
            const that = this;

            if (!module) {
                return;
            }

            const modules = that.modules.slice(0);
            const proto = module.prototype;
            const baseProto = Object.getPrototypeOf(module);

            if (baseProto.name && baseProto.name !== module.name) {
                that.addModule(baseProto);
            }

            if (!module.moduleName && module.name) {
                module.moduleName = module.name;
            }

            if (modules.findIndex(currentModule => module.moduleName === currentModule.moduleName) === -1) {
                modules.push(module);
            }

            that.defineModule(module);
            that.defineElementMethods(proto.methodNames, proto);
            that.defineElementProperties(module.properties);

            const elementProto = that.constructor.prototype;
            elementProto.modules = modules;

            if (subclasses) {
                for (let tagName in Smart.Elements.tagNames) {
                    const element = Smart.Elements.tagNames[tagName];

                    let baseProto = Object.getPrototypeOf(element);
                    let protoChain = [];

                    while (baseProto !== HTMLElement) {
                        protoChain.push(baseProto.prototype);
                        baseProto = Object.getPrototypeOf(baseProto);
                    }

                    if (protoChain.indexOf(that) >= 0 && element !== that) {
                        element.prototype.addModule(module);
                    }
                }
            }
        }

        /** Defines a module and creates its properties. */
        defineModule(module) {
            if (module.isDefined) {
                return;
            }

            module.prototype._initModule = function (element) {
                const that = this;

                that.ownerElement = element;
            }

            const properties = module.properties || {
            };
            const propertyNames = Object.keys(properties);
            const methodNames = Object.getOwnPropertyNames(module.prototype);

            module.prototype.methodNames = methodNames;

            for (let j = 0; j < propertyNames.length; j += 1) {
                const propertyName = propertyNames[j];
                const property = properties[propertyName];

                Object.defineProperty(module.prototype, propertyName, {
                    configurable: false,
                    enumerable: true,
                    get() {
                        const that = this;

                        if (!that.ownerElement) {
                            return property.value;
                        }

                        return that.ownerElement[propertyName];
                    },
                    set(value) {
                        const that = this;

                        that.ownerElement[propertyName] = value;
                    }
                });
            }

            module.isDefined = true;
        }

        getStaticMember(memberName, memberType) {
            const that = this;
            const element = window[namespace][that.elementName];

            const staticMember = element[memberName];

            if (!memberType) {
                memberType = '';
            }

            let inheritedStaticMember = (memberType === 'array') ? [] : (memberType === 'string' ? '' : {
            });
            let baseProto = Object.getPrototypeOf(element);
            let protoChain = [];

            while (baseProto[memberName]) {
                protoChain.push(baseProto[memberName]);
                baseProto = Object.getPrototypeOf(baseProto);
            }

            for (let i = protoChain.length - 1; i >= 0; i--) {
                if (memberType === 'array') {
                    for (let j = 0; j < protoChain[i].length; j++) {
                        if (inheritedStaticMember.indexOf(protoChain[i][j]) === -1) {
                            inheritedStaticMember.push(protoChain[i][j]);
                        }
                    }
                }
                else if (memberType === 'string') {
                    if (inheritedStaticMember.indexOf(protoChain[i]) === -1) {
                        inheritedStaticMember += protoChain[i];
                    }
                }
                else {
                    inheritedStaticMember = Utilities.Core.assign(inheritedStaticMember, protoChain[i]);
                }
            }

            if (memberType === 'array') {
                for (let j = 0; j < staticMember.length; j++) {
                    if (inheritedStaticMember.indexOf(staticMember[j]) === -1) {
                        inheritedStaticMember.push(staticMember[j]);
                    }
                }

                return inheritedStaticMember;
            }

            if (memberType === 'string') {
                if (inheritedStaticMember.indexOf(staticMember) === -1) {
                    inheritedStaticMember += staticMember;
                }

                return inheritedStaticMember;
            }

            return Utilities.Core.assign(inheritedStaticMember, staticMember);
        }

        defineElementHierarchicalProperties(properties, context) {
            const that = this;
            const propertyObjectsTree = [];

            const buildPropertyObjects = function (properties) {
                const propertyNames = Object.keys(properties);

                for (let i = 0; i < propertyNames.length; i++) {
                    const parentPropertyName = propertyNames[i];

                    if (parentPropertyName === 'messages') {
                        continue;
                    }

                    const parentProperty = properties[parentPropertyName];
                    const propertyKeys = Object.keys(parentProperty);
                    const isPropertyObject = propertyKeys.indexOf('value') >= 0 && propertyKeys.indexOf('type') >= 0 && typeof parentProperty.value === 'object';

                    if (parentProperty.type === 'propertyObject' || isPropertyObject) {
                        const buildPropertyObject = function (parentProperty, parentPropertyName) {
                            if (!parentProperty.value) {
                                return;
                            }

                            const propertyNames = Object.keys(parentProperty.value);


                            for (let j = 0; j < propertyNames.length; j++) {
                                const propertyName = propertyNames[j];
                                const property = parentProperty.value[propertyName];
                                const subPropertyName = parentPropertyName + '_' + propertyName;

                                if (typeof property !== 'object' || property === null) {
                                    break;
                                }

                                const propertyKeys = Object.keys(property);
                                const isPropertyObject = propertyKeys.indexOf('value') >= 0 && propertyKeys.indexOf('type') >= 0;

                                if (!isPropertyObject) {
                                    break;
                                }

                                if (parentProperty.type !== 'array') {
                                    parentProperty.isHierarchicalProperty = true;
                                }

                                property.parentPropertyName = parentPropertyName;

                                if (context) {
                                    const elementProperty = context._properties[subPropertyName];

                                    if (parentProperty.value.hasOwnProperty(propertyName)) {
                                        if (!elementProperty.isDefined) {
                                            delete parentProperty.value[propertyName];
                                        }
                                        else {
                                            continue;
                                        }
                                    }

                                    elementProperty.isDefined = true;

                                    Object.defineProperty(parentProperty.value, propertyName, {
                                        configurable: false,
                                        enumerable: true,
                                        get() {
                                            return context._properties[subPropertyName].value;
                                        },
                                        set(value) {
                                            context.updateProperty(context, context._properties[subPropertyName], value);
                                        }
                                    });
                                }

                                if (!propertyObjectsTree[subPropertyName]) {
                                    propertyObjectsTree[subPropertyName] = property;
                                    propertyObjectsTree.length++;
                                }

                                if (property.type === 'propertyObject' || typeof property.value === 'object' && property.type !== 'array') {
                                    if (context) {
                                        buildPropertyObject(context._properties[subPropertyName], subPropertyName);
                                    }
                                    else {
                                        buildPropertyObject(property, subPropertyName);
                                    }
                                }
                            }

                        }
                        buildPropertyObject(parentProperty, parentPropertyName);
                    }
                }
            }

            buildPropertyObjects(properties);

            if (propertyObjectsTree.length > 0 && !context) {
                that.defineElementProperties(propertyObjectsTree);
            }
        }

        /** Defines the element properties, methods and modules. */
        defineElement() {
            const that = this;
            const proto = that.constructor.prototype;
            const properties = that.getStaticMember('properties');
            const methods = Object.getOwnPropertyNames(proto);

            proto.extendedProperties = {
            };
            proto.boundProperties = {
            };
            proto.templateListeners = {
            };

            that.defineElementModules();
            that.defineElementMethods(methods, proto);
            that.defineElementProperties(properties);
            that.defineElementHierarchicalProperties(that.extendedProperties);

            /* Initialization of element's instance properties. */
            proto._initElement = function () {
                const that = this;

                const properties = proto.extendedProperties;
                const propertyNames = Object.keys(properties);
                const modules = that.modules;

                that.$ = Utilities.Extend(that);
                that.$document = $document;
                that.smartId = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();

                if (!that.isCreated) {
                    that.modulesList = [];
                    that._properties = [];
                    if (that._beforeCreatedProperties) {
                        that._properties = that._beforeCreatedProperties;
                        delete that._beforeCreatedProperties;
                    }

                    that.detachedChildren = [];
                    that.propertyByAttributeName = [];
                }

                for (let i = 0; i < modules.length; i += 1) {
                    const module = modules[i];
                    let moduleInstance = new module();
                    moduleInstance._initModule(that);
                    that.modulesList.push(moduleInstance);
                }

                for (let i = 0; i < propertyNames.length; i += 1) {
                    const propertyName = propertyNames[i];
                    const property = properties[propertyName];
                    let defaultValue = property.value;

                    if (that._properties[propertyName]) {
                        if (that._properties[propertyName].notify !== undefined) {
                            continue;
                        }
                        else {
                            delete that._properties[propertyName];
                        }
                    }

                    if (isOldChrome && propertyName === 'innerHTML') {
                        delete that[propertyName];
                    }

                    if (window.navigator.userAgent.indexOf('PhantomJS') === -1 && that.hasOwnProperty(propertyName)) {
                        defaultValue = that[propertyName];

                        delete that[propertyName];
                    }

                    if (property.type === 'array' && defaultValue !== undefined && defaultValue !== null) {
                        defaultValue = defaultValue.slice(0);
                    }

                    if (property.type === 'object' && defaultValue !== undefined && defaultValue !== null) {
                        if (Array.isArray(defaultValue)) {
                            defaultValue = defaultValue.slice(0);
                        }
                        else {
                            defaultValue = Object.assign({
                            }, defaultValue);
                        }
                    }

                    that._properties[propertyName] = {
                        name: propertyName,
                        notify: property.notify,
                        allowedValues: property.allowedValues,
                        type: property.type,
                        nullable: property.nullable,
                        reflectToAttribute: property.reflectToAttribute,
                        defaultReflectToAttribute: property.defaultReflectToAttribute,
                        defaultReflectToAttributeConditions: property.defaultReflectToAttributeConditions,
                        value: defaultValue,
                        readOnly: property.readOnly,
                        defaultValue: defaultValue,
                        attributeName: property.attributeName,
                        observer: property.observer,
                        inherit: property.inherit,
                        extend: property.extend,
                        validator: property.validator
                    }

                    that.propertyByAttributeName[property.attributeName] = that._properties[propertyName];

                    if (!property.hasOwnProperty('type')) {
                        const localizedError = that.localize('propertyUnknownType', {
                            name: propertyName
                        });
                        that.log(localizedError);
                    }

                    if (property.type === 'any' || property.type === 'propertyObject') {
                        continue;
                    }

                    const defaultValueType = Utilities.Types.getType(defaultValue);
                    if (defaultValue !== undefined && defaultValue !== null && property.type !== defaultValueType && !property.validator) {
                        if (property.type === 'object' && defaultValueType === 'array') {
                            continue;
                        }

                        if (defaultValueType === 'number') {
                            const types = ['integer', 'int', 'float'];
                            const propertyIndex = types.findIndex(type => type === property.type);

                            if (propertyIndex >= 0) {
                                continue;
                            }
                        }
                        const localizedError = that.localize('propertyInvalidValueType', {
                            name: propertyName, actualType: defaultValueType, type: property.type
                        });
                        that.log(localizedError);
                    }
                }

                that.defineElementHierarchicalProperties(that._properties, that);

                that.isCreated = true;
            };

            /* Calls the registered method. It is useful for one-time configuration. */
            proto.registered();
        }

        /**
         * Defines Element's methods.
         * {Array} - methods.
         * {Object} - method owner's prototype.
         */
        defineElementMethods(methods, proto) {
            const that = this;
            const elementProto = that.constructor.prototype;

            const invokeMethod = function (method, methodName) {
                const args = Array.prototype.slice.call(arguments, 2);

                const elementMethod = function () {
                    /* Raise an exception when the method is invoked while the element is not in Ready state. */
                    if (!this.isReady && methodName !== 'localize' && methodName !== 'localize' && methodName !== 'cloneNode' && methodName !== 'importStyle' && methodName !== 'log' && methodName !== 'parseAttributes') {
                        const localizedError = this.localize('elementNotInDOM');
                        this.log(localizedError);
                    }

                    let methodContext = this;
                    for (let i = 0; i < this.modulesList.length; i++) {
                        let module = this.modulesList[i];
                        if (methodName in module) {
                            methodContext = module;
                            break;
                        }
                    }

                    const context = this.context;
                    const methodArguments = args.concat(Array.prototype.slice.call(arguments));
                    let methodReturnType = null;

                    const areTypesEqual = function (typeA, typeB) {
                        if (typeA === typeB) {
                            return true;
                        }

                        if (typeA === 'number' && (typeB === 'int' || typeB === 'integer' || typeB === 'float')) {
                            return true;
                        }

                        if ((typeA === 'bool' && typeB === 'boolean') || (typeA === 'boolean' && typeB === 'bool')) {
                            return true;
                        }

                        if (typeA === 'object' && typeB === 'any') {
                            return true;
                        }
                    }

                    if (this['methods']) {
                        const methodMetaInformation = this['methods'][methodName];

                        if (methodMetaInformation) {
                            const methodSplitParts = methodMetaInformation.split(':');

                            methodReturnType = methodSplitParts[methodSplitParts.length - 1].trim();

                            const metaArguments = methodMetaInformation.substring(1 + methodMetaInformation.indexOf('('), methodMetaInformation.lastIndexOf(')'));
                            const metaArgumentsList = [];
                            const metaArgumentsSplit = metaArguments.split(',');

                            let argument = '';
                            for (let i = 0; i < metaArgumentsSplit.length; i++) {
                                const metaArgument = metaArgumentsSplit[i];

                                argument += metaArgument;

                                if (metaArgument.indexOf(':') >= 0) {
                                    metaArgumentsList.push(argument);
                                    argument = '';
                                }
                                else {
                                    argument += ',';
                                }
                            }

                            let metaArgumentsListRequiredCount = metaArgumentsList.length;

                            for (let m = 0; m < metaArgumentsList.length; m++) {
                                const metaArgumentString = metaArgumentsList[m].trim();
                                const metaArgumentSplitParts = metaArgumentString.split(':');
                                const metaArgumentName = metaArgumentSplitParts[0].split('=')[0].trim();
                                const metaArgumentOptional = metaArgumentName.indexOf('?') >= 0;

                                const metaArgumentNullableType = metaArgumentSplitParts[1].indexOf('?') >= 0;
                                const metaArgumentType = metaArgumentSplitParts[1].replace(/\?/ig, '').trim();
                                const metaArgumentTypes = metaArgumentType.split('|');

                                let metaArgumentDefaultValue = metaArgumentSplitParts[0].split('=')[1];

                                const callerArgumentType = Utilities.Types.getType(methodArguments[m]);

                                if (undefined === methodArguments[m] && metaArgumentDefaultValue) {
                                    metaArgumentDefaultValue = metaArgumentDefaultValue.trim();

                                    switch (metaArgumentType[0]) {
                                        case 'date': {
                                            let dateObjectArguments = metaArgumentDefaultValue.substring(metaArgumentDefaultValue.indexOf('(') + 1, metaArgumentDefaultValue.lastIndexOf(')'));
                                            dateObjectArguments = dateObjectArguments.length > 0 ? dateObjectArguments.split(',').map(arg => parseInt(arg)) : [];

                                            metaArgumentDefaultValue = dateObjectArguments.length === 0 ? new Date() : new Date(dateObjectArguments[0], dateObjectArguments[1], dateObjectArguments[2]);
                                            break;
                                        }
                                        case 'bool':
                                        case 'boolean':
                                            metaArgumentDefaultValue = metaArgumentDefaultValue === 'true' || metaArgumentDefaultValue === '1' ? true : false;
                                            break;
                                        case 'int':
                                        case 'integer':
                                            metaArgumentDefaultValue = parseInt(metaArgumentDefaultValue);
                                            break;
                                        case 'float':
                                        case 'number':
                                            metaArgumentDefaultValue = parseFloat(metaArgumentDefaultValue);
                                            break;
                                        case 'any':
                                        case 'object':
                                            metaArgumentDefaultValue = metaArgumentDefaultValue.indexOf('{') >= 0 ? JSON.parse(metaArgumentDefaultValue) : metaArgumentDefaultValue;
                                            break;
                                    }

                                    methodArguments.push(metaArgumentDefaultValue);
                                }
                                else if (metaArgumentOptional) {
                                    metaArgumentsListRequiredCount--;
                                }


                                if (metaArgumentType !== callerArgumentType && callerArgumentType) {
                                    let isInvalidValueType = true;

                                    for (let i = 0; i < metaArgumentTypes.length; i++) {
                                        if (areTypesEqual(callerArgumentType, metaArgumentTypes[i])) {
                                            isInvalidValueType = false;
                                            break;
                                        }
                                    }


                                    if (isInvalidValueType && !(methodArguments[m] === null && metaArgumentNullableType)) {
                                        const localizedError = this.localize('methodInvalidValueType', {
                                            name: methodName, actualType: callerArgumentType, type: metaArgumentType, argumentIndex: m
                                        });
                                        this.log(localizedError);
                                    }
                                }

                                if (methodArguments.length < metaArgumentsListRequiredCount) {
                                    const localizedError = this.localize('methodInvalidArgumentsCount', {
                                        name: methodName, actualArgumentsCount: methodArguments.length, argumentsCount: metaArgumentsListRequiredCount
                                    });
                                    this.log(localizedError);
                                }
                            }
                        }
                    }

                    this.context = this;
                    const result = method.apply(methodContext, methodArguments);

                    if (methodReturnType) {
                        const actualReturnType = Utilities.Types.getType(result) === undefined ? 'void' : Utilities.Types.getType(result);

                        if (!areTypesEqual(actualReturnType, methodReturnType)) {
                            const localizedError = this.localize('methodInvalidReturnType', {
                                name: methodName, actualType: actualReturnType, type: methodReturnType
                            });
                            this.log(localizedError);
                        }
                    }
                    this.context = context;

                    return result;
                };

                return elementMethod;
            }

            /* Exclude these methods. */
            const excludeMethods = ['constructor', 'ready', 'created', 'render', 'attached', 'detached', 'appendChild', 'insertBefore', 'removeChild', 'connect', 'disconnectedCallback', 'connectedCallback', 'attributeChangedCallback', 'propertyChangedHandler', 'enableShadowDOM', 'isInShadowDOM', 'addPropertyBindings'];

            /* Wrap Custom Element's methods. */
            for (let index in methods) {
                let methodName = methods[index];

                if (methodName.startsWith('_') || excludeMethods.find(
                    excludeMethodName => excludeMethodName === methodName) !== undefined) {
                    continue;
                }

                if (elementProto.extendedProperties[methodName])
                    continue;

                if (!Utilities.Types.isFunction(proto[methodName]))
                    continue;

                elementProto[methodName] = invokeMethod(proto[methodName], methodName);
            }
        }

        /** Defines the custom element's properties. The function is called once when an element's script file is referred. */
        defineElementProperties(properties) {
            if (!properties) {
                return;
            }

            const that = this;
            const proto = that.constructor.prototype;
            const propertyNames = Object.keys(properties);
            const defaultProperties = that.getStaticMember('properties');

            Object.assign(proto.extendedProperties, properties);

            /* Called when a property is set. Updates the property and synchronizes with the attribute. */
            that.updateProperty = function (context, property, value) {
                const that = context;

                if (!property || property.readOnly) {
                    return;
                }

                /* Raises an exception when the new value is not in the allowedValues list. */
                if (property.allowedValues) {
                    let isValidValue = false;

                    for (let i = 0; i < property.allowedValues.length; i++) {
                        if (property.allowedValues[i] === value) {
                            isValidValue = true;
                            break;
                        }
                    }

                    if (!isValidValue) {
                        const allowedValuesString = JSON.stringify(property.allowedValues).replace(/\[|\]/gi, '').replace(',', ', ').replace(/"/gi, '\'');
                        const actualValueString = '\'' + value + '\'';
                        const localizedError = that.localize('propertyInvalidValue', {
                            name: property.name, actualValue: actualValueString, value: allowedValuesString
                        });

                        that.log(localizedError);
                        return;
                    }
                }

                const propertyName = property.name;
                const oldValue = that._properties[propertyName].value;

                /* Calls the property's validator, if defined. */
                if (property.validator) {
                    if (that[property.validator]) {
                        const context = that.context;

                        that.context = that;

                        const validatedResult = that[property.validator](oldValue, value);

                        if (validatedResult !== undefined) {
                            value = validatedResult;
                        }

                        that.context = context;
                    }
                }

                if (oldValue === value) {
                    return;
                }

                if (that.propertyChanging) {
                    const canChangeProperty = that.propertyChanging(propertyName, oldValue, value);

                    if (canChangeProperty === false || canChangeProperty === null) {
                        return;
                    }
                }

                if (!property.hasOwnProperty('type')) {
                    const localizedError = that.localize('propertyUnknownType', {
                        name: propertyName
                    });
                    that.log(localizedError);
                }

                if ((property.type === 'array') && JSON.stringify(oldValue) === JSON.stringify(value)) {
                    return;
                }

                if ((value !== undefined && value !== null && property.type !== 'any' && property.type !== 'propertyObject' && property.type !== Utilities.Types.getType(value) && !property.validator) ||
                    (value === null && !property.nullable)) {
                    let throwError = true;

                    if (property.type === 'object' && Utilities.Types.getType(value) === 'array') {
                        throwError = false;
                    }

                    if (Utilities.Types.getType(value) === 'number') {
                        const types = ['integer', 'int', 'float'];
                        const propertyIndex = types.findIndex(type => type === property.type);

                        if (propertyIndex >= 0) {
                            throwError = false;
                        }
                    }

                    if (throwError) {
                        const localizedError = that.localize('propertyInvalidValueType', { name: propertyName, actualType: Utilities.Types.getType(value), type: property.type });
                        that.error(localizedError);
                        return;
                    }
                }

                property.isUpdating = true;

                if (property.isHierarchicalProperty) {
                    const setHierarchicalProperty = function (propertyValue, path) {
                        const subPropertyNames = Object.keys(propertyValue);

                        for (let i = 0; i < subPropertyNames.length; i++) {
                            const propertyName = subPropertyNames[i];
                            const subPropertyValue = propertyValue[propertyName]

                            if (typeof subPropertyValue === 'object' && !Utilities.Types.isArray(subPropertyValue) && subPropertyValue && subPropertyValue.constructor !== Date) {
                                setHierarchicalProperty(subPropertyValue, path + '_' + propertyName);
                            }
                            else {
                                that[path + '_' + propertyName] = subPropertyValue;
                            }
                        }
                    }

                    setHierarchicalProperty(value, propertyName);
                }
                else {
                    that._properties[propertyName].value = value;
                }

                /* Updates the element's attribute value. */
                if (!property.isUpdatingFromAttribute && property.reflectToAttribute) {
                    that.$.setAttributeValue(property.attributeName, value, property.type);
                }

                /* Calls the element's propertyChangedHandler function when the element is in Ready state and the property is observed. */
                const isReady = that.isReady && (!that.ownerElement || (that.ownerElement && that.ownerElement.isReady));

                if (isReady) {
                    if (propertyName === 'wait') {
                        if (!value && oldValue && !that.isCompleted) {
                            that.classList.remove('smart-visibility-hidden');
                            if (that.ownerElement) {
                                that.ownerElement.updateBoundMappedNodes();
                            }
                            that.updateBoundMappedNodes();
                            that.complete();
                        }
                    }

                    if (propertyName === 'renderMode') {
                        return;
                    }

                    if (that.context !== that && !that.wait) {
                        /* Setting context to that prevents calling propertyChangedHandler, if the custom element's developer
                         * sets another element property within the propertyChangedHandler.
                        */
                        const context = that.context;

                        that.context = that;
                        that.propertyChangedHandler(propertyName, oldValue, value);
                        that.context = context;

                        /* Calls the property's observer, if defined. */
                        if (property.observer) {
                            if (that[property.observer]) {
                                that.context = that;
                                that[property.observer](oldValue, value);
                                that.context = document;
                            }
                        }

                        if (that._watch && that._watch.properties.indexOf(propertyName) >= 0) {
                            that._watch.propertyChangedCallback(propertyName, oldValue, value);
                        }
                    }

                    /* Dispatch an event when property's notify member is set. */
                    const notify = property.notify || that.boundProperties[propertyName];
                    if (notify) {
                        that.$.fireEvent(property.attributeName + '-changed', {
                            context: that.context, oldValue: oldValue, value: that[propertyName]
                        });
                        if (that.boundProperties[propertyName]) {
                            that.updateBoundNodes(propertyName);
                        }
                    }

                    if (notify && that.templateProperties && that.templateProperties[propertyName]) {
                        that.refreshTemplate();
                    }

                    if (that.dataContextProperties) {
                        if (propertyName === 'dataContext') {
                            that.applyDataContext();
                        }
                        else if (that.dataContextProperties[propertyName]) {
                            that.updateDataContextProperty(propertyName);
                        }
                    }
                }
                property.isUpdating = false;
            }

            /* Defines element's properties. */
            for (let i = 0; i < propertyNames.length; i += 1) {
                const propertyName = propertyNames[i];
                const property = properties[propertyName];
                const attributeName = Utilities.Core.toDash(propertyName);
                const type = property.type || 'any';
                const nullable = type.indexOf('?') >= 0 || type === 'any';

                if (nullable && type !== 'any') {
                    property.type = type.substring(0, type.length - 1)
                }

                property.nullable = nullable;
                property.attributeName = attributeName.toLowerCase();
                property.name = propertyName;
                property.reflectToAttribute = property.reflectToAttribute !== undefined ? property.reflectToAttribute : true;

                if (property.inherit && defaultProperties[propertyName]) {
                    property.value = defaultProperties[propertyName].value;
                }

                if (property.extend && defaultProperties[propertyName]) {
                    Utilities.Core.assign(property.value, defaultProperties[propertyName].value);
                }

                if (proto.hasOwnProperty(propertyName)) {
                    continue;
                }

                Object.defineProperty(proto, propertyName, {
                    configurable: false,
                    enumerable: true,
                    get() {
                        const that = this;

                        if (!that._properties[propertyName]) {
                            return undefined;
                        }

                        return that._properties[propertyName].value;
                    },
                    set(value) {
                        const that = this;

                        that.updateProperty(that, that._properties[propertyName], value);
                    }
                });
            }
        }
    }

    let customElements = [];
    let registeredCallbacks = [];
    let registeredLoadedCallbacks = [];
    let isOldChrome = false;

    const chromeAgent = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    if (chromeAgent) {
        const chromeVersion = parseInt(chromeAgent[2], 10);
        if (chromeVersion <= 50) {
            isOldChrome = true;
        }
    }



    class BaseCustomElement extends BaseElement {
        static get observedAttributes() {
            let that = this;
            let observedAttributes = ['external-style'];

            for (let propertyName in that.prototype.extendedProperties) {
                const propertyConfig = that.prototype.extendedProperties[propertyName];

                observedAttributes.push(propertyConfig.attributeName);
            }

            return observedAttributes;
        }

        static get styleUrls() {
            return [

            ]
        }

        static get styles() {
            return '';
        }

        get styleUrl() {
            //const that = this;

            return this._styleUrl;
        }

        set styleUrl(path) {
            this._styleUrl = path;
        }

        get isInShadowDOM() {
            const that = this;
            const rootNode = that.getRootNode();

            return rootNode !== document && rootNode !== that;
        }

        getShadowRootOrBody() {
            const that = this;

            if (that.isInShadowDOM) {
                return that.getRootNode().host.shadowRoot;
            }

            return document.body;
        }

        get enableShadowDOM() {
            //const that = this;
            const enableShadowDOM = window[namespace].EnableShadowDOM;

            return enableShadowDOM;
        }


        importStyle(path, loadHandler) {
            const that = this;

            that._importStyle(path, loadHandler);
        }

        _importStyle(path, loadHandler) {
            const that = this;

            if (!that.shadowRoot || !path) {
                return;
            }

            const createLink = (path) => {
                //Check if style link already exists
                const rootChildren = that.shadowRoot.children;

                for (let i = 0; i < rootChildren.length; i++) {
                    const rootChild = rootChildren[i];

                    if (rootChild instanceof HTMLLinkElement) {
                        if (rootChild.href === path) {
                            if (loadHandler) {
                                loadHandler();
                            }
                            return null;
                        }
                    }
                }

                const link = document.createElement('link');

                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = path;
                link.onload = loadHandler;

                return link;
            }

            const lastLinkChild = (() => {
                const rootChildren = that.shadowRoot.children;
                let lastLinkChild = null;

                for (let i = 0; i < rootChildren.length; i++) {
                    const rootChild = rootChildren[i];

                    if (rootChild instanceof HTMLLinkElement) {
                        lastLinkChild = rootChild;
                    }
                }

                return lastLinkChild;
            })();

            const insertAfter = (newNode, referenceNode) => {
                referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
            }

            if (Array.isArray(path)) {
                const fragment = document.createDocumentFragment();

                for (let i = 0; i < path.length; i++) {
                    const link = createLink(path[i]);

                    if (link) {
                        fragment.appendChild(link);
                    }
                }


                if (lastLinkChild) {
                    insertAfter(fragment, lastLinkChild);
                }
                else {
                    that.shadowRoot.insertBefore(fragment, that.shadowRoot.firstChild);
                }
            }
            else {
                const link = createLink(path);

                if (!link) {
                    return;
                }

                if (lastLinkChild) {
                    insertAfter(link, lastLinkChild);
                }
                else {
                    that.shadowRoot.insertBefore(link, that.shadowRoot.firstChild);
                }
            }
        }

        attributeChanged(name, oldValue, newValue) {
            if (name === 'style-url') {
                this.styleUrl = newValue;
            }
        }

        attributeChangedCallback(name, oldValue, newValue) {
            const that = this;

            if (!that.isReady) {
                return;
            }

            super.attributeChangedCallback(name, oldValue, newValue);
        }
        /** Called when an instance of the custom element is created. */
        constructor(selector, properties) {
            super();

            /*  initialization code goes here. */
            const that = this;

            if (selector) {
                if (properties) {
                    that._initProperties = properties;
                }

                const createElement = (selector) => {
                    if (typeof selector === 'string' ? document.querySelector(selector) : selector) {
                        const element = typeof selector === 'string' ? document.querySelector(selector) : selector;

                        if (element instanceof HTMLDivElement) {
                            const customElement = document.createElement(that.tagName);

                            for (let attribute of element.attributes) {
                                customElement.setAttribute(attribute.name, element.getAttribute(attribute.name));
                            }

                            while (element.childNodes.length) {
                                customElement.appendChild(element.firstChild);
                            }

                            if (typeof selector === 'string') {
                                customElement.id = selector.substring(1);
                            }

                            customElement._initProperties = properties;


                            if (element.parentNode) {
                                element.parentNode.replaceChild(customElement, element);
                            }

                            return customElement;
                        }
                        else {
                            if (properties) {
                                const context = element.context;

                                element._initProperties = properties;

                                if (element.isReady) {
                                    element.context = element;

                                    const oldValues = {
                                    };
                                    const values = {
                                    };

                                    for (let propertyName in properties) {
                                        oldValues[propertyName] = element[propertyName];
                                        values[propertyName] = properties[propertyName];
                                    }

                                    if (Object.getOwnPropertyNames(properties).length > 0) {
                                        element.initProperties();
                                        element.propertyChangedHandler(properties, oldValues, values);
                                    }

                                    element.context = context;
                                }
                            }
                        }

                        return element;
                    }
                }

                if (typeof selector === 'string') {
                    const elements = document.querySelectorAll(selector);
                    const customElements = [];

                    if (elements.length > 1) {
                        for (let i = 0; i < elements.length; i++) {
                            const element = createElement(elements[i]);

                            customElements.push(element);
                        }

                        return customElements;
                    }
                }
                else if (selector && selector.length > 0) {
                    const elements = selector;

                    if (elements.length > 1) {
                        for (let i = 0; i < elements.length; i++) {
                            const element = createElement(elements[i]);

                            customElements.push(element);
                        }

                        return customElements;
                    }
                }

                return createElement(selector);
            }

            that._styleUrl = '';

            if (that.isUtilityElement) {
                return;
            }

            that.created();
        }

        _getRootShadowParent() {
            const that = this;

            let parent = that.shadowParent;

            while (parent) {
                if (!parent.shadowParent) {
                    return parent;
                }

                parent = parent.shadowParent;
            }

            return parent || that.shadowParent;
        }

        _getStyleUrl(styleUrl) {
            const that = this;

            let url = Utilities.Core.getScriptLocation() + window[namespace].StyleBaseUrl + styleUrl;

            if (that.shadowParent) {
                url = url.replace('scoped/', '');
            }

            return url;
        }

        _getStyleUrls() {
            const that = this;

            //let defaultBeforeStyleUrls = [];
            //let defaultAfterStyleUrls = [];

            if (that.nodeName.startsWith(namespace)) {
                //defaultBeforeStyleUrls = [
                //    'smart.common.css'
                //];

                //defaultAfterStyleUrls = [
                //    'smart.misc.css'
                //];
            }

            const styleUrls = that.getStaticMember('styleUrls', 'array');
            const importUrls = [];

            for (let i = 0; i < styleUrls.length; i++) {
                const styleUrl = styleUrls[i];
                const url = that._getStyleUrl(styleUrl);

                importUrls.push(url);
            }

            return importUrls;
        }

        _setupShadowRoot() {
            const that = this;

            that.classList.add('smart-element-init');

            const render = (element) => {
                if (element.$.root) {
                    element.$.root.classList.add(namespace.toLowerCase() + '-element');
                    element.$.root.classList.add(that.nodeName.toLowerCase());
                }

                element.setup();
                element.classList.remove('smart-element-init');
            }

            if (document.adoptedStyleSheets) {
                if (!window[namespace].AdoptedStyleSheets) {
                    const sheet = new CSSStyleSheet();
                    // replace all styles, allowing external resources:
                    let url = Utilities.Core.getScriptLocation() + '/styles/smart.default.css';

                    sheet.replace('@import url("' + url + '")')
                        .then(() => {
                            render(that);
                            window[namespace].AdoptedStyleSheetsLoaded = true;

                            if (window[namespace].AdoptedStyleSheetsLoadedQueue) {
                                const queue = window[namespace].AdoptedStyleSheetsLoadedQueue;

                                for (let i = 0; i < queue.length; i++) {
                                    const element = queue[i];

                                    render(element);
                                }

                                delete window[namespace].AdoptedStyleSheetsLoadedQueue;
                            }
                        })
                        .catch(err => {
                            console.error('Failed to load:', err);
                        });

                    window[namespace].AdoptedStyleSheets = [sheet];
                    document.adoptedStyleSheets = [sheet];
                    that.shadowRoot.adoptedStyleSheets = window[namespace].AdoptedStyleSheets;
                }
                else if (window[namespace].AdoptedStyleSheetsLoaded) {
                    that.shadowRoot.adoptedStyleSheets = window[namespace].AdoptedStyleSheets;
                    render(that);
                }
                else {
                    that.shadowRoot.adoptedStyleSheets = window[namespace].AdoptedStyleSheets;

                    if (!window[namespace].AdoptedStyleSheetsLoadedQueue) {
                        window[namespace].AdoptedStyleSheetsLoadedQueue = [];
                    }

                    window[namespace].AdoptedStyleSheetsLoadedQueue.push(that);
                }
            }
        }

        connect() {
            const that = this;

            //const isReady = that.isReady;

            // Uncomment when scopedStyle is implemented in all elements.
            if (window[namespace].EnableShadowDOM && !that.shadowRoot && that.isInShadowDOM !== true) {
                that.attachShadow({
                    mode: 'open'
                });

                if (that.shadowRoot && that.$.root) {
                    that.shadowRoot.appendChild(that.$.root);
                    that.$.root.classList.add(that.nodeName.toLowerCase());
                }
            }

            // by default
            if (!that.shadowRoot && !that.shadowParent) {
                that.setup();
            }
            else {
                if (that.shadowRoot) {
                    that._setupShadowRoot();
                }
                else if (that.shadowParent && window[namespace].EnableShadowDOM) {
                    that.setup();
                }
                else {
                    that.setup();
                }
            }
        }
        /** Called when an instance of custom element is attached to the DOM. */
        connectedCallback() {
            const that = this;

            if (that.isLoading || that.isUtilityElement) {
                return;
            }

            that.classList.add('smart-element-init');

            const updateVisibility = function () {
                that.classList.remove('smart-element-init');
            }

            if (document.readyState === 'complete') {
                if (window[namespace].isAngular === undefined) {
                    window[namespace].isAngular = document.body.querySelector('[ng-version]') !== null;
                }

                if (window[namespace].isAngular) {
                    for (let i = 0; i < that.parents.length; i++) {
                        if (that.parents[i].nodeName.toLowerCase().startsWith(namespace.toLowerCase() + '-')) {
                            break;
                        }

                        if (that.parents[i].hasAttribute('ng-version')) {
                            window[namespace].RenderMode = 'manual';
                            break;
                        }
                    }
                }
            }

            if (document.readyState === 'complete' && window[namespace].RenderMode !== 'manual' /*&& !ElementRegistry.isRegistering */) {
                const parents = that.parents;

                if (parents.length && (parents[parents.length - 1].nodeName === 'HTML')) {
                    if (that.checkIsInDomTimer) {
                        clearInterval(that.checkIsInDomTimer);
                    }

                    updateVisibility();
                    that.connect();
                }
                else if (that.getRootNode().host) {
                    if (that.checkIsInDomTimer) {
                        clearInterval(that.checkIsInDomTimer);
                    }

                    updateVisibility();
                    that.connect();

                }
                else {
                    if (that.checkIsInDomTimer) {
                        clearInterval(that.checkIsInDomTimer);
                    }

                    if (parents.length > 0) {
                        that.checkIsInDomTimer = setInterval(() => {
                            const parents = that.parents;

                            if (parents.length === 0) {
                                clearInterval(that.checkIsInDomTimer);
                            }

                            if (parents.length > 0 && parents[parents.length - 1].nodeName === 'HTML') {
                                clearInterval(that.checkIsInDomTimer);

                                updateVisibility();
                                that.connect();
                            }
                        }, 100);
                    }
                }
            }
            else {
                that.isLoading = true;
                registeredLoadedCallbacks.push({
                    element: this, callback: function () {
                        if (this.isReady) {
                            return;
                        }

                        updateVisibility();
                        this.connect();
                    }.bind(that)
                });
            }
        }

        /** Called when an instance of custom element is detached from the DOM. V0 spec. */
        disconnectedCallback() {
            const that = this;

            if (!that.isAttached) {
                that._resetShadowParent();
                return;
            }

            that.shadowParent = null;
            that.detached();
        }

        /** Called when an instance of custom element is attached to the DOM. */
        adoptedCallback() {
            const that = this;

            that.setup();
        }

        appendTemplate(template) {
            const that = this;

            if (that.shadowRoot) {
                that.shadowRoot.appendChild(template);
            }
            else {
                that.appendChild(template);
            }
        }

        _resetShadowParent() {
            const that = this;

            if (!window[namespace].EnableShadowDOM || that.shadowParent === null) {
                return;
            }

            const parents = [];
            let current = that.parentNode;

            while (current && current.nodeType !== 9) {
                if (current instanceof HTMLElement === true) {
                    parents.push(current);
                }
                else if (current.nodeType === 11) {
                    if (current.host) {
                        current = current.host;
                        continue;
                    }
                }

                current = current.parentNode;
            }

            for (let i = 0; i < parents.length; i++) {
                if (parents[i] === that.shadowParent) {
                    return;
                }
            }

            if (parents.length > 0 && parents[parents.length - 1].nodeName === 'HTML') {
                that.shadowParent = null;
            }
        }
    }

    /**
     * This is a base class for registration of custom elements.
     */
    class ElementRegistry {
        /**
         * Called by each custom element to register it.
           @param {String} - tag name.
           @param {Object} - element's object like Button, NumericTextBox, etc.
         */
        static register(tagName, element) {
            const proto = element.prototype;

            let elementName = Core.toCamelCase(tagName).replace(/[a-z]+/, '');
            let elementVersion = element.version || window[namespace].Version;

            if (window.customElements.get(tagName) && window.customElements.get(tagName).version === elementVersion) {
                return;
            }

            let tmpTagName = tagName;
            elementVersion = elementVersion.split('.');

            while (window.customElements.get(tagName)) {
                tagName = tmpTagName + '-' + elementVersion.join('.');
                elementVersion[2] = parseInt(elementVersion[2]) + 1;
            }


            if (customElements[tagName]) {
                return;
            }

            if (tagName.startsWith(namespace.toLowerCase())) {
                customElements[tagName] = window[namespace][elementName] = window[namespace.toLowerCase() + elementName] = element;
            }
            else {
                let customNamespace = tagName.split('-')[0];

                customNamespace = customNamespace.substring(0, 1).toUpperCase() + customNamespace.substring(1);

                if (!window[namespace][customNamespace]) {
                    window[namespace][customNamespace] = {
                    };
                }

                customElements[tagName] = window[namespace][customNamespace][elementName] = window[customNamespace.toLowerCase() + elementName] = element;

                if (window[namespace][elementName]) {
                    elementName = Core.toCamelCase(tagName);
                }

                window[namespace][elementName] = element;
            }

            proto.elementName = elementName;
            proto.defineElement();
            if (registeredCallbacks[tagName]) {
                registeredCallbacks[tagName](proto);
            }

            /** Use customElements v1 spec, if it is supported. */
            window.customElements.define(tagName, element);
        }

        static registerElements() {
            const that = this;

            if (!that.toRegister) {
                return;
            }

            that.isRegistering = true;

            for (let i = 0; i < that.toRegister.length; i++) {
                const toRegisterItem = that.toRegister[i];

                that.register(toRegisterItem.tagName, toRegisterItem.element);
            }

            that.isRegistering = false;
        }

        /**
         * Returns the element's object.
         * @param {String} - tag name.
         * @return {Object} - custom element's object.
         */
        static get(tagName) {
            if (customElements[tagName]) {
                return customElements[tagName];
            }
            return undefined;
        }

        /**
         * Determines whether the element is registered.
         * @param {String} - tag name.
         * @param {Function} - the callback function which is called when the element is registered.
         */
        static whenRegistered(tagName, callback) {
            if (!tagName) {
                throw new Error('Syntax Error: Invalid tag name');
            }

            const that = this;
            const existingCallback = registeredCallbacks[tagName];
            const element = that.get(tagName);
            const modulesLength = element ? element.modules.length : 3;

            try {
                if (!existingCallback && !element) {
                    registeredCallbacks[tagName] = function (proto) {
                        try {
                            callback(proto)
                        }
                        catch (error) {
                            const errorMessage = error instanceof Error ? error.message : error.toString();

                            console.log(errorMessage);
                        }
                    };
                }
                else if (!existingCallback && element) {
                    callback(element.prototype);
                    registeredCallbacks[tagName] = undefined;
                }
                else if (existingCallback && !element) {
                    registeredCallbacks[tagName] = function (proto) {
                        existingCallback(proto);
                        callback(proto);
                    }
                }
                else if (existingCallback && element) {
                    if (element.proto) {
                        existingCallback(element.proto);
                        callback(element.proto);
                    }

                    registeredCallbacks[tagName] = undefined;
                }
            }
            catch (error) {
                const errorMessage = error instanceof Error ? error.message : error.toString();

                console.log(errorMessage);
            }

            if (element && modulesLength !== element.prototype.modules.length) {
                const elements = document.querySelectorAll(tagName);

                for (let j = 0; j < elements.length; j++) {
                    const element = elements[j];

                    if (element.isCreated) {
                        element._initElement();
                    }
                }
            }
        }
    }

    ElementRegistry.lazyRegister = false;
    ElementRegistry.tagNames = [];


    class Observable {
        constructor(object, observables) {
            const that = this;

            this.name = 'observable';

            if (object) {
                Object.assign(that, object);
            }

            const proxyMethodsOf = function (obj) {
                Object.getOwnPropertyNames(Object.getPrototypeOf(obj)).forEach(methodName => {
                    if (methodName === 'constructor') {
                        return true;
                    }
                    if (methodName.startsWith('_')) {
                        return true;
                    }

                    that[methodName] = obj[methodName];
                })
            }

            proxyMethodsOf(object);

            const proxy = new Proxy(that, {
                deleteProperty: function (target, property) {
                    delete target[property];
                    return true;
                },
                get: function (target, property/*, receiver*/) {
                    return target[property];
                },
                set: function (target, property, value/*, receiver*/) {
                    const oldValue = target[property];

                    if (oldValue === value) {
                        return true;
                    }

                    target[property] = value;

                    if (property === 'notifyFn' || property.startsWith('_') || property === 'canNotify') {
                        return true;
                    }

                    if (observables && observables.indexOf(property) === -1) {
                        return true;
                    }

                    if (!that.canNotify) {
                        return true
                    }

                    that._notify({
                        target: target,
                        propertyName: property,
                        oldValue: oldValue,
                        newValue: value
                    });

                    return true;
                }
            });

            return proxy;
        }

        get canNotify() {
            const that = this;

            if (that._canNotify === undefined) {
                that._canNotify = true;
            }

            return that._canNotify;
        }

        set canNotify(value) {
            const that = this;

            that._canNotify = value;
        }

        _notify(changeArgs) {
            const that = this;

            if (!that.canNotify) {
                return;
            }

            if (that.notifyFn) {
                for (let i = 0; i < that.notifyFn.length; i++) {
                    that.notifyFn[i](changeArgs);
                }
            }
        }

        notify(notifyFn) {
            const that = this;


            if (notifyFn) {
                if (!that.notifyFn) {
                    that.notifyFn = [];
                }

                that.notifyFn.push(notifyFn);
            }
        }
    }

    class ObservableArray {
        constructor() {

            const that = this;

            that.name = 'observableArray';
            that.observables = arguments.length < 3 ? null : arguments[2];


            const arrayProxy = new Proxy(that, {
                deleteProperty: function (target, property) {
                    delete target[property];
                    return true;
                },
                apply: function (method, context, args) {
                    return method.apply(context, args)
                },
                get: function (target, property/*, receiver*/) {
                    if (!target[property] && !isNaN(parseInt(property))) {
                        return that.getItem(parseInt(property));
                    }

                    return target[property];
                },
                set: function (target, property, value/*, receiver*/) {
                    if (!target[property] && !isNaN(parseInt(property))) {
                        that.setItem(parseInt(property), value);
                        return true;
                    }

                    target[property] = value;

                    return true;
                }
            });

            that._addArgs = {
                eventName: 'change', object: arrayProxy,
                action: 'add',
                index: null,
                removed: new Array(),
                addedCount: 1
            };

            that._removeArgs = {
                eventName: 'change', object: arrayProxy,
                action: 'remove',
                index: null,
                removed: null,
                addedCount: 0
            };

            if (arguments.length >= 1 && Array.isArray(arguments[0])) {
                that._array = [];
                const source = arguments[0];

                for (let i = 0, l = source.length; i < l; i++) {
                    const item = that._getItem(that._array.length, source[i]);

                    that._array.push(item);
                }
            }
            else {
                that._array = Array.apply(null, arguments);
            }

            if (arguments.length === 2) {
                that.notifyFn = arguments[1];
            }

            return arrayProxy;
        }


        get canNotify() {
            const that = this;

            if (that._canNotify === undefined) {
                that._canNotify = true;
            }

            return that._canNotify;
        }

        set canNotify(value) {
            const that = this;

            that._canNotify = value;
        }

        _notify(changeArgs) {
            const that = this;

            if (!that.canNotify) {
                return;
            }

            if (that.notifyFn) {
                that.notifyFn(changeArgs);
            }
        }

        notify(notifyFn) {
            const that = this;


            if (notifyFn) {
                that.notifyFn = notifyFn;
            }
        }

        toArray() {
            const that = this;

            return that._array;
        }

        _getItem(index, item) {
            const that = this;

            if (typeof item === 'string') {
                return item;
            }

            if (typeof item === 'number') {
                return item;
            }

            if (item === undefined) {
                return item;
            }

            const itemProxy = new Proxy(item, {
                deleteProperty: function (target, property) {
                    delete target[property];
                    return true;
                },
                set: function (target, property, value/*, receiver*/) {
                    const oldValue = target[property];

                    target[property] = value;

                    if (!that._canNotify || target.canNotify === false) {
                        return true
                    }

                    if (that.observables && !that.observables[property]) {
                        return true;
                    }

                    that._notify({
                        eventName: 'change',
                        object: that,
                        target: target,
                        action: 'update',
                        index: index,
                        path: index + '.' + property,
                        oldValue: oldValue,
                        newValue: value,
                        propertyName: property
                    });

                    return true;
                }
            });

            return itemProxy;
        }

        getItem(index) {
            return this._array[index];
        }

        setItem(index, value) {
            const that = this;
            const oldValue = that._array[index];

            that._array[index] = that._getItem(index, value);

            that._notify({
                eventName: 'change', object: that._array,
                action: 'update',
                index: index,
                removed: [oldValue],
                addedCount: 1
            });
        }

        get length() {
            return this._array.length;
        }

        set length(value) {
            const that = this;

            if (Types.isNumber(value) && that._array && that._array.length !== value) {
                that.splice(value, that._array.length - value);
            }
        }

        toString() {
            const that = this;

            return that._array.toString();
        }

        toLocaleString() {
            const that = this;

            return that._array.toLocaleString();
        }

        concat() {
            const that = this;

            that._addArgs.index = that._array.length;

            const result = that._array.concat.apply(that._array, arguments);

            return new Smart.ObservableArray(result);
        }

        join(separator) {
            const that = this;

            return that._array.join(separator);
        }

        pop() {
            const that = this;

            that._removeArgs.index = that._array.length - 1;

            delete that[that._array.length - 1];

            const result = that._array.pop();

            that._removeArgs.removed = [result];

            that._notify(that._removeArgs);
            that._notifyLengthChange();

            return result;
        }

        push() {
            const that = this;

            that._addArgs.index = that._array.length;

            if (arguments.length === 1 && Array.isArray(arguments[0])) {
                const source = arguments[0];

                for (let i = 0, l = source.length; i < l; i++) {
                    const item = that._getItem(that._array.length, source[i]);

                    that._array.push(item);
                }
            }
            else {
                const item = that._getItem(that._addArgs.index, arguments[0]);

                that._array.push.apply(that._array, [item]);
            }

            that._addArgs.addedCount = that._array.length - that._addArgs.index;

            that._notify(that._addArgs);
            that._notifyLengthChange();

            return that._array.length;
        }

        _notifyLengthChange() {
            const that = this;

            if (!that.canNotify) {
                return;
            }

            const lengthChangedData = that._createPropertyChangeData('length', that._array.length);

            that._notify(lengthChangedData);
        }

        _createPropertyChangeData(action, value, oldValue) {
            return {
                eventName: 'change', object: this, action, value, oldValue
            };
        }

        reverse() {
            const that = this;

            return that._array.reverse();
        }

        shift() {
            const that = this;
            const result = that._array.shift();

            that._removeArgs.index = 0;
            that._removeArgs.removed = [result];

            that._notify(that._removeArgs);
            that._notifyLengthChange();

            return result;
        }

        slice(start, end) {
            const that = this;

            return that._array.slice(start, end);
        }

        sort(compareFn) {
            const that = this;

            return that._array.sort(compareFn);
        }

        splice(start, deleteCount, addCount) {
            const that = this;

            const length = that._array.length;

            let result;

            if (addCount && addCount.length) {
                for (let i = 0; i < addCount.length; i++) {
                    result = that._array.splice(start + i, deleteCount, addCount[i]);
                }
            }
            else {
                result = that._array.splice.apply(that._array, arguments);
            }

            if (!addCount) {
                that._notify({
                    eventName: 'change', object: this,
                    action: 'remove',
                    index: start,
                    removed: result,
                    addedCount: that._array.length > length ? that._array.length - length : 0
                });
            }
            else {
                let canNotify = that.canNotify;

                that.canNotify = false;

                if (addCount.length) {
                    for (let i = 0; i < addCount.length; i++) {
                        that.setItem(start + i, addCount[i]);
                    }
                }
                else {
                    that.setItem(start, addCount);
                }

                that.canNotify = canNotify;

                that._notify({
                    eventName: 'change', object: this,
                    action: 'add',
                    index: start,
                    added: result,
                    addedCount: that._array.length > length ? that._array.length - length : 0
                });
            }

            if (that._array.length !== length) {
                that._notifyLengthChange();
            }

            return result;
        }

        unshift() {
            const that = this;

            const length = that._array.length;
            const result = that._array.unshift.apply(that._array, arguments);

            that._addArgs.index = 0;
            that._addArgs.addedCount = result - length;

            that._notify(this._addArgs);
            that._notifyLengthChange();

            return result;
        }

        indexOf(searchElement, fromIndex) {
            const that = this;
            const index = fromIndex ? fromIndex : 0;

            for (let i = index, l = that._array.length; i < l; i++) {
                if (that._array[i] === searchElement) {
                    return i;
                }
            }
            return -1;
        }

        lastIndexOf(searchElement, fromIndex) {
            const that = this;

            const index = fromIndex ? fromIndex : that._array.length - 1;

            for (let i = index; i >= 0; i--) {
                if (that._array[i] === searchElement) {
                    return i;
                }
            }
            return -1;
        }

        find(callbackfn, thisArg) {
            const that = this;

            return that._array.find(callbackfn, thisArg);
        }

        findIndex(callbackfn, thisArg) {
            const that = this;

            return that._array.findIndex(callbackfn, thisArg);
        }

        every(callbackfn, thisArg) {
            const that = this;

            return that._array.every(callbackfn, thisArg);
        }

        some(callbackfn, thisArg) {
            const that = this;

            return that._array.some(callbackfn, thisArg);
        }

        forEach(callbackfn, thisArg) {
            const that = this;

            that._array.forEach(callbackfn, thisArg);
        }

        map(callbackfn, thisArg) {
            const that = this;

            return that._array.map(callbackfn, thisArg);
        }

        filter(callbackfn, thisArg) {
            const that = this;

            const filteredArray = that._array.filter(callbackfn, thisArg);

            return filteredArray;
        }

        reduce(callbackfn, initialValue) {
            const that = this;

            return initialValue !== undefined ? that._array.reduce(callbackfn, initialValue) : that._array.reduce(callbackfn);
        }

        reduceRight(callbackfn, initialValue) {
            const that = this;

            return initialValue !== undefined ? that._array.reduceRight(callbackfn, initialValue) : that._array.reduceRight(callbackfn);
        }

        move(from, to) {
            const that = this;

            that.splice(to, 0, that.splice(from, 1)[0]);
        }
    }

    function Init(selector, element) {
        const properties = element.properties;
        element._properties = [];

        const defineProperties = function (properties, propertyPath) {
            const propertyNames = Object.keys(properties);

            for (let i = 0; i < propertyNames.length; i++) {
                const propertyName = propertyNames[i];
                const propertyValue = properties[propertyName];

                element._properties[propertyPath + propertyName] = propertyValue;

                if (Array.isArray(propertyValue)) {
                    element._properties[propertyPath + propertyName] = new ObservableArray(propertyValue, function (detail) {
                        const path = propertyName + '.' + detail.path;
                        const newValue = detail.newValue;
                        const instance = document.querySelector(selector);

                        if (instance) {
                            const pathSteps = path.split('.');
                            let propertyValue = instance;

                            for (let i = 0; i < pathSteps.length; i++) {
                                const step = pathSteps[i];

                                propertyValue = propertyValue[step];
                            }

                            propertyValue = newValue;
                        }
                    });

                    continue;
                }

                Object.defineProperty(properties, propertyName, {
                    configurable: false,
                    enumerable: true,
                    get() {
                        return element._properties[propertyPath + propertyName];
                    },
                    set(value) {
                        element._properties[propertyPath + propertyName] = value;
                    }
                });

                if (propertyValue && propertyValue.constructor.name === 'DataAdapter') {
                    continue;
                }

                if (propertyValue && typeof propertyValue === 'object' && Smart.DataAdapter && propertyValue instanceof Smart.DataAdapter) {
                    continue;
                }


                if (typeof propertyValue === 'object' && propertyValue && Object.keys(propertyValue).length > 0) {
                    defineProperties(propertyValue, propertyPath + propertyName + '.');
                }
            }
        }
        defineProperties(properties, '');

        Object.defineProperty(element, 'properties', {
            configurable: false,
            enumerable: true,
            get() {
                return properties;
            }
        });

        const instance = document.querySelector(selector);

        if (instance && instance.isReady) {
            for (let property in properties) {
                instance[property] = properties[property];
            }
        }
        else if (instance) {
            instance.props = {};

            for (let property in properties) {
                instance.props[property] = properties[property];
            }
        }
    }


    let userDefinedSettings = {
    };

    if (window[namespace]) {
        userDefinedSettings = window[namespace];
    }

    /*
     * Defines the 'Smart' namespace.
     * @param {String} - the tag's name.
     * @param {Object} - the custom element.
     */
    window[namespace] = function (tagName, element) {
        let name = tagName;

        if (!tagName) {
            return;
        }

        if (tagName.indexOf('#') >= 0 || tagName.indexOf('.') >= 0) {
            if (data[tagName]) {
                return data[tagName];
            }
            else if (element) {
                data[tagName] = new element();
                Init(tagName, data[tagName]);

                return data[tagName];
            }

            return;
        }

        if (!element) {
            return;
        }

        ElementRegistry.tagNames[tagName] = element;

        if (ElementRegistry.lazyRegister) {
            if (!ElementRegistry.toRegister) {
                ElementRegistry.toRegister = [];
            }

            const elementName = Core.toCamelCase(name).replace(/[a-z]+/, '');
            window[namespace][elementName] = element;

            ElementRegistry.toRegister.push({
                tagName: name, element: element
            });
            return;
        }

        ElementRegistry.register(name, element);
    }

    window.addEventListener('load', function () {
        const tagNames = window[namespace].Elements.tagNames;
        let customElements = [];

        for (let tagName in tagNames) {
            const customElement = tagNames[tagName];

            let elements = document.querySelectorAll('[' + tagName + ']');

            for (let j = 0; j < elements.length; j++) {
                const element = elements[j];

                if (element instanceof HTMLDivElement) {
                    element.__proto__ = customElement.prototype;
                    element.created();
                    element.connectedCallback();
                }
                element.classList.add('smart-element-ready');
            }

            let name = customElement.name;

            if (name === 'Item') {
                name = 'ListItem';
            }

            elements = document.querySelectorAll('[is="' + namespace.toLocaleLowerCase() + name + '"]');

            for (let i = 0; i < elements.length; i++) {
                customElements.push(elements[i]);
            }
        }

        if (customElements.length > 0) {
            const parents = element => {
                let matched = [],
                    current = element.parentNode;

                while (current && current.nodeType !== 9) {
                    if (current instanceof HTMLElement === true) {
                        matched.push(current);
                    }
                    current = current.parentNode;
                }
                return matched;
            }

            customElements.sort(function (element1, element2) {
                let indexA = parents(element1).length;
                let indexB = parents(element2).length;

                if (indexA < indexB) {
                    return 1;
                }

                if (indexA > indexB) {
                    return -1;
                }

                return 0;
            });

            for (let j = 0; j < customElements.length; j++) {
                const element = customElements[j];
                const tagName = element.getAttribute('is');
                let customElement;

                if (tagName === 'smartItem') {
                    customElement = new window['smartListItem'](element);
                }
                else {
                    customElement = new window[tagName](element);
                }

                customElement.removeAttribute('is');
            }
        }
    });

    class Component {
        constructor(selector, properties) {
            const that = this;
            const name = this.name;

            let element = null;

            if (selector) {
                element = new window[name](selector, properties);
            }
            else {
                element = new window[name];
                element._initProperties = properties;
            }

            that._element = element;

            return element;
        }

        get name() {
            return 'Component';
        }

        get element() {
            return this._element;
        }
    }

    const connectElements = function () {
        if (document.readyState !== 'complete') {
            return;
        }

        if (window[namespace].RenderMode === 'manual') {
            return;
        }

        registeredLoadedCallbacks.sort(function (element1, element2) {
            let indexA = element1.element.parents.length;
            let indexB = element2.element.parents.length;

            if (indexA < indexB) {
                return -1;
            }

            if (indexA > indexB) {
                return 1;
            }

            return 0;
        });

        for (let i = 0; i < registeredLoadedCallbacks.length; i++) {
            window[namespace].RenderMode = '';
            registeredLoadedCallbacks[i].element.isLoading = false;
            registeredLoadedCallbacks[i].callback();
            window[namespace].RenderMode = '';
        }

        registeredLoadedCallbacks = [];
        document.removeEventListener('readystatechange', connectElements);
    };

    const render = function () {
        const connectOnLoad = () => {
            window[namespace].RenderMode = '';
            connectElements();
        };

        if (document.readyState === 'complete') {
            connectOnLoad();
        }
        else {
            window.removeEventListener('load', connectOnLoad);
            window.addEventListener('load', connectOnLoad);
        }
    }

    Object.assign(window[namespace], {
        Elements: ElementRegistry,
        Modules: [],
        BaseElement: BaseCustomElement,
        Utilities: Utilities,
        Import: Import,
        ObservableArray: ObservableArray,
        Observable: Observable,
        Component: Component,
        Theme: userDefinedSettings.Theme || '',
        EnableShadowDOM: userDefinedSettings.ShadowDom || false,
        //   EnableShadowDOM: /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
        BaseUrl: './',
        StyleBaseUrl: '/styles/default/',
        Version: Version,
        RenderMode: userDefinedSettings.RenderMode || 'auto',
        Render: render,
        Data: data,
        License: 'Evaluation'
    });

    let theme = window[namespace].Theme;

    if (window[namespace].RenderMode !== 'manual') {
        document.addEventListener('readystatechange', connectElements);
    }

    Object.defineProperty(window[namespace], 'Theme', {
        configurable: false,
        enumerable: true,
        get() {
            return theme;
        },
        set(value) {
            const oldValue = theme;

            theme = value;

            $document.fireEvent('theme-changed', {
                oldValue: oldValue,
                newValue: value
            },
                {
                    bubbles: true,
                    cancelable: true
                });
        }
    });

    window[namespace]('smart-base-element', window[namespace].BaseElement);
    /**
    * Content element.
    */
    window[namespace]('smart-content-element', class ContentElement extends window[namespace].BaseElement {
        static get properties() {
            return {
                'content': {
                    type: 'any',
                    reflectToAttribute: false
                },
                'innerHTML': {
                    type: 'string',
                    reflectToAttribute: false
                }
            };
        }

        /** Content Element's template. */
        template() {
            return '<div inner-h-t-m-l=\'[[innerHTML]]\'></div>';
        }

        ready() {
            super.ready();

            const that = this;
            that.applyContent();
        }

        refresh() {

        }

        clearContent() {
            const that = this;

            while (that.$.content.firstChild) {
                that.$.content.removeChild(that.$.content.firstChild);
            }
        }

        applyContent() {
            const that = this;

            if (that.content === undefined) {
                that.content = that.$.content;
                return;
            }

            if (that.content === '' || that.content === null) {
                that.clearContent();
                return;
            }

            if (that.content instanceof HTMLElement) {
                that.clearContent();
                that.$.content.appendChild(that.content);
                return;
            }

            const fragment = document.createDocumentFragment();

            /* Create a wrapper DIV tag. */
            let tmpElement = document.createElement('div');
            fragment.appendChild(tmpElement);

            /* Fill the nodes array with the wrapper's childNodes. */
            if (that.content instanceof HTMLElement) {
                tmpElement.appendChild(that.content);
            }
            else {
                tmpElement.innerHTML = that.content;
            }

            let nodes = Array.from(tmpElement.childNodes);

            /* Remove the wrapper DIV tag. */
            tmpElement.parentNode.removeChild(tmpElement);

            for (let i = 0; i < nodes.length; i++) {
                fragment.appendChild(nodes[i]);
            }

            that.clearContent();
            that.$.content.appendChild(fragment);
        }

        propertyChangedHandler(propertyName, oldValue, newValue) {
            super.propertyChangedHandler(propertyName, oldValue, newValue);

            const that = this;

            if (oldValue === newValue) {
                return;
            }

            if (propertyName === 'innerHTML') {
                that.content = newValue;
                that.applyContent();
                that.innerHTML = that.content = Utilities.Core.html(that.$.content);
            }

            if (propertyName === 'content') {
                that.applyContent();
            }
        }
    });

    window[namespace]('smart-scroll-viewer', class ScrollViewer extends window[namespace].ContentElement {
        static get properties() {
            return {
                'horizontalScrollBarVisibility': {
                    type: 'string',
                    value: 'auto',
                    allowedValues: ['auto', 'disabled', 'hidden', 'visible']
                },
                'touchScrollRatio': {
                    type: 'any',
                    value: null
                },
                'touchVelocityCoefficient': {
                    type: 'number',
                    value: 50
                },
                'verticalScrollBarVisibility': {
                    type: 'string',
                    value: 'auto',
                    allowedValues: ['auto', 'disabled', 'hidden', 'visible']
                }
            };
        }

        static get listeners() {
            return {
                'horizontalScrollBar.change': '_horizontalScrollbarHandler',
                'verticalScrollBar.change': '_verticalScrollbarHandler',
                'touchmove': '_touchmoveHandler',
                'touchstart': '_touchstartHandler',
                'wheel': '_mouseWheelHandler',
                'document.up': '_upHandler'
            };
        }

        /**
         * CSS files needed for the element (ShadowDOM)
         */
        static get styleUrls() {
            return [
                'smart.scrollviewer.css'
            ]
        }

        /** ScrollViewer Element's template. */
        template() {
            return `<div id="container" class="smart-container" role="presentation">
                        <div id="scrollViewerContainer" class="smart-scroll-viewer-container" role="presentation">
                            <div id="scrollViewerContentContainer" inner-h-t-m-l=\'[[innerHTML]]\' class="smart-scroll-viewer-content-container" role="presentation">
                                <content></content>
                            </div>
                        </div>
                        <smart-scroll-bar id="verticalScrollBar" theme="[[theme]]"  animation="[[animation]]" disabled="[[disabled]]" right-to-left="[[rightToLeft]]" orientation="vertical"></smart-scroll-bar>
                        <smart-scroll-bar id="horizontalScrollBar" theme="[[theme]]" disabled="[[disabled]]" right-to-left="[[rightToLeft]]"></smart-scroll-bar>
                    </div>`;
        }

        appendChild(node) {
            const that = this;

            if (!node) {
                return;
            }

            if (!that.isCompleted || (node.classList && node.classList.contains('smart-resize-trigger-container'))) {
                const args = Array.prototype.slice.call(arguments, 2);
                return HTMLElement.prototype.appendChild.apply(that, args.concat(Array.prototype.slice.call(arguments)));
            }

            that.$.scrollViewerContentContainer.appendChild(node);
        }

        removeChild(node) {
            const that = this;

            if (!node) {
                return;
            }

            if (!that.isCompleted || (node.classList && node.classList.contains('smart-resize-trigger-container'))) {
                const args = Array.prototype.slice.call(arguments, 2);
                return HTMLElement.prototype.removeChild.apply(that, args.concat(Array.prototype.slice.call(arguments)));
            }

            that.$.scrollViewerContentContainer.removeChild(node);
        }

        removeAll() {
            const that = this;

            if (that.isCompleted) {
                that.$.scrollViewerContentContainer.innerHTML = '';
            }
        }

        _horizontalScrollbarHandler(event) {
            const that = this;

            that.$.scrollViewerContentContainer.style.left = ((that.rightToLeft ? 1 : -1) * that.scrollLeft) + 'px';

            event.stopPropagation();

            if (that.onHorizontalChange) {
                that.onHorizontalChange(event);
            }
        }

        _verticalScrollbarHandler(event) {
            const that = this;

            that.$.scrollViewerContentContainer.style.top = -that.scrollTop + 'px';

            event.stopPropagation();

            if (that.onVerticalChange) {
                that.onVerticalChange(event);
            }
        }

        /**
         * touchmove handler.
         */
        _touchmoveHandler(event) {
            const that = this;

            if (that._touchmoveInside && event.cancelable) {
                event.preventDefault();
                event.stopPropagation();
                return;
            }

            const computedVerticalScrollBarVisibility = that.computedVerticalScrollBarVisibility,
                coords = that._touchCoords;

            if (!that.computedHorizontalScrollBarVisibility && !computedVerticalScrollBarVisibility ||
                !coords) {
                return;
            }

            const touches = event.touches[0];
            let scrolled, scrollSize, coord, previousCoord;

            that._touchCoords = [touches.pageX, touches.pageY];

            if (computedVerticalScrollBarVisibility) {
                scrolled = that.scrollTop;
                scrollSize = that.scrollHeight;
                coord = touches.pageY;
                previousCoord = coords[1];
            }
            else {
                scrolled = that.scrollLeft;
                scrollSize = that.scrollWidth;
                coord = touches.pageX;
                previousCoord = coords[0];
            }

            const normalizedCoord = parseFloat(coord.toFixed(5)),
                normalizedPreviousCoord = parseFloat(previousCoord.toFixed(5));

            if (scrolled === 0 && normalizedCoord >= normalizedPreviousCoord || // pan up
                scrolled === scrollSize && normalizedCoord <= normalizedPreviousCoord) { // pan down
                return;
            }

            if (coord !== previousCoord) {
                that._touchmoveInside = true;
            }

            if (event.cancelable) {
                event.preventDefault();
                event.stopPropagation();
            }
        }

        /**
         * touchstart handler.
         */
        _touchstartHandler(event) {
            const touches = event.touches[0];

            this._touchCoords = [touches.pageX, touches.pageY];
        }

        _mouseWheelHandler(event) {
            const that = this;

            if (that.disabled || (!that.computedHorizontalScrollBarVisibility && !that.computedVerticalScrollBarVisibility)) {
                return;
            }

            if (event.shiftKey && that.computedHorizontalScrollBarVisibility) {
                const scrollLeft = that.scrollLeft;

                if (scrollLeft === 0 && event.deltaX < 0 ||
                    scrollLeft === that.scrollHeight && event.deltaX > 0) {
                    return;
                }
                event.stopPropagation();
                event.preventDefault();

                if (that.scrollWidth > 0) {
                    that.scrollTo(undefined, that.scrollLeft + that._getScrollCoefficient(event, that.offsetWidth));
                }

                return;
            }

            if (that.computedVerticalScrollBarVisibility) {
                const scrollTop = that.scrollTop;

                if (scrollTop === 0 && event.deltaY < 0 ||
                    scrollTop === that.scrollHeight && event.deltaY > 0) {
                    return;
                }

                event.stopPropagation();
                event.preventDefault();

                if (that.scrollHeight > 0) {
                    that.scrollTo(that.scrollTop + that._getScrollCoefficient(event, that.offsetHeight));
                }
            }
        }

        _overriddenHandler() { }

        /**
         * document up handler.
         */
        _upHandler() {
            const that = this;

            delete that._touchCoords;
            delete that._touchmoveInside;
        }

        _getScrollCoefficient(event, defaultCoefficient) {
            const deltaMode = event.deltaMode,
                absoluteDeltaY = Math.abs(event.deltaY);
            let coefficient;

            if (deltaMode === 0) {
                // DOM_DELTA_PIXEL
                if (absoluteDeltaY < 100 / 3) {
                    // trackpad
                    coefficient = absoluteDeltaY;
                }
                else {
                    coefficient = defaultCoefficient;
                }
            }
            else if (deltaMode === 1) {
                // DOM_DELTA_LINE (Firefox only)
                if (absoluteDeltaY < 1) {
                    // trackpad
                    coefficient = absoluteDeltaY * (100 / 3);
                }
                else {
                    coefficient = defaultCoefficient;
                }
            }
            else if (deltaMode === 2) {
                // DOM_DELTA_PAGE (when "Mouse Properties" -> "Wheel" -> "Vertical Scrolling" -> "One screen at a time" is selected in Windows settings)
                coefficient = defaultCoefficient;
            }

            return event.deltaY < 0 ? -coefficient : coefficient;
        }

        applyContent() {
            const that = this;

            super.applyContent();

            that.refresh();
        }

        get computedHorizontalScrollBarVisibility() {
            const that = this;

            if (that._scrollView && that._scrollView.hScrollBar) {
                return !that._scrollView.hScrollBar.$.hasClass('smart-hidden');
            }

            return null;
        }

        get computedVerticalScrollBarVisibility() {
            const that = this;

            if (that._scrollView && that._scrollView.vScrollBar) {
                return !that._scrollView.vScrollBar.$.hasClass('smart-hidden');
            }

            return null;
        }

        scrollTo(top, left) {
            const that = this;

            if (!that._scrollView) {
                return;
            }

            if (top !== undefined) {
                that._scrollView.scrollTo(top);
            }

            if (left !== undefined) {
                that._scrollView.scrollTo(left, false);
            }
        }

        refreshScrollBarsVisibility() {
            const that = this;

            if (!that._scrollView) {
                return;
            }

            that._scrollView.hScrollBar.disabled = that.disabled;
            that._scrollView.vScrollBar.disabled = that.disabled;

            if (that.horizontalScrollBarVisibility === 'disabled') {
                that._scrollView.hScrollBar.disabled = true;
            }

            if (that.verticalScrollBarVisibility === 'disabled') {
                that._scrollView.vScrollBar.disabled = true;
            }

            if (that.scrollWidth > 0) {
                that._scrollView.hScrollBar.$.removeClass('smart-hidden');
            }
            else if (that.horizontalScrollBarVisibility !== 'visible') {
                that._scrollView.hScrollBar.$.addClass('smart-hidden');
            }

            if (that.scrollHeight > 0) {
                that._scrollView.vScrollBar.$.removeClass('smart-hidden');
            }
            else if (that.verticalScrollBarVisibility !== 'visible') {
                that._scrollView.vScrollBar.$.addClass('smart-hidden');
            }

            if (that.horizontalScrollBarVisibility === 'hidden') {
                that._scrollView.hScrollBar.$.addClass('smart-hidden');
            }

            if (that.verticalScrollBarVisibility === 'hidden') {
                that._scrollView.vScrollBar.$.addClass('smart-hidden');
            }

            if (that.horizontalScrollBarVisibility === 'visible') {
                that._scrollView.hScrollBar.$.removeClass('smart-hidden');
            }

            if (that.verticalScrollBarVisibility === 'visible') {
                that._scrollView.vScrollBar.$.removeClass('smart-hidden');

                if (!that.disabled) {
                    that._scrollView.vScrollBar.disabled = that.scrollHeight <= 0;
                }
            }

            if (that.computedHorizontalScrollBarVisibility && that.computedVerticalScrollBarVisibility) {
                that._scrollView.hScrollBar.$.addClass('bottom-corner');
                that._scrollView.vScrollBar.$.addClass('bottom-corner');
            }
            else {
                that._scrollView.hScrollBar.$.removeClass('bottom-corner');
                that._scrollView.vScrollBar.$.removeClass('bottom-corner');
            }
        }

        ready() {
            super.ready();

            const that = this;

            that.$.verticalScrollBar.setAttribute('aria-controls', that.id);
            that.$.horizontalScrollBar.setAttribute('aria-controls', that.id);

            if (!that._customScrollView) {
                that._scrollView = new Smart.Utilities.Scroll(that, that.$.horizontalScrollBar, that.$.verticalScrollBar);
            }

            that.refresh();
        }

        refresh() {
            const that = this;

            function getScrollWidth() {
                const refreshScrollStyle = that.$.scrollViewerContainer.classList.contains('vscroll');

                that.$.scrollViewerContainer.classList.remove('vscroll');

                const scrollWidth = that.$.scrollViewerContentContainer.offsetWidth - that.$.scrollViewerContainer.offsetWidth;

                if (scrollWidth > 0 && that.horizontalScrollBarVisibility !== 'hidden' || that.horizontalScrollBarVisibility === 'visible') {
                    that.$.scrollViewerContainer.classList.add('hscroll');
                }
                else {
                    that.$.scrollViewerContainer.classList.remove('hscroll');
                }

                if (refreshScrollStyle) {
                    that.$.scrollViewerContainer.classList.add('vscroll');
                }

                return scrollWidth;
            }

            function getScrollHeight() {
                let scrollHeight;

                const refreshScrollStyle = that.$.scrollViewerContainer.classList.contains('hscroll');

                that.$.scrollViewerContainer.classList.remove('hscroll');

                //NOTE: Safari has an issue where it rounds the parent's height to the lowest integer number ignoring the decimal part
                if (Smart.Utilities.Core.Browser.Safari) {
                    const contentContainerHeight = that.$.scrollViewerContentContainer.getBoundingClientRect().height,
                        containerHeight = that.$.scrollViewerContainer.getBoundingClientRect().height;

                    if (contentContainerHeight && containerHeight) {
                        scrollHeight = parseInt(contentContainerHeight) - parseInt(containerHeight);
                    }
                    else {
                        scrollHeight = that.$.scrollViewerContentContainer.offsetHeight - that.$.scrollViewerContainer.offsetHeight;
                    }
                }
                else {
                    scrollHeight = that.$.scrollViewerContentContainer.offsetHeight - that.$.scrollViewerContainer.offsetHeight;
                }


                if (scrollHeight > 0 && that.verticalScrollBarVisibility !== 'hidden' || that.verticalScrollBarVisibility === 'visible') {
                    that.$.scrollViewerContainer.classList.add('vscroll');
                }
                else {
                    that.$.scrollViewerContainer.classList.remove('vscroll');
                }

                if (refreshScrollStyle) {
                    that.$.scrollViewerContainer.classList.add('hscroll');
                }

                return scrollHeight;
            }

            if (!that.$.scrollViewerContentContainer) {
                return;
            }

            //Caching the size's before they are re-calculated. Used to check if width/height of the container have changed.
            let initialWidth = that.scrollWidth,
                initialHeight = that.scrollHeight;

            that.scrollWidth = getScrollWidth();
            that.scrollHeight = getScrollHeight();

            //double check in case vScroll has become hidden and hScroll visibility should be checked
            if (!that.scrollHeight || initialHeight !== that.scrollHeight) {
                that.scrollWidth = getScrollWidth();
            }

            //doble check in case hScroll has become hidden and vScroll visibility should be checked
            if (!that.scrollWidth || initialWidth !== that.scrollWidth) {
                that.scrollHeight = getScrollHeight();
            }

            if (that.computedVerticalScrollBarVisibility) {
                that.scrollHeight += that._scrollView.hScrollBar.offsetHeight;
            }

            if (that.computedHorizontalScrollBarVisibility) {
                that.scrollWidth += that._scrollView.vScrollBar.offsetWidth;
            }

            if (that.scrollHeight === 0 && that.scrollWidth > 0) {
                if (that.$.container.offsetHeight - that.$.content.offsetHeight < 5) {
                    that.$.container.style.paddingBottom = that._scrollView.hScrollBar.offsetHeight + 'px';
                }
            }
        }

        attached() {
            const that = this;

            super.attached();

            if (!that._scrollView && !that._customScrollView) {
                that._scrollView = new Smart.Utilities.Scroll(that, that.$.horizontalScrollBar, that.$.verticalScrollBar);
            }
        }

        detached() {
            const that = this;

            super.detached();

            if (that._scrollView) {
                that._scrollView.unlisten();
                delete that._scrollView;
            }
        }

        get scrollWidth() {
            const that = this;

            if (that._scrollView && that._scrollView.hScrollBar) {
                if (that._scrollView.hScrollBar.max === 1 && that.horizontalScrollBarVisibility === 'visible') {
                    return 0;
                }

                return that._scrollView.hScrollBar.max;
            }

            return -1;
        }

        set scrollWidth(value) {
            const that = this;

            if (value < 0) {
                value = 0;
            }

            if (that._scrollView && that._scrollView.hScrollBar) {
                if (value === 0 && that.horizontalScrollBarVisibility === 'visible') {
                    that._scrollView.hScrollBar.max = 0;
                }
                else {
                    that._scrollView.hScrollBar.max = value;
                }

                that.refreshScrollBarsVisibility();
            }
        }

        get scrollHeight() {
            const that = this;

            if (that._scrollView && that._scrollView.vScrollBar) {
                if (that._scrollView.vScrollBar.max === 1 && that.verticalScrollBarVisibility === 'visible') {
                    return 0;
                }

                return that._scrollView.vScrollBar.max;
            }

            return 0;
        }

        set scrollHeight(value) {
            const that = this;

            if (value < 0) {
                value = 0;
            }


            if (that._scrollView && that._scrollView.vScrollBar) {
                if (value === 0 && that.verticalScrollBarVisibility === 'visible') {
                    that._scrollView.vScrollBar.max = 1;
                }
                else {
                    that._scrollView.vScrollBar.max = value;
                }

                that.refreshScrollBarsVisibility();
            }
        }

        get scrollLeft() {
            const that = this;

            if (that._scrollView && that._scrollView.hScrollBar) {
                return that._scrollView.hScrollBar.value;
            }

            return 0;
        }

        set scrollLeft(value) {
            const that = this;

            if (value < 0) {
                value = 0;
            }

            if (that._scrollView && that._scrollView.hScrollBar) {
                that._scrollView.hScrollBar.value = value;
            }
        }

        get scrollTop() {
            const that = this;

            if (that._scrollView && that._scrollView.vScrollBar) {
                return that._scrollView.vScrollBar.value;
            }

            return 0;
        }

        set scrollTop(value) {
            const that = this;

            if (value < 0) {
                value = 0;
            }

            if (that._scrollView && that._scrollView.vScrollBar) {
                that._scrollView.vScrollBar.value = value;
            }
        }

        propertyChangedHandler(propertyName, oldValue, newValue) {
            const that = this;

            super.propertyChangedHandler(propertyName, oldValue, newValue);

            if (propertyName !== 'animation' && propertyName !== 'theme') {
                that.refresh();
            }
        }
    });

    window[namespace].Utilities.Assign('PositionDetection', class PositionDetection {
        constructor(context, dropDown, defaultParent, closeMethod) {
            const that = this;

            if (dropDown) {
                const id = 'dropDown' + Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);

                dropDown.id = id;
                context.setAttribute('aria-owns', id);
            }
            that.context = context;
            that.dropDown = dropDown;
            that.defaultParent = defaultParent;
            that.closeMethod = closeMethod;
        }

        /**
         * Checks Element's position inside the document
         */
        handleAutoPositioning() {
            const positionDetection = this,
                that = positionDetection.context;

            if (that.dropDownPosition !== 'auto' || that.disabled) {
                return;
            }

            // eslint-disable-next-line
            const requestAnimFrame = (() => {
                return window.requestAnimationFrame
            })();
            let start = Date.now(), animationFrame;

            function loop() {
                animationFrame = requestAnimFrame(loop);

                //Cancel condition.
                if (that.dropDownPosition !== 'auto' || that.disabled ||
                    !(that.isInShadowDOM ? document.body.contains(that.shadowParent) : document.body.contains(that))) {
                    cancelAnimationFrame(animationFrame);
                }

                const current = Date.now();

                if (current - start >= 200) {
                    positionDetection.scrollHandler();
                    start = Date.now();
                }
            }

            return animationFrame = requestAnimFrame(loop);
        }

        /**
         * Checks window bounds and repositions the listbox popup
         */
        checkBrowserBounds(direction) {
            const that = this.context;

            if (that.dropDownPosition !== 'auto' || that.disabled) {
                return;
            }

            switch (direction) {
                case 'vertically':
                    this.checkBrowserBoundsVertically();
                    break;
                case 'horizontally':
                    this.checkBrowserBoundsHorizontally();
                    break;
                default:
                    this.checkBrowserBoundsVertically();
                    this.checkBrowserBoundsHorizontally();
                    break;
            }
        }

        /**
         * Check browser bounds Horizontally
         */
        checkBrowserBoundsHorizontally() {
            const that = this.context,
                dropDown = this.dropDown;
            let isParentChanged,
                vScrollBar = 0;

            //if vertical scrollbar is visible
            if (!Core.isMobile && window.innerWidth !== document.documentElement.clientWidth) {
                vScrollBar = window.innerWidth - document.documentElement.clientWidth;
            }

            if (that._dropDownParent !== null) {
                isParentChanged = true;
            }
            else {
                dropDown.style.left = '';
            }

            const windowWidth = window.innerWidth - vScrollBar;
            let currentOffsetLeft = that.getBoundingClientRect().left;

            //Left side check - Not Tested
            if (currentOffsetLeft < 0) {
                dropDown.style.left = (isParentChanged ? 0 : Math.abs(currentOffsetLeft)) + 'px';
                currentOffsetLeft = parseFloat(dropDown.style.left);
            }

            //Right side check
            if (currentOffsetLeft + dropDown.offsetWidth > windowWidth) {
                let newOffset = currentOffsetLeft - Math.abs(windowWidth - currentOffsetLeft - dropDown.offsetWidth);

                if (isParentChanged) {
                    newOffset += window.pageXOffset;
                }

                //Sets the left here in order to fit the drop down inside the viewport to avoid scroll bar appearing which leads to
                //misscalculations for the documentElement.scrollWidth!
                dropDown.style.left = (isParentChanged ? newOffset : newOffset - currentOffsetLeft) + 'px';

                //Check the viewPort horizontal offset
                //const viewPortHorizontalOffset = Math.max(0, document.documentElement.scrollWidth - (window.innerWidth + document.documentElement.scrollLeft - vScrollBar));

                //if (viewPortHorizontalOffset && !isParentChanged) {
                //    dropDown.style.left = (Math.max(0, newOffset - currentOffsetLeft)  - viewPortHorizontalOffset) + 'px';
                //}

                //if vertical scrollbar has become hidden
                if (window.innerWidth === document.documentElement.clientWidth) {
                    dropDown.style.left = (parseFloat(dropDown.style.left) + vScrollBar) + 'px';
                }

                //if the dropDownList is in another container different from the listBox's
                if (isParentChanged && window.innerHeight === document.documentElement.clientHeight) {
                    this.positionDropDown(true);
                }
            }

            //TODO: What if there's no space to the left nor the right ?
        }

        /**
         * Check browser bounds Vertically
         */
        checkBrowserBoundsVertically(elementCoordinates) {
            const that = this.context,
                dropDown = this.dropDown,
                oldDropDownListPosition = that._dropDownListPosition;

            if (!elementCoordinates) {
                elementCoordinates = that.getBoundingClientRect();
            }

            if (elementCoordinates.height === 0) {
                return;
            }

            if (document.documentElement.clientHeight - Math.abs(elementCoordinates.top + elementCoordinates.height + dropDown.offsetHeight) >= 0) {
                that._dropDownListPosition = 'bottom';
            }
            else if (elementCoordinates.top - dropDown.offsetHeight >= 0) {
                that._dropDownListPosition = 'top';
            }
            else {
                //What if there's no space above or under, place over ?
                that._dropDownListPosition = 'overlay-center';
                // Solution: Maybe reduce the height ?
            }

            this.updatePositionAttribute(oldDropDownListPosition, that._dropDownListPosition);
        }

        /**
         * Handles the scrolling
         */
        scrollHandler() {
            const that = this.context;

            if (!that.parentElement) {
                return;
            }

            const rect = that.getBoundingClientRect();

            if (rect.top === that._positionTop) {
                return;
            }

            const oldDropDownListPosition = that._dropDownListPosition;

            this.checkBrowserBoundsVertically(rect);

            if (that._dropDownListPosition !== oldDropDownListPosition) {
                this.positionDropDown();
            }

            that._positionTop = rect.top;
        }

        getDropDownParent(init) {
            const that = this.context,
                dropDown = this.dropDown;
            let dropDownAppendTo = that.dropDownAppendTo;

            that._positionedParent = null;

            if (dropDownAppendTo === null) {
                that._dropDownParent = null;
            }
            else if (dropDownAppendTo === 'body' || dropDownAppendTo === document.body) {
                if (that.getRootNode().host) {
                    that._dropDownParent = that.getRootNode().host.shadowRoot;
                }
                else {
                    that._dropDownParent = document.body;
                }
            }
            else if (dropDownAppendTo instanceof HTMLElement) {
                that._dropDownParent = dropDownAppendTo;
            }
            else if (typeof dropDownAppendTo === 'string') {
                dropDownAppendTo = document.getElementById(dropDownAppendTo);

                if (dropDownAppendTo instanceof HTMLElement) {
                    that._dropDownParent = dropDownAppendTo;
                }
                else {
                    that.dropDownAppendTo = null;
                    that._dropDownParent = null;
                }
            }
            else {
                that.dropDownAppendTo = null;
                that._dropDownParent = null;
            }

            let container = that._dropDownParent;

            if (container === null) {
                return;
            }

            while (container && container instanceof HTMLElement && window.getComputedStyle(container).position === 'static' && container !== that.getShadowRootOrBody()) {
                container = container.parentElement;
            }

            if (container === document.body) {
                that._positionedParent = null;
            }
            else {
                that._positionedParent = container;
            }

            if (!dropDown) {
                return;
            }

            dropDown.setAttribute('animation', that.animation);

            if (that.theme !== '') {
                dropDown.$.addClass(that.theme);
            }

            if (init) {
                that._dropDownParent.appendChild(dropDown);
                dropDown.$.addClass('smart-drop-down-repositioned');
            }

            if (that.detachedChildren.indexOf(dropDown) === -1) {
                that.detachedChildren.push(dropDown);
            }
        }

        dropDownAppendToChangedHandler() {
            const that = this.context,
                dropDown = this.dropDown,
                oldDropDownParent = that._dropDownParent;

            this.getDropDownParent();

            if (that._dropDownParent === oldDropDownParent) {
                return;
            }

            that[this.closeMethod]();

            ['left', 'top', 'font-size', 'font-family', 'font-style', 'font-weight'].forEach(styleName => dropDown.style[styleName] = null);

            if (that._dropDownParent === null) {
                this.defaultParent.appendChild(dropDown);
                dropDown.$.removeClass('smart-drop-down-repositioned');
            }
            else {
                that._dropDownParent.appendChild(dropDown);
                dropDown.$.addClass('smart-drop-down-repositioned');
            }
        }

        dropDownPositionChangedHandler() {
            const that = this;

            that.dropDown.style.transition = 'none';
            that.context[that.closeMethod]();
            that.setDropDownPosition();
            that.handleAutoPositioning();
        }

        dropDownAttached(callback) {
            const that = this.context;

            if (that._dropDownParent === null) {
                return;
            }

            that._dropDownParent.appendChild(this.dropDown);
            this.handleAutoPositioning();

            if (callback) {
                that[callback]();
            }
        }

        dropDownDetached() {
            const that = this.context;

            if (that._dropDownParent !== null &&
                document.body.contains(this.dropDown) &&
                document.body.contains(that._dropDownParent)) {
                that._dropDownParent.removeChild(this.dropDown);
            }
        }

        /**
         * Set the drop down position property.
         * @param {any} value
         */
        setDropDownPosition() {
            const that = this.context,
                value = that.dropDownPosition,
                oldDropDownListPosition = that._dropDownListPosition;

            if (value === 'auto') {
                this.checkBrowserBounds();
            }
            else {
                that._dropDownListPosition = value;
            }

            this.updatePositionAttribute(oldDropDownListPosition, that._dropDownListPosition);
        }

        updatePositionAttribute(oldPosition, newPosition) {
            const that = this.context,
                dropDown = this.dropDown;

            if (that.$.dropDownButton && !that.$.dropDownButton.hasAttribute(newPosition)) {
                that.$.dropDownButton.removeAttribute(oldPosition);
                that.$.dropDownButton.setAttribute(newPosition, '');
            }

            if (!dropDown.hasAttribute(newPosition)) {
                dropDown.style.transition = 'none';
                dropDown.removeAttribute(oldPosition);
                dropDown.setAttribute(newPosition, '');
                requestAnimationFrame(function () {
                    dropDown.style.transition = null;
                });
            }
        }

        /**
         * Calculates the new position of the popup afer it's parent has been changed.
         */
        positionDropDown(vertically) {
            const that = this.context,
                dropDown = this.dropDown;

            if (!that.opened || that._dropDownParent === null) {
                return;
            }

            const coordinates = that.getBoundingClientRect();
            let left, top;

            if (this.customPositionDropDown) {
                const customCoordinates = this.customPositionDropDown(coordinates);

                left = customCoordinates.left;
                top = customCoordinates.top;
            }
            else {
                left = coordinates.left;
                top = coordinates.top;

                switch (that._dropDownListPosition) {
                    case 'bottom':
                        top += that.$.container.offsetHeight - 1; // 1 is the min border-width. Doesn't matter if it's bigger.
                        break;
                    case 'center-bottom':
                        top += that.$.container.offsetHeight - 1;
                        left += that.offsetWidth - dropDown.offsetWidth / 2;
                        break;
                    case 'center-top':
                        top -= dropDown.offsetHeight - 1;
                        left += that.offsetWidth - dropDown.offsetWidth / 2;
                        break;
                    case 'top':
                        top -= dropDown.offsetHeight - 1;
                        break;
                    case 'overlay-bottom':
                        break;
                    case 'overlay-center':
                        top -= dropDown.offsetHeight / 2 - that.offsetHeight / 2;
                        break;
                    case 'overlay-top':
                        top -= dropDown.offsetHeight - that.offsetHeight;
                        break;
                }
            }

            const dropDownOffset = this.getDropDownOffset();

            dropDown.style.top = top + dropDownOffset.y + 'px';

            if (vertically) {
                return;
            }

            dropDown.style.left = left + dropDownOffset.x + 'px';
        }

        getDropDownOffset() {
            const positionedParent = this.context._positionedParent;
            let xOffset, yOffset;

            if (positionedParent) {
                const parentRect = positionedParent.getBoundingClientRect();

                xOffset = -parentRect.left;
                yOffset = -parentRect.top;
            }
            else {
                xOffset = window.pageXOffset;
                yOffset = window.pageYOffset;
            }

            return {
                x: xOffset, y: yOffset
            };
        }

        /**
         * Places dropdown overlay.
         */
        placeOverlay() {
            const that = this.context;

            if (!that.dropDownOverlay || that._overlay) {
                return;
            }

            const overlay = document.createElement('div');

            overlay.classList.add('smart-drop-down-overlay');
            overlay.style.width = document.documentElement.scrollWidth + 'px';
            overlay.style.height = document.documentElement.scrollHeight + 'px';

            document.body.appendChild(overlay);
            that._overlay = overlay;
        }

        /**
         * Removes dropdown overlay.
         */
        removeOverlay(onClose) {
            const positionDetection = this,
                that = positionDetection.context;

            function check() {
                if (positionDetection.dropDown.getBoundingClientRect().height > 0) {
                    requestAnimationFrame(check);
                }
                else {
                    document.body.removeChild(that._overlay);
                    delete that._overlay;
                }
            }

            if (that._overlay) {
                if (that.hasAnimation && onClose) {
                    requestAnimationFrame(check);
                }
                else {
                    document.body.removeChild(that._overlay);
                    delete that._overlay;
                }
            }
        }
    });
})();
