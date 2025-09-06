import  {BaseElement, Animation} from "./smart.element"

export interface MultiInputProperties {
  /**
   * Gets or sets the animation mode. When this property is set to 'none', all animations are disabled. Setting it to other supported values enables the corresponding animation effects.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Specifies the amount of time, in milliseconds, to wait before displaying the dropdown list of matching results after the user starts typing in the autocomplete field. This delay helps control how quickly suggestions appear, allowing for smoother user experience and reducing unnecessary search operations as the user types.
   * Default value: 100
   */
  autoCompleteDelay?: number;
  /**
   * Specifies the source of data used to populate the MultiInput component. The 'dataSource' property accepts one of the following:- 'Array of Strings or Numbers:' Each element is rendered as a selectable item in the MultiInput list.- 'Array of Objects:' Each object should contain properties, typically such as 'label' (the display text) and 'value' (the underlying value), to define the characteristics of each list item.- 'Callback Function:' A function that returns an array of items in either of the above formats.This flexible configuration allows you to define static lists, complex data structures, or dynamically load items as needed.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Specifies whether the element is active and interactive (enabled), or inactive and unresponsive to user interactions (disabled). When set to disabled, the element cannot be clicked, selected, or modified by the user.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies the location where the dropdown button will appear relative to its parent element. Possible values typically include options such as 'left', 'right', 'top', or 'bottom', allowing you to control the visual placement of the button within the user interface.
   * Default value: right
   */
  dropDownButtonPosition?: DropDownButtonPosition | string;
  /**
   * Specifies the height of the dropdown menu. By default, this property is set to an empty string, which means the dropdown's height will be determined by the associated CSS variable. If you provide a specific value (e.g., '200px', '20rem'), it will override the default CSS-controlled height and explicitly set the dropdown's height to the specified value.
   * Default value: 
   */
  dropDownHeight?: string | number;
  /**
   * Specifies the width of the dropdown menu. By default, this property is an empty string ('""'), meaning the dropdown's width is determined by a corresponding CSS variable. You can override this behavior by explicitly setting a value (e.g., '"200px"', '"50%"') to directly control the dropdown's width via inline styles, rather than relying on the CSS variable.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Specifies the intended purpose of the input field and indicates to the browser what type of information is expected from the user. This setting guides the browser in offering automated assistance, such as autocomplete suggestions, when the input is used within a form. The value corresponds directly to the standard HTML autocomplete attribute, which helps user agents (such as browsers) determine whether and how to autofill the field. You can assign values such as 'on' (enable autocomplete), 'off' (disable autocomplete), or more specific values like 'name', 'organization', 'street-address', 'email', and others, to optimize the autofill behavior and improve the user experience.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * Specifies the maximum number of matched items to display in the dropdown list in response to a new autoComplete query. By default, up to 8 items will be shown in the dropdown. If more items match the query, only the first 8 will be visible, ensuring the dropdown remains concise and user-friendly. Adjust this value to control how many results are presented to users at once.
   * Default value: 8
   */
  items?: number;
  /**
   * Sets or retrieves the 'unlockKey' property, a unique key or code required to unlock access to the product’s features or full functionality. Use this property to provide the necessary unlock key when granting access, or to obtain the currently set unlock key.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language setting for the component. This property determines which set of localized messages, defined in the messages property, will be displayed. When you update the language, the component automatically uses the corresponding message set from messages to reflect the selected language.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function that allows developers to customize the formatting of messages returned by the Localization Module. This function receives the original message and relevant context, enabling dynamic modification—such as value interpolation, date and number formatting, or applying custom transformations—before the finalized message is delivered to the application.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines or retrieves an object containing the set of text strings used within the widget, allowing these strings to be customized for different languages or regions. This property works together with the locale property to provide localization support, ensuring that UI labels, messages, and other user-facing text can be displayed appropriately based on the selected language.
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
   * Specifies the minimum number of characters a user must enter into the input field before the autocomplete functionality is activated. Once this threshold is reached, the dropdown will appear, displaying a list of items that match the user's input.
   * Default value: 1
   */
  minLength?: number;
  /**
   * Sets or retrieves the value of the element's "name" attribute. This attribute is used to identify form elements when submitting data through an HTML form. The value assigned to the "name" attribute is sent as the key in the key-value pair for the form data, allowing the server to process the input accordingly.
   * Default value: ""
   */
  name?: string;
  /**
   * Indicates whether the dropdown menu is currently open (true) or closed (false).
   * Default value: false
   */
  opened?: boolean;
  /**
   * Specifies the placeholder text displayed inside the input field before the user enters a value. This text typically provides a hint or example of the expected input.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Sets or retrieves the query string used to filter the list of items. This query is applied during the autoComplete operation to determine which items are shown based on the user's input. If the query is an empty string, all items from the data source are displayed without any filtering.
   * Default value: 
   */
  query?: string | number;
  /**
   * Specifies the query mode used for the autocomplete feature. This property defines how user input is matched against available options, determining the matching algorithm (e.g., prefix, infix, or token matching) applied during autocomplete operations. Adjust this setting to control how search suggestions are generated and filtered based on the user's query.
   * Default value: containsIgnoreCase
   */
  queryMode?: MultiInputQueryMode | string;
  /**
   * Controls whether the user can enter text directly into the input field. When dropDownButtonPosition is set to 'left' or 'right', the readonly property specifies how the element behaves if a dataSource is provided:  - If readonly is false, the element functions as a ComboBox, allowing users to either type custom text or select from the list.  - If readonly is true, the element acts as a DropDownList, restricting input to selection only from the available list items; custom text entry is not allowed.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Specifies or retrieves a value that determines whether the element’s alignment is configured for right-to-left (RTL) text direction, which is commonly used in languages such as Arabic or Hebrew. When enabled, the content within the element will align and flow appropriately to support RTL locales.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the character or string used to separate multiple selected items within the input field. This delimiter controls how selected values are displayed and parsed, ensuring each item is clearly distinguished in the input.
   * Default value: ","
   */
  separator?: string;
  /**
   * Retrieves or assigns an array containing the currently selected values. Each item in the array represents a selected option, allowing for multiple selection handling.
   * Default value: 
   */
  selectedValues?: any;
  /**
   * Specifies whether an additional item should be displayed at the top of the options list. This item functions as a "Select All / Deselect All" control, allowing users to quickly select or unselect all available options in the list.
   * Default value: false
   */
  selectAll?: boolean;
  /**
   * Specifies whether the items are arranged in alphabetical order. If set to true, the items will be sorted from A to Z; if set to false, the items will retain their original, unsorted order.
   * Default value: false
   */
  sorted?: boolean;
  /**
   * Specifies the sorting order used when sort is enabled. Accepts either asc for ascending order or desc for descending order.
   * Default value: "asc"
   */
  sortDirection?: string;
  /**
   * Specifies the visual theme applied to the element. The selected theme controls the element’s overall appearance, including colors, fonts, and styling, ensuring a consistent look and feel across the user interface.
   * Default value: ""
   */
  theme?: string;
  /**
   * Specifies the type of input allowed in the field. The input type controls the kind of data the user can enter (such as text, email, number, password, etc.), which helps ensure data is entered in the correct format and may trigger specialized keyboards or validation behaviors on supported devices.
   * Default value: ""
   */
  type?: string;
  /**
   * When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible via keyboard navigation (such as the Tab key).
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets a new value for the element, or retrieves its current value. Use this property or method to programmatically access or update the element’s value in the DOM. Commonly applied to input fields, textareas, or form elements to manage user input or display dynamic content.
   * Default value: ""
   */
  value?: string;
}
/**
 MultiInput specifies an input field where the user can enter data. Auto-complete options are displayed for easier input. Allows multiple selection. Selected items are added to the input's value.
*/
export interface MultiInput extends BaseElement, MultiInputProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the user changes the current selection within the component. It occurs whenever an item's selection state is updated—such as when a user selects, deselects, or switches between options—allowing you to respond to changes in the selected value or items.
	* @param event. The custom event. Custom data event was created with: ev.detail(label, oldLabel, oldValue, value)
   *  label - The label of the new selected item.
   *  oldLabel - The label of the item that was previously selected before the event was triggered.
   *  oldValue - The value of the item that was previously selected before the event was triggered.
   *  value - The value of the new selected item.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Closes the dropdown menu, hiding all available options from view and returning the component to its default inactive state.
   */
  close(): void;
  /**
   * Ensures that the currently selected item remains visible within its container, automatically scrolling the view if necessary to prevent the active item from being hidden or obscured.
   */
  ensureVisible(): void;
  /**
   * Displays the dropdown menu, allowing users to view and select available options.
   */
  open(): void;
  /**
   * Selects all text within the input field. If the input field has the <b>readonly</b> attribute, the method instead focuses the element without selecting its text.
   */
  select(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-multi-input"): MultiInput;
        querySelector(selectors: "smart-multi-input"): MultiInput | null;
        querySelectorAll(selectors: "smart-multi-input"): NodeListOf<MultiInput>;
        getElementsByTagName(qualifiedName: "smart-multi-input"): HTMLCollectionOf<MultiInput>;
        getElementsByName(elementName: "smart-multi-input"): NodeListOf<MultiInput>;
    }
}

/**Specifies the location where the dropdown button will appear relative to its parent element. Possible values typically include options such as 'left', 'right', 'top', or 'bottom', allowing you to control the visual placement of the button within the user interface. */
export declare type DropDownButtonPosition = 'none' | 'left' | 'right';
/**Specifies the query mode used for the autocomplete feature. This property defines how user input is matched against available options, determining the matching algorithm (e.g., prefix, infix, or token matching) applied during autocomplete operations. Adjust this setting to control how search suggestions are generated and filtered based on the user's query. */
export declare type MultiInputQueryMode = 'contains' | 'containsIgnoreCase' | 'doesNotContain' | 'doesNotContainIgnoreCase' | 'equals' | 'equalsIgnoreCase' | 'startsWith' | 'startsWithIgnoreCase' | 'endsWith' | 'endsWithIgnoreCase';
