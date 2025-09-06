import  {BaseElement, Animation} from "./smart.element"

export interface ListBoxProperties {
  /**
   * Controls whether users can drag items out of the List box. When enabled, users can drag and move list items, except for those marked as disabled. Disabled items remain fixed and cannot be dragged or moved by the user.
   * Default value: false
   */
  allowDrag?: boolean;
  /**
   * Controls whether users can drag and drop list items into the target ListBox. When enabled, items can be dropped into the ListBox; when disabled, dropping items is not permitted.
   * Default value: false
   */
  allowDrop?: boolean;
  /**
   * Specifies how many times the row colors alternate, controlling the pattern and frequency of color changes applied to rows in a table or list. This helps customize the visual distinction between adjacent rows.
   * Default value: 0
   */
  alternationCount?: number;
  /**
   * Specifies the last row index up to which alternating row colors are applied. Rows after this index will no longer display color alternations.
   * Default value: 0
   */
  alternationEnd?: number;
  /**
   * Specifies the initial row index from which color alternation begins, determining where the alternating row colors pattern is applied in the table.
   * Default value: 0
   */
  alternationStart?: number;
  /**
   * Specifies the animation mode for the element. You can retrieve the current animation mode or set a new one by assigning a value to this property. When set to 'none', all animations are disabled. To enable different animation effects, assign one of the supported animation mode values other than 'none'.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Controls whether automatic sorting is performed. When autoSort is set to true, the element will automatically re-sort itself whenever its data changes. If sorted is enabled but autoSort is set to false, the element will only be sorted once (typically on initialization) and will not automatically update its order in response to subsequent data changes.
   * Default value: true
   */
  autoSort?: boolean;
  /**
   * Specifies the source of data to populate the ListBox. The dataSource can be provided in several formats:- An array of strings or numbers, where each item represents a single ListBox entry.- An array of objects, where each object defines the properties of a ListBox item, such as label (the displayed text), value (the underlying value), and group (used for grouping items).- A callback function that returns an array of items in either of the formats described above.Using these options, you can flexibly supply data from static arrays or dynamically generate the list items as needed.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Determines whether the list box is active and can be interacted with by the user. When enabled, users can select items from the list box; when disabled, the list box appears grayed out and does not respond to user input.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies whether a visual indicator (such as a loading spinner or progress bar) will be displayed while filtering data or loading items from a remote source.
   * Default value: false
   */
  displayLoadingIndicator?: boolean;
  /**
   * Defines or retrieves the displayMember property, which specifies the name of the object property to be shown in the UI for each item in the data source. The specified name should match a key present in the objects within the collection assigned to the 'dataSource' property. This allows you to control which property value is displayed for each item when rendering data-bound lists or dropdowns.
   * Default value: """"
   */
  displayMember?: string;
  /**
   * A callback function that allows you to customize the HTML markup displayed as visual feedback while an item is being dragged. This function receives a single parameter representing the item currently being dragged, enabling you to tailor the appearance of the drag feedback element based on its properties or content.
   * Default value: null
   */
  dragFeedbackFormatFunction?: any;
  /**
   * Specifies the position offset of the drag feedback element relative to the mouse cursor during a drag operation. This property takes an array with two values: the first value sets the horizontal offset (in pixels), and the second value sets the vertical offset (in pixels). These offsets determine how far the feedback element is displayed from the cursor while dragging an item.
   * Default value: 10,10
   */
  dragOffset?: number[];
  /**
   * Specifies the actions or behavior that are triggered when an item is released or dropped during a drag-and-drop operation. This may include updating the interface, modifying data structures, or invoking specific callback functions associated with the drop event.
   * Default value: move
   */
  dropAction?: ListBoxDropAction | string;
  /**
   * Specifies whether list items are editable. When this option is enabled, users can modify items in the list by either double-clicking on a non-disabled item or by selecting the item and pressing the F2 key. Disabled items remain uneditable regardless of this setting.
   * Default value: false
   */
  editable?: boolean;
  /**
   * Specifies whether users can filter the items in the list. When enabled, a filter input field appears at the top of the list box, allowing users to quickly search and narrow down the displayed items based on their input. If disabled, the entire list is shown without any filtering option.
   * Default value: false
   */
  filterable?: boolean;
  /**
   * A callback function that must return a condition (typically a boolean value) used to determine whether each item should be included when filtering the list. This function is called for every item and is intended for use when the filterMode is set to 'custom', allowing you to define your own filtering logic beyond the default behavior.
   * Default value: null
   */
  filterCallback?: any;
  /**
   * Specifies which filtering mode is applied to the data set, controlling how items are included or excluded based on defined criteria.
   * Default value: containsIgnoreCase
   */
  filterMode?: FilterMode | string;
  /**
   * Specifies the placeholder text that appears inside the filter input field, guiding users on what to enter or search for.
   * Default value: ""
   */
  filterInputPlaceholder?: string;
  /**
   * When enabled, this option organizes the items into groups based on the first letter of each item's value. Note: This setting is incompatible with data sources that are already grouped; it can only be used when the dataSource does not contain predefined groupings.
   * Default value: false
   */
  grouped?: boolean;
  /**
   * Specifies the property name within the dataSource object that will be used to group the items in the ListBox. If this property is not set, the component defaults to using the 'group' attribute from each data item for grouping purposes. The groupMember property is particularly useful when loading data from a JSON file as the dataSource and you need to group items based on a specific custom property, rather than the default 'group' property. This allows for flexible and customized grouping behavior based on the structure of your data.
   * Default value: null
   */
  groupMember?: string | null;
  /**
   * Controls whether the horizontal scroll bar is displayed, allowing users to scroll content left and right when it overflows the container.
   * Default value: auto
   */
  horizontalScrollBarVisibility?: HorizontalScrollBarVisibility | string;
  /**
   * The 'IncrementalSearchDelay' property defines the amount of time, in milliseconds, that the system waits after the user stops typing before clearing the previous search query. This delay timer begins as soon as the user ceases input. Only after the specified delay has fully elapsed will the previous search query be reset, allowing a new search query to be initiated. This property helps control the responsiveness of incremental search operations, preventing premature query resets while the user is still entering input.
   * Default value: 700
   */
  incrementalSearchDelay?: number;
  /**
   * Sets or retrieves the current incremental search mode. By default, incremental search is enabled, allowing users to begin searching by typing while the ListBox is focused. This mode enables real-time filtering or selection as the user types, making it easier to quickly find items in the list.
   * Default value: startsWithIgnoreCase
   */
  incrementalSearchMode?: SearchMode | string;
  /**
   * Specifies the height, in pixels, for each item within the list box when virtualization is enabled. This property is required for correct rendering and performance optimizations during virtualization. It ensures each list item is allocated sufficient space and enables efficient scrolling and item measurement.
   * Default value: null
   */
  itemHeight?: number;
  /**
   * Specifies the algorithm used to calculate the width of each item. This setting determines how the item width is measured, such as using fixed values, automatic sizing based on content, or percentage-based calculations.
   * Default value: auto
   */
  itemMeasureMode?: ListItemMeasureMode | string;
  /**
   * A read-only property that retrieves an array containing all the items currently present in the ListBox. Each element in the array represents a distinct item from the ListBox, preserving their order as displayed.
   * Default value: 
   */
  items?: ListBoxItem[];
  /**
   * A string specifying either the ID of an HTMLTemplateElement present in the DOM or a direct reference to the template element itself. This property allows you to define a custom template for rendering individual list items, enabling flexible and reusable item layouts within the component.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Specifies the text to be displayed alongside the loading indicator when the loader is visible and positioned at either the top or bottom of the component. This text provides contextual feedback to users during loading operations.
   * Default value: "Loading..."
   */
  loadingIndicatorPlaceholder?: string;
  /**
   * Specifies the placement of the loading indicator within the user interface, such as at the top, center, or bottom of the container or screen. This property controls where the loading spinner or progress bar will appear while content is being loaded.
   * Default value: center
   */
  loadingIndicatorPosition?: VerticalAlignment | string;
  /**
   * Gets or sets the unlockKey property, a unique code required to unlock access to the product. This key is used for product activation or to enable restricted features.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the language code to be used for message localization. This property determines which set of messages from the messages object will be displayed, enabling support for multiple languages and dynamic language switching in your application.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this to modify how localized messages are structured or displayed before they are rendered to the user.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines or retrieves an object containing localized strings used throughout the widget’s user interface. This allows you to customize all display text and messages according to different languages or regions. Typically used together with the language property to support internationalization and provide translations for various UI elements.
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
   * Sets or retrieves the value of the element's name attribute. The name attribute identifies the element when submitting an HTML form, allowing its value to be included in the form data sent to the server. This is essential for processing form fields on the server-side.
   * Default value: """"
   */
  name?: string;
  /**
   * Specifies the placeholder text that will be displayed in the List box when there are no available items to show. This text provides guidance or information to the user when the List box is empty.
   * Default value: "No Items"
   */
  placeholder?: string;
  /**
   * Sets or retrieves the readonly property of the element. When the readonly property is set to true, the element becomes non-editable—users can view its content but cannot modify it. This property is commonly used with input and textarea elements to prevent user interaction while still displaying the field’s value.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Specifies or retrieves a value that determines whether the element’s text direction is set to right-to-left (RTL) alignment, enabling proper display and support for languages and locales that use right-to-left scripts, such as Arabic or Hebrew.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Gets or sets the selected indexes. The selected indexes property is an array containing the numerical indexes of the items that are currently selected. Assigning an array of indexes will update the selection to match those items; retrieving this property returns the array of currently selected item indexes.
   * Default value: 
   */
  selectedIndexes?: number[];
  /**
   * Sets or retrieves the selected indexes. The selected values correspond to the values of the items that are currently selected. When setting, provide an array of indexes or values to specify which items should be marked as selected; when getting, this returns the values associated with the selected items.
   * Default value: 
   */
  selectedValues?: string[];
  /**
   * Specifies the maximum number of items that a user can select, based on the current selection mode (e.g., single, multiple, or none). This setting controls and restricts selection behavior within the interface.
   * Default value: oneOrManyExtended
   */
  selectionMode?: ListSelectionMode | string;
  /**
   * Specifies the user interaction event that triggers the selection of a listbox item: either when the item is initially pressed (‘press’) or when the user releases the press (‘release’). Choosing ‘press’ selects the item on mouse down or touch start, while ‘release’ selects it on mouse up or touch end. This setting controls how and when the user’s selection action is registered.
   * Default value: release
   */
  selectionChangeAction?: ListBoxSelectionChangeAction | string;
  /**
   * Specifies whether the items should be automatically arranged in alphabetical order. If set to true, the items will be displayed from A to Z (or according to the selected locale’s alphabetical rules); if false, items will retain their original order.
   * Default value: false
   */
  sorted?: boolean;
  /**
   * Specifies the sorting order for the data. Accepts either 'asc' for ascending order (from lowest to highest) or 'desc' for descending order (from highest to lowest).
   * Default value: "asc"
   */
  sortDirection?: string;
  /**
   * Specifies the visual theme applied to the element. Themes control the overall appearance, including colors, fonts, spacing, and other stylistic properties that define the element's look and feel. Choosing a theme ensures consistency and enhances the user interface design across the application.
   * Default value: ""
   */
  theme?: string;
  /**
   * Scrolls the list box so that the item at the specified index appears as the first (topmost) visible item, ensuring it is fully in view at the top of the list.
   * Default value: -1
   */
  topVisibleIndex?: number;
  /**
   * When set to true, this property prevents the element from receiving keyboard focus, meaning users will not be able to select the element using the keyboard (e.g., via the Tab key) or by programmatic focus methods.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Gets or sets the current selection value(s). This property returns an array of objects, where each object represents a selected option with the following structure: { label: string, value: any }. The 'label' is the display text shown to users, and 'value' holds the corresponding data for that option. Return type: { label: string, value: any }[].
   * Default value: null
   */
  value?: any;
  /**
   * Determines which property of each item object should be used as the item's value. The specified property is stored as the value in the item object. Similar to groupMember, the valueMember property is particularly useful when binding data from a JSON file as a dataSource for the ListBox, allowing you to designate a specific field to serve as the value for each item. This is helpful when your data objects contain multiple properties, and you want to control exactly which one will represent the underlying value of each ListBox entry.
   * Default value: """"
   */
  valueMember?: string;
  /**
   * Controls whether the vertical scroll bar is displayed, allowing users to scroll through content vertically when it overflows the container. This setting can be used to show, hide, or automatically display the scroll bar based on the content size.
   * Default value: auto
   */
  verticalScrollBarVisibility?: VerticalScrollBarVisibility | string;
  /**
   * Specifies whether virtualization is enabled for the ListBox. When virtualization is enabled, the ListBox renders only the visible items in the UI, instead of generating UI elements for every item in the collection. This significantly improves performance and reduces memory usage, especially when working with large data sets (e.g., displaying one million items). Virtualization ensures smooth scrolling and responsiveness, even with a vast number of items in the ListBox.
   * Default value: false
   */
  virtualized?: boolean;
}
/**
 ListBox allows the user to select one or more items from a list.
*/
export interface ListBox extends BaseElement, ListBoxProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered after the listbox has successfully finished binding its data source. At this point, all data items have been loaded and rendered in the listbox, making it ready for user interaction or further programmatic manipulation. Use this event to perform actions that depend on the completion of data binding, such as customizing item appearance, enabling controls, or initiating additional data processing.
	* @param event. The custom event.    */
  onBindingComplete?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the user changes the current selection, such as when they select a different item from a list, dropdown, or any selectable element. It allows developers to respond dynamically to user input by detecting and handling selection changes in real time.
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
   * This event is fired when a user drops a draggable item onto a valid drop target. Within the event handler, you can call event.preventDefault() to cancel the default drop behavior, which allows you to define custom handling logic for the dropped item. This gives you full control over what should happen when an item is released on the target element.
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
   * This event is triggered whenever a user starts dragging a list item, providing an opportunity to handle custom logic—such as updating the UI or managing the item's state—during the drag operation.
	* @param event. The custom event. Custom data event was created with: ev.detail(data, item, originalEvent)
   *  data - An object that contains data about the dragging operation like start position, start time, etc.
   *  item - The List item that is being dragged. This is the item that has been clicked when initiating the drag operation
   *  originalEvent - The original event that initiates the dragging operation.
   */
  onDragging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a user initiates and performs a drag action on an item. Within the event handler, you can call event.preventDefault() to cancel or prevent the default drag behavior. This allows you to override the standard dragging operation and implement custom drag-and-drop functionality as needed.
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
   * This event is triggered whenever a user clicks on an item within the component. It provides detailed information about the clicked item, such as its identifier and relevant data, enabling you to implement custom logic in response to user interactions.
	* @param event. The custom event. Custom data event was created with: ev.detail(disabled, index, label, selected, value)
   *  disabled - Indicates whether the List item that was clicked is disabled or not.
   *  index - Indicates the index of the List item that was clicked.
   *  label - The label of the List item that was clicked.
   *  selected - Indicates whether the List item that was clicked is selected or not.
   *  value - The value of the List item that was clicked.
   */
  onItemClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered immediately after an item has been modified and the changes have been saved. It allows you to respond to updates or modifications made to an item's data.
	* @param event. The custom event. Custom data event was created with: ev.detail(selected, disabled, index, label, value)
   *  selected - Indicates whether the List item is selected or not.
   *  disabled - Indicates whether the List item is disabled or not.
   *  index - The index of the List item that was edited.
   *  label - The label of the edited List item.
   *  value - The value of the List item that was edited.
   */
  onItemLabelChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user scrolls to the bottom of the list, indicating that the end of the available items has been reached. It can be used to load additional data or perform actions when no more items are visible in the current list view.
	* @param event. The custom event.    */
  onScrollBottomReached?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user scrolls to the very top of the list, indicating that the first item in the list is visible or has been reached. It can be used to implement features such as loading previous items, displaying a refresh indicator, or updating the UI when the user navigates to the start of the list.
	* @param event. The custom event.    */
  onScrollTopReached?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user performs a leftward swipe gesture within the boundaries of the listBox component. It can be used to initiate actions such as revealing additional options, deleting a list item, or any other behavior that should occur in response to a left swipe inside the listBox.
	* @param event. The custom event.    */
  onSwipeleft?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user performs a rightward swipe gesture within the boundaries of the listBox component. It detects intentional swipe actions to the right, allowing developers to respond to user navigation or interaction within the listBox. The event will only fire if the swipe is initiated and completed inside the listBox area.
	* @param event. The custom event.    */
  onSwiperight?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Adds a new ListItem element to the end of the existing items within the specified container element, maintaining the original order of all previously added items.
   * @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
   * @returns {Node}
   */
  appendChild<T extends Node>(node: Node): T;
  /**
   * Adds one or more new items to the collection. This operation updates the data set by appending the provided item(s), making them available for future retrieval or processing.
   * @param {any} item. Describes the properties of the item that will be inserted. You can also pass an array of items.
   */
  add(item: any): void;
  /**
   * Clears all items from the listBox, effectively removing every entry and leaving the listBox empty. This operation does not delete the listBox itself, only its contents.
   */
  clearItems(): void;
  /**
   * Deselects all currently selected items, ensuring that no items remain selected within the list or interface.
   */
  clearSelection(): void;
  /**
   * Binds the latest data from the data source to the component, ensuring the user interface reflects current information. This method can be called to refresh or update the displayed data whenever the data source changes.
   */
  dataBind(): void;
  /**
   * Scrolls the container so that the target item is brought into view, ensuring it is fully visible to the user within the viewport or scrollable area.
   * @param {HTMLElement | string} item. A list item or value of the desired item to be visible.
   */
  ensureVisible(item: HTMLElement | string): void;
  /**
   * Returns a specific item instance from the listBox based on the provided index or selection criteria. The returned object represents the selected item and includes its associated properties and methods for further manipulation.
   * @param {string} value. The value of an item from the listBox.
   * @returns {HTMLElement}
   */
  getItem(value: string): HTMLElement;
  /**
   * Returns an array containing all items currently present in the ListBox component. Each item in the array represents an individual entry within the ListBox, typically as an object with relevant properties such as value, label, and any other associated data. This allows developers to access, display, or manipulate the full set of ListBox options programmatically.
   * @returns {{label: string, value: string}[]}
   */
  getItems(): {label: string, value: string}[];
  /**
   * Inserts a new item into the collection at the specified index, shifting existing items at and after that position one place to the right. The index determines the position in the array or list where the new item will be placed.
   * @param {number} index. The index where the item must be inserted.
   * @param {any} items. A single item/definition or an array of List Items/definitions of list items to be inserted. The format of the item definitions is the same as the format of the <strong>dataSource</strong> property.
   */
  insert(index: number, items: any): void;
  /**
   * Inserts a new ListItem element into the list, placing it immediately before a specified existing ListItem. This ensures the new item appears in the correct sequence relative to the given reference item.
   * @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
   * @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
   * @returns {Node}
   */
  insertBefore<T extends Node>(node: Node, referenceNode: Node | null): T;
  /**
   * Removes the item located at the specified index from the collection or array. The operation shifts all subsequent items one position to the left, effectively reducing the total number of items by one. The specified index must be within the valid range; otherwise, an error may occur.
   * @param {number} index. The index of the removed item.
   */
  removeAt(index: number): void;
  /**
   * Removes a specific ListItem from the collection of items contained within the given element. This operation updates the element by deleting the specified ListItem from its current list of child items.
   * @param {Node} node. A ListItem element that is part of the list of items inside the element.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Selects a specific item from the ListBox component by programmatically highlighting or activating it, allowing for interaction as if the user had manually chosen the item from the list.
   * @param {string | number | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list.
   */
  select(item: string | number | HTMLElement): void;
  /**
   * Removes the selection from a specified item in the listBox component, ensuring that the item is no longer highlighted or considered selected by the application.
   * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
   */
  unselect(item: string | HTMLElement): void;
  /**
   * Updates the properties or content of a specific item within the listBox control. This operation identifies the targeted item based on its index or unique identifier and applies the specified changes, ensuring the listBox reflects the latest data or state.
   * @param {number} index. The index of the item that is going to be updated.
   * @param {any} details. An object that contains the properties and their new values for the List item that should be updated. For example, label, value or selected attributes.
   */
  update(index: number, details: any): void;
}

