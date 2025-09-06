import  {BaseElement, Animation} from "./smart.element"

export interface TextAreaProperties {
  /**
   * Configures or retrieves the current animation mode. When set to 'none', all animations are disabled, resulting in instant transitions with no visual effects. Otherwise, the property determines the type or style of animation used for transitions or dynamic effects.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Specifies the amount of time, in milliseconds, to wait before displaying the dropdown list of matching results after the user initiates the autocomplete operation. This delay helps control how quickly the matches appear, improving user experience and performance when fetching or filtering suggestions.
   * Default value: 100
   */
  autoCompleteDelay?: number;
  /**
   * Specifies the source of data to be loaded into the Input component. The dataSource can accept the following formats:- An array of strings or numbers, where each value will be used as a list item.- An array of objects, where each object represents a list item with specific properties such as label (display text) and value (underlying value).- A callback function that returns an array of items in one of the formats described above.This flexibility allows you to provide simple lists or more complex data structures for Input population, as well as load data asynchronously or dynamically when needed.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Determines whether the element is interactive or inactive. When enabled, users can interact with the element (e.g., click, type, or select). When disabled, the element is visible but does not respond to user interactions.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies the placement of the dropdown button relative to its parent element, such as aligning it to the left, right, top, or bottom. This property controls where the dropdown button appears within the interface.
   * Default value: right
   */
  dropDownButtonPosition?: DropDownButtonPosition | string;
  /**
   * Specifies the height of the dropdown menu. By default, this property is set to an empty string, which means the dropdown's height is determined by a corresponding CSS variable. If a specific value is provided, it will override the CSS variable and explicitly set the dropdown's height.
   * Default value: 
   */
  dropDownHeight?: string | number;
  /**
   * Specifies the width of the dropdown menu. By default, this property is set to an empty string (""), which means the dropdown’s width will be determined by the associated CSS variable (typically via a custom property such as --dropdown-width). To override the default behavior, you can explicitly set a specific width (e.g., "200px", "100%", etc.), which will be applied directly to the dropdown. If left as an empty string, the component remains responsive to changes in the relevant CSS variable.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Defines the expected type of data for this input field and specifies whether, and to what extent, the browser or user agent is allowed to offer autofill assistance. This attribute aligns with the standard HTML autocomplete attribute, providing guidance to browsers for streamlining data entry and enhancing user experience. Acceptable values indicate the type of information anticipated, such as 'on' (enable autocomplete), 'off' (disable autocomplete), 'name' (full name), 'organization' (company or organization name), 'street-address' (street address), among others. Proper use of this attribute ensures accurate and secure autofill behavior in web forms.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * Specifies the maximum number of items that can be displayed in the dropdown list when a new autoComplete query is performed. This setting controls how many matched results are visible to the user at one time within the dropdown. By default, up to 8 matching items will be shown in the dropdown menu.
   * Default value: 8
   */
  items?: number;
  /**
   * Defines the 'unlockKey' property, which is used to retrieve or assign the unique key required to unlock access to the product. This property can be read to obtain the current unlock key or set to specify a new key for unlocking the product.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language code, typically following ISO 639-1 standards (e.g., "en" for English, "fr" for French). This property is used alongside the messages property to determine which set of localized messages should be displayed or accessed based on the selected language.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A callback function that allows you to define a custom format for messages returned by the Localization Module. Use this function to modify or enhance the appearance, structure, or content of localized messages before they are delivered to the application.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines or retrieves an object containing text strings used within the widget that support localization. This property enables you to customize the widget’s displayed text for different languages or regions. It is typically used together with the locale property to provide translations and localize the widget’s interface.
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
   * Specifies the minimum number of characters a user must type into the input field before the autocomplete functionality is activated. Once this threshold is reached, the dropdown will open and display a list of items that match the entered text.
   * Default value: 1
   */
  minLength?: number;
  /**
   * Gets or sets the 'name' attribute of the element. The 'name' attribute assigns an identifier to the element, which is used when submitting form data. When a form is submitted, the value of each input element with a 'name' attribute is included in the form data, using the 'name' as the key. This allows server-side scripts to reference the data by name.
   * Default value: ""
   */
  name?: string;
  /**
   * Specifies whether the dropdown menu is currently visible (open) or hidden (closed).
   * Default value: false
   */
  opened?: boolean;
  /**
   * Specifies the placeholder text that appears inside the input field when it is empty, providing a hint or example to guide the user on what to enter.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Specifies or retrieves the search query used to filter items within the data source. This query determines which items are displayed during the autoComplete operation. If the query is an empty string, the filter is not applied, and all items from the data source will be shown.
   * Default value: 
   */
  query?: string | number;
  /**
   * Specifies the autocomplete query mode, which defines how user input is matched to suggestions. This property controls the underlying matching algorithm—such as prefix, infix, or fuzzy matching—used to generate autocomplete results, thereby influencing the relevance and style of suggestions presented to the user.
   * Default value: containsIgnoreCase
   */
  queryMode?: TextAreaQueryMode | string;
  /**
   * Specifies whether the user can enter text into the input field. When the dropDownButtonPosition property is set to 'left' or 'right', the readonly property controls the component’s behavior—if a dataSource is provided:- When readonly is false, the input functions as a ComboBox, allowing users to both type custom values and select from the dropdown list.- When readonly is true, the input behaves as a DropDownList, restricting users to select only from the available options in the dropdown and preventing any text input.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Specifies whether the user is allowed to manually resize the Textarea component, enabling or disabling drag-to-resize functionality in the interface.
   * Default value: none
   */
  resize?: TextAreaResize | string;
  /**
   * Sets or retrieves a value that determines whether the element’s alignment is adjusted to support right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, this property ensures that text direction and layout are suitable for locales that use right-to-left scripts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Allows you to toggle rich text formatting on or off, enabling users to apply styles such as bold, italics, lists, and other text enhancements when enabled, or restricting input to plain text when disabled.
   * Default value: false
   */
  richText?: boolean;
  /**
   * Specifies whether the items are arranged in alphabetical order. When set to true, the items will be automatically sorted from A to Z based on their names or labels; when set to false, the items will retain their original order as provided.
   * Default value: false
   */
  sorted?: boolean;
  /**
   * Specifies the sorting order to be applied when the sort option is enabled. Accepts either ascending (asc) to sort items from lowest to highest, or descending (desc) to sort items from highest to lowest.
   * Default value: "asc"
   */
  sortDirection?: string;
  /**
   * Specifies the visual theme applied to the element. The selected theme controls the appearance, including colors, fonts, and overall styling, ensuring a consistent look and feel across the element's user interface.
   * Default value: ""
   */
  theme?: string;
  /**
   * Specifies the type of data that the input field accepts (e.g., text, number, email, password). Setting the input type helps control the kind of information users can enter, enables appropriate on-screen keyboards on mobile devices, and allows browsers to provide built-in validation for certain data formats.
   * Default value: ""
   */
  type?: string;
  /**
   * When set to true, this property prevents the element from receiving keyboard focus, making it impossible to navigate to the element using the Tab key or programmatic focus methods (such as element.focus()).
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Defines the list of users available for mentioning in the TextArea component. Expects an array where each element is an object containing both id and name properties (e.g., { id: string | number, name: string }). When users type the '@' character, a dropdown appears, allowing them to select a user from this array to mention within the TextArea.
   * Default value: []
   */
  users?: any[];
  /**
   * Sets or retrieves the current value of the element, allowing you to programmatically update or access the element's value property. This is commonly used for form controls such as input, select, and textarea elements.
   * Default value: ""
   */
  value?: string;
}
/**
 TextArea specifies a textarea field where the user can enter data. Auto-complete options are displayed for easier input.
*/
export interface TextArea extends BaseElement, TextAreaProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the user's selection within the component changes. It fires each time a new item or range is selected, allowing you to respond to selection updates in real time. Use this event to perform actions such as updating related UI elements, fetching additional data, or validating the current selection.
	* @param event. The custom event. Custom data event was created with: ev.detail(label, oldLabel, oldValue, value)
   *  label - The label of the new selected item.
   *  oldLabel - The label of the item that was previously selected before the event was triggered.
   *  oldValue - The value of the item that was previously selected before the event was triggered.
   *  value - The value of the new selected item.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered whenever a key is released (keyup) within the TextArea, but only if the content of the TextArea has changed since the previous event.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previous value before it was changed.
   *  value - The new value.
   */
  onChanging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Closes the dropdown menu, hiding its list of selectable options from view.
   */
  close(): void;
  /**
   * Guarantees that the currently active (selected) item remains in view within the scrollable area, automatically scrolling as needed to prevent it from being hidden or obscured.
   */
  ensureVisible(): void;
  /**
   * Returns an array containing information about all users who are mentioned (e.g., with “@username”) within the value of the Textarea. Each user object in the array represents a unique user mention detected in the Textarea's current content.
   * @returns {any[]}
   */
  getMentions(): any[];
  /**
   * Expands the drop-down menu, displaying its list of selectable options to the user.
   */
  open(): void;
  /**
   * Enhances user interaction with input elements by selecting all the text within the input field. If the input element has the <b>readonly</b> attribute, the function instead sets focus on the element without selecting the text, since selection is not allowed for readonly inputs. This ensures an appropriate response whether the input is editable or not.
   */
  select(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-text-area"): TextArea;
        querySelector(selectors: "smart-text-area"): TextArea | null;
        querySelectorAll(selectors: "smart-text-area"): NodeListOf<TextArea>;
        getElementsByTagName(qualifiedName: "smart-text-area"): HTMLCollectionOf<TextArea>;
        getElementsByName(elementName: "smart-text-area"): NodeListOf<TextArea>;
    }
}

/**Specifies the placement of the dropdown button relative to its parent element, such as aligning it to the left, right, top, or bottom. This property controls where the dropdown button appears within the interface. */
export declare type DropDownButtonPosition = 'none' | 'left' | 'right';
/**Specifies the autocomplete query mode, which defines how user input is matched to suggestions. This property controls the underlying matching algorithm—such as prefix, infix, or fuzzy matching—used to generate autocomplete results, thereby influencing the relevance and style of suggestions presented to the user. */
export declare type TextAreaQueryMode = 'contains' | 'containsIgnoreCase' | 'doesNotContain' | 'doesNotContainIgnoreCase' | 'equals' | 'equalsIgnoreCase' | 'startsWith' | 'startsWithIgnoreCase' | 'endsWith' | 'endsWithIgnoreCase';
/**Specifies whether the user is allowed to manually resize the Textarea component, enabling or disabling drag-to-resize functionality in the interface. */
export declare type TextAreaResize = 'none' | 'horizontal' | 'vertical' | 'both';
