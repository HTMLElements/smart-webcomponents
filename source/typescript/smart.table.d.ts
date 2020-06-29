import  {BaseElement, Animation} from "./smart.element"

export interface TableProperties {
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Describes the columns properties.
   * Default value: null
   */
  columns?: TableColumn[];
  /**
   * Sets or gets whether the reordering of columns is enabled.
   * Default value: false
   */
  columnReorder?: boolean;
  /**
   * Determines the data source of the table component.
   * Default value: 
   */
  dataSource?: any;
  /**
   * Disables the interaction with the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets whether the Table can be edited.
   * Default value: false
   */
  editing?: boolean;
  /**
   * Sets or gets the edit mode.
   * Default value: cell
   */
  editMode?: TableEditMode;
  /**
   * Sets or gets whether the Table can be filtered. By default, the Table can be filtered by all string and numeric columns through a filter input in the header.
   * Default value: false
   */
  filtering?: boolean;
  /**
   * Sets or gets whether the Table can be filtered via a filter row.
   * Default value: false
   */
  filterRow?: boolean;
  /**
   * Sets or gets the id of an HTML template element to be applied as a custom filter template.
   * Default value: "null"
   */
  filterTemplate?: string;
  /**
   * Sets or gets the id of an HTML template element to be applied as footer row(s).
   * Default value: "null"
   */
  footerRow?: string;
  /**
   * Sets or gets whether the Table's footer is sticky/frozen.
   * Default value: false
   */
  freezeFooter?: boolean;
  /**
   * Sets or gets whether the Table's column header is sticky/frozen.
   * Default value: false
   */
  freezeHeader?: boolean;
  /**
   * Sets or gets whether grouping the Table is enabled.
   * Default value: false
   */
  grouping?: boolean;
  /**
   * Sets or gets the id of an HTML template element to be applied as additional column header(s).
   * Default value: "null"
   */
  headerRow?: string;
  /**
   * Sets or gets whether navigation with the keyboard is enabled in the Table.
   * Default value: false
   */
  keyboardNavigation?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale. 
   * Default value:    * {
   *   "en": {
   *     "clearFilter": "Clear filter",
   *     "CONTAINS": "contains",
   *     "CONTAINS_CASE_SENSITIVE": "contains (case sensitive)",
   *     "DOES_NOT_CONTAIN": "does not contain",
   *     "DOES_NOT_CONTAIN_CASE_SENSITIVE": "does not contain (case sensitive)",
   *     "EMPTY": "empty",
   *     "ENDS_WITH": "ends with",
   *     "ENDS_WITH_CASE_SENSITIVE": "ends with (case sensitive)",
   *     "EQUAL": "equal",
   *     "EQUAL_CASE_SENSITIVE": "equal (case sensitive)",
   *     "filterPlaceholder": "Filter",
   *     "filterCondition": "Filter condition",
   *     "firstButton": "First",
   *     "GREATER_THAN": "greater than",
   *     "GREATER_THAN_OR_EQUAL": "greater than or equal",
   *     "invalidValue": "Invalid value",
   *     "itemsPerPage": "Items per page:",
   *     "lastButton": "Last",
   *     "LESS_THAN": "less than",
   *     "LESS_THAN_OR_EQUAL": "less than or equal",
   *     "nextButton": "Next",
   *     "NOT_EMPTY": "not empty",
   *     "NOT_EQUAL": "not equal",
   *     "NOT_NULL": "not null",
   *     "NULL": "null",
   *     "previousButton": "Previous",
   *     "STARTS_WITH": "starts with",
   *     "STARTS_WITH_CASE_SENSITIVE": "starts with (case sensitive)",
   *     "summaryPrefix": "of"
   *   }
   * }
   */
  messages?: any;
  /**
   * A callback function executed each time a Table cell is rendered.
   * Default value: null
   */
  onCellRender?: any;
  /**
   * A callback function executed each time a Table column header cell is rendered.
   * Default value: null
   */
  onColumnRender?: { (dataField: string, headerCell: HTMLTableCellElement): void };
  /**
   * A callback function executed when the Table is being initialized.
   * Default value: null
   */
  onInit?: { (): void };
  /**
   * Sets or gets the page size (when paging is enabled).
   * Default value: 10
   */
  pageSize?: TablePageSize;
  /**
   * Sets or gets the current (zero-based) page index (when paging is enabled).
   * Default value: 0
   */
  pageIndex?: number;
  /**
   * Sets or gets whether paging is enabled.
   * Default value: false
   */
  paging?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Sets or gets a string template to be applied as row detail template. Each cell value in the master row can be placed in the detail row by specifying the cell's data field in double curly brackets (e.g. . The details can then be displayed by expanding the row by clicking it.
   * Default value: "null"
   */
  rowDetailTemplate?: string;
  /**
   * Sets or gets whether row selection (via checkboxes) is enabled.
   * Default value: false
   */
  selection?: boolean;
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
}
/**
 Table is an alternative of the HTMLTableElement.
*/
export interface Table extends BaseElement, TableProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when a cell edit operation has been initiated.
	* @param event. The custom event. Custom data event was created with: ev.detail(dataField, row)
   *  dataField - The data field of the cell's column.
   *  row - The data of the cell's row.
   */
  onCellBeginEdit?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a cell has been clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(dataField, row)
   *  dataField - The data field of the cell's column.
   *  row - The data of the cell's row.
   */
  onCellClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a cell has been edited.
	* @param event. The custom event. Custom data event was created with: ev.detail(dataField, row)
   *  dataField - The data field of the cell's column.
   *  row - The new data of the cell's row.
   */
  onCellEndEdit?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a column header cell has been clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(dataField)
   *  dataField - The data field of the cell's column.
   */
  onColumnClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a filtering-related action is made.
	* @param event. The custom event. Custom data event was created with: ev.detail(action, filters)
   *  action - The filtering action. Possible actions: 'add', 'remove'.
   *  filters - The added filters. Only when action is 'add'.
   */
  onFilter?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a grouping-related action is made.
	* @param event. The custom event. Custom data event was created with: ev.detail(action, dataField, label)
   *  action - The grouping action. Possible actions: 'add', 'collapse', 'expand', 'remove'.
   *  dataField - The data field of the column whose grouping is modified.
   *  label - The label of the group (only when collapsing/expanding).
   */
  onGroup?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a paging-related action is made.
	* @param event. The custom event. Custom data event was created with: ev.detail(action)
   *  action - The paging action. Possible actions: 'pageIndexChange', 'pageSizeChange'.
   */
  onPage?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a column header cell has been clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(columns)
   *  columns - An array with information about the columns the Table has been sorted by.
   */
  onSort?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Adds a filter to a specific column.
   * @param {string} dataField. The column's data field.
   * @param {any} filter. FilterGroup object.
   */
  addFilter(dataField: string, filter: any): void;
  /**
   * Groups by a column.
   * @param {string} dataField. The column's data field.
   */
  addGroup(dataField: string): void;
  /**
   * Begins an edit operation.
   * @param {string | number} row. The id of the row to edit.
   * @param {string} dataField?. The dataField of the cell's column. May be omitted when <strong>editMode</strong> is <em>'row'</em>.
   */
  beginEdit(row: string | number, dataField?: string): void;
  /**
   * Ends the current edit operation and discards changes.
   */
  cancelEdit(): void;
  /**
   * Clears applied filters.
   */
  clearFilters(): void;
  /**
   * Clears grouping.
   */
  clearGrouping(): void;
  /**
   * Clears selection.
   */
  clearSelection(): void;
  /**
   * Clears the Table sorting.
   */
  clearSort(): void;
  /**
   * Collapses all rows (in tree mode).
   */
  collapseAllRows(): void;
  /**
   * Collapses a group.
   * @param {string} index. The group's hierarchical index.
   */
  collapseGroup(index: string): void;
  /**
   * Collapses a group.
   * @param {string | number} rowId. The id of the row to collapse.
   */
  collapseRow(rowId: string | number): void;
  /**
   * Ends the current edit operation and saves changes.
   */
  endEdit(): void;
  /**
   * Expands all rows (in tree mode).
   */
  expandAllRows(): void;
  /**
   * Expands a group.
   * @param {string} index. The group's hierarchical index.
   */
  expandGroup(index: string): void;
  /**
   * Expands a row (in tree mode).
   * @param {string | number} rowId. The id of the row to expand.
   */
  expandRow(rowId: string | number): void;
  /**
   * Exports the Table's data.
   * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
   * @param {string} fileName?. The name of the file to export to
   * @param {boolean} exportFiltered?. If set to true, exports only filtered records
   * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
   * @returns {any}
   */
  exportData(dataFormat: string, fileName?: string, exportFiltered?: boolean, callback?: Function): any;
  /**
   * Returns an array of selected row ids.
   * @returns {(string | number)[]}
   */
  getSelection(): (string | number)[];
  /**
   * Returns the value of a cell.
   * @param {string | number} row. The id of the cell's row.
   * @param {string} dataField. The dataField of the cell's column.
   * @returns {any}
   */
  getValue(row: string | number, dataField: string): any;
  /**
   * Navigates to a page.
   * @param {number} pageIndex. The zero-based page index to navigate to.
   */
  navigateTo(pageIndex: number): void;
  /**
   * Refreshes the table.
   */
  refresh(): void;
  /**
   * Removes filters applied to a specific column.
   * @param {string} dataField. The column's data field.
   */
  removeFilter(dataField: string): void;
  /**
   * Removes grouping by a column.
   * @param {string} dataField. The column's data field.
   */
  removeGroup(dataField: string): void;
  /**
   * Selects a row.
   * @param {string | number} rowId. The id of the row to select.
   */
  select(rowId: string | number): void;
  /**
   * Sets the value of a cell.
   * @param {string | number} row. The id of the cell's row.
   * @param {string} dataField. The dataField of the cell's column.
   * @param {any} value. The new value of the cell.
   */
  setValue(row: string | number, dataField: string, value: any): void;
  /**
   * Sorts the Table by a column.
   * @param {string} columnDataField. Column field name.
   * @param {string} sortOrder?. Sort order. Possible values: 'asc' (ascending) and 'desc' (descending).
   */
  sortBy(columnDataField: string, sortOrder?: string): void;
  /**
   * Unselects a row.
   * @param {string | number} rowId. The id of the row to unselect.
   */
  unselect(rowId: string | number): void;
}

