import  {BaseElement} from "./smart.element"

/**
 Data Grid UI Component that covers everything from paging, sorting, grouping, filtering, and editing to row and column virtualization, right-to-left layout, export to Excel and PDF and Accessibility.
*/
export interface Grid extends BaseElement {
  /**
   * An object containing settings related to the grid's appearance.
   * Default value: [object Object]
   */
  appearance: GridAppearance;
  /**
   * An object containing settings related to the grid's behavior.
   * Default value: [object Object]
   */
  behavior: GridBehavior;
  /**
   * An object containing settings related to the grid's layout.
   * Default value: [object Object]
   */
  layout: GridLayout;
  /**
   * The clipboard property is used to enable/disable clipboard operations with Ctrl+C, Ctrl+X and Ctrl+V keyboard navigations..
   * Default value: [object Object]
   */
  clipboard: GridClipboard;
  /**
   * The columns property is used to describe all columns displayed in the grid. 
   * Default value: []
   */
  columns: GridColumn[];
  /**
   * Column Menu is the drop-down menu displayed after clicking the column header's drop-down button, which is displayed when you hover the column header. It allows you to customize column settings. For example: Sort, Filter or Group the Grid by the current column.
   * Default value: [object Object]
   */
  columnMenu: GridColumnMenu;
  /**
   * Describes the settings of the column groups.
   * Default value: 
   */
  columnGroups: GridColumnGroup[];
  /**
   * Sets the Grid Charting Data Visualization.
   * Default value: [object Object]
   */
  charting: GridCharting;
  /**
   * Sets the TreeGrid checkboxes.
   * Default value: [object Object]
   */
  checkBoxes: GridCheckBoxes;
  /**
   * Sets the Grid Data Export options.
   * Default value: [object Object]
   */
  dataExport: GridDataExport;
  /**
   * Sets the grid's data source. The value of dataSource can be an instance of Smart.DataAdapter.
   * Default value: null
   */
  dataSource: any;
  /**
   * Describes the grid's editing settings.
   * Default value: [object Object]
   */
  editing: GridEditing;
  /**
   * Describes the grid's filtering settings.
   * Default value: [object Object]
   */
  filtering: GridFiltering;
  /**
   * Describes the grid's grouping settings.
   * Default value: [object Object]
   */
  grouping: GridGrouping;
  /**
   * Sets the messages values.
   * Default value:    * [object Object]
   */
  messages: any;
  /**
   * Callback function(cell: Smart.Grid.Cell) called when the Grid needs a cell value to render it. When you implement this function, you can override the default cell value rendering.
   * Default value: null
   */
  onCellValue: any;
  /**
   * Callback function(cell: Smart.Grid.Cell, oldValue, value, confirm: function) called when a cell value will be updated. This function is useful if you want to make Ajax call to a server to validate the cell changes. If the changes are validated, invoke the confirm function.
   * Default value: null
   */
  onCellUpdate: any;
  /**
   * Callback function(cell: Smart.Grid.Cell) called when a cell is rendered. This function is useful if you want to customize Smart.Grid.Cell properties, before the cell is rendered.
   * Default value: null
   */
  onCellRender: any;
  /**
   * Callback function() called before the grid has been initialized and the Grid's Virtual DOM is not created.
   * Default value: null
   */
  onBeforeInit: any;
  /**
   * Callback function() called when the grid is initializing and the Grid's Virtual DOM is created.
   * Default value: null
   */
  onInit: any;
  /**
   * Callback function() called after the grid has been initialized and the Grid's Virtual DOM is created.
   * Default value: null
   */
  onAfterInit: any;
  /**
   * Callback function(chart: Smart.Chart) called when the chart has been initialized. You can use this function to customize the Chart element settings.
   * Default value: null
   */
  onChartInit: any;
  /**
   * Callback function() called when the grid has been rendered.
   * Default value: null
   */
  onRender: any;
  /**
   * Callback function(event: KeyboardEvent) called when the grid is on focus and a keyboard key is pressed.
   * Default value: null
   */
  onKey: any;
  /**
   * Callback function(index: number, row: Smart.Grid.Row) called when a row is initializing. This function can be used to customize the row settings.
   * Default value: null
   */
  onRowInit: any;
  /**
   * Callback function(index: number, row: Smart.Grid.Row, detail: HTMLElement) called when a row detail is initializing. Row details are displayed below the row's data or in a separate dialog.
   * Default value: null
   */
  onRowDetailInit: any;
  /**
   * Callback function(index: number, row: Smart.Grid.Row, detail: HTMLElement) called when a row detail is udpating.
   * Default value: null
   */
  onRowDetailUpdated: any;
  /**
   * Callback function(index: number, row: Smart.Grid.Row) called when a row has been inserted.
   * Default value: null
   */
  onRowInserted: any;
  /**
   * Callback function(index: number, row: Smart.Grid.Row) called when a row has been removed.
   * Default value: null
   */
  onRowRemoved: any;
  /**
   * Callback function(row: Smart.Grid.Row, oldValues, values, confirm: function) called when row's cell values will be updated. This function is useful if you want to make Ajax call to a server to validate the edit changes. If the changes are validated, invoke the confirm function.
   * Default value: null
   */
  onRowUpdate: any;
  /**
   * Callback function(index: number, row: Smart.Grid.Row) called when a row has been updated.
   * Default value: null
   */
  onRowUpdated: any;
  /**
   * Callback function(index: number, column: Smart.Grid.Column) called when a column has been initialized. This function can be used to customize the column settings.
   * Default value: null
   */
  onColumnInit: any;
  /**
   * Callback function(index: number, column: Smart.Grid.Column) called when a column has been inserted.
   * Default value: null
   */
  onColumnInserted: any;
  /**
   * Callback function(index: number, column: Smart.Grid.Column) called when a column has been removed.
   * Default value: null
   */
  onColumnRemoved: any;
  /**
   * Callback function(index: number, column: Smart.Grid.Column) called when a column has been updated.
   * Default value: null
   */
  onColumnUpdated: any;
  /**
   * Callback function(name: string, command: function, details: Object, event: Event, handled: boolean) called when a command is executed. The name argument is the command's name. The command argument is the command's function. details are built in command arguments passed by the Grid. The handled parameter allows you to cancel built-in command, because when you set it to true the Grid will not execute the default command's behavior.
   * Default value: null
   */
  onCommand: any;
  /**
   * Describes the paging settings.
   * Default value: [object Object]
   */
  paging: GridPaging;
  /**
   * Describes the pager settings.
   * Default value: [object Object]
   */
  pager: GridPager;
  /**
   * Sets the row details.
   * Default value: [object Object]
   */
  rowDetail: GridRowDetail;
  /**
   * Sets the scroll mode settings.
   * Default value: physical
   */
  scrolling: "physical" | "virtual" | "infinite" | "deferred";
  /**
   * Describes the column header settings.
   * Default value: [object Object]
   */
  columnHeader: GridColumnHeader;
  /**
   * Describes the settings for the group header.
   * Default value: [object Object]
   */
  groupHeader: GridGroupHeader;
  /**
   * Describes the header settings of the grid.
   * Default value: [object Object]
   */
  header: GridHeader;
  /**
   * Describes the footer settings of the grid.
   * Default value: [object Object]
   */
  footer: GridFooter;
  /**
   * The rows property is used to describe all rows displayed in the grid. Each row is Smart.Grid.Row object.
   * Default value: 
   */
  rows: GridRow[];
  /**
   * Describes the selection settings.
   * Default value: [object Object]
   */
  selection: GridSelection;
  /**
   * Describes sorting settings.
   * Default value: [object Object]
   */
  sorting: GridSorting;
  /** 
   * This event is triggered, when the edit begins.
   * @param ev. The custom event. Custom data event was created with: ev.detail(row, column, cell)
   *  row - The edited row. The row's type is: Smart.Grid.Row.
   *  column - The edited column. The column's type is: Smart.Grid.Column.
   *  cell - The edited cell. The cell's type is: Smart.Grid.Cell.
   */
  onbeginedit: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the selection is changed. When you select with a drag, the event is triggered when the drag starts and ends. 
   * @param ev. The custom event. Custom data event was created with: ev.detail(started, finished, originalEvent)
   *  started - The flag is <em>true</em>, when the selection starts. The flag is <em>false</em>, when the selection ends and when the user changes the selection by dragging.
   *  finished - The flag is <em>true</em>, when the selection ends. The flag is <em>false</em>, when the selection starts and when the user changes the selection by dragging.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onchange: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user clicks on the header of a column.
   * @param ev. The custom event. Custom data event was created with: ev.detail(column, originalEvent)
   *  column - The clicked column. The column's type is: Smart.Grid.Column.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  oncolumnclick: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user double clicks on the header of a column.
   * @param ev. The custom event. Custom data event was created with: ev.detail(column, originalEvent)
   *  column - The double-clicked column. The column's type is: Smart.Grid.Column.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  oncolumndoubleclick: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user resized a column.
   * @param ev. The custom event. Custom data event was created with: ev.detail(column, oldWidth, width)
   *  column - The resized column. The column's type is: Smart.Grid.Column.
   *  oldWidth - The old width of the column.
   *  width - The new width of the column.
   */
  oncolumnresize: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user expands a row of the grid. The Grid is in TreeGrid/Grouping mode.
   * @param ev. The custom event. Custom data event was created with: ev.detail(row, originalEvent)
   *  row - The expanded row. The row's type is: Smart.Grid.Row.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onrowexpand: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user collapsed a row of the grid. The Grid is in TreeGrid/Grouping mode.
   * @param ev. The custom event. Custom data event was created with: ev.detail(row, originalEvent)
   *  row - The collapsed row. The row's type is: Smart.Grid.Row.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onrowcollapse: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user clicks on a row of the grid.
   * @param ev. The custom event. Custom data event was created with: ev.detail(row, originalEvent)
   *  row - The clicked row. The row's type is: Smart.Grid.Row.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onrowclick: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user double clicks on a row of the grid.
   * @param ev. The custom event. Custom data event was created with: ev.detail(row, originalEvent)
   *  row - The double-clicked row. The row's type is: Smart.Grid.Row.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onrowdoubleclick: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user resized a row.
   * @param ev. The custom event. Custom data event was created with: ev.detail(row, oldHeight, height)
   *  row - The resized row. The row's type is: Smart.Grid.Row.
   *  oldHeight - The old height of the row.
   *  height - The new height of the row.
   */
  onrowresize: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user clicks on a cell of the grid.
   * @param ev. The custom event. Custom data event was created with: ev.detail(cell, originalEvent)
   *  cell - The clicked cell. The cell's type is: Smart.Grid.Cell.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  oncellclick: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user double clicks on a cell of the grid.
   * @param ev. The custom event. Custom data event was created with: ev.detail(cell, originalEvent)
   *  cell - The double-clicked cell. The cell's type is: Smart.Grid.Cell.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  oncelldoubleclick: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the edit ends.
   * @param ev. The custom event. Custom data event was created with: ev.detail(row, column, cell)
   *  row - The edited row. The row's type is: Smart.Grid.Row.
   *  column - The edited column. The column's type is: Smart.Grid.Column.
   *  cell - The edited cell. The cell's type is: Smart.Grid.Cell.
   */
  onendedit: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered, when a filter is added or removed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(columns, data)
   *  columns - Array of columns. Each column in the array is Smart.Grid.Column object.
   *  data - Array of {dataField: string, filter: string}. <em>dataField</em> is the column's data field. <em>filter</em> is a filter expression like 'startsWith B'
   */
  onfilter: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the grid is resized.
   * @param ev. The custom event.    */
  onresize: ((ev: Event) => any) | null;
  /** 
   * This event is triggered when the user touches and holds on the row for at least 300ms.
   * @param ev. The custom event. Custom data event was created with: ev.detail(row, originalEvent)
   *  row - The tapped row. The row's type is: Smart.Grid.Row.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onrowtap: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user touches and holds on the cell for at least 300ms.
   * @param ev. The custom event. Custom data event was created with: ev.detail(cell, originalEvent)
   *  cell - The tapped row. The cell's type is: Smart.Grid.Cell.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  oncelltap: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user changes the pages.
   * @param ev. The custom event.    */
  onpage: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered, when a sorting column is added or removed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(columns, data)
   *  columns - Array of columns. Each column in the array is Smart.Grid.Column object.
   *  data - Array of {dataField: string, sortOrder: string, sortIndex: number}. <em>dataField</em> is the column's data field. <em>sortOrder</em> is 'asc' or 'desc', <em>sortIndex</em> is the index of the column in multi column sorting.
   */
  onsort: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user reaches the bottom of the grid.
   * @param ev. The custom event.    */
  onscrollbottomreached: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user reaches the top of the grid.
   * @param ev. The custom event.    */
  onscrolltopreached: ((this: Window, ev: Event) => any) | null;
  /**
   * Adds a new row and puts it into edit mode. When batch editing is enabled, the row is not saved until the batch edit is saved.
   * @param {string} position?. 'near' or 'far'
   * @returns {boolean}
   */
  addNewRow(position?: string): boolean;
  /**
   * Adds a new unbound row to the top or bottom. Unbound rows are not part of the Grid's dataSource. They become part of the dataSource, after an unbound row is edited.
   * @param {number} count. The count of unbound rows.
   * @param {string} position?. 'near' or 'far'
   * @returns {boolean}
   */
  addUnboundRow(count: number, position?: string): boolean;
  /**
   * Adds a filter to a column. This method will apply a filter to the Grid data.
   * @param {string} dataField. column bound data field
   * @param {string} filter. Filter expression like: 'startsWith B'
   * @param {boolean} refreshFilters?. 
   */
  addFilter(dataField: string, filter: string, refreshFilters?: boolean): void;
  /**
   * Auto-sizes grid rows. This method will update the <em>height</em> of all Grid rows.
   */
  autoSizeRows(): void;
  /**
   * Auto-sizes grid columns. This method will update the <em>width</em> of all Grid columns.
   */
  autoSizeColumns(): void;
  /**
   * Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once.
   */
  beginUpdate(): void;
  /**
   * Begins row, cell or column. This method allows you to programmatically start a cell, row or column editing. After calling it, an editor HTMLElement will be created and displayed in the Grid.
   * @param {string} rowId. row bound id
   * @param {string} dataField?. column bound data field
   * @returns {boolean}
   */
  beginEdit(rowId: string, dataField?: string): boolean;
  /**
   * Clears all filters. Refreshes the view and updates all filter input components.
   */
  clearFilter(): void;
  /**
   * Clears the selection that user have made. All row, cell and column selection highlights will be removed.
   */
  clearSelection(): void;
  /**
   * Cancels the editing. This method closes the cell editor and cancels the changes.
   */
  cancelEdit(): void;
  /**
   * Checks a TreeGrid row. This method updates the row's check-box.
   * @param {string} rowId. row bound id
   */
  checkRow(rowId: string): void;
  /**
   * Checks all TreeGrid or Grouping rows. This method updates all check-boxes in the TreeGrid or Grouping rows.
   */
  checkAllRows(): void;
  /**
   * Clears the user selection and empties the data source. The Grid will display 'No Rows' in the view.
   */
  clearRows(): void;
  /**
   * Closes the column drop-down menu.
   */
  closeMenu(): void;
  /**
   * Collapses a TreeGrid or Grouping row.
   * @param {string} rowId. row bound id
   */
  collapseRow(rowId: string): void;
  /**
   * Collapses all TreeGrid or Grouping rows.
   */
  collapseAllRows(): void;
  /**
   * Creates a Chart, when charting is enabled.
   * @param {string} type. Chart's type
   * @param {any[]} dataSource?. Chart's data source
   */
  createChart(type: string, dataSource?: any[]): void;
  /**
   * Delete a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
   * @param {string} rowId. row bound id
   */
  deleteRow(rowId: string): void;
  /**
   * Scrolls to a row or cell. This method scrolls to a row or cell, when scrolling is necessary. If pagination is enabled, it will automatically change the page.
   * @param {string} rowId. row bound id
   * @param {string} dataField?. column bound data field
   * @returns {boolean}
   */
  ensureVisible(rowId: string, dataField?: string): boolean;
  /**
   * Ends the editing. This method confirms all changes and closes the opened cell editor(s).
   */
  endEdit(): void;
  /**
   * Ends the update operation. This method will resume the rendering and will refresh the Grid.
   * @param {boolean} refresh?. The flag that control the calls of the refresh method.
   */
  endUpdate(refresh?: boolean): void;
  /**
   * Expands a TreeGrid or Grouping row.
   * @param {string} rowId. row bound id
   */
  expandRow(rowId: string): void;
  /**
   * Expands all TreeGrid or Grouping rows.
   */
  expandAllRows(): void;
  /**
   * Exports the Grid data to .XLSX, .PDF, .JSON, .XML, .CSV, .TSV, .HTML, .JPEG or .PNG. The method uses the options of the <em>dataExport</em> property.
   * @param {string} Dataformat. 'xlsx', 'pdf', 'json', 'xml', 'csv', 'tsv', 'html', 'png', 'jpeg'.
   */
  exportData(Dataformat: string): void;
  /**
   * Gets an array of columns with applied sorting.
   * @returns 
   */
  getSortedColumns(): {[dataField: string]: { sortOrder: string, sortIndex: number }};
  /**
   * Gets the selection.
   * @returns {any}
   */
  getSelection(): any;
  /**
   * Gets an array of columns with applied filters.
   * @returns {any}
   */
  getFilteredColumns(): any;
  /**
   * Gets an array of rows, which are visible and match the applied filter.
   * @returns {any}
   */
  getVisibleRows(): any;
  /**
   * Gets the result of the getVisibleRows or the rows hierarchy, when the Grid is in TreeGrid/Grouping mode.
   * @returns {any}
   */
  getViewRows(): any;
  /**
   * Gets the changes from the batch edit.
   * @returns 
   */
  getBatchEditChanges(): { upDated: [{ id: string, dataField: string, oldValue: Object, newValue: Object }], deleted: [{id: string, data: Object}], added: [{id: string, data: Object}] };
  /**
   * Gets whether a column's drop-down menu is opened.
   * @returns {boolean}
   */
  hasMenu(): boolean;
  /**
   * Hides the Details of a Row, when row details are enabled.
   * @param {string} rowId. row bound id
   */
  hideDetail(rowId: string): void;
  /**
   * Opens a column drop-down menu.
   * @param {string} dataField. column bound data field
   */
  openMenu(dataField: string): void;
  /**
   * Prints the Grid data. The method uses the options of the <em>dataExport</em> property. When printed, the Grid will not display any scrollbars so all rows and columns will be displayed. The grid will auto resize width and height to fit all contents. To customize the printing options, you can use  the <em>dataExport</em> property.
   */
  print(): void;
  /**
   * Renders the grid. This method will make a full-refresh like in the initial Grid creation. It will create Rows, Columns and Cells HTML Elements and then refresh the Grid layout.
   */
  render(): void;
  /**
   * Refreshes the grid with the current property values. This method will refresh the Grid layout.
   */
  refresh(): void;
  /**
   * Refreshes the grid cells in view. The method is useful for live-updates of cell values.
   */
  refreshView(): void;
  /**
   * Removes a column filter. 
   * @param {string} dataField. column bound data field
   * @param {boolean} refreshFilters?. 
   */
  removeFilter(dataField: string, refreshFilters?: boolean): void;
  /**
   * Reverts the batch edit changes. This method cancels all changes made by the end-user.
   */
  revertBatchEdit(): void;
  /**
   * Saves the batch edit changes. This method confirms the editing changes made by the end-user.
   */
  saveBatchEdit(): void;
  /**
   * Selects a row, cell or column.
   * @param {string} rowId. row bound id
   * @param {string} dataField?. column bound data field
   */
  select(rowId: string, dataField?: string): void;
  /**
   * Selects a range of rows, cells or columns. The result of the method depends on the <em>selection</em> configuration of the Grid.
   * @param {string} rowId. row bound id
   * @param {string} dataField. column bound data field
   * @param {string} endRowId. row bound id
   * @param {string} endDataField. column bound data field
   */
  selectRange(rowId: string, dataField: string, endRowId: string, endDataField: string): void;
  /**
   * Shows the Details of a Row, when row details are enabled.
   * @param {string} rowId. row bound id
   */
  showDetail(rowId: string): void;
  /**
   * Unselects a row, cell or column.
   * @param {string} rowId. row bound id
   * @param {string} dataField?. column bound data field
   */
  unselect(rowId: string, dataField?: string): void;
  /**
   * Unchecks a TreeGrid row. Sets its check-box to false.
   * @param {string} rowId. row bound id
   */
  uncheckRow(rowId: string): void;
  /**
   * Unchecks all TreeGrid or Grouping rows. Sets all check-boxes to false.
   */
  uncheckAllRows(): void;
  /**
   * Toggles a TreeGrid row. When this method is called, the row is expanded, if it's state is collapsed and collapsed if it's state is expanded.
   * @param {string} rowId. row bound id
   */
  toggleRow(rowId: string): void;
}

