import  {BaseElement, Animation} from "./smart.element"

/**
 SortPanel allows you to add and remove sort columns and update the sort order of the columns.
*/
export interface SortPanel extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets the the position of the close button of sort panel items.
   * Default value: left
   */
  closeButtonPosition?: SortPanelCloseButtonPosition;
  /**
   * Determines the data source that will be loaded to the sort panel.Each member of the dataSource array is an object with the following fields:dataField - the dataField of the column to be sorted.dataType - the data type of the column to be sorted.label - the column label to be displayed in the column selection input.icon - a specific class to be applied to the respective item in the column selection input.sortDirection - the sort direction to be applied. Possible values: 'ascending' and 'descending'.sortIndex - the sort order of columns. If this value is -1, the column will not be initially sorted.
   * Default value: null
   */
  dataSource?: {label: string, dataField: string, dataType: string, sortDirection: string, sortIndex: number}[];
  /**
   * Enables or disables the sort panel.
   * Default value: false
   */
  disabled?: boolean;
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
   *     "apply": "Apply",
   *     "booleanFirst": "?",
   *     "booleanLast": "?",
   *     "cancel": "Cancel",
   *     "dateFirst": "1",
   *     "dateLast": "9",
   *     "from": "from",
   *     "numberFirst": "1",
   *     "numberLast": "9",
   *     "pickAnother": "Pick another field to sort by",
   *     "firstBy": "Sort by",
   *     "stringFirst": "A",
   *     "stringLast": "Z",
   *     "thenBy": "then by"
   *   }
   * }
   */
  messages?: any;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when the "Apply" button is clicked.
	* @param event. The custom event.    */
  onApply?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the "Cancel" button is clicked.
	* @param event. The custom event.    */
  onCancel: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-sort-panel"): SortPanel;
			querySelector(selectors: "smart-sort-panel"): SortPanel | null;	
			querySelectorAll(selectors: "smart-sort-panel"): NodeListOf<SortPanel>;
			getElementsByTagName(qualifiedName: "smart-sort-panel"): HTMLCollectionOf<SortPanel>;
			getElementsByName(elementName: "smart-sort-panel"): NodeListOf<SortPanel>;	
    }
}

/**Sets or gets the the position of the close button of sort panel items. */
export declare type SortPanelCloseButtonPosition = 'left' | 'right';
