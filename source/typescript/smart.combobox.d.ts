import  {BaseElement, Animation} from "./smart.element"

/**
 ComboBox is the alternate for the HTML select tag with editable option. It supports data binding, auto-complete, filtering, grouping, cascading and more.
*/
export interface ComboBox extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Used only when dropDownOpenMode is set to 'auto'. Determines the delay before the opened drop down closes if the pointer is not over the element.
   * Default value: 100
   */
  autoCloseDelay?: number;
  /**
   * Determines the autocomplete mode. Auto complete modes filter the items from the dataSource and show only those that match the input.
   * Default value: none
   */
  autoComplete?: AutoComplete;
  /**
   * Determines the delay before the drop down opens to show the matches from the auto complete operation. The delay is measured in miliseconds.
   * Default value: 100
   */
  autoCompleteDelay?: number;
  /**
   * Allows the user to define a custom key name ( or multiple key names) to open that popup with.
   * Default value: 
   */
  autoOpenShortcutKey?: string[];
  /**
   * Determines the data source that will be loaded to the ComboBox. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value, group. It can also be a callback that returns an Array of items as previously described.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables the combo box.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines whether an indicator will appear during filtering and remote item loading.
   * Default value: false
   */
  displayLoadingIndicator?: boolean;
  /**
   * Sets or gets the displayMember. The displayMember specifies the name of a property to display. The name is contained in the collection specified by the 'dataSource' property.
   * Default value: """"
   */
  displayMember?: string;
  /**
   * Determines the drop down parent. The drop down can be removed from the body of the element and continue to work in another container. This is usefull when one of the parents of the element doesn't allow overflowing, by settings this property to 'body' the drop down will be appended to the DOM and the popup will open/close as usual. dropDownAppendTo can be a string representing the id of an HTML element on the page or a direct reference to that element. Reseting it back to null will take the drop down back to it's original place.
   * Default value: null
   */
  dropDownAppendTo?: any;
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
   * Sets the maximum Height of the drop down. By default it's set to an empty string. In this case the maxHeight of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMaxHeight?: string | number;
  /**
   * Sets the maximum Width of the drop down. By default it's set to an empty string. In this case the maxWidth of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMaxWidth?: string | number;
  /**
   * Sets the minimum Height of the drop down. By default it's set to an empty string. In this case the minHeight of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMinHeight?: string | number;
  /**
   * Sets the minimum Width of the drop down. By default it's set to an empty string. In this case the minWidth of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMinWidth?: string | number;
  /**
   * Determines how the drop down is going to open.
   * Default value: default
   */
  dropDownOpenMode?: DropDownOpenMode;
  /**
   * If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. The purpose of the overlay is to make sure that clicking anywhere outside the popup will will target the overlay and not the DOM.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Determines the placeholder for the drop down, displayed when there are no items in it.
   * Default value: "No Items"
   */
  dropDownPlaceholder?: string;
  /**
   * Determines the position of the drop down when opened.
   * Default value: auto
   */
  dropDownPosition?: DropDownPosition;
  /**
   * Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Determines the behavior of the element when Escape key is pressed.
   * Default value: null
   */
  escKeyMode?: ComboBoxEscKeyMode;
  /**
   * Determines whether filtering is enabled.
   * Default value: false
   */
  filterable?: boolean;
  /**
   * Determines the placeholder for the drop down list filter input field.
   * Default value: ""
   */
  filterInputPlaceholder?: string;
  /**
   * Determines the filtering mode of the Combo box.
   * Default value: startsWithIgnoreCase
   */
  filterMode?: FilterMode;
  /**
   * If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups.
   * Default value: false
   */
  grouped?: boolean;
  /**
   * Determines which attribute from the dataSource object will be used as the group member for the items. If not set, by default 'group' property is used from the source object. groupMember is especially usefull when loading the data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used to group the items.
   * Default value: ""
   */
  groupMember?: string;
  /**
   * Sets additional helper text below the element. The hint is visible only when the element is focused.
   * Default value: ""
   */
  hint?: string;
  /**
   * Determines the visibility of the horizontal Scroll bar inside the drop down.
   * Default value: auto
   */
  horizontalScrollBarVisibility?: HorizontalScrollBarVisibility;
  /**
   * Represents the property name of a List item. Determines the value of the input when a ListItem is selected. Usefull in cases where the user wants to display for example the value of an item instead of it's label. By default the label is displayed in the input.
   * Default value: ""
   */
  inputMember?: string;
  /**
   * Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * IncrementalSearchDelay property specifies the time-interval in milliseconds until the previous search query is cleared. The timer starts when the user stops typing. A new query can be started only when the delay has passed.
   * Default value: 700
   */
  incrementalSearchDelay?: number;
  /**
   * Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the drop down is focused starts the incremental search.
   * Default value: startsWithIgnoreCase
   */
  incrementalSearchMode?: SearchMode;
  /**
   * Sets the height for all list items. Used only when virtualization is enabled.
   * Default value: null
   */
  itemHeight?: number;
  /**
   * Determines the item width measuring algorithm.
   * Default value: auto
   */
  itemMeasureMode?: ListItemMeasureMode;
  /**
   * A getter that returns an array of all List items inside the drop down.
   * Default value: 
   */
  items?: {label: string, value: string}[];
  /**
   * The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM.  It's used to set a customize the content of the list items.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Sets a little text label above the element.
   * Default value: ""
   */
  label?: string;
  /**
   * Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom.
   * Default value: "Loading..."
   */
  loadingIndicatorPlaceholder?: string;
  /**
   * Determines the position of the loading indicator.
   * Default value: center
   */
  loadingIndicatorPosition?: VerticalAlignment;
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
   * Determines the minimum number of characters inside the input in order to trigger the autocomplete functionality
   * Default value: 2
   */
  minLength?: number;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * Determines whether the popup is opened or closed
   * Default value: false
   */
  opened?: boolean;
  /**
   * Determines the input's placeholder.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines whether the resize indicator in the bottom right corner of the drop down is visible or not. This property is used in conjunction with resizeMode.
   * Default value: false
   */
  resizeIndicator?: boolean;
  /**
   * Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down.
   * Default value: null
   */
  resizeMode?: ResizeMode;
  /**
   * Determines what will be displayed in the input.
   * Default value: plain
   */
  selectionDisplayMode?: SelectionDisplayMode;
  /**
   * Sets or gets the selected indexes. Selected indexes represents an array of the indexes of the items that should be selected.
   * Default value: 
   */
  selectedIndexes?: number[];
  /**
   * Sets or gets elected indexes. Selected values represents the values of the items that should be selected.
   * Default value: 
   */
  selectedValues?: string[];
  /**
   * Determines how many items can be selected.
   * Default value: one
   */
  selectionMode?: ListSelectionMode;
  /**
   * Determines whether the items are sorted alphabetically or not
   * Default value: false
   */
  sorted?: boolean;
  /**
   * Determines sorting direction - ascending(asc) or descending(desc)
   * Default value: "asc"
   */
  sortDirection?: string;
  /**
   * Determines the theme for the element. Themes define the look of the elements.
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets a custom content for the tokens when selectionDisplayMode is set to 'tokens'. Tokens are used only for multiple selection.
   * Default value: null
   */
  tokenTemplate?: any;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the value.
   * Default value: ""
   */
  value?: string;
  /**
   * Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items.
   * Default value: """"
   */
  valueMember?: string;
  /**
   * Determines the visibility of the vertical scroll bar.
   * Default value: auto
   */
  verticalScrollBarVisibility?: VerticalScrollBarVisibility;
  /**
   * Determines weather or not Virtualization is used for the Combo box. Virtualization allows a huge amount of items to be loaded to the List box while preserving the performance. For example a milion items can be loaded to the list box.
   * Default value: false
   */
  virtualized?: boolean;
  /** 
   * This event is triggered when the selection is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(addedItems, disabled, index, label, removedItems, selected, value)
   *  addedItems - An array of List items that have been selected.
   *  disabled - A flag indicating whether or not the item that caused the change event is disabled.
   *  index - The index of the List item that triggered the event.
   *  label - The label of the List item that triggered the event.
   *  removedItems - An array of List items that have been unselected before the event was fired.
   *  selected - The selected state of the List item that triggered the event. If an item was selected the value will be true and vice versa.
   *  value - The value of the List item that triggered the event.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down list is closed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down list is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an item is clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(disabled, index, label, selected, value)
   *  disabled - Indicates whether the List item that was clicked is disabled or not.
   *  index - Indicates the index of the List item that was clicked.
   *  label - The label of the List item that was clicked.
   *  selected - Indicates whether the List item that was clicked is selected or not.
   *  value - The value of the List item that was clicked.
   */
  onItemClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down list is opened.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down list is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user starts resizing the drop down.
	* @param event. The custom event. Custom data event was created with: ev.detail(position)
   *  position - An object containing the current left and top positions of the drop down.
   */
  onResizeStart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the resizing of the drop down is finished.
	* @param event. The custom event. Custom data event was created with: ev.detail(position)
   *  position - An object containing the current left and top positions of the drop down.
   */
  onResizeEnd?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user scrolls to the end of the dropDown list.
	* @param event. The custom event.    */
  onScrollBottomReached?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user scrolls to the start of the dropDown list.
	* @param event. The custom event.    */
  onScrollTopReached?: ((this: any, ev: Event) => any) | null;
  /**
   * Appends a ListItem to the end of the list of items inside element.
   * @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
   * @returns {Node}
   */
  appendChild<T extends Node>(node: Node): T;
  /**
   * Removes all items from the drop down list.
   */
  clearItems(): void;
  /**
   * Unselects all items.
   */
  clearSelection(): void;
  /**
   * Closes the dropDown list.
   */
  close(): void;
  /**
   * Ensures the desired item is visible by scrolling to it.
   * @param {HTMLElement | string} item. A list item or value of the desired item to be visible.
   */
  ensureVisible(item: HTMLElement | string): void;
  /**
   * Returns an item instance from the dropDown list.
   * @param {string} value. The value of an item from the drop down list.
   * @returns {HTMLElement}
   */
  getItem(value: string): HTMLElement;
  /**
   * Inserts a new item at a specified position.
   * @param {number} position. The position where the item must be inserted.
   * @param {any} item. Describes the properties of the item that will be inserted.
   */
  insert(position: number, item: any): void;
  /**
   * Inserts a new ListItem before another in the list.
   * @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
   * @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
   * @returns {Node}
   */
  insertBefore<T extends Node>(node: Node, referenceNode: Node | null): T;
  /**
   * Opens the dropDown list.
   */
  open(): void;
  /**
   * Removes an item at a specified position.
   * @param {number} position. The position of the removed item.
   */
  removeAt(position: number): void;
  /**
   * Removes a ListItem from the list of items inside element.
   * @param {Node} node. A ListItem element that is part of the list of items inside the element.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Selects an item from the dropDown list. 
   * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
   */
  select(item: string | HTMLElement): void;
  /**
   * Unselects an item from the dropDown list. 
   * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
   */
  unselect(item: string | HTMLElement): void;
  /**
   * Updates an item from the dropDown list.
   * @param {number} position. The position where the item must be updated.
   * @param {any} value. The value of the updated item.
   */
  update(position: number, value: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-combo-box"): ComboBox;
			querySelector(selectors: "smart-combo-box"): ComboBox | null;	
			querySelectorAll(selectors: "smart-combo-box"): NodeListOf<ComboBox>;
			getElementsByTagName(qualifiedName: "smart-combo-box"): HTMLCollectionOf<ComboBox>;
			getElementsByName(elementName: "smart-combo-box"): NodeListOf<ComboBox>;	
    }
}

