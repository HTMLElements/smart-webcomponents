import  {BaseElement, Animation} from "./smart.element"

/**
 Sortable allows you to rearrange a group of html elements.
*/
export interface Sortable extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Enables or disables sorting.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the way a sortable item can be dragged - by dragging the item itself ('item') or by dragging a handle that appears next to the item ('handle').
   * Default value: item
   */
  dragMode?: SortableDragMode;
  /**
   * Sets or gets the the position of the drag handle relative to its respective sortable item. Applicable only when dragMode is 'handle'.
   * Default value: right
   */
  handlePosition?: SortableHandlePosition;
  /**
   * Sets or gets whether a sortable item's drag handle is always visible or is shown when the item is hovered. Applicable only when dragMode is 'handle'.
   * Default value: hover
   */
  handleVisibility?: SortableHandleVisibility;
  /**
   * Sets or gets a selector to determine the sortable items by. By default, sortable items are all children of the smart-sortable custom element.
   * Default value: null
   */
  items?: string | null;
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
   *     "propertyInvalidValue": "Invalid ''!",
   *     "propertyInvalidValueType": "Invalid ''!",
   *     "methodInvalidValueType": "Invalid ''!",
   *     "methodInvalidArgumentsCount": "Invalid '' argument(s)!",
   *     "methodInvalidReturnType": "Invalid ''!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": "'.",
   *     "htmlTemplateNotSuported": ": Web Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the direction sortable items are stacked and can be dragged.
   * Default value: vertical
   */
  mode?: Orientation;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /** 
   * This event is triggered when sortable items have been reordered.
	* @param event. The custom event.    */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /**
   * Moves a sortable item from one index to another.
   * @param {number} fromIndex?. The original index of the item.
   * @param {number} toIndex?. The index to move the item to.
   */
  move(fromIndex?: number, toIndex?: number): void;
  /**
   * Re-evaluates the items that can be sorted. Useful after items have been added to or removed from the custom element.
   */
  updateItems(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-sortable"): Sortable;
			querySelector(selectors: "smart-sortable"): Sortable | null;	
			querySelectorAll(selectors: "smart-sortable"): NodeListOf<Sortable>;
			getElementsByTagName(qualifiedName: "smart-sortable"): HTMLCollectionOf<Sortable>;
			getElementsByName(elementName: "smart-sortable"): NodeListOf<Sortable>;	
    }
}

/**Sets or gets the way a sortable item can be dragged - by dragging the item itself ('item') or by dragging a handle that appears next to the item ('handle'). */
export declare type SortableDragMode = 'item' | 'handle';
/**Sets or gets the the position of the drag handle relative to its respective sortable item. Applicable only when dragMode is 'handle'. */
export declare type SortableHandlePosition = 'right' | 'left' | 'top' | 'bottom';
/**Sets or gets whether a sortable item's drag handle is always visible or is shown when the item is hovered. Applicable only when dragMode is 'handle'. */
export declare type SortableHandleVisibility = 'hover' | 'visible';
/**Sets or gets the direction sortable items are stacked and can be dragged. */
export declare type Orientation = 'horizontal' | 'vertical';
