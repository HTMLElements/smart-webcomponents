import  {BaseElement, Animation} from "./smart.element"

export interface PivotTableProperties {
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets whether the reordering of columns is enabled.
   * Default value: false
   */
  columnReorder?: boolean;
  /**
   * Describes the columns of the PivotTable's original tabular data. Based on these settings and the data source, the actual columns of the PivotTable are dynamically generated.
   * Default value: null
   */
  columns?: PivotTableColumn[];
  /**
   * Sets or gets whether to show total columns for each pivot data point. When enabled, all summary columns must have the same summary function set by which total columns are calculated.
   * Default value: false
   */
  columnTotals?: boolean;
  /**
   * Sets or gets the position of total columns (shown when columnTotals is enabled).
   * Default value: near
   */
  columnTotalsPosition?: PivotTableColumnTotalsPosition;
  /**
   * Sets or gets details about conditional formatting to be applied to the PivotTable's cells.
   * Default value: null
   */
  conditionalFormatting?: PivotTableConditionalFormatting[];
  /**
   * Determines the original tabular data source of the PivotTable.
   * Default value: 
   */
  dataSource?: any;
  /**
   * Sets or gets whether the original tabular data sourse of the PivotTable will be pre-sorted based on columns with the rowGroup property (and their order).
   * Default value: false
   */
  defaultSortByRowGroups?: boolean;
  /**
   * Sets or gets whether to display the PivotTable's designer alongside the table itself. The designer allows for configuring column settings and applying filtering.
   * Default value: false
   */
  designer?: boolean;
  /**
   * Sets or gets the position of the PivotTable's designer (shown when designer is enabled).
   * Default value: far
   */
  designerPosition?: PivotTableDesignerPosition;
  /**
   * Disables the interaction with the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * If enabled, shows the original tabular data that has been aggregated in a PivotTable summary cell when the cell is double-clicked or F2 is pressed.
   * Default value: false
   */
  drillDown?: boolean;
  /**
   * If set, shows an export button in the drill down dialog.
   * Default value: 
   */
  drillDownDataExport?: PivotTableDrillDownDataExport;
  /**
   * Sets or gets the drill down table export file name.
   * Default value: ""
   */
  drillDownDataExportName?: string;
  /**
   * Sets or gets the drill down dialog callback function. The argument of the callback passed by the PivotTable is the drill-down Table component. You can use it to customize the table.
   * Default value: null
   */
  drillDownTableInit?: { (table: HTMLElement ): void };
  /**
   * Sets or gets the drill down custom action callback function. The argument of the callback passed by the PivotTable is the drill-down data source. You can use it to override the default drill-down UI i.e to replace our Dialog with Table.
   * Default value: null
   */
  drillDownCustomAction?: { (originalRecords: [] ): void };
  /**
   * Sets or gets whether sorting based on columns in classic row groups layout mode is enabled.
   * Default value: false
   */
  enableSortByRowGroups?: boolean;
  /**
   * Sets or gets whether the PivotTable's column header is sticky/frozen.
   * Default value: false
   */
  freezeHeader?: boolean;
  /**
   * A callback function that returns the default summary function of a summary column when it is dynamically assigned as such (e.g. by drag-drop in the designer).
   * Default value: null
   */
  getDefaultSummaryFunction?: { (column: PivotTableColumn): string };
  /**
   * Sets or gets whether to show a Grand total row aggregating the data of all rows.
   * Default value: false
   */
  grandTotal?: boolean;
  /**
   * Sets or gets the way row nesting (based on rowGroup columns) is displayed.
   * Default value: default
   */
  groupLayout?: PivotTableGroupLayout;
  /**
   * Sets or gets whether to hide the tooltip that displays details when multiple summary cells with non-null values are selected.
   * Default value: false
   */
  hideCellSelectionTooltip?: boolean;
  /**
   * Sets or gets whether to hide rows that contain only 0 or null values. Applicable only when there are rowGroup columns.
   * Default value: false
   */
  hideEmptyRows?: boolean;
  /**
   * Sets or gets whether navigation with the keyboard is enabled in the PivotTable.
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
   * Default value:    * {"en":{"add":"Add condition","all":"All columns","apply":"Apply","average":"Average","between":"Between","calculation":"Calculation","cancel":"Cancel","center":"center","clear":"Clear","clearFilter":"Clear filter","close":"Close","column":"Column:","columns":"Columns","columnSettings":"Column settings","condition":"Condition:","conditionalFormatting":"Conditional Formatting","CONTAINS_CASE_SENSITIVE":"contains (case sensitive)","CONTAINS":"contains","count":"Count","decimalPlaces":"Decimal places","decimalSeparator":"Decimal separator","details":"Details","DOES_NOT_CONTAIN_CASE_SENSITIVE":"does not contain (case sensitive)","DOES_NOT_CONTAIN":"does not contain","dragHerePivots":"Drag here to set pivots","dragHereRowGroups":"Drag here to set row groups","dragHereSummaries":"Drag here to set summaries","EMPTY":"empty","ENDS_WITH_CASE_SENSITIVE":"ends with (case sensitive)","ENDS_WITH":"ends with","EQUAL_CASE_SENSITIVE":"equal (case sensitive)","equal":"Equal To","EQUAL":"equal","fields":"Fields","filter":"Filter","filterCondition":"Filter condition","filterPlaceholder":"Filter","filters":"Filters","firstButton":"First","fontFamily":"Font family:","fontSize":"Font size:","format":"Format:","formatColumn":"Format Column","grandTotal":"Grand Total","GREATER_THAN_OR_EQUAL":"greater than or equal","GREATER_THAN":"greater than","greaterThan":"Greater Than","groupHeader":"Group","highlight":"Highlight","invalidValue":"Invalid value","itemsPerPage":"Items per page:","lastButton":"Last","left":"left","LESS_THAN_OR_EQUAL":"less than or equal","LESS_THAN":"less than","lessThan":"Less Than","moveTo":"Move to","negativesInBrackets":"Negatives in brackets","nextButton":"Next","NOT_EMPTY":"not empty","NOT_EQUAL":"not equal","NOT_NULL":"not null","notApplicable":"N/A","notEqual":"Not Equal To","NULL":"null","numberAlignment":"Number alignment","numberFormat":"Number format","numberPrefix":"Number prefix","ok":"OK","pivots":"Pivots","previousButton":"Previous","remove":"Remove condition","right":"right","row":"Row","rowGroups":"Row Groups","sameSummaryFunctionRequired":"jqxPivotTable: When "columnTotals" is enabled, all summary columns must have the same "summary" function set (e.g. '
   */
  messages?: any;
  /**
   * Sets or gets what value is shown in cells that do not have aggregated data to display. By default (null), such cells are empty.
   * Default value: null
   */
  nullDefaultValue?: number;
  /**
   * A callback function executed each time a PivotTable cell is rendered.
   * Default value: null
   */
  onCellRender?: { (data: any, dynamicColumn: any, value: any, cell: HTMLTableCellElement): void };
  /**
   * A callback function executed each time a PivotTable column header cell is rendered.
   * Default value: null
   */
  onColumnRender?: { (settings: { text: string, cell: HTMLTableCellElement, column: PivotTableColumn, fullDefinition: any }): void };
  /**
   * A callback function executed when the PivotTable is being initialized.
   * Default value: null
   */
  onInit?: { (): void };
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Sets or gets whether sorting by row (when a row group cell is clicked) is enabled. When columnTotals is also enabled, sorting is applied per "column group"; otherwise - for all columns.
   * Default value: false
   */
  rowSort?: boolean;
  /**
   * Sets or gets whether row summaries are displayed in the row headers. Example: Peterson(40) vs Peterson, when rowSummary is set to false.
   * Default value: true
   */
  rowSummary?: boolean;
  /**
   * Sets or gets whether to show row total columns for each summary column.
   * Default value: false
   */
  rowTotals?: boolean;
  /**
   * Sets or gets the position of row total columns (shown when rowTotals is enabled).
   * Default value: near
   */
  rowTotalsPosition?: PivotTableRowTotalsPosition;
  /**
   * Sets or gets whether row selection (via checkboxes) is enabled.
   * Default value: false
   */
  selection?: boolean;
  /**
   * Sets or gets the selection mode. Only applicable when selection is enabled.
   * Default value: many
   */
  selectionMode?: PivotTableSelectionMode;
  /**
   * Determines the sorting mode of the PivotTable.
   * Default value: none
   */
  sortMode?: PivotTableSortMode;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or gets whether the PivotTable's toolbar is shown. It contains two breadcrumb components that allow the modification of the row group and pivot columns, as well as the "Conditional Formatting" and "Fields" buttons that open a dialog with additional settings.
   * Default value: false
   */
  toolbar?: boolean;
  /**
   * Sets or gets whether when hovering a cell with truncated content, a tooltip with the full content will be shown.
   * Default value: false
   */
  tooltip?: boolean;
}
/**
 PivotTable is a table of statistics that summarizes the data of a more extensive table.
*/
export interface PivotTable extends BaseElement, PivotTableProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when a cell has been clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(dataField, row)
   *  dataField - The data field of the cell's dynamic column.
   *  row - The data of the cell's row.
   */
  onCellClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the selection is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(type)
   *  type - The type of action that initiated the selection change. Possible types: 'programmatic', 'interaction', 'remove'.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when a summary column header cell has been clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(columnDefinition, dataField)
   *  columnDefinition - An object detailing the clicked dynamic column.
   *  dataField - The data field of the cell's original column.
   */
  onColumnClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a row has been collapsed.
	* @param event. The custom event. Custom data event was created with: ev.detail(record)
   *  record - The (aggregated) data of the collapsed row.
   */
  onCollapse?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a total column has been collapsed.
	* @param event. The custom event. Custom data event was created with: ev.detail(columnDefinition)
   *  columnDefinition - The definition of the collapsed total column.
   */
  onCollapseTotalColumn?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a row has been expanded.
	* @param event. The custom event. Custom data event was created with: ev.detail(record)
   *  record - The (aggregated) data of the expanded row.
   */
  onExpand?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a total column has been expanded.
	* @param event. The custom event. Custom data event was created with: ev.detail(columnDefinition)
   *  columnDefinition - The definition of the expanded total column.
   */
  onExpandTotalColumn?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a filtering-related action is made.
	* @param event. The custom event. Custom data event was created with: ev.detail(action, filters)
   *  action - The filtering action. Possible actions: 'add', 'remove'.
   *  filters - The added filters. Only when action is 'add'.
   */
  onFilter?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a column header cell has been clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(columns)
   *  columns - An array with information about the dynamic columns the PivotTable has been sorted by.
   */
  onSort?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Adds a filter to a specific column.
   * @param {string} dataField. The column's data field.
   * @param {any} filter. FilterGroup object.
   */
  addFilter(dataField: string, filter: any): void;
  /**
   * Clears applied filters.
   */
  clearFilters(): void;
  /**
   * Clears selection.
   */
  clearSelection(): void;
  /**
   * Clears the PivotTable sorting.
   */
  clearSort(): void;
  /**
   * Collapses all rows (when multiple row groups are applied).
   */
  collapseAllRows(): void;
  /**
   * Collapses a row (when multiple row groups are applied).
   * @param {string | number} rowId. The id of the row to collapse. Can be retrieved from the <strong>rows</strong> collection.
   */
  collapseRow(rowId: string | number): void;
  /**
   * Expands all rows (when multiple row groups are applied).
   */
  expandAllRows(): void;
  /**
   * Expands a row (when multiple row groups are applied).
   * @param {string | number} rowId. The id of the row to expand. Can be retrieved from the <strong>rows</strong> collection.
   */
  expandRow(rowId: string | number): void;
  /**
   * Exports the PivotTable's data.
   * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
   * @param {string} fileName?. The name of the file to export to
   * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
   * @returns {any}
   */
  exportData(dataFormat: string, fileName?: string, callback?: Function): any;
  /**
   * Returns the current dynamic pivot columns.
   * @returns {any}
   */
  getDynamicColumns(): any;
  /**
   * Returns an array of selected row ids (when <strong>selectionMode</strong> is <em>'many'</em> or <em>'extended'</em>) or an array of selected cell details (when <strong>selectionMode</strong> is <em>'cell'</em>).
   * @returns {(string | number)[] | { dataField: string, rowId: string | number }[]}
   */
  getSelection(): (string | number)[] | { dataField: string, rowId: string | number }[];
  /**
   * Refreshes the PivotTable.
   */
  refresh(): void;
  /**
   * Removes filters applied to a specific column.
   * @param {string} dataField. The column's data field.
   */
  removeFilter(dataField: string): void;
  /**
   * Selects one or more rows (when <strong>selectionMode</strong> is <em>'many'</em> or <em>'extended'</em>) or a single cell (when <strong>selectionMode</strong> is <em>'cell'</em> and the second argument is passed).
   * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select (or of the cell's parent row when <strong>selectionMode</strong> is <em>'cell'</em>). Can be retrieved from the <strong>rows</strong> collection.
   * @param {string} dataField?. The dataField of the dynamic column (can be retrieved by calling <strong>getDynamicColumns</strong>) of the cell to select (only applicable when <strong>selectionMode</strong> is <em>'cell'</em>).
   */
  select(rowId: string | number | (string | number)[], dataField?: string): void;
  /**
   * Sorts by a summary or group column.
   * @param {any} columnDefinition. The dynamic column's definition. Can be retrieved from the method <strong>getDynamicColumns</strong>.
   * @param {string} sortOrder?. Sort order. Possible values: 'asc' (ascending), 'desc' (descending), and null (removes sorting by column). If not provided, toggles the sorting.
   */
  sortBy(columnDefinition: any, sortOrder?: string): void;
  /**
   * Unselects one or more rows (when <strong>selectionMode</strong> is <em>'many'</em> or <em>'extended'</em>) or a single cell (when <strong>selectionMode</strong> is <em>'cell'</em> and the second argument is passed).
   * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select (or of the cell's parent row when <strong>selectionMode</strong> is <em>'cell'</em>). Can be retrieved from the <strong>rows</strong> collection.
   * @param {string} dataField?. The dataField of the dynamic column (can be retrieved by calling <strong>getDynamicColumns</strong>) of the cell to select (only applicable when <strong>selectionMode</strong> is <em>'cell'</em>).
   */
  unselect(rowId: string | number | (string | number)[], dataField?: string): void;
}

