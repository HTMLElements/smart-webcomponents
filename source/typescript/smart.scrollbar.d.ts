import  {BaseElement, Animation} from "./smart.element"

export interface ScrollBarProperties {
  /**
   * Specifies the current animation mode for the component. You can retrieve the current mode or assign a new one. Setting this property to 'none' disables all animations; other values will enable and determine the type of animation applied.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Determines whether the element is interactive or inactive. When enabled, users can interact with the element as intended. When disabled, the element becomes unresponsive to user input and typically appears visually distinct to indicate its inactive state.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Defines or retrieves the value of the scrollbar's large step increment. This large step value determines how much the scrollbar's position changes when the user clicks in the track area between the scrollbar's thumb (slider) and one of its arrow buttons. When the left mouse button is pressed in this area, the scrollbar advances or retreats by the specified large step amount, enabling quicker navigation through the content compared to single-step arrow button clicks.
   * Default value: 100
   */
  largeStep?: number;
  /**
   * Gets or sets the 'unlockKey' property, which is a unique key used to activate or unlock access to the product’s features or functionality.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language setting. This property determines which language is used for displaying messages, working in conjunction with the messages property to select the appropriate set of localized text based on the specified language code (e.g., "en", "fr", "es").
   * Default value: "en"
   */
  locale?: string;
  /**
   * Invokes a callback function associated with the localization module, typically used to handle events or actions such as language changes, text translations, or updates to localized content within the application.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Specifies or retrieves the maximum scrollable value of the scrollbar, determining the highest position to which the scrollbar thumb can be moved. This value defines the upper limit of the scrollable content range.
   * Default value: 1000
   */
  max?: number;
  /**
   * Specifies or retrieves the type of mechanical action applied to the element. Mechanical action determines the exact moment when the element's value is updated—such as immediately upon interaction, after a confirmation (like releasing a button), or according to specific user actions. This property allows you to control how and when changes to the element’s value are registered and processed within the application.
   * Default value: switchWhileDragging
   */
  mechanicalAction?: DragMechanicalAction | string;
  /**
   * Defines an object containing string values that represent the various states of password strength (e.g., weak, medium, strong). Each key in the object corresponds to a specific strength level, allowing for customized messages or labels based on the user's password strength status.
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
   * Defines or retrieves the lowest possible value that the scrollbar can represent, determining the starting point of the scrollbar's range.
   * Default value: 0
   */
  min?: number;
  /**
   * Specifies or retrieves the orientation of the scrollbar, determining whether it is displayed horizontally or vertically.
   * Default value: horizontal
   */
  orientation?: Orientation | string;
  /**
   * If the element has the readonly attribute, users will be able to see its value but will not be able to modify, edit, or otherwise interact with its contents through input actions. However, the element may still be focusable and its value can be changed programmatically using scripts.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or retrieves a value that specifies whether the element's content alignment is optimized for languages that use right-to-left (RTL) scripts, such as Arabic or Hebrew. When enabled, the element's layout, text direction, and associated styles are adjusted to properly support RTL locales.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Controls the visibility of scrollbar buttons. When set, this property determines whether the scrollbar's increment and decrement buttons (commonly arrow buttons at the ends of the scrollbar) are shown or hidden. It can be used to either display or hide these buttons programmatically, and can also be queried to retrieve the current visibility state.
   * Default value: true
   */
  showButtons?: boolean;
  /**
   * Defines or retrieves the increment by which the scrollbar's value changes when a user clicks on the scrollbar's arrow (stepper) buttons. This value determines how much the scroll position increases or decreases with each button press, allowing for precise control over scrolling granularity.
   * Default value: 10
   */
  step?: number;
  /**
   * Specifies the theme to be applied to the element. The selected theme controls the visual appearance, including colors, typography, and overall styling, ensuring a consistent and cohesive look for the element within the user interface.
   * Default value: ""
   */
  theme?: string;
  /**
   * When set to true, this property prevents the element from receiving keyboard focus, making it unreachable via tab navigation or programmatically using focus methods.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets a new value for the widget or retrieves its current value, depending on how the method is invoked. This allows you to programmatically update the widget's data or access its existing data as needed.
   * Default value: 0
   */
  value?: number;
}
/**
 Scrollbar is a replacement of the default scroll bar with multiple UI Styling options.
*/
export interface ScrollBar extends BaseElement, ScrollBarProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the value of the associated element is modified by the user or programmatically. It occurs immediately after the value has changed, allowing you to perform custom actions in response to the update.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, oldValue, min, max)
   *  value - A numeric value indicating the scroll position.
   *  oldValue - A numeric value indicating the previous scroll position.
   *  min - A numeric value indicating the min scroll position.
   *  max - A numeric value indicating the max scroll position.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Re-renders the element by updating its visual presentation on the screen, ensuring that any recent changes to its properties, styles, or content are accurately reflected in the user interface.
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

/**Specifies or retrieves the type of mechanical action applied to the element. Mechanical action determines the exact moment when the element's value is updated—such as immediately upon interaction, after a confirmation (like releasing a button), or according to specific user actions. This property allows you to control how and when changes to the element’s value are registered and processed within the application. */
export declare type DragMechanicalAction = 'switchUntilReleased' | 'switchWhenReleased' | 'switchWhileDragging';
/**Specifies or retrieves the orientation of the scrollbar, determining whether it is displayed horizontally or vertically. */
export declare type Orientation = 'horizontal' | 'vertical';
