import  {BaseElement, Animation} from "./smart.element"

/**
 Breadcrumbs allow users to make selections from a range of values.
*/
export interface Breadcrumb extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Enables or disables the "Add new item" (+) button.
   * Default value: false
   */
  addNewItem?: boolean;
  /**
   * Enables or disables the dragging of breadcrumb items.
   * Default value: false
   */
  allowDrag?: boolean;
  /**
   * Enables or disables the dropping of dragged breadcrumb items.
   * Default value: false
   */
  allowDrop?: boolean;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Show/Hide the close button of breadcrumb items.
   * Default value: false
   */
  closeButtons?: boolean;
  /**
   * Determines the data source to load breadcrumb items from. The Array should contain objects. Each object defines a single breadcrumb item.
   * Default value: []
   */
  dataSource?: {label: string, value: string}[];
  /**
   * Enables or disables the Breadcrumb.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the template of breadcrumb items. The value of this property can be the id of an HTMLTemplateElement or the HTMLTemplateElement itself. If set to null, no template is applied.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines the minimum width of the Breadcrumb at which it will switch from normal to minimized mode. If set to null, the Breadcrumb does not minimize automatically.
   * Default value: null
   */
  minimizeWidth?: number;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when a Breadcrumb item is closed.
	* @param event. The custom event. Custom data event was created with: ev.detail(item)
   *  item - The item that has been closed.
   */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a Breadcrumb item is about to be closed. The closing operation can be canceled by calling <code>event.preventDefault()</code> in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(item)
   *  item - The item that is going to be closed.
   */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a Breadcrumb item is dropped.
	* @param event. The custom event.    */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a Breadcrumb item is being dragged.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, originalEvent, target)
   *  item - The item that is being dragged.
   *  originalEvent - The original event that initiates the dragging operation.
   *  target - The original target.
   */
  onDragging?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the "Add new item" (+) button is clicked.
	* @param event. The custom event.    */
  onAddNewItem?: ((this: any, ev: Event) => any) | null;
  /**
   * Adds an item.
   * @param {any} itemDetails. An Object with the fields "index", "label", and "value".
   */
  addItem(itemDetails: any): void;
  /**
   * Restores the Breadcrumb from minimized state back to normal.
   */
  maximize(): void;
  /**
   * Minimizes the Breadcrumb.
   */
  minimize(): void;
  /**
   * Removes an item.
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

