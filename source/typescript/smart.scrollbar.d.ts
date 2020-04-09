import  {BaseElement, Animation} from "./smart.element"

/**
 Scrollbar is a replacement of the default scroll bar with multiple UI Styling options.
*/
export interface ScrollBar extends BaseElement {

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
   * Sets or gets the scrollbar's largestep. The value is increased/decreased with this largestep when the user presses the left mouse button in the area between a scrollbar button and thumb.
   * Default value: 100
   */
  largeStep?: number;
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
   * Sets or gets the scrollbar's maximum value.
   * Default value: 1000
   */
  max?: number;
  /**
   * Sets or gets the type of used mechanical action. The mechanical action defines in which moment the value of the element will be updated.
   * Default value: switchWhileDragging
   */
  mechanicalAction?: DragMechanicalAction;
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
   * Sets or gets the scrollbar's minimum value.
   * Default value: 0
   */
  min?: number;
  /**
   * Sets or gets the scrollbar's orientation
   * Default value: horizontal
   */
  orientation?: Orientation;
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
   * Sets or gets scrollbar buttons visibility.
   * Default value: true
   */
  showButtons?: boolean;
  /**
   * Sets or gets the scrollbar's step. The value is increased/decreased with this step when the user presses a scrollbar button.
   * Default value: 10
   */
  step?: number;
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
   * Default value: 0
   */
  value?: number;
  /** 
   * This event is triggered when the value is changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Redraws the element.
   */
  refresh(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-scroll-bar"): ScrollBar;
			querySelector(selectors: "smart-scroll-bar"): ScrollBar | null;	
			querySelectorAll(selectors: "smart-scroll-bar"): NodeListOf<ScrollBar>;
			getElementsByTagName(qualifiedName: "smart-scroll-bar"): HTMLCollectionOf<ScrollBar>;
			getElementsByName(elementName: "smart-scroll-bar"): NodeListOf<ScrollBar>;	
    }
}

/**Sets or gets the type of used mechanical action. The mechanical action defines in which moment the value of the element will be updated. */
export declare type DragMechanicalAction = 'switchUntilReleased' | 'switchWhenReleased' | 'switchWhileDragging';
/**Sets or gets the scrollbar's orientation */
export declare type Orientation = 'horizontal' | 'vertical';
