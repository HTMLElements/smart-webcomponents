import  {BaseElement, Animation} from "./smart.element"

/**
 Calendar allows user to easily select one or more dates. This control supports multi-calendar view, special dates, holidays, weekends, decade views.
*/
export interface Calendar extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Applies new animation settings when it is enabled. Properties:startSpeed - Determines the initial speed of the animation.easeThreshold - Determines the point at which the animation starts to slow down - the "ease effect".step - Determines the step ( scrolling interval ) at which the animation will run. stepEaseSize - Coefficient that is used to calculated the new step once the threshold has been passed. resetThreshold - Determines the threshold for animation reset. When it's reached the animation will start over.
   * Default value: null
   */
  animationSettings?: any;
  /**
   * Determines the date controls inside the header of the Calendar.
   * Default value: default
   */
  calendarMode?: CalendarMode;
  /**
   * Determines the format of the day names located above the days inside the calendar.
   * Default value: firstTwoLetters
   */
  dayNameFormat?: DayFormat;
  /**
   *  A callback that can be used to customize the format of the month name when calendarMode is set to 'default'.
   * Default value: null
   */
  dateFormatFunction?: any;
  /**
   * Enables or disables the Calendar.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Disables auto navigation when the user clicks on a date that's not from the current month in view.
   * Default value: false
   */
  disableAutoNavigation?: boolean;
  /**
   * Determines the date view of the calendar when calendarMode is set to 'default'
   * Default value: month
   */
  displayMode?: CalendarDisplayMode;
  /**
   * Determines the type of the month/year view when calendarMode is set to Default.
   * Default value: table
   */
  displayModeView?: CalendarDisplayModeView;
  /**
   * Determines the height of the month's drop down inside the Calendar.
   * Default value: "200"
   */
  dropDownHeight?: string;
  /**
   * Determines the width of the month's drop down inside the Calendar.
   * Default value: ""
   */
  dropDownWidth?: string;
  /**
   * Determines the first day of the week. From 0(Sunday) to 6(Saturday)
   * Default value: 0
   */
  firstDayOfWeek?: number;
  /**
   * Sets a custom footer template. Accepts the id of an HTMLTemplateElement or a reference ot it.
   * Default value: null
   */
  footerTemplate?: any;
  /**
   * Sets custom header template. Accepts the id of an HTMLTemplateElement or a reference ot it.
   * Default value: null
   */
  headerTemplate?: any;
  /**
   * Hides the names of the weekdays.
   * Default value: false
   */
  hideDayNames?: boolean;
  /**
   * Hides the dates from other months.
   * Default value: false
   */
  hideOtherMonthDays?: boolean;
  /**
   * Hides the arrow of the tooltip.
   * Default value: false
   */
  hideTooltipArrow?: boolean;
  /**
   * Sets the dates that will be displayed as important.
   * Default value: 
   */
  importantDates?: string[];
  /**
   * Sets a template for the important dates. Accepts the id of an HTMLTemplate element inside the DOM of or a reference to it.
   * Default value: null
   */
  importantDatesTemplate?: any;
  /**
   *  Determines the language of the Calendar. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Determines the max date for the Calendar. Accepts date objects and valid date string formats.
   * Default value: new Date(2100, 1, 1)
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines the min date for the Calendar. Accepts date objects and valid date string formats.
   * Default value: new Date(1900, 1, 1)
   */
  min?: any;
  /**
   * Determines the number of months to be displayed inside the calendar. The maximum amount of months that can be shown is 12. By default only 1 month is shown.
   * Default value: 1
   */
  months?: number;
  /**
   * Determines the format of the month names in the header when DisplayMode is set to Default or when Months property is greater than 1. 
   * Default value: long
   */
  monthNameFormat?: MonthFormat;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets restricted dates. Restricted dates are dates that cannot be selected/hovered/focused. They are visualy styled as restricted. The dates can be javascript date objects or strings representing a valid date.
   * Default value: 
   */
  restrictedDates?: string[];
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   *  Determines the direction of the navigation buttons located in the header and the animation.
   * Default value: landscape
   */
  scrollButtonsNavigationMode?: ViewLayout;
  /**
   *  Determines the position of the navigation buttons located inside the header. 
   * Default value: both
   */
  scrollButtonsPosition?: LayoutPosition;
  /**
   * Sets the dates that will be selected. Selected dates are styled differently than the rest. The dates can be Date objects or strings in a valid date format.
   * Default value: 
   */
  selectedDates?: string[];
  /**
   * Determines the date selection mode.
   * Default value: default
   */
  selectionMode?: CalendarSelectionMode;
  /**
   * Sets the delay between clicks of the date navigation buttons located in the header of the Calendar. 
   * Default value: 80
   */
  spinButtonsDelay?: number;
  /**
   * Determines the initial delay before the action of the date navigation buttons located in the header of the Calendar. 
   * Default value: 0
   */
  spinButtonsInitialDelay?: number;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets a template for the title section of the Calendar. Accepts the id of an HTMLTemplate element inside the DOM of or a reference it.
   * Default value: null
   */
  titleTemplate?: any;
  /**
   * Enables/Disabled the tooltip for the important dates. If enabled when an important date is hovered a tooltip is displayed.
   * Default value: false
   */
  tooltip?: boolean;
  /**
   * Show/Hide the arrow of the the tooltip for the important dates. By default the arrow is visible.
   * Default value: true
   */
  tooltipArrow?: boolean;
  /**
   * Sets the delay of the tooltip before it appears.
   * Default value: 100
   */
  tooltipDelay?: number;
  /**
   * Set's a custom offset to the tooltip's position. Accepts an array of two numbers: the left coordinate and the top coordinate.
   * Default value: 
   */
  tooltipOffset?: number[][];
  /**
   * Sets the position of the tooltip.
   * Default value: top
   */
  tooltipPosition?: TooltipPosition;
  /**
   * Sets a template for the tooltip's content. Accepts the id of an HTMLTEmplate element inside the DOM or it's reference.
   * Default value: null
   */
  tooltipTemplate?: any;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Determines the orientation of the Calendar.
   * Default value: portrait
   */
  view?: ViewLayout;
  /**
   * Determines the visible sections of the Calendar. The view sections are : title, header, footer. Multiple sections can be applied at the same time. By default only the 'header' section is visible.
   * Default value: header
   */
  viewSections?: string[];
  /**
   * Enables/Disabled week numbering. If enabled week numbers are displayed infront of each week inside the Calendar.
   * Default value: false
   */
  weekNumbers?: boolean;
  /**
   * Determines the number of visible weeks. The value of the property ranges from 1 to 6. Where 1 is one week and 6 is a full month ( 6 weeks ).
   * Default value: 6
   */
  weeks?: number;
  /**
   * Determines the year format in the header when DisplayMode is set to Default or when Months property is greater than 1.
   * Default value: numeric
   */
  yearFormat?: YearFormat;
  /** 
   * This event is triggered when a new date has been selected/unselected.
	* @param event. The custom event. Custom data event was created with: ev.detail(value)
   *  value - An array of all currently selected dates.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the displayMode is about to change. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldDisplayMode, newDisplayMode)
   *  oldDisplayMode - The previous display mode.
   *  newDisplayMode - The new display mode.
   */
  onDisplayModeChanging?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the display mode has changed.
	* @param event. The custom event.    */
  onDisplayModeChange?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the view is changing. This navigation can be cancelled by using the preventDefault method.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, type)
   *  value - The view's date.
   *  type - The view type - 'month', 'decade' or 'year'.
   */
  onNavigationChanging?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the view is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, type)
   *  value - The view's date.
   *  type - The view type - 'month', 'decade' or 'year'.
   */
  onNavigationChange?: ((this: any, ev: Event) => any) | null;
  /**
   * Clears the selection. Removes all seleceted dates.
   */
  clearSelection(): void;
  /**
   * Navigates forwards/backwards depending on the argument.
   * @param {number | Date | string} step. The argument can be the following: <ul><li> number -  representing the number of months to scroll. Can be negavtive. If negative it will scroll backwards.</li><li> Date - a date object representing the Date to navigate to.</li><li> string - a string representing a valid Date, e.g. "2020-10-1" </li></ul>
   * @returns {boolean}
   */
  navigate(step: number | Date | string): boolean;
  /**
   * Selects or Unselects a date.
   * @param {Date | string} date. The date to be selected or unselected. The date can be a Date object or a string in valid date format.
   */
  select(date: Date | string): void;
  /**
   * Selects today's date.
   * @returns {Date}
   */
  today(): Date;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-calendar"): Calendar;
			querySelector(selectors: "smart-calendar"): Calendar | null;	
			querySelectorAll(selectors: "smart-calendar"): NodeListOf<Calendar>;
			getElementsByTagName(qualifiedName: "smart-calendar"): HTMLCollectionOf<Calendar>;
			getElementsByName(elementName: "smart-calendar"): NodeListOf<Calendar>;	
    }
}

