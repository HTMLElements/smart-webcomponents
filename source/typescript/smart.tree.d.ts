import  {BaseElement, Animation} from "./smart.element"

export interface TreeProperties {
  /**
   * Enables drag-and-drop functionality within the current tree structure. When this option is set to 'true', users can drag items from the current tree and drop them into another tree that has the allowDrop setting enabled. This facilitates moving or copying items between compatible trees using a drag-and-drop interface.
   * Default value: false
   */
  allowDrag?: boolean;
  /**
   * Enables drag-and-drop functionality, permitting items to be dropped into this tree. The dropped items may originate from either within the current tree or from a different tree, supporting both intra-tree and inter-tree item transfers.
   * Default value: false
   */
  allowDrop?: boolean;
  /**
   * Configures or retrieves the current animation mode. When set to 'none', all animations are disabled. Use this property to control whether animations are enabled, disabled, or set to a specific animation style or behavior.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Automatically hides the tree's toggle arrow when the mouse pointer leaves the tree area, and displays the toggle arrow again when the mouse pointer enters the tree area. This provides a cleaner interface by only showing the toggle control when the user is actively interacting with the tree.
   * Default value: false
   */
  autoHideToggleElement?: boolean;
  /**
   * Controls whether the component automatically loads its state (including filtering, sorting, expanded, and selected items) from the browser's localStorage. When enabled, any previously saved state is retrieved and applied to the component on initialization, allowing users to resume where they left off. Disabling this option prevents the component from loading state information from localStorage.
   * Default value: false
   */
  autoLoadState?: boolean;
  /**
   * Controls whether the component automatically saves its state—including filtering, sorting, expanded rows, and selected items—to the browser’s localStorage. When enabled, these settings are preserved and restored on page reload, providing a persistent user experience.
   * Default value: false
   */
  autoSaveState?: boolean;
  /**
   * Controls whether the tree is automatically re-sorted after changes. When autoSort is set to false, any modifications made to an already sorted tree will not trigger an automatic re-sorting; you will need to manually sort the tree to update its order. If autoSort is true, the tree will automatically re-sort itself whenever its contents are modified.
   * Default value: true
   */
  autoSort?: boolean;
  /**
   * Specifies the data source from which the Tree component will retrieve and display its hierarchical data. This property determines which dataset is loaded and rendered within the Tree structure.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Controls whether the jqxTree widget is enabled or disabled. When enabled, users can interact with the tree and perform standard operations; when disabled, all user interaction is blocked and the tree appears visually inactive.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Controls the visibility of the loading indicator, allowing you to display it when a process is in progress and hide it when the process completes.
   * Default value: false
   */
  displayLoadingIndicator?: boolean;
  /**
   * Specifies which field in the data source should be used as the label for each item—this determines the display text shown to users for every item in lists, dropdowns, or other UI elements.
   * Default value: "label"
   */
  displayMember?: string;
  /**
   * A callback function that allows you to customize the HTML content displayed as drag feedback during a drag-and-drop operation. This function receives a single parameter: an array containing the items currently being dragged. Use this array to generate and return your custom HTML representation for the drag feedback.
   * Default value: null
   */
  dragFeedbackFormatFunction?: any;
  /**
   * Specifies the pixel offset of the drag feedback element relative to the mouse cursor during a drag operation. This value is defined as an array, where the first element represents the horizontal (X-axis) offset and the second element represents the vertical (Y-axis) offset. Adjusting these values changes the position of the visual feedback element in relation to the cursor as items are being dragged.
   * Default value: 10,10
   */
  dragOffset?: number[];
  /**
   * 
   * Default value: false
   */
  dropDownMode?: boolean;
  /**
   * Specifies the width, in pixels, of the Tree component when it appears within a drop-down interface. Adjusting this value controls how wide the drop-down Tree is rendered, allowing for customization to fit various layouts or content requirements.
   * Default value: 300
   */
  dropDownWidth?: number;
  /**
   * Specifies the height of the Tree component when it is rendered within a drop-down menu. Adjusting this value determines how much vertical space the Tree occupies in drop-down mode, affecting the number of visible items before scrolling is required.
   * Default value: 400
   */
  dropDownHeight?: number;
  /**
   * Controls whether an item can be edited. When enabled, users can initiate editing by double-clicking a tree item or by selecting an item and pressing F2. If disabled, editing operations for the item are prevented.
   * Default value: false
   */
  editable?: boolean;
  /**
   * Specifies how TreeItemGroups within the Tree expand or collapse, controlling whether multiple groups can be expanded simultaneously, only one group can be expanded at a time, or all groups are collapsed by default. This setting defines the expand/collapse interaction pattern for grouped items in the Tree structure.
   * Default value: multiple
   */
  expandMode?: TreeExpandMode | string;
  /**
   * Controls the filtering functionality within the component. When enabled, a filter input field is displayed, allowing users to refine visible data based on their input. When disabled, the filter input is hidden, and all data items are shown without filtering options.
   * Default value: false
   */
  filterable?: boolean;
  /**
   * Triggers the filter action exclusively when the 'Enter' key is pressed, ensuring that filtering occurs only after user confirmation rather than on every input change.
   * Default value: false
   */
  filterOnEnter?: boolean;
  /**
   * Defines a custom placeholder text to display within the filter input field, guiding users on what they can search or filter for.
   * Default value: ""
   */
  filterInputPlaceholder?: string;
  /**
   * Specifies which property of the TreeItem will be used as the filtering criterion. By default, the component filters using the label property of each TreeItem. You can change this behavior by setting the property to value to filter based on the value property, or to textContent to filter based on the textual content within the TreeItem. You may also specify any other valid property name to customize the filtering logic according to your data structure. This allows for flexible and precise filtering of TreeItems based on your application's requirements.
   * Default value: "label"
   */
  filterMember?: string;
  /**
   * Specifies the filtering method to be applied when processing data, such as selecting between different filter types (e.g., linear, nearest, or custom). Determines how input data is modified or constrained based on the selected filter mode.
   * Default value: containsIgnoreCase
   */
  filterMode?: FilterMode | string;
  /**
   * Configures or retrieves whether the tree checkboxes support three distinct states: checked, unchecked, and indeterminate. This property is applicable only when the selectionMode is set to 'checkBox'. When enabled, the indeterminate state allows parent checkboxes to visually reflect that only some of their child nodes are selected.
   * Default value: false
   */
  hasThreeStates?: boolean;
  /**
   * Specifies the field in the data source that contains the collection of subitems associated with each item group. This property maps the hierarchical structure by identifying where the subitems data for each group is stored, enabling the component to correctly render nested or grouped elements.
   * Default value: "items"
   */
  itemsMember?: string;
  /**
   * Specifies a custom placeholder text to display within the loading indicator when the loadingIndicatorPosition property is set to either 'top' or 'bottom'. This allows you to personalize the message shown to users while content is loading in these positions.
   * Default value: "Loading..."
   */
  loadingIndicatorPlaceholder?: string;
  /**
   * Specifies the location on the screen where the loading indicator will appear, such as 'top', 'bottom', 'center', or a custom position.
   * Default value: center
   */
  loadingIndicatorPosition?: VerticalAlignment | string;
  /**
   * Sets or retrieves the unlockKey value used to grant access to the product. The unlockKey acts as an authorization token or password that allows users to unlock and use the product’s features.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Sets or retrieves the current locale (language and regional settings) used by the component. This property works together with the messages property, which provides localized text and translations based on the selected locale. Use this property to display content in different languages and formats according to user preferences.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function associated with the localization module, typically used to handle events such as language changes, translation updates, or localization data loading. This function enables the application to respond dynamically to localization-related operations.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines or retrieves an object containing the text strings displayed by the widget, enabling customization for different languages and regions. This property is used together with the locale property to provide localization support, allowing you to easily translate or adjust interface text based on the user's language settings.
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
   *     "noId": "jqx-tree: Saving and loading the element's state are not available if the element has no id."
   *   }
   * }
   */
  messages?: any;
  /**
   * Defines the behavior of the scrollbar—or, when 'scrollMode' is set to ''scrollButtons'', the scroll buttons—when the content exceeds the visible area of the element. This setting determines how users can navigate overflow content, such as automatically displaying scrollbars, enabling scroll buttons, or applying custom overflow handling.
   * Default value: auto
   */
  overflow?: Overflow | string;
  /**
   * If the element is set to readonly, users will be able to see its value but will not be able to modify, edit, or interact with its content in any way. The element will appear as non-editable, ensuring that its value remains unchanged by user input.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Specifies whether right-to-left (RTL) layout support is activated. When enabled, the user interface elements, text direction, and content flow are adjusted to accommodate languages that are read from right to left, such as Arabic or Hebrew.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies whether to display a traditional scrollbar or to use scroll buttons for navigating content when the element’s content exceeds its visible area. This setting controls the user’s method of scrolling in overflow situations.
   * Default value: scrollbar
   */
  scrollMode?: TreeScrollMode | string;
  /**
   * A list (array) containing the index paths of the currently selected items. Each element in the array represents the hierarchical position of a selected item within the data structure, allowing precise identification of multiple selections.
   * Default value: 
   */
  selectedIndexes?: string[];
  /**
   * Specifies the visual style or method used to highlight selected items, such as changing their background color, border, or font style, to indicate their selection state to the user.
   * Default value: row
   */
  selectionDisplayMode?: TreeSelectionDisplayMode | string;
  /**
   * Specifies how selections can be made within the component, such as allowing single selection, multiple selections, or no selection at all.
   * Default value: one
   */
  selectionMode?: TreeSelectionMode | string;
  /**
   * Specifies whether selection is enabled for smart-tree-items-groups, allowing users to select one or more groups within the tree component. When set to true, group items in the jqxTree can be selected by user interaction.
   * Default value: all
   */
  selectionTarget?: TreeSelectionTarget | string;
  /**
   * Displays or hides connector lines that visually represent the relationships between elements within a group, making it easier to understand how the elements are interconnected.
   * Default value: false
   */
  showLines?: boolean;
  /**
   * Controls the visibility of connector lines between tree nodes, starting from the root node. When the 'showLines' property is set to true, lines connecting the hierarchical levels of the tree are displayed; if set to false, these lines are hidden.
   * Default value: false
   */
  showRootLines?: boolean;
  /**
   * Defines a user-provided function to specify custom sorting logic. This function allows you to determine how items are ordered, overriding the default sort behavior. It receives two items as arguments and should return a value indicating their sort order.
   * Default value: null
   */
  sort?: any;
  /**
   * Specifies the sort order to be applied, allowing values of either 'ascending' (arranging items from lowest to highest) or 'descending' (arranging items from highest to lowest).
   * Default value: asc
   */
  sortDirection?: TreeSortDirection | string;
  /**
   * Controls whether sorting functionality is enabled or disabled for the data set. When enabled, users can sort items based on specified criteria or columns; when disabled, sorting is not available.
   * Default value: false
   */
  sorted?: boolean;
  /**
   * Sets or retrieves the visual theme applied to the element, allowing you to customize its appearance (such as color scheme, style, or overall look) by selecting from predefined theme options.
   * Default value: ""
   */
  theme?: string;
  /**
   * Specifies the position of the toggle element (such as an arrow) within the component, indicating where the toggle control will be displayed relative to the content (e.g., left, right, top, or bottom).
   * Default value: near
   */
  toggleElementPosition?: Position | string;
  /**
   * Controls how groups within smart-tree-items are expanded or collapsed. Specifies the toggle behavior for displaying or hiding group items in the jqxTree component.
   * Default value: dblclick
   */
  toggleMode?: TreeToggleMode | string;
  /**
   * Determines whether the element can receive keyboard focus. When set, the element is focusable using keyboard navigation (such as the Tab key) or scripting. This property can also be used to check the current focusable state of the element.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Specifies which field in the data source provides the value for each item. This property maps item values in your component or UI element to the corresponding field in your underlying data source, ensuring the correct value is referenced and displayed.
   * Default value: "value"
   */
  valueMember?: string;
}
/**
 Treeview component is a user interface that is used to represent hierarchical data in a tree structure.
*/
export interface Tree extends BaseElement, TreeProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the selected item(s) in the jqx-tree component change. It occurs both when a user selects a new item or deselects a previously selected item, allowing developers to execute custom logic in response to changes in the tree's selection state.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, oldSelectedIndexes, selectedIndexes)
   *  item - The item the user has interacted with to change the selection (only when applicable).
   *  oldSelectedIndexes - The selected indexes before the selection is changed.
   *  selectedIndexes - The selected indexes after the selection is changed.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered whenever a jqx-tree-items-group component is collapsed by the user. It occurs immediately after the group transitions from an expanded (open) state to a collapsed (closed) state, allowing you to execute custom logic in response to this action.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, path, value, children)
   *  item - the collapsed jqx-tree-items-group
   *  label - the label of the collapsed jqx-tree-items-group
   *  path - the path of the collapsed jqx-tree-items-group
   *  value - the value of the collapsed jqx-tree-items-group
   *  children - the children of the collapsed jqx-tree-items-group
   */
  onCollapse?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event fires immediately before a jqx-tree-items-group collapses, providing an opportunity to intercept the action. Within the event handler, you can call event.preventDefault() to cancel the collapsing operation, preventing the group from being closed. This allows developers to implement custom logic—such as confirmation dialogs or validation checks—prior to the group’s collapse.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, path, value, children)
   *  item - the jqx-tree-items-group to be collapsed
   *  label - the label of the jqx-tree-items-group to be collapsed
   *  path - the path of the jqx-tree-items-group to be collapsed
   *  value - the value of the jqx-tree-items-group to be collapsed
   *  children - the children of the jqx-tree-items-group to be collapsed
   */
  onCollapsing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a jqx-tree-item or jqx-tree-items-group element is dropped onto a target location within the DOM during a drag-and-drop operation. You can prevent the drop action from completing—effectively canceling the move—by calling event.preventDefault() within your event handler function. This allows you to implement custom logic to determine whether the drop should be allowed or denied.
	* @param event. The custom event. Custom data event was created with: ev.detail(container, data, item, items, originalEvent, previousContainer, target)
   *  container - the tree the dragged item(s) is dropped to
   *  data - an object with additional drag details
   *  item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
   *  items - an array with all dragged items
   *  originalEvent - the original, browser, event that initiates the drop operation
   *  previousContainer - the tree the dragged item(s) is dragged from
   *  target - the element the dragged items are dropped to
   */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when a jqx-tree-item or jqx-tree-items-group component starts being dragged by the user. It occurs at the moment the drag operation begins, allowing you to implement custom logic or UI feedback during the drag-and-drop interaction within the jqxTree widget.
	* @param event. The custom event. Custom data event was created with: ev.detail(data, item, items, originalEvent)
   *  data - an object with additional drag details
   *  item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
   *  items - an array with all dragged items
   *  originalEvent - the original, browser, event that initiates the dragging operation
   */
  onDragging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is fired when a drag operation begins within the jqx-tree component. It allows you to intercept the initiation of the drag action. By invoking event.preventDefault() within your event handler, you can cancel the drag operation before it proceeds. This provides an opportunity to implement custom logic, such as conditional validations or user permissions, before allowing or preventing the drag from taking place.
	* @param event. The custom event. Custom data event was created with: ev.detail(container, data, item, items, originalEvent, previousContainer)
   *  container - the tree the dragged item(s) is dragged from
   *  data - an object with additional drag details
   *  item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
   *  items - an array with all dragged items
   *  originalEvent - the original, browser, event that initiates the drag operation
   *  previousContainer - the tree the dragged item(s) is dragged from
   */
  onDragStart: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when a `jqx-tree-items-group` element within the tree is expanded by the user, either through a mouse click or keyboard interaction. It allows developers to execute custom logic in response to the expansion of a specific group of items within the jqxTree component.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, path, value, children)
   *  item - the expanded jqx-tree-items-group
   *  label - the label of the expanded jqx-tree-items-group
   *  path - the path of the expanded jqx-tree-items-group
   *  value - the value of the expanded jqx-tree-items-group
   *  children - the children of the expanded jqx-tree-items-group
   */
  onExpand?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is fired just before a jqx-tree-items-group is expanded. At this stage, the expansion process has not yet occurred, allowing you to perform custom logic or checks. If you want to prevent the group from expanding, call event.preventDefault() within your event handler; this will cancel the default expand action.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, path, value, children)
   *  item - the jqx-tree-items-group to be expanded
   *  label - the label of the jqx-tree-items-group to be expanded
   *  path - the path of the jqx-tree-items-group to be expanded
   *  value - the value of the jqx-tree-items-group to be expanded
   *  children - the children of the jqx-tree-items-group to be expanded
   */
  onExpanding?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the selected item in the jqx-tree component changes. It occurs after a user selects a different tree node, either through mouse interaction or keyboard navigation, allowing you to respond to selection changes within the tree.
	* @param event. The custom event. Custom data event was created with: ev.detail(value)
   *  value - The filter input value.
   */
  onFilterChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered each time the dropdown menu becomes visible to the user, such as when the user clicks on the dropdown or focuses on the dropdown field, causing the options list to appear. Use this event to perform actions whenever the dropdown is opened, such as loading options dynamically or tracking user interactions.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the dropdown menu is closed, either by user interaction (such as clicking outside the dropdown or selecting an option) or programmatically through the application logic. Use this event to execute any cleanup tasks or update UI elements that depend on the dropdown’s visibility state.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when the user scrolls the Tree component all the way to its bottom edge, indicating that the last visible item in the Tree is fully displayed. You can use this event to implement features such as infinite scrolling, lazy loading, or displaying additional content as the user reaches the end of the Tree.
	* @param event. The custom event.    */
  onScrollBottomReached?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user scrolls the Tree component and reaches the very topmost position, indicating that no more content is available above within the scrollable area.
	* @param event. The custom event.    */
  onScrollTopReached?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user performs a leftward swipe gesture within the Tree component. It detects when the user places their finger or cursor on the Tree and moves it horizontally to the left, allowing you to handle custom interactions or navigation in response to this action.
	* @param event. The custom event.    */
  onSwipeleft?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user performs a rightward swipe gesture within the Tree component. It detects when a swipe action starts inside the Tree and moves in the right direction, allowing developers to implement custom behaviors in response to this specific user interaction.
	* @param event. The custom event.    */
  onSwiperight?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Inserts a new item immediately after a specified item within the same parent, making it a sibling element in the list or hierarchy.
   * @param {HTMLElement} item. A smart-tree-item/smart-tree-items-group to add to the Tree
   * @param {string | HTMLElement} sibling. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to add the item after.
   */
  addAfter(item: HTMLElement, sibling: string | HTMLElement): void;
  /**
   * Inserts a new item directly before a specified existing item within the same parent, making both items siblings in the data structure.
   * @param {HTMLElement} item. A smart-tree-item/smart-tree-items-group to add to the Tree
   * @param {string | HTMLElement} sibling. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to add the item before.
   */
  addBefore(item: HTMLElement, sibling: string | HTMLElement): void;
  /**
   * Appends a new item to the end of the specified parent item's list of children, making it the last child within the parent structure.
   * @param {HTMLElement} item. A smart-tree-item/smart-tree-items-group to add to the Tree
   * @param {string | HTMLElement} parent?. The smart-tree-items-group (or its id or numeric path) to add the item to.
   */
  addTo(item: HTMLElement, parent?: string | HTMLElement): void;
  /**
   * Removes any current selections, resetting the selection state to none. This action ensures that no items remain highlighted or marked as selected.
   */
  clearSelection(): void;
  /**
   * Collapses all elements with the class smart-tree-items-group, ensuring that every expandable group within the tree component is minimized and any nested content is hidden from view. This action provides a streamlined overview of the tree by hiding detailed or child items under each group.
   * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
   */
  collapseAll(animation?: boolean): void;
  /**
   * Collapses the specified smart-tree-items-group, hiding all of its nested child items from view within the tree component. This action changes the group's state to collapsed, providing a more compact tree display by temporarily concealing its contents.
   * @param {HTMLElement | string} item. smart-tree-items-group (or its id or numeric path).
   * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
   */
  collapseItem(item: HTMLElement | string, animation?: boolean): void;
  /**
   * Closes the dropdown menu when the Tree component is operating in dropdown mode, ensuring that the dropdown is dismissed upon selection or when appropriate user interactions occur.
   */
  closeDropDown(): void;
  /**
   * Displays the dropdown menu when the Tree component is set to dropdown mode, allowing users to interact with the tree structure within a dropdown interface.
   */
  openDropDown(): void;
  /**
   * Ensures that a specified item is brought into the visible area of the scrollable container by automatically scrolling the container as needed, so the item is fully or partially in view for the user.
   * @param {HTMLElement | string} item. The id or numeric path of an item
   */
  ensureVisible(item: HTMLElement | string): void;
  /**
   * Expands all elements within the tree component that are assigned the 'smart-tree-items-group' class, making every group and its child items visible in the tree view.
   * @param {string} animation?. If set to false, disables expand animation even if animation is enabled for the element.
   */
  expandAll(animation?: string): void;
  /**
   * Expands a specific group within the SmartTree component, displaying all child items associated with the selected tree group. This action reveals the contents of a single smart-tree-items-group node, making its nested items visible to the user.
   * @param {HTMLElement | string} item. smart-tree-items-group (or its id or numeric path).
   * @param {boolean} animation?. If set to false, disables expand animation even if animation is enabled for the element.
   */
  expandItem(item: HTMLElement | string, animation?: boolean): void;
  /**
   * Applies a filter to the Tree component, displaying only the nodes that match the specified criteria while hiding all others. This helps users easily find and focus on relevant items within the tree structure.
   * @param {string} filterQuery. Filter query.
   */
  filter(filterQuery: string): void;
  /**
   * Retrieves a specific item by using either its unique identifier (ID) or a numeric path value. This function supports both string-based IDs and numeric paths to locate and return the corresponding item from the collection.
   * @param {string} id. The id or numeric path of an item.
   * @returns {HTMLElement}
   */
  getItem(id: string): HTMLElement;
  /**
   * Retrieves the currently active filter, including its criteria and settings, that has been applied to the data set.
   * @returns {string}
   */
  getFilter(): string;
  /**
   * Retrieves the currently selected values from the component. If no value is explicitly set, the method returns the labels of the selected items instead.
   * @returns {string[]}
   */
  getSelectedValues(): string[];
  /**
   * Returns the current state of the SmartTree component, including information such as which nodes are expanded, collapsed, selected, or checked. This allows you to save or restore the tree’s structure and user interactions.
   * @returns {any}
   */
  getState(): any;
  /**
   * Inserts a specified item into the array or list at the designated index, shifting subsequent items to the right to accommodate the new element. If the given position is out of range, an error may be thrown or the item may be added at the nearest valid position, depending on implementation.
   * @param {any} item. A smart-tree-item/smart-tree-items-group (or an Object to create an item from) to add to the Tree. If an Object is passed, the available fields are <strong>tagName</strong> (<em>'smart-tree-item'</em> - default - or <em>'smart-tree-items-group'</em>), <strong>disabled</strong>, <strong>expanded</strong> (only if <strong>tagName</strong> is <em>'smart-tree-items-group'</em>), <strong>(items)</strong> (only if <strong>tagName</strong> is <em>'smart-tree-items-group'</em>), <strong>(label)</strong>, <strong>separator</strong>, <strong>shortcut</strong> (only if <strong>tagName</strong> is <em>'smart-tree-item'</em>), and <strong>(value)</strong>. (items), (label), and (value) have to correspond to the values of <strong>itemsMember</strong>, <strong>displayMember</strong>, and <strong>valueMember</strong> respectively.
   * @param {string} path?. The path to insert the item at.
   */
  insert(item: any, path?: string): void;
  /**
   * Loads and restores the current state of the Tree, including expanded or collapsed branches, selected nodes, and any custom configurations. This ensures the Tree appears as it was previously saved or last interacted with.
   * @param {any} state?. An object returned by one of the methods <strong>getState</strong> or <strong>saveState</strong>. If a state is not passed, the method tries to load the state from the browser's localStorage.
   */
  loadState(state?: any): void;
  /**
   * Moves the selected item one position lower in the order among its sibling elements, placing it directly after the next sibling in the list.
   * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
   */
  moveDown(item: HTMLElement | string): void;
  /**
   * Moves the specified item one position higher in the list of its sibling items, effectively placing it before the previous sibling in the order.
   * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
   */
  moveUp(item: HTMLElement | string): void;
  /**
   * Removes a specified item from the collection or list. This operation locates the target item based on the provided identifier or criteria and deletes it from the data structure, ensuring that the collection is updated accordingly. If the item does not exist, no action is taken.
   * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
   */
  removeItem(item: HTMLElement | string): void;
  /**
   * Persists the current state of the Tree structure, including all nodes, their expanded or collapsed statuses, and any selection information, allowing the Tree to be accurately restored in future sessions.
   * @returns {any}
   */
  saveState(): any;
  /**
   * Allows selection of an item either by specifying its numerical index in the list or by providing the item's unique HTMLElement ID. This enables precise targeting of elements for further operations.
   * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
   */
  select(item: HTMLElement | string): void;
  /**
   * Selects one or multiple items from a list based on their specified values. This allows you to programmatically choose which items are highlighted or marked as selected, using their corresponding value identifiers.
   * @param {string | string[]} items. The smart-tree-item/smart-tree-items-group values or labels, if values are not defined.
   */
  setSelectedValues(items: string | string[]): void;
  /**
   * Deselects a specified item, either by providing its numeric index in the list or by passing the item's HTMLElement ID as a string.
   * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
   */
  unselect(item: HTMLElement | string): void;
  /**
   * Deselects one or more items based on their specified values, removing them from the current selection set.
   * @param {string | string[]} items. The smart-tree-item/smart-tree-items-group values or labels, if values are not defined.
   */
  unselectValues(items: string | string[]): void;
  /**
   * Updates an existing item in the database with new values provided in the request. This operation locates the item by its unique identifier and applies the specified changes to its properties. Returns the updated item upon success.
   * @param {HTMLElement | string} item. smart-tree-item/smart-tree-items-group (or its id or numeric path).
   * @param {any} newItem. An object with updated properties.
   */
  updateItem(item: HTMLElement | string, newItem: any): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-tree"): Tree;
        querySelector(selectors: "smart-tree"): Tree | null;
        querySelectorAll(selectors: "smart-tree"): NodeListOf<Tree>;
        getElementsByTagName(qualifiedName: "smart-tree"): HTMLCollectionOf<Tree>;
        getElementsByName(elementName: "smart-tree"): NodeListOf<Tree>;
    }
}

