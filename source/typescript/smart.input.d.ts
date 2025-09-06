import  {BaseElement, Animation} from "./smart.element"

export interface InputProperties {
  /**
   * Specifies the amount of time, in milliseconds, to wait before displaying the dropdown list of matching suggestions after the user interacts with the autocomplete input. This delay helps control how quickly the dropdown appears, improving user experience by preventing it from opening too rapidly as users type.
   * Default value: 100
   */
  autoCompleteDelay?: number;
  /**
   * Specifies the data source that will be used to populate the Input component. The dataSource property accepts multiple formats:- 'Array of Primitives:' An array of strings or numbers, where each element represents a single list item.- 'Array of Objects:' An array of objects, where each object defines the properties of a list item. The recognized fields for each item object include:  - label (string): The display text for the item.  - value (string | number): The underlying value associated with the item.  - selected (boolean): Indicates whether the item is initially selected.  - prefix (string): HTML content to display before the label.  - suffix (string): HTML content to display after the label.  - title (string): Additional descriptive text, typically used for tooltips.- 'Callback Function:' A function that returns an array of items in either of the formats described above, allowing for dynamic or asynchronous data loading.The prefix and suffix fields can contain HTML, which is rendered respectively before and after the item's label. This allows for additional icons, badges, or formatting as needed to enhance the list item's visual presentation.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Controls whether the element is active and interactive (enabled) or inactive and unresponsive to user interactions (disabled). When disabled, the element cannot be interacted with or triggered by the user.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Allows you to specify extra CSS class names that will be applied to the Input dropdown element, enabling custom styling or theming beyond the default classes.
   * Default value: 
   */
  dropDownClassList?: any;
  /**
   * Specifies the placement of the dropdown button relative to its container or trigger element, such as positioning it above, below, to the left, or to the right. This affects where the dropdown appears on the user interface when activated.
   * Default value: none
   */
  dropDownButtonPosition?: DropDownButtonPosition | string;
  /**
   * Specifies the placement of the dropdown menu relative to its trigger element when opened, such as above, below, left, or right.
   * Default value: auto
   */
  dropDownOpenPosition?: DropDownOpenPosition | string;
  /**
   * Specifies the height of the dropdown menu. By default, this property is set to an empty string, which means the dropdown’s height will be determined by the corresponding CSS variable. To override the default behavior and set a custom height, assign a specific value (such as "200px" or "50%") to this property. If left unset, the component relies on the CSS variable to control its height.
   * Default value: 
   */
  dropDownHeight?: string | number;
  /**
   * Defines the width of the dropdown menu. By default, this property is set to an empty string (""). When left empty, the dropdown's width is determined by a corresponding CSS variable, allowing you to control its sizing through your stylesheet. To specify a fixed width, provide a valid CSS width value (e.g., "200px", "100%"). If not specified, the component will fallback to the CSS variable for its width.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Specifies the purpose of the input field and instructs the browser on both the type of data expected and the level of permission granted to automatically assist the user in filling out the form element. This property directly maps to the standard HTML autocomplete attribute, which helps improve user experience by enabling browsers to suggest or autofill relevant data, such as a user’s name, organization, street address, and more. Common values include 'on' (enables autocomplete), 'off' (disables autocomplete), as well as context-specific tokens like 'name', 'email', 'organization', and 'street-address', among others. Using the appropriate value enhances form usability, accuracy, and accessibility.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * Specifies the maximum number of matching items that will be displayed in the dropdown menu after a new auto-complete query is performed. By default, the dropdown will show up to 8 items. If the number of matched items exceeds this limit, only the first 8 results will be visible, and additional matches will not be shown unless this value is increased.
   * Default value: 8
   */
  items?: number;
  /**
   * Retrieves or assigns the unlockKey value used to grant access to the product. The unlockKey serves as a security credential required to unlock and enable product functionality.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language setting, which determines the localization to be used for displaying content. This property works together with the messages property to select and present language-specific messages or text strings. Setting this property updates the language used throughout the interface, while getting the property returns the currently active language code (e.g., "en", "fr", "es").
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function that allows you to define a custom format for messages returned by the Localization Module. Use this to modify or structure localized messages before they are delivered to the application, such as adding context, adjusting placeholders, or applying additional formatting logic.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines or retrieves an object containing customizable text strings displayed by the widget, enabling localization for different languages and regions. This property works together with the locale property to allow the widget’s user interface labels, messages, and prompts to be easily translated and adapted for international audiences.
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
   * Specifies the minimum number of characters a user must enter into the input field before the autocomplete functionality is activated. Once this threshold is reached, the dropdown will open and display a list of matching items based on the user's input.
   * Default value: 1
   */
  minLength?: number;
  /**
   * Sets or retrieves the value of the element’s name attribute. The name attribute uniquely identifies form elements when submitting data through an HTML form. It is used as the key for the form data sent to the server, allowing server-side scripts to access the corresponding value.
   * Default value: ""
   */
  name?: string;
  /**
   * Indicates whether the dropdown menu is currently open (true) or closed (false).
   * Default value: false
   */
  opened?: boolean;
  /**
   * Specifies the placeholder text displayed inside the input field when it is empty, providing guidance or an example to the user about the expected input format or content.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Defines or retrieves the filter query used to determine which items are displayed. This query is utilized by the autoComplete operation to match and return relevant items from the data source. If the query is set to an empty string, no filtering is applied, and all available items from the data source are shown.
   * Default value: 
   */
  query?: string | number;
  /**
   * Specifies the autocomplete query mode, which defines how search suggestions are generated. This property controls the matching algorithm used during autocomplete operations, such as whether suggestions are based on prefix, infix, or exact matches within the input text. Adjusting this property allows you to tailor the autocomplete behavior to best suit your application's search experience.
   * Default value: containsIgnoreCase
   */
  queryMode?: InputQueryMode | string;
  /**
   * Specifies whether the user can enter text directly into the input field. When dropDownButtonPosition is set to 'left' or 'right', the readonly property controls the behavior of the input when a dataSource is provided:    If readonly is false, the element functions as a ComboBox, allowing users to either select an option from the dropdown or type their own input.  If readonly is true, the element acts as a DropDownList, restricting user input to only the items available in the dataSource.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Specifies or retrieves whether the element's text alignment and layout are configured for right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element's content will display in a direction suitable for RTL locales, ensuring proper reading order and alignment for users of these languages.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies whether the items should be arranged in alphabetical order. If enabled, the items will be sorted from A to Z based on their names; if disabled, the original order will be preserved.
   * Default value: false
   */
  sorted?: boolean;
  /**
   * Specifies the sorting order to use when sort is enabled. Accepts either asc for ascending order or desc for descending order.
   * Default value: "asc"
   */
  sortDirection?: string;
  /**
   * Specifies the index of the currently selected item within a list or array. This value indicates which item is active or highlighted, typically starting from zero for the first item.
   * Default value: -1
   */
  selectedIndex?: number;
  /**
   * Specifies the currently selected value from the available options. This property indicates which option is active or chosen by the user within the component.
   * Default value: 
   */
  selectedValue?: string | number;
  /**
   * Specifies the visual theme applied to the element. The selected theme controls the element’s overall appearance, including colors, fonts, and styling, to ensure consistency with the application's design guidelines.
   * Default value: ""
   */
  theme?: string;
  /**
   * Specifies the type of input expected by the field. Setting the input type controls the kind of data users can enter (e.g., text, number, email, password), impacts the on-screen keyboard on mobile devices, and enables input validation based on the chosen type.
   * Default value: ""
   */
  type?: string;
  /**
   * When set to true, this property ensures that the element is not focusable and cannot receive keyboard or programmatic focus.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets a new value for the element or retrieves its current value, depending on how the function is used.
   * Default value: ""
   */
  value?: string;
}
/**
 Input specifies an input field where the user can enter data. Auto-complete options are displayed for easier input.
*/
export interface Input extends BaseElement, InputProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the user changes the current selection, such as selecting different text, items, or options within the interface. It provides an opportunity to respond dynamically to user interactions involving selection changes.
	* @param event. The custom event. Custom data event was created with: ev.detail(label, oldLabel, oldValue, value)
   *  label - The label of the new selected item.
   *  oldLabel - The label of the item that was previously selected before the event was triggered.
   *  oldValue - The value of the item that was previously selected before the event was triggered.
   *  value - The value of the new selected item.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered whenever the user releases a key (keyup) while typing in the Input field, but only if the input’s value has actually changed since the last event.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previous value before it was changed.
   *  value - The new value.
   */
  onChanging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered immediately when the popup component becomes visible to the user, signaling that the popup has been successfully opened and rendered in the DOM. It can be used to execute custom logic or initialize content whenever the popup appears.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered immediately when the popup window is closed, either by user action (such as clicking the close button) or programmatically via code. It provides an opportunity to execute cleanup tasks, update application state, or respond to the closure of the popup.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered whenever a user selects (clicks on) an item within the popup list. It allows you to respond to user interactions by executing specific logic or actions when a particular popup list item is chosen.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, value)
   *  item - The item that was clicked.
   *  label - The label of the item that was clicked.
   *  value - The value of the item that was clicked.
   */
  onItemClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Closes the currently open dropdown menu, hiding its options from view and reverting the interface to its default state.
   */
  close(): void;
  /**
   * Ensures that the currently selected item remains visible within the viewport by automatically scrolling the container as needed. This guarantees that users can always see the active item, even when navigating through a list with limited onscreen space.
   */
  ensureVisible(): void;
  /**
   * Expands the dropdown menu to display all available options for user selection.
   */
  open(): void;
  /**
   * Enhances user interaction by automatically focusing the input element and selecting its text. If the input is set to <b>readonly</b>, the element receives focus but its text is not selected, ensuring consistent behavior based on the input's state.
   */
  select(): void;
  /**
   * Selects an item from a data source based on its value. <br/><br/>If your data source is a simple array of strings (e.g., `['Item 1', 'Item 2', 'Item 3']`), you can select an item by passing the exact string value, such as `'Item 1'`. <br/><br/>If your data source is an array of objects with `label` and `value` properties (e.g., `[{ label: 'First', value: 1 }, { label: 'Second', value: 2 }]`), you should pass the corresponding `value` property (e.g., `1` for the first item) when calling `selectItem`. <br/><br/>This method automatically locates and selects the item whose value matches the argument you provide, whether the values are strings or object properties.
   * @param {string | number} value. The item's value when the item is an object or string when the item is a string item.
   */
  selectItem(value: string | number): void;
  /**
   * Retrieves an item from the data source by matching its value. For example, if your data source is an array of strings like ['Item 1', 'Item 2', 'Item 3'], you can retrieve an item by passing its exact string value, such as 'Item 1'. If your data source is an array of objects with properties such as { label: 'Item 1', value: 'item1' }, you should pass the specific value (e.g., 'item1') when calling selectItem. The method will return the corresponding item whose value matches the argument you provide.
   * @param {string | number} value. The item's value when the item is an object or string when the item is a string item.
   * @returns {any}
   */
  getItem(value: string | number): any;
  /**
   * Retrieves the currently selected item from the data source.  <br/>- If your data source is a simple array of strings—such as `['Item 1', 'Item 2', 'Item 3']`—and the user selects the second item, this method will return `'Item 2'`.<br/>- If your data source is an array of objects with properties like `{ label, value }`, the method returns the `value` property of the selected object. For example, with a data source of `[ { label: 'First', value: 1 }, { label: 'Second', value: 2 } ]` and the user selects "Second", the method returns `2`.<br/><br/>This ensures the method always returns the relevant value associated with the selected option, based on the structure of the data source.
   * @param {string | number} value. The item's value when the item is an object or string when the item is a string item.
   * @returns {any}
   */
  getSelectedItem(value: string | number): any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-input"): Input;
        querySelector(selectors: "smart-input"): Input | null;
        querySelectorAll(selectors: "smart-input"): NodeListOf<Input>;
        getElementsByTagName(qualifiedName: "smart-input"): HTMLCollectionOf<Input>;
        getElementsByName(elementName: "smart-input"): NodeListOf<Input>;
    }
}

/**Specifies the placement of the dropdown button relative to its container or trigger element, such as positioning it above, below, to the left, or to the right. This affects where the dropdown appears on the user interface when activated. */
export declare type DropDownButtonPosition = 'none' | 'left' | 'right';
/**Specifies the placement of the dropdown menu relative to its trigger element when opened, such as above, below, left, or right. */
export declare type DropDownOpenPosition = 'auto' | 'top' | 'bottom';
/**Specifies the autocomplete query mode, which defines how search suggestions are generated. This property controls the matching algorithm used during autocomplete operations, such as whether suggestions are based on prefix, infix, or exact matches within the input text. Adjusting this property allows you to tailor the autocomplete behavior to best suit your application's search experience. */
export declare type InputQueryMode = 'contains' | 'containsIgnoreCase' | 'doesNotContain' | 'doesNotContainIgnoreCase' | 'equals' | 'equalsIgnoreCase' | 'startsWith' | 'startsWithIgnoreCase' | 'endsWith' | 'endsWithIgnoreCase';
