import  {BaseElement, Animation} from "./smart.element"
import  {DataAdapter} from "./smart.dataadapter"
import  {Chart} from "./smart.chart"

export interface GridProperties {
  /**
   * An object that defines configurable options for customizing the visual appearance of the grid, including properties such as line color, spacing, background style, and border visibility.
   * Default value: [object Object]
   */
  appearance?: GridAppearance;
  /**
   * An object that defines configuration options for integrating AI capabilities within the grid component. This includes settings for enabling AI features, specifying AI service endpoints, setting authentication credentials, and customizing how the grid interacts with AI-powered functionalities.
   * Default value: [object Object]
   */
  ai?: GridAi;
  /**
   * An object that defines configuration options controlling the grid’s behavior, such as layout properties, sorting and filtering capabilities, selection modes, and responsiveness settings.
   * Default value: [object Object]
   */
  behavior?: GridBehavior;
  /**
   * Sets or retrieves the id of the currently active user. This value must match the id of one of the entries in the users property or array. The active user's privileges and access rights are determined based on their corresponding user object. If no current user is specified (i.e., the id is unset or invalid), the default privileges for the element will apply according to its properties, potentially restricting or allowing access based on default settings.
   * Default value: 
   */
  currentUser?: string | number;
  /**
   * Provides configuration options for customizing the appearance, labels, alignment, and behavior of column headers in a data table or grid.
   * Default value: [object Object]
   */
  columnHeader?: GridColumnHeader;
  /**
   * The clipboard property controls whether users can perform clipboard operations—such as copying (Ctrl+C), cutting (Ctrl+X), and pasting (Ctrl+V)—using keyboard shortcuts within the application. Setting this property to true enables these keyboard shortcuts for clipboard actions; setting it to false disables them, preventing users from using keyboard navigation for copying, cutting, or pasting content.
   * Default value: [object Object]
   */
  clipboard?: GridClipboard;
  /**
   * The columns property defines the collection of columns displayed within the Smart.Grid component. Each column configuration specifies how data is presented and interacted with. Through this property, you can control essential aspects such as column headers, data field bindings, sorting, filtering, formatting, alignment, visibility, and more. The columns property gives you full control over the structure, appearance, and behavior of the grid's columns, enabling advanced customization of both data presentation and user experience.
   * Default value: []
   */
  columns?: {label: string, dataField: string}[] | string[] | number | GridColumn[];
  /**
   * The Context Menu is the drop-down menu that appears when a user right-clicks on a row within the Grid. This menu provides quick access to actions such as deleting a row or editing a cell or entire row, depending on the current editing mode configured for the Grid. You can customize the Context Menu by using the 'contextMenuItemCustom' option in the Grid's dataSource. This option lets you add your own custom menu items to enhance or extend the menu's functionality.Additionally, if you want to completely replace the default context menu with your own, you can use the 'selector' property. Set this property to the ID of a Smart.Menu component to display your custom menu when the user right-clicks on a row in the Grid.
   * Default value: [object Object]
   */
  contextMenu?: GridContextMenu;
  /**
   * The Column Menu is a contextual drop-down menu that appears when you click the drop-down button in a column header, which becomes visible upon hovering over the header. This menu provides various options for customizing the behavior and appearance of the selected column. Common actions include sorting the grid by the column, applying filters to show or hide specific data, and grouping the grid rows based on the column’s values. The Column Menu offers an intuitive way for users to interact with and tailor the data grid to meet their specific needs.
   * Default value: [object Object]
   */
  columnMenu?: GridColumnMenu;
  /**
   * Provides a detailed configuration of column group settings, including group names, ordering, visibility, and any hierarchical relationships between columns within the group.
   * Default value: 
   */
  columnGroups?: GridColumnGroup[];
  /**
   * 
   * Default value: false
   */
  dropDownMode?: boolean;
  /**
   * Defines or retrieves the rules and settings for conditional formatting applied to the Grid's cells, allowing you to customize cell appearance (such as background color, font style, or icons) based on specific conditions or cell values.
   * Default value: null
   */
  conditionalFormatting?: GridConditionalFormatting[];
  /**
   * Configures the data and display settings for the Grid Chart, enabling data visualization in a tabular grid format. This includes specifying the structure, appearance, and interactive features of the chart to present complex data clearly and intuitively.
   * Default value: [object Object]
   */
  charting?: GridCharting;
  /**
   * Configures the checkbox options for the TreeGrid component, allowing you to enable or customize checkbox display, selection behavior, and interaction within the hierarchical grid structure.
   * Default value: [object Object]
   */
  checkBoxes?: GridCheckBoxes;
  /**
   * Configures the export settings for grid data, including file format, selected columns, data range, export style, and additional export preferences.
   * Default value: [object Object]
   */
  dataExport?: GridDataExport;
  /**
   * Specifies the source from which the grid retrieves its data. The dataSource property accepts either an instance of JQX.DataAdapter for advanced data management and operations, or a standard Array containing the data records to be displayed in the grid. This flexibility allows developers to connect the grid to various data formats and structures, making data binding straightforward and versatile.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Configures the grid’s data source when the dataSource property is assigned either a JavaScript array (for local data) or a URL (for remote data). This setting determines how the grid retrieves and displays its data, supporting both direct array binding and remote data fetching via HTTP requests.
   * Default value: [object Object]
   */
  dataSourceSettings?: GridDataSourceSettings;
  /**
   * Provides comprehensive configuration options for controlling the grid's editing behavior, including enabling or disabling editing features, specifying editing modes (such as inline, popup, or batch), setting validation rules, and customizing editors for specific columns.
   * Default value: [object Object]
   */
  editing?: GridEditing;
  /**
   * Provides detailed configuration options for the grid's filtering functionality, including filter types, default filter values, filter operators, and custom filter logic for columns. This determines how data within the grid can be searched, narrowed, or displayed based on user-defined criteria.
   * Default value: [object Object]
   */
  filtering?: GridFiltering;
  /**
   * Provides configuration options for customizing the appearance and behavior of the grid's footer, including visibility, content, styling, and layout settings.
   * Default value: [object Object]
   */
  footer?: GridFooter;
  /**
   * Enables or retrieves the ability to use Excel-style formulas as cell values within the table. Formulas must begin with an equal sign (=) and will be automatically recalculated whenever the referenced cell values are updated. This functionality relies on the third-party, free formula-parser plugin, so you must include the file 'formula-parser.min.js' in your project for this feature to work properly.
   * Default value: false
   */
  formulas?: boolean;
  /**
   * Provides detailed configuration options for the grid's data grouping functionality, specifying how rows are grouped, the grouping criteria, and related display settings within the grid.
   * Default value: [object Object]
   */
  grouping?: GridGrouping;
  /**
   * Provides configuration options that define the appearance and behavior of the group header, including properties such as text, style, alignment, and visibility settings.
   * Default value: [object Object]
   */
  groupHeader?: GridGroupHeader;
  /**
   * Provides detailed configuration options for the grid's header, including display settings, styling, visibility, and customization of header rows and columns.
   * Default value: [object Object]
   */
  header?: GridHeader;
  /**
   * An object that defines configuration options for the layout of the grid, including properties such as the number of columns, row and column spacing, alignment, and overall grid arrangement. This object allows you to customize the appearance and structure of the grid according to your requirements.
   * Default value: [object Object]
   */
  layout?: GridLayout;
  /**
   * Sets or retrieves the unlockKey used to authorize and access the full functionality of the product. The unlockKey serves as a security credential to enable locked or premium features.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies the language code to be used for displaying messages. When set, it determines which localized messages from the messages property are shown to the user. This property can be used to retrieve the current language or update it dynamically at runtime.
   * Default value: "en"
   */
  locale?: string;
  /**
   * 'Key Handling:'  You can customize how key presses are handled by defining key mappings within the configuration. For each key (e.g., '"Enter"'), you can assign:- 'Another key as the value' (e.g., '"Enter": "Tab"'): When the specified key is pressed, it will be treated as if the mapped key was pressed instead.- 'A predefined action' (e.g., ''copy'', ''copyPrev'', ''copyNext'', ''delete''): When the key is pressed, the associated action will be executed.- 'A custom function': Assign a function as the value to execute custom logic whenever the key is pressed.This allows you to remap keys, trigger built-in actions, or define entirely custom behaviors based on key events in your application.
   * Default value: null
   */
  keys?: any;
  /**
   * Assigns values to the messages property, which typically contains an array or object representing individual messages or notifications. This function or setting updates the content, ensuring that the correct message data is stored or displayed.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Callback function invoked each time the Grid component requires a cell value for rendering. By implementing this function, you can customize or override the default logic used to retrieve and display cell values, enabling support for computed values, formatted data, or specialized rendering based on row or column context.
   * Default value: null
   */
  onCellValue?: {(cell: GridCell): void};
  /**
   * Callback function that is triggered whenever a cell's value is about to be updated. You can use this function, for example, to perform an Ajax call to your server in order to validate or process the proposed cell changes before they are applied. If the server response indicates that the changes are valid, call the confirm function provided in the callback to finalize and apply the update. This allows for asynchronous validation and external control over cell modification in your data grid.
   * Default value: null
   */
  onCellUpdate?: {(cells: GridCell[], oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void};
  /**
   * A callback function that is invoked each time a cell is rendered in the grid. Use this function to modify or customize the properties of the GridCell before it is displayed to the user. This allows you to dynamically apply styles, set attributes, or inject content based on the cell's data or state.
   * Default value: null
   */
  onCellRender?: {(cell: GridCell): void};
  /**
   * A callback function that is triggered when a cell enters edit mode. This function allows you to implement custom logic before editing begins. If the function returns false, the cell edit operation will be canceled and the cell will remain in its previous state. Use this to validate whether editing should be permitted based on your criteria.
   * Default value: null
   */
  onCellBeginEdit?: {(id: string, dataField: string, value: any): boolean};
  /**
   * A callback function that is triggered when a cell editing operation finishes in the Grid. This function is typically used together with the 'editing.readOnlyEdit' property set to true, which allows cells to appear read-only but still be editable through custom logic. The primary purpose of this callback is to handle post-editing actions, such as validating the input, processing changes, or updating the cell value in the Grid after the editing session ends. Use this function to programmatically update the data source or UI based on the user’s edits.
   * Default value: null
   */
  onCellEditRequest?: {(id: string, dataField: string, value: any, oldValue: any, data: any): void};
  /**
   * Invoked whenever a cell's value is updated, this callback function receives relevant information about the change—such as the new value, the previous value, and cell metadata—allowing you to handle updates, trigger side effects, or implement custom logic in response to user edits.
   * Default value: null
   */
  onCellValueChanged?: {(id: string, dataField: string, value: any): boolean};
  /**
   * Callback function that is executed before the grid initialization process begins. At this stage, the Grid's Virtual DOM has not yet been created, so any DOM manipulations or operations on grid elements should be avoided within this callback. Use this function to perform setup tasks or configure options that need to occur prior to the creation of the grid's internal structure.
   * Default value: null
   */
  onBeforeInit?: {(): void};
  /**
   * Callback function invoked during the grid initialization process, specifically after the Grid's Virtual DOM has been created. This allows you to perform custom actions or setup logic once the grid structure is ready in the DOM, but before it is rendered to the user.
   * Default value: null
   */
  onInit?: {(): void};
  /**
   * Callback function that is executed after the grid has completed initialization and its Virtual DOM has been fully constructed. This allows you to perform any additional setup or actions that require the grid and its DOM elements to be ready.
   * Default value: null
   */
  onAfterInit?: {(): void};
  /**
   * Callback function (chart: JQX.Chart) invoked after the chart has been fully initialized. Use this function to perform additional configuration or customization of the chart instance, such as modifying chart options, adding event listeners, or updating data before the chart is rendered to the user. This allows you to tailor the chart's appearance and behavior to meet specific application requirements.
   * Default value: null
   */
  onChartInit?: any;
  /**
   * A callback function that is executed immediately after the grid has finished rendering, allowing you to perform additional actions or updates once the grid display is complete.
   * Default value: null
   */
  onRender?: any;
  /**
   * Callback function invoked after the grid has been rendered for the first time and all data bindings have been completed. At this point, the component is fully initialized and ready for interaction or further manipulation.
   * Default value: null
   */
  onLoad?: any;
  /**
   * Callback function (event: KeyboardEvent) that is invoked whenever the grid component has focus and the user presses any keyboard key. This function allows you to handle and respond to keyboard interactions within the grid, accessing the pressed key and related event properties via the KeyboardEvent object.
   * Default value: null
   */
  onKey?: {(event: KeyboardEvent): void};
  /**
   * Callback function invoked during the initialization of a row. Use this function to customize row properties, apply conditional logic, or modify row data before it is rendered. The function receives the row's data and context as parameters, allowing for dynamic adjustments based on specific requirements.
   * Default value: null
   */
  onRowInit?: {(index: number, row: GridRow): void};
  /**
   * Callback function invoked during the initialization of a row’s detail section. This function is triggered before the row detail is rendered, allowing you to customize or modify the detail content. Row details can be displayed either directly beneath the associated row in the main data table, or within a separate dialog window, depending on the configuration.
   * Default value: null
   */
  onRowDetailInit?: {(index: number, row: GridRow, details: HTMLElement): void};
  /**
   * Callback function that is invoked when the details of a table row are being updated. This function allows you to implement custom logic or handle events during the row detail update process.
   * Default value: null
   */
  onRowDetailUpdated?: {(index: number, row: GridRow, details: HTMLElement): void};
  /**
   * A callback function that is triggered whenever a row’s edit history is updated. This function is invoked only if the 'storeHistory' property is enabled, ensuring that all changes made to a row are recorded. Use this callback to handle actions such as syncing changes, auditing edits, or updating related UI components whenever a row’s edit history changes.
   * Default value: null
   */
  onRowHistory?: {(index: number, row: GridRow, history: any[]): void};
  /**
   * Callback function triggered when the style of a row is updated. This event occurs whenever a row's styling changes, either through the row dialog interface or programmatically via the setRowStyle method. The callback receives relevant information about the updated row and its new style, enabling custom handling or additional processing in response to the style change.
   * Default value: null
   */
  onRowStyle?: {(index: number, row: GridRow, history: any[]): void};
  /**
   * Callback function that is executed immediately after a new row has been successfully inserted. It receives relevant information about the newly inserted row as arguments, allowing you to perform custom actions or post-processing in response to the insertion event.
   * Default value: null
   */
  onRowInserted?: {(index: number[], row: GridRow[]): void};
  /**
   * A callback function that is executed immediately after a row has been successfully removed from the data set or table. This function receives relevant information about the removed row, allowing you to perform custom actions such as updating the UI, triggering notifications, or handling related cleanup tasks.
   * Default value: null
   */
  onRowRemoved?: {(indexes: number[], rows: GridRow[]): void};
  /**
   * Callback function triggered when a row's cell values are updated. Use this function to perform custom actions—such as making an AJAX request to the server to validate the edited data. After receiving validation results, if the changes are approved, call the confirm function to finalize the update.
   * Default value: null
   */
  onRowUpdate?: {(index: number[], row: GridRow[], oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void};
  /**
   * Callback function that is invoked immediately after a row has been updated. Receives the updated row data and additional context as parameters, enabling custom logic or side effects in response to row changes.
   * Default value: null
   */
  onRowUpdated?: {(index: number[], row: GridRow[]): void};
  /**
   * This callback function is invoked by the Grid component, if provided, for each row. It is used to determine and return the CSS class name(s) that should be applied to the specific row, allowing for dynamic or conditional styling based on the row data or index.
   * Default value: null
   */
  onRowClass?: {(index: number, data: any, row: GridRow[]): void};
  /**
   *   "This callback function, when provided to the Grid, is invoked for each cell to determine the CSS class(es) that should be applied. Use this function to dynamically assign one or more CSS classes to individual cells based on their data, state, or other custom logic."
   * Default value: null
   */
  onCellClass?: {(index: number, dataField: string, cellValue: any, data: any, row: GridRow[]): void};
  /**
   * Callback function that is invoked after a column has been initialized. This function receives the column instance as a parameter and can be used to modify column properties, apply custom settings, or perform additional setup specific to that column. Use this callback to tailor column behavior or appearance during the initialization process.
   * Default value: null
   */
  onColumnInit?: {(index: number, column: GridColumn): void};
  /**
   * Callback function that is invoked whenever a new column is successfully inserted into the structure or component. This function receives relevant information about the inserted column, allowing you to perform custom logic or updates in response to the insertion event.
   * Default value: null
   */
  onColumnInserted?: {(index: number, column: GridColumn): void};
  /**
   * Callback function that is triggered after a column has been successfully removed. This function receives relevant information about the removed column as its arguments, allowing you to perform additional actions or updates in response to the removal event.
   * Default value: null
   */
  onColumnRemoved?: {(index: number, column: GridColumn): void};
  /**
   * Callback function that is invoked whenever the data in a column is updated. Receives relevant information about the updated column, such as the column identifier and the new value, allowing you to implement custom behavior in response to column changes.
   * Default value: null
   */
  onColumnUpdated?: {(index: number, column: GridColumn): void};
  /**
   * Callback function that is invoked immediately after a column has been successfully cloned. This function receives relevant context or event data as its arguments, allowing you to perform custom logic or side effects in response to the cloning action.
   * Default value: null
   */
  onColumnClone?: {(dataField: string, cloneColumnDataField: string, index: number, duplicateCells: boolean): void};
  /**
   * Callback function that is triggered when a command is executed.  - The name parameter specifies the name of the command.  - The command parameter refers to the function that implements the command’s logic.  - The details parameter contains the arguments for the command, as provided by the Grid.  - The handled parameter is a flag you can set to true within the callback to prevent the Grid from executing the command’s default behavior, allowing you to fully override or customize the command’s handling.
   * Default value: null
   */
  onCommand?: {(name: string, command: any, details: GridCell, event: Event | KeyboardEvent | PointerEvent, handled: boolean): void};
  /**
   * Provides detailed configuration options for managing pagination, including parameters such as the number of items per page, current page index, and total number of pages. This section ensures efficient data retrieval and navigation across multiple pages of results.
   * Default value: [object Object]
   */
  paging?: GridPaging;
  /**
   * Provides detailed configuration options for pager controls, including settings for page size, navigation buttons, and display style. These options determine how pagination is displayed and how users interact with paged content in the interface.
   * Default value: [object Object]
   */
  pager?: GridPager;
  /**
   * Configures or updates the detailed information or content associated with a specific row, often used to display additional data or expanded views for that row.
   * Default value: [object Object]
   */
  rowDetail?: GridRowDetail;
  /**
   * Sets or gets the CSS class rules for table rows. This property allows you to conditionally apply different CSS class names to rows based on custom logic. You provide an object where the keys are CSS class names and the values are functions that determine whether the class should be applied to a particular row.Each function receives a settings object with the following properties:- 'index': The numerical index of the current row.- 'data': The data object for the current row.- 'row': The raw row element or reference (depending on the implementation).- 'api': A reference to the table's API for advanced operations.'Example usage:''''jsrowCSSRules: {  'cell-class-1': settings => settings.data.quantity === 5,  'cell-class-2': settings => settings.data.quantity   'cell-class-3': settings => settings.data.quantity > 5}'''In this example, based on the 'quantity' property of the row's data, a different CSS class will be applied to that row. Multiple rules can be defined, and each will be evaluated for every row. If the function returns 'true', the corresponding class will be added to the row.
   * Default value: null
   */
  rowCSSRules?: any;
  /**
   * Gets or sets a value that determines whether the element's alignment is configured for right-to-left (RTL) languages, ensuring proper layout and text direction for locales such as Arabic or Hebrew.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * The rows property contains an array of objects, with each object representing a single row in the grid. This property defines all the data entries that are rendered and displayed as rows within the grid component. Each element in the rows array should align with the column definitions, ensuring that the grid displays structured and consistent data across all rows.
   * Default value: 
   */
  rows?: GridRow[];
  /**
   * Configures the scroll mode behavior, allowing you to define how scrolling is handled within the component or page. This setting determines options such as smooth or instant scrolling, vertical or horizontal direction, and any custom scroll-related parameters.
   * Default value: physical
   */
  scrolling?: Scrolling | string;
  /**
   * Provides detailed configuration options for displaying and customizing the summary row, including its appearance, position, aggregation methods, and which columns are summarized.
   * Default value: [object Object]
   */
  summaryRow?: GridSummaryRow;
  /**
   * Configures the grid's state-related settings, including properties such as selection, sorting, filtering, pagination, and layout. This determines how the grid maintains and restores its current state during user interactions or when the page is reloaded.
   * Default value: [object Object]
   */
  stateSettings?: GridStateSettings;
  /**
   * Provides detailed configuration options for user selection behavior, including parameters such as selection mode (single or multiple), default selections, selection limits, and customizable callbacks for selection events.
   * Default value: [object Object]
   */
  selection?: GridSelection;
  /**
   * Provides detailed configuration options for controlling how data is sorted, including criteria such as sorting field, order (ascending or descending), and support for multiple sort keys.
   * Default value: [object Object]
   */
  sorting?: GridSorting;
  /**
   * Defines the users displayed on the grid. Expects an array of user objects, where each object must include an 'id' (unique identifier) and a 'name' (display name). Optionally, each user object can also include a 'color' (for customizing the user's appearance) and an 'image' (URL or path to the user's avatar image).
   * Default value: []
   */
  users?: any[];
  /**
   * Configures the upload settings for images and attachments in the grid's image and attachment columns, including options for file type restrictions, size limits, and image filters to be applied during the upload process.
   * Default value: [object Object]
   */
  uploadSettings?: GridUploadSettings;
  /**
   * Specifies the layout mode for displaying data within the interface. Acceptable values are:- ''grid'': Presents items in a tabular, spreadsheet-like format with rows and columns.- ''kanban'': Arranges items into columns representing workflow stages, similar to task boards.- ''card'': Displays each item as an individual card, typically used for concise summaries or visual grouping.Choose one of these values to determine how data is visually organized and presented to the user.
   * Default value: "grid"
   */
  view?: string;
}
/**
 Data Grid UI Component that covers everything from paging, sorting, grouping, filtering, and editing to row and column virtualization, right-to-left layout, export to Excel and PDF and Accessibility.
*/
export interface Grid extends BaseElement, GridProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is fired when a cell transitions into edit mode. Within the event handler, you can prevent the editing action for specific cells, rows, or columns by invoking <em>event.preventDefault()</em>. This allows you to control which cells are editable based on custom logic or application requirements.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, dataField, row, column, cell, data, value)
   *  id - The unique identifier of the edited row.
   *  dataField - The data field (column) associated with the edited cell.
   *  row - The edited row's full configuration object.
   *  column - The column configuration of the edited cell.
   *  cell - The edited cell object.
   *  data - The complete data record of the edited row.
   *  value - The current value of the edited cell.
   */
  onBeginEdit?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Triggered when a user confirms a batch action by clicking the 'OK' button in a Grid header dropdown. Typical actions include column customization, applying sorting, or setting filters. This event signifies that the changes selected in the dropdown have been finalized and applied to the Grid.
	* @param event. The custom event. Custom data event was created with: ev.detail(type)
   *  type - The type of dropdown where the batch change occurred. Possible values: 'filter', 'sort', 'search', 'group', 'format', 'customize'.
   */
  onBatchChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Triggered when a user clicks the 'Cancel' button in the header dropdown of a Grid, thereby aborting an ongoing batch operation. This event allows you to handle cleanup or UI updates when a batch process is intentionally stopped before completion.
	* @param event. The custom event. Custom data event was created with: ev.detail(type)
   *  type - The type of dropdown where the cancellation occurred. Possible values: 'filter', 'sort', 'search', 'group', 'format', 'customize'.
   */
  onBatchCancel?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Fires whenever the selection within the Grid changes. During drag selection, this event is emitted both at the beginning of the drag operation and again when the selection is completed, allowing you to respond to both initiation and completion of drag-based selection changes.
	* @param event. The custom event. Custom data event was created with: ev.detail(started, finished, originalEvent)
   *  started - Set to <em>true</em> when selection begins; <em>false</em> otherwise.
   *  finished - Set to <em>true</em> when selection ends; <em>false</em> otherwise.
   *  originalEvent - The native DOM event (pointer, touch, or mouse) that triggered the selection change.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Triggered when the user clicks on a column header in a table or grid, typically to initiate actions such as sorting, filtering, or displaying additional options related to that column. This event provides context about which column was interacted with, allowing developers to implement responsive behaviors based on user actions.
	* @param event. The custom event. Custom data event was created with: ev.detail(column, dataField, originalEvent)
   *  column - The column configuration object of the clicked header.
   *  dataField - The data field associated with the clicked column.
   *  originalEvent - The native DOM event (pointer, touch, or mouse) that triggered the click.
   */
  onColumnClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Fires when a user double-clicks on a column header, typically to initiate actions such as resizing, sorting, or customizing the corresponding column. The event provides information about the specific column that was interacted with, allowing you to implement custom logic in response to the double-click.
	* @param event. The custom event. Custom data event was created with: ev.detail(column, dataField, originalEvent)
   *  column - The column configuration object of the double-clicked header.
   *  dataField - The data field associated with the double-clicked column.
   *  originalEvent - The native DOM event (pointer, touch, or mouse) that triggered the double-click.
   */
  onColumnDoubleClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Triggered when the user adjusts the width of a column by dragging the boundary line in the column header. This event fires continuously as the header boundary is moved, allowing real-time updates to the column size.
	* @param event. The custom event. Custom data event was created with: ev.detail(column, dataField, oldWidth, width)
   *  column - The resized column's configuration object.
   *  dataField - The data field associated with the resized column.
   *  oldWidth - The previous width of the column.
   *  width - The new width of the column after resizing.
   */
  onColumnResize?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Fires when the user begins dragging a column to change its position within the column order. This event marks the start of a column reordering operation and can be used to implement visual feedback, custom logic, or to track changes in the column arrangement during a drag-and-drop interaction.
	* @param event. The custom event. Custom data event was created with: ev.detail(column, dataField, index, originalEvent)
   *  column - The configuration object of the column being dragged.
   *  dataField - The data field associated with the column being dragged.
   *  index - The index of the column within the grid.
   *  originalEvent - The native DOM event that initiated the column drag.
   */
  onColumnDragStart?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Triggered whenever a property of a column is modified, either through user interaction (such as editing in the UI) or by programmatic changes made via code. This event allows you to respond to any updates in column properties, regardless of how the change was initiated.
	* @param event. The custom event. Custom data event was created with: ev.detail(column, propertyName, oldValue, value)
   *  column - The column whose property was changed.
   *  propertyName - The name of the property that was changed.
   *  oldValue - The previous value(s) of the changed property.
   *  value - The new value(s) of the changed property.
   */
  onColumnChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is fired repeatedly for as long as the user is actively dragging a column. It provides real-time updates during the entire drag operation, allowing you to implement responsive behaviors or visual feedback as the column is being repositioned.
	* @param event. The custom event. Custom data event was created with: ev.detail(column, dataField, index, data, originalEvent)
   *  column - The column being dragged.
   *  dataField - The data field of the dragged column.
   *  index - The current index of the dragged column.
   *  data - An object providing drag feedback. Contains HTML elements 'feedback' and 'feedbackLine' shown during dragging, and methods 'error()', 'success()', and 'data()' for managing feedback state.
   *  originalEvent - The original browser event that triggered the dragging.
   */
  onColumnDragging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Triggered when the user releases the mouse button to drop a column after dragging it, indicating the end of a column drag-and-drop operation. This event can be used to update the column order or perform actions based on the new column arrangement.
	* @param event. The custom event. Custom data event was created with: ev.detail(column, dataField, index, newIndex, data, originalEvent)
   *  column - The column that was dragged.
   *  dataField - The data field of the dragged column.
   *  index - The original index of the column before dragging.
   *  newIndex - The new index of the column after dragging.
   *  data - An object providing drag feedback. Contains HTML elements 'feedback' and 'feedbackLine' shown during dragging, and methods 'error()', 'success()', and 'data()' for managing feedback state.
   *  originalEvent - The original browser event that finalized the dragging.
   */
  onColumnDragEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Fires when the user changes the order of columns by dragging and repositioning a column within the interface. This event occurs after the column has been successfully moved to its new position.
	* @param event. The custom event. Custom data event was created with: ev.detail(column, dataField, index, newIndex, data, originalEvent)
   *  column - The reordered column.
   *  dataField - The data field of the reordered column.
   *  index - The column's previous index before reorder.
   *  newIndex - The column's new index after reorder.
   *  data - An object providing drag feedback. Contains HTML elements 'feedback' and 'feedbackLine' shown during dragging, and methods 'error()', 'success()', and 'data()' for managing feedback state.
   *  originalEvent - The original browser event associated with the reorder.
   */
  onColumnReorder?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Triggered when a user submits a new comment within the row edit dialog, typically as part of editing or updating a row's information. This event provides the context of the edited row and the content of the newly added comment, allowing for real-time updates or further processing.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, comment)
   *  id - The unique ID of the row where the comment was added.
   *  comment - The comment object containing: 'text' (string) - the comment text, 'id' (string) - unique comment ID, 'userId' (string | number) - ID of the user who added the comment, and 'time' (Date) - timestamp of the comment.
   */
  onCommentAdd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Triggered when a user deletes or removes a comment while editing a row using the row edit dialog. This event occurs after the comment has been removed from the input field within the dialog, allowing you to handle any additional logic, such as updating the UI, saving changes, or notifying other components.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, comment)
   *  id - The unique ID of the row from which the comment was removed.
   *  comment - The comment object containing: 'text' (string) - the comment text, 'id' (string) - unique comment ID, 'userId' (string | number) - ID of the user who added the comment, and 'time' (Date) - timestamp of the comment.
   */
  onCommentRemove?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Occurs when a user selects (clicks) an item from the context menu, typically accessed via right-click or long-press. This event enables developers to handle specific actions in response to the user's menu item selection.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, dataField, command)
   *  id - The unique ID of the row associated with the context menu item.
   *  dataField - The data field of the clicked context menu item.
   *  command - The command object representing the action associated with the clicked menu item.
   */
  onContextMenuItemClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Triggered when the user begins dragging a table row, typically by clicking and holding on the row before moving it. This event signals the start of a drag-and-drop operation for reordering or repositioning rows within the table.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, id, index, originalEvent)
   *  row - The row being dragged.
   *  id - The unique ID of the row being dragged.
   *  index - The index of the row within the grid.
   *  originalEvent - The original browser event that initiated the row drag.
   */
  onRowDragStart?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered repeatedly in real-time as the user drags a row, firing continuously throughout the entire duration of the dragging action.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, id, index, data, originalEvent)
   *  row - The row currently being dragged.
   *  id - The unique ID of the dragged row.
   *  index - The index of the row being dragged.
   *  data - An object providing drag feedback. Contains HTML elements 'feedback' and 'feedbackLine' shown during dragging, and methods 'error()', 'success()', and 'data()' for managing feedback state.
   *  originalEvent - The original browser event that triggered the dragging.
   */
  onRowDragging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered upon completion of a row drag operation, regardless of whether the row’s position within the list was changed. It indicates the end of the drag interaction, and can be used to perform additional actions or cleanup tasks after users have finished dragging a row.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, id, index, newIndex, data, originalEvent)
   *  row - The dragged row object.
   *  id - The unique identifier of the dragged row.
   *  index - The original index of the row before dragging.
   *  newIndex - The new index of the row after dragging.
   *  data - The dragging feedback object containing HTML elements displayed during the drag operation. Includes `feedback` and `feedbackLine` elements, and methods `error()`, `success()`, and `data()` to set or retrieve the drag state and data.
   *  originalEvent - The original pointer, touch, or mouse event that triggered the drag.
   */
  onRowDragEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Triggered when a row has been successfully moved to a new position within the grid, indicating that the row reordering operation is complete and the grid's data order has been updated accordingly.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, id, index, newIndex, data, originalEvent)
   *  row - The reordered row object.
   *  id - The unique identifier of the reordered row.
   *  index - The original index of the row before reordering.
   *  newIndex - The new index of the row after reordering.
   *  data - The dragging feedback object containing HTML elements displayed during the reorder operation. Includes `feedback` and `feedbackLine` elements, and methods `error()`, `success()`, and `data()` to set or retrieve the drag state and data.
   *  originalEvent - The original pointer, touch, or mouse event that triggered the reorder.
   */
  onRowReorder?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a user expands a row in either TreeGrid or Grouping mode, causing the hidden child rows or grouped data associated with that row to be displayed. It allows you to respond when hierarchical data or grouped content is revealed within the grid.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, id, originalEvent)
   *  row - The expanded row object.
   *  id - The unique identifier of the expanded row.
   *  originalEvent - The original pointer, touch, or mouse event that caused the expansion.
   */
  onRowExpand?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Triggered when a row is collapsed in TreeGrid or Grouping mode, causing any nested child rows or grouped content under that row to be hidden from view. This event allows you to respond when users collapse a parent row, such as updating UI elements or loading data dynamically.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, id, originalEvent)
   *  row - The collapsed row object.
   *  id - The unique identifier of the collapsed row.
   *  originalEvent - The original pointer, touch, or mouse event that caused the collapse.
   */
  onRowCollapse?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Triggered when a user clicks anywhere within a table row, allowing you to respond to row selection events, such as highlighting the row, displaying detailed information, or performing related actions.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, originalEvent, id, data, isRightClick, pageX, pageY)
   *  row - The clicked row object.
   *  originalEvent - The original pointer, touch, or mouse event for the click.
   *  id - The unique identifier of the clicked row.
   *  data - The data object associated with the clicked row.
   *  isRightClick - Indicates whether the right mouse button was used for the click.
   *  pageX - The X-coordinate of the click relative to the page.
   *  pageY - The Y-coordinate of the click relative to the page.
   */
  onRowClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a user rapidly double-clicks on any row within the data grid or table. It can be used to initiate actions such as opening a detailed view, activating edit mode, or performing custom operations related to the selected row. The event handler receives contextual information about the clicked row, allowing for targeted interactions.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, originalEvent, id, data, isRightClick, pageX, pageY)
   *  row - The double-clicked row object.
   *  originalEvent - The original pointer, touch, or mouse event for the double-click.
   *  id - The unique identifier of the double-clicked row.
   *  data - The data object associated with the double-clicked row.
   *  isRightClick - Indicates whether the right mouse button was used for the double-click.
   *  pageX - The X-coordinate of the double-click relative to the page.
   *  pageY - The Y-coordinate of the double-click relative to the page.
   */
  onRowDoubleClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Triggered when the user manually adjusts the height of a table row, such as by dragging the row's resize handle. This event allows you to respond to row height changes, for example, by updating layout or saving the new row height.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, id, oldHeight, height)
   *  row - The resized row object.
   *  id - The unique identifier of the resized row.
   *  oldHeight - The height of the row before resizing.
   *  height - The new height of the row after resizing.
   */
  onRowResize?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Triggered when the user clicks the star icon located in a row header, toggling the starred (favorite) status of the corresponding row. This event allows you to handle actions such as marking or unmarking the row as a favorite in response to user interaction.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, originalEvent, id, value)
   *  row - The row associated with the star toggle.
   *  originalEvent - The original pointer, touch, or mouse event for the star click.
   *  id - The unique identifier of the starred row.
   *  value - Boolean indicating whether the row is now starred (`true`) or unstarred (`false`).
   */
  onRowStarred?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Fires when a user clicks on any individual cell within the grid, providing information about the selected cell’s row, column, and associated data. This event enables you to implement custom actions in response to cell clicks, such as editing cell content, displaying detailed information, or triggering other interactive features.
	* @param event. The custom event. Custom data event was created with: ev.detail(cell, originalEvent, id, dataField, value, isRightClick, pageX, pageY)
   *  cell - The clicked cell object.
   *  originalEvent - The original pointer, touch, or mouse event for the click.
   *  id - The unique identifier of the row containing the clicked cell.
   *  dataField - The data field (column identifier) of the clicked cell.
   *  value - The value of the clicked cell.
   *  isRightClick - Indicates whether the right mouse button was used for the click.
   *  pageX - The X-coordinate of the click relative to the page.
   *  pageY - The Y-coordinate of the click relative to the page.
   */
  onCellClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Fires when a user rapidly double-clicks on any cell within the grid, allowing you to handle actions such as entering edit mode, displaying detailed information, or executing custom logic specific to the selected cell.
	* @param event. The custom event. Custom data event was created with: ev.detail(cell, originalEvent, id, dataField, value, isRightClick, pageX, pageY)
   *  cell - The double-clicked cell object.
   *  originalEvent - The original pointer, touch, or mouse event for the double-click.
   *  id - The unique identifier of the row containing the double-clicked cell.
   *  dataField - The data field (column identifier) of the double-clicked cell.
   *  value - The value of the double-clicked cell.
   *  isRightClick - Indicates whether the right mouse button was used for the double-click.
   *  pageX - The X-coordinate of the double-click relative to the page.
   *  pageY - The Y-coordinate of the double-click relative to the page.
   */
  onCellDoubleClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Triggered when a user completes editing a cell or an entire row. This event supplies comprehensive information about the edit operation, including the updated values, the specific cells or rows affected, and any changes made by the user. It enables developers to capture and respond to user edits with detailed context.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, dataField, row, column, cell, data, value)
   *  id - The unique identifier of the row that was edited. This helps to locate the specific row within the grid.
   *  dataField - The data field key (column identifier) of the cell that was edited.
   *  row - The full row object that contains the edited cell, representing the row's current state after editing.
   *  column - The column object corresponding to the edited cell, including its metadata and configuration.
   *  cell - The specific cell object that was edited, providing granular access to the edited cell's properties.
   *  data - An object representing the entire data record of the edited row, reflecting all current values post-edit.
   *  value - The new value entered by the user in the edited cell.
   */
  onEndEdit?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever filters within the grid are added, updated, or removed. It allows developers to monitor and respond to any changes in the grid’s filtering criteria. By handling this event, you can implement custom logic—such as updating UI elements, fetching new data, or logging filter modifications—whenever the user changes how data is filtered in the grid.
	* @param event. The custom event. Custom data event was created with: ev.detail(columns, data, expressions)
   *  columns - An array of column objects currently involved in filtering, providing access to each filtered column’s properties.
   *  data - An array of objects each containing a column’s data field and its associated FilterGroup object. The FilterGroup describes the filter conditions applied to that column. Example: { dataField: string, filter: object }.
   *  expressions - An array of filter expression objects, each with a column’s data field and a human-readable filter expression string. These expressions define the applied filters, e.g., 'startsWith B' or complex logical expressions like 'contains Andrew or contains Nancy'. Supported operators include '=', 'EQUAL', '<>', 'NOT_EQUAL', '!=', '<', 'LESS_THAN', '>', 'GREATER_THAN', '<=', 'LESS_THAN_OR_EQUAL', '>=', 'GREATER_THAN_OR_EQUAL', 'starts with', 'STARTS_WITH', 'ends with', 'ENDS_WITH', 'EMPTY', 'CONTAINS', 'DOES_NOT_CONTAIN', 'NULL', and 'NOT_NULL'.
   */
  onFilter?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Triggered whenever the grid's grouping configuration is modified—for example, when columns are added to or removed from the grouped columns. This event allows you to respond to user actions that change how data is grouped in the grid.
	* @param event. The custom event. Custom data event was created with: ev.detail(groups)
   *  groups - An array of data fields that represent the columns currently used for grouping the grid’s rows. The order of fields reflects the grouping hierarchy.
   */
  onGroup?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Emitted whenever the dialog interface for adding a new column or editing an existing column is displayed to the user. This event is ideal for implementing custom logic, such as pre-filling form fields, dynamically modifying dialog content, or applying additional UI enhancements when the column dialog becomes visible.
	* @param event. The custom event. Custom data event was created with: ev.detail(dataField)
   *  dataField - The data field of the column currently being added or edited via the dialog.
   */
  onOpenColumnDialog?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Fires when the column addition or editing dialog is closed, regardless of whether the user saves their changes or cancels the operation. This event allows developers to perform actions after the dialog is dismissed, such as updating the UI or resetting form states.
	* @param event. The custom event. Custom data event was created with: ev.detail(dataField)
   *  dataField - The data field of the column involved in the dialog that was just closed.
   */
  onCloseColumnDialog?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Triggered whenever the grid’s dimensions are altered, either through user-initiated resizing or programmatic changes to the layout. This event enables developers to implement responsive UI updates, such as repositioning elements or recalculating layout parameters to ensure optimal display across different screen sizes and interactions.
	* @param event. The custom event.    */
  onResize: ((ev: Event) => any) | null;
  /**
   * Triggered when a user performs a press-and-hold gesture on a grid row, maintaining contact for at least 300 milliseconds. This event is commonly used to open context menus or initiate specialized touch-based interactions, enhancing the user experience on touch-enabled devices.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, originalEvent)
   *  row - The row object that was tapped and held.
   *  originalEvent - The original input event object ('pointer', 'touch', or 'mouse'), which provides device-specific details.
   */
  onRowTap?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Triggered when a user performs a press-and-hold gesture—touching and continuously holding a specific cell in the grid for at least 300 milliseconds. This event enables advanced touch interactions, such as displaying context menus, initiating drag-and-drop, or activating additional cell options. It is designed to distinguish intentional long presses from casual taps, ensuring a responsive and intuitive touch interface.
	* @param event. The custom event. Custom data event was created with: ev.detail(cell, originalEvent)
   *  cell - The cell object that was tapped and held.
   *  originalEvent - The original input event object ('pointer', 'touch', or 'mouse') providing context about the interaction.
   */
  onCellTap?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Triggered whenever the user switches pages using the grid’s pagination controls. This event allows you to detect and respond to page changes, such as updating data, fetching new records, or performing additional actions whenever a different page is selected.
	* @param event. The custom event.    */
  onPage?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Triggered whenever columns are added to, removed from, or reordered within the grid’s sorting configuration. This event enables developers to monitor changes in the sorting criteria, update the sorting state, and track the current sort order and priority of columns in the grid.
	* @param event. The custom event. Custom data event was created with: ev.detail(columns, data, sortDataFields, sortDataTypes, sortOrders, sortIndexes)
   *  columns - An array of column objects currently sorted, including their configurations and properties.
   *  data - An array of objects describing each sorted column with its data field, sorting order ('asc' or 'desc'), and priority index indicating sorting precedence in multi-column sorts.
   *  sortDataFields - An array of the data fields of all currently sorted columns.
   *  sortDataTypes - An array of data types ('string', 'date', 'boolean', or 'number') corresponding to the sorted columns.
   *  sortOrders - An array of sorting directions ('asc' or 'desc') applied to the sorted columns.
   *  sortIndexes - An array of integers representing the sorting priority for each column in cases of multi-column sorting, where lower index means higher priority.
   */
  onSort?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Triggered when the user scrolls to the absolute bottom of the grid component. This event is typically used to implement infinite scrolling or lazy loading by allowing you to detect when additional data needs to be loaded as the user reaches the end of the currently displayed content.
	* @param event. The custom event.    */
  onScrollBottomReached?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Triggered when the user scrolls to the very top edge of the grid. This event allows you to perform actions such as refreshing the grid's contents, loading previous or additional data, or updating UI elements in response to the scroll position. Use this event to enhance data loading and user experience when users reach the beginning of the grid.
	* @param event. The custom event.    */
  onScrollTopReached?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Inserts a new row into the grid interface. When batch editing mode is enabled, the new row exists only temporarily within the current batch session and will not be permanently stored until the user explicitly saves all changes made during the session. If the batch edit session is discarded, the newly added row will not be saved.
   * @param {any} data. An object representing the row data, matching the structure of the grid's data source.
   * @param {boolean} insertAtBottom?. Determines whether the new row is added at the bottom (true) or top (false) of the grid. Defaults to true.
   * @param  callback?. A callback function invoked after the row is successfully added. Receives the newly added row as an argument.
   */
  addRow(data: any, insertAtBottom?: boolean, callback?: {(row: GridRow): void}): void;
  /**
   * Inserts a new row into the grid and automatically activates edit mode for that row, allowing users to begin entering data right away. If batch editing is enabled, any changes made will be temporarily stored and will not be saved to the data source until the batch edit session is explicitly committed. This helps prevent partial or unsaved changes from being applied before the user finalizes all edits in the session.
   * @param {string} position?. Specifies the position where the new row will be added. Acceptable values are 'near' (top) or 'far' (bottom).
   * @returns {boolean}
   */
  addNewRow(position?: string): boolean;
  /**
   * Dynamically adds a new column to the grid at runtime, allowing users to modify the grid’s structure without requiring a page reload. This enables real-time updates to the grid layout based on user actions or application logic.
   * @param {any} column. A column definition or array of columns to add. Refer to the grid's 'columns' property for the expected structure.
   * @returns {boolean}
   */
  addNewColumn(column: any): boolean;
  /**
   * Adds one or more unbound rows to the grid, positioned at either the top or the bottom, as specified. Unbound rows are not initially included in the grid’s data source; instead, they serve as editable placeholders. Once a user enters or modifies data in these rows, the new values are incorporated into the grid’s data source, making the unbound rows part of the main dataset. This feature is useful for allowing users to quickly add new entries or perform custom calculations directly within the grid interface.
   * @param {number} count. The number of unbound rows to add.
   * @param {string} position?. The position to insert the unbound rows. Accepts 'near' for top or 'far' for bottom.
   * @returns {boolean}
   */
  addUnboundRow(count: number, position?: string): boolean;
  /**
   * Enhances and applies custom filter criteria to a specific column within the data grid. Accepts both single and multiple filter expressions, allowing for complex filtering logic using logical operators such as "and" and "or". For example, to filter the "lastName" column for values that contain either "burke" or "peterson", use: `grid.addFilter('lastName', ['CONTAINS "burke"', 'or', 'CONTAINS "peterson"'])`. The method also supports numeric filters (e.g., `GREATER_THAN 100`), a variety of comparison operators (such as `EQUALS`, `LESS_THAN`, `STARTS_WITH`, etc.), and can be used to combine different conditions for precise data selection.
   * @param {string} dataField. The data field name of the column to filter, e.g., 'firstName'.
   * @param {string} filter. The filter expression(s) to apply. Examples include 'startsWith B', ['contains Andrew or contains Nancy'], or ['quantity', '<= 3 and >= 8']. Supported operators: '=', 'EQUAL', '<>', 'NOT_EQUAL', '!=', '<', 'LESS_THAN', '>', 'GREATER_THAN', '<=', 'LESS_THAN_OR_EQUAL', '>=', 'GREATER_THAN_OR_EQUAL', 'starts with', 'STARTS_WITH', 'ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS', 'DOES_NOT_CONTAIN', 'NULL', 'NOT_NULL'.
   * @param {boolean} refreshFilters?. If set to false, allows multiple filters to be added without triggering unnecessary renders. Useful when applying multiple filters sequentially.
   */
  addFilter(dataField: string, filter: string, refreshFilters?: boolean): void;
  /**
   * Organizes the grid rows into groups based on the values in the specified column's data field. This functionality requires that grouping is enabled on the grid component. When activated, rows sharing the same value in the chosen column will be visually grouped together, allowing for easier data analysis and navigation.
   * @param {string} dataField. The data field of the column to group by, e.g., 'firstName'.
   */
  addGroup(dataField: string): void;
  /**
   * Enhances the grid's data display by applying a sorting order based on the specified column's data field. This function requires sorting to be enabled on the grid and sorts the rows according to the selected column's values, either in ascending or descending order as specified. If sorting is not enabled, this operation will have no effect.
   * @param {string} dataField. The data field of the column to sort, e.g., 'firstName'.
   * @param {string} sortOrder. The sort direction to apply. Use 'asc' for ascending or 'desc' for descending.
   */
  addSort(dataField: string, sortOrder: string): void;
  /**
   * Dynamically resizes each grid row to fit its content, ensuring that text and elements are fully visible without being cut off or overlapping. This enhances readability and provides a more user-friendly and visually consistent grid layout.
   */
  autoSizeRows(): void;
  /**
   * Dynamically resizes the width of each grid column based on its content and header label, so that all cell values and headers are fully visible without clipping or excessive whitespace. This ensures an optimal and polished display by automatically fitting columns to their widest required size.
   */
  autoSizeColumns(): void;
  /**
   * Automatically resizes an individual grid column to precisely fit its content by dynamically measuring the widest content among its cells and header label, and adjusting the column width accordingly for optimal display without unnecessary extra space or truncation.
   * @param {string} dataField?. The data field name of the column to auto-size, e.g., 'firstName'. Optional; if omitted, no action is taken.
   */
  autoSizeColumn(dataField?: string): void;
  /**
   * Returns a boolean value that indicates whether every row in the grid is currently selected. This means the method will return true only if all rows within the grid have been selected; otherwise, it returns false.
   * @returns {boolean}
   */
  areAllRowsSelected(): boolean;
  /**
   * Pauses Grid rendering and UI refresh operations, allowing you to make multiple property changes or method calls without triggering repeated re-renders. This is particularly useful for optimizing performance during batch updates. After you finish making all necessary changes, call 'endUpdate()' to resume rendering and apply all updates to the UI.
   */
  beginUpdate(): void;
  /**
   * Initiates edit mode on a specified row, cell, or column within the grid programmatically. Triggers the appropriate editor component to appear in the Grid UI, allowing users to modify the data directly within the selected grid area.
   * @param {string | number} rowId. The unique identifier of the row to edit.
   * @param {string} dataField?. The column's data field to edit. Optional for full row editing.
   */
  beginEdit(rowId: string | number, dataField?: string): void;
  /**
   * Removes all active filters from the Grid, restoring the original unfiltered data view. After clearing the filters, the Grid data is automatically refreshed to display all records, and any filter input fields are reset to their default, empty state.
   */
  clearFilter(): void;
  /**
   * Restores the grid to its original, ungrouped state by removing all active row groupings. All grouped rows are expanded and displayed as individual rows, and the Grid view automatically refreshes to reflect these changes.
   */
  clearGroups(): void;
  /**
   * Removes all active sorting from the Grid columns, resetting them to their unsorted state and restoring the data to its original order as initially loaded or received.
   */
  clearSort(): void;
  /**
   * Clears all current selections within the grid, including rows, cells, and columns. This action removes any visual highlights or selection indicators, ensuring that no items remain selected in the interface.
   */
  clearSelection(): void;
  /**
   * Cancels the ongoing edit operation by closing any active editor interface and reverting all unsaved changes made during the current session. This action ensures that no modifications are saved and the data returns to its original state prior to editing.
   */
  cancelEdit(): void;
  /**
   * Selects and checks the checkbox for a specified TreeGrid row, visually indicating that the row is active or selected. This action updates the row's state to reflect user selection and may trigger related event handlers or selection-dependent functionality within the TreeGrid.
   * @param {string | number} rowId. The unique identifier of the row to check.
   */
  checkRow(rowId: string | number): void;
  /**
   * Selects and checks all checkboxes associated with rows in a TreeGrid or grouped data structure, ensuring that every row, including nested and grouped items, is marked as selected. This process guarantees comprehensive selection across all hierarchical levels and groupings within the dataset.
   */
  checkAllRows(): void;
  /**
   * Removes all rows and associated data from the Grid, and clears any current user selections. After performing this action, the Grid will display a 'No Rows' message to indicate that it is empty.
   */
  clearRows(): void;
  /**
   * Closes the currently open column menu in a data grid or table interface. This action is typically triggered by user interactions such as right-clicking on a column header or clicking a column menu button, allowing users to dismiss the column-specific options or actions menu.
   */
  closeMenu(): void;
  /**
   * Collapses a designated TreeGrid or grouping row, effectively hiding all of its nested child rows from view. This action allows users to condense hierarchical data structures, making it easier to navigate and focus on higher-level information within the grid.
   * @param {string | number} rowId. The unique identifier of the row to collapse.
   */
  collapseRow(rowId: string | number): void;
  /**
   * Collapses all currently expanded rows within the TreeGrid or Grouping components, reducing the dataset display to only show parent rows or top-level groups. This action hides all child rows and nested data, providing a simplified, minimized overview of the dataset structure.
   */
  collapseAllRows(): void;
  /**
   * Generates a visual chart representation based on the current data within the Grid. Chart generation requires that the charting feature is enabled in the system configuration. This function allows users to visualize the Grid's dataset in supported chart formats.
   * @param {string} type. Type of chart to create (e.g., 'pie', 'bar', 'line').
   * @param {any} dataSource?. The data source for the chart. If omitted, the Grid's current dataset is used.
   */
  createChart(type: string, dataSource?: any): void;
  /**
   * Removes a specific row from the Grid component. If batch editing is enabled, the row will be marked for deletion but the change will not be permanently applied until the batch is saved. This means the deletion is pending and can be reverted before saving.
   * @param {string | number} rowId. The unique identifier of the row to delete.
   * @param  callback?. Function executed after row deletion. Receives the deleted row as a parameter.
   */
  deleteRow(rowId: string | number, callback?: {(row: GridRow): void}): void;
  /**
   * Scrolls the Grid to ensure that a specific row or cell is visible to the user. If the target row or cell is located on a different page, the Grid will automatically navigate to the appropriate page and then scroll to the desired position. This ensures that the requested row or cell is brought into view, regardless of its current visibility or page location.
   * @param {string | number} rowId. The unique identifier of the row.
   * @param {string} dataField?. The column's data field to focus on. If omitted, scrolls to the row only.
   * @returns {boolean}
   */
  ensureVisible(rowId: string | number, dataField?: string): boolean;
  /**
   * Completes the editing process by applying all pending changes, saving the updated content, and closing any open editor instances. This action ensures that all modifications are confirmed and no unsaved edits remain.
   */
  endEdit(): void;
  /**
   * Restores the Grid's normal rendering process and updates the user interface following a call to beginUpdate(). Use endUpdate() to apply any changes made during the update suspension and ensure the Grid displays the latest data and layout.
   * @param {boolean} refresh?. If true, forces a full Grid refresh after updates.
   */
  endUpdate(refresh?: boolean): void;
  /**
   * Expands a specific row in a TreeGrid or grouped table to reveal its associated child rows. You can expand nested groups or hierarchical levels by specifying the row key using dot notation (e.g., "0.2.1" for the child of a nested group). This allows for precise targeting and interactive exploration of hierarchical data structures within the grid.
   * @param {string | number} rowId. The unique identifier of the row to expand.
   */
  expandRow(rowId: string | number): void;
  /**
   * Expands all grouped rows in the grid up to the specified group level. For instance, executing `grid.expandRowsToGroupLevel(1);` will expand all groups at the root (level 1), making their immediate child rows visible. Groups nested within these child rows remain collapsed unless the group level parameter is increased. This function is useful for programmatically controlling the grid's row expansion state based on grouping hierarchy.
   * @param {number} level. The group level up to which the rows should be expanded. Level 0 is the root, level 1 is the first nested group, and so forth.
   */
  expandRowsToGroupLevel(level: number): void;
  /**
   * Expands all rows within the grid that utilize TreeGrid or grouping functionality, automatically revealing every nested child row at all levels of hierarchy and making the complete data structure fully visible. This ensures that all parent and descendant rows are displayed, allowing users to view the entire nested dataset without manual expansion.
   */
  expandAllRows(): void;
  /**
   * This function allows you to export the grid's data into various supported file formats, including .XLSX, .PDF, .JSON, .XML, .CSV, .TSV, .HTML, .JPEG, and .PNG. The way the data is exported—such as file formatting, included columns or rows, applied filters, and export settings—is determined by the options set in the grid’s dataExport property. This ensures that the exported file matches your specified requirements and preferences.
   * @param {string} Dataformat. Specifies the export format. Supported formats: 'xlsx', 'pdf', 'json', 'xml', 'csv', 'tsv', 'html', 'png', 'jpeg'.
   * @param {any} callback?. Optional. A function that formats the exported values conditionally. See Smart Export Documentation for details.
   * @param {any} dataCallback?. Optional. A function to modify the entire exported data object prior to export.
   */
  exportData(Dataformat: string, callback?: any, dataCallback?: any): void;
  /**
   * Searches the grid for rows that match the specified query criteria and returns an array containing the IDs of all matching rows. Supports multiple search modes, including:<br/><br/>- Searching for values in any column (global search)<br/>- Searching specific columns by name<br/>- Applying comparison operators (e.g., equals, contains, less than, greater than) for advanced filtering<br/><br/>This functionality allows for flexible and precise row selection based on user-defined search parameters.
   * @param {string} query. The search string or value to find within the grid rows.
   * @param {string} dataField?. Optional. Specifies the column data field to restrict the search to.
   * @param {string} condition?. Optional. Condition to apply for the search. Supported conditions: '=', 'EQUAL', '<>', 'NOT_EQUAL', '!=', '<', 'LESS_THAN', '>', 'GREATER_THAN', '<=', 'LESS_THAN_OR_EQUAL', '>=', 'GREATER_THAN_OR_EQUAL', 'starts with', 'STARTS_WITH', 'ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS', 'DOES_NOT_CONTAIN', 'NULL', 'NOT_NULL'.
   * @returns {any[]}
   */
  find(query: string, dataField?: string, condition?: string): any[];
  /**
   * Scans the grid to identify all cells that match the specified query. Returns an array of arrays, where each inner array represents a matching cell and contains the following information: the row ID, the data field (column name), and the cell's value. The query supports searching for multiple values by separating them with commas; each value will be matched independently against the cells.
   * @param {string} query. The search string or multiple comma-separated strings to find in grid cells.
   * @returns {any[]}
   */
  findCells(query: string): any[];
  /**
   * Applies a global filter that searches for the provided query across all columns in the grid, returning rows that contain a match in any column. Optionally, you can limit the filtering to specific data types—such as 'string', 'boolean', 'date', or 'number'—so that only columns of the selected type(s) are considered when matching the query. This allows for more precise and targeted filtering behavior.
   * @param {string} query. The filter expression to apply to all columns.
   * @param {string} dataType?. Optional. Filter rows only by columns matching this data type: 'string', 'boolean', 'date', 'number'.
   */
  filterBy(query: string, dataType?: string): void;
  /**
   * Programmatically navigates the grid to a specified page index, provided that paging is enabled. Use this method to set the current page of the grid, allowing you to jump to a particular page in response to user actions or custom logic. The page index is zero-based, where 0 refers to the first page."
   * @param {number} index. The zero-based index of the page to navigate to.
   */
  goToPage(index: number): void;
  /**
   * Advances to the next page of data in the grid when paging functionality is enabled. If the grid is currently displaying the last available page, this action will have no effect and the page will remain unchanged.
   */
  nextPage(): void;
  /**
   * Triggers navigation to the previous page in the grid when paging functionality is enabled. If the grid is currently displaying the first page, the operation is ignored and the page remains unchanged. This ensures that navigation does not attempt to move before the first available page.
   */
  prevPage(): void;
  /**
   * Navigates to the first page of the data grid when paging functionality is enabled. This action resets the current page index to the first page, displaying the initial set of records in the grid.
   */
  firstPage(): void;
  /**
   * Navigates directly to the final page of the data grid when paging functionality is enabled, allowing users to quickly access the last set of records displayed in the grid.
   */
  lastPage(): void;
  /**
   * Sets focus on and selects a specified cell or an entire row within the grid, clearing any previous selections. This action also updates the keyboard navigation's starting point to the newly focused cell or row, ensuring that subsequent navigation actions will originate from this location.
   * @param {string | number} rowId. The unique identifier of the row to focus and select.
   * @param {string} dataField?. Optional. The data field (column key) of the cell to focus within the specified row. If omitted, the entire row is selected.
   */
  focusAndSelect(rowId: string | number, dataField?: string): void;
  /**
   * Executes a callback function for each individual row in the grid's underlying dataset, regardless of any grouping, filtering, or sorting currently applied to the grid view. This method iterates over all raw data rows, ensuring that the callback is called on every entry as it exists in the original data source, not just the rows that are visible or active in the grid's current state.
   * @param {any} rowCallback. A callback function that receives a row object as its parameter. Example: grid.forEachRow(row => console.log(row.id));
   */
  forEachRow(rowCallback: any): void;
  /**
   * Executes a callback function for each row that is currently visible in the grid after all active filters and sorting have been applied. This method operates strictly on the rows as they appear in the current grid view, ensuring that hidden, filtered out, or unsorted rows are excluded. The iteration respects the latest grid state, guaranteeing that only rows displayed to the user are processed by the callback function.
   * @param {any} rowCallback. A callback function that receives a row object as its parameter. Example: grid.forEachRowAfterFilterAndSort(row => console.log(row.id));
   */
  forEachRowAfterFilterAndSort(rowCallback: any): void;
  /**
   * Returns the maximum allowable scroll position for the grid's vertical scrollbar. This value represents the greatest vertical offset to which users can scroll within the grid's content area. It can be used to determine the scrollable range or to programmatically set the vertical scrollbar to its lowest (bottom-most) position.
   * @returns {number}
   */
  getVerticalScrollMax(): number;
  /**
   * Returns the current vertical scroll position of the grid, representing the number of pixels the grid’s content has been scrolled vertically from the top. This value corresponds to the position of the grid's vertical scrollbar and can be used to determine how far users have scrolled down within the grid.
   * @returns {number}
   */
  getVerticalScrollValue(): number;
  /**
   * Returns the maximum horizontal scroll offset for the grid’s horizontal scrollbar. This value represents the furthest distance (in pixels) that the grid content can be scrolled horizontally. It is useful for programmatically setting, adjusting, or resetting the grid’s horizontal scroll position to ensure full content visibility or to align with specific scroll actions.
   * @returns {number}
   */
  getHorizontalScrollMax(): number;
  /**
   * Retrieves the current horizontal scroll offset of the grid's horizontal scrollbar, indicating how far the grid content has been scrolled from the left edge in pixels. This value can be used to determine the current scroll position or to programmatically control grid scrolling behavior.
   * @returns {number}
   */
  getHorizontalScrollValue(): number;
  /**
   * Retrieves an array of column objects representing every column currently configured in the grid. Each column object contains key properties, including:<br/><br/>- `label`: The display name of the column as shown in the grid header.<br/>- `dataField`: The underlying data field or key this column is bound to in the dataset.<br/>- `dataType`: The type of data displayed in the column (e.g., string, number, date).<br/>- `visible`: A boolean indicating whether the column is currently visible in the grid.<br/>- Additional dynamic state properties, such as the current sort order, filter status, or column width, reflecting any user customizations or interactions.<br/><br/>This comprehensive array allows developers to access both the static configuration and real-time state of each column in the grid.
   * @returns {any}
   */
  getColumns(): any;
  /**
   * Returns an array containing information about all cells that are currently in edit mode within the grid. Each entry in the array typically includes details such as the row and column identifiers for each editable cell, allowing developers to precisely identify and interact with cells that are being edited.
   * @returns {any[]}
   */
  getEditCells(): any[];
  /**
   * Fetches an array of group objects that define the current grouping configuration of the grid. Each group object contains information about the field being grouped by, the group criteria, and any sub-grouping details, providing a comprehensive representation of how the grid's data is organized into groups.
   * @returns {any[]}
   */
  getGroups(): any[];
  /**
   * Returns an object that details the columns currently sorted within a data table. Each key in the object corresponds to a column’s data field name. The value for each key is an object containing:<br/><br/>- `sortOrder`: Specifies the sorting direction for the column, either `'asc'` for ascending or `'desc'` for descending.<br/>- `sortIndex`: Indicates the column’s priority in multi-column sorting, with lower numbers representing higher priority.<br/><br/>This structure allows you to easily determine which columns are sorted, their order of precedence, and the sorting direction applied to each.
   * @returns 
   */
  getSortedColumns(): {[dataField: string]: { sortOrder: string, sortIndex: number }};
  /**
   * Returns an object representing the current selection state of the grid. This includes arrays listing the IDs of selected rows, the identifiers of selected columns, and the coordinates (row ID and data field) of selected cells. Additionally, it specifies the cell that is currently focused by providing its row ID and data field.
   * @returns {any}
   */
  getSelection(): any;
  /**
   * Returns an array in which each element is a two-element array: the first element is the unique row ID, and the second element is the data object associated with that row. When operating in virtual mode, the data object may be empty if the row’s data has not yet been loaded, as data is retrieved on demand.
   * @returns {any[]}
   */
  getSelectedRows(): any[];
  /**
   * Returns an array containing the data objects corresponding to each row currently selected in the grid. Each object in the array represents the underlying data for one selected row, allowing you to access and manipulate the specific records the user has chosen.
   * @returns {any[]}
   */
  getSelectedRowsData(): any[];
  /**
   * Returns an array containing the unique identifiers (IDs) of all rows currently selected by the user within the grid component. Each element in the array corresponds to the ID of a selected row, allowing you to easily reference or manipulate the selected grid items programmatically.
   * @returns {any[]}
   */
  getSelectedRowIds(): any[];
  /**
   * Returns an array containing the indices of the rows that are currently selected in the grid. Each element in the array represents the zero-based position of a selected row, allowing you to identify which rows the user has chosen. If no rows are selected, the array will be empty.
   * @returns {any[]}
   */
  getSelectedRowIndexes(): any[];
  /**
   * Returns an array of selected cells, where each cell is represented as an array structured as [row ID, column field, cell value].  <br/>- **Row ID**: The unique identifier for the row containing the cell.  <br/>- **Column field**: The data field name (or key) corresponding to the column of the cell.  <br/>- **Cell value**: The actual value contained within the cell.  <br/><br/>This structure allows you to easily identify and access the position and value of each selected cell within the data set.
   * @returns {any[]}
   */
  getSelectedCells(): any[];
  /**
   * Returns an array of objects representing the columns that currently have active filters applied. Each object contains details about the filter and is associated with its corresponding column by the column's data field as the key. This allows you to identify which columns are being filtered and access the filter configurations for each.
   * @returns {any}
   */
  getFilteredColumns(): any;
  /**
   * Returns an array containing the data for all rows currently visible in the grid, after applying any active filters. Only rows that meet the filter criteria and are not hidden by filtering will be included in the array. This allows developers to access the up-to-date, filtered data as presented to the user in the grid interface.
   * @returns {any}
   */
  getVisibleRows(): any;
  /**
   * Returns an array of row objects. By default, this represents the currently visible rows after any filters have been applied. When used in TreeGrid or Grouping mode, the array instead reflects the hierarchical structure of rows, including parent-child relationships, according to the current expand/collapse state of groups or tree nodes.
   * @returns {any}
   */
  getViewRows(): any;
  /**
   * Retrieves a detailed JSON object that encapsulates the entire current state of the grid. This includes the active sorting and filtering criteria, column visibility and order, which rows are expanded, any grouping configurations, current pagination settings, and the selection state of rows or cells. The resulting state object is suitable for persisting the grid configuration (such as saving to local storage or a database) and can be used to completely restore the grid to the same state at a later time.
   * @returns {any}
   */
  getState(): any;
  /**
   * Retrieves a comprehensive summary of all changes performed during a batch edit operation. Returns an object with separate arrays for added, updated, and deleted rows. Each array contains detailed objects that include the row ID and pertinent data fields, such as the previous and new values for updates, full data for additions, and identifying information for deletions. This structure allows you to easily track and process all modifications made in the batch.
   * @returns 
   */
  getBatchEditChanges(): { upDated: [{ id: string, dataField: string, oldValue: Object, newValue: Object }], deleted: [{id: string, data: Object}], added: [{id: string, data: Object}] };
  /**
   * Retrieves the value stored in a specific cell of a data grid or table by specifying the unique row ID and the corresponding column data field. This function allows precise access to individual cell data, enabling targeted data retrieval based on both row and column identifiers.
   * @param {string | number} rowId. The unique identifier of the row containing the cell.
   * @param {string} dataField. The data field name of the column (e.g., 'firstName').
   * @returns {any}
   */
  getCellValue(rowId: string | number, dataField: string): any;
  /**
   * Retrieves the column object corresponding to the specified data field. This returned object includes all relevant properties and configuration settings for that column, such as its header label, data type, formatting options, sorting behavior, visibility, and any custom properties defined in the column schema.
   * @param {string} dataField. The data field name of the column to retrieve.
   * @returns {GridColumn}
   */
  getColumn(dataField: string): GridColumn;
  /**
   * Fetches the value of a specified property from a particular column, where the column is identified by its data field name. This function allows you to access detailed configuration or metadata associated with a column in a data structure, such as a table or grid, by referencing the column’s data field.
   * @param {string} dataField. The data field name of the column.
   * @param {string} propertyName. The name of the column property to retrieve (e.g., 'freeze', 'visible', 'width').
   * @returns {any}
   */
  getColumnProperty(dataField: string, propertyName: string): any;
  /**
   * Retrieves the value of a specified property from a database row identified by its unique row ID. This function locates the row using the provided row ID and returns the value associated with the given property key within that row. If the property does not exist, it returns null or an appropriate default value.
   * @param {string | number} rowId. The unique identifier of the row.
   * @param {string} propertyName. The name of the row property to retrieve.
   * @returns {any}
   */
  getRowProperty(rowId: string | number, propertyName: string): any;
  /**
   * Returns the complete row object from the Grid for the row corresponding to the given row ID, including all its associated data and properties.
   * @param {string | number} rowId. The unique identifier of the row.
   * @returns {GridRow}
   */
  getRow(rowId: string | number): GridRow;
  /**
   * Returns the Grid row object at the given zero-based row index, allowing access to all data and properties associated with that specific row. The index parameter should be an integer starting from 0, where 0 corresponds to the first row in the Grid.
   * @param {number} rowIndex. The zero-based index of the row in the grid.
   * @returns {GridRow}
   */
  getRowByIndex(rowIndex: number): GridRow;
  /**
   * Fetches the original data source object directly linked to the given row ID, allowing access to all underlying data fields for that specific row as stored in the source dataset.
   * @param {string | number} rowId. The unique identifier of the row.
   * @returns {any}
   */
  getRowData(rowId: string | number): any;
  /**
   * Returns the unique identifier (row ID) associated with the row at the specified zero-based index. This allows you to access or reference a particular row in the data set by its position within the collection, where the first row has an index of 0.
   * @param {number} rowIndex. The zero-based index of the row.
   * @returns {string | number}
   */
  getRowId(rowIndex: number): string | number;
  /**
   * Determines whether any column’s drop-down menu is currently open and visible within the grid component. This can be used to control grid interactions or UI behaviors that depend on the state of column drop-down menus.
   * @returns {boolean}
   */
  hasMenu(): boolean;
  /**
   * Checks whether any rows in the grid are currently selected by the user. This property or method returns a boolean value: `true` if at least one row is selected, and `false` if no rows are selected. It is typically used to enable or disable actions that depend on row selection, such as editing or deleting entries.
   * @returns {boolean}
   */
  hasSelectedRows(): boolean;
  /**
   * Conceals the details section for the specified row in the grid when the row details feature is enabled, effectively collapsing or hiding any expanded information or custom content associated with that row. This function ensures that only the main data for the row is visible, while any additional details remain hidden until explicitly shown again.
   * @param {string | number} rowId. The unique identifier of the row whose details should be hidden.
   */
  hideDetail(rowId: string | number): void;
  /**
   * Highlights all cells within the column corresponding to the specified data field. If this method is called again with the same data field, it toggles the highlight by removing it if already applied, or reapplying it if previously removed.
   * @param {string} dataField. The data field name of the column to highlight.
   */
  highlightColumn(dataField: string): void;
  /**
   * Emphasizes a specific cell within the grid, identified by its row ID and column data field. Invoking this method again on the same cell will toggle the highlight on or off. You can optionally specify a CSS class to apply custom styling to the highlighted cell, allowing for personalized visual differentiation.
   * @param {string | number} rowId. The unique identifier of the row containing the cell.
   * @param {string} dataField. The data field name of the column.
   * @param {string} className?. Optional CSS class name for custom highlight styling.
   */
  highlightCell(rowId: string | number, dataField: string, className?: string): void;
  /**
   * Enhances visibility of the table row corresponding to the provided row ID by applying a highlight effect. Invoking this method a second time on the same row will remove the highlight, effectively toggling its state. Optionally, you can supply a custom CSS class to override the default highlight styling for tailored appearance.
   * @param {string | number} rowId. The unique identifier of the row to highlight.
   * @param {string} className?. Optional CSS class name for custom highlight styling.
   */
  highlightRow(rowId: string | number, className?: string): void;
  /**
   * Adds a new row to the grid using the provided data object. If batch editing mode is active, the row will be added only as a pending change and will not be permanently committed to the data source until the batch is saved. You may optionally specify the index at which the new row should be inserted; if omitted, the row will be added at the default position (usually at the end). Additionally, you can provide a callback function that will be executed after the row has been successfully added to the grid.
   * @param {any} data. The data object for the new row, matching the grid's data source schema.
   * @param {number} index?. The zero-based index at which to insert the new row. Defaults to the last position if omitted.
   * @param  callback?. Optional callback function executed after the row is inserted, receiving the newly added row object.
   */
  insertRow(data: any, index?: number, callback?: {(row: GridRow): void}): void;
  /**
   * Restored a previously saved grid state by accepting either the name of the saved state or a state object. The state object can include detailed settings such as current sorting and filtering criteria, column visibility and order, expanded or collapsed row status, grouping configurations, paging information (such as current page and page size), and selected rows. This allows the grid to be reconfigured exactly as it was when the state was saved, providing a consistent user experience across sessions.
   * @param {any} state. A state name (string) previously saved or a state object representing the grid configuration to load.
   * @returns {any}
   */
  loadState(state: any): any;
  /**
   * Displays the drop-down menu associated with the column specified by the provided data field identifier, allowing users to access additional actions or settings related to that column.
   * @param {string} dataField. The data field name of the column whose menu to open.
   */
  openMenu(dataField: string): void;
  /**
   * Displays the context menu at the given (left, top) screen coordinates. Ensure that context menu functionality is enabled in the grid settings for this method to work.
   * @param {number} left. The left position (in pixels) where the context menu should appear.
   * @param {number} top. The top position (in pixels) where the context menu should appear.
   */
  openContextMenu(left: number, top: number): void;
  /**
   * Displays the grid’s drop-down user interface when the 'dropDownMode' property is set to true, allowing users to interact with additional grid options or filters presented within the drop-down.
   */
  openDropDown(): void;
  /**
   * Closes the grid's drop-down user interface when the 'dropDownMode' property is set to true, ensuring that any open drop-down menus within the grid are dismissed automatically. This helps maintain a streamlined user experience by hiding drop-down elements when they are no longer needed or when specific actions are triggered.
   */
  closeDropDown(): void;
  /**
   * Generates a printed version of the Grid’s data using the configuration specified in the <em>dataExport</em> property. During printing, the Grid automatically hides scrollbars and adjusts its width and height to ensure that all rows and columns are fully visible on the page, regardless of their original size. This ensures that the entire content of the Grid is included in the printout without any truncation or the need for scrolling. To customize aspects such as page layout, formatting, or which data is included in the print output, adjust the parameters within the <em>dataExport</em> property.
   */
  print(): void;
  /**
   * Triggers a full re-render of the Grid, similar to when it is first initialized. This method reconstructs all underlying HTML elements for rows, columns, and cells from scratch, ensuring a fresh and accurate representation of the data. After rebuilding these elements, it also updates and refreshes the Grid layout to reflect any structural changes. This is useful when foundational data or configuration has changed and a partial update is not sufficient.
   */
  render(): void;
  /**
   * Enhances the Grid display by refreshing its layout to reflect the latest property values, dynamically updating only the necessary elements. This approach optimizes performance by avoiding a complete teardown and reconstruction of all Grid elements, ensuring a smoother and more efficient user experience.
   */
  refresh(): void;
  /**
   * Refreshes only the cells that are currently visible within the Grid’s viewport, rather than updating the entire Grid. This is especially useful for implementing real-time updates or live data feeds, as it enables efficient, seamless rendering of new cell values without triggering a full Grid refresh or losing the user's scroll position.
   */
  refreshView(): void;
  /**
   * Restores the Grid to its original default configuration by removing all user-applied settings, including sorting, filtering, grouping, and selected rows or cells. This action clears any user interactions, ensuring the Grid displays data with no custom modifications.
   */
  resetState(): void;
  /**
   * Removes the filter currently applied to the specified column. Optionally, you can delay the filter refresh process, allowing you to remove filters from multiple columns before triggering an update. This helps optimize performance when batch-processing multiple filter removals.
   * @param {string} dataField. The data field of the column from which to remove the filter, e.g., 'firstName'.
   * @param {boolean} refreshFilters?. If set to false, delays the filter refresh to allow multiple filters to be removed before updating the Grid.
   */
  removeFilter(dataField: string, refreshFilters?: boolean): void;
  /**
   * Removes grouping from the Grid for the specified data field. This method is only applicable when grouping functionality is enabled in the Grid. When called, it will ungroup the records currently grouped by the given field, and the Grid will update to display the data without that grouping criterion.
   * @param {string} dataField. The data field of the group to remove, e.g., 'firstName'.
   */
  removeGroup(dataField: string): void;
  /**
   * Removes any active sorting from the specified column. Use this method to clear the sort order applied to a particular data field, returning the column to its default, unsorted state. This is useful when you want to reset or update the sorting configuration for individual columns within a data table.
   * @param {string} dataField. The data field of the column whose sorting you want to remove, e.g., 'firstName'.
   */
  removeSort(dataField: string): void;
  /**
   * Applies the current sorting settings again to the data and updates the Grid display to reflect any changes, ensuring the data is presented according to the latest sorting configuration.
   */
  refreshSort(): void;
  /**
   * Reverts the Grid to its previous state by discarding all unsaved batch editing changes made by the user. Any modifications entered during the current batch editing session will be canceled, restoring the Grid’s data to its last committed state.
   */
  revertBatchEdit(): void;
  /**
   * Reorders two columns in the Grid by moving the specified source column to a new position either before or after the target reference column. This allows for customizable column arrangements by programmatically shifting the position of columns within the Grid.
   * @param {string | number} dataField. The data field or index of the column to move.
   * @param {string | number} referenceDataField. The data field or index of the target column used as reference for repositioning.
   * @param {boolean} insertAfter?. If true, inserts the first column after the reference column; otherwise, inserts it before.
   */
  reorderColumns(dataField: string | number, referenceDataField: string | number, insertAfter?: boolean): void;
  /**
   * Captures and returns the current state of the Grid as a comprehensive JSON object. The state includes details such as applied sorting and filtering criteria, columns configuration (order, visibility, and sizing), currently expanded rows, grouping settings, paging information (current page, page size), and user selections. Optionally, you can provide a name parameter to uniquely identify and reference the saved state for future retrieval or restoration.
   * @param {string} name?. Optional name to associate with the saved state.
   * @returns {any}
   */
  saveState(name?: string): any;
  /**
   * Applies sorting to the Grid based on the specified data field. You can either add sorting by providing a valid sortOrder (such as 'asc' or 'desc'), or remove sorting from a column by setting the sortOrder parameter to null. This allows dynamic adjustment of Grid sorting criteria, enabling users to sort data as needed or clear sorting on individual columns.
   * @param {string} dataField. The data field of the column to sort, e.g., 'firstName'.
   * @param {string | null} sortOrder. Sort order to apply: 'asc' for ascending, 'desc' for descending, or null to remove sorting.
   */
  sortBy(dataField: string, sortOrder: string | null): void;
  /**
   * Swaps the positions of two specified columns within the Grid layout, effectively changing their order of appearance. This operation updates the Grid so that the selected columns exchange places, while the data and structure of other columns remain unchanged.
   * @param {string | number} dataField. The data field or index of the first column.
   * @param {string | number} referenceDataField. The data field or index of the second column.
   */
  swapColumns(dataField: string | number, referenceDataField: string | number): void;
  /**
   * Saves and applies all batch editing changes made by the end-user, persisting the updates permanently to the Grid's underlying data source. This operation commits all modifications (such as additions, deletions, and edits) performed during the batch editing session, ensuring that the Grid data source accurately reflects the latest user input.
   */
  saveBatchEdit(): void;
  /**
   * Specifies the selection of a particular row, column, or cell within a data table. If a data field (representing a column) is provided along with a row identifier, the selection targets a specific cell at the intersection of the given row and column. If only a row identifier is supplied without a data field, the entire row is selected. Similarly, providing only a data field without a row identifier selects the entire column.
   * @param {string | number} rowId. The identifier of the row to select.
   * @param {string} dataField?. Optional data field of the column to select a specific cell.
   */
  select(rowId: string | number, dataField?: string): void;
  /**
   * Selects a rectangular range of cells within the grid, defined by specifying both the starting and ending row IDs as well as the data field keys (columns). The selection includes all cells that fall within the rectangle formed by these start and end points. The behavior and outcome of this selection may vary based on the current selection mode of the Grid component (for example, whether it supports cell, row, or column selection)."
   * @param {string | number} rowId. The starting row ID of the selection range.
   * @param {string} dataField. The starting column data field of the selection range.
   * @param {string | number} endRowId. The ending row ID of the selection range.
   * @param {string} endDataField. The ending column data field of the selection range.
   */
  selectRange(rowId: string | number, dataField: string, endRowId: string | number, endDataField: string): void;
  /**
   * Selects all consecutive rows, inclusive, between the specified start and end row IDs. Both the start and end IDs are included in the selection, and only rows with IDs that fall within this continuous range will be selected.
   * @param {string | number} rowId. The starting row ID of the selection range.
   * @param {string | number} endRowId. The ending row ID of the selection range.
   */
  selectRowsRange(rowId: string | number, endRowId: string | number): void;
  /**
   * Selects multiple rows by accepting an array of row IDs, allowing you to specify and manipulate several rows simultaneously based on their unique identifiers.
   * @param {(string | number)[]} rowId. Array of row IDs to select.
   */
  selectRows(rowId: (string | number)[]): void;
  /**
   * Selects every row that is currently visible in the Grid, including only those rows that meet the active filters, sorting, and pagination settings. Hidden or filtered-out rows are not selected.
   */
  selectAllRows(): void;
  /**
   * Enhances selection functionality by allowing users to select multiple rows within the Grid component, using their zero-based index positions. This means you can specify one or more row indices (starting from 0 for the first row) to programmatically select the corresponding rows in the Grid.
   * @param {number[]} rowIndex. An array of zero-based row indexes to select.
   */
  selectRowsByIndex(rowIndex: number[]): void;
  /**
   * Selects rows from a dataset based on a specified query expression. This allows you to filter rows by applying conditions to the values in one or more columns. Supported conditions include equality (equals), partial matches (contains), comparison operators (greater than, less than), prefix matching (starts with), and more. The query expression enables flexible filtering, so only rows that meet the defined criteria are returned.
   * @param {string} query. The search query or value to filter by.
   * @param {string} dataField?. Optional column data field to apply the query against.
   * @param {string} condition?. Optional condition operator. Supported values include '=', 'EQUAL', '<>', 'NOT_EQUAL', '!=', '<', 'LESS_THAN', '>', 'GREATER_THAN', '<=', 'LESS_THAN_OR_EQUAL', '>=', 'GREATER_THAN_OR_EQUAL', 'starts with', 'STARTS_WITH', 'ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS', 'DOES_NOT_CONTAIN', 'NULL', 'NOT_NULL'.
   */
  selectRowsByQuery(query: string, dataField?: string, condition?: string): void;
  /**
   * Allows you to select multiple cells within a grid by specifying arrays of row indices (cell ids) and corresponding column data fields.  <br/>For example: `grid.selectCells([0, 1, 2], ['firstName', 'quantity', 'date']);`  <br/>This will select the cells located at the intersection of:<br/>- Row 0 and the 'firstName' column,<br/>- Row 1 and the 'quantity' column,<br/>- Row 2 and the 'date' column.<br/><br/>Each element in the id array matches with the element in the dataFields array by position, ensuring precise cell selection across different rows and columns. This method is useful for batch selection or applying simultaneous actions to multiple, non-contiguous cells.
   * @param {(string | number)[]} rowIds. Array of row ids
   * @param {string[]} dataFields. Array of data fields.
   */
  selectCells(rowIds: (string | number)[], dataFields: string[]): void;
  /**
   * Selects grid cells based on a query string.  <br/><br/>- Example 1: `grid.selectCellsByQuery('nancy');` selects all cells in the grid whose value is exactly 'nancy'.<br/>- Example 2: `grid.selectCellsByQuery('nancy, davolio');` selects all cells within rows where both 'nancy' and 'davolio' values appear in any columns of the same row.<br/><br/>The query can be a single value or a comma-separated list of values. When multiple values are specified, only rows containing all the specified values (regardless of column order) will have their cells selected.
   * @param {string} query. Search query
   */
  selectCellsByQuery(query: string): void;
  /**
   * Assigns a new value to a specific cell within a data table, targeting the cell by its unique row ID and the corresponding column's data field name. This allows precise updating of individual cell contents based on row and column identifiers.
   * @param {string | number} rowId. The unique identifier of the row containing the cell.
   * @param {string} dataField. The data field of the column where the cell is located (e.g., 'firstName').
   * @param {string | number | Date | boolean} value. The new value to assign to the cell.
   */
  setCellValue(rowId: string | number, dataField: string, value: string | number | Date | boolean): void;
  /**
   * Sets the columns displayed in the Grid to a new set defined by the provided argument. When 'setColumns' is called, the Grid compares the new columns array with the currently displayed columns. It will add any new columns, retain existing columns that are still present, and remove columns that are not included in the new array. After updating the columns, the Grid automatically redraws all column headers and refreshes all rows to reflect the changes. Importantly, any state associated with existing columns—such as sort order, filters, column width, and other configurable options—will be preserved for columns that remain after the update. This ensures that users do not lose their settings when columns are changed dynamically.
   * @param {GridColumn[]} columns. Columns array.
   */
  setColumns(columns: GridColumn[]): void;
  /**
   * Sets or updates a specific property of a column identified by its dataField. This function allows you to dynamically modify column settings, such as freezing the column, toggling its visibility, adjusting its width, and altering other configurable attributes at runtime. Use this method to programmatically change how individual columns are displayed or behave within your data grid or table component.
   * @param {string} dataField. The dataField identifier of the column (e.g., 'firstName').
   * @param {string} propertyName. The name of the column property to set (e.g., 'freeze', 'visible', 'width').
   * @param {any} value. The new value to assign to the specified column property.
   */
  setColumnProperty(dataField: string, propertyName: string, value: any): void;
  /**
   * Updates or sets a specific property of a table row identified by its unique rowId. This function allows you to dynamically modify row attributes—for example, toggling the frozen state, applying custom styling, or adding arbitrary metadata—enabling flexible and responsive UI changes at the row level.
   * @param {string | number} rowId. The unique identifier of the row to modify.
   * @param {string} propertyName. The name of the row property to set (e.g., 'freeze', 'expanded', 'customProperty').
   * @param {any} value. The new value to assign to the specified row property.
   */
  setRowProperty(rowId: string | number, propertyName: string, value: any): void;
  /**
   * Allows you to apply custom CSS styles to a specific table row, identified by its unique rowId. Supported style properties include background color, text color, font size, font family, text decoration, font style, and font weight. This enables granular control over the appearance of individual rows in your table, ensuring consistency with your application's design requirements.
   * @param {string | number} rowId. The unique identifier of the row to style.
   * @param  rowStyle. An object specifying CSS style properties and values to apply to the entire row.
   */
  setRowStyle(rowId: string | number, rowStyle: {background?: string, color?: string, fontSize?: string, fontFamily?: string, textDecoration?: string, fontStyle?: string, fontWeight?: string}): void;
  /**
   * Enhances a specific table cell's appearance by applying custom CSS styles, targeting the cell using both its unique rowId and the dataField (column identifier). You can specify a range of style properties, including background color, text color, font size, font family, text decoration, font style, and font weight, allowing precise control over the cell’s visual presentation.
   * @param {string | number} rowId. The unique identifier of the row containing the cell.
   * @param {string} dataField. The dataField (column) name of the cell to style.
   * @param  rowStyle. An object specifying CSS style properties and values to apply to the specific cell.
   */
  setCellStyle(rowId: string | number, dataField: string, rowStyle: {background?: string, color?: string, fontSize?: string, fontFamily?: string, textDecoration?: string, fontStyle?: string, fontWeight?: string}): void;
  /**
   * Specifies the label text displayed for the Grid component when the 'dropDownMode' property is enabled. This label helps users identify the purpose or content of the Grid when it appears in drop-down mode.
   * @param {string} label. The label to be displayed in the dropdown button.
   */
  setDropDownLabel(label: string): void;
  /**
   * Sets the current position of the vertical scrollbar within a scrollable container or component. This method allows you to programmatically control the vertical scroll offset, typically specified in pixels or logical units from the top of the content. It can be used in conjunction with the getVerticalScrollValue method to retrieve the current scroll position, and with getVerticalScrollMax to determine the maximum scrollable value. This is useful for synchronizing scrolling behavior, implementing custom scroll controls, or restoring a previous scroll position.
   * @param {number} value. The new scroll position
   */
  setVerticalScrollValue(value: number): void;
  /**
   * Sets the current position of the horizontal scrollbar within a scrollable container. This method allows you to programmatically adjust the horizontal scroll offset, enabling smooth navigation or custom scroll behavior. It can be used in combination with getHorizontalScrollValue to retrieve the current scroll position, and with getHorizontalScrollMax to determine the maximum scrollable distance. This is useful for implementing features such as custom scrolling controls, restoring previous scroll positions, or synchronizing scrolling across multiple elements.
   * @param {number} value. The new scroll position
   */
  setHorizontalScrollValue(value: number): void;
  /**
   * Closes the side panel component of the Grid interface, hiding any currently displayed content or options and returning the Grid to its default view.
   */
  closeSidePanel(): void;
  /**
   * Displays the Grid's side panel, providing access to additional settings, filters, and customization options related to the Grid's content and layout.
   * @param {any} content. This is the content which will be displayed in the side panel. It can be String, HTML Element, HTML Template Element or Component
   * @param {number} width?. This is the width of the side panel
   * @param {any} callback?. Function called when the panel is opened. It can be used for dynamically showing content and initializing it.
   */
  showSidePanel(content: any, width?: number, callback?: any): void;
  /**
   * Renders an in-depth view of a selected row when the row details feature is activated in the grid configuration. This allows users to access and interact with additional information or actions related to the chosen row.
   * @param {string | number} rowId. row bound id
   */
  showDetail(rowId: string | number): void;
  /**
   * Displays a visually distinct overlay message positioned directly beneath a specific cell. This method is ideal for providing contextual onboarding tips, user guidance, or delivering custom messages tailored to the user's current interaction. It enhances user experience by presenting timely and relevant information without interrupting workflow.
   * @param {string | number} rowId. row bound id
   * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
   * @param {string} value. The message to be shown below the cell
   */
  showCellMessage(rowId: string | number, dataField: string, value: string): void;
  /**
   * Updates the data of a specific row identified by its unique row ID. When batch editing mode is enabled, the changes to the row are temporarily staged and will not be permanently saved to the data source until the user explicitly commits or saves the batch of edits. This ensures that multiple changes can be reviewed and either all applied or discarded together, rather than being immediately written to the underlying data.
   * @param {string | number} rowId. row bound id
   * @param {any} data. row data matching the data source
   * @param  callback?. Sets a callback function, which is called after the row is updated. The callback's argument is the updated row.
   */
  updateRow(rowId: string | number, data: any, callback?: {(row: GridRow): void}): void;
  /**
   * Deselects a previously selected row, cell, or column within the data grid, removing any associated highlight or selection state.
   * @param {string | number} rowId. row bound id
   * @param {string} dataField?. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
   */
  unselect(rowId: string | number, dataField?: string): void;
  /**
   * Unchecks a specific row in the TreeGrid by setting its associated checkbox to an unchecked (false) state. This visually updates the checkbox in the UI and updates the row’s checked status in the underlying data model.
   * @param {string | number} rowId. row bound id
   */
  uncheckRow(rowId: string | number): void;
  /**
   * Resets the checked state of all rows in a TreeGrid or GroupingGrid by setting every checkbox to unchecked (`false`). This action ensures that no rows remain selected or checked, effectively deselecting all items in the grid.
   */
  uncheckAllRows(): void;
  /**
   * Toggles the expanded or collapsed state of a TreeGrid row specified by the provided row ID. If the target row is currently collapsed, this action will expand it to reveal its child rows. Conversely, if the row is expanded, it will collapse and hide any child rows. Use this function to dynamically show or hide hierarchical data within the TreeGrid based on user interaction or programmatic control.
   * @param {string | number} rowId. The ID of the row to toggle expand/collapse state.
   */
  toggleRow(rowId: string | number): void;
  /**
   * Transposes the Grid.
   * @param {string} dataField. The dataField of the Column.
   * @param {number} columnWidth?. The width of the Column.
   * @param {any} initColumn?. callback for set up of the column.
   */
  transpose(dataField: string, columnWidth?: number, initColumn?: any): void;
  /**
   * Sets the locale of a component.
   * @param {string} locale. The locale abbreviation. For example: 'de'.
   * @param {any} messages?. Object containing the locale messages.
   */
  setLocale(locale: string, messages?: any): void;
}

