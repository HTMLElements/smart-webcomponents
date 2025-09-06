import  {BaseElement, Animation} from "./smart.element"

export interface BreadcrumbProperties {
  /**
   * Controls the visibility and functionality of the "Add new item" (+) button. When enabled, users can click the button to create and add new items. When disabled, the button is hidden or inactive, preventing the addition of new items.
   * Default value: false
   */
  addNewItem?: boolean;
  /**
   * Controls whether users can drag and reorder breadcrumb items. When enabled, breadcrumb items become draggable, allowing users to change their order within the breadcrumb navigation. When disabled, breadcrumb items remain static and cannot be moved.
   * Default value: false
   */
  allowDrag?: boolean;
  /**
   * Allows you to control whether users can drop dragged breadcrumb items onto the breadcrumb navigation. When enabled, users can rearrange breadcrumb items by dragging and dropping them; when disabled, dropping is prevented.
   * Default value: false
   */
  allowDrop?: boolean;
  /**
   * Specifies or retrieves the current animation mode. When set to 'none', all animations are disabled. Otherwise, this property determines how animations are applied to the element.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Controls the visibility of the close (remove) button on individual breadcrumb items, allowing users to optionally display or hide the button for removing specific items from the breadcrumb navigation.
   * Default value: false
   */
  closeButtons?: boolean;
  /**
   * Specifies the data source used to populate the breadcrumb items. The data should be provided as an array of objects, where each object represents an individual breadcrumb item with its corresponding properties, such as label, link, and any additional attributes required for display or navigation.
   * Default value: []
   */
  dataSource?: {label: string, value: string}[];
  /**
   * Controls whether the Breadcrumb navigation component is disabled. When enabled, the Breadcrumb provides users with a navigational trail;
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Defines the template used to render each breadcrumb item. This property accepts either the ID of an '' element (as a string) or a reference to an actual 'HTMLTemplateElement'. When specified, the template determines the structure and content of each breadcrumb item. If set to 'null', the default rendering is used and no custom template is applied.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Sets or retrieves the value of the unlockKey property, a unique key required to unlock and access the product's features. Use this property to specify the unlock key when enabling product access, or to obtain the current unlock key associated with the product.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Sets or retrieves the current language code (e.g., "en", "fr", "es") used for localization. This property works together with the messages property to select and display the appropriate translation strings based on the specified language.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Defines or retrieves an object containing all user-facing text strings within the widget that can be localized. This object allows customization of the widget’s displayed text in different languages and works in conjunction with the locale property to support internationalization and localization. Use this property to provide translations for messages, labels, and other interface text in the widget.
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid '!",
   *     "propertyInvalidValueType": "Invalid '!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": ".",
   *     "htmlTemplateNotSuported": ": Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Specifies the minimum width (in pixels) at which the Breadcrumb component transitions from its normal display to a minimized mode. If this value is set to null, the Breadcrumb will always remain in its normal mode and will not automatically minimize, regardless of the container's width.
   * Default value: null
   */
  minimizeWidth?: number;
  /**
   * When set to true, this property prevents the element from receiving keyboard focus or being selected using keyboard navigation (such as with the Tab key). As a result, users will not be able to focus on this element using standard keyboard interactions.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 Breadcrumbs allow users to make selections from a range of values.
*/
export interface Breadcrumb extends BaseElement, BreadcrumbProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever a breadcrumb item is removed or closed by the user—such as when a close icon within a breadcrumb segment is clicked. It can be used to detect and respond to changes in the breadcrumb navigation, allowing you to update application state, UI elements, or perform cleanup tasks as needed.
	* @param event. The custom event. Custom data event was created with: ev.detail(item)
   *  item - The item that has been closed.
   */
  onClose: ((this: any, ev: Event) => any) | null;
  /**
   * This event is fired just before a Breadcrumb item begins the closing process. You can intercept and prevent the item from closing by invoking <code>event.preventDefault()</code> within your event handler. This allows you to add custom logic, such as displaying a confirmation dialog or validating conditions, before the Breadcrumb item is allowed to close.
	* @param event. The custom event. Custom data event was created with: ev.detail(item)
   *  item - The item that is going to be closed.
   */
  onClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a user completes a drag-and-drop operation by dropping a Breadcrumb item into a new position. It signals that the item's placement has changed within the Breadcrumb navigation component and allows you to handle any necessary updates, such as reordering, data changes, or UI feedback.
	* @param event. The custom event.    */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when a user starts dragging a Breadcrumb item, allowing you to handle custom logic during the drag initiation phase. It provides access to the item being dragged and relevant drag event data.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, originalEvent, target)
   *  item - The item that is being dragged.
   *  originalEvent - The original event that initiates the dragging operation.
   *  target - The original target.
   */
  onDragging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the user clicks the "Add new item" (+) button. It typically indicates the user's intent to create or insert a new item into the current list, collection, or data structure. The event can be used to initialize the process for adding a new item, display a relevant input form, or handle any additional logic associated with item creation.
	* @param event. The custom event.    */
  onAddNewItem?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Adds a new item to the collection. The item is appended to the end of the array or list, increasing the total number of items by one. If additional properties (such as item details or metadata) are required, ensure they are included in the request.
   * @param {any} itemDetails. An Object with the fields "index", "label", and "value".
   */
  addItem(itemDetails: any): void;
  /**
   * Restores the Breadcrumb component from its minimized or collapsed state to its full, expanded view, making all breadcrumb navigation links visible to the user.
   */
  maximize(): void;
  /**
   * Collapses the breadcrumb navigation into a minimal or condensed state, reducing its visual footprint on the page while still maintaining navigational functionality. This is typically used to save space or enhance the user interface on smaller screens.
   */
  minimize(): void;
  /**
   * Removes a specified item from the collection. If the item exists, it will be deleted; otherwise, no action is taken.
   * @param {HTMLElement} item. The item to remove.
   */
  removeItem(item: HTMLElement): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-breadcrumb"): Breadcrumb;
        querySelector(selectors: "smart-breadcrumb"): Breadcrumb | null;
        querySelectorAll(selectors: "smart-breadcrumb"): NodeListOf<Breadcrumb>;
        getElementsByTagName(qualifiedName: "smart-breadcrumb"): HTMLCollectionOf<Breadcrumb>;
        getElementsByName(elementName: "smart-breadcrumb"): NodeListOf<Breadcrumb>;
    }
}

