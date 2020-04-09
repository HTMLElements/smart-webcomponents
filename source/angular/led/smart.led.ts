import { Led } from './../index';
import { Animation, ClickMode, LedShape, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, ClickMode, LedShape, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Led } from './../index';


@Directive({
	selector: 'smart-led, [smart-led]'
})

export class LedComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<Led>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Led;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Led;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Led>document.createElement('smart-led');
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

	/** @description Sets or gets the check state. */
	@Input()
	get checked(): boolean {
		return this.nativeElement ? this.nativeElement.checked : undefined;
	}
	set checked(value: boolean) {
		this.nativeElement ? this.nativeElement.checked = value : undefined;
	}

	/** @description Determines when the element fires a click event. */
	@Input()
	get clickMode(): ClickMode {
		return this.nativeElement ? this.nativeElement.clickMode : undefined;
	}
	set clickMode(value: ClickMode) {
		this.nativeElement ? this.nativeElement.clickMode = value : undefined;
	}

	/** @description Enables or disables the LED. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Sets the content for the 'false' state. */
	@Input()
	get falseContent(): string {
		return this.nativeElement ? this.nativeElement.falseContent : undefined;
	}
	set falseContent(value: string) {
		this.nativeElement ? this.nativeElement.falseContent = value : undefined;
	}

	/** @description Sets custom template for LED's false state. */
	@Input()
	get falseTemplate(): any {
		return this.nativeElement ? this.nativeElement.falseTemplate : undefined;
	}
	set falseTemplate(value: any) {
		this.nativeElement ? this.nativeElement.falseTemplate = value : undefined;
	}

	/** @description Sets the LED to indeterminate state. */
	@Input()
	get indeterminate(): boolean {
		return this.nativeElement ? this.nativeElement.indeterminate : undefined;
	}
	set indeterminate(value: boolean) {
		this.nativeElement ? this.nativeElement.indeterminate = value : undefined;
	}

	/** @description Sets the content for the 'null' state. */
	@Input()
	get indeterminateContent(): string {
		return this.nativeElement ? this.nativeElement.indeterminateContent : undefined;
	}
	set indeterminateContent(value: string) {
		this.nativeElement ? this.nativeElement.indeterminateContent = value : undefined;
	}

	/** @description Sets a custom template for LED's indeterminate state. */
	@Input()
	get indeterminateTemplate(): any {
		return this.nativeElement ? this.nativeElement.indeterminateTemplate : undefined;
	}
	set indeterminateTemplate(value: any) {
		this.nativeElement ? this.nativeElement.indeterminateTemplate = value : undefined;
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

	/** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
	@Input()
	get name(): string {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		this.nativeElement ? this.nativeElement.name = value : undefined;
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

	/** @description Sets the shape of LED. */
	@Input()
	get shape(): LedShape {
		return this.nativeElement ? this.nativeElement.shape : undefined;
	}
	set shape(value: LedShape) {
		this.nativeElement ? this.nativeElement.shape = value : undefined;
	}

	/** @description Determines the theme. Theme defines the look of the element */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description Sets the content for the 'true' state. */
	@Input()
	get trueContent(): string {
		return this.nativeElement ? this.nativeElement.trueContent : undefined;
	}
	set trueContent(value: string) {
		this.nativeElement ? this.nativeElement.trueContent = value : undefined;
	}

	/** @description Sets custom template for LED's true state. */
	@Input()
	get trueTemplate(): any {
		return this.nativeElement ? this.nativeElement.trueTemplate : undefined;
	}
	set trueTemplate(value: any) {
		this.nativeElement ? this.nativeElement.trueTemplate = value : undefined;
	}

	/** @description If is set to true, the element cannot be focused. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
	}

	/** @description Sets or gets the element's value. */
	@Input()
	get value(): string {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: string) {
		this.nativeElement ? this.nativeElement.value = value : undefined;
	}

	/** @description This event is triggered when the widget is checked/unchecked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
	*   oldValue - The previous value of the element before it was changed.
	*   value - The new value of the element.
	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();


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
