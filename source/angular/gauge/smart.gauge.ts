import { Gauge } from './../index';
import { GaugeAnalogDisplayType, Animation, GaugeDigitalDisplayPosition, LabelsVisibility, DragMechanicalAction, ScaleMode, GaugeNeedlePosition, GaugeScalePosition, ScaleType, GaugeSizeMode, TicksPosition, TicksVisibility, Validation, WordLength, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, forwardRef, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { GaugeAnalogDisplayType, Animation, GaugeDigitalDisplayPosition, LabelsVisibility, DragMechanicalAction, ScaleMode, GaugeNeedlePosition, GaugeScalePosition, ScaleType, GaugeSizeMode, TicksPosition, TicksVisibility, Validation, WordLength, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Gauge } from './../index';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';



const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => GaugeComponent),
    multi: true
}

@Directive({
	selector: 'smart-gauge, [smart-gauge]',
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]

})

export class GaugeComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
	constructor(ref: ElementRef<Gauge>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Gauge;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Gauge;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Gauge>document.createElement('smart-gauge');
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


	/** @description Determines the type of gauge's indicator. */
	@Input()
	get analogDisplayType(): GaugeAnalogDisplayType {
		return this.nativeElement ? this.nativeElement.analogDisplayType : undefined;
	}
	set analogDisplayType(value: GaugeAnalogDisplayType) {
		this.nativeElement ? this.nativeElement.analogDisplayType = value : undefined;
	}

	/** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
	@Input()
	get animation(): Animation {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation) {
		this.nativeElement ? this.nativeElement.animation = value : undefined;
	}

	/** @description Sets or gets gauge's animation duration. Applicable only when animation is not 'none'. */
	@Input()
	get animationDuration(): number {
		return this.nativeElement ? this.nativeElement.animationDuration : undefined;
	}
	set animationDuration(value: number) {
		this.nativeElement ? this.nativeElement.animationDuration = value : undefined;
	}

	/** @description With the coerce property true, the value is set to the nearest value allowed by the interval property.  */
	@Input()
	get coerce(): boolean {
		return this.nativeElement ? this.nativeElement.coerce : undefined;
	}
	set coerce(value: boolean) {
		this.nativeElement ? this.nativeElement.coerce = value : undefined;
	}

	/** @description Sets or gets whether custom ticks at (possibly) uneven interval will be plotted. The ticks to be plotted are defined with the property customTicks. */
	@Input()
	get customInterval(): boolean {
		return this.nativeElement ? this.nativeElement.customInterval : undefined;
	}
	set customInterval(value: boolean) {
		this.nativeElement ? this.nativeElement.customInterval = value : undefined;
	}

	/** @description If customInterval is enabled, sets a list of ticks to be plotted. If coerce is set to true, the value will snap to these ticks. */
	@Input()
	get customTicks(): number[] {
		return this.nativeElement ? this.nativeElement.customTicks : undefined;
	}
	set customTicks(value: number[]) {
		this.nativeElement ? this.nativeElement.customTicks = value : undefined;
	}

	/** @description Determines the date pattern of the labels when mode is 'date'. */
	@Input()
	get dateLabelFormatString(): string {
		return this.nativeElement ? this.nativeElement.dateLabelFormatString : undefined;
	}
	set dateLabelFormatString(value: string) {
		this.nativeElement ? this.nativeElement.dateLabelFormatString = value : undefined;
	}

	/** @description Sets or gets the char to use as the decimal separator in numeric values.  */
	@Input()
	get decimalSeparator(): string {
		return this.nativeElement ? this.nativeElement.decimalSeparator : undefined;
	}
	set decimalSeparator(value: string) {
		this.nativeElement ? this.nativeElement.decimalSeparator = value : undefined;
	}

	/** @description Enables or disables the digital display of the element. */
	@Input()
	get digitalDisplay(): boolean {
		return this.nativeElement ? this.nativeElement.digitalDisplay : undefined;
	}
	set digitalDisplay(value: boolean) {
		this.nativeElement ? this.nativeElement.digitalDisplay = value : undefined;
	}

	/** @description Sets the position of the digital display inside the element. */
	@Input()
	get digitalDisplayPosition(): GaugeDigitalDisplayPosition {
		return this.nativeElement ? this.nativeElement.digitalDisplayPosition : undefined;
	}
	set digitalDisplayPosition(value: GaugeDigitalDisplayPosition) {
		this.nativeElement ? this.nativeElement.digitalDisplayPosition = value : undefined;
	}

	/** @description Enables or disables the element. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Callback function which allows rendering of a custom needle. Applicable only to analogDisplayType needle. */
	@Input()
	get drawNeedle(): any {
		return this.nativeElement ? this.nativeElement.drawNeedle : undefined;
	}
	set drawNeedle(value: any) {
		this.nativeElement ? this.nativeElement.drawNeedle = value : undefined;
	}

	/** @description Sets or gets Gauge's end angle. This property specifies the end of the gauge's scale and is measured in degrees. */
	@Input()
	get endAngle(): number {
		return this.nativeElement ? this.nativeElement.endAngle : undefined;
	}
	set endAngle(value: number) {
		this.nativeElement ? this.nativeElement.endAngle = value : undefined;
	}

	/** @description When cooerce property is true, all values coerce to the interval's value. */
	@Input()
	get interval(): any {
		return this.nativeElement ? this.nativeElement.interval : undefined;
	}
	set interval(value: any) {
		this.nativeElement ? this.nativeElement.interval = value : undefined;
	}

	/** @description Sets the direction of the gauge. If true - the positions of the gauge's start and end are switched. */
	@Input()
	get inverted(): boolean {
		return this.nativeElement ? this.nativeElement.inverted : undefined;
	}
	set inverted(value: boolean) {
		this.nativeElement ? this.nativeElement.inverted = value : undefined;
	}

	/** @description A callback function that can be used to format the values displayed inside the gauge labels. */
	@Input()
	get labelFormatFunction(): any {
		return this.nativeElement ? this.nativeElement.labelFormatFunction : undefined;
	}
	set labelFormatFunction(value: any) {
		this.nativeElement ? this.nativeElement.labelFormatFunction = value : undefined;
	}

	/** @description Determines the visibility of the labels inside the element. */
	@Input()
	get labelsVisibility(): LabelsVisibility {
		return this.nativeElement ? this.nativeElement.labelsVisibility : undefined;
	}
	set labelsVisibility(value: LabelsVisibility) {
		this.nativeElement ? this.nativeElement.labelsVisibility = value : undefined;
	}

	/** @description Sets or gets the locale. Used in conjunction with the property messages.  */
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

	/** @description Enables or disables the usage of logarithmic scale in the element. */
	@Input()
	get logarithmicScale(): boolean {
		return this.nativeElement ? this.nativeElement.logarithmicScale : undefined;
	}
	set logarithmicScale(value: boolean) {
		this.nativeElement ? this.nativeElement.logarithmicScale = value : undefined;
	}

	/** @description Determines the maximum value for the scale of the element. */
	@Input()
	get max(): any {
		return this.nativeElement ? this.nativeElement.max : undefined;
	}
	set max(value: any) {
		this.nativeElement ? this.nativeElement.max = value : undefined;
	}

	/** @description Determines when the value of the element is updated. */
	@Input()
	get mechanicalAction(): DragMechanicalAction {
		return this.nativeElement ? this.nativeElement.mechanicalAction : undefined;
	}
	set mechanicalAction(value: DragMechanicalAction) {
		this.nativeElement ? this.nativeElement.mechanicalAction = value : undefined;
	}

	/** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Determines the minimum value for the scale of the element.  */
	@Input()
	get min(): any {
		return this.nativeElement ? this.nativeElement.min : undefined;
	}
	set min(value: any) {
		this.nativeElement ? this.nativeElement.min = value : undefined;
	}

	/** @description Determines whether the element works with numbers or dates. */
	@Input()
	get mode(): ScaleMode {
		return this.nativeElement ? this.nativeElement.mode : undefined;
	}
	set mode(value: ScaleMode) {
		this.nativeElement ? this.nativeElement.mode = value : undefined;
	}

	/** @description Sets or gets the element's name, which is used as a reference when the data is submitted. */
	@Input()
	get name(): string {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		this.nativeElement ? this.nativeElement.name = value : undefined;
	}

	/** @description Determines the position of the needle when analogDisplayType is 'needle'.  */
	@Input()
	get needlePosition(): GaugeNeedlePosition {
		return this.nativeElement ? this.nativeElement.needlePosition : undefined;
	}
	set needlePosition(value: GaugeNeedlePosition) {
		this.nativeElement ? this.nativeElement.needlePosition = value : undefined;
	}

	/** @description Determines the number of digits after the decimal point. Applicable only when scaleType is 'floatingPoint'. */
	@Input()
	get precisionDigits(): number {
		return this.nativeElement ? this.nativeElement.precisionDigits : undefined;
	}
	set precisionDigits(value: number) {
		this.nativeElement ? this.nativeElement.precisionDigits = value : undefined;
	}

	/** @description This property represents an array of objects. Each object is a different range. The range is a colored area with specific size. */
	@Input()
	get ranges(): {startValue: number, endValue: number, className: string}[] {
		return this.nativeElement ? this.nativeElement.ranges : undefined;
	}
	set ranges(value: {startValue: number, endValue: number, className: string}[]) {
		this.nativeElement ? this.nativeElement.ranges = value : undefined;
	}

	/** @description When the element is read only the users cannot interact with it. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. If enabled, the scale is inverted and the labels and digital display are oriented from right to left. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description Determines the position of the scale in the element.  */
	@Input()
	get scalePosition(): GaugeScalePosition {
		return this.nativeElement ? this.nativeElement.scalePosition : undefined;
	}
	set scalePosition(value: GaugeScalePosition) {
		this.nativeElement ? this.nativeElement.scalePosition = value : undefined;
	}

	/** @description Determines the type of the gauge's value and scale.  */
	@Input()
	get scaleType(): ScaleType {
		return this.nativeElement ? this.nativeElement.scaleType : undefined;
	}
	set scaleType(value: ScaleType) {
		this.nativeElement ? this.nativeElement.scaleType = value : undefined;
	}

	/** @description Enables or disables scientific notation. */
	@Input()
	get scientificNotation(): boolean {
		return this.nativeElement ? this.nativeElement.scientificNotation : undefined;
	}
	set scientificNotation(value: boolean) {
		this.nativeElement ? this.nativeElement.scientificNotation = value : undefined;
	}

	/** @description This property indicates whether the gauge ranges are visible or not. */
	@Input()
	get showRanges(): boolean {
		return this.nativeElement ? this.nativeElement.showRanges : undefined;
	}
	set showRanges(value: boolean) {
		this.nativeElement ? this.nativeElement.showRanges = value : undefined;
	}

	/** @description Enables or disables displaying of units. */
	@Input()
	get showUnit(): boolean {
		return this.nativeElement ? this.nativeElement.showUnit : undefined;
	}
	set showUnit(value: boolean) {
		this.nativeElement ? this.nativeElement.showUnit = value : undefined;
	}

	/** @description Determining how many significant digits are in a number. Applicable only when scaleType is 'integer'. */
	@Input()
	get significantDigits(): number | null {
		return this.nativeElement ? this.nativeElement.significantDigits : undefined;
	}
	set significantDigits(value: number | null) {
		this.nativeElement ? this.nativeElement.significantDigits = value : undefined;
	}

	/** @description Determines how the Gauge will size. */
	@Input()
	get sizeMode(): GaugeSizeMode {
		return this.nativeElement ? this.nativeElement.sizeMode : undefined;
	}
	set sizeMode(value: GaugeSizeMode) {
		this.nativeElement ? this.nativeElement.sizeMode = value : undefined;
	}

	/** @description Sets or gets gauge's start angle. This property specifies the beggining of the gauge's scale and is measured in degrees. */
	@Input()
	get startAngle(): number {
		return this.nativeElement ? this.nativeElement.startAngle : undefined;
	}
	set startAngle(value: number) {
		this.nativeElement ? this.nativeElement.startAngle = value : undefined;
	}

	/** @description Sets or gets the element's visual theme. */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description Determines the position of the ticks in the Gauge. */
	@Input()
	get ticksPosition(): TicksPosition {
		return this.nativeElement ? this.nativeElement.ticksPosition : undefined;
	}
	set ticksPosition(value: TicksPosition) {
		this.nativeElement ? this.nativeElement.ticksPosition = value : undefined;
	}

	/** @description Determines the visibility of the ticks. */
	@Input()
	get ticksVisibility(): TicksVisibility {
		return this.nativeElement ? this.nativeElement.ticksVisibility : undefined;
	}
	set ticksVisibility(value: TicksVisibility) {
		this.nativeElement ? this.nativeElement.ticksVisibility = value : undefined;
	}

	/** @description Sets or gets if the element can be focused. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
	}

	/** @description Sets or gets the name of unit used for the values on the scale of the element. */
	@Input()
	get unit(): string {
		return this.nativeElement ? this.nativeElement.unit : undefined;
	}
	set unit(value: string) {
		this.nativeElement ? this.nativeElement.unit = value : undefined;
	}

	/** @description Sets the value's validation by min/max. */
	@Input()
	get validation(): Validation {
		return this.nativeElement ? this.nativeElement.validation : undefined;
	}
	set validation(value: Validation) {
		this.nativeElement ? this.nativeElement.validation = value : undefined;
	}

	/** @description Sets or gets the value of the element. The value can be a date only when scaleType is 'date'. */
	@Input()
	get value(): string | number | Date {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: string | number | Date) {
		this.nativeElement ? this.nativeElement.value = value : undefined;
	}

	/** @description Sets or gets the word length. Applicable only when scaleType is 'integer'. */
	@Input()
	get wordLength(): WordLength {
		return this.nativeElement ? this.nativeElement.wordLength : undefined;
	}
	set wordLength(value: WordLength) {
		this.nativeElement ? this.nativeElement.wordLength = value : undefined;
	}

	/** @description This event is triggered when the value of the element is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
	*   oldValue - The previous value of the element.
	*   value - The new value of the element.
	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Focuses the element. 
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

	/** @description Gets the optimal size of the element (the current width and the height based on the plotted internal elements).  
	* @returns {any}
  */
	public async getOptimalSize(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getOptimalSize();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Get/set the value of the gauge. 
	* @param {string | number | Date} value?. The value to be set. If no parameter is passed, returns the current value of the gauge. The value can be a date only when <b>scaleType</b> is 'date'.
	* @returns {string}
  */
	public async val(value?): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.val(value);
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
                    setTimeout(() => { that.eventHandlers['changeModelHandler'](event); }, 50);
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
