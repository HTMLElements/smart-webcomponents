import  {BaseElement, Animation} from "./smart.element"

export interface LayoutProperties {
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
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
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
   * Determines whether splitting is live or not.
   * Default value: false
   */
  allowLiveSplit?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the selected item.
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
}
/**
 Layout splits your content into resizable sections.
*/
export interface Layout extends BaseElement, LayoutProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered after resizing is completed.
	* @param event. The custom event.    */
  onResize: ((ev: Event) => any) | null;
  /**
   * This event is triggered when a change regarding the Layout's state has occured, such as inserting a new item, removing an item, etc.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, type)
   *  item - The Splitter item that was the target of a change.
   *  type - A description of the operation that has cause the change.
   */
  onStateChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
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
  onClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a the context menu is closed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when a the context menu is about to be opened. The operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a the context menu is opened.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when an option from the context menu has been clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item, label, value)
   *  target - The Splitter item that was the target of the context menu opening.
   *  item - The Context menu item that was clicked.
   *  label - The label of the context menu that was clicked.
   *  value - The value of the context menu that was clicked.
   */
  onMenuItemClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Returns a Layout item according to the index that is passed.
   * @param {number | string} index. The index of an item.
   */
  getItem(index: number | string): void;
  /**
   * Refreshes the Layout
   */
  refresh(): void;
  /**
   * Inserts a new item inside the Layout.
   * @param {any} type. The index of an item to be removed or an instance of Smart.SplitterItem.
   * @param {string | undefined} position?. A string that represents the position where the new item will be created.
   */
  createLayoutItem(type: any, position?: string | undefined): void;
  /**
   * Moves all children from one item to another.
   * @param {any} oldItem. The source item that will have it's content removed.
   * @param {any} newItem. The host item that will have it's content replaced.
   */
  moveChildren(oldItem: any, newItem: any): void;
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
export interface LayoutGroupProperties {
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the modifiers of the Layout item.
   * Default value: resize,drag,close
   */
  modifiers?: any;
  /**
   * Determines the min size of the item.
   * Default value: 50
   */
  min?: number;
  /**
   * Determines the label of the item.
   * Default value: "Group"
   */
  label?: string;
  /**
   * Determines the group orientation.
   * Default value: vertical
   */
  orientation?: LayoutGroupOrientation;
  /**
   * Determines the size of the item.
   * Default value: null
   */
  size?: any;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 LayoutGroup represents a group of layout items inside the Layout.
*/
export interface LayoutGroup extends BaseElement, LayoutGroupProperties {

  /* Get a member by its name */
  [name: string]: any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-layout-group"): LayoutGroup;
        querySelector(selectors: "smart-layout-group"): LayoutGroup | null;
        querySelectorAll(selectors: "smart-layout-group"): NodeListOf<LayoutGroup>;
        getElementsByTagName(qualifiedName: "smart-layout-group"): HTMLCollectionOf<LayoutGroup>;
        getElementsByName(elementName: "smart-layout-group"): NodeListOf<LayoutGroup>;
    }
}

/**Determines the group orientation. */
export declare type LayoutGroupOrientation = 'horizontal' | 'vertical';
export interface LayoutItemProperties {
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the modifiers of the Layout item.
   * Default value: resize,drag,close
   */
  modifiers?: any;
  /**
   * Determines the min size of the item.
   * Default value: 50
   */
  min?: number;
  /**
   * Determines the label of the item.
   * Default value: "Item"
   */
  label?: string;
  /**
   * Determines the size of the item.
   * Default value: null
   */
  size?: any;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 Layout item represents a single content section inside the Layout.
*/
export interface LayoutItem extends BaseElement, LayoutItemProperties {

  /* Get a member by its name */
  [name: string]: any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-layout-item"): LayoutItem;
        querySelector(selectors: "smart-layout-item"): LayoutItem | null;
        querySelectorAll(selectors: "smart-layout-item"): NodeListOf<LayoutItem>;
        getElementsByTagName(qualifiedName: "smart-layout-item"): HTMLCollectionOf<LayoutItem>;
        getElementsByName(elementName: "smart-layout-item"): NodeListOf<LayoutItem>;
    }
}

export interface TabLayoutGroupProperties {
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the modifiers of the Layout item.
   * Default value: resize,drag,close
   */
  modifiers?: any;
  /**
   * Determines the min size of the item.
   * Default value: 50
   */
  min?: number;
  /**
   * Determines the label of the item.
   * Default value: "TabGroup"
   */
  label?: string;
  /**
   * Determines the group orientation.
   * Default value: vertical
   */
  orientation?: TabLayoutGroupOrientation;
  /**
   * Determines the position of the tab items group.
   * Default value: top
   */
  position?: TabLayoutGroupPosition;
  /**
   * Determines the size of the item.
   * Default value: null
   */
  size?: any;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 TabLayoutGroup represents a group of TabLayoutItems each with it's own Tab label.
*/
export interface TabLayoutGroup extends BaseElement, TabLayoutGroupProperties {

  /* Get a member by its name */
  [name: string]: any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-tab-layout-group"): TabLayoutGroup;
        querySelector(selectors: "smart-tab-layout-group"): TabLayoutGroup | null;
        querySelectorAll(selectors: "smart-tab-layout-group"): NodeListOf<TabLayoutGroup>;
        getElementsByTagName(qualifiedName: "smart-tab-layout-group"): HTMLCollectionOf<TabLayoutGroup>;
        getElementsByName(elementName: "smart-tab-layout-group"): NodeListOf<TabLayoutGroup>;
    }
}

/**Determines the group orientation. */
export declare type TabLayoutGroupOrientation = 'horizontal' | 'vertical';
/**Determines the position of the tab items group. */
export declare type TabLayoutGroupPosition = 'top' | 'bottom' | 'left' | 'right';
export interface TabLayoutItemProperties {
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the modifiers of the Layout item.
   * Default value: resize,drag,close
   */
  modifiers?: any;
  /**
   * Determines the min size of the item.
   * Default value: 50
   */
  min?: number;
  /**
   * Determines the label of the item.
   * Default value: "TabItem"
   */
  label?: string;
  /**
   * Determines the group orientation.
   * Default value: vertical
   */
  orientation?: TabLayoutItemOrientation;
  /**
   * Determines the size of the item.
   * Default value: null
   */
  size?: any;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 TabLayoutItem represents a Layout Item that has a Tab label and is applicable to a TabLayoutGroup.
*/
export interface TabLayoutItem extends BaseElement, TabLayoutItemProperties {

  /* Get a member by its name */
  [name: string]: any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-tab-layout-item"): TabLayoutItem;
        querySelector(selectors: "smart-tab-layout-item"): TabLayoutItem | null;
        querySelectorAll(selectors: "smart-tab-layout-item"): NodeListOf<TabLayoutItem>;
        getElementsByTagName(qualifiedName: "smart-tab-layout-item"): HTMLCollectionOf<TabLayoutItem>;
        getElementsByName(elementName: "smart-tab-layout-item"): NodeListOf<TabLayoutItem>;
    }
}

/**Determines the group orientation. */
export declare type TabLayoutItemOrientation = 'horizontal' | 'vertical';
