import  {BaseElement, Animation} from "./smart.element"

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
