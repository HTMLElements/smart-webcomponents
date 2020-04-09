import  {BaseElement, Animation} from "./smart.element"

/**
 Kanban represents a kanban board that visually depicts work at various stages of a process using cards to represent tasks and columns to represent each stage of the process.
*/
export interface Kanban extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Toggles the visibility of the column buttons for adding tasks. A particular button can be disabled by setting addNewButton in the column's definition to false.
   * Default value: false
   */
  addNewButton?: boolean;
  /**
   * Allows the dragging of tasks.
   * Default value: true
   */
  allowDrag?: boolean;
  /**
   * Allows the dropping of tasks.
   * Default value: true
   */
  allowDrop?: boolean;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Enables or disables auto load state from the browser's localStorage. Information about tasks and their position and selected state, filtering, sorting, collapsed columns, as well as the values of the properties taskActions, taskComments, taskDue, taskPriority, taskProgress, taskTags, and taskUserIcon is loaded.
   * Default value: true
   */
  autoLoadState?: boolean;
  /**
   * Enables or disables auto save state to the browser's localStorage. Information about tasks and their position and selected state, filtering, sorting, collapsed columns, as well as the values of the properties taskActions, taskComments, taskDue, taskPriority, taskProgress, taskTags, and taskUserIcon is saved.
   * Default value: false
   */
  autoSaveState?: boolean;
  /**
   * Allows collapsing the card content.
   * Default value: false
   */
  collapsible?: boolean;
  /**
   * Describes the columns properties.
   * Default value: 
   */
  columns?: KanbanColumn[];
  /**
   * Sets or gets the id of the current user. Has to correspond to the id of an item from the users property/array. Depending on the current user, different privileges are enabled. If no current user is set, privileges depend on the element's properties.
   * Default value: false
   */
  currentUser?: string | number;
  /**
   * Determines the data source to be visualized in the kanban board.
   * Default value: null
   */
  dataSource?: KanbanDataSource[];
  /**
   * Determines the offset of the drag feedback element from the mouse cursor when dragging tasks. The first member of the array is the horizontal offset and the second one - the vertical offset. If set to 'auto', the offset is based on the mouse position when the dragging started.
   * Default value: auto
   */
  dragOffset?: boolean;
  /**
   * Sets or gets whether tasks can be edited (including the assigning of users to tasks).
   * Default value: false
   */
  editable?: boolean;
  /**
   * Sets or gets the format string of the "Due date" label and the "Start date" and "Due date" editors.
   * Default value: "d"
   */
  formatStringDate?: string;
  /**
   * Sets or gets the format string of comments time stamp.
   * Default value: "MMM d, HH:mm"
   */
  formatStringTime?: string;
  /**
   * Sets or gets the header position. The header contains the Customize, Filter, Sort, and Search buttons.
   * Default value: none
   */
  headerPosition?: KanbanHeaderPosition;
  /**
   * Sets or gets the way column hierarchy is represented.
   * Default value: columns
   */
  hierarchy?: KanbanHierarchy;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
   * Default value:    * { 'en': { 'addFilter': '+ Add filter', 'and': 'And', 'apply': 'Apply', 'booleanFirst': '☐', 'booleanLast': '☑', 'cancel': 'Cancel', 'CONTAINS': 'contains', 'CONTAINS_CASE_SENSITIVE': 'contains (case sensitive)', 'dateFirst': '1', 'dateLast': '9', 'DOES_NOT_CONTAIN': 'does not contain', 'DOES_NOT_CONTAIN_CASE_SENSITIVE': 'does not contain (case sensitive)', 'EMPTY': 'empty', 'ENDS_WITH': 'ends with', 'ENDS_WITH_CASE_SENSITIVE': 'ends with (case sensitive)', 'EQUAL': 'equal', 'EQUAL_CASE_SENSITIVE': 'equal (case sensitive)', 'filter': 'Filter', 'filteredByMultiple': '"?', 'remove': 'Remove', 'removeSubtask': 'Remove subtask', 'send': 'Send', 'startDate': 'Start date', 'status': 'Status', 'swimlane': 'Swimlane', 'tags': 'Tags', 'text': 'Text', 'userId': 'User ID', 'userIcon': 'User icon' } }
   */
  messages?: any;
  /**
   * Determines selection mode.
   * Default value: zeroOrOne
   */
  selectionMode?: KanbanSelectionMode;
  /**
   * Describes the swimlanes in the kanban board. Sub-columns are not applicable when swimlanes are present.
   * Default value: 
   */
  swimlanes?: KanbanSwimlane[];
  /**
   * Sets or gets the index of the column at which to start the swimlanes.
   * Default value: 0
   */
  swimlanesFrom?: number;
  /**
   * Sets or gets the index of the column at which to end the swimlanes. By default, swimlanes end at the last column.
   * Default value: null
   */
  swimlanesTo?: number;
  /**
   * Sets or gets the allowed tags. If no tags are listed, all tags from the data source are allowed.
   * Default value: 
   */
  tags?: any[];
  /**
   * Toggles the visibility of the task actions icon.
   * Default value: false
   */
  taskActions?: boolean;
  /**
   * Toggles the visibility of the task comments icon.
   * Default value: false
   */
  taskComments?: boolean;
  /**
   * Toggles the visibility of the task due icon.
   * Default value: false
   */
  taskDue?: boolean;
  /**
   * Sets or gets whether tasks can be shown in all levels of column hierarchy or only on leaf columns.
   * Default value: false
   */
  taskPosition?: KanbanTaskPosition;
  /**
   * Toggles the visibility of the task priority icon (shown when priority is low or high).
   * Default value: true
   */
  taskPriority?: boolean;
  /**
   * Toggles the visibility of task progress bar and the completed sub-tasks label.
   * Default value: false
   */
  taskProgress?: boolean;
  /**
   * Toggles the visibility of task tags.
   * Default value: true
   */
  taskTags?: boolean;
  /**
   * Toggles the visibility of the task user icon.
   * Default value: true
   */
  taskUserIcon?: boolean;
  /**
   * Sets or gets a template to be applied to task text. Can be a string beginning with # and referencing the id of a template element on the page. Can also be a function that modifies the task text or the template itself. Finally, it can also be a string that will be parsed.
   * Default value: null
   */
  textTemplate?: any;
  /**
   * Determines whether the user list (as defined by the users property) will be shown when clicking the user icon. Only applicable if editable privileges are enabled.
   * Default value: false
   */
  userList?: boolean;
  /**
   * Toggles the visibility of the task user icon.
   * Default value: false
   */
  users?: KanbanUser[];
  /** 
   * This event is triggered when a task has been updated.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, task, value)
   *  oldValue - The old data of the task
   *  task - The HTML element of the task whose data has been changed
   *  value - The new data of the task
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the edit/prompt dialog is closed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the edit/prompt dialog is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a task is dropped somewhere in the DOM. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(container, data, item, items, originalEvent, previousContainer, target)
   *  container - the Kanban the dragged task(s) is dropped to
   *  data - an object with additional drag details
   *  item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
   *  items - an array with all dragged tasks
   *  originalEvent - the original, browser, event that initiates the drag operation
   *  previousContainer - the Kanban the dragged item(s) is dragged from
   *  target - the element the dragged tasks are dropped to
   */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user is dragging a task.
	* @param event. The custom event. Custom data event was created with: ev.detail(data, item, items, originalEvent)
   *  data - an object with additional drag details
   *  item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
   *  items - an array with all dragged tasks
   *  originalEvent - the original, browser, event that initiates the drag operation
   */
  onDragging?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user starts dragging task(s). The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(container, data, item, items, originalEvent, previousContainer)
   *  container - the Kanban the dragged task(s) is dragged from
   *  data - an object with additional drag details
   *  item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
   *  items - an array with all dragged tasks
   *  originalEvent - the original, browser, event that initiates the drag operation
   *  previousContainer - the Kanban the dragged item(s) is dragged from
   */
  onDragStart: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a filter has been applied.
	* @param event. The custom event.    */
  onFilter?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the edit/prompt dialog is opened.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the edit/prompt dialog is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(comment, purpose, task)
   *  comment - The comment that is about to be removed (if applicable).
   *  purpose - The purpose of the dialog to be opened - <em>'edit'</em> or <em>'prompt'</em>.
   *  task - The task that is about to be edited or removed (if applicable).
   */
  onOpening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when sorting has been applied.
	* @param event. The custom event.    */
  onSort?: ((this: any, ev: Event) => any) | null;
  /**
   * Adds filtering
   * @param {string[]} filters. Filter information
   * @param {string} operator?. Logical operator between the filters of different fields
   */
  addFilter(filters: string[], operator?: string): void;
  /**
   * Adds sorting
   * @param {[] | string} dataFields. The data field(s) to sort by
   * @param {[] | string} orderBy. The sort direction(s) to sort the data field(s) by
   */
  addSort(dataFields: [] | string, orderBy: [] | string): void;
  /**
   * Adds a task to a Kanban column. If no data is specified, an empty task is added to the first column.
   * @param {any} data?. An object containing the new task's data
   */
  addTask(data?: any): void;
  /**
   * Begins an edit operation
   * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
   */
  beginEdit(task: number | string | HTMLElement): void;
  /**
   * Ends the current edit operation and discards changes
   */
  cancelEdit(): void;
  /**
   * Closes any open header panel (drop down)
   */
  closePanel(): void;
  /**
   * Collapses a Kanban column.
   * @param {number | string} column. The index or dataField of the column to collapse
   */
  collapse(column: number | string): void;
  /**
   * Creates a copy of a task in the same column.
   * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
   */
  copyTask(task: number | string | HTMLElement): void;
  /**
   * Ends the current edit operation and saves changes
   */
  endEdit(): void;
  /**
   * Makes sure a task is visible by scrolling to it. If succcessful, the method returns the HTML element of the task.
   * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
   * @returns {HTMLElement}
   */
  ensureVisible(task: number | string | HTMLElement): HTMLElement;
  /**
   * Expands a Kanban column.
   * @param {number | string} column. The index or dataField of the column to expand
   */
  expand(column: number | string): void;
  /**
   * Expands all Kanban columns.
   */
  expandAll(): void;
  /**
   * Exports the Kanban's data.
   * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
   * @param {string} fileName?. The name of the file to export to
   * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
   * @returns {any}
   */
  exportData(dataFormat: string, fileName?: string, callback?: Function): any;
  /**
   * Gets the Kanban's state.
   * @returns 
   */
  getState(): { collapsed: {}, dataSource: [], filtering: { filters: [], operator: string }, selection: { selected: [], selectionStart: number | string, selectionInColumn: string, swimlane: string }, sorting: { dataFields: [], dataTypes: [], orderBy: [] }, tabs: [], visibility: { taskActions: boolean, taskComments: boolean, taskDue: boolean, taskPriority: boolean, taskProgress: boolean, taskTags: boolean, taskUserIcon: boolean } };
  /**
   * Loads the Kanban's state.
   * @param  state?. An object returned by one of the methods getState or saveState. If not passed, gets saved state from the browser's localStorage.
   */
  loadState(state?: { collapsed: {}, dataSource: [], filtering: { filters: [], operator: string }, selection: { selected: [], selectionStart?: number | string, selectionInColumn: string, swimlane: string }, sorting: { dataFields: [], dataTypes: [], orderBy: [] }, tabs: [], visibility: { taskActions: boolean, taskComments: boolean, taskDue: boolean, taskPriority: boolean, taskProgress: boolean, taskTags: boolean, taskUserIcon: boolean } }): void;
  /**
   * Moves a task to a different column.
   * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
   * @param {string} newStatus. The new status of the task (its new column's dataField)
   */
  moveTask(task: number | string | HTMLElement, newStatus: string): void;
  /**
   * Opens the "Customize tasks" header panel (drop down)
   */
  openCustomizePanel(): void;
  /**
   * Opens the "Filter" header panel (drop down)
   */
  openFilterPanel(): void;
  /**
   * Opens the "Sort" header panel (drop down)
   */
  openSortPanel(): void;
  /**
   * Removes filtering
   */
  removeFilter(): void;
  /**
   * Removes sorting
   */
  removeSort(): void;
  /**
   * Removes a task.
   * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
   * @param {boolean} prompt?. Whether or not to prompt the user before removing the task
   */
  removeTask(task: number | string | HTMLElement, prompt?: boolean): void;
  /**
   * Saves the Kanban's state to the browser's localStorage.
   */
  saveState(): void;
  /**
   * Updates a task.
   * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
   * @param {{}} newData. The new data to visualize in the task.
   */
  updateTask(task: number | string | HTMLElement, newData: {}): void;
}