export interface TableColumn {
  /**
   * Sets or gets whether the column's cells can be edited.
   * Default value: true
   */
  allowEdit?: boolean;
  /**
   * Sets or gets whether the column can be filtered.
   * Default value: true
   */
  allowFilter?: boolean;
  /**
   * Sets or gets whether the table can be grouped by the column.
   * Default value: true
   */
  allowGroup?: boolean;
  /**
   * Sets or gets whether the table can be sorted by the column.
   * Default value: true
   */
  allowSort?: boolean;
  /**
   * Sets or gets the column's data source bound field.
   * Default value: ""
   */
  dataField?: string;
  /**
   * Sets or gets the data type of the column's cells.
   * Default value: string
   */
  dataType?: TableColumnDataType;
  /**
   * An object setting up a custom editor. Available fields: template - a string to be parsed into HTML and be used as custom cell editor.onInit - a callback function called once when the editor is initialized.onRender - a callback function called each time a cell enters edit mode.getValue - a callback function called when editing is complete; used to return the editor's value to the Table's data source.
   * Default value: null
   */
  editor?: any;
  /**
   * Sets or gets whether the column is sticky/frozen. true and 'near' designate freezing on the left side, 'far' - on the right side.
   * Default value: null
   */
  freeze?: TableColumnFreeze;
  /**
   * A callback function that can be used to modify the contents of a cell and the cell itself.
   * Default value: null
   */
  formatFunction?: any;
  /**
   * Sets or gets the text displayed in the column's header.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets the column's priority when resizing the browser window. The larger the priority value, the column will be hidden at a larger screen resolution. Columns with priority 1 are never hidden.
   * Default value: 
   */
  responsivePriority?: TableColumnResponsivePriority;
  /**
   * A callback function that can be used to validate cell values after editing. If it returns true, the cell is valid. If it returns false or an object with a message field, the cell is not valid and the message (or a default one) is displayed in a tooltip.
   * Default value: null
   */
  validation?: any;
  /**
   * Sets the width of the column. The width can be entered as a number, or string with px or %.
   * Default value: null
   */
  width?: string | number;
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

/**Sets or gets the data type of the column's cells. */
export declare type TableColumnDataType = 'boolean' | 'date' | 'number' | 'string';
/**Sets or gets whether the column is sticky/frozen. true and 'near' designate freezing on the left side, 'far' - on the right side. */
export declare type TableColumnFreeze = 'true' | 'near' | 'far';
/**Sets or gets the column's priority when resizing the browser window. The larger the priority value, the column will be hidden at a larger screen resolution. Columns with priority 1 are never hidden. */
export declare type TableColumnResponsivePriority = '1' | '2' | '3' | '4' | '5';
/**Sets or gets the edit mode. */
export declare type TableEditMode = 'cell' | 'row';
/**Sets or gets the page size (when paging is enabled). */
export declare type TablePageSize = '10' | '25' | '50';
/**Determines the sorting mode of the Table. */
export declare type TableSortMode = 'none' | 'one' | 'many';
