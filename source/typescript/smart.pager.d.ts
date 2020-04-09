import  {BaseElement, Animation} from "./smart.element"

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
/**Handles the position of the navigation buttons. */
export declare type LayoutPosition = 'near' | 'far' | 'both';
