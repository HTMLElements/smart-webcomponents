import  {BaseElement, Animation} from "./smart.element"

export interface TableProperties {
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Enables or disables auto load state from the browser's localStorage. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is loaded, based on the value of the stateSettings property.
   * Default value: false
   */
  autoLoadState?: boolean;
  /**
   * Enables or disables auto save state to the browser's localStorage. Information about columns, expanded rows, selected rows, applied fitering, grouping, and   sorted columns is saved, based on the value of the stateSettings property.
   * Default value: false
   */
  autoSaveState?: boolean;
  /**
   * Sets or gets a list of column groups that constitute the column header hierarchy. Note: when column header hierarchy is created, column resizing and auto-sizing is not supported.
   * Default value: null
   */
  columnGroups?: TableColumnGroup[];
  /**
   * Sets or gets the min width of columns when columnSizeMode is 'auto' or when resizing columns. This property has no effect on columns with programmatically set width.
   * Default value: 50px
   */
  columnMinWidth?: string | number;
  /**
   * Sets or gets whether the reordering of columns is enabled.
   * Default value: false
   */
  columnReorder?: boolean;
  /**
   * Sets or gets whether the resizing of columns is enabled. Note: column sizes continue to adhere to the behavior of the standard HTML table element's table-layout: fixed, upon which smart-table is based.
   * Default value: false
   */
  columnResize?: boolean;
  /**
   * Sets or gets whether when resizing a column, a feedback showing the new column width in px will be displayed.
   * Default value: false
   */
  columnResizeFeedback?: boolean;
  /**
   * Describes the columns properties.
   * Default value: null
   */
  columns?: TableColumn[];
  /**
   * Sets or gets details about conditional formatting to be applied to the Table's cells.
   * Default value: null
   */
  conditionalFormatting?: TableConditionalFormatting[];
  /**
   * Sets or gets the column sizing behavior.
   * Default value: default
   */
  columnSizeMode?: TableColumnSizeMode;
  /**
   * Sets or gets whether the "Conditional Formatting" button appears in the Table's header (toolbar). Clicking this button opens a dialog with formatting options.
   * Default value: false
   */
  conditionalFormattingButton?: boolean;
  /**
   * When binding the dataSource property directly to an array (as opposed to an instance of JQX.DataAdapter), sets or gets the name of the data field in the source array to bind row ids to.
   * Default value: "null"
   */
  dataRowId?: string;
  /**
   * Determines the data source of the table component.
   * Default value: 
   */
  dataSource?: any;
  /**
   * A callback function that can be used to transform the initial dataSource records. If implemented, it is called once for each record (which is passed as an argument).
   * Default value: null
   */
  dataTransform?: any;
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
   * Sets or gets whether Excel-like formulas can be passed as cell values. Formulas are always preceded by the = sign and are re-evaluated when cell values are changed. This feature depends on the third-party free plug-in formula-parser (the file formula-parser.min.js has to be referenced).
   * Default value: false
   */
  formulas?: boolean;
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
   * Sets or gets the behavior when loading column settings either via autoLoadState or loadState. Applicable only when stateSettings contains 'columns'.
   * Default value: implementationOnly
   */
  loadColumnStateBehavior?: TableLoadColumnStateBehavior;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale. 
   * Default value:    * {
   *   "en": {
   *     "add": "Add condition",
   *     "all": "All columns",
   *     "apply": "Apply",
   *     "between": "Between",
   *     "cancel": "Cancel",
   *     "clearFilter": "Clear filter",
   *     "close": "Close",
   *     "column": "Column:",
   *     "condition": "Condition:",
   *     "conditionalFormatting": "Conditional Formatting",
   *     "CONTAINS": "contains",
   *     "CONTAINS_CASE_SENSITIVE": "contains (case sensitive)",
   *     "DOES_NOT_CONTAIN": "does not contain",
   *     "DOES_NOT_CONTAIN_CASE_SENSITIVE": "does not contain (case sensitive)",
   *     "EMPTY": "empty",
   *     "ENDS_WITH": "ends with",
   *     "ENDS_WITH_CASE_SENSITIVE": "ends with (case sensitive)",
   *     "EQUAL": "equal",
   *     "EQUAL_CASE_SENSITIVE": "equal (case sensitive)",
   *     "filterCondition": "Filter condition",
   *     "filterPlaceholder": "Filter",
   *     "firstButton": "First",
   *     "fontFamily": "Font family:",
   *     "fontSize": "Font size:",
   *     "format": "Format:",
   *     "formatColumn": "Format Column",
   *     "GREATER_THAN": "greater than",
   *     "GREATER_THAN_OR_EQUAL": "greater than or equal",
   *     "greaterThan": "Greater Than",
   *     "highlight": "Highlight",
   *     "invalidValue": "Invalid value",
   *     "itemsPerPage": "Items per page:",
   *     "lastButton": "Last",
   *     "LESS_THAN": "less than",
   *     "LESS_THAN_OR_EQUAL": "less than or equal",
   *     "lessThan": "Less Than",
   *     "nextButton": "Next",
   *     "NOT_EMPTY": "not empty",
   *     "NOT_EQUAL": "not equal",
   *     "NOT_NULL": "not null",
   *     "notEqual": "Not Equal To",
   *     "NULL": "null",
   *     "ok": "OK",
   *     "previousButton": "Previous",
   *     "remove": "Remove condition",
   *     "secondValue": "Second value:",
   *     "STARTS_WITH": "starts with",
   *     "STARTS_WITH_CASE_SENSITIVE": "starts with (case sensitive)",
   *     "summaryPrefix": "of",
   *     "text": "Text",
   *     "value": "Value:",
   *     "with": "with"
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
   * Sets or gets an array of the Table's selected row's ids.
   * Default value: 
   */
  selected?: any[];
  /**
   * Sets or gets whether row selection (via checkboxes) is enabled.
   * Default value: false
   */
  selection?: boolean;
  /**
   * Sets or gets the selection mode. Only applicable when selection is enabled.
   * Default value: many
   */
  selectionMode?: TableSelectionMode;
  /**
   * A callback function executed when a column is sorted that can be used to override the default sorting behavior. The function is passed four parameters: dataSource - the Table's data sourcesortColumns - an array of the data fields of columns to be sorted bydirections - an array of sort directions to be sorted by (corresponding to sortColumns)defaultCompareFunctions - an array of default compare functions to be sorted by (corresponding to sortColumns), useful if the sorting of some columns does not have to be overridden
   * Default value: null
   */
  sort?: any;
  /**
   * Determines the sorting mode of the Table.
   * Default value: none
   */
  sortMode?: TableSortMode;
  /**
   * Sets or gets what settings of the Table's state can be saved (by autoSaveState or saveState) or loaded (by autoLoadState or loadState).
   * Default value: columns,expanded,filtered,grouped,selected,sorted
   */
  stateSettings?: string[];
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or gets whether when hovering a cell with truncated content, a tooltip with the full content will be shown.
   * Default value: false
   */
  tooltip?: boolean;
  /**
   * Enables or disables HTML virtualization. This functionality allows for only visible rows to be rendered, resulting in an increased Table performance.
   * Default value: false
   */
  virtualization?: boolean;
}
/**
 Table is an alternative of the HTMLTableElement.
*/
export interface Table extends BaseElement, TableProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when a cell edit operation has been initiated.
	* @param event. The custom event. Custom data event was created with: ev.detail(dataField, row, value)
   *  dataField - The data field of the cell's column.
   *  row - The data of the cell's row.
   *  value - The data value of the cell.
   */
  onCellBeginEdit?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a cell has been clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, dataField, row, value, originalEvent)
   *  id - The cell's row id.
   *  dataField - The data field of the cell's column.
   *  row - The data of the cell's row.
   *  value - The data value of the cell.
   *  originalEvent - The 'click' event object.
   */
  onCellClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a cell has been edited.
	* @param event. The custom event. Custom data event was created with: ev.detail(dataField, row, value)
   *  dataField - The data field of the cell's column.
   *  row - The new data of the cell's row.
   *  value - The data value of the cell.
   */
  onCellEndEdit?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the selection is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(type)
   *  type - The type of action that initiated the selection change. Possible types: 'programmatic', 'interaction', 'remove'.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when a row has been collapsed.
	* @param event. The custom event. Custom data event was created with: ev.detail(record)
   *  record - The data of the collapsed row.
   */
  onCollapse?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a row has been expanded.
	* @param event. The custom event. Custom data event was created with: ev.detail(record)
   *  record - The (aggregated) data of the expanded row.
   */
  onExpand?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a column header cell has been clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(dataField)
   *  dataField - The data field of the cell's column.
   */
  onColumnClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a column has been resized via dragging or double-click.
	* @param event. The custom event. Custom data event was created with: ev.detail(dataField, headerCellElement, width)
   *  dataField - The data field of the column.
   *  headerCellElement - The column's header cell HTML element.
   *  width - The new width of the column.
   */
  onColumnResize?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
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
   * This event is triggered when a row edit operation has been initiated (only when <strong>editMode</strong> is <em>'row'</em>).
	* @param event. The custom event. Custom data event was created with: ev.detail(row)
   *  row - The data of the row.
   */
  onRowBeginEdit?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a row has been edited (only when <strong>editMode</strong> is <em>'row'</em>).
	* @param event. The custom event. Custom data event was created with: ev.detail(row)
   *  row - The new data of the row.
   */
  onRowEndEdit?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
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
   * Collapses a row (in tree mode).
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
   * Returns the Table's state, containing information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns. It can then be stored or passed to the method <strong>loadState</strong>.
   * @returns {any}
   */
  getState(): any;
  /**
   * Returns the value of a cell.
   * @param {string | number} row. The id of the cell's row.
   * @param {string} dataField. The dataField of the cell's column.
   * @returns {any}
   */
  getValue(row: string | number, dataField: string): any;
  /**
   * Loads the Table's state. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is loaded, based on the value of the <strong>stateSettings</strong> property.
   * @param {any} state?. An object returned by one of the methods <strong>getState</strong> or <strong>saveState</strong>. If a state is not passed, the method tries to load the state from the browser's localStorage.
   */
  loadState(state?: any): void;
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
   * Saves the Table's state. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is saved, based on the value of the <strong>stateSettings</strong> property.
   * @returns {any}
   */
  saveState(): any;
  /**
   * Selects one or more rows.
   * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
   */
  select(rowId: string | number | (string | number)[]): void;
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
   * @param {string} sortOrder?. Sort order. Possible values: 'asc' (ascending), 'desc' (descending), and null (removes sorting by column). If not provided, toggles the sorting.
   */
  sortBy(columnDataField: string, sortOrder?: string): void;
  /**
   * Unselects one or more rows.
   * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to unselect.
   */
  unselect(rowId: string | number | (string | number)[]): void;
}

