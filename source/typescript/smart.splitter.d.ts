import  {BaseElement, Animation} from "./smart.element"

/**
 Splitter is a layout component that supports all important features such as resizing, collapsing, and nesting panels.
*/
export interface Splitter extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines how the items are arranged inside the Splitter. Possible values:   end - all items will fit the size of the Splitter. When inserting a new item the space required for the item to fit will be deducted from it's neighbour. proportional - all items will fit the size of the Splitter. When inserting a new item the space required for it to fit will be the result from the proportional deduction of the size from the rest of the items inside the element. overflow - the items inside the Splitter will not fit it's size. Instead they overflow by taking the exact amount of space they need and a scrollbar is displayed in order to view the content.
   * Default value: proportional
   */
  autoFitMode?: SplitterAutoFitMode;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets splitter's data source.
   * Default value: null
   */
  dataSource?: any;
  /**
   * A getter that returns an array of all Splitter items.
   * Default value: 
   */
  items?: any;
  /**
   * If set the element keeps the same proportions of the items after the whole element has been resized regardless of the size property unit ( pixels or percentages) of the items.
   * Default value: false
   */
  keepProportionsOnResize?: boolean;
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
   *     "htmlTemplateNotSuported": ": Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "invalidIndex": "' method accepts an index of type number.",
   *     "indexOutOfBound": "' method.",
   *     "invalidNode": "' method accepts an object or an array of objects as it's second parameter.",
   *     "invalidSettings": "' method accepts a string or an object as it's second parameter.",
   *     "invalidType": "' must be of type string or number."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets splitter's orientation.
   * Default value: vertical
   */
  orientation?: Orientation;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Determines the resize mode of the splitter. Possible values are:  - None - resizing is disabled.  - Adjacent - only the two adjacent items between the target splitter bar are being affected. This is the default behavior.  - End - only the first item( left or top according to the orientation) of the target Splitter bar and the last item are affected.  Proportional - all of the items positioned in the direction to which the splitter bar is dragged will be affected. For example, when a splitter bar is dragged to the right all the items positioned on it's the right side will be affected. The items will obtain a proportional size corresponding to their current size.
   * Default value: adjacent
   */
  resizeMode?: SplitterResizeMode;
  /**
   * Determines the resize step during reisizing
   * Default value: 5
   */
  resizeStep?: number;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar.
   * Default value: false
   */
  liveResize?: boolean;
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
   * This event is triggered when splitter item is collapsed.
	* @param event. The custom event.    */
  onCollapse?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when splitter item is expanded.
	* @param event. The custom event.    */
  onExpand?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when splitter resizing begins.
	* @param event. The custom event.    */
  onResizeStart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when splitter resizing finishes.
	* @param event. The custom event.    */
  onResizeEnd?: ((this: any, ev: Event) => any) | null;
  /**
   * Appends a new node.
   * @param {Node} node. The node to append
   */
  appendChild<T extends Node>(node: Node): T;
  /**
   * Collapses splitter item.
   * @param {any} item. number indicating the index of the item or an isntance of Smart.SplitterItem
   * @param {boolean} far?. Indicates whether the item should collapse to it's far or near side
   */
  collapse(item: any, far?: boolean): void;
  /**
   * Expands the splitter item if possible (if there's enough space available).
   * @param {any} item. number indicating the index of the item or an isntance of Smart.SplitterItem
   */
  expand(item: any): void;
  /**
   * Hides a splitter bar
   * @param {number} splitterBar. A Smart.SplitterBar instance.
   * @returns {number}
   */
  hideBar(splitterBar: number): number;
  /**
   * Insert a new Splitter item at a given position.
   * @param {number} index. The index at which a new item will be inserted.
   * @param {any} details. An Object or string used as content if the splitter item.
   */
  insert(index: number, details: any): void;
  /**
   * Inserts the specified "smart-splitter-item" node before the reference "smart-splitter-item" node.
   * @param {Node} newNode. The  "smart-splitter-item" node to insert.
   * @param {Node | null} referenceNode?. The "smart-splitter-item" node before which newNode is inserted.
   * @returns {Node}
   */
  insertBefore<T extends Node>(newNode: Node, referenceNode?: Node | null): T;
  /**
   * Locks a splitter item so it's size can't change.
   * @param {number} index. The index of a Splitter Bar or it's instance.
   */
  lockItem(index: number): void;
  /**
   * Locks a splitter bar so it can't be dragged.
   * @param {number} index. The index of a Splitter Bar or it's instance.
   */
  lockBar(index: number): void;
  /**
   * Removes a Splitter item.
   * @param {number} index. An item to be removed.
   */
  removeAt(index: number): void;
  /**
   * Removes all items from the Splitter
   */
  removeAll(): void;
  /**
   * Removes a child "smart-splitter-item" node.
   * @param {Node} node. The "smart-splitter-item" node to remove.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Unhides a Splitter Bar
   * @param {number} splitterBar. An instance of a splitter bar.
   */
  showBar(splitterBar: number): void;
  /**
   * Unlocks a previously locked splitter item.
   * @param {number} item. The index of a Splitter Item or it's instance.
   */
  unlockItem(item: number): void;
  /**
   * Unlocks a previously locked splitter bar.
   * @param {number} item. The index of a Splitter Bar or it's instance.
   */
  unlockBar(item: number): void;
  /**
   * Updates the properties of a Splitter item inside the Splitter.
   * @param {any} item. The index of a Smart.SplitterItem or it's instance.
   * @param {any} settings. An object containing the properties of a Smart.SplitterItem.
   */
  update(item: any, settings: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-splitter"): Splitter;
			querySelector(selectors: "smart-splitter"): Splitter | null;	
			querySelectorAll(selectors: "smart-splitter"): NodeListOf<Splitter>;
			getElementsByTagName(qualifiedName: "smart-splitter"): HTMLCollectionOf<Splitter>;
			getElementsByName(elementName: "smart-splitter"): NodeListOf<Splitter>;	
    }
}

