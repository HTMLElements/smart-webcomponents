import { DateTimePicker } from './../index';
import { Animation, DropDownButtonPosition, CalendarMode, DayFormat, DateTimePickerDisplayKind, CalendarDisplayModeView, DateTimePickerDropDownDisplayMode, DropDownPosition, DateTimePickerEditMode, DateTimePickerSpinButtonsPosition, TooltipPosition, Validation, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, forwardRef, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, DropDownButtonPosition, CalendarMode, DayFormat, DateTimePickerDisplayKind, CalendarDisplayModeView, DateTimePickerDropDownDisplayMode, DropDownPosition, DateTimePickerEditMode, DateTimePickerSpinButtonsPosition, TooltipPosition, Validation, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { DateTimePicker } from './../index';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';



const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateTimePickerComponent),
    multi: true
}

@Directive({
	selector: 'smart-date-time-picker, [smart-date-time-picker]',
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]

})

export class DateTimePickerComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
	constructor(ref: ElementRef<DateTimePicker>) {
		super(ref);
		this.nativeElement = ref.nativeElement as DateTimePicker;
	}

	private eventHandlers: any[] = [];

	public nativeElement: DateTimePicker;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <DateTimePicker>document.createElement('smart-date-time-picker');
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

	/** @description Applies new animation settings to the calendar pop-up when it is enabled. Properties:startSpeed - Determines the initial speed of the animation.easeThreshold - Determines the point at which the animation starts to slow down - the "ease effect".step - Determines the step ( scrolling interval ) at which the animation will run. stepEaseSize - Coefficient that is used to calculated the new step once the threshold has been passed. resetThreshold - Determines the threshold for animation reset. When it's reached the animation will start over. */
	@Input()
	get animationSettings(): any {
		return this.nativeElement ? this.nativeElement.animationSettings : undefined;
	}
	set animationSettings(value: any) {
		this.nativeElement ? this.nativeElement.animationSettings = value : undefined;
	}

	/** @description Determines whether the calendar button pop-up will be closed automatically when date or time is selected through it. */
	@Input()
	get autoClose(): boolean {
		return this.nativeElement ? this.nativeElement.autoClose : undefined;
	}
	set autoClose(value: boolean) {
		this.nativeElement ? this.nativeElement.autoClose = value : undefined;
	}

	/** @description Determines the delay before the calendar pop-up is automatically closed. Applicable only when autoClose is set to true. */
	@Input()
	get autoCloseDelay(): boolean {
		return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
	}
	set autoCloseDelay(value: boolean) {
		this.nativeElement ? this.nativeElement.autoCloseDelay = value : undefined;
	}

	/** @description Determines whether the calendar button is visible or not. The calendar button is used to open the Calendar popup to select a date. */
	@Input()
	get calendarButton(): boolean {
		return this.nativeElement ? this.nativeElement.calendarButton : undefined;
	}
	set calendarButton(value: boolean) {
		this.nativeElement ? this.nativeElement.calendarButton = value : undefined;
	}

	/** @description Determines the position of the calendar button. */
	@Input()
	get calendarButtonPosition(): DropDownButtonPosition {
		return this.nativeElement ? this.nativeElement.calendarButtonPosition : undefined;
	}
	set calendarButtonPosition(value: DropDownButtonPosition) {
		this.nativeElement ? this.nativeElement.calendarButtonPosition = value : undefined;
	}

	/** @description Determines the header mode of the calendar pop-up. */
	@Input()
	get calendarMode(): CalendarMode {
		return this.nativeElement ? this.nativeElement.calendarMode : undefined;
	}
	set calendarMode(value: CalendarMode) {
		this.nativeElement ? this.nativeElement.calendarMode = value : undefined;
	}

	/** @description Sets or gets the format of calendar pop-up's day names. */
	@Input()
	get dayNameFormat(): DayFormat {
		return this.nativeElement ? this.nativeElement.dayNameFormat : undefined;
	}
	set dayNameFormat(value: DayFormat) {
		this.nativeElement ? this.nativeElement.dayNameFormat = value : undefined;
	}

	/** @description Enables or disables the element. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Disables auto navigation of the calendar pop-up when the user clicks on a date that's not from month in view. */
	@Input()
	get disableAutoNavigation(): boolean {
		return this.nativeElement ? this.nativeElement.disableAutoNavigation : undefined;
	}
	set disableAutoNavigation(value: boolean) {
		this.nativeElement ? this.nativeElement.disableAutoNavigation = value : undefined;
	}

	/** @description Determines the time zone to display the value in. */
	@Input()
	get displayKind(): DateTimePickerDisplayKind {
		return this.nativeElement ? this.nativeElement.displayKind : undefined;
	}
	set displayKind(value: DateTimePickerDisplayKind) {
		this.nativeElement ? this.nativeElement.displayKind = value : undefined;
	}

	/** @description Determines the type of the month/year view in the calendar pop-up when calendarMode is set to Default. */
	@Input()
	get displayModeView(): CalendarDisplayModeView {
		return this.nativeElement ? this.nativeElement.displayModeView : undefined;
	}
	set displayModeView(value: CalendarDisplayModeView) {
		this.nativeElement ? this.nativeElement.displayModeView = value : undefined;
	}

	/** @description Sets custom container to append the pop-up to. By default, it is in the DateTimePicker. The value of the property can be an HTML element or the id of an HTML element. */
	@Input()
	get dropDownAppendTo(): any {
		return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
	}
	set dropDownAppendTo(value: any) {
		this.nativeElement ? this.nativeElement.dropDownAppendTo = value : undefined;
	}

	/** @description Sets or gets the pop-up display mode (what components appear in it, and its behaviour). */
	@Input()
	get dropDownDisplayMode(): DateTimePickerDropDownDisplayMode {
		return this.nativeElement ? this.nativeElement.dropDownDisplayMode : undefined;
	}
	set dropDownDisplayMode(value: DateTimePickerDropDownDisplayMode) {
		this.nativeElement ? this.nativeElement.dropDownDisplayMode = value : undefined;
	}

	/** @description If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. */
	@Input()
	get dropDownOverlay(): boolean {
		return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
	}
	set dropDownOverlay(value: boolean) {
		this.nativeElement ? this.nativeElement.dropDownOverlay = value : undefined;
	}

	/** @description Determines the pop-up position when opened. */
	@Input()
	get dropDownPosition(): DropDownPosition {
		return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
	}
	set dropDownPosition(value: DropDownPosition) {
		this.nativeElement ? this.nativeElement.dropDownPosition = value : undefined;
	}

	/** @description Determines how the the value can be edited inside the input. */
	@Input()
	get editMode(): DateTimePickerEditMode {
		return this.nativeElement ? this.nativeElement.editMode : undefined;
	}
	set editMode(value: DateTimePickerEditMode) {
		this.nativeElement ? this.nativeElement.editMode = value : undefined;
	}

	/** @description Determines whether the value can be incremented/decremented with the mouse wheel when the mouse is over the input. */
	@Input()
	get enableMouseWheelAction(): boolean {
		return this.nativeElement ? this.nativeElement.enableMouseWheelAction : undefined;
	}
	set enableMouseWheelAction(value: boolean) {
		this.nativeElement ? this.nativeElement.enableMouseWheelAction = value : undefined;
	}

	/** @description Determines the first day of the week of the calendar pop-up. From 0(Sunday) to 6(Saturday) */
	@Input()
	get firstDayOfWeek(): number {
		return this.nativeElement ? this.nativeElement.firstDayOfWeek : undefined;
	}
	set firstDayOfWeek(value: number) {
		this.nativeElement ? this.nativeElement.firstDayOfWeek = value : undefined;
	}

	/** @description Sets or gets the footer template of the calendar pop-up. The value of this property can be the id of an HTMLTemplateElement or the HTMLTemplateElement itself. If set to null, a default template is applied. */
	@Input()
	get footerTemplate(): any {
		return this.nativeElement ? this.nativeElement.footerTemplate : undefined;
	}
	set footerTemplate(value: any) {
		this.nativeElement ? this.nativeElement.footerTemplate = value : undefined;
	}

	/** @description Determines the pattern that is used to display the value in. */
	@Input()
	get formatString(): string {
		return this.nativeElement ? this.nativeElement.formatString : undefined;
	}
	set formatString(value: string) {
		this.nativeElement ? this.nativeElement.formatString = value : undefined;
	}

	/** @description Sets custom header template for the calendar pop-up. Accepts the id of an HTMLTemplateElement or a reference ot it. */
	@Input()
	get headerTemplate(): any {
		return this.nativeElement ? this.nativeElement.headerTemplate : undefined;
	}
	set headerTemplate(value: any) {
		this.nativeElement ? this.nativeElement.headerTemplate = value : undefined;
	}

	/** @description Hides the names of the weekdays in the calendar pop-up. */
	@Input()
	get hideDayNames(): boolean {
		return this.nativeElement ? this.nativeElement.hideDayNames : undefined;
	}
	set hideDayNames(value: boolean) {
		this.nativeElement ? this.nativeElement.hideDayNames = value : undefined;
	}

	/** @description Determines if dates from other months are visible or not in the calendar pop-up. */
	@Input()
	get hideOtherMonthDays(): boolean {
		return this.nativeElement ? this.nativeElement.hideOtherMonthDays : undefined;
	}
	set hideOtherMonthDays(value: boolean) {
		this.nativeElement ? this.nativeElement.hideOtherMonthDays = value : undefined;
	}

	/** @description Hides the arrow of the tooltip in the calendar pop-up. */
	@Input()
	get hideTooltipArrow(): boolean {
		return this.nativeElement ? this.nativeElement.hideTooltipArrow : undefined;
	}
	set hideTooltipArrow(value: boolean) {
		this.nativeElement ? this.nativeElement.hideTooltipArrow = value : undefined;
	}

	/** @description Sets additional helper text below the element that appears only when the element is focused. */
	@Input()
	get hint(): string {
		return this.nativeElement ? this.nativeElement.hint : undefined;
	}
	set hint(value: string) {
		this.nativeElement ? this.nativeElement.hint = value : undefined;
	}

	/** @description Sets dates, displayed as important in the calendar pop-up. */
	@Input()
	get importantDates(): string[] {
		return this.nativeElement ? this.nativeElement.importantDates : undefined;
	}
	set importantDates(value: string[]) {
		this.nativeElement ? this.nativeElement.importantDates = value : undefined;
	}

	/** @description Sets a template for the important dates of the calendar pop-up. Accepts the id of or a reference to an HTMLTemplateElement. */
	@Input()
	get importantDatesTemplate(): string | HTMLTemplateElement {
		return this.nativeElement ? this.nativeElement.importantDatesTemplate : undefined;
	}
	set importantDatesTemplate(value: string | HTMLTemplateElement) {
		this.nativeElement ? this.nativeElement.importantDatesTemplate = value : undefined;
	}

	/** @description Sets or gets the increment/decrement interval when a date/time segment inside the input has not been highlighted. The default interval is 1 second. If a numeric value is passed, it represents milliseconds. */
	@Input()
	get interval(): any {
		return this.nativeElement ? this.nativeElement.interval : undefined;
	}
	set interval(value: any) {
		this.nativeElement ? this.nativeElement.interval = value : undefined;
	}

	/** @description Sets a label above the element. */
	@Input()
	get label(): string {
		return this.nativeElement ? this.nativeElement.label : undefined;
	}
	set label(value: string) {
		this.nativeElement ? this.nativeElement.label = value : undefined;
	}

	/** @description Sets or gets the locale that determines what language is used to localize the labels inside the DateTimePicker. */
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

	/** @description Sets or gets the maximum allowed value. */
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

	/** @description Sets or gets the minimum allowed value. */
	@Input()
	get min(): any {
		return this.nativeElement ? this.nativeElement.min : undefined;
	}
	set min(value: any) {
		this.nativeElement ? this.nativeElement.min = value : undefined;
	}

	/** @description Sets or gets the element's name, which is used as a reference when the data is submitted in a form. */
	@Input()
	get name(): string {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		this.nativeElement ? this.nativeElement.name = value : undefined;
	}

	/** @description Enables or disables the setting of the value property to be null or empty string. If the property is enabled and the value in the input is deleted, the value will be set to null and the placeholder will be displayed. Otherwise, the current date and time will be set. */
	@Input()
	get nullable(): boolean {
		return this.nativeElement ? this.nativeElement.nullable : undefined;
	}
	set nullable(value: boolean) {
		this.nativeElement ? this.nativeElement.nullable = value : undefined;
	}

	/** @description Sets or gets whether the calendar pop-up is opened. */
	@Input()
	get opened(): boolean {
		return this.nativeElement ? this.nativeElement.opened : undefined;
	}
	set opened(value: boolean) {
		this.nativeElement ? this.nativeElement.opened = value : undefined;
	}

	/** @description Sets or gets the placeholder text to be shown in the input when value is null. */
	@Input()
	get placeholder(): string {
		return this.nativeElement ? this.nativeElement.placeholder : undefined;
	}
	set placeholder(value: string) {
		this.nativeElement ? this.nativeElement.placeholder = value : undefined;
	}

	/** @description Disables user interaction with the element. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description Sets or gets an array of dates (DateTime or Date objects) that cannot be selected. */
	@Input()
	get restrictedDates(): Date[] {
		return this.nativeElement ? this.nativeElement.restrictedDates : undefined;
	}
	set restrictedDates(value: Date[]) {
		this.nativeElement ? this.nativeElement.restrictedDates = value : undefined;
	}

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description Sets or gets whether the spin buttons are displayed. Spin buttons are used to increment/decrement the date/time. */
	@Input()
	get spinButtons(): boolean {
		return this.nativeElement ? this.nativeElement.spinButtons : undefined;
	}
	set spinButtons(value: boolean) {
		this.nativeElement ? this.nativeElement.spinButtons = value : undefined;
	}

	/** @description Sets the delay between repeats of the spin buttons in miliseconds. */
	@Input()
	get spinButtonsDelay(): number {
		return this.nativeElement ? this.nativeElement.spinButtonsDelay : undefined;
	}
	set spinButtonsDelay(value: number) {
		this.nativeElement ? this.nativeElement.spinButtonsDelay = value : undefined;
	}

	/** @description Sets a delay before the first repeat iteration of spin buttons in miliseconds. */
	@Input()
	get spinButtonsInitialDelay(): number {
		return this.nativeElement ? this.nativeElement.spinButtonsInitialDelay : undefined;
	}
	set spinButtonsInitialDelay(value: number) {
		this.nativeElement ? this.nativeElement.spinButtonsInitialDelay = value : undefined;
	}

	/** @description Sets or gets the position of the spin buttons. */
	@Input()
	get spinButtonsPosition(): DateTimePickerSpinButtonsPosition {
		return this.nativeElement ? this.nativeElement.spinButtonsPosition : undefined;
	}
	set spinButtonsPosition(value: DateTimePickerSpinButtonsPosition) {
		this.nativeElement ? this.nativeElement.spinButtonsPosition = value : undefined;
	}

	/** @description Sets or gets the element's visual theme.  */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description Enables/Disabled the tooltip for the important dates in the calendar pop-up. */
	@Input()
	get tooltip(): boolean {
		return this.nativeElement ? this.nativeElement.tooltip : undefined;
	}
	set tooltip(value: boolean) {
		this.nativeElement ? this.nativeElement.tooltip = value : undefined;
	}

	/** @description Sets the delay of the calendar pop-up's tooltip before it appears. */
	@Input()
	get tooltipDelay(): number {
		return this.nativeElement ? this.nativeElement.tooltipDelay : undefined;
	}
	set tooltipDelay(value: number) {
		this.nativeElement ? this.nativeElement.tooltipDelay = value : undefined;
	}

	/** @description Sets the position of the tooltip in the calendar pop-up. */
	@Input()
	get tooltipPosition(): TooltipPosition {
		return this.nativeElement ? this.nativeElement.tooltipPosition : undefined;
	}
	set tooltipPosition(value: TooltipPosition) {
		this.nativeElement ? this.nativeElement.tooltipPosition = value : undefined;
	}

	/** @description Sets a template for the content of the calendar pop-up's tooltip. Accepts the id of or a reference to an HTMLTemplateElement. */
	@Input()
	get tooltipTemplate(): string | HTMLTemplateElement {
		return this.nativeElement ? this.nativeElement.tooltipTemplate : undefined;
	}
	set tooltipTemplate(value: string | HTMLTemplateElement) {
		this.nativeElement ? this.nativeElement.tooltipTemplate = value : undefined;
	}

	/** @description Sets or gets if the element can be focused. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
	}

	/** @description Determines the validation mechanism for the value by min/max. */
	@Input()
	get validation(): Validation {
		return this.nativeElement ? this.nativeElement.validation : undefined;
	}
	set validation(value: Validation) {
		this.nativeElement ? this.nativeElement.validation = value : undefined;
	}

	/** @description Sets or gets the value. The value represents the current date/time that is set to the element as a DateTime object. */
	@Input()
	get value(): any {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: any) {
		this.nativeElement ? this.nativeElement.value = value : undefined;
	}

	/** @description Enables/Disabled week numbering in the calendar pop-up.  */
	@Input()
	get weekNumbers(): boolean {
		return this.nativeElement ? this.nativeElement.weekNumbers : undefined;
	}
	set weekNumbers(value: boolean) {
		this.nativeElement ? this.nativeElement.weekNumbers = value : undefined;
	}

	/** @description Determines the number of visible weeks in the calendar pop-up. */
	@Input()
	get weeks(): number {
		return this.nativeElement ? this.nativeElement.weeks : undefined;
	}
	set weeks(value: number) {
		this.nativeElement ? this.nativeElement.weeks = value : undefined;
	}

	/** @description Determines the first year of a 100 year span within which 2-digit years fall. The default value, 1926, would interpret the 2-digit year values 26-99 as 1926 to 1999 and values 00-25 as being 2000 to 2025. */
	@Input()
	get yearCutoff(): number {
		return this.nativeElement ? this.nativeElement.yearCutoff : undefined;
	}
	set yearCutoff(value: number) {
		this.nativeElement ? this.nativeElement.yearCutoff = value : undefined;
	}

	/** @description This event is triggered when the value is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
	*   oldValue - The old value before it was changed presented as a DateTime object.
	*   value - The new value presented as a DateTime object.
	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the calendar pop-up is closed.
	*  @param event. The custom event. 	*/
	@Output() onClose: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the calendar pop-up is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	@Output() onClosing: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the calendar pop-up is opened.
	*  @param event. The custom event. 	*/
	@Output() onOpen: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the calendar pop-up is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	@Output() onOpening: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Closes the calendar pop-up. 
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

	/** @description Focuses the input. 
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

	/** @description Opens the calendar pop-up. 
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

	/** @description Selects the text inside the input. 
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
		return value ? value.toDate() : null;
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
            that.nativeElement.isInitialized = that._initialChange ? false : true;
			that.value = value;
            that.nativeElement.isInitialized = true;
			if (that._initialChange === false) {
	    		that._onChange(value);
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

		that.eventHandlers['closeHandler'] = (event: CustomEvent) => { that.onClose.emit(event); }
		that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);

		that.eventHandlers['closingHandler'] = (event: CustomEvent) => { that.onClosing.emit(event); }
		that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);

		that.eventHandlers['openHandler'] = (event: CustomEvent) => { that.onOpen.emit(event); }
		that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);

		that.eventHandlers['openingHandler'] = (event: CustomEvent) => { that.onOpening.emit(event); }
		that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);

		
        that.eventHandlers['changeModelHandler'] = (event: Event) => {
            that._initialChange = false;
            that._onChange(that.nativeElement.value ? that.nativeElement.value.toDate() : null); 
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
