import  {BaseElement, Animation} from "./smart.element"

export interface FilterPanelProperties {
  /**
   * Specifies or retrieves the current animation mode. When set to 'none', all animations are disabled. If assigned any other valid value, the corresponding animation mode is applied. Use this property to control whether animations are active or turned off for the element.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Specifies the set of operation buttons that will be displayed in the filter panel, allowing users to perform actions such as applying, resetting, or clearing filters. Adjusting this setting controls which interactive options are available to users directly within the filter interface.
   * Default value: cancel,clear,filter
   */
  buttons?: string[];
  /**
   * An array in 'excel' mode that specifies the dataset used to extract unique filter values. The expected format is a JSON array of objects, where each object represents a data row with key-value pairs corresponding to column names and their respective values. For example:'''json[  { "name": "Alice", "age": 30 },  { "name": "Bob", "age": 25 }]'''Unique filter values will be derived from the property values within these objects.
   * Default value: null
   */
  data?: number[];
  /**
   * Provides a detailed description of a data field that contains values resulting from the application of specific filter criteria, indicating that only data meeting those criteria are included in this field.
   * Default value: "null"
   */
  dataField?: string;
  /**
   * When the property is assigned an array, it specifies a custom set of filter values that will be displayed to the user, overriding the default filter list. If the property is assigned a callback function, it enables users to dynamically add their own filter values in addition to the default ones. In this latter case, you must also implement the evaluateFilterExpression function to handle evaluation of custom filters. Please note that the .dataSource property is only supported when mode is set to 'excel'.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Controls the visibility of the filter panel, allowing you to show or hide the panel as needed.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Callback function invoked during the filter panel operation, allowing developers to implement custom evaluation logic for filtering data. This function receives relevant data parameters and should return a boolean indicating whether an item meets the filter criteria.
   * Default value: null
   */
  evaluateFilterExpression?: any;
  /**
   * Specifies the type of filter to be applied, determining how data will be sorted, displayed, or restricted based on the selected filter criteria.
   * Default value: string
   */
  filterType?: FilterPanelFilterType | string;
  /**
   * Specifies the date format pattern applied when the filterType is set to 'Date'. This string determines how date values are parsed and displayed within the filter, following standard date formatting conventions (e.g., 'YYYY-MM-DD').
   * Default value: "d"
   */
  formatString?: string;
  /**
   * Gets or sets the unlockKey value used to activate and unlock access to the product’s features. The unlockKey is typically provided after purchase or authorization and is required to enable full product functionality.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language setting. This property determines which language is used for displaying content and should be used together with the messages property to provide the appropriate localized messages for users.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Specifies the names of the fields included in the filtered element. This determines which properties or attributes of the element are returned after applying the filter criteria.
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid ''!",
   *     "propertyInvalidValueType": "Invalid ''!",
   *     "methodInvalidValueType": "Invalid ''!",
   *     "methodInvalidArgumentsCount": "Invalid '' argument(s)!",
   *     "methodInvalidReturnType": "Invalid ''!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": "'.",
   *     "htmlTemplateNotSuported": ": Web Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "addCondition": "Add Condition",
   *     "addGroup": "Add Group",
   *     "and": "and",
   *     "blanks": "(Blanks)",
   *     "cancel": "Cancel",
   *     "clear": "Clear",
   *     "contains": "contains",
   *     "containsCaseSensitive": "contains (case sensitive)",
   *     "dateTabLabel": "DATE",
   *     "doesNotContain": "does not contain",
   *     "doesNotContainCaseSensitive": "does not contain (case sensitive)",
   *     "empty": "empty",
   *     "endsWith": "ends with",
   *     "endsWithCaseSensitive": "ends with (case sensitive)",
   *     "equal": "equal",
   *     "equalCaseSensitive": "equal (case sensitive)",
   *     "filter": "Filter",
   *     "greaterThan": "greater than",
   *     "greaterThanOrEqual": "greater than or equal",
   *     "lessThan": "less than",
   *     "lessThanOrEqual": "less than or equal",
   *     "notEmpty": "not empty",
   *     "notEqual": "not equal",
   *     "notNull": "not null",
   *     "null": "null ",
   *     "or": "or",
   *     "placeholderDate": "Enter date",
   *     "placeholderTime": "Enter time",
   *     "selectAll": "(Select All)",
   *     "showRows": "Show rows where:",
   *     "startsWith": "starts with",
   *     "startsWithCaseSensitive": "starts with (case sensitive)",
   *     "timeTabLabel": "TIME"
   *   }
   * }
   */
  messages?: any;
  /**
   * Defines the operational mode of the filter panel, specifying how the panel behaves or displays filters within the user interface.
   * Default value: default
   */
  mode?: FilterPanelMode | string;
  /**
   * If the element is set to readonly, users can view its content but cannot modify, edit, or interact with the element’s value. However, the element can still receive focus and its content can be selected or copied.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Specifies the visual theme applied to the element. The selected theme controls the overall appearance, including colors, fonts, and styling, to ensure a consistent look and feel across the interface.
   * Default value: ""
   */
  theme?: string;
  /**
   * When set to true, the element becomes unfocusable, meaning it cannot receive keyboard or mouse focus during user interaction or through JavaScript.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 The filter panel allows you to customize and display the applied filter expressions.
*/
export interface FilterPanel extends BaseElement, FilterPanelProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the user cancels or clears the current set of applied filters, discarding any active filtering criteria.
	* @param event. The custom event.    */
  onCancel: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered whenever all active filtering criteria are removed, resulting in the display of the complete, unfiltered dataset. It occurs specifically when the user or application clears the current filters, resetting the view to its default state.
	* @param event. The custom event.    */
  onClear?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the user applies new settings or changes to the filter panel. It occurs after the filter options have been selected and confirmed, signaling that the current filter criteria should be used to update displayed data or content accordingly.
	* @param event. The custom event.    */
  onFilter?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Removes all active filters currently applied, returning the view to its unfiltered state and displaying the complete set of data.
   */
  cancel(): void;
  /**
   * Removes all active filters and displays the complete, unfiltered data set.
   */
  clear(): void;
  /**
   * Assesses the given filter condition by applying it to a specified dataset or input, and determines whether the data meets the criteria defined by the filter. Returns a boolean value indicating if the filter evaluates to true or false for the provided input.
   * @param {any} value. The evalueated element in filter panel.
   */
  evaluate(value: any): void;
  /**
   * Applies the currently selected filter criteria to update and display the relevant data set.
   */
  filter(): void;
  /**
   * Retrieves the current state of all active filters, including their selected values and configuration settings. This provides an overview of how data is being filtered at the present moment.
   * @returns {any}
   */
  getState(): any;
  /**
   * Restores a previously saved filter configuration, applying all selected filter options and criteria to return the interface to its earlier state.
   * @param {any} state. An object returned by the method getState.
   */
  loadState(state: any): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-filter-panel"): FilterPanel;
        querySelector(selectors: "smart-filter-panel"): FilterPanel | null;
        querySelectorAll(selectors: "smart-filter-panel"): NodeListOf<FilterPanel>;
        getElementsByTagName(qualifiedName: "smart-filter-panel"): HTMLCollectionOf<FilterPanel>;
        getElementsByName(elementName: "smart-filter-panel"): NodeListOf<FilterPanel>;
    }
}

/**Specifies the type of filter to be applied, determining how data will be sorted, displayed, or restricted based on the selected filter criteria. */
export declare type FilterPanelFilterType = 'numeric' | 'string' | 'date' | 'boolean';
/**Defines the operational mode of the filter panel, specifying how the panel behaves or displays filters within the user interface. */
export declare type FilterPanelMode = 'default' | 'excel';
