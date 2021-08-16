import  {BaseElement, Animation} from "./smart.element"

export interface GanttChartProperties {
  /**
   * Determines whether nonworkingDays/nonworkingHours are taken into considuration when determining the dateEnd of the tasks. When this property is enabled the dateEnd of the tasks is calculated to include only the actual working time. By default it's disabled and only calendar time is used.
   * Default value: false
   */
  adjustToNonworkingTime?: boolean;
  /**
   * Recalculates the tasks that are connected and re-schedules them according to their connections. If no connections are present, autoScheduling has no effect until a connection is created. Connection types determines the start/end date limits of the tasks.
   * Default value: false
   */
  autoSchedule?: boolean;
  /**
   * Affects the tasks only when autoSchedule is enabled. When set to true, the tasks are strictly scheduled ( according to their connections ) and dragging is not allowed.  Users can set lag to specific connections to determine a delay of overlap of between the two tasks ( interval of time in miliseconds ). Lag one of the attributes of a task connection and should be set in the dataSource where the task connections are defined.
   * Default value: false
   */
  autoScheduleStrictMode?: boolean;
  /**
   * Determines the scroll speed when dragging when autoScroll property is set. 
   * Default value: 5
   */
  autoScrollStep?: number;
  /**
   * Determines whether the Table columns are resizable or not. When enabled it is possible to resize the columns from the header cells of the Table in both Task and Resource timelines.
   * Default value: false
   */
  columnResize?: boolean;
  /**
   * Determines resize feedback is used during column resizing. This property is applicable only when columnResize is enabled.
   * Default value: false
   */
  columnResizeFeedback?: boolean;
  /**
   * Sets the GanttChart's Data Export options.
   * Default value: [object Object]
   */
  dataExport?: GanttChartDataExport;
  /**
   * Determines the tasks that will be loaded inside the Timeline. Each item represents an object that should contain the following properties: label - the label of the TaskdateStart - the starting date of the Task. Should be a string representing a valid date.dateEnd - the ending date of the Task. Should be a string representing a valid date.type - determines the type of the task. Whether it's a simple task, a project or a milestone. Each type of task has specific behavior and additional attributes..  Additional properties: connections - an array of objects representing the connection between two tasks. Each connection (object) should have the following properties : target - a number representing the index of the target tasktype - a number representing the type of the connection. Four types of connections are available: 0 - is a connection of type Start-to-Start 1 - is a connection of type End-to-Start 2 - is a connection of type End-to-End3 - is a connection of type Start-to-End lag - a number that determines the delay between two connected auto scheduled tasks. Lag property can be a positive or a negative number. When negative it determines the overlap between two connected tasks. This property is used in conjuction with autoSchedule.duration - determines the duration of a Task in days, hours, minutes, seconds or miliseconds. Very usefull when the the dateEnd of a Task is unknown. The duration always shows the calendar time whether it is in days/hours or other.minDuration - sets the minimum duration of a task. maxDuration - sets the maximum duration of a task.minDateStart - determines the mininum date that a task can start from. Must be if type string and should represent a valid date.maxDateStart - determines the maximum date that a task can start from. Must be if type string and should represent a valid date.minDateEnd - determines the mininum date that a task can end. Must be if type string and should represent a valid date.maxDateEnd - determines the maximum date that a task can end. Must be if type string and should represent a valid date.progress - a number that determines the progress of a task ( from 0 to 100 ).disableDrag - a boolean property that disables the dragging of a task when set to true.disableResize - a boolean property that disables the resizing of a task when set to true.dragProject - a boolean that determines whether or not the whole project (along with the tasks) can be dragged while dragging the project task. Applicalbe only to Projects.synchronized - a boolean that if set the project task's start/end dates are automatically calculated based on the tasks. By default a synchronized project task can't be dragged alone. Applicable only to Project tasks.expanded - a boolean that determines if a project is expanded or not. If not all of it's sub-tasks are not visible. Only the project task itself is visible. By default no projects are expanded. Applicable only to project tasks..  GanttChart also accepts a DataAdapter instance as dataSource. You can read more about the dataAdapter here - https://www.htmlelements.com/docs/data-adapter/.
   * Default value: 
   */
  dataSource?: any;
  /**
   * Determines the format of the dates in the timeline header when they represent days.
   * Default value: short
   */
  dayFormat?: GanttDayFormat;
  /**
   * Determines a specific end date for the Timeline. Usefull when the user wants custom ending date for the Timeline. If no date is set the end date of the timeline is automatically determined from the tasks.
   * Default value: 
   */
  dateEnd?: string | Date;
  /**
   * Determines a specific starting date for the Timeline. Usefull when the user wants custom starting date for the Timeline. If no date is set the start date of the timeline is automatically determined from the tasks.
   * Default value: 
   */
  dateStart?: string | Date;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Disables auto scrolling while dragging/resizing a task bar inside the Timeline.
   * Default value: false
   */
  disableAutoScroll?: boolean;
  /**
   * Disables dragging of tasks in the Timeline.
   * Default value: false
   */
  disableTaskDrag?: boolean;
  /**
   * Disables task progress changing in the Timeline.
   * Default value: false
   */
  disableTaskProgressChange?: boolean;
  /**
   * Disables resizing of tasks in the Timeline.
   * Default value: false
   */
  disableTaskResize?: boolean;
  /**
   * Disables the selection inside the GanttChart.
   * Default value: false
   */
  disableSelection?: boolean;
  /**
   * Disables the window editor for the GanttChart.
   * Default value: false
   */
  disableWindowEditor?: boolean;
  /**
   * Determines in what unit is task duration property measured.
   * Default value: milisecond
   */
  durationUnit?: Duration;
  /**
   * Determines whether a dedicated filter row is used for Table filtering instead of the default filter input. This property has no effect if filtering is not enabled.
   * Default value: false
   */
  filterRow?: boolean;
  /**
   * Groups the tasks inside the Task timeline according to the resources they are assigned to. Unassigned tasks are placed in a default group labeled 'Unassigned'.
   * Default value: false
   */
  groupByResources?: boolean;
  /**
   * Allows to create a custom header content for the Task Panel. The attribute accepts an HTMLTemplate element, it's id or a function.
   * Default value: null
   */
  headerTemplate?: any;
  /**
   * By default the Timeline has a two level header - timeline details and timeline header. This property hides the header details container( the top container ).
   * Default value: false
   */
  hideTimelineHeaderDetails?: boolean;
  /**
   * Hides the Resource panel regardless of the resources availability By default the Resource panel is visible if resources are added to the GanttChart. This property allows to hide the Resource panel permanently.
   * Default value: false
   */
  hideResourcePanel?: boolean;
  /**
   * Determines weather or not horizontal scrollbar is shown.
   * Default value: auto
   */
  horizontalScrollBarVisibility?: HorizontalScrollBarVisibility;
  /**
   * Determines the format of the dates inside the timeline header when they represent hours.
   * Default value: numeric
   */
  hourFormat?: HourFormat;
  /**
   * When enabled, scrolling to the end of the horizotal timeline, triggers the creation of additional to extend the time range. The number of cells to be added when the scrollbar reaches the end position is determined by the infiniteTimelineStep.
   * Default value: false
   */
  infiniteTimeline?: boolean;
  /**
   * Determines the number of cells to be added when the horizontal scroll bar of the Timeline reaches it's end position when infiniteTimeline is enabled.
   * Default value: 5
   */
  infiniteTimelineStep?: number;
  /**
   * When set the Timeline is positioned on the left side while the Task Tree is positioned on the right. By default it's vice versa.
   * Default value: false
   */
  inverted?: boolean;
  /**
   * Determines whether keyboard navigation inside the Table is enabled or not. Keyboard navigation affects both Task and Resource Tables. It allows to navigate between items. the following keyboard shortcut keys are available for focused tasks inside the Task Table: Enter - opens the Window editor to edit the currently focused task.Delete - opens a confirmation window regarding the deletion of the currently focused task.
   * Default value: false
   */
  keyboardNavigation?: boolean;
  /**
   *  Determines the language of the GanttChart. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Detetmines the maximum possible date of the Timeline.
   * Default value: 2100-1-1
   */
  max?: string | Date;
  /**
   * Detetmines the minimum possible date of the Timeline.
   * Default value: 1900-1-1
   */
  min?: string | Date;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the format of the dates the timeline header when they represent months.
   * Default value: short
   */
  monthFormat?: MonthFormat;
  /**
   * Determines the nonworking days of the week from 0 to 6, where 0 is the first day of the week and 6 is the last day. Nonworking days will be displayed with colored cells inside the timeline and will not affect the dateEnd of the tasks unless the adjustToNonworkingTime property is enabled.
   * Default value: 
   */
  nonworkingDays?: number[];
  /**
   * Determines the nonworking hours of a day. Hours are represented as numbers inside an array (e.g. [1,2,3] - means 1,2 and 3 AM) or number ranges represented as nested arrays(e.g. [[0,6]] - means from 0 to 6 AM). In the timline the cells that represent nonworking days are colored differently from the rest and will not affect the dateEnd of the tasks unless the adjustToNonworkingTime property is enabled.
   * Default value: 
   */
  nonworkingHours?: number[] | number[][];
  /**
   * A function that can be used to completly customize the popup Window that is used to interact width tasks by changing their properties. The function as three arguments: target - the target popup Window that is about to be opened.type - the type of the window. The type determines the purpose of the window. Three possible values: 'task' (task editing), 'confirm' ( confirmation window), 'connection' (used when deleting a connection between tasks). taskIndex - the index of the task that is being edited. It will be undefined if the type of the window is not 'task'.
   * Default value: null
   */
  popupWindowCustomizationFunction?: any;
  /**
   * A format function for the Timeline task progress label. The expected result from the function is a string. The label is hidden by default can be shown with the showProgressLabel property.
   * Default value: null
   */
  progressLabelFormatFunction?: any;
  /**
   * A getter that returns a flat structure as an array of all resources inside the element.
   * Default value: null
   */
  resources?: GanttChartResource[];
  /**
   * Deteremines the columns that will be visible in the Resource Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. By default, one column with all resource labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts two arguments - the actual label as string that is going to be inserted and the index of the resource. The function must return a string as the new content. min - controls the min size of the column max - controls the max size of the columnsize - controls the actual size of the column
   * Default value: { "label": "resourceColumnLabel", "value": "label" }
   */
  resourceColumns?: GanttChartResourceColumn[];
  /**
   * Determines whether the Resource Table is filterable or not.
   * Default value: false
   */
  resourceFiltering?: boolean;
  /**
   * A format function that allows to re-format the group row labels when groupByResources is enabled.
   * Default value: null
   */
  resourceGroupFormatFunction?: any;
  /**
   * Allows to create a custom header content for the Resource Panel. The attribute accepts an HTMLTemplate element, it's id or a function.
   * Default value: null
   */
  resourcePanelHeaderTemplate?: any;
  /**
   * Determines the min size of the Resource Panel.
   * Default value: 100
   */
  resourcePanelMin?: number | string;
  /**
   * Determines the size of the Resource Panel.
   * Default value: 
   */
  resourcePanelSize?: number | string;
  /**
   * Determines the refresh rate of the Resource Panel when dragging/resizing/progress changing a Task from the Timeline. This property allows to customize the interval between resource Tree/Timeline refreshes. By default they refresh immediately after a change.
   * Default value: 0
   */
  resourcePanelRefreshRate?: number;
  /**
   * A callback that can be used to customize the content of the resource Timeline cells. The callback accepts three arguments: taskIndexes - an array of task indexes that are assigned to the resource for the current cell.resourceIndex - the index of the resource.cellDate - the date of the current cell. This property is used when resourceTimelineView is set to custom. Depending on the resourceTimelineMode, it should return: string - when the resourceTimelineMode is set to 'diagram'.object - when the resourceTimelineMode is set to 'histogram'. The object should have two attributes: capacity and maxCapacity, in order to be visualized as a histogram.. Another usage of this callback is to customize the timeline resource representation completely if resourceTimelineMode is set to custom.
   * Default value: null
   */
  resourceTimelineFormatFunction?: any;
  /**
   * Determines how the capacity of the resources will be visualized inside the resource timeline. By default, the capacity is measured in hours depending on the view property of the element.
   * Default value: diagram
   */
  resourceTimelineMode?: GanttChartResourceTimelineMode;
  /**
   * Determines how the resources will be displayed inside the resource Timeline.
   * Default value: hours
   */
  resourceTimelineView?: GanttChartResourceTimelineView;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Sets which tasks to select by their id or gets the currently selected task ids. If no id is provided for the task, an internal id is generated for each task according to it's index(tree path).
   * Default value: 
   */
  selectedTaskIds?: number[] | string[];
  /**
   * Sets which resources to select by their id or gets the currently selected resource ids. If no id is provided for the resource, an internal id is generated for each resource according to it's index(tree path).
   * Default value: 
   */
  selectedResourceIds?: number[] | string[];
  /**
   * Shows the progress label inside the progress bars of the Timeline tasks.
   * Default value: false
   */
  showProgressLabel?: boolean;
  /**
   * If set the dateStart/dateEnd of the tasks will be coerced to the nearest timeline cell date ( according to the view ). Affects the dragging operation as well.
   * Default value: false
   */
  snapToNearest?: boolean;
  /**
   * Determines whether the GanttChart can be sorted by one, more then one or no columns.
   * Default value: none
   */
  sortMode?: GanttChartSortMode;
  /**
   * A getter that returns a flat structure as an array of all tasks inside the element.
   * Default value: 
   */
  tasks?: GanttChartTask[];
  /**
   * Deteremines the columns that will be visible in the Task Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. It should reference a task attribute from the dataSource. By default, one column with all task labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts one argument - the actual label as string that is going to be inserted and must return some content. min - controls the min size of the column max - controls the max size of the column size - controls the actual size of the columncustomEditor - a callback that can be used to set a custom editor for the column when editing via the window. It accepts two arguments label - the label of the columnvalue - the value of the column. The callback must return the editor.setCustomEditorValue - a callback that is used to set the value of the custom editor.getCustomEditorValue - a callback that is used to get the value of the custom editor.
   * Default value: { "label": "Task Name", "value": "label" }
   */
  taskColumns?: GanttChartTaskColumn[];
  /**
   * Determines whether the Task Table is filterable or not.
   * Default value: false
   */
  taskFiltering?: boolean;
  /**
   * Determines the min size of the Task Panel. Used when Resource Panel is visible.
   * Default value: 200
   */
  taskPanelMin?: string | number;
  /**
   * Determines the size of the Task Panel. Used when Resource Panel is visible.
   * Default value: 
   */
  taskPanelSize?: string | number;
  /**
   * Determines the min width of the timeline.
   * Default value: 200
   */
  timelineMin?: string | number;
  /**
   * Determines the min width of the task table.
   * Default value: 100
   */
  treeMin?: string | number;
  /**
   * Determines the size(width) of the task table.
   * Default value: 100
   */
  treeSize?: string | number;
  /**
   * A format function for the Header of the Timeline. The function provides the following arguments: date - a Date object that represets the date for the current cell.type - a string that represents the type of date that the cell is showing, e.g. 'month', 'week', 'day', etc.isHeaderDetails - a boolean that indicates whether the current cell is part of the Header Details Container or not.value - a string that represents the default value for the cell provided by the element.
   * Default value: null
   */
  timelineHeaderFormatFunction?: any;
  /**
   * Determines weather or not vertical scrollbar is shown.
   * Default value: auto
   */
  verticalScrollBarVisibility?: VerticalScrollBarVisibility;
  /**
   * Determines the viewing date range of the timeline. Possible values: day - The timeline show the hours of the day.week - the timeline shows the days of the week.month - the timeline shows the days of the month.year - the timeline shows the months of the year.resource - displays the current tasks by grouping them according to the resources they have assigned. The unassigned tasks will be placed in a separate group called 'Unassigned'.  The timeline has a header section that contains the labels of each cell according to the date inside them. The header is splitted in two sections in order to give a more detailed information of the dates.
   * Default value: year
   */
  view?: GanttChartView;
  /**
   * Determines the format of the dates inside the timeline header when they represent years.
   * Default value: numeric
   */
  yearFormat?: YearFormat;
  /**
   * Determines the format of the dates inside the timeline header when they represent weeks. 
   * Default value: long
   */
  weekFormat?: WeekFormat;
  /**
   * Sets or gets the element's visual theme. 
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or gets if the element can be focused.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 Gantt charts are specialized bar charts that help clearly represent how tasks and resources are allocated over time in planning, project management, and scheduling applications.
*/
export interface GanttChart extends BaseElement, GanttChartProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when a batch update was started after executing the <b>beginUpdate</b> method.
	* @param event. The custom event.    */
  onBeginUpdate?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a batch update was ended from after executing the <b>endUpdate</b> method.
	* @param event. The custom event.    */
  onEndUpdate?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user starts connecting one task to another. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(startIndex)
   *  startIndex - The index of the task that a connection is started from.
   */
  onConnectionStart?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user completes a connection between two tasks.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, startIndex, endIndex, type)
   *  id - The id of the connection that was created.
   *  startIndex - The index of the task that a connection is started from.
   *  endIndex - The index of the task that a connection is started from.
   *  type - The type of connection. Fours types are available: <ul><li><b>0</b> - start-to-start</li><li><b>1</b> - end-to-start</li><li><b>2</b> - end-to-end</li><li><b>3</b> - start-to-end</li></ul>
   */
  onConnectionEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a Task is selected/unselected.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, oldValue)
   *  value - The index of the new selected task.
   *  oldValue - The index of the previously selected task.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when a Tree column is resized. Column resizing is controled by the <b>columnResize</b> property.
	* @param event. The custom event. Custom data event was created with: ev.detail(dataField, headerCellElement, widthInPercentages, width)
   *  dataField - The name of the column. Corresponds to the <b>value</b> attribute of a <b>taskColumns/resourceColumns</b> object.
   *  headerCellElement - The HTMLElement column cell element that was resized.
   *  widthInPercentages - The new width of the column in percentages.
   *  width - The new width of the column in pixels.
   */
  onColumnResize?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered just before the window for task editing starts closing. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, type)
   *  target - The instance of the window that is going to close.
   *  type - The type of window that is going to close. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>
   */
  onClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the window for task editing is closed( hidden )
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when an item is collapsed.
	* @param event. The custom event. Custom data event was created with: ev.detail(isGroup, item, index, label, value)
   *  isGroup - A boolean flag indicating whether the collapsed item is a resource group. This is the case when <b>groupByResoruces</b> is enabled.
   *  item - The object details of the collapsed item.
   *  index - The index of the collapsed item.
   *  label - The label of the collapsed item.
   *  value - The value of the collapsed item.
   */
  onCollapse?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when dragging of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, item, dateStart, dateEnd)
   *  id - The id of the task that is going to be dragged.
   *  item - The object of the task that is going to be dragged.
   *  dateStart - The start date of the task that is going to be dragged.
   *  dateEnd - The end date of the task that is going to be dragged.
   */
  onDragStart: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when dragging of a task finishes.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, item, dateStart, dateEnd)
   *  id - The id of the task that is was dragged.
   *  item - The object of the task that is was dragged.
   *  dateStart - The start date of the task that is was dragged.
   *  dateEnd - The end date of the task that is was dragged.
   */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when an item is expanded.
	* @param event. The custom event. Custom data event was created with: ev.detail(isGroup, item, index, label, value)
   *  isGroup - A boolean flag indicating whether the collapsed item is a resource group. This is the case when <b>groupByResoruces</b> is enabled.
   *  item - The index of the expanded item.
   *  index - The index of the expanded item.
   *  label - The label of the expanded item.
   *  value - The value of the expanded item.
   */
  onExpand?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the GanttChart is filtered.
	* @param event. The custom event. Custom data event was created with: ev.detail(type, action, filters)
   *  type - The type of items that have been filtered ( task or resource ).
   *  action - The name of the filtering action (whether filtering is added or removed).
   *  filters - The filters that have been applied. Filters represent JQX.Utilities.FilterGroup objects.
   */
  onFilter?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a task, resource or connection is clicked inside the Timeline or the Tree columns.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, type, originalEvent)
   *  item - The item that was clicked. It cam be a task, resource or connection.
   *  type - The type of item. Possible values are: 'task', 'resource', 'connection'.
   *  originalEvent - The original DOM event.
   */
  onItemClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a Task/Resource/Connection is inserted.
	* @param event. The custom event. Custom data event was created with: ev.detail(type, item)
   *  type - The type of item that has been modified.
   *  item - An object that represents the actual item with it's attributes.
   */
  onItemInsert?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a Task/Resource/Connection is removed.
	* @param event. The custom event. Custom data event was created with: ev.detail(type, item)
   *  type - The type of item that has been modified.
   *  item - An object that represents the actual item with it's attributes.
   */
  onItemRemove?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a Task/Resource/Connection is updated.
	* @param event. The custom event. Custom data event was created with: ev.detail(type, item)
   *  type - The type of item that has been modified.
   *  item - An object that represents the actual item with it's attributes.
   */
  onItemUpdate?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered just before the window for task editing starts opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, type)
   *  target - The instance of the window that is going to open.
   *  type - The type of window that is going to open. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>
   */
  onOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the window for task editing is opened( visible ).
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the progress of a task bar starts to change as a result of user interaction. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(index, progress)
   *  index - The index of the task which progress is going to be changed.
   *  progress - The progress of the task before it is changed.
   */
  onProgressChangeStart?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the progress of a task is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(index, progress)
   *  index - The index of the task which progress is has been changed.
   *  progress - The progress of the task after it was changed.
   */
  onProgressChangeEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when resizing of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, item, dateStart, dateEnd)
   *  id - The id of the task that is going to be resized.
   *  item - The object of the task that is going to be resized.
   *  dateStart - The start date of the task that is going to be resized.
   *  dateEnd - The end date of the task that is going to be resized.
   */
  onResizeStart?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the resizing of a task finishes.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, item, dateStart, dateEnd)
   *  id - The id of the task that was resized.
   *  item - The object of the task that was resized.
   *  dateStart - The start date of the task that was resized.
   *  dateEnd - The end date of the task that was resized.
   */
  onResizeEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the GanttChart is sorted by some column.
	* @param event. The custom event. Custom data event was created with: ev.detail(type, columns, sortDataFields, sortOrders, sortDataTypes)
   *  type - The type of columns that have been sorted ( task or resource column ).
   *  columns - An array of objects that contains the currently sorted column objects.
   *  sortDataFields - The dataFields of the columns that have been sorted. The dataField corresponds to the <b>value</b> property of a <b>taskColumns/resourceColumns</b> object.
   *  sortOrders - The orders of the columns that have been sorted.
   *  sortDataTypes - The data types of the columns that have been sorted.
   */
  onSort?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the Timeline has been scrolled to the bottom.
	* @param event. The custom event.    */
  onScrollBottomReached?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the Timeline has been scrolled to the top.
	* @param event. The custom event.    */
  onScrollTopReached?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the Timeline has been scrolled to the beginning (horizontally).
	* @param event. The custom event.    */
  onScrollLeftReached?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the Timeline has been scrolled to the end (horizontally).
	* @param event. The custom event.    */
  onScrollRightReached?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Adds a custom filter to a specific column (task or resource column).
   * @param {any} columns. An object or an array of objects with the following syntax: <ul><li><b>type</b> - indicates the type of column to filter. Possible values are 'task' or 'resource'.</li><li><b>value</b> - the value of the column that must match the value attribute of a taskColumns/resourceColumns object(e.g. 'label', 'dateStart', etc).</li></ul>.
   * @param {any} filterGroup. A Smart.Utilities.FilterGroup object. Here's an example for creating a FilterGroup object: <pre>const filterGroup = new window.Smart.Utilities.FilterGroup(), filterObject = filterGroup.createFilter('string', 'Task B', 'STARTS_WITH_CASE_SENSITIVE'); filterGroup.addFilter('or', filterObject); gantt.addFilter({ type: 'task', value: 'label' }, filterGroup);</pre>
   */
  addFilter(columns: any, filterGroup: any): void;
  /**
   * Clears the currently applied filters.
   */
  clearFilters(): void;
  /**
   * Clears the currently applied column sorting.
   */
  clearSort(): void;
  /**
   * Unselects all currently selected items inside the GanttChart including Tasks and Resources. It also clears the assignment highlgihters.
   */
  clearSelection(): void;
  /**
   * Removes a previously saved state of the element form LocalStorage according to it's id. <strong>Requires an id to be set to the element.</strong>
   */
  clearState(): void;
  /**
   * Removes all tasks. 
   */
  clearTasks(): void;
  /**
   * Removes all resources. 
   */
  clearResources(): void;
  /**
   * Creates a connection between two tasks. 
   * @param {number | string} startTaskIndex. The id of the start task or the connection string like '2-3-0'. <b>If the complete connections string is provided as the first argument, the rest of the method arguments are not necessary</b>
   * @param {number | string} taskEndIndex?. The id of the end task.
   * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3. The connection type can be: <ul><li><b>0</b> - Start-to-Start connection.</li><li><b>1</b> - End-to-Start connection.</li><li><b>2</b> - End-to-End connection.</li><li><b>3</b> - Start-to-End connection.</li></ul>
   * @param {number} lag?. The connection lag in miliseconds. Used by the Auto scheduling algorithm in order allow some slack time slack time before or after the next task begins/ends. Lag is measured in miliseconds. It can be a negative (lead) or a positive (lag) number.
   */
  createConnection(startTaskIndex: number | string, taskEndIndex?: number | string, connectionType?: number, lag?: number): void;
  /**
   * Collapses an expanded project.
   * @param {string | number} id. The id of a project item that should be collapsed.
   */
  collapse(id: string | number): void;
  /**
   * Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once.
   */
  beginUpdate(): void;
  /**
   * Ends the update operation. This method will resume the rendering and will refresh the GanttChart.
   */
  endUpdate(): void;
  /**
   * Refereshes the GanttChart after resizing by recalculating the Scrollbars. 
   * @param {boolean} fullRefresh?. If set the GanttChart will be re-rendered completely.
   */
  refresh(fullRefresh?: boolean): void;
  /**
   * Makes sure a Task is visible by scrolling to it.
   * @param {string | number} taskId. The id of the target Task.
   */
  ensureVisible(taskId: string | number): void;
  /**
   * Expands a collapsed project with tasks.
   * @param {string | number} id. The id of a project task that should be expanded.
   */
  expand(id: string | number): void;
  /**
   * Exports the data of Tree of the GanttChart.
   * @param {string} dataFormat. Determines the format of the exported file. Three possible values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li><li><b>tsv</b></li><li><b>csv</b></li><li><b>xml</b></li></ul>
   * @param {any} callback?. A callback that allows to format the exported data based on a condition. For additional details, refer ro the Smart Export Documentation.
   */
  exportData(dataFormat: string, callback?: any): void;
  /**
   * Returns a JSON representation of all tasks inside the element along with their connections and settings.
   * @returns {any[]}
   */
  getState(): any[];
  /**
   * Returns the Tree path of a task/resource. The tree path is used as task/resource id if no id is provided by the user.
   * @param {any} item. A GattChartTask/GanttChartResource item object.
   * @returns {string}
   */
  getItemPath(item: any): string;
  /**
   * Returns the task object that corresponds to the id/path.
   * @param {string | number} itemId. The id/path of a task.
   * @returns {any}
   */
  getTask(itemId: string | number): any;
  /**
   * Returns an array of all GanttChart tasks.
   * @returns {any[]}
   */
  getTasks(): any[];
  /**
   * Returns the index of a task.
   * @param {any} task. A GattChartTask object.
   * @returns {number}
   */
  getTaskIndex(task: any): number;
  /**
   * Returns the connections definitions of a task.
   * @param {any} taskId. A GanttChartTask object or it's id.
   * @returns {any}
   */
  getTaskConnections(taskId: any): any;
  /**
   * Returns the Project of a task or undefined if it does not have one.
   * @param {any} task. A GantChartTask object.
   * @returns {any}
   */
  getTaskProject(task: any): any;
  /**
   * Returns the resource object that corresponds to the id/path.
   * @param {string | number} itemId. The id/path of a resource.
   * @returns {any}
   */
  getResource(itemId: string | number): any;
  /**
   * Returns an array of all GanttChart resources.
   * @returns {any[]}
   */
  getResources(): any[];
  /**
   * Returns the index of a resource.
   * @param {any} resource. A GanttChartResource object.
   * @returns {number}
   */
  getResourceIndex(resource: any): number;
  /**
   * Returns the tasks that are assigned to the resource.
   * @param {any} resource. A GanttChartResource object or it's id.
   * @returns {any}
   */
  getResourceTasks(resource: any): any;
  /**
   * Returns the currently selected tasks/resource ids. If selection is disabled or no items are selected returns null.
   * @returns {any}
   */
  getSelectedIds(): any;
  /**
   * Returns the currently selected tasks.
   * @returns {any}
   */
  getSelectedTasks(): any;
  /**
   * Returns the currently selected resources.
   * @returns {any}
   */
  getSelectedResources(): any;
  /**
   * Returns the working hours of the day as numbers.
   * @returns {any}
   */
  getWorkingHours(): any;
  /**
   * Depending on the nonworkingDays property, returns true or false whether the target date is on a working day or not.
   * @param {Date} date. A javascript Date object or a string/number which represents a valid JS Date.
   */
  isWorkingDay(date: Date): void;
  /**
   * Loads a previously saved state of the element or checks LocalStorage for any saved states if no argument is passed to the method.
   * @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
   */
  loadState(state?: any[]): void;
  /**
   * Removes all connections between tasks. 
   */
  removeAllConnections(): void;
  /**
   * Removes a connection between tasks. The function accepts three arguments(task's start index, end index and connection type) or one connection string argument which describes the connection.
   * @param {number | string} startTaskIndex. The index of the start task or the connection string like '2-3-0.
   * @param {number} taskEndIndex?. The index of the end task.
   * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3.
   * @returns {any}
   */
  removeConnection(startTaskIndex: number | string, taskEndIndex?: number, connectionType?: number): any;
  /**
   * Removes all connections of a task or between two tasks if the second argument is provided and valid.
   * @param {any} taskStart. The start task object or it's id.
   * @param {any} taskEnd?. The end task object or it's id.
   */
  removeTaskConnection(taskStart: any, taskEnd?: any): void;
  /**
   * Saves the current settings of the element to LocalStorage. <strong>Requires an id to be set to the element.</strong>
   * @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
   */
  saveState(state?: any[]): void;
  /**
   * Inserts a new task in the timeline. The new task can be inserted as a sub task of a project by passing the appropriate argument for the project id or as a root level item.
   * @param {any} taskObject. An object describing a Gantt Chart task.
   * @param {any} project?. A number or string that represents the id of a project (e.g. '0') or a project object definition present in the GanttChart. This parameter determines the parent project of the task that will be inserted. If <b>null</b> is passed as an arguemnt the new task will be inserted at root level without a parent project.
   * @param {number} index?. The index where the new item should be inserted(e.g. 2). This index will determine the position of the newly inserted task.
   * @returns {string | number | undefined}
   */
  insertTask(taskObject: any, project?: any, index?: number): string | number | undefined;
  /**
   * Updates a task/project/milestone.
   * @param {any} taskId. A number or string that represents the id of a task/project(e.g. '0') or the object definition of the task/project.
   * @param {any} taskObject. An object describing a Gantt Chart task. The properties of this object will be applied to the desired task.
   */
  updateTask(taskId: any, taskObject: any): void;
  /**
   * Removes a task from the timeline.
   * @param {any} taskId. A number or string that represents the id of a task or the actual item object.
   */
  removeTask(taskId: any): void;
  /**
   * Inserts a new resource.
   * @param {string | number} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following SmartTree syntax), or a number that represents the index of a resource.
   * @param {any} resourceObject?. An object describing a Gantt Chart resource.
   */
  insertResource(resourceId: string | number, resourceObject?: any): void;
  /**
   * Updates an existing resource.
   * @param {any} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following SmartTree syntax), or a number that represents the index of a resource.
   * @param {any} taskObject. An object describing a Gantt Chart resource. The properties of this object will be applied to the target resource.
   */
  updateResource(resourceId: any, taskObject: any): void;
  /**
   * Removes a resource.
   * @param {any} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following SmartTree syntax), or a number that represents the index of a resource.
   */
  removeResource(resourceId: any): void;
  /**
   * Opens the popup Window for specific task to edit or to delete a connection if a connection string is passed.
   * @param {any} taskId. A string or number that represents the id of a task or the task object that is going to be edited or a connection string(e.g. '2-0-0').
   */
  openWindow(taskId: any): void;
  /**
   * Closes an opened popup Window. The method will close any opened popup window inside the element.
   */
  closeWindow(): void;
  /**
   * Prepares the GanttChart for printing by opening the browser's Print Preview.
   */
  print(): void;
  /**
   * Allows to sets the working days and hours at once.
   * @param  settings. An object definition that contains the days and hours that should be working. The days and hours can be defined as an array of numbers where each number is a day/hour, strings where each string represents a range of days/hours (e.g. '1-5' or '2:00-8:00') or nested array of numbers (e.g. [[1,5]] or [[2, 8]]) which means from 1 to 5 or 2 to 8.
   */
  setWorkTime(settings: { days: (number | string | number[])[], hours: (number | string | number[])[] }): void;
  /**
   * Allows to select a task based on it's id.
   * @param {string | number} id. The id of the task to select.
   */
  selectTask(id: string | number): void;
  /**
   * Allows to select a resource based on it's id.
   * @param {string | number} id. The id of the resource to select.
   */
  selectResource(id: string | number): void;
  /**
   * Allows to unselect a task based on it's id.
   * @param {string | number} id. The id of the task to unselect.
   */
  unselectTask(id: string | number): void;
  /**
   * Allows to unselect a resource based on it's id.
   * @param {string | number} id. The id of the resource to unselect.
   */
  unselectResource(id: string | number): void;
  /**
   * Allows to unset previously set working time. The opposte method for <b>setWorkingTime</b>.
   * @param  settings. An object definition that contains the days and hours that should not be working. The days and hours can be defined as an array of numbers where each number is a day/hour, strings where each string represents a range of days/hours (e.g. '1-5' or '2:00-8:00') or nested array of numbers (e.g. [[1,5]] or [[2, 8]]) which means from 1 to 5 or 2 to 8.
   */
  unsetWorkTime(settings: { days: (number | string | number[])[], hours: (number | string | number[])[] }): void;
  /**
   * Sorts the GanttChart tasks/resources if <b>sortable</b> is enabled.
   * @param {any} columns. An Array of objects which determine which columns to be sorted, the sort order and the type of item to sort: task or resource. If no arguments are provided sorting will be removed. <br /> An object should have the following properties: <ul><li><b>value</b> - a string that represents the value of a <b>taskColumn</b> to sort.</li><li><b>sortOrder</b> - a string that represents the sorting order for the column: 'asc' (asscending sorting) or 'desc' (descending) are possible values. </li><li><b>type</b> - a string that represents the type of item to sort. This property determines which panel will be sorted. Two possible values: 'task', 'resource'.</li></ul>
   */
  sort(columns: any): void;
}

