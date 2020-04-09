/**
 Accordion organizes content within collapsable items.
*/
export interface Accordion extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Enables or disables the accordion. Disabled elements can not be interacted with.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the expanded item indexes. Using this property items can be expanded by passing in their indexes. The number of expanded items is limited by the expandMode.
   * Default value: 
   */
  expandedIndexes?: number[];
  /**
   * Sets or gets the expand mode. Expand mode determines how the items will expand or collapse.
   * Default value: singleFitHeight
   */
  expandMode?: AccordionExpandMode;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
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
   *     "accordionItemRequired": "' requires an item from type \"jqx-accordion-item\".",
   *     "indexOutOfBound": "' method.",
   *     "invalidSettings": "' method accepts a string or an object as it's second parameter.",
   *     "noItems": ": No child elements found.",
   *     "overridingProperties": "' property is used by default."
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines if the element is readonly or not. If the element true, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Enables or disables accordion reordering.
   * Default value: false
   */
  reorder?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Determines whether the element can be focused or not.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when an item is collapsed.
	* @param event. The custom event. Custom data event was created with: ev.detail(content, index, label)
   *  content - The content of the item.
   *  index - The index of the item.
   *  label - The label of the item
   */
  onCollapse?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an item is going to be collapsed.
	* @param event. The custom event. Custom data event was created with: ev.detail(content, index, label)
   *  content - The content of the item.
   *  index - The index of the item.
   *  label - The label of the item
   */
  onCollapsing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a reordering operation is completed.
	* @param event. The custom event. Custom data event was created with: ev.detail(position, target, content, index, label)
   *  position - The current top and left position of the item that was dragged.
   *  target - The item that was dragged.
   *  content - The content of the item.
   *  index - The index of the item.
   *  label - The label of the item.
   */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a reordering operation is started.
	* @param event. The custom event. Custom data event was created with: ev.detail(position, target, content, index, label)
   *  position - The current top and left position of the item that is about to be dragged.
   *  target - The item that is about to be dragged.
   *  content - The content of the item.
   *  index - The index of the item.
   *  label - The label of the item.
   */
  onDragStart: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an item is expanded.
	* @param event. The custom event. Custom data event was created with: ev.detail(position, target, content, index, label)
   *  position - The current top and left position of the item.
   *  target - The item that was dragged.
   *  content - The content of the item.
   *  index - The index of the item.
   *  label - The label of the item.
   */
  onExpand?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an item is going to be expanded.
	* @param event. The custom event. Custom data event was created with: ev.detail(content, index, label)
   *  content - The content of the item.
   *  index - The index of the item.
   *  label - The label of the item
   */
  onExpanding?: ((this: any, ev: Event) => any) | null;
  /**
   * Collapses an item at a specified index.
   * @param {number} position. The index of the collapsed item.
   */
  collapse(position: number): void;
  /**
   * Expands an item at a specified index.
   * @param {number} position. The index of the expanded item.
   */
  expand(position: number): void;
  /**
   * Inserts a new item at a specified index.
   * @param {number} index. The index where the item must be inserted.
   * @param {any} item. An object containing the values for the properties of the new item to be inserted.
   */
  insert(index: number, item: any): void;
  /**
   * Removes an item at a specified index.
   * @param {number} position. The index of the item to be removed.
   */
  removeAt(position: number): void;
  /**
   * Updates an item from the element.
   * @param {number} index. The index of the item to be updated.
   * @param {any} settings. An object containing the values for the properties of the item that will be updated.
   */
  update(index: number, settings: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-accordion"): Accordion;
			querySelector(selectors: "smart-accordion"): Accordion | null;	
			querySelectorAll(selectors: "smart-accordion"): NodeListOf<Accordion>;
			getElementsByTagName(qualifiedName: "smart-accordion"): HTMLCollectionOf<Accordion>;
			getElementsByName(elementName: "smart-accordion"): NodeListOf<Accordion>;	
    }
}

/**Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
export declare type Animation = 'none' | 'simple' | 'advanced';
/**Sets or gets the expand mode. Expand mode determines how the items will expand or collapse. */
export declare type AccordionExpandMode = 'single' | 'singleFitHeight' | 'multiple' | 'toggle' | 'none';
/**
 Single item in an Accordion view.
*/
export interface AccordionItem extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets header's arrow position. If the value is 'none' the arrow is not shown.
   * Default value: left
   */
  arrow?: AccordionItemArrow;
  /**
   * Sets or gets the content if the item.
   * Default value: ''
   */
  content?: string | HTMLElement;
  /**
   * Sets or gets the expanded state.
   * Default value: false
   */
  expanded?: boolean;
  /**
   * Sets or gets the focus state.
   * Default value: false
   */
  focused?: boolean;
  /**
   * Sets or gets the label if the item.
   * Default value: ""
   */
  label?: string;
  /** 
   * This event is triggered when the item is collapsed.
	* @param event. The custom event.    */
  onCollapse?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the item is expanded.
	* @param event. The custom event.    */
  onExpand?: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-accordion-item"): AccordionItem;
			querySelector(selectors: "smart-accordion-item"): AccordionItem | null;	
			querySelectorAll(selectors: "smart-accordion-item"): NodeListOf<AccordionItem>;
			getElementsByTagName(qualifiedName: "smart-accordion-item"): HTMLCollectionOf<AccordionItem>;
			getElementsByName(elementName: "smart-accordion-item"): NodeListOf<AccordionItem>;	
    }
}

/**Sets or gets header's arrow position. If the value is 'none' the arrow is not shown. */
export declare type AccordionItemArrow = 'left' | 'right' | 'none';
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
/**
 Breadcrumbs allow users to make selections from a range of values.
*/
export interface Breadcrumb extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Enables or disables the "Add new item" (+) button.
   * Default value: false
   */
  addNewItem?: boolean;
  /**
   * Enables or disables the dragging of breadcrumb items.
   * Default value: false
   */
  allowDrag?: boolean;
  /**
   * Enables or disables the dropping of dragged breadcrumb items.
   * Default value: false
   */
  allowDrop?: boolean;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Show/Hide the close button of breadcrumb items.
   * Default value: false
   */
  closeButtons?: boolean;
  /**
   * Determines the data source to load breadcrumb items from. The Array should contain objects. Each object defines a single breadcrumb item.
   * Default value: []
   */
  dataSource?: {label: string, value: string}[];
  /**
   * Enables or disables the Breadcrumb.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the template of breadcrumb items. The value of this property can be the id of an HTMLTemplateElement or the HTMLTemplateElement itself. If set to null, no template is applied.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines the minimum width of the Breadcrumb at which it will switch from normal to minimized mode. If set to null, the Breadcrumb does not minimize automatically.
   * Default value: null
   */
  minimizeWidth?: number;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when a Breadcrumb item is closed.
	* @param event. The custom event. Custom data event was created with: ev.detail(item)
   *  item - The item that has been closed.
   */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a Breadcrumb item is about to be closed. The closing operation can be canceled by calling <code>event.preventDefault()</code> in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(item)
   *  item - The item that is going to be closed.
   */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a Breadcrumb item is dropped.
	* @param event. The custom event.    */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a Breadcrumb item is being dragged.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, originalEvent, target)
   *  item - The item that is being dragged.
   *  originalEvent - The original event that initiates the dragging operation.
   *  target - The original target.
   */
  onDragging?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the "Add new item" (+) button is clicked.
	* @param event. The custom event.    */
  onAddNewItem?: ((this: any, ev: Event) => any) | null;
  /**
   * Adds an item.
   * @param {any} itemDetails. An Object with the fields "index", "label", and "value".
   */
  addItem(itemDetails: any): void;
  /**
   * Restores the Breadcrumb from minimized state back to normal.
   */
  maximize(): void;
  /**
   * Minimizes the Breadcrumb.
   */
  minimize(): void;
  /**
   * Removes an item.
   * @param {HTMLElement} item. The item to remove.
   */
  removeItem(item: HTMLElement): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-breadcrumb"): Breadcrumb;
			querySelector(selectors: "smart-breadcrumb"): Breadcrumb | null;	
			querySelectorAll(selectors: "smart-breadcrumb"): NodeListOf<Breadcrumb>;
			getElementsByTagName(qualifiedName: "smart-breadcrumb"): HTMLCollectionOf<Breadcrumb>;
			getElementsByName(elementName: "smart-breadcrumb"): NodeListOf<Breadcrumb>;	
    }
}

/**
 Buttons allow users to take actions, and make choices, with a single tap. Buttons communicate actions that users can take.
*/
export interface Button extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines the click mode for the element.
   * Default value: release
   */
  clickMode?: ClickMode;
  /**
   * Sets the content of the element.
   * Default value: ""
   */
  content?: any;
  /**
   * Enables or disables the button. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets the inner HTML of the element.
   * Default value: """"
   */
  innerHTML: string;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: """"
   */
  name?: string;
  /**
   * If the custom element is readonly, it cannot be interacted with.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or gets the type of the button.
   * Default value: "Reset"
   */
  type?: string;
  /**
   * Sets or gets the button's value. 
   * Default value: ""
   */
  value?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * Click event is triggered regarding to the chosen clickMode.
	* @param event. The custom event.    */
  onClick: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-button"): Button;
			querySelector(selectors: "smart-button"): Button | null;	
			querySelectorAll(selectors: "smart-button"): NodeListOf<Button>;
			getElementsByTagName(qualifiedName: "smart-button"): HTMLCollectionOf<Button>;
			getElementsByName(elementName: "smart-button"): NodeListOf<Button>;	
    }
}

/**Determines the click mode for the element. */
export declare type ClickMode = 'hover' | 'press' | 'release' | 'pressAndRelease';
/**
 Calendar allows user to easily select one or more dates. This control supports multi-calendar view, special dates, holidays, weekends, decade views.
*/
export interface Calendar extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Applies new animation settings when it is enabled. Properties:startSpeed - Determines the initial speed of the animation.easeThreshold - Determines the point at which the animation starts to slow down - the "ease effect".step - Determines the step ( scrolling interval ) at which the animation will run. stepEaseSize - Coefficient that is used to calculated the new step once the threshold has been passed. resetThreshold - Determines the threshold for animation reset. When it's reached the animation will start over.
   * Default value: null
   */
  animationSettings?: any;
  /**
   * Determines the date controls inside the header of the Calendar.
   * Default value: default
   */
  calendarMode?: CalendarMode;
  /**
   * Determines the format of the day names located above the days inside the calendar.
   * Default value: firstTwoLetters
   */
  dayNameFormat?: DayFormat;
  /**
   *  A callback that can be used to customize the format of the month name when calendarMode is set to 'default'.
   * Default value: null
   */
  dateFormatFunction?: any;
  /**
   * Enables or disables the Calendar.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Disables auto navigation when the user clicks on a date that's not from the current month in view.
   * Default value: false
   */
  disableAutoNavigation?: boolean;
  /**
   * Determines the date view of the calendar when calendarMode is set to 'default'
   * Default value: month
   */
  displayMode?: CalendarDisplayMode;
  /**
   * Determines the type of the month/year view when calendarMode is set to Default.
   * Default value: table
   */
  displayModeView?: CalendarDisplayModeView;
  /**
   * Determines the height of the month's drop down inside the Calendar.
   * Default value: "200"
   */
  dropDownHeight?: string;
  /**
   * Determines the width of the month's drop down inside the Calendar.
   * Default value: ""
   */
  dropDownWidth?: string;
  /**
   * Determines the first day of the week. From 0(Sunday) to 6(Saturday)
   * Default value: 0
   */
  firstDayOfWeek?: number;
  /**
   * Sets a custom footer template. Accepts the id of an HTMLTemplateElement or a reference ot it.
   * Default value: null
   */
  footerTemplate?: any;
  /**
   * Sets custom header template. Accepts the id of an HTMLTemplateElement or a reference ot it.
   * Default value: null
   */
  headerTemplate?: any;
  /**
   * Hides the names of the weekdays.
   * Default value: false
   */
  hideDayNames?: boolean;
  /**
   * Hides the dates from other months.
   * Default value: false
   */
  hideOtherMonthDays?: boolean;
  /**
   * Hides the arrow of the tooltip.
   * Default value: false
   */
  hideTooltipArrow?: boolean;
  /**
   * Sets the dates that will be displayed as important.
   * Default value: 
   */
  importantDates?: string[];
  /**
   * Sets a template for the important dates. Accepts the id of an HTMLTemplate element inside the DOM of or a reference to it.
   * Default value: null
   */
  importantDatesTemplate?: any;
  /**
   *  Determines the language of the Calendar. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Determines the max date for the Calendar. Accepts date objects and valid date string formats.
   * Default value: new Date(2100, 1, 1)
   */
  max?: any;
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines the min date for the Calendar. Accepts date objects and valid date string formats.
   * Default value: new Date(1900, 1, 1)
   */
  min?: any;
  /**
   * Determines the number of months to be displayed inside the calendar. The maximum amount of months that can be shown is 12. By default only 1 month is shown.
   * Default value: 1
   */
  months?: number;
  /**
   * Determines the format of the month names in the header when DisplayMode is set to Default or when Months property is greater than 1. 
   * Default value: long
   */
  monthNameFormat?: MonthFormat;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets restricted dates. Restricted dates are dates that cannot be selected/hovered/focused. They are visualy styled as restricted. The dates can be javascript date objects or strings representing a valid date.
   * Default value: 
   */
  restrictedDates?: string[];
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   *  Determines the direction of the navigation buttons located in the header and the animation.
   * Default value: landscape
   */
  scrollButtonsNavigationMode?: ViewLayout;
  /**
   *  Determines the position of the navigation buttons located inside the header. 
   * Default value: both
   */
  scrollButtonsPosition?: LayoutPosition;
  /**
   * Sets the dates that will be selected. Selected dates are styled differently than the rest. The dates can be Date objects or strings in a valid date format.
   * Default value: 
   */
  selectedDates?: string[];
  /**
   * Determines the date selection mode.
   * Default value: default
   */
  selectionMode?: CalendarSelectionMode;
  /**
   * Sets the delay between clicks of the date navigation buttons located in the header of the Calendar. 
   * Default value: 80
   */
  spinButtonsDelay?: number;
  /**
   * Determines the initial delay before the action of the date navigation buttons located in the header of the Calendar. 
   * Default value: 0
   */
  spinButtonsInitialDelay?: number;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets a template for the title section of the Calendar. Accepts the id of an HTMLTemplate element inside the DOM of or a reference it.
   * Default value: null
   */
  titleTemplate?: any;
  /**
   * Enables/Disabled the tooltip for the important dates. If enabled when an important date is hovered a tooltip is displayed.
   * Default value: false
   */
  tooltip?: boolean;
  /**
   * Show/Hide the arrow of the the tooltip for the important dates. By default the arrow is visible.
   * Default value: true
   */
  tooltipArrow?: boolean;
  /**
   * Sets the delay of the tooltip before it appears.
   * Default value: 100
   */
  tooltipDelay?: number;
  /**
   * Set's a custom offset to the tooltip's position. Accepts an array of two numbers: the left coordinate and the top coordinate.
   * Default value: 
   */
  tooltipOffset?: number[][];
  /**
   * Sets the position of the tooltip.
   * Default value: top
   */
  tooltipPosition?: TooltipPosition;
  /**
   * Sets a template for the tooltip's content. Accepts the id of an HTMLTEmplate element inside the DOM or it's reference.
   * Default value: null
   */
  tooltipTemplate?: any;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Determines the orientation of the Calendar.
   * Default value: portrait
   */
  view?: ViewLayout;
  /**
   * Determines the visible sections of the Calendar. The view sections are : title, header, footer. Multiple sections can be applied at the same time. By default only the 'header' section is visible.
   * Default value: header
   */
  viewSections?: string[];
  /**
   * Enables/Disabled week numbering. If enabled week numbers are displayed infront of each week inside the Calendar.
   * Default value: false
   */
  weekNumbers?: boolean;
  /**
   * Determines the number of visible weeks. The value of the property ranges from 1 to 6. Where 1 is one week and 6 is a full month ( 6 weeks ).
   * Default value: 6
   */
  weeks?: number;
  /**
   * Determines the year format in the header when DisplayMode is set to Default or when Months property is greater than 1.
   * Default value: numeric
   */
  yearFormat?: YearFormat;
  /** 
   * This event is triggered when a new date has been selected/unselected.
	* @param event. The custom event. Custom data event was created with: ev.detail(value)
   *  value - An array of all currently selected dates.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the displayMode is about to change. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldDisplayMode, newDisplayMode)
   *  oldDisplayMode - The previous display mode.
   *  newDisplayMode - The new display mode.
   */
  onDisplayModeChanging?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the display mode has changed.
	* @param event. The custom event.    */
  onDisplayModeChange?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the view is changing. This navigation can be cancelled by using the preventDefault method.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, type)
   *  value - The view's date.
   *  type - The view type - 'month', 'decade' or 'year'.
   */
  onNavigationChanging?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the view is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, type)
   *  value - The view's date.
   *  type - The view type - 'month', 'decade' or 'year'.
   */
  onNavigationChange?: ((this: any, ev: Event) => any) | null;
  /**
   * Clears the selection. Removes all seleceted dates.
   */
  clearSelection(): void;
  /**
   * Navigates forwards/backwards depending on the argument.
   * @param {number | Date | string} step. The argument can be the following: <ul><li> number -  representing the number of months to scroll. Can be negavtive. If negative it will scroll backwards.</li><li> Date - a date object representing the Date to navigate to.</li><li> string - a string representing a valid Date, e.g. "2020-10-1" </li></ul>
   * @returns {boolean}
   */
  navigate(step: number | Date | string): boolean;
  /**
   * Selects or Unselects a date.
   * @param {Date | string} date. The date to be selected or unselected. The date can be a Date object or a string in valid date format.
   */
  select(date: Date | string): void;
  /**
   * Selects today's date.
   * @returns {Date}
   */
  today(): Date;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-calendar"): Calendar;
			querySelector(selectors: "smart-calendar"): Calendar | null;	
			querySelectorAll(selectors: "smart-calendar"): NodeListOf<Calendar>;
			getElementsByTagName(qualifiedName: "smart-calendar"): HTMLCollectionOf<Calendar>;
			getElementsByName(elementName: "smart-calendar"): NodeListOf<Calendar>;	
    }
}

/**Determines the date controls inside the header of the Calendar. */
export declare type CalendarMode = 'default' | 'classic';
/**Determines the format of the day names located above the days inside the calendar. */
export declare type DayFormat = 'narrow' | 'firstTwoLetters' | 'long' | 'short';
/**Determines the date view of the calendar when calendarMode is set to 'default' */
export declare type CalendarDisplayMode = 'month' | 'year' | 'decade';
/**Determines the type of the month/year view when calendarMode is set to Default. */
export declare type CalendarDisplayModeView = 'table' | 'list';
/**Determines the format of the month names in the header when DisplayMode is set to Default or when Months property is greater than 1. <br/> */
export declare type MonthFormat = 'narrow' | 'firstTwoLetters' | 'long' | 'short' | '2-digit' | 'numeric';
/**Determines the orientation of the Calendar. */
export declare type ViewLayout = 'landscape' | 'portrait';
/** Determines the position of the navigation buttons located inside the header.  */
export declare type LayoutPosition = 'near' | 'far' | 'both';
/**Determines the date selection mode. */
export declare type CalendarSelectionMode = null | 'default' | 'many' | 'one' | 'oneOrMany' | 'range' | 'week' | 'zeroOrMany' | 'zeroOrOne';
/**Sets the position of the tooltip. */
export declare type TooltipPosition = 'auto' | 'absolute' | 'bottom' | 'top' | 'left' | 'right';
/**Determines the year format in the header when DisplayMode is set to Default or when Months property is greater than 1.<br/> */
export declare type YearFormat = '2-digit' | 'numeric';
/**
 Card component with header, footer and content sections.
*/
export interface Card extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * A callback function, used to add event handlers and other custom logic related to the content inside the card element.
   * Default value: null
   */
  contentHandler?: any;
  /**
   * This object is used to populate card's template. Object keys represent the placeholders surrounded in braces ( e.g.  ) inside the template of an item and their values are used to replace the bindings.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Disables the interaction with the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets custom card template. The template can be the id of an HTMLTemplate element inside the DOM or it's reference. The content of the template may hold one or many property placeholders in format . These placeholders will be replaced with the values of the corresponding properties defined in the dataSource object.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when the card is swiped bottom.
	* @param event. The custom event.    */
  onSwipebottom?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the card is swiped left.
	* @param event. The custom event.    */
  onSwipeleft?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the card is swiped right.
	* @param event. The custom event.    */
  onSwiperight?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the card is swiped top.
	* @param event. The custom event.    */
  onSwipetop?: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-card"): Card;
			querySelector(selectors: "smart-card"): Card | null;	
			querySelectorAll(selectors: "smart-card"): NodeListOf<Card>;
			getElementsByTagName(qualifiedName: "smart-card"): HTMLCollectionOf<Card>;
			getElementsByName(elementName: "smart-card"): NodeListOf<Card>;	
    }
}

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
/**
 Carousel is a slideshow component for cycling through elements—images or slides of text
*/
export interface Carousel extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * The items switch automatically if set to true or to a custom number(representing the timeout in milliseconds). This property works if slideShow property is enabled.
   * Default value: false
   */
  autoPlay?: any;
  /**
   * An array of objects. Each object defines an item. The following object properties are available: label - a string representing the label of the item.content - a string representing the content of the itemimage - a string representing a url link to an image.HTMLcontent - a string representing some HTML structure taht will be generated inside the item.
   * Default value: 
   */
  dataSource?: any[];
  /**
   * Specifies the timeout before a slide changes when a navigation button is pressed. Navigation buttons are repeat buttons that will repeat the oepration after the delay is passed.
   * Default value: 200
   */
  delay?: number;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Disabled the possibility to navigated to an item by clicking on item in displayMode 3d. By default users can navigate to items that are not currently active by clicking on them.
   * Default value: false
   */
  disableItemClick?: boolean;
  /**
   * Determines the display mode.
   * Default value: default
   */
  displayMode?: CarouselDisplayMode;
  /**
   * Hides the navigation buttons.
   * Default value: false
   */
  hideArrows?: boolean;
  /**
   * Hides the slide indication panel that shows which item is currently in view (active item).
   * Default value: false
   */
  hideIndicators?: boolean;
  /**
   * Can be used to customize the slide indicator panel of the accordion. The property can be a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference.
   * Default value: null
   */
  indicatorTemplate?: any;
  /**
   * Determines the interval (in milliseconds) between a slide transitions when slideShow is enabled.
   * Default value: 5000
   */
  interval?: number;
  /**
   * Used to completely customize the content of an item. The property can be a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference. The content of the template can contain property bindings that refer to the dataSource.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Activates/deactivates keyboard navigation. By default, items can not be navigated via keyboard
   * Default value: false
   */
  keyboard?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Determines whether the the items should start over when the first or last item is reached.
   * Default value: false
   */
  loop?: boolean;
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
   *     "htmlTemplateNotSuported": ":  Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
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
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * When slideShow property is set to true, the carousel changes the active slide automatically with a delay set in interval property.
   * Default value: false
   */
  slideShow?: boolean;
  /**
   * Enables or disables switching to the previous/next slide via swiping left/right. By default swiping is disabled.
   * Default value: false
   */
  swipe?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Activates/deactivates slide navigation via mouse wheel. By default it's disabled.
   * Default value: false
   */
  wheel?: boolean;
  /** 
   * Triggered when the active ( in view ) slide is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(index, previousIndex)
   *  index - The index of the new active slide.
   *  previousIndex - The index of the previous slide that was active.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * Triggered when the process of slide changing starts.
	* @param event. The custom event. Custom data event was created with: ev.detail(index, previousIndex)
   *  index - The index of the new active slide.
   *  previousIndex - The index of the previous slide that was active.
   */
  onChanging?: ((this: any, ev: Event) => any) | null;
  /**
   * Navigates to the next slide.
   */
  next(): void;
  /**
   * Pauses the slide show if <strong>slideShow</strong> is enabled.
   */
  pause(): void;
  /**
   * Starts the slide show if <strong>slideShow</strong> is enabled.
   */
  play(): void;
  /**
   * Navigates to the previous slide.
   */
  prev(): void;
  /**
   * Navigates to a specific slide with the given index.
   * @param {number} index. The index of the target slide.
   */
  slideTo(index: number): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-carousel"): Carousel;
			querySelector(selectors: "smart-carousel"): Carousel | null;	
			querySelectorAll(selectors: "smart-carousel"): NodeListOf<Carousel>;
			getElementsByTagName(qualifiedName: "smart-carousel"): HTMLCollectionOf<Carousel>;
			getElementsByName(elementName: "smart-carousel"): NodeListOf<Carousel>;	
    }
}

/**Determines the display mode. */
export declare type CarouselDisplayMode = 'default' | 'multiple' | '3d';
/**
 Chart is a feature-complete interactive graph library that answers the data visualization needs of any modern web app.
*/
export interface Chart extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'.
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines the animation duration in milliseconds. The value must be between 0 and 5000. If it is outside of this range jqxChart will reset it to the default value.
   * Default value: 300
   */
  animationDuration?: number;
  /**
   * Sets the chart's background color.
   * Default value: null
   */
  backgroundColor?: string | null;
  /**
   * Sets the chart's background image.
   * Default value: ""
   */
  backgroundImage?: string;
  /**
   * Sets the chart's border color.
   * Default value: null
   */
  borderLineColor?: string | null;
  /**
   * Sets the chart's border line width.
   * Default value: 1
   */
  borderLineWidth?: number;
  /**
   * Sets the caption (title) of the chart.
   * Default value: "Caption"
   */
  caption?: string;
  /**
   * Determines whether to clip plotted elements that overflow the axis boundaries.
   * Default value: true
   */
  clip?: boolean;
  /**
   * Sets the chart's color pallete. jqxChart suppports 32 color schemes from 'scheme01' to 'scheme32'.
   * Default value: scheme01
   */
  colorScheme?: ChartColorScheme;
  /**
   * Enables or disables overlapping of the column series.
   * Default value: false
   */
  columnSeriesOverlap?: boolean;
  /**
   * Gets or sets the color of the crosshairs lines.
   * Default value: null
   */
  crosshairsColor?: string | null;
  /**
   * Gets or sets the dash style of the crosshairs lines. The style is a series of numbers indicating line length followed by space length.
   * Default value: "2,2"
   */
  crosshairsDashStyle?: string;
  /**
   * Gets or sets the width of the crosshairs lines.
   * Default value: 1
   */
  crosshairsLineWidth?: number;
  /**
   * Sets the chart's data source.
   * Default value: 
   */
  dataSource?: any;
  /**
   * Sets the description text of the chart.
   * Default value: "Description"
   */
  description?: string;
  /**
   * Enables or disables the chart.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines the drawing function of jqxChart. When the property is set, you can override the jqxChart's drawing.
   * Default value: null
   */
  draw?: any;
  /**
   * Function for custom drawing before the caption and other chart elements.
   * Default value: null
   */
  drawBefore?: any;
  /**
   * Determines if the animation of the axes text is enabled.
   * Default value: false
   */
  enableAxisTextAnimation?: boolean;
  /**
   * Enables or disables the crosshairs lines. The lines are displayed in line and area series when you move over a data point.
   * Default value: false
   */
  enableCrosshairs?: boolean;
  /**
   * Determines whether to display the chart using greyscale colors.
   * Default value: false
   */
  greyScale?: boolean;
  /**
   * Sets the legend's layout.
   * Default value: [object Object]
   */
  legendLayout?: any;
  /**
   * Sets or gets the locale. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Localization object containing culture-specific properties required for formatting currencies, numbers and dates.
   * Default value: [object Object]
   */
  localization?: ChartLocalization;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Sets the left, top, right and bottom padding of the Chart.
   * Default value: [object Object]
   */
  padding?: Padding;
  /**
   * Sets the legend bar position in the Chart.
   * Default value: [object Object]
   */
  legendPosition?: ChartLegendPosition;
  /**
   * Determines the rendering engine used to display the chart. When the property is set to an empty string, jqxChart will automatically select an optimal rendering engine depending on the browser capabilities.
   * Default value: 
   */
  renderEngine?: ChartRenderEngine;
  /**
   * Sets or gets a value indicating whether the Chart's layout is mirrored.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * The seriesGroups property is used to describe all series displayed on the chart. jqxChart supports multiple series of different types and series grouping. Each series group may have its own Value Axis (Y-axis) which allows you to have values with different scales displayed on the same chart at the same time. It also allows you to display multiple series types together on the same chart. For example, you can display all series in one group as lines and the series in a second group as columns. seriesGroups is an array of objects where each object represents one group.
   * Default value: 
   */
  seriesGroups?: ChartSeriesGroup[];
  /**
   * Determines whether to display the chart's border line.
   * Default value: true
   */
  showBorderLine?: boolean;
  /**
   * Determines whether to show or hide the chart series legend.
   * Default value: true
   */
  showLegend?: boolean;
  /**
   * Enables or disables the chart tooltips.
   * Default value: true
   */
  showToolTips?: boolean;
  /**
   * Determines whether to show a composite tooltip containing information for all series.
   * Default value: false
   */
  showToolTipsOnAllSeries?: boolean;
  /**
   * Determines the set of default background, line, text and band colors that will be used in the Chart.
   * Default value: light
   */
  theme?: ChartTheme;
  /**
   * Sets the padding of the chart's title (caption).
   * Default value: [object Object]
   */
  titlePadding?: Padding;
  /**
   * Tooltip background color.
   * Default value: null
   */
  toolTipBackground?: string | null;
  /**
   * User defined tooltip text formatting callback function.
   * Default value: null
   */
  toolTipFormatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Determines the tooltip hide delay in milliseconds.
   * Default value: 4000
   */
  toolTipHideDelay?: number;
  /**
   * Tooltip line color.
   * Default value: null
   */
  toolTipLineColor?: string | null;
  /**
   * Determines the tooltip show delay in milliseconds. Values may range from 0 to 10000 [ms].
   * Default value: 300
   */
  toolTipShowDelay?: number;
  /**
   * An object with settings about the Chart's y-axis (value axis).
   * Default value: [object Object]
   */
  valueAxis?: ChartValueAxis;
  /**
   * Sets the Chart's xAxis.
   * Default value: [object Object]
   */
  xAxis?: ChartXAxis;
  /** 
   * The event is raised when the user clicks on a chart annotation.
	* @param event. The custom event.    */
  onAnnotationClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when the user moves the cursor above a chart annotation.
	* @param event. The custom event.    */
  onAnnotationMouseenter?: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when the user moves the cursor out of a chart annotation.
	* @param event. The custom event.    */
  onAnnotationMouseleave?: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when the user clicks on series element.
	* @param event. The custom event.    */
  onClick: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when the user moves the cursor out of a series element.
	* @param event. The custom event.    */
  onMouseout: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when the user moves the cursor above a series element.
	* @param event. The custom event.    */
  onMouseover: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised after the chart's range selector position changes and after the chart ends rendering.
	* @param event. The custom event.    */
  onRangeSelectionChanged?: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when the chart's range selector position changes and before the chart starts rendering.
	* @param event. The custom event.    */
  onRangeSelectionChanging?: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when the chart begins rendering.
	* @param event. The custom event.    */
  onRefreshBegin?: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when the chart finishes rendering.
	* @param event. The custom event.    */
  onRefreshEnd?: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when a serie is toggled by a user click in the chart's legend or through an API call.
	* @param event. The custom event.    */
  onToggle: ((this: any, ev: Event) => any) | null;
  /**
   * Adds a new color sheme. If a scheme with the same name already exists, the method will update its colors.
   * @param {string} schemeName. The name of the custom color scheme.
   * @param {any[]} colorsArray. An array of color values.
   */
  addColorScheme(schemeName: string, colorsArray: any[]): void;
  /**
   * Returns the colors of a color scheme by name. If the scheme doesn't exist the method returns undefined.
   * @param {string} schemeName. The name of the color scheme.
   * @returns {any[]}
   */
  getColorScheme(schemeName: string): any[];
  /**
   * Gets the rendered coordinates of a data point element.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @param {number} itemIndex. Item (data point) index.
   * @returns 
   */
  getItemCoord(groupIndex: number, serieIndex: number, itemIndex: number): { x: number, y: number, width: number, height: number, center: number, centerOffset: number, innerRadius: number, outerRadius: number, selectedRadiusChange: number, fromAngle: number, toAngle: number, radius: number };
  /**
   * Gets the number of rendered items in a specific serie.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @returns {number}
   */
  getItemsCount(groupIndex: number, serieIndex: number): number;
  /**
   * Gets the rendered coordinates and values of the valueAxis labels.
   * @param {number} groupIndex. Series group index.
   * @returns {any}
   */
  getValueAxisLabels(groupIndex: number): any;
  /**
   * Gets the rendered rectangle coordinates of the valueAxis of specific serie group.
   * @param {number} groupIndex. Series group index.
   * @returns {DOMRect}
   */
  getValueAxisRect(groupIndex: number): DOMRect;
  /**
   * Gets the valueAxis (vertical axis)'s value.
   * @param {number} offset. Vertical offset.
   * @param {number} groupIndex. Series group index.
   * @returns {any}
   */
  getValueAxisValue(offset: number, groupIndex: number): any;
  /**
   * Gets the rendered coordinates and values of the xAxis labels.
   * @param {number} groupIndex. Series group index.
   * @returns {any}
   */
  getXAxisLabels(groupIndex: number): any;
  /**
   * Gets the rendered rectangle coordinates of the x-Axis of specific serie group.
   * @param {number} groupIndex. Series group index.
   * @returns {DOMRect}
   */
  getXAxisRect(groupIndex: number): DOMRect;
  /**
   * Gets the xAxis (horizontal axis)'s value.
   * @param {number} offset. Horizontal offset.
   * @param {number} groupIndex. Series group index.
   * @returns {any}
   */
  getXAxisValue(offset: number, groupIndex: number): any;
  /**
   * Hides a chart serie. The result of calling this function is same as the user unchecking the legend box of a chart serie.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @param {number} itemIndex?. Item (data point) index. Applicable to pie and donut series only.
   */
  hideSerie(groupIndex: number, serieIndex: number, itemIndex?: number): void;
  /**
   * Hides the current tooltip if visible.
   * @param {number} hideDelay?. Hide delay.
   */
  hideToolTip(hideDelay?: number): void;
  /**
   * Prints the chart.
   */
  print(): void;
  /**
   * Refreshes the content of the chart element after a property or data update.
   */
  refresh(): void;
  /**
   * Removes an existing color scheme. If the scheme does not exist, the method has no effect.
   * @param {string} schemeName. The name of the custom color scheme.
   */
  removeColorScheme(schemeName: string): void;
  /**
   * Exports the chart's content as JPEG image.
   * @param {string} fileName?. File name.
   */
  saveAsJPEG(fileName?: string): void;
  /**
   * Exports the chart's content as PNG image.
   * @param {string} fileName?. File name.
   */
  saveAsPNG(fileName?: string): void;
  /**
   * Exports the chart's content as PDF.
   * @param {string} fileName?. File name.
   * @param {string} pageOrientation?. PDF page orientation. <strong>Possible values:</strong> 'portrait' (default), 'landscape'.
   */
  saveAsPDF(fileName?: string, pageOrientation?: string): void;
  /**
   * Shows a hidden chart serie. The result of calling this function is same as the user checking the legend box of a chart serie.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @param {number} itemIndex?. Item (data point) index. Applicable to pie and donut series only.
   */
  showSerie(groupIndex: number, serieIndex: number, itemIndex?: number): void;
  /**
   * Shows a the tooltip for a particular data point.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @param {number} itemIndex. Item (data point) index.
   * @param {number} showDelay?. Show delay.
   * @param {number} hideDelay?. Hide delay.
   */
  showToolTip(groupIndex: number, serieIndex: number, itemIndex: number, showDelay?: number, hideDelay?: number): void;
  /**
   * Updates the values of the chart series without full refresh of the entire chart. The method should be used for animation of frequently changing values.
   */
  update(): void;
}

/**Localization object containing culture-specific properties required for formatting currencies, numbers and dates. */
export interface ChartLocalization {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number.
   * Default value: "."
   */
  decimalSeparator?: string;
  /**
   * An object containing datetime formatting patterns.
   * Default value: null
   */
  patterns?: any;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc.
   * Default value: ""
   */
  thousandsSeparator?: string;
}

/**Sets the left, top, right and bottom padding of the Chart. */
export interface Padding {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Bottom padding of the Chart.
   * Default value: 5
   */
  bottom?: number;
  /**
   * Left padding of the Chart.
   * Default value: 5
   */
  left?: number;
  /**
   * Right padding of the Chart.
   * Default value: 5
   */
  right?: number;
  /**
   * Top padding of the Chart.
   * Default value: 5
   */
  top?: number;
}

/**Sets the legend bar position in the Chart. */
export interface ChartLegendPosition {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Height of legend in the Chart.
   * Default value: 5
   */
  height?: number;
  /**
   * Left legend position in the Chart.
   * Default value: 5
   */
  left?: number;
  /**
   * Width of legend in the Chart.
   * Default value: 5
   */
  width?: number;
  /**
   * Top legend position in the Chart.
   * Default value: 5
   */
  top?: number;
}

export interface ChartSeriesGroup {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * An array of chart annotation objects.
   * Default value: null
   */
  annotations?: ChartAnnotation[];
  /**
   * Optional color bands dislayed in the chart's plot area.
   * Default value: null
   */
  bands?: ChartBand[];
  /**
   * Percentage gap between columns within the same serie.
   * Default value: 25
   */
  columnsGapPercent?: number;
  /**
   * Maximum width of columns in column series.
   * Default value: null
   */
  columnsMaxWidth?: number;
  /**
   * Minimum width of columns in column series.
   * Default value: 1
   */
  columnsMinWidth?: number;
  /**
   * Columns bottom width (as percentage of the total width).
   * Default value: 100
   */
  columnsBottomWidthPercent?: number;
  /**
   * Columns top width (as percentage of the total width).
   * Default value: 100
   */
  columnsTopWidthPercent?: number;
  /**
   * Determines the drawing function of the series group. When the property is set, you can draw after the series group has been plotted.
   * Default value: null
   */
  draw?: any;
  /**
   * Determines the data source of the serie
   * Default value: null
   */
  dataSource?: any;
  /**
   * Function for custom drawing before the series group.
   * Default value: null
   */
  drawBefore?: any;
  /**
   * Determines whether series are selectable.
   * Default value: true
   */
  enableSelection?: boolean;
  /**
   * Determines whether to toggle series visibility after click on a legend's box.
   * Default value: true
   */
  enableSeriesToggle?: boolean;
  /**
   * The end angle (in degrees) of the polar coordinate system. Applicable to polar and spider charts only.
   * Default value: 360
   */
  endAngle?: number;
  /**
   * Callback function used to format series labels.
   * Default value: null
   */
  formatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Object describing the format settings of series labels.
   * Default value: [object Object]
   */
  formatSettings?: ChartFormatSettings;
  /**
   * Determines how line and area series are unselected based on mouse and touch events. If the value is set to 'click', once a line or area serie is selected, it will remain selected until the user clicks or moves the cursor outside the chart. In default mode, the serie will be unselected immediatelly after the cursor moves over another serie or outside the chart.
   * Default value: default
   */
  linesUnselectMode?: ChartUnselectMode;
  /**
   * Horizontal position of the center of the polar coordinate system. Applicable to polar and spider charts only.
   * Default value: null
   */
  offsetX?: number;
  /**
   * Vertical position of the center of the polar coordinate system. Applicable to polar and spider charts only.
   * Default value: null
   */
  offsetY?: number;
  /**
   * Specifies the orientation of the series group.
   * Default value: vertical
   */
  orientation?: Orientation;
  /**
   * Specifies the summary of the series group.
   * Default value: ""
   */
  summary?: string;
  /**
   * When polar is set to true, the chart will render in polar coordinates.
   * Default value: false
   */
  polar?: boolean;
  /**
   * The radius of the polar coordinate system. Applicable to polar and spider charts only.
   * Default value: null
   */
  radius?: number;
  /**
   * An array of chart series.
   * Default value: 
   */
  series?: ChartSeriesGroupSerie[];
  /**
   * Percentage gap between columns belonging to different series.
   * Default value: 10
   */
  seriesGapPercent?: number;
  /**
   * Determines whether to display overlapping data points in column, ohlc and candlestick series.
   * Default value: true
   */
  skipOverlappingPoints?: boolean;
  /**
   * When showLabels is set to true, the chart will render pie labels.
   * Default value: true
   */
  showLabels?: boolean;
  /**
   * When spider is set to true, the chart will render in polar coordinates.
   * Default value: false
   */
  spider?: boolean;
  /**
   * The start angle (in degrees) of the polar coordinate system. Applicable to polar and spider charts only.
   * Default value: 0
   */
  startAngle?: number;
  /**
   * Sets the chart type. jqxChart supports several common chart types. You can easily plot series of different types on a common chart. A type must be specified for each series group. Currently, jqxChart supports the following series types:'column' - simple column series'stackedcolumn' - stacked column series'stackedcolumn100' - percentage stacked columns'rangecolumn' - floating column between two values'waterfall' - waterfall series'stackedwaterfall' - stacked waterfall series'line' - simple straight lines connecting the value points'stackedline' - stacked lines'stackedline100' - percentage stacked lines'spline' - smooth lines connecting the value points'stackedspline' - smooth stacked lines'stackedspline100' - percentage stacked smooth lines'stepline' - step line'stackedstepline' - stacked step line'stackedstepline100' - percentage stacked step line'area' - area connecting the value points with straight lines'stackedarea' - stacked area with straight lines between the points'stackedarea100' - percentage stacked area with straight lines between the points'rangearea' - floating area between pairs of value points'splinearea' - smooth area connecting the value points'stackedsplinearea' - stacked smooth area connecting the value points'stackedsplinearea100' - percentage stacked smooth area'splinerangearea' - smooth floating area between pairs of value points'steprangearea' - step area between pairs of value points'stackedsplineara' - smooth stacked area'steparea' - step area connecting the value points'stackedsteparea' - step stacked area'stackedsteparea100' - percentage stacked step area'pie' - circular chart divided into sectors, illustrating proportion'donut' - chart divided into circular sectors with different inner and outer radius'scatter' - data is displayed as a collection of points'stackedscatter' - data is displayed as a collection of points and the values are stacked'stackedscatter100' - data is displayed as a collection of points and the values are percentage stacked'bubble' - data is displayed as a collection of bubbles'stackedbubble' - data is displayed as a collection of bubbles and the values are stacked'stackedbubble100' - data is displayed as a collection of bubbles and the values are percentage stacked'candlestick' - display candlestick series using open, high, low, close data points'ohlc' - display OHLC series using open, high, low, close data points
   * Default value: null
   */
  type?: ChartType;
  /**
   * Object describing the format settings of series tooltips.
   * Default value: [object Object]
   */
  toolTipFormatSettings?: ChartFormatSettings;
  /**
   * Sets the tooltip format function. The function is used to format the tooltips of the Chart serie
   * Default value: null
   */
  toolTipFormatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Determines whether to use color gradients.
   * Default value: false
   */
  useGradientColors?: boolean;
  /**
   * Object describing the valueAxis for this group. jqxChart allows you to use a common valueAxis and/or multiple value axes per serie group.
   * Default value: [object Object]
   */
  valueAxis?: ChartValueAxis;
  /**
   * Object describing the xAxis for this group.
   * Default value: [object Object]
   */
  xAxis?: ChartXAxis;
}

export interface ChartAnnotation {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Fill/background color of the annotation.
   * Default value: null
   */
  fillColor?: string | null;
  /**
   * Height of the annotation.
   * Default value: null
   */
  height?: number;
  /**
   * Line color of the annotation.
   * Default value: null
   */
  lineColor?: string | null;
  /**
   * Custom offset of the annotation relative to xValue & yValue.
   * Default value: [object Object]
   */
  offset?: Offset;
  /**
   * Line path command in case the type is 'path', e.g. 'M 10,10 L 20,20 L 50,50'.
   * Default value: null
   */
  path?: string | null;
  /**
   * Radius of the annotation in case its type is 'circle'.
   * Default value: null
   */
  radius?: number;
  /**
   * Object describing the text of the annotation.
   * Default value: [object Object]
   */
  text?: ChartAnnotationText;
  /**
   * Shape type of the annotation.
   * Default value: null
   */
  type?: ChartAnnotationType;
  /**
   * Width of the annotation.
   * Default value: null
   */
  width?: number;
  /**
   * Value to determine the horizontal offset of the annotation.
   * Default value: null
   */
  xValue?: number;
  /**
   * Optional 2nd value to determine the horizontal offset of the annotation bottom-right point.
   * Default value: null
   */
  xValue2?: number;
  /**
   * Value to determine the vertical offset of the annotation.
   * Default value: null
   */
  yValue?: number;
  /**
   * Optional 2nd value to determine the vertical offset of the annotation's bottom-right point.
   * Default value: null
   */
  yValue2?: number;
}

/**Custom offset of the annotation relative to <strong>xValue</strong> & <strong>yValue</strong>. */
export interface Offset {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Horizontal offset.
   * Default value: null
   */
  x?: number | null;
  /**
   * Vertical offset.
   * Default value: null
   */
  y?: number | null;
}

/**Object describing the text of the annotation. */
export interface ChartAnnotationText {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Text rotation angle.
   * Default value: null
   */
  angle?: number;
  /**
   * CSS class of the annotation.
   * Default value: null
   */
  class?: string | null;
  /**
   * Inner text color (fill).
   * Default value: null
   */
  fillColor?: string | null;
  /**
   * Horizontal text alignment.
   * Default value: center
   */
  horizontalAlignment?: HorizontalAlignment;
  /**
   * Outer text color (stroke).
   * Default value: null
   */
  lineColor?: string | null;
  /**
   * Offset of the annotation text relative to the base annotation offset.
   * Default value: [object Object]
   */
  offset?: Offset;
  /**
   * Position to rotate the text around.
   * Default value: centermiddle
   */
  rotationPoint?: ChartRotationPoint;
  /**
   * Text of the annotation.
   * Default value: null
   */
  value?: string | null;
  /**
   * Vertical text alignment.
   * Default value: center
   */
  verticalAlignment?: VerticalAlignment;
}

export interface ChartBand {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Color used to fill the area between the minValue and the maxValue.
   * Default value: null
   */
  color?: string | null;
  /**
   * Dash style of the band lines. The style is a series of numbers indicating line length followed by space length.
   * Default value: null
   */
  dashStyle?: string | null;
  /**
   * Band line color.
   * Default value: null
   */
  lineColor?: string | null;
  /**
   * Band line width.
   * Default value: null
   */
  lineWidth?: string | number | null;
  /**
   * End value of the color band.
   * Default value: NaN
   */
  maxValue?: any;
  /**
   * Start value of the color band.
   * Default value: NaN
   */
  minValue?: any;
  /**
   * Fraction indicating the fill opacity.
   * Default value: 1
   */
  opacity?: number;
}

/**Object describing the format settings of series labels. */
export interface ChartFormatSettings {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Optional date format string. This property is applicable only when displaying Date objects.
   * Default value: null
   */
  dateFormat?: string | null;
  /**
   * Decimal places of numeric values.
   * Default value: null
   */
  decimalPlaces?: number | null;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number. The default value is inherited from localization.decimalSeparator.
   * Default value: null
   */
  decimalSeparator?: string | null;
  /**
   * A boolean value indicating whether to display negative numbers in brackets.
   * Default value: false
   */
  negativeWithBrackets?: boolean;
  /**
   * Text to prepend to the value.
   * Default value: ""
   */
  prefix?: string;
  /**
   * Text to append to the value
   * Default value: ""
   */
  sufix?: string;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc. The default value is inherited from localization.thousandsSeparator.
   * Default value: null
   */
  thousandsSeparator?: string | null;
}

export interface ChartSeriesGroupSerie {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Offset from the center point in a pie/donut series.
   * Default value: 0
   */
  centerOffset?: any;
  /**
   * A custom function that returns the color of a data point. The function will receive the following parameters: dataValue, itemIndex, serie, group. The implementation of the function can return a single color which will be used as a fillColor and the other colors will be derived or it can return an object containing fillColor, fillColorSelected, etc.
   * Default value: null
   */
  colorFunction?: any;
  /**
   * Color palette to use when rendering the serie.
   * Default value: null
   */
  colorScheme?: ChartColorScheme;
  /**
   * Name of the field in the data source.
   * Default value: "null"
   */
  dataField?: string;
  /**
   * Data field used in candlestcik and ohlc series.
   * Default value: "null"
   */
  dataFieldClose?: string;
  /**
   * Data field used in candlestcik and ohlc series.
   * Default value: "null"
   */
  dataFieldHigh?: string;
  /**
   * Data field used in candlestcik and ohlc series.
   * Default value: "null"
   */
  dataFieldLow?: string;
  /**
   * Data field used in candlestcik and ohlc series.
   * Default value: "null"
   */
  dataFieldOpen?: string;
  /**
   * Data field used in in range column series as a start data field.
   * Default value: "null"
   */
  dataFieldFrom?: string;
  /**
   * Data field used in range column series as an end data field.
   * Default value: "null"
   */
  dataFieldTo?: string;
  /**
   * Data field used in bubble series.
   * Default value: "null"
   */
  radiusDataField?: string;
  /**
   * Name to display for this serie.
   * Default value: "null"
   */
  displayText?: string;
  /**
   * Name to display for candlestick and ohlc series.
   * Default value: "null"
   */
  displayTextClose?: string;
  /**
   * Name to display for candlestick and ohlc series.
   * Default value: "null"
   */
  displayTextHigh?: string;
  /**
   * Name to display for candlestick and ohlc series.
   * Default value: "null"
   */
  displayTextLow?: string;
  /**
   * Name to display for candlestick and ohlc series.
   * Default value: "null"
   */
  displayTextOpen?: string;
  /**
   * Determines how to display value gaps in line series.
   * Default value: skip
   */
  emptyPointsDisplay?: ChartSeriesGroupSerieEmptyPointsDisplay;
  /**
   * Determines whether the serie is selectable.
   * Default value: true
   */
  enableSelection?: boolean;
  /**
   * Determines whether to toggle the series visibility after click on a legend's box.
   * Default value: true
   */
  enableSeriesToggle?: boolean;
  /**
   * Determines the labels rotation radius when the Chart is 'pie' or 'donut'.
   * Default value: 0
   */
  labelRadius?: number;
  /**
   * Callback function used to format the labels.
   * Default value: null
   */
  formatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Object describing the format settings of the labels.
   * Default value: [object Object]
   */
  formatSettings?: ChartFormatSettings;
  /**
   * Specifies the summary of the series group.
   * Default value: ""
   */
  summary?: string;
  /**
   * Maximum angle in a pie, donut, polar and spider series.
   * Default value: 360
   */
  endAngle?: number;
  /**
   * Fill color for the serie.
   * Default value: null
   */
  fillColor?: string | null;
  /**
   * Alternating fill color for the serie. Applicable to OHLC series only.
   * Default value: null
   */
  fillColorAlt?: string | null;
  /**
   * Alternating fill color for the serie when selected. Applicable to OHLC series only.
   * Default value: null
   */
  fillColorAltSelected?: string | null;
  /**
   * Fill color for the serie when selected.
   * Default value: null
   */
  fillColorSelected?: string | null;
  /**
   * Fill color for the marker symbols in the serie.
   * Default value: null
   */
  fillColorSymbol?: string | null;
  /**
   * Fill color for the the marker symbols in serie when selected.
   * Default value: null
   */
  fillColorSymbolSelected?: string | null;
  /**
   * Determines whether to display the serie in grey scale.
   * Default value: null
   */
  greyScale?: boolean | null;
  /**
   * Determines whether to hide slices of toggled points in pie and donut series.
   * Default value: false
   */
  hiddenPointsDisplay?: boolean;
  /**
   * Initial angle in pie and donut series.
   * Default value: 0
   */
  initialAngle?: number;
  /**
   * Inner radius of donut series in pixels or percents.
   * Default value: 0
   */
  innerRadius?: any;
  /**
   * Object describing the labels properties of the axis.
   * Default value: [object Object]
   */
  labels?: ChartLabels;
  /**
   * Fill color of the legend box. The default value is inherited from the serie's color.
   * Default value: null
   */
  legendFillColor?: string | null;
  /**
   * Legend data formatting function for the values in the serie.
   * Default value: null
   */
  legendFormatFunction?: any;
  /**
   * Legend data formatting settings for the values in the serie.
   * Default value: [object Object]
   */
  legendFormatSettings?: ChartFormatSettings;
  /**
   * Line color of the legend box. The default value is inherited from the serie's color.
   * Default value: null
   */
  legendLineColor?: string | null;
  /**
   * Line color for the serie.
   * Default value: null
   */
  lineColor?: string | null;
  /**
   * Line color for the serie when selected.
   * Default value: null
   */
  lineColorSelected?: string | null;
  /**
   * Line color for the marker symbols in serie.
   * Default value: null
   */
  lineColorSymbol?: string | null;
  /**
   * Line color for the marker symbols in the serie when selected.
   * Default value: null
   */
  lineColorSymbolSelected?: string | null;
  /**
   * A string sequence of numbers represening line and space lengths, e.g. '2,2'.
   * Default value: null
   */
  lineDashStyle?: string | null;
  /**
   * Determines how line and area series are unselected based on mouse and touch events. If the value is set to 'click', once a line or area serie is selected, it will remain selected until the user clicks or moves the cursor outside the chart. In default mode, the serie will be unselected immediatelly after the cursor moves over another serie or outside the chart.
   * Default value: default
   */
  linesUnselectMode?: ChartUnselectMode;
  /**
   * Determines the line tickness of the items in this serie.
   * Default value: null
   */
  lineWidth?: string | null | number;
  /**
   * Determines the line tickness of the items in this serie when selected.
   * Default value: null
   */
  lineWidthSelected?: string | null | number;
  /**
   * Min radius of bubble series in pixels or percents.
   * Default value: null
   */
  minRadius?: any;
  /**
   * Max radius of bubble series in pixels or percents.
   * Default value: null
   */
  maxRadius?: any;
  /**
   * Determines the opacity of the items in this serie.
   * Default value: 1
   */
  opacity?: number;
  /**
   * Outer radius of pie and donut series in pixels or percents.
   * Default value: null
   */
  radius?: any;
  /**
   * Radius change on selection of pie and donut series in pixels or percents.
   * Default value: null
   */
  selectedRadiusChange?: any;
  /**
   * Minimum angle in a pie, donut, polar and spider series.
   * Default value: 0
   */
  startAngle?: number;
  /**
   * Determines the size of the symbol element.
   * Default value: null
   */
  symbolSize?: number;
  /**
   * Determines the size of the symbol element. This property is applicable to line and area series only.
   * Default value: null
   */
  symbolSizeSelected?: number;
  /**
   * Determines the symbol type displayed for the data points in the serie. This parameter is applicable to line, area, scatter and bubble series only.
   * Default value: none
   */
  symbolType?: ChartSymbolType;
  /**
   * Determines the tooltip's background.
   * Default value: null
   */
  toolTipBackground?: string | null;
  /**
   * Determines the tooltip's CSS class name.
   * Default value: null
   */
  toolTipClass?: string | null;
  /**
   * Tooltip data formatting function for the values in the serie.
   * Default value: null
   */
  toolTipFormatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Tooltip data formatting settings for the values in the serie.
   * Default value: [object Object]
   */
  toolTipFormatSettings?: ChartFormatSettings;
  /**
   * Determines the tooltip's border lines color.
   * Default value: null
   */
  toolTipLineColor?: string | null;
  /**
   * Determines whether to use color gradients.
   * Default value: false
   */
  useGradientColors?: boolean;
}

/**Object describing the labels properties of the axis. */
export interface ChartLabels {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Text rotation angle.
   * Default value: 0
   */
  angle?: number;
  /**
   * boolean determining if auto rotation is enabled.
   * Default value: false
   */
  autoRotate?: boolean;
  /**
   * Labels background color.
   * Default value: null
   */
  backgroundColor?: string | null;
  /**
   * Labels background opacity.
   * Default value: 1
   */
  backgroundOpacity?: number | null;
  /**
   * Labels border line color.
   * Default value: null
   */
  borderColor?: string | null;
  /**
   * Labels border line opacity.
   * Default value: 1
   */
  borderOpacity?: number | null;
  /**
   * CSS class of the labels.
   * Default value: null
   */
  class?: string | null;
  /**
   * An array of custom values/offsets where a label will be displayed. Applicable only if labels.visible is set to 'custom'.
   * Default value: null
   */
  custom?: [] | null;
  /**
   * Callback function used to format the labels.
   * Default value: null
   */
  formatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Object describing the format settings of the labels.
   * Default value: [object Object]
   */
  formatSettings?: ChartFormatSettings;
  /**
   * Horizontal labels alignment.
   * Default value: center
   */
  horizontalAlignment?: HorizontalAlignment;
  /**
   * Determines whether to use direct lines for the labels in pie/donut series.
   * Default value: true
   */
  linesAngles?: boolean;
  /**
   * Determines whether to use lines for the labels in pie/donut series.
   * Default value: true
   */
  linesEnabled?: boolean;
  /**
   * Labels offset.
   * Default value: [object Object]
   */
  offset?: Offset;
  /**
   * Object describing the padding of the labels.
   * Default value: [object Object]
   */
  padding?: Padding;
  /**
   * Radius of the labels in pie/donut series.
   * Default value: null
   */
  radius?: number | null;
  /**
   * Position to rotate the text around.
   * Default value: auto
   */
  rotationPoint?: ChartRotationPoint;
  /**
   * Interval steps between label placements (multiples of the axis unit interval).
   * Default value: null
   */
  step?: number | null;
  /**
   * Sets the interval between the labels.
   * Default value: null
   */
  unitInterval?: number;
  /**
   * Vertical labels alignment.
   * Default value: center
   */
  verticalAlignment?: VerticalAlignment;
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of labels. When 'custom' is set, displays only custom values/offsets from the labels.custom array.
   * Default value: true
   */
  visible?: any;
}

/**Object describing the valueAxis for this group. jqxChart allows you to use a common valueAxis and/or multiple value axes per serie group. */
export interface ChartValueAxis {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Alternating background color between grid lines.
   * Default value: ""
   */
  alternatingBackgroundColor?: string;
  /**
   * Second alternating background color.
   * Default value: ""
   */
  alternatingBackgroundColor2?: string;
  /**
   * Opacity of the alternating background.
   * Default value: 1
   */
  alternatingBackgroundOpacity?: number;
  /**
   * Sets the size of the axis.
   * Default value: null
   */
  axisSize?: any;
  /**
   * Optional color bands dislayed in the chart's plot area.
   * Default value: null
   */
  bands?: ChartBand[];
  /**
   * Sets the baseline value for the axis.
   * Default value: 0
   */
  baselineValue?: any;
  /**
   * boolean determining whether to draw the axis or the user will use APIs to draw it.
   * Default value: false
   */
  customDraw?: boolean;
  /**
   * Sets the description of the value axis.
   * Default value: ""
   */
  description?: string;
  /**
   * Specifies whether the values axis is displayed.
   * Default value: true
   */
  displayValueAxis?: boolean;
  /**
   * Specifies whether the values are displayed in reverse order.
   * Default value: false
   */
  flip?: boolean;
  /**
   * Custom function to format the displayed values along the axis.
   * Default value: null
   */
  formatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Settings used to format the displayed values along the axis.
   * Default value: [object Object]
   */
  formatSettings?: ChartFormatSettings;
  /**
   * Object describing the grid lines properties of the valueAxis.
   * Default value: [object Object]
   */
  gridLines?: ChartLines;
  /**
   * Object describing the labels properties of the axis.
   * Default value: [object Object]
   */
  labels?: ChartLabels;
  /**
   * Object describing the line properties of the axis.
   * Default value: [object Object]
   */
  line?: ChartLine;
  /**
   * Determines whether to use logarithmic scale.
   * Default value: false
   */
  logarithmicScale?: boolean;
  /**
   * Base for logarithmic scale.
   * Default value: 10
   */
  logarithmicScaleBase?: number;
  /**
   * Sets the maximum value of the valueAxis.
   * Default value: NaN
   */
  maxValue?: any;
  /**
   * Sets the minimum value of the valueAxis.
   * Default value: NaN
   */
  minValue?: any;
  /**
   * Object describing the padding of the axis.
   * Default value: [object Object]
   */
  padding?: Padding;
  /**
   * Sets the axis position. The values 'left' and 'right' are available in the default case. If the valueAxis is horizontal, only 'top' and 'bottom' are available.
   * Default value: left
   */
  position?: AxisPosition;
  /**
   * Text rotation angle.
   * Default value: null
   */
  textRotationAngle?: number | null;
  /**
   * Value Axis Type
   * Default value: ""
   */
  type?: string;
  /**
   * Position to rotate the text around.
   * Default value: auto
   */
  textRotationPoint?: ChartRotationPoint;
  /**
   * Object describing the tick marks properties of the valueAxis.
   * Default value: [object Object]
   */
  tickMarks?: ChartLines;
  /**
   * Object describing the title of the valueAxis.
   * Default value: [object Object]
   */
  title?: ChartTitle;
  /**
   * Sets the interval between the units.
   * Default value: null
   */
  unitInterval?: number | null;
  /**
   * Specifies whether the axis values will be aligned with the tick marks.
   * Default value: true
   */
  valuesOnTicks?: boolean;
  /**
   * Shows or hides the valueAxis.
   * Default value: true
   */
  visible?: boolean;
}

/**Object describing the grid lines properties of the valueAxis. */
export interface ChartLines {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Color of the grid lines.
   * Default value: ""
   */
  color?: string;
  /**
   * An array of custom values/offsets where a grid line will be displayed. Applicable only if gridLines.visible is set to 'custom'.
   * Default value: null
   */
  custom?: [] | null;
  /**
   * Grid lines dash style, e.g. '2,2'.
   * Default value: ""
   */
  dashStyle?: string;
  /**
   * Line width (in pixels) of the grid lines.
   * Default value: 1
   */
  lineWidth?: string | number | null;
  /**
   * Size (in pixels) of the tick marks.
   * Default value: 4
   */
  size?: string | number | null;
  /**
   * Interval steps between grid line placements (multiples of the axis unit interval).
   * Default value: null
   */
  step?: number | null;
  /**
   * Sets the interval between the grid lines.
   * Default value: null
   */
  unitInterval?: number;
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of grid lines. When 'custom' is set, displays only custom values/offsets from the gridLines.custom array.
   * Default value: true
   */
  visible?: any;
}

/**Object describing the line properties of the axis. */
export interface ChartLine {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Color of axis line.
   * Default value: ""
   */
  color?: string;
  /**
   * Line dash style, e.g. '2,2'. The default is inherited from gridLines.dashStyle.
   * Default value: ""
   */
  dashStyle?: string;
  /**
   * Line width. The default is inherited from gridLines.lineWidth.
   * Default value: 1
   */
  lineWidth?: number;
  /**
   * boolean determining the visibility of the axis line.
   * Default value: true
   */
  visible?: any;
}

/**Object describing the title of the valueAxis. */
export interface ChartTitle {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * CSS class of the title text.
   * Default value: null
   */
  class?: string | null;
  /**
   * Horizontal alignment.
   * Default value: center
   */
  horizontalAlignment?: HorizontalAlignment;
  /**
   * Text of the title.
   * Default value: ""
   */
  text?: string;
  /**
   * Vertical alignment.
   * Default value: center
   */
  verticalAlignment?: VerticalAlignment;
  /**
   * boolean determining the visibility of the title.
   * Default value: true
   */
  visible?: boolean;
}

/**Object describing the xAxis for this group. */
export interface ChartXAxis {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Alternating background color between grid lines.
   * Default value: ""
   */
  alternatingBackgroundColor?: string;
  /**
   * Second alternating background color.
   * Default value: ""
   */
  alternatingBackgroundColor2?: string;
  /**
   * Opacity of the alternating background.
   * Default value: 1
   */
  alternatingBackgroundOpacity?: number;
  /**
   * Sets the size of the xAxis.
   * Default value: null
   */
  axisSize?: any;
  /**
   * Optional color bands dislayed in the chart's plot area.
   * Default value: null
   */
  bands?: ChartBand[];
  /**
   * The base unit when used with 'date' axis.
   * Default value: null
   */
  baseUnit?: ChartBaseUnit;
  /**
   * boolean determining whether to draw the axis or the user will use APIs to draw it.
   * Default value: false
   */
  customDraw?: boolean;
  /**
   * Points to a data field in the data source.
   * Default value: ""
   */
  dataField?: string;
  /**
   * Optional date format for parsing the data from the data source. Applicable when xAxis.type is set to 'date'.
   * Default value: null
   */
  dateFormat?: string | null;
  /**
   * Optional custom xAxis display text.
   * Default value: null
   */
  displayText?: string | null;
  /**
   * Specifies whether the values are displayed in reverse order.
   * Default value: false
   */
  flip?: boolean;
  /**
   * Custom function to format the displayed values along the axis.
   * Default value: null
   */
  formatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Settings used to format the displayed values along the axis.
   * Default value: [object Object]
   */
  formatSettings?: ChartFormatSettings;
  /**
   * Object describing the grid lines properties of the xAxis.
   * Default value: [object Object]
   */
  gridLines?: ChartLines;
  /**
   * Object describing the labels properties of the axis.
   * Default value: [object Object]
   */
  labels?: ChartLabels;
  /**
   * Object describing the line properties of the axis.
   * Default value: [object Object]
   */
  line?: ChartLine;
  /**
   * Determines whether to use logarithmic scale.
   * Default value: false
   */
  logarithmicScale?: boolean;
  /**
   * Base for logarithmic scale.
   * Default value: 10
   */
  logarithmicScaleBase?: number;
  /**
   * Sets the maximum value of the xAxis.
   * Default value: NaN
   */
  maxValue?: any;
  /**
   * Sets the minimum value of the xAxis.
   * Default value: NaN
   */
  minValue?: any;
  /**
   * Object describing the padding of the axis.
   * Default value: [object Object]
   */
  padding?: Padding;
  /**
   * Sets the axis position. The values 'bottom' and 'top' are available in the default case. If the xAxis is vertical, only 'left' and 'right' are available.
   * Default value: bottom
   */
  position?: AxisPosition;
  /**
   * Definition of a range selector on the xAxis. The range selector itself is also an instance of smart-chart.
   * Default value: [object Object]
   */
  rangeSelector?: ChartRangeSelector;
  /**
   * xAxis's text value.
   * Default value: ""
   */
  text?: string;
  /**
   * Text rotation angle.
   * Default value: null
   */
  textRotationAngle?: number | null;
  /**
   * Position to rotate the text around.
   * Default value: auto
   */
  textRotationPoint?: ChartRotationPoint;
  /**
   * Object describing the tick marks properties of the xAxis.
   * Default value: [object Object]
   */
  tickMarks?: ChartLines;
  /**
   * Object describing the title of the xAxis.
   * Default value: [object Object]
   */
  title?: ChartTitle;
  /**
   * Custom function to format xAxis values in tooltips.
   * Default value: null
   */
  toolTipFormatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Settings used to format xAxis values in tooltips.
   * Default value: [object Object]
   */
  toolTipFormatSettings?: ChartFormatSettings;
  /**
   * The type of the axis. 'auto' - automatically detects and switches to 'basic', 'linear' or 'date'.'date' - when displaying dates.'basic' - displays all data points sequentially.'linear' - linear arrangement by the value of the xAxis data field.
   * Default value: auto
   */
  type?: ChartXAxisType;
  /**
   * Sets the interval between the units.
   * Default value: null
   */
  unitInterval?: number | null;
  /**
   * Specifies whether the axis values will be aligned with the tick marks.
   * Default value: true
   */
  valuesOnTicks?: boolean;
  /**
   * Shows or hides the xAxis.
   * Default value: true
   */
  visible?: boolean;
}

/**Definition of a range selector on the xAxis. The range selector itself is also an instance of ${namespace.toLowerCase()}-chart. */
export interface ChartRangeSelector {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the range selector chart's background color.
   * Default value: null
   */
  backgroundColor?: string | null;
  /**
   * Sets the range selector chart's background image.
   * Default value: ""
   */
  backgroundImage?: string;
  /**
   * The base unit when used with 'date' axis.
   * Default value: null
   */
  baseUnit?: ChartBaseUnit;
  /**
   * Sets the range selector chart's border color.
   * Default value: null
   */
  borderLineColor?: string | null;
  /**
   * Sets the range selector chart's border line width.
   * Default value: null
   */
  borderLineWidth?: number | null;
  /**
   * Sets the caption (title) of the range selector chart.
   * Default value: ""
   */
  caption?: string;
  /**
   * Sets the range selector chart's color pallete. jqxChart suppports 32 color schemes from 'scheme01' to 'scheme32'.
   * Default value: null
   */
  colorScheme?: ChartColorScheme;
  /**
   * Enables or disables overlapping of the column series.
   * Default value: false
   */
  columnSeriesOverlap?: boolean;
  /**
   * Percentage gap between columns within the same serie.
   * Default value: 25
   */
  columnsGapPercent?: number;
  /**
   * Points to a data field in the data source.
   * Default value: null
   */
  dataField?: string | null;
  /**
   * Sets the description text of the range selector chart.
   * Default value: ""
   */
  description?: string;
  /**
   * Determines whether to display the range selector chart using greyscale colors.
   * Default value: null
   */
  greyScale?: boolean | null;
  /**
   * Object describing the grid lines properties of the range selector chart's xAxis.
   * Default value: [object Object]
   */
  gridLines?: ChartLines;
  /**
   * Callback function used to format the values.
   * Default value: null
   */
  formatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Chart Format Settings
   * Default value: null
   */
  formatSettings?: any;
  /**
   * Object describing the labels properties of the axis.
   * Default value: [object Object]
   */
  labels?: ChartLabels;
  /**
   * Sets the maximum value of the range selector chart's xAxis.
   * Default value: NaN
   */
  maxValue?: any;
  /**
   * Sets the minimum value of the range selector chart's xAxis.
   * Default value: NaN
   */
  minValue?: any;
  /**
   * Object describing the padding of the range selector chart.
   * Default value: [object Object]
   */
  padding?: Padding;
  /**
   * Sets the range selector chart position.
   * Default value: null
   */
  position?: AxisPosition;
  /**
   * An HTML element outside the chart to render the range selector chart to.
   * Default value: null
   */
  renderTo?: HTMLElement | null;
  /**
   * Sets or gets a value indicating whether the range selector chart's layout is mirrored.
   * Default value: null
   */
  rightToLeft?: boolean | null;
  /**
   * Percentage gap between columns belonging to different series.
   * Default value: 10
   */
  seriesGapPercent?: number;
  /**
   * (Optional) The seriesGroups property is used to describe all series displayed on the range selector chart.Please refer to the main seriesGroups property entry for more information and a full subproperty list.
   * Default value: null
   */
  seriesGroups?: [] | null;
  /**
   * Sets the range selector chart type. jqxChart supports several common chart types. You can easily plot series of different types on a common chart. A type must be specified for each series group. Currently, jqxChart supports the following series types:'column' - simple column series'stackedcolumn' - stacked column series'stackedcolumn100' - percentage stacked columns'rangecolumn' - floating column between two values'waterfall' - waterfall series'stackedwaterfall' - stacked waterfall series'line' - simple straight lines connecting the value points'stackedline' - stacked lines'stackedline100' - percentage stacked lines'spline' - smooth lines connecting the value points'stackedspline' - smooth stacked lines'stackedspline100' - percentage stacked smooth lines'stepline' - step line'stackedstepline' - stacked step line'stackedstepline100' - percentage stacked step line'area' - area connecting the value points with straight lines'stackedarea' - stacked area with straight lines between the points'stackedarea100' - percentage stacked area with straight lines between the points'rangearea' - floating area between pairs of value points'splinearea' - smooth area connecting the value points'stackedsplinearea' - stacked smooth area connecting the value points'stackedsplinearea100' - percentage stacked smooth area'splinerangearea' - smooth floating area between pairs of value points'steprangearea' - step area between pairs of value points'stackedsplineara' - smooth stacked area'steparea' - step area connecting the value points'stackedsteparea' - step stacked area'stackedsteparea100' - percentage stacked step area'pie' - circular chart divided into sectors, illustrating proportion'donut' - chart divided into circular sectors with different inner and outer radius'scatter' - data is displayed as a collection of points'stackedscatter' - data is displayed as a collection of points and the values are stacked'stackedscatter100' - data is displayed as a collection of points and the values are percentage stacked'bubble' - data is displayed as a collection of bubbles'stackedbubble' - data is displayed as a collection of bubbles and the values are stacked'stackedbubble100' - data is displayed as a collection of bubbles and the values are percentage stacked'candlestick' - display candlestick series using open, high, low, close data points'ohlc' - display OHLC series using open, high, low, close data points
   * Default value: area
   */
  serieType?: ChartType;
  /**
   * Determines whether to display the range selector chart's border line.
   * Default value: null
   */
  showBorderLine?: boolean | null;
  /**
   * Sets the size of the range selector chart.
   * Default value: null
   */
  size?: number | null;
  /**
   * Determines whether to display overlapping data points in column, ohlc and candlestick series.
   * Default value: true
   */
  skipOverlappingPoints?: boolean;
  /**
   * Sets the padding of the chart's title (caption).
   * Default value: [object Object]
   */
  titlePadding?: Padding;
  /**
   * Sets the interval between the units.
   * Default value: null
   */
  unitInterval?: number | null;
  /**
   * An object with settings about the range selector Chart's y-axis (value axis).
   * Default value: [object Object]
   */
  valueAxis?: ChartValueAxis;
  /**
   * Shows or hides the range selector.
   * Default value: false
   */
  visible?: boolean;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-chart"): Chart;
			querySelector(selectors: "smart-chart"): Chart | null;	
			querySelectorAll(selectors: "smart-chart"): NodeListOf<Chart>;
			getElementsByTagName(qualifiedName: "smart-chart"): HTMLCollectionOf<Chart>;
			getElementsByName(elementName: "smart-chart"): NodeListOf<Chart>;	
    }
}

/**Sets the range selector chart's color pallete. jqxChart suppports 32 color schemes from 'scheme01' to 'scheme32'. */
export declare type ChartColorScheme = 'scheme01' | 'scheme02' | 'scheme03' | 'scheme04' | 'scheme05' | 'scheme06' | 'scheme07' | 'scheme08' | 'scheme09' | 'scheme10' | 'scheme11' | 'scheme12' | 'scheme13' | 'scheme14' | 'scheme15' | 'scheme16' | 'scheme17' | 'scheme18' | 'scheme19' | 'scheme20' | 'scheme21' | 'scheme22' | 'scheme23' | 'scheme24' | 'scheme25' | 'scheme26' | 'scheme27' | 'scheme28' | 'scheme29' | 'scheme30' | 'scheme31' | 'scheme32' | 'custom';
/**Determines the rendering engine used to display the chart. When the property is set to an empty string, jqxChart will automatically select an optimal rendering engine depending on the browser capabilities. */
export declare type ChartRenderEngine = null | 'SVG' | 'HTML5';
/**Horizontal alignment. */
export declare type HorizontalAlignment = 'left' | 'center' | 'right';
/**Position to rotate the text around. */
export declare type ChartRotationPoint = 'auto' | 'left' | 'center' | 'right' | 'topleft' | 'topcenter' | 'topright' | 'bottomleft' | 'bottomcenter' | 'bottomright' | 'centermiddle';
/**Vertical alignment. */
export declare type VerticalAlignment = 'top' | 'center' | 'bottom';
/**Shape type of the annotation. */
export declare type ChartAnnotationType = 'text' | 'rect' | 'circle' | 'line' | 'path' | 'null';
/**Determines how line and area series are unselected based on mouse and touch events. If the value is set to 'click', once a line or area serie is selected, it will remain selected until the user clicks or moves the cursor outside the chart. In default mode, the serie will be unselected immediatelly after the cursor moves over another serie or outside the chart. */
export declare type ChartUnselectMode = 'click' | 'default';
/**Determines how to display value gaps in line series. */
export declare type ChartSeriesGroupSerieEmptyPointsDisplay = 'connect' | 'skip' | 'zero';
/**Determines the symbol type displayed for the data points in the serie. This parameter is applicable to line, area, scatter and bubble series only. */
export declare type ChartSymbolType = 'none' | 'circle' | 'square' | 'diamond' | 'triangle_up' | 'triangle_down' | 'triangle_left' | 'triangle_right';
/**Sets the range selector chart type. jqxChart supports several common chart types. You can easily plot series of different types on a common chart. A type must be specified for each series group. Currently, jqxChart supports the following series types:'column' - simple column series
'stackedcolumn' - stacked column series
'stackedcolumn100' - percentage stacked columns
'rangecolumn' - floating column between two values
'waterfall' - waterfall series
'stackedwaterfall' - stacked waterfall series
'line' - simple straight lines connecting the value points
'stackedline' - stacked lines
'stackedline100' - percentage stacked lines
'spline' - smooth lines connecting the value points
'stackedspline' - smooth stacked lines
'stackedspline100' - percentage stacked smooth lines
'stepline' - step line
'stackedstepline' - stacked step line
'stackedstepline100' - percentage stacked step line
'area' - area connecting the value points with straight lines
'stackedarea' - stacked area with straight lines between the points
'stackedarea100' - percentage stacked area with straight lines between the points
'rangearea' - floating area between pairs of value points
'splinearea' - smooth area connecting the value points
'stackedsplinearea' - stacked smooth area connecting the value points
'stackedsplinearea100' - percentage stacked smooth area
'splinerangearea' - smooth floating area between pairs of value points
'steprangearea' - step area between pairs of value points
'stackedsplineara' - smooth stacked area
'steparea' - step area connecting the value points
'stackedsteparea' - step stacked area
'stackedsteparea100' - percentage stacked step area
'pie' - circular chart divided into sectors, illustrating proportion
'donut' - chart divided into circular sectors with different inner and outer radius
'scatter' - data is displayed as a collection of points
'stackedscatter' - data is displayed as a collection of points and the values are stacked
'stackedscatter100' - data is displayed as a collection of points and the values are percentage stacked
'bubble' - data is displayed as a collection of bubbles
'stackedbubble' - data is displayed as a collection of bubbles and the values are stacked
'stackedbubble100' - data is displayed as a collection of bubbles and the values are percentage stacked
'candlestick' - display candlestick series using open, high, low, close data points
'ohlc' - display OHLC series using open, high, low, close data points
 */
export declare type ChartType = 'column' | 'stackedcolumn' | 'stackedcolumn100' | 'rangecolumn' | 'waterfall' | 'stackedwaterfall' | 'line' | 'stackedline' | 'stackedline100' | 'spline' | 'stackedspline' | 'stackedspline100' | 'stepline' | 'stackedstepline' | 'stackedstepline100' | 'area' | 'stackedarea' | 'stackedarea100' | 'rangearea' | 'splinearea' | 'stackedsplinearea' | 'stackedsplinearea100' | 'splinerangearea' | 'steprangearea' | 'stackedsplineara' | 'steparea' | 'stackedsteparea' | 'stackedsteparea100' | 'pie' | 'donut' | 'scatter' | 'stackedscatter' | 'stackedscatter100' | 'bubble' | 'stackedbubble' | 'stackedbubble100' | 'candlestick' | 'ohlc';
/**Sets the range selector chart position. */
export declare type AxisPosition = 'bottom' | 'top' | 'left' | 'right';
/**The base unit when used with 'date' axis. */
export declare type ChartBaseUnit = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond';
/**The type of the axis. 'auto' - automatically detects and switches to 'basic', 'linear' or 'date'.
'date' - when displaying dates.
'basic' - displays all data points sequentially.
'linear' - linear arrangement by the value of the xAxis data field.
 */
export declare type ChartXAxisType = 'auto' | 'date' | 'basic' | 'linear';
/**Determines the set of default background, line, text and band colors that will be used in the Chart. */
export declare type ChartTheme = 'light' | 'dark';
/**
 Checkbox is a component used for allowing a user to make a multiple choice. Broadly used in the forms and surveys.
*/
export interface CheckBox extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets the checked state. 
   * Default value: false
   */
  checked?: boolean;
  /**
   * Determines which part of the element can be used to toggle it.
   * Default value: both
   */
  checkMode?: CheckMode;
  /**
   * Sets the click mode of the checkbox.
   * Default value: release
   */
  clickMode?: ClickMode;
  /**
   * Enables or disables the checkbox. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the elements's innerHTML.
   * Default value: """"
   */
  innerHTML: string;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
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
   *     "htmlTemplateNotSuported": ":  Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: """"
   */
  name?: string;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or gets the value of the element.
   * Default value: """"
   */
  value?: string;
  /** 
   * This event is triggered when the widget is checked/unchecked.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, oldValue, changeType)
   *  value - A boolean value indicating the new state of the button ( checked or not ).
   *  oldValue - A boolean value indicating the previous state of the button ( checked or not ).
   *  changeType - A string flag indicating whether the change event was triggered via API or an event.
   */
  onChange: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-check-box"): CheckBox;
			querySelector(selectors: "smart-check-box"): CheckBox | null;	
			querySelectorAll(selectors: "smart-check-box"): NodeListOf<CheckBox>;
			getElementsByTagName(qualifiedName: "smart-check-box"): HTMLCollectionOf<CheckBox>;
			getElementsByName(elementName: "smart-check-box"): NodeListOf<CheckBox>;	
    }
}

/**Determines which part of the element can be used to toggle it. */
export declare type CheckMode = 'both' | 'input' | 'label';
/**
 Chip is a simple rounded box that displays a single value and optionally an icon.
*/
export interface Chip extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets a custom avatar that is positioned on the left side of the chip. The avatar can be an image(if the value is a url to an image), plain text or HTML.
   * Default value: null
   */
  avatar?: string | null;
  /**
   * Determines whether a close button is displayed on the right side of the element.
   * Default value: false
   */
  closeButton?: boolean;
  /**
   * Enables or disables the element. Disabled elements can not be interacted with.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets a custom template for the chip. The template can be a string that represents the id of an HTMLTemplateElement inside the DOM or it's direct reference.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
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
   *     "htmlTemplateNotSuported": ":  Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
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
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets the text content of the chip. The text inside the chip represents it's value. Value must be of type string. By default it's an empty string.
   * Default value: ""
   */
  value?: string;
  /** 
   * This event is triggered when the chip is closed.
	* @param event. The custom event. Custom data event was created with: ev.detail(value)
   *  value - A string representing the current value of the element.
   */
  onClose: ((this: any, ev: Event) => any) | null;
  /**
   * Closes the chip and removes it from the DOM.
   */
  close(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-chip"): Chip;
			querySelector(selectors: "smart-chip"): Chip | null;	
			querySelectorAll(selectors: "smart-chip"): NodeListOf<Chip>;
			getElementsByTagName(qualifiedName: "smart-chip"): HTMLCollectionOf<Chip>;
			getElementsByName(elementName: "smart-chip"): NodeListOf<Chip>;	
    }
}

/**
 Progress Bar displayed as a circle.
*/
export interface CircularProgressBar extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Enables or disables the element. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * A callback function defining the new format for the label of the Progress Bar.
   * Default value: null
   */
  formatFunction?: any;
  /**
   * Sets the value of the Circular Progress bar to indeterminate state(null) and starts the animation.
   * Default value: false
   */
  indeterminate?: boolean;
  /**
   * Sets the filling direction of the Circular Progress Bar.
   * Default value: false
   */
  inverted?: boolean;
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
   * Sets progress bars maximum possible value.
   * Default value: 100
   */
  max?: number;
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
   *     "htmlTemplateNotSuported": ":  Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets progress bars minimum possible value.
   * Default value: 0
   */
  min?: number;
  /**
   * Enables/Disabled the label for the Progress Bar.
   * Default value: false
   */
  showProgressValue?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the value of the progress bar
   * Default value: 0
   */
  value?: number;
  /** 
   * This event is triggered when the value is changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-circular-progress-bar"): CircularProgressBar;
			querySelector(selectors: "smart-circular-progress-bar"): CircularProgressBar | null;	
			querySelectorAll(selectors: "smart-circular-progress-bar"): NodeListOf<CircularProgressBar>;
			getElementsByTagName(qualifiedName: "smart-circular-progress-bar"): HTMLCollectionOf<CircularProgressBar>;
			getElementsByName(elementName: "smart-circular-progress-bar"): NodeListOf<CircularProgressBar>;	
    }
}

/**
 ColorInput is an input field with colors displayed in a DropDown grid like in Excel.
*/
export interface ColorInput extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines the delay before the drop down opens to show the matches from the auto complete operation. The delay is measured in miliseconds.
   * Default value: 100
   */
  autoCompleteDelay?: number;
  /**
   * Determines the data source ( that represent valid colors ) that will be loaded to the Input. The dataSource can be an array of strings or objects where the attributes represent the properties of a List Item. For example label, value. It can also be a callback that returns an Array of items as previously described.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines the colors that will be displayed and their layout.
   * Default value: default
   */
  displayMode?: ColorDisplayMode;
  /**
   * Determines the position of the drop down button.
   * Default value: none
   */
  dropDownButtonPosition?: DropDownButtonPosition;
  /**
   * Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownHeight?: string | number;
  /**
   * Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * Determines the maximum number of matched items that should be visible inside the drop down as a result of a new autoComplete query. By default the maximum number of 8 items can be displayed inside the drop down.
   * Default value: 8
   */
  items?: number;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
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
   *     "invalidNode": "."
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines the minimum number of characters inside the input in order to trigger the autocomplete functionality that will open the drop down and show the matched items.
   * Default value: 1
   */
  minLength?: number;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting data inside an HTML form.
   * Default value: ""
   */
  name?: string;
  /**
   * Determines whether the drop down is opened or not.
   * Default value: false
   */
  opened?: boolean;
  /**
   * Determines the placeholder of the input.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Sets or gets the query that is used to filter the items. Query is used by the autoComplete operation. Empty string means that all items from the data source will be displayed and no filter query is applied.
   * Default value: 
   */
  query?: string | number;
  /**
   * Determines the auto complete query mode. This property also determines the matching algorithm for the autocomplete operation.
   * Default value: containsIgnoreCase
   */
  queryMode?: ColorQueryMode;
  /**
   * Determines whether the user can enter text inside the input or not. Determines whether the element acts as a ComboBox or a DropDownList if a dataSource is provided.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the theme for the element. Themes define the look of the elements.
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the value of the element.
   * Default value: ""
   */
  value?: string;
  /**
   * Determines what will be displayed inside the color picker's action section.
   * Default value: default
   */
  valueDisplayMode?: ColorValueDisplayMode;
  /**
   * Determines the format of the color. Whether it's in HEX, RGB or RGBA. By default it shows the color depending on the displayMode.
   * Default value: default
   */
  valueFormat?: ColorValueFormat;
  /** 
   * This event is triggered when the selection is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(label, oldLabel, oldValue, value)
   *  label - The label of the new selected color.
   *  oldLabel - The label of the color that was previously selected before the event was triggered.
   *  oldValue - The value of the color that was previously selected before the event was triggered.
   *  value - The value of the new selected color.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Closes the drop down.
   */
  close(): void;
  /**
   * Opens the drop down.
   */
  open(): void;
  /**
   * Selects the text inside the input or if it is <b>readonly</b> then the element is focused.
   */
  select(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-color-input"): ColorInput;
			querySelector(selectors: "smart-color-input"): ColorInput | null;	
			querySelectorAll(selectors: "smart-color-input"): NodeListOf<ColorInput>;
			getElementsByTagName(qualifiedName: "smart-color-input"): HTMLCollectionOf<ColorInput>;
			getElementsByName(elementName: "smart-color-input"): NodeListOf<ColorInput>;	
    }
}

/**Determines the colors that will be displayed and their layout. */
export declare type ColorDisplayMode = 'default' | 'grid';
/**Determines the position of the drop down button. */
export declare type DropDownButtonPosition = 'left' | 'right' | 'top' | 'bottom';
/**Determines the auto complete query mode. This property also determines the matching algorithm for the autocomplete operation. */
export declare type ColorQueryMode = 'contains' | 'containsIgnoreCase' | 'doesNotContain' | 'doesNotContainIgnoreCase' | 'equals' | 'equalsIgnoreCase' | 'startsWith' | 'startsWithIgnoreCase' | 'endsWith' | 'endsWithIgnoreCase';
/**Determines what will be displayed inside the color picker's action section. */
export declare type ColorValueDisplayMode = 'default' | 'colorBox' | 'colorCode' | 'none';
/**Determines the format of the color. Whether it's in HEX, RGB or RGBA. By default it shows the color depending on the displayMode. */
export declare type ColorValueFormat = 'default' | 'rgb' | 'rgba' | 'hex';
/**
 ColorPanel is an advanced color chooser with Pallete, Spectrum Grid, Radial Palette and Excel-like options.
*/
export interface ColorPanel extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Specifies how the value is applied.
   * Default value: instantly
   */
  applyValueMode?: ColorApplyValueMode;
  /**
   * Defines the number of columns for the colors in displayModes 'grid', 'hexagonal' and 'spectrumGrid'.
   * Default value: 8
   */
  columnCount?: number;
  /**
   * Enables or disables the element. Disabled elements can not be interacted with.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines the colors that will be displayed and their layout.
   * Default value: default
   */
  displayMode?: ColorDisplayMode;
  /**
   * By default clicking on color panel's preview container returns the color value to it's previous state. 'disableUndo' prevents this functionality.
   * Default value: false
   */
  disableUndo?: boolean;
  /**
   * Allows to edit the alpha(transparency) of the colors via an editor/slider in the following displayModes: 'palette', 'radial', 'hexagonal'
   * Default value: false
   */
  editAlphaChannel?: boolean;
  /**
   * Allows to select a custom color via an editor popup. Custom color selection is available in modes that don't have this option by default, like: 'grid', 'default, 'spectrum grid'.
   * Default value: false
   */
  enableCustomColors?: boolean;
  /**
   * Defines an Array of colors that will be used as the Theme Colors in the corresponding section in displayMode: 'default'.
   * Default value: null
   */
  gridThemeColors?: string[] | null;
  /**
   * Defines an Array of colors that will be used as the Shade Colors in the corresponding section of displayMode: 'default'.
   * Default value: null
   */
  gridShadeColors?: string[] | null;
  /**
   * Defines an Array of colors that will be used as the Standart Colors in the corresponding section of displayMode: 'default'.
   * Default value: null
   */
  gridStandardColors?: [] | null;
  /**
   * Hides the alpha editor. Alpha editor is an input containing the value of the current color opacity. The input is available in the following modes: 'radial', 'palette', 'hexagonal'. The input is only visible if there's enough space. This editor is visible by default.
   * Default value: false
   */
  hideAlphaEditor?: boolean;
  /**
   * Determines which color editors will be hidden first when there's not enough space for all of them to be visible. By default the editors are only visible in 'palette', 'radial' and 'hexagonal' display modes. This property allows to prioritize the visibility of the editors.
   * Default value: RGB,HEX,alpha,previewContainer
   */
  hideContentToFit?: string[];
  /**
   * HEX editor is an input containing the hexadecimal representation of a color. This editor is visible by default. Setting 'hideRGBeditor' to true hides it.
   * Default value: false
   */
  hideHEXEditor?: boolean;
  /**
   * Hides the preview container. Preview container is used to show the currently selected value in 'palette', 'radial' and 'hexagonal' display modes.
   * Default value: false
   */
  hidePreviewContainer?: boolean;
  /**
   * Hides the RGB editor. This editor is a group of three separate inputs for the Red, Green and Blue values of the color.
   * Default value: false
   */
  hideRGBEditor?: boolean;
  /**
   * Inverts the colors in 'spectrumGrid', 'hexagonal', 'radial' modes.
   * Default value: false
   */
  inverted?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid ''!",
   *     "propertyInvalidValueType": "Invalid ''!",
   *     "methodInvalidValueType": "Invalid ''!",
   *     "methodInvalidArgumentsCount": "Invalid '' argument(s)!",
   *     "methodInvalidReturnType": "Invalid ''!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": "'.",
   *     "htmlTemplateNotSuported": ": Web Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "invalidNode": ".",
   *     "redPrefix": "R:",
   *     "greenPrefix": "G:",
   *     "bluePrefix": "B:",
   *     "hexPrefix": "#:",
   *     "alphaPrefix": "Alpha:",
   *     "ok": "OK",
   *     "cancel": "CANCEL",
   *     "customColor": "CUSTOM COLOR ..."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * Determines what colors will be displayed in 'spectrumGrid', 'grid' and 'hexagonal' displayModes.
   * Default value: default
   */
  palette?: ColorPalette;
  /**
   * Defines an array of colors that form a custom palette. This palette can be used in displayModes 'grid' and 'spectrum grid' if the palette property is set to custom. The value of the property can be an array of strings or objects that contain valid colors ( HEX, RGBA, etc).
   * Default value: null
   */
  paletteColors?: any;
  /**
   * Defines an array of colors that represent a predefined list of custom colors. This palette can be used in displayModes 'grid', 'default' and 'spectrum grid'. Custom colors are displayed at the bottom of the color grid below the button for custom color selection. They are only visible if enableCustomColors property is true.
   * Default value: null
   */
  paletteCustomColors?: string[] | null;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Determines how the tooltip displays the value of the color that is being hovered.
   * Default value: hex
   */
  tooltipDisplayMode?: ColorTooltipDisplayMode;
  /**
   * Represents the value of the selected color.
   * Default value: "null"
   */
  value?: string;
  /**
   * Determines the format of the color. Whether it's in HEX, RGB or RGBA. By default it shows the color depending on the displayMode.
   * Default value: default
   */
  valueFormat?: ColorValueFormat;
  /**
   * Determines the value member for the color when the paletteColors consists of objects. Usefull in cases where the colors are loaded as objects in an array and the attribute that holds the color key is not named 'value'.
   * Default value: "null"
   */
  valueMember?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when the color is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previously selected color.
   *  value - The new selected color.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the cancel button is clicked. 'Cancel' button is visible only when <strong>applyValueMode</strong> is set to <strong>useButtons</strong>.
	* @param event. The custom event.    */
  onCancelButtonClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the custom color selection view is opened/closed. Custom color selection view is available when <strong>enableCustomColors</strong> property is true.
	* @param event. The custom event. Custom data event was created with: ev.detail(value)
   *  value - A boolean that indicates whether the custom color view is shown or not.
   */
  onCustomColorSelection?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the ok button is clicked. 'Ok' button is visible only when <strong>applyValueMode</strong> is set to <strong>useButtons</strong>.
	* @param event. The custom event.    */
  onOkButtonClick?: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-color-panel"): ColorPanel;
			querySelector(selectors: "smart-color-panel"): ColorPanel | null;	
			querySelectorAll(selectors: "smart-color-panel"): NodeListOf<ColorPanel>;
			getElementsByTagName(qualifiedName: "smart-color-panel"): HTMLCollectionOf<ColorPanel>;
			getElementsByName(elementName: "smart-color-panel"): NodeListOf<ColorPanel>;	
    }
}

/**Specifies how the value is applied. */
export declare type ColorApplyValueMode = 'instantly' | 'useButtons';
/**Determines what colors will be displayed in 'spectrumGrid', 'grid' and 'hexagonal' displayModes. */
export declare type ColorPalette = 'default' | 'gray' | 'red' | 'green' | 'blue' | 'custom';
/**Determines how the tooltip displays the value of the color that is being hovered. */
export declare type ColorTooltipDisplayMode = 'none' | 'rgb' | 'rgba' | 'hex';
/**
 ColorPicker is an advanced color picking component with Pallete, Spectrum Grid, Radial Palette and Excel-like options. Users can input colors either by a dropdown or input field.
*/
export interface ColorPicker extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * This property allows editting of colors via the input inside the element's action section. Accepts values in all supported types. This property works when 'valueDisplayMode' is set to default or colorCode.
   * Default value: false
   */
  editable?: boolean;
  /**
   * Determines the delay before the opened drop down closes when dropDownOpenMode is set to 'auto'.
   * Default value: 100
   */
  autoCloseDelay?: number;
  /**
   * Specifies how the user applies the selected value. In 'instantly' mode the value is applied immediately when color is selected. In 'useButtons' mode are shown 'Ok' and 'Cancel' buttons at the botom of the colorpicker's drop down. Only click on 'OK' button applies the value.
   * Default value: instantly
   */
  applyValueMode?: ColorApplyValueMode;
  /**
   * Defines the number of columns for the colors in displayModes 'grid', 'hexagonal' and 'spectrumGrid'.
   * Default value: 8
   */
  columnCount?: number;
  /**
   * Determines the colors that will be displayed and their layout.
   * Default value: default
   */
  displayMode?: ColorDisplayMode;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * By default clicking on color panel's preview container returns the color value to it's previous state. 'disableUndo' prevents this functionality.
   * Default value: false
   */
  disableUndo?: boolean;
  /**
   * Sets the parent container of the dropDown (the popup). Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown.
   * Default value: body
   */
  dropDownAppendTo?: any;
  /**
   * Determines how the drop down is going to open.
   * Default value: default
   */
  dropDownOpenMode?: DropDownOpenMode;
  /**
   * Determines the position of the drop down button.
   * Default value: right
   */
  dropDownButtonPosition?: DropDownButtonPosition;
  /**
   * Determines the vertical position of the dropDown. 'Auto' means its automatically determined depending on the viewport size.
   * Default value: auto
   */
  dropDownPosition?: DropDownPosition;
  /**
   * Sets the height of the drop down. Default value of null means that CSS variables are used. This property should be used when the browser doesn not support CSS variables.
   * Default value: "auto"
   */
  dropDownHeight?: string;
  /**
   * If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Sets the width of the drop down. Default value of null means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: "auto"
   */
  dropDownWidth?: string;
  /**
   * Allows to edit the alpha(transparency) of the colors via an editor/slider in the following displayModes: 'palette', 'radial', 'hexagonal'
   * Default value: false
   */
  editAlphaChannel?: boolean;
  /**
   * Allows to select a custom color via an editor popup. Custom color selection is available in modes that don't have this option by default, like: 'grid', 'default, 'spectrum grid'.
   * Default value: false
   */
  enableCustomColors?: boolean;
  /**
   * Defines an Array of colors that will be used as the Theme Colors in the corresponding section of displayMode: 'grid' and 'default'.
   * Default value: null
   */
  gridThemeColors?: string[] | null;
  /**
   * Defines an Array of colors that will be used as the Shade Colors in the corresponding section of displayMode: 'grid' and 'default'.
   * Default value: null
   */
  gridShadeColors?: string[] | null;
  /**
   * Defines an Array of colors that will be used as the Standart Colors in the corresponding section of displayMode: 'grid' and 'default'.
   * Default value: null
   */
  gridStandardColors?: string[] | null;
  /**
   * Hides the alpha editor. Alpha editor is an input containing the value of the current color opacity. The input is available in the following modes: 'radial', 'palette', 'hexagonal'. The input is only visible if there's enough space. This editor is visible by default.
   * Default value: false
   */
  hideAlphaEditor?: boolean;
  /**
   * Determines which color editors will be hidden first when there's not enough space for all of them to be visible. By default the editors are only visible in 'palette', 'radial' and 'hexagonal' display modes. This property allows to prioritize the visibility of the editors.
   * Default value: RGB,HEX,alpha,previewContainer
   */
  hideContentToFit?: string[];
  /**
   * HEX editor is an input containing the hexadecimal representation of a color. This editor is visible by default. Setting 'hideRGBeditor' to true hides it.
   * Default value: false
   */
  hideHEXEditor?: boolean;
  /**
   * Hides the preview container. Preview container is used to show the currently selected value in 'palette', 'radial' and 'hexagonal' display modes.
   * Default value: false
   */
  hidePreviewContainer?: boolean;
  /**
   * Hides the RGB editor. This editor is a group of three separate inputs for the Red, Green and Blue values of the color.
   * Default value: false
   */
  hideRGBEditor?: boolean;
  /**
   * Sets additional helper text below the element that is only visible when the element is focused.
   * Default value: ""
   */
  hint?: string;
  /**
   * Inverts the colors in 'spectrumGrid', 'hexagonal', 'radial' modes.
   * Default value: false
   */
  inverted?: boolean;
  /**
   * Sets a label above the element.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid ''!",
   *     "propertyInvalidValueType": "Invalid ''!",
   *     "methodInvalidValueType": "Invalid ''!",
   *     "methodInvalidArgumentsCount": "Invalid '' argument(s)!",
   *     "methodInvalidReturnType": "Invalid ''!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": "'.",
   *     "htmlTemplateNotSuported": ": Web Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "invalidNode": ".",
   *     "redPrefix": "R:",
   *     "greenPrefix": "G:",
   *     "bluePrefix": "B:",
   *     "hexPrefix": "#:",
   *     "alphaPrefix": "Alpha:",
   *     "ok": "OK",
   *     "cancel": "CANCEL",
   *     "customColor": "CUSTOM COLOR ..."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * Determines whether the popup is opened or closed
   * Default value: false
   */
  opened?: boolean;
  /**
   * Determines what colors will be displayed in 'spectrumGrid', 'grid' and 'hexagonal' displayModes.
   * Default value: default
   */
  palette?: ColorPalette;
  /**
   * Defines an array of colors that form a custom palette. This palette can be used in displayModes 'grid' and 'spectrum grid' if the palette property is set to custom. The value of the property can be an array of strings or objects that contain valid colors ( HEX, RGBA, etc).
   * Default value: null
   */
  paletteColors?: {name: string, value: string}[] | string[] | null;
  /**
   * Defines an array of colors that represent a predefined list of custom colors. This palette can be used in displayModes 'grid', 'default' and 'spectrum grid'. Custom colors are displayed at the bottom of the color grid below the button for custom color selection. They are only visible if enableCustomColor property is true.
   * Default value: null
   */
  paletteCustomColors?: string[] | null;
  /**
   * The placeholder is shown when the value is not set yet or is set to null.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Determines whether the resize indicator in the bottom right corner of the drop down is visible or not. This property is used in conjunction with resizeMode.
   * Default value: false
   */
  resizeIndicator?: boolean;
  /**
   * Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down.
   * Default value: null
   */
  resizeMode?: ResizeMode;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Determines how the tooltip displays the value of the color that is being hovered.
   * Default value: hex
   */
  tooltipDisplayMode?: ColorTooltipDisplayMode;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Represents the value of the selected color as the value of the element.
   * Default value: "null"
   */
  value?: string;
  /**
   * Determines the format of the color. Whether it's in HEX, RGB or RGBA. By default it shows the color depending on the displayMode.
   * Default value: default
   */
  valueFormat?: ColorValueFormat;
  /**
   * Determines which elements will be displayed in color picker's action section.
   * Default value: default
   */
  valueDisplayMode?: ColorValueDisplayMode;
  /** 
   * This event is triggered when user clicks on the action button. 'Ok' button is visible only when <strong>applyValueMode</strong> is set to <strong>useButtons</strong>.
	* @param event. The custom event.    */
  onActionButtonClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the cancel button is clicked. 'Cancel' button is visible only when <strong>applyValueMode</strong> is set to <strong>useButtons</strong>.
	* @param event. The custom event.    */
  onCancelButtonClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the color value is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previously selected color.
   *  value - The new selected color.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is closed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the custom color selection view is opened/closed. Custom color selection view is available when <strong>enableCustomColors</strong> property is true.
	* @param event. The custom event. Custom data event was created with: ev.detail(value)
   *  value - A boolean that indicates whether the custom color view is shown or not.
   */
  onCustomColorSelection?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user clicks on the drop down button.
	* @param event. The custom event.    */
  onDropDownButtonClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the ok button is clicked.
	* @param event. The custom event.    */
  onOkButtonClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is opened.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user starts resizing the drop down.
	* @param event. The custom event. Custom data event was created with: ev.detail(position)
   *  position - An object containing the current left and top positions of the drop down.
   */
  onResizeStart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the resizing of the drop down is finished.
	* @param event. The custom event. Custom data event was created with: ev.detail(position)
   *  position - An object containing the current left and top positions of the drop down.
   */
  onResizeEnd?: ((this: any, ev: Event) => any) | null;
  /**
   * Opens the drop down of the color picker.
   */
  open(): void;
  /**
   * Closes the drop down of the color picker.
   */
  close(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-color-picker"): ColorPicker;
			querySelector(selectors: "smart-color-picker"): ColorPicker | null;	
			querySelectorAll(selectors: "smart-color-picker"): NodeListOf<ColorPicker>;
			getElementsByTagName(qualifiedName: "smart-color-picker"): HTMLCollectionOf<ColorPicker>;
			getElementsByName(elementName: "smart-color-picker"): NodeListOf<ColorPicker>;	
    }
}

/**Determines how the drop down is going to open. */
export declare type DropDownOpenMode = 'none' | 'default' | 'dropDownButton' | 'auto';
/**Determines the vertical position of the dropDown. 'Auto' means its automatically determined depending on the viewport size. */
export declare type DropDownPosition = 'auto' | 'top' | 'bottom' | 'overlay-top' | 'overlay-center' | 'overlay-bottom' | 'center-bottom' | 'center-top';
/**Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down. */
export declare type ResizeMode = 'none' | 'horizontal' | 'vertical' | 'both';
/**
 Column Panel allows toggling the visibility and changing the order of columns.
*/
export interface ColumnPanel extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines the data source that will be loaded to the column panel.
   * Default value: null
   */
  dataSource?: ColumnPanelDataSource[];
  /**
   * Enables or disables the column panel.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid ''!",
   *     "propertyInvalidValueType": "Invalid ''!",
   *     "methodInvalidValueType": "Invalid ''!",
   *     "methodInvalidArgumentsCount": "Invalid '' argument(s)!",
   *     "methodInvalidReturnType": "Invalid ''!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": "'.",
   *     "htmlTemplateNotSuported": ": Web Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "apply": "Apply",
   *     "cancel": "Cancel",
   *     "find": "Find a field",
   *     "noResults": "No results"
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
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when the "Apply" button is clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, positionChanged)
   *  value - The current configuration of columns (data source).
   *  positionChanged - A boolean detail that shows whether the columns have been reordered.
   */
  onApply?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the "Cancel" button is clicked.
	* @param event. The custom event.    */
  onCancel: ((this: any, ev: Event) => any) | null;
}

export interface ColumnPanelDataSource {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * The column's data field.
   * Default value: ""
   */
  dataField?: string;
  /**
   * Determines whether the column's visibility can be toggled.
   * Default value: false
   */
  disableToggle?: boolean;
  /**
   * A valid CSS class name applied to the column's icon.
   * Default value: ""
   */
  icon?: string;
  /**
   * The column's label.
   * Default value: ""
   */
  label?: string;
  /**
   * Determines whether the column is visible in the panel.
   * Default value: true
   */
  visible?: boolean;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-column-panel"): ColumnPanel;
			querySelector(selectors: "smart-column-panel"): ColumnPanel | null;	
			querySelectorAll(selectors: "smart-column-panel"): NodeListOf<ColumnPanel>;
			getElementsByTagName(qualifiedName: "smart-column-panel"): HTMLCollectionOf<ColumnPanel>;
			getElementsByName(elementName: "smart-column-panel"): NodeListOf<ColumnPanel>;	
    }
}

/**
 ComboBox is the alternate for the HTML select tag with editable option. It supports data binding, auto-complete, filtering, grouping, cascading and more.
*/
export interface ComboBox extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Used only when dropDownOpenMode is set to 'auto'. Determines the delay before the opened drop down closes if the pointer is not over the element.
   * Default value: 100
   */
  autoCloseDelay?: number;
  /**
   * Determines the autocomplete mode. Auto complete modes filter the items from the dataSource and show only those that match the input.
   * Default value: none
   */
  autoComplete?: AutoComplete;
  /**
   * Determines the delay before the drop down opens to show the matches from the auto complete operation. The delay is measured in miliseconds.
   * Default value: 100
   */
  autoCompleteDelay?: number;
  /**
   * Allows the user to define a custom key name ( or multiple key names) to open that popup with.
   * Default value: 
   */
  autoOpenShortcutKey?: string[];
  /**
   * Determines the data source that will be loaded to the ComboBox. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value, group. It can also be a callback that returns an Array of items as previously described.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables the combo box.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines whether an indicator will appear during filtering and remote item loading.
   * Default value: false
   */
  displayLoadingIndicator?: boolean;
  /**
   * Sets or gets the displayMember. The displayMember specifies the name of a property to display. The name is contained in the collection specified by the 'dataSource' property.
   * Default value: """"
   */
  displayMember?: string;
  /**
   * Determines the drop down parent. The drop down can be removed from the body of the element and continue to work in another container. This is usefull when one of the parents of the element doesn't allow overflowing, by settings this property to 'body' the drop down will be appended to the DOM and the popup will open/close as usual. dropDownAppendTo can be a string representing the id of an HTML element on the page or a direct reference to that element. Reseting it back to null will take the drop down back to it's original place.
   * Default value: null
   */
  dropDownAppendTo?: any;
  /**
   * Determines the position of the drop down button.
   * Default value: right
   */
  dropDownButtonPosition?: DropDownButtonPosition;
  /**
   * Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownHeight?: string | number;
  /**
   * Sets the maximum Height of the drop down. By default it's set to an empty string. In this case the maxHeight of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMaxHeight?: string | number;
  /**
   * Sets the maximum Width of the drop down. By default it's set to an empty string. In this case the maxWidth of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMaxWidth?: string | number;
  /**
   * Sets the minimum Height of the drop down. By default it's set to an empty string. In this case the minHeight of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMinHeight?: string | number;
  /**
   * Sets the minimum Width of the drop down. By default it's set to an empty string. In this case the minWidth of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMinWidth?: string | number;
  /**
   * Determines how the drop down is going to open.
   * Default value: default
   */
  dropDownOpenMode?: DropDownOpenMode;
  /**
   * If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. The purpose of the overlay is to make sure that clicking anywhere outside the popup will will target the overlay and not the DOM.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Determines the placeholder for the drop down, displayed when there are no items in it.
   * Default value: "No Items"
   */
  dropDownPlaceholder?: string;
  /**
   * Determines the position of the drop down when opened.
   * Default value: auto
   */
  dropDownPosition?: DropDownPosition;
  /**
   * Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Determines the behavior of the element when Escape key is pressed.
   * Default value: null
   */
  escKeyMode?: ComboBoxEscKeyMode;
  /**
   * Determines whether filtering is enabled.
   * Default value: false
   */
  filterable?: boolean;
  /**
   * Determines the placeholder for the drop down list filter input field.
   * Default value: ""
   */
  filterInputPlaceholder?: string;
  /**
   * Determines the filtering mode of the Combo box.
   * Default value: startsWithIgnoreCase
   */
  filterMode?: FilterMode;
  /**
   * If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups.
   * Default value: false
   */
  grouped?: boolean;
  /**
   * Determines which attribute from the dataSource object will be used as the group member for the items. If not set, by default 'group' property is used from the source object. groupMember is especially usefull when loading the data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used to group the items.
   * Default value: ""
   */
  groupMember?: string;
  /**
   * Sets additional helper text below the element. The hint is visible only when the element is focused.
   * Default value: ""
   */
  hint?: string;
  /**
   * Determines the visibility of the horizontal Scroll bar inside the drop down.
   * Default value: auto
   */
  horizontalScrollBarVisibility?: HorizontalScrollBarVisibility;
  /**
   * Represents the property name of a List item. Determines the value of the input when a ListItem is selected. Usefull in cases where the user wants to display for example the value of an item instead of it's label. By default the label is displayed in the input.
   * Default value: ""
   */
  inputMember?: string;
  /**
   * Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * IncrementalSearchDelay property specifies the time-interval in milliseconds until the previous search query is cleared. The timer starts when the user stops typing. A new query can be started only when the delay has passed.
   * Default value: 700
   */
  incrementalSearchDelay?: number;
  /**
   * Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the drop down is focused starts the incremental search.
   * Default value: startsWithIgnoreCase
   */
  incrementalSearchMode?: SearchMode;
  /**
   * Sets the height for all list items. Used only when virtualization is enabled.
   * Default value: null
   */
  itemHeight?: number;
  /**
   * Determines the item width measuring algorithm.
   * Default value: auto
   */
  itemMeasureMode?: ListItemMeasureMode;
  /**
   * A getter that returns an array of all List items inside the drop down.
   * Default value: 
   */
  items?: {label: string, value: string}[];
  /**
   * The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM.  It's used to set a customize the content of the list items.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Sets a little text label above the element.
   * Default value: ""
   */
  label?: string;
  /**
   * Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom.
   * Default value: "Loading..."
   */
  loadingIndicatorPlaceholder?: string;
  /**
   * Determines the position of the loading indicator.
   * Default value: center
   */
  loadingIndicatorPosition?: VerticalAlignment;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
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
   *     "invalidNode": "."
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines the minimum number of characters inside the input in order to trigger the autocomplete functionality
   * Default value: 2
   */
  minLength?: number;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * Determines whether the popup is opened or closed
   * Default value: false
   */
  opened?: boolean;
  /**
   * Determines the input's placeholder.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines whether the resize indicator in the bottom right corner of the drop down is visible or not. This property is used in conjunction with resizeMode.
   * Default value: false
   */
  resizeIndicator?: boolean;
  /**
   * Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down.
   * Default value: null
   */
  resizeMode?: ResizeMode;
  /**
   * Determines what will be displayed in the input.
   * Default value: plain
   */
  selectionDisplayMode?: SelectionDisplayMode;
  /**
   * Sets or gets the selected indexes. Selected indexes represents an array of the indexes of the items that should be selected.
   * Default value: 
   */
  selectedIndexes?: number[];
  /**
   * Sets or gets elected indexes. Selected values represents the values of the items that should be selected.
   * Default value: 
   */
  selectedValues?: string[];
  /**
   * Determines how many items can be selected.
   * Default value: one
   */
  selectionMode?: ListSelectionMode;
  /**
   * Determines whether the items are sorted alphabetically or not
   * Default value: false
   */
  sorted?: boolean;
  /**
   * Determines sorting direction - ascending(asc) or descending(desc)
   * Default value: "asc"
   */
  sortDirection?: string;
  /**
   * Determines the theme for the element. Themes define the look of the elements.
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets a custom content for the tokens when selectionDisplayMode is set to 'tokens'. Tokens are used only for multiple selection.
   * Default value: null
   */
  tokenTemplate?: any;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the value.
   * Default value: ""
   */
  value?: string;
  /**
   * Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items.
   * Default value: """"
   */
  valueMember?: string;
  /**
   * Determines the visibility of the vertical scroll bar.
   * Default value: auto
   */
  verticalScrollBarVisibility?: VerticalScrollBarVisibility;
  /**
   * Determines weather or not Virtualization is used for the Combo box. Virtualization allows a huge amount of items to be loaded to the List box while preserving the performance. For example a milion items can be loaded to the list box.
   * Default value: false
   */
  virtualized?: boolean;
  /** 
   * This event is triggered when the selection is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(addedItems, disabled, index, label, removedItems, selected, value)
   *  addedItems - An array of List items that have been selected.
   *  disabled - A flag indicating whether or not the item that caused the change event is disabled.
   *  index - The index of the List item that triggered the event.
   *  label - The label of the List item that triggered the event.
   *  removedItems - An array of List items that have been unselected before the event was fired.
   *  selected - The selected state of the List item that triggered the event. If an item was selected the value will be true and vice versa.
   *  value - The value of the List item that triggered the event.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down list is closed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down list is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an item is clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(disabled, index, label, selected, value)
   *  disabled - Indicates whether the List item that was clicked is disabled or not.
   *  index - Indicates the index of the List item that was clicked.
   *  label - The label of the List item that was clicked.
   *  selected - Indicates whether the List item that was clicked is selected or not.
   *  value - The value of the List item that was clicked.
   */
  onItemClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down list is opened.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down list is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user starts resizing the drop down.
	* @param event. The custom event. Custom data event was created with: ev.detail(position)
   *  position - An object containing the current left and top positions of the drop down.
   */
  onResizeStart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the resizing of the drop down is finished.
	* @param event. The custom event. Custom data event was created with: ev.detail(position)
   *  position - An object containing the current left and top positions of the drop down.
   */
  onResizeEnd?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user scrolls to the end of the dropDown list.
	* @param event. The custom event.    */
  onScrollBottomReached?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user scrolls to the start of the dropDown list.
	* @param event. The custom event.    */
  onScrollTopReached?: ((this: any, ev: Event) => any) | null;
  /**
   * Appends a ListItem to the end of the list of items inside element.
   * @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
   * @returns {Node}
   */
  appendChild<T extends Node>(node: Node): T;
  /**
   * Removes all items from the drop down list.
   */
  clearItems(): void;
  /**
   * Unselects all items.
   */
  clearSelection(): void;
  /**
   * Closes the dropDown list.
   */
  close(): void;
  /**
   * Ensures the desired item is visible by scrolling to it.
   * @param {HTMLElement | string} item. A list item or value of the desired item to be visible.
   */
  ensureVisible(item: HTMLElement | string): void;
  /**
   * Returns an item instance from the dropDown list.
   * @param {string} value. The value of an item from the drop down list.
   * @returns {HTMLElement}
   */
  getItem(value: string): HTMLElement;
  /**
   * Inserts a new item at a specified position.
   * @param {number} position. The position where the item must be inserted.
   * @param {any} item. Describes the properties of the item that will be inserted.
   */
  insert(position: number, item: any): void;
  /**
   * Inserts a new ListItem before another in the list.
   * @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
   * @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
   * @returns {Node}
   */
  insertBefore<T extends Node>(node: Node, referenceNode: Node | null): T;
  /**
   * Opens the dropDown list.
   */
  open(): void;
  /**
   * Removes an item at a specified position.
   * @param {number} position. The position of the removed item.
   */
  removeAt(position: number): void;
  /**
   * Removes a ListItem from the list of items inside element.
   * @param {Node} node. A ListItem element that is part of the list of items inside the element.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Selects an item from the dropDown list. 
   * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
   */
  select(item: string | HTMLElement): void;
  /**
   * Unselects an item from the dropDown list. 
   * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
   */
  unselect(item: string | HTMLElement): void;
  /**
   * Updates an item from the dropDown list.
   * @param {number} position. The position where the item must be updated.
   * @param {any} value. The value of the updated item.
   */
  update(position: number, value: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-combo-box"): ComboBox;
			querySelector(selectors: "smart-combo-box"): ComboBox | null;	
			querySelectorAll(selectors: "smart-combo-box"): NodeListOf<ComboBox>;
			getElementsByTagName(qualifiedName: "smart-combo-box"): HTMLCollectionOf<ComboBox>;
			getElementsByName(elementName: "smart-combo-box"): NodeListOf<ComboBox>;	
    }
}

/**Determines the autocomplete mode. Auto complete modes filter the items from the dataSource and show only those that match the input. */
export declare type AutoComplete = 'none' | 'auto' | 'inline' | 'manual';
/**Determines the behavior of the element when Escape key is pressed. */
export declare type ComboBoxEscKeyMode = 'none' | 'previousValue' | 'clearValue';
/**Determines the filtering mode of the Combo box. */
export declare type FilterMode = 'contains' | 'containsIgnoreCase' | 'custom' | 'doesNotContain' | 'doesNotContainIgnoreCase' | 'equals' | 'equalsIgnoreCase' | 'startsWith' | 'startsWithIgnoreCase' | 'endsWith' | 'endsWithIgnoreCase';
/**Determines the visibility of the horizontal Scroll bar inside the drop down. */
export declare type HorizontalScrollBarVisibility = 'auto' | 'disabled' | 'hidden' | 'visible';
/**Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the drop down is focused starts the incremental search. */
export declare type SearchMode = 'contains' | 'containsIgnoreCase' | 'doesNotContain' | 'doesNotContainIgnoreCase' | 'equals' | 'equalsIgnoreCase' | 'startsWith' | 'startsWithIgnoreCase' | 'endsWith' | 'endsWithIgnoreCase';
/**Determines the item width measuring algorithm. */
export declare type ListItemMeasureMode = 'auto' | 'precise';
/**Determines what will be displayed in the input. */
export declare type SelectionDisplayMode = 'plain' | 'placeholder' | 'tokens';
/**Determines how many items can be selected. */
export declare type ListSelectionMode = 'none' | 'oneOrManyExtended' | 'zeroOrMany' | 'oneOrMany' | 'zeroOrOne' | 'one' | 'checkBox' | 'radioButton';
/**Determines the visibility of the vertical scroll bar. */
export declare type VerticalScrollBarVisibility = 'auto' | 'disabled' | 'hidden' | 'visible';
/**
 Defines a dialog for customization of filtering, sorting.
*/
export interface CustomizationDialog extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Array with filtered fields and their settings.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property.
   * Default value: ""
   */
  displayMember?: string;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets whether is enabled/disabled filtering tab.
   * Default value: false
   */
  filtering?: boolean;
  /**
   * Sets whether is enabled/disabled grouping tab.
   * Default value: false
   */
  grouping?: boolean;
  /**
   * Set's the buttons that will be visible in the header section.
   * Default value: apply,close
   */
  headerButtons?: string[];
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
   *     "ambiguousIndexes": "jqx-tabs: Initially set jqx-tab-item indexes are ambiguous and are ignored in favour of the HTML structure.",
   *     "detailsObjectRequired": "jqx-tabs: The method \"insert\" requires a details Object to be passed as a second argument.",
   *     "invalidIndex": "jqx-tabs: '' method accepts an index of type number.",
   *     "referenceNodeNotChild": "jqx-tabs: Passed  is not part of this jqx-tabs element.",
   *     "tabItemRequired": "jqx-tabs: The method '' requires a \"jqx-tab-item\" element to be passed as an argument.",
   *     "sorting": "SORTING",
   *     "grouping": "GROUPING",
   *     "filtering": "FILTERING",
   *     "columnChooser": "COLUMN CHOOSER",
   *     "applyButton": "Apply",
   *     "closeButton": "Close",
   *     "columnsToSort": "Columns to Sort",
   *     "columnsToGroup": "Columns to Group",
   *     "placeholderSorting": "No sorting applied",
   *     "placeholderGrouping": "No grouping applied",
   *     "and": "And",
   *     "notand": "Not And",
   *     "or": "Or",
   *     "notor": "Not Or",
   *     "=": "Equals",
   *     "<>": "Does not equal",
   *     ">": "Greater than",
   *     ">=": "Greater than or equal to",
   *     "<": "Less than",
   *     "<=": "Less than or equal to",
   *     "startswith": "Starts with",
   *     "endswith": "Ends with",
   *     "contains": "Contains",
   *     "notcontains": "Does not contain",
   *     "isblank": "Is blank",
   *     "isnotblank": "Is not blank"
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets whether the columns reordering is active.
   * Default value: false
   */
  reorder?: boolean;
  /**
   * Sets or gets the tab, wich is selected on initialization.
   * Default value: 0
   */
  selectedTab?: number;
  /**
   * Sets whether is enabled/disabled sorting tab.
   * Default value: false
   */
  sorting?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets element's value. It's represente by object, contained
   * Default value: null
   */
  value?: any;
  /**
   * Determines the value member of an item. Stored as value in the item object.
   * Default value: ""
   */
  valueMember?: string;
  /**
   * Sets or gets whether the columns of the element could be hidden.
   * Default value: false
   */
  visibility?: boolean;
  /** 
   * This event is triggered when the dialog is opened.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the dialog is closed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the data in the value property is changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the dialog is closed via clicking the apply button.
	* @param event. The custom event.    */
  onApply?: ((this: any, ev: Event) => any) | null;
  /**
   * Opens the dialog
   */
  open(): void;
  /**
   * Closes the dialog.
   */
  close(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-customization-dialog"): CustomizationDialog;
			querySelector(selectors: "smart-customization-dialog"): CustomizationDialog | null;	
			querySelectorAll(selectors: "smart-customization-dialog"): NodeListOf<CustomizationDialog>;
			getElementsByTagName(qualifiedName: "smart-customization-dialog"): HTMLCollectionOf<CustomizationDialog>;
			getElementsByName(elementName: "smart-customization-dialog"): NodeListOf<CustomizationDialog>;	
    }
}

export interface DataAdapter {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets whether the binding is automatic after creating a data adapter instance.
   * Default value: true
   */
  autoBind?: boolean;
  /**
   * Sets or gets whether the binding is asynchronous.
   * Default value: false
   */
  async?: boolean;
  /**
   * Gets the bound data source after the binding is completed.
   * Default value: 
   */
  boundSource?: any[];
  /**
   * Gets the bound hierarchical data source after the binding is completed.
   * Default value: 
   */
  boundHierarchy?: any[];
  /**
   * Sets or gets a children data field like 'children', 'items' in the data source. When this property is set, the dataAdapter will look for this data field when looping through the items. If it is found a hierarchical data source would be created.
   * Default value: ""
   */
  childrenDataField?: string;
  /**
   * Sets or gets the data fields to group by.
   * Default value: []
   */
  groupBy?: string[];
  /**
   * Sets or gets the data fields which decribe the loaded data and data type. Ex: ['id: number', 'firstName: string', 'lastName: string']
   * Default value: string[]
   */
  dataFields?: string[];
  /**
   * Sets or gets the data source of the adapter.
   * Default value: []
   */
  dataSource?: any;
  /**
   * Sets or gets whether the data source type.
   * Default value: array
   */
  dataSourceType?: DataAdapterDataSourceType;
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
   * Gets the data source length.
   * Default value: 0
   */
  length?: number;
  /**
   * Sets or gets whether the request type.
   * Default value: GET
   */
  method?: DataAdapterMethod;
  /**
   * Sets or gets the parent data field to be used for building the hierarchy. It is used in combination with the keyDataField property. Usually the 'id' field is used as key data field and 'parentId' as parent data field'
   * Default value: ""
   */
  parentDataField?: string;
  /**
   * Sets or gets the virtual data source on expand function. This function is called when we load data on demand in Tree or TreeGrid and virtualDataSource in these components is set, too
   * Default value: null
   */
  virtualDataSourceOnExpand?: DataAdapterVirtualDataSourceOnExpand[];
  /**
   * Sets or gets the total length of items. If it is unknown, do not set this parameter.
   * Default value: 0
   */
  virtualDataSourceLength?: number;
  /**
   * Sets or gets a boolean param which determines whether to cache or not the new loaded data.
   * Default value: true
   */
  virtualDataSourceCache?: boolean;
  /**
   * Sets or gets the virtual data source function
   * Default value: null
   */
  virtualDataSource?: DataAdapterVirtualDataSource[];
  /**
   * Adds a new item.
   * @param {any} item. A new data source item.
   * @param {string | number} parentId?. id of a parent data item, when we want to add a child in a hierarchy
   */
  add(item: any, parentId?: string | number): void;
  /**
   * Clears the adapter.
   */
  clear(): void;
  /**
   * Clears the sorting.
   */
  clearSort(): void;
  /**
   * Clears the filters.
   */
  clearFilter(): void;
  /**
   * Clears the grouping.
   */
  clearGroup(): void;
  /**
   * Data binds the adapter to the data source. If the data source is remote, perform a new AJAX call.
   */
  dataBind(): void;
  /**
   * Notifies for data changes like adding, removing, updating items.
   * @param {any} callback. The callback function which is called when a change happened. { action: 'add' | 'bindingComplete' | 'removeLast' | 'remove' | 'move' | 'update' | 'insert', data: [], index?: number }
   */
  notify(callback: any): void;
  /**
   * The find method returns the value of the first element in the provided array that satisfies the provided testing function.
   * @param {any} callback. Function to execute on each value in the array, taking 2 arguments - element and index. The element is the current item in the array. The index is the index of the current element.
   * @returns {any}
   */
  find(callback: any): any;
  /**
   * Filters the data source.
   * @param {string[]} dataFields. The data fields.
   * @param {any} filterGroups. The filter group objects.
   */
  filter(dataFields: string[], filterGroups: any): void;
  /**
   * Filters the data source.
   * @param {string} dataField. The data field.
   * @param {string[]} filterExpessions. Filter expression like '= 5'. Allowed operators '=', '<','>','<>', '<=', '>=', 'starts with','contains','ends with', '', 'null'
   */
  filterBy(dataField: string, filterExpessions: string[]): void;
  /**
   * Gets the index of an item.
   * @param {number} index. The index of the item.
   * @returns {any}
   */
  indexOf(index: number): any;
  /**
   * Inserts an item.
   * @param {number} index. The index where to insert the item.
   * @param {any} item. An object containing the values for the properties of the item that will be updated.
   */
  insert(index: number, item: any): void;
  /**
   * Moves an item.
   * @param {number} from. The item's old index.
   * @param {number} to. The item's new index.
   */
  move(from: number, to: number): void;
  /**
   * Removes the last item from the data source.
   */
  removeLast(): void;
  /**
   * Removes an item at a specified index.
   * @param {number} position. The index of the item to be removed.
   */
  removeAt(position: number): void;
  /**
   * Sorts the data source.
   * @param {string[]} dataFields. The data fields.
   * @param {string[]} sortOrders. The sort orders array with 'asc' or 'desc' or null values.
   */
  sort(dataFields: string[], sortOrders: string[]): void;
  /**
   * Sorts the data source.
   * @param {string} dataField. The data field.
   * @param {string} dataType. The type of the data field - string, number, date, boolean.
   * @param {string} sortOrder. The sort order - 'asc' or 'desc' or null.
   */
  sortBy(dataField: string, dataType: string, sortOrder: string): void;
  /**
   * Aggregates data from the data source.
   * @param {any[]} summaryItems. The summary items. Each summary item represents a data field with summary function: 'avg' - Average aggregate, 'count' - Count aggregate, 'min' - Min aggregate, 'max' - Max aggregate, 'sum' - Sum aggregate, 'product' - Product aggregate, 'stdev' - Standard deviation on a sample., 'stdevp' - Standard deviation on an entire population., 'varp' - Variance on an entire population., 'var' - Variance on a sample.
   */
  summarize(summaryItems: any[]): void;
  /**
   * Returns an array of all items.
   * @returns {any[]}
   */
  toArray(): any[];
  /**
   * Updates an item from the element.
   * @param {number} index. The index of the item to be updated.
   * @param {any} item. An object containing the values for the properties of the item that will be updated.
   */
  update(index: number, item: any): void;
}

export interface DataAdapterVirtualDataSourceOnExpand {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Result callback function which is executed when the data loading is completed.
   * Default value: null
   */
  resultCallbackFunction?: DataAdapterVirtualDataSourceOnExpandResultCallbackFunction;
  /**
   * Details of the object, which made the request
   * Default value: null
   */
  details?: DataAdapterVirtualDataSourceOnExpandDetails;
}

/**Result callback function which is executed when the data loading is completed. */
export interface DataAdapterVirtualDataSourceOnExpandResultCallbackFunction {
(
  /**
   * result callback function settings
   * Default value: null
   */
  settings?: any

): void;
}

/**Details of the object, which made the request */
export interface DataAdapterVirtualDataSourceOnExpandDetails {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Data start index.
   * Default value: 0
   */
  first?: number;
  /**
   * Data end index.
   * Default value: 0
   */
  last?: number;
  /**
   * Sorting information.
   * Default value: null
   */
  sorting?: DataAdapterVirtualDataSourceOnExpandDetailsSorting;
  /**
   * Filtering information.
   * Default value: null
   */
  filtering?: any;
  /**
   * Grouping information
   * Default value: []
   */
  grouping?: string[];
  /**
   * Request action type
   * Default value: undefined
   */
  action?: DataAdapterVirtualDataSourceOnExpandDetailsAction;
}

/**Sorting information. */
export interface DataAdapterVirtualDataSourceOnExpandDetailsSorting {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sort order.
   * Default value: asc
   */
  sortOrder?: DataAdapterVirtualDataSourceOnExpandDetailsSortingSortOrder;
  /**
   * Sort index.
   * Default value: -1
   */
  sortIndex?: number;
}

export interface DataAdapterVirtualDataSource {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Result callback function which is executed when the data loading is completed.
   * Default value: null
   */
  resultCallbackFunction?: DataAdapterVirtualDataSourceResultCallbackFunction;
  /**
   * Details of the object, which made the request
   * Default value: null
   */
  details?: DataAdapterVirtualDataSourceDetails;
}

/**Result callback function which is executed when the data loading is completed. */
export interface DataAdapterVirtualDataSourceResultCallbackFunction {
(
  /**
   * result callback function settings
   * Default value: null
   */
  settings?: any

): void;
}

/**Details of the object, which made the request */
export interface DataAdapterVirtualDataSourceDetails {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Data start index.
   * Default value: 0
   */
  first?: number;
  /**
   * Data end index.
   * Default value: 0
   */
  last?: number;
  /**
   * Sorting information.
   * Default value: null
   */
  sorting?: DataAdapterVirtualDataSourceDetailsSorting;
  /**
   * Filtering information.
   * Default value: null
   */
  filtering?: any;
  /**
   * Grouping information
   * Default value: []
   */
  grouping?: string[];
  /**
   * Request action type
   * Default value: undefined
   */
  action?: DataAdapterVirtualDataSourceDetailsAction;
}

/**Sorting information. */
export interface DataAdapterVirtualDataSourceDetailsSorting {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sort order.
   * Default value: asc
   */
  sortOrder?: DataAdapterVirtualDataSourceDetailsSortingSortOrder;
  /**
   * Sort index.
   * Default value: -1
   */
  sortIndex?: number;
}
/**Sets or gets whether the data source type. */
export declare type DataAdapterDataSourceType = 'array' | 'json' | 'xml' | 'csv' | 'tsv';
/**Sets or gets whether the request type. */
export declare type DataAdapterMethod = 'GET' | 'POST';
/**Sort order. */
export declare type DataAdapterVirtualDataSourceOnExpandDetailsSortingSortOrder = 'asc' | 'desc';
/**Request action type */
export declare type DataAdapterVirtualDataSourceOnExpandDetailsAction = 'sort' | 'filter' | 'dataBind' | 'scroll' | 'group' | 'expand' | 'pageIndexChange' | 'pageSizeChange';
/**Sort order. */
export declare type DataAdapterVirtualDataSourceDetailsSortingSortOrder = 'asc' | 'desc';
/**Request action type */
export declare type DataAdapterVirtualDataSourceDetailsAction = 'sort' | 'filter' | 'dataBind' | 'scroll' | 'group' | 'expand' | 'pageIndexChange' | 'pageSizeChange';
/**
 Date & time selection component. It allows to select both date and time with the same control.
*/
export interface DateTimePicker extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Applies new animation settings to the calendar pop-up when it is enabled. Properties:startSpeed - Determines the initial speed of the animation.easeThreshold - Determines the point at which the animation starts to slow down - the "ease effect".step - Determines the step ( scrolling interval ) at which the animation will run. stepEaseSize - Coefficient that is used to calculated the new step once the threshold has been passed. resetThreshold - Determines the threshold for animation reset. When it's reached the animation will start over.
   * Default value: null
   */
  animationSettings?: any;
  /**
   * Determines whether the calendar button pop-up will be closed automatically when date or time is selected through it.
   * Default value: false
   */
  autoClose?: boolean;
  /**
   * Determines the delay before the calendar pop-up is automatically closed. Applicable only when autoClose is set to true.
   * Default value: 500
   */
  autoCloseDelay?: boolean;
  /**
   * Determines whether the calendar button is visible or not. The calendar button is used to open the Calendar popup to select a date.
   * Default value: false
   */
  calendarButton?: boolean;
  /**
   * Determines the position of the calendar button.
   * Default value: right
   */
  calendarButtonPosition?: DropDownButtonPosition;
  /**
   * Determines the header mode of the calendar pop-up.
   * Default value: default
   */
  calendarMode?: CalendarMode;
  /**
   * Sets or gets the format of calendar pop-up's day names.
   * Default value: firstTwoLetters
   */
  dayNameFormat?: DayFormat;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Disables auto navigation of the calendar pop-up when the user clicks on a date that's not from month in view.
   * Default value: false
   */
  disableAutoNavigation?: boolean;
  /**
   * Determines the time zone to display the value in.
   * Default value: unspecified
   */
  displayKind?: DateTimePickerDisplayKind;
  /**
   * Determines the type of the month/year view in the calendar pop-up when calendarMode is set to Default.
   * Default value: table
   */
  displayModeView?: CalendarDisplayModeView;
  /**
   * Sets custom container to append the pop-up to. By default, it is in the DateTimePicker. The value of the property can be an HTML element or the id of an HTML element.
   * Default value: null
   */
  dropDownAppendTo?: any;
  /**
   * Sets or gets the pop-up display mode (what components appear in it, and its behaviour).
   * Default value: default
   */
  dropDownDisplayMode?: DateTimePickerDropDownDisplayMode;
  /**
   * If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Determines the pop-up position when opened.
   * Default value: auto
   */
  dropDownPosition?: DropDownPosition;
  /**
   * Determines how the the value can be edited inside the input.
   * Default value: default
   */
  editMode?: DateTimePickerEditMode;
  /**
   * Determines whether the value can be incremented/decremented with the mouse wheel when the mouse is over the input.
   * Default value: false
   */
  enableMouseWheelAction?: boolean;
  /**
   * Determines the first day of the week of the calendar pop-up. From 0(Sunday) to 6(Saturday)
   * Default value: 0
   */
  firstDayOfWeek?: number;
  /**
   * Sets or gets the footer template of the calendar pop-up. The value of this property can be the id of an HTMLTemplateElement or the HTMLTemplateElement itself. If set to null, a default template is applied.
   * Default value: null
   */
  footerTemplate?: any;
  /**
   * Determines the pattern that is used to display the value in.
   * Default value: "dd-MMM-yy HH:mm:ss.fff"
   */
  formatString?: string;
  /**
   * Sets custom header template for the calendar pop-up. Accepts the id of an HTMLTemplateElement or a reference ot it.
   * Default value: null
   */
  headerTemplate?: any;
  /**
   * Hides the names of the weekdays in the calendar pop-up.
   * Default value: false
   */
  hideDayNames?: boolean;
  /**
   * Determines if dates from other months are visible or not in the calendar pop-up.
   * Default value: false
   */
  hideOtherMonthDays?: boolean;
  /**
   * Hides the arrow of the tooltip in the calendar pop-up.
   * Default value: false
   */
  hideTooltipArrow?: boolean;
  /**
   * Sets additional helper text below the element that appears only when the element is focused.
   * Default value: ""
   */
  hint?: string;
  /**
   * Sets dates, displayed as important in the calendar pop-up.
   * Default value: 
   */
  importantDates?: string[];
  /**
   * Sets a template for the important dates of the calendar pop-up. Accepts the id of or a reference to an HTMLTemplateElement.
   * Default value: null
   */
  importantDatesTemplate?: string | HTMLTemplateElement;
  /**
   * Sets or gets the increment/decrement interval when a date/time segment inside the input has not been highlighted. The default interval is 1 second. If a numeric value is passed, it represents milliseconds.
   * Default value: new JQX.Utilities.TimeSpan(0, 0, 1)
   */
  interval?: any;
  /**
   * Sets a label above the element.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets the locale that determines what language is used to localize the labels inside the DateTimePicker.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Sets or gets the maximum allowed value.
   * Default value: new JQX.Utilities.DateTime(3001, 1, 1)
   */
  max?: any;
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
   *     "now": "Now",
   *     "dateTabLabel": "DATE",
   *     "timeTabLabel": "TIME"
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the minimum allowed value.
   * Default value: new JQX.Utilities.DateTime(1600, 1, 1)
   */
  min?: any;
  /**
   * Sets or gets the element's name, which is used as a reference when the data is submitted in a form.
   * Default value: ""
   */
  name?: string;
  /**
   * Enables or disables the setting of the value property to be null or empty string. If the property is enabled and the value in the input is deleted, the value will be set to null and the placeholder will be displayed. Otherwise, the current date and time will be set.
   * Default value: false
   */
  nullable?: boolean;
  /**
   * Sets or gets whether the calendar pop-up is opened.
   * Default value: false
   */
  opened?: boolean;
  /**
   * Sets or gets the placeholder text to be shown in the input when value is null.
   * Default value: "Enter date"
   */
  placeholder?: string;
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets an array of dates (DateTime or Date objects) that cannot be selected.
   * Default value: 
   */
  restrictedDates?: Date[];
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Sets or gets whether the spin buttons are displayed. Spin buttons are used to increment/decrement the date/time.
   * Default value: false
   */
  spinButtons?: boolean;
  /**
   * Sets the delay between repeats of the spin buttons in miliseconds.
   * Default value: 75
   */
  spinButtonsDelay?: number;
  /**
   * Sets a delay before the first repeat iteration of spin buttons in miliseconds.
   * Default value: 0
   */
  spinButtonsInitialDelay?: number;
  /**
   * Sets or gets the position of the spin buttons.
   * Default value: right
   */
  spinButtonsPosition?: DateTimePickerSpinButtonsPosition;
  /**
   * Sets or gets the element's visual theme. 
   * Default value: ""
   */
  theme?: string;
  /**
   * Enables/Disabled the tooltip for the important dates in the calendar pop-up.
   * Default value: false
   */
  tooltip?: boolean;
  /**
   * Sets the delay of the calendar pop-up's tooltip before it appears.
   * Default value: 100
   */
  tooltipDelay?: number;
  /**
   * Sets the position of the tooltip in the calendar pop-up.
   * Default value: top
   */
  tooltipPosition?: TooltipPosition;
  /**
   * Sets a template for the content of the calendar pop-up's tooltip. Accepts the id of or a reference to an HTMLTemplateElement.
   * Default value: null
   */
  tooltipTemplate?: string | HTMLTemplateElement;
  /**
   * Sets or gets if the element can be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Determines the validation mechanism for the value by min/max.
   * Default value: strict
   */
  validation?: Validation;
  /**
   * Sets or gets the value. The value represents the current date/time that is set to the element as a DateTime object.
   * Default value: new JQX.Utilities.DateTime()
   */
  value?: any;
  /**
   * Enables/Disabled week numbering in the calendar pop-up. 
   * Default value: false
   */
  weekNumbers?: boolean;
  /**
   * Determines the number of visible weeks in the calendar pop-up.
   * Default value: 6
   */
  weeks?: number;
  /**
   * Determines the first year of a 100 year span within which 2-digit years fall. The default value, 1926, would interpret the 2-digit year values 26-99 as 1926 to 1999 and values 00-25 as being 2000 to 2025.
   * Default value: 1926
   */
  yearCutoff?: number;
  /** 
   * This event is triggered when the value is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The old value before it was changed presented as a DateTime object.
   *  value - The new value presented as a DateTime object.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the calendar pop-up is closed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the calendar pop-up is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the calendar pop-up is opened.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the calendar pop-up is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | null;
  /**
   * Closes the calendar pop-up.
   */
  close(): void;
  /**
   * Focuses the input.
   */
  focus(): void;
  /**
   * Opens the calendar pop-up.
   */
  open(): void;
  /**
   * Selects the text inside the input.
   */
  select(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-date-time-picker"): DateTimePicker;
			querySelector(selectors: "smart-date-time-picker"): DateTimePicker | null;	
			querySelectorAll(selectors: "smart-date-time-picker"): NodeListOf<DateTimePicker>;
			getElementsByTagName(qualifiedName: "smart-date-time-picker"): HTMLCollectionOf<DateTimePicker>;
			getElementsByName(elementName: "smart-date-time-picker"): NodeListOf<DateTimePicker>;	
    }
}

/**Determines the time zone to display the value in. */
export declare type DateTimePickerDisplayKind = 'UTC' | 'local' | 'unspecified';
/**Sets or gets the pop-up display mode (what components appear in it, and its behaviour). */
export declare type DateTimePickerDropDownDisplayMode = 'auto' | 'default' | 'classic' | 'calendar' | 'timePicker';
/**Determines how the the value can be edited inside the input. */
export declare type DateTimePickerEditMode = 'default' | 'full' | 'partial';
/**Sets or gets the position of the spin buttons. */
export declare type DateTimePickerSpinButtonsPosition = 'left' | 'right';
/**Determines the validation mechanism for the value by min/max. */
export declare type Validation = 'strict' | 'interaction';
/**
 DockingLayout enables the creation of complex layouts consisting of panels that can be floated, docked, nested, resized, pinned.
*/
export interface DockingLayout extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * A getter that returns an array of all DockingLayout items that are auto hidden inside the element.
   * Default value: 
   */
  autoHideItems?: any;
  /**
   * Enable/Disable the automatic state loading. There must be a previously saved state of the Layout in order to load it.
   * Default value: false
   */
  autoLoadState?: boolean;
  /**
   * Enable/Disable the automatic state saving. Note: In order to save the state of the element it must have an id.
   * Default value: false
   */
  autoSaveState?: boolean;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * If set to false it will disable the dragging of DockingLayout items. If set items can only be repositioned using the API methods.
   * Default value: true
   */
  draggable: boolean;
  /**
   * If set to false it will disable item floating. This means that if a Window is floated as a result of dragging it will be returned back ot it's original position instead of being floated outside the DockingLayout. Already floated LayoutPanel items will not be affected.
   * Default value: true
   */
  floatable?: boolean;
  /**
   * Hides all splitter bars inside the element.
   * Default value: false
   */
  hideSplitterBars?: boolean;
  /**
   * A getter that returns an array of all DockingLayout items that are docked inside the element.
   * Default value: 
   */
  items?: any;
  /**
   * A getter that returns an array of all DockingLayout items that have been closed.
   * Default value: 
   */
  closedItems?: any;
  /**
   * Determines the structure of the element. This property represents an array of objects that define the hierarchy of the items inside the element and their specific settings. Each object must have a type attribute that defines it's behavior.  Three types of objects are allowed:   LayoutGroup - Represents a group of items (Splitter). Used when the user wants more than one DockingLayout item in a single container.  Properties: orientation - A string value indicating the orientation of the Splitter group. Possible values: 'horizontal', 'vertical'. size - A string | number value indicating the size of the Splitter group. items - An array of LayoutPanel object definitions. resizeMode - A string indicating the resize mode. Possible values: 'none', 'adjacent', 'end', 'proportional'. resizeStep - A nummeric value that determines the step of resizing. liveResize - Determines if splitter resizing happens while dragging or not.   LayoutPanel - Represents a DockingLayout item (TabsWindow). LayoutPanels can have one or many items (TabItem).  Properties:   id - the ID of the LayoutPanel. autoHide - a boolean property that determines if the LayoutPanel is autoHidden. autoHidePosition - determines the autoHide position of the item if 'autoHide' property is set. Possible values: 'top', 'bottom', 'left', 'right'. dropPosition - Determines the possible positions for the item at which a new item can be dropped as a result of dragging. Possible values: 'top', 'bottom', 'left', 'right', 'center', 'header', 'layout-top', 'layout-bottom', 'layout-left', 'layout-right'. Positions with the 'layout' prefix reflect on LayoutPanelItems that are children of the LayoutPanel. label - the Label of the LayoutPanel window. tabPosition - Determines the position of the Tab labels inside the LayoutPanel. layout - determines the DockingLayout owner of the LayoutPanel. Accepts a string indicating the ID of a DockingLayout on the page or a direct reference to it. headerButtons - an Array of strings that define the buttons in the header section of the DockingLayout item. tabCloseButtons - a boolean property that Enables or disables the close buttons inside each Tab item label inside the DockingLayout item. tabOverflow - same as 'overflow' property of jqxTabs. It defines the overflow mode of the labels of the Tab items inside a DockingLayout item.selectionMode - the same as jqxTabs selection modes. Applies to Tab items inside a DockingLayout item. tabResize - the same as 'resize' property of jqxTabs. Allows resizing the Tab labels inside the DockingLayout item. locked - Locks the size of the item and does not allow resizing. max - sets the maximum size of the item. min - sets the minimum size of the item size - sets the size of the item. items - an array of objects. Each object defines the structure of a LayoutPanelItem.   LayoutPanelItem - Represents a LayoutPanel item (TabItem). Properties:  id - the ID of the Tab item. label - a string representing the label of the Tab item. content - represents the content of the Tab item. Can be anything. selected - determines if the item is selected. By default the first added item to the LayoutPanel is automatically selected. disableDrag - a boolean property that disables the dragging of the Tab item.    
   * Default value: 
   */
  layout?: any;
  /**
   * When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar.
   * Default value: false
   */
  liveResize?: boolean;
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
   *     "invalidNode": "' method accepts an instance of JQX.TabsWindow",
   *     "invalidNodeRemove": "' method accepts an instance of JQX.TabsWindow that is a child of the DockingLayout.",
   *     "invalidNodeType": "' requires a \"jqx-tabs-window\" element to be passed as an argument.",
   *     "invalidTargetNode": "' requires an index of an item that is not hidden/closed. Only visible items that are part of the Layout are valid.",
   *     "invalidIndex": "' method accepts an index of type number.",
   *     "noId": "jqxDockingLayout requires an id in order to save/load a state."
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
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the resize step during reisizing
   * Default value: 5
   */
  resizeStep?: number;
  /**
   * Determines the snap mode. Two modes are available:   simple - allows dragging of a single tab item inside or outside the layout. A semi-transparent highlighter is used to indicate the possible locations where the dragged item can be dropped. The user has to drop the dragged item inside one of the possible drop zones indicated by the highlighter. advanced - allows dragging of a whole TabsWindow with items or a single tab item. Uses a Visual Studio style feedback that indicates the possible drop locations. The user has to drop the target over one of the icons inside the feedback.   The feedback/highlighter is displayed when the dragging of an item begins. 
   * Default value: advanced
   */
  snapMode?: DockingLayoutSnapMode;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * A getter that returns an array of all DockingLayout items that have been undocked. Undocked items are no more part of the Layout's interal structure but can be inserted by dragging them in.
   * Default value: 
   */
  undockedItems?: any;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when the tab selection is changed. <strong>Note:</strong> Change event may be thrown by other JQX Custom Elements nested inside the Tab items.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a Tab item or a whole Tabs Window item ( DockingLayout item ) is closed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a Tab item/Tabs Window is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an item's position inside the Layout or it's size has been changed. Indicates that a state change has occured.
	* @param event. The custom event.    */
  onStateChange?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when item resizing begins.
	* @param event. The custom event.    */
  onResizeStart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when item resizing finishes.
	* @param event. The custom event.    */
  onResizeEnd?: ((this: any, ev: Event) => any) | null;
  /**
   * Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Bottom position inside the element. This means that the item will be positioned near the bottom side of the layout and it's content will be hidden until the user selects one of it's labels.
   * @param {HTMLElement | number | string} node. The "smart-tabs-window" or "smart-tab-item" node to append
   */
  autoHideBottom(node: HTMLElement | number | string): void;
  /**
   * Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Left position inside the layout. This means that the item will be positioned near the left side of the layout and it's content will be hidden until the user selects one of it's labels.
   * @param {HTMLElement | number | string} node. The "smart-tabs-window" or "smart-tab-item" node to append
   */
  autoHideLeft(node: HTMLElement | number | string): void;
  /**
   * Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Right position inside the layout. This means that the item will be positioned near the right side of the layout and it's content will be hidden until the user selects one of it's labels.
   * @param {HTMLElement | number | string} node. The "smart-tabs-window" or "smart-tab-item" node to append
   */
  autoHideRight(node: HTMLElement | number | string): void;
  /**
   * Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Top position inside the layout. This means that the item will be positioned near the top side of the layout and it's content will be hidden until the user selects one of it's labels.
   * @param {HTMLElement | number | string} node. The "smart-tabs-window" or "smart-tab-item" node to append
   */
  autoHideTop(node: HTMLElement | number | string): void;
  /**
   * Clears the localStorage of any previous cached state of the DockingLayout.
   */
  clearState(): void;
  /**
   * The method will reset an autohidden item to it's normal behavior and re-insert it at a specified position. It can also be used to insert items into the DockingLayout. <strong>Note:</strong> Items inserted via this method are added as a top level items.
   * @param {string | number | Node} node. An autohidden "smart-tabs-window" item instance or a new "smart-tabs-window" instance.
   * @returns {Node}
   */
  dock(node: string | number | Node): Node;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted before the target item which corresponds to the index passed as the first argument to the method.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertBeforeItem(index: number | HTMLElement | string, item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted after the target item which corresponds to the index passed as the first argument to the method.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertAfterItem(index: number | HTMLElement | string, item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's left neighbour horizontally.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertIntoLeft(index: number | HTMLElement | string, item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's right neighbour horizontally.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertIntoRight(index: number | HTMLElement | string, item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's top neighbour vertically.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertIntoTop(index: number | HTMLElement | string, item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's bottom neighbour vertically.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertIntoBottom(index: number | HTMLElement | string, item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the top side inside the Layout.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertLayoutTop(item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the bottom side inside the Layout.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertLayoutBottom(item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the left side inside the Layout.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertLayoutLeft(item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the right inside the Layout.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertLayoutRight(item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted above the target ( at position Top).
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertOutsideTargetGroupTop(index: number | HTMLElement | string, tabsWindow: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted bellow the target ( at position Bottom).
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertOutsideTargetGroupBottom(index: number | HTMLElement | string, tabsWindow: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted before the target ( at position Left).
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertOutsideTargetGroupLeft(index: number | HTMLElement | string, tabsWindow: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted after the target ( at position Right).
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertOutsideTargetGroupRight(index: number | HTMLElement | string, tabsWindow: any): void;
  /**
   * The method returns an array of all autohidden items.
   * @param {string} node?. Determines which auto hidden items to return ( vertical or horizontal ). If not set the method will return all autohidden items. Possible values: 'vertical', 'horizontal'.
   * @returns {any[]}
   */
  getAutoHideItems(node?: string): any[];
  /**
   * The method returns the index of a target item.
   * @param {HTMLElement} node. Returns the index of the target item.
   * @returns {number}
   */
  getIndex(node: HTMLElement): number;
  /**
   * Returns an array of objects representing the current structure of the element. Each object represents a Layout item with it's settings and hierarchy.
   * @param {boolean} noInstances?. Determines if the returned array will contain HTML references or not. When saving to localStorage the resulted array should not contain any HTMLElement references.
   * @returns {any[]}
   */
  getState(noInstances?: boolean): any[];
  /**
   * Returns the Splitter parent of a Layout item
   * @param {HTMLElement} item?. DockingLayout item
   * @returns {HTMLElement}
   */
  getItemGroupElement(item?: HTMLElement): HTMLElement;
  /**
   * Returns a JSON array of objects representing the current structure of the element. Ready to be persisted to LocalStorage.
   * @returns {any[]}
   */
  getJSONStructure(): any[];
  /**
   * Loads a previously saved state of the element. If no state is provided as an argument the method will do a localStorage lookup.
   * @param {any[]} state?. An array of objects that represents a cached state of the DockingLayout. The result of calling the 'saveState' method.
   */
  loadState(state?: any[]): void;
  /**
   * Removes a DockingLayout item (TabsWindow) from the element.
   * @param {number | HTMLElement | string} index. The index of the TabsWindow to remove or a reference to it.
   */
  removeAt(index: number | HTMLElement | string): void;
  /**
   * Removes all items from the element.
   */
  removeAll(): void;
  /**
   * Removes a "smart-tabs-window" node that is a DockingLayout item.
   * @param {Node} node. The "smart-tabs-window" node to remove.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Saves the current state of the DockingLayout to LocalStorage. The state includes the hierarchy and size of the items.
   */
  saveState(): void;
  /**
   * The method undocks/removes an item from the Layout and places it at the same position but it's no more part of the layout. The item becomes an 'outher' item that can be reinserted at any time.
   * @param {string | number | Node} node. A "smart-tabs-window" instance that is part of the DockingLayout.
   */
  undock(node: string | number | Node): void;
  /**
   * Updates a TabsWindow and it's contents.
   * @param {number | HTMLElement | string} index. The index of the TabsWindow to update.
   * @param {any} settings. An object that contains the new settings for the TabsWindow item. Settings object is the same as defining a new TabsWindow with the exception of 'items' array where the items are defined. In order to change the label or content of a Tab item the user has to specify the index of the target tab item.
   */
  update(index: number | HTMLElement | string, settings: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-docking-layout"): DockingLayout;
			querySelector(selectors: "smart-docking-layout"): DockingLayout | null;	
			querySelectorAll(selectors: "smart-docking-layout"): NodeListOf<DockingLayout>;
			getElementsByTagName(qualifiedName: "smart-docking-layout"): HTMLCollectionOf<DockingLayout>;
			getElementsByName(elementName: "smart-docking-layout"): NodeListOf<DockingLayout>;	
    }
}

/**Determines the snap mode. Two modes are available:   simple - allows dragging of a single tab item inside or outside the layout. A semi-transparent highlighter is used to indicate the possible locations where the dragged item can be dropped. The user has to drop the dragged item inside one of the possible drop zones indicated by the highlighter.
 advanced - allows dragging of a whole TabsWindow with items or a single tab item. Uses a Visual Studio style feedback that indicates the possible drop locations. The user has to drop the target over one of the icons inside the feedback.
  <br/> The feedback/highlighter is displayed when the dragging of an item begins.  */
export declare type DockingLayoutSnapMode = 'simple' | 'advanced';
/**
 DropDownButton displays any type of content like components, text, images, etc in a DropDown.
*/
export interface DropDownButton extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines the delay before the opened drop down closes when dropDownOpenMode is set to 'auto'.
   * Default value: 100
   */
  autoCloseDelay?: number;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets the parent container of the dropDown (the popup). Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown.
   * Default value: null
   */
  dropDownAppendTo?: any;
  /**
   * Determines the position of the drop down button.
   * Default value: right
   */
  dropDownButtonPosition?: DropDownButtonPosition;
  /**
   * Sets the height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: 
   */
  dropDownHeight?: string | number;
  /**
   * Sets the max height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: 
   */
  dropDownMaxHeight?: string | number;
  /**
   * Sets the max width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: 
   */
  dropDownMaxWidth?: string | number;
  /**
   * Sets the min height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: 
   */
  dropDownMinHeight?: string | number;
  /**
   * Sets the min width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: 
   */
  dropDownMinWidth?: string | number;
  /**
   * Determines how the drop down is going to open.
   * Default value: default
   */
  dropDownOpenMode?: DropDownOpenMode;
  /**
   * If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Sets a placeholder text to appear when there is no content inside the dropdown.
   * Default value: "No Items"
   */
  dropDownPlaceholder?: string;
  /**
   * Determines the vertical position of the dropDown. 'Auto' means its automatically determined depending on the viewport size.
   * Default value: auto
   */
  dropDownPosition?: DropDownPosition;
  /**
   * Sets the width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Sets additional helper text below the element. The hint is visible only when the element is focused.
   * Default value: ""
   */
  hint?: string;
  /**
   * Determines the visibility of the horizontal Scroll bar inside the drop down.
   * Default value: auto
   */
  horizontalScrollBarVisibility?: HorizontalScrollBarVisibility;
  /**
   * Sets a label above the element. The label is always visible.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
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
   *     "invalidNode": "."
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines whether the popup is opened or closed
   * Default value: false
   */
  opened?: boolean;
  /**
   * Determines the element's placeholder, displayed in the element's action button container.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Determines whether the resize indicator in the bottom right corner is visible or not.
   * Default value: false
   */
  resizeIndicator?: boolean;
  /**
   * Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down.
   * Default value: null
   */
  resizeMode?: ResizeMode;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Determines the visibility of the vertical scroll bar.
   * Default value: auto
   */
  verticalScrollBarVisibility?: VerticalScrollBarVisibility;
  /** 
   * This event is triggered when user clicks on the action button. The action button is visible when the <strong>placeholder</strong> is set.
	* @param event. The custom event.    */
  onActionButtonClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is closed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down list is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user clicks on the drop down button.
	* @param event. The custom event.    */
  onDropDownButtonClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is opened.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user starts resizing the drop down.
	* @param event. The custom event. Custom data event was created with: ev.detail(position)
   *  position - An object containing the current left and top positions of the drop down.
   */
  onResizeStart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user finishes resizing the drop down.
	* @param event. The custom event. Custom data event was created with: ev.detail(position)
   *  position - An object containing the current left and top positions of the drop down.
   */
  onResizeEnd?: ((this: any, ev: Event) => any) | null;
  /**
   * Appends a new HTML node to the drop down.
   * @param {Node} node. The node to be appended
   * @returns {Node}
   */
  appendChild<T extends Node>(node: Node): T;
  /**
   * Closes the dropDown.
   */
  close(): void;
  /**
   * Opens the dropDown.
   */
  open(): void;
  /**
   * Removes everything from the drop down.
   */
  removeAll(): void;
  /**
   * Removes a child node from the drop down.
   * @param {Node} node. The node to remove.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Scrolls the drop down to a specific position.
   * @param {number} top. Y axis coordinate
   * @param {number} left. X axis coordinate
   */
  scrollTo(top: number, left: number): void;
   scrollTo(options?: ScrollToOptions): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-drop-down-button"): DropDownButton;
			querySelector(selectors: "smart-drop-down-button"): DropDownButton | null;	
			querySelectorAll(selectors: "smart-drop-down-button"): NodeListOf<DropDownButton>;
			getElementsByTagName(qualifiedName: "smart-drop-down-button"): HTMLCollectionOf<DropDownButton>;
			getElementsByName(elementName: "smart-drop-down-button"): NodeListOf<DropDownButton>;	
    }
}

/**
 The DropDownList is a form component that lets you choose a single predefined value from a list. It is a more advanced version of the 'select' tag.
*/
export interface DropDownList extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Used only when dropDownOpenMode is set to 'auto'. Determines the delay before the opened drop down closes if the pointer is not over the element.
   * Default value: 100
   */
  autoCloseDelay?: number;
  /**
   * Determines the data source that will be loaded to the DropDownList. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value, group. It can also be a callback that returns an Array of items as previously described.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines whether an indicator will appear during filtering and remote item loading.
   * Default value: false
   */
  displayLoadingIndicator?: boolean;
  /**
   * Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property.
   * Default value: """"
   */
  displayMember?: string;
  /**
   * Determines the drop down parent. The drop down can be removed from the body of the element and continue to work in another container. This is usefull when one of the parents of the element doesn't allow overflowing, by settings this property to 'body' the drop down will be appended to the DOM and the popup will open/close as usual. dropDownAppendTo can be a string representing the id of an HTML element on the page or a direct reference to that element. Reseting it back to null will take the drop down back to it's original place.
   * Default value: null
   */
  dropDownAppendTo?: any;
  /**
   * Determines the position of the drop down button.
   * Default value: right
   */
  dropDownButtonPosition?: DropDownButtonPosition;
  /**
   * Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownHeight?: string | number;
  /**
   * Sets the maximum Height of the drop down. By default it's set to an empty string. In this case the maxHeight of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMaxHeight?: string | number;
  /**
   * Sets the maximum Width of the drop down. By default it's set to an empty string. In this case the maxWidth of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMaxWidth?: string | number;
  /**
   * Sets the minimum Height of the drop down. By default it's set to an empty string. In this case the minHeight of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMinHeight?: string | number;
  /**
   * Sets the minimum Width of the drop down. By default it's set to an empty string. In this case the minWidth of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMinWidth?: string | number;
  /**
   * Determines how the drop down is going to open.
   * Default value: default
   */
  dropDownOpenMode?: DropDownOpenMode;
  /**
   * If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. The purpose of the overlay is to make sure that clicking anywhere outside the popup will will target the overlay and not the DOM.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Determines the placeholder for the drop down list when it's empty.
   * Default value: "No Items"
   */
  dropDownPlaceholder?: string;
  /**
   * Determines the position of the drop down when opened.
   * Default value: auto
   */
  dropDownPosition?: DropDownPosition;
  /**
   * Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Determines whether filtering is enabled.
   * Default value: false
   */
  filterable?: boolean;
  /**
   * Determines the placeholder for the filter input inside the drop down that is only visible when filterable is enabled.
   * Default value: ""
   */
  filterInputPlaceholder?: string;
  /**
   * Determines the filtering mode of the drop down list.
   * Default value: startsWithIgnoreCase
   */
  filterMode?: FilterMode;
  /**
   * If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups.
   * Default value: false
   */
  grouped?: boolean;
  /**
   * Determines which attribute from the dataSource object will be used as the group member for the items. If not set, by default 'group' property is used from the source object. groupMember is especially usefull when loading the data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used to group the items.
   * Default value: null
   */
  groupMember?: string | null;
  /**
   * Sets additional helper text below the element. The hint is visible only when the element is focused.
   * Default value: ""
   */
  hint?: string;
  /**
   * Determines the visibility of the horizontal Scroll bar inside the drop down.
   * Default value: auto
   */
  horizontalScrollBarVisibility?: HorizontalScrollBarVisibility;
  /**
   * Represents the property name of a List item. Determines the value of the input when a ListItem is selected. Usefull in cases where the user wants to display for example the value of an item instead of it's label. By default the label is displayed in the input.
   * Default value: ""
   */
  inputMember?: string;
  /**
   * IncrementalSearchDelay property specifies the time-interval in milliseconds until the previous search query is cleared. The timer starts when the user stops typing. A new query can be started only when the delay has passed.
   * Default value: 700
   */
  incrementalSearchDelay?: number;
  /**
   * Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the drop down is focused starts the incremental search.
   * Default value: startsWithIgnoreCase
   */
  incrementalSearchMode?: SearchMode;
  /**
   * Sets the height for all list items. Used only when virtualization is enabled.
   * Default value: null
   */
  itemHeight?: number | null;
  /**
   * Determines the item width measuring algorithm.
   * Default value: auto
   */
  itemMeasureMode?: ListItemMeasureMode;
  /**
   * A getter that returns an array of all List items inside the drop down.
   * Default value: 
   */
  items?: any;
  /**
   * The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference. It's used to set a customize the content of the list items.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Sets a little text label above the element.
   * Default value: ""
   */
  label?: string;
  /**
   * Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom.
   * Default value: "Loading..."
   */
  loadingIndicatorPlaceholder?: string;
  /**
   * Determines the position of the loading indicator.
   * Default value: center
   */
  loadingIndicatorPosition?: VerticalAlignment;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
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
   *     "invalidNode": "."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * Determines whether the popup is opened or not.
   * Default value: false
   */
  opened?: boolean;
  /**
   * Determines the element's placeholder, displayed in the element's selection field.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines whether the resize indicator in the bottom right corner of the drop down is visible or not. This property is used in conjunction with resizeMode.
   * Default value: false
   */
  resizeIndicator?: boolean;
  /**
   * Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down.
   * Default value: none
   */
  resizeMode?: ResizeMode;
  /**
   * Determines what will be displayed in the dropDown selection field.
   * Default value: plain
   */
  selectionDisplayMode?: SelectionDisplayMode;
  /**
   * Sets or gets the selected indexes. Selected indexes represents an array of the indexes of the items that should be selected.
   * Default value: 
   */
  selectedIndexes?: number[];
  /**
   * Sets or gets elected indexes. Selected values represents the values of the items that should be selected.
   * Default value: 
   */
  selectedValues?: string[];
  /**
   * Determines how many items can be selected.
   * Default value: one
   */
  selectionMode?: ListSelectionMode;
  /**
   * Determines whether the items are sorted alphabetically or not
   * Default value: false
   */
  sorted?: boolean;
  /**
   * Determines sorting direction - ascending(asc) or descending(desc)
   * Default value: "asc"
   */
  sortDirection?: string;
  /**
   * Determines the theme for the element. Themes define the look of the elements.
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets a custom template for the content of the tokens when selectionDisplayMode is set to 'tokens'.
   * Default value: null
   */
  tokenTemplate?: any;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the value. Returns the selection. Return type: {label: string, value: any}[].
   * Default value: null
   */
  value?: any;
  /**
   * Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items.
   * Default value: """"
   */
  valueMember?: string;
  /**
   * Determines the visibility of the vertical scroll bar.
   * Default value: auto
   */
  verticalScrollBarVisibility?: VerticalScrollBarVisibility;
  /**
   * Determines weather or not Virtualization is used. Virtualization allows a huge amount of items to be loaded to the drop down while preserving the performance. For example a milion items can be loaded.
   * Default value: false
   */
  virtualized?: boolean;
  /** 
   * This event is triggered when user clicks on the action button. The action button is only visible when dropDownOpenMode is set to 'dropDownbutton'.
	* @param event. The custom event.    */
  onActionButtonClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the selection is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(addedItems, disabled, index, label, removedItems, selected, value)
   *  addedItems - An array of List items that have been selected.
   *  disabled - A flag indicating whether or not the item that caused the change event is disabled.
   *  index - The index of the List item that triggered the event.
   *  label - The label of the List item that triggered the event.
   *  removedItems - An array of List items that have been unselected before the event was fired.
   *  selected - The selected state of the List item that triggered the event. If an item was selected the value will be true and vice versa.
   *  value - The value of the List item that triggered the event.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down list is closed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down list is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user clicks on the drop down button.
	* @param event. The custom event.    */
  onDropDownButtonClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an item is clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(disabled, index, label, selected, value)
   *  disabled - Indicates whether the List item that was clicked is disabled or not.
   *  index - Indicates the index of the List item that was clicked.
   *  label - The label of the List item that was clicked.
   *  selected - Indicates whether the List item that was clicked is selected or not.
   *  value - The value of the List item that was clicked.
   */
  onItemClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down list is opened.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down list is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user starts resizing the drop down.
	* @param event. The custom event. Custom data event was created with: ev.detail(position)
   *  position - An object containing the current left and top positions of the drop down.
   */
  onResizeStart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the resizing of the drop down is finished.
	* @param event. The custom event. Custom data event was created with: ev.detail(position)
   *  position - An object containing the current left and top positions of the drop down.
   */
  onResizeEnd?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user scrolls to the end of the dropDown list.
	* @param event. The custom event.    */
  onScrollBottomReached?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user scrolls to the start of the dropDown list.
	* @param event. The custom event.    */
  onScrollTopReached?: ((this: any, ev: Event) => any) | null;
  /**
   * Appends a ListItem to the end of the list of items inside element.
   * @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
   * @returns {Node}
   */
  appendChild<T extends Node>(node: Node): T;
  /**
   * Removes all items from the drop down list.
   */
  clearItems(): void;
  /**
   * Unselects all items.
   */
  clearSelection(): void;
  /**
   * Closes the dropDown list.
   */
  close(): void;
  /**
   * Ensures the desired item is visible by scrolling to it.
   * @param {HTMLElement | string} item. A list item or value of the desired item to be visible.
   */
  ensureVisible(item: HTMLElement | string): void;
  /**
   * Returns an item instance from the dropDown list.
   * @param {string} value. The value of an item from the drop down list.
   * @returns {HTMLElement}
   */
  getItem(value: string): HTMLElement;
  /**
   * Inserts a new item at a specified position.
   * @param {number} position. The position where the item must be inserted.
   * @param {any} value. The value of the new item.
   */
  insert(position: number, value: any): void;
  /**
   * Inserts a new ListItem before another in the list.
   * @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
   * @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
   * @returns {Node}
   */
  insertBefore<T extends Node>(node: Node, referenceNode: Node | null): T;
  /**
   * Opens the dropDown list.
   */
  open(): void;
  /**
   * Removes an item at a specified position.
   * @param {number} position. The position of the removed item.
   */
  removeAt(position: number): void;
  /**
   * Removes a ListItem from the list of items inside element.
   * @param {Node} node. A ListItem element that is part of the list of items inside the element.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Selects an item from the dropDown list. 
   * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
   */
  select(item: string | HTMLElement): void;
  /**
   * Unselects an item from the dropDown list. 
   * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
   */
  unselect(item: string | HTMLElement): void;
  /**
   * Updates an item from the dropDown list.
   * @param {number} position. The position where the item must be updated.
   * @param {any} value. The value of the updated item.
   */
  update(position: number, value: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-drop-down-list"): DropDownList;
			querySelector(selectors: "smart-drop-down-list"): DropDownList | null;	
			querySelectorAll(selectors: "smart-drop-down-list"): NodeListOf<DropDownList>;
			getElementsByTagName(qualifiedName: "smart-drop-down-list"): HTMLCollectionOf<DropDownList>;
			getElementsByName(elementName: "smart-drop-down-list"): NodeListOf<DropDownList>;	
    }
}


declare global {
    interface Window {
        Smart: any;
		NG: any;
    }
}

export interface BaseElement extends HTMLElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Enables or disables the accordion. Disabled elements can not be interacted with.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Returns true when the rendering is completed. Otherwise returns false
   * Default value: false
   */
  isRendered?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
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
   *     "accordionItemRequired": "' requires an item from type \"jqx-accordion-item\".",
   *     "indexOutOfBound": "' method.",
   *     "invalidSettings": "' method accepts a string or an object as it's second parameter.",
   *     "noItems": ": No child elements found.",
   *     "overridingProperties": "' property is used by default."
   *   }
   * }
   */
  messages?: any;
  /**
   * Callback called when the element is attached to the DOM.
   * Default value: null
   */
  onAttached?: any;
  /**
   * Callback called when the element is detached from the DOM.
   * Default value: null
   */
  onDetached?: any;
  /**
   * Callback called when the element is created.
   * Default value: null
   */
  onCreated?: any;
  /**
   * Callback called when the element is attached to the DOM for first time. It can be used for property initialization. 
   * Default value: null
   */
  onReady?: any;
  /**
   * Callback called when the element is rendered. 
   * Default value: null
   */
  onRender?: any;
  /**
   * Determines if the element is readonly or not. If the element true, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Determines whether the element is automatically rendered or is rendered after calling the render method.
   * Default value: auto
   */
  renderMode?: ElementRenderMode;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Determines whether the element can be focused or not.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when the element is resized.
	* @param event. The custom event.    */
  onResize: ((ev: Event) => any) | null;
  /** 
   * This event is triggered when a style which affects the layout of the element is changed is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(styleProperties)
   *  styleProperties - Array with changed style properties.
   */
  onStyleChanged?: ((this: any, ev: Event) => any) | null;
  /**
   * Unwatches the element.
   */
  unwatch(): void;
  /**
   * Renders the element.
   */
  render(): void;
  /**
   * Watch for property changes.
   * @param {any[]} properties. Properties array to watch for changes.
   * @param {any} propertyChangedCallback. function(propertyName: string, oldValue: any, newValue: any)
   */
  watch(properties: any[], propertyChangedCallback: any): void;
  /**
   * Notifies with a callback function, when the rendering is completed.
   * @param {any} renderCallback. Callback which is called, when the rendering is completed.
   */
  whenRendered(renderCallback: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-element"): Element;
			querySelector(selectors: "smart-element"): Element | null;	
			querySelectorAll(selectors: "smart-element"): NodeListOf<Element>;
			getElementsByTagName(qualifiedName: "smart-element"): HTMLCollectionOf<Element>;
			getElementsByName(elementName: "smart-element"): NodeListOf<Element>;	
    }
}

/**Determines whether the element is automatically rendered or is rendered after calling the render method. */
export declare type ElementRenderMode = 'auto' | 'manual';
/**
 FileUpload provides an easy and integrated way for users to upload multiple files.
*/
export interface FileUpload extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the file types that can be submitted to the server via the element. This property corresponds to the 'accept' attribute of the hidden file input which is submitted to the URL specified by the uploadUrl property.
   * Default value: null
   */
  accept?: string | null;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Appends the list with selected files to a new custom container specified by the user. If the value of the property is a string it must represent a valid id of an HTML element inside the DOM that will be used as the new container for the uploaded files list.
   * Default value: null
   */
  appendTo?: any;
  /**
   * Sets or gets whether files will be automatically uploaded after selection.
   * Default value: false
   */
  autoUpload?: boolean;
  /**
   * Allows to upload a directory. Files in all subfolders will be uploaded also. This option is supported only in Firefox and Chrome.
   * Default value: false
   */
  directory?: boolean;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Defines a custom container that will be used as the new drop zone for file uploads. The dropped files will be added in the fileUpload's list. If 'dropZone' property set to true, the default drop zone inside the element will be used instead. If set to certain id of an HTML element inside the DOM then it will be used as the drop zone.
   * Default value: null
   */
  dropZone?: any;
  /**
   * Hides the footer element and it's contents (Upload All, Pause All and Close All buttons).
   * Default value: false
   */
  hideFooter?: boolean;
  /**
   * Applies a custom template to the file items that represent the uploaded files.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Sets the various text values used in the widget. Useful for localization. The localization object has the following fields: browse, pauseFile, cancelFile, uploadFile, pauseAll, cancelAll, uploadAll. It's recommended these messages to be set before element's initialization.
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
   *     "browse": "Browse",
   *     "uploadFile": "Upload File",
   *     "cancelFile": "Cancel File",
   *     "pauseFile": "Pause File",
   *     "uploadAll": "Upload All",
   *     "cancelAll": "Cancel All",
   *     "pauseAll": "Pause All",
   *     "totalFiles": "Total files: ",
   *     "connectionError": ": File Upload requires connection to the server.",
   *     "wrongItemIndex": ": There is no file with such an index in the list of uploaded files.",
   *     "tooLongFileName": ": File name is too long."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets whether multiple item uploads are allowed.
   * Default value: false
   */
  multiple?: boolean;
  /**
   * Sets or gets the name attribute of the hidden file input which is submitted to the URL specified by the uploadUrl property.
   * Default value: ""
   */
  name?: string;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Callback that can used to handle various server responses and error codes.
   * Default value: null
   */
  responseHandler?: any;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Callback function, used to change the headers of the file upload's XHR request.
   * Default value: null
   */
  setHeaders?: any;
  /**
   * Displays a progress bar at the bottom of each uploaded item to show the progress of the uploading process.
   * Default value: false
   */
  showProgress?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or gets the upload URL. This property corresponds to the upload form's action attribute. For example, the uploadUrl property can point to a PHP file, which handles the upload operation on the server-side.
   * Default value: ""
   */
  uploadUrl?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Callback used to validate the files immediatelly after their selection. Retuns a boolean value. If the returned value is false, the file is removed from list and a 'validationError is fired.
   * Default value: null
   */
  validateFile?: any;
  /** 
   * This event is triggered when a file has been selected.
	* @param event. The custom event. Custom data event was created with: ev.detail(filename, type, size, index)
   *  filename - The name of the selected file.
   *  type - The type of the selected file.
   *  size - The size of the selected file.
   *  index - The index of the selected file.
   */
  onFileSelected?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a file upload operation is canceled.
	* @param event. The custom event. Custom data event was created with: ev.detail(filename, type, size, index)
   *  filename - The name of the canceled file.
   *  type - The type of the canceled file.
   *  size - The size of the canceled file.
   *  index - The index of the canceled file.
   */
  onUploadCanceled?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a file upload operation is completed.
	* @param event. The custom event. Custom data event was created with: ev.detail(filename, type, size, index, status)
   *  filename - The name of the canceled file.
   *  type - The type of the canceled file.
   *  size - The size of the canceled file.
   *  index - The index of the canceled file.
   *  status - The status of the uploaded file. Whether there was an error or success.
   */
  onUploadCompleted?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when during the file upload process something happens and upload fails.
	* @param event. The custom event. Custom data event was created with: ev.detail(filename, type, size, index, status)
   *  filename - The name of the canceled file.
   *  type - The type of the canceled file.
   *  size - The size of the canceled file.
   *  index - The index of the canceled file.
   *  status - The status of the uploaded file. Whether there was an error or success.
   */
  onUploadError?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a file upload operation is paused.
	* @param event. The custom event. Custom data event was created with: ev.detail(filename, type, size, index)
   *  filename - The name of the paused file.
   *  type - The type of the paused file.
   *  size - The size of the paused file.
   *  index - The index of the paused file.
   */
  onUploadPaused?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a file upload operation is started.
	* @param event. The custom event. Custom data event was created with: ev.detail(filename, type, size, index)
   *  filename - The name of the file that is being uploaded.
   *  type - The type of the file that is being uploaded.
   *  size - The size of the file that is being uploaded.
   *  index - The index of the file that is being uploaded.
   */
  onUploadStarted?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered if the validation of a user defined 'validateFile' callback fails.
	* @param event. The custom event. Custom data event was created with: ev.detail(filename, type, size)
   *  filename - The name of the file which validation has failed.
   *  type - The type of the file which validation has failed.
   *  size - The size of the file which validation has failed.
   */
  onValidationError?: ((this: any, ev: Event) => any) | null;
  /**
   * Opens a popup to browse for a file.
   */
  browse(): void;
  /**
   * Cancels all selected files. The files are removed from the list and their uploading is prevented.
   */
  cancelAll(): void;
  /**
   * Cancels a selected file. The file is removed from the file list and it's uploading is prevented.
   * @param {number} index. Index of the file which will be canceled.
   */
  cancelFile(index: number): void;
  /**
   * Pauses the uploading of all files. File upload is prevented but the files remain in the file list.
   */
  pauseAll(): void;
  /**
   * Pauses upload of a file with particular index. File upload is prevented but file ramains in the file list.
   * @param {number} id. Index of the file which will be paused.
   */
  pauseFile(id: number): void;
  /**
   * Uploads all selected files.
   */
  uploadAll(): void;
  /**
   * Uploads a selected file.
   * @param {number} id. Index of the file which will be uploaded.
   */
  uploadFile(id: number): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-file-upload"): FileUpload;
			querySelector(selectors: "smart-file-upload"): FileUpload | null;	
			querySelectorAll(selectors: "smart-file-upload"): NodeListOf<FileUpload>;
			getElementsByTagName(qualifiedName: "smart-file-upload"): HTMLCollectionOf<FileUpload>;
			getElementsByName(elementName: "smart-file-upload"): NodeListOf<FileUpload>;	
    }
}

/**
 FilterBuilder allows you to dynamically build filters.
*/
export interface FilterBuilder extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Adds more operations, that can be used in the filter bilder's conditions structure.
   * Default value: 
   */
  customOperations?: {name: string, caption: string, icon: string}[];
  /**
   * Enables or disables the context menu.
   * Default value: false
   */
  disableContextMenu?: boolean;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Array with filtered fields and their settings.
   * Default value: null
   */
  fields?: any;
  /**
   * Sets or gets the format string of the editor of fields with type 'date'.
   * Default value: "dd-MMM-yy"
   */
  formatStringDate?: string;
  /**
   * Sets or gets the format string of the editor of fields with type 'datetime'.
   * Default value: "dd-MMM-yy HH:mm:ss"
   */
  formatStringDateTime?: string;
  /**
   * Sets hint in form of popup message.
   * Default value: "null"
   */
  hint?: string;
  /**
   * Defines icon's representatino as characters.
   * Default value: { '=': '=', '<>': '<>', '>': '>', '>=': '>=', '<': '<', '<=': '<=', 'startswith': 'a|bc', 'endswith': 'ab|c', 'contains': 'abc', 'notcontains': '!abc', 'isblank': 'o', 'isnotblank': '*'}
   */
  icons?: FilterBuilderIcons;
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
   * Defines maximum number of allowed conditions in the element.
   * Default value: null
   */
  maxConditions?: number | null;
  /**
   * Defines maximum number of allowed conditions in group.
   * Default value: null
   */
  maxConditionsPerGroup?: number | null;
  /**
   * Defines maximum level of grouping in the FilterBuilder.
   * Default value: null
   */
  maxLevel?: number | null;
  /**
   * Defines field names of the filtered element.
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
   *     "addCondition": "Add Condition",
   *     "addGroup": "Add Group",
   *     "and": "And",
   *     "notand": "Not And",
   *     "or": "Or",
   *     "notor": "Not Or",
   *     "=": "Equals",
   *     "<>": "Does not equal",
   *     ">": "Greater than",
   *     ">=": "Greater than or equal to",
   *     "<": "Less than",
   *     "<=": "Less than or equal to",
   *     "startswith": "Starts with",
   *     "endswith": "Ends with",
   *     "contains": "Contains",
   *     "notcontains": "Does not contain",
   *     "isblank": "Is blank",
   *     "isnotblank": "Is not blank",
   *     "wrongParentGroupIndex": "' method.",
   *     "missingFields": ": Fields are required for proper condition's adding. Set \"fields\" source and then conditions will be added as expected.",
   *     "wrongElementNode": "' method.",
   *     "invalidDataStructure": ": Used invalid data structure in updateCondition/updateGroup method."
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
   * In restrictedMode set to true, adding of new groups and groups editing by user interaction are denied.
   * Default value: false
   */
  restrictedMode?: boolean;
  /**
   * Enables or disables the display of the icons.
   * Default value: false
   */
  showIcons?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * The value is represented by multidimensional array. The array contains group operators and conditions. Each group can contain nested structures at multiple levels.
   * Default value: or
   */
  value?: string[];
  /**
   * Callback used to format the content of the value fields.
   * Default value: null
   */
  valueFormatFunction?: any;
  /**
   * Sets the placeholder text used in the condition's value box in case the value is not set.
   * Default value: "&lt;enter a value&gt;"
   */
  valuePlaceholder?: string;
  /** 
   * This event is triggered when the element's value is changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an editor is closed.
	* @param event. The custom event.    */
  onEditorClose?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an editor starts to close.
	* @param event. The custom event.    */
  onEditorClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an editor is opened.
	* @param event. The custom event.    */
  onEditorOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an editor starts to open.
	* @param event. The custom event.    */
  onEditorOpening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when some of the filterbuilder's building blocks is clicked.
	* @param event. The custom event.    */
  onItemClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the built-in menu is opened. If the <strong>disableContextMenu</strong> property is set to true this event is not fired.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the built-in menu starts to open. If the <strong>disableContextMenu</strong> property is set to true this event is not fired.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the built-in menu is closed. If the <strong>disableContextMenu</strong> property is set to true this event is not fired.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the built-in menu  starts to close. If the <strong>disableContextMenu</strong> property is set to true this event is not fired.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /**
   * Adds new condition in particular group. 
   * @param {string | HTMLElement} parentGroup. A string, representing the id of the item or an HTML Element referencing this condition.
   * @param {any[]} data. An array, representing condition. Condition's element's role is related to their position in the condition's array. At index 0 - field name, index 1 - condition's opertor, index 2 - condition's value.
   */
  addCondition(parentGroup: string | HTMLElement, data: any[]): void;
  /**
   * Adds new group in particular parent group.
   * @param {string | HTMLElement} parentGroup. A string, representing the id of the item or an HTML Element referencing this group.
   * @param {string} data. A string, representing the group operator.
   */
  addGroup(parentGroup: string | HTMLElement, data: string): void;
  /**
   * Removes condition.
   * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this condition.
   */
  removeCondition(item: string | HTMLElement): void;
  /**
   * Deletes group and all of  it's children
   * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this group.
   */
  removeGroup(item: string | HTMLElement): void;
  /**
   * Returns a string representation of the filter builder's value.
   * @param {boolean} useLabels?. Controls the way of string representation. In mode without labels the value object is stringified only.
   * @returns {string}
   */
  toString(useLabels?: boolean): string;
  /**
   * Updates condition.
   * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing targeted condition.
   * @param {any[]} data. An array, representing condition. Condition's element's role is related to their position in the condition's array. At index 0 - field name, index 1 - condition's opertor, index 2 - condition's value.
   */
  updateCondition(item: string | HTMLElement, data: any[]): void;
  /**
   * Updates group
   * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this group.
   * @param {string} data. A string, representing the group operator.
   */
  updateGroup(item: string | HTMLElement, data: string): void;
}

/**Defines icon's representatino as characters. */
export interface FilterBuilderIcons {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * 
   * Default value: undefined
   */
  0?: any;
  /**
   * 
   * Default value: undefined
   */
  1?: any;
  /**
   * 
   * Default value: undefined
   */
  2?: any;
  /**
   * 
   * Default value: undefined
   */
  3?: any;
  /**
   * 
   * Default value: undefined
   */
  4?: any;
  /**
   * 
   * Default value: undefined
   */
  5?: any;
  /**
   * 
   * Default value: undefined
   */
  6?: any;
  /**
   * 
   * Default value: undefined
   */
  7?: any;
  /**
   * 
   * Default value: undefined
   */
  8?: any;
  /**
   * 
   * Default value: undefined
   */
  9?: any;
  /**
   * 
   * Default value: undefined
   */
  10?: any;
  /**
   * 
   * Default value: undefined
   */
  11?: any;
  /**
   * 
   * Default value: undefined
   */
  12?: any;
  /**
   * 
   * Default value: undefined
   */
  13?: any;
  /**
   * 
   * Default value: undefined
   */
  14?: any;
  /**
   * 
   * Default value: undefined
   */
  15?: any;
  /**
   * 
   * Default value: undefined
   */
  16?: any;
  /**
   * 
   * Default value: undefined
   */
  17?: any;
  /**
   * 
   * Default value: undefined
   */
  18?: any;
  /**
   * 
   * Default value: undefined
   */
  19?: any;
  /**
   * 
   * Default value: undefined
   */
  20?: any;
  /**
   * 
   * Default value: undefined
   */
  21?: any;
  /**
   * 
   * Default value: undefined
   */
  22?: any;
  /**
   * 
   * Default value: undefined
   */
  23?: any;
  /**
   * 
   * Default value: undefined
   */
  24?: any;
  /**
   * 
   * Default value: undefined
   */
  25?: any;
  /**
   * 
   * Default value: undefined
   */
  26?: any;
  /**
   * 
   * Default value: undefined
   */
  27?: any;
  /**
   * 
   * Default value: undefined
   */
  28?: any;
  /**
   * 
   * Default value: undefined
   */
  29?: any;
  /**
   * 
   * Default value: undefined
   */
  30?: any;
  /**
   * 
   * Default value: undefined
   */
  31?: any;
  /**
   * 
   * Default value: undefined
   */
  32?: any;
  /**
   * 
   * Default value: undefined
   */
  33?: any;
  /**
   * 
   * Default value: undefined
   */
  34?: any;
  /**
   * 
   * Default value: undefined
   */
  35?: any;
  /**
   * 
   * Default value: undefined
   */
  36?: any;
  /**
   * 
   * Default value: undefined
   */
  37?: any;
  /**
   * 
   * Default value: undefined
   */
  38?: any;
  /**
   * 
   * Default value: undefined
   */
  39?: any;
  /**
   * 
   * Default value: undefined
   */
  40?: any;
  /**
   * 
   * Default value: undefined
   */
  41?: any;
  /**
   * 
   * Default value: undefined
   */
  42?: any;
  /**
   * 
   * Default value: undefined
   */
  43?: any;
  /**
   * 
   * Default value: undefined
   */
  44?: any;
  /**
   * 
   * Default value: undefined
   */
  45?: any;
  /**
   * 
   * Default value: undefined
   */
  46?: any;
  /**
   * 
   * Default value: undefined
   */
  47?: any;
  /**
   * 
   * Default value: undefined
   */
  48?: any;
  /**
   * 
   * Default value: undefined
   */
  49?: any;
  /**
   * 
   * Default value: undefined
   */
  50?: any;
  /**
   * 
   * Default value: undefined
   */
  51?: any;
  /**
   * 
   * Default value: undefined
   */
  52?: any;
  /**
   * 
   * Default value: undefined
   */
  53?: any;
  /**
   * 
   * Default value: undefined
   */
  54?: any;
  /**
   * 
   * Default value: undefined
   */
  55?: any;
  /**
   * 
   * Default value: undefined
   */
  56?: any;
  /**
   * 
   * Default value: undefined
   */
  57?: any;
  /**
   * 
   * Default value: undefined
   */
  58?: any;
  /**
   * 
   * Default value: undefined
   */
  59?: any;
  /**
   * 
   * Default value: undefined
   */
  60?: any;
  /**
   * 
   * Default value: undefined
   */
  61?: any;
  /**
   * 
   * Default value: undefined
   */
  62?: any;
  /**
   * 
   * Default value: undefined
   */
  63?: any;
  /**
   * 
   * Default value: undefined
   */
  64?: any;
  /**
   * 
   * Default value: undefined
   */
  65?: any;
  /**
   * 
   * Default value: undefined
   */
  66?: any;
  /**
   * 
   * Default value: undefined
   */
  67?: any;
  /**
   * 
   * Default value: undefined
   */
  68?: any;
  /**
   * 
   * Default value: undefined
   */
  69?: any;
  /**
   * 
   * Default value: undefined
   */
  70?: any;
  /**
   * 
   * Default value: undefined
   */
  71?: any;
  /**
   * 
   * Default value: undefined
   */
  72?: any;
  /**
   * 
   * Default value: undefined
   */
  73?: any;
  /**
   * 
   * Default value: undefined
   */
  74?: any;
  /**
   * 
   * Default value: undefined
   */
  75?: any;
  /**
   * 
   * Default value: undefined
   */
  76?: any;
  /**
   * 
   * Default value: undefined
   */
  77?: any;
  /**
   * 
   * Default value: undefined
   */
  78?: any;
  /**
   * 
   * Default value: undefined
   */
  79?: any;
  /**
   * 
   * Default value: undefined
   */
  80?: any;
  /**
   * 
   * Default value: undefined
   */
  81?: any;
  /**
   * 
   * Default value: undefined
   */
  82?: any;
  /**
   * 
   * Default value: undefined
   */
  83?: any;
  /**
   * 
   * Default value: undefined
   */
  84?: any;
  /**
   * 
   * Default value: undefined
   */
  85?: any;
  /**
   * 
   * Default value: undefined
   */
  86?: any;
  /**
   * 
   * Default value: undefined
   */
  87?: any;
  /**
   * 
   * Default value: undefined
   */
  88?: any;
  /**
   * 
   * Default value: undefined
   */
  89?: any;
  /**
   * 
   * Default value: undefined
   */
  90?: any;
  /**
   * 
   * Default value: undefined
   */
  91?: any;
  /**
   * 
   * Default value: undefined
   */
  92?: any;
  /**
   * 
   * Default value: undefined
   */
  93?: any;
  /**
   * 
   * Default value: undefined
   */
  94?: any;
  /**
   * 
   * Default value: undefined
   */
  95?: any;
  /**
   * 
   * Default value: undefined
   */
  96?: any;
  /**
   * 
   * Default value: undefined
   */
  97?: any;
  /**
   * 
   * Default value: undefined
   */
  98?: any;
  /**
   * 
   * Default value: undefined
   */
  99?: any;
  /**
   * 
   * Default value: undefined
   */
  100?: any;
  /**
   * 
   * Default value: undefined
   */
  101?: any;
  /**
   * 
   * Default value: undefined
   */
  102?: any;
  /**
   * 
   * Default value: undefined
   */
  103?: any;
  /**
   * 
   * Default value: undefined
   */
  104?: any;
  /**
   * 
   * Default value: undefined
   */
  105?: any;
  /**
   * 
   * Default value: undefined
   */
  106?: any;
  /**
   * 
   * Default value: undefined
   */
  107?: any;
  /**
   * 
   * Default value: undefined
   */
  108?: any;
  /**
   * 
   * Default value: undefined
   */
  109?: any;
  /**
   * 
   * Default value: undefined
   */
  110?: any;
  /**
   * 
   * Default value: undefined
   */
  111?: any;
  /**
   * 
   * Default value: undefined
   */
  112?: any;
  /**
   * 
   * Default value: undefined
   */
  113?: any;
  /**
   * 
   * Default value: undefined
   */
  114?: any;
  /**
   * 
   * Default value: undefined
   */
  115?: any;
  /**
   * 
   * Default value: undefined
   */
  116?: any;
  /**
   * 
   * Default value: undefined
   */
  117?: any;
  /**
   * 
   * Default value: undefined
   */
  118?: any;
  /**
   * 
   * Default value: undefined
   */
  119?: any;
  /**
   * 
   * Default value: undefined
   */
  120?: any;
  /**
   * 
   * Default value: undefined
   */
  121?: any;
  /**
   * 
   * Default value: undefined
   */
  122?: any;
  /**
   * 
   * Default value: undefined
   */
  123?: any;
  /**
   * 
   * Default value: undefined
   */
  124?: any;
  /**
   * 
   * Default value: undefined
   */
  125?: any;
  /**
   * 
   * Default value: undefined
   */
  126?: any;
  /**
   * 
   * Default value: undefined
   */
  127?: any;
  /**
   * 
   * Default value: undefined
   */
  128?: any;
  /**
   * 
   * Default value: undefined
   */
  129?: any;
  /**
   * 
   * Default value: undefined
   */
  130?: any;
  /**
   * 
   * Default value: undefined
   */
  131?: any;
  /**
   * 
   * Default value: undefined
   */
  132?: any;
  /**
   * 
   * Default value: undefined
   */
  133?: any;
  /**
   * 
   * Default value: undefined
   */
  134?: any;
  /**
   * 
   * Default value: undefined
   */
  135?: any;
  /**
   * 
   * Default value: undefined
   */
  136?: any;
  /**
   * 
   * Default value: undefined
   */
  137?: any;
  /**
   * 
   * Default value: undefined
   */
  138?: any;
  /**
   * 
   * Default value: undefined
   */
  139?: any;
  /**
   * 
   * Default value: undefined
   */
  140?: any;
  /**
   * 
   * Default value: undefined
   */
  141?: any;
  /**
   * 
   * Default value: undefined
   */
  142?: any;
  /**
   * 
   * Default value: undefined
   */
  143?: any;
  /**
   * 
   * Default value: undefined
   */
  144?: any;
  /**
   * 
   * Default value: undefined
   */
  145?: any;
  /**
   * 
   * Default value: undefined
   */
  146?: any;
  /**
   * 
   * Default value: undefined
   */
  147?: any;
  /**
   * 
   * Default value: undefined
   */
  148?: any;
  /**
   * 
   * Default value: undefined
   */
  149?: any;
  /**
   * 
   * Default value: undefined
   */
  150?: any;
  /**
   * 
   * Default value: undefined
   */
  151?: any;
  /**
   * 
   * Default value: undefined
   */
  152?: any;
  /**
   * 
   * Default value: undefined
   */
  153?: any;
  /**
   * 
   * Default value: undefined
   */
  154?: any;
  /**
   * 
   * Default value: undefined
   */
  155?: any;
  /**
   * 
   * Default value: undefined
   */
  156?: any;
  /**
   * 
   * Default value: undefined
   */
  157?: any;
  /**
   * 
   * Default value: undefined
   */
  158?: any;
  /**
   * 
   * Default value: undefined
   */
  159?: any;
  /**
   * 
   * Default value: undefined
   */
  160?: any;
  /**
   * 
   * Default value: undefined
   */
  161?: any;
  /**
   * 
   * Default value: undefined
   */
  162?: any;
  /**
   * 
   * Default value: undefined
   */
  163?: any;
  /**
   * 
   * Default value: undefined
   */
  164?: any;
  /**
   * 
   * Default value: undefined
   */
  165?: any;
  /**
   * 
   * Default value: undefined
   */
  166?: any;
  /**
   * 
   * Default value: undefined
   */
  167?: any;
  /**
   * 
   * Default value: undefined
   */
  168?: any;
  /**
   * 
   * Default value: undefined
   */
  169?: any;
  /**
   * 
   * Default value: undefined
   */
  170?: any;
  /**
   * 
   * Default value: undefined
   */
  171?: any;
  /**
   * 
   * Default value: undefined
   */
  172?: any;
  /**
   * 
   * Default value: undefined
   */
  173?: any;
  /**
   * 
   * Default value: undefined
   */
  174?: any;
  /**
   * 
   * Default value: undefined
   */
  175?: any;
  /**
   * 
   * Default value: undefined
   */
  176?: any;
  /**
   * 
   * Default value: undefined
   */
  177?: any;
  /**
   * 
   * Default value: undefined
   */
  178?: any;
  /**
   * 
   * Default value: undefined
   */
  179?: any;
  /**
   * 
   * Default value: undefined
   */
  180?: any;
  /**
   * 
   * Default value: undefined
   */
  181?: any;
  /**
   * 
   * Default value: undefined
   */
  182?: any;
  /**
   * 
   * Default value: undefined
   */
  183?: any;
  /**
   * 
   * Default value: undefined
   */
  184?: any;
  /**
   * 
   * Default value: undefined
   */
  185?: any;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-filter-builder"): FilterBuilder;
			querySelector(selectors: "smart-filter-builder"): FilterBuilder | null;	
			querySelectorAll(selectors: "smart-filter-builder"): NodeListOf<FilterBuilder>;
			getElementsByTagName(qualifiedName: "smart-filter-builder"): HTMLCollectionOf<FilterBuilder>;
			getElementsByName(elementName: "smart-filter-builder"): NodeListOf<FilterBuilder>;	
    }
}

/**
 The filter panel allows you to customize and display the applied filter expressions.
*/
export interface FilterPanel extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Defines which operation buttons will be shown in the filter panel
   * Default value: cancel,clear,filter
   */
  buttons?: string[];
  /**
   * Array in mode: 'excel', determines the data to extract unique filter values from. The expected format of the data is an array of objects with key-value pairs (JSON array)
   * Default value: null
   */
  data?: number[];
  /**
   * Describes filtered data field.
   * Default value: "null"
   */
  dataField?: string;
  /**
   * If set to an array, determines a custom collection of filter values to be displayed. If set to a callback function, the user can add custom filter values dynamically to the default filter values (in this case, the evaluateFilterExpression function must also be implemented) .dataSource  is only available in mode: 'excel'.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables filter panel.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Callback function, used for custom evaluations in filter panel.
   * Default value: null
   */
  evaluateFilterExpression?: any;
  /**
   * Defines which filter type is used.
   * Default value: string
   */
  filterType?: FilterPanelFilterType;
  /**
   * Format string used in filterType 'Date'.
   * Default value: "d"
   */
  formatString?: string;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Defines field names of the filtered element.
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid ''!",
   *     "propertyInvalidValueType": "Invalid ''!",
   *     "methodInvalidValueType": "Invalid ''!",
   *     "methodInvalidArgumentsCount": "Invalid '' argument(s)!",
   *     "methodInvalidReturnType": "Invalid ''!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": "'.",
   *     "htmlTemplateNotSuported": ": Web Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "addCondition": "Add Condition",
   *     "addGroup": "Add Group",
   *     "and": "and",
   *     "blanks": "(Blanks)",
   *     "cancel": "Cancel",
   *     "clear": "Clear",
   *     "contains": "contains",
   *     "containsCaseSensitive": "contains (case sensitive)",
   *     "dateTabLabel": "DATE",
   *     "doesNotContain": "does not contain",
   *     "doesNotContainCaseSensitive": "does not contain (case sensitive)",
   *     "empty": "empty",
   *     "endsWith": "ends with",
   *     "endsWithCaseSensitive": "ends with (case sensitive)",
   *     "equal": "equal",
   *     "equalCaseSensitive": "equal (case sensitive)",
   *     "filter": "Filter",
   *     "greaterThan": "greater than",
   *     "greaterThanOrEqual": "greater than or equal",
   *     "lessThan": "less than",
   *     "lessThanOrEqual": "less than or equal",
   *     "notEmpty": "not empty",
   *     "notEqual": "not equal",
   *     "notNull": "not null",
   *     "null": "null ",
   *     "or": "or",
   *     "placeholderDate": "Enter date",
   *     "placeholderTime": "Enter time",
   *     "selectAll": "(Select All)",
   *     "showRows": "Show rows where:",
   *     "startsWith": "starts with",
   *     "startsWithCaseSensitive": "starts with (case sensitive)",
   *     "timeTabLabel": "TIME"
   *   }
   * }
   */
  messages?: any;
  /**
   * Desfines filter panel's  mode
   * Default value: default
   */
  mode?: FilterPanelMode;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when the current filtering is discarted.
	* @param event. The custom event.    */
  onCancel: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the current filtering is cleared.
	* @param event. The custom event.    */
  onClear?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when filter panel settings are applied.
	* @param event. The custom event.    */
  onFilter?: ((this: any, ev: Event) => any) | null;
  /**
   * Discards current filtering.
   */
  cancel(): void;
  /**
   * Clears current filtering.
   */
  clear(): void;
  /**
   * Evaluates a filter.
   * @param {any} value. The evalueated element in filter panel.
   */
  evaluate(value: any): void;
  /**
   * Applies current filtering.
   */
  filter(): void;
  /**
   * Gets the current filter state.
   * @returns {any}
   */
  getState(): any;
  /**
   * Loads a previously saved filter state.
   * @param {any} state. An object returned by the method getState.
   */
  loadState(state: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-filter-panel"): FilterPanel;
			querySelector(selectors: "smart-filter-panel"): FilterPanel | null;	
			querySelectorAll(selectors: "smart-filter-panel"): NodeListOf<FilterPanel>;
			getElementsByTagName(qualifiedName: "smart-filter-panel"): HTMLCollectionOf<FilterPanel>;
			getElementsByName(elementName: "smart-filter-panel"): NodeListOf<FilterPanel>;	
    }
}

/**Defines which filter type is used. */
export declare type FilterPanelFilterType = 'numeric' | 'string' | 'date' | 'boolean';
/**Desfines filter panel's  mode */
export declare type FilterPanelMode = 'default' | 'excel';
/**
 Gantt charts are specialized bar charts that help clearly represent how tasks and resources are allocated over time in planning, project management, and scheduling applications.
*/
export interface GanttChart extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Recalculates the tasks that are connected and re-schedules them according to their connections. If no connections are present, autoScheduling has no effect until a connection is created. Connection types determines the start/end date limits of the tasks.
   * Default value: false
   */
  autoSchedule?: boolean;
  /**
   * Affects the tasks only when autoSchedule is enabled. When set to true, the tasks are strictly scheduled ( according to their connections ) and dragging is not allowed.  Users can set lag to specific connections to determine a delay of overlap of between the two tasks ( interval of time in miliseconds ). Lag one of the attributes of a task connection and should be set in the dataSource where the task connections are defined.
   * Default value: false
   */
  autoScheduleStrictMode?: boolean;
  /**
   * Determines the scroll speed when dragging when autoScroll property is set. 
   * Default value: 5
   */
  autoScrollStep?: number;
  /**
   * Sets the GanttChart's Data Export options.
   * Default value: [object Object]
   */
  dataExport?: GanttChartDataExport;
  /**
   * Determines the tasks that will be loaded inside the Timeline. Each item represents an object that should contain the following properties: label - the label of the TaskdateStart - the starting date of the Task. Should be a string representing a valid date.dateEnd - the ending date of the Task. Should be a string representing a valid date.type - determines the type of the task. Whether it's a simple task, a project or a milestone. Each type of task has specific behavior and additional attributes..  Additional properties: connections - an array of objects representing the connection between two tasks. Each connection (object) should have the following properties : target - a number representing the index of the target tasktype - a number representing the type of the connection. Four types of connections are available: 0 - is a connection of type Start-to-Start 1 - is a connection of type End-to-Start 2 - is a connection of type End-to-End3 - is a connection of type Start-to-End lag - a number that determines the delay between two connected auto scheduled tasks. Lag property can be a positive or a negative number. When negative it determines the overlap between two connected tasks. This property is used in conjuction with autoSchedule.duration - determines the duration of a Task in days, hours, minutes, seconds or miliseconds. Very usefull when the the dateEnd of a Task is unknown.minDuration - sets the minimum duration of a task. maxDuration - sets the maximum duration of a task.minDateStart - determines the mininum date that a task can start from. Must be if type string and should represent a valid date.maxDateStart - determines the maximum date that a task can start from. Must be if type string and should represent a valid date.minDateEnd - determines the mininum date that a task can end. Must be if type string and should represent a valid date.maxDateEnd - determines the maximum date that a task can end. Must be if type string and should represent a valid date.progress - a number that determines the progress of a task ( from 0 to 100 ).disableDrag - a boolean property that disables the dragging of a task when set to true.disableResize - a boolean property that disables the resizing of a task when set to true.dragProject - a boolean that determines whether or not the whole project (along with the tasks) can be dragged while dragging the project task. Applicalbe only to Projects.synchronized - a boolean that if set the project task's start/end dates are automatically calculated based on the tasks. By default a synchronized project task can't be dragged alone. Applicable only to Project tasks.expanded - a boolean that determines if a project is expanded or not. If not all of it's sub-tasks are not visible. Only the project task itself is visible. By default no projects are expanded. Applicable only to project tasks..
   * Default value: 
   */
  dataSource?: GanttChartDataSource[];
  /**
   * Determines the format of the dates in the timeline header when they represent days.
   * Default value: short
   */
  dayFormat?: GanttDayFormat;
  /**
   * Determines a specific end date for the Timeline. Usefull when the user wants custom ending date for the Timeline. If no date is set the end date of the timeline is automatically determined from the tasks.
   * Default value: 
   */
  dateEnd?: string | Date;
  /**
   * Determines a specific starting date for the Timeline. Usefull when the user wants custom starting date for the Timeline. If no date is set the start date of the timeline is automatically determined from the tasks.
   * Default value: 
   */
  dateStart?: string | Date;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Disables auto scrolling while dragging/resizing a task bar inside the Timeline.
   * Default value: false
   */
  disableAutoScroll?: boolean;
  /**
   * Disables dragging of tasks in the Timeline.
   * Default value: false
   */
  disableTaskDrag?: boolean;
  /**
   * Disables task progress changing in the Timeline.
   * Default value: false
   */
  disableTaskProgressChange?: boolean;
  /**
   * Disables resizing of tasks in the Timeline.
   * Default value: false
   */
  disableTaskResize?: boolean;
  /**
   * Disables the selection inside the GanttChart.
   * Default value: false
   */
  disableSelection?: boolean;
  /**
   * Disables the window editor for the GanttChart.
   * Default value: false
   */
  disableWindowEditor?: boolean;
  /**
   * Determines in what unit is task duration property measured.
   * Default value: milisecond
   */
  durationUnit?: Duration;
  /**
   * Allows to create a custom header content for the Task Panel. The attribute accepts an HTMLTemplate element, it's id or a function.
   * Default value: null
   */
  headerTemplate?: any;
  /**
   * Hides the Resource panel regardless of the resources availability By default the Resource panel is visible if resources are added to the GanttChart. This property allows to hide the Resource panel permanently.
   * Default value: false
   */
  hideResourcePanel?: boolean;
  /**
   * Determines weather or not horizontal scrollbar is shown.
   * Default value: auto
   */
  horizontalScrollBarVisibility?: HorizontalScrollBarVisibility;
  /**
   * Determines the format of the dates inside the timeline header when they represent hours.
   * Default value: numeric
   */
  hourFormat?: HourFormat;
  /**
   * When set the Timeline is positioned on the left side while the Task Tree is positioned on the right. By default it's vice versa.
   * Default value: false
   */
  inverted?: boolean;
  /**
   *  Determines the language of the GanttChart. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Detetmines the maximum possible date of the Timeline.
   * Default value: 2100-1-1
   */
  max?: any;
  /**
   * Detetmines the minimum possible date of the Timeline.
   * Default value: 1900-1-1
   */
  min?: any;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the format of the dates the timeline header when they represent months.
   * Default value: short
   */
  monthFormat?: MonthFormat;
  /**
   * Determines the nonworking days of the week from 0 to 6, where 0 is the first day of the week and 6 is the last day. Nonworking days will be displayed with colored cells inside the timeline and will be ignored during task range calculations.
   * Default value: 
   */
  nonworkingDays?: number[];
  /**
   * Determines the nonworking hours of a day. Hours are represented as numbers inside an array. In the timline the cells that represent nonworking days are colored differently from the rest.
   * Default value: 
   */
  nonworkingHours?: number[];
  /**
   * A function that can be used to completly customize the popup Window that is used to interact width tasks by changing their properties. The function as three arguments: target - the target popup Window that is about to be opened.type - the type of the window. The type determines the purpose of the window. Three possible values: 'task' (task editing), 'confirm' ( confirmation window), 'connection' (used when deleting a connection between tasks). taskIndex - the index of the task that is being edited. It will be undefined if the type of the window is not 'task'.
   * Default value: null
   */
  popupWindowCustomizationFunction?: any;
  /**
   * A getter that returns a flat structure as an array of all resources inside the element.
   * Default value: 
   */
  resources?: GanttChartResource[];
  /**
   * Deteremines the columns that will be visible in the Resource Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. By default, one column with all resource labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts two arguments - the actual label as string that is going to be inserted and the index of the resource. The function must return a string as the new content. min - controls the min size of the column max - controls the max size of the columnsize - controls the actual size of the column
   * Default value: { "label": "resourceColumnLabel", "value": "label" }
   */
  resourceColumns?: GanttChartResourceColumn[];
  /**
   * Allows to create a custom header content for the Resource Panel. The attribute accepts an HTMLTemplate element, it's id or a function.
   * Default value: null
   */
  resourcePanelHeaderTemplate?: any;
  /**
   * Determines the min size of the Resource Panel.
   * Default value: 100
   */
  resourcePanelMin?: number | string;
  /**
   * Determines the size of the Resource Panel.
   * Default value: 
   */
  resourcePanelSize?: number | string;
  /**
   * Determines the refresh rate of the Resource Panel when dragging/resizing/progress changing a Task from the Timeline. This property allows to customize the interval between resource Tree/Timeline refreshes. By default they refresh immediately after a change.
   * Default value: 0
   */
  resourcePanelRefreshRate?: number;
  /**
   * A callback that can be used to customize the content of the resource Timeline cells. The callback accepts three arguments: taskIndexes - an array of task indexes that are assigned to the resource for the current cell.resourceIndex - the index of the resource.cellDate - the date of the current cell. This property is used when resourceTimelineView is set to custom. Depending on the resourceTimelineMode, it should return: string - when the resourceTimelineMode is set to 'diagram'.object - when the resourceTimelineMode is set to 'histogram'. The object should have two attributes: capacity and maxCapacity, in order to be visualized as a histogram.. Another usage of this callback is to customize the timeline resource representation completely if resourceTimelineMode is set to custom.
   * Default value: null
   */
  resourceTimelineFormatFunction?: any;
  /**
   * Determines how the capacity of the resources will be visualized inside the resource timeline. By default, the capacity is measured in hours depending on the view property of the element.
   * Default value: diagram
   */
  resourceTimelineMode?: GanttChartResourceTimelineMode;
  /**
   * Determines how the resources will be displayed inside the resource Timeline.
   * Default value: hours
   */
  resourceTimelineView?: GanttChartResourceTimelineView;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the selected task(s). If empty no tasks are selected.
   * Default value: 
   */
  selectedIndexes?: number[];
  /**
   * If set the dateStart/dateEnd of the tasks will be coerced to the nearest timeline cell date ( according to the view ). Affects the dragging operation as well.
   * Default value: false
   */
  snapToNearest?: boolean;
  /**
   * A getter that returns a flat structure as an array of all tasks inside the element.
   * Default value: 
   */
  tasks?: GanttChartTask[];
  /**
   * Deteremines the columns that will be visible in the Task Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. It should reference a task attribute from the dataSource. By default, one column with all task labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts one argument - the actual label as string that is going to be inserted and must return some content. min - controls the min size of the column max - controls the max size of the column size - controls the actual size of the columncustomEditor - a callback that can be used to set a custom editor for the column when editing via the window. It accepts two arguments label - the label of the columnvalue - the value of the column. The callback must return the editor.setCustomEditorValue - a callback that is used to set the value of the custom editor.getCustomEditorValue - a callback that is used to get the value of the custom editor.
   * Default value: { "label": "Task Name", "value": "label" }
   */
  taskColumns?: GanttChartTaskColumn[];
  /**
   * Determines the min size of the Task Panel. Used when Resource Panel is visible.
   * Default value: 200
   */
  taskPanelMin?: any;
  /**
   * Determines the size of the Task Panel. Used when Resource Panel is visible.
   * Default value: 
   */
  taskPanelSize?: any;
  /**
   * Determines the min width of the timeline.
   * Default value: 200
   */
  timelineMin?: any;
  /**
   * Determines the min width of the task tree.
   * Default value: 100
   */
  treeMin?: any;
  /**
   * Determines the size(width) of the task tree.
   * Default value: 100
   */
  treeSize?: any;
  /**
   * A format function for the Header of the Timeline.
   * Default value: null
   */
  timelineHeaderFormatFunction?: any;
  /**
   * Determines weather or not vertical scrollbar is shown.
   * Default value: auto
   */
  verticalScrollBarVisibility?: VerticalScrollBarVisibility;
  /**
   * Determines the viewing date range of the timeline. Possible values: day - The timeline show the hours of the day.week - the timeline shows the days of the week.month - the timeline shows the days of the month.year - the timeline shows the months of the year.resource - displays the current tasks by grouping them according to the resources they have assigned. The unassigned tasks will be placed in a separate group called 'Unassigned'.  The timeline has a header section that contains the labels of each cell according to the date inside them. The header is splitted in two sections in order to give a more detailed information of the dates.
   * Default value: year
   */
  view?: GanttChartView;
  /**
   * Determines the format of the dates inside the timeline header when they represent years.
   * Default value: numeric
   */
  yearFormat?: YearFormat;
  /**
   * Determines the format of the dates inside the timeline header when they represent weeks. 
   * Default value: long
   */
  weekFormat?: WeekFormat;
  /**
   * Sets or gets the element's visual theme. 
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or gets if the element can be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when a Task is selected/unselected.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, oldValue)
   *  value - The index of the new selected task.
   *  oldValue - The index of the previously selected task.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the progress of a task bar starts to change as a result of user interaction. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(index, progress)
   *  index - The index of the task which progress is going to be changed.
   *  progress - The progress of the task before it is changed.
   */
  onProgressChangeStart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the progress of a task is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(index, progress)
   *  index - The index of the task which progress is has been changed.
   *  progress - The progress of the task after it was changed.
   */
  onProgressChangeEnd?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when dragging of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(index, dateStart, dateEnd)
   *  index - The index of the task that is going to be dragged.
   *  dateStart - The start date of the task that is going to be dragged.
   *  dateEnd - The end date of the task that is going to be dragged.
   */
  onDragStart: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when dragging of a task finishes.
	* @param event. The custom event. Custom data event was created with: ev.detail(index, dateStart, dateEnd)
   *  index - The index of the task that is was dragged.
   *  dateStart - The start date of the task that is was dragged.
   *  dateEnd - The end date of the task that is was dragged.
   */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when resizing of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(index, dateStart, dateEnd)
   *  index - The index of the task that is going to be resized.
   *  dateStart - The start date of the task that is going to be resized.
   *  dateEnd - The end date of the task that is going to be resized.
   */
  onResizeStart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the resizing of a task finishes.
	* @param event. The custom event. Custom data event was created with: ev.detail(index, dateStart, dateEnd)
   *  index - The index of the task that was resized.
   *  dateStart - The start date of the task that was resized.
   *  dateEnd - The end date of the task that was resized.
   */
  onResizeEnd?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user starts connecting one task to another. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(startIndex)
   *  startIndex - The index of the task that a connection is started from.
   */
  onConnectionStart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user completes a connection between two tasks.
	* @param event. The custom event. Custom data event was created with: ev.detail(startIndex, endIndex, type)
   *  startIndex - The index of the task that a connection is started from.
   *  endIndex - The index of the task that a connection is started from.
   *  type - The type of connection. Fours types are available: <ul><li><b>0</b> - start-to-start</li><li><b>1</b> - end-to-start</li><li><b>2</b> - end-to-end</li><li><b>3</b> - start-to-end</li></ul>
   */
  onConnectionEnd?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the Timeline has been scrolled to the bottom.
	* @param event. The custom event.    */
  onScrollBottomReached?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the Timeline has been scrolled to the top.
	* @param event. The custom event.    */
  onScrollTopReached?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered just before the window for task editing starts opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, type)
   *  target - The instance of the window that is going to open.
   *  type - The type of window that is going to open. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>
   */
  onOpening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window for task editing is opened( visible ).
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered just before the window for task editing starts closing. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, type)
   *  target - The instance of the window that is going to close.
   *  type - The type of window that is going to close. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>
   */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window for task editing is closed( hidden )
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /**
   * Adds a task as the last item of a Project.
   * @param {string | number} taskIndex. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following SmartTree syntax).
   * @param {string | number} projectIndex. A number that represents the index of a project or a string that matches the hierarchical position of the item, e.g. '0' ( following SmartTree syntax).
   */
  addTaskTo(taskIndex: string | number, projectIndex: string | number): void;
  /**
   * Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once.
   */
  beginUpdate(): void;
  /**
   * Ends the update operation. This method will resume the rendering and will refresh the GanttChart.
   */
  endUpdate(): void;
  /**
   * Refereshes the GanttChart after resizing by recalculating the Scrollbars. 
   * @param {boolean} fullRefresh?. If set the GanttChart will be re-rendered completely.
   */
  refresh(fullRefresh?: boolean): void;
  /**
   * Removes all connections between tasks. 
   */
  removeAllConnections(): void;
  /**
   * Removes a connection between tasks. The function accepts three arguments(task's start index, end index and connection type) or one connection string argument which describes the connection.
   * @param {number | string} startTaskIndex. The index of the start task or the connection string like '2-3-0.
   * @param {number} taskEndIndex?. The index of the end task.
   * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3.
   * @returns {any}
   */
  removeConnection(startTaskIndex: number | string, taskEndIndex?: number, connectionType?: number): any;
  /**
   * Removes all connections of a task or between two tasks if the second argument is provided and valid.
   * @param {number} taskStartIndex. The index of the start task. 
   * @param {number} taskEndIndex?. The index of the end task.
   * @returns {string}
   */
  removeTaskConnection(taskStartIndex: number, taskEndIndex?: number): string;
  /**
   * Removes all tasks. 
   */
  clearTasks(): void;
  /**
   * Removes all resources. 
   */
  clearResources(): void;
  /**
   * Creates a connection between two tasks. 
   * @param {number | string} startTaskIndex. The index of the start task or the connection string like '2-3-0.
   * @param {number} taskEndIndex?. The index of the end task.
   * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3.
   */
  createConnection(startTaskIndex: number | string, taskEndIndex?: number, connectionType?: number): void;
  /**
   * Collapses an expanded project with tasks.
   * @param {string | number} index. The index of a project task that should be collapsed.
   */
  collapse(index: string | number): void;
  /**
   * Makes sure a Task is visible by scrolling to it.
   * @param {string | number} item. The index of the target Task. Can be a string representing a Tree index ( similar to SmartTree )
   */
  ensureVisible(item: string | number): void;
  /**
   * Expands a collapsed project with tasks.
   * @param {string | number} index. The index of a project task that should be expanded.
   */
  expand(index: string | number): void;
  /**
   * Exports the data of Tree of the GanttChart.
   * @param {string} dataFormat. Determines the format of the exported file. Three possible values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li></ul>
   * @param {any} callback?. A callback that allows to format the exported data based on a condition. For additional details, refer ro the Smart Export Documentation.
   */
  exportData(dataFormat: string, callback?: any): void;
  /**
   * Returns a JSON representation of all tasks inside the element along with their connections and settings.
   * @returns {any[]}
   */
  getState(): any[];
  /**
   * Returns the index of a task.
   * @param {HTMLElement} task. A GattChartTask object.
   * @returns {number}
   */
  getTaskIndex(task: HTMLElement): number;
  /**
   * Returns the tree path of a task.
   * @param {GanttChartTask} task. Returns the Tree path of the task as a string.
   * @returns {string}
   */
  getTaskPath(task: GanttChartTask): string;
  /**
   * Returns the index of a resource.
   * @param {any} resource. A GanttChartResource object.
   * @returns {number}
   */
  getResourceIndex(resource: any): number;
  /**
   * Unselects all currently selected items inside the GanttChart including Tasks and Resources. It also clears the assignment highlgihters.
   */
  clearSelection(): void;
  /**
   * Removes a previously saved state of the element form LocalStorage according to it's id. <strong>Requires an id to be set to the element.</strong>
   */
  clearState(): void;
  /**
   * Loads a previously saved state of the element or checks LocalStorage for any saved states if no argument is passed to the method.
   * @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
   */
  loadState(state?: any[]): void;
  /**
   * Saves the current settings of the element to LocalStorage. <strong>Requires an id to be set to the element.</strong>
   * @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
   */
  saveState(state?: any[]): void;
  /**
   * Inserts a new task in the timeline.
   * @param {string | number} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following SmartTree syntax).
   * @param {any} taskObject. An object describing a Gantt Chart task.
   */
  insertTask(index: string | number, taskObject: any): void;
  /**
   * Updates a task inside the timeline.
   * @param {string | number} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following SmartTree syntax).
   * @param {any} taskObject. An object describing a Gantt Chart task. The properties of this object will be applied to the desired task.
   */
  updateTask(index: string | number, taskObject: any): void;
  /**
   * Removes a task from the timeline.
   * @param {string | number} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following SmartTree syntax).
   */
  removeTask(index: string | number): void;
  /**
   * Inserts a new resource.
   * @param {string | number} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following SmartTree syntax), or a number that represents the index of a resource.
   * @param {any} resourceObject?. An object describing a Gantt Chart resource.
   */
  insertResource(resourceId: string | number, resourceObject?: any): void;
  /**
   * Updates an existing resource.
   * @param {any} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following SmartTree syntax), or a number that represents the index of a resource.
   * @param {any} taskObject. An object describing a Gantt Chart resource. The properties of this object will be applied to the target resource.
   */
  updateResource(resourceId: any, taskObject: any): void;
  /**
   * Removes a resource.
   * @param {any} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following SmartTree syntax), or a number that represents the index of a resource.
   */
  removeResource(resourceId: any): void;
  /**
   * Opens the popup Window for specific task Editing.
   * @param {string | number} index. A string or number that represents the index of a task that is going to be edited.
   */
  openWindow(index: string | number): void;
  /**
   * Closes an opened popup Window. The method will close any opened popup window inside the element.
   */
  closeWindow(): void;
  /**
   * Prepares the GanttChart for printing by opening the browser's Print Preview.
   */
  print(): void;
}

/**Sets the GanttChart's Data Export options. */
export interface GanttChartDataExport {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets whether the columns header will be exported.
   * Default value: true
   */
  header?: boolean;
  /**
   * Sets a custom style object of the dataExport. 
   * Default value: null
   */
  style?: any;
  /**
   * Sets the exported file's name.
   * Default value: "jqxGanttChart"
   */
  fileName?: string;
  /**
   * Determines the type of items that is going to be exported. 
   * Default value: task
   */
  itemType?: GanttChartDataExportItemType;
  /**
   * Sets the page orientation, when exporting to PDF.
   * Default value: "portrait"
   */
  pageOrientation?: string;
  /**
   * Sets the expand char displayed for the Project tasks when GanttChart exported.
   * Default value: "+"
   */
  expandChar?: string;
  /**
   * Sets the collapse char displayed for the Project tasks when GanttChart is exported.
   * Default value: "-"
   */
  collapseChar?: string;
}

export interface GanttChartDataSource {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Tasks connection.
   * Default value: undefined
   */
  connections?: GanttChartDataSourceConnection[];
  /**
   * Project, Task or Milestone CSS class.
   * Default value: ""
   */
  class?: string;
  /**
   * Project, Task or Milestone start date.
   * Default value: 
   */
  dateStart?: string | Date;
  /**
   * Project, Task or Milestone end date.
   * Default value: 
   */
  dateEnd?: string | Date;
  /**
   * Disable the resources for Project, Task or Milestone.
   * Default value: false
   */
  disableResources?: boolean;
  /**
   * Project, Task or Milestone dragging is disabled.
   * Default value: false
   */
  disableDrag?: boolean;
  /**
   * Project, Task or Milestone resizing is disabled.
   * Default value: false
   */
  disableResize?: boolean;
  /**
   * Project, Task or Milestone drag enabled in the view.
   * Default value: true
   */
  dragProject?: boolean;
  /**
   * Project, Task or Milestone expanded state in the view.
   * Default value: false
   */
  expanded?: boolean;
  /**
   * Project, Task or Milestone id.
   * Default value: 
   */
  id?: string | null;
  /**
   * Project, Task or Milestone label.
   * Default value: 
   */
  label?: string | null;
  /**
   * Project, Task or Milestone format function.
   * Default value: null
   */
  formatFunction?: any;
  /**
   * Project, Task or Milestone min start date.
   * Default value: 
   */
  minDateStart?: string | Date;
  /**
   * Project, Task or Milestone max end date.
   * Default value: 
   */
  maxDateEnd?: string | Date;
  /**
   * Project, Task or Milestone progress.
   * Default value: 0
   */
  progress?: number;
  /**
   * Project, Task or Milestone resources
   * Default value: false
   */
  resources?: GanttChartDataSourceResource[];
  /**
   * Project, Task or Milestone synchronized in the view.
   * Default value: false
   */
  synchronized?: boolean;
  /**
   * Project's tasks.
   * Default value: 
   */
  tasks?: GanttChartTask[];
  /**
   * Project, Task or Milestone type. Possible values are 'project' and 'task'
   * Default value: 
   */
  type?: GanttChartTaskType;
  /**
   * Project, Task or Milestone value.
   * Default value: 
   */
  value?: any;
  /**
   * Project, Task or Milestone value.
   * Default value: false
   */
  hidden?: boolean | undefined;
}

export interface GanttChartDataSourceConnection {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Task's connection target.
   * Default value: 0
   */
  target?: string | number;
  /**
   * Task's connection type.
   * Default value: 0
   */
  type?: number;
}

export interface GanttChartDataSourceResource {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * The capacity of a resource. By default it is used to determines the working capacity ( in hours ) of the resource.
   * Default value: 8
   */
  capacity?: number;
  /**
   * Resource id. The unique id of the resource.
   * Default value: ""
   */
  id?: string;
  /**
   * Resource label.
   * Default value: 0
   */
  label?: string | null;
  /**
   * Resource min capacity
   * Default value: 0
   */
  minCapacity?: number;
  /**
   * Resource max capacity. By default this property is used for the resource timeline histogram where maxCapacity is the maximum working capacity in hours of the resource.
   * Default value: 0
   */
  maxCapacity?: number;
  /**
   * Resource progress. Progress is the total progress of the resource based on the tasks it is assigned to. This property is automatically calculated.
   * Default value: 0
   */
  progress?: number;
  /**
   * Resource value.
   * Default value: 
   */
  value?: any;
  /**
   * Resource visibility.
   * Default value: false
   */
  hidden?: boolean | undefined;
  /**
   * Resource workload. Workload is the total working time in hours of a resource based on the tasks it is assigned to. This property is automatically calculated.
   * Default value: 0
   */
  workload?: string | number;
}

export interface GanttChartResource {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * An array of the tasks that the resources is assigned to.
   * Default value: []
   */
  assignedTo?: GanttChartTask[];
  /**
   * Resource class. Used to style the resource Timeline.
   * Default value: ""
   */
  class?: string;
  /**
   * The capacity of a resource. By default it is used to determine the working capacity ( in hours ) of the resource.
   * Default value: 8
   */
  capacity?: number;
  /**
   * Resource id. The unique id of the resource.
   * Default value: ""
   */
  id?: string;
  /**
   * Resource label.
   * Default value: 0
   */
  label?: string | null;
  /**
   * Resource min capacity
   * Default value: 0
   */
  minCapacity?: number;
  /**
   * Resource max capacity. By default this property is used for the resource timeline histogram where maxCapacity is the maximum working capacity in hours of the resource.
   * Default value: 0
   */
  maxCapacity?: number;
  /**
   * Resource progress. Progress is the total progress of the resource based on the tasks it is assigned to. This property is automatically calculated.
   * Default value: 0
   */
  progress?: number;
  /**
   * Resource value.
   * Default value: 
   */
  value?: any;
  /**
   * Resource workload. Workload is the total working time in hours of a resource based on the tasks it is assigned to. This property is automatically calculated.
   * Default value: 0
   */
  workload?: string | number;
}

export interface GanttChartResourceColumn {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Column's label.
   * Default value: 
   */
  label?: string | null;
  /**
   * Column's value. The value shold reference an actual resoruce attribute.
   * Default value: 
   */
  value?: string | null;
  /**
   * Column's min size.
   * Default value: 0
   */
  min?: string | number | null;
  /**
   * Column's size.
   * Default value: 0
   */
  size?: string | number | null;
  /**
   * Column's format function. You can use it to customize the column label's rendering.
   * Default value: null
   */
  formatFunction?: any;
}

export interface GanttChartTask {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Tasks connection.
   * Default value: undefined
   */
  connections?: GanttChartTaskConnection[];
  /**
   * Project, Task or Milestone CSS class.
   * Default value: ""
   */
  class?: string;
  /**
   * Project, Task or Milestone start date.
   * Default value: 
   */
  dateStart?: string | Date;
  /**
   * Project, Task or Milestone end date.
   * Default value: 
   */
  dateEnd?: string | Date;
  /**
   * Project, Task or Milestone with disabled resources.
   * Default value: false
   */
  disableResources?: boolean;
  /**
   * Project, Task or Milestone dragging is disabled.
   * Default value: false
   */
  disableDrag?: boolean;
  /**
   * Project, Task or Milestone resizing is disabled.
   * Default value: false
   */
  disableResize?: boolean;
  /**
   * Project, Task or Milestone drag enabled in the view.
   * Default value: true
   */
  dragProject?: boolean;
  /**
   * Project, Task or Milestone expanded state in the view.
   * Default value: false
   */
  expanded?: boolean;
  /**
   * Project, Task or Milestone id.
   * Default value: 
   */
  id?: string | null;
  /**
   * Project, Task or Milestone label.
   * Default value: 
   */
  label?: string | null;
  /**
   * Project, Task or Milestone format function.
   * Default value: null
   */
  formatFunction?: any;
  /**
   * Project, Task or Milestone min start date.
   * Default value: 
   */
  minDateStart?: string | Date;
  /**
   * Project, Task or Milestone max end date.
   * Default value: 
   */
  maxDateEnd?: string | Date;
  /**
   * Project, Task or Milestone progress.
   * Default value: 0
   */
  progress?: number;
  /**
   * Project, Task or Milestone resources.
   * Default value: false
   */
  resources?: GanttChartTaskResource[];
  /**
   * Project, Task or Milestone synchronized in the view.
   * Default value: false
   */
  synchronized?: boolean;
  /**
   * Project's tasks.
   * Default value: 
   */
  tasks?: GanttChartTask[];
  /**
   * Project, Task or Milestone type. Possible values are 'project' and 'task'
   * Default value: 
   */
  type?: GanttChartTaskType;
  /**
   * Project, Task or Milestone value.
   * Default value: 
   */
  value?: any;
}

export interface GanttChartTaskConnection {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Task's connection target.
   * Default value: 0
   */
  target?: string | number;
  /**
   * Task's connection type.
   * Default value: 0
   */
  type?: number;
}

export interface GanttChartTaskResource {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Resource capacity.
   * Default value: 0
   */
  capacity?: number;
  /**
   * Resource format function.
   * Default value: null
   */
  formatFunction?: any;
  /**
   * Resource id.
   * Default value: ""
   */
  id?: string;
  /**
   * Resource label.
   * Default value: 0
   */
  label?: string | null;
  /**
   * Resource max capacity.
   * Default value: 0
   */
  maxCapacity?: number;
  /**
   * Resource min capacity.
   * Default value: 0
   */
  minCapacity?: number;
  /**
   * Resource progress.
   * Default value: 0
   */
  progress?: number;
  /**
   * Resource type.
   * Default value: 
   */
  type?: any;
  /**
   * Resource value.
   * Default value: 
   */
  value?: any;
  /**
   * Resource visibility.
   * Default value: false
   */
  hidden?: boolean | undefined;
  /**
   * Resource workload.
   * Default value: 0
   */
  workload?: string | number;
}

export interface GanttChartTaskColumn {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Column's label.
   * Default value: 
   */
  label?: string | null;
  /**
   * Column's value.
   * Default value: 
   */
  value?: string | null;
  /**
   * Column's min size.
   * Default value: 0
   */
  min?: string | number | null;
  /**
   * Determines whether the column will be the root column of the Task Tree. Root column contains the Tree structure. By default the first column is the root.
   * Default value: false
   */
  root?: boolean;
  /**
   * Column's size.
   * Default value: 0
   */
  size?: string | number | null;
  /**
   * Column's format function. You can use it to customize the column label's rendering.
   * Default value: null
   */
  formatFunction?: any;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-gantt-chart"): GanttChart;
			querySelector(selectors: "smart-gantt-chart"): GanttChart | null;	
			querySelectorAll(selectors: "smart-gantt-chart"): NodeListOf<GanttChart>;
			getElementsByTagName(qualifiedName: "smart-gantt-chart"): HTMLCollectionOf<GanttChart>;
			getElementsByName(elementName: "smart-gantt-chart"): NodeListOf<GanttChart>;	
    }
}

/**Determines the type of items that is going to be exported.  */
export declare type GanttChartDataExportItemType = 'task' | 'resource';
/**Determines the format of the dates in the timeline header when they represent days. */
export declare type GanttDayFormat = '2-digit' | 'numeric' | 'long' | 'short' | 'narrow';
/**Determines in what unit is task duration property measured. */
export declare type Duration = 'day' | 'hour' | 'minute' | 'second' | 'milisecond';
/**Determines the format of the dates inside the timeline header when they represent hours. */
export declare type HourFormat = 'default' | '2-digit' | 'numeric';
/**Determines how the capacity of the resources will be visualized inside the resource timeline. By default, the capacity is measured in hours depending on the <b>view</b> property of the element. */
export declare type GanttChartResourceTimelineMode = 'diagram' | 'histogram' | 'custom';
/**Determines how the resources will be displayed inside the resource Timeline. */
export declare type GanttChartResourceTimelineView = 'hours' | 'tasks' | 'custom';
/**Project, Task or Milestone type. Possible values are 'project' and 'task' */
export declare type GanttChartTaskType = 'project' | 'milestone' | 'task';
/**Determines the viewing date range of the timeline. Possible values: day - The timeline show the hours of the day.
week - the timeline shows the days of the week.
month - the timeline shows the days of the month.
year - the timeline shows the months of the year.
resource - displays the current tasks by grouping them according to the resources they have assigned. The unassigned tasks will be placed in a separate group called 'Unassigned'.
 <br /> The timeline has a header section that contains the labels of each cell according to the date inside them. The header is splitted in two sections in order to give a more detailed information of the dates. */
export declare type GanttChartView = 'day' | 'week' | 'month' | 'year' | 'resource';
/**Determines the format of the dates inside the timeline header when they represent weeks.  */
export declare type WeekFormat = 'long' | 'numeric';
/**
 Gauge displays an indicator within a range of values.
*/
export interface Gauge extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Determines the type of gauge's indicator.
   * Default value: needle
   */
  analogDisplayType?: GaugeAnalogDisplayType;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets gauge's animation duration. Applicable only when animation is not 'none'.
   * Default value: 300
   */
  animationDuration?: number;
  /**
   * With the coerce property true, the value is set to the nearest value allowed by the interval property. 
   * Default value: false
   */
  coerce?: boolean;
  /**
   * Sets or gets whether custom ticks at (possibly) uneven interval will be plotted. The ticks to be plotted are defined with the property customTicks.
   * Default value: false
   */
  customInterval?: boolean;
  /**
   * If customInterval is enabled, sets a list of ticks to be plotted. If coerce is set to true, the value will snap to these ticks.
   * Default value: 0,50,100
   */
  customTicks?: number[];
  /**
   * Determines the date pattern of the labels when mode is 'date'.
   * Default value: "d"
   */
  dateLabelFormatString?: string;
  /**
   * Sets or gets the char to use as the decimal separator in numeric values. 
   * Default value: "".""
   */
  decimalSeparator?: string;
  /**
   * Enables or disables the digital display of the element.
   * Default value: false
   */
  digitalDisplay?: boolean;
  /**
   * Sets the position of the digital display inside the element.
   * Default value: bottom
   */
  digitalDisplayPosition?: GaugeDigitalDisplayPosition;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Callback function which allows rendering of a custom needle. Applicable only to analogDisplayType needle.
   * Default value: null
   */
  drawNeedle?: any;
  /**
   * Sets or gets Gauge's end angle. This property specifies the end of the gauge's scale and is measured in degrees.
   * Default value: 210
   */
  endAngle?: number;
  /**
   * When cooerce property is true, all values coerce to the interval's value.
   * Default value: 1
   */
  interval?: any;
  /**
   * Sets the direction of the gauge. If true - the positions of the gauge's start and end are switched.
   * Default value: false
   */
  inverted?: boolean;
  /**
   * A callback function that can be used to format the values displayed inside the gauge labels.
   * Default value: null
   */
  labelFormatFunction?: any;
  /**
   * Determines the visibility of the labels inside the element.
   * Default value: all
   */
  labelsVisibility?: LabelsVisibility;
  /**
   * Sets or gets the locale. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Enables or disables the usage of logarithmic scale in the element.
   * Default value: false
   */
  logarithmicScale?: boolean;
  /**
   * Determines the maximum value for the scale of the element.
   * Default value: 100
   */
  max?: any;
  /**
   * Determines when the value of the element is updated.
   * Default value: switchWhileDragging
   */
  mechanicalAction?: DragMechanicalAction;
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
   *     "significantPrecisionDigits": ": the properties significantDigits and precisionDigits cannot be set at the same time.",
   *     "invalidMinOrMax": " value. Max cannot be lower than Min.",
   *     "noInteger": ": precisionDigits could be set only on \"floatingPoint\" scaleType."
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines the minimum value for the scale of the element. 
   * Default value: 0
   */
  min?: any;
  /**
   * Determines whether the element works with numbers or dates.
   * Default value: numeric
   */
  mode?: ScaleMode;
  /**
   * Sets or gets the element's name, which is used as a reference when the data is submitted.
   * Default value: ""
   */
  name?: string;
  /**
   * Determines the position of the needle when analogDisplayType is 'needle'. 
   * Default value: center
   */
  needlePosition?: GaugeNeedlePosition;
  /**
   * Determines the number of digits after the decimal point. Applicable only when scaleType is 'floatingPoint'.
   * Default value: null
   */
  precisionDigits?: number;
  /**
   * This property represents an array of objects. Each object is a different range. The range is a colored area with specific size.
   * Default value: 
   */
  ranges?: {startValue: number, endValue: number, className: string}[];
  /**
   * When the element is read only the users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. If enabled, the scale is inverted and the labels and digital display are oriented from right to left.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the position of the scale in the element. 
   * Default value: inside
   */
  scalePosition?: GaugeScalePosition;
  /**
   * Determines the type of the gauge's value and scale. 
   * Default value: floatingPoint
   */
  scaleType?: ScaleType;
  /**
   * Enables or disables scientific notation.
   * Default value: false
   */
  scientificNotation?: boolean;
  /**
   * This property indicates whether the gauge ranges are visible or not.
   * Default value: false
   */
  showRanges?: boolean;
  /**
   * Enables or disables displaying of units.
   * Default value: false
   */
  showUnit?: boolean;
  /**
   * Determining how many significant digits are in a number. Applicable only when scaleType is 'integer'.
   * Default value: null
   */
  significantDigits?: number | null;
  /**
   * Determines how the Gauge will size.
   * Default value: circle
   */
  sizeMode?: GaugeSizeMode;
  /**
   * Sets or gets gauge's start angle. This property specifies the beggining of the gauge's scale and is measured in degrees.
   * Default value: -30
   */
  startAngle?: number;
  /**
   * Sets or gets the element's visual theme.
   * Default value: ""
   */
  theme?: string;
  /**
   * Determines the position of the ticks in the Gauge.
   * Default value: scale
   */
  ticksPosition?: TicksPosition;
  /**
   * Determines the visibility of the ticks.
   * Default value: minor
   */
  ticksVisibility?: TicksVisibility;
  /**
   * Sets or gets if the element can be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the name of unit used for the values on the scale of the element.
   * Default value: "kg"
   */
  unit?: string;
  /**
   * Sets the value's validation by min/max.
   * Default value: strict
   */
  validation?: Validation;
  /**
   * Sets or gets the value of the element. The value can be a date only when scaleType is 'date'.
   * Default value: 0
   */
  value?: string | number | Date;
  /**
   * Sets or gets the word length. Applicable only when scaleType is 'integer'.
   * Default value: int32
   */
  wordLength?: WordLength;
  /** 
   * This event is triggered when the value of the element is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previous value of the element.
   *  value - The new value of the element.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Focuses the element.
   */
  focus(): void;
  /**
   * Gets the optimal size of the element (the current width and the height based on the plotted internal elements). 
   * @returns {any}
   */
  getOptimalSize(): any;
  /**
   * Get/set the value of the gauge.
   * @param {string | number | Date} value?. The value to be set. If no parameter is passed, returns the current value of the gauge. The value can be a date only when <b>scaleType</b> is 'date'.
   * @returns {string}
   */
  val(value?: string | number | Date): string;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-gauge"): Gauge;
			querySelector(selectors: "smart-gauge"): Gauge | null;	
			querySelectorAll(selectors: "smart-gauge"): NodeListOf<Gauge>;
			getElementsByTagName(qualifiedName: "smart-gauge"): HTMLCollectionOf<Gauge>;
			getElementsByName(elementName: "smart-gauge"): NodeListOf<Gauge>;	
    }
}

/**Determines the type of gauge's indicator. */
export declare type GaugeAnalogDisplayType = 'needle' | 'fill' | 'line';
/**Sets the position of the digital display inside the element. */
export declare type GaugeDigitalDisplayPosition = 'bottom' | 'center' | 'right' | 'top';
/**Determines the visibility of the labels inside the element. */
export declare type LabelsVisibility = 'all' | 'endPoints' | 'none';
/**Determines when the value of the element is updated. */
export declare type DragMechanicalAction = 'switchUntilReleased' | 'switchWhenReleased' | 'switchWhileDragging';
/**Determines whether the element works with numbers or dates. */
export declare type ScaleMode = 'date' | 'numeric';
/**Determines the position of the needle when analogDisplayType is 'needle'.  */
export declare type GaugeNeedlePosition = 'center' | 'edge';
/**Determines the position of the scale in the element.  */
export declare type GaugeScalePosition = 'inside' | 'outside' | 'none';
/**Determines the type of the gauge's value and scale.  */
export declare type ScaleType = 'floatingPoint' | 'integer';
/**Determines how the Gauge will size. */
export declare type GaugeSizeMode = 'auto' | 'circle' | 'none';
/**Determines the position of the ticks in the Gauge. */
export declare type TicksPosition = 'scale' | 'track';
/**Determines the visibility of the ticks. */
export declare type TicksVisibility = 'major' | 'minor' | 'none';
/**Sets or gets the word length. Applicable only when scaleType is 'integer'. */
export declare type WordLength = 'int8' | 'int16' | 'int32' | 'int64' | 'uint8' | 'uint16' | 'uint32' | 'uint64';
/**
 Data Grid UI Component that covers everything from paging, sorting, grouping, filtering, and editing to row and column virtualization, right-to-left layout, export to Excel and PDF and Accessibility.
*/
export interface Grid extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
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
   * Sets the grid's data source. The value of dataSource can be an instance of JQX.DataAdapter.
   * Default value: null
   */
  dataSource?: DataAdapter;
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
  onRender?: {(): void};
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
  /** 
   * This event is triggered, when the edit begins.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, column, cell)
   *  row - The edited row.
   *  column - The edited column.
   *  cell - The edited cell.
   */
  onBeginEdit?: ((this: any, ev: Event) => any) | null;
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
	* @param event. The custom event. Custom data event was created with: ev.detail(column, originalEvent)
   *  column - The clicked column.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onColumnClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user double clicks on the header of a column.
	* @param event. The custom event. Custom data event was created with: ev.detail(column, originalEvent)
   *  column - The double-clicked column.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onColumnDoubleClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user resized a column.
	* @param event. The custom event. Custom data event was created with: ev.detail(column, oldWidth, width)
   *  column - The resized column.
   *  oldWidth - The old width of the column.
   *  width - The new width of the column.
   */
  onColumnResize?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user expands a row of the grid. The Grid is in TreeGrid/Grouping mode.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, originalEvent)
   *  row - The expanded row.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onRowExpand?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user collapsed a row of the grid. The Grid is in TreeGrid/Grouping mode.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, originalEvent)
   *  row - The collapsed row. 
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onRowCollapse?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user clicks on a row of the grid.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, originalEvent)
   *  row - The clicked row.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onRowClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user double clicks on a row of the grid.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, originalEvent)
   *  row - The double-clicked row.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onRowDoubleClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user resized a row.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, oldHeight, height)
   *  row - The resized row.
   *  oldHeight - The old height of the row.
   *  height - The new height of the row.
   */
  onRowResize?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user clicks on a cell of the grid.
	* @param event. The custom event. Custom data event was created with: ev.detail(cell, originalEvent)
   *  cell - The clicked cell.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onCellClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user double clicks on a cell of the grid.
	* @param event. The custom event. Custom data event was created with: ev.detail(cell, originalEvent)
   *  cell - The double-clicked cell. 
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onCellDoubleClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the edit ends.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, column, cell)
   *  row - The edited row.
   *  column - The edited column.
   *  cell - The edited cell.
   */
  onEndEdit?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when a filter is added or removed.
	* @param event. The custom event. Custom data event was created with: ev.detail(columns, data)
   *  columns - Array of columns.
   *  data - Array of {dataField: string, filter: string}. <em>dataField</em> is the column's data field. <em>filter</em> is a filter expression like 'startsWith B'
   */
  onFilter?: ((this: any, ev: Event) => any) | null;
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
  onRowTap?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user touches and holds on the cell for at least 300ms.
	* @param event. The custom event. Custom data event was created with: ev.detail(cell, originalEvent)
   *  cell - The tapped row.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onCellTap?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user changes the pages.
	* @param event. The custom event.    */
  onPage?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when a sorting column is added or removed.
	* @param event. The custom event. Custom data event was created with: ev.detail(columns, data)
   *  columns - Array of columns.
   *  data - Array of {dataField: string, sortOrder: string, sortIndex: number}. <em>dataField</em> is the column's data field. <em>sortOrder</em> is 'asc' or 'desc', <em>sortIndex</em> is the index of the column in multi column sorting.
   */
  onSort?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user reaches the bottom of the grid.
	* @param event. The custom event.    */
  onScrollBottomReached?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user reaches the top of the grid.
	* @param event. The custom event.    */
  onScrollTopReached?: ((this: any, ev: Event) => any) | null;
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
   * @param {string | number} rowId. row bound id
   * @param {string} dataField?. column bound data field
   * @returns {boolean}
   */
  beginEdit(rowId: string | number, dataField?: string): boolean;
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
   * @param {any[]} dataSource?. Chart's data source
   */
  createChart(type: string, dataSource?: any[]): void;
  /**
   * Delete a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
   * @param {string | number} rowId. row bound id
   */
  deleteRow(rowId: string | number): void;
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
   * @param {string | number} rowId. row bound id
   */
  hideDetail(rowId: string | number): void;
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
   * Shows the Details of a Row, when row details are enabled.
   * @param {string | number} rowId. row bound id
   */
  showDetail(rowId: string | number): void;
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

  /* Get a member by its name */
  [name: string]: any;
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
   * Default value: "number"
   */
  autoGenerateRowLabelMode?: string;
  /**
   * Generates labels as 'numbers' or 'letters.  This property affects the rendering of the column header.
   * Default value: "letter"
   */
  autoGenerateColumnLabelMode?: string;
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

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Enables or disables the Cells Value wrapping. When the property is true, cell value can wrap in multiple lines.
   * Default value: false
   */
  allowCellsWrap?: boolean;
  /**
   * Sets the width of the auto-generated Grid columns.
   * Default value: null
   */
  autoGenerateColumnWidth?: number | null;
  /**
   * Sets the width of the Grid columns.
   * Default value: null
   */
  columnWidth?: any;
  /**
   * Sets the height of the Grid columns.
   * Default value: null
   */
  columnHeight?: any;
  /**
   * Sets the minimum height of the Grid columns.
   * Default value: 30
   */
  columnMinHeight?: any;
  /**
   * Sets the minimum height of the Grid rows.
   * Default value: 30
   */
  rowMinHeight?: number;
  /**
   * Sets the height of the Grid rows. The property can be set to null, auto or a number.
   * Default value: null
   */
  rowHeight?: any;
}

/**The <em>clipboard</em> property is used to enable/disable clipboard operations with Ctrl+C, Ctrl+X and Ctrl+V keyboard navigations.. */
export interface GridClipboard {

  /* Get a member by its name */
  [name: string]: any;
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
   * Default value: none
   */
  onPasteValue?: any;
}

export interface GridColumn {

  /* Get a member by its name */
  [name: string]: any;
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
  allowSelect?: boolean;
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
   * Sets or gets the column's cells format.
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
   * Sets or gets the column's data source bound field which will be displayed to the user. When the property is not set, it is equal to the 'dataField'.
   * Default value: ""
   */
  displayField?: string;
  /**
   * Gets the HTML Element. The property returns null when the Column is not in the View.
   * Default value: null
   */
  element?: HTMLElement;
  /**
   * Sets or gets the column's editor. The property expects 'input', 'autoComplete', 'numberInput', 'checkBox', 'deteTimePicker', 'textArea' or a custom object with 'template' property which defines the editor type, 'onInit' and 'onRender' callback functions.
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
   * Default value: 
   */
  icon?: any;
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
   * Sets or gets whether the column's header action drop-down button is displayed. This button opens the column's menu.
   * Default value: false
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
  width?: any;
  /**
   * Sets or gets the column's template. The property expects the 'id' of HTMLTemplateElement or HTML string which is displayed in the cells.
   * Default value: 
   */
  template?: any;
  /**
   * Sets or gets the column's header vertical alignment. Accepts: 'top', 'bottom' and 'center'
   * Default value: center
   */
  verticalAlign?: VerticalAlignment;
  /**
   * Sets or gets whether the column is visible. Set the property to 'false' to hide the column.
   * Default value: true
   */
  visible?: boolean;
}

/**Column Menu is the drop-down menu displayed after clicking the column header's drop-down button, which is displayed when you hover the column header. It allows you to customize column settings. For example: Sort, Filter or Group the Grid by the current column. */
export interface GridColumnMenu {

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the commant of the column menu customize type.
   * Default value: customizeTypeCommand
   */
  command?: any;
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

  /* Get a member by its name */
  [name: string]: any;
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

/**Sets the Grid Charting Data Visualization. */
export interface GridCharting {

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the dialog header.
   * Default value: ""
   */
  header?: string;
  /**
   * Sets or gets the dialog height.
   * Default value: 400
   */
  height?: any;
  /**
   * Sets or gets the dialog width.
   * Default value: 400
   */
  width?: any;
  /**
   * Sets or gets the dialog Left position.
   * Default value: center
   */
  left?: any;
  /**
   * Sets or gets the dialog Top position.
   * Default value: center
   */
  top?: any;
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

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
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
   * Default value: "portrait"
   */
  pageOrientation?: string;
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
   * Default value: false
   */
  viewStart?: number | null;
  /**
   * Determines the end row index that will be exported or printed. 'view' should be set to true
   * Default value: false
   */
  viewEnd?: number | null;
}

/**Describes the grid's editing settings. */
export interface GridEditing {

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the position of the 'Add New Row' UI element.
   * Default value: both
   */
  position?: LayoutPosition;
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

/**Describes the grid's filtering settings. */
export interface GridFiltering {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Enables filtering.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * An array of filtering conditions to apply to the grid. Each member of the filter array is an array with two members. The first one is the column dataField to apply the filter to. The second one is the filtering condition.
   * Default value: 
   */
  filter?: any[];
  /**
   * (In Development)Describes the filter row's settings.
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

/**(In Development)Describes the filter row's settings. */
export interface GridFilteringFilterRow {

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
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
   * Sets the group row height.
   * Default value: 50
   */
  groupRowHeight?: any;
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
   * Describes the group panel's settings.
   * Default value: [object Object]
   */
  groupPanel?: GridGroupingGroupPanel;
  /**
   * Describes the group summary row's settings.
   * Default value: [object Object]
   */
  summaryRow?: GridGroupingSummaryRow;
}

/**Describes the group bar's settings. */
export interface GridGroupingGroupBar {

  /* Get a member by its name */
  [name: string]: any;
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

/**Describes the group panel's settings. */
export interface GridGroupingGroupPanel {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Makes the group panel visible.
   * Default value: false
   */
  visible?: boolean;
}

/**Describes the group summary row's settings. */
export interface GridGroupingSummaryRow {

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the visibility of 'previous page' and 'next page' buttons.
   * Default value: true
   */
  visible?: boolean;
}

/**Describes the settings about buttons 'first page' and 'last page'. */
export interface GridPagerNavigationButtonsFirstLastButtons {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the visibility of 'first page' and 'last page' buttons.
   * Default value: true
   */
  visible?: boolean;
}

/**Describes the labels settings for navigation buttons. */
export interface GridPagerNavigationButtonsLabels {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the visibility of labels for navigation buttons.
   * Default value: false
   */
  visible?: boolean;
}

/**Describes the settings about navigation input option. */
export interface GridPagerNavigationInput {

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the column header visibility.
   * Default value: true
   */
  visible?: boolean;
}

/**Describes the settings for the group header. */
export interface GridGroupHeader {

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
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
}

/**Describes the footer settings of the grid. */
export interface GridFooter {

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
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
  allowSelect?: boolean;
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
   * Sets or gets whether the row is visible. Set the property to 'false' to hide the row.
   * Default value: true
   */
  visible?: boolean;
  /**
   * Gets the visible index of the row.
   * Default value: -1
   */
  visibleIndex?: number;
}

export interface GridCell {

  /* Get a member by its name */
  [name: string]: any;
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
}

/**Describes the selection settings. */
export interface GridSelection {

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
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

  /* Get a member by its name */
  [name: string]: any;
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
   * Sets the count of allowed sorting columns.
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

/**Sets the row resize mode. split resize mode 'grows' or 'shrinks' the resize element's size and 'shrinks' or 'grows' the next sibling element's size. growAndShrink resize mode 'grows' or 'shrinks' the resize element's size */
export declare type GridResizeMode = 'none' | 'split' | 'growAndShrink';
/**Sets or gets whether the copy-pasted values will be auto-filled by using automatic pattern detection. This is used in the Drag&Drop Multiple Cells selection. none does nothing. copy just copies the cells. 'fillSeries' detects and automatically fills the values. For example, if the selection has '1, 2' and the possible positions are more, the pasted values would be '1, 2, 3, 4, etc. */
export declare type GridClipboardAutoFillMode = 'none' | 'copy' | 'fillSeries';
/**Sets or gets whether the position of the checkbox selection column. */
export declare type Position = 'near' | 'far';
/**Sets or gets the sort order of the column. Accepts: 'asc', 'desc' and null. */
export declare type GridColumnSortOrder = 'asc' | 'desc' | null;
/**Determines the way editing is initiated. */
export declare type GridEditingAction = 'none' | 'click' | 'dblClick';
/**Sets what is to be displayed in command column buttons. */
export declare type GridCommandDisplayMode = 'label' | 'icon' | 'labelAndIcon';
/**Sets the grid's edit mode. */
export declare type GridEditingMode = 'cell' | 'row';
/**Sets the way filtering through the filter row is applied. */
export declare type GridFilteringFilterRowApplyMode = 'auto' | 'click';
/**Sets the group expand mode. */
export declare type GridGroupingExpandMode = 'buttonClick' | 'rowClick';
/**Sets the ellipsis display mode. */
export declare type GridPagerAutoEllipsis = 'none' | 'before' | 'after' | 'both';
/**Sets or gets whether the selection allows you to select 'one', 'many' or a variation of 'many' called 'extended'. 'one' allows you to have only single cell or row selected. 'many'  */
export declare type GridSelectionMode = 'one' | 'many' | 'extended';
/**Sets or gets whether the selection happens on 'click' or 'doubleClick'. 'none' means that selection can happen only through API. */
export declare type GridSelectionAction = 'none' | 'click' | 'doubleClick';
/**Sets or gets whether the checkbox selection selects all rows in the current page or all rows. The 'none' setting disables the header checkbox. */
export declare type GridSelectionCheckBoxesSelectAllMode = 'none' | 'page' | 'all';
/**Sets the count of allowed sorting columns. */
export declare type GridSortingMode = 'one' | 'many';
/**
 Defines a group of grouped items in a panel.
*/
export interface GroupPanel extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets the the position of the close button of group panel items.
   * Default value: left
   */
  closeButtonPosition?: GroupPanelCloseButtonPosition;
  /**
   * Determines the data source that will be loaded to the group panel.Each member of the dataSource array is an object with the following fields:dataField - the dataField of the column to be grouped.dataType - the data type of the column to be grouped.groupIndex - the group order of columns. If this value is -1, the grouping will not be applied by this column initially.label - the column label to be displayed in the column selection input.icon - a specific class to be applied to the respective item in the column selection input.sortDirection - the sort direction to be applied when grouping. Possible values: 'ascending' and 'descending'.
   * Default value: null
   */
  dataSource?: {label: string, dataField: string, dataType: string, sortDirection: string, groupIndex: number}[];
  /**
   * Enables or disables the group panel.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Sets or gets the maximum number of columns to group by. If set to null, there is no limit.
   * Default value: 8
   */
  maxLevel?: number;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid ''!",
   *     "propertyInvalidValueType": "Invalid ''!",
   *     "methodInvalidValueType": "Invalid ''!",
   *     "methodInvalidArgumentsCount": "Invalid '' argument(s)!",
   *     "methodInvalidReturnType": "Invalid ''!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": "'.",
   *     "htmlTemplateNotSuported": ": Web Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "apply": "Apply",
   *     "booleanFirst": "?",
   *     "booleanLast": "?",
   *     "cancel": "Cancel",
   *     "dateFirst": "1",
   *     "dateLast": "9",
   *     "from": "from",
   *     "numberFirst": "1",
   *     "numberLast": "9",
   *     "pickAnother": "Pick another field to group by",
   *     "firstBy": "Group by",
   *     "stringFirst": "A",
   *     "stringLast": "Z",
   *     "thenBy": "then by",
   *     "collapseAll": "Collapse all",
   *     "expandAll": "Expand all"
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
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when the "Apply" button is clicked.
	* @param event. The custom event.    */
  onApply?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the "Cancel" button is clicked.
	* @param event. The custom event.    */
  onCancel: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the "Collapse all" button is clicked.
	* @param event. The custom event.    */
  onCollapseAll?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the "Expand all" button is clicked.
	* @param event. The custom event.    */
  onExpandAll?: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-group-panel"): GroupPanel;
			querySelector(selectors: "smart-group-panel"): GroupPanel | null;	
			querySelectorAll(selectors: "smart-group-panel"): NodeListOf<GroupPanel>;
			getElementsByTagName(qualifiedName: "smart-group-panel"): HTMLCollectionOf<GroupPanel>;
			getElementsByName(elementName: "smart-group-panel"): NodeListOf<GroupPanel>;	
    }
}

/**Sets or gets the the position of the close button of group panel items. */
export declare type GroupPanelCloseButtonPosition = 'left' | 'right';
/**
 Input specifies an input field where the user can enter data. Auto-complete options are displayed for easier input.
*/
export interface Input extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines the delay before the drop down opens to show the matches from the auto complete operation. The delay is measured in miliseconds.
   * Default value: 100
   */
  autoCompleteDelay?: number;
  /**
   * Determines the data source that will be loaded to the Input. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value. It can also be a callback that returns an Array of items as previously described.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines the position of the drop down button.
   * Default value: right
   */
  dropDownButtonPosition?: DropDownButtonPosition;
  /**
   * Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownHeight?: string | number;
  /**
   * Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * Determines the maximum number of matched items that should be visible inside the drop down as a result of a new autoComplete query. By default the maximum number of 8 items can be displayed inside the drop down.
   * Default value: 8
   */
  items?: number;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
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
   *     "invalidNode": "."
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines the minimum number of characters inside the input in order to trigger the autocomplete functionality that will open the drop down and show the matched items.
   * Default value: 1
   */
  minLength?: number;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting data inside an HTML form.
   * Default value: ""
   */
  name?: string;
  /**
   * Determines whether the drop down is opened or not.
   * Default value: false
   */
  opened?: boolean;
  /**
   * Determines the placeholder of the input.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Sets or gets the query that is used to filter the items. Query is used by the autoComplete operation. Empty string means that all items from the data source will be displayed and no filter query is applied.
   * Default value: 
   */
  query?: string | number;
  /**
   * Determines the auto complete query mode. This property also determines the matching algorithm for the autocomplete operation.
   * Default value: containsIgnoreCase
   */
  queryMode?: InputQueryMode;
  /**
   * Determines whether ot not the user can enter text inside the input. if dropDownButtonPosition is set to 'left' or 'right' then readonly determines whether the element acts as a ComboBox or a DropDownList if a dataSource is provided.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines whether the items are sorted alphabetically or not
   * Default value: false
   */
  sorted?: boolean;
  /**
   * Determines the sorting algorithm - ascending(asc) or descending(desc) if sort is enabled.
   * Default value: "asc"
   */
  sortDirection?: string;
  /**
   * Determines the theme for the element. Themes define the look of the elements.
   * Default value: ""
   */
  theme?: string;
  /**
   * Determines the input type. Input type determines what input can be entered.
   * Default value: ""
   */
  type?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the value of the element.
   * Default value: ""
   */
  value?: string;
  /** 
   * This event is triggered when the selection is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(label, oldLabel, oldValue, value)
   *  label - The label of the new selected item.
   *  oldLabel - The label of the item that was previously selected before the event was triggered.
   *  oldValue - The value of the item that was previously selected before the event was triggered.
   *  value - The value of the new selected item.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Closes the drop down.
   */
  close(): void;
  /**
   * Ensures that the active ( selected ) item is always visible.
   */
  ensureVisible(): void;
  /**
   * Opens the drop down.
   */
  open(): void;
  /**
   * Selects the text inside the input or if it is <b>readonly</b> then the element is focused.
   */
  select(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-input"): Input;
			querySelector(selectors: "smart-input"): Input | null;	
			querySelectorAll(selectors: "smart-input"): NodeListOf<Input>;
			getElementsByTagName(qualifiedName: "smart-input"): HTMLCollectionOf<Input>;
			getElementsByName(elementName: "smart-input"): NodeListOf<Input>;	
    }
}

/**Determines the auto complete query mode. This property also determines the matching algorithm for the autocomplete operation. */
export declare type InputQueryMode = 'contains' | 'containsIgnoreCase' | 'doesNotContain' | 'doesNotContainIgnoreCase' | 'equals' | 'equalsIgnoreCase' | 'startsWith' | 'startsWithIgnoreCase' | 'endsWith' | 'endsWithIgnoreCase';
/**
 Kanban represents a kanban board that visually depicts work at various stages of a process using cards to represent tasks and columns to represent each stage of the process.
*/
export interface Kanban extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Toggles the visibility of the column buttons for adding tasks. A particular button can be disabled by setting addNewButton in the column's definition to false.
   * Default value: false
   */
  addNewButton?: boolean;
  /**
   * Allows the dragging of tasks.
   * Default value: true
   */
  allowDrag?: boolean;
  /**
   * Allows the dropping of tasks.
   * Default value: true
   */
  allowDrop?: boolean;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Enables or disables auto load state from the browser's localStorage. Information about tasks and their position and selected state, filtering, sorting, collapsed columns, as well as the values of the properties taskActions, taskComments, taskDue, taskPriority, taskProgress, taskTags, and taskUserIcon is loaded.
   * Default value: true
   */
  autoLoadState?: boolean;
  /**
   * Enables or disables auto save state to the browser's localStorage. Information about tasks and their position and selected state, filtering, sorting, collapsed columns, as well as the values of the properties taskActions, taskComments, taskDue, taskPriority, taskProgress, taskTags, and taskUserIcon is saved.
   * Default value: false
   */
  autoSaveState?: boolean;
  /**
   * Allows collapsing the card content.
   * Default value: false
   */
  collapsible?: boolean;
  /**
   * Describes the columns properties.
   * Default value: 
   */
  columns?: KanbanColumn[];
  /**
   * Sets or gets the id of the current user. Has to correspond to the id of an item from the users property/array. Depending on the current user, different privileges are enabled. If no current user is set, privileges depend on the element's properties.
   * Default value: false
   */
  currentUser?: string | number;
  /**
   * Determines the data source to be visualized in the kanban board.
   * Default value: null
   */
  dataSource?: KanbanDataSource[];
  /**
   * Determines the offset of the drag feedback element from the mouse cursor when dragging tasks. The first member of the array is the horizontal offset and the second one - the vertical offset. If set to 'auto', the offset is based on the mouse position when the dragging started.
   * Default value: auto
   */
  dragOffset?: boolean;
  /**
   * Sets or gets whether tasks can be edited (including the assigning of users to tasks).
   * Default value: false
   */
  editable?: boolean;
  /**
   * Sets or gets the format string of the "Due date" label and the "Start date" and "Due date" editors.
   * Default value: "d"
   */
  formatStringDate?: string;
  /**
   * Sets or gets the format string of comments time stamp.
   * Default value: "MMM d, HH:mm"
   */
  formatStringTime?: string;
  /**
   * Sets or gets the header position. The header contains the Customize, Filter, Sort, and Search buttons.
   * Default value: none
   */
  headerPosition?: KanbanHeaderPosition;
  /**
   * Sets or gets the way column hierarchy is represented.
   * Default value: columns
   */
  hierarchy?: KanbanHierarchy;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
   * Default value:    * { 'en': { 'addFilter': '+ Add filter', 'and': 'And', 'apply': 'Apply', 'booleanFirst': '☐', 'booleanLast': '☑', 'cancel': 'Cancel', 'CONTAINS': 'contains', 'CONTAINS_CASE_SENSITIVE': 'contains (case sensitive)', 'dateFirst': '1', 'dateLast': '9', 'DOES_NOT_CONTAIN': 'does not contain', 'DOES_NOT_CONTAIN_CASE_SENSITIVE': 'does not contain (case sensitive)', 'EMPTY': 'empty', 'ENDS_WITH': 'ends with', 'ENDS_WITH_CASE_SENSITIVE': 'ends with (case sensitive)', 'EQUAL': 'equal', 'EQUAL_CASE_SENSITIVE': 'equal (case sensitive)', 'filter': 'Filter', 'filteredByMultiple': '"?', 'remove': 'Remove', 'removeSubtask': 'Remove subtask', 'send': 'Send', 'startDate': 'Start date', 'status': 'Status', 'swimlane': 'Swimlane', 'tags': 'Tags', 'text': 'Text', 'userId': 'User ID', 'userIcon': 'User icon' } }
   */
  messages?: any;
  /**
   * Determines selection mode.
   * Default value: zeroOrOne
   */
  selectionMode?: KanbanSelectionMode;
  /**
   * Describes the swimlanes in the kanban board. Sub-columns are not applicable when swimlanes are present.
   * Default value: 
   */
  swimlanes?: KanbanSwimlane[];
  /**
   * Sets or gets the index of the column at which to start the swimlanes.
   * Default value: 0
   */
  swimlanesFrom?: number;
  /**
   * Sets or gets the index of the column at which to end the swimlanes. By default, swimlanes end at the last column.
   * Default value: null
   */
  swimlanesTo?: number;
  /**
   * Sets or gets the allowed tags. If no tags are listed, all tags from the data source are allowed.
   * Default value: 
   */
  tags?: any[];
  /**
   * Toggles the visibility of the task actions icon.
   * Default value: false
   */
  taskActions?: boolean;
  /**
   * Toggles the visibility of the task comments icon.
   * Default value: false
   */
  taskComments?: boolean;
  /**
   * Toggles the visibility of the task due icon.
   * Default value: false
   */
  taskDue?: boolean;
  /**
   * Sets or gets whether tasks can be shown in all levels of column hierarchy or only on leaf columns.
   * Default value: false
   */
  taskPosition?: KanbanTaskPosition;
  /**
   * Toggles the visibility of the task priority icon (shown when priority is low or high).
   * Default value: true
   */
  taskPriority?: boolean;
  /**
   * Toggles the visibility of task progress bar and the completed sub-tasks label.
   * Default value: false
   */
  taskProgress?: boolean;
  /**
   * Toggles the visibility of task tags.
   * Default value: true
   */
  taskTags?: boolean;
  /**
   * Toggles the visibility of the task user icon.
   * Default value: true
   */
  taskUserIcon?: boolean;
  /**
   * Sets or gets a template to be applied to task text. Can be a string beginning with # and referencing the id of a template element on the page. Can also be a function that modifies the task text or the template itself. Finally, it can also be a string that will be parsed.
   * Default value: null
   */
  textTemplate?: any;
  /**
   * Determines whether the user list (as defined by the users property) will be shown when clicking the user icon. Only applicable if editable privileges are enabled.
   * Default value: false
   */
  userList?: boolean;
  /**
   * Toggles the visibility of the task user icon.
   * Default value: false
   */
  users?: KanbanUser[];
  /** 
   * This event is triggered when a task has been updated.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, task, value)
   *  oldValue - The old data of the task
   *  task - The HTML element of the task whose data has been changed
   *  value - The new data of the task
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the edit/prompt dialog is closed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the edit/prompt dialog is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a task is dropped somewhere in the DOM. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(container, data, item, items, originalEvent, previousContainer, target)
   *  container - the Kanban the dragged task(s) is dropped to
   *  data - an object with additional drag details
   *  item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
   *  items - an array with all dragged tasks
   *  originalEvent - the original, browser, event that initiates the drag operation
   *  previousContainer - the Kanban the dragged item(s) is dragged from
   *  target - the element the dragged tasks are dropped to
   */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user is dragging a task.
	* @param event. The custom event. Custom data event was created with: ev.detail(data, item, items, originalEvent)
   *  data - an object with additional drag details
   *  item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
   *  items - an array with all dragged tasks
   *  originalEvent - the original, browser, event that initiates the drag operation
   */
  onDragging?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user starts dragging task(s). The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(container, data, item, items, originalEvent, previousContainer)
   *  container - the Kanban the dragged task(s) is dragged from
   *  data - an object with additional drag details
   *  item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
   *  items - an array with all dragged tasks
   *  originalEvent - the original, browser, event that initiates the drag operation
   *  previousContainer - the Kanban the dragged item(s) is dragged from
   */
  onDragStart: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a filter has been applied.
	* @param event. The custom event.    */
  onFilter?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the edit/prompt dialog is opened.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the edit/prompt dialog is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(comment, purpose, task)
   *  comment - The comment that is about to be removed (if applicable).
   *  purpose - The purpose of the dialog to be opened - <em>'edit'</em> or <em>'prompt'</em>.
   *  task - The task that is about to be edited or removed (if applicable).
   */
  onOpening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when sorting has been applied.
	* @param event. The custom event.    */
  onSort?: ((this: any, ev: Event) => any) | null;
  /**
   * Adds filtering
   * @param {string[]} filters. Filter information
   * @param {string} operator?. Logical operator between the filters of different fields
   */
  addFilter(filters: string[], operator?: string): void;
  /**
   * Adds sorting
   * @param {[] | string} dataFields. The data field(s) to sort by
   * @param {[] | string} orderBy. The sort direction(s) to sort the data field(s) by
   */
  addSort(dataFields: [] | string, orderBy: [] | string): void;
  /**
   * Adds a task to a Kanban column. If no data is specified, an empty task is added to the first column.
   * @param {any} data?. An object containing the new task's data
   */
  addTask(data?: any): void;
  /**
   * Begins an edit operation
   * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
   */
  beginEdit(task: number | string | HTMLElement): void;
  /**
   * Ends the current edit operation and discards changes
   */
  cancelEdit(): void;
  /**
   * Closes any open header panel (drop down)
   */
  closePanel(): void;
  /**
   * Collapses a Kanban column.
   * @param {number | string} column. The index or dataField of the column to collapse
   */
  collapse(column: number | string): void;
  /**
   * Creates a copy of a task in the same column.
   * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
   */
  copyTask(task: number | string | HTMLElement): void;
  /**
   * Ends the current edit operation and saves changes
   */
  endEdit(): void;
  /**
   * Makes sure a task is visible by scrolling to it. If succcessful, the method returns the HTML element of the task.
   * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
   * @returns {HTMLElement}
   */
  ensureVisible(task: number | string | HTMLElement): HTMLElement;
  /**
   * Expands a Kanban column.
   * @param {number | string} column. The index or dataField of the column to expand
   */
  expand(column: number | string): void;
  /**
   * Expands all Kanban columns.
   */
  expandAll(): void;
  /**
   * Exports the Kanban's data.
   * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
   * @param {string} fileName?. The name of the file to export to
   * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
   * @returns {any}
   */
  exportData(dataFormat: string, fileName?: string, callback?: Function): any;
  /**
   * Gets the Kanban's state.
   * @returns 
   */
  getState(): { collapsed: {}, dataSource: [], filtering: { filters: [], operator: string }, selection: { selected: [], selectionStart: number | string, selectionInColumn: string, swimlane: string }, sorting: { dataFields: [], dataTypes: [], orderBy: [] }, tabs: [], visibility: { taskActions: boolean, taskComments: boolean, taskDue: boolean, taskPriority: boolean, taskProgress: boolean, taskTags: boolean, taskUserIcon: boolean } };
  /**
   * Loads the Kanban's state.
   * @param  state?. An object returned by one of the methods getState or saveState. If not passed, gets saved state from the browser's localStorage.
   */
  loadState(state?: { collapsed: {}, dataSource: [], filtering: { filters: [], operator: string }, selection: { selected: [], selectionStart?: number | string, selectionInColumn: string, swimlane: string }, sorting: { dataFields: [], dataTypes: [], orderBy: [] }, tabs: [], visibility: { taskActions: boolean, taskComments: boolean, taskDue: boolean, taskPriority: boolean, taskProgress: boolean, taskTags: boolean, taskUserIcon: boolean } }): void;
  /**
   * Moves a task to a different column.
   * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
   * @param {string} newStatus. The new status of the task (its new column's dataField)
   */
  moveTask(task: number | string | HTMLElement, newStatus: string): void;
  /**
   * Opens the "Customize tasks" header panel (drop down)
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
   * Removes sorting
   */
  removeSort(): void;
  /**
   * Removes a task.
   * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
   * @param {boolean} prompt?. Whether or not to prompt the user before removing the task
   */
  removeTask(task: number | string | HTMLElement, prompt?: boolean): void;
  /**
   * Saves the Kanban's state to the browser's localStorage.
   */
  saveState(): void;
  /**
   * Updates a task.
   * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
   * @param {{}} newData. The new data to visualize in the task.
   */
  updateTask(task: number | string | HTMLElement, newData: {}): void;
}

export interface KanbanColumn {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets whether the column's button for adding tasks is visible. Works in conjunction with the Kanban property of the same name.
   * Default value: true
   */
  addNewButton?: boolean;
  /**
   * Sets or gets whether the column is collapsed.
   * Default value: false
   */
  collapsed?: boolean;
  /**
   * Sets or gets whether the column is collapsible. Works in conjunction with the Kanban property of the same name.
   * Default value: true
   */
  collapsible?: boolean;
  /**
   * Sets or gets the column's sub-columns. Sub-columns has the same properties as top-level columns.
   * Default value: null
   */
  columns?: { addNewButton: boolean, collapsed: string, collapsible: string, columns: [], dataField: string, label: string, orientation: string, selected: string }[];
  /**
   * Sets or gets the column's data source bound field. Corresponds to the status field in the data source.
   * Default value: ""
   */
  dataField?: string;
  /**
   * Sets or gets the text displayed in the column's header.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets whether the tasks in the column flow vertically or horizontally.
   * Default value: vertical
   */
  orientation?: KanbanColumnOrientation;
  /**
   * Sets or gets whether the column is selected. Only applicable to sub-columns when hierarchy is 'tabs'.
   * Default value: false
   */
  selected?: boolean;
}

export interface KanbanDataSource {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * The task's unique ID.
   * Default value: 
   */
  id?: string | number;
  /**
   * A list of sub-tasks.
   * Default value: null
   */
  checklist?: { completed: boolean, text: string }[];
  /**
   * A color used to highlight the task's card visually.
   * Default value: "null"
   */
  color?: string;
  /**
   * Comments about a task.
   * Default value: null
   */
  comments?: { text: string, time: Date, userId: string | number }[];
  /**
   * The task's due date.
   * Default value: null
   */
  dueDate?: Date;
  /**
   * The task's priority.
   * Default value: normal
   */
  priority?: KanbanDataSourcePriority;
  /**
   * The task's progress in percentages - a number from 0 to 100.
   * Default value: null
   */
  progress?: number;
  /**
   * The task's start date.
   * Default value: null
   */
  startDate?: Date;
  /**
   * The task's status. Has to correspond to the dataField of a column or sub-column from the columns property/array.
   * Default value: ""
   */
  status?: string;
  /**
   * The swimlane of the task. Has to correspond to the dataField of a swimlane from the swimlanes property/array, if it is defined.
   * Default value: "null"
   */
  swimlane?: string;
  /**
   * A comma-separated list of tags.
   * Default value: ""
   */
  tags?: string;
  /**
   * The text of the task.
   * Default value: ""
   */
  text?: string;
  /**
   * The ID of the user assigned to the task. Has to correspond to the id of an item from the users property/array.
   * Default value: null
   */
  userId?: string | number;
}

export interface KanbanSwimlane {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * The swimlane's color.
   * Default value: "null"
   */
  color?: string;
  /**
   * Sets or gets the swimlane's data source bound field. Corresponds to the swimlane field in the data source.
   * Default value: ""
   */
  dataField?: string;
  /**
   * Sets or gets the text displayed in the swimlane.
   * Default value: ""
   */
  label?: string;
}

export interface KanbanUser {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets whether the user has a privilege to add or copy tasks.
   * Default value: true
   */
  allowAdd?: boolean;
  /**
   * Sets whether the user has a privilege to add comments to tasks.
   * Default value: true
   */
  allowComment?: boolean;
  /**
   * Sets whether the user has a privilege to drag tasks. Works along with the property allowDrag.
   * Default value: true
   */
  allowDrag?: boolean;
  /**
   * Sets whether the user has a privilege to edit tasks. Works along with the property editable.
   * Default value: true
   */
  allowEdit?: boolean;
  /**
   * Sets whether the user has a privilege to remove tasks.
   * Default value: true
   */
  allowRemove?: boolean;
  /**
   * The user's unique ID. Corresponds to the userId field in the data source and the property currentUser.
   * Default value: null
   */
  id?: string | number;
  /**
   * A url to an image representing the user.
   * Default value: ""
   */
  image?: string;
  /**
   * The user's name as it will appear in the Users list and "Assigned to" editor.
   * Default value: ""
   */
  name?: string;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-kanban"): Kanban;
			querySelector(selectors: "smart-kanban"): Kanban | null;	
			querySelectorAll(selectors: "smart-kanban"): NodeListOf<Kanban>;
			getElementsByTagName(qualifiedName: "smart-kanban"): HTMLCollectionOf<Kanban>;
			getElementsByName(elementName: "smart-kanban"): NodeListOf<Kanban>;	
    }
}

/**Sets or gets whether the tasks in the column flow vertically or horizontally. */
export declare type KanbanColumnOrientation = 'vertical' | 'horizontal';
/**The task's priority. */
export declare type KanbanDataSourcePriority = 'low' | 'normal' | 'high';
/**Sets or gets the header position. The header contains the Customize, Filter, Sort, and Search buttons. */
export declare type KanbanHeaderPosition = 'none' | 'top' | 'bottom';
/**Sets or gets the way column hierarchy is represented. */
export declare type KanbanHierarchy = 'columns' | 'tabs';
/**Determines selection mode. */
export declare type KanbanSelectionMode = 'zeroOrOne' | 'zeroOrManyExtended';
/**Sets or gets whether tasks can be shown in all levels of column hierarchy or only on leaf columns. */
export declare type KanbanTaskPosition = 'all' | 'leaf';
/**
 Layout splits your content into resizable sections.
*/
export interface Layout extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines the options that will be available for selection inside the context menu.
   * Default value: delete
   */
  contextMenuDataSource?: any;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets Layout's data source.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Optional. A label for all Splitter items inside the Layout. Usefull when exporting the dataSource and reusing it in other elements, for example, tree, etc.
   * Default value: "Template"
   */
  itemLabel?: string;
  /**
   * Optional. A label for all Splitters inside the Layout. Usefull when exporting the dataSource and reusing it in other elements, for example, tree, etc.
   * Default value: "Layout"
   */
  itemGroupLabel?: string;
  /**
   * A getter that returns an array of all Splitter items inside the Layout.
   * Default value: 
   */
  items?: any;
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
   * Sets an object with string values, related to the different states of passwords strength.
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid '!",
   *     "propertyInvalidValueType": "Invalid '!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": ".",
   *     "invalidIndex": "' method accepts an index of type number.",
   *     "invalidNode": "' method accepts an object or an array of objects as it's second parameter.",
   *     "invalidSettings": "' method accepts a string or an object as it's second parameter.",
   *     "delete": "Delete",
   *     "noId": ": requires an id in order to save/load a state."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets Layout's main orientation. The orientation is applied to all Splitters inside the Layout unless they have their orientation explicitly set in the dataSource.
   * Default value: vertical
   */
  orientation?: Orientation;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Determines the resize step during reisizing
   * Default value: 5
   */
  resizeStep?: number;
  /**
   * When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar.
   * Default value: false
   */
  liveResize?: boolean;
  /**
   * Determines the placeholder text of the empty items.
   * Default value: "Empty"
   */
  placeholder?: string;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the selected item. When an item is selected the buttons for creating nested items are displayed inside it.
   * Default value: null
   */
  selectedIndex?: any;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when resizing begins.
	* @param event. The custom event.    */
  onResizeStart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when resizing finishes.
	* @param event. The custom event.    */
  onResizeEnd?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a change regarding the Layout's state has occured, such as inserting a new item, removing an item, etc.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, type)
   *  item - The Splitter item that was the target of a change.
   *  type - A description of the operation that has cause the change.
   */
  onStateChange?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the selection is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldSelectedIndex, selectedIndex)
   *  oldSelectedIndex - The Splitter item that was previously selected.
   *  selectedIndex - The Splitter item that is currently selected.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a the context menu is about to be closed. The operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a the context menu is closed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a the context menu is about to be opened. The operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a the context menu is opened.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an option from the context menu has been clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item, label, value)
   *  target - The Splitter item that was the target of the context menu opening.
   *  item - The Context menu item that was clicked.
   *  label - The label of the context menu that was clicked.
   *  value - The value of the context menu that was clicked.
   */
  onMenuItemClick?: ((this: any, ev: Event) => any) | null;
  /**
   * Appends a new node.
   * @param {Node} node. The node to append
   * @returns {Node}
   */
  appendChild<T extends Node>(node: Node): T;
  /**
   * Inserts the specified "smart-splitter-item" node before the reference "smart-splitter-item" node.
   * @param {Node} newNode. The  "smart-splitter-item" node to insert.
   * @param {Node | null} referenceNode?. The "smart-splitter-item" node before which newNode is inserted.
   * @returns {Node}
   */
  insertBefore<T extends Node>(newNode: Node, referenceNode?: Node | null): T;
  /**
   * Removes a child "smart-splitter-item" node from the Layout.
   * @param {Node} node. The "smart-splitter-item" node to remove.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Returns a Splitter Item according to the index that is passed as an argument.
   * @param {any} index. The index of an item.
   */
  getItem(index: any): void;
  /**
   * Returns the index of a Splitter Item that is passed as an argument.
   * @param {any} item. The index of the Splitter item that is passed as an argument.
   */
  getItemIndex(item: any): void;
  /**
   * Insert a new Splitter item at a given position.
   * @param {any} item. A Splitter Item or an object defining a Splitter item to be inserted.
   * @param {number | string} index. The index at which a new item will be inserted.
   * @param {string} position?. The postition at which the new item will be inseted - top, bottom, left, right.
   */
  insert(item: any, index: number | string, position?: string): void;
  /**
   * Removes a Splitter item from the Layout.
   * @param {any} index. The index of an item to be removed or an instance of Smart.SplitterItem.
   */
  removeItem(index: any): void;
  /**
   * Removes all items from the Layout
   */
  removeAll(): void;
  /**
   * Selects a Splitter item from the Layout.
   * @param {any} index. The index of an item to be removed or an instance of Smart.SplitterItem.
   */
  select(index: any): void;
  /**
   * Unselects the selected item inside the element.
   */
  unselect(): void;
  /**
   * Updates a Splitter item that is inside the Layout.
   * @param {any} index. The index of an item to be removed or an instance of Smart.SplitterItem.
   * @param {any} settings. An object containing properties with new values for the Splitter item that should be updated.
   */
  updateItem(index: any, settings: any): void;
  /**
   * Clears the localStorage of any previous cached states of the element according to it's id.
   */
  clearState(): void;
  /**
   * Saves the current state of the element to LocalStorage. Requires an id to be set to the element.
   * @returns {any}
   */
  saveState(): any;
  /**
   * Loads a previously saved state of the element. If no state is provided as an argument the method will do a localStorage lookup according to the id of the element.
   * @param {any[]} state?. An array of objects that represents a cached state of the element. The result of calling the 'saveState' method.
   */
  loadState(state?: any[]): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-layout"): Layout;
			querySelector(selectors: "smart-layout"): Layout | null;	
			querySelectorAll(selectors: "smart-layout"): NodeListOf<Layout>;
			getElementsByTagName(qualifiedName: "smart-layout"): HTMLCollectionOf<Layout>;
			getElementsByName(elementName: "smart-layout"): NodeListOf<Layout>;	
    }
}

/**
 LET Toggle button with Checked boolean value.
*/
export interface Led extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets the check state.
   * Default value: false
   */
  checked?: boolean;
  /**
   * Determines when the element fires a click event.
   * Default value: release
   */
  clickMode?: ClickMode;
  /**
   * Enables or disables the LED.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets the content for the 'false' state.
   * Default value: """"
   */
  falseContent?: string;
  /**
   * Sets custom template for LED's false state.
   * Default value: null
   */
  falseTemplate?: any;
  /**
   * Sets the LED to indeterminate state.
   * Default value: false
   */
  indeterminate?: boolean;
  /**
   * Sets the content for the 'null' state.
   * Default value: """"
   */
  indeterminateContent?: string;
  /**
   * Sets a custom template for LED's indeterminate state.
   * Default value: null
   */
  indeterminateTemplate?: any;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: """"
   */
  name?: string;
  /**
   * If the widgets is readonly, the users cannot iteract with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Sets the shape of LED.
   * Default value: round
   */
  shape?: LedShape;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets the content for the 'true' state.
   * Default value: """"
   */
  trueContent?: string;
  /**
   * Sets custom template for LED's true state.
   * Default value: null
   */
  trueTemplate?: any;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the element's value.
   * Default value: """"
   */
  value?: string;
  /** 
   * This event is triggered when the widget is checked/unchecked.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previous value of the element before it was changed.
   *  value - The new value of the element.
   */
  onChange: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-led"): Led;
			querySelector(selectors: "smart-led"): Led | null;	
			querySelectorAll(selectors: "smart-led"): NodeListOf<Led>;
			getElementsByTagName(qualifiedName: "smart-led"): HTMLCollectionOf<Led>;
			getElementsByName(elementName: "smart-led"): NodeListOf<Led>;	
    }
}

/**Sets the shape of LED. */
export declare type LedShape = 'round' | 'square';
/**
 ListBox allows the user to select one or more items from a list.
*/
export interface ListBox extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Enables or disables the ability to drag list items out of the List box. Disabled items cannot be dragged.
   * Default value: false
   */
  allowDrag?: boolean;
  /**
   * Enables or disables the ability to drop list items inside the target List box.
   * Default value: false
   */
  allowDrop?: boolean;
  /**
   * Determines the number of color alternations in rows.
   * Default value: 0
   */
  alternationCount?: number;
  /**
   * Determines the ending index of color alternations in rows.
   * Default value: 0
   */
  alternationEnd?: number;
  /**
   * Determines the starting index of color alternations in rows
   * Default value: 0
   */
  alternationStart?: number;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Enables or disables auto sorting. If sorted is enabled, but autoSort is false, the element will not be re-sorted automatically.
   * Default value: true
   */
  autoSort?: boolean;
  /**
   * Determines the data source that will be loaded to the ListBox. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value, group. It can also be a callback that returns an Array of items as previously described.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables the list box.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines whether an indicator will appear during filtering and remote item loading.
   * Default value: false
   */
  displayLoadingIndicator?: boolean;
  /**
   * Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property.
   * Default value: """"
   */
  displayMember?: string;
  /**
   * A callback function for customizing the HTML of the drag feedback. It receives one parameter - the currently dragged item.
   * Default value: null
   */
  dragFeedbackFormatFunction?: any;
  /**
   * Determines the offset of the drag feedback element from the mouse cursor when dragging an item. The first member of the array is the horizontal offset and the second one - the vertical offset.
   * Default value: 10,10
   */
  dragOffset?: number[];
  /**
   * Determines what happens when an item is dropped.
   * Default value: move
   */
  dropAction?: ListBoxDropAction;
  /**
   * Determines if list items can be edited or not. If enabled, items can be edited by double clicking on a target item ( that is not disabled ) or pressing the F2 key on the keyboard.
   * Default value: false
   */
  editable?: boolean;
  /**
   * Determines whether list items can be filtered or not. If enable a filter input appears at the top of the list box.
   * Default value: false
   */
  filterable?: boolean;
  /**
   * A callback that should return a condition that will be used for custom item filtering. Used in conjunction with filterMode 'custom'
   * Default value: null
   */
  filterCallback?: any;
  /**
   * Determines the filtering mode.
   * Default value: containsIgnoreCase
   */
  filterMode?: FilterMode;
  /**
   * Determines the placeholder for the filter input field.
   * Default value: ""
   */
  filterInputPlaceholder?: string;
  /**
   * If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups.
   * Default value: false
   */
  grouped?: boolean;
  /**
   * Determines which attribute from the dataSource object will be used as the group member for the items. If not set, by default 'group' property is used from the source object. groupMember is especially usefull when loading the data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used to group the items.
   * Default value: null
   */
  groupMember?: string | null;
  /**
   * Determines the visibility of the horizontal Scroll bar.
   * Default value: auto
   */
  horizontalScrollBarVisibility?: HorizontalScrollBarVisibility;
  /**
   * IncrementalSearchDelay property specifies the time-interval in milliseconds until the previous search query is cleared. The timer starts when the user stops typing. A new query can be started only when the delay has passed.
   * Default value: 700
   */
  incrementalSearchDelay?: number;
  /**
   * Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the List box is focused starts the incremental search.
   * Default value: startsWithIgnoreCase
   */
  incrementalSearchMode?: SearchMode;
  /**
   * Sets the height for all list box items. Used only when virtualization is enabled.
   * Default value: null
   */
  itemHeight?: number;
  /**
   * Determines the item width measuring algorithm.
   * Default value: auto
   */
  itemMeasureMode?: ListItemMeasureMode;
  /**
   * A getter that returns an array of all ListBox items.
   * Default value: 
   */
  items?: {label: string, value: string}[];
  /**
   * A string that represents the id of an HTMLTemplateElement inside the DOM or a reference to the template itself. It's used to set a custom template for the list items.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom.
   * Default value: "Loading..."
   */
  loadingIndicatorPlaceholder?: string;
  /**
   * Determines the position of the loading indicator.
   * Default value: center
   */
  loadingIndicatorPosition?: VerticalAlignment;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language. 
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
   *     "overridingProperties": "' property is used by default.",
   *     "invalidIndex": "' method accepts an index of type number or an Array of numbers.",
   *     "indexOutOfBound": "' method.",
   *     "invalidItem": "' method accepts an object or an array of objects as it's second parameter.",
   *     "invalidSettings": "' method accepts a string or an object as it's second parameter."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: """"
   */
  name?: string;
  /**
   * Determines the placeholder that will be shown when the List box is empty.
   * Default value: "No Items"
   */
  placeholder?: string;
  /**
   * Sets or gets the readonly property. If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Sets or gets the selected indexes. Selected indexes represents an array of the indexes of the items that should be selected.
   * Default value: 
   */
  selectedIndexes?: number[];
  /**
   * Sets or gets elected indexes. Selected values represents the values of the items that should be selected.
   * Default value: 
   */
  selectedValues?: string[];
  /**
   * Determines how many items can be selected depending on the selection mode.
   * Default value: oneOrManyExtended
   */
  selectionMode?: ListSelectionMode;
  /**
   * Determines when listbox selection is achieved - on 'press' or 'release'.
   * Default value: release
   */
  selectionChangeAction?: ListBoxSelectionChangeAction;
  /**
   * Determines whether the items are sorted alphabetically or not
   * Default value: false
   */
  sorted?: boolean;
  /**
   * Determines sorting direction - ascending(asc) or descending(desc)
   * Default value: "asc"
   */
  sortDirection?: string;
  /**
   * Determines the theme for the element. Themes define the look of the elements.
   * Default value: ""
   */
  theme?: string;
  /**
   * Ensures the item with the target index is in view as the first (top) item in the list box.
   * Default value: -1
   */
  topVisibleIndex?: number;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the value. Returns the selection. Return type: {label: string, value: any}[].
   * Default value: null
   */
  value?: any;
  /**
   * Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items.
   * Default value: """"
   */
  valueMember?: string;
  /**
   * Determines the visibility of the vertical scroll bar.
   * Default value: auto
   */
  verticalScrollBarVisibility?: VerticalScrollBarVisibility;
  /**
   * Determines weather or not Virtualization is used for the ListBox. Virtualization allows a huge amount of items to be loaded to the List box while preserving the performance. For example a milion items can be loaded to the list box.
   * Default value: false
   */
  virtualized?: boolean;
  /** 
   * This event is triggered when listbox binding is completed.
	* @param event. The custom event.    */
  onBindingComplete?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when selection is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(addedItems, disabled, index, label, removedItems, selected, value)
   *  addedItems - An array of List items that have been selected.
   *  disabled - A flag indicating whether or not the item that caused the change event is disabled.
   *  index - The index of the List item that triggered the event.
   *  label - The label of the List item that triggered the event.
   *  removedItems - An array of List items that have been unselected before the event was fired.
   *  selected - The selected state of the List item that triggered the event. If an item was selected the value will be true and vice versa.
   *  value - The value of the List item that triggered the event.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an item is dropped. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(container, data, item, originalEvent, previousContainer, target)
   *  container - The List box that an item was dragged <strong>to.</strong>
   *  data - An object that contains data about the dragging operation like start position, start time, etc.
   *  item - The List item that was dragged.
   *  originalEvent - That original event that was fired.
   *  previousContainer - The List box that an item was dragged <strong>from</strong>.
   *  target - The event target.
   */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a List item is being dragged.
	* @param event. The custom event. Custom data event was created with: ev.detail(data, item, originalEvent)
   *  data - An object that contains data about the dragging operation like start position, start time, etc.
   *  item - The List item that is being dragged. This is the item that has been clicked when initiating the drag operation
   *  originalEvent - The original event that initiates the dragging operation.
   */
  onDragging?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an item is dragged. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(container, data, item, originalEvent, previousContainer, target)
   *  container - The List box that an item was dragged <strong>to.</strong>
   *  data - An object that contains data about the dragging oepration like start position, start time, etc.
   *  item - The List item that was dragged.
   *  originalEvent - That original event that was fired.
   *  previousContainer - The List box that an item was dragged <strong>from</strong>.
   *  target - The event target.
   */
  onDragStart: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an item is clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(disabled, index, label, selected, value)
   *  disabled - Indicates whether the List item that was clicked is disabled or not.
   *  index - Indicates the index of the List item that was clicked.
   *  label - The label of the List item that was clicked.
   *  selected - Indicates whether the List item that was clicked is selected or not.
   *  value - The value of the List item that was clicked.
   */
  onItemClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an item has been edited.
	* @param event. The custom event. Custom data event was created with: ev.detail(selected, disabled, index, label, value)
   *  selected - Indicates whether the List item is selected or not.
   *  disabled - Indicates whether the List item is disabled or not.
   *  index - The index of the List item that was edited.
   *  label - The label of the edited List item.
   *  value - The value of the List item that was edited.
   */
  onItemLabelChange?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user scrolls to the end of the list.
	* @param event. The custom event.    */
  onScrollBottomReached?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user scrolls to the beginning of the list.
	* @param event. The custom event.    */
  onScrollTopReached?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user swipes to the left, inside the listBox.
	* @param event. The custom event.    */
  onSwipeleft?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user swipes to the right, inside the listBox.
	* @param event. The custom event.    */
  onSwiperight?: ((this: any, ev: Event) => any) | null;
  /**
   * Appends a ListItem to the end of the list of items inside element.
   * @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
   * @returns {Node}
   */
  appendChild<T extends Node>(node: Node): T;
  /**
   * Removes all items from the listBox.
   */
  clearItems(): void;
  /**
   * Unselects all items.
   */
  clearSelection(): void;
  /**
   * Ensures the target item is visible by scrolling to it.
   * @param {HTMLElement | string} item. A list item or value of the desired item to be visible.
   */
  ensureVisible(item: HTMLElement | string): void;
  /**
   * Returns an item instance from the listBox.
   * @param {string} value. The value of an item from the listBox.
   * @returns {HTMLElement}
   */
  getItem(value: string): HTMLElement;
  /**
   * Inserts a new item at a specified index.
   * @param {number} index. The index where the item must be inserted.
   * @param {any} items. A single item/definition or an array of List Items/definitions of list items to be inserted. The format of the item definitions is the same as the format of the <strong>dataSource</strong> property.
   */
  insert(index: number, items: any): void;
  /**
   * Inserts a new ListItem before another in the list.
   * @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
   * @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
   * @returns {Node}
   */
  insertBefore<T extends Node>(node: Node, referenceNode: Node | null): T;
  /**
   * Removes an item at a specified index.
   * @param {number} index. The index of the removed item.
   */
  removeAt(index: number): void;
  /**
   * Removes a ListItem from the list of items inside element.
   * @param {Node} node. A ListItem element that is part of the list of items inside the element.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Selects an item from the listBox. 
   * @param {string | number | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list.
   */
  select(item: string | number | HTMLElement): void;
  /**
   * Unselects an item from the listBox. 
   * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
   */
  unselect(item: string | HTMLElement): void;
  /**
   * Updates an item from the listBox.
   * @param {number} index. The index of the item that is going to be updated.
   * @param {any} details. An object that contains the properties and their new values for the List item that should be updated. For example, label, value or selected attributes.
   */
  update(index: number, details: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-list-box"): ListBox;
			querySelector(selectors: "smart-list-box"): ListBox | null;	
			querySelectorAll(selectors: "smart-list-box"): NodeListOf<ListBox>;
			getElementsByTagName(qualifiedName: "smart-list-box"): HTMLCollectionOf<ListBox>;
			getElementsByName(elementName: "smart-list-box"): NodeListOf<ListBox>;	
    }
}

/**Determines what happens when an item is dropped. */
export declare type ListBoxDropAction = 'copy' | 'move' | 'none';
/**Determines when listbox selection is achieved - on 'press' or 'release'. */
export declare type ListBoxSelectionChangeAction = 'press' | 'release';
/**
 Defines a list item for ListBox, ComboBox, DropDownList.
*/
export interface ListItem extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * 
   * Default value: -1
   */
  alternationIndex?: number;
  /**
   * 
   * Default value: ""
   */
  color?: string;
  /**
   * 
   * Default value: plain
   */
  displayMode?: ListItemDisplayMode;
  /**
   * 
   * Default value: false
   */
  grouped?: boolean;
  /**
   * 
   * Default value: false
   */
  selected?: boolean;
  /**
   * 
   * Default value: ""
   */
  value?: string;
  /**
   * 
   * Default value: ""
   */
  label?: string;
  /**
   * 
   * Default value: ""
   */
  details?: string;
  /**
   * 
   * Default value: ""
   */
  group?: string;
  /**
   * 
   * Default value: false
   */
  hidden: boolean;
  /**
   * 
   * Default value: false
   */
  readonly?: boolean;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-list-item"): ListItem;
			querySelector(selectors: "smart-list-item"): ListItem | null;	
			querySelectorAll(selectors: "smart-list-item"): NodeListOf<ListItem>;
			getElementsByTagName(qualifiedName: "smart-list-item"): HTMLCollectionOf<ListItem>;
			getElementsByName(elementName: "smart-list-item"): NodeListOf<ListItem>;	
    }
}


export declare type ListItemDisplayMode = 'plain' | 'checkBox' | 'radioButton';
/**
 Defines a group of list items.
*/
export interface ListItemsGroup extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * 
   * Default value: ""
   */
  label?: string;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-list-items-group"): ListItemsGroup;
			querySelector(selectors: "smart-list-items-group"): ListItemsGroup | null;	
			querySelectorAll(selectors: "smart-list-items-group"): NodeListOf<ListItemsGroup>;
			getElementsByTagName(qualifiedName: "smart-list-items-group"): HTMLCollectionOf<ListItemsGroup>;
			getElementsByName(elementName: "smart-list-items-group"): NodeListOf<ListItemsGroup>;	
    }
}

/**
 ListMenu allows you to present users a listing of options and sub options.
*/
export interface ListMenu extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines whether the element becomes focused on hover or not.
   * Default value: false
   */
  autoFocusOnMouseenter?: boolean;
  /**
   * Allows top-level ListMenu items to be checkable.
   * Default value: false
   */
  checkable?: boolean;
  /**
   * Sets or gets whether checkboxes and radio buttons can be displayed in the top level menu groups. This property is applicable only to the ListMenu itself, and not its smart-menu-item/smart-menu-items-group subitems. See also the property checkable.
   * Default value: false
   */
  checkboxes?: boolean;
  /**
   * Sets the check mode of top-level ListMenu items(groups).
   * Default value: checkbox
   */
  checkMode?: MenuCheckMode;
  /**
   * Determines the data source that will be loaded to the ListMenu. The data source represents an array of objects with the following properties: label - a string representing the text content of the item.value - the value of the item.shortcut - a string representing a shortuct for the item. It will be displayed inside the item.items - allows to define an array of sub menu items.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Displays or hides the loading indicator. Loading indicator is hidden by default.
   * Default value: false
   */
  displayLoadingIndicator?: boolean;
  /**
   * Determines the field in the data source that corresponds to an item's label.
   * Default value: "label"
   */
  displayMember?: string;
  /**
   * Sets custom outer container where the minimized dropdown will be appednded. By default it is in the ListMenu. The value of the property can be an HTML element or the id of an HTML element.
   * Default value: null
   */
  dropDownAppendTo?: string | HTMLElement;
  /**
   * If this property is enabled, when the element's minimized dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Sets or gets the opening direction of the ListMenu minimized dropdown.
   * Default value: auto
   */
  dropDownPosition?: MenuDropDownPosition;
  /**
   * Enables or disables scrolling using the mouse wheel through overflowing menu items.
   * Default value: false
   */
  enableMouseWheelAction?: boolean;
  /**
   * Determines whether menu item filtering is enabled. When enabled a filter input is shown at the top of the element. Only items in the current view can be filtered.
   * Default value: false
   */
  filterable?: boolean;
  /**
   * Determines the placeholder for the filter input.
   * Default value: ""
   */
  filterInputPlaceholder?: string;
  /**
   * Determines the filtering mode.
   * Default value: containsIgnoreCase
   */
  filterMode?: FilterMode;
  /**
   * If enabled, the items will be grouped by their first letter and sorted.
   * Default value: false
   */
  grouped?: boolean;
  /**
   * Determines the field in the data source that corresponds to an item group's subitems collection.
   * Default value: "items"
   */
  itemsMember?: string;
  /**
   * Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom.
   * Default value: "Loading..."
   */
  loadingIndicatorPlaceholder?: string;
  /**
   * Determines the position of the loading indicator inside the element.
   * Default value: center
   */
  loadingIndicatorPosition?: VerticalAlignment;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Allows to load a custom minimize icon from an HTMLTemplateElement.The property acceps the id of an HTMLTemplateElement or it's direct instance.
   * Default value: "null"
   */
  minimizeIconTemplate?: string;
  /**
   * Determines the minimum width of the ListMenu at which it will switch from normal to minimized mode. If set to null, the ListMenu does not minimize automatically.
   * Default value: null
   */
  minimizeWidth?: number | null;
  /**
   * Sets or gets the ListMenu's scroll buttons behavior.
   * Default value: auto
   */
  overflow?: Overflow;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Determines the field in the data source that corresponds to an item's value.
   * Default value: "value"
   */
  valueMember?: string;
  /** 
   * This event is triggered when a jqx-menu-items-group is expanded.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, value, path, children)
   *  item - The menu item that was expanded.
   *  label - The label of the item that was expanded.
   *  value - The value of the item that was expanded.
   *  path - The path of the item that was expanded, e.g. '0.1', '1.1.2'.
   *  children - The children of the item that was expanded.
   */
  onExpand?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a menu item check state is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, value, checked)
   *  item - The menu item which state was changed.
   *  label - The label of the item which state was changed.
   *  value - The value of the item which state was changed.
   *  checked - The checked state of the toggled item. If false the item is not toggled.
   */
  onItemCheckChange?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a list menu item is clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, value)
   *  item - The menu item that was clicked.
   *  label - The label of the clicked item.
   *  value - The value of the clicked item.
   */
  onItemClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user scrolls to the bottom of the ListMenu.
	* @param event. The custom event.    */
  onScrollBottomReached?: ((this: any, ev: Event) => any) | null;
  /**
   * Adds an item to the list.
   * @param {HTMLElement} Item. A smart-menu-item to add to the List Menu.
   * @param {HTMLElement | string} Parent?. The smart-menu-items-group (or its id or numeric path) to add the item to.
   */
  addItem(Item: HTMLElement, Parent?: HTMLElement | string): void;
  /**
   * Navigates to the previous page (smart-menu-items-group).
   * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element
   */
  back(animation?: boolean): void;
  /**
   * Navigates to a particular page (smart-menu-items-group).
   * @param {string} id. The id or numeric path of a page (smart-menu-items-group).
   */
  changePage(id: string): void;
  /**
   * Checks an item.
   * @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group (or its id or numeric path).
   */
  checkItem(item: HTMLElement | string): void;
  /**
   * Gets an item by its id or numeric path.
   * @param {string} id. The id or numeric path of an item
   * @returns {HTMLElement}
   */
  getItem(id: string): HTMLElement;
  /**
   * Maximizes the List Menu.
   */
  maximize(): void;
  /**
   * Minimizes the List Menu. An icon is displayed and the menu is hidden when minimized.
   */
  minimize(): void;
  /**
   * Removes an item.
   * @param {HTMLElement | string} item. The smart-menu-item/smart-menu-items-group (or its id or numeric path) to remove.
   */
  removeItem(item: HTMLElement | string): void;
  /**
   * Unchecks an item.
   * @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group (or its id or numeric path).
   */
  uncheckItem(item: HTMLElement | string): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-list-menu"): ListMenu;
			querySelector(selectors: "smart-list-menu"): ListMenu | null;	
			querySelectorAll(selectors: "smart-list-menu"): NodeListOf<ListMenu>;
			getElementsByTagName(qualifiedName: "smart-list-menu"): HTMLCollectionOf<ListMenu>;
			getElementsByName(elementName: "smart-list-menu"): NodeListOf<ListMenu>;	
    }
}

/**Sets the check mode of top-level ListMenu items(groups). */
export declare type MenuCheckMode = 'checkbox' | 'radioButton';
/**Sets or gets the opening direction of the ListMenu minimized dropdown. */
export declare type MenuDropDownPosition = 'auto' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'overlay-left' | 'overlay-right';
/**Sets or gets the ListMenu's scroll buttons behavior. */
export declare type Overflow = 'auto' | 'hidden' | 'scroll';
/**
 MaskedTextBox uses a mask to control the input of the user.
*/
export interface MaskedTextBox extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines whether promptChar can be entered as valid input by the user.
   * Default value: false
   */
  allowPromptAsInput?: boolean;
  /**
   * Determines whether the input accepts characters only from the ASCII character set.
   * Default value: false
   */
  asciiOnly?: boolean;
  /**
   * Specifies whether the input should be focused when the page is loaded.
   * Default value: false
   */
  autoFocus?: boolean;
  /**
   * Determines whether the mask is shown/hidden on focus/blur even if placeholder is not set.
   * Default value: false
   */
  autoShowMask?: boolean;
  /**
   * Determines whether literals and prompt characters are copied to the clipboard on cut/copy operations.
   * Default value: excludePromptAndLiterals
   */
  cutCopyMaskFormat?: MaskedTextBoxCutCopyMaskFormat;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies the behavior on "Enter" key press. Default mode is "submit".
   * Default value: submit
   */
  enterKeyBehavior?: EnterKeyBehavior;
  /**
   * Determines whether the prompt character in the input mask is hidden when the masked text box isn't focused anymore.
   * Default value: false
   */
  hidePromptOnLeave?: boolean;
  /**
   * Sets additional helper text below the element. The hint is visible only when the element is focused.
   * Default value: ""
   */
  hint?: string;
  /**
   * Determines whether new user input overwrites the existing input value or not.
   * Default value: false
   */
  isOverwriteMode?: boolean;
  /**
   * Sets label above the element. The label is always visible.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines the mask for the input.
   * Default value: "#####"
   */
  mask?: string;
  /**
   * Indicates whether all required fields of the mask have been populated or not.
   * Default value: false
   */
  maskCompleted?: boolean;
  /**
   * Indicates whether all required and optional fields of the mask have been populated or not.
   * Default value: false
   */
  maskFull?: boolean;
  /**
   * Determines the maximum number of characters that the user can enter.
   * Default value: 5
   */
  maxLength?: number;
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
   *     "invalidNode": "."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * A string that appears inside the input when there's no value and mask. 
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Determines the prompt char that is used for the mask of the element.
   * Default value: "_"
   */
  promptChar?: string;
  /**
   * If the element is readonly, the users cannot iteract with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Determines whether the parsing of user input should stop after the first invalid character or not.
   * Default value: false
   */
  rejectInputOnFirstFailure?: boolean;
  /**
   * Specifies that the input must be filled in before submitting a form
   * Default value: false
   */
  required?: boolean;
  /**
   * Determines whether an input character that matches the prompt character should reset the current selected value in the input or not. Applicable only when allowPromptAsInput is enabled.
   * Default value: false
   */
  resetOnPrompt?: boolean;
  /**
   * Determines whether hitting space character resets the currently selected value from the input or not.
   * Default value: false
   */
  resetOnSpace?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies whether the value of the input will be selected on focus or not.
   * Default value: false
   */
  selectAllOnFocus?: boolean;
  /**
   * Determines whether the value of the input should contain or not the prompt/literals of the mask.
   * Default value: excludePromptAndLiterals
   */
  textMaskFormat?: MaskedTextBoxTextMaskFormat;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the value of the element. 
   * Default value: ""
   */
  value?: string;
  /**
   * Callback function that allows to set custom validation on the value. If the function returns false then the value of the input is treated as not valid.
   * Default value: null
   */
  validation?: any;
  /** 
   * This event is triggered when the value of the Text Box is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, newValue)
   *  oldValue - The previous value before it was changed.
   *  newValue - The new value.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered if the <b>validation</b> property is set. Indicates whether valiation has passed successfully or not.
	* @param event. The custom event. Custom data event was created with: ev.detail(success)
   *  success - A flag inidicating whether the validation was successfull or not.
   */
  onValidation?: ((this: any, ev: Event) => any) | null;
  /**
   * Focuses the element. 
   */
  focus(): void;
  /**
   * Blurs the element. 
   */
  blur(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-masked-text-box"): MaskedTextBox;
			querySelector(selectors: "smart-masked-text-box"): MaskedTextBox | null;	
			querySelectorAll(selectors: "smart-masked-text-box"): NodeListOf<MaskedTextBox>;
			getElementsByTagName(qualifiedName: "smart-masked-text-box"): HTMLCollectionOf<MaskedTextBox>;
			getElementsByName(elementName: "smart-masked-text-box"): NodeListOf<MaskedTextBox>;	
    }
}

/**Determines whether literals and prompt characters are copied to the clipboard on cut/copy operations. */
export declare type MaskedTextBoxCutCopyMaskFormat = 'excludePromptAndLiterals' | 'includePrompt' | 'includeLiterals' | 'includePromptAndLiterals';
/**Specifies the behavior on "Enter" key press. Default mode is "submit". */
export declare type EnterKeyBehavior = 'clearOnSubmit' | 'submit';
/**Determines whether the value of the input should contain or not the prompt/literals of the mask. */
export declare type MaskedTextBoxTextMaskFormat = 'excludePromptAndLiterals' | 'includePrompt' | 'includeLiterals' | 'includePromptAndLiterals';
/**
 Horizontal, Vertical and Popup Menu. Popup Menus appear when a user taps an interactive UI element such as an icon, button, action, or content, such as selected items or text.
*/
export interface Menu extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines delay (in milliseconds) before a Menu dropdown is closed when leaving the Menu with the mouse. Applicable only when selectionMode is 'mouseenter'.
   * Default value: 100
   */
  autoCloseDelay?: number;
  /**
   * If set to true, on mouseenter, the element receives focus automatically.
   * Default value: false
   */
  autoFocusOnMouseenter?: boolean;
  /**
   * Allows top-level Menu items (immediate children of the Menu) to be checkable. Sublevels are controlled by setting checkable to the respective smart-menu-items-group.
   * Default value: false
   */
  checkable?: boolean;
  /**
   * Sets or gets whether checkboxes and radio buttons can be displayed in the Menu. This property is applicable only to the Menu itself, and not its smart-menu-item/smart-menu-items-group subitems. See also the property checkable.
   * Default value: false
   */
  checkboxes?: boolean;
  /**
   * Sets the check mode of top-level Menu items (immediate children of the Menu). checkMode can be set to 'checkbox', 'radioButton', or a comma-separated list containing 'checkbox', 'radioButton', or 'none' (e.g. 'checkbox, radioButton, none, checkbox'). When set to a list, each value in the list is applied to groups of Menu items separated by an item with separator (item after the one with separator is the start of a new checkMode context). Sublevels are controlled by setting checkMode to the respective smart-menu-items-group.
   * Default value: checkbox
   */
  checkMode?: MenuCheckMode;
  /**
   * Sets the document event which closes any open Menu drop downs (or the Menu itself when mode is 'dropDown').
   * Default value: up
   */
  closeAction?: MenuCloseAction;
  /**
   * Determines the data source that will be loaded to the Menu. The data source represents an array of objects with the following properties: label - a string representing the text content of the item.value - the value of the item.shortcut - a string representing a shortuct for the item. It will be displayed inside the item.items - allows to define an array of sub menu items.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines the field in the data source that corresponds to an item's label.
   * Default value: "label"
   */
  displayMember?: string;
  /**
   * Sets custom outer container, where all dropdown containers must be appended. By default they are inside the menu. The value of the property can be an HTML element or the id of an HTML element. In mode 'dropDown', the property dropDownAppendTo also controls the parent element of the whole Menu. The open method works relatively to the original place of the Menu in the DOM.
   * Default value: null
   */
  dropDownAppendTo?: string | HTMLElement;
  /**
   * If this property is enabled, when an element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Determines the opening direction of Menu dropdowns.
   * Default value: auto
   */
  dropDownPosition?: MenuDropDownPosition;
  /**
   * Determines the field in the data source that corresponds to an item group's subitems collection.
   * Default value: "items"
   */
  itemsMember?: string;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Used to load a custom minimize icon from an HTMLTemplateElement object. The HTMLTemplateElement is selected by it's id.
   * Default value: "null"
   */
  minimizeIconTemplate?: string;
  /**
   * Determines the minimum width of the Menu at which it will switch from normal to minimized mode. If set to null, the Menu does not minimize automatically.
   * Default value: null
   */
  minimizeWidth?: number;
  /**
   * Determines the menu's display mode.
   * Default value: horizontal
   */
  mode?: MenuMode;
  /**
   * Opens or closes thte menu when it's in 'dropDown' mode.
   * Default value: false
   */
  opened?: boolean;
  /**
   * Sets or gets the menu's scroll buttons behavior. Applicable only when dropDownAppendTo is not null.
   * Default value: auto
   */
  overflow?: Overflow;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the menu's selection mode.
   * Default value: click
   */
  selectionMode?: MenuSelectionMode;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Determines the field in the data source that corresponds to an item's value.
   * Default value: "value"
   */
  valueMember?: string;
  /** 
   * This event is triggered when the menu is closed. The event is fired only in <em>'dropDown'</em> <strong>mode</strong>.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the menu is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function. The event is fired only in <em>'dropDown'</em> <strong>mode</strong>.
	* @param event. The custom event. Custom data event was created with: ev.detail(trigger)
   *  trigger - Indicates whether the event was called from inside the element or programatically.
   */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a jqx-menu-items-group is collapsed.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, value, path, children)
   *  item - The menu item that was collapsed.
   *  label - The label of the toggled item that was collapsed.
   *  value - The value of the toggled item that was collapsed.
   *  path - The path of the toggled item that was collapsed, e.g. '0.1', '1.1.2'.
   *  children - The children items of the toggled item that was collapsed.
   */
  onCollapse?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a jqx-menu-items-group is collapsing.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, value, path, children)
   *  item - The menu item that is going to be collapsed.
   *  label - The label of the toggled item that is going to be collapsed.
   *  value - The value of the toggled item that is going to be collapsed.
   *  path - The path of the toggled item that is going to be collapsed, e.g. '0.1', '1.1.2'.
   *  children - The children items of the toggled item that is going to be collapsed.
   */
  onCollapsing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a jqx-menu-items-group is expanded.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, value, path, children)
   *  item - The menu item that was expanded.
   *  label - The label of the toggled item that was expanded.
   *  value - The value of the toggled item that was expanded.
   *  path - The path of the toggled item that was expanded, e.g. '0.1', '1.1.2'.
   *  children - The children items of the toggled item that was expanded.
   */
  onExpand?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered before a jqx-menu-items-group is expanded.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, value, path, children)
   *  item - The menu item that is going to be expanded.
   *  label - The label of the toggled item that is going to be expanded.
   *  value - The value of the toggled item that is going to be expanded.
   *  path - The path of the toggled item that is going to be expanded, e.g. '0.1', '1.1.2'.
   *  children - The children items of the toggled item that is going to be expanded.
   */
  onExpanding?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a menu item check state is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, value, checked)
   *  item - The menu item which state was changed.
   *  label - The label of the item which state was changed.
   *  value - The value of the item which state was changed.
   *  checked - The checked state of the toggled item. If false the item is not toggled.
   */
  onItemCheckChange?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a menu item is clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, value)
   *  item - The menu item that is toggled.
   *  label - The label of the toggled item.
   *  value - The value of the toggled item.
   */
  onItemClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the menu is opened. The event is fired only in <em>'dropDown'</em> <strong>mode</strong>.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the menu is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function. The event is fired only in <em>'dropDown'</em> <strong>mode</strong>.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | null;
  /**
   * Adds an item to the menu.
   * @param {HTMLElement} Item. A smart-menu-item to add to the Menu.
   * @param {HTMLElement | string} Parent?. The smart-menu-items-group or its id or numeric path to add the item to.
   */
  addItem(Item: HTMLElement, Parent?: HTMLElement | string): void;
  /**
   * Checks an item.
   * @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group or its id or numeric path.
   */
  checkItem(item: HTMLElement | string): void;
  /**
   * Clears all Menu items.
   */
  clear(): void;
  /**
   * Closes the Menu when <strong>mode</strong> is <em>'dropDown'</em>.
   */
  close(): void;
  /**
   * Collapses an item.
   * @param {HTMLElement | string} item?. smart-menu-item/smart-menu-items-group or its id or numeric path. If no item is passed, all open items are collapsed.
   * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
   */
  collapseItem(item?: HTMLElement | string, animation?: boolean): void;
  /**
   * Expands an item.
   * @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group or its id or numeric path.
   * @param {boolean} animation?. If set to false, disables expand animation even if animation is enabled for the element.
   */
  expandItem(item: HTMLElement | string, animation?: boolean): void;
  /**
   * Gets an item by its id or numeric path.
   * @param {string} id. The id or numeric path of an item
   * @returns {HTMLElement}
   */
  getItem(id: string): HTMLElement;
  /**
   * Maximizes the Menu.
   */
  maximize(): void;
  /**
   * Minimizes the Menu.
   */
  minimize(): void;
  /**
   * Opens the Menu when <strong>mode</strong> is <em>'dropDown'</em>.
   * @param {number} left. Horizontal position
   * @param {number} top. Vertical position
   */
  open(left: number, top: number): void;
  /**
   * Removes an item from the menu.
   * @param {HTMLElement | string} item. The smart-menu-item/smart-menu-items-group or its id or numeric path to remove.
   */
  removeItem(item: HTMLElement | string): void;
  /**
   * Unchecks an item.
   * @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group (or its id or numeric path)
   */
  uncheckItem(item: HTMLElement | string): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-menu"): Menu;
			querySelector(selectors: "smart-menu"): Menu | null;	
			querySelectorAll(selectors: "smart-menu"): NodeListOf<Menu>;
			getElementsByTagName(qualifiedName: "smart-menu"): HTMLCollectionOf<Menu>;
			getElementsByName(elementName: "smart-menu"): NodeListOf<Menu>;	
    }
}

/**Sets the document event which closes any open Menu drop downs (or the Menu itself when mode is 'dropDown'). */
export declare type MenuCloseAction = 'down' | 'up' | 'none';
/**Determines the menu's display mode. */
export declare type MenuMode = 'horizontal' | 'vertical' | 'dropDown' | 'tree';
/**Determines the menu's selection mode. */
export declare type MenuSelectionMode = 'click' | 'mouseenter';
/**
 Defines a menu item.
*/
export interface MenuItem extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * 
   * Default value: true
   */
  checked?: boolean;
  /**
   * Enables or disables element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * 
   * Default value: 
   */
  label?: any;
  /**
   * 
   * Default value: null
   */
  level?: number;
  /**
   * 
   * Default value: true
   */
  separator?: boolean;
  /**
   * 
   * Default value: ""
   */
  shortcut?: string;
  /**
   * 
   * Default value: null
   */
  value?: any;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-menu-item"): MenuItem;
			querySelector(selectors: "smart-menu-item"): MenuItem | null;	
			querySelectorAll(selectors: "smart-menu-item"): NodeListOf<MenuItem>;
			getElementsByTagName(qualifiedName: "smart-menu-item"): HTMLCollectionOf<MenuItem>;
			getElementsByName(elementName: "smart-menu-item"): NodeListOf<MenuItem>;	
    }
}

/**
 Defines a group of menu items.
*/
export interface MenuItemsGroup extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * 
   * Default value: false
   */
  checkable?: boolean;
  /**
   * 
   * Default value: false
   */
  checked?: boolean;
  /**
   * 
   * Default value: checkbox
   */
  checkMode?: MenuCheckMode;
  /**
   * Enables or disables element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * 
   * Default value: null
   */
  dropDownHeight?: number;
  /**
   * 
   * Default value: false
   */
  expanded?: boolean;
  /**
   * 
   * Default value: 
   */
  label?: any;
  /**
   * 
   * Default value: null
   */
  level?: number;
  /**
   * 
   * Default value: false
   */
  separator?: boolean;
  /**
   * 
   * Default value: null
   */
  value?: any;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-menu-items-group"): MenuItemsGroup;
			querySelector(selectors: "smart-menu-items-group"): MenuItemsGroup | null;	
			querySelectorAll(selectors: "smart-menu-items-group"): NodeListOf<MenuItemsGroup>;
			getElementsByTagName(qualifiedName: "smart-menu-items-group"): HTMLCollectionOf<MenuItemsGroup>;
			getElementsByName(elementName: "smart-menu-items-group"): NodeListOf<MenuItemsGroup>;	
    }
}

/**
 Defines an advanced filter panel used for Grid and CardView filtering.
*/
export interface MultiColumnFilterPanel extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets the position of the close button of multi column filter panel items.
   * Default value: left
   */
  closeButtonPosition?: MultiColumnFilterPanelCloseButtonPosition;
  /**
   * Determines the data source that will be loaded to the multi column filter panel.Each member of the dataSource array is an object with the following fields:dataField - the dataField of the column to be grouped.dataType - the data type of the column to be grouped.groupIndex - the group order of columns. If this value is -1, the grouping will not be applied by this column initially.label - the column label to be displayed in the column selection input.icon - a specific class to be applied to the respective item in the column selection input.sortDirection - the sort direction to be applied when grouping. Possible values: 'ascending' and 'descending'.
   * Default value: null
   */
  dataSource?: {label: string, dataField: string, dataType: string, sortDirection: string, groupIndex: number}[];
  /**
   * Enables or disables the multi column filter panel.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * A callback function that can be used to modify the settings of value editors.
   * Default value: null
   */
  editorCallback?: any;
  /**
   * Sets or gets the placeholder for the filter value editors.
   * Default value: "Value"
   */
  editorPlaceholder?: string;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Sets or gets the maximum number of columns to group by. If set to null, there is no limit.
   * Default value: 8
   */
  maxLevel?: number;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid ''!",
   *     "propertyInvalidValueType": "Invalid ''!",
   *     "methodInvalidValueType": "Invalid ''!",
   *     "methodInvalidArgumentsCount": "Invalid '' argument(s)!",
   *     "methodInvalidReturnType": "Invalid ''!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": "'.",
   *     "htmlTemplateNotSuported": ": Web Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "apply": "Apply",
   *     "booleanFirst": "?",
   *     "booleanLast": "?",
   *     "cancel": "Cancel",
   *     "dateFirst": "1",
   *     "dateLast": "9",
   *     "from": "from",
   *     "numberFirst": "1",
   *     "numberLast": "9",
   *     "pickAnother": "Pick another field to group by",
   *     "firstBy": "Group by",
   *     "stringFirst": "A",
   *     "stringLast": "Z",
   *     "thenBy": "then by",
   *     "collapseAll": "Collapse all",
   *     "expandAll": "Expand all"
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines the logical operator between the items.
   * Default value: false
   */
  operator?: MultiColumnFilterPanelOperator;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets of gets the initial value of the element.
   * Default value: 
   */
  value?: any;
  /** 
   * This event is triggered when the "Apply" button is clicked.
	* @param event. The custom event.    */
  onApply?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the "Cancel" button is clicked.
	* @param event. The custom event.    */
  onCancel: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the "Collapse all" button is clicked.
	* @param event. The custom event.    */
  onCollapseAll?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the "Expand all" button is clicked.
	* @param event. The custom event.    */
  onExpandAll?: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-multi-column-filter-panel"): MultiColumnFilterPanel;
			querySelector(selectors: "smart-multi-column-filter-panel"): MultiColumnFilterPanel | null;	
			querySelectorAll(selectors: "smart-multi-column-filter-panel"): NodeListOf<MultiColumnFilterPanel>;
			getElementsByTagName(qualifiedName: "smart-multi-column-filter-panel"): HTMLCollectionOf<MultiColumnFilterPanel>;
			getElementsByName(elementName: "smart-multi-column-filter-panel"): NodeListOf<MultiColumnFilterPanel>;	
    }
}

/**Sets or gets the position of the close button of multi column filter panel items. */
export declare type MultiColumnFilterPanelCloseButtonPosition = 'left' | 'right';
/**Determines the logical operator between the items. */
export declare type MultiColumnFilterPanelOperator = 'and' | 'or';
/**
 Defines a multi-line text input control. MultilineTextBox can hold an unlimited number of characters, and the text renders in a fixed-width font
*/
export interface MultilineTextBox extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines whether and how the value should be automatically capitalized as it is entered/edited by the user.
   * Default value: none
   */
  autoCapitalize?: MultilineTextBoxAutoCapitalize;
  /**
   * Determines whether the value of the control can be automatically completed by the browser.
   * Default value: off
   */
  autoComplete?: AutoComplete;
  /**
   * Determines whether element will auto expand when the input overflows vertically.
   * Default value: false
   */
  autoExpand?: boolean;
  /**
   * Determines whether the input should be focused when the page is loaded.
   * Default value: false
   */
  autoFocus?: boolean;
  /**
   * The cols attribute specifies the visible width of a input. If it is specified, it must be a positive integer. If it is not specified, the default value is 20.
   * Default value: 20
   */
  cols?: number;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies how the characters are displayed inside the input.
   * Default value: default
   */
  displayMode?: TextBoxDisplayMode;
  /**
   * Determines the behavior on "Enter" key.
   * Default value: newLine
   */
  enterKeyBehavior?: MultilineTextBoxEnterKeyBehavior;
  /**
   * The form element that the element is associated with (its "form owner"). The value of the attribute must be the ID of a form element in the same document.
   * Default value: ""
   */
  form?: string;
  /**
   * Sets additional helper text below the element. Appears only when the element is focused.
   * Default value: null
   */
  hint?: any;
  /**
   * Controls horizontal scrollbar's visibility. 
   * Default value: auto
   */
  horizontalScrollBarVisibility?: HorizontalScrollBarVisibility;
  /**
   * Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * Sets label above the element. The label is displayed above the input and it's always visible.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Sets or gets the maximum number of characters that the user can enter.
   * Default value: null
   */
  maxLength?: number;
  /**
   * Sets or gets the minimum number of characters that the user can enter.
   * Default value: 0
   */
  minLength?: number;
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
   *     "invalidNode": "."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * The placeholder text that is displayed when no value is applied to the element. 
   * Default value: ""
   */
  placeholder?: string;
  /**
   * If enabled the users cannot iteract with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Specifies that the user must fill in a value before submitting a form that contains the element.
   * Default value: false
   */
  required?: boolean;
  /**
   * Enables/ disables the resizing of the element. If enabled a resizing indicator appears in the bottom corner of the input area.
   * Default value: false
   */
  resizable?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * The number of visible text lines for the control.
   * Default value: 5
   */
  rows?: number;
  /**
   * Specifies whether the content of the input will be selected on focus.
   * Default value: false
   */
  selectAllOnFocus?: boolean;
  /**
   * Indicates the index of the last character in the current selection.
   * Default value: 0
   */
  selectionEnd?: number;
  /**
   * Indicates the index to the first character in the current selection.
   * Default value: 0
   */
  selectionStart?: number;
  /**
   * Specifies whether the element is to have its spelling and grammar checked or not.
   * Default value: false
   */
  spellCheck?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the value of the element.
   * Default value: ""
   */
  value?: string;
  /**
   * Controls vertical scrollbar's visibility. 
   * Default value: auto
   */
  verticalScrollBarVisibility?: VerticalScrollBarVisibility;
  /**
   * Indicates how the control wraps text.
   * Default value: soft
   */
  wrap?: MultilineTextBoxWrap;
  /** 
   * This event is triggered when the value of the text box is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value, type)
   *  oldValue - The previous value of the element before it was changed.
   *  value - The new value of the element.
   *  type - Indicates when the element was called, e.g. on blur or submit.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Focuses the element.
   */
  focus(): void;
  /**
   * The method is used to reset the value of the element box to it's initial state.
   */
  reset(): void;
  /**
   * Returns the currenctly selected text.
   * @param {string} displayMode. If <b>displayMode</b> is set to 'escaped', the value returned from the method contains escaped special characters.
   * @returns {string}
   */
  selection(displayMode: string): string;
  /**
   * Selects a certain part of the input text. If no arguments are specified the whole text will be selected.
   * @param {any} rangeFrom?. Determines the start index of the text selection.
   * @param {any} rangeTo?. Determines the end index of the text selection.
   */
  select(rangeFrom?: any, rangeTo?: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-multiline-text-box"): MultilineTextBox;
			querySelector(selectors: "smart-multiline-text-box"): MultilineTextBox | null;	
			querySelectorAll(selectors: "smart-multiline-text-box"): NodeListOf<MultilineTextBox>;
			getElementsByTagName(qualifiedName: "smart-multiline-text-box"): HTMLCollectionOf<MultilineTextBox>;
			getElementsByName(elementName: "smart-multiline-text-box"): NodeListOf<MultilineTextBox>;	
    }
}

/**Determines whether and how the value should be automatically capitalized as it is entered/edited by the user. */
export declare type MultilineTextBoxAutoCapitalize = 'none' | 'characters' | 'words';
/**Specifies how the characters are displayed inside the input. */
export declare type TextBoxDisplayMode = 'default' | 'escaped';
/**Determines the behavior on "Enter" key. */
export declare type MultilineTextBoxEnterKeyBehavior = 'clearOnSubmit' | 'newLine' | 'submit';
/**Indicates how the control wraps text. */
export declare type MultilineTextBoxWrap = 'hard' | 'soft' | 'off';
/**
 Buttons group with DropDown and multiple action buttons.
*/
export interface MultiSplitButton extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines a data source used to generate element's permanently visible buttons.
   * Default value: 
   */
  buttonsDataSource?: string[];
  /**
   * Determines the data source of the multi split button's dropdown.
   * Default value: []
   */
  dataSource?: any;
  /**
   * Enables or disables jqxMultiSplitButton.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Displays or hides the loading indicator
   * Default value: false
   */
  displayLoadingIndicator?: boolean;
  /**
   * Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property.
   * Default value: """"
   */
  displayMember?: string;
  /**
   * Sets the parent container of the button's dropDown list (the popup). Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown list.
   * Default value: null
   */
  dropDownAppendTo?: any;
  /**
   * Determines position of the drop down button.
   * Default value: right
   */
  dropDownButtonPosition?: DropDownButtonPosition;
  /**
   * Defines how element's drop down behaves. In 'none' mode drop down never opens. In 'dropDownButton' mode drop down is opened only via elelent's drop down button. In 'auto' mode drop down is opened on click on the whole top section.
   * Default value: dropDownButton
   */
  dropDownOpenMode?: DropDownOpenMode;
  /**
   * If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Determines the vertical position of the dropDown list. 'Auto' means its automatically determined depending on the viewport size.
   * Default value: auto
   */
  dropDownPosition?: DropDownPosition;
  /**
   * Determines whether the Filtering is enabled.
   * Default value: false
   */
  filterable?: boolean;
  /**
   * Determines the filtering for the drop down list mode.
   * Default value: startsWithIgnoreCase
   */
  filterMode?: FilterMode;
  /**
   * Determines the placeholder for the drop down list filter input field.
   * Default value: ""
   */
  filterInputPlaceholder?: string;
  /**
   * If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups.
   * Default value: false
   */
  grouped?: boolean;
  /**
   * Sets or gets the groupMember. If it's not set, by default is used 'group' property of the source object.
   * Default value: "null"
   */
  groupMember?: string;
  /**
   * Sets ot gets the incrementalSearchDelay property. The incrementalSearchDelay specifies the time-interval in milliseconds after which the previous search string is deleted. The timer starts when you stop typing.
   * Default value: 700
   */
  incrementalSearchDelay?: number;
  /**
   * Sets ot gets the mode of the incremental search mode.
   * Default value: startsWithIgnoreCase
   */
  incrementalSearchMode?: SearchMode;
  /**
   * Determines the height of the items.
   * Default value: null
   */
  itemHeight?: number | null;
  /**
   * The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM. It's used to load list items from the HTMLTemplateElement.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom.
   * Default value: "Loading..."
   */
  loadingIndicatorPlaceholder?: string;
  /**
   * The position of the loading indicator.
   * Default value: center
   */
  loadingIndicatorPosition?: VerticalAlignment;
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
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language. 
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
   *     "invalidNode": "."
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines whether the popup is opened or closed
   * Default value: false
   */
  opened?: boolean;
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets selected indexes of buttons's dropDown.
   * Default value: 
   */
  selectedIndexes?: number[];
  /**
   * Sets or gets selected values of buttons's dropDown.
   * Default value: 
   */
  selectedValues?: string[];
  /**
   * Determines how many items can be selected.
   * Default value: one
   */
  selectionMode?: MultiSplitButtonSelectionMode;
  /**
   * Determines whether the items in the dropDown are sorted alphabetically or not
   * Default value: false
   */
  sorted?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Determines the value member of an item. Stored as value in the item object.
   * Default value: """"
   */
  valueMember?: string;
  /**
   * Determines weather or not Virtualization is used for the button's dropDownList.
   * Default value: false
   */
  virtualized?: boolean;
  /** 
   * This event is triggered when button's dropDown selection is changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when button's dropDown list is closed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when button's dropDown list is closing.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user clicks any of the element's buttons or button's dropDown items.
	* @param event. The custom event.    */
  onItemClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when button's dropDown list is opened.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when button's dropDown list is opening.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user scrolls to the end of the dropDown list.
	* @param event. The custom event.    */
  onScrollBottomReached?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user scrolls to the start of the dropDown list.
	* @param event. The custom event.    */
  onScrollTopReached?: ((this: any, ev: Event) => any) | null;
  /**
   * Closes button's dropDown list.
   */
  close(): void;
  /**
   * Returns an item instance occured in the element's drop down.
   * @param {string} value. The value of an item from the drop down list or a button.
   * @returns {HTMLElement}
   */
  getItem(value: string): HTMLElement;
  /**
   * Returns an array with the items from the split button's dropDown list.
   * @returns {any[]}
   */
  items(): any[];
  /**
   * Inserts a new item at a specified position in the drop down list.
   * @param {number} position. The position where the item must be inserted.
   * @param {any} value. The value of the new item.
   */
  insert(position: number, value: any): void;
  /**
   * Opens the splitButton's dropDown list.
   */
  open(): void;
  /**
   * Removes an item at a specified position in the drop down list.
   * @param {number} position. The position of the removed item.
   */
  removeAt(position: number): void;
  /**
   * Updates an item from the dropDown list.
   * @param {number} position. The position where the item must be updated.
   * @param {any} value. The value of the updated item.
   */
  update(position: number, value: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-multi-split-button"): MultiSplitButton;
			querySelector(selectors: "smart-multi-split-button"): MultiSplitButton | null;	
			querySelectorAll(selectors: "smart-multi-split-button"): NodeListOf<MultiSplitButton>;
			getElementsByTagName(qualifiedName: "smart-multi-split-button"): HTMLCollectionOf<MultiSplitButton>;
			getElementsByName(elementName: "smart-multi-split-button"): NodeListOf<MultiSplitButton>;	
    }
}

/**Determines how many items can be selected. */
export declare type MultiSplitButtonSelectionMode = 'none' | 'oneOrManyExtended' | 'zeroOrMany' | 'oneOrMany' | 'zeroOrOne' | 'one' | 'checkBox' | 'radioButton';
/**
 input field for entering a number. Includes number formatting for Engineers and Scientists.
*/
export interface NumericTextBox extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets the char to use as the decimal separator in numeric values. 
   * Default value: "."
   */
  decimalSeparator?: string;
  /**
   * Enables or disables the jqxNumericTextBox. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets the parent container of the radix dropdown.
   * Default value: null
   */
  dropDownAppendTo?: any;
  /**
   * Determines if a dropdown will be displayed when the radix display button is clicked. The dropdown shows options for changing to the binary, octal, decimal, and hexadecimal numeral systems.
   * Default value: false
   */
  dropDownEnabled?: boolean;
  /**
   * Enables or disables incrementing/decrementing the value using the mouse wheel in jqxNumericTextBox. 
   * Default value: false
   */
  enableMouseWheelAction?: boolean;
  /**
   * Sets additional helper text below the element. 
   * Default value: ""
   */
  hint?: string;
  /**
   * Sets or gets the input format of the widget. Setting this property dynamically can lead to precision loss. 
   * Default value: integer
   */
  inputFormat?: NumericTextBoxInputFormat;
  /**
   * Sets a label above the element. 
   * Default value: ""
   */
  label?: string;
  /**
   * If this property is enabled, leading zeros are added (if necessary) to the binary and hexadecimal representations of a number based on wordLength.
   * Default value: false
   */
  leadingZeros?: boolean;
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
   * Sets or gets the maximum value of the widget. 
   * Default value: null
   */
  max?: any;
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
   *     "binary": "BIN",
   *     "octal": "OCT",
   *     "decimal": "DEC",
   *     "hexadecimal": "HEX",
   *     "integerOnly": "jqxNumericTextBox: The property  can only be set when inputFormat is integer.",
   *     "noInteger": "jqxNumericTextBox: the property  cannot be set when inputFormat is integer.",
   *     "significantPrecisionDigits": "jqxNumericTextBox: the properties significantDigits and precisionDigits cannot be set at the same time."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the minimum value of the widget. 
   * Default value: null
   */
  min?: any;
  /**
   * The name of the control.
   * Default value: ""
   */
  name?: string;
  /**
   * Enables or disables the setting of the value property to null or empty string. 
   * Default value: false
   */
  nullable?: boolean;
  /**
   * Sets or gets whether the radix dropdown is opened. Applicable only when dropDownEnabled is true. 
   * Default value: false
   */
  opened?: boolean;
  /**
   * Sets or gets the pattern which the input value is displayed in when the element is not focused. All formats available to the NumberRenderer class can be applied as outputFormatString. 
   * Default value: "null"
   */
  outputFormatString?: string;
  /**
   * Determines the widget's place holder displayed when the widget's input is empty. 
   * Default value: """"
   */
  placeholder?: string;
  /**
   * Determines the number of digits after the decimal point. Applicable when inputFormat is either 'floatingPoint' or 'complex'. 
   * Default value: null
   */
  precisionDigits?: number;
  /**
   * Sets or gets the radix of the jqxNumericTextBox. The radix specifies the numeral system in which to display the widget's value. Applicable only when inputFormat is 'integer'. 
   * Default value: 10
   */
  radix?: NumericTextBoxRadix;
  /**
   * Enables or disables the radix display button of the jqxNumericTextBox. Applicable only when inputFormat is 'integer'. 
   * Default value: false
   */
  radixDisplay?: boolean;
  /**
   * Sets or gets the position of the radix display button of the jqxNumericTextBox. 
   * Default value: left
   */
  radixDisplayPosition?: NumericTextBoxDisplayPosition;
  /**
   * Sets or gets the readonly state of the jqxNumericTextBox. 
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Enables or disables outputting the value in scientific notation. Applicable only when inputFormat is 'integer'. 
   * Default value: false
   */
  scientificNotation?: boolean;
  /**
   * Determines whether to show the current value represented in all four numeral systems in the drop down.
   * Default value: false
   */
  showDropDownValues?: boolean;
  /**
   * Enables or disables the visibility of the units. 
   * Default value: false
   */
  showUnit?: boolean;
  /**
   * Determining how many significant digits are in a number. Applicable when inputFormat is either 'floatingPoint' or 'complex'. 
   * Default value: 8
   */
  significantDigits?: number;
  /**
   * Enables or disables the visibility of the spin buttons. 
   * Default value: false
   */
  spinButtons?: boolean;
  /**
   * Sets the delay between repeats of spin buttons in miliseconds. 
   * Default value: 75
   */
  spinButtonsDelay?: number;
  /**
   * Sets a delay before the first repeat iteration of spin buttons in miliseconds. 
   * Default value: 0
   */
  spinButtonsInitialDelay?: number;
  /**
   * Sets or gets the position of the spin buttons of the jqxNumericTextBox. 
   * Default value: right
   */
  spinButtonsPosition?: NumericTextBoxDisplayPosition;
  /**
   * Sets or gets the increase/decrease step. 
   * Default value: 1
   */
  spinButtonsStep?: any;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the name of unit used in jqxNumericTextBox widget. 
   * Default value: "kg"
   */
  unit?: string;
  /**
   * Sets the value's validation by min/max. If 'strict' is applied, the value is always validated by min and max. If 'interaction' is applied, programmatic value changes are not coerced to min/max and if min/max are changed, resulting in the current value being out of range, the value is not coerced, and no change event is fired.
   * Default value: strict
   */
  validation?: Validation;
  /**
   * Sets or gets the value of the jqxNumericTextBox widget. 
   * Default value: 0
   */
  value?: any;
  /**
   * Sets or gets the word length. Applicable only when inputFormat is 'integer'. If min and/or max are not set by default, they will be set automatically based on the specified word length. 
   * Default value: int32
   */
  wordLength?: WordLength;
  /** 
   * This event is triggered when the value is changed. 
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the value in the input is being changed via keypress or paste. 
	* @param event. The custom event.    */
  onChanging?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the dropdown is closed. 
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the dropdown is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the dropdown is opened. 
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the dropdown is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the radix is changed. 
	* @param event. The custom event.    */
  onRadixChange?: ((this: any, ev: Event) => any) | null;
  /**
   * Focuses the NumericTextBox. 
   */
  focus(): void;
  /**
   * Get/set the value of the NumericTextBox. 
   * @param {string | number} value?. The value to be set. If no parameter is passed, returns the displayed value of the SmartNumericTextBox. 
   * @param {boolean} suppressValidation?. If <em>true</em> is passed, the passed value will be set to the SmartNumericTextBox without validation. 
   * @returns {string}
   */
  val(value?: string | number, suppressValidation?: boolean): string;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-numeric-text-box"): NumericTextBox;
			querySelector(selectors: "smart-numeric-text-box"): NumericTextBox | null;	
			querySelectorAll(selectors: "smart-numeric-text-box"): NodeListOf<NumericTextBox>;
			getElementsByTagName(qualifiedName: "smart-numeric-text-box"): HTMLCollectionOf<NumericTextBox>;
			getElementsByName(elementName: "smart-numeric-text-box"): NodeListOf<NumericTextBox>;	
    }
}

/**Sets or gets the input format of the widget. Setting this property dynamically can lead to precision loss.  */
export declare type NumericTextBoxInputFormat = 'integer' | 'floatingPoint' | 'complex';
/**Sets or gets the radix of the jqxNumericTextBox. The radix specifies the numeral system in which to display the widget's value. Applicable only when inputFormat is 'integer'.  */
export declare type NumericTextBoxRadix = '2' | '8' | '10' | '16' | 'binary' | 'octal' | 'decimal' | 'hexadecimal';
/**Sets or gets the position of the spin buttons of the jqxNumericTextBox.  */
export declare type NumericTextBoxDisplayPosition = 'left' | 'right';
/**
 Pagination component that is used to navigate between a set of results.
*/
export interface Pager extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Handles pager's elipsis. Ellipsis buttons are displayed as indicators and additional help to navigate between pages.
   * Default value: none
   */
  autoEllipsis?: PagerAutoEllipsis;
  /**
   * Enables or disables the pager.
   * Default value: false
   */
  disabled?: boolean;
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
   *     "firstButton": "First",
   *     "lastButton": "Last",
   *     "previousButton": "Previous",
   *     "nextButton": "Next",
   *     "navigateToLabel": "Go to:",
   *     "pageSizeLabel": "Show:",
   *     "navigateToInputPlaceholder": "",
   *     "ellipsis": "...",
   *     "summaryString": "of",
   *     "summaryPrefix": "of",
   *     "summarySuffix": ""
   *   }
   * }
   */
  messages?: any;
  /**
   * Handles the position of the navigation buttons.
   * Default value: near
   */
  navigationButtonsPosition?: LayoutPosition;
  /**
   * Gets/sets current page index.
   * Default value: 0
   */
  pageIndex?: number;
  /**
   * Defines the number of page index selectors.
   * Default value: 0
   */
  pageIndexSelectors?: any;
  /**
   * Gets/sets total number of items displayed on page.
   * Default value: 10
   */
  pageSize?: number;
  /**
   * Defines the data source of the element's page size selector drop down.
   * Default value: 10,25,50
   */
  pageSizeSelectorDataSource?: number[];
  /**
   * The number of pages in the element.
   * Default value: 100
   */
  pagesCount?: number;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Controlls displaying of the 'first' and 'last' navigation buttons.
   * Default value: false
   */
  showFirstLastNavigationButtons?: boolean;
  /**
   * Displays text content in navigation buttons instead default icons.
   * Default value: false
   */
  showNavigationButtonLabels?: boolean;
  /**
   * Determines whether the navigation input is displayed.
   * Default value: false
   */
  showNavigationInput?: boolean;
  /**
   * Determines whether the page index selectors are displayed.
   * Default value: false
   */
  showPageIndexSelectors?: boolean;
  /**
   * Determines whether the page size selector is displayed.
   * Default value: false
   */
  showPageSizeSelector?: boolean;
  /**
   * Controlls displaying of the 'previous' and 'next' navigation buttons.
   * Default value: false
   */
  showPrevNextNavigationButtons?: boolean;
  /**
   * Determines whether the page summary is displayed.
   * Default value: false
   */
  showSummary?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when user selects a new item.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when page size is changed.
	* @param event. The custom event.    */
  onPageSizeChanged?: ((this: any, ev: Event) => any) | null;
  /**
   * Selects first item.
   */
  first(): void;
  /**
   * Selects last item.
   */
  last(): void;
  /**
   * Navigates to particular item.
   * @param {any} pageIndex. 
   */
  navigateTo(pageIndex: any): void;
  /**
   * Selects next pager item.
   */
  next(): void;
  /**
   * Selects previous pager item.
   */
  prev(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-pager"): Pager;
			querySelector(selectors: "smart-pager"): Pager | null;	
			querySelectorAll(selectors: "smart-pager"): NodeListOf<Pager>;
			getElementsByTagName(qualifiedName: "smart-pager"): HTMLCollectionOf<Pager>;
			getElementsByName(elementName: "smart-pager"): NodeListOf<Pager>;	
    }
}

/**Handles pager's elipsis. Ellipsis buttons are displayed as indicators and additional help to navigate between pages. */
export declare type PagerAutoEllipsis = 'none' | 'before' | 'after' | 'both';
/**
 PasswordTextBox lets the user enter a password with the text hidden.
*/
export interface PasswordTextBox extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Specifies that the element should be focused when the page is loaded.
   * Default value: false
   */
  autoFocus?: boolean;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies the behavior on "Enter" key press. Default mode is "submit".
   * Default value: submit
   */
  enterKeyBehavior?: EnterKeyBehavior;
  /**
   * The form that the element is associated with (its "form owner"). The value of the attribute must be the ID of a form element in the same document.
   * Default value: ""
   */
  form?: string;
  /**
   * Sets additional helper text below the element. Appears only when the element is focused.
   * Default value: null
   */
  hint?: any;
  /**
   * Sets label above the element. The label is displayed above the input and it's always visible.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Sets or gets the maximum number of characters that the user can enter.
   * Default value: null
   */
  maxLength?: number;
  /**
   * Sets an object with string values, related to the different states of passwords strength.
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
   *     "invalidNode": ".",
   *     "passwordStrength": "Password strength",
   *     "short": "Short",
   *     "weak": "Weak",
   *     "far": "Far",
   *     "good": "Good",
   *     "strong": "Strong",
   *     "showPassword": "Show password"
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the minimum number of characters that the user can enter.
   * Default value: 2
   */
  minLength?: number;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * With this property the user can set a custom callback function that determines the password strength. The returned string from the function determines the how strong the current password is. The string should be one of the following: 'short', 'weak', 'far', 'good', 'strong'.
   * Default value: null
   */
  passwordStrength?: any;
  /**
   * The placeholder text that is displayed when no value is applied to the element. 
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Specifies that the user must fill in a value before submitting a form that contains the element.
   * Default value: false
   */
  required?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies whether the content of the input will be selected on focus.
   * Default value: false
   */
  selectAllOnFocus?: boolean;
  /**
   * Determines whether the password icon is visible.
   * Default value: false
   */
  showPasswordIcon?: boolean;
  /**
   * Determines whether a tooltip which shows the password's strength will be shown.
   * Default value: false
   */
  showPasswordStrength?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Determines whether Tooltip's arrow will be shown or not.
   * Default value: false
   */
  tooltipArrow?: boolean;
  /**
   * Determines the delay before the tooltip appears in miliseconds.
   * Default value: 0
   */
  tooltipDelay?: number;
  /**
   * Determines the position of the tooltip.
   * Default value: top
   */
  tooltipPosition?: PasswordTextBoxTooltipPosition;
  /**
   * Sets a custom template for the content of the tooltip.
   * Default value: "null"
   */
  tooltipTemplate?: string;
  /**
   * If true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the value of the element. 
   * Default value: ""
   */
  value?: string;
  /** 
   * This event is triggered when the value of the element is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previous value of the element before it was changed.
   *  value - The new value of the element.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Focuses the element.
   */
  focus(): void;
  /**
   * The method is used to reset input to it's initial value. 
   */
  reset(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-password-text-box"): PasswordTextBox;
			querySelector(selectors: "smart-password-text-box"): PasswordTextBox | null;	
			querySelectorAll(selectors: "smart-password-text-box"): NodeListOf<PasswordTextBox>;
			getElementsByTagName(qualifiedName: "smart-password-text-box"): HTMLCollectionOf<PasswordTextBox>;
			getElementsByName(elementName: "smart-password-text-box"): NodeListOf<PasswordTextBox>;	
    }
}

/**Determines the position of the tooltip. */
export declare type PasswordTextBoxTooltipPosition = 'absolute' | 'bottom' | 'top' | 'left' | 'right';
/**
 Path component is used to display the path to url.
*/
export interface Path extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines the data source for the item that will be displayed inside the drop down.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property.
   * Default value: """"
   */
  displayMember?: string;
  /**
   * Sets the parent container of the dropDown (the popup). Used when a CSS property of unknown parent is interfering with the visibility of the dropDown.
   * Default value: null
   */
  dropDownAppendTo?: any;
  /**
   * Sets the height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: 
   */
  dropDownHeight?: string | number;
  /**
   * Sets the max height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: 
   */
  dropDownMaxHeight?: string | number;
  /**
   * Sets the max width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: 
   */
  dropDownMaxWidth?: string | number;
  /**
   * Sets the min height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: 
   */
  dropDownMinHeight?: string | number;
  /**
   * Sets the min width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: 
   */
  dropDownMinWidth?: string | number;
  /**
   * If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Determines the vertical position of the dropDown. 'Auto' means its automatically determined depending on the viewport size.
   * Default value: auto
   */
  dropDownPosition?: DropDownPosition;
  /**
   * Sets the width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Sets additional helper text below the element. 
   * Default value: ""
   */
  hint?: string;
  /**
   * Sets the element as an indicator.
   * Default value: false
   */
  indicator?: boolean;
  /**
   * A getter that returns an array of all Path items.
   * Default value: 
   */
  items?: any[];
  /**
   * Sets label above the element. 
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
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
   *     "invalidNode": "."
   *   }
   * }
   */
  messages?: any;
  /**
   * The name of the control.
   * Default value: ""
   */
  name?: string;
  /**
   * Determines whether the popup is opened or closed
   * Default value: false
   */
  opened?: boolean;
  /**
   * Determines the element's placeholder.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Determines the format of the path. Follows specific operation system criteria by changing the drive,folder separators. 
   * Default value: windows
   */
  pathFormat?: PathFormat;
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * The value of the Path control.
   * Default value: ""
   */
  value?: string;
  /**
   * Determines the value member of an item. Stored as value in the item object.
   * Default value: """"
   */
  valueMember?: string;
  /**
   * Determines whether or not the element wraps to a new line if overflows. If set the Path can be wrapped on multiple lines. 
   * Default value: false
   */
  wrap?: boolean;
  /** 
   * This event is triggered when user clicks on the browse button.
	* @param event. The custom event.    */
  onBrowseButtonClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the value is changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is closed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is closing.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user clicks on the drop down button.
	* @param event. The custom event.    */
  onDropDownButtonClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is opened.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is opening.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | null;
  /**
   * Closes the dropDown.
   */
  close(): void;
  /**
   * Opens the dropDown.
   */
  open(): void;
  /**
   * Set's the Path element to 'emptyPath' state and changes the value to '////'.
   */
  setToEmptyPath(): void;
  /**
   * Set's the Path element to 'notAPath' state and changes the value to '//'.
   */
  setToNotAPath(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-path"): Path;
			querySelector(selectors: "smart-path"): Path | null;	
			querySelectorAll(selectors: "smart-path"): NodeListOf<Path>;
			getElementsByTagName(qualifiedName: "smart-path"): HTMLCollectionOf<Path>;
			getElementsByName(elementName: "smart-path"): NodeListOf<Path>;	
    }
}

/**Determines the format of the path. Follows specific operation system criteria by changing the drive,folder separators.  */
export declare type PathFormat = 'windows' | 'unix';
/**
 PowerButton is On/Off rounded button.
*/
export interface PowerButton extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets the check state.
   * Default value: false
   */
  checked?: boolean;
  /**
   * Sets the click mode of the button.
   * Default value: release
   */
  clickMode?: ClickMode;
  /**
   * Enables or disables the power button.
   * Default value: false
   */
  disabled?: boolean;
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the widget's name.
   * Default value: """"
   */
  name?: string;
  /**
   * If the custom element is readonly, it cannot be interacted with.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the widget's value.
   * Default value: """"
   */
  value?: string;
  /** 
   * This event is triggered when the widget is checked/unchecked.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-power-button"): PowerButton;
			querySelector(selectors: "smart-power-button"): PowerButton | null;	
			querySelectorAll(selectors: "smart-power-button"): NodeListOf<PowerButton>;
			getElementsByTagName(qualifiedName: "smart-power-button"): HTMLCollectionOf<PowerButton>;
			getElementsByName(elementName: "smart-power-button"): NodeListOf<PowerButton>;	
    }
}

/**
 Progress indicators. It can be used to show a user how far along he/she is in a process.
*/
export interface ProgressBar extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Enables or disables the element. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets the value of the Progress bar to indeterminate state(null) and starts the animation.
   * Default value: false
   */
  indeterminate?: boolean;
  /**
   * Sets the filling direction of the Progress Bar.
   * Default value: false
   */
  inverted?: boolean;
  /**
   * A callback function defining the new format for the label of the Progress Bar.
   * Default value: null
   */
  formatFunction?: any;
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
   * Sets progress bars maximum possible value.
   * Default value: 100
   */
  max?: number;
  /**
   * Sets an object with string values, related to the different states of passwords strength.
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid '!",
   *     "propertyInvalidValueType": "Invalid '!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": ".",
   *     "htmlTemplateNotSuported": ": Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets progress bars minimum possible value.
   * Default value: 0
   */
  min?: number;
  /**
   * Sets the orientation of the progress bar
   * Default value: horizontal
   */
  orientation?: Orientation;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Enables/Disabled the label for the Progress Bar.
   * Default value: false
   */
  showProgressValue?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the value of the progress bar
   * Default value: 0
   */
  value?: number;
  /** 
   * This event is triggered when the value is changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-progress-bar"): ProgressBar;
			querySelector(selectors: "smart-progress-bar"): ProgressBar | null;	
			querySelectorAll(selectors: "smart-progress-bar"): NodeListOf<ProgressBar>;
			getElementsByTagName(qualifiedName: "smart-progress-bar"): HTMLCollectionOf<ProgressBar>;
			getElementsByName(elementName: "smart-progress-bar"): NodeListOf<ProgressBar>;	
    }
}

/**
 QueryBuilder allows you to build dynamically queries for filtering.
*/
export interface QueryBuilder extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Enables the dragging of conditions inside a group or between groups.
   * Default value: false
   */
  allowDrag?: boolean;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines when the value of the element is updated with the new changes.
   * Default value: change
   */
  applyMode?: QueryBuilderApplyMode;
  /**
   * Adds more operations that can be used to the query bilder's conditions structure. Each custom operation can have the following fields:label - label to be displayed in the operator box. Multiple operations with the same label can exist.name - unique name of the operationeditorTemplate - callback function that creates a custom value editorvalueTemplate - callback function that displays the value after the edior has been closedhandleValue - callback function that handles the value returned by the editor when it is closedhideValue - a boolean condition that specifies whether the operation requires a value or notexpressionTemplate - a string representing a custom Linq expression template. If the value of the element is a string it will be considered as a Linq expression and it will be checked against all expressionTemplates to find a match.expressionReaderCallback - a callback that is used to specify which arguments from the expression are used for the fieldName and value. Used when converting a Linq expression to QueryBuilder value.expressionBuilderCallback - a callback function that is used to specify which arguments from the Linq expression are used for the fieldName and value when building the Linq expression from the current value of the element.
   * Default value: 
   */
  customOperations?: any;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the dropdown width of the property and operator editors.
   * Default value: "100%"
   */
  dropDownWidth?: string;
  /**
   * Array with filter fields and their settings. The available field settings are:label - the field's label, as it will appear in the field selection drop downdataField - the field's data fielddataType - the field's data typefilterOperations - an array of the filter operations applicable to the field; if not set, the default filter operations are appliedlookup - an object with settings for customizing the field's respective value selection input. It has the following settings:autoCompleteDelay - delay between typing in the input and opening the drop down with available optionsdataSource - an array of available options to choose from (appear in a drop down)minLength - minimum number of charactes to type in the input before the options drop down is displayedreadonly - if set to true, the value selection input acts as a drop down list, otherwise it acts as a combo box
   * Default value: null
   */
  fields?: any;
  /**
   * Determines whether new fields can be dynamically added by typing in the field (property) box.
   * Default value: dynamic
   */
  fieldsMode?: QueryBuilderFieldsMode;
  /**
   * Sets or gets the format string of the editor of fields with type 'date'.
   * Default value: "dd-MMM-yy"
   */
  formatStringDate?: string;
  /**
   * Sets or gets the format string of the editor of fields with type 'dateTime'.
   * Default value: "dd-MMM-yy HH:mm:ss"
   */
  formatStringDateTime?: string;
  /**
   * A callback function called when a field is added dynamically. Used for configuring settings of the new field. Applicable only when fieldsMode is 'dynamic'.
   * Default value: null
   */
  getDynamicField?: any;
  /**
   * Defines CSS classes to be applied to each of the built-in operations. Icons for these classes are applied in the smart-query-builder style sheet. This property is applicable only if showIcons is set to true.
   * Default value: { '=': 'equals', '<>': 'notequals', '>': 'greaterthan', '>=': 'greaterthanorequal', '<': 'lessthan', '<=': 'lessthanorequal', 'startswith': 'startswith', 'endswith': 'endswith', 'contains': 'contains', 'notcontains': 'notcontains', 'isblank': 'isblank', 'isnotblank': 'isnotblank' }
   */
  icons?: any;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines field names of the filtered element.
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
   *     "addCondition": "Add Condition",
   *     "addGroup": "Add Group",
   *     "and": "And",
   *     "notand": "Not And",
   *     "or": "Or",
   *     "notor": "Not Or",
   *     "=": "Equals",
   *     "<>": "Does not equal",
   *     ">": "Greater than",
   *     ">=": "Greater than or equal to",
   *     "<": "Less than",
   *     "<=": "Less than or equal to",
   *     "startswith": "Starts with",
   *     "endswith": "Ends with",
   *     "contains": "Contains",
   *     "notcontains": "Does not contain",
   *     "isblank": "Is blank",
   *     "isnotblank": "Is not blank",
   *     "wrongParentGroupIndex": "' method.",
   *     "missingFields": ": Fields are required for proper condition's adding. Set \"fields\" source and then conditions will be added as expected.",
   *     "wrongElementNode": "' method.",
   *     "invalidDataStructure": ": Used invalid data structure in updateCondition/updateGroup method."
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines the placeholder text used inside the condition's operator box in case an operator is not selected.
   * Default value: "Operator"
   */
  operatorPlaceholder?: string;
  /**
   * Determines the placeholder text used inside the condition's field (property) box in case a field is not selected.
   * Default value: "Property"
   */
  propertyPlaceholder?: string;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Shows/Hides the operator icons shown in the operator selection drop down.
   * Default value: false
   */
  showIcons?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * The value is represented by multidimensional array. The array contains group operators with conditions. Each group can contain multiple conditions.
   * Default value: 
   */
  value?: any;
  /**
   * Callback used to format the content of the value fields.
   * Default value: null
   */
  valueFormatFunction?: any;
  /**
   * Determines the placeholder text used inside the condition's value box in case a value is not set.
   * Default value: "Value"
   */
  valuePlaceholder?: string;
  /** 
   * This event is triggered when the query builder's value is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, data, originalEvent)
   *  item - The item that is being dragged.
   *  data - The data of the item that is being dragged.
   *  originalEvent - The original event.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a dragged condition is dropped. This action can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, data, target, targetData, targetSide)
   *  item - The item that is being dragged.
   *  data - The data of the item that is being dragged.
   *  target - The target item.
   *  targetData - the data of the target item.
   *  targetSide - The side of the target item where the dragged item will be dropped.
   */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a condition is being dragged.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, data, originalEvent)
   *  item - The item that is being dragged.
   *  data - The data of the item that is being dragged.
   *  originalEvent - The original event.
   */
  onDragging?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a dragging operation is started in jqx-query-builder. This action can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, data, originalEvent)
   *  item - The item is going to be dragged.
   *  data - The data of the item that is going to be dragged.
   *  originalEvent - The original event.
   */
  onDragStart: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when one of the query builder's building blocks ( oeprator, fieldName, value, close button, etc) is clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, type, data)
   *  id - The internal id of the clicked item, e.g. '0.1', '1.1', etc.
   *  type - The type of the clicked item ( condition or a group ).
   *  data - The data of the item.
   */
  onItemClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a field has been selected.
	* @param event. The custom event. Custom data event was created with: ev.detail(label, value)
   *  label - The label of the selected property.
   *  value - The value of the selected property.
   */
  onPropertySelected?: ((this: any, ev: Event) => any) | null;
  /**
   * Converts the current value of the element to DynamicLINQ expression.
   * @returns {string}
   */
  getLinq(): string;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-query-builder"): QueryBuilder;
			querySelector(selectors: "smart-query-builder"): QueryBuilder | null;	
			querySelectorAll(selectors: "smart-query-builder"): NodeListOf<QueryBuilder>;
			getElementsByTagName(qualifiedName: "smart-query-builder"): HTMLCollectionOf<QueryBuilder>;
			getElementsByName(elementName: "smart-query-builder"): NodeListOf<QueryBuilder>;	
    }
}

/**Determines when the value of the element is updated with the new changes. */
export declare type QueryBuilderApplyMode = 'change' | 'immediately';
/**Determines whether new fields can be dynamically added by typing in the field (property) box. */
export declare type QueryBuilderFieldsMode = 'dynamic' | 'static';
/**
 The Radio Button component lets you add a radio button and assign it to a radio group. Users can select only one radio button at a time within a radio group
*/
export interface RadioButton extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets the check state.
   * Default value: false
   */
  checked?: boolean;
  /**
   * Sets or gets the part that toggles the element.
   * Default value: both
   */
  checkMode?: CheckMode;
  /**
   * Sets the click mode of the radio button.
   * Default value: release
   */
  clickMode?: ClickMode;
  /**
   * Enables or disables the ratio button.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the widget's group name.
   * Default value: """"
   */
  groupName?: string;
  /**
   * Sets or gets the widget's innerHTML.
   * Default value: """"
   */
  innerHTML: string;
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
   * Sets an object with string values, related to the different states of passwords strength.
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid '!",
   *     "propertyInvalidValueType": "Invalid '!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": ".",
   *     "htmlTemplateNotSuported": ": Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the widget's name.
   * Default value: """"
   */
  name?: string;
  /**
   * If the custom element is readonly, it cannot be interacted with.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the widget's value.
   * Default value: """"
   */
  value?: string;
  /** 
   * This event is triggered when the widget is checked/unchecked.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-radio-button"): RadioButton;
			querySelector(selectors: "smart-radio-button"): RadioButton | null;	
			querySelectorAll(selectors: "smart-radio-button"): NodeListOf<RadioButton>;
			getElementsByTagName(qualifiedName: "smart-radio-button"): HTMLCollectionOf<RadioButton>;
			getElementsByName(elementName: "smart-radio-button"): NodeListOf<RadioButton>;	
    }
}

/**
 Rating allows you to input a rating. It is broadly used in applications with reviews.
*/
export interface Rating extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Disables the interaction with the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Determines the number of stars that will be displayed.
   * Default value: 
   */
  max?: number;
  /**
   * Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale. 
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid '!",
   *     "propertyInvalidValueType": "Invalid '!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": ".",
   *     "htmlTemplateNotSuported": ": Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * The name of the element. Used when submiting data inside a Form.
   * Default value: ""
   */
  name?: string;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Determines the number of stars that will be marked as active.
   * Default value: 
   */
  value?: number;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-rating"): Rating;
			querySelector(selectors: "smart-rating"): Rating | null;	
			querySelectorAll(selectors: "smart-rating"): NodeListOf<Rating>;
			getElementsByTagName(qualifiedName: "smart-rating"): HTMLCollectionOf<Rating>;
			getElementsByName(elementName: "smart-rating"): NodeListOf<Rating>;	
    }
}

/**
 RepatButton provides press-and-hold functionality and it is an ideal UI component for allowing end-users to control an increasing or decreasing value.
*/
export interface RepeatButton extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets the click mode of the button.
   * Default value: release
   */
  clickMode?: ClickMode;
  /**
   * Sets the delay between repeats in miliseconds.
   * Default value: 50
   */
  delay?: number;
  /**
   * Enables or disables the ratio button.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets a delay before the first repeat iteration in miliseconds.
   * Default value: 150
   */
  initialDelay?: number;
  /**
   * Sets the inner HTML of the element.
   * Default value: """"
   */
  innerHTML: string;
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
   * Sets an object with string values, related to the different states of passwords strength.
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid '!",
   *     "propertyInvalidValueType": "Invalid '!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": ".",
   *     "htmlTemplateNotSuported": ": Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the widget's name.
   * Default value: """"
   */
  name?: string;
  /**
   * If the custom element is readonly, it cannot be interacted with.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the widget's value.
   * Default value: """"
   */
  value?: string;
  /** 
   * This event is triggered when the element is clicked.
	* @param event. The custom event.    */
  onClick: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-repeat-button"): RepeatButton;
			querySelector(selectors: "smart-repeat-button"): RepeatButton | null;	
			querySelectorAll(selectors: "smart-repeat-button"): NodeListOf<RepeatButton>;
			getElementsByTagName(qualifiedName: "smart-repeat-button"): HTMLCollectionOf<RepeatButton>;
			getElementsByName(elementName: "smart-repeat-button"): NodeListOf<RepeatButton>;	
    }
}

/**
 Scrollbar is a replacement of the default scroll bar with multiple UI Styling options.
*/
export interface ScrollBar extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the scrollbar's largestep. The value is increased/decreased with this largestep when the user presses the left mouse button in the area between a scrollbar button and thumb.
   * Default value: 100
   */
  largeStep?: number;
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
   * Sets or gets the scrollbar's maximum value.
   * Default value: 1000
   */
  max?: number;
  /**
   * Sets or gets the type of used mechanical action. The mechanical action defines in which moment the value of the element will be updated.
   * Default value: switchWhileDragging
   */
  mechanicalAction?: DragMechanicalAction;
  /**
   * Sets an object with string values, related to the different states of passwords strength.
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid '!",
   *     "propertyInvalidValueType": "Invalid '!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": ".",
   *     "htmlTemplateNotSuported": ": Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the scrollbar's minimum value.
   * Default value: 0
   */
  min?: number;
  /**
   * Sets or gets the scrollbar's orientation
   * Default value: horizontal
   */
  orientation?: Orientation;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Sets or gets scrollbar buttons visibility.
   * Default value: true
   */
  showButtons?: boolean;
  /**
   * Sets or gets the scrollbar's step. The value is increased/decreased with this step when the user presses a scrollbar button.
   * Default value: 10
   */
  step?: number;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the widget's value.
   * Default value: 0
   */
  value?: number;
  /** 
   * This event is triggered when the value is changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Redraws the element.
   */
  refresh(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-scroll-bar"): ScrollBar;
			querySelector(selectors: "smart-scroll-bar"): ScrollBar | null;	
			querySelectorAll(selectors: "smart-scroll-bar"): NodeListOf<ScrollBar>;
			getElementsByTagName(qualifiedName: "smart-scroll-bar"): HTMLCollectionOf<ScrollBar>;
			getElementsByName(elementName: "smart-scroll-bar"): NodeListOf<ScrollBar>;	
    }
}

/**
 Sliders allow users to make selections from a range of values.
*/
export interface Slider extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * With the coerce property true and clicking the track, the thumb and value are moved and set to the nearest value allowed by the interval property. 
   * Default value: false
   */
  coerce?: boolean;
  /**
   * Sets or gets whether custom ticks at (possibly) uneven interval will be plotted. The ticks to be plotted are defined with the property customTicks.
   * Default value: false
   */
  customInterval?: boolean;
  /**
   * If customInterval is enabled, sets a list of ticks to be plotted. If coerce is set to true, the value will snap to these ticks.
   * Default value: 0,50,100
   */
  customTicks?: number[];
  /**
   * Sets or gets the pattern which labels are displayed in when mode is 'date'.
   * Default value: "d"
   */
  dateLabelFormatString?: string;
  /**
   * Sets or gets the char to use as the decimal separator in numeric values. 
   * Default value: "".""
   */
  decimalSeparator?: string;
  /**
   * Enables or disables the widget. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Enables or disables incrementing/decrementing the value using the mouse wheel in jqxSlider. 
   * Default value: false
   */
  enableMouseWheelAction?: boolean;
  /**
   * Determines what values the thumb snaps to. 
   * Default value: 1
   */
  interval?: any;
  /**
   * Sets the direction of the slider. If is true - positions of the slider's begin and end are changed. 
   * Default value: false
   */
  inverted?: boolean;
  /**
   * A callback function that can be used to format the values displayed on the slider labels and tooltip.
   * Default value: null
   */
  labelFormatFunction?: any;
  /**
   * Sets or gets the widget's label visibility. 
   * Default value: all
   */
  labelsVisibility?: LabelsVisibility;
  /**
   * Sets or gets the locale. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback, related to localization module. 
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Enables or disables the usage of logarithmic scale in the widget. 
   * Default value: false
   */
  logarithmicScale?: boolean;
  /**
   * Sets or gets the maximum value of the widget. 
   * Default value: 100
   */
  max?: any;
  /**
   * Sets or gets the type of used mechanical action. 
   * Default value: switchWhileDragging
   */
  mechanicalAction?: DragMechanicalAction;
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
   *     "significantPrecisionDigits": ": the properties significantDigits and precisionDigits cannot be set at the same time.",
   *     "invalidMinOrMax": " value. Max cannot be lower than Min.",
   *     "noInteger": ": precisionDigits could be set only on \"floatingPoint\" scaleType."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the minimum value of the widget. 
   * Default value: 0
   */
  min?: any;
  /**
   * Sets or gets whether the widget works with numbers or dates.
   * Default value: numeric
   */
  mode?: ScaleMode;
  /**
   * Sets or gets the element's name, which is used as a reference when the data is submitted.
   * Default value: ""
   */
  name?: string;
  /**
   * Sets the orientation of the widget. 
   * Default value: horizontal
   */
  orientation?: Orientation;
  /**
   * Determines the number of digits after the decimal point. Applicable only when scaleType is 'integer'. 
   * Default value: null
   */
  precisionDigits?: number;
  /**
   * Enables or disables the slider to be in range mode. If is  set to true, the range is represented between two thumbs. 
   * Default value: false
   */
  rangeSlider?: boolean;
  /**
   * When the slider is read only the users cannot drag or click in the fill of the slider.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Sets the position of the widget's scales. 
   * Default value: near
   */
  scalePosition?: ScalePosition;
  /**
   * Sets the type of the slider's scale. 
   * Default value: floatingPoint
   */
  scaleType?: ScaleType;
  /**
   * Enables or disables scientific notation.
   * Default value: false
   */
  scientificNotation?: boolean;
  /**
   * Enables or disables displaying of the buttons. 
   * Default value: false
   */
  showButtons?: boolean;
  /**
   * Enables or disables displaying of the thumb label.
   * Default value: false
   */
  showThumbLabel?: boolean;
  /**
   * Enables or disables displaying of the tooltip. 
   * Default value: false
   */
  showTooltip?: boolean;
  /**
   * Enables or disables displaying of the units. 
   * Default value: false
   */
  showUnit?: boolean;
  /**
   * Determining how many significant digits are in a number. Applicable only when scaleType is 'integer'. 
   * Default value: null
   */
  significantDigits?: number;
  /**
   * Sets or gets the element's visual theme. 
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or gets the position of the thumb label.
   * Default value: near
   */
  thumbLabelPosition?: Position;
  /**
   * Sets or gets the position of the ticks in jqxSlider widget.
   * Default value: scale
   */
  ticksPosition?: TicksPosition;
  /**
   * Sets or gets the visibility of the ticks.
   * Default value: minor
   */
  ticksVisibility?: TicksVisibility;
  /**
   * Sets or gets the position of the tooltip in jqxSlider widget. 
   * Default value: near
   */
  tooltipPosition?: Position;
  /**
   * Sets or gets if the element can be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the name of unit used in jqxSlider widget. 
   * Default value: "kg"
   */
  unit?: string;
  /**
   * Sets the value's validation by min/max. If 'strict' is applied, the value is always validated by min and max. If 'interaction' is applied, programmatic value changes are not coerced to min/max and if min/max are changed, resulting in the current value being out of range, the value is not coerced, and no change event is fired.
   * Default value: strict
   */
  validation?: Validation;
  /**
   * Sets or gets the value of the jqxSlider widget. The property is used when the rangeSlider property is set to false.
   * Default value: 0
   */
  value?: any;
  /**
   * Sets or gets the value of the jqxSlider widget. The property is used when the rangeSlider property is set to true.
   * Default value: 0,100
   */
  values?: number[];
  /**
   * Sets or gets the word length. Applicable only when scaleType is 'integer'. 
   * Default value: int32
   */
  wordLength?: WordLength;
  /** 
   * This event is triggered when the value of the slider is changed. 
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Focuses the slider. 
   */
  focus(): void;
  /**
   * Gets the optimal size of the widget. 
   * @returns {any}
   */
  getOptimalSize(): any;
  /**
   * Get/set the value of the slider. 
   * @param {string | number | number[] | string[]} value?. The value to be set. If no parameter is passed, returns the displayed value of the slider. 
   * @returns {string}
   */
  val(value?: string | number | number[] | string[]): string;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-slider"): Slider;
			querySelector(selectors: "smart-slider"): Slider | null;	
			querySelectorAll(selectors: "smart-slider"): NodeListOf<Slider>;
			getElementsByTagName(qualifiedName: "smart-slider"): HTMLCollectionOf<Slider>;
			getElementsByName(elementName: "smart-slider"): NodeListOf<Slider>;	
    }
}

/**Sets the position of the widget's scales.  */
export declare type ScalePosition = 'near' | 'far' | 'both' | 'none';
/**
 Sortable allows you to rearrange a group of html elements.
*/
export interface Sortable extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Enables or disables sorting.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the way a sortable item can be dragged - by dragging the item itself ('item') or by dragging a handle that appears next to the item ('handle').
   * Default value: item
   */
  dragMode?: SortableDragMode;
  /**
   * Sets or gets the the position of the drag handle relative to its respective sortable item. Applicable only when dragMode is 'handle'.
   * Default value: right
   */
  handlePosition?: SortableHandlePosition;
  /**
   * Sets or gets whether a sortable item's drag handle is always visible or is shown when the item is hovered. Applicable only when dragMode is 'handle'.
   * Default value: hover
   */
  handleVisibility?: SortableHandleVisibility;
  /**
   * Sets or gets a selector to determine the sortable items by. By default, sortable items are all children of the smart-sortable custom element.
   * Default value: null
   */
  items?: string | null;
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
   *     "propertyInvalidValue": "Invalid ''!",
   *     "propertyInvalidValueType": "Invalid ''!",
   *     "methodInvalidValueType": "Invalid ''!",
   *     "methodInvalidArgumentsCount": "Invalid '' argument(s)!",
   *     "methodInvalidReturnType": "Invalid ''!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": "'.",
   *     "htmlTemplateNotSuported": ": Web Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the direction sortable items are stacked and can be dragged.
   * Default value: vertical
   */
  mode?: Orientation;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /** 
   * This event is triggered when sortable items have been reordered.
	* @param event. The custom event.    */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /**
   * Moves a sortable item from one index to another.
   * @param {number} fromIndex?. The original index of the item.
   * @param {number} toIndex?. The index to move the item to.
   */
  move(fromIndex?: number, toIndex?: number): void;
  /**
   * Re-evaluates the items that can be sorted. Useful after items have been added to or removed from the custom element.
   */
  updateItems(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-sortable"): Sortable;
			querySelector(selectors: "smart-sortable"): Sortable | null;	
			querySelectorAll(selectors: "smart-sortable"): NodeListOf<Sortable>;
			getElementsByTagName(qualifiedName: "smart-sortable"): HTMLCollectionOf<Sortable>;
			getElementsByName(elementName: "smart-sortable"): NodeListOf<Sortable>;	
    }
}

/**Sets or gets the way a sortable item can be dragged - by dragging the item itself ('item') or by dragging a handle that appears next to the item ('handle'). */
export declare type SortableDragMode = 'item' | 'handle';
/**Sets or gets the the position of the drag handle relative to its respective sortable item. Applicable only when dragMode is 'handle'. */
export declare type SortableHandlePosition = 'right' | 'left' | 'top' | 'bottom';
/**Sets or gets whether a sortable item's drag handle is always visible or is shown when the item is hovered. Applicable only when dragMode is 'handle'. */
export declare type SortableHandleVisibility = 'hover' | 'visible';
/**
 SortPanel allows you to add and remove sort columns and update the sort order of the columns.
*/
export interface SortPanel extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets the the position of the close button of sort panel items.
   * Default value: left
   */
  closeButtonPosition?: SortPanelCloseButtonPosition;
  /**
   * Determines the data source that will be loaded to the sort panel.Each member of the dataSource array is an object with the following fields:dataField - the dataField of the column to be sorted.dataType - the data type of the column to be sorted.label - the column label to be displayed in the column selection input.icon - a specific class to be applied to the respective item in the column selection input.sortDirection - the sort direction to be applied. Possible values: 'ascending' and 'descending'.sortIndex - the sort order of columns. If this value is -1, the column will not be initially sorted.
   * Default value: null
   */
  dataSource?: {label: string, dataField: string, dataType: string, sortDirection: string, sortIndex: number}[];
  /**
   * Enables or disables the sort panel.
   * Default value: false
   */
  disabled?: boolean;
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
   *     "propertyInvalidValue": "Invalid ''!",
   *     "propertyInvalidValueType": "Invalid ''!",
   *     "methodInvalidValueType": "Invalid ''!",
   *     "methodInvalidArgumentsCount": "Invalid '' argument(s)!",
   *     "methodInvalidReturnType": "Invalid ''!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": "'.",
   *     "htmlTemplateNotSuported": ": Web Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "apply": "Apply",
   *     "booleanFirst": "?",
   *     "booleanLast": "?",
   *     "cancel": "Cancel",
   *     "dateFirst": "1",
   *     "dateLast": "9",
   *     "from": "from",
   *     "numberFirst": "1",
   *     "numberLast": "9",
   *     "pickAnother": "Pick another field to sort by",
   *     "firstBy": "Sort by",
   *     "stringFirst": "A",
   *     "stringLast": "Z",
   *     "thenBy": "then by"
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
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when the "Apply" button is clicked.
	* @param event. The custom event.    */
  onApply?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the "Cancel" button is clicked.
	* @param event. The custom event.    */
  onCancel: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-sort-panel"): SortPanel;
			querySelector(selectors: "smart-sort-panel"): SortPanel | null;	
			querySelectorAll(selectors: "smart-sort-panel"): NodeListOf<SortPanel>;
			getElementsByTagName(qualifiedName: "smart-sort-panel"): HTMLCollectionOf<SortPanel>;
			getElementsByName(elementName: "smart-sort-panel"): NodeListOf<SortPanel>;	
    }
}

/**Sets or gets the the position of the close button of sort panel items. */
export declare type SortPanelCloseButtonPosition = 'left' | 'right';
/**
 Splitter is a layout component that supports all important features such as resizing, collapsing, and nesting panels.
*/
export interface Splitter extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines how the items are arranged inside the Splitter. Possible values:   end - all items will fit the size of the Splitter. When inserting a new item the space required for the item to fit will be deducted from it's neighbour. proportional - all items will fit the size of the Splitter. When inserting a new item the space required for it to fit will be the result from the proportional deduction of the size from the rest of the items inside the element. overflow - the items inside the Splitter will not fit it's size. Instead they overflow by taking the exact amount of space they need and a scrollbar is displayed in order to view the content.
   * Default value: proportional
   */
  autoFitMode?: SplitterAutoFitMode;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets splitter's data source.
   * Default value: null
   */
  dataSource?: any;
  /**
   * A getter that returns an array of all Splitter items.
   * Default value: 
   */
  items?: any;
  /**
   * If set the element keeps the same proportions of the items after the whole element has been resized regardless of the size property unit ( pixels or percentages) of the items.
   * Default value: false
   */
  keepProportionsOnResize?: boolean;
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
   * Sets an object with string values, related to the different states of passwords strength.
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
   *     "invalidIndex": "' method accepts an index of type number.",
   *     "indexOutOfBound": "' method.",
   *     "invalidNode": "' method accepts an object or an array of objects as it's second parameter.",
   *     "invalidSettings": "' method accepts a string or an object as it's second parameter.",
   *     "invalidType": "' must be of type string or number."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets splitter's orientation.
   * Default value: vertical
   */
  orientation?: Orientation;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Determines the resize mode of the splitter. Possible values are:  - None - resizing is disabled.  - Adjacent - only the two adjacent items between the target splitter bar are being affected. This is the default behavior.  - End - only the first item( left or top according to the orientation) of the target Splitter bar and the last item are affected.  Proportional - all of the items positioned in the direction to which the splitter bar is dragged will be affected. For example, when a splitter bar is dragged to the right all the items positioned on it's the right side will be affected. The items will obtain a proportional size corresponding to their current size.
   * Default value: adjacent
   */
  resizeMode?: SplitterResizeMode;
  /**
   * Determines the resize step during reisizing
   * Default value: 5
   */
  resizeStep?: number;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar.
   * Default value: false
   */
  liveResize?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when splitter item is collapsed.
	* @param event. The custom event.    */
  onCollapse?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when splitter item is expanded.
	* @param event. The custom event.    */
  onExpand?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when splitter resizing begins.
	* @param event. The custom event.    */
  onResizeStart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when splitter resizing finishes.
	* @param event. The custom event.    */
  onResizeEnd?: ((this: any, ev: Event) => any) | null;
  /**
   * Appends a new node.
   * @param {Node} node. The node to append
   */
  appendChild<T extends Node>(node: Node): T;
  /**
   * Collapses splitter item.
   * @param {any} item. number indicating the index of the item or an isntance of Smart.SplitterItem
   * @param {boolean} far?. Indicates whether the item should collapse to it's far or near side
   */
  collapse(item: any, far?: boolean): void;
  /**
   * Expands the splitter item if possible (if there's enough space available).
   * @param {any} item. number indicating the index of the item or an isntance of Smart.SplitterItem
   */
  expand(item: any): void;
  /**
   * Hides a splitter bar
   * @param {number} splitterBar. A Smart.SplitterBar instance.
   * @returns {number}
   */
  hideBar(splitterBar: number): number;
  /**
   * Insert a new Splitter item at a given position.
   * @param {number} index. The index at which a new item will be inserted.
   * @param {any} details. An Object or string used as content if the splitter item.
   */
  insert(index: number, details: any): void;
  /**
   * Inserts the specified "smart-splitter-item" node before the reference "smart-splitter-item" node.
   * @param {Node} newNode. The  "smart-splitter-item" node to insert.
   * @param {Node | null} referenceNode?. The "smart-splitter-item" node before which newNode is inserted.
   * @returns {Node}
   */
  insertBefore<T extends Node>(newNode: Node, referenceNode?: Node | null): T;
  /**
   * Locks a splitter item so it's size can't change.
   * @param {number} index. The index of a Splitter Bar or it's instance.
   */
  lockItem(index: number): void;
  /**
   * Locks a splitter bar so it can't be dragged.
   * @param {number} index. The index of a Splitter Bar or it's instance.
   */
  lockBar(index: number): void;
  /**
   * Removes a Splitter item.
   * @param {number} index. An item to be removed.
   */
  removeAt(index: number): void;
  /**
   * Removes all items from the Splitter
   */
  removeAll(): void;
  /**
   * Removes a child "smart-splitter-item" node.
   * @param {Node} node. The "smart-splitter-item" node to remove.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Unhides a Splitter Bar
   * @param {number} splitterBar. An instance of a splitter bar.
   */
  showBar(splitterBar: number): void;
  /**
   * Unlocks a previously locked splitter item.
   * @param {number} item. The index of a Splitter Item or it's instance.
   */
  unlockItem(item: number): void;
  /**
   * Unlocks a previously locked splitter bar.
   * @param {number} item. The index of a Splitter Bar or it's instance.
   */
  unlockBar(item: number): void;
  /**
   * Updates the properties of a Splitter item inside the Splitter.
   * @param {any} item. The index of a Smart.SplitterItem or it's instance.
   * @param {any} settings. An object containing the properties of a Smart.SplitterItem.
   */
  update(item: any, settings: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-splitter"): Splitter;
			querySelector(selectors: "smart-splitter"): Splitter | null;	
			querySelectorAll(selectors: "smart-splitter"): NodeListOf<Splitter>;
			getElementsByTagName(qualifiedName: "smart-splitter"): HTMLCollectionOf<Splitter>;
			getElementsByName(elementName: "smart-splitter"): NodeListOf<Splitter>;	
    }
}

/**Determines how the items are arranged inside the Splitter. <br />Possible values:   end - all items will fit the size of the Splitter. When inserting a new item the space required for the item to fit will be deducted from it's neighbour.
 proportional - all items will fit the size of the Splitter. When inserting a new item the space required for it to fit will be the result from the proportional deduction of the size from the rest of the items inside the element.
 overflow - the items inside the Splitter will not fit it's size. Instead they overflow by taking the exact amount of space they need and a scrollbar is displayed in order to view the content.
 */
export declare type SplitterAutoFitMode = 'end' | 'proportional' | 'overflow';
/**Determines the resize mode of the splitter. Possible values are: </br> - None - resizing is disabled. </br> - Adjacent - only the two adjacent items between the target splitter bar are being affected. This is the default behavior. </br> - End - only the first item( left or top according to the orientation) of the target Splitter bar and the last item are affected. </br> Proportional - all of the items positioned in the direction to which the splitter bar is dragged will be affected. For example, when a splitter bar is dragged to the right all the items positioned on it's the right side will be affected. The items will obtain a proportional size corresponding to their current size. */
export declare type SplitterResizeMode = 'none' | 'adjacent' | 'end' | 'proportional';
/**
 SplitterBar splits two Split panels in a Splitter.
*/
export interface SplitterBar extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Hides the splitter bar.
   */
  hide(): void;
  /**
   * Unhides a splitter bar.
   */
  show(): void;
  /**
   * Locks the splitter bar.
   */
  lock(): void;
  /**
   * Unlocks the splitter bar.
   */
  unlock(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-splitter-bar"): SplitterBar;
			querySelector(selectors: "smart-splitter-bar"): SplitterBar | null;	
			querySelectorAll(selectors: "smart-splitter-bar"): NodeListOf<SplitterBar>;
			getElementsByTagName(qualifiedName: "smart-splitter-bar"): HTMLCollectionOf<SplitterBar>;
			getElementsByName(elementName: "smart-splitter-bar"): NodeListOf<SplitterBar>;	
    }
}

/**
 Splitter Item is a Panel in a Splitter component.
*/
export interface SplitterItem extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines of the item is collapsed or not.
   * Default value: false
   */
  collapsed?: boolean;
  /**
   * Determines of the item can be collapsed. If set to false, the item can't be collapsed
   * Default value: false
   */
  collapsible?: boolean;
  /**
   * Determines the content of the splitter items
   * Default value: 
   */
  content?: any;
  /**
   * Determines of the item can be resized or not.
   * Default value: false
   */
  locked?: boolean;
  /**
   * Determines the max size of the item.
   * Default value: ""
   */
  max?: string;
  /**
   * Determines the min size of the item
   * Default value: ""
   */
  min?: string;
  /**
   * Determines the size of the item.
   * Default value: ""
   */
  size?: string;
  /**
   * Collapses the item.
   * @param {string} far. If set to true the item will collapse to it's far side ( to the right for vertical splitter and down for horizontal)
   */
  collapse(far: string): void;
  /**
   * Expands the item if it's collapsed.
   */
  expand(): void;
  /**
   * Locks the item so it can no longer change it's size.
   */
  lock(): void;
  /**
   * Unlocks a previously locked item.
   */
  unlock(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-splitter-item"): SplitterItem;
			querySelector(selectors: "smart-splitter-item"): SplitterItem | null;	
			querySelectorAll(selectors: "smart-splitter-item"): NodeListOf<SplitterItem>;
			getElementsByTagName(qualifiedName: "smart-splitter-item"): HTMLCollectionOf<SplitterItem>;
			getElementsByName(elementName: "smart-splitter-item"): NodeListOf<SplitterItem>;	
    }
}

/**
 A Switch represents a button with two states, on and off. Switches are most often used on mobile devices to enable and disable options.
*/
export interface SwitchButton extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets the click mode of the switch button. This property is active only when switchMode is 'click'. press - the state of the switch is changed on mousedownrelease - the state of the switch is changed on mouseuppressAndRelease - the state of the switch is changed on mousedown and reverted to the original on mouseup.
   * Default value: release
   */
  clickMode?: ClickMode;
  /**
   * Sets or gets the check state.
   * Default value: false
   */
  checked?: boolean;
  /**
   * Enables or disables the ratio button.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets the text representation of checked=false state.
   * Default value: """"
   */
  falseContent?: string;
  /**
   * Sets custom template about false state.
   * Default value: null
   */
  falseTemplate?: any;
  /**
   * Sets or gets indeterminate state of the switch.
   * Default value: false
   */
  indeterminate?: boolean;
  /**
   * Sets the direction of switchin. If is true - positions of the switch states are changed.
   * Default value: false
   */
  inverted?: boolean;
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
   * Sets an object with string values, related to the different states of passwords strength.
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid '!",
   *     "propertyInvalidValueType": "Invalid '!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": ".",
   *     "htmlTemplateNotSuported": ": Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the widget's name.
   * Default value: """"
   */
  name?: string;
  /**
   * Sets the orientation of the switch
   * Default value: horizontal
   */
  orientation?: Orientation;
  /**
   * If the custom element is readonly, it cannot be interacted with.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets the text representation of checked=true state.
   * Default value: """"
   */
  trueContent?: string;
  /**
   * Sets custom template about true state.
   * Default value: "null"
   */
  trueTemplate?: string;
  /**
   * Sets the switchMode of the element. default - dragging the thumb or clicking inside the track can change the state of the element. click - clicking inside the track changes the state of the element. drag - dragging the thumb changes the state of the element.none - the state of the element can only be changed via the API
   * Default value: default
   */
  switchMode?: SwitchButtonSwitchMode;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the widget's value.
   * Default value: """"
   */
  value?: string;
  /** 
   * This event is triggered when the widget is checked/unchecked.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-switch-button"): SwitchButton;
			querySelector(selectors: "smart-switch-button"): SwitchButton | null;	
			querySelectorAll(selectors: "smart-switch-button"): NodeListOf<SwitchButton>;
			getElementsByTagName(qualifiedName: "smart-switch-button"): HTMLCollectionOf<SwitchButton>;
			getElementsByName(elementName: "smart-switch-button"): NodeListOf<SwitchButton>;	
    }
}

/**Sets the switchMode of the element. default - dragging the thumb or clicking inside the track can change the state of the element.
 click - clicking inside the track changes the state of the element.
 drag - dragging the thumb changes the state of the element.
none - the state of the element can only be changed via the API
 */
export declare type SwitchButtonSwitchMode = 'default' | 'click' | 'drag' | 'none';
/**
 Defines a tab item.
*/
export interface TabItem extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Tab item close button state
   * Default value: false
   */
  closeButtonHidden?: boolean;
  /**
   * Tab item index
   * Default value: null
   */
  index?: number;
  /**
   * Tab item selected state
   * Default value: false
   */
  selected?: boolean;
  /**
   * Tab item label
   * Default value: ""
   */
  label?: string;
  /**
   * Tab item content
   * Default value: 
   */
  content?: any;
  /**
   * Tab item label size
   * Default value: null
   */
  labelSize?: number;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-tab-item"): TabItem;
			querySelector(selectors: "smart-tab-item"): TabItem | null;	
			querySelectorAll(selectors: "smart-tab-item"): NodeListOf<TabItem>;
			getElementsByTagName(qualifiedName: "smart-tab-item"): HTMLCollectionOf<TabItem>;
			getElementsByName(elementName: "smart-tab-item"): NodeListOf<TabItem>;	
    }
}

/**
 Defines a group of tab items.
*/
export interface TabItemsGroup extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * 
   * Default value: ""
   */
  label?: string;
  /**
   * 
   * Default value: null
   */
  labelSize?: number;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-tab-items-group"): TabItemsGroup;
			querySelector(selectors: "smart-tab-items-group"): TabItemsGroup | null;	
			querySelectorAll(selectors: "smart-tab-items-group"): NodeListOf<TabItemsGroup>;
			getElementsByTagName(qualifiedName: "smart-tab-items-group"): HTMLCollectionOf<TabItemsGroup>;
			getElementsByName(elementName: "smart-tab-items-group"): NodeListOf<TabItemsGroup>;	
    }
}

/**
 Table is an alternative of the HTMLTableElement.
*/
export interface Table extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Disables the interaction with the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Table columns
   * Default value: null
   */
  columns?: any;
  /**
   * Determines the data source of the table component.
   * Default value: 
   */
  dataSource?: any;
  /**
   * Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale. 
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid '!",
   *     "propertyInvalidValueType": "Invalid '!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": ".",
   *     "htmlTemplateNotSuported": ": Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * The name of the element. Used when submiting data inside a Form.
   * Default value: ""
   */
  name?: string;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the sorting mode of the Table.
   * Default value: none
   */
  sortMode?: TableSortMode;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Clears the Table sorting.
   */
  clearSort(): void;
  /**
   * Binds the table to the data source or rebinds it.
   */
  dataBind(): void;
  /**
   * Focuses the table. 
   */
  focus(): void;
  /**
   * Refreshes the table.
   */
  refresh(): void;
  /**
   * Sorts the Table by a column.
   * @param {string} columnDataField. Column field name.
   * @param {string} sortOrder?. Sort order.
   */
  sortBy(columnDataField: string, sortOrder?: string): void;
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

/**Determines the sorting mode of the Table. */
export declare type TableSortMode = 'none' | 'one' | 'many';
/**
 Tabs organize content across different screens, data sets, and other interactions. Tabs can be paired with components like top app bars. Tabs can be displayed horizontally or vertically.
*/
export interface Tabs extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets whether the "Add new tab" button (+) is displayed.
   * Default value: false
   */
  addNewTab?: boolean;
  /**
   * Allows toggle. If set to true, **selectedIndex** can be set to null (no selected tab).
   * Default value: false
   */
  allowToggle?: boolean;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets the close button mode.
   * Default value: default
   */
  closeButtonMode?: TabsCloseButtonMode;
  /**
   * Sets or gets whether close buttons are displayed.
   * Default value: false
   */
  closeButtons?: boolean;
  /**
   * Sets or gets whether the Tabs content section is collapsed.
   * Default value: false
   */
  collapsed?: boolean;
  /**
   * Enables or disables the collapsible feature.
   * Default value: false
   */
  collapsible?: boolean;
  /**
   * Determines the data source that will be loaded to the Tabs.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Enables or disables scrolling using the mouse wheel through overflowing tab labels in the tab strip. 
   * Default value: false
   */
  enableMouseWheelAction?: boolean;
  /**
   * Sets or gets the locale. Used in conjunction with the property messages. 
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
   *     "ambiguousIndexes": "jqx-tabs: Initially set jqx-tab-item indexes are ambiguous and are ignored in favour of the HTML structure.",
   *     "detailsObjectRequired": "jqx-tabs: The method \"insert\" requires a details Object to be passed as a second argument.",
   *     "invalidIndex": "jqx-tabs: '' method accepts an index of type number.",
   *     "referenceNodeNotChild": "jqx-tabs: Passed  is not part of this jqx-tabs element.",
   *     "tabItemRequired": "jqx-tabs: The method '' requires a \"jqx-tab-item\" element to be passed as an argument."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the widget's name.
   * Default value: """"
   */
  name?: string;
  /**
   * Sets or gets the Tabs scroll buttons behavior. Applicable only when tabLayout is 'scroll'.
   * Default value: auto
   */
  overflow?: Overflow;
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Enables or disables the reorder feature. When this feature is enabled, the end-user can drag a tab and drop it over another tab. As a result the tabs will be reordered.
   * Default value: false
   */
  reorder?: boolean;
  /**
   * Sets or gets whether tab labels can be resized by dragging with the mouse.
   * Default value: false
   */
  resize?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Sets or gets the position of the scroll buttons.
   * Default value: both
   */
  scrollButtonsPosition?: LayoutPosition;
  /**
   * Sets or gets the behavior when scrolling the tab strip via the scroll buttons.
   * Default value: paging
   */
  scrollMode?: TabsScrollMode;
  /**
   * Sets or gets which tab is selected.
   * Default value: null
   */
  selectedIndex?: number | null;
  /**
   * Determines the way the user can switch between tabs.
   * Default value: click
   */
  selectionMode?: TabSelectionMode;
  /**
   * Applies one of four behaviors when the element is not wide enough to display all tab labels.
   * Default value: scroll
   */
  tabLayout?: TabsTabLayout;
  /**
   * Sets or gets where the tab strip is positioned.
   * Default value: top
   */
  tabPosition?: TabPosition;
  /**
   * Sets or gets the orientation of the text in the tabs.
   * Default value: horizontal
   */
  tabTextOrientation?: Orientation;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when the tab selection is changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a tab is closed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a tab is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a drag operation has ended.
	* @param event. The custom event.    */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a drag operation has started.
	* @param event. The custom event.    */
  onDragStart: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when tabs have been reordered.
	* @param event. The custom event.    */
  onReorder?: ((this: any, ev: Event) => any) | null;
  /**
   * Collapses the content section.
   */
  collapse(): void;
  /**
   * Makes sure a tab is visible by scrolling to it.
   * @param {number} index. The index of the tab to scroll to.
   */
  ensureVisible(index: number): void;
  /**
   * Expands the content section.
   */
  expand(): void;
  /**
   * Returns the offset of the tab item container (smart-tab-item element) from the edge of the Tabs (smart-tabs element) where the tab strip is positioned.
   * @param {number} index. The index of the tab item.
   * @returns {number}
   */
  getOffsetFromEdgeOfElement(index: number): number;
  /**
   * Inserts a new tab and an associated content section.
   * @param {number} index. The index to insert a new tab at.
   * @param {any} details. An Object with the fields "label", "labelSize", "content" and "group".
   */
  insert(index: number, details: any): void;
  /**
   * Refreshes the Tabs header section. Useful when the header contains elements (such as images) loaded slower than the Tabs itself.
   */
  refreshTabHeader(): void;
  /**
   * Removes a tab and its associated content section.
   * @param {number} index. The index of the tab to remove.
   */
  removeAt(index: number): void;
  /**
   * Selects a tab.
   * @param {number} index. The index of the tab to select.
   */
  select(index: number): void;
  /**
   * Updates a tab and its associated content section.
   * @param {number} index. The index of the tab to update.
   * @param {string} label. The new label of the tab. The value can be the id of an HTMLTemplateElement
   * @param {string | HTMLElement} content. The new content of the tab.
   */
  update(index: number, label: string, content: string | HTMLElement): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-tabs"): Tabs;
			querySelector(selectors: "smart-tabs"): Tabs | null;	
			querySelectorAll(selectors: "smart-tabs"): NodeListOf<Tabs>;
			getElementsByTagName(qualifiedName: "smart-tabs"): HTMLCollectionOf<Tabs>;
			getElementsByName(elementName: "smart-tabs"): NodeListOf<Tabs>;	
    }
}

/**Sets or gets the close button mode. */
export declare type TabsCloseButtonMode = 'default' | 'selected';
/**Sets or gets the behavior when scrolling the tab strip via the scroll buttons. */
export declare type TabsScrollMode = 'paging' | 'continuous';
/**Determines the way the user can switch between tabs. */
export declare type TabSelectionMode = 'click' | 'dblclick' | 'mouseenter' | 'none';
/**Applies one of four behaviors when the element is not wide enough to display all tab labels. */
export declare type TabsTabLayout = 'scroll' | 'dropDown' | 'wrap' | 'shrink';
/**Sets or gets where the tab strip is positioned. */
export declare type TabPosition = 'top' | 'bottom' | 'left' | 'right' | 'hidden';
/**
 Tank is a UI Component used in Engineering and Scientific applications. It is broadly used to display the fluid levels.
*/
export interface Tank extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * If is set to true all values coerce to the interval, set in the interval property.
   * Default value: false
   */
  coerce?: boolean;
  /**
   * Sets or gets whether custom ticks at (possibly) uneven interval will be plotted. The ticks to be plotted are defined with the property customTicks.
   * Default value: false
   */
  customInterval?: boolean;
  /**
   * If customInterval is enabled, sets a list of ticks to be plotted. If coerce is set to true, the value will snap to these ticks.
   * Default value: 0,50,100
   */
  customTicks?: number[];
  /**
   * Sets or gets the pattern which labels are displayed in when mode is 'date'.
   * Default value: "d"
   */
  dateLabelFormatString?: string;
  /**
   * Sets or gets the char to use as the decimal separator in numeric values. 
   * Default value: "".""
   */
  decimalSeparator?: string;
  /**
   * Enables or disables the widget. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * When cooerce property is true, all values coerce to the interval's value.
   * Default value: 1
   */
  interval?: any;
  /**
   * Sets the direction of the tank. If is true - positions of the tank's begin and end are changed.
   * Default value: false
   */
  inverted?: boolean;
  /**
   * A callback function that can be used to format the values displayed on the tank labels.
   * Default value: null
   */
  labelFormatFunction?: any;
  /**
   * Sets or gets the widget's label visibility
   * Default value: all
   */
  labelsVisibility?: LabelsVisibility;
  /**
   * Sets or gets the locale. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback, related to localization module. 
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Enables or disables the usage of logarithmic scale in the widget.
   * Default value: false
   */
  logarithmicScale?: boolean;
  /**
   * Sets or gets the maximum value of the widget.
   * Default value: 100
   */
  max?: any;
  /**
   * Sets or gets the type of used mechanical action.
   * Default value: switchWhileDragging
   */
  mechanicalAction?: DragMechanicalAction;
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
   *     "significantPrecisionDigits": ": the properties significantDigits and precisionDigits cannot be set at the same time.",
   *     "invalidMinOrMax": " value. Max cannot be lower than Min.",
   *     "noInteger": ": precisionDigits could be set only on \"floatingPoint\" scaleType."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the minimum value of the widget. 
   * Default value: 0
   */
  min?: any;
  /**
   * Sets or gets whether the widget works with numbers or dates.
   * Default value: numeric
   */
  mode?: ScaleMode;
  /**
   * Sets or gets the element's name, which is used as a reference when the data is submitted.
   * Default value: ""
   */
  name?: string;
  /**
   * Sets the orientation of the widget
   * Default value: vertical
   */
  orientation?: Orientation;
  /**
   * Determines the number of digits after the decimal point. Applicable only when scaleType is 'integer'.
   * Default value: null
   */
  precisionDigits?: number;
  /**
   * If the widgets is readonly, the users cannot iteract with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Sets the position of the widget's scales. 
   * Default value: near
   */
  scalePosition?: ScalePosition;
  /**
   * Sets the type of the tank's scale. 
   * Default value: floatingPoint
   */
  scaleType?: ScaleType;
  /**
   * Enables or disables scientific notation.
   * Default value: false
   */
  scientificNotation?: boolean;
  /**
   * Enables or disables displaying of the thumb label.
   * Default value: false
   */
  showThumbLabel?: boolean;
  /**
   * Enables or disables displaying of the tooltip.
   * Default value: false
   */
  showTooltip?: boolean;
  /**
   * Enables or disables displaying of the units.
   * Default value: false
   */
  showUnit?: boolean;
  /**
   * Determining how many significant digits are in a number. Applicable only when scaleType is 'integer'.
   * Default value: 0
   */
  significantDigits?: number;
  /**
   * Sets or gets the element's visual theme. 
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or gets the position of the thumb label.
   * Default value: near
   */
  thumbLabelPosition?: Position;
  /**
   * Sets or gets the position of the ticks in jqxTank widget.
   * Default value: scale
   */
  ticksPosition?: TicksPosition;
  /**
   * Sets or gets the visibility of the ticks.
   * Default value: minor
   */
  ticksVisibility?: TicksVisibility;
  /**
   * Sets or gets the position of the tooltip in jqxTank widget.
   * Default value: near
   */
  tooltipPosition?: Position;
  /**
   * Sets or gets if the element can be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the name of unit used in jqxTank widget.
   * Default value: "kg"
   */
  unit?: string;
  /**
   * Sets the value's validation by min/max. If 'strict' is applied, the value is always validated by min and max. If 'interaction' is applied, programmatic value changes are not coerced to min/max and if min/max are changed, resulting in the current value being out of range, the value is not coerced, and no change event is fired.
   * Default value: strict
   */
  validation?: Validation;
  /**
   * Sets or gets the value of the jqxTank widget. 
   * Default value: 0
   */
  value?: any;
  /**
   * Sets or gets the word length. Applicable only when scaleType is 'integer'.
   * Default value: int32
   */
  wordLength?: WordLength;
  /** 
   * This event is triggered when the value of the tank is changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Focuses the tank. 
   */
  focus(): void;
  /**
   * Gets the optimal size of the widget. 
   * @returns {any}
   */
  getOptimalSize(): any;
  /**
   * Get/set the value of the tank. 
   * @param {string | number} value?. The value to be set. If no parameter is passed, returns the displayed value of the tank. 
   * @returns {string}
   */
  val(value?: string | number): string;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-tank"): Tank;
			querySelector(selectors: "smart-tank"): Tank | null;	
			querySelectorAll(selectors: "smart-tank"): NodeListOf<Tank>;
			getElementsByTagName(qualifiedName: "smart-tank"): HTMLCollectionOf<Tank>;
			getElementsByName(elementName: "smart-tank"): NodeListOf<Tank>;	
    }
}

/**
 TextBox is an input field with auto-suggest options.
*/
export interface TextBox extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines whether the text box will be focused on page load or not.
   * Default value: false
   */
  autoFocus?: boolean;
  /**
   * Determines the autocomplete mode. Auto complete modes filter the items from the dataSource and show only those that match the input.
   * Default value: manual
   */
  autoComplete?: AutoComplete;
  /**
   * Determines the delay before the drop down opens to show the matches from the auto complete operation.
   * Default value: 100
   */
  autoCompleteDelay?: number;
  /**
   * Determines the data source that will be loaded to the ComboBox. The dataSource can be an array of strings, numbers or objects where the attributes represent the properties of a List Item. For example label, value. It can also be a callback that returns an Array of items as previously described.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines whether an indicator will appear during filtering and remote item loading.
   * Default value: false
   */
  displayLoadingIndicator?: boolean;
  /**
   * Sets or gets the displayMember. The displayMember specifies the name of a property to display. The name is contained in the collection specified by the 'dataSource' property.
   * Default value: """"
   */
  displayMember?: string;
  /**
   * Determines how the characters are displayed inside the input.
   * Default value: default
   */
  displayMode?: TextBoxDisplayMode;
  /**
   * Determines the drop down parent. The drop down can be removed from the body of the element and continue to work in another container. This is usefull when one of the parents of the element doesn't allow overflowing, by settings this property to 'body' the drop down will be appended to the DOM and the drop down will open/close as usual. dropDownAppendTo can be a string representing the id of an HTML element on the page or a direct reference to that element. Reseting it back to null will take the drop down back to it's original place.
   * Default value: null
   */
  dropDownAppendTo?: any;
  /**
   * Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownHeight?: string | number;
  /**
   * Sets the maximum Height of the drop down. By default it's set to an empty string. In this case the maxHeight of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMaxHeight?: string | number;
  /**
   * Sets the maximum Width of the drop down. By default it's set to an empty string. In this case the maxWidth of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMaxWidth?: string | number;
  /**
   * Sets the minimum Height of the drop down. By default it's set to an empty string. In this case the minHeight of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMinHeight?: string | number;
  /**
   * Sets the minimum Width of the drop down. By default it's set to an empty string. In this case the minWidth of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMinWidth?: string | number;
  /**
   * Determines how the drop down is going to open.
   * Default value: default
   */
  dropDownOpenMode?: DropDownOpenMode;
  /**
   * If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. The purpose of the overlay is to make sure that clicking anywhere outside the drop down will will target the overlay and not the DOM.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Determines the placeholder for the drop down, displayed when there are no items in it.
   * Default value: "No Items"
   */
  dropDownPlaceholder?: string;
  /**
   * Determines the position of the drop down when opened.
   * Default value: auto
   */
  dropDownPosition?: DropDownPosition;
  /**
   * Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Determines the behavior of the element when Escape key is pressed.
   * Default value: none
   */
  escKeyMode?: EscKeyMode;
  /**
   * Specifies the behavior of "Enter" key.
   * Default value: submit
   */
  enterKeyBehavior?: EnterKeyBehavior;
  /**
   * The form element that the element is associated with (its "form owner"). The value of the attribute must be the ID of a form element in the same document.
   * Default value: ""
   */
  form?: string;
  /**
   * Sets additional helper text below the element. The hint is visible only when the element is focused.
   * Default value: null
   */
  hint?: any;
  /**
   * Determines the visibility of the horizontal Scroll bar thats inside the drop down.
   * Default value: auto
   */
  horizontalScrollBarVisibility?: HorizontalScrollBarVisibility;
  /**
   * Represents the property name of a List item. Determines the value of the input when a ListItem is selected. Usefull in cases where the user wants to display for example the value of an item instead of it's label. By default the label is displayed in the input.
   * Default value: ""
   */
  inputMember?: string;
  /**
   * Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * Sets the height for all list items. Used only when virtualization is enabled.
   * Default value: null
   */
  itemHeight?: number | null;
  /**
   * Determines the item width measuring algorithm.
   * Default value: auto
   */
  itemMeasureMode?: ListItemMeasureMode;
  /**
   * A getter that returns an array of all List items inside the drop down.
   * Default value: 
   */
  items?: any;
  /**
   * The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM.  It's used to set a customize the content of the list items.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Sets a little text label above the element.
   * Default value: ""
   */
  label?: string;
  /**
   * Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom.
   * Default value: "Loading..."
   */
  loadingIndicatorPlaceholder?: string;
  /**
   * Determines the position of the loading indicator.
   * Default value: center
   */
  loadingIndicatorPosition?: VerticalAlignment;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Sets or gets the maximum number of characters that the user can enter.
   * Default value: null
   */
  maxLength?: number;
  /**
   * Sets or gets the minimum number of characters that the user have to enter to trigger the auto complete functionality.
   * Default value: 2
   */
  minLength?: number;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language. 
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
   *     "invalidNode": "."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * Determines whether the drop down is opened or closed
   * Default value: false
   */
  opened?: boolean;
  /**
   * Determines the input's placeholder.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies that the user must fill the input before submitting a form with the element.
   * Default value: false
   */
  required?: boolean;
  /**
   * Specifies the message that will appear if required is set and no value is provided in the input.
   * Default value: ""
   */
  requiredMessage?: string;
  /**
   * Determines whether the content of the input will be selected on focus or not.
   * Default value: false
   */
  selectAllOnFocus?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the value of the element. 
   * Default value: ""
   */
  value?: string;
  /**
   * Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items.
   * Default value: """"
   */
  valueMember?: string;
  /**
   * Determines the visibility of the vertical scroll bar that's inside the drop down.
   * Default value: auto
   */
  verticalScrollBarVisibility?: VerticalScrollBarVisibility;
  /** 
   * This event is triggered when the value of the Text Box is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value, type)
   *  oldValue - The previous value before it was changed.
   *  value - The new value.
   *  type - The type of the event.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Closes the drop down. <strong>The drop down is used only when auto complete is enabled.</strong>
   */
  close(): void;
  /**
   * Opens the drop down. <strong>The drop down is used only when auto complete is enabled.</strong>
   */
  open(): void;
  /**
   * The method is used to reset the input back to it's initial value.
   */
  reset(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-text-box"): TextBox;
			querySelector(selectors: "smart-text-box"): TextBox | null;	
			querySelectorAll(selectors: "smart-text-box"): NodeListOf<TextBox>;
			getElementsByTagName(qualifiedName: "smart-text-box"): HTMLCollectionOf<TextBox>;
			getElementsByName(elementName: "smart-text-box"): NodeListOf<TextBox>;	
    }
}

/**Determines the behavior of the element when Escape key is pressed. */
export declare type EscKeyMode = 'none' | 'previousValue' | 'clearValue';
/**
 Time Picker component allows the user to select time from spinners.
*/
export interface TimePicker extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets whether after selecting hours, the element will automatically switch to minute selection.
   * Default value: false
   */
  autoSwitchToMinutes?: boolean;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines whether the footer section of the element is visible or not.
   * Default value: false
   */
  footer?: boolean;
  /**
   * Sets or gets the footer template. The value of this property can be the id of an HTMLTemplateElement or the HTMLTemplateElement itself. If set to null, a default, empty, template is applied.
   * Default value: null
   */
  footerTemplate?: string | HTMLTemplateElement;
  /**
   * Determines the hour selection format.
   * Default value: 12-hour
   */
  format?: TimePickerFormat;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language. 
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid '!",
   *     "propertyInvalidValueType": "Invalid '!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": ".",
   *     "htmlTemplateNotSuported": ": Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the step when selecting minutes.
   * Default value: 1
   */
  minuteInterval?: number;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the view that is currently being shown. By default the hours view is visible.
   * Default value: hour
   */
  selection?: TimePickerSelection;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the value of the element. The value can be a valid Date object or a string representing a valid time.
   * Default value: new Date()
   */
  value?: any;
  /**
   * Determines whether the element is in landscape or portrait mode.
   * Default value: portrait
   */
  view?: ViewLayout;
  /** 
   * This event is triggered when the value is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The old value before it was changed presented as a Date object.
   *  value - The new value presented as a Date object.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Sets the hours.
   * @param {number} hours. The hours to set.
   */
  setHours(hours: number): void;
  /**
   * Sets the minutes.
   * @param {number} minutes. The minutes to set.
   */
  setMinutes(minutes: number): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-time-picker"): TimePicker;
			querySelector(selectors: "smart-time-picker"): TimePicker | null;	
			querySelectorAll(selectors: "smart-time-picker"): NodeListOf<TimePicker>;
			getElementsByTagName(qualifiedName: "smart-time-picker"): HTMLCollectionOf<TimePicker>;
			getElementsByName(elementName: "smart-time-picker"): NodeListOf<TimePicker>;	
    }
}

/**Determines the hour selection format. */
export declare type TimePickerFormat = '12-hour' | '24-hour';
/**Determines the view that is currently being shown. By default the hours view is visible. */
export declare type TimePickerSelection = 'hour' | 'minute';
/**
 The toast component is like an alert box that is only shown for a couple of seconds when something happens.
*/
export interface Toast extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Specifies the container where new openned toast items will be displayed. The value can be an HTMLElement or element's id. This property is in relation with modal(lower priority than modal) and position(higher priority than position) properties.
   * Default value: null
   */
  appendTo?: any;
  /**
   * Sets or gets whether the toast will automatically close after duration equal to the autoCloseDelay property.
   * Default value: false
   */
  autoClose?: boolean;
  /**
   * Sets or gets the duration after which the toast automatically closes (works only if the autoClose property is set to true).
   * Default value: 3000
   */
  autoCloseDelay?: number;
  /**
   * Sets whether the toast will open automatically immediately after widget's initialization.
   * Default value: false
   */
  autoOpen?: boolean;
  /**
   * The user will not be able to interact with toast items when disabled is set to true.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets custom icon className which overrides the default one. Multiple class names can be applied by separating them with a space. Useful when loading from a third-party icon library (such as Bootstrap).
   * Default value: "null"
   */
  iconClass?: string;
  /**
   * Adds a custom class to Toast items. Multiple class names can be applied by separating them with a space. Useful when styling by using predefined class names from a third-party CSS library (such as Bootstrap).
   * Default value: "null"
   */
  itemClass?: string;
  /**
   * Sets custom item template.
   * Default value: "null"
   */
  itemTemplate?: string;
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * In modal mode the toast item is positioned in the center of the screen. This property is with higher priority than position and appendTo. If modal is set to true these properties are disregarded.
   * Default value: false
   */
  modal?: boolean;
  /**
   * Sets the part of the browser window where the toast will be positioned. The position property is disregarded if appendTo or modal are set.
   * Default value: top-right
   */
  position?: ToastPosition;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Sets or gets whether to show the toast item's close button.
   * Default value: false
   */
  showCloseButton?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets speciffic CSS settings and icon to the toast items.
   * Default value: info
   */
  type?: ToastType | null;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets a text value to an toast item.
   * Default value: 
   */
  value?: any;
  /** 
   * This event is triggered when the toast item is clicked.
	* @param event. The custom event.    */
  onClick: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the toast item is closed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the toast item is opened.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered on swipebottom over an toast item.
	* @param event. The custom event.    */
  onSwipebottom?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered on swipeleft over an toast item.
	* @param event. The custom event.    */
  onSwipeleft?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered on swiperight over an toast item.
	* @param event. The custom event.    */
  onSwiperight?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered on swipetop over an toast item.
	* @param event. The custom event.    */
  onSwipetop?: ((this: any, ev: Event) => any) | null;
  /**
   * Closes all opened toast items.
   */
  closeAll(): void;
  /**
   * Closes particular toast item.
   * @param {HTMLElement | string} item. The toast item (or its id) to remove.
   */
  closeItem(item: HTMLElement | string): void;
  /**
   * Closes the last opened toast item.
   */
  closeLast(): void;
  /**
   * Opens a new toast item and returns the opened smart-toast-item instance. 
   * @returns {HTMLElement}
   */
  open(): HTMLElement;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-toast"): Toast;
			querySelector(selectors: "smart-toast"): Toast | null;	
			querySelectorAll(selectors: "smart-toast"): NodeListOf<Toast>;
			getElementsByTagName(qualifiedName: "smart-toast"): HTMLCollectionOf<Toast>;
			getElementsByName(elementName: "smart-toast"): NodeListOf<Toast>;	
    }
}

/**Sets the part of the browser window where the toast will be positioned. The position property is disregarded if appendTo or modal are set. */
export declare type ToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
/**Sets speciffic CSS settings and icon to the toast items. */
export declare type ToastType = 'info' | 'warning' | 'success' | 'error' | 'mail' | 'time' | null;
/**
 ToggleButton allows the user to change a setting between two states.
*/
export interface ToggleButton extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets the state of the element.
   * Default value: false
   */
  checked?: boolean;
  /**
   * Sets the click mode of the button.
   * Default value: release
   */
  clickMode?: ClickMode;
  /**
   * Enables or disables the ratio button.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets the inner HTML of the element.
   * Default value: """"
   */
  innerHTML: string;
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the widget's name.
   * Default value: """"
   */
  name?: string;
  /**
   * If the custom element is readonly, it cannot be interacted with.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the widget's value.
   * Default value: """"
   */
  value?: string;
  /** 
   * This event is triggered when the state of the element is changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-toggle-button"): ToggleButton;
			querySelector(selectors: "smart-toggle-button"): ToggleButton | null;	
			querySelectorAll(selectors: "smart-toggle-button"): NodeListOf<ToggleButton>;
			getElementsByTagName(qualifiedName: "smart-toggle-button"): HTMLCollectionOf<ToggleButton>;
			getElementsByName(elementName: "smart-toggle-button"): NodeListOf<ToggleButton>;	
    }
}

/**
 Tooltip is an alternate for the html title. It displays a popup with details on hover.
*/
export interface Tooltip extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Gets or sets whether a tooltip's arrow will be shown.
   * Default value: false
   */
  arrow?: boolean;
  /**
   * Sets the position of the arrow.
   * Default value: bottom
   */
  arrowDirection?: TooltipArrowDirection;
  /**
   * Gets or sets whether a tooltip's arrow will be shown.
   * Default value: 0
   */
  delay?: number;
  /**
   * Enables or disables the tooltip.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets an offset by X and Y.
   * Default value: 0,0
   */
  offset?: number[];
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
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language. 
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
   *     "invalidSelector": "' must be a string, an HTMLElement or null.",
   *     "invalidNode": "."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the way of triggering the tooltip.
   * Default value: hover
   */
  openMode?: TooltipOpenMode;
  /**
   * Gets or sets the position of the tooltip.
   * Default value: top
   */
  position?: TooltipPosition;
  /**
   * Sets the element which triggers the tooltip.
   * Default value: null
   */
  selector?: any;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets custom tooltip template.
   * Default value: null
   */
  tooltipTemplate?: any;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the widget's value.
   * Default value: """"
   */
  value?: string;
  /**
   * Sets or gets the visibility of the tooltip.
   * Default value: false
   */
  visible?: boolean;
  /** 
   * This event is triggered when the tooltip is opened.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the tooltip is closed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /**
   * Closes smart-tooltip. 
   */
  close(): void;
  /**
   * Opens smart-tooltip. 
   */
  open(): void;
  /**
   * Toggles smart-tooltip. 
   */
  toggle(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-tooltip"): Tooltip;
			querySelector(selectors: "smart-tooltip"): Tooltip | null;	
			querySelectorAll(selectors: "smart-tooltip"): NodeListOf<Tooltip>;
			getElementsByTagName(qualifiedName: "smart-tooltip"): HTMLCollectionOf<Tooltip>;
			getElementsByName(elementName: "smart-tooltip"): NodeListOf<Tooltip>;	
    }
}

/**Sets the position of the arrow. */
export declare type TooltipArrowDirection = 'bottom' | 'top' | 'left' | 'right';
/**Sets or gets the way of triggering the tooltip. */
export declare type TooltipOpenMode = 'click' | 'focus' | 'hover' | 'manual';
/**
 Treeview component is a user interface that is used to represent hierarchical data in a tree structure.
*/
export interface Tree extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Allows drag operation in current tree. When enabled, items can be dragged and dropped to a tree with enabled allowDrop.
   * Default value: false
   */
  allowDrag?: boolean;
  /**
   * Allows drop operation. Dropped items could originate from the current tree or another tree.
   * Default value: false
   */
  allowDrop?: boolean;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Automatically hides the tree's toggle element (arrow) on mouseleave and shows it on mouseenter.
   * Default value: false
   */
  autoHideToggleElement?: boolean;
  /**
   * Enables or disables auto load state from the browser's localStorage. Information about filtering, sorting, expanded and selected items is loaded.
   * Default value: false
   */
  autoLoadState?: boolean;
  /**
   * Enables or disables auto save state to the browser's localStorage. Information about filtering, sorting, expanded and selected items is saved.
   * Default value: false
   */
  autoSaveState?: boolean;
  /**
   * Enables or disables auto sorting. If modifications are made to a sorted tree, but autoSort is false, the tree will not be re-sorted automatically.
   * Default value: true
   */
  autoSort?: boolean;
  /**
   * Determines the data source that will be loaded to the Tree.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables jqxTree.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Shows or hides loading indicator.
   * Default value: false
   */
  displayLoadingIndicator?: boolean;
  /**
   * Determines the field in the data source that corresponds to an item's label.
   * Default value: "label"
   */
  displayMember?: string;
  /**
   * A callback function for customizing the HTML of the drag feedback. It receives one parameter - an array of the currently dragged items.
   * Default value: null
   */
  dragFeedbackFormatFunction?: any;
  /**
   * Determines the offset of the drag feedback element from the mouse cursor when dragging items. The first member of the array is the horizontal offset and the second one - the vertical offset.
   * Default value: 10,10
   */
  dragOffset?: number[];
  /**
   * Enables or disables item's editting. An edit operation can be initiated by double-clicking a tree item or pressing F2 while an item is selected.
   * Default value: false
   */
  editable?: boolean;
  /**
   * Enables or disables filtering. Shows or hides filter input.
   * Default value: false
   */
  filterable?: boolean;
  /**
   * Sets custom text for placeholder in the filter input.
   * Default value: ""
   */
  filterInputPlaceholder?: string;
  /**
   * Sets filter mode.
   * Default value: containsIgnoreCase
   */
  filterMode?: FilterMode;
  /**
   * Sets or gets whether the tree checkboxes have three states - checked, unchecked and indeterminate. Whorks on selectionMode: 'checkBox'
   * Default value: false
   */
  hasThreeStates?: boolean;
  /**
   * Determines the field in the data source that corresponds to an item group's subitems collection.
   * Default value: "items"
   */
  itemsMember?: string;
  /**
   * Sets custom text for placeholder in the loading indicator if loadingIndicatorPosition is set to 'top' or 'bottom'.
   * Default value: "Loading..."
   */
  loadingIndicatorPlaceholder?: string;
  /**
   * Sets the position of the loading indicator.
   * Default value: center
   */
  loadingIndicatorPosition?: VerticalAlignment;
  /**
   * Sets or gets the locale. Used in conjunction with the property messages.
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
   *     "noId": "jqx-tree: Saving and loading the element's state are not available if the element has no id."
   *   }
   * }
   */
  messages?: any;
  /**
   * Specifies what should happen with the scrollbar (or scroll buttons in scrollMode: 'scrollButtons') if content overflows the element's box.
   * Default value: auto
   */
  overflow?: Overflow;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Determines whether the right-to-left support is enabled.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines whether to use scrollbar or scrollButtons when content overflows an element's box.
   * Default value: scrollbar
   */
  scrollMode?: TreeScrollMode;
  /**
   * An array with indexes (paths) of the selected items.
   * Default value: 
   */
  selectedIndexes?: string[];
  /**
   * Determines the way selected items are highlighted.
   * Default value: row
   */
  selectionDisplayMode?: TreeSelectionDisplayMode;
  /**
   * Determines selection mode.
   * Default value: one
   */
  selectionMode?: TreeSelectionMode;
  /**
   * Shows or hides lines, displaying the relation between elements in group.
   * Default value: false
   */
  showLines?: boolean;
  /**
   * Shows or hides lines starting from the root node. Enabled when 'showLines' is set to true.
   * Default value: false
   */
  showRootLines?: boolean;
  /**
   * Sets user-defined function about custom sorting.
   * Default value: null
   */
  sort?: any;
  /**
   * Determines sort direction - ascending or descending.
   * Default value: asc
   */
  sortDirection?: TreeSortDirection;
  /**
   * Enables or disables sorting.
   * Default value: false
   */
  sorted?: boolean;
  /**
   * Sets or gets the element's visual theme.
   * Default value: ""
   */
  theme?: string;
  /**
   * Determines togle element (arrow) position.
   * Default value: near
   */
  toggleElementPosition?: Position;
  /**
   * Determines the way to toggle smart-tree-items-groups.
   * Default value: dblclick
   */
  toggleMode?: TreeToggleMode;
  /**
   * Sets or gets if the element can be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Determines the field in the data source that corresponds to an item's value.
   * Default value: "value"
   */
  valueMember?: string;
  /** 
   * This event is triggered when selection in jqx-tree is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, oldSelectedIndexes, selectedIndexes)
   *  item - The item the user has interacted with to change the selection (only when applicable).
   *  oldSelectedIndexes - The selected indexes before the selection is changed.
   *  selectedIndexes - The selected indexes after the selection is changed.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a jqx-tree-items-group is collapsed.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, path, value, children)
   *  item - the collapsed jqx-tree-items-group
   *  label - the label of the collapsed jqx-tree-items-group
   *  path - the path of the collapsed jqx-tree-items-group
   *  value - the value of the collapsed jqx-tree-items-group
   *  children - the children of the collapsed jqx-tree-items-group
   */
  onCollapse?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a jqx-tree-items-group is about to be collapsed. The collapsing operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, path, value, children)
   *  item - the jqx-tree-items-group to be collapsed
   *  label - the label of the jqx-tree-items-group to be collapsed
   *  path - the path of the jqx-tree-items-group to be collapsed
   *  value - the value of the jqx-tree-items-group to be collapsed
   *  children - the children of the jqx-tree-items-group to be collapsed
   */
  onCollapsing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a jqx-tree-item/jqx-tree-items-group is dropped somewhere in the DOM. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(container, data, item, items, originalEvent, previousContainer, target)
   *  container - the tree the dragged item(s) is dropped to
   *  data - an object with additional drag details
   *  item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
   *  items - an array with all dragged items
   *  originalEvent - the original, browser, event that initiates the drop operation
   *  previousContainer - the tree the dragged item(s) is dragged from
   *  target - the element the dragged items are dropped to
   */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a jqx-tree-item/jqx-tree-items-group is being dragged.
	* @param event. The custom event. Custom data event was created with: ev.detail(data, item, items, originalEvent)
   *  data - an object with additional drag details
   *  item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
   *  items - an array with all dragged items
   *  originalEvent - the original, browser, event that initiates the dragging operation
   */
  onDragging?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a dragging operation is started in jqx-tree. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(container, data, item, items, originalEvent, previousContainer)
   *  container - the tree the dragged item(s) is dragged from
   *  data - an object with additional drag details
   *  item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
   *  items - an array with all dragged items
   *  originalEvent - the original, browser, event that initiates the drag operation
   *  previousContainer - the tree the dragged item(s) is dragged from
   */
  onDragStart: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a jqx-tree-items-group is expanded.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, path, value, children)
   *  item - the expanded jqx-tree-items-group
   *  label - the label of the expanded jqx-tree-items-group
   *  path - the path of the expanded jqx-tree-items-group
   *  value - the value of the expanded jqx-tree-items-group
   *  children - the children of the expanded jqx-tree-items-group
   */
  onExpand?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a jqx-tree-items-group is about to be expanded. The expanding operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, path, value, children)
   *  item - the jqx-tree-items-group to be expanded
   *  label - the label of the jqx-tree-items-group to be expanded
   *  path - the path of the jqx-tree-items-group to be expanded
   *  value - the value of the jqx-tree-items-group to be expanded
   *  children - the children of the jqx-tree-items-group to be expanded
   */
  onExpanding?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the Tree has been scrolled to the bottom.
	* @param event. The custom event.    */
  onScrollBottomReached?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the Tree has been scrolled to the top.
	* @param event. The custom event.    */
  onScrollTopReached?: ((this: any, ev: Event) => any) | null;
  /**
   * Adds an item after another item as a sibling.
   * @param {HTMLElement} item. A smart-tree-item/smart-tree-items-group to add to the Tree
   * @param {string | HTMLElement} sibling. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to add the item after.
   */
  addAfter(item: HTMLElement, sibling: string | HTMLElement): void;
  /**
   * Adds an item before another item as a sibling.
   * @param {HTMLElement} item. A smart-tree-item/smart-tree-items-group to add to the Tree
   * @param {string | HTMLElement} sibling. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to add the item before.
   */
  addBefore(item: HTMLElement, sibling: string | HTMLElement): void;
  /**
   * Adds an item as the last child of a parent item.
   * @param {HTMLElement} item. A smart-tree-item/smart-tree-items-group to add to the Tree
   * @param {string | HTMLElement} parent?. The smart-tree-items-group (or its id or numeric path) to add the item to.
   */
  addTo(item: HTMLElement, parent?: string | HTMLElement): void;
  /**
   * Clears selection.
   */
  clearSelection(): void;
  /**
   * Collapses all smart-tree-items-groups.
   * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
   */
  collapseAll(animation?: boolean): void;
  /**
   * Collapses a smart-tree-items-group.
   * @param {HTMLElement | string} item. smart-tree-items-group (or its id or numeric path).
   * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
   */
  collapseItem(item: HTMLElement | string, animation?: boolean): void;
  /**
   * Makes sure an item is visible by scrolling to it.
   * @param {HTMLElement | string} item. The id or numeric path of an item
   */
  ensureVisible(item: HTMLElement | string): void;
  /**
   * Expands all smart-tree-items-groups.
   * @param {string} animation?. If set to false, disables expand animation even if animation is enabled for the element.
   */
  expandAll(animation?: string): void;
  /**
   * Expands single smart-tree-items-group.
   * @param {HTMLElement | string} item. smart-tree-items-group (or its id or numeric path).
   * @param {boolean} animation?. If set to false, disables expand animation even if animation is enabled for the element.
   */
  expandItem(item: HTMLElement | string, animation?: boolean): void;
  /**
   * Applies filter to the Tree.
   * @param {string} filterQuery. Filter query.
   */
  filter(filterQuery: string): void;
  /**
   * Gets an item by its id or numeric path.
   * @param {string} id. The id or numeric path of an item.
   * @returns {HTMLElement}
   */
  getItem(id: string): HTMLElement;
  /**
   * Returns SmartTree's state
   * @returns {any}
   */
  getState(): any;
  /**
   * Inserts an item at the given position.
   * @param {any} item. A smart-tree-item/smart-tree-items-group (or an Object to create an item from) to add to the Tree. If an Object is passed, the available fields are <strong>tagName</strong> (<em>'smart-tree-item'</em> - default - or <em>'smart-tree-items-group'</em>), <strong>disabled</strong>, <strong>expanded</strong> (only if <strong>tagName</strong> is <em>'smart-tree-items-group'</em>), <strong>(items)</strong> (only if <strong>tagName</strong> is <em>'smart-tree-items-group'</em>), <strong>(label)</strong>, <strong>separator</strong>, <strong>shortcut</strong> (only if <strong>tagName</strong> is <em>'smart-tree-item'</em>), and <strong>(value)</strong>. (items), (label), and (value) have to correspond to the values of <strong>itemsMember</strong>, <strong>displayMember</strong>, and <strong>valueMember</strong> respectively.
   * @param {string} path?. The path to insert the item at.
   */
  insert(item: any, path?: string): void;
  /**
   * Loads the Tree's state.
   * @param {any} state?. An object returned by one of the methods <strong>getState</strong> or <strong>saveState</strong>. If a state is not passed, the method tries to load the state from the browser's localStorage.
   */
  loadState(state?: any): void;
  /**
   * Moves an item down relative to its siblings.
   * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
   */
  moveDown(item: HTMLElement | string): void;
  /**
   * Moves an item up relative to its siblings.
   * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
   */
  moveUp(item: HTMLElement | string): void;
  /**
   * Removes an item.
   * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
   */
  removeItem(item: HTMLElement | string): void;
  /**
   * Saves the Tree's state.
   * @returns {any}
   */
  saveState(): any;
  /**
   * Selects an item.
   * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
   */
  select(item: HTMLElement | string): void;
  /**
   * Unselects an item.
   * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
   */
  unselect(item: HTMLElement | string): void;
  /**
   * Updates an item.
   * @param {HTMLElement | string} item. smart-tree-item/smart-tree-items-group (or its id or numeric path).
   * @param {any} newItem. An object with updated properties.
   */
  updateItem(item: HTMLElement | string, newItem: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-tree"): Tree;
			querySelector(selectors: "smart-tree"): Tree | null;	
			querySelectorAll(selectors: "smart-tree"): NodeListOf<Tree>;
			getElementsByTagName(qualifiedName: "smart-tree"): HTMLCollectionOf<Tree>;
			getElementsByName(elementName: "smart-tree"): NodeListOf<Tree>;	
    }
}

/**Determines whether to use scrollbar or scrollButtons when content overflows an element's box. */
export declare type TreeScrollMode = 'scrollbar' | 'scrollButtons';
/**Determines the way selected items are highlighted. */
export declare type TreeSelectionDisplayMode = 'row' | 'label';
/**Determines selection mode. */
export declare type TreeSelectionMode = 'none' | 'oneOrManyExtended' | 'zeroOrMany' | 'oneOrMany' | 'zeroOrOne' | 'one' | 'checkBox' | 'radioButton';
/**Determines sort direction - ascending or descending. */
export declare type TreeSortDirection = 'ascending' | 'descending';
/**Determines the way to toggle jqx-tree-items-groups. */
export declare type TreeToggleMode = 'click' | 'dblclick' | 'arrow';
/**
 Defines a tree items.
*/
export interface TreeItem extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Enables or disables element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * 
   * Default value: 
   */
  label?: any;
  /**
   * 
   * Default value: null
   */
  level?: number;
  /**
   * 
   * Default value: false
   */
  selected?: boolean;
  /**
   * 
   * Default value: true
   */
  separator?: boolean;
  /**
   * 
   * Default value: ""
   */
  shortcut?: string;
  /**
   * 
   * Default value: null
   */
  value?: any;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-tree-item"): TreeItem;
			querySelector(selectors: "smart-tree-item"): TreeItem | null;	
			querySelectorAll(selectors: "smart-tree-item"): NodeListOf<TreeItem>;
			getElementsByTagName(qualifiedName: "smart-tree-item"): HTMLCollectionOf<TreeItem>;
			getElementsByName(elementName: "smart-tree-item"): NodeListOf<TreeItem>;	
    }
}

/**
 Defines a group of tree items.
*/
export interface TreeItemsGroup extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Enables or disables element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * 
   * Default value: false
   */
  expanded?: boolean;
  /**
   * 
   * Default value: 
   */
  label?: any;
  /**
   * 
   * Default value: null
   */
  level?: number;
  /**
   * 
   * Default value: false
   */
  selected?: boolean;
  /**
   * 
   * Default value: true
   */
  separator?: boolean;
  /**
   * 
   * Default value: null
   */
  value?: any;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-tree-items-group"): TreeItemsGroup;
			querySelector(selectors: "smart-tree-items-group"): TreeItemsGroup | null;	
			querySelectorAll(selectors: "smart-tree-items-group"): NodeListOf<TreeItemsGroup>;
			getElementsByTagName(qualifiedName: "smart-tree-items-group"): HTMLCollectionOf<TreeItemsGroup>;
			getElementsByName(elementName: "smart-tree-items-group"): NodeListOf<TreeItemsGroup>;	
    }
}

/**
 Validator plug-in is used to validate form elements.
*/
export interface Validator extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * 
   * Default value: null
   */
  rules?: ValidatorRule[];
  /**
   * A valid CSS selector of an element on the page to be used as a container for validation error messages.
   * Default value: ""
   */
  validationSummarySelector?: string;
  /**
   * Clears the error messages.
   */
  reset(): void;
  /**
   * Opens the dropDown.
   * @param {Function} result?. A callback function to call when validating inputs.
   */
  validate(result?: Function): void;
}

export interface ValidatorRule {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * A comma-separated list of events to validate the input(s) on.
   * Default value: ""
   */
  action?: string;
  /**
   * A callback function whose result to compare to the input value by the comparisonType in order to show the validation message. Applicable when type is 'compare'.
   * Default value: 
   */
  comparisonTarget?: any;
  /**
   * An operator to compare the input value by with the result of comparisonTarget in order to show the validation message. Applicable when type is 'compare'.
   * Default value: "=="
   */
  comparisonType?: string;
  /**
   * A valid CSS selector of the input(s) to validate.
   * Default value: ""
   */
  input?: string;
  /**
   * The max value of an input when the rule type is 'stringLength' or the max number of characters in the input's value when the rule type is 'range'.
   * Default value: 
   */
  max?: number | Date;
  /**
   * A message to display on focus of the input and in the validation summary if the input's value is not valid.
   * Default value: ""
   */
  message?: string;
  /**
   * The min value of an input when the rule type is 'stringLength' or the min number of characters in the input's value when the rule type is 'range'.
   * Default value: 
   */
  min?: number | Date;
  /**
   * A regular expression the input's value must match when the rule type is 'pattern'.
   * Default value: 
   */
  pattern?: RegExp;
  /**
   * The type of validation the rule makes.
   * Default value: 
   */
  type?: ValidatorRuleType;
  /**
   * A callback function to validate the input's value by when the rule's type is 'custom'.
   * Default value: 
   */
  validationCallback?: any;
}

declare global {    
    interface Document {
			createElement(tagName: "jqxValidator"): Validator;
			querySelector(selectors: "jqxValidator"): Validator | null;	
			querySelectorAll(selectors: "jqxValidator"): NodeListOf<Validator>;
			getElementsByTagName(qualifiedName: "jqxValidator"): HTMLCollectionOf<Validator>;
			getElementsByName(elementName: "jqxValidator"): NodeListOf<Validator>;	
    }
}

/**The type of validation the rule makes. */
export declare type ValidatorRuleType = 'compare' | 'custom' | 'email' | 'notNumber' | 'numeric' | 'pattern' | 'phone' | 'range' | 'required' | 'startWithLetter' | 'stringLength' | 'zipCode';
/**
 Window or Dialog displays the interactive custom confirmations, message boxes, alerts, warnings, errors, and modal dialogs.
*/
export interface Window extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Determines if 'Add New' Tab inside the Tabs element is visible. Applicable only to TabsWindow
   * Default value: false
   */
  addNewTab?: boolean;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines whether and how the value should be automatically capitalized as it is entered/edited by the user. Applicable only to MultilinePromptWindow.
   * Default value: none
   */
  autoCapitalize?: WindowAutoCapitalize;
  /**
   * Determines whether element will auto expand when the input overflows vertically. Applicable only to MultilinePromptWindow.
   * Default value: false
   */
  autoExpand?: boolean;
  /**
   * Determines the label for the 'cancel' button inside the Prompt Window.
   * Default value: "Cancel"
   */
  cancelLabel?: string;
  /**
   * Determines the label for the 'Complete' button insinde the Progress Window.
   * Default value: "Confirm"
   */
  completeLabel?: string;
  /**
   * Determines the label for the 'Confirm' button insinde the Prompt Window.
   * Default value: "Confirm"
   */
  confirmLabel?: string;
  /**
   * Determines if the window is collapsed or not. When collapsed the only the header of the window is visible.
   * Default value: false
   */
  collapsed?: boolean;
  /**
   * When a modal window is opened, thid property determines if clicking on the mask closes the window or not.
   * Default value: false
   */
  closeOnMaskClick?: boolean;
  /**
   * Determines the data source that will be loaded to the TabsWindow. Applicable only to TabsWindow.
   * Default value: null
   */
  dataSource?: {label: string, content: string}[];
  /**
   * Enables or disables the window.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Enables or disables the window snapping feature.
   * Default value: false
   */
  disableSnap?: boolean;
  /**
   * Determines how the characters are displayed inside the input. Applicable to Prompt Window.
   * Default value: default
   */
  displayMode?: WindowDisplayMode;
  /**
   * Applicable to TabsWindow when docked inside a DockingLayout Custom Element.  Determines where the window(it's tab items as well) can be dropped inside the DockingLayout.  The property is an array that accepts multiple positions. Note: Positions with prefix 'layout-' are applied to the Tab item children of the TabsWidnow owner that is being dragged. The rest of the positions indicate the allowed drop position inside the hovered target(TabsWindow). Used only by jqxDockingLayout custom elements. Determines the possible drop position inside the DockingLayout. The following values are allowed.
   * Default value: 
   */
  dropPosition?: WindowDropPosition;
  /**
   * A callback function defining the new format for the label of the Progress Bar. Applicable only to ProgressWindow.
   * Default value: null
   */
  formatFunction?: any;
  /**
   * Determines the position of the footer of the window element.
   * Default value: top
   */
  footerPosition?: WindowFooterPosition;
  /**
   * Determines the template for the Dialog section of the window. By default footerTemplate is null.
   * Default value: null
   */
  footerTemplate?: any;
  /**
   * Set's the buttons that will be visible in the header section.
   * Default value: close,maximize,minimize
   */
  headerButtons?: string[];
  /**
   * Determines the template for the Dialog section of the window. By default headerTemplate is null.
   * Default value: null
   */
  headerTemplate?: any;
  /**
   * Determines the position of the header of the window element.
   * Default value: top
   */
  headerPosition?: TabPosition;
  /**
   * Sets additional helper text below the text box. The hint is visible only when the text box is focued. Applicable to Prompt Window.
   * Default value: null
   */
  hint?: any;
  /**
   * Sets the value of the Progress bar to indeterminate state(null) and starts the animation. Applicable only to ProgressWindow.
   * Default value: false
   */
  indeterminate?: boolean;
  /**
   * Sets the filling direction of the Progress Bar. Applicable only to ProgressWindow.
   * Default value: false
   */
  inverted?: boolean;
  /**
   * The label of the window that appears in the header area.
   * Default value: ""
   */
  label?: string;
  /**
   * When enabled the resizing operation happens live. By default it's not enabled and during resizing a highlighter around the edges of the window appears to outline  the current size of the element.
   * Default value: false
   */
  liveResize?: boolean;
  /**
   * Applicable only to TabsWindow when used with a DockingLayout custom element.Used only by jqxDockingLayout. Determines the owner jqxDockingLayout  that the window belongs to. When the tabsWindow has been removed from a DockingLayout element, the property is used to indicate that it belongs to that particular Dockinglayout. Accepts a string, representing the ID of a jqxDockingLayout on the page, or an instance of jqxDokcingLayout.
   * Default value: null
   */
  layout?: any;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Applicable only to TabsWindow when docked inside a DockingLayout Custom Element.Determines of the item can be resized or not.
   * Default value: false
   */
  locked?: boolean;
  /**
   * Callback, related to localization module. 
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Determines if the window is maximized or not. When maximized the window covers the whole viewport.
   * Default value: false
   */
  maximized?: boolean;
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines if the window is modal or not. If true the user can only interact with the window and nothing else on the page.
   * Default value: false
   */
  modal?: boolean;
  /**
   * Applicable to TabsWindow when docked inside a DockingLayout Custom Element. Determines the max size of the item. Applicable to Progress Window by allowing the user to specify the maximum of the ProgressBar.
   * Default value: 
   */
  max?: string | number | null;
  /**
   * Applicable to TabsWindow when docked inside DockingLayout Custom Element. Determines the min size of the item. Applicable to Progress Window by allowing the user to specify the minimu of the ProgressBar.
   * Default value: 
   */
  min?: string | number | null;
  /**
   * Determines if the window is minimized or not. When minimized the window is docked at the bottom left corner of the viewport.
   * Default value: false
   */
  minimized?: boolean;
  /**
   * Sets or gets the maximum number of characters that the user can enter. Applicable to Prompt/MultilinePrompt Window.
   * Default value: null
   */
  maxLength?: number;
  /**
   * Sets or gets the minimum number of characters that the user have to enter to trigger the auto complete functionality. Applicable to Prompt/MultilinePrompt Window.
   * Default value: 2
   */
  minLength?: number;
  /**
   * Determines if the window is visible or not.
   * Default value: false
   */
  opened?: boolean;
  /**
   * Determines if the window is pinned or not. Pinned window is a window that can't be dragged but can be resized.
   * Default value: false
   */
  pinned?: boolean;
  /**
   * Determines the input's placeholder. Applicable to Prompt Window.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Determines the label for the Input insinde the PromptWindow.
   * Default value: ""
   */
  promptLabel?: string;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * When applied a resize indicator is displayed in the bottom right corner of the window and resizing operation can be initiated only from its position.
   * Default value: false
   */
  resizeIndicator?: boolean;
  /**
   * Determines the resizing mode of the window.  Several modes are available:   none - resizing is disabled.  vertical - vertical resizing is allowed.  horizontal - horizontal resizing is allowed. both - horizontal and vertical resizing is allowed. top - the window can only be resized from the top side. bottom - the window is resizable only from the bottom side. left - the window can be resized only from the left side. right - the window can be resized only from the right side. 
   * Default value: none
   */
  resizeMode?: WindowResizeMode;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies that the user must fill the input before submitting a form with the text box.Applicable to Prompt Window.
   * Default value: false
   */
  required?: boolean;
  /**
   * Specifies the message that will appear if required is set and no value is provided in the input. Applicable to Prompt Window.
   * Default value: ""
   */
  requiredMessage?: string;
  /**
   * Determines whether the content of the input will be selected on focus or not. Applicable to Prompt Window.
   * Default value: false
   */
  selectAllOnFocus?: boolean;
  /**
   * Sets or gets which tab is selected. Applicable only to TabsWindow.
   * Default value: null
   */
  selectedIndex?: number | null;
  /**
   * Determines the way the user can switch between tabs. Applicable only to TabsWindow.
   * Default value: click
   */
  selectionMode?: TabSelectionMode;
  /**
   * Indicates the index of the last character in the current selection. Applicable only to MultilinePromptWindow.
   * Default value: 0
   */
  selectionEnd?: number;
  /**
   * Indicates the index to the first character in the current selection. Applicable only to MultilinePromptWindow.
   * Default value: 0
   */
  selectionStart?: number;
  /**
   * Enables/Disabled the label for the Progress Bar. Applicable only to Progress Window.
   * Default value: false
   */
  showProgressValue?: boolean;
  /**
   * A getter that returns the siblings (that share the same parent) of a LayoutPanel item that is docked inside a DockingLayout. The siblings are also DockingLayout items ( LayoutPanels).Applicable only to TabsWindow when docked inside a DockingLayout.
   * Default value: 
   */
  siblings?: any;
  /**
   * Applicable to TabsWindow when nested inside a DockingLayout Custom Element. Determines the size of the item.
   * Default value: ""
   */
  size?: string;
  /**
   * Specifies whether the element is to have its spelling and grammar checked or not. Applicable only to MultilinePromptWindow.
   * Default value: false
   */
  spellCheck?: boolean;
  /**
   * Sets or gets whether close buttons are displayed inside the Tab Strip of the TabsWindow. Applicable only to TabsWindow.
   * Default value: false
   */
  tabCloseButtons?: boolean;
  /**
   * Determines if the close button is visible on select or always. Applicable only to TabsWindow.
   * Default value: default
   */
  tabCloseButtonMode?: WindowTabCloseButtonMode;
  /**
   * Sets or gets the Tabs scroll buttons behavior. Applicable only when tabLayout is 'scroll'. Applicable only to TabsWindow.
   * Default value: auto
   */
  tabOverflow?: Overflow;
  /**
   * Detetmines Tab Strip is positioned of the TabsWindow. Applicable only to TabsWindow.
   * Default value: top
   */
  tabPosition?: TabPosition;
  /**
   * Sets or gets the position of the scroll buttons inside the Tab header of the TabsWindow. Applicable only to TabsWindow.
   * Default value: both
   */
  tabScrollButtonsPosition?: LayoutPosition;
  /**
   * Sets or gets the orientation of the text in the tabs labels of the TabsWindow. Applicable only to TabsWindow.
   * Default value: horizontal
   */
  tabTextOrientation?: Orientation;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Determines the value of the TextBox/ProgressBar inside the Dialog/Prompt/Progress Window
   * Default value: 
   */
  value?: string | number;
  /**
   * Determines the actual parent of the element. The window can size and move only in the area of that element.
   * Default value: null
   */
  windowParent?: any;
  /**
   * Indicates how the input wraps text. Applicable only to MultilinePromptWindow.
   * Default value: soft
   */
  wrap?: WindowWrap;
  /** 
   * This event is triggered just before the window starts opening.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window is opened( visible ).
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered just before the window starts closing.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window is closed( hidden )
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window is collapsed.
	* @param event. The custom event.    */
  onCollapse?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when window's dragging is ended.
	* @param event. The custom event.    */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when window's dragging is started.
	* @param event. The custom event.    */
  onDragStart: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window is expanded.
	* @param event. The custom event.    */
  onExpand?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window is maximized.
	* @param event. The custom event.    */
  onMaximize?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window is minimized.
	* @param event. The custom event.    */
  onMinimize?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when window's resizing is ended.
	* @param event. The custom event.    */
  onResizeEnd?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when window's resizing is started.
	* @param event. The custom event.    */
  onResizeStart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window is restored to it's previous state before maximization.
	* @param event. The custom event.    */
  onRestore?: ((this: any, ev: Event) => any) | null;
  /**
   * Appends a tabitem to the end of the list of tab items inside element.
   * @param {Node} node. A TabItem element that should be added to the rest of the items as the last item.
   * @returns {Node}
   */
  appendChild<T extends Node>(node: Node): T;
  /**
   * Sets the window to the top level so the user can interact with it.
   */
  bringToFront(): void;
  /**
   * Clears the content of the Window.
   */
  clear(): void;
  /**
   * Closes the window.
   */
  close(): void;
  /**
   * Collapses the window.
   * @returns {HTMLElement}
   */
  collapse(): HTMLElement;
  /**
   * Makes sure a tab item is visible by scrolling to it. <strong>Applicable only to TabsWindow.</strong>
   * @param {number} index. The index of the tab to scroll to.
   */
  ensureVisible(index: number): void;
  /**
   * Expands the window after being collapsed.
   * @returns {any[]}
   */
  expand(): any[];
  /**
   * Inserts a new tab and an associated content section. <strong>Applicable only to TabsWindow.</strong>
   * @param {number} index. The index to insert a new tab at.
   * @param {any} details. An Object with the fields "label", "labelSize", "content" and "group".
   */
  insert(index: number, details: any): void;
  /**
   * Inserts the specified "smart-tab-item" node before the reference "smart-tab-item" node. <strong>Applicable only to TabsWindow.</strong>
   * @param {Node} newNode. The "smart-tab-item" node to insert.
   * @param {Node | null} referenceNode?. The "smart-tab-item" node before which newNode is inserted.
   * @returns {Node}
   */
  insertBefore<T extends Node>(newNode: Node, referenceNode?: Node | null): T;
  /**
   * Removes a tab and its associated content section. <strong>Applicable only to TabsWindow.</strong>
   * @param {number} index. The index of the tab to remove.
   */
  removeAt(index: number): void;
  /**
   * Removes a child "smart-tab-item" node. <strong>Applicable only to TabsWindow.</strong>
   * @param {Node} node. The "smart-tab-item" node to remove.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Maximizes the window to fill the area.
   */
  maximize(): void;
  /**
   * Minimizes the window.
   */
  minimize(): void;
  /**
   * Opens the window
   */
  open(): void;
  /**
   * Pins the window. Disables window dragging.
   */
  pin(): void;
  /**
   * Restores the window to it's previous size before maximization/minimization.
   */
  restore(): void;
  /**
   * Selects a tab. <strong> Applicalbe only to TabsWindow elements.</strong>
   * @param {number} index. The index of the tab to select.
   */
  select(index: number): void;
  /**
   * Unpins the window. Enables window dragging.
   */
  unpin(): void;
  /**
   * Updates a tab and its associated content section. <strong> Applicalbe only to TabsWindow elements.</strong>
   * @param {number} index. The index of the tab to update.
   * @param {string} label. The new label of the tab. The value can be the id of an HTMLTemplateElement
   * @param {string | HTMLElement} content. The new content of the tab.
   */
  update(index: number, label: string, content: string | HTMLElement): void;
}

export interface Dialog extends Window {}


declare global {    
    interface Document {
			createElement(tagName: "smart-window"): Dialog;
			querySelector(selectors: "smart-window"): Dialog | null;	
			querySelectorAll(selectors: "smart-window"): NodeListOf<Dialog>;
			getElementsByTagName(qualifiedName: "smart-window"): HTMLCollectionOf<Dialog>;
			getElementsByName(elementName: "smart-window"): NodeListOf<Dialog>;	
    }
}


declare global {    
    interface Document {		
		/**
		* Returns the first element that is a descendant of node that matches selectors.
		*/
		querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
		querySelector<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;
		querySelector<E extends Element = Element>(selectors: string): E | null;
		/**
		* Returns all element descendants of node that match selectors.
		*/
		querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
		querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
		querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
		/**
		 * Gets a collection of objects based on the value of the NAME or ID attribute.
		 * @param elementName Gets a collection of objects based on the value of the NAME or ID attribute.
		 */
		getElementsByName(elementName: string): NodeListOf<HTMLElement>;
		/**
		 * Retrieves a collection of objects based on the specified element name.
		 * @param name Specifies the name of an element.
		 */
		getElementsByTagName<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
		getElementsByTagName<K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<SVGElementTagNameMap[K]>;
		getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;		
	}
}
		/**Determines whether and how the value should be automatically capitalized as it is entered/edited by the user. <b>Applicable only to MultilinePromptWindow.</b> */
export declare type WindowAutoCapitalize = 'none' | 'characters' | 'words';
/**Determines how the characters are displayed inside the input. <b>Applicable to Prompt Window.</b> */
export declare type WindowDisplayMode = 'default' | 'escaped';
/**Applicable to TabsWindow when docked inside a DockingLayout Custom Element. <br/> Determines where the window(it's tab items as well) can be dropped inside the DockingLayout. <br/> The property is an array that accepts multiple positions. Note: Positions with prefix 'layout-' are applied to the Tab item children of the TabsWidnow owner that is being dragged. The rest of the positions indicate the allowed drop position inside the hovered target(TabsWindow). Used only by jqxDockingLayout custom elements. Determines the possible drop position inside the DockingLayout. The following values are allowed. */
export declare type WindowDropPosition = 'all' | 'top' | 'bottom' | 'left' | 'right' | 'center' | 'header' | 'layout-top' | 'layout-bottom' | 'layout-left' | 'layout-right';
/**Determines the position of the footer of the window element. */
export declare type WindowFooterPosition = 'bottom' | 'none';
/**Determines the resizing mode of the window. <br/> Several modes are available:   none - resizing is disabled. 
 vertical - vertical resizing is allowed. 
 horizontal - horizontal resizing is allowed.
 both - horizontal and vertical resizing is allowed.
 top - the window can only be resized from the top side.
 bottom - the window is resizable only from the bottom side.
 left - the window can be resized only from the left side.
 right - the window can be resized only from the right side.
  */
export declare type WindowResizeMode = 'none' | 'horizontal' | 'vertical' | 'both' | 'top' | 'bottom' | 'left' | 'right';
/**Determines if the close button is visible on select or always. Applicable only to TabsWindow. */
export declare type WindowTabCloseButtonMode = 'default' | 'selected';
/**Indicates how the input wraps text. <b>Applicable only to MultilinePromptWindow.</b> */
export declare type WindowWrap = 'hard' | 'soft' | 'off';
