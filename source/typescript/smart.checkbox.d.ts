import  {BaseElement, Animation} from "./smart.element"

/**
 Checkbox is a component used for allowing a user to make a multiple choice. Broadly used in the forms and surveys.
*/
export interface CheckBox extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets the checked state. 
   * Default value: false
   */
  checked?: boolean;
  /**
   * Determines which part of the element can be used to toggle it.
   * Default value: both
   */
  checkMode?: CheckMode;
  /**
   * Sets the click mode of the checkbox.
   * Default value: release
   */
  clickMode?: ClickMode;
  /**
   * Enables or disables the checkbox. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the elements's innerHTML.
   * Default value: """"
   */
  innerHTML: string;
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
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: """"
   */
  name?: string;
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
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or gets the value of the element.
   * Default value: """"
   */
  value?: string;
  /** 
   * This event is triggered when the widget is checked/unchecked.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, oldValue, changeType)
   *  value - A boolean value indicating the new state of the button ( checked or not ).
   *  oldValue - A boolean value indicating the previous state of the button ( checked or not ).
   *  changeType - A string flag indicating whether the change event was triggered via API or an event.
   */
  onChange: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-check-box"): CheckBox;
			querySelector(selectors: "smart-check-box"): CheckBox | null;	
			querySelectorAll(selectors: "smart-check-box"): NodeListOf<CheckBox>;
			getElementsByTagName(qualifiedName: "smart-check-box"): HTMLCollectionOf<CheckBox>;
			getElementsByName(elementName: "smart-check-box"): NodeListOf<CheckBox>;	
    }
}

/**Determines which part of the element can be used to toggle it. */
export declare type CheckMode = 'both' | 'input' | 'label';
/**Sets the click mode of the checkbox. */
export declare type ClickMode = 'press' | 'release' | 'pressAndRelease';
