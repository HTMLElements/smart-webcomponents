
/* Smart HTML Elements v4.5.0 (2019-Sep) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

/**
 * Accordion item custom element.
 */
Smart('smart-accordion-item', class AccordionItem extends Smart.ContentElement {
    // Accordion item's properties.
    static get properties() {
        return {
            'dragged': {
                value: false,
                type: 'boolean'
            },
            'expanded': {
                value: false,
                type: 'boolean'
            },
            'focused': {
                value: false,
                type: 'boolean'
            },
            'index': {
                value: null,
                type: 'number?'
            },
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
     * Accordion item's event listeners.
     */
    static get listeners() {
        return {
            'accordionItemHeader.mouseenter': '_headerMouseEnterHandler',
            'accordionItemHeader.mouseleave': '_headerMouseLeaveHandler',
            'accordionItemHeader.down': '_ripple'
        };
    }

    /**
     * Expander item's HTML template.
     */
    template() {
        return `<div id="container">
                    <div id="accordionItemHeader" class ="smart-accordion-item-header smart-unselectable">
                        <span id="arrow" class ="smart-arrow"></span>
                        <span id="label" class ="smart-label" inner-h-t-m-l='[[label]]'></span>
                    </div>
                    <div id="accordionItemContent" class ="smart-accordion-item-content">
                        <div id="contentContainer" class ="smart-content-container"><content></content></div>
                    </div>
                </div>`;
    }

    /**
     * Called when a property is changed.
     */
    propertyChangedHandler(propertyName, oldValue, newValue) {
        super.propertyChangedHandler(propertyName, oldValue, newValue);

        oldValue = parseInt(oldValue);
        newValue = parseInt(newValue);

        if (propertyName !== 'index' || isNaN(oldValue) || isNaN(newValue)) {
            return;
        }

        const that = this,
            allSiblingsCount = that.parentElement.parentElement._items.length;

        if (newValue < 0) {
            newValue = 0;
        }
        else if (newValue >= allSiblingsCount) {
            newValue = allSiblingsCount - 1;
        }

        if (newValue !== oldValue) {
            that.$.fireEvent('indexChange', { 'newIndex': newValue, 'oldIndex': oldValue });
        }

        that.index = newValue;
    }

    /**
    * Accordion's header onMouseEnter handler.
    **/
    _headerMouseEnterHandler() {
        const that = this;

        if (that.disabled) {
            return;
        }

        that.setAttribute('hovered', '');
    }

    /**
    * Accordion's header onMouseLeave handler.
    **/
    _headerMouseLeaveHandler() {
        const that = this;

        if (that.disabled) {
            return;
        }

        that.removeAttribute('hovered');
    }

    /**
   * Accordion's material ripple effect
   **/
    _ripple(event) {
        const that = this;

        if (that.disabled) {
            return;
        }

        if (that.hasRippleAnimation) {
            Smart.Utilities.Animation.Ripple.animate(that.$.container, event.pageX, event.pageY);
        }
    }

    /**
     * Sets the index without "propertyChangedHandler" being called
     */
    _setIndex(index) {
        const that = this,
            oldContext = that.context;

        that.context = that;
        that.index = index;
        that.context = oldContext;
    }
});


/**
* Accordion custom element.
*/
Smart('smart-accordion', class Accordion extends Smart.BaseElement {
    /** 
    * Accordion's properties 
    **/
    static get properties() {
        return {
            'expandedIndexes': {
                value: [],
                type: 'array'
            },
            'expandMode': {
                allowedValues: ['single', 'singleFitHeight', 'multiple', 'toggle', 'none'],
                value: 'singleFitHeight',
                type: 'string'
            },
            'messages': {
                extend: true,
                value: {
                    'en': {
                        'accordionItemRequired': '{{elementType}}: "{{method}}" requires an item from type "smart-accordion-item".',
                        'indexOutOfBound': '{{elementType}}: Out of bound index/indexes in "{{method}}" method.',
                        'invalidSettings': '{{elementType}}: "{{method}}" method accepts a string or an object as it\'s second parameter.',
                        'missingReference': '{{elementType}}: Missing reference to {{files}}.',
                        'noItems': '{{elementType}}: No child elements found.',
                        'overridingProperties': '{{elementType}}: Overriding properties {{property1}} and {{property2}} applied. The "{{property1}}" property is used by default.'
                    }
                },
                type: 'object'
            },
            'reorder': {
                value: false,
                type: 'boolean'
            }
        }
    }

    /**
     * Accordion's event listeners.
     */
    static get listeners() {
        return {
            'down': '_downHandler',
            'focus': '_focusHandler',
            'indexChange': '_indexChangeHandler',
            'keydown': '_keyDownHandler',
            'move': '_moveHandler',
            'resize': '_resizeHandler',
            'styleChanged': '_resizeHandler',
            'document.up': '_upHandler'
        };
    }

    /**
    * Accordion's HTML template.
    */
    template() {
        return `<div id="container">
                    <content></content>
                </div>`;
    }

    /**
    * CSS files needed for the element (ShadowDOM)
    */
    static get styleUrls() {
        return [
            'smart.accordion.css'
        ]
    }

    /**
    * Called when the element is ready. Used for one-time configuration of the Accordion.
    */
    ready() {
        super.ready();
        const that = this;

        that._createElement();
    }

    /**
   * Updates the accordion when a property is changed.
   * @param {string} propertyName The name of the property.
   * @param {number/string} oldValue The previously entered value. Max, min and value are of type Number. The rest are of type String.
   * @param {number/string} newValue The new entered value. Max, min and value are of type Number. The rest are of type String.
   */
    propertyChangedHandler(propertyName, oldValue, newValue) {
        const that = this;

        if (propertyName === 'expandedIndexes') {
            if (oldValue.toString() === newValue.toString()) {
                return;
            }

            let sanitizedNewValue = [];

            if (that._items.length > 0) {
                for (let i = 0; i < newValue.length; i++) {
                    let sanitizedNewValueSingleItem = parseInt(newValue[i]);

                    if (!isNaN(sanitizedNewValueSingleItem)) {
                        if (that._expandModeIs(['single', 'singleFitHeight', 'toggle'])) {
                            if ((sanitizedNewValue.length < 1) && (sanitizedNewValueSingleItem >= 0 && sanitizedNewValueSingleItem < that._items.length)) {
                                sanitizedNewValue.push(sanitizedNewValueSingleItem);
                            }

                            break;
                        }
                        else {
                            if (sanitizedNewValueSingleItem >= 0 && sanitizedNewValueSingleItem <= that._items.length && sanitizedNewValue.indexOf(sanitizedNewValueSingleItem) === -1) {
                                sanitizedNewValue.push(sanitizedNewValueSingleItem);
                            }
                        }
                    }
                }
            }

            if (sanitizedNewValue.length === 0 && that._expandModeIs(['single', 'singleFitHeight'])) {
                newValue = oldValue.slice();
                that.expandedIndexes = newValue;

                return;
            }

            newValue = sanitizedNewValue;

            const indexes = that._compareExpandedIndexes(oldValue, newValue);

            that._toggleItems('collapse', indexes.collapse);
            that._toggleItems('expand', indexes.expand);

            that.expandedIndexes = newValue;

            return;
        }

        super.propertyChangedHandler(propertyName, oldValue, newValue);

        switch (propertyName) {
            case 'disabled':
                that._setFocusable();
                that._enableDisableHandler();
                break;
            case 'expandMode':
                if (that._items.length === 0) {
                    break;
                }

                if ((oldValue === 'multiple' && newValue !== 'none') || (oldValue === 'none' && newValue !== 'multiple')) {
                    const indexesToCollapse = that.expandedIndexes.slice(1);

                    that._toggleItems('collapse', indexesToCollapse);

                    if (that.expandedIndexes.length === 0 && that._expandModeIs(['single', 'singleFitHeight'])) {
                        expandFirstItem();
                    }
                }
                else if (oldValue === 'toggle' && that._expandModeIs(['single', 'singleFitHeight']) && that.expandedIndexes.length === 0) {
                    expandFirstItem();
                }

                if (!that._supportCSSVariables || !that._usedCSSVariables) {
                    const expandedIndex = that.expandedIndexes[0];

                    if (oldValue === 'singleFitHeight') {
                        that._items[expandedIndex].$.accordionItemContent.style.height = '';
                    }
                    else if (newValue === 'singleFitHeight') {
                        that._items[expandedIndex].$.accordionItemContent.style.height = (that._expandedItemsContainerHeight - 1) + 'px';
                    }
                }
                break;
            case 'unfocusable':
                that._setFocusable();
                break;
            default:
                break;
        }

        function expandFirstItem() {
            that._toggleItems('expand', [0]);
            that.expandedIndexes = [0];
        }
    }

    /**
    * Appends a "smart-accordion-item" node as the last position.
    */
    appendChild(node) {
        const that = this;

        if (!that.isCompleted || node instanceof HTMLElement && (node.classList.contains('smart-resize-trigger-container') || node.classList.contains('smart-measure-element'))) {
            const args = Array.prototype.slice.call(arguments, 2);
            return HTMLElement.prototype.appendChild.apply(that, args.concat(Array.prototype.slice.call(arguments)));
        }

        if (!(node instanceof Smart.AccordionItem)) {
            that.error(that.localize('accordionItemRequired', { method: 'appendChild' }));
        }

        that.insert(that._items.length, node);
    }

    /**
    * Collapse method. Collapses selected item
    */
    collapse(index, programmaticUse) {
        const that = this;

        index = that._validateItemsIndex(index, 'collapse');

        if (isNaN(index)) {
            return;
        }

        const isExpanded = that._items[index].expanded;

        if ((!isExpanded) || (that._expandModeIs(['single', 'singleFitHeight']) && that.expandedIndexes.indexOf(index) > -1)) {
            return;
        }

        that._collapseItem(index, programmaticUse);
    }

    /**
    * Expand method.
    */
    expand(index, programmaticUse) {
        const that = this;

        index = that._validateItemsIndex(index, 'expand');

        if (isNaN(index)) {
            return;
        }

        const isExpanded = that._items[index].expanded;

        if (isExpanded) {
            return;
        }

        if (that._expandModeIs(['single', 'singleFitHeight', 'toggle'])) {
            that._toggleItems('collapse', that.expandedIndexes);
        }

        that._expandItem(index, programmaticUse);
    }

    /**
    * Inserts items in specific position. It has two parameters - index and item(items).
    */
    insert(index, items) {
        const that = this,
            accordionWasEmpty = that._items.length === 0;
        let item,
            fragment;

        if (!items) {
            if (typeof index === 'number') {
                items = [{ label: '', content: '' }];
            }
            else {
                items = [{ label: index ? index.toString() : '', content: index ? index.toString() : '' }];
                index = 0;
            }
        }

        if (items instanceof HTMLElement) {
            if (!(items instanceof Smart.AccordionItem)) {
                that.error(that.localize('accordionItemRequired', { method: 'insert' }));
            }
            else {
                item = items;
            }
        }
        else if (Array.isArray(items)) {
            fragment = document.createDocumentFragment();

            for (let i = 0; i < items.length; i++) {
                const fragmentItem = that._createItem(items[i]);

                fragment.appendChild(fragmentItem);
            }
        }
        else if (items instanceof Object) {
            item = that._createItem(items);
        }
        else if (typeof items === 'string' || typeof items === 'number') {
            item = that._createItem({ label: items.toString(), content: items.toString() });
        }
        else {
            item = that._createItem({ label: '', content: '' });
        }

        if (index > that._items.length) {
            item ? that.$.container.appendChild(item) : that.$.container.appendChild(fragment);
        }
        else {
            item ? that.$.container.insertBefore(item, that._items[index]) : that.$.container.insertBefore(fragment, that._items[index]);
        }

        item && (item.tabIndex = that._tabIndex);
        that._storeItems();

        if (accordionWasEmpty && that._expandModeIs(['single', 'singleFitHeight'])) {
            that._expandItem(0);
        }
        else {
            that.expandedIndexes = that._getExpandedIndexes();
        }

        that._updateExpanedContentHeight();
        that._updateInlineHeight();
        that._storeItemsCoordinates();

        that._updateItemsIndexProperty();
    }

    /**
     * Inserts the specified "smart-accordion-item" node before the reference "smart-accordion-item" node.
     */
    insertBefore(newNode, referenceNode) {
        const that = this;

        if (!that.isCompleted) {
            const args = Array.prototype.slice.call(arguments, 2);

            return HTMLElement.prototype.insertBefore.apply(that, args.concat(Array.prototype.slice.call(arguments)));
        }

        if (newNode === undefined || referenceNode === undefined || !(newNode instanceof Smart.AccordionItem) || !(referenceNode instanceof Smart.AccordionItem)) {
            that.error(that.localize('accordionItemRequired', { method: 'insertBefore' }));
        }

        if (referenceNode !== undefined && referenceNode !== null) {
            if (!that.contains(referenceNode)) {
                that.error(that.localize('referenceNodeNotChild', { argument: 'referenceNode' }));
            }

            that.insert(that._items.indexOf(referenceNode), newNode);
        }
        else {
            that.insert(that._items.indexOf(referenceNode), newNode);
        }
    }

    /**
    * Removes an item on specific positions or "smart-accordion-item" child node.
    */
    remove(index) {
        const that = this;
        let item;

        if (index instanceof HTMLElement) {
            if (!(index instanceof Smart.AccordionItem)) {
                that.error(that.localize('accordionItemRequired', { method: 'remove' }));
            }
            else if (!that.contains(index)) {
                that.error(that.localize('referenceNodeNotChild', { argument: 'node' }));
            }

            item = index;
            index = item.index;
        }
        else {
            index = that._validateItemsIndex(index, 'remove');

            if (isNaN(index)) {
                return;
            }

            item = that._items[index];
        }

        if (item) {
            item.parentNode.removeChild(item);
            that._storeItems();

            if (that._expandModeIs(['singleFitHeight'])) {
                that._preventAnimation = true;
            }

            if (that._expandModeIs(['single', 'singleFitHeight']) && index === that.expandedIndexes[0] && that._items.length > 0) {
                that._expandItem(0);
                that._selectedItem = that._items[0];
                that._selectedItemIndex = 0;
                that._itemIsFocussed = true;
            }

            that.expandedIndexes = that._getExpandedIndexes();
            that._updateExpanedContentHeight();
            that._updateInlineHeight();
            that._storeItemsCoordinates();

            that._updateItemsIndexProperty();
        }
    }

    /**
     * Removes a child "smart-accordion-item" node.
     */
    removeChild(node) {
        const that = this;

        if (!that.isCompleted) {
            const args = Array.prototype.slice.call(arguments, 2);

            return HTMLElement.prototype.removeChild.apply(that, args.concat(Array.prototype.slice.call(arguments)));
        }

        if (!(node instanceof HTMLElement)) {
            that.error(that.localize('accordionItemRequired', { method: 'removeChild' }));
        }

        if (node.className === 'smart-resize-trigger-container') {
            super.removeChild(node);
            return;
        }
        else if (!(node instanceof Smart.AccordionItem)) {
            that.error(that.localize('accordionItemRequired', { method: 'removeChild' }));
        }

        if (!that.contains(node)) {
            that.error(that.localize('referenceNodeNotChild', { argument: 'node' }));
        }

        that.remove(node);
    }

    /**
   * Sets tabIndex.
   */
    _setFocusable() {
        const that = this;

        if (that.disabled || that.unfocusable) {
            that.removeAttribute('tabindex');
            for (let i = 0; i < that._items.length; i++) {
                that._items[i].removeAttribute('tabindex');
            }
            return;
        }

        that.tabIndex = that._tabIndex;

        for (let i = 0; i < that._items.length; i++) {
            that._items[i].tabIndex = that._tabIndex;
        }
    }

    /**
    * Updates an item at a specific index. It has two parameters - index and item.
    */
    update(index, settings) {
        const that = this;

        index = that._validateItemsIndex(index, 'update');

        if (isNaN(index)) {
            return;
        }

        let item = that._items[index];

        if (!settings) {
            that.error(that.localize('invalidSettings', { elementType: that.nodeName.toLowerCase(), method: 'update' }));
        }

        if (item) {
            if (Array.isArray(settings)) {
                if (settings.length === 0) {
                    settings = { 'label': '', 'content': '' }
                }
                else {
                    settings = settings[0];
                }
            }

            if (typeof settings === 'string') {
                item.content = settings;
            }
            else {
                for (let property in settings) {
                    item[property] = settings[property];
                }
            }
        }

        const height = that._getItemsHeights(index);

        that._updateExpanedContentLocalHeight(that._items[index], height);
        that._updateInlineHeight();
        that._storeItemsCoordinates();
    }

    /**
    * Calculates item container's height if items are with set margins
    */
    _adjustHeightValue(currentHeight) {
        const that = this,
            itemsCount = that._items.length;
        let expandedItem, collapsedItem;

        for (let i = 0; i < itemsCount; i++) {
            that._items[i].expanded ? expandedItem = that._items[i] : collapsedItem = that._items[i];

            if (expandedItem && collapsedItem) {
                break;
            }
        }

        if (!expandedItem) {
            expandedItem = that._items[0];
        }

        if (!expandedItem && !collapsedItem) {
            return;
        }

        const expandedItemState = expandedItem.expanded;

        expandedItem.expanded = true;

        const expandedStyles = window.getComputedStyle(expandedItem, null),
            collapsedStyles = collapsedItem ? window.getComputedStyle(collapsedItem, null) : false,
            expandedOffset = parseInt(expandedStyles.getPropertyValue('margin-top')) + parseInt(expandedStyles.getPropertyValue('margin-bottom')),
            collapsedOffset = collapsedStyles ? parseInt(collapsedStyles.getPropertyValue('margin-top')) + parseInt(collapsedStyles.getPropertyValue('margin-bottom')) : 0;

        expandedItem.expanded = expandedItemState;

        return (currentHeight - ((itemsCount - 1) * collapsedOffset + expandedOffset));
    }

    /**
    * Collapses item with specific index.
    */
    _collapseItem(index, programmaticUse) {
        const that = this;
        let item = that._items[index];

        if (!item.expanded) {
            return;
        }

        if (that.expandMode === 'none' && programmaticUse) {
            return;
        }

        item.expanded = false;
        that.$.fireEvent('collapsing', {
            'index': index,
            'label': item.label,
            'content': item.content.innerHTML
        });

        if (that.expandedIndexes.indexOf(index) > -1) {
            let positionInExpandedIndexes = that.expandedIndexes.indexOf(index),
                currentIndexes = that.expandedIndexes.slice();

            currentIndexes.splice(positionInExpandedIndexes, 1);
            that.expandedIndexes = currentIndexes;
        }

        item.$.accordionItemContent.style.height = '';
        that._handleAnimationsDuration(item, index, 'collapsed');
    }

    /**
    * Compares arrays with old and new indexes. Returns which items have to be collapsed and which have to be expanded
    */
    _compareExpandedIndexes(oldIndexes, newIndexes) {
        let indexesToBeCollapsed = [],
            commonIndexes = [],
            indexesToBeExpanded = [],
            oldIndexesCount = oldIndexes.length,
            newIndexesCount = newIndexes.length;

        for (let i = 0; i < oldIndexesCount; i++) {
            if (newIndexes.indexOf(oldIndexes[i]) === -1) {
                if (indexesToBeCollapsed.indexOf(oldIndexes[i]) === -1) {
                    indexesToBeCollapsed.push(oldIndexes[i]);
                }
            }
            else {
                if (commonIndexes.indexOf(oldIndexes[i]) === -1) {
                    commonIndexes.push(oldIndexes[i]);
                }
            }
        }

        for (let i = 0; i < newIndexesCount; i++) {
            if (commonIndexes.indexOf(newIndexes[i]) === -1) {
                indexesToBeExpanded.push(newIndexes[i]);
            }
        }

        return { collapse: indexesToBeCollapsed, expand: indexesToBeExpanded };
    }

    /**
    * Initializes the element. Used as a callback in ready().
    */
    _createElement() {
        const that = this;

        that._reorderItemsByIndex();
        that._usedCSSVariables = Boolean(window.getComputedStyle(that.$.container).getPropertyValue('--smart-accordion-animation-duration'));
        that._supportCSSVariables = Smart.Utilities.Core.CSSVariablesSupport();
        that._storeItems();
        that._enableDisableHandler();
        that._expandedIndexesHandler();
        that._updateExpanedContentHeight();
        that._tabIndex = that.tabIndex <= 0 ? 0 : that.tabIndex;
        that._setFocusable();
        that._updateItemsIndexProperty();
        that._updateInlineHeight();

        for (let i = 0; i < that._items.length; i++) {
            that._items[i].$.arrow.classList.add('smart-animate-trigger');
        }
    }

    /**
     * Creates single smart-accordion-item
     */
    _createItem(settings) {
        const that = this,
            item = document.createElement('smart-accordion-item');

        if (!settings) {
            return;
        }

        item.disabled = that.disabled;

        if (that._tabIndex > -1) {
            item.tabIndex = that._tabIndex;
        }

        if (typeof settings === 'string' || typeof settings === 'number') {
            item.label = settings + '';
            item.content = settings + '';

            return item;
        }

        item.label = settings.label || '';
        item.content = settings.content || '';

        return item;
    }

    /**
    * Down Handler
    */
    _downHandler(event) {
        const that = this;

        if (that.disabled || that.readonly || that.expandMode === 'none' || that._toggled) {
            return;
        }

        const target = that.enableShadowDOM && that.shadowRoot ? that.shadowRoot.elementFromPoint(event.pageX, event.pageY) : event.originalEvent.target,
            clickedHeader = target.closest('.smart-accordion-item-header');
        const item = target.closest('smart-accordion-item');

        if (!clickedHeader) {
            if (item) {
                item.focused = true;
            }

            return;
        }

        that._selectedItem = item;
        that._itemIsPressed = that._itemIsFocussed = true;
        that._reorderedIndex = that._selectedItemIndex = that._items.indexOf(item);

        that._storeItemsCoordinates();
    }

    /**
    * Changes disable state of the internal items.
    */
    _enableDisableHandler() {
        const that = this;

        if (that.disabled) {
            for (let i = 0; i < that._items.length; i++) {
                that._items[i].disabled = true;
            }
        }
        else {
            for (let i = 0; i < that._items.length; i++) {
                that._items[i].disabled = false;
            }
        }
    }

    /**
    * Handles expanded indexes on initialization, according to the chosen 'expandMode'.
    */
    _expandedIndexesHandler() {
        const that = this;
        let initialExpandedIndexes = that._getExpandedIndexes('initial'),
            initialExpandedIndexesCount = initialExpandedIndexes.length,
            expandedIndexesCount = that.expandedIndexes.length;

        if (that._items.length === 0) {
            return;
        }

        if (expandedIndexesCount === 0 && initialExpandedIndexesCount > 0) {
            that.expandedIndexes = initialExpandedIndexes;
            expandedIndexesCount = initialExpandedIndexesCount;
        }

        if (that._expandModeIs(['multiple', 'none']) || expandedIndexesCount === 1) {
            that._toggleItems('expand', that.expandedIndexes);
            return;
        }

        switch (that.expandMode) {
            case 'single':
            case 'singleFitHeight':
                if (expandedIndexesCount === 0) {
                    that._toggleItems('expand', [0]);
                }
                else if (expandedIndexesCount > 1) {
                    that._toggleItems('collapse', that.expandedIndexes.splice(0, 1));
                    that._toggleItems('expand', that.expandedIndexes);
                }
                break;
            case 'toggle':
                if (expandedIndexesCount > 1) {
                    that._toggleItems('collapse', that.expandedIndexes.splice(0, 1));
                    that._toggleItems('expand', that.expandedIndexes);
                }
                break;
            default:
                break;
        }
    }

    /**
    * Expands item with specific index.
    */
    _expandItem(index, programmaticUse) {
        const that = this;
        let item = that._items[index];

        if (item.expanded || (that.expandMode === 'none' && programmaticUse)) {
            return;
        }

        if (!item.$.container.style.getPropertyValue('--smart-accordion-expanded-content-local-height')) {
            item.expanded = true;
            item.$.container.style.setProperty('--smart-accordion-expanded-content-local-height', item.$.accordionItemContent.scrollHeight + 'px');
            item.expanded = false;
        }

        item.expanded = true;
        that.$.fireEvent('expanding', {
            'index': index,
            'label': item.label,
            'content': item.content.innerHTML
        });

        if (that.expandedIndexes.indexOf(index) === -1) {
            let currentIndexes = that.expandedIndexes.slice();

            currentIndexes.push(index);
            that.expandedIndexes = currentIndexes;
        }

        

        if ((!that._supportCSSVariables || !that._usedCSSVariables) && that.expandMode === 'singleFitHeight') {
            item.$.accordionItemContent.style.height = (that._expandedItemsContainerHeight - 1) + 'px';
        }

        that._handleAnimationsDuration(item, index, 'expanded');
    }

    /**
    * Check if current expand mode is one of the following.
    */
    _expandModeIs(modesArray) {
        const that = this;

        return modesArray.indexOf(that.expandMode) > -1;
    }

    /**
     * Focus handler.  Sets the focused state of particular item
     */
    _focusHandler() {
        const that = this;

        if (that.disabled || that._items.length === 0) {
            return;
        }

        if (that._itemIsFocussed) {
            that._selectedItem.focused = false;
        }
        else {
            that._items[0].focused = false;
        }
    }

    /**
    * Gets the indexes of all expanded items.
    */
    _getExpandedIndexes(type) {
        const that = this,
            expandedIndexes = [];

        for (let i = 0; i < that._items.length; i++) {
            if (type === 'initial') {
                if (that._items[i].hasAttribute('expanded')) {
                    expandedIndexes.push(i);
                    that._items[i].removeAttribute('expanded');
                }
            }
            else {
                if (that._items[i].expanded) {
                    expandedIndexes.push(i);
                }
            }
        }

        return expandedIndexes.slice();
    }

    /**
   * Gets the height of each item. Calculates it via dummy element
   */

    _getItemsHeights(itemIndex) {
        const that = this,
            items = that._items,
            itemsCount = items.length;
        let itemsHeights = [];

        if (itemsCount === 0) {
            return;
        }

        if (!isNaN(itemIndex) && itemIndex >= 0 && itemIndex < itemsCount) {
            const item = items[itemIndex];
            let height = 0;

            if (item.expanded) {
                height = item.$.accordionItemContent.scrollHeight;
            }
            else {
                item.expanded = true;
                height = item.$.accordionItemContent.scrollHeight;
                item.expanded = false;
            }

            return (height + 'px');
        }

        for (let i = 0; i < itemsCount; i++) {
            const item = items[i];
            let height = 0;

            if (item.expanded) {
                height = item.$.accordionItemContent.scrollHeight;
            }
            else {
                item.expanded = true;
                height = item.$.accordionItemContent.scrollHeight;
                item.expanded = false;
            }

            itemsHeights.push(height + 'px');
        }

        that._heightCalcAfterInitialization = true;

        return itemsHeights;
    }

    /**
    * Adds smart-toggle class for the period of the animation and fires an event at the end
    */
    _handleAnimationsDuration(item, index, type) {
        const that = this,
            intervalOffset = 50;

        if (!that._animationAfterInitialization) {
            that._animationAfterInitialization = true;
            return;
        }

        if (that._items.length === 1 && that.expandMode === 'singleFitHeight') {
            that.$.fireEvent(type, {
                'index': index,
                'label': item.label,
                'content': item.content.innerHTML
            });
            return;
        }

        if (false === that.hasAnimation || !that._supportCSSVariables) {
            that.$.fireEvent(type, {
                'index': index,
                'label': item.label,
                'content': item.content.innerHTML
            });
            return;
        }

        if (that._preventAnimation) {
            that.$.fireEvent(type, {
                'index': index,
                'label': item.label,
                'content': item.content.innerHTML
            });

            that._preventAnimation = false;
            return;
        }


        that._toggled = true;

        let animationDuration = window.getComputedStyle(that).animationDuration,
            animationDurationInMs;

        if (animationDuration.indexOf('ms') > -1) {
            animationDuration = parseFloat(animationDuration.substring(0, animationDuration.length - 2));
            animationDurationInMs = isNaN(animationDuration) || animationDuration < 0 ? 0 : animationDuration - intervalOffset;
        }
        else if (animationDuration.indexOf('s') > -1) {
            animationDuration = parseFloat(animationDuration.substring(0, animationDuration.length - 1));
            animationDurationInMs = isNaN(animationDuration) || animationDuration < 0 ? 0 : animationDuration * 1000 - intervalOffset;
        }
        else {
            that.$.fireEvent(type, {
                'index': index,
                'label': item.label,
                'content': item.content.innerHTML
            });
            return;
        }

        if (item instanceof Smart.AccordionItem) {
            item.$.addClass('smart-toggled-item');
            that.$container.addClass('smart-toggling');
            setTimeout(function () {
                item.$.removeClass('smart-toggled-item');
                that.$container.removeClass('smart-toggling');
                that.$.fireEvent(type, {
                    'index': index
                });

                that._toggled = false;
            }, animationDurationInMs);
        }
    }

    /**
    * Index change handler. Used when items are reordered via their indexes
    */
    _indexChangeHandler(event) {
        const that = this,
            items = that._items,
            itemsCount = items.length,
            detail = event.detail;

        if (detail.newIndex >= itemsCount) {
            that.$.container.appendChild(items[detail.oldIndex]);
        }
        else {
            detail.newIndex > detail.oldIndex ? that.$.container.insertBefore(items[detail.oldIndex], items[detail.newIndex + 1]) : that.$.container.insertBefore(items[detail.oldIndex], items[detail.newIndex]);
        }

        let itemsReordered = that.enableShadowDOM && that.shadowRoot ? that.shadowRoot.querySelectorAll('smart-accordion-item') : that.getElementsByTagName('smart-accordion-item');

        that._items = Array.from(itemsReordered);
        that._updateItemsIndexProperty();
    }

    /**
    * KeyDown handler. Navigation between the items via arrows, home, end keys
    */
    _keyDownHandler(event) {
        const that = this,
            keyCode = event.key;

        if (that.expandMode === 'none' || that.disabled || that.readonly || that._toggled) {
            return;
        }

        if (['ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp', 'End', 'Home', ' ', 'Enter', 'Tab'].indexOf(keyCode) === -1 || !(document.activeElement instanceof Smart.AccordionItem)) {
            return;
        }

        if (keyCode !== 'Tab') {
            event.preventDefault();
        }

        let selectedItem,
            selectedIndex,
            itemsCount = that._items.length,
            lastItemPosition = itemsCount - 1;

        for (let i = 0; i < itemsCount; i++) {
            let item = that._items[i];

            if (item.focused) {
                selectedItem = item;
                selectedIndex = i;
            }
        }

        switch (keyCode) {
            case 'Tab':
                event.shiftKey ? moveSelection('up') : moveSelection('down');
                break;
            case 'ArrowLeft':
                that.collapse(selectedIndex);
                break;
            case 'ArrowDown':
                moveSelection('down');
                break;
            case 'ArrowRight':
                that.expand(selectedIndex);
                break;
            case 'ArrowUp':
                moveSelection('up');
                break;
            case 'End':
                updateSelectedItem(lastItemPosition);
                break;
            case 'Home':
                updateSelectedItem(0);
                break;
            case ' ':
            case 'Enter':
                if (selectedItem.expanded) {
                    that.collapse(selectedIndex);
                    return
                }

                that.expand(selectedIndex);
                break;
            default:
                return;
        }

        function updateSelectedItem(index) {
            if (index === selectedIndex || isNaN(index)) {
                return;
            }

            selectedItem.focused = false;
            selectedIndex = index;
            selectedItem = that._items[selectedIndex];
            selectedItem.focused = true;
        }

        function moveSelection(direction) {
            if (direction === 'up') {
                (selectedIndex - 1) < 0 ? updateSelectedItem(0) : updateSelectedItem(selectedIndex - 1);
                return;
            }

            (selectedIndex + 1) > lastItemPosition ? updateSelectedItem(lastItemPosition) : updateSelectedItem(selectedIndex + 1);
        }
    }

    /**
    * Accordion's move handler. Used in reorder functionality
    */
    _moveHandler(event) {
        const that = this;

        if (!that._itemIsPressed || !that.reorder || that.readonly || that._items.length < 2) {
            return;
        }

        if (that._dragStart) {
            that.$container.addClass('smart-reordering');

            if (!that._dragging) {
                const item = that._selectedItem;

                that.$.fireEvent('dragStart', {
                    'position': { left: event.pageX, top: event.pageY },
                    'target': event.originalEvent.target,
                    'index': that._selectedItemIndex,
                    'label': item.label,
                    'content': item.content.innerHTML
                });

                that._selectedItem.dragged = that._dragging = true;
            }

            const mouseCoordinate = event.clientY;
            let inItem = false;

            for (let i = 0; i < that._itemsCoordinates.length; i++) {
                const currentCoordinateSet = that._itemsCoordinates[i];

                if (mouseCoordinate >= currentCoordinateSet.fromY && mouseCoordinate <= currentCoordinateSet.toY) {
                    inItem = i;
                    break;
                }
            }

            if (that._preventReorder !== true && inItem !== false && inItem !== that._reorderedIndex) {
                if (Math.abs(that._reorderedIndex - inItem) > 1) {
                    const indexOffset = that._reorderedIndex - inItem < 0 ? -1 : 1;

                    that._swapItems(that._reorderedIndex, inItem + indexOffset);
                }

                that._swapItems(that._reorderedIndex, inItem);


                that._reorderedIndex = inItem;
                that._storeItemsCoordinates();
            }

            if (mouseCoordinate < that._itemsCoordinates[that._reorderedIndex].fromY || mouseCoordinate > that._itemsCoordinates[that._reorderedIndex].toY) {
                that._preventReorder = true;
            }
            else {
                that._preventReorder = false;
            }

            if (Math.abs(that._reorderedIndex - inItem) > 1) {
                that._preventReorder = false;
            }
        }
        else {
            that._dragStart = true;
        }
    }

    /**
    * Reorders the items by their indexes when the accordion is initialized.
    */
    _reorderItemsByIndex() {
        const that = this;
        let items = that.enableShadowDOM && that.shadowRoot ? that.shadowRoot.querySelectorAll('smart-accordion-item') : that.getElementsByTagName('smart-accordion-item'),
            itemsArray = Array.from(items),
            hasInitialIndexes = false,
            itemsIndexes = itemsArray.map(function (item) {
                if (item.index !== null) {
                    hasInitialIndexes = true;
                }
                else {
                    item.index = 0;
                }

                return item.index;
            });

        if (!hasInitialIndexes) {
            return;
        }

        const itemsCount = itemsArray.length;

        if (itemsCount < 2) {
            return;
        }

        let itemsIndexesSorted = itemsIndexes.slice();

        itemsIndexesSorted.sort(function (a, b) {
            return parseInt(a) - parseInt(b);
        });

        if (itemsIndexes.toString() === itemsIndexesSorted.toString()) {
            return;
        }

        for (let i = 0; i < itemsCount; i++) {
            let reorderedItem;

            for (let j = 0; j < itemsCount; j++) {
                if (items[j].index === itemsIndexesSorted[i]) {
                    reorderedItem = items[j];
                }
            }

            that.$.container.insertBefore(reorderedItem, items[i]);
        }
    }

    /**
    * Resize handler.
    */
    _resizeHandler() {
        const that = this;

        that._updateExpanedContentHeight();
        that._updateInlineHeight();
        that._storeItemsCoordinates();
    }

    /**
    * Stores all items in an Array and updates the animation variables.
    */
    _storeItems() {
        const that = this,
            items = that.enableShadowDOM && that.shadowRoot ? that.shadowRoot.querySelectorAll('smart-accordion-item') : that.getElementsByTagName('smart-accordion-item');

        that._items = Array.from(items);

        if (that._items.length === 0) {
            that.$container.addClass('smart-empty');
            return;
        }

        that.$container.removeClass('smart-empty');

        const heights = that._getItemsHeights();

        for (let i = 0; i < that._items.length; i++) {
            that._updateExpanedContentLocalHeight(that._items[i], heights[i]);
        }
    }

    /**
     * Stores the coordinates of all items in an Array.
     */
    _storeItemsCoordinates() {
        const that = this;

        if (that.disabled || !that.reorder) {
            return;
        }

        const coordinates = [];

        for (let i = 0; i < that._items.length; i++) {
            const currentItemContainer = that._items[i],
                boundingClientRect = currentItemContainer.getBoundingClientRect();

            coordinates.push({
                fromY: boundingClientRect.top + (window.scrollY || window.pageYOffset),
                toY: boundingClientRect.bottom + (window.scrollY || window.pageYOffset)
            });
        }

        that._itemsCoordinates = coordinates;
    }

    /**
     * Switches the positions of two items.
     */
    _swapItems(firstItemIndex, secondItemIndex) {
        function swap(list, x, y) {
            const temp = list[y];

            list[y] = list[x];
            list[x] = temp;
        }

        const that = this,
            lesserIndex = Math.min(firstItemIndex, secondItemIndex),
            greaterIndex = Math.max(firstItemIndex, secondItemIndex),
            items = that._items;
        let expandedIndexes = that.expandedIndexes.slice();

        if (that._items[firstItemIndex].expanded && !that._items[secondItemIndex].expanded) {
            const indexPosition = expandedIndexes.indexOf(firstItemIndex);

            expandedIndexes[indexPosition] = secondItemIndex;
            that.expandedIndexes = expandedIndexes.slice();
        }
        else if (that._items[secondItemIndex].expanded && !that._items[firstItemIndex].expanded) {
            const indexPosition = expandedIndexes.indexOf(secondItemIndex);

            expandedIndexes[indexPosition] = firstItemIndex;
            that.expandedIndexes = expandedIndexes.slice();
        }

        that.selectedIndex = that.selectedIndex === firstItemIndex ? secondItemIndex : firstItemIndex;
        that.$.container.insertBefore(items[greaterIndex], items[lesserIndex]);
        swap(items, firstItemIndex, secondItemIndex);
        that._items[firstItemIndex].$.removeClass('hovered');

        that._reorderedIndex = secondItemIndex;
    }


    /**
    * Expands/collapses multiple items with particular indexes.
    */
    _toggleItems(action, indexes) {
        const that = this,
            indexesCount = indexes.length;

        if (indexesCount > 0) {
            for (let i = 0; i < indexesCount; i++) {
                that['_' + action + 'Item'](indexes[i]);
            }
        }
    }

    /**
    * Calculates item's content container height and apply it to the current expanded item. Used in singleFitHeight expandMode.
    */
    _updateExpanedContentHeight() {
        const that = this;

        that.$.container.style.setProperty('--smart-accordion-item-header-height', '');

        const itemsCount = that._items.length,
            containersHeight = that.$.container.offsetHeight,
            expanedItem = that._items[that.expandedIndexes[0]];
        let collapsedItemHeight = 0,
            collapsedItemHeaderHeight = 0,
            expanedItemHeaderOffset = 0,
            i = 0;

        if (itemsCount === 1) {
            let item = that._items[0];

            item.expanded = false;
            collapsedItemHeight = item.offsetHeight;
            collapsedItemHeaderHeight = item.$.accordionItemHeader.offsetHeight;
            item.expanded = true;
        }
        else {
            while (collapsedItemHeight === 0 && i < itemsCount) {
                const item = that._items[i];

                if (item instanceof Smart.AccordionItem && !item.expanded) {
                    collapsedItemHeight = item.offsetHeight;
                    collapsedItemHeaderHeight = item.$.accordionItemHeader.offsetHeight;
                }

                i++;
            }
        }

        if (itemsCount > 1) {
            if (expanedItem instanceof Smart.AccordionItem) {
                const expandedItemHeaderHeight = expanedItem.$.accordionItemHeader.offsetHeight;

                expanedItemHeaderOffset = expandedItemHeaderHeight - collapsedItemHeaderHeight;
            }
        }

        const rootStyle = getComputedStyle(that.$.root);

        const collapsedItemsHeight = collapsedItemHeight * itemsCount;
        let expandedItemsContainerHeight = containersHeight - collapsedItemsHeight - expanedItemHeaderOffset - parseFloat(rootStyle.paddingBottom) - parseFloat(rootStyle.paddingTop);

        if (that.expandMode === 'singleFitHeight') {
            expandedItemsContainerHeight = that._adjustHeightValue(expandedItemsContainerHeight);
        }

        expandedItemsContainerHeight = expandedItemsContainerHeight >= 0 ? expandedItemsContainerHeight : 0;
        that.$.container.style.setProperty('--smart-accordion-expanded-content-height', expandedItemsContainerHeight + 'px');
        that.$.container.style.setProperty('--smart-accordion-item-header-height', collapsedItemHeaderHeight + 'px');
        that._expandedItemsContainerHeight = expandedItemsContainerHeight;
    }

    /**
    * Updates the local CSS variable about single item.
    */
    _updateExpanedContentLocalHeight(item, height) {
        const that = this;

        if (!that._supportCSSVariables || !that._usedCSSVariables) {
            return;
        }

        item.$.container.style.setProperty('--smart-accordion-expanded-content-local-height', height);
    }


    /**
     * Updates inline height in 'singleFitHeight' mode in older browsers
     */
    _updateInlineHeight() {
        const that = this;

        if ((that._supportCSSVariables && that._usedCSSVariables) || that.expandMode !== 'singleFitHeight' || that._items.length === 0) {
            return;
        }

        that._items[that.expandedIndexes[0]].$.accordionItemContent.style.height = (that._expandedItemsContainerHeight - 1) + 'px';
    }

    /**
     * Updates the index property of all accordion items
     */
    _updateItemsIndexProperty() {
        const that = this;
        let newExpandedIndexes = [];

        for (let i = 0; i < that._items.length; i++) {
            that._items[i]._setIndex(i);

            if (that._items[i].expanded) {
                newExpandedIndexes.push(i);
            }
        }

        that.expandedIndexes = newExpandedIndexes.slice();
    }

    /**
     * Up handler.
     */
    _upHandler(event) {
        const that = this;

        if (!that._itemIsPressed || that.disabled || that.readonly) {
            return;
        }

        for (let i = 0; i < that._items.length; i++) {
            if (i !== that._selectedItemIndex) {
                that._items[i].focused = false;
            }
        }

        that._selectedItem.focused = true;

        if (!that._dragging) {
            if (that._selectedItem.expanded) {
                that.collapse(that._selectedItemIndex, true);
            }
            else {
                that.expand(that._selectedItemIndex, true);
            }
        }
        else {
            const item = that._selectedItem;

            that.$container.removeClass('smart-reordering');
            that.$.fireEvent('dragEnd', {
                'position': { left: event.pageX, top: event.pageY },
                'target': event.originalEvent.target,
                'index': that._selectedItemIndex,
                'label': item.label,
                'content': item.content.innerHTML
            });
        }

        that._reorderedIndex = undefined;
        that._dragStart = false;
        that._dragging = false;
        that._itemIsPressed = false;
        that._selectedItem.dragged = false;

        that._updateItemsIndexProperty();
    }

    /**
    * Validates the values given to the expand and collapse methods.
    */
    _validateItemsIndex(index, method) {
        const that = this;

        if (isNaN(parseInt(index)) || index < 0 || index > that._items.length - 1) {
            that.log(that.localize('indexOutOfBound', { elementType: that.nodeName.toLowerCase(), method: method }));
            return;
        }

        return parseInt(index);
    }
});