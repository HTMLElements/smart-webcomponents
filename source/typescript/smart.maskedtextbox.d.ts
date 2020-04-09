import  {BaseElement, Animation} from "./smart.element"

/**
 MaskedTextBox uses a mask to control the input of the user.
*/
export interface MaskedTextBox extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines whether promptChar can be entered as valid input by the user.
   * Default value: false
   */
  allowPromptAsInput?: boolean;
  /**
   * Determines whether the input accepts characters only from the ASCII character set.
   * Default value: false
   */
  asciiOnly?: boolean;
  /**
   * Specifies whether the input should be focused when the page is loaded.
   * Default value: false
   */
  autoFocus?: boolean;
  /**
   * Determines whether the mask is shown/hidden on focus/blur even if placeholder is not set.
   * Default value: false
   */
  autoShowMask?: boolean;
  /**
   * Determines whether literals and prompt characters are copied to the clipboard on cut/copy operations.
   * Default value: excludePromptAndLiterals
   */
  cutCopyMaskFormat?: MaskedTextBoxCutCopyMaskFormat;
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
   * Determines whether the prompt character in the input mask is hidden when the masked text box isn't focused anymore.
   * Default value: false
   */
  hidePromptOnLeave?: boolean;
  /**
   * Sets additional helper text below the element. The hint is visible only when the element is focused.
   * Default value: ""
   */
  hint?: string;
  /**
   * Determines whether new user input overwrites the existing input value or not.
   * Default value: false
   */
  isOverwriteMode?: boolean;
  /**
   * Sets label above the element. The label is always visible.
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
   * Defines the mask for the input.
   * Default value: "#####"
   */
  mask?: string;
  /**
   * Indicates whether all required fields of the mask have been populated or not.
   * Default value: false
   */
  maskCompleted?: boolean;
  /**
   * Indicates whether all required and optional fields of the mask have been populated or not.
   * Default value: false
   */
  maskFull?: boolean;
  /**
   * Determines the maximum number of characters that the user can enter.
   * Default value: 5
   */
  maxLength?: number;
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "invalidNode": "."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * A string that appears inside the input when there's no value and mask. 
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Determines the prompt char that is used for the mask of the element.
   * Default value: "_"
   */
  promptChar?: string;
  /**
   * If the element is readonly, the users cannot iteract with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Determines whether the parsing of user input should stop after the first invalid character or not.
   * Default value: false
   */
  rejectInputOnFirstFailure?: boolean;
  /**
   * Specifies that the input must be filled in before submitting a form
   * Default value: false
   */
  required?: boolean;
  /**
   * Determines whether an input character that matches the prompt character should reset the current selected value in the input or not. Applicable only when allowPromptAsInput is enabled.
   * Default value: false
   */
  resetOnPrompt?: boolean;
  /**
   * Determines whether hitting space character resets the currently selected value from the input or not.
   * Default value: false
   */
  resetOnSpace?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies whether the value of the input will be selected on focus or not.
   * Default value: false
   */
  selectAllOnFocus?: boolean;
  /**
   * Determines whether the value of the input should contain or not the prompt/literals of the mask.
   * Default value: excludePromptAndLiterals
   */
  textMaskFormat?: MaskedTextBoxTextMaskFormat;
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
   * Sets or gets the value of the element. 
   * Default value: ""
   */
  value?: string;
  /**
   * Callback function that allows to set custom validation on the value. If the function returns false then the value of the input is treated as not valid.
   * Default value: null
   */
  validation?: any;
  /** 
   * This event is triggered when the value of the Text Box is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, newValue)
   *  oldValue - The previous value before it was changed.
   *  newValue - The new value.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered if the <b>validation</b> property is set. Indicates whether valiation has passed successfully or not.
	* @param event. The custom event. Custom data event was created with: ev.detail(success)
   *  success - A flag inidicating whether the validation was successfull or not.
   */
  onValidation?: ((this: any, ev: Event) => any) | null;
  /**
   * Focuses the element. 
   */
  focus(): void;
  /**
   * Blurs the element. 
   */
  blur(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-masked-text-box"): MaskedTextBox;
			querySelector(selectors: "smart-masked-text-box"): MaskedTextBox | null;	
			querySelectorAll(selectors: "smart-masked-text-box"): NodeListOf<MaskedTextBox>;
			getElementsByTagName(qualifiedName: "smart-masked-text-box"): HTMLCollectionOf<MaskedTextBox>;
			getElementsByName(elementName: "smart-masked-text-box"): NodeListOf<MaskedTextBox>;	
    }
}

/**Determines whether literals and prompt characters are copied to the clipboard on cut/copy operations. */
export declare type MaskedTextBoxCutCopyMaskFormat = 'excludePromptAndLiterals' | 'includePrompt' | 'includeLiterals' | 'includePromptAndLiterals';
/**Specifies the behavior on "Enter" key press. Default mode is "submit". */
export declare type EnterKeyBehavior = 'clearOnSubmit' | 'submit';
/**Determines whether the value of the input should contain or not the prompt/literals of the mask. */
export declare type MaskedTextBoxTextMaskFormat = 'excludePromptAndLiterals' | 'includePrompt' | 'includeLiterals' | 'includePromptAndLiterals';