/**An object containing settings related to the grid's appearance. */
export interface GridAppearance {
  /**
   * Starting row index of alternating colors.
   * Default value: 0
   */
  alternationStart: number;
  /**
   * Ending row index of alternating colors.
   * Default value: 0
   */
  alternationEnd: number;
  /**
   * number of row color alternations.
   * Default value: 0
   */
  alternationCount: number;
  /**
   * Enables row hover effect. Applies a hover style to the cells.
   * Default value: false
   */
  allowHover: boolean;
  /**
   * Enables header hover effect. Applies a hover style to the headers.
   * Default value: true
   */
  allowHeaderHover: boolean;
  /**
   * Enables row toggle animation. This animation starts when you expand/collapse a row in TreeGrid/Grouping mode.
   * Default value: false
   */
  allowRowToggleAnimation: boolean;
  /**
   * Enables sorting animation. Data records are sorted with animation, when sorting is applied.
   * Default value: false
   */
  allowSortAnimation: boolean;
  /**
   * Enables column label animation. The label is moved to 'left' with animation, when the column header's drop-down button is displayed on hover or sorting is applied.
   * Default value: true
   */
  allowColumnLabelAnimation: boolean;
  /**
   * Enables column menu animation. When you click on the column header's drop-down button, the menu is animated.
   * Default value: true
   */
  allowColumnMenuAnimation: boolean;
  /**
   * Enables column sort button animation. When you click on a sortable column to change the sort order, the sort button is animated.
   * Default value: true
   */
  allowColumnSortButtonAnimation: boolean;
  /**
   * Enables column action button animation. The drop-down button displayed on column header hover is optionally animated.
   * Default value: true
   */
  allowColumnActionButtonAnimation: boolean;
  /**
   * Enables column filter button animation.
   * Default value: true
   */
  allowColumnFilterButtonAnimation: boolean;
  /**
   * If enabled, automatically shows column sort button. The sort button is displayed only when the column is sorted. If the property's value is false, sort button will be always displayed to indicate that sorting is possible.
   * Default value: true
   */
  autoShowColumnSortButton: boolean;
  /**
   * If enabled, automatically shows column action button.
   * Default value: true
   */
  autoShowColumnActionButton: boolean;
  /**
   * If enabled, automatically shows column filter button.
   * Default value: true
   */
  autoShowColumnFilterButton: boolean;
  /**
   * Generates labels as 'numbers' or 'letters'. This property affects the rendering of the row header.
   * Default value: "number"
   */
  autoGenerateRowLabelMode: string;
  /**
   * Generates labels as 'numbers' or 'letters.  This property affects the rendering of the column header.
   * Default value: "letter"
   */
  autoGenerateColumnLabelMode: string;
  /**
   * Sets the visibility of the loading indicator. This is the Loading... image displayed in the Grid while loading data.
   * Default value: false
   */
  displayLoadingIndicator: boolean;
  /**
   * Sets the loading indicator label.  This is the Text displayed while loading data.
   * Default value: "Loading..."
   */
  loadingIndicatorPlaceholder: string;
  /**
   * Sets the placeholder of the Grid. The placeholder is displayed when the Grid is empty.
   * Default value: "No Rows"
   */
  placeholder: string;
  /**
   * Sets the duration of sorting animation. This property is related to the allowSortAnimation property.
   * Default value: 500
   */
  sortAnimationDuration: number;
  /**
   * Shows or hides Row header.
   * Default value: false
   */
  showRowHeader: boolean;
  /**
   * Shows row indexes in the row header. The showRowHeader property should be true
   * Default value: false
   */
  showRowHeaderNumber: boolean;
  /**
   * Shows edit icon when a cell or row is in edit state.
   * Default value: true
   */
  showRowHeaderEditIcon: boolean;
  /**
   * Shows select icon when the pointer is over the row header cell.
   * Default value: false
   */
  showRowHeaderSelectIcon: boolean;
  /**
   * Shows focus icon on cell or row focus.
   * Default value: false
   */
  showRowHeaderFocusIcon: boolean;
  /**
   * Shows column header lines.
   * Default value: true
   */
  showColumnHeaderLines: boolean;
  /**
   * Shows column lines.
   * Default value: true
   */
  showColumnLines: boolean;
  /**
   * Shows row lines.
   * Default value: true
   */
  showRowLines: boolean;
  /**
   * Shows filtered column background, when filter is applied.
   * Default value: true
   */
  showFilterColumnBackground: boolean;
  /**
   * Shows sorted column background, when sorting is applied.
   * Default value: true
   */
  showSortColumnBackground: boolean;
  /**
   * Shows frozen column background, when the Grid has frozen columns.
   * Default value: true
   */
  showFrozenColumnBackground: boolean;
  /**
   * Shows filtered row background, when the Grid has frozen rows.
   * Default value: true
   */
  showFrozenRowBackground: boolean;
  /**
   * Shows column sort button.
   * Default value: true
   */
  showColumnSortButton: boolean;
  /**
   * Shows column filter button.
   * Default value: true
   */
  showColumnFilterButton: boolean;
  /**
   * Shows column description button. The button's style is customizable through the Grid CSS.
   * Default value: false
   */
  showColumnDescriptionButton: boolean;
  /**
   * Shows column icon within the column's header.
   * Default value: false
   */
  showColumnIcon: boolean;
  /**
   * Shows column custom button. User-defined button shown in the column header.
   * Default value: false
   */
  showColumnCustomButton: boolean;
  /**
   * Shows column action button. This is the drop-down button displayed in the column header.
   * Default value: true
   */
  showColumnActionButton: boolean;
  /**
   * Shows tooltips when user hovers columns or cells.
   * Default value: false
   */
  showTooltips: boolean;
  /**
   * Shows horizontal scrollbar on fixed columns.
   * Default value: false
   */
  showHorizontalScrollBarOnFixedColumns: boolean;
  /**
   * Shows vertical scrollbar on fixed columns.
   * Default value: false
   */
  showVerticalScrollBarOnFixedColumns: boolean;
}

