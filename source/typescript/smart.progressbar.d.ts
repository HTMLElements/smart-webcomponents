import  {BaseElement, Animation} from "./smart.element"

export interface CircularProgressBarProperties {
  /**
   * Specifies or retrieves the current animation mode. When set to 'none', all animations are disabled. For other values, animations are enabled according to the specified mode.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Specifies whether the element is interactive and can be used by the user. When enabled, the element is active and can receive user input; when disabled, the element is inactive and user interaction is prevented.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * A callback function that specifies how the Progress Bar label should be formatted. This function receives relevant parameters (such as the current value and maximum value) and returns a string that determines the label's display. Use this function to customize the content and format of the label shown on the Progress Bar.
   * Default value: null
   */
  formatFunction?: {(value: number): string};
  /**
   * Sets the value of the Circular Progress bar to an indeterminate state (null), indicating that progress is ongoing without a specific completion percentage. This action also initiates the progress bar’s continuous animation, signaling that a task is in progress but the duration or endpoint is unknown.
   * Default value: false
   */
  indeterminate?: boolean;
  /**
   * Specifies the direction in which the Circular Progress Bar fills as progress increases, such as clockwise or counterclockwise.
   * Default value: false
   */
  inverted?: boolean;
  /**
   * Retrieves or assigns the unlockKey, a unique value required to unlock access to the product features or content.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language in use. This property is typically used together with the messages property to determine which set of localized messages should be displayed based on the selected language. Setting this property changes the language context for retrieving appropriate translated content.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function associated with the localization module, typically used to handle events or processes such as language changes, translation updates, or formatting adjustments based on user locale.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines the maximum value that the progress bar can represent, determining the upper limit for the progress indicator. Values above this threshold will be capped at this maximum.
   * Default value: 100
   */
  max?: number;
  /**
   * Defines or retrieves an object containing customizable strings used throughout the widget’s user interface, enabling support for multiple languages. This property works together with the locale property to provide localized text displayed in the widget, such as labels, tooltips, and messages. Use this object to supply translations and override the default UI text for different languages or regions.
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid '!",
   *     "propertyInvalidValueType": "Invalid '!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": ".",
   *     "htmlTemplateNotSuported": ":  Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Defines the lowest value that the progress bar can represent, establishing the starting point of the progress range. This value determines the minimum limit for the progress indicator.
   * Default value: 0
   */
  min?: number;
  /**
   * Controls whether the label is displayed on the Progress Bar. When enabled, the label will be shown; when disabled, the label will be hidden.
   * Default value: false
   */
  showProgressValue?: boolean;
  /**
   * Sets or retrieves a value that determines whether the element’s alignment supports right-to-left (RTL) text direction, which is commonly used in languages such as Arabic or Hebrew. This property ensures the element displays content appropriately for RTL locales.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the theme to be applied to the element, controlling its overall visual appearance—including colors, fonts, and styling. The selected theme determines how the element is displayed, ensuring consistency with the application's design guidelines.
   * Default value: ""
   */
  theme?: string;
  /**
   * When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible via tab navigation or programmatic focus calls.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or retrieves the current numerical value of the progress bar, representing the completion level of the task as a number within the defined minimum and maximum range.
   * Default value: 0
   */
  value?: number;
}
/**
 Progress Bar displayed as a circle.
*/
export interface CircularProgressBar extends BaseElement, CircularProgressBarProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the value associated with this element changes, either through user input or programmatic updates. It allows you to respond dynamically whenever the value is modified.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
}

declare global {
    interface Document {
        createElement(tagName: "smart-circular-progress-bar"): CircularProgressBar;
        querySelector(selectors: "smart-circular-progress-bar"): CircularProgressBar | null;
        querySelectorAll(selectors: "smart-circular-progress-bar"): NodeListOf<CircularProgressBar>;
        getElementsByTagName(qualifiedName: "smart-circular-progress-bar"): HTMLCollectionOf<CircularProgressBar>;
        getElementsByName(elementName: "smart-circular-progress-bar"): NodeListOf<CircularProgressBar>;
    }
}

