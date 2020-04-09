import { AccordionItem } from './../index';
import { AccordionItemArrow, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { AccordionItemArrow, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { AccordionItem } from './../index';


@Directive({
	selector: 'smart-accordion-item, [smart-accordion-item]'
})

export class AccordionItemComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<AccordionItem>) {
		super(ref);
		this.nativeElement = ref.nativeElement as AccordionItem;
	}

	private eventHandlers: any[] = [];

	public nativeElement: AccordionItem;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <AccordionItem>document.createElement('smart-accordion-item');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Sets or gets header's arrow position. If the value is 'none' the arrow is not shown. */
	@Input()
	get arrow(): AccordionItemArrow {
		return this.nativeElement ? this.nativeElement.arrow : undefined;
	}
	set arrow(value: AccordionItemArrow) {
		this.nativeElement ? this.nativeElement.arrow = value : undefined;
	}

	/** @description Sets or gets the content if the item. */
	@Input()
	get content(): string | HTMLElement {
		return this.nativeElement ? this.nativeElement.content : undefined;
	}
	set content(value: string | HTMLElement) {
		this.nativeElement ? this.nativeElement.content = value : undefined;
	}

	/** @description Sets or gets the expanded state. */
	@Input()
	get expanded(): boolean {
		return this.nativeElement ? this.nativeElement.expanded : undefined;
	}
	set expanded(value: boolean) {
		this.nativeElement ? this.nativeElement.expanded = value : undefined;
	}

	/** @description Sets or gets the focus state. */
	@Input()
	get focused(): boolean {
		return this.nativeElement ? this.nativeElement.focused : undefined;
	}
	set focused(value: boolean) {
		this.nativeElement ? this.nativeElement.focused = value : undefined;
	}

	/** @description Sets or gets the label if the item. */
	@Input()
	get label(): string {
		return this.nativeElement ? this.nativeElement.label : undefined;
	}
	set label(value: string) {
		this.nativeElement ? this.nativeElement.label = value : undefined;
	}

	/** @description This event is triggered when the item is collapsed.
	*  @param event. The custom event. 	*/
	@Output() onCollapse: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the item is expanded.
	*  @param event. The custom event. 	*/
	@Output() onExpand: EventEmitter<CustomEvent> = new EventEmitter();


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

		that.eventHandlers['expandHandler'] = (event: CustomEvent) => { that.onExpand.emit(event); }
		that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['collapseHandler']) {
			that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
		}

		if (that.eventHandlers['expandHandler']) {
			that.nativeElement.removeEventListener('expand', that.eventHandlers['expandHandler']);
		}

	}
}
