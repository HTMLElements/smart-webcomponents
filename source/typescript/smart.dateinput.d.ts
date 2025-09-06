import  {BaseElement, Animation} from "./smart.element"

export interface DateInputProperties {
  /**
   * Specifies whether the calendar button pop-up should automatically close after a user selects a date or time. If set to true, the pop-up will close immediately upon selection; if false, the pop-up will remain open, allowing multiple selections or further interaction.
   * Default value: false
   */
  autoClose?: boolean;
  /**
   * Specifies the duration (in milliseconds) to wait before automatically closing the calendar pop-up after it is opened. This setting is effective only when autoClose is set to true; if autoClose is false, this option is ignored.
   * Default value: 500
   */
  autoCloseDelay?: number;
  /**
   * Specifies the configuration options and properties that will be applied to the popup calendar, such as date format, selectable date range, default view, and localization settings.
   * Default value: null
   */
  calendarProperties?: any;
  /**
   * Specifies the format in which dates are displayed within the input field. This property accepts a configuration object compatible with the ECMAScript Internationalization API (Intl.DateTimeFormat). You can customize the date format by providing options such as day, month, and year with values like 'numeric', '2-digit', 'long', etc. For example, { day: 'numeric', month: 'long', year: '2-digit' }. Internally, JavaScript’s Intl.DateTimeFormat is used to format the date strings according to these options. If not specified, the default format is { day: 'numeric', month: 'numeric', year: 'numeric' }, which displays dates using numeric day, month, and year values (e.g., 06/11/2024).
   * Default value: { day: 'numeric', month: 'numeric', year: 'numeric' }
   */
  dateTimeFormat?: any;
  /**
   * Determines whether the element is enabled and interactive, or disabled and non-interactive. When set to true, the element is disabled and cannot be interacted with by the user; when set to false, the element remains enabled and fully functional.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies the placement of the dropdown button within its container, such as aligning it to the left, right, center, or another designated position. This setting affects where the button appears in relation to surrounding elements.
   * Default value: right
   */
  dropDownButtonPosition?: DropDownButtonPosition | string;
  /**
   * Specifies the height of the drop-down menu. By default, the height is set to 'auto', allowing the drop-down to automatically adjust its size based on its content. You can set a specific value (e.g., '200px', '50%', etc.) to limit or customize the height as needed.
   * Default value: auto
   */
  dropDownHeight?: string | number;
  /**
   * Specifies the width of the dropdown menu. By default, this property is set to an empty string, which means the dropdown's width will be determined by the corresponding CSS variable. If a specific value is provided (such as "200px" or "50%"), it will override the CSS variable and explicitly set the dropdown's width to that value. Use this property to customize the dropdown’s width as needed.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Sets the custom date and time formatting pattern. When the 'formatString' property is set, it takes precedence over the 'dateTimeFormat' property, which will be disabled. The formatted output will strictly follow the pattern defined in 'formatString'.'Built-in Format Strings:'- ''d'': Short date pattern (e.g., 'M/d/yyyy')- ''D'': Long date pattern (e.g., 'dddd, MMMM dd, yyyy')- ''t'': Short time pattern (e.g., 'h:mm tt')- ''T'': Long time pattern (e.g., 'h:mm:ss tt')- ''f'': Long date, short time pattern (e.g., 'dddd, MMMM dd, yyyy h:mm tt')- ''F'': Long date, long time pattern (e.g., 'dddd, MMMM dd, yyyy h:mm:ss tt')- ''M'': Month/day pattern (e.g., 'MMMM dd')- ''Y'': Year/month pattern (e.g., 'yyyy MMMM')- ''S'': Sortable date/time pattern, culture-invariant (e.g., 'yyyy-MM-ddTHH:mm:ss')'Custom Format String Components:'- ''d'': Day of month (1–31)- ''dd'': Day of month, two digits (01–31)- ''ddd'': Abbreviated day name (e.g., Mon, Tue)- ''dddd'': Full day name (e.g., Monday, Tuesday)- ''h'': Hour (12-hour clock, 1–12)- ''hh'': Hour (12-hour clock, two digits, 01–12)- ''H'': Hour (24-hour clock, 0–23)- ''HH'': Hour (24-hour clock, two digits, 00–23)- ''m'': Minute (0–59)- ''mm'': Minute, two digits (00–59)- ''M'': Month (1–12)- ''MM'': Month, two digits (01–12)- ''MMM'': Abbreviated month name (e.g., Jan, Feb)- ''MMMM'': Full month name (e.g., January, February)- ''s'': Second (0–59)- ''ss'': Second, two digits (00–59)- ''t'': First character of the AM/PM designator (A or P)- ''tt'': AM/PM designator- ''y'': Year, last one or two digits (e.g., 0–99)- ''yy'': Year, last two digits (00–99)- ''yyy'': Year, minimum three digits- ''yyyy'': Year, four digits (e.g., 2024)- ''yyyyy'': Year, minimum five digits (pads with leading zeros if necessary)'Note:'  Use these format specifiers to customize how dates and times are displayed in your application. If you assign a value to 'formatString', make sure to use the correct pattern for your intended output. When this property is active, 'dateTimeFormat' settings are ignored.
   * Default value: ""
   */
  formatString?: string;
  /**
   * Defines the expected type of input data for the form element and specifies whether, and to what extent, the browser or user agent is allowed to provide automated autofill assistance. This value directly corresponds to the standard HTML autocomplete attribute and guides browsers in offering suggestions to the user, improving form completion speed and accuracy. Possible values include generic options such as 'on' or 'off', as well as more specific values describing the kind of information expected—such as 'name', 'email', 'organization', 'street-address', and others. Setting this attribute helps enhance both user experience and data accuracy by allowing browsers to match the input field with saved user data.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * Retrieves or assigns the unlockKey value used to authenticate and grant access to the product. The unlockKey serves as a security credential required to unlock the product’s features or content.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language setting. This property determines which language is used when displaying messages, in coordination with the messages property that holds localized message strings for different languages. Adjusting this property updates the displayed messages to match the selected language.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A callback function that allows you to define custom formatting for messages returned by the Localization Module. Use this to modify or enhance the appearance, structure, or content of localization messages before they are rendered to the user.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Specifies the latest selectable date that can be displayed in the popup's Calendar. Dates beyond this value will be disabled and cannot be selected by the user.
   * Default value: new Date(2100, 1, 1)
   */
  max?: any;
  /**
   * Defines or retrieves an object containing the set of user-facing strings displayed by the widget, allowing them to be customized for different languages. This property works in conjunction with the locale property to support localization and internationalization of the widget interface. By providing translated strings in this object, you can ensure that all text elements within the widget match the selected locale.
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
   * Specifies the earliest selectable date that can be shown in the Calendar component within the popup. Dates prior to this value will be disabled and cannot be selected by the user.
   * Default value: new Date(1900, 1, 1)
   */
  min?: any;
  /**
   * Enhances or retrieves the value of the 'name' attribute for the element. The 'name' attribute assigns a unique identifier to the element, which is essential when submitting form data. During form submission, the value of the element is sent to the server associated with this 'name', allowing the server to correctly process and recognize each field of the form.
   * Default value: ""
   */
  name?: string;
  /**
   * Specifies whether the dropdown menu is currently open (visible to the user) or closed (hidden from view).
   * Default value: false
   */
  opened?: boolean;
  /**
   * Specifies the placeholder text that appears inside the input field before the user enters a value. This text provides guidance or an example of the expected input format.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Determines whether the user can enter or edit text in the input field. When the dropDownButtonPosition property is set to 'left' or 'right' and a dataSource is provided, the readonly property controls the input's behavior:  - If readonly is false, the element functions as a ComboBox, allowing users to type custom values in addition to selecting from the drop-down list.  - If readonly is true, the element functions as a DropDownList, restricting user input to selections from the provided list only; manual text entry is disabled.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or retrieves a value that specifies whether the element’s text and layout are aligned to support right-to-left (RTL) languages, such as Arabic or Hebrew, ensuring proper display and reading order for locales that use RTL scripts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the visual theme to be applied to the element. The selected theme controls the overall appearance, including colors, fonts, and styles, ensuring a consistent look and feel across the element.
   * Default value: ""
   */
  theme?: string;
  /**
   * When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible via tab navigation or script-based focus methods.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Gets or sets the value of the element. The value should be either a date string (e.g., "2024-06-01"), a JavaScript Date object, or null to indicate no value.
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
   * This event is triggered whenever the user changes the current selection, such as highlighting different text, selecting a new item in a list, or modifying the currently selected elements. It allows you to execute custom code in response to any change in selection within the relevant component or interface.
	* @param event. The custom event. Custom data event was created with: ev.detail(label, oldLabel, oldValue, value)
   *  label - The label of the new selected item.
   *  oldLabel - The label of the item that was previously selected before the event was triggered.
   *  oldValue - The value of the item that was previously selected before the event was triggered.
   *  value - The value of the new selected item.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Closes the dropdown menu, hiding its options from view and returning the dropdown component to its inactive state.
   */
  close(): void;
  /**
   * Displays and expands the dropdown menu, allowing the user to view and select available options.
   */
  open(): void;
  /**
   * Enhancement:<br/><br/>"Selects the text within the input element. If the input is marked as <b>readonly</b>, the element will be focused without selecting its content."
   */
  select(): void;
  /**
   * Returns the value converted to the specified format, ensuring that the output matches the required data type or structure as requested.
   * @param {string | Date} value. The value to be formatted by the method. 
   * @param {any} format?. The object that contains the formatting properties. The argument should contain Intl.DateTimeFormat valid properties.
   */
  getFormattedValue(value: string | Date, format?: any): void;
  /**
   * Returns the date portion extracted from the provided input, which can be a date, datetime string, or timestamp. The output is formatted as a standard date (e.g., "YYYY-MM-DD"), omitting any time or timezone information present in the input.
   */
  getValue(): void;
  /**
   * Specifies the date value for the input field. This determines the preselected date that appears in the date picker when the input is rendered, or programmatically sets the input's current date. The value should follow the format 'YYYY-MM-DD' to ensure compatibility across browsers.
   * @param {string | Date} value. The value to be set. 
   */
  setValue(value: string | Date): void;
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

/**Specifies the placement of the dropdown button within its container, such as aligning it to the left, right, center, or another designated position. This setting affects where the button appears in relation to surrounding elements. */
export declare type DropDownButtonPosition = 'none' | 'left' | 'right';
