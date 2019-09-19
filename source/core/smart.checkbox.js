
/* Smart HTML Elements v4.5.0 (2019-Sep) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

/**
* CheckBox custom element.
*/
Smart('smart-check-box', class CheckBox extends Smart.ToggleButton {
    // CheckBox's properties.
    static get properties() {
        return {
            'checkMode': {
                value: 'both',
                allowedValues: ['both', 'input', 'label'],
                type: 'string'
            },
            'type': {
                value: 'checkbox',
                type: 'string',
                defaultReflectToAttribute: true,
                readonly: true
            }
        };
    }

    /** CheckBox's Html template. */
    template() {
        return `<div id='container' class='smart-container'>
                 <div class ='smart-overlay'></div>
                 <span id='checkBoxInput' class ='smart-input'></span>
                 <span id='checkBoxLabel' inner-h-t-m-l='[[innerHTML]]' class ='smart-label'><content></content></span>
                 <input id='hiddenInput' class ='smart-hidden-input' type='hidden'>
               </div>`;
    }

    static get listeners() {
        return {
            'down': '_downHandler',
            'document.up': '_documentUpHandler',
            'checkBoxInput.mouseenter': '_mouseEnterHandler',
            'checkBoxInput.mouseleave': '_mouseLeaveHandler',
            'focus': '_focusHandler',
            'blur': '_blurHandler'
        };
    }


    /**
    * CSS files needed for the element (ShadowDOM)
    */
    static get styleUrls() {
        return [
            'smart.checkbox.css'
        ]
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

    /** Called when the element is ready. Used for one-time configuration of the CheckBox. */
    ready() {
        const that = this;

        super.ready();

        if (that.indeterminate) {
            that._valueCashe = that.checked;
            that.checked = null;
        }

        that._updateHidenInputNameAndValue();
    }

    /**
  * Updates CheckBox when a property is changed.
  * @param {string} propertyName The name of the property.
  * @param {number/string} oldValue The previously entered value.
  * @param {number/string} newValue The new entered value.
  */
    propertyChangedHandler(propertyName, oldValue, newValue) {
        super.propertyChangedHandler(propertyName, oldValue, newValue);

        const that = this;

        that._updateContentProperties();

        switch (propertyName) {
            case 'indeterminate':
                if (newValue) {
                    that._valueCashe = that.checked;
                    that.checked = null;
                }
                else {
                    that.checked = that._valueCashe;
                }
                that._updateHidenInputNameAndValue();
                break;
            case 'value':
                that._updateHidenInputNameAndValue();
                break;
            case 'checked':
                that._updateHidenInputNameAndValue();
                break;
            case 'name':
                that._updateHidenInputName();
                break;
        }
    }

    /** Changes the check state on click. */
    _documentUpHandler(event) {
        const that = this,
            target = that.enableShadowDOM ? event.originalEvent.composedPath()[0] : event.originalEvent.target;

        if (!that._pressed) {
            return;
        }

        that._pressed = false;
        that.$.setAttributeValue('active', false);

        if (that.disabled || that.readonly ||
            that.checkMode === 'input' && target !== that.$.checkBoxInput ||
            that.checkMode === 'label' && target !== that.$.checkBoxLabel) {
            return;
        }

        if (that.clickMode === 'press') {
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        that._changeCheckState('pointer');
        that.focus();
        that._handleTextSelection();
        that._updateHidenInputNameAndValue();
    }

    /** Changes the check state on mouse down. */
    _downHandler(event) {
        const that = this,
            target = that.enableShadowDOM ? event.originalEvent.composedPath()[0] : event.originalEvent.target;

        if (that.disabled || that.readonly ||
            that.checkMode === 'input' && target !== that.$.checkBoxInput ||
            that.checkMode === 'label' && target !== that.$.checkBoxLabel) {
            return;
        }

        that.$.setAttributeValue('active', true);

        if (that.hasRippleAnimation) {
            const rect = that.$.checkBoxInput.getBoundingClientRect(),
                windowScrollX = window.scrollX || window.pageXOffset,
                windowScrollY = window.scrollY || window.pageYOffset;

            Smart.Utilities.Animation.Ripple.animate(that.$.checkBoxInput, rect.left + rect.width / 2 + windowScrollX, rect.top + rect.height / 2 + windowScrollY);
        }

        that._pressed = true;

        if (that.clickMode === 'press' || that.clickMode === 'pressAndRelease') {
            that._changeCheckState('pointer');
            that.$.fireEvent('click');
            that.focus();
            that._updateHidenInputNameAndValue();
        }
    }
});