/**An object containing settings related to the grid's behavior. */
export interface GridBehavior {
  /**
   * Auto-Resize on double-click of a column's right border.
   * Default value: true
   */
  allowColumnAutoSizeOnDoubleClick: boolean;
  /**
   * Auto-Resize on double-click of a row's bottom border.
   * Default value: true
   */
  allowRowAutoSizeOnDoubleClick: boolean;
  /**
   * Sets the column resize mode. split resize mode 'grows' or 'shrinks' the resize element's size and 'shrinks' or 'grows' the next sibling element's size. growAndShrink resize mode 'grows' or 'shrinks' the resize element's size
   * Default value: none
   */
  columnResizeMode: "none" | "split" | "growAndShrink";
  /**
   * Sets the row resize mode. split resize mode 'grows' or 'shrinks' the resize element's size and 'shrinks' or 'grows' the next sibling element's size. growAndShrink resize mode 'grows' or 'shrinks' the resize element's size
   * Default value: none
   */
  rowResizeMode: "none" | "split" | "growAndShrink";
}

/**An object containing settings related to the grid's layout. */
export interface GridLayout {
  /**
   * Enables or disables the Cells Value wrapping. When the property is true, cell value can wrap in multiple lines.
   * Default value: false
   */
  allowCellsWrap: boolean;
  /**
   * Sets the width of the auto-generated Grid columns.
   * Default value: null
   */
  autoGenerateColumnWidth: number | null;
  /**
   * Sets the width of the Grid columns.
   * Default value: null
   */
  columnWidth: any;
  /**
   * Sets the height of the Grid columns.
   * Default value: null
   */
  columnHeight: any;
  /**
   * Sets the minimum height of the Grid columns.
   * Default value: 30
   */
  columnMinHeight: any;
  /**
   * Sets the minimum height of the Grid rows.
   * Default value: 30
   */
  rowMinHeight: number;
  /**
   * Sets the height of the Grid rows. The property can be set to null, auto or a number.
   * Default value: null
   */
  rowHeight: any;
}

/**The <em>clipboard</em> property is used to enable/disable clipboard operations with Ctrl+C, Ctrl+X and Ctrl+V keyboard navigations.. */
export interface GridClipboard {
  /**
   * Sets or gets whether the property is enabled.
   * Default value: true
   */
  enabled: boolean;
  /**
   * Sets or gets whether the copy-pasted values will be auto-filled by using automatic pattern detection. This is used in the Drag&Drop Multiple Cells selection. none does nothing. copy just copies the cells. 'fillSeries' detects and automatically fills the values. For example, if the selection has '1, 2' and the possible positions are more, the pasted values would be '1, 2, 3, 4, etc.
   * Default value: fillSeries
   */
  autoFillMode: "none" | "copy" | "fillSeries";
  /**
   * Sets or gets a callback on paste.
   * Default value: none
   */
  onPasteValue: any;
}

export interface GridColumn {
  /**
   * Sets or gets the column's header alignment. Accepts: 'left', 'right', 'center'
   * Default value: left
   */
  align: "left" | "right" | "center";
  /**
   * Sets or gets whether the column can be exported.
   * Default value: true
   */
  allowExport: boolean;
  /**
   * Sets or gets whether the column can be grouped.
   * Default value: true
   */
  allowGroup: boolean;
  /**
   * Sets or gets whether the column can be hidden.
   * Default value: true
   */
  allowHide: boolean;
  /**
   * Sets or gets whether the column can be selected.
   * Default value: true
   */
  allowSelect: boolean;
  /**
   * Sets or gets whether the column can be edited.
   * Default value: true
   */
  allowEdit: boolean;
  /**
   * Sets or gets whether the column can be sorted.
   * Default value: true
   */
  allowSort: boolean;
  /**
   * Sets or gets whether the column can be edited, when header editing is enabled.
   * Default value: true
   */
  allowHeaderEdit: boolean;
  /**
   * Sets or gets whether the column can be filtered.
   * Default value: true
   */
  allowFilter: boolean;
  /**
   * Sets or gets whether the column can be reordered.
   * Default value: true
   */
  allowReorder: boolean;
  /**
   * Sets or gets whether the column can be resized.
   * Default value: true
   */
  allowResize: boolean;
  /**
   * Sets or gets the column's cells format.
   * Default value: ""
   */
  cellsFormat: string;
  /**
   * Sets or gets the column's cells alignment. Accepts: 'left', 'right' and 'center'
   * Default value: left
   */
  cellsAlign: "left" | "right" | "center";
  /**
   * Sets or gets the column's cells wrapping. Accepts: true or false.
   * Default value: "false"
   */
  cellsWrap: string;
  /**
   * Sets or gets the column's cells vertical alignment. Accepts: 'top', 'bottom' and 'center'
   * Default value: center
   */
  cellsVerticalAlign: "top" | "bottom" | "center";
  /**
   * Sets the name of the column group.
   * Default value: ""
   */
  columnGroup: string;
  /**
   * Sets or gets the column's data source bound field.
   * Default value: ""
   */
  dataField: string;
  /**
   * Sets or gets the column's data source bound field which will be displayed to the user. When the property is not set, it is equal to the 'dataField'.
   * Default value: "true"
   */
  displayField: string;
  /**
   * Gets the HTML Element. The property returns null when the Column is not in the View.
   * Default value: null
   */
  element: HTMLElement;
  /**
   * Sets or gets the column's editor. The property expects 'input', 'autoComplete', 'numberInput', 'checkBox', 'deteTimePicker', 'textArea' or a custom object with 'template' property which defines the editor type, 'onInit' and 'onRender' callback functions.
   * Default value: 
   */
  editor: any;
  /**
   * Sets or gets the Freeze mode. Accepts: 'near', 'far', true and false. Freezes/Pins the column to left(near) or right(far).
   * Default value: 
   */
  freeze: "near" | "far" | "true" | "false";
  /**
   * Sets or gets the filter of the column.
   * Default value: ""
   */
  filter: string;
  /**
   * Sets or gets the column's format function.
   * Default value: 
   */
  formatFunction: any;
  /**
   * Sets or gets the column's format settings. You can use any of the build in formatting options or to NumberFormat object like that: 'Intl: {  NumberFormat: {  style: \'currency\', currency: \'EUR\' }}' or DateTimeFormat object like that: 'Intl: {  DateTimeFormat: {  dateStyle: \'full\' }}''
   * Default value: [object Object]
   */
  formatSettings: any;
  /**
   * Sets or gets the column's group.
   * Default value: ""
   */
  group: string;
  /**
   * Sets or gets the column's icon. Expects CSS class name.
   * Default value: 
   */
  icon: any;
  /**
   * Sets or gets the text displayed in the column's header.
   * Default value: ""
   */
  label: string;
  /**
   * Sets or gets the minimum width.
   * Default value: 30
   */
  minWidth: number;
  /**
   * Sets or gets the sort order of the column. Accepts: 'asc', 'desc' and null.
   * Default value: null
   */
  sortOrder: "asc" | "desc" | null;
  /**
   * Sets or gets whether the column's header action drop-down button is displayed. This button opens the column's menu.
   * Default value: false
   */
  showActionButton: boolean;
  /**
   * Sets or gets whether the column's header icon is displayed.
   * Default value: false
   */
  showIcon: boolean;
  /**
   * Sets or gets whether the column's header description button is displayed.
   * Default value: false
   */
  showDescriptionButton: boolean;
  /**
   * Sets or gets the width. Accepts: 'number', 'px', 'em', 'auto', 'null' values.
   * Default value: 
   */
  width: any;
  /**
   * Sets or gets the column's template. The property expects the 'id' of HTMLTemplateElement or HTML string which is displayed in the cells.
   * Default value: 
   */
  template: any;
  /**
   * Sets or gets the column's header vertical alignment. Accepts: 'top', 'bottom' and 'center'
   * Default value: center
   */
  verticalAlign: "top" | "bottom" | "center";
  /**
   * Sets or gets whether the column is visible. Set the property to 'false' to hide the column.
   * Default value: true
   */
  visible: boolean;
}

