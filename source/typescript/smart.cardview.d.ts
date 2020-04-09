import  {BaseElement, Animation} from "./smart.element"

/**
 CardView creates Card-based layout. Supports Filtering, Sorting, Grouping, Editing and UI Virtualization.
*/
export interface CardView extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Toggles the button for adding new cards.
   * Default value: false
   */
  addNewButton?: boolean;
  /**
   * Allows reordering by dragging cards.
   * Default value: false
   */
  allowDrag?: boolean;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Describes the height for each card.
   * Default value: null
   */
  cardHeight?: number | null;
  /**
   * Describes the orientation of the card cells.
   * Default value: vertical
   */
  cellOrientation?: Orientation;
  /**
   * Allows collapsing the card content.
   * Default value: false
   */
  collapsible?: boolean;
  /**
   * Describes the columns properties:label - Sets the column namedataField - Sets the dataField nameicon - Sets the icon for the columnformatSettings - Sets the settings about the format for the current columnformatFunction - Function for customizing the value
   * Default value: 
   */
  columns?: CardViewColumn[];
  /**
   * Describes which data field to be set as cover.
   * Default value: "''"
   */
  coverField?: string;
  /**
   * Describes the cover image fit property.
   * Default value: crop
   */
  coverMode?: CardViewCoverMode;
  /**
   * Determines the data source for the item that will be displayed inside the card.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Allows the edit option for the cards.
   * Default value: false
   */
  editable?: boolean;
  /**
   * Sets or gets the header position. The header contains the Customize, Filter, Sort, and Search buttons.
   * Default value: none
   */
  headerPosition?: CardViewHeaderPosition;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
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
   * Callback function, used when record is inserted.
   * Default value: null
   */
  onRecordInserted?: any;
  /**
   * Callback function, used when record is removed.
   * Default value: null
   */
  onRecordRemoved?: any;
  /**
   * Describes the scrolling behavior of the element.
   * Default value: physical
   */
  scrolling?: Scrolling;
  /**
   * Describes which data field to be set as title.
   * Default value: ""
   */
  titleField?: string;
  /** 
   * This event is triggered when a filter has been applied.
	* @param event. The custom event.    */
  onFilter?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when sorting has been applied.
	* @param event. The custom event.    */
  onSort?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window is opened.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window is closed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user starts dragging the card.
	* @param event. The custom event.    */
  onDragStart: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user is dragging the card.
	* @param event. The custom event.    */
  onDragging?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user dragged the card.
	* @param event. The custom event.    */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /**
   * Adds filtering
   * @param {string[]} filters. Filter information
   * @param {string} operator?. Logical operator between the filters of different fields
   */
  addFilter(filters: string[], operator?: string): void;
  /**
   * Adds a new record
   * @param {number | string} recordId?. The id of the record to add
   * @param {any} data?. The data of the record to add
   * @param {string} position?. The position to add the record to. Possible values: 'first' and 'last'.
   */
  addRecord(recordId?: number | string, data?: any, position?: string): void;
  /**
   * Adds sorting
   * @param {[] | string} dataFields. The data field(s) to sort by
   * @param {[] | string} orderBy. The sort direction(s) to sort the data field(s) by
   */
  addSort(dataFields: [] | string, orderBy: [] | string): void;
  /**
   * Begins an edit operation
   * @param {number | string} recordId. The id of the record to edit
   */
  beginEdit(recordId: number | string): void;
  /**
   * Ends the current edit operation and discards changes
   */
  cancelEdit(): void;
  /**
   * Closes any open header panel (drop down)
   */
  closePanel(): void;
  /**
   * Ends the current edit operation and saves changes
   */
  endEdit(): void;
  /**
   * Makes sure a record is visible by scrolling to it. If succcessful, the method returns the HTML element of the record's card.
   * @param {number | string} recordId. The id of the record to scroll to
   * @returns {HTMLElement}
   */
  ensureVisible(recordId: number | string): HTMLElement;
  /**
   * Opens the "Customize cards" header panel (drop down)
   */
  openCustomizePanel(): void;
  /**
   * Opens the "Filter" header panel (drop down)
   */
  openFilterPanel(): void;
  /**
   * Opens the "Sort" header panel (drop down)
   */
  openSortPanel(): void;
  /**
   * Removes filtering
   */
  removeFilter(): void;
  /**
   * Removes a record
   * @param {number | string} recordId. The id of the record to remove
   */
  removeRecord(recordId: number | string): void;
  /**
   * Removes sorting
   */
  removeSort(): void;
  /**
   * Shows a column
   * @param {string} dataField. The data field of the column
   */
  showColumn(dataField: string): void;
}

export interface CardViewColumn {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the column's data source bound field.
   * Default value: ""
   */
  dataField?: string;
  /**
   * Sets or gets the column's icon. Expects CSS class name.
   * Default value: 
   */
  icon?: any;
  /**
   * Sets or gets the column's image visibility.
   * Default value: 
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
   * Default value: 
   */
  formatFunction?: any;
  /**
   * Sets or gets the column's format settings. You can use any of the build in formatting options or to NumberFormat object like that: 'Intl: {  NumberFormat: {  style: \'currency\', currency: \'EUR\' }}' or DateTimeFormat object like that: 'Intl: {  DateTimeFormat: {  dateStyle: \'full\' }}''
   * Default value: [object Object]
   */
  formatSettings?: any;
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

/**Describes the orientation of the card cells. */
export declare type Orientation = 'horizontal' | 'vertical';
/**Describes the cover image fit property. */
export declare type CardViewCoverMode = 'fit' | 'crop';
/**Sets or gets the header position. The header contains the Customize, Filter, Sort, and Search buttons. */
export declare type CardViewHeaderPosition = 'none' | 'top' | 'bottom';
/**Describes the scrolling behavior of the element. */
export declare type Scrolling = 'physical' | 'virtual' | 'infinite' | 'deferred';
