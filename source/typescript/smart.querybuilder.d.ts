import  {BaseElement, Animation} from "./smart.element"

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
