import  {BaseElement, Animation} from "./smart.element"

export interface DateTimePickerProperties {
  /**
   * Defines or retrieves the current animation mode for the component. When this property is set to 'none', all animations are disabled. Setting it to other supported values enables the corresponding animation effects.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Enhances the animation behavior of the calendar pop-up when it is enabled by applying customizable animation settings.'Properties:'- 'startSpeed': Specifies the initial velocity of the animation when the calendar pop-up appears, controlling how quickly the animation begins.- 'easeThreshold': Defines the point within the animation at which the "ease effect" takes place, causing the animation to gradually slow down for a smoother transition.- 'step': Sets the interval at which the animation progresses (e.g., the number of pixels or frames per update), determining the smoothness and speed of the animation.- 'stepEaseSize': A multiplier used to calculate the new step size after the ease threshold has been crossed; this value fine-tunes how much the animation slows down.- 'resetThreshold': Establishes the limit at which the animation resets. Once this value is reached, the animation sequence restarts from the beginning.These settings allow for precise control over the appearance and feel of the calendar pop-up’s animation, providing an improved and customizable user experience.
   * Default value: null
   */
  animationSettings?: any;
  /**
   * Specifies whether the calendar button pop-up should automatically close after a user selects a date or time. If enabled, the pop-up will be dismissed immediately upon selection, providing a streamlined user experience. If disabled, the pop-up will remain open, allowing for multiple selections or further interaction.
   * Default value: false
   */
  autoClose?: boolean;
  /**
   * Specifies the duration, in milliseconds, to wait before automatically closing the calendar pop-up after it is triggered. This setting is effective only when autoClose is set to true.
   * Default value: 500
   */
  autoCloseDelay?: number;
  /**
   * Controls the visibility of the calendar button. When visible, this button allows users to open the calendar popup and select a date. If hidden, users will not have access to the calendar popup from the interface.
   * Default value: false
   */
  calendarButton?: boolean;
  /**
   * Specifies the placement of the calendar button relative to the input field. For example, this setting can position the calendar button to the left, right, above, or below the input, allowing for flexible UI customization.
   * Default value: right
   */
  calendarButtonPosition?: DropDownButtonPosition | string;
  /**
   * Specifies the display style of the calendar pop-up header, such as showing only the month, only the year, or both, to control how navigation and information are presented to the user.
   * Default value: default
   */
  calendarMode?: CalendarMode | string;
  /**
   * Specifies or retrieves the display format used for the day names (such as "Mon", "Monday", or "M") shown in the calendar popup. This determines how the days of the week are presented to users within the calendar interface.
   * Default value: firstTwoLetters
   */
  dayNameFormat?: DayFormat | string;
  /**
   * Determines whether the element is interactive or not. When enabled, the element can receive user input and respond to actions; when disabled, the element becomes inactive and cannot be interacted with by the user.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Prevents the calendar pop-up from automatically navigating to a different month when the user clicks on a date that belongs to another month (outside of the currently displayed month). This ensures that clicking on dates not in the current month view will not change the visible month.
   * Default value: false
   */
  disableAutoNavigation?: boolean;
  /**
   * Specifies the time zone in which the value should be displayed, ensuring that all date and time information is presented according to the selected region's local time settings. This affects how timestamps are interpreted and shown to the user.
   * Default value: unspecified
   */
  displayKind?: DateTimePickerDisplayKind | string;
  /**
   * Specifies the display format (month or year view) shown in the calendar pop-up when the calendarMode property is set to "Default". This setting controls whether users initially see a grid of months or a list of years, allowing for quicker navigation and selection within the calendar component.
   * Default value: table
   */
  displayModeView?: CalendarDisplayModeView | string;
  /**
   * Defines a custom container element where the pop-up will be appended. By default, the pop-up is appended within the DateTimePicker component itself. You can specify this property by providing either an HTML element (such as a DOM node) or the string ID of an existing HTML element on the page. This allows you to control the positioning and containment of the pop-up within your application's layout.
   * Default value: "null"
   */
  dropDownAppendTo?: string;
  /**
   * Defines or retrieves the pop-up display mode, specifying which components are shown within the pop-up and controlling how it behaves (such as its appearance, interaction options, and dismissal rules).
   * Default value: default
   */
  dropDownDisplayMode?: DateTimePickerDropDownDisplayMode | string;
  /**
   * When this property is enabled, opening the element's dropdown will display a transparent overlay that covers the area between the dropdown and the rest of the document. This overlay helps to visually separate the dropdown from other page content and can be used to intercept interactions with elements outside the dropdown while it is open.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Specifies the location on the screen where the pop-up will appear when it is activated, allowing you to control its alignment relative to a reference element or the viewport.
   * Default value: auto
   */
  dropDownPosition?: DropDownPosition | string;
  /**
   * Specifies the permitted methods for modifying the input's value, such as whether users can manually enter or edit text, select from predefined options, or if the input is read-only and cannot be changed.
   * Default value: default
   */
  editMode?: DateTimePickerEditMode | string;
  /**
   * Specifies whether the input value can be increased or decreased using the mouse wheel when the cursor is hovering over the input field. When enabled, scrolling the mouse wheel up increments the value, while scrolling down decrements it.
   * Default value: false
   */
  enableMouseWheelAction?: boolean;
  /**
   * Specifies which day of the week should be displayed as the first column in the calendar pop-up. Accepts values from 0 (Sunday) to 6 (Saturday), where each number corresponds to a day of the week. For example, setting this value to 1 will make Monday the first day of the week in the calendar view.
   * Default value: 0
   */
  firstDayOfWeek?: number;
  /**
   * Defines or retrieves the footer template used in the calendar pop-up. This property accepts either the ID of an HTMLTemplateElement or a direct reference to an HTMLTemplateElement. Assigning null reverts the calendar's footer to the default template. If a valid template is provided, it will be rendered in the footer area of the calendar pop-up, allowing for customized content or functionality.
   * Default value: null
   */
  footerTemplate?: any;
  /**
   * Specifies whether the footer section should be visible on the interface. Set this option to 'true' to display the footer, or 'false' to hide it.
   * Default value: false
   */
  footer?: boolean;
  /**
   * Specifies the format pattern used to display date and time values. You can use standard built-in format specifiers or custom format strings to control the appearance of the output.'Built-in Date and Time Format Specifiers:'| Specifier | Description                              | Example Output                     ||-----------|------------------------------------------|------------------------------------|| 'd'       | Short date pattern                       | 'M/d/yyyy' (e.g., 4/9/2024)        || 'D'       | Long date pattern                        | 'dddd, MMMM dd, yyyy' (e.g., Tuesday, April 9, 2024) || 't'       | Short time pattern                       | 'h:mm tt' (e.g., 3:45 PM)          || 'T'       | Long time pattern                        | 'h:mm:ss tt' (e.g., 3:45:30 PM)    || 'f'       | Long date, short time                    | 'dddd, MMMM dd, yyyy h:mm tt' (e.g., Tuesday, April 9, 2024 3:45 PM) || 'F'       | Long date, long time                     | 'dddd, MMMM dd, yyyy h:mm:ss tt' (e.g., Tuesday, April 9, 2024 3:45:30 PM) || 'M'       | Month/day pattern                        | 'MMMM dd' (e.g., April 09)         || 'Y'       | Year/month pattern                       | 'yyyy MMMM' (e.g., 2024 April)     || 'S'       | Sortable, culture-invariant date/time    | 'yyyy-MM-ddTHH:mm:ss' (e.g., 2024-04-09T15:45:30) |'Custom Date and Time Format Strings:'- 'Day'  - ''d''   : Day of the month (1–31)  - ''dd''  : Day of the month, two digits (01–31)  - ''ddd'' : Abbreviated weekday name (e.g., Tue)  - ''dddd'': Full weekday name (e.g., Tuesday)- 'Hour'  - ''h''   : 12-hour clock hour (1–12)  - ''hh''  : 12-hour clock hour, two digits (01–12)  - ''H''   : 24-hour clock hour (0–23)  - ''HH''  : 24-hour clock hour, two digits (00–23)- 'Minute'  - ''m''   : Minutes (0–59)  - ''mm''  : Minutes, two digits (00–59)- 'Month'  - ''M''   : Month (1–12)  - ''MM''  : Month, two digits (01–12)  - ''MMM'' : Abbreviated month name (e.g., Apr)  - ''MMMM'': Full month name (e.g., April)- 'Second'  - ''s''   : Seconds (0–59)  - ''ss''  : Seconds, two digits (00–59)- 'AM/PM Designator'  - ''t''   : First character of AM/PM (e.g., A or P)  - ''tt''  : AM/PM designator (e.g., AM or PM)- 'Year'  - ''y''     : Year, one or two digits (e.g., 0–99)  - ''yy''    : Year, two digits (e.g., 00–99)  - ''yyy''   : Year, minimum three digits (e.g., 2024)  - ''yyyy''  : Year, four digits (e.g., 2024)  - ''yyyyy'' : Year, at least five digits (pads with leading zeros if needed)For detailed formatting, custom format strings can be combined as needed, for example: ''yyyy-MM-dd HH:mm:ss'' would display as '2024-04-09 15:45:30'.'Note:' The output may vary according to localization and culture settings unless otherwise specified (e.g., the 'S' format is culture-invariant).
   * Default value: "dd-MMM-yy HH:mm:ss.fff"
   */
  formatString?: string;
  /**
   * Defines a custom header template for the calendar pop-up. You can provide either the string ID of an HTMLTemplateElement or a direct reference to an HTMLTemplateElement. The specified template will be used to render the header section of the calendar's pop-up interface.
   * Default value: null
   */
  headerTemplate?: any;
  /**
   * This option removes or conceals the display of weekday names (such as "Monday," "Tuesday," etc.) from the calendar pop-up, leaving only the days of the month visible to the user.
   * Default value: false
   */
  hideDayNames?: boolean;
  /**
   * Specifies whether days from adjacent months (previous or next) are displayed in the calendar pop-up. When enabled, dates that fall outside the currently selected month are shown in the calendar view, typically in a muted or lighter style. Disabling this option will hide these out-of-month days, so only the dates belonging to the current month are visible.
   * Default value: false
   */
  hideOtherMonthDays?: boolean;
  /**
   * Prevents the arrow indicator from being displayed in the calendar tooltip pop-up, resulting in a cleaner appearance without the arrow pointing to the trigger element.
   * Default value: false
   */
  hideTooltipArrow?: boolean;
  /**
   * Displays supplementary helper text beneath the element, which becomes visible exclusively when the element is focused. This text is intended to provide contextual guidance or instructions to users as they interact with the element.
   * Default value: ""
   */
  hint?: string;
  /**
   * Highlights specific dates in the calendar pop-up, marking them as important to make them stand out visually to users. These dates can be used to indicate special events, deadlines, or other significant occurrences.
   * Default value: 
   */
  importantDates?: string[] | Date[];
  /**
   * Defines the template used to display important dates within the calendar pop-up. This property accepts either the ID of an existing '' element or a direct reference to an 'HTMLTemplateElement' in the DOM. The specified template determines how important dates are rendered inside the calendar interface, allowing for custom formatting and content.
   * Default value: null
   */
  importantDatesTemplate?: string | HTMLTemplateElement;
  /**
   * Defines or retrieves the time interval used to increment or decrement the value of the date/time input when no specific segment (such as hours, minutes, or seconds) is actively highlighted or selected by the user. By default, this interval is set to 1 second. If you provide a numeric value, it should be specified in milliseconds. For example, passing 500 will set the interval to half a second. This setting determines how quickly the value changes when the user uses controls to adjust the input without a segment highlighted.
   * Default value: new JQX.Utilities.TimeSpan(0, 0, 1)
   */
  interval?: any;
  /**
   * Displays a descriptive label above the element to provide context or identify its purpose for users.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or retrieves the unlockKey, a unique key required to activate or access the product's features. When provided, the unlockKey enables the user to unlock and use the product.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the locale setting that determines the language and regional formatting used to display labels and other text elements within the DateTimePicker. This affects how dates, times, and UI labels are presented to the user, ensuring localization according to the selected language and region.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function that allows you to define a custom formatting for messages returned by the Localization Module. Use this to control how localized messages are structured or displayed before they are delivered to your application.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Specifies the maximum permitted value for this property. When set, values greater than this limit are not accepted. When retrieved, returns the current maximum value constraint.
   * Default value: new JQX.Utilities.DateTime(3001, 1, 1)
   */
  max?: any;
  /**
   * Defines or retrieves an object containing the text strings displayed in the widget, allowing these strings to be customized for different languages or regions. This property works together with the locale setting to enable localization, ensuring that the widget’s UI elements can be translated and adapted to the user’s language preferences.
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
   * Specifies the lowest permissible value that can be assigned. When setting, it defines the minimum value that is valid; when getting, it returns the current minimum constraint applied.
   * Default value: new JQX.Utilities.DateTime(1600, 1, 1)
   */
  min?: any;
  /**
   * Specifies or retrieves the value of the element's name attribute. This name is used as the key when the form data is submitted, allowing the server to identify and process the corresponding value for this element.
   * Default value: ""
   */
  name?: string;
  /**
   * Controls whether the value property can be set to null or an empty string. When this option is enabled and the user deletes the value in the input field, the value property is set to null, causing the placeholder text to be shown. If this option is disabled, deleting the input will automatically set the value property to the current date and time instead of null or an empty string.
   * Default value: false
   */
  nullable?: boolean;
  /**
   * Determines whether the calendar pop-up is currently open. You can use this property to programmatically open or close the calendar, or to check if it is visible to the user.
   * Default value: false
   */
  opened?: boolean;
  /**
   * Defines the placeholder text displayed in the input field when the value property is null. This text provides a visual hint or example to users, indicating the expected input until a value is entered.
   * Default value: "Enter date"
   */
  placeholder?: string;
  /**
   * Prevents users from interacting with the element by disabling all input events, such as clicks, taps, keyboard input, and form submissions. The element will not respond to any user actions while this setting is enabled.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Specifies or retrieves an array of dates—either as DateTime strings or JavaScript Date objects—that are disabled and cannot be selected by the user. This prevents selection of any date included in the array within the date picker or calendar component.
   * Default value: 
   */
  restrictedDates?: Date[];
  /**
   * Sets or retrieves a value that specifies whether the element's text direction is set to right-to-left (RTL), enabling proper alignment and display for languages and locales that use right-to-left scripts, such as Arabic or Hebrew.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies whether the spin buttons are visible. Spin buttons allow users to increment or decrement the date or time value by clicking up or down arrows. When enabled, these controls provide a convenient way to adjust the input without manual typing.
   * Default value: false
   */
  spinButtons?: boolean;
  /**
   * Specifies the time interval, in milliseconds, between consecutive activations of the spin buttons when they are held down. This determines how quickly the value will change while the button is continuously pressed.
   * Default value: 75
   */
  spinButtonsDelay?: number;
  /**
   * Specifies the delay, in milliseconds, before the spin button begins repeating its action after being pressed and held for the first time. This determines how long the user needs to hold down the spin button before subsequent value changes occur automatically.
   * Default value: 0
   */
  spinButtonsInitialDelay?: number;
  /**
   * Configures or retrieves the position of the spin buttons relative to the input field, such as placing them on the left, right, or another specified location. This property allows developers to control the layout and visual alignment of the spin buttons within the component.
   * Default value: right
   */
  spinButtonsPosition?: DateTimePickerSpinButtonsPosition | string;
  /**
   * Defines or retrieves the element's visual theme, such as its color scheme, style, or appearance, to ensure consistency with the application's overall design.
   * Default value: ""
   */
  theme?: string;
  /**
   * Controls whether tooltips are displayed for important dates in the calendar pop-up. When enabled, hovering over an important date shows additional information in a tooltip; when disabled, no tooltip appears.
   * Default value: false
   */
  tooltip?: boolean;
  /**
   * Specifies the amount of time (in milliseconds) to wait before displaying the tooltip for the calendar pop-up after the user hovers over or focuses on the relevant element.
   * Default value: 100
   */
  tooltipDelay?: number;
  /**
   * Specifies the location where the tooltip will appear relative to the calendar pop-up, such as above, below, to the left, or to the right of the calendar. This setting determines the tooltip’s alignment and positioning when users interact with the calendar interface.
   * Default value: top
   */
  tooltipPosition?: TooltipPosition | string;
  /**
   * Defines a custom template for the tooltip content displayed in the calendar pop-up. This property accepts either the ID of an HTML  element or a direct reference to an HTMLTemplateElement. The specified template will be used to render the tooltip, allowing for customized layout and content in the calendar interface.
   * Default value: null
   */
  tooltipTemplate?: string | HTMLTemplateElement;
  /**
   * Determines whether the element can receive keyboard focus, allowing users to interact with it using the Tab key or other navigation methods. This property can be used to enable or disable focusability programmatically. When set, it also allows you to check if the element is currently focusable.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Specifies the validation method that enforces minimum and maximum value constraints. This determines how the input value is checked to ensure it falls within the defined minimum and maximum range.
   * Default value: strict
   */
  validation?: Validation | string;
  /**
   * Sets or retrieves the value of the element. This value represents the current date and time associated with the element, stored as a DateTime object. When setting the value, you provide a DateTime object to update the element’s date and time. When getting the value, it returns the currently assigned DateTime object reflecting the element’s date and time.
   * Default value: new JQX.Utilities.DateTime()
   */
  value?: any;
  /**
   * Controls whether week numbers are displayed in the calendar pop-up. When enabled, a numerical label appears next to each week, making it easier for users to reference specific weeks. When disabled, these week numbers will not be shown.
   * Default value: false
   */
  weekNumbers?: boolean;
  /**
   * Specifies how many weeks are displayed at once in the calendar pop-up view, allowing you to control the visible portion of the calendar grid when it is opened. Adjusting this value changes the number of week rows shown to the user.
   * Default value: 6
   */
  weeks?: number;
  /**
   * Specifies the starting year of a 100-year range used to interpret 2-digit year values. By default, this is set to 1926, meaning that 2-digit years from 26 to 99 will be mapped to the years 1926 to 1999, and 2-digit years from 00 to 25 will be interpreted as 2000 to 2025. This setting ensures that legacy 2-digit year inputs are correctly converted to their corresponding 4-digit year representations within the defined century span.
   * Default value: 1926
   */
  yearCutoff?: number;
}
/**
 Date & time selection component. It allows to select both date and time with the same control.
*/
export interface DateTimePicker extends BaseElement, DateTimePickerProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the value associated with the component or input field is modified by the user or programmatically. It activates each time a change is detected, allowing you to respond to updates in real-time, such as validating input, updating UI elements, or saving new data.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The old value before it was changed presented as a DateTime object.
   *  value - The new value presented as a DateTime object.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when the calendar pop-up is closed by the user, either by selecting a date or dismissing the pop-up through other means (such as clicking outside the calendar or pressing the Escape key).
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /**
   * This event is fired immediately before the calendar pop-up is closed. At this stage, event handlers have the opportunity to intercept the closing action. If you want to prevent the calendar from closing—for example, to validate user input or display a confirmation message—you can call event.preventDefault() within your event handler. Doing so will cancel the close operation, keeping the calendar pop-up open until the condition is resolved.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the calendar pop-up component becomes visible to the user, such as when a user clicks on the input field or calendar icon to display the calendar interface.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event fires immediately before the calendar pop-up is displayed to the user. Developers can intercept this event and prevent the calendar from opening by invoking event.preventDefault() within the event handler. This allows for custom validation or logic to be executed prior to showing the calendar interface.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Triggers the closure of the calendar pop-up window, removing it from view and returning focus to the primary interface.
   */
  close(): void;
  /**
   * Sets the keyboard focus to the input field, allowing users to immediately begin typing without needing to click on the input. This improves usability by enabling faster and more intuitive data entry.
   */
  focus(): void;
  /**
   * Displays the calendar pop-up, allowing users to select a date from an interactive calendar interface.
   */
  open(): void;
  /**
   * Automatically highlights all the text contained within the input field, allowing users to easily copy, cut, or overwrite the current content.
   */
  select(): void;
  /**
   * Retrieves and returns a JavaScript Date object representing a specific point in time.
   * @returns {Date}
   */
  getDate(): Date;
  /**
   * Specifies the selected date to be displayed and managed by the DateTimePicker component. Setting this value determines the currently chosen date shown in the picker interface.
   * @param {Date} date. The date object to be set.
   */
  setDate(date: Date): void;
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

