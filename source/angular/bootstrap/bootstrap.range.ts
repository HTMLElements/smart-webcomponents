import { BootstrapRange } from './../index';
import { ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { BootstrapRange } from './../index';


@Directive({
	selector: 'bootstrap-range, [bootstrap-range]'
})

export class BootstrapRangeComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<BootstrapRange>) {
		super(ref);
		this.nativeElement = ref.nativeElement as BootstrapRange;
	}

	private eventHandlers: any[] = [];

	public nativeElement: BootstrapRange;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <BootstrapRange>document.createElement('bootstrap-range');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Enables or disables the element.  */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Sets the name of the element.  */
	@Input()
	get name(): string {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		this.nativeElement ? this.nativeElement.name = value : undefined;
	}

	/** @description Sets or gets the min value */
	@Input()
	get min(): number {
		return this.nativeElement ? this.nativeElement.min : undefined;
	}
	set min(value: number) {
		this.nativeElement ? this.nativeElement.min = value : undefined;
	}

	/** @description Sets or gets the max value */
	@Input()
	get max(): number {
		return this.nativeElement ? this.nativeElement.max : undefined;
	}
	set max(value: number) {
		this.nativeElement ? this.nativeElement.max = value : undefined;
	}

	/** @description Sets or gets the value */
	@Input()
	get value(): number {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: number) {
		this.nativeElement ? this.nativeElement.value = value : undefined;
	}

	/** @description Change event is triggered when the value of the element is changed.
	*  @param event. The custom event. 	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();


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

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['changeHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
		}

	}
}
