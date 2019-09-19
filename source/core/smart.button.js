
/* Smart HTML Elements v4.5.0 (2019-Sep) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

/**
* Button custom element.
*/
Smart('smart-button', class Button extends Smart.ContentElement {
    // Button's properties.
    static get properties() {
        return {
            'value': {
                type: 'string'
            },
            'name': {
                type: 'string'
            },
            'type': {
                value: 'button',
                type: 'string'
            },
            'clickMode': {
                allowedValues: ['hover', 'press', 'release', 'pressAndRelease'],
                type: 'string',
                value: 'release'
            }
        };
    }


    /**
    * CSS files needed for the element (ShadowDOM)
    */
    static get styleUrls() {
        return [
            'smart.button.css'
        ]
    }

    /** Button's template. */
    template() {
        return '<button class=\'smart-button\' inner-h-t-m-l=\'[[innerHTML]]\' id=\'button\' type=\'[[type]]\' name=\'[[name]]\' value=\'[[value]]\' disabled=\'[[disabled]]\' role=\'button\'></button>';
    }

    static get listeners() {
        return {
            'button.down': '_downHandler',
            'button.mouseenter': '_mouseEnterHandler',
            'button.mouseleave': '_mouseLeaveHandler',
            'button.touchend': '_touchEndHandler',
            'button.click': '_clickHandler',
            'button.up': '_upHandler',
            'up': '_upHandler',
            'button.focus': '_focusHandler',
            'button.blur': '_blurHandler'
        };
    }

    focus() {
        const that = this;

        if (!that.$.button) {
            HTMLElement.prototype.focus.call(that);
            return;
        }

        that.$.button.focus();
    }

    blur() {
        const that = this;

        if (!that.$.button) {
            HTMLElement.prototype.blur.call(that);
            return;
        }

        that.$.button.blur();
    }

    _upHandler(event) {
        const that = this;

        event.stopPropagation();
        that.$.setAttributeValue('active', false);
    }

    _focusHandler() {
        const that = this;

        that.$.setAttributeValue('focus', true);
    }

    _blurHandler() {
        const that = this;

        that.$.setAttributeValue('focus', false);
    }

    _clickHandler(event) {
        const that = this;

        if ((that.clickMode !== 'release' && that.clickMode !== 'pressAndRelease') || that.readonly) {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    _downHandler(event) {
        const that = this;

        if (that.disabled) {
            return;
        }

        //if (!that.enableShadowDOM) {
        //    event.originalEvent.stopPropagation();
        //}

        if (that.hasRippleAnimation) {
            Smart.Utilities.Animation.Ripple.animate(that, event.pageX, event.pageY);
        }

        that.$.setAttributeValue('active', true);

        if ((that.clickMode === 'press' || that.clickMode === 'pressAndRelease') && !that.readonly) {
            const buttons = ('buttons' in event) ? event.buttons : event.which;

            that.$.fireEvent('click', { buttons: buttons, clientX: event.clientX, clientY: event.clientY, pageX: event.pageX, pageY: event.pageY, screenX: event.screenX, screenY: event.screenY });
        }
    }

    _mouseEnterHandler(event) {
        const that = this;

        if (that.readonly) {
            return;
        }

        that.$button.setAttributeValue('hover', true);
        that.$.setAttributeValue('hover', true);

        if (that.clickMode === 'hover') {
            const buttons = ('buttons' in event) ? event.buttons : event.which;

            that.$.fireEvent('click', { buttons: buttons, clientX: event.clientX, clientY: event.clientY, pageX: event.pageX, pageY: event.pageY, screenX: event.screenX, screenY: event.screenY });
        }
    }

    _touchEndHandler() {
        const that = this;

        setTimeout(function () {
            that.$button.setAttributeValue('hover', false);
            that.$.setAttributeValue('hover', false);
        }, 300);
    }

    _mouseLeaveHandler() {
        const that = this;

        that.$button.setAttributeValue('hover', false);
        that.$.setAttributeValue('hover', false);
    }

    /**
* Called when a property is changed.
*/
    propertyChangedHandler(propertyName, oldValue, newValue) {
        super.propertyChangedHandler(propertyName, oldValue, newValue);

        const that = this;

        if (propertyName === 'disabled') {
            that._setFocusable();

            if (that.$button) {
                that.$button.setAttributeValue('hover', false);
            }

            that.$.setAttributeValue('hover', false);

            if (that instanceof Smart.RepeatButton) {
                that._stopRepeat();
            }
        }
        else if (propertyName === 'unfocusable') {
            that._setFocusable();
        }
    }

    /**
     * Sets tab index 
     */
    _setFocusable() {
        const that = this;

        const target = that.$.button ? that.$.button : that;

        if (that.disabled || that.unfocusable) {
            target.removeAttribute('tabindex');
            target.tabIndex = -1;
            return;
        }

        target.tabIndex = that.tabIndex > 0 ? that.tabIndex : 0;
    }

    ready() {
        const that = this;

        super.ready();

        that._setFocusable();
    }
});

/**
* Repeat Button.
*/
Smart('smart-repeat-button', class RepeatButton extends Smart.Button {
    // button's properties.
    static get properties() {
        return {
            'delay': {
                value: 50,
                type: 'number'
            },
            'initialDelay': {
                value: 150,
                type: 'number'
            }
        };
    }

    static get listeners() {
        return {
            'button.mousedown': '_startRepeat',
            'button.mouseenter': '_updateInBoundsFlag',
            'button.mouseleave': '_updateInBoundsFlag',
            'document.mouseup': '_stopRepeat'
        };
    }

    _clickHandler(event) {
        const that = this;

        if (that.clickMode !== 'release' || that.preventDefaultClick || that.readonly || that.disabled) {
            event.preventDefault();
            event.stopPropagation();
            that.preventDefaultClick = false;
        }
    }

    _updateInBoundsFlag(event) {
        const that = this;

        that._isPointerInBounds = true;

        if (event.type === 'mouseleave') {
            that._isPointerInBounds = false;

            that.$button.setAttributeValue('hover', false);
            that.$.setAttributeValue('hover', false);
        }
        else {
            that.$button.setAttributeValue('hover', true);
            that.$.setAttributeValue('hover', true);
        }

        const buttons = ('buttons' in event) ? event.buttons : event.which;
        if (buttons !== 1) {
            that._stopRepeat(event);
        }
    }

    _startRepeat(event) {
        const that = this;
        if (!that._initialTimer && !that.readonly) {
            that._initialTimer = setTimeout(function () {
                that._repeatTimer = setInterval(() => {
                    if (that._isPointerInBounds) {
                        const buttons = ('buttons' in event) ? event.buttons : event.which;

                        that.$.fireEvent('click', { buttons: buttons, clientX: event.clientX, clientY: event.clientY, pageX: event.pageX, pageY: event.pageY, screenX: event.screenX, screenY: event.screenY });
                        that.preventDefaultClick = true;
                    }
                }, that.delay);
            }, that.initialDelay);
        }
    }

    _stopRepeat() {
        const that = this;

        if (that.readonly) {
            return;
        }

        that.$.setAttributeValue('active', false);

        if (that._repeatTimer) {
            clearInterval(that._repeatTimer);
            that._repeatTimer = null;
        }

        if (that._initialTimer) {
            clearTimeout(that._initialTimer);
            that._initialTimer = null;
        }
    }
});

/**
* Toggle Button.
*/
Smart('smart-toggle-button', class ToggleButton extends Smart.Button {
    // Toggle Button's properties.
    static get properties() {
        return {
            'checked': {
                value: false,
                type: 'boolean?'
            },
            'falseContent': {
                value: '',
                reflectToAttribute: false,
                type: 'string'
            },
            'indeterminateContent': {
                value: '',
                reflectToAttribute: false,
                type: 'string'
            },
            'indeterminate': {
                value: false,
                type: 'boolean'
            },
            'trueContent': {
                value: '',
                reflectToAttribute: false,
                type: 'string'
            },
            'indeterminateTemplate': {
                value: null,
                type: 'any'
            },
            'trueTemplate': {
                value: null,
                type: 'any'
            },
            'falseTemplate': {
                value: null,
                type: 'any'
            },
            'type': {
                value: 'toggle',
                type: 'string',
                defaultReflectToAttribute: true,
                readonly: true
            }
        };
    }

    /**
    * Toggle Button's event listeners.
    */
    static get listeners() {
        return {
            'keydown': '_keyHandler',
            'keyup': '_keyHandler',
            'dragstart': '_dragStartHandler',
            'button.click': '_buttonClickHandler',
            'button.mouseenter': '_buttonMouseEnterHandler',
            'button.mouseleave': '_buttonMouseLeaveHandler',
            'document.up': '_documentUpHandler'
        };
    }

    /** Called when the element is ready. Used for one-time configuration of the ToggleButton. */
    ready() {
        super.ready();
    }

    /**
     * Overrides the inherited "click" handler of the inner button element.
     */
    _buttonClickHandler() { }

    _buttonMouseLeaveHandler() {
        const that = this;

        that.removeAttribute('hover');
    }

    /**
     * Changes the check state on hover.
     */
    _buttonMouseEnterHandler() {
        const that = this;

        that.setAttribute('hover', '');

        if ((that.disabled) || (that.readonly) || (that.clickMode !== 'hover')) {
            return;
        }

        that._changeCheckState('pointer');
        that.focus();
        that._updateHidenInputNameAndValue();
    }

    /** Changes the check state wneh widget container is clicked. */
    _documentUpHandler() {
        const that = this;

        if (!that._pressed) {
            return;
        }

        that._pressed = false;

        if ((that.disabled) || (that.readonly) || (that.clickMode === 'press')) {
            return;
        }

        that._changeCheckState('pointer');
        that.focus();
        that._updateHidenInputNameAndValue();
    }

    _downHandler(event) {
        const that = this;

        if (that.disabled || that.readonly) {
            return;
        }

        if (that.hasRippleAnimation) {
            Smart.Utilities.Animation.Ripple.animate(that, event.pageX, event.pageY);
        }

        that._pressed = true;

        if (that.clickMode === 'press' || that.clickMode === 'pressAndRelease') {
            that._changeCheckState('pointer');
            that.$.fireEvent('click');
            that._updateHidenInputNameAndValue();
        }

        if (that.clickMode === 'press') {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    _dragStartHandler(event) {
        event.preventDefault();
    }

    /** Changes the check state when spacebar is pressed. */
    _keyHandler(event) {
        const that = this;

        if ((that.disabled !== true) && !that.readonly && (event.keyCode === 32)) {
            if (event.type === 'keydown') {
                event.preventDefault();
                return;
            }

            if (that.switchMode === 'none') {
                return;
            }

            that._changeCheckState('keyboard');
            that._updateHidenInputNameAndValue();
        }
    }

    /** Changes the check state. */
    _changeCheckState(changeType) {
        const that = this;

        let oldValue = null;

        if (that.checked === null) {
            that.checked = true;
        }
        else {
            oldValue = that.checked;
            that.checked = !that.checked;
        }

        that._handleTextSelection();

        that.$.fireEvent('change', { 'value': that.checked, 'oldValue': oldValue, changeType: changeType });
    }

    _handleTextSelection() {
        const that = this;

        that.$.addClass('smart-unselectable');

        if (that.timer) {
            clearTimeout(that.timer);
        }

        that.timer = setTimeout(() => that.$.removeClass('smart-unselectable'), 500);
    }

    /**
    * Called when a property is changed.
    */
    propertyChangedHandler(propertyName, oldValue, newValue) {
        super.propertyChangedHandler(propertyName, oldValue, newValue);
        const that = this;

        if (propertyName === 'checked') {
            that.$.fireEvent('change', { 'value': newValue, 'oldValue': oldValue, changeType: 'api' });
        }

        switch (propertyName) {
            case 'trueTemplate':
                that._handleTemplate(true);
                break;
            case 'falseTemplate':
                that._handleTemplate(false);
                break;
            case 'indeterminateTemplate':
                that._handleTemplate();
                break;
        }
    }

    _htmlBindOnInitialization() {
        const that = this;

        that._bindContentProperty('trueContent', 'smart-true-content');
        that._bindContentProperty('falseContent', 'smart-false-content');
        that._bindContentProperty('indeterminateContent', 'smart-indeterminate-content');
    }

    _bindContentProperty(propertyName, className) {
        const that = this;

        if (!that.$[propertyName + 'Container']) {
            return;
        }

        let testElement = document.createElement('div');

        testElement.innerHTML = that.innerHTML;

        let elements = testElement.getElementsByClassName(className),
            element;

        if (elements.length > 0) {
            for (let i = 0; i < elements.length; i++) {
                element = elements[i];
            }
        }

        if (that[propertyName] === '') {
            that[propertyName] = element === undefined ? '' : element.outerHTML;
        }

        that.$[propertyName + 'Container'].innerHTML = that[propertyName];
    }

    _updateContentProperties() {
        const that = this;

        update('trueContent');
        update('falseContent');
        update('indeterminateContent');

        function update(property) {
            if (that.$[property + 'Container']) {
                that[property] = that.$[property + 'Container'].innerHTML;
            }
        }
    }

    _updateHidenInputValue() {
        const that = this;

        if (!that.$.hiddenInput) {
            return;
        }

        let inputValue;

        if (that.checked === null) {
            inputValue = 'null';
        }
        else if (that.checked === false) {
            inputValue = 'off';
        }
        else {
            inputValue = that.value || 'on';
        }

        that.$.hiddenInput.setAttribute('value', inputValue);
    }

    _updateHidenInputName() {
        const that = this;

        if (!that.$.hiddenInput) {
            return;
        }

        let inputName = that.checked === false ? '' : that.name || '';

        that.$.hiddenInput.setAttribute('name', inputName);
    }

    _updateHidenInputNameAndValue() {
        const that = this;

        that._updateHidenInputName();
        that._updateHidenInputValue();
    }

    /**
     * Apply a template to true/false/indeterminate states of the elements.
     */
    _handleTemplate(state, oldValue) {
        const that = this;
        let template, templateTarget, value;


        if (state === true) {
            template = that.trueTemplate;
            templateTarget = that.$.trueContentContainer;
            value = that.trueContent;
        }
        else if (state === false) {
            template = that.falseTemplate;
            templateTarget = that.$.falseContentContainer;
            value = that.falseContent;
        }
        else {
            template = that.indeterminateTemplate;
            templateTarget = that.$.indeterminateContentContainer;
            value = that.indeterminateContent;
        }

        if (oldValue) {
            templateTarget.innerHTML = value ? value : '';
        }

        if (template === null || !template) {
            return;
        }

        if (typeof template === 'function') {
            template(templateTarget, { value: value });
            return;
        }

        if (!('content' in document.createElement('template'))) {
            that.error(that.localize('htmlTemplateNotSuported', { elementType: that.nodeName.toLowerCase() }));
            return;
        }

        template = document.getElementById(template);
        if (template === null || !('content' in template)) {
            that.error(that.localize('invalidTemplate', { elementType: that.nodeName.toLowerCase(), property: 'template' }));
            return;
        }

        const content = template.content,
            childrenCount = content.childNodes.length,
            regex = /{{\w+}}/g;
        let bindingString,
            bindingDetails = [];

        for (let i = 0; i < childrenCount; i++) {
            bindingString = regex.exec(content.childNodes[i].innerHTML);
            while (bindingString) {
                bindingDetails.push({ childNodeIndex: i, bindingString: bindingString[0] });
                bindingString = regex.exec(content.childNodes[i].innerHTML);
            }
        }

        const bindingsCount = bindingDetails.length;
        let clone = document.importNode(template.content, true),
            bindingHolderElement,
            bindingStringsCount;

        for (let b = 0; b < bindingsCount; b++) {
            bindingHolderElement = clone.childNodes[bindingDetails[b].childNodeIndex];
            bindingStringsCount = bindingDetails.length;
            for (let i = 0; i < bindingStringsCount; i++) {
                bindingHolderElement.innerHTML = bindingHolderElement.innerHTML.replace(bindingDetails[b].bindingString, value);
            }
        }

        templateTarget.innerHTML = '';
        for (let i = 0; i < clone.childNodes.length; i++) {
            if (clone.childNodes[i].outerHTML) {
                templateTarget.innerHTML += clone.childNodes[i].outerHTML;
            }
        }
    }
});

