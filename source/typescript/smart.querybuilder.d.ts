import  {BaseElement, Animation} from "./smart.element"

export interface QueryBuilderProperties {
  /**
   * Allows users to drag and reorder conditions within a single group or move conditions between different groups, facilitating flexible arrangement and organization of conditions through a user-friendly drag-and-drop interface.
   * Default value: false
   */
  allowDrag?: boolean;
  /**
   * Specifies or retrieves the current animation mode. When this property is set to 'none', all animations are disabled. Otherwise, the selected mode determines how animations are displayed within the component.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Controls the timing of when the element’s value is updated in response to changes, such as user input or interactions. This setting specifies whether the value updates immediately as the user types, when the input loses focus, or upon a specific event.
   * Default value: change
   */
  applyMode?: QueryBuilderApplyMode | string;
  /**
   * When 'applyMode' is set to 'immediately', the default value is instantly assigned to the editor's value, and the QueryBuilder's value is updated in real-time without requiring any additional user action. This ensures that changes are automatically reflected as soon as the default value is set.
   * Default value: false
   */
  autoApplyValue?: boolean;
  /**
   * Controls whether the QueryBuilder component will automatically display a prompt asking the user to enter a value when a new condition is added. If 'applyMode' is set to 'immediately', and the operation field of a newly created condition is empty, QueryBuilder will automatically populate the operation field when the user selects or changes the condition operator. Additionally, whenever the operation or operator of an existing condition is changed, the input field will prompt the user to enter a new value relevant to the updated condition. This ensures that condition values are collected promptly and accurately as users modify or add filtering criteria.
   * Default value: false
   */
  autoPrompt?: boolean;
  /**
   * Enhances the query builder’s condition structure by allowing additional custom operations. Each custom operation can be defined with the following fields:
   * Default value: 
   */
  customOperations?: QueryBuilderCustomOperation[];
  /**
   * Specifies whether the element is interactive and can receive user input. When enabled, the element functions normally. When disabled, the element becomes non-interactive and typically appears visually distinct (e.g., grayed out), preventing user actions such as clicks or text entry.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Configures or retrieves the width (in pixels) of the dropdown menus used in both the property and operator editors, allowing for precise control over their display size in the user interface.
   * Default value: "100%"
   */
  dropDownWidth?: string;
  /**
   * ''An array defining the filterable fields and their corresponding configuration options to control their behavior and appearance. Each field in the array is represented as an object and can be customized using the following properties:- 'label':    The human-readable name for the field. This label will be displayed in the filter field selection dropdown.- 'dataField':    The key or property name in your data source that corresponds to this field.- 'dataType':    Specifies the type of data contained in the field, such as ''string'', ''number'', ''date'', etc. This setting can affect which filter operations are available.- 'filterOperations':    An array specifying which filter operations (such as ''contains'', ''equals'', ''greaterThan'', etc.) can be applied to this field. If this property is omitted, a default set of operations appropriate to the data type will be used.- 'lookup':    An object for configuring the value selection input when filtering this field. The 'lookup' object supports the following options:    - 'autoCompleteDelay':      The delay, in milliseconds, between when the user types in the value selection input and when the dropdown with available options appears.  - 'dataSource':      An array containing the set of predefined options that the user can choose from in the dropdown.  - 'minLength':      The minimum number of characters the user must enter in the input before the options dropdown is shown.  - 'readonly':      Set to 'true' to make the value selection input act as a standard dropdown (the user can only select from the list); set to 'false' for a combo box (the user can type custom values in addition to choosing from the list).This structure provides developers with fine-grained control over how each filter field appears and operates, including the available filter types and the way users select or enter filter values.
   * Default value: null
   */
  fields?: QueryBuilderField[];
  /**
   * Controls whether users are allowed to create and add new fields by typing directly into the field (property) input box, enabling dynamic extension of available fields beyond the predefined options.
   * Default value: dynamic
   */
  fieldsMode?: QueryBuilderFieldsMode | string;
  /**
   * Specifies or retrieves the format string used by the editor for fields of type 'date'. This determines how date values are displayed and parsed within the editor. Adjusting this string allows customization of the date format according to localization or application requirements.
   * Default value: "dd-MMM-yy"
   */
  formatStringDate?: string;
  /**
   * Gets or sets the format string used by the editor for fields of type 'dateTime'. This format string determines how date and time values are displayed and parsed within the editor.
   * Default value: "dd-MMM-yy HH:mm:ss"
   */
  formatStringDateTime?: string;
  /**
   * A callback function that is invoked whenever a new field is dynamically added. This function allows you to configure or modify the settings of the newly added field before it is rendered. This callback is only applicable when fieldsMode is set to 'dynamic'.
   * Default value: null
   */
  getDynamicField?: any;
  /**
   * Specifies the CSS classes assigned to each built-in operation, which determine the corresponding icons displayed for those operations. The icon styles are defined in the smart-query-builder stylesheet. This property takes effect only when showIcons is set to true, enabling visual representation of operations with their respective icons.
   * Default value: { '=': 'equals', '<>': 'notequals', '>': 'greaterthan', '>=': 'greaterthanorequal', '<': 'lessthan', '<=': 'lessthanorequal', 'startswith': 'startswith', 'endswith': 'endswith', 'contains': 'contains', 'notcontains': 'notcontains', 'isblank': 'isblank', 'isnotblank': 'isnotblank' }
   */
  icons?: any;
  /**
   * Provides methods to set or retrieve the 'unlockKey', a unique key required to unlock access to the product. Use this property to assign an unlock key for product activation or to obtain the currently assigned unlock key.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language code (e.g., "en", "fr", "es"). This property determines which set of messages from the messages object will be used for display or processing. Setting this property updates the active language, while getting it returns the currently selected language.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A callback function that allows you to define or modify the formatting of messages generated by the Localization Module before they are returned. Use this to customize message structure, apply additional processing, or support advanced localization needs.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Specifies the names of the fields to be included in the filtered element, allowing you to control which data properties are retained or displayed after filtering.
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
   * Specifies the placeholder text that appears within the operator selection box when no operator has been chosen for the condition. This text guides users by indicating that they need to select an operator.
   * Default value: "Operator"
   */
  operatorPlaceholder?: string;
  /**
   * Specifies the placeholder text displayed within the condition's property field when no field is currently selected by the user. This text provides guidance or prompts users to select a field.
   * Default value: "Property"
   */
  propertyPlaceholder?: string;
  /**
   * Configures or retrieves the value that determines whether the element’s alignment supports right-to-left (RTL) text direction, which is typically used for languages such as Arabic or Hebrew. This property controls whether the element’s layout and text flow are adjusted to accommodate RTL locales.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Controls the visibility of operator icons within the operator selection dropdown menu. When enabled, icons representing each operator are displayed alongside their names in the dropdown list; when disabled, only the operator names are shown without icons.
   * Default value: false
   */
  showIcons?: boolean;
  /**
   * Controls the visibility of the dropdown icon associated with the operator field in the conditions section. When enabled, the dropdown icon appears next to the operator field name, allowing users to select an operator from the available options. When disabled, the dropdown icon is hidden, preventing users from opening the operator selection menu.
   * Default value: false
   */
  showFieldNameArrow?: boolean;
  /**
   * Specifies the theme to be applied to the element. The theme controls the overall appearance, including colors, fonts, and styling, to ensure a consistent visual presentation throughout the interface.
   * Default value: ""
   */
  theme?: string;
  /**
   * If set to true, this property prevents the element from receiving keyboard or programmatic focus, making it unable to become the active element within the user interface.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Specifies whether the condition's value should be validated in real-time as the user types (on every key up event) or only when the input field loses focus (on blur), which is the default behavior. If enabled, value validation occurs after the user stops typing, following a delay defined by the validationTimeout property, which sets the time interval (in milliseconds) before triggering validation after typing ceases.
   * Default value: false
   */
  validateOnInput?: boolean;
  /**
   * Specifies the delay (in milliseconds) that begins once the user has stopped typing in the value field, after which the condition value is validated. This property works in conjunction with validationOnInput, controlling how soon validation is triggered after user input is complete.
   * Default value: 100
   */
  validationTimeout?: number;
  /**
   * The value is structured as a multidimensional array, where each top-level element represents a group operator (such as AND or OR) that organizes multiple conditions. Within each group, an array of condition objects specifies the individual filtering criteria. This structure allows for the representation of complex, nested logical expressions by combining multiple groups and conditions.
   * Default value: 
   */
  value?: any;
  /**
   * A callback function that formats the display or value of the condition input fields before they are rendered or processed. Use this to customize how condition values appear to users or are handled within the application.
   * Default value: null
   */
  valueFormatFunction?: any;
  /**
   * Specifies the placeholder text displayed within the condition's value input field when no value has been entered. This text provides guidance or hints to the user about the expected input.
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
   * This event is triggered whenever the value within the query builder is modified by the user, such as adding, editing, or removing rules or conditions. It provides an opportunity to respond to changes in the query configuration, such as validating input, updating results, or synchronizing state with other components.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, data, originalEvent)
   *  item - The item that is being dragged.
   *  data - The data of the item that is being dragged.
   *  originalEvent - The original event.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when a condition that is being dragged is dropped onto a valid target area within the interface. You can prevent the drop action from completing by calling event.preventDefault() within the event handler function. This allows you to implement custom validation or restrict drops based on specific criteria before the condition is accepted.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, data, target, targetData, targetSide)
   *  item - The item that is being dragged.
   *  data - The data of the item that is being dragged.
   *  target - The target item.
   *  targetData - the data of the target item.
   *  targetSide - The side of the target item where the dragged item will be dropped.
   */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered whenever a condition element is actively being dragged within the user interface. It fires continuously throughout the dragging process, allowing developers to track the position and state of the condition as it moves, and to implement custom behaviors—such as visual feedback or dynamic updates—while the drag action is in progress.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, data, originalEvent)
   *  item - The item that is being dragged.
   *  data - The data of the item that is being dragged.
   *  originalEvent - The original event.
   */
  onDragging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event fires when a drag operation begins within the jqx-query-builder component. You can intercept and prevent the drag action from proceeding by calling event.preventDefault() within your event handler. This allows you to implement custom logic or restrictions before the drag operation officially starts.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, data, originalEvent)
   *  item - The item is going to be dragged.
   *  data - The data of the item that is going to be dragged.
   *  originalEvent - The original event.
   */
  onDragStart: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered whenever a user interacts with any component of the query builder—such as selecting an operator, clicking on a field name, entering a value, or pressing the close button. It allows you to respond to user actions on any of the query builder’s building blocks.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, type, data)
   *  id - The internal id of the clicked item, e.g. '0.1', '1.1', etc.
   *  type - The type of the clicked item ( condition or a group ).
   *  data - The data of the item.
   */
  onItemClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a user selects a specific field, indicating that the field has become active or has received focus. It can be used to initiate actions such as loading related data, displaying contextual hints, or tracking user interactions with the form element.
	* @param event. The custom event. Custom data event was created with: ev.detail(label, value)
   *  label - The label of the selected property.
   *  value - The value of the selected property.
   */
  onPropertySelected?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the component performs input validation. Validation occurs each time a user enters a new value and then shifts focus away from the component (for example, by clicking or tabbing to another UI element). The event provides an opportunity to respond to changes in the input’s validity, such as displaying error messages or updating related state.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, newValue)
   *  oldValue - Old validation status.
   *  newValue - New validation status.
   */
  onValidationChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Transforms the element's current value into a valid Dynamic LINQ expression, enabling advanced querying and runtime evaluation based on the element's data.
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

/**Controls the timing of when the element’s value is updated in response to changes, such as user input or interactions. This setting specifies whether the value updates immediately as the user types, when the input loses focus, or upon a specific event. */
export declare type QueryBuilderApplyMode = 'change' | 'immediately';
/**Controls whether users are allowed to create and add new fields by typing directly into the field (property) input box, enabling dynamic extension of available fields beyond the predefined options. */
export declare type QueryBuilderFieldsMode = 'dynamic' | 'static';
