import  {BaseElement, Animation} from "./smart.element"

/**
 Layout splits your content into resizable sections.
*/
export interface Layout extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines the options that will be available for selection inside the context menu.
   * Default value: delete
   */
  contextMenuDataSource?: any;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets Layout's data source.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Optional. A label for all Splitter items inside the Layout. Usefull when exporting the dataSource and reusing it in other elements, for example, tree, etc.
   * Default value: "Template"
   */
  itemLabel?: string;
  /**
   * Optional. A label for all Splitters inside the Layout. Usefull when exporting the dataSource and reusing it in other elements, for example, tree, etc.
   * Default value: "Layout"
   */
  itemGroupLabel?: string;
  /**
   * A getter that returns an array of all Splitter items inside the Layout.
   * Default value: 
   */
  items?: any;
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
   * Sets an object with string values, related to the different states of passwords strength.
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid '!",
   *     "propertyInvalidValueType": "Invalid '!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": ".",
   *     "invalidIndex": "' method accepts an index of type number.",
   *     "invalidNode": "' method accepts an object or an array of objects as it's second parameter.",
   *     "invalidSettings": "' method accepts a string or an object as it's second parameter.",
   *     "delete": "Delete",
   *     "noId": ": requires an id in order to save/load a state."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets Layout's main orientation. The orientation is applied to all Splitters inside the Layout unless they have their orientation explicitly set in the dataSource.
   * Default value: vertical
   */
  orientation?: Orientation;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Determines the resize step during reisizing
   * Default value: 5
   */
  resizeStep?: number;
  /**
   * When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar.
   * Default value: false
   */
  liveResize?: boolean;
  /**
   * Determines the placeholder text of the empty items.
   * Default value: "Empty"
   */
  placeholder?: string;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the selected item. When an item is selected the buttons for creating nested items are displayed inside it.
   * Default value: null
   */
  selectedIndex?: any;
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
   * This event is triggered when resizing begins.
	* @param event. The custom event.    */
  onResizeStart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when resizing finishes.
	* @param event. The custom event.    */
  onResizeEnd?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a change regarding the Layout's state has occured, such as inserting a new item, removing an item, etc.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, type)
   *  item - The Splitter item that was the target of a change.
   *  type - A description of the operation that has cause the change.
   */
  onStateChange?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the selection is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldSelectedIndex, selectedIndex)
   *  oldSelectedIndex - The Splitter item that was previously selected.
   *  selectedIndex - The Splitter item that is currently selected.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a the context menu is about to be closed. The operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a the context menu is closed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a the context menu is about to be opened. The operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a the context menu is opened.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an option from the context menu has been clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item, label, value)
   *  target - The Splitter item that was the target of the context menu opening.
   *  item - The Context menu item that was clicked.
   *  label - The label of the context menu that was clicked.
   *  value - The value of the context menu that was clicked.
   */
  onMenuItemClick?: ((this: any, ev: Event) => any) | null;
  /**
   * Appends a new node.
   * @param {Node} node. The node to append
   * @returns {Node}
   */
  appendChild<T extends Node>(node: Node): T;
  /**
   * Inserts the specified "smart-splitter-item" node before the reference "smart-splitter-item" node.
   * @param {Node} newNode. The  "smart-splitter-item" node to insert.
   * @param {Node | null} referenceNode?. The "smart-splitter-item" node before which newNode is inserted.
   * @returns {Node}
   */
  insertBefore<T extends Node>(newNode: Node, referenceNode?: Node | null): T;
  /**
   * Removes a child "smart-splitter-item" node from the Layout.
   * @param {Node} node. The "smart-splitter-item" node to remove.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Returns a Splitter Item according to the index that is passed as an argument.
   * @param {any} index. The index of an item.
   */
  getItem(index: any): void;
  /**
   * Returns the index of a Splitter Item that is passed as an argument.
   * @param {any} item. The index of the Splitter item that is passed as an argument.
   */
  getItemIndex(item: any): void;
  /**
   * Insert a new Splitter item at a given position.
   * @param {any} item. A Splitter Item or an object defining a Splitter item to be inserted.
   * @param {number | string} index. The index at which a new item will be inserted.
   * @param {string} position?. The postition at which the new item will be inseted - top, bottom, left, right.
   */
  insert(item: any, index: number | string, position?: string): void;
  /**
   * Removes a Splitter item from the Layout.
   * @param {any} index. The index of an item to be removed or an instance of Smart.SplitterItem.
   */
  removeItem(index: any): void;
  /**
   * Removes all items from the Layout
   */
  removeAll(): void;
  /**
   * Selects a Splitter item from the Layout.
   * @param {any} index. The index of an item to be removed or an instance of Smart.SplitterItem.
   */
  select(index: any): void;
  /**
   * Unselects the selected item inside the element.
   */
  unselect(): void;
  /**
   * Updates a Splitter item that is inside the Layout.
   * @param {any} index. The index of an item to be removed or an instance of Smart.SplitterItem.
   * @param {any} settings. An object containing properties with new values for the Splitter item that should be updated.
   */
  updateItem(index: any, settings: any): void;
  /**
   * Clears the localStorage of any previous cached states of the element according to it's id.
   */
  clearState(): void;
  /**
   * Saves the current state of the element to LocalStorage. Requires an id to be set to the element.
   * @returns {any}
   */
  saveState(): any;
  /**
   * Loads a previously saved state of the element. If no state is provided as an argument the method will do a localStorage lookup according to the id of the element.
   * @param {any[]} state?. An array of objects that represents a cached state of the element. The result of calling the 'saveState' method.
   */
  loadState(state?: any[]): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-layout"): Layout;
			querySelector(selectors: "smart-layout"): Layout | null;	
			querySelectorAll(selectors: "smart-layout"): NodeListOf<Layout>;
			getElementsByTagName(qualifiedName: "smart-layout"): HTMLCollectionOf<Layout>;
			getElementsByName(elementName: "smart-layout"): NodeListOf<Layout>;	
    }
}

/**Sets or gets Layout's main orientation. The orientation is applied to all Splitters inside the Layout unless they have their orientation explicitly set in the <b>dataSource</b>. */
export declare type Orientation = 'horizontal' | 'vertical';