/**Column Menu is the drop-down menu displayed after clicking the column header's drop-down button, which is displayed when you hover the column header. It allows you to customize column settings. For example: Sort, Filter or Group the Grid by the current column. */
export interface GridColumnMenu {
  /**
   * Automatically closes the column menu.
   * Default value: true
   */
  autoClose: boolean;
  /**
   * Sets the data sources to the column menu.
   * Default value: [object Object]
   */
  dataSource: GridColumnMenuDataSource;
  /**
   * Gets the visibility of the column menu. Returns true, when the column menu is visible.
   * Default value: false
   */
  visible: boolean;
  /**
   * Sets or gets whether the column menu is enabled. If the value is false, the column menu will not be displayed, when user hovers the column.
   * Default value: false
   */
  enabled: boolean;
  /**
   * Sets the width of the column menu.
   * Default value: 250
   */
  width: number;
  /**
   * Sets the height of the column menu.
   * Default value: null
   */
  height: number | null;
}

/**Sets the data sources to the column menu. */
export interface GridColumnMenuDataSource {
  /**
   * Describes the settings of the column menu customize type
   * Default value: [object Object]
   */
  columnMenuCustomizeType: GridColumnMenuDataSourceColumnMenuCustomizeType;
  /**
   * Describes the settings of the column menu item rename.
   * Default value: [object Object]
   */
  columnMenuItemRename: GridColumnMenuDataSourceColumnMenuItemRename;
  /**
   * Describes the settings of the column menu item edit description.
   * Default value: [object Object]
   */
  columnMenuItemEditDescription: GridColumnMenuDataSourceColumnMenuItemEditDescription;
  /**
   * Describes the settings of the column menu item duplicate.
   * Default value: [object Object]
   */
  columnMenuItemDuplicate: GridColumnMenuDataSourceColumnMenuItemDuplicate;
  /**
   * Describes the settings of the column menu item insert left.
   * Default value: [object Object]
   */
  columnMenuItemInsertLeft: GridColumnMenuDataSourceColumnMenuItemInsertLeft;
  /**
   * Describes the settings of the of the column menu item insert right.
   * Default value: [object Object]
   */
  columnMenuItemInsertRight: GridColumnMenuDataSourceColumnMenuItemInsertRight;
  /**
   * Describes the settings of the column menu item sort ascending.
   * Default value: [object Object]
   */
  columnMenuItemSortAsc: GridColumnMenuDataSourceColumnMenuItemSortAsc;
  /**
   * Describes the settings of the column menu item sort descending.
   * Default value: [object Object]
   */
  columnMenuItemSortDesc: GridColumnMenuDataSourceColumnMenuItemSortDesc;
  /**
   * Describes the settings of the column menu item remove sort.
   * Default value: [object Object]
   */
  columnMenuItemRemoveSort: GridColumnMenuDataSourceColumnMenuItemRemoveSort;
  /**
   * Describes the settings of the column menu item filter.
   * Default value: [object Object]
   */
  columnMenuItemFilter: GridColumnMenuDataSourceColumnMenuItemFilter;
  /**
   * Describes the settings of the column menu item remove filter.
   * Default value: [object Object]
   */
  columnMenuItemRemoveFilter: GridColumnMenuDataSourceColumnMenuItemRemoveFilter;
  /**
   * Describes the settings of the column menu item group by.
   * Default value: [object Object]
   */
  columnMenuItemGroupBy: GridColumnMenuDataSourceColumnMenuItemGroupBy;
  /**
   * Describes the settings of the column menu item group by.
   * Default value: [object Object]
   */
  columnMenuItemRemoveGroupBy: GridColumnMenuDataSourceColumnMenuItemRemoveGroupBy;
  /**
   * Describes the settings of the column menu item hide.
   * Default value: [object Object]
   */
  columnMenuItemHide: GridColumnMenuDataSourceColumnMenuItemHide;
  /**
   * Describes the settings of the column menu item delete.
   * Default value: [object Object]
   */
  columnMenuItemDelete: GridColumnMenuDataSourceColumnMenuItemDelete;
}

/**Describes the settings of the column menu customize type */
export interface GridColumnMenuDataSourceColumnMenuCustomizeType {
  /**
   * Sets the commant of the column menu customize type.
   * Default value: customizeTypeCommand
   */
  command: any;
  /**
   * Enables the column menu customize type.
   * Default value: true
   */
  enabled: boolean;
  /**
   * Sets the visibility of the column menu customize type.
   * Default value: false
   */
  visible: boolean;
  /**
   * Sets the icon of the column menu customize type.
   * Default value: "smart-icon-customize"
   */
  icon: string;
  /**
   * Sets the label of the column menu customize type.
   * Default value: ""
   */
  label: string;
}

/**Describes the settings of the column menu item rename. */
export interface GridColumnMenuDataSourceColumnMenuItemRename {
  /**
   * Sets the command of the column menu item rename.
   * Default value: "renameCommand"
   */
  command: string;
  /**
   * Enables the column menu item rename.
   * Default value: true
   */
  enabled: boolean;
  /**
   * Sets the visibility of the column menu item rename.
   * Default value: false
   */
  visible: boolean;
  /**
   * Sets the icon of the column menu item rename.
   * Default value: "smart-icon-rename"
   */
  icon: string;
  /**
   * Sets the label of the column menu item rename.
   * Default value: ""
   */
  label: string;
}

/**Describes the settings of the column menu item edit description. */
export interface GridColumnMenuDataSourceColumnMenuItemEditDescription {
  /**
   * Sets the command of the column menu item edit description.
   * Default value: "editDescriptionCommand"
   */
  command: string;
  /**
   * Enables the column menu item edit description.
   * Default value: true
   */
  enabled: boolean;
  /**
   * Sets the visibility of the column menu item edit description.
   * Default value: false
   */
  visible: boolean;
  /**
   * Sets the icon of the column menu item edit description.
   * Default value: "smart-icon-description"
   */
  icon: string;
  /**
   * Sets the label of the column menu item edit description.
   * Default value: ""
   */
  label: string;
}

/**Describes the settings of the column menu item duplicate. */
export interface GridColumnMenuDataSourceColumnMenuItemDuplicate {
  /**
   * Sets the command of the column menu item duplicate.
   * Default value: "duplicateCommand"
   */
  command: string;
  /**
   * Sets the visibility of the column menu item duplicate.
   * Default value: false
   */
  visible: boolean;
  /**
   * Enables the column menu item duplicate.
   * Default value: true
   */
  enabled: boolean;
  /**
   * Sets the icon of the column menu item duplicate.
   * Default value: "smart-icon-duplicate"
   */
  icon: string;
  /**
   * Sets the label of the column menu item duplicate.
   * Default value: ""
   */
  label: string;
}

/**Describes the settings of the column menu item insert left. */
export interface GridColumnMenuDataSourceColumnMenuItemInsertLeft {
  /**
   * Sets the command of the column menu item insert left.
   * Default value: "insertLeftCommand"
   */
  command: string;
  /**
   * Sets the visibility of the column menu item insert left.
   * Default value: false
   */
  visible: boolean;
  /**
   * Enabels the column menu item insert left.
   * Default value: true
   */
  enabled: boolean;
  /**
   * Sets the icon of the column menu item insert left.
   * Default value: "smart-icon-insert-left"
   */
  icon: string;
  /**
   * Sets the label of the column menu item insert left.
   * Default value: ""
   */
  label: string;
}

/**Describes the settings of the of the column menu item insert right. */
export interface GridColumnMenuDataSourceColumnMenuItemInsertRight {
  /**
   * Sets the command of the of the column menu item insert right.
   * Default value: "insertRightCommand"
   */
  command: string;
  /**
   * Sets the visibility of the of the column menu item insert right.
   * Default value: false
   */
  visible: boolean;
  /**
   * Enables the column menu item insert right.
   * Default value: true
   */
  enabled: boolean;
  /**
   * Sets the icon of the of the column menu item insert right.
   * Default value: "smart-icon-insert-right"
   */
  icon: string;
  /**
   * Sets the label of the of the column menu item insert right.
   * Default value: ""
   */
  label: string;
}

/**Describes the settings of the column menu item sort ascending. */
export interface GridColumnMenuDataSourceColumnMenuItemSortAsc {
  /**
   * Sets the command of the column menu item sort ascending.
   * Default value: "sortAscCommand"
   */
  command: string;
  /**
   * Sets the visibility of the column menu item sort ascending.
   * Default value: "auto"
   */
  visible: string;
  /**
   * Enables the column menu item sort ascending.
   * Default value: true
   */
  enabled: boolean;
  /**
   * Sets the icon of the column menu item sort ascending.
   * Default value: "smart-icon-sort-a-z"
   */
  icon: string;
  /**
   * Sets the label of the column menu item sort ascending.
   * Default value: ""
   */
  label: string;
}

