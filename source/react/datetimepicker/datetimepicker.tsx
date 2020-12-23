import React from "react";
import { DateTimePickerProperties } from "./../../index";
import { Animation, DropDownButtonPosition, CalendarMode, DayFormat, DateTimePickerDisplayKind, CalendarDisplayModeView, DateTimePickerDropDownDisplayMode, DropDownPosition, DateTimePickerEditMode, DateTimePickerSpinButtonsPosition, TooltipPosition, Validation} from './../../index';
export { DateTimePickerProperties } from "./../../index";
export { Animation, DropDownButtonPosition, CalendarMode, DayFormat, DateTimePickerDisplayKind, CalendarDisplayModeView, DateTimePickerDropDownDisplayMode, DropDownPosition, DateTimePickerEditMode, DateTimePickerSpinButtonsPosition, TooltipPosition, Validation} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface DateTimePickerProps extends DateTimePickerProperties {
    className?: string;
    style?: React.CSSProperties;

	onChange?: ((event?: Event) => void) | undefined;
	onClose?: ((event?: Event) => void) | undefined;
	onClosing?: ((event?: Event) => void) | undefined;
	onOpen?: ((event?: Event) => void) | undefined;
	onOpening?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Date & time selection component. It allows to select both date and time with the same control.
*/
export class DateTimePicker extends React.Component<React.HTMLAttributes<Element> & DateTimePickerProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'DateTimePicker' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
	*	Property type: Animation
	*/
	get animation(): Animation  {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation) {
		if (this.nativeElement) {
			this.nativeElement.animation = value;
		}
	}

	/** Applies new animation settings to the calendar pop-up when it is enabled. Properties:startSpeed - Determines the initial speed of the animation.easeThreshold - Determines the point at which the animation starts to slow down - the "ease effect".step - Determines the step ( scrolling interval ) at which the animation will run. stepEaseSize - Coefficient that is used to calculated the new step once the threshold has been passed. resetThreshold - Determines the threshold for animation reset. When it's reached the animation will start over.
	*	Property type: any
	*/
	get animationSettings(): any  {
		return this.nativeElement ? this.nativeElement.animationSettings : undefined;
	}
	set animationSettings(value: any) {
		if (this.nativeElement) {
			this.nativeElement.animationSettings = value;
		}
	}

	/** Determines whether the calendar button pop-up will be closed automatically when date or time is selected through it.
	*	Property type: boolean
	*/
	get autoClose(): boolean  {
		return this.nativeElement ? this.nativeElement.autoClose : undefined;
	}
	set autoClose(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.autoClose = value;
		}
	}

	/** Determines the delay before the calendar pop-up is automatically closed. Applicable only when autoClose is set to true.
	*	Property type: number
	*/
	get autoCloseDelay(): number  {
		return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
	}
	set autoCloseDelay(value: number) {
		if (this.nativeElement) {
			this.nativeElement.autoCloseDelay = value;
		}
	}

	/** Determines whether the calendar button is visible or not. The calendar button is used to open the Calendar popup to select a date.
	*	Property type: boolean
	*/
	get calendarButton(): boolean  {
		return this.nativeElement ? this.nativeElement.calendarButton : undefined;
	}
	set calendarButton(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.calendarButton = value;
		}
	}

	/** Determines the position of the calendar button.
	*	Property type: DropDownButtonPosition
	*/
	get calendarButtonPosition(): DropDownButtonPosition  {
		return this.nativeElement ? this.nativeElement.calendarButtonPosition : undefined;
	}
	set calendarButtonPosition(value: DropDownButtonPosition) {
		if (this.nativeElement) {
			this.nativeElement.calendarButtonPosition = value;
		}
	}

	/** Determines the header mode of the calendar pop-up.
	*	Property type: CalendarMode
	*/
	get calendarMode(): CalendarMode  {
		return this.nativeElement ? this.nativeElement.calendarMode : undefined;
	}
	set calendarMode(value: CalendarMode) {
		if (this.nativeElement) {
			this.nativeElement.calendarMode = value;
		}
	}

	/** Sets or gets the format of calendar pop-up's day names.
	*	Property type: DayFormat
	*/
	get dayNameFormat(): DayFormat  {
		return this.nativeElement ? this.nativeElement.dayNameFormat : undefined;
	}
	set dayNameFormat(value: DayFormat) {
		if (this.nativeElement) {
			this.nativeElement.dayNameFormat = value;
		}
	}

	/** Enables or disables the element.
	*	Property type: boolean
	*/
	get disabled(): boolean  {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disabled = value;
		}
	}

	/** Disables auto navigation of the calendar pop-up when the user clicks on a date that's not from month in view.
	*	Property type: boolean
	*/
	get disableAutoNavigation(): boolean  {
		return this.nativeElement ? this.nativeElement.disableAutoNavigation : undefined;
	}
	set disableAutoNavigation(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disableAutoNavigation = value;
		}
	}

	/** Determines the time zone to display the value in.
	*	Property type: DateTimePickerDisplayKind
	*/
	get displayKind(): DateTimePickerDisplayKind  {
		return this.nativeElement ? this.nativeElement.displayKind : undefined;
	}
	set displayKind(value: DateTimePickerDisplayKind) {
		if (this.nativeElement) {
			this.nativeElement.displayKind = value;
		}
	}

	/** Determines the type of the month/year view in the calendar pop-up when calendarMode is set to Default.
	*	Property type: CalendarDisplayModeView
	*/
	get displayModeView(): CalendarDisplayModeView  {
		return this.nativeElement ? this.nativeElement.displayModeView : undefined;
	}
	set displayModeView(value: CalendarDisplayModeView) {
		if (this.nativeElement) {
			this.nativeElement.displayModeView = value;
		}
	}

	/** Sets custom container to append the pop-up to. By default, it is in the DateTimePicker. The value of the property can be an HTML element or the id of an HTML element.
	*	Property type: any
	*/
	get dropDownAppendTo(): any  {
		return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
	}
	set dropDownAppendTo(value: any) {
		if (this.nativeElement) {
			this.nativeElement.dropDownAppendTo = value;
		}
	}

	/** Sets or gets the pop-up display mode (what components appear in it, and its behaviour).
	*	Property type: DateTimePickerDropDownDisplayMode
	*/
	get dropDownDisplayMode(): DateTimePickerDropDownDisplayMode  {
		return this.nativeElement ? this.nativeElement.dropDownDisplayMode : undefined;
	}
	set dropDownDisplayMode(value: DateTimePickerDropDownDisplayMode) {
		if (this.nativeElement) {
			this.nativeElement.dropDownDisplayMode = value;
		}
	}

	/** If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
	*	Property type: boolean
	*/
	get dropDownOverlay(): boolean  {
		return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
	}
	set dropDownOverlay(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.dropDownOverlay = value;
		}
	}

	/** Determines the pop-up position when opened.
	*	Property type: DropDownPosition
	*/
	get dropDownPosition(): DropDownPosition  {
		return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
	}
	set dropDownPosition(value: DropDownPosition) {
		if (this.nativeElement) {
			this.nativeElement.dropDownPosition = value;
		}
	}

	/** Determines how the the value can be edited inside the input.
	*	Property type: DateTimePickerEditMode
	*/
	get editMode(): DateTimePickerEditMode  {
		return this.nativeElement ? this.nativeElement.editMode : undefined;
	}
	set editMode(value: DateTimePickerEditMode) {
		if (this.nativeElement) {
			this.nativeElement.editMode = value;
		}
	}

	/** Determines whether the value can be incremented/decremented with the mouse wheel when the mouse is over the input.
	*	Property type: boolean
	*/
	get enableMouseWheelAction(): boolean  {
		return this.nativeElement ? this.nativeElement.enableMouseWheelAction : undefined;
	}
	set enableMouseWheelAction(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.enableMouseWheelAction = value;
		}
	}

	/** Determines the first day of the week of the calendar pop-up. From 0(Sunday) to 6(Saturday)
	*	Property type: number
	*/
	get firstDayOfWeek(): number  {
		return this.nativeElement ? this.nativeElement.firstDayOfWeek : undefined;
	}
	set firstDayOfWeek(value: number) {
		if (this.nativeElement) {
			this.nativeElement.firstDayOfWeek = value;
		}
	}

	/** Sets or gets the footer template of the calendar pop-up. The value of this property can be the id of an HTMLTemplateElement or the HTMLTemplateElement itself. If set to null, a default template is applied.
	*	Property type: any
	*/
	get footerTemplate(): any  {
		return this.nativeElement ? this.nativeElement.footerTemplate : undefined;
	}
	set footerTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.footerTemplate = value;
		}
	}

	/** Determines the pattern that is used to display the value in.
	*	Property type: string
	*/
	get formatString(): string  {
		return this.nativeElement ? this.nativeElement.formatString : undefined;
	}
	set formatString(value: string) {
		if (this.nativeElement) {
			this.nativeElement.formatString = value;
		}
	}

	/** Sets custom header template for the calendar pop-up. Accepts the id of an HTMLTemplateElement or a reference ot it.
	*	Property type: any
	*/
	get headerTemplate(): any  {
		return this.nativeElement ? this.nativeElement.headerTemplate : undefined;
	}
	set headerTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.headerTemplate = value;
		}
	}

	/** Hides the names of the weekdays in the calendar pop-up.
	*	Property type: boolean
	*/
	get hideDayNames(): boolean  {
		return this.nativeElement ? this.nativeElement.hideDayNames : undefined;
	}
	set hideDayNames(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hideDayNames = value;
		}
	}

	/** Determines if dates from other months are visible or not in the calendar pop-up.
	*	Property type: boolean
	*/
	get hideOtherMonthDays(): boolean  {
		return this.nativeElement ? this.nativeElement.hideOtherMonthDays : undefined;
	}
	set hideOtherMonthDays(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hideOtherMonthDays = value;
		}
	}

	/** Hides the arrow of the tooltip in the calendar pop-up.
	*	Property type: boolean
	*/
	get hideTooltipArrow(): boolean  {
		return this.nativeElement ? this.nativeElement.hideTooltipArrow : undefined;
	}
	set hideTooltipArrow(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hideTooltipArrow = value;
		}
	}

	/** Sets additional helper text below the element that appears only when the element is focused.
	*	Property type: string
	*/
	get hint(): string  {
		return this.nativeElement ? this.nativeElement.hint : undefined;
	}
	set hint(value: string) {
		if (this.nativeElement) {
			this.nativeElement.hint = value;
		}
	}

	/** Sets dates, displayed as important in the calendar pop-up.
	*	Property type: string[] | Date[]
	*/
	get importantDates(): string[] | Date[]  {
		return this.nativeElement ? this.nativeElement.importantDates : undefined;
	}
	set importantDates(value: string[] | Date[]) {
		if (this.nativeElement) {
			this.nativeElement.importantDates = value;
		}
	}

	/** Sets a template for the important dates of the calendar pop-up. Accepts the id of or a reference to an HTMLTemplateElement.
	*	Property type: string | HTMLTemplateElement
	*/
	get importantDatesTemplate(): string | HTMLTemplateElement  {
		return this.nativeElement ? this.nativeElement.importantDatesTemplate : undefined;
	}
	set importantDatesTemplate(value: string | HTMLTemplateElement) {
		if (this.nativeElement) {
			this.nativeElement.importantDatesTemplate = value;
		}
	}

	/** Sets or gets the increment/decrement interval when a date/time segment inside the input has not been highlighted. The default interval is 1 second. If a numeric value is passed, it represents milliseconds.
	*	Property type: any
	*/
	get interval(): any  {
		return this.nativeElement ? this.nativeElement.interval : undefined;
	}
	set interval(value: any) {
		if (this.nativeElement) {
			this.nativeElement.interval = value;
		}
	}

	/** Sets a label above the element.
	*	Property type: string
	*/
	get label(): string  {
		return this.nativeElement ? this.nativeElement.label : undefined;
	}
	set label(value: string) {
		if (this.nativeElement) {
			this.nativeElement.label = value;
		}
	}

	/** Sets or gets the locale that determines what language is used to localize the labels inside the DateTimePicker.
	*	Property type: string
	*/
	get locale(): string  {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		if (this.nativeElement) {
			this.nativeElement.locale = value;
		}
	}

	/** Callback used to customize the format of the messages that are returned from the Localization Module.
	*	Property type: any
	*/
	get localizeFormatFunction(): any  {
		return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	}
	set localizeFormatFunction(value: any) {
		if (this.nativeElement) {
			this.nativeElement.localizeFormatFunction = value;
		}
	}

	/** Sets or gets the maximum allowed value.
	*	Property type: any
	*/
	get max(): any  {
		return this.nativeElement ? this.nativeElement.max : undefined;
	}
	set max(value: any) {
		if (this.nativeElement) {
			this.nativeElement.max = value;
		}
	}

	/** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
	*	Property type: any
	*/
	get messages(): any  {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		if (this.nativeElement) {
			this.nativeElement.messages = value;
		}
	}

	/** Sets or gets the minimum allowed value.
	*	Property type: any
	*/
	get min(): any  {
		return this.nativeElement ? this.nativeElement.min : undefined;
	}
	set min(value: any) {
		if (this.nativeElement) {
			this.nativeElement.min = value;
		}
	}

	/** Sets or gets the element's name, which is used as a reference when the data is submitted in a form.
	*	Property type: string
	*/
	get name(): string  {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		if (this.nativeElement) {
			this.nativeElement.name = value;
		}
	}

	/** Enables or disables the setting of the value property to be null or empty string. If the property is enabled and the value in the input is deleted, the value will be set to null and the placeholder will be displayed. Otherwise, the current date and time will be set.
	*	Property type: boolean
	*/
	get nullable(): boolean  {
		return this.nativeElement ? this.nativeElement.nullable : undefined;
	}
	set nullable(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.nullable = value;
		}
	}

	/** Sets or gets whether the calendar pop-up is opened.
	*	Property type: boolean
	*/
	get opened(): boolean  {
		return this.nativeElement ? this.nativeElement.opened : undefined;
	}
	set opened(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.opened = value;
		}
	}

	/** Sets or gets the placeholder text to be shown in the input when value is null.
	*	Property type: string
	*/
	get placeholder(): string  {
		return this.nativeElement ? this.nativeElement.placeholder : undefined;
	}
	set placeholder(value: string) {
		if (this.nativeElement) {
			this.nativeElement.placeholder = value;
		}
	}

	/** Disables user interaction with the element.
	*	Property type: boolean
	*/
	get readonly(): boolean  {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.readonly = value;
		}
	}

	/** Sets or gets an array of dates (DateTime or Date objects) that cannot be selected.
	*	Property type: Date[]
	*/
	get restrictedDates(): Date[]  {
		return this.nativeElement ? this.nativeElement.restrictedDates : undefined;
	}
	set restrictedDates(value: Date[]) {
		if (this.nativeElement) {
			this.nativeElement.restrictedDates = value;
		}
	}

	/** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
	*	Property type: boolean
	*/
	get rightToLeft(): boolean  {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.rightToLeft = value;
		}
	}

	/** Sets or gets whether the spin buttons are displayed. Spin buttons are used to increment/decrement the date/time.
	*	Property type: boolean
	*/
	get spinButtons(): boolean  {
		return this.nativeElement ? this.nativeElement.spinButtons : undefined;
	}
	set spinButtons(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.spinButtons = value;
		}
	}

	/** Sets the delay between repeats of the spin buttons in miliseconds.
	*	Property type: number
	*/
	get spinButtonsDelay(): number  {
		return this.nativeElement ? this.nativeElement.spinButtonsDelay : undefined;
	}
	set spinButtonsDelay(value: number) {
		if (this.nativeElement) {
			this.nativeElement.spinButtonsDelay = value;
		}
	}

	/** Sets a delay before the first repeat iteration of spin buttons in miliseconds.
	*	Property type: number
	*/
	get spinButtonsInitialDelay(): number  {
		return this.nativeElement ? this.nativeElement.spinButtonsInitialDelay : undefined;
	}
	set spinButtonsInitialDelay(value: number) {
		if (this.nativeElement) {
			this.nativeElement.spinButtonsInitialDelay = value;
		}
	}

	/** Sets or gets the position of the spin buttons.
	*	Property type: DateTimePickerSpinButtonsPosition
	*/
	get spinButtonsPosition(): DateTimePickerSpinButtonsPosition  {
		return this.nativeElement ? this.nativeElement.spinButtonsPosition : undefined;
	}
	set spinButtonsPosition(value: DateTimePickerSpinButtonsPosition) {
		if (this.nativeElement) {
			this.nativeElement.spinButtonsPosition = value;
		}
	}

	/** Sets or gets the element's visual theme. 
	*	Property type: string
	*/
	get theme(): string  {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		if (this.nativeElement) {
			this.nativeElement.theme = value;
		}
	}

	/** Enables/Disabled the tooltip for the important dates in the calendar pop-up.
	*	Property type: boolean
	*/
	get tooltip(): boolean  {
		return this.nativeElement ? this.nativeElement.tooltip : undefined;
	}
	set tooltip(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.tooltip = value;
		}
	}

	/** Sets the delay of the calendar pop-up's tooltip before it appears.
	*	Property type: number
	*/
	get tooltipDelay(): number  {
		return this.nativeElement ? this.nativeElement.tooltipDelay : undefined;
	}
	set tooltipDelay(value: number) {
		if (this.nativeElement) {
			this.nativeElement.tooltipDelay = value;
		}
	}

	/** Sets the position of the tooltip in the calendar pop-up.
	*	Property type: TooltipPosition
	*/
	get tooltipPosition(): TooltipPosition  {
		return this.nativeElement ? this.nativeElement.tooltipPosition : undefined;
	}
	set tooltipPosition(value: TooltipPosition) {
		if (this.nativeElement) {
			this.nativeElement.tooltipPosition = value;
		}
	}

	/** Sets a template for the content of the calendar pop-up's tooltip. Accepts the id of or a reference to an HTMLTemplateElement.
	*	Property type: string | HTMLTemplateElement
	*/
	get tooltipTemplate(): string | HTMLTemplateElement  {
		return this.nativeElement ? this.nativeElement.tooltipTemplate : undefined;
	}
	set tooltipTemplate(value: string | HTMLTemplateElement) {
		if (this.nativeElement) {
			this.nativeElement.tooltipTemplate = value;
		}
	}

	/** Sets or gets if the element can be focused.
	*	Property type: boolean
	*/
	get unfocusable(): boolean  {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.unfocusable = value;
		}
	}

	/** Determines the validation mechanism for the value by min/max.
	*	Property type: Validation
	*/
	get validation(): Validation  {
		return this.nativeElement ? this.nativeElement.validation : undefined;
	}
	set validation(value: Validation) {
		if (this.nativeElement) {
			this.nativeElement.validation = value;
		}
	}

	/** Sets or gets the value. The value represents the current date/time that is set to the element as a DateTime object.
	*	Property type: any
	*/
	get value(): any  {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: any) {
		if (this.nativeElement) {
			this.nativeElement.value = value;
		}
	}

	/** Enables/Disabled week numbering in the calendar pop-up. 
	*	Property type: boolean
	*/
	get weekNumbers(): boolean  {
		return this.nativeElement ? this.nativeElement.weekNumbers : undefined;
	}
	set weekNumbers(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.weekNumbers = value;
		}
	}

	/** Determines the number of visible weeks in the calendar pop-up.
	*	Property type: number
	*/
	get weeks(): number  {
		return this.nativeElement ? this.nativeElement.weeks : undefined;
	}
	set weeks(value: number) {
		if (this.nativeElement) {
			this.nativeElement.weeks = value;
		}
	}

	/** Determines the first year of a 100 year span within which 2-digit years fall. The default value, 1926, would interpret the 2-digit year values 26-99 as 1926 to 1999 and values 00-25 as being 2000 to 2025.
	*	Property type: number
	*/
	get yearCutoff(): number  {
		return this.nativeElement ? this.nativeElement.yearCutoff : undefined;
	}
	set yearCutoff(value: number) {
		if (this.nativeElement) {
			this.nativeElement.yearCutoff = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["animation","animationSettings","autoClose","autoCloseDelay","calendarButton","calendarButtonPosition","calendarMode","dayNameFormat","disabled","disableAutoNavigation","displayKind","displayModeView","dropDownAppendTo","dropDownDisplayMode","dropDownOverlay","dropDownPosition","editMode","enableMouseWheelAction","firstDayOfWeek","footerTemplate","formatString","headerTemplate","hideDayNames","hideOtherMonthDays","hideTooltipArrow","hint","importantDates","importantDatesTemplate","interval","label","locale","localizeFormatFunction","max","messages","min","name","nullable","opened","placeholder","readonly","restrictedDates","rightToLeft","spinButtons","spinButtonsDelay","spinButtonsInitialDelay","spinButtonsPosition","theme","tooltip","tooltipDelay","tooltipPosition","tooltipTemplate","unfocusable","validation","value","weekNumbers","weeks","yearCutoff"];
	}
	/**  This event is triggered when the value is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
	*   oldValue - The old value before it was changed presented as a DateTime object.
	*   value - The new value presented as a DateTime object.
	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the calendar pop-up is closed.
	*  @param event. The custom event. 	*/
	onClose?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the calendar pop-up is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	onClosing?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the calendar pop-up is opened.
	*  @param event. The custom event. 	*/
	onOpen?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the calendar pop-up is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	onOpening?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onChange","onClose","onClosing","onOpen","onOpening","onCreate","onReady"];
	}
	/** Closes the calendar pop-up. 
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

	/** Focuses the input. 
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

	/** Opens the calendar pop-up. 
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

	/** Selects the text inside the input. 
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



	constructor(props: any) {
		super(props);
		this.componentRef = React.createRef();
	}

	componentDidRender(initialize: boolean) {
		const that = this;
		const props: any = {};
		const events: any = {};
		let styles: any = null;

		for(let prop in that.props) {
			if (prop === 'children') {
				continue;
			}

			if (prop === 'style') {
				styles = that.props[prop];
				continue;
			}

			if (prop.startsWith('on') && that.properties.indexOf(prop) === -1) {
				events[prop] = that.props[prop];
				continue;
			}

			props[prop] = that.props[prop];
		}

		if (initialize) {
			that.nativeElement = this.componentRef.current;
		}

		for(let prop in props) {
			if (prop === 'class') {
				const classNames = props[prop].trim().split(' ');

				for(let className in classNames) {
					if (!that.nativeElement.classList.contains(classNames[className]) && classNames[className] !== "") {
						that.nativeElement.classList.add(classNames[className]);
					}
				}

				continue;
			}

			if (props[prop] !== that.nativeElement[prop]) {
				const normalizeProp = (str: string) => {
					return str.replace(/-([a-z])/g, function (g) {
						return g[1].toUpperCase();
					});
				}

				if (prop === 'hover' || prop === 'active' || prop === 'focus' || prop === 'selected') {
					that.nativeElement.setAttribute(prop, '');
				}

				const normalizedProp = normalizeProp(prop);

				that.nativeElement[normalizedProp] = props[prop];
			}
		}

		
		for(let eventName in events) {
			that[eventName] = events[eventName];
			that.nativeElement[eventName.toLowerCase()] = events[eventName];
        }

		if (initialize) {
			if (that.onCreate) {
				that.onCreate();
			}

			that.nativeElement.whenRendered(() => {
				if (that.onReady) {
					that.onReady();
				}
			});
		}

		// setup styles.

		if (styles) {
			for(let styleName in styles) {
				that.nativeElement.style[styleName] = styles[styleName];
			}
		}
	}

	componentDidMount() {
		this.componentDidRender(true);
    }

	componentDidUpdate() {
		this.componentDidRender(false);
    }

	componentWillUnmount() {
		const that = this;

		if (!that.nativeElement) {
			return;
		}
		
		that.nativeElement.whenRenderedCallbacks = [];
		
		for(let i = 0; i < that.eventListeners.length; i++){
			const eventName = that.eventListeners[i];

			that.nativeElement.removeEventListener(eventName.substring(2).toLowerCase(), that[eventName]);
		}
	}

	render() {
		return (
			React.createElement("smart-date-time-picker", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default DateTimePicker;
