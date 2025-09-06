import  {BaseElement, Animation} from "./smart.element"

export interface ListItemProperties {
  /**
   * 
   * Default value: -1
   */
  alternationIndex?: number;
  /**
   * 
   * Default value: ""
   */
  color?: string;
  /**
   * 
   * Default value: plain
   */
  displayMode?: ListItemDisplayMode | string;
  /**
   * 
   * Default value: false
   */
  grouped?: boolean;
  /**
   * 
   * Default value: false
   */
  selected?: boolean;
  /**
   * 
   * Default value: ""
   */
  value?: string;
  /**
   * 
   * Default value: ""
   */
  label?: string;
  /**
   * 
   * Default value: ""
   */
  details?: string;
  /**
   * 
   * Default value: ""
   */
  group?: string;
  /**
   * 
   * Default value: false
   */
  hidden: boolean;
  /**
   * 
   * Default value: false
   */
  readonly?: boolean;
}
/**
 Defines a list item for ListBox, ComboBox, DropDownList.
*/
export interface ListItem extends BaseElement, ListItemProperties {

  /* Get a member by its name */
  [name: string]: any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-list-item"): ListItem;
        querySelector(selectors: "smart-list-item"): ListItem | null;
        querySelectorAll(selectors: "smart-list-item"): NodeListOf<ListItem>;
        getElementsByTagName(qualifiedName: "smart-list-item"): HTMLCollectionOf<ListItem>;
        getElementsByName(elementName: "smart-list-item"): NodeListOf<ListItem>;
    }
}


export declare type ListItemDisplayMode = 'plain' | 'checkBox' | 'radioButton';
export interface ListItemsGroupProperties {
  /**
   * 
   * Default value: ""
   */
  label?: string;
}
/**
 Defines a group of list items.
*/
export interface ListItemsGroup extends BaseElement, ListItemsGroupProperties {

  /* Get a member by its name */
  [name: string]: any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-list-items-group"): ListItemsGroup;
        querySelector(selectors: "smart-list-items-group"): ListItemsGroup | null;
        querySelectorAll(selectors: "smart-list-items-group"): NodeListOf<ListItemsGroup>;
        getElementsByTagName(qualifiedName: "smart-list-items-group"): HTMLCollectionOf<ListItemsGroup>;
        getElementsByName(elementName: "smart-list-items-group"): NodeListOf<ListItemsGroup>;
    }
}

