import { NumberInput } from './../index';
import { Animation, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { NumberInput } from './../index';


@Directive({
	selector: 'smart-number-input, [smart-number-input]'
})

export class NumberInputComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<NumberInput>) {
		super(ref);
		this.nativeElement = ref.nativeElement as NumberInput;
	}

	private eventHandlers: any[] = [];

	public nativeElement: NumberInput;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <NumberInput>document.createElement('smart-number-input');
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

	/** @description Enables or disables the element. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc. */
	@Input()
	get inputPurpose(): string {
		return this.nativeElement ? this.nativeElement.inputPurpose : undefined;
	}
	set inputPurpose(value: string) {
		this.nativeElement ? this.nativeElement.inputPurpose = value : undefined;
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

	/** @description Determines the max number that can be displayed inside the input. */
	@Input()
	get max(): number {
		return this.nativeElement ? this.nativeElement.max : undefined;
	}
	set max(value: number) {
		this.nativeElement ? this.nativeElement.max = value : undefined;
	}

	/** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Determines the min number that can be displayed inside the input. */
	@Input()
	get min(): number {
		return this.nativeElement ? this.nativeElement.min : undefined;
	}
	set min(value: number) {
		this.nativeElement ? this.nativeElement.min = value : undefined;
	}

	/** @description Sets or gets the name attribute for the element. Name is used when submiting data inside an HTML form. */
	@Input()
	get name(): string {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		this.nativeElement ? this.nativeElement.name = value : undefined;
	}

	/** @description Sets or gets the value format of the element. */
	@Input()
	get numberFormat(): any {
		return this.nativeElement ? this.nativeElement.numberFormat : undefined;
	}
	set numberFormat(value: any) {
		this.nativeElement ? this.nativeElement.numberFormat = value : undefined;
	}

	/** @description Determines the placeholder of the input. */
	@Input()
	get placeholder(): string {
		return this.nativeElement ? this.nativeElement.placeholder : undefined;
	}
	set placeholder(value: string) {
		this.nativeElement ? this.nativeElement.placeholder = value : undefined;
	}

	/** @description Determines whether ot not the user can enter text inside the input. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description Sets or gets the incremental/decremental step for the value of the element. */
	@Input()
	get step(): number {
		return this.nativeElement ? this.nativeElement.step : undefined;
	}
	set step(value: number) {
		this.nativeElement ? this.nativeElement.step = value : undefined;
	}

	/** @description Determines the theme for the element. Themes define the look of the elements. */
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

	/** @description Sets or gets the value of the element. */
	@Input()
	get value(): any {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: any) {
		this.nativeElement ? this.nativeElement.value = value : undefined;
	}

	/** @description This event is triggered when the selection is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	oldLabel, 	oldValue, 	value)
	*   label - The label of the new selected item.
	*   oldLabel - The label of the item that was previously selected before the event was triggered.
	*   oldValue - The value of the item that was previously selected before the event was triggered.
	*   value - The value of the new selected item.
	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Returns the value in the desired format. 
	* @param {string | number} value. The value to be formatted by the method. 
	* @param {any} format?. The object that contains the formatting properties. The argument should contain Intl.NumberFormat valid properties. For example, { style: 'currency', currency: 'EUR' }
	*/
    public getFormattedValue(value: string | number, format?: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.getFormattedValue(value, format);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.getFormattedValue(value, format);
            });
        }
    }

	/** @description Returns the number of the input. 
	*/
    public getValue(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.getValue();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.getValue();
            });
        }
    }

	/** @description Selects the text inside the input or if it is readonly then the element is focused. 
	*/
    public select(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select();
            });
        }
    }

	/** @description Sets the value of the input. 
	* @param {string | number} value. The value to be set. 
	*/
    public setValue(value: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setValue(value);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setValue(value);
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
