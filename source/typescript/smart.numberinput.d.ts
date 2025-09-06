import  {BaseElement, Animation} from "./smart.element"

export interface NumberInputProperties {
  /**
   * Specifies or retrieves the current animation mode. When set to 'none', all animations are disabled. Setting this property to other supported values enables specific animation behaviors as defined by the available modes.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Controls whether the element is active and interactive (enabled) or inactive and unresponsive (disabled). When set to disabled, the element cannot be interacted with by users, and its associated actions or events will not trigger.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies the intended purpose of the input field and indicates the level of permission granted to the user agent (such as a browser or password manager) to automatically assist in completing the input when used within a form. This attribute provides guidance to browsers about the type of data expected in the field, enabling features like autofill and enhanced accessibility. It corresponds to the standard HTML autocomplete attribute and accepts values such as 'on' (to enable autocomplete), 'off' (to disable autocomplete), or more specific tokens like 'name', 'email', 'organization', 'street-address', and others, enabling browsers to supply relevant information where appropriate. For a full list of valid values and their meanings, refer to the official HTML documentation for the autocomplete attribute.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * Gets or sets the unlockKey, a unique string required to authenticate and unlock access to the product's features. Use this property to retrieve the current unlockKey or assign a new one to enable product usage.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language code (e.g., "en", "fr") used for localization. This property should be used together with the messages property, which contains the corresponding translated text for each supported language. Setting this value determines which set of messages will be displayed to the user.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A callback function that allows you to define a custom format for messages returned by the Localization Module. Use this to modify the structure, content, or appearance of localized messages before they are delivered to the application.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Specifies the maximum numeric value that the input field can accept or display. Any value entered that exceeds this limit will be considered invalid.
   * Default value: 9999999999
   */
  max?: number;
  /**
   * Defines or retrieves an object containing all the text strings used within the widget that can be localized. This enables the widget's user interface to display text in different languages, depending on the selected locale property. Use this object to provide translations for various widget messages, labels, and prompts to support internationalization.
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
   *     "invalidNode": "."
   *   }
   * }
   */
  messages?: any;
  /**
   * Specifies the minimum numerical value that users are allowed to enter or select within the input field. This value sets the lower limit for acceptable input, ensuring that any input below this threshold will be considered invalid.
   * Default value: -9999999999
   */
  min?: number;
  /**
   * Sets or retrieves the value of the element’s name attribute. The name attribute uniquely identifies form elements and is used as the key when submitting form data to a server. This allows the form data associated with this element to be sent and processed correctly when the form is submitted.
   * Default value: ""
   */
  name?: string;
  /**
   * Specifies or retrieves the format in which the element's value is represented. This determines how the value is displayed to the user and how it is processed or stored in the underlying data model.
   * Default value: [object Object]
   */
  numberFormat?: any;
  /**
   * Specifies the placeholder text that appears inside the input field before the user enters a value. This text provides a hint or example of the expected input format or content.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Specifies whether the user is allowed to type or modify text within the input field. If set to false, the input becomes read-only and the user cannot enter or change its contents.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or retrieves a value that determines whether the element’s text direction and alignment are configured for right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element adjusts its layout and text flow to properly support RTL locales.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies or retrieves the amount by which the element’s value increases or decreases when the user interacts with controls such as up/down arrows, sliders, or keyboard inputs. This determines the step interval for adjusting the element’s value.
   * Default value: 1
   */
  step?: number;
  /**
   * Specifies the visual theme to be applied to the element. Themes control the overall appearance, including colors, fonts, and styles, ensuring a consistent look and feel across the element. Selecting a theme customizes the design and user experience of the component.
   * Default value: ""
   */
  theme?: string;
  /**
   * If set to true, the element will be excluded from the tab order and cannot receive keyboard focus. This means users will not be able to select the element using the Tab key or other keyboard navigation methods.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Provides a way to retrieve (get) or assign (set) the current value of the element, typically used for form fields such as input, textarea, or select elements. When used as a getter, it returns the element's current value as a string. When used as a setter, it updates the element's value to the specified string.
   * Default value: 0
   */
  value?: any;
}
/**
 NumberInput specifies an input field where the user can enter a numbers.
*/
export interface NumberInput extends BaseElement, NumberInputProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the user selects a different item or modifies the current selection. It occurs each time the selection state changes, allowing you to respond dynamically to user interactions such as choosing an option from a dropdown menu, highlighting text, or switching between selectable elements.
	* @param event. The custom event. Custom data event was created with: ev.detail(label, oldLabel, oldValue, value)
   *  label - The label of the new selected item.
   *  oldLabel - The label of the item that was previously selected before the event was triggered.
   *  oldValue - The value of the item that was previously selected before the event was triggered.
   *  value - The value of the new selected item.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Returns the value converted to the specified format, ensuring that the output matches the required data type or structure (e.g., string, number, JSON object, date format) as requested by the caller.
   * @param {string | number} value. The value to be formatted by the method. 
   * @param {any} format?. The object that contains the formatting properties. The argument should contain Intl.NumberFormat valid properties. For example, { style: 'currency', currency: 'EUR' }
   * @returns {string}
   */
  getFormattedValue(value: string | number, format?: any): string;
  /**
   * Returns the numeric value corresponding to the given input. If the input is a number, it is returned as-is; if the input is a string or another type that can be converted to a number, its numeric equivalent is returned. If the input cannot be converted to a number, the function may return NaN or throw an error, depending on implementation.
   * @returns {number}
   */
  getValue(): number;
  /**
   * Selects the entire text within the input field. If the input is set to <b>readonly</b>, the function will focus the element instead of selecting its text."
   */
  select(): void;
  /**
   * Assigns a specified value to the input field, updating its displayed and underlying data. This ensures that the input reflects the current state or user-provided data within the form or component.
   * @param {string | number} value. The value to be set. 
   */
  setValue(value: string | number): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-number-input"): NumberInput;
        querySelector(selectors: "smart-number-input"): NumberInput | null;
        querySelectorAll(selectors: "smart-number-input"): NodeListOf<NumberInput>;
        getElementsByTagName(qualifiedName: "smart-number-input"): HTMLCollectionOf<NumberInput>;
        getElementsByName(elementName: "smart-number-input"): NodeListOf<NumberInput>;
    }
}

