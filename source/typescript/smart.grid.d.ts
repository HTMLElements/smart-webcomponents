import  {BaseElement, Animation} from "./smart.element"
import  {DataAdapter} from "./smart.dataadapter"
import  {Chart} from "./smart.chart"

export interface GridProperties {
  /**
   * An object containing settings related to the grid's appearance.
   * Default value: [object Object]
   */
  appearance?: GridAppearance;
  /**
   * An object containing settings related to the grid's behavior.
   * Default value: [object Object]
   */
  behavior?: GridBehavior;
  /**
   * An object containing settings related to the grid's layout.
   * Default value: [object Object]
   */
  layout?: GridLayout;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * The clipboard property is used to enable/disable clipboard operations with Ctrl+C, Ctrl+X and Ctrl+V keyboard navigations..
   * Default value: [object Object]
   */
  clipboard?: GridClipboard;
  /**
   * The columns property is used to describe all columns displayed in the grid. 
   * Default value: []
   */
  columns?: {label: string, dataField: string}[] | string[] | number | GridColumn[];
  /**
   * Column Menu is the drop-down menu displayed after clicking the column header's drop-down button, which is displayed when you hover the column header. It allows you to customize column settings. For example: Sort, Filter or Group the Grid by the current column.
   * Default value: [object Object]
   */
  columnMenu?: GridColumnMenu;
  /**
   * Describes the settings of the column groups.
   * Default value: 
   */
  columnGroups?: GridColumnGroup[];
  /**
   * Sets or gets details about conditional formatting to be applied to the Grid's cells.
   * Default value: null
   */
  conditionalFormatting?: GridConditionalFormatting[];
  /**
   * Sets the Grid Charting Data Visualization.
   * Default value: [object Object]
   */
  charting?: GridCharting;
  /**
   * Sets the TreeGrid checkboxes.
   * Default value: [object Object]
   */
  checkBoxes?: GridCheckBoxes;
  /**
   * Sets the Grid Data Export options.
   * Default value: [object Object]
   */
  dataExport?: GridDataExport;
  /**
   * Sets the grid's data source. The value of dataSource can be an instance of JQX.DataAdapter or an Array.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Sets the grid's data source settings when the dataSource property is set to an Array or URL.
   * Default value: [object Object]
   */
  dataSourceSettings?: GridDataSourceSettings;
  /**
   * Describes the grid's editing settings.
   * Default value: [object Object]
   */
  editing?: GridEditing;
  /**
   * Describes the grid's filtering settings.
   * Default value: [object Object]
   */
  filtering?: GridFiltering;
  /**
   * Describes the grid's grouping settings.
   * Default value: [object Object]
   */
  grouping?: GridGrouping;
  /**
   * Sets the messages values.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Callback function, which is called when the Grid needs a cell value to render it. When you implement this function, you can override the default cell value rendering.
   * Default value: null
   */
  onCellValue?: {(cell: GridCell): void};
  /**
   * Callback function, which is called when a cell value will be updated. This function is useful if you want to make Ajax call to a server to validate the cell changes. If the changes are validated, invoke the confirm function.
   * Default value: null
   */
  onCellUpdate?: {(cell: GridCell, oldValue: any, value: any, confirm: {(commit: boolean): void}): void};
  /**
   * Callback function, which is called when a cell is rendered. This function is useful if you want to customize GridCell properties, before the cell is rendered.
   * Default value: null
   */
  onCellRender?: {(cell: GridCell): void};
  /**
   * Callback function() called before the grid has been initialized and the Grid's Virtual DOM is not created.
   * Default value: null
   */
  onBeforeInit?: {(): void};
  /**
   * Callback function() called when the grid is initializing and the Grid's Virtual DOM is created.
   * Default value: null
   */
  onInit?: {(): void};
  /**
   * Callback function() called after the grid has been initialized and the Grid's Virtual DOM is created.
   * Default value: null
   */
  onAfterInit?: {(): void};
  /**
   * Callback function(chart: JQX.Chart) called when the chart has been initialized. You can use this function to customize the Chart element settings.
   * Default value: null
   */
  onChartInit?: any;
  /**
   * Callback function() called when the grid has been rendered.
   * Default value: null
   */
  onRender?: any;
  /**
   * Callback function(event: KeyboardEvent) called when the grid is on focus and a keyboard key is pressed.
   * Default value: null
   */
  onKey?: {(event: KeyboardEvent): void};
  /**
   * Callback function, which is called when a row is initializing. This function can be used to customize the row settings.
   * Default value: null
   */
  onRowInit?: {(index: number, row: GridRow): void};
  /**
   * Callback function, which is called when a row detail is initializing. Row details are displayed below the row's data or in a separate dialog.
   * Default value: null
   */
  onRowDetailInit?: {(index: number, row: GridRow, details: HTMLElement): void};
  /**
   * Callback function, which is called when a row detail is udpating.
   * Default value: null
   */
  onRowDetailUpdated?: {(index: number, row: GridRow, details: HTMLElement): void};
  /**
   * Callback function which is called when a row has been inserted.
   * Default value: null
   */
  onRowInserted?: {(index: number, row: GridRow): void};
  /**
   * Callback function, which is called when a row has been removed.
   * Default value: null
   */
  onRowRemoved?: {(index: number, row: GridRow): void};
  /**
   * Callback function, which is called when row's cell values will be updated. This function is useful if you want to make Ajax call to a server to validate the edit changes. If the changes are validated, invoke the confirm function.
   * Default value: null
   */
  onRowUpdate?: {(index: number, row: GridRow, oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void};
  /**
   * Callback function, called when a row has been updated.
   * Default value: null
   */
  onRowUpdated?: {(index: number, row: GridRow): void};
  /**
   * Callback function, which is called when a column has been initialized. This function can be used to customize the column settings.
   * Default value: null
   */
  onColumnInit?: {(index: number, column: GridColumn): void};
  /**
   * Callback function, which called when a column has been inserted.
   * Default value: null
   */
  onColumnInserted?: {(index: number, column: GridColumn): void};
  /**
   * Callback function, which is called when a column has been removed.
   * Default value: null
   */
  onColumnRemoved?: {(index: number, column: GridColumn): void};
  /**
   * Callback function, which is called when a column has been updated.
   * Default value: null
   */
  onColumnUpdated?: {(index: number, column: GridColumn): void};
  /**
   * Callback function, which is called when a command is executed. The name argument is the command's name. The command argument is the command's function. details are built in command arguments passed by the Grid. The handled parameter allows you to cancel built-in command, because when you set it to true the Grid will not execute the default command's behavior.
   * Default value: null
   */
  onCommand?: {(name: string, command: any, details: GridCell, event: Event | KeyboardEvent | PointerEvent, handled: boolean): void};
  /**
   * Sets or gets the id of the current user. Has to correspond to the id of an item from the users property/array. Depending on the current user, different privileges are enabled. If no current user is set, privileges depend on the element's properties.
   * Default value: 
   */
  currentUser?: string | number;
  /**
   * Sets the grid users. Expects an array with 'id', 'name' and optionally 'color' and 'image' properties.
   * Default value: []
   */
  users?: any[];
  /**
   * Describes the paging settings.
   * Default value: [object Object]
   */
  paging?: GridPaging;
  /**
   * Describes the pager settings.
   * Default value: [object Object]
   */
  pager?: GridPager;
  /**
   * Sets the row details.
   * Default value: [object Object]
   */
  rowDetail?: GridRowDetail;
  /**
   * Sets the scroll mode settings.
   * Default value: physical
   */
  scrolling?: Scrolling;
  /**
   * Describes the column header settings.
   * Default value: [object Object]
   */
  columnHeader?: GridColumnHeader;
  /**
   * Describes the summary row settings.
   * Default value: [object Object]
   */
  summaryRow?: GridSummaryRow;
  /**
   * Describes the settings for the group header.
   * Default value: [object Object]
   */
  groupHeader?: GridGroupHeader;
  /**
   * Describes the header settings of the grid.
   * Default value: [object Object]
   */
  header?: GridHeader;
  /**
   * Describes the footer settings of the grid.
   * Default value: [object Object]
   */
  footer?: GridFooter;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * The rows property is used to describe all rows displayed in the grid.
   * Default value: 
   */
  rows?: GridRow[];
  /**
   * Describes the selection settings.
   * Default value: [object Object]
   */
  selection?: GridSelection;
  /**
   * Describes sorting settings.
   * Default value: [object Object]
   */
  sorting?: GridSorting;
}
/**
 Data Grid UI Component that covers everything from paging, sorting, grouping, filtering, and editing to row and column virtualization, right-to-left layout, export to Excel and PDF and Accessibility.
*/
export interface Grid extends BaseElement, GridProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered, when the edit begins.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, dataField, row, column, cell)
   *  id - The edited row id.
   *  dataField - The edited column data field.
   *  row - The edited row.
   *  column - The edited column.
   *  cell - The edited cell.
   */
  onBeginEdit?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the Grid's header toolbar is displayed and the 'OK' button of a header dropdown is clicked. For example, when you open the columns customize panel, reorder columns and click the 'OK' button.
	* @param event. The custom event. Custom data event was created with: ev.detail(type)
   *  type - The type of dropdown. Possible values: 'filter', 'sort', 'search', 'group', 'format', 'customize'
   */
  onBatchChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the Grid's header toolbar is displayed and the 'Cancel' button of a header dropdown is clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(type)
   *  type - The type of dropdown. Possible values: 'filter', 'sort', 'search', 'group', 'format', 'customize'
   */
  onBatchCancel?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the selection is changed. When you select with a drag, the event is triggered when the drag starts and ends. 
	* @param event. The custom event. Custom data event was created with: ev.detail(started, finished, originalEvent)
   *  started - The flag is <em>true</em>, when the selection starts. The flag is <em>false</em>, when the selection ends and when the user changes the selection by dragging.
   *  finished - The flag is <em>true</em>, when the selection ends. The flag is <em>false</em>, when the selection starts and when the user changes the selection by dragging.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered, when the user clicks on the header of a column.
	* @param event. The custom event. Custom data event was created with: ev.detail(column, dataField, originalEvent)
   *  column - The clicked column.
   *  dataField - The column's data field.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onColumnClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the user double clicks on the header of a column.
	* @param event. The custom event. Custom data event was created with: ev.detail(column, dataField, originalEvent)
   *  column - The double-clicked column.
   *  dataField - The column's data field.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onColumnDoubleClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the user resized a column.
	* @param event. The custom event. Custom data event was created with: ev.detail(column, dataField, oldWidth, width)
   *  column - The resized column.
   *  dataField - The column's data field.
   *  oldWidth - The old width of the column.
   *  width - The new width of the column.
   */
  onColumnResize?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the user starts a column drag.
	* @param event. The custom event. Custom data event was created with: ev.detail(column, dataField, index, originalEvent)
   *  column - The column.
   *  dataField - The column's data field.
   *  index - The column's index
   *  originalEvent - The origianl Event object.
   */
  onColumnDragStart?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the user drags a column.
	* @param event. The custom event. Custom data event was created with: ev.detail(column, dataField, index, data, originalEvent)
   *  column - The column.
   *  dataField - The column's data field.
   *  index - The column's index
   *  data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
   *  originalEvent - The origianl Event object.
   */
  onColumnDragging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the user drops a column.
	* @param event. The custom event. Custom data event was created with: ev.detail(column, dataField, index, newIndex, data, originalEvent)
   *  column - The column.
   *  dataField - The column's data field.
   *  index - The column's index
   *  newIndex - The column's new index
   *  data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
   *  originalEvent - The origianl Event object.
   */
  onColumnDragEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the user reorders a column.
	* @param event. The custom event. Custom data event was created with: ev.detail(column, dataField, index, newIndex, data, originalEvent)
   *  column - The column.
   *  dataField - The column's data field.
   *  index - The column's index
   *  newIndex - The column's new index
   *  data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
   *  originalEvent - The origianl Event object.
   */
  onColumnReorder?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the user starts a row drag.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, id, index, originalEvent)
   *  row - The row.
   *  id - The row's id
   *  index - The row's index
   *  originalEvent - The origianl Event object.
   */
  onRowDragStart?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the user drags a row.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, id, index, data, originalEvent)
   *  row - The row.
   *  id - The row's id
   *  index - The row's index
   *  data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
   *  originalEvent - The origianl Event object.
   */
  onRowDragging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the user drags a row.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, id, index, newIndex, data, originalEvent)
   *  row - The row.
   *  id - The row's id
   *  index - The row's index
   *  newIndex - The row's new index
   *  data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
   *  originalEvent - The origianl Event object.
   */
  onRowDragEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the user reorders a row.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, id, index, newIndex, data, originalEvent)
   *  row - The row.
   *  id - The row's id
   *  index - The row's index
   *  newIndex - The row's new index
   *  data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
   *  originalEvent - The origianl Event object.
   */
  onRowReorder?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the user expands a row of the grid. The Grid is in TreeGrid/Grouping mode.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, id, originalEvent)
   *  row - The expanded row.
   *  id - The row's id
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onRowExpand?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the user collapsed a row of the grid. The Grid is in TreeGrid/Grouping mode.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, id, originalEvent)
   *  row - The collapsed row. 
   *  id - The row's id
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onRowCollapse?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the user clicks on a row of the grid.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, originalEvent, id, isRightClick, pageX, pageY)
   *  row - The clicked row.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   *  id - Gets the row id.
   *  isRightClick - Gets whether the pointing device's right button is clicked.
   *  pageX - Gets the click's X position.
   *  pageY - Gets the click's Y position.
   */
  onRowClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the user double clicks on a row of the grid.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, originalEvent, id, isRightClick, pageX, pageY)
   *  row - The double-clicked row.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   *  id - Gets the row id.
   *  isRightClick - Gets whether the pointing device's right button is clicked.
   *  pageX - Gets the click's X position.
   *  pageY - Gets the click's Y position.
   */
  onRowDoubleClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the user resized a row.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, id, oldHeight, height)
   *  row - The resized row.
   *  id - Gets the row id.
   *  oldHeight - The old height of the row.
   *  height - The new height of the row.
   */
  onRowResize?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the user clicks on a cell of the grid.
	* @param event. The custom event. Custom data event was created with: ev.detail(cell, originalEvent, id, dataField, isRightClick, pageX, pageY)
   *  cell - The clicked cell.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   *  id - Gets the row id.
   *  dataField - Gets the column dataField.
   *  isRightClick - Gets whether the pointing device's right button is clicked.
   *  pageX - Gets the click's X position.
   *  pageY - Gets the click's Y position.
   */
  onCellClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the user double clicks on a cell of the grid.
	* @param event. The custom event. Custom data event was created with: ev.detail(cell, originalEvent, id, dataField, isRightClick, pageX, pageY)
   *  cell - The double-clicked cell. 
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   *  id - Gets the row id.
   *  dataField - Gets the column dataField.
   *  isRightClick - Gets whether the pointing device's right button is clicked.
   *  pageX - Gets the click's X position.
   *  pageY - Gets the click's Y position.
   */
  onCellDoubleClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the edit ends.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, dataField, row, column, cell)
   *  id - The edited row id.
   *  dataField - The edited column data field.
   *  row - The edited row.
   *  column - The edited column.
   *  cell - The edited cell.
   */
  onEndEdit?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when a filter is added or removed.
	* @param event. The custom event. Custom data event was created with: ev.detail(columns, data)
   *  columns - Array of columns.
   *  data - Array of {dataField: string, filter: string}. <em>dataField</em> is the column's data field. <em>filter</em> is a filter expression like 'startsWith B'
   */
  onFilter?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the add new column dialog is opened.
	* @param event. The custom event. Custom data event was created with: ev.detail(dataField)
   *  dataField - The column data field.
   */
  onOpenColumnDialog?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the add new column dialog is closed.
	* @param event. The custom event. Custom data event was created with: ev.detail(dataField)
   *  dataField - The column data field.
   */
  onCloseColumnDialog?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the grid is resized.
	* @param event. The custom event.    */
  onResize: ((ev: Event) => any) | null;
  /**
   * This event is triggered when the user touches and holds on the row for at least 300ms.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, originalEvent)
   *  row - The tapped row.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onRowTap?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user touches and holds on the cell for at least 300ms.
	* @param event. The custom event. Custom data event was created with: ev.detail(cell, originalEvent)
   *  cell - The tapped row.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onCellTap?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the user changes the pages.
	* @param event. The custom event.    */
  onPage?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when a sorting column is added or removed.
	* @param event. The custom event. Custom data event was created with: ev.detail(columns, data)
   *  columns - Array of columns.
   *  data - Array of {dataField: string, sortOrder: string, sortIndex: number}. <em>dataField</em> is the column's data field. <em>sortOrder</em> is 'asc' or 'desc', <em>sortIndex</em> is the index of the column in multi column sorting.
   */
  onSort?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the user reaches the bottom of the grid.
	* @param event. The custom event.    */
  onScrollBottomReached?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered, when the user reaches the top of the grid.
	* @param event. The custom event.    */
  onScrollTopReached?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Adds a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
   * @param {any} data. row data matching the data source
   * @param {boolean} insertAtBottom?. Determines whether to add the new row to the bottom or top of the collection. The default value is 'true'
   * @param {any} callback?. Sets a callback function, which is called after the new row is added. The callback's argument is the new row.
   */
  addRow(data: any, insertAtBottom?: boolean, callback?: any): void;
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
   * Groups the Grid by a data field. This method will add a group to the Grid when grouping is enabled.
   * @param {string} dataField. column bound data field
   */
  addGroup(dataField: string): void;
  /**
   * Sorts the Grid by a data field. This method will add a sorting to the Grid when sorting is enabled.
   * @param {string} dataField. column bound data field
   * @param {string} sortOrder. column's sort order. Use 'asc' or 'desc'.
   */
  addSort(dataField: string, sortOrder: string): void;
  /**
   * Auto-sizes grid rows. This method will update the <em>height</em> of all Grid rows.
   */
  autoSizeRows(): void;
  /**
   * Auto-sizes grid columns. This method will update the <em>width</em> of all Grid columns.
   */
  autoSizeColumns(): void;
  /**
   * This method returns true, if all rows in the Grid are selected.
   * @returns {boolean}
   */
  areAllRowsSelected(): boolean;
  /**
   * Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once.
   */
  beginUpdate(): void;
  /**
   * Begins row, cell or column. This method allows you to programmatically start a cell, row or column editing. After calling it, an editor HTMLElement will be created and displayed in the Grid.
   * @param {string | number} rowId. row bound id
   * @param {string} dataField?. column bound data field
   */
  beginEdit(rowId: string | number, dataField?: string): void;
  /**
   * Clears all filters. Refreshes the view and updates all filter input components.
   */
  clearFilter(): void;
  /**
   * Clears all data groups. Refreshes the view and updates the DataGrid component.
   */
  clearGroups(): void;
  /**
   * Clears all sorting. Refreshes the view and updates the DataGrid component.
   */
  clearSort(): void;
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
   * @param {string | number} rowId. row bound id
   */
  checkRow(rowId: string | number): void;
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
   * @param {string | number} rowId. row bound id
   */
  collapseRow(rowId: string | number): void;
  /**
   * Collapses all TreeGrid or Grouping rows.
   */
  collapseAllRows(): void;
  /**
   * Creates a Chart, when charting is enabled.
   * @param {string} type. Chart's type
   * @param {any} dataSource?. Chart's data source
   */
  createChart(type: string, dataSource?: any): void;
  /**
   * Delete a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
   * @param {string | number} rowId. row bound id
   * @param {any} callback?. Sets a callback function, which is called after the row is deleted. The callback's argument is the deleted row.
   */
  deleteRow(rowId: string | number, callback?: any): void;
  /**
   * Scrolls to a row or cell. This method scrolls to a row or cell, when scrolling is necessary. If pagination is enabled, it will automatically change the page.
   * @param {string | number} rowId. row bound id
   * @param {string} dataField?. column bound data field
   * @returns {boolean}
   */
  ensureVisible(rowId: string | number, dataField?: string): boolean;
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
   * @param {string | number} rowId. row bound id
   */
  expandRow(rowId: string | number): void;
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
   * Navigates to a page, when paging is enabled.
   * @param {number} index. page index
   */
  goToPage(index: number): void;
  /**
   * Navigates to the next page, when grid paging is enabled.
   */
  nextPage(): void;
  /**
   * Navigates to the prev page, when grid paging is enabled.
   */
  prevPage(): void;
  /**
   * Navigates to the first page, when grid paging is enabled.
   */
  firstPage(): void;
  /**
   * Navigates to the last page, when grid paging is enabled.
   */
  lastPage(): void;
  /**
   * Gets the maximum position of the vertical scrollbar. You can use this method in combination with the setVerticalScrollValue to apply a new scroll position.
   * @returns {number}
   */
  getVerticalScrollMax(): number;
  /**
   * Gets the position of the vertical scrollbar.
   * @returns {number}
   */
  getVerticalScrollValue(): number;
  /**
   * Gets the maximum position of the horizontal scrollbar. You can use this method in combination with the setHorizontalScrollValue to apply a new scroll position.
   * @returns {number}
   */
  getHorizontalScrollMax(): number;
  /**
   * Gets the position of the horizontal scrollbar.
   * @returns {number}
   */
  getHorizontalScrollValue(): number;
  /**
   * Gets the columns array. Each item in the array contains the column properties which are dynamically set by the user interaction and the columns initialization data properties such as: 'label', 'dataField', 'dataType', 'visible'.
   * @returns {any}
   */
  getColumns(): any;
  /**
   * Gets the groups array.
   * @returns {any[]}
   */
  getGroups(): any[];
  /**
   * Gets an array of columns with applied sorting. Each member in the array is with column's data field used as a key and 'sortOrder' and 'sortIndex' as a value.
   * @returns 
   */
  getSortedColumns(): {[dataField: string]: { sortOrder: string, sortIndex: number }};
  /**
   * Gets the selection.
   * @returns {any}
   */
  getSelection(): any;
  /**
   * Gets the selected row ids.
   * @returns {any[]}
   */
  getSelectedRows(): any[];
  /**
   * Gets the selected cells. The method returns an array of cell. Each cell is an array with row id, column data field and cell value.
   * @returns {any[]}
   */
  getSelectedCells(): any[];
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
   * Gets a JSON object with the following fields: 'sort', 'filter', 'groups', 'paging', 'selectedCells', 'selectedrows'.
   * @returns {any}
   */
  getState(): any;
  /**
   * Gets the changes from the batch edit.
   * @returns 
   */
  getBatchEditChanges(): { upDated: [{ id: string, dataField: string, oldValue: Object, newValue: Object }], deleted: [{id: string, data: Object}], added: [{id: string, data: Object}] };
  /**
   * Gets a value of a cell.
   * @param {string | number} rowId. row bound id
   * @param {string} dataField. column bound data field
   * @returns {any}
   */
  getCellValue(rowId: string | number, dataField: string): any;
  /**
   * Gets a value of a column.
   * @param {string} dataField. column bound data field
   * @param {string} propertyName. The property name.
   * @returns {any}
   */
  getColumnProperty(dataField: string, propertyName: string): any;
  /**
   * Gets a value of a row.
   * @param {string | number} rowId. row bound id
   * @param {string} propertyName. The property name.
   * @returns {any}
   */
  getRowProperty(rowId: string | number, propertyName: string): any;
  /**
   * Gets the Data source data associated to the row.
   * @param {string | number} rowId. row bound id
   * @returns {any}
   */
  getRowData(rowId: string | number): any;
  /**
   * Gets the Row's id.
   * @param {number} rowIndex. row index
   * @returns {any}
   */
  getRowId(rowIndex: number): any;
  /**
   * Gets whether a column's drop-down menu is opened.
   * @returns {boolean}
   */
  hasMenu(): boolean;
  /**
   * This method returns true, if any rows in the Grid are selected.
   * @returns {boolean}
   */
  hasSelectedRows(): boolean;
  /**
   * Hides the Details of a Row, when row details are enabled.
   * @param {string | number} rowId. row bound id
   */
  hideDetail(rowId: string | number): void;
  /**
   * Highlights a column. Highlights a Grid column.
   * @param {string} dataField. column bound data field
   */
  highlightColumn(dataField: string): void;
  /**
   * Highlights a cell. Calling the method a second time toggle the highlight state.
   * @param {string | number} rowId. row bound id
   * @param {string} dataField. column bound data field
   * @param {string} className?. CSS Class Name
   */
  highlightCell(rowId: string | number, dataField: string, className?: string): void;
  /**
   * Highlights a row. Calling the method a second time toggle the highlight state.
   * @param {string | number} rowId. row bound id
   * @param {string} className?. CSS Class Name
   */
  highlightRow(rowId: string | number, className?: string): void;
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
   * Removes a group by data field. This method will remove a group to the Grid when grouping is enabled.
   * @param {string} dataField. column bound data field
   */
  removeGroup(dataField: string): void;
  /**
   * Removes a sorting by data field. This method will remove a sorting from a Grid column.
   * @param {string} dataField. column bound data field
   */
  removeSort(dataField: string): void;
  /**
   * Re-sorts the Grid by using the already applied column sortings and re-renders the Grid.
   */
  refreshSort(): void;
  /**
   * Reverts the batch edit changes. This method cancels all changes made by the end-user.
   */
  revertBatchEdit(): void;
  /**
   * Reorders two DataGrid columns.
   * @param {string | number} dataField. The data field or column index of the first grid column.
   * @param {string | number} referenceDataField. The data field or column index of the second grid column.
   * @param {boolean} insertAfter?. Determines whether to insert the first column after the reference column.
   */
  reorderColumns(dataField: string | number, referenceDataField: string | number, insertAfter?: boolean): void;
  /**
   * Sorts the Grid by a data field. This method will add or remove sorting, when sorting is enabled. To remove the sorting, use 'null' for the sortOrder parameter.
   * @param {string} dataField. column bound data field
   * @param {string | null} sortOrder. column's sort order. Use 'asc', 'desc' or null.
   */
  sortBy(dataField: string, sortOrder: string | null): void;
  /**
   * Swaps two DataGrid columns.
   * @param {string | number} dataField. The data field or column index of the first grid column.
   * @param {string | number} referenceDataField. The data field or column index of the second grid column.
   */
  swapColumns(dataField: string | number, referenceDataField: string | number): void;
  /**
   * Saves the batch edit changes. This method confirms the editing changes made by the end-user.
   */
  saveBatchEdit(): void;
  /**
   * Selects a row, cell or column.
   * @param {string | number} rowId. row bound id
   * @param {string} dataField?. column bound data field
   */
  select(rowId: string | number, dataField?: string): void;
  /**
   * Selects a range of rows, cells or columns. The result of the method depends on the <em>selection</em> configuration of the Grid.
   * @param {string | number} rowId. row bound id
   * @param {string} dataField. column bound data field
   * @param {string | number} endRowId. row bound id
   * @param {string} endDataField. column bound data field
   */
  selectRange(rowId: string | number, dataField: string, endRowId: string | number, endDataField: string): void;
  /**
   * Selects a range of rows.
   * @param {string | number} rowId. row bound id
   * @param {string | number} endRowId. row bound id
   */
  selectRowsRange(rowId: string | number, endRowId: string | number): void;
  /**
   * Selects multiple rows by their ids.
   * @param {(string | number)[]} rowId. Array of row ids
   */
  selectRows(rowId: (string | number)[]): void;
  /**
   * Selects all rows.
   */
  selectAllRows(): void;
  /**
   * Selects multiple rows by their index.
   * @param {number[]} rowIndex. Array of row indexes
   */
  selectRowsByIndex(rowIndex: number[]): void;
  /**
   * Sets a new value to a cell.
   * @param {string | number} rowId. row bound id
   * @param {string} dataField. column bound data field
   * @param {string | number | Date | boolean} value. New Cell value.
   */
  setCellValue(rowId: string | number, dataField: string, value: string | number | Date | boolean): void;
  /**
   * Sets a property to a column.
   * @param {string} dataField. column bound data field
   * @param {string} propertyName. The column property's name.
   * @param {any} value. The new property value.
   */
  setColumnProperty(dataField: string, propertyName: string, value: any): void;
  /**
   * Sets a property to a row.
   * @param {string | number} rowId. row bound id
   * @param {string} propertyName. The row property's name.
   * @param {any} value. The new property value.
   */
  setRowProperty(rowId: string | number, propertyName: string, value: any): void;
  /**
   * Sets the position of the vertical scrollbar. You can use this method in combination with the getVerticalScrollValue and getVerticalScrollMax.
   * @param {number} value. The new scroll position
   */
  setVerticalScrollValue(value: number): void;
  /**
   * Sets the position of the horizontal scrollbar. You can use this method in combination with the getHorizontalScrollValue and getHorizontalScrollMax.
   * @param {number} value. The new scroll position
   */
  setHorizontalScrollValue(value: number): void;
  /**
   * Shows the Details of a Row, when row details are enabled.
   * @param {string | number} rowId. row bound id
   */
  showDetail(rowId: string | number): void;
  /**
   * Updates a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
   * @param {string | number} rowId. row bound id
   * @param {any} data. row data matching the data source
   * @param {any} callback?. Sets a callback function, which is called after the row is updated. The callback's argument is the updated row.
   */
  updateRow(rowId: string | number, data: any, callback?: any): void;
  /**
   * Unselects a row, cell or column.
   * @param {string | number} rowId. row bound id
   * @param {string} dataField?. column bound data field
   */
  unselect(rowId: string | number, dataField?: string): void;
  /**
   * Unchecks a TreeGrid row. Sets its check-box to false.
   * @param {string | number} rowId. row bound id
   */
  uncheckRow(rowId: string | number): void;
  /**
   * Unchecks all TreeGrid or Grouping rows. Sets all check-boxes to false.
   */
  uncheckAllRows(): void;
  /**
   * Toggles a TreeGrid row. When this method is called, the row is expanded, if it's state is collapsed and collapsed if it's state is expanded.
   * @param {string | number} rowId. row bound id
   */
  toggleRow(rowId: string | number): void;
}

