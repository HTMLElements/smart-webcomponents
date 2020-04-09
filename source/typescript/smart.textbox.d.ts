import  {BaseElement, Animation} from "./smart.element"

/**
 Defines a list item for ListBox, ComboBox, DropDownList.
*/
export interface ListItem extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
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
  displayMode?: ListItemDisplayMode;
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
/**
 Defines a group of list items.
*/
export interface ListItemsGroup extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * 
   * Default value: ""
   */
  label?: string;
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

/**
 TextBox is an input field with auto-suggest options.
*/
export interface TextBox extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines whether the text box will be focused on page load or not.
   * Default value: false
   */
  autoFocus?: boolean;
  /**
   * Determines the autocomplete mode. Auto complete modes filter the items from the dataSource and show only those that match the input.
   * Default value: manual
   */
  autoComplete?: AutoComplete;
  /**
   * Determines the delay before the drop down opens to show the matches from the auto complete operation.
   * Default value: 100
   */
  autoCompleteDelay?: number;
  /**
   * Determines the data source that will be loaded to the ComboBox. The dataSource can be an array of strings, numbers or objects where the attributes represent the properties of a List Item. For example label, value. It can also be a callback that returns an Array of items as previously described.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines whether an indicator will appear during filtering and remote item loading.
   * Default value: false
   */
  displayLoadingIndicator?: boolean;
  /**
   * Sets or gets the displayMember. The displayMember specifies the name of a property to display. The name is contained in the collection specified by the 'dataSource' property.
   * Default value: """"
   */
  displayMember?: string;
  /**
   * Determines how the characters are displayed inside the input.
   * Default value: default
   */
  displayMode?: TextBoxDisplayMode;
  /**
   * Determines the drop down parent. The drop down can be removed from the body of the element and continue to work in another container. This is usefull when one of the parents of the element doesn't allow overflowing, by settings this property to 'body' the drop down will be appended to the DOM and the drop down will open/close as usual. dropDownAppendTo can be a string representing the id of an HTML element on the page or a direct reference to that element. Reseting it back to null will take the drop down back to it's original place.
   * Default value: null
   */
  dropDownAppendTo?: any;
  /**
   * Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownHeight?: string | number;
  /**
   * Sets the maximum Height of the drop down. By default it's set to an empty string. In this case the maxHeight of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMaxHeight?: string | number;
  /**
   * Sets the maximum Width of the drop down. By default it's set to an empty string. In this case the maxWidth of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMaxWidth?: string | number;
  /**
   * Sets the minimum Height of the drop down. By default it's set to an empty string. In this case the minHeight of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMinHeight?: string | number;
  /**
   * Sets the minimum Width of the drop down. By default it's set to an empty string. In this case the minWidth of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMinWidth?: string | number;
  /**
   * Determines how the drop down is going to open.
   * Default value: default
   */
  dropDownOpenMode?: DropDownOpenMode;
  /**
   * If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. The purpose of the overlay is to make sure that clicking anywhere outside the drop down will will target the overlay and not the DOM.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Determines the placeholder for the drop down, displayed when there are no items in it.
   * Default value: "No Items"
   */
  dropDownPlaceholder?: string;
  /**
   * Determines the position of the drop down when opened.
   * Default value: auto
   */
  dropDownPosition?: DropDownPosition;
  /**
   * Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Determines the behavior of the element when Escape key is pressed.
   * Default value: none
   */
  escKeyMode?: EscKeyMode;
  /**
   * Specifies the behavior of "Enter" key.
   * Default value: submit
   */
  enterKeyBehavior?: EnterKeyBehavior;
  /**
   * The form element that the element is associated with (its "form owner"). The value of the attribute must be the ID of a form element in the same document.
   * Default value: ""
   */
  form?: string;
  /**
   * Sets additional helper text below the element. The hint is visible only when the element is focused.
   * Default value: null
   */
  hint?: any;
  /**
   * Determines the visibility of the horizontal Scroll bar thats inside the drop down.
   * Default value: auto
   */
  horizontalScrollBarVisibility?: HorizontalScrollBarVisibility;
  /**
   * Represents the property name of a List item. Determines the value of the input when a ListItem is selected. Usefull in cases where the user wants to display for example the value of an item instead of it's label. By default the label is displayed in the input.
   * Default value: ""
   */
  inputMember?: string;
  /**
   * Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * Sets the height for all list items. Used only when virtualization is enabled.
   * Default value: null
   */
  itemHeight?: number | null;
  /**
   * Determines the item width measuring algorithm.
   * Default value: auto
   */
  itemMeasureMode?: ListItemMeasureMode;
  /**
   * A getter that returns an array of all List items inside the drop down.
   * Default value: 
   */
  items?: any;
  /**
   * The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM.  It's used to set a customize the content of the list items.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Sets a little text label above the element.
   * Default value: ""
   */
  label?: string;
  /**
   * Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom.
   * Default value: "Loading..."
   */
  loadingIndicatorPlaceholder?: string;
  /**
   * Determines the position of the loading indicator.
   * Default value: center
   */
  loadingIndicatorPosition?: VerticalAlignment;
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
   * Sets or gets the maximum number of characters that the user can enter.
   * Default value: null
   */
  maxLength?: number;
  /**
   * Sets or gets the minimum number of characters that the user have to enter to trigger the auto complete functionality.
   * Default value: 2
   */
  minLength?: number;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language. 
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
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * Determines whether the drop down is opened or closed
   * Default value: false
   */
  opened?: boolean;
  /**
   * Determines the input's placeholder.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies that the user must fill the input before submitting a form with the element.
   * Default value: false
   */
  required?: boolean;
  /**
   * Specifies the message that will appear if required is set and no value is provided in the input.
   * Default value: ""
   */
  requiredMessage?: string;
  /**
   * Determines whether the content of the input will be selected on focus or not.
   * Default value: false
   */
  selectAllOnFocus?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
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
   * Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items.
   * Default value: """"
   */
  valueMember?: string;
  /**
   * Determines the visibility of the vertical scroll bar that's inside the drop down.
   * Default value: auto
   */
  verticalScrollBarVisibility?: VerticalScrollBarVisibility;
  /** 
   * This event is triggered when the value of the Text Box is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value, type)
   *  oldValue - The previous value before it was changed.
   *  value - The new value.
   *  type - The type of the event.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Closes the drop down. <strong>The drop down is used only when auto complete is enabled.</strong>
   */
  close(): void;
  /**
   * Opens the drop down. <strong>The drop down is used only when auto complete is enabled.</strong>
   */
  open(): void;
  /**
   * The method is used to reset the input back to it's initial value.
   */
  reset(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-text-box"): TextBox;
			querySelector(selectors: "smart-text-box"): TextBox | null;	
			querySelectorAll(selectors: "smart-text-box"): NodeListOf<TextBox>;
			getElementsByTagName(qualifiedName: "smart-text-box"): HTMLCollectionOf<TextBox>;
			getElementsByName(elementName: "smart-text-box"): NodeListOf<TextBox>;	
    }
}

/**Determines the autocomplete mode. Auto complete modes filter the items from the dataSource and show only those that match the input. */
export declare type AutoComplete = 'none' | 'auto' | 'inline' | 'manual';
/**Determines how the characters are displayed inside the input. */
export declare type TextBoxDisplayMode = 'default' | 'escaped';
/**Determines how the drop down is going to open. */
export declare type DropDownOpenMode = 'none' | 'default' | 'auto';
/**Determines the position of the drop down when opened. */
export declare type DropDownPosition = 'auto' | 'top' | 'bottom' | 'overlay-top' | 'overlay-center' | 'overlay-bottom' | 'center-bottom' | 'center-top';
/**Determines the behavior of the element when Escape key is pressed. */
export declare type EscKeyMode = 'none' | 'previousValue' | 'clearValue';
/**Specifies the behavior of "Enter" key. */
export declare type EnterKeyBehavior = 'submit' | 'clearOnSubmit';
/**Determines the visibility of the horizontal Scroll bar thats inside the drop down. */
export declare type HorizontalScrollBarVisibility = 'auto' | 'disabled' | 'hidden' | 'visible';
/**Determines the item width measuring algorithm. */
export declare type ListItemMeasureMode = 'auto' | 'precise';
/**Determines the position of the loading indicator. */
export declare type VerticalAlignment = 'bottom' | 'center' | 'top';
/**Determines the visibility of the vertical scroll bar that's inside the drop down. */
export declare type VerticalScrollBarVisibility = 'auto' | 'disabled' | 'hidden' | 'visible';