/**Specifies how TreeItemGroups within the Tree expand or collapse, controlling whether multiple groups can be expanded simultaneously, only one group can be expanded at a time, or all groups are collapsed by default. This setting defines the expand/collapse interaction pattern for grouped items in the Tree structure. */
export declare type TreeExpandMode = 'multiple' | 'single';
/**Specifies the filtering method to be applied when processing data, such as selecting between different filter types (e.g., linear, nearest, or custom). Determines how input data is modified or constrained based on the selected filter mode. */
export declare type FilterMode = 'contains' | 'containsIgnoreCase' | 'doesNotContain' | 'doesNotContainIgnoreCase' | 'equals' | 'equalsIgnoreCase' | 'startsWith' | 'startsWithIgnoreCase' | 'endsWith' | 'endsWithIgnoreCase';
/**Specifies the location on the screen where the loading indicator will appear, such as 'top', 'bottom', 'center', or a custom position. */
export declare type VerticalAlignment = 'bottom' | 'center' | 'top';
/**Defines the behavior of the scrollbar—or, when 'scrollMode' is set to ''scrollButtons'', the scroll buttons—when the content exceeds the visible area of the element. This setting determines how users can navigate overflow content, such as automatically displaying scrollbars, enabling scroll buttons, or applying custom overflow handling. */
export declare type Overflow = 'auto' | 'hidden' | 'scroll';
/**Specifies whether to display a traditional scrollbar or to use scroll buttons for navigating content when the element’s content exceeds its visible area. This setting controls the user’s method of scrolling in overflow situations. */
export declare type TreeScrollMode = 'scrollbar' | 'scrollButtons';
/**Specifies the visual style or method used to highlight selected items, such as changing their background color, border, or font style, to indicate their selection state to the user. */
export declare type TreeSelectionDisplayMode = 'row' | 'label';
/**Specifies how selections can be made within the component, such as allowing single selection, multiple selections, or no selection at all. */
export declare type TreeSelectionMode = 'none' | 'oneOrManyExtended' | 'zeroOrMany' | 'oneOrMany' | 'zeroAndOne' | 'zeroOrOne' | 'one' | 'checkBox' | 'radioButton';
/**Specifies whether selection is enabled for jqx-tree-items-groups, allowing users to select one or more groups within the tree component. When set to true, group items in the jqxTree can be selected by user interaction. */
export declare type TreeSelectionTarget = 'all' | 'leaf';
/**Specifies the sort order to be applied, allowing values of either 'ascending' (arranging items from lowest to highest) or 'descending' (arranging items from highest to lowest). */
export declare type TreeSortDirection = 'ascending' | 'descending';
/**Specifies the position of the toggle element (such as an arrow) within the component, indicating where the toggle control will be displayed relative to the content (e.g., left, right, top, or bottom). */
export declare type Position = 'near' | 'far';
/**Controls how groups within jqx-tree-items are expanded or collapsed. Specifies the toggle behavior for displaying or hiding group items in the jqxTree component. */
export declare type TreeToggleMode = 'click' | 'dblclick' | 'arrow';
export interface TreeItemProperties {
  /**
   * Controls whether the element is enabled (interactive) or disabled (non-interactive). When disabled, the element cannot be interacted with by the user and may appear visually dimmed or inactive.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * 
   * Default value: 
   */
  label?: any;
  /**
   * 
   * Default value: null
   */
  level?: number;
  /**
   * 
   * Default value: false
   */
  selected?: boolean;
  /**
   * 
   * Default value: true
   */
  separator?: boolean;
  /**
   * 
   * Default value: ""
   */
  shortcut?: string;
  /**
   * 
   * Default value: null
   */
  value?: any;
  /**
   * Prevents users from interacting with the item, disabling all actions such as clicking, tapping, dragging, or keyboard input. The item will not respond to any user-generated events while this setting is enabled.
   * Default value: false
   */
  readonly?: boolean;
}
/**
 Defines a tree items.
*/
export interface TreeItem extends BaseElement, TreeItemProperties {

