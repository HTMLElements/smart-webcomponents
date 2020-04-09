import  {BaseElement, Animation} from "./smart.element"

/**
 Gantt charts are specialized bar charts that help clearly represent how tasks and resources are allocated over time in planning, project management, and scheduling applications.
*/
export interface GanttChart extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
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
   * Sets the GanttChart's Data Export options.
   * Default value: [object Object]
   */
  dataExport?: GanttChartDataExport;
  /**
   * Determines the tasks that will be loaded inside the Timeline. Each item represents an object that should contain the following properties: label - the label of the TaskdateStart - the starting date of the Task. Should be a string representing a valid date.dateEnd - the ending date of the Task. Should be a string representing a valid date.type - determines the type of the task. Whether it's a simple task, a project or a milestone. Each type of task has specific behavior and additional attributes..  Additional properties: connections - an array of objects representing the connection between two tasks. Each connection (object) should have the following properties : target - a number representing the index of the target tasktype - a number representing the type of the connection. Four types of connections are available: 0 - is a connection of type Start-to-Start 1 - is a connection of type End-to-Start 2 - is a connection of type End-to-End3 - is a connection of type Start-to-End lag - a number that determines the delay between two connected auto scheduled tasks. Lag property can be a positive or a negative number. When negative it determines the overlap between two connected tasks. This property is used in conjuction with autoSchedule.duration - determines the duration of a Task in days, hours, minutes, seconds or miliseconds. Very usefull when the the dateEnd of a Task is unknown.minDuration - sets the minimum duration of a task. maxDuration - sets the maximum duration of a task.minDateStart - determines the mininum date that a task can start from. Must be if type string and should represent a valid date.maxDateStart - determines the maximum date that a task can start from. Must be if type string and should represent a valid date.minDateEnd - determines the mininum date that a task can end. Must be if type string and should represent a valid date.maxDateEnd - determines the maximum date that a task can end. Must be if type string and should represent a valid date.progress - a number that determines the progress of a task ( from 0 to 100 ).disableDrag - a boolean property that disables the dragging of a task when set to true.disableResize - a boolean property that disables the resizing of a task when set to true.dragProject - a boolean that determines whether or not the whole project (along with the tasks) can be dragged while dragging the project task. Applicalbe only to Projects.synchronized - a boolean that if set the project task's start/end dates are automatically calculated based on the tasks. By default a synchronized project task can't be dragged alone. Applicable only to Project tasks.expanded - a boolean that determines if a project is expanded or not. If not all of it's sub-tasks are not visible. Only the project task itself is visible. By default no projects are expanded. Applicable only to project tasks..
   * Default value: 
   */
  dataSource?: GanttChartDataSource[];
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
   * Allows to create a custom header content for the Task Panel. The attribute accepts an HTMLTemplate element, it's id or a function.
   * Default value: null
   */
  headerTemplate?: any;
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
   * When set the Timeline is positioned on the left side while the Task Tree is positioned on the right. By default it's vice versa.
   * Default value: false
   */
  inverted?: boolean;
  /**
   *  Determines the language of the GanttChart. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Detetmines the maximum possible date of the Timeline.
   * Default value: 2100-1-1
   */
  max?: any;
  /**
   * Detetmines the minimum possible date of the Timeline.
   * Default value: 1900-1-1
   */
  min?: any;
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
   * Determines the nonworking days of the week from 0 to 6, where 0 is the first day of the week and 6 is the last day. Nonworking days will be displayed with colored cells inside the timeline and will be ignored during task range calculations.
   * Default value: 
   */
  nonworkingDays?: number[];
  /**
   * Determines the nonworking hours of a day. Hours are represented as numbers inside an array. In the timline the cells that represent nonworking days are colored differently from the rest.
   * Default value: 
   */
  nonworkingHours?: number[];
  /**
   * A function that can be used to completly customize the popup Window that is used to interact width tasks by changing their properties. The function as three arguments: target - the target popup Window that is about to be opened.type - the type of the window. The type determines the purpose of the window. Three possible values: 'task' (task editing), 'confirm' ( confirmation window), 'connection' (used when deleting a connection between tasks). taskIndex - the index of the task that is being edited. It will be undefined if the type of the window is not 'task'.
   * Default value: null
   */
  popupWindowCustomizationFunction?: any;
  /**
   * A getter that returns a flat structure as an array of all resources inside the element.
   * Default value: 
   */
  resources?: GanttChartResource[];
  /**
   * Deteremines the columns that will be visible in the Resource Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. By default, one column with all resource labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts two arguments - the actual label as string that is going to be inserted and the index of the resource. The function must return a string as the new content. min - controls the min size of the column max - controls the max size of the columnsize - controls the actual size of the column
   * Default value: { "label": "resourceColumnLabel", "value": "label" }
   */
  resourceColumns?: GanttChartResourceColumn[];
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
   * Determines the selected task(s). If empty no tasks are selected.
   * Default value: 
   */
  selectedIndexes?: number[];
  /**
   * If set the dateStart/dateEnd of the tasks will be coerced to the nearest timeline cell date ( according to the view ). Affects the dragging operation as well.
   * Default value: false
   */
  snapToNearest?: boolean;
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
   * Determines the min size of the Task Panel. Used when Resource Panel is visible.
   * Default value: 200
   */
  taskPanelMin?: any;
  /**
   * Determines the size of the Task Panel. Used when Resource Panel is visible.
   * Default value: 
   */
  taskPanelSize?: any;
  /**
   * Determines the min width of the timeline.
   * Default value: 200
   */
  timelineMin?: any;
  /**
   * Determines the min width of the task tree.
   * Default value: 100
   */
  treeMin?: any;
  /**
   * Determines the size(width) of the task tree.
   * Default value: 100
   */
  treeSize?: any;
  /**
   * A format function for the Header of the Timeline.
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
  /** 
   * This event is triggered when a Task is selected/unselected.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, oldValue)
   *  value - The index of the new selected task.
   *  oldValue - The index of the previously selected task.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the progress of a task bar starts to change as a result of user interaction. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(index, progress)
   *  index - The index of the task which progress is going to be changed.
   *  progress - The progress of the task before it is changed.
   */
  onProgressChangeStart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the progress of a task is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(index, progress)
   *  index - The index of the task which progress is has been changed.
   *  progress - The progress of the task after it was changed.
   */
  onProgressChangeEnd?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when dragging of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(index, dateStart, dateEnd)
   *  index - The index of the task that is going to be dragged.
   *  dateStart - The start date of the task that is going to be dragged.
   *  dateEnd - The end date of the task that is going to be dragged.
   */
  onDragStart: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when dragging of a task finishes.
	* @param event. The custom event. Custom data event was created with: ev.detail(index, dateStart, dateEnd)
   *  index - The index of the task that is was dragged.
   *  dateStart - The start date of the task that is was dragged.
   *  dateEnd - The end date of the task that is was dragged.
   */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when resizing of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(index, dateStart, dateEnd)
   *  index - The index of the task that is going to be resized.
   *  dateStart - The start date of the task that is going to be resized.
   *  dateEnd - The end date of the task that is going to be resized.
   */
  onResizeStart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the resizing of a task finishes.
	* @param event. The custom event. Custom data event was created with: ev.detail(index, dateStart, dateEnd)
   *  index - The index of the task that was resized.
   *  dateStart - The start date of the task that was resized.
   *  dateEnd - The end date of the task that was resized.
   */
  onResizeEnd?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user starts connecting one task to another. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(startIndex)
   *  startIndex - The index of the task that a connection is started from.
   */
  onConnectionStart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user completes a connection between two tasks.
	* @param event. The custom event. Custom data event was created with: ev.detail(startIndex, endIndex, type)
   *  startIndex - The index of the task that a connection is started from.
   *  endIndex - The index of the task that a connection is started from.
   *  type - The type of connection. Fours types are available: <ul><li><b>0</b> - start-to-start</li><li><b>1</b> - end-to-start</li><li><b>2</b> - end-to-end</li><li><b>3</b> - start-to-end</li></ul>
   */
  onConnectionEnd?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the Timeline has been scrolled to the bottom.
	* @param event. The custom event.    */
  onScrollBottomReached?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the Timeline has been scrolled to the top.
	* @param event. The custom event.    */
  onScrollTopReached?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered just before the window for task editing starts opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, type)
   *  target - The instance of the window that is going to open.
   *  type - The type of window that is going to open. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>
   */
  onOpening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window for task editing is opened( visible ).
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered just before the window for task editing starts closing. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, type)
   *  target - The instance of the window that is going to close.
   *  type - The type of window that is going to close. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>
   */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window for task editing is closed( hidden )
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /**
   * Adds a task as the last item of a Project.
   * @param {string | number} taskIndex. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following SmartTree syntax).
   * @param {string | number} projectIndex. A number that represents the index of a project or a string that matches the hierarchical position of the item, e.g. '0' ( following SmartTree syntax).
   */
  addTaskTo(taskIndex: string | number, projectIndex: string | number): void;
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
   * @param {number} taskStartIndex. The index of the start task. 
   * @param {number} taskEndIndex?. The index of the end task.
   * @returns {string}
   */
  removeTaskConnection(taskStartIndex: number, taskEndIndex?: number): string;
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
   * @param {number | string} startTaskIndex. The index of the start task or the connection string like '2-3-0.
   * @param {number} taskEndIndex?. The index of the end task.
   * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3.
   */
  createConnection(startTaskIndex: number | string, taskEndIndex?: number, connectionType?: number): void;
  /**
   * Collapses an expanded project with tasks.
   * @param {string | number} index. The index of a project task that should be collapsed.
   */
  collapse(index: string | number): void;
  /**
   * Makes sure a Task is visible by scrolling to it.
   * @param {string | number} item. The index of the target Task. Can be a string representing a Tree index ( similar to SmartTree )
   */
  ensureVisible(item: string | number): void;
  /**
   * Expands a collapsed project with tasks.
   * @param {string | number} index. The index of a project task that should be expanded.
   */
  expand(index: string | number): void;
  /**
   * Exports the data of Tree of the GanttChart.
   * @param {string} dataFormat. Determines the format of the exported file. Three possible values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li></ul>
   * @param {any} callback?. A callback that allows to format the exported data based on a condition. For additional details, refer ro the Smart Export Documentation.
   */
  exportData(dataFormat: string, callback?: any): void;
  /**
   * Returns a JSON representation of all tasks inside the element along with their connections and settings.
   * @returns {any[]}
   */
  getState(): any[];
  /**
   * Returns the index of a task.
   * @param {HTMLElement} task. A GattChartTask object.
   * @returns {number}
   */
  getTaskIndex(task: HTMLElement): number;
  /**
   * Returns the tree path of a task.
   * @param {GanttChartTask} task. Returns the Tree path of the task as a string.
   * @returns {string}
   */
  getTaskPath(task: GanttChartTask): string;
  /**
   * Returns the index of a resource.
   * @param {any} resource. A GanttChartResource object.
   * @returns {number}
   */
  getResourceIndex(resource: any): number;
  /**
   * Unselects all currently selected items inside the GanttChart including Tasks and Resources. It also clears the assignment highlgihters.
   */
  clearSelection(): void;
  /**
   * Removes a previously saved state of the element form LocalStorage according to it's id. <strong>Requires an id to be set to the element.</strong>
   */
  clearState(): void;
  /**
   * Loads a previously saved state of the element or checks LocalStorage for any saved states if no argument is passed to the method.
   * @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
   */
  loadState(state?: any[]): void;
  /**
   * Saves the current settings of the element to LocalStorage. <strong>Requires an id to be set to the element.</strong>
   * @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
   */
  saveState(state?: any[]): void;
  /**
   * Inserts a new task in the timeline.
   * @param {string | number} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following SmartTree syntax).
   * @param {any} taskObject. An object describing a Gantt Chart task.
   */
  insertTask(index: string | number, taskObject: any): void;
  /**
   * Updates a task inside the timeline.
   * @param {string | number} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following SmartTree syntax).
   * @param {any} taskObject. An object describing a Gantt Chart task. The properties of this object will be applied to the desired task.
   */
  updateTask(index: string | number, taskObject: any): void;
  /**
   * Removes a task from the timeline.
   * @param {string | number} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following SmartTree syntax).
   */
  removeTask(index: string | number): void;
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
   * Opens the popup Window for specific task Editing.
   * @param {string | number} index. A string or number that represents the index of a task that is going to be edited.
   */
  openWindow(index: string | number): void;
  /**
   * Closes an opened popup Window. The method will close any opened popup window inside the element.
   */
  closeWindow(): void;
  /**
   * Prepares the GanttChart for printing by opening the browser's Print Preview.
   */
  print(): void;
}

