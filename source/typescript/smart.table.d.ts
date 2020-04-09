import  {BaseElement, Animation} from "./smart.element"

/**
 Table is an alternative of the HTMLTableElement.
*/
export interface Table extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Disables the interaction with the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Table columns
   * Default value: null
   */
  columns?: any;
  /**
   * Determines the data source of the table component.
   * Default value: 
   */
  dataSource?: any;
  /**
   * Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale. 
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid '!",
   *     "propertyInvalidValueType": "Invalid '!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": ".",
   *     "htmlTemplateNotSuported": ": Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * The name of the element. Used when submiting data inside a Form.
   * Default value: ""
   */
  name?: string;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the sorting mode of the Table.
   * Default value: none
   */
  sortMode?: TableSortMode;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Clears the Table sorting.
   */
  clearSort(): void;
  /**
   * Binds the table to the data source or rebinds it.
   */
  dataBind(): void;
  /**
   * Focuses the table. 
   */
  focus(): void;
  /**
   * Refreshes the table.
   */
  refresh(): void;
  /**
   * Sorts the Table by a column.
   * @param {string} columnDataField. Column field name.
   * @param {string} sortOrder?. Sort order.
   */
  sortBy(columnDataField: string, sortOrder?: string): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-table"): Table;
			querySelector(selectors: "smart-table"): Table | null;	
			querySelectorAll(selectors: "smart-table"): NodeListOf<Table>;
			getElementsByTagName(qualifiedName: "smart-table"): HTMLCollectionOf<Table>;
			getElementsByName(elementName: "smart-table"): NodeListOf<Table>;	
    }
}

/**Determines the sorting mode of the Table. */
export declare type TableSortMode = 'none' | 'one' | 'many';
