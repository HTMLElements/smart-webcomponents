import  {BaseElement, Animation} from "./smart.element"

/**
 Defines a list item for ListBox, ComboBox, DropDownList.
*/
export interface ListItem extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * 
   * Default value: -1
   */
  alternationIndex?: number;
  /**
   * 
   * Default value: ""
   */
  color?: string;
  /**
   * 
   * Default value: plain
   */
  displayMode?: ListItemDisplayMode;
  /**
   * 
   * Default value: false
   */
  grouped?: boolean;
  /**
   * 
   * Default value: false
   */
  selected?: boolean;
  /**
   * 
   * Default value: ""
   */
  value?: string;
  /**
   * 
   * Default value: ""
   */
  label?: string;
  /**
   * 
   * Default value: ""
   */
  details?: string;
  /**
   * 
   * Default value: ""
   */
  group?: string;
  /**
   * 
   * Default value: false
   */
  hidden: boolean;
  /**
   * 
   * Default value: false
   */
  readonly?: boolean;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-list-item"): ListItem;
			querySelector(selectors: "smart-list-item"): ListItem | null;	
			querySelectorAll(selectors: "smart-list-item"): NodeListOf<ListItem>;
			getElementsByTagName(qualifiedName: "smart-list-item"): HTMLCollectionOf<ListItem>;
			getElementsByName(elementName: "smart-list-item"): NodeListOf<ListItem>;	
    }
}


export declare type ListItemDisplayMode = 'plain' | 'checkBox' | 'radioButton';
/**
 Defines a group of list items.
*/
export interface ListItemsGroup extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * 
   * Default value: ""
   */
  label?: string;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-list-items-group"): ListItemsGroup;
			querySelector(selectors: "smart-list-items-group"): ListItemsGroup | null;	
			querySelectorAll(selectors: "smart-list-items-group"): NodeListOf<ListItemsGroup>;
			getElementsByTagName(qualifiedName: "smart-list-items-group"): HTMLCollectionOf<ListItemsGroup>;
			getElementsByName(elementName: "smart-list-items-group"): NodeListOf<ListItemsGroup>;	
    }
}

