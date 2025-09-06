import  {BaseElement, Animation} from "./smart.element"

export interface MultiColumnFilterPanelProperties {
  /**
   * Defines or retrieves the current animation mode for the element. Setting this property to 'none' disables all animations, while other values enable specific animation behaviors. Use this property to control whether animations are active or inactive.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Controls the placement of the close button within items in the filter panel when using a multi-column layout. You can use this property to retrieve the current position or specify a new position for the close button, determining where it appears relative to each filter panel item.
   * Default value: left
   */
  closeButtonPosition?: MultiColumnFilterPanelCloseButtonPosition | string;
  /**
   * Specifies the data source to be loaded into the multi-column filter panel.The dataSource array consists of objects, each representing a column available for grouping and filtering. Each object includes the following properties:      dataField: The name of the data field that identifies the column to be grouped.        dataType: The type of data contained in the column (e.g., string, number, date), used for correct grouping and filtering operations.        groupIndex: The initial grouping order of the column, where a value of -1 means the column is not grouped by default. Columns with non-negative values are grouped in ascending order based on their groupIndex.        label: The display name for the column, shown in the column selection dropdown or panel for user-friendly identification.        icon: A CSS class or icon identifier to visually represent the column in the selection input, improving the user interface and navigation.        sortDirection: The direction in which items are sorted within the group. Acceptable values are 'ascending' or 'descending'.  This structure allows you to fully customize how columns appear and behave within the multi-column filter panel, including display options, grouping priorities, and sorting behavior.
   * Default value: null
   */
  dataSource?: {label: string, dataField: string, dataType: string, sortDirection: string, groupIndex: number}[];
  /**
   * Controls whether the multi-column filter panel is displayed, allowing users to filter data across multiple columns simultaneously. When enabled, the panel appears in the UI, providing advanced filtering options; when disabled, the panel is hidden and users cannot access multi-column filtering features.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * A callback function invoked to customize or update the configuration of value editor components. This function allows developers to modify editor settings—such as input types, selectable options, validation rules, or UI behavior—before the value editor is rendered or updated.
   * Default value: null
   */
  editorCallback?: any;
  /**
   * Specifies or retrieves the placeholder text displayed in the filter value input fields. This placeholder provides guidance or an example to users about the expected input format when entering filter criteria.
   * Default value: "Value"
   */
  editorPlaceholder?: string;
  /**
   * Sets or retrieves the unlockKey, a unique identifier or code required to activate or gain access to the product's features.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Sets or retrieves the current language code (e.g., 'en', 'fr', 'es') used by the application or component. This property works together with the messages property to display localized content based on the selected language. Changing this value updates which set of localized messages will be used.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function that enables you to define custom formatting for messages returned by the Localization Module, allowing you to modify how localized text is displayed based on your specific requirements (e.g., language, placeholders, or dynamic values).
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Specifies or retrieves the maximum number of columns that can be used in a group by operation. If this value is set to null, there is no restriction on the number of columns that can be grouped.
   * Default value: 8
   */
  maxLevel?: number;
  /**
   * Defines or retrieves an object containing the localized strings displayed by the widget’s user interface. This property enables you to provide translations for all text labels, messages, and prompts shown by the widget, making it adaptable to different languages and regions. It works in conjunction with the locale property, which determines the active language, allowing the widget to display the appropriate set of translated strings based on the selected locale.
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
   * Specifies the logical operator (such as AND or OR) used to combine or evaluate multiple items, determining how their conditions or values are collectively processed.
   * Default value: false
   */
  operator?: MultiColumnFilterPanelOperator | string;
  /**
   * When the element is set to 'readonly', users can view its content but are unable to modify or change its value. However, unlike 'disabled' elements, a readonly element remains focusable and its content can still be selected or copied by users.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Specifies or retrieves a value that determines whether the element’s alignment is adjusted to support right-to-left (RTL) languages and scripts, such as Arabic or Hebrew. When enabled, the element’s content and layout are oriented to accommodate locales that use RTL text direction.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * When this property is set to true, the element will be excluded from the page’s tab order and cannot receive keyboard focus. This means users will not be able to navigate to the element using the Tab key, and focus-related events (such as onfocus) will not be triggered for this element.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Gets or sets the initial value of the element. This property allows you to retrieve the element’s starting value or assign a new initial value before user interaction or script modifications.
   * Default value: 
   */
  value?: any;
}
/**
 Defines an advanced filter panel used for Grid and CardView filtering.
*/
export interface MultiColumnFilterPanel extends BaseElement, MultiColumnFilterPanelProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the user clicks the "Apply" button. It signals that the user has finished configuring their selections or input, and requests that the changes be processed or saved. The event typically carries any relevant data or form values associated with the current application state.
	* @param event. The custom event.    */
  onApply?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a user clicks the "Cancel" button, indicating an intention to abort or exit the current operation. It can be used to execute cleanup tasks, close dialogs or forms, or revert unsaved changes.
	* @param event. The custom event.    */
  onCancel: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered whenever the user clicks the "Collapse all" button, initiating the action to collapse or minimize all currently expanded sections or items in the interface.
	* @param event. The custom event.    */
  onCollapseAll?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the user clicks the "Expand all" button, typically to expand and reveal all collapsible sections or items within the interface. It enables developers to execute specific actions—such as loading additional content or updating the UI—immediately after all expandable elements become visible.
	* @param event. The custom event.    */
  onExpandAll?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
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

/**Controls the placement of the close button within items in the filter panel when using a multi-column layout. You can use this property to retrieve the current position or specify a new position for the close button, determining where it appears relative to each filter panel item. */
export declare type MultiColumnFilterPanelCloseButtonPosition = 'left' | 'right';
/**Specifies the logical operator (such as AND or OR) used to combine or evaluate multiple items, determining how their conditions or values are collectively processed. */
export declare type MultiColumnFilterPanelOperator = 'and' | 'or';
