import React from "react";
/**
 Scheduler displays a set ot Events in Day, Week, Month, Agenda, Timeline Day, Timeline Week, Timeline Month views.
*/
export class Scheduler extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Scheduler' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Determines the scroll speed while dragging an event. 
	*	Property type: number
	*/
	get autoScrollStep() {
		return this.nativeElement ? this.nativeElement.autoScrollStep : undefined;
	}
	set autoScrollStep(value) {
		if (this.nativeElement) {
			this.nativeElement.autoScrollStep = value;
		}
	}

	/** Determines the color scheme for the event background selector in the event window editor. 
	*	Property type: string[]
	*/
	get colorScheme() {
		return this.nativeElement ? this.nativeElement.colorScheme : undefined;
	}
	set colorScheme(value) {
		if (this.nativeElement) {
			this.nativeElement.colorScheme = value;
		}
	}

	/** Enables/Disables the current time indicator. Current time indicator shows the current time in the appropriate view cells. 
	*	Property type: boolean
	*/
	get currentTimeIndicator() {
		return this.nativeElement ? this.nativeElement.currentTimeIndicator : undefined;
	}
	set currentTimeIndicator(value) {
		if (this.nativeElement) {
			this.nativeElement.currentTimeIndicator = value;
		}
	}

	/** Determines the refresh interval in seconds for the currentTimeIndicator. 
	*	Property type: number
	*/
	get currentTimeIndicatorInterval() {
		return this.nativeElement ? this.nativeElement.currentTimeIndicatorInterval : undefined;
	}
	set currentTimeIndicatorInterval(value) {
		if (this.nativeElement) {
			this.nativeElement.currentTimeIndicatorInterval = value;
		}
	}

	/** Determines the context menu items that are visible when the Context Menu is opened.
	*	Property type: any
	*/
	get contextMenuDataSource() {
		return this.nativeElement ? this.nativeElement.contextMenuDataSource : undefined;
	}
	set contextMenuDataSource(value) {
		if (this.nativeElement) {
			this.nativeElement.contextMenuDataSource = value;
		}
	}

	/** Allows to customize the content of the event elements. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties.
	*	Property type: any
	*/
	get eventTemplate() {
		return this.nativeElement ? this.nativeElement.eventTemplate : undefined;
	}
	set eventTemplate(value) {
		if (this.nativeElement) {
			this.nativeElement.eventTemplate = value;
		}
	}

	/** Allows to customize the content of the event collector elements. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties.
	*	Property type: any
	*/
	get eventCollectorTemplate() {
		return this.nativeElement ? this.nativeElement.eventCollectorTemplate : undefined;
	}
	set eventCollectorTemplate(value) {
		if (this.nativeElement) {
			this.nativeElement.eventCollectorTemplate = value;
		}
	}

	/**  Determines how the events inside the Scheduler are rendered.classic - the events are arranged next to each other and try to fit inside the cells.modern - the events obey the CSS property that determines their size and if there's not enough space inside the cell for all events to appear, an event collector is created to hold the rest of the events. On mobile phones only collectors are created.
	*	Property type: string
	*/
	get eventRenderMode() {
		return this.nativeElement ? this.nativeElement.eventRenderMode : undefined;
	}
	set eventRenderMode(value) {
		if (this.nativeElement) {
			this.nativeElement.eventRenderMode = value;
		}
	}

	/** Allows to customize the content of the event menu items (tooltip). When clicked on an event element an event menu with details opens. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties.
	*	Property type: any
	*/
	get eventTooltipTemplate() {
		return this.nativeElement ? this.nativeElement.eventTooltipTemplate : undefined;
	}
	set eventTooltipTemplate(value) {
		if (this.nativeElement) {
			this.nativeElement.eventTooltipTemplate = value;
		}
	}

	/** Allows to customize the content of the timeline cells. It can be an HTMLTemplateElement that will be applied to all cells or it's id as a string or a function that will be called for each cell with the following parameters: cellContent - the content holder for the cell,cellDate - the cell date.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the value of the cell.
	*	Property type: any
	*/
	get cellTemplate() {
		return this.nativeElement ? this.nativeElement.cellTemplate : undefined;
	}
	set cellTemplate(value) {
		if (this.nativeElement) {
			this.nativeElement.cellTemplate = value;
		}
	}

	/** Determines the currently visible date for the Scheduler.
	*	Property type: any
	*/
	get dateCurrent() {
		return this.nativeElement ? this.nativeElement.dateCurrent : undefined;
	}
	set dateCurrent(value) {
		if (this.nativeElement) {
			this.nativeElement.dateCurrent = value;
		}
	}

	/** Sets the Schedulers's Data Export options.
	*	Property type: SchedulerDataExport
	*/
	get dataExport() {
		return this.nativeElement ? this.nativeElement.dataExport : undefined;
	}
	set dataExport(value) {
		if (this.nativeElement) {
			this.nativeElement.dataExport = value;
		}
	}

	/** Determines the events that will be loaded inside the Timeline. Each event represents an object that should contain the following properties:
	*	Property type: SchedulerDataSource[]
	*/
	get dataSource() {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value) {
		if (this.nativeElement) {
			this.nativeElement.dataSource = value;
		}
	}

	/** A callback that can be used to customize the text inside the date selector located in the header. The callback has one parameter - the current date.
	*	Property type: any
	*/
	get dateSelectorFormatFunction() {
		return this.nativeElement ? this.nativeElement.dateSelectorFormatFunction : undefined;
	}
	set dateSelectorFormatFunction(value) {
		if (this.nativeElement) {
			this.nativeElement.dateSelectorFormatFunction = value;
		}
	}

	/** Determines the day format of the dates in the timeline.
	*	Property type: SchedulerDayFormat
	*/
	get dayFormat() {
		return this.nativeElement ? this.nativeElement.dayFormat : undefined;
	}
	set dayFormat(value) {
		if (this.nativeElement) {
			this.nativeElement.dayFormat = value;
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

	/** Disables auto scrolling of the timeline while dragging/resizing an event.
	*	Property type: boolean
	*/
	get disableAutoScroll() {
		return this.nativeElement ? this.nativeElement.disableAutoScroll : undefined;
	}
	set disableAutoScroll(value) {
		if (this.nativeElement) {
			this.nativeElement.disableAutoScroll = value;
		}
	}

	/** Disables dragging of events.
	*	Property type: boolean
	*/
	get disableDrag() {
		return this.nativeElement ? this.nativeElement.disableDrag : undefined;
	}
	set disableDrag(value) {
		if (this.nativeElement) {
			this.nativeElement.disableDrag = value;
		}
	}

	/** Disables dropping of events.
	*	Property type: boolean
	*/
	get disableDrop() {
		return this.nativeElement ? this.nativeElement.disableDrop : undefined;
	}
	set disableDrop(value) {
		if (this.nativeElement) {
			this.nativeElement.disableDrop = value;
		}
	}

	/** Disables resizing of events.
	*	Property type: boolean
	*/
	get disableResize() {
		return this.nativeElement ? this.nativeElement.disableResize : undefined;
	}
	set disableResize(value) {
		if (this.nativeElement) {
			this.nativeElement.disableResize = value;
		}
	}

	/** Disables the cell selection.
	*	Property type: boolean
	*/
	get disableSelection() {
		return this.nativeElement ? this.nativeElement.disableSelection : undefined;
	}
	set disableSelection(value) {
		if (this.nativeElement) {
			this.nativeElement.disableSelection = value;
		}
	}

	/** Disables the window editor for the events.
	*	Property type: boolean
	*/
	get disableWindowEditor() {
		return this.nativeElement ? this.nativeElement.disableWindowEditor : undefined;
	}
	set disableWindowEditor(value) {
		if (this.nativeElement) {
			this.nativeElement.disableWindowEditor = value;
		}
	}

	/** Disables the context menu of the events and cells.
	*	Property type: boolean
	*/
	get disableContextMenu() {
		return this.nativeElement ? this.nativeElement.disableContextMenu : undefined;
	}
	set disableContextMenu(value) {
		if (this.nativeElement) {
			this.nativeElement.disableContextMenu = value;
		}
	}

	/** Disables the event menu that appears when an event/collector has been clicked.
	*	Property type: boolean
	*/
	get disableEventMenu() {
		return this.nativeElement ? this.nativeElement.disableEventMenu : undefined;
	}
	set disableEventMenu(value) {
		if (this.nativeElement) {
			this.nativeElement.disableEventMenu = value;
		}
	}

	/** Disables the view menu that allows to select the current Scheduler view.
	*	Property type: boolean
	*/
	get disableViewMenu() {
		return this.nativeElement ? this.nativeElement.disableViewMenu : undefined;
	}
	set disableViewMenu(value) {
		if (this.nativeElement) {
			this.nativeElement.disableViewMenu = value;
		}
	}

	/** Disables the date menu that allows to select the current Scheduler date.
	*	Property type: boolean
	*/
	get disableDateMenu() {
		return this.nativeElement ? this.nativeElement.disableDateMenu : undefined;
	}
	set disableDateMenu(value) {
		if (this.nativeElement) {
			this.nativeElement.disableDateMenu = value;
		}
	}

	/** A callback that can be used to customize the drag feedback that appears when an event is dragged.
	*	Property type: any
	*/
	get dragFeedbackFormatFunction() {
		return this.nativeElement ? this.nativeElement.dragFeedbackFormatFunction : undefined;
	}
	set dragFeedbackFormatFunction(value) {
		if (this.nativeElement) {
			this.nativeElement.dragFeedbackFormatFunction = value;
		}
	}

	/** Determines the offset for the drag feedback from the pointer.
	*	Property type: any
	*/
	get dragOffset() {
		return this.nativeElement ? this.nativeElement.dragOffset : undefined;
	}
	set dragOffset(value) {
		if (this.nativeElement) {
			this.nativeElement.dragOffset = value;
		}
	}

	/** A getter that returns  an array of all Scheduler events.
	*	Property type: SchedulerEvent[]
	*/
	get events() {
		return this.nativeElement ? this.nativeElement.events : undefined;
	}
	set events(value) {
		if (this.nativeElement) {
			this.nativeElement.events = value;
		}
	}

	/** Determines the first day of week for the Scheduler. By default it's Sunday.
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

	/** Determines whether the events will be grouped by date.
	*	Property type: boolean
	*/
	get groupByDate() {
		return this.nativeElement ? this.nativeElement.groupByDate : undefined;
	}
	set groupByDate(value) {
		if (this.nativeElement) {
			this.nativeElement.groupByDate = value;
		}
	}

	/** Determines the grouping orientation.
	*	Property type: SchedulerGroupOrientation
	*/
	get groupOrientation() {
		return this.nativeElement ? this.nativeElement.groupOrientation : undefined;
	}
	set groupOrientation(value) {
		if (this.nativeElement) {
			this.nativeElement.groupOrientation = value;
		}
	}

	/** Allows to customize the content of the group cells that are visible inside the header. It can be an HTMLTemplateElement that will be applied to all cells or it's id as a string or a function that will be called for each group cell with the following parameters: cellContent - the content holder for the group cell.cellObj - the group cell object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties.
	*	Property type: any
	*/
	get groupTemplate() {
		return this.nativeElement ? this.nativeElement.groupTemplate : undefined;
	}
	set groupTemplate(value) {
		if (this.nativeElement) {
			this.nativeElement.groupTemplate = value;
		}
	}

	/** Determines the resources that the events are grouped by.
	*	Property type: any
	*/
	get groups() {
		return this.nativeElement ? this.nativeElement.groups : undefined;
	}
	set groups(value) {
		if (this.nativeElement) {
			this.nativeElement.groups = value;
		}
	}

	/** Determines the end hour that will be displayed in 'day' and 'week' views.
	*	Property type: number
	*/
	get hourEnd() {
		return this.nativeElement ? this.nativeElement.hourEnd : undefined;
	}
	set hourEnd(value) {
		if (this.nativeElement) {
			this.nativeElement.hourEnd = value;
		}
	}

	/** Determines the start hour that will be displayed in 'day' and 'week' views.
	*	Property type: number
	*/
	get hourStart() {
		return this.nativeElement ? this.nativeElement.hourStart : undefined;
	}
	set hourStart(value) {
		if (this.nativeElement) {
			this.nativeElement.hourStart = value;
		}
	}

	/** Determines the formatting of hours inside the element.
	*	Property type: SchedulerHourFormat
	*/
	get hourFormat() {
		return this.nativeElement ? this.nativeElement.hourFormat : undefined;
	}
	set hourFormat(value) {
		if (this.nativeElement) {
			this.nativeElement.hourFormat = value;
		}
	}

	/** Allows to customize the header of the Scheduler. It can be an HTMLTemplateElement, it's id as a string or a function with the following parameters: headerContent - the header container..
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

	/**  Determines the position of the Date selector inside the Header of the element.
	*	Property type: SchedulerHeaderDatePosition
	*/
	get headerDatePosition() {
		return this.nativeElement ? this.nativeElement.headerDatePosition : undefined;
	}
	set headerDatePosition(value) {
		if (this.nativeElement) {
			this.nativeElement.headerDatePosition = value;
		}
	}

	/**  Determines the styling of the Header navigation controls.
	*	Property type: SchedulerHeaderNavigationStyle
	*/
	get headerNavigationStyle() {
		return this.nativeElement ? this.nativeElement.headerNavigationStyle : undefined;
	}
	set headerNavigationStyle(value) {
		if (this.nativeElement) {
			this.nativeElement.headerNavigationStyle = value;
		}
	}

	/**  Determines the position of the view selector control inside the Header of the element.
	*	Property type: SchedulerHeaderViewPosition
	*/
	get headerViewPosition() {
		return this.nativeElement ? this.nativeElement.headerViewPosition : undefined;
	}
	set headerViewPosition(value) {
		if (this.nativeElement) {
			this.nativeElement.headerViewPosition = value;
		}
	}

	/** Determines whether the 'All Day' container with the all day events is hidden or not.
	*	Property type: boolean
	*/
	get hideAllDay() {
		return this.nativeElement ? this.nativeElement.hideAllDay : undefined;
	}
	set hideAllDay(value) {
		if (this.nativeElement) {
			this.nativeElement.hideAllDay = value;
		}
	}

	/** Determines whether the days set by 'nonworkingDays' property are hidden or not.
	*	Property type: boolean
	*/
	get hideNonworkingWeekdays() {
		return this.nativeElement ? this.nativeElement.hideNonworkingWeekdays : undefined;
	}
	set hideNonworkingWeekdays(value) {
		if (this.nativeElement) {
			this.nativeElement.hideNonworkingWeekdays = value;
		}
	}

	/** Determines whether the 'Today' button is hidden or not.
	*	Property type: boolean
	*/
	get hideTodayButton() {
		return this.nativeElement ? this.nativeElement.hideTodayButton : undefined;
	}
	set hideTodayButton(value) {
		if (this.nativeElement) {
			this.nativeElement.hideTodayButton = value;
		}
	}

	/** Determines whether the checkable items in the view selection menu are hidden or not.
	*	Property type: boolean
	*/
	get hideViewMenuCheckableItems() {
		return this.nativeElement ? this.nativeElement.hideViewMenuCheckableItems : undefined;
	}
	set hideViewMenuCheckableItems(value) {
		if (this.nativeElement) {
			this.nativeElement.hideViewMenuCheckableItems = value;
		}
	}

	/** Determines whether the weekend days are hidden or not.
	*	Property type: boolean
	*/
	get hideWeekend() {
		return this.nativeElement ? this.nativeElement.hideWeekend : undefined;
	}
	set hideWeekend(value) {
		if (this.nativeElement) {
			this.nativeElement.hideWeekend = value;
		}
	}

	/** Determines weather or not horizontal scrollbar is shown.
	*	Property type: HorizontalScrollBarVisibility
	*/
	get horizontalScrollBarVisibility() {
		return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
	}
	set horizontalScrollBarVisibility(value) {
		if (this.nativeElement) {
			this.nativeElement.horizontalScrollBarVisibility = value;
		}
	}

	/**  Determines the language of the Scheduler. 
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

	/** Detetmines the maximum view date for the Scheduler.
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

	/** Detetmines the minimum view date for the Scheduler.
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

	/** Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale. 
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

	/** Determines the minute formatting inside the Scheduler.
	*	Property type: MinuteFormat
	*/
	get minuteFormat() {
		return this.nativeElement ? this.nativeElement.minuteFormat : undefined;
	}
	set minuteFormat(value) {
		if (this.nativeElement) {
			this.nativeElement.minuteFormat = value;
		}
	}

	/** Determines the month name formatting inside the Scheduler.
	*	Property type: MonthFormat
	*/
	get monthFormat() {
		return this.nativeElement ? this.nativeElement.monthFormat : undefined;
	}
	set monthFormat(value) {
		if (this.nativeElement) {
			this.nativeElement.monthFormat = value;
		}
	}

	/** Determines the nonworking days of the week from 0 to 6, where 0 is the first day of the week and 6 is the last day. Nonworking days will be colored differently inside the Timeline. The color is determined by a CSS variable.
	*	Property type: any
	*/
	get nonworkingDays() {
		return this.nativeElement ? this.nativeElement.nonworkingDays : undefined;
	}
	set nonworkingDays(value) {
		if (this.nativeElement) {
			this.nativeElement.nonworkingDays = value;
		}
	}

	/** Determines the nonworking hours of the day. Hours are represented as numbers inside an array, however ranges of hours can be defined as an array with starting and ending hour separated by a comma. In the timline the cells that represent nonworking days are colored differently from the rest.
	*	Property type: any
	*/
	get nonworkingHours() {
		return this.nativeElement ? this.nativeElement.nonworkingHours : undefined;
	}
	set nonworkingHours(value) {
		if (this.nativeElement) {
			this.nativeElement.nonworkingHours = value;
		}
	}

	/** Determines the interval (in seconds) at which the element will check for notifications.
	*	Property type: number
	*/
	get notificationInterval() {
		return this.nativeElement ? this.nativeElement.notificationInterval : undefined;
	}
	set notificationInterval(value) {
		if (this.nativeElement) {
			this.nativeElement.notificationInterval = value;
		}
	}

	/** Determines the visibility of the resize handles.
	*	Property type: ResizeHandlesVisibility
	*/
	get resizeHandlesVisibility() {
		return this.nativeElement ? this.nativeElement.resizeHandlesVisibility : undefined;
	}
	set resizeHandlesVisibility(value) {
		if (this.nativeElement) {
			this.nativeElement.resizeHandlesVisibility = value;
		}
	}

	/** Determines the rate at which the element will refresh it's content on element resize. By default it's refresh immediately. This property is used for element resize throttling
	*	Property type: number
	*/
	get resizeInterval() {
		return this.nativeElement ? this.nativeElement.resizeInterval : undefined;
	}
	set resizeInterval(value) {
		if (this.nativeElement) {
			this.nativeElement.resizeInterval = value;
		}
	}

	/** An array of resources that can be assigned to the events.
	*	Property type: SchedulerResource[]
	*/
	get resources() {
		return this.nativeElement ? this.nativeElement.resources : undefined;
	}
	set resources(value) {
		if (this.nativeElement) {
			this.nativeElement.resources = value;
		}
	}

	/** Defines an array of dates that are not allowed to have events on. Events that overlap restricted Dates or start/end on them will not be displayed.
	*	Property type: any
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

	/**  Determines the position of the date navigation navigation buttons inside the header of the element.
	*	Property type: SchedulerScrollButtonsPosition
	*/
	get scrollButtonsPosition() {
		return this.nativeElement ? this.nativeElement.scrollButtonsPosition : undefined;
	}
	set scrollButtonsPosition(value) {
		if (this.nativeElement) {
			this.nativeElement.scrollButtonsPosition = value;
		}
	}

	/** Enables/Disables the current time shader. If enabled all cells that represent past time will be shaded.
	*	Property type: boolean
	*/
	get shadeUntilCurrentTime() {
		return this.nativeElement ? this.nativeElement.shadeUntilCurrentTime : undefined;
	}
	set shadeUntilCurrentTime(value) {
		if (this.nativeElement) {
			this.nativeElement.shadeUntilCurrentTime = value;
		}
	}

	/** Determines the repeating delay of the repeat buttons inside the header of the element. Such buttons are the Date navigation buttons and the view scroll buttons.
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

	/** Determines the initial delay of the repeat buttons inside the header of the element. Such buttons are the Date navigation buttons and the view scroll buttons.
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

	/** Defines the statuses that will be available for selection thourgh the window editor for the events.
	*	Property type: SchedulerStatuse[]
	*/
	get statuses() {
		return this.nativeElement ? this.nativeElement.statuses : undefined;
	}
	set statuses(value) {
		if (this.nativeElement) {
			this.nativeElement.statuses = value;
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

	/** A format function for the Header of the Timeline. Allows to modify the date labels in the header cells.
	*	Property type: any
	*/
	get timelineHeaderFormatFunction() {
		return this.nativeElement ? this.nativeElement.timelineHeaderFormatFunction : undefined;
	}
	set timelineHeaderFormatFunction(value) {
		if (this.nativeElement) {
			this.nativeElement.timelineHeaderFormatFunction = value;
		}
	}

	/** Determines the date scale for the timeline cells.
	*	Property type: SchedulerTimelineDayScale
	*/
	get timelineDayScale() {
		return this.nativeElement ? this.nativeElement.timelineDayScale : undefined;
	}
	set timelineDayScale(value) {
		if (this.nativeElement) {
			this.nativeElement.timelineDayScale = value;
		}
	}

	/** Enables/Disables the tick marks next to the time cells in the vertical header of the element. Time header appears in 'day' and 'week' views.
	*	Property type: string
	*/
	get timeRulerTicks() {
		return this.nativeElement ? this.nativeElement.timeRulerTicks : undefined;
	}
	set timeRulerTicks(value) {
		if (this.nativeElement) {
			this.nativeElement.timeRulerTicks = value;
		}
	}

	/** Determines the timeZone that the dates will be displayed in. Accepts values from the IANA time zone database. By default it uses the local time zone.
	*	Property type: string
	*/
	get timeZone() {
		return this.nativeElement ? this.nativeElement.timeZone : undefined;
	}
	set timeZone(value) {
		if (this.nativeElement) {
			this.nativeElement.timeZone = value;
		}
	}

	/** Allows to display multiple timeZones at once. Accepts an array values from the IANA time zone database. By default it uses the local time zone.
	*	Property type: any
	*/
	get timeZones() {
		return this.nativeElement ? this.nativeElement.timeZones : undefined;
	}
	set timeZones(value) {
		if (this.nativeElement) {
			this.nativeElement.timeZones = value;
		}
	}

	/** Determines the delay ( in miliseconds) before the tooltip/menu appears.
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

	/** Determines the offset ot the tooltip/menu.
	*	Property type: number[]
	*/
	get tooltipOffset() {
		return this.nativeElement ? this.nativeElement.tooltipOffset : undefined;
	}
	set tooltipOffset(value) {
		if (this.nativeElement) {
			this.nativeElement.tooltipOffset = value;
		}
	}

	/** Determines weather or not vertical scrollbar is shown.
	*	Property type: VerticalScrollBarVisibility
	*/
	get verticalScrollBarVisibility() {
		return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
	}
	set verticalScrollBarVisibility(value) {
		if (this.nativeElement) {
			this.nativeElement.verticalScrollBarVisibility = value;
		}
	}

	/** Determines the current view. The property accepts view values that are defined in the views property. Custom views should contain a valid value that will be set as the current view.
	*	Property type: string
	*/
	get view() {
		return this.nativeElement ? this.nativeElement.view : undefined;
	}
	set view(value) {
		if (this.nativeElement) {
			this.nativeElement.view = value;
		}
	}

	/** Indicates the current Scheduler viewType. Custom views must contain a valid type property that corresponds to one of the view types. This property should not be set.
	*	Property type: SchedulerViewType
	*/
	get viewType() {
		return this.nativeElement ? this.nativeElement.viewType : undefined;
	}
	set viewType(value) {
		if (this.nativeElement) {
			this.nativeElement.viewType = value;
		}
	}

	/** Determines the viewing date range of the timeline. Custom views can be defined as objects instead of strings. The view object should contain the following properties: label - the label for the view.value - the value for the view. The value is the unique identifier for the view.type - the type of view. The type should be one of the default allowed values for a view.hideWeekend - an Optional property that allows to hide the weekend only for this specific view.hideNonworkingWeekdays - an Optional property that allows to hide the nonwrking weekdays for this specific view.shortcutKey - an Optional property that allows to set a custom shortcut key for the view.
	*	Property type: SchedulerViews
	*/
	get views() {
		return this.nativeElement ? this.nativeElement.views : undefined;
	}
	set views(value) {
		if (this.nativeElement) {
			this.nativeElement.views = value;
		}
	}

	/** Determines type of the view selector located in the header of the element.
	*	Property type: SchedulerViewSelectorType
	*/
	get viewSelectorType() {
		return this.nativeElement ? this.nativeElement.viewSelectorType : undefined;
	}
	set viewSelectorType(value) {
		if (this.nativeElement) {
			this.nativeElement.viewSelectorType = value;
		}
	}

	/** Determines the format of the week days inside the element. 
	*	Property type: WeekDayFormat
	*/
	get weekdayFormat() {
		return this.nativeElement ? this.nativeElement.weekdayFormat : undefined;
	}
	set weekdayFormat(value) {
		if (this.nativeElement) {
			this.nativeElement.weekdayFormat = value;
		}
	}

	/** Determines the format of the dates inside the timeline header when they represent years.
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

	/** A function that can be used to completly customize the popup Window that is used to edit events. The function has the following arguments: target - the target popup Window that is about to be opened.type - the type of the window. The type determines the purpose of the window. The default type is an empty string which means that it's the default event editing window. The other type is 'confirm' ( confirmation window) that appears when clicking on a repeating event. eventObj - the event object that is going to be edited.
	*	Property type: any
	*/
	get windowCustomizationFunction() {
		return this.nativeElement ? this.nativeElement.windowCustomizationFunction : undefined;
	}
	set windowCustomizationFunction(value) {
		if (this.nativeElement) {
			this.nativeElement.windowCustomizationFunction = value;
		}
	}


	// Gets the properties of the React component.
	get properties() {
		return ["autoScrollStep","colorScheme","currentTimeIndicator","currentTimeIndicatorInterval","contextMenuDataSource","eventTemplate","eventCollectorTemplate","eventRenderMode","eventTooltipTemplate","cellTemplate","dateCurrent","dataExport","dataSource","dateSelectorFormatFunction","dayFormat","disabled","disableAutoScroll","disableDrag","disableDrop","disableResize","disableSelection","disableWindowEditor","disableContextMenu","disableEventMenu","disableViewMenu","disableDateMenu","dragFeedbackFormatFunction","dragOffset","events","firstDayOfWeek","groupByDate","groupOrientation","groupTemplate","groups","hourEnd","hourStart","hourFormat","headerTemplate","headerDatePosition","headerNavigationStyle","headerViewPosition","hideAllDay","hideNonworkingWeekdays","hideTodayButton","hideViewMenuCheckableItems","hideWeekend","horizontalScrollBarVisibility","locale","max","min","messages","minuteFormat","monthFormat","nonworkingDays","nonworkingHours","notificationInterval","resizeHandlesVisibility","resizeInterval","resources","restrictedDates","rightToLeft","scrollButtonsPosition","shadeUntilCurrentTime","spinButtonsDelay","spinButtonsInitialDelay","statuses","theme","timelineHeaderFormatFunction","timelineDayScale","timeRulerTicks","timeZone","timeZones","tooltipDelay","tooltipOffset","verticalScrollBarVisibility","view","viewType","views","viewSelectorType","weekdayFormat","yearFormat","unfocusable","windowCustomizationFunction"];
	}
	/**  This event is triggered when a batch update was started after executing the beginUpdate method.
	*  @param event. The custom event. 	*/
	_onBeginUpdate = null;	get onBeginUpdate() {
		return this._onBeginUpdate;
	}
	set onBeginUpdate(value) {
		this._onBeginUpdate = value;
	}
	/**  This event is triggered when a batch update was ended from after executing the endUpdate method.
	*  @param event. The custom event. 	*/
	_onEndUpdate = null;	get onEndUpdate() {
		return this._onEndUpdate;
	}
	set onEndUpdate(value) {
		this._onEndUpdate = value;
	}
	/**  This event is triggered when a new cell is selected/unselected.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue)
	*   value - The new selected Date.
	*   oldValue - The previously selected Date.
	*/
	_onChange = null;	get onChange() {
		return this._onChange;
	}
	set onChange(value) {
		this._onChange = value;
	}
	/**  This event is triggered when en event, event item or a context menu item is clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type, 	itemObj)
	*   item - The HTMLElement for the event.
	*   type - The type of item that is clicked. The possible values are: <ul><li>event - when an event item is clicked.</li><li>context - when a context menu item is clicked.</li></ul>.
	*   itemObj - The event object.
	*/
	_onItemClick = null;	get onItemClick() {
		return this._onItemClick;
	}
	set onItemClick(value) {
		this._onItemClick = value;
	}
	/**  This event is triggered when an Event is inserted.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item)
	*   item - An object that represents the actual item with it's attributes.
	*/
	_onItemInsert = null;	get onItemInsert() {
		return this._onItemInsert;
	}
	set onItemInsert(value) {
		this._onItemInsert = value;
	}
	/**  This event is triggered when an Event is removed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item)
	*   item - An object that represents the actual item with it's attributes.
	*/
	_onItemRemove = null;	get onItemRemove() {
		return this._onItemRemove;
	}
	set onItemRemove(value) {
		this._onItemRemove = value;
	}
	/**  This event is triggered when an Event is updated.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	item)
	*   type - The type of item that has been modified.
	*   item - An object that represents the actual item with it's attributes.
	*/
	_onItemUpdate = null;	get onItemUpdate() {
		return this._onItemUpdate;
	}
	set onItemUpdate(value) {
		this._onItemUpdate = value;
	}
	/**  This event is triggered when the view is changed via user interaction.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
	*   oldValue - The value of the previously selected view.
	*   value - The value of the new selected view.
	*/
	_onViewChange = null;	get onViewChange() {
		return this._onViewChange;
	}
	set onViewChange(value) {
		this._onViewChange = value;
	}
	/**  This event is triggered when a shortcut key for an event is pressed. By default only 'Delete' key is used.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	key, 	target, 	eventObj)
	*   key - The shortcut key that was pressed.
	*   target - The event target (HTMLElement).
	*   eventObj - The scheduler Event object that affected by the keypress.
	*/
	_onEventShortcutKey = null;	get onEventShortcutKey() {
		return this._onEventShortcutKey;
	}
	set onEventShortcutKey(value) {
		this._onEventShortcutKey = value;
	}
	/**  This event is triggered when the 'dateCurrent' property is changed. This can be caused by navigating to a different date.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
	*   oldValue - The previous current date that was in view.
	*   value - The current date in view.
	*/
	_onDateChange = null;	get onDateChange() {
		return this._onDateChange;
	}
	set onDateChange(value) {
		this._onDateChange = value;
	}
	/**  This event is triggered when dragging of an event begins. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	itemDateRange, 	originalEvent)
	*   target - The HTMLElement that corresponds to the event that is going to be dragged.
	*   item - The scheduler Event object that is going to be dragged.
	*   itemDateRange - The start/end dates for the Scheduler Event.
	*   originalEvent - The original event object.
	*/
	_onDragStart = null;	get onDragStart() {
		return this._onDragStart;
	}
	set onDragStart(value) {
		this._onDragStart = value;
	}
	/**  This event is triggered when dragging of an event finishes.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	itemDateRange, 	originalEvent)
	*   target - The HTMLElement that corresponds to the event that is dragged.
	*   item - The scheduler Event object that is dragged.
	*   itemDateRange - The new start/end dates for the dragged Scheduler Event.
	*   originalEvent - The original event object.
	*/
	_onDragEnd = null;	get onDragEnd() {
		return this._onDragEnd;
	}
	set onDragEnd(value) {
		this._onDragEnd = value;
	}
	/**  This event is triggered when resizing of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	itemDateRange, 	originalEvent)
	*   target - The HTMLElement that corresponds to the event that is going to be resized.
	*   item - The scheduler Event object that is going to be resized.
	*   itemDateRange - The start/end dates for Scheduler Event that is going to be resized.
	*   originalEvent - The original event object.
	*/
	_onResizeStart = null;	get onResizeStart() {
		return this._onResizeStart;
	}
	set onResizeStart(value) {
		this._onResizeStart = value;
	}
	/**  This event is triggered when the resizing of an event finishes.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	itemDateRange, 	originalEvent)
	*   target - The HTMLElement that corresponds to the event that is resized.
	*   item - The scheduler Event object that is resized.
	*   itemDateRange - The new start/end dates for the resized Scheduler Event.
	*   originalEvent - The original event object.
	*/
	_onResizeEnd = null;	get onResizeEnd() {
		return this._onResizeEnd;
	}
	set onResizeEnd(value) {
		this._onResizeEnd = value;
	}
	/**  This event is triggered when the user starts top open the event dialog window. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	type)
	*   target - The dialog window that is opening.
	*   item - The event object that is going to be edited.
	*   type - The type of window that is going to open. Two window types are available, the dafault which is an empty string ( does not have a type) and 'confirm' which is displayed when clicked on a repeating event.
	*/
	_onEditDialogOpening = null;	get onEditDialogOpening() {
		return this._onEditDialogOpening;
	}
	set onEditDialogOpening(value) {
		this._onEditDialogOpening = value;
	}
	/**  This event is triggered when the user opens the event dialog window.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	editors, 	item)
	*   target - The dialog window that is opened.
	*   editors - An object containing all event editors that are present inside the window. This property is undefined when the window is of type 'confirm', because confirm windows do not contain editors.
	*   item - The event object that is being edited.
	*/
	_onEditDialogOpen = null;	get onEditDialogOpen() {
		return this._onEditDialogOpen;
	}
	set onEditDialogOpen(value) {
		this._onEditDialogOpen = value;
	}
	/**  This event is triggered when the user closes the event dialog window.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	editors, 	item)
	*   target - The dialog window that is closed.
	*   editors - An object containing all event editors that are present inside the window. This property is undefined when the window is of type 'confirm', because confirm windows do not contain editors.
	*   item - The event object that is being edited.
	*/
	_onEditDialogClose = null;	get onEditDialogClose() {
		return this._onEditDialogClose;
	}
	set onEditDialogClose(value) {
		this._onEditDialogClose = value;
	}
	/**  This event is triggered when the user is about to close the event dialog window. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	type)
	*   target - The dialog window that is closing.
	*   item - The event object that is edited.
	*   type - The type of window that is going to be closed. Two window types are available, the dafault which is an empty string ( does not have a type) and 'confirm' which is displayed when clicked on a repeating event.
	*/
	_onEditDialogClosing = null;	get onEditDialogClosing() {
		return this._onEditDialogClosing;
	}
	set onEditDialogClosing(value) {
		this._onEditDialogClosing = value;
	}
	/**  This event is triggered when the user begins to open the context menu on a timeline cell or an event element. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	cellObj, 	eventObj)
	*   target - The context menu instance.
	*   owner - The HTMLElement that the menu belongs to.
	*   cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
	*   eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
	*/
	_onContextMenuOpening = null;	get onContextMenuOpening() {
		return this._onContextMenuOpening;
	}
	set onContextMenuOpening(value) {
		this._onContextMenuOpening = value;
	}
	/**  This event is triggered when the context menu is opened.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	cellObj, 	eventObj)
	*   target - The context menu instance.
	*   owner - The HTMLElement that the menu belongs to.
	*   cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
	*   eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
	*/
	_onContextMenuOpen = null;	get onContextMenuOpen() {
		return this._onContextMenuOpen;
	}
	set onContextMenuOpen(value) {
		this._onContextMenuOpen = value;
	}
	/**  This event is triggered when the context menu is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	cellObj, 	eventObj)
	*   target - The context menu instance.
	*   owner - The HTMLElement that the menu belongs to.
	*   cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
	*   eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
	*/
	_onContextMenuClose = null;	get onContextMenuClose() {
		return this._onContextMenuClose;
	}
	set onContextMenuClose(value) {
		this._onContextMenuClose = value;
	}
	/**  This event is triggered when the user is about to close the context menu. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	cellObj, 	eventObj)
	*   target - The context menu instance.
	*   owner - The HTMLElement that the menu belongs to.
	*   cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
	*   eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
	*/
	_onContextMenuClosing = null;	get onContextMenuClosing() {
		return this._onContextMenuClosing;
	}
	set onContextMenuClosing(value) {
		this._onContextMenuClosing = value;
	}
	/**  This event is triggered when the event menu is about to open. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	eventObj)
	*   target - The menu instance.
	*   owner - The HTMLElement of the event that the menu belongs to.
	*   eventObj - The event object that is the target of the menu.
	*/
	_onEventMenuOpening = null;	get onEventMenuOpening() {
		return this._onEventMenuOpening;
	}
	set onEventMenuOpening(value) {
		this._onEventMenuOpening = value;
	}
	/**  This event is triggered when the event menu is opened.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	eventObj)
	*   target - The menu instance.
	*   owner - The HTMLElement of the event that the menu belongs to.
	*   eventObj - The event object that is the target of the menu.
	*/
	_onEventMenuOpen = null;	get onEventMenuOpen() {
		return this._onEventMenuOpen;
	}
	set onEventMenuOpen(value) {
		this._onEventMenuOpen = value;
	}
	/**  This event is triggered when the event menu is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	eventObj)
	*   target - The menu instance.
	*   owner - The HTMLElement of the event that the menu belongs to.
	*   eventObj - The event object that is the target of the menu.
	*/
	_onEventMenuClose = null;	get onEventMenuClose() {
		return this._onEventMenuClose;
	}
	set onEventMenuClose(value) {
		this._onEventMenuClose = value;
	}
	/**  This event is triggered when the evet menu is about to close. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	eventObj)
	*   target - The menu instance.
	*   owner - The HTMLElement of the event that the menu belongs to.
	*   eventObj - The event object that is the target of the menu.
	*/
	_onEventMenuClosing = null;	get onEventMenuClosing() {
		return this._onEventMenuClosing;
	}
	set onEventMenuClosing(value) {
		this._onEventMenuClosing = value;
	}
	/**  This event is triggered when the date selection menu is opened.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target)
	*   target - The menu instance.
	*/
	_onDateMenuOpen = null;	get onDateMenuOpen() {
		return this._onDateMenuOpen;
	}
	set onDateMenuOpen(value) {
		this._onDateMenuOpen = value;
	}
	/**  This event is triggered when the date selection menu is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target)
	*   target - The menu instance.
	*/
	_onDateMenuClose = null;	get onDateMenuClose() {
		return this._onDateMenuClose;
	}
	set onDateMenuClose(value) {
		this._onDateMenuClose = value;
	}
	/**  This event is triggered when the view selection menu is opened.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target)
	*   target - The menu instance.
	*/
	_onViewMenuOpen = null;	get onViewMenuOpen() {
		return this._onViewMenuOpen;
	}
	set onViewMenuOpen(value) {
		this._onViewMenuOpen = value;
	}
	/**  This event is triggered when the view selection menu is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target)
	*   target - The menu instance.
	*/
	_onViewMenuClose = null;	get onViewMenuClose() {
		return this._onViewMenuClose;
	}
	set onViewMenuClose(value) {
		this._onViewMenuClose = value;
	}
	/**  This event is triggered when a notification is opened.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	instance)
	*   instance - The toast item instance that is opened.
	*/
	_onNotificationOpen = null;	get onNotificationOpen() {
		return this._onNotificationOpen;
	}
	set onNotificationOpen(value) {
		this._onNotificationOpen = value;
	}
	/**  This event is triggered when a notification is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	instance)
	*   instance - The toast item instance that is closed.
	*/
	_onNotificationClose = null;	get onNotificationClose() {
		return this._onNotificationClose;
	}
	set onNotificationClose(value) {
		this._onNotificationClose = value;
	}

	// Gets the events of the React component.
	get eventListeners() {
		return ["onBeginUpdate","onEndUpdate","onChange","onItemClick","onItemInsert","onItemRemove","onItemUpdate","onViewChange","onEventShortcutKey","onDateChange","onDragStart","onDragEnd","onResizeStart","onResizeEnd","onEditDialogOpening","onEditDialogOpen","onEditDialogClose","onEditDialogClosing","onContextMenuOpening","onContextMenuOpen","onContextMenuClose","onContextMenuClosing","onEventMenuOpening","onEventMenuOpen","onEventMenuClose","onEventMenuClosing","onDateMenuOpen","onDateMenuClose","onViewMenuOpen","onViewMenuClose","onNotificationOpen","onNotificationClose"];
	}
	/** Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once. 
	*/
    beginUpdate(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginUpdate();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.beginUpdate();
            });
        }
    }

	/** Ends the update operation. This method will resume the rendering and will refresh the element. 
	*/
    endUpdate(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.endUpdate();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.endUpdate();
            });
        }
    }

	/** Refereshes the Scheduler by recalculating the Scrollbars.  
	* @param {boolean} fullRefresh?. If set the Scheduler will be re-rendered completely.
	*/
    refresh(fullRefresh){
        if (this.nativeElement.isRendered) {
            this.nativeElement.refresh(fullRefresh);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refresh(fullRefresh);
            });
        }
    }

	/** Exports the events from the Scheduler. 
	* @param {string} dataFormat. Determines the format of the exported file. The following values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li><li><b>iCal</b></li></ul>
	* @param {any} callback?. A callback that allows to format the exported data based on a condition. For additional details, refer ro the Smart Export Documentation.
	*/
    exportData(dataFormat, callback){
        if (this.nativeElement.isRendered) {
            this.nativeElement.exportData(dataFormat, callback);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.exportData(dataFormat, callback);
            });
        }
    }

	/** Returns a JSON representation of the events inside the Scheduler. 
	* @returns {any}
  */
	async getState() {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getState();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Removes a previously saved state of the element form LocalStorage according to it's id. Requires an id to be set to the element. 
	*/
    clearState(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearState();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearState();
            });
        }
    }

	/** Loads a previously saved state of the element or checks LocalStorage for any saved states if no argument is passed to the method. 
	* @param {any[]} state?. An Array containing a valid structure of Scheduler events. If no state is provided, the element will check localStorage for a saved state.
	*/
    loadState(state){
        if (this.nativeElement.isRendered) {
            this.nativeElement.loadState(state);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.loadState(state);
            });
        }
    }

	/** Saves the current events of the element to LocalStorage. Requires an id to be set to the element. 
	* @param {any[]} state?. An Array containing a valid structure of Scheduler events.
	*/
    saveState(state){
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveState(state);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveState(state);
            });
        }
    }

	/** Checks whether the Scheduler contains the event. 
	* @param {any} eventObj. A Scheduler event object.
	* @returns {boolean}
  */
	async containsEvent(eventObj) {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.containsEvent(eventObj);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Inserts an event. 
	* @param {any} eventObj. An object describing a Scheduler event that is not already present in the element.
	* @param {number} index?. A number that represents the index to insert the event at. If not provided the event is inserted at the end of the list.
	*/
    insertEvent(eventObj, index){
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertEvent(eventObj, index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertEvent(eventObj, index);
            });
        }
    }

	/** Updates an event. 
	* @param {any} index. A number that represents the index of an event or a Scheduler event object.
	* @param {any} eventObj. An object describing a Scheduler event. The properties of this object will be applied to the desired event.
	*/
    updateEvent(index, eventObj){
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateEvent(index, eventObj);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateEvent(index, eventObj);
            });
        }
    }

	/** Removes an event. 
	* @param {any} index. A number that represents the index of an event or the actual event object to be removed.
	*/
    removeEvent(index){
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeEvent(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeEvent(index);
            });
        }
    }

	/** Opens the popup Window for specific event Editing. 
	* @param {any} index. A number that represents the index of a event or the actual event object to be edited.
	*/
    openWindow(index){
        if (this.nativeElement.isRendered) {
            this.nativeElement.openWindow(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openWindow(index);
            });
        }
    }

	/** Closes the popup window. 
	*/
    closeWindow(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeWindow();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeWindow();
            });
        }
    }

	/** Prepares the Scheduler for printing by opening the browser's Print Preview. 
	*/
    print(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.print();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.print();
            });
        }
    }

	/** Scrolls the Scheduler to a Date. 
	* @param {Date} date. The date to scroll to.
	*/
    scrollToDate(date){
        if (this.nativeElement.isRendered) {
            this.nativeElement.scrollToDate(date);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.scrollToDate(date);
            });
        }
    }

	/** Scrolls the Scheduler to an event. 
	* @param {any} index. The index of a Scheduler event or the actual event object to scroll to.
	*/
    scrollToEvent(index){
        if (this.nativeElement.isRendered) {
            this.nativeElement.scrollToEvent(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.scrollToEvent(index);
            });
        }
    }

	/** Opens a custom notification. 
	* @param {string} message. The notification message.
	* @param {any} toastSettings. Smart.Toast settings to be applied to the Toast element when opening the notification.
	*/
    openNotification(message, toastSettings){
        if (this.nativeElement.isRendered) {
            this.nativeElement.openNotification(message, toastSettings);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openNotification(message, toastSettings);
            });
        }
    }

	/** Closes all notifications. 
	*/
    closeNotifications(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeNotifications();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeNotifications();
            });
        }
    }

	/** Returns all occurances of an event. 
	* @param {any} eventObj. A Scheduler evnet object.
	* @param {number} count. The number of occurances to return. By default 100 date occurances of the event are returned.
	*/
    occurrences(eventObj, count){
        if (this.nativeElement.isRendered) {
            this.nativeElement.occurrences(eventObj, count);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.occurrences(eventObj, count);
            });
        }
    }

	/** Returns all occurances of an event between two dates. 
	* @param {any} eventObj. A Scheduler event object.
	* @param {Date} dateFrom. The start date.
	* @param {Date} dateTo. The end date.
	*/
    occurrencesBetween(eventObj, dateFrom, dateTo){
        if (this.nativeElement.isRendered) {
            this.nativeElement.occurrencesBetween(eventObj, dateFrom, dateTo);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.occurrencesBetween(eventObj, dateFrom, dateTo);
            });
        }
    }

	/** Returns the first occurance of an event after a date. 
	* @param {any} eventObj. A Scheduler event object.
	* @param {number} date. The date after which the first occurance of the event will be returned.
	*/
    occurrenceAfter(eventObj, date){
        if (this.nativeElement.isRendered) {
            this.nativeElement.occurrenceAfter(eventObj, date);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.occurrenceAfter(eventObj, date);
            });
        }
    }

	/** Returns the first occurance of an event before a date. 
	* @param {any} eventObj. A Scheduler event object.
	* @param {number} date. The date before which the first occurance of the event will be returned.
	*/
    occurrenceBefore(eventObj, date){
        if (this.nativeElement.isRendered) {
            this.nativeElement.occurrenceBefore(eventObj, date);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.occurrenceBefore(eventObj, date);
            });
        }
    }

	/** Returns the dateStart/dateEnd of a timeline cell. 
	* @param {HTMLElement} cell. A Scheduler timeline cell element.
	* @returns {any}
  */
	async getCellDateRange(cell) {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getCellDateRange(cell);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Opens the tooltip(event menu) for an event. 
	* @param {any} eventObj. A Scheduler event object or it's index.
	*/
    openEventTooltip(eventObj){
        if (this.nativeElement.isRendered) {
            this.nativeElement.openEventTooltip(eventObj);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openEventTooltip(eventObj);
            });
        }
    }

	/** Closes the event tooltip (event menu). 
	*/
    closeEventTooltip(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeEventTooltip();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeEventTooltip();
            });
        }
    }

	/** Returns true or false whether the date is restricted or not. 
	* @param {Date} date. A Scheduler event object or it's index.
	* @returns {boolean}
  */
	async isDateRestricted(date) {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.isDateRestricted(date);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Returns true or false whether the event is restricted or not. 
	* @param {any} eventObj. A Scheduler event  object or a direct event HTMLElement instance.
	* @returns {boolean}
  */
	async isEventRestricted(eventObj) {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.isEventRestricted(eventObj);
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
			React.createElement("smart-scheduler", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Scheduler;
