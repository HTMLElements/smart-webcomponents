import  {BaseElement, Animation} from "./smart.element"

export interface RatingProperties {
  /**
   * Gets or sets the animation mode for the component. When this property is set to 'none', all animations are disabled, and transitions will occur instantly without any animated effects. Use this property to enable, disable, or modify the animation behavior as needed.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Prevents any user interaction with the element, making it unresponsive to mouse, keyboard, and touch events such as clicks, focus, or input. The element will appear visually inactive and will not trigger any associated event handlers.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Gets or sets the unlockKey property, which serves as the credential required to unlock and activate the product’s full functionality.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language setting. This property determines which localized set of messages (defined in the messages property) will be used for display and communication. Use this property to dynamically change the language of the interface by updating it in conjunction with the messages object.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A function that allows you to customize how messages are formatted before they are returned by the Localization Module. This callback receives the original message and any associated variables, enabling you to adjust the output format, apply additional logic, or support advanced localization requirements.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Specifies the total number of stars to display in the rating component. This value controls how many individual star icons are shown, allowing users to select a rating between 1 and the specified number.
   * Default value: 
   */
  max?: number;
  /**
   * Specifies or retrieves an object containing the localized strings used by the element. This property allows you to define text labels, messages, or other UI strings that can be translated based on the user's language or region. It is typically used together with the locale property to display the appropriate translations for different locales.
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
   * Specifies the name attribute of the element, which is used as the key when the form data is submitted. This allows the value of the element to be identified and processed on the server side.
   * Default value: ""
   */
  name?: string;
  /**
   * Sets or retrieves a value that specifies whether the element's text direction and alignment are configured for right-to-left (RTL) languages, such as Arabic or Hebrew. Enabling this option ensures that the element properly supports locales that use RTL scripts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the theme to be applied. The selected theme controls the visual appearance, including colors, fonts, and styling, of the element.
   * Default value: ""
   */
  theme?: string;
  /**
   * When set to true, this property prevents the element from receiving keyboard focus, making it impossible for users to navigate to the element using the Tab key or similar methods.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Specifies how many stars should be visually highlighted to indicate the current rating value. This number determines which stars appear filled or active in the rating component.
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
   * This event is triggered whenever the user adjusts the slider to a new value, either by dragging the handle or using keyboard controls. It fires each time the slider's value is updated, allowing you to respond dynamically to user input and capture the current value in real time.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, oldValue)
   *  value - A numeric value indicating the scroll position.
   *  oldValue - A numeric value indicating the previous scroll position.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Retrieve the current value assigned to the rating property, indicating the user's selected rating or the rating score for the item.
   * @returns {number}
   */
  getValue(): number;
  /**
   * Assigns or updates the current rating value. This property determines the selected rating level, typically represented by a numeric value (e.g., 1 to 5), and can be used to display the user’s chosen rating or set a default rating programmatically.
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

