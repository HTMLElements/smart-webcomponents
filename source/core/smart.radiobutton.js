
/* Smart HTML Elements v4.5.0 (2019-Sep) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

/**
* RadioButton custom element.
*/
Smart('smart-radio-button', class RadioButton extends Smart.ToggleButton {
    // RadioButton's properties.
    static get properties() {
        return {
            'checkMode': {
                value: 'both',
                allowedValues: ['both', 'input', 'label'],
                type: 'string'
            },
            'type': {
                value: 'radio',
                type: 'string',
                defaultReflectToAttribute: true,
                readonly: true
            },
            'groupName': {
                value: '',
                type: 'string'
            }
        };
    }

    /** RadioButton's Html template. */
    template() {
        return `<div  id='container' class='smart-container'>
                 <div class ='smart-overlay'></div>
                 <span id='radioButtonInput' class ='smart-input'></span>
                 <span id='radioButtonLabel' inner-h-t-m-l='[[innerHTML]]' class ='smart-label'><content></content></span>
                 <input id='hiddenInput' class ='smart-hidden-input' type='hidden'>
               </div>`;
    }

    static get listeners() {
        return {
            'down': '_downHandler',
            'document.up': '_documentUpHandler',
            'mouseenter': '_elementMouseEnterHandler',
            'radioButtonInput.mouseenter': '_radioMouseEnterHandler',
            'radioButtonInput.mouseleave': '_radioMouseLeaveHandler',
            'focus': '_focusHandler',
            'blur': '_blurHandler'

        };
    }

    static get styleUrls() {
        return [
            'smart.radiobutton.css'
        ]
    }

    _radioMouseEnterHandler() {
        const that = this;

        that.$.setAttributeValue('hover', true);
    }

    _radioMouseLeaveHandler() {
        const that = this;

        that.$.setAttributeValue('hover', false);
    }

    _focusHandler() {
        const that = this;

        that.$.setAttributeValue('focus', true);
    }

    _blurHandler() {
        const that = this;

        that.$.setAttributeValue('focus', false);
    }

    _mouseEnterHandler() {
        const that = this;

        that.$.setAttributeValue('hover', true);
    }

    _mouseLeaveHandler() {
        const that = this;

        that.$.setAttributeValue('hover', false);
    }


    /** Called when the element is ready. Used for one-time configuration of the RadioButton. */
    ready() {
        const that = this;

        super.ready();
        that._handleMultipleCheckedInstances();
        that._updateHidenInputNameAndValue();
    }

    /**
     * Radio button down handler.
     */
    _downHandler(event) {
        const that = this,
            target = that.enableShadowDOM ? event.originalEvent.composedPath()[0] : event.originalEvent.target;

        if (that.disabled || that.readonly ||
            that.checkMode === 'input' && target !== that.$.radioButtonInput ||
            that.checkMode === 'label' && target !== that.$.radioButtonLabel) {
            return;
        }

        that.$.setAttributeValue('active', true);

        if (that.hasRippleAnimation) {
            const rect = that.$.radioButtonInput.getBoundingClientRect(),
                windowScrollX = window.scrollX || window.pageXOffset,
                windowScrollY = window.scrollY || window.pageYOffset;

            Smart.Utilities.Animation.Ripple.animate(that.$.radioButtonInput, rect.left + rect.width / 2 + windowScrollX, rect.top + rect.height / 2 + windowScrollY);
        }

        if (that._preventAction) {
            that._preventAction = false;
            return;
        }

        if (that.clickMode === 'release' || that.clickMode === 'pressAndRelease') {
            that._pressed = true;
        }

        if (that.clickMode === 'press' || that.clickMode === 'pressAndRelease') {
            if (that.clickMode === 'pressAndRelease') {
                if (that.groupName === '') {
                    that._checkedBeforeChange = that.parentNode.querySelector('smart-radio-button[checked]');
                }
                else {
                    that._checkedBeforeChange = document.querySelector('smart-radio-button[group-name="' + that.groupName + '"][checked]');
                }
            }

            that._handleMouseInteraction();
        }
    }

    /**
     * Radio button mouseenter handler.
     */
    _elementMouseEnterHandler() {
        const that = this;

        if (that.clickMode === 'hover' && !that.disabled && !that.readonly) {
            that._handleMouseInteraction();
        }
    }

    /**
     * Document up handler.
     */
    _documentUpHandler(event) {
        const that = this,
            target = that.enableShadowDOM ? event.originalEvent.composedPath()[0] : event.originalEvent.target;

        if (!that._pressed || that.disabled || that.readonly ||
            that.checkMode === 'input' && target !== that.$.radioButtonInput ||
            that.checkMode === 'label' && target !== that.$.radioButtonLabel) {
            return;
        }

        if (that.clickMode === 'release') {
            that._handleMouseInteraction();
        }
        else {
            // clickMode: 'pressAndRelease'
            if (that._checkedBeforeChange === null) {
                that.$.fireEvent('change', { 'value': false, 'oldValue': true, 'changeType': 'pointer' });
                that.checked = false;
            }
            else {
                that._checkedBeforeChange._changeCheckState('pointer');
            }

            that.focus();
            that._updateHidenInputNameAndValue();
        }

        that.$.setAttributeValue('active', false);

        that._pressed = false;
    }

    /**
     * Handles interaction with the mouse.
     */
    _handleMouseInteraction() {
        const that = this;

        that._handleTextSelection();

        that._changeCheckState('pointer');
        that.focus();
        that._updateHidenInputNameAndValue();
    }

    /**
     * Reduce checked items in group to 1(latest selected item)
     */
    _handleMultipleCheckedInstances() {
        const that = this,
            checkedRadioButtons = Array.from(document.querySelectorAll('smart-radio-button[group-name="' + that.groupName + '"][checked]')),
            count = checkedRadioButtons.length;

        if (count < 2) {
            return;
        }

        checkedRadioButtons.forEach((item, i) => (i < (count - 1)) && (item.checked = false));

    }

    /** Changes the check state. */
    _changeCheckState(changeType) {
        const that = this;

        let radioButtonsGroup = document.querySelectorAll('smart-radio-button[group-name="' + that.groupName + '"]');

        if ((that.checked === true && changeType === 'api') || (that.checked === false)) {
            if (radioButtonsGroup.length > 0) {
                that._changeCheckStateInGroup(radioButtonsGroup, changeType);
            }
            else {
                let parent = that.parentNode;
                radioButtonsGroup = parent.querySelectorAll('smart-radio-button:not([group-name])');
                that._changeCheckStateInGroup(radioButtonsGroup, changeType);
            }
        }
    }

    /** Changes the check states in group of radio buttons. */
    _changeCheckStateInGroup(elements, changeType) {
        const that = this;

        for (let i = 0; i < elements.length; i++) {
            elements[i]._isUpdating = true;

            if (elements[i] === that) {
                that.checked = true;
                that.$.fireEvent('change', { 'value': true, 'oldValue': false, 'changeType': changeType });
            }
            else if (elements[i].checked) {
                elements[i].checked = false;
            }

            elements[i]._isUpdating = false;
        }
    }

    /**
    * Updates the radio button/radio group when checked property is changed.
    * @param {string} propertyName The name of the property.
    * @param {number/string} oldValue The previously entered value. Max, min and value are of type Number. The rest are of type String.
    * @param {number/string} newValue The new entered value. Max, min and value are of type Number. The rest are of type String.
    */
    propertyChangedHandler(propertyName, oldValue, newValue) {
        const that = this;

        switch (propertyName) {
            case 'value':
                that._updateHidenInputNameAndValue();
                break;
            case 'checked':
                if (!that._isUpdating) {
                    that._changeCheckState('api');
                }
                that._updateHidenInputNameAndValue();
                break;
            case 'name':
                that._updateHidenInputName();
                break;
            default:
                super.propertyChangedHandler(propertyName, oldValue, newValue);
                break;
        }
    }
});
