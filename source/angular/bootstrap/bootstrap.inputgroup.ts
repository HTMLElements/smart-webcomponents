import { BootstrapInputGroup } from './../index';
import { BootstrapInputGroupStyleMode, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { BootstrapInputGroupStyleMode, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { BootstrapInputGroup } from './../index';


@Directive({
	selector: 'bootstrap-input-group, [bootstrap-input-group]'
})

export class BootstrapInputGroupComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<BootstrapInputGroup>) {
		super(ref);
		this.nativeElement = ref.nativeElement as BootstrapInputGroup;
	}

	private eventHandlers: any[] = [];

	public nativeElement: BootstrapInputGroup;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <BootstrapInputGroup>document.createElement('bootstrap-input-group');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Sets the content before the input. */
	@Input()
	get contentBefore(): string {
		return this.nativeElement ? this.nativeElement.contentBefore : undefined;
	}
	set contentBefore(value: string) {
		this.nativeElement ? this.nativeElement.contentBefore = value : undefined;
	}

	/** @description Sets the content after the input. */
	@Input()
	get contentAfter(): string {
		return this.nativeElement ? this.nativeElement.contentAfter : undefined;
	}
	set contentAfter(value: string) {
		this.nativeElement ? this.nativeElement.contentAfter = value : undefined;
	}

	/** @description Enables or disables the element.  */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
	@Input()
	get name(): string {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		this.nativeElement ? this.nativeElement.name = value : undefined;
	}

	/** @description Enables or disables the wrapping.  */
	@Input()
	get noWrap(): boolean {
		return this.nativeElement ? this.nativeElement.noWrap : undefined;
	}
	set noWrap(value: boolean) {
		this.nativeElement ? this.nativeElement.noWrap = value : undefined;
	}

	/** @description Sets or gets the style mode of the input group. */
	@Input()
	get styleMode(): BootstrapInputGroupStyleMode {
		return this.nativeElement ? this.nativeElement.styleMode : undefined;
	}
	set styleMode(value: BootstrapInputGroupStyleMode) {
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

	/** @description Sets or gets the type of the input. */
	@Input()
	get type(): string {
		return this.nativeElement ? this.nativeElement.type : undefined;
	}
	set type(value: string) {
		this.nativeElement ? this.nativeElement.type = value : undefined;
	}

	/** @description Sets the placeholder of the input. */
	@Input()
	get placeholder(): string {
		return this.nativeElement ? this.nativeElement.placeholder : undefined;
	}
	set placeholder(value: string) {
		this.nativeElement ? this.nativeElement.placeholder = value : undefined;
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
