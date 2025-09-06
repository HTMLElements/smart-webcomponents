import  {BaseElement, Animation} from "./smart.element"

export interface ChipProperties {
  /**
   * Configures or retrieves the current animation mode for the component. When this property is set to 'none', all animations are disabled, resulting in immediate transitions without animation effects. For other values, the specified animation behavior is applied during state changes or interactions.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Specifies a custom avatar displayed on the left side of the chip. The avatar can be an image (when provided as an image URL), plain text, or custom HTML content. This allows for flexible customization, enabling you to use user profile pictures, initials, icons, or any other visual elements as the chip’s avatar.
   * Default value: null
   */
  avatar?: string | null;
  /**
   * Specifies whether a close button should be visible on the right side of the element, allowing users to dismiss or remove the element when clicked.
   * Default value: false
   */
  closeButton?: boolean;
  /**
   * Determines whether the element is interactive. When set to true, the element is disabled, meaning users cannot interact with it (e.g., clicking, typing, or selecting). Disabled elements are typically visually distinct and do not respond to user actions or participate in form submissions.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies a custom template for the chip component. The template can be provided either as a string representing the ID of an existing '' element in the DOM, or as a direct reference to an 'HTMLTemplateElement' instance. This allows developers to define and reuse custom chip layouts within the application.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Sets or retrieves the unlockKey, a unique identifier or code used to activate and grant access to the product's features.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language setting. This property works together with the messages property to determine which set of localized messages is displayed based on the selected language. Use this to change the application's language and ensure the appropriate message translations are shown.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A callback function that allows you to define a custom format for the messages returned by the Localization Module. This function enables you to modify or transform localized messages before they are displayed to users, such as adjusting placeholders, formatting variables, or applying additional string manipulation as needed.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines or retrieves an object containing the text strings displayed by the widget, allowing these strings to be customized for different languages or regions. This property works in conjunction with locale to support localization, enabling the widget’s interface to adapt its text content based on the specified locale settings.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * When the element has the readonly attribute, users can view its value but cannot modify or interact with it. The element’s content cannot be changed by user input, though the element may still be focused and its value programmatically updated by scripts.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Gets or sets a value that determines whether the element's alignment is configured for right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element's content and layout adapt to support locales that require right-to-left text direction.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the theme to be applied to the element. The theme controls the visual appearance and styling, including colors, fonts, and other design aspects, ensuring a consistent look and feel across the interface.
   * Default value: ""
   */
  theme?: string;
  /**
   * When this property is set to true, the element will be excluded from keyboard navigation and cannot receive focus via mouse or keyboard interactions.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Specifies the text displayed within the chip component. This text serves as the chip's value and is used for display and identification purposes. The value must be a string; any other data type will not be accepted. If no value is provided, the chip's text content defaults to an empty string.
   * Default value: ""
   */
  value?: string;
}
/**
 Chip is a simple rounded box that displays a single value and optionally an icon.
*/
export interface Chip extends BaseElement, ChipProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when a user closes or removes a chip component, such as by clicking a close icon or performing an equivalent action. It can be used to execute custom logic, update state, or notify other components when a chip is dismissed from the interface.
	* @param event. The custom event. Custom data event was created with: ev.detail(value)
   *  value - A string representing the current value of the element.
   */
  onClose: ((this: any, ev: Event) => any) | null;
  /**
   * Removes the chip element from the DOM, effectively dismissing it from the interface and making it no longer visible or interactive to the user. This action is typically triggered when the user clicks the close or delete icon on the chip.
   */
  close(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-chip"): Chip;
        querySelector(selectors: "smart-chip"): Chip | null;
        querySelectorAll(selectors: "smart-chip"): NodeListOf<Chip>;
        getElementsByTagName(qualifiedName: "smart-chip"): HTMLCollectionOf<Chip>;
        getElementsByName(elementName: "smart-chip"): NodeListOf<Chip>;
    }
}

