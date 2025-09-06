import  {BaseElement, Animation} from "./smart.element"

export interface PivotTableProperties {
  /**
   * Defines the animation mode for the element. When this property is set to 'none', all animations are disabled. Otherwise, setting this property to a supported value enables the corresponding animation behavior. Use this property to retrieve the current animation mode or specify the desired mode.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Enables or retrieves the current setting that determines whether users can reorder columns, allowing columns to be rearranged via drag-and-drop or similar interactions. If enabled, columns can be moved to a new position within the layout; if disabled, the column order remains fixed.
   * Default value: false
   */
  columnReorder?: boolean;
  /**
   * Provides detailed metadata for each column in the PivotTable’s underlying tabular data source. These settings define attributes such as column names, data types, and formatting options. Using this configuration and the connected data source, the PivotTable dynamically generates its actual columns, ensuring that the displayed data structure accurately reflects both the source data and the specified settings.
   * Default value: null
   */
  columns?: PivotTableColumn[];
  /**
   * Controls the visibility of total columns for each pivot data point. When enabled, total columns are displayed, showing summary values for each data group. Note: All summary columns must use the same summary function (e.g., sum, average) to ensure consistent calculation of the total columns. This setting both determines whether total columns are shown and allows you to retrieve their current visibility status.
   * Default value: false
   */
  columnTotals?: boolean;
  /**
   * Gets or sets the position of the total columns, which are displayed only when columnTotals is enabled. This option determines where the summary columns appear in the table, such as at the end (right side) of all columns.
   * Default value: near
   */
  columnTotalsPosition?: PivotTableColumnTotalsPosition | string;
  /**
   * Gets or sets the conditional formatting rules that determine how the PivotTable's cells are visually styled based on their values or other criteria. This allows you to dynamically highlight, color, or format cells within the PivotTable according to specified conditions.
   * Default value: null
   */
  conditionalFormatting?: PivotTableConditionalFormatting[];
  /**
   * Specifies the initial tabular data source—such as a worksheet range, table, or external database—from which the PivotTable retrieves and organizes its data. This property identifies where the PivotTable’s underlying data originates.
   * Default value: 
   */
  dataSource?: any;
  /**
   * Specifies or retrieves whether the original tabular data source for the PivotTable should be pre-sorted according to the columns defined with the rowGroup property, and in the same order as those columns appear. This ensures that when the PivotTable is generated, its underlying data is already organized based on the designated row groups, potentially optimizing performance and ensuring consistent grouping behavior.
   * Default value: false
   */
  defaultSortByRowGroups?: boolean;
  /**
   * Specifies whether the PivotTable designer panel is shown together with the PivotTable. When enabled, the designer provides an interface for configuring column settings, such as rearranging or renaming columns, and applying data filters directly within the PivotTable view. This property can be set to show or hide the designer alongside the table, and can also be used to determine the current visibility state of the designer.
   * Default value: false
   */
  designer?: boolean;
  /**
   * Gets or sets the position of the PivotTable’s designer interface, which appears when the designer option is enabled. This property allows you to specify or retrieve where the designer UI is displayed within the application layout.
   * Default value: far
   */
  designerPosition?: PivotTableDesignerPosition | string;
  /**
   * Prevents the user from interacting with the element, disabling all mouse, keyboard, and touch inputs such as clicks, typing, and focus events. The element will not respond to any user actions while this setting is applied.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * When this option is enabled, double-clicking a PivotTable summary cell or pressing F2 will display the underlying tabular data that was used to calculate the aggregated value in that cell.
   * Default value: false
   */
  drillDown?: boolean;
  /**
   * Displays an export button within the drill-down dialog when this option is enabled, allowing users to export data directly from the dialog.
   * Default value: 
   */
  drillDownDataExport?: PivotTableDrillDownDataExport | string;
  /**
   * Specifies or retrieves the file name used when exporting data from the drill-down table. This determines the default name of the exported file generated during the export operation.
   * Default value: ""
   */
  drillDownDataExportName?: string;
  /**
   * Defines or retrieves the callback function that is triggered when the drill-down dialog is opened in the PivotTable. The callback receives the drill-down Table component as its argument, allowing you to customize the appearance, behavior, or data of the resulting table before it is displayed. Use this function to apply custom formatting, event handlers, or modifications to the drill-down Table component.
   * Default value: null
   */
  drillDownTableInit?: { (table: HTMLElement ): void };
  /**
   * Enhancements for clarity and detail:"Defines or retrieves the callback function that handles custom drill-down actions. When a drill-down event occurs in the PivotTable, this callback is invoked with the drill-down data source as its argument. By providing a custom callback, you can override the default drill-down user interface (which typically displays our Dialog with a Table) and implement your own UI or behavior for presenting the drill-down data."
   * Default value: null
   */
  drillDownCustomAction?: { (originalRecords: [] ): void };
  /**
   * Determines whether column-based sorting is enabled or disabled when using the classic row groups layout mode. When enabled, users can sort data within each column in the classic row grouping layout. This property can be used to either retrieve the current sorting status or set a new value.
   * Default value: false
   */
  enableSortByRowGroups?: boolean;
  /**
   * Determines whether the column headers in the PivotTable remain visible (sticky/frozen) at the top of the view when the user scrolls vertically. Setting this property to true keeps the column headers fixed in place, while false allows them to scroll out of view. This property can be used to set or retrieve the current sticky/frozen state of the PivotTable’s column headers.
   * Default value: false
   */
  freezeHeader?: boolean;
  /**
   * A callback function that provides the default summary operation (e.g., sum, average, count) for a summary column when the column is dynamically assigned as a summary field—such as when a user assigns it by dragging and dropping in the UI designer. This function is invoked to ensure that the appropriate summary logic is applied automatically whenever the summary column configuration changes at runtime.
   * Default value: null
   */
  getDefaultSummaryFunction?: { (column: PivotTableColumn): string };
  /**
   * Specifies whether to display a Grand Total row that aggregates the values of all data rows. When enabled, this option will add a summary row at the bottom of the data set, showing the total or combined values for each relevant column. Can also be used to retrieve the current setting.
   * Default value: false
   */
  grandTotal?: boolean;
  /**
   * Defines or retrieves how nested rows—determined by the specified rowGroup columns—are visually organized and displayed within the grid. This setting controls the appearance and structure of hierarchical row groupings.
   * Default value: default
   */
  groupLayout?: PivotTableGroupLayout | string;
  /**
   * Determines whether the tooltip displaying detailed information is shown or hidden when multiple summary cells, each containing non-null values, are selected. When enabled, the tooltip with details will be suppressed; when disabled, the tooltip will appear as usual. This property can be set to control the tooltip's visibility or retrieved to check its current state.
   * Default value: false
   */
  hideCellSelectionTooltip?: boolean;
  /**
   * Specifies whether rows containing only 0 or null values should be hidden or displayed. This setting is only effective when one or more rowGroup columns are defined. Use this property to control the visibility of empty or zero-value rows within grouped data.
   * Default value: false
   */
  hideEmptyRows?: boolean;
  /**
   * Enables or retrieves the setting that determines whether users can navigate the PivotTable using keyboard shortcuts or arrow keys. When enabled, keyboard navigation allows users to move between cells, fields, and items within the PivotTable, enhancing accessibility and ease of use.
   * Default value: false
   */
  keyboardNavigation?: boolean;
  /**
   * Sets or retrieves the unlockKey property, a unique code or token required to access and activate the product’s full functionality.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language code for the component. This property determines which set of localized messages from the messages object will be used for display. Changing the language automatically updates all text and labels according to the selected locale.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Defines or retrieves an object containing the localized strings used within the element's user interface. This object allows you to customize text elements (such as labels, messages, or tooltips) in different languages. This property works together with the locale property to display the appropriate translations based on the selected or active locale.
   * Default value:    * {"en":{"add":"Add condition","all":"All columns","apply":"Apply","average":"Average","between":"Between","calculation":"Calculation","cancel":"Cancel","center":"center","clear":"Clear","clearFilter":"Clear filter","close":"Close","column":"Column:","columns":"Columns","columnSettings":"Column settings","condition":"Condition:","conditionalFormatting":"Conditional Formatting","CONTAINS_CASE_SENSITIVE":"contains (case sensitive)","CONTAINS":"contains","count":"Count","decimalPlaces":"Decimal places","decimalSeparator":"Decimal separator","details":"Details","DOES_NOT_CONTAIN_CASE_SENSITIVE":"does not contain (case sensitive)","DOES_NOT_CONTAIN":"does not contain","dragHerePivots":"Drag here to set pivots","dragHereRowGroups":"Drag here to set row groups","dragHereSummaries":"Drag here to set summaries","EMPTY":"empty","ENDS_WITH_CASE_SENSITIVE":"ends with (case sensitive)","ENDS_WITH":"ends with","EQUAL_CASE_SENSITIVE":"equal (case sensitive)","equal":"Equal To","EQUAL":"equal","fields":"Fields","filter":"Filter","filterCondition":"Filter condition","filterPlaceholder":"Filter","filters":"Filters","firstButton":"First","fontFamily":"Font family:","fontSize":"Font size:","format":"Format:","formatColumn":"Format Column","grandTotal":"Grand Total","GREATER_THAN_OR_EQUAL":"greater than or equal","GREATER_THAN":"greater than","greaterThan":"Greater Than","groupHeader":"Group","highlight":"Highlight","invalidValue":"Invalid value","itemsPerPage":"Items per page:","lastButton":"Last","left":"left","LESS_THAN_OR_EQUAL":"less than or equal","LESS_THAN":"less than","lessThan":"Less Than","moveTo":"Move to","negativesInBrackets":"Negatives in brackets","nextButton":"Next","NOT_EMPTY":"not empty","NOT_EQUAL":"not equal","NOT_NULL":"not null","notApplicable":"N/A","notEqual":"Not Equal To","NULL":"null","numberAlignment":"Number alignment","numberFormat":"Number format","numberPrefix":"Number prefix","ok":"OK","pivots":"Pivots","previousButton":"Previous","remove":"Remove condition","right":"right","row":"Row","rowGroups":"Row Groups","sameSummaryFunctionRequired":"jqxPivotTable: When "columnTotals" is enabled, all summary columns must have the same "summary" function set (e.g. '
   */
  messages?: any;
  /**
   * Specifies the value to display in cells that lack aggregated data. When set, this value will be shown in any cell where there is no aggregation result available. By default (null), these cells will appear empty. Setting a custom value (such as "N/A" or 0) allows you to indicate explicitly that no data is present in those cells.
   * Default value: null
   */
  nullDefaultValue?: number;
  /**
   * A callback function that is invoked every time a cell within the PivotTable is rendered. This function allows you to customize the content, formatting, or behavior of individual PivotTable cells during the rendering process. It receives contextual information about the cell, such as its row, column, and data value.
   * Default value: null
   */
  onCellRender?: { (data: any, dynamicColumn: any, value: any, cell: HTMLTableCellElement): void };
  /**
   * A callback function that is invoked whenever a column header cell is rendered in the PivotTable. This function allows you to customize the appearance or behavior of each column header as it is generated during the rendering process.
   * Default value: null
   */
  onColumnRender?: { (settings: { text: string, cell: HTMLTableCellElement, column: PivotTableColumn, fullDefinition: any }): void };
  /**
   * A callback function that is executed during the initialization phase of the PivotTable, allowing custom logic to run before the PivotTable is fully rendered or populated with data. This function receives relevant initialization parameters, enabling developers to modify settings or data sources prior to the PivotTable’s display.
   * Default value: null
   */
  onInit?: { (): void };
  /**
   * Specifies or retrieves the number of items displayed per page when paging is enabled. This property determines the page size, allowing you to control how many records are shown on each paginated view.
   * Default value: 10
   */
  pageSize?: PivotTablePageSize | string;
  /**
   * Sets or retrieves the current page index, using a zero-based numbering system (i.e., the first page is index 0). This property is applicable only when paging is enabled, allowing navigation between different pages of content.
   * Default value: 0
   */
  pageIndex?: number;
  /**
   * Gets or sets a value indicating whether paging functionality is enabled, allowing data to be divided and displayed across multiple pages.
   * Default value: false
   */
  paging?: boolean;
  /**
   * Specifies or retrieves whether the element's text direction and alignment are set to support right-to-left (RTL) languages—such as Arabic or Hebrew—by adapting the layout and text flow accordingly. This property ensures that the element properly displays content for users whose locale requires RTL formatting.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines whether sorting by row is enabled when a row group cell is clicked. If columnTotals is also enabled, sorting will be applied within each "column group" individually. If columnTotals is not enabled, sorting will be applied across all columns together. This property can be used to both retrieve the current sorting behavior and to enable or disable sorting by row group interactions.
   * Default value: false
   */
  rowSort?: boolean;
  /**
   * Controls whether row summaries appear in the row headers. When set to true, row headers display summarized information such as "Peterson(40)" (indicating a summary value). When set to false, row headers show only the row label, like "Peterson", without any summary details. Use this option to toggle the visibility of summary data in your row headers.
   * Default value: true
   */
  rowSummary?: boolean;
  /**
   * Determines whether to display row total columns alongside each summary column. When enabled, this option will show an additional column for each summary column, presenting the total value for each row. You can use this property to enable (show) or disable (hide) row total columns as needed.
   * Default value: false
   */
  rowTotals?: boolean;
  /**
   * Sets or retrieves the position of row total columns within the table. This option determines where the columns displaying the total values for each row will appear when the rowTotals feature is enabled. Adjusting this setting allows you to control whether the row totals are displayed at the beginning, end, or a specific location among the table columns.
   * Default value: near
   */
  rowTotalsPosition?: PivotTableRowTotalsPosition | string;
  /**
   * Determines whether users can select table rows using checkboxes. When enabled, a checkbox appears next to each row, allowing selection. This property can be used to enable or check the current state of row selection functionality.
   * Default value: false
   */
  selection?: boolean;
  /**
   * Specifies or retrieves the selection mode for the component. This property is effective only when the selection feature is enabled. When disabled, changing or accessing the selection mode has no effect.
   * Default value: many
   */
  selectionMode?: PivotTableSelectionMode | string;
  /**
   * Specifies the sorting mode applied to the PivotTable, controlling how data rows or columns are ordered (e.g., ascending, descending, or custom criteria). This setting determines the sequence in which PivotTable items are displayed based on the selected sort option.
   * Default value: none
   */
  sortMode?: PivotTableSortMode | string;
  /**
   * Specifies the theme applied to the element. The theme controls the overall appearance, including colors, fonts, and styles, ensuring a consistent look and feel throughout the element.
   * Default value: ""
   */
  theme?: string;
  /**
   * Controls the visibility of the PivotTable toolbar. When displayed, the toolbar includes two breadcrumb components that enable users to modify the row groups and pivot columns directly. It also features "Conditional Formatting" and "Fields" buttons, each of which opens a dialog for configuring additional PivotTable settings.
   * Default value: false
   */
  toolbar?: boolean;
  /**
   * Determines whether a tooltip displaying the full content will appear when hovering over a table cell with truncated (overflowing) content. When enabled, users can view the entire cell content by hovering their mouse over the truncated cell. This property can be set to enable or disable this tooltip behavior and can also be used to check its current status.
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
   * This event is triggered whenever a user clicks on a cell within the component. It provides details about the clicked cell, such as its row and column indices, allowing developers to handle cell-specific actions in response to user interaction.
	* @param event. The custom event. Custom data event was created with: ev.detail(dataField, row)
   *  dataField - The data field of the cell's dynamic column.
   *  row - The data of the cell's row.
   */
  onCellClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the user modifies the current selection, such as highlighting a different portion of text or choosing a new option within a selectable element. It allows you to respond in real time to changes in selection state.
	* @param event. The custom event. Custom data event was created with: ev.detail(type)
   *  type - The type of action that initiated the selection change. Possible types: 'programmatic', 'interaction', 'remove'.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when a user clicks on the header cell of a summary column. It allows you to handle custom actions or logic in response to the user's interaction with the summary column header.
	* @param event. The custom event. Custom data event was created with: ev.detail(columnDefinition, dataField)
   *  columnDefinition - An object detailing the clicked dynamic column.
   *  dataField - The data field of the cell's original column.
   */
  onColumnClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a row within the data table is collapsed by the user, indicating that its expanded content or details are now hidden. It allows you to execute custom logic whenever a previously expanded row is closed.
	* @param event. The custom event. Custom data event was created with: ev.detail(record)
   *  record - The (aggregated) data of the collapsed row.
   */
  onCollapse?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a total column in the data grid is collapsed by the user, signaling that the column’s aggregated summary view has been hidden from display. This allows you to perform custom actions in response to the collapsing of a total column, such as updating UI elements or recalculating totals.
	* @param event. The custom event. Custom data event was created with: ev.detail(columnDefinition)
   *  columnDefinition - The definition of the collapsed total column.
   */
  onCollapseTotalColumn?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a user expands a row, typically to reveal additional details or a nested view associated with that row. It signals that the row has transitioned from a collapsed to an expanded state.
	* @param event. The custom event. Custom data event was created with: ev.detail(record)
   *  record - The (aggregated) data of the expanded row.
   */
  onExpand?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a user expands a total column, typically to reveal underlying details or subrows associated with that column. It allows you to respond to the expansion action, such as loading additional data or updating the user interface accordingly.
	* @param event. The custom event. Custom data event was created with: ev.detail(columnDefinition)
   *  columnDefinition - The definition of the expanded total column.
   */
  onExpandTotalColumn?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a user performs an action that initiates, modifies, or removes any filter within the application. It provides an opportunity to respond to changes in filter settings, such as applying, updating, or clearing filters on displayed data or content.
	* @param event. The custom event. Custom data event was created with: ev.detail(action, filters)
   *  action - The filtering action. Possible actions: 'add', 'remove'.
   *  filters - The added filters. Only when action is 'add'.
   */
  onFilter?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a user clicks on a column header cell within a table or grid. It typically occurs during user interactions such as sorting or selecting columns, making it useful for implementing custom behaviors in response to column header clicks. The event includes relevant details about the column that was clicked, allowing developers to identify and handle specific columns as needed.
	* @param event. The custom event. Custom data event was created with: ev.detail(columns)
   *  columns - An array with information about the dynamic columns the PivotTable has been sorted by.
   */
  onSort?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Applies a filter to a designated column, enabling users to display only the rows that meet specified criteria within that column. This helps refine and customize the data view according to user-defined conditions.
   * @param {string} dataField. The column's data field.
   * @param {any} filter. FilterGroup object.
   */
  addFilter(dataField: string, filter: any): void;
  /**
   * Removes all currently applied filters from the data set, resetting the view to display unfiltered results.
   */
  clearFilters(): void;
  /**
   * Removes any currently selected items or text, resetting the selection state to none.
   */
  clearSelection(): void;
  /**
   * Removes any applied sorting from the PivotTable, restoring the original item order based on the data source’s default arrangement.
   */
  clearSort(): void;
  /**
   * Collapses all rows within the table, minimizing the display of all grouped row sections when multiple row groups are present. This action hides the contents of each group, showing only the group headers or summary rows.
   */
  collapseAllRows(): void;
  /**
   * Collapses a row within a table that has multiple row groups, hiding its detailed content and displaying only the summary or header for that group. This action helps to organize and condense complex tables for easier navigation and viewing.
   * @param {string | number} rowId. The id of the row to collapse. Can be retrieved from the <strong>rows</strong> collection.
   */
  collapseRow(rowId: string | number): void;
  /**
   * Expands all rows in the data grid, including those within multiple row groups, allowing users to view every row regardless of group hierarchy or nesting.
   */
  expandAllRows(): void;
  /**
   * Expands a specific row within the table, allowing additional content or details to be displayed, when multiple row groups are present. This function helps users view more information for a selected row without collapsing the grouping structure.
   * @param {string | number} rowId. The id of the row to expand. Can be retrieved from the <strong>rows</strong> collection.
   */
  expandRow(rowId: string | number): void;
  /**
   * Exports all data from the PivotTable in a structured format, allowing for further analysis, reporting, or use in external applications.
   * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
   * @param {string} fileName. The name of the file to export to
   * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
   * @returns {any}
   */
  exportData(dataFormat: string, fileName: string, callback?: Function): any;
  /**
   * Returns an array of the currently active dynamic pivot columns, reflecting the fields that have been selected or computed for pivoting in the current view or dataset. This allows developers to access and manipulate the current pivot configuration programmatically.
   * @returns {any}
   */
  getDynamicColumns(): any;
  /**
   * Returns an array representing the current selection within the grid, based on the specified <strong>selectionMode</strong>:<br/><br/>- When <strong>selectionMode</strong> is set to <em>'many'</em> or <em>'extended'</em>, the array contains the IDs of all selected rows.<br/>- When <strong>selectionMode</strong> is set to <em>'cell'</em>, the array contains objects with details about each selected cell (such as row and column identifiers).<br/><br/>The structure of the returned array adapts dynamically to match the current selection mode.
   * @returns {(string | number)[] | { dataField: string, rowId: string | number }[]}
   */
  getSelection(): (string | number)[] | { dataField: string, rowId: string | number }[];
  /**
   * Updates the PivotTable data and recalculates all its values, ensuring that any changes in the underlying data source are reflected in the PivotTable’s current view.
   */
  refresh(): void;
  /**
   * Removes all active filters from a specified column, restoring the column to display its full, unfiltered dataset.
   * @param {string} dataField. The column's data field.
   */
  removeFilter(dataField: string): void;
  /**
   * Enables selection of rows or cells within the data grid, depending on the specified <strong>selectionMode</strong>:<br/><br/>- When <strong>selectionMode</strong> is set to <em>'many'</em> or <em>'extended'</em>, this function allows for the selection of one or multiple rows.<br/>- When <strong>selectionMode</strong> is set to <em>'cell'</em> and a second argument is provided, it allows for the selection of a single cell instead of an entire row.<br/><br/>Use the appropriate <strong>selectionMode</strong> and arguments to control whether users can select individual rows, multiple rows, or specific cells within the grid.
   * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select (or of the cell's parent row when <strong>selectionMode</strong> is <em>'cell'</em>). Can be retrieved from the <strong>rows</strong> collection.
   * @param {string} dataField?. The dataField of the dynamic column (can be retrieved by calling <strong>getDynamicColumns</strong>) of the cell to select (only applicable when <strong>selectionMode</strong> is <em>'cell'</em>).
   */
  select(rowId: string | number | (string | number)[], dataField?: string): void;
  /**
   * Sorts the data based on the values in a summary or grouping column, allowing you to organize records according to aggregated results or group identifiers.
   * @param {any} columnDefinition. The dynamic column's definition. Can be retrieved from the method <strong>getDynamicColumns</strong>.
   * @param {string} sortOrder?. Sort order. Possible values: 'asc' (ascending), 'desc' (descending), and null (removes sorting by column). If not provided, toggles the sorting.
   */
  sortBy(columnDefinition: any, sortOrder?: string): void;
  /**
   * Deselects one or more rows when <strong>selectionMode</strong> is set to <em>'many'</em> or <em>'extended'</em>. Alternatively, if <strong>selectionMode</strong> is <em>'cell'</em> and a second argument specifying the target cell is provided, this method will deselect the specified cell. This allows for flexible unselection behavior depending on the current selection mode and provided arguments.
   * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select (or of the cell's parent row when <strong>selectionMode</strong> is <em>'cell'</em>). Can be retrieved from the <strong>rows</strong> collection.
   * @param {string} dataField?. The dataField of the dynamic column (can be retrieved by calling <strong>getDynamicColumns</strong>) of the cell to select (only applicable when <strong>selectionMode</strong> is <em>'cell'</em>).
   */
  unselect(rowId: string | number | (string | number)[], dataField?: string): void;
  /**
   * Sets the locale of a component.
   * @param {string} locale. The locale abbreviation. For example: 'de'.
   * @param {any} messages?. Object containing the locale messages.
   */
  setLocale(locale: string, messages?: any): void;
}

