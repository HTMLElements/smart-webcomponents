import { Tank } from './../index';
import { Animation, LabelsVisibility, DragMechanicalAction, ScaleMode, Orientation, ScalePosition, ScaleType, Position, TicksPosition, TicksVisibility, Validation, WordLength, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, forwardRef, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, LabelsVisibility, DragMechanicalAction, ScaleMode, Orientation, ScalePosition, ScaleType, Position, TicksPosition, TicksVisibility, Validation, WordLength, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Tank } from './../index';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';



const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TankComponent),
    multi: true
}

@Directive({
	selector: 'smart-tank, [smart-tank]',
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]

})

export class TankComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
	constructor(ref: ElementRef<Tank>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Tank;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Tank;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Tank>document.createElement('smart-tank');
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

	/** @description If is set to true all values coerce to the interval, set in the interval property. */
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

	/** @description Sets or gets the pattern which labels are displayed in when mode is 'date'. */
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

	/** @description Enables or disables the widget.  */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description When cooerce property is true, all values coerce to the interval's value. */
	@Input()
	get interval(): any {
		return this.nativeElement ? this.nativeElement.interval : undefined;
	}
	set interval(value: any) {
		this.nativeElement ? this.nativeElement.interval = value : undefined;
	}

	/** @description Sets the direction of the tank. If is true - positions of the tank's begin and end are changed. */
	@Input()
	get inverted(): boolean {
		return this.nativeElement ? this.nativeElement.inverted : undefined;
	}
	set inverted(value: boolean) {
		this.nativeElement ? this.nativeElement.inverted = value : undefined;
	}

	/** @description A callback function that can be used to format the values displayed on the tank labels. */
	@Input()
	get labelFormatFunction(): any {
		return this.nativeElement ? this.nativeElement.labelFormatFunction : undefined;
	}
	set labelFormatFunction(value: any) {
		this.nativeElement ? this.nativeElement.labelFormatFunction = value : undefined;
	}

	/** @description Sets or gets the widget's label visibility */
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

	/** @description Callback, related to localization module.  */
	@Input()
	get localizeFormatFunction(): any {
		return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	}
	set localizeFormatFunction(value: any) {
		this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
	}

	/** @description Enables or disables the usage of logarithmic scale in the widget. */
	@Input()
	get logarithmicScale(): boolean {
		return this.nativeElement ? this.nativeElement.logarithmicScale : undefined;
	}
	set logarithmicScale(value: boolean) {
		this.nativeElement ? this.nativeElement.logarithmicScale = value : undefined;
	}

	/** @description Sets or gets the maximum value of the widget. */
	@Input()
	get max(): any {
		return this.nativeElement ? this.nativeElement.max : undefined;
	}
	set max(value: any) {
		this.nativeElement ? this.nativeElement.max = value : undefined;
	}

	/** @description Sets or gets the type of used mechanical action. */
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

	/** @description Sets or gets the minimum value of the widget.  */
	@Input()
	get min(): any {
		return this.nativeElement ? this.nativeElement.min : undefined;
	}
	set min(value: any) {
		this.nativeElement ? this.nativeElement.min = value : undefined;
	}

	/** @description Sets or gets whether the widget works with numbers or dates. */
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

	/** @description Sets the orientation of the widget */
	@Input()
	get orientation(): Orientation {
		return this.nativeElement ? this.nativeElement.orientation : undefined;
	}
	set orientation(value: Orientation) {
		this.nativeElement ? this.nativeElement.orientation = value : undefined;
	}

	/** @description Determines the number of digits after the decimal point. Applicable only when scaleType is 'integer'. */
	@Input()
	get precisionDigits(): number {
		return this.nativeElement ? this.nativeElement.precisionDigits : undefined;
	}
	set precisionDigits(value: number) {
		this.nativeElement ? this.nativeElement.precisionDigits = value : undefined;
	}

	/** @description If the widgets is readonly, the users cannot iteract with the element. */
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

	/** @description Sets the position of the widget's scales.  */
	@Input()
	get scalePosition(): ScalePosition {
		return this.nativeElement ? this.nativeElement.scalePosition : undefined;
	}
	set scalePosition(value: ScalePosition) {
		this.nativeElement ? this.nativeElement.scalePosition = value : undefined;
	}

	/** @description Sets the type of the tank's scale.  */
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

	/** @description Enables or disables displaying of the thumb label. */
	@Input()
	get showThumbLabel(): boolean {
		return this.nativeElement ? this.nativeElement.showThumbLabel : undefined;
	}
	set showThumbLabel(value: boolean) {
		this.nativeElement ? this.nativeElement.showThumbLabel = value : undefined;
	}

	/** @description Enables or disables displaying of the tooltip. */
	@Input()
	get showTooltip(): boolean {
		return this.nativeElement ? this.nativeElement.showTooltip : undefined;
	}
	set showTooltip(value: boolean) {
		this.nativeElement ? this.nativeElement.showTooltip = value : undefined;
	}

	/** @description Enables or disables displaying of the units. */
	@Input()
	get showUnit(): boolean {
		return this.nativeElement ? this.nativeElement.showUnit : undefined;
	}
	set showUnit(value: boolean) {
		this.nativeElement ? this.nativeElement.showUnit = value : undefined;
	}

	/** @description Determining how many significant digits are in a number. Applicable only when scaleType is 'integer'. */
	@Input()
	get significantDigits(): number {
		return this.nativeElement ? this.nativeElement.significantDigits : undefined;
	}
	set significantDigits(value: number) {
		this.nativeElement ? this.nativeElement.significantDigits = value : undefined;
	}

	/** @description Sets or gets the element's visual theme.  */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description Sets or gets the position of the thumb label. */
	@Input()
	get thumbLabelPosition(): Position {
		return this.nativeElement ? this.nativeElement.thumbLabelPosition : undefined;
	}
	set thumbLabelPosition(value: Position) {
		this.nativeElement ? this.nativeElement.thumbLabelPosition = value : undefined;
	}

	/** @description Sets or gets the position of the ticks in jqxTank widget. */
	@Input()
	get ticksPosition(): TicksPosition {
		return this.nativeElement ? this.nativeElement.ticksPosition : undefined;
	}
	set ticksPosition(value: TicksPosition) {
		this.nativeElement ? this.nativeElement.ticksPosition = value : undefined;
	}

	/** @description Sets or gets the visibility of the ticks. */
	@Input()
	get ticksVisibility(): TicksVisibility {
		return this.nativeElement ? this.nativeElement.ticksVisibility : undefined;
	}
	set ticksVisibility(value: TicksVisibility) {
		this.nativeElement ? this.nativeElement.ticksVisibility = value : undefined;
	}

	/** @description Sets or gets the position of the tooltip in jqxTank widget. */
	@Input()
	get tooltipPosition(): Position {
		return this.nativeElement ? this.nativeElement.tooltipPosition : undefined;
	}
	set tooltipPosition(value: Position) {
		this.nativeElement ? this.nativeElement.tooltipPosition = value : undefined;
	}

	/** @description Sets or gets if the element can be focused. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
	}

	/** @description Sets or gets the name of unit used in jqxTank widget. */
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

	/** @description Sets or gets the value of the jqxTank widget.  */
	@Input()
	get value(): any {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: any) {
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

	/** @description This event is triggered when the value of the tank is changed.
	*  @param event. The custom event. 	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Focuses the tank.  
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

	/** @description Gets the optimal size of the widget.  
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

	/** @description Get/set the value of the tank.  
	* @param {string | number} value?. The value to be set. If no parameter is passed, returns the displayed value of the tank. 
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