export interface PivotTableColumn {
  /**
   * Sets or gets the header cell alignment for pivot and summary columns and cell alignment for row group columns.
   * Default value: left
   */
  align?: PivotTableColumnAlign;
  /**
   * Sets or gets whether the column can be filtered.
   * Default value: true
   */
  allowFilter?: boolean;
  /**
   * Sets or gets whether the column can be a pivot column.
   * Default value: false
   */
  allowPivot?: boolean;
  /**
   * Sets or gets whether the column can be a row group column.
   * Default value: false
   */
  allowRowGroup?: boolean;
  /**
   * Sets or gets whether summary columns based on the column can be sorted.
   * Default value: true
   */
  allowSort?: boolean;
  /**
   * Sets or gets the column's data source-bound field.
   * Default value: ""
   */
  dataField?: string;
  /**
   * Sets or gets the data type of the column's cells.
   * Default value: string
   */
  dataType?: PivotTableColumnDataType;
  /**
   * A callback function that can be used to modify the contents of a cell and the cell itself.
   * Default value: null
   */
  formatFunction?: { (settings: { value: any, row: string | number, column: string, cell: HTMLTableCellElement, template?: any }): void };
  /**
   * Sets or gets the column's displayed text (for example in summary column headers).
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets whether the column is a pivot column. Data from pivot columns is represented as column hierarchy in the PivotTable.
   * Default value: false
   */
  pivot?: boolean;
  /**
   * Sets or gets whether the column is a row group column. Data from row group columns is represented as rows in the PivotTable. If multiple row groups are set, row hierarchy is displayed based on the order of the row group columns in the columns array.
   * Default value: false
   */
  rowGroup?: boolean;
  /**
   * Sets or gets the summary function to aggregate the column's data by and produce dynamic summary columns for each unique pivot data point. There must always be at least one summary column for the PivotTable to make sense. When columnTotals is enabled, all summary columns must have the same summary function set.
   * Default value: sum
   */
  summary?: PivotTableColumnSummary;
  /**
   * Sets or gets an object with settings for cells in summary columns. These settings are not applied if column formatFunction is also implemented.
   * Default value: [object Object]
   */
  summarySettings?: { align: string, prefix: string, decimalPlaces: number, thousandsSeparator: string, decimalSeparator: string, negativesInBrackets: boolean };
}

