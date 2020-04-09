import  {BaseElement, Animation} from "./smart.element"

/**
 Date & time selection component. It allows to select both date and time with the same control.
*/
export interface DateTimePicker extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Applies new animation settings to the calendar pop-up when it is enabled. Properties:startSpeed - Determines the initial speed of the animation.easeThreshold - Determines the point at which the animation starts to slow down - the "ease effect".step - Determines the step ( scrolling interval ) at which the animation will run. stepEaseSize - Coefficient that is used to calculated the new step once the threshold has been passed. resetThreshold - Determines the threshold for animation reset. When it's reached the animation will start over.
   * Default value: null
   */
  animationSettings?: any;
  /**
   * Determines whether the calendar button pop-up will be closed automatically when date or time is selected through it.
   * Default value: false
   */
  autoClose?: boolean;
  /**
   * Determines the delay before the calendar pop-up is automatically closed. Applicable only when autoClose is set to true.
   * Default value: 500
   */
  autoCloseDelay?: boolean;
  /**
   * Determines whether the calendar button is visible or not. The calendar button is used to open the Calendar popup to select a date.
   * Default value: false
   */
  calendarButton?: boolean;
  /**
   * Determines the position of the calendar button.
   * Default value: right
   */
  calendarButtonPosition?: DropDownButtonPosition;
  /**
   * Determines the header mode of the calendar pop-up.
   * Default value: default
   */
  calendarMode?: CalendarMode;
  /**
   * Sets or gets the format of calendar pop-up's day names.
   * Default value: firstTwoLetters
   */
  dayNameFormat?: DayFormat;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Disables auto navigation of the calendar pop-up when the user clicks on a date that's not from month in view.
   * Default value: false
   */
  disableAutoNavigation?: boolean;
  /**
   * Determines the time zone to display the value in.
   * Default value: unspecified
   */
  displayKind?: DateTimePickerDisplayKind;
  /**
   * Determines the type of the month/year view in the calendar pop-up when calendarMode is set to Default.
   * Default value: table
   */
  displayModeView?: CalendarDisplayModeView;
  /**
   * Sets custom container to append the pop-up to. By default, it is in the DateTimePicker. The value of the property can be an HTML element or the id of an HTML element.
   * Default value: null
   */
  dropDownAppendTo?: any;
  /**
   * Sets or gets the pop-up display mode (what components appear in it, and its behaviour).
   * Default value: default
   */
  dropDownDisplayMode?: DateTimePickerDropDownDisplayMode;
  /**
   * If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Determines the pop-up position when opened.
   * Default value: auto
   */
  dropDownPosition?: DropDownPosition;
  /**
   * Determines how the the value can be edited inside the input.
   * Default value: default
   */
  editMode?: DateTimePickerEditMode;
  /**
   * Determines whether the value can be incremented/decremented with the mouse wheel when the mouse is over the input.
   * Default value: false
   */
  enableMouseWheelAction?: boolean;
  /**
   * Determines the first day of the week of the calendar pop-up. From 0(Sunday) to 6(Saturday)
   * Default value: 0
   */
  firstDayOfWeek?: number;
  /**
   * Sets or gets the footer template of the calendar pop-up. The value of this property can be the id of an HTMLTemplateElement or the HTMLTemplateElement itself. If set to null, a default template is applied.
   * Default value: null
   */
  footerTemplate?: any;
  /**
   * Determines the pattern that is used to display the value in.
   * Default value: "dd-MMM-yy HH:mm:ss.fff"
   */
  formatString?: string;
  /**
   * Sets custom header template for the calendar pop-up. Accepts the id of an HTMLTemplateElement or a reference ot it.
   * Default value: null
   */
  headerTemplate?: any;
  /**
   * Hides the names of the weekdays in the calendar pop-up.
   * Default value: false
   */
  hideDayNames?: boolean;
  /**
   * Determines if dates from other months are visible or not in the calendar pop-up.
   * Default value: false
   */
  hideOtherMonthDays?: boolean;
  /**
   * Hides the arrow of the tooltip in the calendar pop-up.
   * Default value: false
   */
  hideTooltipArrow?: boolean;
  /**
   * Sets additional helper text below the element that appears only when the element is focused.
   * Default value: ""
   */
  hint?: string;
  /**
   * Sets dates, displayed as important in the calendar pop-up.
   * Default value: 
   */
  importantDates?: string[];
  /**
   * Sets a template for the important dates of the calendar pop-up. Accepts the id of or a reference to an HTMLTemplateElement.
   * Default value: null
   */
  importantDatesTemplate?: string | HTMLTemplateElement;
  /**
   * Sets or gets the increment/decrement interval when a date/time segment inside the input has not been highlighted. The default interval is 1 second. If a numeric value is passed, it represents milliseconds.
   * Default value: new JQX.Utilities.TimeSpan(0, 0, 1)
   */
  interval?: any;
  /**
   * Sets a label above the element.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets the locale that determines what language is used to localize the labels inside the DateTimePicker.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Sets or gets the maximum allowed value.
   * Default value: new JQX.Utilities.DateTime(3001, 1, 1)
   */
  max?: any;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid '!",
   *     "propertyInvalidValueType": "Invalid '!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": ".",
   *     "htmlTemplateNotSuported": ": Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "now": "Now",
   *     "dateTabLabel": "DATE",
   *     "timeTabLabel": "TIME"
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the minimum allowed value.
   * Default value: new JQX.Utilities.DateTime(1600, 1, 1)
   */
  min?: any;
  /**
   * Sets or gets the element's name, which is used as a reference when the data is submitted in a form.
   * Default value: ""
   */
  name?: string;
  /**
   * Enables or disables the setting of the value property to be null or empty string. If the property is enabled and the value in the input is deleted, the value will be set to null and the placeholder will be displayed. Otherwise, the current date and time will be set.
   * Default value: false
   */
  nullable?: boolean;
  /**
   * Sets or gets whether the calendar pop-up is opened.
   * Default value: false
   */
  opened?: boolean;
  /**
   * Sets or gets the placeholder text to be shown in the input when value is null.
   * Default value: "Enter date"
   */
  placeholder?: string;
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets an array of dates (DateTime or Date objects) that cannot be selected.
   * Default value: 
   */
  restrictedDates?: Date[];
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Sets or gets whether the spin buttons are displayed. Spin buttons are used to increment/decrement the date/time.
   * Default value: false
   */
  spinButtons?: boolean;
  /**
   * Sets the delay between repeats of the spin buttons in miliseconds.
   * Default value: 75
   */
  spinButtonsDelay?: number;
  /**
   * Sets a delay before the first repeat iteration of spin buttons in miliseconds.
   * Default value: 0
   */
  spinButtonsInitialDelay?: number;
  /**
   * Sets or gets the position of the spin buttons.
   * Default value: right
   */
  spinButtonsPosition?: DateTimePickerSpinButtonsPosition;
  /**
   * Sets or gets the element's visual theme. 
   * Default value: ""
   */
  theme?: string;
  /**
   * Enables/Disabled the tooltip for the important dates in the calendar pop-up.
   * Default value: false
   */
  tooltip?: boolean;
  /**
   * Sets the delay of the calendar pop-up's tooltip before it appears.
   * Default value: 100
   */
  tooltipDelay?: number;
  /**
   * Sets the position of the tooltip in the calendar pop-up.
   * Default value: top
   */
  tooltipPosition?: TooltipPosition;
  /**
   * Sets a template for the content of the calendar pop-up's tooltip. Accepts the id of or a reference to an HTMLTemplateElement.
   * Default value: null
   */
  tooltipTemplate?: string | HTMLTemplateElement;
  /**
   * Sets or gets if the element can be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Determines the validation mechanism for the value by min/max.
   * Default value: strict
   */
  validation?: Validation;
  /**
   * Sets or gets the value. The value represents the current date/time that is set to the element as a DateTime object.
   * Default value: new JQX.Utilities.DateTime()
   */
  value?: any;
  /**
   * Enables/Disabled week numbering in the calendar pop-up. 
   * Default value: false
   */
  weekNumbers?: boolean;
  /**
   * Determines the number of visible weeks in the calendar pop-up.
   * Default value: 6
   */
  weeks?: number;
  /**
   * Determines the first year of a 100 year span within which 2-digit years fall. The default value, 1926, would interpret the 2-digit year values 26-99 as 1926 to 1999 and values 00-25 as being 2000 to 2025.
   * Default value: 1926
   */
  yearCutoff?: number;
  /** 
   * This event is triggered when the value is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The old value before it was changed presented as a DateTime object.
   *  value - The new value presented as a DateTime object.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the calendar pop-up is closed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the calendar pop-up is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the calendar pop-up is opened.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the calendar pop-up is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | null;
  /**
   * Closes the calendar pop-up.
   */
  close(): void;
  /**
   * Focuses the input.
   */
  focus(): void;
  /**
   * Opens the calendar pop-up.
   */
  open(): void;
  /**
   * Selects the text inside the input.
   */
  select(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-date-time-picker"): DateTimePicker;
			querySelector(selectors: "smart-date-time-picker"): DateTimePicker | null;	
			querySelectorAll(selectors: "smart-date-time-picker"): NodeListOf<DateTimePicker>;
			getElementsByTagName(qualifiedName: "smart-date-time-picker"): HTMLCollectionOf<DateTimePicker>;
			getElementsByName(elementName: "smart-date-time-picker"): NodeListOf<DateTimePicker>;	
    }
}

