
/* Smart HTML Elements v4.5.0 (2019-Sep) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

/**
* DropDownButton custom element.
*/
Smart('smart-drop-down-button', class DropDownButton extends Smart.ContentElement {
    /** 
     * DropDownButton's properties
     */
    static get properties() {
        return {
            'autoCloseDelay': {
                value: 100,
                type: 'number'
            },
            'dropDownAppendTo': {
                value: null,
                type: 'any'
            },
            'dropDownButtonPosition': {
                allowedValues: ['none', 'left', 'right', 'top', 'bottom'],
                value: 'right',
                type: 'string'
            },
            'dropDownHeight': {
                value: '',
                type: 'any',
                validator: '_propertyValidator'
            },
            'dropDownMaxHeight': {
                value: '',
                type: 'any',
                validator: '_propertyValidator'
            },
            'dropDownMaxWidth': {
                value: '',
                type: 'any',
                validator: '_propertyValidator'
            },
            'dropDownMinHeight': {
                value: '',
                type: 'any',
                validator: '_propertyValidator'
            },
            'dropDownMinWidth': {
                value: '',
                type: 'any',
                validator: '_propertyValidator'
            },
            'dropDownOpenMode': {
                allowedValues: ['none', 'default', 'dropDownButton', 'auto'],
                value: 'default',
                type: 'string'
            },
            'dropDownOverlay': {
                value: false,
                type: 'boolean'
            },
            'dropDownPlaceholder': {
                value: 'No Items',
                type: 'string'
            },
            'dropDownPosition': {
                allowedValues: ['auto', 'top', 'bottom', 'overlay-top', 'overlay-center', 'overlay-bottom', 'center-bottom', 'center-top'],
                value: 'auto',
                type: 'string'
            },
            'dropDownWidth': {
                value: '',
                type: 'any',
                validator: '_propertyValidator'
            },
            'hint': {
                value: '',
                type: 'string'
            },
            'horizontalScrollBarVisibility': {
                type: 'string',
                value: 'auto',
                allowedValues: ['auto', 'disabled', 'hidden', 'visible']
            },
            'label': {
                value: '',
                type: 'string'
            },
            'messages': {
                extend: true,
                value: {
                    'en': {
                        'invalidNode': 'smart-drop-down-button: Invalid parameter "{{node}}" when calling {{method}}.'
                    }
                },
                type: 'object'
            },
            'opened': {
                value: false,
                type: 'boolean'
            },
            'placeholder': {
                value: '',
                type: 'string'
            },
            'resizeIndicator': {
                value: false,
                type: 'boolean'
            },
            'resizeMode': {
                value: 'none',
                allowedValues: ['none', 'horizontal', 'vertical', 'both'],
                type: 'string'
            },
            'verticalScrollBarVisibility': {
                type: 'string',
                value: 'auto',
                allowedValues: ['auto', 'disabled', 'hidden', 'visible']
            }
        }
    }

    /**
    * DropDownButton's event listeners.
    */
    static get listeners() {
        return {
            'actionButton.down': '_buttonsDownHandler',
            'actionButton.mouseenter': '_buttonsMouseEventsHandler',
            'actionButton.mouseleave': '_buttonsMouseEventsHandler',
            'actionButton.focus': '_buttonsFocusHandler',
            'actionButton.blur': '_buttonsFocusHandler',
            'document.selectstart': '_selectStartHandler',
            'document.dragstart': '_dragStartHandler',
            'document.down': '_documentDownHandler',
            'document.up': '_documentUpHandler',
            'document.move': '_documentMoveHandler',
            'dropDownButton.down': '_buttonsDownHandler',
            'dropDownButton.mouseenter': '_buttonsMouseEventsHandler',
            'dropDownButton.mouseleave': '_buttonsMouseEventsHandler',
            'keydown': '_keyDownHandler',
            'focus': '_focusEventHandler',
            'blur': '_blurEventHandler',
            'dropDownButton.focus': '_buttonsFocusHandler',
            'dropDownButton.blur': '_buttonsFocusHandler',
            'dropDownContainer.transitionend': '_dropDownTransitionendHandler',
            'mouseenter': '_mouseEnterHandler',
            'mouseleave': '_mouseLeaveHandler',
            'resize': '_resizeHandler',
            'resizeBar.move': '_resizeBarMoveHandler',
            'styleChanged': '_styleChangedHandler'
        };
    }

    /**
    * DropDownButton's HTML template.
    */
    template() {
        return `<div id="container">
                    <span class="smart-label" id="label">[[label]]</span>
                    <div id="content" class="smart-content">
                        <div id="buttonsContainer" class="smart-buttons-container">
                            <span id="actionButton" class="smart-input smart-action-button">[[placeholder]]</span>
                            <span id="dropDownButton" class="smart-drop-down-button">
                                <span id="arrow"></span>
                            </span>
                        </div>
                        <div id="dropDownContainer" class="smart-drop-down smart-drop-down-container smart-visibility-hidden">
                            <smart-scroll-viewer id="scrollViewer"                            
                                right-to-left="[[right-to-left]]"
                                horizontal-scroll-bar-visibility="[[horizontalScrollBarVisibility]]"
                                vertical-scroll-bar-visibility="[[verticalScrollBarVisibility]]">
                                <content></content>
                            </smart-scroll-viewer>
                            <div id="resizeBar" class="smart-drop-down-resize-bar">
                                <div></div>
                            </div>
                         </div>
                    </div>
                    <span class="smart-hint" id="hint">[[hint]]</span>
                </div>`;
    }

    /*
    * CSS files needed for the element (ShadowDOM)
    */
    static get styleUrls() {
        return [
            'smart.scrollviewer.css',
            'smart.dropdown.css',
            'smart.dropdownbutton.css'
        ]
    }

    /**
    * Called when the element is attached from the DOM.
    */
    attached() {
        const that = this;

        super.attached();

        if (!that.isCompleted || !that.$.dropDownContainer) {
            return;
        }

        that._positionDetection.dropDownAttached('_setDropDownSize');
        that._positionDetection.checkBrowserBounds();
    }

    /**
     * Called when the element is detached from the DOM.
     */
    detached() {
        const that = this;

        super.detached();

        if (!that.$.dropDownContainer) {
            return;
        }

        that.close();
        that._positionDetection.dropDownDetached();
    }

    /**
    * Updates the DropDownButton when a property is changed.
    * @param {string} propertyName The name of the property.
    * @param {number/string} oldValue The previously entered value. Max, min and value are of type Number. The rest are of type String.
    * @param {number/string} newValue The new entered value. Max, min and value are of type Number. The rest are of type String.
    */
    propertyChangedHandler(propertyName, oldValue, newValue) {
        const that = this;

        switch (propertyName) {
            case 'disabled':
            case 'unfocusable':
                that._setFocusable();
                break;
            case 'dropDownAppendTo':
                that._positionDetection.dropDownAppendToChangedHandler();
                break;
            case 'dropDownHeight':
            case 'dropDownMaxHeight':
            case 'dropDownMaxWidth':
            case 'dropDownMinHeight':
            case 'dropDownMinWidth':
            case 'dropDownWidth':
                that._setDropDownSize();
                break;
            case 'dropDownOpenMode':
                that._setFocusable();
                that.close();
                break;
            case 'dropDownOverlay':
                if (!newValue) {
                    that._positionDetection.removeOverlay();
                }

                break;
            case 'dropDownPlaceholder':
                if (that.$.dropDownContainer.hasAttribute('empty')) {
                    that.$.scrollViewer.$.scrollViewerContentContainer.innerHTML = newValue;

                    if (that.opened) {
                        that.$.scrollViewer.refresh();
                    }
                }

                break;
            case 'dropDownPosition':
                that._positionDetection.dropDownPositionChangedHandler();
                break;
            case 'innerHTML':
                // It is necessary to apply the new HTML directly to scrollViewerContentContainer due to a conflict in innerHTML binding of scrollViewer (removed)
                if (newValue.trim() === '') {
                    that.$.dropDownContainer.setAttribute('empty', '');
                    requestAnimationFrame(() => that.$.scrollViewer.$.scrollViewerContentContainer.innerHTML = that.dropDownPlaceholder);
                }
                else {
                    that.$.dropDownContainer.removeAttribute('empty');
                    that.$.scrollViewer.$.scrollViewerContentContainer.innerHTML = newValue;
                }

                if (that.opened) {
                    that.$.scrollViewer.refresh();
                }

                break;
            case 'opened':
                if (newValue) {
                    that.open();
                }
                else {
                    that.close();
                }

                break;
            case 'placeholder':
                if (oldValue === '' || newValue === '') {
                    that._setFocusable();
                }

                break;
            case 'resizeIndicator':
                if (newValue) {
                    that.$.dropDownContainer.setAttribute('resize-indicator', '');
                }
                else {
                    that.$.dropDownContainer.removeAttribute('resize-indicator');
                }

                break;
            case 'resizeMode':
                that.$.dropDownContainer.setAttribute('resize-mode', that.resizeMode);

                if (that.opened) {
                    that.$.scrollViewer.refresh();
                }

                break;
        }
    }

    /**
     * Appends html nodes fo the element
     * @param {any} node - HTML element to be appended
     */
    appendChild(node) {
        const that = this;

        if (!that.isCompleted || node instanceof HTMLElement && node.classList.contains('smart-resize-trigger-container')) {
            const args = Array.prototype.slice.call(arguments, 2);
            return HTMLElement.prototype.appendChild.apply(that, args.concat(Array.prototype.slice.call(arguments)));
        }

        if (!node) {
            that.error(that.localize('invalidNode', { method: 'removeChild', node: 'node' }));
            return;
        }

        that.$.scrollViewer.appendChild(node);

        if (that.opened) {
            that.$.scrollViewer.refresh();
        }
    }

    /**
     * Removes content from the element
     * @param {any} node - node to be removed
     */
    removeChild(node) {
        const that = this;

        if (!that.isCompleted || node instanceof HTMLElement && node.classList.contains('smart-resize-trigger-container')) {
            const args = Array.prototype.slice.call(arguments, 2);
            return HTMLElement.prototype.removeChild.apply(that, args.concat(Array.prototype.slice.call(arguments)));
        }

        if (!node) {
            that.error(that.localize('invalidNode', { method: 'removeChild', node: 'node' }));
            return
        }

        if (!that.$.dropDownContainer.contains(node)) {
            return;
        }

        that.$.scrollViewer.removeChild(node);

        if (that.opened) {
            that.$.scrollViewer.refresh();
        }
    }

    /**
     * Removes the content completely
     */
    removeAll() {
        const that = this;

        if (that.isCompleted) {
            that.$.scrollViewer.removeAll();
        }
    }

    _open() {
        const that = this;

        if (that.disabled || !that.offsetHeight) {
            return;
        }

        if (!that.$dropDownContainer.hasClass('smart-visibility-hidden')) {
            return;
        }

        if (that.$dropDownContainer.hasClass('not-in-view')) {
            that.$dropDownContainer.removeClass('not-in-view');
        }

        that.$.dropDownContainer.style.transition = null;

        if (that.dropDownAppendTo && that.dropDownAppendTo.length > 0) {
            const rect = that.getBoundingClientRect();

            // handles the case, when the dropdown is opened, while it is still part of the DropDownButton's tree.
            if (that.$.container.contains(that.$.dropDownContainer)) {
                let iterations = 0;
                const interval = setInterval(function () {
                    const rect = that.getBoundingClientRect();

                    iterations++;

                    if (rect.top === that._positionTop && iterations < 10) {
                        return;
                    }

                    that.open();
                    clearInterval(interval);
                    that._positionTop = rect.top;
                }, 100);

                return;
            }
            else if (rect.top !== that._positionTop) {
                that._positionTop = rect.top;
            }
        }

        const isOpeningEventPrevented = that.$.fireEvent('opening').defaultPrevented;

        if (isOpeningEventPrevented) {
            return;
        }

        that.opened = true;

        that._positionDetection.placeOverlay();
        that._positionDetection.checkBrowserBounds('vertically');
        that._positionDetection.positionDropDown();
        that._positionDetection.checkBrowserBounds('horizontally');

        that.$dropDownContainer.removeClass('smart-visibility-hidden');
        that.$.fireEvent('open');

        if (that.$.dropDownButton) {
            if (that.dropDownOpenMode === 'dropDownButton') {
                that.$.dropDownButton.setAttribute('selected', '');
            }
            else {
                that.$.dropDownButton.removeAttribute('selected');
            }
        }

        if (that.$.input) {
            that.$.input.focus();
        }

    }
    /**
    * Opens the drop down container
    */
    open() {
        const that = this,
            //NOTE: Will not close other DropDown's on page ! For example, DropDownList, DateTimePickers, etc ...
            dropDownsInDOM = document.querySelectorAll('smart-drop-down-button, smart-color-picker');

        //Make sure all dropDownButton popups are closed before openning this one
        for (let i = 0; i < dropDownsInDOM.length; i++) {
            if (dropDownsInDOM[i] !== that && dropDownsInDOM[i].opened) {
                dropDownsInDOM[i].close();
            }
        }

        that._open();
        that.$.scrollViewer.refresh();
    }

    /**
     * Scrolls to a position
     * @param {any} top - Y coordinate
     * @param {any} left - X coordinate
     */
    scrollTo(top, left) {
        const that = this;

        if (!that.isCompleted) {
            return;
        }

        that.$.scrollViewer.scrollTo(top, left);
    }

    ready() {
        super.ready();

        const that = this;

        that._edgeMacFF = Smart.Utilities.Core.Browser.Edge ||
            Smart.Utilities.Core.Browser.Firefox && navigator.platform.toLowerCase().indexOf('mac') !== -1;

        that._positionDetection = new Smart.Utilities.PositionDetection(that, that.$.dropDownContainer, that.$.container, 'close');
        that._positionDetection.getDropDownParent(true);
        that._positionDetection.setDropDownPosition();
        that._calculateDropDownSize();
        that.$.dropDownContainer.setAttribute('resize-mode', that.resizeMode);

        if (that.resizeIndicator) {
            that.$.dropDownContainer.setAttribute('resize-indicator', '');
        }

        that._positionDetection.handleAutoPositioning();

        that._createElement();

        if (that.opened) {
            that.open();
        }
        else if (that.hasAnimation && that._edgeMacFF) {
            that.$dropDownContainer.addClass('not-in-view');
        }

        //Used for the scroll handling
        that._positionTop = that.getBoundingClientRect().top;
    }

    _setDropDownSize() {
        const that = this;

        if (!that._dropDownSize) {
            that._calculateDropDownSize();
        }

        ['dropDownMinWidth', 'dropDownMinHeight', 'dropDownMaxWidth', 'dropDownMaxHeight'].forEach((name) => {
            that.$.dropDownContainer.style[name.replace('dropDown', '').replace(/^./, 'm')] = that[name] ? that[name] + (that[name].toString().endsWith('%') ? '%' : 'px') : null;
        });

        if (that.dropDownWidth) {
            if (that.dropDownWidth !== 'auto') {
                that.$.dropDownContainer.style.width = (that.dropDownWidth === 'initial' ? that.offsetWidth : parseFloat(that.dropDownWidth)) + 'px';
            }
            else {
                that.$.dropDownContainer.style.width = 'auto';
            }
        }
        else {
            that.$.dropDownContainer.style.width = that._dropDownSize.width === 'auto' ? 'auto' : (parseFloat(that._dropDownSize.width) || 0) + 'px';
        }

        if (that.dropDownHeight && that.dropDownHeight !== 'auto') {
            that.$.dropDownContainer.style.height = parseFloat(that.dropDownHeight) + ((that.dropDownHeight + '').indexOf('%') > -1 ? '%' : 'px');
        }
        else {
            that.$.dropDownContainer.style.height = that._dropDownSize.height;
        }
    }

    /**
* Sets tab index 
*/
    _setFocusable() {
        const that = this;

        if (that.disabled || that.unfocusable) {
            that.removeAttribute('tabindex');
            that.$.actionButton.removeAttribute('tabindex');
            that.$.dropDownButton.removeAttribute('tabindex');
            return;
        }

        let index = that.tabIndex > 0 ? that.tabIndex : 0;

        if (that.dropDownOpenMode === 'dropDownButton') {
            that.removeAttribute('tabindex');

            if (that.placeholder === '') {
                that.$.actionButton.removeAttribute('tabindex');
            }
            else {
                that.$.actionButton.setAttribute('tabindex', index);
            }

            that.$.dropDownButton.setAttribute('tabindex', index);
        }
        else {
            that.$.actionButton.removeAttribute('tabindex');
            that.$.dropDownButton.removeAttribute('tabindex');
            that.tabIndex = index;
        }
    }

    _calculateDropDownSize() {
        const that = this;

        that._dropDownSize = {};

        const computedStyle = window.getComputedStyle(that.$.dropDownContainer);
        const topBorder = parseFloat(computedStyle.getPropertyValue('border-top-width').trim()),
            bottomBorder = parseFloat(computedStyle.getPropertyValue('border-bottom-width').trim()),
            topMargin = parseFloat(computedStyle.getPropertyValue('margin-top').trim()),
            bottomMargin = parseFloat(computedStyle.getPropertyValue('margin-bottom').trim()),
            topPaddinng = parseFloat(computedStyle.getPropertyValue('padding-top').trim()),
            bottomPaddinng = parseFloat(computedStyle.getPropertyValue('padding-bottom').trim());

        if (Smart.Utilities.Core.CSSVariablesSupport()) {
            that._dropDownSize.width = computedStyle.getPropertyValue('--smart-drop-down-list-drop-down-width').trim();
            that._dropDownSize.height = computedStyle.getPropertyValue('--smart-drop-down-list-drop-down-height').trim();
        }

        if (!that._dropDownSize.width || that._dropDownSize.width.indexOf('initial') > -1) {
            that._dropDownSize.width = that.offsetWidth;
        }

        if (!that._dropDownSize.height) {
            that._dropDownSize.height = 'auto';
        }

        that._dropDownSize.minHeight = parseFloat(computedStyle.getPropertyValue('min-height').trim());
        that._dropDownSize.maxHeight = parseFloat(computedStyle.getPropertyValue('max-height').trim());
        that._dropDownSize.borderWidth = (isNaN(topBorder) ? 0 : topBorder) + (isNaN(bottomBorder) ? 0 : bottomBorder);
        that._dropDownSize.paddingWidth = (isNaN(topPaddinng) ? 0 : topPaddinng) + (isNaN(bottomPaddinng) ? 0 : bottomPaddinng);
        that._dropDownSize.marginWidth = (isNaN(topMargin) ? 0 : topMargin) + (isNaN(bottomMargin) ? 0 : bottomMargin);
    }

    /**
     * Initialization method. Called inside ready method
     */
    _createElement() {
        const that = this;

        if (that.innerHTML.trim() === '') {
            that.$.dropDownContainer.setAttribute('empty', '');
            that.$.scrollViewer.$.scrollViewerContentContainer.innerHTML = that.dropDownPlaceholder;
        }

        that._setDropDownSize();
        that._setFocusable();

        //Flag indicator for the ripple effect. Used to append the ripple to that specific element, not his firstElementChild like it's done usually.
        //Used in class Ripple, method animate() in smartelement.
        that.$.arrow.noRipple = true;
    }

    /**
    * DragStarted Event Handler
    * @param {any} event
    */
    _dragStartHandler(event) {
        const that = this;

        if (that._resizeDetails && that._resizeDetails.started) {
            event.preventDefault();
        }
    }

    /**
    * Dropdown transitionend handler.
    */
    _dropDownTransitionendHandler() {
        const that = this;

        if (that._edgeMacFF && !that.opened && that.hasAnimation) {
            that.$.dropDownContainer.style.top = that.$.dropDownContainer.style.left = '';
            that.$dropDownContainer.addClass('not-in-view');
        }
    }

    /**
     * Element/DropDownButton blur event handler
     * @param {any} event
     */
    _blurEventHandler() {
        const that = this;

        if (that.$.dropDownButton) {
            that.removeAttribute('focus');
            that.$.dropDownButton.removeAttribute('focus');
        }

        if (that.$.actionButton) {
            that.removeAttribute('focus');
            that.$.actionButton.removeAttribute('focus');
        }
    }

    /**
     * Element focus event handler
     */
    _focusEventHandler() {
        const that = this;

        if (that.$.dropDownButton) {
            that.setAttribute('focus', '');
            that.$.dropDownButton.setAttribute('focus', '');
        }

        if (that.$.actionButton) {
            that.setAttribute('focus', '');
            that.$.actionButton.setAttribute('focus', '');
        }

        that.removeAttribute('drop-down-button-focus');
        that.removeAttribute('action-button-focus');
    }

    /**
     * DropDownButton drop-down-button and action-button focus/blur handlers
     * @param {any} event
     */
    _buttonsFocusHandler(event) {
        const that = this;

        if (event.target === that.$.dropDownButton) {
            if (event.type === 'focus') {
                that.setAttribute('drop-down-button-focus', '');
            }
            else {
                that.removeAttribute('drop-down-button-focus');
            }
        }
        else {
            event.type === 'focus' ? that.setAttribute('action-button-focus', '') : that.removeAttribute('action-button-focus');
        }
    }

    /**
     * Gets the target of a document up event.
     */
    _getUpEventTarget(originalTarget) {
        const that = this;
        let target = originalTarget;

        target = target.parentElement === undefined ? target.getRootNode().host : target.parentElement;

        while (target) {
            if (target === that.$.dropDownContainer) {
                target = 'dropDownContainer';
                break;
            }

            target = target.parentElement === undefined ? target.getRootNode().host : target.parentElement;
        }

        return target;
    }

    /**
 * Hides the drop down list.
 */
    close() {
        const that = this;

        if (that.$dropDownContainer.hasClass('smart-visibility-hidden')) {
            return;
        }

        const isClosingEventPrevented = that.$.fireEvent('closing').defaultPrevented;

        if (isClosingEventPrevented) {
            return;
        }

        that.$dropDownContainer.addClass('smart-visibility-hidden');
        that.$.fireEvent('close');

        if (that.$.dropDownButton) {
            that.$.dropDownButton.removeAttribute('selected');
        }

        that.opened = false;
        that._preventDropDownClose = false;
        that._positionDetection.removeOverlay(true);

        if (that._edgeMacFF && !that.hasAnimation) {
            that.$.dropDownContainer.style.top = that.$.dropDownContainer.style.left = '';
            that.$dropDownContainer.addClass('not-in-view');
        }
    }

    /**
     * DocumentUp event handler
     * @param {any} event
     */
    _documentUpHandler(event) {
        const that = this,
            isResizing = that.hasAttribute('resizing');

        that.$.actionButton.removeAttribute('active');

        if (that._resizeDetails && that._resizeDetails.started) {
            that._resizeDetails.started = that._resizeDetails.resizeEventFired = false;
            that.removeAttribute('resizing');
            that._preventDropDownClose = false;
            that.focus();

            that.$.fireEvent('resizeEnd', {
                'position': { left: event.pageX, top: event.pageY }
            });
            return;
        }

        if (that.disabled || that._isDropDownClicked || that.readonly) {
            delete that._isDropDownClicked;
            return;
        }

        if (that._overlayDown) {
            that.close();
            delete that._overlayDown;
            return;
        }

        let target = event.originalEvent.target;

        if (that.enableShadowDOM) {
            target = event.originalEvent.composedPath()[0];
        }

        that._preventsSelectStart = false;

        if (typeof (target) === 'undefined' || target === that.$.resizeBar) {
            return;
        }

        const isActionButtonPressed = target.closest('.smart-action-button');

        if (that._buttonClicked) {
            if (that.dropDownOpenMode === 'dropDownButton' && isActionButtonPressed && that._buttonClicked === that.$.actionButton) {
                that.$.fireEvent('actionButtonClick');
            }
            else if (target.closest('.smart-drop-down-button') === that._buttonClicked || isActionButtonPressed === that._buttonClicked) {
                that.$.fireEvent('dropDownButtonClick');
            }
        }

        that._buttonClicked = undefined;

        if ((!that.editable && isActionButtonPressed === that.$.actionButton) || target.closest('.smart-drop-down-button') === that.$.dropDownButton) {
            if (that.dropDownOpenMode === 'dropDownButton' && isActionButtonPressed === that.$.actionButton) {
                that.close();
                return;
            }

            //Open/Close the DropDownButton
            that.$dropDownContainer.hasClass('smart-visibility-hidden') && that.dropDownOpenMode !== 'none' ? that.open() : that.close();
            return;
        }

        target = that._getUpEventTarget(target);

        if (target === undefined) {
            return;
        }

        if (target !== 'dropDownContainer' && target !== 'item' || target === 'item' && that.selectionMode !== 'checkBox' && that.selectionMode.indexOf('Many') < 0) {
            that.close();
        }

        if (isResizing && that.$.scrollViewer) {
            that.$.scrollViewer.refresh();
        }
    }

    /**
     * Key down handler 
     * @param {any} event
     */
    _keyDownHandler(event) {
        const that = this,
            activeElement = (that.shadowRoot || that.getRootNode()).activeElement || document.activeElement;

        if (that.disabled || that.readonly ||
            (activeElement !== that && activeElement !== that.$.dropDownButton && activeElement !== that.$.actionButton)) {
            return;
        }

        switch (event.key) {
            case 'Enter':
            case ' ':
                event.preventDefault();

                if (event.target !== that.$.actionButton) {
                    if (that.opened && event.key === 'Enter') {
                        that.close();
                    }
                    else if (!that.opened && !that.readonly && that.dropDownOpenMode !== 'none') {
                        that.open();
                    }
                }

                break;
            case 'End':
                that.$.scrollViewer.scrollTop = that.$.scrollViewer.scrollHeight;
                break;
            case 'Home':
                that.$.scrollViewer.scrollTop = 0;
                break;
            case 'PageUp':
            case 'PageDown':
                that.$.scrollViewer.scrollTop += (event.key.indexOf('Down') > -1 ? 1 : -1) * that.$.dropDownContainer.offsetHeight;
                break;
            case 'ArrowUp':
            case 'ArrowDown':
                if (event.altKey) {
                    if (!that.disabled && !that.readonly && that.dropDownOpenMode !== 'none') {
                        that.$dropDownContainer.hasClass('smart-visibility-hidden') ? that.open() : that.close();
                    }

                    return;
                }

                event.preventDefault();
                that.$.scrollViewer.scrollTop += (event.key.indexOf('Down') > -1 ? 1 : -1) * 10;
                break;
            case 'Escape':
                event.preventDefault();
                that.close();
                break;
        }
    }

    /**
     * Validates the value of the property
     * @param {any} oldValue - the old value
     * @param {any} value - the new value
     */
    _propertyValidator(oldValue, newValue) {
        if (typeof newValue !== 'number' && typeof newValue !== 'string') {
            return oldValue;
        }

        return newValue;
    }

    /**
     * Element container mouse enter event handler.
     */
    _mouseEnterHandler() {
        const that = this;

        that._isElementHovered = true;

        if (that.dropDownOpenMode === 'auto' && !that.disabled && !that.readonly) {
            that.open();
        }
    }

    /**
     * Element container mouse leave event handler.
     */
    _mouseLeaveHandler() {
        const that = this;

        that.removeAttribute('hover');
        that._isElementHovered = false;

        if (that.dropDownOpenMode === 'auto' && !that.disabled && !that.readonly) {
            that._autoClose()
        }
    }

    /**
     * Automatically closes the dropdown.
     */
    _autoClose() {
        const that = this;

        that._autoCloseTimeout = setTimeout(function () {
            if (!that._isElementHovered) {
                that.close();
            }

            clearTimeout(that._autoCloseTimeout);
        }.bind(that), that.autoCloseDelay);
    }

    /**
     * Document Move Event handler
     * @param {any} event
     */
    _documentMoveHandler(event) {
        const that = this,
            target = that.enableShadowDOM ? event.originalEvent.composedPath()[0] : event.originalEvent.target;

        if (that.dropDownOpenMode === 'auto' && that.dropDownAppendTo !== null) {
            if (that.contains(target) || that.$.dropDownContainer.contains(target)) {
                that._isElementHovered = true;
            }
            else {
                that._isElementHovered = false;
                that._autoClose();
            }
        }

        if (!that._resizeDetails || (that._resizeDetails && !that._resizeDetails.started)) {
            return;
        }

        that.setAttribute('resizing', '');

        if (!that._resizeDetails.resizeEventFired) {
            that.$.fireEvent('resizeStart', {
                'position': { left: event.pageX, top: event.pageY }
            });

            that._resizeDetails.resizeEventFired = true;
        }

        const doc = document.documentElement,
            computedStyle = that.$.dropDownContainer.getBoundingClientRect(),
            dropDownStyle = that.getBoundingClientRect(),
            direction = that.$.dropDownContainer.hasAttribute('top') ? 'top' : 'bottom';
        let size;

        function verticalResize() {
            size = event.pageY - that._resizeDetails.y;

            if (direction === 'bottom') {
                //6 is the margin of document.body, we don't want scrollbars to be shown
                that._resizeDetails.height = Math.min(doc.clientHeight - computedStyle.top - 6,
                    Math.max(0, that._resizeDetails.height + size));

                that._resizeDetails.y = Math.max(computedStyle.top + doc.scrollTop - that._resizeDetails.offsetY,
                    Math.min(doc.clientHeight + doc.scrollTop - that._resizeDetails.offsetY * 1.5, event.pageY));
            }
            else {
                that._resizeDetails.height = Math.min(that._dropDownSize.maxHeight, Math.max(0, Math.min(dropDownStyle.top, that._resizeDetails.height - size)));

                size = Math.max(0, computedStyle.top + (computedStyle.height - Math.max(that._dropDownSize.minHeight, that._resizeDetails.height)));

                if (that.dropDownAppendTo && that.dropDownAppendTo.length > 0) {
                    const margin = Math.abs(parseFloat(getComputedStyle(that.$.dropDownContainer).getPropertyValue('margin-bottom'))) || 0;

                    that.$.dropDownContainer.style.top = that.dropDownAppendTo && that.dropDownAppendTo.length > 0 ? (margin + size) + 'px' : '';
                }

                const minYCondition = dropDownStyle.top + doc.scrollTop + that._resizeDetails.offsetYtop;

                that._resizeDetails.y = Math.max(that._resizeDetails.offsetYtop,
                    Math.min(minYCondition, Math.max(minYCondition - that._dropDownSize.maxHeight, event.pageY)));
            }

            that.$.dropDownContainer.style.height = that._resizeDetails.height + 'px';
        }

        function horizontalResize() {
            //Resize only from corner
            //if (that._resizeDetails.offsetXR > 20) {
            //    return;
            //}

            size = event.pageX - that._resizeDetails.x;

            //6 is the margin of document.body, we don't want scrollbars to be shown
            that._resizeDetails.width = Math.min(doc.clientWidth - computedStyle.left - 6,
                Math.max(0, that._resizeDetails.width + size));

            that.$.dropDownContainer.style.width = that._resizeDetails.width + 'px';

            that._resizeDetails.x = Math.max(computedStyle.left + doc.scrollLeft - that._resizeDetails.offsetXR,
                Math.min(doc.clientWidth + doc.scrollLeft - that._resizeDetails.offsetXR * 1.5, event.pageX));
        }

        switch (that.resizeMode) {
            case 'vertical':
                verticalResize();
                break;
            case 'horizontal':
                horizontalResize();
                break;
            case 'both':
                horizontalResize();
                verticalResize();
                break;
        }
    }

    /**
     * Document mouse down event handler.
     */
    _documentDownHandler(event) {
        const that = this;

        if (that.disabled || that.readonly) {
            return;
        }

        let target = event.originalEvent.target;

        if (target === that._overlay) {
            that._overlayDown = true;
        }

        if (that.enableShadowDOM) {
            target = event.originalEvent.composedPath()[0];

            let rootElement = target;

            while (rootElement) {
                if (rootElement.closest('.smart-drop-down-container') === that.$.dropDownContainer) {
                    that._isDropDownClicked = true;
                    break;
                }

                rootElement = rootElement.getRootNode().host;
            }
        }
        else {
            that._isDropDownClicked = target.closest('.smart-drop-down-container') === that.$.dropDownContainer;
        }

        that._buttonClicked = target.closest('.smart-action-button') || target.closest('.smart-drop-down-button');

        if (that._isDropDownClicked) {
            that._preventDropDownClose = true;
        }

        if (target !== that.$.resizeBar || that.resizeMode === 'none') {
            return;
        }

        if (!that._resizeDetails) {
            that._resizeDetails = {};
        }

        const computedStyle = that.$.dropDownContainer.getBoundingClientRect();

        that._resizeDetails.started = true;
        that._resizeDetails.x = event.pageX;
        that._resizeDetails.y = event.pageY;
        that._resizeDetails.width = that.$.dropDownContainer.offsetWidth;
        that._resizeDetails.height = that.$.dropDownContainer.offsetHeight;
        that._resizeDetails.offsetXL = event.clientX - computedStyle.left;
        that._resizeDetails.offsetXR = computedStyle.left + that.$.dropDownContainer.offsetWidth - event.clientX;
        that._resizeDetails.offsetY = computedStyle.top + that.$.dropDownContainer.offsetHeight - event.clientY;
        that._resizeDetails.offsetYtop = event.clientY - computedStyle.top;
        that._preventDropDownClose = true;
    }

    /**
     * Resize handler - recalculate the size of the popup if the element is initialized with a different size.
     */
    _resizeHandler() {
        const that = this;

        if (that.resizeMode === 'none') {
            that._calculateDropDownSize();
            that._setDropDownSize();
        }
    }

    /**
     * Resizebar mousemouve event handler. 
     * @param {any} event
     */
    _resizeBarMoveHandler(event) {
        //Used to prevent page scrolling on iOS devices
        if (event.originalEvent.type === 'touchmove') {
            event.originalEvent.preventDefault();
        }
    }

    /**
     * Style changed event handler
     * @param {any} event
     */
    _styleChangedHandler(event) {
        const that = this;

        if (that.dropDownAppendTo && that.dropDownAppendTo.length > 0) {
            const styleProperties = event.detail.styleProperties,
                fontProperties = ['font-size', 'font-family', 'font-style', 'font-weight'];

            for (let s = 0; s < fontProperties.length; s++) {
                if (styleProperties[fontProperties[s]]) {
                    that.$.dropDownContainer.style[fontProperties[s]] = styleProperties[fontProperties[s]].value;
                }
            }

        }

        if (that._dropDownSize.height === 'auto') {
            that._setDropDownSize();
        }
    }

    /**
     * Action/DropDown button mouse down event handler.
     */
    _buttonsDownHandler(event) {
        const that = this;

        if (that.disabled) {
            return;
        }

        if (that.hasRippleAnimation) {
            if (that.dropDownOpenMode === 'dropDownButton') {
                Smart.Utilities.Animation.Ripple.animate(event.target, event.pageX, event.pageY);
            }
            else if (event.target === that.$.dropDownButton || !that.editable) {
                const target = that.$.buttonsContainer;

                target.firstElementChild.noRipple = true;
                Smart.Utilities.Animation.Ripple.animate(target, event.pageX, event.pageY);
                target.firstElementChild.noRipple = false;
            }
        }

        that._preventsSelectStart = true;

        if (that.dropDownOpenMode === 'dropDownButton' && event.target === that.$.actionButton) {
            that.$.actionButton.setAttribute('active', '');
        }

        //Used to handle closing after blur event is thrown
        if (that.opened) {
            that._preventDropDownClose = true;
        }
    }

    /**
     * DropDownList container mouse enter/leave events handler.
     */
    _buttonsMouseEventsHandler(event) {
        const that = this;

        if (that.disabled) {
            return;
        }

        if (event.type === 'mouseenter') {
            that.setAttribute('hover', '');
            event.target.setAttribute('hover', '');
        }
        else {
            that.removeAttribute('hover');
            event.target.removeAttribute('hover');
        }
    }

    /**
     * Document select start event handler.
     */
    _selectStartHandler(event) {
        if (this._preventsSelectStart) {
            event.preventDefault();
        }
    }
});
