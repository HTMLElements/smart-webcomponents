import { Accordion } from './../index';
import { Animation, AccordionExpandMode, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter, QueryList, ContentChildren } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, AccordionExpandMode, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Accordion } from './../index';


import { AccordionItemComponent } from './smart.accordionitem';

@Directive({
	selector: 'smart-accordion, [smart-accordion]'
})

export class AccordionComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {

	constructor(ref: ElementRef<Accordion>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Accordion;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Accordion;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Accordion>document.createElement('smart-accordion');
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

	/** @description Enables or disables the accordion. Disabled elements can not be interacted with. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Sets or gets the expanded item indexes. Using this property items can be expanded by passing in their indexes. The number of expanded items is limited by the expandMode. */
	@Input()
	get expandedIndexes(): number[] {
		return this.nativeElement ? this.nativeElement.expandedIndexes : undefined;
	}
	set expandedIndexes(value: number[]) {
		this.nativeElement ? this.nativeElement.expandedIndexes = value : undefined;
	}

	/** @description Sets or gets the expand mode. Expand mode determines how the items will expand or collapse. */
	@Input()
	get expandMode(): AccordionExpandMode {
		return this.nativeElement ? this.nativeElement.expandMode : undefined;
	}
	set expandMode(value: AccordionExpandMode) {
		this.nativeElement ? this.nativeElement.expandMode = value : undefined;
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

	/** @description Determines if the element is readonly or not. If the element true, users cannot interact with it. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description Enables or disables accordion reordering. */
	@Input()
	get reorder(): boolean {
		return this.nativeElement ? this.nativeElement.reorder : undefined;
	}
	set reorder(value: boolean) {
		this.nativeElement ? this.nativeElement.reorder = value : undefined;
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

	/** @description Determines whether the element can be focused or not. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
	}

	/** @description This event is triggered when an item is collapsed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	content, 	index, 	label)
	*   content - The content of the item.
	*   index - The index of the item.
	*   label - The label of the item
	*/
	@Output() onCollapse: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when an item is going to be collapsed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	content, 	index, 	label)
	*   content - The content of the item.
	*   index - The index of the item.
	*   label - The label of the item
	*/
	@Output() onCollapsing: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a reordering operation is completed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	position, 	target, 	content, 	index, 	label)
	*   position - The current top and left position of the item that was dragged.
	*   target - The item that was dragged.
	*   content - The content of the item.
	*   index - The index of the item.
	*   label - The label of the item.
	*/
	@Output() onDragEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a reordering operation is started.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	position, 	target, 	content, 	index, 	label)
	*   position - The current top and left position of the item that is about to be dragged.
	*   target - The item that is about to be dragged.
	*   content - The content of the item.
	*   index - The index of the item.
	*   label - The label of the item.
	*/
	@Output() onDragStart: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when an item is expanded.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	position, 	target, 	content, 	index, 	label)
	*   position - The current top and left position of the item.
	*   target - The item that was dragged.
	*   content - The content of the item.
	*   index - The index of the item.
	*   label - The label of the item.
	*/
	@Output() onExpand: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when an item is going to be expanded.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	content, 	index, 	label)
	*   content - The content of the item.
	*   index - The index of the item.
	*   label - The label of the item
	*/
	@Output() onExpanding: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Collapses an item at a specified index. 
	* @param {number} position. The index of the collapsed item.
	*/
    public collapse(position: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(position);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse(position);
            });
        }
    }

	/** @description Expands an item at a specified index. 
	* @param {number} position. The index of the expanded item.
	*/
    public expand(position: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand(position);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expand(position);
            });
        }
    }

	/** @description Inserts a new item at a specified index. 
	* @param {number} index. The index where the item must be inserted.
	* @param {any} item. An object containing the values for the properties of the new item to be inserted.
	*/
    public insert(index: number, item: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(index, item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insert(index, item);
            });
        }
    }

	/** @description Removes an item at a specified index. 
	* @param {number} position. The index of the item to be removed.
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

	/** @description Updates an item from the element. 
	* @param {number} index. The index of the item to be updated.
	* @param {any} settings. An object containing the values for the properties of the item that will be updated.
	*/
    public update(index: number, settings: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(index, settings);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update(index, settings);
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
		that.eventHandlers['collapseHandler'] = (event: CustomEvent) => { that.onCollapse.emit(event); }
		that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);

		that.eventHandlers['collapsingHandler'] = (event: CustomEvent) => { that.onCollapsing.emit(event); }
		that.nativeElement.addEventListener('collapsing', that.eventHandlers['collapsingHandler']);

		that.eventHandlers['dragEndHandler'] = (event: CustomEvent) => { that.onDragEnd.emit(event); }
		that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);

		that.eventHandlers['dragStartHandler'] = (event: CustomEvent) => { that.onDragStart.emit(event); }
		that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);

		that.eventHandlers['expandHandler'] = (event: CustomEvent) => { that.onExpand.emit(event); }
		that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);

		that.eventHandlers['expandingHandler'] = (event: CustomEvent) => { that.onExpanding.emit(event); }
		that.nativeElement.addEventListener('expanding', that.eventHandlers['expandingHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['collapseHandler']) {
			that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
		}

		if (that.eventHandlers['collapsingHandler']) {
			that.nativeElement.removeEventListener('collapsing', that.eventHandlers['collapsingHandler']);
		}

		if (that.eventHandlers['dragEndHandler']) {
			that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
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

	}
}
