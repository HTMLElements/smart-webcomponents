import  {BaseElement, Animation} from "./smart.element"

export interface MultiComboInputProperties {
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Determines the delay before the drop down opens to show the matches from the auto complete operation. The delay is measured in miliseconds.
   * Default value: 100
   */
  autoCompleteDelay?: number;
  /**
   * Enables or disables the close buttons when multiple items are selected.
   * Default value: false
   */
  hideInputTagsCloseButton?: boolean;
  /**
   * Enables or disables whether when an item has a 'color' property set, the tag of that item will set automatically the background to that color.
   * Default value: true
   */
  colorItems?: boolean;
  /**
   * Determines the data source that will be loaded to the MutliInput. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value. It can also be a callback that returns an Array of items as previously described.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines the position of the drop down button.
   * Default value: right
   */
  dropDownButtonPosition?: DropDownButtonPosition | string;
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
   * Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * Determines the maximum number of matched items that should be visible inside the drop down as a result of a new autoComplete query. By default the maximum number of 8 items can be displayed inside the drop down.
   * Default value: 8
   */
  items?: number;
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
   * Determines the minimum number of characters inside the input in order to trigger the autocomplete functionality that will open the drop down and show the matched items.
   * Default value: 1
   */
  minLength?: number;
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
   * Enables or disables whether drop-down items are rendered as pills.
   * Default value: false
   */
  pills?: boolean;
  /**
   * Sets or gets the query that is used to filter the items. Query is used by the autoComplete operation. Empty string means that all items from the data source will be displayed and no filter query is applied.
   * Default value: 
   */
  query?: string | number;
  /**
   * Determines the auto complete query mode. This property also determines the matching algorithm for the autocomplete operation.
   * Default value: containsIgnoreCase
   */
  queryMode?: MultiComboInputQueryMode | string;
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
   * Determines the delimiter between the tags in the input field.
   * Default value: ""
   */
  separator?: string;
  /**
   * Determines whether only a single item can be selected.
   * Default value: false
   */
  singleSelect?: boolean;
  /**
   * Determines whether an additional item is displayed as the first item in the options list, which allows to select/unselect all items.
   * Default value: false
   */
  selectAll?: boolean;
  /**
   * Gets or sets an array of selected values.
   * Default value: 
   */
  selectedValues?: any;
  /**
   * Determines whether the items are sorted alphabetically or not
   * Default value: false
   */
  sorted?: boolean;
  /**
   * Determines the sorting algorithm - ascending(asc) or descending(desc) if sort is enabled.
   * Default value: "asc"
   */
  sortDirection?: string;
  /**
   * Determines whether the input field will contain tags for each selected item from the popup or just one that shows the number of selected items.
   * Default value: many
   */
  inputTagsMode?: MultiComboInputInputTagsMode | string;
  /**
   * Determines the theme for the element. Themes define the look of the elements.
   * Default value: ""
   */
  theme?: string;
  /**
   * Determines the input type. Input type determines what input can be entered.
   * Default value: ""
   */
  type?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the value of the element.
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
   * Ensures that the active ( selected ) item is always visible.
   */
  ensureVisible(): void;
  /**
   * Opens the drop down.
   */
  open(): void;
  /**
   * Selects the text inside the input or if it is <b>readonly</b> then the element is focused.
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

/**Determines the position of the drop down button. */
export declare type DropDownButtonPosition = 'none' | 'left' | 'right';
/**Determines the auto complete query mode. This property also determines the matching algorithm for the autocomplete operation. */
export declare type MultiComboInputQueryMode = 'contains' | 'containsIgnoreCase' | 'doesNotContain' | 'doesNotContainIgnoreCase' | 'equals' | 'equalsIgnoreCase' | 'startsWith' | 'startsWithIgnoreCase' | 'endsWith' | 'endsWithIgnoreCase';
/**Determines whether the input field will contain tags for each selected item from the popup or just one that shows the number of selected items. */
export declare type MultiComboInputInputTagsMode = 'one' | 'many';
