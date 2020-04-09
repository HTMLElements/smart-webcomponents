import { MaskedTextBox } from './../index';
import { Animation, MaskedTextBoxCutCopyMaskFormat, EnterKeyBehavior, MaskedTextBoxTextMaskFormat, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, forwardRef, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, MaskedTextBoxCutCopyMaskFormat, EnterKeyBehavior, MaskedTextBoxTextMaskFormat, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { MaskedTextBox } from './../index';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';



const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MaskedTextBoxComponent),
    multi: true
}

@Directive({
	selector: 'smart-masked-text-box, [smart-masked-text-box]',
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]

})

export class MaskedTextBoxComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
	constructor(ref: ElementRef<MaskedTextBox>) {
		super(ref);
		this.nativeElement = ref.nativeElement as MaskedTextBox;
	}

	private eventHandlers: any[] = [];

	public nativeElement: MaskedTextBox;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <MaskedTextBox>document.createElement('smart-masked-text-box');
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

	/** @description Determines whether promptChar can be entered as valid input by the user. */
	@Input()
	get allowPromptAsInput(): boolean {
		return this.nativeElement ? this.nativeElement.allowPromptAsInput : undefined;
	}
	set allowPromptAsInput(value: boolean) {
		this.nativeElement ? this.nativeElement.allowPromptAsInput = value : undefined;
	}

	/** @description Determines whether the input accepts characters only from the ASCII character set. */
	@Input()
	get asciiOnly(): boolean {
		return this.nativeElement ? this.nativeElement.asciiOnly : undefined;
	}
	set asciiOnly(value: boolean) {
		this.nativeElement ? this.nativeElement.asciiOnly = value : undefined;
	}

	/** @description Specifies whether the input should be focused when the page is loaded. */
	@Input()
	get autoFocus(): boolean {
		return this.nativeElement ? this.nativeElement.autoFocus : undefined;
	}
	set autoFocus(value: boolean) {
		this.nativeElement ? this.nativeElement.autoFocus = value : undefined;
	}

	/** @description Determines whether the mask is shown/hidden on focus/blur even if placeholder is not set. */
	@Input()
	get autoShowMask(): boolean {
		return this.nativeElement ? this.nativeElement.autoShowMask : undefined;
	}
	set autoShowMask(value: boolean) {
		this.nativeElement ? this.nativeElement.autoShowMask = value : undefined;
	}

	/** @description Determines whether literals and prompt characters are copied to the clipboard on cut/copy operations. */
	@Input()
	get cutCopyMaskFormat(): MaskedTextBoxCutCopyMaskFormat {
		return this.nativeElement ? this.nativeElement.cutCopyMaskFormat : undefined;
	}
	set cutCopyMaskFormat(value: MaskedTextBoxCutCopyMaskFormat) {
		this.nativeElement ? this.nativeElement.cutCopyMaskFormat = value : undefined;
	}

	/** @description Enables or disables the element. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Specifies the behavior on "Enter" key press. Default mode is "submit". */
	@Input()
	get enterKeyBehavior(): EnterKeyBehavior {
		return this.nativeElement ? this.nativeElement.enterKeyBehavior : undefined;
	}
	set enterKeyBehavior(value: EnterKeyBehavior) {
		this.nativeElement ? this.nativeElement.enterKeyBehavior = value : undefined;
	}

	/** @description Determines whether the prompt character in the input mask is hidden when the masked text box isn't focused anymore. */
	@Input()
	get hidePromptOnLeave(): boolean {
		return this.nativeElement ? this.nativeElement.hidePromptOnLeave : undefined;
	}
	set hidePromptOnLeave(value: boolean) {
		this.nativeElement ? this.nativeElement.hidePromptOnLeave = value : undefined;
	}

	/** @description Sets additional helper text below the element. The hint is visible only when the element is focused. */
	@Input()
	get hint(): string {
		return this.nativeElement ? this.nativeElement.hint : undefined;
	}
	set hint(value: string) {
		this.nativeElement ? this.nativeElement.hint = value : undefined;
	}

	/** @description Determines whether new user input overwrites the existing input value or not. */
	@Input()
	get isOverwriteMode(): boolean {
		return this.nativeElement ? this.nativeElement.isOverwriteMode : undefined;
	}
	set isOverwriteMode(value: boolean) {
		this.nativeElement ? this.nativeElement.isOverwriteMode = value : undefined;
	}

	/** @description Sets label above the element. The label is always visible. */
	@Input()
	get label(): string {
		return this.nativeElement ? this.nativeElement.label : undefined;
	}
	set label(value: string) {
		this.nativeElement ? this.nativeElement.label = value : undefined;
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

	/** @description Defines the mask for the input. */
	@Input()
	get mask(): string {
		return this.nativeElement ? this.nativeElement.mask : undefined;
	}
	set mask(value: string) {
		this.nativeElement ? this.nativeElement.mask = value : undefined;
	}

	/** @description Indicates whether all required fields of the mask have been populated or not. */
	@Input()
	get maskCompleted(): boolean {
		return this.nativeElement ? this.nativeElement.maskCompleted : undefined;
	}
	set maskCompleted(value: boolean) {
		this.nativeElement ? this.nativeElement.maskCompleted = value : undefined;
	}

	/** @description Indicates whether all required and optional fields of the mask have been populated or not. */
	@Input()
	get maskFull(): boolean {
		return this.nativeElement ? this.nativeElement.maskFull : undefined;
	}
	set maskFull(value: boolean) {
		this.nativeElement ? this.nativeElement.maskFull = value : undefined;
	}

	/** @description Determines the maximum number of characters that the user can enter. */
	@Input()
	get maxLength(): number {
		return this.nativeElement ? this.nativeElement.maxLength : undefined;
	}
	set maxLength(value: number) {
		this.nativeElement ? this.nativeElement.maxLength = value : undefined;
	}

	/** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
	@Input()
	get name(): string {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		this.nativeElement ? this.nativeElement.name = value : undefined;
	}

	/** @description A string that appears inside the input when there's no value and mask.  */
	@Input()
	get placeholder(): string {
		return this.nativeElement ? this.nativeElement.placeholder : undefined;
	}
	set placeholder(value: string) {
		this.nativeElement ? this.nativeElement.placeholder = value : undefined;
	}

	/** @description Determines the prompt char that is used for the mask of the element. */
	@Input()
	get promptChar(): string {
		return this.nativeElement ? this.nativeElement.promptChar : undefined;
	}
	set promptChar(value: string) {
		this.nativeElement ? this.nativeElement.promptChar = value : undefined;
	}

	/** @description If the element is readonly, the users cannot iteract with the element. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description Determines whether the parsing of user input should stop after the first invalid character or not. */
	@Input()
	get rejectInputOnFirstFailure(): boolean {
		return this.nativeElement ? this.nativeElement.rejectInputOnFirstFailure : undefined;
	}
	set rejectInputOnFirstFailure(value: boolean) {
		this.nativeElement ? this.nativeElement.rejectInputOnFirstFailure = value : undefined;
	}

	/** @description Specifies that the input must be filled in before submitting a form */
	@Input()
	get required(): boolean {
		return this.nativeElement ? this.nativeElement.required : undefined;
	}
	set required(value: boolean) {
		this.nativeElement ? this.nativeElement.required = value : undefined;
	}

	/** @description Determines whether an input character that matches the prompt character should reset the current selected value in the input or not. Applicable only when allowPromptAsInput is enabled. */
	@Input()
	get resetOnPrompt(): boolean {
		return this.nativeElement ? this.nativeElement.resetOnPrompt : undefined;
	}
	set resetOnPrompt(value: boolean) {
		this.nativeElement ? this.nativeElement.resetOnPrompt = value : undefined;
	}

	/** @description Determines whether hitting space character resets the currently selected value from the input or not. */
	@Input()
	get resetOnSpace(): boolean {
		return this.nativeElement ? this.nativeElement.resetOnSpace : undefined;
	}
	set resetOnSpace(value: boolean) {
		this.nativeElement ? this.nativeElement.resetOnSpace = value : undefined;
	}

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description Specifies whether the value of the input will be selected on focus or not. */
	@Input()
	get selectAllOnFocus(): boolean {
		return this.nativeElement ? this.nativeElement.selectAllOnFocus : undefined;
	}
	set selectAllOnFocus(value: boolean) {
		this.nativeElement ? this.nativeElement.selectAllOnFocus = value : undefined;
	}

	/** @description Determines whether the value of the input should contain or not the prompt/literals of the mask. */
	@Input()
	get textMaskFormat(): MaskedTextBoxTextMaskFormat {
		return this.nativeElement ? this.nativeElement.textMaskFormat : undefined;
	}
	set textMaskFormat(value: MaskedTextBoxTextMaskFormat) {
		this.nativeElement ? this.nativeElement.textMaskFormat = value : undefined;
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

	/** @description Sets or gets the value of the element.  */
	@Input()
	get value(): string {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: string) {
		this.nativeElement ? this.nativeElement.value = value : undefined;
	}

	/** @description Callback function that allows to set custom validation on the value. If the function returns false then the value of the input is treated as not valid. */
	@Input()
	get validation(): any {
		return this.nativeElement ? this.nativeElement.validation : undefined;
	}
	set validation(value: any) {
		this.nativeElement ? this.nativeElement.validation = value : undefined;
	}

	/** @description This event is triggered when the value of the Text Box is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	newValue)
	*   oldValue - The previous value before it was changed.
	*   newValue - The new value.
	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered if the validation property is set. Indicates whether valiation has passed successfully or not.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	success)
	*   success - A flag inidicating whether the validation was successfull or not.
	*/
	@Output() onValidation: EventEmitter<CustomEvent> = new EventEmitter();

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

	/** @description Blurs the element.  
	*/
    public blur(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.blur();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.blur();
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

		that.eventHandlers['validationHandler'] = (event: CustomEvent) => { that.onValidation.emit(event); }
		that.nativeElement.addEventListener('validation', that.eventHandlers['validationHandler']);

		
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

		if (that.eventHandlers['validationHandler']) {
			that.nativeElement.removeEventListener('validation', that.eventHandlers['validationHandler']);
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
