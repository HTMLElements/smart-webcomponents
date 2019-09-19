
/* Smart HTML Elements v4.5.0 (2019-Sep) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart('smart-input', class Input extends Smart.BaseElement {
    // Button's properties.
    static get properties() {
        return {
            'dataSource': {
                type: 'any',
                value: []
            },
            'dropDownDataSource': {
                type: 'any',
                value: []
            },
            'dropDownHeight': {
                type: 'any',
                value: 200
            },
            'dropDownWidth': {
                type: 'any',
                value: null
            },
            'dropDownButtonPosition': {
                allowedValues: ['none', 'left', 'right'],
                value: 'none',
                type: 'string'
            },
            'items': {
                type: 'number',
                value: 8
            },
            'minLength': {
                type: 'number',
                value: 1
            },
            'name': {
                value: '',
                type: 'string'
            },
            'opened': {
                value: false,
                type: 'boolean'
            },
            'query': {
                type: 'string',
                value: ''
            },
            'queryMode': {
                allowedValues: ['contains', 'containsIgnoreCase', 'doesNotContain', 'doesNotContainIgnoreCase', 'equals', 'equalsIgnoreCase', 'startsWith', 'startsWithIgnoreCase', 'endsWith', 'endsWithIgnoreCase'],
                type: 'string',
                value: 'containsIgnoreCase'
            },
            'placeholder': {
                value: '',
                type: 'string'
            },
            'readonly': {
                type: 'boolean',
                value: false
            },
            'sorted': {
                value: false,
                type: 'boolean'
            },
            'sortDirection': {
                value: 'asc',
                type: 'string'
            },
            'type': {
                type: 'string'
            },
            'value': {
                type: 'string',
                value: ''
            }
        };
    }


    /**
    * CSS files needed for the element (ShadowDOM)
    */
    static get styleUrls() {
        return [
            'smart.textbox.css'
        ]
    }

    /** Button's template. */
    template() {
        return '<div id="inputContainer"><input class="smart-input" id=\'input\' readonly=\'[[readonly]]\' placeholder=\'[[placeholder]]\' type=\'[[type]]\' name=\'[[name]]\' value=\'{{value::keyup}}\' disabled=\'[[disabled]]\' role=\'input\'/><div id="dropDownButton" tabindex=-1 class="smart-drop-down-button"><div id="arrow" class="arrow"></div></div></div>';
    }

    static get listeners() {
        return {
            'input.focus': '_focusHandler',
            'input.blur': '_blurHandler',
            'input.keydown': '_keyDownHandler',
            'input.keyup': '_keyUpHandler',
            'input.keypress': '_keyPressHandler',
            'dropDownButton.down': '_dropDownButtonDownHandler',
            'inputContainer.down': '_downHandler',
            'document.up': '_documentUpHandler'
        };
    }

    focus() {
        const that = this;

        that.$.input.focus();
    }

    select() {
        const that = this;

        if (!that.readonly) {
            that.$.input.select();
        }
        else {
            that.$.input.focus();
        }
    }

    _documentUpHandler(event) {
        const that = this;

        let target = event.originalEvent.target;

        if (target === that ||
            target === that.$.dropDownButton ||
            target === that.$.input ||
            target === that.$.arrow) {
            return;
        }

        if (that.$.scrollView.contains(target)) {
            if (that._isPointerDown) {
                that._isPointerDown = false;
                that.$.input.focus();
            }

            return;
        }

        that._isPointerDown = false;
        that.close();
    }

    _focusHandler() {
        const that = this;

        that.setAttribute('focus', '');
    }

    _blurHandler() {
        const that = this;

        if (!that.opened) {
            that.removeAttribute('focus');
        }
    }

    _refreshMenu() {
        const that = this;

        that.$.menu.classList.remove('scroll');

        if (that.$.scrollView.computedVerticalScrollBarVisibility) {
            that.$.menu.classList.add('scroll');
        }
    }

    _performSelect() {
        const that = this;
        const targetItem = that.$.menu.querySelector('.active'),
            label = targetItem.getAttribute('data-label'),
            value = targetItem.getAttribute('value'),
            oldLabel = that.value,
            oldValue = that.$.input.dataValue;

        that.value = label;
        that.$.input.dataValue = value;
        that.$.fireEvent('change', { value: value, label: label, oldValue: oldValue, oldLabel: oldLabel });
        that.close();
    }

    _offsetTop(element) {
        const that = this;

        if (!element) {
            return 0;
        }

        return element.offsetTop + that._offsetTop(element.offsetParent) - (element.offsetParent ? element.offsetParent.scrollTop : 0);
    }

    _offsetLeft(element) {
        const that = this;

        if (!element) {
            return 0;
        }

        return element.offsetLeft + that._offsetLeft(element.offsetParent) - (element.offsetParent ? element.offsetParent.scrollLeft : 0);
    }

    _offset(element) {
        return { left: this._offsetLeft(element), top: this._offsetTop(element) }
    }

    _open() {
        const that = this;
        const offset = that._offset(that);

        if (this.opened) {
            return;
        }

        if (that.timer) {
            clearTimeout(that.timer);
        }

        document.body.appendChild(that.$.scrollView);

        that.$.scrollView.style.setProperty('--smart-input-drop-down-menu-width', '');
        that.$.scrollView.style.left = -3 + offset.left + 'px';
        that.$.scrollView.style.top = offset.top + that.offsetHeight + 1 + 'px';
        that.$.scrollView.classList.remove('open');


        that.$.scrollView.onpointerdown = function () {
            that._isPointerDown = true;
        }

        requestAnimationFrame(function () {
            that.$.scrollView.refresh();
            that._refreshMenu();
            that.$.scrollView.setAttribute('open', '');
            that.setAttribute('open', '');
            that.$.dropDownButton.setAttribute('open', '');
            that.$.input.setAttribute('open', '');

            if (that.dropDownWidth !== 'auto' && that.dropDownWidth) {
                that.$.scrollView.style.setProperty('--smart-input-drop-down-menu-width', that.dropDownWidth + 'px');
            }
            else if (that.dropDownWidth === 'auto') {
                that.$.scrollView.style.setProperty('--smart-input-drop-down-menu-width', '');
            }
            else {
                that.$.menu.style.width = 'auto';

                let menuWidth = that.$.menu.offsetWidth;

                const listItems = that.$.menu.querySelectorAll('li');

                for (let i = 0; i < listItems.length; i++) {
                    that._maxDropDownWidth = Math.max(listItems[i].firstElementChild.offsetWidth, that._maxDropDownWidth);
                }

                if (that.$.scrollView.computedVerticalScrollBarVisibility) {
                    menuWidth += 30;
                }

                that.$.scrollView.style.setProperty('--smart-input-drop-down-menu-width', Math.max(menuWidth, that.offsetWidth - 8) + 'px');
            }
        });


        that.$.scrollView.refresh();
        that._refreshMenu();

        this.opened = true;
    }

    close() {
        const that = this;

        if (!that.opened) {
            return false;
        }

        if (that.timer) {
            clearTimeout(that.timer);
        }

        that.timer = setTimeout(function () {
            if (that.$.scrollView.parentNode && !that.opened) {
                document.body.removeChild(that.$.scrollView);
            }
        }, 1000);

        that.$.scrollView.removeAttribute('open');
        that.$.dropDownButton.removeAttribute('open');
        that.$.input.removeAttribute('open');
        that.removeAttribute('open');

        that.opened = false;
        that.$.input.focus();
        return true;
    }

    _lookup(event) {
        const that = this;

        let items = [];
        that.query = that.$.input.value;

        if (that.$.input.readonly) {
            if (!that._incrementalSearchQuery) {
                that._incrementalSearchQuery = '';
            }

            that._incrementalSearchQuery += event.key;

            if (that._incrementalSearchTimer) {
                clearTimeout(that._incrementalSearchTimer);
            }

            that.query = that._incrementalSearchQuery;
            that._incrementalSearchTimer = setTimeout(function () {
                that._incrementalSearchQuery = '';
            }, 700);
        }

        if (!that.query || that.query.length < that.minLength) {
            that.close();
            return;
        }

        items = typeof that.dataSource === 'function' ? that.dataSource(that.query) : that.dataSource;

        return that._process(items);
    }

    _downHandler(event) {
        const that = this;

        if (that.readonly) {
            that._dropDownButtonDownHandler(event);
        }
    }

    _dropDownButtonDownHandler(event) {
        const that = this;

        that._toggle();

        event.preventDefault();
        event.stopPropagation();

        event.originalEvent.preventDefault();
        event.originalEvent.stopPropagation();

        return false;
    }

    _toggle() {
        const that = this;

        if (that.opened) {
            that.close();
        }
        else {
            that.open();
        }
    }

    open() {
        const that = this;

        let items;

        if (!that.dropDownDataSource) {
            items = typeof that.dropDownDataSource === 'function' ? that.dropDownDataSource(that.query) : that.dropDownDataSource;
        }
        else {
            that.query = '';
            items = typeof that.dataSource === 'function' ? that.dataSource(that.query) : that.dataSource;
        }

        that._process(items);

        const active = that.$.menu.querySelector('.active');

        if (active) {
            const dataValue = that.$.input.dataValue;

            for (let i = 0; i < that.$.menu.children.length; i++) {
                const item = that.$.menu.children[i];
                const label = item.getAttribute('data-label'),
                    value = item.getAttribute('value');

                if (dataValue !== undefined && value === dataValue ||
                    dataValue === undefined && label === that.$.input.value) {
                    active.classList.remove('active');
                    item.classList.add('active');
                    that.$.input.dataValue = value;
                    break;
                }
            }
        }

        that.ensureVisible();

        that.$.input.focus();
        setTimeout(function () {
            that.$.input.focus();
        }, 25);
    }

    _process(items) {
        const that = this;

        if (typeof items === 'string') {
            items = that.$.deserialize(items, 'array');
        }

        items = items.filter(function (item) {
            return that.matcher ? that.matcher(item) : that._matcher(item);
        })

        items = that._sorter(items);

        if (that.sorted) {
            items.sort((a, b) => {
                if (a.label !== undefined) {
                    return a.label.localeCompare(b.label);
                }

                return a.localeCompare(b);
            });

            if (that.sortDirection === 'desc') {
                items.reverse();
            }
        }

        if (!items.length && that.opened) {
            that.close();
        }

        if (items.length === 0) {
            return;
        }

        if (that.query.length > 0) {
            that._render(items.slice(0, that.items));
        }
        else {
            that._render(items);
        }

        that._open();

        that.$.scrollView.refresh();
        that._refreshMenu();
        that.ensureVisible();
    }

    _matcher(item) {
        const that = this;
        const text = that.query;

        item = item.label || item;

        switch (that.queryMode) {
            case 'startsWith':
                return item.startsWith(text);

            case 'startsWithIgnoreCase':
                return item.toLowerCase().startsWith(text.toLowerCase());

            case 'doesNotContain':
                return item.indexOf(text) < 0;

            case 'doesNotContainIgnoreCase':
                return item.toLowerCase().indexOf(text.toLowerCase()) < 0;

            case 'contains':
                return item.indexOf(text) > -1;

            default:
            case 'containsIgnoreCase':
                return ~item.toLowerCase().indexOf(text.toLowerCase());

            case 'equals':
                return item.localeCompare(text) === 0;

            case 'equalsIgnoreCase':
                return (item.toLowerCase().localeCompare(text.toLowerCase()) === 0);

            case 'endsWith':
                return item.endsWith(text);

            case 'endsWithIgnoreCase':
                return item.toLowerCase().endsWith(text.toLowerCase());
        }
    }

    _sorter(items) {
        const that = this;

        let beginswith = []
            , caseSensitive = []
            , caseInsensitive = []
            , item

        // eslint-disable-next-line
        while (item = items.shift()) {
            const label = item.label || item;

            if (!label.toLowerCase().indexOf(that.query.toLowerCase())) {
                beginswith.push(item)
            }
            else if (~label.indexOf(that.query)) {
                caseSensitive.push(item)
            }
            else {
                caseInsensitive.push(item)
            }
        }

        return beginswith.concat(caseSensitive, caseInsensitive)
    }

    _highlighter(item) {
        const that = this;
        const query = that.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');

        return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
            return '<strong>' + match + '</strong>'
        })
    }

    _render(items) {
        const that = this;

        const listItems = items.map(function (item) {
            let label = item,
                value = item;

            if (typeof item === 'object') {
                label = item.label;
                value = item.value || label;
            }

            const listItem = document.createElement('li');
            const anchor = document.createElement('a');

            anchor.href = '#';
            listItem.setAttribute('data-label', label);
            listItem.setAttribute('value', value);
            anchor.innerHTML = that.highlighter ? that.highlighter(label) : that._highlighter(label);

            if (item.icon) {
                anchor.classList.add('icon');
                anchor.classList.add(item.icon);
            }

            listItem.appendChild(anchor);

            return listItem;
        })

        if (listItems.length > 0) {
            listItems[0].classList.add('active');
        }


        that.$.menu.innerHTML = '';

        function setActiveState() {
            const previouslyActive = that.$.menu.getElementsByClassName('active');

            if (previouslyActive[0]) {
                previouslyActive[0].classList.remove('active');
            }

            this.classList.add('active');
        }

        for (let i = 0; i < listItems.length; i++) {
            const listItem = listItems[i];

            that.$.menu.appendChild(listItem);

            listItem.onmouseenter = setActiveState;

            listItem.onmouseleave = function () {
                this.classList.remove('active');
            }

            listItem.onclick = setActiveState;
        }
    }

    ensureVisible() {
        const that = this;
        const item = that.$.menu.querySelector('.active');

        if (!item) {
            return;
        }

        if (item.offsetTop + item.offsetHeight >= that.$.scrollView.scrollTop + that.$.scrollView.offsetHeight) {
            that.$.scrollView.scrollTop = item.offsetTop + item.offsetHeight;
        }

        if (item.offsetTop <= that.$.scrollView.scrollTop || item.offsetTop >= that.$.scrollView.scrollTop + that.$.scrollView.offsetHeight) {
            that.$.scrollView.scrollTop = item.offsetTop;
        }

        if ([...that.$.menu.children].indexOf(item) === 0) {
            that.$.scrollView.scrollTop = 0;
        }
        else if ([...that.$.menu.children].indexOf(item) === that.$.menu.children.length - 1) {
            that.$.scrollView.scrollTop = that.$.scrollView.scrollHeight;
        }
    }

    _next() {
        const that = this;
        const active = that.$.menu.querySelector('.active');

        if (!active) {
            that.$.menu.firstElementChild.classList.add('active');
            return;
        }

        active.classList.remove('active');

        let next = active.nextElementSibling;

        if (!next) {
            next = that.$.menu.firstElementChild;
        }

        next.classList.add('active');
        that.ensureVisible();
    }

    _prev() {
        const that = this;
        const active = that.$.menu.querySelector('.active');

        if (!active) {
            that.$.menu.firstElementChild.classList.add('active');
            return;
        }

        active.classList.remove('active');

        let prev = active.previousElementSibling;

        if (!prev) {
            prev = that.$.menu.lastElementChild;
        }

        prev.classList.add('active');
        that.ensureVisible();
    }

    _move(event) {
        const that = this;

        if (!that.opened) {
            return;
        }

        switch (event.keyCode) {
            case 9: // tab
            case 13: // enter
            case 27: // escape
                event.preventDefault()
                break

            case 38: // up arrow
                event.preventDefault()
                that._prev()
                break

            case 40: // down arrow
                event.preventDefault()
                that._next()
                break
        }

        event.stopPropagation()
    }

    _keyDownHandler(event) {
        const that = this;

        that._suppressKeyPressRepeat = ![40, 38, 9, 13, 27, 16, 17, 18].includes(event.keyCode);

        if (event.shiftKey || event.altKey || event.ctrlKey) {
            return;
        }

        that._move(event);
    }

    _keyPressHandler(event) {
        const that = this;

        if (that._suppressKeyPressRepeat) {
            return;
        }

        if (event.shiftKey || event.altKey || event.ctrlKey) {
            return;
        }

        that._move(event)
    }

    _keyUpHandler(event) {
        const that = this;

        if (event.shiftKey || event.altKey || event.ctrlKey) {
            return;
        }

        switch (event.keyCode) {
            case 40: // down arrow
            case 38: // up arrow
            case 16: // shift
            case 17: // ctrl
            case 18: // alt
                if (event.keyCode === 40 && event.altKey) {
                    that.open();
                }
                if (event.keyCode === 38 && event.altKey) {
                    that.close();
                }

                break;

            case 9: // tab
            case 13: // enter
                if (!that.opened) {
                    return;
                }

                that._performSelect();
                event.stopPropagation()
                event.preventDefault()
                break

            case 27: // escape
                if (!that.opened) {
                    return;
                }

                that.close();
                event.stopPropagation()
                event.preventDefault()
                break

            default:
                that._lookup(event);
                if (that.opened && !event.ctrlKey && !event.shiftKey) {
                    event.stopPropagation()
                    event.preventDefault()
                }

                that.$.input.dataValue = that.$.input.value;
        }

    }

    propertyChangedHandler(propertyName, oldValue, newValue) {
        super.propertyChangedHandler(propertyName, oldValue, newValue);

        const that = this;

        if (propertyName === 'dropDownHeight') {
            that.$.scrollView.style.setProperty('--smart-input-drop-down-menu-height', that.dropDownHeight + 'px');
        }

        if (propertyName === 'opened') {
            if (newValue) {
                that.open();
            }
            else {
                that.close();
            }
        }

        if (propertyName === 'theme') {
            that.$.scrollView.theme = newValue;
        }
    }

    ready() {
        const that = this;

        super.ready();

        const menu = document.createElement('ul');
        const scrollView = document.createElement('smart-scroll-viewer');

        scrollView.theme = that.theme;
        scrollView.horizontalScrollBarVisibility = 'hidden';
        scrollView.appendChild(menu);
        scrollView.style.setProperty('--smart-input-drop-down-menu-height', that.dropDownHeight + 'px');
        scrollView.classList.add('smart-input-drop-down-menu');

        scrollView.id = that.id + '_' + that.tagName.toLowerCase() + '_menu_' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        that.setAttribute('aria-controls', scrollView.id);
        scrollView.ownerElement = that;

        that.$.scrollView = scrollView;
        that.$.menu = menu;

        if (that.opened) {
            that.open();
        }

        that.opened = false;

        //that.$.inputContainer.tabIndex = 0;
        that.$.menu.onclick = function (event) {
            event.stopPropagation()
            event.preventDefault()

            that._performSelect();
            that.$.input.focus();
        }
    }
});
