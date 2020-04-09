import  {BaseElement, Animation} from "./smart.element"

/**
 Chip is a simple rounded box that displays a single value and optionally an icon.
*/
export interface Chip extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets a custom avatar that is positioned on the left side of the chip. The avatar can be an image(if the value is a url to an image), plain text or HTML.
   * Default value: null
   */
  avatar?: string | null;
  /**
   * Determines whether a close button is displayed on the right side of the element.
   * Default value: false
   */
  closeButton?: boolean;
  /**
   * Enables or disables the element. Disabled elements can not be interacted with.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets a custom template for the chip. The template can be a string that represents the id of an HTMLTemplateElement inside the DOM or it's direct reference.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
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
   *     "htmlTemplateNotSuported": ":  Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
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
   * Sets the text content of the chip. The text inside the chip represents it's value. Value must be of type string. By default it's an empty string.
   * Default value: ""
   */
  value?: string;
  /** 
   * This event is triggered when the chip is closed.
	* @param event. The custom event. Custom data event was created with: ev.detail(value)
   *  value - A string representing the current value of the element.
   */
  onClose: ((this: any, ev: Event) => any) | null;
  /**
   * Closes the chip and removes it from the DOM.
   */
  close(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-chip"): Chip;
			querySelector(selectors: "smart-chip"): Chip | null;	
			querySelectorAll(selectors: "smart-chip"): NodeListOf<Chip>;
			getElementsByTagName(qualifiedName: "smart-chip"): HTMLCollectionOf<Chip>;
			getElementsByName(elementName: "smart-chip"): NodeListOf<Chip>;	
    }
}

