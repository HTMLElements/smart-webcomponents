import { ListBox } from './../index';
import { Animation, ListBoxDropAction, FilterMode, HorizontalScrollBarVisibility, SearchMode, ListItemMeasureMode, VerticalAlignment, ListSelectionMode, ListBoxSelectionChangeAction, VerticalScrollBarVisibility, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, forwardRef, ChangeDetectionStrategy, Output, EventEmitter, QueryList, ContentChildren } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, ListBoxDropAction, FilterMode, HorizontalScrollBarVisibility, SearchMode, ListItemMeasureMode, VerticalAlignment, ListSelectionMode, ListBoxSelectionChangeAction, VerticalScrollBarVisibility, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { ListBox } from './../index';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';



import { ListItemComponent } from './smart.listitem';

import { ListItemsGroupComponent } from './smart.listitemsgroup';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ListBoxComponent),
    multi: true
}

@Directive({
	selector: 'smart-list-box, [smart-list-box]',
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]

})

export class ListBoxComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {

	constructor(ref: ElementRef<ListBox>) {
		super(ref);
		this.nativeElement = ref.nativeElement as ListBox;
	}

	private eventHandlers: any[] = [];

	public nativeElement: ListBox;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <ListBox>document.createElement('smart-list-box');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
        /**
        * @description
        * The registered callback function called when a change event occurs on the form elements.
        */
       _onChange: (value: any) => void = () => {};
        /**
        * @description
        * The registered callback function called when a blur event occurs on the form elements.
        */
       _onTouched: () => any = () => {};


	/** @description Enables or disables the ability to drag list items out of the List box. Disabled items cannot be dragged. */
	@Input()
	get allowDrag(): boolean {
		return this.nativeElement ? this.nativeElement.allowDrag : undefined;
	}
	set allowDrag(value: boolean) {
		this.nativeElement ? this.nativeElement.allowDrag = value : undefined;
	}

	/** @description Enables or disables the ability to drop list items inside the target List box. */
	@Input()
	get allowDrop(): boolean {
		return this.nativeElement ? this.nativeElement.allowDrop : undefined;
	}
	set allowDrop(value: boolean) {
		this.nativeElement ? this.nativeElement.allowDrop = value : undefined;
	}

	/** @description Determines the number of color alternations in rows. */
	@Input()
	get alternationCount(): number {
		return this.nativeElement ? this.nativeElement.alternationCount : undefined;
	}
	set alternationCount(value: number) {
		this.nativeElement ? this.nativeElement.alternationCount = value : undefined;
	}

	/** @description Determines the ending index of color alternations in rows. */
	@Input()
	get alternationEnd(): number {
		return this.nativeElement ? this.nativeElement.alternationEnd : undefined;
	}
	set alternationEnd(value: number) {
		this.nativeElement ? this.nativeElement.alternationEnd = value : undefined;
	}

	/** @description Determines the starting index of color alternations in rows */
	@Input()
	get alternationStart(): number {
		return this.nativeElement ? this.nativeElement.alternationStart : undefined;
	}
	set alternationStart(value: number) {
		this.nativeElement ? this.nativeElement.alternationStart = value : undefined;
	}

	/** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
	@Input()
	get animation(): Animation {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation) {
		this.nativeElement ? this.nativeElement.animation = value : undefined;
	}

	/** @description Enables or disables auto sorting. If sorted is enabled, but autoSort is false, the element will not be re-sorted automatically. */
	@Input()
	get autoSort(): boolean {
		return this.nativeElement ? this.nativeElement.autoSort : undefined;
	}
	set autoSort(value: boolean) {
		this.nativeElement ? this.nativeElement.autoSort = value : undefined;
	}

