import { BootstrapRadioButton } from './../index';
import { BootstrapRadioButtonStyleMode, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { BootstrapRadioButtonStyleMode, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { BootstrapRadioButton } from './../index';


@Directive({
	selector: 'bootstrap-radio-button, [bootstrap-radio-button]'
})

export class BootstrapRadioButtonComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<BootstrapRadioButton>) {
		super(ref);
		this.nativeElement = ref.nativeElement as BootstrapRadioButton;
	}

	private eventHandlers: any[] = [];

	public nativeElement: BootstrapRadioButton;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <BootstrapRadioButton>document.createElement('bootstrap-radio-button');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Gets or sets the checked state of the element.  */
	@Input()
	get checked(): boolean {
		return this.nativeElement ? this.nativeElement.checked : undefined;
	}
	set checked(value: boolean) {
		this.nativeElement ? this.nativeElement.checked = value : undefined;
	}

	/** @description Enables or disables the element.  */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Gets or sets whether the element is in indeterminate state.  */
	@Input()
	get indeterminate(): boolean {
		return this.nativeElement ? this.nativeElement.indeterminate : undefined;
	}
	set indeterminate(value: boolean) {
		this.nativeElement ? this.nativeElement.indeterminate = value : undefined;
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

	/** @description Sets or gets the style mode of the element. */
	@Input()
	get styleMode(): BootstrapRadioButtonStyleMode {
		return this.nativeElement ? this.nativeElement.styleMode : undefined;
	}
	set styleMode(value: BootstrapRadioButtonStyleMode) {
		this.nativeElement ? this.nativeElement.styleMode = value : undefined;
	}

	/** @description Change event is triggered when the value of the element is changed.
	*  @param event. The custom event. 	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Toggles the element 
	*/
    public toggle(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.toggle();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.toggle();
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
