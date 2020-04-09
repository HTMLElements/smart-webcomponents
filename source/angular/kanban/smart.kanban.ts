import { Kanban } from './../index';
import { Animation, KanbanColumnOrientation, KanbanDataSourcePriority, KanbanHeaderPosition, KanbanHierarchy, KanbanSelectionMode, KanbanTaskPosition, KanbanColumn, KanbanDataSource, KanbanSwimlane, KanbanUser, ElementRenderMode} from './../index';
import { DataAdapter } from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, KanbanColumnOrientation, KanbanDataSourcePriority, KanbanHeaderPosition, KanbanHierarchy, KanbanSelectionMode, KanbanTaskPosition, KanbanColumn, KanbanDataSource, KanbanSwimlane, KanbanUser, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Kanban } from './../index';
export { DataAdapter } from './../index';


@Directive({
	selector: 'smart-kanban, [smart-kanban]'
})

export class KanbanComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<Kanban>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Kanban;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Kanban;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Kanban>document.createElement('smart-kanban');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Toggles the visibility of the column buttons for adding tasks. A particular button can be disabled by setting addNewButton in the column's definition to false. */
	@Input()
	get addNewButton(): boolean {
		return this.nativeElement ? this.nativeElement.addNewButton : undefined;
	}
	set addNewButton(value: boolean) {
		this.nativeElement ? this.nativeElement.addNewButton = value : undefined;
	}

	/** @description Allows the dragging of tasks. */
	@Input()
	get allowDrag(): boolean {
		return this.nativeElement ? this.nativeElement.allowDrag : undefined;
	}
	set allowDrag(value: boolean) {
		this.nativeElement ? this.nativeElement.allowDrag = value : undefined;
	}

	/** @description Allows the dropping of tasks. */
	@Input()
	get allowDrop(): boolean {
		return this.nativeElement ? this.nativeElement.allowDrop : undefined;
	}
	set allowDrop(value: boolean) {
		this.nativeElement ? this.nativeElement.allowDrop = value : undefined;
	}

	/** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
	@Input()
	get animation(): Animation {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation) {
		this.nativeElement ? this.nativeElement.animation = value : undefined;
	}

	/** @description Enables or disables auto load state from the browser's localStorage. Information about tasks and their position and selected state, filtering, sorting, collapsed columns, as well as the values of the properties taskActions, taskComments, taskDue, taskPriority, taskProgress, taskTags, and taskUserIcon is loaded. */
	@Input()
	get autoLoadState(): boolean {
		return this.nativeElement ? this.nativeElement.autoLoadState : undefined;
	}
	set autoLoadState(value: boolean) {
		this.nativeElement ? this.nativeElement.autoLoadState = value : undefined;
	}

	/** @description Enables or disables auto save state to the browser's localStorage. Information about tasks and their position and selected state, filtering, sorting, collapsed columns, as well as the values of the properties taskActions, taskComments, taskDue, taskPriority, taskProgress, taskTags, and taskUserIcon is saved. */
	@Input()
	get autoSaveState(): boolean {
		return this.nativeElement ? this.nativeElement.autoSaveState : undefined;
	}
	set autoSaveState(value: boolean) {
		this.nativeElement ? this.nativeElement.autoSaveState = value : undefined;
	}

	/** @description Allows collapsing the card content. */
	@Input()
	get collapsible(): boolean {
		return this.nativeElement ? this.nativeElement.collapsible : undefined;
	}
	set collapsible(value: boolean) {
		this.nativeElement ? this.nativeElement.collapsible = value : undefined;
	}

	/** @description Describes the columns properties. */
	@Input()
	get columns(): KanbanColumn[] {
		return this.nativeElement ? this.nativeElement.columns : undefined;
	}
	set columns(value: KanbanColumn[]) {
		this.nativeElement ? this.nativeElement.columns = value : undefined;
	}

	/** @description Sets or gets the id of the current user. Has to correspond to the id of an item from the users property/array. Depending on the current user, different privileges are enabled. If no current user is set, privileges depend on the element's properties. */
	@Input()
	get currentUser(): string | number {
		return this.nativeElement ? this.nativeElement.currentUser : undefined;
	}
	set currentUser(value: string | number) {
		this.nativeElement ? this.nativeElement.currentUser = value : undefined;
	}

	/** @description Determines the data source to be visualized in the kanban board. */
	@Input()
	get dataSource(): KanbanDataSource[] {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: KanbanDataSource[]) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Determines the offset of the drag feedback element from the mouse cursor when dragging tasks. The first member of the array is the horizontal offset and the second one - the vertical offset. If set to 'auto', the offset is based on the mouse position when the dragging started. */
	@Input()
	get dragOffset(): boolean {
		return this.nativeElement ? this.nativeElement.dragOffset : undefined;
	}
	set dragOffset(value: boolean) {
		this.nativeElement ? this.nativeElement.dragOffset = value : undefined;
	}

	/** @description Sets or gets whether tasks can be edited (including the assigning of users to tasks). */
	@Input()
	get editable(): boolean {
		return this.nativeElement ? this.nativeElement.editable : undefined;
	}
	set editable(value: boolean) {
		this.nativeElement ? this.nativeElement.editable = value : undefined;
	}

	/** @description Sets or gets the format string of the "Due date" label and the "Start date" and "Due date" editors. */
	@Input()
	get formatStringDate(): string {
		return this.nativeElement ? this.nativeElement.formatStringDate : undefined;
	}
	set formatStringDate(value: string) {
		this.nativeElement ? this.nativeElement.formatStringDate = value : undefined;
	}

	/** @description Sets or gets the format string of comments time stamp. */
	@Input()
	get formatStringTime(): string {
		return this.nativeElement ? this.nativeElement.formatStringTime : undefined;
	}
	set formatStringTime(value: string) {
		this.nativeElement ? this.nativeElement.formatStringTime = value : undefined;
	}

	/** @description Sets or gets the header position. The header contains the Customize, Filter, Sort, and Search buttons. */
	@Input()
	get headerPosition(): KanbanHeaderPosition {
		return this.nativeElement ? this.nativeElement.headerPosition : undefined;
	}
	set headerPosition(value: KanbanHeaderPosition) {
		this.nativeElement ? this.nativeElement.headerPosition = value : undefined;
	}

	/** @description Sets or gets the way column hierarchy is represented. */
	@Input()
	get hierarchy(): KanbanHierarchy {
		return this.nativeElement ? this.nativeElement.hierarchy : undefined;
	}
	set hierarchy(value: KanbanHierarchy) {
		this.nativeElement ? this.nativeElement.hierarchy = value : undefined;
	}

	/** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Determines selection mode. */
	@Input()
	get selectionMode(): KanbanSelectionMode {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value: KanbanSelectionMode) {
		this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
	}

	/** @description Describes the swimlanes in the kanban board. Sub-columns are not applicable when swimlanes are present. */
	@Input()
	get swimlanes(): KanbanSwimlane[] {
		return this.nativeElement ? this.nativeElement.swimlanes : undefined;
	}
	set swimlanes(value: KanbanSwimlane[]) {
		this.nativeElement ? this.nativeElement.swimlanes = value : undefined;
	}

	/** @description Sets or gets the index of the column at which to start the swimlanes. */
	@Input()
	get swimlanesFrom(): number {
		return this.nativeElement ? this.nativeElement.swimlanesFrom : undefined;
	}
	set swimlanesFrom(value: number) {
		this.nativeElement ? this.nativeElement.swimlanesFrom = value : undefined;
	}

	/** @description Sets or gets the index of the column at which to end the swimlanes. By default, swimlanes end at the last column. */
	@Input()
	get swimlanesTo(): number {
		return this.nativeElement ? this.nativeElement.swimlanesTo : undefined;
	}
	set swimlanesTo(value: number) {
		this.nativeElement ? this.nativeElement.swimlanesTo = value : undefined;
	}

	/** @description Sets or gets the allowed tags. If no tags are listed, all tags from the data source are allowed. */
	@Input()
	get tags(): any[] {
		return this.nativeElement ? this.nativeElement.tags : undefined;
	}
	set tags(value: any[]) {
		this.nativeElement ? this.nativeElement.tags = value : undefined;
	}

	/** @description Toggles the visibility of the task actions icon. */
	@Input()
	get taskActions(): boolean {
		return this.nativeElement ? this.nativeElement.taskActions : undefined;
	}
	set taskActions(value: boolean) {
		this.nativeElement ? this.nativeElement.taskActions = value : undefined;
	}

	/** @description Toggles the visibility of the task comments icon. */
	@Input()
	get taskComments(): boolean {
		return this.nativeElement ? this.nativeElement.taskComments : undefined;
	}
	set taskComments(value: boolean) {
		this.nativeElement ? this.nativeElement.taskComments = value : undefined;
	}

	/** @description Toggles the visibility of the task due icon. */
	@Input()
	get taskDue(): boolean {
		return this.nativeElement ? this.nativeElement.taskDue : undefined;
	}
	set taskDue(value: boolean) {
		this.nativeElement ? this.nativeElement.taskDue = value : undefined;
	}

	/** @description Sets or gets whether tasks can be shown in all levels of column hierarchy or only on leaf columns. */
	@Input()
	get taskPosition(): KanbanTaskPosition {
		return this.nativeElement ? this.nativeElement.taskPosition : undefined;
	}
	set taskPosition(value: KanbanTaskPosition) {
		this.nativeElement ? this.nativeElement.taskPosition = value : undefined;
	}

	/** @description Toggles the visibility of the task priority icon (shown when priority is low or high). */
	@Input()
	get taskPriority(): boolean {
		return this.nativeElement ? this.nativeElement.taskPriority : undefined;
	}
	set taskPriority(value: boolean) {
		this.nativeElement ? this.nativeElement.taskPriority = value : undefined;
	}

	/** @description Toggles the visibility of task progress bar and the completed sub-tasks label. */
	@Input()
	get taskProgress(): boolean {
		return this.nativeElement ? this.nativeElement.taskProgress : undefined;
	}
	set taskProgress(value: boolean) {
		this.nativeElement ? this.nativeElement.taskProgress = value : undefined;
	}

	/** @description Toggles the visibility of task tags. */
	@Input()
	get taskTags(): boolean {
		return this.nativeElement ? this.nativeElement.taskTags : undefined;
	}
	set taskTags(value: boolean) {
		this.nativeElement ? this.nativeElement.taskTags = value : undefined;
	}

	/** @description Toggles the visibility of the task user icon. */
	@Input()
	get taskUserIcon(): boolean {
		return this.nativeElement ? this.nativeElement.taskUserIcon : undefined;
	}
	set taskUserIcon(value: boolean) {
		this.nativeElement ? this.nativeElement.taskUserIcon = value : undefined;
	}

	/** @description Sets or gets a template to be applied to task text. Can be a string beginning with # and referencing the id of a template element on the page. Can also be a function that modifies the task text or the template itself. Finally, it can also be a string that will be parsed. */
	@Input()
	get textTemplate(): any {
		return this.nativeElement ? this.nativeElement.textTemplate : undefined;
	}
	set textTemplate(value: any) {
		this.nativeElement ? this.nativeElement.textTemplate = value : undefined;
	}

	/** @description Determines whether the user list (as defined by the users property) will be shown when clicking the user icon. Only applicable if editable privileges are enabled. */
	@Input()
	get userList(): boolean {
		return this.nativeElement ? this.nativeElement.userList : undefined;
	}
	set userList(value: boolean) {
		this.nativeElement ? this.nativeElement.userList = value : undefined;
	}

	/** @description Toggles the visibility of the task user icon. */
	@Input()
	get users(): KanbanUser[] {
		return this.nativeElement ? this.nativeElement.users : undefined;
	}
	set users(value: KanbanUser[]) {
		this.nativeElement ? this.nativeElement.users = value : undefined;
	}

	/** @description This event is triggered when a task has been updated.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	task, 	value)
	*   oldValue - The old data of the task
	*   task - The HTML element of the task whose data has been changed
	*   value - The new data of the task
	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the edit/prompt dialog is closed.
	*  @param event. The custom event. 	*/
	@Output() onClose: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the edit/prompt dialog is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	@Output() onClosing: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a task is dropped somewhere in the DOM. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer, 	target)
	*   container - the Kanban the dragged task(s) is dropped to
	*   data - an object with additional drag details
	*   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
	*   items - an array with all dragged tasks
	*   originalEvent - the original, browser, event that initiates the drag operation
	*   previousContainer - the Kanban the dragged item(s) is dragged from
	*   target - the element the dragged tasks are dropped to
	*/
	@Output() onDragEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the user is dragging a task.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	data, 	item, 	items, 	originalEvent)
	*   data - an object with additional drag details
	*   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
	*   items - an array with all dragged tasks
	*   originalEvent - the original, browser, event that initiates the drag operation
	*/
	@Output() onDragging: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the user starts dragging task(s). The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer)
	*   container - the Kanban the dragged task(s) is dragged from
	*   data - an object with additional drag details
	*   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
	*   items - an array with all dragged tasks
	*   originalEvent - the original, browser, event that initiates the drag operation
	*   previousContainer - the Kanban the dragged item(s) is dragged from
	*/
	@Output() onDragStart: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a filter has been applied.
	*  @param event. The custom event. 	*/
	@Output() onFilter: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the edit/prompt dialog is opened.
	*  @param event. The custom event. 	*/
	@Output() onOpen: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the edit/prompt dialog is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	comment, 	purpose, 	task)
	*   comment - The comment that is about to be removed (if applicable).
	*   purpose - The purpose of the dialog to be opened - <em>'edit'</em> or <em>'prompt'</em>.
	*   task - The task that is about to be edited or removed (if applicable).
	*/
	@Output() onOpening: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when sorting has been applied.
	*  @param event. The custom event. 	*/
	@Output() onSort: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Adds filtering 
	* @param {string[]} filters. Filter information
	* @param {string} operator?. Logical operator between the filters of different fields
	*/
    public addFilter(filters: string[], operator?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addFilter(filters, operator);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addFilter(filters, operator);
            });
        }
    }

	/** @description Adds sorting 
	* @param {[] | string} dataFields. The data field(s) to sort by
	* @param {[] | string} orderBy. The sort direction(s) to sort the data field(s) by
	*/
    public addSort(dataFields: [] | string, orderBy: [] | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addSort(dataFields, orderBy);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addSort(dataFields, orderBy);
            });
        }
    }

	/** @description Adds a task to a Kanban column. If no data is specified, an empty task is added to the first column. 
	* @param {any} data?. An object containing the new task's data
	*/
    public addTask(data?: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addTask(data);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addTask(data);
            });
        }
    }

	/** @description Begins an edit operation 
	* @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
	*/
    public beginEdit(task: number | string | HTMLElement): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginEdit(task);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.beginEdit(task);
            });
        }
    }

	/** @description Ends the current edit operation and discards changes 
	*/
    public cancelEdit(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.cancelEdit();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.cancelEdit();
            });
        }
    }

	/** @description Closes any open header panel (drop down) 
	*/
    public closePanel(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closePanel();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closePanel();
            });
        }
    }

	/** @description Collapses a Kanban column. 
	* @param {number | string} column. The index or dataField of the column to collapse
	*/
    public collapse(column: number | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(column);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse(column);
            });
        }
    }

	/** @description Creates a copy of a task in the same column. 
	* @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
	*/
    public copyTask(task: number | string | HTMLElement): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.copyTask(task);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.copyTask(task);
            });
        }
    }

	/** @description Ends the current edit operation and saves changes 
	*/
    public endEdit(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.endEdit();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.endEdit();
            });
        }
    }

	/** @description Makes sure a task is visible by scrolling to it. If succcessful, the method returns the HTML element of the task. 
	* @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
	* @returns {HTMLElement}
  */
	public async ensureVisible(task): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.ensureVisible(task);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Expands a Kanban column. 
	* @param {number | string} column. The index or dataField of the column to expand
	*/
    public expand(column: number | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand(column);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expand(column);
            });
        }
    }

	/** @description Expands all Kanban columns. 
	*/
    public expandAll(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandAll();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandAll();
            });
        }
    }

	/** @description Exports the Kanban's data. 
	* @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
	* @param {string} fileName?. The name of the file to export to
	* @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
	* @returns {any}
  */
	public async exportData(dataFormat, fileName?, callback?): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.exportData(dataFormat, fileName, callback);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the Kanban's state. 
	* @returns {{ collapsed: {}, dataSource: [], filtering: { filters: [], operator: string }, selection: { selected: [], selectionStart: number | string, selectionInColumn: string, swimlane: string }, sorting: { dataFields: [], dataTypes: [], orderBy: [] }, tabs: [], visibility: { taskActions: boolean, taskComments: boolean, taskDue: boolean, taskPriority: boolean, taskProgress: boolean, taskTags: boolean, taskUserIcon: boolean } }}
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

	/** @description Loads the Kanban's state. 
	* @param {{ collapsed: {}, dataSource: [], filtering: { filters: [], operator: string }, selection: { selected: [], selectionStart?: number | string, selectionInColumn: string, swimlane: string }, sorting: { dataFields: [], dataTypes: [], orderBy: [] }, tabs: [], visibility: { taskActions: boolean, taskComments: boolean, taskDue: boolean, taskPriority: boolean, taskProgress: boolean, taskTags: boolean, taskUserIcon: boolean } }} state?. An object returned by one of the methods getState or saveState. If not passed, gets saved state from the browser's localStorage.
	*/
    public loadState(state?: { collapsed: {}, dataSource: [], filtering: { filters: [], operator: string }, selection: { selected: [], selectionStart?: number | string, selectionInColumn: string, swimlane: string }, sorting: { dataFields: [], dataTypes: [], orderBy: [] }, tabs: [], visibility: { taskActions: boolean, taskComments: boolean, taskDue: boolean, taskPriority: boolean, taskProgress: boolean, taskTags: boolean, taskUserIcon: boolean } }): void {
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

	/** @description Moves a task to a different column. 
	* @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
	* @param {string} newStatus. The new status of the task (its new column's dataField)
	*/
    public moveTask(task: number | string | HTMLElement, newStatus: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.moveTask(task, newStatus);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.moveTask(task, newStatus);
            });
        }
    }

	/** @description Opens the "Customize tasks" header panel (drop down) 
	*/
    public openCustomizePanel(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openCustomizePanel();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openCustomizePanel();
            });
        }
    }

	/** @description Opens the "Filter" header panel (drop down) 
	*/
    public openFilterPanel(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openFilterPanel();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openFilterPanel();
            });
        }
    }

	/** @description Opens the "Sort" header panel (drop down) 
	*/
    public openSortPanel(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openSortPanel();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openSortPanel();
            });
        }
    }

	/** @description Removes filtering 
	*/
    public removeFilter(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeFilter();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeFilter();
            });
        }
    }

	/** @description Removes sorting 
	*/
    public removeSort(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeSort();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeSort();
            });
        }
    }

	/** @description Removes a task. 
	* @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
	* @param {boolean} prompt?. Whether or not to prompt the user before removing the task
	*/
    public removeTask(task: number | string | HTMLElement, prompt?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeTask(task, prompt);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeTask(task, prompt);
            });
        }
    }

	/** @description Saves the Kanban's state to the browser's localStorage. 
	*/
    public saveState(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveState();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveState();
            });
        }
    }

	/** @description Updates a task. 
	* @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
	* @param {{}} newData. The new data to visualize in the task.
	*/
    public updateTask(task: number | string | HTMLElement, newData: {}): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateTask(task, newData);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateTask(task, newData);
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

		that.eventHandlers['closeHandler'] = (event: CustomEvent) => { that.onClose.emit(event); }
		that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);

		that.eventHandlers['closingHandler'] = (event: CustomEvent) => { that.onClosing.emit(event); }
		that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);

		that.eventHandlers['dragEndHandler'] = (event: CustomEvent) => { that.onDragEnd.emit(event); }
		that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);

		that.eventHandlers['draggingHandler'] = (event: CustomEvent) => { that.onDragging.emit(event); }
		that.nativeElement.addEventListener('dragging', that.eventHandlers['draggingHandler']);

		that.eventHandlers['dragStartHandler'] = (event: CustomEvent) => { that.onDragStart.emit(event); }
		that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);

		that.eventHandlers['filterHandler'] = (event: CustomEvent) => { that.onFilter.emit(event); }
		that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);

		that.eventHandlers['openHandler'] = (event: CustomEvent) => { that.onOpen.emit(event); }
		that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);

		that.eventHandlers['openingHandler'] = (event: CustomEvent) => { that.onOpening.emit(event); }
		that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);

		that.eventHandlers['sortHandler'] = (event: CustomEvent) => { that.onSort.emit(event); }
		that.nativeElement.addEventListener('sort', that.eventHandlers['sortHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['changeHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
		}

		if (that.eventHandlers['closeHandler']) {
			that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
		}

		if (that.eventHandlers['closingHandler']) {
			that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
		}

		if (that.eventHandlers['dragEndHandler']) {
			that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
		}

		if (that.eventHandlers['draggingHandler']) {
			that.nativeElement.removeEventListener('dragging', that.eventHandlers['draggingHandler']);
		}

		if (that.eventHandlers['dragStartHandler']) {
			that.nativeElement.removeEventListener('dragStart', that.eventHandlers['dragStartHandler']);
		}

		if (that.eventHandlers['filterHandler']) {
			that.nativeElement.onfilterHandler = null;
		}

		if (that.eventHandlers['openHandler']) {
			that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
		}

		if (that.eventHandlers['openingHandler']) {
			that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
		}

		if (that.eventHandlers['sortHandler']) {
			that.nativeElement.removeEventListener('sort', that.eventHandlers['sortHandler']);
		}

	}
}
