import { Layout } from './../index';
import { Animation, Orientation, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, Orientation, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Layout } from './../index';


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

	/** @description Optional. A label for all Splitter items inside the Layout. Usefull when exporting the dataSource and reusing it in other elements, for example, tree, etc. */
	@Input()
	get itemLabel(): string {
		return this.nativeElement ? this.nativeElement.itemLabel : undefined;
	}
	set itemLabel(value: string) {
		this.nativeElement ? this.nativeElement.itemLabel = value : undefined;
	}

	/** @description Optional. A label for all Splitters inside the Layout. Usefull when exporting the dataSource and reusing it in other elements, for example, tree, etc. */
	@Input()
	get itemGroupLabel(): string {
		return this.nativeElement ? this.nativeElement.itemGroupLabel : undefined;
	}
	set itemGroupLabel(value: string) {
		this.nativeElement ? this.nativeElement.itemGroupLabel = value : undefined;
	}

	/** @description A getter that returns an array of all Splitter items inside the Layout. */
	@Input()
	get items(): any {
		return this.nativeElement ? this.nativeElement.items : undefined;
	}
	set items(value: any) {
		this.nativeElement ? this.nativeElement.items = value : undefined;
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

	/** @description Determines the resize step during reisizing */
	@Input()
	get resizeStep(): number {
		return this.nativeElement ? this.nativeElement.resizeStep : undefined;
	}
	set resizeStep(value: number) {
		this.nativeElement ? this.nativeElement.resizeStep = value : undefined;
	}

	/** @description When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar. */
	@Input()
	get liveResize(): boolean {
		return this.nativeElement ? this.nativeElement.liveResize : undefined;
	}
	set liveResize(value: boolean) {
		this.nativeElement ? this.nativeElement.liveResize = value : undefined;
	}

	/** @description Determines the placeholder text of the empty items. */
	@Input()
	get placeholder(): string {
		return this.nativeElement ? this.nativeElement.placeholder : undefined;
	}
	set placeholder(value: string) {
		this.nativeElement ? this.nativeElement.placeholder = value : undefined;
	}

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description Determines the selected item. When an item is selected the buttons for creating nested items are displayed inside it. */
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

	/** @description This event is triggered when resizing begins.
	*  @param event. The custom event. 	*/
	@Output() onResizeStart: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when resizing finishes.
	*  @param event. The custom event. 	*/
	@Output() onResizeEnd: EventEmitter<CustomEvent> = new EventEmitter();

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

	/** @description Appends a new node. 
	* @param {Node} node. The node to append
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

	/** @description Inserts the specified "smart-splitter-item" node before the reference "smart-splitter-item" node. 
	* @param {Node} newNode. The  "smart-splitter-item" node to insert.
	* @param {Node | null} referenceNode?. The "smart-splitter-item" node before which newNode is inserted.
	* @returns {Node}
  */
	public async insertBefore(newNode, referenceNode?): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.insertBefore(newNode, referenceNode);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Removes a child "smart-splitter-item" node from the Layout. 
	* @param {Node} node. The "smart-splitter-item" node to remove.
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

	/** @description Returns a Splitter Item according to the index that is passed as an argument. 
	* @param {any} index. The index of an item.
	*/
    public getItem(index: any): void {
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

	/** @description Returns the index of a Splitter Item that is passed as an argument. 
	* @param {any} item. The index of the Splitter item that is passed as an argument.
	*/
    public getItemIndex(item: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.getItemIndex(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.getItemIndex(item);
            });
        }
    }

	/** @description Insert a new Splitter item at a given position. 
	* @param {any} item. A Splitter Item or an object defining a Splitter item to be inserted.
	* @param {number | string} index. The index at which a new item will be inserted.
	* @param {string} position?. The postition at which the new item will be inseted - top, bottom, left, right.
	*/
    public insert(item: any, index: number | string, position?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(item, index, position);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insert(item, index, position);
            });
        }
    }

	/** @description Removes a Splitter item from the Layout. 
	* @param {any} index. The index of an item to be removed or an instance of JQX.SplitterItem.
	*/
    public removeItem(index: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeItem(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeItem(index);
            });
        }
    }

	/** @description Removes all items from the Layout 
	*/
    public removeAll(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAll();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAll();
            });
        }
    }

	/** @description Selects a Splitter item from the Layout. 
	* @param {any} index. The index of an item to be removed or an instance of JQX.SplitterItem.
	*/
    public select(index: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(index);
            });
        }
    }

	/** @description Unselects the selected item inside the element. 
	*/
    public unselect(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselect();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselect();
            });
        }
    }

	/** @description Updates a Splitter item that is inside the Layout. 
	* @param {any} index. The index of an item to be removed or an instance of JQX.SplitterItem.
	* @param {any} settings. An object containing properties with new values for the Splitter item that should be updated.
	*/
    public updateItem(index: any, settings: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateItem(index, settings);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateItem(index, settings);
            });
        }
    }

	/** @description Clears the localStorage of any previous cached states of the element according to it's id. 
	*/
    public clearState(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearState();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearState();
            });
        }
    }

	/** @description Saves the current state of the element to LocalStorage. Requires an id to be set to the element. 
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

	/** @description Loads a previously saved state of the element. If no state is provided as an argument the method will do a localStorage lookup according to the id of the element. 
	* @param {any[]} state?. An array of objects that represents a cached state of the element. The result of calling the 'saveState' method.
	*/
    public loadState(state?: any[]): void {
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
		that.eventHandlers['resizeStartHandler'] = (event: CustomEvent) => { that.onResizeStart.emit(event); }
		that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);

		that.eventHandlers['resizeEndHandler'] = (event: CustomEvent) => { that.onResizeEnd.emit(event); }
		that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);

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
		if (that.eventHandlers['resizeStartHandler']) {
			that.nativeElement.removeEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
		}

		if (that.eventHandlers['resizeEndHandler']) {
			that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
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
