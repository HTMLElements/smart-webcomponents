import React from "react";
/**
 Calendar allows user to easily select one or more dates. This control supports multi-calendar view, special dates, holidays, weekends, decade views.
*/
export class Calendar extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Calendar' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Applies new animation settings when it is enabled. Properties:startSpeed - Determines the initial speed of the animation.easeThreshold - Determines the point at which the animation starts to slow down - the "ease effect".step - Determines the step ( scrolling interval ) at which the animation will run. stepEaseSize - Coefficient that is used to calculated the new step once the threshold has been passed. resetThreshold - Determines the threshold for animation reset. When it's reached the animation will start over.
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

	/** Determines the date controls inside the header of the Calendar.
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

	/** Determines the format of the day names located above the days inside the calendar.
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

	/**  A callback that can be used to customize the format of the month name when calendarMode is set to 'default'.
	*	Property type: any
	*/
	get dateFormatFunction() {
		return this.nativeElement ? this.nativeElement.dateFormatFunction : undefined;
	}
	set dateFormatFunction(value) {
		if (this.nativeElement) {
			this.nativeElement.dateFormatFunction = value;
		}
	}

	/** Enables or disables the Calendar.
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

	/** Disables auto navigation when the user clicks on a date that's not from the current month in view.
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

	/** Determines the date view of the calendar when calendarMode is set to 'default'
	*	Property type: CalendarDisplayMode
	*/
	get displayMode() {
		return this.nativeElement ? this.nativeElement.displayMode : undefined;
	}
	set displayMode(value) {
		if (this.nativeElement) {
			this.nativeElement.displayMode = value;
		}
	}

	/** Determines the type of the month/year view when calendarMode is set to Default.
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

	/** Determines the height of the month's drop down inside the Calendar.
	*	Property type: string | number
	*/
	get dropDownHeight() {
		return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
	}
	set dropDownHeight(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownHeight = value;
		}
	}

	/** Determines the width of the month's drop down inside the Calendar.
	*	Property type: string | number
	*/
	get dropDownWidth() {
		return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
	}
	set dropDownWidth(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownWidth = value;
		}
	}

	/** Determines the first day of the week. From 0(Sunday) to 6(Saturday)
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

	/** Sets a custom footer template. Accepts the id of an HTMLTemplateElement or a reference ot it.
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

	/** Sets custom header template. Accepts the id of an HTMLTemplateElement or a reference ot it.
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

	/** Hides the names of the weekdays.
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

	/** Hides the dates from other months.
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

	/** Hides the arrow of the tooltip.
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

	/** Sets the dates that will be displayed as important.
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

	/** Sets a template for the important dates. Accepts the id of an HTMLTemplate element inside the DOM of or a reference to it.
	*	Property type: any
	*/
	get importantDatesTemplate() {
		return this.nativeElement ? this.nativeElement.importantDatesTemplate : undefined;
	}
	set importantDatesTemplate(value) {
		if (this.nativeElement) {
			this.nativeElement.importantDatesTemplate = value;
		}
	}

	/**  Determines the language of the Calendar. 
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

	/** Determines the max date for the Calendar. Accepts date objects and valid date string formats.
	*	Property type: string | Date
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

	/** Determines the min date for the Calendar. Accepts date objects and valid date string formats.
	*	Property type: string | Date
	*/
	get min() {
		return this.nativeElement ? this.nativeElement.min : undefined;
	}
	set min(value) {
		if (this.nativeElement) {
			this.nativeElement.min = value;
		}
	}

	/** Determines the number of months to be displayed inside the calendar. The maximum amount of months that can be shown is 12. By default only 1 month is shown.
	*	Property type: number
	*/
	get months() {
		return this.nativeElement ? this.nativeElement.months : undefined;
	}
	set months(value) {
		if (this.nativeElement) {
			this.nativeElement.months = value;
		}
	}

	/** Determines the format of the month names in the header when DisplayMode is set to Default or when Months property is greater than 1. 
	*	Property type: MonthFormat
	*/
	get monthNameFormat() {
		return this.nativeElement ? this.nativeElement.monthNameFormat : undefined;
	}
	set monthNameFormat(value) {
		if (this.nativeElement) {
			this.nativeElement.monthNameFormat = value;
		}
	}

	/** Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
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

	/** If the element is readonly, users cannot interact with it.
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

	/** Sets restricted dates. Restricted dates are dates that cannot be selected/hovered/focused. They are visualy styled as restricted. The dates can be javascript date objects or strings representing a valid date.
	*	Property type: string[] | Date[]
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

	/**  Determines the direction of the navigation buttons located in the header and the animation.
	*	Property type: ViewLayout
	*/
	get scrollButtonsNavigationMode() {
		return this.nativeElement ? this.nativeElement.scrollButtonsNavigationMode : undefined;
	}
	set scrollButtonsNavigationMode(value) {
		if (this.nativeElement) {
			this.nativeElement.scrollButtonsNavigationMode = value;
		}
	}

	/**  Determines the position of the navigation buttons located inside the header. 
	*	Property type: LayoutPosition
	*/
	get scrollButtonsPosition() {
		return this.nativeElement ? this.nativeElement.scrollButtonsPosition : undefined;
	}
	set scrollButtonsPosition(value) {
		if (this.nativeElement) {
			this.nativeElement.scrollButtonsPosition = value;
		}
	}

	/** Sets the dates that will be selected. Selected dates are styled differently than the rest. The dates can be Date objects or strings in a valid date format.
	*	Property type: string[] | Date[]
	*/
	get selectedDates() {
		return this.nativeElement ? this.nativeElement.selectedDates : undefined;
	}
	set selectedDates(value) {
		if (this.nativeElement) {
			this.nativeElement.selectedDates = value;
		}
	}

	/** Determines the date selection mode.
	*	Property type: CalendarSelectionMode
	*/
	get selectionMode() {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value) {
		if (this.nativeElement) {
			this.nativeElement.selectionMode = value;
		}
	}

	/** Sets the delay between clicks of the date navigation buttons located in the header of the Calendar. 
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

	/** Determines the initial delay before the action of the date navigation buttons located in the header of the Calendar. 
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

	/** Determines the theme. Theme defines the look of the element
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

	/** Sets a template for the title section of the Calendar. Accepts the id of an HTMLTemplate element inside the DOM of or a reference it.
	*	Property type: any
	*/
	get titleTemplate() {
		return this.nativeElement ? this.nativeElement.titleTemplate : undefined;
	}
	set titleTemplate(value) {
		if (this.nativeElement) {
			this.nativeElement.titleTemplate = value;
		}
	}

	/** Enables/Disabled the tooltip for the important dates. If enabled when an important date is hovered a tooltip is displayed.
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

	/** Show/Hide the arrow of the the tooltip for the important dates. By default the arrow is visible.
	*	Property type: boolean
	*/
	get tooltipArrow() {
		return this.nativeElement ? this.nativeElement.tooltipArrow : undefined;
	}
	set tooltipArrow(value) {
		if (this.nativeElement) {
			this.nativeElement.tooltipArrow = value;
		}
	}

	/** Sets the delay of the tooltip before it appears.
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

	/** Set's a custom offset to the tooltip's position. Accepts an array of two numbers: the left coordinate and the top coordinate.
	*	Property type: number[][]
	*/
	get tooltipOffset() {
		return this.nativeElement ? this.nativeElement.tooltipOffset : undefined;
	}
	set tooltipOffset(value) {
		if (this.nativeElement) {
			this.nativeElement.tooltipOffset = value;
		}
	}

	/** Sets the position of the tooltip.
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

	/** Sets a template for the tooltip's content. Accepts the id of an HTMLTEmplate element inside the DOM or it's reference.
	*	Property type: any
	*/
	get tooltipTemplate() {
		return this.nativeElement ? this.nativeElement.tooltipTemplate : undefined;
	}
	set tooltipTemplate(value) {
		if (this.nativeElement) {
			this.nativeElement.tooltipTemplate = value;
		}
	}

	/** If is set to true, the element cannot be focused.
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

	/** Determines the orientation of the Calendar.
	*	Property type: ViewLayout
	*/
	get view() {
		return this.nativeElement ? this.nativeElement.view : undefined;
	}
	set view(value) {
		if (this.nativeElement) {
			this.nativeElement.view = value;
		}
	}

	/** Determines the visible sections of the Calendar. The view sections are : title, header, footer. Multiple sections can be applied at the same time. By default only the 'header' section is visible.
	*	Property type: string[]
	*/
	get viewSections() {
		return this.nativeElement ? this.nativeElement.viewSections : undefined;
	}
	set viewSections(value) {
		if (this.nativeElement) {
			this.nativeElement.viewSections = value;
		}
	}

	/** Enables/Disabled week numbering. If enabled week numbers are displayed infront of each week inside the Calendar.
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

	/** Determines the number of visible weeks. The value of the property ranges from 1 to 6. Where 1 is one week and 6 is a full month ( 6 weeks ).
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

	/** Determines the year format in the header when DisplayMode is set to Default or when Months property is greater than 1.
	*	Property type: YearFormat
	*/
	get yearFormat() {
		return this.nativeElement ? this.nativeElement.yearFormat : undefined;
	}
	set yearFormat(value) {
		if (this.nativeElement) {
			this.nativeElement.yearFormat = value;
		}
	}


	// Gets the properties of the React component.
	get properties() {
		return ["animation","animationSettings","calendarMode","dayNameFormat","dateFormatFunction","disabled","disableAutoNavigation","displayMode","displayModeView","dropDownHeight","dropDownWidth","firstDayOfWeek","footerTemplate","headerTemplate","hideDayNames","hideOtherMonthDays","hideTooltipArrow","importantDates","importantDatesTemplate","locale","localizeFormatFunction","max","messages","min","months","monthNameFormat","name","readonly","restrictedDates","rightToLeft","scrollButtonsNavigationMode","scrollButtonsPosition","selectedDates","selectionMode","spinButtonsDelay","spinButtonsInitialDelay","theme","titleTemplate","tooltip","tooltipArrow","tooltipDelay","tooltipOffset","tooltipPosition","tooltipTemplate","unfocusable","view","viewSections","weekNumbers","weeks","yearFormat"];
	}
	/**  This event is triggered when a new date has been selected/unselected.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value)
	*   value - An array of all currently selected dates.
	*/
	_onChange = null;	get onChange() {
		return this._onChange;
	}
	set onChange(value) {
		this._onChange = value;
	}
	/**  This event is triggered when the displayMode is about to change. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldDisplayMode, 	newDisplayMode)
	*   oldDisplayMode - The previous display mode.
	*   newDisplayMode - The new display mode.
	*/
	_onDisplayModeChanging = null;	get onDisplayModeChanging() {
		return this._onDisplayModeChanging;
	}
	set onDisplayModeChanging(value) {
		this._onDisplayModeChanging = value;
	}
	/**  This event is triggered when the display mode has changed.
	*  @param event. The custom event. 	*/
	_onDisplayModeChange = null;	get onDisplayModeChange() {
		return this._onDisplayModeChange;
	}
	set onDisplayModeChange(value) {
		this._onDisplayModeChange = value;
	}
	/**  This event is triggered when the view is changing. This navigation can be cancelled by using the preventDefault method.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	type)
	*   value - The view's date.
	*   type - The view type - 'month', 'decade' or 'year'.
	*/
	_onNavigationChanging = null;	get onNavigationChanging() {
		return this._onNavigationChanging;
	}
	set onNavigationChanging(value) {
		this._onNavigationChanging = value;
	}
	/**  This event is triggered when the view is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	type)
	*   value - The view's date.
	*   type - The view type - 'month', 'decade' or 'year'.
	*/
	_onNavigationChange = null;	get onNavigationChange() {
		return this._onNavigationChange;
	}
	set onNavigationChange(value) {
		this._onNavigationChange = value;
	}
	/**  This event is triggered when the tooltip for the important date is opened.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	value)
	*   target - The event target - tooltip.
	*   value - The important date of the hovered cell.
	*/
	_onOpen = null;	get onOpen() {
		return this._onOpen;
	}
	set onOpen(value) {
		this._onOpen = value;
	}
	/**  This event is triggered when the tooltip for the important date is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	value)
	*   target - The event target - tooltip.
	*   value - The important date of the hovered cell.
	*/
	_onClose = null;	get onClose() {
		return this._onClose;
	}
	set onClose(value) {
		this._onClose = value;
	}

	// Gets the events of the React component.
	get eventListeners() {
		return ["onChange","onDisplayModeChanging","onDisplayModeChange","onNavigationChanging","onNavigationChange","onOpen","onClose"];
	}
	/** Clears the selection. Removes all seleceted dates. 
	*/
    clearSelection(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSelection();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearSelection();
            });
        }
    }

	/** Navigates forwards/backwards depending on the argument. 
	* @param {number | Date | string} step. The argument can be the following: <ul><li> number -  representing the number of months to scroll. Can be negavtive. If negative it will scroll backwards.</li><li> Date - a date object representing the Date to navigate to.</li><li> string - a string representing a valid Date, e.g. "2020-10-1" </li></ul>
	* @returns {boolean}
  */
	async navigate(step) {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.navigate(step);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Selects or Unselects a date. 
	* @param {Date | string} date. The date to be selected or unselected. The date can be a Date object or a string in valid date format.
	*/
    select(date){
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(date);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(date);
            });
        }
    }

	/** Selects today's date. 
	* @returns {Date}
  */
	async today() {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.today();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
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
			React.createElement("smart-calendar", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Calendar;
