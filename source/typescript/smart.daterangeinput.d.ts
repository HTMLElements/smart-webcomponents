import  {BaseElement, Animation} from "./smart.element"

export interface DateRangeInputProperties {
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines the format of the dates displayed in the input. Accepts valid ECMAScript Internationalization API format. By default the date format is determined by the 'locale' property. Intl.DateTimeFormat is used to format date strings in JavaScript
   * Default value: {"day": "numeric", "month": "numeric", "year": "numeric" }
   */
  dateFormat?: DateRangeFormat;
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
   * Determines whether the 'Today/Clear' icons will be visible or not.
   * Default value: false
   */
  icons?: boolean;
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
   * Determines the number of months that will be displayed inside the popup.
   * Default value: 1
   */
  months?: number;
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
   * Determines the delimiter between the selected dates in the input. This delimiter is ued to distinguish the starting date from the ending date.
   * Default value: " - "
   */
  separator?: string;
  /**
   * Determines the format of the dates displayed in the input. Accepts valid ECMAScript Internationalization API format. By default the date foramt is determined by the 'locale' property.
   * Default value: { hour: '2-digit', minute: '2-digit' }
   */
  timeFormat?: TimeRangeFormat;
  /**
   * Determines whether time selection is available or not.
   * Default value: false
   */
  timepicker?: boolean;
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
   * Sets or gets the value of the element. The type of the value depends on the valueType property.
   * Default value: 
   */
  value?: any;
  /**
   * Determines the value type returned from the `value` property.
   * Default value: string
   */
  valueType?: DateRangeInputValueType;
}
/**
 DateRangeInput specifies an input field where the user can enter a date range ( from date - to date ). It also has a popup with a Calendar that allows to select a date range. Time selection is an additional feature that can be enabled which allows to specify time for the date range.
*/
export interface DateRangeInput extends BaseElement, DateRangeInputProperties {

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
}

/**Determines the format of the dates displayed in the input. Accepts valid ECMAScript Internationalization API format. By default the date format is determined by the 'locale' property. Intl.DateTimeFormat is used to format date strings in JavaScript */
export interface DateRangeFormat {
  /**
   * Day format.
   * Default value: numeric
   */
  day?: DateRangeFormatDay;
  /**
   * Month format.
   * Default value: numeric
   */
  month?: DateRangeFormatMonth;
  /**
   * Year format.
   * Default value: numeric
   */
  year?: DateRangeFormatYear;
}

/**Determines the format of the dates displayed in the input. Accepts valid ECMAScript Internationalization API format. By default the date foramt is determined by the 'locale' property. */
export interface TimeRangeFormat {
  /**
   * Hour format.
   * Default value: 2-digit
   */
  hour?: TimeRangeFormatHour;
  /**
   * Minute format.
   * Default value: 2-digit
   */
  minute?: TimeRangeFormatMinute;
}

declare global {
    interface Document {
        createElement(tagName: "smart-date-range-input"): DateRangeInput;
        querySelector(selectors: "smart-date-range-input"): DateRangeInput | null;
        querySelectorAll(selectors: "smart-date-range-input"): NodeListOf<DateRangeInput>;
        getElementsByTagName(qualifiedName: "smart-date-range-input"): HTMLCollectionOf<DateRangeInput>;
        getElementsByName(elementName: "smart-date-range-input"): NodeListOf<DateRangeInput>;
    }
}

/**Day format. */
export declare type DateRangeFormatDay = 'numeric' | '2-digit';
/**Month format. */
export declare type DateRangeFormatMonth = 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';
/**Year format. */
export declare type DateRangeFormatYear = 'numeric' | '2-digit';
/**Determines the position of the drop down button. */
export declare type DropDownButtonPosition = 'none' | 'left' | 'right';
/**Hour format. */
export declare type TimeRangeFormatHour = 'numeric' | '2-digit';
/**Minute format. */
export declare type TimeRangeFormatMinute = 'numeric' | '2-digit';
/**Determines the value type returned from the `value` property. */
export declare type DateRangeInputValueType = 'string' | 'object';
