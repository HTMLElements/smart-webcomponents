import { GanttChart } from './../index';
import { GanttChartDataExportItemType, GanttDayFormat, Duration, HorizontalScrollBarVisibility, HourFormat, MonthFormat, GanttChartResourceTimelineMode, GanttChartResourceTimelineView, GanttChartTaskType, VerticalScrollBarVisibility, GanttChartView, YearFormat, WeekFormat, GanttChartDataExport, GanttChartDataSource, GanttChartDataSourceConnection, GanttChartDataSourceResource, GanttChartResource, GanttChartResourceColumn, GanttChartTask, GanttChartTaskConnection, GanttChartTaskResource, GanttChartTaskColumn, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { GanttChartDataExportItemType, GanttDayFormat, Duration, HorizontalScrollBarVisibility, HourFormat, MonthFormat, GanttChartResourceTimelineMode, GanttChartResourceTimelineView, GanttChartTaskType, VerticalScrollBarVisibility, GanttChartView, YearFormat, WeekFormat, GanttChartDataExport, GanttChartDataSource, GanttChartDataSourceConnection, GanttChartDataSourceResource, GanttChartResource, GanttChartResourceColumn, GanttChartTask, GanttChartTaskConnection, GanttChartTaskResource, GanttChartTaskColumn, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { GanttChart } from './../index';


@Directive({
	selector: 'smart-gantt-chart, [smart-gantt-chart]'
})

export class GanttChartComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<GanttChart>) {
		super(ref);
		this.nativeElement = ref.nativeElement as GanttChart;
	}

	private eventHandlers: any[] = [];

	public nativeElement: GanttChart;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <GanttChart>document.createElement('smart-gantt-chart');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Recalculates the tasks that are connected and re-schedules them according to their connections. If no connections are present, autoScheduling has no effect until a connection is created. Connection types determines the start/end date limits of the tasks. */
	@Input()
	get autoSchedule(): boolean {
		return this.nativeElement ? this.nativeElement.autoSchedule : undefined;
	}
	set autoSchedule(value: boolean) {
		this.nativeElement ? this.nativeElement.autoSchedule = value : undefined;
	}

	/** @description Affects the tasks only when autoSchedule is enabled. When set to true, the tasks are strictly scheduled ( according to their connections ) and dragging is not allowed.  Users can set lag to specific connections to determine a delay of overlap of between the two tasks ( interval of time in miliseconds ). Lag one of the attributes of a task connection and should be set in the dataSource where the task connections are defined. */
	@Input()
	get autoScheduleStrictMode(): boolean {
		return this.nativeElement ? this.nativeElement.autoScheduleStrictMode : undefined;
	}
	set autoScheduleStrictMode(value: boolean) {
		this.nativeElement ? this.nativeElement.autoScheduleStrictMode = value : undefined;
	}

	/** @description Determines the scroll speed when dragging when autoScroll property is set.  */
	@Input()
	get autoScrollStep(): number {
		return this.nativeElement ? this.nativeElement.autoScrollStep : undefined;
	}
	set autoScrollStep(value: number) {
		this.nativeElement ? this.nativeElement.autoScrollStep = value : undefined;
	}

	/** @description Sets the GanttChart's Data Export options. */
	@Input()
	get dataExport(): GanttChartDataExport {
		return this.nativeElement ? this.nativeElement.dataExport : undefined;
	}
	set dataExport(value: GanttChartDataExport) {
		this.nativeElement ? this.nativeElement.dataExport = value : undefined;
	}

	/** @description Determines the tasks that will be loaded inside the Timeline. Each item represents an object that should contain the following properties: label - the label of the TaskdateStart - the starting date of the Task. Should be a string representing a valid date.dateEnd - the ending date of the Task. Should be a string representing a valid date.type - determines the type of the task. Whether it's a simple task, a project or a milestone. Each type of task has specific behavior and additional attributes..  Additional properties: connections - an array of objects representing the connection between two tasks. Each connection (object) should have the following properties : target - a number representing the index of the target tasktype - a number representing the type of the connection. Four types of connections are available: 0 - is a connection of type Start-to-Start 1 - is a connection of type End-to-Start 2 - is a connection of type End-to-End3 - is a connection of type Start-to-End lag - a number that determines the delay between two connected auto scheduled tasks. Lag property can be a positive or a negative number. When negative it determines the overlap between two connected tasks. This property is used in conjuction with autoSchedule.duration - determines the duration of a Task in days, hours, minutes, seconds or miliseconds. Very usefull when the the dateEnd of a Task is unknown.minDuration - sets the minimum duration of a task. maxDuration - sets the maximum duration of a task.minDateStart - determines the mininum date that a task can start from. Must be if type string and should represent a valid date.maxDateStart - determines the maximum date that a task can start from. Must be if type string and should represent a valid date.minDateEnd - determines the mininum date that a task can end. Must be if type string and should represent a valid date.maxDateEnd - determines the maximum date that a task can end. Must be if type string and should represent a valid date.progress - a number that determines the progress of a task ( from 0 to 100 ).disableDrag - a boolean property that disables the dragging of a task when set to true.disableResize - a boolean property that disables the resizing of a task when set to true.dragProject - a boolean that determines whether or not the whole project (along with the tasks) can be dragged while dragging the project task. Applicalbe only to Projects.synchronized - a boolean that if set the project task's start/end dates are automatically calculated based on the tasks. By default a synchronized project task can't be dragged alone. Applicable only to Project tasks.expanded - a boolean that determines if a project is expanded or not. If not all of it's sub-tasks are not visible. Only the project task itself is visible. By default no projects are expanded. Applicable only to project tasks.. */
	@Input()
	get dataSource(): GanttChartDataSource[] {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: GanttChartDataSource[]) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Determines the format of the dates in the timeline header when they represent days. */
	@Input()
	get dayFormat(): GanttDayFormat {
		return this.nativeElement ? this.nativeElement.dayFormat : undefined;
	}
	set dayFormat(value: GanttDayFormat) {
		this.nativeElement ? this.nativeElement.dayFormat = value : undefined;
	}

	/** @description Determines a specific end date for the Timeline. Usefull when the user wants custom ending date for the Timeline. If no date is set the end date of the timeline is automatically determined from the tasks. */
	@Input()
	get dateEnd(): string | Date {
		return this.nativeElement ? this.nativeElement.dateEnd : undefined;
	}
	set dateEnd(value: string | Date) {
		this.nativeElement ? this.nativeElement.dateEnd = value : undefined;
	}

	/** @description Determines a specific starting date for the Timeline. Usefull when the user wants custom starting date for the Timeline. If no date is set the start date of the timeline is automatically determined from the tasks. */
	@Input()
	get dateStart(): string | Date {
		return this.nativeElement ? this.nativeElement.dateStart : undefined;
	}
	set dateStart(value: string | Date) {
		this.nativeElement ? this.nativeElement.dateStart = value : undefined;
	}

	/** @description Enables or disables the element. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Disables auto scrolling while dragging/resizing a task bar inside the Timeline. */
	@Input()
	get disableAutoScroll(): boolean {
		return this.nativeElement ? this.nativeElement.disableAutoScroll : undefined;
	}
	set disableAutoScroll(value: boolean) {
		this.nativeElement ? this.nativeElement.disableAutoScroll = value : undefined;
	}

	/** @description Disables dragging of tasks in the Timeline. */
	@Input()
	get disableTaskDrag(): boolean {
		return this.nativeElement ? this.nativeElement.disableTaskDrag : undefined;
	}
	set disableTaskDrag(value: boolean) {
		this.nativeElement ? this.nativeElement.disableTaskDrag = value : undefined;
	}

	/** @description Disables task progress changing in the Timeline. */
	@Input()
	get disableTaskProgressChange(): boolean {
		return this.nativeElement ? this.nativeElement.disableTaskProgressChange : undefined;
	}
	set disableTaskProgressChange(value: boolean) {
		this.nativeElement ? this.nativeElement.disableTaskProgressChange = value : undefined;
	}

	/** @description Disables resizing of tasks in the Timeline. */
	@Input()
	get disableTaskResize(): boolean {
		return this.nativeElement ? this.nativeElement.disableTaskResize : undefined;
	}
	set disableTaskResize(value: boolean) {
		this.nativeElement ? this.nativeElement.disableTaskResize = value : undefined;
	}

	/** @description Disables the selection inside the GanttChart. */
	@Input()
	get disableSelection(): boolean {
		return this.nativeElement ? this.nativeElement.disableSelection : undefined;
	}
	set disableSelection(value: boolean) {
		this.nativeElement ? this.nativeElement.disableSelection = value : undefined;
	}

	/** @description Disables the window editor for the GanttChart. */
	@Input()
	get disableWindowEditor(): boolean {
		return this.nativeElement ? this.nativeElement.disableWindowEditor : undefined;
	}
	set disableWindowEditor(value: boolean) {
		this.nativeElement ? this.nativeElement.disableWindowEditor = value : undefined;
	}

	/** @description Determines in what unit is task duration property measured. */
	@Input()
	get durationUnit(): Duration {
		return this.nativeElement ? this.nativeElement.durationUnit : undefined;
	}
	set durationUnit(value: Duration) {
		this.nativeElement ? this.nativeElement.durationUnit = value : undefined;
	}

	/** @description Allows to create a custom header content for the Task Panel. The attribute accepts an HTMLTemplate element, it's id or a function. */
	@Input()
	get headerTemplate(): any {
		return this.nativeElement ? this.nativeElement.headerTemplate : undefined;
	}
	set headerTemplate(value: any) {
		this.nativeElement ? this.nativeElement.headerTemplate = value : undefined;
	}

	/** @description Hides the Resource panel regardless of the resources availability By default the Resource panel is visible if resources are added to the GanttChart. This property allows to hide the Resource panel permanently. */
	@Input()
	get hideResourcePanel(): boolean {
		return this.nativeElement ? this.nativeElement.hideResourcePanel : undefined;
	}
	set hideResourcePanel(value: boolean) {
		this.nativeElement ? this.nativeElement.hideResourcePanel = value : undefined;
	}

	/** @description Determines weather or not horizontal scrollbar is shown. */
	@Input()
	get horizontalScrollBarVisibility(): HorizontalScrollBarVisibility {
		return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
	}
	set horizontalScrollBarVisibility(value: HorizontalScrollBarVisibility) {
		this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility = value : undefined;
	}

	/** @description Determines the format of the dates inside the timeline header when they represent hours. */
	@Input()
	get hourFormat(): HourFormat {
		return this.nativeElement ? this.nativeElement.hourFormat : undefined;
	}
	set hourFormat(value: HourFormat) {
		this.nativeElement ? this.nativeElement.hourFormat = value : undefined;
	}

	/** @description When set the Timeline is positioned on the left side while the Task Tree is positioned on the right. By default it's vice versa. */
	@Input()
	get inverted(): boolean {
		return this.nativeElement ? this.nativeElement.inverted : undefined;
	}
	set inverted(value: boolean) {
		this.nativeElement ? this.nativeElement.inverted = value : undefined;
	}

	/** @description  Determines the language of the GanttChart.  */
	@Input()
	get locale(): string {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		this.nativeElement ? this.nativeElement.locale = value : undefined;
	}

	/** @description Detetmines the maximum possible date of the Timeline. */
	@Input()
	get max(): any {
		return this.nativeElement ? this.nativeElement.max : undefined;
	}
	set max(value: any) {
		this.nativeElement ? this.nativeElement.max = value : undefined;
	}

	/** @description Detetmines the minimum possible date of the Timeline. */
	@Input()
	get min(): any {
		return this.nativeElement ? this.nativeElement.min : undefined;
	}
	set min(value: any) {
		this.nativeElement ? this.nativeElement.min = value : undefined;
	}

	/** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Determines the format of the dates the timeline header when they represent months. */
	@Input()
	get monthFormat(): MonthFormat {
		return this.nativeElement ? this.nativeElement.monthFormat : undefined;
	}
	set monthFormat(value: MonthFormat) {
		this.nativeElement ? this.nativeElement.monthFormat = value : undefined;
	}

	/** @description Determines the nonworking days of the week from 0 to 6, where 0 is the first day of the week and 6 is the last day. Nonworking days will be displayed with colored cells inside the timeline and will be ignored during task range calculations. */
	@Input()
	get nonworkingDays(): number[] {
		return this.nativeElement ? this.nativeElement.nonworkingDays : undefined;
	}
	set nonworkingDays(value: number[]) {
		this.nativeElement ? this.nativeElement.nonworkingDays = value : undefined;
	}

	/** @description Determines the nonworking hours of a day. Hours are represented as numbers inside an array. In the timline the cells that represent nonworking days are colored differently from the rest. */
	@Input()
	get nonworkingHours(): number[] {
		return this.nativeElement ? this.nativeElement.nonworkingHours : undefined;
	}
	set nonworkingHours(value: number[]) {
		this.nativeElement ? this.nativeElement.nonworkingHours = value : undefined;
	}

	/** @description A function that can be used to completly customize the popup Window that is used to interact width tasks by changing their properties. The function as three arguments: target - the target popup Window that is about to be opened.type - the type of the window. The type determines the purpose of the window. Three possible values: 'task' (task editing), 'confirm' ( confirmation window), 'connection' (used when deleting a connection between tasks). taskIndex - the index of the task that is being edited. It will be undefined if the type of the window is not 'task'. */
	@Input()
	get popupWindowCustomizationFunction(): any {
		return this.nativeElement ? this.nativeElement.popupWindowCustomizationFunction : undefined;
	}
	set popupWindowCustomizationFunction(value: any) {
		this.nativeElement ? this.nativeElement.popupWindowCustomizationFunction = value : undefined;
	}

	/** @description A getter that returns a flat structure as an array of all resources inside the element. */
	@Input()
	get resources(): GanttChartResource[] {
		return this.nativeElement ? this.nativeElement.resources : undefined;
	}
	set resources(value: GanttChartResource[]) {
		this.nativeElement ? this.nativeElement.resources = value : undefined;
	}

	/** @description Deteremines the columns that will be visible in the Resource Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. By default, one column with all resource labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts two arguments - the actual label as string that is going to be inserted and the index of the resource. The function must return a string as the new content. min - controls the min size of the column max - controls the max size of the columnsize - controls the actual size of the column */
	@Input()
	get resourceColumns(): GanttChartResourceColumn[] {
		return this.nativeElement ? this.nativeElement.resourceColumns : undefined;
	}
	set resourceColumns(value: GanttChartResourceColumn[]) {
		this.nativeElement ? this.nativeElement.resourceColumns = value : undefined;
	}

	/** @description Allows to create a custom header content for the Resource Panel. The attribute accepts an HTMLTemplate element, it's id or a function. */
	@Input()
	get resourcePanelHeaderTemplate(): any {
		return this.nativeElement ? this.nativeElement.resourcePanelHeaderTemplate : undefined;
	}
	set resourcePanelHeaderTemplate(value: any) {
		this.nativeElement ? this.nativeElement.resourcePanelHeaderTemplate = value : undefined;
	}

	/** @description Determines the min size of the Resource Panel. */
	@Input()
	get resourcePanelMin(): number | string {
		return this.nativeElement ? this.nativeElement.resourcePanelMin : undefined;
	}
	set resourcePanelMin(value: number | string) {
		this.nativeElement ? this.nativeElement.resourcePanelMin = value : undefined;
	}

	/** @description Determines the size of the Resource Panel. */
	@Input()
	get resourcePanelSize(): number | string {
		return this.nativeElement ? this.nativeElement.resourcePanelSize : undefined;
	}
	set resourcePanelSize(value: number | string) {
		this.nativeElement ? this.nativeElement.resourcePanelSize = value : undefined;
	}

	/** @description Determines the refresh rate of the Resource Panel when dragging/resizing/progress changing a Task from the Timeline. This property allows to customize the interval between resource Tree/Timeline refreshes. By default they refresh immediately after a change. */
	@Input()
	get resourcePanelRefreshRate(): number {
		return this.nativeElement ? this.nativeElement.resourcePanelRefreshRate : undefined;
	}
	set resourcePanelRefreshRate(value: number) {
		this.nativeElement ? this.nativeElement.resourcePanelRefreshRate = value : undefined;
	}

	/** @description A callback that can be used to customize the content of the resource Timeline cells. The callback accepts three arguments: taskIndexes - an array of task indexes that are assigned to the resource for the current cell.resourceIndex - the index of the resource.cellDate - the date of the current cell. This property is used when resourceTimelineView is set to custom. Depending on the resourceTimelineMode, it should return: string - when the resourceTimelineMode is set to 'diagram'.object - when the resourceTimelineMode is set to 'histogram'. The object should have two attributes: capacity and maxCapacity, in order to be visualized as a histogram.. Another usage of this callback is to customize the timeline resource representation completely if resourceTimelineMode is set to custom. */
	@Input()
	get resourceTimelineFormatFunction(): any {
		return this.nativeElement ? this.nativeElement.resourceTimelineFormatFunction : undefined;
	}
	set resourceTimelineFormatFunction(value: any) {
		this.nativeElement ? this.nativeElement.resourceTimelineFormatFunction = value : undefined;
	}

	/** @description Determines how the capacity of the resources will be visualized inside the resource timeline. By default, the capacity is measured in hours depending on the view property of the element. */
	@Input()
	get resourceTimelineMode(): GanttChartResourceTimelineMode {
		return this.nativeElement ? this.nativeElement.resourceTimelineMode : undefined;
	}
	set resourceTimelineMode(value: GanttChartResourceTimelineMode) {
		this.nativeElement ? this.nativeElement.resourceTimelineMode = value : undefined;
	}

	/** @description Determines how the resources will be displayed inside the resource Timeline. */
	@Input()
	get resourceTimelineView(): GanttChartResourceTimelineView {
		return this.nativeElement ? this.nativeElement.resourceTimelineView : undefined;
	}
	set resourceTimelineView(value: GanttChartResourceTimelineView) {
		this.nativeElement ? this.nativeElement.resourceTimelineView = value : undefined;
	}

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description Determines the selected task(s). If empty no tasks are selected. */
	@Input()
	get selectedIndexes(): number[] {
		return this.nativeElement ? this.nativeElement.selectedIndexes : undefined;
	}
	set selectedIndexes(value: number[]) {
		this.nativeElement ? this.nativeElement.selectedIndexes = value : undefined;
	}

	/** @description If set the dateStart/dateEnd of the tasks will be coerced to the nearest timeline cell date ( according to the view ). Affects the dragging operation as well. */
	@Input()
	get snapToNearest(): boolean {
		return this.nativeElement ? this.nativeElement.snapToNearest : undefined;
	}
	set snapToNearest(value: boolean) {
		this.nativeElement ? this.nativeElement.snapToNearest = value : undefined;
	}

	/** @description A getter that returns a flat structure as an array of all tasks inside the element. */
	@Input()
	get tasks(): GanttChartTask[] {
		return this.nativeElement ? this.nativeElement.tasks : undefined;
	}
	set tasks(value: GanttChartTask[]) {
		this.nativeElement ? this.nativeElement.tasks = value : undefined;
	}

	/** @description Deteremines the columns that will be visible in the Task Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. It should reference a task attribute from the dataSource. By default, one column with all task labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts one argument - the actual label as string that is going to be inserted and must return some content. min - controls the min size of the column max - controls the max size of the column size - controls the actual size of the columncustomEditor - a callback that can be used to set a custom editor for the column when editing via the window. It accepts two arguments label - the label of the columnvalue - the value of the column. The callback must return the editor.setCustomEditorValue - a callback that is used to set the value of the custom editor.getCustomEditorValue - a callback that is used to get the value of the custom editor. */
	@Input()
	get taskColumns(): GanttChartTaskColumn[] {
		return this.nativeElement ? this.nativeElement.taskColumns : undefined;
	}
	set taskColumns(value: GanttChartTaskColumn[]) {
		this.nativeElement ? this.nativeElement.taskColumns = value : undefined;
	}

	/** @description Determines the min size of the Task Panel. Used when Resource Panel is visible. */
	@Input()
	get taskPanelMin(): any {
		return this.nativeElement ? this.nativeElement.taskPanelMin : undefined;
	}
	set taskPanelMin(value: any) {
		this.nativeElement ? this.nativeElement.taskPanelMin = value : undefined;
	}

	/** @description Determines the size of the Task Panel. Used when Resource Panel is visible. */
	@Input()
	get taskPanelSize(): any {
		return this.nativeElement ? this.nativeElement.taskPanelSize : undefined;
	}
	set taskPanelSize(value: any) {
		this.nativeElement ? this.nativeElement.taskPanelSize = value : undefined;
	}

	/** @description Determines the min width of the timeline. */
	@Input()
	get timelineMin(): any {
		return this.nativeElement ? this.nativeElement.timelineMin : undefined;
	}
	set timelineMin(value: any) {
		this.nativeElement ? this.nativeElement.timelineMin = value : undefined;
	}

	/** @description Determines the min width of the task tree. */
	@Input()
	get treeMin(): any {
		return this.nativeElement ? this.nativeElement.treeMin : undefined;
	}
	set treeMin(value: any) {
		this.nativeElement ? this.nativeElement.treeMin = value : undefined;
	}

	/** @description Determines the size(width) of the task tree. */
	@Input()
	get treeSize(): any {
		return this.nativeElement ? this.nativeElement.treeSize : undefined;
	}
	set treeSize(value: any) {
		this.nativeElement ? this.nativeElement.treeSize = value : undefined;
	}

	/** @description A format function for the Header of the Timeline. */
	@Input()
	get timelineHeaderFormatFunction(): any {
		return this.nativeElement ? this.nativeElement.timelineHeaderFormatFunction : undefined;
	}
	set timelineHeaderFormatFunction(value: any) {
		this.nativeElement ? this.nativeElement.timelineHeaderFormatFunction = value : undefined;
	}

	/** @description Determines weather or not vertical scrollbar is shown. */
	@Input()
	get verticalScrollBarVisibility(): VerticalScrollBarVisibility {
		return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
	}
	set verticalScrollBarVisibility(value: VerticalScrollBarVisibility) {
		this.nativeElement ? this.nativeElement.verticalScrollBarVisibility = value : undefined;
	}

	/** @description Determines the viewing date range of the timeline. Possible values: day - The timeline show the hours of the day.week - the timeline shows the days of the week.month - the timeline shows the days of the month.year - the timeline shows the months of the year.resource - displays the current tasks by grouping them according to the resources they have assigned. The unassigned tasks will be placed in a separate group called 'Unassigned'.  The timeline has a header section that contains the labels of each cell according to the date inside them. The header is splitted in two sections in order to give a more detailed information of the dates. */
	@Input()
	get view(): GanttChartView {
		return this.nativeElement ? this.nativeElement.view : undefined;
	}
	set view(value: GanttChartView) {
		this.nativeElement ? this.nativeElement.view = value : undefined;
	}

	/** @description Determines the format of the dates inside the timeline header when they represent years. */
	@Input()
	get yearFormat(): YearFormat {
		return this.nativeElement ? this.nativeElement.yearFormat : undefined;
	}
	set yearFormat(value: YearFormat) {
		this.nativeElement ? this.nativeElement.yearFormat = value : undefined;
	}

	/** @description Determines the format of the dates inside the timeline header when they represent weeks.  */
	@Input()
	get weekFormat(): WeekFormat {
		return this.nativeElement ? this.nativeElement.weekFormat : undefined;
	}
	set weekFormat(value: WeekFormat) {
		this.nativeElement ? this.nativeElement.weekFormat = value : undefined;
	}

	/** @description Sets or gets the element's visual theme.  */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description Sets or gets if the element can be focused. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
	}

	/** @description This event is triggered when a Task is selected/unselected.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue)
	*   value - The index of the new selected task.
	*   oldValue - The index of the previously selected task.
	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the progress of a task bar starts to change as a result of user interaction. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	progress)
	*   index - The index of the task which progress is going to be changed.
	*   progress - The progress of the task before it is changed.
	*/
	@Output() onProgressChangeStart: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the progress of a task is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	progress)
	*   index - The index of the task which progress is has been changed.
	*   progress - The progress of the task after it was changed.
	*/
	@Output() onProgressChangeEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when dragging of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
	*   index - The index of the task that is going to be dragged.
	*   dateStart - The start date of the task that is going to be dragged.
	*   dateEnd - The end date of the task that is going to be dragged.
	*/
	@Output() onDragStart: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when dragging of a task finishes.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
	*   index - The index of the task that is was dragged.
	*   dateStart - The start date of the task that is was dragged.
	*   dateEnd - The end date of the task that is was dragged.
	*/
	@Output() onDragEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when resizing of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
	*   index - The index of the task that is going to be resized.
	*   dateStart - The start date of the task that is going to be resized.
	*   dateEnd - The end date of the task that is going to be resized.
	*/
	@Output() onResizeStart: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the resizing of a task finishes.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
	*   index - The index of the task that was resized.
	*   dateStart - The start date of the task that was resized.
	*   dateEnd - The end date of the task that was resized.
	*/
	@Output() onResizeEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the user starts connecting one task to another. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	startIndex)
	*   startIndex - The index of the task that a connection is started from.
	*/
	@Output() onConnectionStart: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the user completes a connection between two tasks.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	startIndex, 	endIndex, 	type)
	*   startIndex - The index of the task that a connection is started from.
	*   endIndex - The index of the task that a connection is started from.
	*   type - The type of connection. Fours types are available: <ul><li><b>0</b> - start-to-start</li><li><b>1</b> - end-to-start</li><li><b>2</b> - end-to-end</li><li><b>3</b> - start-to-end</li></ul>
	*/
	@Output() onConnectionEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the Timeline has been scrolled to the bottom.
	*  @param event. The custom event. 	*/
	@Output() onScrollBottomReached: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the Timeline has been scrolled to the top.
	*  @param event. The custom event. 	*/
	@Output() onScrollTopReached: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered just before the window for task editing starts opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	type)
	*   target - The instance of the window that is going to open.
	*   type - The type of window that is going to open. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>
	*/
	@Output() onOpening: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the window for task editing is opened( visible ).
	*  @param event. The custom event. 	*/
	@Output() onOpen: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered just before the window for task editing starts closing. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	type)
	*   target - The instance of the window that is going to close.
	*   type - The type of window that is going to close. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>
	*/
	@Output() onClosing: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the window for task editing is closed( hidden )
	*  @param event. The custom event. 	*/
	@Output() onClose: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Adds a task as the last item of a Project. 
	* @param {string | number} taskIndex. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
	* @param {string | number} projectIndex. A number that represents the index of a project or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
	*/
    public addTaskTo(taskIndex: string | number, projectIndex: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addTaskTo(taskIndex, projectIndex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addTaskTo(taskIndex, projectIndex);
            });
        }
    }

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

	/** @description Ends the update operation. This method will resume the rendering and will refresh the GanttChart. 
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

	/** @description Refereshes the GanttChart after resizing by recalculating the Scrollbars.  
	* @param {boolean} fullRefresh?. If set the GanttChart will be re-rendered completely.
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

	/** @description Removes all connections between tasks.  
	*/
    public removeAllConnections(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAllConnections();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAllConnections();
            });
        }
    }

	/** @description Removes a connection between tasks. The function accepts three arguments(task's start index, end index and connection type) or one connection string argument which describes the connection. 
	* @param {number | string} startTaskIndex. The index of the start task or the connection string like '2-3-0.
	* @param {number} taskEndIndex?. The index of the end task.
	* @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3.
	* @returns {any}
  */
	public async removeConnection(startTaskIndex, taskEndIndex?, connectionType?): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.removeConnection(startTaskIndex, taskEndIndex, connectionType);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Removes all connections of a task or between two tasks if the second argument is provided and valid. 
	* @param {number} taskStartIndex. The index of the start task. 
	* @param {number} taskEndIndex?. The index of the end task.
	* @returns {string}
  */
	public async removeTaskConnection(taskStartIndex, taskEndIndex?): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.removeTaskConnection(taskStartIndex, taskEndIndex);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Removes all tasks.  
	*/
    public clearTasks(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearTasks();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearTasks();
            });
        }
    }

	/** @description Removes all resources.  
	*/
    public clearResources(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearResources();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearResources();
            });
        }
    }

	/** @description Creates a connection between two tasks.  
	* @param {number | string} startTaskIndex. The index of the start task or the connection string like '2-3-0.
	* @param {number} taskEndIndex?. The index of the end task.
	* @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3.
	*/
    public createConnection(startTaskIndex: number | string, taskEndIndex?: number, connectionType?: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.createConnection(startTaskIndex, taskEndIndex, connectionType);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.createConnection(startTaskIndex, taskEndIndex, connectionType);
            });
        }
    }

	/** @description Collapses an expanded project with tasks. 
	* @param {string | number} index. The index of a project task that should be collapsed.
	*/
    public collapse(index: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse(index);
            });
        }
    }

	/** @description Makes sure a Task is visible by scrolling to it. 
	* @param {string | number} item. The index of the target Task. Can be a string representing a Tree index ( similar to jqxTree )
	*/
    public ensureVisible(item: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.ensureVisible(item);
            });
        }
    }

	/** @description Expands a collapsed project with tasks. 
	* @param {string | number} index. The index of a project task that should be expanded.
	*/
    public expand(index: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expand(index);
            });
        }
    }

	/** @description Exports the data of Tree of the GanttChart. 
	* @param {string} dataFormat. Determines the format of the exported file. Three possible values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li></ul>
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

	/** @description Returns a JSON representation of all tasks inside the element along with their connections and settings. 
	* @returns {any[]}
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

	/** @description Returns the index of a task. 
	* @param {HTMLElement} task. A GattChartTask object.
	* @returns {number}
  */
	public async getTaskIndex(task): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getTaskIndex(task);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Returns the tree path of a task. 
	* @param {GanttChartTask} task. Returns the Tree path of the task as a string.
	* @returns {string}
  */
	public async getTaskPath(task): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getTaskPath(task);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Returns the index of a resource. 
	* @param {any} resource. A GanttChartResource object.
	* @returns {number}
  */
	public async getResourceIndex(resource): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getResourceIndex(resource);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Unselects all currently selected items inside the GanttChart including Tasks and Resources. It also clears the assignment highlgihters. 
	*/
    public clearSelection(): void {
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
	* @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
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

	/** @description Saves the current settings of the element to LocalStorage. Requires an id to be set to the element. 
	* @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
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

	/** @description Inserts a new task in the timeline. 
	* @param {string | number} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
	* @param {any} taskObject. An object describing a Gantt Chart task.
	*/
    public insertTask(index: string | number, taskObject: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertTask(index, taskObject);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertTask(index, taskObject);
            });
        }
    }

	/** @description Updates a task inside the timeline. 
	* @param {string | number} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
	* @param {any} taskObject. An object describing a Gantt Chart task. The properties of this object will be applied to the desired task.
	*/
    public updateTask(index: string | number, taskObject: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateTask(index, taskObject);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateTask(index, taskObject);
            });
        }
    }

	/** @description Removes a task from the timeline. 
	* @param {string | number} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
	*/
    public removeTask(index: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeTask(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeTask(index);
            });
        }
    }

	/** @description Inserts a new resource. 
	* @param {string | number} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
	* @param {any} resourceObject?. An object describing a Gantt Chart resource.
	*/
    public insertResource(resourceId: string | number, resourceObject?: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertResource(resourceId, resourceObject);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertResource(resourceId, resourceObject);
            });
        }
    }

	/** @description Updates an existing resource. 
	* @param {any} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
	* @param {any} taskObject. An object describing a Gantt Chart resource. The properties of this object will be applied to the target resource.
	*/
    public updateResource(resourceId: any, taskObject: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateResource(resourceId, taskObject);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateResource(resourceId, taskObject);
            });
        }
    }

	/** @description Removes a resource. 
	* @param {any} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
	*/
    public removeResource(resourceId: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeResource(resourceId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeResource(resourceId);
            });
        }
    }

	/** @description Opens the popup Window for specific task Editing. 
	* @param {string | number} index. A string or number that represents the index of a task that is going to be edited.
	*/
    public openWindow(index: string | number): void {
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

	/** @description Closes an opened popup Window. The method will close any opened popup window inside the element. 
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

	/** @description Prepares the GanttChart for printing by opening the browser's Print Preview. 
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
		that.eventHandlers['changeHandler'] = (event: CustomEvent) => { that.onChange.emit(event); }
		that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);

		that.eventHandlers['progressChangeStartHandler'] = (event: CustomEvent) => { that.onProgressChangeStart.emit(event); }
		that.nativeElement.addEventListener('progressChangeStart', that.eventHandlers['progressChangeStartHandler']);

		that.eventHandlers['progressChangeEndHandler'] = (event: CustomEvent) => { that.onProgressChangeEnd.emit(event); }
		that.nativeElement.addEventListener('progressChangeEnd', that.eventHandlers['progressChangeEndHandler']);

		that.eventHandlers['dragStartHandler'] = (event: CustomEvent) => { that.onDragStart.emit(event); }
		that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);

		that.eventHandlers['dragEndHandler'] = (event: CustomEvent) => { that.onDragEnd.emit(event); }
		that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);

		that.eventHandlers['resizeStartHandler'] = (event: CustomEvent) => { that.onResizeStart.emit(event); }
		that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);

		that.eventHandlers['resizeEndHandler'] = (event: CustomEvent) => { that.onResizeEnd.emit(event); }
		that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);

		that.eventHandlers['connectionStartHandler'] = (event: CustomEvent) => { that.onConnectionStart.emit(event); }
		that.nativeElement.addEventListener('connectionStart', that.eventHandlers['connectionStartHandler']);

		that.eventHandlers['connectionEndHandler'] = (event: CustomEvent) => { that.onConnectionEnd.emit(event); }
		that.nativeElement.addEventListener('connectionEnd', that.eventHandlers['connectionEndHandler']);

		that.eventHandlers['scrollBottomReachedHandler'] = (event: CustomEvent) => { that.onScrollBottomReached.emit(event); }
		that.nativeElement.addEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);

		that.eventHandlers['scrollTopReachedHandler'] = (event: CustomEvent) => { that.onScrollTopReached.emit(event); }
		that.nativeElement.addEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);

		that.eventHandlers['openingHandler'] = (event: CustomEvent) => { that.onOpening.emit(event); }
		that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);

		that.eventHandlers['openHandler'] = (event: CustomEvent) => { that.onOpen.emit(event); }
		that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);

		that.eventHandlers['closingHandler'] = (event: CustomEvent) => { that.onClosing.emit(event); }
		that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);

		that.eventHandlers['closeHandler'] = (event: CustomEvent) => { that.onClose.emit(event); }
		that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['changeHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
		}

		if (that.eventHandlers['progressChangeStartHandler']) {
			that.nativeElement.removeEventListener('progressChangeStart', that.eventHandlers['progressChangeStartHandler']);
		}

		if (that.eventHandlers['progressChangeEndHandler']) {
			that.nativeElement.removeEventListener('progressChangeEnd', that.eventHandlers['progressChangeEndHandler']);
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

		if (that.eventHandlers['connectionStartHandler']) {
			that.nativeElement.removeEventListener('connectionStart', that.eventHandlers['connectionStartHandler']);
		}

		if (that.eventHandlers['connectionEndHandler']) {
			that.nativeElement.removeEventListener('connectionEnd', that.eventHandlers['connectionEndHandler']);
		}

		if (that.eventHandlers['scrollBottomReachedHandler']) {
			that.nativeElement.removeEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
		}

		if (that.eventHandlers['scrollTopReachedHandler']) {
			that.nativeElement.removeEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
		}

		if (that.eventHandlers['openingHandler']) {
			that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
		}

		if (that.eventHandlers['openHandler']) {
			that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
		}

		if (that.eventHandlers['closingHandler']) {
			that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
		}

		if (that.eventHandlers['closeHandler']) {
			that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
		}

	}
}