export interface MultilineTextBoxProperties {
  /**
   * Specifies the animation mode for the component. When this property is set to 'none', all animations are disabled. Setting it to other supported values enables the corresponding animation effects. Use this property to control whether and how animations are applied.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Specifies if and in what manner user-entered text should be automatically capitalized during input or editing. This setting controls the automatic transformation of text—for example, capitalizing the first letter of each word, each sentence, or all characters—based on the selected capitalization behavior.
   * Default value: none
   */
  autoCapitalize?: MultilineTextBoxAutoCapitalize | string;
  /**
   * Specifies whether the browser is allowed to automatically fill in the value of the input control based on the user's previously entered data, such as usernames, passwords, or addresses. When enabled, this facilitates autofill and streamlines user input by suggesting or completing values according to stored information.
   * Default value: off
   */
  autoComplete?: MultiLineTextBoxAutoComplete | string;
  /**
   * Controls whether the element automatically increases its height to accommodate input that exceeds its current vertical space. When enabled, the element will expand vertically as more content is entered, preventing scrollbars from appearing.
   * Default value: false
   */
  autoExpand?: boolean;
  /**
   * Specifies whether the input element should automatically receive focus when the page finishes loading, allowing users to start interacting with it immediately without manually clicking or tabbing into the field.
   * Default value: false
   */
  autoFocus?: boolean;
  /**
   * The cols attribute sets the visible width (measured in average character columns) of a textarea input field in a form. Its value must be a positive integer, determining how many characters are visible in a single row. If the cols attribute is not provided, the textarea defaults to displaying 20 character columns in width. Note: The cols attribute is not applicable to  elements; it is specific to  elements.
   * Default value: 20
   */
  cols?: number;
  /**
   * Controls whether the element is active or inactive. When enabled, the element can interact with user input; when disabled, the element is unresponsive and typically appears visually distinct to indicate its inactive state.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Defines the visual presentation of the characters entered within the input field, such as whether they are shown as plain text, masked (e.g., as asterisks for passwords), or styled in a particular way. This setting determines how users see their input while typing or viewing the form.
   * Default value: default
   */
  displayMode?: TextBoxDisplayMode | string;
  /**
   * Specifies how the application responds when the "Enter" key is pressed, such as submitting a form, adding a new line, or triggering a specific action.
   * Default value: newLine
   */
  enterKeyBehavior?: MultilineTextBoxEnterKeyBehavior | string;
  /**
   * Specifies the form element with which this element is associated, known as its "form owner." The value of this attribute must be the ID of an existing  element within the same HTML document. This allows input or button elements to be associated with a form, even if they are not nested inside the form tag itself.
   * Default value: ""
   */
  form?: string;
  /**
   * Provides supplementary helper text displayed beneath the element. This text becomes visible only when the element is focused, offering users additional guidance or context during interaction.
   * Default value: null
   */
  hint?: any;
  /**
   * Determines whether the horizontal scrollbar is visible, hidden, or displayed automatically based on the content's width.
   * Default value: auto
   */
  horizontalScrollBarVisibility?: HorizontalScrollBarVisibility | string;
  /**
   * Specifies the expected purpose of the input field and determines whether the browser (user agent) is allowed to offer automated assistance, such as autofill suggestions, when the element is used within a form. This property maps directly to the standard HTML autocomplete attribute, enabling the browser to understand what kind of information should be entered into the field. Accepted values include 'on', 'off', or context-specific keywords such as 'name', 'email', 'organization', or 'street-address'. Setting an appropriate value improves user experience by allowing the browser to assist in accurately and efficiently filling out form fields with relevant data.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * Positions the label above the input element. The label will always be visible and displayed above the input field, providing clear identification for the corresponding input regardless of user interaction or input state.
   * Default value: ""
   */
  label?: string;
  /**
   * Defines or retrieves the unlockKey value used to authenticate and grant access to the product's locked features. This property acts as a security credential required to unlock and utilize restricted functionality within the product.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Defines or retrieves the current language code (e.g., "en", "fr", "es") to be used for localization. This property works together with the messages property, allowing the application to display the appropriate translations based on the selected language. When setting this value, ensure that corresponding translations exist within the messages object for consistent multilingual support.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A callback function that allows you to define custom formatting for messages returned by the Localization Module. Use this to modify message content, structure, or placeholders before they are displayed to users, enabling tailored localization outputs that meet specific application or user requirements.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Specifies or retrieves the maximum number of characters allowed in the input field. If set, users cannot enter more characters than this limit.
   * Default value: null
   */
  maxLength?: number;
  /**
   * Specifies or retrieves the minimum number of characters that a user is required to enter in the input field. If the user enters fewer characters than the specified minimum, the input will be considered invalid.
   * Default value: 0
   */
  minLength?: number;
  /**
   * Defines or retrieves an object containing key-value pairs for all user-facing strings within the widget, enabling text customization and localization. This property works in conjunction with the locale property to display translated content according to the selected language or locale. Use this to provide translated strings for different languages, ensuring your widget can support internationalization.
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
  messages?: any;
  /**
   * Defines or retrieves the value of the element’s name attribute. The name attribute uniquely identifies form elements when submitting an HTML form, enabling the form data to be correctly organized and transmitted to the server. This is essential for backend processing and data association.
   * Default value: ""
   */
  name?: string;
  /**
   * Specifies the placeholder text that appears inside the element when it is empty or no value has been entered. This text serves as a hint or example to guide users on the expected input format or content.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * If enabled, users will be prevented from interacting with the element. This means that all user actions, such as clicks, typing, or other input events, will be disabled for this element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Indicates that the user is required to enter a value in this field before the form can be submitted. If the field is left empty, the form submission will be blocked and the user will be prompted to provide a valid input. This ensures that essential information is collected before processing the form.
   * Default value: false
   */
  required?: boolean;
  /**
   * Controls whether the user can resize the element. When enabled, a resize handle appears in the bottom-right corner of the input area, allowing the user to manually adjust its size. If disabled, the element remains a fixed size and no resize indicator is shown.
   * Default value: false
   */
  resizable?: boolean;
  /**
   * Specifies or retrieves a value that determines whether the element’s alignment is configured for right-to-left (RTL) languages, ensuring proper display and support for locales that use RTL fonts and text direction (such as Arabic or Hebrew).
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the number of text lines that are visible within the control at one time. This determines the vertical size of the control and how much content is displayed to the user without scrolling.
   * Default value: 5
   */
  rows?: number;
  /**
   * Determines if the entire content of the input field will be automatically highlighted (selected) when the input gains focus, allowing users to easily replace or copy the existing text.
   * Default value: false
   */
  selectAllOnFocus?: boolean;
  /**
   * Specifies the position (zero-based index) of the last character within the currently selected text range. This value represents the character immediately after the end of the selection; if no text is selected, it is equal to the starting index of the selection.
   * Default value: 0
   */
  selectionEnd?: number;
  /**
   * Specifies the zero-based index position of the first character included in the current text selection. This value represents where the selection begins within the overall string or text content.
   * Default value: 0
   */
  selectionStart?: number;
  /**
   * Indicates whether the element's text should be checked for spelling and grammar errors by the browser. When enabled, the browser will highlight possible mistakes and may provide correction suggestions to the user.
   * Default value: false
   */
  spellCheck?: boolean;
  /**
   * Specifies the theme to be applied, which controls the overall appearance and styling of the element, including colors, fonts, and other visual properties.
   * Default value: ""
   */
  theme?: string;
  /**
   * When set to true, the element is not focusable, meaning it cannot receive focus via keyboard navigation, mouse interaction, or scripting.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Provides functionality to retrieve (get) the current value of the element or assign (set) a new value to it. This is commonly used for form elements such as input fields, textareas, or select elements, allowing you to programmatically access or modify the user's input or the element's content.
   * Default value: ""
   */
  value?: string;
  /**
   * Determines whether the vertical scrollbar is displayed, hidden, or automatically shown based on the content's overflow within the container. This property allows you to control how and when users can scroll vertically.
   * Default value: auto
   */
  verticalScrollBarVisibility?: VerticalScrollBarVisibility | string;
  /**
   * Specifies the behavior of the control when handling long text input, determining whether the text automatically wraps onto a new line or remains on a single line, allowing for improved readability and layout management.
   * Default value: soft
   */
  wrap?: MultilineTextBoxWrap | string;
}
/**
 Defines a multi-line text input control. MultilineTextBox can hold an unlimited number of characters, and the text renders in a fixed-width font
*/
export interface MultilineTextBox extends BaseElement, MultilineTextBoxProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the user modifies the content of the text box, such as by typing, deleting, or pasting text. It detects any change to the input’s value and can be used to respond in real-time as the user edits the text box.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value, type)
   *  oldValue - The previous value of the element before it was changed.
   *  value - The new value of the element.
   *  type - Indicates when the element was called, e.g. on blur or submit.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Sets keyboard and interaction focus to the element, making it the active target for user input and accessibility tools. This enables users to interact with the element (e.g., typing in a field or activating controls) and allows screen readers to announce its presence.
   */
  focus(): void;
  /**
   * This method resets the value of the element box to its original, default state as defined upon initialization. Any user input or programmatically modified content will be cleared, returning the element box to its initial configuration.
   */
  reset(): void;
  /**
   * Returns the text currently selected by the user within the active input field, textarea, or document. If no text is selected, the function returns an empty string.
   * @param {string} displayMode. If <b>displayMode</b> is set to 'escaped', the value returned from the method contains escaped special characters.
   * @returns {string}
   */
  selection(displayMode: string): string;
  /**
   * Extracts a specified portion of the input text based on the provided arguments, such as start and end positions or a pattern. If no arguments are given, the entire input text is selected by default. This function enables precise control over which segment of the text is retrieved or manipulated.
   * @param {any} rangeFrom?. Determines the start index of the text selection.
   * @param {any} rangeTo?. Determines the end index of the text selection.
   */
  select(rangeFrom?: any, rangeTo?: any): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-multiline-text-box"): MultilineTextBox;
        querySelector(selectors: "smart-multiline-text-box"): MultilineTextBox | null;
        querySelectorAll(selectors: "smart-multiline-text-box"): NodeListOf<MultilineTextBox>;
        getElementsByTagName(qualifiedName: "smart-multiline-text-box"): HTMLCollectionOf<MultilineTextBox>;
        getElementsByName(elementName: "smart-multiline-text-box"): NodeListOf<MultilineTextBox>;
    }
}

