import  {BaseElement, Animation} from "./smart.element"

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