/**Determines the date controls inside the header of the Calendar. */
export declare type CalendarMode = 'default' | 'classic';
/**Determines the format of the day names located above the days inside the calendar. */
export declare type DayFormat = 'narrow' | 'firstTwoLetters' | 'long' | 'short';
/**Determines the date view of the calendar when calendarMode is set to 'default' */
export declare type CalendarDisplayMode = 'month' | 'year' | 'decade';
/**Determines the type of the month/year view when calendarMode is set to Default. */
export declare type CalendarDisplayModeView = 'table' | 'list';
/**Determines the format of the month names in the header when DisplayMode is set to Default or when Months property is greater than 1. <br/> */
export declare type MonthFormat = 'narrow' | 'firstTwoLetters' | 'long' | 'short' | '2-digit' | 'numeric';
/**Determines the orientation of the Calendar. */
export declare type ViewLayout = 'landscape' | 'portrait';
/** Determines the position of the navigation buttons located inside the header.  */
export declare type LayoutPosition = 'near' | 'far' | 'both';
/**Determines the date selection mode. */
export declare type CalendarSelectionMode = null | 'default' | 'many' | 'one' | 'oneOrMany' | 'range' | 'week' | 'zeroOrMany' | 'zeroOrOne';
/**Sets the position of the tooltip. */
export declare type TooltipPosition = 'auto' | 'absolute' | 'bottom' | 'top' | 'left' | 'right';
/**Determines the year format in the header when DisplayMode is set to Default or when Months property is greater than 1.<br/> */
export declare type YearFormat = '2-digit' | 'numeric';
