import { MultilineTextBox } from './../index';
import { Animation, MultilineTextBoxAutoCapitalize, AutoComplete, TextBoxDisplayMode, MultilineTextBoxEnterKeyBehavior, HorizontalScrollBarVisibility, VerticalScrollBarVisibility, MultilineTextBoxWrap, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, forwardRef, ChangeDetectionStrategy, Output, EventEmitter, QueryList, ContentChildren } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, MultilineTextBoxAutoCapitalize, AutoComplete, TextBoxDisplayMode, MultilineTextBoxEnterKeyBehavior, HorizontalScrollBarVisibility, VerticalScrollBarVisibility, MultilineTextBoxWrap, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { MultilineTextBox } from './../index';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';



import { ListItemComponent } from './smart.listitem';

import { ListItemsGroupComponent } from './smart.listitemsgroup';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MultilineTextBoxComponent),
    multi: true
}

@Directive({
	selector: 'smart-multiline-text-box, [smart-multiline-text-box]',
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]

})

export class MultilineTextBoxComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {

	constructor(ref: ElementRef<MultilineTextBox>) {
		super(ref);
		this.nativeElement = ref.nativeElement as MultilineTextBox;
	}

	private eventHandlers: any[] = [];

	public nativeElement: MultilineTextBox;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <MultilineTextBox>document.createElement('smart-multiline-text-box');
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

	/** @description Determines whether and how the value should be automatically capitalized as it is entered/edited by the user. */
	@Input()
	get autoCapitalize(): MultilineTextBoxAutoCapitalize {
		return this.nativeElement ? this.nativeElement.autoCapitalize : undefined;
	}
	set autoCapitalize(value: MultilineTextBoxAutoCapitalize) {
		this.nativeElement ? this.nativeElement.autoCapitalize = value : undefined;
	}

	/** @description Determines whether the value of the control can be automatically completed by the browser. */
	@Input()
	get autoComplete(): AutoComplete {
		return this.nativeElement ? this.nativeElement.autoComplete : undefined;
	}
	set autoComplete(value: AutoComplete) {
		this.nativeElement ? this.nativeElement.autoComplete = value : undefined;
	}

	/** @description Determines whether element will auto expand when the input overflows vertically. */
	@Input()
	get autoExpand(): boolean {
		return this.nativeElement ? this.nativeElement.autoExpand : undefined;
	}
	set autoExpand(value: boolean) {
		this.nativeElement ? this.nativeElement.autoExpand = value : undefined;
	}

	/** @description Determines whether the input should be focused when the page is loaded. */
	@Input()
	get autoFocus(): boolean {
		return this.nativeElement ? this.nativeElement.autoFocus : undefined;
	}
	set autoFocus(value: boolean) {
		this.nativeElement ? this.nativeElement.autoFocus = value : undefined;
	}

	/** @description The cols attribute specifies the visible width of a input. If it is specified, it must be a positive integer. If it is not specified, the default value is 20. */
	@Input()
	get cols(): number {
		return this.nativeElement ? this.nativeElement.cols : undefined;
	}
	set cols(value: number) {
		this.nativeElement ? this.nativeElement.cols = value : undefined;
	}

	/** @description Enables or disables the element. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Specifies how the characters are displayed inside the input. */
	@Input()
	get displayMode(): TextBoxDisplayMode {
		return this.nativeElement ? this.nativeElement.displayMode : undefined;
	}
	set displayMode(value: TextBoxDisplayMode) {
		this.nativeElement ? this.nativeElement.displayMode = value : undefined;
	}

	/** @description Determines the behavior on "Enter" key. */
	@Input()
	get enterKeyBehavior(): MultilineTextBoxEnterKeyBehavior {
		return this.nativeElement ? this.nativeElement.enterKeyBehavior : undefined;
	}
	set enterKeyBehavior(value: MultilineTextBoxEnterKeyBehavior) {
		this.nativeElement ? this.nativeElement.enterKeyBehavior = value : undefined;
	}

	/** @description The form element that the element is associated with (its "form owner"). The value of the attribute must be the ID of a form element in the same document. */
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

	/** @description Controls horizontal scrollbar's visibility.  */
	@Input()
	get horizontalScrollBarVisibility(): HorizontalScrollBarVisibility {
		return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
	}
	set horizontalScrollBarVisibility(value: HorizontalScrollBarVisibility) {
		this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility = value : undefined;
	}

