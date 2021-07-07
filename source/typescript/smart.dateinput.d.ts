import  {BaseElement, Animation} from "./smart.element"

export interface DateInputProperties {
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines whether the calendar button pop-up will be closed automatically when date or time is selected through it.
   * Default value: false
   */
  autoClose?: boolean;
  /**
   * Determines the delay before the calendar pop-up is automatically closed. Applicable only when autoClose is set to true.
   * Default value: 500
   */
  autoCloseDelay?: number;
  /**
   * Determines the format of the dates displayed in the input. Accepts valid ECMAScript Internationalization API format. Intl.DateTimeFormat is used to format date strings in JavaScript. By default the date format is 'numeric'. The default value is: { day: 'numeric', month: 'numeric', year: 'numeric' }
   * Default value: { day: 'numeric', month: 'numeric', year: 'numeric' }
   */
  dateTimeFormat?: DateTimeFormat;
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
   * Sets or gets the value of the element. Expected value is: Date string, Date object or null.
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

/**Determines the format of the dates displayed in the input. Accepts valid ECMAScript Internationalization API format. Intl.DateTimeFormat is used to format date strings in JavaScript. By default the date format is 'numeric'. The default value is: { day: 'numeric', month: 'numeric', year: 'numeric' } */
export interface DateTimeFormat {
  /**
   * Day format.
   * Default value: numeric
   */
  day?: DateTimeFormatDay;
  /**
   * Month format.
   * Default value: numeric
   */
  month?: DateTimeFormatMonth;
  /**
   * Year format.
   * Default value: numeric
   */
  year?: DateTimeFormatYear;
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

/**Day format. */
export declare type DateTimeFormatDay = 'numeric' | '2-digit';
/**Month format. */
export declare type DateTimeFormatMonth = 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';
/**Year format. */
export declare type DateTimeFormatYear = 'numeric' | '2-digit';
/**Determines the position of the drop down button. */
export declare type DropDownButtonPosition = 'none' | 'left' | 'right';
