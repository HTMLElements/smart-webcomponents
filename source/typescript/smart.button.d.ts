import  {BaseElement, Animation} from "./smart.element"

export interface ButtonProperties {
  /**
   * Specifies the animation mode for the element. When set to 'none', all animations are disabled. Use this property to enable, disable, or customize the animation behavior as needed. You can get the current animation mode or assign a new value to control how animations are applied.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Specifies how the element responds to user click interactions, such as triggering specific actions, toggling states, or initiating custom event handling based on the selected mode.
   * Default value: release
   */
  clickMode?: ClickMode | string;
  /**
   * Specifies the inner content of the element, such as text, HTML, or child elements, determining what is displayed inside the element on the web page.
   * Default value: ""
   */
  content?: any;
  /**
   * Determines whether the button is interactive. When enabled ('true'), users can click and interact with the button. When disabled ('false'), the button appears inactive and does not respond to user actions.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Updates the contents of the element by setting its inner HTML to the specified value. This replaces all existing child elements and text within the element with the provided HTML markup. Use caution when inserting user-generated content to avoid security risks such as cross-site scripting (XSS).
   * Default value: """"
   */
  innerHTML: string;
  /**
   * Handles the retrieval or assignment of the 'unlockKey', a unique value required to authorize and unlock access to the product's features or content.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies the language code to use for retrieving or displaying messages. When set, it determines which localized message set from the messages property is used. Getting this property returns the current language code. Typically used for enabling multi-language support within the application.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A callback function that allows you to define or modify the formatting of messages returned by the Localization Module. Use this callback to customize how localized messages are structured or displayed before they are delivered to your application.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines or retrieves an object containing localized strings for the widget's user interface. This property allows you to customize text displayed by the widget for different languages and regions, and works in conjunction with the locale property to ensure proper localization.
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
   * Defines or retrieves the name attribute of the element. The name attribute uniquely identifies form elements when submitting data through an HTML form, allowing the server to associate input values with their corresponding fields. This attribute is essential for processing form data correctly.
   * Default value: """"
   */
  name?: string;
  /**
   * If the custom element is set to readonly, users will not be able to modify its value or content through direct interaction (such as typing, selecting, or dragging). However, the element may still be focusable and its value can be changed programmatically via scripts. User-initiated actions that would normally alter its state are disabled.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Gets or sets a value that determines whether the element's alignment supports right-to-left (RTL) text direction, which is typically used by languages such as Arabic or Hebrew. When enabled, the element is properly aligned to display content for RTL locales.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the visual theme applied to the element, which controls its overall appearance, including colors, fonts, and styling. This property allows you to select a predefined look and feel for the element.
   * Default value: ""
   */
  theme?: string;
  /**
   * Specifies or retrieves the button's type attribute, which determines the button's behavior—such as "submit" to submit a form, "reset" to reset form fields, or "button" for a general-purpose clickable button.
   * Default value: "Reset"
   */
  type?: string;
  /**
   * Sets or retrieves the button's value attribute, which typically defines the text displayed on the button or the value submitted when the button is used in a form.
   * Default value: ""
   */
  value?: string;
  /**
   * When set to true, this property prevents the element from receiving keyboard focus, making it impossible for users to select the element using the Tab key or other navigation methods.
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
   * The click event is triggered based on the selected clickMode, meaning the event behavior will vary depending on the current setting of the clickMode property.
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

/**Specifies how the element responds to user click interactions, such as triggering specific actions, toggling states, or initiating custom event handling based on the selected mode. */
export declare type ClickMode = 'hover' | 'press' | 'release' | 'pressAndRelease';
export interface PowerButtonProperties {
  /**
   * Specifies or retrieves the current animation mode for the element. When the property is set to 'none', all animations are disabled and the element will render without any animated transitions or effects. Otherwise, animations will be applied according to the specified mode.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Sets or retrieves the current checked state of the element, indicating whether it is selected, unselected, or in an indeterminate state.
   * Default value: false
   */
  checked?: boolean;
  /**
   * Specifies how the button responds to user clicks, determining the interaction behavior such as whether the action is triggered on mouse press, release, or another click event.
   * Default value: release
   */
  clickMode?: ClickMode | string;
  /**
   * Controls whether the power button is active or inactive. When enabled, the power button is functional and can be used to perform its designated action. When disabled, the power button is unresponsive and cannot be used.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Gets or sets the unlockKey property, a unique string used to authenticate and unlock access to the product’s features or full version. This key must be valid to successfully enable restricted functionality.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies the current language to be used for message localization. This property determines which language's messages are retrieved from the messages property. You can use it to set or get the active language code (e.g., 'en', 'fr', 'es'), ensuring the appropriate localized messages are displayed to users.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function associated with the localization module, typically used to handle language changes, load translations, or update content based on the selected locale.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines or retrieves an object containing the text strings used within the widget, allowing for customization and localization of user interface elements. This property works together with the locale setting to display the widget's labels, messages, and other textual content in the appropriate language. The provided object maps text keys to their localized string values.
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
   * Gets the current name of the widget or sets a new name for the widget. This property allows you to retrieve the widget's identifier or assign a custom name to help distinguish it from other widgets in your application.
   * Default value: """"
   */
  name?: string;
  /**
   * When the custom element is set to readonly, its content cannot be modified by the user either through direct input or interaction with form controls within the element. However, users may still be able to focus, highlight, or copy its content, depending on its implementation. No actions or events that would change the element’s value or state will be permitted.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Specifies the theme to be applied to the element. The selected theme controls the visual style, including colors, fonts, and overall appearance, ensuring a consistent look and feel across the component.
   * Default value: ""
   */
  theme?: string;
  /**
   * If set to true, the element will be excluded from the tab sequence and cannot receive keyboard focus. This means users will not be able to navigate to the element using the Tab key or programmatically set focus to it.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Retrieves the current value of the widget or assigns a new value to it. This property allows you to read the widget's state or update it programmatically.
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
   * This event is triggered whenever the widget's state changes, specifically when it becomes either checked or unchecked. It allows you to handle actions in response to the user selecting or deselecting the widget.
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
   * Gets or sets the animation mode for the element. When this property is set to 'none', all animations are disabled. Otherwise, specifying a different value will enable and control the element’s animation behavior according to the selected mode.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Defines how the button responds to user click interactions, determining whether actions are triggered on mouse press, release, or other specific conditions.
   * Default value: release
   */
  clickMode?: ClickMode | string;
  /**
   * Specifies the amount of time, in milliseconds, to wait between each repeated action or event. This determines how long the system pauses before triggering the repeat again.
   * Default value: 50
   */
  delay?: number;
  /**
   * Controls whether the ratio button is visible and can be interacted with. When enabled, users can use the ratio button; when disabled, the button is hidden or inactive.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies the amount of time, in milliseconds, to wait before starting the first repeat iteration. This delay occurs only before the initial repetition and does not affect subsequent iterations.
   * Default value: 150
   */
  initialDelay?: number;
  /**
   * Assigns the specified HTML markup to the element's inner content, replacing all existing child elements and text. Be cautious when inserting dynamic content to avoid potential security risks such as cross-site scripting (XSS).
   * Default value: """"
   */
  innerHTML: string;
  /**
   * Sets or retrieves the unlockKey used to authorize and enable access to the product. This key is required to unlock product features or functionalities that are otherwise restricted.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language code (e.g., "en", "fr", "es") used for localizing content. This property works together with the messages property to determine which set of translations or text strings to display based on the selected language. Setting this value controls which messages from the messages object are shown to users.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function associated with the localization module, typically invoked to handle language changes, load localized resources, or update interface text based on the selected locale.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines an object containing string values that represent the various states of password strength, such as "weak," "medium," and "strong." Each property in the object corresponds to a specific password strength level, allowing for the customization of messages or labels displayed to users based on the evaluated strength of their password.
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
   * Retrieves the current name of the widget or assigns a new name to the widget. This property allows you to identify and reference the widget programmatically.
   * Default value: """"
   */
  name?: string;
  /**
   * When the custom element is set to "readonly", all user interactions—such as input, edits, or selection—are disabled. The element's content is visible but cannot be modified or interacted with by the user. This ensures that the data remains unchanged while still allowing it to be displayed.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Specifies the visual theme to be applied to the element. The selected theme controls the element’s overall appearance, including colors, fonts, and styling, ensuring a consistent look and feel across the interface.
   * Default value: ""
   */
  theme?: string;
  /**
   * If set to true, the element will be removed from the tab order and cannot receive keyboard focus. This means users will not be able to focus on the element using the keyboard (e.g., by pressing the Tab key), enhancing accessibility control.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets a new value for the widget or retrieves its current value, allowing for both updating and accessing the widget's data.
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
   * This event is triggered each time the user clicks on the specified element. It occurs after a complete click action, which includes both the pressing and releasing of the mouse button (typically the left button) over the element. The event provides access to click-related information, such as the mouse position and any modifier keys pressed during the click.
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
   * Specifies or retrieves the current animation mode for the element. When set to 'none', all animations are disabled, and the element will appear or update instantly without any animated transitions. If a different value is assigned, the element will use the corresponding animation effect during state changes.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Defines or updates the current state of the element, controlling its behavior, appearance, or functionality based on the specified value. This property determines how the element responds to user interactions and can trigger associated changes in the interface or underlying logic.
   * Default value: false
   */
  checked?: boolean;
  /**
   * Specifies how the button responds to user click interactions, determining the trigger conditions for its click event (e.g., on mouse down, on mouse up, or after a complete click).
   * Default value: release
   */
  clickMode?: ClickMode | string;
  /**
   * Determines whether the ratio button is displayed and interactive. Set to true to show and enable the button, or false to hide and disable it.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Assigns the specified HTML markup to the element’s content, replacing all existing child elements and text within the element. This allows dynamic insertion of HTML structure and content inside the targeted element.
   * Default value: """"
   */
  innerHTML: string;
  /**
   * Sets or retrieves the value of the unlockKey, a unique code or token required to authorize and unlock access to the product’s features or functionality.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language setting. This property works together with the messages property to determine which localized messages are displayed. When you set this property, the component selects the appropriate set of messages corresponding to the chosen language.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function associated with the localization module, typically used to handle events or operations such as language changes, text translations, or localization updates within the application.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Sets or retrieves an object containing the text strings displayed in the widget, allowing for easy localization and customization of interface messages. This property works together with the locale property to provide translations and adapt the widget's language to different regions. Use this object to define or override the default text for various UI elements, tooltips, messages, and labels within the widget.
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
   * Gets or assigns the name of the widget. This property allows you to retrieve the current name of the widget or specify a new name for identification and reference purposes within the application.
   * Default value: """"
   */
  name?: string;
  /**
   * If the custom element has the 'readonly' attribute set, its content cannot be modified by the user. However, users may still be able to interact with the element in other ways, such as selecting or copying its content. No input changes or value modifications are permitted while the element is in the readonly state.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Specifies the theme to be applied. The selected theme controls the visual appearance and styling of the element, including colors, fonts, spacing, and other design-related properties.
   * Default value: ""
   */
  theme?: string;
  /**
   * When set to true, the element will be removed from the tab order and cannot receive focus via keyboard or mouse interactions.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Gets the current value of the widget or sets a new value for the widget. Use this property to retrieve what the widget currently holds or to update it programmatically.
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
   * This event is triggered whenever the state of the widget changes—specifically, when the user checks or unchecks the widget. It allows you to respond to any change in the widget’s selection status.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, oldValue, changeType)
   *  value - A boolean value indicating the new state of the button ( checked or not ).
   *  oldValue - A boolean value indicating the previous state of the button ( checked or not ).
   *  changeType - A string flag indicating whether the change event was triggered via API or an event.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered whenever the widget transitions into a checked state, such as when a user selects or activates it. It allows developers to respond to changes in the widget's selection status.
	* @param event. The custom event. Custom data event was created with: ev.detail(changeType)
   *  changeType - A string flag indicating whether the change event was triggered via API or an event.
   */
  onCheckValue?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user deselects or unchecks the widget, typically by clicking or tapping on it. It indicates that the widget has transitioned from a checked or selected state to an unchecked or unselected state. Developers can use this event to execute custom logic or update the application’s interface in response to the change.
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

