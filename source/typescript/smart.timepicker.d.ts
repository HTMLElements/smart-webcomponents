import  {BaseElement, Animation} from "./smart.element"

export interface TimePickerProperties {
  /**
   * Controls the animation mode for the component. When set to 'none', all animations are disabled. When set to other supported values, animations will be enabled according to the specified mode. This property can be used to either retrieve the current animation mode or update it dynamically.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Determines whether, after selecting the hour, the component will automatically advance to the minute selection view. When enabled, users will be guided directly to choose minutes immediately after choosing an hour, streamlining the time selection process. This option can be set or retrieved programmatically.
   * Default value: false
   */
  autoSwitchToMinutes?: boolean;
  /**
   * Specifies whether the element is active and can be interacted with by the user. When enabled, the element responds to user actions; when disabled, the element appears visually inactive and does not accept user input or interaction.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies whether the footer section of the element is displayed to the user. If set to true, the footer will be visible; if false, the footer will be hidden.
   * Default value: false
   */
  footer?: boolean;
  /**
   * Specifies or retrieves the footer template used by the component. This property accepts either the ID of an existing HTMLTemplateElement or a direct reference to an HTMLTemplateElement object. When assigning an ID, the component will search the DOM for a template with the corresponding ID and use it as the footer template. If a direct reference is provided, that template will be used. If the value is set to null, the component will revert to its default behavior by applying an empty template to the footer area.
   * Default value: null
   */
  footerTemplate?: string | HTMLTemplateElement;
  /**
   * Specifies the format used for selecting hours, such as 12-hour (AM/PM) or 24-hour (military) time.
   * Default value: 12-hour
   */
  format?: TimePickerFormat | string;
  /**
   * Sets or retrieves the unlockKey, a unique value required to activate or grant access to the product's features. This key is used to validate and unlock product functionality.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language setting. This property is typically used together with the messages property to determine which language version of the messages should be displayed or retrieved. When setting the language, the corresponding localized messages from the messages collection will be used.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this to modify how localized text is structured, such as adding dynamic values, adjusting syntax, or applying custom formatting rules before the message is displayed to the user.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines or retrieves an object containing string resources used throughout the widget interface, which can be localized to support different languages and regions. This property works in tandem with the language property to display text in the user's preferred language, enabling comprehensive internationalization of the widget's UI elements and messages.
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
   * Specifies or retrieves the increment value (in minutes) used when adjusting or selecting the minute portion of a time input. This determines the intervals by which minutes can be increased or decreased, such as allowing selection at every 5 minutes (e.g., 0, 5, 10, 15, etc.) instead of every 1 minute.
   * Default value: 1
   */
  minuteInterval?: number;
  /**
   * Sets or retrieves the name attribute of the element. The name attribute identifies the element when submitting HTML forms, allowing its value to be included as a key in the form data sent to the server. This is essential for server-side processing and distinguishing between multiple form fields.
   * Default value: ""
   */
  name?: string;
  /**
   * Prevents any user interactions with the element, such as clicking, tapping, focusing, or selecting content. While disabled, the element will not respond to mouse, keyboard, or touch events, and interactive features (like links or form inputs) will not be accessible.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Gets or sets a value that specifies whether the element is aligned to support right-to-left (RTL) languages and scripts, such as Arabic or Hebrew. When enabled, the element's alignment and layout are adjusted to accommodate right-to-left text direction for proper localization.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies which view is currently displayed to the user. By default, the hours view is initially shown unless a different view is set. This property controls the visible section of the interface, such as hours, minutes, or other available views.
   * Default value: hour
   */
  selection?: TimePickerSelection | string;
  /**
   * Specifies the visual theme to be applied to the element. The selected theme controls the overall appearance, including colors, fonts, and styling, ensuring a consistent look and feel for the element within the user interface.
   * Default value: ""
   */
  theme?: string;
  /**
   * When set to true, this property makes the element unfocusable, preventing it from receiving keyboard or mouse focus during user interaction or via scripting.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or retrieves the value of the element. The value can be provided as a valid Date object or as a string formatted to represent a valid time (e.g., "14:30" for 2:30 PM). When setting, ensure the input matches the expected format; when getting, the returned value will reflect the current time value of the element.
   * Default value: new Date()
   */
  value?: any;
  /**
   * Determines the current orientation of the element, indicating whether its width is greater than its height (landscape mode) or its height is greater than its width (portrait mode). This property allows developers to adapt layout and styles based on how the element is displayed.
   * Default value: portrait
   */
  view?: ViewLayout | string;
}
/**
 Time Picker component allows the user to select time from spinners.
*/
export interface TimePicker extends BaseElement, TimePickerProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the value associated with the component or input field is modified, either by user interaction or programmatically. It is dispatched after the change has occurred, allowing event handlers to respond to updates in the value.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The old value before it was changed presented as a Date object.
   *  value - The new value presented as a Date object.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Specifies the hour component of the time value, typically as an integer ranging from 0 (midnight) to 23 (11 PM). This property or method updates the hours portion while leaving the minutes, seconds, and milliseconds unchanged, unless otherwise specified.
   * @param {number} hours. The hours to set.
   */
  setHours(hours: number): void;
  /**
   * Specifies the value for the minutes component of a time, typically as an integer between 0 and 59. This is used to set or update the minute portion of a time-related field.
   * @param {number} minutes. The minutes to set.
   */
  setMinutes(minutes: number): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-time-picker"): TimePicker;
        querySelector(selectors: "smart-time-picker"): TimePicker | null;
        querySelectorAll(selectors: "smart-time-picker"): NodeListOf<TimePicker>;
        getElementsByTagName(qualifiedName: "smart-time-picker"): HTMLCollectionOf<TimePicker>;
        getElementsByName(elementName: "smart-time-picker"): NodeListOf<TimePicker>;
    }
}

/**Specifies the format used for selecting hours, such as 12-hour (AM/PM) or 24-hour (military) time. */
export declare type TimePickerFormat = '12-hour' | '24-hour';
/**Specifies which view is currently displayed to the user. By default, the hours view is initially shown unless a different view is set. This property controls the visible section of the interface, such as hours, minutes, or other available views. */
export declare type TimePickerSelection = 'hour' | 'minute';
/**Determines the current orientation of the element, indicating whether its width is greater than its height (landscape mode) or its height is greater than its width (portrait mode). This property allows developers to adapt layout and styles based on how the element is displayed. */
export declare type ViewLayout = 'landscape' | 'portrait';