/**An object containing settings related to the grid's appearance. */
export interface GridAppearance {
  /**
   * Starting row index of alternating colors.
   * Default value: 0
   */
  alternationStart?: number;
  /**
   * Ending row index of alternating colors.
   * Default value: 0
   */
  alternationEnd?: number;
  /**
   * number of row color alternations.
   * Default value: 0
   */
  alternationCount?: number;
  /**
   * Enables sticky columns.
   * Default value: false
   */
  allowColumnStickyPosition?: boolean;
  /**
   * Enables row hover effect. Applies a hover style to the cells.
   * Default value: false
   */
  allowHover?: boolean;
  /**
   * Enables header hover effect. Applies a hover style to the headers.
   * Default value: true
   */
  allowHeaderHover?: boolean;
  /**
   * Enables row toggle animation. This animation starts when you expand/collapse a row in TreeGrid/Grouping mode.
   * Default value: false
   */
  allowRowToggleAnimation?: boolean;
  /**
   * Enables row detail toggle animation. This animation starts when you expand/collapse a row in TreeGrid/Grouping mode.
   * Default value: false
   */
  allowRowDetailToggleAnimation?: boolean;
  /**
   * Enables sorting animation. Data records are sorted with animation, when sorting is applied.
   * Default value: false
   */
  allowSortAnimation?: boolean;
  /**
   * Enables column label animation. The label is moved to 'left' with animation, when the column header's drop-down button is displayed on hover or sorting is applied.
   * Default value: true
   */
  allowColumnLabelAnimation?: boolean;
  /**
   * Enables column menu animation. When you click on the column header's drop-down button, the menu is animated.
   * Default value: true
   */
  allowColumnMenuAnimation?: boolean;
  /**
   * Enables column sort button animation. When you click on a sortable column to change the sort order, the sort button is animated.
   * Default value: true
   */
  allowColumnSortButtonAnimation?: boolean;
  /**
   * Enables column action button animation. The drop-down button displayed on column header hover is optionally animated.
   * Default value: true
   */
  allowColumnActionButtonAnimation?: boolean;
  /**
   * Enables column filter button animation.
   * Default value: true
   */
  allowColumnFilterButtonAnimation?: boolean;
  /**
   * If enabled, automatically shows column sort button. The sort button is displayed only when the column is sorted. If the property's value is false, sort button will be always displayed to indicate that sorting is possible.
   * Default value: true
   */
  autoShowColumnSortButton?: boolean;
  /**
   * If enabled, automatically shows column action button.
   * Default value: true
   */
  autoShowColumnActionButton?: boolean;
  /**
   * If enabled, automatically shows column filter button.
   * Default value: true
   */
  autoShowColumnFilterButton?: boolean;
  /**
   * Generates labels as 'numbers' or 'letters'. This property affects the rendering of the row header.
   * Default value: number
   */
  autoGenerateRowLabelMode?: GridAppearanceAutoGenerateRowLabelMode;
  /**
   * Generates labels as 'numbers' or 'letters.  This property affects the rendering of the column header.
   * Default value: letter
   */
  autoGenerateColumnLabelMode?: GridAppearanceAutoGenerateColumnLabelMode;
  /**
   * Sets the visibility of the loading indicator. This is the Loading... image displayed in the Grid while loading data.
   * Default value: false
   */
  displayLoadingIndicator?: boolean;
  /**
   * Sets the loading indicator label.  This is the Text displayed while loading data.
   * Default value: "Loading..."
   */
  loadingIndicatorPlaceholder?: string;
  /**
   * Sets the placeholder of the Grid. The placeholder is displayed when the Grid is empty.
   * Default value: "No Rows"
   */
  placeholder?: string;
  /**
   * Sets the duration of sorting animation. This property is related to the allowSortAnimation property.
   * Default value: 500
   */
  sortAnimationDuration?: number;
  /**
   * Shows or hides Row header.
   * Default value: false
   */
  showRowHeader?: boolean;
  /**
   * Shows row indexes in the row header. The showRowHeader property should be true
   * Default value: false
   */
  showRowHeaderNumber?: boolean;
  /**
   * Shows edit icon when a cell or row is in edit state.
   * Default value: true
   */
  showRowHeaderEditIcon?: boolean;
  /**
   * Shows select icon when the pointer is over the row header cell.
   * Default value: false
   */
  showRowHeaderSelectIcon?: boolean;
  /**
   * Shows focus icon on cell or row focus.
   * Default value: false
   */
  showRowHeaderFocusIcon?: boolean;
  /**
   * Shows drag icon on the row header. 
   * Default value: false
   */
  showRowHeaderDragIcon?: boolean;
  /**
   * Shows column header lines.
   * Default value: true
   */
  showColumnHeaderLines?: boolean;
  /**
   * Shows column lines.
   * Default value: true
   */
  showColumnLines?: boolean;
  /**
   * Shows row lines.
   * Default value: true
   */
  showRowLines?: boolean;
  /**
   * Shows filtered column background, when filter is applied.
   * Default value: true
   */
  showFilterColumnBackground?: boolean;
  /**
   * Shows sorted column background, when sorting is applied.
   * Default value: true
   */
  showSortColumnBackground?: boolean;
  /**
   * Shows frozen column background, when the Grid has frozen columns.
   * Default value: true
   */
  showFrozenColumnBackground?: boolean;
  /**
   * Shows filtered row background, when the Grid has frozen rows.
   * Default value: true
   */
  showFrozenRowBackground?: boolean;
  /**
   * Shows column sort button.
   * Default value: true
   */
  showColumnSortButton?: boolean;
  /**
   * Shows column filter button.
   * Default value: true
   */
  showColumnFilterButton?: boolean;
  /**
   * Shows column description button. The button's style is customizable through the Grid CSS.
   * Default value: false
   */
  showColumnDescriptionButton?: boolean;
  /**
   * Shows column icon within the column's header.
   * Default value: false
   */
  showColumnIcon?: boolean;
  /**
   * Shows column custom button. User-defined button shown in the column header.
   * Default value: false
   */
  showColumnCustomButton?: boolean;
  /**
   * Shows column action button. This is the drop-down button displayed in the column header.
   * Default value: true
   */
  showColumnActionButton?: boolean;
  /**
   * Shows tooltips when user hovers columns or cells.
   * Default value: false
   */
  showTooltips?: boolean;
  /**
   * Shows horizontal scrollbar on fixed columns.
   * Default value: false
   */
  showHorizontalScrollBarOnFixedColumns?: boolean;
  /**
   * Shows vertical scrollbar on fixed columns.
   * Default value: false
   */
  showVerticalScrollBarOnFixedColumns?: boolean;
}