/**Sets the GanttChart's Data Export options. */
export interface GanttChartDataExport {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets whether the columns header will be exported.
   * Default value: true
   */
  header?: boolean;
  /**
   * Sets a custom style object of the dataExport. 
   * Default value: null
   */
  style?: any;
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
  /**
   * Sets the page orientation, when exporting to PDF.
   * Default value: "portrait"
   */
  pageOrientation?: string;
  /**
   * Sets the expand char displayed for the Project tasks when GanttChart exported.
   * Default value: "+"
   */
  expandChar?: string;
  /**
   * Sets the collapse char displayed for the Project tasks when GanttChart is exported.
   * Default value: "-"
   */
  collapseChar?: string;
}

export interface GanttChartDataSource {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Tasks connection.
   * Default value: undefined
   */
  connections?: GanttChartDataSourceConnection[];
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
   * Disable the resources for Project, Task or Milestone.
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
   * Project, Task or Milestone expanded state in the view.
   * Default value: false
   */
  expanded?: boolean;
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
   * Project, Task or Milestone progress.
   * Default value: 0
   */
  progress?: number;
  /**
   * Project, Task or Milestone resources
   * Default value: false
   */
  resources?: GanttChartDataSourceResource[];
  /**
   * Project, Task or Milestone synchronized in the view.
   * Default value: false
   */
  synchronized?: boolean;
  /**
   * Project's tasks.
   * Default value: 
   */
  tasks?: GanttChartTask[];
  /**
   * Project, Task or Milestone type. Possible values are 'project' and 'task'
   * Default value: 
   */
  type?: GanttChartTaskType;
  /**
   * Project, Task or Milestone value.
   * Default value: 
   */
  value?: any;
  /**
   * Project, Task or Milestone value.
   * Default value: false
   */
  hidden?: boolean | undefined;
}