/**Sets the GanttChart's Data Export options. */
export interface GanttChartDataExport {
  /**
   * Determines whether to export filtered items or not. By default filtered data is not exported.
   * Default value: false
   */
  exportFiltered?: boolean;
  /**
   * Sets the exported file's name.
   * Default value: "jqxGanttChart"
   */
  fileName?: string;
  /**
   * Determines the type of items that is going to be exported. 
   * Default value: task
   */
  itemType?: GanttChartDataExportItemType;
}

export interface GanttChartResource {
  /**
   * Resource class. Used to style the resource Timeline.
   * Default value: ""
   */
  class?: string;
  /**
   * The capacity of a resource. By default it is used to determine the working capacity ( in hours ) of the resource.
   * Default value: 8
   */
  capacity?: number;
  /**
   * Resource visibility.
   * Default value: false
   */
  hidden?: boolean | undefined;
  /**
   * Resource id. The unique id of the resource.
   * Default value: ""
   */
  id?: string;
  /**
   * Resource label.
   * Default value: 0
   */
  label?: string | null;
  /**
   * Resource min capacity
   * Default value: 0
   */
  minCapacity?: number;
  /**
   * Resource max capacity. By default this property is used for the resource timeline histogram where maxCapacity is the maximum working capacity in hours of the resource.
   * Default value: 0
   */
  maxCapacity?: number;
  /**
   * Resource progress. Progress is the total progress of the resource based on the tasks it is assigned to. This property is automatically calculated.
   * Default value: 0
   */
  progress?: number;
  /**
   * Resource type.
   * Default value: 
   */
  type?: any;
  /**
   * Resource value.
   * Default value: 
   */
  value?: any;
  /**
   * Resource workload. Workload is the total working time in hours of a resource based on the tasks it is assigned to. This property is automatically calculated.
   * Default value: 0
   */
  workload?: string | number;
}