/**An object that defines configurable options for customizing the visual appearance of the grid, including properties such as line color, spacing, background style, and border visibility. */
export interface GridAppearance {
  /**
   * Specifies the row index from which the alternating color pattern should begin. This determines the first row in the sequence that will receive a different background color, enabling alternating row colors for improved readability.
   * Default value: 0
   */
  alternationStart?: number;
  /**
   * Indicates the ending row index at which the alternating color pattern stops being applied. This index is inclusive, meaning the alternating colors will be applied up to and including this row.
   * Default value: 0
   */
  alternationEnd?: number;
  /**
   * The total number of times the row background color alternates, creating a striped (zebra) pattern in the table. Each alternation changes the row color from one specified color to the next in the sequence.
   * Default value: 0
   */
  alternationCount?: number;
  /**
   * Allows specific table columns to remain fixed (sticky) on the left or right side while horizontally scrolling, improving table readability and user experience.
   * Default value: false
   */
  allowColumnStickyPosition?: boolean;
  /**
   * Activates a hover effect for table rows. When a user hovers over a row, a distinct style is applied to all cells within that row, improving interactivity and highlighting the row under the cursor.
   * Default value: false
   */
  allowHover?: boolean;
  /**
   * Activates a visual hover effect on header elements. When a user moves their cursor over a header, a distinct hover style is applied to highlight the header and improve interactivity.
   * Default value: true
   */
  allowHeaderHover?: boolean;
  /**
   * Enables animated transitions when expanding or collapsing a row in TreeGrid or Grouping mode. When this option is active, rows smoothly slide open or closed, enhancing the user experience by visually indicating the change in row state. This animation is triggered each time a row is expanded to show child nodes or collapsed to hide them.
   * Default value: false
   */
  allowRowToggleAnimation?: boolean;
  /**
   * Enables animated transitions when expanding or collapsing row details in TreeGrid or Grouping mode. When a user clicks to expand or collapse a row, a smooth animation visualizes the row’s content appearing or disappearing, enhancing the user experience by clearly indicating the change in row state.
   * Default value: false
   */
  allowRowDetailToggleAnimation?: boolean;
  /**
   * Enables animated sorting of data records. When sorting is applied, the data records are visually rearranged using smooth transition animations, providing a clear and engaging user experience as the records update their order on the interface.
   * Default value: false
   */
  allowSortAnimation?: boolean;
  /**
   * Activates animation for the column label. When a user hovers over the column header or applies sorting—causing the header’s drop-down button to appear—the column label smoothly transitions to the left using an animation effect. This improves the visual feedback and highlights the interactive state of the column header.
   * Default value: true
   */
  allowColumnLabelAnimation?: boolean;
  /**
   * Controls whether the column menu displays with an animated transition. When enabled, clicking the drop-down button on a column header will show or hide the menu using a smooth animation effect, enhancing the user experience. If disabled, the menu will appear and disappear instantly without animation.
   * Default value: true
   */
  allowColumnMenuAnimation?: boolean;
  /**
   * Enables animated transitions for column sort buttons. When a user clicks on a sortable column header to change the sort order (ascending or descending), the sort button visually animates to indicate the sorting action, enhancing user feedback and interface interactivity.
   * Default value: true
   */
  allowColumnSortButtonAnimation?: boolean;
  /**
   * Enables animation for the column action button. When this option is active, the drop-down button that appears upon hovering over a column header will display with a smooth animation effect, enhancing visual feedback for the user. If disabled, the drop-down button will appear instantly without any animation.
   * Default value: true
   */
  allowColumnActionButtonAnimation?: boolean;
  /**
   * Activates animated transitions for column filter buttons, providing visual feedback when filters are applied or removed. This enhances user experience by making the filtering process more intuitive and visually engaging.
   * Default value: true
   */
  allowColumnFilterButtonAnimation?: boolean;
  /**
   * When enabled, this property automatically displays the column sort button only when the column is actively sorted. If set to false, the sort button is always visible, regardless of whether the column is currently sorted, indicating that sorting is available for that column.
   * Default value: true
   */
  autoShowColumnSortButton?: boolean;
  /**
   * If enabled, this option automatically displays the column action button, allowing users to access additional actions or settings related to the column without manual configuration.
   * Default value: true
   */
  autoShowColumnActionButton?: boolean;
  /**
   * If enabled, this option automatically displays a filter button in each column header, allowing users to quickly access and apply filtering options to the column's data.
   * Default value: true
   */
  autoShowColumnFilterButton?: boolean;
  /**
   * Specifies the format of row header labels, allowing you to choose between sequential numbers (e.g., 1, 2, 3, ...) or alphabetical letters (e.g., A, B, C, ...). Changing this property determines how the row headers are displayed in the rendered output.
   * Default value: number
   */
  autoGenerateRowLabelMode?: GridAppearanceAutoGenerateRowLabelMode | string;
  /**
   * Determines the format of the column header labels, allowing them to be displayed as either sequential numbers (e.g., 1, 2, 3…) or letters (e.g., A, B, C…). This property directly influences how column headers are rendered and displayed in the table interface.
   * Default value: letter
   */
  autoGenerateColumnLabelMode?: GridAppearanceAutoGenerateColumnLabelMode | string;
  /**
   * Controls the visibility of the loading indicator in the Grid component. When enabled, a "Loading..." image or animation is displayed as an overlay while the Grid is fetching or processing data, providing visual feedback to users that content is being loaded.
   * Default value: false
   */
  displayLoadingIndicator?: boolean;
  /**
   * Specifies the label text shown in the loading indicator. This text appears to inform users that data is currently being loaded or processed. Use this property to customize the loading message for better user experience.
   * Default value: "Loading..."
   */
  loadingIndicatorPlaceholder?: string;
  /**
   * Specifies the placeholder content displayed in the Grid when there are no data items to show. This placeholder provides a visual cue or message to users, indicating that the Grid is currently empty.
   * Default value: "No Rows"
   */
  placeholder?: string;
  /**
   * Specifies the length of time, in milliseconds, that the sorting animation will run when items are sorted. This property takes effect only if the allowSortAnimation property is enabled. Use it to control the speed and smoothness of the sorting transition for a better user experience.
   * Default value: 500
   */
  sortAnimationDuration?: number;
  /**
   * Toggles the visibility of the row header, allowing you to either display or hide the header section for each row in the grid or table.
   * Default value: false
   */
  showRowHeader?: boolean;
  /**
   * Controls the visibility of row headers within the TreeGrid component. By default, non-leaf tree items (i.e., parent nodes) are rendered as standard rows. When this property is set to true, these parent nodes are displayed as row headers, visually distinguished in a manner similar to how group headers are rendered. This enhances the hierarchical structure of the TreeGrid, making parent-child relationships more prominent.
   * Default value: false
   */
  showTreeRowHeader?: boolean;
  /**
   * Displays the row indexes in the row header section of the table. To enable this feature, set the showRowHeader property to true. When activated, each row header will display its corresponding index, providing clear reference points for users.
   * Default value: false
   */
  showRowHeaderNumber?: boolean;
  /**
   * Displays an edit icon whenever a cell or row enters the edit state, providing a clear visual indicator that the item is currently being modified.
   * Default value: true
   */
  showRowHeaderEditIcon?: boolean;
  /**
   * Displays a selection icon when the user's pointer hovers over the row header cell, providing a visual cue that the row can be selected.
   * Default value: false
   */
  showRowHeaderSelectIcon?: boolean;
  /**
   * Displays a focus icon whenever a table cell or entire row is focused, providing a clear visual indicator of the current selection for improved accessibility and user interaction.
   * Default value: false
   */
  showRowHeaderFocusIcon?: boolean;
  /**
   * Displays a drag handle icon within the row header, allowing users to initiate and perform row drag-and-drop actions for reordering rows.
   * Default value: false
   */
  showRowHeaderDragIcon?: boolean;
  /**
   * Displays visible lines that separate the headers of columns from one another, making it easier to distinguish between different column headings in a table or grid layout.
   * Default value: true
   */
  showColumnHeaderLines?: boolean;
  /**
   * Displays a drag handle icon on the column header when drag-and-drop functionality is enabled. The icon becomes visible when the user hovers the mouse cursor near the left edge of the column header, indicating that the column can be dragged to a new position.
   * Default value: false
   */
  showColumnHeaderDragIcon?: boolean;
  /**
   * Displays vertical grid lines between columns, making it easier to distinguish and separate individual columns within the layout.
   * Default value: true
   */
  showColumnLines?: boolean;
  /**
   * Displays horizontal lines that separate each row in the table, making it easier to distinguish and read individual rows.
   * Default value: true
   */
  showRowLines?: boolean;
  /**
   * Displays vertical divider lines between columns that are organized into groups, visually separating each column within the group to improve readability and distinction.
   * Default value: true
   */
  showColumnGroupLines?: boolean;
  /**
   * Displays dividing lines between cells within column groups, clearly separating each cell to improve readability and organization within grouped columns.
   * Default value: true
   */
  showColumnGroupCellLines?: boolean;
  /**
   * Displays column groups in the "Hide columns" panel, presenting both column groups and individual columns in a hierarchical, tree-like structure. If this property is set to false, column groups are hidden from the panel, and instead, column labels are prefixed with their corresponding group name for context.
   * Default value: false
   */
  showColumnGroupsInColumnPanel?: boolean;
  /**
   * Displays a distinct background color on the column header to indicate when a filter has been applied to that column. This visually highlights filtered columns, helping users easily identify which columns are currently filtered.
   * Default value: false
   */
  showFilterColumnBackground?: boolean;
  /**
   * Highlights the background of the column currently being sorted, visually indicating which column has an active sort applied.
   * Default value: false
   */
  showSortColumnBackground?: boolean;
  /**
   * Displays a distinct background for frozen columns in the grid, making it visually clear which columns are fixed in place when horizontal scrolling is enabled. This feature is active only when the grid contains frozen columns.
   * Default value: true
   */
  showFrozenColumnBackground?: boolean;
  /**
   * Displays the selection with the highest visual priority, ensuring it appears above all other styled elements. This guarantees the selection remains clearly visible and is not obscured by any other interface elements or styles.
   * Default value: false
   */
  showSelectionOnTop?: boolean;
  /**
   * Displays a sorting button within the column header, allowing users to sort the column's data in ascending or descending order.
   * Default value: true
   */
  showColumnSortButton?: boolean;
  /**
   * Displays a filter button in the column header, allowing users to access filtering options for that specific column.
   * Default value: true
   */
  showColumnFilterButton?: boolean;
  /**
   * Displays a button that reveals the column description. The appearance and styling of this button can be fully customized using the Grid's CSS classes, allowing you to match it to your application's design.
   * Default value: false
   */
  showColumnDescriptionButton?: boolean;
  /**
   * Displays an icon within the header of the column, providing a visual indicator or representation specific to that column. This icon appears alongside or instead of the column title and can be used to convey additional information or functionality related to the column's contents.
   * Default value: false
   */
  showColumnIcon?: boolean;
  /**
   * Displays a user-defined custom button in the column header. This allows developers to add their own button to the top of a column, enabling custom actions or functionality specific to that column.
   * Default value: false
   */
  showColumnCustomButton?: boolean;
  /**
   * Displays the column action button, which appears as a drop-down menu icon within the column header. This button allows users to access additional actions or settings related to the specific column, such as sorting, filtering, or customizing the column display.
   * Default value: true
   */
  showColumnActionButton?: boolean;
  /**
   * Displays informative tooltips when the user hovers over table columns or individual cells, providing additional context or details about the data shown.
   * Default value: false
   */
  showTooltips?: boolean;
  /**
   * Displays a horizontal scrollbar specifically for fixed columns, allowing users to scroll horizontally within the fixed section when its content exceeds the available width.
   * Default value: false
   */
  showHorizontalScrollBarOnFixedColumns?: boolean;
  /**
   * Displays a vertical scrollbar specifically on fixed columns, allowing users to scroll through content within those columns when the content exceeds the visible height. This ensures that fixed columns remain accessible and easy to navigate even with overflow content.
   * Default value: false
   */
  showVerticalScrollBarOnFixedColumns?: boolean;
  /**
   * Displays the current date as the word "Today" instead of the standard date format (e.g., "7/8/2022"). When this property is set to false, the component will show the full numerical date.
   * Default value: true
   */
  showTodayDateAsString?: boolean;
}