	/** @description Determines the data source that will be loaded to the ListBox. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value, group. It can also be a callback that returns an Array of items as previously described. */
	@Input()
	get dataSource(): any {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Enables or disables the list box. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Determines whether an indicator will appear during filtering and remote item loading. */
	@Input()
	get displayLoadingIndicator(): boolean {
		return this.nativeElement ? this.nativeElement.displayLoadingIndicator : undefined;
	}
	set displayLoadingIndicator(value: boolean) {
		this.nativeElement ? this.nativeElement.displayLoadingIndicator = value : undefined;
	}

	/** @description Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property. */
	@Input()
	get displayMember(): string {
		return this.nativeElement ? this.nativeElement.displayMember : undefined;
	}
	set displayMember(value: string) {
		this.nativeElement ? this.nativeElement.displayMember = value : undefined;
	}

	/** @description A callback function for customizing the HTML of the drag feedback. It receives one parameter - the currently dragged item. */
	@Input()
	get dragFeedbackFormatFunction(): any {
		return this.nativeElement ? this.nativeElement.dragFeedbackFormatFunction : undefined;
	}
	set dragFeedbackFormatFunction(value: any) {
		this.nativeElement ? this.nativeElement.dragFeedbackFormatFunction = value : undefined;
	}

	/** @description Determines the offset of the drag feedback element from the mouse cursor when dragging an item. The first member of the array is the horizontal offset and the second one - the vertical offset. */
	@Input()
	get dragOffset(): number[] {
		return this.nativeElement ? this.nativeElement.dragOffset : undefined;
	}
	set dragOffset(value: number[]) {
		this.nativeElement ? this.nativeElement.dragOffset = value : undefined;
	}

	/** @description Determines what happens when an item is dropped. */
	@Input()
	get dropAction(): ListBoxDropAction {
		return this.nativeElement ? this.nativeElement.dropAction : undefined;
	}
	set dropAction(value: ListBoxDropAction) {
		this.nativeElement ? this.nativeElement.dropAction = value : undefined;
	}

	/** @description Determines if list items can be edited or not. If enabled, items can be edited by double clicking on a target item ( that is not disabled ) or pressing the F2 key on the keyboard. */
	@Input()
	get editable(): boolean {
		return this.nativeElement ? this.nativeElement.editable : undefined;
	}
	set editable(value: boolean) {
		this.nativeElement ? this.nativeElement.editable = value : undefined;
	}

	/** @description Determines whether list items can be filtered or not. If enable a filter input appears at the top of the list box. */
	@Input()
	get filterable(): boolean {
		return this.nativeElement ? this.nativeElement.filterable : undefined;
	}
	set filterable(value: boolean) {
		this.nativeElement ? this.nativeElement.filterable = value : undefined;
	}

	/** @description A callback that should return a condition that will be used for custom item filtering. Used in conjunction with filterMode 'custom' */
	@Input()
	get filterCallback(): any {
		return this.nativeElement ? this.nativeElement.filterCallback : undefined;
	}
	set filterCallback(value: any) {
		this.nativeElement ? this.nativeElement.filterCallback = value : undefined;
	}

	/** @description Determines the filtering mode. */
	@Input()
	get filterMode(): FilterMode {
		return this.nativeElement ? this.nativeElement.filterMode : undefined;
	}
	set filterMode(value: FilterMode) {
		this.nativeElement ? this.nativeElement.filterMode = value : undefined;
	}

	/** @description Determines the placeholder for the filter input field. */
	@Input()
	get filterInputPlaceholder(): string {
		return this.nativeElement ? this.nativeElement.filterInputPlaceholder : undefined;
	}
	set filterInputPlaceholder(value: string) {
		this.nativeElement ? this.nativeElement.filterInputPlaceholder = value : undefined;
	}

	/** @description If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups. */
	@Input()
	get grouped(): boolean {
		return this.nativeElement ? this.nativeElement.grouped : undefined;
	}
	set grouped(value: boolean) {
		this.nativeElement ? this.nativeElement.grouped = value : undefined;
	}

	/** @description Determines which attribute from the dataSource object will be used as the group member for the items. If not set, by default 'group' property is used from the source object. groupMember is especially usefull when loading the data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used to group the items. */
	@Input()
	get groupMember(): string | null {
		return this.nativeElement ? this.nativeElement.groupMember : undefined;
	}
	set groupMember(value: string | null) {
		this.nativeElement ? this.nativeElement.groupMember = value : undefined;
	}

	/** @description Determines the visibility of the horizontal Scroll bar. */
	@Input()
	get horizontalScrollBarVisibility(): HorizontalScrollBarVisibility {
		return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
	}
	set horizontalScrollBarVisibility(value: HorizontalScrollBarVisibility) {
		this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility = value : undefined;
	}

	/** @description IncrementalSearchDelay property specifies the time-interval in milliseconds until the previous search query is cleared. The timer starts when the user stops typing. A new query can be started only when the delay has passed. */
	@Input()
	get incrementalSearchDelay(): number {
		return this.nativeElement ? this.nativeElement.incrementalSearchDelay : undefined;
	}
	set incrementalSearchDelay(value: number) {
		this.nativeElement ? this.nativeElement.incrementalSearchDelay = value : undefined;
	}

	/** @description Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the List box is focused starts the incremental search. */
	@Input()
	get incrementalSearchMode(): SearchMode {
		return this.nativeElement ? this.nativeElement.incrementalSearchMode : undefined;
	}
	set incrementalSearchMode(value: SearchMode) {
		this.nativeElement ? this.nativeElement.incrementalSearchMode = value : undefined;
	}

	/** @description Sets the height for all list box items. Used only when virtualization is enabled. */
	@Input()
	get itemHeight(): number {
		return this.nativeElement ? this.nativeElement.itemHeight : undefined;
	}
	set itemHeight(value: number) {
		this.nativeElement ? this.nativeElement.itemHeight = value : undefined;
	}

	/** @description Determines the item width measuring algorithm. */
	@Input()
	get itemMeasureMode(): ListItemMeasureMode {
		return this.nativeElement ? this.nativeElement.itemMeasureMode : undefined;
	}
	set itemMeasureMode(value: ListItemMeasureMode) {
		this.nativeElement ? this.nativeElement.itemMeasureMode = value : undefined;
	}

	/** @description A getter that returns an array of all ListBox items. */
	@Input()
	get items(): {label: string, value: string}[] {
		return this.nativeElement ? this.nativeElement.items : undefined;
	}
	set items(value: {label: string, value: string}[]) {
		this.nativeElement ? this.nativeElement.items = value : undefined;
	}

	/** @description A string that represents the id of an HTMLTemplateElement inside the DOM or a reference to the template itself. It's used to set a custom template for the list items. */
	@Input()
	get itemTemplate(): any {
		return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
	}
	set itemTemplate(value: any) {
		this.nativeElement ? this.nativeElement.itemTemplate = value : undefined;
	}

	/** @description Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom. */
	@Input()
	get loadingIndicatorPlaceholder(): string {
		return this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder : undefined;
	}
	set loadingIndicatorPlaceholder(value: string) {
		this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder = value : undefined;
	}

	/** @description Determines the position of the loading indicator. */
	@Input()
	get loadingIndicatorPosition(): VerticalAlignment {
		return this.nativeElement ? this.nativeElement.loadingIndicatorPosition : undefined;
	}
	set loadingIndicatorPosition(value: VerticalAlignment) {
		this.nativeElement ? this.nativeElement.loadingIndicatorPosition = value : undefined;
	}

	/** @description Sets or gets the language. Used in conjunction with the property messages.  */
	@Input()
	get locale(): string {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		this.nativeElement ? this.nativeElement.locale = value : undefined;
	}

	/** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
	@Input()
	get localizeFormatFunction(): any {
		return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	}
	set localizeFormatFunction(value: any) {
		this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
	}

	/** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language.  */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
	@Input()
	get name(): string {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		this.nativeElement ? this.nativeElement.name = value : undefined;
	}

	/** @description Determines the placeholder that will be shown when the List box is empty. */
	@Input()
	get placeholder(): string {
		return this.nativeElement ? this.nativeElement.placeholder : undefined;
	}
	set placeholder(value: string) {
		this.nativeElement ? this.nativeElement.placeholder = value : undefined;
	}

	/** @description Sets or gets the readonly property. If the element is readonly, users cannot interact with it. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description Sets or gets the selected indexes. Selected indexes represents an array of the indexes of the items that should be selected. */
	@Input()
	get selectedIndexes(): number[] {
		return this.nativeElement ? this.nativeElement.selectedIndexes : undefined;
	}
	set selectedIndexes(value: number[]) {
		this.nativeElement ? this.nativeElement.selectedIndexes = value : undefined;
	}

	/** @description Sets or gets elected indexes. Selected values represents the values of the items that should be selected. */
	@Input()
	get selectedValues(): string[] {
		return this.nativeElement ? this.nativeElement.selectedValues : undefined;
	}
	set selectedValues(value: string[]) {
		this.nativeElement ? this.nativeElement.selectedValues = value : undefined;
	}

	/** @description Determines how many items can be selected depending on the selection mode. */
	@Input()
	get selectionMode(): ListSelectionMode {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value: ListSelectionMode) {
		this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
	}

	/** @description Determines when listbox selection is achieved - on 'press' or 'release'. */
	@Input()
	get selectionChangeAction(): ListBoxSelectionChangeAction {
		return this.nativeElement ? this.nativeElement.selectionChangeAction : undefined;
	}
	set selectionChangeAction(value: ListBoxSelectionChangeAction) {
		this.nativeElement ? this.nativeElement.selectionChangeAction = value : undefined;
	}

	/** @description Determines whether the items are sorted alphabetically or not */
	@Input()
	get sorted(): boolean {
		return this.nativeElement ? this.nativeElement.sorted : undefined;
	}
	set sorted(value: boolean) {
		this.nativeElement ? this.nativeElement.sorted = value : undefined;
	}

	/** @description Determines sorting direction - ascending(asc) or descending(desc) */
	@Input()
	get sortDirection(): string {
		return this.nativeElement ? this.nativeElement.sortDirection : undefined;
	}
	set sortDirection(value: string) {
		this.nativeElement ? this.nativeElement.sortDirection = value : undefined;
	}

	/** @description Determines the theme for the element. Themes define the look of the elements. */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description Ensures the item with the target index is in view as the first (top) item in the list box. */
	@Input()
	get topVisibleIndex(): number {
		return this.nativeElement ? this.nativeElement.topVisibleIndex : undefined;
	}
	set topVisibleIndex(value: number) {
		this.nativeElement ? this.nativeElement.topVisibleIndex = value : undefined;
	}

	/** @description If is set to true, the element cannot be focused. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
	}

	/** @description Sets or gets the value. Returns the selection. Return type: {label: string, value: any}[]. */
	@Input()
	get value(): any {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: any) {
		this.nativeElement ? this.nativeElement.value = value : undefined;
	}

	/** @description Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items. */
	@Input()
	get valueMember(): string {
		return this.nativeElement ? this.nativeElement.valueMember : undefined;
	}
	set valueMember(value: string) {
		this.nativeElement ? this.nativeElement.valueMember = value : undefined;
	}

	/** @description Determines the visibility of the vertical scroll bar. */
	@Input()
	get verticalScrollBarVisibility(): VerticalScrollBarVisibility {
		return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
	}
	set verticalScrollBarVisibility(value: VerticalScrollBarVisibility) {
		this.nativeElement ? this.nativeElement.verticalScrollBarVisibility = value : undefined;
	}

	/** @description Determines weather or not Virtualization is used for the ListBox. Virtualization allows a huge amount of items to be loaded to the List box while preserving the performance. For example a milion items can be loaded to the list box. */
	@Input()
	get virtualized(): boolean {
		return this.nativeElement ? this.nativeElement.virtualized : undefined;
	}
	set virtualized(value: boolean) {
		this.nativeElement ? this.nativeElement.virtualized = value : undefined;
	}

	/** @description This event is triggered when listbox binding is completed.
	*  @param event. The custom event. 	*/
	@Output() onBindingComplete: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when selection is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	addedItems, 	disabled, 	index, 	label, 	removedItems, 	selected, 	value)
	*   addedItems - An array of List items that have been selected.
	*   disabled - A flag indicating whether or not the item that caused the change event is disabled.
	*   index - The index of the List item that triggered the event.
	*   label - The label of the List item that triggered the event.
	*   removedItems - An array of List items that have been unselected before the event was fired.
	*   selected - The selected state of the List item that triggered the event. If an item was selected the value will be true and vice versa.
	*   value - The value of the List item that triggered the event.
	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when an item is dropped. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	originalEvent, 	previousContainer, 	target)
	*   container - The List box that an item was dragged <strong>to.</strong>
	*   data - An object that contains data about the dragging operation like start position, start time, etc.
	*   item - The List item that was dragged.
	*   originalEvent - That original event that was fired.
	*   previousContainer - The List box that an item was dragged <strong>from</strong>.
	*   target - The event target.
	*/
	@Output() onDragEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a List item is being dragged.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	data, 	item, 	originalEvent)
	*   data - An object that contains data about the dragging operation like start position, start time, etc.
	*   item - The List item that is being dragged. This is the item that has been clicked when initiating the drag operation
	*   originalEvent - The original event that initiates the dragging operation.
	*/
	@Output() onDragging: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when an item is dragged. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	originalEvent, 	previousContainer, 	target)
	*   container - The List box that an item was dragged <strong>to.</strong>
	*   data - An object that contains data about the dragging oepration like start position, start time, etc.
	*   item - The List item that was dragged.
	*   originalEvent - That original event that was fired.
	*   previousContainer - The List box that an item was dragged <strong>from</strong>.
	*   target - The event target.
	*/
	@Output() onDragStart: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when an item is clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	disabled, 	index, 	label, 	selected, 	value)
	*   disabled - Indicates whether the List item that was clicked is disabled or not.
	*   index - Indicates the index of the List item that was clicked.
	*   label - The label of the List item that was clicked.
	*   selected - Indicates whether the List item that was clicked is selected or not.
	*   value - The value of the List item that was clicked.
	*/
	@Output() onItemClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when an item has been edited.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	selected, 	disabled, 	index, 	label, 	value)
	*   selected - Indicates whether the List item is selected or not.
	*   disabled - Indicates whether the List item is disabled or not.
	*   index - The index of the List item that was edited.
	*   label - The label of the edited List item.
	*   value - The value of the List item that was edited.
	*/
	@Output() onItemLabelChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when user scrolls to the end of the list.
	*  @param event. The custom event. 	*/
	@Output() onScrollBottomReached: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when user scrolls to the beginning of the list.
	*  @param event. The custom event. 	*/
	@Output() onScrollTopReached: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the user swipes to the left, inside the listBox.
	*  @param event. The custom event. 	*/
	@Output() onSwipeleft: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the user swipes to the right, inside the listBox.
	*  @param event. The custom event. 	*/
	@Output() onSwiperight: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Appends a ListItem to the end of the list of items inside element. 
	* @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
	* @returns {Node}
  */
	public async appendChild(node): Promise<any> {
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

	/** @description Removes all items from the listBox. 
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

	/** @description Unselects all items. 
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

	/** @description Ensures the target item is visible by scrolling to it. 
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

	/** @description Returns an item instance from the listBox. 
	* @param {string} value. The value of an item from the listBox.
	* @returns {HTMLElement}
  */
	public async getItem(value): Promise<any> {
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

	/** @description Inserts a new item at a specified index. 
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

	/** @description Inserts a new ListItem before another in the list. 
	* @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
	* @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
	* @returns {Node}
  */
	public async insertBefore(node, referenceNode): Promise<any> {
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

	/** @description Removes an item at a specified index. 
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

	/** @description Removes a ListItem from the list of items inside element. 
	* @param {Node} node. A ListItem element that is part of the list of items inside the element.
	* @returns {Node}
  */
	public async removeChild(node): Promise<any> {
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

	/** @description Selects an item from the listBox.  
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

	/** @description Unselects an item from the listBox.  
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

	/** @description Updates an item from the listBox. 
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

	_initialChange = true; 

	get ngValue(): any {
		if (!this.nativeElement) {
			return null;
		}

		if (this.selectedValues && this.selectedValues.length > 0) {
			const value = this.selectedValues.length === 1 ? this.nativeElement.selectedValues[0] : this.nativeElement.selectedValues;
			return value;
		}
        return null;
		const value = this.nativeElement.value;
		return value;
	}

	set ngValue(value: any) {
		if (this.nativeElement) {
		    this.writeValue(value);
		}
	}

	writeValue(value: any): void {
        const that = this;
        const normalizedValue = value == null ? '' : value;

		that.nativeElement.whenRendered(() => {
            that.nativeElement.isInitialized = that._initialChange ? false : true;
			that.clearSelection();
            if (Array.isArray(normalizedValue)) {
                value.forEach((currentValue: any) => this.select(currentValue));
                }
                else {
                    that.select(normalizedValue);
                }
            that.nativeElement.isInitialized = true;
			if (that._initialChange === false) {
               if (that.selectedValues && that.selectedValues.length > 1) {
                    that._onChange(that.selectedValues);
                }
                else {
                    that._onChange((that.selectedValues && that.selectedValues.length > 0) ? that.selectedValues[0] : null);
                } 
            }
		});
	}

	registerOnChange(fn: any): void {
		this._onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this._onTouched = fn;
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
		that.eventHandlers['bindingCompleteHandler'] = (event: CustomEvent) => { that.onBindingComplete.emit(event); }
		that.nativeElement.addEventListener('bindingComplete', that.eventHandlers['bindingCompleteHandler']);

		that.eventHandlers['changeHandler'] = (event: CustomEvent) => { that.onChange.emit(event); }
		that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);

		that.eventHandlers['dragEndHandler'] = (event: CustomEvent) => { that.onDragEnd.emit(event); }
		that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);

		that.eventHandlers['draggingHandler'] = (event: CustomEvent) => { that.onDragging.emit(event); }
		that.nativeElement.addEventListener('dragging', that.eventHandlers['draggingHandler']);

		that.eventHandlers['dragStartHandler'] = (event: CustomEvent) => { that.onDragStart.emit(event); }
		that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);

		that.eventHandlers['itemClickHandler'] = (event: CustomEvent) => { that.onItemClick.emit(event); }
		that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);

		that.eventHandlers['itemLabelChangeHandler'] = (event: CustomEvent) => { that.onItemLabelChange.emit(event); }
		that.nativeElement.addEventListener('itemLabelChange', that.eventHandlers['itemLabelChangeHandler']);

		that.eventHandlers['scrollBottomReachedHandler'] = (event: CustomEvent) => { that.onScrollBottomReached.emit(event); }
		that.nativeElement.addEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);

		that.eventHandlers['scrollTopReachedHandler'] = (event: CustomEvent) => { that.onScrollTopReached.emit(event); }
		that.nativeElement.addEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);

		that.eventHandlers['swipeleftHandler'] = (event: CustomEvent) => { that.onSwipeleft.emit(event); }
		that.nativeElement.addEventListener('swipeleft', that.eventHandlers['swipeleftHandler']);

		that.eventHandlers['swiperightHandler'] = (event: CustomEvent) => { that.onSwiperight.emit(event); }
		that.nativeElement.addEventListener('swiperight', that.eventHandlers['swiperightHandler']);


        that.eventHandlers['changeModelHandler'] = (event: Event) =>
        {
            that._initialChange = false;
            that._onChange(that.nativeElement.selectedValues.length > 0 ? (that.nativeElement.selectedValues.length > 1 ? that.nativeElement.selectedValues : that.nativeElement.selectedValues[0]) : null); 
        }
        that.eventHandlers['blurModelHandler'] = (event: Event) => {
            that._onTouched();
        };
        that.nativeElement.whenRendered(() => {
            if (that.nativeElement.querySelector('input')) {    
                that.eventHandlers['keyupModelHandler'] = (event) => {
                    setTimeout(() => { that.eventHandlers['changeModelHandler'](event); }, 50);
                };

                that.nativeElement.querySelector('input').addEventListener('keyup', that.eventHandlers['keyupModelHandler']);
            }
        });
		that.nativeElement.addEventListener('change', that.eventHandlers['changeModelHandler']);
		that.nativeElement.addEventListener('blur', that.eventHandlers['blurModelHandler']);
	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['bindingCompleteHandler']) {
			that.nativeElement.removeEventListener('bindingComplete', that.eventHandlers['bindingCompleteHandler']);
		}

		if (that.eventHandlers['changeHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
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

		if (that.eventHandlers['itemClickHandler']) {
			that.nativeElement.removeEventListener('itemClick', that.eventHandlers['itemClickHandler']);
		}

		if (that.eventHandlers['itemLabelChangeHandler']) {
			that.nativeElement.removeEventListener('itemLabelChange', that.eventHandlers['itemLabelChangeHandler']);
		}

		if (that.eventHandlers['scrollBottomReachedHandler']) {
			that.nativeElement.removeEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
		}

		if (that.eventHandlers['scrollTopReachedHandler']) {
			that.nativeElement.removeEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
		}

		if (that.eventHandlers['swipeleftHandler']) {
			that.nativeElement.removeEventListener('swipeleft', that.eventHandlers['swipeleftHandler']);
		}

		if (that.eventHandlers['swiperightHandler']) {
			that.nativeElement.removeEventListener('swiperight', that.eventHandlers['swiperightHandler']);
		}

		if (that.eventHandlers['changeModelHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeModelHandler']);
            if (that.nativeElement.querySelector('input')) {
                  that.nativeElement.querySelector('input').removeEventListener('keyup', that.eventHandlers['keyupModelHandler']);
            }
		}
		if (that.eventHandlers['blurModelHandler']) {
			that.nativeElement.removeEventListener('blur', that.eventHandlers['blurModelHandler']);
		}
	}
}