/**An object containing settings related to the grid's behavior. */
export interface GridBehavior {
  /**
   * Auto-Resize on double-click of a column's right border.
   * Default value: true
   */
  allowColumnAutoSizeOnDoubleClick?: boolean;
  /**
   * Auto-Resize on double-click of a row's bottom border.
   * Default value: true
   */
  allowRowAutoSizeOnDoubleClick?: boolean;
  /**
   * Determines whether row reorder is enabled.
   * Default value: false
   */
  allowRowReorder?: boolean;
  /**
   * Determines whether column reorder is enabled.
   * Default value: false
   */
  allowColumnReorder?: boolean;
  /**
   * Sets the column resize mode. split resize mode 'grows' or 'shrinks' the resize element's size and 'shrinks' or 'grows' the next sibling element's size. growAndShrink resize mode 'grows' or 'shrinks' the resize element's size
   * Default value: none
   */
  columnResizeMode?: GridResizeMode;
  /**
   * Sets the row resize mode. split resize mode 'grows' or 'shrinks' the resize element's size and 'shrinks' or 'grows' the next sibling element's size. growAndShrink resize mode 'grows' or 'shrinks' the resize element's size
   * Default value: none
   */
  rowResizeMode?: GridResizeMode;
}

/**An object containing settings related to the grid's layout. */
export interface GridLayout {
  /**
   * Enables or disables the Cells Value wrapping. When the property is true, cell value can wrap in multiple lines.
   * Default value: false
   */
  allowCellsWrap?: boolean;
  /**
   * Sets the width of the auto-generated Grid columns.
   * Default value: null
   */
  autoGenerateColumnWidth?: string | number | null;
  /**
   * Sets the width of the Grid columns.
   * Default value: null
   */
  columnWidth?: string | number | null;
  /**
   * Sets the height of the Grid columns.
   * Default value: null
   */
  columnHeight?: string | number | null;
  /**
   * Sets the minimum height of the Grid columns.
   * Default value: 30
   */
  columnMinHeight?: number;
  /**
   * Sets the minimum height of the Grid rows.
   * Default value: 30
   */
  rowMinHeight?: number;
  /**
   * Sets the height of the Grid rows. The property can be set to null, auto or a number.
   * Default value: null
   */
  rowHeight?: string | number | null;
}

