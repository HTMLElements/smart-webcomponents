import  {BaseElement, Animation} from "./smart.element"

export interface ButtonProperties {
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines the click mode for the element.
   * Default value: release
   */
  clickMode?: ClickMode;
  /**
   * Sets the content of the element.
   * Default value: ""
   */
  content?: any;
  /**
   * Enables or disables the button. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets the inner HTML of the element.
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
   * If the custom element is readonly, it cannot be interacted with.
   * Default value: false
   */
  readonly?: boolean;
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
   * Sets or gets the type of the button.
   * Default value: "Reset"
   */
  type?: string;
  /**
   * Sets or gets the button's value. 
   * Default value: ""
   */
  value?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 Buttons allow users to take actions, and make choices, with a single tap. Buttons communicate actions that users can take.
*/
export interface Button extends BaseElement, ButtonProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Click event is triggered regarding to the chosen clickMode.
	* @param event. The custom event.    */
  onClick: ((this: any, ev: Event) => any) | null;
}

declare global {
    interface Document {
        createElement(tagName: "smart-button"): Button;
        querySelector(selectors: "smart-button"): Button | null;
        querySelectorAll(selectors: "smart-button"): NodeListOf<Button>;
        getElementsByTagName(qualifiedName: "smart-button"): HTMLCollectionOf<Button>;
        getElementsByName(elementName: "smart-button"): NodeListOf<Button>;
    }
}

/**Determines the click mode for the element. */
export declare type ClickMode = 'hover' | 'press' | 'release' | 'pressAndRelease';
export interface PowerButtonProperties {
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
   * Sets the click mode of the button.
   * Default value: release
   */
  clickMode?: ClickMode;
  /**
   * Enables or disables the power button.
   * Default value: false
   */
  disabled?: boolean;
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
   * Sets or gets the widget's name.
   * Default value: """"
   */
  name?: string;
  /**
   * If the custom element is readonly, it cannot be interacted with.
   * Default value: false
   */
  readonly?: boolean;
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
}
/**
 PowerButton is On/Off rounded button.
*/
export interface PowerButton extends BaseElement, PowerButtonProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the widget is checked/unchecked.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
}

declare global {
    interface Document {
        createElement(tagName: "smart-power-button"): PowerButton;
        querySelector(selectors: "smart-power-button"): PowerButton | null;
        querySelectorAll(selectors: "smart-power-button"): NodeListOf<PowerButton>;
        getElementsByTagName(qualifiedName: "smart-power-button"): HTMLCollectionOf<PowerButton>;
        getElementsByName(elementName: "smart-power-button"): NodeListOf<PowerButton>;
    }
}

export interface RepeatButtonProperties {
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets the click mode of the button.
   * Default value: release
   */
  clickMode?: ClickMode;
  /**
   * Sets the delay between repeats in miliseconds.
   * Default value: 50
   */
  delay?: number;
  /**
   * Enables or disables the ratio button.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets a delay before the first repeat iteration in miliseconds.
   * Default value: 150
   */
  initialDelay?: number;
  /**
   * Sets the inner HTML of the element.
   * Default value: """"
   */
  innerHTML: string;
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
   * If the custom element is readonly, it cannot be interacted with.
   * Default value: false
   */
  readonly?: boolean;
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
}
/**
 RepatButton provides press-and-hold functionality and it is an ideal UI component for allowing end-users to control an increasing or decreasing value.
*/
export interface RepeatButton extends BaseElement, RepeatButtonProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the element is clicked.
	* @param event. The custom event.    */
  onClick: ((this: any, ev: Event) => any) | null;
}

declare global {
    interface Document {
        createElement(tagName: "smart-repeat-button"): RepeatButton;
        querySelector(selectors: "smart-repeat-button"): RepeatButton | null;
        querySelectorAll(selectors: "smart-repeat-button"): NodeListOf<RepeatButton>;
        getElementsByTagName(qualifiedName: "smart-repeat-button"): HTMLCollectionOf<RepeatButton>;
        getElementsByName(elementName: "smart-repeat-button"): NodeListOf<RepeatButton>;
    }
}

export interface ToggleButtonProperties {
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets the state of the element.
   * Default value: false
   */
  checked?: boolean;
  /**
   * Sets the click mode of the button.
   * Default value: release
   */
  clickMode?: ClickMode;
  /**
   * Enables or disables the ratio button.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets the inner HTML of the element.
   * Default value: """"
   */
  innerHTML: string;
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
   * Sets or gets the widget's name.
   * Default value: """"
   */
  name?: string;
  /**
   * If the custom element is readonly, it cannot be interacted with.
   * Default value: false
   */
  readonly?: boolean;
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
}
/**
 ToggleButton allows the user to change a setting between two states.
*/
export interface ToggleButton extends BaseElement, ToggleButtonProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the widget is checked/unchecked.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, oldValue, changeType)
   *  value - A boolean value indicating the new state of the button ( checked or not ).
   *  oldValue - A boolean value indicating the previous state of the button ( checked or not ).
   *  changeType - A string flag indicating whether the change event was triggered via API or an event.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when the widget is checked.
	* @param event. The custom event. Custom data event was created with: ev.detail(changeType)
   *  changeType - A string flag indicating whether the change event was triggered via API or an event.
   */
  onCheckValue?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the widget is unchecked.
	* @param event. The custom event. Custom data event was created with: ev.detail(changeType)
   *  changeType - A string flag indicating whether the change event was triggered via API or an event.
   */
  onUncheckValue?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
}

declare global {
    interface Document {
        createElement(tagName: "smart-toggle-button"): ToggleButton;
        querySelector(selectors: "smart-toggle-button"): ToggleButton | null;
        querySelectorAll(selectors: "smart-toggle-button"): NodeListOf<ToggleButton>;
        getElementsByTagName(qualifiedName: "smart-toggle-button"): HTMLCollectionOf<ToggleButton>;
        getElementsByName(elementName: "smart-toggle-button"): NodeListOf<ToggleButton>;
    }
}

