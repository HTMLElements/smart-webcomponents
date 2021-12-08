import  {BaseElement, Animation} from "./smart.element"

export interface PhoneInputProperties {
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets additional class names to the Input drop down.
   * Default value: 
   */
  dropDownClassList?: any;
  /**
   * Determines the position of the drop down button.
   * Default value: none
   */
  dropDownButtonPosition?: DropDownButtonPosition;
  /**
   * Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownHeight?: string | number;
  /**
   * Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting data inside an HTML form.
   * Default value: ""
   */
  name?: string;
  /**
   * Determines whether the input will be in international or national mode i.e whether the input will start with '+'.
   * Default value: false
   */
  nationalMode?: boolean;
  /**
   * Determines whether the drop down is opened or not.
   * Default value: false
   */
  opened?: boolean;
  /**
   * Sets or gets an array of country codes which will be used instead of the default one with all countries. The country code should be ISO 3166-1 alpha-2 codes(https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   * Default value: []
   */
  onlyCountries?: any;
  /**
   * Determines the placeholder of the input.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Sets or gets the selected country of the element. The country code should be ISO 3166-1 alpha-2 codes(https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   * Default value: ""
   */
  selectedCountry?: string;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the theme for the element. Themes define the look of the elements.
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the value of the element.
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
   * This event is triggered when the selection is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(label, oldLabel, oldValue, value)
   *  label - The label of the new selected item.
   *  oldLabel - The label of the item that was previously selected before the event was triggered.
   *  oldValue - The value of the item that was previously selected before the event was triggered.
   *  value - The value of the new selected item.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered on each key up event of the Input, if the value is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previous value before it was changed.
   *  value - The new value.
   */
  onChanging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user clicks on an item from the popup list.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, value)
   *  item - The item that was clicked.
   *  label - The label of the item that was clicked.
   *  value - The value of the item that was clicked.
   */
  onItemClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Closes the drop down.
   */
  close(): void;
  /**
   * Ensures that the active ( selected ) item is always visible.
   */
  ensureVisible(): void;
  /**
   * Returns the entered phone number with formatting.
   * @param {boolean} isInternational?. When you use 'false', the national phone number will be returned and the international phone number, when you use 'true' as parameter.
   * @returns {string}
   */
  getNumber(isInternational?: boolean): string;
  /**
   * Returns an item by its country dial code. The item is an object with 'label', 'value', 'iso2' and 'dialCode' properties.
   * @param {string} dialCode?. Returns the national or international phone number
   * @returns {any}
   */
  getItemByDialCode(dialCode?: string): any;
  /**
   * Returns the selected item. The item is an object with 'label', 'value', 'iso2' and 'dialCode' properties.
   * @returns {any}
   */
  getSelectedItem(): any;
  /**
   * Returns true or false depending on whether the entered phone number is valid.
   * @returns {boolean}
   */
  isValidNumber(): boolean;
  /**
   * Validates the entered phone number.
   */
  validate(): void;
  /**
   * Opens the drop down.
   */
  open(): void;
  /**
   * Selects the text inside the input or if it is <b>readonly</b> then the element is focused.
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

/**Determines the position of the drop down button. */
export declare type DropDownButtonPosition = 'none' | 'left' | 'right';