/**Describes the settings of the column menu item sort descending. */
export interface GridColumnMenuDataSourceColumnMenuItemSortDesc {
  /**
   * Sets the command of the column menu item sort descending.
   * Default value: "sortDescCommand"
   */
  command: string;
  /**
   * Sets the visibility of the column menu item sort descending.
   * Default value: "auto"
   */
  visible: string;
  /**
   * Enables the column menu item sort descending.
   * Default value: true
   */
  enabled: boolean;
  /**
   * Sets the icon of the column menu item sort descending.
   * Default value: "smart-icon-sort-z-a"
   */
  icon: string;
  /**
   * Sets the label of the column menu item sort descending.
   * Default value: ""
   */
  label: string;
}

/**Describes the settings of the column menu item remove sort. */
export interface GridColumnMenuDataSourceColumnMenuItemRemoveSort {
  /**
   * Sets the command of the column menu item remove sort.
   * Default value: "removeSortCommand"
   */
  command: string;
  /**
   * Sets the visibility of the column menu item remove sort.
   * Default value: "auto"
   */
  visible: string;
  /**
   * Enables the column menu item remove sort.
   * Default value: true
   */
  enabled: boolean;
  /**
   * Sets the icon of the column menu item remove sort.
   * Default value: "smart-icon-cancel-circled"
   */
  icon: string;
  /**
   * Sets the label of the column menu item remove sort.
   * Default value: ""
   */
  label: string;
}

/**Describes the settings of the column menu item filter. */
export interface GridColumnMenuDataSourceColumnMenuItemFilter {
  /**
   * Sets the command of the column menu item filter.
   * Default value: "addFilterCommand"
   */
  command: string;
  /**
   * Sets the visibility of the column menu item filter.
   * Default value: "auto"
   */
  visible: string;
  /**
   * Enables the column menu item filter.
   * Default value: true
   */
  enabled: boolean;
  /**
   * Sets the icon of the column menu item filter.
   * Default value: "smart-icon-add-filter"
   */
  icon: string;
  /**
   * Sets the label of the column menu item filter.
   * Default value: ""
   */
  label: string;
}

/**Describes the settings of the column menu item remove filter. */
export interface GridColumnMenuDataSourceColumnMenuItemRemoveFilter {
  /**
   * Sets the command of the column menu item remove filter.
   * Default value: "removeFilterCommand"
   */
  command: string;
  /**
   * Enables the column menu item remove filter.
   * Default value: true
   */
  enabled: boolean;
  /**
   * Sets the visibility of the column menu item remove filter.
   * Default value: "auto"
   */
  visible: string;
  /**
   * Sets the icon of the column menu item remove filter.
   * Default value: "smart-icon-cancel-circled-outline"
   */
  icon: string;
  /**
   * Sets the label of the column menu item remove filter.
   * Default value: ""
   */
  label: string;
}

/**Describes the settings of the column menu item group by. */
export interface GridColumnMenuDataSourceColumnMenuItemGroupBy {
  /**
   * Sets the command of the column menu item group by.
   * Default value: "groupByCommand"
   */
  command: string;
  /**
   * Enables the column menu item group by.
   * Default value: true
   */
  enabled: boolean;
  /**
   * Sets the visibility of the column menu item group by.
   * Default value: "auto"
   */
  visible: string;
  /**
   * Sets the icon of the column menu item group by.
   * Default value: "smart-icon-group-by"
   */
  icon: string;
  /**
   * Sets the label of the column menu item group by.
   * Default value: ""
   */
  label: string;
}

/**Describes the settings of the column menu item group by. */
export interface GridColumnMenuDataSourceColumnMenuItemRemoveGroupBy {
  /**
   * Sets the command of the column menu item group by.
   * Default value: "groupByCommand"
   */
  command: string;
  /**
   * Enables the column menu item group by.
   * Default value: true
   */
  enabled: boolean;
  /**
   * Sets the visibility of the column menu item group by.
   * Default value: "auto"
   */
  visible: string;
  /**
   * Sets the icon of the column menu item group by.
   * Default value: "smart-icon-group-by"
   */
  icon: string;
  /**
   * Sets the label of the column menu item group by.
   * Default value: ""
   */
  label: string;
}

/**Describes the settings of the column menu item hide. */
export interface GridColumnMenuDataSourceColumnMenuItemHide {
  /**
   * Sets the command of the column menu item hide.
   * Default value: "hideColumnCommand"
   */
  command: string;
  /**
   * Enables the column menu item hide.
   * Default value: true
   */
  enabled: boolean;
  /**
   * Sets the visibility of the column menu item hide.
   * Default value: false
   */
  visible: boolean;
  /**
   * Sets the icon of the column menu item hide.
   * Default value: "smart-icon-hide"
   */
  icon: string;
  /**
   * Sets the label of the column menu item hide.
   * Default value: ""
   */
  label: string;
}

/**Describes the settings of the column menu item delete. */
export interface GridColumnMenuDataSourceColumnMenuItemDelete {
  /**
   * Sets the command of the column menu item delete.
   * Default value: "deleteColumnCommand"
   */
  command: string;
  /**
   * Enables the column menu item delete.
   * Default value: true
   */
  enabled: boolean;
  /**
   * Sets the visibility of the column menu item delete.
   * Default value: false
   */
  visible: boolean;
  /**
   * Sets the icon of the column menu item delete.
   * Default value: "smart-icon-delete"
   */
  icon: string;
  /**
   * Sets the label of the column menu item delete.
   * Default value: ""
   */
  label: string;
}

export interface GridColumnGroup {
  /**
   * Sets the label.
   * Default value: ""
   */
  label: string;
  /**
   * Sets the align.
   * Default value: ""
   */
  align: string;
  /**
   * Sets the name of the column group.
   * Default value: ""
   */
  name: string;
}

/**Sets the Grid Charting Data Visualization. */
export interface GridCharting {
  /**
   * Sets or gets whether charting is enabled.
   * Default value: false
   */
  enabled: boolean;
  /**
   * Sets or gets the charting colors. Accepts the 'colorScheme' values of our Chart component.
   * Default value: "scheme01"
   */
  colorScheme: string;
  /**
   * Sets or gets the chart's container.
   * Default value: null
   */
  appendTo: any;
  /**
   * Sets or gets the charting dialog.
   * Default value: [object Object]
   */
  dialog: GridChartingDialog;
}

/**Sets or gets the charting dialog. */
export interface GridChartingDialog {
  /**
   * Sets or gets the dialog header.
   * Default value: ""
   */
  header: string;
  /**
   * Sets or gets the dialog height.
   * Default value: 400
   */
  height: any;
  /**
   * Sets or gets the dialog width.
   * Default value: 400
   */
  width: any;
  /**
   * Sets or gets the dialog Left position.
   * Default value: center
   */
  left: any;
  /**
   * Sets or gets the dialog Top position.
   * Default value: center
   */
  top: any;
  /**
   * Sets or gets whether the dialog is enabled.
   * Default value: true
   */
  enabled: boolean;
  /**
   * Gets whether the dialog is displayed.
   * Default value: false
   */
  visible: boolean;
}

/**Sets the TreeGrid checkboxes. */
export interface GridCheckBoxes {
  /**
   * Sets the visibility of the TreeGrid checkboxes.
   * Default value: false
   */
  visible: boolean;
  /**
   * Sets the three-state mode of the TreeGrid checkboxes. In that mode, checking a checkbox affects the parent-child rows checkboxes.
   * Default value: false
   */
  hasThreeStates: boolean;
}

/**Sets the Grid Data Export options. */
export interface GridDataExport {
  /**
   * Sets whether the columns header will be exported.
   * Default value: true
   */
  header: boolean;
  /**
   * Sets whether the export uses the applied filters.
   * Default value: null
   */
  filterBy: any;
  /**
   * Sets the groups of the exported data.
   * Default value: null
   */
  groupBy: any;
  /**
   * Sets a custom style object of the dataExport. 
   * Default value: null
   */
  style: any;
  /**
   * Sets the exported file's name.
   * Default value: "smartGrid"
   */
  fileName: string;
  /**
   * Sets the page orientation, when exporting to PDF.
   * Default value: "portrait"
   */
  pageOrientation: string;
  /**
   * Sets the expand char displayed when the Grid with row hierarchy(TreeGrid / Grouped) is exported.
   * Default value: "+"
   */
  expandChar: string;
  /**
   * Sets the collapse char displayed when the Grid with row hierarchy(TreeGrid / Grouped) is exported.
   * Default value: "-"
   */
  collapseChar: string;
  /**
   * Exports only the visible data of the Grid.
   * Default value: false
   */
  view: boolean;
  /**
   * Determines the start row index that will be exported or printed. 'view' should be set to true
   * Default value: false
   */
  viewStart: number;
  /**
   * Determines the end row index that will be exported or printed. 'view' should be set to true
   * Default value: false
   */
  viewEnd: number;
}

/**Describes the grid's editing settings. */
export interface GridEditing {
  /**
   * Enables row header cells editing.
   * Default value: false
   */
  allowRowHeaderEdit: boolean;
  /**
   * Enables column headers editing.
   * Default value: false
   */
  allowColumnHeaderEdit: boolean;
  /**
   * Enables editing.
   * Default value: false
   */
  enabled: boolean;
  /**
   * Enables batch editing. This allows editing multiple grid rows on the client side and sending them with a single server request.
   * Default value: false
   */
  batch: boolean;
  /**
   * Determines the way editing is initiated.
   * Default value: click
   */
  action: "none" | "click" | "dblClick";
  /**
   * Describes command keys.
   * Default value: [object Object]
   */
  commandKeys: GridEditingCommandKeys;
  /**
   * Describes the grid's command bar settings. The command bar is a toolbar or statusbar with tools for saving and reverting edits.
   * Default value: [object Object]
   */
  commandBar: GridEditingCommandBar;
  /**
   * Describes the grid's command column settings. The command column can be used to edit or delete a row.
   * Default value: [object Object]
   */
  commandColumn: GridEditingCommandColumn;
  /**
   * Sets the grid's edit mode.
   * Default value: cell
   */
  mode: "cell" | "row";
  /**
   * Describes the settings of the 'Add New Row' UI element which enables the quick adding of rows to the Grid with a single click.
   * Default value: [object Object]
   */
  addNewRow: GridEditingAddNewRow;
  /**
   * Describes dialog's editing settings.
   * Default value: [object Object]
   */
  dialog: GridEditingDialog;
  /**
   * Describes add dialog's settings
   * Default value: [object Object]
   */
  addDialog: GridEditingAddDialog;
  /**
   * Describes delete dialog's settings
   * Default value: [object Object]
   */
  deleteDialog: GridEditingDeleteDialog;
}

/**Describes command keys. */
export interface GridEditingCommandKeys {
  /**
   * Describes the edit command key.
   * Default value: [object Object]
   */
  commandKeyEdit: GridEditingCommandKeysCommandKeyEdit;
  /**
   * Describes the cancel command key.
   * Default value: [object Object]
   */
  commandKeyCancel: GridEditingCommandKeysCommandKeyCancel;
  /**
   * Describes the update command key.
   * Default value: [object Object]
   */
  commandKeyUpdate: GridEditingCommandKeysCommandKeyUpdate;
}

