import  {BaseElement, Animation} from "./smart.element"

/**
 A Switch represents a button with two states, on and off. Switches are most often used on mobile devices to enable and disable options.
*/
export interface SwitchButton extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets the click mode of the switch button. This property is active only when switchMode is 'click'. press - the state of the switch is changed on mousedownrelease - the state of the switch is changed on mouseuppressAndRelease - the state of the switch is changed on mousedown and reverted to the original on mouseup.
   * Default value: release
   */
  clickMode?: ClickMode;
  /**
   * Sets or gets the check state.
   * Default value: false
   */
  checked?: boolean;
  /**
   * Enables or disables the ratio button.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets the text representation of checked=false state.
   * Default value: """"
   */
  falseContent?: string;
  /**
   * Sets custom template about false state.
   * Default value: null
   */
  falseTemplate?: any;
  /**
   * Sets or gets indeterminate state of the switch.
   * Default value: false
   */
  indeterminate?: boolean;
  /**
   * Sets the direction of switchin. If is true - positions of the switch states are changed.
   * Default value: false
   */
  inverted?: boolean;
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the widget's name.
   * Default value: """"
   */
  name?: string;
  /**
   * Sets the orientation of the switch
   * Default value: horizontal
   */
  orientation?: Orientation;
  /**
   * If the custom element is readonly, it cannot be interacted with.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets the text representation of checked=true state.
   * Default value: """"
   */
  trueContent?: string;
  /**
   * Sets custom template about true state.
   * Default value: "null"
   */
  trueTemplate?: string;
  /**
   * Sets the switchMode of the element. default - dragging the thumb or clicking inside the track can change the state of the element. click - clicking inside the track changes the state of the element. drag - dragging the thumb changes the state of the element.none - the state of the element can only be changed via the API
   * Default value: default
   */
  switchMode?: SwitchButtonSwitchMode;
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
   * Sets or gets the widget's value.
   * Default value: """"
   */
  value?: string;
  /** 
   * This event is triggered when the widget is checked/unchecked.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-switch-button"): SwitchButton;
			querySelector(selectors: "smart-switch-button"): SwitchButton | null;	
			querySelectorAll(selectors: "smart-switch-button"): NodeListOf<SwitchButton>;
			getElementsByTagName(qualifiedName: "smart-switch-button"): HTMLCollectionOf<SwitchButton>;
			getElementsByName(elementName: "smart-switch-button"): NodeListOf<SwitchButton>;	
    }
}

/**Sets the click mode of the switch button. This property is active only when switchMode is 'click'. press - the state of the switch is changed on mousedown
release - the state of the switch is changed on mouseup
pressAndRelease - the state of the switch is changed on mousedown and reverted to the original on mouseup.
 */
export declare type ClickMode = 'press' | 'release' | 'pressAndRelease';
/**Sets the orientation of the switch */
export declare type Orientation = 'horizontal' | 'vertical';
/**Sets the switchMode of the element. default - dragging the thumb or clicking inside the track can change the state of the element.
 click - clicking inside the track changes the state of the element.
 drag - dragging the thumb changes the state of the element.
none - the state of the element can only be changed via the API
 */
export declare type SwitchButtonSwitchMode = 'default' | 'click' | 'drag' | 'none';
