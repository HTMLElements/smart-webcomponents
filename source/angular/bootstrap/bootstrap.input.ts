import { BootstrapInput } from './../index';
import { BootstrapInputStyleMode, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { BootstrapInputStyleMode, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { BootstrapInput } from './../index';


@Directive({
	selector: 'bootstrap-input, [bootstrap-input]'
})

export class BootstrapInputComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<BootstrapInput>) {
		super(ref);
		this.nativeElement = ref.nativeElement as BootstrapInput;
	}

	private eventHandlers: any[] = [];

	public nativeElement: BootstrapInput;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <BootstrapInput>document.createElement('bootstrap-input');
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

	/** @description Gets or sets whether the element is filled.  */
	@Input()
	get filled(): boolean {
		return this.nativeElement ? this.nativeElement.filled : undefined;
	}
	set filled(value: boolean) {
		this.nativeElement ? this.nativeElement.filled = value : undefined;
	}

	/** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
	@Input()
	get name(): string {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		this.nativeElement ? this.nativeElement.name = value : undefined;
	}

	/** @description Gets or sets whether the element is outlined.  */
	@Input()
	get outlined(): boolean {
		return this.nativeElement ? this.nativeElement.outlined : undefined;
	}
	set outlined(value: boolean) {
		this.nativeElement ? this.nativeElement.outlined = value : undefined;
	}

	/** @description Gets or sets the placeholder of the element.  */
	@Input()
	get placeholder(): string {
		return this.nativeElement ? this.nativeElement.placeholder : undefined;
	}
	set placeholder(value: string) {
		this.nativeElement ? this.nativeElement.placeholder = value : undefined;
	}

	/** @description Gets or sets whether the element is required.  */
	@Input()
	get required(): boolean {
		return this.nativeElement ? this.nativeElement.required : undefined;
	}
	set required(value: boolean) {
		this.nativeElement ? this.nativeElement.required = value : undefined;
	}

	/** @description Sets or gets the style mode of the element. */
	@Input()
	get styleMode(): BootstrapInputStyleMode {
		return this.nativeElement ? this.nativeElement.styleMode : undefined;
	}
	set styleMode(value: BootstrapInputStyleMode) {
		this.nativeElement ? this.nativeElement.styleMode = value : undefined;
	}

	/** @description Gets or sets the value of the element.  */
	@Input()
	get value(): string {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: string) {
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
