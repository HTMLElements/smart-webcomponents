import { NumericTextBox } from './../index';
import { Animation, NumericTextBoxInputFormat, NumericTextBoxRadix, NumericTextBoxDisplayPosition, Validation, WordLength, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, forwardRef, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, NumericTextBoxInputFormat, NumericTextBoxRadix, NumericTextBoxDisplayPosition, Validation, WordLength, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { NumericTextBox } from './../index';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';



const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NumericTextBoxComponent),
    multi: true
}

@Directive({
	selector: 'smart-numeric-text-box, [smart-numeric-text-box]',
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]

})

export class NumericTextBoxComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
	constructor(ref: ElementRef<NumericTextBox>) {
		super(ref);
		this.nativeElement = ref.nativeElement as NumericTextBox;
	}

	private eventHandlers: any[] = [];

	public nativeElement: NumericTextBox;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <NumericTextBox>document.createElement('smart-numeric-text-box');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
        /**
        * @description
        * The registered callback function called when a change event occurs on the form elements.
        */
       _onChange: (value: any) => void = () => {};
        /**
        * @description
        * The registered callback function called when a blur event occurs on the form elements.
        */
       _onTouched: () => any = () => {};


	/** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
	@Input()
	get animation(): Animation {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation) {
		this.nativeElement ? this.nativeElement.animation = value : undefined;
	}

	/** @description Sets or gets the char to use as the decimal separator in numeric values.  */
	@Input()
	get decimalSeparator(): string {
		return this.nativeElement ? this.nativeElement.decimalSeparator : undefined;
	}
	set decimalSeparator(value: string) {
		this.nativeElement ? this.nativeElement.decimalSeparator = value : undefined;
	}

	/** @description Enables or disables the jqxNumericTextBox.  */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Sets the parent container of the radix dropdown. */
	@Input()
	get dropDownAppendTo(): any {
		return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
	}
	set dropDownAppendTo(value: any) {
		this.nativeElement ? this.nativeElement.dropDownAppendTo = value : undefined;
	}

	/** @description Determines if a dropdown will be displayed when the radix display button is clicked. The dropdown shows options for changing to the binary, octal, decimal, and hexadecimal numeral systems. */
	@Input()
	get dropDownEnabled(): boolean {
		return this.nativeElement ? this.nativeElement.dropDownEnabled : undefined;
	}
	set dropDownEnabled(value: boolean) {
		this.nativeElement ? this.nativeElement.dropDownEnabled = value : undefined;
	}

	/** @description Enables or disables incrementing/decrementing the value using the mouse wheel in jqxNumericTextBox.  */
	@Input()
	get enableMouseWheelAction(): boolean {
		return this.nativeElement ? this.nativeElement.enableMouseWheelAction : undefined;
	}
	set enableMouseWheelAction(value: boolean) {
		this.nativeElement ? this.nativeElement.enableMouseWheelAction = value : undefined;
	}

	/** @description Sets additional helper text below the element.  */
	@Input()
	get hint(): string {
		return this.nativeElement ? this.nativeElement.hint : undefined;
	}
	set hint(value: string) {
		this.nativeElement ? this.nativeElement.hint = value : undefined;
	}

	/** @description Sets or gets the input format of the widget. Setting this property dynamically can lead to precision loss.  */
	@Input()
	get inputFormat(): NumericTextBoxInputFormat {
		return this.nativeElement ? this.nativeElement.inputFormat : undefined;
	}
	set inputFormat(value: NumericTextBoxInputFormat) {
		this.nativeElement ? this.nativeElement.inputFormat = value : undefined;
	}

	/** @description Sets a label above the element.  */
	@Input()
	get label(): string {
		return this.nativeElement ? this.nativeElement.label : undefined;
	}
	set label(value: string) {
		this.nativeElement ? this.nativeElement.label = value : undefined;
	}

	/** @description If this property is enabled, leading zeros are added (if necessary) to the binary and hexadecimal representations of a number based on wordLength. */
	@Input()
	get leadingZeros(): boolean {
		return this.nativeElement ? this.nativeElement.leadingZeros : undefined;
	}
	set leadingZeros(value: boolean) {
		this.nativeElement ? this.nativeElement.leadingZeros = value : undefined;
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

	/** @description Sets or gets the maximum value of the widget.  */
	@Input()
	get max(): any {
		return this.nativeElement ? this.nativeElement.max : undefined;
	}
	set max(value: any) {
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

	/** @description Sets or gets the minimum value of the widget.  */
	@Input()
	get min(): any {
		return this.nativeElement ? this.nativeElement.min : undefined;
	}
	set min(value: any) {
		this.nativeElement ? this.nativeElement.min = value : undefined;
	}

	/** @description The name of the control. */
	@Input()
	get name(): string {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		this.nativeElement ? this.nativeElement.name = value : undefined;
	}

	/** @description Enables or disables the setting of the value property to null or empty string.  */
	@Input()
	get nullable(): boolean {
		return this.nativeElement ? this.nativeElement.nullable : undefined;
	}
	set nullable(value: boolean) {
		this.nativeElement ? this.nativeElement.nullable = value : undefined;
	}

	/** @description Sets or gets whether the radix dropdown is opened. Applicable only when dropDownEnabled is true.  */
	@Input()
	get opened(): boolean {
		return this.nativeElement ? this.nativeElement.opened : undefined;
	}
	set opened(value: boolean) {
		this.nativeElement ? this.nativeElement.opened = value : undefined;
	}

	/** @description Sets or gets the pattern which the input value is displayed in when the element is not focused. All formats available to the NumberRenderer class can be applied as outputFormatString.  */
	@Input()
	get outputFormatString(): string {
		return this.nativeElement ? this.nativeElement.outputFormatString : undefined;
	}
	set outputFormatString(value: string) {
		this.nativeElement ? this.nativeElement.outputFormatString = value : undefined;
	}

	/** @description Determines the widget's place holder displayed when the widget's input is empty.  */
	@Input()
	get placeholder(): string {
		return this.nativeElement ? this.nativeElement.placeholder : undefined;
	}
	set placeholder(value: string) {
		this.nativeElement ? this.nativeElement.placeholder = value : undefined;
	}

	/** @description Determines the number of digits after the decimal point. Applicable when inputFormat is either 'floatingPoint' or 'complex'.  */
	@Input()
	get precisionDigits(): number {
		return this.nativeElement ? this.nativeElement.precisionDigits : undefined;
	}
	set precisionDigits(value: number) {
		this.nativeElement ? this.nativeElement.precisionDigits = value : undefined;
	}

	/** @description Sets or gets the radix of the jqxNumericTextBox. The radix specifies the numeral system in which to display the widget's value. Applicable only when inputFormat is 'integer'.  */
	@Input()
	get radix(): NumericTextBoxRadix {
		return this.nativeElement ? this.nativeElement.radix : undefined;
	}
	set radix(value: NumericTextBoxRadix) {
		this.nativeElement ? this.nativeElement.radix = value : undefined;
	}

	/** @description Enables or disables the radix display button of the jqxNumericTextBox. Applicable only when inputFormat is 'integer'.  */
	@Input()
	get radixDisplay(): boolean {
		return this.nativeElement ? this.nativeElement.radixDisplay : undefined;
	}
	set radixDisplay(value: boolean) {
		this.nativeElement ? this.nativeElement.radixDisplay = value : undefined;
	}

	/** @description Sets or gets the position of the radix display button of the jqxNumericTextBox.  */
	@Input()
	get radixDisplayPosition(): NumericTextBoxDisplayPosition {
		return this.nativeElement ? this.nativeElement.radixDisplayPosition : undefined;
	}
	set radixDisplayPosition(value: NumericTextBoxDisplayPosition) {
		this.nativeElement ? this.nativeElement.radixDisplayPosition = value : undefined;
	}

	/** @description Sets or gets the readonly state of the jqxNumericTextBox.  */
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

	/** @description Enables or disables outputting the value in scientific notation. Applicable only when inputFormat is 'integer'.  */
	@Input()
	get scientificNotation(): boolean {
		return this.nativeElement ? this.nativeElement.scientificNotation : undefined;
	}
	set scientificNotation(value: boolean) {
		this.nativeElement ? this.nativeElement.scientificNotation = value : undefined;
	}

	/** @description Determines whether to show the current value represented in all four numeral systems in the drop down. */
	@Input()
	get showDropDownValues(): boolean {
		return this.nativeElement ? this.nativeElement.showDropDownValues : undefined;
	}
	set showDropDownValues(value: boolean) {
		this.nativeElement ? this.nativeElement.showDropDownValues = value : undefined;
	}

	/** @description Enables or disables the visibility of the units.  */
	@Input()
	get showUnit(): boolean {
		return this.nativeElement ? this.nativeElement.showUnit : undefined;
	}
	set showUnit(value: boolean) {
		this.nativeElement ? this.nativeElement.showUnit = value : undefined;
	}

	/** @description Determining how many significant digits are in a number. Applicable when inputFormat is either 'floatingPoint' or 'complex'.  */
	@Input()
	get significantDigits(): number {
		return this.nativeElement ? this.nativeElement.significantDigits : undefined;
	}
	set significantDigits(value: number) {
		this.nativeElement ? this.nativeElement.significantDigits = value : undefined;
	}

	/** @description Enables or disables the visibility of the spin buttons.  */
	@Input()
	get spinButtons(): boolean {
		return this.nativeElement ? this.nativeElement.spinButtons : undefined;
	}
	set spinButtons(value: boolean) {
		this.nativeElement ? this.nativeElement.spinButtons = value : undefined;
	}

	/** @description Sets the delay between repeats of spin buttons in miliseconds.  */
	@Input()
	get spinButtonsDelay(): number {
		return this.nativeElement ? this.nativeElement.spinButtonsDelay : undefined;
	}
	set spinButtonsDelay(value: number) {
		this.nativeElement ? this.nativeElement.spinButtonsDelay = value : undefined;
	}

	/** @description Sets a delay before the first repeat iteration of spin buttons in miliseconds.  */
	@Input()
	get spinButtonsInitialDelay(): number {
		return this.nativeElement ? this.nativeElement.spinButtonsInitialDelay : undefined;
	}
	set spinButtonsInitialDelay(value: number) {
		this.nativeElement ? this.nativeElement.spinButtonsInitialDelay = value : undefined;
	}

	/** @description Sets or gets the position of the spin buttons of the jqxNumericTextBox.  */
	@Input()
	get spinButtonsPosition(): NumericTextBoxDisplayPosition {
		return this.nativeElement ? this.nativeElement.spinButtonsPosition : undefined;
	}
	set spinButtonsPosition(value: NumericTextBoxDisplayPosition) {
		this.nativeElement ? this.nativeElement.spinButtonsPosition = value : undefined;
	}

	/** @description Sets or gets the increase/decrease step.  */
	@Input()
	get spinButtonsStep(): any {
		return this.nativeElement ? this.nativeElement.spinButtonsStep : undefined;
	}
	set spinButtonsStep(value: any) {
		this.nativeElement ? this.nativeElement.spinButtonsStep = value : undefined;
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

	/** @description Sets or gets the name of unit used in jqxNumericTextBox widget.  */
	@Input()
	get unit(): string {
		return this.nativeElement ? this.nativeElement.unit : undefined;
	}
	set unit(value: string) {
		this.nativeElement ? this.nativeElement.unit = value : undefined;
	}

	/** @description Sets the value's validation by min/max. If 'strict' is applied, the value is always validated by min and max. If 'interaction' is applied, programmatic value changes are not coerced to min/max and if min/max are changed, resulting in the current value being out of range, the value is not coerced, and no change event is fired. */
	@Input()
	get validation(): Validation {
		return this.nativeElement ? this.nativeElement.validation : undefined;
	}
	set validation(value: Validation) {
		this.nativeElement ? this.nativeElement.validation = value : undefined;
	}

	/** @description Sets or gets the value of the jqxNumericTextBox widget.  */
	@Input()
	get value(): any {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: any) {
		this.nativeElement ? this.nativeElement.value = value : undefined;
	}

	/** @description Sets or gets the word length. Applicable only when inputFormat is 'integer'. If min and/or max are not set by default, they will be set automatically based on the specified word length.  */
	@Input()
	get wordLength(): WordLength {
		return this.nativeElement ? this.nativeElement.wordLength : undefined;
	}
	set wordLength(value: WordLength) {
		this.nativeElement ? this.nativeElement.wordLength = value : undefined;
	}

	/** @description This event is triggered when the value is changed. 
	*  @param event. The custom event. 	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the value in the input is being changed via keypress or paste. 
	*  @param event. The custom event. 	*/
	@Output() onChanging: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the dropdown is closed. 
	*  @param event. The custom event. 	*/
	@Output() onClose: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the dropdown is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	@Output() onClosing: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the dropdown is opened. 
	*  @param event. The custom event. 	*/
	@Output() onOpen: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the dropdown is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	@Output() onOpening: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the radix is changed. 
	*  @param event. The custom event. 	*/
	@Output() onRadixChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Focuses the NumericTextBox.  
	*/
    public focus(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.focus();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.focus();
            });
        }
    }

	/** @description Get/set the value of the NumericTextBox.  
	* @param {string | number} value?. The value to be set. If no parameter is passed, returns the displayed value of the jqxNumericTextBox. 
	* @param {boolean} suppressValidation?. If <em>true</em> is passed, the passed value will be set to the jqxNumericTextBox without validation. 
	* @returns {string}
  */
	public async val(value?, suppressValidation?): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.val(value, suppressValidation);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
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

	_initialChange = true; 

	get ngValue(): any {
		if (!this.nativeElement) {
			return null;
		}

		const value = this.nativeElement.value;
		return value;
	}

	set ngValue(value: any) {
		if (this.nativeElement) {
		    this.writeValue(value);
		}
	}

	writeValue(value: any): void {
        const that = this;
        const normalizedValue = value == null ? '' : value;

		that.nativeElement.whenRendered(() => {
			that.value = normalizedValue;
			if (that._initialChange === false) {
	    		that._onChange(that.value);
            }
		});
	}

	registerOnChange(fn: any): void {
		this._onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this._onTouched = fn;
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

		that.eventHandlers['changingHandler'] = (event: CustomEvent) => { that.onChanging.emit(event); }
		that.nativeElement.addEventListener('changing', that.eventHandlers['changingHandler']);

		that.eventHandlers['closeHandler'] = (event: CustomEvent) => { that.onClose.emit(event); }
		that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);

		that.eventHandlers['closingHandler'] = (event: CustomEvent) => { that.onClosing.emit(event); }
		that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);

		that.eventHandlers['openHandler'] = (event: CustomEvent) => { that.onOpen.emit(event); }
		that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);

		that.eventHandlers['openingHandler'] = (event: CustomEvent) => { that.onOpening.emit(event); }
		that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);

		that.eventHandlers['radixChangeHandler'] = (event: CustomEvent) => { that.onRadixChange.emit(event); }
		that.nativeElement.addEventListener('radixChange', that.eventHandlers['radixChangeHandler']);

		
        that.eventHandlers['changeModelHandler'] = (event: Event) => {
            that._initialChange = false;
            that._onChange(that.nativeElement.value); 
        };
        that.eventHandlers['blurModelHandler'] = (event: Event) => {
            that._onTouched();
        };
        that.nativeElement.whenRendered(() => {
                    if (that.nativeElement.querySelector('input')) {    
                        that.eventHandlers['keyupModelHandler'] = (event) => {
                            that.nativeElement._validate(false, that.nativeElement.querySelector('input').value);
                            that.eventHandlers['changeModelHandler'](event);
                        };

                        that.nativeElement.querySelector('input').addEventListener('keyup', that.eventHandlers['keyupModelHandler']);
                    }
                });
		that.nativeElement.addEventListener('change', that.eventHandlers['changeModelHandler']);
		that.nativeElement.addEventListener('blur', that.eventHandlers['blurModelHandler']);
	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['changeHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
		}

		if (that.eventHandlers['changingHandler']) {
			that.nativeElement.removeEventListener('changing', that.eventHandlers['changingHandler']);
		}

		if (that.eventHandlers['closeHandler']) {
			that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
		}

		if (that.eventHandlers['closingHandler']) {
			that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
		}

		if (that.eventHandlers['openHandler']) {
			that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
		}

		if (that.eventHandlers['openingHandler']) {
			that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
		}

		if (that.eventHandlers['radixChangeHandler']) {
			that.nativeElement.removeEventListener('radixChange', that.eventHandlers['radixChangeHandler']);
		}

		if (that.eventHandlers['changeModelHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeModelHandler']);
            if (that.nativeElement.querySelector('input')) {
                  that.nativeElement.querySelector('input').removeEventListener('keyup', that.eventHandlers['keyupModelHandler']);
            }
		}
		if (that.eventHandlers['blurModelHandler']) {
			that.nativeElement.removeEventListener('blur', that.eventHandlers['blurModelHandler']);
		}
	}
}
