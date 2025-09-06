import  {BaseElement, Animation} from "./smart.element"

export interface ColorInputProperties {
  /**
   * Specifies or retrieves the current animation mode. When this property is set to 'none', all animations are disabled. Otherwise, the specified animation mode determines how animations are displayed.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Specifies the amount of time, in milliseconds, to wait before displaying the dropdown menu that shows matching suggestions from the autocomplete operation. This delay begins after the user stops typing, allowing you to control how quickly the autocomplete dropdown appears in response to user input.
   * Default value: 100
   */
  autoCompleteDelay?: number;
  /**
   * Specifies the source of data that provides the available color options to be loaded into the Input component. The dataSource property accepts one of the following formats:- 'Array of strings': Each string represents a valid color value.- 'Array of objects': Each object should contain attributes (such as label and value) that define the display properties and value of each color option in the list.- 'Callback function': A function that returns an array of items in either of the above formats (strings or objects with the specified attributes).This flexibility allows you to populate the Input with color choices from static lists or dynamic sources, ensuring seamless integration with various data structures.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Determines whether the element is interactive or not. When enabled, users can interact with the element; when disabled, the element becomes non-interactive and may appear visually subdued.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies the color palette to be used, including the individual colors and their arrangement or positioning within the user interface. This setting controls both the selection of colors and how they are visually organized or applied throughout the application.
   * Default value: default
   */
  displayMode?: ColorInputDisplayMode | string;
  /**
   * Specifies the placement of the dropdown button relative to its parent element, such as aligning it to the left, right, top, or bottom. This setting controls where the dropdown button will appear within the interface.
   * Default value: none
   */
  dropDownButtonPosition?: DropDownButtonPosition | string;
  /**
   * Specifies the height of the dropdown menu. By default, this value is an empty string, which means the dropdown's height is determined by the associated CSS variable. If a specific height is provided, it will override the default CSS variable, allowing you to directly control the dropdown's height through this property.
   * Default value: 
   */
  dropDownHeight?: string | number;
  /**
   * Specifies the width of the dropdown menu. By default, this property is set to an empty string (""), which means the dropdown's width will be determined by the value of a corresponding CSS variable rather than an explicit pixel or percentage value. You can override the default behavior by providing a specific width (e.g., "200px", "50%") to directly control the dropdown’s size. If left empty, ensure the relevant CSS variable is defined to maintain consistent styling.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Specifies the expected type of input for the form element and informs the browser about the purpose of the field. This allows the user agent (such as a web browser or password manager) to offer relevant, automated suggestions or autofill options to the user, based on previously entered or stored data. This property corresponds to the standard HTML autocomplete attribute, which accepts values like 'on' (enables autofill), 'off' (disables autofill), 'name', 'email', 'organization', 'street-address', and many others. Setting this attribute properly enhances accessibility, improves user experience, and ensures that the browser presents the correct input suggestions for each form field.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * Specifies the maximum number of items that can be displayed in the dropdown list as results of a new autoComplete query. When a user enters a search term, only up to this number of matching items will be shown in the dropdown. By default, a maximum of 8 items are visible, ensuring that the dropdown remains manageable and user-friendly. If there are more matching items than the specified maximum, only the first set will be displayed.
   * Default value: 8
   */
  items?: number;
  /**
   * Sets or retrieves the unlockKey, a unique code or token required to unlock and activate access to the product’s full features.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Defines or retrieves the current language code (e.g., 'en', 'fr'), which determines the locale used for displaying messages. This property works together with the messages property to select the appropriate set of localized messages for the specified language.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this to modify, localize, or adjust the appearance of messages before they are delivered to the user interface.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines or retrieves an object containing localized string values used throughout the widget’s user interface. This property allows you to customize or translate text elements, such as labels, tooltips, and messages, enabling support for multiple languages. It should be used together with the locale property to ensure that the correct set of localized strings is applied based on the selected language or region.
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
   * Specifies the minimum number of characters a user must enter into the input field before the autocomplete functionality is activated. Once this threshold is reached, the dropdown menu will open and display the list of matching items based on the user's input.
   * Default value: 1
   */
  minLength?: number;
  /**
   * Sets or retrieves the value of the element’s name attribute. The name attribute uniquely identifies the element within an HTML form and is used as the key when the form data is submitted to the server. This allows the submitted data to be organized and referenced by the specified name.
   * Default value: ""
   */
  name?: string;
  /**
   * Specifies whether the dropdown menu is currently open (visible) or closed (hidden).
   * Default value: false
   */
  opened?: boolean;
  /**
   * Specifies the placeholder text that appears within the input field when it is empty, providing a hint or example to guide users on the expected input format.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Defines or retrieves the filter query used to narrow down the displayed items. This query is utilized by the autoComplete operation to show only items that match the specified criteria. If the query is set to an empty string, no filtering is applied, and all items from the data source are displayed.
   * Default value: 
   */
  query?: string | number;
  /**
   * Specifies the query mode used for autocomplete operations. This property defines how the autocomplete engine interprets and matches user input against available data, determining the matching algorithm and search behavior (such as prefix, infix, or fuzzy matching) for generating autocomplete suggestions.
   * Default value: containsIgnoreCase
   */
  queryMode?: ColorQueryMode | string;
  /**
   * Specifies whether the input field is editable by the user. If set to true, the user can type text directly into the input. If set to false, the input becomes read-only, and the user can only select from the provided options. When a dataSource is supplied, this property also determines the component's behavior:  - If editable is true, the element functions as a ComboBox, allowing users to enter custom values or select from the list.  - If editable is false, the element acts as a DropDownList, restricting selection to the available options in the dataSource only.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or retrieves a value that determines whether the element's content alignment is configured for right-to-left languages, such as Arabic or Hebrew. This ensures proper layout and text direction for locales that require right-to-left reading order.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the visual theme to be applied to the element. The selected theme controls the element's overall appearance, including colors, fonts, backgrounds, and other stylistic properties, to ensure a consistent look and feel across the user interface.
   * Default value: ""
   */
  theme?: string;
  /**
   * If set to true, the element will be excluded from keyboard navigation and cannot receive focus via the Tab key or programmatically.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or retrieves the current value of the element, allowing you to either update its content programmatically or access its existing value for processing. This is commonly used with form elements such as input, textarea, and select to manage user input dynamically.
   * Default value: ""
   */
  value?: string;
  /**
   * Specifies the content or controls that will appear within the action section of the color picker component. This determines which buttons, options, or interface elements are available to the user when interacting with the color picker’s action area.
   * Default value: default
   */
  valueDisplayMode?: ColorValueDisplayMode | string;
  /**
   * Specifies the format in which the color value is represented. Supported formats include HEX, RGB, and RGBA. By default, the color format is automatically selected based on the current displayMode setting.
   * Default value: default
   */
  valueFormat?: ColorValueFormat | string;
}
/**
 ColorInput is an input field with colors displayed in a DropDown grid like in Excel.
*/
export interface ColorInput extends BaseElement, ColorInputProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the user modifies the current selection, such as highlighting a different range of text, choosing another item in a list, or altering the selected elements within an interface. It fires immediately after the selection change occurs, allowing you to respond dynamically to user interactions.
	* @param event. The custom event. Custom data event was created with: ev.detail(label, oldLabel, oldValue, value)
   *  label - The label of the new selected color.
   *  oldLabel - The label of the color that was previously selected before the event was triggered.
   *  oldValue - The value of the color that was previously selected before the event was triggered.
   *  value - The value of the new selected color.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Closes the dropdown menu, hiding all currently visible options and returning the component to its default, collapsed state.
   */
  close(): void;
  /**
   * Displays the dropdown menu, allowing the user to view and select available options.
   */
  open(): void;
  /**
   * Selects the text inside the input element. If the input is set to <b>readonly</b>, the element will be focused instead, without selecting the text.
   */
  select(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-color-input"): ColorInput;
        querySelector(selectors: "smart-color-input"): ColorInput | null;
        querySelectorAll(selectors: "smart-color-input"): NodeListOf<ColorInput>;
        getElementsByTagName(qualifiedName: "smart-color-input"): HTMLCollectionOf<ColorInput>;
        getElementsByName(elementName: "smart-color-input"): NodeListOf<ColorInput>;
    }
}

