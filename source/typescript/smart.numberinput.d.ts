import  {BaseElement, Animation} from "./smart.element"

export interface NumberInputProperties {
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Determines the max number that can be displayed inside the input.
   * Default value: 9999999999
   */
  max?: number;
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "invalidNode": "."
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines the min number that can be displayed inside the input.
   * Default value: -9999999999
   */
  min?: number;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting data inside an HTML form.
   * Default value: ""
   */
  name?: string;
  /**
   * Sets or gets the value format of the element.
   * Default value: [object Object]
   */
  numberFormat?: any;
  /**
   * Determines the placeholder of the input.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Determines whether ot not the user can enter text inside the input.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Sets or gets the incremental/decremental step for the value of the element.
   * Default value: 1
   */
  step?: number;
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
   * This event is triggered when the selection is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(label, oldLabel, oldValue, value)
   *  label - The label of the new selected item.
   *  oldLabel - The label of the item that was previously selected before the event was triggered.
   *  oldValue - The value of the item that was previously selected before the event was triggered.
   *  value - The value of the new selected item.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Returns the value in the desired format.
   * @param {string | number} value. The value to be formatted by the method. 
   * @param {any} format?. The object that contains the formatting properties. The argument should contain Intl.NumberFormat valid properties. For example, { style: 'currency', currency: 'EUR' }
   */
  getFormattedValue(value: string | number, format?: any): void;
  /**
   * Returns the number of the input.
   */
  getValue(): void;
  /**
   * Selects the text inside the input or if it is <b>readonly</b> then the element is focused.
   */
  select(): void;
  /**
   * Sets the value of the input.
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

