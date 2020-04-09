import  {BaseElement, Animation} from "./smart.element"

/**
 ListBox allows the user to select one or more items from a list.
*/
export interface ListBox extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Enables or disables the ability to drag list items out of the List box. Disabled items cannot be dragged.
   * Default value: false
   */
  allowDrag?: boolean;
  /**
   * Enables or disables the ability to drop list items inside the target List box.
   * Default value: false
   */
  allowDrop?: boolean;
  /**
   * Determines the number of color alternations in rows.
   * Default value: 0
   */
  alternationCount?: number;
  /**
   * Determines the ending index of color alternations in rows.
   * Default value: 0
   */
  alternationEnd?: number;
  /**
   * Determines the starting index of color alternations in rows
   * Default value: 0
   */
  alternationStart?: number;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Enables or disables auto sorting. If sorted is enabled, but autoSort is false, the element will not be re-sorted automatically.
   * Default value: true
   */
  autoSort?: boolean;
  /**
   * Determines the data source that will be loaded to the ListBox. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value, group. It can also be a callback that returns an Array of items as previously described.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables the list box.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines whether an indicator will appear during filtering and remote item loading.
   * Default value: false
   */
  displayLoadingIndicator?: boolean;
  /**
   * Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property.
   * Default value: """"
   */
  displayMember?: string;
  /**
   * A callback function for customizing the HTML of the drag feedback. It receives one parameter - the currently dragged item.
   * Default value: null
   */
  dragFeedbackFormatFunction?: any;
  /**
   * Determines the offset of the drag feedback element from the mouse cursor when dragging an item. The first member of the array is the horizontal offset and the second one - the vertical offset.
   * Default value: 10,10
   */
  dragOffset?: number[];
  /**
   * Determines what happens when an item is dropped.
   * Default value: move
   */
  dropAction?: ListBoxDropAction;
  /**
   * Determines if list items can be edited or not. If enabled, items can be edited by double clicking on a target item ( that is not disabled ) or pressing the F2 key on the keyboard.
   * Default value: false
   */
  editable?: boolean;
  /**
   * Determines whether list items can be filtered or not. If enable a filter input appears at the top of the list box.
   * Default value: false
   */
  filterable?: boolean;
  /**
   * A callback that should return a condition that will be used for custom item filtering. Used in conjunction with filterMode 'custom'
   * Default value: null
   */
  filterCallback?: any;
  /**
   * Determines the filtering mode.
   * Default value: containsIgnoreCase
   */
  filterMode?: FilterMode;
  /**
   * Determines the placeholder for the filter input field.
   * Default value: ""
   */
  filterInputPlaceholder?: string;
  /**
   * If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups.
   * Default value: false
   */
  grouped?: boolean;
  /**
   * Determines which attribute from the dataSource object will be used as the group member for the items. If not set, by default 'group' property is used from the source object. groupMember is especially usefull when loading the data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used to group the items.
   * Default value: null
   */
  groupMember?: string | null;
  /**
   * Determines the visibility of the horizontal Scroll bar.
   * Default value: auto
   */
  horizontalScrollBarVisibility?: HorizontalScrollBarVisibility;
  /**
   * IncrementalSearchDelay property specifies the time-interval in milliseconds until the previous search query is cleared. The timer starts when the user stops typing. A new query can be started only when the delay has passed.
   * Default value: 700
   */
  incrementalSearchDelay?: number;
  /**
   * Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the List box is focused starts the incremental search.
   * Default value: startsWithIgnoreCase
   */
  incrementalSearchMode?: SearchMode;
  /**
   * Sets the height for all list box items. Used only when virtualization is enabled.
   * Default value: null
   */
  itemHeight?: number;
  /**
   * Determines the item width measuring algorithm.
   * Default value: auto
   */
  itemMeasureMode?: ListItemMeasureMode;
  /**
   * A getter that returns an array of all ListBox items.
   * Default value: 
   */
  items?: {label: string, value: string}[];
  /**
   * A string that represents the id of an HTMLTemplateElement inside the DOM or a reference to the template itself. It's used to set a custom template for the list items.
   * Default value: null
   */
  itemTemplate?: any;
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
   *     "overridingProperties": "' property is used by default.",
   *     "invalidIndex": "' method accepts an index of type number or an Array of numbers.",
   *     "indexOutOfBound": "' method.",
   *     "invalidItem": "' method accepts an object or an array of objects as it's second parameter.",
   *     "invalidSettings": "' method accepts a string or an object as it's second parameter."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: """"
   */
  name?: string;
  /**
   * Determines the placeholder that will be shown when the List box is empty.
   * Default value: "No Items"
   */
  placeholder?: string;
  /**
   * Sets or gets the readonly property. If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
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
   * Determines how many items can be selected depending on the selection mode.
   * Default value: oneOrManyExtended
   */
  selectionMode?: ListSelectionMode;
  /**
   * Determines when listbox selection is achieved - on 'press' or 'release'.
   * Default value: release
   */
  selectionChangeAction?: ListBoxSelectionChangeAction;
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
   * Ensures the item with the target index is in view as the first (top) item in the list box.
   * Default value: -1
   */
  topVisibleIndex?: number;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the value. Returns the selection. Return type: {label: string, value: any}[].
   * Default value: null
   */
  value?: any;
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
   * Determines weather or not Virtualization is used for the ListBox. Virtualization allows a huge amount of items to be loaded to the List box while preserving the performance. For example a milion items can be loaded to the list box.
   * Default value: false
   */
  virtualized?: boolean;
  /** 
   * This event is triggered when listbox binding is completed.
	* @param event. The custom event.    */
  onBindingComplete?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when selection is changed.
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
   * This event is triggered when an item is dropped. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(container, data, item, originalEvent, previousContainer, target)
   *  container - The List box that an item was dragged <strong>to.</strong>
   *  data - An object that contains data about the dragging operation like start position, start time, etc.
   *  item - The List item that was dragged.
   *  originalEvent - That original event that was fired.
   *  previousContainer - The List box that an item was dragged <strong>from</strong>.
   *  target - The event target.
   */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a List item is being dragged.
	* @param event. The custom event. Custom data event was created with: ev.detail(data, item, originalEvent)
   *  data - An object that contains data about the dragging operation like start position, start time, etc.
   *  item - The List item that is being dragged. This is the item that has been clicked when initiating the drag operation
   *  originalEvent - The original event that initiates the dragging operation.
   */
  onDragging?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an item is dragged. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(container, data, item, originalEvent, previousContainer, target)
   *  container - The List box that an item was dragged <strong>to.</strong>
   *  data - An object that contains data about the dragging oepration like start position, start time, etc.
   *  item - The List item that was dragged.
   *  originalEvent - That original event that was fired.
   *  previousContainer - The List box that an item was dragged <strong>from</strong>.
   *  target - The event target.
   */
  onDragStart: ((this: any, ev: Event) => any) | null;
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
   * This event is triggered when an item has been edited.
	* @param event. The custom event. Custom data event was created with: ev.detail(selected, disabled, index, label, value)
   *  selected - Indicates whether the List item is selected or not.
   *  disabled - Indicates whether the List item is disabled or not.
   *  index - The index of the List item that was edited.
   *  label - The label of the edited List item.
   *  value - The value of the List item that was edited.
   */
  onItemLabelChange?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user scrolls to the end of the list.
	* @param event. The custom event.    */
  onScrollBottomReached?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user scrolls to the beginning of the list.
	* @param event. The custom event.    */
  onScrollTopReached?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user swipes to the left, inside the listBox.
	* @param event. The custom event.    */
  onSwipeleft?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user swipes to the right, inside the listBox.
	* @param event. The custom event.    */
  onSwiperight?: ((this: any, ev: Event) => any) | null;
  /**
   * Appends a ListItem to the end of the list of items inside element.
   * @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
   * @returns {Node}
   */
  appendChild<T extends Node>(node: Node): T;
  /**
   * Removes all items from the listBox.
   */
  clearItems(): void;
  /**
   * Unselects all items.
   */
  clearSelection(): void;
  /**
   * Ensures the target item is visible by scrolling to it.
   * @param {HTMLElement | string} item. A list item or value of the desired item to be visible.
   */
  ensureVisible(item: HTMLElement | string): void;
  /**
   * Returns an item instance from the listBox.
   * @param {string} value. The value of an item from the listBox.
   * @returns {HTMLElement}
   */
  getItem(value: string): HTMLElement;
  /**
   * Inserts a new item at a specified index.
   * @param {number} index. The index where the item must be inserted.
   * @param {any} items. A single item/definition or an array of List Items/definitions of list items to be inserted. The format of the item definitions is the same as the format of the <strong>dataSource</strong> property.
   */
  insert(index: number, items: any): void;
  /**
   * Inserts a new ListItem before another in the list.
   * @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
   * @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
   * @returns {Node}
   */
  insertBefore<T extends Node>(node: Node, referenceNode: Node | null): T;
  /**
   * Removes an item at a specified index.
   * @param {number} index. The index of the removed item.
   */
  removeAt(index: number): void;
  /**
   * Removes a ListItem from the list of items inside element.
   * @param {Node} node. A ListItem element that is part of the list of items inside the element.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Selects an item from the listBox. 
   * @param {string | number | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list.
   */
  select(item: string | number | HTMLElement): void;
  /**
   * Unselects an item from the listBox. 
   * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
   */
  unselect(item: string | HTMLElement): void;
  /**
   * Updates an item from the listBox.
   * @param {number} index. The index of the item that is going to be updated.
   * @param {any} details. An object that contains the properties and their new values for the List item that should be updated. For example, label, value or selected attributes.
   */
  update(index: number, details: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-list-box"): ListBox;
			querySelector(selectors: "smart-list-box"): ListBox | null;	
			querySelectorAll(selectors: "smart-list-box"): NodeListOf<ListBox>;
			getElementsByTagName(qualifiedName: "smart-list-box"): HTMLCollectionOf<ListBox>;
			getElementsByName(elementName: "smart-list-box"): NodeListOf<ListBox>;	
    }
}

/**Determines what happens when an item is dropped. */
export declare type ListBoxDropAction = 'copy' | 'move' | 'none';
/**Determines the filtering mode. */
export declare type FilterMode = 'contains' | 'containsIgnoreCase' | 'doesNotContain' | 'doesNotContainIgnoreCase' | 'equals' | 'equalsIgnoreCase' | 'startsWith' | 'startsWithIgnoreCase' | 'endsWith' | 'endsWithIgnoreCase' | 'custom';
/**Determines the visibility of the horizontal Scroll bar. */
export declare type HorizontalScrollBarVisibility = 'auto' | 'disabled' | 'hidden' | 'visible';
/**Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the List box is focused starts the incremental search. */
export declare type SearchMode = 'contains' | 'containsIgnoreCase' | 'doesNotContain' | 'doesNotContainIgnoreCase' | 'equals' | 'equalsIgnoreCase' | 'startsWith' | 'startsWithIgnoreCase' | 'endsWith' | 'endsWithIgnoreCase';
/**Determines the item width measuring algorithm. */
export declare type ListItemMeasureMode = 'auto' | 'precise';
/**Determines the position of the loading indicator. */
export declare type VerticalAlignment = 'bottom' | 'center' | 'top';
/**Determines how many items can be selected depending on the selection mode. */
export declare type ListSelectionMode = 'none' | 'oneOrManyExtended' | 'zeroOrMany' | 'oneOrMany' | 'zeroOrOne' | 'one' | 'checkBox' | 'radioButton';
/**Determines when listbox selection is achieved - on 'press' or 'release'. */
export declare type ListBoxSelectionChangeAction = 'press' | 'release';
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

