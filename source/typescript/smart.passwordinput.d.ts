import  {BaseElement, Animation} from "./smart.element"

export interface PasswordInputProperties {
  /**
   * Determines whether the element is interactive or inactive. When enabled, the element can be used and respond to user actions; when disabled, the element is not interactive and will not respond to user input.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves the unlockKey, a unique identifier or code required to unlock and grant access to the product’s features or content.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language setting. This property is typically used together with the messages property to provide localization support, determining which set of translated messages or labels are displayed based on the selected language code (e.g., 'en', 'fr', 'es').
   * Default value: "en"
   */
  locale?: string;
  /**
   * Specifies a callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this callback to modify or enhance how localized strings are generated or displayed before they are delivered to your application.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines or retrieves an object containing text strings used throughout the widget interface, enabling support for localization. This property works together with the locale property to display the widget's content in different languages by providing translations for UI elements such as labels, messages, and tooltips.
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
   * Specifies the minimum number of characters a user must type into the input field before the autocomplete feature activates. Once this threshold is reached, the dropdown will open and display a list of items that match the entered text.
   * Default value: 1
   */
  minLength?: number;
  /**
   * Specifies or retrieves the value of the element's name attribute. The name attribute is used to identify form fields when submitting data via an HTML form, allowing the data to be sent as key-value pairs where the name serves as the key. This attribute is essential for server-side processing and differentiating between multiple inputs within the same form.
   * Default value: ""
   */
  name?: string;
  /**
   * Specifies the placeholder text displayed inside the input field when it is empty, providing a hint or example of the expected input value.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Sets or retrieves a value that specifies whether the element's alignment is configured to support right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, this ensures that text direction and layout are adjusted appropriately for locales that use RTL scripts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the visual theme to be applied to the element. Themes control the overall appearance, including colors, fonts, spacing, and stylistic details, ensuring a consistent look and feel across elements.
   * Default value: ""
   */
  theme?: string;
  /**
   * When set to true, this property prevents the element from receiving keyboard focus, making it unreachable via the keyboard (e.g., Tab key) and inaccessible by assistive technologies that rely on focus.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets a new value for the element or retrieves the current value of the element, depending on how the method or property is used. This is commonly used for form elements such as input fields, textareas, or select elements, allowing you to programmatically update or access their contents.
   * Default value: ""
   */
  value?: string;
}
/**
 PasswordInput specifies a password field where the user can enter data. It is similar to the password text box, but this component does not have additional functionality for tooltips and popups.
*/
export interface PasswordInput extends BaseElement, PasswordInputProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the value of the element has been modified by the user and the element loses focus (i.e., when the user finishes editing and clicks or tabs away from the element).
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previous value.
   *  value - The new value.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered each time a key is released within the PasswordInput field, but only if the input value has changed as a result of the key press.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previous value before it was changed.
   *  value - The new value.
   */
  onChanging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Enhances the input field interaction by selecting all text within the input when it is editable. If the input is set to <b>readonly</b>, the element receives focus without selecting its text. This ensures intuitive behavior based on the input's current state.
   */
  select(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-password-input"): PasswordInput;
        querySelector(selectors: "smart-password-input"): PasswordInput | null;
        querySelectorAll(selectors: "smart-password-input"): NodeListOf<PasswordInput>;
        getElementsByTagName(qualifiedName: "smart-password-input"): HTMLCollectionOf<PasswordInput>;
        getElementsByName(elementName: "smart-password-input"): NodeListOf<PasswordInput>;
    }
}

