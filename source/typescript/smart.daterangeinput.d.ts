import  {BaseElement, Animation} from "./smart.element"

export interface DateRangeInputProperties {
  /**
   * Sets or retrieves the animation mode for the component. When this property is set to 'none', all animations are disabled, resulting in immediate visual changes without any transition effects. For other values, the corresponding animation style will be applied during state changes.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Specifies the format used to display dates within the input field. This property accepts any valid date formatting options supported by the ECMAScript Internationalization API (Intl.DateTimeFormat), allowing for customized date representations based on user needs. By default, the date format adapts to the value provided in the 'locale' property, ensuring localization and regional date standards are respected. Under the hood, JavaScript's Intl.DateTimeFormat is utilized to generate the formatted date strings according to the specified format and locale settings.
   * Default value: {"day": "numeric", "month": "numeric", "year": "numeric" }
   */
  dateFormat?: DateRangeFormat;
  /**
   * Determines whether the element is interactive or inactive. When enabled, the element can receive user input and respond to events. When disabled, the element appears visually distinct (usually grayed out) and does not respond to user actions such as clicks or keyboard input.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies the alignment and placement of the dropdown button relative to its parent element. This property controls whether the dropdown button appears to the left, right, above, or below its associated component.
   * Default value: right
   */
  dropDownButtonPosition?: DropDownButtonPosition | string;
  /**
   * Specifies the height of the dropdown menu. By default, this value is set to an empty string, which means the dropdown’s height will be determined by the corresponding CSS variable. If a specific height is provided, it will override the CSS variable and explicitly set the dropdown’s height.
   * Default value: 
   */
  dropDownHeight?: string | number;
  /**
   * Specifies the width of the dropdown menu. By default, this property is set to an empty string, meaning the dropdown's width will be determined by the associated CSS variable rather than a fixed value. You can override this behavior by explicitly setting a width value (e.g., '200px', '50%'), which will apply directly to the dropdown element. If left unset, ensure that the relevant CSS variable is defined to control the dropdown's width as needed.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Controls the visibility of the 'Today' and 'Clear' icons in the user interface. Set this option to display or hide these icons, allowing users to quickly select the current date or clear their selection.
   * Default value: false
   */
  icons?: boolean;
  /**
   * Specifies the autocomplete attribute for the input element, which informs the browser and user agents about the expected type of data to be entered. This attribute helps determine whether and how the browser may offer autocomplete suggestions or automatically fill in the input based on previously entered information. Setting this value provides guidance on the input’s purpose—such as 'on' (enable autocomplete), 'name' (person’s full name), 'organization' (company or organization name), 'street-address' (street address), and other standardized options—improving user experience and data accuracy in forms.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * Defines or retrieves the unlockKey, a unique identifier or code required to activate or grant access to the product’s features or content.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language setting. This property works together with the messages property to display content in the selected language. When the language is set, the appropriate localized messages from the messages object are used.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A callback function that allows you to define a custom formatting logic for messages returned by the Localization Module. Use this to modify or enhance how localized messages are structured or displayed before they are delivered to the application.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Specifies the latest selectable date that can be displayed on the calendar within the popup. Users will not be able to select any date beyond this maximum limit.
   * Default value: new Date(2100, 1, 1)
   */
  max?: any;
  /**
   * Defines or retrieves an object containing the text strings displayed by the widget, allowing for easy localization and customization of user-facing messages, labels, and prompts. This property works together with the locale property to display content in the appropriate language for end users. Use this setting to provide translations and update UI text based on the selected locale.
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
   * Specifies the earliest selectable date in the calendar that appears within the popup. Dates prior to this value will be disabled and cannot be selected by the user.
   * Default value: new Date(1900, 1, 1)
   */
  min?: any;
  /**
   * Specifies how many calendar months are visible within the popup interface at once. Increasing this number allows users to view and select dates across multiple months simultaneously.
   * Default value: 1
   */
  months?: number;
  /**
   * Sets or retrieves the value of the element's name attribute. The name attribute is important when submitting data within an HTML form, as it identifies the form field's key in the submitted data, allowing the server to process the input correctly. Assigning a unique name to each form element ensures that their values are included in the form submission and can be accessed on the server side.
   * Default value: ""
   */
  name?: string;
  /**
   * Specifies whether the dropdown menu is currently open ('true') or closed ('false'). This boolean value controls the visibility of the dropdown component on the user interface.
   * Default value: false
   */
  opened?: boolean;
  /**
   * Specifies the placeholder text that appears inside the input field when it is empty, providing a hint or example of the expected input value.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Specifies whether the user can type text directly into the input field. When a dataSource is provided and dropDownButtonPosition is set to 'left' or 'right', setting readonly to true makes the element function as a DropDownList, allowing selection only from the provided options. Setting readonly to false enables ComboBox behavior, allowing the user to both select from the list and enter custom input.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Gets or sets a value that specifies whether the element's alignment is adjusted to support right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element will be displayed in a manner consistent with locales that require right-to-left text direction, ensuring proper layout and text alignment for RTL fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the character or string used to separate the start date and end date within the input field when a date range is selected. This delimiter helps clearly distinguish between the beginning and ending dates entered by the user.
   * Default value: " - "
   */
  separator?: string;
  /**
   * Specifies the format in which dates are displayed within the input field. This property accepts date format options compatible with the ECMAScript Internationalization API (Intl.DateTimeFormat). If not explicitly set, the date format will automatically be determined based on the current value of the 'locale' property. Ensure the provided format object follows the valid options for Intl.DateTimeFormat to guarantee proper date rendering.
   * Default value: { hour: '2-digit', minute: '2-digit' }
   */
  timeFormat?: TimeRangeFormat;
  /**
   * Specifies whether users can select a time value in addition to a date. When enabled, a time picker will be displayed, allowing users to choose both date and time; when disabled, only date selection is available.
   * Default value: false
   */
  timepicker?: boolean;
  /**
   * Specifies the visual theme applied to the element. Themes control the appearance and styling of elements, including colors, fonts, spacing, and other design attributes, ensuring a consistent look and feel across the user interface.
   * Default value: ""
   */
  theme?: string;
  /**
   * When set to true, this property prevents the element from receiving keyboard or programmatic focus. As a result, users will not be able to navigate to the element using the Tab key or other focus methods.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Gets or sets the value of the element. The data type of value is determined by the valueType property; for example, if valueType is set to "number", value will hold a numeric value, while if valueType is "string", value will contain a text string. Use this property to reliably read from or assign a new value to the element in accordance with its specified type.
   * Default value: 
   */
  value?: any;
  /**
   * Specifies the data type that will be returned by the 'value' property, allowing developers to know what type of value (e.g., string, number, boolean, object) to expect when accessing this property.
   * Default value: string
   */
  valueType?: DateRangeInputValueType | string;
}
/**
 DateRangeInput specifies an input field where the user can enter a date range ( from date - to date ). It also has a popup with a Calendar that allows to select a date range. Time selection is an additional feature that can be enabled which allows to specify time for the date range.
*/
export interface DateRangeInput extends BaseElement, DateRangeInputProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the user modifies the current selection, such as by selecting or deselecting text, items, or options within the interface. It fires each time the selection state changes, enabling developers to respond dynamically to user interactions.
	* @param event. The custom event. Custom data event was created with: ev.detail(label, oldLabel, oldValue, value)
   *  label - The label of the new selected item.
   *  oldLabel - The label of the item that was previously selected before the event was triggered.
   *  oldValue - The value of the item that was previously selected before the event was triggered.
   *  value - The value of the new selected item.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Closes the dropdown menu by hiding all its options and returning the dropdown to its inactive state. This action ensures that no items are displayed and any selection process is canceled or finalized, depending on the current workflow.
   */
  close(): void;
  /**
   * Displays the dropdown menu, allowing users to view and select available options.
   */
  open(): void;
  /**
   * Selects the text within the input field. If the input is set to <b>readonly</b>, the element will be focused instead, but the text will not be selected.
   */
  select(): void;
}

