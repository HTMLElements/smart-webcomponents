
/* Smart HTML Elements v4.5.0 (2019-Sep) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

/**
* smartCarousel custom element.
*/
Smart('smart-carousel', class Carousel extends Smart.ContentElement {
    /**
    * Element's properties
    */
    static get properties() {
        return {
            'autoPlay': {
                value: false,
                type: 'any'
            },
            'dataSource': {
                value: [],
                type: 'array',
                reflectToAttribute: false
            },
            'delay': {
                value: 200,
                type: 'number'
            },
            'displayMode': {
                allowedValues: ['default', 'multiple', '3d'],
                value: 'default',
                type: 'string'
            },
            'disableItemClick': {
                value: false,
                type: 'boolean'
            },
            'hideArrows': {
                value: false,
                type: 'boolean'
            },
            'hideIndicators': {
                value: false,
                type: 'boolean'
            },
            'indicatorTemplate': {
                value: null,
                type: 'any'
            },
            'interval': {
                value: 5000,
                type: 'number'
            },
            'itemTemplate': {
                value: null,
                type: 'any'
            },
            'keyboard': {
                value: false,
                type: 'boolean'
            },
            'loop': {
                value: false,
                type: 'boolean'
            },
            'messages': {
                value: {
                    'en': {
                        'htmlTemplateNotSuported': '{{elementType}}:  Browser doesn\'t support HTMLTemplate elements.'
                    }
                },
                type: 'object',
                extend: true
            },
            'slideShow': {
                value: false,
                type: 'boolean'
            },
            'swipe': {
                value: false,
                type: 'boolean'
            },
            'wheel': {
                value: false,
                type: 'boolean'
            }
        }
    }

    /**
    * Element's event listeners.
    */
    static get listeners() {
        return {
            'arrowLeft.click': '_handleArrowClick',
            'arrowRight.click': '_handleArrowClick',
            'indicatorsContainer.click': '_handleIndicatorsContainerClick',
            'keydown': '_handleKeyDown',
            'swipeleft': '_handleSwipe',
            'swiperight': '_handleSwipe',
            'wheel': '_handleMouseWheel',
            'itemsContainer.click': '_handleItemClick',
            'itemsContainer.transitionend': '_handleTransitionEnd'
        }
    }

    /*
    * Checks for missing modules.
    */
    static get requires() {
        return {
            'Smart.RepeatButton': 'smart.button.js'
        }
    }

    static get styleUrls() {
        return [
            'smart.button.css',
            'smart.carousel.css'
        ]
    }

    /**
    * Element's HTML template.
    */
    template() {
        return `<div id="container">
                    <div id="itemsContainer" inner-h-t-m-l="[[innerHTML]]" class="smart-items-container"><content></content></div>
                    <smart-repeat-button initial-delay="0" delay="[[delay]]" id="arrowLeft" animation="[[animation]]" unfocusable class="smart-arrow smart-arrow-left"></smart-repeat-button>
                    <smart-repeat-button initial-delay="0" delay="[[delay]]" id="arrowRight" animation="[[animation]]" unfocusable class="smart-arrow smart-arrow-right"></smart-repeat-button>
                    <div id="indicatorsContainer" class="smart-indicators-container"></div>
                </div>`;
    }

    /**
    * Updates the element when a property is changed.
    * @param {string} propertyName The name of the property.
    * @param {number/string} oldValue The previously entered value.
    * @param {number/string} newValue The new entered value.
    */
    propertyChangedHandler(propertyName, oldValue, newValue) {
        const that = this;

        super.propertyChangedHandler(propertyName, oldValue, newValue);

        switch (propertyName) {
            case 'disabled':
                that._setFocusable();
                break;
            case 'dataSource':
                that._currentIndex = 0;
                that._generateIndicators();
                that._generateItems();
                that._handleIndicatorsState(0, 0);
                that._handleItemsState(0, 0);
                that._handle3dMode(0);

                if (that.autoPlay !== false) {
                    const interval = parseInt(that.autoPlay);
                    if (interval) {
                        setTimeout(function () {
                            that.play();
                        }, interval);
                    }
                    else {
                        that.play();
                    }
                }

                that._animationTrigger(that._currentIndex);
                break;
            case 'itemTemplate':
                that._generateItems();
                that._handleItemsState(that._currentIndex, that._currentIndex + 1);
                break;
            case 'indicatorTemplate':
                that._generateIndicators();
                that._handleIndicatorsState(that._currentIndex, that._currentIndex + 1);
                break;
            case 'interval':
                that.pause();
                that.play();
                break;
            case 'loop':
                that._handleArrowsActiveState(that._currentIndex, that._currentIndex);
                break;
            case 'hideArrows':
                if (!newValue) {
                    that._handleArrowsActiveState(that._currentIndex, that._currentIndex);
                }
                break;
            case 'displayMode':
                if (oldValue === 'multiple') {
                    that.$.itemsContainer.removeAttribute('style');
                }
                break;
        }
    }

    /**
    * Element's ready method.
    */
    ready() {
        super.ready();
        const that = this;

        that._setInitialState();
        that._generateIndicators();
        that._generateItems();
        that._handleIndicatorsState(0, 0);
        that._handleItemsState(0, 0);
        that._handle3dMode(0);

        if (that.autoPlay !== false) {
            const interval = parseInt(that.autoPlay);
            interval ? setTimeout(function () {
                that.play()
            }, interval) : that.play();
        }

        that._setFocusable();
        that._animationTrigger(that._currentIndex);
    }

    /**
    * Moves to the slide with the next index. 
    * In loop mode if current is last index, carousel moves to the first slide.
    */
    next() {
        const that = this,
            availableItems = that.dataSource.length;

        if (that.disabled || availableItems === 0) {
            return;
        }

        let nextItem = that._currentIndex;

        if (that.loop) {
            nextItem = nextItem >= availableItems - 1 ? 0 : nextItem + 1;
        }
        else {
            nextItem = nextItem >= availableItems - 1 ? nextItem : nextItem + 1;
        }

        that._goToItem(nextItem);
    }

    /**
    * Pauses slideShow.
    */
    pause() {
        const that = this;

        that._handleRotation();
        that._rotate = false;
    }

    /**
    * Slides to the element with the given index.
    */
    slideTo(index) {
        const that = this;

        index = index ? parseInt(index) : 0;

        if (that.disabled || index < 0 || index > that._items.length) {
            return;
        }

        that._goToItem(index);
    }

    /**
    * Moves to the slide with the previous index. 
    * In loop mode if current is first index, carousel moves to the last slide.
    */
    prev() {
        const that = this,
            availableItems = that.dataSource.length;

        if (that.disabled || availableItems === 0) {
            return;
        }

        let previousItem = that._currentIndex;

        if (that.loop) {
            previousItem = previousItem <= 0 ? availableItems - 1 : previousItem - 1;
        }
        else {
            previousItem = previousItem <= 0 ? 0 : previousItem - 1;
        }

        that._goToItem(previousItem);
    }

    /**
    * Starts slideShow.
    */
    play() {
        const that = this;

        if (that.disabled || !that.slideShow) {
            return;
        }

        if (that._rotationInterval) {
            clearInterval(that._rotationInterval);
        }

        that._handleRotation(true);
        that._rotate = true;
    }

    /**
    * Prevents animation on the selected animation slide immediately after items initialization
    */
    _animationTrigger(skip) {
        const that = this;

        for (let i = 0; i < that._items.length; i++) {
            if (i === skip) {
                continue;
            }
            that._items[i].classList.add('smart-animate-trigger');
        }
    }

    /**
    * In "3d" mode sets positions of carousel items in relation to the active slide.
    */
    _handle3dMode(newIndex) {
        const that = this,
            itemsCount = that.dataSource.length;

        if (that.disabled || !itemsCount || that.displayMode !== '3d') {
            return;
        }

        newIndex = newIndex || 0;

        for (let i = 0; i < itemsCount; i++) {
            const currentPosition = i - newIndex;

            currentPosition ? that._items[i].setAttribute('position', currentPosition) : that._items[i].removeAttribute('position');
        }
    }

    /**
    * Enables/disables arrows
    */
    _handleArrowsActiveState(newIndex, oldIndex) {
        const that = this,
            itemsCount = that.dataSource.length;

        if (!that.loop) {
            (oldIndex === 0) && (that.$.arrowLeft.disabled = false);
            (oldIndex === (itemsCount - 1)) && (that.$.arrowRight.disabled = false);
            (newIndex === 0) && (that.$.arrowLeft.disabled = true);
            (newIndex === (itemsCount - 1)) && (that.$.arrowRight.disabled = true);
        }
        else {
            that.$.arrowLeft.disabled = that.$.arrowRight.disabled = false;
        }
    }

    /**
    * Handles click on carousel's arrows.
    */
    _handleArrowClick(event) {
        const that = this,
            previousIndex = that._currentIndex;

        if (that.disabled) {
            return;
        }

        that.$.arrowLeft.contains(event.target) ? that.prev() : that.next();
        that._changeEvent(previousIndex, that._currentIndex);
    }

    /**
    * Handles slides, set via inner HTML as LI elements.
    */
    _handleDefaultInnerHTML() {
        const that = this;

        if (that.dataSource && that.dataSource.length > 0) {
            return;
        }

        if (that.$.itemsContainer.innerHTML.indexOf('<ul') >= 0) {
            const firstUl = that.$.itemsContainer.getElementsByTagName('ul')[0],
                items = firstUl.getElementsByTagName('li');

            for (let i = 0; i < items.length; i++) {
                const slide = { HTMLcontent: items[i].innerHTML };

                that.dataSource.push(slide);
            }
        }
    }

    /**
    * Handles indicator's state.
    */
    _handleIndicatorsState(from, to) {
        const that = this;

        if (that.disabled || that._indicators.length === 0 || (!from && from !== 0) || (!to && to !== 0)) {
            return;
        }

        if (from !== to) {
            that._indicators[from].classList.remove('smart-active');
        }

        that._indicators[to].classList.add('smart-active');
    }

    /**
    * On '3d' mode makes clicked item active
    */
    _handleItemClick(event) {
        const that = this,
            clickedItem = event.target.closest('.smart-carousel-item');

        if (that.disabled || !clickedItem || that.displayMode !== '3d' || that.disableItemClick) {
            return;
        }

        const itemId = parseInt(clickedItem.getAttribute('item-id')),
            itemPosition = parseInt(clickedItem.getAttribute('position'));

        if (Math.abs(itemPosition) > 3) {
            return;
        }

        that._goToItem(itemId);
    }

    /**
    * Handles items's state.
    */
    _handleItemsState(from, to) {
        const that = this;

        if (that.disabled || that._items.length === 0 || (!from && from !== 0) || (!to && to !== 0)) {
            return;
        }

        if (from !== to) {
            that._items[from].classList.remove('smart-active');
            that._items[from].classList.add('smart-out');
        }

        that._items[to].classList.add('smart-active');
    }

    /**
    * Handles click on indicators.
    */
    _handleIndicatorsContainerClick(event) {
        const that = this,
            clickedItem = event.target.closest('.smart-indicator'),
            previousIndex = that._currentIndex;

        if (that.disabled || !clickedItem) {
            return;
        }

        const itemId = parseInt(clickedItem.getAttribute('indicator-id'));

        if (previousIndex === itemId) {
            return;
        }

        that._goToItem(itemId);
        that._changeEvent(previousIndex, that._currentIndex);
    }

    /**
    * In "multiple" mode sets positions of carousel items in relation to the active slide.
    */
    _handleMultipleMode(newIndex) {
        const that = this;

        if (that.displayMode !== 'multiple') {
            return;
        }

        const item = that._items[newIndex],
            itemWidth = item.offsetWidth,
            containerWidth = that.$.container.offsetWidth,
            itemsContainerWidth = that.$.itemsContainer.offsetWidth;
        let itemOffset = 0;

        if (newIndex === 0) {
            that.$.itemsContainer.style.marginLeft = '0px';
            return;
        }
        else if (newIndex === (that._items.length - 1)) {
            that.$.itemsContainer.style.marginLeft = '-' + (itemsContainerWidth - containerWidth) + 'px';
            return;
        }

        for (let i = 0; i < newIndex; i++) {
            itemOffset = itemOffset + that._items[newIndex].offsetWidth;
        }

        if (((itemOffset + itemWidth / 2) >= containerWidth / 2) && ((itemOffset + itemWidth) < itemsContainerWidth)) {
            that.$.itemsContainer.style.marginLeft = '-' + ((itemOffset + itemWidth / 2) - containerWidth / 2) + 'px';
        }
    }

    /**
    * Fires change/changing events.
    */
    _changeEvent(from, to) {
        if (from === to) {
            return;
        }

        const that = this;

        if (that.onIndexChange) {
            that.onIndexChange(to);
            return;
        }

        that.$.fireEvent('changing', {
            'index': to,
            'previousIndex': from
        });

        if (!that.hasAnimation || that.displayMode === 'default') {
            that.$.fireEvent('change', {
                'index': to,
                'previousIndex': from
            });
        }
    }

    /**
    * Handles keyboard navigation.
    */
    _handleKeyDown(event) {
        const that = this,
            key = event.key,
            previousIndex = that._currentIndex,
            allowedKeys = ['ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp', 'Home', 'End', ' ', 'Enter'];

        if (that.disabled || !that.keyboard || allowedKeys.indexOf(key) === -1) {
            return;
        }

        switch (key) {
            case 'ArrowLeft':
            case 'ArrowDown':
                that.prev();
                break;
            case 'ArrowUp':
            case 'ArrowRight':
                that.next();
                break;
            case 'Home':
                that._goToItem(0);
                break;
            case 'End':
                that._goToItem(that.dataSource.length - 1);
                break;
            case ' ':
                that._rotate ? that.pause() : that.play();
                break;
            case 'Enter':
                that.play();
                break;
        }

        that._changeEvent(previousIndex, that._currentIndex);
    }

    /**
    * Allows navigation between slides via mouse wheel.
    */
    _handleMouseWheel(event) {
        const that = this,
            previousIndex = that._currentIndex;

        if (that.disabled || !that.wheel || document.activeElement !== that) {
            return
        }

        event.stopPropagation();
        event.preventDefault();
        event.deltaY > 0 ? that.next() : that.prev();
        that._changeEvent(previousIndex, that._currentIndex);
    }

    /**
    * Start/stop slideShow.
    */
    _handleRotation(on) {
        const that = this;

        if (on) {
            that._rotationInterval = setInterval(function () {
                if (!that.slideShow) {
                    return;
                }

                that.next();
            }, that.interval);
        }
        else {
            clearInterval(that._rotationInterval);
        }
    }

    /**
    * Slides to next/prev slide on swipeRight/swipeLeft.
    */
    _handleSwipe(event) {
        const that = this;

        if (that.disabled || !that.swipe) {
            return;
        }

        event.stopPropagation();
        event.preventDefault();
        event.type === 'swipeleft' ? that.prev() : that.next();
    }

    /**
    * Generates single indicator item
    */
    _generateIndicator(id) {
        const that = this,
            indicatorContainer = document.createElement('span'),
            indicatorId = id ? id : 0;

        if (that.indicatorTemplate) {
            const template = that._validateTemplate(that.indicatorTemplate);

            indicatorContainer.innerHTML = that._processItemTemplate(template.content, that.dataSource[indicatorId])
        }

        indicatorContainer.classList.add('smart-indicator');
        indicatorContainer.setAttribute('indicator-id', indicatorId);

        return indicatorContainer;
    }

    /**
    * Fills indicators container by generating multiple indicators.
    */
    _generateIndicators() {
        const that = this,
            itemsCount = that.dataSource.length;
        let indicators = [],
            fragment = document.createDocumentFragment();

        for (let i = 0; i < itemsCount; i++) {
            const item = that._generateIndicator(i);

            indicators.push(item);
            fragment.appendChild(item);
        }

        that._indicators = indicators;

        const indicatorsContainer = that.$.indicatorsContainer;

        while (indicatorsContainer.firstChild) {
            indicatorsContainer.removeChild(indicatorsContainer.firstChild);
        }

        indicatorsContainer.appendChild(fragment);
    }

    /**
    * Generates single slide
    */
    _generateItem(id) {
        const that = this,
            itemContainer = document.createElement('div'),
            itemId = id ? id : 0;

        if (that.itemTemplate) {
            const template = that._validateTemplate(that.itemTemplate);

            itemContainer.innerHTML = that._processItemTemplate(template.content, that.dataSource[itemId]);
        }
        else {
            const item = that.dataSource[itemId];

            if (typeof item === 'string') {
                itemContainer.style.backgroundImage = 'url("' + item + '")';
            }
            else {
                itemContainer.innerHTML = `<div class="smart-carousel-item-container" style="background-image:url('${item.image || ''}')">
                        <h2 class="smart-carousel-item-label">${item.label || ''}</h2>
                        <p class="smart-carousel-item-content">${item.content || ''}</p>
                    </div>
                    <div class="smart-carousel-html-content">${item.HTMLcontent || ''}</div>
                </div>`;
            }
        }

        itemContainer.classList.add('smart-carousel-item');
        itemContainer.setAttribute('item-id', itemId);

        return itemContainer;
    }

    /**
    * Binds template and data source item
    */
    _processItemTemplate(template, dataSource) {
        const regex = /{{\w+}}/g,
            bindings = template.match(regex);
        let processedTemplate = template;

        if (!bindings || bindings.length === 0) {
            return processedTemplate;
        }

        bindings.forEach(function (binding) {
            const propertyName = binding.replace('{{', '').replace('}}', '');

            processedTemplate = processedTemplate.replace(binding, (dataSource[propertyName] || ''));
        });

        return processedTemplate;
    }

    /**
    * Fills slides container by generating multiple items.
    */
    _generateItems() {
        const that = this,
            itemsCount = that.dataSource.length;
        let items = [],
            fragment = document.createDocumentFragment();

        for (let i = 0; i < itemsCount; i++) {
            const item = that._generateItem(i);

            items.push(item);
            fragment.appendChild(item);
        }

        that._items = items;

        const itemsContainer = that.$.itemsContainer;

        while (itemsContainer.firstChild) {
            itemsContainer.removeChild(itemsContainer.firstChild);
        }

        itemsContainer.appendChild(fragment);
    }

    /**
    * Moves slides to an item with particular index.
    */
    _goToItem(index, fireEvent) {
        const that = this,
            itemsCount = that.dataSource.length,
            oldIndex = that._currentIndex;
        let newIndex = index;

        if (index < 0) {
            newIndex = 0;
        }
        else if (index > (itemsCount - 1)) {
            newIndex = itemsCount - 1
        }

        that._removeFadeOut();
        that._animationTrigger();
        that._handleIndicatorsState(oldIndex, newIndex);
        that._handleItemsState(oldIndex, newIndex);
        that._currentIndex = newIndex;
        fireEvent && that._changeEvent(oldIndex, newIndex);
        that._handle3dMode(newIndex);
        that._handleMultipleMode(newIndex);
        that._handleArrowsActiveState(newIndex, oldIndex);
    }

    /**
    * Sets tab index 
    */
    _setFocusable() {
        const that = this;

        if (that.disabled || that.unfocusable) {
            that.removeAttribute('tabindex');
            that.tabIndex = -1;
            return;
        }

        let index = that.tabIndex > 0 ? that.tabIndex : 0;

        that.setAttribute('tabindex', index);
        that.tabIndex = index;
    }

    /**
    * Sets initial values to inner variables, used in latest stage.
    */
    _setInitialState() {
        const that = this;

        that._currentIndex = 0;
        that._indicators = [];
        that._items = [];
        that._rotate = false;
        that._handleDefaultInnerHTML();
    }

    /**
    * Sets initial values to inner variables, used in latest stage.
    */
    _validateTemplate(template) {
        const that = this;
        let templateContent = '',
            hasBindings = false,
            regex = /{{\w+}}/g;

        if (typeof template === 'function') {
            templateContent = template();
        }

        if (!('content' in document.createElement('template'))) {
            that.error(that.localize('htmlTemplateNotSuported', { elementType: that.nodeName.toLowerCase() }));
            that.itemTemplate = null;
            return;
        }

        if (template instanceof HTMLElement) {
            templateContent = template.innerHTML;
        }
        else {
            template = document.getElementById(template);
            templateContent = template ? template.innerHTML : '';
        }

        if (regex.exec(templateContent)) {
            hasBindings = true;
        }

        return { content: templateContent, hasBindings: hasBindings };
    }

    /**
    * Detect animation end and updates animated item's class list
    */
    _handleTransitionEnd(event) {
        if (!event.target.classList.contains('smart-carousel-item') || event.target.getAttribute('position')) {
            return;
        }

        const that = this,
            currentTransitionEndId = event.target.getAttribute('item-id');

        if (that._lastTransitionEndId === currentTransitionEndId) {
            return;
        }

        that._removeFadeOut();
        this.$.fireEvent('change', {
            'index': currentTransitionEndId,
            'previousIndex': that._lastTransitionEndId
        });
        that._lastTransitionEndId = currentTransitionEndId;
    }

    /**
    * Removes the class related to items fade out effect 
    */
    _removeFadeOut() {
        const that = this,
            fadeOutItems = that.$.itemsContainer.getElementsByClassName('smart-out');

        if (fadeOutItems.length) {
            for (let i = 0; i < fadeOutItems.length; i++) {
                fadeOutItems[i].classList.remove('smart-out');
            }
        }
    }
});