/**Describes the edit command key. */
export interface GridEditingCommandKeysCommandKeyEdit {
  /**
   * Sets the name of the edit key command.
   * Default value: "commandKeyEditCommand"
   */
  command: string;
  /**
   * Sets the key that invokes the edit command.
   * Default value: "F2"
   */
  key: string;
}

/**Describes the cancel command key. */
export interface GridEditingCommandKeysCommandKeyCancel {
  /**
   * Sets the name of the cancel key command.
   * Default value: "commandKeyCancelCommand"
   */
  command: string;
  /**
   * Sets the key that invokes the cancel command.
   * Default value: "Escape"
   */
  key: string;
}

/**Describes the update command key. */
export interface GridEditingCommandKeysCommandKeyUpdate {
  /**
   * Sets the name of the update key command.
   * Default value: "commandKeyUpdateCommand"
   */
  command: string;
  /**
   * Sets the key that invokes the update command.
   * Default value: "Enter"
   */
  key: string;
}

/**Describes the grid's command bar settings. The command bar is a toolbar or statusbar with tools for saving and reverting edits. */
export interface GridEditingCommandBar {
  /**
   * Makes the command bar visible.
   * Default value: false
   */
  visible: boolean;
  /**
   * Sets the command bar's position.
   * Default value: near
   */
  position: "near" | "far" | "both";
  /**
   * Sets what is to be displayed in command bar buttons.
   * Default value: labelAndIcon
   */
  displayMode: "label" | "icon" | "labelAndIcon";
  /**
   * Sets the command bar's data source.
   * Default value: [object Object]
   */
  dataSource: GridEditingCommandBarDataSource;
}

/**Sets the command bar's data source. */
export interface GridEditingCommandBarDataSource {
  /**
   * Describes the settings of the command bar's button for adding rows.
   * Default value: [object Object]
   */
  commandBarAddRow: GridEditingCommandBarDataSourceCommandBarAddRow;
  /**
   * Describes the settings of the command bar's button for deleting rows.
   * Default value: [object Object]
   */
  commandBarDeleteRow: GridEditingCommandBarDataSourceCommandBarDeleteRow;
  /**
   * Describes the settings of the command bar's button for saving changes.
   * Default value: [object Object]
   */
  commandBarBatchSave: GridEditingCommandBarDataSourceCommandBarBatchSave;
  /**
   * Describes the settings of the command bar's button for reverting changes.
   * Default value: [object Object]
   */
  commandBarBatchRevert: GridEditingCommandBarDataSourceCommandBarBatchRevert;
}

/**Describes the settings of the command bar's button for adding rows. */
export interface GridEditingCommandBarDataSourceCommandBarAddRow {
  /**
   * Sets the name of the add row command.
   * Default value: commandBarAddRowCommand
   */
  command: any;
  /**
   * A class name to be applied to the add row button's icon.
   * Default value: "smart-icon-plus"
   */
  icon: string;
  /**
   * The label of the add row button.
   * Default value: ""
   */
  label: string;
  /**
   * Makes the add row button visible.
   * Default value: false
   */
  visible: any;
}

/**Describes the settings of the command bar's button for deleting rows. */
export interface GridEditingCommandBarDataSourceCommandBarDeleteRow {
  /**
   * Sets the name of the delete row command.
   * Default value: commandBarDeleteRowCommand
   */
  command: any;
  /**
   * A class name to be applied to the delete row button's icon.
   * Default value: "smart-icon-delete"
   */
  icon: string;
  /**
   * The label of the delete row button.
   * Default value: ""
   */
  label: string;
  /**
   * Makes the delete row button visible.
   * Default value: false
   */
  visible: any;
}

/**Describes the settings of the command bar's button for saving changes. */
export interface GridEditingCommandBarDataSourceCommandBarBatchSave {
  /**
   * Sets the name of the save command.
   * Default value: commandBarBatchSaveCommand
   */
  command: any;
  /**
   * A class name to be applied to the save button's icon.
   * Default value: "smart-icon-save"
   */
  icon: string;
  /**
   * The label of the save button.
   * Default value: ""
   */
  label: string;
  /**
   * Makes the save button visible.
   * Default value: true
   */
  visible: any;
}

/**Describes the settings of the command bar's button for reverting changes. */
export interface GridEditingCommandBarDataSourceCommandBarBatchRevert {
  /**
   * Sets the name of the revert command.
   * Default value: commandBarBatchRevertCommand
   */
  command: any;
  /**
   * A class name to be applied to the revert button's icon.
   * Default value: "smart-icon-revert"
   */
  icon: string;
  /**
   * The label of the revert button.
   * Default value: ""
   */
  label: string;
  /**
   * Makes the revert button visible.
   * Default value: true
   */
  visible: any;
}

/**Describes the grid's command column settings. The command column can be used to edit or delete a row. */
export interface GridEditingCommandColumn {
  /**
   * Makes the command column visible.
   * Default value: false
   */
  visible: boolean;
  /**
   * Enables inline display of the command column.
   * Default value: false
   */
  inline: boolean;
  /**
   * Sets the command column's position.
   * Default value: far
   */
  position: "near" | "far";
  /**
   * Sets what is to be displayed in command column buttons.
   * Default value: icon
   */
  displayMode: "label" | "icon" | "labelAndIcon";
  /**
   * Sets the command column's data source.
   * Default value: [object Object]
   */
  dataSource: GridEditingCommandColumnDataSource;
  /**
   * Sets the width of the command column.
   * Default value: null
   */
  width: number | null;
}

/**Sets the command column's data source. */
export interface GridEditingCommandColumnDataSource {
  /**
   * Describes the settings of the command column's button displayed in the column's header. By default, this Command opens a Menu with Column Chooser.
   * Default value: [object Object]
   */
  commandColumnMenu: GridEditingCommandColumnDataSourceCommandColumnMenu;
  /**
   * Describes the settings of the command column's button for editing rows.
   * Default value: [object Object]
   */
  commandColumnEdit: GridEditingCommandColumnDataSourceCommandColumnEdit;
  /**
   * Describes the settings of the command column's button for deleting rows.
   * Default value: [object Object]
   */
  commandColumnDelete: GridEditingCommandColumnDataSourceCommandColumnDelete;
  /**
   * Describes the settings of the command column's button for updating rows.
   * Default value: [object Object]
   */
  commandColumnUpdate: GridEditingCommandColumnDataSourceCommandColumnUpdate;
  /**
   * Describes the settings of the command column's button for canceling edits.
   * Default value: [object Object]
   */
  commandColumnCancel: GridEditingCommandColumnDataSourceCommandColumnCancel;
  /**
   * Describes the settings of the command column's custom button.
   * Default value: [object Object]
   */
  commandColumnCustom: GridEditingCommandColumnDataSourceCommandColumnCustom;
}

/**Describes the settings of the command column's button displayed in the column's header. By default, this Command opens a Menu with Column Chooser. */
export interface GridEditingCommandColumnDataSourceCommandColumnMenu {
  /**
   * 
   * Default value: commandColumnMenuCommand
   */
  command: any;
  /**
   * 
   * Default value: "smart-icon-menu"
   */
  icon: string;
  /**
   * 
   * Default value: ""
   */
  label: string;
  /**
   * 
   * Default value: false
   */
  visible: any;
}

/**Describes the settings of the command column's button for editing rows. */
export interface GridEditingCommandColumnDataSourceCommandColumnEdit {
  /**
   * Sets the name of the edit row command.
   * Default value: commandColumnEditCommand
   */
  command: any;
  /**
   * A class name to be applied to the edit row button's icon.
   * Default value: "smart-icon-rename"
   */
  icon: string;
  /**
   * The label of the edit row button.
   * Default value: ""
   */
  label: string;
  /**
   * Makes the edit row button visible.
   * Default value: auto
   */
  visible: any;
}

/**Describes the settings of the command column's button for deleting rows. */
export interface GridEditingCommandColumnDataSourceCommandColumnDelete {
  /**
   * Sets the name of the delete row command.
   * Default value: commandColumnDeleteCommand
   */
  command: any;
  /**
   * A class name to be applied to the delete row button's icon.
   * Default value: "smart-icon-delete"
   */
  icon: string;
  /**
   * The label of the delete row button.
   * Default value: ""
   */
  label: string;
  /**
   * Makes the delete row button visible.
   * Default value: true
   */
  visible: any;
}

/**Describes the settings of the command column's button for updating rows. */
export interface GridEditingCommandColumnDataSourceCommandColumnUpdate {
  /**
   * Sets the name of the update row command.
   * Default value: commandColumnUpdateCommand
   */
  command: any;
  /**
   * A class name to be applied to the update row button's icon.
   * Default value: "smart-icon-save"
   */
  icon: string;
  /**
   * The label of the update row button.
   * Default value: ""
   */
  label: string;
  /**
   * Makes the update row button visible.
   * Default value: auto
   */
  visible: any;
}

/**Describes the settings of the command column's button for canceling edits. */
export interface GridEditingCommandColumnDataSourceCommandColumnCancel {
  /**
   * Sets the name of the cancel command.
   * Default value: commandColumnCancelCommand
   */
  command: any;
  /**
   * A class name to be applied to the cancel button's icon.
   * Default value: "smart-icon-cancel-circled"
   */
  icon: string;
  /**
   * The label of the cancel button.
   * Default value: ""
   */
  label: string;
  /**
   * Makes the cancel button visible.
   * Default value: auto
   */
  visible: any;
}

/**Describes the settings of the command column's custom button. */
export interface GridEditingCommandColumnDataSourceCommandColumnCustom {
  /**
   * Sets the name of the custom command.
   * Default value: 
   */
  command: any;
  /**
   * A class name to be applied to the custom button's icon.
   * Default value: "smart-icon-copy-record"
   */
  icon: string;
  /**
   * The label of the custom button.
   * Default value: ""
   */
  label: string;
  /**
   * Makes the custom button visible.
   * Default value: false
   */
  visible: any;
}

/**Describes the settings of the 'Add New Row' UI element which enables the quick adding of rows to the Grid with a single click. */
export interface GridEditingAddNewRow {
  /**
   * Sets the position of the 'Add New Row' UI element.
   * Default value: both
   */
  position: "near" | "far" | "both";
  /**
   * Makes the 'Add New Row' UI element visible.
   * Default value: false
   */
  visible: boolean;
  /**
   * Sets the label of the 'Add New Row' UI element.
   * Default value: ""
   */
  label: string;
}

/**Describes dialog's editing settings. */
export interface GridEditingDialog {
  /**
   * Sets the header text of the dialog 
   * Default value: ""
   */
  header: string;
  /**
   * Sets the height of the edit dialog.
   * Default value: auto
   */
  height: any;
  /**
   * Sets the width of the edit dialog.
   * Default value: auto
   */
  width: any;
  /**
   * Sets the 'left' css property to the dialog.
   * Default value: center
   */
  left: any;
  /**
   * Sets the 'top' css property to the dialog.
   * Default value: center
   */
  top: any;
  /**
   * Enables dialog editing option.
   * Default value: false
   */
  enabled: boolean;
  /**
   * Sets the visibility of the dialog.
   * Default value: false
   */
  visible: boolean;
}

