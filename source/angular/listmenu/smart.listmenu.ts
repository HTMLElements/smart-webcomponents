import { ListMenu } from './../index';
import { Animation, MenuCheckMode, MenuDropDownPosition, FilterMode, VerticalAlignment, Overflow, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter, QueryList, ContentChildren } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, MenuCheckMode, MenuDropDownPosition, FilterMode, VerticalAlignment, Overflow, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { ListMenu } from './../index';


import { MenuItemComponent } from './smart.menuitem';

import { MenuItemsGroupComponent } from './smart.menuitemsgroup';

@Directive({
	selector: 'smart-list-menu, [smart-list-menu]'
})

export class ListMenuComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {

	constructor(ref: ElementRef<ListMenu>) {
		super(ref);
		this.nativeElement = ref.nativeElement as ListMenu;
	}

	private eventHandlers: any[] = [];

	public nativeElement: ListMenu;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <ListMenu>document.createElement('smart-list-menu');
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

	/** @description Determines whether the element becomes focused on hover or not. */
	@Input()
	get autoFocusOnMouseenter(): boolean {
		return this.nativeElement ? this.nativeElement.autoFocusOnMouseenter : undefined;
	}
	set autoFocusOnMouseenter(value: boolean) {
		this.nativeElement ? this.nativeElement.autoFocusOnMouseenter = value : undefined;
	}

	/** @description Allows top-level ListMenu items to be checkable. */
	@Input()
	get checkable(): boolean {
		return this.nativeElement ? this.nativeElement.checkable : undefined;
	}
	set checkable(value: boolean) {
		this.nativeElement ? this.nativeElement.checkable = value : undefined;
	}

	/** @description Sets or gets whether checkboxes and radio buttons can be displayed in the top level menu groups. This property is applicable only to the ListMenu itself, and not its smart-menu-item/smart-menu-items-group subitems. See also the property checkable. */
	@Input()
	get checkboxes(): boolean {
		return this.nativeElement ? this.nativeElement.checkboxes : undefined;
	}
	set checkboxes(value: boolean) {
		this.nativeElement ? this.nativeElement.checkboxes = value : undefined;
	}

	/** @description Sets the check mode of top-level ListMenu items(groups). */
	@Input()
	get checkMode(): MenuCheckMode {
		return this.nativeElement ? this.nativeElement.checkMode : undefined;
	}
	set checkMode(value: MenuCheckMode) {
		this.nativeElement ? this.nativeElement.checkMode = value : undefined;
	}