export interface TableColumnGroup {
  /**
   * Sets or gets the column group's label that appears in the column header hierarchy.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets the column group's unique name that is referenced in the columnGroup field of columns (TableColumn).
   * Default value: ""
   */
  name?: string;
  /**
   * Sets or gets the name of the column group's parent group (also defined in columnGroups).
   * Default value: "null"
   */
  parentGroup?: string;
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
   * Sets or gets the column's column group. Has to correspond to the name field of a column group (TableColumnGroup).
   * Default value: "null"
   */
  columnGroup?: string;
  /**
   * Sets or gets the column's data source-bound field.
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
   * Default value: 1
   */
  responsivePriority?: TableColumnResponsivePriority;
  /**
   * A string to be parsed into HTML and be used as custom cell content. Applicable only when virtualization is enabled.
   * Default value: "null"
   */
  templateElement?: string;
  /**
   * A callback function that can be used to apply settings to a template element (specified by the column templateElement property). Applicable only when virtualization is enabled.
   * Default value: null
   */
  templateElementSettings?: any;
  /**
   * A callback function that can be used to transform all the data of the column's original data field into a new data field to be used in column cells and all column operations. Can be useful for localizing data.
   * Default value: null
   */
  transform?: any;
  /**
   * A callback function that can be used to validate cell values after editing. If it returns true, the cell is valid. If it returns false or an object with a message field, the cell is not valid and the message (or a default one) is displayed in a tooltip.
   * Default value: null
   */
  validation?: any;
  /**
   * Sets the width of the column. The width can be entered as a number or string with px.
   * Default value: null
   */
  width?: string | number;
}