export interface PivotTableColumn {
  /**
   * Sets or gets the header cell alignment for pivot and summary columns and cell alignment for row group columns.
   * Default value: left
   */
  align?: PivotTableColumnAlign | string;
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
  dataType?: PivotTableColumnDataType | string;
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
  summary?: PivotTableColumnSummary | string;
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
  condition?: PivotTableConditionalFormattingCondition | string;
  /**
   * The value to compare by. When condition is 'between', this is the start (from) value.
   * Default value: 0
   */
  firstValue?: number;
  /**
   * The fontFamily to apply to formatted cells.
   * Default value: The default fontFamily as set in CSS
   */
  fontFamily?: PivotTableConditionalFormattingFontFamily | string;
  /**
   * The fontSize to apply to formatted cells. The fontSize as set in CSS is used by default.
   * Default value: 14px
   */
  fontSize?: PivotTableConditionalFormattingFontSize | string;
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
/**Gets or sets the position of the total columns, which are displayed only when columnTotals is enabled. This option determines where the summary columns appear in the table, such as at the end (right side) of all columns. */
export declare type PivotTableColumnTotalsPosition = 'near' | 'far';
/**The formatting condition. */
export declare type PivotTableConditionalFormattingCondition = 'between' | 'equal' | 'greaterThan' | 'lessThan' | 'notEqual';
/**The fontFamily to apply to formatted cells. */
export declare type PivotTableConditionalFormattingFontFamily = 'The default fontFamily as set in CSS' | 'Arial' | 'Courier New' | 'Georgia' | 'Times New Roman' | 'Verdana';
/**The fontSize to apply to formatted cells. The fontSize as set in CSS is used by default. */
export declare type PivotTableConditionalFormattingFontSize = '8px' | '9px' | '10px' | '11px' | '12px' | '13px' | '14px' | '15px' | '16px';
/**Gets or sets the position of the PivotTable’s designer interface, which appears when the designer option is enabled. This property allows you to specify or retrieve where the designer UI is displayed within the application layout. */
export declare type PivotTableDesignerPosition = 'near' | 'far';
/**Displays an export button within the drill-down dialog when this option is enabled, allowing users to export data directly from the dialog. */
export declare type PivotTableDrillDownDataExport = null | 'xlsx' | 'pdf' | 'html' | 'json' | 'csv' | 'tsv' | 'xml';
/**Defines or retrieves how nested rows—determined by the specified rowGroup columns—are visually organized and displayed within the grid. This setting controls the appearance and structure of hierarchical row groupings. */
export declare type PivotTableGroupLayout = 'classic' | 'default';
/**Specifies or retrieves the number of items displayed per page when paging is enabled. This property determines the page size, allowing you to control how many records are shown on each paginated view. */
export declare type PivotTablePageSize = '10' | '25' | '50';
/**Sets or retrieves the position of row total columns within the table. This option determines where the columns displaying the total values for each row will appear when the rowTotals feature is enabled. Adjusting this setting allows you to control whether the row totals are displayed at the beginning, end, or a specific location among the table columns. */
export declare type PivotTableRowTotalsPosition = 'near' | 'far';
/**Specifies or retrieves the selection mode for the component. This property is effective only when the selection feature is enabled. When disabled, changing or accessing the selection mode has no effect. */
export declare type PivotTableSelectionMode = 'many' | 'extended' | 'cell';
/**Specifies the sorting mode applied to the PivotTable, controlling how data rows or columns are ordered (e.g., ascending, descending, or custom criteria). This setting determines the sequence in which PivotTable items are displayed based on the selected sort option. */
export declare type PivotTableSortMode = 'none' | 'one' | 'many';
