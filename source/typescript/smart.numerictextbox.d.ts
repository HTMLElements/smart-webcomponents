import  {BaseElement, Animation} from "./smart.element"

/**
 input field for entering a number. Includes number formatting for Engineers and Scientists.
*/
export interface NumericTextBox extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets the char to use as the decimal separator in numeric values. 
   * Default value: "."
   */
  decimalSeparator?: string;
  /**
   * Enables or disables the jqxNumericTextBox. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets the parent container of the radix dropdown.
   * Default value: null
   */
  dropDownAppendTo?: any;
  /**
   * Determines if a dropdown will be displayed when the radix display button is clicked. The dropdown shows options for changing to the binary, octal, decimal, and hexadecimal numeral systems.
   * Default value: false
   */
  dropDownEnabled?: boolean;
  /**
   * Enables or disables incrementing/decrementing the value using the mouse wheel in jqxNumericTextBox. 
   * Default value: false
   */
  enableMouseWheelAction?: boolean;
  /**
   * Sets additional helper text below the element. 
   * Default value: ""
   */
  hint?: string;
  /**
   * Sets or gets the input format of the widget. Setting this property dynamically can lead to precision loss. 
   * Default value: integer
   */
  inputFormat?: NumericTextBoxInputFormat;
  /**
   * Sets a label above the element. 
   * Default value: ""
   */
  label?: string;
  /**
   * If this property is enabled, leading zeros are added (if necessary) to the binary and hexadecimal representations of a number based on wordLength.
   * Default value: false
   */
  leadingZeros?: boolean;
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
   * Sets or gets the maximum value of the widget. 
   * Default value: null
   */
  max?: any;
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
   *     "binary": "BIN",
   *     "octal": "OCT",
   *     "decimal": "DEC",
   *     "hexadecimal": "HEX",
   *     "integerOnly": "jqxNumericTextBox: The property  can only be set when inputFormat is integer.",
   *     "noInteger": "jqxNumericTextBox: the property  cannot be set when inputFormat is integer.",
   *     "significantPrecisionDigits": "jqxNumericTextBox: the properties significantDigits and precisionDigits cannot be set at the same time."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the minimum value of the widget. 
   * Default value: null
   */
  min?: any;
  /**
   * The name of the control.
   * Default value: ""
   */
  name?: string;
  /**
   * Enables or disables the setting of the value property to null or empty string. 
   * Default value: false
   */
  nullable?: boolean;
  /**
   * Sets or gets whether the radix dropdown is opened. Applicable only when dropDownEnabled is true. 
   * Default value: false
   */
  opened?: boolean;
  /**
   * Sets or gets the pattern which the input value is displayed in when the element is not focused. All formats available to the NumberRenderer class can be applied as outputFormatString. 
   * Default value: "null"
   */
  outputFormatString?: string;
  /**
   * Determines the widget's place holder displayed when the widget's input is empty. 
   * Default value: """"
   */
  placeholder?: string;
  /**
   * Determines the number of digits after the decimal point. Applicable when inputFormat is either 'floatingPoint' or 'complex'. 
   * Default value: null
   */
  precisionDigits?: number;
  /**
   * Sets or gets the radix of the jqxNumericTextBox. The radix specifies the numeral system in which to display the widget's value. Applicable only when inputFormat is 'integer'. 
   * Default value: 10
   */
  radix?: NumericTextBoxRadix;
  /**
   * Enables or disables the radix display button of the jqxNumericTextBox. Applicable only when inputFormat is 'integer'. 
   * Default value: false
   */
  radixDisplay?: boolean;
  /**
   * Sets or gets the position of the radix display button of the jqxNumericTextBox. 
   * Default value: left
   */
  radixDisplayPosition?: NumericTextBoxDisplayPosition;
  /**
   * Sets or gets the readonly state of the jqxNumericTextBox. 
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Enables or disables outputting the value in scientific notation. Applicable only when inputFormat is 'integer'. 
   * Default value: false
   */
  scientificNotation?: boolean;
  /**
   * Determines whether to show the current value represented in all four numeral systems in the drop down.
   * Default value: false
   */
  showDropDownValues?: boolean;
  /**
   * Enables or disables the visibility of the units. 
   * Default value: false
   */
  showUnit?: boolean;
  /**
   * Determining how many significant digits are in a number. Applicable when inputFormat is either 'floatingPoint' or 'complex'. 
   * Default value: 8
   */
  significantDigits?: number;
  /**
   * Enables or disables the visibility of the spin buttons. 
   * Default value: false
   */
  spinButtons?: boolean;
  /**
   * Sets the delay between repeats of spin buttons in miliseconds. 
   * Default value: 75
   */
  spinButtonsDelay?: number;
  /**
   * Sets a delay before the first repeat iteration of spin buttons in miliseconds. 
   * Default value: 0
   */
  spinButtonsInitialDelay?: number;
  /**
   * Sets or gets the position of the spin buttons of the jqxNumericTextBox. 
   * Default value: right
   */
  spinButtonsPosition?: NumericTextBoxDisplayPosition;
  /**
   * Sets or gets the increase/decrease step. 
   * Default value: 1
   */
  spinButtonsStep?: any;
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
   * Sets or gets the name of unit used in jqxNumericTextBox widget. 
   * Default value: "kg"
   */
  unit?: string;
  /**
   * Sets the value's validation by min/max. If 'strict' is applied, the value is always validated by min and max. If 'interaction' is applied, programmatic value changes are not coerced to min/max and if min/max are changed, resulting in the current value being out of range, the value is not coerced, and no change event is fired.
   * Default value: strict
   */
  validation?: Validation;
  /**
   * Sets or gets the value of the jqxNumericTextBox widget. 
   * Default value: 0
   */
  value?: any;
  /**
   * Sets or gets the word length. Applicable only when inputFormat is 'integer'. If min and/or max are not set by default, they will be set automatically based on the specified word length. 
   * Default value: int32
   */
  wordLength?: WordLength;
  /** 
   * This event is triggered when the value is changed. 
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the value in the input is being changed via keypress or paste. 
	* @param event. The custom event.    */
  onChanging?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the dropdown is closed. 
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the dropdown is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the dropdown is opened. 
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the dropdown is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the radix is changed. 
	* @param event. The custom event.    */
  onRadixChange?: ((this: any, ev: Event) => any) | null;
  /**
   * Focuses the NumericTextBox. 
   */
  focus(): void;
  /**
   * Get/set the value of the NumericTextBox. 
   * @param {string | number} value?. The value to be set. If no parameter is passed, returns the displayed value of the SmartNumericTextBox. 
   * @param {boolean} suppressValidation?. If <em>true</em> is passed, the passed value will be set to the SmartNumericTextBox without validation. 
   * @returns {string}
   */
  val(value?: string | number, suppressValidation?: boolean): string;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-numeric-text-box"): NumericTextBox;
			querySelector(selectors: "smart-numeric-text-box"): NumericTextBox | null;	
			querySelectorAll(selectors: "smart-numeric-text-box"): NodeListOf<NumericTextBox>;
			getElementsByTagName(qualifiedName: "smart-numeric-text-box"): HTMLCollectionOf<NumericTextBox>;
			getElementsByName(elementName: "smart-numeric-text-box"): NodeListOf<NumericTextBox>;	
    }
}

/**Sets or gets the input format of the widget. Setting this property dynamically can lead to precision loss.  */
export declare type NumericTextBoxInputFormat = 'integer' | 'floatingPoint' | 'complex';
/**Sets or gets the radix of the jqxNumericTextBox. The radix specifies the numeral system in which to display the widget's value. Applicable only when inputFormat is 'integer'.  */
export declare type NumericTextBoxRadix = '2' | '8' | '10' | '16' | 'binary' | 'octal' | 'decimal' | 'hexadecimal';
/**Sets or gets the position of the spin buttons of the jqxNumericTextBox.  */
export declare type NumericTextBoxDisplayPosition = 'left' | 'right';
/**Sets the value's validation by min/max. If 'strict' is applied, the value is always validated by min and max. If 'interaction' is applied, programmatic value changes are not coerced to min/max and if min/max are changed, resulting in the current value being out of range, the value is not coerced, and no change event is fired. */
export declare type Validation = 'strict' | 'interaction';
/**Sets or gets the word length. Applicable only when inputFormat is 'integer'. If min and/or max are not set by default, they will be set automatically based on the specified word length.  */
export declare type WordLength = 'int8' | 'uint8' | 'int16' | 'uint16' | 'int32' | 'uint32' | 'int64' | 'uint64';
