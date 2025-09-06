import  {BaseElement, Animation} from "./smart.element"

export interface SwitchButtonProperties {
  /**
   * Sets or retrieves the current animation mode. When this property is set to 'none', all animations are disabled. For other valid values, the corresponding animation effects will be enabled according to the specified mode.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Specifies how the switch button responds to user interaction when the switchMode is set to 'click'. This property determines the exact mouse action that triggers a change in the switch’s state:  press – The switch state changes immediately when the mouse button is pressed down (mousedown event).  release – The switch state changes only when the mouse button is released (mouseup event), after a complete click.  pressAndRelease – The switch state changes on mousedown, and automatically reverts to the original state on mouseup.Note: This property is effective only when switchMode is set to 'click'.
   * Default value: release
   */
  clickMode?: ClickMode | string;
  /**
   * Sets the check state to indicate whether the item is checked, unchecked, or indeterminate; or retrieves the current check state of the item.
   * Default value: false
   */
  checked?: boolean;
  /**
   * Controls whether the ratio button is displayed and can be interacted with by the user. Set to true to show and enable the button, or false to hide or disable it.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Defines the text label or string that will be displayed when the checked property is set to false, representing the unchecked state of the component or element.
   * Default value: """"
   */
  falseContent?: string;
  /**
   * Defines a custom template that is displayed when the component is in the false state. This template allows you to specify the content or layout shown when the evaluated condition is false.
   * Default value: null
   */
  falseTemplate?: any;
  /**
   * Controls whether the switch is in an indeterminate state or retrieves its current indeterminate status. When set to true, the switch appears visually distinct to indicate that its state is neither clearly on nor off. This is typically used to represent a partial or mixed selection.
   * Default value: false
   */
  indeterminate?: boolean;
  /**
   * Specifies the direction in which the switch toggles between states. If set to true, the positions of the switch states are inverted, meaning the ON and OFF positions are swapped.
   * Default value: false
   */
  inverted?: boolean;
  /**
   * Retrieves or assigns the unlockKey value, which serves as a credential to enable access to the product’s locked features or functionality.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language code (e.g., 'en', 'fr', 'es'). This property determines which language is used for message localization when working with the messages property. Setting this value ensures the corresponding localized messages are displayed or accessed appropriately.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function associated with the localization module. This callback is invoked whenever localization-related events occur, such as changes in language, region settings, or translation updates. It enables the module to respond dynamically to localization changes in the application.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines an object that maps password strength states (e.g., weak, medium, strong) to their corresponding string values or messages. This allows for customized labels or feedback to be displayed to users based on the evaluated password strength.
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
   * Retrieves the current name of the widget or assigns a new name to the widget. This property can be used to identify or reference the widget programmatically.
   * Default value: """"
   */
  name?: string;
  /**
   * Specifies the layout direction of the switch component, determining whether it is displayed horizontally or vertically. Use this property to control how the switch and its label are arranged within the user interface.
   * Default value: horizontal
   */
  orientation?: Orientation | string;
  /**
   * When the custom element is set to readonly, users will not be able to modify its content or trigger any interactive behaviors such as editing, selecting, or submitting data through the element. However, the element remains visible and its value can still be programmatically accessed or updated by scripts.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Specifies the text label or value that will be displayed when the checked property is set to true. This text represents the state of the component when it is selected or activated.
   * Default value: """"
   */
  trueContent?: string;
  /**
   * Defines a custom template to display when the state is true, allowing you to specify how content should appear in this condition.
   * Default value: "null"
   */
  trueTemplate?: string;
  /**
   * Configures how users can interact with the switch element to change its state. The switchMode property accepts the following options:  default – The switch state can be toggled either by dragging the thumb (the movable part of the switch) or by clicking anywhere within the track (the switch’s background area).  click – The switch state changes only when a user clicks inside the track. Dragging the thumb does not affect the state.  drag – The switch state changes solely by dragging the thumb. Clicking on the track has no effect.  none – The switch cannot be toggled by any user interaction. Its state can only be changed programmatically through the API.
   * Default value: default
   */
  switchMode?: SwitchButtonSwitchMode | string;
  /**
   * Specifies the theme for the element, which controls its overall visual appearance—including colors, fonts, and style. Selecting a theme customizes how the element is presented to users, ensuring consistency with the application's design.
   * Default value: ""
   */
  theme?: string;
  /**
   * When set to true, this property prevents the element from receiving keyboard focus, making it impossible for users to select the element using the Tab key or other keyboard navigation methods.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets a new value for the widget or retrieves its current value. Use this to programmatically update what the widget displays or to access the user's input.
   * Default value: """"
   */
  value?: string;
}
/**
 A Switch represents a button with two states, on and off. Switches are most often used on mobile devices to enable and disable options.
*/
export interface SwitchButton extends BaseElement, SwitchButtonProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the widget's state changes between checked and unchecked, such as when a user selects or deselects it. The event provides updated information about the new checked state of the widget.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, oldValue, changeType)
   *  value - A boolean value indicating the new state of the button ( checked or not ).
   *  oldValue - A boolean value indicating the previous state of the button ( checked or not ).
   *  changeType - A string flag indicating whether the change event was triggered via API or an event.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered whenever the widget transitions to a checked state, such as when a user selects, activates, or toggles the widget to indicate it is checked. It allows developers to execute custom logic in response to changes in the widget's checked status.
	* @param event. The custom event. Custom data event was created with: ev.detail(changeType)
   *  changeType - A string flag indicating whether the change event was triggered via API or an event.
   */
  onCheckValue?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the user unchecks the widget, indicating a change from a checked (selected) state to an unchecked (deselected) state. This allows you to execute custom logic in response to the widget being deselected.
	* @param event. The custom event. Custom data event was created with: ev.detail(changeType)
   *  changeType - A string flag indicating whether the change event was triggered via API or an event.
   */
  onUncheckValue?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
}

