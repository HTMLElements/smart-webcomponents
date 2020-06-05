import React from "react";
import { ListBoxProperties } from "./../../index";
import { Animation, ListBoxDropAction, FilterMode, HorizontalScrollBarVisibility, SearchMode, ListItemMeasureMode, VerticalAlignment, ListSelectionMode, ListBoxSelectionChangeAction, VerticalScrollBarVisibility} from './../../index';
import { ListItemProperties } from './../../index';
import { ListItem } from './listitem';
import { ListItemsGroupProperties } from './../../index';
import { ListItemsGroup } from './listitemsgroup';
export { ListBoxProperties } from "./../../index";
export { Animation, ListBoxDropAction, FilterMode, HorizontalScrollBarVisibility, SearchMode, ListItemMeasureMode, VerticalAlignment, ListSelectionMode, ListBoxSelectionChangeAction, VerticalScrollBarVisibility} from './../../index';
export { ListItem } from './listitem';
export { ListItemProperties } from "./../../index";
export { ListItemsGroup } from './listitemsgroup';
export { ListItemsGroupProperties } from "./../../index";

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface ListBoxProps extends ListBoxProperties {
    className?: string;
    style?: React.CSSProperties;

	onBindingComplete?: ((event?: Event) => void) | undefined;
	onChange?: ((event?: Event) => void) | undefined;
	onDragEnd?: ((event?: Event) => void) | undefined;
	onDragging?: ((event?: Event) => void) | undefined;
	onDragStart?: ((event?: Event) => void) | undefined;
	onItemClick?: ((event?: Event) => void) | undefined;
	onItemLabelChange?: ((event?: Event) => void) | undefined;
	onScrollBottomReached?: ((event?: Event) => void) | undefined;
	onScrollTopReached?: ((event?: Event) => void) | undefined;
	onSwipeleft?: ((event?: Event) => void) | undefined;
	onSwiperight?: ((event?: Event) => void) | undefined;

}
/**
 ListBox allows the user to select one or more items from a list.
*/
export class ListBox extends React.Component<React.HTMLProps<Element> & ListBoxProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'ListBox' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Enables or disables the ability to drag list items out of the List box. Disabled items cannot be dragged.
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

	/** Enables or disables the ability to drop list items inside the target List box.
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

	/** Determines the number of color alternations in rows.
	*	Property type: number
	*/
	get alternationCount(): number  {
		return this.nativeElement ? this.nativeElement.alternationCount : undefined;
	}
	set alternationCount(value: number) {
		if (this.nativeElement) {
			this.nativeElement.alternationCount = value;
		}
	}

	/** Determines the ending index of color alternations in rows.
	*	Property type: number
	*/
	get alternationEnd(): number  {
		return this.nativeElement ? this.nativeElement.alternationEnd : undefined;
	}
	set alternationEnd(value: number) {
		if (this.nativeElement) {
			this.nativeElement.alternationEnd = value;
		}
	}

	/** Determines the starting index of color alternations in rows
	*	Property type: number
	*/
	get alternationStart(): number  {
		return this.nativeElement ? this.nativeElement.alternationStart : undefined;
	}
	set alternationStart(value: number) {
		if (this.nativeElement) {
			this.nativeElement.alternationStart = value;
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

	/** Enables or disables auto sorting. If sorted is enabled, but autoSort is false, the element will not be re-sorted automatically.
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

	/** Determines the data source that will be loaded to the ListBox. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value, group. It can also be a callback that returns an Array of items as previously described.
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

	/** Enables or disables the list box.
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

	/** Determines whether an indicator will appear during filtering and remote item loading.
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

	/** Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property.
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

	/** A callback function for customizing the HTML of the drag feedback. It receives one parameter - the currently dragged item.
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

	/** Determines the offset of the drag feedback element from the mouse cursor when dragging an item. The first member of the array is the horizontal offset and the second one - the vertical offset.
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

	/** Determines what happens when an item is dropped.
	*	Property type: ListBoxDropAction
	*/
	get dropAction(): ListBoxDropAction  {
		return this.nativeElement ? this.nativeElement.dropAction : undefined;
	}
	set dropAction(value: ListBoxDropAction) {
		if (this.nativeElement) {
			this.nativeElement.dropAction = value;
		}
	}

	/** Determines if list items can be edited or not. If enabled, items can be edited by double clicking on a target item ( that is not disabled ) or pressing the F2 key on the keyboard.
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

	/** Determines whether list items can be filtered or not. If enable a filter input appears at the top of the list box.
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

	/** A callback that should return a condition that will be used for custom item filtering. Used in conjunction with filterMode 'custom'
	*	Property type: any
	*/
	get filterCallback(): any  {
		return this.nativeElement ? this.nativeElement.filterCallback : undefined;
	}
	set filterCallback(value: any) {
		if (this.nativeElement) {
			this.nativeElement.filterCallback = value;
		}
	}

	/** Determines the filtering mode.
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

	/** Determines the placeholder for the filter input field.
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

	/** If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups.
	*	Property type: boolean
	*/
	get grouped(): boolean  {
		return this.nativeElement ? this.nativeElement.grouped : undefined;
	}
	set grouped(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.grouped = value;
		}
	}

	/** Determines which attribute from the dataSource object will be used as the group member for the items. If not set, by default 'group' property is used from the source object. groupMember is especially usefull when loading the data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used to group the items.
	*	Property type: string | null
	*/
	get groupMember(): string | null  {
		return this.nativeElement ? this.nativeElement.groupMember : undefined;
	}
	set groupMember(value: string | null) {
		if (this.nativeElement) {
			this.nativeElement.groupMember = value;
		}
	}

	/** Determines the visibility of the horizontal Scroll bar.
	*	Property type: HorizontalScrollBarVisibility
	*/
	get horizontalScrollBarVisibility(): HorizontalScrollBarVisibility  {
		return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
	}
	set horizontalScrollBarVisibility(value: HorizontalScrollBarVisibility) {
		if (this.nativeElement) {
			this.nativeElement.horizontalScrollBarVisibility = value;
		}
	}

	/** IncrementalSearchDelay property specifies the time-interval in milliseconds until the previous search query is cleared. The timer starts when the user stops typing. A new query can be started only when the delay has passed.
	*	Property type: number
	*/
	get incrementalSearchDelay(): number  {
		return this.nativeElement ? this.nativeElement.incrementalSearchDelay : undefined;
	}
	set incrementalSearchDelay(value: number) {
		if (this.nativeElement) {
			this.nativeElement.incrementalSearchDelay = value;
		}
	}

	/** Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the List box is focused starts the incremental search.
	*	Property type: SearchMode
	*/
	get incrementalSearchMode(): SearchMode  {
		return this.nativeElement ? this.nativeElement.incrementalSearchMode : undefined;
	}
	set incrementalSearchMode(value: SearchMode) {
		if (this.nativeElement) {
			this.nativeElement.incrementalSearchMode = value;
		}
	}

	/** Sets the height for all list box items. Used only when virtualization is enabled.
	*	Property type: number
	*/
	get itemHeight(): number  {
		return this.nativeElement ? this.nativeElement.itemHeight : undefined;
	}
	set itemHeight(value: number) {
		if (this.nativeElement) {
			this.nativeElement.itemHeight = value;
		}
	}

	/** Determines the item width measuring algorithm.
	*	Property type: ListItemMeasureMode
	*/
	get itemMeasureMode(): ListItemMeasureMode  {
		return this.nativeElement ? this.nativeElement.itemMeasureMode : undefined;
	}
	set itemMeasureMode(value: ListItemMeasureMode) {
		if (this.nativeElement) {
			this.nativeElement.itemMeasureMode = value;
		}
	}

	/** A getter that returns an array of all ListBox items.
	*	Property type: {label: string, value: string}[]
	*/
	get items(): {label: string, value: string}[]  {
		return this.nativeElement ? this.nativeElement.items : undefined;
	}
	set items(value: {label: string, value: string}[]) {
		if (this.nativeElement) {
			this.nativeElement.items = value;
		}
	}

	/** A string that represents the id of an HTMLTemplateElement inside the DOM or a reference to the template itself. It's used to set a custom template for the list items.
	*	Property type: any
	*/
	get itemTemplate(): any  {
		return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
	}
	set itemTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.itemTemplate = value;
		}
	}

	/** Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom.
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

	/** Determines the position of the loading indicator.
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

	/** Sets or gets the language. Used in conjunction with the property messages. 
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

	/** Callback used to customize the format of the messages that are returned from the Localization Module.
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

	/** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language. 
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

	/** Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
	*	Property type: string
	*/
	get name(): string  {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		if (this.nativeElement) {
			this.nativeElement.name = value;
		}
	}

	/** Determines the placeholder that will be shown when the List box is empty.
	*	Property type: string
	*/
	get placeholder(): string  {
		return this.nativeElement ? this.nativeElement.placeholder : undefined;
	}
	set placeholder(value: string) {
		if (this.nativeElement) {
			this.nativeElement.placeholder = value;
		}
	}

	/** Sets or gets the readonly property. If the element is readonly, users cannot interact with it.
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

	/** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
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

	/** Sets or gets the selected indexes. Selected indexes represents an array of the indexes of the items that should be selected.
	*	Property type: number[]
	*/
	get selectedIndexes(): number[]  {
		return this.nativeElement ? this.nativeElement.selectedIndexes : undefined;
	}
	set selectedIndexes(value: number[]) {
		if (this.nativeElement) {
			this.nativeElement.selectedIndexes = value;
		}
	}

	/** Sets or gets elected indexes. Selected values represents the values of the items that should be selected.
	*	Property type: string[]
	*/
	get selectedValues(): string[]  {
		return this.nativeElement ? this.nativeElement.selectedValues : undefined;
	}
	set selectedValues(value: string[]) {
		if (this.nativeElement) {
			this.nativeElement.selectedValues = value;
		}
	}

	/** Determines how many items can be selected depending on the selection mode.
	*	Property type: ListSelectionMode
	*/
	get selectionMode(): ListSelectionMode  {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value: ListSelectionMode) {
		if (this.nativeElement) {
			this.nativeElement.selectionMode = value;
		}
	}

	/** Determines when listbox selection is achieved - on 'press' or 'release'.
	*	Property type: ListBoxSelectionChangeAction
	*/
	get selectionChangeAction(): ListBoxSelectionChangeAction  {
		return this.nativeElement ? this.nativeElement.selectionChangeAction : undefined;
	}
	set selectionChangeAction(value: ListBoxSelectionChangeAction) {
		if (this.nativeElement) {
			this.nativeElement.selectionChangeAction = value;
		}
	}

	/** Determines whether the items are sorted alphabetically or not
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

	/** Determines sorting direction - ascending(asc) or descending(desc)
	*	Property type: string
	*/
	get sortDirection(): string  {
		return this.nativeElement ? this.nativeElement.sortDirection : undefined;
	}
	set sortDirection(value: string) {
		if (this.nativeElement) {
			this.nativeElement.sortDirection = value;
		}
	}

	/** Determines the theme for the element. Themes define the look of the elements.
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

	/** Ensures the item with the target index is in view as the first (top) item in the list box.
	*	Property type: number
	*/
	get topVisibleIndex(): number  {
		return this.nativeElement ? this.nativeElement.topVisibleIndex : undefined;
	}
	set topVisibleIndex(value: number) {
		if (this.nativeElement) {
			this.nativeElement.topVisibleIndex = value;
		}
	}

	/** If is set to true, the element cannot be focused.
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

	/** Sets or gets the value. Returns the selection. Return type: {label: string, value: any}[].
	*	Property type: any
	*/
	get value(): any  {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: any) {
		if (this.nativeElement) {
			this.nativeElement.value = value;
		}
	}

	/** Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items.
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

	/** Determines the visibility of the vertical scroll bar.
	*	Property type: VerticalScrollBarVisibility
	*/
	get verticalScrollBarVisibility(): VerticalScrollBarVisibility  {
		return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
	}
	set verticalScrollBarVisibility(value: VerticalScrollBarVisibility) {
		if (this.nativeElement) {
			this.nativeElement.verticalScrollBarVisibility = value;
		}
	}

	/** Determines weather or not Virtualization is used for the ListBox. Virtualization allows a huge amount of items to be loaded to the List box while preserving the performance. For example a milion items can be loaded to the list box.
	*	Property type: boolean
	*/
	get virtualized(): boolean  {
		return this.nativeElement ? this.nativeElement.virtualized : undefined;
	}
	set virtualized(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.virtualized = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["allowDrag","allowDrop","alternationCount","alternationEnd","alternationStart","animation","autoSort","dataSource","disabled","displayLoadingIndicator","displayMember","dragFeedbackFormatFunction","dragOffset","dropAction","editable","filterable","filterCallback","filterMode","filterInputPlaceholder","grouped","groupMember","horizontalScrollBarVisibility","incrementalSearchDelay","incrementalSearchMode","itemHeight","itemMeasureMode","items","itemTemplate","loadingIndicatorPlaceholder","loadingIndicatorPosition","locale","localizeFormatFunction","messages","name","placeholder","readonly","rightToLeft","selectedIndexes","selectedValues","selectionMode","selectionChangeAction","sorted","sortDirection","theme","topVisibleIndex","unfocusable","value","valueMember","verticalScrollBarVisibility","virtualized"];
	}
	/**  This event is triggered when listbox binding is completed.
	*  @param event. The custom event. 	*/
	onBindingComplete?: ((event?: Event) => void) | undefined
	/**  This event is triggered when selection is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	addedItems, 	disabled, 	index, 	label, 	removedItems, 	selected, 	value)
	*   addedItems - An array of List items that have been selected.
	*   disabled - A flag indicating whether or not the item that caused the change event is disabled.
	*   index - The index of the List item that triggered the event.
	*   label - The label of the List item that triggered the event.
	*   removedItems - An array of List items that have been unselected before the event was fired.
	*   selected - The selected state of the List item that triggered the event. If an item was selected the value will be true and vice versa.
	*   value - The value of the List item that triggered the event.
	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered when an item is dropped. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	originalEvent, 	previousContainer, 	target)
	*   container - The List box that an item was dragged <strong>to.</strong>
	*   data - An object that contains data about the dragging operation like start position, start time, etc.
	*   item - The List item that was dragged.
	*   originalEvent - That original event that was fired.
	*   previousContainer - The List box that an item was dragged <strong>from</strong>.
	*   target - The event target.
	*/
	onDragEnd?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a List item is being dragged.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	data, 	item, 	originalEvent)
	*   data - An object that contains data about the dragging operation like start position, start time, etc.
	*   item - The List item that is being dragged. This is the item that has been clicked when initiating the drag operation
	*   originalEvent - The original event that initiates the dragging operation.
	*/
	onDragging?: ((event?: Event) => void) | undefined
	/**  This event is triggered when an item is dragged. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	originalEvent, 	previousContainer, 	target)
	*   container - The List box that an item was dragged <strong>to.</strong>
	*   data - An object that contains data about the dragging oepration like start position, start time, etc.
	*   item - The List item that was dragged.
	*   originalEvent - That original event that was fired.
	*   previousContainer - The List box that an item was dragged <strong>from</strong>.
	*   target - The event target.
	*/
	onDragStart?: ((event?: Event) => void) | undefined
	/**  This event is triggered when an item is clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	disabled, 	index, 	label, 	selected, 	value)
	*   disabled - Indicates whether the List item that was clicked is disabled or not.
	*   index - Indicates the index of the List item that was clicked.
	*   label - The label of the List item that was clicked.
	*   selected - Indicates whether the List item that was clicked is selected or not.
	*   value - The value of the List item that was clicked.
	*/
	onItemClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered when an item has been edited.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	selected, 	disabled, 	index, 	label, 	value)
	*   selected - Indicates whether the List item is selected or not.
	*   disabled - Indicates whether the List item is disabled or not.
	*   index - The index of the List item that was edited.
	*   label - The label of the edited List item.
	*   value - The value of the List item that was edited.
	*/
	onItemLabelChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered when user scrolls to the end of the list.
	*  @param event. The custom event. 	*/
	onScrollBottomReached?: ((event?: Event) => void) | undefined
	/**  This event is triggered when user scrolls to the beginning of the list.
	*  @param event. The custom event. 	*/
	onScrollTopReached?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user swipes to the left, inside the listBox.
	*  @param event. The custom event. 	*/
	onSwipeleft?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user swipes to the right, inside the listBox.
	*  @param event. The custom event. 	*/
	onSwiperight?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get events(): string[] {
		return ["onBindingComplete","onChange","onDragEnd","onDragging","onDragStart","onItemClick","onItemLabelChange","onScrollBottomReached","onScrollTopReached","onSwipeleft","onSwiperight","onCreate","onReady"];
	}
	/** Appends a ListItem to the end of the list of items inside element. 
	* @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
	* @returns {Node}
  */
	public async appendChild(node:Node) : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.appendChild(node);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Removes all items from the listBox. 
	*/
    public clearItems(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearItems();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearItems();
            });
        }
    }

	/** Unselects all items. 
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

	/** Ensures the target item is visible by scrolling to it. 
	* @param {HTMLElement | string} item. A list item or value of the desired item to be visible.
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

	/** Returns an item instance from the listBox. 
	* @param {string} value. The value of an item from the listBox.
	* @returns {HTMLElement}
  */
	public async getItem(value:string) : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getItem(value);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Inserts a new item at a specified index. 
	* @param {number} index. The index where the item must be inserted.
	* @param {any} items. A single item/definition or an array of List Items/definitions of list items to be inserted. The format of the item definitions is the same as the format of the <strong>dataSource</strong> property.
	*/
    public insert(index: number, items: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(index, items);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insert(index, items);
            });
        }
    }

	/** Inserts a new ListItem before another in the list. 
	* @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
	* @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
	* @returns {Node}
  */
	public async insertBefore(node:Node, referenceNode:Node | null) : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.insertBefore(node, referenceNode);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Removes an item at a specified index. 
	* @param {number} index. The index of the removed item.
	*/
    public removeAt(index: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAt(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAt(index);
            });
        }
    }

	/** Removes a ListItem from the list of items inside element. 
	* @param {Node} node. A ListItem element that is part of the list of items inside the element.
	* @returns {Node}
  */
	public async removeChild(node:Node) : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.removeChild(node);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Selects an item from the listBox.  
	* @param {string | number | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list.
	*/
    public select(item: string | number | HTMLElement): void {
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

	/** Unselects an item from the listBox.  
	* @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
	*/
    public unselect(item: string | HTMLElement): void {
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

	/** Updates an item from the listBox. 
	* @param {number} index. The index of the item that is going to be updated.
	* @param {any} details. An object that contains the properties and their new values for the List item that should be updated. For example, label, value or selected attributes.
	*/
    public update(index: number, details: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(index, details);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update(index, details);
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

		for(let i = 0; i < that.events.length; i++){
			const eventName = that.events[i];

			that.nativeElement.removeEventListener(eventName.substring(2).toLowerCase(), that[eventName]);
		}
	}

	render() {
		return (
			React.createElement("smart-list-box", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default ListBox;