/**Determines the autocomplete mode. Auto complete modes filter the items from the dataSource and show only those that match the input. */
export declare type AutoComplete = 'none' | 'auto' | 'inline' | 'manual';
/**Determines the position of the drop down button. */
export declare type DropDownButtonPosition = 'left' | 'right' | 'top' | 'bottom';
/**Determines how the drop down is going to open. */
export declare type DropDownOpenMode = 'none' | 'default' | 'dropDownButton' | 'auto';
/**Determines the position of the drop down when opened. */
export declare type DropDownPosition = 'auto' | 'top' | 'bottom' | 'overlay-top' | 'overlay-center' | 'overlay-bottom' | 'center-bottom' | 'center-top';
/**Determines the behavior of the element when Escape key is pressed. */
export declare type ComboBoxEscKeyMode = 'none' | 'previousValue' | 'clearValue';
/**Determines the filtering mode of the Combo box. */
export declare type FilterMode = 'contains' | 'containsIgnoreCase' | 'custom' | 'doesNotContain' | 'doesNotContainIgnoreCase' | 'equals' | 'equalsIgnoreCase' | 'startsWith' | 'startsWithIgnoreCase' | 'endsWith' | 'endsWithIgnoreCase';
/**Determines the visibility of the horizontal Scroll bar inside the drop down. */
export declare type HorizontalScrollBarVisibility = 'auto' | 'disabled' | 'hidden' | 'visible';
/**Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the drop down is focused starts the incremental search. */
export declare type SearchMode = 'contains' | 'containsIgnoreCase' | 'doesNotContain' | 'doesNotContainIgnoreCase' | 'equals' | 'equalsIgnoreCase' | 'startsWith' | 'startsWithIgnoreCase' | 'endsWith' | 'endsWithIgnoreCase';
/**Determines the item width measuring algorithm. */
export declare type ListItemMeasureMode = 'auto' | 'precise';
/**Determines the position of the loading indicator. */
export declare type VerticalAlignment = 'bottom' | 'center' | 'top';
/**Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down. */
export declare type ResizeMode = 'none' | 'horizontal' | 'vertical' | 'both';
/**Determines what will be displayed in the input. */
export declare type SelectionDisplayMode = 'plain' | 'placeholder' | 'tokens';
/**Determines how many items can be selected. */
export declare type ListSelectionMode = 'none' | 'oneOrManyExtended' | 'zeroOrMany' | 'oneOrMany' | 'zeroOrOne' | 'one' | 'checkBox' | 'radioButton';
/**Determines the visibility of the vertical scroll bar. */
export declare type VerticalScrollBarVisibility = 'auto' | 'disabled' | 'hidden' | 'visible';
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

