import { Tree } from './../index';
import { Animation, FilterMode, VerticalAlignment, Overflow, TreeScrollMode, TreeSelectionDisplayMode, TreeSelectionMode, TreeSortDirection, Position, TreeToggleMode, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter, QueryList, ContentChildren } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, FilterMode, VerticalAlignment, Overflow, TreeScrollMode, TreeSelectionDisplayMode, TreeSelectionMode, TreeSortDirection, Position, TreeToggleMode, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Tree } from './../index';


import { TreeItemComponent } from './smart.treeitem';

import { TreeItemsGroupComponent } from './smart.treeitemsgroup';

@Directive({
	selector: 'smart-tree, [smart-tree]'
})

export class TreeComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {

	constructor(ref: ElementRef<Tree>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Tree;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Tree;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Tree>document.createElement('smart-tree');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Allows drag operation in current tree. When enabled, items can be dragged and dropped to a tree with enabled allowDrop. */
	@Input()
	get allowDrag(): boolean {
		return this.nativeElement ? this.nativeElement.allowDrag : undefined;
	}
	set allowDrag(value: boolean) {
		this.nativeElement ? this.nativeElement.allowDrag = value : undefined;
	}

	/** @description Allows drop operation. Dropped items could originate from the current tree or another tree. */
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

	/** @description Automatically hides the tree's toggle element (arrow) on mouseleave and shows it on mouseenter. */
	@Input()
	get autoHideToggleElement(): boolean {
		return this.nativeElement ? this.nativeElement.autoHideToggleElement : undefined;
	}
	set autoHideToggleElement(value: boolean) {
		this.nativeElement ? this.nativeElement.autoHideToggleElement = value : undefined;
	}

	/** @description Enables or disables auto load state from the browser's localStorage. Information about filtering, sorting, expanded and selected items is loaded. */
	@Input()
	get autoLoadState(): boolean {
		return this.nativeElement ? this.nativeElement.autoLoadState : undefined;
	}
	set autoLoadState(value: boolean) {
		this.nativeElement ? this.nativeElement.autoLoadState = value : undefined;
	}

	/** @description Enables or disables auto save state to the browser's localStorage. Information about filtering, sorting, expanded and selected items is saved. */
	@Input()
	get autoSaveState(): boolean {
		return this.nativeElement ? this.nativeElement.autoSaveState : undefined;
	}
	set autoSaveState(value: boolean) {
		this.nativeElement ? this.nativeElement.autoSaveState = value : undefined;
	}

	/** @description Enables or disables auto sorting. If modifications are made to a sorted tree, but autoSort is false, the tree will not be re-sorted automatically. */
	@Input()
	get autoSort(): boolean {
		return this.nativeElement ? this.nativeElement.autoSort : undefined;
	}
	set autoSort(value: boolean) {
		this.nativeElement ? this.nativeElement.autoSort = value : undefined;
	}

	/** @description Determines the data source that will be loaded to the Tree. */
	@Input()
	get dataSource(): any {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Enables or disables jqxTree. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Shows or hides loading indicator. */
	@Input()
	get displayLoadingIndicator(): boolean {
		return this.nativeElement ? this.nativeElement.displayLoadingIndicator : undefined;
	}
	set displayLoadingIndicator(value: boolean) {
		this.nativeElement ? this.nativeElement.displayLoadingIndicator = value : undefined;
	}

	/** @description Determines the field in the data source that corresponds to an item's label. */
	@Input()
	get displayMember(): string {
		return this.nativeElement ? this.nativeElement.displayMember : undefined;
	}
	set displayMember(value: string) {
		this.nativeElement ? this.nativeElement.displayMember = value : undefined;
	}

	/** @description A callback function for customizing the HTML of the drag feedback. It receives one parameter - an array of the currently dragged items. */
	@Input()
	get dragFeedbackFormatFunction(): any {
		return this.nativeElement ? this.nativeElement.dragFeedbackFormatFunction : undefined;
	}
	set dragFeedbackFormatFunction(value: any) {
		this.nativeElement ? this.nativeElement.dragFeedbackFormatFunction = value : undefined;
	}

	/** @description Determines the offset of the drag feedback element from the mouse cursor when dragging items. The first member of the array is the horizontal offset and the second one - the vertical offset. */
	@Input()
	get dragOffset(): number[] {
		return this.nativeElement ? this.nativeElement.dragOffset : undefined;
	}
	set dragOffset(value: number[]) {
		this.nativeElement ? this.nativeElement.dragOffset = value : undefined;
	}

	/** @description Enables or disables item's editting. An edit operation can be initiated by double-clicking a tree item or pressing F2 while an item is selected. */
	@Input()
	get editable(): boolean {
		return this.nativeElement ? this.nativeElement.editable : undefined;
	}
	set editable(value: boolean) {
		this.nativeElement ? this.nativeElement.editable = value : undefined;
	}

	/** @description Enables or disables filtering. Shows or hides filter input. */
	@Input()
	get filterable(): boolean {
		return this.nativeElement ? this.nativeElement.filterable : undefined;
	}
	set filterable(value: boolean) {
		this.nativeElement ? this.nativeElement.filterable = value : undefined;
	}

	/** @description Sets custom text for placeholder in the filter input. */
	@Input()
	get filterInputPlaceholder(): string {
		return this.nativeElement ? this.nativeElement.filterInputPlaceholder : undefined;
	}
	set filterInputPlaceholder(value: string) {
		this.nativeElement ? this.nativeElement.filterInputPlaceholder = value : undefined;
	}

	/** @description Sets filter mode. */
	@Input()
	get filterMode(): FilterMode {
		return this.nativeElement ? this.nativeElement.filterMode : undefined;
	}
	set filterMode(value: FilterMode) {
		this.nativeElement ? this.nativeElement.filterMode = value : undefined;
	}

	/** @description Sets or gets whether the tree checkboxes have three states - checked, unchecked and indeterminate. Whorks on selectionMode: 'checkBox' */
	@Input()
	get hasThreeStates(): boolean {
		return this.nativeElement ? this.nativeElement.hasThreeStates : undefined;
	}
	set hasThreeStates(value: boolean) {
		this.nativeElement ? this.nativeElement.hasThreeStates = value : undefined;
	}

	/** @description Determines the field in the data source that corresponds to an item group's subitems collection. */
	@Input()
	get itemsMember(): string {
		return this.nativeElement ? this.nativeElement.itemsMember : undefined;
	}
	set itemsMember(value: string) {
		this.nativeElement ? this.nativeElement.itemsMember = value : undefined;
	}

	/** @description Sets custom text for placeholder in the loading indicator if loadingIndicatorPosition is set to 'top' or 'bottom'. */
	@Input()
	get loadingIndicatorPlaceholder(): string {
		return this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder : undefined;
	}
	set loadingIndicatorPlaceholder(value: string) {
		this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder = value : undefined;
	}

	/** @description Sets the position of the loading indicator. */
	@Input()
	get loadingIndicatorPosition(): VerticalAlignment {
		return this.nativeElement ? this.nativeElement.loadingIndicatorPosition : undefined;
	}
	set loadingIndicatorPosition(value: VerticalAlignment) {
		this.nativeElement ? this.nativeElement.loadingIndicatorPosition = value : undefined;
	}

	/** @description Sets or gets the locale. Used in conjunction with the property messages. */
	@Input()
	get locale(): string {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		this.nativeElement ? this.nativeElement.locale = value : undefined;
	}

	/** @description Callback, related to localization module.  */
	@Input()
	get localizeFormatFunction(): any {
		return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	}
	set localizeFormatFunction(value: any) {
		this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
	}

	/** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Specifies what should happen with the scrollbar (or scroll buttons in scrollMode: 'scrollButtons') if content overflows the element's box. */
	@Input()
	get overflow(): Overflow {
		return this.nativeElement ? this.nativeElement.overflow : undefined;
	}
	set overflow(value: Overflow) {
		this.nativeElement ? this.nativeElement.overflow = value : undefined;
	}

	/** @description If the element is readonly, users cannot interact with it. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description Determines whether the right-to-left support is enabled. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description Determines whether to use scrollbar or scrollButtons when content overflows an element's box. */
	@Input()
	get scrollMode(): TreeScrollMode {
		return this.nativeElement ? this.nativeElement.scrollMode : undefined;
	}
	set scrollMode(value: TreeScrollMode) {
		this.nativeElement ? this.nativeElement.scrollMode = value : undefined;
	}

	/** @description An array with indexes (paths) of the selected items. */
	@Input()
	get selectedIndexes(): string[] {
		return this.nativeElement ? this.nativeElement.selectedIndexes : undefined;
	}
	set selectedIndexes(value: string[]) {
		this.nativeElement ? this.nativeElement.selectedIndexes = value : undefined;
	}

	/** @description Determines the way selected items are highlighted. */
	@Input()
	get selectionDisplayMode(): TreeSelectionDisplayMode {
		return this.nativeElement ? this.nativeElement.selectionDisplayMode : undefined;
	}
	set selectionDisplayMode(value: TreeSelectionDisplayMode) {
		this.nativeElement ? this.nativeElement.selectionDisplayMode = value : undefined;
	}

	/** @description Determines selection mode. */
	@Input()
	get selectionMode(): TreeSelectionMode {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value: TreeSelectionMode) {
		this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
	}

	/** @description Shows or hides lines, displaying the relation between elements in group. */
	@Input()
	get showLines(): boolean {
		return this.nativeElement ? this.nativeElement.showLines : undefined;
	}
	set showLines(value: boolean) {
		this.nativeElement ? this.nativeElement.showLines = value : undefined;
	}

	/** @description Shows or hides lines starting from the root node. Enabled when 'showLines' is set to true. */
	@Input()
	get showRootLines(): boolean {
		return this.nativeElement ? this.nativeElement.showRootLines : undefined;
	}
	set showRootLines(value: boolean) {
		this.nativeElement ? this.nativeElement.showRootLines = value : undefined;
	}

	/** @description Sets user-defined function about custom sorting. */
	@Input()
	get sort(): any {
		return this.nativeElement ? this.nativeElement.sort : undefined;
	}
	set sort(value: any) {
		this.nativeElement ? this.nativeElement.sort = value : undefined;
	}

	/** @description Determines sort direction - ascending or descending. */
	@Input()
	get sortDirection(): TreeSortDirection {
		return this.nativeElement ? this.nativeElement.sortDirection : undefined;
	}
	set sortDirection(value: TreeSortDirection) {
		this.nativeElement ? this.nativeElement.sortDirection = value : undefined;
	}

	/** @description Enables or disables sorting. */
	@Input()
	get sorted(): boolean {
		return this.nativeElement ? this.nativeElement.sorted : undefined;
	}
	set sorted(value: boolean) {
		this.nativeElement ? this.nativeElement.sorted = value : undefined;
	}

	/** @description Sets or gets the element's visual theme. */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description Determines togle element (arrow) position. */
	@Input()
	get toggleElementPosition(): Position {
		return this.nativeElement ? this.nativeElement.toggleElementPosition : undefined;
	}
	set toggleElementPosition(value: Position) {
		this.nativeElement ? this.nativeElement.toggleElementPosition = value : undefined;
	}

	/** @description Determines the way to toggle smart-tree-items-groups. */
	@Input()
	get toggleMode(): TreeToggleMode {
		return this.nativeElement ? this.nativeElement.toggleMode : undefined;
	}
	set toggleMode(value: TreeToggleMode) {
		this.nativeElement ? this.nativeElement.toggleMode = value : undefined;
	}

	/** @description Sets or gets if the element can be focused. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
	}

	/** @description Determines the field in the data source that corresponds to an item's value. */
	@Input()
	get valueMember(): string {
		return this.nativeElement ? this.nativeElement.valueMember : undefined;
	}
	set valueMember(value: string) {
		this.nativeElement ? this.nativeElement.valueMember = value : undefined;
	}

	/** @description This event is triggered when selection in smart-tree is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	oldSelectedIndexes, 	selectedIndexes)
	*   item - The item the user has interacted with to change the selection (only when applicable).
	*   oldSelectedIndexes - The selected indexes before the selection is changed.
	*   selectedIndexes - The selected indexes after the selection is changed.
	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a smart-tree-items-group is collapsed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
	*   item - the collapsed jqx-tree-items-group
	*   label - the label of the collapsed jqx-tree-items-group
	*   path - the path of the collapsed jqx-tree-items-group
	*   value - the value of the collapsed jqx-tree-items-group
	*   children - the children of the collapsed jqx-tree-items-group
	*/
	@Output() onCollapse: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a smart-tree-items-group is about to be collapsed. The collapsing operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
	*   item - the jqx-tree-items-group to be collapsed
	*   label - the label of the jqx-tree-items-group to be collapsed
	*   path - the path of the jqx-tree-items-group to be collapsed
	*   value - the value of the jqx-tree-items-group to be collapsed
	*   children - the children of the jqx-tree-items-group to be collapsed
	*/
	@Output() onCollapsing: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a smart-tree-item/smart-tree-items-group is dropped somewhere in the DOM. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer, 	target)
	*   container - the tree the dragged item(s) is dropped to
	*   data - an object with additional drag details
	*   item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
	*   items - an array with all dragged items
	*   originalEvent - the original, browser, event that initiates the drop operation
	*   previousContainer - the tree the dragged item(s) is dragged from
	*   target - the element the dragged items are dropped to
	*/
	@Output() onDragEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a smart-tree-item/smart-tree-items-group is being dragged.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	data, 	item, 	items, 	originalEvent)
	*   data - an object with additional drag details
	*   item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
	*   items - an array with all dragged items
	*   originalEvent - the original, browser, event that initiates the dragging operation
	*/
	@Output() onDragging: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a dragging operation is started in smart-tree. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer)
	*   container - the tree the dragged item(s) is dragged from
	*   data - an object with additional drag details
	*   item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
	*   items - an array with all dragged items
	*   originalEvent - the original, browser, event that initiates the drag operation
	*   previousContainer - the tree the dragged item(s) is dragged from
	*/
	@Output() onDragStart: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a smart-tree-items-group is expanded.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
	*   item - the expanded jqx-tree-items-group
	*   label - the label of the expanded jqx-tree-items-group
	*   path - the path of the expanded jqx-tree-items-group
	*   value - the value of the expanded jqx-tree-items-group
	*   children - the children of the expanded jqx-tree-items-group
	*/
	@Output() onExpand: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a smart-tree-items-group is about to be expanded. The expanding operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
	*   item - the jqx-tree-items-group to be expanded
	*   label - the label of the jqx-tree-items-group to be expanded
	*   path - the path of the jqx-tree-items-group to be expanded
	*   value - the value of the jqx-tree-items-group to be expanded
	*   children - the children of the jqx-tree-items-group to be expanded
	*/
	@Output() onExpanding: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the Tree has been scrolled to the bottom.
	*  @param event. The custom event. 	*/
	@Output() onScrollBottomReached: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the Tree has been scrolled to the top.
	*  @param event. The custom event. 	*/
	@Output() onScrollTopReached: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Adds an item after another item as a sibling. 
	* @param {HTMLElement} item. A smart-tree-item/smart-tree-items-group to add to the Tree
	* @param {string | HTMLElement} sibling. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to add the item after.
	*/
    public addAfter(item: HTMLElement, sibling: string | HTMLElement): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addAfter(item, sibling);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addAfter(item, sibling);
            });
        }
    }

	/** @description Adds an item before another item as a sibling. 
	* @param {HTMLElement} item. A smart-tree-item/smart-tree-items-group to add to the Tree
	* @param {string | HTMLElement} sibling. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to add the item before.
	*/
    public addBefore(item: HTMLElement, sibling: string | HTMLElement): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addBefore(item, sibling);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addBefore(item, sibling);
            });
        }
    }

	/** @description Adds an item as the last child of a parent item. 
	* @param {HTMLElement} item. A smart-tree-item/smart-tree-items-group to add to the Tree
	* @param {string | HTMLElement} parent?. The smart-tree-items-group (or its id or numeric path) to add the item to.
	*/
    public addTo(item: HTMLElement, parent?: string | HTMLElement): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addTo(item, parent);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addTo(item, parent);
            });
        }
    }

	/** @description Clears selection. 
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

	/** @description Collapses all smart-tree-items-groups. 
	* @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
	*/
    public collapseAll(animation?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseAll(animation);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapseAll(animation);
            });
        }
    }

	/** @description Collapses a smart-tree-items-group. 
	* @param {HTMLElement | string} item. smart-tree-items-group (or its id or numeric path).
	* @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
	*/
    public collapseItem(item: HTMLElement | string, animation?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseItem(item, animation);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapseItem(item, animation);
            });
        }
    }

	/** @description Makes sure an item is visible by scrolling to it. 
	* @param {HTMLElement | string} item. The id or numeric path of an item
	*/
    public ensureVisible(item: HTMLElement | string): void {
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

	/** @description Expands all smart-tree-items-groups. 
	* @param {string} animation?. If set to false, disables expand animation even if animation is enabled for the element.
	*/
    public expandAll(animation?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandAll(animation);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandAll(animation);
            });
        }
    }

	/** @description Expands single smart-tree-items-group. 
	* @param {HTMLElement | string} item. smart-tree-items-group (or its id or numeric path).
	* @param {boolean} animation?. If set to false, disables expand animation even if animation is enabled for the element.
	*/
    public expandItem(item: HTMLElement | string, animation?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandItem(item, animation);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandItem(item, animation);
            });
        }
    }

	/** @description Applies filter to the Tree. 
	* @param {string} filterQuery. Filter query.
	*/
    public filter(filterQuery: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.filter(filterQuery);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.filter(filterQuery);
            });
        }
    }

	/** @description Gets an item by its id or numeric path. 
	* @param {string} id. The id or numeric path of an item.
	* @returns {HTMLElement}
  */
	public async getItem(id): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getItem(id);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Returns SmartTree's state 
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

	/** @description Inserts an item at the given position. 
	* @param {any} item. A smart-tree-item/smart-tree-items-group (or an Object to create an item from) to add to the Tree. If an Object is passed, the available fields are <strong>tagName</strong> (<em>'smart-tree-item'</em> - default - or <em>'smart-tree-items-group'</em>), <strong>disabled</strong>, <strong>expanded</strong> (only if <strong>tagName</strong> is <em>'smart-tree-items-group'</em>), <strong>(items)</strong> (only if <strong>tagName</strong> is <em>'smart-tree-items-group'</em>), <strong>(label)</strong>, <strong>separator</strong>, <strong>shortcut</strong> (only if <strong>tagName</strong> is <em>'smart-tree-item'</em>), and <strong>(value)</strong>. (items), (label), and (value) have to correspond to the values of <strong>itemsMember</strong>, <strong>displayMember</strong>, and <strong>valueMember</strong> respectively.
	* @param {string} path?. The path to insert the item at.
	*/
    public insert(item: any, path?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(item, path);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insert(item, path);
            });
        }
    }

	/** @description Loads the Tree's state. 
	* @param {any} state?. An object returned by one of the methods <strong>getState</strong> or <strong>saveState</strong>. If a state is not passed, the method tries to load the state from the browser's localStorage.
	*/
    public loadState(state?: any): void {
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

	/** @description Moves an item down relative to its siblings. 
	* @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
	*/
    public moveDown(item: HTMLElement | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.moveDown(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.moveDown(item);
            });
        }
    }

	/** @description Moves an item up relative to its siblings. 
	* @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
	*/
    public moveUp(item: HTMLElement | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.moveUp(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.moveUp(item);
            });
        }
    }

	/** @description Removes an item. 
	* @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
	*/
    public removeItem(item: HTMLElement | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeItem(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeItem(item);
            });
        }
    }

	/** @description Saves the Tree's state. 
	* @returns {any}
  */
	public async saveState(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.saveState();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Selects an item. 
	* @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
	*/
    public select(item: HTMLElement | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(item);
            });
        }
    }

	/** @description Unselects an item. 
	* @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
	*/
    public unselect(item: HTMLElement | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselect(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselect(item);
            });
        }
    }

	/** @description Updates an item. 
	* @param {HTMLElement | string} item. smart-tree-item/smart-tree-items-group (or its id or numeric path).
	* @param {any} newItem. An object with updated properties.
	*/
    public updateItem(item: HTMLElement | string, newItem: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateItem(item, newItem);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateItem(item, newItem);
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

		that.eventHandlers['collapseHandler'] = (event: CustomEvent) => { that.onCollapse.emit(event); }
		that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);

		that.eventHandlers['collapsingHandler'] = (event: CustomEvent) => { that.onCollapsing.emit(event); }
		that.nativeElement.addEventListener('collapsing', that.eventHandlers['collapsingHandler']);

		that.eventHandlers['dragEndHandler'] = (event: CustomEvent) => { that.onDragEnd.emit(event); }
		that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);

		that.eventHandlers['draggingHandler'] = (event: CustomEvent) => { that.onDragging.emit(event); }
		that.nativeElement.addEventListener('dragging', that.eventHandlers['draggingHandler']);

		that.eventHandlers['dragStartHandler'] = (event: CustomEvent) => { that.onDragStart.emit(event); }
		that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);

		that.eventHandlers['expandHandler'] = (event: CustomEvent) => { that.onExpand.emit(event); }
		that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);

		that.eventHandlers['expandingHandler'] = (event: CustomEvent) => { that.onExpanding.emit(event); }
		that.nativeElement.addEventListener('expanding', that.eventHandlers['expandingHandler']);

		that.eventHandlers['scrollBottomReachedHandler'] = (event: CustomEvent) => { that.onScrollBottomReached.emit(event); }
		that.nativeElement.addEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);

		that.eventHandlers['scrollTopReachedHandler'] = (event: CustomEvent) => { that.onScrollTopReached.emit(event); }
		that.nativeElement.addEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['changeHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
		}

		if (that.eventHandlers['collapseHandler']) {
			that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
		}

		if (that.eventHandlers['collapsingHandler']) {
			that.nativeElement.removeEventListener('collapsing', that.eventHandlers['collapsingHandler']);
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

		if (that.eventHandlers['expandHandler']) {
			that.nativeElement.removeEventListener('expand', that.eventHandlers['expandHandler']);
		}

		if (that.eventHandlers['expandingHandler']) {
			that.nativeElement.removeEventListener('expanding', that.eventHandlers['expandingHandler']);
		}

		if (that.eventHandlers['scrollBottomReachedHandler']) {
			that.nativeElement.removeEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
		}

		if (that.eventHandlers['scrollTopReachedHandler']) {
			that.nativeElement.removeEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
		}

	}
}