  /* Get a member by its name */
  [name: string]: any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-tree-item"): TreeItem;
        querySelector(selectors: "smart-tree-item"): TreeItem | null;
        querySelectorAll(selectors: "smart-tree-item"): NodeListOf<TreeItem>;
        getElementsByTagName(qualifiedName: "smart-tree-item"): HTMLCollectionOf<TreeItem>;
        getElementsByName(elementName: "smart-tree-item"): NodeListOf<TreeItem>;
    }
}

export interface TreeItemsGroupProperties {
  /**
   * Controls whether the element is active and can be interacted with by the user. When enabled, the element responds to user input; when disabled, it appears inactive and does not accept interactions.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * 
   * Default value: false
   */
  expanded?: boolean;
  /**
   * 
   * Default value: 
   */
  label?: any;
  /**
   * 
   * Default value: null
   */
  level?: number;
  /**
   * 
   * Default value: false
   */
  selected?: boolean;
  /**
   * 
   * Default value: true
   */
  separator?: boolean;
  /**
   * 
   * Default value: null
   */
  value?: any;
  /**
   * Prevents users from interacting with the item by disabling all mouse, keyboard, and touch events, making the item unresponsive to user actions.
   * Default value: false
   */
  readonly?: boolean;
}
/**
 Defines a group of tree items.
*/
export interface TreeItemsGroup extends BaseElement, TreeItemsGroupProperties {

  /* Get a member by its name */
  [name: string]: any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-tree-items-group"): TreeItemsGroup;
        querySelector(selectors: "smart-tree-items-group"): TreeItemsGroup | null;
        querySelectorAll(selectors: "smart-tree-items-group"): NodeListOf<TreeItemsGroup>;
        getElementsByTagName(qualifiedName: "smart-tree-items-group"): HTMLCollectionOf<TreeItemsGroup>;
        getElementsByName(elementName: "smart-tree-items-group"): NodeListOf<TreeItemsGroup>;
    }
}

