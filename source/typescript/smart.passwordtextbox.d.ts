import  {BaseElement, Animation} from "./smart.element"

/**
 PasswordTextBox lets the user enter a password with the text hidden.
*/
export interface PasswordTextBox extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Specifies that the element should be focused when the page is loaded.
   * Default value: false
   */
  autoFocus?: boolean;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies the behavior on "Enter" key press. Default mode is "submit".
   * Default value: submit
   */
  enterKeyBehavior?: EnterKeyBehavior;
  /**
   * The form that the element is associated with (its "form owner"). The value of the attribute must be the ID of a form element in the same document.
   * Default value: ""
   */
  form?: string;
  /**
   * Sets additional helper text below the element. Appears only when the element is focused.
   * Default value: null
   */
  hint?: any;
  /**
   * Sets label above the element. The label is displayed above the input and it's always visible.
   * Default value: ""
   */
  label?: string;
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
   * Sets or gets the maximum number of characters that the user can enter.
   * Default value: null
   */
  maxLength?: number;
  /**
   * Sets an object with string values, related to the different states of passwords strength.
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid '!",
   *     "propertyInvalidValueType": "Invalid '!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": ".",
   *     "htmlTemplateNotSuported": ": Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "invalidNode": ".",
   *     "passwordStrength": "Password strength",
   *     "short": "Short",
   *     "weak": "Weak",
   *     "far": "Far",
   *     "good": "Good",
   *     "strong": "Strong",
   *     "showPassword": "Show password"
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the minimum number of characters that the user can enter.
   * Default value: 2
   */
  minLength?: number;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * With this property the user can set a custom callback function that determines the password strength. The returned string from the function determines the how strong the current password is. The string should be one of the following: 'short', 'weak', 'far', 'good', 'strong'.
   * Default value: null
   */
  passwordStrength?: any;
  /**
   * The placeholder text that is displayed when no value is applied to the element. 
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Specifies that the user must fill in a value before submitting a form that contains the element.
   * Default value: false
   */
  required?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies whether the content of the input will be selected on focus.
   * Default value: false
   */
  selectAllOnFocus?: boolean;
  /**
   * Determines whether the password icon is visible.
   * Default value: false
   */
  showPasswordIcon?: boolean;
  /**
   * Determines whether a tooltip which shows the password's strength will be shown.
   * Default value: false
   */
  showPasswordStrength?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Determines whether Tooltip's arrow will be shown or not.
   * Default value: false
   */
  tooltipArrow?: boolean;
  /**
   * Determines the delay before the tooltip appears in miliseconds.
   * Default value: 0
   */
  tooltipDelay?: number;
  /**
   * Determines the position of the tooltip.
   * Default value: top
   */
  tooltipPosition?: PasswordTextBoxTooltipPosition;
  /**
   * Sets a custom template for the content of the tooltip.
   * Default value: "null"
   */
  tooltipTemplate?: string;
  /**
   * If true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the value of the element. 
   * Default value: ""
   */
  value?: string;
  /** 
   * This event is triggered when the value of the element is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previous value of the element before it was changed.
   *  value - The new value of the element.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Focuses the element.
   */
  focus(): void;
  /**
   * The method is used to reset input to it's initial value. 
   */
  reset(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-password-text-box"): PasswordTextBox;
			querySelector(selectors: "smart-password-text-box"): PasswordTextBox | null;	
			querySelectorAll(selectors: "smart-password-text-box"): NodeListOf<PasswordTextBox>;
			getElementsByTagName(qualifiedName: "smart-password-text-box"): HTMLCollectionOf<PasswordTextBox>;
			getElementsByName(elementName: "smart-password-text-box"): NodeListOf<PasswordTextBox>;	
    }
}

/**Specifies the behavior on "Enter" key press. Default mode is "submit". */
export declare type EnterKeyBehavior = 'clearOnSubmit' | 'submit';
/**Determines the position of the tooltip. */
export declare type PasswordTextBoxTooltipPosition = 'absolute' | 'bottom' | 'top' | 'left' | 'right';
