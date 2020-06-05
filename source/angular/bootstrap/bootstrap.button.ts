import { BootstrapButton } from './../index';
import { BootstrapButtonStyleMode, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { BootstrapButtonStyleMode, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { BootstrapButton } from './../index';


@Directive({
	selector: 'bootstrap-button, [bootstrap-button]'
})

export class BootstrapButtonComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<BootstrapButton>) {
		super(ref);
		this.nativeElement = ref.nativeElement as BootstrapButton;
	}

	private eventHandlers: any[] = [];

	public nativeElement: BootstrapButton;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <BootstrapButton>document.createElement('bootstrap-button');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Enables or disables the button.  */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Sets the inner HTML of the element. */
	@Input()
	get innerHTML(): string {
		return this.nativeElement ? this.nativeElement.innerHTML : undefined;
	}
	set innerHTML(value: string) {
		this.nativeElement ? this.nativeElement.innerHTML = value : undefined;
	}

	/** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
	@Input()
	get name(): string {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		this.nativeElement ? this.nativeElement.name = value : undefined;
	}

	/** @description Outlines the button.  */
	@Input()
	get outlined(): boolean {
		return this.nativeElement ? this.nativeElement.outlined : undefined;
	}
	set outlined(value: boolean) {
		this.nativeElement ? this.nativeElement.outlined = value : undefined;
	}

	/** @description Sets or gets the style mode of the button. */
	@Input()
	get styleMode(): BootstrapButtonStyleMode {
		return this.nativeElement ? this.nativeElement.styleMode : undefined;
	}
	set styleMode(value: BootstrapButtonStyleMode) {
		this.nativeElement ? this.nativeElement.styleMode = value : undefined;
	}

	/** @description Sets or gets the size mode of the element. */
	@Input()
	get sizeMode(): string {
		return this.nativeElement ? this.nativeElement.sizeMode : undefined;
	}
	set sizeMode(value: string) {
		this.nativeElement ? this.nativeElement.sizeMode = value : undefined;
	}

	/** @description Sets or gets the type of the button. */
	@Input()
	get type(): string {
		return this.nativeElement ? this.nativeElement.type : undefined;
	}
	set type(value: string) {
		this.nativeElement ? this.nativeElement.type = value : undefined;
	}

	/** @description Sets or gets the button's value.  */
	@Input()
	get value(): string {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: string) {
		this.nativeElement ? this.nativeElement.value = value : undefined;
	}

	/** @description Click event.
	*  @param event. The custom event. 	*/
	@Output() onClick: EventEmitter<CustomEvent> = new EventEmitter();


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
		that.eventHandlers['clickHandler'] = (event: CustomEvent) => { that.onClick.emit(event); }
		that.nativeElement.addEventListener('click', that.eventHandlers['clickHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['clickHandler']) {
			that.nativeElement.removeEventListener('click', that.eventHandlers['clickHandler']);
		}

	}
}