export interface ListBoxItem {
  /**
   * The label of the list item.
   * Default value: 
   */
  label?: string | null;
  /**
   * The value of the list item.
   * Default value: 
   */
  value?: string | null;
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

/**Specifies the actions or behavior that are triggered when an item is released or dropped during a drag-and-drop operation. This may include updating the interface, modifying data structures, or invoking specific callback functions associated with the drop event. */
export declare type ListBoxDropAction = 'copy' | 'move' | 'none';
/**Specifies which filtering mode is applied to the data set, controlling how items are included or excluded based on defined criteria. */
export declare type FilterMode = 'contains' | 'containsIgnoreCase' | 'doesNotContain' | 'doesNotContainIgnoreCase' | 'equals' | 'equalsIgnoreCase' | 'startsWith' | 'startsWithIgnoreCase' | 'endsWith' | 'endsWithIgnoreCase' | 'custom';
/**Controls whether the horizontal scroll bar is displayed, allowing users to scroll content left and right when it overflows the container. */
export declare type HorizontalScrollBarVisibility = 'auto' | 'disabled' | 'hidden' | 'visible';
/**Sets or retrieves the current incremental search mode. By default, incremental search is enabled, allowing users to begin searching by typing while the ListBox is focused. This mode enables real-time filtering or selection as the user types, making it easier to quickly find items in the list. */
export declare type SearchMode = 'contains' | 'containsIgnoreCase' | 'doesNotContain' | 'doesNotContainIgnoreCase' | 'equals' | 'equalsIgnoreCase' | 'startsWith' | 'startsWithIgnoreCase' | 'endsWith' | 'endsWithIgnoreCase';
/**Specifies the algorithm used to calculate the width of each item. This setting determines how the item width is measured, such as using fixed values, automatic sizing based on content, or percentage-based calculations. */
export declare type ListItemMeasureMode = 'auto' | 'precise';
/**Specifies the placement of the loading indicator within the user interface, such as at the top, center, or bottom of the container or screen. This property controls where the loading spinner or progress bar will appear while content is being loaded. */
export declare type VerticalAlignment = 'bottom' | 'center' | 'top';
/**Specifies the maximum number of items that a user can select, based on the current selection mode (e.g., single, multiple, or none). This setting controls and restricts selection behavior within the interface. */
export declare type ListSelectionMode = 'none' | 'oneOrManyExtended' | 'zeroOrMany' | 'oneOrMany' | 'zeroAndOne' | 'zeroOrOne' | 'one' | 'checkBox' | 'radioButton';
/**Specifies the user interaction event that triggers the selection of a listbox item: either when the item is initially pressed (‘press’) or when the user releases the press (‘release’). Choosing ‘press’ selects the item on mouse down or touch start, while ‘release’ selects it on mouse up or touch end. This setting controls how and when the user’s selection action is registered. */
export declare type ListBoxSelectionChangeAction = 'press' | 'release';
/**Controls whether the vertical scroll bar is displayed, allowing users to scroll through content vertically when it overflows the container. This setting can be used to show, hide, or automatically display the scroll bar based on the content size. */
export declare type VerticalScrollBarVisibility = 'auto' | 'disabled' | 'hidden' | 'visible';
export interface ListItemProperties {
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
  displayMode?: ListItemDisplayMode | string;
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
/**
 Defines a list item for ListBox, ComboBox, DropDownList.
*/
export interface ListItem extends BaseElement, ListItemProperties {

  /* Get a member by its name */
  [name: string]: any;
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
export interface ListItemsGroupProperties {
  /**
   * 
   * Default value: ""
   */
  label?: string;
}
/**
 Defines a group of list items.
*/
export interface ListItemsGroup extends BaseElement, ListItemsGroupProperties {

  /* Get a member by its name */
  [name: string]: any;
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

