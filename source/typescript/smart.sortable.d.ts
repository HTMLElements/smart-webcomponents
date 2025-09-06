import  {BaseElement, Animation} from "./smart.element"

export interface SortableProperties {
  /**
   * Defines or retrieves the current animation mode. When this property is set to 'none', all animations are disabled and elements will transition instantly without any animated effects. Use this property to enable, disable, or customize the animation behavior of components.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Controls whether items can be sorted. When enabled, users can rearrange items by sorting them; when disabled, sorting functionality is not available.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines how a sortable item can be dragged within the list. When set to 'item', users can drag the entire item itself to reorder it. When set to 'handle', a specific drag handle is displayed next to each item, and only dragging this handle will reorder the item. This property can be both retrieved (get) and modified (set) to control the user’s drag interaction method.
   * Default value: item
   */
  dragMode?: SortableDragMode | string;
  /**
   * Sets or retrieves the position of the drag handle in relation to its associated sortable item. This property is only applicable when the dragMode option is set to 'handle', meaning that the user can initiate dragging only by interacting with the specified handle within the sortable item. Use this option to define where the handle appears (e.g., 'left', 'right', 'top', or 'bottom') relative to the item, allowing for precise customization of the drag-and-drop interface.
   * Default value: right
   */
  handlePosition?: SortableHandlePosition | string;
  /**
   * Determines whether the drag handle of a sortable item is always visible or only appears when the item is hovered over. This property is applicable only if dragMode is set to 'handle'. Use this setting to control the visibility of the item’s drag handle for user interaction.
   * Default value: hover
   */
  handleVisibility?: SortableHandleVisibility | string;
  /**
   * Specifies or retrieves a CSS selector used to identify which elements within the container are sortable items. By default, all direct child elements of the 'smart-sortable' custom element are considered sortable. You can customize this selector to restrict sortable functionality to specific child elements based on their class, tag, or other attributes.
   * Default value: null
   */
  items?: string | null;
  /**
   * Sets or retrieves the unlockKey, a unique value required to activate or grant access to the product's features. This property enables locking and unlocking the product based on its assigned key.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language code (e.g., 'en', 'fr', 'es'). This property determines which set of localized messages from the messages property will be used for displaying text or content. It ensures the correct language is applied throughout the application's interface.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function associated with the localization module, typically used to handle language or region-specific content updates or responses within the application.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines or retrieves an object containing the localized strings that are displayed in the widget's user interface. This property allows you to customize all text elements for different languages and regions. It should be used together with the locale property to ensure the widget presents the appropriate translations based on the selected locale.
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
   * Sets or retrieves the orientation (horizontal or vertical) in which sortable items are arranged and can be reordered by dragging. This determines whether items are stacked in a row or a column when using the sortable functionality.
   * Default value: vertical
   */
  mode?: Orientation | string;
  /**
   * Gets or sets a value that specifies whether the element's text direction is set to right-to-left (RTL), enabling proper alignment and layout for languages and locales that use right-to-left scripts, such as Arabic or Hebrew.
   * Default value: false
   */
  rightToLeft?: boolean;
}
/**
 Sortable allows you to rearrange a group of html elements.
*/
export interface Sortable extends BaseElement, SortableProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the order of items in a sortable list changes, indicating that one or more items have been repositioned within the list by the user. The event provides details about the updated order, allowing you to respond to changes, such as saving the new arrangement or updating the user interface.
	* @param event. The custom event.    */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /**
   * Relocates a sortable item within a list from its current index to a specified target index, updating the order of items accordingly.
   * @param {number} fromIndex?. The original index of the item.
   * @param {number} toIndex?. The index to move the item to.
   */
  move(fromIndex?: number, toIndex?: number): void;
  /**
   * Recalculates the list of sortable items within the custom element. This method should be called whenever items are dynamically added or removed to ensure that all current items are properly recognized and can be sorted as expected.
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

/**Determines how a sortable item can be dragged within the list. When set to 'item', users can drag the entire item itself to reorder it. When set to 'handle', a specific drag handle is displayed next to each item, and only dragging this handle will reorder the item. This property can be both retrieved (get) and modified (set) to control the user’s drag interaction method. */
export declare type SortableDragMode = 'item' | 'handle';
/**Sets or retrieves the position of the drag handle in relation to its associated sortable item. This property is only applicable when the dragMode option is set to 'handle', meaning that the user can initiate dragging only by interacting with the specified handle within the sortable item. Use this option to define where the handle appears (e.g., 'left', 'right', 'top', or 'bottom') relative to the item, allowing for precise customization of the drag-and-drop interface. */
export declare type SortableHandlePosition = 'right' | 'left' | 'top' | 'bottom';
/**Determines whether the drag handle of a sortable item is always visible or only appears when the item is hovered over. This property is applicable only if dragMode is set to 'handle'. Use this setting to control the visibility of the item’s drag handle for user interaction. */
export declare type SortableHandleVisibility = 'hover' | 'visible';
/**Sets or retrieves the orientation (horizontal or vertical) in which sortable items are arranged and can be reordered by dragging. This determines whether items are stacked in a row or a column when using the sortable functionality. */
export declare type Orientation = 'horizontal' | 'vertical';
