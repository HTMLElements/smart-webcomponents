import  {BaseElement, Animation} from "./smart.element"

export interface MultiComboInputProperties {
  /**
   * Sets or retrieves the animation mode for the element. When the property is set to 'none', all animations are disabled, and any ongoing or future animations will not be executed. For any other value, the corresponding animation behavior will be applied based on the specified mode.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Specifies the amount of time, in milliseconds, to wait before displaying the dropdown menu that shows matching suggestions from the autocomplete operation. This delay begins after the user stops typing, allowing for smoother user experience and reducing unnecessary searches.
   * Default value: 100
   */
  autoCompleteDelay?: number;
  /**
   * Controls the visibility of close buttons when multiple items are selected. If enabled, close buttons will be displayed for each selected item, allowing users to remove individual items. If disabled, close buttons will be hidden, preventing users from removing selected items individually.
   * Default value: false
   */
  hideInputTagsCloseButton?: boolean;
  /**
   * Controls whether the background color of an item's tag is automatically set to match the value specified in the item's 'color' property. When enabled, if an item has a 'color' property defined, its tag background will automatically use that color. When disabled, the tag background will not be affected by the 'color' property.
   * Default value: true
   */
  colorItems?: boolean;
  /**
   * Specifies the source of data to be displayed in the MultiInput component. The dataSource can accept multiple formats:- An array of strings or numbers, where each entry is used as both the display value and the selection value of a list item.- An array of objects, where each object represents a list item. The object’s attributes (such as label and value) define the display text and internal value of each item.- A callback function that returns an array in either of the formats listed above.Use this property to flexibly provide static data or implement dynamic data loading for the MultiInput component.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Specifies whether the element is interactive or inactive. When enabled, users can interact with the element; when disabled, the element is non-interactive and typically rendered with a visually distinct, disabled appearance.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies the alignment or placement of the dropdown button relative to its parent element or container, such as positioning it to the left, right, center, or at a custom location within the interface. This property controls where the dropdown button will appear within its context.
   * Default value: right
   */
  dropDownButtonPosition?: DropDownButtonPosition | string;
  /**
   * Specifies the height of the dropdown menu. By default, this property is set to an empty string, which means the dropdown’s height is determined by a corresponding CSS variable rather than a fixed value. If a specific height value is provided, it will override the CSS variable and directly set the dropdown’s height.
   * Default value: 
   */
  dropDownHeight?: string | number;
  /**
   * Specifies the width of the dropdown menu. By default, this property is set to an empty string, which means the dropdown's width will be determined by the corresponding CSS variable (typically a custom property defined in your stylesheet). You can override this behavior by providing a specific width value (such as "200px", "50%", etc.), which will directly set the dropdown's width instead of relying on the CSS variable.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Specifies the expected type of information for the input element—such as a user's name, email, or address—and guides the browser on how to provide relevant autofill suggestions when the element is used within a form. This property maps directly to the standard HTML autocomplete attribute. By setting values like 'on', 'off', 'name', 'email', 'organization', or 'street-address', you can instruct the browser on whether, and how, to assist the user with automated form filling. Proper use of this property enhances both the accuracy and security of autofill features, as well as improving the overall user experience.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * Specifies the maximum number of matching items to display in the dropdown menu when a new autoComplete query is performed. By default, up to 8 items will be visible in the dropdown at any one time. If more matches are found, only the first 8 will be shown, while additional results can be accessed through scrolling or pagination, depending on the implementation.
   * Default value: 8
   */
  items?: number;
  /**
   * Gets or sets the 'unlockKey' property, which is a unique code required to activate or unlock the product's full features. Use this key to enable product access or retrieve the current key assigned to the product.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language setting. This property works together with the messages property to display content or interface text in the selected language. When the language is set, the corresponding messages from the messages object will be used for localization.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A callback function that allows you to define a custom formatting for messages returned by the Localization Module, enabling you to modify message content, structure, or presentation before they are displayed or processed by your application.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Specifies or retrieves an object containing strings used for localization within the widget. This property allows you to define custom, translatable text for various user interface elements, ensuring that the widget can display content in different languages. It is used in combination with the locale property to adapt the widget's text to the selected language or regional setting.
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
   * Specifies the minimum number of characters a user must enter into the input field before the autocomplete feature activates. Once this threshold is reached, the dropdown will open and display a list of items that match the entered text.
   * Default value: 1
   */
  minLength?: number;
  /**
   * Sets or retrieves the value of the element's name attribute. The name attribute uniquely identifies form elements when data is submitted to the server, enabling key-value pairs to be correctly processed. This is essential in HTML forms to ensure each input's data is associated with its corresponding name.
   * Default value: ""
   */
  name?: string;
  /**
   * Specifies whether the dropdown menu is currently open (visible) or closed (hidden).
   * Default value: false
   */
  opened?: boolean;
  /**
   * Specifies the placeholder text displayed inside the input field when it is empty, providing a hint or example of the expected input value to the user.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Controls whether the items in the drop-down menu are visually displayed as pill-shaped elements. When enabled, each item will have a rounded, pill-like appearance. When disabled, items will use the default style.
   * Default value: false
   */
  pills?: boolean;
  /**
   * Defines or retrieves the search query used to filter items in the data source. This query is utilized by the autoComplete operation to determine which items are displayed based on user input. If the value is set to an empty string, all items from the data source are shown and no filtering is applied.
   * Default value: 
   */
  query?: string | number;
  /**
   * Specifies the autocomplete query mode, which defines how user input is matched against available options during the autocomplete operation. This property selects the matching algorithm used to filter and suggest results based on the entered query, such as prefix matching, exact matching, or fuzzy searching.
   * Default value: containsIgnoreCase
   */
  queryMode?: MultiComboInputQueryMode | string;
  /**
   * Determines whether the user can enter or edit text within the input field. When the dropDownButtonPosition property is set to either 'left' or 'right', the readonly property controls the component's behavior when a dataSource is provided:  - If readonly is false, the element functions as a ComboBox, allowing users to type custom values as well as select from the list.- If readonly is true, the element behaves as a DropDownList, restricting the user to select only from the available options without the ability to enter custom text.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Configures or retrieves the value that determines whether the element's alignment is adjusted to support right-to-left (RTL) languages and scripts, such as Arabic or Hebrew. When enabled, the element's layout and text direction are oriented to accommodate RTL reading order for proper localization.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the character or string used to separate individual tags within the input field. This delimiter defines how the input is parsed into distinct tags when users enter multiple values.
   * Default value: ""
   */
  separator?: string;
  /**
   * Specifies if selection is restricted to a single item at a time, preventing users from selecting multiple items simultaneously.
   * Default value: false
   */
  singleSelect?: boolean;
  /**
   * Controls the display of an extra option at the top of the options list, which enables users to select or deselect all items with a single action. When enabled, this option appears as the first item, providing a convenient way to manage the entire selection at once.
   * Default value: false
   */
  selectAll?: boolean;
  /**
   * Gets or sets an array containing the currently selected values.  This property allows you to retrieve the list of selected items or update the selection by assigning a new array of values. Each value in the array corresponds to an item that has been selected.
   * Default value: 
   */
  selectedValues?: any;
  /**
   * Specifies whether the items are arranged in alphabetical order. If set to true, the items will be sorted from A to Z; if false, the original order will be preserved.
   * Default value: false
   */
  sorted?: boolean;
  /**
   * Specifies the sorting algorithm to be used when sort is enabled. Accepts either asc for ascending order or desc for descending order, determining how the data will be organized.
   * Default value: "asc"
   */
  sortDirection?: string;
  /**
   * Specifies how selected items are displayed in the input field: either as individual tags for each selected item from the popup, or as a single tag that displays the total number of items selected.
   * Default value: many
   */
  inputTagsMode?: MultiComboInputInputTagsMode | string;
  /**
   * Specifies the visual theme to apply to the element. The selected theme controls the element’s overall appearance, including colors, fonts, and styles, ensuring consistency with the application's design scheme.
   * Default value: ""
   */
  theme?: string;
  /**
   * Specifies the type of input that the field accepts, such as text, email, password, number, or date. The selected input type defines both the format of data that can be entered by the user and the behavior of the input field, including related validation and the appearance of the on-screen keyboard (on supported devices).
   * Default value: ""
   */
  type?: string;
  /**
   * When set to true, this property prevents the element from receiving keyboard focus. As a result, users will not be able to navigate to the element using the Tab key or other keyboard navigation methods.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or retrieves the current value of the element. When used as a setter, it assigns the specified value to the element (such as updating the text in an input field or the selected option in a dropdown). When used as a getter, it returns the element’s current value.
   * Default value: ""
   */
  value?: string;
}
/**
 MultiComboInput specifies an input field where the user can enter data. Auto-complete options with checkbxoes are displayed for easier input. Allows multiple selection. Selected items are added to the input field as tags.
*/
export interface MultiComboInput extends BaseElement, MultiComboInputProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the user modifies the current selection, such as highlighting different text or choosing a new option within a selectable element. It enables you to respond programmatically to changes in the selected content or options.
	* @param event. The custom event. Custom data event was created with: ev.detail(label, oldLabel, oldValue, value)
   *  label - The label of the new selected item.
   *  oldLabel - The label of the item that was previously selected before the event was triggered.
   *  oldValue - The value of the item that was previously selected before the event was triggered.
   *  value - The value of the new selected item.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Closes the dropdown menu by hiding its content and updating its state to indicate that it is no longer visible or active.
   */
  close(): void;
  /**
   * Guarantees that the currently selected item remains within the visible area of the container, automatically scrolling as needed to bring the active item into view whenever selection changes.
   */
  ensureVisible(): void;
  /**
   * Displays the dropdown menu, allowing users to view and select available options.
   */
  open(): void;
  /**
   * Selects all the text within the input field. If the input field is set to <b>readonly</b>, the method will focus the element instead, since text selection is not allowed for readonly inputs.
   */
  select(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-multi-combo-input"): MultiComboInput;
        querySelector(selectors: "smart-multi-combo-input"): MultiComboInput | null;
        querySelectorAll(selectors: "smart-multi-combo-input"): NodeListOf<MultiComboInput>;
        getElementsByTagName(qualifiedName: "smart-multi-combo-input"): HTMLCollectionOf<MultiComboInput>;
        getElementsByName(elementName: "smart-multi-combo-input"): NodeListOf<MultiComboInput>;
    }
}

/**Specifies the alignment or placement of the dropdown button relative to its parent element or container, such as positioning it to the left, right, center, or at a custom location within the interface. This property controls where the dropdown button will appear within its context. */
export declare type DropDownButtonPosition = 'none' | 'left' | 'right';
/**Specifies the autocomplete query mode, which defines how user input is matched against available options during the autocomplete operation. This property selects the matching algorithm used to filter and suggest results based on the entered query, such as prefix matching, exact matching, or fuzzy searching. */
export declare type MultiComboInputQueryMode = 'contains' | 'containsIgnoreCase' | 'doesNotContain' | 'doesNotContainIgnoreCase' | 'equals' | 'equalsIgnoreCase' | 'startsWith' | 'startsWithIgnoreCase' | 'endsWith' | 'endsWithIgnoreCase';
/**Specifies how selected items are displayed in the input field: either as individual tags for each selected item from the popup, or as a single tag that displays the total number of items selected. */
export declare type MultiComboInputInputTagsMode = 'one' | 'many';