export interface KanbanColumn {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets whether the column's button for adding tasks is visible. Works in conjunction with the Kanban property of the same name.
   * Default value: true
   */
  addNewButton?: boolean;
  /**
   * Sets or gets whether the column is collapsed.
   * Default value: false
   */
  collapsed?: boolean;
  /**
   * Sets or gets whether the column is collapsible. Works in conjunction with the Kanban property of the same name.
   * Default value: true
   */
  collapsible?: boolean;
  /**
   * Sets or gets the column's sub-columns. Sub-columns has the same properties as top-level columns.
   * Default value: null
   */
  columns?: { addNewButton: boolean, collapsed: string, collapsible: string, columns: [], dataField: string, label: string, orientation: string, selected: string }[];
  /**
   * Sets or gets the column's data source bound field. Corresponds to the status field in the data source.
   * Default value: ""
   */
  dataField?: string;
  /**
   * Sets or gets the text displayed in the column's header.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets whether the tasks in the column flow vertically or horizontally.
   * Default value: vertical
   */
  orientation?: KanbanColumnOrientation;
  /**
   * Sets or gets whether the column is selected. Only applicable to sub-columns when hierarchy is 'tabs'.
   * Default value: false
   */
  selected?: boolean;
}

export interface KanbanDataSource {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * The task's unique ID.
   * Default value: 
   */
  id?: string | number;
  /**
   * A list of sub-tasks.
   * Default value: null
   */
  checklist?: { completed: boolean, text: string }[];
  /**
   * A color used to highlight the task's card visually.
   * Default value: "null"
   */
  color?: string;
  /**
   * Comments about a task.
   * Default value: null
   */
  comments?: { text: string, time: Date, userId: string | number }[];
  /**
   * The task's due date.
   * Default value: null
   */
  dueDate?: Date;
  /**
   * The task's priority.
   * Default value: normal
   */
  priority?: KanbanDataSourcePriority;
  /**
   * The task's progress in percentages - a number from 0 to 100.
   * Default value: null
   */
  progress?: number;
  /**
   * The task's start date.
   * Default value: null
   */
  startDate?: Date;
  /**
   * The task's status. Has to correspond to the dataField of a column or sub-column from the columns property/array.
   * Default value: ""
   */
  status?: string;
  /**
   * The swimlane of the task. Has to correspond to the dataField of a swimlane from the swimlanes property/array, if it is defined.
   * Default value: "null"
   */
  swimlane?: string;
  /**
   * A comma-separated list of tags.
   * Default value: ""
   */
  tags?: string;
  /**
   * The text of the task.
   * Default value: ""
   */
  text?: string;
  /**
   * The ID of the user assigned to the task. Has to correspond to the id of an item from the users property/array.
   * Default value: null
   */
  userId?: string | number;
}

