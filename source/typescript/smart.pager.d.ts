import  {BaseElement, Animation} from "./smart.element"

export interface PagerProperties {
  /**
   * Specifies or retrieves the current animation mode. When this property is set to 'none', all animations are disabled. Assigning any other valid value enables the corresponding animation mode.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * "Manages the display of ellipsis ("...") within the pagination component. Ellipsis buttons appear when there are too many pages to show at once, serving as visual indicators that more pages are available. These buttons help users quickly navigate to distant pages by indicating page ranges that are not currently displayed."
   * Default value: none
   */
  autoEllipsis?: PagerAutoEllipsis | string;
  /**
   * Controls whether the pager functionality is active. When enabled, the pager allows navigation through paginated content; when disabled, all content may be displayed at once without pagination.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Retrieves or assigns the unlockKey, a unique code required to activate and access the product's full features.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Sets or retrieves the current language code (e.g., 'en', 'fr', 'es'). This property determines which set of messages from the messages object will be used for localization or internationalization purposes. Update this property to change the active language displayed to users.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function associated with the localization module, typically used to handle events or processes such as updating language resources, switching locales, or applying translated content within the application.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines or retrieves an object containing localized strings used within the widget interface. This property enables the customization of widget text for different languages and regions, allowing for internationalization. It is typically used alongside the locale property to display the appropriate language-specific text based on the user's locale setting.
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
   * Manages the placement and alignment of navigation buttons within the user interface, determining their exact position (e.g., top, bottom, left, or right) to ensure optimal usability and layout consistency.
   * Default value: near
   */
  navigationButtonsPosition?: LayoutPosition | string;
  /**
   * Retrieves or updates the index of the currently active page. This value indicates which page is currently being displayed, where the index is zero-based (i.e., the first page has an index of 0). Setting this property changes the current page to the specified index.
   * Default value: 0
   */
  pageIndex?: number;
  /**
   * Specifies the total number of page index selectors (such as page numbers or navigation dots) displayed in the pagination component, allowing users to navigate between different pages of content.
   * Default value: 0
   */
  pageIndexSelectors?: number;
  /**
   * Retrieves or updates the maximum number of items displayed per page. This determines how many items are visible to the user on a single page of results, commonly used for pagination controls.
   * Default value: 10
   */
  pageSize?: number;
  /**
   * Specifies the data source that populates the options available in the element’s page size selector dropdown menu. This determines which page size choices are presented to the user for selection.
   * Default value: 10,25,50
   */
  pageSizeSelectorDataSource?: number[];
  /**
   * Specifies the total count of pages contained within the element, typically used for pagination or indicating how many discrete sections or views are available.
   * Default value: 100
   */
  pagesCount?: number;
  /**
   * When the element is set to readonly, users can view its content but cannot modify or input any data. Interaction such as typing, editing, or changing the value is disabled, although users may still be able to highlight and copy the text.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or retrieves a value that specifies whether the element’s layout is aligned to support right-to-left (RTL) languages, such as Arabic or Hebrew, by enabling RTL text direction and alignment based on the specified locale.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Controls the visibility of the 'First' and 'Last' navigation buttons, allowing you to show or hide these buttons in the navigation component.
   * Default value: false
   */
  showFirstLastNavigationButtons?: boolean;
  /**
   * Replaces the default icon-based navigation buttons with buttons that display descriptive text labels, making navigation options clearer and more accessible to users.
   * Default value: false
   */
  showNavigationButtonLabels?: boolean;
  /**
   * Controls the visibility of the navigation input, specifying whether the navigation input component should be shown or hidden in the user interface.
   * Default value: false
   */
  showNavigationInput?: boolean;
  /**
   * Specifies whether the page index selectors (such as numbered page buttons or links that allow users to navigate between pages) are visible in the user interface. If set to true, the page index selectors will be displayed; if set to false, they will be hidden.
   * Default value: false
   */
  showPageIndexSelectors?: boolean;
  /**
   * Specifies whether the page size selector control is visible to the user, allowing them to choose the number of items displayed per page.
   * Default value: false
   */
  showPageSizeSelector?: boolean;
  /**
   * Controls the visibility of the 'Previous' and 'Next' navigation buttons, determining whether users can navigate backward or forward through the content.
   * Default value: false
   */
  showPrevNextNavigationButtons?: boolean;
  /**
   * Specifies whether the page summary section is visible to users. If set to true, the summary will be displayed at the top of the page; if false, the summary section will be hidden.
   * Default value: false
   */
  showSummary?: boolean;
  /**
   * Specifies the theme to be applied to the element. The theme setting controls the overall appearance—including colors, fonts, and visual styles—ensuring a consistent look and feel across the component.
   * Default value: ""
   */
  theme?: string;
  /**
   * When set to true, this property prevents the element from receiving keyboard focus, meaning users will be unable to select the element using the Tab key or other keyboard navigation methods.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Gets or sets the total number of records available for pagination, which determines how many pages the Pager will display and manage. This property is particularly useful when the Pager is integrated into a larger component or application that handles data fetching, as it allows the Pager to correctly calculate page counts and navigation based on the overall dataset size.
   * Default value: null
   */
  totalRecords?: number;
}
/**
 Pagination component that is used to navigate between a set of results.
*/
export interface Pager extends BaseElement, PagerProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the user selects a different item from the list or dropdown menu. It fires only when the selected item changes, allowing your application to respond to user selection updates, such as displaying additional information, updating content, or triggering related actions based on the newly selected item.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered whenever the page size is modified, such as when a user selects a different number of items to display per page. It allows you to respond to changes in the pagination settings, for example by updating the displayed data or adjusting the layout based on the new page size.
	* @param event. The custom event.    */
  onPageSizeChanged?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Selects the first item in the list or array. This operation targets the element at index 0, retrieving or highlighting it as the initially chosen value.
   */
  first(): void;
  /**
   * Selects the last item in the list or array. This operation retrieves the final element from a collection, regardless of its length. If the list is empty, no item will be selected.
   */
  last(): void;
  /**
   * Navigates to a specified item within the collection, allowing direct access based on a unique identifier or index.
   * @param {any} pageIndex. 
   */
  navigateTo(pageIndex: any): void;
  /**
   * Advances the pagination control to the next available page, allowing users to view additional content.
   */
  next(): void;
  /**
   * Navigates to the previous page in a paginated list or component by selecting the preceding pager item.
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

/**<br/><br/>"Manages the display of ellipsis ("...") within the pagination component. Ellipsis buttons appear when there are too many pages to show at once, serving as visual indicators that more pages are available. These buttons help users quickly navigate to distant pages by indicating page ranges that are not currently displayed." */
export declare type PagerAutoEllipsis = 'none' | 'before' | 'after' | 'both';
/**Manages the placement and alignment of navigation buttons within the user interface, determining their exact position (e.g., top, bottom, left, or right) to ensure optimal usability and layout consistency. */
export declare type LayoutPosition = 'near' | 'far' | 'both';
