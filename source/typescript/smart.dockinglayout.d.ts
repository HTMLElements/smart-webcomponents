import  {BaseElement, Animation} from "./smart.element"

/**
 DockingLayout enables the creation of complex layouts consisting of panels that can be floated, docked, nested, resized, pinned.
*/
export interface DockingLayout extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * A getter that returns an array of all DockingLayout items that are auto hidden inside the element.
   * Default value: 
   */
  autoHideItems?: any;
  /**
   * Enable/Disable the automatic state loading. There must be a previously saved state of the Layout in order to load it.
   * Default value: false
   */
  autoLoadState?: boolean;
  /**
   * Enable/Disable the automatic state saving. Note: In order to save the state of the element it must have an id.
   * Default value: false
   */
  autoSaveState?: boolean;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * If set to false it will disable the dragging of DockingLayout items. If set items can only be repositioned using the API methods.
   * Default value: true
   */
  draggable: boolean;
  /**
   * If set to false it will disable item floating. This means that if a Window is floated as a result of dragging it will be returned back ot it's original position instead of being floated outside the DockingLayout. Already floated LayoutPanel items will not be affected.
   * Default value: true
   */
  floatable?: boolean;
  /**
   * Hides all splitter bars inside the element.
   * Default value: false
   */
  hideSplitterBars?: boolean;
  /**
   * A getter that returns an array of all DockingLayout items that are docked inside the element.
   * Default value: 
   */
  items?: any;
  /**
   * A getter that returns an array of all DockingLayout items that have been closed.
   * Default value: 
   */
  closedItems?: any;
  /**
   * Determines the structure of the element. This property represents an array of objects that define the hierarchy of the items inside the element and their specific settings. Each object must have a type attribute that defines it's behavior.  Three types of objects are allowed:   LayoutGroup - Represents a group of items (Splitter). Used when the user wants more than one DockingLayout item in a single container.  Properties: orientation - A string value indicating the orientation of the Splitter group. Possible values: 'horizontal', 'vertical'. size - A string | number value indicating the size of the Splitter group. items - An array of LayoutPanel object definitions. resizeMode - A string indicating the resize mode. Possible values: 'none', 'adjacent', 'end', 'proportional'. resizeStep - A nummeric value that determines the step of resizing. liveResize - Determines if splitter resizing happens while dragging or not.   LayoutPanel - Represents a DockingLayout item (TabsWindow). LayoutPanels can have one or many items (TabItem).  Properties:   id - the ID of the LayoutPanel. autoHide - a boolean property that determines if the LayoutPanel is autoHidden. autoHidePosition - determines the autoHide position of the item if 'autoHide' property is set. Possible values: 'top', 'bottom', 'left', 'right'. dropPosition - Determines the possible positions for the item at which a new item can be dropped as a result of dragging. Possible values: 'top', 'bottom', 'left', 'right', 'center', 'header', 'layout-top', 'layout-bottom', 'layout-left', 'layout-right'. Positions with the 'layout' prefix reflect on LayoutPanelItems that are children of the LayoutPanel. label - the Label of the LayoutPanel window. tabPosition - Determines the position of the Tab labels inside the LayoutPanel. layout - determines the DockingLayout owner of the LayoutPanel. Accepts a string indicating the ID of a DockingLayout on the page or a direct reference to it. headerButtons - an Array of strings that define the buttons in the header section of the DockingLayout item. tabCloseButtons - a boolean property that Enables or disables the close buttons inside each Tab item label inside the DockingLayout item. tabOverflow - same as 'overflow' property of jqxTabs. It defines the overflow mode of the labels of the Tab items inside a DockingLayout item.selectionMode - the same as jqxTabs selection modes. Applies to Tab items inside a DockingLayout item. tabResize - the same as 'resize' property of jqxTabs. Allows resizing the Tab labels inside the DockingLayout item. locked - Locks the size of the item and does not allow resizing. max - sets the maximum size of the item. min - sets the minimum size of the item size - sets the size of the item. items - an array of objects. Each object defines the structure of a LayoutPanelItem.   LayoutPanelItem - Represents a LayoutPanel item (TabItem). Properties:  id - the ID of the Tab item. label - a string representing the label of the Tab item. content - represents the content of the Tab item. Can be anything. selected - determines if the item is selected. By default the first added item to the LayoutPanel is automatically selected. disableDrag - a boolean property that disables the dragging of the Tab item.    
   * Default value: 
   */
  layout?: any;
  /**
   * When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar.
   * Default value: false
   */
  liveResize?: boolean;
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
   *     "invalidNode": "' method accepts an instance of JQX.TabsWindow",
   *     "invalidNodeRemove": "' method accepts an instance of JQX.TabsWindow that is a child of the DockingLayout.",
   *     "invalidNodeType": "' requires a \"jqx-tabs-window\" element to be passed as an argument.",
   *     "invalidTargetNode": "' requires an index of an item that is not hidden/closed. Only visible items that are part of the Layout are valid.",
   *     "invalidIndex": "' method accepts an index of type number.",
   *     "noId": "jqxDockingLayout requires an id in order to save/load a state."
   *   }
   * }
   */
  messages?: any;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the resize step during reisizing
   * Default value: 5
   */
  resizeStep?: number;
  /**
   * Determines the snap mode. Two modes are available:   simple - allows dragging of a single tab item inside or outside the layout. A semi-transparent highlighter is used to indicate the possible locations where the dragged item can be dropped. The user has to drop the dragged item inside one of the possible drop zones indicated by the highlighter. advanced - allows dragging of a whole TabsWindow with items or a single tab item. Uses a Visual Studio style feedback that indicates the possible drop locations. The user has to drop the target over one of the icons inside the feedback.   The feedback/highlighter is displayed when the dragging of an item begins. 
   * Default value: advanced
   */
  snapMode?: DockingLayoutSnapMode;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * A getter that returns an array of all DockingLayout items that have been undocked. Undocked items are no more part of the Layout's interal structure but can be inserted by dragging them in.
   * Default value: 
   */
  undockedItems?: any;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when the tab selection is changed. <strong>Note:</strong> Change event may be thrown by other JQX Custom Elements nested inside the Tab items.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a Tab item or a whole Tabs Window item ( DockingLayout item ) is closed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a Tab item/Tabs Window is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an item's position inside the Layout or it's size has been changed. Indicates that a state change has occured.
	* @param event. The custom event.    */
  onStateChange?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when item resizing begins.
	* @param event. The custom event.    */
  onResizeStart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when item resizing finishes.
	* @param event. The custom event.    */
  onResizeEnd?: ((this: any, ev: Event) => any) | null;
  /**
   * Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Bottom position inside the element. This means that the item will be positioned near the bottom side of the layout and it's content will be hidden until the user selects one of it's labels.
   * @param {HTMLElement | number | string} node. The "smart-tabs-window" or "smart-tab-item" node to append
   */
  autoHideBottom(node: HTMLElement | number | string): void;
  /**
   * Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Left position inside the layout. This means that the item will be positioned near the left side of the layout and it's content will be hidden until the user selects one of it's labels.
   * @param {HTMLElement | number | string} node. The "smart-tabs-window" or "smart-tab-item" node to append
   */
  autoHideLeft(node: HTMLElement | number | string): void;
  /**
   * Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Right position inside the layout. This means that the item will be positioned near the right side of the layout and it's content will be hidden until the user selects one of it's labels.
   * @param {HTMLElement | number | string} node. The "smart-tabs-window" or "smart-tab-item" node to append
   */
  autoHideRight(node: HTMLElement | number | string): void;
  /**
   * Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Top position inside the layout. This means that the item will be positioned near the top side of the layout and it's content will be hidden until the user selects one of it's labels.
   * @param {HTMLElement | number | string} node. The "smart-tabs-window" or "smart-tab-item" node to append
   */
  autoHideTop(node: HTMLElement | number | string): void;
  /**
   * Clears the localStorage of any previous cached state of the DockingLayout.
   */
  clearState(): void;
  /**
   * The method will reset an autohidden item to it's normal behavior and re-insert it at a specified position. It can also be used to insert items into the DockingLayout. <strong>Note:</strong> Items inserted via this method are added as a top level items.
   * @param {string | number | Node} node. An autohidden "smart-tabs-window" item instance or a new "smart-tabs-window" instance.
   * @returns {Node}
   */
  dock(node: string | number | Node): Node;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted before the target item which corresponds to the index passed as the first argument to the method.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertBeforeItem(index: number | HTMLElement | string, item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted after the target item which corresponds to the index passed as the first argument to the method.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertAfterItem(index: number | HTMLElement | string, item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's left neighbour horizontally.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertIntoLeft(index: number | HTMLElement | string, item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's right neighbour horizontally.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertIntoRight(index: number | HTMLElement | string, item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's top neighbour vertically.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertIntoTop(index: number | HTMLElement | string, item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's bottom neighbour vertically.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertIntoBottom(index: number | HTMLElement | string, item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the top side inside the Layout.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertLayoutTop(item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the bottom side inside the Layout.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertLayoutBottom(item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the left side inside the Layout.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertLayoutLeft(item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the right inside the Layout.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertLayoutRight(item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted above the target ( at position Top).
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertOutsideTargetGroupTop(index: number | HTMLElement | string, tabsWindow: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted bellow the target ( at position Bottom).
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertOutsideTargetGroupBottom(index: number | HTMLElement | string, tabsWindow: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted before the target ( at position Left).
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertOutsideTargetGroupLeft(index: number | HTMLElement | string, tabsWindow: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted after the target ( at position Right).
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertOutsideTargetGroupRight(index: number | HTMLElement | string, tabsWindow: any): void;
  /**
   * The method returns an array of all autohidden items.
   * @param {string} node?. Determines which auto hidden items to return ( vertical or horizontal ). If not set the method will return all autohidden items. Possible values: 'vertical', 'horizontal'.
   * @returns {any[]}
   */
  getAutoHideItems(node?: string): any[];
  /**
   * The method returns the index of a target item.
   * @param {HTMLElement} node. Returns the index of the target item.
   * @returns {number}
   */
  getIndex(node: HTMLElement): number;
  /**
   * Returns an array of objects representing the current structure of the element. Each object represents a Layout item with it's settings and hierarchy.
   * @param {boolean} noInstances?. Determines if the returned array will contain HTML references or not. When saving to localStorage the resulted array should not contain any HTMLElement references.
   * @returns {any[]}
   */
  getState(noInstances?: boolean): any[];
  /**
   * Returns the Splitter parent of a Layout item
   * @param {HTMLElement} item?. DockingLayout item
   * @returns {HTMLElement}
   */
  getItemGroupElement(item?: HTMLElement): HTMLElement;
  /**
   * Returns a JSON array of objects representing the current structure of the element. Ready to be persisted to LocalStorage.
   * @returns {any[]}
   */
  getJSONStructure(): any[];
  /**
   * Loads a previously saved state of the element. If no state is provided as an argument the method will do a localStorage lookup.
   * @param {any[]} state?. An array of objects that represents a cached state of the DockingLayout. The result of calling the 'saveState' method.
   */
  loadState(state?: any[]): void;
  /**
   * Removes a DockingLayout item (TabsWindow) from the element.
   * @param {number | HTMLElement | string} index. The index of the TabsWindow to remove or a reference to it.
   */
  removeAt(index: number | HTMLElement | string): void;
  /**
   * Removes all items from the element.
   */
  removeAll(): void;
  /**
   * Removes a "smart-tabs-window" node that is a DockingLayout item.
   * @param {Node} node. The "smart-tabs-window" node to remove.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Saves the current state of the DockingLayout to LocalStorage. The state includes the hierarchy and size of the items.
   */
  saveState(): void;
  /**
   * The method undocks/removes an item from the Layout and places it at the same position but it's no more part of the layout. The item becomes an 'outher' item that can be reinserted at any time.
   * @param {string | number | Node} node. A "smart-tabs-window" instance that is part of the DockingLayout.
   */
  undock(node: string | number | Node): void;
  /**
   * Updates a TabsWindow and it's contents.
   * @param {number | HTMLElement | string} index. The index of the TabsWindow to update.
   * @param {any} settings. An object that contains the new settings for the TabsWindow item. Settings object is the same as defining a new TabsWindow with the exception of 'items' array where the items are defined. In order to change the label or content of a Tab item the user has to specify the index of the target tab item.
   */
  update(index: number | HTMLElement | string, settings: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-docking-layout"): DockingLayout;
			querySelector(selectors: "smart-docking-layout"): DockingLayout | null;	
			querySelectorAll(selectors: "smart-docking-layout"): NodeListOf<DockingLayout>;
			getElementsByTagName(qualifiedName: "smart-docking-layout"): HTMLCollectionOf<DockingLayout>;
			getElementsByName(elementName: "smart-docking-layout"): NodeListOf<DockingLayout>;	
    }
}

/**Determines the snap mode. Two modes are available:   simple - allows dragging of a single tab item inside or outside the layout. A semi-transparent highlighter is used to indicate the possible locations where the dragged item can be dropped. The user has to drop the dragged item inside one of the possible drop zones indicated by the highlighter.
 advanced - allows dragging of a whole TabsWindow with items or a single tab item. Uses a Visual Studio style feedback that indicates the possible drop locations. The user has to drop the target over one of the icons inside the feedback.
  <br/> The feedback/highlighter is displayed when the dragging of an item begins.  */
export declare type DockingLayoutSnapMode = 'simple' | 'advanced';