/**Specifies the color palette to be used, including the individual colors and their arrangement or positioning within the user interface. This setting controls both the selection of colors and how they are visually organized or applied throughout the application. */
export declare type ColorInputDisplayMode = 'default' | 'grid';
/**Specifies the placement of the dropdown button relative to its parent element, such as aligning it to the left, right, top, or bottom. This setting controls where the dropdown button will appear within the interface. */
export declare type DropDownButtonPosition = 'left' | 'right' | 'top' | 'bottom';
/**Specifies the query mode used for autocomplete operations. This property defines how the autocomplete engine interprets and matches user input against available data, determining the matching algorithm and search behavior (such as prefix, infix, or fuzzy matching) for generating autocomplete suggestions. */
export declare type ColorQueryMode = 'contains' | 'containsIgnoreCase' | 'doesNotContain' | 'doesNotContainIgnoreCase' | 'equals' | 'equalsIgnoreCase' | 'startsWith' | 'startsWithIgnoreCase' | 'endsWith' | 'endsWithIgnoreCase';
/**Specifies the content or controls that will appear within the action section of the color picker component. This determines which buttons, options, or interface elements are available to the user when interacting with the color picker’s action area. */
export declare type ColorValueDisplayMode = 'default' | 'colorBox' | 'colorCode' | 'none';
/**Specifies the format in which the color value is represented. Supported formats include HEX, RGB, and RGBA. By default, the color format is automatically selected based on the current displayMode setting. */
export declare type ColorValueFormat = 'default' | 'rgb' | 'rgba' | 'hex';