export interface PivotTableConditionalFormatting {
  /**
   * The data field of a numeric column to format. Set 'all' to format all numeric columns.
   * Default value: "all"
   */
  column?: string;
  /**
   * The formatting condition.
   * Default value: lessThan
   */
  condition?: PivotTableConditionalFormattingCondition;
  /**
   * The value to compare by. When condition is 'between', this is the start (from) value.
   * Default value: 0
   */
  firstValue?: number;
  /**
   * The fontFamily to apply to formatted cells.
   * Default value: The default fontFamily as set in CSS
   */
  fontFamily?: PivotTableConditionalFormattingFontFamily;
  /**
   * The fontSize to apply to formatted cells. The fontSize as set in CSS is used by default.
   * Default value: 14px
   */
  fontSize?: PivotTableConditionalFormattingFontSize;
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
        createElement(tagName: "smart-pivot-table"): PivotTable;
        querySelector(selectors: "smart-pivot-table"): PivotTable | null;
        querySelectorAll(selectors: "smart-pivot-table"): NodeListOf<PivotTable>;
        getElementsByTagName(qualifiedName: "smart-pivot-table"): HTMLCollectionOf<PivotTable>;
        getElementsByName(elementName: "smart-pivot-table"): NodeListOf<PivotTable>;
    }
}

