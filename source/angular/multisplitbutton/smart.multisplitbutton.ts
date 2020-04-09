import { MultiSplitButton } from './../index';
import { Animation, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, FilterMode, SearchMode, VerticalAlignment, MultiSplitButtonSelectionMode, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter, QueryList, ContentChildren } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, FilterMode, SearchMode, VerticalAlignment, MultiSplitButtonSelectionMode, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { MultiSplitButton } from './../index';


import { ListItemComponent } from './smart.listitem';

import { ListItemsGroupComponent } from './smart.listitemsgroup';

@Directive({
	selector: 'smart-multi-split-button, [smart-multi-split-button]'
})

export class MultiSplitButtonComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {

	constructor(ref: ElementRef<MultiSplitButton>) {
		super(ref);
		this.nativeElement = ref.nativeElement as MultiSplitButton;
	}

	private eventHandlers: any[] = [];

	public nativeElement: MultiSplitButton;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <MultiSplitButton>document.createElement('smart-multi-split-button');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
	@Input()
	get animation(): Animation {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation) {
		this.nativeElement ? this.nativeElement.animation = value : undefined;
	}

	/** @description Determines a data source used to generate element's permanently visible buttons. */
	@Input()
	get buttonsDataSource(): string[] {
		return this.nativeElement ? this.nativeElement.buttonsDataSource : undefined;
	}
	set buttonsDataSource(value: string[]) {
		this.nativeElement ? this.nativeElement.buttonsDataSource = value : undefined;
	}

	/** @description Determines the data source of the multi split button's dropdown. */
	@Input()
	get dataSource(): any {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Enables or disables jqxMultiSplitButton. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Displays or hides the loading indicator */
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

	/** @description Sets the parent container of the button's dropDown list (the popup). Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown list. */
	@Input()
	get dropDownAppendTo(): any {
		return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
	}
	set dropDownAppendTo(value: any) {
		this.nativeElement ? this.nativeElement.dropDownAppendTo = value : undefined;
	}

	/** @description Determines position of the drop down button. */
	@Input()
	get dropDownButtonPosition(): DropDownButtonPosition {
		return this.nativeElement ? this.nativeElement.dropDownButtonPosition : undefined;
	}
	set dropDownButtonPosition(value: DropDownButtonPosition) {
		this.nativeElement ? this.nativeElement.dropDownButtonPosition = value : undefined;
	}

	/** @description Defines how element's drop down behaves. In 'none' mode drop down never opens. In 'dropDownButton' mode drop down is opened only via elelent's drop down button. In 'auto' mode drop down is opened on click on the whole top section. */
	@Input()
	get dropDownOpenMode(): DropDownOpenMode {
		return this.nativeElement ? this.nativeElement.dropDownOpenMode : undefined;
	}
	set dropDownOpenMode(value: DropDownOpenMode) {
		this.nativeElement ? this.nativeElement.dropDownOpenMode = value : undefined;
	}

	/** @description If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. */
	@Input()
	get dropDownOverlay(): boolean {
		return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
	}
	set dropDownOverlay(value: boolean) {
		this.nativeElement ? this.nativeElement.dropDownOverlay = value : undefined;
	}

	/** @description Determines the vertical position of the dropDown list. 'Auto' means its automatically determined depending on the viewport size. */
	@Input()
	get dropDownPosition(): DropDownPosition {
		return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
	}
	set dropDownPosition(value: DropDownPosition) {
		this.nativeElement ? this.nativeElement.dropDownPosition = value : undefined;
	}

	/** @description Determines whether the Filtering is enabled. */
	@Input()
	get filterable(): boolean {
		return this.nativeElement ? this.nativeElement.filterable : undefined;
	}
	set filterable(value: boolean) {
		this.nativeElement ? this.nativeElement.filterable = value : undefined;
	}

	/** @description Determines the filtering for the drop down list mode. */
	@Input()
	get filterMode(): FilterMode {
		return this.nativeElement ? this.nativeElement.filterMode : undefined;
	}
	set filterMode(value: FilterMode) {
		this.nativeElement ? this.nativeElement.filterMode = value : undefined;
	}

	/** @description Determines the placeholder for the drop down list filter input field. */
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

	/** @description Sets or gets the groupMember. If it's not set, by default is used 'group' property of the source object. */
	@Input()
	get groupMember(): string {
		return this.nativeElement ? this.nativeElement.groupMember : undefined;
	}
	set groupMember(value: string) {
		this.nativeElement ? this.nativeElement.groupMember = value : undefined;
	}

	/** @description Sets ot gets the incrementalSearchDelay property. The incrementalSearchDelay specifies the time-interval in milliseconds after which the previous search string is deleted. The timer starts when you stop typing. */
	@Input()
	get incrementalSearchDelay(): number {
		return this.nativeElement ? this.nativeElement.incrementalSearchDelay : undefined;
	}
	set incrementalSearchDelay(value: number) {
		this.nativeElement ? this.nativeElement.incrementalSearchDelay = value : undefined;
	}

	/** @description Sets ot gets the mode of the incremental search mode. */
	@Input()
	get incrementalSearchMode(): SearchMode {
		return this.nativeElement ? this.nativeElement.incrementalSearchMode : undefined;
	}
	set incrementalSearchMode(value: SearchMode) {
		this.nativeElement ? this.nativeElement.incrementalSearchMode = value : undefined;
	}

	/** @description Determines the height of the items. */
	@Input()
	get itemHeight(): number | null {
		return this.nativeElement ? this.nativeElement.itemHeight : undefined;
	}
	set itemHeight(value: number | null) {
		this.nativeElement ? this.nativeElement.itemHeight = value : undefined;
	}

	/** @description The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM. It's used to load list items from the HTMLTemplateElement. */
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

	/** @description The position of the loading indicator. */
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

	/** @description Callback, related to localization module.  */
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

	/** @description Determines whether the popup is opened or closed */
	@Input()
	get opened(): boolean {
		return this.nativeElement ? this.nativeElement.opened : undefined;
	}
	set opened(value: boolean) {
		this.nativeElement ? this.nativeElement.opened = value : undefined;
	}

	/** @description Disables user interaction with the element. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description Sets or gets selected indexes of buttons's dropDown. */
	@Input()
	get selectedIndexes(): number[] {
		return this.nativeElement ? this.nativeElement.selectedIndexes : undefined;
	}
	set selectedIndexes(value: number[]) {
		this.nativeElement ? this.nativeElement.selectedIndexes = value : undefined;
	}

	/** @description Sets or gets selected values of buttons's dropDown. */
	@Input()
	get selectedValues(): string[] {
		return this.nativeElement ? this.nativeElement.selectedValues : undefined;
	}
	set selectedValues(value: string[]) {
		this.nativeElement ? this.nativeElement.selectedValues = value : undefined;
	}

	/** @description Determines how many items can be selected. */
	@Input()
	get selectionMode(): MultiSplitButtonSelectionMode {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value: MultiSplitButtonSelectionMode) {
		this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
	}

	/** @description Determines whether the items in the dropDown are sorted alphabetically or not */
	@Input()
	get sorted(): boolean {
		return this.nativeElement ? this.nativeElement.sorted : undefined;
	}
	set sorted(value: boolean) {
		this.nativeElement ? this.nativeElement.sorted = value : undefined;
	}

	/** @description Determines the theme. Theme defines the look of the element */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description If is set to true, the element cannot be focused. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
	}