/**Describes add dialog's settings */
export interface GridEditingAddDialog {
  /**
   * Sets the header text of the dialog
   * Default value: ""
   */
  header: string;
  /**
   * Sets the height of the dialog.
   * Default value: auto
   */
  height: any;
  /**
   * Sets the width of the dialog.
   * Default value: auto
   */
  width: any;
  /**
   * Sets the 'left' css property to the dialog.
   * Default value: center
   */
  left: any;
  /**
   * Sets the 'top' css property to the dialog.
   * Default value: center
   */
  top: any;
  /**
   * Enables the add dialog option.
   * Default value: false
   */
  enabled: boolean;
  /**
   * Sets the visibility of the dialog.
   * Default value: false
   */
  visible: boolean;
}

/**Describes delete dialog's settings */
export interface GridEditingDeleteDialog {
  /**
   * Sets the header text of the dialog
   * Default value: ""
   */
  header: string;
  /**
   * Sets the height of the dialog.
   * Default value: auto
   */
  height: any;
  /**
   * Sets the width of the dialog.
   * Default value: auto
   */
  width: any;
  /**
   * Sets the 'left' css property to the dialog.
   * Default value: center
   */
  left: any;
  /**
   * Sets the 'top' css property to the dialog.
   * Default value: center
   */
  top: any;
  /**
   * Enables the delete dialog option.
   * Default value: false
   */
  enabled: boolean;
  /**
   * Sets the visibility of the dialog.
   * Default value: false
   */
  visible: boolean;
}

/**Describes the grid's filtering settings. */
export interface GridFiltering {
  /**
   * Enables filtering.
   * Default value: false
   */
  enabled: boolean;
  /**
   * An array of filtering conditions to apply to the grid. Each member of the filter array is an array with two members. The first one is the column dataField to apply the filter to. The second one is the filtering condition.
   * Default value: 
   */
  filter: any[];
  /**
   * (In Development)Describes the filter row's settings.
   * Default value: [object Object]
   */
  filterRow: GridFilteringFilterRow;
  /**
   * Describes the settings for the filter menu.
   * Default value: [object Object]
   */
  filterMenu: GridFilteringFilterMenu;
  /**
   * (In Development)Describes the settings for the filter builder.
   * Default value: [object Object]
   */
  filterBuilder: GridFilteringFilterBuilder;
}

/**(In Development)Describes the filter row's settings. */
export interface GridFilteringFilterRow {
  /**
   * Makes the filter row visible.
   * Default value: false
   */
  visible: boolean;
  /**
   * Makes the filter row's menu visible.
   * Default value: false
   */
  menuVisible: boolean;
  /**
   * Sets the way filtering through the filter row is applied.
   * Default value: auto
   */
  applyMode: "auto" | "click";
  /**
   * Sets the delay (in milliseconds) before applying filtering (when filtering.filterRow.applyMode is 'auto').
   * Default value: 300
   */
  autoApplyModeDelay: number;
}

/**Describes the settings for the filter menu. */
export interface GridFilteringFilterMenu {
  /**
   * Sets the visibility of the filter menu.
   * Default value: true
   */
  visible: boolean;
  /**
   * Sets the button text of the filter menu.
   * Default value: cancel,clear,filter
   */
  buttons: string[];
  /**
   * Sets the filter menu datasource.
   * Default value: null
   */
  dataSource: any;
  /**
   * Sets the width of the filter menu.
   * Default value: 250
   */
  width: number;
  /**
   * Sets the height of the filter menu.
   * Default value: 200
   */
  height: number;
}

/**(In Development)Describes the settings for the filter builder. */
export interface GridFilteringFilterBuilder {
  /**
   * Sets the visibility of the filter builder.
   * Default value: false
   */
  visible: boolean;
  /**
   * Sets the height of the filter builder.
   * Default value: null
   */
  height: number | null;
}

/**Describes the grid's grouping settings. */
export interface GridGrouping {
  /**
   * Enables grouping.
   * Default value: false
   */
  enabled: boolean;
  /**
   * Enables collapsing of groups.
   * Default value: false
   */
  allowCollapse: boolean;
  /**
   * Automatically expands all groups.
   * Default value: false
   */
  autoExpandAll: boolean;
  /**
   * Sets the group expand mode.
   * Default value: buttonClick
   */
  expandMode: "buttonClick" | "rowClick";
  /**
   * Sets the group row height.
   * Default value: 50
   */
  groupRowHeight: any;
  /**
   * Sets the indent of the group toggle button.
   * Default value: 16
   */
  toggleButtonIndent: number;
  /**
   * Sets the indent of the group.
   * Default value: 16
   */
  groupIndent: number;
  /**
   * Describes the group bar's settings.
   * Default value: [object Object]
   */
  groupBar: GridGroupingGroupBar;
  /**
   * Describes the group panel's settings.
   * Default value: [object Object]
   */
  groupPanel: GridGroupingGroupPanel;
  /**
   * Describes the group summary row's settings.
   * Default value: [object Object]
   */
  summaryRow: GridGroupingSummaryRow;
}

/**Describes the group bar's settings. */
export interface GridGroupingGroupBar {
  /**
   * Makes the group bar visible.
   * Default value: false
   */
  visible: boolean;
  /**
   * Enables column drag and drop.
   * Default value: false
   */
  allowColumnDragDrop: boolean;
  /**
   * Enables column close buttons.
   * Default value: true
   */
  allowColumnCloseButtons: boolean;
}

/**Describes the group panel's settings. */
export interface GridGroupingGroupPanel {
  /**
   * Makes the group panel visible.
   * Default value: false
   */
  visible: boolean;
}

/**Describes the group summary row's settings. */
export interface GridGroupingSummaryRow {
  /**
   * Enables inline display of the group summary row.
   * Default value: true
   */
  inline: boolean;
  /**
   * Makes the group summary row visible.
   * Default value: true
   */
  visible: boolean;
}

/**Describes the paging settings. */
export interface GridPaging {
  /**
   * Enables pagination.
   * Default value: false
   */
  enabled: boolean;
  /**
   * Describes the spinner pagination settings.
   * Default value: [object Object]
   */
  spinner: GridPagingSpinner;
  /**
   * Sets the number of rows per page.
   * Default value: 10
   */
  pageSize: number;
  /**
   * Sets the start page.
   * Default value: 0
   */
  pageIndex: number;
}

/**Describes the spinner pagination settings. */
export interface GridPagingSpinner {
  /**
   * Enables spinner pagination.
   * Default value: false
   */
  enabled: boolean;
  /**
   * Sets the step of page
   * Default value: 1
   */
  step: number;
}

/**Describes the pager settings. */
export interface GridPager {
  /**
   * Sets the ellipsis display mode.
   * Default value: both
   */
  autoEllipsis: "none" | "before" | "after" | "both";
  /**
   * Sets the position of pager.
   * Default value: far
   */
  position: "near" | "far" | "both";
  /**
   * Sets a template for the pager.
   * Default value: ""
   */
  template: string;
  /**
   * Describes the settings for the 'rows per page' option.
   * Default value: [object Object]
   */
  pageSizeSelector: GridPagerPageSizeSelector;
  /**
   * Describes the summary settings.
   * Default value: [object Object]
   */
  summary: GridPagerSummary;
  /**
   * Describes the navigation buttons settings.
   * Default value: [object Object]
   */
  navigationButtons: GridPagerNavigationButtons;
  /**
   * Describes the settings about navigation input option.
   * Default value: [object Object]
   */
  navigationInput: GridPagerNavigationInput;
  /**
   * Describes the settings for the numeric page buttons.
   * Default value: [object Object]
   */
  pageIndexSelectors: GridPagerPageIndexSelectors;
  /**
   * Sets the visibility of pager.
   * Default value: false
   */
  visible: boolean;
}

/**Describes the settings for the 'rows per page' option. */
export interface GridPagerPageSizeSelector {
  /**
   * Sets the visibility of the 'rows per page' option.
   * Default value: false
   */
  visible: boolean;
  /**
   * Sets the count of the 'rows per page' option.
   * Default value: 10,20,50
   */
  dataSource: any;
  /**
   * Sets the position of the 'rows per page' option.
   * Default value: far
   */
  position: "near" | "far";
}

/**Describes the summary settings. */
export interface GridPagerSummary {
  /**
   * Sets the position of the summary.
   * Default value: far
   */
  position: "near" | "far";
  /**
   * Sets the visibility of the summary.
   * Default value: false
   */
  visible: boolean;
}

/**Describes the navigation buttons settings. */
export interface GridPagerNavigationButtons {
  /**
   * Sets the navigation buttons position.
   * Default value: both
   */
  position: "near" | "far" | "both";
  /**
   * Describes the settings about buttons 'previous page' and 'next page'.
   * Default value: [object Object]
   */
  prevNextButtons: GridPagerNavigationButtonsPrevNextButtons;
  /**
   * Describes the settings about buttons 'first page' and 'last page'.
   * Default value: [object Object]
   */
  firstLastButtons: GridPagerNavigationButtonsFirstLastButtons;
  /**
   * Describes the labels settings for navigation buttons.
   * Default value: [object Object]
   */
  labels: GridPagerNavigationButtonsLabels;
}

/**Describes the settings about buttons 'previous page' and 'next page'. */
export interface GridPagerNavigationButtonsPrevNextButtons {
  /**
   * Sets the visibility of 'previous page' and 'next page' buttons.
   * Default value: true
   */
  visible: boolean;
}

/**Describes the settings about buttons 'first page' and 'last page'. */
export interface GridPagerNavigationButtonsFirstLastButtons {
  /**
   * Sets the visibility of 'first page' and 'last page' buttons.
   * Default value: true
   */
  visible: boolean;
}

/**Describes the labels settings for navigation buttons. */
export interface GridPagerNavigationButtonsLabels {
  /**
   * Sets the visibility of labels for navigation buttons.
   * Default value: false
   */
  visible: boolean;
}

/**Describes the settings about navigation input option. */
export interface GridPagerNavigationInput {
  /**
   * Sets the position of navigation input option.
   * Default value: far
   */
  position: "near" | "far";
  /**
   * Sets the visibility of navigation input option.
   * Default value: false
   */
  visible: boolean;
}

/**Describes the settings for the numeric page buttons. */
export interface GridPagerPageIndexSelectors {
  /**
   * Sets the visibility of numeric page buttons.
   * Default value: true
   */
  visible: boolean;
  /**
   * Sets the number of visible page buttons.
   * Default value: 10
   */
  dataSource: any;
}

/**Sets the row details. */
export interface GridRowDetail {
  /**
   * Enables the row details.
   * Default value: false
   */
  enabled: boolean;
  /**
   * Sets the height of the row details.
   * Default value: 200
   */
  height: number;
  /**
   * Sets the position of the Column which allows you to dynamically expand/collapse the row details.
   * Default value: near
   */
  position: "near" | "far";
  /**
   * Sets the template of the row details.
   * Default value: 
   */
  template: any;
  /**
   * Sets the visibility of the Column which allows you to dynamically expand/collapse the row details.
   * Default value: true
   */
  visible: boolean;
  /**
   * Sets the row details dialog. When enabled, row details will be displayed in a Dialog.
   * Default value: [object Object]
   */
  dialog: GridRowDetailDialog;
}

