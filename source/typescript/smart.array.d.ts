import  {BaseElement, Animation} from "./smart.element"

/**
 Array is broadly used in Engineering applications and displays a Grid of values.
*/
export interface Array extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets the indexing mode of the Array.
   * Default value: LabVIEW
   */
  arrayIndexingMode?: ArrayArrayIndexingMode;
  /**
   * A callback function that is called when the width, height or disabled properties of an inner element need to be updated. Applicable only when type is 'custom'.
   * Default value: null
   */
  changeProperty?: any;
  /**
   * Sets or gets the number of visible columns in the Array.
   * Default value: 1
   */
  columns?: number;
  /**
   * Sets or gets the default value of inner elements when type is 'custom'.
   * Default value: null
   */
  customWidgetDefaultValue?: any;
  /**
   * Sets or gets the dimensions of the Array.
   * Default value: 1
   */
  dimensions?: number;
  /**
   * Sets or gets disabled state of the Array.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the height of Array elements (row height).
   * Default value: 25
   */
  elementHeight?: number;
  /**
   * A callback function that can be used for applying settings to element widgets. When type is 'custom', widgets have to be initialized in this callback function.
   * Default value: null
   */
  elementTemplate?: any;
  /**
   * Sets or gets the width of Array elements (column width).
   * Default value: 75
   */
  elementWidth?: number;
  /**
   * A callback function that can be used for getting the value of element widgets.
   * Default value: null
   */
  getElementValue?: any;
  /**
   * Sets or gets the height of indexers.
   * Default value: 25
   */
  indexerHeight?: number;
  /**
   * Sets or gets the width of indexers.
   * Default value: 50
   */
  indexerWidth?: number;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback, related to localization module. 
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid '!",
   *     "propertyInvalidValueType": "Invalid '!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": ".",
   *     "htmlTemplateNotSuported": ": Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "callbackFunctionRequired": "jqx-array: When \"type\" is 'custom', the  callback function has to be implemented."
   *   }
   * }
   */
  messages?: any;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the number of visible rows in the Array.
   * Default value: 1
   */
  rows?: number;
  /**
   * A callback function that can be used for setting the value of element widgets.
   * Default value: null
   */
  setElementValue?: any;
  /**
   * Sets or gets whether to display the horizontal scrollbar.
   * Default value: false
   */
  showHorizontalScrollbar?: boolean;
  /**
   * Sets or gets whether to display the array indexers.
   * Default value: false
   */
  showIndexDisplay?: boolean;
  /**
   * Sets or gets whether to highlight selected elements.
   * Default value: false
   */
  showSelection?: boolean;
  /**
   * Sets or gets whether to display the vertical scrollbar.
   * Default value: false
   */
  showVerticalScrollbar?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or gets the data type and element widgets to be used in the Array.
   * Default value: none
   */
  type?: ArrayType;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the value of the Array.
   * Default value: 
   */
  value?: any;
  /** 
   * This event is triggered when a visible row or column has been added or removed.
	* @param event. The custom event.    */
  onArraySizeChange?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the value of the Array is changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a dimension has been added or removed.
	* @param event. The custom event.    */
  onDimensionChange?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an Array element has been clicked.
	* @param event. The custom event.    */
  onElementClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the Array is scrolled with one of the scrollbars.
	* @param event. The custom event.    */
  onScroll: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the column width or the row height has been changed.
	* @param event. The custom event.    */
  onSizeChange?: ((this: any, ev: Event) => any) | null;
  /**
   * Adds a dimension to the array.<br /> <em>Note:</em> when adding multiple dimensions simultaneously, it is recommended to do so by dynamically setting the <strong>dimensions</strong> property.
   */
  addDimension(): void;
  /**
   * Clears the selection.
   */
  clearSelection(): void;
  /**
   * Copies the value of an Array element to the clipboard.
   * @param {number} Rowvisibleindex. The visible index of the row (y coordinate) of the element.
   * @param {number} Columnvisibleindex. The visible index of the column (x coordinate) of the element.
   */
  copyElementValueToClipboard(Rowvisibleindex: number, Columnvisibleindex: number): void;
  /**
   * Deletes a column in the <strong>value</strong> array.
   * @param {number} Columnindex. Index of the column to be deleted.
   */
  deleteColumn(Columnindex: number): void;
  /**
   * Deletes a row in the <strong>value</strong> array.
   * @param {number} Rowindex. Index of the row to be deleted.
   */
  deleteRow(Rowindex: number): void;
  /**
   * Empties the <strong>value</strong> array.
   */
  emptyArray(): void;
  /**
   * Designates the end of a selection started with the method <strong>startSelection</strong>.
   * @param {number} Rowboundindex. The bound index of the row (y coordinate) to end the selection to.
   * @param {number} Columnboundindex. The bound index of the column (x coordinate) to end the selection to.
   */
  endSelection(Rowboundindex: number, Columnboundindex: number): void;
  /**
   * Returns the HTML element at the specified visible row and column coordinates of the Array.
   * @param {number} Rowvisibleindex. The visible index of the row (y coordinate) of the element.
   * @param {number} Columnvisibleindex. The visible index of the column (x coordinate) of the element.
   * @returns {HTMLElement}
   */
  getElement(Rowvisibleindex: number, Columnvisibleindex: number): HTMLElement;
  /**
   * Returns an object with the values of the Array element width and height.
   * @returns {any}
   */
  getElementSize(): any;
  /**
   * Gets an array with the values of all indexers.
   * @returns {any[]}
   */
  getIndexerValue(): any[];
  /**
   * Returns an HTML element from the Array at the specified page coordinates and other information about this element.
   * @param {number} Pagexcoordinate. 
   * @param {number} Pageycoordinate. 
   * @returns {any}
   */
  hitTest(Pagexcoordinate: number, Pageycoordinate: number): any;
  /**
   * Inserts a column in the <strong>value</strong> array before the specified column. The new column is filled with default values.
   * @param {number} Columnindex. Index of the column to add a new column before.
   */
  insertColumnBefore(Columnindex: number): void;
  /**
   * Inserts a row in the <strong>value</strong> array before the specified row. The new row is filled with default values.
   * @param {number} Rowindex. Index of the row to add a new row before.
   */
  insertRowBefore(Rowindex: number): void;
  /**
   * Sets all <strong>value</strong> array members to the default value.
   */
  reinitializeArray(): void;
  /**
   * Removes a dimension from the array.<br /> <em>Note:</em> when removing multiple dimensions simultaneously, it is recommended to do so by dynamically setting the <strong>dimensions</strong> property.
   */
  removeDimension(): void;
  /**
   * Sets the array's <strong>type</strong> to <em>'none'</em>.
   */
  reset(): void;
  /**
   * Resizes Array elements (changes both the column width and the row height).
   * @param {number} Elementwidth. The new element (column) width.
   * @param {number} Elementheight. The new element (row) height.
   */
  resizeElement(Elementwidth: number, Elementheight: number): void;
  /**
   * Selects all members of the array.
   */
  selectAll(): void;
  /**
   * Selects an element with the passed row and column bound indexes.
   * @param {number} Rowboundindex. 
   * @param {number} Columnboundindex. 
   */
  selectElement(Rowboundindex: number, Columnboundindex: number): void;
  /**
   * Sets the column (element) width.
   * @param {number} Columnwidth. The new column width.
   */
  setColumnWidth(Columnwidth: number): void;
  /**
   * Sets the default value of array members.
   * @param {any} Defaultvalue. The new default value. Its data type should correspond to the <strong>type</strong> of the Array.
   */
  setDefaultValue(Defaultvalue: any): void;
  /**
   * Sets the value of one or more Array indexers.
   * @param {any[]} Settings. An array of objects with the fields index and value.
   */
  setIndexerValue(Settings: any[]): void;
  /**
   * Sets the row (element) height.
   * @param {number} Rowheight. The new row height.
   */
  setRowHeight(Rowheight: number): void;
  /**
   * Makes the last array member visible.
   */
  showLastElement(): void;
  /**
   * Designates the start of a selection. To end a selection, call <strong>endSelection</strong>.
   * @param {number} Rowboundindex. The bound index of the row (y coordinate) to start the selection from.
   * @param {number} Columnboundindex. The bound index of the column (x coordinate) to start the selection from.
   */
  startSelection(Rowboundindex: number, Columnboundindex: number): void;
  /**
   * Increases or decreases the visual gap between Array elements.
   */
  toggleElementGap(): void;
  /**
   * Transposes the array. Applicable only when <strong>dimensions</strong> is <em>2</em> (2D array).
   */
  transposeArray(): void;
  /**
   * Sets or gets the value of the whole array or sets the value of a member of the array.
   * @param {any} Newvalue?. If the method is used for setting the value of the whole array, the expected value is an array. If it is used for setting the value of an array member, the value can be of any applicable type.
   * @param {number | number[]} Elementindexes?. If this parameter is passed, only the value of the array member with the provided dimension indexes is set. Dimension indexes that are not passed are considered to be 0.
   * @returns {any[]}
   */
  val(Newvalue?: any, Elementindexes?: number | number[]): any[];
}

declare global {    
    interface Document {
			createElement(tagName: "smart-array"): Array;
			querySelector(selectors: "smart-array"): Array | null;	
			querySelectorAll(selectors: "smart-array"): NodeListOf<Array>;
			getElementsByTagName(qualifiedName: "smart-array"): HTMLCollectionOf<Array>;
			getElementsByName(elementName: "smart-array"): NodeListOf<Array>;	
    }
}

/**Sets or gets the indexing mode of the Array. */
export declare type ArrayArrayIndexingMode = 'LabVIEW' | 'JavaScript';
/**Sets or gets the data type and element widgets to be used in the Array. */
export declare type ArrayType = 'none' | 'boolean' | 'numeric' | 'string' | 'custom';
