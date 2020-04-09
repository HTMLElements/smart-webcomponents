import  {BaseElement, Animation} from "./smart.element"

/**
 The toast component is like an alert box that is only shown for a couple of seconds when something happens.
*/
export interface Toast extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Specifies the container where new openned toast items will be displayed. The value can be an HTMLElement or element's id. This property is in relation with modal(lower priority than modal) and position(higher priority than position) properties.
   * Default value: null
   */
  appendTo?: any;
  /**
   * Sets or gets whether the toast will automatically close after duration equal to the autoCloseDelay property.
   * Default value: false
   */
  autoClose?: boolean;
  /**
   * Sets or gets the duration after which the toast automatically closes (works only if the autoClose property is set to true).
   * Default value: 3000
   */
  autoCloseDelay?: number;
  /**
   * Sets whether the toast will open automatically immediately after widget's initialization.
   * Default value: false
   */
  autoOpen?: boolean;
  /**
   * The user will not be able to interact with toast items when disabled is set to true.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets custom icon className which overrides the default one. Multiple class names can be applied by separating them with a space. Useful when loading from a third-party icon library (such as Bootstrap).
   * Default value: "null"
   */
  iconClass?: string;
  /**
   * Adds a custom class to Toast items. Multiple class names can be applied by separating them with a space. Useful when styling by using predefined class names from a third-party CSS library (such as Bootstrap).
   * Default value: "null"
   */
  itemClass?: string;
  /**
   * Sets custom item template.
   * Default value: "null"
   */
  itemTemplate?: string;
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * In modal mode the toast item is positioned in the center of the screen. This property is with higher priority than position and appendTo. If modal is set to true these properties are disregarded.
   * Default value: false
   */
  modal?: boolean;
  /**
   * Sets the part of the browser window where the toast will be positioned. The position property is disregarded if appendTo or modal are set.
   * Default value: top-right
   */
  position?: ToastPosition;
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
   * Sets or gets whether to show the toast item's close button.
   * Default value: false
   */
  showCloseButton?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets speciffic CSS settings and icon to the toast items.
   * Default value: info
   */
  type?: ToastType | null;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets a text value to an toast item.
   * Default value: 
   */
  value?: any;
  /** 
   * This event is triggered when the toast item is clicked.
	* @param event. The custom event.    */
  onClick: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the toast item is closed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the toast item is opened.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered on swipebottom over an toast item.
	* @param event. The custom event.    */
  onSwipebottom?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered on swipeleft over an toast item.
	* @param event. The custom event.    */
  onSwipeleft?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered on swiperight over an toast item.
	* @param event. The custom event.    */
  onSwiperight?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered on swipetop over an toast item.
	* @param event. The custom event.    */
  onSwipetop?: ((this: any, ev: Event) => any) | null;
  /**
   * Closes all opened toast items.
   */
  closeAll(): void;
  /**
   * Closes particular toast item.
   * @param {HTMLElement | string} item. The toast item (or its id) to remove.
   */
  closeItem(item: HTMLElement | string): void;
  /**
   * Closes the last opened toast item.
   */
  closeLast(): void;
  /**
   * Opens a new toast item and returns the opened smart-toast-item instance. 
   * @returns {HTMLElement}
   */
  open(): HTMLElement;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-toast"): Toast;
			querySelector(selectors: "smart-toast"): Toast | null;	
			querySelectorAll(selectors: "smart-toast"): NodeListOf<Toast>;
			getElementsByTagName(qualifiedName: "smart-toast"): HTMLCollectionOf<Toast>;
			getElementsByName(elementName: "smart-toast"): NodeListOf<Toast>;	
    }
}

/**Sets the part of the browser window where the toast will be positioned. The position property is disregarded if appendTo or modal are set. */
export declare type ToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
/**Sets speciffic CSS settings and icon to the toast items. */
export declare type ToastType = 'info' | 'warning' | 'success' | 'error' | 'mail' | 'time' | null;