export interface GanttChartDataSourceConnection {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Task's connection target.
   * Default value: 0
   */
  target?: string | number;
  /**
   * Task's connection type.
   * Default value: 0
   */
  type?: number;
}

export interface GanttChartDataSourceResource {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * The capacity of a resource. By default it is used to determines the working capacity ( in hours ) of the resource.
   * Default value: 8
   */
  capacity?: number;
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
   * Resource value.
   * Default value: 
   */
  value?: any;
  /**
   * Resource visibility.
   * Default value: false
   */
  hidden?: boolean | undefined;
  /**
   * Resource workload. Workload is the total working time in hours of a resource based on the tasks it is assigned to. This property is automatically calculated.
   * Default value: 0
   */
  workload?: string | number;
}

export interface GanttChartResource {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * An array of the tasks that the resources is assigned to.
   * Default value: []
   */
  assignedTo?: GanttChartTask[];
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

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Tasks connection.
   * Default value: undefined
   */
  connections?: GanttChartTaskConnection[];
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
   * Project, Task or Milestone expanded state in the view.
   * Default value: false
   */
  expanded?: boolean;
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
   * Project, Task or Milestone progress.
   * Default value: 0
   */
  progress?: number;
  /**
   * Project, Task or Milestone resources.
   * Default value: false
   */
  resources?: GanttChartTaskResource[];
  /**
   * Project, Task or Milestone synchronized in the view.
   * Default value: false
   */
  synchronized?: boolean;
  /**
   * Project's tasks.
   * Default value: 
   */
  tasks?: GanttChartTask[];
  /**
   * Project, Task or Milestone type. Possible values are 'project' and 'task'
   * Default value: 
   */
  type?: GanttChartTaskType;
  /**
   * Project, Task or Milestone value.
   * Default value: 
   */
  value?: any;
}