/**An object that defines configuration options for integrating AI capabilities within the grid component. This includes settings for enabling AI features, specifying AI service endpoints, setting authentication credentials, and customizing how the grid interacts with AI-powered functionalities. */
export interface GridAi {
  /**
   * Specifies the AI model utilized to power text generation and other AI-driven functionalities within the application. This setting determines which underlying AI engine is responsible for producing generated content and handling intelligent features.
   * Default value: "gpt-3.5-turbo"
   */
  model?: string;
  /**
   * Specifies the maximum number of tokens (which may include words, punctuation, or characters, depending on the model's tokenization method) that the AI is allowed to generate in response to a single request. This limit helps control the length of the output and resource usage.
   * Default value: 200
   */
  maxTokens?: number;
  /**
   * Determines the degree of randomness in the AI-generated output. Lower values yield more deterministic and focused responses, making the AI’s answers predictable and precise. Higher values increase creativity and variability, resulting in more diverse and imaginative responses.
   * Default value: 0.7
   */
  temperature?: number;
  /**
   * Specifies the endpoint URL used to send AI-related requests. This is usually the URL of your backend service or proxy, which securely forwards requests to OpenAI or another AI service provider. Ensure this URL points to your server that handles authentication, rate limiting, and any additional processing before communicating with the external AI API.
   * Default value: ""
   */
  url?: string;
  /**
   * The unique API key required to authenticate and authorize requests made to the AI service provider, ensuring secure access and usage tracking for each client application.
   * Default value: ""
   */
  key?: string;
}

