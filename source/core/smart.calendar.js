
/* Smart HTML Elements v4.5.0 (2019-Sep) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

/**
* Calendar custom element.
*/
Smart('smart-calendar', class Calendar extends Smart.BaseElement {
    /** 
    * Calendar's properties 
    */
    static get properties() {
        return {
            'animationSettings': {
                value: null,
                type: 'object'
            },
            'calendarMode': {
                value: 'default',
                allowedValues: ['default', 'classic'],
                type: 'string'
            },
            'dayNameFormat': {
                value: 'firstTwoLetters',
                allowedValues: ['narrow', 'firstTwoLetters', 'long', 'short'],
                type: 'string'
            },
            'dateFormatFunction': {
                value: null,
                type: 'function'
            },
            'disableAutoNavigation': {
                value: false,
                type: 'boolean'
            },
            'displayMode': {
                value: 'month',
                allowedValues: ['month', 'year', 'decade'],
                type: 'string'
            },
            'displayModeView': {
                value: 'table',
                allowedValues: ['table', 'list'],
                type: 'string'
            },
            'dropDownHeight': {
                value: '200',
                type: 'string'
            },
            'dropDownWidth': {
                value: 'initial',
                type: 'string'
            },
            'firstDayOfWeek': {
                value: 0,
                type: 'number',
                defaultValue: 0,
                validator: '_firstDayOfWeekValidator'
            },
            'footerTemplate': {
                value: null,
                type: 'any'
            },
            'headerTemplate': {
                value: null,
                type: 'any'
            },
            'hideDayNames': {
                value: false,
                type: 'boolean'
            },
            'hideOtherMonthDays': {
                value: false,
                type: 'boolean'
            },
            'hideTooltipArrow': {
                value: false,
                type: 'boolean'
            },
            'importantDates': {
                value: [],
                type: 'array',
                defaultValue: []
            },
            'importantDatesTemplate': {
                value: null,
                type: 'any'
            },
            'max': {
                value: new Date(2100, 1, 1),
                type: 'any',
                defaultValue: new Date(2100, 1, 1)
            },
            'min': {
                value: new Date(1900, 1, 1),
                type: 'any',
                defaultValue: new Date(1900, 1, 1)
            },
            'months': {
                value: 1,
                type: 'number',
                defaultValue: 1,
                validator: '_monthsValidator'
            },
            'monthNameFormat': {
                value: 'long',
                allowedValues: ['narrow', 'firstTwoLetters', 'long', 'short', '2-digit', 'numeric'],
                type: 'string'
            },
            'name': {
                value: '',
                type: 'string'
            },
            'restrictedDates': {
                value: [],
                type: 'array',
                defaultValue: []
            },
            'scrollButtonsNavigationMode': {
                value: 'landscape',
                allowedValues: ['portrait', 'landscape'],
                type: 'string'
            },
            'scrollButtonsPosition': {
                value: 'both',
                allowedValues: ['near', 'far', 'both'],
                type: 'string'
            },
            'selectedDates': {
                value: [],
                type: 'array'
            },
            'selectionMode': {
                value: 'default',
                allowedValues: ['none', 'default', 'one', 'many', 'zeroOrMany', 'oneOrMany', 'zeroOrOne', 'week'],
                type: 'string'
            },
            'spinButtonsDelay': {
                value: 80,
                type: 'number'
            },
            'spinButtonsInitialDelay': {
                value: 0,
                type: 'number'
            },
            'titleTemplate': {
                value: null,
                type: 'any'
            },
            'tooltip': {
                value: false,
                type: 'boolean'
            },
            'tooltipDelay': {
                value: 100,
                type: 'number'
            },
            'tooltipPosition': {
                value: 'top',
                allowedValues: ['bottom', 'top', 'left', 'right', 'absolute'],
                type: 'string'
            },
            'tooltipTemplate': {
                value: null,
                type: 'any'
            },
            'view': {
                value: 'portrait',
                allowedValues: ['landscape', 'portrait'],
                type: 'string'
            },
            'viewSections': {
                value: ['header'],
                type: 'array'
            },
            'weekNumbers': {
                value: false,
                type: 'boolean'
            },
            'weeks': {
                value: 6,
                type: 'number',
                defaultValue: 6,
                validator: '_weeksValidator'
            },
            'yearFormat': {
                value: 'numeric',
                allowedValues: ['2-digit', 'numeric'],
                type: 'string'
            }
        }
    }

    /**
    * Calendar's event listeners.
    */

    static get listeners() {
        return {
            'container.down': '_downHandler',
            'document.up': '_documentUpHandler',
            'container.move': '_moveHandler',
            'container.wheel': '_containerWheelHandler',
            'body.focus': '_bodyFocusStateHandler',
            'body.blur': '_bodyBlurStateHandler',
            'header.click': '_headerClickHandler',
            'header.change': '_headerChangeHandler',
            'keydown': '_keyDownHandler',
            'keyup': '_keyUpHandler',
            'listViewContainer.keydown': '_listViewContainerKeyDownHandler',
            'listViewContainer.change': '_listViewContainerChangeEventHandler',
            'mouseenter': '_mouseEventsHandler',
            'mouseleave': '_mouseEventsHandler',
            'container.mouseover': '_mouseEventsHandler',
            'container.mouseout': '_mouseEventsHandler',
            'tooltip.open': '_tooltipEventHandler',
            'tooltip.close': '_tooltipEventHandler'
        }
    }

    static get methods() {
        return {
            'select': 'select(date=new Date(): date|string): void',
            'clearSelection': 'clearSelection(): void',
            'today': 'today(): date',
            'navigate': 'navigate(step: int): bool'
        }
    }

    /**
    * CSS files needed for the element (ShadowDOM)
    */
    static get styleUrls() {
        return [
            'smart.button.css',
            'smart.dropdownlist.css',
            'smart.dropdown.css',
            'smart.tooltip.css',
            'smart.calendar.css'
        ]
    }

    /**
    * Calendar's HTML template.
    */
    template() {
        return `<div id="container">
                    <div id="title" class="smart-calendar-title">
                        <div id="yearContainer" class="smart-calendar-year-container"></div>
                        <div id="dateContainer" class="smart-calendar-date-container smart-calendar-selected"></div>
                    </div>
                    <div id="calendarContainer" class="smart-calendar-container">
                        <div id="header" class="smart-calendar-header">
                            <smart-repeat-button prev-month class="smart-calendar-button" id="previousMonthButton" animation="[[animation]]" initial-delay="[[spinButtonsInitialDelay]]" delay="[[spinButtonsDelay]]" disabled="[[disabled]]" readonly="[[readonly]]">
                                <div class="smart-arrow">&#xe809</div>
                            </smart-repeat-button>
                            <div id="dateElement" class="smart-calendar-date-element">
                                <div id="defaultHeaderDate"></div>
                                <div id="classicHeaderDate">
                                    <smart-drop-down-list class="smart-calendar-month-element" id="monthElement" drop-down-position="bottom" selection-mode="one" disabled="[[disabled]]" readonly="[[readonly]]" drop-down-width="[[dropDownWidth]]" drop-down-height="[[dropDownHeight]]" theme="[[theme]]">
                                    </smart-drop-down-list>
                                    <input class="smart-calendar-year-element" id="yearElement" disabled="[[disabled]]" readonly="[[readonly]]"/>
                                    <span class="smart-calendar-year-elements">
                                        <smart-repeat-button next-year class="smart-calendar-button" id="nextYearButton" animation="[[animation]]" initial-delay="[[spinButtonsInitialDelay]]" delay="[[spinButtonsDelay]]" disabled="[[disabled]]" readonly="[[readonly]]">
                                            <span class="smart-arrow">&#xe801</span>
                                        </smart-repeat-button>
                                        <smart-repeat-button prev-year class="smart-calendar-button" id="previousYearButton" animation="[[animation]]" initial-delay="[[spinButtonsInitialDelay]]" delay="[[spinButtonsDelay]]" disabled="[[disabled]]" readonly="[[readonly]]">
                                            <span class="smart-arrow">&#xe804</span>
                                        </smart-repeat-button>
                                    </span>
                                </div>
                            </div>
                            <smart-repeat-button next-month class="smart-calendar-button" id="nextMonthButton" animation="[[animation]]" initial-delay="[[spinButtonsInitialDelay]]" delay="[[spinButtonsDelay]]" disabled="[[disabled]]" readonly="[[readonly]]">
                                <div class="smart-arrow">&#xe810</div>
                            </smart-repeat-button>
                        </div>
                        <div id="body" class="smart-content smart-calendar-body">
                           <div id="monthsContainer" class="smart-calendar-months-container">
                              <div id="month" class="smart-calendar-month">
                                   <div id="monthName" class="smart-calendar-month-name"></div>
                                   <div id="weekTitles" class="smart-calendar-week-titles">
                                       <div class="smart-calendar-week-title"></div>
                                       <div  class="smart-calendar-week-title"></div>
                                       <div  class="smart-calendar-week-title"></div>
                                       <div  class="smart-calendar-week-title"></div>
                                       <div  class="smart-calendar-week-title"></div>
                                       <div  class="smart-calendar-week-title"></div>
                                       <div  class="smart-calendar-week-title"></div>
                                       <div  class="smart-calendar-week-title"></div>
                                   </div>
                                   <div id="weeks" class="smart-calendar-weeks">
                                        <div class="smart-calendar-week">
                                           <div class="smart-calendar-week-number"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"> </div>
                                        </div>
                                        <div class="smart-calendar-week">
                                           <div class="smart-calendar-week-number"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"> </div>
                                           <div class="smart-calendar-cell"> </div>
                                           <div class="smart-calendar-cell"> </div>
                                       </div>
                                       <div class="smart-calendar-week">
                                           <div class="smart-calendar-week-number"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"> </div>
                                           <div class="smart-calendar-cell"> </div>
                                           <div class="smart-calendar-cell"> </div>
                                       </div>
                                       <div class="smart-calendar-week">
                                           <div class="smart-calendar-week-number"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"> </div>
                                           <div class="smart-calendar-cell"> </div>
                                           <div class="smart-calendar-cell"> </div>
                                       </div>
                                       <div class="smart-calendar-week">
                                           <div class="smart-calendar-week-number"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"> </div>
                                           <div class="smart-calendar-cell"> </div>
                                           <div class="smart-calendar-cell"> </div>
                                       </div>
                                       <div class="smart-calendar-week">
                                           <div class="smart-calendar-week-number"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"></div>
                                           <div class="smart-calendar-cell"> </div>
                                           <div class="smart-calendar-cell"> </div>
                                           <div class="smart-calendar-cell"> </div>
                                       </div>
                                   </div>
                                </div>
                            </div>
                            <div id="dateViewContainer" class="smart-calendar-date-view-container smart-hidden">
                                    <div class="smart-calendar-cell"></div>
                                    <div class="smart-calendar-cell"></div>
                                    <div class="smart-calendar-cell"></div>
                                    <div class="smart-calendar-cell"></div>
                                    <div class="smart-calendar-cell"></div>
                                    <div class="smart-calendar-cell"></div>
                                    <div class="smart-calendar-cell"></div>
                                    <div class="smart-calendar-cell"></div>
                                    <div class="smart-calendar-cell"></div>
                                    <div class="smart-calendar-cell"></div>
                                    <div class="smart-calendar-cell"></div>
                                    <div class="smart-calendar-cell"></div>
                            </div>
                            <div id="monthsSeparator" class="smart-calendar-month-separator"></div>
                            <div id="nextMonthsContainer" class="smart-calendar-next-months-container"></div>
                            <smart-list-box item-height="30" unfocusable id="listViewContainer" selection-mode="one" class="smart-calendar-list-view smart-hidden" animation="simple"></smart-list-box>
                            <div id="animationPanel" class="smart-calendar-animation-panel smart-hidden"></div>
                        </div>
                        <div id="footer" class="smart-calendar-footer smart-hidden">
                            <div id="selectedDatesRange"></div>
                        </div>
                        <smart-tooltip id="tooltip" open-mode="manual" arrow
                                   tooltip-template="[[tooltipTemplate]]"
                                   position="[[tooltipPosition]]"
                                   delay="[[tooltipDelay]]"
                                   disabled="[[disabled]]">
                         </smart-tooltip>
                        <input id="hiddenInput" type="hidden" name="[[name]]">
                    </div>
                </div>`;
    }

    /**
    * Updates the Calendar when a property is changed.
    * @param {string} propertyName The name of the property.
    * @param {number/string} oldValue The previously entered value. Max, min and value are of type Number. The rest are of type String.
    * @param {number/string} newValue The new entered value. Max, min and value are of type Number. The rest are of type String.
    */
    propertyChangedHandler(propertyName, oldValue, newValue) {
        super.propertyChangedHandler(propertyName, oldValue, newValue);

        const that = this;

        switch (propertyName) {
            case 'animationSettings':
                that._applyAnimationSettings();
                break;
            case 'disabled':
            case 'unfocusable':
                that._setFocusable();
                break;
            case 'calendarMode':
                that.displayMode = 'month';
                that._refreshCalendarMode();
                that._setDisplayModeContent();
                break;
            case 'dayNameFormat':
                that._refreshDayOfWeekTitles(that.$.month);
                break;
            case 'dateFormatFunction': {
                let months = that.$.monthsContainer.children;

                for (let m = 0; m < months.length; m++) {
                    months[m].firstElementChild.innerHTML = newValue ? newValue(months[m]._date) :
                        that._monthsNames[months[m]._date.getMonth()] + ' ' + months[m]._date.toLocaleDateString(that.locale, { year: that.yearFormat });
                }

                that._refreshHeaderTitle();
                break;
            }
            case 'displayMode':
                that._setDisplayMode(oldValue, newValue);
                break;
            case 'displayModeView':
                that._applyAnimationSettings(true);
                if (that.displayMode !== 'month') {
                    that._setDisplayModeContent();
                }

                break;
            case 'firstDayOfWeek':
                that._handleMonths();
                that._refreshDayOfWeekTitles();
                break;
            case 'hideTooltipArrow':
                that.$.tooltip.arrow = newValue ? false : true;
                break;
            case 'titleTemplate':
            case 'headerTemplate':
            case 'footerTemplate':
                that._handleLayoutTemplate(that.$[propertyName.split(/[T]/)[0]], newValue);
                if (propertyName === 'titleTemplate') {
                    that._refreshTitle();
                }
                else if (propertyName === 'headerTemplate') {
                    that._refreshHeaderTitle();
                }
                else {
                    that._refreshFooter();
                }

                break;
            case 'importantDates':
                that.importantDates = that._getValidDates(newValue);
                that._refreshImportantDates();
                break;
            case 'importantDatesTemplate':
                that._handleImportantDateTemplate();
                that._refreshImportantDates();
                break;
            case 'locale':
                that._refreshMonthNames();
                that._refreshDayOfWeekTitles();
                that._refreshHeaderTitle();
                that._refreshTitle();
                that._refreshFooter();
                if (that.displayMode && that.displayMode !== 'month') {
                    that._setDisplayModeContent();
                }

                break;
            case 'max':
            case 'min':
                that._validateMinMax(propertyName, newValue, oldValue);
                that._validateSelectedDates();
                that._noFocusingRequired = false;
                that._refreshHeaderElements();
                break;
            case 'months':
                that._handleMonths();
                break;
            case 'monthNameFormat':
                that._refreshCalendarMode();
                that._refreshHeaderTitle();
                break;
            case 'restrictedDates':
                that._setRestrictedDates(that.restrictedDates = that._getValidDates(newValue));
                break;
            case 'rightToLeft':
                that._refreshDayOfWeekTitles();
                that._handleMonths();
                break;
            case 'scrollButtonsNavigationMode':
                that._setScrollButtonsNavigationMode();
                break;
            case 'selectedDates':
                that._clearSelection(true);
                that._validateSelectedDates(that._getValidDates(newValue));
                that._applySelectionMode(true);
                if (that._viewDates) {
                    let lastSelectedDate = that.selectedDates[that.selectedDates.length - 1];

                    !that._isDateInView(lastSelectedDate) ?
                        //true flags indicate eventPrevention and noPropertySynchronization
                        that._handleMonths(lastSelectedDate) : that.selectedDates.map(date => that._selectDate(date, true, true));
                }

                that._refreshFooter();
                that._setWeeksVisibility(that.$.monthsContainer);

                //Update the hidden input
                that.$.hiddenInput.value = that.selectedDates.toString();

                that.$.fireEvent('change', { 'value': that.selectedDates });
                that._refreshTitle();
                break;
            case 'selectionMode':
                that._applySelectionMode();
                that._refreshTitle();
                break;
            case 'view':
                that._refreshTitle();
                break;
            case 'viewSections':
                newValue.indexOf('title') > -1 ? that.$title.removeClass('smart-hidden') : that.$title.addClass('smart-hidden');
                that._refreshTitle();
                newValue.indexOf('header') > -1 ? that.$header.removeClass('smart-hidden') : that.$header.addClass('smart-hidden');
                that._refreshHeaderTitle();
                newValue.indexOf('footer') > -1 ? that.$footer.removeClass('smart-hidden') : that.$footer.addClass('smart-hidden');
                that._refreshFooter();
                that._setFocusable();
                break;
            case 'weeks':
                that._setWeeksVisibility(that.$.monthsContainer);
                break;
            case 'yearFormat':
                that._refreshCalendarMode();
                that._refreshFooter();

                //Set month name
                if (that.months > 1 && that.displayMode === 'month') {
                    let months = that._animationStarted ? that.$.nextMonthsContainer.children : that.$.monthsContainer.children;

                    for (let i = 0; i < months.length; i++) {
                        months[i].firstElementChild.innerHTML = that.dateFormatFunction ? that.dateFormatFunction(months[i]._date) :
                            that._monthsNames[months[i]._date.getMonth()] + ' ' + months[i]._date.toLocaleDateString(that.locale, { year: newValue });
                    }
                }

                that._refreshTitle();
                that._refreshHeaderTitle();
                break;
        }
    }

    /**
    * Calendar ready method.
    */
    ready() {
        super.ready();

        const that = this;

        that._keysPressed = {};

        that._applyAnimationSettings();
        that.importantDates = that._getValidDates(that.importantDates);
        that.restrictedDates = that._getValidDates(that.restrictedDates);

        that._refreshMonthNames();
        that._validateMinMax();

        that._validateSelectedDates(that._getValidDates(that.selectedDates));

        that._handleLayoutTemplate(that.$.title, that.titleTemplate);
        that._handleLayoutTemplate(that.$.header, that.headerTemplate);
        that._handleLayoutTemplate(that.$.footer, that.footerTemplate);
        that._handleImportantDateTemplate();

        that._setFocusable();
        that._refreshDayOfWeekTitles();

        that._applySelectionMode(true);
        that._handleMonths(that.selectedDates.length === 0 ? new Date(new Date().setHours(0, 0, 0, 0)) : that.selectedDates[that.selectedDates.length - 1]);

        that._updateViewSectionsVisibility();
        that._setScrollButtonsNavigationMode();
        that._refreshCalendarMode();
        that._setDisplayMode();
        that._refreshTitle();
        that._refreshFooter();
        that._refreshImportantDates();

        //Since smartDropDownList uses CSS vars for the width/Height of the drop down list, 
        // recalculation of the size of the drop down is needed since the layout has been changed by populating the Calendar with data.
        if (that.$.monthElement) {
            that.$.monthElement._setDropDownSize();
        }

        that._changeEventFired = 0;
    }

    _updateViewSectionsVisibility() {
        const that = this;

        that.viewSections.indexOf('title') > -1 ? that.$title.removeClass('smart-hidden') : that.$title.addClass('smart-hidden');
        that.viewSections.indexOf('header') > -1 ? that.$header.removeClass('smart-hidden') : that.$header.addClass('smart-hidden');
        that.viewSections.indexOf('footer') > -1 ? that.$footer.removeClass('smart-hidden') : that.$footer.addClass('smart-hidden');
    }

    /**
    * Clears the currently selected dates. Public method
    */
    clearSelection() {
        this._clearSelection();
    }

    /**
    * Sets tab index 
    */
    _setFocusable() {
        const that = this;
        let index = that.tabIndex > 0 ? that.tabIndex : 0;

        //HeaderComponents
        function setHeaderElement(component, componentType) {
            if (!componentType) {
                return;
            }

            if (component && component instanceof componentType) {
                if (typeof (component._setFocusable) === 'function' && component.isCompleted) { //If a Smart element is added to the element and its not ready
                    component.unfocusable = index <= -1;
                }
                else {
                    component.setAttribute('tabindex', index);
                }

                return component;
            }
        }

        if (that.disabled || that.unfocusable) {
            index = -1;
        }

        that.$.previousMonthButton = setHeaderElement(that.$.previousMonthButton, Smart.Button);
        that.$.nextMonthButton = setHeaderElement(that.$.nextMonthButton, Smart.Button);
        that.$.nextYearButton = setHeaderElement(that.$.nextYearButton, Smart.Button);
        that.$.previousYearButton = setHeaderElement(that.$.previousYearButton, Smart.Button);
        that.$.monthElement = setHeaderElement(that.$.monthElement, Smart.DropDownList);
        that.$.yearElement = setHeaderElement(that.$.yearElement, HTMLInputElement);

        if (that.viewSections.indexOf('title') > -1) {
            that.$.dateContainer.setAttribute('tabindex', index);
            that.$.yearContainer.setAttribute('tabindex', index);
        }

        that.$.body.setAttribute('tabindex', index);
        that.calendarMode === 'default' ? that.$.dateElement.setAttribute('tabindex', index) : that.$.dateElement.removeAttribute('tabindex');
        that.tabIndex = that.readonly && !that.disabled ? (that.tabIndex > 0 ? that.tabIndex : 0) : index;
    }

    /**
    * Checks for missing modules.
    */
    static get requires() {
        return {
            'Smart.DropDownList': 'smart.dropdownlist.js',
            'Smart.ListBox': 'smart.listbox.js',
            'Smart.RepeatButton': 'smart.button.js',
            'Smart.Tooltip': 'smart.tooltip.js'
        }
    }

    /**
    * Navigates to a month forwards or backwards.
    * @param {number} step The step that will determine which month to navigate to. Negative step means future month. Positive step means past month.
    */
    navigate(step) {
        const that = this;

        step = parseInt(step);

        if (isNaN(step) || step === 0) {
            return false;
        }

        const navigationDate = that._getNextDate(step);

        if (!navigationDate) {
            return false;
        }

        if (that.displayMode !== 'month') {
            if (that.hasAnimation) {
                that.$nextMonthsContainer.addClass('smart-calendar-date-view-container');
                if (that.displayModeView === 'list') {
                    that._setDisplayModeContent(navigationDate);
                }
                else {
                    if (!that._navigationDate || that._navigationDate.getTime() !== navigationDate.getTime()) {
                        that._animateNavigation(navigationDate, step);
                    }
                }
            }
            else {
                that._setDisplayModeContent(navigationDate);
            }

            return true;
        }

        if (that.hasAnimation) {
            that._animateNavigation(navigationDate, step);
            if (that.$nextMonthsContainer.hasClass('smart-date-view-container')) {
                that.$nextMonthsContainer.removeClass('smart-date-view-container');
            }
        }
        else {
            that._handleMonths(navigationDate);

            //Update Header elements
            that._refreshHeaderElements();
            that._refreshHeaderTitle();
        }

        return true;
    }

    /**
     * Selects a single date.
     * @param {any} date - Date object or a string representing a date.
     */
    select(date) {
        const that = this;

        if (typeof (that._viewDates[0]) === 'undefined' || that.selectionMode === 'none' || !date) {
            return;
        }

        date = that._getValidDate(date);

        if (!(date instanceof Date)) {
            return;
        }

        if (that.selectionMode === 'one' && that.selectedDates.map(Number).indexOf(date.getTime()) > -1) {
            return;
        }

        if (date.getTime() < that.min.getTime() || date.getTime() > that.max.getTime()) {
            return;
        }

        if (that.selectionMode === 'one' || that.selectionMode === 'default' || that.selectionMode === 'zeroOrOne') {
            that._clearSelection(true);
        }

        that._selectDate(date);
        if (that.selectedDates.length === 1 && !that._isDateInView(that.selectedDates[0])) {
            that._handleMonths(that.selectedDates[0]);
        }
    }

    /**
    * Selects the current date(today)
    */
    today() {
        const that = this;

        let today = new Date();

        today.setHours(0, 0, 0, 0);

        if (today.getTime() < that.min.getTime() || today.getTime() > that.max.getTime()) {
            today = new Date(that.max);
        }
        else {
            that.selectedDates = [today];
        }

        that._handleMonths(today);
        return today;
    }

    /**
     * Animates the navigation between months
     */
    _animateNavigation(navigationDate, step, completeAnimation) {
        const that = this;

        that._navigationDate = navigationDate;

        function scroll() {
            let endCondition = step > 0 ? that.$.body[that._animationSettings.scrollSize] >= scrollMax : that.$.body[that._animationSettings.scrollSize] === 0,
                coefficient = that._scrollStep / 2; //oldvalue = 20, used to slow down the animation after half of it has passed

            if (endCondition) {
                that._animateNavigationCompleted();
                return;
            }

            if (step > 0 && that.$.body[that._animationSettings.scrollSize] > scrollMax * that._animationSettings.easeThreshold) {
                coefficient = Math.max(that.$.body[that._animationSettings.scrollSize] / that._animationSettings.stepEaseSize,
                    Math.abs(coefficient - (scrollMax - that.$.body[that._animationSettings.scrollSize]) * that._animationSettings.step));
                that._scrollStep = that._scrollStep * that._animationSettings.step + coefficient;
            }
            else if (step < 0 && that.$.body[that._animationSettings.scrollSize] < scrollMax * that._animationSettings.easeThreshold) {
                coefficient = Math.max(that.$.body[that._animationSettings.scrollMax] / that._animationSettings.stepEaseSize,
                    Math.abs(coefficient - that.$.body[that._animationSettings.scrollSize] * that._animationSettings.step));
                that._scrollStep = that._scrollStep * that._animationSettings.step + coefficient;
            }

            that.$.body[that._animationSettings.scrollSize] += step > 0 ? that._scrollStep : -that._scrollStep;
            that._animationId = requestAnimationFrame(scroll);
        }

        if (!that._animationSettings) {
            that._applyAnimationSettings();
        }

        //If the other animation was running, reset the elements
        that.$animationPanel.addClass('smart-hidden');
        that.$.dateViewContainer.style.transform = '';
        that.$.dateViewContainer.style.opacity = '';
        that.$.monthsContainer.style.transform = '';
        that.$.monthsContainer.style.opacity = '';

        const animationTarget = that.displayMode !== 'month' ? that.$.dateViewContainer : that.$.monthsContainer,
            scrollMax = that.$.body[that._animationSettings.scrollMax] - that.$.body[that._animationSettings.size]; //that.$.monthsSeparator[that._animationSettings.size];

        that._scrollStep = that.$.body[that._animationSettings.size] * that._animationSettings.startSpeed; //Start speed

        //reset the days of the month
        if (that._animationStarted) {
            const monthCells = that._getMonthCells(that.$.monthsContainer, that.rightToLeft)

            //reset all item properties
            monthCells.map(cell => {
                that._setCellState(cell, 'restricted', false);
                that._setCellState(cell, 'selected', false);
                that._setCellState(cell, 'otherMonth', false);
                that._setCellState(cell, 'focus', false);
                that._setCellState(cell, 'important', false);
                that._setCellState(cell, 'today', false);
                that._setCellState(cell, 'disabled', false);
                that._setCellState(cell, 'hover', false);
            });
        }

        that._animationStarted = true;

        if (that.displayMode !== 'month') {
            that._setCellState(that._focusedCell, 'focus', false);
            that._setDisplayModeContent(navigationDate, that.$.nextMonthsContainer);
        }
        else {
            that._handleMonths(navigationDate, that.$.nextMonthsContainer);
        }

        if (!completeAnimation) {
            if (step > 0) {
                animationTarget.style.order = 1;
                that.$.nextMonthsContainer.style.order = 3;
                if (!that._animationStarted || (that._animationStarted && that.$.body[that._animationSettings.scrollSize] >
                    that.$.body[that._animationSettings.scrollMax] * that._animationSettings.resetThreshold * 2)) {
                    that.$.body[that._animationSettings.scrollSize] = 0;
                }
            }
            else {
                animationTarget.style.order = 3;
                that.$.nextMonthsContainer.style.order = 1;
                if (!that._animationStarted || (that._animationStarted && that.$.body[that._animationSettings.scrollSize] <
                    that.$.body[that._animationSettings.scrollMax] * that._animationSettings.resetThreshold)) {
                    that.$.body[that._animationSettings.scrollSize] = that.$.body[that._animationSettings.scrollMax];
                }
            }
        }

        cancelAnimationFrame(that._animationId);
        that._animationId = requestAnimationFrame(scroll);
    }

    /**
     * Cancels an undergoing animation and resets everything to normal
     */
    _animateNavigationCompleted() {
        const that = this;
        let animationTarget = that.displayMode !== 'month' ? that.$.dateViewContainer : that.$.monthsContainer, focusedDate, newCells, oldCells;

        cancelAnimationFrame(that._animationId);

        if (that.displayMode !== 'month') {
            let focusedItemIndex = [].slice.call(animationTarget.children).indexOf(that._focusedCell);

            animationTarget.innerHTML = that.$.nextMonthsContainer.innerHTML;

            let focusedItem = animationTarget.children[focusedItemIndex], lastFocusableItem;

            newCells = animationTarget.children;
            oldCells = that.$.nextMonthsContainer.children;

            for (let i = 0; i < newCells.length; i++) {
                newCells[i].value = oldCells[i].value;
                newCells[i].restricted = oldCells[i].restricted;
                newCells[i].important = oldCells[i].important;
                newCells[i].otherMonth = oldCells[i].otherMonth;

                if (newCells[i].value.getTime() <= that.max.getTime()) {
                    lastFocusableItem = newCells[i];
                }
            }

            if (focusedItem && focusedItem.value.getTime() >= that.max.getTime()) {
                focusedDate = lastFocusableItem.value;
            }
            else {
                focusedDate = that._focusedCell ? that._focusedCell.value : undefined;
            }
        }
        else {
            let newMonths = animationTarget.children,
                months = that.$.nextMonthsContainer.children;

            for (let i = 0; i < newMonths.length; i++) {
                newMonths[i]._date = months[i]._date;
                newMonths[i].innerHTML = months[i].innerHTML;
                newCells = that._getMonthCells(newMonths[i]);
                oldCells = that._getMonthCells(months[i]);

                for (let i = 0; i < newCells.length; i++) {
                    newCells[i].value = oldCells[i].value;
                    newCells[i].restricted = oldCells[i].restricted;
                    newCells[i].important = oldCells[i].important;
                    newCells[i].otherMonth = oldCells[i].otherMonth;
                }
            }

            //Synch _selectedCells
            if (that._selectedCells.length > 0) {
                that._selectedCells = that._selectedCells.map(date => date = that._getCellByDate(date.value)).filter(date => {
                    return typeof date !== 'undefined';
                });
            }
        }

        that._focusCell(that._getCellByDate(focusedDate));
        animationTarget.style.order = 1;
        that.$.nextMonthsContainer.style.order = 3;
        that.$.body[that._animationSettings.scrollSize] = 0;
        that._animationStarted = false;
        delete that._navigationDate;
    }

    /**
     * Prepares the settings used for the animation
     * @param {any} displayModeChangeOnly - flag indicating if the change is only in the displayModeView
     */
    _applyAnimationSettings(displayModeChangeOnly) {
        const that = this;

        if (!that.hasAnimation) {
            delete that._animationSettings;
            return;
        }

        that._animationSettings = that.animationSettings ? that.animationSettings : that._animationSettings ? that._animationSettings : {};

        //Settings for the scrolling direction
        if (that.scrollButtonsNavigationMode === 'portrait') {
            that._animationSettings.scrollMax = 'scrollHeight';
            that._animationSettings.size = 'offsetHeight';
            that._animationSettings.scrollSize = 'scrollTop';
        }
        else {
            that._animationSettings.scrollMax = 'scrollWidth';
            that._animationSettings.size = 'offsetWidth';
            that._animationSettings.scrollSize = 'scrollLeft';
        }

        if (displayModeChangeOnly) {
            return;
        }

        //Starting speed
        that._animationSettings.startSpeed = that._animationSettings.startSpeed ? that._animationSettings.startSpeed : 0.2;

        //The threshold where the easing effect begins
        that._animationSettings.easeThreshold = that._animationSettings.easeThreshold ? that._animationSettings.easeThreshold : 0.5;

        //Animation step - determines the scroll interval between animation frames in perecentages
        that._animationSettings.step = that._animationSettings.step ? that._animationSettings.step : 0.25;

        //Animation step ease size - additional ease step coefficient that kicks in when the threshold is passed
        that._animationSettings.stepEaseSize = that._animationSettings.stepEaseSize ? that._animationSettings.stepEaseSize : 200;

        //Threshold used to determine if the animation should start over or continue from it's current state
        that._animationSettings.resetThreshold = that._animationSettings.resetThreshold ? that._animationSettings.resetThreshold : 0.2;
    }

    /**
    * Apply selectionMode to reflect on the current selection.
    */
    _applySelectionMode(initial) {
        const that = this;
        let newDate = [],
            preventEvent = initial ? true : false;

        switch (that.selectionMode) {
            case 'none':
                that._clearSelection(preventEvent);
                return;
            case 'many':
            case 'default':
            case 'oneOrMany':
                if (that.selectedDates.length === 0) {
                    newDate.push(new Date(Math.min(Math.max(that.min.getTime(), new Date().setHours(0, 0, 0, 0)), that.max.getTime())));
                    break;
                }

                return;
            case 'one':
                if (that.selectedDates.length === 1) {
                    return;
                }

                if (that.selectedDates.length > 1) {
                    newDate.push(that.selectedDates[that.selectedDates.length - 1]);
                    that._clearSelection(preventEvent);
                }
                else {
                    newDate.push(new Date(Math.min(Math.max(that.min.getTime(), new Date().setHours(0, 0, 0, 0)), that.max.getTime())));
                }

                break;
            case 'zeroOrOne':
                if (that.selectedDates.length > 1) {
                    newDate.push(that.selectedDates[that.selectedDates.length - 1]);
                    that._clearSelection(preventEvent);
                    break;
                }

                return;
            case 'zeroOrMany':
                return;
            case 'week':
                if (that.selectedDates.length >= 1) {
                    let date = that.selectedDates[that.selectedDates.length - 1];

                    for (let i = 0; i < 8; i++) {
                        newDate.push(new Date(date));
                        date.setDate(date.getDate() + 1);
                    }

                    that._clearSelection(preventEvent);
                }

                break;
        }

        that.selectedDates = [];

        if (initial) {
            that.selectedDates = newDate;
            return;
        }

        const newDates = newDate.length;

        for (let d = 0; d < newDates; d++) {
            that._selectDate(newDate[d], d < newDates - 1);
        }
    }

    /**
    * Clears the currently selected dates.
    */
    _clearSelection(eventPrevented) {
        const that = this;

        if (that._selectedCells) {
            that._selectedCells.map(cell => {
                that._setCellState(cell, 'selected', false);
            });
        }

        that.selectedDates = [];
        that._selectedCells = [];

        if (that.selectionMode === 'many') {
            const months = that.$.monthsContainer.children;

            for (let m = 0; m < months.length; m++) {
                that._getMonthCells(months[m]).map(cell => {
                    that._setCellState(cell, 'hover', false);
                });
            }
        }

        that._refreshFooter();

        //Update the hidden input
        that.$.hiddenInput.value = that.selectedDates.toString();

        if (!eventPrevented) {
            that.$.fireEvent('change', {
                'value': []
            });
        }

        that._refreshTitle();
    }

    _bodyBlurStateHandler(event) {
        const that = this;

        that._bodyStateHandler(event);
    }

    _bodyFocusStateHandler(event) {
        const that = this;

        that._bodyStateHandler(event);
    }

    /**
    * body focus event handler.
    */
    _bodyStateHandler(event) {
        const that = this;

        if (that._focusedCell) {
            if (event.type === 'blur' || (event.type === 'focus' && that._noFocusingRequired)) {
                that._noFocusingRequired = false;
                that._setCellState(that._focusedCell, 'focus', false);
                return;
            }

            if (that.displayMode !== 'month') {
                if (event.type === 'focus' && !that.$.dateViewContainer.querySelector('smart-calendar-cell[focus]')) {
                    that._setCellState(that._focusedCell || that.$.dateViewContainer.querySelector('.smart-calendar-cell'), 'focus', true);
                }
                return;
            }

        }

        if (event.type === 'focus') {
            that._focusCell();
        }
    }



    /**
    * Container mouse wheel event handler.
    */
    _containerWheelHandler(event) {
        const that = this;

        if (that.disabled || that.readonly) {
            return;
        }

        let step, activeElement;

        activeElement = document.activeElement;

        if (that.shadowRoot) {
            activeElement = that.shadowRoot.activeElement;
        }
        else if (that.isInShadowDOM) {
            activeElement = that.getRootNode().activeElement;
        }

        // Header component
        if (that.$.yearElement === activeElement) {
            step = 12;
        }

        if ((activeElement && that.shadowRoot) || activeElement.closest('smart-calendar') === that) {
            step = event.target === that.$.yearElement ? 12 : 1;
        }

        if (!step) {
            return;
        }

        //Prevent window scrolling
        event.preventDefault();

        step = step === 12 ? step : step * that.months;

        event.deltaY > 0 ? that.navigate(-step) : that.navigate(step);
    }

    /**
    * Calendar down event handler.
    */
    _downHandler(event) {
        const that = this;
        let target = event.originalEvent.target;

        that._dragStartDetails = undefined;
        if (that.disabled || that.readonly) {
            return;
        }

        if (that.hasRippleAnimation) {
            if (target.value instanceof Date ||
                (target.parentElement && target.parentElement.classList.contains('smart-calendar-title')) ||
                target.parentElement === that.$.dateElement) {
                Smart.Utilities.Animation.Ripple.animate(target, event.pageX, event.pageY);
            }
        }

        target = event.originalEvent.target.closest('.smart-calendar-header');

        if (event.originalEvent.target.closest('.smart-calendar-year-container') && that.displayMode !== 'decade') {
            if (that.calendarMode === 'classic') {
                return;
            }

            that._showDateView('year');
            return;
        }

        if (event.originalEvent.target.closest('.smart-calendar-date-container') && that.displayMode !== 'month') {
            if (that.calendarMode === 'classic') {
                return;
            }

            that._displayModeHandler(that.displayModeView === 'list' ? that.$.listViewContainer.getItem(that.$.listViewContainer.selectedValues[0]) : that._focusedCell, 'month');
            return;
        }

        if (that._animationStarted) {
            that._animateNavigationCompleted();
        }

        if (Smart.Utilities.Core.isMobile && !(target && target === that.$.header)) {
            that._dragStartDetails = { x: event.pageX, y: event.pageY, startTime: Date.now(), target: event.originalEvent.target };
            return;
        }

        target = event.originalEvent.target;

        if (target.closest('.smart-calendar-week') || target.parentElement === that.$.dateViewContainer) {
            while (target && !(target.value instanceof Date)) {
                target = target.parentElement;
            }

            if (target) {
                that.displayMode !== 'month' ? that._displayModeHandler(target) : that._weeksDownHandler(event, target);
            }

            return;
        }

        if (target.closest('.smart-calendar-month-element')) {
            return;
        }

        event.originalEvent.stopPropagation();

        if (that.displayModeView === 'list' && that.displayMode !== 'month') {
            target = (that.enableShadowDOM ? event.originalEvent.composedPath()[0] : event.originalEvent.target).closest('smart-list-item');

            if (target) {
                that._displayModeHandler(target);
            }

            return;
        }

        //Prevent window scrolling
        const scrollElement = document.scrollingElement || document.documentElement,
            x = scrollElement.scrollLeft,
            y = scrollElement.scrollTop;

        that.focus();

        //Prevent window scrolling
        window.scrollTo(x, y);
    }

    /**
     * Handles the dateViewSelection panels on caledarItem click
     * @param {any} target
     */
    _displayModeHandler(target, newDisplayMode) {
        const that = this;

        if (that._animationStarted) {
            that._animateNavigationCompleted();
        }

        if (target instanceof HTMLElement && target.parentElement.classList.contains('smart-calendar-week') && target.otherMonth) {
            if (that.displayMode === 'decade' && (target.value.getFullYear() < that.min.getFullYear() || target.value.getFullYear() > that.max.getFullYear())) {
                return;
            }
            else if (that.displayMode === 'year' &&
                (((target.value.getFullYear() < that.min.getFullYear()) ||
                    (target.value.getFullYear() === that.min.getFullYear() && target.value.getMonth() < that.min.getMonth())) ||
                    ((target.value.getFullYear() > that.max.getFullYear()) ||
                        (target.value.getFullYear() === that.max.getFullYear() && target.value.getMonth() > that.max.getMonth())))) {
                return;
            }
        }

        newDisplayMode = newDisplayMode ? newDisplayMode : that.displayMode;

        switch (newDisplayMode) {
            case 'year':
                newDisplayMode = 'month';
                break;
            case 'decade':
                newDisplayMode = 'year';
                break;
        }

        if (that.displayMode === newDisplayMode) {
            return;
        }

        const isDisplayModeCHangeEventPrevented = that.$.fireEvent('displayModeChanging', {
            'oldDisplayMode': that.displayMode,
            'newDisplayMode': newDisplayMode
        }).defaultPrevented;

        if (isDisplayModeCHangeEventPrevented) {
            return;
        }

        that.displayMode = newDisplayMode;
        that.$nextMonthsContainer.removeClass('smart-calendar-date-view-container');

        if (target.parentElement === that.$.dateViewContainer && !target.disabled && !target.restricted) {
            that._focusCell(target);
        }

        if (that.hasAnimation) {
            if (target instanceof Smart.ListItem || target.ownerListBox === that.$.listViewContainer) {
                if (target.offsetHeight) {
                    that.$.animationPanel.style.transformOrigin = (target.offsetLeft + target.offsetWidth / 2) + 'px ' +
                        (target.dataItem.top > 0 ? target.offsetTop - target.offsetHeight / 2 : target.offsetTop + target.offsetHeight / 2) + 'px';
                }
                else {
                    that.$.animationPanel.style.transformOrigin = (that.$.listViewContainer.offsetLeft + that.$.listViewContainer.offsetWidth / 2) + 'px ' +
                        (that.$.listViewContainer.offsetTop + that.$.listViewContainer.offsetHeight / 2) + 'px';
                }
            }
            else {
                target = that._focusedCell; //there should always be a focused item
                that.$.animationPanel.style.transformOrigin = (target.offsetLeft + target.offsetWidth / 2) + 'px ' + (target.offsetTop + target.offsetHeight / 2) + 'px';
            }

            that._animateView(1, target);
        }
        else {
            that._setDisplayModeContent(target.value instanceof Date ? target.value : new Date(target.value));
        }
    }

    /**
     * Animate the dateViewContainer
     * @param {any} direction
     * @param {any} target
     */
    _animateView(direction, target) {
        const that = this;

        let date = target instanceof Date ? target : new Date(target.value),
            endCondition = false,
            scale = 1,
            opacity = 1,
            animationTarget, backgroundContainer;

        if (that.displayModeView === 'list') {
            animationTarget = target instanceof Smart.ListItem || target.ownerListBox === that.$.listViewContainer ?
                that.$.listViewContainer : that.displayMode !== 'month' ? that.$.monthsContainer : that.$.listViewContainer;
            backgroundContainer = that.displayMode === 'month' ? that.$.monthsContainer : that.$.listViewContainer;
        }
        //else if (!(target instanceof Smart.cell)) {
        else if (!(target.value instanceof Date)) {
            target = that._focusedCell ? that._focusedCell : that._selectedCells.length > 0 ?
                that._selectedCells[that._selectedCells.length - 1] : that._getCellByDate(new Date());
        }

        if (!animationTarget) {
            animationTarget = target.parentElement === that.$.dateViewContainer ? that.$.dateViewContainer : that.$.monthsContainer;
        }

        if (!backgroundContainer) {
            backgroundContainer = that.displayMode === 'month' ? that.$.monthsContainer : that.$.dateViewContainer;
        }

        backgroundContainer.style.transformOrigin = that.$.animationPanel.style.transformOrigin;

        if (animationTarget instanceof Smart.ListBox) {
            that.$.animationPanel.innerHTML = '';
            that.$.animationPanel.appendChild(animationTarget.cloneNode(false));

            while (animationTarget.$.itemsInnerContainer.firstElementChild) {
                that.$.animationPanel.children[0].appendChild(animationTarget.$.itemsInnerContainer.firstElementChild);
            }
        }
        else {
            that.$.animationPanel.innerHTML = animationTarget.innerHTML;
        }

        that._setDisplayModeContent(date);

        that.$.animationPanel.style.width = that.$.body.offsetWidth + 'px';
        that.$.animationPanel.style.height = that.$.body.offsetHeight + 'px';
        that.$.animationPanel.style.transform = 'scale(1)';
        that.$.animationPanel.style.opacity = 1;

        that.$animationPanel.removeClass('smart-hidden');

        backgroundContainer.style.opacity = '0';
        backgroundContainer.style.transform = 'scale(3.5)';

        //Use the style of the dateViewContainer
        if (animationTarget.$.hasClass('smart-calendar-date-view-container')) {
            that.$animationPanel.addClass('smart-calendar-date-view-container');
        }
        else {
            that.$animationPanel.removeClass('smart-calendar-date-view-container');
        }

        // Refresh the scrollBars and ensure item is visible after the new view has been loaded
        if (animationTarget instanceof Smart.ListBox) {
            const listBox = that.$.animationPanel.children[0];

            listBox.whenReady(function () {
                listBox._refreshLayout();
                listBox.ensureVisible(listBox.selectedValues[0]);
            });
        }

        function animate() {
            if ((direction > 0 && scale >= 3.5) || (direction < 0 && scale <= 0)) {
                endCondition = true;
            }

            if (endCondition) {
                cancelAnimationFrame(that._animationId);
                that.$animationPanel.addClass('smart-hidden');
                that.$.animationPanel.style.transform = '';
                that.$.animationPanel.style.opacity = '';

                backgroundContainer.style.transform = '';
                backgroundContainer.style.opacity = '';
                //that._animationStarted = false;

                if (that.displayMode === 'month') {
                    that.$.body.focus();
                }
                else if (that.displayModeView === 'list') {
                    that.focus();
                }

                return;
            }

            that.$.animationPanel.style.opacity = opacity;
            backgroundContainer.style.opacity = 1 - opacity;
            opacity -= 0.05;

            if (direction > 0) {
                that.$.animationPanel.style.transform = 'scale(' + scale + ')';
                backgroundContainer.style.transform = 'scale(' + Math.min((scale - 1) / 2, 1) + ')';
                scale += 0.125;
            }
            else {
                that.$.animationPanel.style.transform = 'scale(' + Math.max(scale, 0) + ')';
                backgroundContainer.style.transform = 'scale(' + Math.max(1 + scale, 1) + ')';
                scale -= 0.06;
            }

            that._animationId = requestAnimationFrame(animate);
        }

        cancelAnimationFrame(that._animationId);
        that._animationId = requestAnimationFrame(animate);
        //that._animationStarted = true;
    }

    /**
     * Document up handler
     * @param {any} event
     */
    _documentUpHandler(event) {
        const that = this;

        if (!Smart.Utilities.Core.isMobile || !that._dragStartDetails) {
            return;
        }

        const timeNow = Date.now();
        let target = event.originalEvent.target,
            dragging = {};

        if (that.scrollButtonsNavigationMode === 'portrait') {
            dragging.coordinate = 'y';
            dragging.direction = 'pageY';
        }
        else {
            dragging.coordinate = 'x';
            dragging.direction = 'pageX';
        }

        if (Math.abs(that._dragStartDetails[dragging.coordinate] - event[dragging.direction]) <= 10) {
            target = that.displayModeView === 'list' && that.displayMode !== 'month' ? target.closest('smart-list-item') : target;

            if (!target) {
                that._dragStartDetails = undefined;
                return;
            }

            if (that.displayMode !== 'month') {
                that._displayModeHandler(target);

                //Reset scrolling if any occured
                that.scrollButtonsNavigationMode === 'portrait' ? that.$.body.scrollTop = 0 : that.$.body.scrollLeft = 0;
                that._dragStartDetails = undefined;
                return;
            }

            that._weeksDownHandler(event, target);

            if (!that.disableAutoNavigation && target.otherMonth) {
                return;
            }
        }
        else {
            const speed = Math.abs((event[dragging.direction] - that._dragStartDetails[dragging.coordinate]) / (timeNow - that._dragStartDetails.startTime));

            if (speed > 1) {
                const steps = parseInt(speed); //Determine the animation iterations

                for (let i = 0; i < steps; i++) {
                    that.navigate(that._dragStartDetails.step);
                }

                that._dragStartDetails = undefined;
                return;
            }
        }


        if (!that.hasAnimation) {
            that._dragStartDetails = undefined;
            return;
        }

        let scrollMax = (that.displayMode !== 'month' ? that.$.dateViewContainer[that._animationSettings.scrollMax] :
            that.$.monthsContainer[that._animationSettings.scrollMax]) + that.$.monthsSeparator[that._animationSettings.size];

        if ((that._dragStartDetails.step > 0 && that.$.body[that._animationSettings.scrollSize] > scrollMax * that._animationSettings.easeThreshold) ||
            (that._dragStartDetails.step < 0 && that.$.body[that._animationSettings.scrollSize] < scrollMax * that._animationSettings.easeThreshold)) {

            that._animateNavigation(that._dragStartDetails.navigationDate, that._dragStartDetails.step, true);
            that._dragStartDetails = undefined;
            return;
        }

        //Resets the touch scrolling to normal
        that._animateMonthRepositioning(undefined, that._dragStartDetails.step);
        that._dragStartDetails = undefined;
    }

    /**
     * Returns the month to its starting/ending position on touchUp.
     * @param {any} navigationDate - Date to navigate to
     * @param {any} step - animation step
     */
    _animateMonthRepositioning(navigationDate, step) {
        const that = this,
            animationTarget = that.displayMode !== 'month' ? that.$.dateViewContainer : that.$.monthsContainer;

        function scroll() {
            let endCondition = step < 0 ? that.$.body[that._animationSettings.scrollSize] >= scrollMax : that.$.body[that._animationSettings.scrollSize] === 0,
                coefficient = that._scrollStep / 2; //Used to slow down the animation after half of it has passed

            if (endCondition) {
                cancelAnimationFrame(that._animationId);
                animationTarget.style.order = 1;
                that.$.nextMonthsContainer.style.order = 3;
                that.$.body[that._animationSettings.scrollSize] = 0;
                that._animationStarted = false;
                return;
            }

            if (step > 0) {
                coefficient = Math.max(that.$.body[that._animationSettings.scrollMax] / that._animationSettings.stepEaseSize,
                    Math.abs(coefficient - that.$.body[that._animationSettings.scrollSize] * that._animationSettings.step));
                that._scrollStep = that._scrollStep * that._animationSettings.step + coefficient;
            }
            else {
                coefficient = Math.max(that.$.body[that._animationSettings.scrollMax] / that._animationSettings.stepEaseSize,
                    Math.abs(coefficient - (scrollMax - that.$.body[that._animationSettings.scrollSize]) * that._animationSettings.step));
                that._scrollStep = that._scrollStep * that._animationSettings.step + coefficient;
            }

            that.$.body[that._animationSettings.scrollSize] += step < 0 ? that._scrollStep : -that._scrollStep;
            that._animationId = requestAnimationFrame(scroll);
        }

        if (!that._animationSettings) {
            that._applyAnimationSettings();
        }

        const scrollMax = animationTarget[that._animationSettings.scrollMax] + that.$.monthsSeparator[that._animationSettings.size];

        that._scrollStep = that.$.body[that._animationSettings.size] * that._animationSettings.startSpeed; //Start speed

        cancelAnimationFrame(that._animationId);
        that._animationId = requestAnimationFrame(scroll);
        that._animationStarted = true;
    }

    /**
    * Focuses a Calendar day.
    */
    _focusCell(cell) {
        const that = this;

        if (that._focusedCell) {
            that._setCellState(that._focusedCell, 'focus', false);
        }

        if (that.disabled || that.readonly) {
            return;
        }

        if (cell) {
            if (that.displayMode !== 'month') {
                that._setCellState(cell, 'focus', true);
                that._focusedCell = cell;
                return;
            }

            if (cell.disabled || cell.restricted) {
                return;
            }

            that._setCellState(cell, 'focus', true);
            that._focusedCell = cell;
            that._updateWeeksVisibility();
            return;
        }

        if (that.displayMode !== 'month' && that.$.monthsContainer.offsetHeight === 0) {
            return;
        }

        if (that._selectedCells.length > 0) {
            const lastSelectedCell = that._selectedCells[that._selectedCells.length - 1];

            that._setCellState(lastSelectedCell, 'focus', true);

            that._focusedCell = lastSelectedCell;
        }
        else {
            const months = that.$.monthsContainer.children;

            if (that.min.getTime < months[0]._date.getTime()) {
                return;
            }

            const monthCells = that._getMonthCells(months[0], that.rightToLeft);

            for (let d = 0; d < monthCells.length; d++) {
                const cell = monthCells[d];

                if (!cell.otherMonth) {
                    if (cell.disabled || cell.restricted) {
                        continue;
                    }

                    that._focusedCell = cell;
                    break;
                }
            }
        }

        if (that._focusedCell) {
            that._setCellState(that._focusedCell, 'focus', true);

            that._updateWeeksVisibility();
        }
    }

    /**
    * Returns the selected days for a given month.
    */
    _getDays(date, datePool) {
        const datesCount = datePool.length;
        let days = [];

        if (datesCount > 0) {
            for (let d = 0; d < datesCount; d++) {
                if (datePool[d].getFullYear() === date.getFullYear() && datePool[d].getMonth() === date.getMonth()) {
                    days.push(datePool[d].getDate());
                }
            }
        }

        return days;
    }

    /**
    * Get the Calendar Date instance based on day number.
    */
    _getCellByDate(date, monthContainer) {
        const that = this;

        if (!(date instanceof Date)) {
            return;
        }

        if (!monthContainer) {
            monthContainer = that.$.monthsContainer;
        }

        if (that.displayMode !== 'month') {
            if (that.displayModeView === 'list') {
                return;
            }

            let items = arguments[1] ? that.$.nextMonthsContainer.children : that.$.dateViewContainer.children;

            for (let i = 0; i < items.length; i++) {
                if (that.displayMode === 'year') {
                    if (items[i].value.getMonth() === date.getMonth()) {
                        return items[i];
                    }

                    continue;
                }
                else if (items[i].value.getFullYear() === date.getFullYear()) {
                    return items[i];
                }
            }

            return;
        }

        let ownerMonth,
            monthCells,
            months = monthContainer.children;

        for (let i = 0; i < months.length; i++) {
            if (date.getFullYear() === months[i]._date.getFullYear() && date.getMonth() === months[i]._date.getMonth()) {
                ownerMonth = months[i];
                break;
            }
        }

        if (!ownerMonth) {
            return;
        }

        monthCells = that._getMonthCells(ownerMonth);

        for (let i = 0; i < monthCells.length; i++) {
            if (monthCells[i].otherMonth && !monthCells[i].hover) {
                continue;
            }

            if (monthCells[i].value.getMonth() === date.getMonth() && monthCells[i].value.getDate() === date.getDate()) {
                return monthCells[i];
            }
        }
    }

    /**
    * Returns the HTML elements for the days in a month.
    */
    _getMonthCells(month, rightToLeft) {
        const weeks = month.getElementsByClassName('smart-calendar-week');
        let days = [];

        //Get days instances.
        if (rightToLeft) {
            for (let w = 0; w < weeks.length; w++) {
                let weekDays = weeks[w].children;

                for (let d = weekDays.length - 1; d > 0; d--) {
                    days.push(weekDays[d]);
                }
            }
        }
        else {
            for (let w = 0; w < weeks.length; w++) {
                let weekDays = weeks[w].children;

                for (let d = 1; d < weekDays.length; d++) {
                    days.push(weekDays[d]);
                }
            }
        }

        return days;
    }

    /**
    * Returns the number of the week.
    */
    _getWeekNumber(date) {
        //date = new Date(date.getTime());

        const that = this;
        let newYear = new Date(date.getFullYear(), 0, 1),
            dayNumber = Math.round((date.getTime() - newYear.getTime() - (date.getTimezoneOffset() - newYear.getTimezoneOffset()) * 60000) / 86400000) + 1,
            day = newYear.getDay() - that.firstDayOfWeek, //the day of week the year begins on
            weeknum;

        day = day >= 0 ? day : day + 7;

        //if the year starts before the middle of a week
        if (day < 4) {
            weeknum = Math.floor((dayNumber + day - 1) / 7) + 1;

            if (weeknum > 52) {
                newYear = new Date(date.getFullYear() + 1, 0, 1);
                day = newYear.getDay() - that.firstDayOfWeek;
                day = day >= 0 ? day : day + 7;

                //if the next year starts before the middle of the week, it is week #1 of that year
                weeknum = day < 4 ? 1 : 53;
            }
        }
        else {
            weeknum = Math.round((dayNumber + day - 1) / 7);
        }

        return weeknum;
    }

    /**
     * Handle the date selection according to the selectionMode.
     */
    _handleDateSelection(cell) {
        const that = this;

        if (typeof (cell) === 'undefined' || cell.disabled || cell.restricted) {
            return;
        }


        function selectMultipleDates(firstSelectedDate, date) {
            that._clearSelection(true);
            if (firstSelectedDate.getTime() < date.value.getTime()) {
                while (firstSelectedDate.getTime() <= date.value.getTime()) {
                    that._selectDate(firstSelectedDate, true);
                    firstSelectedDate.setDate(firstSelectedDate.getDate() + 1);
                }
            }
            else if (firstSelectedDate.getTime() > date.value.getTime()) {
                while (firstSelectedDate.getTime() >= date.value.getTime()) {
                    that._selectDate(firstSelectedDate, true);
                    firstSelectedDate.setDate(firstSelectedDate.getDate() - 1);
                }
            }
            else {
                that._selectDate(date, true);
            }

            //Update the hidden input
            that.$.hiddenInput.value = that.selectedDates.toString();

            that._refreshFooter();
            that.$.fireEvent('change', { 'value': that.selectedDates });
            that._refreshTitle();
        }

        switch (that.selectionMode) {
            case 'none':
                that._focusCell(cell);
                break;
            case 'one':
            case 'default':
                if (that._keysPressed['Control']) {
                    if (that.selectedDates.length > 1 || (that.selectedDates.length === 1 && !cell.selected)) {
                        that._selectDate(cell.value);
                        return;
                    }

                    that._focusCell(cell);
                    return;
                }

                if (that._keysPressed['Shift']) {
                    selectMultipleDates(new Date(that.selectedDates[0]), cell);
                    return;
                }

                that._clearSelection(true);

                that._selectDate(cell.value, that._selectedCells.indexOf(cell.value) > -1 ? true : false);
                break;
            case 'many': {
                if (that.selectedDates.length === 0) {
                    that._selectDate(cell.value);
                    return;
                }

                const lastSelectedDate = that.selectedDates[that.selectedDates.length - 1];
                let firstSelectedDate = new Date(that.selectedDates[0]);

                if (cell.value.getTime() === firstSelectedDate.getTime() || cell.value.getTime() === lastSelectedDate.getTime()) {
                    that._clearSelection();
                    that._focusCell(cell);
                    return;
                }

                if (that.selectedDates.length > 0) {
                    selectMultipleDates(firstSelectedDate, cell);
                }

                break;
            }
            case 'zeroOrMany':
                that._selectDate(cell.value);
                break;
            case 'oneOrMany':
                if (that.selectedDates.length === 1 && cell.selected) {
                    that._focusCell(cell);
                    return;
                }

                that._selectDate(cell.value);
                break;
            case 'zeroOrOne':
                if (that.selectedDates.length === 1 && cell.selected) {
                    that._selectDate(cell.value);
                    return;
                }

                that._clearSelection(true);
                that._selectDate(cell.value);
                break;
            case 'week': {
                if (cell.selected && (cell.value.getTime() === that.selectedDates[0].getTime() ||
                    cell.value.getTime() === that.selectedDates[that.selectedDates.length - 1].getTime())) {
                    that._clearSelection();
                    that._focusCell(cell);
                    return;
                }

                that._clearSelection(true);

                let date = new Date(cell.value);

                that._selectDate(date);

                for (let i = 1; i < 8; i++) {
                    date.setDate(date.getDate() + 1, i < 7);
                    that._selectDate(date);
                }

                if (!that._isDateInView(date)) {
                    that.navigate(1)
                }

                break;
            }
        }
    }

    /**
    * Set's the Template for Important days.
    */
    _handleImportantDateTemplate() {
        const that = this;

        that._importantDatesTemplate = that._validateTemplate('importantDatesTemplate', that.importantDatesTemplate);

        if (!that._importantDatesTemplate || !that._importantDatesTemplate.content) {
            return;
        }

        let content = that._importantDatesTemplate.content;
        const childrenCount = content.childNodes.length,
            regex = /{{\w+}}/g;
        let bindingString;

        that._bindingDetails = [];
        for (let i = 0; i < childrenCount; i++) {
            bindingString = regex.exec(content.childNodes[i].innerHTML);

            if (bindingString) {
                that._bindingDetails.push({ childNodeIndex: i, bindingString: bindingString[0] });
                return;
            }
        }
    }

    /**
    * Set's the Template for the footer/header.
    */
    _handleLayoutTemplate(selector, newTemplate) {
        const that = this,
            template = that._validateTemplate(selector.$.hasClass('smart-header') ? 'headerTemplate' :
                selector.$.hasClass('smart-calendar-footer') ? 'footerTemplate' : 'titleTemplate', newTemplate);

        if (!template || !template.content) {
            if (typeof newTemplate === 'function') {
                newTemplate(selector, {});
            }

            return;
        }

        if (!that._layoutTemplates) {
            that._layoutTemplates = [];
        }


        let clone = document.importNode(template.content, true);

        selector.innerHTML = '';

        const childrenCount = clone.childNodes.length,
            regex = /{{\w+}}/g;
        let bindingString,
            bindings = [];

        for (let i = 0; i < childrenCount; i++) {
            bindingString = regex.exec(clone.childNodes[i].innerHTML);

            if (bindingString) {
                bindings.push({ childNodeIndex: i, bindingString: bindingString[0] });
            }
        }

        that._layoutTemplates = that._layoutTemplates.filter(template => template.selector !== selector);
        that._layoutTemplates.push({ selector: selector, template: template, bindings: bindings });

        if (that.enableShadowDOM) {
            selector.innerHTML = '<slot></slot>'
            that.appendChild(clone);
            return;
        }

        selector.appendChild(clone);
    }

    /**
    * Handles the hover state of the Calendar items
    */
    _handleCalendarCellHover(event, cell) {
        const that = this;

        if (that._animationStarted) {
            return;
        }

        if (that.displayMode === 'month') {
            if (event.type === 'mouseover' && that.selectionMode === 'many' && that.selectedDates.length > 0) {
                const months = that.$.monthsContainer.children;

                for (let m = 0; m < months.length; m++) {
                    that._getMonthCells(months[m]).map(cell => {
                        that._setCellState(cell, 'hover', false);
                    });
                }

                let firstSelectedDate = new Date(that.selectedDates[0]),
                    targetDate = new Date(cell.value),
                    targetCell = cell;
                const nextCoeff = firstSelectedDate.getTime() > targetDate.getTime() ? -1 : 1,
                    hoverCell = function () {
                        targetCell = that._getCellByDate(firstSelectedDate, that.$.monthsContainer);

                        if (targetCell && !targetCell.selected && !targetCell.restricted) {
                            that._setCellState(targetCell, 'hover', true);
                        }
                    };

                if (firstSelectedDate.getTime() !== targetDate.getTime()) {
                    firstSelectedDate.setDate(firstSelectedDate.getDate() + nextCoeff);
                    while (firstSelectedDate.getTime() !== targetDate.getTime()) {
                        hoverCell();
                        firstSelectedDate.setDate(firstSelectedDate.getDate() + nextCoeff);
                    }

                    hoverCell();
                }
            }
            else {
                that._setCellState(cell, 'hover', false);
            }
        }

        if (event.type === 'mouseover' && !cell.otherMonth) {
            that._setCellState(cell, 'hover', true);
        }
        else {
            that._setCellState(cell, 'hover', false);
        }
    }

    /**
     * Handles the number of months to be drawn.
     */
    _handleMonths(date, monthsContainer) {
        const that = this;
        let months;

        if (!date) {
            date = that._viewDates && that._viewDates.length > 0 ? that._viewDates[0] : new Date();
        }

        date = new Date(Math.min(Math.max(that.min.getTime(), date.getTime()), that.max.getTime()));

        if (!monthsContainer) {
            monthsContainer = that.$.monthsContainer;
        }

        function initializeMonths(monthsContainer) {
            let nextMonth,
                count = monthsContainer.children.length,
                fragment = document.createDocumentFragment();

            for (count; count < that.months; count++) {
                nextMonth = that.$.month.cloneNode(false);
                nextMonth.innerHTML = that.$.month.innerHTML;
                fragment.appendChild(nextMonth);
            }

            return fragment;
        }

        function populateMonths(monthsContainer) {
            let months = monthsContainer.children;

            for (let i = 0; i < months.length; i++) {
                that._setMonth(date, months[i]);
                date.setMonth(date.getMonth() + 1);
            }

            that._setWeeksVisibility(monthsContainer);

            //Update the Header elements
            that._refreshHeaderElements();
            that._refreshHeaderTitle();

            if (that.tooltip) {
                that.$.tooltip.close();
            }

            if (that.$.body === document.activeElement) {
                that._focusCell();
            }
        }

        that._selectedCells = [];

        if (that.hasAnimation) {
            months = that.$.nextMonthsContainer.children;

            if (months.length > 0 && months[0].value instanceof Date) {
                that.$.nextMonthsContainer.innerHTML = '';
            }

            // FF v57/EDGE bug fix using that.$.monthsContainer.childElementCount. Scoping problem with FF and EDGE.
            while (that.$.nextMonthsContainer.childElementCount < that.months) {
                //if (months.length < that.months) {
                that.$.nextMonthsContainer.appendChild(initializeMonths(that.$.nextMonthsContainer));
            }

            // FF v57/EDGE bug fix using that.$.monthsContainer.childElementCount. Scoping problem with FF and EDGE.
            while (that.$.nextMonthsContainer.childElementCount > that.months) {
                //while (months.length > that.months) {
                that.$.nextMonthsContainer.removeChild(months[that.$.nextMonthsContainer.childElementCount - 1]);
            }

            if (arguments[1] === that.$.nextMonthsContainer) {
                populateMonths(that.$.nextMonthsContainer);
                return;
            }
        }

        months = that.$.monthsContainer.children;

        if (months.length > that.months) {
            // FF v57/EDGE bug fix using that.$.monthsContainer.childElementCount. Scoping problem with FF and EDGE.
            while (that.$.monthsContainer.childElementCount > that.months) {
                that.$.monthsContainer.removeChild(months[that.$.monthsContainer.childElementCount - 1]);
                that._viewDates.pop();
            }

            populateMonths(that.$.monthsContainer);
            return;
        }

        if (that.$.monthsContainer.children.length === that.months) {
            populateMonths(that.$.monthsContainer);
            return;
        }

        that._viewDates = [];
        that.$.monthsContainer.appendChild(initializeMonths(that.$.monthsContainer));
        populateMonths(that.$.monthsContainer);
    }

    /**
    * Header change handler.
    */
    _headerChangeHandler(event) {
        const that = this;

        event.stopPropagation();

        if (that.disabled || that.readonly) {
            return;
        }

        if (event.target.ownerElement === that.$.monthElement && that._changeEventFired !== 0) {
            that._changeEventFired--;
            return;
        }

        //Header elements
        if (event.target === that.$.yearElement) {
            that._viewDates[0].setFullYear(Math.min(Math.max(that.min.getFullYear(),
                isNaN(parseInt(that.$.yearElement.value)) ?
                    0 : parseInt(that.$.yearElement.value)), that.max.getFullYear()));
            that._handleMonths(that._viewDates[0]);
        }

        if (that.$.monthElement && (event.target === that.$.monthElement || event.target.ownerElement === that.$.monthElement)) {
            that._handleMonths(new Date(that.$.monthsContainer.children[0]._date.getFullYear(), that.$.monthElement.selectedIndexes[0], 1));
        }
    }

    /**
    * Header click handler.
    */
    _headerClickHandler(event) {
        const that = this;

        if (that.disabled || that.readonly) {
            return;
        }

        let target = event.target.closest('smart-repeat-button');

        if (target && target.disabled) {
            return;
        }

        //Header elements
        switch (target) {
            case that.$.previousMonthButton:
                that._isInteractiveNavigation = true;
                that.navigate(-1 * that.months);
                return;
            case that.$.nextMonthButton:
                that._isInteractiveNavigation = true;
                that.navigate(1 * that.months);
                return;
            case that.$.previousYearButton:
                that.navigate(-12);
                return;
            case that.$.nextYearButton:
                that.navigate(12);
                return;
        }

        if (that.calendarMode === 'classic') {
            that.displayMode = 'month';
            return;
        }

        if (event.target.closest('.smart-calendar-date-element')) {
            if (that._animationStarted) {
                that._animateNavigationCompleted();
            }

            that._isInteractiveNavigation = true;
            that._showDateView();
        }
    }

    /**
     * Sets the displayMode
     */
    _setDisplayMode(oldValue, newValue, animationTarget) {
        const that = this;

        that.$nextMonthsContainer.removeClass('smart-calendar-date-view-container');

        if (arguments.length === 0 || !that.hasAnimation) {
            if (that.calendarMode === 'classic') {
                that.displayMode = 'month';
                return;
            }

            if (that.displayMode !== 'month') {
                that.$monthsContainer.addClass('smart-hidden');

                if (that.$dateViewContainer.hasClass('smart-hidden')) {
                    that.$dateViewContainer.removeClass('smart-hidden');
                }
            }

            if (!that.isCompleted && that.displayMode === 'month') {
                return;
            }

            that._setDisplayModeContent();
            return;
        }

        if (that._animationStarted) {
            that.displayMode = oldValue;
            that._animateNavigationCompleted();
            that.displayMode = newValue;
        }

        if ((oldValue === 'month' && newValue === 'year') || (oldValue === 'year' && newValue === 'decade')) {
            that.displayMode = oldValue;
            that._showDateView(animationTarget ? undefined : that.displayMode);
        }
        else if ((oldValue === 'month' && newValue === 'decade')) {
            that._showDateView(that.displayMode = 'year');
        }
        else {
            let target;

            if (that.displayModeView === 'list') {
                // used because _focusedItem is not a Smart.ListItem but a plain Object 
                target = (that.$.listViewContainer.enableShadowDOM ? that.$.listViewContainer.shadowRoot : that.$.listViewContainer).querySelector('smart-list-item[selected]');
                that.$.animationPanel.style.transformOrigin = (target.offsetLeft + target.offsetWidth / 2) + 'px ' +
                    (target.dataItem.top > 0 ? target.offsetTop - target.offsetHeight / 2 : target.offsetTop + target.offsetHeight / 2) + 'px';
            }
            else {
                target = that._focusedCell; //there should always be a focused item
                that.$.animationPanel.style.transformOrigin = (target.offsetLeft + target.offsetWidth / 2) + 'px ' + (target.offsetTop + target.offsetHeight / 2) + 'px';
            }

            that._animateView(1, target);
        }
    }

    /**
     * Set the content of the default dispalyMode date selection view
     * @param {any} newDate
     */
    _setDisplayModeContent(newDate, nextDateViewContainer) {
        const that = this;
        let selectedDate = !newDate || newDate.toString() === 'Invalid Date' ?
            (that.selectedDates.length > 0 ? that.selectedDates[that.selectedDates.length - 1] : new Date()) : newDate;

        selectedDate.setTime((Math.min(Math.max(selectedDate.getTime(), that.min.getTime()), that.max.getTime())));

        selectedDate.setHours(0, 0, 0, 0);

        const viewDetails = that._prepareView(selectedDate);

        if (!viewDetails) {
            return;
        }

        let dateViewContainer;

        if (nextDateViewContainer) {
            that.$.nextMonthsContainer.innerHTML = that.$.dateViewContainer.innerHTML;
            dateViewContainer = that.$.nextMonthsContainer;
        }
        else {
            dateViewContainer = that.$.dateViewContainer;
        }

        const cells = dateViewContainer.children;
        let selectedCell;

        for (let i = 0; i < cells.length; i++) {
            const cell = cells[i];

            cell.innerHTML = viewDetails.viewContent[i];
            cell.value = viewDetails.dates[i];

            if (that.displayMode === 'year') {
                if (((cell.value.getFullYear() < that.min.getFullYear()) || (cell.value.getFullYear() === that.min.getFullYear() &&
                    cell.value.getMonth() < that.min.getMonth())) ||
                    ((cell.value.getFullYear() > that.max.getFullYear()) || (cell.value.getFullYear() === that.max.getFullYear() &&
                        cell.value.getMonth() > that.max.getMonth()))) {

                    that._setCellState(cell, 'otherMonth', true);
                }
                else {
                    that._setCellState(cell, 'otherMonth', false);
                }

                if (selectedDate.getFullYear() === cell.value.getFullYear() && selectedDate.getMonth() === cell.value.getMonth()) {
                    selectedCell = cell;
                }
            }
            else if (that.displayMode === 'decade') {
                if ((i === 0 || i === cells.length - 1) || cell.value.getFullYear() < that.min.getFullYear() || cell.value.getFullYear() > that.max.getFullYear()) {
                    that._setCellState(cell, 'otherMonth', true);
                }
                else {
                    that._setCellState(cell, 'otherMonth', false);
                }

                if (selectedDate.getFullYear() === cell.value.getFullYear()) {
                    selectedCell = cell;
                }
            }

            that._setCellState(cell, 'hover', false);
        }

        if (selectedCell.otherMonth) {
            for (let i = 0; i < cells.length; i++) {
                if (!cells[i].otherMonth) {
                    selectedCell = cells[i];
                    break;
                }
            }
        }

        if (that._focusedCell) {
            that._setCellState(that._focusedCell, 'focus', false);
        }

        that._focusedCell = selectedCell;
        that._focusCell(that._focusedCell);

        that._refreshHeaderTitle();
        that._refreshHeaderElements();

        that.$.fireEvent('displayModeChange');

        if (that._isInteractiveNavigation) {
            that._isInteractiveNavigation = undefined;
            return;
        }

        that._setCellState(selectedCell, 'focus', true);

        //Need to be called after the new content is loaded completely
        setTimeout(function () {
            that.$.body.focus();
            that._focusCell(that._focusedCell);
        }, 0);
    }

    /**
     * Prepare the data for table displayMode view
     * @param {any} selectedDate
     */
    _prepareView(selectedDate) {
        const that = this;
        let viewContent = [],
            dates = [],
            startYear, offset;

        function getValidDate(year, month, day) {
            let date = new Date(year, month + 1, 0),
                daysInMonth = date.getDate();

            day > daysInMonth ? date.setDate(daysInMonth) : date.setDate(day);
            return date;
        }

        if (that.displayMode === 'month') {
            if (that.$nextMonthsContainer.hasClass('smart-date-view-container')) {
                that.$nextMonthsContainer.removeClass('smart-date-view-container');
            }

            that.$listViewContainer.addClass('smart-hidden');

            if (that.$dateViewContainer.hasClass('smart-visibility-hidden')) {
                that.$dateViewContainer.removeClass('smart-visibility-hidden');
            }

            if (!that._isDateInView(selectedDate)) {
                that._handleMonths(selectedDate);
            }

            if (that.$header.hasClass('smart-hidden')) {
                that.$header.removeClass('smart-hidden');
            }

            if (that.$body.hasClass('smart-calendar-list-view')) {
                that.$body.removeClass('smart-calendar-list-view');
            }

            that.$dateContainer.addClass('smart-calendar-selected');
            that.$yearContainer.removeClass('smart-calendar-selected');

            that.$dateViewContainer.addClass('smart-hidden');
            that.$monthsContainer.removeClass('smart-hidden');

            that._refreshHeaderTitle();
            that.$.body.setAttribute('tabindex', that.tabIndex > 0 ? that.tabIndex : 0);
            that._refreshHeaderElements();
            that.$.body.focus();
            that._focusCell(that._getCellByDate(selectedDate));
            that.$.fireEvent('displayModeChange');
            return;
        }

        if (that.displayModeView === 'list') {
            that._setDisplayModeListContent(selectedDate);
            that.$.fireEvent('displayModeChange');
            return;
        }

        if (that.$header.hasClass('smart-hidden')) {
            that.$header.removeClass('smart-hidden');
        }

        if (that.$dateViewContainer.hasClass('smart-visibility-hidden')) {
            that.$dateViewContainer.removeClass('smart-visibility-hidden');
        }

        that.$listViewContainer.addClass('smart-hidden');
        that.$.body.setAttribute('tabindex', that.tabIndex > 0 ? that.tabIndex : 0);

        if (that.displayMode === 'year') {
            let tempDate = new Date();

            for (let i = 0; i < 12; i++) {
                tempDate = getValidDate(tempDate.getFullYear(), i, tempDate.getDate());
                viewContent.push(tempDate.toLocaleDateString(that.locale, { month: 'short' }));
                dates.push(getValidDate(selectedDate.getFullYear(), i, selectedDate.getDate()));
            }
        }
        else {
            startYear = selectedDate ? selectedDate.getFullYear() : that._viewDates[0].getFullYear(),
                offset = startYear % 10;

            if (offset !== 0) {
                startYear -= offset;
            }

            startYear -= 1;

            for (let i = 0; i < 12; i++) {
                viewContent.push(startYear + '');
                dates.push(new Date(startYear, selectedDate.getMonth(), selectedDate.getDate()));
                ++startYear;
            }
        }

        return { viewContent: viewContent, dates: dates };
    }

    /**
     * Prepare the list DisplayMode view with data
     * @param {any} selectedDate
     */
    _setDisplayModeListContent(selectedDate) {
        const that = this;
        let dataSource = [];

        function getValidDate(year, month, day) {
            let date = new Date(year, month + 1, 0),
                daysInMonth = date.getDate();

            day > daysInMonth ? date.setDate(daysInMonth) : date.setDate(day);
            return date;
        }

        that.$dateViewContainer.addClass('smart-visibility-hidden');

        if (that.$listViewContainer.hasClass('smart-hidden')) {
            that.$body.addClass('smart-calendar-list-view');
            that.$listViewContainer.removeClass('smart-hidden');
            that.$.listViewContainer._setFocusable();
            that.$.body.removeAttribute('tabindex');
        }

        if (that.displayMode === 'year') {
            let tempDate = new Date();

            for (let i = 0; i < 12; i++) {
                tempDate = getValidDate(tempDate.getFullYear(), i, tempDate.getDate());
                dataSource.push({
                    label: tempDate.toLocaleDateString(that.locale, { month: 'short' }), value: getValidDate(selectedDate.getFullYear(), i, selectedDate.getDate()).toDateString()
                });
            }

            that.$yearContainer.removeClass('smart-calendar-selected');
            that.$dateContainer.addClass('smart-calendar-selected');
        }
        else {
            let startYear = that.min.getFullYear(),
                endYear = that.max.getFullYear();

            endYear = Math.min(that.max.getFullYear(), selectedDate.getFullYear() + 10);
            startYear = Math.max(that.min.getFullYear(), endYear - 10);

            for (let i = startYear; i < endYear; i++) {
                dataSource.push({ label: i.toString(), value: new Date(i, selectedDate.getMonth(), selectedDate.getDate()).toDateString() });
            }

            that.$yearContainer.addClass('smart-calendar-selected');
            that.$dateContainer.removeClass('smart-calendar-selected');
        }

        that.$.listViewContainer.dataSource = dataSource;
        that.$.listViewContainer.selectedValues = [selectedDate.toDateString()];
        that.$.listViewContainer.ensureVisible(that.$.listViewContainer.selectedValues[0]);

        that._refreshHeaderTitle();
        that._refreshHeaderElements();
        that.focus();
    }

    /**
    * Checks if date is in view.
    * @param {any} date - Date object
    */
    _isDateInView(date) {
        const that = this;

        if (!date) {
            return false;
        }

        for (let d = 0; d < that._viewDates.length; d++) {
            if (date.getFullYear() === that._viewDates[d].getFullYear() && date.getMonth() === that._viewDates[d].getMonth()) {
                let cell = that._getCellByDate(date, that._animationStarted ? that.$.nextMonthsContainer : that.$.monthsContainer);

                if (!cell) {
                    return;
                }

                return cell.otherMonth || cell.classList.contains('smart-visibility-hidden') ? false : true;
            }
        }

        return false;
    }

    /**
    * Calendar keyDown event handler.
    */
    _keyDownHandler(event) {
        const that = this;

        if (that.disabled || that.readonly) {
            return;
        }

        const activeElement = (that.shadowRoot || that.getRootNode()).activeElement || document.activeElement;

        //Smart.RepeatButton throws click event, so it's not necessary to handle them
        switch (activeElement) {
            //Header elements
            case that.$.yearElement:
                if (event.key === 'Escape') {
                    that._refreshHeaderElements();
                }

                break;
            case that.$.dateElement:
                if (that.calendarMode === 'default' && event.key === ' ' || event.key === 'Enter') {
                    event.preventDefault();
                    that._isInteractiveNavigation = true;
                    that._showDateView();
                    return;
                }

                if (!that._focusedCell) {
                    that._focusCell();
                }

                if (event.key.indexOf('Arrow') > -1 && that.$.dateElement === activeElement) {
                    that.$.body.focus();
                }

                that._navigateDays(event);
                break;
            case that.$.body:
                if (event.key === ' ') {
                    event.preventDefault();
                }

                //if (event.key === 'Enter') {
                //    event.stopPropagation();
                //}

                that._navigateDays(event);
                break;
            case that.$.yearContainer:
                if ((event.key === ' ' || event.key === 'Enter') && that.displayMode !== 'decade') {
                    //Prevent window scrolling
                    event.preventDefault();
                    that._isInteractiveNavigation = true;
                    that._showDateView('year');
                }

                if (event.key.indexOf('Arrow') > -1) {

                    //Prevent window scrolling
                    event.preventDefault();
                    if (!that._focusedCell) {
                        that._focusCell();
                    }

                    if (that.displayMode !== 'month' && that.displayModeView === 'list') {
                        that.focus();
                        that.$.listViewContainer._handleKeyStrokes(event.key);
                        return;
                    }

                    that._navigateDays(event);
                }

                break;
            case that.$.dateContainer:
                if ((event.key === ' ' || event.key === 'Enter') && that.displayMode !== 'month') {

                    //Prevent window scrolling
                    event.preventDefault();
                    that._displayModeHandler(that.displayModeView === 'list' ?
                        that.$.listViewContainer.getItem(that.$.listViewContainer.selectedValues[0]) : that._focusedCell, 'month');
                }

                if (event.key.indexOf('Arrow') > -1) {
                    if (!that._focusedCell) {
                        that._focusCell();
                    }

                    if (that.displayMode !== 'month' && that.displayModeView === 'list') {
                        that.focus();
                        that.$.listViewContainer._handleKeyStrokes(event.key);
                        return;
                    }

                    that._navigateDays(event);
                }
                break;
            default:
                if (that.displayMode !== 'month' && that.displayModeView === 'list') {
                    if (['Arrow', 'End', 'Home', 'Page'].indexOf(event.key)) {
                        //Prevent window scrolling
                        event.preventDefault();
                    }

                    if (event.key === ' ' || event.key === 'Enter' || (event.ctrlKey && (event.key === 'ArrowUp' || event.key === 'ArrowDown'))) {
                        that._navigateDays(event);
                        return;
                    }

                    that.$.listViewContainer._handleKeyStrokes(event.key);
                    return;
                }

                if (event.key.indexOf('Arrow') > -1) {
                    if (!that._focusedCell) {
                        that._focusCell();
                    }

                    that._navigateDays(event);
                }

                break;
        }
    }

    /**
     * ListBox in the listViewContainer change event handler
     * @param {any} event
     */
    _listViewContainerChangeEventHandler(event) {
        event.stopPropagation();
    }

    /**
     * ListBox (listView) Key down event handler
     * @param {any} event
     */
    _listViewContainerKeyDownHandler(event) {
        const that = this;

        if (that.displayModeView !== 'list') {
            return;
        }

        if (event.key === ' ' || event.key === 'Enter') {
            that._navigateDays(event);
        }
    }

    /**
     * Show the month/year/decade selection view
     */
    _showDateView(newDisplayMode) {
        const that = this;

        newDisplayMode = newDisplayMode ? newDisplayMode : that.displayMode;

        switch (newDisplayMode) {
            case 'month':
                newDisplayMode = 'year';
                break;
            case 'year':
                newDisplayMode = 'decade';
                break;
        }

        if (that.displayMode === newDisplayMode) {
            return;
        }

        const isDisplayModeCHangeEventPrevented = that.$.fireEvent('displayModeChanging', {
            'oldDisplayMode': that.displayMode,
            'newDisplayMode': newDisplayMode
        }).defaultPrevented;

        if (isDisplayModeCHangeEventPrevented) {
            return;
        }

        that.displayMode = newDisplayMode;

        //Needed for animation, even if its not enabled
        let target;

        if (arguments[0] && that.displayModeView === 'list' && that.displayMode !== 'month' && that.$.listViewContainer.items.length > 0) {
            target = that.$.listViewContainer.getItem(that.$.listViewContainer.selectedValues[0]);
            if (target.offsetHeight) {
                that.$.animationPanel.style.transformOrigin = (target.offsetLeft + target.offsetWidth / 2) + 'px ' +
                    (target.dataItem.top > 0 ? target.offsetTop - target.offsetHeight / 2 : target.offsetTop + target.offsetHeight / 2) + 'px';
            }
            else {
                that.$.animationPanel.style.transformOrigin = (that.$.listViewContainer.offsetLeft + that.$.listViewContainer.offsetWidth / 2) + 'px ' +
                    (target.dataItem.top > 0 ? target.offsetTop - target.offsetHeight / 2 : that.$.listViewContainer.offsetTop + that.$.listViewContainer.offsetHeight / 2) + 'px';
            }
        }
        else {
            if (!that._focusedCell) {
                that._focusCell();
            }

            target = that._focusedCell;
            that.$.animationPanel.style.transformOrigin = (target.offsetLeft + target.offsetWidth / 2) + 'px ' + (target.offsetTop + target.offsetHeight / 2) + 'px';
        }

        that.$monthsContainer.addClass('smart-hidden');
        if (that.$dateViewContainer.hasClass('smart-hidden')) {
            that.$dateViewContainer.removeClass('smart-hidden');
        }

        if (that.displayMode === 'decade') {
            that.$yearContainer.addClass('smart-calendar-selected');
            that.$dateContainer.removeClass('smart-calendar-selected');
        }

        if (that.hasAnimation) {
            that._animateView(-1, target);
            return;
        }

        that._setDisplayModeContent(that._focusedCell ? that._focusedCell.value : that._viewDates[0]);
    }

    /**
     * KeyUp event handler.
     */
    _keyUpHandler(event) {
        const that = this;

        if (that.disabled || that.readonly) {
            return;
        }

        if (that.selectionMode === 'default' && (event.key === 'Shift' || event.key === 'Control')) {
            that._keysPressed[event.key] = false;
        }
    }

    /**
    * Calendar mouse over/out events handler.
    */
    _mouseEventsHandler(event) {
        const that = this;

        if (that.disabled || that.readonly) {
            return;
        }

        if (event.type === 'mouseenter') {
            that.$.setAttributeValue('hover', true);
            return;
        }
        else if (event.type === 'mouseleave') {
            that.$.setAttributeValue('hover', false);

            if (that.tooltip) {
                that.$.tooltip.close();
            }

            return;
        }

        const target = that.enableShadowDOM ? event.composedPath()[0] : event.target;

        if (!target.closest('.smart-calendar-week')) {
            if (that.tooltip) {
                that.$.tooltip.close();
            }

            return;
        }

        let cell = target, isItemChild;

        while (cell && !(cell.value instanceof Date)) {
            cell = cell.parentElement;
            isItemChild = true;
        }

        if (!cell) {
            return;
        }

        if (!Smart.Utilities.Core.isMobile) {
            that._handleCalendarCellHover(event, cell);
        }

        if (that.tooltip) {
            if (cell.hasAttribute('important')) {
                if (event.type === 'mouseover') {
                    that.$.tooltip.open();
                    that.tooltipTemplate ? that.$.tooltip.value = cell.value + '' :
                        that.$.tooltip.innerHTML = that.$.tooltip.innerHTML.trim().length === 0 ? 'Important day!' : that.$.tooltip.innerHTML;
                    that.$.tooltip.selector = cell;

                    if (that.$.tooltip.selector !== cell) {
                        that.$.tooltip.close();
                    }

                    return;
                }
            }

            if (isItemChild || that.$.tooltip.selector === cell) {
                return;
            }

            that.$.tooltip.close();
        }
    }

    /**
     * Calendar move event handler
     */
    _moveHandler(event) {
        const that = this;

        if (!Smart.Utilities.Core.isMobile || !that._dragStartDetails || (that.displayModeView === 'list' && that.displayMode !== 'month')) {
            return;
        }

        event.originalEvent.preventDefault();
        event.preventDefault();
        event.stopPropagation();

        const details = { x: Math.round(event.pageX), y: Math.round(event.pageY) };
        let step;

        if (that.scrollButtonsNavigationMode === 'portrait') {
            step = details.y > that._dragStartDetails.y ? -1 * that.months : 1 * that.months;
        }
        else {
            step = details.x < that._dragStartDetails.x ? 1 * that.months : -1 * that.months;
        }

        const navigationDate = that._getNextDate(step);

        if (!navigationDate) {
            return;
        }

        that._dragStartDetails.step = step;
        that._dragStartDetails.navigationDate = new Date(navigationDate);

        if (!that.hasAnimation) {
            return;
        }

        let animationTarget;

        if (that.displayMode !== 'month') {
            that.$nextMonthsContainer.addClass('smart-calendar-date-view-container');
            animationTarget = that.$.dateViewContainer;
            if (!(that.$.nextMonthsContainer.children[0].value instanceof Date) ||
                that.$.nextMonthsContainer.children[1].value.getFullYear() !== navigationDate.getFullYear()) {
                that._setDisplayModeContent(navigationDate, that.$.nextMonthsContainer);
            }
        }
        else {
            if (that.$nextMonthsContainer.hasClass('smart-calendar-date-view-container')) {
                that.$nextMonthsContainer.removeClass('smart-calendar-date-view-container');
            }

            animationTarget = that.$.monthsContainer;
            if (!that.$.nextMonthsContainer.children[0]._date || that.$.nextMonthsContainer.children[0]._date.getTime() !== navigationDate.getTime()) {
                let nextMonths = that.$.nextMonthsContainer.children;

                for (let i = 0; i < nextMonths.length; i++) {
                    navigationDate.setMonth(that._dragStartDetails.navigationDate.getMonth() + i);
                    that._setMonth(navigationDate, nextMonths[i], true);
                }
            }
        }

        if (step < 0) {
            animationTarget.style.order = 3;
            that.$.nextMonthsContainer.style.order = 1;
            that.$.body[that._animationSettings.scrollSize] = that.$.body[that._animationSettings.scrollMax];
        }
        else {
            animationTarget.style.order = 1;
            that.$.nextMonthsContainer.style.order = 3;
            that.$.body[that._animationSettings.scrollSize] = 0;
        }

        const direction = that.scrollButtonsNavigationMode === 'portrait' ? 'y' : 'x';

        if (Math.abs(that._dragStartDetails[direction] - details[direction]) > 10) {
            that.$.body[that._animationSettings.scrollSize] += -(details[direction] - that._dragStartDetails[direction]) * 2;
        }
    }

    /**
     * Get next navigation date
     * @param {any} step
     */
    _getNextDate(step) {
        const that = this;
        let targetDate;

        if (that.displayMode !== 'month') {
            let coefficient;
            const focusedDateYear = that._focusedCell && that._focusedCell.value.getFullYear();

            if (that.displayModeView === 'list') {
                targetDate = new Date(that.$.listViewContainer.items[0].value);
            }
            else {
                let container = that._animationStarted ? that.$.nextMonthsContainer : that.$.dateViewContainer;

                targetDate = new Date(that.displayMode === 'year' ? container.children[0].value : container.children[1].value);
            }

            coefficient = that.displayMode === 'year' ? 1 : step !== 0 ? 10 : 1;
            targetDate.setFullYear(targetDate.getFullYear() + (step > 0 ? coefficient : -coefficient));

            if (targetDate.getTime() < that.min.getTime()) {
                targetDate = that.min;
            }

            if (targetDate.getTime() > that.max.getTime()) {
                targetDate = that.max;
            }

            if (that.displayMode === 'year') {
                if (targetDate.getFullYear() < that.min.getFullYear() || targetDate.getFullYear() > that.max.getFullYear() || focusedDateYear === targetDate.getFullYear()) {
                    return;
                }
            }
            else if (targetDate.getFullYear() < that.min.getFullYear() || targetDate.getFullYear() > that.max.getFullYear() || focusedDateYear === targetDate.getFullYear()) {
                return;
            }
        }
        else {
            let dateInView = that._viewDates[0];

            targetDate = new Date(dateInView);
            targetDate.setDate(1);
            targetDate.setMonth(targetDate.getMonth() + step);
            targetDate.setTime((Math.min(Math.max(targetDate.getTime(), that.min.getTime()), that.max.getTime())));

            if (dateInView.getMonth() === targetDate.getMonth() && dateInView.getFullYear() === targetDate.getFullYear()) {
                return;
            }
        }

        return targetDate;
    }

    /**
    * Keyboard navigation between days in a month.
    */
    _navigateDays(event) {
        const that = this;
        let iterations = event.key === 'ArrowUp' || event.key === 'ArrowDown' ? 7 : 1,
            coefficient = event.key === 'ArrowUp' || event.key === 'ArrowLeft' || event.key === 'PageUp' ? -1 : 1;

        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowLeft':
            case 'ArrowDown':
            case 'ArrowRight':
                if (!that._handleArrowKeys(event, iterations, coefficient)) {
                    return;
                }

                break;
            case ' ':
            case 'Enter':
                if (that.displayMode !== 'month') {

                    that._displayModeHandler(that.displayModeView === 'list' ? that.$.listViewContainer.getItem(that.$.listViewContainer.selectedValues[0]) : that._focusedCell);
                    return;
                }

                break;
            case 'Control':
            case 'Shift':
                if (that.selectionMode === 'default') {
                    that._keysPressed[event.key] = true;
                }

                return;
            case 'Home':
            case 'End': {
                //Prevent window scrolling
                event.preventDefault();

                let targetDate,
                    getTargetMonthDay = function (days) {
                        if (event.key === 'Home') {
                            for (let d = 0; d < days.length; d++) {
                                if (!days[d].otherMonth && (!days[d].disabled || !days[d].restricted)) {
                                    return days[d];
                                }
                            }
                        }
                        else {
                            for (let d = days.length - 1; d >= 0; d--) {
                                if (!days[d].otherMonth && (!days[d].disabled || !days[d].restricted)) {
                                    return days[d];
                                }
                            }
                        }
                    };

                if (that.displayMode !== 'month') {
                    targetDate = getTargetMonthDay(that.$.dateViewContainer.children);
                }
                else {
                    targetDate = getTargetMonthDay(that._getMonthCells(that._focusedCell.closest('.smart-calendar-month'), that.rightToLeft));
                }

                if (!targetDate) {
                    return;
                }

                that._focusCell(targetDate);

                if (that.displayMode !== 'month') {
                    return;
                }

                break;
            }
            case 'PageUp':
            case 'PageDown': {
                if (!that._handlePageUpDownKeys(event, coefficient)) {
                    return;
                }

                break;
            }
            default:
                return;
        }

        if (that._focusedCell) {
            that._handleDateSelection(that._focusedCell);
        }
    }

    /**
     * Handles the arrow keys
     * @param {any} event 
     * @param {any} iterations - number of days to iterate over
     * @param {any} coefficient - a flag indicating if the next date is in the future or in the past
     */
    _handleArrowKeys(event, iterations, coefficient) {
        const that = this;
        let targetDate;

        if (that.displayMode === 'month' && !that._animationStarted) {
            that.$.body.focus();
        }

        if (!that._focusedCell) {
            that._focusCell(that._getCellByDate(new Date()));
        }

        if (event.altKey) {
            return;
        }

        if (event.ctrlKey) {
            if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                let displayMode;

                switch (that.displayMode) {
                    case 'month':
                        displayMode = event.key === 'ArrowDown' ? 'month' : 'year';
                        break;
                    case 'year':
                        displayMode = event.key === 'ArrowDown' ? 'month' : 'decade';
                        break;
                    case 'decade':
                        displayMode = event.key === 'ArrowDown' ? 'year' : 'decade';
                        break;
                }

                if (displayMode !== that.displayMode) {
                    const oldValue = that.displayMode;

                    //Change displayMode 
                    that.displayMode = displayMode;
                    that._setDisplayMode(oldValue, displayMode, oldValue === 'month');

                    //KeyUpHandle isn't being thrown when displayModeView is 'list'
                    if (that._keysPressed) {
                        delete that._keysPressed['Control'];
                    }

                }
            }

            return;
        }

        //Prevent window scrolling
        event.preventDefault();

        if (that.rightToLeft && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
            coefficient *= -1;
        }

        if (that.displayMode !== 'month') {
            let items = that._animationStarted ? that.$.nextMonthsContainer.children : that.$.dateViewContainer.children;

            iterations = event.key === 'ArrowUp' || event.key === 'ArrowDown' ? 4 : 1;

            if (that.displayMode === 'year') {
                const targetMonth = that._focusedCell.value.getMonth() + coefficient * iterations;
                let lastDayOfMonth = new Date(that._focusedCell.value.getFullYear(), targetMonth + 1, 0);

                if (that._focusedCell.value.getDate() <= lastDayOfMonth.getDate()) {
                    lastDayOfMonth = that._focusedCell.value;
                }

                targetDate = new Date(that._focusedCell.value.getFullYear(), targetMonth, lastDayOfMonth.getDate());
            }
            else {
                targetDate = new Date(that._focusedCell.value.getFullYear() + coefficient * iterations,
                    that._focusedCell.value.getMonth(), that._focusedCell.value.getDate());
            }

            if (that.displayMode === 'year') {
                if (((targetDate.getFullYear() < that.min.getFullYear()) ||
                    (targetDate.getFullYear() === that.min.getFullYear() && targetDate.getMonth() < that.min.getMonth())) ||
                    ((targetDate.getFullYear() > that.max.getFullYear()) ||
                        (targetDate.getFullYear() === that.max.getFullYear() && targetDate.getMonth() > that.max.getMonth()))) {
                    return;
                }

                if (targetDate.getTime() > items[items.length - 1].value.getTime()) {
                    that.navigate(1);
                }
                else if (targetDate.getTime() < items[0].value.getTime()) {
                    that.navigate(-1);
                }
            }
            else {
                if (targetDate.getFullYear() < that.min.getFullYear() || targetDate.getFullYear() > that.max.getFullYear()) {
                    return;
                }

                if (targetDate.getFullYear() < items[1].value.getFullYear() || targetDate.getFullYear() > items[10].value.getFullYear()) {
                    let focusedDate = that._focusedCell;

                    that.navigate(coefficient);

                    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                        if (focusedDate === items[3] || focusedDate === items[4] || focusedDate === items[7] || focusedDate === items[8]) {
                            targetDate.setFullYear(targetDate.getFullYear() + coefficient * 2);
                        }
                        else {
                            targetDate.setFullYear(targetDate.getFullYear() - coefficient * 2);
                        }
                    }
                }
            }

            that._focusCell(that._getCellByDate(targetDate, that._animationStarted ? that.$.nextMonthsContainer : undefined));
            return;
        }

        const restrictedDates = that.restrictedDates.map(Number);

        targetDate = new Date(that._focusedCell.value.getFullYear(), that._focusedCell.value.getMonth(),
            that._focusedCell.value.getDate() + coefficient * iterations, 0, 0, 0, 0);

        while (restrictedDates.indexOf(targetDate.getTime()) > -1) {
            targetDate.setDate(targetDate.getDate() + coefficient);
        }

        if (targetDate.getTime() < that.min.getTime() || targetDate.getTime() > that.max.getTime()) {
            return;
        }

        if (!that._isDateInView(targetDate)) {
            that.navigate(coefficient * that.months);
        }

        let cell = that._getCellByDate(targetDate, that._animationStarted ? that.$.nextMonthsContainer : undefined);

        that._focusCell(cell);

        if (['zeroOrMany', 'oneOrMany', 'none', 'many', 'week'].indexOf(that.selectionMode) > -1) {
            return;
        }

        return true;
    }

    _handlePageUpDownKeys(event, coefficient) {
        const that = this;

        //Prevent window scrolling
        event.preventDefault();

        let targetDate;

        if (that.displayMode !== 'month') {
            targetDate = that._focusedCell;

            if (!that.navigate(coefficient)) {
                return;
            }

            while (targetDate && targetDate.classList.contains('smart-visibility-hidden')) {
                targetDate = targetDate.previousElementSibling === null ? targetDate.nextElementSibling : targetDate.previousElementSibling;
            }

            that._focusCell(targetDate);

            if (that.hasAnimation && that.displayMode === 'decade') {
                that._focusedCell.value.setFullYear(that._focusedCell.value.getFullYear() + 10 * coefficient);
            }

            return;
        }

        targetDate = new Date(that._focusedCell.value.getFullYear(), that._focusedCell.value.getMonth() + coefficient, 1, 0, 0, 0, 0);

        let daysInMonth = new Date(targetDate.getFullYear(), targetDate.getMonth() + 1, 0).getDate();

        if (that._focusedCell.value.getDate() > daysInMonth) {
            targetDate.setDate(daysInMonth);
        }
        else {
            targetDate.setDate(that._focusedCell.value.getDate());
        }

        if (!that._isDateInView(targetDate)) {
            that.navigate(coefficient * that.months);
        }

        if (that._animationStarted) {
            that._focusCell(that._getCellByDate(targetDate, that.$.nextMonthsContainer));
        }
        else {
            that._focusCell(that._getCellByDate(targetDate));
        }

        return true;
    }

    /**
    * Selects/Unselects a day. Accepts a Smart.cell/ Day number/ Date object.
    */
    _selectDate(date, eventPrevented, noPropSynch) {
        const that = this;

        if (typeof (that._viewDates) === 'undefined' || that.selectionMode === 'none') {
            return;
        }

        let selectedDates = that.selectedDates.slice(0);

        let cell = that._getCellByDate(date, that._animationStarted ? that.$.nextMonthsContainer : that.$.monthsContainer);

        if (cell) {
            that._selectCell(cell);
        }

        let index;

        date = new Date(date);
        date.setHours(0, 0, 0, 0);

        index = selectedDates.map(Number).indexOf(date.getTime());

        //Date selection
        if (that.restrictedDates.map(Number).indexOf(date.getTime()) > -1 || date.getTime() < that.min.getTime() || date.getTime() > that.max.getTime()) {
            return;
        }

        index > -1 ? selectedDates.splice(index, 1) : selectedDates.push(date);

        if (!noPropSynch) {
            that.selectedDates = selectedDates;
        }

        that._refreshFooter();

        // Update the hidden input
        that.$.hiddenInput.value = that.selectedDates.toString();

        if (!eventPrevented) {
            that.$.fireEvent('change', {
                'value': [date]
            });
        }

        that._refreshTitle();
    }

    /**
     * Selects a day from the current month
     * @param {any} day - Smart.cell instance
     */
    _selectCell(cell) {
        const that = this;

        if (!cell || that.restrictedDates.map(Number).indexOf(cell.value.getTime()) > -1 ||
            (that.disableAutoNavigation && false === cell.otherMonth) ||
            cell.value.getTime() < that.min.getTime() || cell.value.getTime() > that.max.getTime()) {
            return;
        }

        const index = that._selectedCells.indexOf(cell);

        if (index > -1) {
            that._setCellState(cell, 'selected', false);
            that._selectedCells.splice(index, 1);
        }
        else {
            that._setCellState(cell, 'selected', true);
            that._selectedCells.push(cell);
        }

        that._focusCell(cell);
    }

    /**
    * Sets the names of the weeks.
    */
    _refreshDayOfWeekTitles() {
        const that = this;
        let days = [],
            date = new Date(),
            dayObject;

        function formatDayName(date) {
            let result;

            if (that.dayNameFormat === 'firstTwoLetters') {
                result = new Intl.DateTimeFormat(that.locale, { weekday: 'long' }).format(date);
                result = result.charCodeAt(0) === 8206 ? result.substring(1, 3) : result.substring(0, 2);
            }
            else {
                result = new Intl.DateTimeFormat(that.locale, { weekday: that.dayNameFormat }).format(date);
            }

            return result;
        }

        for (let i = 1; i < 8; i++) {
            date.setDate(i);
            dayObject = { number: date.getDay(), name: formatDayName(date) };
            days.push(dayObject);
        }

        days.sort((a, b) => (a.number > b.number ? 1 : -1));

        const months = that.$.monthsContainer.children;
        let dayNameHolders, counter;

        for (let m = 0; m < months.length; m++) {
            dayNameHolders = months[m].getElementsByClassName('smart-calendar-week-titles')[0].children;
            counter = that.firstDayOfWeek > 6 ? 0 : that.firstDayOfWeek;  //Validates firstDayOfWeek

            if (that.rightToLeft) {
                for (let d = dayNameHolders.length - 1; d >= 0; d--) {
                    dayNameHolders[d].textContent = days[counter++].name;
                    counter = counter > 6 ? 0 : counter;
                }
            }
            else {
                for (let d = 1; d < dayNameHolders.length; d++) {
                    dayNameHolders[d].textContent = days[counter++].name;
                    counter = counter > 6 ? 0 : counter;
                }
            }
        }

        //Update the weekTitles for nextMonths
        if (that.hasAnimation) {
            const weekTitles = that.$.monthsContainer.getElementsByClassName('smart-calendar-week-titles')[0].innerHTML,
                nextMonthWeekTitleContainers = that.$.nextMonthsContainer.getElementsByClassName('smart-calendar-week-titles');

            for (let i = 0; i < nextMonthWeekTitleContainers.length; i++) {
                nextMonthWeekTitleContainers[i].innerHTML = weekTitles;
            }
        }
    }

    /**
     * Sets the header mode
     */
    _refreshCalendarMode() {
        const that = this;

        if (that.headerTemplate) {
            return;
        }

        that._refreshMonthNames();

        if (that.calendarMode === 'default') {
            that.$classicHeaderDate.addClass('smart-hidden');
            that.$defaultHeaderDate.removeClass('smart-hidden');

            const sortedDates = that._viewDates.slice(0).sort((a, b) => a.getTime() - b.getTime()),
                firstDateInView = sortedDates[0],
                lastDateInView = sortedDates[sortedDates.length - 1];

            firstDateInView.setDate(2);

            let date = firstDateInView.toLocaleDateString(that.locale, { year: that.yearFormat, month: that.monthNameFormat });

            if (that.months > 1) {
                lastDateInView.setDate(2);
                date += ' - ' + lastDateInView.toLocaleDateString(that.locale, { year: that.yearFormat, month: that.monthNameFormat });
            }

            that.$.defaultHeaderDate.innerHTML = date;

            if (!that.unfocusable) {
                that.$.dateElement.setAttribute('tabindex', that.tabIndex > 0 ? that.tabIndex : 0);
            }
        }
        else {
            that.$defaultHeaderDate.addClass('smart-hidden');
            that.$classicHeaderDate.removeClass('smart-hidden');
            that.$.dateElement.removeAttribute('tabindex');
        }
    }

    /**
    * Updates the footer with the latest date selection
    */
    _refreshFooter() {
        const that = this;

        if ((that.viewSections.indexOf('footer') < 0 || that.$.footer.offsetHeight === 0)) {
            return;
        }

        function preFormatDateOutput() {
            if (that.selectedDates.length === 0) {
                return '';
            }

            if (that.selectedDates.length === 1) {
                return that.selectedDates[0].toLocaleDateString(that.locale, { year: that.yearFormat, weekday: 'short', month: 'short', day: 'numeric' });
            }
            else {
                let sortedDates = that.selectedDates.slice(0).sort((a, b) => a.getTime() - b.getTime());

                return sortedDates[0].toLocaleDateString(that.locale, { year: that.yearFormat, weekday: 'short', month: 'short', day: 'numeric' }) + ' - ' +
                    sortedDates[sortedDates.length - 1].toLocaleDateString(that.locale, { year: that.yearFormat, weekday: 'short', month: 'short', day: 'numeric' });
            }
        }

        if (that.footerTemplate) {
            if (typeof that.footerTemplate === 'function') {
                return;
            }

            let layoutTemplate = that._layoutTemplates.filter(template => template.selector === that.$.footer)[0],
                clone = document.importNode(layoutTemplate.template.content, true);

            if (layoutTemplate.bindings.length > 0) {
                let bindingHolderElement = clone.childNodes[layoutTemplate.bindings[0].childNodeIndex];

                layoutTemplate.selector.childNodes[layoutTemplate.bindings[0].childNodeIndex].innerHTML =
                    bindingHolderElement.innerHTML.replace(layoutTemplate.bindings[0].bindingString, preFormatDateOutput());
            }

            return;
        }

        that.$.selectedDatesRange.innerHTML = preFormatDateOutput();
    }

    /**
    * Sets important days.
    */
    _refreshImportantDates() {
        const that = this;

        if (that.displayMode !== 'month') {
            return;
        }

        that._clearImportantDates();

        for (let d = 0; d < that.importantDates.length; d++) {
            that._setImportantDate(that.importantDates[d]);
        }
    }

    _clearImportantDates() {
        const that = this;

        const months = that.$.monthsContainer.children;

        for (let m = 0; m < months.length; m++) {
            that._getMonthCells(months[m]).map(cell => {
                that._setCellState(cell, 'important', false);
            });
        }
    }

    _setImportantDate(date, cell) {
        const that = this;
        const cellByDate = that._getCellByDate(date);

        if (!cell) {
            cell = cellByDate;
        }

        if (cell) {
            that._setCellState(cell, 'important', true);

            that._applyImportantDateTemplate(cell);
        }
    }

    _applyImportantDateTemplate(cell) {
        const that = this;

        if (!that._importantDatesTemplate) {
            if (typeof that.importantDatesTemplate === 'function') {
                that.importantDatesTemplate(cell, { value: cell.value });
                return;
            }

            cell.innerHTML = cell.value.getDate() + '';
            return;
        }


        let clone = document.importNode(that._importantDatesTemplate.content, true);

        if (that._bindingDetails && that._bindingDetails.length > 0) {
            let bindingHolderElement = clone.childNodes[that._bindingDetails[0].childNodeIndex];
            bindingHolderElement.innerHTML = bindingHolderElement.innerHTML.replace(that._bindingDetails[0].bindingString, cell.value.getDate());
        }

        cell.innerHTML = '';

        for (let i = 0; i < clone.childNodes.length; i++) {
            if (clone.childNodes[i].outerHTML) {
                cell.innerHTML += clone.childNodes[i].outerHTML;
            }
        }
    }

    /**
    *  Fill's the month with dates and weeknubers.
    */
    _setMonth(date, monthSelector, updateDatesOnly) {
        const that = this,
            selectedDates = that._getDays(date, that.selectedDates),
            importantDates = that._getDays(date, that.importantDates),
            restrictedDates = that._getDays(date, that.restrictedDates);

        date.setDate(1);

        if (!monthSelector) {
            monthSelector = that.$.month;
        }

        monthSelector._date = new Date(date);

        if (!updateDatesOnly) {
            if (!that._viewDates || that._viewDates.length >= that.months) {
                that._viewDates = [];
            }

            that._viewDates.push(new Date(date));
        }

        date = new Date(date);

        //Correct the start day according to firstDayOfWeek property
        let firstDayOfWeek = (date.getDay() - that.firstDayOfWeek + 7) % 7;

        date.setDate(0);

        let previusMonthDays = date.getDate();

        date.setDate(32); // current month.
        date.setDate(1); // set to first day of month.
        date.setDate(32); // next month.

        if (that._selectedCells) {
            for (let i = 0; i < that._selectedCells.length; i++) {
                if (that._selectedCells[i].closest('.smart-calendar-month') === monthSelector) {
                    that._setCellState(that._selectedCells[i], 'selected', false);
                }
            }
        }

        that._setMonthContent(date, monthSelector, {
            previusMonthDays: previusMonthDays,
            firstDayOfWeek: firstDayOfWeek,
            selectedDates: selectedDates,
            importantDates: importantDates,
            restrictedDates: restrictedDates
        });
    }

    /**
    * Populates the Calendar with days for the corresponding month and calculates week numbers.
    */
    _setMonthContent(date, month, details) {
        const that = this;
        const daysInMonth = 32 - date.getDate(),
            monthCells = that._getMonthCells(month, that.rightToLeft),
            monthNumber = month._date.getMonth(),
            monthYear = month._date.getFullYear(),
            today = new Date();

        let nextMonthDays = 1,
            day = 1,
            shouldItemBeHidden;

        today.setHours(0, 0, 0, 0);

        //reset all item properties
        monthCells.map(cell => {
            that._setCellState(cell, 'restricted', false);
            that._setCellState(cell, 'selected', false);
            that._setCellState(cell, 'otherMonth', false);
            that._setCellState(cell, 'focus', false);
            that._setCellState(cell, 'important', false);
            that._setCellState(cell, 'today', false);
            that._setCellState(cell, 'disabled', false);
            that._setCellState(cell, 'hover', false);
        });

        for (let d = 0; d < monthCells.length; d++) {
            const cell = monthCells[d];

            if (d === details.firstDayOfWeek && day <= daysInMonth) {
                cell.className = 'smart-calendar-cell';
                cell.value = new Date(monthYear, monthNumber, day);
                cell.innerHTML = cell.value.getDate().toString();

                if (details.restrictedDates.indexOf(day) > -1 || cell.value.getTime() < that.min.getTime() || cell.value.getTime() > that.max.getTime()) {
                    that._setCellState(cell, 'restricted', true);
                }
                else if (details.selectedDates.indexOf(day) > -1) {
                    that._setCellState(cell, 'selected', true);

                    if (that._selectedCells.indexOf(cell) < 0) {
                        that._selectedCells.push(cell);
                    }
                }

                if (details.importantDates.indexOf(day) > -1) {
                    that._setImportantDate(cell.value, cell);
                    details.importantDates.splice(details.importantDates.indexOf(day), 1);
                }

                if (cell.value.getTime() === today.getTime()) {
                    that._setCellState(cell, 'today', true);
                }

                details.firstDayOfWeek++;
                day++;
            }
            else {
                if (day === 1) {
                    cell.value = new Date(monthYear, monthNumber - 1, ++details.previusMonthDays - details.firstDayOfWeek);
                    shouldItemBeHidden = cell.value.getTime() < that.min.getTime() || month.previousElementSibling ? true : false;
                }
                else {
                    cell.value = new Date(monthYear, monthNumber + 1, nextMonthDays++);
                    shouldItemBeHidden = cell.value.getTime() > that.max.getTime() || month.nextElementSibling ? true : false;
                }

                cell.innerHTML = cell.value.getDate().toString();

                if (shouldItemBeHidden) {
                    cell.classList.add('smart-visibility-hidden');
                }
                else {
                    that._setCellState(cell, 'otherMonth', true);
                    cell.classList.remove('smart-visibility-hidden');
                }
            }
        }

        //Set month name
        if (that.months > 1) {
            month.firstElementChild.innerHTML = that.dateFormatFunction ?
                that.dateFormatFunction(month._date) : that._monthsNames[monthNumber] + ' ' + month._date.toLocaleDateString(that.locale, { year: that.yearFormat });
        }

        // Set week numbers
        that._setMonthWeekNumbers(month);
    }

    /**
    * Sets the names of the months inside the dropDown, according to localization.
    */
    _refreshMonthNames() {
        const that = this;
        let date = new Date(),
            formatedMonth;

        date.setDate(1);
        that._monthsNames = [];

        function formatMonthName(date) {
            let result = new Intl.DateTimeFormat(that.locale, { month: that.monthNameFormat }).format(date);

            if (that.monthNameFormat === 'firstTwoLetters') {
                //EDGE bug fix
                result = result.charCodeAt(0) === 8206 ? result.substring(0, 2) : result.substring(1, 3);
            }

            return result;
        }

        //get formated month names
        for (let m = 0; m < 12; m++) {
            date.setMonth(m);
            formatedMonth = formatMonthName(date);
            that._monthsNames.push(formatedMonth);
        }

        if (that.calendarMode === 'classic' && that.$.monthElement) {
            let months = that.$.monthsContainer.children;

            if (that.$.monthElement.dataSource) {
                that._changeEventFired = 1; //ListBox change event fired
            }

            //NOTE: when shadowDOM is Enabled, sometimes the context of the ListBox inside the DropDownList is not document and propertyChangeHandler is not fired on the ListBox
            if (that.enableShadowDOM) {
                that._setMonthElementPropertyInShadowDOM('dataSource', that._monthsNames);
            }
            else {
                that.$.monthElement.dataSource = that._monthsNames;
            }

            if (that._viewDates) {
                for (let m = 0; m < months.length; m++) {
                    months[m].firstElementChild.textContent = that._monthsNames[months[m]._date.getMonth()] + ' ' + months[m]._date.getFullYear();
                }

                that._changeEventFired = 1; //ListBox change event fired, again

                if (that.enableShadowDOM) {
                    that._setMonthElementPropertyInShadowDOM('selectedIndexes', that._viewDates.map(date => date.getMonth()));
                }
                else {
                    that.$.monthElement.selectedIndexes = that._viewDates.map(date => date.getMonth());
                }
            }
        }
    }

    /**
    * Set weeks numbers.
    */
    _setMonthWeekNumbers(month) {
        const that = this,
            isWeekVisible = function (week) {
                for (let d = 1; d < week.children.length; d++) {
                    if (!week.children[d].classList.contains('smart-visibility-hidden')) {
                        return true;
                    }
                }
            };

        let weeks = month.getElementsByClassName('smart-calendar-week');

        weeks = [].slice.call(weeks);

        // Set week numbers
        for (let w = 0; w < weeks.length; w++) {
            if (!isWeekVisible(weeks[w])) {
                weeks[w].children[0].innerHTML = '';
                continue;
            }

            const cell = weeks[w].children[1];
            const monthOffset = cell.otherMonth ? (cell.value.getTime() > month._date.getTime() ? 1 : -1) : 0;

            weeks[w].children[0].innerHTML = that._getWeekNumber(new Date(month._date.getFullYear(),
                month._date.getMonth() + monthOffset, cell.value.getDate()));
        }
    }

    /**
    * Sets restricted dates.
    */
    _setRestrictedDates(restrictedDates) {
        const that = this;
        const months = that.$.monthsContainer.children;

        for (let m = 0; m < months.length; m++) {
            that._getMonthCells(months[m]).map(cell => {
                that._setCellState(cell, 'restricted', false);
            });
        }

        if (that._viewDates) {
            const isDateRestricted = function (date) {
                for (let i = 0; i < that._viewDates.length; i++) {
                    if (that._viewDates[i].getFullYear() === date.getFullYear() && that._viewDates[i].getMonth() === date.getMonth()) {
                        return true;
                    }
                }
            };

            for (let i = 0; i < restrictedDates.length; i++) {
                if (isDateRestricted(restrictedDates[i])) {
                    const cell = that._getCellByDate(restrictedDates[i]);

                    that._setCellState(cell, 'restricted', true);
                }
            }
        }
    }

    /**
     * Sets the arrow direction of the scrollButtons
     */
    _setScrollButtonsNavigationMode() {
        const that = this;

        if (that.scrollButtonsNavigationMode === 'landscape') {
            if (that.$.previousMonthButton) {
                that.$.previousMonthButton.$.button.firstElementChild.innerHTML = '&#xe809';
            }

            if (that.$.nextMonthButton) {
                that.$.nextMonthButton.$.button.firstElementChild.innerHTML = '&#xe810';
            }
        }
        else {
            if (that.$.previousMonthButton) {
                that.$.previousMonthButton.$.button.firstElementChild.innerHTML = '&#xe80b';
            }

            if (that.$.nextMonthButton) {
                that.$.nextMonthButton.$.button.firstElementChild.innerHTML = '&#xe80d';
            }
        }

        that._applyAnimationSettings(true);
    }

    /**
     * Fires Tooltip's events when shadowDOM is enabled, because it cant bubble out of Calendar's shadowDOM
     * @param {any} event
     */
    _tooltipEventHandler(event) {
        const that = this;

        if (that.enableShadowDOM) {
            that.$.fireEvent(event.type, event.detail);
        }
    }

    /**
     * Updates Calendar's title
     */
    _refreshTitle() {
        const that = this;

        let date = that.selectedDates.length > 0 ? that.selectedDates[that.selectedDates.length - 1] : new Date();

        if (that.titleTemplate) {
            if (typeof that.titleTemplate === 'function') {
                return;
            }

            let layoutTemplate = that._layoutTemplates.filter(template => template.selector === that.$.title)[0],
                clone = document.importNode(layoutTemplate.template.content, true);

            if (layoutTemplate.bindings.length > 0) {
                let bindingHolderElement = clone.childNodes[layoutTemplate.bindings[0].childNodeIndex];

                date = date.toLocaleDateString(that.locale, { year: that.yearFormat, weekday: 'short', month: 'short', day: 'numeric' });
                layoutTemplate.selector.childNodes[layoutTemplate.bindings[0].childNodeIndex].innerHTML =
                    bindingHolderElement.innerHTML.replace(layoutTemplate.bindings[0].bindingString, date);
                return;
            }
        }

        that.$.title.children[0].innerHTML = date.toLocaleDateString(that.locale, { year: that.yearFormat });
        that.$.title.children[1].innerHTML = that.view === 'landscape' ?
            date.toLocaleDateString(that.locale, { weekday: 'short' }) + ',' + '</br>' +
            date.toLocaleDateString(that.locale, { month: 'short', day: 'numeric' }) :
            date.toLocaleDateString(that.locale, { weekday: 'short' }) + ', ' +
            date.toLocaleDateString(that.locale, { month: 'short', day: 'numeric' });
    }

    /**
    * Set how many weeks will be visible.
    */
    _setWeeksVisibility(monthContainer) {
        const that = this,
            months = monthContainer.children;
        let counter;

        //NOTE: classlist is used because when months > 1(or animation is ON) all weeks need to extend Smart
        function setVisibility(week) {
            const shouldWeekBeHidden = function (week) {
                for (let d = 1; d < week.children.length; d++) {
                    if (!week.children[d].classList.contains('smart-visibility-hidden')) {
                        return false;
                    }
                }

                return true;
            };

            if (shouldWeekBeHidden(week) || counter >= that.weeks) {
                week.classList.add('smart-hidden');
                return;
            }

            if (counter < that.weeks) {
                week.classList.remove('smart-hidden');
                counter++;
            }
        }

        for (let m = 0; m < months.length; m++) {
            const month = months[m];
            let weeks = month.getElementsByClassName('smart-calendar-week');

            weeks = [].slice.call(weeks);

            let selectedDates = that._selectedCells.filter(date => date.closest('.smart-calendar-month') === months[m]);

            if (that.weeks === 6) {
                weeks.map(week => week.classList.remove('smart-hidden'));
                continue;
            }

            counter = 0;
            if (selectedDates.length > 0) {
                let selectedDay = selectedDates[selectedDates.length - 1],
                    selectedDayWeekIndex = weeks.indexOf(selectedDay.parentElement);

                // Weeks after the one with the last selectedDay.
                for (let i = selectedDayWeekIndex; i < weeks.length; i++) {
                    setVisibility(weeks[i]);
                }

                // Weeks before the one with the last selectedDay.
                for (let i = selectedDayWeekIndex - 1; i >= 0; i--) {
                    setVisibility(weeks[i]);
                }
            }
            else {
                //No selectedDay, start from 1st week
                for (let i = 0; i < weeks.length; i++) {
                    setVisibility(weeks[i]);
                }
            }
        }
    }

    /**
    * Updates the header elements if they haven't been changed.
    */
    _refreshHeaderElements() {
        const that = this,
            isCalendarFocused = document.activeElement.closest('smart-calendar') === that,
            target = that._animationStarted ? that.$.nextMonthsContainer : that.$.dateViewContainer;
        let lastDateInView = that._viewDates[that._viewDates.length - 1],
            yearsInView = that._viewDates.map(date => date.getFullYear()), nextDate, nextYear;

        if (that.displayMode !== 'month' && that.displayModeView === 'list') {
            return;
        }

        //Previous month navigation element
        if (that.$.previousMonthButton && !that.disabled) {
            if (that.displayMode !== 'month' && that.$.dateViewContainer.children[0].value) {
                nextYear = that.displayMode === 'year' ? target.children[0].value.getFullYear() - 1 : target.children[1].value.getFullYear() - 1;
            }
            else if (that._viewDates[0].getMonth() - 1 < 0) {
                nextDate = 11;
                nextYear = that._viewDates[0].getFullYear() - 1;
            }
            else {
                nextDate = that._viewDates[0].getMonth() - 1;
                nextYear = that._viewDates[0].getFullYear();
            }

            that.$.previousMonthButton.disabled = nextYear < that.min.getFullYear() || nextYear === that.min.getFullYear() &&
                nextDate < that.min.getMonth() ? true : false;

            if (that.$.previousMonthButton.disabled && isCalendarFocused) {
                that.$.body.focus();
            }
        }

        //Next month navigation element
        if (that.$.nextMonthButton && !that.disabled) {
            if (that.displayMode !== 'month' && that.$.dateViewContainer.children[0].value) {
                nextYear = that.displayMode === 'year' ? target.children[0].value.getFullYear() + 1 : target.children[1].value.getFullYear() + 11;
            }
            else if (lastDateInView.getMonth() + 1 > 11) {
                nextDate = 0;
                nextYear = lastDateInView.getFullYear() + 1;
            }
            else {
                nextDate = lastDateInView.getMonth() + 1;
                nextYear = lastDateInView.getFullYear();
            }

            that.$.nextMonthButton.disabled = nextYear > that.max.getFullYear() || nextYear === that.max.getFullYear() &&
                nextDate > that.max.getMonth() ? true : false;

            if (that.$.nextMonthButton.disabled && isCalendarFocused) {
                that.$.body.focus();
            }
        }

        //Month selection element
        if (that.calendarMode === 'classic' && that.$.monthElement) {
            const items = that.$.monthElement.items;

            items.map(item => item.disabled = false);
            if (yearsInView.indexOf(that.min.getFullYear()) > -1) {
                for (let i = 0; i < that.min.getMonth(); i++) {
                    items[i].disabled = true;
                }
            }

            if (yearsInView.indexOf(that.max.getFullYear()) > -1) {
                for (let i = that.max.getMonth() + 1; i < items.length; i++) {
                    items[i].disabled = true;
                }
            }

            that._changeEventFired = that.$.monthElement.selectedIndexes.length;

            if (that.enableShadowDOM) {
                that._setMonthElementPropertyInShadowDOM('selectedIndexes', [that._viewDates[0].getMonth()]);
            }
            else {
                that.$.monthElement.selectedIndexes = [that._viewDates[0].getMonth()];
            }

            that._changeEventFired = 0;
        }

        //Previous year navigation element
        if (that.$.previousYearButton && !that.disabled) {
            nextYear = that._viewDates[0].getFullYear() - 1;
            that.$.previousYearButton.disabled = nextYear < that.min.getFullYear() ? true : false;

            if (that.$.previousYearButton.disabled && isCalendarFocused) {
                that.$.body.focus();
            }
        }

        //Next year navigation element
        if (that.$.nextYearButton && !that.disabled) {
            nextYear = lastDateInView.getFullYear() + 1;
            that.$.nextYearButton.disabled = nextYear > that.max.getFullYear() ? true : false;

            if (that.$.nextYearButton.disabled && isCalendarFocused) {
                that.$.body.focus();
            }
        }

        //Year element
        if (that.$.yearElement) {
            that.$.yearElement.value = yearsInView[0];
            that.$.yearElement.disabled =
                lastDateInView.getFullYear() + 1 > that.max.getFullYear() && that._viewDates[0].getFullYear() - 1 < that.min.getFullYear() ? true : false;
        }
    }

    /**
     * Fixes ShadowDOM Context issue
     * Note:
     * Since in ShadowDOM the context of the monthElement and it's listBox during element initializaion is not document this method is the solution
     * @param {any} propertyname
     * @param {any} value
     */
    _setMonthElementPropertyInShadowDOM(propertyname, value) {
        const that = this,
            monthElement = that.$.monthElement,
            monthElementListBox = that.$.monthElement.$ ? that.$.monthElement.$.listBox : undefined;

        const monthElementContext = monthElement.context;
        let monthElementListboxContext;

        monthElement.context = document;

        if (monthElementListBox) {
            monthElementListboxContext = monthElementListBox.context;
            monthElementListBox.context = document;
        }

        that.$.monthElement[propertyname] = value;

        monthElement.context = monthElementContext;

        if (monthElementListBox) {
            monthElementListBox.context = monthElementListboxContext;
        }
    }

    /**
    * Updates the header/footer section with the appropriate date
    */
    _refreshHeaderTitle() {
        const that = this;
        let date;

        function preFormatDate() {
            if (that.displayMode !== 'month') {
                if (that.displayModeView === 'list' && that.$.listViewContainer.selectedValues[0]) {
                    let items = that.$.listViewContainer.items;

                    date = that.displayMode === 'year' ?
                        new Date(that.$.listViewContainer.getItem(that.$.listViewContainer.selectedValues[0]).value).getFullYear() :
                        new Date(items[0].value).getFullYear() + ' - ' + new Date(items[items.length - 1].value).getFullYear();
                }
                else if (that.$.dateViewContainer.children[0].value) {
                    let dateViewItems = that._animationStarted ? that.$.nextMonthsContainer.children : that.$.dateViewContainer.children;

                    date = that.displayMode === 'year' ? dateViewItems[0].value.getFullYear() :
                        dateViewItems[1].value.getFullYear() + ' - ' + dateViewItems[dateViewItems.length - 2].value.getFullYear();
                }

                if (date) {
                    return date;
                }
            }

            const sortedDates = that._viewDates.slice(0).sort((a, b) => a.getTime() - b.getTime()),
                firstDateInView = sortedDates[0],
                lastDateInView = sortedDates[sortedDates.length - 1];

            firstDateInView.setDate(2);
            date = firstDateInView.toLocaleDateString(that.locale, { year: that.yearFormat, month: that.monthNameFormat });

            if (that.months > 1) {
                lastDateInView.setDate(2);
                date += ' - ' + lastDateInView.toLocaleDateString(that.locale, { year: that.yearFormat, month: that.monthNameFormat });
            }

            return date;
        }

        if (that.calendarMode === 'default') {
            that.$.defaultHeaderDate.innerHTML = preFormatDate();
        }

        if (typeof that.headerTemplate === 'function' || !that._layoutTemplates) {
            return;
        }

        let layoutTemplate = that._layoutTemplates.filter(template => template.selector === that.$.header)[0];

        if (!layoutTemplate) {
            return;
        }

        let clone = document.importNode(layoutTemplate.template.content, true);

        if (layoutTemplate.bindings.length > 0) {
            const bindingHolderElement = clone.childNodes[layoutTemplate.bindings[0].childNodeIndex];

            //Note: HTMLSlotElements are used when the element has ShadowDOM and contents of the template are in the LightDOM
            (that.shadowRoot ? that : layoutTemplate.selector).childNodes[layoutTemplate.bindings[0].childNodeIndex].innerHTML =
                bindingHolderElement.innerHTML.replace(layoutTemplate.bindings[0].bindingString, that.dateFormatFunction ? that.dateFormatFunction(that._viewDates) : preFormatDate());
        }
    }

    /**
    * Shows/hides the target week
    */
    _updateWeeksVisibility() {
        const that = this
        const focusedWeek = that._focusedCell.parentElement;

        //NOTE: classlist is used because when months > 1(or animation is ON) all weeks need to extend Smart
        if (!focusedWeek.classList.contains('smart-hidden')) {
            return;
        }

        const monthWeeks = [].slice.call(focusedWeek.parentElement.children),
            weekIndex = monthWeeks.indexOf(focusedWeek),
            shouldWeekBeHidden = function (week) {
                for (let d = 1; d < week.children.length; d++) {
                    if (!week.children[d].classList.contains('smart-visibility-hidden')) {
                        return false;
                    }
                }

                return true;
            };
        let counter = 0;

        monthWeeks.map(week => week.classList.add('smart-hidden'));

        for (let i = weekIndex; i < monthWeeks.length; i++) {
            if (shouldWeekBeHidden(monthWeeks[i])) {
                continue;
            }

            monthWeeks[i].classList.remove('smart-hidden');
            counter++;

            if (counter === that.weeks) {
                return;
            }
        }

        if (counter < that.weeks) {
            for (let i = weekIndex - 1; i >= 0; --i) {
                monthWeeks[i].classList.remove('smart-hidden');
                counter++;

                if (counter === that.weeks) {
                    return;
                }
            }
        }
    }

    /**
     * Validates potential date input and returns an Array of Date Objects.
    */
    _getValidDates(dateOrDates) {
        let result = [];

        function validate(date) {
            if (date instanceof Date) {
                return date;
            }
            else if (Smart.Utilities.DateTime && date instanceof Smart.Utilities.DateTime) {
                return date.toDate();
            }
            else if (typeof (date) === 'string') {
                if (date.trim() === 'new Date()' || date.trim() === 'new Smart.Utilities.DateTime()') {
                    return new Date();
                }

                let regex = /(\d+[,-.\/]{1}\s*\d+[,-.\/]{1}\s*\d+)/;

                const parseDateString = () => {
                    date = date.replace(/[,-.\/]/g, ',').split(',');
                    if (date.length > 2) {
                        date = new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]));
                    }
                    else {
                        return new Date();
                    }

                    return date;
                }

                if (regex.test(date)) {
                    date = regex.exec(date)[0].replace(/[,-.\/]/g, ',').split(',');
                    if (date) {
                        return new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]));
                    }
                    else {
                        return parseDateString();
                    }
                }
                else {
                    return parseDateString();

                }
            }
        }

        if (dateOrDates === undefined) {
            return null;
        }

        if (Array.isArray(dateOrDates)) {
            for (let i = 0; i < dateOrDates.length; i++) {
                result.push(validate(dateOrDates[i]));
            }
        }
        else {
            result.push(validate(dateOrDates));
        }

        result = result.filter(date => date && date.toDateString() !== 'Invalid Date'); //remove invalid dates
        result.map(date => date.setHours(0, 0, 0, 0)); //reset time, important for date comparing

        return result;
    }

    _getValidDate(date) {
        const that = this;
        const validDates = that._getValidDates(date);

        if (validDates.length > 0) {
            return validDates[0];
        }

        return null;
    }

    /**
     * Validates the selectedDates to be in range min>date<max.
     */
    _validateSelectedDates(dates) {
        const that = this;
        let outOfRangeDates = [];

        if (!dates) {
            dates = that.selectedDates;
        }

        let selectedDates = dates.slice(0),
            filter = function (date) {
                if (date.getTime() >= that.min.getTime() && date.getTime() <= that.max.getTime() && !isRestrictedDate(date)) {
                    return true;
                }

                outOfRangeDates.push(date);
                return;
            },
            isRestrictedDate = function (date) {
                for (let d = 0; d < that.restrictedDates.length; d++) {
                    if (that.restrictedDates[d].getTime() === date.getTime()) {
                        return true;
                    }
                }
            }

        //Synchronize the attribute.
        that.selectedDates = selectedDates.filter(filter);

        //Unselects dates that are out of range.
        if (that._viewDates) {
            outOfRangeDates.map(date => that._selectDate(date));
            that._focusCell();
        }
    }

    /**
    * min property validator
    */
    _validateMinMax(propertyName, newValue, oldValue) {
        const that = this;

        switch (propertyName) {
            case 'min':
                newValue = that._getValidDate(that[propertyName]);
                that.min = newValue ? newValue : oldValue ? oldValue : that.properties.min.defaultValue;
                break;
            case 'max':
                newValue = that._getValidDate(that[propertyName]);
                that.max = newValue ? newValue : oldValue ? oldValue : that.properties.max.defaultValue;
                break;
            default:
                newValue = that._getValidDate(that.min);
                that.min = newValue ? newValue : oldValue ? oldValue : that.properties.min.defaultValue;
                newValue = that._getValidDate(that.max);
                that.max = newValue ? newValue : oldValue ? oldValue : that.properties.max.defaultValue;
                break;
        }

        that.min = that.min.getTime() > that.max.getTime() ? that.max : that.min;

        //reset time, important when comparing dates.
        that.min.setHours(0, 0, 0, 0);
        that.max.setHours(0, 0, 0, 0);

        let months = that.$.monthsContainer.children,
            days;

        if (that._viewDates) {
            if (that._viewDates[0].getTime() > that.max.getTime() || that._viewDates[0].getTime() < that.min.getTime()) {
                that._handleMonths();
                return;
            }

            for (let i = 0; i < months.length; i++) {
                days = that._getMonthCells(months[i]);
                for (let d = 0; d < days.length; d++) {
                    const cell = days[d];

                    if (cell.value.getTime() >= that.min.getTime() && cell.value.getTime() <= that.max.getTime()) {
                        that._setCellState(cell, 'restricted', false);

                        if (cell.value.getMonth() === months[i]._date.getMonth()) {
                            cell.classList.remove('smart-visibility-hidden');
                        }
                        else if (!that.hideOtherMonthDays) {
                            that._setCellState(cell, 'otherMonth', true);
                            cell.classList.remove('smart-visibility-hidden');
                        }

                        if (that.displayMode !== 'month') {
                            that._setCellState(cell, 'otherMonth', false);
                        }
                    }
                    else {
                        if (!cell.otherMonth) {
                            that._setCellState(cell, 'restricted', true);

                        }
                        else if (cell.classList.contains('smart-visibility-hidden')) {
                            that._setCellState(cell, 'restricted', false);

                            continue;
                        }

                        if (that.displayMode !== 'month') {
                            cell.classList.remove('smart-visibility-hidden');
                            that._setCellState(cell, 'otherMonth', true);
                        }
                    }
                }
            }
        }
    }

    _setCellState(cell, propertyName, value) {
        cell[propertyName] = value;

        const attributeName = Smart.Utilities.Core.toDash(propertyName);

        if (value) {
            cell.setAttribute(attributeName, '');
        }
        else {
            cell.removeAttribute(attributeName);
        }
    }

    /**
    * Checks for HTMLTemplate support and returns it's content.
    */
    _validateTemplate(propertyName, template) {
        if (template === null || !template) {
            return;
        }

        if (typeof (template) === 'function') {
            return;
        }

        const that = this;

        if (!('content' in document.createElement('template'))) {
            that.error(that.localize('htmlTemplateNotSuported', { elementType: that.nodeName.toLowerCase() }));
            return;
        }

        if (typeof (template) === 'string') {
            template = document.getElementById(template);
        }


        if (template === null || !('content' in template)) {
            that.error(that.localize('invalidTemplate', { elementType: that.nodeName.toLowerCase(), property: propertyName }));
            return;
        }

        return template;
    }

    /**
    * Navigates to next/previous month when clicked on other month day.
    */
    _weeksDownHandler(event, cell) {
        const that = this,
            date = cell.value;
        let neighbourMonth;

        if (cell.otherMonth) {
            neighbourMonth = cell.value.getTime() > cell.closest('.smart-calendar-month')._date.getTime() ? 1 : -1;
        }

        if (that.hasRippleAnimation) {
            Smart.Utilities.Animation.Ripple.animate(cell, event.pageX, event.pageY);
        }

        if (neighbourMonth) {
            if (that._isDateInView(cell.value)) {
                return;
            }

            if (!that.disableAutoNavigation) {
                that.navigate(neighbourMonth * that.months);
            }

            return;
        }

        cell = that._getCellByDate(date);

        if (cell && (cell.disabled || cell.restricted)) {
            return;
        }

        that._handleDateSelection(cell);
    }

    /**
    * firstDayOfweek property validator
    */
    _firstDayOfWeekValidator(oldValue, newValue) {
        return Math.min(Math.max(0, (isNaN(newValue) ? 6 : newValue)), 6);
    }

    /**
    * Weeks property validator.
    */
    _weeksValidator(oldValue, newValue) {
        return Math.min(Math.max(1, (isNaN(newValue) ? 6 : newValue)), 6);
    }

    /**
    * Months property validator.
    */
    _monthsValidator(oldValue, newValue) {
        return Math.min(Math.max(1, (isNaN(newValue) ? 1 : newValue)), 12);
    }
});