/**Sets or gets the header cell alignment for pivot and summary columns and cell alignment for row group columns. */
export declare type PivotTableColumnAlign = 'center' | 'left' | 'right';
/**Sets or gets the data type of the column's cells. */
export declare type PivotTableColumnDataType = 'boolean' | 'date' | 'number' | 'string';
/**Sets or gets the summary function to aggregate the column's data by and produce dynamic summary columns for each unique pivot data point. There must always be at least one summary column for the PivotTable to make sense. When columnTotals is enabled, all summary columns must have the same summary function set. */
export declare type PivotTableColumnSummary = 'avg' | 'count' | 'max' | 'median' | 'min' | 'product' | 'stdev' | 'stdevp' | 'sum' | 'var' | 'varp';
/**Sets or gets the position of total columns (shown when columnTotals is enabled). */
export declare type PivotTableColumnTotalsPosition = 'near' | 'far';
/**The formatting condition. */
export declare type PivotTableConditionalFormattingCondition = 'between' | 'equal' | 'greaterThan' | 'lessThan' | 'notEqual';
/**The fontFamily to apply to formatted cells. */
export declare type PivotTableConditionalFormattingFontFamily = 'The default fontFamily as set in CSS' | 'Arial' | 'Courier New' | 'Georgia' | 'Times New Roman' | 'Verdana';
/**The fontSize to apply to formatted cells. The fontSize as set in CSS is used by default. */
export declare type PivotTableConditionalFormattingFontSize = '8px' | '9px' | '10px' | '11px' | '12px' | '13px' | '14px' | '15px' | '16px';
/**Sets or gets the position of the PivotTable's designer (shown when designer is enabled). */
export declare type PivotTableDesignerPosition = 'near' | 'far';
/**If set, shows an export button in the drill down dialog. */
export declare type PivotTableDrillDownDataExport = null | 'xlsx' | 'pdf' | 'html' | 'json' | 'csv' | 'tsv' | 'xml';
/**Sets or gets the way row nesting (based on rowGroup columns) is displayed. */
export declare type PivotTableGroupLayout = 'classic' | 'default';
/**Sets or gets the position of row total columns (shown when rowTotals is enabled). */
export declare type PivotTableRowTotalsPosition = 'near' | 'far';
/**Sets or gets the selection mode. Only applicable when selection is enabled. */
export declare type PivotTableSelectionMode = 'many' | 'extended' | 'cell';
/**Determines the sorting mode of the PivotTable. */
export declare type PivotTableSortMode = 'none' | 'one' | 'many';
