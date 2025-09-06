import  {BaseElement, Animation} from "./smart.element"

export interface LedProperties {
  /**
   * Sets or retrieves the current animation mode. When this property is set to 'none', all animations are disabled, and elements will display or update instantly without any transition effects. For other values, the specified animation mode will determine how visual changes are animated.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Gets the current check state or sets it to a specified value, typically used for checkbox, radio button, or similar UI elements. The check state indicates whether the element is checked, unchecked, or (if supported) in an indeterminate state.
   * Default value: false
   */
  checked?: boolean;
  /**
   * Specifies the conditions under which the element will trigger a click event, allowing you to control when and how user interactions or programmatic actions cause the click event to be fired.
   * Default value: release
   */
  clickMode?: ClickMode | string;
  /**
   * Controls the LED's power state by enabling (turning on) or disabling (turning off) the LED.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies the content to be displayed when the state is set to 'false'.
   * Default value: """"
   */
  falseContent?: string;
  /**
   * Defines a custom template that determines the LED's appearance or behavior when it is in the "off" or false state.
   * Default value: null
   */
  falseTemplate?: any;
  /**
   * Configures the LED to display an indeterminate state, typically represented by a blinking or animated pattern to indicate ongoing activity or a process with an unknown completion time. This is useful for scenarios where the system cannot determine or communicate a specific status or progress value.
   * Default value: false
   */
  indeterminate?: boolean;
  /**
   * Defines the content to be displayed when the component is in a 'null' or empty state, such as when no data is available or the value is undefined.
   * Default value: """"
   */
  indeterminateContent?: string;
  /**
   * Defines a custom template to visually represent the LED component when it is in an indeterminate state, allowing you to specify the appearance or behavior of the LED during this undefined or transitional state.
   * Default value: null
   */
  indeterminateTemplate?: any;
  /**
   * Sets or retrieves the unlockKey, a unique identifier or code required to unlock access to the product. This property allows you to manage product access by specifying or obtaining the key needed for unlocking restricted features or content.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language setting for localization purposes. This property works together with the messages property to display interface text and messages in the selected language. When you set this property, the corresponding localized messages from messages are used throughout the application.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this to modify or enhance localized messages—such as applying custom templates, injecting dynamic content, or adjusting formatting—before they are delivered to the user interface.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines or retrieves an object containing localized strings used by the widget's user interface, such as labels, messages, and tooltips. This property works in tandem with the locale property to enable support for multiple languages, allowing developers to customize text displayed to users based on their selected language or region.
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
   * Sets or retrieves the value of the element's name attribute. The name attribute is used to identify form elements when submitting HTML forms, allowing their values to be sent to the server as key-value pairs. This attribute is essential for collecting user input in form processing.
   * Default value: """"
   */
  name?: string;
  /**
   * If the widget is set to read-only, users will be unable to interact with the element or modify its contents. All input and editing functionalities will be disabled, ensuring that the information displayed remains unchanged by the user.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or retrieves the value that determines whether the element’s content is aligned to support languages that use right-to-left (RTL) scripts, such as Arabic or Hebrew. This property ensures proper text direction and alignment for locales requiring RTL formatting.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the geometric shape or appearance of the LED component, such as circle, square, rectangle, or custom shapes. This setting determines how the LED will be visually rendered in the user interface.
   * Default value: round
   */
  shape?: LedShape | string;
  /**
   * Specifies the theme to be applied, which controls the visual appearance—such as colors, fonts, and styles—of the element. The selected theme ensures a consistent and cohesive look and feel across the user interface.
   * Default value: ""
   */
  theme?: string;
  /**
   * Specifies the content that will be displayed or rendered when the associated state is evaluated as 'true'.
   * Default value: """"
   */
  trueContent?: string;
  /**
   * Specifies a custom template that defines the behavior or appearance of the LED when its state is set to "true" (on). Use this template to customize how the LED should be displayed or controlled when activated.
   * Default value: null
   */
  trueTemplate?: any;
  /**
   * When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible via tab navigation or scripting methods such as element.focus().
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets a new value for the element or retrieves its current value, depending on whether an argument is provided. This is commonly used for form elements such as input, select, or textarea to programmatically update or access their contents.
   * Default value: """"
   */
  value?: string;
}
/**
 LET Toggle button with Checked boolean value.
*/
export interface Led extends BaseElement, LedProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the widget’s checked state changes, that is, when the user selects (checks) or deselects (unchecks) the widget. It allows you to execute custom logic in response to the widget being either checked or unchecked.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previous value of the element before it was changed.
   *  value - The new value of the element.
   */
  onChange: ((this: any, ev: Event) => any) | null;
}

declare global {
    interface Document {
        createElement(tagName: "smart-led"): Led;
        querySelector(selectors: "smart-led"): Led | null;
        querySelectorAll(selectors: "smart-led"): NodeListOf<Led>;
        getElementsByTagName(qualifiedName: "smart-led"): HTMLCollectionOf<Led>;
        getElementsByName(elementName: "smart-led"): NodeListOf<Led>;
    }
}

/**Specifies the conditions under which the element will trigger a click event, allowing you to control when and how user interactions or programmatic actions cause the click event to be fired. */
export declare type ClickMode = 'hover' | 'press' | 'release' | 'pressAndRelease';
/**Specifies the geometric shape or appearance of the LED component, such as circle, square, rectangle, or custom shapes. This setting determines how the LED will be visually rendered in the user interface. */
export declare type LedShape = 'round' | 'square';
