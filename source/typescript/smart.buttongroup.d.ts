import  {BaseElement, Animation} from "./smart.element"

export interface ButtonGroupProperties {
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines the buttons configuration. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value. It can also be a callback that returns an Array of items as previously described.
   * Default value: []
   */
  dataSource?: any;
  /**
   * Determines the selection mode for the element.
   * Default value: one
   */
  selectionMode?: ButtonGroupSelectionMode;
  /**
   * Enables or disables the element. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: """"
   */
  name?: string;
  /**
   * If the custom element is readonly, it cannot be interacted with.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or gets the button group's selected values. Represents an array of strings.
   * Default value: 
   */
  selectedValues?: string[];
  /**
   * Sets or gets the button group's selected indexes. Represents an array of numbers
   * Default value: 
   */
  selectedIndexes?: number[];
  /**
   * If is set to true, the element cannot be focused.
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
   * Change event is triggered when the selectedValues/selectedIndexes are changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Selects/Unselects an item inside the element.
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

/**Determines the selection mode for the element. */
export declare type ButtonGroupSelectionMode = 'none' | 'one' | 'zeroOrOne' | 'zeroOrMany';