	/** @description Determines the value member of an item. Stored as value in the item object. */
	@Input()
	get valueMember(): string {
		return this.nativeElement ? this.nativeElement.valueMember : undefined;
	}
	set valueMember(value: string) {
		this.nativeElement ? this.nativeElement.valueMember = value : undefined;
	}

	/** @description Determines weather or not Virtualization is used for the button's dropDownList. */
	@Input()
	get virtualized(): boolean {
		return this.nativeElement ? this.nativeElement.virtualized : undefined;
	}
	set virtualized(value: boolean) {
		this.nativeElement ? this.nativeElement.virtualized = value : undefined;
	}

	/** @description This event is triggered when button's dropDown selection is changed.
	*  @param event. The custom event. 	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when button's dropDown list is closed.
	*  @param event. The custom event. 	*/
	@Output() onClose: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when button's dropDown list is closing.
	*  @param event. The custom event. 	*/
	@Output() onClosing: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when user clicks any of the element's buttons or button's dropDown items.
	*  @param event. The custom event. 	*/
	@Output() onItemClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when button's dropDown list is opened.
	*  @param event. The custom event. 	*/
	@Output() onOpen: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when button's dropDown list is opening.
	*  @param event. The custom event. 	*/
	@Output() onOpening: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when user scrolls to the end of the dropDown list.
	*  @param event. The custom event. 	*/
	@Output() onScrollBottomReached: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when user scrolls to the start of the dropDown list.
	*  @param event. The custom event. 	*/
	@Output() onScrollTopReached: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Closes button's dropDown list. 
	*/
    public close(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.close();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.close();
            });
        }
    }

	/** @description Returns an item instance occured in the element's drop down. 
	* @param {string} value. The value of an item from the drop down list or a button.
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

	/** @description Returns an array with the items from the split button's dropDown list. 
	* @returns {any[]}
  */
	public async items(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.items();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Inserts a new item at a specified position in the drop down list. 
	* @param {number} position. The position where the item must be inserted.
	* @param {any} value. The value of the new item.
	*/
    public insert(position: number, value: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(position, value);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insert(position, value);
            });
        }
    }

	/** @description Opens the splitButton's dropDown list. 
	*/
    public open(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.open();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.open();
            });
        }
    }

	/** @description Removes an item at a specified position in the drop down list. 
	* @param {number} position. The position of the removed item.
	*/
    public removeAt(position: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAt(position);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAt(position);
            });
        }
    }

	/** @description Updates an item from the dropDown list. 
	* @param {number} position. The position where the item must be updated.
	* @param {any} value. The value of the updated item.
	*/
    public update(position: number, value: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(position, value);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update(position, value);
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

		that.eventHandlers['itemClickHandler'] = (event: CustomEvent) => { that.onItemClick.emit(event); }
		that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);

		that.eventHandlers['openHandler'] = (event: CustomEvent) => { that.onOpen.emit(event); }
		that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);

		that.eventHandlers['openingHandler'] = (event: CustomEvent) => { that.onOpening.emit(event); }
		that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);

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

		if (that.eventHandlers['closeHandler']) {
			that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
		}

		if (that.eventHandlers['closingHandler']) {
			that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
		}

		if (that.eventHandlers['itemClickHandler']) {
			that.nativeElement.removeEventListener('itemClick', that.eventHandlers['itemClickHandler']);
		}

		if (that.eventHandlers['openHandler']) {
			that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
		}

		if (that.eventHandlers['openingHandler']) {
			that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
		}

		if (that.eventHandlers['scrollBottomReachedHandler']) {
			that.nativeElement.removeEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
		}

		if (that.eventHandlers['scrollTopReachedHandler']) {
			that.nativeElement.removeEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
		}

	}
}
