import { Menu } from './../index';
import { Animation, MenuCheckMode, MenuCloseAction, MenuDropDownPosition, MenuMode, Overflow, MenuSelectionMode, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter, QueryList, ContentChildren } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, MenuCheckMode, MenuCloseAction, MenuDropDownPosition, MenuMode, Overflow, MenuSelectionMode, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Menu } from './../index';


import { MenuItemComponent } from './smart.menuitem';

import { MenuItemsGroupComponent } from './smart.menuitemsgroup';

@Directive({
	selector: 'smart-menu, [smart-menu]'
})

export class MenuComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {

	constructor(ref: ElementRef<Menu>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Menu;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Menu;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Menu>document.createElement('smart-menu');
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

	/** @description Determines delay (in milliseconds) before a Menu dropdown is closed when leaving the Menu with the mouse. Applicable only when selectionMode is 'mouseenter'. */
	@Input()
	get autoCloseDelay(): number {
		return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
	}
	set autoCloseDelay(value: number) {
		this.nativeElement ? this.nativeElement.autoCloseDelay = value : undefined;
	}

	/** @description If set to true, on mouseenter, the element receives focus automatically. */
	@Input()
	get autoFocusOnMouseenter(): boolean {
		return this.nativeElement ? this.nativeElement.autoFocusOnMouseenter : undefined;
	}
	set autoFocusOnMouseenter(value: boolean) {
		this.nativeElement ? this.nativeElement.autoFocusOnMouseenter = value : undefined;
	}

	/** @description Allows top-level Menu items (immediate children of the Menu) to be checkable. Sublevels are controlled by setting checkable to the respective smart-menu-items-group. */
	@Input()
	get checkable(): boolean {
		return this.nativeElement ? this.nativeElement.checkable : undefined;
	}
	set checkable(value: boolean) {
		this.nativeElement ? this.nativeElement.checkable = value : undefined;
	}

	/** @description Sets or gets whether checkboxes and radio buttons can be displayed in the Menu. This property is applicable only to the Menu itself, and not its smart-menu-item/smart-menu-items-group subitems. See also the property checkable. */
	@Input()
	get checkboxes(): boolean {
		return this.nativeElement ? this.nativeElement.checkboxes : undefined;
	}
	set checkboxes(value: boolean) {
		this.nativeElement ? this.nativeElement.checkboxes = value : undefined;
	}

	/** @description Sets the check mode of top-level Menu items (immediate children of the Menu). checkMode can be set to 'checkbox', 'radioButton', or a comma-separated list containing 'checkbox', 'radioButton', or 'none' (e.g. 'checkbox, radioButton, none, checkbox'). When set to a list, each value in the list is applied to groups of Menu items separated by an item with separator (item after the one with separator is the start of a new checkMode context). Sublevels are controlled by setting checkMode to the respective smart-menu-items-group. */
	@Input()
	get checkMode(): MenuCheckMode {
		return this.nativeElement ? this.nativeElement.checkMode : undefined;
	}
	set checkMode(value: MenuCheckMode) {
		this.nativeElement ? this.nativeElement.checkMode = value : undefined;
	}

	/** @description Sets the document event which closes any open Menu drop downs (or the Menu itself when mode is 'dropDown'). */
	@Input()
	get closeAction(): MenuCloseAction {
		return this.nativeElement ? this.nativeElement.closeAction : undefined;
	}
	set closeAction(value: MenuCloseAction) {
		this.nativeElement ? this.nativeElement.closeAction = value : undefined;
	}

	/** @description Determines the data source that will be loaded to the Menu. The data source represents an array of objects with the following properties: label - a string representing the text content of the item.value - the value of the item.shortcut - a string representing a shortuct for the item. It will be displayed inside the item.items - allows to define an array of sub menu items. */
	@Input()
	get dataSource(): any {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Enables or disables element. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Determines the field in the data source that corresponds to an item's label. */
	@Input()
	get displayMember(): string {
		return this.nativeElement ? this.nativeElement.displayMember : undefined;
	}
	set displayMember(value: string) {
		this.nativeElement ? this.nativeElement.displayMember = value : undefined;
	}

	/** @description Sets custom outer container, where all dropdown containers must be appended. By default they are inside the menu. The value of the property can be an HTML element or the id of an HTML element. In mode 'dropDown', the property dropDownAppendTo also controls the parent element of the whole Menu. The open method works relatively to the original place of the Menu in the DOM. */
	@Input()
	get dropDownAppendTo(): string | HTMLElement {
		return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
	}
	set dropDownAppendTo(value: string | HTMLElement) {
		this.nativeElement ? this.nativeElement.dropDownAppendTo = value : undefined;
	}

	/** @description If this property is enabled, when an element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. */
	@Input()
	get dropDownOverlay(): boolean {
		return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
	}
	set dropDownOverlay(value: boolean) {
		this.nativeElement ? this.nativeElement.dropDownOverlay = value : undefined;
	}

	/** @description Determines the opening direction of Menu dropdowns. */
	@Input()
	get dropDownPosition(): MenuDropDownPosition {
		return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
	}
	set dropDownPosition(value: MenuDropDownPosition) {
		this.nativeElement ? this.nativeElement.dropDownPosition = value : undefined;
	}

	/** @description Determines the field in the data source that corresponds to an item group's subitems collection. */
	@Input()
	get itemsMember(): string {
		return this.nativeElement ? this.nativeElement.itemsMember : undefined;
	}
	set itemsMember(value: string) {
		this.nativeElement ? this.nativeElement.itemsMember = value : undefined;
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

	/** @description Used to load a custom minimize icon from an HTMLTemplateElement object. The HTMLTemplateElement is selected by it's id. */
	@Input()
	get minimizeIconTemplate(): string {
		return this.nativeElement ? this.nativeElement.minimizeIconTemplate : undefined;
	}
	set minimizeIconTemplate(value: string) {
		this.nativeElement ? this.nativeElement.minimizeIconTemplate = value : undefined;
	}

	/** @description Determines the minimum width of the Menu at which it will switch from normal to minimized mode. If set to null, the Menu does not minimize automatically. */
	@Input()
	get minimizeWidth(): number {
		return this.nativeElement ? this.nativeElement.minimizeWidth : undefined;
	}
	set minimizeWidth(value: number) {
		this.nativeElement ? this.nativeElement.minimizeWidth = value : undefined;
	}

	/** @description Determines the menu's display mode. */
	@Input()
	get mode(): MenuMode {
		return this.nativeElement ? this.nativeElement.mode : undefined;
	}
	set mode(value: MenuMode) {
		this.nativeElement ? this.nativeElement.mode = value : undefined;
	}

	/** @description Opens or closes thte menu when it's in 'dropDown' mode. */
	@Input()
	get opened(): boolean {
		return this.nativeElement ? this.nativeElement.opened : undefined;
	}
	set opened(value: boolean) {
		this.nativeElement ? this.nativeElement.opened = value : undefined;
	}

	/** @description Sets or gets the menu's scroll buttons behavior. Applicable only when dropDownAppendTo is not null. */
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

	/** @description Determines the menu's selection mode. */
	@Input()
	get selectionMode(): MenuSelectionMode {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value: MenuSelectionMode) {
		this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
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

	/** @description This event is triggered when the menu is closed. The event is fired only in 'dropDown' mode.
	*  @param event. The custom event. 	*/
	@Output() onClose: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the menu is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function. The event is fired only in 'dropDown' mode.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	trigger)
	*   trigger - Indicates whether the event was called from inside the element or programatically.
	*/
	@Output() onClosing: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a smart-menu-items-group is collapsed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
	*   item - The menu item that was collapsed.
	*   label - The label of the toggled item that was collapsed.
	*   value - The value of the toggled item that was collapsed.
	*   path - The path of the toggled item that was collapsed, e.g. '0.1', '1.1.2'.
	*   children - The children items of the toggled item that was collapsed.
	*/
	@Output() onCollapse: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a smart-menu-items-group is collapsing.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
	*   item - The menu item that is going to be collapsed.
	*   label - The label of the toggled item that is going to be collapsed.
	*   value - The value of the toggled item that is going to be collapsed.
	*   path - The path of the toggled item that is going to be collapsed, e.g. '0.1', '1.1.2'.
	*   children - The children items of the toggled item that is going to be collapsed.
	*/
	@Output() onCollapsing: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a smart-menu-items-group is expanded.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
	*   item - The menu item that was expanded.
	*   label - The label of the toggled item that was expanded.
	*   value - The value of the toggled item that was expanded.
	*   path - The path of the toggled item that was expanded, e.g. '0.1', '1.1.2'.
	*   children - The children items of the toggled item that was expanded.
	*/
	@Output() onExpand: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered before a smart-menu-items-group is expanded.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
	*   item - The menu item that is going to be expanded.
	*   label - The label of the toggled item that is going to be expanded.
	*   value - The value of the toggled item that is going to be expanded.
	*   path - The path of the toggled item that is going to be expanded, e.g. '0.1', '1.1.2'.
	*   children - The children items of the toggled item that is going to be expanded.
	*/
	@Output() onExpanding: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a menu item check state is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	checked)
	*   item - The menu item which state was changed.
	*   label - The label of the item which state was changed.
	*   value - The value of the item which state was changed.
	*   checked - The checked state of the toggled item. If false the item is not toggled.
	*/
	@Output() onItemCheckChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a menu item is clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value)
	*   item - The menu item that is toggled.
	*   label - The label of the toggled item.
	*   value - The value of the toggled item.
	*/
	@Output() onItemClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the menu is opened. The event is fired only in 'dropDown' mode.
	*  @param event. The custom event. 	*/
	@Output() onOpen: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the menu is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function. The event is fired only in 'dropDown' mode.
	*  @param event. The custom event. 	*/
	@Output() onOpening: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Adds an item to the menu. 
	* @param {HTMLElement} Item. A smart-menu-item to add to the Menu.
	* @param {HTMLElement | string} Parent?. The smart-menu-items-group or its id or numeric path to add the item to.
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

	/** @description Checks an item. 
	* @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group or its id or numeric path.
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

	/** @description Clears all Menu items. 
	*/
    public clear(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clear();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clear();
            });
        }
    }

	/** @description Closes the Menu when mode is 'dropDown'. 
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

	/** @description Collapses an item. 
	* @param {HTMLElement | string} item?. smart-menu-item/smart-menu-items-group or its id or numeric path. If no item is passed, all open items are collapsed.
	* @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
	*/
    public collapseItem(item?: HTMLElement | string, animation?: boolean): void {
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

	/** @description Expands an item. 
	* @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group or its id or numeric path.
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

	/** @description Maximizes the Menu. 
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

	/** @description Minimizes the Menu. 
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

	/** @description Opens the Menu when mode is 'dropDown'. 
	* @param {number} left. Horizontal position
	* @param {number} top. Vertical position
	*/
    public open(left: number, top: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.open(left, top);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.open(left, top);
            });
        }
    }

	/** @description Removes an item from the menu. 
	* @param {HTMLElement | string} item. The smart-menu-item/smart-menu-items-group or its id or numeric path to remove.
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
	* @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group (or its id or numeric path)
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
		that.eventHandlers['closeHandler'] = (event: CustomEvent) => { that.onClose.emit(event); }
		that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);

		that.eventHandlers['closingHandler'] = (event: CustomEvent) => { that.onClosing.emit(event); }
		that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);

		that.eventHandlers['collapseHandler'] = (event: CustomEvent) => { that.onCollapse.emit(event); }
		that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);

		that.eventHandlers['collapsingHandler'] = (event: CustomEvent) => { that.onCollapsing.emit(event); }
		that.nativeElement.addEventListener('collapsing', that.eventHandlers['collapsingHandler']);

		that.eventHandlers['expandHandler'] = (event: CustomEvent) => { that.onExpand.emit(event); }
		that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);

		that.eventHandlers['expandingHandler'] = (event: CustomEvent) => { that.onExpanding.emit(event); }
		that.nativeElement.addEventListener('expanding', that.eventHandlers['expandingHandler']);

		that.eventHandlers['itemCheckChangeHandler'] = (event: CustomEvent) => { that.onItemCheckChange.emit(event); }
		that.nativeElement.addEventListener('itemCheckChange', that.eventHandlers['itemCheckChangeHandler']);

		that.eventHandlers['itemClickHandler'] = (event: CustomEvent) => { that.onItemClick.emit(event); }
		that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);

		that.eventHandlers['openHandler'] = (event: CustomEvent) => { that.onOpen.emit(event); }
		that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);

		that.eventHandlers['openingHandler'] = (event: CustomEvent) => { that.onOpening.emit(event); }
		that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['closeHandler']) {
			that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
		}

		if (that.eventHandlers['closingHandler']) {
			that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
		}

		if (that.eventHandlers['collapseHandler']) {
			that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
		}

		if (that.eventHandlers['collapsingHandler']) {
			that.nativeElement.removeEventListener('collapsing', that.eventHandlers['collapsingHandler']);
		}

		if (that.eventHandlers['expandHandler']) {
			that.nativeElement.removeEventListener('expand', that.eventHandlers['expandHandler']);
		}

		if (that.eventHandlers['expandingHandler']) {
			that.nativeElement.removeEventListener('expanding', that.eventHandlers['expandingHandler']);
		}

		if (that.eventHandlers['itemCheckChangeHandler']) {
			that.nativeElement.removeEventListener('itemCheckChange', that.eventHandlers['itemCheckChangeHandler']);
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

	}
}
