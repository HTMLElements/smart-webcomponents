import  {BaseElement, Animation} from "./smart.element"

export interface RatingProperties {
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Disables the interaction with the element.
   * Default value: false
   */
  disabled?: boolean;
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
   * Determines the number of stars that will be displayed.
   * Default value: 
   */
  max?: number;
  /**
   * Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale. 
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
   * The name of the element. Used when submiting data inside a Form.
   * Default value: ""
   */
  name?: string;
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
   * Determines the number of stars that will be marked as active.
   * Default value: 
   */
  value?: number;
}
/**
 Rating allows you to input a rating. It is broadly used in applications with reviews.
*/
export interface Rating extends BaseElement, RatingProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the value of the slider is changed. 
	* @param event. The custom event. Custom data event was created with: ev.detail(value, oldValue)
   *  value - A numeric value indicating the scroll position.
   *  oldValue - A numeric value indicating the previous scroll position.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Get the value of the rating.
   * @returns {number}
   */
  getValue(): number;
  /**
   * Sets the value of the rating.
   * @param {number} value. Sets the value of the rating
   */
  setValue(value: number): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-rating"): Rating;
        querySelector(selectors: "smart-rating"): Rating | null;
        querySelectorAll(selectors: "smart-rating"): NodeListOf<Rating>;
        getElementsByTagName(qualifiedName: "smart-rating"): HTMLCollectionOf<Rating>;
        getElementsByName(elementName: "smart-rating"): NodeListOf<Rating>;
    }
}