/**The <em>clipboard</em> property is used to enable/disable clipboard operations with Ctrl+C, Ctrl+X and Ctrl+V keyboard navigations.. */
export interface GridClipboard {
  /**
   * Sets or gets whether the property is enabled.
   * Default value: true
   */
  enabled?: boolean;
  /**
   * Sets or gets whether the copy-pasted values will be auto-filled by using automatic pattern detection. This is used in the Drag&Drop Multiple Cells selection. none does nothing. copy just copies the cells. 'fillSeries' detects and automatically fills the values. For example, if the selection has '1, 2' and the possible positions are more, the pasted values would be '1, 2, 3, 4, etc.
   * Default value: fillSeries
   */
  autoFillMode?: GridClipboardAutoFillMode;
  /**
   * Sets or gets a callback on paste.
   * Default value: null
   */
  onPasteValue?: any;
}

export interface GridColumn {
  /**
   * Sets or gets the column's header alignment. Accepts: 'left', 'right', 'center'
   * Default value: left
   */
  align?: HorizontalAlignment;
  /**
   * Sets or gets whether the column can be exported.
   * Default value: true
   */
  allowExport?: boolean;
  /**
   * Sets or gets whether the column can be grouped.
   * Default value: true
   */
  allowGroup?: boolean;
  /**
   * Sets or gets whether the column can be hidden.
   * Default value: true
   */
  allowHide?: boolean;
  /**
   * Sets or gets whether the column can be selected.
   * Default value: true
   */
  allowSelect?: boolean | null;
  /**
   * Sets or gets whether the column can be edited.
   * Default value: true
   */
  allowEdit?: boolean;
  /**
   * Sets or gets whether the column can be sorted.
   * Default value: true
   */
  allowSort?: boolean;
  /**
   * Sets or gets whether the column can be edited, when header editing is enabled.
   * Default value: true
   */
  allowHeaderEdit?: boolean;
  /**
   * Sets or gets whether the column can be filtered.
   * Default value: true
   */
  allowFilter?: boolean;
  /**
   * Sets or gets whether the column can be reordered.
   * Default value: true
   */
  allowReorder?: boolean;
  /**
   * Sets or gets whether the column can be resized.
   * Default value: true
   */
  allowResize?: boolean;
  /**
   * Sets or gets whether the column can have 'null' values.
   * Default value: true
   */
  allowNull?: boolean;
  /**
   * Sets or gets the column's cells format. This property is used for applying a formatting to the cell values. Number format strings: 'd' - decimal numbers.'f' - floating-point numbers.'n' - integer numbers.'c' - currency numbers.'p' - percentage numbers.For adding decimal places to the numbers, add a number after the formatting striFor example: 'c3' displays a number in this format $25.256Built-in Date formats:// short date pattern'd' - 'M/d/yyyy',// long date pattern'D' - 'dddd, MMMM dd, yyyy',// short time pattern't' - 'h:mm tt',// long time pattern'T' - 'h:mm:ss tt',// long date, short time pattern'f' - 'dddd, MMMM dd, yyyy h:mm tt',// long date, long time pattern'F' - 'dddd, MMMM dd, yyyy h:mm:ss tt',// month/day pattern'M' - 'MMMM dd',// month/year pattern'Y' - 'yyyy MMMM',// S is a sortable format that does not vary by culture'S' - 'yyyy'-'MM'-'dd'T'HH':'mm':'ss'Date format strings:'d'-the day of the month;'dd'-the day of the month'ddd'-the abbreviated name of the day of the week'dddd'- the full name of the day of the week'h'-the hour, using a 12-hour clock from 1 to 12'hh'-the hour, using a 12-hour clock from 01 to 12'H'-the hour, using a 24-hour clock from 0 to 23'HH'- the hour, using a 24-hour clock from 00 to 23'm'-the minute, from 0 through 59'mm'-the minutes,from 00 though59'M'- the month, from 1 through 12'MM'- the month, from 01 through 12'MMM'-the abbreviated name of the month'MMMM'-the full name of the month's'-the second, from 0 through 59'ss'-the second, from 00 through 59't'- the first character of the AM/PM designator'tt'-the AM/PM designator'y'- the year, from 0 to 99'yy'- the year, from 00 to 99'yyy'-the year, with a minimum of three digits'yyyy'-the year as a four-digit number;'yyyyy'-the year as a four-digit number.
   * Default value: ""
   */
  cellsFormat?: string;
  /**
   * Sets or gets the column's cells alignment. Accepts: 'left', 'right' and 'center'
   * Default value: left
   */
  cellsAlign?: HorizontalAlignment;
  /**
   * Sets or gets the column's cells wrapping. Accepts: true or false.
   * Default value: false
   */
  cellsWrap?: boolean;
  /**
   * Sets or gets the column's cells vertical alignment. Accepts: 'top', 'bottom' and 'center'
   * Default value: center
   */
  cellsVerticalAlign?: VerticalAlignment;
  /**
   * Sets or gets the column's header CSS class name.
   * Default value: ""
   */
  className?: string;
  /**
   * Sets or gets the column's cells CSS class name.
   * Default value: ""
   */
  cellsClassName?: string;
  /**
   * Sets the name of the column group.
   * Default value: ""
   */
  columnGroup?: string;
  /**
   * Sets or gets the column's data source bound field.
   * Default value: ""
   */
  dataField?: string;
  /**
   * Sets or gets the column's data type. Any of the following value is valid: 'string', 'number', 'int', 'date', 'bool', 'object', 'any'
   * Default value: "string"
   */
  dataType?: string;
  /**
   * Sets or gets the column's data source bound field which will be displayed to the user. When the property is not set, it is equal to the 'dataField'.
   * Default value: ""
   */
  displayField?: string;
  /**
   * Sets or gets the column's description. The description of the column is displayed in the column's header, when the end-user moves the pointer over the description button. 'showDescriptionButton' property determines whether the description button is visible.
   * Default value: ""
   */
  description?: string;
  /**
   * Gets the HTML Element. The property returns null when the Column is not in the View.
   * Default value: null
   */
  element?: HTMLElement;
  /**
   * Sets or gets the column's editor. The property expects 'input', 'autoComplete', 'comboBox', 'dropDownList', 'image', 'numberInput', 'checkBox', 'multiInput', 'multiComboInput', 'checkInput', 'slider', 'dateTimePicker', 'timeInput', 'dateInput', 'dateRangeInput', 'maskedTextBox', 'textArea' or a custom object with 'template' property which defines the editor type, 'settings' property which defines the custom editor's properties, 'onInit(int row, string column, object editor, object rowData): object', 'onRender(int row, string column, object editor, object rowData): object', 'setValue(object value): void' and 'getValue(object value): object' callback functions.
   * Default value: null
   */
  editor?: any;
  /**
   * Sets or gets the Freeze mode. Accepts: 'near', 'far', true and false. Freezes/Pins the column to left(near) or right(far).
   * Default value: false
   */
  freeze?: Position;
  /**
   * Sets or gets the filter of the column.
   * Default value: ""
   */
  filter?: string;
  /**
   * Sets or gets the filter menu mode of the column. In 'basic' mode, a single input is displayed in the filter menu. In 'default' mode, two input options are available for more precise filtering. In 'excel' mode, checked list with unique values is displayed.
   * Default value: default
   */
  filterMenuMode?: GridColumnFilterMenuMode;
  /**
   * Sets or gets the column's format function.
   * Default value: null
   */
  formatFunction?: any;
  /**
   * Sets or gets the column's format settings. You can use any of the build in formatting options or to NumberFormat object like that: 'Intl: {  NumberFormat: {  style: \'currency\', currency: \'EUR\' }}' or DateTimeFormat object like that: 'Intl: {  DateTimeFormat: {  dateStyle: \'full\' }}''
   * Default value: [object Object]
   */
  formatSettings?: any;
  /**
   * Sets or gets the column's group.
   * Default value: ""
   */
  group?: string;
  /**
   * Sets or gets the column's icon. Expects CSS class name.
   * Default value: ""
   */
  icon?: string;
  /**
   * Sets or gets the text displayed in the column's header.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets the minimum width.
   * Default value: 30
   */
  minWidth?: number;
  /**
   * Sets or gets the sort order of the column. Accepts: 'asc', 'desc' and null.
   * Default value: null
   */
  sortOrder?: GridColumnSortOrder | null;
  /**
   * Sets or gets the sort index of the column. Accepts an integer value. This property can be used to get or set the column's sort index when sorting mode is 'many'.
   * Default value: null
   */
  sortIndex?: number;
  /**
   * Sets or gets whether the column's header action drop-down button is displayed. This button opens the column's menu.
   * Default value: true
   */
  showActionButton?: boolean;
  /**
   * Sets or gets whether the column's header icon is displayed.
   * Default value: false
   */
  showIcon?: boolean;
  /**
   * Sets or gets whether the column's header description button is displayed.
   * Default value: false
   */
  showDescriptionButton?: boolean;
  /**
   * Sets or gets the width. Accepts: 'number', 'px', 'em', 'auto', 'null' values.
   * Default value: 
   */
  width?: string | number;
  /**
   * Sets or gets the column's template. The property expects the 'id' of HTMLTemplateElement or HTML string which is displayed in the cells. Built-in string values are: 'checkBox', 'switchButton', 'radioButton', 'url', 'email', 'dropdownlist', 'list', 'tags', 'autoNumber', 'modifiedBy', 'createdBy', 'createdTime', 'modifiedTime', 'images. For example, when you set the template to 'url', the cells will be render anchor tags. When you set the template property to HTMLTemplateElement you should consider that once a template is rendered, the formatObject.template property stores the rendered template component for further use.
   * Default value: 
   */
  template?: any;
  /**
   * Sets or gets the column's validation rules. The expected value is an Array of Objects. Each object should have a 'type' property that can be set to 'required', 'min', 'max', 'minLength', 'maxLength', 'email', 'null', 'requiredTrue', 'minData', 'maxDate', 'pattern'. The 'value' property should be set, too. For validation rule types 'required', 'requiredTrue' and 'null' you can skip the 'value' property. Optional property is 'message', which determines the error message.
   * Default value: null
   */
  validationRules?: [] | null;
  /**
   * Sets or gets the column's header vertical alignment. Accepts: 'top', 'bottom' and 'center'
   * Default value: center
   */
  verticalAlign?: VerticalAlignment;
  /**
   * Sets or gets the column summary. The property should be set to an array with the following possible values: 'sum', 'min', 'max', 'avg', 'count', 'median', 'stdev', 'stdevp', 'var', 'varp'.
   * Default value: 
   */
  summary?: string[];
  /**
   * Sets or gets whether the column is visible. Set the property to 'false' to hide the column.
   * Default value: true
   */
  visible?: boolean;
}

