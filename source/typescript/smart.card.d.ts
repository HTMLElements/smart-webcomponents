import  {BaseElement, Animation} from "./smart.element"

export interface CardProperties {
  /**
   * Specifies or retrieves the current animation mode. When this property is set to 'none', all animations are disabled; otherwise, the selected animation mode determines how animations are displayed.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * A callback function that allows you to attach event handlers and implement custom behaviors within the card element. Use this function to interact with or modify the card's content after it has been rendered, such as adding click listeners, updating UI components, or integrating additional logic specific to the card's context.
   * Default value: null
   */
  contentHandler?: any;
  /**
   * This object serves as the data source for populating a card template. Each key corresponds to a placeholder—enclosed in double curly braces within the item's template. The associated values are used to replace these placeholders during rendering, enabling dynamic content injection into the card layout.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Prevents user interactions with the element, such as clicking, typing, or focusing, effectively making the element unresponsive to input events.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies a custom card template for rendering card content. The template can be provided either as a string representing the ID of an '' element present in the DOM, or as a direct reference to an HTMLTemplateElement. Within the template’s HTML content, you may include one or more property placeholders using the double curly braces syntax. During rendering, each placeholder will be dynamically replaced with the corresponding property value from the associated 'dataSource' object. If you set this property using a template ID, the expected type is a string.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Retrieves or assigns the unlockKey used to activate and gain access to the product’s features. This property is typically required for enabling full functionality after purchase or authorization.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language setting. This property determines which set of localized messages, as defined in the messages property, will be used for display. Changing the language updates the interface text to match the corresponding translations in messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A callback function that allows you to define a custom format for localization messages returned by the Localization Module. Use this to modify or structure the message output according to specific requirements, such as adding prefixes, suffixes, or additional context for improved display or processing.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines or retrieves an object containing localized string resources used within the widget's user interface. This enables the widget's labels, messages, and other text elements to be translated and displayed according to the selected language or region, as specified by the locale property. Use this property to provide custom translations and enhance the widget's internationalization support.
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
   * Gets or sets a value that determines whether the element’s alignment supports right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element’s content and layout are adjusted to display text and interface components in a right-to-left direction, ensuring proper localization for RTL locales.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the theme applied to the element. The theme controls the overall visual appearance, including colors, fonts, and styles, to ensure a consistent look and feel across the element.
   * Default value: ""
   */
  theme?: string;
  /**
   * If set to true, the element will be excluded from keyboard navigation and cannot receive focus via user interaction, such as tabbing or clicking.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 Card component with header, footer and content sections.
*/
export interface Card extends BaseElement, CardProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the user swipes the card downward, indicating a bottom swipe gesture on the card component.
	* @param event. The custom event.    */
  onSwipebottom?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the user performs a left swipe gesture on the card, indicating that the card has been dismissed or rejected by swiping it in a leftward direction.
	* @param event. The custom event.    */
  onSwipeleft?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a user performs a right-swipe gesture on the card element, typically indicating a positive action such as approval or selection. It allows you to execute custom logic in response to the card being swiped to the right.
	* @param event. The custom event.    */
  onSwiperight?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user swipes the card upwards (toward the top of the screen), indicating a "swipe up" gesture on the card component.
	* @param event. The custom event.    */
  onSwipetop?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
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

