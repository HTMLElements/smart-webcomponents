import  {BaseElement, Animation} from "./smart.element"

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