/**Specifies the format used to display dates within the input field. This property accepts any valid date formatting options supported by the ECMAScript Internationalization API (Intl.DateTimeFormat), allowing for customized date representations based on user needs. By default, the date format adapts to the value provided in the 'locale' property, ensuring localization and regional date standards are respected. Under the hood, JavaScript's Intl.DateTimeFormat is utilized to generate the formatted date strings according to the specified format and locale settings. */
export interface DateRangeFormat {
  /**
   * Day format.
   * Default value: numeric
   */
  day?: DateRangeFormatDay | string;
  /**
   * Month format.
   * Default value: numeric
   */
  month?: DateRangeFormatMonth | string;
  /**
   * Year format.
   * Default value: numeric
   */
  year?: DateRangeFormatYear | string;
}

/**Specifies the format in which dates are displayed within the input field. This property accepts date format options compatible with the ECMAScript Internationalization API (Intl.DateTimeFormat). If not explicitly set, the date format will automatically be determined based on the current value of the 'locale' property. Ensure the provided format object follows the valid options for Intl.DateTimeFormat to guarantee proper date rendering. */
export interface TimeRangeFormat {
  /**
   * Hour format.
   * Default value: 2-digit
   */
  hour?: TimeRangeFormatHour | string;
  /**
   * Minute format.
   * Default value: 2-digit
   */
  minute?: TimeRangeFormatMinute | string;
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
/**Specifies the alignment and placement of the dropdown button relative to its parent element. This property controls whether the dropdown button appears to the left, right, above, or below its associated component. */
export declare type DropDownButtonPosition = 'none' | 'left' | 'right';
/**Hour format. */
export declare type TimeRangeFormatHour = 'numeric' | '2-digit';
/**Minute format. */
export declare type TimeRangeFormatMinute = 'numeric' | '2-digit';
/**Specifies the data type that will be returned by the 'value' property, allowing developers to know what type of value (e.g., string, number, boolean, object) to expect when accessing this property. */
export declare type DateRangeInputValueType = 'string' | 'object';
