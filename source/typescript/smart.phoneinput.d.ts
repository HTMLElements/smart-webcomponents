import  {BaseElement, Animation} from "./smart.element"

export interface PhoneInputProperties {
  /**
   * Determines whether the element is interactive or inactive. When enabled, the element can be interacted with by the user; when disabled, the element becomes unresponsive to user actions, often appearing visually distinct (e.g., grayed out).
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies extra CSS class names to be applied to the Input dropdown element, allowing for customized styling and theming beyond the default classes.
   * Default value: 
   */
  dropDownClassList?: any;
  /**
   * Specifies the placement of the dropdown button relative to its associated element, such as positioning it to the left, right, above, or below the target UI component.
   * Default value: none
   */
  dropDownButtonPosition?: DropDownButtonPosition | string;
  /**
   * Specifies the height of the dropdown menu. By default, this property is set to an empty string, which means the dropdown's height will be determined by a corresponding CSS variable. If a specific value is provided, it will override the CSS variable and explicitly set the dropdown's height.
   * Default value: 
   */
  dropDownHeight?: string | number;
  /**
   * Specifies the width of the dropdown menu. By default, this value is an empty string (""). When left empty, the dropdown's width is determined by a CSS variable, allowing the width to be managed through external stylesheets rather than being hardcoded. This provides flexibility for responsive design and consistent styling across your application. If a specific width is provided (e.g., "200px" or "50%"), it will override the CSS variable and explicitly set the dropdown's width.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Defines or retrieves an object containing string values used throughout the widget’s user interface, allowing for easy localization of text. This property works together with the locale setting to display the widget’s content in different languages, based on the specified translations. Use this object to provide or customize all user-facing strings for multilingual support.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Sets or retrieves the unlockKey property, which serves as a unique key required to unlock access to the product. When assigning a value, the unlockKey enables authorized usage; when retrieving, it provides the current key associated with the product’s access permissions.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Defines or retrieves the value of the name attribute for the element. The name attribute uniquely identifies the element within an HTML form, allowing its data to be included and referenced when the form is submitted to a server. This is essential for processing form data on the server side.
   * Default value: ""
   */
  name?: string;
  /**
   * Specifies whether the input should be in international or national format. In international mode, the input should begin with a '+' followed by the country code (e.g., +1 555-1234). In national mode, the input should omit the '+' and country code, using only the local number format.
   * Default value: false
   */
  nationalMode?: boolean;
  /**
   * Specifies whether the dropdown menu is currently visible (open) or hidden (closed).
   * Default value: false
   */
  opened?: boolean;
  /**
   * Specifies or retrieves an array of country codes to customize the set of countries used, replacing the default list that includes all countries. Each country code must be a valid ISO 3166-1 alpha-2 code (see: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), which consists of two uppercase letters (e.g., 'US' for the United States, 'FR' for France). Use this property to limit available options to a specific set of countries as needed.
   * Default value: []
   */
  onlyCountries?: any;
  /**
   * Specifies the placeholder text that appears inside the input field before the user enters any value, providing a hint or example of the expected input format.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Gets or sets the selected country for the element using a country code. The country code must conform to the ISO 3166-1 alpha-2 standard (see: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), which consists of a two-letter, uppercase code representing each country (e.g., "US" for United States, "FR" for France).
   * Default value: ""
   */
  selectedCountry?: string;
  /**
   * Gets or sets a value that determines whether the element's alignment is configured for right-to-left (RTL) languages (such as Arabic or Hebrew), enabling proper display and layout of text and content for those locales.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the visual theme to be applied to the element. The selected theme controls the element's overall appearance, including colors, fonts, spacing, and other stylistic properties, ensuring a consistent look and feel across the user interface.
   * Default value: ""
   */
  theme?: string;
  /**
   * When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible via tab navigation and standard focus events.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Retrieves the current value of the element or assigns a new value to it. This property can be used to access the data contained within form elements (such as input, textarea, or select) or to update their content programmatically.
   * Default value: ""
   */
  value?: string;
}
/**
 The Phone Input specifies an input field where the user can enter and validate a phone number.
*/
export interface PhoneInput extends BaseElement, PhoneInputProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the user modifies the current selection, such as highlighting different text or choosing another item from a selectable list. It helps you detect and respond to any change in what is selected within the relevant user interface component.
	* @param event. The custom event. Custom data event was created with: ev.detail(label, oldLabel, oldValue, value)
   *  label - The label of the new selected item.
   *  oldLabel - The label of the item that was previously selected before the event was triggered.
   *  oldValue - The value of the item that was previously selected before the event was triggered.
   *  value - The value of the new selected item.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered each time a key is released (on key up) within the input field, but only if the input's value has changed as a result of the key press.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previous value before it was changed.
   *  value - The new value.
   */
  onChanging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the user selects an item by clicking on it within the popup list. It allows you to respond to user interaction by executing specific actions or updating the interface based on the selected item.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, value)
   *  item - The item that was clicked.
   *  label - The label of the item that was clicked.
   *  value - The value of the item that was clicked.
   */
  onItemClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Closes the dropdown menu, hiding its visible options from the user and collapsing the interface element.
   */
  close(): void;
  /**
   * Guarantees that the currently active (selected) item remains visible within the viewport by automatically scrolling the container as needed. This ensures users can always see and interact with their selection, even as the list or content changes.
   */
  ensureVisible(): void;
  /**
   * Returns the provided phone number as a formatted string, applying standard formatting conventions (such as adding parentheses, spaces, or dashes) based on the specified locale or default format. Ensures consistency and improves readability for display or storage purposes.
   * @param {boolean} isInternational?. When you use 'false', the national phone number will be returned and the international phone number, when you use 'true' as parameter.
   * @returns {string}
   */
  getNumber(isInternational?: boolean): string;
  /**
   * Retrieves an object representing a country based on its dial code. The returned object contains the following properties:<br/><br/>- **label**: The local or English name of the country (e.g., "United States").<br/>- **value**: A unique identifier for the country (commonly the country name or abbreviation).<br/>- **iso2**: The two-letter ISO 3166-1 alpha-2 country code (e.g., "US").<br/>- **dialCode**: The international telephone dialing code associated with the country (e.g., "+1").
   * @param {string} dialCode?. Returns the national or international phone number
   * @returns {any}
   */
  getItemByDialCode(dialCode?: string): any;
  /**
   * Returns the currently selected item as an object.  <br/>This object contains the following properties:  <br/>- `label`: A string representing the display name of the item (e.g., country name).  <br/>- `value`: A string or identifier associated with the item (e.g., country code).  <br/>- `iso2`: A two-letter ISO 3166-1 alpha-2 country code string (e.g., 'US' for United States).  <br/>- `dialCode`: A string representing the country’s international dialing code (e.g., '+1').
   * @returns {any}
   */
  getSelectedItem(): any;
  /**
   * Determines if the provided phone number meets the required format and validation rules, returning true for a valid phone number and false if the input is invalid.
   * @returns {boolean}
   */
  isValidNumber(): boolean;
  /**
   * Validates whether the entered phone number is in the correct format and meets specified criteria, such as required length, allowed characters, and country or area code compliance.
   */
  validate(): void;
  /**
   * Displays the drop-down menu, making its list of selectable options visible to the user.
   */
  open(): void;
  /**
   * Enhances the behavior of an input field by selecting its text content when it is editable. If the input field is marked as <b>readonly</b>, it will instead focus the element without selecting the text. This ensures that users can easily interact with editable inputs, while still providing focus to readonly fields for accessibility or further actions.
   */
  select(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-phone-input"): PhoneInput;
        querySelector(selectors: "smart-phone-input"): PhoneInput | null;
        querySelectorAll(selectors: "smart-phone-input"): NodeListOf<PhoneInput>;
        getElementsByTagName(qualifiedName: "smart-phone-input"): HTMLCollectionOf<PhoneInput>;
        getElementsByName(elementName: "smart-phone-input"): NodeListOf<PhoneInput>;
    }
}

/**Specifies the placement of the dropdown button relative to its associated element, such as positioning it to the left, right, above, or below the target UI component. */
export declare type DropDownButtonPosition = 'none' | 'left' | 'right';
