import  {BaseElement, Animation} from "./smart.element"

export interface TableProperties {
  /**
   * Controls whether the application automatically restores its previous state from the browser's localStorage. When enabled, it retrieves saved settings such as column configurations, expanded or selected rows, active filters, groupings, and the sort order of columns. The specific state information that is loaded depends on the options defined in the stateSettings property.
   * Default value: false
   */
  autoLoadState?: boolean;
  /**
   * Controls whether the component automatically saves its current state to the browser’s localStorage. When enabled, data such as column configurations, expanded row states, selected rows, applied filters, grouping options, and sorted columns are persistently stored. The specific state information saved depends on the options set in the stateSettings property. This allows users’ table settings to be retained and restored across browser sessions.
   * Default value: false
   */
  autoSaveState?: boolean;
  /**
   * Defines or retrieves an array of column groups that establish the hierarchical structure of the column headers. Note: When a column header hierarchy is configured using these column groups, features such as column resizing and auto-sizing are disabled and will not be available for those columns.
   * Default value: null
   */
  columnGroups?: TableColumnGroup[];
  /**
   * Specifies or retrieves the minimum width for columns when columnSizeMode is set to 'auto' or when columns are being resized by the user. This property determines the smallest allowable width for columns during these operations. Note: This setting is ignored for columns that have their width explicitly defined through code.
   * Default value: 50px
   */
  columnMinWidth?: string | number;
  /**
   * Determines whether users are allowed to reorder columns by dragging them. When enabled, columns can be rearranged by the user; when disabled, the column order is fixed. This property can be set to enable or disable column reordering, or queried to check the current state.
   * Default value: false
   */
  columnReorder?: boolean;
  /**
   * Enables or disables the ability for users to resize table columns. When this option is enabled, users can manually adjust the width of each column. Note: The actual column sizing is still governed by the standard HTML table behavior for table-layout: fixed, as smart-table is built upon this layout model. This means columns have a fixed width and resizing may affect the overall table width proportionally, consistent with native HTML tables using table-layout: fixed.
   * Default value: false
   */
  columnResize?: boolean;
  /**
   * This property controls how the table adjusts its column widths when columnSizeMode is set to 'default'. - When columnResizeNormalize is 'false', and every table column has a defined width, the Table will insert an extra '' element. This additional header cell ensures that the customized column widths are preserved, preventing the browser from automatically resizing your columns and thereby maintaining the exact width configuration you specified.- When columnResizeNormalize is 'true', the Table will not add an extra ''. Instead, it distributes the available space among the columns, causing them to expand or contract as needed—similar to the default behavior of standard HTML tables. This results in a more fluid, responsive layout, where any unallocated space is automatically filled.This property is useful for toggling between a strictly controlled column layout and one that behaves like a regular HTML table when sizing columns.
   * Default value: false
   */
  columnResizeNormalize?: boolean;
  /**
   * Determines whether a visual feedback indicator is shown during column resizing, displaying the new column width in pixels as the user adjusts the column. This property can be set to enable or disable the display of the width feedback overlay, or queried to check its current state.
   * Default value: false
   */
  columnResizeFeedback?: boolean;
  /**
   * Provides detailed definitions and configuration options for the properties of each column, including attributes such as data type, header label, visibility, sorting, filtering, and formatting. This section outlines how individual columns should be displayed and behave within the table or data grid.
   * Default value: null
   */
  columns?: TableColumn[];
  /**
   * Defines or retrieves the rules and settings for conditional formatting applied to the table's cells, allowing specific formatting (such as colors, styles, or icons) to be applied dynamically based on the cell values or conditions.
   * Default value: null
   */
  conditionalFormatting?: TableConditionalFormatting[];
  /**
   * Defines the column menu functionality for the grid. When this property is set to true, a menu icon appears in the header of each column. Clicking this icon opens a column menu, providing users with options to sort the data, apply filters, and toggle the visibility of columns. You can set this property to enable or disable the column menu, or retrieve its current state.
   * Default value: false
   */
  columnMenu?: boolean;
  /**
   * ---Determines how the table columns are sized, supporting two distinct modes:- ''auto' Mode:'    Columns are automatically sized based on their content and the specified columnMinWidth value. If the table does not have enough horizontal space to display all content, excess text is truncated with ellipses. Manually specified static column widths (set by the user) will still be honored in this mode.- ''default' Mode:'    Columns follow the standard HTML table's table-layout: fixed behavior. In this mode, column widths do not adapt to content; instead, each column's width is determined either by a fixed value (set via the column’s width property) or distributed evenly if no width is specified.Use this property to control whether column widths are calculated automatically based on content or determined by fixed sizing rules.
   * Default value: default
   */
  columnSizeMode?: TableColumnSizeMode | string;
  /**
   * Controls the visibility of the "Conditional Formatting" button in the Table component’s header toolbar. When enabled, this button appears in the toolbar and allows users to open a dialog where they can configure and apply conditional formatting rules to the table's data. This property can be used to programmatically show or hide the button, or to check if it is currently displayed.
   * Default value: false
   */
  conditionalFormattingButton?: boolean;
  /**
   * This property specifies the interval, in milliseconds, that must elapse during vertical scrolling before the table data is refreshed or updated. Adjusting this setting can help control the responsiveness and performance of data loading while scrolling through the table.
   * Default value: 1
   */
  deferredScrollDelay?: number;
  /**
   * When the dataSource property is bound directly to a plain array—rather than to an instance of JQX.DataAdapter—this property specifies the name of the field within each array element that should be used as the unique row identifier. You can use it to set or retrieve the key that maps each item's row id, allowing the component to correctly reference, update, and manage rows by their unique ids.
   * Default value: "null"
   */
  dataRowId?: string;
  /**
   * Specifies the data source for the Table component. This property accepts either a standard JavaScript Array or a DataAdapter instance. Using an Array allows you to provide the table data directly, while a DataAdapter offers advanced data management features such as data binding, sorting, filtering, and integration with remote data sources. For detailed information about the DataAdapter and its capabilities, visit: https://www.htmlelements.com/docs/data-adapter/
   * Default value: 
   */
  dataSource?: any;
  /**
   * Configures the grid's data source settings when the dataSource property is assigned either a local data array or a remote URL. This allows the grid to properly retrieve, bind, and display data from the specified source, whether it is provided directly as an array or fetched asynchronously from a web endpoint.
   * Default value: [object Object]
   */
  dataSourceSettings?: TableDataSourceSettings;
  /**
   * A callback function that allows you to modify or transform each record in the initial dataSource. If provided, this function is invoked once for every record in the dataSource, receiving the individual record as its argument. The function should return the transformed record, which will be included in the final processed data set.
   * Default value: null
   */
  dataTransform?: { (record: any): void };
  /**
   * Prevents users from interacting with the element, such as clicking, selecting, typing, or triggering any events. The element will appear disabled and will not respond to any user input.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines whether the Table is editable. When set to true, users can modify the contents of the Table; when false, the Table is read-only and cannot be edited. This property can be used to both retrieve the current editable state and update it as needed.
   * Default value: false
   */
  editing?: boolean;
  /**
   * Enables or retrieves the current state of edit mode, determining whether the component is in an editable state. When set to true, users can modify the content; when set to false, the component is read-only.
   * Default value: cell
   */
  editMode?: TableEditMode | string;
  /**
   * Determines whether row hierarchies are automatically expanded when they are initially created. When this property is enabled, grouped rows or tree-structured rows in the Table will be expanded by default, allowing users to see all subgrouped data without requiring manual expansion. Use this property if you want hierarchical groups in the Table to appear open automatically when the Table is grouped or when using tree mode.
   * Default value: false
   */
  expandHierarchy?: boolean;
  /**
   * Controls whether filtering is enabled for the Table. When filtering is enabled (the default), each string and numeric column displays a filter input in the header, allowing users to filter table rows based on column values. Setting this property to false disables all filter inputs and prevents users from filtering the table data.
   * Default value: false
   */
  filtering?: boolean;
  /**
   * Determines whether the Table supports data filtering through a dedicated filter row. When enabled, users can input criteria directly into this row to dynamically filter and display matching rows in the Table. This property can be set to enable or disable the filter row feature, and can also be queried to check its current state.
   * Default value: false
   */
  filterRow?: boolean;
  /**
   * Gets or sets the filter operator for the table, determining how multiple column filters are combined. If set to 'and', all filter conditions must be met for a row to be displayed (e.g., cellValue1 && cellValue2). If set to 'or', a row is shown if it meets any one of the filter conditions (e.g., cellValue1 || cellValue2). This property controls whether filters are applied using logical 'AND' or 'OR' operations.
   * Default value: and
   */
  filterOperator?: boolean;
  /**
   * Gets or sets the ID of an HTML  element to be used as a custom filter template. This allows you to define and apply your own filter UI by referencing the specified template’s ID.
   * Default value: "null"
   */
  filterTemplate?: string;
  /**
   * Specifies or retrieves the ID of an HTML '' element whose content will be used to render the footer row(s) of the component. This allows you to define custom footer layouts using template markup and apply them dynamically by referencing the template's ID.
   * Default value: "null"
   */
  footerRow?: string;
  /**
   * Enables or disables support for Excel-style formulas as cell values. When enabled, users can enter formulas starting with the '=' sign (e.g., "=SUM(A1:A3)") directly into cells. These formulas are automatically recalculated whenever referenced cell values change. Note: This functionality requires the third-party, free 'formula-parser' plugin; be sure to include the 'formula-parser.min.js' file as a dependency in your project.
   * Default value: false
   */
  formulas?: boolean;
  /**
   * Defines or retrieves whether the Table's footer remains fixed (sticky/frozen) at the bottom of the Table when scrolling vertically, ensuring it stays visible regardless of the Table's scroll position.
   * Default value: false
   */
  freezeFooter?: boolean;
  /**
   * Sets or retrieves whether the table’s column header remains fixed (sticky) at the top of the viewport while scrolling through the table content. When enabled, the column header stays visible, improving readability for tables with many rows.
   * Default value: false
   */
  freezeHeader?: boolean;
  /**
   * Configures or retrieves the current state of table grouping functionality. When enabled, rows in the table can be organized into groups based on specified criteria, allowing for better data categorization and easier analysis.
   * Default value: false
   */
  grouping?: boolean;
  /**
   * A callback function that allows you to customize the contents of a grouping header row. You can update the 'label' property to change the displayed grouping value. Additionally, by modifying the 'template' property, you have full control over the rendered output, enabling you to redefine the entire content of the header row—including the group label, associated column information, and the item count. Use this function to tailor the appearance and structure of grouping headers to your application's specific needs.
   * Default value: null
   */
  groupFormatFunction?: { (settings: { value: any, row: string | number, column: string, template?: any }): void };
  /**
   * Enhances customization of the element's header. This property accepts several types of values:- The 'id' of an 'HTMLElement' or 'HTMLTemplateElement', which will be used to render the header.- A function, which receives the header element of the table as its sole argument. Use this function to dynamically generate or modify the header content.- A string containing HTML markup, which will be parsed and inserted as the header.This flexibility allows you to define static, template-based, or fully dynamic headers for the element according to your application's needs.
   * Default value: null
   */
  headerRow?: string | HTMLElement | Function;
  /**
   * Controls whether users can navigate through the table using keyboard inputs. When enabled, users can move between table cells, rows, or columns using keys such as Tab, Arrow keys, or other navigation shortcuts. This setting can be accessed to check the current state (enabled or disabled) or modified to turn keyboard navigation on or off for the table.
   * Default value: false
   */
  keyboardNavigation?: boolean;
  /**
   * Controls whether checkboxes are visible in the selection column. When set to true, checkboxes will be displayed, allowing users to select multiple items. When set to false, the selection column will not display checkboxes. This property can be used to programmatically toggle the visibility of checkboxes and can also be read to determine the current display state.
   * Default value: false
   */
  hideSelectionColumn?: boolean;
  /**
   * Defines how the column settings are handled during loading, whether automatically with autoLoadState or manually with loadState. This option is relevant only if the stateSettings array includes 'columns', ensuring that column-specific state (such as order, visibility, or width) is properly managed during the state load process.
   * Default value: implementationOnly
   */
  loadColumnStateBehavior?: TableLoadColumnStateBehavior | string;
  /**
   * Defines or retrieves the unlockKey property, a unique value required to activate or authorize access to the product's features. This key is used to verify that the user is permitted to unlock and use the product.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the currently selected language code (e.g., "en", "fr", "es") for localization purposes. This property works together with the messages property to determine which set of localized messages should be displayed or used by the application. Adjusting this property changes which language mappings from messages are active.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Defines or retrieves an object containing key-value pairs of strings used within the element, allowing for customization and localization of displayed text. This property works together with the locale property to present the appropriate language and regional terms based on the user's locale preferences.
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
   * A callback function that is invoked every time a table cell is rendered. This function receives relevant cell data and context as arguments, allowing you to customize the cell’s content, appearance, or behavior dynamically during the rendering process.
   * Default value: null
   */
  onCellRender?: { (data: any, dataField: string, value: any, cell: HTMLTableCellElement): void };
  /**
   * A callback function that is invoked every time a Table column header cell is rendered. This function allows you to customize the rendering or behavior of each column header cell, and is called with information about the specific column being rendered.
   * Default value: null
   */
  onColumnRender?: { (dataField: string, headerCell: HTMLTableCellElement): void };
  /**
   * A callback function that is executed during the initialization process of the Table component. This function is triggered once the Table setup begins, allowing you to run custom code or perform additional configurations before the Table is fully rendered.
   * Default value: null
   */
  onInit?: { (): void };
  /**
   * A callback function that is executed immediately after the Table component has finished initializing. This function allows you to perform custom actions or setup tasks once the Table is fully ready.
   * Default value: null
   */
  onLoad?: { (): void };
  /**
   * A callback function that is invoked after the Table has completed all updates triggered by the endUpdate method. This function allows you to perform actions or handle additional logic once the update process is fully finished.
   * Default value: null
   */
  onUpdateComplete?: { (): void };
  /**
   * Specifies or retrieves the number of records displayed per page when paging is enabled. This property determines the size of each data page, allowing you to control how many items are shown to the user at a time.
   * Default value: 10
   */
  pageSize?: number;
  /**
   * Gets or sets the current page index (zero-based) when paging is enabled. This property allows you to specify or retrieve which page of data is currently being displayed, with the first page having an index of 0.
   * Default value: 0
   */
  pageIndex?: number;
  /**
   * Determines whether paging functionality is enabled. When set to true, data is divided into discrete pages for easier navigation and viewing; when false, all data is displayed in a single, continuous view. You can use this property to enable or disable paging, or retrieve its current state.
   * Default value: false
   */
  paging?: boolean;
  /**
   * Specifies or retrieves a value that determines whether the element's alignment is configured for right-to-left (RTL) text direction, typically used for languages such as Arabic or Hebrew that require right-to-left font support.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Defines or retrieves a string template used for rendering the detail section of a row. This template enables you to display additional information beneath a master row when it is expanded. To populate the detail row with values from the master row, insert the relevant data field names within double curly brackets (e.g., ). When a user clicks on a row to expand it, the template is applied, and the placeholders are replaced with the corresponding data from that row.
   * Default value: "null"
   */
  rowDetailTemplate?: string;
  /**
   * Defines or retrieves a callback function that takes three arguments: column, filterConditions, and filterInputTemplateString. This function is responsible for generating and returning a new filter input element or template based on the specific column and the current filter conditions. Use this callback to customize how the filter input is rendered for each column in the table.
   * Default value: null
   */
  onFilterRowInput?: any;
  /**
   * Gets or sets an array containing the IDs of the currently selected rows in the Table. This property allows you to retrieve which rows are selected by their unique identifiers, or programmatically update the selection by supplying an array of row IDs.
   * Default value: 
   */
  selected?: any[];
  /**
   * Controls whether users can select table rows using checkboxes. When enabled, checkboxes appear next to each row, allowing users to select or deselect rows. The value can be set to enable or disable this feature, or retrieved to check the current selection mode.
   * Default value: false
   */
  selection?: boolean;
  /**
   * Defines or retrieves the current selection mode for the component. This property is only applicable when selection functionality is enabled. Use it to specify how users can select items (e.g., single, multiple, or none).
   * Default value: many
   */
  selectionMode?: TableSelectionMode | string;
  /**
   * Controls the hierarchical row selection behavior using checkboxes. When enabled, selecting a parent row automatically selects all of its child (sub) rows. Likewise, deselecting a parent row will deselect all of its sub rows. You can use this property to get the current hierarchical selection state or to enable/disable this feature.
   * Default value: true
   */
  selectionByHierarchy?: boolean;
  /**
   * Callback function triggered whenever a column is sorted, allowing you to customize or override the default sorting behavior of the table. The function receives the following four parameters:  dataSource: The table's current data source (array of data objects) that will be sorted.  sortColumns: An array of column field names representing the columns to sort by, in order of sorting priority.  directions: An array of sort directions ('asc' or 'desc'), where each direction corresponds to the order of sortColumns.  defaultCompareFunctions: An array of default comparator functions for each column in sortColumns. You can use these to leverage default sorting logic for specific columns while overriding others as needed.Use this callback to implement custom multi-column sorting logic, integrate external sorting systems, or modify data presentation dynamically based on user actions.
   * Default value: null
   */
  sort?: { (dataSource: any, sortColumns: string[], directions: string[], defaultCompareFunctions: { (firstRecord: any, secondRecord: any): number }[]): void };
  /**
   * Specifies the sorting behavior applied to the table, such as ascending, descending, or custom order. This setting controls how table data is organized and displayed to the user.
   * Default value: none
   */
  sortMode?: TableSortMode | string;
  /**
   * Specifies which aspects of the Table's current state can be saved (using autoSaveState or saveState) and restored (using autoLoadState or loadState). This determines which settings—such as column visibility, sorting, filters, and pagination—are included when persisting or retrieving the Table’s configuration.
   * Default value: columns,expanded,filtered,grouped,selected,sorted
   */
  stateSettings?: string[];
  /**
   * Specifies the theme used to style the element. The theme controls the overall appearance, including colors, fonts, and visual effects, ensuring a consistent look and feel across the user interface.
   * Default value: ""
   */
  theme?: string;
  /**
   * Determines whether a tooltip displaying the full, untruncated content appears when a user hovers over a table cell that contains truncated text. When enabled, hovering the mouse pointer over a cell with clipped or overflowed text will show a tooltip with the complete content; when disabled, no tooltip is displayed on hover. This setting can be used to specify or retrieve the current tooltip behavior for truncated cell content.
   * Default value: false
   */
  tooltip?: boolean;
  /**
   * Controls whether HTML virtualization is enabled. When activated, only the rows currently visible within the viewport are rendered in the DOM, rather than all rows at once. This optimization significantly improves table performance, especially when displaying large datasets, by reducing memory usage and speeding up rendering times.
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
   * This event is triggered when a user begins editing the contents of a cell, signaling the initiation of a cell edit operation. It provides an opportunity to perform preparatory actions, such as validating the cell, applying custom styles, or capturing the cell’s initial value before any changes are made.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, dataField, row, value)
   *  id - The id of the row.
   *  dataField - The data field of the cell's column.
   *  row - The data of the cell's row.
   *  value - The data value of the cell.
   */
  onCellBeginEdit?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a user clicks on a cell within the component or data grid. It provides contextual information about the clicked cell, such as its row and column index, allowing you to perform custom actions in response to user interaction.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, dataField, row, value, originalEvent)
   *  id - The cell's row id.
   *  dataField - The data field of the cell's column.
   *  row - The data of the cell's row.
   *  value - The data value of the cell.
   *  originalEvent - The 'click' event object.
   */
  onCellClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered immediately after a cell's value has been modified by the user, allowing you to respond to changes as soon as a cell is edited. It provides relevant information about the edited cell, such as its new value, previous value, row, and column, enabling precise handling of cell updates within the table or data grid.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, dataField, row, value)
   *  id - The id of the row.
   *  dataField - The data field of the cell's column.
   *  row - The new data of the cell's row.
   *  value - The data value of the cell.
   */
  onCellEndEdit?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the user changes the current selection, such as highlighting text or selecting an item. Inside the event handler, you can access the updated selection by calling the 'getSelection' method. This allows you to retrieve information about the newly selected content or item and perform any necessary actions in response to the change.
	* @param event. The custom event. Custom data event was created with: ev.detail(type)
   *  type - The type of action that initiated the selection change. Possible types: 'programmatic', 'interaction', 'remove'.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when a row in the data grid or table is collapsed, meaning its contents or nested rows are hidden from view. Use this event to execute custom logic after a user collapses a specific row.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, record)
   *  id - The id of the collapsed row.
   *  record - The data of the collapsed row.
   */
  onCollapse?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a row in the table is expanded by the user, typically to reveal additional details or nested content associated with that row.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, record)
   *  id - The id of the expanded row.
   *  record - The (aggregated) data of the expanded row.
   */
  onExpand?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a user clicks on a column header cell, typically indicating that the header was selected—such as to initiate actions like sorting or displaying column options. It provides contextual information about the clicked header cell, enabling you to implement custom behaviors in response to header interactions.
	* @param event. The custom event. Custom data event was created with: ev.detail(dataField)
   *  dataField - The data field of the cell's column.
   */
  onColumnClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered immediately after the column menu has been closed by the user, either by clicking outside the menu or performing an action that causes it to close. It allows you to execute custom logic in response to the closure of a column-specific menu in the interface.
	* @param event. The custom event. Custom data event was created with: ev.detail(dataField)
   *  dataField - The data field of the column.
   */
  onCloseColumnMenu?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a column's width is changed by the user, either by dragging the column's edge or by double-clicking to auto-fit the column. It allows you to respond to column resize actions, enabling custom logic such as persisting new column widths or updating related UI elements.
	* @param event. The custom event. Custom data event was created with: ev.detail(dataField, headerCellElement, width)
   *  dataField - The data field of the column.
   *  headerCellElement - The column's header cell HTML element.
   *  width - The new width of the column.
   */
  onColumnResize?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a user initiates or modifies a filtering action, such as applying, updating, or removing filters. It allows the application to respond to changes in filtering criteria, ensuring that the displayed data accurately reflects the selected filters.
	* @param event. The custom event. Custom data event was created with: ev.detail(action, filters)
   *  action - The filtering action. Possible actions: 'add', 'remove'.
   *  filters - The added filters. Only when action is 'add'.
   */
  onFilter?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a user performs an action related to grouping, such as creating, modifying, or deleting a group, or changing the grouping configuration. It allows your application to respond dynamically to changes in how items are grouped.
	* @param event. The custom event. Custom data event was created with: ev.detail(action, dataField, label, path)
   *  action - The grouping action. Possible actions: 'add', 'collapse', 'expand', 'remove'.
   *  dataField - The data field of the column whose grouping is modified.
   *  label - The label of the group (only when collapsing/expanding).
   *  path - The group's path (only when collapsing/expanding). The path includes the path to the expanded/collapsed group starting from the root group. The indexes are joined with '.'. This parameter is available when the 'action' is 'expand' or 'collapse'.
   */
  onGroup?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is fired whenever a user opens the menu associated with a column, such as by clicking a column header or menu icon. It provides an opportunity to perform custom actions or update the interface in response to the column menu becoming visible.
	* @param event. The custom event. Custom data event was created with: ev.detail(dataField)
   *  dataField - The data field of the column.
   */
  onOpenColumnMenu?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a user performs an action that changes the current page in a paginated component, such as navigating to the next or previous page, selecting a specific page number, or adjusting the page size.
	* @param event. The custom event. Custom data event was created with: ev.detail(action)
   *  action - The paging action. Possible actions: 'pageIndexChange', 'pageSizeChange'.
   */
  onPage?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a user begins editing a table row, but only if the <strong>editMode</strong> property is set to <em>'row'</em>. This allows you to handle actions or logic specifically at the start of a row-level edit operation within your data grid or table component.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, row)
   *  id - The id of the row.
   *  row - The data of the row.
   */
  onRowBeginEdit?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a table row is edited, but only if the <strong>editMode</strong> property is set to <em>'row'</em>. It signifies that the user has completed changes to the entire row, as opposed to editing individual cells, and is useful for handling row-level updates or validation logic.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, row)
   *  id - The id of the row.
   *  row - The new data of the row.
   */
  onRowEndEdit?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a column header cell in the table is clicked by the user, initiating a sort operation, or when sorting is applied programmatically through the Table API. It fires both on direct user interaction and when sorting state changes are made via code.
	* @param event. The custom event. Custom data event was created with: ev.detail(columns, sortDataFields, sortOrders, sortDataTypes, type)
   *  columns - An array with information about the columns the Table has been sorted by.
   *  sortDataFields - An array with information about the data fields the Table has been sorted by.
   *  sortOrders - An array with information about the columns sort orders the Table has been sorted by.
   *  sortDataTypes - An array with information about the columns data types the Table has been sorted by.
   *  type - The type of action that initiated the data sort. Possible types: 'programmatic', 'interaction'
   */
  onSort?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Inserts a new row into the data set. To use this method, provide a JSON object containing key-value pairs that represent the data for each column in the new row. Each key should correspond to a column name, and its value should specify the cell's content for that column.
   * @param {any} data. JSON object with the new row's data. Sample JSON: {firstName: 'Peter', lastName: 'Fuller'}.
   */
  addRow(data: any): void;
  /**
   * Adds a custom filter to a specified column in the dataset, allowing you to display only the rows that meet defined criteria for that column. This function enables more precise data querying and improved data visualization by narrowing down results based on column-specific conditions.
   * @param {string} dataField. The column's data field.
   * @param {any} filter. FilterGroup object or a Filter expression. Filter expression like: 'startsWith B'. Example 2: ['contains Andrew or contains Nancy'], Example 3:  ['quantity', '&lt;= 3 and &gt;= 8'].  Filter conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
   */
  addFilter(dataField: string, filter: any): void;
  /**
   * Groups the dataset based on the unique values in a specified column, organizing the data into subsets where each group contains records sharing the same value for that column.
   * @param {string} dataField. The column's data field.
   */
  addGroup(dataField: string): void;
  /**
   * Initiates an edit operation, marking the start of a sequence where changes can be made to the data or document. This typically enables features such as undo or redo by tracking all modifications performed during the editing session.
   * @param {string | number} row. The id of the row to edit.
   * @param {string} dataField?. The dataField of the cell's column. May be omitted when <strong>editMode</strong> is <em>'row'</em>.
   */
  beginEdit(row: string | number, dataField?: string): void;
  /**
   * Initiates an update operation by temporarily suspending all table data refreshes and rendering processes. This ensures that no visual or data changes occur until the update is completed, preventing partial renders and improving performance during batch modifications.
   */
  beginUpdate(): void;
  /**
   * Terminates the current editing session and reverts any unsaved changes, restoring the content to its previous state before the edit began. No modifications made during this edit operation will be saved.
   */
  cancelEdit(): void;
  /**
   * Removes all currently applied filters from the data set or view, restoring the original unfiltered state.
   */
  clearFilters(): void;
  /**
   * Removes any currently applied grouping from the data set, restoring the original ungrouped view.
   */
  clearGrouping(): void;
  /**
   * Removes any currently selected items, resetting the selection state to none.
   */
  clearSelection(): void;
  /**
   * Removes any active sorting applied to the table, restoring the original order of the data. This action resets all column sort indicators and displays the table rows as they were initially loaded.
   */
  clearSort(): void;
  /**
   * Collapses all expanded rows in the tree view, minimizing each parent node so that only the top-level rows remain visible. This action helps organize and simplify the display by hiding any nested child rows.
   */
  collapseAllRows(): void;
  /**
   * Collapses all expanded groups in the tree view, minimizing each group so that only their parent nodes are visible. This action hides all nested child elements within the groups, providing a cleaner and more condensed overview of the tree structure.
   */
  collapseAllGroups(): void;
  /**
   * Collapses all expanded row details in the data table. Any rows that currently display additional content through a defined <b>rowDetailTemplate</b> will be collapsed, hiding their extra details from view. Only the main row data will remain visible after this action.
   */
  collapseAllRowDetails(): void;
  /**
   * Collapses a specified group of elements, hiding its contents from view while retaining the group's header or main container visible. This action makes the group's items inaccessible until it is expanded again, improving interface organization and reducing visual clutter.
   * @param {string} index. The group's hierarchical index.
   */
  collapseGroup(index: string): void;
  /**
   * Collapses the specified row in tree mode, hiding its child rows and displaying only the parent row.
   * @param {string | number} rowId. The id of the row to collapse.
   */
  collapseRow(rowId: string | number): void;
  /**
   * Prevents the selection of a specific row in the table. By default, when the 'selection' property is set to 'true', all rows are selectable. Use this option to disable row selection for individual rows as needed, overriding the global selection setting.
   * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
   */
  disableSelect(rowId: string | number | (string | number)[]): void;
  /**
   * Restores row selection capability for a previously disabled row, typically after using the 'disableSelect' method. If the 'selection' property is set to 'true', selection is enabled for all rows by default, allowing users to select any row unless explicitly disabled.
   * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
   */
  enableSelect(rowId: string | number | (string | number)[]): void;
  /**
   * Finalizes the current edit operation by applying and saving all changes made to the content, ensuring that modifications are committed and any unsaved edits are preserved.
   */
  endEdit(): void;
  /**
   * Ends the current update operation, allowing the table to resume normal refresh and render processes. This function restores automatic table updates that may have been paused during the update, and explicitly triggers a full re-render of the table to ensure all changes are reflected in the UI.
   * @param {boolean} refresh?. Optionally you can pass 'false' in case you need to manually call the 'refresh' method. By default, the table is re-rendered.
   */
  endUpdate(refresh?: boolean): void;
  /**
   * Expands all rows in the tree view, revealing every nested child element and displaying the entire hierarchical structure.
   */
  expandAllRows(): void;
  /**
   * Expands and displays all group nodes in the tree view, revealing their child items and nested structures.
   */
  expandAllGroups(): void;
  /**
   * Displays the detailed content for all table rows that have a <b>rowDetailTemplate</b> defined by expanding them simultaneously. Only rows associated with a <b>rowDetailTemplate</b> will show their additional details when this action is triggered; rows without a detail template remain unchanged.
   */
  expandAllRowDetails(): void;
  /**
   * Expands a collapsible group to reveal its hidden content or child elements. This action typically changes the group's state from collapsed to expanded, making its associated items visible within the user interface.
   * @param {string} index. The group's hierarchical index.
   */
  expandGroup(index: string): void;
  /**
   * Expands a row to reveal its child elements or sub-rows when operating in tree view mode, allowing users to browse hierarchical data structures within the table.
   * @param {string | number} rowId. The id of the row to expand.
   */
  expandRow(rowId: string | number): void;
  /**
   * Exports the data contained within the Table component to a downloadable file format (such as CSV, Excel, or JSON), enabling users to save or process the table data outside of the application.
   * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
   * @param {string} fileName?. The name of the file to export to
   * @param {boolean} exportFiltered?. If set to true, exports only filtered records
   * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
   * @returns {any}
   */
  exportData(dataFormat: string, fileName?: string, exportFiltered?: boolean, callback?: Function): any;
  /**
   * Returns an array containing the unique identifiers (IDs) of all currently selected rows. Each element in the array represents the ID of a row that has been selected by the user or programmatically. If no rows are selected, the array will be empty.
   * @returns {(string | number)[]}
   */
  getSelection(): (string | number)[];
  /**
   * Returns the current state of the Table component as an object, including comprehensive details about the following: visible and hidden columns, expanded row keys, selected row keys, applied filters, active groupings, and the order and direction of sorted columns. This state object can be serialized, stored (e.g., in local storage or a database), and later restored by passing it to the <strong>loadState</strong> method, enabling consistent table configurations across sessions or users.
   * @returns {any}
   */
  getState(): any;
  /**
   * Retrieves the current value stored in a specific cell, identified by its row and column coordinates. This function returns the cell's content, which may be a number, text, or other data type, depending on the cell's contents.
   * @param {string | number} row. The id of the cell's row.
   * @param {string} dataField. The dataField of the cell's column.
   * @returns {any}
   */
  getValue(row: string | number, dataField: string): any;
  /**
   * Retrieves the value of a specific property from a column object. This function allows you to access detailed information or settings associated with a particular column, such as its name, data type, default value, or any custom attributes.
   * @param {string} columnDataField. Column field name.
   * @param {string} propertyName. Column property name.
   * @returns {any}
   */
  getColumnProperty(columnDataField: string, propertyName: string): any;
  /**
   * Determines if a specified group is currently expanded and returns <em>true</em> if it is, or <em>false</em> otherwise. If the provided group index is undefined or does not correspond to a valid group, the function will also return <em>false</em>.
   * @param {string} index. The group's hierarchical index.
   * @returns {boolean}
   */
  isGroupExpanded(index: string): boolean;
  /**
   * Loads the current state of the Table component, restoring settings such as visible columns, expanded rows, selected rows, applied filters, grouping configurations, and column sorting order. The specific aspects of the state that are loaded depend on the options specified in the <strong>stateSettings</strong> property. This allows for a customized and persistent table experience based on user preferences or previously saved configurations.
   * @param {any} state?. An object returned by one of the methods <strong>getState</strong> or <strong>saveState</strong>. If a state is not passed, the method tries to load the state from the browser's localStorage.
   */
  loadState(state?: any): void;
  /**
   * Navigates the user to a specified web page or route within the application. This action typically updates the browser’s address bar and loads the corresponding content, enabling seamless transitions between different views or sections of the site. Optional parameters may include the target URL, query parameters, or navigation options such as replacing the current history entry.
   * @param {number} pageIndex. The zero-based page index to navigate to.
   */
  navigateTo(pageIndex: number): void;
  /**
   * Updates the table by reloading its data and refreshing the displayed content to reflect the latest changes.
   */
  refresh(): void;
  /**
   * Clears all filters currently applied to the specified column, restoring its original, unfiltered data view.
   * @param {string} dataField. The column's data field.
   */
  removeFilter(dataField: string): void;
  /**
   * Removes the existing grouping applied to the dataset based on the specified column, resulting in an ungrouped or flat structure with respect to that column. This operation effectively eliminates any aggregation or segmentation previously created through grouping by that column.
   * @param {string} dataField. The column's data field.
   */
  removeGroup(dataField: string): void;
  /**
   * Deletes a row from the data set based on the specified unique identifier (id). This operation locates the row with the matching id and removes it from the collection, ensuring the data remains consistent.
   * @param {string | number} row. The id of the cell's row.
   */
  removeRow(row: string | number): void;
  /**
   * Resets the Table's state according to the configuration specified by the <strong>stateSettings</strong> property. This action clears stored information such as column configurations, expanded or collapsed rows, selected rows, applied filters, groupings, and sorting order. Only the aspects of state indicated by <strong>stateSettings</strong> will be reset, ensuring fine-grained control over which parts of the Table's state are cleared.
   */
  resetState(): void;
  /**
   * Persists the current state of the Table. This includes details such as column configurations, which rows are expanded or selected, any active filters, applied grouping, and the current column sort order. The specific aspects of the Table’s state that are saved depend on the options specified in the <strong>stateSettings</strong> property.
   * @returns {any}
   */
  saveState(): any;
  /**
   * Allows the selection of one or more rows from a dataset or table, enabling users to perform actions on multiple rows simultaneously.
   * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
   */
  select(rowId: string | number | (string | number)[]): void;
  /**
   * Assigns a specified value to a particular cell within a data structure, such as a table or spreadsheet. This operation updates the cell’s current content with the new value provided.
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
   * Sets a property for a database or data grid column, allowing customization of its behavior or appearance—such as its data type, visibility, default value, sorting behavior, or formatting options.
   * @param {string} columnDataField. Column field name.
   * @param {string} propertyName. Column property name.
   * @param {any} propertyValue. Property value.
   */
  setColumnProperty(columnDataField: string, propertyName: string, propertyValue: any): void;
  /**
   * Updates an existing table row with new data. This method requires two parameters: the unique identifier (row id) of the row to be updated, and a JSON object containing the updated key-value pairs for the row's data. Only the specified fields in the JSON object will be modified; all other fields will remain unchanged.
   * @param {string | number} rowId. The id of the row.
   * @param {any} data. JSON object with the new row's data. Example: {firstName: 'Peter', lastName: 'Fuller'}.
   */
  updateRow(rowId: string | number, data: any): void;
  /**
   * Deselects one or more previously selected rows in the dataset or table, removing their active or highlighted state.
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
   * Sets or gets whether the column can be resized.
   * Default value: true
   */
  allowResize?: boolean;
  /**
   * Sets or gets whether the table can be sorted by the column.
   * Default value: true
   */
  allowSort?: boolean;
  /**
   * Sets or gets whether the column may have a column menu when the 'columnMenu' property of the Table is enabled.
   * Default value: true
   */
  allowMenu?: boolean;
  /**
   * Sets or gets whether the column may be hidden with the Table's column menu when the 'columnMenu' property of the Table is enabled.
   * Default value: true
   */
  allowHide?: boolean;
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
  dataType?: TableColumnDataType | string;
  /**
   * An object setting up a custom editor. Available fields: template - a string to be parsed into HTML and be used as custom cell editor.onInit - a callback function called once when the editor is initialized.onRender - a callback function called each time a cell enters edit mode.getValue - a callback function called when editing is complete; used to return the editor's value to the Table's data source.
   * Default value: null
   */
  editor?: any;
  /**
   * Sets or gets whether the column is sticky/frozen. true and 'near' designate freezing on the left side, 'far' - on the right side.
   * Default value: null
   */
  freeze?: TableColumnFreeze | string;
  /**
   * A callback function that can be used to modify the contents of a cell and the cell itself.
   * Default value: null
   */
  formatFunction?: { (settings: { value: any, row: string | number, column: string, cell: HTMLTableCellElement, template?: any }): void };
  /**
   * Sets or gets the text displayed in the column's header.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets the data field map, when the Table is bound to an Array and dataSourceSettings property is not set.
   * Default value: ""
   */
  map?: string;
  /**
   * Sets or gets the column's priority when resizing the browser window. The larger the priority value, the column will be hidden at a larger screen resolution. Columns with priority 1 are never hidden. The property should be set to a number in the range of 1 to 5. The property by default is not set.
   * Default value: null
   */
  responsivePriority?: number | null;
  /**
   * Use this for custom sort implementation only. All non-undefined array elements are sorted according to the return value of the compare function (all undefined elements are sorted to the end of the array, with no call to compareFunction).
   * Default value: null
   */
  sort?: { (firstRecord: any, secondRecord: any): number };
  /**
   * A string to be parsed into HTML and be used as custom cell content. Applicable only when virtualization is enabled.
   * Default value: "null"
   */
  templateElement?: string;
  /**
   * A callback function that can be used to apply settings to a template element (specified by the column templateElement property). Applicable only when virtualization is enabled.
   * Default value: null
   */
  templateElementSettings?: { (value: any, row: string | number, templateElement: HTMLElement): void };
  /**
   * A callback function that can be used to transform all the data of the column's original data field into a new data field to be used in column cells and all column operations. Can be useful for localizing data.
   * Default value: null
   */
  transform?: { (value: any): any };
  /**
   * A callback function that can be used to validate cell values after editing. If it returns true, the cell is valid. If it returns false or an object with a message field, the cell is not valid and the message (or a default one) is displayed in a tooltip.
   * Default value: null
   */
  validation?: { (value: any): boolean | { message: string } };
  /**
   * Sets or gets whether the column is hidden or not. Hidden columns allow data to be grouped by their corresponding dataField.
   * Default value: true
   */
  visible?: boolean;
  /**
   * Sets the width of the column. The width can be entered as a number or string with px.
   * Default value: null
   */
  width?: string | number;
  /**
   * Sets the minimum width of the column. The width can be entered as a number.
   * Default value: null
   */
  minWidth?: number;
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
  condition?: TableConditionalFormattingCondition | string;
  /**
   * The value to compare by. When condition is 'between', this is the start (from) value.
   * Default value: 0
   */
  firstValue?: number;
  /**
   * The fontFamily to apply to formatted cells.
   * Default value: The default fontFamily as set in CSS
   */
  fontFamily?: TableConditionalFormattingFontFamily | string;
  /**
   * The fontSize to apply to formatted cells. The fontSize as set in CSS is used by default.
   * Default value: 14px
   */
  fontSize?: TableConditionalFormattingFontSize | string;
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

