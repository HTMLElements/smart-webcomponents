
/* Smart HTML Elements v4.5.0 (2019-Sep) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

/**
 * Tab Item custom element.
 */
Smart('smart-tab-item', class TabItem extends Smart.ContentElement {
    // Tab Item's properties.
    static get properties() {
        return {
            'closeButtonHidden': {
                value: false,
                type: 'boolean'
            },
            'index': {
                value: null,
                type: 'number?'
            },
            'selected': {
                value: false,
                type: 'boolean'
            },
            'label': {
                value: '',
                type: 'string'
            },
            'labelSize': {
                value: null,
                type: 'number?'
            }
        };
    }

    get enableShadowDOM() {
        return false;
    }

    /**
     * Called when the element is attached to the DOM.
     */
    attached() {
        const that = this;

        super.attached();

        if (!that.isCompleted) {
            return;
        }

        that.$.removeClass('right');
        that.$.removeClass('left');
        that.$.removeClass('top');
        that.$.removeClass('bottom');
        that.$.removeClass('animate');
    }

    /**
     * Called when a property is changed.
     */
    propertyChangedHandler(propertyName, oldValue, newValue) {
        super.propertyChangedHandler(propertyName, oldValue, newValue);

        const that = this;

        if (that._preventPropertyChangedHandler) {
            delete that._preventPropertyChangedHandler;
            return;
        }

        const parentTab = (Smart.EnableShadowDOM && that.parentElement ? that.getRootNode().host || that : that).closest('smart-tabs'),
            options = parentTab && parentTab.shadowRoot ? { composed: true, bubbles: true, cancelable: true } : undefined;

        switch (propertyName) {
            case 'closeButtonHidden':
                //NOTE: composed flag allows the event to bubble out of the shadowRoot. Ref: https://javascript.info/shadow-dom-events
                that.$.fireEvent('closeButtonVisibilityChange', { 'hidden': newValue }, options);
                break;
            case 'index':
                that.$.fireEvent('indexChange', { 'newIndex': newValue, 'oldIndex': oldValue, 'tabItem': that }, options);
                break;
            case 'label':
                break;
            case 'labelSize':
                that.$.fireEvent('labelSizeChange', { 'size': newValue }, options);
                break;
        }
    }

    /**
     * Appends a child node directly to the smart-tab-item's container.
     *
     * @param {HTMLElement} node The node to append.
     */
    appendChild(node) {
        const that = this;

        if (!that.isCompleted) {
            const args = Array.prototype.slice.call(arguments, 2);
            return HTMLElement.prototype.appendChild.apply(that, args.concat(Array.prototype.slice.call(arguments)));
        }

        that.firstElementChild.appendChild(node);
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
 * Tab Items Group custom element.
 */
Smart('smart-tab-items-group', class TabItemsGroup extends Smart.ContentElement {
    // Tab Items Group's properties.
    static get properties() {
        return {
            'label': {
                value: '',
                type: 'string'
            },
            'labelSize': {
                value: null,
                type: 'number?'
            }
        };
    }

    get enableShadowDOM() {
        return false;
    }

    /**
     * Tab Items Group's HTML template.
     */
    template() {
        return '';
    }

    /**
     * Called when a property is changed.
     */
    propertyChangedHandler(propertyName, oldValue, newValue) {
        super.propertyChangedHandler(propertyName, oldValue, newValue);

        const that = this;

        if (that._preventPropertyChangedHandler) {
            delete that._preventPropertyChangedHandler;
            return;
        }

        switch (propertyName) {
            case 'label':
                break;
            case 'labelSize':
                this.$.fireEvent('labelSizeChange', { 'size': newValue });
                break;
        }
    }
});

/**
 * Tabs custom element.
 */
Smart('smart-tabs', class Tabs extends Smart.BaseElement {
    // Tabs's properties.
    static get properties() {
        return {
            'addNewTab': {
                value: false,
                type: 'boolean'
            },
            'allowToggle': {
                value: false,
                type: 'boolean'
            },
            'closeButtonMode': {
                value: 'default',
                allowedValues: ['default', 'selected'],
                type: 'string'
            },
            'closeButtons': {
                value: false,
                type: 'boolean'
            },
            'collapsed': {
                value: false,
                type: 'boolean'
            },
            'collapsible': {
                value: false,
                type: 'boolean'
            },
            'dataSource': {
                value: null,
                type: 'array?',
                reflectToAttribute: false
            },
            'enableMouseWheelAction': {
                value: false,
                type: 'boolean'
            },
            'messages': {
                value: {
                    'en': {
                        'ambiguousIndexes': 'smart-tabs: Initially set smart-tab-item indexes are ambiguous and are ignored in favour of the HTML structure.',
                        'detailsObjectRequired': 'smart-tabs: The method "insert" requires a details Object to be passed as a second argument.',
                        'invalidIndex': 'smart-tabs: "{{method}}" method accepts an index of type number.',
                        'referenceNodeNotChild': 'smart-tabs: Passed {{argument}} is not part of this smart-tabs element.',
                        'tabItemRequired': 'smart-tabs: The method "{{method}}" requires a "smart-tab-item" element to be passed as an argument.'
                    }
                },
                type: 'object',
                extend: true
            },
            'name': {
                value: '',
                type: 'string'
            },
            'overflow': {
                value: 'auto',
                allowedValues: ['auto', 'hidden', 'scroll'],
                type: 'string'
            },
            'reorder': {
                value: false,
                type: 'boolean'
            },
            'resize': {
                value: false,
                type: 'boolean'
            },
            'scrollButtonsPosition': {
                value: 'both',
                allowedValues: ['near', 'far', 'both'],
                type: 'string'
            },
            'scrollMode': {
                value: 'paging',
                allowedValues: ['paging', 'continuous'],
                type: 'string'
            },
            'selectedIndex': {
                value: null,
                type: 'number?'
            },
            'selectionMode': {
                value: 'click',
                allowedValues: ['click', 'dblclick', 'mouseenter', 'none'],
                type: 'string'
            },
            'tabLayout': {
                value: 'scroll',
                allowedValues: ['scroll', 'dropDown', 'wrap', 'shrink'],
                type: 'string',
                defaultReflectToAttribute: true
            },
            'tabPosition': {
                value: 'top',
                allowedValues: ['top', 'bottom', 'left', 'right', 'hidden'],
                type: 'string'
            },
            'tabTextOrientation': {
                value: 'horizontal',
                allowedValues: ['horizontal', 'vertical'],
                type: 'string'
            }
        };
    }

    /**
     * Tabs's event listeners.
     */

    static get listeners() {
        return {
            'closeButtonVisibilityChange': '_closeButtonVisibilityChangeHandler',
            'indexChange': '_indexChangeHandler',
            'keydown': '_keydownHandler',
            'labelSizeChange': '_labelSizeChangeHandler',
            'resize': '_applyTabOverflow',
            'styleChanged': '_applyTabOverflow',
            'container.dblclick': '_containerHandler',
            'container.down': '_containerHandler',
            'container.mouseout': '_containerHandler',
            'container.mouseover': '_containerHandler',
            'scrollButtonFar.click': '_scrollButtonClickHandler',
            'scrollButtonNear.click': '_scrollButtonClickHandler',
            'tabContentSection.transitionend': '_tabContentSectionTransitionendHandler',
            'tabsHeaderItems.wheel': '_tabsHeaderItemsWheelHandler',
            'tabStrip.mouseleave': '_tabStripMouseleaveHandler',
            'tabStrip.move': '_tabStripMoveHandler',
            'document.move': '_documentMoveHandler',
            'document.selectstart': '_selectStartHandler',
            'document.up': '_documentUpHandler'
        };
    }

    /**
     * Tabs's required files.
     */
    static get requires() {
        return {
            'Smart.RepeatButton': 'smart.button.js'
        }
    }

    static get styleUrls() {
        return [
            'smart.tabs.css'
        ]
    }

    /**
     * Tabs's HTML template.
     */
    template() {
        return `<div id="container">
                    <div id="tabsHeaderSection" class="smart-header smart-tabs-header-section">
                        <div id="tabsHeaderItems" class="smart-tabs-header-items">
                            <smart-repeat-button id="scrollButtonNear" class="smart-tabs-scroll-button smart-nav-button smart-spin-button smart-hidden" animation="[[animation]]" unfocusable>
                                <div id="arrowNear" class="smart-arrow"></div>
                            </smart-repeat-button>
                            <div id="tabStrip" class="smart-tab-strip"></div>
                            <smart-repeat-button id="scrollButtonFar" class="smart-tabs-scroll-button smart-nav-button smart-spin-button smart-hidden" animation="[[animation]]" unfocusable>
                                <div id="arrowFar" class="smart-arrow"></div>
                            </smart-repeat-button>
                            <div id="dropDownButton" class="smart-drop-down-button">
                                <div id="dropDownButtonArrow" class="smart-drop-down-button-arrow smart-unselectable"></div>
                            </div>
                            <span id="tabSelectionBar" class="smart-tabs-selection-bar"></span>
                            <div id="resizeToken" class="smart-tabs-resize-token smart-hidden"></div>
                        </div>
                        <div id="tabHeaderControls" class="smart-tabs-header-controls"></div>
                    </div>
                    <div id="tabContentSection" class="smart-tabs-content-section">
                       <content></content>
                    </div>
                    <div id="dropDownButtonDropDown" class="smart-drop-down-button-drop-down smart-hidden"></div>
                    <input id="hiddenInput" type="hidden" name="[[name]]">
                </div>`;
    }

    /**
     * Called when the element is attached to the DOM.
     */
    attached() {
        const that = this;

        super.attached();

        if (!that.isCompleted) {
            return;
        }

        that._applyTabOverflow();
    }

    /**
     * Called when the element is ready. Used for one-time configuration of the Tab.
     */
    ready() {
        super.ready();

        const that = this;

        that._flexWritingModeNoFullSupport = true; // !Smart.Utilities.Core.Browser.Chrome;
        that._arrowCodes = { top: '&#xe804', bottom: '&#xe801', left: '&#xe802', right: '&#xe803' };

        that._createElement();
    }

    /**
     * Appends a "smart-tab-item" node as the last tab of the Tabs.
     *
     * @param {HTMLElement} node The "smart-tab-item" node to append.
     */
    appendChild(node) {
        const that = this;

        if (!that.isCompleted || node instanceof HTMLElement && node.classList.contains('smart-resize-trigger-container')) {
            const args = Array.prototype.slice.call(arguments, 2);
            return HTMLElement.prototype.appendChild.apply(that, args.concat(Array.prototype.slice.call(arguments)));
        }

        if (!(node instanceof Smart.TabItem)) {
            that.error(that.localize('tabItemRequired', { method: 'appendChild' }));
        }

        that.insert(that._tabs.length, { node: node });
    }

    /**
     * Collapses the content section.
     */
    collapse() {
        const that = this;

        if (!that.collapsible || that.collapsed) {
            return;
        }

        that.collapsed = true;
    }

    /**
     * Makes sure a tab is visible by scrolling to it.
     *
     * @param {Number} index The index of the tab to scroll to.
     */
    ensureVisible(index) {
        const that = this;

        if (index === null || that.tabLayout === 'wrap' || that.tabLayout === 'shrink' || that.tabPosition === 'hidden') {
            return;
        }

        that._validateIndex(index, 'ensureVisible');
        index = Math.max(0, Math.min(index, that._tabs.length - 1));

        const group = that._tabs[index].group,
            tabStrip = that.$.tabStrip,
            tabStripBoundingRect = tabStrip.getBoundingClientRect(),
            scrollTarget = group === null ? that._tabLabelContainers[index] : that._groupLabels[that._groups.indexOf(group)],
            scrollTargetBoundingRect = scrollTarget.getBoundingClientRect();

        if ((that.tabPosition === 'top' || that.tabPosition === 'bottom') && (tabStripBoundingRect.left > scrollTargetBoundingRect.left || tabStripBoundingRect.right < scrollTargetBoundingRect.right)) {
            tabStrip.scrollLeft += Math.round(scrollTargetBoundingRect.right - tabStrip.offsetWidth - tabStripBoundingRect.left);
        }
        else if ((that.tabPosition === 'left' || that.tabPosition === 'right') && (tabStripBoundingRect.top > scrollTargetBoundingRect.top || tabStripBoundingRect.bottom < scrollTargetBoundingRect.bottom)) {
            tabStrip.scrollTop += Math.round(scrollTargetBoundingRect.bottom - tabStrip.offsetHeight - tabStripBoundingRect.top);
        }

        that._updateScrollButtonVisibility();

        if (that.resize) {
            that._getTabCoordinates();
        }
    }

    /**
     * Expands the content section.
     */
    expand() {
        const that = this;

        if (!that.collapsible || !that.collapsed) {
            return;
        }

        that.collapsed = false;
    }

    /**
     * Returns the offset of the tab item container (smart-tab-item element) from the edge of the Tabs (smart-tabs element) where the tab strip is positioned.
     *
     * @param {Number} index The index of the tab item.
     */
    getOffsetFromEdgeOfElement(index) {
        const that = this;

        that._validateIndex(index, 'getOffsetFromEdgeOfElement');

        index = Math.max(0, Math.min(index, that._tabs.length - 1));

        const tabItem = that._tabs[index],
            position = that.tabPosition;

        if (position !== 'hidden') {
            return Math.abs(tabItem.getBoundingClientRect()[position] - that.getBoundingClientRect()[position]);
        }

        return tabItem.getBoundingClientRect().top - that.getBoundingClientRect().top;
    }

    /**
     * Inserts a new tab and an associated content section.
     *
     * @param {Number} index The index to insert a new tab at.
     * @param {Object} details An Object with the fields "label", "labelSize", "content" and "group".
     */
    insert(index, details) {
        const that = this;
        let group, tab;

        that._validateIndex(index, 'insert');
        if (details === undefined || (details.label === undefined && details.content === undefined && details.node === undefined)) {
            that.error(that.localize('detailsObjectRequired'));
        }

        if (details.node === undefined) {
            group = details.group;
            tab = document.createElement('smart-tab-item');

            tab.label = details.label !== undefined ? details.label : '';
            tab.labelSize = details.labelSize !== undefined ? details.labelSize : null;
            tab.content = details.content;
        }
        else {
            tab = details.node;

            if (tab.index !== undefined && tab.index !== null) {
                const oldContext = tab.context;

                tab.context = tab;
                tab.index = null;
                tab.context = oldContext;
            }
        }

        tab.$.addClass('smart-visibility-hidden');

        tab.group = null;

        const labelContainers = that._addTabLabelContainer(tab),
            tabLabelContainer = labelContainers.tabLabelContainer,
            dropDownLabelContainer = labelContainers.dropDownLabelContainer;

        tabLabelContainer.tab = tab;
        tab.tabLabelContainer = tabLabelContainer;

        const tabDetails = { index: index, tab: tab, tabLabelContainer: tabLabelContainer, dropDownLabelContainer: dropDownLabelContainer };

        if (that._groups.length === 0 && group === undefined) {
            that._insertNoGrouping(tabDetails);
        }
        else {
            if (group !== undefined && group !== null) {
                tabDetails.group = group;
                const smartTabItemsGroup = that.$.tabContentSection.querySelector('smart-tab-items-group[label="' + group + '"]');

                if (smartTabItemsGroup !== null) {
                    // group exists
                    tabDetails.smartTabItemsGroup = smartTabItemsGroup;
                    that._insertIntoExistingGroup(tabDetails);
                }
                else {
                    // group does not exist
                    that._insertIntoNewGroup(tabDetails);
                }
            }
            else {
                that._insertNearAGroup(tabDetails);
            }
        }

        that._getReorderItems();

        if (that.selectedIndex === null && !that.allowToggle && that._tabs.length) {
            that._select(0, true);
        }

        if (tab.group !== null && tab.labelSize !== null && that.tabLayout !== 'shrink') {
            tabLabelContainer.style.removeProperty([that._orientationSettings.dimension]);
        }

        that._applyTabOverflow();
    }

    /**
     * Inserts the specified "smart-tab-item" node before the reference "smart-tab-item" node.
     *
     * @param {HTMLElement} newNode The "smart-tab-item" node to insert.
     * @param {HTMLElement} referenceNode The "smart-tab-item" node before which newNode is inserted.
     */
    insertBefore(newNode, referenceNode) {
        const that = this;

        if (!that.isCompleted) {
            const args = Array.prototype.slice.call(arguments, 2);
            return HTMLElement.prototype.insertBefore.apply(that, args.concat(Array.prototype.slice.call(arguments)));
        }

        if (!(newNode instanceof Smart.TabItem) || referenceNode !== undefined && referenceNode !== null && !(referenceNode instanceof Smart.TabItem)) {
            that.error(that.localize('tabItemRequired', { method: 'insertBefore' }));
        }

        let reselectIndex;

        if (that.contains(newNode)) {
            if (newNode.selected) {
                reselectIndex = true;
            }

            that.remove(newNode.index);
        }

        if (referenceNode !== undefined && referenceNode !== null) {
            if (!that.contains(referenceNode)) {
                that.error(that.localize('referenceNodeNotChild', { argument: 'referenceNode' }));
            }

            that.insert(referenceNode.index, { node: newNode });
        }
        else {
            that.insert(that._tabs.length, { node: newNode });
        }

        if (reselectIndex) {
            that._select(newNode.index, false);
        }
    }

    /**
     * Refreshes the Tabs header section.
     */
    refreshTabHeader() {
        const that = this;

        if (that.tabLayout === 'scroll') {
            that._checkOverflowScroll();
        }

        that._positionTabSelectionBar(that._tabLabelContainers[that.selectedIndex], true);
    }

    /**
     * Removes a tab and its associated content section.
     *
     * @param {Number} index The index of the tab to remove.
     */
    remove(index) {
        const that = this,
            initialNumberOfTabs = that._tabs.length;

        if (initialNumberOfTabs === 0) {
            return;
        }

        that._validateIndex(index, 'remove');

        index = Math.max(0, Math.min(index, initialNumberOfTabs - 1));

        const tab = that._tabs[index],
            tabLabelContainer = that._tabLabelContainers[index];


        //Fixes a iOS issue where removing the labelContainer breaks touchmove event
        //Used inside DockingLayout to indicate that the lableContainer shouldn't be removed during dragging operation.
        if (tabLabelContainer._lazyRemove) {
            tabLabelContainer.classList.add('smart-hidden');
        }
        else {
            tabLabelContainer.parentElement.removeChild(tabLabelContainer); //Breaks Layout on iOS
        }

        tab.parentElement.removeChild(tab);

        if (tab.group !== null) {
            const smartTabItemsGroup = that.$.tabContentSection.querySelector('smart-tab-items-group[label="' + tab.group + '"]');

            if (smartTabItemsGroup.childElementCount === 0) {
                const groupIndex = that._groups.indexOf(tab.group);

                that.$.tabStrip.removeChild(that._groupLabels[groupIndex]);

                that._groups.splice(groupIndex, 1);
                that.$.container.removeChild(that._groupLabels[0].dropDown);
                that._groupLabels.splice(groupIndex, 1);

                that.$.tabContentSection.removeChild(smartTabItemsGroup);
            }
        }

        if (initialNumberOfTabs > 1) {
            if (index < that.selectedIndex) {
                that.selectedIndex--;
            }
            else if (index === that.selectedIndex) {
                if (index === initialNumberOfTabs - 1) {
                    that._select(index - 1, false);
                }
                else {
                    that._select(index + 1, false);
                    that.selectedIndex--;
                }
            }
        }
        else {
            that.selectedIndex = null;
            that.$.tabContentSection.innerHTML = '';
        }

        that._tabLabelContainers.splice(index, 1);
        that.$.dropDownButtonDropDown.removeChild(that.$.dropDownButtonDropDown.children[index]);
        that._tabs.splice(index, 1);

        if (that._focusedItem === tab) {
            that._focusedItem = that._tabs[that._focusedItem.index];
        }

        that._updateTabIndexes();
        that._getReorderItems();
        that._applyTabOverflow();
        that.ensureVisible(that.selectedIndex);
    }

    /**
     * Removes a child "smart-tab-item" node.
     *
     * @param {HTMLElement} node The "smart-tab-item" node to remove.
     */
    removeChild(node) {
        const that = this;

        if (!that.isCompleted || node instanceof HTMLElement && node.classList.contains('smart-resize-trigger-container')) {
            const args = Array.prototype.slice.call(arguments, 2);
            return HTMLElement.prototype.removeChild.apply(that, args.concat(Array.prototype.slice.call(arguments)));
        }

        if (!(node instanceof Smart.TabItem)) {
            that.error(that.localize('tabItemRequired', { method: 'removeChild' }));
        }

        if (!that.contains(node)) {
            that.error(that.localize('referenceNodeNotChild', { argument: 'node' }));
        }

        that.remove(node.index);
    }

    /**
     * Selects a tab.
     *
     * @param {Number} index The index of the tab to select.
     */
    select(index) {
        const that = this;

        if (that._tabs.length === 0) {
            return;
        }

        that._validateIndex(index, 'select');

        index = Math.max(0, Math.min(index, that._tabs.length - 1));

        that.ensureVisible(index);

        that._select(index, true);
    }

    /**
     * Sets whether the element can be focused.
     *
     * @param {Boolean} focusable Whether the element can be focused.
     */
    _setFocusable() {
        const that = this;

        if (that.disabled || that.unfocusable) {
            that.removeAttribute('tabindex');
            return;
        }

        if (that.getAttribute('tabindex') === null || that.getAttribute('tabindex') < 0) {
            that.setAttribute('tabindex', 0);
        }
    }

    /**
     * Updates a tab and its associated content section.
     *
     * @param {Number} index The index of the tab to update.
     * @param {String} label The new label of the tab. The value can be the id of an HTMLTemplateElement.
     * @param {String/HTMLElement} content The new content of the tab.
     */
    update(index, label, content) {
        const that = this;

        if (that._tabs.length === 0) {
            return;
        }

        that._validateIndex(index, 'update');

        index = Math.max(0, Math.min(index, that._tabs.length - 1));

        const tab = that._tabs[index];

        if (label !== undefined && tab.label !== label) {
            const labelTextContainer = that._tabLabelContainers[index].firstElementChild.children[0],
                dropDownLabelContainer = that.$.dropDownButtonDropDown.children[index];

            tab.label = label;
            labelTextContainer.innerHTML = '';
            dropDownLabelContainer.innerHTML = '';
            that._setLabel(label, labelTextContainer, dropDownLabelContainer);

            that._applyTabOverflow();
        }

        if (content !== undefined) {
            tab.content = content;
        }
    }

    /**
     * Applies initial settings to the Tabs element.
     */
    _createElement() {
        const that = this;

        if (that.disabled) {
            that.$.scrollButtonNear.disabled = true;
            that.$.scrollButtonFar.disabled = true;
        }

        that._handlePosition(that.tabPosition);
        that._handleScrollButtonsPosition(that.scrollButtonsPosition, 'both');

        if (that.dataSource !== null) {
            that._processDataSource();
        }

        that._setFocusable();

        if (that.collapsed && !that.collapsible) {
            that.collapsed = false;
        }

        if (that.collapsible) {
            if (that.allowToggle) {
                that.allowToggle = false;
            }
        }

        that._processHTML();

        if (that.selectedIndex === null) {
            that.$.tabContentSection.setAttribute('show-placeholder', '');
        }

        setTimeout(() => that.refreshTabHeader(), 300);
    }

    /**
     * Called when a property is changed.
     */
    propertyChangedHandler(propertyName, oldValue, newValue) {
        super.propertyChangedHandler(propertyName, oldValue, newValue);

        const that = this;

        switch (propertyName) {
            case 'addNewTab':
                if (newValue) {
                    that._insertAddNewTab();
                }
                else {
                    that.$.tabStrip.removeChild(that._addNewTab);
                    delete that._addNewTab;
                }

                that._applyTabOverflow();
                break;
            case 'allowToggle':
                if (newValue && that.collapsible) {
                    if (that.collapsed) {
                        that._toggleCollapsedState();
                    }

                    that.collapsible = false;
                }
                else if (!newValue && that.selectedIndex === null) {
                    that.ensureVisible(that.selectedIndex = 0);
                    that._select(that.selectedIndex, true, null);
                }

                break;
            case 'closeButtonMode':
                if (newValue === 'selected') {
                    for (let i = 0; i < that._tabs.length; i++) {
                        that._disableCloseButton(i);
                    }

                    that._enableCloseButton(that.selectedIndex);
                }
                else {
                    that._disableCloseButton(that.selectedIndex);

                    const tabLabelContainers = that._tabLabelContainers;

                    for (let i = 0; i < tabLabelContainers.length; i++) {
                        const tabLabelContainer = tabLabelContainers[i];

                        tabLabelContainer.closeButtonEnabled = that._tabs[i].closeButtonHidden !== true;
                        that._showCloseButton(tabLabelContainer);
                    }
                }

                that._applyTabOverflow();
                break;
            case 'closeButtons': {
                const tabLabelContainers = that._tabLabelContainers,
                    fn = newValue ? that._showCloseButton : that._hideCloseButton;

                for (let i = 0; i < tabLabelContainers.length; i++) {
                    const tabLabelContainer = tabLabelContainers[i];

                    fn(tabLabelContainer);
                }

                that._applyTabOverflow();
                break;
            }
            case 'collapsed':
                if (!that.collapsible && newValue) {
                    that.collapsed = false;
                    return;
                }

                break;
            case 'collapsible':
                if (!newValue && that.collapsed) {
                    that.collapsed = false;
                }

                that.allowToggle = false;

                if (that.selectedIndex === undefined) {
                    that.select(that._focusedItem.index);
                }

                break;
            case 'dataSource':
                that.selectedIndex = null;

                for (let i = 0; i < that._groupLabels.length; i++) {
                    that.$.container.removeChild(that._groupLabels[i].dropDown);
                }

                that.$.tabStrip.innerHTML = '';
                that._processDataSource();
                that._processHTML();
                break;
            case 'disabled':
                that._setFocusable();
                that.$.scrollButtonNear.disabled = newValue;
                that.$.scrollButtonFar.disabled = newValue;

                if (!newValue) {
                    that._updateScrollButtonVisibility();
                }

                that._closeDropDownButtonDropDown();
                break;
            case 'messages':
            case 'scrollMode':
            case 'selectionMode':
            case 'readonly':
            case 'reorder':
                break;
            case 'overflow':
                if (that.tabLayout !== 'scroll') {
                    return;
                }

                that.$.tabStrip.scrollLeft = 0;
                that.$.tabStrip.scrollTop = 0;

                if (newValue === 'hidden') {
                    that.$tabsHeaderSection.removeClass('scroll-buttons-shown');
                    that.$scrollButtonNear.addClass('smart-hidden');
                    that.$scrollButtonFar.addClass('smart-hidden');
                }
                else {
                    that._checkOverflowScroll();
                }

                that._getTabCoordinates();
                break;
            case 'tabPosition': {
                that.$.tabSelectionBar.style.transition = 'none';
                that._tabPositionChanging = true;
                that._closeGroupDropDown();
                that._handlePosition(newValue, oldValue);

                if (that.tabLayout !== 'shrink') {
                    that._applyLabelSizes('tabPosition');
                }

                that._applyTabOverflow();

                if (newValue !== 'hidden') {
                    const arrows = that.getElementsByClassName('smart-tab-group-arrow');

                    for (let i = 0; i < arrows.length; i++) {
                        arrows[i].innerHTML = that._arrowCodes[that.tabPosition];
                    }
                }

                delete that._tabPositionChanging;
                requestAnimationFrame(function () {
                    that.$.tabSelectionBar.style.transition = null;
                });
                break;
            }
            case 'resize':
                if (newValue) {
                    that._getTabCoordinates();
                }

                break;
            case 'scrollButtonsPosition':
                that._handleScrollButtonsPosition(newValue, oldValue);
                break;
            case 'selectedIndex': {
                if (isNaN(newValue)) {
                    that.selectedIndex = newValue = oldValue;
                }

                if ((!that.allowToggle && newValue === null)) {
                    that.selectedIndex = oldValue;
                    return;
                }

                let validIndex = newValue;

                if (newValue !== null) {
                    validIndex = Math.max(0, Math.min(newValue, that._tabs.length - 1));

                    that.ensureVisible(validIndex);
                }

                that._select(validIndex, true, oldValue);
                break;
            }
            case 'tabLayout':
                if (oldValue === 'scroll') {
                    that.$tabsHeaderSection.removeClass('scroll-buttons-shown');
                    that.$scrollButtonNear.addClass('smart-hidden');
                    that.$scrollButtonFar.addClass('smart-hidden');
                }

                if (newValue === 'shrink') {
                    that._applyLabelSizes('shrink', true);
                }
                else if (oldValue === 'shrink') {
                    that._applyLabelSizes('shrink', false);
                }

                that._applyTabOverflow();

                if (newValue === 'scroll' && that.disabled) {
                    that.$.scrollButtonNear.disabled = true;
                    that.$.scrollButtonFar.disabled = true;
                }

                that.ensureVisible(that.selectedIndex);
                break;
            case 'tabTextOrientation':
                that._applyTabOverflow();
                that.ensureVisible(that.selectedIndex);
                break;
            case 'unfocusable':
                that._setFocusable();
                break;
        }
    }

    /**
     * Adds a tab group container.
     */
    _addGroupContainer(label, labelSize) {
        const that = this,
            groupContainer = document.createElement('div'),
            labelTextWrapper = document.createElement('div'),
            labelTextContainer = document.createElement('div'),
            arrow = document.createElement('div'),
            dropDown = document.createElement('div');

        groupContainer.className = 'smart-tab-group-container smart-unselectable';
        groupContainer.$ = Smart.Utilities.Extend(groupContainer);
        labelTextWrapper.className = 'smart-tab-label-text-wrapper';

        if (labelSize !== null && that.tabLayout !== 'shrink') {
            groupContainer.style[that._orientationSettings.dimension] = parseInt(labelSize, 10) + 'px';
        }

        // label
        labelTextContainer.className = 'smart-tab-label-text-container';
        labelTextContainer.innerHTML = label;

        // down arrow
        arrow.className = 'smart-tab-group-arrow';
        arrow.innerHTML = that._arrowCodes[that.tabPosition];

        // dropdown
        dropDown.className = 'smart-tab-group-drop-down smart-hidden';
        dropDown.$ = Smart.Utilities.Extend(dropDown);

        labelTextWrapper.appendChild(labelTextContainer);
        labelTextWrapper.appendChild(arrow);
        groupContainer.appendChild(labelTextWrapper);
        that.$.container.appendChild(dropDown);

        groupContainer.group = label;
        groupContainer.dropDown = dropDown;
        dropDown.groupContainer = groupContainer;

        return { label: groupContainer, dropDown: dropDown };
    }

    /**
     * Adds group-related elements to the tabstrip.
     */
    _addGroupElements(details) {
        const that = this,
            groups = details.groups,
            groupLabels = details.groupLabels,
            group = details.group,
            groupIndex = groups.indexOf(group),
            tabLabelContainer = details.tabLabelContainer;
        let groupLabel;

        if (groupIndex !== -1) {
            // group exists
            groupLabel = groupLabels[groupIndex];
            groupLabel.dropDown.appendChild(tabLabelContainer);
        }
        else {
            // group does not exist
            groups.push(group);

            const groupContainers = that._addGroupContainer(group, details.smartTabItemsGroup.labelSize),
                groupDropDown = groupContainers.dropDown;

            groupLabel = groupContainers.label;

            groupDropDown.appendChild(tabLabelContainer);
            groupDropDown.groupContainer = groupContainers.label;

            details.documentFragment.appendChild(groupLabel);

            groupLabels.push(groupLabel);
        }

        if (that.selectedIndex === details.i) {
            that._selectedGroup = groupLabel;
            groupLabel.$.addClass('smart-tab-group-selected');
        }
    }

    /**
     * "add new" tab event handler.
     */
    _addNewTabHandler(currentElement, eventType, click) {
        const that = this;

        if (that._swiping) {
            return;
        }

        if (click) {
            currentElement.removeAttribute('hover');

            that.insert(that._tabs.length, { label: 'New Tab', content: '' });
            that._select(that._tabs.length - 1, true);
        }
        else if (!that._reordering && !that._swiping) {
            if (eventType === 'mouseover') {
                currentElement.setAttribute('hover', '');
            }
            else if (eventType === 'mouseout') {
                currentElement.removeAttribute('hover');
            }
        }
    }

    /**
     * Adds a tab label container.
     */
    _addTabLabelContainer(tab, addNewTab) {
        const that = this,
            tabLabelContainer = document.createElement('div'),
            labelTextWrapper = document.createElement('div'),
            labelTextContainer = document.createElement('div'),
            closeButton = document.createElement('div');
        let dropDownLabelContainer;

        tabLabelContainer.className = 'smart-tab-label-container smart-unselectable';
        labelTextWrapper.className = 'smart-tab-label-text-wrapper';

        // label
        labelTextContainer.className = 'smart-tab-label-text-container';

        // close button
        closeButton.className = 'smart-tab-close-button';
        closeButton.innerHTML = '&#xe81f';

        if (addNewTab === undefined) {
            if (that.closeButtons) {
                if (that.closeButtonMode === 'default' && tab.closeButtonHidden ||
                    that.closeButtonMode === 'selected' && !tab.selected) {
                    closeButton.classList.add('smart-hidden');
                    tabLabelContainer.closeButtonEnabled = false;
                }
                else {
                    labelTextContainer.classList.add('smart-close-button-enabled');
                    tabLabelContainer.closeButtonEnabled = true;
                }

            }
            else {
                closeButton.classList.add('smart-hidden');
                tabLabelContainer.closeButtonEnabled = true;
            }

            dropDownLabelContainer = document.createElement('div');
            dropDownLabelContainer.className = 'smart-tab-label-container smart-unselectable';

            if (tab.group === null && tab.labelSize !== null && that.tabLayout !== 'shrink') {
                tabLabelContainer.style[that._orientationSettings.dimension] = parseInt(tab.labelSize, 10) + 'px';
            }
        }
        else {
            closeButton.classList.add('smart-hidden');
            tabLabelContainer.closeButtonEnabled = false;
        }

        that._setLabel(tab ? tab.label : '+', labelTextContainer, dropDownLabelContainer);

        labelTextContainer.$ = Smart.Utilities.Extend(labelTextContainer);
        closeButton.$ = Smart.Utilities.Extend(closeButton);

        labelTextWrapper.appendChild(labelTextContainer);
        labelTextWrapper.appendChild(closeButton);

        tabLabelContainer.appendChild(labelTextWrapper);

        tabLabelContainer.$ = Smart.Utilities.Extend(tabLabelContainer);

        return { tabLabelContainer: tabLabelContainer, dropDownLabelContainer: dropDownLabelContainer };
    }

    /**
     * Animates selection.
     */
    _animateSelection(tab, oldTab, indexGreaterThanOldIndex) {
        const that = this;
        let side1 = 'right',
            side2 = 'left';

        that._animatedTab = tab;
        that._animatedOldTab = oldTab;

        if (!that._animatedTab || !that._animatedOldTab) {
            return;
        }

        if (that.tabPosition === 'left' || that.tabPosition === 'right') {
            side1 = 'top';
            side2 = 'bottom';
        }

        for (let i = 0; i < that._tabs.length; i++) {
            that._tabs[i].$.removeClass(side1);
            that._tabs[i].$.removeClass(side2);
            that._tabs[i].$.removeClass('animate');
        }

        if (tab === oldTab) {
            tab.$.hasClass('smart-visibility-hidden') ? tab.$.removeClass('smart-visibility-hidden') : tab.$.addClass('smart-visibility-hidden');
            that._animatedOldTab.classToRemove = side1;
            return;
        }

        if (indexGreaterThanOldIndex) {
            tab.$.addClass(side1);
            tab.$.removeClass('smart-visibility-hidden');

            oldTab.$.addClass('animate');
            tab.$.addClass('animate');

            oldTab.$.addClass(side2);
            oldTab.$.addClass('smart-visibility-hidden');
            tab.$.removeClass(side1);

            that._animatedOldTab.classToRemove = side2;
        }
        else {
            tab.$.addClass(side2);
            tab.$.removeClass('smart-visibility-hidden');

            oldTab.$.addClass('animate');
            tab.$.addClass('animate');

            oldTab.$.addClass(side1);
            oldTab.$.addClass('smart-visibility-hidden');
            tab.$.removeClass(side2);

            that._animatedOldTab.classToRemove = side1;
        }
    }

    /**
     * Shows or hides the scroll buttons.
     */
    _applyConditionalTabOverflow() {
        const that = this,
            verticalPosition = that.tabPosition === 'left' || that.tabPosition === 'right',
            tabStrip = that.$.tabStrip;

        if (that.tabLayout === 'scroll') {
            that._checkOverflowScroll();
            return;
        }

        if (that._flexWritingModeNoFullSupport && that.tabLayout === 'shrink' && verticalPosition &&
            tabStrip.scrollHeight > tabStrip.offsetHeight) {

            const tabStripChildren = tabStrip.children,
                height = 100 / tabStripChildren.length + '%';

            tabStrip.$.addClass('shrink-tabs-vertical');

            for (let i = 0; i < tabStripChildren.length; i++) {
                tabStripChildren[i].style.height = height;
                tabStripChildren[i].firstElementChild.firstElementChild.classList.add('smart-tab-label-text-container-full-height');
            }

            that._inlineStyleTabStripChildren = true;
        }
    }

    /**
     * Applies label sizes.
     */
    _applyLabelSizes(condition, removeLabelSize) {
        const that = this,
            newDimension = that._orientationSettings.dimension,
            oldDimension = newDimension === 'width' ? 'height' : 'width';

        for (let i = 0; i < that._reorderItems.length; i++) {
            const currentItem = that._reorderItems[i],
                correspondingCustomElement = that._getCorrespondingCustomElement(currentItem);

            if (correspondingCustomElement.labelSize !== null) {
                if (condition === 'tabPosition') {
                    currentItem.style.removeProperty(oldDimension);
                }

                if (!removeLabelSize) {
                    currentItem.style[newDimension] = parseInt(correspondingCustomElement.labelSize, 10) + 'px';
                }
                else {
                    currentItem.style.removeProperty(newDimension);
                }
            }
        }
    }

    /**
     * Applies the necessary adjustments in order to achieve the chosen tab overflow.
     */
    _applyTabOverflow() {
        const that = this;

        that._removeInlineStyle();

        if (that._tabs.length === 0) {
            that._toggleNavigationElementsVisibility();
            return;
        }

        const tabLayout = that.tabLayout,
            position = that.tabPosition,
            verticalPosition = position === 'left' || position === 'right',
            tabStrip = that.$.tabStrip;

        that._closeDropDownButtonDropDown();

        switch (tabLayout) {
            case 'scroll':
            case 'dropDown':
                if (that._flexWritingModeNoFullSupport && that.tabTextOrientation === 'vertical' && verticalPosition) {
                    that._fixTabStripNotChrome(tabStrip);
                }

                break;
            case 'wrap':
                if (that.tabTextOrientation === 'vertical') {
                    if (that._flexWritingModeNoFullSupport) {
                        // fix for flexbox-related issues in Firefox, Edge, and Safari
                        if (verticalPosition) {
                            that._fixTabStripNotChrome(tabStrip);
                        }
                        else {
                            const tabStripChildren = tabStrip.children;
                            let greatestHeight = tabStripChildren[0].offsetHeight;

                            for (let i = 1; i < tabStripChildren.length; i++) {
                                greatestHeight = Math.max(greatestHeight, tabStripChildren[i].offsetHeight);
                            }

                            for (let i = 1; i < tabStripChildren.length; i++) {
                                tabStripChildren[i].style.height = greatestHeight + 'px';
                            }

                            that._inlineStyleTabStripChildren = true;
                        }
                    }
                    else if (!verticalPosition) {
                        if (tabStrip.scrollHeight > tabStrip.offsetHeight) {
                            tabStrip.style.height = tabStrip.scrollHeight + 'px';
                            that._inlineStyleTabStrip = true;
                        }
                    }
                }
                else if (verticalPosition && (tabStrip.scrollWidth > tabStrip.offsetWidth)) {
                    tabStrip.style.width = tabStrip.scrollWidth + 'px';

                    if (position === 'right') {
                        tabStrip.style.flexWrap = 'wrap-reverse';
                    }

                    that._inlineStyleTabStrip = true;
                }

                break;
            case 'shrink': {
                if (!verticalPosition) {
                    if (tabStrip.scrollWidth > tabStrip.offsetWidth) {
                        tabStrip.$.addClass('shrink-tabs');
                    }
                }
                else if (that._flexWritingModeNoFullSupport && that.tabTextOrientation === 'vertical') {
                    const tabStripChildren = tabStrip.children,
                        computedStyle = window.getComputedStyle(tabStripChildren[0].firstElementChild),
                        paddings = parseInt(computedStyle.paddingLeft, 10) + parseInt(computedStyle.paddingRight, 10);
                    let maxWidth = 0;

                    for (let i = 0; i < tabStripChildren.length; i++) {
                        maxWidth = Math.max(maxWidth, tabStripChildren[i].firstElementChild.firstElementChild.offsetWidth);
                    }

                    tabStrip.style.width = (paddings + maxWidth) + 'px';
                    that._inlineStyleTabStrip = true;
                    break;
                }
            }
        }

        that._applyConditionalTabOverflow();
        that._getTabCoordinates();
        that._fixTabStripFlex(tabLayout);
        that._toggleNavigationElementsVisibility();
        that._positionTabSelectionBar(that._tabLabelContainers[that.selectedIndex], true);
    }

    /**
     * Checks if items overflow and shows/hides scroll buttons.
     */
    _checkOverflowScroll() {
        const that = this,
            tabsHeaderSection = that.$tabsHeaderSection,
            tabStrip = that.$.tabStrip,
            overflow = that.overflow;

        if (overflow === 'hidden') {
            return;
        }

        let overflowing, showNear, showFar;

        if (!(that.tabPosition === 'left' || that.tabPosition === 'right')) {
            overflowing = Math.round(tabStrip.scrollWidth) > Math.round(tabStrip.offsetWidth);
            showNear = Math.round(tabStrip.scrollLeft) > 0;
            showFar = Math.round(tabStrip.offsetWidth + tabStrip.scrollLeft) < Math.round(tabStrip.scrollWidth);
        }
        else {
            overflowing = Math.round(tabStrip.scrollHeight) > Math.round(tabStrip.offsetHeight);
            showNear = Math.round(tabStrip.scrollTop) > 0;
            showFar = Math.round(tabStrip.offsetHeight + tabStrip.scrollTop) < Math.round(tabStrip.scrollHeight);
        }

        if (overflow === 'scroll') {
            tabsHeaderSection.addClass('scroll-buttons-shown');
            that.$scrollButtonNear.removeClass('smart-hidden');
            that.$scrollButtonFar.removeClass('smart-hidden');
        }

        if (overflowing) {
            if (overflow === 'auto') {
                if (!tabsHeaderSection.hasClass('scroll-buttons-shown')) {
                    tabsHeaderSection.addClass('scroll-buttons-shown');
                }

                if (showNear) {
                    that.$scrollButtonNear.removeClass('smart-hidden');
                }
                else {
                    that.$scrollButtonNear.addClass('smart-hidden');
                }

                if (showFar) {
                    that.$scrollButtonFar.removeClass('smart-hidden');
                }
                else {
                    that.$scrollButtonFar.addClass('smart-hidden');
                }

                if ((showNear && showFar) === false) {
                    tabsHeaderSection.addClass('one-button-shown');
                }
                else {
                    tabsHeaderSection.removeClass('one-button-shown');
                }

                if (!that.disabled) {
                    that.$.scrollButtonNear.disabled = false;
                    that.$.scrollButtonFar.disabled = false;
                }
            }
            else {
                tabsHeaderSection.removeClass('one-button-shown');

                if (that.disabled) {
                    that.$.scrollButtonNear.disabled = true;
                    that.$.scrollButtonFar.disabled = true;
                }
                else {
                    that.$.scrollButtonNear.disabled = !showNear;
                    that.$.scrollButtonFar.disabled = !showFar;
                }
            }
        }
        else if (!overflowing && overflow === 'auto' && tabsHeaderSection.hasClass('scroll-buttons-shown')) {
            tabsHeaderSection.removeClass('scroll-buttons-shown');
            tabsHeaderSection.removeClass('one-button-shown');
            that.$scrollButtonNear.addClass('smart-hidden');
            that.$scrollButtonFar.addClass('smart-hidden');
        }
        else if (!overflowing && overflow === 'scroll') {
            that.$.scrollButtonNear.disabled = true;
            that.$.scrollButtonFar.disabled = true;
        }
    }

    /**
     * smart-tab-item closeButtonVisibilityChange event handler.
     */
    _closeButtonVisibilityChangeHandler(event) {
        const that = this,
            index = (Smart.EnableShadowDOM ? event.composedPath()[0] : event.target).index;

        if (that.closeButtonMode === 'selected') {
            that._tabLabelContainers[index].closeButtonEnabled = event.detail.hidden;
            return;
        }

        if (event.detail.hidden) {
            that._disableCloseButton(index);
        }
        else {
            that._enableCloseButton(index);
        }
    }

    /**
     * Closes the dropdown in mode 'dropDown'.
     */
    _closeDropDownButtonDropDown() {
        const that = this;

        if (that._dropDownButtonDropDownOpened) {
            that.$dropDownButtonDropDown.addClass('smart-hidden');
            that._dropDownButtonDropDownOpened = false;
        }
    }

    /**
     * Closes the open group dropdown.
     */
    _closeGroupDropDown() {
        const that = this;

        if (!that._openDropDown) {
            return;
        }

        if (that._openDropDown.rippleInProgress) {
            setTimeout(function () {
                if (that._openDropDown) {
                    that._openDropDown.$.addClass('smart-hidden');
                    delete that._openDropDown.rippleInProgress;
                    that._openDropDown = undefined;
                }
            }, 450);
        }
        else {
            that._openDropDown.$.addClass('smart-hidden');
            that._openDropDown = undefined;
        }
    }

    /**
     * Container event handler.
     */
    _containerHandler(event) {
        const that = this,
            eventType = event.type;

        if (that.disabled ||
            that.readonly ||
            (that._resizing && eventType !== 'mouseout') ||
            ((eventType === 'down' || eventType === 'up') && event.which !== 1 && !Smart.Utilities.Core.isMobile)) {
            return;
        }

        const target = that.shadowRoot || that.isInShadowDOM ? (event.originalEvent || event).composedPath()[0] : (event.originalEvent || event).target;

        if (that.$.tabContentSection.contains(target)) {
            return;
        }

        if (that.$.dropDownButton.contains(target)) {
            that._dropDownButtonHandler(target, event);
            return;
        }

        if (that.$.dropDownButtonDropDown.contains(target)) {
            that._dropDownButtonHandler(target, event, true);
            return;
        }

        that._tabStripHandler(target, event);
    }

    /**
     * Disables the close button of a tab.
     *
     * @param {Number} index The index of which tab's close button to hide.
     */
    _disableCloseButton(index) {
        const that = this,
            tabLabelContainer = that._tabLabelContainers[index];

        tabLabelContainer.closeButtonEnabled = false;

        if (that.closeButtons) {
            that._hideCloseButton(tabLabelContainer);
        }
    }

    /**
     * Document (mouse)move handler.
     */
    _documentMoveHandler(event) {
        const that = this,
            orientationSettings = that._orientationSettings;

        if (that._reordering) {
            if (!that._reorderStartThrown) {
                that._fireDragEvent(event, 'dragStart');
                that._reorderStartThrown = true;
            }

            const mouseCoordinate = event[orientationSettings.coordinate],
                condition = that.tabLayout !== 'wrap' ?
                    function (currentCoordinateSet) {
                        return mouseCoordinate >= currentCoordinateSet[orientationSettings.from] && mouseCoordinate <= currentCoordinateSet[orientationSettings.to];
                    } :
                    function (currentCoordinateSet) {
                        return event.pageX >= currentCoordinateSet.fromX && event.pageX <= currentCoordinateSet.toX && event.pageY >= currentCoordinateSet.fromY && event.pageY <= currentCoordinateSet.toY;
                    };
            let inTab = false;

            for (let i = 0; i < that._tabCoordinates.length; i++) {
                const currentCoordinateSet = that._tabCoordinates[i];

                if (condition(currentCoordinateSet)) {
                    inTab = i;
                    break;
                }
            }

            if (that._preventReorder !== true && inTab !== false && inTab !== that._draggedIndex) {
                that._reorderTabs(that._draggedIndex, inTab);

                that._closeGroupDropDown();

                that._draggedIndex = inTab;
                that._getReorderItems();
                that._getTabCoordinates();
            }

            const draggedIndexCoordinates = that._tabCoordinates[that._draggedIndex];

            if (that.tabLayout !== 'wrap' &&
                (mouseCoordinate < draggedIndexCoordinates[orientationSettings.from] || mouseCoordinate > draggedIndexCoordinates[orientationSettings.to]) ||
                that.tabLayout === 'wrap' &&
                (event.originalEvent.target.closest('.smart-tab-label-container') !== null ||
                    event.originalEvent.target.closest('.smart-tab-group-container') !== null) &&
                !(event.pageX >= draggedIndexCoordinates.fromX && event.pageX <= draggedIndexCoordinates.toX && event.pageY >= draggedIndexCoordinates.fromY && event.pageY <= draggedIndexCoordinates.toY)) {
                that._preventReorder = true;
            }
            else {
                that._preventReorder = false;
            }
        }
        else if (that._resizing) {
            that.$.resizeToken.style[orientationSettings.edge] = event[orientationSettings.coordinate] - that._tabsHeaderSectionCoordinate + 'px';
            that.$resizeToken.removeClass('smart-hidden');
        }
    }

    /**
     * Document (mouse)up handler.
     */
    _documentUpHandler(event) {
        const that = this;
        let target = that.shadowRoot || that.isInShadowDOM ? event.originalEvent.composedPath()[0] : event.originalEvent.target;

        if (that.$.container.contains(target)) {
            that._containerHandler(event);
        }

        that._endSwiping(event, Date.now());

        if (that._openDropDown && !that._openDropDown.rippleInProgress &&
            (target === document || target.closest('.smart-tab-group-container') !== that._openDropDown.groupContainer)) {
            that._closeGroupDropDown();
        }

        if (!that.$.dropDownButton.contains(target)) {
            that._closeDropDownButtonDropDown();
        }

        that._endReordering(event, target);

        that._resize(event);

        if (that._tabToResize !== undefined) {
            that._tabToResize = undefined;
        }
    }

    /**
     * Dropdown button and dropdown event handler.
     */
    _dropDownButtonHandler(target, event, dropDown) {
        const that = this,
            eventType = event.type;

        if (dropDown) {
            if (target.classList.contains('smart-tab-label-container')) {
                switch (eventType) {
                    case 'down':
                        that._downTarget = target;
                        break;
                    case 'mouseout':
                        target.removeAttribute('hover');
                        break;
                    case 'mouseover':
                        target.setAttribute('hover', '');
                        break;
                    case 'up':
                        if (target === that._downTarget) {
                            that.select(Array.from(that.$.dropDownButtonDropDown.children).indexOf(target));
                            that._closeDropDownButtonDropDown();
                        }
                        break;
                }
            }
            return;
        }

        if (eventType === 'down') {
            that._downTarget = that.$.dropDownButton;
        }
        else if (eventType === 'up' && that._downTarget === that.$.dropDownButton) {
            if (!that._dropDownButtonDropDownOpened) {
                const tabPosition = that.tabPosition;
                let left, top;

                switch (tabPosition) {
                    case 'top':
                        left = that.$.dropDownButton.offsetLeft;
                        top = that.$.tabsHeaderSection.offsetTop + that.$.dropDownButton.offsetHeight;
                        break;
                    case 'bottom':
                        left = that.$.dropDownButton.offsetLeft;
                        top = that.$.tabsHeaderSection.offsetTop;
                        break;
                    case 'left':
                        left = that.$.dropDownButton.offsetWidth;
                        top = that.$.dropDownButton.offsetTop;
                        break;
                    case 'right':
                        left = that.$.tabsHeaderSection.offsetLeft;
                        top = that.$.dropDownButton.offsetTop;
                        break;
                }

                that.$.dropDownButtonDropDown.style.left = left + 'px';
                that.$.dropDownButtonDropDown.style.top = top + 'px';
                that.$dropDownButtonDropDown.removeClass('smart-hidden');
                that._dropDownButtonDropDownOpened = true;
            }
            else {
                that._closeDropDownButtonDropDown();
            }
        }
    }

    /**
     * Enables the close button of a tab.
     *
     * @param {Number} index The index of which tab's close button to show.
     */
    _enableCloseButton(index) {
        const that = this,
            tabLabelContainer = that._tabLabelContainers[index];

        tabLabelContainer.closeButtonEnabled = true;

        if (that.closeButtons) {
            that._showCloseButton(tabLabelContainer);
        }
    }

    /**
     * Ends reordering operation.
     */
    _endReordering(event, target) {
        const that = this;

        if (!that._reordering) {
            return;
        }

        if (that._draggedHoveredTab) {
            if (!that._draggedHoveredTab.contains(target)) {
                that._draggedHoveredTab.removeAttribute('hover');

            }

            delete that._draggedHoveredTab;
        }

        that._reorderedIndex = undefined;
        that._reordering = false;
        that._reorderStartThrown = false;
        that.removeAttribute('dragged');

        if (event) {
            that._fireDragEvent(event, 'dragEnd');
        }
    }

    /**
     * Ends swiping and scrolls kinetically.
     */
    _endSwiping(event, now) {
        const that = this;

        if (!that._dragStartDetails) {
            return;
        }

        const orientationSettings = that._orientationSettings,
            tabStrip = that.$.tabStrip,
            timeDifference = Math.abs(that._dragStartDetails.startTime - now),
            speed = 200 / timeDifference,
            distanceDifference = (that._dragStartDetails[orientationSettings.startCoordinate] - event[orientationSettings.coordinate]) * speed;
        let remaining = Math.abs(distanceDifference);

        const scrollable = function () {
            if (distanceDifference > 0 &&
                tabStrip[orientationSettings.scrollDirection] === tabStrip[orientationSettings.scrollSize] - tabStrip[orientationSettings.size] ||
                distanceDifference < 0 && tabStrip[orientationSettings.scrollDirection] === 0) {
                return false;
            }

            return true;
        }

        let scrollStep = 0.03 * Math.abs(distanceDifference) * speed;

        const kineticScrolling = function () {
            if (scrollStep > 5) {
                const remainingPart = (remaining - scrollStep) / Math.abs(distanceDifference);

                if (remainingPart < 0.1) {
                    scrollStep /= 1.25;
                }
                else if (remainingPart < 0.15) {
                    scrollStep /= 1.2;
                }
                else if (remainingPart < 0.2) {
                    scrollStep /= 1.15;
                }
                else if (remainingPart < 0.25) {
                    scrollStep /= 1.1;
                }
                else if (remainingPart < 0.3) {
                    scrollStep /= 1.05;
                }
            }

            scrollStep = Math.round(scrollStep);

            const oldScrollDirection = tabStrip[orientationSettings.scrollDirection];

            if (distanceDifference > 0) {
                tabStrip[orientationSettings.scrollDirection] = Math.min(oldScrollDirection + scrollStep, tabStrip[orientationSettings.scrollSize] - tabStrip[orientationSettings.size]);
            }
            else {
                tabStrip[orientationSettings.scrollDirection] = Math.max(oldScrollDirection - scrollStep, 0);
            }

            remaining -= scrollStep;

            that._updateScrollButtonVisibility(true);

            const canBeScrolled = scrollable();

            if (remaining > 0 && canBeScrolled) {
                that._scrollingAnimationFrame = window.requestAnimationFrame(kineticScrolling);
            }
            else {
                that._wheelInProgress = false;
            }
        };

        if (that._scrollingAnimationFrame) {
            cancelAnimationFrame(that._scrollingAnimationFrame);
        }

        if (timeDifference < 500 && scrollable()) {
            that._scrollingAnimationFrame = window.requestAnimationFrame(kineticScrolling);
        }
        else {
            that._wheelInProgress = false;
        }

        delete that._dragStartDetails;

        if (that._swiping) {
            delete that._swiping;
        }
    }

    /**
     * Fires the "dragStart" or "dragEnd" event.
     */
    _fireDragEvent(event, eventToFire) {
        const that = this,
            target = that.$.tabStrip.children[that._draggedIndex],
            tab = target.tab;
        let selected, index, label;

        if (tab) {
            selected = tab.selected;
            index = tab.index;
            label = tab.label;
        }
        else {
            label = target.group;
        }

        that.$.fireEvent(eventToFire, {
            'position': { left: event.pageX, top: event.pageY }, 'target': target, 'selected': selected, 'index': index, 'label': label
        });
    }

    /**
     * Fix for the tab strip layout in Firefox, Edge, and Safari when the position and text orientation are vertical.
     */
    _fixTabStripNotChrome(tabStrip) {
        const that = this;

        function recalcTabStripWidth() {
            const tabStripChildren = [].slice.call(tabStrip.children).filter(item => !item._lazyRemove);
            let rect = tabStripChildren[0].getBoundingClientRect(),
                leastStartX = rect.left,
                greatestEndX = leastStartX + tabStripChildren[0].offsetWidth;

            for (let i = 1; i < tabStripChildren.length; i++) {
                rect = tabStripChildren[i].getBoundingClientRect();
                leastStartX = Math.min(leastStartX, rect.left);
                greatestEndX = Math.max(greatestEndX, rect.left + tabStripChildren[i].offsetWidth);
            }

            tabStrip.style.width = greatestEndX - leastStartX + 'px';
            that._inlineStyleTabStrip = true;
        }

        if (that._tabs.length === 0) {
            return;
        }

        recalcTabStripWidth();

        if (Smart.Utilities.Core.Browser.Safari) {
            setTimeout(function () {
                tabStrip.parentElement.classList.add('smart-hidden');
                setTimeout(function () {
                    tabStrip.parentElement.classList.remove('smart-hidden');
                    recalcTabStripWidth();
                }, 10);
            }, 10);
        }

        //Necessary for cases where the tab is nested for example in a Layout and resize has to be called on the Layout.
        that.$.fireEvent('tabStripResize');
    }

    /**
     * Fix for a flexbox-related issue in Chrome.
     */
    _fixTabStripFlex(tabLayout) {
        const that = this;

        if (!that._flexWritingModeNoFullSupport && that.tabTextOrientation === 'vertical' && (that.tabPosition === 'left' || that.tabPosition === 'right')) {
            setTimeout(function () {
                that.$tabsHeaderSection.addClass('smart-hidden');
                setTimeout(function () {
                    that.$tabsHeaderSection.removeClass('smart-hidden');
                    that._getTabCoordinates();

                    if (tabLayout === 'scroll') {
                        that._checkOverflowScroll();
                    }
                }, 10);
            }, 10);
        }
    }

    /**
     * Returns the custom element corresponding to the passed tab strip element.
     */
    _getCorrespondingCustomElement(currentItem) {
        if (currentItem.$.hasClass('smart-tab-label-container')) {
            return currentItem.tab;
        }
        else {
            return this.$.tabContentSection.querySelector('smart-tab-items-group[label="' + currentItem.group + '"]');
        }
    }

    /**
     * Stores the items that can be reordered in an Array.
     */
    _getReorderItems() {
        const that = this;
        let reorderItems;

        if (that._groups.length === 0) {
            reorderItems = that._tabLabelContainers;
        }
        else {
            reorderItems = Array.from(that.$.tabStrip.children);

            if (that.addNewTab) {
                reorderItems.pop();
            }
        }

        that._reorderItems = reorderItems;
    }

    /**
     * Stores the coordinates of tab label containers in an Array (for use in reorder and resize functionalities).
     */
    _getTabCoordinates() {
        const that = this;

        if ((!that.reorder && !that.resize) || that.tabPosition === 'hidden') {
            return;
        }

        const coordinates = [],
            windowScrollX = window.scrollX || window.pageXOffset,
            windowScrollY = window.scrollY || window.pageYOffset;

        for (let i = 0; i < that._reorderItems.length; i++) {
            const currentTabLabelContainer = that._reorderItems[i],
                boundingClientRect = currentTabLabelContainer.getBoundingClientRect(),
                style = window.getComputedStyle(currentTabLabelContainer),
                marginLeft = parseFloat(style.marginLeft),
                marginRight = parseFloat(style.marginRight),
                marginTop = parseFloat(style.marginTop),
                marginBottom = parseFloat(style.marginBottom);

            coordinates.push({
                fromX: boundingClientRect.left - marginLeft + windowScrollX,
                toX: boundingClientRect.right + marginRight + windowScrollX,
                fromY: boundingClientRect.top - marginTop + windowScrollY,
                toY: boundingClientRect.bottom + marginBottom + windowScrollY
            });
        }

        that._tabCoordinates = coordinates;
    }

    /**
     * Stores tabs in an Array.
     */
    _getTabs() {
        const that = this;
        let tabs = that.shadowRoot ? that.shadowRoot.querySelectorAll('smart-tab-item') : that.getElementsByTagName('smart-tab-item');

        if (that.selectedIndex !== null) {
            if (tabs.length === 0) {
                that.selectedIndex = null;
            }
            else {
                that.selectedIndex = Math.max(0, Math.min(that.selectedIndex, tabs.length - 1));
            }
        }

        that._tabs = Array.from(tabs);
    }

    /**
     * Group container event handler.
     */
    _groupContainerHandler(currentElement, eventType) {
        const that = this,
            dropDown = currentElement.dropDown;

        if (eventType === 'down') {
            that._downTarget = currentElement;

            if (that.reorder && that._reorderItems.length > 1) {
                that._getTabCoordinates();
                that._reordering = true;
                that.setAttribute('dragged', '');
                that._draggedIndex = Array.from(that.$.tabStrip.children).indexOf(currentElement);
            }

            return;
        }

        if (!that._reordering && !that._swiping) {
            if (dropDown !== that._openDropDown && eventType === 'mouseover' && !currentElement.classList.contains('smart-tab-group-selected')) {
                currentElement.setAttribute('hover', '');
            }
            else if (eventType === 'mouseout') {
                currentElement.removeAttribute('hover');
            }
        }

        if (eventType !== 'up' || that._downTarget !== currentElement || that._reorderedIndex !== undefined || that._swiping) {
            return;
        }

        if (dropDown === that._openDropDown) {
            that._closeGroupDropDown();

            if (!currentElement.classList.contains('smart-tab-group-selected')) {
                currentElement.setAttribute('hover', '');
            }
        }
        else {
            that._openGroupDropDown(currentElement);
        }
    }

    /**
     * Handles changes to the "tabPosition" property.
     */
    _handlePosition(newPosition, oldPosition) {
        const that = this;

        if ([undefined, 'top', 'left', 'hidden'].indexOf(oldPosition) !== -1 && (newPosition === 'bottom' || newPosition === 'right')) {
            that.$.container.insertBefore(that.$.tabContentSection, that.$.tabsHeaderSection);
        }
        else if ((oldPosition === 'bottom' || oldPosition === 'right') && ['top', 'left', 'hidden'].indexOf(newPosition) !== -1) {
            that.$.container.insertBefore(that.$.tabsHeaderSection, that.$.tabContentSection);
        }

        if (newPosition === 'hidden') {
            that._orientationSettings = { coordinate: 'pageY', dimension: 'height', edge: 'top', from: 'fromY', size: 'offsetHeight', to: 'toY', scrollDirection: 'scrollTop', scrollSize: 'scrollHeight', startCoordinate: 'startY', wheelOffset: 35 };
            that.removeAttribute('horizontal');
            that.removeAttribute('vertical');
            return;
        }

        if (newPosition === 'top' || newPosition === 'bottom') {
            that._orientationSettings = { coordinate: 'pageX', dimension: 'width', edge: 'left', from: 'fromX', size: 'offsetWidth', to: 'toX', scrollDirection: 'scrollLeft', scrollSize: 'scrollWidth', startCoordinate: 'startX', wheelOffset: 70 };
            that.removeAttribute('vertical');
            that.setAttribute('horizontal', '');

            that.$arrowNear.removeClass('smart-arrow-up');
            that.$arrowNear.addClass('smart-arrow-left');
            that.$arrowFar.removeClass('smart-arrow-down');
            that.$arrowFar.addClass('smart-arrow-right');
        }
        else {
            that._orientationSettings = { coordinate: 'pageY', dimension: 'height', edge: 'top', from: 'fromY', size: 'offsetHeight', to: 'toY', scrollDirection: 'scrollTop', scrollSize: 'scrollHeight', startCoordinate: 'startY', wheelOffset: 35 };
            that.removeAttribute('horizontal');
            that.setAttribute('vertical', '');

            that.$arrowNear.removeClass('smart-arrow-left');
            that.$arrowNear.addClass('smart-arrow-up');
            that.$arrowFar.removeClass('smart-arrow-right');
            that.$arrowFar.addClass('smart-arrow-down');
        }

        that.$.dropDownButtonArrow.innerHTML = that._arrowCodes[that.tabPosition];
    }

    /**
     * Handles changes to the "scrollButtonsPosition" property.
     */
    _handleScrollButtonsPosition(newScrollButtonsPosition, oldScrollButtonsPosition) {
        const that = this,
            tabsHeaderItems = that.$.tabsHeaderItems;

        if (newScrollButtonsPosition === oldScrollButtonsPosition) {
            return;
        }

        if (newScrollButtonsPosition === 'both') {
            if (oldScrollButtonsPosition === 'near') {
                tabsHeaderItems.insertBefore(that.$.scrollButtonFar, that.$.dropDownButton);
            }
            else {
                tabsHeaderItems.insertBefore(that.$.scrollButtonNear, that.$.tabStrip);
            }
        }
        else if (newScrollButtonsPosition === 'near') {
            if (oldScrollButtonsPosition === 'far') {
                tabsHeaderItems.insertBefore(that.$.scrollButtonNear, that.$.tabStrip);
            }

            tabsHeaderItems.insertBefore(that.$.scrollButtonFar, that.$.tabStrip);
        }
        else {
            if (oldScrollButtonsPosition === 'near') {
                tabsHeaderItems.insertBefore(that.$.scrollButtonFar, that.$.dropDownButton);
            }

            tabsHeaderItems.insertBefore(that.$.scrollButtonNear, that.$.scrollButtonFar);
        }
    }

    /**
     * Hides the close button of a tab.
     */
    _hideCloseButton(tabLabelContainer) {
        tabLabelContainer.firstElementChild.children[0].$.removeClass('smart-close-button-enabled');
        tabLabelContainer.firstElementChild.children[1].$.addClass('smart-hidden');
    }

    /**
     * smart-tab-item indexChange event handler.
     */
    _indexChangeHandler(event) {
        const that = this,
            oldIndex = event.detail.oldIndex,
            validNewIndex = Math.max(0, Math.min(event.detail.newIndex, that._tabs.length - 1));

        if (oldIndex !== validNewIndex) {
            if (that._groups.length === 0) {
                that._reorderTabs(oldIndex, validNewIndex);
            }
            else {
                const tabItem = event.detail.tabItem;

                tabItem._setIndex(oldIndex);
                that.remove(oldIndex);
                that.insert(validNewIndex, { node: tabItem });

                if (that.selectedIndex === oldIndex) {
                    that._select(validNewIndex, false);
                }
            }

            that._reorderedIndex = undefined;
        }
    }

    /**
     * Inserts the "add new" tab.
     */
    _insertAddNewTab() {
        const that = this,
            tabLabelContainer = that._addTabLabelContainer(undefined, true).tabLabelContainer;

        tabLabelContainer.$.addClass('smart-add-new-tab');

        that.$.tabStrip.appendChild(tabLabelContainer);

        that._addNewTab = tabLabelContainer;
    }

    /**
     * Inserts a tab into an existing group.
     */
    _insertIntoExistingGroup(details) {
        const that = this,
            smartTabItemsGroup = details.smartTabItemsGroup,
            tab = details.tab,
            tabLabelContainer = details.tabLabelContainer,
            group = details.group,
            groupLabel = that._groupLabels[that._groups.indexOf(group)],
            groupDropDown = groupLabel.dropDown;
        let index = details.index;

        index = Math.max(0, Math.min(index, smartTabItemsGroup.childElementCount));

        groupDropDown.insertBefore(tabLabelContainer, groupDropDown.children[index]);

        const sibling = smartTabItemsGroup.children[index];
        let overallIndex;

        if (sibling) {
            overallIndex = sibling.index;
        }
        else {
            overallIndex = smartTabItemsGroup.children[index - 1].index + 1;
        }

        smartTabItemsGroup.insertBefore(tab, sibling);

        that._tabLabelContainers.splice(overallIndex, 0, tabLabelContainer);
        that.$.dropDownButtonDropDown.insertBefore(details.dropDownLabelContainer, that.$.dropDownButtonDropDown.children[overallIndex] || null);
        that._tabs.splice(overallIndex, 0, tab);

        index = overallIndex;

        tab.group = group;

        that._updateIndexes(index);
    }

    /**
     * Inserts a tab into a new group.
     */
    _insertIntoNewGroup(details) {
        const that = this,
            tab = details.tab,
            tabLabelContainer = details.tabLabelContainer,
            group = details.group,
            groupContainers = that._addGroupContainer(group),
            groupLabel = groupContainers.label,
            groupDropDown = groupContainers.dropDown;

        groupDropDown.appendChild(tabLabelContainer);

        that._groups.push(group);

        let index = Math.max(0, Math.min(details.index, that.$.tabStrip.childElementCount)),
            tabStripIndex = index;

        if (that._addNewTab && tabStripIndex === that.$.tabStrip.childElementCount) {
            tabStripIndex--;
        }

        that.$.tabStrip.insertBefore(groupLabel, that.$.tabStrip.children[tabStripIndex] || null);

        that._groupLabels.push(groupLabel);

        const newSmartTabItemsGroup = document.createElement('smart-tab-items-group');

        newSmartTabItemsGroup.appendChild(tab);
        that.$.tabContentSection.insertBefore(newSmartTabItemsGroup, that.$.tabContentSection.children[index]);
        newSmartTabItemsGroup.label = group;

        const previousSibling = newSmartTabItemsGroup.previousElementSibling;
        let overallIndex = 0;

        if (previousSibling) {
            if (previousSibling instanceof Smart.TabItem) {
                overallIndex = previousSibling.index + 1;
            }
            else if (previousSibling) {
                overallIndex = previousSibling.lastElementChild.index + 1;
            }
        }

        that._tabLabelContainers.splice(overallIndex, 0, tabLabelContainer);
        that.$.dropDownButtonDropDown.insertBefore(details.dropDownLabelContainer, that.$.dropDownButtonDropDown.children[overallIndex] || null);
        that._tabs.splice(overallIndex, 0, tab);

        index = overallIndex;

        tab.group = group;

        that._updateIndexes(index);
    }

    /**
     * Inserts a stand-alone tab when there are groups.
     */
    _insertNearAGroup(details) {
        const that = this,
            tab = details.tab,
            tabLabelContainer = details.tabLabelContainer;
        let index = details.index;

        index = Math.max(0, Math.min(index, that._tabs.length));

        const previous = that._tabs[index - 1],
            next = that._tabs[index],
            groupOfNext = next ? next.group : undefined;

        if (previous && previous.group !== null && next && groupOfNext !== null) {
            // insert into group
            next.tabLabelContainer.parentElement.insertBefore(tabLabelContainer, next.tabLabelContainer);
            next.parentElement.insertBefore(tab, next);

            tab.group = groupOfNext;
        }
        else {
            if (next) {
                if (groupOfNext !== null) {
                    that.$.tabStrip.insertBefore(tabLabelContainer, that._groupLabels[that._groups.indexOf(groupOfNext)]);
                    that.$.tabContentSection.insertBefore(tab, that.$.tabContentSection.querySelector('smart-tab-items-group[label="' + groupOfNext + '"]'));
                }
                else {
                    that.$.tabStrip.insertBefore(tabLabelContainer, next.tabLabelContainer);
                    that.$.tabContentSection.insertBefore(tab, next);
                }
            }
            else {
                that.$.tabStrip.insertBefore(tabLabelContainer, that._addNewTab || null);
                that.$.tabContentSection.appendChild(tab);
            }
        }

        that._tabLabelContainers.splice(index, 0, tabLabelContainer);
        that.$.dropDownButtonDropDown.insertBefore(details.dropDownLabelContainer, that.$.dropDownButtonDropDown.children[index] || null);
        that._tabs.splice(index, 0, tab);

        that._updateIndexes(index);
    }

    /**
     * Inserts a tab when there are no groups.
     */
    _insertNoGrouping(tabDetails) {
        const that = this,
            index = Math.max(0, Math.min(tabDetails.index, that._tabs.length)),
            tab = tabDetails.tab,
            tabLabelContainer = tabDetails.tabLabelContainer;

        that.$.tabStrip.insertBefore(tabLabelContainer, that._tabLabelContainers[index] || that._addNewTab || null);
        that.$.tabContentSection.insertBefore(tab, that._tabs[index] || null);
        that._tabLabelContainers.splice(index, 0, tabLabelContainer);
        that.$.dropDownButtonDropDown.insertBefore(tabDetails.dropDownLabelContainer, that.$.dropDownButtonDropDown.children[index] || null);
        that._tabs.splice(index, 0, tab);

        that._updateIndexes(index);
    }

    /**
     * keydown event handler.
     */
    _keydownHandler(event) {
        const that = this,
            key = event.key,
            activeElement = that.isInShadowDOM ? that.getRootNode().activeElement : document.activeElement;

        if (activeElement !== that || ['ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp', 'End', 'Home', 'Enter', ' ', 'Escape'].indexOf(key) === -1 ||
            that.disabled || that.readonly || that.selectionMode === 'none' || (!that.allowToggle && that.selectedIndex === null) || that._reordering || that._swiping) {
            return;
        }

        event.preventDefault();

        const lastTabIndex = that._tabs.length - 1;
        let indexToSelect, noSelect, step = 0;

        switch (key) {
            case 'ArrowLeft':
            case 'ArrowUp':
                if (that.collapsible && event.ctrlKey) {
                    if (key === 'ArrowLeft') {
                        if (that.tabPosition === 'right') {
                            that.expand();
                        }
                        else if (that.tabPosition === 'left') {
                            that.collapse();
                        }
                    }
                    else if (key === 'ArrowUp') {
                        if (that.tabPosition === 'bottom') {
                            that.expand();
                        }
                        else if (that.tabPosition === 'top') {
                            that.collapse();
                        }
                    }

                    return;
                }

                step = -1;
                // selects previous tab
                if (that.selectedIndex === 0) {
                    noSelect = true;
                    break;
                }

                indexToSelect = that.selectedIndex + step;
                break;
            case 'ArrowRight':
            case 'ArrowDown':
                if (that.collapsible && event.ctrlKey) {
                    if (key === 'ArrowRight') {
                        if (that.tabPosition === 'right') {
                            that.collapse();
                        }
                        else if (that.tabPosition === 'left') {
                            that.expand();
                        }
                    }
                    else if (key === 'ArrowDown') {
                        if (that.tabPosition === 'bottom') {
                            that.collapse();
                        }
                        else if (that.tabPosition === 'top') {
                            that.expand();
                        }
                    }

                    return;
                }

                step = 1;
                // selects next tab
                if (that.selectedIndex === lastTabIndex) {
                    noSelect = true;
                    break;
                }

                indexToSelect = that.selectedIndex + step;
                break;
            case 'End':
                if (that.selectedIndex === lastTabIndex) {
                    noSelect = true;
                    break;
                }

                indexToSelect = lastTabIndex;
                break;
            case 'Home':
                if (that.selectedIndex === 0) {
                    noSelect = true;
                    break;
                }

                indexToSelect = 0;
                break;
            case 'Enter':
            case ' ':
                if (!that.allowToggle) {
                    return;
                }

                if (that._focusedItem) {
                    that.select(that._focusedItem.index);

                    const closestGroupContainer = that._focusedItem.tabLabelContainer.closest('.smart-tab-group-drop-down');

                    if (closestGroupContainer) {
                        that._openGroupDropDown(closestGroupContainer.groupContainer);
                    }
                }

                return;
            case 'Escape':
                if (that._openDropDown) {
                    that._closeGroupDropDown();
                }

                return;
        }

        if (that.allowToggle && that._tabs.length > 0) {
            if (that._focusedItem) {
                that._focusedItem.tabLabelContainer.removeAttribute('focus');
            }
            else {
                that._focusedItem = that._focusedItem || that._tabs[that.selectedIndex] || that._tabs[0];
            }

            that._focusedItem = that._tabs[Math.min(Math.max(0, that._focusedItem.index + step), lastTabIndex)];
            that._focusedItem.tabLabelContainer.setAttribute('focus', '');
            that.ensureVisible(that._focusedItem.index);

            const closestGroupContainer = that._focusedItem.tabLabelContainer.closest('.smart-tab-group-drop-down');

            if (closestGroupContainer && closestGroupContainer.groupContainer) {
                if (that._openDropDown && that._openDropDown !== closestGroupContainer.dropDown) {
                    that._closeGroupDropDown();
                }

                that._openGroupDropDown(closestGroupContainer.groupContainer);
            }
            else if (that._openDropDown) {
                that._closeGroupDropDown();
            }

            return;
        }

        if (!noSelect) {
            that.select(indexToSelect);
        }
    }

    /**
     * Tab label container/label text container event handler.
     */
    _labelContainerHandler(currentElement, event, eventType) {
        const that = this,
            click = eventType === 'up' && that._downTarget === currentElement;

        if (eventType === 'down') {
            that._downTarget = currentElement;

            if (that.selectionMode === 'click' && currentElement !== that._addNewTab) {
                if (Smart.Utilities.Core.isMobile && currentElement.tab.group === null) {
                    const scrollDirection = that.$.tabStrip[that._orientationSettings.scrollDirection];

                    setTimeout(function () {
                        if (scrollDirection === that.$.tabStrip[that._orientationSettings.scrollDirection]) {
                            const rippleInProgress = that._ripple(event, currentElement);

                            if (rippleInProgress && that._openDropDown && that._openDropDown.contains(currentElement)) {
                                that._openDropDown.rippleInProgress = true;
                            }
                        }
                    }, 100);
                }
                else {
                    const rippleInProgress = that._ripple(event, currentElement);

                    if (rippleInProgress && that._openDropDown && that._openDropDown.contains(currentElement)) {
                        that._openDropDown.rippleInProgress = true;
                    }
                }
            }
        }

        if (currentElement === that._addNewTab) {
            that._addNewTabHandler(currentElement, eventType, click);
            return;
        }

        const index = currentElement.tab.index,
            currentElementStatic = !(that._reordering && that._reorderedIndex !== undefined);

        if (click && index === that.selectedIndex) {
            that._closeGroupDropDown();

            if (currentElementStatic && currentElement.tab.group === null) {
                that._toggleCollapsedState();
            }
        }

        if (!that._swiping && (currentElementStatic && that.selectionMode === 'click' && click ||
            !that._reordering && (that.selectionMode === eventType || that.selectionMode === 'mouseenter' && eventType === 'mouseover'))) {
            that._select(index, true);
        }

        if (!that._reordering && !that._swiping && (that.selectionMode === 'click' || that.selectionMode === 'dblclick')) {
            if (eventType === 'mouseover' && !currentElement.hasAttribute('selected')) {
                currentElement.setAttribute('hover', '');
            }
            else if (eventType === 'mouseout') {
                currentElement.removeAttribute('hover');
            }
        }

        if (that.reorder && eventType === 'down' && currentElement.tab.group === null && that._reorderItems.length > 1) {
            that._getTabCoordinates();
            that._reordering = true;
            that.setAttribute('dragged', '');

            if (currentElement.hasAttribute('hover')) {
                that._draggedHoveredTab = currentElement;
            }

            if (that._groups.length === 0) {
                that._draggedIndex = currentElement.tab.index;
            }
            else {
                that._draggedIndex = Array.from(that.$.tabStrip.children).indexOf(currentElement);
            }
        }
    }

    /**
     * smart-tab-item labelSizeChange event handler.
     */
    _labelSizeChangeHandler(event) {
        const that = this,
            newSize = event.detail.size;
        let correspondingLabelContainer;

        if (that.tabLayout === 'shrink') {
            return;
        }

        if (event.target instanceof Smart.TabItem) {
            correspondingLabelContainer = event.target.tabLabelContainer;
        }
        else {
            correspondingLabelContainer = that._groupLabels[that._groups.indexOf(event.target.label)];
        }

        if (newSize !== null) {
            correspondingLabelContainer.style[that._orientationSettings.dimension] = parseInt(newSize, 10) + 'px';
        }
        else {
            correspondingLabelContainer.style.removeProperty(that._orientationSettings.dimension);
        }

        that._applyTabOverflow();
    }

    /**
    * Opens the open group dropdown.
    */
    _openGroupDropDown(currentElement) {
        const that = this;

        if (!currentElement) {
            return;
        }

        if (that._openDropDown) {
            that._openDropDown.$.addClass('smart-hidden');
        }

        currentElement.dropDown.$.removeClass('smart-hidden');
        that._positionGroupDropDown(currentElement);
        that._openDropDown = currentElement.dropDown;

        currentElement.removeAttribute('hover');
    }

    /**
     * Orders tabs initially.
     */
    _orderTabs() {
        const that = this,
            groups = that.getElementsByTagName('smart-tab-items-group'),
            indexes = [], list = [];
        let unset = true,
            ambiguous = false;

        if (groups.length === 0) {
            for (let i = 0; i < that._tabs.length; i++) {
                const tab = that._tabs[i],
                    index = tab.index;

                if (unset && index !== null) {
                    unset = false;
                }

                if (indexes.indexOf(index || 0) !== -1) {
                    ambiguous = true;

                    if (index !== null) {
                        break;
                    }
                }

                indexes.push(index || 0);
                list.push({ tab: tab, index: index });
            }
        }

        if (!ambiguous) {
            const sortedIndexes = indexes.slice(0).sort(function (a, b) {
                return a - b;
            });

            if (JSON.stringify(indexes) === JSON.stringify(sortedIndexes)) {
                unset = true;
            }
        }

        if (!unset && !ambiguous) {
            list.sort(function (a, b) {
                return a.index - b.index;
            });

            for (let i = 0; i < list.length; i++) {
                const tab = list[i].tab;

                tab._setIndex(i);
                that.$.tabContentSection.removeChild(tab);
            }

            for (let i = 0; i < list.length; i++) {
                const tab = list[i].tab;

                that.$.tabContentSection.appendChild(tab);
                that._tabs[i] = tab;
            }
        }
        else {
            if (!unset) {
                that.warn(that.localize('ambiguousIndexes'));
            }

            for (let i = 0; i < that._tabs.length; i++) {
                that._tabs[i]._setIndex(i);
            }
        }
    }

    /**
     * Populates the tab strip.
     */
    _populateTabStrip() {
        const that = this,
            documentFragment = document.createDocumentFragment(),
            tabLabelContainers = [],
            groups = [],
            groupLabels = [];

        let selectedTabLabelContainer = null;

        for (let i = 0; i < that._tabs.length; i++) {
            const tab = that._tabs[i],
                tabParentElement = tab.parentElement,
                group = tabParentElement instanceof Smart.TabItemsGroup ? tabParentElement.label : null;

            tab.group = group;

            const labelContainers = that._addTabLabelContainer(tab),
                tabLabelContainer = labelContainers.tabLabelContainer,
                dropDownLabelContainer = labelContainers.dropDownLabelContainer;

            if (that.selectedIndex === i) {
                tabLabelContainer.$.addClass('smart-tab-selected');
                tabLabelContainer.setAttribute('selected', '');
                selectedTabLabelContainer = tabLabelContainer;
            }

            tab.tabLabelContainer = tabLabelContainer;
            tabLabelContainer.tab = tab;

            tabLabelContainers.push(tabLabelContainer);

            if (group === null) {
                documentFragment.appendChild(tabLabelContainer);
            }
            else {
                that._addGroupElements({ documentFragment: documentFragment, groups: groups, groupLabels: groupLabels, i: i, group: group, tabLabelContainer: tabLabelContainer, smartTabItemsGroup: tabParentElement });
            }

            that.$.dropDownButtonDropDown.appendChild(dropDownLabelContainer);
        }

        that.$.tabStrip.appendChild(documentFragment);

        that._tabLabelContainers = tabLabelContainers;
        that._groups = groups;
        that._groupLabels = groupLabels;

        that._positionTabSelectionBar(selectedTabLabelContainer, true);
    }

    _positionTabSelectionBar(selectedTabLabelContainer, noAnimation) {
        const that = this;

        if (!selectedTabLabelContainer) {
            return;
        }

        const tabPosition = that.tabPosition;
        let left, top, width, height;

        if (noAnimation) {
            that.$.tabSelectionBar.style.transition = 'none';
        }

        if (selectedTabLabelContainer.tab.group) {
            selectedTabLabelContainer = that._groupLabels[that._groups.indexOf(selectedTabLabelContainer.tab.group)];
        }

        if (tabPosition === 'top' || tabPosition === 'bottom') {
            if (that.tabLayout === 'wrap') {
                top = selectedTabLabelContainer.offsetTop;

                if (tabPosition === 'top') {
                    top += selectedTabLabelContainer.offsetHeight - that.$.tabSelectionBar.offsetHeight;
                }

                top += 'px';
            }
            else {
                top = null;
            }

            height = null;
            left = -that.$.tabStrip.scrollLeft + selectedTabLabelContainer.offsetLeft + 'px';
            width = selectedTabLabelContainer.offsetWidth + 'px';
        }
        else if (tabPosition === 'left' || tabPosition === 'right') {
            if (that.tabLayout === 'wrap') {
                left = selectedTabLabelContainer.offsetLeft;

                if (tabPosition === 'left') {
                    left += selectedTabLabelContainer.offsetWidth - that.$.tabSelectionBar.offsetWidth;
                }

                left += 'px';
            }
            else {
                left = null;
            }

            width = null;
            top = -that.$.tabStrip.scrollTop + selectedTabLabelContainer.offsetTop + 'px';
            height = selectedTabLabelContainer.offsetHeight + 'px';
        }

        function updateStyle() {
            that.$.tabSelectionBar.style.top = top;
            that.$.tabSelectionBar.style.height = height;
            that.$.tabSelectionBar.style.left = left;
            that.$.tabSelectionBar.style.width = width;
        }

        if (Smart.Utilities.Core.isMobile && that.hasAnimation && !noAnimation) {
            requestAnimationFrame(function () {
                requestAnimationFrame(updateStyle);
            });
        }
        else {
            updateStyle();
        }

        if (noAnimation && !that._tabPositionChanging) {
            requestAnimationFrame(() => that.$.tabSelectionBar.style.transition = null);
        }
    }

    /**
     * Positions a group dropdown.
     */
    _positionGroupDropDown(groupLabel) {
        const that = this,
            position = that.tabPosition,
            dropDown = groupLabel.dropDown,
            headerSectionStyle = window.getComputedStyle(that.$.tabsHeaderSection),
            headerSectionPaddingLeft = parseFloat(headerSectionStyle.paddingLeft),
            headerSectionPaddingTop = parseFloat(headerSectionStyle.paddingTop);

        if (position === 'top' || position === 'bottom') {
            const material = false; //that.hasAnimation;

            dropDown.style.left = groupLabel.offsetLeft - that.$.tabStrip.scrollLeft + headerSectionPaddingLeft + 'px';

            if (position === 'top') {
                if (!material) {
                    dropDown.style.top = groupLabel.offsetTop + groupLabel.offsetHeight + headerSectionPaddingTop + 'px';
                }
            }
            else {
                let top = groupLabel.getBoundingClientRect().top - that.$.container.getBoundingClientRect().top + headerSectionPaddingTop;

                if (material) {
                    top += that.$.tabStrip.offsetHeight;
                }

                dropDown.style.top = top + 'px';
            }
        }
        else {
            dropDown.style.top = groupLabel.offsetTop - that.$.tabStrip.scrollTop + headerSectionPaddingTop + 'px';

            if (position === 'left') {
                dropDown.style.left = groupLabel.offsetLeft + groupLabel.offsetWidth + headerSectionPaddingLeft + 'px';
            }
            else {
                dropDown.style.left = (groupLabel.getBoundingClientRect().left - that.$.container.getBoundingClientRect().left + headerSectionPaddingLeft) + 'px';
            }
        }
    }

    /**
     * Processes "dataSource" object.
     */
    _processDataSource() {
        const that = this,
            dataSource = that.dataSource;

        function processItem(item, parent) {
            let element;

            if (Array.isArray(item.items) && item.items.length > 0) {
                element = document.createElement('smart-tab-items-group');

                for (let i = 0; i < item.items.length; i++) {
                    if (item.items[i].items) {
                        continue;
                    }

                    processItem(item.items[i], element);
                }
            }
            else {
                element = document.createElement('smart-tab-item');

                if (item.closeButtonHidden === true) {
                    element.closeButtonHidden = true;
                }

                if (item.content !== undefined) {
                    element.innerHTML = item.content;
                }

                if (item.index !== undefined) {
                    element.index = item.index;
                }

                if (item.selected === true) {
                    element.selected = item.selected;
                }
            }

            if (item.label !== undefined) {
                element.label = item.label;
            }

            if (item.labelSize !== undefined) {
                element.labelSize = item.labelSize;
            }

            parent.appendChild(element);
        }

        that.$.tabContentSection.innerHTML = '';

        if (dataSource === null) {
            return;
        }

        for (let i = 0; i < dataSource.length; i++) {
            const currentItem = dataSource[i];

            processItem(currentItem, that.$.tabContentSection);
        }
    }

    /**
     * Processes HTML structure.
     */
    _processHTML() {
        const that = this;

        that._getTabs();
        that._orderTabs();

        that._validateInitialSelection();
        that._populateTabStrip();

        if (that.addNewTab) {
            that._insertAddNewTab();
        }

        that._getReorderItems();

        that._applyTabOverflow();

        that.ensureVisible(that.selectedIndex);
    }

    /**
     * Removes set inline style.
     */
    _removeInlineStyle() {
        const that = this,
            tabStrip = that.$.tabStrip;

        if (that._inlineStyleTabStripChildren) {
            const tabStripChildren = tabStrip.children;

            for (let i = 0; i < tabStripChildren.length; i++) {
                tabStripChildren[i].removeAttribute('style');
                tabStripChildren[i].firstElementChild.firstElementChild.classList.remove('smart-tab-label-text-container-full-height');
            }

            delete that._inlineStyleTabStripChildren;
        }

        if (that._inlineStyleTabStrip) {
            tabStrip.removeAttribute('style');
            delete that._inlineStyleTabStrip;
        }

        tabStrip.$.removeClass('shrink-tabs');
        tabStrip.$.removeClass('shrink-tabs-vertical');
    }

    /**
     * Positions a tab before or after another tab.
     */
    _reorderTabs(firstTabIndex, secondTabIndex) {
        function reorderList(list, x, y) {
            const temp = list[x];

            list.splice(x, 1);
            list.splice(y, 0, temp);
        }

        const that = this,
            oldScrollValue = that.$.tabStrip[that._orientationSettings.scrollDirection];

        if (that._groups.length === 0) {
            const tabs = that._tabs,
                tabLabelContainers = that._tabLabelContainers,
                referenceNodeIndex = firstTabIndex > secondTabIndex ? secondTabIndex : secondTabIndex + 1;

            if (that.selectedIndex === firstTabIndex) {
                that.selectedIndex = secondTabIndex;
            }
            else if (that.selectedIndex <= secondTabIndex && that.selectedIndex > firstTabIndex) {
                that.selectedIndex--;
            }
            else if (that.selectedIndex >= secondTabIndex && that.selectedIndex < firstTabIndex) {
                that.selectedIndex++;
            }

            let tabStripInsertBefore;

            if (tabLabelContainers[referenceNodeIndex]) {
                tabStripInsertBefore = tabLabelContainers[referenceNodeIndex];
            }
            else if (that.addNewTab) {
                tabStripInsertBefore = that._addNewTab;
            }
            else {
                tabStripInsertBefore = null;
            }

            that.$.tabStrip.insertBefore(tabLabelContainers[firstTabIndex], tabStripInsertBefore);
            that.$.dropDownButtonDropDown.insertBefore(that.$.dropDownButtonDropDown.children[firstTabIndex], that.$.dropDownButtonDropDown.children[referenceNodeIndex] || null);
            that.$.tabContentSection.insertBefore(tabs[firstTabIndex], tabs[referenceNodeIndex] || null);

            reorderList(tabs, firstTabIndex, secondTabIndex);
            reorderList(tabLabelContainers, firstTabIndex, secondTabIndex);

            that._updateTabIndexes();
        }
        else {
            that._reorderTabsGrouping(firstTabIndex, secondTabIndex);
        }

        that.$.tabStrip[that._orientationSettings.scrollDirection] = oldScrollValue;
        that.$.fireEvent('reorder', { 'newIndex': secondTabIndex, 'originalIndex': firstTabIndex });

        that._reorderedIndex = secondTabIndex;

        that._positionTabSelectionBar(that._tabLabelContainers[that.selectedIndex], true);
    }

    /**
     * Positions a tab before or after another tab when there are groups.
     */
    _reorderTabsGrouping(firstTabIndex, secondTabIndex) {
        const that = this,
            tabStripChildren = that.$.tabStrip.children,
            tabContentSectionChildren = that.$.tabContentSection.children,
            referenceNodeIndex = firstTabIndex > secondTabIndex ? secondTabIndex : secondTabIndex + 1,
            selectedTab = that._tabs[that.selectedIndex];

        that.$.tabStrip.insertBefore(tabStripChildren[firstTabIndex], tabStripChildren[referenceNodeIndex] || null);
        that.$.tabContentSection.insertBefore(tabContentSectionChildren[firstTabIndex], tabContentSectionChildren[referenceNodeIndex] || null);

        that._groupLabels = Array.from(that.$.tabStrip.getElementsByClassName('smart-tab-group-container'));
        that._groups = [];

        for (let i = 0; i < that._groupLabels.length; i++) {
            that._groups.push(that._groupLabels[i].group);
        }

        that._tabs = Array.from(that.$.tabContentSection.getElementsByTagName('smart-tab-item'));

        const dropDownContentFragment = document.createDocumentFragment();
        let tabLabelContainers = [];

        for (let i = 0; i < that._tabs.length; i++) {
            dropDownContentFragment.appendChild(that.$.dropDownButtonDropDown.children[that._tabs[i].index].cloneNode(true));
        }

        that.$.dropDownButtonDropDown.innerHTML = '';
        that.$.dropDownButtonDropDown.appendChild(dropDownContentFragment);

        for (let i = 0; i < that.$.tabStrip.childElementCount; i++) {
            const currentChild = that.$.tabStrip.children[i];

            if (currentChild.$.hasClass('smart-tab-label-container') && currentChild !== that._addNewTab) {
                tabLabelContainers.push(currentChild);
            }
            else if (currentChild.$.hasClass('smart-tab-group-container')) {
                tabLabelContainers = tabLabelContainers.concat(Array.from(currentChild.dropDown.children));
            }
        }

        that._tabLabelContainers = tabLabelContainers;

        that._updateTabIndexes();

        if (selectedTab) {
            that.selectedIndex = selectedTab.index;
        }
    }

    /**
     * Resizes a tab strip element.
     */
    _resize(event) {
        const that = this;

        if (!that._resizing) {
            return;
        }

        const orientationSettings = that._orientationSettings,
            sizeChange = event[orientationSettings.coordinate] - that._resizeFrom,
            customElement = that._getCorrespondingCustomElement(that._tabToResize);
        let oldSize;

        if (customElement.labelSize === null) {
            oldSize = that._tabToResize[orientationSettings.size];
        }
        else {
            oldSize = customElement.labelSize;
        }

        const newSize = Math.max(10, oldSize + sizeChange);

        if (newSize !== oldSize) {
            customElement._preventPropertyChangedHandler = true;
            customElement.labelSize = newSize;
            that._tabToResize.style[orientationSettings.dimension] = parseInt(newSize, 10) + 'px';
        }

        that.$resizeToken.addClass('smart-hidden');
        that._applyTabOverflow();
        that._resizing = false;
        that.removeAttribute('resizing');
    }

    /**
     * Triggers ripple effect.
     */
    _ripple(event, target) {
        const that = this;

        if (that.hasRippleAnimation) {
            const rippleAgent = document.createElement('div');

            rippleAgent.className = 'ripple-agent';
            target.firstElementChild.appendChild(rippleAgent);

            setTimeout(function () {
                target.firstElementChild.removeChild(rippleAgent);
            }, 1000);

            Smart.Utilities.Animation.Ripple.animate(rippleAgent, event.pageX, event.pageY);

            return true;
        }
    }

    /**
     * Scroll button click handler.
     */
    _scrollButtonClickHandler(event) {
        const that = this,
            tabStrip = that.$.tabStrip;
        let modifier = event.target.closest('smart-repeat-button') === that.$.scrollButtonNear ? -1 : 1;

        if (that.scrollMode === 'paging') {
            const orientationSettings = that._orientationSettings,
                swipeInfo = {};

            that._dragStartDetails = { startX: 0, startY: 0, pageX: 0, pageY: 0, startTime: Date.now(), target: event.target };
            that._wheelInProgress = true;
            swipeInfo[orientationSettings.coordinate] = -modifier * (tabStrip[orientationSettings.size] / 1.1428571428571428);
            that._endSwiping(swipeInfo, that._dragStartDetails.startTime + 175);
            return;
        }

        if (that.hasAttribute('horizontal')) {
            tabStrip.scrollLeft += 10 * modifier;
        }
        else {
            tabStrip.scrollTop += 10 * modifier;
        }

        that._updateScrollButtonVisibility(true);
    }

    /**
     * Selects a tab.
     */
    _select(index, fireEvent, oldIndex) {
        const that = this,
            hasAnimation = that.hasAnimation;

        if (oldIndex === undefined) {
            oldIndex = that.selectedIndex;
        }

        if (index === oldIndex && ((!that.allowToggle) || (that.allowToggle && that.selectionMode === 'mouseenter'))) {
            return;
        }

        const tab = that._tabs[index];

        if (that._focusedItem) {
            that._focusedItem.tabLabelContainer.removeAttribute('focus');
        }

        if (oldIndex !== null) {
            const oldTab = that._tabs[oldIndex];

            if (hasAnimation) {
                that._animateSelection(tab, oldTab, index > oldIndex);
            }
            else {
                oldTab.$.addClass('smart-visibility-hidden');
            }

            oldTab.selected = false;
            that._tabLabelContainers[oldIndex].$.removeClass('smart-tab-selected');
            that._tabLabelContainers[oldIndex].removeAttribute('selected');

            if (that.closeButtons && that.closeButtonMode === 'selected') {
                that._disableCloseButton(oldIndex);
            }
        }

        if (!that.allowToggle || (index !== null && (arguments[2] !== undefined ? oldIndex : that.selectedIndex) !== index)) {
            tab.selected = true;
            that.$.tabContentSection.removeAttribute('show-placeholder');

            if (oldIndex === null || !hasAnimation) {
                tab.$.removeClass('smart-visibility-hidden');
            }

            that.selectedIndex = index;
            that._focusedItem = that._tabs[index];
            that._focusedItem.tabLabelContainer.$.addClass('smart-tab-selected');
            that._focusedItem.tabLabelContainer.setAttribute('selected', '');

            that._positionTabSelectionBar(that._focusedItem.tabLabelContainer, oldIndex === null);
        }
        else {
            that.selectedIndex = null;
            that.$.tabContentSection.setAttribute('show-placeholder', '');

            if (that.allowToggle) {
                that._focusedItem = that._tabs[index === null ? oldIndex : index];

                if (that._focusedItem) {
                    that._focusedItem.tabLabelContainer.setAttribute('focus', '');
                }
            }
        }

        if (index !== null) {
            that._tabLabelContainers[index].removeAttribute('hover');

            if (that.closeButtons && that.closeButtonMode === 'selected') {
                that._enableCloseButton(index);
            }

        }

        if (fireEvent) {

            //Upate hidden input
            that.$.hiddenInput.value = that.selectedIndex;

            that.$.fireEvent('change', { 'index': that.selectedIndex, 'oldIndex': oldIndex });
        }

        that._closeGroupDropDown();

        if (tab && tab.group !== null) {
            if (that._selectedGroup) {
                that._selectedGroup.$.removeClass('smart-tab-group-selected');
            }

            if (that.selectedIndex !== null) {
                that._selectedGroup = that._groupLabels[that._groups.indexOf(tab.group)];
                that._selectedGroup.$.addClass('smart-tab-group-selected');
            }
        }
        else if (that._selectedGroup) {
            that._selectedGroup.$.removeClass('smart-tab-group-selected');
            delete that._selectedGroup;
        }
    }

    /**
     * Document select start handler.
     */
    _selectStartHandler(event) {
        const that = this;

        if (that._reordering || that._resizing) {
            event.preventDefault();
        }
    }

    /**
     * Sets the label of a tab.
     */
    _setLabel(label, labelTextContainer, dropDownLabelContainer) {
        const potentialHTMLTemplate = label ? document.getElementById(label) : null;

        if (potentialHTMLTemplate !== null && potentialHTMLTemplate.tagName.toLowerCase() === 'template') {
            // label is the id of an HTML template
            const templateContent = document.importNode(potentialHTMLTemplate.content, true);

            labelTextContainer.appendChild(templateContent);

            if (dropDownLabelContainer) {
                const templateContent = document.importNode(potentialHTMLTemplate.content, true);

                dropDownLabelContainer.appendChild(templateContent);
            }
        }
        else {
            // label is string
            if (label === '') {
                label = '&nbsp;';
            }

            labelTextContainer.innerHTML = label;

            if (dropDownLabelContainer) {
                dropDownLabelContainer.innerHTML = label;
            }
        }
    }

    /**
     * Shows the close button of a tab.
     */
    _showCloseButton(tabLabelContainer) {
        if (tabLabelContainer.closeButtonEnabled) {
            tabLabelContainer.firstElementChild.children[0].$.addClass('smart-close-button-enabled');
            tabLabelContainer.firstElementChild.children[1].$.removeClass('smart-hidden');
        }
    }

    /**
     * tabContentSection transitionend handler.
     */
    _tabContentSectionTransitionendHandler(event) {
        const that = this,
            target = event.target;

        if (!(target instanceof Smart.TabItem)) {
            return;
        }

        if (target === that._animatedOldTab) {
            target.$.addClass('smart-hidden');
            target.$.removeClass('animate');
            target.$.removeClass(that._animatedOldTab.classToRemove);
            target.$.removeClass('smart-hidden');
            delete that._animatedOldTab;
        }
        else if (target === that._animatedTab) {
            target.$.removeClass('animate');
            delete that._animatedTab;
        }

        target.classList.remove('left');
        target.classList.remove('right');
        target.classList.remove('top');
        target.classList.remove('bottom');
    }

    /**
     * tabsHeaderItems wheel handler.
     */
    _tabsHeaderItemsWheelHandler(event) {
        const that = this,
            orientationSettings = that._orientationSettings;

        if (!that.enableMouseWheelAction || that._wheelInProgress || that.disabled ||
            that.$.tabStrip[orientationSettings.size] === that.$.tabStrip[orientationSettings.scrollSize]) {
            return;
        }

        event.preventDefault();

        that._dragStartDetails = { startX: event.pageX, startY: event.pageY, pageX: event.pageX, pageY: event.pageY, startTime: Date.now(), target: event.target };
        that._wheelInProgress = true;

        const swipeInfo = {};

        swipeInfo[orientationSettings.coordinate] = event[orientationSettings.coordinate] + (event.deltaY > 0 ? -1 : 1) * orientationSettings.wheelOffset;
        that._endSwiping(swipeInfo, that._dragStartDetails.startTime + 100);
    }

    /**
     * Tab strip event handler.
     */
    _tabStripHandler(target, event) {
        const that = this,
            eventType = event.type;

        if (eventType === 'down' && that._tabToResize !== undefined) {
            that._resizing = true;
            that._tabsHeaderSectionCoordinate = that.$.tabsHeaderSection.getBoundingClientRect()[that._orientationSettings.edge];
            return;
        }

        if (eventType === 'down' && Smart.Utilities.Core.isMobile) {
            that._dragStartDetails = {
                startX: event.pageX,
                startY: event.pageY,
                pageX: event.pageX,
                pageY: event.pageY,
                startTime: Date.now(),
                originalTime: Date.now(),
                target: event.originalEvent.target
            };
        }

        const scrollButton = target.closest('smart-repeat-button');

        if (eventType === 'up' && scrollButton) {
            that.focus();

            if (that.resize) {
                that._getTabCoordinates();
            }
            return;
        }

        if (target.classList.contains('smart-tab-close-button')) {
            // close button
            if (eventType === 'up') {
                if (target === that._downTarget) {
                    const indexToClose = target.parentElement.parentElement.tab.index,
                        closingEvent = that.$.fireEvent('closing', { 'index': indexToClose });

                    if (!closingEvent.defaultPrevented) {
                        that.remove(indexToClose);

                        that.$.fireEvent('close', { 'index': indexToClose });
                    }
                    return;
                }
            }
            else if (eventType === 'down') {
                that._downTarget = target;
                return;
            }
            else if (!that._reordering && !that._swiping) {
                if (eventType === 'mouseover') {
                    target.setAttribute('hover', '');
                }
                else if (eventType === 'mouseout') {
                    target.removeAttribute('hover');
                }
            }
        }

        const closestLabelContainer = target.closest('.smart-tab-label-container');

        if (closestLabelContainer !== null) {
            that._labelContainerHandler(closestLabelContainer, event, eventType);
            return;
        }

        const closestGroupContainer = target.closest('.smart-tab-group-container');

        if (closestGroupContainer !== null) {
            that._groupContainerHandler(closestGroupContainer, eventType);
        }
    }

    /**
     * Tab strip mouseleave handler.
     */
    _tabStripMouseleaveHandler() {
        const that = this;

        if (that.resize && !that._resizing && that.hasAttribute('resizing')) {
            that.removeAttribute('resizing');
        }
    }

    /**
     * Tab strip (mouse)move handler.
     */
    _tabStripMoveHandler(event) {
        const that = this;

        if (that._dragStartDetails && !that._dragStartDetails.checked) {
            if (Date.now() - that._dragStartDetails.originalTime < 500) {
                that._endReordering(undefined, undefined);
                that._dragStartDetails.checked = true;
            }
            else {
                delete that._dragStartDetails;
            }
        }

        if (that._dragStartDetails &&
            (Math.abs(that._dragStartDetails.pageX - event.pageX) >= 5 ||
                Math.abs(that._dragStartDetails.pageY - event.pageY) >= 5)) {
            const orientationSettings = that._orientationSettings,
                difference = that._dragStartDetails[orientationSettings.coordinate] - event[orientationSettings.coordinate],
                oldScrollDirection = that.$.tabStrip[orientationSettings.scrollDirection];

            that.$.tabStrip[orientationSettings.scrollDirection] += difference;

            if (oldScrollDirection !== that.$.tabStrip[orientationSettings.scrollDirection]) {
                that._updateScrollButtonVisibility();
            }

            that._dragStartDetails = {
                startX: that._dragStartDetails.startX,
                startY: that._dragStartDetails.startY,
                pageX: event.pageX,
                pageY: event.pageY,
                startTime: that._dragStartDetails.startTime,
                originalTime: that._dragStartDetails.originalTime,
                target: event.originalEvent.target,
                checked: that._dragStartDetails.checked
            };
            that._swiping = true;

            return;
        }

        if (!that.resize || that._resizing || that._reordering || that.tabLayout === 'shrink') {
            return;
        }

        const orientationSettings = that._orientationSettings,
            currentCoordinate = event[orientationSettings.coordinate],
            tabCoordinates = that._tabCoordinates;
        let tabToResize;

        for (let i = 0; i < tabCoordinates.length; i++) {
            const currentTabCoordinate = tabCoordinates[i][orientationSettings.to];

            if (currentCoordinate >= currentTabCoordinate - 4 && currentCoordinate <= currentTabCoordinate + 4) {
                tabToResize = that._reorderItems[i];
                that._resizeFrom = currentCoordinate;
                break;
            }
        }

        if (tabToResize !== undefined) {
            that._tabToResize = tabToResize;
            that.setAttribute('resizing', '');
        }
        else {
            that._tabToResize = undefined;
            that.removeAttribute('resizing');
        }
    }

    /**
     * Toggles the collapsed state on click.
     */
    _toggleCollapsedState() {
        const that = this;

        if (!that.collapsible) {
            return;
        }

        if (!that.collapsed) {
            that.collapse();
        }
        else {
            that.expand();
        }
    }

    /**
     * Toggles the visibility of navigation elements.
     */
    _toggleNavigationElementsVisibility() {
        const that = this,
            numberOfTabs = that._tabs.length;
        let action;

        if (numberOfTabs === 0) {
            action = 'addClass';
        }
        else if (numberOfTabs === 1) {
            action = 'removeClass';
        }
        else {
            return;
        }

        if (that.tabLayout === 'scroll' && that.overflow === 'scroll') {
            that.$scrollButtonNear[action]('smart-hidden');
            that.$scrollButtonFar[action]('smart-hidden');
        }
        else if (that.tabLayout === 'dropDown') {
            that.$dropDownButton[action]('smart-hidden');
        }
    }

    /**
     * Updates the selected index and the index of each tab.
     */
    _updateIndexes(index) {
        const that = this;

        if (that.selectedIndex !== null && index <= that.selectedIndex) {
            that.selectedIndex++;
        }

        that._updateTabIndexes();
    }

    /**
     * Updates scroll button visibility.
     */
    _updateScrollButtonVisibility(noTabSelectionBarAnimation) {
        const that = this;

        if (that.tabLayout !== 'scroll' || that.overflow === 'hidden') {
            that._positionTabSelectionBar(that._tabLabelContainers[that.selectedIndex], noTabSelectionBarAnimation);
            return;
        }

        const tabsHeaderSection = that.$tabsHeaderSection,
            tabStrip = that.$.tabStrip,
            orientationSettings = that._orientationSettings;
        let showNear = true,
            showFar = true;

        if (Math.round(tabStrip[orientationSettings.scrollDirection]) === 0) {
            showNear = false;
        }

        if (Math.round(tabStrip[orientationSettings.size] + tabStrip[orientationSettings.scrollDirection]) >= Math.round(tabStrip[orientationSettings.scrollSize]) - 1) {
            showFar = false;
        }

        if (that.overflow === 'auto') {
            if (showNear && showFar) {
                that.$scrollButtonNear.removeClass('smart-hidden');
                that.$scrollButtonFar.removeClass('smart-hidden');
                tabsHeaderSection.removeClass('one-button-shown');
                if (that._tabLabelContainers[that.selectedIndex]) {
                    that._positionTabSelectionBar(that._tabLabelContainers[that.selectedIndex], noTabSelectionBarAnimation);
                }
                return;
            }

            if (showNear) {
                that.$scrollButtonNear.removeClass('smart-hidden');
            }
            else {
                that.$scrollButtonNear.addClass('smart-hidden');
            }

            if (showFar) {
                that.$scrollButtonFar.removeClass('smart-hidden');
            }
            else {
                that.$scrollButtonFar.addClass('smart-hidden');
            }

            tabsHeaderSection.addClass('one-button-shown');
            that._getTabCoordinates();
        }
        else if (that.overflow === 'scroll' && !that.disabled) {
            that.$.scrollButtonNear.disabled = !showNear;
            that.$.scrollButtonFar.disabled = !showFar;
        }

        if (that._tabLabelContainers[that.selectedIndex]) {
            that._positionTabSelectionBar(that._tabLabelContainers[that.selectedIndex], noTabSelectionBarAnimation);
        }
    }

    /**
     * Updates the indexes of all tabs.
     */
    _updateTabIndexes() {
        const that = this;

        if (that._tabs.length > 0) {
            for (let i = 0; i < that._tabs.length; i++) {
                that._tabs[i]._setIndex(i);
            }
        }
        else {
            that.selectedIndex = null;
        }
    }

    /**
     * Validates the index passed to the methods "ensureVisible", "getOffsetFromEdgeOfElement", "insert", "remove", "select" and "update".
     */
    _validateIndex(index, method) {
        if (isNaN(parseInt(index, 10)) || typeof index === 'object') {
            const that = this;

            that.error(that.localize('invalidIndex', { method: method }));
        }
    }

    /**
     * Validates the initial selection.
     */
    _validateInitialSelection() {
        const that = this;
        let selectedIndex = that.selectedIndex;

        for (let i = 0; i < that._tabs.length; i++) {
            const currentTab = that._tabs[i];

            if (selectedIndex === i) {
                currentTab.selected = true;
                currentTab.$.removeClass('smart-visibility-hidden');
            }
            else if (currentTab.selected) {
                if (selectedIndex === null) {
                    selectedIndex = i;
                    currentTab.$.removeClass('smart-visibility-hidden');
                }
                else {
                    currentTab.selected = false;
                    currentTab.$.addClass('smart-visibility-hidden');
                }
            }
            else {
                currentTab.$.addClass('smart-visibility-hidden');
            }
        }

        if (that._tabs.length > 0 && selectedIndex === null && !that.allowToggle) {
            selectedIndex = 0;

            that._tabs[0].selected = true;
            that._tabs[0].$.removeClass('smart-visibility-hidden');
        }

        that.selectedIndex = selectedIndex;

        if (that.selectedIndex !== null) {
            that._focusedItem = that._tabs[that.selectedIndex];
        }
    }
});