/**An object that defines configuration options controlling the grid’s behavior, such as layout properties, sorting and filtering capabilities, selection modes, and responsiveness settings. */
export interface GridBehavior {
  /**
   * Automatically resizes a column to fit its content when the user double-clicks on the right edge of the column header.
   * Default value: true
   */
  allowColumnAutoSizeOnDoubleClick?: boolean;
  /**
   * Automatically resizes the row height to fit its content when the bottom border of the row is double-clicked.
   * Default value: true
   */
  allowRowAutoSizeOnDoubleClick?: boolean;
  /**
   * Specifies whether the functionality to reorder rows—such as through drag-and-drop or other user interactions—is enabled. When set to true, users can change the order of rows within the table or list component.
   * Default value: false
   */
  allowRowReorder?: boolean;
  /**
   * Specifies whether users are allowed to reorder columns by dragging them to new positions within the table or grid.
   * Default value: false
   */
  allowColumnReorder?: boolean;
  /**
   * Controls whether users can freeze (or pin) columns using drag-and-drop interactions. - 'When other columns are already frozen/pinned:' Dragging a column into the frozen area will immediately add it to that section.  - 'When no columns are currently frozen/pinned:' Dragging a column to the edge of the grid and holding it there for about one second will automatically activate the frozen area and pin the column.Enabling this option provides an intuitive way for users to freeze columns directly from the grid interface.
   * Default value: false
   */
  allowColumnFreeze?: boolean;
  /**
   * Specifies whether users can scroll the content using the mouse wheel. If enabled, the mouse wheel will allow vertical or horizontal scrolling within the element; if disabled, mouse wheel actions will have no scrolling effect.
   * Default value: true
   */
  allowMouseWheel?: boolean;
  /**
   * Specifies how column resizing is handled.  In split mode, when a column is resized, its width increases or decreases, and the adjacent (next) column’s width is adjusted in the opposite direction, so the combined width of both columns remains constant.  In growAndShrink mode, only the resized column's width changes; the widths of other columns remain unaffected.
   * Default value: none
   */
  columnResizeMode?: GridResizeMode | string;
  /**
   * Specifies how rows are resized within the container.  - In the split resize mode, resizing a row will both increase or decrease the height of the target (resized) row and inversely adjust the height of the immediately following (sibling) row, ensuring the total height remains constant.- In the growAndShrink resize mode, only the targeted row's height is adjusted—either increasing or decreasing—without affecting the size of neighboring rows.
   * Default value: none
   */
  rowResizeMode?: GridResizeMode | string;
}