/**
 Buttons group with DropDown and multiple action buttons.
*/
export interface MultiSplitButton extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines a data source used to generate element's permanently visible buttons.
   * Default value: 
   */
  buttonsDataSource?: string[];
  /**
   * Determines the data source of the multi split button's dropdown.
   * Default value: []
   */
  dataSource?: any;
  /**
   * Enables or disables jqxMultiSplitButton.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Displays or hides the loading indicator
   * Default value: false
   */
  displayLoadingIndicator?: boolean;
  /**
   * Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property.
   * Default value: """"
   */
  displayMember?: string;
  /**
   * Sets the parent container of the button's dropDown list (the popup). Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown list.
   * Default value: null
   */
  dropDownAppendTo?: any;
  /**
   * Determines position of the drop down button.
   * Default value: right
   */
  dropDownButtonPosition?: DropDownButtonPosition;
  /**
   * Defines how element's drop down behaves. In 'none' mode drop down never opens. In 'dropDownButton' mode drop down is opened only via elelent's drop down button. In 'auto' mode drop down is opened on click on the whole top section.
   * Default value: dropDownButton
   */
  dropDownOpenMode?: DropDownOpenMode;
  /**
   * If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Determines the vertical position of the dropDown list. 'Auto' means its automatically determined depending on the viewport size.
   * Default value: auto
   */
  dropDownPosition?: DropDownPosition;
  /**
   * Determines whether the Filtering is enabled.
   * Default value: false
   */
  filterable?: boolean;
  /**
   * Determines the filtering for the drop down list mode.
   * Default value: startsWithIgnoreCase
   */
  filterMode?: FilterMode;
  /**
   * Determines the placeholder for the drop down list filter input field.
   * Default value: ""
   */
  filterInputPlaceholder?: string;
  /**
   * If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups.
   * Default value: false
   */
  grouped?: boolean;
  /**
   * Sets or gets the groupMember. If it's not set, by default is used 'group' property of the source object.
   * Default value: "null"
   */
  groupMember?: string;
  /**
   * Sets ot gets the incrementalSearchDelay property. The incrementalSearchDelay specifies the time-interval in milliseconds after which the previous search string is deleted. The timer starts when you stop typing.
   * Default value: 700
   */
  incrementalSearchDelay?: number;
  /**
   * Sets ot gets the mode of the incremental search mode.
   * Default value: startsWithIgnoreCase
   */
  incrementalSearchMode?: SearchMode;
  /**
   * Determines the height of the items.
   * Default value: null
   */
  itemHeight?: number | null;
  /**
   * The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM. It's used to load list items from the HTMLTemplateElement.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom.
   * Default value: "Loading..."
   */
  loadingIndicatorPlaceholder?: string;
  /**
   * The position of the loading indicator.
   * Default value: center
   */
  loadingIndicatorPosition?: VerticalAlignment;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback, related to localization module. 
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language. 
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
   * Determines whether the popup is opened or closed
   * Default value: false
   */
  opened?: boolean;
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets selected indexes of buttons's dropDown.
   * Default value: 
   */
  selectedIndexes?: number[];
  /**
   * Sets or gets selected values of buttons's dropDown.
   * Default value: 
   */
  selectedValues?: string[];
  /**
   * Determines how many items can be selected.
   * Default value: one
   */
  selectionMode?: MultiSplitButtonSelectionMode;
  /**
   * Determines whether the items in the dropDown are sorted alphabetically or not
   * Default value: false
   */
  sorted?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Determines the value member of an item. Stored as value in the item object.
   * Default value: """"
   */
  valueMember?: string;
  /**
   * Determines weather or not Virtualization is used for the button's dropDownList.
   * Default value: false
   */
  virtualized?: boolean;
  /** 
   * This event is triggered when button's dropDown selection is changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when button's dropDown list is closed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when button's dropDown list is closing.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user clicks any of the element's buttons or button's dropDown items.
	* @param event. The custom event.    */
  onItemClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when button's dropDown list is opened.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when button's dropDown list is opening.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user scrolls to the end of the dropDown list.
	* @param event. The custom event.    */
  onScrollBottomReached?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user scrolls to the start of the dropDown list.
	* @param event. The custom event.    */
  onScrollTopReached?: ((this: any, ev: Event) => any) | null;
  /**
   * Closes button's dropDown list.
   */
  close(): void;
  /**
   * Returns an item instance occured in the element's drop down.
   * @param {string} value. The value of an item from the drop down list or a button.
   * @returns {HTMLElement}
   */
  getItem(value: string): HTMLElement;
  /**
   * Returns an array with the items from the split button's dropDown list.
   * @returns {any[]}
   */
  items(): any[];
  /**
   * Inserts a new item at a specified position in the drop down list.
   * @param {number} position. The position where the item must be inserted.
   * @param {any} value. The value of the new item.
   */
  insert(position: number, value: any): void;
  /**
   * Opens the splitButton's dropDown list.
   */
  open(): void;
  /**
   * Removes an item at a specified position in the drop down list.
   * @param {number} position. The position of the removed item.
   */
  removeAt(position: number): void;
  /**
   * Updates an item from the dropDown list.
   * @param {number} position. The position where the item must be updated.
   * @param {any} value. The value of the updated item.
   */
  update(position: number, value: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-multi-split-button"): MultiSplitButton;
			querySelector(selectors: "smart-multi-split-button"): MultiSplitButton | null;	
			querySelectorAll(selectors: "smart-multi-split-button"): NodeListOf<MultiSplitButton>;
			getElementsByTagName(qualifiedName: "smart-multi-split-button"): HTMLCollectionOf<MultiSplitButton>;
			getElementsByName(elementName: "smart-multi-split-button"): NodeListOf<MultiSplitButton>;	
    }
}

/**Determines position of the drop down button. */
export declare type DropDownButtonPosition = 'none' | 'left' | 'right';
/**Defines how element's drop down behaves. In 'none' mode drop down never opens. In 'dropDownButton' mode drop down is opened only via elelent's drop down button. In 'auto' mode drop down is opened on click on the whole top section. */
export declare type DropDownOpenMode = 'none' | 'dropDownButton' | 'auto';
/**Determines the vertical position of the dropDown list. 'Auto' means its automatically determined depending on the viewport size. */
export declare type DropDownPosition = 'auto' | 'top' | 'bottom' | 'overlay-top' | 'overlay-center' | 'overlay-bottom' | 'center-bottom' | 'center-top';
/**Determines the filtering for the drop down list mode. */
export declare type FilterMode = 'contains' | 'containsIgnoreCase' | 'doesNotContain' | 'doesNotContainIgnoreCase' | 'equals' | 'equalsIgnoreCase' | 'startsWith' | 'startsWithIgnoreCase' | 'endsWith' | 'endsWithIgnoreCase';
/**Sets ot gets the mode of the incremental search mode. */
export declare type SearchMode = 'contains' | 'containsIgnoreCase' | 'doesNotContain' | 'doesNotContainIgnoreCase' | 'equals' | 'equalsIgnoreCase' | 'startsWith' | 'startsWithIgnoreCase' | 'endsWith' | 'endsWithIgnoreCase';
/**The position of the loading indicator. */
export declare type VerticalAlignment = 'bottom' | 'center' | 'top';
/**Determines how many items can be selected. */
export declare type MultiSplitButtonSelectionMode = 'none' | 'oneOrManyExtended' | 'zeroOrMany' | 'oneOrMany' | 'zeroOrOne' | 'one' | 'checkBox' | 'radioButton';
