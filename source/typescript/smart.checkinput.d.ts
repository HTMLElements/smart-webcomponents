import  {BaseElement, Animation} from "./smart.element"

export interface CheckInputProperties {
  /**
   * Specifies or retrieves the current animation mode. When the property is set to 'none', all animation effects are disabled, resulting in instant transitions without visual motion. For other values, the property enables different types of animations, which govern how elements transition or change states on the interface.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Specifies the amount of time, in milliseconds, to wait before displaying the dropdown menu with autocomplete suggestions after the user begins typing. This delay helps control how quickly the matches appear, improving performance and user experience by preventing the dropdown from opening immediately with every keystroke.
   * Default value: 100
   */
  autoCompleteDelay?: number;
  /**
   * Specifies the source of data that populates the Input component. The dataSource property accepts one of the following:- 'Array of primitive values': An array consisting of strings or numbers, where each element represents a list item.- 'Array of objects': An array of objects, where each object defines the properties of a list item—typically using keys such as label for display text and value for the underlying value.- 'Callback function': A function that, when called, returns either of the above array formats (strings, numbers, or objects).This flexibility allows you to provide static data inline, transform or fetch data dynamically, and customize which properties represent the list items.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Specifies whether the element is interactive and can accept user input. When enabled, the element is fully functional; when disabled, the element is rendered inactive and does not respond to user actions such as clicks, typing, or focus.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies the placement of the dropdown button relative to its parent element (e.g., top, bottom, left, or right). This setting controls where the dropdown button will appear in the user interface.
   * Default value: right
   */
  dropDownButtonPosition?: DropDownButtonPosition | string;
  /**
   * Specifies the height of the dropdown menu. By default, this property is set to an empty string, which means the dropdown's height is determined by a corresponding CSS variable. You can override the default behavior by explicitly setting a height value, otherwise the component will use the CSS variable to control its height.
   * Default value: 
   */
  dropDownHeight?: string | number;
  /**
   * Specifies the width of the dropdown menu. By default, this property is set to an empty string, which means the dropdown's width will be determined by a corresponding CSS variable. If a value is provided, it will override the CSS variable and explicitly set the width of the dropdown. This allows for flexible customization of the dropdown's appearance through either direct property assignment or external styling.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Specifies the intended purpose of the input field and determines whether the user’s browser (user agent) is permitted to offer automated autofill suggestions when the input appears within a form. This attribute provides guidance to the browser about the type of information that should be entered, enhancing both user experience and data accuracy by suggesting relevant values. It corresponds to the standard HTML autocomplete attribute, which can accept a variety of predefined values such as 'on' (to enable autofill), 'off' (to disable autofill), 'name' (for personal names), 'organization' (for company names), 'street-address' (for addresses), and many others. By setting this attribute appropriately, developers can improve form usability and help browsers provide more accurate suggestions based on the expected input type.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * Specifies the maximum number of matching items to display in the dropdown list when a new autoComplete query is performed. By default, up to 8 items will be shown in the dropdown. If the total number of matched items exceeds this limit, only the first 8 results will be visible to the user. Adjust this value to control how many suggestions are presented at once in the dropdown interface.
   * Default value: 8
   */
  items?: number;
  /**
   * Defines the unlockKey property, which stores the unique key required to unlock and access the product. Use this property to set a new unlock key or retrieve the current unlock key associated with the product.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language setting. This property determines which language-specific messages from the messages property are displayed. Changing the language will update the content shown to the user based on the corresponding localized messages defined in messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A callback function that allows you to customize the formatting of messages generated by the Localization Module before they are returned to the application. This enables you to modify, translate, or format localization messages according to specific requirements or user preferences.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines or retrieves an object containing localized string values used within the widget’s user interface, allowing for text elements to be easily translated into different languages. This property works in conjunction with the locale property to enable internationalization by customizing display text based on the selected language or regional setting.
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
   * Specifies the minimum number of characters a user must type into the input field before the autocomplete feature becomes active. Once this character threshold is reached, the dropdown will appear, displaying a list of items that match the entered text.
   * Default value: 1
   */
  minLength?: number;
  /**
   * Sets or retrieves the value of the "name" attribute for the element. The "name" attribute identifies the element within an HTML form, and its value is used as the key when the form data is submitted to the server. This allows data associated with the element to be correctly grouped and processed on the server side.
   * Default value: ""
   */
  name?: string;
  /**
   * Specifies whether the dropdown menu is currently expanded and visible (open) or collapsed and hidden (closed).
   * Default value: false
   */
  opened?: boolean;
  /**
   * Specifies the placeholder text displayed inside the input field when it is empty, providing guidance or an example to the user about what to enter.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Specifies or retrieves the query string used to filter items in the data source. This query is utilized by the autoComplete functionality to determine which items should be displayed based on user input. If the query is an empty string, no filtering is applied and all items from the data source are shown.
   * Default value: 
   */
  query?: string | number;
  /**
   * Specifies the autocomplete query mode, which controls how search suggestions are generated and determines the matching algorithm used for the autocomplete operation. This property influences whether autocomplete suggestions are based on prefix matching, fuzzy matching, or other supported algorithms.
   * Default value: containsIgnoreCase
   */
  queryMode?: CheckInputQueryMode | string;
  /**
   * Specifies whether the user is allowed to enter text directly into the input field. When the dropDownButtonPosition property is set to either 'left' or 'right', the readonly property controls the behavior of the component if a dataSource is provided:  - If readonly is false, the element functions as a ComboBox, allowing text input and selection from the data source.  - If readonly is true, it behaves as a DropDownList, restricting input to selection from the provided options only, and preventing manual text entry.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or returns a value that determines whether the element’s text direction is set to right-to-left (RTL) alignment, enabling proper display for languages and locales that use RTL scripts, such as Arabic or Hebrew.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the character or string used to separate multiple selected items within the input field. This delimiter defines how individual selections are visually and programmatically distinguished from one another in the input’s value.
   * Default value: ","
   */
  separator?: string;
  /**
   * Specifies whether an extra option—typically "Select All" or "Deselect All"—is shown at the top of the options list. This option enables users to quickly select or unselect all available items in the list with a single action.
   * Default value: false
   */
  selectAll?: boolean;
  /**
   * Retrieves or assigns an array containing the currently selected values. This property allows you to access the full list of items that have been selected, or update the selection by providing a new array of values.
   * Default value: 
   */
  selectedValues?: any;
  /**
   * Specifies whether the items are arranged in alphabetical order. If set to true, the list will be sorted from A to Z based on item names; if false, the original order will be preserved.
   * Default value: false
   */
  sorted?: boolean;
  /**
   * Specifies the sorting order to be used when sort is enabled. Set to asc for ascending order or desc for descending order.
   * Default value: "asc"
   */
  sortDirection?: string;
  /**
   * Specifies the visual theme applied to the element, controlling its overall appearance such as colors, fonts, and styles. Themes allow for consistent and customizable styling across elements within the application.
   * Default value: ""
   */
  theme?: string;
  /**
   * Specifies the type of data that the input field accepts (e.g., text, number, email, password). Setting the input type controls the kind of input users can enter and may also influence the on-screen keyboard and validation behavior in web browsers.
   * Default value: ""
   */
  type?: string;
  /**
   * When set to true, this property prevents the element from being focused, either by keyboard navigation (such as using the Tab key) or by mouse interaction. As a result, the element is removed from the page's tab order and cannot receive input focus.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Retrieves the current value of the element or assigns a new value to it. This property allows you to programmatically access or update the element's value, depending on whether it is used as a getter or a setter. Commonly used with form elements such as input, textarea, and select to read or change user input.
   * Default value: ""
   */
  value?: string;
}
/**
 CheckInput specifies an input field where the user can enter data. Auto-complete options with checkboxes are displayed for easier input. Checkboxes allow to select/unselect one or multiple items.
*/
export interface CheckInput extends BaseElement, CheckInputProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the user modifies the current selection. It occurs whenever the selected item(s) change, allowing you to respond to user interactions such as clicking, typing, or using keyboard navigation to alter the selection state.
	* @param event. The custom event. Custom data event was created with: ev.detail(label, oldLabel, oldValue, value)
   *  label - The label of the new selected item.
   *  oldLabel - The label of the item that was previously selected before the event was triggered.
   *  oldValue - The value of the item that was previously selected before the event was triggered.
   *  value - The value of the new selected item.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Closes the dropdown menu, hiding all currently visible options and returning the component to its default collapsed state.
   */
  close(): void;
  /**
   * Ensures that the currently active (selected) item within the list is always scrolled into view, so users can see and interact with their selection even when navigating through long or overflowing content.
   */
  ensureVisible(): void;
  /**
   * Displays the dropdown menu, making its list of selectable options visible to the user.
   */
  open(): void;
  /**
   * Selects the text inside the input field. If the input field is set to <b>readonly</b>, the function does not select the text but instead sets focus to the element. This ensures interactive behavior depending on whether the input can be edited.
   */
  select(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-check-input"): CheckInput;
        querySelector(selectors: "smart-check-input"): CheckInput | null;
        querySelectorAll(selectors: "smart-check-input"): NodeListOf<CheckInput>;
        getElementsByTagName(qualifiedName: "smart-check-input"): HTMLCollectionOf<CheckInput>;
        getElementsByName(elementName: "smart-check-input"): NodeListOf<CheckInput>;
    }
}

/**Specifies the placement of the dropdown button relative to its parent element (e.g., top, bottom, left, or right). This setting controls where the dropdown button will appear in the user interface. */
export declare type DropDownButtonPosition = 'none' | 'left' | 'right' | 'top' | 'bottom';
/**Specifies the autocomplete query mode, which controls how search suggestions are generated and determines the matching algorithm used for the autocomplete operation. This property influences whether autocomplete suggestions are based on prefix matching, fuzzy matching, or other supported algorithms. */
export declare type CheckInputQueryMode = 'contains' | 'containsIgnoreCase' | 'doesNotContain' | 'doesNotContainIgnoreCase' | 'equals' | 'equalsIgnoreCase' | 'startsWith' | 'startsWithIgnoreCase' | 'endsWith' | 'endsWithIgnoreCase';