/**Column Menu is the drop-down menu displayed after clicking the column header's drop-down button, which is displayed when you hover the column header. It allows you to customize column settings. For example: Sort, Filter or Group the Grid by the current column. */
export interface GridColumnMenu {
  /**
   * Automatically closes the column menu.
   * Default value: true
   */
  autoClose?: boolean;
  /**
   * Sets the data sources to the column menu.
   * Default value: [object Object]
   */
  dataSource?: GridColumnMenuDataSource;
  /**
   * Gets the visibility of the column menu. Returns true, when the column menu is visible.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Sets or gets whether the column menu is enabled. If the value is false, the column menu will not be displayed, when user hovers the column.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Sets the width of the column menu.
   * Default value: 250
   */
  width?: number;
  /**
   * Sets the height of the column menu.
   * Default value: null
   */
  height?: number | null;
}

/**Sets the data sources to the column menu. */
export interface GridColumnMenuDataSource {
  /**
   * Describes the settings of the column menu customize type
   * Default value: [object Object]
   */
  columnMenuCustomizeType?: GridCommand;
  /**
   * Describes the settings of the column menu item rename.
   * Default value: [object Object]
   */
  columnMenuItemRename?: GridCommand;
  /**
   * Describes the settings of the column menu item edit description.
   * Default value: [object Object]
   */
  columnMenuItemEditDescription?: GridCommand;
  /**
   * Describes the settings of the column menu item duplicate.
   * Default value: [object Object]
   */
  columnMenuItemDuplicate?: GridCommand;
  /**
   * Describes the settings of the column menu item insert left.
   * Default value: [object Object]
   */
  columnMenuItemInsertLeft?: GridCommand;
  /**
   * Describes the settings of the of the column menu item insert right.
   * Default value: [object Object]
   */
  columnMenuItemInsertRight?: GridCommand;
  /**
   * Describes the settings of the column menu item sort ascending.
   * Default value: [object Object]
   */
  columnMenuItemSortAsc?: GridCommand;
  /**
   * Describes the settings of the column menu item sort descending.
   * Default value: [object Object]
   */
  columnMenuItemSortDesc?: GridCommand;
  /**
   * Describes the settings of the column menu item remove sort.
   * Default value: [object Object]
   */
  columnMenuItemRemoveSort?: GridCommand;
  /**
   * Describes the settings of the column menu item filter.
   * Default value: [object Object]
   */
  columnMenuItemFilter?: GridCommand;
  /**
   * Describes the settings of the column menu item remove filter.
   * Default value: [object Object]
   */
  columnMenuItemRemoveFilter?: GridCommand;
  /**
   * Describes the settings of the column menu item group by.
   * Default value: [object Object]
   */
  columnMenuItemGroupBy?: GridCommand;
  /**
   * Describes the settings of the column menu item group by.
   * Default value: [object Object]
   */
  columnMenuItemRemoveGroupBy?: GridCommand;
  /**
   * Describes the settings of the column menu item hide.
   * Default value: [object Object]
   */
  columnMenuItemHide?: GridCommand;
  /**
   * Describes the settings of the column menu item delete.
   * Default value: [object Object]
   */
  columnMenuItemDelete?: GridCommand;
}

/**Describes the settings of the column menu customize type */
export interface GridCommand {
  /**
   * Sets the command of the column menu customize type.
   * Default value: "customizeTypeCommand"
   */
  command?: string;
  /**
   * Enables the column menu customize type.
   * Default value: true
   */
  enabled?: boolean;
  /**
   * Sets the visibility of the column menu customize type.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Sets the icon of the column menu customize type.
   * Default value: "jqx-icon-customize"
   */
  icon?: string;
  /**
   * Sets the label of the column menu customize type.
   * Default value: ""
   */
  label?: string;
}

export interface GridColumnGroup {
  /**
   * Sets the label.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets the align.
   * Default value: center
   */
  align?: HorizontalAlignment;
  /**
   * Sets the name of the column group.
   * Default value: ""
   */
  name?: string;
  /**
   * Sets the name of the parent column group.
   * Default value: ""
   */
  parentGroup?: string;
  /**
   * Sets the vertical align.
   * Default value: center
   */
  verticalAlign?: VerticalAlignment;
}