/**Provides configuration options for customizing the appearance, labels, alignment, and behavior of column headers in a data table or grid. */
export interface GridColumnHeader {
  /**
   * Controls whether the column headers are displayed or hidden in the table or grid component.
   * Default value: true
   */
  visible?: boolean;
}

/**The <em>clipboard</em> property controls whether users can perform clipboard operations—such as copying (Ctrl+C), cutting (Ctrl+X), and pasting (Ctrl+V)—using keyboard shortcuts within the application. Setting this property to <code>true</code> enables these keyboard shortcuts for clipboard actions; setting it to <code>false</code> disables them, preventing users from using keyboard navigation for copying, cutting, or pasting content. */
export interface GridClipboard {
  /**
   * Specifies whether the property is currently active (enabled) or inactive (disabled). You can use this setting to retrieve the current status or to enable or disable the property as needed.
   * Default value: true
   */
  enabled?: boolean;
  /**
   * Determines whether the column headers are included when copying data to the clipboard. When enabled, copying data will also copy the column headers; when disabled, only the data will be copied. This setting can be used to set or retrieve the current behavior.
   * Default value: false
   */
  copyHeadersToClipboard?: boolean;
  /**
   * Defines whether and how the values of copied and pasted cells are automatically filled using pattern detection during Drag & Drop or multiple cell selection operations. This setting determines how pasted data is handled:- 'none': No auto-fill or pattern detection is applied. Pasted cells remain as they are, with no changes or repetition beyond what was directly copied.- 'copy': The exact cell values are duplicated into the new locations without attempting to follow or extend any logical sequence or pattern.- 'fillSeries': Enables automatic pattern detection and series continuation. If the selection forms a recognizable sequence—for example, '1, 2'—the pasted cells will extend this pattern (e.g., '1, 2, 3, 4, ...'), filling additional cells with the next values in the detected sequence.This option helps users quickly extend numeric, date, or other discernible patterns when dragging or pasting multiple cells.
   * Default value: fillSeries
   */
  autoFillMode?: GridClipboardAutoFillMode | string;
  /**
   * Defines or retrieves a callback function that is triggered when a paste event occurs, allowing custom handling of pasted content.
   * Default value: null
   */
  onPasteValue?: {(args: {value: any, oldValue: any, dataField: string, id: string | number}): void};
}

export interface GridColumn {
  /**
   * Sets or gets the column's header alignment. Accepts: 'left', 'right', 'center'
   * Default value: left
   */
  align?: HorizontalAlignment | string;
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
   * Sets or gets whether the column can be edited. The property can be 'boolean' i.e accept true and false values. To dynamically determine which cells are editable, a callback function can be supplied to the 'allowEdit' property. For example: allowEdit: (id, dataField, value, data) => { return value === 'Cappuccino'; }
   * Default value: true
   */
  allowEdit?: any;
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
   * Sets or gets the cell's height in card view mode.
   * Default value: 0
   */
  cardHeight?: number;
  /**
   * Defines the format applied to the column's cell values. Supports number and date format strings. Examples for numeric formatting:'d' - Decimal numbers (e.g., 25)'f' - Floating-point numbers (e.g., 25.50)'n' - Integer numbers with thousands separator (e.g., 1,000)'c' - Currency format (e.g., $25.50)'p' - Percentage format (e.g., 50%)To define decimal places, append a number (e.g., 'c2' = $25.26).Examples for date formatting:'d' - Short date (e.g., 3/25/2025)'D' - Long date (e.g., Tuesday, March 25, 2025)'t' - Short time (e.g., 1:30 PM)'T' - Long time (e.g., 1:30:45 PM)'f' - Long date + short time'F' - Long date + long time'M' - Month/day (e.g., March 25)'Y' - Year and month (e.g., 2025 March)'S' - Sortable, culture-invariant format (e.g., 2025-03-25T13:30:45)Custom date format tokens:'dd' - Day of month (e.g., 01-31)'MMMM' - Full month name'yyyy' - 4-digit yearAnd many more standard date/time tokens
   * Default value: ""
   */
  cellsFormat?: string;
  /**
   * Controls the horizontal alignment of cell content. Acceptable values:'left' - Aligns content to the left'right' - Aligns content to the right'center' - Centers content horizontally
   * Default value: left
   */
  cellsAlign?: HorizontalAlignment | string;
  /**
   * Sets or gets the column's cells wrapping. Accepts: true or false.
   * Default value: false
   */
  cellsWrap?: boolean;
  /**
   * Sets or gets the column's cells vertical alignment. Accepts: 'top', 'bottom' and 'center'
   * Default value: center
   */
  cellsVerticalAlign?: VerticalAlignment | string;
  /**
   * Sets or gets the column's header CSS class name. You can apply multiple CSS class names by separating them with space.
   * Default value: ""
   */
  className?: string;
  /**
   * Sets or gets the column's cells CSS class name(s). The property can be used with string and function. You can apply multiple CSS class names by separating them with space or you can return a CSS class name(s) when you use it as a function. The function gets called with the following parameters: index - row's index, dataField - column's data field, cellValue - current cell's value, rowData - current row's data, row - GridRow object. Ex: cellsClassName: (index, dataField, value, rowData, row) => { if (index === 0) { return 'cell-class-1' } }
   * Default value: 
   */
  cellsClassName?: any;
  /**
   * Sets or gets the column's cells CSS class rules. Different CSS class names are conditionally applied. Example: label: 'Quantity', dataField: 'quantity', editor: 'numberInput', cellsClassRules: { 'one': settings => settings.value > 5, 'two': settings => settings.value &lt;5, 'three': settings => settings.value === 3 }.  The settings object contains the following properties: index, value, dataField, row, api.
   * Default value: null
   */
  cellsCSSRules?: any;
  /**
   * Sets or gets the column's cells renderer function for custom html rendering in the cells. For more advanced scenarios use formatFunction or template, but for simple html rendering, you can use this.
   * Default value: null
   */
  cellsRenderer?: {(rowId: string | number, dataField: string, cellValue: any, rowData: any, cellElement: any): string};
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
   * Sets or gets custom data object related to the column.
   * Default value: null
   */
  dataSet?: any;
  /**
   * Gets the HTML Element. The property returns null when the Column is not in the View.
   * Default value: null
   */
  element?: HTMLElement;
  /**
   * Sets or gets the column's editor. The property expects 'input', 'autoComplete', 'comboBox', 'dropDownList', 'image', 'numberInput', 'checkBox', 'multiInput', 'multiComboInput', 'checkInput', 'slider', 'dateTimePicker', 'timeInput', 'dateInput', 'dateRangeInput', 'maskedTextBox', 'textArea' or a custom object with 'template' property which defines the editor type, 'settings' property which defines the custom editor's properties, 'onInit(int row, string column, object editor, object rowData): void', 'onRender(int row, string column, object editor, object rowData): void', 'setValue(object value): void' and 'getValue(object value): any' callback functions.
   * Default value: null
   */
  editor?: any;
  /**
   * Sets or gets the Freeze mode. Accepts: 'near', 'far', true and false. Freezes/Pins the column to left(near) or right(far).
   * Default value: false
   */
  freeze?: Position | string;
  /**
   * Sets or gets the filter of the column. Example: ['contains Andrew or contains Nancy']. Example with numeric filter ['quantity', '&lt;= 3 and &gt;= 8']. Additional example with filter which we want to apply to a column with filterMenuMode='excel' - ['EQUAL' 'Andrew' or 'EQUAL' 'Antoni' or 'EQUAL' 'Beate']. Example with a string filter applied to a string column - ['CONTAINS' 'burke' or 'CONTAINS' 'peterson']. Filter conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
   * Default value: ""
   */
  filter?: string;
  /**
   * Sets or gets the filter menu mode of the column. In 'basic' mode, a single input is displayed in the filter menu. In 'default' mode, two input options are available for more precise filtering. In 'excel' mode, checked list with unique values is displayed.
   * Default value: default
   */
  filterMenuMode?: GridColumnFilterMenuMode | string;
  /**
   * Sets or gets the column's filter editor. The value is an object with the following possible options: template: string, condition: string, onInit: any - callback function for init purposes, min: number, max: number, minLength: number, maxLength: number
   * Default value: null
   */
  filterEditor?: any;
  /**
   * Sets or gets the column's format function.
   * Default value: null
   */
  formatFunction?: {(formatObject: {row?: GridRow, column?: GridColumn, cell?: GridCell, oldValue?: any, value?: any, template?: any, data?: any}): void};
  /**
   * Defines the formatting settings applied to the column's values. You can use built-in formatting options or provide advanced internationalization formats using Intl objects. For example, to apply currency formatting: 'Intl: { NumberFormat: { style: "currency", currency: "EUR" } }', or for date formatting: 'Intl: { DateTimeFormat: { dateStyle: "full" } }'.
   * Default value: [object Object]
   */
  formatSettings?: any;
  /**
   * Sets or gets the column's formula. The formula you set will be applied to all cells. Example: COL(Name) & '-' & COL(Price) or IF(COL(Price) * COL(Quantity) > 5, 'Yes', 'No')
   * Default value: ""
   */
  formula?: string;
  /**
   * Sets or gets the column's group.
   * Default value: ""
   */
  group?: string;
  /**
   * This function allows you to provide custom cell values, which will be displayed in the column's cells. The grid passes 3 arguments to the function - row id, column's dataField and row's data.
   * Default value: null
   */
  getCellValue?: any;
  /**
   * Gets the column's filter panel. The function should return HTMLElement which will represent the filter UI panel displayed in the filter menu.  The function works in combination with updateFilterPanel
   * Default value: null
   */
  getFilterPanel?: any;
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
   * Sets or gets the column header's template. The property expects the 'id' of HTMLTemplateElement, HTML string or function which returns html string.
   * Default value: 
   */
  labelTemplate?: string | HTMLTemplateElement | HTMLElement | {(label: string): string};
  /**
   * Sets or gets the minimum width.
   * Default value: 30
   */
  minWidth?: number;
  /**
   * Sets or gets the column's rowSpan function. Allows you to dynamically span cells.
   * Default value: null
   */
  rowSpan?: {(cellValue: any, rowIndex: number, data: any): number};
  /**
   * Defines the unique identifier of a relation within dataSourceSettings.relations. Must be used together with the 'relationField' property to establish the relationship mapping.
   * Default value: ""
   */
  relationId?: string;
  /**
   * Specifies the data field within the current data source that participates in the relationship defined by 'relationId'. Both 'relationField' and 'relationId' must be configured to create a valid relation.
   * Default value: ""
   */
  relationField?: string;
  /**
   * Sets or gets the column options for editors such as list, dropdownlist or tags.
   * Default value: []
   */
  options?: any[];
  /**
   * Sets or gets the sort order of the column. Accepts: 'asc', 'desc', 'none' and null.
   * Default value: none
   */
  sortOrder?: GridColumnSortOrder | string;
  /**
   * Sets or gets the sort index of the column. Accepts an integer value. This property can be used to get or set the column's sort index when sorting mode is 'many'.
   * Default value: null
   */
  sortIndex?: number;
  /**
   * Sets or gets a custom 'sortComparator' function. It can be used for implementing custom sorting. Ex: sortComparator: (value1, value2) =&gt; { if (value1 === value2) return 0; return value1 &lt;value2; }
   * Default value: null
   */
  sortComparator?: any;
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
   * Sets or gets the column's template. The property expects the 'id' of HTMLTemplateElement or HTML string which is displayed in the cells. Built-in string values are: 'checkBox', 'switchButton', 'url', 'email', 'dropdownlist', 'list', 'progress', 'tags', 'autoNumber', 'modifiedBy', 'createdBy', 'createdTime', 'modifiedTime', 'images', 'checklist', 'attachments', 'sparklines', 'richText', 'color', 'rating', 'duration', 'startDate', 'dueDates'. For example, when you set the template to 'url', the cells will be render anchor tags. When you set the template property to HTMLTemplateElement you should consider that once a template is rendered, the formatObject.template property stores the rendered template component for further use.
   * Default value: 
   */
  template?: any;
  /**
   * Sets or gets additional settings related to the column's template. For example, when the template is 'sparklines', the templateSettings could be an object which defines has 'type' - 'bar', 'column', 'line' or 'pie'. If you want to apply a custom color, you can add the 'colorFunction: function(value) { } and return a custom color as a 'hex' string or a 'tooltipFormatFunction: function(value) {}' which returns a formatted tooltip string. Additional properties are 'min', 'max', 'gap' and 'strokeWidth'.
   * Default value: null
   */
  templateSettings?: any;
  /**
   * Sets or gets the column's validation rules. The expected value is an Array of Objects. Each object should have a 'type' property that can be set to 'required', 'min', 'max', 'minLength', 'maxLength', 'email', 'null', 'requiredTrue', 'minData', 'maxDate', 'pattern'. The 'value' property should be set, too. For validation rule types 'required', 'requiredTrue' and 'null' you can skip the 'value' property. Optional property is 'message', which determines the error message.
   * Default value: null
   */
  validationRules?: [] | null;
  /**
   * Sets or gets the column's header vertical alignment. Accepts: 'top', 'bottom' and 'center'
   * Default value: center
   */
  verticalAlign?: VerticalAlignment | string;
  /**
   * Sets or gets the column summary. The property should be set to an array with the following possible values: 'sum', 'min', 'max', 'avg', 'count', 'median', 'stdev', 'stdevp', 'var', 'varp'.
   * Default value: 
   */
  summary?: string[];
  /**
   * Updates the column's filter panel. The function works in combination with getFilterPanel
   * Default value: null
   */
  updateFilterPanel?: any;
  /**
   * Sets or gets whether the column is visible. Set the property to 'false' to hide the column.
   * Default value: true
   */
  visible?: boolean;
}

/**The Context Menu is the drop-down menu that appears when a user right-clicks on a row within the Grid. This menu provides quick access to actions such as deleting a row or editing a cell or entire row, depending on the current editing mode configured for the Grid. <br/><br/>You can customize the Context Menu by using the 'contextMenuItemCustom' option in the Grid's dataSource. This option lets you add your own custom menu items to enhance or extend the menu's functionality.<br/><br/>Additionally, if you want to completely replace the default context menu with your own, you can use the 'selector' property. Set this property to the ID of a Smart.Menu component to display your custom menu when the user right-clicks on a row in the Grid. */
export interface GridContextMenu {
  /**
   * Controls the visibility of the context menu within the component. When set to true, the context menu appears upon right-clicking a row, allowing users to access additional actions. If set to false, the context menu is disabled and will not appear when users right-click on a row. This property can be used to enable or restrict context menu interactions as needed.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Defines an array of custom context menu items that will appear when the user opens the context menu. Each item in the array specifies the label, action, and additional options for the menu entry, enabling developers to tailor the context menu to their application's specific requirements.
   * Default value: null
   */
  customContextMenuItems?: any[];
  /**
   * Associates a list of data sources with the context menu, enabling dynamic population of menu items based on the specified data. This allows the context menu to display relevant options according to the provided data sources.
   * Default value: [object Object]
   */
  dataSource?: GridContextMenuDataSource;
  /**
   * Specifies the ID or CSS class selector of a Smart.Menu component that will be used as the context menu for the Grid. This allows you to assign a custom menu that appears when users right-click on the Grid. The value should correspond to the Smart.Menu element’s unique ID (preceded by “#”) or a CSS class (preceded by “.”).
   * Default value: ""
   */
  selector?: string;
  /**
   * Specifies the width of the context menu in pixels. Adjusting this value determines how wide the context menu appears when displayed to users. This property helps ensure the menu fits its content appropriately and aligns with your application's design requirements.
   * Default value: 250
   */
  width?: number;
  /**
   * Specifies the vertical size of the context menu in pixels, determining how much space it occupies on the screen. Adjusting this value controls the overall height of the menu, which can affect the visibility and accessibility of its menu items.
   * Default value: null
   */
  height?: number | null;
}

/**Associates a list of data sources with the context menu, enabling dynamic population of menu items based on the specified data. This allows the context menu to display relevant options according to the provided data sources. */
export interface GridContextMenuDataSource {
  /**
   * Provides the structure and parameters required to delete an item, including details such as the unique identifier of the item to be removed and any necessary authentication or validation information. Outlines the expected request format and possible responses for a delete operation.
   * Default value: [object Object]
   */
  contextMenuItemDelete?: GridCommand;
  /**
   * Provides a detailed schema for the "edit item" operation, outlining the structure and fields required to update an existing item's information. This includes the item's unique identifier and any attributes that can be modified, ensuring accurate and efficient editing of item details within the application.
   * Default value: [object Object]
   */
  contextMenuItemEdit?: GridCommand;
  /**
   * Provides detailed information about the custom item, including its properties, attributes, and any associated metadata used for configuration and display within the application.
   * Default value: [object Object]
   */
  contextMenuItemCustom?: GridCommand;
}

/**Provides the structure and parameters required to delete an item, including details such as the unique identifier of the item to be removed and any necessary authentication or validation information. Outlines the expected request format and possible responses for a delete operation. */
export interface GridCommand {
  /**
   * Defines the specific command or action that will be executed when the user selects this item from the context menu. This property links the menu item to a corresponding function or handler in your application logic.
   * Default value: "contextMenuItemDeleteCommand"
   */
  command?: string;
  /**
   * Activates and displays the context menu item, making it available for user interaction within the application's right-click or context menu interface.
   * Default value: true
   */
  enabled?: boolean;
  /**
   * Controls whether the context menu item is visible to the user. When set to true, the item will appear in the context menu; when set to false, it will be hidden and not accessible through the menu interface.
   * Default value: true
   */
  visible?: boolean;
  /**
   * Specifies the icon image to display next to the context menu item, enhancing its visual appearance and helping users quickly identify the item's function. Accepts a URL or a predefined icon identifier, depending on the implementation.
   * Default value: "jqx-icon-delete"
   */
  icon?: string;
  /**
   * Specifies the text that appears as the label for the context menu item, allowing users to identify and select the menu option within the context menu.
   * Default value: ""
   */
  label?: string;
}

/**The Column Menu is a contextual drop-down menu that appears when you click the drop-down button in a column header, which becomes visible upon hovering over the header. This menu provides various options for customizing the behavior and appearance of the selected column. Common actions include sorting the grid by the column, applying filters to show or hide specific data, and grouping the grid rows based on the column’s values. The Column Menu offers an intuitive way for users to interact with and tailor the data grid to meet their specific needs. */
export interface GridColumnMenu {
  /**
   * Automatically closes the column menu when it is open. This ensures the menu is hidden from view, typically after a user action such as selecting an option or clicking outside the menu. This helps improve user experience by keeping the interface clean and responsive.
   * Default value: true
   */
  autoClose?: boolean;
  /**
   * Specifies the data sources available for selection or display within the column menu, allowing users to choose or interact with different data sets directly from the column menu interface.
   * Default value: [object Object]
   */
  dataSource?: GridColumnMenuDataSource;
  /**
   * Retrieves the current visibility status of the column menu. This function returns true if the column menu is currently displayed to the user; otherwise, it returns false.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Controls the visibility of the column menu. When set to true, the column menu appears when the user hovers over the column header, providing additional options for manipulating the column. If set to false, the column menu is disabled and will not be displayed on hover. This property can be used to enable or disable the column menu programmatically.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Specifies the width, in pixels, of the column menu panel. This determines how wide the menu appears when a user opens the column options in the table or grid interface. Adjust this value to control the available space for menu items and improve usability.
   * Default value: 250
   */
  width?: number;
  /**
   * Defines the vertical height, in pixels, of the column menu component. Adjusting this value determines how much vertical space the column menu occupies, which can impact the display and usability of the menu's content items.
   * Default value: null
   */
  height?: number | null;
}

/**Specifies the data sources available for selection or display within the column menu, allowing users to choose or interact with different data sets directly from the column menu interface. */
export interface GridColumnMenuDataSource {
  /**
   * Provides configuration options for customizing the appearance and behavior of the column menu, including settings for menu item visibility, ordering, and custom actions.
   * Default value: [object Object]
   */
  columnMenuCustomizeType?: GridCommand;
  /**
   * Provides configuration options for the "Rename" item within a column menu. Defines how the rename functionality behaves and appears in the column menu, including available settings such as labels, visibility, and callbacks for renaming actions.
   * Default value: [object Object]
   */
  columnMenuItemRename?: GridCommand;
  /**
   * Provides configuration options for customizing the edit description feature within a column menu item, allowing you to define how the description field appears, behaves, and is edited by users in the menu.
   * Default value: [object Object]
   */
  columnMenuItemEditDescription?: GridCommand;
  /**
   * Provides the configuration options for the "Duplicate" item within the column menu, allowing developers to customize its behavior, appearance, and availability in the user interface.
   * Default value: [object Object]
   */
  columnMenuItemClone?: GridCommand;
  /**
   * Provides the configuration settings for the "Insert Left" option in the column menu, allowing customization of its behavior, appearance, and availability within the user interface.
   * Default value: [object Object]
   */
  columnMenuItemInsertLeft?: GridCommand;
  /**
   * Provides detailed configuration options for the "Insert Right" menu item within a column menu. Specifies how the "Insert Right" action appears and behaves when users interact with the column menu, including display text, icons, visibility, and event handling.
   * Default value: [object Object]
   */
  columnMenuItemInsertRight?: GridCommand;
  /**
   * Provides configuration options for the "Sort Ascending" item in the column menu, allowing you to customize its appearance, behavior, and availability within the menu. This includes enabling or disabling the sort option, modifying its display text, and adjusting its icon or associated actions.
   * Default value: [object Object]
   */
  columnMenuItemSortAsc?: GridCommand;
  /**
   * Provides configuration options for the "Sort Descending" action within the column menu, allowing customization of its appearance, behavior, and accessibility in sortable grid or table components.
   * Default value: [object Object]
   */
  columnMenuItemSortDesc?: GridCommand;
  /**
   * Provides configuration options for the column menu item that enables users to add sorting functionality to table columns, allowing customization of sorting behavior and display within the column menu.
   * Default value: [object Object]
   */
  columnMenuItemSort?: GridCommand;
  /**
   * Provides configuration options for the "Remove Sort" item within a column's menu, allowing you to customize its appearance, behavior, and availability in the column menu interface.
   * Default value: [object Object]
   */
  columnMenuItemRemoveSort?: GridCommand;
  /**
   * Provides detailed configuration options for the filter functionality within a column menu item, allowing customization of filtering behavior, appearance, and available filter types in the column menu of a data grid or table component.
   * Default value: [object Object]
   */
  columnMenuItemFilter?: GridCommand;
  /**
   * Provides configuration options for the "Remove Filter" item within the column menu, allowing customization of its appearance, behavior, and availability.
   * Default value: [object Object]
   */
  columnMenuItemRemoveFilter?: GridCommand;
  /**
   * Provides the configuration options for the 'Group By' item within the column menu, allowing customization of grouping behavior, display text, and related features in the column menu interface.
   * Default value: [object Object]
   */
  columnMenuItemGroupBy?: GridCommand;
  /**
   * Provides configuration options for the "Group By" feature within a column menu, allowing you to customize how columns are grouped, displayed, and interacted with in the menu interface.
   * Default value: [object Object]
   */
  columnMenuItemRemoveGroupBy?: GridCommand;
  /**
   * Provides the configuration options for the "Hide" menu item within the column menu, allowing developers to control the visibility settings and behavior of column hiding functionality in the grid.
   * Default value: [object Object]
   */
  columnMenuItemHide?: GridCommand;
  /**
   * Provides configuration options for the "Delete" item within the column menu, allowing you to customize its behavior, appearance, and availability in the menu.
   * Default value: [object Object]
   */
  columnMenuItemDelete?: GridCommand;
}

