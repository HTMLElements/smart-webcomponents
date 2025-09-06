export interface ElementProperties {
  /**
   * Configures or retrieves the current animation mode for the element. When set to 'none', all animations are disabled, resulting in immediate changes without transition effects. Otherwise, valid values enable corresponding animation behaviors during state changes.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Determines whether the accordion component is enabled or disabled. When set to disabled, all interactive elements within the accordion are inactive, preventing user interaction such as expanding or collapsing sections. Disabled sections appear visually distinct to indicate their non-interactive state.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Returns true if the rendering process has successfully completed; otherwise, returns false, indicating that rendering is still in progress or has not started.
   * Default value: false
   */
  isRendered?: boolean;
  /**
   * Sets or retrieves the unlockKey value, a unique identifier or code required to unlock access to the product. This property is used to control and verify access permissions for the product.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Sets or retrieves the current language used for message localization. This property works together with the messages property, allowing you to display content in the selected language by loading the appropriate message translations.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A callback function that allows you to customize the formatting of messages returned by the Localization Module before they are delivered to the user. Use this to apply additional formatting, integrate dynamic content, or adjust message structure based on application requirements.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines or retrieves an object containing all the display strings within the widget that can be localized for different languages. This property works together with the locale property to enable internationalization by allowing you to specify custom strings that will be shown to users based on their selected language or region. Use this option to provide translations or override default interface text in the widget.
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
   *     "accordionItemRequired": "' requires an item from type \"jqx-accordion-item\".",
   *     "indexOutOfBound": "' method.",
   *     "invalidSettings": "' method accepts a string or an object as it's second parameter.",
   *     "noItems": ": No child elements found.",
   *     "overridingProperties": "' property is used by default."
   *   }
   * }
   */
  messages?: any;
  /**
   * Callback function that is executed when the element has been successfully added and attached to the DOM tree. This is typically used to perform setup tasks, initialize event listeners, or trigger actions that require the element to be present in the document.
   * Default value: null
   */
  onAttached?: any;
  /**
   * This callback function is invoked when the element is removed from the DOM, allowing you to handle cleanup operations or perform specific actions in response to the element’s detachment.
   * Default value: null
   */
  onDetached?: any;
  /**
   * Callback function that is invoked after the element has been successfully created and initialized. This allows you to perform custom actions or setup immediately upon the element's creation.
   * Default value: null
   */
  onCreated?: any;
  /**
   * This callback is invoked once, when the element is first added to the DOM. It is an ideal place to perform initial setup tasks, such as initializing properties, setting up event listeners, or rendering initial content.
   * Default value: null
   */
  onReady?: any;
  /**
   * Callback function invoked immediately after the element has been rendered to the DOM. This allows you to perform additional logic or side effects once the rendering is complete.
   * Default value: null
   */
  onRender?: any;
  /**
   * Specifies whether the element is read-only. When set to true, the element cannot be modified or interacted with by users—its value cannot be changed, and input events are disabled. When set to false, the element is fully interactive and users can input or edit its content.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Specifies if the element is displayed automatically upon initialization, or if it requires an explicit call to the render method before it appears in the user interface.
   * Default value: auto
   */
  renderMode?: ElementRenderMode | string;
  /**
   * Specifies or retrieves whether the element's text direction and alignment are set to support right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element's content is displayed in a manner consistent with RTL language conventions.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the theme to be applied, which controls the visual appearance and style of the element, including aspects such as colors, fonts, and overall layout.
   * Default value: ""
   */
  theme?: string;
  /**
   * Specifies whether the element is eligible to receive keyboard focus, allowing users to navigate to it using the Tab key or other keyboard interactions. Setting this property controls if the element can become the active element when focusing.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 BaseElement extending the HTMLElement with localization, on-demand rendering, typed properties, two-way bound properties, property change notifications, lifecycle callbacks, automatic events listen and unlisten.
*/

declare global {
	interface Window {
		Smart: any;
		NG: any;
	}
}

export interface BaseElement extends HTMLElement, ElementProperties {
  /**
   * This event is triggered whenever the dimensions (width or height) of the element change, allowing you to execute custom logic in response to the element being resized. It is useful for implementing responsive layouts or updating content dynamically based on the element's new size.
	* @param event. The custom event.    */
  onResize: ((ev: Event) => any) | null;
  /**
   * This event is triggered whenever a style property that influences the element's layout (such as width, height, margin, padding, or position) is modified. It allows developers to respond whenever layout-related CSS changes occur on the element.
	* @param event. The custom event. Custom data event was created with: ev.detail(styleProperties)
   *  styleProperties - Array with changed style properties.
   */
  onStyleChanged?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Stops monitoring the specified element for changes or events. After calling this function, any previously set watchers or observers for the element will be removed, and no further updates or callbacks will be triggered in response to changes involving this element.
   */
  unwatch(): void;
  /**
   * Displays the specified element on the page by generating its associated HTML and inserting it into the Document Object Model (DOM). This process ensures the element is visible and interactive for users.
   */
  render(): void;
  /**
   * Monitor and detect any changes to property values in real time, enabling responsive updates or triggering specific actions whenever a property's state is modified.
   * @param {any[]} properties. Properties array to watch for changes.
   * @param {any} propertyChangedCallback. function(propertyName: string, oldValue: any, newValue: any)
   */
  watch(properties: any[], propertyChangedCallback: any): void;
  /**
   * Invokes the specified callback function once the rendering process has finished, allowing you to execute additional logic immediately after rendering is complete.
   * @param {any} renderCallback. Callback which is called, when the rendering is completed.
   */
  whenRendered(renderCallback: any): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-element"): Element;
        querySelector(selectors: "smart-element"): Element | null;
        querySelectorAll(selectors: "smart-element"): NodeListOf<Element>;
        getElementsByTagName(qualifiedName: "smart-element"): HTMLCollectionOf<Element>;
        getElementsByName(elementName: "smart-element"): NodeListOf<Element>;
    }
}

/**Configures or retrieves the current animation mode for the element. When set to 'none', all animations are disabled, resulting in immediate changes without transition effects. Otherwise, valid values enable corresponding animation behaviors during state changes. */
export declare type Animation = 'none' | 'simple' | 'advanced';
/**Specifies if the element is displayed automatically upon initialization, or if it requires an explicit call to the render method before it appears in the user interface. */
export declare type ElementRenderMode = 'auto' | 'manual';