	/** @description Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc. */
	@Input()
	get inputPurpose(): string {
		return this.nativeElement ? this.nativeElement.inputPurpose : undefined;
	}
	set inputPurpose(value: string) {
		this.nativeElement ? this.nativeElement.inputPurpose = value : undefined;
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

	/** @description Sets or gets the minimum number of characters that the user can enter. */
	@Input()
	get minLength(): number {
		return this.nativeElement ? this.nativeElement.minLength : undefined;
	}
	set minLength(value: number) {
		this.nativeElement ? this.nativeElement.minLength = value : undefined;
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

	/** @description The placeholder text that is displayed when no value is applied to the element.  */
	@Input()
	get placeholder(): string {
		return this.nativeElement ? this.nativeElement.placeholder : undefined;
	}
	set placeholder(value: string) {
		this.nativeElement ? this.nativeElement.placeholder = value : undefined;
	}

	/** @description If enabled the users cannot iteract with the element. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description Specifies that the user must fill in a value before submitting a form that contains the element. */
	@Input()
	get required(): boolean {
		return this.nativeElement ? this.nativeElement.required : undefined;
	}
	set required(value: boolean) {
		this.nativeElement ? this.nativeElement.required = value : undefined;
	}

	/** @description Enables/ disables the resizing of the element. If enabled a resizing indicator appears in the bottom corner of the input area. */
	@Input()
	get resizable(): boolean {
		return this.nativeElement ? this.nativeElement.resizable : undefined;
	}
	set resizable(value: boolean) {
		this.nativeElement ? this.nativeElement.resizable = value : undefined;
	}

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description The number of visible text lines for the control. */
	@Input()
	get rows(): number {
		return this.nativeElement ? this.nativeElement.rows : undefined;
	}
	set rows(value: number) {
		this.nativeElement ? this.nativeElement.rows = value : undefined;
	}

	/** @description Specifies whether the content of the input will be selected on focus. */
	@Input()
	get selectAllOnFocus(): boolean {
		return this.nativeElement ? this.nativeElement.selectAllOnFocus : undefined;
	}
	set selectAllOnFocus(value: boolean) {
		this.nativeElement ? this.nativeElement.selectAllOnFocus = value : undefined;
	}

	/** @description Indicates the index of the last character in the current selection. */
	@Input()
	get selectionEnd(): number {
		return this.nativeElement ? this.nativeElement.selectionEnd : undefined;
	}
	set selectionEnd(value: number) {
		this.nativeElement ? this.nativeElement.selectionEnd = value : undefined;
	}

	/** @description Indicates the index to the first character in the current selection. */
	@Input()
	get selectionStart(): number {
		return this.nativeElement ? this.nativeElement.selectionStart : undefined;
	}
	set selectionStart(value: number) {
		this.nativeElement ? this.nativeElement.selectionStart = value : undefined;
	}

	/** @description Specifies whether the element is to have its spelling and grammar checked or not. */
	@Input()
	get spellCheck(): boolean {
		return this.nativeElement ? this.nativeElement.spellCheck : undefined;
	}
	set spellCheck(value: boolean) {
		this.nativeElement ? this.nativeElement.spellCheck = value : undefined;
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

	/** @description Sets or gets the value of the element. */
	@Input()
	get value(): string {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: string) {
		this.nativeElement ? this.nativeElement.value = value : undefined;
	}

	/** @description Controls vertical scrollbar's visibility.  */
	@Input()
	get verticalScrollBarVisibility(): VerticalScrollBarVisibility {
		return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
	}
	set verticalScrollBarVisibility(value: VerticalScrollBarVisibility) {
		this.nativeElement ? this.nativeElement.verticalScrollBarVisibility = value : undefined;
	}

	/** @description Indicates how the control wraps text. */
	@Input()
	get wrap(): MultilineTextBoxWrap {
		return this.nativeElement ? this.nativeElement.wrap : undefined;
	}
	set wrap(value: MultilineTextBoxWrap) {
		this.nativeElement ? this.nativeElement.wrap = value : undefined;
	}

	/** @description This event is triggered when the value of the text box is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value, 	type)
	*   oldValue - The previous value of the element before it was changed.
	*   value - The new value of the element.
	*   type - Indicates when the element was called, e.g. on blur or submit.
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

	/** @description The method is used to reset the value of the element box to it's initial state. 
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

	/** @description Returns the currenctly selected text. 
	* @param {string} displayMode. If <b>displayMode</b> is set to 'escaped', the value returned from the method contains escaped special characters.
	* @returns {string}
  */
	public async selection(displayMode): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.selection(displayMode);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Selects a certain part of the input text. If no arguments are specified the whole text will be selected. 
	* @param {any} rangeFrom?. Determines the start index of the text selection.
	* @param {any} rangeTo?. Determines the end index of the text selection.
	*/
    public select(rangeFrom?: any, rangeTo?: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(rangeFrom, rangeTo);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(rangeFrom, rangeTo);
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
