
/* Smart HTML Elements v4.5.0 (2019-Sep) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */


/**
* List Item custom element.
*/
Smart('smart-list-item', class Item extends Smart.ContentElement {
    // Item's properties.
    static get properties() {
        return {
            'alternationIndex': {
                value: -1,
                type: 'int'
            },
            'color': {
                value: '',
                type: 'string'
            },
            'displayMode': {
                allowedValues: ['plain', 'checkBox', 'radioButton'],
                value: 'plain',
                type: 'string'
            },
            'grouped': {
                value: false,
                type: 'boolean'
            },
            'selected': {
                value: false,
                type: 'boolean'
            },
            'value': {
                value: '',
                type: 'string'
            },
            'label': {
                value: '',
                type: 'string'
            },
            'details': {
                value: '',
                type: 'string'
            },
            'group': {
                value: '',
                type: 'string'
            },
            'hidden': {
                value: false,
                type: 'boolean'
            },
            'readonly': {
                value: false,
                type: 'boolean'
            }
        };
    }

    get hasStyleObserver() {
        return false;
    }

    get enableShadowDOM() {
        return false;
    }

    get _focused() {
        const that = this;

        if (that.__focused === undefined) {
            that.__focused = false;
        }

        return that.__focused;
    }

    set _focused(value) {
        const that = this;

        that.__focused = value;

        if (value) {
            that.setAttribute('focus', '');
        }
        else {
            that.removeAttribute('focus');
        }
    }
    /**
    * smart-list-item's template.
    */
    template() {
        return `<div id="container">
                   <span id='itemInput' class ='smart-input smart-hidden'></span>
                    <span class ="smart-overlay" id="overlay"></span>
                    <div id="itemContainer" class ="smart-content smart-list-item-container"><span class="smart-content-label" inner-h-t-m-l=\'[[innerHTML]]\'><content></content></span><span inner-h-t-m-l=\'[[details]]\' id="details" class="smart-content-details"></span></div>
                </div>`;
    }

    appendChild(node) {
        const that = this;

        if (!that.isCompleted || node.classList.contains('smart-ripple')) {
            const args = Array.prototype.slice.call(arguments, 2);
            return HTMLElement.prototype.appendChild.apply(that, args.concat(Array.prototype.slice.call(arguments)));
        }

        that.$.itemContainer.innerHTML = '';

        if (node instanceof HTMLElement) {
            that.$.itemContainer.appendChild(node);
        }
    }

    insertBefore(newNode, referenceNode) {
        const that = this;

        if (!that.isCompleted) {
            const args = Array.prototype.slice.call(arguments, 2);
            return HTMLElement.prototype.insertBefore.apply(that, args.concat(Array.prototype.slice.call(arguments)));
        }

        referenceNode.parentNode.insertBefore(newNode, referenceNode);
    }

    removeChild(node) {
        const that = this;

        if (!that.isCompleted || node.classList.contains('smart-ripple')) {
            const args = Array.prototype.slice.call(arguments, 2);
            return HTMLElement.prototype.removeChild.apply(that, args.concat(Array.prototype.slice.call(arguments)));
        }

        if (node instanceof HTMLElement) {
            that.$.itemContainer.removeChild(node);
        }
    }

    attached() {
        const that = this;

        super.attached();

        that.ownerListBox = that.getListBox();
    }

    /**
    * smart-list-item's event listeners.
    **/
    static get listeners() {
        return {
            'mouseenter': '_itemOnMouseEnter',
            'mouseleave': '_itemOnMouseLeave'
        };
    }

    /**
    * Called when the element is ready. Used for one-time configuration of the Item.
    */
    ready() {
        super.ready();

        const that = this;

        if (that.label !== '') {
            that.innerHTML = that.label;
        }
        else if (that.innerHTML !== '') {
            that.label = that.innerHTML;
        }

        that._setDisplayMode(that.displayMode);
        that._setItemColor();

        that.$.container.noRipple = true;
    }


    /**
    * Called when a property is changed.
    */
    propertyChangedHandler(propertyName, oldValue, newValue) {
        const that = this;

        super.propertyChangedHandler(propertyName, oldValue, newValue);

        if (propertyName === 'hidden') {
            if (!newValue) {
                that.$.removeClass('smart-hidden');
            }
            else {
                that.$.addClass('smart-hidden');
            }
        }

        else if (propertyName === 'color') {
            that._setItemColor();
        }
        else if (propertyName === 'displayMode') {
            that._setDisplayMode(newValue);
        }
        else if (propertyName === 'label') {
            const context = that.context;
            that.context = document;
            that.innerHTML = newValue;

            const listBox = that.getListBox();
            listBox.onItemUpdated(that);
            that.context = context;
        }
        else if (propertyName === 'details') {
            const context = that.context;
            that.context = document;
            that.$.details.innerHTML = newValue;

            const listBox = that.getListBox();
            listBox.onItemUpdated(that);
            that.context = context;
        }
        else if (propertyName === 'innerHTML') {
            const listBox = that.getListBox();
            listBox.onItemUpdated(that);
        }
    }

    getListBox() {
        const that = this;

        let parent = that.parentNode;
        while (parent instanceof Smart.ListBox === false && parent !== null) {
            parent = parent.parentNode;
        }

        if (!parent && Smart.EnableShadowDOM) {
            return that.getRootNode().host;
        }

        return parent;
    }

    /**
  * Item onMouseEnter event handler.
  */
    _itemOnMouseEnter() {
        const that = this;

        if (that.disabled || !that.ownerListBox) {
            return;
        }

        if (Smart.ListBox.DragDrop.Dragging && that.ownerListBox.allowDrop) {
            Smart.ListBox.DragDrop.DropDetails = { item: that, position: 'bottom' };
        }

        if (that.ownerListBox.$.verticalScrollBar.thumbCapture || that.ownerListBox.$.horizontalScrollBar.thumbCapture) {
            return;
        }

        that.setAttribute('hover', '');
    }

    /**
     * Item onMouseMove event handler.
    */
    _itemOnMouseMove(event) {
        const that = this;

        if (!that.ownerListBox) {
            return;
        }

        if (Smart.ListBox.DragDrop.Dragging && that.ownerListBox.allowDrop && !Smart.Utilities.Core.isMobile) {
            const itemsWithFeedback = [].slice.call(that.ownerListBox.getElementsByClassName('smart-list-item-bottom-line-feedback'));

            for (let i = 0; i < itemsWithFeedback.length; i++) {
                itemsWithFeedback[i].$.removeClass('smart-list-item-line-feedback');
                itemsWithFeedback[i].$.removeClass('smart-list-item-bottom-line-feedback');
            }

            Smart.ListBox.DragDrop.DropDetails = { item: that, position: 'top' };
            if (!that.ownerListBox._areCSSVarsSupported) {
                if (that.ownerListBox._indexOf(that) === that.ownerListBox._items.length - 1 || that.parentNode.lastElementChild === that) {
                    const rect = that.getBoundingClientRect();

                    if (event.pageY - window.pageYOffset > rect.top + (rect.height / 2) - 1) {
                        Smart.ListBox.DragDrop.DropDetails = { item: that, position: 'bottom' };
                    }
                }
                return;
            }

            that.$.removeClass('smart-list-item-line-feedback');
            that.$.removeClass('smart-list-item-bottom-line-feedback');

            if (that.ownerListBox.sorted && that.ownerListBox.autoSort) {
                return;
            }

            const visibleItems = that.ownerListBox._items.filter(item => !item.hidden);

            if (visibleItems.indexOf(that) === visibleItems.length - 1 || that.parentNode.lastElementChild === that) {
                const rect = that.getBoundingClientRect();

                if (event.pageY - window.pageYOffset > rect.top + (rect.height / 2) - 1) {
                    that.$.addClass('smart-list-item-bottom-line-feedback');
                    Smart.ListBox.DragDrop.DropDetails = { item: that, position: 'bottom' };
                }
                else if (!arguments[1]) {
                    that.$.addClass('smart-list-item-line-feedback');
                }
            }
            else if (!arguments[1]) {
                that.$.addClass('smart-list-item-line-feedback');
            }
        }
    }

    /**
    * Item onMouseLeave event handler.
    */
    _itemOnMouseLeave() {
        const that = this;

        if (!that.ownerListBox) {
            return;
        }

        if (Smart.ListBox.DragDrop.Dragging) {
            that.$.removeClass('smart-list-item-line-feedback');
            that.$.removeClass('smart-list-item-bottom-line-feedback');
        }

        that.removeAttribute('hover');
    }

    _setDisplayMode(value) {
        const that = this;

        const listBox = that.getListBox();

        if (listBox) {
            const displayMode = listBox.selectionMode === 'checkBox' || listBox.selectionMode === 'radioButton' ? listBox.selectionMode : 'plain';

            that.displayMode = value = displayMode;
        }

        if (value === 'plain') {
            that.$itemInput.addClass('smart-hidden');
            return;
        }

        that.$itemInput.removeClass('smart-hidden');
    }

    /**
     * Set's the color property
     */
    _setItemColor() {
        const that = this,
            label = that.querySelector('.smart-content-label'),
            color = /(^#[0-9A-F]{3}$)|(^#[0-9A-F]{6}$)|(^#[0-9A-F]{8}$)/i.test(that.color) ? that.color : ''; //HEX check

        label.style.backgroundColor = color;
        label.style.color = that._getContrastColor(color);
    }

    /**
    * Returns a contrasting color of the target color
    * @param {any} color - HEX
    */
    _getContrastColor(color) {
        if (!color) {
            return '';
        }

        function hexToRgb(h, e, x) {
            return [parseInt(h, 16), parseInt(e, 16), parseInt(x, 16)];
        }

        let rgb = hexToRgb(color.slice(1, 3), color.slice(3, 5), color.slice(5, 7)),
            luminance = (0.299 * rgb[0] + 0.61 * rgb[1] + 0.114 * rgb[2]) / 255;

        if (parseFloat(luminance.toFixed(2)) > 0.65) {
            return '#000000';
        }
        else {
            return '#FFFFFF';
        }
    }
});

/**
* List Items Group custom element.
*/
Smart('smart-list-items-group', class ListItemsGroup extends Smart.ContentElement {
    // Item's properties.
    static get properties() {
        return {
            'label': {
                value: '',
                type: 'string'
            }
        };
    }

    get enableShadowDOM() {
        return false;
    }

    /**
    * smart-list-items-group's template.
    */
    template() {
        return `<div id="container">
                 <span id="itemsLabel" class ="smart-list-items-group-label">[[label]]</span>
                 <div id="listItemsGroupContainer" inner-h-t-m-l=\'[[innerHTML]]\' class ="smart-list-items-group-container">
                    <content></content>
                 </div>
               </div>`;
    }

    appendChild(node) {
        const that = this;

        if (!that.isCompleted) {
            const args = Array.prototype.slice.call(arguments, 2);
            return HTMLElement.prototype.appendChild.apply(that, args.concat(Array.prototype.slice.call(arguments)));
        }

        if (node instanceof HTMLElement) {
            that.$.listItemsGroupContainer.appendChild(node);
        }
    }

    removeChild(node) {
        const that = this;

        if (!that.isCompleted) {
            const args = Array.prototype.slice.call(arguments, 2);
            return HTMLElement.prototype.removeChild.apply(that, args.concat(Array.prototype.slice.call(arguments)));
        }

        if (node instanceof HTMLElement) {
            that.$.listItemsGroupContainer.removeChild(node);
        }
    }

    getListBox() {
        const that = this;

        let parent = that.parentNode;
        while (parent instanceof Smart.ListBox === false && parent !== null) {
            parent = parent.parentNode;
        }

        return parent;
    }

    attached() {
        const that = this;

        super.attached();

        if (!that.ownerListBox) {
            that.ownerListBox = that.getListBox();
        }
    }
});
/**
* List box custom element.
*/
Smart('smart-list-box', class ListBox extends Smart.ScrollViewer {

    /** 
    * ListBox's properties 
    */
    static get properties() {
        return {
            'allowDrag': {
                value: false,
                type: 'boolean'
            },
            'allowDrop': {
                value: false,
                type: 'boolean'
            },
            'alternationStart': {
                value: 0,
                type: 'int'
            },
            'alternationEnd': {
                value: 0,
                type: 'int'
            },
            'alternationCount': {
                value: 0,
                type: 'int'
            },
            'autoSort': {
                value: true,
                type: 'boolean'
            },
            'dataSource': {
                value: null,
                type: 'any?',
                reflectToAttribute: false
            },
            'dragFeedbackFormatFunction': {
                value: null,
                type: 'function?'
            },
            'dragOffset': {
                value: [10, 10],
                type: 'array'
            },
            'displayLoadingIndicator': {
                value: false,
                type: 'boolean'
            },
            'displayMember': {
                value: '',
                type: 'string'
            },
            'shadowDomMode': {
                allowedValues: ['light', 'shadow'],
                value: 'shadow',
                type: 'string'
            },
            'dropAction': {
                value: 'move',
                type: 'string',
                allowedValues: ['copy', 'move', 'none']
            },
            'editable': {
                value: false,
                type: 'boolean'
            },
            'filterable': {
                value: false,
                type: 'boolean'
            },
            'filterCallback': {
                value: null,
                type: 'function?'
            },
            'filterMode': {
                value: 'containsIgnoreCase',
                allowedValues: ['contains', 'containsIgnoreCase', 'doesNotContain', 'doesNotContainIgnoreCase', 'equals', 'equalsIgnoreCase', 'startsWith', 'startsWithIgnoreCase', 'endsWith', 'endsWithIgnoreCase', 'custom'],
                type: 'string'
            },
            'filterInputPlaceholder': {
                value: '',
                type: 'string'
            },
            'grouped': {
                value: false,
                type: 'boolean'
            },
            'groupMember': {
                value: '',
                type: 'string'
            },
            'itemTemplate': {
                value: null,
                type: 'any'
            },
            'itemHeight': {
                value: null,
                type: 'number?'
            },
            'incrementalSearchDelay': {
                value: 700,
                type: 'number?'
            },
            'incrementalSearchMode': {
                value: 'startsWithIgnoreCase',
                allowedValues: ['contains', 'containsIgnoreCase', 'doesNotContain', 'doesNotContainIgnoreCase', 'equals', 'equalsIgnoreCase', 'startsWith', 'startsWithIgnoreCase', 'endsWith', 'endsWithIgnoreCase'],
                type: 'string'
            },
            'loadingIndicatorPlaceholder': {
                value: 'Loading...',
                type: 'string'
            },
            'loadingIndicatorPosition': {
                value: 'center',
                allowedValues: ['bottom', 'center', 'top'],
                type: 'string'
            },
            'messages': {
                extend: true,
                value: {
                    'en': {
                        'overridingProperties': '{{elementType}}: Overriding properties {{property1}} and {{property2}} applied. The "{{property1}}" property is used by default.',
                        'invalidIndex': '{{elementType}}: "{{method}}" method accepts an index of type number or an Array of numbers.',
                        'indexOutOfBound': '{{elementType}}: Out of bound index/indexes in "{{method}}" method.',
                        'invalidItem': '{{elementType}}: "{{method}}" method accepts an object or an array of objects as it\'s second parameter.',
                        'invalidSettings': '{{elementType}}: "{{method}}" method accepts a string or an object as it\'s second parameter.'
                    }
                },
                type: 'object'
            },
            'name': {
                value: '',
                type: 'string'
            },
            'placeholder': {
                value: 'No Items',
                type: 'string'
            },
            'selectedIndexes': {
                value: [],
                type: 'array'
            },
            'selectedValues': {
                value: [],
                type: 'array'
            },
            'selectionMode': {
                value: 'oneOrManyExtended',
                allowedValues: ['none', 'oneOrManyExtended', 'zeroOrMany', 'oneOrMany', 'zeroOrOne', 'one', 'checkBox', 'radioButton'],
                type: 'string'
            },
            'selectionChangeAction': {
                value: 'release',
                allowedValues: ['press', 'release'],
                type: 'string'
            },
            'sorted': {
                value: false,
                type: 'boolean'
            },
            'sortDirection': {
                value: 'asc',
                type: 'string'
            },
            'topVisibleIndex': {
                value: -1,
                type: 'int'
            },
            'type': {
                value: 'list',
                type: 'string',
                defaultReflectToAttribute: true,
                readonly: true
            },
            'valueMember': {
                value: '',
                type: 'string'
            },
            'virtualized': {
                value: false,
                type: 'boolean'
            }
        }
    }

    /**
    * ScrollViewer have it's shadowRoot set to false. So it needs to be predefined
    */
    get enableShadowDOM() {
        const that = this;
        const enableShadowDOM = Smart.EnableShadowDOM;

        if (that.isCompleted) {
            return that.shadowRoot !== null;
        }

        return enableShadowDOM;
    }

    /** 
    * ListBox's requires 
    */
    static get requires() {
        return {
            'Smart.ScrollBar': 'smart.scrollbar.js'
        }
    }

    static get styleUrls() {
        return [
            'smart.listbox.css',
            'smart.scrollbar.css'
        ]
    }


    /**
     * ListBox's event listeners.
     */
    static get listeners() {
        return {
            'focus': '_focusHandler',
            'blur': '_blurHandler',
            'container.wheel': '_mouseWheelHandler',
            'editInput.change': '_editInputEventHandler',
            'editInput.blur': '_editInputEventHandler',
            'editInput.keydown': '_editInputEventHandler',
            'horizontalScrollBar.change': '_horizontalScrollbarHandler',
            'itemsInnerContainer.down': '_downHandler',
            'itemsInnerContainer.dblclick': '_dblclickEventHandler',
            'itemsInnerContainer.move': '_itemsContainerMoveHandler',
            'itemsContainer.mouseleave': '_mouseLeaveHandler',
            'document.up': '_upHandler',
            'document.move': '_moveHandler',
            'keydown': '_keyDownHandler',
            'keyup': '_keyUpHandler',
            'resize': '_resizeHandler',
            'selectstart': '_selectStartHandler',
            'styleChanged': '_styleChangedHandler',
            'swipeleft': '_swipeLeftHandler',
            'swiperight': '_swipeRightHandler',
            'verticalScrollBar.change': '_verticalScrollbarHandler'
        };
    }

    /*
    * ListBox's HTML template.
    */
    template() {
        return `<div id="container" class="smart-container">
                 <div class="smart-list-box-filter-input-container smart-hidden" id="filterInputContainer">
                     <input id="filterInput" disabled="[[disabled]]" placeholder='[[filterInputPlaceholder]]'>
                 </div>
                 <div id="itemsContainer" class="smart-list-items-container">
                      <div id="placeholder" class ="smart-placeholder">[[placeholder]]</div>
                      <div id="itemsInnerContainer" inner-h-t-m-l=\'[[innerHTML]]\' class ="smart-list-items-inner-container">
                          <content></content>
                      </div>
                      <input type="text" id="editInput" class= "smart-hidden"/>
                 </div>
                 <smart-scroll-bar wait id="verticalScrollBar" disabled="[[disabled]]" orientation="vertical"></smart-scroll-bar>
                 <smart-scroll-bar wait id="horizontalScrollBar" disabled="[[disabled]]" ></smart-scroll-bar>
                 <div id="loadingIndicatorContainer" class ="smart-loader-container">
                    <span id="loadingIndicator" class="smart-loader"></span>
                    <span id="loadingIndicatorPlaceHolder" class ="smart-loader-label smart-hidden">[[loadingIndicatorPlaceholder]]</span>
                 </div>
                <input id="hiddenInput" type="hidden" name="[[name]]">
                </div>`;
    }

    _mouseLeaveHandler() {
        const that = this,
            itemsWithFeedback = [].slice.call(that.getElementsByClassName('smart-list-item-bottom-line-feedback'));

        //Remove Bottom Line feedbacks
        for (let i = 0; i < itemsWithFeedback.length; i++) {
            itemsWithFeedback[i].$.removeClass('smart-list-item-line-feedback');
            itemsWithFeedback[i].$.removeClass('smart-list-item-bottom-line-feedback');
        }
    }

    _downHandler(event) {
        const that = this;

        if (that.disabled || that.displayLoadingIndicator || that.readonly) {
            return;
        }

        let target = event.originalEvent.target;
        let item = null;

        if ((target instanceof Smart.ListItem) && !target.disabled && !target.hidden && !(target instanceof Smart.ListItemsGroup)) {
            item = target.dataItem;
        }
        else {
            while (target.parentElement) {
                if ((target instanceof Smart.ListItem) && !target.disabled && !target.hidden && !(target instanceof Smart.ListItemsGroup)) {

                    item = target.dataItem;
                    break;
                }

                target = target.parentElement;
            }
        }

        Smart.ListBox.DragDrop.StartTime = new Date();
        Smart.ListBox.DragDrop.StartPosition = { left: event.pageX, top: event.pageY };

        if (!item) {
            return;
        }

        event.stopPropagation();

        if (that.hasRippleAnimation) {
            if (!item.readonly && !item.disabled) {
                Smart.Utilities.Animation.Ripple.animate(target.$.overlay, event.pageX, event.pageY);
            }
        }

        if (!Smart.Utilities.Core.isMobile && that.selectionChangeAction === 'press') {
            that._focus(item);
            that.select(item);
        }

        if (!Smart.ListBox.DragDrop.Feedback && that.allowDrag) {
            Smart.ListBox.DragDrop.DraggedFrom = that;
            Smart.ListBox.DragDrop.Feedback = document.createElement('span');

            if (that.dragFeedbackFormatFunction) {
                Smart.ListBox.DragDrop.Feedback.innerHTML = that.dragFeedbackFormatFunction(item);
            }
            else {
                Smart.ListBox.DragDrop.Feedback.appendChild(item.offsetHeight ? item.cloneNode(true) : that._createItem(item));
            }

            Smart.ListBox.DragDrop.Item = item;
            Smart.Utilities.Extend(Smart.ListBox.DragDrop.Feedback).addClass('smart-popup smart-list-item smart-list-item-feedback');
        }
    }

    /**
     * Double click on itemsContainer event handler
     * @param {any} event
     */
    _dblclickEventHandler(event) {
        const that = this;

        if (!that.editable) {
            return;
        }

        const target = event.target.closest('smart-list-item');

        if (!(target instanceof Smart.ListItem) || target.disabled || target.readonly) {
            that.$editInput.addClass('smart-hidden');
            return;
        }

        that.$.editInput.owner = target;
        that.$.editInput.value = target.label;
        that.$.editInput.style.height = target.offsetHeight + 'px';
        that.$.editInput.style.top = target.offsetTop + 'px';

        if (that.$editInput.hasClass('smart-hidden')) {
            that.$editInput.removeClass('smart-hidden');
        }

        that.$.editInput.focus();
    }

    /**
     * List Item edit input change and blur event handler
     * @param {any} event
     */
    _editInputEventHandler(event) {
        const that = this;

        if (event.type === 'blur' || (event.type === 'keydown' && event.key === 'Escape')) {
            !that.$editInput.hasClass('smart-hidden') ? that.$editInput.addClass('smart-hidden') : undefined;
            that.focus();
            return;
        }

        if (event.type === 'keydown' || that.$editInput.hasClass('smart-hidden')) {
            return;
        }

        const target = event.target;

        event.stopPropagation(); //stop input's original change event

        if (target.owner.label !== target.value) {
            target.owner.label = target.value;

            if (that.itemTemplate) {
                that._applyTemplate(target.owner)
            }

            if (that.dataSource) {
                const index = target.owner.dataIndex;
                const dataItem = that.dataSource[index];

                if (dataItem) {
                    if (that.displayMember) {
                        dataItem[that.displayMember] = target.value;
                    }
                    else {
                        dataItem.label = target.value;
                    }
                }
            }
        }

        that.$editInput.addClass('smart-hidden');
        that.$.fireEvent('itemLabelChange', {
            'selected': target.owner.selected,
            'disabled': target.owner.disabled,
            'index': that._indexOf(target.owner),
            'label': target.owner.label,
            'value': target.owner.value
        });
    }

    _pointerUpHandler(customEvent) {
        const that = this;
        let event = customEvent.originalEvent;
        let target = event.target;

        if (that.shadowRoot || that.isInShadowDOM) {
            target = event.composedPath()[0];
        }

        const select = (item) => {
            const listBox = item.ownerListBox;

            if (listBox.disabled || listBox !== that || listBox.displayLoadingIndicator || listBox.selectionMode === 'none' || item.grouped || item.readonly) {
                return;
            }

            listBox._focus(item);
            listBox.select(item);
            customEvent.preventDefault();
            Smart.ListBox.DragDrop.StartPosition = null;
            that.$.fireEvent('itemClick', {
                'selected': target.selected,
                'disabled': target.disabled,
                'index': that._indexOf(target),
                'label': target.label,
                'value': target.value
            });
        }

        if ((event.target instanceof Smart.ListItem) && !event.target.disabled && !(event.target instanceof Smart.ListItemsGroup)) {
            select(target.dataItem);
            return;
        }

        while (target.parentElement) {
            if ((target instanceof Smart.ListItem) && !target.disabled && !(target instanceof Smart.ListItemsGroup)) {
                select(target.dataItem);
                break;
            }

            target = target.parentElement;
        }

        if (this.shadowRoot && this.shadowDomMode === 'shadow') {
            const composedPath = event.composedPath();

            for (let i = 0; i < composedPath.length; i++) {
                const htmlElement = composedPath[i];

                if (htmlElement instanceof Smart.ListItem && !htmlElement.disabled) {
                    select(htmlElement.dataItem);
                }
            }
        }
    }

    _upHandler(event) {
        const that = this;

        if (that.disabled || that.readonly || !Smart.ListBox.DragDrop.StartPosition) {
            return;
        }

        if (Smart.Utilities.Core.isMobile && !Smart.ListBox.DragDrop.Dragging) {
            const left = Math.abs(event.pageX - Smart.ListBox.DragDrop.StartPosition.left);
            const top = Math.abs(event.pageY - Smart.ListBox.DragDrop.StartPosition.top);
            let canSelect = (left >= 0 && left <= 3) && (top >= 0 && top <= 3);

            if (Smart.Utilities.Core.isMobile) {
                if (new Date() - Smart.ListBox.DragDrop.StartTime >= 300) {
                    canSelect = false;
                    Smart.ListBox.DragDrop.StartTime = null;
                }
            }

            if (canSelect) {
                const closestListBox = event.originalEvent.target.closest('smart-list-box');

                closestListBox ? closestListBox._pointerUpHandler(event) : that._pointerUpHandler(event);
                Smart.ListBox.DragDrop.StartPosition = null;
            }
            else {
                let target = event.originalEvent.target;
                if ((event.target instanceof Smart.ListItem) && !target.readonly && !event.target.disabled && !(event.target instanceof Smart.ListItemsGroup)) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                else {
                    while (target.parentElement) {
                        if ((target instanceof Smart.ListItem) && !target.readonly && !target.disabled && !(target instanceof Smart.ListItemsGroup)) {
                            event.preventDefault();
                            event.stopPropagation();
                            break;
                        }

                        target = target.parentElement;
                    }
                }
            }
        }
        else if (!Smart.Utilities.Core.isMobile && !Smart.ListBox.DragDrop.Dragging && that.selectionChangeAction === 'release') {
            const closestListBox = (that.shadowRoot || that.isInShadowDOM ? event.originalEvent.composedPath()[0] : event.originalEvent.target).closest('smart-list-box');

            closestListBox ? closestListBox._pointerUpHandler(event) : that._pointerUpHandler(event);
        }

        if (Smart.ListBox.DragDrop.Feedback) {
            if (Smart.ListBox.DragDrop.Feedback.parentNode) {
                Smart.ListBox.DragDrop.Feedback.parentNode.removeChild(Smart.ListBox.DragDrop.Feedback);
            }
            Smart.ListBox.DragDrop.Feedback = null;
            let dropTarget;

            if (Smart.Utilities.Core.isMobile && Smart.ListBox.DragDrop.Dragging) {
                for (let j = 0; j < Smart.ListBox.DragDrop.ListBoxes.length; j++) {
                    const listBox = Smart.ListBox.DragDrop.ListBoxes[j];
                    const rect = listBox.getBoundingClientRect();

                    if (!listBox.allowDrop || listBox.closest('.smart-visibility-hidden')) {
                        continue;
                    }

                    if (rect.left <= event.pageX && event.pageX <= rect.left + rect.width && rect.top <= event.pageY && event.pageY <= rect.top + rect.height) {
                        dropTarget = listBox;

                        const visibleItems = listBox._items.filter(item => !item.hidden);

                        for (let i = 0; i < visibleItems.length; i++) {
                            const item = visibleItems[i];
                            const itemRect = item.getBoundingClientRect();

                            if (visibleItems.indexOf(item) === visibleItems.length - 1 || item.parentNode.lastElementChild === item) {
                                if (event.pageY >= rect.top + item.offsetTop - listBox.scrollTop + (itemRect.height / 2) && event.pageY <= rect.top - listBox.scrollTop + item.offsetTop + itemRect.height) {
                                    Smart.ListBox.DragDrop.DropDetails = { item: item, position: 'bottom' };
                                    break;
                                }
                            }
                            if (event.pageY >= rect.top + item.offsetTop - listBox.scrollTop && event.pageY <= rect.top + item.offsetTop + itemRect.height - listBox.scrollTop) {
                                Smart.ListBox.DragDrop.DropDetails = { item: item, position: 'top' };
                                break;
                            }
                        }
                    }
                }
            }

            if (Smart.ListBox.DragDrop.Dragging) {
                if (Smart.ListBox.DragDrop.DropDetails) {
                    let dropItem = Smart.ListBox.DragDrop.DropDetails.item,
                        dragItem = Smart.ListBox.DragDrop.Item;
                    const dragItemListBox = dragItem.ownerListBox;

                    dropTarget = !dropTarget && event.originalEvent.target.closest ? event.originalEvent.target.closest('smart-list-box') : dropTarget;

                    document.body.classList.remove('smart-dragging');
                    dropItem.$.removeClass('smart-list-item-line-feedback');
                    dropItem.$.removeClass('smart-list-item-bottom-line-feedback');

                    if (dropTarget && dropItem.ownerListBox !== dropTarget && dropTarget.items.length > 0) {
                        dropItem = dropTarget.items[dropTarget.items.length - 1];
                    }

                    if (Smart.ListBox.DragDrop.Item !== dropItem && (dropTarget === dropItem.ownerListBox || Smart.Utilities.Core.isMobile)) {
                        if (dragItem.ownerListBox.dropAction !== 'none') {
                            if (dropItem.ownerListBox !== dragItem.ownerListBox && dragItem.ownerListBox.dropAction === 'move') {
                                Smart.ListBox.DragDrop.Item.ownerListBox.removeChild(Smart.ListBox.DragDrop.Item);
                            }

                            if (dragItem.ownerListBox.dropAction === 'copy') {
                                dragItem = dragItem.cloneNode(true);
                            }

                            Smart.ListBox.DragDrop.Item.group = dropItem.group;

                            const listBox = dropItem.ownerListBox;

                            if (listBox.selectionMode !== 'checkBox' && listBox.selectionMode !== 'radioButton') {
                                listBox.clearSelection();
                            }

                            if (Smart.ListBox.DragDrop.DropDetails.position === 'top') {
                                listBox.insertBefore(dragItem, dropItem);
                            }
                            else {
                                if (dropItem.parentNode.lastElementChild === dropItem) {
                                    listBox.appendChild(dragItem);
                                }
                                else {
                                    listBox.appendChild(dragItem, dropItem);
                                }
                            }

                            listBox.ensureVisible(dragItem);
                            if (listBox.selectionMode === 'checkBox' || listBox.selectionMode === 'radioButton') {
                                listBox._focus(dragItem);
                                listBox._refreshSelection();
                            }
                            else {
                                listBox.clearSelection();
                                listBox.select(dragItem);
                            }
                        }
                    }
                    else if (dropTarget && dropTarget._items.length === 0 && dropTarget.dropAction !== 'none') {
                        if (dropTarget.dropAction === 'move') {
                            Smart.ListBox.DragDrop.Item.ownerListBox.removeChild(Smart.ListBox.DragDrop.Item);
                        }
                        else if (dropTarget.dropAction === 'copy') {
                            dragItem = dragItem.cloneNode(true);
                        }

                        dropTarget.appendChild(dragItem);
                    }

                    if (dragItem.selected && dropTarget !== dragItemListBox) {
                        dragItemListBox._refreshSelection();
                    }

                    const item = Smart.ListBox.DragDrop.Item;
                    const listBox = item.ownerListBox;

                    item.displayMode = listBox.selectionMode === 'checkBox' || listBox.selectionMode === 'radioButton' ? listBox.selectionMode : 'plain';

                    listBox.$.fireEvent('dragEnd', {
                        'item': item,
                        'target': dropItem,
                        'data': Smart.ListBox.DragDrop,
                        'previousContainer': dragItemListBox,
                        'container': dropTarget,
                        'originalEvent': event
                    });

                    listBox._focus(item);
                }
                else {
                    const item = Smart.ListBox.DragDrop.Item;
                    const listBox = item.ownerListBox;

                    item.displayMode = listBox.selectionMode === 'checkBox' || listBox.selectionMode === 'radioButton' ? listBox.selectionMode : 'plain';

                    listBox.$.fireEvent('dragEnd', {
                        'item': item,
                        'target': null,
                        'data': Smart.ListBox.DragDrop,
                        'previousContainer': listBox,
                        'container': listBox,
                        'originalEvent': event
                    });

                    listBox._focus(item);
                }

                event.preventDefault();
            }

            delete Smart.ListBox.DragDrop.DraggedFrom;
            Smart.ListBox.DragDrop.Dragging = false;
            Smart.ListBox.DragDrop.Item = null;
            Smart.ListBox.DragDrop.DropDetails = null;
        }

        for (let i = 0; i < Smart.ListBox.DragDrop.ListBoxes.length; i++) {
            const listBox = Smart.ListBox.DragDrop.ListBoxes[i];

            if (listBox._dragInterval) {
                clearInterval(listBox._dragInterval);
            }
        }
    }

    _itemsContainerMoveHandler(event) {
        const that = this;

        if (Smart.ListBox.DragDrop.Dragging) {
            that._applyItemFeedback(event);
            that._moveHandler(event);
            event.originalEvent.preventDefault();
            event.originalEvent.stopPropagation();
            return false;
        }
    }

    _applyItemFeedback(event) {
        const that = this,
            target = event.originalEvent.target,
            targetItem = target.closest ? target.closest('smart-list-item') : target;

        //Event.target doesn't work on Mobile. This is used just to the Drop logic inside upHandler
        if (Smart.Utilities.Core.isMobile) {
            Smart.ListBox.DragDrop.DropDetails = { item: Smart.ListBox.DragDrop.Item, position: 'bottom' };
            return;
        }

        if (that.items.length === 0) {
            return;
        }

        if (!targetItem) {
            that.items[that.items.length - 1]._itemOnMouseMove(event, true);
            return;
        }

        targetItem._itemOnMouseMove(event);
    }

    _moveHandler(event) {
        const that = this;

        if (!Smart.ListBox.DragDrop.Feedback || Smart.ListBox.DragDrop.DraggedFrom !== that) {
            return;
        }

        const dragOffset = that.dragOffset;

        if (!Smart.ListBox.DragDrop.Dragging) {
            const left = Math.abs(event.pageX - Smart.ListBox.DragDrop.StartPosition.left);
            const top = Math.abs(event.pageY - Smart.ListBox.DragDrop.StartPosition.top);
            const timeOut = new Date() - Smart.ListBox.DragDrop.StartTime;

            let canStartDrag = (left >= 5 && left <= 15) || (top >= 5 && top <= 15);

            if (Smart.Utilities.Core.isMobile) {
                if (timeOut < 300 || timeOut > 1000) {
                    canStartDrag = false;
                }
            }

            if (canStartDrag) {
                Smart.ListBox.DragDrop.Dragging = true;
                Smart.ListBox.DragDrop.Feedback.style.left = dragOffset[0] + event.pageX + 'px';
                Smart.ListBox.DragDrop.Feedback.style.top = dragOffset[1] + event.pageY + 'px';

                document.body.appendChild(Smart.ListBox.DragDrop.Feedback);
                event.preventDefault();
                event.stopPropagation();

                event.originalEvent.preventDefault();
                event.originalEvent.stopPropagation();

                const item = Smart.ListBox.DragDrop.Item;
                const listBox = item.ownerListBox;

                listBox.$.fireEvent('dragStart', {
                    'item': item,
                    'data': Smart.ListBox.DragDrop,
                    'container': listBox,
                    'previousContainer': listBox,
                    'originalEvent': event.originalEvent
                });

                document.body.classList.add('smart-dragging');
            }
        }
        else {
            Smart.ListBox.DragDrop.Feedback.style.left = dragOffset[0] + event.pageX + 'px';
            Smart.ListBox.DragDrop.Feedback.style.top = dragOffset[1] + event.pageY + 'px';

            that.$.fireEvent('dragging', {
                'item': Smart.ListBox.DragDrop.Item,
                'data': Smart.ListBox.DragDrop,
                'originalEvent': event.originalEvent
            });

            for (let i = 0; i < Smart.ListBox.DragDrop.ListBoxes.length; i++) {
                const listBox = Smart.ListBox.DragDrop.ListBoxes[i];

                if (listBox._dragInterval) {
                    clearInterval(listBox._dragInterval);
                }

                listBox._dragInterval = setInterval(function () {
                    const rect = listBox.getBoundingClientRect();

                    if (rect.left <= event.clientX && rect.left + rect.width >= event.clientX) {
                        if (event.clientY >= rect.top && event.clientY <= rect.top + 20) {
                            listBox.scrollTop -= 2;
                        }
                        else if (event.clientY >= rect.top + rect.height - 20 && event.clientY <= rect.top + rect.height) {
                            listBox.scrollTop += 2;
                        }
                    }
                }, 1);
            }

            event.preventDefault();
            event.stopPropagation();

            event.originalEvent.preventDefault();
            event.originalEvent.stopPropagation();

            return false;
        }
    }

    _focusHandler() {
        const that = this;
        that._focused = true;
        that.setAttribute('focus', '');
    }

    _blurHandler() {
        const that = this;
        that._focused = false;
        that.removeAttribute('focus');
    }


    appendChild(node) {
        const that = this;

        if (!that.isCompleted) {
            const args = Array.prototype.slice.call(arguments, 2);
            return HTMLElement.prototype.appendChild.apply(that, args.concat(Array.prototype.slice.call(arguments)));
        }

        if (that.isVirtualized) {
            if (that._items.indexOf(node) > -1) {
                that._items.splice(that._items.indexOf(node), 1);
            }
            that._items.push(node);
        }
        else {
            node.dataItem = node;

            if (that.shadowRoot && that.shadowDomMode === 'light') {
                that.appendChild(node);
            }
            else {
                that.$.itemsInnerContainer.appendChild(node);
            }

            if (that._items.indexOf(node) > -1) {
                that._items.splice(that._items.indexOf(node), 1);
            }
            that._items.push(node);
        }
        that._refreshItems();
        that._refreshSelection();
    }

    insertBefore(newNode, referenceNode) {
        const that = this;

        if (!that.isCompleted) {
            const args = Array.prototype.slice.call(arguments, 2);
            return HTMLElement.prototype.insertBefore.apply(that, args.concat(Array.prototype.slice.call(arguments)));
        }

        if (that.isVirtualized) {
            if (that._items.indexOf(newNode) > -1) {
                that._items.splice(that._items.indexOf(newNode), 1);
            }
            that._items.splice(that._indexOf(referenceNode), 0, newNode);
        }
        else {
            newNode.dataItem = newNode;
            referenceNode.parentNode.insertBefore(newNode, referenceNode);
            if (that._items.indexOf(newNode) > -1) {
                that._items.splice(that._items.indexOf(newNode), 1);
            }
            that._items.splice(that._indexOf(referenceNode), 0, newNode);
        }
        that._refreshItems();
        that._refreshSelection();
    }

    removeChild(node) {
        const that = this;

        if (!that.isCompleted) {
            const args = Array.prototype.slice.call(arguments, 2);
            return HTMLElement.prototype.removeChild.apply(that, args.concat(Array.prototype.slice.call(arguments)));
        }

        if (that.isVirtualized) {
            that._items.splice(that._indexOf(node), 1);
        }
        else {
            if (node.parentNode) {
                const selectedIndexes = that.selectedIndexes.slice(0),
                    selectedValues = that.selectedValues.slice(0),
                    selectedItemIndex = selectedIndexes.indexOf(node.dataIndex);

                node.parentNode.removeChild(node);

                if (selectedItemIndex > -1) {
                    selectedIndexes.splice(selectedItemIndex, 1);
                    selectedValues.splice(selectedItemIndex, 1);

                    that.selectedIndexes = selectedIndexes;
                    that.selectedValues = selectedValues;
                }
            }
        }
        that._refreshItems();
    }

    /**
   * Updates the listbox when a property is changed.
   * @param {string} propertyName The name of the property.
   * @param {number/string} oldValue The previously entered value. Max, min and value are of type Number. The rest are of type String.
   * @param {number/string} newValue The new entered value. Max, min and value are of type Number. The rest are of type String.
   */
    propertyChangedHandler(propertyName, oldValue, newValue) {
        super.propertyChangedHandler(propertyName, oldValue, newValue);

        const that = this;

        switch (propertyName) {
            case 'innerHTML':
                that.clearSelection();
                that._dataBind();
                that.innerHTML = that.content = Smart.Utilities.Core.html(that.$.content);
                break;
            case 'dataSource':
            case 'valueMember':
            case 'groupMember':
            case 'displayMember': {
                that.clearSelection();
                that._dataBind();
                break;
            }
            case 'disabled':
            case 'unfocusable':
                that._setFocusable();
                break;
            case 'displayLoadingIndicator': {
                that._setLoadingIndicatorVisibility();
                break;
            }
            case 'filterable': {
                that._refreshFilter();
                that._refreshLayout();
                break;
            }
            case 'grouped': {
                if (newValue) {
                    that._group();
                }
                else {
                    that._ungroup();
                }

                if (that.selectionMode === 'radioButton') {
                    if (that.selectedValues.length > 0) {
                        const selectedValues = that.selectedValues;

                        that.clearSelection();
                        that.select(selectedValues[0]);
                    }
                }
                else {
                    that._refreshSelection();
                }

                that._refreshLayout();
                break;
            }
            case 'itemTemplate': {
                if (newValue === null || newValue === '') {
                    that._items.map((item) => item.innerHTML = item.label);
                    delete that._bindingDetails;
                    that._refreshLayout();
                    return;
                }

                const items = that.querySelectorAll('smart-list-item');
                const itemsReady = function () {
                    if (that._handleItemTemplate(newValue)) {
                        that._items.map((item) => that._applyTemplate(item));
                        that._refreshLayout();
                    }

                    if (that.ownerElement && that.ownerElement._setDropDownSize) {
                        that.ownerElement._setDropDownSize();
                    }

                    that.$.fireEvent('bindingComplete');
                }

                if (items.length === 0) {
                    itemsReady();
                }
                else {
                    that._ensureItemsReady(items, itemsReady);
                }

                break;
            }
            case 'selectedIndexes':
            case 'selectedValues': {
                let _selectedIndexes = that.selectedIndexes.slice(0);
                let _selectedValues = that.selectedValues.slice(0);


                if (!that._items || that._items.length === 0) {
                    that.selectedIndexes = [];
                    that.selectedValues = [];

                    //Update the hidden form input
                    that.$.hiddenInput.value = that.selectedValues.toString();
                    return;
                }

                that._propertyChanging = true;

                if (propertyName === 'selectedIndexes') {
                    _selectedIndexes = oldValue.slice(0);
                    that.clearSelection();

                    for (let i = 0; i < newValue.length; i++) {
                        const index = newValue[i];
                        const item = that._items[index];

                        if (item) {
                            if (that.selectionMode === 'oneOrManyExtended' || that.selectionMode === 'oneOrMany') {
                                if (that.selectedIndexes.length > 0 && i === 0) {
                                    that.clearSelection();
                                }
                                that._select(item);
                            }
                            else {
                                that.select(item);
                            }
                        }
                    }
                }
                else {
                    _selectedValues = oldValue.slice(0);
                    that.selectedValues = [];
                    that.clearSelection();

                    for (let i = 0; i < newValue.length; i++) {
                        const selectedValue = newValue[i];
                        const item = that.getItem(selectedValue);

                        if (item) {
                            if (that.selectionMode === 'oneOrManyExtended') {
                                that._select(item);
                            }
                            else {
                                that.select(item);
                            }
                        }
                    }
                }

                if (that.selectedIndexes.length > 0) {
                    that._focus(that._items[that.selectedIndexes[0]]);
                }

                that._propertyChanging = false;

                if (JSON.stringify(_selectedValues) !== JSON.stringify(that.selectedValues.slice(0))) {
                    let selectedItems = [],
                        unselectedItems = [];

                    // get all newly unselected items
                    for (let i = 0; i < _selectedIndexes.length; i++) {
                        if (that.selectedIndexes.indexOf(_selectedIndexes[i]) < 0) {
                            unselectedItems.push(that._items[_selectedIndexes[i]]);
                        }
                    }

                    // get all newly selected items
                    for (let i = 0; i < that.selectedIndexes.length; i++) {
                        if (_selectedIndexes.indexOf(that.selectedIndexes[i]) < 0) {
                            selectedItems.push(that._items[that.selectedIndexes[i]]);
                        }
                    }

                    let eventDetails = {
                        'addedItems': selectedItems,
                        'removedItems': unselectedItems
                    };

                    if (that.selectedIndexes.length > 0) {
                        const lastSelectedItem = that._items[that.selectedIndexes[that.selectedIndexes.length - 1]];

                        if (lastSelectedItem !== undefined) {
                            eventDetails.selected = lastSelectedItem.selected;
                            eventDetails.disabled = lastSelectedItem.disabled;
                            eventDetails.index = that._indexOf(lastSelectedItem);
                            eventDetails.label = lastSelectedItem.label;
                            eventDetails.value = lastSelectedItem.value;
                        }
                    }
                    else {
                        eventDetails.selected = false;
                        eventDetails.disabled = false;
                        eventDetails.index = -1;
                        eventDetails.label = '';
                        eventDetails.value = '';
                    }

                    that.$.fireEvent('change', eventDetails);
                }

                break;
            }
            case 'selectionMode': {
                const displayMode = that.selectionMode === 'checkBox' || that.selectionMode === 'radioButton' ? that.selectionMode : 'plain';
                const _selectedIndexes = that.selectedIndexes.slice(0);
                const _selectedValues = that.selectedValues.slice(0);

                that._propertyChanging = true;

                const selectedValues = that.selectedValues;

                that.selectedValues = [];

                that.clearSelection();
                for (let i = 0; i < selectedValues.length; i++) {
                    const selectedValue = selectedValues[i];
                    const item = that.getItem(selectedValue);

                    if (item) {
                        if (that.selectionMode === 'oneOrManyExtended') {
                            that._select(item);
                        }
                        else {
                            that.select(item);
                        }
                    }
                }

                that._items.forEach(item => item.displayMode = displayMode);
                that._recycle();

                that._propertyChanging = false;

                if (JSON.stringify(_selectedValues) !== JSON.stringify(that.selectedValues.slice(0))) {
                    let selectedItems = [],
                        unselectedItems = [];

                    // get all newly unselected items
                    for (let i = 0; i < _selectedIndexes.length; i++) {
                        if (that.selectedIndexes.indexOf(_selectedIndexes[i]) < 0) {
                            unselectedItems.push(that._items[_selectedIndexes[i]]);
                        }
                    }

                    // get all newly selected items
                    for (let i = 0; i < that.selectedIndexes.length; i++) {
                        if (_selectedIndexes.indexOf(that.selectedIndexes[i]) < 0) {
                            selectedItems.push(that._items[that.selectedIndexes[i]]);
                        }
                    }

                    let eventDetails = {
                        'addedItems': selectedItems,
                        'removedItems': unselectedItems
                    };

                    if (_selectedIndexes.length > 0) {
                        const lastSelectedIndex = that._items[_selectedIndexes[_selectedIndexes.length - 1]];

                        if (lastSelectedIndex) {
                            eventDetails.selected = lastSelectedIndex.selected;
                            eventDetails.disabled = lastSelectedIndex.disabled;
                            eventDetails.index = that._indexOf(lastSelectedIndex);
                            eventDetails.label = lastSelectedIndex.label;
                            eventDetails.value = lastSelectedIndex.value;
                        }
                    }

                    that.$.fireEvent('change', eventDetails);
                }

                break;
            }
            case 'topVisibleIndex':
                that._setTopVisibleIndex(newValue);

                break;
            case 'autoSort':
                that._canSort = newValue;
                break;
            case 'sortDirection':
            case 'sorted': {
                that._canSort = true;

                if (newValue) {
                    that._sort();
                }
                else {
                    that._unsort();
                }

                const selectedValues = that.selectedValues;
                that.selectedValues = [];
                that._refreshSelection();
                for (let i = 0; i < selectedValues.length; i++) {
                    const selectedValue = selectedValues[i];
                    const item = that.getItem(selectedValue);

                    if (item) {
                        if (that.selectionMode === 'oneOrManyExtended') {
                            that._select(item);
                        }
                        else {
                            that.select(item);
                        }
                    }
                }

                that._refreshLayout();

                that._canSort = that.autoSort;
                break;
            }
        }
    }

    /**
    * refreshes selection items.
    */
    _refreshSelection() {
        const that = this;

        if (!that._items || that._items.length === 0) {
            return;
        }

        const selectedValues = that.selectedValues;

        that.selectedIndexes = [];
        that.selectedValues = [];

        for (let i = 0; i < that._items.length; i++) {
            const item = that._items[i];

            item.selected = false;

            if (selectedValues.indexOf(item.value) > -1) {
                that.select(item);
            }
        }

        that._recycle();
    }

    /**
      * Unselects all items.
      */
    clearSelection() {
        const that = this;

        if (!that._items || that._items.length === 0) {
            return;
        }

        let removedItems = [];

        for (let i = 0; i < that._items.length; i++) {
            if (that._items[i].selected) {
                removedItems.push(that._items[i]);
            }
        }

        that._items.map(item => item.selected = false);

        const _selectedValues = that.selectedValues.slice(0);
        const _selectedIndexes = that.selectedIndexes.slice(0);

        that.selectedIndexes = [];
        that.selectedValues = [];

        //Update the hidden form input
        that.$.hiddenInput.value = that.selectedValues.toString();

        that._recycle();

        if (that.context !== that) {
            let eventDetails = {
                'addedItems': [],
                'removedItems': removedItems
            };

            if (_selectedIndexes.length > 0) {
                const lastSelectedIndex = that._items[_selectedIndexes[_selectedIndexes.length - 1]];

                if (lastSelectedIndex) {
                    eventDetails.selected = lastSelectedIndex.selected;
                    eventDetails.disabled = lastSelectedIndex.disabled;
                    eventDetails.index = that._indexOf(lastSelectedIndex);
                    eventDetails.label = lastSelectedIndex.label;
                    eventDetails.value = lastSelectedIndex.value;
                }
            }

            that.$.fireEvent('change', eventDetails);
        }
    }

    ensureVisible(item) {
        const that = this;

        if (!item) {
            return;
        }

        if (typeof item === 'string') {
            item = that.getItem(item);
            if (!item) {
                return false;
            }
        }

        if (!that.isVirtualized && that.$.itemsContainer.scrollTop !== that.scrollTop) {
            that.scrollTop = that.$.itemsContainer.scrollTop;
        }

        if (item.top + item.height >= that.scrollTop + that.offsetHeight) {

            that.scrollTop = that.scrollTop + item.height;

            if (!that.isVirtualized) {
                that.$.itemsContainer.scrollTop = that.scrollTop;
            }
        }

        if (item.top <= that.scrollTop || item.top >= that.scrollTop + that.$.itemsContainer.offsetHeight) {
            that.scrollTop = item.top;

            if (!that.isVirtualized) {
                that.$.itemsContainer.scrollTop = that.scrollTop;
            }
        }

        if (that._indexOf(item) === 0 || (that._indexOf(item) === 1 && that._items.length > 1 && that._items[0].grouped)) {
            that.scrollTop = 0;
            if (!that.isVirtualized) {
                that.$.itemsContainer.scrollTop = that.scrollTop;
            }
        }
        else if (that._indexOf(item) === that._items.length - 1) {
            that.scrollTop = that.scrollHeight;

            if (!that.isVirtualized) {
                that.$.itemsContainer.scrollTop = that.scrollTop;
            }
        }

        return true;
    }
    /**
    * Returns an array with the items from the list.
    */
    get items() {
        const that = this;

        if (that._filteredItems) {
            return that._filteredItems;
        }

        return that._items;
    }

    /**
    * ListBox ready method.
    */
    ready() {
        super.ready();
        const that = this;

        //LightDom test
        if (that.shadowRoot && that.shadowDomMode === 'light') {
            const fragment = document.createDocumentFragment();

            [].slice.call(that.$.itemsInnerContainer.children).map(item => fragment.appendChild(item));

            that.appendChild(fragment);

            that.$.itemsInnerContainer.appendChild(document.createElement('slot'));
        }

        that._areCSSVarsSupported = Smart.Utilities.Core.CSSVariablesSupport();
        that._keysPressed = {};
        that._incrementalSearchQuery = '';
        that._incrementalSearchItems = [];
        that._canSort = true;
        that._previousEntry = '';
        that.isUpdating = 0;

        if (that._scrollView) {
            that._scrollView = new Smart.Utilities.Scroll(that, that.$.horizontalScrollBar, that.$.verticalScrollBar);
            that._scrollView.hScrollBar.$.addClass('smart-hidden');
            that._scrollView.vScrollBar.$.addClass('smart-hidden');
        }

        const vScrollBar = that._scrollView.vScrollBar;
        const hScrollBar = that._scrollView.hScrollBar;

        vScrollBar.hasStyleObserver = false;
        hScrollBar.hasStyleObserver = false;
        vScrollBar.hasResizeObserver = false;
        hScrollBar.hasResizeObserver = false;
        vScrollBar.wait = false;
        hScrollBar.wait = false;


        that._setFocusable();
        that._setLoadingIndicatorVisibility();
        that._refreshFilter();

        that._initializeInnerHTML();
        that._dataBind();
    }

    attached() {
        const that = this;

        super.attached();

        if (!Smart.ListBox.DragDrop) {
            Smart.ListBox.DragDrop = { ListBoxes: [] };
        }

        Smart.ListBox.DragDrop.ListBoxes.push(that);

        if (!that._scrollView) {
            that._scrollView = new Smart.Utilities.Scroll(that, that.$.horizontalScrollBar, that.$.verticalScrollBar);
        }

        if (that.selectedIndexes.length > 0) {
            that.ensureVisible(that._items[that.selectedIndexes[0]]);
        }
    }

    detached() {
        const that = this;

        super.detached();

        if (that._scrollView) {
            that._scrollView.unlisten();
            delete that._scrollView;
        }

        if (Smart.ListBox.DragDrop && Smart.ListBox.DragDrop.ListBoxes) {
            const index = Smart.ListBox.DragDrop.ListBoxes.indexOf(that);
            Smart.ListBox.DragDrop.ListBoxes.splice(index, 1);
        }
    }

    _createItem(item, index, recycling) {
        const that = this;

        const displayMode = that.selectionMode === 'checkBox' || that.selectionMode === 'radioButton' ? that.selectionMode : 'plain';
        const htmlItem = recycling ? {} : document.createElement('smart-list-item');

        htmlItem.ownerListBox = that;

        if (typeof item === 'number') {
            item = '' + item;
        }

        const getMemberValue = function (memberName, defaultMemberName) {
            if (item[memberName] !== undefined) {
                return '' + item[memberName];
            }

            return item[defaultMemberName];
        }

        let label = typeof item === 'string' ? item : getMemberValue(that.displayMember, 'label'),
            value = typeof item === 'string' ? item : getMemberValue(that.valueMember, 'value'),
            group = getMemberValue(that.groupMember, 'group')

        if (undefined === label) {
            if (index !== undefined) {
                label = '' + index;
            }
            else {
                label = '';
            }
        }

        htmlItem.label = htmlItem.innerHTML = '' + label;

        if (undefined === value) {
            if (index !== undefined) {
                value = '' + index;
            }
            else {
                value = label;
            }
        }

        if (item.color) {
            htmlItem.color = item.color;
        }

        htmlItem.value = '' + value;
        htmlItem.displayMode = displayMode;
        htmlItem.selected = item.selected ? item.selected : false;
        htmlItem.disabled = item.disabled ? item.disabled : false;
        htmlItem.dataItem = htmlItem;

        if (index !== undefined) {
            htmlItem.dataIndex = index;
        }

        that._alternateItem(htmlItem);

        if (item.title) {
            htmlItem.title = item.title;
        }

        if (group) {
            htmlItem.group = '' + group;
        }

        return htmlItem;
    }

    _alternateItem(item) {
        const that = this;
        const start = that.alternationStart;
        const end = that.alternationEnd > 0 ? that.alternationEnd : Infinity;

        if (that.alternationCount <= 0) {
            return;
        }

        if (that._alternationIndexCounter === undefined) {
            that._alternationIndexCounter = 0;
        }

        if (item.dataIndex >= start && item.dataIndex <= end) {
            item.alternationIndex = that._alternationIndexCounter++;
            if (that._alternationIndexCounter === that.alternationCount) {
                that._alternationIndexCounter = 0;
            }
        }
    }

    _beginUpdate() {
        const that = this;

        that.isUpdating++;
    }

    _isUpdating() {
        const that = this;

        return that.isUpdating > 0;
    }

    _endUpdate() {
        const that = this;

        that.isUpdating--;
    }

    get _scrollHeight() {
        const that = this;

        let scrollHeight = 0;

        if (that.isVirtualized) {
            if (that.__scrollHeight) {
                return that.__scrollHeight;
            }

            if (that._items.length === 0) {
                return 0;
            }

            that.isUpdating++;

            const measureItem = that._createItem(that.dataSource[0]);
            that.$.itemsInnerContainer.appendChild(measureItem);

            for (let i = 0; i < that._items.length; i++) {
                const item = that._items[i];

                if (item.hidden) {
                    item.height = 0;
                    item.top = scrollHeight;
                    continue;
                }

                if (!that.itemHeight) {
                    measureItem.label = item.label;
                    item.height = measureItem.offsetHeight;
                }
                else {
                    if (that.itemHeight < 32) {
                        that.itemHeight = 32;
                    }

                    item.height = that.itemHeight;
                }

                item.top = scrollHeight;
                scrollHeight += item.height;
            }

            that.$.itemsInnerContainer.removeChild(measureItem)
            that.__scrollHeight = scrollHeight - that.$.itemsInnerContainer.offsetHeight;
            if (that.filterable) {
                that.__scrollHeight += that.$.filterInput.offsetHeight;
            }

            scrollHeight = that.__scrollHeight;
            that.isUpdating--;
        }
        else {
            for (let i = 0; i < that._items.length; i++) {
                const item = that._items[i];

                if (item.hidden) {
                    item.height = 0;
                    item.top = scrollHeight;
                    continue;
                }

                if (!that.itemHeight) {
                    item.height = item.offsetHeight;
                }
                else if (that.itemHeight !== 'auto') {
                    item.height = that.itemHeight;
                    item.style.height = item.height + 'px';
                }

                item.top = item.offsetTop;
                scrollHeight += item.height;
            }

            scrollHeight = that.$.itemsInnerContainer.scrollHeight - that.$.itemsInnerContainer.offsetHeight;

            if (that.filterable && scrollHeight > 0) {
                scrollHeight += that.$.filterInput.offsetHeight;
            }

            that.__scrollHeight = scrollHeight;
        }

        return scrollHeight;

        //Note: Incorrectly decreases the scrollHeight
        //let bottomOffset = 0;

        //if (scrollHeight) {
        //    bottomOffset = 2 * (parseInt(getComputedStyle(that.$.itemsInnerContainer).getPropertyValue('--smart-list-item-vertical-offset')) || 0);
        //}

        //return scrollHeight - bottomOffset;
    }

    _initializeRecyclingItems() {
        const that = this;

        if ((!that.dataSource || (that.dataSource && that.dataSource.length === 0)) || !that.isVirtualized) {
            return;
        }

        let itemsHeight = 0;
        let listBoxHeight = that.offsetHeight;

        that.$.itemsInnerContainer.innerHTML = '';
        that._recyclingItems = [];

        const createRecyclingItems = function () {
            for (let i = 0; i < that.dataSource.length; i++) {
                const item = that.dataSource[i];
                const htmlItem = that._createItem(item);

                if (that.itemHeight && that.itemHeight !== 'auto') {
                    htmlItem.style.height = that.itemHeight + 'px';
                }

                that.$.itemsInnerContainer.appendChild(htmlItem);

                itemsHeight += htmlItem.offsetHeight;

                htmlItem.dataItem = that._items[i];
                that._recyclingItems.push(htmlItem);

                if (itemsHeight > 1.5 * listBoxHeight) {
                    break;
                }
            }
        }

        createRecyclingItems();

        let maxIterations = 0;

        while (itemsHeight < 1.5 * listBoxHeight && ++maxIterations < 5) {
            createRecyclingItems();
        }
    }

    _dataBind() {
        const that = this;

        if (!that._scrollView) {
            that._scrollView = new Smart.Utilities.Scroll(that, that.$.horizontalScrollBar, that.$.verticalScrollBar);
        }

        if (typeof that.dataSource === 'function') {
            that._items = [];
        }

        if (typeof that.dataSource === 'string') {
            that.dataSource = JSON.parse(that.dataSource);
        }

        if (that.dataSource !== null && Array.isArray(that.dataSource)) {
            that.isUpdating++;

            const initializeDataBoundItems = (fragment) => {
                that._items = [];
                that._groups = [];

                const dataSource = that.dataSource;

                for (let i = 0; i < dataSource.length; i++) {
                    const item = dataSource[i],
                        htmlItem = that._createItem(item, i, !fragment);

                    that._items[i] = htmlItem;

                    if (fragment) {
                        fragment.appendChild(htmlItem);
                    }
                }
            }

            if (that.isVirtualized) {
                initializeDataBoundItems();
                that._initializeRecyclingItems();
            }
            else {
                const fragment = document.createDocumentFragment();

                that.$.itemsInnerContainer.innerHTML = '';

                initializeDataBoundItems(fragment);
                that.$.itemsInnerContainer.appendChild(fragment);
            }

            that.isUpdating--;
        }

        const items = that.shadowRoot ? that.shadowRoot.querySelectorAll('smart-list-item') : that.querySelectorAll('smart-list-item');
        const itemsReady = function () {
            that.isUpdating++;

            if (!that.dataSource) {
                that._initializeHtmlListItems();
                that._initializeHtmlListGroups();
            }

            if (that.grouped) {
                that._group();
            }

            if (that.sorted) {
                that._sort();
            }

            that._refreshLayout();

            that._initializeSelection();
            that.isInitialized = true;
            that._canSort = that.autoSort;

            that.isUpdating--;

            if (that.itemTemplate) {
                if (that._handleItemTemplate(that.itemTemplate)) {
                    that._items.map((item) => that._applyTemplate(item));
                    that._refreshLayout();
                }
            }

            if (that.__onCompleted) {
                that._onCompleted = that.__onCompleted;
                that.__onCompleted = null;
                that._onCompleted();
            }


            if (that.topVisibleIndex > -1) {
                that._setTopVisibleIndex(that.topVisibleIndex);
            }

            that.$.fireEvent('bindingComplete');
            that._updateTopVisibleIndex();

            if (that._items.length === 0) {
                that.clearItems();
            }
        }

        if (items.length === 0) {
            itemsReady();
        }
        else {
            if (that._onCompleted) {
                that.__onCompleted = that._onCompleted;
                that._onCompleted = null;
            }
            that._ensureItemsReady(items, itemsReady);
        }
    }

    _ensureItemsReady(nodes, callback) {
        const that = this;

        const contextCallback = function () {
            const setContext = function (context) {
                for (let i = 0; i < nodes.length; i++) {
                    nodes[i].context = context === 'node' ? nodes[i] : document;
                }
            }

            setContext('node');
            callback();
            setContext();
        }

        if (nodes.length === 0) {
            contextCallback();
        }
        else {
            that._nodesReadyListeners = 0;

            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];

                const readyEventHandler = function () {
                    that._nodesReadyListeners--;
                    if (that._nodesReadyListeners === 0) {
                        contextCallback();

                        delete that._nodesReadyListeners;
                    }
                }.bind(that);

                if (!node.isCompleted) {
                    that._nodesReadyListeners++;
                    node._onCompleted = readyEventHandler;
                }
            }

            if (that._nodesReadyListeners === 0) {
                contextCallback();
            }
        }
    }

    _initializeInnerHTML() {
        const that = this;

        if (that.$.itemsInnerContainer.innerHTML.indexOf('<option') >= 0) {
            that.$.itemsInnerContainer.innerHTML = that.$.itemsInnerContainer.innerHTML.replace(/<optgroup/ig, '<smart-list-items-group').replace(/<\/optgroup/ig, '<\/smart-list-items-group').replace(/<option/ig, '<smart-list-item').replace(/<\/option/ig, '<\/smart-list-item');
        }
        else if (that.$.itemsInnerContainer.innerHTML.indexOf('<ul') >= 0) {
            that.$.itemsInnerContainer.innerHTML = that.$.itemsInnerContainer.innerHTML.replace(/<ul/ig, '<smart-list-items-group').replace(/<\/ul/ig, '<\/smart-list-items-group').replace(/<li/ig, '<smart-list-item').replace(/<\/li/ig, '<\/smart-list-item');
        }
    }

    _initializeHtmlListItems() {
        const that = this;

        const htmlItems = that.shadowRoot && that.shadowDomMode === 'shadow' ? that.shadowRoot.querySelectorAll('smart-list-item') : that.querySelectorAll('smart-list-item');
        const displayMode = that.selectionMode === 'checkBox' || that.selectionMode === 'radioButton' ? that.selectionMode : 'plain';

        const getMemberValue = function (item, memberName, defaultMemberName) {
            if (item[memberName] !== undefined) {
                return '' + item[memberName];
            }

            return item[defaultMemberName];
        }

        that._items = [];

        let top = 0;

        for (let i = 0; i < htmlItems.length; i++) {
            const item = htmlItems[i];

            item.dataIndex = i;
            item.label = item.innerHTML;
            item.dataItem = item;

            if (!item.top) {
                item.top = top;
            }

            if (!item.height) {
                item.height = item.offsetHeight;
            }

            top += item.height;

            if (!item.value) {
                item.value = '' + i;
            }

            const label = getMemberValue(item, that.displayMember, 'label');
            const value = getMemberValue(item, that.valueMember, 'value')
            const group = getMemberValue(item, that.groupMember, 'group')

            if (item.label !== label) {
                item.label = label;
            }

            if (item.value !== value) {
                item.value = value;
            }

            if (item.group !== group) {
                item.group = group;
            }

            //NOTE: the context must be set to document in order for item._setDisplayMode() to get called
            const originalContext = item.context;

            item.context = document;
            item.displayMode = displayMode;
            item.context = originalContext;

            that._alternateItem(item);

            if (item.selected) {
                that.selectedIndexes.push(i);
                that.selectedValues.push(item.value);
            }

            that._items.push(item);
        }

        if (that.itemTemplate && that._handleItemTemplate(that.itemTemplate)) {
            that._items.map((item) => that._applyTemplate(item));
        }
    }


    _group() {
        const that = this;

        that.isUpdating++;

        let groups = [];
        let items = [];

        if (that._canSort) {
            that._unsort();
        }

        for (let i = 0; i < that._items.length; i++) {
            const item = that._items[i];
            let label = item.group ? item.group.trim() : item.innerHTML.charAt(0) || item.label.charAt(0);
            label += ' ';

            if (!groups[label]) {
                groups[groups.length++] = groups[label] = { items: [item], label: label };
            }
            else {
                groups[label].items.push(item);
            }
        }

        if (!that.isVirtualized) {
            while (that.$.itemsInnerContainer.firstChild) {
                that.$.itemsInnerContainer.removeChild(that.$.itemsInnerContainer.firstChild);
            }

            const fragment = document.createDocumentFragment();

            that._groups = [];

            for (let i = 0; i < groups.length; i++) {
                const group = groups[i];
                const groupElement = document.createElement('smart-list-items-group');

                groupElement.label = group.label;
                groupElement.dataIndex = i;

                for (let j = 0; j < groups[i].items.length; j++) {
                    const item = group.items[j];

                    items.push(item);
                    item.group = group.label;

                    groupElement.appendChild(item);
                }

                that._groups.push(groupElement);

                fragment.appendChild(groupElement);
            }

            that._items = items;

            const isIE = /Trident|Edge/.test(navigator.userAgent);
            if (isIE) {
                setTimeout(function () {
                    that.$.itemsInnerContainer.appendChild(fragment);
                }, 50);
            }
            else {
                that.$.itemsInnerContainer.appendChild(fragment);
            }
        }
        else {
            that._groups = [];

            for (let i = 0; i < groups.length; i++) {
                const group = groups[i];
                group.dataIndex = i;
                group.grouped = true;
                group.hidden = false;
                group.displayMode = 'plain';

                items.push(group);

                for (let j = 0; j < groups[i].items.length; j++) {
                    const item = group.items[j];

                    item.group = group;
                    items.push(item);
                }
            }

            that._groups = groups;
            that._items = items;
        }

        if (that.sorted) {
            that._sort();
        }

        that.isUpdating--;
    }

    _ungroup() {
        const that = this;

        that.isUpdating++;

        that._groups = [];
        if (that._canSort) {
            that._unsort();
        }

        let items = [];

        if (!that.isVirtualized) {
            const fragment = document.createDocumentFragment();

            for (let i = 0; i < that._items.length; i++) {
                const item = that._items[i];

                fragment.appendChild(item);
                items.push(item);
            }

            if (items.length > 0) {
                that.$.itemsInnerContainer.innerHTML = '';
                that.$.itemsInnerContainer.appendChild(fragment);
            }
        }
        else {
            for (let i = 0; i < that._items.length; i++) {
                const item = that._items[i];

                if (item.grouped) {
                    continue;
                }

                items.push(item);
            }
        }

        that._items = items;

        if (that.sorted) {
            that._sort();
        }

        that.isUpdating--;
    }

    _initializeHtmlListGroups() {
        const that = this;
        const htmlListItemsGroups = that.$.itemsInnerContainer.querySelectorAll('smart-list-items-group');

        that._groups = [];

        for (let i = 0; i < htmlListItemsGroups.length; i++) {
            const group = htmlListItemsGroups[i];
            group.dataIndex = i;

            that._groups.push(group);
        }
    }

    _initializeSelection() {
        const that = this;
        /*
                if (that.selectionMode === 'one' || that.selectionMode === 'oneOrMany' || that.selectionMode === 'oneOrManyExtended') {
                    if (that.selectedIndexes.length === 0 && that.selectedValues.length === 0 && that._items.length > 0 && firstSelectableItem) {
                    }
                }
        */
        const selectedIndexes = that.selectedIndexes.slice(0);
        const selectedValues = that.selectedValues.slice(0);

        that.clearSelection();

        if (that.selectionMode === 'oneOrManyExtended') {
            that._keysPressed['Control'] = true;
        }

        for (let i = 0; i < that._items.length; i++) {
            const item = that._items[i];

            if (selectedIndexes.indexOf(i) >= 0 || selectedValues.indexOf(item.value || item.label) >= 0) {
                if (that._focusedItem) {
                    that._focusedItem._focused = false;
                }
                that._focusedItem = null;
                that.select(item);
            }
        }

        if (that.selectionMode === 'oneOrManyExtended') {
            that._keysPressed['Control'] = false;
        }
    }

    onItemUpdated() {
        const that = this;

        if (!that.isInitialized || that._isUpdating()) {
            return;
        }

        that.isUpdating++;
        that._refreshLayout();
        that.isUpdating--;
    }

    _refreshItems() {
        const that = this;

        if (!that.isInitialized || that._isUpdating()) {
            return;
        }

        that.isUpdating++;

        if (that.grouped) {
            that._ungroup();
        }
        else if (that.sorted && that._canSort) {
            that._unsort();
        }

        if (!that.isVirtualized) {
            that._items = [];

            const items = that.shadowRoot ? that.shadowRoot.querySelectorAll('smart-list-item') : that.querySelectorAll('smart-list-item');

            for (let i = 0; i < items.length; i++) {
                items[i].dataIndex = i;

                that._alternateItem(items[i]);
                that._items.push(items[i]);
            }
        }

        if (that.grouped) {
            that._group();
        }
        else if (that.sorted) {
            that._sort();
        }

        that._refreshLayout();
        that.isUpdating--;
    }

    /**
    * Incremental Search logic.
    */
    _applyIncrementalSearch(key) {
        const that = this;
        if (that.incrementalSearchDelay === null || isNaN(that.incrementalSearchDelay)) {
            return;
        }

        if (['Shift', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Control', 'Home', 'End', 'PageUp', 'PageDown'].indexOf(key) > -1) {
            return;
        }

        if (that._incrementalSearchQuery.indexOf(key) !== 0) {
            that._incrementalSearchQuery += key;
        }

        if (that._incrementalSearchTimer) {
            clearTimeout(that._incrementalSearchTimer);
        }

        that._incrementalSearch();
        that._incrementalSearchTimer = setTimeout(function () {
            that._incrementalSearchQuery = '';
        }, that.incrementalSearchDelay);
        return;
    }


    /**
    * Selects an item by its HTML Element or Value.
    */
    select(item) {
        const that = this;

        if (typeof item === 'string') {
            item = that.getItem(item);
            if (!item) {
                return;
            }
        }
        if (typeof item === 'number') {
            item = that.getItem(item);
            if (!item) {
                return;
            }
        }

        if (item.grouped || item.readonly) {
            return;
        }

        if (that.selectionMode === 'none') {
            that.selectedIndexes = [];
            that.selectedValues = [];
            return;
        }

        if (!that._focusedItem !== item && that.selectionMode !== 'none') {
            if (that._focusedItem) {
                that._focusedItem._focused = false;
            }

            that._focusedItem = item;
            item._focused = true;
        }

        switch (that.selectionMode) {
            case 'one':
                if (that.selectedIndexes.length === 1 && that.selectedIndexes[0] === that._indexOf(item)) {
                    return false;
                }

                that._previouslySelectedIndexes = that.selectedIndexes;

                if (that.selectedIndexes.length >= 1) {
                    that.clearSelection();
                }

                that._select(item);
                delete that._previouslySelectedIndexes;
                return true;
            case 'zeroOrOne':
                if (that.selectedIndexes.length === 1 && that.selectedIndexes[0] === that._indexOf(item)) {
                    that.unselect(item);
                    return true;
                }

                that._previouslySelectedIndexes = that.selectedIndexes;

                if (that.selectedIndexes.length >= 1) {
                    that.clearSelection();
                }

                that._select(item);
                delete that._previouslySelectedIndexes;
                return true;
            case 'radioButton':
                that._previouslySelectedIndexes = that.selectedIndexes;

                if (that.$.itemsInnerContainer.querySelectorAll('smart-list-items-group').length > 0) {
                    const group = item.parentNode;


                    if (!item.selected) {
                        for (let index in group.children) {
                            const item = group.children[index];

                            if (item.selected) {
                                that.unselect(item);
                            }
                        }

                        that._select(item);
                    }

                    delete that._previouslySelectedIndexes;
                    return true;
                }
                else if (that.isVirtualized && that._groups.length > 0) {
                    const group = item.group;

                    if (!item.selected) {
                        for (let index in group.items) {
                            const item = group.items[index];

                            if (item.selected) {
                                that.unselect(item);
                            }
                        }

                        that._select(item);
                    }

                    delete that._previouslySelectedIndexes;
                    return true;
                }


                if (!item.selected) {
                    if (that.selectedIndexes.length >= 1) {
                        that.clearSelection();
                    }

                    that._select(item);
                }

                delete that._previouslySelectedIndexes;
                return true;
            case 'oneOrMany':
                if (!item.selected) {
                    that._select(item);
                }
                else if (that.selectedIndexes.length > 1) {
                    that.unselect(item);
                }
                return true;
            case 'zeroOrMany':
            case 'checkBox':
                if (!item.selected) {
                    that._select(item);
                }
                else {
                    that.unselect(item);
                }
                return true;
            case 'oneOrManyExtended': {
                const selectedValues = that.selectedValues;

                if (that._keysPressed['Control']) {
                    if (that.selectedIndexes.length > 1) {
                        if (item.selected) {
                            that.unselect(item);
                            that._focus(that._items[that.selectedIndexes[0]]);
                        }
                        else {
                            that._select(item);
                        }
                    }
                    else {
                        that._select(item);
                    }
                    return true;
                }

                if (that._keysPressed['Shift']) {
                    const selectedItem = that._items[that.selectedIndexes[0]];
                    let index;

                    that.clearSelection();

                    const preventEvent = selectedValues.indexOf(selectedItem.value) >= 0 || selectedItem.selected;

                    that._select(selectedItem, preventEvent);

                    if (that._indexOf(selectedItem) > that._indexOf(item)) {
                        index = that._indexOf(selectedItem) - 1;
                        while (index >= that._indexOf(item)) {
                            const item = that._items[index];
                            const preventEvent = selectedValues.indexOf(item.value) >= 0 || item.selected;

                            that._select(item, preventEvent);
                            index--;
                        }
                    }
                    else {
                        index = that._indexOf(selectedItem) + 1;
                        while (index <= that._indexOf(item)) {
                            const item = that._items[index];
                            const preventEvent = selectedValues.indexOf(item.value) >= 0 || item.selected;

                            that._select(item, preventEvent);
                            index++;
                        }
                    }

                    const unselectedItems = [];

                    for (let i = 0; i < selectedValues.length; i++) {
                        unselectedItems.push(that.getItem(selectedValues[i]));
                    }

                    if (unselectedItems.length > 0 && !that._propertyChanging) {
                        let selectedItems = [];

                        for (let i = 0; i < that.selectedValues.length; i++) {
                            const previousSelectedValue = that.selectedValues[i];

                            if (selectedValues.indexOf(previousSelectedValue) < 0) {
                                selectedItems.push(that.getItem(previousSelectedValue));
                            }
                        }

                        that.$.fireEvent('change', {
                            'addedItems': selectedItems,
                            'removedItems': unselectedItems,
                            'selected': item.selected,
                            'disabled': item.disabled,
                            'index': that._indexOf(item),
                            'label': item.label,
                            'value': item.value
                        });
                    }

                    return true;
                }

                for (let i = 0; i < selectedValues.length; i++) {
                    const value = selectedValues[i];
                    const selectedItem = that.getItem(value)

                    if (item !== selectedItem) {
                        that.unselect(selectedItem);
                    }
                }

                that.clearSelection();
                that._select(item, selectedValues.indexOf(item.value) >= 0);
                return true;

            }
        }

        return false;
    }

    /**
    * Returns the contents of the template with the new content applied.
    */
    _applyTemplate(item, refreshLayout) {
        const that = this;

        if (that.itemTemplate === null) {
            return;
        }

        if (typeof that.itemTemplate === 'function') {
            that.itemTemplate(item, { label: item.label, value: item.value, index: that._items.indexOf(item) });
            return;
        }

        if (!that._bindingDetails || that._bindingDetails.length === 0) {
            return;
        }

        const bindingsCount = that._bindingDetails.length;
        let clone = document.importNode(that._template.content, true),
            bindingHolderElement,
            bindingStringsCount;

        for (let b = 0; b < bindingsCount; b++) {
            bindingHolderElement = clone.childNodes[that._bindingDetails[b].childNodeIndex];
            bindingStringsCount = that._bindingDetails[b].bindingString.length;
            for (let i = 0; i < bindingStringsCount; i++) {
                const propertyName = that._bindingDetails[b].bindingString[i];
                const propertyValue = propertyName.indexOf('label') >= 0 ? item.label : item.value;

                bindingHolderElement.innerHTML = bindingHolderElement.innerHTML.replace(propertyName, propertyValue);
            }
        }

        item.innerHTML = '';
        for (let i = 0; i < clone.childNodes.length; i++) {
            if (clone.childNodes[i].outerHTML) {
                item.innerHTML += clone.childNodes[i].outerHTML;
            }
        }

        if (refreshLayout === false) {
            return;
        }

        if (that._scrollHeightTimer) {
            clearInterval(that._scrollHeightTimer);
            that._scrollHeightCounter = 0;
        }

        that._scrollHeightTimer = setInterval(function () {
            if (that._lastScrollHeight !== that.$.itemsInnerContainer.scrollHeight || that._scrollHeightCounter === 10) {
                that._refreshLayout();
                clearInterval(that._scrollHeightTimer);
            }
            that._lastScrollHeight = that.$.itemsInnerContainer.scrollHeight;
            that._scrollHeightCounter++;
        }, 50);

    }

    /**
     * Filter items.
     */
    _filterItems(noSelectionRefresh, callback, ignoreFilterQueryLength) {
        const that = this;
        const filterQuery = that.$.filterInput.value;
        let filteredItems, items;

        const updateListBox = function () {
            if (items.length === 0) {
                that._filteredItems = [];

                if (callback) {
                    callback();
                }

                return;
            }

            filteredItems = that._queryItems(filterQuery, that.filterMode);

            for (let i = 0; i < items.length; i++) {
                items[i].hidden = true;
                items[i].$.addClass('smart-hidden');
            }

            for (let i = 0; i < filteredItems.length; i++) {
                const item = filteredItems[i];

                item.hidden = false;
                item.$.removeClass('smart-hidden');
            }

            if (that.grouped && that.isVirtualized) {
                for (let i = 0; i < that._groups.length; i++) {
                    const group = that._groups[i];
                    const items = group.items;

                    let canHide = true;

                    for (let j = 0; j < items.length; j++) {
                        if (!items[j].hidden) {
                            canHide = false;
                        }
                    }

                    if (canHide) {
                        group.hidden = true;
                    }
                }
            }

            if (that.grouped && !that.isVirtualized) {
                for (let i = 0; i < that._groups.length; i++) {
                    const group = that._groups[i];
                    const items = [].concat(...group.querySelectorAll('smart-list-item'));

                    let canHide = true;

                    for (let j = 0; j < items.length; j++) {
                        if (!items[j].$.hasClass('smart-hidden')) {
                            canHide = false;
                        }
                    }

                    if (canHide) {
                        group.$.addClass('smart-hidden');
                    }
                    else {
                        group.$.removeClass('smart-hidden');
                    }
                }
            }

            that._filteredItems = filteredItems;
            that._refreshLayout();

            if (callback) {
                callback();
            }

            if (noSelectionRefresh) {
                return;
            }

            that._refreshSelection();
        }

        if (typeof (that.dataSource) === 'function') {
            if (filterQuery || ignoreFilterQueryLength) {
                const queryCallback = function (response) {
                    if ((!filterQuery && !ignoreFilterQueryLength) || !that.isAttached) {
                        return;
                    }

                    that._updateListBoxAfterQuery = function () {
                        filteredItems = items = that._items;
                        updateListBox();
                    };

                    that.clearItems();
                    that.insert(0, response);
                }

                const response = that.dataSource(filterQuery, queryCallback);

                if (response) {
                    if (!filterQuery && !ignoreFilterQueryLength) {
                        return;
                    }

                    that._updateListBoxAfterQuery = function () {
                        filteredItems = items = that._items;
                        updateListBox();
                    };

                    that.clearItems();
                    that.insert(0, response);
                }
            }
            else {
                that.clearItems();
                filteredItems = items = that._items;
                updateListBox();
            }
        }
        else {
            items = that._items;

            if (items.length === 0) {
                return;
            }

            updateListBox();
        }
    }

    /**
    * Returns the next item in the list.
    */
    _getNextItem(activeItemIndex) {
        const that = this,
            items = that._items,
            itemsCount = that._items.length;
        let index = Math.max(activeItemIndex + 1, 0);

        while (index < itemsCount) {
            const item = items[index];

            if (!item.disabled && !item.hidden && !item.grouped && !item.readonly) {
                return item;
            }

            index++;
        }

        return items[activeItemIndex];
    }

    /**
    * Returns the previous item in the list.
    */
    _getPreviousItem(activeItemIndex) {
        const that = this,
            items = that._items;
        let index = Math.max(activeItemIndex - 1, 0);

        while (index > -1) {
            const item = items[index];

            if (!item.disabled && !item.hidden && !item.grouped && !item.readonly) {
                return item;
            }

            index--;
        }

        return items[activeItemIndex];
    }

    /**
    * Calculates the width/height of the items.
    */
    get _scrollWidth() {
        const that = this,
            items = that._items;

        if (that.__scrollWidth) {
            return that.__scrollWidth;
        }

        that.__scrollWidth = (() => {
            const that = this;
            let longestItemWidth;

            let longestLabel = '';
            for (let i = 0; i < items.length; i++) {
                if (items[i].hidden) {
                    continue;
                }

                const label = items[i].label;
                if (label.length > longestLabel.length) {
                    longestLabel = label;
                }
            }

            const measureItem = that._createItem({ label: longestLabel });

            that.$.itemsContainer.appendChild(measureItem);
            measureItem.label = longestLabel;

            //This setting is enough to make the item width to 'auto' and measure it's size
            measureItem.style.width = 'auto';

            //if not checked, fails in Karma because element is not Completed
            if (measureItem.isCompleted) {
                measureItem.$.itemContainer.style.width = 'auto';
            }

            const measureItemStyle = getComputedStyle(measureItem);
            const padding = parseInt(measureItemStyle.paddingLeft) + parseInt(measureItemStyle.paddingRight);

            longestItemWidth = (measureItem.$.itemContainer || measureItem).offsetWidth + padding;

            measureItem.parentNode.removeChild(measureItem);


            return longestItemWidth;

        })();

        return that.__scrollWidth;
    }

    update(index, details) {
        const that = this;
        const htmlItem = that._items[index];

        if (htmlItem) {
            if (typeof details === 'string') {
                htmlItem.label = details;
                if (undefined === htmlItem.value) {
                    htmlItem.value = details;
                }
            }
            else {
                for (let detail in details) {
                    if (detail === 'selected' && htmlItem[detail] !== details[detail]) {
                        that.select(htmlItem);
                    }
                    else {
                        htmlItem[detail] = details[detail];
                    }

                    if (detail === 'group') {
                        that._refreshItems();
                    }
                }
            }

            if (that.sorted || that.grouped || that.isVirtualized) {
                that._refreshItems();
                that._refreshSelection();
            }
        }
        else {
            that.error(that.localize('indexOutOfBound', { elementType: that.nodeName.toLowerCase(), method: 'update' }));
        }
    }

    insert(index, items) {
        const that = this;
        let htmlItems = [];

        function itemsReady() {
            that._refreshItems();

            if (that._items.length === 0) {
                return;
            }

            if (that._updateListBoxAfterQuery) {
                that._updateListBoxAfterQuery();
                delete that._updateListBoxAfterQuery;
            }

            that._refreshSelection();

            that.$.fireEvent('bindingComplete');
        }

        if (!index) {
            index = 0;
        }

        if (Array.isArray(items)) {
            that.isUpdating++;
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                const htmlItem = that._createItem(item);

                htmlItems.push(htmlItem);

                if (index >= that._items.length || that._items.length === 0) {
                    that.appendChild(htmlItem);
                }
                else {
                    that.insertBefore(htmlItem, that._items[index]);
                }
            }
            that.isUpdating--;
        }
        else {
            const htmlItem = that._createItem(items);

            htmlItems.push(htmlItem);

            if (index >= that._items.length || that._items.length === 0) {
                that.appendChild(htmlItem);
            }
            else {
                that.insertBefore(htmlItem, that._items[index]);
            }
        }

        if (htmlItems.length > 0) {
            htmlItems.map(item => that._applyTemplate(item));
            that._ensureItemsReady(htmlItems, itemsReady);
        }
    }

    remove(index) {
        const that = this;
        const htmlItem = that._items[index];

        if (htmlItem) {
            if (that.isVirtualized) {
                that._items.splice(index, 1);
            }
            else {
                htmlItem.parentNode.removeChild(htmlItem);
            }

            if (htmlItem.selected) {
                that.unselect(htmlItem);
            }

            that._refreshItems();
            that._refreshSelection();
            if (that.selectedIndexes.length === 0 && that._items.length > 0) {
                if (that.selectionMode === 'oneOrMany' || that.selectionMode === 'one' || that.selectionMode === 'oneOrManyExtended') {
                    that.select(that._items[0]);
                }
            }
        }
        else {
            that.error(that.localize('indexOutOfBound', { elementType: that.nodeName.toLowerCase(), method: 'remove' }));
        }
    }

    /**
      * Update all matched cases from the filter input.
      */
    _queryItems(searchQuery, searchMode) {
        const that = this;
        const result = [];
        const findItem = function (item, filterQuery) {
            if (item.grouped) {
                return item;
            }

            switch (searchMode) {
                case 'startsWith':
                    if (item.label.indexOf(filterQuery) === 0) {
                        return item;
                    }
                    break;
                case 'startsWithIgnoreCase':
                    if (item.label.toLowerCase().indexOf(filterQuery.toLowerCase()) === 0) {
                        return item;
                    }
                    break;
                case 'doesNotContain':
                    if (item.label.indexOf(filterQuery) < 0) {
                        return item;
                    }
                    break;
                case 'doesNotContainIgnoreCase':
                    if (item.label.toLowerCase().indexOf(filterQuery.toLowerCase()) < 0) {
                        return item;
                    }
                    break;
                case 'contains':
                    if (item.label.indexOf(filterQuery) > -1) {
                        return item;
                    }
                    break;
                case 'containsIgnoreCase':
                    if (item.label.toLowerCase().indexOf(filterQuery.toLowerCase()) > -1) {
                        return item;
                    }
                    break;
                case 'equals':
                    if (item.label.localeCompare(filterQuery) === 0) {
                        return item;
                    }
                    break;
                case 'equalsIgnoreCase':
                    if (item.label.toLowerCase().localeCompare(filterQuery.toLowerCase()) === 0) {
                        return item;
                    }
                    break;
                case 'endsWith':
                    if (item.label.endsWith(filterQuery)) {
                        return item;
                    }
                    break;
                case 'endsWithIgnoreCase':
                    if (item.label.toLowerCase().endsWith(filterQuery.toLowerCase())) {
                        return item;
                    }
                    break;
                case 'custom':
                    if (that.filterCallback(item, searchQuery)) {
                        return item;
                    }

                    break;
            }

            return null;
        }

        if (searchQuery.length === 0) {
            return that._items;
        }

        for (let i = 0; i < that._items.length; i++) {
            const item = findItem(that._items[i], searchQuery);

            if (item) {
                result.push(item);
            }
        }

        return result;
    }

    _select(item, preventEvent) {
        const that = this;
        const selectedIndex = that.selectedIndexes.indexOf(that._indexOf(item));
        const indexes = that.selectedIndexes.slice(0),
            values = that.selectedValues.slice(0);

        item.selected = true;

        if (selectedIndex === -1) {
            indexes.push(that._indexOf(item));
            values.push(item.value || item.label);
        }
        else {
            that._recycle();
            return false;
        }

        that.selectedIndexes = indexes;
        that.selectedValues = values;
        that._recycle();

        //Update the hidden form input
        that.$.hiddenInput.value = values.toString();

        if (!that.isCompleted || preventEvent || !that.isInitialized || that._propertyChanging) {
            return;
        }

        let previouslySelectedItems = [];

        if (that._previouslySelectedIndexes) {
            for (let i = 0; i < that._previouslySelectedIndexes.length; i++) {
                if (that.selectedIndexes.indexOf(that._previouslySelectedIndexes[i]) < 0) {
                    previouslySelectedItems.push(that._items[that._previouslySelectedIndexes[i]]);
                }
            }

            delete that._previouslySelectedIndexes;
        }

        that.$.fireEvent('change', {
            'addedItems': [item],
            'removedItems': previouslySelectedItems,
            'selected': item.selected,
            'disabled': item.disabled,
            'index': that._indexOf(item),
            'label': item.label,
            'value': item.value
        });

        return true;
    }

    /**
     * Handles the topVisibleIndex property. Sets an item always as first in the listBox view area
     * @param {any} item
     */
    _setTopVisibleIndex(item) {
        const that = this;

        if (typeof item === 'number') {
            that.topVisibleIndex = Math.max(0, item);
            item = that._items[that.topVisibleIndex];
        }

        if (!item) {
            return false;
        }

        if (item.top !== that.scrollTop) {
            that.scrollTop = item.top;

            if (!that.isVirtualized) {
                that.$.itemsContainer.scrollTop = that.scrollTop;
            }

            //Update topVisibleIndex to the first visible item
            if (that.scrollHeight === that.scrollTop) {
                that._updateTopVisibleIndex();
            }
        }
    }

    /**
     * Updates the topVisibleIndex
     */
    _updateTopVisibleIndex() {
        const that = this,
            minScrollTop = that.scrollTop + that._scrollView.verticalScrollBar.offsetHeight - that.offsetHeight;
        let lastVisibleItem;

        if (that.scrollTop < that.scrollHeight / 2) {
            for (let i = 0; i < that._items.length; i++) {
                if (that._items[i].top > minScrollTop) {
                    lastVisibleItem = that._items[i];
                    break;
                }
            }
        }
        else {
            for (let i = that._items.length - 1; i >= 0; i--) {
                if (that._items[i].top < minScrollTop) {
                    break;
                }

                lastVisibleItem = that._items[i];
            }
        }

        if (lastVisibleItem) {
            that.topVisibleIndex = lastVisibleItem.dataIndex;
        }
    }

    unselect(item) {
        const that = this;

        if (!item) {
            return;
        }

        if (typeof item === 'string') {
            item = that.getItem(item);
            if (!item) {
                return;
            }
        }

        if (that.selectionMode === 'none') {
            that.clearSelection();
            return;
        }

        const selectedIndex = that.selectedIndexes.indexOf(that._indexOf(item));
        const indexes = that.selectedIndexes.slice(0),
            values = that.selectedValues.slice(0);

        item.selected = false;

        if (selectedIndex >= 0) {
            indexes.splice(selectedIndex, 1);
            values.splice(selectedIndex, 1);
        }
        else {
            return false;
        }

        that.selectedIndexes = indexes;
        that.selectedValues = values;

        //Update the hidden form input
        that.$.hiddenInput.value = values.toString();

        if (!that.isCompleted || that._propertyChanging) {
            return;
        }

        that.$.fireEvent('change', {
            'addedItems': [],
            'removedItems': [item],
            'selected': item.selected,
            'disabled': item.disabled,
            'index': that._indexOf(item),
            'label': item.label,
            'value': item.value
        });

        that._recycle();

        return true;
    }

    /**
    * Validates the template and if valid, returns an object with binding details.
    */
    _handleItemTemplate(template) {

        if (template === null || !template) {
            return;
        }

        if (typeof template === 'function') {
            return template;
        }

        const that = this;

        if (!('content' in document.createElement('template'))) {
            that.error(that.localize('htmlTemplateNotSuported', { elementType: that.nodeName.toLowerCase() }));
            that.itemTemplate = null;
            return;
        }

        template = document.getElementById(template);
        if (template === null || !('content' in template)) {
            that.error(that.localize('invalidTemplate', { elementType: that.nodeName.toLowerCase(), property: 'itemTemplate' }));
            that.itemTemplate = null;
            return;
        }

        const templateContent = template.content,
            childrenCount = templateContent.childNodes.length,
            regex = /{{\w+}}/g;
        let bindingString,
            bindingsFound;

        that._bindingDetails = [];
        that._template = template;
        for (let i = 0; i < childrenCount; i++) {
            bindingsFound = [];
            while ((bindingString = regex.exec(templateContent.childNodes[i].innerHTML))) {
                bindingsFound.push(bindingString[0]);
            }

            if (bindingsFound.length > 0) {
                that._bindingDetails.push({ childNodeIndex: i, bindingString: bindingsFound });
            }
        }

        return true;
    }


    /**
    * Handles pressed keys.
    */
    _handleKeyStrokes(key) {
        const that = this;
        const toFocus = that.selectionMode === 'radioButton' || that.selectionMode === 'checkBox' || that.selectionMode === 'zeroOrMany'
            || that.selectionMode === 'oneOrMany' || that.selectionMode === 'zeroOrOne';
        let items = that._items;

        if (that.filterable && that.$.filterInput.value.length > 0) {
            items = that._filteredItems;
        }


        if (that.disabled || that.readonly) {
            return;
        }

        switch (key) {
            case 'ArrowLeft':
            case 'ArrowUp':
                that._handleArrowKeys(true);
                break;
            case 'ArrowRight':
            case 'ArrowDown':
                that._handleArrowKeys(false);
                break;
            case ' ': {
                if (that.selectedIndexes.length < 1 && !that._focusedItem) {
                    return;
                }

                const focusedItem = that._focusedItem ? that._focusedItem : that._items[that.selectedIndexes[that.selectedIndexes.length - 1]];

                const makeSelection = (item) => {
                    if (item.selected && that.selectionMode !== 'radioButton') {
                        that.unselect(item);
                    }
                    else {
                        that.select(item);
                    }
                }

                if (that.selectionMode === 'oneOrMany') {
                    if (focusedItem.selected && that.selectedIndexes.length > 1) {
                        makeSelection(focusedItem);
                    }
                    else if (!focusedItem.selected) {
                        makeSelection(focusedItem);
                    }
                    return;
                }

                makeSelection(focusedItem);
                break;
            }
            case 'Home': {
                if (items.length === 0) {
                    return;
                }

                if (toFocus) {
                    that._focus(items[0]);
                }
                else {
                    if (!that._keysPressed['Shift']) {
                        that.clearSelection();
                    }
                    that.select(items[0]);
                    that._focus(items[0]);
                }
                that.scrollTop = 0;
                break;
            }
            case 'End': {
                if (items.length === 0) {
                    return;
                }

                if (toFocus) {
                    that._focus(items[items.length - 1]);
                }
                else {
                    if (!that._keysPressed['Shift']) {
                        that.clearSelection();
                    }
                    that.select(items[items.length - 1]);
                    that._focus(items[items.length - 1]);
                }
                that.scrollTop = that.scrollHeight;
                break;
            }
            case 'PageUp': {
                that._pageUpKeyHandler(items);
                break;
            }
            case 'PageDown': {
                that._pageDownKeyHandler(items);
                break;
            }
        }

        that._recycle();
    }
    /**
    * Horizontal Scroll Bar handler
    */
    _horizontalScrollbarHandler(event) {
        const that = this;

        event.stopPropagation();

        if (that.isVirtualized) {
            that._recycle();
        }
        else {
            that.$.itemsContainer.scrollLeft = event.detail.value;
        }
    }

    _unsort() {
        const that = this;

        that.isUpdating++;

        const sortByIndex = function (a, b) {
            let indexA = a.dataIndex;
            let indexB = b.dataIndex;

            if (indexA < indexB) {
                return -1;
            }
            if (indexA > indexB) {
                return 1;
            }

            return 0;
        };

        if (!that.isVirtualized) {
            if (that._groups.length > 0) {
                that._groups.sort(sortByIndex);

                let sortedItems = [];

                for (let i = 0; i < that._groups.length; i++) {
                    const group = that._groups[i];
                    const items = [].concat(...group.querySelectorAll('smart-list-item'));

                    items.sort(sortByIndex);
                    sortedItems = sortedItems.concat(items);
                }

                that._items = sortedItems;
            }
            else {
                that._items.sort(sortByIndex);
            }

            that._applySortOrder();
        }
        else {
            if (that._groups.length > 0) {
                that._groups.sort(sortByIndex);

                let sortedItems = [];

                for (let i = 0; i < that._groups.length; i++) {
                    const group = that._groups[i];
                    const items = [].concat(...group.items);

                    items.sort(sortByIndex);

                    sortedItems.push(group);
                    sortedItems = sortedItems.concat(items);
                }

                that._items = sortedItems;
            }
            else {
                that._items.sort(sortByIndex);
            }
        }

        that.isUpdating--;
    }

    _applySortOrder() {
        const that = this;

        const reorder = function (items) {
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                const parentNode = item.parentNode;

                if (!parentNode) {
                    continue;
                }

                parentNode.appendChild(item);
            }
        }

        reorder(that._items);
        reorder(that._groups);
    }

    _sort() {
        const that = this;

        if (!that._canSort) {
            return;
        }

        that.isUpdating++;

        const sortByLabel = function (a, b) {
            let labelA = a.label;
            let labelB = b.label;

            if (that.sortDirection === 'asc') {
                if (labelA < labelB) {
                    return -1;
                }
                if (labelA > labelB) {
                    return 1;
                }
            }
            else {
                if (labelA < labelB) {
                    return 1;
                }
                if (labelA > labelB) {
                    return -1;
                }
            }

            return 0;
        };

        that._groups.sort(sortByLabel);

        if (!that.isVirtualized) {
            if (that._groups.length > 0) {
                let sortedItems = [];
                for (let i = 0; i < that._groups.length; i++) {
                    const group = that._groups[i];
                    const items = [].concat(...group.querySelectorAll('smart-list-item'));

                    items.sort(sortByLabel);
                    sortedItems = sortedItems.concat(items);
                }

                that._items = sortedItems;
            }
            else {
                that._items.sort(sortByLabel);
            }

            that._applySortOrder();
        }
        else {
            if (that._groups.length > 0) {
                let sortedItems = [];
                for (let i = 0; i < that._groups.length; i++) {
                    const group = that._groups[i];
                    const items = [].concat(...group.items);

                    sortedItems.push(group);
                    items.sort(sortByLabel);
                    sortedItems = sortedItems.concat(items);
                }

                that._items = sortedItems;
            }
            else {
                that._items.sort(sortByLabel);
            }
        }

        that.isUpdating--;
    }

    getItem(value) {
        const that = this;

        for (let i = 0; i < that._items.length; i++) {
            if (that._items[i].value === value) {
                return that._items[i];
            }
        }

        return null;
    }

    _focus(item) {
        const that = this;

        if (!item || that.selectionMode === 'none' || that.disabled || that.readonly) {
            return;
        }


        if (that._focusedItem) {
            that._focusedItem._focused = false;
        }

        that._focusedItem = item;
        that._focusedItem._focused = true;
    }

    /**
     * KeyDown handler.
     */
    _keyDownHandler(event) {
        const that = this,
            activeElement = (that.shadowRoot || that.getRootNode()).activeElement || document.activeElement;

        let key = event.key;

        if (that.disabled || that.readonly) {
            return;
        }

        if (that.filterable && that.$.filterInput === activeElement) {
            return;
        }

        if (!that._focused) {
            return;
        }

        if (that._items.length === 0 || that.disabled || that.displayLoadingIndicator) {
            return;
        }

        if (that.editable) {
            if (key === 'F2') {
                that._dblclickEventHandler({ target: that._focusedItem });
                return;
            }
            else {
                if (that.$.editInput === activeElement) {
                    return;
                }
            }
        }

        if (that.selectionMode === 'none') {
            return;
        }

        event.stopPropagation();

        // Fix for not standartized event.key in Edge.
        switch (key) {
            case 'Down':
            case 'Right':
            case 'Left':
            case 'Up':
                key = 'Arrow' + key;
                break;
        }

        if (that.filterable) {
            switch (key) {
                case 'ArrowLeft':
                case 'ArrowRight':
                    return;
                case 'ArrowUp':
                case 'ArrowDown':
                    event.preventDefault();
            }
        }

        that._applyIncrementalSearch(key);
        if (['Shift', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Control', ' ', 'Home', 'End', 'PageUp', 'PageDown'].indexOf(key) < 0) {
            return;
        }

        event.preventDefault(); //prevent window scrolling

        if (!that._focusedItem && that._items.length > 0) {

            if (that.selectionMode === 'one' || that.selectionMode === 'oneOrMany' || that.selectionMode === 'oneOrManyExtended') {
                that.select(that._items[0]);
            }
            else {
                that._focus(that._items[0]);
            }
            return;
        }

        switch (that.selectionMode) {
            case 'one':
                if (key === 'Shift' || key === 'Control' || key === ' ') {
                    return;
                }

                that._handleKeyStrokes(key);
                break;
            case 'oneOrMany':
            case 'zeroOrOne':
            case 'zeroOrMany':
            case 'radioButton':
            case 'checkBox':
                if (key === 'Shift' || key === 'Control') {
                    return;
                }

                that._handleKeyStrokes(key);
                break;
            case 'oneOrManyExtended':
                if (key === ' ') {
                    return;
                }

                that._keysPressed[key] = event.type === 'keydown';
                that._handleKeyStrokes(key);
                break;
        }
    }

    /**
    * KeyUp handler.
    */
    _keyUpHandler(event) {
        const that = this,
            activeElement = (that.shadowRoot || that.getRootNode()).activeElement || document.activeElement;

        if (that.editable && that.$.editInput === activeElement) {
            return;
        }

        if (that.filterable && that.$.filterInput === activeElement) {
            if (that._filterTimer) {
                clearTimeout(that._filterTimer);
            }

            that._filterTimer = setTimeout(function () {
                const context = that.context;

                that.context = that;
                that._filterItems();
                that.scrollTop = that.$.itemsContainer.scrollTop = 0;
                that.scrollLeft = that.$.itemsContainer.scrollLeft = 0;
                that.context = context;
            }, 300);
            return;
        }

        if (!that._focused) {
            return;
        }

        if (that._focusedItem && that._focusedItem.hidden) {
            if (that._filteredItems.length > 0) {
                let itemToFocus = that._filteredItems[0];

                if (itemToFocus.grouped && that._filteredItems.length > 1) {
                    itemToFocus = that._filteredItems[1];
                }
                that._focus(itemToFocus);
                that._recycle();
            }
        }

        event.stopPropagation();
        event.preventDefault();

        if (that.disabled) {
            return;
        }

        if (['Shift', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Control', ' ', 'PageUp', 'PageDown'].indexOf(event.key) < 0) {
            return;
        }

        that._keysPressed[event.key] = false;
    }


    /**
    * Container mousewheel event handler.
    */
    _mouseWheelHandler(event) {
        const that = this;

        if (!that.computedHorizontalScrollBarVisibility && !that.computedVerticalScrollBarVisibility) {
            return;
        }

        if (!that.disabled && that.computedVerticalScrollBarVisibility) {
            event.stopPropagation();
            event.preventDefault();
            that.scrollTo(that.scrollTop + that._getScrollCoefficient(event, that.offsetHeight));
        }
    }

    /**
    * Page Down key handler.
    */
    _pageDownKeyHandler(items) {
        const that = this;

        if (items.length === 0) {
            return;
        }

        let selectedItem = that._items[that.selectedIndexes[that.selectedIndexes.length - 1]];
        if (that.selectionMode === 'checkBox' || that.selectionMode === 'radioButton' || that.selectionMode === 'zeroOrMany' ||
            that.selectionMode === 'oneOrMany' || that.selectionMode === 'zeroOrOne') {
            if (that._focusedItem) {
                selectedItem = that._focusedItem;
            }
        }

        let item;
        const selectedItemIndex = that._indexOf(selectedItem);
        let viewTop = selectedItem.top + that.$.itemsContainer.offsetHeight - selectedItem.height;

        for (let i = selectedItemIndex; i < items.length; i++) {
            if (items[i].top >= viewTop) {
                item = items[i];
                break;
            }
        }

        if (!item) {
            item = items[items.length - 1];
        }

        if (that.selectionMode === 'checkBox' || that.selectionMode === 'radioButton' || that.selectionMode === 'zeroOrMany'
            || that.selectionMode === 'oneOrMany' || that.selectionMode === 'zeroOrOne') {
            that._focus(item);
        }
        else {
            if (!item.selected) {
                if (!that._keysPressed['Shift']) {
                    that.clearSelection();
                }
                that.select(item);
                that._focus(item);
            }
        }

        if (item.height + item.top > that.$.itemsContainer.scrollTop + that.$.itemsContainer.offsetHeight ||
            item.top < that.$.itemsContainer.scrollTop) {
            that.scrollTop = item.top - that.$.itemsContainer.offsetHeight + item.height;
        }
    }

    /**
    * Page Up key handler.
    */
    _pageUpKeyHandler(items) {
        const that = this;

        if (items.length === 0) {
            return;
        }

        let selectedItem = that._items[that.selectedIndexes[that.selectedIndexes.length - 1]];

        if (that.selectionMode === 'checkBox' || that.selectionMode === 'radioButton' || that.selectionMode === 'zeroOrMany' ||
            that.selectionMode === 'oneOrMany' || that.selectionMode === 'zeroOrOne') {
            if (that._focusedItem) {
                selectedItem = that._focusedItem;
            }
        }

        const viewTop = selectedItem.top - that.$.itemsContainer.offsetHeight;
        const selectedItemIndex = that._indexOf(selectedItem);
        let item;


        for (let i = selectedItemIndex; i > 0; i--) {
            if (items[i].top <= viewTop) {
                item = items[i];
                break;
            }
        }

        if (!item) {
            item = items[0];
        }

        if (that.selectionMode === 'checkBox' || that.selectionMode === 'radioButton' || that.selectionMode === 'zeroOrMany' ||
            that.selectionMode === 'oneOrMany' || that.selectionMode === 'zeroOrOne') {
            that._focus(item);
        }
        else {
            if (!item.selected) {
                if (!that._keysPressed['Shift']) {
                    that.clearSelection();
                }
                that.select(item);
                that._focus(item);
            }
        }

        that.scrollTop = item.top;

        const itemIndex = that._indexOf(item);

        if (itemIndex === 0) {
            that.scrollTop = 0;
        }
    }

    /**
    * Removes all items from DOM. 
    */
    clearItems() {
        const that = this;

        that.$.itemsInnerContainer.innerHTML = '';
        that.clearSelection();
        that._items = [];
        that.$placeholder.removeClass('smart-hidden');
    }

    /**
    * List Box resize handler.
    */
    _resizeHandler(event) {
        const that = this;

        if (event.target === that && !that._isUpdatingScrollBars) {
            that._isUpdatingScrollBars = true;
            that._initializeRecyclingItems();
            that._refreshLayout();
            that._isUpdatingScrollBars = false;
        }
    }

    _indexOf(item) {
        const that = this;

        if (!item) {
            return -1;
        }

        let index = that._items.indexOf(item);

        if (index === -1) {
            index = that._items.indexOf(that.getItem(item.value));
        }

        return index;
    }

    /**
    * Search items.
    */
    _incrementalSearch() {
        const that = this;
        const canSelect = that.selectionMode !== 'radioButton' && that.selectionMode !== 'checkBox' &&
            that.selectionMode !== 'zeroOrMany' && that.selectionMode !== 'oneOrMany' && that.selectionMode !== 'zeroOrOne';

        let searchQuery;
        let i = 0;

        switch (that.incrementalSearchMode) {
            case 'containsIgnoreCase':
            case 'equalsIgnoreCase':
            case 'startsWithIgnoreCase':
            case 'endsWithIgnoreCase':
                searchQuery = that._incrementalSearchQuery.toLowerCase();
                break;
            default:
                searchQuery = that._incrementalSearchQuery;
                break;
        }

        const select = function (item) {
            if (item.grouped || item.readonly) {
                return;
            }

            if (canSelect) {
                if (that.selectedIndexes.length > 0) {
                    that.clearSelection();
                }
                that._focus(item);
                that.select(item);
            }
            else {
                that._focus(item);
            }

            //Move the scrollBar when item is out of view
            if (item.height + item.top > that.$.itemsContainer.scrollTop + that.$.itemsContainer.offsetHeight ||
                item.top < that.scrollTop) {
                that.scrollTop = item.top;
            }
            if (that._indexOf(item) === 0) {
                that.scrollTop = 0;
            }
            if (that._indexOf(item) === that._items.length - 1) {
                that.scrollTop = that.scrollHeight;
            }
        }

        if (that._previousEntry.localeCompare(searchQuery) !== 0) {
            that._incrementalSearchItems = that._queryItems(that._incrementalSearchQuery, that.incrementalSearchMode);
            delete that._itemPosition;
        }

        //Previously entered string.
        that._previousEntry = searchQuery;

        const foundItemsCount = that._incrementalSearchItems.length;

        if (foundItemsCount === 0) {
            return;
        }

        if (foundItemsCount === 1) {
            select(that._incrementalSearchItems[0]);
            return;
        }

        if (that._itemPosition !== undefined) {
            if (that._itemPosition < foundItemsCount - 1) {
                i = that._itemPosition;
            }
            else {
                i = 0;
                if (canSelect) {
                    that._incrementalSearchItems[that._itemPosition].selected = false;
                    that.selectedIndexes = [];
                    that.selectedValues = [];
                }
                else {
                    that._incrementalSearchItems[that._itemPosition]._focused = false;
                }
            }
        }
        else if (canSelect) {
            that.clearSelection();
        }

        for (i; i < foundItemsCount; i++) {
            if (that._incrementalSearchItems[i].selected && canSelect) {
                that._incrementalSearchItems[i].selected = false;
                that.selectedIndexes = [];
                that.selectedValues = [];
                continue;
            }
            if (!canSelect && that._incrementalSearchItems[i]._focused) {
                that._incrementalSearchItems[i]._focused = false;
                continue;
            }
            select(that._incrementalSearchItems[i]);
            that._itemPosition = i;
            return;
        }
    }

    /**
    * Document select start handler.
    */
    _selectStartHandler(event) {
        const that = this,
            activeElement = (that.shadowRoot || that.getRootNode()).activeElement;

        if (that.$.filterInput === activeElement) {
            return;
        }

        if (that.$.editInput === activeElement) {
            return;
        }

        event.preventDefault();
    }

    /**
    * Sets an item active via Keyboard.
    */
    /**
    * Sets an item active via Keyboard.
    */
    _handleArrowKeys(isArrowUp) {
        const that = this;
        const canSelect = that.selectionMode !== 'radioButton' && that.selectionMode !== 'checkBox' && that.selectionMode !== 'zeroOrMany' && that.selectionMode !== 'oneOrMany' && that.selectionMode !== 'zeroOrOne';

        if (that.disabled || that.readonly) {
            return;
        }

        let focusedItemIndex;

        if (that._focusedItem && !that._keysPressed['Shift']) {
            focusedItemIndex = that._indexOf(that._focusedItem);
            that._focusedItem._focused = false;
        }
        else if (that.selectedIndexes.length !== 0) {
            focusedItemIndex = that.selectedIndexes[that.selectedIndexes.length - 1]
        }
        else {
            return;
        }

        const focusedItem = isArrowUp ?
            that._getPreviousItem(focusedItemIndex) :
            that._getNextItem(focusedItemIndex);

        that._focus(focusedItem);

        if (canSelect) {
            if (that._keysPressed['Shift']) {
                that.select(focusedItem);
            }
            else if (that._items[focusedItemIndex] !== focusedItem) {
                that.clearSelection();
                that.select(focusedItem);
            }
        }

        that.ensureVisible(focusedItem);
    }
    /**
    * Enable/Disable the filter input component.
    */
    _refreshFilter() {
        const that = this;

        if (that.filterable) {
            that.$.filterInput.disabled = that.disabled || that.displayLoadingIndicator ? true : false;
            that.$filterInputContainer.removeClass('smart-hidden');
            that.$itemsContainer.addClass('filter');
            return;
        }

        that.$.filterInput.disabled = true;
        that.$filterInputContainer.addClass('smart-hidden');
        that.$itemsContainer.removeClass('filter');
    }

    /**
    * Set tabIndex.
    */
    _setFocusable() {
        const that = this;

        if (that.disabled || that.unfocusable) {
            that.removeAttribute('tabindex');
            return;
        }

        that.tabIndex = that.tabIndex > 0 ? that.tabIndex : 0;
    }

    /**
    * Set Loading Indicator Visibility
    */
    _setLoadingIndicatorVisibility() {
        const that = this;

        if (that.displayLoadingIndicator) {
            that.$loadingIndicatorContainer.hasClass('smart-visibility-hidden') ?
                that.$loadingIndicatorContainer.removeClass('smart-visibility-hidden') : that.$loadingIndicatorContainer.removeClass('smart-hidden');
            return;
        }

        //Check for old browsers.
        that._areCSSVarsSupported ?
            that.$loadingIndicatorContainer.addClass('smart-hidden') : that.$loadingIndicatorContainer.addClass('smart-visibility-hidden');
    }

    /**
    * Sets the initial scroll bar sizes.
    */
    _refreshLayout() {
        const that = this;
        const source = that._items;

        that.__scrollHeight = null;
        that.__scrollWidth = null;
        that._height = null;

        if (!that._scrollView) {
            that._scrollView = new Smart.Utilities.Scroll(that, that.$.horizontalScrollBar, that.$.verticalScrollBar);
        }

        that.$itemsContainer.removeClass('hscroll');
        that.$itemsContainer.removeClass('vscroll');

        if (!source || source === null || source.length === 0) {
            that.scrollWidth = 0;
            that.scrollHeight = 0;
            that.$filterInputContainer.removeClass('vscroll');
            that.$placeholder.removeClass('smart-hidden');

            if (that.isVirtualized) {
                that._recycle();
            }

            return;
        }

        that.$placeholder.addClass('smart-hidden');

        const horizontalOffset = 2 * (parseInt(getComputedStyle(that.$.itemsInnerContainer).getPropertyValue('--smart-list-item-horizontal-offset')) || 0);

        let hScrollWidth = that._scrollWidth - that.$.itemsContainer.offsetWidth - horizontalOffset;
        let vScrollHeight = that._scrollHeight;

        that._refreshHorizontalScrollBarVisibility(hScrollWidth);
        that._refreshVerticalScrollBarVisibility(vScrollHeight);


        if (that.horizontalScrollBarVisibility === 'hidden') {
            that.$.itemsInnerContainer.style.width = that.$.itemsContainer.offsetWidth - horizontalOffset;
        }
        else {
            that.$.itemsInnerContainer.style.width = Math.max(that.$.itemsContainer.offsetWidth - horizontalOffset, -horizontalOffset + that.__scrollWidth) + 'px';
        }

        if (that.computedVerticalScrollBarVisibility) {
            hScrollWidth = that._scrollWidth - that.$.itemsContainer.offsetWidth - that._scrollView.vScrollBar.offsetWidth;
            that._refreshHorizontalScrollBarVisibility(hScrollWidth);

            if (that.horizontalScrollBarVisibility !== 'hidden') {
                that.$.itemsInnerContainer.style.width = Math.max(that.$.itemsContainer.offsetWidth - horizontalOffset, -horizontalOffset + that.__scrollWidth - that._scrollView.vScrollBar.offsetWidth) + 'px';
            }

            if (that.computedHorizontalScrollBarVisibility) {
                if (!(that.horizontalScrollBarVisibility === 'visible' && that.scrollWidth === 0)) {
                    that.__scrollHeight += that._scrollView.hScrollBar.offsetHeight;
                }
                else if (that.horizontalScrollBarVisibility === 'visible') {
                    that.__scrollHeight += that._scrollView.hScrollBar.offsetHeight;
                }

                that.scrollHeight = that.__scrollHeight;
            }

            if (that.isVirtualized) {
                that._recycle();
            }

            return;
        }

        hScrollWidth = that._scrollWidth - that.$.itemsContainer.offsetWidth - horizontalOffset;
        that._refreshHorizontalScrollBarVisibility(hScrollWidth);

        if (that.computedHorizontalScrollBarVisibility) {
            that.scrollHeight = that._scrollHeight;
            that._refreshVerticalScrollBarVisibility(that.scrollHeight);

            //Resize event not thrown after 'bottom-corner' is applied
            if (that._scrollView.vScrollBar.$.hasClass('bottom-corner')) {
                that._scrollView.vScrollBar.refresh();
            }
        }

        if (that.isVirtualized) {
            that._recycle();
        }

        const isIE = /Trident|Edge/.test(navigator.userAgent);
        if (!that.isRefreshing && isIE) {
            setTimeout(function () {
                that.isRefreshing = true;
                that._refreshLayout();
                that.isRefreshing = false;
            }, 50);
        }
    }

    /**
    * Style change event.
    */
    _styleChangedHandler() {
        const that = this;

        that._refreshLayout();
    }

    /**
    * SwipeLeft event handler.
    **/
    _swipeLeftHandler() {
    }

    /**
    * SwipeRight event handler.
    */
    _swipeRightHandler() {
    }

    /**
    * Enable/Disable Horizontal Scroll bar.
    */
    _refreshHorizontalScrollBarVisibility(scrollWidth) {
        const that = this;

        that.scrollWidth = scrollWidth;

        if (that.computedHorizontalScrollBarVisibility) {
            that.scrollLeft = that.$.itemsContainer.scrollLeft;
            that.$itemsContainer.addClass('hscroll');
        }
        else {
            that.$itemsContainer.removeClass('hscroll');
        }
    }

    /**
    * Enable/Disable Vertical Scroll bar.
    */
    _refreshVerticalScrollBarVisibility(scrollHeight) {
        const that = this;

        that.scrollHeight = scrollHeight;

        if (that.computedVerticalScrollBarVisibility) {
            that.$itemsContainer.addClass('vscroll');
            that.$filterInputContainer.addClass('vscroll');

        }
        else {
            that.$itemsContainer.removeClass('vscroll');
            that.$filterInputContainer.removeClass('vscroll');
        }
    }

    /**
    * Validates Template properties.
    */
    _validateTemplate(property, template) {
        if (template === null || !template) {
            return;
        }

        const that = this;

        if (!('content' in document.createElement('template'))) {
            that.error(that.localize('htmlTemplateNotSuported', { elementType: that.nodeName.toLowerCase() }));
            that[property] = null;
            return;
        }

        template = document.getElementById(template);
        if (template === null || !('content' in template)) {
            that.error(that.localize('invalidTemplate', { elementType: that.nodeName.toLowerCase(), property: property }));
            that[property] = null;
            return;
        }

        return template;
    }

    _getItemIndexByPosition(position) {
        const that = this;

        const getItemIndex = (items) => {
            let bottomPointer = 0;
            let topPointer = items.length - 1;

            if (position <= 0) {
                return 0;
            }

            const lastNode = items[items.length - 1];

            if (lastNode.top <= position) {
                return items.length - 1;
            }

            const condition = true;

            while (condition) {
                const midPointer = Math.floor((bottomPointer + topPointer) / 2);
                const currentitem = items[midPointer];
                if (that._isItemInPosition(currentitem, position)) {
                    return midPointer;
                }
                else if (currentitem.top < position) {
                    bottomPointer = midPointer + 1;
                }
                else if (currentitem.top > position) {
                    topPointer = midPointer - 1;
                }
            }
        };

        const items = that.filterable && that.$.filterInput.value.length > 0 ? that._filteredItems : that._items;
        const index = getItemIndex(items);

        return index;
    }

    _isItemInPosition(item, position) {
        const topPixel = item.top;
        const bottomPixel = item.top + item.height;
        const pixelInRow = topPixel <= position && bottomPixel > position;

        return pixelInRow;
    }

    get isVirtualized() {
        const that = this;

        return that.virtualized && that.dataSource && that.dataSource.length > 0
    }

    _recycle() {
        const that = this;

        if (!that._recyclingItems) {
            return;
        }

        let height = that._height;
        if (!that._height) {
            height = that._height = that.$.itemsContainer.offsetHeight;
        }

        let j = 0;

        const value = that.scrollTop;
        const itemIndex = that._getItemIndexByPosition(value);
        const items = that.filterable && that.$.filterInput.value.length > 0 ? that._filteredItems : that._items;
        const item = items[itemIndex];

        let itemTop = item ? item.top : 0;

        that.$.itemsInnerContainer.style.left = -that.scrollLeft + 'px';
        that.$.itemsInnerContainer.style.top = -value + itemTop + 'px';

        that.isUpdating++;

        if (itemIndex >= 0) {
            for (let i = itemIndex; i < items.length; i++) {
                const item = items[i];

                if (item.height === 0) {

                    continue;
                }

                if (itemTop + item.height >= value && itemTop <= value + height) {
                    const listItem = that._recyclingItems[j++];

                    if (!listItem) {
                        break;
                    }

                    listItem.context = document;
                    listItem.dataItem = item;
                    listItem.label = item.label;
                    listItem.value = item.value;
                    listItem.selected = item.selected;
                    listItem._focused = item._focused;
                    listItem.hidden = item.hidden;
                    listItem.grouped = item.grouped;
                    listItem.readonly = item.readonly;
                    listItem.style.height = item.height + 'px';
                    that._alternateItem(listItem);

                    if (item.title) {
                        listItem.title = item.title;
                    }
                    else {
                        listItem.title = '';
                    }

                    if (!item.grouped) {
                        listItem.displayMode = item.displayMode;
                    }
                    else {
                        listItem.displayMode = 'plain';
                    }

                    if (that.scrollWidth > 0) {
                        listItem.style.width = that.$.itemsInnerContainer.offsetWidth + that.scrollWidth + 'px';
                    }

                    if (that.itemTemplate && that._handleItemTemplate(that.itemTemplate)) {
                        that._applyTemplate(listItem, false);
                    }
                }
                else {
                    break;
                }
                itemTop += item.height;
            }
        }

        if (j < that._recyclingItems.length) {
            for (let i = j; i < that._recyclingItems.length; i++) {
                const listItem = that._recyclingItems[j++];
                const context = listItem.context;

                listItem.context = document;
                listItem.hidden = true;
                listItem.context = context;
            }
        }

        that.isUpdating--;
    }

    /**
    * Vertical Scroll Bar handler
    */
    _verticalScrollbarHandler(event) {
        const that = this;
        const value = event.detail.value;
        event.stopPropagation();

        if (that.isVirtualized) {
            that._recycle();
        }
        else {
            that.$.itemsContainer.scrollTop = value;
        }

        that._updateTopVisibleIndex();

        if (event.context.max === event.context.value) {
            that.$.fireEvent('scrollBottomReached');
            return;
        }

        if (event.context.min === event.context.value) {
            that.$.fireEvent('scrollTopReached');
        }
    }
});