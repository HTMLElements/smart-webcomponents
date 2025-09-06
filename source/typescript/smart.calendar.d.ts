import  {BaseElement, Animation} from "./smart.element"

export interface CalendarProperties {
  /**
   * Specifies or retrieves the current animation mode. When this property is set to 'none', all animations are disabled. Setting it to other supported values enables the corresponding animation effects.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Enhances the animation behavior by applying new settings when enabled.Properties:      startSpeed – Specifies the initial speed at which the animation begins, allowing you to control how quickly the animation starts.        easeThreshold – Defines the point during the animation where the "ease effect" starts, meaning the animation begins to slow down for a smoother transition.        step – Sets the interval for each frame or update of the animation, effectively controlling how smoothly or incrementally the animation moves.        stepEaseSize – A coefficient used to calculate the updated step size once the animation passes the easeThreshold, increasing the ease-in/ease-out effect as the animation decelerates.        resetThreshold – Determines the point at which the animation will automatically reset and start from the beginning, allowing for looping or repeated motion.  
   * Default value: null
   */
  animationSettings?: any;
  /**
   * Specifies the configuration and behavior of the date selection controls displayed within the header section of the Calendar component, such as navigation buttons, month and year dropdowns, or other tools that allow users to change the visible date range.
   * Default value: default
   */
  calendarMode?: CalendarMode | string;
  /**
   * Specifies the display format for the names of the days of the week that appear as headers above the calendar grid. This setting controls whether the day names are shown in full (e.g., "Monday"), as abbreviations (e.g., "Mon"), or as single letters (e.g., "M").
   * Default value: firstTwoLetters
   */
  dayNameFormat?: DayFormat | string;
  /**
   * A callback function that allows you to customize the display format of month names when the calendarMode property is set to 'default'. Use this callback to define how month names should appear (e.g., full name, abbreviation, localization) in the calendar interface.
   * Default value: null
   */
  dateFormatFunction?: any;
  /**
   * Controls whether the Calendar feature is active or inactive. When enabled, the Calendar is accessible to users; when disabled, the Calendar is inactive.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Prevents the calendar from automatically navigating to a different month when the user clicks on a date cell that belongs to a month other than the one currently displayed. This ensures that selecting dates outside the visible month will not change the current view.
   * Default value: false
   */
  disableAutoNavigation?: boolean;
  /**
   * Configures whether the mouse wheel can be used to navigate or change dates in the Calendar component. When enabled, scrolling the mouse wheel will move between calendar views or dates; when disabled, the mouse wheel will have no effect on the calendar.
   * Default value: false
   */
  disableMouseWheel?: boolean;
  /**
   * Specifies which date is initially displayed in the calendar when calendarMode is set to 'default'. This property controls the starting visible month or day in the calendar interface, allowing you to set the user's initial view to a specific date.
   * Default value: month
   */
  displayMode?: CalendarDisplayMode | string;
  /**
   * Specifies the layout style displayed for the month or year view when calendarMode is set to "Default." This setting controls how dates are visually organized and presented to the user, such as showing days within a month grid or listing months within a year, depending on the selected calendar mode.
   * Default value: table
   */
  displayModeView?: CalendarDisplayModeView | string;
  /**
   * Specifies the vertical height, in pixels, of the month selection dropdown within the Calendar component. This setting controls how much space the dropdown occupies when users select a month. Adjusting this value can improve usability and visual consistency with other UI elements.
   * Default value: 200
   */
  dropDownHeight?: string | number;
  /**
   * Specifies the width of the month selection dropdown within the Calendar component. This property controls how wide the dropdown appears, allowing you to adjust its size for better alignment or readability within the Calendar interface.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Specifies which day is considered the start of the week, using a numeric value where 0 represents Sunday, 1 represents Monday, up to 6 for Saturday. For example, setting the value to 1 makes Monday the first day of the week.
   * Default value: 0
   */
  firstDayOfWeek?: number;
  /**
   * Defines a custom footer template for the component. You can provide either the ID of an existing '' element in the DOM, or pass a direct reference to an 'HTMLTemplateElement'. The specified template will be used to render the footer section of the component.
   * Default value: null
   */
  footerTemplate?: any;
  /**
   * Defines a custom header template for the component. You can provide either the string ID of an existing HTMLTemplateElement in the DOM or a direct reference to an HTMLTemplateElement. The specified template will be used to render the header section.
   * Default value: null
   */
  headerTemplate?: any;
  /**
   * Conceals the display of weekday names in the user interface, ensuring that the days of the week (e.g., Monday, Tuesday, etc.) are not visible to users.
   * Default value: false
   */
  hideDayNames?: boolean;
  /**
   * Prevents dates that belong to adjacent months from being displayed, ensuring that only the days within the current month are visible in the calendar view.
   * Default value: false
   */
  hideOtherMonthDays?: boolean;
  /**
   * Determines whether the tooltip’s arrow indicator is visible. When enabled, the arrow will be hidden and only the tooltip’s content will be displayed.
   * Default value: false
   */
  hideTooltipArrow?: boolean;
  /**
   * Defines the specific dates that will be visually highlighted or marked as important within the interface. These dates can be used to indicate events, deadlines, holidays, or other noteworthy occasions that should stand out to users when viewing the calendar or date selector component.
   * Default value: 
   */
  importantDates?: string[] | Date[];
  /**
   * Defines a template for displaying important dates. This property accepts either the ID of an HTML '' element present in the DOM, or a direct reference to that template element. The specified template will be used to render each important date in the component.
   * Default value: null
   */
  importantDatesTemplate?: any;
  /**
   * Sets or retrieves the unlockKey, a unique identifier or code used to grant access to the product's locked features or content.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies the language used for displaying all calendar elements, such as month names, day labels, and interface text, ensuring the calendar is localized for the selected language.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function that allows you to define a custom format for messages returned by the Localization Module, enabling you to modify, wrap, or translate message content before it is delivered to the application.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Specifies the latest selectable date for the Calendar component. Accepts JavaScript Date objects or valid date string formats (e.g., 'YYYY-MM-DD', ISO 8601). Dates beyond this value will be disabled and cannot be selected by the user.
   * Default value: new Date(2100, 1, 1)
   */
  max?: string | Date;
  /**
   * Sets or retrieves an object containing the text strings displayed by the widget, allowing these strings to be customized for different languages and regions. This property is intended for localization and works together with the locale property to support multiple languages in the widget’s user interface.
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
   * Specifies the earliest selectable date for the Calendar component. Accepts either JavaScript Date objects or strings in valid date formats (e.g., 'YYYY-MM-DD'). Dates earlier than this value will be disabled and cannot be selected.
   * Default value: new Date(1900, 1, 1)
   */
  min?: string | Date;
  /**
   * Specifies how many months are displayed simultaneously within the calendar interface. You can select any value between 1 and 12, with 12 being the maximum number of months shown at once. If this property is not set, the calendar will display only a single month by default.
   * Default value: 1
   */
  months?: number;
  /**
   * Specifies how month names are displayed in the header when DisplayMode is set to "Default" or when the Months property has a value greater than 1. This setting controls whether month names appear in their full, abbreviated, or custom format within the header section, improving readability and user interface customization.
   * Default value: long
   */
  monthNameFormat?: MonthFormat | string;
  /**
   * Sets or retrieves the value of the element’s name attribute. This attribute identifies the element when submitting HTML forms, allowing its data to be included with the specified name as part of the form data sent to the server.
   * Default value: ""
   */
  name?: string;
  /**
   * When the element is set to "readonly," users can see its content but cannot modify or edit its value. While the element remains focusable, all user input and changes are disabled, preventing any interaction that would alter its contents.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Defines a list of restricted dates that the user cannot select, hover over, or focus on within the date picker. These dates will be visually indicated as unavailable or disabled in the interface. Each restricted date can be provided as either a JavaScript Date object or a string in a recognized date format (such as 'YYYY-MM-DD'). Any date included in this list will be unselectable and visually styled to indicate its restricted status.
   * Default value: 
   */
  restrictedDates?: string[] | Date[];
  /**
   * Specifies or retrieves a value that determines whether the element's content alignment supports right-to-left (RTL) languages and scripts, such as Arabic or Hebrew. Enabling this property ensures that text and layout are properly adjusted for locales that require RTL formatting.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the orientation (horizontal or vertical) of the navigation buttons displayed in the header, and sets the direction in which the accompanying animation plays.
   * Default value: landscape
   */
  scrollButtonsNavigationMode?: ViewLayout | string;
  /**
   * Specifies the alignment and placement of navigation buttons within the header section, controlling whether they appear on the left, center, or right side of the header.
   * Default value: both
   */
  scrollButtonsPosition?: LayoutPosition | string;
  /**
   * Specifies the dates that should appear as selected within the component. These selected dates are visually distinguished from unselected dates using a different style or highlight. You can provide the selected dates either as JavaScript Date objects or as strings formatted in any valid date representation (e.g., 'YYYY-MM-DD').
   * Default value: 
   */
  selectedDates?: string[] | Date[];
  /**
   * Specifies how users can select dates in the component, such as choosing a single date, a range of dates, or multiple individual dates.
   * Default value: default
   */
  selectionMode?: CalendarSelectionMode | string;
  /**
   * Specifies the amount of time (in milliseconds) that must pass between consecutive clicks of the calendar's date navigation buttons in the header. This delay helps prevent users from triggering rapid, repeated navigation actions and can be used to control the responsiveness of date changes in the calendar interface.
   * Default value: 80
   */
  spinButtonsDelay?: number;
  /**
   * Specifies the initial delay, in milliseconds, before the date navigation buttons in the Calendar header begin to respond when pressed. This delay applies to the first action after a button is engaged, allowing users control over how quickly navigation starts.
   * Default value: 0
   */
  spinButtonsInitialDelay?: number;
  /**
   * Specifies the visual theme applied to the element. The selected theme controls the element's overall appearance, including colors, fonts, and styling, ensuring a consistent look and feel throughout the user interface.
   * Default value: ""
   */
  theme?: string;
  /**
   * Specifies the template to be used for the calendar's title section. This property accepts either the ID of an HTMLTemplate element present in the DOM or a direct reference to an HTMLTemplate element. The provided template will be rendered in place of the default title section, allowing for custom formatting and content.
   * Default value: null
   */
  titleTemplate?: any;
  /**
   * Controls whether tooltips are shown for important dates. When enabled, hovering over an important date will display a tooltip with additional information. When disabled, no tooltip will appear on hover.
   * Default value: false
   */
  tooltip?: boolean;
  /**
   * Controls the visibility of the tooltip arrow for important dates. When enabled (default), an arrow is displayed on the tooltip to indicate its reference point. Disabling this option will hide the arrow, resulting in a plain tooltip without a directional indicator.
   * Default value: true
   */
  tooltipArrow?: boolean;
  /**
   * Specifies the amount of time (in milliseconds) to wait before displaying the tooltip after a user hovers over or focuses on the target element. This controls how quickly the tooltip appears, allowing you to adjust the responsiveness of the tooltip based on user interaction.
   * Default value: 100
   */
  tooltipDelay?: number;
  /**
   * Specifies a custom offset for the tooltip's position. Accepts an array containing two numbers: the first value represents the horizontal (left) offset, and the second value represents the vertical (top) offset. These values determine how many pixels the tooltip is shifted from its default position along the X (left) and Y (top) axes, respectively.
   * Default value: 
   */
  tooltipOffset?: number[][];
  /**
   * Specifies the placement of the tooltip relative to its target element (e.g., top, right, bottom, or left).
   * Default value: top
   */
  tooltipPosition?: TooltipPosition | string;
  /**
   * Defines the template used for the tooltip's content. You can provide either the ID of an existing '' element in the DOM or a direct reference to an HTMLTemplateElement. The tooltip will render its content based on the markup and structure defined within the specified template.
   * Default value: null
   */
  tooltipTemplate?: any;
  /**
   * When set to true, this property prevents the element from receiving focus, meaning it cannot be selected or activated using keyboard navigation or programmatic focus methods.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Specifies the display orientation of the Calendar component (horizontal or vertical), affecting how dates and months are arranged within the calendar view.
   * Default value: portrait
   */
  view?: ViewLayout | string;
  /**
   * Specifies which sections of the Calendar component are displayed to the user. Available sections include: 'title', 'header', and 'footer'. You may enable any combination of these sections simultaneously by listing them together. If this setting is not specified, only the 'header' section will be shown by default.
   * Default value: header
   */
  viewSections?: string[];
  /**
   * Controls the display of week numbers within the calendar. When enabled, a week number is shown at the start of each week row, allowing users to easily reference and distinguish weeks. If disabled, week numbers are hidden, and only the standard calendar dates are displayed.
   * Default value: false
   */
  weekNumbers?: boolean;
  /**
   * Specifies how many weeks are displayed in the calendar view. This property accepts integer values from 1 to 6, where 1 displays a single week and 6 displays six weeks, representing a full month view.
   * Default value: 6
   */
  weeks?: number;
  /**
   * Specifies the format in which the year is displayed in the header when the DisplayMode property is set to "Default" or when the Months property has a value greater than 1. This setting controls how the year appears (e.g., "2024", "24") in the header section of the component.
   * Default value: numeric
   */
  yearFormat?: YearFormat | string;
}
/**
 Calendar allows user to easily select one or more dates. This control supports multi-calendar view, special dates, holidays, weekends, decade views.
*/
export interface Calendar extends BaseElement, CalendarProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever a user selects or deselects a date. It fires each time the selection state of a date changes, allowing you to respond to both new date selections and the removal of existing selections.
	* @param event. The custom event. Custom data event was created with: ev.detail(value)
   *  value - An array of all currently selected dates.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is fired immediately before the displayMode changes, providing an opportunity to intercept the transition. Within the event handler, you can call event.preventDefault() to cancel the displayMode change and prevent the update from occurring. This allows developers to implement custom logic or validation before the displayMode actually switches.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldDisplayMode, newDisplayMode)
   *  oldDisplayMode - The previous display mode.
   *  newDisplayMode - The new display mode.
   */
  onDisplayModeChanging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the display mode of the application is changed (for example, switching between fullscreen, windowed, or split-screen modes). It allows developers to detect and respond to changes in how content is presented to the user.
	* @param event. The custom event.    */
  onDisplayModeChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the view is about to change, such as during navigation to a different page or section. Developers can intercept this event to perform custom logic before the navigation completes. If necessary, the navigation can be cancelled by calling the preventDefault method within the event handler, stopping the view from changing.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, type)
   *  value - The view's date.
   *  type - The view type - 'month', 'decade' or 'year'.
   */
  onNavigationChanging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the user navigates to a different view or the current view is updated within the application. It provides an opportunity to execute custom logic in response to view transitions, such as loading new data, updating UI components, or tracking navigation events.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, type)
   *  value - The view's date.
   *  type - The view type - 'month', 'decade' or 'year'.
   */
  onNavigationChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered each time the tooltip associated with an important date becomes visible to the user, such as when they hover over or click on the date. Use this event to execute custom logic or display additional content whenever the important date's tooltip is opened.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, value)
   *  target - The event target - tooltip.
   *  value - The important date of the hovered cell.
   */
  onOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a user closes the tooltip associated with an important date. It indicates that the tooltip has been dismissed, either by user interaction (such as clicking outside the tooltip or pressing a close button) or through programmatic means. Use this event to perform actions or update the UI in response to the tooltip being closed.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, value)
   *  target - The event target - tooltip.
   *  value - The important date of the hovered cell.
   */
  onClose: ((this: any, ev: Event) => any) | null;
  /**
   * Clears the current selection by removing all selected dates from the calendar. This action resets the calendar to its default unselected state, ensuring that no dates remain highlighted or chosen.
   */
  clearSelection(): void;
  /**
   * Determines the navigation direction based on the provided argument: navigates forward if the argument is positive or "next," and navigates backward if the argument is negative or "previous."
   * @param {number | Date | string} step. The argument can be the following: <ul><li> number -  representing the number of months to scroll. Can be negavtive. If negative it will scroll backwards.</li><li> Date - a date object representing the Date to navigate to.</li><li> string - a string representing a valid Date, e.g. "2020-10-1" </li></ul>
   * @returns {boolean}
   */
  navigate(step: number | Date | string): boolean;
  /**
   * Allows the user to select a date or deselect a previously selected date, updating the selection state accordingly.
   * @param {Date | string} date. The date to be selected or unselected. The date can be a Date object or a string in valid date format.
   */
  select(date: Date | string): void;
  /**
   * Selects the current date based on the user's system settings.
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

/**Specifies the configuration and behavior of the date selection controls displayed within the header section of the Calendar component, such as navigation buttons, month and year dropdowns, or other tools that allow users to change the visible date range. */
export declare type CalendarMode = 'default' | 'classic';
/**Specifies the display format for the names of the days of the week that appear as headers above the calendar grid. This setting controls whether the day names are shown in full (e.g., "Monday"), as abbreviations (e.g., "Mon"), or as single letters (e.g., "M"). */
export declare type DayFormat = 'narrow' | 'firstTwoLetters' | 'long' | 'short';
/**Specifies which date is initially displayed in the calendar when calendarMode is set to 'default'. This property controls the starting visible month or day in the calendar interface, allowing you to set the user's initial view to a specific date. */
export declare type CalendarDisplayMode = 'month' | 'year' | 'decade';
/**Specifies the layout style displayed for the month or year view when calendarMode is set to "Default." This setting controls how dates are visually organized and presented to the user, such as showing days within a month grid or listing months within a year, depending on the selected calendar mode. */
export declare type CalendarDisplayModeView = 'table' | 'list';
/**Specifies how month names are displayed in the header when DisplayMode is set to "Default" or when the Months property has a value greater than 1. This setting controls whether month names appear in their full, abbreviated, or custom format within the header section, improving readability and user interface customization. */
export declare type MonthFormat = 'narrow' | 'firstTwoLetters' | 'long' | 'short' | '2-digit' | 'numeric';
/**Specifies the display orientation of the Calendar component (horizontal or vertical), affecting how dates and months are arranged within the calendar view. */
export declare type ViewLayout = 'landscape' | 'portrait';
/**Specifies the alignment and placement of navigation buttons within the header section, controlling whether they appear on the left, center, or right side of the header. */
export declare type LayoutPosition = 'near' | 'far' | 'both';
/**Specifies how users can select dates in the component, such as choosing a single date, a range of dates, or multiple individual dates. */
export declare type CalendarSelectionMode = 'none' | 'default' | 'many' | 'one' | 'oneExtended' | 'oneOrMany' | 'range' | 'week' | 'zeroOrMany' | 'zeroOrOne';
/**Specifies the placement of the tooltip relative to its target element (e.g., top, right, bottom, or left). */
export declare type TooltipPosition = 'auto' | 'absolute' | 'bottom' | 'top' | 'left' | 'right';
/**Specifies the format in which the year is displayed in the header when the DisplayMode property is set to "Default" or when the Months property has a value greater than 1. This setting controls how the year appears (e.g., "2024", "24") in the header section of the component. */
export declare type YearFormat = '2-digit' | 'numeric';
