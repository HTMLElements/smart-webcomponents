import  {BaseElement, Animation} from "./smart.element"

export interface SortPanelProperties {
  /**
   * Specifies the animation mode for the component. You can retrieve or assign a value to this property. When set to 'none', all animations are disabled, and the component will appear or update instantly without any transition effects.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Sets or retrieves the position of the close button within each item of the sort panel, allowing you to specify where the close button appears (such as left, right, or a custom location) for improved user interface customization.
   * Default value: left
   */
  closeButtonPosition?: SortPanelCloseButtonPosition | string;
  /**
   * Specifies the data source to be displayed in the sort panel.Each entry in the dataSource array represents a sortable column and is defined as an object with the following properties:      dataField: The unique identifier for the column to be sorted, typically corresponding to a key in your dataset.        dataType: The type of data contained in the column (e.g., string, number, date), which can influence sorting behavior.        label: The display name of the column, as shown in the column selection menu of the sort panel.        icon: The CSS class name applied to the column’s visual representation in the selection menu, allowing for custom icons or symbols.        sortDirection: The initial sort direction for the column. Accepted values are 'ascending' and 'descending'.        sortIndex: Determines the initial sort order among multiple columns; columns are sorted in ascending order based on this index. A value of -1 means the column is not sorted by default.  
   * Default value: null
   */
  dataSource?: {label: string, dataField: string, dataType: string, sortDirection: string, sortIndex: number}[];
  /**
   * Controls the visibility of the sort panel, allowing users to enable (display) or disable (hide) the panel for sorting data within the interface.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Gets or sets the unlockKey property, which is used to authenticate and grant access to the product’s locked features. This key must be provided to unlock and use the product.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language code. This property determines which language is used when displaying messages, working in combination with the messages property to select the appropriate localized content.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A callback function associated with the localization module, typically used to handle language changes, update translations, or respond to localization-related events within the application.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines or retrieves an object containing the text strings displayed by the widget, allowing these strings to be customized or translated for different languages. This property works together with the locale property to support localization, enabling the widget to display content appropriate for the user’s selected or detected language.
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
   * If the element is set to readonly, users will be able to view its contents but will not be able to modify or edit its value. However, the element may still receive focus and allow text selection, depending on its type. No user interactions will result in changes to the element's data.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * If set to true, the element will be excluded from the page's tab order and cannot receive keyboard focus, making it inaccessible via keyboard navigation or programmatic focusing methods such as element.focus().
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 SortPanel allows you to add and remove sort columns and update the sort order of the columns.
*/
export interface SortPanel extends BaseElement, SortPanelProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the user clicks the "Apply" button, indicating their intent to submit or confirm their selected options or changes. It can be used to handle form submissions, apply filters, or process user input following the click action.
	* @param event. The custom event.    */
  onApply?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a user clicks the "Cancel" button, allowing you to execute custom logic—such as resetting form fields, closing dialog boxes, or aborting an action—in response to the cancellation request.
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

/**Sets or retrieves the position of the close button within each item of the sort panel, allowing you to specify where the close button appears (such as left, right, or a custom location) for improved user interface customization. */
export declare type SortPanelCloseButtonPosition = 'left' | 'right';
