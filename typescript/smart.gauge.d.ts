import  {BaseElement} from "./smart.element"

/**
 Gauge displays an indicator within a range of values.
*/
export interface Gauge extends BaseElement {
  /**
   * Determines the type of gauge's indicator.
   * Default value: needle
   */
  analogDisplayType: "needle" | "fill" | "line";
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation: "none" | "simple" | "advanced";
  /**
   * Sets or gets gauge's animation duration. Applicable only when animation is not 'none'.
   * Default value: 300
   */
  animationDuration: number;
  /**
   * With the coerce property true, the value is set to the nearest value allowed by the interval property. 
   * Default value: false
   */
  coerce: boolean;
  /**
   * Sets or gets whether custom ticks at (possibly) uneven interval will be plotted. The ticks to be plotted are defined with the property customTicks.
   * Default value: false
   */
  customInterval: boolean;
  /**
   * If customInterval is enabled, sets a list of ticks to be plotted. If coerce is set to true, the value will snap to these ticks.
   * Default value: 0,50,100
   */
  customTicks: number[];
  /**
   * Determines the date pattern of the labels when mode is 'date'.
   * Default value: "d"
   */
  dateLabelFormatString: string;
  /**
   * Sets or gets the char to use as the decimal separator in numeric values. 
   * Default value: "".""
   */
  decimalSeparator: string;
  /**
   * Enables or disables the digital display of the element.
   * Default value: false
   */
  digitalDisplay: boolean;
  /**
   * Sets the position of the digital display inside the element.
   * Default value: bottom
   */
  digitalDisplayPosition: "bottom" | "center" | "right" | "top";
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled: boolean;
  /**
   * Callback function which allows rendering of a custom needle. Applicable only to analogDisplayType needle.
   * Default value: null
   */
  drawNeedle: any;
  /**
   * Sets or gets Gauge's end angle. This property specifies the end of the gauge's scale and is measured in degrees.
   * Default value: 210
   */
  endAngle: number;
  /**
   * When cooerce property is true, all values coerce to the interval's value.
   * Default value: 1
   */
  interval: any;
  /**
   * Sets the direction of the gauge. If true - the positions of the gauge's start and end are switched.
   * Default value: false
   */
  inverted: boolean;
  /**
   * A callback function that can be used to format the values displayed inside the gauge labels.
   * Default value: null
   */
  labelFormatFunction: any;
  /**
   * Determines the visibility of the labels inside the element.
   * Default value: all
   */
  labelsVisibility: "all" | "endPoints" | "none";
  /**
   * Sets or gets the locale. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction: any;
  /**
   * Enables or disables the usage of logarithmic scale in the element.
   * Default value: false
   */
  logarithmicScale: boolean;
  /**
   * Determines the maximum value for the scale of the element.
   * Default value: 100
   */
  max: any;
  /**
   * Determines when the value of the element is updated.
   * Default value: switchWhileDragging
   */
  mechanicalAction: "switchUntilReleased" | "switchWhenReleased" | "switchWhileDragging";
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
   *     "significantPrecisionDigits": ": the properties significantDigits and precisionDigits cannot be set at the same time.",
   *     "invalidMinOrMax": " value. Max cannot be lower than Min.",
   *     "noInteger": ": precisionDigits could be set only on \"floatingPoint\" scaleType."
   *   }
   * }
   */
  messages: any;
  /**
   * Determines the minimum value for the scale of the element. 
   * Default value: 0
   */
  min: any;
  /**
   * Determines whether the element works with numbers or dates.
   * Default value: numeric
   */
  mode: "date" | "numeric";
  /**
   * Sets or gets the element's name, which is used as a reference when the data is submitted.
   * Default value: ""
   */
  name: string;
  /**
   * Determines the position of the needle when analogDisplayType is 'needle'. 
   * Default value: center
   */
  needlePosition: "center" | "edge";
  /**
   * Determines the number of digits after the decimal point. Applicable only when scaleType is 'floatingPoint'.
   * Default value: null
   */
  precisionDigits: number;
  /**
   * This property represents an array of objects. Each object is a different range. The range is a colored area with specific size.
   * Default value: 
   */
  ranges: {startValue: number, endValue: number, className: number}[];
  /**
   * When the element is read only the users cannot interact with it.
   * Default value: false
   */
  readonly: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. If enabled, the scale is inverted and the labels and digital display are oriented from right to left.
   * Default value: false
   */
  rightToLeft: boolean;
  /**
   * Determines the position of the scale in the element. 
   * Default value: inside
   */
  scalePosition: "inside" | "outside" | "none";
  /**
   * Determines the type of the gauge's value and scale. 
   * Default value: floatingPoint
   */
  scaleType: "floatingPoint" | "integer";
  /**
   * Enables or disables scientific notation.
   * Default value: false
   */
  scientificNotation: boolean;
  /**
   * This property indicates whether the gauge ranges are visible or not.
   * Default value: false
   */
  showRanges: boolean;
  /**
   * Enables or disables displaying of units.
   * Default value: false
   */
  showUnit: boolean;
  /**
   * Determining how many significant digits are in a number. Applicable only when scaleType is 'integer'.
   * Default value: null
   */
  significantDigits: number | null;
  /**
   * Determines how the Gauge will size.
   * Default value: circle
   */
  sizeMode: "auto" | "circle" | "none";
  /**
   * Sets or gets gauge's start angle. This property specifies the beggining of the gauge's scale and is measured in degrees.
   * Default value: -30
   */
  startAngle: number;
  /**
   * Sets or gets the element's visual theme.
   * Default value: ""
   */
  theme: string;
  /**
   * Determines the position of the ticks in the Gauge.
   * Default value: scale
   */
  ticksPosition: "scale" | "track";
  /**
   * Determines the visibility of the ticks.
   * Default value: minor
   */
  ticksVisibility: "major" | "minor" | "none";
  /**
   * Sets or gets if the element can be focused.
   * Default value: false
   */
  unfocusable: boolean;
  /**
   * Sets or gets the name of unit used for the values on the scale of the element.
   * Default value: "kg"
   */
  unit: string;
  /**
   * Sets the value's validation by min/max.
   * Default value: strict
   */
  validation: "interaction" | "strict";
  /**
   * Sets or gets the value of the element. The value can be a date only when scaleType is 'date'.
   * Default value: 0
   */
  value: string | number | Date;
  /**
   * Sets or gets the word length. Applicable only when scaleType is 'integer'.
   * Default value: int32
   */
  wordLength: "int8" | "int16" | "int32" | "int64" | "uint8" | "uint16" | "uint32" | "uint64";
  /** 
   * This event is triggered when the value of the element is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previous value of the element.
   *  value - The new value of the element.
   */
  onchange: ((this: Window, ev: Event) => any) | null;
  /**
   * Focuses the element.
   */
  focus(): void;
  /**
   * Gets the optimal size of the element (the current width and the height based on the plotted internal elements). 
   * @returns {any}
   */
  getOptimalSize(): any;
  /**
   * Get/set the value of the gauge.
   * @param {string | number | Date} value?. The value to be set. If no parameter is passed, returns the current value of the gauge. The value can be a date only when <b>scaleType</b> is 'date'.
   * @returns {string}
   */
  val(value?: string | number | Date): string;
}

declare global {    
    interface Document {
        createElement(tagName: "smart-gauge"): Gauge;
    }
}

