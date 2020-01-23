
declare global {
    interface Window {
        Smart: any;
		NG: any;
    }
}

export interface BaseElement extends HTMLElement {
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation: "none" | "simple" | "advanced";
  /**
   * Enables or disables the accordion. Disabled elements can not be interacted with.
   * Default value: false
   */
  disabled: boolean;
  /**
   * Returns true when the rendering is completed. Otherwise returns false
   * Default value: false
   */
  isRendered: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction: any;
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
   *     "accordionItemRequired": "' requires an item from type \"smart-accordion-item\".",
   *     "indexOutOfBound": "' method.",
   *     "invalidSettings": "' method accepts a string or an object as it's second parameter.",
   *     "noItems": ": No child elements found.",
   *     "overridingProperties": "' property is used by default."
   *   }
   * }
   */
  messages: any;
  /**
   * Callback called when the element is attached to the DOM.
   * Default value: null
   */
  onAttached: any;
  /**
   * Callback called when the element is detached from the DOM.
   * Default value: null
   */
  onDetached: any;
  /**
   * Callback called when the element is created.
   * Default value: null
   */
  onCreated: any;
  /**
   * Callback called when the element is attached to the DOM for first time. It can be used for property initialization. 
   * Default value: null
   */
  onReady: any;
  /**
   * Callback called when the element is rendered. 
   * Default value: null
   */
  onRender: any;
  /**
   * Determines if the element is readonly or not. If the element true, users cannot interact with it.
   * Default value: false
   */
  readonly: boolean;
  /**
   * Determines whether the element is automatically rendered or is rendered after calling the render method.
   * Default value: auto
   */
  renderMode: "auto" | "manual";
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme: string;
  /**
   * Determines whether the element can be focused or not.
   * Default value: false
   */
  unfocusable: boolean;
  /** 
   * This event is triggered when the element is resized.
   * @param ev. The custom event.    */
  onresize: ((ev: Event) => any) | null;
  /** 
   * This event is triggered when a style which affects the layout of the element is changed is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(styleProperties)
   *  styleProperties - Array with changed style properties.
   */
  onstylechanged: ((this: Window, ev: Event) => any) | null;
  /**
   * Unwatches the element.
   */
  unwatch(): void;
  /**
   * Renders the element.
   */
  render(): void;
  /**
   * Watch for property changes.
   * @param {any[]} properties. Properties array to watch for changes.
   * @param {any} propertyChangedCallback. function(propertyName: string, oldValue: any, newValue: any)
   */
  watch(properties: any[], propertyChangedCallback: any): void;
  /**
   * Notifies with a callback function, when the rendering is completed.
   * @param {any} renderCallback. Callback which is called, when the rendering is completed.
   */
  whenRendered(renderCallback: any): void;
}

declare global {    
    interface Document {
        createElement(tagName: "smart-element"): Element;
    }
}