export interface ProgressBarProperties {
  /**
   * Sets or retrieves the current animation mode for the element. When this property is set to 'none', all animations are disabled and the element will not perform any animated transitions. Otherwise, specifying a different value enables the corresponding animation behavior.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Specifies whether the element is active and interactive (enabled) or inactive and unresponsive to user input (disabled). When set to true, the element is disabled and cannot be interacted with; when set to false, the element remains enabled and fully functional.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets the Progress bar’s value to the indeterminate state (by assigning null), which triggers and starts the loading animation. In the indeterminate state, the Progress bar does not display a fixed value but instead shows a continuous animation to indicate ongoing activity or loading without specifying progress percentage.
   * Default value: false
   */
  indeterminate?: boolean;
  /**
   * Specifies the direction in which the Progress Bar fills as its value increases, such as left to right, right to left, top to bottom, or bottom to top.
   * Default value: false
   */
  inverted?: boolean;
  /**
   * A callback function that specifies how to generate or customize the label displayed on the Progress Bar. This function receives relevant data (such as the current progress value) as input and returns a string that determines the label format shown to users. Use this to personalize label content, such as displaying percentages, custom text, or additional information.
   * Default value: null
   */
  formatFunction?: {(value: number): string};
  /**
   * Gets or sets the unlockKey property, which serves as the authorization code required to activate and access the product’s full features.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Defines or retrieves the current language setting for the component. This property determines which language is used for displaying text and messages, and works together with the messages property to select the appropriate localized strings. Adjusting this property updates the displayed language dynamically based on the provided message translations.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function associated with the localization module, typically invoked to handle language changes, load localized resources, or update content based on the selected locale.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines the highest value that the progress bar can represent, establishing the upper limit for progress tracking. This value determines when the progress bar is considered 100% complete.
   * Default value: 100
   */
  max?: number;
  /**
   * Defines an object containing string values that represent the various states of password strength (e.g., "weak", "medium", "strong"). These values can be used to display contextual feedback to users based on the evaluated strength of their password.
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
   * Defines the lowest allowable value for the progress bar, representing the starting point from which progress is measured. This sets the minimum boundary for the progress indicator’s range.
   * Default value: 0
   */
  min?: number;
  /**
   * Specifies whether the progress bar is displayed horizontally or vertically. Adjusting this property changes the direction in which the progress indicator fills.
   * Default value: horizontal
   */
  orientation?: Orientation | string;
  /**
   * Specifies or retrieves a value that determines whether the element's alignment supports right-to-left (RTL) text direction, typically used for languages such as Arabic or Hebrew. When enabled, the element's content and layout will be adjusted to accommodate RTL locales.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Controls the visibility of the label for the Progress Bar. When enabled, the label will be displayed; when disabled, the label will be hidden.
   * Default value: false
   */
  showProgressValue?: boolean;
  /**
   * Specifies the theme that controls the visual style and appearance of the element, including aspects such as colors, fonts, and overall design. Selecting a theme customizes how the element is displayed to users.
   * Default value: ""
   */
  theme?: string;
  /**
   * If set to true, this property prevents the element from receiving keyboard focus, making it unreachable via keyboard navigation such as the Tab key.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Retrieves the current value of the progress bar or sets it to a specified value, updating the visual representation accordingly. This value typically indicates the progress of a task as a numeric value within a defined range (e.g., 0 to 100).
   * Default value: 0
   */
  value?: number;
}
/**
 Progress indicators. It can be used to show a user how far along he/she is in a process.
*/
export interface ProgressBar extends BaseElement, ProgressBarProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the value of the associated input or component is modified by the user or via programmatic changes. It provides an opportunity to respond in real time to updates, such as validating input, updating the UI, or synchronizing data with other components.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
}

declare global {
    interface Document {
        createElement(tagName: "smart-progress-bar"): ProgressBar;
        querySelector(selectors: "smart-progress-bar"): ProgressBar | null;
        querySelectorAll(selectors: "smart-progress-bar"): NodeListOf<ProgressBar>;
        getElementsByTagName(qualifiedName: "smart-progress-bar"): HTMLCollectionOf<ProgressBar>;
        getElementsByName(elementName: "smart-progress-bar"): NodeListOf<ProgressBar>;
    }
}

/**Specifies whether the progress bar is displayed horizontally or vertically. Adjusting this property changes the direction in which the progress indicator fills. */
export declare type Orientation = 'horizontal' | 'vertical';