export interface GanttChartResourceColumn {
  /**
   * Column's label.
   * Default value: 
   */
  label?: string | null;
  /**
   * Column's value. The value shold reference an actual resoruce attribute.
   * Default value: 
   */
  value?: string | null;
  /**
   * Column's min size.
   * Default value: 0
   */
  min?: string | number | null;
  /**
   * Column's size.
   * Default value: 0
   */
  size?: string | number | null;
  /**
   * Column's format function. You can use it to customize the column label's rendering.
   * Default value: null
   */
  formatFunction?: any;
}

export interface GanttChartTask {
  /**
   * Tasks connection.
   * Default value: undefined
   */
  connections?: any;
  /**
   * Project, Task or Milestone CSS class.
   * Default value: ""
   */
  class?: string;
  /**
   * Project, Task or Milestone start date.
   * Default value: 
   */
  dateStart?: string | Date;
  /**
   * Project, Task or Milestone end date.
   * Default value: 
   */
  dateEnd?: string | Date;
  /**
   * Project, Task or Milestone with disabled resources.
   * Default value: false
   */
  disableResources?: boolean;
  /**
   * Project, Task or Milestone dragging is disabled.
   * Default value: false
   */
  disableDrag?: boolean;
  /**
   * Project, Task or Milestone resizing is disabled.
   * Default value: false
   */
  disableResize?: boolean;
  /**
   * Project, Task or Milestone drag enabled in the view.
   * Default value: true
   */
  dragProject?: boolean;
  /**
   * The duration of the tasks in miliseconds. The duration unit can be changed via the durationUnit property.
   * Default value: 0
   */
  duration?: number | undefined;
  /**
   * Project, Task or Milestone expanded state in the view.
   * Default value: false
   */
  expanded?: boolean;
  /**
   * Task visibility.
   * Default value: false
   */
  hidden?: boolean | undefined;
  /**
   * Project, Task or Milestone id.
   * Default value: 
   */
  id?: string | null;
  /**
   * Project, Task or Milestone label.
   * Default value: 
   */
  label?: string | null;
  /**
   * Project, Task or Milestone format function.
   * Default value: null
   */
  formatFunction?: any;
  /**
   * Project, Task or Milestone max start date.
   * Default value: 
   */
  maxDateStart?: string | Date;
  /**
   * Project, Task or Milestone min start date.
   * Default value: 
   */
  minDateStart?: string | Date;
  /**
   * Project, Task or Milestone max end date.
   * Default value: 
   */
  maxDateEnd?: string | Date;
  /**
   * Project, Task or Milestone min end date.
   * Default value: 
   */
  minDateEnd?: string | Date;
  /**
   * The minimum duration of the Project, Task or Milestone in miliseconds. The units can be changed via the durationUnit property.
   * Default value: 0
   */
  minDuration?: number | undefined;
  /**
   * The maximum duration of the Project, Task or Milestone in miliseconds. The unit can be changed via the durationUnit property.
   * Default value: 0
   */
  maxDuration?: number | undefined;
  /**
   * Project, Task or Milestone progress.
   * Default value: 0
   */
  progress?: number;
  /**
   * Project, Task or Milestone resources.
   * Default value: 
   */
  resources?: any;
  /**
   * Project, Task or Milestone synchronized in the view.
   * Default value: false
   */
  synchronized?: boolean;
  /**
   * Project's tasks. Only projects can have tasks.
   * Default value: 
   */
  tasks?: any;
  /**
   * Project, Task or Milestone type. Possible values are 'project', 'milestone' and 'task'
   * Default value: task
   */
  type?: GanttChartTaskType;
  /**
   * Project, Task or Milestone value.
   * Default value: 
   */
  value?: any;
}