/**Determines the position of the calendar button. */
export declare type DropDownButtonPosition = 'left' | 'right';
/**Determines the header mode of the calendar pop-up. */
export declare type CalendarMode = 'default' | 'classic';
/**Sets or gets the format of calendar pop-up's day names. */
export declare type DayFormat = 'narrow' | 'firstTwoLetters' | 'long' | 'short';
/**Determines the time zone to display the value in. */
export declare type DateTimePickerDisplayKind = 'UTC' | 'local' | 'unspecified';
/**Determines the type of the month/year view in the calendar pop-up when calendarMode is set to Default. */
export declare type CalendarDisplayModeView = 'table' | 'list';
/**Sets or gets the pop-up display mode (what components appear in it, and its behaviour). */
export declare type DateTimePickerDropDownDisplayMode = 'auto' | 'default' | 'classic' | 'calendar' | 'timePicker';
/**Determines the pop-up position when opened. */
export declare type DropDownPosition = 'auto' | 'top' | 'bottom' | 'overlay-top' | 'overlay-center' | 'overlay-bottom' | 'center-bottom' | 'center-top';
/**Determines how the the value can be edited inside the input. */
export declare type DateTimePickerEditMode = 'default' | 'full' | 'partial';
/**Sets or gets the position of the spin buttons. */
export declare type DateTimePickerSpinButtonsPosition = 'left' | 'right';
/**Sets the position of the tooltip in the calendar pop-up. */
export declare type TooltipPosition = 'auto' | 'absolute' | 'bottom' | 'top' | 'left' | 'right';
/**Determines the validation mechanism for the value by min/max. */
export declare type Validation = 'strict' | 'interaction';
