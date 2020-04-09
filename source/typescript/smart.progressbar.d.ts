import  {BaseElement, Animation} from "./smart.element"

/**
 Progress Bar displayed as a circle.
*/
export interface CircularProgressBar extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Enables or disables the element. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * A callback function defining the new format for the label of the Progress Bar.
   * Default value: null
   */
  formatFunction?: any;
  /**
   * Sets the value of the Circular Progress bar to indeterminate state(null) and starts the animation.
   * Default value: false
   */
  indeterminate?: boolean;
  /**
   * Sets the filling direction of the Circular Progress Bar.
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
   * Sets progress bars maximum possible value.
   * Default value: 100
   */
  max?: number;
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
   * Sets progress bars minimum possible value.
   * Default value: 0
   */
  min?: number;
  /**
   * Enables/Disabled the label for the Progress Bar.
   * Default value: false
   */
  showProgressValue?: boolean;
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
   * Sets or gets the value of the progress bar
   * Default value: 0
   */
  value?: number;
  /** 
   * This event is triggered when the value is changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-circular-progress-bar"): CircularProgressBar;
			querySelector(selectors: "smart-circular-progress-bar"): CircularProgressBar | null;	
			querySelectorAll(selectors: "smart-circular-progress-bar"): NodeListOf<CircularProgressBar>;
			getElementsByTagName(qualifiedName: "smart-circular-progress-bar"): HTMLCollectionOf<CircularProgressBar>;
			getElementsByName(elementName: "smart-circular-progress-bar"): NodeListOf<CircularProgressBar>;	
    }
}

/**
 Progress indicators. It can be used to show a user how far along he/she is in a process.
*/
export interface ProgressBar extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Enables or disables the element. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets the value of the Progress bar to indeterminate state(null) and starts the animation.
   * Default value: false
   */
  indeterminate?: boolean;
  /**
   * Sets the filling direction of the Progress Bar.
   * Default value: false
   */
  inverted?: boolean;
  /**
   * A callback function defining the new format for the label of the Progress Bar.
   * Default value: null
   */
  formatFunction?: any;
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
   * Sets progress bars maximum possible value.
   * Default value: 100
   */
  max?: number;
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
   * Sets progress bars minimum possible value.
   * Default value: 0
   */
  min?: number;
  /**
   * Sets the orientation of the progress bar
   * Default value: horizontal
   */
  orientation?: Orientation;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Enables/Disabled the label for the Progress Bar.
   * Default value: false
   */
  showProgressValue?: boolean;
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
   * Sets or gets the value of the progress bar
   * Default value: 0
   */
  value?: number;
  /** 
   * This event is triggered when the value is changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-progress-bar"): ProgressBar;
			querySelector(selectors: "smart-progress-bar"): ProgressBar | null;	
			querySelectorAll(selectors: "smart-progress-bar"): NodeListOf<ProgressBar>;
			getElementsByTagName(qualifiedName: "smart-progress-bar"): HTMLCollectionOf<ProgressBar>;
			getElementsByName(elementName: "smart-progress-bar"): NodeListOf<ProgressBar>;	
    }
}

/**Sets the orientation of the progress bar */
export declare type Orientation = 'horizontal' | 'vertical';
