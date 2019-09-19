
/* Smart HTML Elements v4.5.0 (2019-Sep) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

/**
* ScrollBar custom element.
*/
Smart('smart-scroll-bar', class ScrollBar extends Smart.BaseElement {
    // ScrollBar's properties.
    static get properties() {
        return {
            'clickRepeatDelay': {
                type: 'integer',
                value: 50
            },
            'largeStep': {
                type: 'integer',
                value: 100
            },
            'min': {
                type: 'integer',
                value: 0
            },
            'max': {
                type: 'integer',
                value: 1000
            },
            'mechanicalAction': {
                value: 'switchWhileDragging',
                allowedValues: ['switchUntilReleased', 'switchWhenReleased', 'switchWhileDragging'],
                type: 'string'
            },
            'orientation': {
                type: 'string',
                value: 'horizontal',
                allowedValues: ['horizontal', 'vertical']
            },
            'step': {
                type: 'integer',
                value: 10
            },
            'showButtons': {
                type: 'boolean',
                value: true,
                defaultReflectToAttribute: true
            },
            'value': {
                type: 'integer',
                value: 0
            }
        };
    }

    static get styleUrls() {
        return [
            'smart.scrollbar.css'
        ]
    }

    /** ScrollBar's template. */
    template() {
        const template =
            `<div id="container" class="smart-container">
                    <div id="nearButton" class ="smart-scroll-button smart-arrow-left"></div>
                    <div  id="track" class ="smart-track">
                        <div id="thumb" class="smart-thumb"></div>
                    </div>
                    <div id="farButton" class ="smart-scroll-button smart-arrow-right"></div>
            </div>`;

        return template;
    }

    static get listeners() {
        return {
            'nearButton.click': '_nearButtonClickHandler',
            'nearButton.mousedown': '_startRepeat',
            'nearButton.mouseup': '_stopRepeat',
            'nearButton.mouseenter': '_updateInBoundsFlag',
            'nearButton.mouseleave': '_updateInBoundsFlag',
            'farButton.click': '_farButtonClickHandler',
            'farButton.mousedown': '_startRepeat',
            'farButton.mouseup': '_stopRepeat',
            'farButton.mouseenter': '_updateInBoundsFlag',
            'farButton.mouseleave': '_updateInBoundsFlag',
            'track.down': '_trackDownHandler',
            'track.click': '_trackClickHandler',
            'thumb.down': '_dragStartHandler',
            'document.move': '_dragHandler',
            'document.up': '_dragEndHandler',
            'up': '_dragEndHandler',
            'document.selectstart': '_selectStartHandler',
            'resize': '_resizeHandler'
        };
    }

    _updateInBoundsFlag(event) {
        const that = this;

        const button = event.target;

        button._isPointerInBounds = true;

        if (event.type === 'mouseleave') {
            button._isPointerInBounds = false;
        }

        const buttons = ('buttons' in event) ? event.buttons : event.which;
        if (buttons !== 1) {
            that._stopRepeat(event);
        }
    }

    _startRepeat(event) {
        const that = this;

        if (that.disabled) {
            return;
        }

        const button = event.target;

        if (!button._initialTimer) {
            button._initialTimer = setTimeout(function () {
                button._repeatTimer = setInterval(() => {
                    if (button._isPointerInBounds) {
                        const buttons = ('buttons' in event) ? event.buttons : event.which;

                        button.$.fireEvent('click', { buttons: buttons, clientX: event.clientX, clientY: event.clientY, pageX: event.pageX, pageY: event.pageY, screenX: event.screenX, screenY: event.screenY });
                    }
                }, that.clickRepeatDelay);
            }, 3 * that.clickRepeatDelay);
        }
    }

    _stopRepeat(event) {
        const that = this;

        if (that.disabled) {
            return;
        }

        const button = event.target;

        if (button._repeatTimer) {
            clearInterval(button._repeatTimer);
            button._repeatTimer = null;
        }

        if (button._initialTimer) {
            clearTimeout(button._initialTimer);
            button._initialTimer = null;
        }
    }

    _calculateThumbSize(scrollAreaSize) {
        const that = this;
        const positions = that.max - that.min;
        const enoughSpace = that.orientation === 'horizontal' ?
            that.$.track.offsetWidth > 10 : that.$.track.offsetHeight > 10;
        let size = 0;

        if (positions >= 1 && enoughSpace) {
            size = (scrollAreaSize / (positions + scrollAreaSize) * scrollAreaSize);

            if (that.$.thumb.className.indexOf('smart-hidden') >= 0) {
                that.$thumb.removeClass('smart-hidden');
            }
        }
        else {
            that.$thumb.addClass('smart-hidden');
        }

        return Math.max(10, Math.min(size, scrollAreaSize));
    }

    _dragStartHandler(event) {
        const that = this;

        if (that.disabled) {
            return;
        }

        that.thumbCapture = true;
        that.dragStartX = event.clientX;
        that.dragStartY = event.clientY;

        that.dragStartValue = that.value;

        event.stopPropagation();
        event.preventDefault();
    }

    _dragHandler(event) {
        const that = this;

        if (that.thumbCapture !== true) {
            return;
        }

        that._isThumbDragged = true;

        const ratio = (that.max - that.min) / (that.scrollBarSize - that.thumbSize);
        const offsetValue = that.orientation === 'horizontal' ? (event.clientX - that.dragStartX) * ratio : (event.clientY - that.dragStartY) * ratio;
        let step = offsetValue;


        if (that.rightToLeft && that.orientation === 'horizontal') {
            step = -offsetValue;
        }

        that._updateValue(that.dragStartValue + step);

        event.stopPropagation();
        event.preventDefault();

        if (event.originalEvent) {
            event.originalEvent.stopPropagation();
            event.originalEvent.preventDefault();
        }
    }

    _dragEndHandler(event) {
        const that = this;

        if (that._trackDownTimer) {
            clearInterval(that._trackDownTimer);
            that._trackDownTimer = null;
        }

        if (!that.thumbCapture) {
            return;
        }


        that.thumbCapture = false;
        that._isThumbDragged = false;

        if (that.mechanicalAction === 'switchWhenReleased') {
            that._updateValue(that.dragStartValue, that.value);
        }
        else if (this.mechanicalAction === 'switchUntilReleased') {
            that._updateValue(that.dragStartValue);
        }

        event.preventDefault();
        event.stopPropagation();

        event.originalEvent.preventDefault();
        event.originalEvent.stopPropagation();
    }

    _farButtonClickHandler() {
        const that = this;

        if (that.disabled) {
            return;
        }

        const value = that.value;

        that._updateValue(that.value + that.step);

        if (that.mechanicalAction === 'switchUntilReleased') {
            that._updateValue(value);
        }
    }

    _nearButtonClickHandler() {
        const that = this;

        if (that.disabled) {
            return;
        }

        const value = that.value;

        that._updateValue(that.value - that.step);

        if (that.mechanicalAction === 'switchUntilReleased') {
            that._updateValue(value);
        }
    }

    propertyChangedHandler(propertyName, oldValue, newValue) {
        super.propertyChangedHandler(propertyName, oldValue, newValue);

        const that = this;

        switch (propertyName) {
            case 'min':
            case 'max':
            case 'orientation':
            case 'showButtons': {
                that._layout();
                break;
            }
            case 'value':
                that._updateValue(oldValue, newValue);
                break;
            default: {
                that._layout();
            }
        }
    }

    ready() {
        super.ready();

        const that = this;

        that._layout();
    }

    _resizeHandler() {
        const that = this;

        that._layout();
    }

    refresh() {
        const that = this;

        that._layout();
    }

    _layout() {
        const that = this;

        that.scrollBarSize = that.orientation === 'horizontal' ? that.$.track.offsetWidth : that.$.track.offsetHeight;
        that.thumbSize = that._calculateThumbSize(that.scrollBarSize);

        if (that.orientation === 'horizontal' && (that.$.thumb.style.width !== that.thumbSize + 'px')) {
            that.$.thumb.style.width = that.thumbSize + 'px';
        }
        else if (that.orientation === 'vertical' && (that.$.thumb.style.height !== that.thumbSize + 'px')) {
            that.$.thumb.style.height = that.thumbSize + 'px';
        }

        if (that.orientation === 'horizontal') {
            if (that.$.nearButton.classList.contains('smart-arrow-up')) {
                that.$.nearButton.classList.remove('smart-arrow-up');
            }

            if (that.$.farButton.classList.contains('smart-arrow-down')) {
                that.$.farButton.classList.remove('smart-arrow-down');
            }

            if (!that.$.nearButton.classList.contains('smart-arrow-left')) {
                that.$.nearButton.classList.add('smart-arrow-left');
            }

            if (!that.$.farButton.classList.contains('smart-arrow-right')) {
                that.$.farButton.classList.add('smart-arrow-right');
            }
        }
        else {
            if (that.$.nearButton.classList.contains('smart-arrow-left')) {
                that.$.nearButton.classList.remove('smart-arrow-left');
            }

            if (that.$.farButton.classList.contains('smart-arrow-right')) {
                that.$.farButton.classList.remove('smart-arrow-right');
            }

            if (!that.$.nearButton.classList.contains('smart-arrow-up')) {
                that.$.nearButton.classList.add('smart-arrow-up');
            }

            if (!that.$.farButton.classList.contains('smart-arrow-down')) {
                that.$.farButton.classList.add('smart-arrow-down');
            }
        }


        that._updateThumbPosition();

        if (that.value > that.max || that.value < that.min) {
            that._updateValue(that.value, that.value > that.max ? that.max : that.min);
        }
    }

    _selectStartHandler(event) {
        const that = this;

        if (that.thumbCapture) {
            event.preventDefault();
        }
    }

    _trackDownHandler(event) {
        const that = this;

        if (event.target !== that.$.track) {
            return;
        }

        if (that._trackDownTimer) {
            clearInterval(that._trackDownTimer);
        }

        if (that.thumbCapture) {
            return;
        }

        that._trackDownTimer = setInterval(function () {
            that._trackClickHandler(event);
        }, that.clickRepeatDelay);

        event.stopPropagation();
        event.preventDefault();
    }

    _trackClickHandler(event) {
        const that = this;

        if (that.disabled) {
            return;
        }

        if (that._isThumbDragged) {
            clearInterval(that._trackDownTimer);
            that._trackDownTimer = null;
            return;
        }

        const thumbRect = that.$.thumb.getBoundingClientRect();
        const x = event.pageX - window.pageXOffset;
        const y = event.pageY - window.pageYOffset;

        const value = that.value;

        if (that.orientation === 'horizontal') {
            if (x > (that._isThumbDragged ? that.dragStartX : thumbRect.right)) {
                that._updateValue(that.value + that.largeStep);
            }
            else if (x < (that._isThumbDragged ? that.dragStartX : thumbRect.left)) {
                that._updateValue(that.value - that.largeStep);
            }
        }
        else {
            if (y > (that._isThumbDragged ? that.dragStartY : thumbRect.bottom)) {
                that._updateValue(that.value + that.largeStep);
            }
            else if (y < (that._isThumbDragged ? that.dragStartY : thumbRect.top)) {
                that._updateValue(that.value - that.largeStep);
            }
        }

        if (that.mechanicalAction === 'switchUntilReleased') {
            that._updateValue(value);
        }
    }

    _updateValue(oldValue, newValue) {
        const that = this;

        if (arguments.length === 1) {
            newValue = oldValue;
            oldValue = that.value;
        }

        if (newValue === undefined || isNaN(newValue)) {
            newValue = that.min;
        }

        if (newValue > that.max) {
            newValue = that.max;
        }

        if (newValue < that.min) {
            newValue = that.min;
        }

        that.value = newValue;

        if (oldValue !== newValue) {
            that._updateThumbPosition();

            if (that.thumbCapture && that.mechanicalAction === 'switchWhenReleased') {
                return;
            }

            if (that.onChange) {
                that.onChange({ 'value': that.value, 'oldValue': oldValue, min: that.min, max: that.max });
                return;
            }

            that.$.fireEvent('change', { 'value': that.value, 'oldValue': oldValue, min: that.min, max: that.max });
        }
    }

    _updateThumbPosition() {
        const that = this;

        const height = that.$.track.offsetHeight;
        const width = that.$.track.offsetWidth;

        const scrollBarSize = (that.orientation === 'horizontal') ? width : height;
        const thumbSize = that._calculateThumbSize(scrollBarSize);
        const maxThumbPosition = (that.orientation === 'horizontal') ? width - thumbSize : height - thumbSize;

        let thumbPosition = (scrollBarSize - thumbSize) / (that.max - that.min) * (that.value - that.min);

        if (that.rightToLeft && that.orientation === 'horizontal') {
            thumbPosition = (scrollBarSize - thumbSize) / (that.max - that.min) * (that.max - that.value - that.min);
        }

        thumbPosition = Math.min(maxThumbPosition, Math.max(0, thumbPosition));

        if (that.orientation === 'vertical' && (that.$.thumb.style.top !== thumbPosition + 'px')) {
            that.$.thumb.style.top = thumbPosition + 'px';
        }
        else if (that.orientation === 'horizontal' && (that.$.thumb.style.left !== thumbPosition + 'px')) {
            that.$.thumb.style.left = thumbPosition + 'px';
        }
    }
});


