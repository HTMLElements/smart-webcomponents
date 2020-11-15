import { Layout } from './../index';
import { Animation, Orientation, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter, QueryList, ContentChildren } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, Orientation, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Layout } from './../index';


import { LayoutItemComponent } from './smart.layoutitem';

import { LayoutGroupComponent } from './smart.layoutgroup';

import { TabLayoutItemComponent } from './smart.tablayoutitem';

import { TabLayoutGroupComponent } from './smart.tablayoutgroup';

@Directive({
	selector: 'smart-layout, [smart-layout]'
})

export class LayoutComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {

	constructor(ref: ElementRef<Layout>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Layout;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Layout;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Layout>document.createElement('smart-layout');
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

	/** @description Determines the options that will be available for selection inside the context menu. */
	@Input()
	get contextMenuDataSource(): any {
		return this.nativeElement ? this.nativeElement.contextMenuDataSource : undefined;
	}
	set contextMenuDataSource(value: any) {
		this.nativeElement ? this.nativeElement.contextMenuDataSource = value : undefined;
	}

	/** @description Enables or disables the element. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Sets or gets Layout's data source. */
	@Input()
	get dataSource(): any {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Sets or gets the language. Used in conjunction with the property messages.  */
	@Input()
	get locale(): string {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		this.nativeElement ? this.nativeElement.locale = value : undefined;
	}

	/** @description Sets an object with string values, related to the different states of passwords strength. */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Sets or gets Layout's main orientation. The orientation is applied to all Splitters inside the Layout unless they have their orientation explicitly set in the dataSource. */
	@Input()
	get orientation(): Orientation {
		return this.nativeElement ? this.nativeElement.orientation : undefined;
	}
	set orientation(value: Orientation) {
		this.nativeElement ? this.nativeElement.orientation = value : undefined;
	}

	/** @description If the element is readonly, users cannot interact with it. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description Determines whether splitting is live or not. */
	@Input()
	get allowLiveSplit(): boolean {
		return this.nativeElement ? this.nativeElement.allowLiveSplit : undefined;
	}
	set allowLiveSplit(value: boolean) {
		this.nativeElement ? this.nativeElement.allowLiveSplit = value : undefined;
	}

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description Determines the selected item. */
	@Input()
	get selectedIndex(): any {
		return this.nativeElement ? this.nativeElement.selectedIndex : undefined;
	}
	set selectedIndex(value: any) {
		this.nativeElement ? this.nativeElement.selectedIndex = value : undefined;
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

	/** @description This event is triggered after resizing is completed.
	*  @param event. The custom event. 	*/
	@Output() onResize: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a change regarding the Layout's state has occured, such as inserting a new item, removing an item, etc.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type)
	*   item - The Splitter item that was the target of a change.
	*   type - A description of the operation that has cause the change.
	*/
	@Output() onStateChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the selection is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldSelectedIndex, 	selectedIndex)
	*   oldSelectedIndex - The Splitter item that was previously selected.
	*   selectedIndex - The Splitter item that is currently selected.
	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a the context menu is about to be closed. The operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	@Output() onClosing: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a the context menu is closed.
	*  @param event. The custom event. 	*/
	@Output() onClose: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a the context menu is about to be opened. The operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	@Output() onOpening: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a the context menu is opened.
	*  @param event. The custom event. 	*/
	@Output() onOpen: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when an option from the context menu has been clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	label, 	value)
	*   target - The Splitter item that was the target of the context menu opening.
	*   item - The Context menu item that was clicked.
	*   label - The label of the context menu that was clicked.
	*   value - The value of the context menu that was clicked.
	*/
	@Output() onMenuItemClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Returns a Layout item according to the index that is passed. 
	* @param {number | string} index. The index of an item.
	*/
    public getItem(index: number | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.getItem(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.getItem(index);
            });
        }
    }

	/** @description Refreshes the Layout 
	*/
    public refresh(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.refresh();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refresh();
            });
        }
    }

	/** @description Inserts a new item inside the Layout. 
	* @param {any} type. The index of an item to be removed or an instance of JQX.SplitterItem.
	* @param {string | undefined} position?. A string that represents the position where the new item will be created.
	*/
    public createLayoutItem(type: any, position?: string | undefined): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.createLayoutItem(type, position);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.createLayoutItem(type, position);
            });
        }
    }

	/** @description Moves all children from one item to another. 
	* @param {any} oldItem. The source item that will have it's content removed.
	* @param {any} newItem. The host item that will have it's content replaced.
	*/
    public moveChildren(oldItem: any, newItem: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.moveChildren(oldItem, newItem);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.moveChildren(oldItem, newItem);
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
		that.eventHandlers['resizeHandler'] = (event: CustomEvent) => { that.onResize.emit(event); }
		that.nativeElement.addEventListener('resize', that.eventHandlers['resizeHandler']);

		that.eventHandlers['stateChangeHandler'] = (event: CustomEvent) => { that.onStateChange.emit(event); }
		that.nativeElement.addEventListener('stateChange', that.eventHandlers['stateChangeHandler']);

		that.eventHandlers['changeHandler'] = (event: CustomEvent) => { that.onChange.emit(event); }
		that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);

		that.eventHandlers['closingHandler'] = (event: CustomEvent) => { that.onClosing.emit(event); }
		that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);

		that.eventHandlers['closeHandler'] = (event: CustomEvent) => { that.onClose.emit(event); }
		that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);

		that.eventHandlers['openingHandler'] = (event: CustomEvent) => { that.onOpening.emit(event); }
		that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);

		that.eventHandlers['openHandler'] = (event: CustomEvent) => { that.onOpen.emit(event); }
		that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);

		that.eventHandlers['menuItemClickHandler'] = (event: CustomEvent) => { that.onMenuItemClick.emit(event); }
		that.nativeElement.addEventListener('menuItemClick', that.eventHandlers['menuItemClickHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['resizeHandler']) {
			that.nativeElement.removeEventListener('resize', that.eventHandlers['resizeHandler']);
		}

		if (that.eventHandlers['stateChangeHandler']) {
			that.nativeElement.removeEventListener('stateChange', that.eventHandlers['stateChangeHandler']);
		}

		if (that.eventHandlers['changeHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
		}

		if (that.eventHandlers['closingHandler']) {
			that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
		}

		if (that.eventHandlers['closeHandler']) {
			that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
		}

		if (that.eventHandlers['openingHandler']) {
			that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
		}

		if (that.eventHandlers['openHandler']) {
			that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
		}

		if (that.eventHandlers['menuItemClickHandler']) {
			that.nativeElement.removeEventListener('menuItemClick', that.eventHandlers['menuItemClickHandler']);
		}

	}
}
