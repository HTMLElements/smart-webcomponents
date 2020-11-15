import React from "react";
/**
 Gantt charts are specialized bar charts that help clearly represent how tasks and resources are allocated over time in planning, project management, and scheduling applications.
*/
export class GanttChart extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'GanttChart' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Recalculates the tasks that are connected and re-schedules them according to their connections. If no connections are present, autoScheduling has no effect until a connection is created. Connection types determines the start/end date limits of the tasks.
	*	Property type: boolean
	*/
	get autoSchedule() {
		return this.nativeElement ? this.nativeElement.autoSchedule : undefined;
	}
	set autoSchedule(value) {
		if (this.nativeElement) {
			this.nativeElement.autoSchedule = value;
		}
	}

	/** Affects the tasks only when autoSchedule is enabled. When set to true, the tasks are strictly scheduled ( according to their connections ) and dragging is not allowed.  Users can set lag to specific connections to determine a delay of overlap of between the two tasks ( interval of time in miliseconds ). Lag one of the attributes of a task connection and should be set in the dataSource where the task connections are defined.
	*	Property type: boolean
	*/
	get autoScheduleStrictMode() {
		return this.nativeElement ? this.nativeElement.autoScheduleStrictMode : undefined;
	}
	set autoScheduleStrictMode(value) {
		if (this.nativeElement) {
			this.nativeElement.autoScheduleStrictMode = value;
		}
	}

	/** Determines the scroll speed when dragging when autoScroll property is set. 
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

	/** Sets the GanttChart's Data Export options.
	*	Property type: GanttChartDataExport
	*/
	get dataExport() {
		return this.nativeElement ? this.nativeElement.dataExport : undefined;
	}
	set dataExport(value) {
		if (this.nativeElement) {
			this.nativeElement.dataExport = value;
		}
	}

	/** Determines the tasks that will be loaded inside the Timeline. Each item represents an object that should contain the following properties: label - the label of the TaskdateStart - the starting date of the Task. Should be a string representing a valid date.dateEnd - the ending date of the Task. Should be a string representing a valid date.type - determines the type of the task. Whether it's a simple task, a project or a milestone. Each type of task has specific behavior and additional attributes..  Additional properties: connections - an array of objects representing the connection between two tasks. Each connection (object) should have the following properties : target - a number representing the index of the target tasktype - a number representing the type of the connection. Four types of connections are available: 0 - is a connection of type Start-to-Start 1 - is a connection of type End-to-Start 2 - is a connection of type End-to-End3 - is a connection of type Start-to-End lag - a number that determines the delay between two connected auto scheduled tasks. Lag property can be a positive or a negative number. When negative it determines the overlap between two connected tasks. This property is used in conjuction with autoSchedule.duration - determines the duration of a Task in days, hours, minutes, seconds or miliseconds. Very usefull when the the dateEnd of a Task is unknown.minDuration - sets the minimum duration of a task. maxDuration - sets the maximum duration of a task.minDateStart - determines the mininum date that a task can start from. Must be if type string and should represent a valid date.maxDateStart - determines the maximum date that a task can start from. Must be if type string and should represent a valid date.minDateEnd - determines the mininum date that a task can end. Must be if type string and should represent a valid date.maxDateEnd - determines the maximum date that a task can end. Must be if type string and should represent a valid date.progress - a number that determines the progress of a task ( from 0 to 100 ).disableDrag - a boolean property that disables the dragging of a task when set to true.disableResize - a boolean property that disables the resizing of a task when set to true.dragProject - a boolean that determines whether or not the whole project (along with the tasks) can be dragged while dragging the project task. Applicalbe only to Projects.synchronized - a boolean that if set the project task's start/end dates are automatically calculated based on the tasks. By default a synchronized project task can't be dragged alone. Applicable only to Project tasks.expanded - a boolean that determines if a project is expanded or not. If not all of it's sub-tasks are not visible. Only the project task itself is visible. By default no projects are expanded. Applicable only to project tasks..
	*	Property type: GanttChartDataSource[]
	*/
	get dataSource() {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value) {
		if (this.nativeElement) {
			this.nativeElement.dataSource = value;
		}
	}

	/** Determines the format of the dates in the timeline header when they represent days.
	*	Property type: GanttDayFormat
	*/
	get dayFormat() {
		return this.nativeElement ? this.nativeElement.dayFormat : undefined;
	}
	set dayFormat(value) {
		if (this.nativeElement) {
			this.nativeElement.dayFormat = value;
		}
	}

	/** Determines a specific end date for the Timeline. Usefull when the user wants custom ending date for the Timeline. If no date is set the end date of the timeline is automatically determined from the tasks.
	*	Property type: string | Date
	*/
	get dateEnd() {
		return this.nativeElement ? this.nativeElement.dateEnd : undefined;
	}
	set dateEnd(value) {
		if (this.nativeElement) {
			this.nativeElement.dateEnd = value;
		}
	}

	/** Determines a specific starting date for the Timeline. Usefull when the user wants custom starting date for the Timeline. If no date is set the start date of the timeline is automatically determined from the tasks.
	*	Property type: string | Date
	*/
	get dateStart() {
		return this.nativeElement ? this.nativeElement.dateStart : undefined;
	}
	set dateStart(value) {
		if (this.nativeElement) {
			this.nativeElement.dateStart = value;
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

	/** Disables auto scrolling while dragging/resizing a task bar inside the Timeline.
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

	/** Disables dragging of tasks in the Timeline.
	*	Property type: boolean
	*/
	get disableTaskDrag() {
		return this.nativeElement ? this.nativeElement.disableTaskDrag : undefined;
	}
	set disableTaskDrag(value) {
		if (this.nativeElement) {
			this.nativeElement.disableTaskDrag = value;
		}
	}

	/** Disables task progress changing in the Timeline.
	*	Property type: boolean
	*/
	get disableTaskProgressChange() {
		return this.nativeElement ? this.nativeElement.disableTaskProgressChange : undefined;
	}
	set disableTaskProgressChange(value) {
		if (this.nativeElement) {
			this.nativeElement.disableTaskProgressChange = value;
		}
	}

	/** Disables resizing of tasks in the Timeline.
	*	Property type: boolean
	*/
	get disableTaskResize() {
		return this.nativeElement ? this.nativeElement.disableTaskResize : undefined;
	}
	set disableTaskResize(value) {
		if (this.nativeElement) {
			this.nativeElement.disableTaskResize = value;
		}
	}

	/** Disables the selection inside the GanttChart.
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

	/** Disables the window editor for the GanttChart.
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

	/** Determines in what unit is task duration property measured.
	*	Property type: Duration
	*/
	get durationUnit() {
		return this.nativeElement ? this.nativeElement.durationUnit : undefined;
	}
	set durationUnit(value) {
		if (this.nativeElement) {
			this.nativeElement.durationUnit = value;
		}
	}

	/** Allows to create a custom header content for the Task Panel. The attribute accepts an HTMLTemplate element, it's id or a function.
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

	/** By default the Timeline has a two level header - timeline details and timeline header. This property hides the header details container( the top container ).
	*	Property type: boolean
	*/
	get hideTimelineHeaderDetails() {
		return this.nativeElement ? this.nativeElement.hideTimelineHeaderDetails : undefined;
	}
	set hideTimelineHeaderDetails(value) {
		if (this.nativeElement) {
			this.nativeElement.hideTimelineHeaderDetails = value;
		}
	}

	/** Hides the Resource panel regardless of the resources availability By default the Resource panel is visible if resources are added to the GanttChart. This property allows to hide the Resource panel permanently.
	*	Property type: boolean
	*/
	get hideResourcePanel() {
		return this.nativeElement ? this.nativeElement.hideResourcePanel : undefined;
	}
	set hideResourcePanel(value) {
		if (this.nativeElement) {
			this.nativeElement.hideResourcePanel = value;
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

	/** Determines the format of the dates inside the timeline header when they represent hours.
	*	Property type: HourFormat
	*/
	get hourFormat() {
		return this.nativeElement ? this.nativeElement.hourFormat : undefined;
	}
	set hourFormat(value) {
		if (this.nativeElement) {
			this.nativeElement.hourFormat = value;
		}
	}

	/** When set the Timeline is positioned on the left side while the Task Tree is positioned on the right. By default it's vice versa.
	*	Property type: boolean
	*/
	get inverted() {
		return this.nativeElement ? this.nativeElement.inverted : undefined;
	}
	set inverted(value) {
		if (this.nativeElement) {
			this.nativeElement.inverted = value;
		}
	}

	/**  Determines the language of the GanttChart. 
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

	/** Detetmines the maximum possible date of the Timeline.
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

	/** Detetmines the minimum possible date of the Timeline.
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

	/** Determines the format of the dates the timeline header when they represent months.
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

	/** Determines the nonworking days of the week from 0 to 6, where 0 is the first day of the week and 6 is the last day. Nonworking days will be displayed with colored cells inside the timeline and will be ignored during task range calculations.
	*	Property type: number[]
	*/
	get nonworkingDays() {
		return this.nativeElement ? this.nativeElement.nonworkingDays : undefined;
	}
	set nonworkingDays(value) {
		if (this.nativeElement) {
			this.nativeElement.nonworkingDays = value;
		}
	}

	/** Determines the nonworking hours of a day. Hours are represented as numbers inside an array. In the timline the cells that represent nonworking days are colored differently from the rest.
	*	Property type: number[]
	*/
	get nonworkingHours() {
		return this.nativeElement ? this.nativeElement.nonworkingHours : undefined;
	}
	set nonworkingHours(value) {
		if (this.nativeElement) {
			this.nativeElement.nonworkingHours = value;
		}
	}

	/** A function that can be used to completly customize the popup Window that is used to interact width tasks by changing their properties. The function as three arguments: target - the target popup Window that is about to be opened.type - the type of the window. The type determines the purpose of the window. Three possible values: 'task' (task editing), 'confirm' ( confirmation window), 'connection' (used when deleting a connection between tasks). taskIndex - the index of the task that is being edited. It will be undefined if the type of the window is not 'task'.
	*	Property type: any
	*/
	get popupWindowCustomizationFunction() {
		return this.nativeElement ? this.nativeElement.popupWindowCustomizationFunction : undefined;
	}
	set popupWindowCustomizationFunction(value) {
		if (this.nativeElement) {
			this.nativeElement.popupWindowCustomizationFunction = value;
		}
	}

	/** A format function for the Timeline task progress label. The expected result from the function is a string. The label is hidden by default can be shown with the showProgressLabel property.
	*	Property type: any
	*/
	get progressLabelFormatFunction() {
		return this.nativeElement ? this.nativeElement.progressLabelFormatFunction : undefined;
	}
	set progressLabelFormatFunction(value) {
		if (this.nativeElement) {
			this.nativeElement.progressLabelFormatFunction = value;
		}
	}

	/** A getter that returns a flat structure as an array of all resources inside the element.
	*	Property type: GanttChartResource[]
	*/
	get resources() {
		return this.nativeElement ? this.nativeElement.resources : undefined;
	}
	set resources(value) {
		if (this.nativeElement) {
			this.nativeElement.resources = value;
		}
	}

	/** Deteremines the columns that will be visible in the Resource Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. By default, one column with all resource labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts two arguments - the actual label as string that is going to be inserted and the index of the resource. The function must return a string as the new content. min - controls the min size of the column max - controls the max size of the columnsize - controls the actual size of the column
	*	Property type: GanttChartResourceColumn[]
	*/
	get resourceColumns() {
		return this.nativeElement ? this.nativeElement.resourceColumns : undefined;
	}
	set resourceColumns(value) {
		if (this.nativeElement) {
			this.nativeElement.resourceColumns = value;
		}
	}

	/** Allows to create a custom header content for the Resource Panel. The attribute accepts an HTMLTemplate element, it's id or a function.
	*	Property type: any
	*/
	get resourcePanelHeaderTemplate() {
		return this.nativeElement ? this.nativeElement.resourcePanelHeaderTemplate : undefined;
	}
	set resourcePanelHeaderTemplate(value) {
		if (this.nativeElement) {
			this.nativeElement.resourcePanelHeaderTemplate = value;
		}
	}

	/** Determines the min size of the Resource Panel.
	*	Property type: number | string
	*/
	get resourcePanelMin() {
		return this.nativeElement ? this.nativeElement.resourcePanelMin : undefined;
	}
	set resourcePanelMin(value) {
		if (this.nativeElement) {
			this.nativeElement.resourcePanelMin = value;
		}
	}

	/** Determines the size of the Resource Panel.
	*	Property type: number | string
	*/
	get resourcePanelSize() {
		return this.nativeElement ? this.nativeElement.resourcePanelSize : undefined;
	}
	set resourcePanelSize(value) {
		if (this.nativeElement) {
			this.nativeElement.resourcePanelSize = value;
		}
	}

	/** Determines the refresh rate of the Resource Panel when dragging/resizing/progress changing a Task from the Timeline. This property allows to customize the interval between resource Tree/Timeline refreshes. By default they refresh immediately after a change.
	*	Property type: number
	*/
	get resourcePanelRefreshRate() {
		return this.nativeElement ? this.nativeElement.resourcePanelRefreshRate : undefined;
	}
	set resourcePanelRefreshRate(value) {
		if (this.nativeElement) {
			this.nativeElement.resourcePanelRefreshRate = value;
		}
	}

	/** A callback that can be used to customize the content of the resource Timeline cells. The callback accepts three arguments: taskIndexes - an array of task indexes that are assigned to the resource for the current cell.resourceIndex - the index of the resource.cellDate - the date of the current cell. This property is used when resourceTimelineView is set to custom. Depending on the resourceTimelineMode, it should return: string - when the resourceTimelineMode is set to 'diagram'.object - when the resourceTimelineMode is set to 'histogram'. The object should have two attributes: capacity and maxCapacity, in order to be visualized as a histogram.. Another usage of this callback is to customize the timeline resource representation completely if resourceTimelineMode is set to custom.
	*	Property type: any
	*/
	get resourceTimelineFormatFunction() {
		return this.nativeElement ? this.nativeElement.resourceTimelineFormatFunction : undefined;
	}
	set resourceTimelineFormatFunction(value) {
		if (this.nativeElement) {
			this.nativeElement.resourceTimelineFormatFunction = value;
		}
	}

	/** Determines how the capacity of the resources will be visualized inside the resource timeline. By default, the capacity is measured in hours depending on the view property of the element.
	*	Property type: GanttChartResourceTimelineMode
	*/
	get resourceTimelineMode() {
		return this.nativeElement ? this.nativeElement.resourceTimelineMode : undefined;
	}
	set resourceTimelineMode(value) {
		if (this.nativeElement) {
			this.nativeElement.resourceTimelineMode = value;
		}
	}

	/** Determines how the resources will be displayed inside the resource Timeline.
	*	Property type: GanttChartResourceTimelineView
	*/
	get resourceTimelineView() {
		return this.nativeElement ? this.nativeElement.resourceTimelineView : undefined;
	}
	set resourceTimelineView(value) {
		if (this.nativeElement) {
			this.nativeElement.resourceTimelineView = value;
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

	/** Determines the selected task(s). If empty no tasks are selected.
	*	Property type: number[]
	*/
	get selectedIndexes() {
		return this.nativeElement ? this.nativeElement.selectedIndexes : undefined;
	}
	set selectedIndexes(value) {
		if (this.nativeElement) {
			this.nativeElement.selectedIndexes = value;
		}
	}

	/** Shows the progress label inside the progress bars of the Timeline tasks.
	*	Property type: boolean
	*/
	get showProgressLabel() {
		return this.nativeElement ? this.nativeElement.showProgressLabel : undefined;
	}
	set showProgressLabel(value) {
		if (this.nativeElement) {
			this.nativeElement.showProgressLabel = value;
		}
	}

	/** If set the dateStart/dateEnd of the tasks will be coerced to the nearest timeline cell date ( according to the view ). Affects the dragging operation as well.
	*	Property type: boolean
	*/
	get snapToNearest() {
		return this.nativeElement ? this.nativeElement.snapToNearest : undefined;
	}
	set snapToNearest(value) {
		if (this.nativeElement) {
			this.nativeElement.snapToNearest = value;
		}
	}

	/** Determines whether the GanttChart can be sorted or not.
	*	Property type: boolean
	*/
	get sortable() {
		return this.nativeElement ? this.nativeElement.sortable : undefined;
	}
	set sortable(value) {
		if (this.nativeElement) {
			this.nativeElement.sortable = value;
		}
	}

	/** Determines whether the GanttChart can be sorted by one or more columns.
	*	Property type: GanttChartSortMode
	*/
	get sortMode() {
		return this.nativeElement ? this.nativeElement.sortMode : undefined;
	}
	set sortMode(value) {
		if (this.nativeElement) {
			this.nativeElement.sortMode = value;
		}
	}

	/** A getter that returns a flat structure as an array of all tasks inside the element.
	*	Property type: GanttChartTask[]
	*/
	get tasks() {
		return this.nativeElement ? this.nativeElement.tasks : undefined;
	}
	set tasks(value) {
		if (this.nativeElement) {
			this.nativeElement.tasks = value;
		}
	}

	/** Deteremines the columns that will be visible in the Task Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. It should reference a task attribute from the dataSource. By default, one column with all task labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts one argument - the actual label as string that is going to be inserted and must return some content. min - controls the min size of the column max - controls the max size of the column size - controls the actual size of the columncustomEditor - a callback that can be used to set a custom editor for the column when editing via the window. It accepts two arguments label - the label of the columnvalue - the value of the column. The callback must return the editor.setCustomEditorValue - a callback that is used to set the value of the custom editor.getCustomEditorValue - a callback that is used to get the value of the custom editor.
	*	Property type: GanttChartTaskColumn[]
	*/
	get taskColumns() {
		return this.nativeElement ? this.nativeElement.taskColumns : undefined;
	}
	set taskColumns(value) {
		if (this.nativeElement) {
			this.nativeElement.taskColumns = value;
		}
	}

	/** Determines the min size of the Task Panel. Used when Resource Panel is visible.
	*	Property type: any
	*/
	get taskPanelMin() {
		return this.nativeElement ? this.nativeElement.taskPanelMin : undefined;
	}
	set taskPanelMin(value) {
		if (this.nativeElement) {
			this.nativeElement.taskPanelMin = value;
		}
	}

	/** Determines the size of the Task Panel. Used when Resource Panel is visible.
	*	Property type: any
	*/
	get taskPanelSize() {
		return this.nativeElement ? this.nativeElement.taskPanelSize : undefined;
	}
	set taskPanelSize(value) {
		if (this.nativeElement) {
			this.nativeElement.taskPanelSize = value;
		}
	}

	/** Determines the min width of the timeline.
	*	Property type: any
	*/
	get timelineMin() {
		return this.nativeElement ? this.nativeElement.timelineMin : undefined;
	}
	set timelineMin(value) {
		if (this.nativeElement) {
			this.nativeElement.timelineMin = value;
		}
	}

	/** Determines the min width of the task tree.
	*	Property type: any
	*/
	get treeMin() {
		return this.nativeElement ? this.nativeElement.treeMin : undefined;
	}
	set treeMin(value) {
		if (this.nativeElement) {
			this.nativeElement.treeMin = value;
		}
	}

	/** Determines the size(width) of the task tree.
	*	Property type: any
	*/
	get treeSize() {
		return this.nativeElement ? this.nativeElement.treeSize : undefined;
	}
	set treeSize(value) {
		if (this.nativeElement) {
			this.nativeElement.treeSize = value;
		}
	}

	/** A format function for the Header of the Timeline. The function provides the following arguments: date - a Date object that represets the date for the current cell.type - a string that represents the type of date that the cell is showing, e.g. 'month', 'week', 'day', etc.isHeaderDetails - a boolean that indicates whether the current cell is part of the Header Details Container or not.value - a string that represents the default value for the cell provided by the element.
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

	/** Determines the viewing date range of the timeline. Possible values: day - The timeline show the hours of the day.week - the timeline shows the days of the week.month - the timeline shows the days of the month.year - the timeline shows the months of the year.resource - displays the current tasks by grouping them according to the resources they have assigned. The unassigned tasks will be placed in a separate group called 'Unassigned'.  The timeline has a header section that contains the labels of each cell according to the date inside them. The header is splitted in two sections in order to give a more detailed information of the dates.
	*	Property type: GanttChartView
	*/
	get view() {
		return this.nativeElement ? this.nativeElement.view : undefined;
	}
	set view(value) {
		if (this.nativeElement) {
			this.nativeElement.view = value;
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

	/** Determines the format of the dates inside the timeline header when they represent weeks. 
	*	Property type: WeekFormat
	*/
	get weekFormat() {
		return this.nativeElement ? this.nativeElement.weekFormat : undefined;
	}
	set weekFormat(value) {
		if (this.nativeElement) {
			this.nativeElement.weekFormat = value;
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


	// Gets the properties of the React component.
	get properties() {
		return ["autoSchedule","autoScheduleStrictMode","autoScrollStep","dataExport","dataSource","dayFormat","dateEnd","dateStart","disabled","disableAutoScroll","disableTaskDrag","disableTaskProgressChange","disableTaskResize","disableSelection","disableWindowEditor","durationUnit","headerTemplate","hideTimelineHeaderDetails","hideResourcePanel","horizontalScrollBarVisibility","hourFormat","inverted","locale","max","min","messages","monthFormat","nonworkingDays","nonworkingHours","popupWindowCustomizationFunction","progressLabelFormatFunction","resources","resourceColumns","resourcePanelHeaderTemplate","resourcePanelMin","resourcePanelSize","resourcePanelRefreshRate","resourceTimelineFormatFunction","resourceTimelineMode","resourceTimelineView","rightToLeft","selectedIndexes","showProgressLabel","snapToNearest","sortable","sortMode","tasks","taskColumns","taskPanelMin","taskPanelSize","timelineMin","treeMin","treeSize","timelineHeaderFormatFunction","verticalScrollBarVisibility","view","yearFormat","weekFormat","theme","unfocusable"];
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
	/**  This event is triggered when a Task is selected/unselected.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue)
	*   value - The index of the new selected task.
	*   oldValue - The index of the previously selected task.
	*/
	_onChange = null;	get onChange() {
		return this._onChange;
	}
	set onChange(value) {
		this._onChange = value;
	}
	/**  This event is triggered when a task, resource or connection is clicked inside the Timeline or the Tree columns.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type, 	originalEvent)
	*   item - The item that was clicked. It cam be a task, resource or connection.
	*   type - The type of item. Possible values are: 'task', 'resource', 'connection'.
	*   originalEvent - The original DOM event.
	*/
	_onItemClick = null;	get onItemClick() {
		return this._onItemClick;
	}
	set onItemClick(value) {
		this._onItemClick = value;
	}
	/**  This event is triggered when a Task/Resource/Connection is inserted.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	item)
	*   type - The type of item that has been modified.
	*   item - An object that represents the actual item with it's attributes.
	*/
	_onItemInsert = null;	get onItemInsert() {
		return this._onItemInsert;
	}
	set onItemInsert(value) {
		this._onItemInsert = value;
	}
	/**  This event is triggered when a Task/Resource/Connection is removed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	item)
	*   type - The type of item that has been modified.
	*   item - An object that represents the actual item with it's attributes.
	*/
	_onItemRemove = null;	get onItemRemove() {
		return this._onItemRemove;
	}
	set onItemRemove(value) {
		this._onItemRemove = value;
	}
	/**  This event is triggered when a Task/Resource/Connection is updated.
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
	/**  This event is triggered when the progress of a task bar starts to change as a result of user interaction. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	progress)
	*   index - The index of the task which progress is going to be changed.
	*   progress - The progress of the task before it is changed.
	*/
	_onProgressChangeStart = null;	get onProgressChangeStart() {
		return this._onProgressChangeStart;
	}
	set onProgressChangeStart(value) {
		this._onProgressChangeStart = value;
	}
	/**  This event is triggered when the progress of a task is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	progress)
	*   index - The index of the task which progress is has been changed.
	*   progress - The progress of the task after it was changed.
	*/
	_onProgressChangeEnd = null;	get onProgressChangeEnd() {
		return this._onProgressChangeEnd;
	}
	set onProgressChangeEnd(value) {
		this._onProgressChangeEnd = value;
	}
	/**  This event is triggered when dragging of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
	*   index - The index of the task that is going to be dragged.
	*   dateStart - The start date of the task that is going to be dragged.
	*   dateEnd - The end date of the task that is going to be dragged.
	*/
	_onDragStart = null;	get onDragStart() {
		return this._onDragStart;
	}
	set onDragStart(value) {
		this._onDragStart = value;
	}
	/**  This event is triggered when dragging of a task finishes.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
	*   index - The index of the task that is was dragged.
	*   dateStart - The start date of the task that is was dragged.
	*   dateEnd - The end date of the task that is was dragged.
	*/
	_onDragEnd = null;	get onDragEnd() {
		return this._onDragEnd;
	}
	set onDragEnd(value) {
		this._onDragEnd = value;
	}
	/**  This event is triggered when resizing of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
	*   index - The index of the task that is going to be resized.
	*   dateStart - The start date of the task that is going to be resized.
	*   dateEnd - The end date of the task that is going to be resized.
	*/
	_onResizeStart = null;	get onResizeStart() {
		return this._onResizeStart;
	}
	set onResizeStart(value) {
		this._onResizeStart = value;
	}
	/**  This event is triggered when the resizing of a task finishes.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
	*   index - The index of the task that was resized.
	*   dateStart - The start date of the task that was resized.
	*   dateEnd - The end date of the task that was resized.
	*/
	_onResizeEnd = null;	get onResizeEnd() {
		return this._onResizeEnd;
	}
	set onResizeEnd(value) {
		this._onResizeEnd = value;
	}
	/**  This event is triggered when the user starts connecting one task to another. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	startIndex)
	*   startIndex - The index of the task that a connection is started from.
	*/
	_onConnectionStart = null;	get onConnectionStart() {
		return this._onConnectionStart;
	}
	set onConnectionStart(value) {
		this._onConnectionStart = value;
	}
	/**  This event is triggered when the user completes a connection between two tasks.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	startIndex, 	endIndex, 	type)
	*   startIndex - The index of the task that a connection is started from.
	*   endIndex - The index of the task that a connection is started from.
	*   type - The type of connection. Fours types are available: <ul><li><b>0</b> - start-to-start</li><li><b>1</b> - end-to-start</li><li><b>2</b> - end-to-end</li><li><b>3</b> - start-to-end</li></ul>
	*/
	_onConnectionEnd = null;	get onConnectionEnd() {
		return this._onConnectionEnd;
	}
	set onConnectionEnd(value) {
		this._onConnectionEnd = value;
	}
	/**  This event is triggered when the Timeline has been scrolled to the bottom.
	*  @param event. The custom event. 	*/
	_onScrollBottomReached = null;	get onScrollBottomReached() {
		return this._onScrollBottomReached;
	}
	set onScrollBottomReached(value) {
		this._onScrollBottomReached = value;
	}
	/**  This event is triggered when the Timeline has been scrolled to the top.
	*  @param event. The custom event. 	*/
	_onScrollTopReached = null;	get onScrollTopReached() {
		return this._onScrollTopReached;
	}
	set onScrollTopReached(value) {
		this._onScrollTopReached = value;
	}
	/**  This event is triggered just before the window for task editing starts opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	type)
	*   target - The instance of the window that is going to open.
	*   type - The type of window that is going to open. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>
	*/
	_onOpening = null;	get onOpening() {
		return this._onOpening;
	}
	set onOpening(value) {
		this._onOpening = value;
	}
	/**  This event is triggered when the window for task editing is opened( visible ).
	*  @param event. The custom event. 	*/
	_onOpen = null;	get onOpen() {
		return this._onOpen;
	}
	set onOpen(value) {
		this._onOpen = value;
	}
	/**  This event is triggered just before the window for task editing starts closing. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	type)
	*   target - The instance of the window that is going to close.
	*   type - The type of window that is going to close. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>
	*/
	_onClosing = null;	get onClosing() {
		return this._onClosing;
	}
	set onClosing(value) {
		this._onClosing = value;
	}
	/**  This event is triggered when the window for task editing is closed( hidden )
	*  @param event. The custom event. 	*/
	_onClose = null;	get onClose() {
		return this._onClose;
	}
	set onClose(value) {
		this._onClose = value;
	}
	/**  This event is triggered when a Project is collapsed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	label, 	value)
	*   index - The index of the collapsed project.
	*   label - The label of the collapsed project.
	*   value - The value of the collapsed project.
	*/
	_onCollapse = null;	get onCollapse() {
		return this._onCollapse;
	}
	set onCollapse(value) {
		this._onCollapse = value;
	}
	/**  This event is triggered when a Project is expanded.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value)
	*   item - The index of the expanded project.
	*   label - The label of the expanded project.
	*   value - The value of the expanded project.
	*/
	_onExpand = null;	get onExpand() {
		return this._onExpand;
	}
	set onExpand(value) {
		this._onExpand = value;
	}

	// Gets the events of the React component.
	get events() {
		return ["onBeginUpdate","onEndUpdate","onChange","onItemClick","onItemInsert","onItemRemove","onItemUpdate","onProgressChangeStart","onProgressChangeEnd","onDragStart","onDragEnd","onResizeStart","onResizeEnd","onConnectionStart","onConnectionEnd","onScrollBottomReached","onScrollTopReached","onOpening","onOpen","onClosing","onClose","onCollapse","onExpand"];
	}
	/** Adds a task as the last item of a Project. 
	* @param {string | number} taskIndex. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
	* @param {string | number} projectIndex. A number that represents the index of a project or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
	*/
    addTaskTo(taskIndex, projectIndex){
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

	/** Ends the update operation. This method will resume the rendering and will refresh the GanttChart. 
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

	/** Refereshes the GanttChart after resizing by recalculating the Scrollbars.  
	* @param {boolean} fullRefresh?. If set the GanttChart will be re-rendered completely.
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

	/** Removes all connections between tasks.  
	*/
    removeAllConnections(){
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

	/** Removes a connection between tasks. The function accepts three arguments(task's start index, end index and connection type) or one connection string argument which describes the connection. 
	* @param {number | string} startTaskIndex. The index of the start task or the connection string like '2-3-0.
	* @param {number} taskEndIndex?. The index of the end task.
	* @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3.
	* @returns {any}
  */
	async removeConnection(startTaskIndex, taskEndIndex, connectionType) {
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

	/** Removes all connections of a task or between two tasks if the second argument is provided and valid. 
	* @param {number} taskStartIndex. The index of the start task. 
	* @param {number} taskEndIndex?. The index of the end task.
	* @returns {string}
  */
	async removeTaskConnection(taskStartIndex, taskEndIndex) {
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

	/** Removes all tasks.  
	*/
    clearTasks(){
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

	/** Removes all resources.  
	*/
    clearResources(){
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

	/** Creates a connection between two tasks.  
	* @param {number | string} startTaskIndex. The index of the start task or the connection string like '2-3-0.
	* @param {number} taskEndIndex?. The index of the end task.
	* @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3.
	*/
    createConnection(startTaskIndex, taskEndIndex, connectionType){
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

	/** Collapses an expanded project with tasks. 
	* @param {string | number} index. The index of a project task that should be collapsed.
	*/
    collapse(index){
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

	/** Makes sure a Task is visible by scrolling to it. 
	* @param {string | number} item. The index of the target Task. Can be a string representing a Tree index ( similar to jqxTree )
	*/
    ensureVisible(item){
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

	/** Expands a collapsed project with tasks. 
	* @param {string | number} index. The index of a project task that should be expanded.
	*/
    expand(index){
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

	/** Exports the data of Tree of the GanttChart. 
	* @param {string} dataFormat. Determines the format of the exported file. Three possible values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li></ul>
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

	/** Returns a JSON representation of all tasks inside the element along with their connections and settings. 
	* @returns {any[]}
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

	/** Returns the Tree path of a task/resource. 
	* @param {GanttChartTask | GanttChartResource | number} item. A GattChartTask/GanttChartResource item object or index.
	* @returns {string}
  */
	async getItemPath(item) {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getItemPath(item);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Returns the index of a task. 
	* @param {GanttChartTask} task. A GattChartTask object.
	* @returns {number}
  */
	async getTaskIndex(task) {
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

	/** Returns the tree path of a task. 
	* @param {GanttChartTask} task. A GanttChartTask object.
	* @returns {string}
  */
	async getTaskPath(task) {
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

	/** Returns teh Project of a task if any. 
	* @param {GanttChartTask} task. A GantChartTask object.
	* @returns {GanttChartTask | undefined}
  */
	async getTaskProject(task) {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getTaskProject(task);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Returns the index of a resource. 
	* @param {any} resource. A GanttChartResource object.
	* @returns {number}
  */
	async getResourceIndex(resource) {
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

	/** Returns the tasks that are assigned to the resource. 
	* @param {any} resource. A GanttChartResource object.
	* @returns {any}
  */
	async getResourceTasks(resource) {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getResourceTasks(resource);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Unselects all currently selected items inside the GanttChart including Tasks and Resources. It also clears the assignment highlgihters. 
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
	* @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
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

	/** Saves the current settings of the element to LocalStorage. Requires an id to be set to the element. 
	* @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
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

	/** Inserts a new task in the timeline. 
	* @param {string | number} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
	* @param {any} taskObject. An object describing a Gantt Chart task.
	*/
    insertTask(index, taskObject){
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

	/** Updates a task inside the timeline. 
	* @param {any} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
	* @param {any} taskObject. An object describing a Gantt Chart task. The properties of this object will be applied to the desired task.
	*/
    updateTask(index, taskObject){
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

	/** Removes a task from the timeline. 
	* @param {any} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
	*/
    removeTask(index){
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

	/** Inserts a new resource. 
	* @param {string | number} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
	* @param {any} resourceObject?. An object describing a Gantt Chart resource.
	*/
    insertResource(resourceId, resourceObject){
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

	/** Updates an existing resource. 
	* @param {any} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
	* @param {any} taskObject. An object describing a Gantt Chart resource. The properties of this object will be applied to the target resource.
	*/
    updateResource(resourceId, taskObject){
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

	/** Removes a resource. 
	* @param {any} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
	*/
    removeResource(resourceId){
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

	/** Opens the popup Window for specific task Editing. 
	* @param {string | number} index. A string or number that represents the index of a task that is going to be edited.
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

	/** Closes an opened popup Window. The method will close any opened popup window inside the element. 
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

	/** Prepares the GanttChart for printing by opening the browser's Print Preview. 
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

	/** Sorts the GanttChart tasks/resources if sortable is enabled. 
	* @param {any} columns?. An Array of objects which determine which columns to be sorted, the sort order and the type of item to sort: task or resource. If no arguments are provided sorting will be removed. <br /> An object should have the following properties: <ul><li><b>value</b> - a string that represents the value of a <b>taskColumn</b> to sort.</li><li><b>sortOrder</b> - a string that represents the sorting order for the column: 'asc' (asscending sorting) or 'desc' (descending) are possible values. </li><li><b>type</b> - a string that represents the type of item to sort. This property determines which panel will be sorted. Two possible values: 'task', 'resource'.</li></ul>
	*/
    sort(columns){
        if (this.nativeElement.isRendered) {
            this.nativeElement.sort(columns);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.sort(columns);
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
		
		for(let i = 0; i < that.events.length; i++){
			const eventName = that.events[i];

			that.nativeElement.removeEventListener(eventName.substring(2).toLowerCase(), that[eventName]);
		}
	}

	render() {
		return (
			React.createElement("smart-gantt-chart", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default GanttChart;
