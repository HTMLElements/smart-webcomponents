import  {BaseElement, Animation} from "./smart.element"

export interface CardViewProperties {
  /**
   * Controls the visibility and functionality of the button used to add new cards to the interface. When enabled, users can click the button to create and add additional cards; when disabled, the button is hidden or inactive, preventing new card additions.
   * Default value: false
   */
  addNewButton?: boolean;
  /**
   * Enables users to rearrange the order of cards within the interface by clicking and dragging individual cards to new positions. This drag-and-drop functionality provides an intuitive way to customize the card sequence.
   * Default value: false
   */
  allowDrag?: boolean;
  /**
   * Specifies or retrieves the current animation mode. When this property is set to 'none', all animations are disabled. Setting it to other valid values enables the corresponding animation behavior.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Specifies the height value assigned to each card component, determining how tall each card will appear within the user interface.
   * Default value: null
   */
  cardHeight?: number | null;
  /**
   * Specifies the layout direction of the card cells, determining whether they are arranged horizontally (side by side) or vertically (stacked one above the other) within the container. This setting controls the visual organization of the cards.
   * Default value: vertical
   */
  cellOrientation?: Orientation | string;
  /**
   * Enables users to expand or collapse the card’s content, allowing for a more compact view when the content is hidden and revealing additional details when expanded.
   * Default value: false
   */
  collapsible?: boolean;
  /**
   * Specifies the configuration properties for table columns:  label — Defines the display name or header text for the column as shown in the user interface.  dataField — Specifies the key or property name in the data source that this column should display.  icon — Allows you to assign an icon (e.g., as a URL or icon class) to be displayed in the column header or alongside cell values.  formatSettings — Provides formatting options for the column's values, such as date/time formats, number precision, or custom display rules.  formatFunction — Accepts a callback function to apply custom transformations or styling to the column's cell values before rendering.
   * Default value: 
   */
  columns?: CardViewColumn[];
  /**
   * Specifies the data field that should be used as the cover image or primary visual representation for the item.
   * Default value: "''"
   */
  coverField?: string;
  /**
   * Provides detailed information about the 'cover image fit' property, which defines how a cover image is resized or scaled to fit within its container. This property determines whether the image should fill, contain, cover, or be otherwise adjusted to cover the allotted space, often corresponding to CSS 'object-fit' values such as 'cover', 'contain', or 'fill'.
   * Default value: crop
   */
  coverMode?: CardViewCoverMode | string;
  /**
   * Specifies the origin or endpoint from which the item's data is retrieved for display within the card component. This property defines where the card fetches its content, such as a local data object, a remote API, or a database, ensuring the card displays up-to-date and relevant information.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Configures the grid's data source options, specifying how data should be loaded and managed when the dataSource property is assigned either an array of data objects or a remote data endpoint (URL). This includes settings for data retrieval, formatting, paging, sorting, and other data-related behaviors.
   * Default value: [object Object]
   */
  dataSourceSettings?: DataSourceSettings;
  /**
   * Enables the functionality for users to edit the content of individual cards. When this option is active, users can modify card details such as titles, descriptions, and other editable fields directly within the card interface.
   * Default value: false
   */
  editable?: boolean;
  /**
   * Sets or retrieves the position of the header section within the component. The header typically includes interactive elements such as the Customize, Filter, Sort, and Search buttons, allowing users to tailor the content display, apply filters, change sorting options, and perform searches.
   * Default value: none
   */
  headerPosition?: CardViewHeaderPosition | string;
  /**
   * Sets or retrieves the unlockKey value, a unique key required to unlock and gain access to the product's full features or content. Use this property to assign a new unlock key or to obtain the current key in use.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Sets or retrieves the current locale (language and regional settings) to be used by the component. This is typically used together with the messages property, which provides localized text or translations for different locales. By specifying the locale, the component displays messages, labels, and other text elements in the appropriate language and format.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Defines or retrieves an object containing the text strings displayed by the widget, allowing these strings to be customized for different languages. This property works in conjunction with the locale property to enable localization, so you can provide translations for various UI elements based on the user's selected language or region. Use this option to specify or override default widget labels and messages for internationalization purposes.
   * Default value:    * {
   *   "en": {
   *     "addFilter": "+ Add filter",
   *     "addImage": "Add",
   *     "and": "And",
   *     "apply": "Apply",
   *     "booleanFirst": "☐",
   *     "booleanLast": "☑",
   *     "cancel": "Cancel",
   *     "CONTAINS": "contains",
   *     "CONTAINS_CASE_SENSITIVE": "contains (case sensitive)",
   *     "coverField": "Cover field",
   *     "crop": "Crop",
   *     "customizeCards": "Customize cards",
   *     "dateFirst": "1",
   *     "dateLast": "9",
   *     "dateTabLabel": "DATE",
   *     "DOES_NOT_CONTAIN": "does not contain",
   *     "DOES_NOT_CONTAIN_CASE_SENSITIVE": "does not contain (case sensitive)",
   *     "draggedRecord": "Record ",
   *     "EMPTY": "empty",
   *     "ENDS_WITH": "ends with",
   *     "ENDS_WITH_CASE_SENSITIVE": "ends with (case sensitive)",
   *     "EQUAL": "equal",
   *     "EQUAL_CASE_SENSITIVE": "equal (case sensitive)",
   *     "filter": "Filter",
   *     "filteredByMultiple": " filters",
   *     "filteredByOne": "1 filter",
   *     "find": "Find a field",
   *     "findInView": "Find in view",
   *     "firstBy": "Sort by",
   *     "fit": "Fit",
   *     "found": "",
   *     "from": "from",
   *     "GREATER_THAN": "greater than",
   *     "GREATER_THAN_OR_EQUAL": "greater than or equal",
   *     "imageUrl": "New image URL:",
   *     "incorrectStructure": "'dataSource' must be an instance of Smart.DataAdapter or an array of objects with key-value pairs.",
   *     "LESS_THAN": "less than",
   *     "LESS_THAN_OR_EQUAL": "less than or equal",
   *     "nextRecord": "Next record",
   *     "noCoverField": "No cover field",
   *     "noData": "No data to display",
   *     "noFilters": "No filters applied",
   *     "noMatches": "No matched records",
   *     "noSorting": "No sorting applied",
   *     "noResults": "No results",
   *     "NOT_EMPTY": "not empty",
   *     "NOT_EQUAL": "not equal",
   *     "NOT_NULL": "not null",
   *     "now": "Now",
   *     "NULL": "null",
   *     "numberFirst": "1",
   *     "numberLast": "9",
   *     "ok": "OK",
   *     "or": "Or",
   *     "pickAnother": "Pick another field to sort by",
   *     "previousRecord": "Previous record",
   *     "removeImage": "Remove",
   *     "sort": "Sort",
   *     "sortedByMultiple": "Sorted by  fields",
   *     "sortedByOne": "Sorted by 1 field",
   *     "STARTS_WITH": "starts with",
   *     "STARTS_WITH_CASE_SENSITIVE": "starts with (case sensitive)",
   *     "stringFirst": "A",
   *     "stringLast": "Z",
   *     "thenBy": "then by",
   *     "timeTabLabel": "TIME",
   *     "toggleVisibility": "Toggle field visibility",
   *     "where": "Where"
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines or retrieves whether the element’s text direction is set to right-to-left (RTL), allowing proper alignment and rendering for languages and locales that use RTL scripts (such as Arabic or Hebrew). This ensures the element displays content correctly for users in RTL language environments.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the theme to be applied to the element. The selected theme controls the overall visual appearance, including colors, fonts, spacing, and style variations, ensuring a consistent and cohesive look for the element within the user interface.
   * Default value: ""
   */
  theme?: string;
  /**
   * Provides detailed configuration for how the element responds to user scrolling actions, specifying whether content scrolls automatically, remains stationary, or follows other predefined scrolling behaviors.
   * Default value: physical
   */
  scrolling?: Scrolling | string;
  /**
   * Specifies the data field that should be used as the title, typically for labeling or displaying the main identifier of an item.
   * Default value: ""
   */
  titleField?: string;
}
/**
 CardView creates Card-based layout. Supports Filtering, Sorting, Grouping, Editing and UI Virtualization.
*/
export interface CardView extends BaseElement, CardViewProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever a user applies a filter to the data set, typically by selecting filter criteria or options in the interface. It signals that the displayed data has been updated based on the chosen filter parameters, allowing developers to execute additional logic in response, such as refreshing the view or fetching new data.
	* @param event. The custom event.    */
  onFilter?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a sorting action is performed on the data set, such as when a user updates the sorting order of a table or list by clicking on a column header or selecting a sort option.
	* @param event. The custom event.    */
  onSort?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered immediately after the window has been successfully opened, allowing you to execute code in response to the window becoming visible and accessible to the user. It is typically used to initialize resources, update the user interface, or perform actions that should occur as soon as the window appears.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is fired just before the window is opened, giving you an opportunity to perform additional logic or checks. To prevent the window from opening, call event.preventDefault() within your event handler. If preventDefault() is not called, the window will open as usual. This allows you to control whether or not the window opening operation proceeds based on your custom criteria.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered immediately when the window is closed by the user or programmatically, allowing scripts to execute any necessary cleanup operations or final actions before the window is terminated.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered just before the window begins the closing process. It gives developers an opportunity to perform actions or prompt the user before the window actually closes. If you want to prevent the window from closing—for example, to confirm with the user or save data—you can call event.preventDefault() inside the event handler function. This will cancel the default close operation and keep the window open.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user initiates a drag action on the card component, typically by clicking and holding the mouse button or starting a touch gesture. It signals the beginning of the card's movement, allowing developers to implement custom behavior such as visual feedback or updating drag-related state.
	* @param event. The custom event.    */
  onDragStart: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered continuously while the user is actively dragging the card element with their cursor or finger, allowing you to track the card's position and respond to movement in real time.
	* @param event. The custom event.    */
  onDragging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user initiates a drag action on the card component, typically by clicking and holding the mouse button (or touching and holding on a touchscreen) and then moving the card to a different position within the interface.
	* @param event. The custom event.    */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /**
   * Enables advanced filtering functionality, allowing users to refine and display data based on specific criteria such as category, date range, status, or custom attributes. This feature improves data navigation and helps users quickly locate relevant information.
   * @param {string[]} filters. Filter information
   * @param {string} operator?. Logical operator between the filters of different fields
   */
  addFilter(filters: string[], operator?: string): void;
  /**
   * Creates and inserts a new record into the database or data collection, initializing all required fields with the provided values.
   * @param {number | string} recordId?. The id of the record to add
   * @param {any} data?. The data of the record to add
   * @param {string} position?. The position to add the record to. Possible values: 'first' and 'last'.
   */
  addRecord(recordId?: number | string, data?: any, position?: string): void;
  /**
   * Enables sorting functionality, allowing users to arrange data in ascending or descending order based on specified fields or columns. This feature enhances the user experience by making it easier to organize, locate, and analyze information within lists or tables.
   * @param {[] | string} dataFields. The data field(s) to sort by
   * @param {[] | string} orderBy. The sort direction(s) to sort the data field(s) by
   */
  addSort(dataFields: [] | string, orderBy: [] | string): void;
  /**
   * Initiates an edit transaction, allowing changes to be made to the data. This operation typically marks the start of a sequence where modifications can be performed, and may require committing or canceling the changes to finalize or discard the edits.
   * @param {number | string} recordId. The id of the record to edit
   */
  beginEdit(recordId: number | string): void;
  /**
   * Terminates the ongoing edit session and reverts any unsaved changes, ensuring that all modifications made during the current operation are discarded and the original state is restored.
   */
  cancelEdit(): void;
  /**
   * Closes any currently open header panel, such as a dropdown menu or navigation panel, ensuring that all header-related overlays are hidden from view.
   */
  closePanel(): void;
  /**
   * Finalizes the current editing session by committing all modifications made and persisting the changes to the data source or storage.
   */
  endEdit(): void;
  /**
   * Ensures that a specified record is brought into view by automatically scrolling to its position on the page. If the operation is successful, the method returns the HTML element representing the card associated with that record, allowing for further manipulation or interaction within the DOM.
   * @param {number | string} recordId. The id of the record to scroll to
   * @returns {HTMLElement}
   */
  ensureVisible(recordId: number | string): HTMLElement;
  /**
   * Opens the "Customize Cards" dropdown panel, allowing users to access and modify card display settings.
   */
  openCustomizePanel(): void;
  /**
   * Displays the "Filter" header panel as a drop-down menu, allowing users to view and select filtering options for the current data set.
   */
  openFilterPanel(): void;
  /**
   * Displays the "Sort" header panel as a dropdown menu, allowing users to select sorting options for the current data view.
   */
  openSortPanel(): void;
  /**
   * Removes any active filters, displaying the full, unfiltered dataset.
   */
  removeFilter(): void;
  /**
   * Deletes a specific record from the database or data collection, permanently removing all associated data for that entry.
   * @param {number | string} recordId. The id of the record to remove
   */
  removeRecord(recordId: number | string): void;
  /**
   * Disables any active sorting on the data, reverting the items to their original order.
   */
  removeSort(): void;
  /**
   * Displays a single vertical column within the layout, typically used to organize content or interface elements in a structured manner. This column can contain text, images, or other components, and its appearance (such as width, alignment, and styling) can be customized through additional properties or CSS classes.
   * @param {string} dataField. The data field of the column
   */
  showColumn(dataField: string): void;
  /**
   * Applies sorting to the CardView based on the specified data field. You can either add sorting by providing a valid sortOrder (such as 'asc' or 'desc'), or remove sorting from a column by setting the sortOrder parameter to null. This allows dynamic adjustment of CardView sorting criteria, enabling users to sort data as needed or clear sorting on individual columns.
   * @param {string} dataField. The data field of the column to sort, e.g., 'firstName'.
   * @param {string | null} sortOrder. Sort order to apply: 'asc' for ascending, 'desc' for descending, or null to remove sorting.
   */
  sortBy(dataField: string, sortOrder: string | null): void;
  /**
   * Enhances and applies custom filter criteria to a specific column within the cardview. Accepts both single and multiple filter expressions, allowing for complex filtering logic using logical operators such as "and" and "or". For example, to filter the "lastName" column for values that contain either "burke" or "peterson", use: `cardview.setFilter('lastName', ['CONTAINS "burke"', 'or', 'CONTAINS "peterson"'])`. The method also supports numeric filters (e.g., `GREATER_THAN 100`), a variety of comparison operators (such as `EQUALS`, `LESS_THAN`, `STARTS_WITH`, etc.), and can be used to combine different conditions for precise data selection.
   * @param {string} dataField. The data field name of the column to filter, e.g., 'firstName'.
   * @param {string} filter. The filter expression(s) to apply. Examples include 'startsWith B', ['contains Andrew or contains Nancy'], or ['quantity', '<= 3 and >= 8']. Supported operators: '=', 'EQUAL', '<>', 'NOT_EQUAL', '!=', '<', 'LESS_THAN', '>', 'GREATER_THAN', '<=', 'LESS_THAN_OR_EQUAL', '>=', 'GREATER_THAN_OR_EQUAL', 'starts with', 'STARTS_WITH', 'ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS', 'DOES_NOT_CONTAIN', 'NULL', 'NOT_NULL'.
   */
  setFilter(dataField: string, filter: string): void;
  /**
   * Sets the locale of a component.
   * @param {string} locale. The locale abbreviation. For example: 'de'.
   * @param {any} messages?. Object containing the locale messages.
   */
  setLocale(locale: string, messages?: any): void;
}

