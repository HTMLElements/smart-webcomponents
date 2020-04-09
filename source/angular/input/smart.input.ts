import { Input as InputEditor } from './../index';
import { Animation, DropDownButtonPosition, InputQueryMode, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, forwardRef, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, DropDownButtonPosition, InputQueryMode, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Input as InputEditor } from './../index';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';



const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
}

@Directive({
	selector: 'smart-input, [smart-input]',
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]

})

export class InputComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
	constructor(ref: ElementRef<InputEditor>) {
		super(ref);
		this.nativeElement = ref.nativeElement as InputEditor;
	}

	private eventHandlers: any[] = [];

	public nativeElement: InputEditor;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <InputEditor>document.createElement('smart-input');
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

	/** @description Determines the delay before the drop down opens to show the matches from the auto complete operation. The delay is measured in miliseconds. */
	@Input()
	get autoCompleteDelay(): number {
		return this.nativeElement ? this.nativeElement.autoCompleteDelay : undefined;
	}
	set autoCompleteDelay(value: number) {
		this.nativeElement ? this.nativeElement.autoCompleteDelay = value : undefined;
	}

	/** @description Determines the data source that will be loaded to the Input. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value. It can also be a callback that returns an Array of items as previously described. */
	@Input()
	get dataSource(): any {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Enables or disables the element. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Determines the position of the drop down button. */
	@Input()
	get dropDownButtonPosition(): DropDownButtonPosition {
		return this.nativeElement ? this.nativeElement.dropDownButtonPosition : undefined;
	}
	set dropDownButtonPosition(value: DropDownButtonPosition) {
		this.nativeElement ? this.nativeElement.dropDownButtonPosition = value : undefined;
	}

	/** @description Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable. */
	@Input()
	get dropDownHeight(): string | number {
		return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
	}
	set dropDownHeight(value: string | number) {
		this.nativeElement ? this.nativeElement.dropDownHeight = value : undefined;
	}

	/** @description Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable. */
	@Input()
	get dropDownWidth(): string | number {
		return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
	}
	set dropDownWidth(value: string | number) {
		this.nativeElement ? this.nativeElement.dropDownWidth = value : undefined;
	}

	/** @description Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc. */
	@Input()
	get inputPurpose(): string {
		return this.nativeElement ? this.nativeElement.inputPurpose : undefined;
	}
	set inputPurpose(value: string) {
		this.nativeElement ? this.nativeElement.inputPurpose = value : undefined;
	}

	/** @description Determines the maximum number of matched items that should be visible inside the drop down as a result of a new autoComplete query. By default the maximum number of 8 items can be displayed inside the drop down. */
	@Input()
	get items(): number {
		return this.nativeElement ? this.nativeElement.items : undefined;
	}
	set items(value: number) {
		this.nativeElement ? this.nativeElement.items = value : undefined;
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

	/** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Determines the minimum number of characters inside the input in order to trigger the autocomplete functionality that will open the drop down and show the matched items. */
	@Input()
	get minLength(): number {
		return this.nativeElement ? this.nativeElement.minLength : undefined;
	}
	set minLength(value: number) {
		this.nativeElement ? this.nativeElement.minLength = value : undefined;
	}

	/** @description Sets or gets the name attribute for the element. Name is used when submiting data inside an HTML form. */
	@Input()
	get name(): string {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		this.nativeElement ? this.nativeElement.name = value : undefined;
	}

	/** @description Determines whether the drop down is opened or not. */
	@Input()
	get opened(): boolean {
		return this.nativeElement ? this.nativeElement.opened : undefined;
	}
	set opened(value: boolean) {
		this.nativeElement ? this.nativeElement.opened = value : undefined;
	}

	/** @description Determines the placeholder of the input. */
	@Input()
	get placeholder(): string {
		return this.nativeElement ? this.nativeElement.placeholder : undefined;
	}
	set placeholder(value: string) {
		this.nativeElement ? this.nativeElement.placeholder = value : undefined;
	}

	/** @description Sets or gets the query that is used to filter the items. Query is used by the autoComplete operation. Empty string means that all items from the data source will be displayed and no filter query is applied. */
	@Input()
	get query(): string | number {
		return this.nativeElement ? this.nativeElement.query : undefined;
	}
	set query(value: string | number) {
		this.nativeElement ? this.nativeElement.query = value : undefined;
	}

	/** @description Determines the auto complete query mode. This property also determines the matching algorithm for the autocomplete operation. */
	@Input()
	get queryMode(): InputQueryMode {
		return this.nativeElement ? this.nativeElement.queryMode : undefined;
	}
	set queryMode(value: InputQueryMode) {
		this.nativeElement ? this.nativeElement.queryMode = value : undefined;
	}

	/** @description Determines whether ot not the user can enter text inside the input. if dropDownButtonPosition is set to 'left' or 'right' then readonly determines whether the element acts as a ComboBox or a DropDownList if a dataSource is provided. */
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

	/** @description Determines whether the items are sorted alphabetically or not */
	@Input()
	get sorted(): boolean {
		return this.nativeElement ? this.nativeElement.sorted : undefined;
	}
	set sorted(value: boolean) {
		this.nativeElement ? this.nativeElement.sorted = value : undefined;
	}

	/** @description Determines the sorting algorithm - ascending(asc) or descending(desc) if sort is enabled. */
	@Input()
	get sortDirection(): string {
		return this.nativeElement ? this.nativeElement.sortDirection : undefined;
	}
	set sortDirection(value: string) {
		this.nativeElement ? this.nativeElement.sortDirection = value : undefined;
	}

	/** @description Determines the theme for the element. Themes define the look of the elements. */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description Determines the input type. Input type determines what input can be entered. */
	@Input()
	get type(): string {
		return this.nativeElement ? this.nativeElement.type : undefined;
	}
	set type(value: string) {
		this.nativeElement ? this.nativeElement.type = value : undefined;
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

	/** @description This event is triggered when the selection is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	oldLabel, 	oldValue, 	value)
	*   label - The label of the new selected item.
	*   oldLabel - The label of the item that was previously selected before the event was triggered.
	*   oldValue - The value of the item that was previously selected before the event was triggered.
	*   value - The value of the new selected item.
	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Closes the drop down. 
	*/
    public close(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.close();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.close();
            });
        }
    }

	/** @description Ensures that the active ( selected ) item is always visible. 
	*/
    public ensureVisible(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.ensureVisible();
            });
        }
    }

	/** @description Opens the drop down. 
	*/
    public open(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.open();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.open();
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