export interface GanttChartTaskColumn {
  /**
   * Determines whether the task propery determined by column can be edited from the Window editor or not. By default editing is enabled.
   * Default value: false
   */
  disableEdit?: boolean;
  /**
   * Applies only to column's that display dates (e.g. dateStart/dateEnd, etc). This property allows to define a JS Intl.DateTimeFormat object in order to format the dates of the column. Here is an example value of the property: dateFormat: { year: '2-digit', month: 'long', day: 'numeric' }
   * Default value: null
   */
  dateFormat?: any;
  /**
   * Column's label.
   * Default value: 
   */
  label?: string | null;
  /**
   * Column's value.
   * Default value: 
   */
  value?: string | null;
  /**
   * Column's size.
   * Default value: 0
   */
  size?: string | number | null;
  /**
   * Column's format function. You can use it to customize the column label's rendering.
   * Default value: null
   */
  formatFunction?: any;
  /**
   * A function that allows to set a custom editor for the column's value in the Editor Window. The function must return an HTMLElement. The function has two arguments: name - the name of the task property that is going to be edited.value - the value of the task property that is going to be edited. It's also important to define a getCustomEditorValue to return the value from the custom editor.
   * Default value: null
   */
  customEditor?: any;
  /**
   * A function that is used in conjunction with customEditor allows to return the value of the custom editor. Since the editor is unknown by the element, this function allows to return the expected result from the editor. It has one argument - an HTMLElement that contains the custom editor that was previously defined by the customEditor function.
   * Default value: null
   */
  getCustomEditorValue?: any;
  /**
   * A function that is used in conjunction with customEditor allows to set the value of the custom editor. Since the editor is unknown by the element, this function allows to set the expected value to the editor. It has three arguments - editor - an HTMLElement that contains the custom editor that was previously defined by the customEditor function.columnValue - the value property of the column.value - the value of the task property that the column displays(the editor value).
   * Default value: null
   */
  setCustomEditorValue?: any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-gantt-chart"): GanttChart;
        querySelector(selectors: "smart-gantt-chart"): GanttChart | null;
        querySelectorAll(selectors: "smart-gantt-chart"): NodeListOf<GanttChart>;
        getElementsByTagName(qualifiedName: "smart-gantt-chart"): HTMLCollectionOf<GanttChart>;
        getElementsByName(elementName: "smart-gantt-chart"): NodeListOf<GanttChart>;
    }
}