export interface GanttChartTaskConnection {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Task's connection target.
   * Default value: 0
   */
  target?: string | number;
  /**
   * Task's connection type.
   * Default value: 0
   */
  type?: number;
}

export interface GanttChartTaskResource {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Resource capacity.
   * Default value: 0
   */
  capacity?: number;
  /**
   * Resource format function.
   * Default value: null
   */
  formatFunction?: any;
  /**
   * Resource id.
   * Default value: ""
   */
  id?: string;
  /**
   * Resource label.
   * Default value: 0
   */
  label?: string | null;
  /**
   * Resource max capacity.
   * Default value: 0
   */
  maxCapacity?: number;
  /**
   * Resource min capacity.
   * Default value: 0
   */
  minCapacity?: number;
  /**
   * Resource progress.
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
   * Resource visibility.
   * Default value: false
   */
  hidden?: boolean | undefined;
  /**
   * Resource workload.
   * Default value: 0
   */
  workload?: string | number;
}

export interface GanttChartTaskColumn {

  /* Get a member by its name */
  [name: string]: any;
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
   * Column's min size.
   * Default value: 0
   */
  min?: string | number | null;
  /**
   * Determines whether the column will be the root column of the Task Tree. Root column contains the Tree structure. By default the first column is the root.
   * Default value: false
   */
  root?: boolean;
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
/**Project, Task or Milestone type. Possible values are 'project' and 'task' */
export declare type GanttChartTaskType = 'project' | 'milestone' | 'task';
/**Determines weather or not vertical scrollbar is shown. */
export declare type VerticalScrollBarVisibility = 'auto' | 'disabled' | 'hidden' | 'visible';
/**Determines the viewing date range of the timeline. Possible values: day - The timeline show the hours of the day.
week - the timeline shows the days of the week.
month - the timeline shows the days of the month.
year - the timeline shows the months of the year.
resource - displays the current tasks by grouping them according to the resources they have assigned. The unassigned tasks will be placed in a separate group called 'Unassigned'.
 <br /> The timeline has a header section that contains the labels of each cell according to the date inside them. The header is splitted in two sections in order to give a more detailed information of the dates. */
export declare type GanttChartView = 'day' | 'week' | 'month' | 'year' | 'resource';
/**Determines the format of the dates inside the timeline header when they represent years. */
export declare type YearFormat = '2-digit' | 'numeric';
/**Determines the format of the dates inside the timeline header when they represent weeks.  */
export declare type WeekFormat = 'long' | 'numeric';