	/** @description Determines the data source that will be loaded to the ListMenu. The data source represents an array of objects with the following properties: label - a string representing the text content of the item.value - the value of the item.shortcut - a string representing a shortuct for the item. It will be displayed inside the item.items - allows to define an array of sub menu items. */
	@Input()
	get dataSource(): any {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Enables or disables the element. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Displays or hides the loading indicator. Loading indicator is hidden by default. */
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

	/** @description Sets custom outer container where the minimized dropdown will be appednded. By default it is in the ListMenu. The value of the property can be an HTML element or the id of an HTML element. */
	@Input()
	get dropDownAppendTo(): string | HTMLElement {
		return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
	}
	set dropDownAppendTo(value: string | HTMLElement) {
		this.nativeElement ? this.nativeElement.dropDownAppendTo = value : undefined;
	}

	/** @description If this property is enabled, when the element's minimized dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. */
	@Input()
	get dropDownOverlay(): boolean {
		return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
	}
	set dropDownOverlay(value: boolean) {
		this.nativeElement ? this.nativeElement.dropDownOverlay = value : undefined;
	}

	/** @description Sets or gets the opening direction of the ListMenu minimized dropdown. */
	@Input()
	get dropDownPosition(): MenuDropDownPosition {
		return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
	}
	set dropDownPosition(value: MenuDropDownPosition) {
		this.nativeElement ? this.nativeElement.dropDownPosition = value : undefined;
	}

	/** @description Enables or disables scrolling using the mouse wheel through overflowing menu items. */
	@Input()
	get enableMouseWheelAction(): boolean {
		return this.nativeElement ? this.nativeElement.enableMouseWheelAction : undefined;
	}
	set enableMouseWheelAction(value: boolean) {
		this.nativeElement ? this.nativeElement.enableMouseWheelAction = value : undefined;
	}

	/** @description Determines whether menu item filtering is enabled. When enabled a filter input is shown at the top of the element. Only items in the current view can be filtered. */
	@Input()
	get filterable(): boolean {
		return this.nativeElement ? this.nativeElement.filterable : undefined;
	}
	set filterable(value: boolean) {
		this.nativeElement ? this.nativeElement.filterable = value : undefined;
	}

	/** @description Determines the placeholder for the filter input. */
	@Input()
	get filterInputPlaceholder(): string {
		return this.nativeElement ? this.nativeElement.filterInputPlaceholder : undefined;
	}
	set filterInputPlaceholder(value: string) {
		this.nativeElement ? this.nativeElement.filterInputPlaceholder = value : undefined;
	}

	/** @description Determines the filtering mode. */
	@Input()
	get filterMode(): FilterMode {
		return this.nativeElement ? this.nativeElement.filterMode : undefined;
	}
	set filterMode(value: FilterMode) {
		this.nativeElement ? this.nativeElement.filterMode = value : undefined;
	}

	/** @description If enabled, the items will be grouped by their first letter and sorted. */
	@Input()
	get grouped(): boolean {
		return this.nativeElement ? this.nativeElement.grouped : undefined;
	}
	set grouped(value: boolean) {
		this.nativeElement ? this.nativeElement.grouped = value : undefined;
	}

	/** @description Determines the field in the data source that corresponds to an item group's subitems collection. */
	@Input()
	get itemsMember(): string {
		return this.nativeElement ? this.nativeElement.itemsMember : undefined;
	}
	set itemsMember(value: string) {
		this.nativeElement ? this.nativeElement.itemsMember = value : undefined;
	}

	/** @description Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom. */
	@Input()
	get loadingIndicatorPlaceholder(): string {
		return this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder : undefined;
	}
	set loadingIndicatorPlaceholder(value: string) {
		this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder = value : undefined;
	}

	/** @description Determines the position of the loading indicator inside the element. */
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

	/** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Allows to load a custom minimize icon from an HTMLTemplateElement.The property acceps the id of an HTMLTemplateElement or it's direct instance. */
	@Input()
	get minimizeIconTemplate(): string {
		return this.nativeElement ? this.nativeElement.minimizeIconTemplate : undefined;
	}
	set minimizeIconTemplate(value: string) {
		this.nativeElement ? this.nativeElement.minimizeIconTemplate = value : undefined;
	}

	/** @description Determines the minimum width of the ListMenu at which it will switch from normal to minimized mode. If set to null, the ListMenu does not minimize automatically. */
	@Input()
	get minimizeWidth(): number | null {
		return this.nativeElement ? this.nativeElement.minimizeWidth : undefined;
	}
	set minimizeWidth(value: number | null) {
		this.nativeElement ? this.nativeElement.minimizeWidth = value : undefined;
	}

	/** @description Sets or gets the ListMenu's scroll buttons behavior. */
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

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
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

	/** @description Determines the field in the data source that corresponds to an item's value. */
	@Input()
	get valueMember(): string {
		return this.nativeElement ? this.nativeElement.valueMember : undefined;
	}
	set valueMember(value: string) {
		this.nativeElement ? this.nativeElement.valueMember = value : undefined;
	}

	/** @description This event is triggered when a smart-menu-items-group is expanded.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
	*   item - The menu item that was expanded.
	*   label - The label of the item that was expanded.
	*   value - The value of the item that was expanded.
	*   path - The path of the item that was expanded, e.g. '0.1', '1.1.2'.
	*   children - The children of the item that was expanded.
	*/
	@Output() onExpand: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a menu item check state is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	checked)
	*   item - The menu item which state was changed.
	*   label - The label of the item which state was changed.
	*   value - The value of the item which state was changed.
	*   checked - The checked state of the toggled item. If false the item is not toggled.
	*/
	@Output() onItemCheckChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a list menu item is clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value)
	*   item - The menu item that was clicked.
	*   label - The label of the clicked item.
	*   value - The value of the clicked item.
	*/
	@Output() onItemClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the user scrolls to the bottom of the ListMenu.
	*  @param event. The custom event. 	*/
	@Output() onScrollBottomReached: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Adds an item to the list. 
	* @param {HTMLElement} Item. A smart-menu-item to add to the List Menu.
	* @param {HTMLElement | string} Parent?. The smart-menu-items-group (or its id or numeric path) to add the item to.
	*/
    public addItem(Item: HTMLElement, Parent?: HTMLElement | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addItem(Item, Parent);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addItem(Item, Parent);
            });
        }
    }

	/** @description Navigates to the previous page (smart-menu-items-group). 
	* @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element
	*/
    public back(animation?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.back(animation);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.back(animation);
            });
        }
    }

	/** @description Navigates to a particular page (smart-menu-items-group). 
	* @param {string} id. The id or numeric path of a page (smart-menu-items-group).
	*/
    public changePage(id: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.changePage(id);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.changePage(id);
            });
        }
    }

	/** @description Checks an item. 
	* @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group (or its id or numeric path).
	*/
    public checkItem(item: HTMLElement | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.checkItem(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.checkItem(item);
            });
        }
    }

	/** @description Gets an item by its id or numeric path. 
	* @param {string} id. The id or numeric path of an item
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

	/** @description Maximizes the List Menu. 
	*/
    public maximize(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.maximize();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.maximize();
            });
        }
    }

	/** @description Minimizes the List Menu. An icon is displayed and the menu is hidden when minimized. 
	*/
    public minimize(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.minimize();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.minimize();
            });
        }
    }

	/** @description Removes an item. 
	* @param {HTMLElement | string} item. The smart-menu-item/smart-menu-items-group (or its id or numeric path) to remove.
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

	/** @description Unchecks an item. 
	* @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group (or its id or numeric path).
	*/
    public uncheckItem(item: HTMLElement | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.uncheckItem(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.uncheckItem(item);
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
		that.eventHandlers['expandHandler'] = (event: CustomEvent) => { that.onExpand.emit(event); }
		that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);

		that.eventHandlers['itemCheckChangeHandler'] = (event: CustomEvent) => { that.onItemCheckChange.emit(event); }
		that.nativeElement.addEventListener('itemCheckChange', that.eventHandlers['itemCheckChangeHandler']);

		that.eventHandlers['itemClickHandler'] = (event: CustomEvent) => { that.onItemClick.emit(event); }
		that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);

		that.eventHandlers['scrollBottomReachedHandler'] = (event: CustomEvent) => { that.onScrollBottomReached.emit(event); }
		that.nativeElement.addEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['expandHandler']) {
			that.nativeElement.removeEventListener('expand', that.eventHandlers['expandHandler']);
		}

		if (that.eventHandlers['itemCheckChangeHandler']) {
			that.nativeElement.removeEventListener('itemCheckChange', that.eventHandlers['itemCheckChangeHandler']);
		}

		if (that.eventHandlers['itemClickHandler']) {
			that.nativeElement.removeEventListener('itemClick', that.eventHandlers['itemClickHandler']);
		}

		if (that.eventHandlers['scrollBottomReachedHandler']) {
			that.nativeElement.removeEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
		}

	}
}
