import { Scheduler } from './../index';
import { SchedulerEventRenderMode, SchedulerRepeatFreq, SchedulerNotificationType, SchedulerDayFormat, FilterMode, SchedulerGroupOrientation, SchedulerHourFormat, SchedulerHeaderDatePosition, SchedulerHeaderNavigationStyle, SchedulerHeaderViewPosition, SchedulerLegendLocation, SchedulerLegendPosition, HorizontalScrollBarVisibility, MinuteFormat, MonthFormat, ResizeHandlesVisibility, SchedulerScrollButtonsPosition, SchedulerTimelineDayScale, SchedulerTimeZone, VerticalScrollBarVisibility, SchedulerViewType, SchedulerViews, SchedulerViewSelectorType, WeekDayFormat, YearFormat, SchedulerDataExport, SchedulerDataSource, SchedulerDataSourceRepeat, SchedulerNotification, SchedulerEvent, SchedulerEventRepeat, SchedulerResource, SchedulerStatuse, ElementRenderMode} from './../index';
import { DataAdapter } from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { SchedulerEventRenderMode, SchedulerRepeatFreq, SchedulerNotificationType, SchedulerDayFormat, FilterMode, SchedulerGroupOrientation, SchedulerHourFormat, SchedulerHeaderDatePosition, SchedulerHeaderNavigationStyle, SchedulerHeaderViewPosition, SchedulerLegendLocation, SchedulerLegendPosition, HorizontalScrollBarVisibility, MinuteFormat, MonthFormat, ResizeHandlesVisibility, SchedulerScrollButtonsPosition, SchedulerTimelineDayScale, SchedulerTimeZone, VerticalScrollBarVisibility, SchedulerViewType, SchedulerViews, SchedulerViewSelectorType, WeekDayFormat, YearFormat, SchedulerDataExport, SchedulerDataSource, SchedulerDataSourceRepeat, SchedulerNotification, SchedulerEvent, SchedulerEventRepeat, SchedulerResource, SchedulerStatuse, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Scheduler } from './../index';
export { DataAdapter } from './../index';


@Directive({
	selector: 'smart-scheduler, [smart-scheduler]'
})

