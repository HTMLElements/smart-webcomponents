import  {BaseElement, Animation} from "./smart.element"

export interface CustomizationDialogProperties {
  /**
   * Sets or retrieves the animation mode for the component. When this property is set to 'none', all animations are disabled. If set to other supported values, the corresponding animation effects will be enabled for transitions or interactions.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * An array containing the filtered fields, each with its associated configuration settings. Each element in the array represents a specific field and includes detailed settings such as field type, validation rules, display options, and other relevant properties.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enhances or retrieves the value of the 'displayMember' property. The 'displayMember' determines which property of each object—within the collection referenced by the 'dataSource' property—will be displayed in the UI component. Set this property to the name of the object field you want to show as the display text for each item in the collection.
   * Default value: ""
   */
  displayMember?: string;
  /**
   * Controls whether the element is active and interactive (enabled) or inactive and unresponsive to user input (disabled).
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines whether the filtering tab is enabled or disabled, allowing you to control its availability to users. When set to true, the filtering tab will be accessible; when false, it will be hidden or inactive.
   * Default value: false
   */
  filtering?: boolean;
  /**
   * Controls whether the tab grouping feature is enabled or disabled. When enabled, users can organize multiple tabs into groups for improved navigation and management. When disabled, tab grouping functionality will not be available.
   * Default value: false
   */
  grouping?: boolean;
  /**
   * Specifies which buttons will be displayed in the header section. Provide an array of button identifiers to control the visibility and order of header buttons.
   * Default value: apply,close
   */
  headerButtons?: string[];
  /**
   * Sets or retrieves the unlockKey, a unique code used to authorize and grant access to the product’s features or content.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Sets or retrieves the current language code (e.g., "en", "fr", "es") used for localization. This property works together with the messages property to provide language-specific content or translations. When the language is set, the corresponding localized messages from the messages property are used throughout the application.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function associated with the localization module, typically used to handle language changes, translations, or localization-related events within the application.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines an object containing customizable strings used in the widget's user interface that support localization. This property allows you to set or retrieve these strings to provide translations or alternative text in different languages. Typically used together with the locale property to enable multi-language support within the widget.
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
   *     "ambiguousIndexes": "jqx-tabs: Initially set jqx-tab-item indexes are ambiguous and are ignored in favour of the HTML structure.",
   *     "detailsObjectRequired": "jqx-tabs: The method \"insert\" requires a details Object to be passed as a second argument.",
   *     "invalidIndex": "jqx-tabs: '' method accepts an index of type number.",
   *     "referenceNodeNotChild": "jqx-tabs: Passed  is not part of this jqx-tabs element.",
   *     "tabItemRequired": "jqx-tabs: The method '' requires a \"jqx-tab-item\" element to be passed as an argument.",
   *     "sorting": "SORTING",
   *     "grouping": "GROUPING",
   *     "filtering": "FILTERING",
   *     "columnChooser": "COLUMN CHOOSER",
   *     "applyButton": "Apply",
   *     "closeButton": "Close",
   *     "columnsToSort": "Columns to Sort",
   *     "columnsToGroup": "Columns to Group",
   *     "placeholderSorting": "No sorting applied",
   *     "placeholderGrouping": "No grouping applied",
   *     "and": "And",
   *     "notand": "Not And",
   *     "or": "Or",
   *     "notor": "Not Or",
   *     "=": "Equals",
   *     "<>": "Does not equal",
   *     ">": "Greater than",
   *     ">=": "Greater than or equal to",
   *     "<": "Less than",
   *     "<=": "Less than or equal to",
   *     "startswith": "Starts with",
   *     "endswith": "Ends with",
   *     "contains": "Contains",
   *     "notcontains": "Does not contain",
   *     "isblank": "Is blank",
   *     "isnotblank": "Is not blank"
   *   }
   * }
   */
  messages?: any;
  /**
   * Specifies whether column reordering is enabled or retrieves the current state. When active, users can change the order of columns by dragging and dropping them.
   * Default value: false
   */
  reorder?: boolean;
  /**
   * Sets or retrieves the tab that is selected by default when the component is first initialized. This determines which tab is active and visible to the user upon loading.
   * Default value: 0
   */
  selectedTab?: number;
  /**
   * Determines whether the sorting tab is enabled or disabled. When set to true, the sorting tab will be available for user interaction; when set to false, the sorting tab will be hidden or inactive.
   * Default value: false
   */
  sorting?: boolean;
  /**
   * Specifies the theme to be applied to the element. The theme controls the overall appearance, including colors, fonts, and styling, ensuring a consistent visual presentation across the user interface.
   * Default value: ""
   */
  theme?: string;
  /**
   * When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible via the tab key or programmatic focus methods.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * "Sets or retrieves the value of the element. The value is represented as an object, which may contain various properties relevant to the element's data or state."
   * Default value: null
   */
  value?: any;
  /**
   * Specifies which property of the item object should be used as the item's value. The designated property will be accessed and stored as the value for each item in the list or collection. For example, if set to "id," the value from item.id will be used as the item's value.
   * Default value: ""
   */
  valueMember?: string;
  /**
   * Determines whether the columns within the element can be toggled between visible and hidden states. When set, it controls the ability to programmatically or interactively hide or show individual columns. When retrieved, it returns the current configuration indicating if column visibility can be altered.
   * Default value: false
   */
  visibility?: boolean;
}
/**
 Defines a dialog for customization of filtering, sorting.
*/
export interface CustomizationDialog extends BaseElement, CustomizationDialogProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered each time the dialog component becomes visible to the user, such as when it is opened programmatically or through user interaction.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the dialog component is closed, whether by user interaction (such as clicking a close button or pressing the Escape key) or programmatically through code. Use this event to perform cleanup actions, save state, or execute any logic that should occur after the dialog is dismissed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered whenever the value of the value property is modified, either by user interaction or programmatic updates. It allows your application to respond in real time to changes in the data, ensuring that any dependent logic or UI is kept in sync with the current value.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when the dialog is closed as a result of the user clicking the "Apply" button. It allows you to perform actions or process data after the user confirms their selections or changes within the dialog by applying them.
	* @param event. The custom event.    */
  onApply?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Opens a modal dialog window, allowing users to interact with additional content or options without navigating away from the current page.
   */
  open(): void;
  /**
   * Closes the dialog window, dismissing its content and returning focus to the underlying page or application. This action may also trigger any associated cleanup or callback functions.
   */
  close(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-customization-dialog"): CustomizationDialog;
        querySelector(selectors: "smart-customization-dialog"): CustomizationDialog | null;
        querySelectorAll(selectors: "smart-customization-dialog"): NodeListOf<CustomizationDialog>;
        getElementsByTagName(qualifiedName: "smart-customization-dialog"): HTMLCollectionOf<CustomizationDialog>;
        getElementsByName(elementName: "smart-customization-dialog"): NodeListOf<CustomizationDialog>;
    }
}

