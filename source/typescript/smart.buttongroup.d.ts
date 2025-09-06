import  {BaseElement, Animation} from "./smart.element"

export interface ButtonGroupProperties {
  /**
   * Sets or retrieves the current animation mode for the component. When the property is set to 'none', all animations are disabled, resulting in immediate transitions without visual effects. Otherwise, specifying a different mode enables animations according to the selected option.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Configures the set of buttons to be displayed. The dataSource property accepts multiple formats: it can be an array of strings or numbers—each representing a button—or an array of objects, where each object defines the properties of a button (for example, with attributes such as label for the button text and value for its underlying value). Alternatively, dataSource can be a function (callback) that returns an array in either of these formats. This flexibility allows you to define button configurations statically or generate them dynamically based on custom logic.
   * Default value: []
   */
  dataSource?: any;
  /**
   * Specifies how items within the element can be selected—for example, allowing single selection, multiple selections, or no selection at all.
   * Default value: one
   */
  selectionMode?: ButtonGroupSelectionMode | string;
  /**
   * Specifies whether the element is interactive and can be used by the user. When enabled, the element responds to user input; when disabled, the element is non-interactive and usually appears visually distinct to indicate it is unavailable.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Defines or retrieves the unlockKey, a unique identifier or code required to activate and gain access to the product’s full features.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the currently selected language for the component. This property works together with messages, which provides the corresponding localized texts or translations for each available language. Changing the language will update the displayed messages based on the selected locale.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A callback function that allows you to customize the formatting of messages returned by the Localization Module before they are displayed to the user. Use this to modify, translate, or enrich message content based on your application's specific requirements.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines or retrieves an object containing text strings used within the widget, allowing these strings to be localized for different languages. This property works in conjunction with the locale property to provide translated text for the widget's user interface, enabling support for internationalization.
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
   * Sets or retrieves the value of the element's name attribute. The name attribute is used to identify form fields when submitting an HTML form, allowing the form data to be sent as key-value pairs to the server. This attribute is essential for grouping related input elements and accessing their submitted values on the server side.
   * Default value: """"
   */
  name?: string;
  /**
   * When the custom element has the 'readonly' attribute set, its value cannot be modified by the user. Interaction methods such as typing, selecting, or altering content are disabled; however, users are still able to focus on and copy content from the element if desired. Any attempts to change the value—either via keyboard, mouse, or programmatic user actions—will have no effect.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Gets or sets a value that determines whether the element’s layout and text direction are aligned for right-to-left (RTL) locales, such as those using Arabic or Hebrew scripts. When enabled, this property ensures proper alignment and rendering for languages that read from right to left."
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the visual theme to be applied to the element. The theme controls the overall appearance, including colors, typography, and style variations, ensuring the element is displayed consistently according to the selected design.
   * Default value: ""
   */
  theme?: string;
  /**
   * Gets or sets the selected values of the button group component as an array of strings. Each string in the array corresponds to the value attribute of a selected button within the group. This property can be used to programmatically read which buttons are currently selected or to define the initial selection state.
   * Default value: 
   */
  selectedValues?: string[];
  /**
   * Gets or sets the indexes of the selected buttons within the group as an array of numbers. Each number corresponds to the zero-based index of a selected button. Used to track multiple selected buttons within the group.
   * Default value: 
   */
  selectedIndexes?: number[];
  /**
   * If set to true, this property prevents the element from receiving keyboard focus, making it unreachable via keyboard navigation (such as the Tab key).
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 ButtonGroup creates a set of buttons that can work as normal buttons, radio buttons or checkboxes.
*/
export interface ButtonGroup extends BaseElement, ButtonGroupProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * The "change" event is triggered whenever the values of selectedValues or selectedIndexes are updated. This event occurs whenever the user selects or deselects an option, or when the selection state is modified programmatically. Use this event to respond to changes in the selection, such as updating the UI or performing validation.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Toggles the selection state of an item within the element, allowing users to either select or deselect the specified item based on its current state.
   * @param {number | string} value. The index or the value of the item to be selected/unselected.
   */
  select(value: number | string): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-button-group"): ButtonGroup;
        querySelector(selectors: "smart-button-group"): ButtonGroup | null;
        querySelectorAll(selectors: "smart-button-group"): NodeListOf<ButtonGroup>;
        getElementsByTagName(qualifiedName: "smart-button-group"): HTMLCollectionOf<ButtonGroup>;
        getElementsByName(elementName: "smart-button-group"): NodeListOf<ButtonGroup>;
    }
}

/**Specifies how items within the element can be selected—for example, allowing single selection, multiple selections, or no selection at all. */
export declare type ButtonGroupSelectionMode = 'none' | 'one' | 'zeroOrOne' | 'zeroOrMany';
