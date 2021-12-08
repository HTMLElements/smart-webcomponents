import  {BaseElement, Animation} from "./smart.element"

export interface QueryBuilderProperties {
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
   * Determines whether QueryBuilder will automatically prompt the user to enter a condition value when a new condition is created. When 'applyMode' is set to 'immediately', the operation field is automatically populated if empty when the selected condition operator is changed. The input field prompts the user when the operation or operator of the condition is changed.
   * Default value: false
   */
  autoPrompt?: boolean;
  /**
   * Adds more operations that can be used to the query bilder's conditions structure. Each custom operation can have the following fields:
   * Default value: 
   */
  customOperations?: QueryBuilderCustomOperation[];
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
  fields?: QueryBuilderField[];
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
   *     "add": "Add",
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
   *     "invalidDataStructure": ": Used invalid data structure in updateCondition/updateGroup method.",
   *     "dateTabLabel": "DATE",
   *     "timeTabLabel": "TIME",
   *     "queryLabel": "Query"
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
   * Shows/Hides the drop down icon for the operator field name of the conditions.
   * Default value: false
   */
  showFieldNameArrow?: boolean;
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
   * Determines whether the value of the condition is validated on key up or not. By default the value is validated when the user blur's the value input. The validationTimeout determines the time interval after the user has ended typing that triggers the value validation.
   * Default value: false
   */
  validateOnInput?: boolean;
  /**
   * Determines the timeout (starting after the user has finished typing in the value field) before the validation is applied to the condition value. This property works along validationOnInput.
   * Default value: 100
   */
  validationTimeout?: number;
  /**
   * The value is represented by multidimensional array. The array contains group operators with conditions. Each group can contain multiple conditions.
   * Default value: 
   */
  value?: any;
  /**
   * Callback used to format the content of the condition value fields.
   * Default value: null
   */
  valueFormatFunction?: any;
  /**
   * Determines the placeholder text used inside the condition's value box in case a value is not set.
   * Default value: "Value"
   */
  valuePlaceholder?: string;
}
/**
 QueryBuilder allows you to build dynamically queries for filtering.
*/
export interface QueryBuilder extends BaseElement, QueryBuilderProperties {

  /* Get a member by its name */
  [name: string]: any;
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
  onDragging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
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
  onItemClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a field has been selected.
	* @param event. The custom event. Custom data event was created with: ev.detail(label, value)
   *  label - The label of the selected property.
   *  value - The value of the selected property.
   */
  onPropertySelected?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Converts the current value of the element to DynamicLINQ expression.
   * @returns {string}
   */
  getLinq(): string;
}

export interface QueryBuilderCustomOperation {
  /**
   * label to be displayed in the operator box. Multiple operations with the same label can exist
   * Default value: ""
   */
  label?: string;
  /**
   * A unique name for the operation.
   * Default value: ""
   */
  name?: string;
  /**
   * A callback function that creates a custom value editor. Takes three arguemnts: fieldType - the type of the field for the operation.value - the value of the condition.fieldData - the field object.
   * Default value: null
   */
  editorTemplate?: any;
  /**
   * A callback function that displays the value after the edior has been closed. Takes two argument: editor - the custom editor elementvalue - the condition value.
   * Default value: null
   */
  valueTemplate?: any;
  /**
   * A callback function that handles the value returned by the editor when it is closed. The callback takes one arguemnt - the custom editor element. If the dataType is 'object' the expected result from the function should contain a 'label' and 'value' attributes. Where the label will be used for displaying purposes while 'value' will be used as the actual value.
   * Default value: null
   */
  handleValue?: any;
  /**
   * A boolean condition that specifies whether the operation requires a value or not.
   * Default value: false
   */
  hideValue?: boolean;
  /**
   * A callback that is executed when QueryBuilder validation is triggered. The callback takes one argument, the value of the condition. The function should return true or false to determine whether the conditon is valid or not.
   * Default value: null
   */
  validateValue?: any;
  /**
   * A callback that is called when the custom editor is rendered, visible inside the DOM and ready to be opened. The callback has one parameter - the custom editor element.
   * Default value: null
   */
  onEditorOpen?: any;
  /**
   * A string representing a custom Linq expression template. If the value of the element is a string it will be considered as a Linq expression and it will be checked against all expressionTemplates to find a match.
   * Default value: "null"
   */
  expressionTemplate?: string;
  /**
   * A callback that is used to specify which arguments from the expression are used for the fieldName and value. Used when converting a Linq expression to QueryBuilder value. Takes two arguments: expression - the LinQ expression defined in the expressionTemplate of the customOperator. Type stringbindings - an array of expression parameters based on the expression template of the customOperator. Type string[]
   * Default value: null
   */
  expressionReaderCallback?: any;
  /**
   * A callback function that is used to specify which arguments from the Linq expression are used for the fieldName and value when building the Linq expression from the current value of the element. Takes three arguments: name - the name of the dataField. Type string.operation - the name of the operation. Type stringvalue - the value of the operation. Type any( depends on the dataField).
   * Default value: null
   */
  expressionBuilderCallback?: any;
}

export interface QueryBuilderField {
  /**
   * Sets or gets the label.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets the data field
   * Default value: ""
   */
  dataField?: string;
  /**
   * Sets or gets the data type.
   * Default value: "string"
   */
  dataType?: string;
  /**
   * Sets or gets the filter format.
   * Default value: ""
   */
  format?: string;
  /**
   * Sets or gets the filter operations.
   * Default value: []
   */
  filterOperations?: string[];
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
