import  {BaseElement, Animation} from "./smart.element"

/**
 Carousel is a slideshow component for cycling through elements—images or slides of text
*/
export interface Carousel extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * The items switch automatically if set to true or to a custom number(representing the timeout in milliseconds). This property works if slideShow property is enabled.
   * Default value: false
   */
  autoPlay?: any;
  /**
   * An array of objects. Each object defines an item. The following object properties are available: label - a string representing the label of the item.content - a string representing the content of the itemimage - a string representing a url link to an image.HTMLcontent - a string representing some HTML structure taht will be generated inside the item.
   * Default value: 
   */
  dataSource?: any[];
  /**
   * Specifies the timeout before a slide changes when a navigation button is pressed. Navigation buttons are repeat buttons that will repeat the oepration after the delay is passed.
   * Default value: 200
   */
  delay?: number;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Disabled the possibility to navigated to an item by clicking on item in displayMode 3d. By default users can navigate to items that are not currently active by clicking on them.
   * Default value: false
   */
  disableItemClick?: boolean;
  /**
   * Determines the display mode.
   * Default value: default
   */
  displayMode?: CarouselDisplayMode;
  /**
   * Hides the navigation buttons.
   * Default value: false
   */
  hideArrows?: boolean;
  /**
   * Hides the slide indication panel that shows which item is currently in view (active item).
   * Default value: false
   */
  hideIndicators?: boolean;
  /**
   * Can be used to customize the slide indicator panel of the accordion. The property can be a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference.
   * Default value: null
   */
  indicatorTemplate?: any;
  /**
   * Determines the interval (in milliseconds) between a slide transitions when slideShow is enabled.
   * Default value: 5000
   */
  interval?: number;
  /**
   * Used to completely customize the content of an item. The property can be a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference. The content of the template can contain property bindings that refer to the dataSource.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Activates/deactivates keyboard navigation. By default, items can not be navigated via keyboard
   * Default value: false
   */
  keyboard?: boolean;
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
   * Determines whether the the items should start over when the first or last item is reached.
   * Default value: false
   */
  loop?: boolean;
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
   * When slideShow property is set to true, the carousel changes the active slide automatically with a delay set in interval property.
   * Default value: false
   */
  slideShow?: boolean;
  /**
   * Enables or disables switching to the previous/next slide via swiping left/right. By default swiping is disabled.
   * Default value: false
   */
  swipe?: boolean;
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
   * Activates/deactivates slide navigation via mouse wheel. By default it's disabled.
   * Default value: false
   */
  wheel?: boolean;
  /** 
   * Triggered when the active ( in view ) slide is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(index, previousIndex)
   *  index - The index of the new active slide.
   *  previousIndex - The index of the previous slide that was active.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * Triggered when the process of slide changing starts.
	* @param event. The custom event. Custom data event was created with: ev.detail(index, previousIndex)
   *  index - The index of the new active slide.
   *  previousIndex - The index of the previous slide that was active.
   */
  onChanging?: ((this: any, ev: Event) => any) | null;
  /**
   * Navigates to the next slide.
   */
  next(): void;
  /**
   * Pauses the slide show if <strong>slideShow</strong> is enabled.
   */
  pause(): void;
  /**
   * Starts the slide show if <strong>slideShow</strong> is enabled.
   */
  play(): void;
  /**
   * Navigates to the previous slide.
   */
  prev(): void;
  /**
   * Navigates to a specific slide with the given index.
   * @param {number} index. The index of the target slide.
   */
  slideTo(index: number): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-carousel"): Carousel;
			querySelector(selectors: "smart-carousel"): Carousel | null;	
			querySelectorAll(selectors: "smart-carousel"): NodeListOf<Carousel>;
			getElementsByTagName(qualifiedName: "smart-carousel"): HTMLCollectionOf<Carousel>;
			getElementsByName(elementName: "smart-carousel"): NodeListOf<Carousel>;	
    }
}

/**Determines the display mode. */
export declare type CarouselDisplayMode = 'default' | 'multiple' | '3d';
