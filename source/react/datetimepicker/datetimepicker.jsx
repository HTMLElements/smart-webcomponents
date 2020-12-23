import React from "react";
/**
 Date & time selection component. It allows to select both date and time with the same control.
*/
export class DateTimePicker extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'DateTimePicker' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
	*	Property type: Animation
	*/
	get animation() {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value) {
		if (this.nativeElement) {
			this.nativeElement.animation = value;
		}
	}

	/** Applies new animation settings to the calendar pop-up when it is enabled. Properties:startSpeed - Determines the initial speed of the animation.easeThreshold - Determines the point at which the animation starts to slow down - the "ease effect".step - Determines the step ( scrolling interval ) at which the animation will run. stepEaseSize - Coefficient that is used to calculated the new step once the threshold has been passed. resetThreshold - Determines the threshold for animation reset. When it's reached the animation will start over.
	*	Property type: any
	*/
	get animationSettings() {
		return this.nativeElement ? this.nativeElement.animationSettings : undefined;
	}
	set animationSettings(value) {
		if (this.nativeElement) {
			this.nativeElement.animationSettings = value;
		}
	}

	/** Determines whether the calendar button pop-up will be closed automatically when date or time is selected through it.
	*	Property type: boolean
	*/
	get autoClose() {
		return this.nativeElement ? this.nativeElement.autoClose : undefined;
	}
	set autoClose(value) {
		if (this.nativeElement) {
			this.nativeElement.autoClose = value;
		}
	}

	/** Determines the delay before the calendar pop-up is automatically closed. Applicable only when autoClose is set to true.
	*	Property type: number
	*/
	get autoCloseDelay() {
		return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
	}
	set autoCloseDelay(value) {
		if (this.nativeElement) {
			this.nativeElement.autoCloseDelay = value;
		}
	}

	/** Determines whether the calendar button is visible or not. The calendar button is used to open the Calendar popup to select a date.
	*	Property type: boolean
	*/
	get calendarButton() {
		return this.nativeElement ? this.nativeElement.calendarButton : undefined;
	}
	set calendarButton(value) {
		if (this.nativeElement) {
			this.nativeElement.calendarButton = value;
		}
	}

	/** Determines the position of the calendar button.
	*	Property type: DropDownButtonPosition
	*/
	get calendarButtonPosition() {
		return this.nativeElement ? this.nativeElement.calendarButtonPosition : undefined;
	}
	set calendarButtonPosition(value) {
		if (this.nativeElement) {
			this.nativeElement.calendarButtonPosition = value;
		}
	}

	/** Determines the header mode of the calendar pop-up.
	*	Property type: CalendarMode
	*/
	get calendarMode() {
		return this.nativeElement ? this.nativeElement.calendarMode : undefined;
	}
	set calendarMode(value) {
		if (this.nativeElement) {
			this.nativeElement.calendarMode = value;
		}
	}

	/** Sets or gets the format of calendar pop-up's day names.
	*	Property type: DayFormat
	*/
	get dayNameFormat() {
		return this.nativeElement ? this.nativeElement.dayNameFormat : undefined;
	}
	set dayNameFormat(value) {
		if (this.nativeElement) {
			this.nativeElement.dayNameFormat = value;
		}
	}

	/** Enables or disables the element.
	*	Property type: boolean
	*/
	get disabled() {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value) {
		if (this.nativeElement) {
			this.nativeElement.disabled = value;
		}
	}

	/** Disables auto navigation of the calendar pop-up when the user clicks on a date that's not from month in view.
	*	Property type: boolean
	*/
	get disableAutoNavigation() {
		return this.nativeElement ? this.nativeElement.disableAutoNavigation : undefined;
	}
	set disableAutoNavigation(value) {
		if (this.nativeElement) {
			this.nativeElement.disableAutoNavigation = value;
		}
	}

	/** Determines the time zone to display the value in.
	*	Property type: DateTimePickerDisplayKind
	*/
	get displayKind() {
		return this.nativeElement ? this.nativeElement.displayKind : undefined;
	}
	set displayKind(value) {
		if (this.nativeElement) {
			this.nativeElement.displayKind = value;
		}
	}

	/** Determines the type of the month/year view in the calendar pop-up when calendarMode is set to Default.
	*	Property type: CalendarDisplayModeView
	*/
	get displayModeView() {
		return this.nativeElement ? this.nativeElement.displayModeView : undefined;
	}
	set displayModeView(value) {
		if (this.nativeElement) {
			this.nativeElement.displayModeView = value;
		}
	}

	/** Sets custom container to append the pop-up to. By default, it is in the DateTimePicker. The value of the property can be an HTML element or the id of an HTML element.
	*	Property type: any
	*/
	get dropDownAppendTo() {
		return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
	}
	set dropDownAppendTo(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownAppendTo = value;
		}
	}

	/** Sets or gets the pop-up display mode (what components appear in it, and its behaviour).
	*	Property type: DateTimePickerDropDownDisplayMode
	*/
	get dropDownDisplayMode() {
		return this.nativeElement ? this.nativeElement.dropDownDisplayMode : undefined;
	}
	set dropDownDisplayMode(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownDisplayMode = value;
		}
	}

	/** If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
	*	Property type: boolean
	*/
	get dropDownOverlay() {
		return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
	}
	set dropDownOverlay(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownOverlay = value;
		}
	}

	/** Determines the pop-up position when opened.
	*	Property type: DropDownPosition
	*/
	get dropDownPosition() {
		return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
	}
	set dropDownPosition(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownPosition = value;
		}
	}

	/** Determines how the the value can be edited inside the input.
	*	Property type: DateTimePickerEditMode
	*/
	get editMode() {
		return this.nativeElement ? this.nativeElement.editMode : undefined;
	}
	set editMode(value) {
		if (this.nativeElement) {
			this.nativeElement.editMode = value;
		}
	}

	/** Determines whether the value can be incremented/decremented with the mouse wheel when the mouse is over the input.
	*	Property type: boolean
	*/
	get enableMouseWheelAction() {
		return this.nativeElement ? this.nativeElement.enableMouseWheelAction : undefined;
	}
	set enableMouseWheelAction(value) {
		if (this.nativeElement) {
			this.nativeElement.enableMouseWheelAction = value;
		}
	}

	/** Determines the first day of the week of the calendar pop-up. From 0(Sunday) to 6(Saturday)
	*	Property type: number
	*/
	get firstDayOfWeek() {
		return this.nativeElement ? this.nativeElement.firstDayOfWeek : undefined;
	}
	set firstDayOfWeek(value) {
		if (this.nativeElement) {
			this.nativeElement.firstDayOfWeek = value;
		}
	}

	/** Sets or gets the footer template of the calendar pop-up. The value of this property can be the id of an HTMLTemplateElement or the HTMLTemplateElement itself. If set to null, a default template is applied.
	*	Property type: any
	*/
	get footerTemplate() {
		return this.nativeElement ? this.nativeElement.footerTemplate : undefined;
	}
	set footerTemplate(value) {
		if (this.nativeElement) {
			this.nativeElement.footerTemplate = value;
		}
	}

	/** Determines the pattern that is used to display the value in.
	*	Property type: string
	*/
	get formatString() {
		return this.nativeElement ? this.nativeElement.formatString : undefined;
	}
	set formatString(value) {
		if (this.nativeElement) {
			this.nativeElement.formatString = value;
		}
	}

	/** Sets custom header template for the calendar pop-up. Accepts the id of an HTMLTemplateElement or a reference ot it.
	*	Property type: any
	*/
	get headerTemplate() {
		return this.nativeElement ? this.nativeElement.headerTemplate : undefined;
	}
	set headerTemplate(value) {
		if (this.nativeElement) {
			this.nativeElement.headerTemplate = value;
		}
	}

	/** Hides the names of the weekdays in the calendar pop-up.
	*	Property type: boolean
	*/
	get hideDayNames() {
		return this.nativeElement ? this.nativeElement.hideDayNames : undefined;
	}
	set hideDayNames(value) {
		if (this.nativeElement) {
			this.nativeElement.hideDayNames = value;
		}
	}

	/** Determines if dates from other months are visible or not in the calendar pop-up.
	*	Property type: boolean
	*/
	get hideOtherMonthDays() {
		return this.nativeElement ? this.nativeElement.hideOtherMonthDays : undefined;
	}
	set hideOtherMonthDays(value) {
		if (this.nativeElement) {
			this.nativeElement.hideOtherMonthDays = value;
		}
	}

	/** Hides the arrow of the tooltip in the calendar pop-up.
	*	Property type: boolean
	*/
	get hideTooltipArrow() {
		return this.nativeElement ? this.nativeElement.hideTooltipArrow : undefined;
	}
	set hideTooltipArrow(value) {
		if (this.nativeElement) {
			this.nativeElement.hideTooltipArrow = value;
		}
	}

	/** Sets additional helper text below the element that appears only when the element is focused.
	*	Property type: string
	*/
	get hint() {
		return this.nativeElement ? this.nativeElement.hint : undefined;
	}
	set hint(value) {
		if (this.nativeElement) {
			this.nativeElement.hint = value;
		}
	}

	/** Sets dates, displayed as important in the calendar pop-up.
	*	Property type: string[] | Date[]
	*/
	get importantDates() {
		return this.nativeElement ? this.nativeElement.importantDates : undefined;
	}
	set importantDates(value) {
		if (this.nativeElement) {
			this.nativeElement.importantDates = value;
		}
	}

	/** Sets a template for the important dates of the calendar pop-up. Accepts the id of or a reference to an HTMLTemplateElement.
	*	Property type: string | HTMLTemplateElement
	*/
	get importantDatesTemplate() {
		return this.nativeElement ? this.nativeElement.importantDatesTemplate : undefined;
	}
	set importantDatesTemplate(value) {
		if (this.nativeElement) {
			this.nativeElement.importantDatesTemplate = value;
		}
	}

	/** Sets or gets the increment/decrement interval when a date/time segment inside the input has not been highlighted. The default interval is 1 second. If a numeric value is passed, it represents milliseconds.
	*	Property type: any
	*/
	get interval() {
		return this.nativeElement ? this.nativeElement.interval : undefined;
	}
	set interval(value) {
		if (this.nativeElement) {
			this.nativeElement.interval = value;
		}
	}

	/** Sets a label above the element.
	*	Property type: string
	*/
	get label() {
		return this.nativeElement ? this.nativeElement.label : undefined;
	}
	set label(value) {
		if (this.nativeElement) {
			this.nativeElement.label = value;
		}
	}

	/** Sets or gets the locale that determines what language is used to localize the labels inside the DateTimePicker.
	*	Property type: string
	*/
	get locale() {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value) {
		if (this.nativeElement) {
			this.nativeElement.locale = value;
		}
	}

	/** Callback used to customize the format of the messages that are returned from the Localization Module.
	*	Property type: any
	*/
	get localizeFormatFunction() {
		return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	}
	set localizeFormatFunction(value) {
		if (this.nativeElement) {
			this.nativeElement.localizeFormatFunction = value;
		}
	}

	/** Sets or gets the maximum allowed value.
	*	Property type: any
	*/
	get max() {
		return this.nativeElement ? this.nativeElement.max : undefined;
	}
	set max(value) {
		if (this.nativeElement) {
			this.nativeElement.max = value;
		}
	}

	/** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
	*	Property type: any
	*/
	get messages() {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value) {
		if (this.nativeElement) {
			this.nativeElement.messages = value;
		}
	}

	/** Sets or gets the minimum allowed value.
	*	Property type: any
	*/
	get min() {
		return this.nativeElement ? this.nativeElement.min : undefined;
	}
	set min(value) {
		if (this.nativeElement) {
			this.nativeElement.min = value;
		}
	}

	/** Sets or gets the element's name, which is used as a reference when the data is submitted in a form.
	*	Property type: string
	*/
	get name() {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value) {
		if (this.nativeElement) {
			this.nativeElement.name = value;
		}
	}

	/** Enables or disables the setting of the value property to be null or empty string. If the property is enabled and the value in the input is deleted, the value will be set to null and the placeholder will be displayed. Otherwise, the current date and time will be set.
	*	Property type: boolean
	*/
	get nullable() {
		return this.nativeElement ? this.nativeElement.nullable : undefined;
	}
	set nullable(value) {
		if (this.nativeElement) {
			this.nativeElement.nullable = value;
		}
	}

	/** Sets or gets whether the calendar pop-up is opened.
	*	Property type: boolean
	*/
	get opened() {
		return this.nativeElement ? this.nativeElement.opened : undefined;
	}
	set opened(value) {
		if (this.nativeElement) {
			this.nativeElement.opened = value;
		}
	}

	/** Sets or gets the placeholder text to be shown in the input when value is null.
	*	Property type: string
	*/
	get placeholder() {
		return this.nativeElement ? this.nativeElement.placeholder : undefined;
	}
	set placeholder(value) {
		if (this.nativeElement) {
			this.nativeElement.placeholder = value;
		}
	}

	/** Disables user interaction with the element.
	*	Property type: boolean
	*/
	get readonly() {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value) {
		if (this.nativeElement) {
			this.nativeElement.readonly = value;
		}
	}

	/** Sets or gets an array of dates (DateTime or Date objects) that cannot be selected.
	*	Property type: Date[]
	*/
	get restrictedDates() {
		return this.nativeElement ? this.nativeElement.restrictedDates : undefined;
	}
	set restrictedDates(value) {
		if (this.nativeElement) {
			this.nativeElement.restrictedDates = value;
		}
	}

	/** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
	*	Property type: boolean
	*/
	get rightToLeft() {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value) {
		if (this.nativeElement) {
			this.nativeElement.rightToLeft = value;
		}
	}

	/** Sets or gets whether the spin buttons are displayed. Spin buttons are used to increment/decrement the date/time.
	*	Property type: boolean
	*/
	get spinButtons() {
		return this.nativeElement ? this.nativeElement.spinButtons : undefined;
	}
	set spinButtons(value) {
		if (this.nativeElement) {
			this.nativeElement.spinButtons = value;
		}
	}

	/** Sets the delay between repeats of the spin buttons in miliseconds.
	*	Property type: number
	*/
	get spinButtonsDelay() {
		return this.nativeElement ? this.nativeElement.spinButtonsDelay : undefined;
	}
	set spinButtonsDelay(value) {
		if (this.nativeElement) {
			this.nativeElement.spinButtonsDelay = value;
		}
	}

	/** Sets a delay before the first repeat iteration of spin buttons in miliseconds.
	*	Property type: number
	*/
	get spinButtonsInitialDelay() {
		return this.nativeElement ? this.nativeElement.spinButtonsInitialDelay : undefined;
	}
	set spinButtonsInitialDelay(value) {
		if (this.nativeElement) {
			this.nativeElement.spinButtonsInitialDelay = value;
		}
	}

	/** Sets or gets the position of the spin buttons.
	*	Property type: DateTimePickerSpinButtonsPosition
	*/
	get spinButtonsPosition() {
		return this.nativeElement ? this.nativeElement.spinButtonsPosition : undefined;
	}
	set spinButtonsPosition(value) {
		if (this.nativeElement) {
			this.nativeElement.spinButtonsPosition = value;
		}
	}

	/** Sets or gets the element's visual theme. 
	*	Property type: string
	*/
	get theme() {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value) {
		if (this.nativeElement) {
			this.nativeElement.theme = value;
		}
	}

	/** Enables/Disabled the tooltip for the important dates in the calendar pop-up.
	*	Property type: boolean
	*/
	get tooltip() {
		return this.nativeElement ? this.nativeElement.tooltip : undefined;
	}
	set tooltip(value) {
		if (this.nativeElement) {
			this.nativeElement.tooltip = value;
		}
	}

	/** Sets the delay of the calendar pop-up's tooltip before it appears.
	*	Property type: number
	*/
	get tooltipDelay() {
		return this.nativeElement ? this.nativeElement.tooltipDelay : undefined;
	}
	set tooltipDelay(value) {
		if (this.nativeElement) {
			this.nativeElement.tooltipDelay = value;
		}
	}

	/** Sets the position of the tooltip in the calendar pop-up.
	*	Property type: TooltipPosition
	*/
	get tooltipPosition() {
		return this.nativeElement ? this.nativeElement.tooltipPosition : undefined;
	}
	set tooltipPosition(value) {
		if (this.nativeElement) {
			this.nativeElement.tooltipPosition = value;
		}
	}

	/** Sets a template for the content of the calendar pop-up's tooltip. Accepts the id of or a reference to an HTMLTemplateElement.
	*	Property type: string | HTMLTemplateElement
	*/
	get tooltipTemplate() {
		return this.nativeElement ? this.nativeElement.tooltipTemplate : undefined;
	}
	set tooltipTemplate(value) {
		if (this.nativeElement) {
			this.nativeElement.tooltipTemplate = value;
		}
	}

	/** Sets or gets if the element can be focused.
	*	Property type: boolean
	*/
	get unfocusable() {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value) {
		if (this.nativeElement) {
			this.nativeElement.unfocusable = value;
		}
	}

	/** Determines the validation mechanism for the value by min/max.
	*	Property type: Validation
	*/
	get validation() {
		return this.nativeElement ? this.nativeElement.validation : undefined;
	}
	set validation(value) {
		if (this.nativeElement) {
			this.nativeElement.validation = value;
		}
	}

	/** Sets or gets the value. The value represents the current date/time that is set to the element as a DateTime object.
	*	Property type: any
	*/
	get value() {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value) {
		if (this.nativeElement) {
			this.nativeElement.value = value;
		}
	}

	/** Enables/Disabled week numbering in the calendar pop-up. 
	*	Property type: boolean
	*/
	get weekNumbers() {
		return this.nativeElement ? this.nativeElement.weekNumbers : undefined;
	}
	set weekNumbers(value) {
		if (this.nativeElement) {
			this.nativeElement.weekNumbers = value;
		}
	}

	/** Determines the number of visible weeks in the calendar pop-up.
	*	Property type: number
	*/
	get weeks() {
		return this.nativeElement ? this.nativeElement.weeks : undefined;
	}
	set weeks(value) {
		if (this.nativeElement) {
			this.nativeElement.weeks = value;
		}
	}

	/** Determines the first year of a 100 year span within which 2-digit years fall. The default value, 1926, would interpret the 2-digit year values 26-99 as 1926 to 1999 and values 00-25 as being 2000 to 2025.
	*	Property type: number
	*/
	get yearCutoff() {
		return this.nativeElement ? this.nativeElement.yearCutoff : undefined;
	}
	set yearCutoff(value) {
		if (this.nativeElement) {
			this.nativeElement.yearCutoff = value;
		}
	}


	// Gets the properties of the React component.
	get properties() {
		return ["animation","animationSettings","autoClose","autoCloseDelay","calendarButton","calendarButtonPosition","calendarMode","dayNameFormat","disabled","disableAutoNavigation","displayKind","displayModeView","dropDownAppendTo","dropDownDisplayMode","dropDownOverlay","dropDownPosition","editMode","enableMouseWheelAction","firstDayOfWeek","footerTemplate","formatString","headerTemplate","hideDayNames","hideOtherMonthDays","hideTooltipArrow","hint","importantDates","importantDatesTemplate","interval","label","locale","localizeFormatFunction","max","messages","min","name","nullable","opened","placeholder","readonly","restrictedDates","rightToLeft","spinButtons","spinButtonsDelay","spinButtonsInitialDelay","spinButtonsPosition","theme","tooltip","tooltipDelay","tooltipPosition","tooltipTemplate","unfocusable","validation","value","weekNumbers","weeks","yearCutoff"];
	}
	/**  This event is triggered when the value is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
	*   oldValue - The old value before it was changed presented as a DateTime object.
	*   value - The new value presented as a DateTime object.
	*/
	_onChange = null;	get onChange() {
		return this._onChange;
	}
	set onChange(value) {
		this._onChange = value;
	}
	/**  This event is triggered when the calendar pop-up is closed.
	*  @param event. The custom event. 	*/
	_onClose = null;	get onClose() {
		return this._onClose;
	}
	set onClose(value) {
		this._onClose = value;
	}
	/**  This event is triggered when the calendar pop-up is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	_onClosing = null;	get onClosing() {
		return this._onClosing;
	}
	set onClosing(value) {
		this._onClosing = value;
	}
	/**  This event is triggered when the calendar pop-up is opened.
	*  @param event. The custom event. 	*/
	_onOpen = null;	get onOpen() {
		return this._onOpen;
	}
	set onOpen(value) {
		this._onOpen = value;
	}
	/**  This event is triggered when the calendar pop-up is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	_onOpening = null;	get onOpening() {
		return this._onOpening;
	}
	set onOpening(value) {
		this._onOpening = value;
	}

	// Gets the events of the React component.
	get eventListeners() {
		return ["onChange","onClose","onClosing","onOpen","onOpening"];
	}
	/** Closes the calendar pop-up. 
	*/
    close(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.close();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.close();
            });
        }
    }

	/** Focuses the input. 
	*/
    focus(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.focus();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.focus();
            });
        }
    }

	/** Opens the calendar pop-up. 
	*/
    open(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.open();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.open();
            });
        }
    }

	/** Selects the text inside the input. 
	*/
    select(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.select();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select();
            });
        }
    }



	constructor(props) {
		super(props);
		this.componentRef = React.createRef();
	}

	componentDidRender(initialize) {
		const that = this;
		const props = {};
		const events = {};
		let styles = null;

		for(let prop in that.props) {
			if (prop === 'children') {
				continue;
			}

			if (prop === 'style') {
				styles = that.props[prop];
				continue;
			}

			if (prop.startsWith('on') && that.properties.indexOf(prop) === -1) {
				events[prop] = that.props[prop];
				continue;
			}

			props[prop] = that.props[prop];
		}

		if (initialize) {
			that.nativeElement = this.componentRef.current;
		}

		for(let prop in props) {
			if (prop === 'class') {
				const classNames = props[prop].trim().split(' ');

				for(let className in classNames) {
					if (!that.nativeElement.classList.contains(classNames[className]) && classNames[className] !== "") {
						that.nativeElement.classList.add(classNames[className]);
					}
				}

				continue;
			}

			if (props[prop] !== that.nativeElement[prop]) {
				const normalizeProp = (str) => {
					return str.replace(/-([a-z])/g, function (g) {
						return g[1].toUpperCase();
					});
				}

				if (prop === 'hover' || prop === 'active' || prop === 'focus' || prop === 'selected') {
					that.nativeElement.setAttribute(prop, '');
				}

				const normalizedProp = normalizeProp(prop);

				that.nativeElement[normalizedProp] = props[prop];
			}
		}

		
		for(let eventName in events) {
			that[eventName] = events[eventName];
			that.nativeElement[eventName.toLowerCase()] = events[eventName];
        }

		if (initialize) {
			if (that.onCreate) {
				that.onCreate();
			}

			that.nativeElement.whenRendered(() => {
				if (that.onReady) {
					that.onReady();
				}
			});
		}

		// setup styles.

		if (styles) {
			for(let styleName in styles) {
				that.nativeElement.style[styleName] = styles[styleName];
			}
		}
	}

	componentDidMount() {
		this.componentDidRender(true);
    }

	componentDidUpdate() {
		this.componentDidRender(false);
    }

	componentWillUnmount() {
		const that = this;

		if (!that.nativeElement) {
			return;
		}
		
		that.nativeElement.whenRenderedCallbacks = [];
		
		for(let i = 0; i < that.eventListeners.length; i++){
			const eventName = that.eventListeners[i];

			that.nativeElement.removeEventListener(eventName.substring(2).toLowerCase(), that[eventName]);
		}
	}

	render() {
		return (
			React.createElement("smart-date-time-picker", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default DateTimePicker;