declare global {
    interface Document {
        createElement(tagName: "smart-switch-button"): SwitchButton;
        querySelector(selectors: "smart-switch-button"): SwitchButton | null;
        querySelectorAll(selectors: "smart-switch-button"): NodeListOf<SwitchButton>;
        getElementsByTagName(qualifiedName: "smart-switch-button"): HTMLCollectionOf<SwitchButton>;
        getElementsByName(elementName: "smart-switch-button"): NodeListOf<SwitchButton>;
    }
}

/**Specifies how the switch button responds to user interaction when the switchMode is set to 'click'. This property determines the exact mouse action that triggers a change in the switch’s state:<br/><br/><br/>  press – The switch state changes immediately when the mouse button is pressed down (<code>mousedown</code> event).
<br/>  release – The switch state changes only when the mouse button is released (<code>mouseup</code> event), after a complete click.
<br/>  pressAndRelease – The switch state changes on <code>mousedown</code>, and automatically reverts to the original state on <code>mouseup</code>.
<br/><br/>Note: This property is effective only when <code>switchMode</code> is set to <code>'click'</code>. */
export declare type ClickMode = 'press' | 'release' | 'pressAndRelease';
/**Specifies the layout direction of the switch component, determining whether it is displayed horizontally or vertically. Use this property to control how the switch and its label are arranged within the user interface. */
export declare type Orientation = 'horizontal' | 'vertical';
/**Configures how users can interact with the switch element to change its state. The switchMode property accepts the following options:<br/><br/><br/>  default – The switch state can be toggled either by dragging the thumb (the movable part of the switch) or by clicking anywhere within the track (the switch’s background area).
<br/>  click – The switch state changes only when a user clicks inside the track. Dragging the thumb does not affect the state.
<br/>  drag – The switch state changes solely by dragging the thumb. Clicking on the track has no effect.
<br/>  none – The switch cannot be toggled by any user interaction. Its state can only be changed programmatically through the API.
<br/> */
export declare type SwitchButtonSwitchMode = 'default' | 'click' | 'drag' | 'none';