export class SchedulerComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<Scheduler>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Scheduler;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Scheduler;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Scheduler>document.createElement('smart-scheduler');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Determines the scroll speed while dragging an event.  */
	@Input()
	get autoScrollStep(): number {
		return this.nativeElement ? this.nativeElement.autoScrollStep : undefined;
	}
	set autoScrollStep(value: number) {
		this.nativeElement ? this.nativeElement.autoScrollStep = value : undefined;
	}

	/** @description Determines the color scheme for the event background selector in the event window editor.  */
	@Input()
	get colorScheme(): string[] {
		return this.nativeElement ? this.nativeElement.colorScheme : undefined;
	}
	set colorScheme(value: string[]) {
		this.nativeElement ? this.nativeElement.colorScheme = value : undefined;
	}

	/** @description Enables/Disables the current time indicator. Current time indicator shows the current time in the appropriate view cells.  */
	@Input()
	get currentTimeIndicator(): boolean {
		return this.nativeElement ? this.nativeElement.currentTimeIndicator : undefined;
	}
	set currentTimeIndicator(value: boolean) {
		this.nativeElement ? this.nativeElement.currentTimeIndicator = value : undefined;
	}

	/** @description Determines the refresh interval in seconds for the currentTimeIndicator.  */
	@Input()
	get currentTimeIndicatorInterval(): number {
		return this.nativeElement ? this.nativeElement.currentTimeIndicatorInterval : undefined;
	}
	set currentTimeIndicatorInterval(value: number) {
		this.nativeElement ? this.nativeElement.currentTimeIndicatorInterval = value : undefined;
	}

	/** @description Determines the context menu items that are visible when the Context Menu is opened. */
	@Input()
	get contextMenuDataSource(): any {
		return this.nativeElement ? this.nativeElement.contextMenuDataSource : undefined;
	}
	set contextMenuDataSource(value: any) {
		this.nativeElement ? this.nativeElement.contextMenuDataSource = value : undefined;
	}

	/** @description Determines whether the clipboard shortcuts for copy/paste/cut action of events are visible in the Scheduler context menu or not. */
	@Input()
	get contextMenuClipboardActions(): boolean {
		return this.nativeElement ? this.nativeElement.contextMenuClipboardActions : undefined;
	}
	set contextMenuClipboardActions(value: boolean) {
		this.nativeElement ? this.nativeElement.contextMenuClipboardActions = value : undefined;
	}

	/** @description Allows to customize the content of the event elements. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties. */
	@Input()
	get eventTemplate(): any {
		return this.nativeElement ? this.nativeElement.eventTemplate : undefined;
	}
	set eventTemplate(value: any) {
		this.nativeElement ? this.nativeElement.eventTemplate = value : undefined;
	}

	/** @description Allows to customize the content of the event collector elements. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties. */
	@Input()
	get eventCollectorTemplate(): any {
		return this.nativeElement ? this.nativeElement.eventCollectorTemplate : undefined;
	}
	set eventCollectorTemplate(value: any) {
		this.nativeElement ? this.nativeElement.eventCollectorTemplate = value : undefined;
	}

	/** @description  Determines how the events inside the Scheduler are rendered.classic - the events are arranged next to each other and try to fit inside the cells.modern - the events obey the CSS property that determines their size and if there's not enough space inside the cell for all events to appear, an event collector is created to hold the rest of the events. On mobile phones only collectors are created. */
	@Input()
	get eventRenderMode(): SchedulerEventRenderMode {
		return this.nativeElement ? this.nativeElement.eventRenderMode : undefined;
	}
	set eventRenderMode(value: SchedulerEventRenderMode) {
		this.nativeElement ? this.nativeElement.eventRenderMode = value : undefined;
	}

	/** @description Allows to customize the content of the event menu items (tooltip). When clicked on an event element an event menu with details opens. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties. */
	@Input()
	get eventTooltipTemplate(): any {
		return this.nativeElement ? this.nativeElement.eventTooltipTemplate : undefined;
	}
	set eventTooltipTemplate(value: any) {
		this.nativeElement ? this.nativeElement.eventTooltipTemplate = value : undefined;
	}

	/** @description Allows to customize the content of the timeline cells. It can be an HTMLTemplateElement that will be applied to all cells or it's id as a string or a function that will be called for each cell with the following parameters: cellContent - the content holder for the cell,cellDate - the cell date.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the value of the cell. */
	@Input()
	get cellTemplate(): any {
		return this.nativeElement ? this.nativeElement.cellTemplate : undefined;
	}
	set cellTemplate(value: any) {
		this.nativeElement ? this.nativeElement.cellTemplate = value : undefined;
	}

	/** @description Determines the currently visible date for the Scheduler. */
	@Input()
	get dateCurrent(): any {
		return this.nativeElement ? this.nativeElement.dateCurrent : undefined;
	}
	set dateCurrent(value: any) {
		this.nativeElement ? this.nativeElement.dateCurrent = value : undefined;
	}

	/** @description Sets the Schedulers's Data Export options. */
	@Input()
	get dataExport(): SchedulerDataExport {
		return this.nativeElement ? this.nativeElement.dataExport : undefined;
	}
	set dataExport(value: SchedulerDataExport) {
		this.nativeElement ? this.nativeElement.dataExport = value : undefined;
	}

	/** @description Determines the events that will be loaded inside the Timeline. Each event represents an object that should contain the following properties: */
	@Input()
	get dataSource(): SchedulerDataSource[] {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: SchedulerDataSource[]) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description A callback that can be used to customize the text inside the date selector located in the header. The callback has one parameter - the current date. */
	@Input()
	get dateSelectorFormatFunction(): any {
		return this.nativeElement ? this.nativeElement.dateSelectorFormatFunction : undefined;
	}
	set dateSelectorFormatFunction(value: any) {
		this.nativeElement ? this.nativeElement.dateSelectorFormatFunction = value : undefined;
	}

	/** @description Determines the day format of the dates in the timeline. */
	@Input()
	get dayFormat(): SchedulerDayFormat {
		return this.nativeElement ? this.nativeElement.dayFormat : undefined;
	}
	set dayFormat(value: SchedulerDayFormat) {
		this.nativeElement ? this.nativeElement.dayFormat = value : undefined;
	}

	/** @description Enables or disables the element. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Disables auto scrolling of the timeline while dragging/resizing an event. */
	@Input()
	get disableAutoScroll(): boolean {
		return this.nativeElement ? this.nativeElement.disableAutoScroll : undefined;
	}
	set disableAutoScroll(value: boolean) {
		this.nativeElement ? this.nativeElement.disableAutoScroll = value : undefined;
	}

	/** @description Disables dragging of events. */
	@Input()
	get disableDrag(): boolean {
		return this.nativeElement ? this.nativeElement.disableDrag : undefined;
	}
	set disableDrag(value: boolean) {
		this.nativeElement ? this.nativeElement.disableDrag = value : undefined;
	}

	/** @description Disables dropping of events. */
	@Input()
	get disableDrop(): boolean {
		return this.nativeElement ? this.nativeElement.disableDrop : undefined;
	}
	set disableDrop(value: boolean) {
		this.nativeElement ? this.nativeElement.disableDrop = value : undefined;
	}

	/** @description Disables resizing of events. */
	@Input()
	get disableResize(): boolean {
		return this.nativeElement ? this.nativeElement.disableResize : undefined;
	}
	set disableResize(value: boolean) {
		this.nativeElement ? this.nativeElement.disableResize = value : undefined;
	}

	/** @description Disables the cell selection. */
	@Input()
	get disableSelection(): boolean {
		return this.nativeElement ? this.nativeElement.disableSelection : undefined;
	}
	set disableSelection(value: boolean) {
		this.nativeElement ? this.nativeElement.disableSelection = value : undefined;
	}

	/** @description Disables the window editor for the events. */
	@Input()
	get disableWindowEditor(): boolean {
		return this.nativeElement ? this.nativeElement.disableWindowEditor : undefined;
	}
	set disableWindowEditor(value: boolean) {
		this.nativeElement ? this.nativeElement.disableWindowEditor = value : undefined;
	}

	/** @description Disables the context menu of the events and cells. */
	@Input()
	get disableContextMenu(): boolean {
		return this.nativeElement ? this.nativeElement.disableContextMenu : undefined;
	}
	set disableContextMenu(value: boolean) {
		this.nativeElement ? this.nativeElement.disableContextMenu = value : undefined;
	}

	/** @description Disables the event menu that appears when an event/collector has been clicked. */
	@Input()
	get disableEventMenu(): boolean {
		return this.nativeElement ? this.nativeElement.disableEventMenu : undefined;
	}
	set disableEventMenu(value: boolean) {
		this.nativeElement ? this.nativeElement.disableEventMenu = value : undefined;
	}

	/** @description Disables the view menu that allows to select the current Scheduler view. */
	@Input()
	get disableViewMenu(): boolean {
		return this.nativeElement ? this.nativeElement.disableViewMenu : undefined;
	}
	set disableViewMenu(value: boolean) {
		this.nativeElement ? this.nativeElement.disableViewMenu = value : undefined;
	}

	/** @description Disables the date menu that allows to select the current Scheduler date. */
	@Input()
	get disableDateMenu(): boolean {
		return this.nativeElement ? this.nativeElement.disableDateMenu : undefined;
	}
	set disableDateMenu(value: boolean) {
		this.nativeElement ? this.nativeElement.disableDateMenu = value : undefined;
	}

	/** @description A callback that can be used to customize the drag feedback that appears when an event is dragged. */
	@Input()
	get dragFeedbackFormatFunction(): any {
		return this.nativeElement ? this.nativeElement.dragFeedbackFormatFunction : undefined;
	}
	set dragFeedbackFormatFunction(value: any) {
		this.nativeElement ? this.nativeElement.dragFeedbackFormatFunction = value : undefined;
	}

	/** @description Determines the offset for the drag feedback from the pointer. */
	@Input()
	get dragOffset(): any {
		return this.nativeElement ? this.nativeElement.dragOffset : undefined;
	}
	set dragOffset(value: any) {
		this.nativeElement ? this.nativeElement.dragOffset = value : undefined;
	}

	/** @description Determines the filtering condition for the events.The filter property takes an array of objects or a function. Each object represents a single filtering condition with the following attributes: name - the name of the Scheduler event property that will be filtered by.value - the filtering condition value. The value will be used to compare the events based on the filterMode, for example: [{ name: 'price', value: 25 }]. The value can also be a function. The function accepts a single arguemnt - the value that corresponds to the filtered attribute. The function allows to apply custom condition that is different from the default filter modes. It should return true ( if the evnet passes the filtering condition ) or false ( if the event does not meet the filtering condition ). Here's an example: [{ name: 'roomId', value: (id) => ['2', '3'].indexOf(id + '') > -1 }]. In the example the events that do not have a 'roomId' property that is equal to '2' or '3' will be filtered out.. If a function is set to the filter property instead, it allows to completely customize the filtering logic. The function passes a single argument - each Scheduler event that will be displayed. The function should return true ( if the condition is met ) or false ( if not ). */
	@Input()
	get filter(): any {
		return this.nativeElement ? this.nativeElement.filter : undefined;
	}
	set filter(value: any) {
		this.nativeElement ? this.nativeElement.filter = value : undefined;
	}

	/** @description Determines whether Scheduler's filtering is enabled or not. */
	@Input()
	get filterable(): any {
		return this.nativeElement ? this.nativeElement.filterable : undefined;
	}
	set filterable(value: any) {
		this.nativeElement ? this.nativeElement.filterable = value : undefined;
	}

	/** @description Determines the filter mode. */
	@Input()
	get filterMode(): FilterMode {
		return this.nativeElement ? this.nativeElement.filterMode : undefined;
	}
	set filterMode(value: FilterMode) {
		this.nativeElement ? this.nativeElement.filterMode = value : undefined;
	}

	/** @description A getter that returns  an array of all Scheduler events. */
	@Input()
	get events(): SchedulerEvent[] {
		return this.nativeElement ? this.nativeElement.events : undefined;
	}
	set events(value: SchedulerEvent[]) {
		this.nativeElement ? this.nativeElement.events = value : undefined;
	}

	/** @description Determines the first day of week for the Scheduler. By default it's Sunday. */
	@Input()
	get firstDayOfWeek(): number {
		return this.nativeElement ? this.nativeElement.firstDayOfWeek : undefined;
	}
	set firstDayOfWeek(value: number) {
		this.nativeElement ? this.nativeElement.firstDayOfWeek = value : undefined;
	}

	/** @description Allows to customize the footer of the Scheduler. It can be an HTMLTemplateElement, it's id as a string or a function with the following parameters: footerContainer - the footer container.. */
	@Input()
	get footerTemplate(): any {
		return this.nativeElement ? this.nativeElement.footerTemplate : undefined;
	}
	set footerTemplate(value: any) {
		this.nativeElement ? this.nativeElement.footerTemplate = value : undefined;
	}

	/** @description Determines whether the events will be grouped by date. */
	@Input()
	get groupByDate(): boolean {
		return this.nativeElement ? this.nativeElement.groupByDate : undefined;
	}
	set groupByDate(value: boolean) {
		this.nativeElement ? this.nativeElement.groupByDate = value : undefined;
	}

	/** @description Determines the grouping orientation. */
	@Input()
	get groupOrientation(): SchedulerGroupOrientation {
		return this.nativeElement ? this.nativeElement.groupOrientation : undefined;
	}
	set groupOrientation(value: SchedulerGroupOrientation) {
		this.nativeElement ? this.nativeElement.groupOrientation = value : undefined;
	}

	/** @description Allows to customize the content of the group cells that are visible inside the header. It can be an HTMLTemplateElement that will be applied to all cells or it's id as a string or a function that will be called for each group cell with the following parameters: cellContent - the content holder for the group cell.cellObj - the group cell object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties. */
	@Input()
	get groupTemplate(): any {
		return this.nativeElement ? this.nativeElement.groupTemplate : undefined;
	}
	set groupTemplate(value: any) {
		this.nativeElement ? this.nativeElement.groupTemplate = value : undefined;
	}

	/** @description Determines the resources that the events are grouped by. */
	@Input()
	get groups(): any {
		return this.nativeElement ? this.nativeElement.groups : undefined;
	}
	set groups(value: any) {
		this.nativeElement ? this.nativeElement.groups = value : undefined;
	}

	/** @description Determines the end hour that will be displayed in 'day' and 'week' views. */
	@Input()
	get hourEnd(): number {
		return this.nativeElement ? this.nativeElement.hourEnd : undefined;
	}
	set hourEnd(value: number) {
		this.nativeElement ? this.nativeElement.hourEnd = value : undefined;
	}

	/** @description Determines the start hour that will be displayed in 'day' and 'week' views. */
	@Input()
	get hourStart(): number {
		return this.nativeElement ? this.nativeElement.hourStart : undefined;
	}
	set hourStart(value: number) {
		this.nativeElement ? this.nativeElement.hourStart = value : undefined;
	}

	/** @description Determines the formatting of hours inside the element. */
	@Input()
	get hourFormat(): SchedulerHourFormat {
		return this.nativeElement ? this.nativeElement.hourFormat : undefined;
	}
	set hourFormat(value: SchedulerHourFormat) {
		this.nativeElement ? this.nativeElement.hourFormat = value : undefined;
	}

	/** @description Allows to customize the header of the Scheduler. It can be an HTMLTemplateElement, it's id as a string or a function with the following parameters: headerContent - the header container.. */
	@Input()
	get headerTemplate(): any {
		return this.nativeElement ? this.nativeElement.headerTemplate : undefined;
	}
	set headerTemplate(value: any) {
		this.nativeElement ? this.nativeElement.headerTemplate = value : undefined;
	}

	/** @description  Determines the position of the Date selector inside the Header of the element. */
	@Input()
	get headerDatePosition(): SchedulerHeaderDatePosition {
		return this.nativeElement ? this.nativeElement.headerDatePosition : undefined;
	}
	set headerDatePosition(value: SchedulerHeaderDatePosition) {
		this.nativeElement ? this.nativeElement.headerDatePosition = value : undefined;
	}

	/** @description  Determines the styling of the Header navigation controls. */
	@Input()
	get headerNavigationStyle(): SchedulerHeaderNavigationStyle {
		return this.nativeElement ? this.nativeElement.headerNavigationStyle : undefined;
	}
	set headerNavigationStyle(value: SchedulerHeaderNavigationStyle) {
		this.nativeElement ? this.nativeElement.headerNavigationStyle = value : undefined;
	}

	/** @description  Determines the position of the view selector control inside the Header of the element. */
	@Input()
	get headerViewPosition(): SchedulerHeaderViewPosition {
		return this.nativeElement ? this.nativeElement.headerViewPosition : undefined;
	}
	set headerViewPosition(value: SchedulerHeaderViewPosition) {
		this.nativeElement ? this.nativeElement.headerViewPosition = value : undefined;
	}

	/** @description Determines whether the 'All Day' container with the all day events is hidden or not. */
	@Input()
	get hideAllDay(): boolean {
		return this.nativeElement ? this.nativeElement.hideAllDay : undefined;
	}
	set hideAllDay(value: boolean) {
		this.nativeElement ? this.nativeElement.hideAllDay = value : undefined;
	}

	/** @description Determines whether the days set by 'nonworkingDays' property are hidden or not. */
	@Input()
	get hideNonworkingWeekdays(): boolean {
		return this.nativeElement ? this.nativeElement.hideNonworkingWeekdays : undefined;
	}
	set hideNonworkingWeekdays(value: boolean) {
		this.nativeElement ? this.nativeElement.hideNonworkingWeekdays = value : undefined;
	}

	/** @description Determines whether the 'Today' button is hidden or not. */
	@Input()
	get hideTodayButton(): boolean {
		return this.nativeElement ? this.nativeElement.hideTodayButton : undefined;
	}
	set hideTodayButton(value: boolean) {
		this.nativeElement ? this.nativeElement.hideTodayButton = value : undefined;
	}

	/** @description Determines whether the checkable items in the view selection menu are hidden or not. */
	@Input()
	get hideViewMenuCheckableItems(): boolean {
		return this.nativeElement ? this.nativeElement.hideViewMenuCheckableItems : undefined;
	}
	set hideViewMenuCheckableItems(value: boolean) {
		this.nativeElement ? this.nativeElement.hideViewMenuCheckableItems = value : undefined;
	}

	/** @description Determines whether the weekend days are hidden or not. */
	@Input()
	get hideWeekend(): boolean {
		return this.nativeElement ? this.nativeElement.hideWeekend : undefined;
	}
	set hideWeekend(value: boolean) {
		this.nativeElement ? this.nativeElement.hideWeekend = value : undefined;
	}

	/** @description Determines the location of the legend inside the Scheduler. By default the location is inside the footer but it can also reside in the header. */
	@Input()
	get legendLocation(): SchedulerLegendLocation {
		return this.nativeElement ? this.nativeElement.legendLocation : undefined;
	}
	set legendLocation(value: SchedulerLegendLocation) {
		this.nativeElement ? this.nativeElement.legendLocation = value : undefined;
	}

	/** @description Determines the position of the legend. By default it's positioned to the near side but setting it to 'far' will change that. */
	@Input()
	get legendPosition(): SchedulerLegendPosition {
		return this.nativeElement ? this.nativeElement.legendPosition : undefined;
	}
	set legendPosition(value: SchedulerLegendPosition) {
		this.nativeElement ? this.nativeElement.legendPosition = value : undefined;
	}

	/** @description Determines weather or not horizontal scrollbar is shown. */
	@Input()
	get horizontalScrollBarVisibility(): HorizontalScrollBarVisibility {
		return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
	}
	set horizontalScrollBarVisibility(value: HorizontalScrollBarVisibility) {
		this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility = value : undefined;
	}

	/** @description  Determines the language of the Scheduler.  */
	@Input()
	get locale(): string {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		this.nativeElement ? this.nativeElement.locale = value : undefined;
	}

	/** @description Detetmines the maximum view date for the Scheduler. */
	@Input()
	get max(): string | Date {
		return this.nativeElement ? this.nativeElement.max : undefined;
	}
	set max(value: string | Date) {
		this.nativeElement ? this.nativeElement.max = value : undefined;
	}

	/** @description Detetmines the minimum view date for the Scheduler. */
	@Input()
	get min(): string | Date {
		return this.nativeElement ? this.nativeElement.min : undefined;
	}
	set min(value: string | Date) {
		this.nativeElement ? this.nativeElement.min = value : undefined;
	}

	/** @description Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.  */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Determines the minute formatting inside the Scheduler. */
	@Input()
	get minuteFormat(): MinuteFormat {
		return this.nativeElement ? this.nativeElement.minuteFormat : undefined;
	}
	set minuteFormat(value: MinuteFormat) {
		this.nativeElement ? this.nativeElement.minuteFormat = value : undefined;
	}

	/** @description Determines the month name formatting inside the Scheduler. */
	@Input()
	get monthFormat(): MonthFormat {
		return this.nativeElement ? this.nativeElement.monthFormat : undefined;
	}
	set monthFormat(value: MonthFormat) {
		this.nativeElement ? this.nativeElement.monthFormat = value : undefined;
	}

	/** @description Determines the nonworking days of the week from 0 to 6, where 0 is the first day of the week and 6 is the last day. Nonworking days will be colored differently inside the Timeline. The color is determined by a CSS variable. */
	@Input()
	get nonworkingDays(): any {
		return this.nativeElement ? this.nativeElement.nonworkingDays : undefined;
	}
	set nonworkingDays(value: any) {
		this.nativeElement ? this.nativeElement.nonworkingDays = value : undefined;
	}

	/** @description Determines the nonworking hours of the day. Hours are represented as numbers inside an array, however ranges of hours can be defined as an array with starting and ending hour separated by a comma. In the timline the cells that represent nonworking days are colored differently from the rest. */
	@Input()
	get nonworkingHours(): any {
		return this.nativeElement ? this.nativeElement.nonworkingHours : undefined;
	}
	set nonworkingHours(value: any) {
		this.nativeElement ? this.nativeElement.nonworkingHours = value : undefined;
	}

	/** @description Determines the interval (in seconds) at which the element will check for notifications. */
	@Input()
	get notificationInterval(): number {
		return this.nativeElement ? this.nativeElement.notificationInterval : undefined;
	}
	set notificationInterval(value: number) {
		this.nativeElement ? this.nativeElement.notificationInterval = value : undefined;
	}

	/** @description Determines the visibility of the resize handles. */
	@Input()
	get resizeHandlesVisibility(): ResizeHandlesVisibility {
		return this.nativeElement ? this.nativeElement.resizeHandlesVisibility : undefined;
	}
	set resizeHandlesVisibility(value: ResizeHandlesVisibility) {
		this.nativeElement ? this.nativeElement.resizeHandlesVisibility = value : undefined;
	}

	/** @description Determines the rate at which the element will refresh it's content on element resize. By default it's refresh immediately. This property is used for element resize throttling */
	@Input()
	get resizeInterval(): number {
		return this.nativeElement ? this.nativeElement.resizeInterval : undefined;
	}
	set resizeInterval(value: number) {
		this.nativeElement ? this.nativeElement.resizeInterval = value : undefined;
	}

	/** @description An array of resources that can be assigned to the events. */
	@Input()
	get resources(): SchedulerResource[] {
		return this.nativeElement ? this.nativeElement.resources : undefined;
	}
	set resources(value: SchedulerResource[]) {
		this.nativeElement ? this.nativeElement.resources = value : undefined;
	}

	/** @description Defines an array of dates that are not allowed to have events on. Events that overlap restricted Dates or start/end on them will not be displayed. */
	@Input()
	get restrictedDates(): any {
		return this.nativeElement ? this.nativeElement.restrictedDates : undefined;
	}
	set restrictedDates(value: any) {
		this.nativeElement ? this.nativeElement.restrictedDates = value : undefined;
	}

	/** @description Defines an array of hours that are not allowed to have events on. Events that overlap restricted Hours or start/end on them will not be displayed. */
	@Input()
	get restrictedHours(): any {
		return this.nativeElement ? this.nativeElement.restrictedHours : undefined;
	}
	set restrictedHours(value: any) {
		this.nativeElement ? this.nativeElement.restrictedHours = value : undefined;
	}

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description  Determines the position of the date navigation navigation buttons inside the header of the element. */
	@Input()
	get scrollButtonsPosition(): SchedulerScrollButtonsPosition {
		return this.nativeElement ? this.nativeElement.scrollButtonsPosition : undefined;
	}
	set scrollButtonsPosition(value: SchedulerScrollButtonsPosition) {
		this.nativeElement ? this.nativeElement.scrollButtonsPosition = value : undefined;
	}

	/** @description Enables/Disables the current time shader. If enabled all cells that represent past time will be shaded. */
	@Input()
	get shadeUntilCurrentTime(): boolean {
		return this.nativeElement ? this.nativeElement.shadeUntilCurrentTime : undefined;
	}
	set shadeUntilCurrentTime(value: boolean) {
		this.nativeElement ? this.nativeElement.shadeUntilCurrentTime = value : undefined;
	}

	/** @description Determines whether the resource legend is visible or not. The Legend shows the resources and their items in the footer section of the Scheduler. If filterable is enabled it is possible to filter by resource items by clicking on the corresponding resource item from the legend. */
	@Input()
	get showLegend(): boolean {
		return this.nativeElement ? this.nativeElement.showLegend : undefined;
	}
	set showLegend(value: boolean) {
		this.nativeElement ? this.nativeElement.showLegend = value : undefined;
	}

	/** @description Determines the repeating delay of the repeat buttons inside the header of the element. Such buttons are the Date navigation buttons and the view scroll buttons. */
	@Input()
	get spinButtonsDelay(): number {
		return this.nativeElement ? this.nativeElement.spinButtonsDelay : undefined;
	}
	set spinButtonsDelay(value: number) {
		this.nativeElement ? this.nativeElement.spinButtonsDelay = value : undefined;
	}

	/** @description Determines the initial delay of the repeat buttons inside the header of the element. Such buttons are the Date navigation buttons and the view scroll buttons. */
	@Input()
	get spinButtonsInitialDelay(): number {
		return this.nativeElement ? this.nativeElement.spinButtonsInitialDelay : undefined;
	}
	set spinButtonsInitialDelay(value: number) {
		this.nativeElement ? this.nativeElement.spinButtonsInitialDelay = value : undefined;
	}

	/** @description Defines the statuses that will be available for selection thourgh the window editor for the events. */
	@Input()
	get statuses(): SchedulerStatuse[] {
		return this.nativeElement ? this.nativeElement.statuses : undefined;
	}
	set statuses(value: SchedulerStatuse[]) {
		this.nativeElement ? this.nativeElement.statuses = value : undefined;
	}

	/** @description Sets or gets the element's visual theme.  */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description A format function for the Header of the Timeline. Allows to modify the date labels in the header cells. */
	@Input()
	get timelineHeaderFormatFunction(): any {
		return this.nativeElement ? this.nativeElement.timelineHeaderFormatFunction : undefined;
	}
	set timelineHeaderFormatFunction(value: any) {
		this.nativeElement ? this.nativeElement.timelineHeaderFormatFunction = value : undefined;
	}

	/** @description Determines the date scale for the timeline cells. */
	@Input()
	get timelineDayScale(): SchedulerTimelineDayScale {
		return this.nativeElement ? this.nativeElement.timelineDayScale : undefined;
	}
	set timelineDayScale(value: SchedulerTimelineDayScale) {
		this.nativeElement ? this.nativeElement.timelineDayScale = value : undefined;
	}

	/** @description Enables/Disables the tick marks next to the time cells in the vertical header of the element. Time header appears in 'day' and 'week' views. */
	@Input()
	get timeRulerTicks(): boolean {
		return this.nativeElement ? this.nativeElement.timeRulerTicks : undefined;
	}
	set timeRulerTicks(value: boolean) {
		this.nativeElement ? this.nativeElement.timeRulerTicks = value : undefined;
	}

	/** @description Determines the timeZone for the element. By default if the local time zone is used if the property is not set. */
	@Input()
	get timeZone(): SchedulerTimeZone {
		return this.nativeElement ? this.nativeElement.timeZone : undefined;
	}
	set timeZone(value: SchedulerTimeZone) {
		this.nativeElement ? this.nativeElement.timeZone = value : undefined;
	}

	/** @description Allows to display additional timeZones at once along with the default that is set via the timeZone property. Accepts an array values that represent the ids of valid time zones. The possbile time zones can be viewed in the timeZone property description. By default the local time zone is displayed. */
	@Input()
	get timeZones(): any {
		return this.nativeElement ? this.nativeElement.timeZones : undefined;
	}
	set timeZones(value: any) {
		this.nativeElement ? this.nativeElement.timeZones = value : undefined;
	}

	/** @description Determines the delay ( in miliseconds) before the tooltip/menu appears. */
	@Input()
	get tooltipDelay(): number {
		return this.nativeElement ? this.nativeElement.tooltipDelay : undefined;
	}
	set tooltipDelay(value: number) {
		this.nativeElement ? this.nativeElement.tooltipDelay = value : undefined;
	}

	/** @description Determines the offset ot the tooltip/menu. */
	@Input()
	get tooltipOffset(): number[] {
		return this.nativeElement ? this.nativeElement.tooltipOffset : undefined;
	}
	set tooltipOffset(value: number[]) {
		this.nativeElement ? this.nativeElement.tooltipOffset = value : undefined;
	}

	/** @description Determines weather or not vertical scrollbar is shown. */
	@Input()
	get verticalScrollBarVisibility(): VerticalScrollBarVisibility {
		return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
	}
	set verticalScrollBarVisibility(value: VerticalScrollBarVisibility) {
		this.nativeElement ? this.nativeElement.verticalScrollBarVisibility = value : undefined;
	}

	/** @description Determines the current view. The property accepts view values that are defined in the views property. Custom views should contain a valid value that will be set as the current view. */
	@Input()
	get view(): string {
		return this.nativeElement ? this.nativeElement.view : undefined;
	}
	set view(value: string) {
		this.nativeElement ? this.nativeElement.view = value : undefined;
	}

	/** @description Indicates the current Scheduler viewType. Custom views must contain a valid type property that corresponds to one of the view types. This property should not be set. */
	@Input()
	get viewType(): SchedulerViewType {
		return this.nativeElement ? this.nativeElement.viewType : undefined;
	}
	set viewType(value: SchedulerViewType) {
		this.nativeElement ? this.nativeElement.viewType = value : undefined;
	}

	/** @description Determines the viewing date range of the timeline. The property should be set to an array of strings or view objects. When you set it to a string, you should use any of the following: 'day', 'week', 'month', 'agenda', 'timelineDay', 'timelineWeek', 'timelineMonth'. Custom views can be defined as objects instead of strings. The view object should contain the following properties: label - the label for the view.value - the value for the view. The value is the unique identifier for the view.type - the type of view. The type should be one of the default allowed values for a view.hideWeekend - an Optional property that allows to hide the weekend only for this specific view.hideNonworkingWeekdays - an Optional property that allows to hide the nonwrking weekdays for this specific view.shortcutKey - an Optional property that allows to set a custom shortcut key for the view. */
	@Input()
	get views(): SchedulerViews {
		return this.nativeElement ? this.nativeElement.views : undefined;
	}
	set views(value: SchedulerViews) {
		this.nativeElement ? this.nativeElement.views = value : undefined;
	}

	/** @description Determines type of the view selector located in the header of the element. */
	@Input()
	get viewSelectorType(): SchedulerViewSelectorType {
		return this.nativeElement ? this.nativeElement.viewSelectorType : undefined;
	}
	set viewSelectorType(value: SchedulerViewSelectorType) {
		this.nativeElement ? this.nativeElement.viewSelectorType = value : undefined;
	}

	/** @description Determines the format of the week days inside the element.  */
	@Input()
	get weekdayFormat(): WeekDayFormat {
		return this.nativeElement ? this.nativeElement.weekdayFormat : undefined;
	}
	set weekdayFormat(value: WeekDayFormat) {
		this.nativeElement ? this.nativeElement.weekdayFormat = value : undefined;
	}

	/** @description Determines the format of the dates inside the timeline header when they represent years. */
	@Input()
	get yearFormat(): YearFormat {
		return this.nativeElement ? this.nativeElement.yearFormat : undefined;
	}
	set yearFormat(value: YearFormat) {
		this.nativeElement ? this.nativeElement.yearFormat = value : undefined;
	}

	/** @description Sets or gets if the element can be focused. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
	}

	/** @description Determines the maximum number of redo/undo steps that will be remembered by the Scheduler. When the number is reached the oldest records are removed in order to add new. */
	@Input()
	get undoRedoSteps(): number {
		return this.nativeElement ? this.nativeElement.undoRedoSteps : undefined;
	}
	set undoRedoSteps(value: number) {
		this.nativeElement ? this.nativeElement.undoRedoSteps = value : undefined;
	}

	/** @description A function that can be used to completly customize the popup Window that is used to edit events. The function has the following arguments: target - the target popup Window that is about to be opened.type - the type of the window. The type determines the purpose of the window. The default type is an empty string which means that it's the default event editing window. The other type is 'confirm' ( confirmation window) that appears when clicking on a repeating event. eventObj - the event object that is going to be edited. */
	@Input()
	get windowCustomizationFunction(): any {
		return this.nativeElement ? this.nativeElement.windowCustomizationFunction : undefined;
	}
	set windowCustomizationFunction(value: any) {
		this.nativeElement ? this.nativeElement.windowCustomizationFunction = value : undefined;
	}

	/** @description This event is triggered when a batch update was started after executing the beginUpdate method.
	*  @param event. The custom event. 	*/
	@Output() onBeginUpdate: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a batch update was ended from after executing the endUpdate method.
	*  @param event. The custom event. 	*/
	@Output() onEndUpdate: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a new cell is selected/unselected.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue)
	*   value - The new selected Date.
	*   oldValue - The previously selected Date.
	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when en event, event item or a context menu item is clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type, 	itemObj)
	*   item - The HTMLElement for the event.
	*   type - The type of item that is clicked. The possible values are: <ul><li>event - when an event item is clicked.</li><li>context - when a context menu item is clicked.</li></ul>.
	*   itemObj - The event object.
	*/
	@Output() onItemClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when an Event is inserted.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item)
	*   item - An object that represents the actual item with it's attributes.
	*/
	@Output() onItemInsert: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when an Event is removed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item)
	*   item - An object that represents the actual item with it's attributes.
	*/
	@Output() onItemRemove: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when an Event is updated.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	item)
	*   type - The type of item that has been modified.
	*   item - An object that represents the actual item with it's attributes.
	*/
	@Output() onItemUpdate: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the view is changed via user interaction.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
	*   oldValue - The value of the previously selected view.
	*   value - The value of the new selected view.
	*/
	@Output() onViewChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered before the view is changed via user interaction. The view change action can be canceled if event.preventDefault() is called on the event.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
	*   oldValue - The value of the previously selected view.
	*   value - The value of the new selected view.
	*/
	@Output() onViewChanging: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a shortcut key for an event is pressed. By default only 'Delete' key is used.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	key, 	target, 	eventObj)
	*   key - The shortcut key that was pressed.
	*   target - The event target (HTMLElement).
	*   eventObj - The scheduler Event object that affected by the keypress.
	*/
	@Output() onEventShortcutKey: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the 'dateCurrent' property is changed. This can be caused by navigating to a different date.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
	*   oldValue - The previous current date that was in view.
	*   value - The current date in view.
	*/
	@Output() onDateChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when dragging of an event begins. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	itemDateRange, 	originalEvent)
	*   target - The HTMLElement that corresponds to the event that is going to be dragged.
	*   item - The scheduler Event object that is going to be dragged.
	*   itemDateRange - The start/end dates for the Scheduler Event.
	*   originalEvent - The original event object.
	*/
	@Output() onDragStart: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when dragging of an event finishes.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	itemDateRange, 	originalEvent)
	*   target - The HTMLElement that corresponds to the event that is dragged.
	*   item - The scheduler Event object that is dragged.
	*   itemDateRange - The new start/end dates for the dragged Scheduler Event.
	*   originalEvent - The original event object.
	*/
	@Output() onDragEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when resizing of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	itemDateRange, 	originalEvent)
	*   target - The HTMLElement that corresponds to the event that is going to be resized.
	*   item - The scheduler Event object that is going to be resized.
	*   itemDateRange - The start/end dates for Scheduler Event that is going to be resized.
	*   originalEvent - The original event object.
	*/
	@Output() onResizeStart: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the resizing of an event finishes.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	itemDateRange, 	originalEvent)
	*   target - The HTMLElement that corresponds to the event that is resized.
	*   item - The scheduler Event object that is resized.
	*   itemDateRange - The new start/end dates for the resized Scheduler Event.
	*   originalEvent - The original event object.
	*/
	@Output() onResizeEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the user starts top open the event dialog window. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	type)
	*   target - The dialog window that is opening.
	*   item - The event object that is going to be edited.
	*   type - The type of window that is going to open. Two window types are available, the dafault which is an empty string ( does not have a type) and 'confirm' which is displayed when clicked on a repeating event.
	*/
	@Output() onEditDialogOpening: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the user opens the event dialog window.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	editors, 	item)
	*   target - The dialog window that is opened.
	*   editors - An object containing all event editors that are present inside the window. This property is undefined when the window is of type 'confirm', because confirm windows do not contain editors.
	*   item - The event object that is being edited.
	*/
	@Output() onEditDialogOpen: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the user closes the event dialog window.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	editors, 	item)
	*   target - The dialog window that is closed.
	*   editors - An object containing all event editors that are present inside the window. This property is undefined when the window is of type 'confirm', because confirm windows do not contain editors.
	*   item - The event object that is being edited.
	*/
	@Output() onEditDialogClose: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the user is about to close the event dialog window. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	type)
	*   target - The dialog window that is closing.
	*   item - The event object that is edited.
	*   type - The type of window that is going to be closed. Two window types are available, the dafault which is an empty string ( does not have a type) and 'confirm' which is displayed when clicked on a repeating event.
	*/
	@Output() onEditDialogClosing: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the user begins to open the context menu on a timeline cell or an event element. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	cellObj, 	eventObj)
	*   target - The context menu instance.
	*   owner - The HTMLElement that the menu belongs to.
	*   cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
	*   eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
	*/
	@Output() onContextMenuOpening: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the context menu is opened.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	cellObj, 	eventObj)
	*   target - The context menu instance.
	*   owner - The HTMLElement that the menu belongs to.
	*   cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
	*   eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
	*/
	@Output() onContextMenuOpen: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the context menu is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	cellObj, 	eventObj)
	*   target - The context menu instance.
	*   owner - The HTMLElement that the menu belongs to.
	*   cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
	*   eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
	*/
	@Output() onContextMenuClose: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the user is about to close the context menu. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	cellObj, 	eventObj)
	*   target - The context menu instance.
	*   owner - The HTMLElement that the menu belongs to.
	*   cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
	*   eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
	*/
	@Output() onContextMenuClosing: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the event menu is about to open. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	eventObj)
	*   target - The menu instance.
	*   owner - The HTMLElement of the event that the menu belongs to.
	*   eventObj - The event object that is the target of the menu.
	*/
	@Output() onEventMenuOpening: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the event menu is opened.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	eventObj)
	*   target - The menu instance.
	*   owner - The HTMLElement of the event that the menu belongs to.
	*   eventObj - The event object that is the target of the menu.
	*/
	@Output() onEventMenuOpen: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the event menu is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	eventObj)
	*   target - The menu instance.
	*   owner - The HTMLElement of the event that the menu belongs to.
	*   eventObj - The event object that is the target of the menu.
	*/
	@Output() onEventMenuClose: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the evet menu is about to close. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	eventObj)
	*   target - The menu instance.
	*   owner - The HTMLElement of the event that the menu belongs to.
	*   eventObj - The event object that is the target of the menu.
	*/
	@Output() onEventMenuClosing: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the date selection menu is opened.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target)
	*   target - The menu instance.
	*/
	@Output() onDateMenuOpen: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the date selection menu is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target)
	*   target - The menu instance.
	*/
	@Output() onDateMenuClose: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the view selection menu is opened.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target)
	*   target - The menu instance.
	*/
	@Output() onViewMenuOpen: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the view selection menu is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target)
	*   target - The menu instance.
	*/
	@Output() onViewMenuClose: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a notification is opened.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	instance)
	*   instance - The toast item instance that is opened.
	*/
	@Output() onNotificationOpen: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a notification is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	instance)
	*   instance - The toast item instance that is closed.
	*/
	@Output() onNotificationClose: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once. 
	*/
    public beginUpdate(): void {
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

	/** @description Ends the update operation. This method will resume the rendering and will refresh the element. 
	*/
    public endUpdate(): void {
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

	/** @description Refereshes the Scheduler by recalculating the Scrollbars.  
	* @param {boolean} fullRefresh?. If set the Scheduler will be re-rendered completely.
	*/
    public refresh(fullRefresh?: boolean): void {
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

	/** @description Exports the events from the Scheduler. 
	* @param {string} dataFormat. Determines the format of the exported file. The following values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li><li><b>iCal</b></li></ul>
	* @param {any} callback?. A callback that allows to format the exported data based on a condition. For additional details, refer ro the Smart Export Documentation.
	*/
    public exportData(dataFormat: string, callback?: any): void {
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

	/** @description Returns a JSON representation of the events inside the Scheduler. 
	* @returns {any}
  */
	public async getState(): Promise<any> {
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

	/** @description Removes a previously saved state of the element form LocalStorage according to it's id. Requires an id to be set to the element. 
	*/
    public clearState(): void {
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

	/** @description Loads a previously saved state of the element or checks LocalStorage for any saved states if no argument is passed to the method. 
	* @param {any[]} state?. An Array containing a valid structure of Scheduler events. If no state is provided, the element will check localStorage for a saved state.
	*/
    public loadState(state?: any[]): void {
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

	/** @description Saves the current events of the element to LocalStorage. Requires an id to be set to the element. 
	* @param {any[]} state?. An Array containing a valid structure of Scheduler events.
	*/
    public saveState(state?: any[]): void {
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

	/** @description Checks whether the Scheduler contains the event. 
	* @param {any} eventObj. A Scheduler event object.
	* @returns {boolean}
  */
	public async containsEvent(eventObj): Promise<any> {
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

	/** @description Inserts an event. 
	* @param {any} eventObj. An object describing a Scheduler event that is not already present in the element.
	* @param {number} index?. A number that represents the index to insert the event at. If not provided the event is inserted at the end of the list.
	*/
    public insertEvent(eventObj: any, index?: number): void {
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

	/** @description Updates an event. 
	* @param {any} index. A number that represents the index of an event or a Scheduler event object.
	* @param {any} eventObj. An object describing a Scheduler event. The properties of this object will be applied to the desired event.
	*/
    public updateEvent(index: any, eventObj: any): void {
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

	/** @description Removes an event. 
	* @param {any} index. A number that represents the index of an event or the actual event object to be removed.
	*/
    public removeEvent(index: any): void {
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

	/** @description Opens the popup Window for specific event Editing. 
	* @param {any} index. A number that represents the index of a event or the actual event object to be edited.
	*/
    public openWindow(index: any): void {
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

	/** @description Closes the popup window. 
	*/
    public closeWindow(): void {
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

	/** @description Prepares the Scheduler for printing by opening the browser's Print Preview. 
	*/
    public print(): void {
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

	/** @description Scrolls the Scheduler to a Date. 
	* @param {Date} date. The date to scroll to.
	* @param {boolean} strictScroll?. Determines whether to scroll strictly to the date or not. This mean sthat the Scheduler wll scroll to the begining of the cell that corresponds to the target date.
	*/
    public scrollToDate(date: Date, strictScroll?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.scrollToDate(date, strictScroll);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.scrollToDate(date, strictScroll);
            });
        }
    }

	/** @description Scrolls the Scheduler to an event. 
	* @param {any} index. The index of a Scheduler event or the actual event object to scroll to.
	*/
    public scrollToEvent(index: any): void {
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

	/** @description Opens a custom notification. 
	* @param {string} message. The notification message.
	* @param {any} toastSettings. Smart.Toast settings to be applied to the Toast element when opening the notification.
	*/
    public openNotification(message: string, toastSettings: any): void {
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

	/** @description Closes all notifications. 
	*/
    public closeNotifications(): void {
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

	/** @description Returns all occurances of an event. 
	* @param {any} eventObj. A Scheduler evnet object.
	* @param {number} count. The number of occurances to return. By default 100 date occurances of the event are returned.
	*/
    public occurrences(eventObj: any, count: number): void {
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

	/** @description Returns all occurances of an event between two dates. 
	* @param {any} eventObj. A Scheduler event object.
	* @param {Date} dateFrom. The start date.
	* @param {Date} dateTo. The end date.
	*/
    public occurrencesBetween(eventObj: any, dateFrom: Date, dateTo: Date): void {
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

	/** @description Returns the first occurance of an event after a date. 
	* @param {any} eventObj. A Scheduler event object.
	* @param {number} date. The date after which the first occurance of the event will be returned.
	*/
    public occurrenceAfter(eventObj: any, date: number): void {
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

	/** @description Returns the last occurance of an event before a date. 
	* @param {any} eventObj. A Scheduler event object.
	* @param {number} date. The date before which the first occurance of the event will be returned.
	*/
    public occurrenceBefore(eventObj: any, date: number): void {
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

	/** @description Returns the dateStart/dateEnd of a timeline cell. 
	* @param {HTMLElement} cell. A Scheduler timeline cell element.
	* @returns {any}
  */
	public async getCellDateRange(cell): Promise<any> {
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

	/** @description Opens the tooltip(event menu) for an event. 
	* @param {any} eventObj. A Scheduler event object or it's index.
	*/
    public openEventTooltip(eventObj: any): void {
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

	/** @description Closes the event tooltip (event menu). 
	*/
    public closeEventTooltip(): void {
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

	/** @description Returns true or false whether the date is restricted or not. 
	* @param {Date} date. A Date object.
	* @returns {boolean}
  */
	public async isDateRestricted(date): Promise<any> {
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

	/** @description Returns true or false whether the hour is restricted or not. 
	* @param {number | Date} hour. A number that represents an hour ( 0 to 23 ) or a Date object.
	* @returns {boolean}
  */
	public async isHourRestricted(hour): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.isHourRestricted(hour);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Returns true or false whether the event is restricted or not. 
	* @param {any} eventObj. A Scheduler event  object or a direct event HTMLElement instance.
	* @returns {boolean}
  */
	public async isEventRestricted(eventObj): Promise<any> {
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

	/** @description Deletes the current undo/redo history. 
	* @returns {boolean}
  */
	public async deleteUndoRedoHistory(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.deleteUndoRedoHistory();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Indicates whether it is possible to redo an action. 
	* @returns {boolean}
  */
	public async canRedo(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.canRedo();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Indicates whether it is possbile to undo an action. 
	* @returns {boolean}
  */
	public async canUndo(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.canUndo();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Redo the next event modification. 
	* @param {number} step?. A step to redo to.
	* @returns {boolean}
  */
	public async redo(step?): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.redo(step);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Undo the last event modification. 
	* @param {number} step?. A step to undo to.
	* @returns {boolean}
  */
	public async undo(step?): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.undo(step);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }


	get isRendered(): boolean {
		return this.nativeElement ? this.nativeElement.isRendered : false;
	}

	ngOnInit() {
	}

    ngAfterViewInit() {
      const that = this;

      that.onCreate.emit(that.nativeElement);

		Smart.Render();

		this.nativeElement.whenRendered(() => { that.onReady.emit(that.nativeElement); });
		this.listen();
	}

	ngOnDestroy() {
		this.unlisten();
	}

	ngOnChanges(changes: SimpleChanges) {
		if (this.nativeElement && this.nativeElement.isRendered) {
			for (const propName in changes) {
				if (changes.hasOwnProperty(propName)) {
					this.nativeElement[propName] = changes[propName].currentValue;
				}
			}
		}
	}

	/** @description Add event listeners. */
	private listen(): void {
        const that = this;
		that.eventHandlers['beginUpdateHandler'] = (event: CustomEvent) => { that.onBeginUpdate.emit(event); }
		that.nativeElement.addEventListener('beginUpdate', that.eventHandlers['beginUpdateHandler']);

		that.eventHandlers['endUpdateHandler'] = (event: CustomEvent) => { that.onEndUpdate.emit(event); }
		that.nativeElement.addEventListener('endUpdate', that.eventHandlers['endUpdateHandler']);

		that.eventHandlers['changeHandler'] = (event: CustomEvent) => { that.onChange.emit(event); }
		that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);

		that.eventHandlers['itemClickHandler'] = (event: CustomEvent) => { that.onItemClick.emit(event); }
		that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);

		that.eventHandlers['itemInsertHandler'] = (event: CustomEvent) => { that.onItemInsert.emit(event); }
		that.nativeElement.addEventListener('itemInsert', that.eventHandlers['itemInsertHandler']);

		that.eventHandlers['itemRemoveHandler'] = (event: CustomEvent) => { that.onItemRemove.emit(event); }
		that.nativeElement.addEventListener('itemRemove', that.eventHandlers['itemRemoveHandler']);

		that.eventHandlers['itemUpdateHandler'] = (event: CustomEvent) => { that.onItemUpdate.emit(event); }
		that.nativeElement.addEventListener('itemUpdate', that.eventHandlers['itemUpdateHandler']);

		that.eventHandlers['viewChangeHandler'] = (event: CustomEvent) => { that.onViewChange.emit(event); }
		that.nativeElement.addEventListener('viewChange', that.eventHandlers['viewChangeHandler']);

		that.eventHandlers['viewChangingHandler'] = (event: CustomEvent) => { that.onViewChanging.emit(event); }
		that.nativeElement.addEventListener('viewChanging', that.eventHandlers['viewChangingHandler']);

		that.eventHandlers['eventShortcutKeyHandler'] = (event: CustomEvent) => { that.onEventShortcutKey.emit(event); }
		that.nativeElement.addEventListener('eventShortcutKey', that.eventHandlers['eventShortcutKeyHandler']);

		that.eventHandlers['dateChangeHandler'] = (event: CustomEvent) => { that.onDateChange.emit(event); }
		that.nativeElement.addEventListener('dateChange', that.eventHandlers['dateChangeHandler']);

		that.eventHandlers['dragStartHandler'] = (event: CustomEvent) => { that.onDragStart.emit(event); }
		that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);

		that.eventHandlers['dragEndHandler'] = (event: CustomEvent) => { that.onDragEnd.emit(event); }
		that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);

		that.eventHandlers['resizeStartHandler'] = (event: CustomEvent) => { that.onResizeStart.emit(event); }
		that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);

		that.eventHandlers['resizeEndHandler'] = (event: CustomEvent) => { that.onResizeEnd.emit(event); }
		that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);

		that.eventHandlers['editDialogOpeningHandler'] = (event: CustomEvent) => { that.onEditDialogOpening.emit(event); }
		that.nativeElement.addEventListener('editDialogOpening', that.eventHandlers['editDialogOpeningHandler']);

		that.eventHandlers['editDialogOpenHandler'] = (event: CustomEvent) => { that.onEditDialogOpen.emit(event); }
		that.nativeElement.addEventListener('editDialogOpen', that.eventHandlers['editDialogOpenHandler']);

		that.eventHandlers['editDialogCloseHandler'] = (event: CustomEvent) => { that.onEditDialogClose.emit(event); }
		that.nativeElement.addEventListener('editDialogClose', that.eventHandlers['editDialogCloseHandler']);

		that.eventHandlers['editDialogClosingHandler'] = (event: CustomEvent) => { that.onEditDialogClosing.emit(event); }
		that.nativeElement.addEventListener('editDialogClosing', that.eventHandlers['editDialogClosingHandler']);

		that.eventHandlers['contextMenuOpeningHandler'] = (event: CustomEvent) => { that.onContextMenuOpening.emit(event); }
		that.nativeElement.addEventListener('contextMenuOpening', that.eventHandlers['contextMenuOpeningHandler']);

		that.eventHandlers['contextMenuOpenHandler'] = (event: CustomEvent) => { that.onContextMenuOpen.emit(event); }
		that.nativeElement.addEventListener('contextMenuOpen', that.eventHandlers['contextMenuOpenHandler']);

		that.eventHandlers['contextMenuCloseHandler'] = (event: CustomEvent) => { that.onContextMenuClose.emit(event); }
		that.nativeElement.addEventListener('contextMenuClose', that.eventHandlers['contextMenuCloseHandler']);

		that.eventHandlers['contextMenuClosingHandler'] = (event: CustomEvent) => { that.onContextMenuClosing.emit(event); }
		that.nativeElement.addEventListener('contextMenuClosing', that.eventHandlers['contextMenuClosingHandler']);

		that.eventHandlers['eventMenuOpeningHandler'] = (event: CustomEvent) => { that.onEventMenuOpening.emit(event); }
		that.nativeElement.addEventListener('eventMenuOpening', that.eventHandlers['eventMenuOpeningHandler']);

		that.eventHandlers['eventMenuOpenHandler'] = (event: CustomEvent) => { that.onEventMenuOpen.emit(event); }
		that.nativeElement.addEventListener('eventMenuOpen', that.eventHandlers['eventMenuOpenHandler']);

		that.eventHandlers['eventMenuCloseHandler'] = (event: CustomEvent) => { that.onEventMenuClose.emit(event); }
		that.nativeElement.addEventListener('eventMenuClose', that.eventHandlers['eventMenuCloseHandler']);

		that.eventHandlers['eventMenuClosingHandler'] = (event: CustomEvent) => { that.onEventMenuClosing.emit(event); }
		that.nativeElement.addEventListener('eventMenuClosing', that.eventHandlers['eventMenuClosingHandler']);

		that.eventHandlers['dateMenuOpenHandler'] = (event: CustomEvent) => { that.onDateMenuOpen.emit(event); }
		that.nativeElement.addEventListener('dateMenuOpen', that.eventHandlers['dateMenuOpenHandler']);

		that.eventHandlers['dateMenuCloseHandler'] = (event: CustomEvent) => { that.onDateMenuClose.emit(event); }
		that.nativeElement.addEventListener('dateMenuClose', that.eventHandlers['dateMenuCloseHandler']);

		that.eventHandlers['viewMenuOpenHandler'] = (event: CustomEvent) => { that.onViewMenuOpen.emit(event); }
		that.nativeElement.addEventListener('viewMenuOpen', that.eventHandlers['viewMenuOpenHandler']);

		that.eventHandlers['viewMenuCloseHandler'] = (event: CustomEvent) => { that.onViewMenuClose.emit(event); }
		that.nativeElement.addEventListener('viewMenuClose', that.eventHandlers['viewMenuCloseHandler']);

		that.eventHandlers['notificationOpenHandler'] = (event: CustomEvent) => { that.onNotificationOpen.emit(event); }
		that.nativeElement.addEventListener('notificationOpen', that.eventHandlers['notificationOpenHandler']);

		that.eventHandlers['notificationCloseHandler'] = (event: CustomEvent) => { that.onNotificationClose.emit(event); }
		that.nativeElement.addEventListener('notificationClose', that.eventHandlers['notificationCloseHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['beginUpdateHandler']) {
			that.nativeElement.removeEventListener('beginUpdate', that.eventHandlers['beginUpdateHandler']);
		}

		if (that.eventHandlers['endUpdateHandler']) {
			that.nativeElement.removeEventListener('endUpdate', that.eventHandlers['endUpdateHandler']);
		}

		if (that.eventHandlers['changeHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
		}

		if (that.eventHandlers['itemClickHandler']) {
			that.nativeElement.removeEventListener('itemClick', that.eventHandlers['itemClickHandler']);
		}

		if (that.eventHandlers['itemInsertHandler']) {
			that.nativeElement.removeEventListener('itemInsert', that.eventHandlers['itemInsertHandler']);
		}

		if (that.eventHandlers['itemRemoveHandler']) {
			that.nativeElement.removeEventListener('itemRemove', that.eventHandlers['itemRemoveHandler']);
		}

		if (that.eventHandlers['itemUpdateHandler']) {
			that.nativeElement.removeEventListener('itemUpdate', that.eventHandlers['itemUpdateHandler']);
		}

		if (that.eventHandlers['viewChangeHandler']) {
			that.nativeElement.removeEventListener('viewChange', that.eventHandlers['viewChangeHandler']);
		}

		if (that.eventHandlers['viewChangingHandler']) {
			that.nativeElement.removeEventListener('viewChanging', that.eventHandlers['viewChangingHandler']);
		}

		if (that.eventHandlers['eventShortcutKeyHandler']) {
			that.nativeElement.removeEventListener('eventShortcutKey', that.eventHandlers['eventShortcutKeyHandler']);
		}

		if (that.eventHandlers['dateChangeHandler']) {
			that.nativeElement.removeEventListener('dateChange', that.eventHandlers['dateChangeHandler']);
		}

		if (that.eventHandlers['dragStartHandler']) {
			that.nativeElement.removeEventListener('dragStart', that.eventHandlers['dragStartHandler']);
		}

		if (that.eventHandlers['dragEndHandler']) {
			that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
		}

		if (that.eventHandlers['resizeStartHandler']) {
			that.nativeElement.removeEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
		}

		if (that.eventHandlers['resizeEndHandler']) {
			that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
		}

		if (that.eventHandlers['editDialogOpeningHandler']) {
			that.nativeElement.removeEventListener('editDialogOpening', that.eventHandlers['editDialogOpeningHandler']);
		}

		if (that.eventHandlers['editDialogOpenHandler']) {
			that.nativeElement.removeEventListener('editDialogOpen', that.eventHandlers['editDialogOpenHandler']);
		}

		if (that.eventHandlers['editDialogCloseHandler']) {
			that.nativeElement.removeEventListener('editDialogClose', that.eventHandlers['editDialogCloseHandler']);
		}

		if (that.eventHandlers['editDialogClosingHandler']) {
			that.nativeElement.removeEventListener('editDialogClosing', that.eventHandlers['editDialogClosingHandler']);
		}

		if (that.eventHandlers['contextMenuOpeningHandler']) {
			that.nativeElement.removeEventListener('contextMenuOpening', that.eventHandlers['contextMenuOpeningHandler']);
		}

		if (that.eventHandlers['contextMenuOpenHandler']) {
			that.nativeElement.removeEventListener('contextMenuOpen', that.eventHandlers['contextMenuOpenHandler']);
		}

		if (that.eventHandlers['contextMenuCloseHandler']) {
			that.nativeElement.removeEventListener('contextMenuClose', that.eventHandlers['contextMenuCloseHandler']);
		}

		if (that.eventHandlers['contextMenuClosingHandler']) {
			that.nativeElement.removeEventListener('contextMenuClosing', that.eventHandlers['contextMenuClosingHandler']);
		}

		if (that.eventHandlers['eventMenuOpeningHandler']) {
			that.nativeElement.removeEventListener('eventMenuOpening', that.eventHandlers['eventMenuOpeningHandler']);
		}

		if (that.eventHandlers['eventMenuOpenHandler']) {
			that.nativeElement.removeEventListener('eventMenuOpen', that.eventHandlers['eventMenuOpenHandler']);
		}

		if (that.eventHandlers['eventMenuCloseHandler']) {
			that.nativeElement.removeEventListener('eventMenuClose', that.eventHandlers['eventMenuCloseHandler']);
		}

		if (that.eventHandlers['eventMenuClosingHandler']) {
			that.nativeElement.removeEventListener('eventMenuClosing', that.eventHandlers['eventMenuClosingHandler']);
		}

		if (that.eventHandlers['dateMenuOpenHandler']) {
			that.nativeElement.removeEventListener('dateMenuOpen', that.eventHandlers['dateMenuOpenHandler']);
		}

		if (that.eventHandlers['dateMenuCloseHandler']) {
			that.nativeElement.removeEventListener('dateMenuClose', that.eventHandlers['dateMenuCloseHandler']);
		}

		if (that.eventHandlers['viewMenuOpenHandler']) {
			that.nativeElement.removeEventListener('viewMenuOpen', that.eventHandlers['viewMenuOpenHandler']);
		}

		if (that.eventHandlers['viewMenuCloseHandler']) {
			that.nativeElement.removeEventListener('viewMenuClose', that.eventHandlers['viewMenuCloseHandler']);
		}

		if (that.eventHandlers['notificationOpenHandler']) {
			that.nativeElement.removeEventListener('notificationOpen', that.eventHandlers['notificationOpenHandler']);
		}

		if (that.eventHandlers['notificationCloseHandler']) {
			that.nativeElement.removeEventListener('notificationClose', that.eventHandlers['notificationCloseHandler']);
		}

	}
}