/**Configures the grid's data source settings when the <code>dataSource</code> property is assigned either a local data array or a remote URL. This allows the grid to properly retrieve, bind, and display data from the specified source, whether it is provided directly as an array or fetched asynchronously from a web endpoint. */
export interface TableDataSourceSettings {
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
   * Default value: ""
   */
  root?: string;
  /**
   * Sets or gets the Table values espace mode. This property specifies how html tags will be espaced by the table. The default 'blackList' value includes the most commonly used tags for espace such as 'script'. The 'all' value espaces all tags, whereas 'none' does not escape any tags.
   * Default value: blackList
   */
  sanitizeHTML?: TableDataSourceSettingsSanitizeHTML | string;
  /**
   * Determines whether cell values will display the espaced values as text or html.
   * Default value: text
   */
  sanitizeHTMLRender?: TableDataSourceSettingsSanitizeHTMLRender | string;
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
  dataFields?: TableDataSourceSettingsDataField[];
  /**
   * Sets or gets whether the data source type.
   * Default value: array
   */
  dataSourceType?: TableDataSourceSettingsDataSourceType | string;
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

export interface TableDataSourceSettingsDataField {
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
  dataType?: TableDataSourceSettingsDataFieldDataType | string;
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
export declare type TableColumnDataType = 'boolean' | 'date' | 'number' | 'string' | 'any';
/**Sets or gets whether the column is sticky/frozen. true and 'near' designate freezing on the left side, 'far' - on the right side. */
export declare type TableColumnFreeze = 'true' | 'near' | 'far';
/**The formatting condition. */
export declare type TableConditionalFormattingCondition = 'between' | 'equal' | 'greaterThan' | 'lessThan' | 'notEqual';
/**The fontFamily to apply to formatted cells. */
export declare type TableConditionalFormattingFontFamily = 'The default fontFamily as set in CSS' | 'Arial' | 'Courier New' | 'Georgia' | 'Times New Roman' | 'Verdana';
/**The fontSize to apply to formatted cells. The fontSize as set in CSS is used by default. */
export declare type TableConditionalFormattingFontSize = '8px' | '9px' | '10px' | '11px' | '12px' | '13px' | '14px' | '15px' | '16px';
/**<br/><br/>---<br/><br/>Determines how the table columns are sized, supporting two distinct modes:<br/><br/>- ''auto' Mode:'  <br/>  Columns are automatically sized based on their content and the specified columnMinWidth value. If the table does not have enough horizontal space to display all content, excess text is truncated with ellipses. Manually specified static column widths (set by the user) will still be honored in this mode.<br/><br/>- ''default' Mode:'  <br/>  Columns follow the standard HTML table's <code>table-layout: fixed</code> behavior. In this mode, column widths do not adapt to content; instead, each column's width is determined either by a fixed value (set via the column’s width property) or distributed evenly if no width is specified.<br/><br/>Use this property to control whether column widths are calculated automatically based on content or determined by fixed sizing rules. */
export declare type TableColumnSizeMode = 'auto' | 'default';
/**Sets or gets the Table values espace mode. This property specifies how html tags will be espaced by the table. The default 'blackList' value includes the most commonly used tags for espace such as 'script'. The 'all' value espaces all tags, whereas 'none' does not escape any tags. */
export declare type TableDataSourceSettingsSanitizeHTML = 'all' | 'blackList' | 'none';
/**Determines whether cell values will display the espaced values as text or html. */
export declare type TableDataSourceSettingsSanitizeHTMLRender = 'text' | 'html';
/**Sets the dataField type. */
export declare type TableDataSourceSettingsDataFieldDataType = 'string' | 'date' | 'boolean' | 'number' | 'array' | 'any';
/**Sets or gets whether the data source type. */
export declare type TableDataSourceSettingsDataSourceType = 'array' | 'json' | 'xml' | 'csv' | 'tsv';
/**Enables or retrieves the current state of edit mode, determining whether the component is in an editable state. When set to true, users can modify the content; when set to false, the component is read-only. */
export declare type TableEditMode = 'cell' | 'row';
/**Defines how the column settings are handled during loading, whether automatically with autoLoadState or manually with loadState. This option is relevant only if the stateSettings array includes 'columns', ensuring that column-specific state (such as order, visibility, or width) is properly managed during the state load process. */
export declare type TableLoadColumnStateBehavior = 'implementationOnly' | 'intersection' | 'stateOnly';
/**Defines or retrieves the current selection mode for the component. This property is only applicable when selection functionality is enabled. Use it to specify how users can select items (e.g., single, multiple, or none). */
export declare type TableSelectionMode = 'one' | 'many' | 'extended';
/**Specifies the sorting behavior applied to the table, such as ascending, descending, or custom order. This setting controls how table data is organized and displayed to the user. */
export declare type TableSortMode = 'none' | 'one' | 'many';