export interface KanbanSwimlane {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * The swimlane's color.
   * Default value: "null"
   */
  color?: string;
  /**
   * Sets or gets the swimlane's data source bound field. Corresponds to the swimlane field in the data source.
   * Default value: ""
   */
  dataField?: string;
  /**
   * Sets or gets the text displayed in the swimlane.
   * Default value: ""
   */
  label?: string;
}

export interface KanbanUser {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets whether the user has a privilege to add or copy tasks.
   * Default value: true
   */
  allowAdd?: boolean;
  /**
   * Sets whether the user has a privilege to add comments to tasks.
   * Default value: true
   */
  allowComment?: boolean;
  /**
   * Sets whether the user has a privilege to drag tasks. Works along with the property allowDrag.
   * Default value: true
   */
  allowDrag?: boolean;
  /**
   * Sets whether the user has a privilege to edit tasks. Works along with the property editable.
   * Default value: true
   */
  allowEdit?: boolean;
  /**
   * Sets whether the user has a privilege to remove tasks.
   * Default value: true
   */
  allowRemove?: boolean;
  /**
   * The user's unique ID. Corresponds to the userId field in the data source and the property currentUser.
   * Default value: null
   */
  id?: string | number;
  /**
   * A url to an image representing the user.
   * Default value: ""
   */
  image?: string;
  /**
   * The user's name as it will appear in the Users list and "Assigned to" editor.
   * Default value: ""
   */
  name?: string;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-kanban"): Kanban;
			querySelector(selectors: "smart-kanban"): Kanban | null;	
			querySelectorAll(selectors: "smart-kanban"): NodeListOf<Kanban>;
			getElementsByTagName(qualifiedName: "smart-kanban"): HTMLCollectionOf<Kanban>;
			getElementsByName(elementName: "smart-kanban"): NodeListOf<Kanban>;	
    }
}

/**Sets or gets whether the tasks in the column flow vertically or horizontally. */
export declare type KanbanColumnOrientation = 'vertical' | 'horizontal';
/**The task's priority. */
export declare type KanbanDataSourcePriority = 'low' | 'normal' | 'high';
/**Sets or gets the header position. The header contains the Customize, Filter, Sort, and Search buttons. */
export declare type KanbanHeaderPosition = 'none' | 'top' | 'bottom';
/**Sets or gets the way column hierarchy is represented. */
export declare type KanbanHierarchy = 'columns' | 'tabs';
/**Determines selection mode. */
export declare type KanbanSelectionMode = 'zeroOrOne' | 'zeroOrManyExtended';
/**Sets or gets whether tasks can be shown in all levels of column hierarchy or only on leaf columns. */
export declare type KanbanTaskPosition = 'all' | 'leaf';
