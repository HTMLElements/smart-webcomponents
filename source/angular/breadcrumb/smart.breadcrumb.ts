import { Breadcrumb } from './../index';
import { Animation, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Breadcrumb } from './../index';


@Directive({
	selector: 'smart-breadcrumb, [smart-breadcrumb]'
})

export class BreadcrumbComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<Breadcrumb>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Breadcrumb;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Breadcrumb;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Breadcrumb>document.createElement('smart-breadcrumb');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Enables or disables the "Add new item" (+) button. */
	@Input()
	get addNewItem(): boolean {
		return this.nativeElement ? this.nativeElement.addNewItem : undefined;
	}
	set addNewItem(value: boolean) {
		this.nativeElement ? this.nativeElement.addNewItem = value : undefined;
	}

	/** @description Enables or disables the dragging of breadcrumb items. */
	@Input()
	get allowDrag(): boolean {
		return this.nativeElement ? this.nativeElement.allowDrag : undefined;
	}
	set allowDrag(value: boolean) {
		this.nativeElement ? this.nativeElement.allowDrag = value : undefined;
	}

	/** @description Enables or disables the dropping of dragged breadcrumb items. */
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

	/** @description Show/Hide the close button of breadcrumb items. */
	@Input()
	get closeButtons(): boolean {
		return this.nativeElement ? this.nativeElement.closeButtons : undefined;
	}
	set closeButtons(value: boolean) {
		this.nativeElement ? this.nativeElement.closeButtons = value : undefined;
	}

	/** @description Determines the data source to load breadcrumb items from. The Array should contain objects. Each object defines a single breadcrumb item. */
	@Input()
	get dataSource(): {label: string, value: string}[] {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: {label: string, value: string}[]) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Enables or disables the Breadcrumb. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Sets or gets the template of breadcrumb items. The value of this property can be the id of an HTMLTemplateElement or the HTMLTemplateElement itself. If set to null, no template is applied. */
	@Input()
	get itemTemplate(): any {
		return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
	}
	set itemTemplate(value: any) {
		this.nativeElement ? this.nativeElement.itemTemplate = value : undefined;
	}

	/** @description Sets or gets the language. Used in conjunction with the property messages.  */
	@Input()
	get locale(): string {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		this.nativeElement ? this.nativeElement.locale = value : undefined;
	}

	/** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Determines the minimum width of the Breadcrumb at which it will switch from normal to minimized mode. If set to null, the Breadcrumb does not minimize automatically. */
	@Input()
	get minimizeWidth(): number {
		return this.nativeElement ? this.nativeElement.minimizeWidth : undefined;
	}
	set minimizeWidth(value: number) {
		this.nativeElement ? this.nativeElement.minimizeWidth = value : undefined;
	}

	/** @description If is set to true, the element cannot be focused. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
	}

	/** @description This event is triggered when a Breadcrumb item is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item)
	*   item - The item that has been closed.
	*/
	@Output() onClose: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a Breadcrumb item is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item)
	*   item - The item that is going to be closed.
	*/
	@Output() onClosing: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a Breadcrumb item is dropped.
	*  @param event. The custom event. 	*/
	@Output() onDragEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a Breadcrumb item is being dragged.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	originalEvent, 	target)
	*   item - The item that is being dragged.
	*   originalEvent - The original event that initiates the dragging operation.
	*   target - The original target.
	*/
	@Output() onDragging: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the "Add new item" (+) button is clicked.
	*  @param event. The custom event. 	*/
	@Output() onAddNewItem: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Adds an item. 
	* @param {any} itemDetails. An Object with the fields "index", "label", and "value".
	*/
    public addItem(itemDetails: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addItem(itemDetails);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addItem(itemDetails);
            });
        }
    }

	/** @description Restores the Breadcrumb from minimized state back to normal. 
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

	/** @description Minimizes the Breadcrumb. 
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
	* @param {HTMLElement} item. The item to remove.
	*/
    public removeItem(item: HTMLElement): void {
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

		that.eventHandlers['dragEndHandler'] = (event: CustomEvent) => { that.onDragEnd.emit(event); }
		that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);

		that.eventHandlers['draggingHandler'] = (event: CustomEvent) => { that.onDragging.emit(event); }
		that.nativeElement.addEventListener('dragging', that.eventHandlers['draggingHandler']);

		that.eventHandlers['addNewItemHandler'] = (event: CustomEvent) => { that.onAddNewItem.emit(event); }
		that.nativeElement.addEventListener('addNewItem', that.eventHandlers['addNewItemHandler']);

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

		if (that.eventHandlers['dragEndHandler']) {
			that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
		}

		if (that.eventHandlers['draggingHandler']) {
			that.nativeElement.removeEventListener('dragging', that.eventHandlers['draggingHandler']);
		}

		if (that.eventHandlers['addNewItemHandler']) {
			that.nativeElement.removeEventListener('addNewItem', that.eventHandlers['addNewItemHandler']);
		}

	}
}
