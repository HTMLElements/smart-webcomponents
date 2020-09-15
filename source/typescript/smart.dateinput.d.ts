import  {BaseElement, Animation} from "./smart.element"

export interface DateInputProperties {
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines the format of the dates displayed in the input. Accepts valid ECMAScript Internationalization API format. By default the date format is 'numeric'.
   * Default value: { day: 'numeric', month: 'numeric', year: 'numeric' }
   */
  dateTimeFormat?: DateInputDateTimeFormat;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines the position of the drop down button.
   * Default value: right
   */
  dropDownButtonPosition?: DropDownButtonPosition;
  /**
   * Sets the height of the drop down. By default it's set to 'auto'.
   * Default value: auto
   */
  dropDownHeight?: string | number;
  /**
   * Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownWidth?: string | number;
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
   * Determines the max date for the Calendar displayed inside the popup.
   * Default value: new Date(2100, 1, 1)
   */
  max?: any;
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
   * Determines the min date for the Calendar displayed inside the popup.
   * Default value: new Date(1900, 1, 1)
   */
  min?: any;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting data inside an HTML form.
   * Default value: ""
   */
  name?: string;
  /**
   * Determines whether the drop down is opened or not.
   * Default value: false
   */
  opened?: boolean;
  /**
   * Determines the placeholder of the input.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Determines whether ot not the user can enter text inside the input. if dropDownButtonPosition is set to 'left' or 'right' then readonly determines whether the element acts as a ComboBox or a DropDownList if a dataSource is provided.
   * Default value: false
   */
  readonly?: boolean;
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
   * Default value: 
   */
  value?: any;
}
/**
 DateInput specifies an input field where the user can enter a date. It also has a popup with a Calendar that allows to pick a date.
*/
export interface DateInput extends BaseElement, DateInputProperties {

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
   * Closes the drop down.
   */
  close(): void;
  /**
   * Opens the drop down.
   */
  open(): void;
  /**
   * Selects the text inside the input or if it is <b>readonly</b> then the element is focused.
   */
  select(): void;
  /**
   * Returns the value in the desired format.
   * @param {string | Date} value. The value to be formatted by the method. 
   * @param {any} format?. The object that contains the formatting properties. The argument should contain Intl.DateTimeFormat valid properties.
   */
  getFormattedValue(value: string | Date, format?: any): void;
  /**
   * Returns the date of the input.
   */
  getValue(): void;
  /**
   * Sets the date of the input.
   * @param {string | Date} value. The value to be set. 
   */
  setValue(value: string | Date): void;
}

/**Determines the format of the dates displayed in the input. Accepts valid ECMAScript Internationalization API format. By default the date format is 'numeric'. */
export interface DateInputDateTimeFormat {
  /**
   * 
   * Default value: undefined
   */
  0?: any;
  /**
   * 
   * Default value: undefined
   */
  1?: any;
  /**
   * 
   * Default value: undefined
   */
  2?: any;
  /**
   * 
   * Default value: undefined
   */
  3?: any;
  /**
   * 
   * Default value: undefined
   */
  4?: any;
  /**
   * 
   * Default value: undefined
   */
  5?: any;
  /**
   * 
   * Default value: undefined
   */
  6?: any;
  /**
   * 
   * Default value: undefined
   */
  7?: any;
  /**
   * 
   * Default value: undefined
   */
  8?: any;
  /**
   * 
   * Default value: undefined
   */
  9?: any;
  /**
   * 
   * Default value: undefined
   */
  10?: any;
  /**
   * 
   * Default value: undefined
   */
  11?: any;
  /**
   * 
   * Default value: undefined
   */
  12?: any;
  /**
   * 
   * Default value: undefined
   */
  13?: any;
  /**
   * 
   * Default value: undefined
   */
  14?: any;
  /**
   * 
   * Default value: undefined
   */
  15?: any;
  /**
   * 
   * Default value: undefined
   */
  16?: any;
  /**
   * 
   * Default value: undefined
   */
  17?: any;
  /**
   * 
   * Default value: undefined
   */
  18?: any;
  /**
   * 
   * Default value: undefined
   */
  19?: any;
  /**
   * 
   * Default value: undefined
   */
  20?: any;
  /**
   * 
   * Default value: undefined
   */
  21?: any;
  /**
   * 
   * Default value: undefined
   */
  22?: any;
  /**
   * 
   * Default value: undefined
   */
  23?: any;
  /**
   * 
   * Default value: undefined
   */
  24?: any;
  /**
   * 
   * Default value: undefined
   */
  25?: any;
  /**
   * 
   * Default value: undefined
   */
  26?: any;
  /**
   * 
   * Default value: undefined
   */
  27?: any;
  /**
   * 
   * Default value: undefined
   */
  28?: any;
  /**
   * 
   * Default value: undefined
   */
  29?: any;
  /**
   * 
   * Default value: undefined
   */
  30?: any;
  /**
   * 
   * Default value: undefined
   */
  31?: any;
  /**
   * 
   * Default value: undefined
   */
  32?: any;
  /**
   * 
   * Default value: undefined
   */
  33?: any;
  /**
   * 
   * Default value: undefined
   */
  34?: any;
  /**
   * 
   * Default value: undefined
   */
  35?: any;
  /**
   * 
   * Default value: undefined
   */
  36?: any;
  /**
   * 
   * Default value: undefined
   */
  37?: any;
  /**
   * 
   * Default value: undefined
   */
  38?: any;
  /**
   * 
   * Default value: undefined
   */
  39?: any;
  /**
   * 
   * Default value: undefined
   */
  40?: any;
  /**
   * 
   * Default value: undefined
   */
  41?: any;
  /**
   * 
   * Default value: undefined
   */
  42?: any;
  /**
   * 
   * Default value: undefined
   */
  43?: any;
  /**
   * 
   * Default value: undefined
   */
  44?: any;
  /**
   * 
   * Default value: undefined
   */
  45?: any;
  /**
   * 
   * Default value: undefined
   */
  46?: any;
  /**
   * 
   * Default value: undefined
   */
  47?: any;
  /**
   * 
   * Default value: undefined
   */
  48?: any;
  /**
   * 
   * Default value: undefined
   */
  49?: any;
  /**
   * 
   * Default value: undefined
   */
  50?: any;
  /**
   * 
   * Default value: undefined
   */
  51?: any;
  /**
   * 
   * Default value: undefined
   */
  52?: any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-date-input"): DateInput;
        querySelector(selectors: "smart-date-input"): DateInput | null;
        querySelectorAll(selectors: "smart-date-input"): NodeListOf<DateInput>;
        getElementsByTagName(qualifiedName: "smart-date-input"): HTMLCollectionOf<DateInput>;
        getElementsByName(elementName: "smart-date-input"): NodeListOf<DateInput>;
    }
}

/**Determines the position of the drop down button. */
export declare type DropDownButtonPosition = 'none' | 'left' | 'right';
