import { Calendar } from './../index';
import { Animation, CalendarMode, DayFormat, CalendarDisplayMode, CalendarDisplayModeView, MonthFormat, ViewLayout, LayoutPosition, CalendarSelectionMode, TooltipPosition, YearFormat, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, forwardRef, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, CalendarMode, DayFormat, CalendarDisplayMode, CalendarDisplayModeView, MonthFormat, ViewLayout, LayoutPosition, CalendarSelectionMode, TooltipPosition, YearFormat, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Calendar } from './../index';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';



const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CalendarComponent),
    multi: true
}

@Directive({
	selector: 'smart-calendar, [smart-calendar]',
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]

})

export class CalendarComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
	constructor(ref: ElementRef<Calendar>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Calendar;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Calendar;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Calendar>document.createElement('smart-calendar');
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

	/** @description Applies new animation settings when it is enabled. Properties:startSpeed - Determines the initial speed of the animation.easeThreshold - Determines the point at which the animation starts to slow down - the "ease effect".step - Determines the step ( scrolling interval ) at which the animation will run. stepEaseSize - Coefficient that is used to calculated the new step once the threshold has been passed. resetThreshold - Determines the threshold for animation reset. When it's reached the animation will start over. */
	@Input()
	get animationSettings(): any {
		return this.nativeElement ? this.nativeElement.animationSettings : undefined;
	}
	set animationSettings(value: any) {
		this.nativeElement ? this.nativeElement.animationSettings = value : undefined;
	}

	/** @description Determines the date controls inside the header of the Calendar. */
	@Input()
	get calendarMode(): CalendarMode {
		return this.nativeElement ? this.nativeElement.calendarMode : undefined;
	}
	set calendarMode(value: CalendarMode) {
		this.nativeElement ? this.nativeElement.calendarMode = value : undefined;
	}

	/** @description Determines the format of the day names located above the days inside the calendar. */
	@Input()
	get dayNameFormat(): DayFormat {
		return this.nativeElement ? this.nativeElement.dayNameFormat : undefined;
	}
	set dayNameFormat(value: DayFormat) {
		this.nativeElement ? this.nativeElement.dayNameFormat = value : undefined;
	}

	/** @description  A callback that can be used to customize the format of the month name when calendarMode is set to 'default'. */
	@Input()
	get dateFormatFunction(): any {
		return this.nativeElement ? this.nativeElement.dateFormatFunction : undefined;
	}
	set dateFormatFunction(value: any) {
		this.nativeElement ? this.nativeElement.dateFormatFunction = value : undefined;
	}

	/** @description Enables or disables the Calendar. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Disables auto navigation when the user clicks on a date that's not from the current month in view. */
	@Input()
	get disableAutoNavigation(): boolean {
		return this.nativeElement ? this.nativeElement.disableAutoNavigation : undefined;
	}
	set disableAutoNavigation(value: boolean) {
		this.nativeElement ? this.nativeElement.disableAutoNavigation = value : undefined;
	}

	/** @description Determines the date view of the calendar when calendarMode is set to 'default' */
	@Input()
	get displayMode(): CalendarDisplayMode {
		return this.nativeElement ? this.nativeElement.displayMode : undefined;
	}
	set displayMode(value: CalendarDisplayMode) {
		this.nativeElement ? this.nativeElement.displayMode = value : undefined;
	}

	/** @description Determines the type of the month/year view when calendarMode is set to Default. */
	@Input()
	get displayModeView(): CalendarDisplayModeView {
		return this.nativeElement ? this.nativeElement.displayModeView : undefined;
	}
	set displayModeView(value: CalendarDisplayModeView) {
		this.nativeElement ? this.nativeElement.displayModeView = value : undefined;
	}

	/** @description Determines the height of the month's drop down inside the Calendar. */
	@Input()
	get dropDownHeight(): string {
		return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
	}
	set dropDownHeight(value: string) {
		this.nativeElement ? this.nativeElement.dropDownHeight = value : undefined;
	}

	/** @description Determines the width of the month's drop down inside the Calendar. */
	@Input()
	get dropDownWidth(): string {
		return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
	}
	set dropDownWidth(value: string) {
		this.nativeElement ? this.nativeElement.dropDownWidth = value : undefined;
	}

	/** @description Determines the first day of the week. From 0(Sunday) to 6(Saturday) */
	@Input()
	get firstDayOfWeek(): number {
		return this.nativeElement ? this.nativeElement.firstDayOfWeek : undefined;
	}
	set firstDayOfWeek(value: number) {
		this.nativeElement ? this.nativeElement.firstDayOfWeek = value : undefined;
	}

	/** @description Sets a custom footer template. Accepts the id of an HTMLTemplateElement or a reference ot it. */
	@Input()
	get footerTemplate(): any {
		return this.nativeElement ? this.nativeElement.footerTemplate : undefined;
	}
	set footerTemplate(value: any) {
		this.nativeElement ? this.nativeElement.footerTemplate = value : undefined;
	}

	/** @description Sets custom header template. Accepts the id of an HTMLTemplateElement or a reference ot it. */
	@Input()
	get headerTemplate(): any {
		return this.nativeElement ? this.nativeElement.headerTemplate : undefined;
	}
	set headerTemplate(value: any) {
		this.nativeElement ? this.nativeElement.headerTemplate = value : undefined;
	}

	/** @description Hides the names of the weekdays. */
	@Input()
	get hideDayNames(): boolean {
		return this.nativeElement ? this.nativeElement.hideDayNames : undefined;
	}
	set hideDayNames(value: boolean) {
		this.nativeElement ? this.nativeElement.hideDayNames = value : undefined;
	}

	/** @description Hides the dates from other months. */
	@Input()
	get hideOtherMonthDays(): boolean {
		return this.nativeElement ? this.nativeElement.hideOtherMonthDays : undefined;
	}
	set hideOtherMonthDays(value: boolean) {
		this.nativeElement ? this.nativeElement.hideOtherMonthDays = value : undefined;
	}

	/** @description Hides the arrow of the tooltip. */
	@Input()
	get hideTooltipArrow(): boolean {
		return this.nativeElement ? this.nativeElement.hideTooltipArrow : undefined;
	}
	set hideTooltipArrow(value: boolean) {
		this.nativeElement ? this.nativeElement.hideTooltipArrow = value : undefined;
	}

	/** @description Sets the dates that will be displayed as important. */
	@Input()
	get importantDates(): string[] {
		return this.nativeElement ? this.nativeElement.importantDates : undefined;
	}
	set importantDates(value: string[]) {
		this.nativeElement ? this.nativeElement.importantDates = value : undefined;
	}

	/** @description Sets a template for the important dates. Accepts the id of an HTMLTemplate element inside the DOM of or a reference to it. */
	@Input()
	get importantDatesTemplate(): any {
		return this.nativeElement ? this.nativeElement.importantDatesTemplate : undefined;
	}
	set importantDatesTemplate(value: any) {
		this.nativeElement ? this.nativeElement.importantDatesTemplate = value : undefined;
	}

	/** @description  Determines the language of the Calendar.  */
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

	/** @description Determines the max date for the Calendar. Accepts date objects and valid date string formats. */
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

	/** @description Determines the min date for the Calendar. Accepts date objects and valid date string formats. */
	@Input()
	get min(): any {
		return this.nativeElement ? this.nativeElement.min : undefined;
	}
	set min(value: any) {
		this.nativeElement ? this.nativeElement.min = value : undefined;
	}

	/** @description Determines the number of months to be displayed inside the calendar. The maximum amount of months that can be shown is 12. By default only 1 month is shown. */
	@Input()
	get months(): number {
		return this.nativeElement ? this.nativeElement.months : undefined;
	}
	set months(value: number) {
		this.nativeElement ? this.nativeElement.months = value : undefined;
	}

	/** @description Determines the format of the month names in the header when DisplayMode is set to Default or when Months property is greater than 1.  */
	@Input()
	get monthNameFormat(): MonthFormat {
		return this.nativeElement ? this.nativeElement.monthNameFormat : undefined;
	}
	set monthNameFormat(value: MonthFormat) {
		this.nativeElement ? this.nativeElement.monthNameFormat = value : undefined;
	}

	/** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
	@Input()
	get name(): string {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		this.nativeElement ? this.nativeElement.name = value : undefined;
	}

	/** @description If the element is readonly, users cannot interact with it. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description Sets restricted dates. Restricted dates are dates that cannot be selected/hovered/focused. They are visualy styled as restricted. The dates can be javascript date objects or strings representing a valid date. */
	@Input()
	get restrictedDates(): string[] {
		return this.nativeElement ? this.nativeElement.restrictedDates : undefined;
	}
	set restrictedDates(value: string[]) {
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

	/** @description  Determines the direction of the navigation buttons located in the header and the animation. */
	@Input()
	get scrollButtonsNavigationMode(): ViewLayout {
		return this.nativeElement ? this.nativeElement.scrollButtonsNavigationMode : undefined;
	}
	set scrollButtonsNavigationMode(value: ViewLayout) {
		this.nativeElement ? this.nativeElement.scrollButtonsNavigationMode = value : undefined;
	}

	/** @description  Determines the position of the navigation buttons located inside the header.  */
	@Input()
	get scrollButtonsPosition(): LayoutPosition {
		return this.nativeElement ? this.nativeElement.scrollButtonsPosition : undefined;
	}
	set scrollButtonsPosition(value: LayoutPosition) {
		this.nativeElement ? this.nativeElement.scrollButtonsPosition = value : undefined;
	}

	/** @description Sets the dates that will be selected. Selected dates are styled differently than the rest. The dates can be Date objects or strings in a valid date format. */
	@Input()
	get selectedDates(): string[] {
		return this.nativeElement ? this.nativeElement.selectedDates : undefined;
	}
	set selectedDates(value: string[]) {
		this.nativeElement ? this.nativeElement.selectedDates = value : undefined;
	}

	/** @description Determines the date selection mode. */
	@Input()
	get selectionMode(): CalendarSelectionMode {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value: CalendarSelectionMode) {
		this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
	}

	/** @description Sets the delay between clicks of the date navigation buttons located in the header of the Calendar.  */
	@Input()
	get spinButtonsDelay(): number {
		return this.nativeElement ? this.nativeElement.spinButtonsDelay : undefined;
	}
	set spinButtonsDelay(value: number) {
		this.nativeElement ? this.nativeElement.spinButtonsDelay = value : undefined;
	}

	/** @description Determines the initial delay before the action of the date navigation buttons located in the header of the Calendar.  */
	@Input()
	get spinButtonsInitialDelay(): number {
		return this.nativeElement ? this.nativeElement.spinButtonsInitialDelay : undefined;
	}
	set spinButtonsInitialDelay(value: number) {
		this.nativeElement ? this.nativeElement.spinButtonsInitialDelay = value : undefined;
	}

	/** @description Determines the theme. Theme defines the look of the element */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description Sets a template for the title section of the Calendar. Accepts the id of an HTMLTemplate element inside the DOM of or a reference it. */
	@Input()
	get titleTemplate(): any {
		return this.nativeElement ? this.nativeElement.titleTemplate : undefined;
	}
	set titleTemplate(value: any) {
		this.nativeElement ? this.nativeElement.titleTemplate = value : undefined;
	}

	/** @description Enables/Disabled the tooltip for the important dates. If enabled when an important date is hovered a tooltip is displayed. */
	@Input()
	get tooltip(): boolean {
		return this.nativeElement ? this.nativeElement.tooltip : undefined;
	}
	set tooltip(value: boolean) {
		this.nativeElement ? this.nativeElement.tooltip = value : undefined;
	}

	/** @description Show/Hide the arrow of the the tooltip for the important dates. By default the arrow is visible. */
	@Input()
	get tooltipArrow(): boolean {
		return this.nativeElement ? this.nativeElement.tooltipArrow : undefined;
	}
	set tooltipArrow(value: boolean) {
		this.nativeElement ? this.nativeElement.tooltipArrow = value : undefined;
	}

	/** @description Sets the delay of the tooltip before it appears. */
	@Input()
	get tooltipDelay(): number {
		return this.nativeElement ? this.nativeElement.tooltipDelay : undefined;
	}
	set tooltipDelay(value: number) {
		this.nativeElement ? this.nativeElement.tooltipDelay = value : undefined;
	}

	/** @description Set's a custom offset to the tooltip's position. Accepts an array of two numbers: the left coordinate and the top coordinate. */
	@Input()
	get tooltipOffset(): number[][] {
		return this.nativeElement ? this.nativeElement.tooltipOffset : undefined;
	}
	set tooltipOffset(value: number[][]) {
		this.nativeElement ? this.nativeElement.tooltipOffset = value : undefined;
	}

	/** @description Sets the position of the tooltip. */
	@Input()
	get tooltipPosition(): TooltipPosition {
		return this.nativeElement ? this.nativeElement.tooltipPosition : undefined;
	}
	set tooltipPosition(value: TooltipPosition) {
		this.nativeElement ? this.nativeElement.tooltipPosition = value : undefined;
	}

	/** @description Sets a template for the tooltip's content. Accepts the id of an HTMLTEmplate element inside the DOM or it's reference. */
	@Input()
	get tooltipTemplate(): any {
		return this.nativeElement ? this.nativeElement.tooltipTemplate : undefined;
	}
	set tooltipTemplate(value: any) {
		this.nativeElement ? this.nativeElement.tooltipTemplate = value : undefined;
	}

	/** @description If is set to true, the element cannot be focused. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
	}

	/** @description Determines the orientation of the Calendar. */
	@Input()
	get view(): ViewLayout {
		return this.nativeElement ? this.nativeElement.view : undefined;
	}
	set view(value: ViewLayout) {
		this.nativeElement ? this.nativeElement.view = value : undefined;
	}

	/** @description Determines the visible sections of the Calendar. The view sections are : title, header, footer. Multiple sections can be applied at the same time. By default only the 'header' section is visible. */
	@Input()
	get viewSections(): string[] {
		return this.nativeElement ? this.nativeElement.viewSections : undefined;
	}
	set viewSections(value: string[]) {
		this.nativeElement ? this.nativeElement.viewSections = value : undefined;
	}

	/** @description Enables/Disabled week numbering. If enabled week numbers are displayed infront of each week inside the Calendar. */
	@Input()
	get weekNumbers(): boolean {
		return this.nativeElement ? this.nativeElement.weekNumbers : undefined;
	}
	set weekNumbers(value: boolean) {
		this.nativeElement ? this.nativeElement.weekNumbers = value : undefined;
	}

	/** @description Determines the number of visible weeks. The value of the property ranges from 1 to 6. Where 1 is one week and 6 is a full month ( 6 weeks ). */
	@Input()
	get weeks(): number {
		return this.nativeElement ? this.nativeElement.weeks : undefined;
	}
	set weeks(value: number) {
		this.nativeElement ? this.nativeElement.weeks = value : undefined;
	}

	/** @description Determines the year format in the header when DisplayMode is set to Default or when Months property is greater than 1. */
	@Input()
	get yearFormat(): YearFormat {
		return this.nativeElement ? this.nativeElement.yearFormat : undefined;
	}
	set yearFormat(value: YearFormat) {
		this.nativeElement ? this.nativeElement.yearFormat = value : undefined;
	}

	/** @description This event is triggered when a new date has been selected/unselected.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value)
	*   value - An array of all currently selected dates.
	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the displayMode is about to change. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldDisplayMode, 	newDisplayMode)
	*   oldDisplayMode - The previous display mode.
	*   newDisplayMode - The new display mode.
	*/
	@Output() onDisplayModeChanging: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the display mode has changed.
	*  @param event. The custom event. 	*/
	@Output() onDisplayModeChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the view is changing. This navigation can be cancelled by using the preventDefault method.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	type)
	*   value - The view's date.
	*   type - The view type - 'month', 'decade' or 'year'.
	*/
	@Output() onNavigationChanging: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the view is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	type)
	*   value - The view's date.
	*   type - The view type - 'month', 'decade' or 'year'.
	*/
	@Output() onNavigationChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Clears the selection. Removes all seleceted dates. 
	*/
    public clearSelection(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSelection();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearSelection();
            });
        }
    }

	/** @description Navigates forwards/backwards depending on the argument. 
	* @param {number | Date | string} step. The argument can be the following: <ul><li> number -  representing the number of months to scroll. Can be negavtive. If negative it will scroll backwards.</li><li> Date - a date object representing the Date to navigate to.</li><li> string - a string representing a valid Date, e.g. "2020-10-1" </li></ul>
	* @returns {boolean}
  */
	public async navigate(step): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.navigate(step);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Selects or Unselects a date. 
	* @param {Date | string} date. The date to be selected or unselected. The date can be a Date object or a string in valid date format.
	*/
    public select(date: Date | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(date);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(date);
            });
        }
    }

	/** @description Selects today's date. 
	* @returns {Date}
  */
	public async today(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.today();
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

		if (this.selectedDates && this.selectedDates.length > 0) {
			const value = this.nativeElement.selectedDates.length === 1 ? this.nativeElement.selectedDates[0] : this.nativeElement.selectedDates;
			return value;
		}
        return null;
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
			that.clearSelection();
            if (Array.isArray(normalizedValue)) {
                value.forEach((currentValue: any) => this.select(currentValue));
                }
                else {
                    that.select(normalizedValue);
                }
            that.nativeElement.isInitialized = true;
			if (that._initialChange === false) {
            if (that.selectedDates && that.selectedDates.length > 1) {
                    that._onChange(that.selectedDates);
                } else {
                    that._onChange((that.selectedDates && that.selectedDates.length > 0) ? that.selectedDates[0] : null);;
                }
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

		that.eventHandlers['displayModeChangingHandler'] = (event: CustomEvent) => { that.onDisplayModeChanging.emit(event); }
		that.nativeElement.addEventListener('displayModeChanging', that.eventHandlers['displayModeChangingHandler']);

		that.eventHandlers['displayModeChangeHandler'] = (event: CustomEvent) => { that.onDisplayModeChange.emit(event); }
		that.nativeElement.addEventListener('displayModeChange', that.eventHandlers['displayModeChangeHandler']);

		that.eventHandlers['navigationChangingHandler'] = (event: CustomEvent) => { that.onNavigationChanging.emit(event); }
		that.nativeElement.addEventListener('navigationChanging', that.eventHandlers['navigationChangingHandler']);

		that.eventHandlers['navigationChangeHandler'] = (event: CustomEvent) => { that.onNavigationChange.emit(event); }
		that.nativeElement.addEventListener('navigationChange', that.eventHandlers['navigationChangeHandler']);

		
        that.eventHandlers['changeModelHandler'] = (event: Event) => {
            that._initialChange = false;
            that._onChange(that.nativeElement.selectedDates.length > 0 ? (that.nativeElement.selectedDates.length > 1 ? that.nativeElement.selectedDates : that.nativeElement.selectedDates[0]) : null);
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

		if (that.eventHandlers['displayModeChangingHandler']) {
			that.nativeElement.removeEventListener('displayModeChanging', that.eventHandlers['displayModeChangingHandler']);
		}

		if (that.eventHandlers['displayModeChangeHandler']) {
			that.nativeElement.removeEventListener('displayModeChange', that.eventHandlers['displayModeChangeHandler']);
		}

		if (that.eventHandlers['navigationChangingHandler']) {
			that.nativeElement.removeEventListener('navigationChanging', that.eventHandlers['navigationChangingHandler']);
		}

		if (that.eventHandlers['navigationChangeHandler']) {
			that.nativeElement.removeEventListener('navigationChange', that.eventHandlers['navigationChangeHandler']);
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
