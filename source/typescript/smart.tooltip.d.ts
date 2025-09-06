import  {BaseElement, Animation} from "./smart.element"

export interface TooltipProperties {
  /**
   * Allows you to specify or retrieve the current animation mode. Set this property to 'none' to disable all animations. When assigned other valid values, it enables the corresponding animation effects for the element or component.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Specifies the alignment of the tooltip relative to its target element, such as positioning it above, below, to the left, or to the right of the target. This setting controls where the tooltip appears in relation to the element it is associated with.
   * Default value: "center"
   */
  align?: string;
  /**
   * Determines whether the tooltip's arrow is displayed. Setting this property to true will show the arrow pointing to the anchor element, while setting it to false will hide the arrow. This enhances tooltip visibility and contextual association with the target element.
   * Default value: false
   */
  arrow?: boolean;
  /**
   * Specifies the location or alignment of the arrow relative to its parent element, determining where the arrow will appear (such as top, bottom, left, right, or center) within the component or tooltip.
   * Default value: bottom
   */
  arrowDirection?: TooltipArrowDirection | string;
  /**
   * Determines whether the tooltip's arrow is displayed. When set to true, an arrow will appear pointing from the tooltip to its target element; when set to false, the tooltip will be shown without an arrow. This property can be used to customize the visual connection between the tooltip and its anchor element.
   * Default value: 0
   */
  delay?: number;
  /**
   * Controls whether the tooltip is displayed. When enabled, the tooltip appears when users hover over or interact with the associated element. When disabled, the tooltip is hidden and does not appear under any circumstances.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies the horizontal (X) and vertical (Y) offset values, allowing you to adjust the position of an element relative to its original location. The X value shifts the element left or right, while the Y value moves it up or down.
   * Default value: 0,0
   */
  offset?: number[];
  /**
   * Sets or retrieves the unlockKey used to grant access to the product. The unlockKey acts as an authorization token or code required to unlock and enable the product’s features.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language setting. This property determines which set of localized messages from the messages property will be used. Changing this value updates the displayed content to match the selected language.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function associated with the localization module, typically invoked to handle language changes, region-specific formatting, or to update interface text based on the selected locale.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines or retrieves an object containing the localized text strings used within the widget interface. This property allows you to customize the displayed text for different languages or regions, and works together with the language property to support localization and internationalization of the widget's UI elements.
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
   *     "invalidSelector": "' must be a string, an HTMLElement or null.",
   *     "invalidNode": "."
   *   }
   * }
   */
  messages?: any;
  /**
   * Specifies or retrieves the method by which the tooltip is activated, such as on hover, focus, or click events.
   * Default value: hover
   */
  openMode?: TooltipOpenMode | string;
  /**
   * Specifies or retrieves the placement of the tooltip relative to its associated element. This determines where the tooltip appears, such as above, below, to the left, or to the right of the target element.
   * Default value: top
   */
  position?: TooltipPosition | string;
  /**
   * Specifies the HTML element that will act as the trigger for displaying the tooltip. When the user interacts with this element (such as by hovering, focusing, or clicking—depending on configuration), the tooltip will appear.
   * Default value: null
   */
  selector?: string | HTMLElement;
  /**
   * Specifies the theme applied to the element. The theme controls the element’s overall appearance, including colors, fonts, and stylistic details, ensuring a consistent visual presentation throughout the interface.
   * Default value: ""
   */
  theme?: string;
  /**
   * Specifies a custom template for rendering the tooltip content, allowing you to define the layout, styling, and dynamic data displayed within the tooltip.
   * Default value: null
   */
  tooltipTemplate?: any;
  /**
   * When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible through keyboard navigation such as the Tab key.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Gets the current value of the widget or sets a new value for the widget. This property allows you to retrieve the widget's existing value or update it programmatically.
   * Default value: """"
   */
  value?: string;
  /**
   * Controls whether the tooltip is visible or hidden. When set, this property determines if the tooltip is displayed to the user; when accessed, it returns the current visibility status of the tooltip.
   * Default value: false
   */
  visible?: boolean;
}
/**
 Tooltip is an alternate for the html title. It displays a popup with details on hover.
*/
export interface Tooltip extends BaseElement, TooltipProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered immediately when the tooltip becomes visible to the user, indicating that the tooltip has been successfully opened and is now displayed on the screen. This can be used to perform additional actions, such as loading content or tracking analytics, when a tooltip appears.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is dispatched immediately before the tooltip becomes visible to the user. By calling event.preventDefault() within the event handler, you can cancel the tooltip from opening, allowing you to implement custom logic or conditions before the tooltip is displayed.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered immediately after the tooltip has been closed, either by user interaction or programmatically. It signals that the tooltip is no longer visible in the user interface and can be used to perform cleanup operations or update other components in response to the tooltip's dismissal.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /**
   * This event is fired immediately before the tooltip is about to close. It provides an opportunity to perform actions or validations before the tooltip is hidden. By calling event.preventDefault(), you can cancel the closing of the tooltip, keeping it visible until the action is allowed to proceed.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Closes the smart-tooltip component, removing the tooltip from view and disabling any tooltip functionality associated with the target element.
   */
  close(): void;
  /**
   * Displays the smart-tooltip component, providing contextual information or guidance to the user when triggered.
   */
  open(): void;
  /**
   * Enables or disables the smart-tooltip component, controlling whether tooltips are displayed or hidden for the specified elements. This toggle function allows developers to dynamically show or hide helpful tooltip information in the user interface based on user interaction or application state.
   */
  toggle(): void;
  /**
   * Removes all content currently displayed within the Tooltip, restoring it to an empty state and ensuring no text, HTML, or interactive elements remain visible.
   */
  clear(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-tooltip"): Tooltip;
        querySelector(selectors: "smart-tooltip"): Tooltip | null;
        querySelectorAll(selectors: "smart-tooltip"): NodeListOf<Tooltip>;
        getElementsByTagName(qualifiedName: "smart-tooltip"): HTMLCollectionOf<Tooltip>;
        getElementsByName(elementName: "smart-tooltip"): NodeListOf<Tooltip>;
    }
}

/**Specifies the location or alignment of the arrow relative to its parent element, determining where the arrow will appear (such as top, bottom, left, right, or center) within the component or tooltip. */
export declare type TooltipArrowDirection = 'bottom' | 'top' | 'left' | 'right';
/**Specifies or retrieves the method by which the tooltip is activated, such as on hover, focus, or click events. */
export declare type TooltipOpenMode = 'click' | 'focus' | 'hover' | 'manual';
/**Specifies or retrieves the placement of the tooltip relative to its associated element. This determines where the tooltip appears, such as above, below, to the left, or to the right of the target element. */
export declare type TooltipPosition = 'bottom' | 'top' | 'left' | 'right' | 'absolute';
