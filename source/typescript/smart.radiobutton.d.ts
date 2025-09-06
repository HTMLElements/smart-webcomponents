import  {BaseElement, Animation} from "./smart.element"

export interface RadioButtonProperties {
  /**
   * Sets or retrieves the current animation mode. When this property is set to 'none', all animations are disabled for the associated element. Use this property to enable, disable, or adjust the animation behavior as needed.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Sets or retrieves the current checked state of the control. This property allows you to specify whether the control is checked, unchecked, or—if supported—set to an indeterminate state. You can use it to update the visual state of elements like checkboxes or radio buttons, or to query their current status in your application logic.
   * Default value: false
   */
  checked?: boolean;
  /**
   * Sets or retrieves the specific part of the element responsible for toggling its state (such as showing or hiding content). This attribute identifies which internal component or sub-element responds to toggle actions, enabling interactive behavior.
   * Default value: both
   */
  checkMode?: CheckMode | string;
  /**
   * Specifies how the radio button responds to user click events, determining whether the button is selected, toggled, or triggers a specific action when clicked.
   * Default value: release
   */
  clickMode?: ClickMode | string;
  /**
   * Controls whether the ratio button is displayed and functional. When enabled, users can interact with the ratio button; when disabled, the button is hidden or inactive.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves the name of the group to which the widget belongs. This property allows you to organize multiple widgets into logical groups, enabling group-based behavior or styling. When setting this property, the widget is associated with the specified group; when getting, it returns the current group name assigned to the widget.
   * Default value: """"
   */
  groupName?: string;
  /**
   * Gets or sets the HTML content contained within the widget. Setting this property updates the widget’s inner HTML structure, while getting it returns the current HTML markup inside the widget. Use this property to dynamically modify or retrieve the widget’s content.
   * Default value: """"
   */
  innerHTML: string;
  /**
   * Defines or retrieves the unlockKey property, which serves as the credential required to unlock access to the product.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Sets or retrieves the current language code (e.g., "en", "fr", "es") used by the component or application. This property works together with the messages property to determine which set of localized messages or translations should be displayed to the user. Adjusting the language value dynamically updates the displayed content based on the corresponding messages for the selected language.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function associated with the localization module, typically invoked to handle events or updates related to language changes, text translation, or region-specific content within the application.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines an object that maps different password strength states to their corresponding descriptive string values. This allows you to customize the messages shown to users based on the evaluated strength of their password (e.g., "weak," "medium," "strong").
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
   * Gets the current name of the widget or assigns a new name to the widget. The name serves as a unique identifier, which can be used for tracking, referencing, or interacting with the widget programmatically.
   * Default value: """"
   */
  name?: string;
  /**
   * When the custom element is set to readonly, its value cannot be modified by user input or interaction. All form controls within the element will display their current values but will be non-editable, preventing users from changing, adding, or deleting content. However, the element may still support programmatic updates via JavaScript.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Specifies or retrieves a Boolean value that determines whether the element’s content is aligned to accommodate right-to-left (RTL) languages, such as Arabic or Hebrew. When set to true, the element’s layout and text flow are adjusted to support RTL locales and fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the visual theme to be applied. The selected theme controls the overall appearance, including colors, fonts, and styling of the element.
   * Default value: ""
   */
  theme?: string;
  /**
   * When set to true, this property prevents the element from receiving keyboard focus, making it impossible for users to navigate to the element using the Tab key or other focus methods.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets a new value for the widget or retrieves its current value, depending on the context in which the method is called. This allows you to programmatically update the widget's content or access the value entered or selected by the user.
   * Default value: """"
   */
  value?: string;
}
/**
 The Radio Button component lets you add a radio button and assign it to a radio group. Users can select only one radio button at a time within a radio group
*/
export interface RadioButton extends BaseElement, RadioButtonProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the widget’s checked state changes, such as when a user selects (checks) or deselects (unchecks) the widget. It allows you to execute custom logic in response to the user interacting with the widget’s selection control.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, oldValue, changeType)
   *  value - A boolean value indicating the new state of the button ( checked or not ).
   *  oldValue - A boolean value indicating the previous state of the button ( checked or not ).
   *  changeType - A string flag indicating whether the change event was triggered via API or an event.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered whenever the widget's checked state changes from unchecked to checked, indicating that the user has selected or activated the widget. This event is typically used to execute custom logic in response to the widget being checked, such as updating the UI, submitting data, or enabling related features.
	* @param event. The custom event. Custom data event was created with: ev.detail(changeType)
   *  changeType - A string flag indicating whether the change event was triggered via API or an event.
   */
  onCheckValue?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the user deselects or unchecks the widget, indicating a change in its state from checked to unchecked. It allows developers to respond to the action of unchecking, such as updating the user interface or processing form data.
	* @param event. The custom event. Custom data event was created with: ev.detail(changeType)
   *  changeType - A string flag indicating whether the change event was triggered via API or an event.
   */
  onUncheckValue?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
}

declare global {
    interface Document {
        createElement(tagName: "smart-radio-button"): RadioButton;
        querySelector(selectors: "smart-radio-button"): RadioButton | null;
        querySelectorAll(selectors: "smart-radio-button"): NodeListOf<RadioButton>;
        getElementsByTagName(qualifiedName: "smart-radio-button"): HTMLCollectionOf<RadioButton>;
        getElementsByName(elementName: "smart-radio-button"): NodeListOf<RadioButton>;
    }
}

/**Sets or retrieves the specific part of the element responsible for toggling its state (such as showing or hiding content). This attribute identifies which internal component or sub-element responds to toggle actions, enabling interactive behavior. */
export declare type CheckMode = 'both' | 'input' | 'label';
/**Specifies how the radio button responds to user click events, determining whether the button is selected, toggled, or triggers a specific action when clicked. */
export declare type ClickMode = 'hover' | 'press' | 'release' | 'pressAndRelease';