/**Specifies the placement of the calendar button relative to the input field. For example, this setting can position the calendar button to the left, right, above, or below the input, allowing for flexible UI customization. */
export declare type DropDownButtonPosition = 'left' | 'right';
/**Specifies the display style of the calendar pop-up header, such as showing only the month, only the year, or both, to control how navigation and information are presented to the user. */
export declare type CalendarMode = 'default' | 'classic';
/**Specifies or retrieves the display format used for the day names (such as "Mon", "Monday", or "M") shown in the calendar popup. This determines how the days of the week are presented to users within the calendar interface. */
export declare type DayFormat = 'narrow' | 'firstTwoLetters' | 'long' | 'short';
/**Specifies the time zone in which the value should be displayed, ensuring that all date and time information is presented according to the selected region's local time settings. This affects how timestamps are interpreted and shown to the user. */
export declare type DateTimePickerDisplayKind = 'UTC' | 'local' | 'unspecified';
/**Specifies the display format (month or year view) shown in the calendar pop-up when the calendarMode property is set to "Default". This setting controls whether users initially see a grid of months or a list of years, allowing for quicker navigation and selection within the calendar component. */
export declare type CalendarDisplayModeView = 'table' | 'list';
/**Defines or retrieves the pop-up display mode, specifying which components are shown within the pop-up and controlling how it behaves (such as its appearance, interaction options, and dismissal rules). */
export declare type DateTimePickerDropDownDisplayMode = 'auto' | 'default' | 'classic' | 'calendar' | 'timePicker';
/**Specifies the location on the screen where the pop-up will appear when it is activated, allowing you to control its alignment relative to a reference element or the viewport. */
export declare type DropDownPosition = 'auto' | 'top' | 'bottom' | 'overlay-top' | 'overlay-center' | 'overlay-bottom' | 'center-bottom' | 'center-top';
/**Specifies the permitted methods for modifying the input's value, such as whether users can manually enter or edit text, select from predefined options, or if the input is read-only and cannot be changed. */
export declare type DateTimePickerEditMode = 'default' | 'full' | 'partial';
/**Configures or retrieves the position of the spin buttons relative to the input field, such as placing them on the left, right, or another specified location. This property allows developers to control the layout and visual alignment of the spin buttons within the component. */
export declare type DateTimePickerSpinButtonsPosition = 'left' | 'right';
/**Specifies the location where the tooltip will appear relative to the calendar pop-up, such as above, below, to the left, or to the right of the calendar. This setting determines the tooltip’s alignment and positioning when users interact with the calendar interface. */
export declare type TooltipPosition = 'auto' | 'absolute' | 'bottom' | 'top' | 'left' | 'right';
/**Specifies the validation method that enforces minimum and maximum value constraints. This determines how the input value is checked to ensure it falls within the defined minimum and maximum range. */
export declare type Validation = 'strict' | 'interaction';