export interface TableConditionalFormatting {
  /**
   * The data field of a numeric column to format. Set 'all' to format all numeric columns.
   * Default value: "all"
   */
  column?: string;
  /**
   * The formatting condition.
   * Default value: lessThan
   */
  condition?: TableConditionalFormattingCondition;
  /**
   * The value to compare by. When condition is 'between', this is the start (from) value.
   * Default value: 0
   */
  firstValue?: number;
  /**
   * The fontFamily to apply to formatted cells.
   * Default value: The default fontFamily as set in CSS
   */
  fontFamily?: TableConditionalFormattingFontFamily;
  /**
   * The fontSize to apply to formatted cells. The fontSize as set in CSS is used by default.
   * Default value: 14px
   */
  fontSize?: TableConditionalFormattingFontSize;
  /**
   * The background color to apply to formatted cells.
   * Default value: "The default backgroundColor as set in CSS"
   */
  highlight?: string;
  /**
   * When condition is 'between', this is the end (to) value. Otherwise, this value is not used.
   * Default value: 1
   */
  secondValue?: number;
  /**
   * The text color to apply to formatted cells.
   * Default value: "The default color as set in CSS"
   */
  text?: string;
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
/**The formatting condition. */
export declare type TableConditionalFormattingCondition = 'between' | 'equal' | 'greaterThan' | 'lessThan' | 'notEqual';
/**The fontFamily to apply to formatted cells. */
export declare type TableConditionalFormattingFontFamily = 'The default fontFamily as set in CSS' | 'Arial' | 'Courier New' | 'Georgia' | 'Times New Roman' | 'Verdana';
/**The fontSize to apply to formatted cells. The fontSize as set in CSS is used by default. */
export declare type TableConditionalFormattingFontSize = '8px' | '9px' | '10px' | '11px' | '12px' | '13px' | '14px' | '15px' | '16px';
/**Sets or gets the column sizing behavior. */
export declare type TableColumnSizeMode = 'auto' | 'default';
/**Sets or gets the edit mode. */
export declare type TableEditMode = 'cell' | 'row';
/**Sets or gets the behavior when loading column settings either via autoLoadState or loadState. Applicable only when stateSettings contains 'columns'. */
export declare type TableLoadColumnStateBehavior = 'implementationOnly' | 'intersection' | 'stateOnly';
/**Sets or gets the page size (when paging is enabled). */
export declare type TablePageSize = '10' | '25' | '50';
/**Sets or gets the selection mode. Only applicable when selection is enabled. */
export declare type TableSelectionMode = 'many' | 'extended';
/**Determines the sorting mode of the Table. */
export declare type TableSortMode = 'none' | 'one' | 'many';
