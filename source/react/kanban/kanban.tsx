import React from "react";
import { KanbanProperties } from "./../../index";
import { Animation, KanbanColumnOrientation, KanbanDataSourcePriority, KanbanHeaderPosition, KanbanHierarchy, KanbanSelectionMode, KanbanTaskPosition, KanbanColumn, KanbanDataSource, KanbanSwimlane, KanbanUser} from './../../index';
import { DataAdapter } from './../../index';
export { KanbanProperties } from "./../../index";
export { Animation, KanbanColumnOrientation, KanbanDataSourcePriority, KanbanHeaderPosition, KanbanHierarchy, KanbanSelectionMode, KanbanTaskPosition, KanbanColumn, KanbanDataSource, KanbanSwimlane, KanbanUser} from './../../index';
export { DataAdapter } from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface KanbanProps extends KanbanProperties {
    className?: string;
    style?: React.CSSProperties;

	onChange?: ((event?: Event) => void) | undefined;
	onClose?: ((event?: Event) => void) | undefined;
	onClosing?: ((event?: Event) => void) | undefined;
	onDragEnd?: ((event?: Event) => void) | undefined;
	onDragging?: ((event?: Event) => void) | undefined;
	onDragStart?: ((event?: Event) => void) | undefined;
	onFilter?: ((event?: Event) => void) | undefined;
	onOpen?: ((event?: Event) => void) | undefined;
	onOpening?: ((event?: Event) => void) | undefined;
	onSort?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Kanban represents a kanban board that visually depicts work at various stages of a process using cards to represent tasks and columns to represent each stage of the process.
*/
export class Kanban extends React.Component<React.HTMLAttributes<Element> & KanbanProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Kanban' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Toggles the visibility of the column buttons for adding tasks. A particular button can be disabled by setting addNewButton in the column's definition to false.
	*	Property type: boolean
	*/
	get addNewButton(): boolean  {
		return this.nativeElement ? this.nativeElement.addNewButton : undefined;
	}
	set addNewButton(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.addNewButton = value;
		}
	}

	/** Allows the dragging of tasks.
	*	Property type: boolean
	*/
	get allowDrag(): boolean  {
		return this.nativeElement ? this.nativeElement.allowDrag : undefined;
	}
	set allowDrag(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.allowDrag = value;
		}
	}

	/** Allows the dropping of tasks.
	*	Property type: boolean
	*/
	get allowDrop(): boolean  {
		return this.nativeElement ? this.nativeElement.allowDrop : undefined;
	}
	set allowDrop(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.allowDrop = value;
		}
	}

	/** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
	*	Property type: Animation
	*/
	get animation(): Animation  {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation) {
		if (this.nativeElement) {
			this.nativeElement.animation = value;
		}
	}

	/** Enables or disables auto load state from the browser's localStorage. Information about tasks and their position and selected state, filtering, sorting, collapsed columns, as well as the values of the properties taskActions, taskComments, taskDue, taskPriority, taskProgress, taskTags, and taskUserIcon is loaded.
	*	Property type: boolean
	*/
	get autoLoadState(): boolean  {
		return this.nativeElement ? this.nativeElement.autoLoadState : undefined;
	}
	set autoLoadState(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.autoLoadState = value;
		}
	}

	/** Enables or disables auto save state to the browser's localStorage. Information about tasks and their position and selected state, filtering, sorting, collapsed columns, as well as the values of the properties taskActions, taskComments, taskDue, taskPriority, taskProgress, taskTags, and taskUserIcon is saved.
	*	Property type: boolean
	*/
	get autoSaveState(): boolean  {
		return this.nativeElement ? this.nativeElement.autoSaveState : undefined;
	}
	set autoSaveState(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.autoSaveState = value;
		}
	}

	/** Allows collapsing the card content.
	*	Property type: boolean
	*/
	get collapsible(): boolean  {
		return this.nativeElement ? this.nativeElement.collapsible : undefined;
	}
	set collapsible(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.collapsible = value;
		}
	}

	/** Describes the columns properties.
	*	Property type: KanbanColumn[]
	*/
	get columns(): KanbanColumn[]  {
		return this.nativeElement ? this.nativeElement.columns : undefined;
	}
	set columns(value: KanbanColumn[]) {
		if (this.nativeElement) {
			this.nativeElement.columns = value;
		}
	}

	/** Sets or gets the id of the current user. Has to correspond to the id of an item from the users property/array. Depending on the current user, different privileges are enabled. If no current user is set, privileges depend on the element's properties.
	*	Property type: string | number
	*/
	get currentUser(): string | number  {
		return this.nativeElement ? this.nativeElement.currentUser : undefined;
	}
	set currentUser(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.currentUser = value;
		}
	}

	/** Determines the data source to be visualized in the kanban board.
	*	Property type: KanbanDataSource[]
	*/
	get dataSource(): KanbanDataSource[]  {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: KanbanDataSource[]) {
		if (this.nativeElement) {
			this.nativeElement.dataSource = value;
		}
	}

	/** Determines the offset of the drag feedback element from the mouse cursor when dragging tasks. The first member of the array is the horizontal offset and the second one - the vertical offset. If set to 'auto', the offset is based on the mouse position when the dragging started.
	*	Property type: boolean
	*/
	get dragOffset(): boolean  {
		return this.nativeElement ? this.nativeElement.dragOffset : undefined;
	}
	set dragOffset(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.dragOffset = value;
		}
	}

	/** Sets or gets whether tasks can be edited (including the assigning of users to tasks).
	*	Property type: boolean
	*/
	get editable(): boolean  {
		return this.nativeElement ? this.nativeElement.editable : undefined;
	}
	set editable(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.editable = value;
		}
	}

	/** Sets or gets the format string of the "Due date" label and the "Start date" and "Due date" editors.
	*	Property type: string
	*/
	get formatStringDate(): string  {
		return this.nativeElement ? this.nativeElement.formatStringDate : undefined;
	}
	set formatStringDate(value: string) {
		if (this.nativeElement) {
			this.nativeElement.formatStringDate = value;
		}
	}

	/** Sets or gets the format string of comments time stamp.
	*	Property type: string
	*/
	get formatStringTime(): string  {
		return this.nativeElement ? this.nativeElement.formatStringTime : undefined;
	}
	set formatStringTime(value: string) {
		if (this.nativeElement) {
			this.nativeElement.formatStringTime = value;
		}
	}

	/** Sets or gets the header position. The header contains the Customize, Filter, Sort, and Search buttons.
	*	Property type: KanbanHeaderPosition
	*/
	get headerPosition(): KanbanHeaderPosition  {
		return this.nativeElement ? this.nativeElement.headerPosition : undefined;
	}
	set headerPosition(value: KanbanHeaderPosition) {
		if (this.nativeElement) {
			this.nativeElement.headerPosition = value;
		}
	}

	/** Sets or gets the way column hierarchy is represented.
	*	Property type: KanbanHierarchy
	*/
	get hierarchy(): KanbanHierarchy  {
		return this.nativeElement ? this.nativeElement.hierarchy : undefined;
	}
	set hierarchy(value: KanbanHierarchy) {
		if (this.nativeElement) {
			this.nativeElement.hierarchy = value;
		}
	}

	/** Sets or gets the locale. Used in conjunction with the property messages.
	*	Property type: string
	*/
	get locale(): string  {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		if (this.nativeElement) {
			this.nativeElement.locale = value;
		}
	}

	/** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
	*	Property type: any
	*/
	get messages(): any  {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		if (this.nativeElement) {
			this.nativeElement.messages = value;
		}
	}

	/** Determines selection mode.
	*	Property type: KanbanSelectionMode
	*/
	get selectionMode(): KanbanSelectionMode  {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value: KanbanSelectionMode) {
		if (this.nativeElement) {
			this.nativeElement.selectionMode = value;
		}
	}

	/** Describes the swimlanes in the kanban board. Sub-columns are not applicable when swimlanes are present.
	*	Property type: KanbanSwimlane[]
	*/
	get swimlanes(): KanbanSwimlane[]  {
		return this.nativeElement ? this.nativeElement.swimlanes : undefined;
	}
	set swimlanes(value: KanbanSwimlane[]) {
		if (this.nativeElement) {
			this.nativeElement.swimlanes = value;
		}
	}

	/** Sets or gets the index of the column at which to start the swimlanes.
	*	Property type: number
	*/
	get swimlanesFrom(): number  {
		return this.nativeElement ? this.nativeElement.swimlanesFrom : undefined;
	}
	set swimlanesFrom(value: number) {
		if (this.nativeElement) {
			this.nativeElement.swimlanesFrom = value;
		}
	}

	/** Sets or gets the index of the column at which to end the swimlanes. By default, swimlanes end at the last column.
	*	Property type: number
	*/
	get swimlanesTo(): number  {
		return this.nativeElement ? this.nativeElement.swimlanesTo : undefined;
	}
	set swimlanesTo(value: number) {
		if (this.nativeElement) {
			this.nativeElement.swimlanesTo = value;
		}
	}

	/** Sets or gets the allowed tags. If no tags are listed, all tags from the data source are allowed.
	*	Property type: any[]
	*/
	get tags(): any[]  {
		return this.nativeElement ? this.nativeElement.tags : undefined;
	}
	set tags(value: any[]) {
		if (this.nativeElement) {
			this.nativeElement.tags = value;
		}
	}

	/** Toggles the visibility of the task actions icon.
	*	Property type: boolean
	*/
	get taskActions(): boolean  {
		return this.nativeElement ? this.nativeElement.taskActions : undefined;
	}
	set taskActions(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.taskActions = value;
		}
	}

	/** Toggles the visibility of the task comments icon.
	*	Property type: boolean
	*/
	get taskComments(): boolean  {
		return this.nativeElement ? this.nativeElement.taskComments : undefined;
	}
	set taskComments(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.taskComments = value;
		}
	}

	/** Toggles the visibility of the task due icon.
	*	Property type: boolean
	*/
	get taskDue(): boolean  {
		return this.nativeElement ? this.nativeElement.taskDue : undefined;
	}
	set taskDue(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.taskDue = value;
		}
	}

	/** Sets or gets whether tasks can be shown in all levels of column hierarchy or only on leaf columns.
	*	Property type: KanbanTaskPosition
	*/
	get taskPosition(): KanbanTaskPosition  {
		return this.nativeElement ? this.nativeElement.taskPosition : undefined;
	}
	set taskPosition(value: KanbanTaskPosition) {
		if (this.nativeElement) {
			this.nativeElement.taskPosition = value;
		}
	}

	/** Toggles the visibility of the task priority icon (shown when priority is low or high).
	*	Property type: boolean
	*/
	get taskPriority(): boolean  {
		return this.nativeElement ? this.nativeElement.taskPriority : undefined;
	}
	set taskPriority(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.taskPriority = value;
		}
	}

	/** Toggles the visibility of task progress bar and the completed sub-tasks label.
	*	Property type: boolean
	*/
	get taskProgress(): boolean  {
		return this.nativeElement ? this.nativeElement.taskProgress : undefined;
	}
	set taskProgress(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.taskProgress = value;
		}
	}

	/** Toggles the visibility of task tags.
	*	Property type: boolean
	*/
	get taskTags(): boolean  {
		return this.nativeElement ? this.nativeElement.taskTags : undefined;
	}
	set taskTags(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.taskTags = value;
		}
	}

	/** Toggles the visibility of the task user icon.
	*	Property type: boolean
	*/
	get taskUserIcon(): boolean  {
		return this.nativeElement ? this.nativeElement.taskUserIcon : undefined;
	}
	set taskUserIcon(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.taskUserIcon = value;
		}
	}

	/** Sets or gets a template to be applied to task text. Can be a string beginning with # and referencing the id of a template element on the page. Can also be a function that modifies the task text or the template itself. Finally, it can also be a string that will be parsed.
	*	Property type: any
	*/
	get textTemplate(): any  {
		return this.nativeElement ? this.nativeElement.textTemplate : undefined;
	}
	set textTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.textTemplate = value;
		}
	}

	/** Determines whether the user list (as defined by the users property) will be shown when clicking the user icon. Only applicable if editable privileges are enabled.
	*	Property type: boolean
	*/
	get userList(): boolean  {
		return this.nativeElement ? this.nativeElement.userList : undefined;
	}
	set userList(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.userList = value;
		}
	}

	/** Determines the users Kanban tasks can be assigned to and their characteristics and privileges.
	*	Property type: KanbanUser[]
	*/
	get users(): KanbanUser[]  {
		return this.nativeElement ? this.nativeElement.users : undefined;
	}
	set users(value: KanbanUser[]) {
		if (this.nativeElement) {
			this.nativeElement.users = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["addNewButton","allowDrag","allowDrop","animation","autoLoadState","autoSaveState","collapsible","columns","currentUser","dataSource","dragOffset","editable","formatStringDate","formatStringTime","headerPosition","hierarchy","locale","messages","selectionMode","swimlanes","swimlanesFrom","swimlanesTo","tags","taskActions","taskComments","taskDue","taskPosition","taskPriority","taskProgress","taskTags","taskUserIcon","textTemplate","userList","users"];
	}
	/**  This event is triggered when a task has been updated.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	task, 	value)
	*   oldValue - The old data of the task
	*   task - The HTML element of the task whose data has been changed
	*   value - The new data of the task
	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the edit/prompt dialog is closed.
	*  @param event. The custom event. 	*/
	onClose?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the edit/prompt dialog is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	onClosing?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a task is dropped somewhere in the DOM. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer, 	target)
	*   container - the Kanban the dragged task(s) is dropped to
	*   data - an object with additional drag details
	*   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
	*   items - an array with all dragged tasks
	*   originalEvent - the original, browser, event that initiates the drag operation
	*   previousContainer - the Kanban the dragged item(s) is dragged from
	*   target - the element the dragged tasks are dropped to
	*/
	onDragEnd?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user is dragging a task.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	data, 	item, 	items, 	originalEvent)
	*   data - an object with additional drag details
	*   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
	*   items - an array with all dragged tasks
	*   originalEvent - the original, browser, event that initiates the drag operation
	*/
	onDragging?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user starts dragging task(s). The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer)
	*   container - the Kanban the dragged task(s) is dragged from
	*   data - an object with additional drag details
	*   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
	*   items - an array with all dragged tasks
	*   originalEvent - the original, browser, event that initiates the drag operation
	*   previousContainer - the Kanban the dragged item(s) is dragged from
	*/
	onDragStart?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a filter has been applied.
	*  @param event. The custom event. 	*/
	onFilter?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the edit/prompt dialog is opened.
	*  @param event. The custom event. 	*/
	onOpen?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the edit/prompt dialog is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	comment, 	purpose, 	task)
	*   comment - The comment that is about to be removed (if applicable).
	*   purpose - The purpose of the dialog to be opened - <em>'edit'</em> or <em>'prompt'</em>.
	*   task - The task that is about to be edited or removed (if applicable).
	*/
	onOpening?: ((event?: Event) => void) | undefined
	/**  This event is triggered when sorting has been applied.
	*  @param event. The custom event. 	*/
	onSort?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get events(): string[] {
		return ["onChange","onClose","onClosing","onDragEnd","onDragging","onDragStart","onFilter","onOpen","onOpening","onSort","onCreate","onReady"];
	}
	/** Adds filtering 
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

	/** Adds sorting 
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

	/** Adds a task to a Kanban column. If no data is specified, an empty task is added to the first column. 
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

	/** Begins an edit operation 
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

	/** Ends the current edit operation and discards changes 
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

	/** Closes any open header panel (drop down) 
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

	/** Collapses a Kanban column. 
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

	/** Creates a copy of a task in the same column. 
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

	/** Ends the current edit operation and saves changes 
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

	/** Makes sure a task is visible by scrolling to it. If succcessful, the method returns the HTML element of the task. 
	* @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
	* @returns {HTMLElement}
  */
	public async ensureVisible(task:number | string | HTMLElement) : Promise<any> {
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

	/** Expands a Kanban column. 
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

	/** Expands all Kanban columns. 
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

	/** Exports the Kanban's data. 
	* @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
	* @param {string} fileName?. The name of the file to export to
	* @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
	* @returns {any}
  */
	public async exportData(dataFormat:string, fileName?:string, callback?:Function) : Promise<any> {
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

	/** Gets the Kanban's state. 
	* @returns {{ collapsed: {}, dataSource: [], filtering: { filters: [], operator: string }, selection: { selected: [], selectionStart: number | string, selectionInColumn: string, swimlane: string }, sorting: { dataFields: [], dataTypes: [], orderBy: [] }, tabs: [], visibility: { taskActions: boolean, taskComments: boolean, taskDue: boolean, taskPriority: boolean, taskProgress: boolean, taskTags: boolean, taskUserIcon: boolean } }}
  */
	public async getState() : Promise<any> {
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

	/** Loads the Kanban's state. 
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

	/** Moves a task to a different column. 
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

	/** Opens the "Customize tasks" header panel (drop down) 
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

	/** Opens the "Filter" header panel (drop down) 
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

	/** Opens the "Sort" header panel (drop down) 
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

	/** Removes filtering 
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

	/** Removes sorting 
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

	/** Removes a task. 
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

	/** Saves the Kanban's state to the browser's localStorage. 
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

	/** Updates a task. 
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



	constructor(props: any) {
		super(props);
		this.componentRef = React.createRef();
	}

	componentDidRender(initialize: boolean) {
		const that = this;
		const props: any = {};
		const events: any = {};
		let styles: any = null;

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
				const normalizeProp = (str: string) => {
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
			React.createElement("smart-kanban", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Kanban;