export interface GridConditionalFormatting {
  /**
   * The data field of a numeric column to format. Set 'all' to format all numeric columns.
   * Default value: "all"
   */
  column?: string;
  /**
   * The formatting condition.
   * Default value: lessThan
   */
  condition?: GridConditionalFormattingCondition;
  /**
   * The value to compare by. When condition is 'between', this is the start (from) value.
   * Default value: 0
   */
  firstValue?: number;
  /**
   * The fontFamily to apply to formatted cells.
   * Default value: ""
   */
  fontFamily?: string;
  /**
   * The fontSize to apply to formatted cells.
   * Default value: "The default fontSize as set in CSS"
   */
  fontSize?: string;
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

/**Sets the Grid Charting Data Visualization. */
export interface GridCharting {
  /**
   * Sets or gets whether charting is enabled.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Sets or gets the charting colors. Accepts the 'colorScheme' values of our Chart component.
   * Default value: "scheme01"
   */
  colorScheme?: string;
  /**
   * Sets or gets the chart's container.
   * Default value: null
   */
  appendTo?: any;
  /**
   * Sets or gets the charting dialog.
   * Default value: [object Object]
   */
  dialog?: Dialog;
}

/**Sets or gets the charting dialog. */
export interface Dialog {
  /**
   * Sets or gets the dialog header.
   * Default value: ""
   */
  header?: string;
  /**
   * Sets or gets the dialog height.
   * Default value: 400
   */
  height?: number;
  /**
   * Sets or gets the dialog width.
   * Default value: 400
   */
  width?: number;
  /**
   * Sets or gets the dialog Left position.
   * Default value: center
   */
  left?: string | number;
  /**
   * Sets or gets the dialog Top position.
   * Default value: center
   */
  top?: string | number;
  /**
   * Sets or gets whether the dialog is enabled.
   * Default value: true
   */
  enabled?: boolean;
  /**
   * Gets whether the dialog is displayed.
   * Default value: false
   */
  visible?: boolean;
}

/**Sets the TreeGrid checkboxes. */
export interface GridCheckBoxes {
  /**
   * Sets the visibility of the TreeGrid checkboxes.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Sets the three-state mode of the TreeGrid checkboxes. In that mode, checking a checkbox affects the parent-child rows checkboxes.
   * Default value: false
   */
  hasThreeStates?: boolean;
}

/**Sets the Grid Data Export options. */
export interface GridDataExport {
  /**
   * Sets whether the columns header will be exported.
   * Default value: true
   */
  header?: boolean;
  /**
   * Sets whether the export uses the applied filters.
   * Default value: null
   */
  filterBy?: any;
  /**
   * Sets the groups of the exported data.
   * Default value: null
   */
  groupBy?: any;
  /**
   * Sets a custom style object of the dataExport. 
   * Default value: null
   */
  style?: any;
  /**
   * Sets the exported file's name.
   * Default value: "jqxGrid"
   */
  fileName?: string;
  /**
   * Sets the page orientation, when exporting to PDF.
   * Default value: portrait
   */
  pageOrientation?: GridDataExportPageOrientation;
  /**
   * Sets the expand char displayed when the Grid with row hierarchy(TreeGrid / Grouped) is exported.
   * Default value: "+"
   */
  expandChar?: string;
  /**
   * Sets the collapse char displayed when the Grid with row hierarchy(TreeGrid / Grouped) is exported.
   * Default value: "-"
   */
  collapseChar?: string;
  /**
   * Exports only the visible data of the Grid.
   * Default value: false
   */
  view?: boolean;
  /**
   * Determines the start row index that will be exported or printed. 'view' should be set to true
   * Default value: null
   */
  viewStart?: number | null;
  /**
   * Determines the end row index that will be exported or printed. 'view' should be set to true
   * Default value: null
   */
  viewEnd?: number | null;
  /**
   * An array of row ids that denotes the rows to export.
   * Default value: null
   */
  rowIds?: {(): void};
}

/**Sets the grid's data source settings when the <em>dataSource</em> property is set to an Array or URL. */
export interface GridDataSourceSettings {
  /**
   * Sets or gets whether a column will be auto-generated.
   * Default value: false
   */
  autoGenerateColumns?: boolean;
  /**
   * Sets or gets a children data field like 'children', 'items' in the data source. When this property is set, the dataAdapter will look for this data field when looping through the items. If it is found a hierarchical data source would be created.
   * Default value: ""
   */
  childrenDataField?: string;
  /**
   * Sets or gets the XML binding root.
   * Default value: blackList
   */
  sanitizeHTML?: GridDataSourceSettingsSanitizeHTML;
  /**
   * Sets or gets the XML binding root.
   * Default value: ""
   */
  root?: string;
  /**
   * Sets or gets the XML binding record.
   * Default value: ""
   */
  record?: string;
  /**
   * Sets or gets the data fields to group by.
   * Default value: []
   */
  groupBy?: string[];
  /**
   * Sets or gets the data fields which decribe the loaded data and data type. Ex: ['id: number', 'firstName: string', 'lastName: string']
   * Default value: null
   */
  dataFields?: GridDataSourceSettingsDataField[];
  /**
   * Sets or gets whether the data source type.
   * Default value: array
   */
  dataSourceType?: GridDataSourceSettingsDataSourceType;
  /**
   * Sets or gets the dataAdapter's id
   * Default value: ""
   */
  id?: string;
  /**
   * Sets or gets the key data field to be used for building the hierarchy. It is used in combination with the parentDataField property. Usually the 'id' field is used as key data field and 'parentId' as parent data field'
   * Default value: ""
   */
  keyDataField?: string;
  /**
   * Sets or gets the parent data field to be used for building the hierarchy. It is used in combination with the keyDataField property. Usually the 'id' field is used as key data field and 'parentId' as parent data field'
   * Default value: ""
   */
  parentDataField?: string;
  /**
   * Sets the 'mapChar' data field of the record
   * Default value: "."
   */
  mapChar?: string;
  /**
   * Sets the virtual data source function which is called each time the Grid requests data. Demos using 'virtualDataSource' are available on the Grid demos page.
   * Default value: null
   */
  virtualDataSource?: any;
  /**
   * Sets the virtual data source on expand function. This function is called when we load data on demand in Tree or TreeGrid and virtualDataSource in these components is set, too
   * Default value: null
   */
  virtualDataSourceOnExpand?: any;
}

export interface GridDataSourceSettingsDataField {
  /**
   * Sets the dataField name.
   * Default value: ""
   */
  name?: string;
  /**
   * Sets the dataField mapping path. For nested mapping, use '.'. Example: 'name.firstName'.
   * Default value: ""
   */
  map?: string;
  /**
   * Sets the dataField type.
   * Default value: string
   */
  dataType?: GridDataSourceSettingsDataFieldDataType;
}

/**Describes the grid's editing settings. */
export interface GridEditing {
  /**
   * Enables row header cells editing.
   * Default value: false
   */
  allowRowHeaderEdit?: boolean;
  /**
   * Enables column headers editing.
   * Default value: false
   */
  allowColumnHeaderEdit?: boolean;
  /**
   * Enables editing.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Enables batch editing. This allows editing multiple grid rows on the client side and sending them with a single server request.
   * Default value: false
   */
  batch?: boolean;
  /**
   * Determines the way editing is initiated.
   * Default value: click
   */
  action?: GridEditingAction;
  /**
   * Describes command keys.
   * Default value: [object Object]
   */
  commandKeys?: GridEditingCommandKeys;
  /**
   * Describes the grid's command bar settings. The command bar is a toolbar or statusbar with tools for saving and reverting edits.
   * Default value: [object Object]
   */
  commandBar?: GridEditingCommandBar;
  /**
   * Describes the grid's command column settings. The command column can be used to edit or delete a row.
   * Default value: [object Object]
   */
  commandColumn?: GridEditingCommandColumn;
  /**
   * Sets the grid's edit mode.
   * Default value: cell
   */
  mode?: GridEditingMode;
  /**
   * Describes the settings of the 'Add New Row' UI element which enables the quick adding of rows to the Grid with a single click.
   * Default value: [object Object]
   */
  addNewRow?: GridEditingAddNewRow;
  /**
   * Enables users to dynamically add new columns through the User Interface. When the add new column is visible, a '+' is displayed as a last column. Clicking it opens a dialog for adding new columns.
   * Default value: [object Object]
   */
  addNewColumn?: GridEditingAddNewColumn;
  /**
   * Describes dialog's editing settings.
   * Default value: [object Object]
   */
  dialog?: Dialog;
  /**
   * Describes add dialog's settings
   * Default value: [object Object]
   */
  addDialog?: Dialog;
  /**
   * Describes delete dialog's settings
   * Default value: [object Object]
   */
  deleteDialog?: Dialog;
}

/**Describes command keys. */
export interface GridEditingCommandKeys {
  /**
   * Describes the edit command key.
   * Default value: [object Object]
   */
  commandKeyEdit?: GridCommandKey;
  /**
   * Describes the cancel command key.
   * Default value: [object Object]
   */
  commandKeyCancel?: GridCommandKey;
  /**
   * Describes the update command key.
   * Default value: [object Object]
   */
  commandKeyUpdate?: GridCommandKey;
}

/**Describes the edit command key. */
export interface GridCommandKey {
  /**
   * Sets the name of the edit key command.
   * Default value: "commandKeyEditCommand"
   */
  command?: string;
  /**
   * Sets the key that invokes the edit command.
   * Default value: "F2"
   */
  key?: string;
}

/**Describes the grid's command bar settings. The command bar is a toolbar or statusbar with tools for saving and reverting edits. */
export interface GridEditingCommandBar {
  /**
   * Makes the command bar visible.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Sets the command bar's position.
   * Default value: near
   */
  position?: LayoutPosition;
  /**
   * Sets what is to be displayed in command bar buttons.
   * Default value: labelAndIcon
   */
  displayMode?: GridCommandDisplayMode;
  /**
   * Sets the command bar's data source.
   * Default value: [object Object]
   */
  dataSource?: GridEditingCommandBarDataSource;
}

/**Sets the command bar's data source. */
export interface GridEditingCommandBarDataSource {
  /**
   * Describes the settings of the command bar's button for adding rows.
   * Default value: [object Object]
   */
  commandBarAddRow?: GridCommand;
  /**
   * Describes the settings of the command bar's button for deleting rows.
   * Default value: [object Object]
   */
  commandBarDeleteRow?: GridCommand;
  /**
   * Describes the settings of the command bar's button for saving changes.
   * Default value: [object Object]
   */
  commandBarBatchSave?: GridCommand;
  /**
   * Describes the settings of the command bar's button for reverting changes.
   * Default value: [object Object]
   */
  commandBarBatchRevert?: GridCommand;
}

/**Describes the grid's command column settings. The command column can be used to edit or delete a row. */
export interface GridEditingCommandColumn {
  /**
   * Makes the command column visible.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Enables inline display of the command column.
   * Default value: false
   */
  inline?: boolean;
  /**
   * Sets the command column's position.
   * Default value: far
   */
  position?: Position;
  /**
   * Sets what is to be displayed in command column buttons.
   * Default value: icon
   */
  displayMode?: GridCommandDisplayMode;
  /**
   * Sets the command column's data source.
   * Default value: [object Object]
   */
  dataSource?: GridEditingCommandColumnDataSource;
  /**
   * Sets the width of the command column.
   * Default value: null
   */
  width?: number | null;
}

/**Sets the command column's data source. */
export interface GridEditingCommandColumnDataSource {
  /**
   * Describes the settings of the command column's button displayed in the column's header. By default, this Command opens a Menu with Column Chooser.
   * Default value: [object Object]
   */
  commandColumnMenu?: GridCommand;
  /**
   * Describes the settings of the command column's button for editing rows.
   * Default value: [object Object]
   */
  commandColumnEdit?: GridCommand;
  /**
   * Describes the settings of the command column's button for deleting rows.
   * Default value: [object Object]
   */
  commandColumnDelete?: GridCommand;
  /**
   * Describes the settings of the command column's button for updating rows.
   * Default value: [object Object]
   */
  commandColumnUpdate?: GridCommand;
  /**
   * Describes the settings of the command column's button for canceling edits.
   * Default value: [object Object]
   */
  commandColumnCancel?: GridCommand;
  /**
   * Describes the settings of the command column's row menu button.
   * Default value: [object Object]
   */
  commandColumnRowMenu?: GridCommand;
  /**
   * Describes the settings of the command column's custom button.
   * Default value: [object Object]
   */
  commandColumnCustom?: GridCommand;
}

/**Describes the settings of the 'Add New Row' UI element which enables the quick adding of rows to the Grid with a single click. */
export interface GridEditingAddNewRow {
  /**
   * Adds new row by clicking the Enter button, when the focused row is the last row.
   * Default value: false
   */
  autoCreate?: boolean;
  /**
   * Determines whether the newly added row enters automatically in edit mode, when added.
   * Default value: true
   */
  autoEdit?: boolean;
  /**
   * Sets the position of the 'Add New Row' UI element.
   * Default value: both
   */
  position?: LayoutPosition;
  /**
   * Sets or gets the display mode of the new row action. It could be either 'row' or 'button'.
   * Default value: row
   */
  displayMode?: GridEditingAddNewRowDisplayMode;
  /**
   * Makes the 'Add New Row' UI element visible.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Sets the label of the 'Add New Row' UI element.
   * Default value: ""
   */
  label?: string;
}

/**Enables users to dynamically add new columns through the User Interface. When the add new column is visible, a '+' is displayed as a last column. Clicking it opens a dialog for adding new columns. */
export interface GridEditingAddNewColumn {
  /**
   * Makes the 'Add New Row' UI element visible.
   * Default value: false
   */
  visible?: boolean;
}

/**Describes the grid's filtering settings. */
export interface GridFiltering {
  /**
   * Enables filtering.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * An array of filtering conditions to apply to the DataGrid. Each member of the filter array is an array with two members. The first one is the column dataField to apply the filter to. The second one is the filtering condition. Example: [['firstName', 'contains Andrew or contains Nancy'], ['quantity', '&lt;= 3 and &gt;= 8']]
   * Default value: 
   */
  filter?: any[];
  /**
   * Describes the filter row's settings.
   * Default value: [object Object]
   */
  filterRow?: GridFilteringFilterRow;
  /**
   * Describes the settings for the filter menu.
   * Default value: [object Object]
   */
  filterMenu?: GridFilteringFilterMenu;
  /**
   * (In Development)Describes the settings for the filter builder.
   * Default value: [object Object]
   */
  filterBuilder?: GridFilteringFilterBuilder;
}

/**Describes the filter row's settings. */
export interface GridFilteringFilterRow {
  /**
   * Makes the filter row visible.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Makes the filter row's menu visible.
   * Default value: false
   */
  menuVisible?: boolean;
  /**
   * Sets the way filtering through the filter row is applied.
   * Default value: auto
   */
  applyMode?: GridFilteringFilterRowApplyMode;
  /**
   * Sets the delay (in milliseconds) before applying filtering (when filtering.filterRow.applyMode is 'auto').
   * Default value: 300
   */
  autoApplyModeDelay?: number;
}

/**Describes the settings for the filter menu. */
export interface GridFilteringFilterMenu {
  /**
   * Sets the visibility of the filter menu.
   * Default value: true
   */
  visible?: boolean;
  /**
   * Sets the button text of the filter menu.
   * Default value: cancel,clear,filter
   */
  buttons?: string[];
  /**
   * Sets the filter menu mode.
   * Default value: default
   */
  mode?: GridFilteringFilterMenuMode;
  /**
   * Sets the filter menu datasource.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Sets the width of the filter menu.
   * Default value: 250
   */
  width?: number;
  /**
   * Sets the height of the filter menu.
   * Default value: 200
   */
  height?: number;
}

/**(In Development)Describes the settings for the filter builder. */
export interface GridFilteringFilterBuilder {
  /**
   * Sets the visibility of the filter builder.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Sets the height of the filter builder.
   * Default value: null
   */
  height?: number | null;
}

/**Describes the grid's grouping settings. */
export interface GridGrouping {
  /**
   * Enables grouping.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Enables collapsing of groups.
   * Default value: false
   */
  allowCollapse?: boolean;
  /**
   * Automatically expands all groups.
   * Default value: false
   */
  autoExpandAll?: boolean;
  /**
   * Sets the group expand mode.
   * Default value: buttonClick
   */
  expandMode?: GridGroupingExpandMode;
  /**
   * Sets the group render mode. 'basic' mode renders the group headers without taking into account the indent, groupRowHeight and column label properties. 'compact' mode is the same as basic, but also renders the column labels in the group headers. The default mode is 'advanced', which adds indents to groups that depend on the group level.
   * Default value: advanced
   */
  renderMode?: GridGroupingRenderMode;
  /**
   * Sets the group row height.
   * Default value: 50
   */
  groupRowHeight?: string | number;
  /**
   * Sets the indent of the group toggle button.
   * Default value: 16
   */
  toggleButtonIndent?: number;
  /**
   * Sets the indent of the group.
   * Default value: 16
   */
  groupIndent?: number;
  /**
   * Describes the group bar's settings.
   * Default value: [object Object]
   */
  groupBar?: GridGroupingGroupBar;
  /**
   * Describes the group summary row's settings.
   * Default value: [object Object]
   */
  summaryRow?: GridGroupingSummaryRow;
}

/**Describes the group bar's settings. */
export interface GridGroupingGroupBar {
  /**
   * Makes the group bar visible.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Enables column drag and drop.
   * Default value: false
   */
  allowColumnDragDrop?: boolean;
  /**
   * Enables column close buttons.
   * Default value: true
   */
  allowColumnCloseButtons?: boolean;
}

/**Describes the group summary row's settings. */
export interface GridGroupingSummaryRow {
  /**
   * Enables inline display of the group summary row.
   * Default value: true
   */
  inline?: boolean;
  /**
   * Makes the group summary row visible.
   * Default value: true
   */
  visible?: boolean;
}

/**Describes the paging settings. */
export interface GridPaging {
  /**
   * Enables pagination.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Describes the spinner pagination settings.
   * Default value: [object Object]
   */
  spinner?: GridPagingSpinner;
  /**
   * Sets the number of rows per page.
   * Default value: 10
   */
  pageSize?: number;
  /**
   * Sets the start page.
   * Default value: 0
   */
  pageIndex?: number;
}

/**Describes the spinner pagination settings. */
export interface GridPagingSpinner {
  /**
   * Enables spinner pagination.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Sets the step of page
   * Default value: 1
   */
  step?: number;
}

/**Describes the pager settings. */
export interface GridPager {
  /**
   * Sets the ellipsis display mode.
   * Default value: both
   */
  autoEllipsis?: GridPagerAutoEllipsis;
  /**
   * Sets the position of pager.
   * Default value: far
   */
  position?: LayoutPosition;
  /**
   * Sets a template for the pager.
   * Default value: 
   */
  template?: string | HTMLTemplateElement;
  /**
   * Describes the settings for the 'rows per page' option.
   * Default value: [object Object]
   */
  pageSizeSelector?: GridPagerPageSizeSelector;
  /**
   * Describes the summary settings.
   * Default value: [object Object]
   */
  summary?: GridPagerSummary;
  /**
   * Describes the navigation buttons settings.
   * Default value: [object Object]
   */
  navigationButtons?: GridPagerNavigationButtons;
  /**
   * Describes the settings about navigation input option.
   * Default value: [object Object]
   */
  navigationInput?: GridPagerNavigationInput;
  /**
   * Describes the settings for the numeric page buttons.
   * Default value: [object Object]
   */
  pageIndexSelectors?: GridPagerPageIndexSelectors;
  /**
   * Sets the visibility of pager.
   * Default value: false
   */
  visible?: boolean;
}

/**Describes the settings for the 'rows per page' option. */
export interface GridPagerPageSizeSelector {
  /**
   * Sets the visibility of the 'rows per page' option.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Sets the count of the 'rows per page' option.
   * Default value: 10,20,50
   */
  dataSource?: any;
  /**
   * Sets the position of the 'rows per page' option.
   * Default value: far
   */
  position?: Position;
}

/**Describes the summary settings. */
export interface GridPagerSummary {
  /**
   * Sets the position of the summary.
   * Default value: far
   */
  position?: Position;
  /**
   * Sets the visibility of the summary.
   * Default value: false
   */
  visible?: boolean;
}

/**Describes the navigation buttons settings. */
export interface GridPagerNavigationButtons {
  /**
   * Sets the navigation buttons position.
   * Default value: both
   */
  position?: LayoutPosition;
  /**
   * Describes the settings about buttons 'previous page' and 'next page'.
   * Default value: [object Object]
   */
  prevNextButtons?: GridPagerNavigationButtonsPrevNextButtons;
  /**
   * Describes the settings about buttons 'first page' and 'last page'.
   * Default value: [object Object]
   */
  firstLastButtons?: GridPagerNavigationButtonsFirstLastButtons;
  /**
   * Describes the labels settings for navigation buttons.
   * Default value: [object Object]
   */
  labels?: GridPagerNavigationButtonsLabels;
}

/**Describes the settings about buttons 'previous page' and 'next page'. */
export interface GridPagerNavigationButtonsPrevNextButtons {
  /**
   * Sets the visibility of 'previous page' and 'next page' buttons.
   * Default value: true
   */
  visible?: boolean;
}

/**Describes the settings about buttons 'first page' and 'last page'. */
export interface GridPagerNavigationButtonsFirstLastButtons {
  /**
   * Sets the visibility of 'first page' and 'last page' buttons.
   * Default value: true
   */
  visible?: boolean;
}

/**Describes the labels settings for navigation buttons. */
export interface GridPagerNavigationButtonsLabels {
  /**
   * Sets the visibility of labels for navigation buttons.
   * Default value: false
   */
  visible?: boolean;
}

/**Describes the settings about navigation input option. */
export interface GridPagerNavigationInput {
  /**
   * Sets the position of navigation input option.
   * Default value: far
   */
  position?: Position;
  /**
   * Sets the visibility of navigation input option.
   * Default value: false
   */
  visible?: boolean;
}

/**Describes the settings for the numeric page buttons. */
export interface GridPagerPageIndexSelectors {
  /**
   * Sets the visibility of numeric page buttons.
   * Default value: true
   */
  visible?: boolean;
  /**
   * Sets the number of visible page buttons.
   * Default value: 10
   */
  dataSource?: any;
}

/**Sets the row details. */
export interface GridRowDetail {
  /**
   * Enables the row details.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Sets the height of the row details.
   * Default value: 200
   */
  height?: number;
  /**
   * Sets the position of the Column which allows you to dynamically expand/collapse the row details.
   * Default value: near
   */
  position?: Position;
  /**
   * Sets the template of the row details.
   * Default value: 
   */
  template?: any;
  /**
   * Sets the visibility of the Column which allows you to dynamically expand/collapse the row details.
   * Default value: true
   */
  visible?: boolean;
  /**
   * Sets the row details dialog. When enabled, row details will be displayed in a Dialog.
   * Default value: [object Object]
   */
  dialog?: Dialog;
}

/**Describes the column header settings. */
export interface GridColumnHeader {
  /**
   * Sets the column header visibility.
   * Default value: true
   */
  visible?: boolean;
}

/**Describes the summary row settings. */
export interface GridSummaryRow {
  /**
   * Sets the summary row visibility.
   * Default value: false
   */
  visible?: boolean;
}

/**Describes the settings for the group header. */
export interface GridGroupHeader {
  /**
   * Sets the visibility of the group header.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Sets a template for the group header.
   * Default value: 
   */
  template?: string | HTMLTemplateElement;
}

/**Describes the header settings of the grid. */
export interface GridHeader {
  /**
   * Sets the header visibility.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Sets a template for the header.
   * Default value: 
   */
  template?: string | HTMLTemplateElement;
  /**
   * This callback function can be used for customization of the Header toolbar. The Toolbar HTML Element is passed as an argument.
   * Default value: null
   */
  onInit?: any;
  /**
   * Determines the buttons displayed in the Grid header. 'columns' displays a button opening the columns chooser panel. 'filter'  displays a button opening the filtering panel.  'group' displays a button opening the grouping panel. 'sort'  displays a button opening the sorting panel. 'format'  displays a button opening the conditional formatting panel. 'search' displays a button opening the search panel.
   * Default value: [ "columns", "filter", "group", "sort", "format", "search" ]
   */
  buttons?: string[];
}

/**Describes the footer settings of the grid. */
export interface GridFooter {
  /**
   * Sets the footer visibility.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Sets a template for the footer.
   * Default value: 
   */
  template?: string | HTMLTemplateElement;
}

export interface GridRow {
  /**
   * Sets or gets the row can be expanded or collapsed.
   * Default value: true
   */
  allowToggle?: boolean;
  /**
   * Sets or gets the row can be resized.
   * Default value: true
   */
  allowResize?: boolean;
  /**
   * Sets or gets the row can be selected.
   * Default value: true
   */
  allowSelect?: boolean | null;
  /**
   * Sets or gets the row can be checked. This property is used when the Grid is in Tree Grid or Grouped mode.
   * Default value: true
   */
  allowCheck?: boolean;
  /**
   * Sets or gets the row's check state. This property is used when the Grid is in Tree Grid or Grouped mode.
   * Default value: true
   */
  checked?: boolean;
  /**
   * Gets the Row's Cells array.
   * Default value: []
   */
  cells?: GridCell[];
  /**
   * Gets the row's children array of GridRow. This property is associated to the TreeGrid and Groupng mode of the Grid.
   * Default value: null
   */
  children?: any;
  /**
   * Gets the row's bound data.
   * Default value: null
   */
  data?: any;
  /**
   * Sets or gets the row's detail height.
   * Default value: 200
   */
  detailHeight?: number;
  /**
   * Sets or gets the row's detail template.
   * Default value: null
   */
  detailTemplate?: string | HTMLTemplateElement | null;
  /**
   * Gets the HTML Element. The property returns null when the Row is not in the View.
   * Default value: null
   */
  element?: any;
  /**
   * Sets or gets the row is expanded. This property is used when the Grid is in Tree Grid or Grouped mode.
   * Default value: false
   */
  expanded?: boolean;
  /**
   * Gets the row's header element.
   * Default value: null
   */
  header?: HTMLElement;
  /**
   * Sets or gets the row's height.
   * Default value: 30
   */
  height?: number;
  /**
   * Gets the row's bound index.
   * Default value: -1
   */
  index?: number;
  /**
   * Gets the row's bound id.
   * Default value: 
   */
  id?: string | number;
  /**
   * Gets whether the row is leaf row in TreeGrid or Grouping mode.
   * Default value: false
   */
  leaf?: boolean;
  /**
   * Sets or gets the row's maximum height.
   * Default value: 100
   */
  maxHeight?: number;
  /**
   * Sets or gets the row's minimum height.
   * Default value: 30
   */
  minHeight?: number;
  /**
   * Sets or gets the Freeze mode. Accepts: 'near', 'far', true and false. Freezes/Pins the row to top(near) or bottom(far).
   * Default value: false
   */
  freeze?: Position;
  /**
   * Sets or gets whether the row is selected.
   * Default value: false
   */
  selected?: boolean;
  /**
   * Sets or gets whether the row detail is displayed.
   * Default value: false
   */
  showDetail?: boolean;
  /**
   * "Method which applies a style object to all cells. Expects a JSON object with the following allowed values: 'background', 'color', 'fontSize', 'fontFamily', 'fontWeight', 'fontStyle', 'textDecoration'
   * Default value: undefined
   */
  setStyle?: {(value: any): void};
  /**
   * Sets or gets whether the row is visible. Set the property to 'false' to hide the row.
   * Default value: true
   */
  visible?: boolean;
  /**
   * Gets the visible index of the row.
   * Default value: -1
   */
  visibleIndex?: number;
  /**
   * Methods which gets a cell, which is inside a row. A dataField string is a required argument, when you call this method.
   * Default value: -1
   */
  getCell?: any;
}

export interface GridCell {
  /**
   * "Sets or gets the horizontal alignment. Allowed values are: 'left', 'center' or 'right'".
   * Default value: "'left'"
   */
  align?: string;
  /**
   * Gets the column associated to the cell.
   * Default value: null
   */
  column?: any;
  /**
   * Sets or gets the cell's text color.
   * Default value: "''"
   */
  color?: string;
  /**
   * Sets or gets the cell's background.
   * Default value: "''"
   */
  background?: string;
  /**
   * Sets or gets the cell's borderColor.
   * Default value: "''"
   */
  borderColor?: string;
  /**
   * Sets or gets the cell's colSpan.
   * Default value: 1
   */
  colSpan?: number;
  /**
   * Sets or gets the cell's editor.
   * Default value: null
   */
  editor?: any;
  /**
   * Gets the HTMLElement associated to the cell.
   * Default value: null
   */
  element?: HTMLElement;
  /**
   * Gets a formatted number or Date.
   * Default value: null
   */
  getFormattedValue?: {(value: any, type: string): void};
  /**
   * Gets whether the cell is in edit mode.
   * Default value: false
   */
  isEditing?: boolean;
  /**
   * Gets the old value of the cell
   * Default value: null
   */
  oldValue?: any;
  /**
   * Sets or gets the cell's fontSize
   * Default value: "''"
   */
  fontSize?: string;
  /**
   * Sets or gets the cell's fontWeight
   * Default value: "''"
   */
  fontWeight?: string;
  /**
   * Sets or gets the cell's fontFamily
   * Default value: "''"
   */
  fontFamily?: string;
  /**
   * Sets or gets the cell's fontStyle
   * Default value: "''"
   */
  fontStyle?: string;
  /**
   * "Sets or gets whether the cell can be edited.".
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Gets the row object associated to the cell.
   * Default value: null
   */
  row?: any;
  /**
   * Sets or gets the row span.
   * Default value: 1
   */
  rowSpan?: number;
  /**
   * Sets or gets whether the cell is selected.
   * Default value: false
   */
  selected?: boolean;
  /**
   * "Each property is an object{name: string, value: any}. This function allows you to update multiple properties with single refresh.".
   * Default value: 
   */
  setProperties?: {(properties: {name: string, value: string}[]): void};
  /**
   * "Allowed values are: 'top', 'middle' or 'bottom'".
   * Default value: ""
   */
  tooltip?: string;
  /**
   * The cell's value
   * Default value: null
   */
  value?: any;
  /**
   * "Sets or gets the vertical alignment. Allowed values are: 'top', 'center' or 'bottom'".
   * Default value: "'center'"
   */
  verticalAlign?: string;
  /**
   * "Method which applies a cell style object. Expects a JSON object with the following possible values: 'background', 'color', 'fontSize', 'fontFamily', 'fontWeight', 'fontStyle', 'textDecoration'
   * Default value: undefined
   */
  setStyle?: {(value: any): void};
}

/**Describes the selection settings. */
export interface GridSelection {
  /**
   * Enables the selection option.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Sets or gets whether selection by clicking on a Row header is allowed.
   * Default value: false
   */
  allowRowHeaderSelection?: boolean;
  /**
   * Sets or gets whether selection by clicking on a Column header is allowed.
   * Default value: false
   */
  allowColumnHeaderSelection?: boolean;
  /**
   * Sets or gets whether selection by clicking on a Row is allowed.
   * Default value: true
   */
  allowRowSelection?: boolean;
  /**
   * Sets or gets whether selection by clicking on a cell is allowed.
   * Default value: false
   */
  allowCellSelection?: boolean;
  /**
   * Sets or gets whether selection by dragging(like in Excel) is allowed.
   * Default value: true
   */
  allowDragSelection?: boolean;
  /**
   * Sets or gets whether selection by dragging will automatically scroll the Grid view.
   * Default value: true
   */
  allowDragSelectionAutoScroll?: boolean;
  /**
   * Sets or gets whether the Cells selection bottom-right corner selection 'Drag Handle' (litte square like in Excel) is displayed. That handle allows you to resize the selection horizontally or vertically
   * Default value: true
   */
  allowCellDragSelectionHandle?: boolean;
  /**
   * Sets or gets whether the Cells selection can be dragged and dropped. Drag happens when the cursor is moved to the bottom of the cells selection. The cursor is changed to a drag cursor. Press the button and hold and move the selection. By default the dragged cell values are copied on drop.
   * Default value: true
   */
  allowCellDragDropSelectionHandle?: boolean;
  /**
   * Sets or gets whether the Cells selection will be auto-filled with values on drop when dragging through the 'Drag Handle'.
   * Default value: true
   */
  allowCellDragSelectionAutoFill?: boolean;
  /**
   * Sets or gets whether the default browser's text selection is enabled.
   * Default value: false
   */
  defaultSelection?: boolean;
  /**
   * Sets or gets whether the selection allows you to select 'one', 'many' or a variation of 'many' called 'extended'. 'one' allows you to have only single cell or row selected. 'many' 
   * Default value: many
   */
  mode?: GridSelectionMode;
  /**
   * Sets or gets whether the selection happens on 'click' or 'doubleClick'. 'none' means that selection can happen only through API.
   * Default value: click
   */
  action?: GridSelectionAction;
  /**
   * 
   * Default value: [object Object]
   */
  checkBoxes?: GridSelectionCheckBoxes;
  /**
   * 
   * Default value: ""
   */
  selected?: string;
}

export interface GridSelectionCheckBoxes {
  /**
   * Sets or gets whether the checkboxes are automatically displayed only when the mouse is over the Grid. When false, checkboses are always displayed
   * Default value: false
   */
  autoShow?: boolean;
  /**
   * Sets or gets whether the checkboxes selection is enabled. In that mode a new column with checkboxes is displayed.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Sets or gets whether the selection happens on 'click' or 'doubleClick'. 'none' means that selection can happen only through API.
   * Default value: click
   */
  action?: GridSelectionAction;
  /**
   * Sets or gets whether the checkbox selection selects all rows in the current page or all rows. The 'none' setting disables the header checkbox.
   * Default value: page
   */
  selectAllMode?: GridSelectionCheckBoxesSelectAllMode;
  /**
   * Sets or gets whether the position of the checkbox selection column.
   * Default value: near
   */
  position?: Position;
}

/**Describes sorting settings. */
export interface GridSorting {
  /**
   * Enables sorting.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Sets the sort columns to be sorted.
   * Default value: 
   */
  sort?: string[];
  /**
   * Sets the count of allowed sorting columns. When the property value is set to 'many', users can sort data by multiple columns.
   * Default value: one
   */
  mode?: GridSortingMode;
  /**
   * Enables switching between the three sort states: ascending, descending and not sorted.
   * Default value: true
   */
  sortToggleThreeStates?: boolean;
}

declare global {
    interface Document {
        createElement(tagName: "smart-grid"): Grid;
        querySelector(selectors: "smart-grid"): Grid | null;
        querySelectorAll(selectors: "smart-grid"): NodeListOf<Grid>;
        getElementsByTagName(qualifiedName: "smart-grid"): HTMLCollectionOf<Grid>;
        getElementsByName(elementName: "smart-grid"): NodeListOf<Grid>;
    }
}

/**Generates labels as 'numbers' or 'letters'. This property affects the rendering of the row header. */
export declare type GridAppearanceAutoGenerateRowLabelMode = 'number' | 'letter';
/**Generates labels as 'numbers' or 'letters.  This property affects the rendering of the column header. */
export declare type GridAppearanceAutoGenerateColumnLabelMode = 'number' | 'letter';
/**Sets the row resize mode. split resize mode 'grows' or 'shrinks' the resize element's size and 'shrinks' or 'grows' the next sibling element's size. growAndShrink resize mode 'grows' or 'shrinks' the resize element's size */
export declare type GridResizeMode = 'none' | 'split' | 'growAndShrink';
/**Sets or gets whether the copy-pasted values will be auto-filled by using automatic pattern detection. This is used in the Drag&Drop Multiple Cells selection. none does nothing. copy just copies the cells. 'fillSeries' detects and automatically fills the values. For example, if the selection has '1, 2' and the possible positions are more, the pasted values would be '1, 2, 3, 4, etc. */
export declare type GridClipboardAutoFillMode = 'none' | 'copy' | 'fillSeries';
/**Sets the align. */
export declare type HorizontalAlignment = 'left' | 'center' | 'right';
/**Sets the vertical align. */
export declare type VerticalAlignment = 'top' | 'center' | 'bottom';
/**Sets or gets whether the position of the checkbox selection column. */
export declare type Position = 'near' | 'far';
/**Sets or gets the filter menu mode of the column. In 'basic' mode, a single input is displayed in the filter menu. In 'default' mode, two input options are available for more precise filtering. In 'excel' mode, checked list with unique values is displayed. */
export declare type GridColumnFilterMenuMode = 'basic' | 'default' | 'excel';
/**Sets or gets the sort order of the column. Accepts: 'asc', 'desc' and null. */
export declare type GridColumnSortOrder = 'asc' | 'desc' | null;
/**The formatting condition. */
export declare type GridConditionalFormattingCondition = 'between' | 'equal' | 'greaterThan' | 'lessThan' | 'notEqual';
/**Sets the page orientation, when exporting to PDF. */
export declare type GridDataExportPageOrientation = 'landscape' | 'portrait';
/**Sets or gets the XML binding root. */
export declare type GridDataSourceSettingsSanitizeHTML = 'all' | 'blackList' | 'none';
/**Sets the dataField type. */
export declare type GridDataSourceSettingsDataFieldDataType = 'string' | 'date' | 'boolean' | 'number' | 'array' | 'any';
/**Sets or gets whether the data source type. */
export declare type GridDataSourceSettingsDataSourceType = 'array' | 'json' | 'xml' | 'csv' | 'tsv';
/**Determines the way editing is initiated. */
export declare type GridEditingAction = 'none' | 'click' | 'doubleClick';
/**Sets the navigation buttons position. */
export declare type LayoutPosition = 'near' | 'far' | 'both';
/**Sets what is to be displayed in command column buttons. */
export declare type GridCommandDisplayMode = 'label' | 'icon' | 'labelAndIcon';
/**Sets the grid's edit mode. */
export declare type GridEditingMode = 'cell' | 'row';
/**Sets or gets the display mode of the new row action. It could be either 'row' or 'button'. */
export declare type GridEditingAddNewRowDisplayMode = 'row' | 'button';
/**Sets the way filtering through the filter row is applied. */
export declare type GridFilteringFilterRowApplyMode = 'auto' | 'click';
/**Sets the filter menu mode. */
export declare type GridFilteringFilterMenuMode = 'default' | 'excel';
/**Sets the group expand mode. */
export declare type GridGroupingExpandMode = 'buttonClick' | 'rowClick';
/**Sets the group render mode. 'basic' mode renders the group headers without taking into account the indent, groupRowHeight and column label properties. 'compact' mode is the same as basic, but also renders the column labels in the group headers. The default mode is 'advanced', which adds indents to groups that depend on the group level. */
export declare type GridGroupingRenderMode = 'basic' | 'compact' | 'advanced';
/**Sets the ellipsis display mode. */
export declare type GridPagerAutoEllipsis = 'none' | 'before' | 'after' | 'both';
/**Sets the scroll mode settings. */
export declare type Scrolling = 'physical' | 'virtual' | 'infinite' | 'deferred';
/**Sets or gets whether the selection allows you to select 'one', 'many' or a variation of 'many' called 'extended'. 'one' allows you to have only single cell or row selected. 'many'  */
export declare type GridSelectionMode = 'one' | 'many' | 'extended';
/**Sets or gets whether the selection happens on 'click' or 'doubleClick'. 'none' means that selection can happen only through API. */
export declare type GridSelectionAction = 'none' | 'click' | 'doubleClick';
/**Sets or gets whether the checkbox selection selects all rows in the current page or all rows. The 'none' setting disables the header checkbox. */
export declare type GridSelectionCheckBoxesSelectAllMode = 'none' | 'page' | 'all';
/**Sets the count of allowed sorting columns. When the property value is set to 'many', users can sort data by multiple columns. */
export declare type GridSortingMode = 'one' | 'many';