export interface CardViewColumn {
  /**
   * Sets or gets the column's data source bound field.
   * Default value: ""
   */
  dataField?: string;
  /**
   * Sets or gets the column's data type.
   * Default value: string
   */
  dataType?: CardViewColumnDataType | string;
  /**
   * Sets or gets the column's icon. Expects CSS class name.
   * Default value: 
   */
  icon?: any;
  /**
   * Sets or gets the column's image visibility.
   * Default value: false
   */
  image?: boolean;
  /**
   * Sets or gets the text displayed in the column's header.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets whether the column is visible. Set the property to 'false' to hide the column.
   * Default value: true
   */
  visible?: boolean;
  /**
   * Sets or gets the column's format function.
   * Default value: null
   */
  formatFunction?: { (settings: { template?: string, column?: any, record?: any, value?: any }): any };
  /**
   * Sets or gets the column's format settings. You can use any of the build in formatting options or to NumberFormat object like that: 'Intl: {  NumberFormat: {  style: \'currency\', currency: \'EUR\' }}' or DateTimeFormat object like that: 'Intl: {  DateTimeFormat: {  dateStyle: \'full\' }}''
   * Default value: [object Object]
   */
  formatSettings?: any;
}

/**Configures the grid's data source options, specifying how data should be loaded and managed when the <em>dataSource</em> property is assigned either an array of data objects or a remote data endpoint (URL). This includes settings for data retrieval, formatting, paging, sorting, and other data-related behaviors. */
export interface DataSourceSettings {
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
   * Sets or gets the XML binding root.
   * Default value: blackList
   */
  sanitizeHTML?: DataSourceSettingsSanitizeHTML | string;
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
  dataFields?: DataSourceSettingsDataField[];
  /**
   * Sets or gets whether the data source type.
   * Default value: array
   */
  dataSourceType?: DataSourceSettingsDataSourceType | string;
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

export interface DataSourceSettingsDataField {
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
  dataType?: DataSourceSettingsDataFieldDataType | string;
}

declare global {
    interface Document {
        createElement(tagName: "smart-card-view"): CardView;
        querySelector(selectors: "smart-card-view"): CardView | null;
        querySelectorAll(selectors: "smart-card-view"): NodeListOf<CardView>;
        getElementsByTagName(qualifiedName: "smart-card-view"): HTMLCollectionOf<CardView>;
        getElementsByName(elementName: "smart-card-view"): NodeListOf<CardView>;
    }
}

/**Specifies the layout direction of the card cells, determining whether they are arranged horizontally (side by side) or vertically (stacked one above the other) within the container. This setting controls the visual organization of the cards. */
export declare type Orientation = 'horizontal' | 'vertical';
/**Sets or gets the column's data type. */
export declare type CardViewColumnDataType = 'string' | 'date' | 'boolean' | 'number' | 'array' | 'any';
/**Provides detailed information about the 'cover image fit' property, which defines how a cover image is resized or scaled to fit within its container. This property determines whether the image should fill, contain, cover, or be otherwise adjusted to cover the allotted space, often corresponding to CSS 'object-fit' values such as 'cover', 'contain', or 'fill'. */
export declare type CardViewCoverMode = 'fit' | 'crop';
/**Sets or gets the XML binding root. */
export declare type DataSourceSettingsSanitizeHTML = 'all' | 'blackList' | 'none';
/**Sets the dataField type. */
export declare type DataSourceSettingsDataFieldDataType = 'string' | 'date' | 'boolean' | 'number' | 'array' | 'any';
/**Sets or gets whether the data source type. */
export declare type DataSourceSettingsDataSourceType = 'array' | 'json' | 'xml' | 'csv' | 'tsv';
/**Sets or retrieves the position of the header section within the component. The header typically includes interactive elements such as the Customize, Filter, Sort, and Search buttons, allowing users to tailor the content display, apply filters, change sorting options, and perform searches. */
export declare type CardViewHeaderPosition = 'none' | 'top' | 'bottom';
/**Provides detailed configuration for how the element responds to user scrolling actions, specifying whether content scrolls automatically, remains stationary, or follows other predefined scrolling behaviors. */
export declare type Scrolling = 'physical' | 'virtual' | 'infinite' | 'deferred';
