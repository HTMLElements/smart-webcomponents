import  {BaseElement, Animation} from "./smart.element"

/**
 Card component with header, footer and content sections.
*/
export interface Card extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * A callback function, used to add event handlers and other custom logic related to the content inside the card element.
   * Default value: null
   */
  contentHandler?: any;
  /**
   * This object is used to populate card's template. Object keys represent the placeholders surrounded in braces ( e.g.  ) inside the template of an item and their values are used to replace the bindings.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Disables the interaction with the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets custom card template. The template can be the id of an HTMLTemplate element inside the DOM or it's reference. The content of the template may hold one or many property placeholders in format . These placeholders will be replaced with the values of the corresponding properties defined in the dataSource object.
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
   *     "htmlTemplateNotSuported": ": Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
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
   * This event is triggered when the card is swiped bottom.
	* @param event. The custom event.    */
  onSwipebottom?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the card is swiped left.
	* @param event. The custom event.    */
  onSwipeleft?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the card is swiped right.
	* @param event. The custom event.    */
  onSwiperight?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the card is swiped top.
	* @param event. The custom event.    */
  onSwipetop?: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-card"): Card;
			querySelector(selectors: "smart-card"): Card | null;	
			querySelectorAll(selectors: "smart-card"): NodeListOf<Card>;
			getElementsByTagName(qualifiedName: "smart-card"): HTMLCollectionOf<Card>;
			getElementsByName(elementName: "smart-card"): NodeListOf<Card>;	
    }
}

