import  {BaseElement, Animation} from "./smart.element"

/**
 LET Toggle button with Checked boolean value.
*/
export interface Led extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets the check state.
   * Default value: false
   */
  checked?: boolean;
  /**
   * Determines when the element fires a click event.
   * Default value: release
   */
  clickMode?: ClickMode;
  /**
   * Enables or disables the LED.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets the content for the 'false' state.
   * Default value: """"
   */
  falseContent?: string;
  /**
   * Sets custom template for LED's false state.
   * Default value: null
   */
  falseTemplate?: any;
  /**
   * Sets the LED to indeterminate state.
   * Default value: false
   */
  indeterminate?: boolean;
  /**
   * Sets the content for the 'null' state.
   * Default value: """"
   */
  indeterminateContent?: string;
  /**
   * Sets a custom template for LED's indeterminate state.
   * Default value: null
   */
  indeterminateTemplate?: any;
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
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: """"
   */
  name?: string;
  /**
   * If the widgets is readonly, the users cannot iteract with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Sets the shape of LED.
   * Default value: round
   */
  shape?: LedShape;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets the content for the 'true' state.
   * Default value: """"
   */
  trueContent?: string;
  /**
   * Sets custom template for LED's true state.
   * Default value: null
   */
  trueTemplate?: any;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the element's value.
   * Default value: """"
   */
  value?: string;
  /** 
   * This event is triggered when the widget is checked/unchecked.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previous value of the element before it was changed.
   *  value - The new value of the element.
   */
  onChange: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-led"): Led;
			querySelector(selectors: "smart-led"): Led | null;	
			querySelectorAll(selectors: "smart-led"): NodeListOf<Led>;
			getElementsByTagName(qualifiedName: "smart-led"): HTMLCollectionOf<Led>;
			getElementsByName(elementName: "smart-led"): NodeListOf<Led>;	
    }
}

/**Determines when the element fires a click event. */
export declare type ClickMode = 'hover' | 'press' | 'release' | 'pressAndRelease';
/**Sets the shape of LED. */
export declare type LedShape = 'round' | 'square';