export interface GridColumnGroup {
  /**
   * Sets the label.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets the column header's template. The property expects the 'id' of HTMLTemplateElement, HTML string or function which returns html string.
   * Default value: 
   */
  labelTemplate?: string | HTMLTemplateElement | HTMLElement | {(label: string): string};
  /**
   * Sets the align.
   * Default value: center
   */
  align?: HorizontalAlignment | string;
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
  verticalAlign?: VerticalAlignment | string;
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
  condition?: GridConditionalFormattingCondition | string;
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

/**Configures the data and display settings for the Grid Chart, enabling data visualization in a tabular grid format. This includes specifying the structure, appearance, and interactive features of the chart to present complex data clearly and intuitively. */
export interface GridCharting {
  /**
   * Specifies whether charting functionality is enabled. When set to true, charting features are available to users; when false, all chart-related features are disabled. This property can be used to retrieve the current status or to enable/disable charting dynamically.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Sets or retrieves the color palette used for chart elements. This property accepts values that correspond to the 'colorScheme' options available in our Chart component, allowing you to customize or match the chart's appearance to your application's theme.
   * Default value: "scheme01"
   */
  colorScheme?: string;
  /**
   * Specifies the HTML element that serves as the container for the chart. When set, the chart will be rendered inside the given element. When retrieved, returns the current container element associated with the chart.
   * Default value: null
   */
  appendTo?: string | HTMLElement;
  /**
   * "Retrieves or configures the charting dialog component. Use this property to access the current charting dialog instance or to assign a new dialog interface for displaying and customizing chart settings within the application."
   * Default value: [object Object]
   */
  dialog?: Dialog;
}

/**<br/>"Retrieves or configures the charting dialog component. Use this property to access the current charting dialog instance or to assign a new dialog interface for displaying and customizing chart settings within the application." */
export interface Dialog {
  /**
   * Sets or retrieves the text or content displayed in the dialog's header section. This property allows you to customize what appears at the top of the dialog, such as a title, instructions, or branding. When used as a setter, it updates the displayed header; when used as a getter, it returns the current header value.
   * Default value: ""
   */
  header?: string;
  /**
   * Specifies or retrieves the height of the dialog window. When set, this property defines the vertical size of the dialog in pixels or other valid CSS units. When accessed, it returns the current height value applied to the dialog.
   * Default value: 400
   */
  height?: number;
  /**
   * Specifies the width of the dialog. You can use this property to set a custom width for the dialog, or retrieve its current width value. Accepts values in CSS units such as pixels (e.g., '400px'), percentages (e.g., '50%'), or other valid CSS width formats.
   * Default value: 400
   */
  width?: number;
  /**
   * Specifies or retrieves the horizontal position (in pixels) of the dialog's left edge relative to its containing element or the viewport. This property allows you to set where the dialog appears from the left side, or to obtain its current left offset.
   * Default value: center
   */
  left?: string | number;
  /**
   * Specifies or retrieves the distance, in pixels, between the top edge of the dialog and the top edge of the containing element or viewport. This property allows you to programmatically set or obtain the vertical position of the dialog on the screen.
   * Default value: center
   */
  top?: string | number;
  /**
   * Specifies or retrieves whether the dialog is currently enabled. When set to true, the dialog is active and can interact with user input; when set to false, the dialog is disabled and user interaction is blocked.
   * Default value: true
   */
  enabled?: boolean;
  /**
   * Determines whether the dialog is currently visible on the screen. Returns true if the dialog is being displayed; otherwise, returns false.
   * Default value: false
   */
  visible?: boolean;
}

/**Configures the checkbox options for the TreeGrid component, allowing you to enable or customize checkbox display, selection behavior, and interaction within the hierarchical grid structure. */
export interface GridCheckBoxes {
  /**
   * Controls whether the checkboxes in the TreeGrid are displayed or hidden, allowing you to enable or disable checkbox visibility for tree nodes.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Enables or disables the three-state mode for TreeGrid checkboxes. When three-state mode is enabled, selecting or deselecting a checkbox will cascade the change to all its child rows, and parent row checkboxes will automatically reflect the checked, unchecked, or indeterminate state based on the selection status of their child rows. This ensures hierarchical relationships are visually and functionally represented in the checkbox states.
   * Default value: false
   */
  hasThreeStates?: boolean;
}

/**Configures the export settings for grid data, including file format, selected columns, data range, export style, and additional export preferences. */
export interface GridDataExport {
  /**
   * Determines whether the column headers are included when exporting the data. If enabled, the exported file will contain the header row with column names; if disabled, only the data rows will be exported without column headers.
   * Default value: true
   */
  header?: boolean;
  /**
   * Determines if the current export includes only the data that matches the filters applied in the interface. When enabled, only filtered results will be exported; when disabled, the export will contain all available data regardless of active filters.
   * Default value: null
   */
  filterBy?: any;
  /**
   * Specifies the grouping criteria applied to the exported data, determining how records are organized into distinct groups in the exported file. This setting allows you to control the categorization or segmentation of data during the export process.
   * Default value: null
   */
  groupBy?: any;
  /**
   * Specifies a custom style object to format the appearance of the dataExport, allowing you to define properties such as fonts, colors, borders, and cell alignment for the exported data.
   * Default value: null
   */
  style?: any;
  /**
   * Specifies the name that will be assigned to the exported file when it is saved or downloaded.
   * Default value: "jqxGrid"
   */
  fileName?: string;
  /**
   * Specifies the orientation of the page (portrait or landscape) when exporting the document to PDF format. This setting determines how the content is laid out on each PDF page.
   * Default value: portrait
   */
  pageOrientation?: GridDataExportPageOrientation | string;
  /**
   * Specifies the character or symbol shown for expanded rows in a Grid with row hierarchy (such as a TreeGrid or Grouped Grid) when the data is exported. This character visually indicates expanded nodes in the exported file.
   * Default value: "+"
   */
  expandChar?: string;
  /**
   * Specifies the character or symbol used to represent collapsed rows when exporting a Grid that includes row hierarchy features, such as TreeGrid or grouped rows. This character will indicate collapsed states in the exported file.
   * Default value: "-"
   */
  collapseChar?: string;
  /**
   * Exports only the data currently visible in the Grid, excluding any rows or columns that are filtered, hidden, or outside the current viewport.
   * Default value: false
   */
  view?: boolean;
  /**
   * Specifies the starting row index for data export or printing operations. This determines which row the process will begin from. Ensure that the 'view' parameter is set to true for this setting to take effect.
   * Default value: null
   */
  viewStart?: number | null;
  /**
   * Specifies the index of the last row to be included during export or print operations. When using this option, ensure that the 'view' parameter is set to true to apply the index relative to the current view or filtered dataset, rather than the entire data set.
   * Default value: null
   */
  viewEnd?: number | null;
  /**
   * An array containing the IDs of the rows that should be included in the export operation. Each element in the array represents the unique identifier of a row to be exported.
   * Default value: null
   */
  rowIds?: {(): void};
  /**
   * An array containing custom row objects that will be rendered above the main Grid rows, allowing you to insert additional content or elements before the standard grid data appears.
   * Default value: null
   */
  headerContent?: any;
  /**
   * A customizable array containing additional row objects that will be appended to the end of the default Grid rows. Use this property to insert extra rows with custom content or functionality after the main set of Grid rows.
   * Default value: null
   */
  footerContent?: any;
  /**
   * This is a callback function designed for inserting images into individual cells during an "Export to Excel" operation. The function receives the following parameters:- 'index': The current cell index in the export process.- 'dataField': The field name associated with the current cell's data.- 'value': The image data, typically as a base64-encoded string.- 'values': An array containing all values for the entire column being exported.The function should return an object that defines the image to be placed in the Excel cell. The returned object has the following structure:'''javascriptreturn {  image: {    id: 'myImage' + index,  // Unique identifier for the image.    base64: value,          // Base64-encoded image data.    imageType: 'jpeg',      // Image format, e.g., 'jpeg' or 'png'.    width: 20,              // Image width, in Excel units (pixels or points).    height: 11,             // Image height, in Excel units.    position: {      offsetX: 10 + (25 * values.indexOf(value)), // Horizontal offset for image positioning in the cell.      offsetY: 5.5                                 // Vertical offset for image positioning in the cell.    }  }};'''This object specifies:- The image's unique ID and format.- The image's visual size within the cell.- The position offsets to control exactly where the image appears inside the cell.By customizing these properties, you can control how images are embedded and displayed for each Excel cell during export.
   * Default value: null
   */
  addImageToCell?: any;
  /**
   * This function enables you to customize the height of each row when exporting data to Excel. It receives the row index as a parameter and should return a numeric value representing the desired height for that specific row. By using this function, you can dynamically control the appearance of rows in your exported Excel file, such as setting different heights for header, data, or summary rows.
   * Default value: null
   */
  setRowHeight?: any;
  /**
   * Defines a function that enables you to include additional data in the Excel export, allowing you to create and export multiple sheets within a single Excel file. This function provides flexibility to specify extra datasets or customize the content of each sheet according to your requirements.
   * Default value: null
   */
  getSpreadsheets?: any;
  /**
   * A function that enables you to export a data grid—complete with applied styles and formatting—directly to an Excel file, preserving the grid’s visual appearance and structure in the exported document.
   * Default value: true
   */
  exportStyles?: boolean;
  /**
   * A function that enables customization of cell formatting prior to data export. It receives three parameters: index (the row index of the cell), dataField (the key or field name corresponding to the cell), and value (the original value of the cell). The function should return the formatted value, which will be used in the exported output instead of the original value."
   * Default value: null
   */
  cellFormatFunction?: any;
  /**
   * Determines whether the header row remains fixed (frozen) at the top of the worksheet when the data is exported to Excel. If enabled, users can scroll through the exported data while still viewing the column headers.
   * Default value: false
   */
  freezeHeader?: boolean;
  /**
   * Determines if formulas in the exported Excel file will be automatically converted to their corresponding calculated values. When enabled, all formulas are replaced with their results in the export; when disabled, original formulas are preserved in the Excel sheet.
   * Default value: true
   */
  autoConvertFormulas?: boolean;
  /**
   * Determines if only the currently selected cells or rows are exported to Excel, instead of exporting the entire data set. When enabled, only the user's selection will be included in the exported Excel file.
   * Default value: false
   */
  onlySelected?: boolean;
  /**
   * Specifies whether the data should be exported as an Excel Table (with structured formatting and table features) when using the Export to Excel function. If enabled, the exported file will present the data as an Excel Table; if disabled, the data will be exported as plain worksheet content without table formatting.
   * Default value: false
   */
  exportAsTable?: boolean;
}

/**Configures the grid’s data source when the <em>dataSource</em> property is assigned either a JavaScript array (for local data) or a URL (for remote data). This setting determines how the grid retrieves and displays its data, supporting both direct array binding and remote data fetching via HTTP requests. */
export interface GridDataSourceSettings {
  /**
   * Specifies whether a column should be automatically generated by the system (such as for identity or timestamp fields). When set, the column’s value will be created by the database or application rather than provided manually. This property can be read to determine if the column is currently set to auto-generate its values, or written to enable or disable automatic generation.
   * Default value: false
   */
  autoGenerateColumns?: boolean;
  /**
   * Specifies the name of the data field—such as 'children' or 'items'—that contains nested child items within each object in the data source. When this property is set, the dataAdapter searches for this specified field in each item while processing the data. If the field is present, the dataAdapter treats the data as hierarchical and automatically constructs a hierarchical data structure, allowing for nested or tree-like representations. This property can be both retrieved (get) and updated (set) as needed.
   * Default value: ""
   */
  childrenDataField?: string;
  /**
   * Sets or retrieves the root element used for XML data binding. This property specifies the top-level XML element that serves as the entry point for mapping XML data to objects, or for serializing objects to XML.
   * Default value: blackList
   */
  sanitizeHTML?: GridDataSourceSettingsSanitizeHTML | string;
  /**
   * Gets or sets the root element used for XML data binding, which serves as the primary node for mapping XML data to object structures or vice versa.
   * Default value: ""
   */
  root?: string;
  /**
   * Gets or sets the XML binding record, which defines the mapping between XML data and the corresponding data structure in the application. Use this property to retrieve the current binding configuration or to assign a new XML binding record for data serialization and deserialization operations.
   * Default value: ""
   */
  record?: string;
  /**
   * Specifies or retrieves the fields used to group the data. When set, this property determines which data fields will be used to organize the dataset into groups, allowing for aggregation or categorization based on the specified fields.
   * Default value: []
   */
  groupBy?: string[];
  /**
   * Defines or retrieves the schema that describes the structure of the loaded data, including both the field names and their corresponding data types. For example: ['id: number', 'firstName: string', 'lastName: string'] specifies that the data has three fields—id as a number, firstName as a string, and lastName as a string. This property ensures that the data adheres to the expected format for processing and validation.
   * Default value: null
   */
  dataFields?: GridDataSourceSettingsDataField[];
  /**
   * Specifies or retrieves the type of data source being used, allowing you to define or query the data source format (such as JSON, XML, or a database connection).
   * Default value: array
   */
  dataSourceType?: GridDataSourceSettingsDataSourceType | string;
  /**
   * Sets or retrieves the unique identifier (ID) associated with the dataAdapter instance. This ID can be used to distinguish between multiple dataAdapters in your application and for referencing or managing them programmatically.
   * Default value: ""
   */
  id?: string;
  /**
   * Specifies the data field that uniquely identifies each item in the hierarchy, typically using the 'id' field. This property works in conjunction with the parentDataField property, which defines the field that refers to the parent item's identifier (commonly 'parentId'). Together, these fields establish the hierarchical structure by linking each child item to its parent. This property can be used to both set and retrieve the key field used for building the hierarchy.
   * Default value: ""
   */
  keyDataField?: string;
  /**
   * Specifies the data field that identifies the parent node for each item in a hierarchical data structure. This property is used together with the keyDataField property to establish relationships between items—typically, keyDataField refers to the unique identifier of an item (commonly the 'id' field), while the parentDataField references the identifier of the item's parent (often the 'parentId' field). This setup allows the component to construct the hierarchy by linking each item to its parent based on matching key and parent values.
   * Default value: ""
   */
  parentDataField?: string;
  /**
   * Updates the value of the 'mapChar' field within the record, assigning it a specified character or string. This field typically stores data related to mapping or identification purposes within the record object.
   * Default value: "."
   */
  mapChar?: string;
  /**
   * Controls the grid’s relational data configuration. This property accepts an array of relation definition objects, where each object must include the following fields:  - 'id' *(string)*: A unique identifier for the relation.  - 'label' *(string)*: A descriptive name for the relation, used for display purposes.  - 'columns' *(GridColumn[])*: An array of grid column definitions associated with this relation.  - 'dataSource' *(any)*: The data source from which related records are retrieved (e.g., an array, function, or external API endpoint).Once you have defined the grid relations, you can reference them in individual column configurations by specifying the 'relationId' (to link the column to a relation) and 'relationField' (to indicate which field from the related data to use). When these properties are set, the grid will automatically generate an appropriate column editor (such as a dropdown or lookup field) that leverages the provided relation settings, streamlining data entry and ensuring data consistency.
   * Default value: null
   */
  relations?: any;
  /**
   * Defines the virtual data source function, which is invoked by the Grid every time it needs to fetch data—such as when the user scrolls or sorts. This function should use the provided parameters to retrieve or generate the required data, and then pass the results back to the Grid by calling the callback function with the new data set. For example: resultCallbackFunction({dataSource: data}); This approach enables efficient data loading for large datasets by fetching only the necessary records as needed (virtual scrolling). For a working example, refer to the Grid demos page: https://www.htmlelements.com/demos/grid/virtualscroll/
   * Default value: null
   */
  virtualDataSource?: {(resultCallbackFunction: any, details: DataAdapterVirtualDataSourceDetails): void};
  /**
   * Enhances the virtual data source during node expansion in Tree and TreeGrid components. When these components are configured with a virtualDataSource, this function is triggered each time a node is expanded and additional data needs to be loaded on demand. It enables efficient, real-time loading of child node data only as needed, supporting large data sets without preloading the entire hierarchy. For implementation details and a live demonstration, see: https://www.htmlelements.com/demos/grid/virtual-tree-grid/
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
  dataType?: GridDataSourceSettingsDataFieldDataType | string;
}

/**Provides comprehensive configuration options for controlling the grid's editing behavior, including enabling or disabling editing features, specifying editing modes (such as inline, popup, or batch), setting validation rules, and customizing editors for specific columns. */
export interface GridEditing {
  /**
   * Allows users to edit the content of cells designated as row headers, enabling direct modification of row header values within the table.
   * Default value: false
   */
  allowRowHeaderEdit?: boolean;
  /**
   * Allows users to edit the text of column headers directly within the interface, enabling customization of header labels according to their preferences or requirements.
   * Default value: false
   */
  allowColumnHeaderEdit?: boolean;
  /**
   * Automatically reapplies any previously set column filters and sort orders after an edit is made, ensuring that user-defined table views remain consistent and uninterrupted following data modifications.
   * Default value: true
   */
  autoUpdateFilterAndSort?: boolean;
  /**
   * Automatically opens the drop-down editor both when the arrow button is clicked and when any item within the drop-down list is selected. This ensures the editor remains accessible regardless of whether the user interacts with the arrow or directly with a list item.
   * Default value: true
   */
  allowListOpenOnContentClick?: boolean;
  /**
   * Allows users to modify or update existing content directly within the interface. This feature typically provides editing controls, such as input fields or rich text editors, enabling seamless changes to data or text as needed.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Enables batch editing functionality, allowing users to modify multiple rows within the grid on the client side before saving any changes. All edits can be submitted together in a single server request, improving efficiency and reducing the number of server calls needed for updates.
   * Default value: false
   */
  batch?: boolean;
  /**
   * Specifies the method by which the editing mode is activated, such as through a single click, double click, or keyboard action.
   * Default value: click
   */
  action?: GridEditingAction | string;
  /**
   * "Read Only Edit is a grid mode where editing a cell does not directly change the underlying data in the grid. Instead, when a cell edit is attempted, the grid triggers the 'onCellEditRequest' callback, allowing your application to handle and process the update request as needed. This mode is useful for implementing custom edit workflows or for integrating with external data sources, as it gives you complete control over how changes are applied."
   * Default value: false
   */
  readOnlyEdit?: boolean;
  /**
   * Provides detailed definitions and mappings for command keyboard shortcuts, specifying the key combinations used to trigger various actions within an application or system.
   * Default value: [object Object]
   */
  commandKeys?: GridEditingCommandKeys;
  /**
   * Defines the configuration options for the grid's command bar, a user interface element that appears as a toolbar or status bar above or below the grid. The command bar provides interactive buttons or tools, such as Save and Revert, allowing users to commit or undo changes made within the grid. These settings control the appearance, available actions, and behavior of the command bar to enhance grid editing workflows.
   * Default value: [object Object]
   */
  commandBar?: GridEditingCommandBar;
  /**
   * Defines the configuration options for the grid’s command column. The command column provides action buttons—such as Edit and Delete—that allow users to interact with individual rows. You can customize the available commands, their display order, button text, icons, and event handlers to control how actions are performed on row data.
   * Default value: [object Object]
   */
  commandColumn?: GridEditingCommandColumn;
  /**
   * Enables or configures the grid's cell editing functionality by setting its edit mode. This determines how users can interact with and modify the grid’s cell values—such as enabling inline editing, displaying an edit dialog, or disabling editing entirely.
   * Default value: cell
   */
  mode?: GridEditingMode | string;
  /**
   * Defines the configuration options for the 'Add New Row' UI element, which allows users to quickly append new rows to the Grid with a single click. This includes customization of the button’s appearance, position, default values for new rows, and any associated event handlers.
   * Default value: [object Object]
   */
  addNewRow?: GridEditingAddNewRow;
  /**
   * Allows users to dynamically add new columns directly from the user interface. When this feature is enabled, a '+' icon appears as the last column in the table. Clicking the '+' icon opens a dialog window where users can enter details for the new column, facilitating easy and intuitive column creation without leaving the current view.
   * Default value: [object Object]
   */
  addNewColumn?: GridEditingAddNewColumn;
  /**
   * Provides a detailed configuration for the dialog’s editing settings, specifying available editing modes, permissions, interface options, and user interaction behaviors within the dialog component.
   * Default value: [object Object]
   */
  dialog?: Dialog;
  /**
   * Provides detailed configuration options for the settings panel displayed in the "Add" dialog, including field definitions, default values, input validation rules, and UI behavior customizations.
   * Default value: [object Object]
   */
  addDialog?: Dialog;
  /**
   * Describes delete dialog's settings
   * Default value: [object Object]
   */
  deleteDialog?: Dialog;
}

/**Provides detailed definitions and mappings for command keyboard shortcuts, specifying the key combinations used to trigger various actions within an application or system. */
export interface GridEditingCommandKeys {
  /**
   * Provides details about the keyboard shortcut or key binding assigned to trigger the edit command within the application. This property specifies which key or key combination the user can press to activate editing functionality.
   * Default value: [object Object]
   */
  commandKeyEdit?: GridCommandKey;
  /**
   * Provides details about the "cancel" command key, specifying its function as an input to terminate or interrupt an ongoing operation. This key is commonly used to halt processes, dismiss dialogs, or cancel actions within an application or user interface.
   * Default value: [object Object]
   */
  commandKeyCancel?: GridCommandKey;
  /**
   * Provides detailed information about the "update" command key, specifying its purpose, usage, and expected behavior when invoked within the system. This includes how the "update" command modifies data, any parameters it accepts, and the outcomes or changes it triggers in the application.
   * Default value: [object Object]
   */
  commandKeyUpdate?: GridCommandKey;
}

/**Provides details about the keyboard shortcut or key binding assigned to trigger the edit command within the application. This property specifies which key or key combination the user can press to activate editing functionality. */
export interface GridCommandKey {
  /**
   * Specifies the identifier or label used to trigger the edit key command, allowing customization of the keyboard shortcut or command name for editing functionality.
   * Default value: "commandKeyEditCommand"
   */
  command?: string;
  /**
   * Specifies the keyboard key or combination of keys that triggers the edit command, allowing users to enter edit mode when the defined key(s) are pressed.
   * Default value: "F2"
   */
  key?: string;
}

/**Defines the configuration options for the grid's command bar, a user interface element that appears as a toolbar or status bar above or below the grid. The command bar provides interactive buttons or tools, such as Save and Revert, allowing users to commit or undo changes made within the grid. These settings control the appearance, available actions, and behavior of the command bar to enhance grid editing workflows. */
export interface GridEditingCommandBar {
  /**
   * Displays the command bar, allowing users to access and execute available commands and features within the application.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Specifies the location of the command bar within the user interface, determining where it appears on the screen (e.g., top, bottom, left, or right).
   * Default value: near
   */
  position?: LayoutPosition | string;
  /**
   * Specifies the content, such as text labels, icons, or both, that will appear on the command bar buttons. This determines the visual elements shown to users within each button on the command bar interface.
   * Default value: labelAndIcon
   */
  displayMode?: GridCommandDisplayMode | string;
  /**
   * Configures the data source that populates the command bar, determining which commands or actions are displayed to the user. This property specifies where the command bar retrieves its list of available options.
   * Default value: [object Object]
   */
  dataSource?: GridEditingCommandBarDataSource;
}

/**Configures the data source that populates the command bar, determining which commands or actions are displayed to the user. This property specifies where the command bar retrieves its list of available options. */
export interface GridEditingCommandBarDataSource {
  /**
   * Provides a detailed configuration schema for the "Add Row" button within the command bar, specifying its appearance, behavior, accessibility options, and parameters that control how new rows are added to the underlying data set. This includes properties such as label text, icon, button state (enabled/disabled), event handlers, and any associated tooltips or confirmation dialogs.
   * Default value: [object Object]
   */
  commandBarAddRow?: GridCommand;
  /**
   * Provides detailed configuration options for the command bar button specifically used to delete rows, including its label, icon, confirmation prompts, visibility, enabled/disabled state, and any associated callback or event handler functions.
   * Default value: [object Object]
   */
  commandBarDeleteRow?: GridCommand;
  /**
   * Provides detailed configuration options for the save button within the command bar, including its label, icon, enabled/disabled state, tooltip text, and associated save action behavior.
   * Default value: [object Object]
   */
  commandBarBatchSave?: GridCommand;
  /**
   * Provides detailed configuration options for the command bar button that allows users to revert or undo recent changes. This includes settings such as button label, icon, tooltip text, visibility, enabled state, and associated action handlers.
   * Default value: [object Object]
   */
  commandBarBatchRevert?: GridCommand;
}

/**Defines the configuration options for the grid’s command column. The command column provides action buttons—such as Edit and Delete—that allow users to interact with individual rows. You can customize the available commands, their display order, button text, icons, and event handlers to control how actions are performed on row data. */
export interface GridEditingCommandColumn {
  /**
   * Displays the command column, allowing users to view and interact with available actions or commands for each row within the table.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Displays the command column directly within the main content area (inline), rather than in a separate section. This allows actions like edit or delete to appear alongside each data row for easier, more integrated user interaction.
   * Default value: false
   */
  inline?: boolean;
  /**
   * Specifies the position of the command column within the table, determining where the command buttons (such as edit, delete, or custom actions) will appear relative to other columns.
   * Default value: far
   */
  position?: Position | string;
  /**
   * Defines the content or label displayed within the buttons of the command column, such as text, icons, or custom HTML elements. This determines what users see and interact with in each command button cell.
   * Default value: icon
   */
  displayMode?: GridCommandDisplayMode | string;
  /**
   * Defines the data source for the command column, specifying which dataset or field the column should retrieve and display its command-related values from. This determines the contents and available actions within the command column.
   * Default value: [object Object]
   */
  dataSource?: GridEditingCommandColumnDataSource;
  /**
   * Specifies the width of the command column in the table or grid, determining how much horizontal space is allocated for action buttons or command controls within each row.
   * Default value: null
   */
  width?: number | null;
}

/**Defines the data source for the command column, specifying which dataset or field the column should retrieve and display its command-related values from. This determines the contents and available actions within the command column. */
export interface GridEditingCommandColumnDataSource {
  /**
   * Provides configuration options for the command button displayed in the column header. This button, by default, opens a menu that includes a Column Chooser, allowing users to select which columns are visible in the grid. These settings let you customize the appearance, behavior, and available actions of the command button in the column header.
   * Default value: [object Object]
   */
  commandColumnMenu?: GridCommand;
  /**
   * Provides detailed configuration options for the command column's edit button, allowing customization of its behavior, appearance, and functionality when editing rows in the data grid.
   * Default value: [object Object]
   */
  commandColumnEdit?: GridCommand;
  /**
   * Provides the configuration options for the delete button located in the command column, detailing its appearance, behavior, and functionality when removing rows from the data source.
   * Default value: [object Object]
   */
  commandColumnDelete?: GridCommand;
  /**
   * Provides configuration options for the update button within the command column, allowing you to customize its appearance, behavior, and actions when updating rows in the data grid.
   * Default value: [object Object]
   */
  commandColumnUpdate?: GridCommand;
  /**
   * Provides configuration options for the "Cancel Edit" button within the command column, allowing you to customize its appearance, behavior, and functionality when a user cancels an editing action.
   * Default value: [object Object]
   */
  commandColumnCancel?: GridCommand;
  /**
   * Provides detailed configuration options for the row menu button located in the command column, allowing customization of its appearance, behavior, and available menu actions within each row.
   * Default value: [object Object]
   */
  commandColumnRowMenu?: GridCommand;
  /**
   * Provides configuration options for customizing the appearance and behavior of a custom button within the command column, such as its text, icon, styling, and associated actions.
   * Default value: [object Object]
   */
  commandColumnCustom?: GridCommand;
}

/**Defines the configuration options for the 'Add New Row' UI element, which allows users to quickly append new rows to the Grid with a single click. This includes customization of the button’s appearance, position, default values for new rows, and any associated event handlers. */
export interface GridEditingAddNewRow {
  /**
   * Inserts a new row when the Enter key is pressed and the currently focused row is the last row in the table. This allows users to quickly add additional rows by pressing Enter at the end of the table.
   * Default value: false
   */
  autoCreate?: boolean;
  /**
   * Specifies whether a newly added row should automatically enter edit mode immediately after it is inserted, allowing the user to edit its contents without requiring an additional action.
   * Default value: true
   */
  autoEdit?: boolean;
  /**
   * Specifies the exact placement of the ‘Add New Row’ user interface element within the layout. This determines where the button or control for adding a new row will appear on the page, such as at the top, bottom, or a designated section of the grid or form.
   * Default value: both
   */
  position?: LayoutPosition | string;
  /**
   * Controls whether the new row action is displayed as a full-width row or as a button. Accepts two values: 'row' to show the action as an entire row, or 'button' to render it as a button element. This property can be used to both retrieve the current display mode and set a new one.
   * Default value: row
   */
  displayMode?: GridEditingAddNewRowDisplayMode | string;
  /**
   * Displays the 'Add New Row' user interface element, allowing users to see and interact with the control for adding a new row to the data table or form.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Defines the text displayed on the 'Add New Row' button or UI element, allowing customization of the label users see when adding a new row to the interface.
   * Default value: ""
   */
  label?: string;
}

/**Allows users to dynamically add new columns directly from the user interface. When this feature is enabled, a '+' icon appears as the last column in the table. Clicking the '+' icon opens a dialog window where users can enter details for the new column, facilitating easy and intuitive column creation without leaving the current view. */
export interface GridEditingAddNewColumn {
  /**
   * Displays the 'Add New Row' user interface element, allowing users to view and interact with the option to insert a new row into the dataset or table.
   * Default value: false
   */
  visible?: boolean;
}

/**Provides detailed configuration options for the grid's filtering functionality, including filter types, default filter values, filter operators, and custom filter logic for columns. This determines how data within the grid can be searched, narrowed, or displayed based on user-defined criteria. */
export interface GridFiltering {
  /**
   * Allows users to filter data based on specific criteria, enabling the display of only relevant information according to selected filters.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Specifies the logical operator ('and' or 'or') used to combine multiple column filters in the Grid. By default, filters are combined using the 'and' operator, meaning that a row must satisfy all filter conditions (e.g., columnA 'and' columnB) to be included in the results. Alternatively, you can set the operator to 'or' to return rows that match 'any' of the filter conditions (e.g., columnA 'or' columnB).'Example:'  '''jsgrid.filtering.operator = 'or';grid.addFilter('lastName', 'contains "davolio"');grid.addFilter('firstName', 'contains "Antoni"');'''This configuration applies two filters to the Grid and will display all rows where 'either' 'firstName' contains "Antoni" 'or' 'lastName' contains "Davolio".Use this property to control how multiple filters are combined when filtering data in the Grid.
   * Default value: "and"
   */
  operator?: string;
  /**
   * An array specifying the filtering conditions to be applied to the DataGrid. Each element in the 'filter' array represents a single filter and is itself an array with two elements:1. 'Column dataField:' The name of the column to which the filter will be applied.2. 'Filter condition(s):' A string or expression that defines the criteria to filter the column’s data. This can include a condition or multiple conditions combined using logical operators such as 'or' and 'and'.'Example 1:'  To search for rows where the "firstName" column contains 'Andrew' or 'Nancy', and the "quantity" column is either less than or equal to 3 or greater than or equal to 8:'''js[  ['firstName', 'contains Andrew or contains Nancy'],  ['quantity', '= 8']]''''Example 2:'  For columns configured with 'filterMenuMode: "excel"', you can express multiple "equals" conditions:'''js[  ['firstName', 'EQUAL Andrew or EQUAL Antoni or EQUAL Beate']]''''Example 3:'  To filter a string column for values containing either 'burke' or 'peterson':'''js[  ['lastName', 'CONTAINS burke or CONTAINS peterson']]''''Supported filter operators:'  You may use a variety of filter operators and keywords within filter expressions. Common operators include:- Equality: '=', 'EQUAL'- Inequality: '!=', '- Comparison: '', 'GREATER_THAN', '=', 'GREATER_THAN_OR_EQUAL'- String matching: 'CONTAINS', 'DOES_NOT_CONTAIN', 'STARTS_WITH', 'ENDS_WITH'- Special: 'EMPTY', 'NULL', 'NOT_NULL'Multiple conditions can be combined in a single expression with logical operators ('and', 'or').  This flexible structure enables complex filtering based on your DataGrid’s current columns and data types.
   * Default value: 
   */
  filter?: any[];
  /**
   * Provides detailed configuration options for the filter row, including its appearance, behavior, available filter types, and display settings. This allows developers to customize how the filter row is shown and how users interact with filtering features in the component.
   * Default value: [object Object]
   */
  filterRow?: GridFilteringFilterRow;
  /**
   * Provides detailed configuration options for the filter menu, including available filter types, display preferences, default selections, and customizable behaviors to control how users interact with and apply filters within the menu interface.
   * Default value: [object Object]
   */
  filterMenu?: GridFilteringFilterMenu;
  /**
   * (In Development) Provides a comprehensive configuration schema for the filter builder component, detailing available settings and customization options to control its behavior, appearance, and functional parameters during implementation.
   * Default value: [object Object]
   */
  filterBuilder?: GridFilteringFilterBuilder;
}

/**Provides detailed configuration options for the filter row, including its appearance, behavior, available filter types, and display settings. This allows developers to customize how the filter row is shown and how users interact with filtering features in the component. */
export interface GridFilteringFilterRow {
  /**
   * Displays the filter row, allowing users to enter criteria and filter the displayed data directly within the grid or table interface.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Displays the filter row’s menu, allowing users to view and interact with filter options for data columns.
   * Default value: false
   */
  menuVisible?: boolean;
  /**
   * Determines how filters entered in the filter row are applied to the data, specifying whether filtering occurs automatically as the user types or only after a specific action, such as pressing Enter or clicking a filter button.
   * Default value: auto
   */
  applyMode?: GridFilteringFilterRowApplyMode | string;
  /**
   * Specifies the delay, in milliseconds, before the filtering action is triggered after the user modifies a filter input. This setting is only applicable when filtering.filterRow.applyMode is set to 'auto', allowing you to control how quickly the filtering is applied as the user types.
   * Default value: 300
   */
  autoApplyModeDelay?: number;
}

/**Provides detailed configuration options for the filter menu, including available filter types, display preferences, default selections, and customizable behaviors to control how users interact with and apply filters within the menu interface. */
export interface GridFilteringFilterMenu {
  /**
   * Controls whether the filter menu is displayed to the user. Set this option to show or hide the filter menu based on your application's requirements.
   * Default value: true
   */
  visible?: boolean;
  /**
   * Specifies the text label displayed on the filter menu button, allowing you to customize the button’s caption to better describe its function or improve user experience.
   * Default value: cancel,clear,filter
   */
  buttons?: string[];
  /**
   * Specifies the display mode for the filter menu, determining how filtering options are presented to the user (e.g., dropdown, modal, or inline).
   * Default value: default
   */
  mode?: GridFilteringFilterMenuMode | string;
  /**
   * Configures the data source for the filter menu, specifying the list of available options that users can select when applying filters. This determines which values appear in the filter dropdown and can be set to a static array or a dynamic data source such as an API endpoint or database query.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Specifies the width, in pixels or a valid CSS unit, of the filter menu component. This determines how wide the filter menu appears in the user interface.
   * Default value: 250
   */
  width?: number;
  /**
   * Specifies the vertical dimension (in pixels, ems, or other supported units) of the filter menu, determining how much space the menu occupies on the screen. Adjusting this value changes the overall height of the filter menu component.
   * Default value: 200
   */
  height?: number;
}

/**(In Development) Provides a comprehensive configuration schema for the filter builder component, detailing available settings and customization options to control its behavior, appearance, and functional parameters during implementation. */
export interface GridFilteringFilterBuilder {
  /**
   * Controls whether the filter builder component is displayed or hidden in the user interface. When enabled, users can access and use the filter builder to create or modify filters; when disabled, the filter builder is not visible or accessible.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Defines the vertical size, in pixels or other supported units, of the filter builder component. This property determines how tall the filter builder appears in the user interface, allowing you to control its visual layout and accommodate the desired amount of content.
   * Default value: null
   */
  height?: number | null;
}

/**Provides configuration options for customizing the appearance and behavior of the grid's footer, including visibility, content, styling, and layout settings. */
export interface GridFooter {
  /**
   * Controls whether the footer section is displayed or hidden on the webpage.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Defines the layout and content structure for the website footer by specifying a customizable template that determines how footer elements are displayed.
   * Default value: 
   */
  template?: string | HTMLTemplateElement | {(element: HTMLElement): void};
}

/**Provides detailed configuration options for the grid's data grouping functionality, specifying how rows are grouped, the grouping criteria, and related display settings within the grid. */
export interface GridGrouping {
  /**
   * Allows items or data to be organized into groups based on specified criteria, making it easier to manage, categorize, or display related elements together within the application.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Allows users to expand or collapse grouped sections, enabling them to hide or reveal grouped content within the interface as needed.
   * Default value: false
   */
  allowCollapse?: boolean;
  /**
   * Automatically expands all grouped sections within the interface, making all nested content visible to the user without requiring manual interaction.
   * Default value: false
   */
  autoExpandAll?: boolean;
  /**
   * Automatically expands all collapsible groups within the interface up to the specified hierarchical level, ensuring that all nested groups at or above this level are visible by default.
   * Default value: 0
   */
  autoExpandToLevel?: number;
  /**
   * Automatically hides all columns that are part of a group, streamlining the display by collapsing grouped columns from view. This feature improves user interface clarity by reducing on-screen clutter and allowing users to focus on ungrouped or expanded columns.
   * Default value: false
   */
  autoHideGroupColumn?: boolean;
  /**
   * Specifies how groups are expanded or collapsed within the component. Determines whether groups are expanded by default, collapsed, or if a custom behavior is applied.
   * Default value: buttonClick
   */
  expandMode?: GridGroupingExpandMode | string;
  /**
   * Defines or retrieves the function responsible for formatting the data displayed in the column. This function determines how raw cell values are converted to their final, user-visible representation (e.g., formatting dates, numbers, or custom display logic).
   * Default value: null
   */
  formatFunction?: {(formatObject: {row?: GridRow, column?: GridColumn, cell?: GridCell, value?: any, template?: any, data?: any}): void};
  /**
   * Specifies the height, in pixels, for rows that represent grouping headers within a data grid or table. This determines how much vertical space each group row occupies, ensuring consistent formatting and appearance for grouped data sections.
   * Default value: 50
   */
  groupRowHeight?: string | number;
  /**
   * Specifies the data fields used for grouping, or retrieves the current fields that are set for grouping data.
   * Default value: []
   */
  groupBy?: string[];
  /**
   * Specifies the indentation level for the group, determining the amount of space applied to visually offset the group’s content from the left margin.
   * Default value: 16
   */
  groupIndent?: number;
  /**
   * Provides detailed configuration options for the group bar component, including settings for appearance, behavior, and functionality.
   * Default value: [object Object]
   */
  groupBar?: GridGroupingGroupBar;
  /**
   * Enhances the first render of the grid by automatically expanding any group that matches a specified condition.  For example, using 'onGroupDefaultExpanded: (dataItem) => { return dataItem.label === 'Peppermint Mocha Twist'; }' ensures that the group with the label "Peppermint Mocha Twist" is expanded by default when the grid is initially displayed. This callback receives each group’s data object ('dataItem') and should return 'true' for groups you want to be expanded initially, or 'false' otherwise.
   * Default value: null
   */
  onGroupDefaultExpanded?: any;
  /**
   * Specifies how group headers are displayed within the component. The available options are:- 'basic': Renders group headers without applying any indentation, custom group row heights, or column labels. This provides a simple, minimal display.- 'compact': Similar to 'basic', but additionally includes the column labels in the group headers for improved clarity.- 'advanced' (default): Enhances the group header display by adding indentation based on the group level, allowing nested groups to be visually distinguished. This mode may also support custom group row heights and presents the column labels appropriately.- 'multipleColumns': Displays each group header in its separate column, enabling a more structured and multi-dimensional grouping layout.Choose the mode that best fits the desired visual presentation and complexity of your grouped data.
   * Default value: advanced
   */
  renderMode?: GridGroupingRenderMode | string;
  /**
   * Specifies the amount of indentation applied to the group toggle button, controlling its horizontal offset or padding relative to its container or content. This affects the visual alignment and spacing of the toggle button within the group interface.
   * Default value: 16
   */
  toggleButtonIndent?: number;
  /**
   * Provides configuration options for the group summary row, allowing you to customize its appearance, content, and behavior within grouped data displays.
   * Default value: [object Object]
   */
  summaryRow?: GridGroupingSummaryRow;
}

/**Provides detailed configuration options for the group bar component, including settings for appearance, behavior, and functionality. */
export interface GridGroupingGroupBar {
  /**
   * Displays the group bar, allowing users to view and interact with grouped items or categories within the interface.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Allows users to rearrange table columns by dragging and dropping them to new positions, providing a more interactive and customizable table layout.
   * Default value: false
   */
  allowColumnDragDrop?: boolean;
  /**
   * Displays close (X) buttons on each column header, allowing users to easily remove or hide individual columns from the view.
   * Default value: true
   */
  allowColumnCloseButtons?: boolean;
}

/**Provides configuration options for the group summary row, allowing you to customize its appearance, content, and behavior within grouped data displays. */
export interface GridGroupingSummaryRow {
  /**
   * Displays the group summary row directly within the main content area, positioning it inline with other rows instead of in a separate section. This setting allows users to view summary information (such as totals or averages) immediately beneath or alongside related grouped data for improved readability and context.
   * Default value: true
   */
  inline?: boolean;
  /**
   * Displays the group summary row, providing an overview of aggregated data—such as totals, averages, or counts—for each group within the dataset.
   * Default value: true
   */
  visible?: boolean;
}

/**Provides configuration options that define the appearance and behavior of the group header, including properties such as text, style, alignment, and visibility settings. */
export interface GridGroupHeader {
  /**
   * Controls whether the group header is displayed or hidden, determining its visibility within the user interface.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Defines the template used to render the header section for a group of items, allowing customization of the group header's layout and content.
   * Default value: 
   */
  template?: string | HTMLTemplateElement;
}

/**Provides detailed configuration options for the grid's header, including display settings, styling, visibility, and customization of header rows and columns. */
export interface GridHeader {
  /**
   * Controls whether the header is displayed or hidden in the user interface. Adjusting this setting allows you to show or hide the header as needed.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Defines a customizable template for rendering the header section, allowing you to specify the structure, content, and styling of the header according to your application's requirements.
   * Default value: 
   */
  template?: string | HTMLTemplateElement | {(element: HTMLElement): void};
  /**
   * This callback function allows you to customize the Header toolbar by providing direct access to its HTML element. The function receives the Toolbar's HTML Element as an argument, enabling you to modify its structure, add custom buttons, update styles, or bind event listeners according to your application's requirements.
   * Default value: null
   */
  onInit?: {(element: HTMLElement): void};
  /**
   * Specifies which action buttons are shown in the Grid header. The available options are:- ''columns'': Displays a button that opens the columns chooser panel, allowing users to show or hide grid columns.- ''filter'': Displays a button that opens the filtering panel, enabling users to apply filters to grid data.- ''group'': Displays a button that opens the grouping panel, allowing users to group data by specific columns.- ''sort'': Displays a button that opens the sorting panel, letting users sort grid data by one or more columns.- ''format'': Displays a button that opens the conditional formatting panel, providing options to format cells based on specific conditions.- ''search'': Displays a button that opens the search panel, enabling users to search within the grid data.- ''colors'': Displays a button that opens a color options panel, allowing users to customize color formatting for the grid.Include one or more of these options in an array to control the set of action buttons visible in the Grid header.
   * Default value: [ "columns", "filter", "group", "sort", "format", "search" ]
   */
  buttons?: string[];
  /**
   * Specifies the type of search command to be executed, determining how the search operation is performed (e.g., basic, advanced, or filtered search). This setting influences the logic and options available during the search process.
   * Default value: search
   */
  searchCommand?: GridHeaderSearchCommand | string;
  /**
   * Custom Toolbar Button: Enables you to add a user-defined button to the application's toolbar. This feature allows you to specify the button's label, icon, and action, providing easy access to custom functionality directly within the toolbar interface.
   * Default value: [object Object]
   */
  customButton?: GridCommand;
}

/**An object that defines configuration options for the layout of the grid, including properties such as the number of columns, row and column spacing, alignment, and overall grid arrangement. This object allows you to customize the appearance and structure of the grid according to your requirements. */
export interface GridLayout {
  /**
   * Controls whether cell values automatically wrap onto multiple lines. When set to true, text within a cell will wrap to fit the cell's width, displaying content across multiple lines as needed. When set to false, text will remain on a single line, and any overflow may be truncated or hidden based on cell styling.
   * Default value: false
   */
  allowCellsWrap?: boolean;
  /**
   * Automatically assigns a default width to any new Column component that does not have its 'width' property explicitly defined. This ensures consistent sizing for all columns, even if a specific width is not provided during the component’s creation.
   * Default value: false
   */
  autoSizeNewColumn?: boolean;
  /**
   * Specifies the minimum width, in pixels, for the newly created column. This ensures that the column will not shrink below this defined width, maintaining layout consistency and readability.
   * Default value: 250
   */
  autoSizeNewColumnMinWidth?: number;
  /**
   * Dynamically adjusts the height of the Grid component based on its content or container, ensuring optimal layout without manual height specification.
   * Default value: false
   */
  autoHeight?: boolean;
  /**
   * Automatically adjusts the overall width of the Grid based on the combined widths of its columns. To enable this feature, ensure that each column has a numerical value assigned to its ‘width’ property. This allows the Grid to size itself precisely according to the specified widths of all columns.
   * Default value: false
   */
  autoWidth?: boolean;
  /**
   * Defines the width of columns that are automatically generated within the Grid component. This setting determines how wide each auto-created column will appear, ensuring consistent column sizing for dynamically generated data fields.
   * Default value: null
   */
  autoGenerateColumnWidth?: string | number | null;
  /**
   * Specifies the width of each column in the grid layout. This property allows you to define fixed, relative, or auto-sizing widths for grid columns, enabling precise control over the grid's overall structure and appearance.
   * Default value: null
   */
  columnWidth?: string | number | null;
  /**
   * Specifies the vertical height for each column within the Grid layout. This property determines how tall each column appears, allowing for consistent or customized column heights depending on the value provided.
   * Default value: null
   */
  columnHeight?: string | number | null;
  /**
   * Specifies the minimum height that each column within the Grid can occupy, ensuring that all columns maintain at least this height regardless of their content. This helps maintain a consistent and readable layout by preventing columns from becoming too short.
   * Default value: 30
   */
  columnMinHeight?: number;
  /**
   * Defines the lowest allowable width, in pixels or specified units, that a card can be displayed at in card view. This ensures that cards will not shrink below this minimum width, maintaining readability and consistent layout even when the container is resized or when multiple cards are shown side by side.
   * Default value: 250
   */
  cardMinWidth?: number;
  /**
   * Specifies the number of cards displayed in each row, allowing you to control the column layout and adjust how many cards appear side by side within a container.
   * Default value: null
   */
  cardsPerRow?: number;
  /**
   * Determines if cards are displayed in a vertical orientation. When enabled, each card arranges its column label above the corresponding column value, creating a top-to-bottom layout rather than the default horizontal (label-value side-by-side) format. This mode enhances readability on narrow screens and improves visual hierarchy by stacking labels above their respective values.
   * Default value: false
   */
  cardVertical?: boolean;
  /**
   * Specifies the width of the Grid component when it is rendered within a drop-down interface. This setting determines how wide the Grid appears in the drop-down, allowing you to control its visual layout and ensure proper alignment with surrounding UI elements.
   * Default value: 700
   */
  dropDownWidth?: number;
  /**
   * Specifies the vertical height of the Grid component when it is presented within a drop-down interface. This setting determines how many items or how much content is visible within the drop-down Grid before scrolling is required.
   * Default value: 500
   */
  dropDownHeight?: number;
  /**
   * Specifies the minimum height, in pixels or other valid CSS units, that each row in the Grid layout can be resized to. This ensures that no row will be rendered shorter than the defined minimum value, regardless of the content or available space.
   * Default value: 30
   */
  rowMinHeight?: number;
  /**
   * Specifies the height of the grid rows. Accepts the following values:- null: The row height is determined automatically based on the content.- auto: The row height adjusts automatically to fit the content of each row.- A number: Sets a fixed row height in pixels.Use this property to control the vertical sizing behavior of rows within the Grid component.
   * Default value: null
   */
  rowHeight?: string | number | null;
  /**
   * Specifies the width of the view bar component, determining how much horizontal space it occupies within the user interface. Adjusting this value will increase or decrease the view bar's width accordingly.
   * Default value: 250
   */
  viewBarWidth?: number;
}

/**Provides detailed configuration options for managing pagination, including parameters such as the number of items per page, current page index, and total number of pages. This section ensures efficient data retrieval and navigation across multiple pages of results. */
export interface GridPaging {
  /**
   * Enables pagination functionality, allowing data or content to be divided into discrete pages. This feature lets users navigate through large datasets or lists by viewing a limited number of items per page, improving usability and performance. Pagination controls such as next, previous, and specific page numbers may be supported.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Provides detailed configuration options for controlling the appearance and behavior of spinner-based pagination elements, including parameters for speed, size, color, and navigation functionality.
   * Default value: [object Object]
   */
  spinner?: GridPagingSpinner;
  /**
   * Specifies the maximum number of rows to display on each page of data, enabling pagination and controlling how much content is visible at one time.
   * Default value: 10
   */
  pageSize?: number;
  /**
   * Specifies the maximum number of top-level (root) hierarchical groups to display per page when grouping is enabled. For example, setting this value to 2 will show 2 root groups on each page, with pagination controls provided if there are more groups than the specified limit. This setting applies only when hierarchical grouping is active in the data grid.
   * Default value: 2
   */
  pageHierarchySize?: number;
  /**
   * Specifies the initial page or URL that users will see when they first access the application.
   * Default value: 0
   */
  pageIndex?: number;
}

/**Provides detailed configuration options for controlling the appearance and behavior of spinner-based pagination elements, including parameters for speed, size, color, and navigation functionality. */
export interface GridPagingSpinner {
  /**
   * Activates a spinner-based pagination feature, displaying a loading spinner while additional content is being fetched or loaded as the user navigates through pages. This improves user experience by providing visual feedback during content loading in paginated interfaces.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Defines the increment or decrement value when navigating between pages, determining how many pages to move forward or backward with each navigation action.
   * Default value: 1
   */
  step?: number;
}

/**Provides detailed configuration options for pager controls, including settings for page size, navigation buttons, and display style. These options determine how pagination is displayed and how users interact with paged content in the interface. */
export interface GridPager {
  /**
   * Specifies how ellipsis ("...") should be displayed when text overflows its container. This option determines the placement or behavior of the ellipsis, such as at the start, middle, or end of the truncated text.
   * Default value: both
   */
  autoEllipsis?: GridPagerAutoEllipsis | string;
  /**
   * Specifies the location where the pager (pagination controls) will be displayed within the user interface, such as at the top, bottom, or both positions of the component.
   * Default value: far
   */
  position?: LayoutPosition | string;
  /**
   * Defines the structure and layout template used to render the pager component, specifying how its elements (such as navigation buttons, page numbers, and labels) are displayed in the user interface.
   * Default value: 
   */
  template?: string | HTMLTemplateElement;
  /**
   * Specifies the configuration options for determining the number of data rows displayed per page in a paginated view. This setting allows users to control how many items are visible at once, enhancing readability and navigation within data tables or lists.
   * Default value: [object Object]
   */
  pageSizeSelector?: GridPagerPageSizeSelector;
  /**
   * Provides a detailed configuration for summary settings, specifying options such as display format, data aggregation methods, visibility controls, and customization preferences for how summaries are generated and presented within the application.
   * Default value: [object Object]
   */
  summary?: GridPagerSummary;
  /**
   * Provides configuration options for the navigation buttons, including their appearance, labels, order, and behavior within the user interface.
   * Default value: [object Object]
   */
  navigationButtons?: GridPagerNavigationButtons;
  /**
   * Provides detailed configuration options for navigation input methods, specifying how users can interact with and navigate through the interface. This includes settings such as input devices supported (keyboard, mouse, touch, etc.), navigation modes, and any customization options for user interaction.
   * Default value: [object Object]
   */
  navigationInput?: GridPagerNavigationInput;
  /**
   * Provides configuration options for the appearance and behavior of the numeric pagination buttons, including properties such as the number of buttons displayed, styling, and event handlers for user interaction.
   * Default value: [object Object]
   */
  pageIndexSelectors?: GridPagerPageIndexSelectors;
  /**
   * Controls whether the pager component is visible to users. Set to true to display the pager, or false to hide it.
   * Default value: false
   */
  visible?: boolean;
}

/**Specifies the configuration options for determining the number of data rows displayed per page in a paginated view. This setting allows users to control how many items are visible at once, enhancing readability and navigation within data tables or lists. */
export interface GridPagerPageSizeSelector {
  /**
   * Controls whether the 'Rows Per Page' dropdown is displayed, allowing users to specify how many rows are shown per page in a paginated table or list.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Specifies the number of rows displayed on each page when using the 'rows per page' pagination option. This determines how many items are visible to the user before navigation controls (such as next/previous page) are required.
   * Default value: 10,20,50
   */
  dataSource?: any;
  /**
   * Specifies the placement of the 'Rows per page' selection control within the pagination component, determining where users can adjust how many items are displayed on each page.
   * Default value: far
   */
  position?: Position | string;
}

/**Provides a detailed configuration for summary settings, specifying options such as display format, data aggregation methods, visibility controls, and customization preferences for how summaries are generated and presented within the application. */
export interface GridPagerSummary {
  /**
   * Specifies the location where the summary will be displayed within the component or layout (e.g., top, bottom, left, or right). This property determines the alignment or placement of the summary content relative to other elements.
   * Default value: far
   */
  position?: Position | string;
  /**
   * Controls whether the summary is visible or hidden in the user interface. Determines if the summary section is displayed to the user.
   * Default value: false
   */
  visible?: boolean;
}

/**Provides configuration options for the navigation buttons, including their appearance, labels, order, and behavior within the user interface. */
export interface GridPagerNavigationButtons {
  /**
   * Specifies the placement of the navigation buttons within the user interface, allowing you to control where the buttons appear (e.g., top, bottom, left, right, or custom positions) relative to the navigational content.
   * Default value: both
   */
  position?: LayoutPosition | string;
  /**
   * Defines the configuration options for the "Previous Page" and "Next Page" buttons, including their appearance, labels, behavior, and navigation functionality within paginated interfaces.
   * Default value: [object Object]
   */
  prevNextButtons?: GridPagerNavigationButtonsPrevNextButtons;
  /**
   * Provides configuration options for the "First Page" and "Last Page" navigation buttons, specifying their appearance, behavior, and accessibility settings within the user interface.
   * Default value: [object Object]
   */
  firstLastButtons?: GridPagerNavigationButtonsFirstLastButtons;
  /**
   * Provides detailed configuration options for customizing the text labels displayed on navigation buttons, allowing you to specify and modify the button captions used in the navigation interface.
   * Default value: [object Object]
   */
  labels?: GridPagerNavigationButtonsLabels;
}

/**Defines the configuration options for the "Previous Page" and "Next Page" buttons, including their appearance, labels, behavior, and navigation functionality within paginated interfaces. */
export interface GridPagerNavigationButtonsPrevNextButtons {
  /**
   * Controls whether the 'Previous Page' and 'Next Page' navigation buttons are visible to the user. Set to 'true' to display the buttons, or 'false' to hide them. This option allows you to customize the pagination controls in the interface.
   * Default value: true
   */
  visible?: boolean;
}

/**Provides configuration options for the "First Page" and "Last Page" navigation buttons, specifying their appearance, behavior, and accessibility settings within the user interface. */
export interface GridPagerNavigationButtonsFirstLastButtons {
  /**
   * Controls whether the 'First Page' and 'Last Page' navigation buttons are displayed, allowing users to quickly jump to the beginning or end of a paginated list. Set this option to determine if these navigation buttons should be visible in the pagination controls.
   * Default value: true
   */
  visible?: boolean;
}

/**Provides detailed configuration options for customizing the text labels displayed on navigation buttons, allowing you to specify and modify the button captions used in the navigation interface. */
export interface GridPagerNavigationButtonsLabels {
  /**
   * Determines whether the labels for navigation buttons are visible to users. When enabled, text labels appear alongside the navigation buttons, providing additional context or descriptions; when disabled, only the button icons are displayed.
   * Default value: false
   */
  visible?: boolean;
}

/**Provides detailed configuration options for navigation input methods, specifying how users can interact with and navigate through the interface. This includes settings such as input devices supported (keyboard, mouse, touch, etc.), navigation modes, and any customization options for user interaction. */
export interface GridPagerNavigationInput {
  /**
   * Specifies the placement of the navigation input element within the user interface, determining where the navigation control appears on the screen (e.g., top, bottom, left, or right). This setting allows developers to customize the navigation experience according to the application's layout requirements.
   * Default value: far
   */
  position?: Position | string;
  /**
   * Controls whether the navigation input option is visible to users. When enabled, the navigation input will be displayed in the user interface; when disabled, it will be hidden. This property allows developers to dynamically show or hide navigation options based on application state or user permissions.
   * Default value: false
   */
  visible?: boolean;
}

/**Provides configuration options for the appearance and behavior of the numeric pagination buttons, including properties such as the number of buttons displayed, styling, and event handlers for user interaction. */
export interface GridPagerPageIndexSelectors {
  /**
   * Controls whether numeric page buttons (representing individual page numbers in pagination controls) are displayed to the user. When enabled, numbered buttons appear, allowing direct navigation to specific pages. When disabled, these numeric buttons are hidden, and users may need to rely on other navigation methods such as "Next" or "Previous" buttons.
   * Default value: true
   */
  visible?: boolean;
  /**
   * Specifies the maximum number of page navigation buttons displayed at once in the pagination control. This determines how many page links are visible to the user before additional pages are hidden or collapsed (e.g., with ellipsis).
   * Default value: 10
   */
  dataSource?: any;
}

/**Configures or updates the detailed information or content associated with a specific row, often used to display additional data or expanded views for that row. */
export interface GridRowDetail {
  /**
   * Displays additional information for each row by enabling expandable row details functionality.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Specifies the vertical height, in pixels, for the expanded row details section. This determines how much space is allocated to display additional information beneath a table row when its details are shown.
   * Default value: 200
   */
  height?: number;
  /**
   * Specifies the position of the column used to control the dynamic expansion or collapse of row details. This determines where the expand/collapse toggle will appear within the table, allowing users to show or hide additional information for each row.
   * Default value: near
   */
  position?: Position | string;
  /**
   * Defines the template used to display the detailed content for each row. This property specifies the HTML or component structure that will be rendered when a row is expanded to show additional information.
   * Default value: 
   */
  template?: string | HTMLTemplateElement;
  /**
   * Controls the visibility of the column that enables users to dynamically expand or collapse the details of a row. When enabled, this column provides an interactive toggle for showing or hiding additional information associated with each row.
   * Default value: true
   */
  visible?: boolean;
  /**
   * Configures the display of row details using a dialog window. When enabled, selecting a row will open a modal dialog showing detailed information for that row. This provides a focused view of row details without navigating away from the main content.
   * Default value: [object Object]
   */
  dialog?: Dialog;
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
  freeze?: Position | string;
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

/**Provides detailed configuration options for displaying and customizing the summary row, including its appearance, position, aggregation methods, and which columns are summarized. */
export interface GridSummaryRow {
  /**
   * Controls whether the summary row is displayed or hidden in the table.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Enables the summary row editor, allowing users to interactively edit summary row cells. When you hover over a cell in the summary row, an inline editor appears, so you can dynamically change the summary type (e.g., sum, average, count) directly within the table. This feature improves data analysis by making it easy to adjust summary calculations on the fly.
   * Default value: false
   */
  editing?: boolean;
}

/**Configures the grid's state-related settings, including properties such as selection, sorting, filtering, pagination, and layout. This determines how the grid maintains and restores its current state during user interactions or when the page is reloaded. */
export interface GridStateSettings {
  /**
   * Controls whether the Grid's current state (such as column order, filter settings, and sorting) is automatically saved or not. When enabled, any changes to the Grid's configuration are stored automatically for later retrieval.
   * Default value: false
   */
  autoSave?: boolean;
  /**
   * Controls whether the Grid automatically restores its previous state (such as filters, sorting, and column arrangements) when the page is reloaded. When enabled, the Grid will load the saved state on page refresh; when disabled, the Grid will reset to its default configuration.
   * Default value: false
   */
  autoLoad?: boolean;
  /**
   * Controls whether the grid's current state—such as column order, sorting, filtering, and visibility—is automatically saved and restored when loading or reloading the grid. When enabled, changes made by the user are preserved, providing a consistent experience across sessions. Disabling this option prevents the grid from saving or restoring any state information.
   * Default value: true
   */
  enabled?: boolean;
  /**
   * Sets a new state value or retrieves the current state value. When a value is provided, the state is updated to the new value. If no value is provided, the current state is returned. This is typically used to manage and track changes in application state.
   * Default value: ""
   */
  current?: string;
  /**
   * A container that automatically stores state objects whenever the saveState method is called or when autoSave is enabled. Each entry in the container uses the state's name as the key and the corresponding value is a JSON object containing that state's properties and data. This structure allows for easy retrieval and management of multiple application states by name.
   * Default value: null
   */
  storage?: any;
  /**
   * Function invoked whenever the component’s state changes, allowing you to respond to or handle updates accordingly.
   * Default value: 
   */
  onStateChange?: any;
  /**
   * An array specifying which table state options—such as 'sort', 'filter', 'expandedRows', 'paging', 'selectedCells', 'selectedRows', 'group', and 'columns'—should be persisted. Each value in the array represents a different aspect of the table’s state that can be saved or restored (e.g., saving the current sorting order, applied filters, selected rows, or column configuration). This property allows you to control exactly which parts of the table state are stored and later reloaded, enabling customized persistence and retrieval of user interactions.
   * Default value: 
   */
  options?: string[];
}

/**Provides detailed configuration options for user selection behavior, including parameters such as selection mode (single or multiple), default selections, selection limits, and customizable callbacks for selection events. */
export interface GridSelection {
  /**
   * Allows users to select an option from a list, enabling interaction with selectable choices within the user interface.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Determines whether users can select rows by clicking on the row header. When enabled, clicking a row header will select the entire row. This property can be used to either allow or prevent selection through row headers.
   * Default value: false
   */
  allowRowHeaderSelection?: boolean;
  /**
   * Determines whether users can select a column by clicking on its header. When enabled, clicking a column header will select the entire column. This property can be set to allow or prevent selection via column header clicks, and its current state can be retrieved programmatically.
   * Default value: false
   */
  allowColumnHeaderSelection?: boolean;
  /**
   * Determines whether selecting a row by clicking on it is enabled. When set to true, users can select rows with a mouse click; when false, clicking a row will not change its selection state. Use this property to control row selection behavior in the interface.
   * Default value: true
   */
  allowRowSelection?: boolean;
  /**
   * Determines whether users are permitted to select a cell by clicking on it. When enabled, clicking on a cell will select it; when disabled, clicking will have no effect on the cell’s selection state. This property can be set to enable or disable cell selection via mouse interaction.
   * Default value: false
   */
  allowCellSelection?: boolean;
  /**
   * Controls whether users can select multiple cells by dragging the mouse across them, similar to how selection works in Excel. When enabled, users can click and drag to highlight a range of cells; when disabled, selection by dragging is not permitted. This property can be set or retrieved programmatically.
   * Default value: true
   */
  allowDragSelection?: boolean;
  /**
   * Determines whether the Grid view will automatically scroll when a user selects items by dragging the mouse beyond the current visible area. This property can be set to enable or disable auto-scrolling during drag selection, or retrieved to check the current behavior.
   * Default value: true
   */
  allowDragSelectionAutoScroll?: boolean;
  /**
   * Controls the visibility of the selection "Drag Handle" (the small square located at the bottom-right corner of a selected cell range, similar to Excel). When enabled, this handle allows users to extend or resize their current selection horizontally or vertically by dragging the handle. This property can be set to show or hide the drag handle, as well as queried to determine its current state.
   * Default value: true
   */
  allowCellDragSelectionHandle?: boolean;
  /**
   * Controls whether cells in the selection can be dragged and dropped. When enabled, dragging is initiated by moving the cursor to the bottom edge of the selected cells, causing the cursor to change to a "drag" icon. Clicking and holding the mouse button while moving the selection will initiate the drag operation. By default, dropping the selection copies the values of the dragged cells to the new location. This property can be used to enable or disable drag-and-drop functionality for cell selections.
   * Default value: true
   */
  allowCellDragDropSelectionHandle?: boolean;
  /**
   * Controls whether cell selection is automatically populated with values when dragging and releasing the 'Drag Handle'. When enabled, dragging the handle will auto-fill the selected cells with the corresponding values. This property can be set to enable or disable the auto-fill behavior, and can also be used to check the current auto-fill status.
   * Default value: true
   */
  allowCellDragSelectionAutoFill?: boolean;
  /**
   * Determines whether the default browser behavior for text selection is enabled or disabled. When enabled, users can highlight and select text within the element using their mouse or keyboard. When disabled, text selection is prevented, and users cannot highlight the element’s text. This can be useful for UI components where text selection should be restricted, such as buttons or draggable elements.
   * Default value: false
   */
  defaultSelection?: boolean;
  /**
   * Gets or sets the selection mode, determining how users can select items in the control. The available values are:- ''one'': Only a single cell or row can be selected at any given time.- ''many'': Multiple cells or rows can be selected, typically by individually clicking on them.- ''extended'': Multiple cells or rows can be selected using a combination of mouse clicks and keyboard modifiers (such as Shift or Ctrl), allowing for range or non-contiguous selections.Use this property to control whether users can select only one item, several items, or use advanced selection behaviors.
   * Default value: many
   */
  mode?: GridSelectionMode | string;
  /**
   * Controls how selection is triggered: accepts 'click' or 'doubleClick' to specify if selection occurs on a single or double mouse click, respectively. When set to 'none', user interaction does not trigger selection—selection can only be managed programmatically via the API.
   * Default value: click
   */
  action?: GridSelectionAction | string;
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
   * Controls the visibility of checkboxes within the Grid. When set to true, checkboxes are only displayed when the mouse hovers over the Grid. When set to false, checkboxes remain visible at all times, regardless of mouse position. This property can be used to create a cleaner interface by showing checkboxes only on hover.
   * Default value: false
   */
  autoShow?: boolean;
  /**
   * Enables or disables the checkbox selection feature. When enabled, an additional column containing checkboxes is displayed, allowing users to select multiple rows. You can use this property to programmatically determine or change whether checkbox selection is active.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Determines how selection is triggered within the component. Accepts the following values:- ''click'': Selection occurs when the user clicks on the item.- ''doubleClick'': Selection occurs when the user double-clicks on the item.- ''none'': Selection cannot be triggered by user interaction; it can only be set or changed programmatically via the API.This property can be used to both retrieve the current selection mode or set a new one.
   * Default value: click
   */
  action?: GridSelectionAction | string;
  /**
   * Specifies whether the checkbox selection in the table header will select all rows on the current page, all rows across all pages, or none. When set to 'page', the header checkbox selects only the rows visible on the current page. When set to 'all', it selects every row in the dataset, regardless of pagination. Setting this option to 'none' disables the header checkbox, preventing users from selecting all rows at once.
   * Default value: page
   */
  selectAllMode?: GridSelectionCheckBoxesSelectAllMode | string;
  /**
   * Sets or retrieves the position of the checkbox selection column within a table or grid, allowing you to specify whether the checkbox column appears at the start (left) or end (right) of the columns.
   * Default value: near
   */
  position?: Position | string;
}

/**Provides detailed configuration options for controlling how data is sorted, including criteria such as sorting field, order (ascending or descending), and support for multiple sort keys. */
export interface GridSorting {
  /**
   * Enables sorting functionality, allowing users to organize data in ascending or descending order based on specified fields or columns.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Configures which columns will be used for sorting the data and determines their sort order (e.g., ascending or descending) during the sorting operation.
   * Default value: 
   */
  sort?: string[];
  /**
   * Ensures that the sorting order is preserved when the user edits data within the currently sorted column. If you want the sorting to be applied only once—so that edited data does not automatically re-sort the column—you can disable this feature by setting the property to false. This allows the column's order to remain unchanged after data edits, rather than reapplying the sort.
   * Default value: true
   */
  maintainSort?: boolean;
  /**
   * Specifies the maximum number of columns by which users can sort the data. When this property is set to 'many', users are allowed to apply sorting to multiple columns simultaneously, enabling multi-level sorting functionality.
   * Default value: one
   */
  mode?: GridSortingMode | string;
  /**
   * Specifies which keyboard key activates multi-column sorting. This property determines the key that users must hold down to enable sorting by multiple columns simultaneously. For example, if commandKey is set to 'Control', users can select and sort multiple columns by holding the 'Control' key while clicking on column headers. Adjust this property to match the desired key for multi-column sorting functionality (e.g., 'Alt', 'Shift', or 'Meta').
   * Default value: Default
   */
  commandKey?: GridSortingCommandKey | string;
  /**
   * Allows users to toggle between three sorting options: ascending order, descending order, and no sorting applied. This functionality enables dynamic changes to the sorting state of a data set or list, providing greater flexibility and control over how information is presented.
   * Default value: true
   */
  sortToggleThreeStates?: boolean;
  /**
   * Allows users to change the sorting state (e.g., ascending, descending, or none) of a column by clicking its header. This feature is enabled by default, enabling interactive sorting functionality within the table.
   * Default value: true
   */
  sortToggleOnClick?: boolean;
  /**
   * Allows users to toggle through different column sort states (such as ascending, descending, and unsorted) by clicking on a column header. Holding down the Command key while clicking enables multi-column sorting, letting users modify the sort order of multiple columns at once.
   * Default value: false
   */
  sortToggleOnClickAndCommandKey?: boolean;
}

/**Configures the upload settings for images and attachments in the grid's image and attachment columns, including options for file type restrictions, size limits, and image filters to be applied during the upload process. */
export interface GridUploadSettings {
  /**
   * Specifies the URL endpoint used for uploading files or images. This URL is where the files or images will be submitted during the upload process.
   * Default value: ""
   */
  url?: string;
  /**
   * Specifies the URL endpoint to handle file or image removal requests. This URL will be used when a file or image needs to be deleted from the server.
   * Default value: ""
   */
  removeUrl?: string;
  /**
   * Sets or retrieves the name of the file input field used for uploads. This field name is crucial for accessing uploaded image data on the backend. For example, in an Express.js application handling file uploads (e.g., using multer or a similar middleware), you would use this field name to reference the uploaded files from the request object. If the upload field name is set to "userfile[]", you can access the array of uploaded images in your route handler like so:  '''javascriptconst images = req.files['userfile[]'];'''Make sure the field name specified here matches the name attribute of your file input element in the frontend form, enabling seamless retrieval of uploaded files on the server side.
   * Default value: "userfile[]"
   */
  name?: string;
  /**
   * Supplementary information to be sent to the server. This data must be provided as a JSON-formatted string (i.e., a serialized JSON object or array). Ensure all values are properly encoded and the string adheres to valid JSON syntax before submission.
   * Default value: ""
   */
  data?: string;
  /**
   * "This function is triggered after the upload process completes. When invoked by the Grid, it receives a JSON object as a parameter. The JSON object contains the following properties:- 'files': An array listing the uploaded file(s).- 'status': A string indicating the result of the upload (e.g., 'success', 'error').- 'fileURL': The URL(s) where the uploaded file(s) can be accessed.- 'serverResponse': The response data returned by the server upon upload completion.Use this function to handle post-upload actions such as updating the UI, processing the server response, or handling errors."
   * Default value: 
   */
  onUploadCompleted?: any;
  /**
   * This function is triggered when a file upload fails. It receives a JSON object as a parameter, which contains the following properties:- 'files': An array of file objects that failed to upload.- 'status': The HTTP status code or error status associated with the failure.- 'serverResponse': The full response returned by the server, which may include error messages or additional details about the upload failure.This function is automatically invoked by the Grid component whenever an upload error occurs, allowing you to handle the failure appropriately in your code.
   * Default value: 
   */
  onUploadError?: any;
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

/**Specifies the format of row header labels, allowing you to choose between sequential numbers (e.g., 1, 2, 3, ...) or alphabetical letters (e.g., A, B, C, ...). Changing this property determines how the row headers are displayed in the rendered output. */
export declare type GridAppearanceAutoGenerateRowLabelMode = 'number' | 'letter';
/**Determines the format of the column header labels, allowing them to be displayed as either sequential numbers (e.g., 1, 2, 3…) or letters (e.g., A, B, C…). This property directly influences how column headers are rendered and displayed in the table interface. */
export declare type GridAppearanceAutoGenerateColumnLabelMode = 'number' | 'letter';
/**Specifies how rows are resized within the container.  <br/>- In the split resize mode, resizing a row will both increase or decrease the height of the target (resized) row and inversely adjust the height of the immediately following (sibling) row, ensuring the total height remains constant.<br/>- In the growAndShrink resize mode, only the targeted row's height is adjusted—either increasing or decreasing—without affecting the size of neighboring rows. */
export declare type GridResizeMode = 'none' | 'split' | 'growAndShrink';
/**Defines whether and how the values of copied and pasted cells are automatically filled using pattern detection during Drag & Drop or multiple cell selection operations. This setting determines how pasted data is handled:<br/><br/>- 'none': No auto-fill or pattern detection is applied. Pasted cells remain as they are, with no changes or repetition beyond what was directly copied.<br/>- 'copy': The exact cell values are duplicated into the new locations without attempting to follow or extend any logical sequence or pattern.<br/>- 'fillSeries': Enables automatic pattern detection and series continuation. If the selection forms a recognizable sequence—for example, '1, 2'—the pasted cells will extend this pattern (e.g., '1, 2, 3, 4, ...'), filling additional cells with the next values in the detected sequence.<br/><br/>This option helps users quickly extend numeric, date, or other discernible patterns when dragging or pasting multiple cells. */
export declare type GridClipboardAutoFillMode = 'none' | 'copy' | 'fillSeries';
/**Sets the align. */
export declare type HorizontalAlignment = 'left' | 'center' | 'right';
/**Sets the vertical align. */
export declare type VerticalAlignment = 'top' | 'center' | 'bottom';
/**Sets or retrieves the position of the checkbox selection column within a table or grid, allowing you to specify whether the checkbox column appears at the start (left) or end (right) of the columns. */
export declare type Position = 'near' | 'far';
/**Sets or gets the filter menu mode of the column. In 'basic' mode, a single input is displayed in the filter menu. In 'default' mode, two input options are available for more precise filtering. In 'excel' mode, checked list with unique values is displayed. */
export declare type GridColumnFilterMenuMode = 'basic' | 'default' | 'excel';
/**Sets or gets the sort order of the column. Accepts: 'asc', 'desc', 'none' and null. */
export declare type GridColumnSortOrder = 'asc' | 'desc' | 'none';
/**The formatting condition. */
export declare type GridConditionalFormattingCondition = 'between' | 'equal' | 'greaterThan' | 'lessThan' | 'notEqual';
/**Specifies the orientation of the page (portrait or landscape) when exporting the document to PDF format. This setting determines how the content is laid out on each PDF page. */
export declare type GridDataExportPageOrientation = 'landscape' | 'portrait';
/**Sets or retrieves the root element used for XML data binding. This property specifies the top-level XML element that serves as the entry point for mapping XML data to objects, or for serializing objects to XML. */
export declare type GridDataSourceSettingsSanitizeHTML = 'all' | 'blackList' | 'none';
/**Sets the dataField type. */
export declare type GridDataSourceSettingsDataFieldDataType = 'string' | 'date' | 'boolean' | 'number' | 'array' | 'any';
/**Specifies or retrieves the type of data source being used, allowing you to define or query the data source format (such as JSON, XML, or a database connection). */
export declare type GridDataSourceSettingsDataSourceType = 'array' | 'json' | 'xml' | 'csv' | 'tsv';
/**Specifies the method by which the editing mode is activated, such as through a single click, double click, or keyboard action. */
export declare type GridEditingAction = 'none' | 'click' | 'doubleClick';
/**Specifies the placement of the navigation buttons within the user interface, allowing you to control where the buttons appear (e.g., top, bottom, left, right, or custom positions) relative to the navigational content. */
export declare type LayoutPosition = 'near' | 'far' | 'both';
/**Defines the content or label displayed within the buttons of the command column, such as text, icons, or custom HTML elements. This determines what users see and interact with in each command button cell. */
export declare type GridCommandDisplayMode = 'label' | 'icon' | 'labelAndIcon';
/**Enables or configures the grid's cell editing functionality by setting its edit mode. This determines how users can interact with and modify the grid’s cell values—such as enabling inline editing, displaying an edit dialog, or disabling editing entirely. */
export declare type GridEditingMode = 'cell' | 'row';
/**Controls whether the new row action is displayed as a full-width row or as a button. Accepts two values: 'row' to show the action as an entire row, or 'button' to render it as a button element. This property can be used to both retrieve the current display mode and set a new one. */
export declare type GridEditingAddNewRowDisplayMode = 'row' | 'button';
/**Determines how filters entered in the filter row are applied to the data, specifying whether filtering occurs automatically as the user types or only after a specific action, such as pressing Enter or clicking a filter button. */
export declare type GridFilteringFilterRowApplyMode = 'auto' | 'click';
/**Specifies the display mode for the filter menu, determining how filtering options are presented to the user (e.g., dropdown, modal, or inline). */
export declare type GridFilteringFilterMenuMode = 'default' | 'excel';
/**Specifies how groups are expanded or collapsed within the component. Determines whether groups are expanded by default, collapsed, or if a custom behavior is applied. */
export declare type GridGroupingExpandMode = 'buttonClick' | 'rowClick';
/**Specifies how group headers are displayed within the component. The available options are:<br/><br/>- 'basic': Renders group headers without applying any indentation, custom group row heights, or column labels. This provides a simple, minimal display.<br/>- 'compact': Similar to 'basic', but additionally includes the column labels in the group headers for improved clarity.<br/>- 'advanced' (default): Enhances the group header display by adding indentation based on the group level, allowing nested groups to be visually distinguished. This mode may also support custom group row heights and presents the column labels appropriately.<br/>- 'multipleColumns': Displays each group header in its separate column, enabling a more structured and multi-dimensional grouping layout.<br/><br/>Choose the mode that best fits the desired visual presentation and complexity of your grouped data. */
export declare type GridGroupingRenderMode = 'basic' | 'compact' | 'advanced' | 'multipleColumns';
/**Specifies the type of search command to be executed, determining how the search operation is performed (e.g., basic, advanced, or filtered search). This setting influences the logic and options available during the search process. */
export declare type GridHeaderSearchCommand = 'search' | 'filter';
/**Specifies how ellipsis ("...") should be displayed when text overflows its container. This option determines the placement or behavior of the ellipsis, such as at the start, middle, or end of the truncated text. */
export declare type GridPagerAutoEllipsis = 'none' | 'before' | 'after' | 'both';
/**Configures the scroll mode behavior, allowing you to define how scrolling is handled within the component or page. This setting determines options such as smooth or instant scrolling, vertical or horizontal direction, and any custom scroll-related parameters. */
export declare type Scrolling = 'physical' | 'virtual' | 'infinite' | 'deferred';
/**Gets or sets the selection mode, determining how users can select items in the control. The available values are:<br/><br/>- ''one'': Only a single cell or row can be selected at any given time.<br/>- ''many'': Multiple cells or rows can be selected, typically by individually clicking on them.<br/>- ''extended'': Multiple cells or rows can be selected using a combination of mouse clicks and keyboard modifiers (such as Shift or Ctrl), allowing for range or non-contiguous selections.<br/><br/>Use this property to control whether users can select only one item, several items, or use advanced selection behaviors. */
export declare type GridSelectionMode = 'one' | 'many' | 'extended';
/**Determines how selection is triggered within the component. Accepts the following values:<br/><br/>- ''click'': Selection occurs when the user clicks on the item.<br/>- ''doubleClick'': Selection occurs when the user double-clicks on the item.<br/>- ''none'': Selection cannot be triggered by user interaction; it can only be set or changed programmatically via the API.<br/><br/>This property can be used to both retrieve the current selection mode or set a new one. */
export declare type GridSelectionAction = 'none' | 'click' | 'doubleClick';
/**Specifies whether the checkbox selection in the table header will select all rows on the current page, all rows across all pages, or none. When set to 'page', the header checkbox selects only the rows visible on the current page. When set to 'all', it selects every row in the dataset, regardless of pagination. Setting this option to 'none' disables the header checkbox, preventing users from selecting all rows at once. */
export declare type GridSelectionCheckBoxesSelectAllMode = 'none' | 'page' | 'all';
/**Specifies the maximum number of columns by which users can sort the data. When this property is set to 'many', users are allowed to apply sorting to multiple columns simultaneously, enabling multi-level sorting functionality. */
export declare type GridSortingMode = 'one' | 'many';
/**Specifies which keyboard key activates multi-column sorting. This property determines the key that users must hold down to enable sorting by multiple columns simultaneously. For example, if commandKey is set to 'Control', users can select and sort multiple columns by holding the 'Control' key while clicking on column headers. Adjust this property to match the desired key for multi-column sorting functionality (e.g., 'Alt', 'Shift', or 'Meta'). */
export declare type GridSortingCommandKey = 'Default' | 'Alt' | 'Control' | 'Shift';
