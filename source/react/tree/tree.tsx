import React from "react";
import { TreeProperties } from "./../../index";
import { Animation, TreeExpandMode, FilterMode, VerticalAlignment, Overflow, TreeScrollMode, TreeSelectionDisplayMode, TreeSelectionMode, TreeSelectionTarget, TreeSortDirection, Position, TreeToggleMode} from './../../index';
import { TreeItemProperties } from './../../index';
import { TreeItem } from './treeitem';
import { TreeItemsGroupProperties } from './../../index';
import { TreeItemsGroup } from './treeitemsgroup';
export { TreeProperties } from "./../../index";
export { Animation, TreeExpandMode, FilterMode, VerticalAlignment, Overflow, TreeScrollMode, TreeSelectionDisplayMode, TreeSelectionMode, TreeSelectionTarget, TreeSortDirection, Position, TreeToggleMode} from './../../index';
export { TreeItem } from './treeitem';
export { TreeItemProperties } from "./../../index";
export { TreeItemsGroup } from './treeitemsgroup';
export { TreeItemsGroupProperties } from "./../../index";

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface TreeProps extends TreeProperties {
    className?: string;
    style?: React.CSSProperties;

	onChange?: ((event?: Event) => void) | undefined;
	onCollapse?: ((event?: Event) => void) | undefined;
	onCollapsing?: ((event?: Event) => void) | undefined;
	onDragEnd?: ((event?: Event) => void) | undefined;
	onDragging?: ((event?: Event) => void) | undefined;
	onDragStart?: ((event?: Event) => void) | undefined;
	onExpand?: ((event?: Event) => void) | undefined;
	onExpanding?: ((event?: Event) => void) | undefined;
	onScrollBottomReached?: ((event?: Event) => void) | undefined;
	onScrollTopReached?: ((event?: Event) => void) | undefined;
	onSwipeleft?: ((event?: Event) => void) | undefined;
	onSwiperight?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Treeview component is a user interface that is used to represent hierarchical data in a tree structure.
*/
export class Tree extends React.Component<React.HTMLAttributes<Element> & TreeProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Tree' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Allows drag operation in current tree. When enabled, items can be dragged and dropped to a tree with enabled allowDrop.
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

	/** Allows drop operation. Dropped items could originate from the current tree or another tree.
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

	/** Automatically hides the tree's toggle element (arrow) on mouseleave and shows it on mouseenter.
	*	Property type: boolean
	*/
	get autoHideToggleElement(): boolean  {
		return this.nativeElement ? this.nativeElement.autoHideToggleElement : undefined;
	}
	set autoHideToggleElement(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.autoHideToggleElement = value;
		}
	}

	/** Enables or disables auto load state from the browser's localStorage. Information about filtering, sorting, expanded and selected items is loaded.
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

	/** Enables or disables auto save state to the browser's localStorage. Information about filtering, sorting, expanded and selected items is saved.
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

	/** Enables or disables auto sorting. If modifications are made to a sorted tree, but autoSort is false, the tree will not be re-sorted automatically.
	*	Property type: boolean
	*/
	get autoSort(): boolean  {
		return this.nativeElement ? this.nativeElement.autoSort : undefined;
	}
	set autoSort(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.autoSort = value;
		}
	}

	/** Determines the data source that will be loaded to the Tree.
	*	Property type: any
	*/
	get dataSource(): any  {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any) {
		if (this.nativeElement) {
			this.nativeElement.dataSource = value;
		}
	}

	/** Enables or disables jqxTree.
	*	Property type: boolean
	*/
	get disabled(): boolean  {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disabled = value;
		}
	}

	/** Shows or hides loading indicator.
	*	Property type: boolean
	*/
	get displayLoadingIndicator(): boolean  {
		return this.nativeElement ? this.nativeElement.displayLoadingIndicator : undefined;
	}
	set displayLoadingIndicator(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.displayLoadingIndicator = value;
		}
	}

	/** Determines the field in the data source that corresponds to an item's label.
	*	Property type: string
	*/
	get displayMember(): string  {
		return this.nativeElement ? this.nativeElement.displayMember : undefined;
	}
	set displayMember(value: string) {
		if (this.nativeElement) {
			this.nativeElement.displayMember = value;
		}
	}

	/** A callback function for customizing the HTML of the drag feedback. It receives one parameter - an array of the currently dragged items.
	*	Property type: any
	*/
	get dragFeedbackFormatFunction(): any  {
		return this.nativeElement ? this.nativeElement.dragFeedbackFormatFunction : undefined;
	}
	set dragFeedbackFormatFunction(value: any) {
		if (this.nativeElement) {
			this.nativeElement.dragFeedbackFormatFunction = value;
		}
	}

	/** Determines the offset of the drag feedback element from the mouse cursor when dragging items. The first member of the array is the horizontal offset and the second one - the vertical offset.
	*	Property type: number[]
	*/
	get dragOffset(): number[]  {
		return this.nativeElement ? this.nativeElement.dragOffset : undefined;
	}
	set dragOffset(value: number[]) {
		if (this.nativeElement) {
			this.nativeElement.dragOffset = value;
		}
	}

	/** Enables or disables item's editting. An edit operation can be initiated by double-clicking a tree item or pressing F2 while an item is selected.
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

	/** Determines the expand behavior of TreeItemsGroups in the Tree.
	*	Property type: TreeExpandMode
	*/
	get expandMode(): TreeExpandMode  {
		return this.nativeElement ? this.nativeElement.expandMode : undefined;
	}
	set expandMode(value: TreeExpandMode) {
		if (this.nativeElement) {
			this.nativeElement.expandMode = value;
		}
	}

	/** Enables or disables filtering. Shows or hides filter input.
	*	Property type: boolean
	*/
	get filterable(): boolean  {
		return this.nativeElement ? this.nativeElement.filterable : undefined;
	}
	set filterable(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.filterable = value;
		}
	}

	/** Sets custom text for placeholder in the filter input.
	*	Property type: string
	*/
	get filterInputPlaceholder(): string  {
		return this.nativeElement ? this.nativeElement.filterInputPlaceholder : undefined;
	}
	set filterInputPlaceholder(value: string) {
		if (this.nativeElement) {
			this.nativeElement.filterInputPlaceholder = value;
		}
	}

	/** Sets filter mode.
	*	Property type: FilterMode
	*/
	get filterMode(): FilterMode  {
		return this.nativeElement ? this.nativeElement.filterMode : undefined;
	}
	set filterMode(value: FilterMode) {
		if (this.nativeElement) {
			this.nativeElement.filterMode = value;
		}
	}

	/** Sets or gets whether the tree checkboxes have three states - checked, unchecked and indeterminate. Whorks on selectionMode: 'checkBox'
	*	Property type: boolean
	*/
	get hasThreeStates(): boolean  {
		return this.nativeElement ? this.nativeElement.hasThreeStates : undefined;
	}
	set hasThreeStates(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hasThreeStates = value;
		}
	}

	/** Determines the field in the data source that corresponds to an item group's subitems collection.
	*	Property type: string
	*/
	get itemsMember(): string  {
		return this.nativeElement ? this.nativeElement.itemsMember : undefined;
	}
	set itemsMember(value: string) {
		if (this.nativeElement) {
			this.nativeElement.itemsMember = value;
		}
	}

	/** Sets custom text for placeholder in the loading indicator if loadingIndicatorPosition is set to 'top' or 'bottom'.
	*	Property type: string
	*/
	get loadingIndicatorPlaceholder(): string  {
		return this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder : undefined;
	}
	set loadingIndicatorPlaceholder(value: string) {
		if (this.nativeElement) {
			this.nativeElement.loadingIndicatorPlaceholder = value;
		}
	}

	/** Sets the position of the loading indicator.
	*	Property type: VerticalAlignment
	*/
	get loadingIndicatorPosition(): VerticalAlignment  {
		return this.nativeElement ? this.nativeElement.loadingIndicatorPosition : undefined;
	}
	set loadingIndicatorPosition(value: VerticalAlignment) {
		if (this.nativeElement) {
			this.nativeElement.loadingIndicatorPosition = value;
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

	/** Callback, related to localization module. 
	*	Property type: any
	*/
	get localizeFormatFunction(): any  {
		return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	}
	set localizeFormatFunction(value: any) {
		if (this.nativeElement) {
			this.nativeElement.localizeFormatFunction = value;
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

	/** Specifies what should happen with the scrollbar (or scroll buttons in scrollMode: 'scrollButtons') if content overflows the element's box.
	*	Property type: Overflow
	*/
	get overflow(): Overflow  {
		return this.nativeElement ? this.nativeElement.overflow : undefined;
	}
	set overflow(value: Overflow) {
		if (this.nativeElement) {
			this.nativeElement.overflow = value;
		}
	}

	/** If the element is readonly, users cannot interact with it.
	*	Property type: boolean
	*/
	get readonly(): boolean  {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.readonly = value;
		}
	}

	/** Determines whether the right-to-left support is enabled.
	*	Property type: boolean
	*/
	get rightToLeft(): boolean  {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.rightToLeft = value;
		}
	}

	/** Determines whether to use scrollbar or scrollButtons when content overflows an element's box.
	*	Property type: TreeScrollMode
	*/
	get scrollMode(): TreeScrollMode  {
		return this.nativeElement ? this.nativeElement.scrollMode : undefined;
	}
	set scrollMode(value: TreeScrollMode) {
		if (this.nativeElement) {
			this.nativeElement.scrollMode = value;
		}
	}

	/** An array with indexes (paths) of the selected items.
	*	Property type: string[]
	*/
	get selectedIndexes(): string[]  {
		return this.nativeElement ? this.nativeElement.selectedIndexes : undefined;
	}
	set selectedIndexes(value: string[]) {
		if (this.nativeElement) {
			this.nativeElement.selectedIndexes = value;
		}
	}

	/** Determines the way selected items are highlighted.
	*	Property type: TreeSelectionDisplayMode
	*/
	get selectionDisplayMode(): TreeSelectionDisplayMode  {
		return this.nativeElement ? this.nativeElement.selectionDisplayMode : undefined;
	}
	set selectionDisplayMode(value: TreeSelectionDisplayMode) {
		if (this.nativeElement) {
			this.nativeElement.selectionDisplayMode = value;
		}
	}

	/** Determines selection mode.
	*	Property type: TreeSelectionMode
	*/
	get selectionMode(): TreeSelectionMode  {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value: TreeSelectionMode) {
		if (this.nativeElement) {
			this.nativeElement.selectionMode = value;
		}
	}

	/** Determines whether smart-tree-items-groups can be selected.
	*	Property type: TreeSelectionTarget
	*/
	get selectionTarget(): TreeSelectionTarget  {
		return this.nativeElement ? this.nativeElement.selectionTarget : undefined;
	}
	set selectionTarget(value: TreeSelectionTarget) {
		if (this.nativeElement) {
			this.nativeElement.selectionTarget = value;
		}
	}

	/** Shows or hides lines, displaying the relation between elements in group.
	*	Property type: boolean
	*/
	get showLines(): boolean  {
		return this.nativeElement ? this.nativeElement.showLines : undefined;
	}
	set showLines(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showLines = value;
		}
	}

	/** Shows or hides lines starting from the root node. Enabled when 'showLines' is set to true.
	*	Property type: boolean
	*/
	get showRootLines(): boolean  {
		return this.nativeElement ? this.nativeElement.showRootLines : undefined;
	}
	set showRootLines(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showRootLines = value;
		}
	}

	/** Sets user-defined function about custom sorting.
	*	Property type: any
	*/
	get sort(): any  {
		return this.nativeElement ? this.nativeElement.sort : undefined;
	}
	set sort(value: any) {
		if (this.nativeElement) {
			this.nativeElement.sort = value;
		}
	}

	/** Determines sort direction - ascending or descending.
	*	Property type: TreeSortDirection
	*/
	get sortDirection(): TreeSortDirection  {
		return this.nativeElement ? this.nativeElement.sortDirection : undefined;
	}
	set sortDirection(value: TreeSortDirection) {
		if (this.nativeElement) {
			this.nativeElement.sortDirection = value;
		}
	}

	/** Enables or disables sorting.
	*	Property type: boolean
	*/
	get sorted(): boolean  {
		return this.nativeElement ? this.nativeElement.sorted : undefined;
	}
	set sorted(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.sorted = value;
		}
	}

	/** Sets or gets the element's visual theme.
	*	Property type: string
	*/
	get theme(): string  {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		if (this.nativeElement) {
			this.nativeElement.theme = value;
		}
	}

	/** Determines togle element (arrow) position.
	*	Property type: Position
	*/
	get toggleElementPosition(): Position  {
		return this.nativeElement ? this.nativeElement.toggleElementPosition : undefined;
	}
	set toggleElementPosition(value: Position) {
		if (this.nativeElement) {
			this.nativeElement.toggleElementPosition = value;
		}
	}

	/** Determines the way to toggle smart-tree-items-groups.
	*	Property type: TreeToggleMode
	*/
	get toggleMode(): TreeToggleMode  {
		return this.nativeElement ? this.nativeElement.toggleMode : undefined;
	}
	set toggleMode(value: TreeToggleMode) {
		if (this.nativeElement) {
			this.nativeElement.toggleMode = value;
		}
	}

	/** Sets or gets if the element can be focused.
	*	Property type: boolean
	*/
	get unfocusable(): boolean  {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.unfocusable = value;
		}
	}

	/** Determines the field in the data source that corresponds to an item's value.
	*	Property type: string
	*/
	get valueMember(): string  {
		return this.nativeElement ? this.nativeElement.valueMember : undefined;
	}
	set valueMember(value: string) {
		if (this.nativeElement) {
			this.nativeElement.valueMember = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["allowDrag","allowDrop","animation","autoHideToggleElement","autoLoadState","autoSaveState","autoSort","dataSource","disabled","displayLoadingIndicator","displayMember","dragFeedbackFormatFunction","dragOffset","editable","expandMode","filterable","filterInputPlaceholder","filterMode","hasThreeStates","itemsMember","loadingIndicatorPlaceholder","loadingIndicatorPosition","locale","localizeFormatFunction","messages","overflow","readonly","rightToLeft","scrollMode","selectedIndexes","selectionDisplayMode","selectionMode","selectionTarget","showLines","showRootLines","sort","sortDirection","sorted","theme","toggleElementPosition","toggleMode","unfocusable","valueMember"];
	}
	/**  This event is triggered when selection in jqx-tree is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	oldSelectedIndexes, 	selectedIndexes)
	*   item - The item the user has interacted with to change the selection (only when applicable).
	*   oldSelectedIndexes - The selected indexes before the selection is changed.
	*   selectedIndexes - The selected indexes after the selection is changed.
	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a jqx-tree-items-group is collapsed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
	*   item - the collapsed jqx-tree-items-group
	*   label - the label of the collapsed jqx-tree-items-group
	*   path - the path of the collapsed jqx-tree-items-group
	*   value - the value of the collapsed jqx-tree-items-group
	*   children - the children of the collapsed jqx-tree-items-group
	*/
	onCollapse?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a jqx-tree-items-group is about to be collapsed. The collapsing operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
	*   item - the jqx-tree-items-group to be collapsed
	*   label - the label of the jqx-tree-items-group to be collapsed
	*   path - the path of the jqx-tree-items-group to be collapsed
	*   value - the value of the jqx-tree-items-group to be collapsed
	*   children - the children of the jqx-tree-items-group to be collapsed
	*/
	onCollapsing?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a jqx-tree-item/jqx-tree-items-group is dropped somewhere in the DOM. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer, 	target)
	*   container - the tree the dragged item(s) is dropped to
	*   data - an object with additional drag details
	*   item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
	*   items - an array with all dragged items
	*   originalEvent - the original, browser, event that initiates the drop operation
	*   previousContainer - the tree the dragged item(s) is dragged from
	*   target - the element the dragged items are dropped to
	*/
	onDragEnd?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a jqx-tree-item/jqx-tree-items-group is being dragged.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	data, 	item, 	items, 	originalEvent)
	*   data - an object with additional drag details
	*   item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
	*   items - an array with all dragged items
	*   originalEvent - the original, browser, event that initiates the dragging operation
	*/
	onDragging?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a dragging operation is started in jqx-tree. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer)
	*   container - the tree the dragged item(s) is dragged from
	*   data - an object with additional drag details
	*   item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
	*   items - an array with all dragged items
	*   originalEvent - the original, browser, event that initiates the drag operation
	*   previousContainer - the tree the dragged item(s) is dragged from
	*/
	onDragStart?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a jqx-tree-items-group is expanded.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
	*   item - the expanded jqx-tree-items-group
	*   label - the label of the expanded jqx-tree-items-group
	*   path - the path of the expanded jqx-tree-items-group
	*   value - the value of the expanded jqx-tree-items-group
	*   children - the children of the expanded jqx-tree-items-group
	*/
	onExpand?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a jqx-tree-items-group is about to be expanded. The expanding operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
	*   item - the jqx-tree-items-group to be expanded
	*   label - the label of the jqx-tree-items-group to be expanded
	*   path - the path of the jqx-tree-items-group to be expanded
	*   value - the value of the jqx-tree-items-group to be expanded
	*   children - the children of the jqx-tree-items-group to be expanded
	*/
	onExpanding?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the Tree has been scrolled to the bottom.
	*  @param event. The custom event. 	*/
	onScrollBottomReached?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the Tree has been scrolled to the top.
	*  @param event. The custom event. 	*/
	onScrollTopReached?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user swipes to the left inside the Tree.
	*  @param event. The custom event. 	*/
	onSwipeleft?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user swipes to the right inside the Tree.
	*  @param event. The custom event. 	*/
	onSwiperight?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onChange","onCollapse","onCollapsing","onDragEnd","onDragging","onDragStart","onExpand","onExpanding","onScrollBottomReached","onScrollTopReached","onSwipeleft","onSwiperight","onCreate","onReady"];
	}
	/** Adds an item after another item as a sibling. 
	* @param {HTMLElement} item. A jqx-tree-item/jqx-tree-items-group to add to the Tree
	* @param {string | HTMLElement} sibling. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to add the item after.
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

	/** Adds an item before another item as a sibling. 
	* @param {HTMLElement} item. A jqx-tree-item/jqx-tree-items-group to add to the Tree
	* @param {string | HTMLElement} sibling. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to add the item before.
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

	/** Adds an item as the last child of a parent item. 
	* @param {HTMLElement} item. A jqx-tree-item/jqx-tree-items-group to add to the Tree
	* @param {string | HTMLElement} parent?. The jqx-tree-items-group (or its id or numeric path) to add the item to.
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

	/** Clears selection. 
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

	/** Collapses all smart-tree-items-groups. 
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

	/** Collapses a smart-tree-items-group. 
	* @param {HTMLElement | string} item. jqx-tree-items-group (or its id or numeric path).
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

	/** Makes sure an item is visible by scrolling to it. 
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

	/** Expands all smart-tree-items-groups. 
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

	/** Expands single smart-tree-items-group. 
	* @param {HTMLElement | string} item. jqx-tree-items-group (or its id or numeric path).
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

	/** Applies filter to the Tree. 
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

	/** Gets an item by its id or numeric path. 
	* @param {string} id. The id or numeric path of an item.
	* @returns {HTMLElement}
  */
	public async getItem(id:string) : Promise<any> {
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

	/** Returns SmartTree's state 
	* @returns {any}
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

	/** Inserts an item at the given position. 
	* @param {any} item. A jqx-tree-item/jqx-tree-items-group (or an Object to create an item from) to add to the Tree. If an Object is passed, the available fields are <strong>tagName</strong> (<em>'jqx-tree-item'</em> - default - or <em>'jqx-tree-items-group'</em>), <strong>disabled</strong>, <strong>expanded</strong> (only if <strong>tagName</strong> is <em>'jqx-tree-items-group'</em>), <strong>(items)</strong> (only if <strong>tagName</strong> is <em>'jqx-tree-items-group'</em>), <strong>(label)</strong>, <strong>separator</strong>, <strong>shortcut</strong> (only if <strong>tagName</strong> is <em>'jqx-tree-item'</em>), and <strong>(value)</strong>. (items), (label), and (value) have to correspond to the values of <strong>itemsMember</strong>, <strong>displayMember</strong>, and <strong>valueMember</strong> respectively.
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

	/** Loads the Tree's state. 
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

	/** Moves an item down relative to its siblings. 
	* @param {HTMLElement | string} item. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to remove.
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

	/** Moves an item up relative to its siblings. 
	* @param {HTMLElement | string} item. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to remove.
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

	/** Removes an item. 
	* @param {HTMLElement | string} item. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to remove.
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

	/** Saves the Tree's state. 
	* @returns {any}
  */
	public async saveState() : Promise<any> {
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

	/** Selects an item. 
	* @param {HTMLElement | string} item. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to remove.
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

	/** Unselects an item. 
	* @param {HTMLElement | string} item. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to remove.
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

	/** Updates an item. 
	* @param {HTMLElement | string} item. jqx-tree-item/jqx-tree-items-group (or its id or numeric path).
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
		
		for(let i = 0; i < that.eventListeners.length; i++){
			const eventName = that.eventListeners[i];

			that.nativeElement.removeEventListener(eventName.substring(2).toLowerCase(), that[eventName]);
		}
	}

	render() {
		return (
			React.createElement("smart-tree", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Tree;
