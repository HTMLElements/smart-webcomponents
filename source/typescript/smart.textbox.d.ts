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

export interface TextBoxProperties {
  /**
   * Controls the animation mode for the component. You can retrieve the current mode or assign a new one. Setting this property to 'none' will disable all animations.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Specifies whether the text box should automatically receive keyboard focus when the page loads, allowing users to start typing immediately without clicking inside the box.
   * Default value: false
   */
  autoFocus?: boolean;
  /**
   * Specifies the autocomplete mode used to filter and display suggestions from the dataSource. The selected autocomplete mode determines how input text is matched against the available items, showing only those entries that meet the criteria—for example, items that start with, contain, or exactly match the user's input. This setting helps control the relevance and behavior of suggestion lists shown to the user while typing.
   * Default value: manual
   */
  autoComplete?: AutoComplete | string;
  /**
   * Specifies the duration (in milliseconds) to wait after the user stops typing before displaying the dropdown with autocomplete suggestions. This delay helps control how quickly the matching results appear, improving performance and user experience by preventing unnecessary searches while the user is still typing.
   * Default value: 100
   */
  autoCompleteDelay?: number;
  /**
   * Specifies the data source that populates the ComboBox options. The dataSource property accepts multiple types:- 'Array of strings or numbers:' Each item will be displayed as both the label and value of a list item.- 'Array of objects:' Each object should contain properties—such as label (displayed text) and value (item value)—that define the corresponding list item’s display and value.- 'Callback function:' You can provide a function that returns an array of items in either of the above forms. This allows for dynamic or asynchronous data loading.This flexible approach lets you easily integrate static lists, complex objects, or data fetched from external sources into the ComboBox.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Determines whether the element is active and interactive (enabled) or inactive and unresponsive to user interactions (disabled). When set to "disabled," the element cannot be focused, clicked, or edited by the user.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies whether a visual indicator (such as a loading spinner or progress bar) will be displayed while filtering data or loading items from a remote source. This helps inform users that a background operation is in progress.
   * Default value: false
   */
  displayLoadingIndicator?: boolean;
  /**
   * Sets or retrieves the displayMember property. The displayMember determines which property of each object in the data source collection (defined by the 'dataSource' property) will be used for display purposes in the user interface. By specifying the name of a property here, you control which value from each data source item is shown to users (e.g., displaying a "name" property from a list of user objects).
   * Default value: """"
   */
  displayMember?: string;
  /**
   * Specifies the visual presentation of characters within the input field, such as whether the characters are visible as plain text, masked (e.g., as password dots), or formatted in a particular style. This attribute controls how users see the inputted content while typing or reviewing their entries.
   * Default value: default
   */
  displayMode?: TextBoxDisplayMode | string;
  /**
   * Specifies the parent container to which the dropdown menu is appended in the DOM. By default, the dropdown is rendered within its original parent element. However, if an ancestor element has restricted overflow (e.g., 'overflow: hidden' or 'overflow: auto'), the dropdown may be clipped and not display correctly. To resolve this, you can set the dropDownAppendTo property to ''body'', the ID of a specific HTML element, or a direct reference to an HTML element. When set, the dropdown will be moved to the specified container in the DOM, ensuring it displays properly regardless of overflow constraints in its ancestors. To restore the dropdown to its original parent, reset this property to null. This feature is especially useful for ensuring that dropdowns are visible and functional in complex layouts where parent elements limit visibility due to CSS overflow properties.
   * Default value: null
   */
  dropDownAppendTo?: any;
  /**
   * Specifies the height of the dropdown menu. By default, this property is set to an empty string, which means the dropdown's height will be determined by a CSS variable. To customize the dropdown's height directly, you can assign a specific value (e.g., "200px" or "50%") to this property. Otherwise, leaving it empty enables the component to use the height defined by the associated CSS variable.
   * Default value: 
   */
  dropDownHeight?: string | number;
  /**
   * Defines the maximum height for the dropdown menu. If no value is set (default is an empty string), the dropdown’s maximum height will be determined by a corresponding CSS variable instead. This allows for dynamic styling via CSS, while still providing the option to specify a fixed maximum height directly through this property.
   * Default value: 
   */
  dropDownMaxHeight?: string | number;
  /**
   * Specifies the maximum width of the dropdown menu. By default, this property is set to an empty string, meaning that the dropdown's max-width is determined by a corresponding CSS variable. If a specific value (such as '300px' or '100%') is provided, it will override the CSS variable and directly set the maximum width of the dropdown.
   * Default value: 
   */
  dropDownMaxWidth?: string | number;
  /**
   * Defines the minimum height of the dropdown menu. By default, this property is set to an empty string (""), which means the minimum height is not explicitly specified in the component and will instead be determined by the value of a related CSS variable. If a specific value (such as "200px" or "2rem") is provided, it will override the CSS variable and set the minimum height of the dropdown directly.
   * Default value: 
   */
  dropDownMinHeight?: string | number;
  /**
   * Specifies the minimum width of the dropdown menu. By default, this property is set to an empty string, which means the dropdown's minimum width is determined by a corresponding CSS variable. If you provide a specific value (such as '200px' or '20rem'), it will override the CSS variable and set the dropdown's minimum width accordingly.
   * Default value: 
   */
  dropDownMinWidth?: string | number;
  /**
   * Specifies the direction or animation style in which the dropdown menu appears when activated (e.g., opens upwards, downwards, or with a fade effect).
   * Default value: default
   */
  dropDownOpenMode?: DropDownOpenMode | string;
  /**
   * When this property is enabled, opening the element’s dropdown will create a transparent overlay that covers the entire area between the dropdown and the rest of the webpage. This overlay ensures that any clicks outside the dropdown are intercepted by the overlay itself, rather than interacting with underlying DOM elements. As a result, clicking outside the dropdown can be handled consistently—for example, to close the dropdown—without triggering unintended interactions elsewhere on the page.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Specifies the placeholder text that appears in the dropdown menu when there are no available items to display. This text provides guidance or context to users, indicating that the dropdown is currently empty.
   * Default value: "No Items"
   */
  dropDownPlaceholder?: string;
  /**
   * Specifies the alignment and placement of the dropdown menu relative to its trigger element when the dropdown is opened, allowing you to control where the menu appears on the screen (e.g., above, below, left, or right of the trigger).
   * Default value: auto
   */
  dropDownPosition?: DropDownPosition | string;
  /**
   * Specifies the width of the dropdown menu. By default, this property is set to an empty string (""). When left empty, the dropdown's width is determined by a corresponding CSS variable, allowing for flexible styling through external or theme-based CSS. To explicitly set a custom width, provide a valid CSS width value (e.g., "200px", "50%").
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Specifies how the element responds when the Escape key is pressed, such as closing a dialog, dismissing a modal, or performing a custom action.
   * Default value: none
   */
  escKeyMode?: EscKeyMode | string;
  /**
   * Defines how the "Enter" key functions within the application, such as whether it submits a form, inserts a new line, or triggers a specific action, depending on the context.
   * Default value: submit
   */
  enterKeyBehavior?: EnterKeyBehavior | string;
  /**
   * Specifies the form element with which this element is associated, known as its "form owner." The value of this attribute must be the ID of a  element present in the same document. This allows the element to be associated with a specific form, even if it is not nested directly within the form’s markup.
   * Default value: ""
   */
  form?: string;
  /**
   * Provides supplemental helper text displayed beneath the element. This hint appears exclusively when the element is focused, offering contextual guidance to the user during interaction.
   * Default value: null
   */
  hint?: any;
  /**
   * Controls whether the horizontal scroll bar within the dropdown menu is visible. This setting allows you to enable or disable horizontal scrolling for dropdown content that extends beyond the visible area.
   * Default value: auto
   */
  horizontalScrollBarVisibility?: HorizontalScrollBarVisibility | string;
  /**
   * Represents the property key of a List item's object that specifies which value should be displayed in the input field when a ListItem is selected. This property is useful when you want to show a value other than the default label—such as a unique identifier or another attribute—within the input. By default, the item's label is shown. Use this option to customize the displayed value based on a different property from your data objects.
   * Default value: ""
   */
  inputMember?: string;
  /**
   * Defines the purpose of the input field and specifies the type of data expected, providing guidance to browsers and user agents for offering autofill suggestions. This property maps directly to the standard HTML autocomplete attribute, allowing developers to control whether and how a browser can automatically fill in the field based on the user's stored information. Possible values include generic options like 'on' and 'off', as well as more specific data types such as 'name', 'organization', 'email', 'street-address', and others, enabling enhanced user experience and data accuracy in forms.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * Specifies the height (in pixels) for each list item when rendering the list.  This property is only applicable if list virtualization is enabled, as it allows the component to accurately calculate and display only the visible items for improved performance.
   * Default value: null
   */
  itemHeight?: number | null;
  /**
   * Specifies the algorithm used to calculate the width of each item, determining how item widths are measured and displayed within the layout. This setting influences whether widths are fixed, dynamic, or adapt based on content or container size.
   * Default value: auto
   */
  itemMeasureMode?: ListItemMeasureMode | string;
  /**
   * A getter that retrieves and returns an array containing all the list item elements (e.g., '' elements) currently present within the dropdown menu. This allows easy access to all items displayed in the dropdown for further manipulation or inspection.
   * Default value: 
   */
  items?: any;
  /**
   * The itemTemplate property is a string specifying the id of an HTMLTemplateElement present in the DOM. This template is used to define and customize the structure and content of each item rendered within the list. By referencing the id of an HTMLTemplateElement, you can control how individual list items are displayed, allowing for flexible and reusable item layouts.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Displays a small text label positioned above the element, typically used to provide additional context or information about the element’s purpose.
   * Default value: ""
   */
  label?: string;
  /**
   * Specifies the text that appears alongside the loading indicator when the loader is visible and positioned at either the top or bottom of the container. This text provides context or status information to users while the loading process is ongoing.
   * Default value: "Loading..."
   */
  loadingIndicatorPlaceholder?: string;
  /**
   * Specifies the screen location where the loading indicator will be displayed (e.g., top, bottom, center, etc.), allowing developers to control the visual placement of the loading element within the application's interface.
   * Default value: center
   */
  loadingIndicatorPosition?: VerticalAlignment | string;
  /**
   * Defines or retrieves the unlockKey, a unique code or token used to grant access to the product's features or functionality.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Sets or retrieves the current language for localization purposes. This property is used together with the messages property, which contains language-specific content or translations. Adjusting the language will determine which set of messages is displayed or utilized within the application.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A callback function that allows you to define a custom format for messages returned by the Localization Module. This enables you to modify or enhance the localized messages—such as adding prefixes, changing text structure, or injecting dynamic values—before they are displayed to the user.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Specifies or retrieves the maximum number of characters allowed for user input in a text field. This limits how many characters a user can type or paste into the field.
   * Default value: null
   */
  maxLength?: number;
  /**
   * Specifies or retrieves the minimum number of characters a user must type before the auto-complete feature is activated and suggestions are displayed.
   * Default value: 2
   */
  minLength?: number;
  /**
   * Defines or retrieves an object containing the set of strings (such as labels, tooltips, button text, and messages) used throughout the widget interface, allowing these strings to be localized for different languages. This property works together with the language property to ensure the widget’s text content is displayed in the appropriate language for users.
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
   * Sets or retrieves the name attribute of the element. The name attribute specifies a key associated with the element's value when submitting HTML forms, enabling server-side identification and processing of submitted data. This is essential for form controls such as inputs, selects, and textareas.
   * Default value: ""
   */
  name?: string;
  /**
   * Indicates whether the dropdown menu is currently expanded (open) and visible to the user, or collapsed (closed) and hidden from view.
   * Default value: false
   */
  opened?: boolean;
  /**
   * Specifies the placeholder text that appears inside the input field when it is empty, providing guidance or an example of the expected input to the user.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Prevents any user interaction with the element, disabling actions such as clicking, focusing, hovering, or keyboard input. The element will not respond to any user events while this setting is applied.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or retrieves a value that specifies whether the element’s content is aligned for right-to-left (RTL) text direction, supporting languages and locales such as Arabic or Hebrew. When enabled, the element’s layout and text flow will be adjusted to display content appropriately for RTL reading order.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Indicates that the input field is required, meaning the user must provide a value in this field before the form can be submitted successfully. If the input is left empty, the form submission will be blocked and the user will be prompted to complete the required information.
   * Default value: false
   */
  required?: boolean;
  /**
   * Defines the custom error message displayed to users when the input is marked as required but no value has been entered. If the required field is left empty, this message will be shown to prompt the user to provide the necessary input.
   * Default value: ""
   */
  requiredMessage?: string;
  /**
   * Specifies whether the entire content of the input field should automatically be highlighted (selected) when the input receives focus, allowing users to easily replace or copy the content.
   * Default value: false
   */
  selectAllOnFocus?: boolean;
  /**
   * Specifies the theme to be applied, which controls the overall appearance and visual style of the element, including colors, fonts, and other stylistic details.
   * Default value: ""
   */
  theme?: string;
  /**
   * If set to true, the element will be excluded from the tab order and cannot receive keyboard or programmatic focus. This means users will not be able to navigate to the element using the Tab key or set focus to it via scripts.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets a new value for the element or retrieves its current value, depending on how the method is used. Useful for reading or updating the content, input, or state of form elements such as text fields, checkboxes, or select menus.
   * Default value: ""
   */
  value?: string;
  /**
   * Specifies which property of each item object represents its value. The valueMember setting is particularly useful when binding the ListBox to data from a JSON file as its dataSource and you need to designate a specific property in the JSON objects to be used as the item's value. This is similar to how groupMember works, but instead of grouping items, valueMember tells the ListBox which property to use for the underlying value of each list item. For example, if your JSON objects have an "id" property, setting valueMember to "id" will store the value of the "id" property for each item in the ListBox.
   * Default value: """"
   */
  valueMember?: string;
  /**
   * Controls whether the vertical scroll bar within the dropdown menu is visible. This property allows you to specify if users can scroll vertically to view additional dropdown options when the content overflows the visible area.
   * Default value: auto
   */
  verticalScrollBarVisibility?: VerticalScrollBarVisibility | string;
}
/**
 TextBox is an input field with auto-suggest options.
*/
export interface TextBox extends BaseElement, TextBoxProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the value in the Text Box changes and is confirmed by the user. Specifically, it fires under two conditions:  <br/>1. When the user moves focus away from the Text Box (on blur).  <br/>2. When the user presses the 'Enter' key while the Text Box is focused.  <br/><br/>This ensures that the event only occurs after the user has finished editing the text, rather than on every keystroke.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value, type)
   *  oldValue - The previous value before it was changed.
   *  value - The new value.
   *  type - The type of the event.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered each time a user releases a key (on the keyup event) within the TextBox, but only if the content of the TextBox has changed since the previous event.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previous value before it was changed.
   *  value - The new value.
   */
  onChanging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Closes the drop-down menu associated with the input field. <strong>Note: The drop-down appears only when auto-complete functionality is enabled, allowing users to select from suggested options.</strong>
   */
  close(): void;
  /**
   * Expands the drop-down menu, allowing users to view and select available options. <strong>This drop-down menu is displayed exclusively when the autocomplete feature is enabled, providing relevant suggestions based on user input.</strong>
   */
  open(): void;
  /**
   * This method resets the input field to its original, initial value, effectively clearing any changes made by the user and restoring the input to its default state as set when the component or page first loaded.
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

/**Specifies the autocomplete mode used to filter and display suggestions from the dataSource. The selected autocomplete mode determines how input text is matched against the available items, showing only those entries that meet the criteria—for example, items that start with, contain, or exactly match the user's input. This setting helps control the relevance and behavior of suggestion lists shown to the user while typing. */
export declare type AutoComplete = 'none' | 'auto' | 'inline' | 'manual';
/**Specifies the visual presentation of characters within the input field, such as whether the characters are visible as plain text, masked (e.g., as password dots), or formatted in a particular style. This attribute controls how users see the inputted content while typing or reviewing their entries. */
export declare type TextBoxDisplayMode = 'default' | 'escaped';
/**Specifies the direction or animation style in which the dropdown menu appears when activated (e.g., opens upwards, downwards, or with a fade effect). */
export declare type DropDownOpenMode = 'none' | 'default' | 'auto';
/**Specifies the alignment and placement of the dropdown menu relative to its trigger element when the dropdown is opened, allowing you to control where the menu appears on the screen (e.g., above, below, left, or right of the trigger). */
export declare type DropDownPosition = 'auto' | 'top' | 'bottom' | 'overlay-top' | 'overlay-center' | 'overlay-bottom' | 'center-bottom' | 'center-top';
/**Specifies how the element responds when the Escape key is pressed, such as closing a dialog, dismissing a modal, or performing a custom action. */
export declare type EscKeyMode = 'none' | 'previousValue' | 'clearValue';
/**Defines how the "Enter" key functions within the application, such as whether it submits a form, inserts a new line, or triggers a specific action, depending on the context. */
export declare type EnterKeyBehavior = 'submit' | 'clearOnSubmit';
/**Controls whether the horizontal scroll bar within the dropdown menu is visible. This setting allows you to enable or disable horizontal scrolling for dropdown content that extends beyond the visible area. */
export declare type HorizontalScrollBarVisibility = 'auto' | 'disabled' | 'hidden' | 'visible';
/**Specifies the algorithm used to calculate the width of each item, determining how item widths are measured and displayed within the layout. This setting influences whether widths are fixed, dynamic, or adapt based on content or container size. */
export declare type ListItemMeasureMode = 'auto' | 'precise';
/**Specifies the screen location where the loading indicator will be displayed (e.g., top, bottom, center, etc.), allowing developers to control the visual placement of the loading element within the application's interface. */
export declare type VerticalAlignment = 'bottom' | 'center' | 'top';
/**Controls whether the vertical scroll bar within the dropdown menu is visible. This property allows you to specify if users can scroll vertically to view additional dropdown options when the content overflows the visible area. */
export declare type VerticalScrollBarVisibility = 'auto' | 'disabled' | 'hidden' | 'visible';
