import  {BaseElement, Animation} from "./smart.element"

export interface CarouselProperties {
  /**
   * Specifies or retrieves the current animation mode. When the property is set to 'none', all animations are disabled. Otherwise, the specified value determines how animations are applied to the element.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * When this property is set to true, items will automatically switch at a default interval. If set to a specific number, it defines the custom timeout duration in milliseconds between each automatic switch. Note: This property only takes effect if the slideShow property is enabled.
   * Default value: false
   */
  autoPlay?: boolean;
  /**
   * This JSON file contains an array of objects, with each object representing a single item. Each item object supports the following properties:  label: A string that specifies the display name or title of the item.  content: A string containing the main textual content or description associated with the item.  image: A string containing the URL of an image that visually represents or is related to the item.  HTMLcontent: A string containing HTML markup to be rendered as part of the item's content. This allows for custom formatting or the inclusion of HTML elements within the item.All properties are optional unless otherwise noted, and can be combined as needed for each item. This structure is designed to provide flexibility for displaying rich, media-enhanced content in dynamic web interfaces.
   * Default value: 
   */
  dataSource?: any[];
  /**
   * Specifies the delay, in milliseconds, before transitioning to the next or previous slide after a navigation button is pressed. Navigation buttons function as repeat buttons: if the button is held down, the slide change operation will automatically repeat at this interval after the initial delay, allowing continuous navigation through the slides.
   * Default value: 200
   */
  delay?: number;
  /**
   * Determines whether the element is interactive and can be used by the user. If enabled, the element is active and accepts input or actions. If disabled, the element is inactive, typically appears visually distinct (e.g., grayed out), and does not respond to user interactions.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * "Disabled the ability for users to navigate to an item by clicking on it when displayMode is set to 3d. By default, users can click on non-active items to navigate to them, but this behavior is now prevented in 3d mode."
   * Default value: false
   */
  disableItemClick?: boolean;
  /**
   * Specifies how the content is visually presented to the user by selecting the appropriate display mode (e.g., fullscreen, minimal-ui, standalone, or browser). This controls the appearance and user interface elements shown when the application or page is loaded.
   * Default value: default
   */
  displayMode?: CarouselDisplayMode | string;
  /**
   * Conceals the navigation buttons from the user interface, making them invisible and inaccessible to the user.
   * Default value: false
   */
  hideArrows?: boolean;
  /**
   * Hides the slide indicator panel, which visually displays the current active item within a slideshow or carousel, helping users identify which slide they are viewing. When enabled, this option removes that indicator from view.
   * Default value: false
   */
  hideIndicators?: boolean;
  /**
   * Allows customization of the accordion’s slide indicator panel by specifying a template. This property accepts either a string—representing the ID of an HTMLTemplateElement present in the DOM—or a direct reference to the HTMLTemplateElement itself. Using this property, you can define a custom appearance and structure for the indicator panel within the accordion component.
   * Default value: null
   */
  indicatorTemplate?: any;
  /**
   * Specifies the time interval, in milliseconds, between each automatic slide transition when the slideShow feature is enabled. This value controls how long each slide is displayed before moving to the next one during the slideshow.
   * Default value: 5000
   */
  interval?: number;
  /**
   * This property allows full customization of an item's rendered content. It accepts either a string specifying the ID of an existing HTMLTemplateElement in the DOM, or a direct reference to such an element. The template's content can include property bindings, enabling dynamic data insertion from the associated dataSource. This makes it possible to define complex layouts and bind data-driven values for each item using standard template syntax.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Enables or disables keyboard navigation for the component. When set to true, users can navigate between items using keyboard controls (such as arrow keys). By default, keyboard navigation is disabled, meaning users cannot move between items using the keyboard unless this option is activated.
   * Default value: false
   */
  keyboard?: boolean;
  /**
   * Sets or retrieves the unlockKey, a unique identifier or code required to access or activate the product’s features. This property allows you to assign a new unlock key to enable product functionality or obtain the currently assigned unlock key for verification purposes.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language code (e.g., "en", "fr", "es") used for localization. This property works together with the messages property, determining which set of localized messages or translations should be applied based on the selected language.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this to modify, translate, or adjust message strings before they are delivered to the application, enabling more flexible localization and message presentation.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Controls whether the item list loops continuously, restarting from the first item after reaching the last, or from the last item after reaching the first. If enabled, navigation wraps around instead of stopping at the end or beginning.
   * Default value: false
   */
  loop?: boolean;
  /**
   * Configures or retrieves an object containing localized strings used throughout the widget interface, such as labels, tooltips, and messages. This property works together with the locale property to support multiple languages, allowing developers to provide translations and customize text displayed to users based on their locale settings.
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
   * When an element is set to readonly, users can view its content but cannot modify, edit, or change its value. However, the element may still allow actions such as copying text, but any direct input, selection, or alteration by the user is disabled.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Gets or sets a value that determines whether the element's text alignment and layout are configured for right-to-left (RTL) languages, such as Arabic or Hebrew. This property ensures proper support for locales that use right-to-left reading order.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * When the slideShow property is set to true, the carousel automatically transitions to the next slide without requiring user interaction. The duration between each automatic slide change is determined by the value of the interval property, which specifies the delay in milliseconds between transitions.
   * Default value: false
   */
  slideShow?: boolean;
  /**
   * Allows users to navigate to the previous or next slide by swiping left or right on touch-enabled devices. When this option is enabled, swipe gestures will move between slides. By default, swipe navigation is disabled, so users will not be able to change slides using swipe gestures unless this setting is enabled.
   * Default value: false
   */
  swipe?: boolean;
  /**
   * Specifies the theme to be applied to the element. The theme controls the overall appearance, including colors, fonts, and styles, ensuring a consistent visual design for the element throughout the application.
   * Default value: ""
   */
  theme?: string;
  /**
   * When set to true, this property prevents the element from receiving focus, meaning users will be unable to focus on the element using keyboard navigation (such as the Tab key) or by clicking it.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Enables or disables the ability to navigate between slides using the mouse wheel. When set to true, users can switch slides by scrolling the mouse wheel. By default, this feature is turned off (disabled).
   * Default value: false
   */
  wheel?: boolean;
}
/**
 Carousel is a slideshow component for cycling through elements—images or slides of text
*/
export interface Carousel extends BaseElement, CarouselProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Triggered whenever the currently visible slide in the carousel or slider component changes, indicating that a new slide has entered the viewport and become active. This event occurs both when users navigate manually (e.g., via next/previous buttons or swipe gestures) and when slides change automatically (e.g., through autoplay functionality).
	* @param event. The custom event. Custom data event was created with: ev.detail(index, previousIndex)
   *  index - The index of the new active slide.
   *  previousIndex - The index of the previous slide that was active.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Triggered at the moment when the slide transition begins, indicating that the process of changing from the current slide to the next or previous slide has started. This event allows developers to execute custom actions right as the slide change is initiated, before the transition animation completes.
	* @param event. The custom event. Custom data event was created with: ev.detail(index, previousIndex)
   *  index - The index of the new active slide.
   *  previousIndex - The index of the previous slide that was active.
   */
  onChanging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user performs a leftward swipe gesture within the Carousel component, typically indicating a request to navigate to the next item or slide in the sequence.
	* @param event. The custom event.    */
  onSwipeleft?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user performs a rightward swipe gesture within the Carousel component, typically indicating a request to navigate to the previous item. It allows you to execute custom logic in response to user interactions such as navigating through Carousel slides by swiping right.
	* @param event. The custom event.    */
  onSwiperight?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Advances the presentation by transitioning to the next slide in the sequence, updating the display to show the subsequent slide content.
   */
  next(): void;
  /**
   * Pauses the slideshow when the <strong>slideShow</strong> option is enabled, temporarily stopping the automatic progression of slides until resumed.
   */
  pause(): void;
  /**
   * Initiates the slide show playback when the <strong>slideShow</strong> option is set to <code>true</code>. This will automatically cycle through the slides according to the configured settings.
   */
  play(): void;
  /**
   * Advances the slideshow to display the previous slide in the sequence, allowing users to review content shown earlier.
   */
  prev(): void;
  /**
   * Navigates to a specific slide within the presentation or carousel by using the provided slide index. The index should correspond to the zero-based position of the desired slide.
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

/**Specifies how the content is visually presented to the user by selecting the appropriate display mode (e.g., fullscreen, minimal-ui, standalone, or browser). This controls the appearance and user interface elements shown when the application or page is loaded. */
export declare type CarouselDisplayMode = 'default' | 'multiple' | '3d';
