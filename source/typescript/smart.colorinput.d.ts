import  {BaseElement, Animation} from "./smart.element"

/**
 ColorInput is an input field with colors displayed in a DropDown grid like in Excel.
*/
export interface ColorInput extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines the delay before the drop down opens to show the matches from the auto complete operation. The delay is measured in miliseconds.
   * Default value: 100
   */
  autoCompleteDelay?: number;
  /**
   * Determines the data source ( that represent valid colors ) that will be loaded to the Input. The dataSource can be an array of strings or objects where the attributes represent the properties of a List Item. For example label, value. It can also be a callback that returns an Array of items as previously described.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines the colors that will be displayed and their layout.
   * Default value: default
   */
  displayMode?: ColorDisplayMode;
  /**
   * Determines the position of the drop down button.
   * Default value: none
   */
  dropDownButtonPosition?: DropDownButtonPosition;
  /**
   * Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownHeight?: string | number;
  /**
   * Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * Determines the maximum number of matched items that should be visible inside the drop down as a result of a new autoComplete query. By default the maximum number of 8 items can be displayed inside the drop down.
   * Default value: 8
   */
  items?: number;
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "invalidNode": "."
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines the minimum number of characters inside the input in order to trigger the autocomplete functionality that will open the drop down and show the matched items.
   * Default value: 1
   */
  minLength?: number;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting data inside an HTML form.
   * Default value: ""
   */
  name?: string;
  /**
   * Determines whether the drop down is opened or not.
   * Default value: false
   */
  opened?: boolean;
  /**
   * Determines the placeholder of the input.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Sets or gets the query that is used to filter the items. Query is used by the autoComplete operation. Empty string means that all items from the data source will be displayed and no filter query is applied.
   * Default value: 
   */
  query?: string | number;
  /**
   * Determines the auto complete query mode. This property also determines the matching algorithm for the autocomplete operation.
   * Default value: containsIgnoreCase
   */
  queryMode?: ColorQueryMode;
  /**
   * Determines whether the user can enter text inside the input or not. Determines whether the element acts as a ComboBox or a DropDownList if a dataSource is provided.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the theme for the element. Themes define the look of the elements.
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the value of the element.
   * Default value: ""
   */
  value?: string;
  /**
   * Determines what will be displayed inside the color picker's action section.
   * Default value: default
   */
  valueDisplayMode?: ColorValueDisplayMode;
  /**
   * Determines the format of the color. Whether it's in HEX, RGB or RGBA. By default it shows the color depending on the displayMode.
   * Default value: default
   */
  valueFormat?: ColorValueFormat;
  /** 
   * This event is triggered when the selection is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(label, oldLabel, oldValue, value)
   *  label - The label of the new selected color.
   *  oldLabel - The label of the color that was previously selected before the event was triggered.
   *  oldValue - The value of the color that was previously selected before the event was triggered.
   *  value - The value of the new selected color.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Closes the drop down.
   */
  close(): void;
  /**
   * Opens the drop down.
   */
  open(): void;
  /**
   * Selects the text inside the input or if it is <b>readonly</b> then the element is focused.
   */
  select(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-color-input"): ColorInput;
			querySelector(selectors: "smart-color-input"): ColorInput | null;	
			querySelectorAll(selectors: "smart-color-input"): NodeListOf<ColorInput>;
			getElementsByTagName(qualifiedName: "smart-color-input"): HTMLCollectionOf<ColorInput>;
			getElementsByName(elementName: "smart-color-input"): NodeListOf<ColorInput>;	
    }
}

/**Determines the colors that will be displayed and their layout. */
export declare type ColorDisplayMode = 'default' | 'grid';
/**Determines the position of the drop down button. */
export declare type DropDownButtonPosition = 'left' | 'right' | 'top' | 'bottom';
/**Determines the auto complete query mode. This property also determines the matching algorithm for the autocomplete operation. */
export declare type ColorQueryMode = 'contains' | 'containsIgnoreCase' | 'doesNotContain' | 'doesNotContainIgnoreCase' | 'equals' | 'equalsIgnoreCase' | 'startsWith' | 'startsWithIgnoreCase' | 'endsWith' | 'endsWithIgnoreCase';
/**Determines what will be displayed inside the color picker's action section. */
export declare type ColorValueDisplayMode = 'default' | 'colorBox' | 'colorCode' | 'none';
/**Determines the format of the color. Whether it's in HEX, RGB or RGBA. By default it shows the color depending on the displayMode. */
export declare type ColorValueFormat = 'default' | 'rgb' | 'rgba' | 'hex';