/**Determines the type of items that is going to be exported.  */
export declare type GanttChartDataExportItemType = 'task' | 'resource';
/**Determines the format of the dates in the timeline header when they represent days. */
export declare type GanttDayFormat = '2-digit' | 'numeric' | 'long' | 'short' | 'narrow';
/**Determines in what unit is task duration property measured. */
export declare type Duration = 'day' | 'hour' | 'minute' | 'second' | 'milisecond';
/**Determines weather or not horizontal scrollbar is shown. */
export declare type HorizontalScrollBarVisibility = 'auto' | 'disabled' | 'hidden' | 'visible';
/**Determines the format of the dates inside the timeline header when they represent hours. */
export declare type HourFormat = 'default' | '2-digit' | 'numeric';
/**Determines the format of the dates the timeline header when they represent months. */
export declare type MonthFormat = '2-digit' | 'numeric' | 'long' | 'short' | 'narrow';
/**Determines how the capacity of the resources will be visualized inside the resource timeline. By default, the capacity is measured in hours depending on the <b>view</b> property of the element. */
export declare type GanttChartResourceTimelineMode = 'diagram' | 'histogram' | 'custom';
/**Determines how the resources will be displayed inside the resource Timeline. */
export declare type GanttChartResourceTimelineView = 'hours' | 'tasks' | 'custom';
/**Determines whether the GanttChart can be sorted by one, more then one or no columns. */
export declare type GanttChartSortMode = 'none' | 'one' | 'many';
/**Project, Task or Milestone type. Possible values are 'project', 'milestone' and 'task' */
export declare type GanttChartTaskType = 'project' | 'milestone' | 'task';
/**Determines weather or not vertical scrollbar is shown. */
export declare type VerticalScrollBarVisibility = 'auto' | 'disabled' | 'hidden' | 'visible';
/**Determines the viewing date range of the timeline. Possible values: day - The timeline show the hours of the day.
week - the timeline shows the days of the week.
month - the timeline shows the days of the month.
year - the timeline shows the months of the year.
resource - displays the current tasks by grouping them according to the resources they have assigned. The unassigned tasks will be placed in a separate group called 'Unassigned'.
 <br /> The timeline has a header section that contains the labels of each cell according to the date inside them. The header is splitted in two sections in order to give a more detailed information of the dates. */
export declare type GanttChartView = 'day' | 'week' | 'month' | 'year';
/**Determines the format of the dates inside the timeline header when they represent years. */
export declare type YearFormat = '2-digit' | 'numeric';
/**Determines the format of the dates inside the timeline header when they represent weeks.  */
export declare type WeekFormat = 'long' | 'numeric';
