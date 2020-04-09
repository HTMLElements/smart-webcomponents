import  {BaseElement, Animation} from "./smart.element"

/**
 Defines a dialog for customization of filtering, sorting.
*/
export interface CustomizationDialog extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Array with filtered fields and their settings.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property.
   * Default value: ""
   */
  displayMember?: string;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets whether is enabled/disabled filtering tab.
   * Default value: false
   */
  filtering?: boolean;
  /**
   * Sets whether is enabled/disabled grouping tab.
   * Default value: false
   */
  grouping?: boolean;
  /**
   * Set's the buttons that will be visible in the header section.
   * Default value: apply,close
   */
  headerButtons?: string[];
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback, related to localization module. 
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
   * Sets or gets whether the columns reordering is active.
   * Default value: false
   */
  reorder?: boolean;
  /**
   * Sets or gets the tab, wich is selected on initialization.
   * Default value: 0
   */
  selectedTab?: number;
  /**
   * Sets whether is enabled/disabled sorting tab.
   * Default value: false
   */
  sorting?: boolean;
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
   * Sets or gets element's value. It's represente by object, contained
   * Default value: null
   */
  value?: any;
  /**
   * Determines the value member of an item. Stored as value in the item object.
   * Default value: ""
   */
  valueMember?: string;
  /**
   * Sets or gets whether the columns of the element could be hidden.
   * Default value: false
   */
  visibility?: boolean;
  /** 
   * This event is triggered when the dialog is opened.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the dialog is closed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the data in the value property is changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the dialog is closed via clicking the apply button.
	* @param event. The custom event.    */
  onApply?: ((this: any, ev: Event) => any) | null;
  /**
   * Opens the dialog
   */
  open(): void;
  /**
   * Closes the dialog.
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

