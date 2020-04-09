import { PasswordTextBox } from './../index';
import { Animation, EnterKeyBehavior, PasswordTextBoxTooltipPosition, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, forwardRef, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, EnterKeyBehavior, PasswordTextBoxTooltipPosition, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { PasswordTextBox } from './../index';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';



const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PasswordTextBoxComponent),
    multi: true
}

@Directive({
	selector: 'smart-password-text-box, [smart-password-text-box]',
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]

})

export class PasswordTextBoxComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
	constructor(ref: ElementRef<PasswordTextBox>) {
		super(ref);
		this.nativeElement = ref.nativeElement as PasswordTextBox;
	}

	private eventHandlers: any[] = [];

	public nativeElement: PasswordTextBox;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <PasswordTextBox>document.createElement('smart-password-text-box');
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

	/** @description Specifies that the element should be focused when the page is loaded. */
	@Input()
	get autoFocus(): boolean {
		return this.nativeElement ? this.nativeElement.autoFocus : undefined;
	}
	set autoFocus(value: boolean) {
		this.nativeElement ? this.nativeElement.autoFocus = value : undefined;
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

	/** @description The form that the element is associated with (its "form owner"). The value of the attribute must be the ID of a form element in the same document. */
	@Input()
	get form(): string {
		return this.nativeElement ? this.nativeElement.form : undefined;
	}
	set form(value: string) {
		this.nativeElement ? this.nativeElement.form = value : undefined;
	}

	/** @description Sets additional helper text below the element. Appears only when the element is focused. */
	@Input()
	get hint(): any {
		return this.nativeElement ? this.nativeElement.hint : undefined;
	}
	set hint(value: any) {
		this.nativeElement ? this.nativeElement.hint = value : undefined;
	}

	/** @description Sets label above the element. The label is displayed above the input and it's always visible. */
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

	/** @description Sets or gets the maximum number of characters that the user can enter. */
	@Input()
	get maxLength(): number {
		return this.nativeElement ? this.nativeElement.maxLength : undefined;
	}
	set maxLength(value: number) {
		this.nativeElement ? this.nativeElement.maxLength = value : undefined;
	}

	/** @description Sets an object with string values, related to the different states of passwords strength. */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Sets or gets the minimum number of characters that the user can enter. */
	@Input()
	get minLength(): number {
		return this.nativeElement ? this.nativeElement.minLength : undefined;
	}
	set minLength(value: number) {
		this.nativeElement ? this.nativeElement.minLength = value : undefined;
	}

	/** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
	@Input()
	get name(): string {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		this.nativeElement ? this.nativeElement.name = value : undefined;
	}

	/** @description With this property the user can set a custom callback function that determines the password strength. The returned string from the function determines the how strong the current password is. The string should be one of the following: 'short', 'weak', 'far', 'good', 'strong'. */
	@Input()
	get passwordStrength(): any {
		return this.nativeElement ? this.nativeElement.passwordStrength : undefined;
	}
	set passwordStrength(value: any) {
		this.nativeElement ? this.nativeElement.passwordStrength = value : undefined;
	}

	/** @description The placeholder text that is displayed when no value is applied to the element.  */
	@Input()
	get placeholder(): string {
		return this.nativeElement ? this.nativeElement.placeholder : undefined;
	}
	set placeholder(value: string) {
		this.nativeElement ? this.nativeElement.placeholder = value : undefined;
	}

	/** @description Specifies that the user must fill in a value before submitting a form that contains the element. */
	@Input()
	get required(): boolean {
		return this.nativeElement ? this.nativeElement.required : undefined;
	}
	set required(value: boolean) {
		this.nativeElement ? this.nativeElement.required = value : undefined;
	}

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description Specifies whether the content of the input will be selected on focus. */
	@Input()
	get selectAllOnFocus(): boolean {
		return this.nativeElement ? this.nativeElement.selectAllOnFocus : undefined;
	}
	set selectAllOnFocus(value: boolean) {
		this.nativeElement ? this.nativeElement.selectAllOnFocus = value : undefined;
	}

	/** @description Determines whether the password icon is visible. */
	@Input()
	get showPasswordIcon(): boolean {
		return this.nativeElement ? this.nativeElement.showPasswordIcon : undefined;
	}
	set showPasswordIcon(value: boolean) {
		this.nativeElement ? this.nativeElement.showPasswordIcon = value : undefined;
	}

	/** @description Determines whether a tooltip which shows the password's strength will be shown. */
	@Input()
	get showPasswordStrength(): boolean {
		return this.nativeElement ? this.nativeElement.showPasswordStrength : undefined;
	}
	set showPasswordStrength(value: boolean) {
		this.nativeElement ? this.nativeElement.showPasswordStrength = value : undefined;
	}

	/** @description Determines the theme. Theme defines the look of the element */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description Determines whether Tooltip's arrow will be shown or not. */
	@Input()
	get tooltipArrow(): boolean {
		return this.nativeElement ? this.nativeElement.tooltipArrow : undefined;
	}
	set tooltipArrow(value: boolean) {
		this.nativeElement ? this.nativeElement.tooltipArrow = value : undefined;
	}

	/** @description Determines the delay before the tooltip appears in miliseconds. */
	@Input()
	get tooltipDelay(): number {
		return this.nativeElement ? this.nativeElement.tooltipDelay : undefined;
	}
	set tooltipDelay(value: number) {
		this.nativeElement ? this.nativeElement.tooltipDelay = value : undefined;
	}

	/** @description Determines the position of the tooltip. */
	@Input()
	get tooltipPosition(): PasswordTextBoxTooltipPosition {
		return this.nativeElement ? this.nativeElement.tooltipPosition : undefined;
	}
	set tooltipPosition(value: PasswordTextBoxTooltipPosition) {
		this.nativeElement ? this.nativeElement.tooltipPosition = value : undefined;
	}

	/** @description Sets a custom template for the content of the tooltip. */
	@Input()
	get tooltipTemplate(): string {
		return this.nativeElement ? this.nativeElement.tooltipTemplate : undefined;
	}
	set tooltipTemplate(value: string) {
		this.nativeElement ? this.nativeElement.tooltipTemplate = value : undefined;
	}

	/** @description If true, the element cannot be focused. */
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

	/** @description This event is triggered when the value of the element is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
	*   oldValue - The previous value of the element before it was changed.
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

	/** @description The method is used to reset input to it's initial value.  
	*/
    public reset(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.reset();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.reset();
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
