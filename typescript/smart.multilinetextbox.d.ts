import  {BaseElement} from "./smart.element"

/**
 Defines a multi-line text input control. MultilineTextBox can hold an unlimited number of characters, and the text renders in a fixed-width font
*/
export interface MultilineTextBox extends BaseElement {
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation: "none" | "simple" | "advanced";
  /**
   * Determines whether and how the value should be automatically capitalized as it is entered/edited by the user.
   * Default value: none
   */
  autoCapitalize: "none" | "characters" | "words";
  /**
   * Determines whether the value of the control can be automatically completed by the browser.
   * Default value: off
   */
  autoComplete: "on" | "off";
  /**
   * Determines whether the input should be focused when the page is loaded.
   * Default value: false
   */
  autoFocus: boolean;
  /**
   * The cols attribute specifies the visible width of a input. If it is specified, it must be a positive integer. If it is not specified, the default value is 20.
   * Default value: 20
   */
  cols: number;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled: boolean;
  /**
   * Specifies how the characters are displayed inside the input.
   * Default value: default
   */
  displayMode: "default" | "escaped";
  /**
   * Determines the behavior on "Enter" key.
   * Default value: newLine
   */
  enterKeyBehavior: "clearOnSubmit" | "newLine" | "submit";
  /**
   * The form element that the element is associated with (its "form owner"). The value of the attribute must be the ID of a form element in the same document.
   * Default value: ""
   */
  form: string;
  /**
   * Sets additional helper text below the element. Appears only when the element is focused.
   * Default value: null
   */
  hint: any;
  /**
   * Controls horizontal scrollbar's visibility. 
   * Default value: auto
   */
  horizontalScrollBarVisibility: "auto" | "disabled" | "hidden" | "visible";
  /**
   * Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
   * Default value: "off"
   */
  inputPurpose: string;
  /**
   * Sets label above the element. The label is displayed above the input and it's always visible.
   * Default value: ""
   */
  label: string;
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
   * Sets or gets the maximum number of characters that the user can enter.
   * Default value: null
   */
  maxLength: number;
  /**
   * Sets or gets the minimum number of characters that the user can enter.
   * Default value: 0
   */
  minLength: number;
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
   *     "invalidNode": "."
   *   }
   * }
   */
  messages: any;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name: string;
  /**
   * The placeholder text that is displayed when no value is applied to the element. 
   * Default value: ""
   */
  placeholder: string;
  /**
   * If enabled the users cannot iteract with the element.
   * Default value: false
   */
  readonly: boolean;
  /**
   * Specifies that the user must fill in a value before submitting a form that contains the element.
   * Default value: false
   */
  required: boolean;
  /**
   * Enables/ disables the resizing of the element. If enabled a resizing indicator appears in the bottom corner of the input area.
   * Default value: false
   */
  resizable: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft: boolean;
  /**
   * The number of visible text lines for the control.
   * Default value: 5
   */
  rows: number;
  /**
   * Specifies whether the content of the input will be selected on focus.
   * Default value: false
   */
  selectAllOnFocus: boolean;
  /**
   * Indicates the index of the last character in the current selection.
   * Default value: 0
   */
  selectionEnd: number;
  /**
   * Indicates the index to the first character in the current selection.
   * Default value: 0
   */
  selectionStart: number;
  /**
   * Specifies whether the element is to have its spelling and grammar checked or not.
   * Default value: false
   */
  spellCheck: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable: boolean;
  /**
   * Sets or gets the value of the element.
   * Default value: ""
   */
  value: string;
  /**
   * Controls vertical scrollbar's visibility. 
   * Default value: auto
   */
  verticalScrollBarVisibility: "auto" | "disabled" | "hidden" | "visible";
  /**
   * Indicates how the control wraps text.
   * Default value: soft
   */
  wrap: "hard" | "soft" | "off";
  /** 
   * This event is triggered when the value of the text box is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(oldValue, value, type)
   *  oldValue - The previous value of the element before it was changed.
   *  value - The new value of the element.
   *  type - Indicates when the element was called, e.g. on blur or submit.
   */
  onchange: ((this: Window, ev: Event) => any) | null;
  /**
   * Focuses the element.
   */
  focus(): void;
  /**
   * The method is used to reset the value of the element box to it's initial state.
   */
  reset(): void;
  /**
   * Returns the currenctly selected text.
   * @param {string} displayMode. If <b>displayMode</b> is set to 'escaped', the value returned from the method contains escaped special characters.
   * @returns {string}
   */
  selection(displayMode: string): string;
  /**
   * Selects a certain part of the input text. If no arguments are specified the whole text will be selected.
   * @param {any} rangeFrom?. Determines the start index of the text selection.
   * @param {any} rangeTo?. Determines the end index of the text selection.
   */
  select(rangeFrom?: any, rangeTo?: any): void;
}

declare global {    
    interface Document {
        createElement(tagName: "smart-multiline-text-box"): MultilineTextBox;
    }
}

