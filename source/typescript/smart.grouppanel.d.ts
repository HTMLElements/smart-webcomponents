import  {BaseElement, Animation} from "./smart.element"

export interface GroupPanelProperties {
  /**
   * Controls the animation mode for the element. You can use this property to retrieve the current animation mode or set a new one. When set to 'none', all animations are disabled for the element, resulting in immediate transitions without any visual effects.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Defines or retrieves the position of the close button displayed on items within the group panel. This property allows you to specify where the close button appears (e.g., left, right, or another designated location) for each group panel item, or to access its current position programmatically.
   * Default value: left
   */
  closeButtonPosition?: GroupPanelCloseButtonPosition | string;
  /**
   * Specifies the data source configuration for the group panel.  Each entry in the dataSource array is an object that defines the properties of a column available for grouping. The object includes the following fields:  dataField: The unique field name of the column that can be used for grouping.  dataType: The data type of the column, such as 'string', 'number', 'date', etc.  groupIndex: The initial position of the column in the group order. A value of -1 means the column will not be grouped by default.  label: The display name of the column shown in the column selection dropdown of the group panel.  icon: The CSS class for the icon representing this column in the selection dropdown, allowing for custom visual identification.  sortDirection: The default sort direction when the column is used for grouping. Accepted values are 'ascending' or 'descending'.Use this configuration to control which columns users can group by, their display order, labels, icons, and default sorting in your group panel interface.
   * Default value: null
   */
  dataSource?: {label: string, dataField: string, dataType: string, sortDirection: string, groupIndex: number}[];
  /**
   * Controls the visibility of the group panel, allowing you to show or hide the panel where grouped items or filters are managed. Set to true to display the group panel, or false to hide it from the user interface.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves the unlockKey, a unique code or token required to activate and access the full features of the product. This property is used to manage product unlocking and user authorization.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language setting. This property determines which set of localized messages—defined in the messages property—will be used for displaying content. When setting this value, the corresponding language-specific messages are selected for the user interface.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A callback function that allows you to define or modify the format of messages returned by the Localization Module. Use this to tailor localized message strings—such as formatting variables, changing wording, or supporting custom message structures—before they are delivered to your application.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Specifies or retrieves the maximum number of columns that can be used for grouping results. If the value is set to null, there is no restriction on the number of columns allowed in the grouping operation.
   * Default value: 8
   */
  maxLevel?: number;
  /**
   * Defines or retrieves an object containing localized string values used throughout the widget's user interface. By customizing this object, you can provide translations for UI text, labels, tooltips, and messages. This property works together with the locale property, allowing the widget to display content in different languages based on the specified locale setting.
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
   * If the element is set to readonly, users will be able to view its value but will not be able to modify, edit, or otherwise interact with its content. This means the element’s value cannot be changed through direct user input, although the content may still be selectable or copied.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Gets or sets a value that specifies whether the element’s layout direction is set to right-to-left (RTL), enabling proper alignment and support for languages and locales that use right-to-left scripts, such as Arabic or Hebrew.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * When set to true, this property prevents the element from receiving keyboard focus, meaning the element cannot be selected or activated using the Tab key or other focus navigation methods.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 Defines a group of grouped items in a panel.
*/
export interface GroupPanel extends BaseElement, GroupPanelProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the user clicks the "Apply" button on the interface. It can be used to initiate actions such as submitting form data, applying selected filters, updating displayed content, or executing any operation associated with the user's request to apply changes. The event will only fire in response to direct user interaction with the "Apply" button.
	* @param event. The custom event.    */
  onApply?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the user clicks the "Cancel" button. It typically initiates actions such as closing the current dialog, dismissing a modal window, or aborting an ongoing operation, depending on the application's context.
	* @param event. The custom event.    */
  onCancel: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered whenever the "Collapse all" button is clicked by the user. It typically initiates the process of collapsing or hiding all currently expanded sections, panels, or items within the interface, resulting in a more compact view.
	* @param event. The custom event.    */
  onCollapseAll?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the "Expand all" button is clicked by the user, typically to display all collapsible content sections within the interface. It allows developers to respond to the user's action, such as expanding all hidden panels or rows programmatically.
	* @param event. The custom event.    */
  onExpandAll?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
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

/**Defines or retrieves the position of the close button displayed on items within the group panel. This property allows you to specify where the close button appears (e.g., left, right, or another designated location) for each group panel item, or to access its current position programmatically. */
export declare type GroupPanelCloseButtonPosition = 'left' | 'right';