/**Determines how the items are arranged inside the Splitter. <br />Possible values:   end - all items will fit the size of the Splitter. When inserting a new item the space required for the item to fit will be deducted from it's neighbour.
 proportional - all items will fit the size of the Splitter. When inserting a new item the space required for it to fit will be the result from the proportional deduction of the size from the rest of the items inside the element.
 overflow - the items inside the Splitter will not fit it's size. Instead they overflow by taking the exact amount of space they need and a scrollbar is displayed in order to view the content.
 */
export declare type SplitterAutoFitMode = 'end' | 'proportional' | 'overflow';
/**Sets or gets splitter's orientation. */
export declare type Orientation = 'horizontal' | 'vertical';
/**Determines the resize mode of the splitter. Possible values are: </br> - None - resizing is disabled. </br> - Adjacent - only the two adjacent items between the target splitter bar are being affected. This is the default behavior. </br> - End - only the first item( left or top according to the orientation) of the target Splitter bar and the last item are affected. </br> Proportional - all of the items positioned in the direction to which the splitter bar is dragged will be affected. For example, when a splitter bar is dragged to the right all the items positioned on it's the right side will be affected. The items will obtain a proportional size corresponding to their current size. */
export declare type SplitterResizeMode = 'none' | 'adjacent' | 'end' | 'proportional';
/**
 SplitterBar splits two Split panels in a Splitter.
*/
export interface SplitterBar extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Hides the splitter bar.
   */
  hide(): void;
  /**
   * Unhides a splitter bar.
   */
  show(): void;
  /**
   * Locks the splitter bar.
   */
  lock(): void;
  /**
   * Unlocks the splitter bar.
   */
  unlock(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-splitter-bar"): SplitterBar;
			querySelector(selectors: "smart-splitter-bar"): SplitterBar | null;	
			querySelectorAll(selectors: "smart-splitter-bar"): NodeListOf<SplitterBar>;
			getElementsByTagName(qualifiedName: "smart-splitter-bar"): HTMLCollectionOf<SplitterBar>;
			getElementsByName(elementName: "smart-splitter-bar"): NodeListOf<SplitterBar>;	
    }
}

/**
 Splitter Item is a Panel in a Splitter component.
*/
export interface SplitterItem extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines of the item is collapsed or not.
   * Default value: false
   */
  collapsed?: boolean;
  /**
   * Determines of the item can be collapsed. If set to false, the item can't be collapsed
   * Default value: false
   */
  collapsible?: boolean;
  /**
   * Determines the content of the splitter items
   * Default value: 
   */
  content?: any;
  /**
   * Determines of the item can be resized or not.
   * Default value: false
   */
  locked?: boolean;
  /**
   * Determines the max size of the item.
   * Default value: ""
   */
  max?: string;
  /**
   * Determines the min size of the item
   * Default value: ""
   */
  min?: string;
  /**
   * Determines the size of the item.
   * Default value: ""
   */
  size?: string;
  /**
   * Collapses the item.
   * @param {string} far. If set to true the item will collapse to it's far side ( to the right for vertical splitter and down for horizontal)
   */
  collapse(far: string): void;
  /**
   * Expands the item if it's collapsed.
   */
  expand(): void;
  /**
   * Locks the item so it can no longer change it's size.
   */
  lock(): void;
  /**
   * Unlocks a previously locked item.
   */
  unlock(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-splitter-item"): SplitterItem;
			querySelector(selectors: "smart-splitter-item"): SplitterItem | null;	
			querySelectorAll(selectors: "smart-splitter-item"): NodeListOf<SplitterItem>;
			getElementsByTagName(qualifiedName: "smart-splitter-item"): HTMLCollectionOf<SplitterItem>;
			getElementsByName(elementName: "smart-splitter-item"): NodeListOf<SplitterItem>;	
    }
}