/**Sets the row details dialog. When enabled, row details will be displayed in a Dialog. */
export interface GridRowDetailDialog {
  /**
   * Sets the header of the dialog.
   * Default value: ""
   */
  header: string;
  /**
   * Sets the height of the dialog.
   * Default value: 300
   */
  height: any;
  /**
   * Sets the width of the dialog.
   * Default value: 360
   */
  width: any;
  /**
   * Sets the Left position of the dialog.
   * Default value: center
   */
  left: any;
  /**
   * Sets the Top position of the dialog.
   * Default value: center
   */
  top: any;
  /**
   * Sets whether the row details dialog is enabled. When enabled, row details are displayed in a dialog.
   * Default value: false
   */
  enabled: boolean;
}

/**Describes the column header settings. */
export interface GridColumnHeader {
  /**
   * Sets the column header visibility.
   * Default value: true
   */
  visible: boolean;
}

/**Describes the settings for the group header. */
export interface GridGroupHeader {
  /**
   * Sets the visibility of the group header.
   * Default value: false
   */
  visible: boolean;
  /**
   * Sets a template for the group header.
   * Default value: ""
   */
  template: string;
}

/**Describes the header settings of the grid. */
export interface GridHeader {
  /**
   * Sets the header visibility.
   * Default value: false
   */
  visible: boolean;
  /**
   * Sets a template for the header.
   * Default value: ""
   */
  template: string;
}

/**Describes the footer settings of the grid. */
export interface GridFooter {
  /**
   * Sets the footer visibility.
   * Default value: false
   */
  visible: boolean;
  /**
   * Sets a template for the footer.
   * Default value: ""
   */
  template: string;
}

export interface GridRow {
  /**
   * Sets or gets the row can be expanded or collapsed.
   * Default value: true
   */
  allowToggle: boolean;
  /**
   * Sets or gets the row can be resized.
   * Default value: true
   */
  allowResize: boolean;
  /**
   * Sets or gets the row can be selected.
   * Default value: true
   */
  allowSelect: boolean;
  /**
   * Sets or gets the row can be checked. This property is used when the Grid is in Tree Grid or Grouped mode.
   * Default value: true
   */
  allowCheck: boolean;
  /**
   * Sets or gets the row's check state. This property is used when the Grid is in Tree Grid or Grouped mode.
   * Default value: true
   */
  checked: boolean;
  /**
   * Gets the Row's Cells array. Each cell is an instance of Smart.Grid.Cell.
   * Default value: []
   */
  cells: GridRowCell[];
  /**
   * Gets the row's children array of Smart.Grid.Row. This property is associated to the TreeGrid and Groupng mode of the Grid.
   * Default value: 
   */
  children: any;
  /**
   * Gets the row's bound data.
   * Default value: 
   */
  data: any;
  /**
   * Sets or gets the row's detail height.
   * Default value: 200
   */
  detailHeight: number;
  /**
   * Sets or gets the row's detail template.
   * Default value: 
   */
  detailTemplate: HTMLTemplateElement;
  /**
   * Gets the HTML Element. The property returns null when the Row is not in the View.
   * Default value: null
   */
  element: any;
  /**
   * Sets or gets the row is expanded. This property is used when the Grid is in Tree Grid or Grouped mode.
   * Default value: false
   */
  expanded: boolean;
  /**
   * Gets the row's header element.
   * Default value: null
   */
  header: HTMLElement;
  /**
   * Sets or gets the row's height.
   * Default value: 30
   */
  height: number;
  /**
   * Gets the row's bound index.
   * Default value: -1
   */
  index: number;
  /**
   * Gets the row's bound id.
   * Default value: ""
   */
  id: string;
  /**
   * Gets whether the row is leaf row in TreeGrid or Grouping mode.
   * Default value: false
   */
  leaf: boolean;
  /**
   * Sets or gets the row's maximum height.
   * Default value: 100
   */
  maxHeight: number;
  /**
   * Sets or gets the row's minimum height.
   * Default value: 30
   */
  minHeight: number;
  /**
   * Sets or gets the Freeze mode. Accepts: 'near', 'far', true and false. Freezes/Pins the row to top(near) or bottom(far).
   * Default value: ""
   */
  freeze: string;
  /**
   * Sets or gets whether the row is selected.
   * Default value: false
   */
  selected: boolean;
  /**
   * Sets or gets whether the row is visible. Set the property to 'false' to hide the row.
   * Default value: true
   */
  visible: boolean;
  /**
   * Gets the visible index of the row.
   * Default value: -1
   */
  visibleIndex: number;
}

export interface GridRowCell {
  /**
   * "Sets or gets the horizontal alignment. Allowed values are: 'left', 'center' or 'right'".
   * Default value: "'left'"
   */
  align: string;
  /**
   * Gets the column associated to the cell.
   * Default value: null
   */
  column: any;
  /**
   * Sets or gets the cell's text color.
   * Default value: "''"
   */
  color: string;
  /**
   * Sets or gets the cell's background.
   * Default value: "''"
   */
  background: string;
  /**
   * Sets or gets the cell's borderColor.
   * Default value: "''"
   */
  borderColor: string;
  /**
   * Sets or gets the cell's colSpan.
   * Default value: 1
   */
  colSpan: number;
  /**
   * Sets or gets the cell's editor.
   * Default value: null
   */
  editor: any;
  /**
   * Gets the HTMLElement associated to the cell.
   * Default value: null
   */
  element: HTMLElement;
  /**
   * Gets a formatted number or Date.
   * Default value: undefined
   */
  getFormattedValue: any;
  /**
   * Gets whether the cell is in edit mode.
   * Default value: false
   */
  isEditing: boolean;
  /**
   * Gets the old value of the cell
   * Default value: null
   */
  oldValue: any;
  /**
   * Sets or gets the cell's fontSize
   * Default value: "''"
   */
  fontSize: string;
  /**
   * Sets or gets the cell's fontWeight
   * Default value: "''"
   */
  fontWeight: string;
  /**
   * Sets or gets the cell's fontFamily
   * Default value: "''"
   */
  fontFamily: string;
  /**
   * Sets or gets the cell's fontStyle
   * Default value: "''"
   */
  fontStyle: string;
  /**
   * "Sets or gets whether the cell can be edited.".
   * Default value: false
   */
  readonly: boolean;
  /**
   * Gets the row object associated to the cell.
   * Default value: null
   */
  row: any;
  /**
   * Sets or gets the row span.
   * Default value: 1
   */
  rowSpan: number;
  /**
   * Sets or gets whether the cell is selected.
   * Default value: false
   */
  selected: boolean;
  /**
   * "Each property is an object{name: string, value: any}. This function allows you to update multiple properties with single refresh.".
   * Default value: 
   */
  setProperties: any;
  /**
   * "Allowed values are: 'top', 'middle' or 'bottom'".
   * Default value: ""
   */
  tooltip: string;
  /**
   * The cell's value
   * Default value: null
   */
  value: any;
  /**
   * "Sets or gets the vertical alignment. Allowed values are: 'top', 'middle' or 'bottom'".
   * Default value: "'middle'"
   */
  verticalAlign: string;
}

/**Describes the selection settings. */
export interface GridSelection {
  /**
   * Enables the selection option.
   * Default value: false
   */
  enabled: boolean;
  /**
   * Sets or gets whether selection by clicking on a Row header is allowed.
   * Default value: false
   */
  allowRowHeaderSelection: boolean;
  /**
   * Sets or gets whether selection by clicking on a Column header is allowed.
   * Default value: false
   */
  allowColumnHeaderSelection: boolean;
  /**
   * Sets or gets whether selection by clicking on a Row is allowed.
   * Default value: true
   */
  allowRowSelection: boolean;
  /**
   * Sets or gets whether selection by clicking on a cell is allowed.
   * Default value: false
   */
  allowCellSelection: boolean;
  /**
   * Sets or gets whether selection by dragging(like in Excel) is allowed.
   * Default value: true
   */
  allowDragSelection: boolean;
  /**
   * Sets or gets whether selection by dragging will automatically scroll the Grid view.
   * Default value: true
   */
  allowDragSelectionAutoScroll: boolean;
  /**
   * Sets or gets whether the Cells selection bottom-right corner selection 'Drag Handle' (litte square like in Excel) is displayed. That handle allows you to resize the selection horizontally or vertically
   * Default value: true
   */
  allowCellDragSelectionHandle: boolean;
  /**
   * Sets or gets whether the Cells selection can be dragged and dropped. Drag happens when the cursor is moved to the bottom of the cells selection. The cursor is changed to a drag cursor. Press the button and hold and move the selection. By default the dragged cell values are copied on drop.
   * Default value: true
   */
  allowCellDragDropSelectionHandle: boolean;
  /**
   * Sets or gets whether the Cells selection will be auto-filled with values on drop when dragging through the 'Drag Handle'.
   * Default value: true
   */
  allowCellDragSelectionAutoFill: boolean;
  /**
   * Sets or gets whether the selection allows you to select 'one', 'many' or a variation of 'many' called 'extended'. 'one' allows you to have only single cell or row selected. 'many' 
   * Default value: many
   */
  mode: "one" | "many" | "extended";
  /**
   * Sets or gets whether the selection happens on 'click' or 'doubleClick'. 'none' means that selection can happen only through API.
   * Default value: click
   */
  action: "none" | "click" | "doubleClick";
  /**
   * 
   * Default value: [object Object]
   */
  checkBoxes: GridSelectionCheckBoxes;
  /**
   * 
   * Default value: ""
   */
  selected: string;
}

export interface GridSelectionCheckBoxes {
  /**
   * Sets or gets whether the checkboxes selection is enabled. In that mode a new column with checkboxes is displayed.
   * Default value: false
   */
  enabled: boolean;
  /**
   * Sets or gets whether the selection happens on 'click' or 'doubleClick'. 'none' means that selection can happen only through API.
   * Default value: click
   */
  action: "none" | "click" | "doubleClick";
  /**
   * Sets or gets whether the checkbox selection selects all rows in the current page or all rows. The 'none' setting disables the header checkbox.
   * Default value: page
   */
  selectAllMode: "none" | "page" | "all";
  /**
   * Sets or gets whether the position of the checkbox selection column.
   * Default value: near
   */
  position: "near" | "far";
}

/**Describes sorting settings. */
export interface GridSorting {
  /**
   * Enables sorting.
   * Default value: false
   */
  enabled: boolean;
  /**
   * Sets the sort columns to be sorted.
   * Default value: 
   */
  sort: string[];
  /**
   * Sets the count of allowed sorting columns.
   * Default value: one
   */
  mode: "one" | "many";
  /**
   * Enables switching between the three sort states: ascending, descending and not sorted.
   * Default value: true
   */
  sortToggleThreeStates: boolean;
}

declare global {    
    interface Document {
        createElement(tagName: "smart-grid"): Grid;
    }
}