/**Specifies if and in what manner user-entered text should be automatically capitalized during input or editing. This setting controls the automatic transformation of text—for example, capitalizing the first letter of each word, each sentence, or all characters—based on the selected capitalization behavior. */
export declare type MultilineTextBoxAutoCapitalize = 'none' | 'characters' | 'words';
/**Specifies whether the browser is allowed to automatically fill in the value of the input control based on the user's previously entered data, such as usernames, passwords, or addresses. When enabled, this facilitates autofill and streamlines user input by suggesting or completing values according to stored information. */
export declare type MultiLineTextBoxAutoComplete = 'on' | 'off';
/**Defines the visual presentation of the characters entered within the input field, such as whether they are shown as plain text, masked (e.g., as asterisks for passwords), or styled in a particular way. This setting determines how users see their input while typing or viewing the form. */
export declare type TextBoxDisplayMode = 'default' | 'escaped';
/**Specifies how the application responds when the "Enter" key is pressed, such as submitting a form, adding a new line, or triggering a specific action. */
export declare type MultilineTextBoxEnterKeyBehavior = 'clearOnSubmit' | 'newLine' | 'submit';
/**Determines whether the horizontal scrollbar is visible, hidden, or displayed automatically based on the content's width. */
export declare type HorizontalScrollBarVisibility = 'auto' | 'disabled' | 'hidden' | 'visible';
/**Determines whether the vertical scrollbar is displayed, hidden, or automatically shown based on the content's overflow within the container. This property allows you to control how and when users can scroll vertically. */
export declare type VerticalScrollBarVisibility = 'auto' | 'disabled' | 'hidden' | 'visible';
/**Specifies the behavior of the control when handling long text input, determining whether the text automatically wraps onto a new line or remains on a single line, allowing for improved readability and layout management. */
export declare type MultilineTextBoxWrap = 'hard' | 'soft' | 'off';
