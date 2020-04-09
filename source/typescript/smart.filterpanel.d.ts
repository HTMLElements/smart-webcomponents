import  {BaseElement, Animation} from "./smart.element"

/**
 The filter panel allows you to customize and display the applied filter expressions.
*/
export interface FilterPanel extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Defines which operation buttons will be shown in the filter panel
   * Default value: cancel,clear,filter
   */
  buttons?: string[];
  /**
   * Array in mode: 'excel', determines the data to extract unique filter values from. The expected format of the data is an array of objects with key-value pairs (JSON array)
   * Default value: null
   */
  data?: number[];
  /**
   * Describes filtered data field.
   * Default value: "null"
   */
  dataField?: string;
  /**
   * If set to an array, determines a custom collection of filter values to be displayed. If set to a callback function, the user can add custom filter values dynamically to the default filter values (in this case, the evaluateFilterExpression function must also be implemented) .dataSource  is only available in mode: 'excel'.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables filter panel.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Callback function, used for custom evaluations in filter panel.
   * Default value: null
   */
  evaluateFilterExpression?: any;
  /**
   * Defines which filter type is used.
   * Default value: string
   */
  filterType?: FilterPanelFilterType;
  /**
   * Format string used in filterType 'Date'.
   * Default value: "d"
   */
  formatString?: string;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Defines field names of the filtered element.
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
   * Desfines filter panel's  mode
   * Default value: default
   */
  mode?: FilterPanelMode;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
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
   * This event is triggered when the current filtering is discarted.
	* @param event. The custom event.    */
  onCancel: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the current filtering is cleared.
	* @param event. The custom event.    */
  onClear?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when filter panel settings are applied.
	* @param event. The custom event.    */
  onFilter?: ((this: any, ev: Event) => any) | null;
  /**
   * Discards current filtering.
   */
  cancel(): void;
  /**
   * Clears current filtering.
   */
  clear(): void;
  /**
   * Evaluates a filter.
   * @param {any} value. The evalueated element in filter panel.
   */
  evaluate(value: any): void;
  /**
   * Applies current filtering.
   */
  filter(): void;
  /**
   * Gets the current filter state.
   * @returns {any}
   */
  getState(): any;
  /**
   * Loads a previously saved filter state.
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

/**Defines which filter type is used. */
export declare type FilterPanelFilterType = 'numeric' | 'string' | 'date' | 'boolean';
/**Desfines filter panel's  mode */
export declare type FilterPanelMode = 'default' | 'excel';
