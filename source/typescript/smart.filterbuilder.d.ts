import  {BaseElement, Animation} from "./smart.element"

export interface FilterBuilderProperties {
  /**
   * Specifies or retrieves the current animation mode. When this property is set to 'none', all animation effects are disabled. Setting it to other supported values enables the corresponding animation behavior.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Enhances the set of available operations that can be used within the filter builder's condition structure, allowing for more flexible and complex filtering criteria.
   * Default value: 
   */
  customOperations?: {name: string, caption: string, icon: string}[];
  /**
   * Determines whether the context menu (typically accessed via right-click) is available to users. Setting this option to true allows users to open the context menu, while setting it to false disables the menu and prevents it from appearing.
   * Default value: false
   */
  disableContextMenu?: boolean;
  /**
   * Specifies whether the element is active and interactive (enabled) or inactive and non-interactive (disabled). When enabled, users can interact with the element; when disabled, the element appears visually inactive and cannot be interacted with.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * An array containing filtered field objects, where each object defines a specific field and its associated configuration settings. This includes details such as the field name, data type, validation rules, display properties, and any additional options relevant to how the field should be handled or presented.
   * Default value: null
   */
  fields?: any;
  /**
   * Specifies or retrieves the format string used by the editor for fields of type 'date'. This determines how date values are displayed and parsed within the editor, such as the order of day, month, and year.
   * Default value: "dd-MMM-yy"
   */
  formatStringDate?: string;
  /**
   * Sets or retrieves the format string used by the editor for fields of type 'datetime', specifying how date and time values are displayed and edited within the field. This determines the input and display format (e.g., 'YYYY-MM-DD HH:mm:ss') for users interacting with 'datetime' fields.
   * Default value: "dd-MMM-yy HH:mm:ss"
   */
  formatStringDateTime?: string;
  /**
   * Displays a helpful popup message as a tooltip or hint to guide the user when interacting with the form element.
   * Default value: "null"
   */
  hint?: string;
  /**
   * Specifies the icon's visual representation using character symbols (such as Unicode or font glyphs), allowing the icon to be displayed as a character within text elements.
   * Default value: { '=': '=', '<>': '<>', '>': '>', '>=': '>=', '<': '<', '<=': '<=', 'startswith': 'a|bc', 'endswith': 'ab|c', 'contains': 'abc', 'notcontains': '!abc', 'isblank': 'o', 'isnotblank': '*'}
   */
  icons?: FilterBuilderIcons;
  /**
   * Handles the retrieval or assignment of the unlockKey property, which serves as the authorization token required to activate and access the product’s full features. Setting this property provides the necessary key to unlock the product, while getting it returns the current unlock key value in use.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language code (e.g., 'en', 'es', 'fr') for the component. This property works together with the messages property to determine which set of localized messages to display, enabling multilingual support. When setting the language, the corresponding messages are loaded automatically based on the selected language code.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function associated with the localization module, typically used to handle events or responses related to language translation, locale changes, or loading localized resources within the application.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Specifies the maximum number of conditions that can be applied to this element. If the number of conditions exceeds this limit, additional conditions will not be accepted or processed.
   * Default value: null
   */
  maxConditions?: number | null;
  /**
   * Specifies the maximum number of conditions that can be included within a single group. This sets an upper limit to how many conditions are allowed in each group, ensuring that no group exceeds the defined threshold.
   * Default value: null
   */
  maxConditionsPerGroup?: number | null;
  /**
   * Specifies the highest number of nested grouping levels allowed within the FilterBuilder, setting a limit on how deeply filters can be grouped and combined.
   * Default value: null
   */
  maxLevel?: number | null;
  /**
   * Specifies the names of the fields within the element that has been filtered, allowing you to identify which attributes are included as part of the filtered results.
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
   * When an element has the "readonly" attribute, its value cannot be modified by the user; however, the element can still receive focus and its content can be selected or copied. Interactivity such as editing or input is disabled, but users may still interact with the element in non-editing ways.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * When 'restrictedMode' is set to 'true', users are prevented from adding new groups or editing existing groups through the user interface. This means all group management actions must be performed programmatically or by users with elevated permissions; standard user interactions for creating or modifying groups are disabled.
   * Default value: false
   */
  restrictedMode?: boolean;
  /**
   * Controls whether the icons are visible or hidden in the user interface. When enabled, icons are displayed; when disabled, icons are not shown.
   * Default value: false
   */
  showIcons?: boolean;
  /**
   * Specifies the theme to be applied, which controls the overall appearance and style of the element, including colors, fonts, and other visual properties.
   * Default value: ""
   */
  theme?: string;
  /**
   * When set to true, this property prevents the element from receiving keyboard focus, meaning users cannot navigate to or interact with the element using the Tab key or other focus-related methods.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * The value is structured as a multidimensional array designed to represent complex logical conditions. Each element of the array is either a group operator (such as AND, OR, NOT) or a condition. Groups can themselves contain arrays of conditions and/or further groups, allowing for multiple levels of nesting. This hierarchical structure enables the representation of intricate, compound logic expressions through nested combinations of operators and conditions.
   * Default value: or
   */
  value?: string[];
  /**
   * A callback function that is invoked to customize the formatting of value field contents before they are displayed. This allows you to control how data is presented within the value fields by modifying the output as needed.
   * Default value: null
   */
  valueFormatFunction?: any;
  /**
   * Specifies the placeholder text that appears in the condition’s value input field when no value has been entered. This text provides guidance or an example to users about the expected input.
   * Default value: "&lt;enter a value&gt;"
   */
  valuePlaceholder?: string;
}
/**
 FilterBuilder allows you to dynamically build filters.
*/
export interface FilterBuilder extends BaseElement, FilterBuilderProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the value of the element is modified by the user and then the element loses focus or the change is committed (for example, after pressing Enter). It allows you to detect and respond to updates made to the element's value.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered whenever an editor instance is closed, either by user action or programmatically. It allows developers to perform cleanup tasks, save state, or update the user interface in response to the editor being closed.
	* @param event. The custom event.    */
  onEditorClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user initiates the process of closing the editor, such as by clicking the close button or issuing a close command. It occurs before the editor is fully closed, allowing you to perform actions like prompting the user to save changes or cancelling the close operation if necessary.
	* @param event. The custom event.    */
  onEditorClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever an editor instance is initialized and opened, allowing you to perform custom actions or modifications immediately after the editor becomes available to the user.
	* @param event. The custom event.    */
  onEditorOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever an editor instance begins the process of opening, allowing you to execute custom logic or initialization tasks before the editor is fully loaded and ready for user interaction.
	* @param event. The custom event.    */
  onEditorOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a user clicks on any of the building blocks within the filter builder component. Building blocks may include elements such as fields, operators, or value inputs that are used to construct filter conditions. Use this event to execute custom logic in response to user interactions with individual filter components.
	* @param event. The custom event.    */
  onItemClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the built-in menu is opened by the user—for example, when they right-click or perform the relevant action to invoke the context menu. Note that if the <strong>disableContextMenu</strong> property is set to <code>true</code>, this event will not be dispatched, effectively disabling the menu and its associated event trigger.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered immediately when the built-in context menu begins to open. However, if the <strong>disableContextMenu</strong> property is set to <code>true</code>, the built-in menu is suppressed and this event will not be dispatched. Use this event to implement custom logic or UI changes in response to the opening of the default context menu, unless the menu has been explicitly disabled.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered each time the built-in menu is closed by the user. However, if the <strong>disableContextMenu</strong> property is set to <code>true</code>, the menu is never displayed, and this event will not be fired. Use this event to perform actions or cleanup tasks after the menu has been closed, unless the context menu has been disabled.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when the built-in menu begins the process of closing. Note that if the <strong>disableContextMenu</strong> property is set to <code>true</code>, this event will not be fired. Use this event to perform actions or cleanup tasks as the menu is about to be dismissed.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Adds a new condition to a specified group, enabling further customization or logic within that group's configuration.
   * @param {string | HTMLElement} parentGroup. A string, representing the id of the item or an HTML Element referencing this condition.
   * @param {any[]} data. An array, representing condition. Condition's element's role is related to their position in the condition's array. At index 0 - field name, index 1 - condition's opertor, index 2 - condition's value.
   */
  addCondition(parentGroup: string | HTMLElement, data: any[]): void;
  /**
   * Creates a new group within a specified parent group, establishing a hierarchical relationship between the new group and its designated parent.
   * @param {string | HTMLElement} parentGroup. A string, representing the id of the item or an HTML Element referencing this group.
   * @param {string} data. A string, representing the group operator.
   */
  addGroup(parentGroup: string | HTMLElement, data: string): void;
  /**
   * Removes the specified condition from the configuration or dataset, ensuring that any rules, filters, or logic associated with this condition are no longer applied. This operation helps update or simplify the criteria used within the system.
   * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this condition.
   */
  removeCondition(item: string | HTMLElement): void;
  /**
   * Deletes the specified group along with all of its child elements recursively. This action is irreversible and will remove the group and all nested items associated with it from the system.
   * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this group.
   */
  removeGroup(item: string | HTMLElement): void;
  /**
   * Returns a string that represents the current configuration or criteria defined in the filter builder. This output can be used for display, debugging, or serialization purposes, providing a readable summary of the filter builder’s selected fields, conditions, and values.
   * @param {boolean} useLabels?. Controls the way of string representation. In mode without labels the value object is stringified only.
   * @returns {string}
   */
  toString(useLabels?: boolean): string;
  /**
   * Updates the existing condition by modifying its properties based on the provided input. This typically involves validating the input data, locating the target condition, applying any changes, and saving the updated condition. Returns the modified condition upon successful completion.
   * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing targeted condition.
   * @param {any[]} data. An array, representing condition. Condition's element's role is related to their position in the condition's array. At index 0 - field name, index 1 - condition's opertor, index 2 - condition's value.
   */
  updateCondition(item: string | HTMLElement, data: any[]): void;
  /**
   * Updates the details of an existing group, such as its name, description, or membership settings. Use this endpoint to modify group information.
   * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this group.
   * @param {string} data. A string, representing the group operator.
   */
  updateGroup(item: string | HTMLElement, data: string): void;
}

/**Specifies the icon's visual representation using character symbols (such as Unicode or font glyphs), allowing the icon to be displayed as a character within text elements. */
export interface FilterBuilderIcons {
  /**
   * 
   * Default value: undefined
   */
  0?: any;
  /**
   * 
   * Default value: undefined
   */
  1?: any;
  /**
   * 
   * Default value: undefined
   */
  2?: any;
  /**
   * 
   * Default value: undefined
   */
  3?: any;
  /**
   * 
   * Default value: undefined
   */
  4?: any;
  /**
   * 
   * Default value: undefined
   */
  5?: any;
  /**
   * 
   * Default value: undefined
   */
  6?: any;
  /**
   * 
   * Default value: undefined
   */
  7?: any;
  /**
   * 
   * Default value: undefined
   */
  8?: any;
  /**
   * 
   * Default value: undefined
   */
  9?: any;
  /**
   * 
   * Default value: undefined
   */
  10?: any;
  /**
   * 
   * Default value: undefined
   */
  11?: any;
  /**
   * 
   * Default value: undefined
   */
  12?: any;
  /**
   * 
   * Default value: undefined
   */
  13?: any;
  /**
   * 
   * Default value: undefined
   */
  14?: any;
  /**
   * 
   * Default value: undefined
   */
  15?: any;
  /**
   * 
   * Default value: undefined
   */
  16?: any;
  /**
   * 
   * Default value: undefined
   */
  17?: any;
  /**
   * 
   * Default value: undefined
   */
  18?: any;
  /**
   * 
   * Default value: undefined
   */
  19?: any;
  /**
   * 
   * Default value: undefined
   */
  20?: any;
  /**
   * 
   * Default value: undefined
   */
  21?: any;
  /**
   * 
   * Default value: undefined
   */
  22?: any;
  /**
   * 
   * Default value: undefined
   */
  23?: any;
  /**
   * 
   * Default value: undefined
   */
  24?: any;
  /**
   * 
   * Default value: undefined
   */
  25?: any;
  /**
   * 
   * Default value: undefined
   */
  26?: any;
  /**
   * 
   * Default value: undefined
   */
  27?: any;
  /**
   * 
   * Default value: undefined
   */
  28?: any;
  /**
   * 
   * Default value: undefined
   */
  29?: any;
  /**
   * 
   * Default value: undefined
   */
  30?: any;
  /**
   * 
   * Default value: undefined
   */
  31?: any;
  /**
   * 
   * Default value: undefined
   */
  32?: any;
  /**
   * 
   * Default value: undefined
   */
  33?: any;
  /**
   * 
   * Default value: undefined
   */
  34?: any;
  /**
   * 
   * Default value: undefined
   */
  35?: any;
  /**
   * 
   * Default value: undefined
   */
  36?: any;
  /**
   * 
   * Default value: undefined
   */
  37?: any;
  /**
   * 
   * Default value: undefined
   */
  38?: any;
  /**
   * 
   * Default value: undefined
   */
  39?: any;
  /**
   * 
   * Default value: undefined
   */
  40?: any;
  /**
   * 
   * Default value: undefined
   */
  41?: any;
  /**
   * 
   * Default value: undefined
   */
  42?: any;
  /**
   * 
   * Default value: undefined
   */
  43?: any;
  /**
   * 
   * Default value: undefined
   */
  44?: any;
  /**
   * 
   * Default value: undefined
   */
  45?: any;
  /**
   * 
   * Default value: undefined
   */
  46?: any;
  /**
   * 
   * Default value: undefined
   */
  47?: any;
  /**
   * 
   * Default value: undefined
   */
  48?: any;
  /**
   * 
   * Default value: undefined
   */
  49?: any;
  /**
   * 
   * Default value: undefined
   */
  50?: any;
  /**
   * 
   * Default value: undefined
   */
  51?: any;
  /**
   * 
   * Default value: undefined
   */
  52?: any;
  /**
   * 
   * Default value: undefined
   */
  53?: any;
  /**
   * 
   * Default value: undefined
   */
  54?: any;
  /**
   * 
   * Default value: undefined
   */
  55?: any;
  /**
   * 
   * Default value: undefined
   */
  56?: any;
  /**
   * 
   * Default value: undefined
   */
  57?: any;
  /**
   * 
   * Default value: undefined
   */
  58?: any;
  /**
   * 
   * Default value: undefined
   */
  59?: any;
  /**
   * 
   * Default value: undefined
   */
  60?: any;
  /**
   * 
   * Default value: undefined
   */
  61?: any;
  /**
   * 
   * Default value: undefined
   */
  62?: any;
  /**
   * 
   * Default value: undefined
   */
  63?: any;
  /**
   * 
   * Default value: undefined
   */
  64?: any;
  /**
   * 
   * Default value: undefined
   */
  65?: any;
  /**
   * 
   * Default value: undefined
   */
  66?: any;
  /**
   * 
   * Default value: undefined
   */
  67?: any;
  /**
   * 
   * Default value: undefined
   */
  68?: any;
  /**
   * 
   * Default value: undefined
   */
  69?: any;
  /**
   * 
   * Default value: undefined
   */
  70?: any;
  /**
   * 
   * Default value: undefined
   */
  71?: any;
  /**
   * 
   * Default value: undefined
   */
  72?: any;
  /**
   * 
   * Default value: undefined
   */
  73?: any;
  /**
   * 
   * Default value: undefined
   */
  74?: any;
  /**
   * 
   * Default value: undefined
   */
  75?: any;
  /**
   * 
   * Default value: undefined
   */
  76?: any;
  /**
   * 
   * Default value: undefined
   */
  77?: any;
  /**
   * 
   * Default value: undefined
   */
  78?: any;
  /**
   * 
   * Default value: undefined
   */
  79?: any;
  /**
   * 
   * Default value: undefined
   */
  80?: any;
  /**
   * 
   * Default value: undefined
   */
  81?: any;
  /**
   * 
   * Default value: undefined
   */
  82?: any;
  /**
   * 
   * Default value: undefined
   */
  83?: any;
  /**
   * 
   * Default value: undefined
   */
  84?: any;
  /**
   * 
   * Default value: undefined
   */
  85?: any;
  /**
   * 
   * Default value: undefined
   */
  86?: any;
  /**
   * 
   * Default value: undefined
   */
  87?: any;
  /**
   * 
   * Default value: undefined
   */
  88?: any;
  /**
   * 
   * Default value: undefined
   */
  89?: any;
  /**
   * 
   * Default value: undefined
   */
  90?: any;
  /**
   * 
   * Default value: undefined
   */
  91?: any;
  /**
   * 
   * Default value: undefined
   */
  92?: any;
  /**
   * 
   * Default value: undefined
   */
  93?: any;
  /**
   * 
   * Default value: undefined
   */
  94?: any;
  /**
   * 
   * Default value: undefined
   */
  95?: any;
  /**
   * 
   * Default value: undefined
   */
  96?: any;
  /**
   * 
   * Default value: undefined
   */
  97?: any;
  /**
   * 
   * Default value: undefined
   */
  98?: any;
  /**
   * 
   * Default value: undefined
   */
  99?: any;
  /**
   * 
   * Default value: undefined
   */
  100?: any;
  /**
   * 
   * Default value: undefined
   */
  101?: any;
  /**
   * 
   * Default value: undefined
   */
  102?: any;
  /**
   * 
   * Default value: undefined
   */
  103?: any;
  /**
   * 
   * Default value: undefined
   */
  104?: any;
  /**
   * 
   * Default value: undefined
   */
  105?: any;
  /**
   * 
   * Default value: undefined
   */
  106?: any;
  /**
   * 
   * Default value: undefined
   */
  107?: any;
  /**
   * 
   * Default value: undefined
   */
  108?: any;
  /**
   * 
   * Default value: undefined
   */
  109?: any;
  /**
   * 
   * Default value: undefined
   */
  110?: any;
  /**
   * 
   * Default value: undefined
   */
  111?: any;
  /**
   * 
   * Default value: undefined
   */
  112?: any;
  /**
   * 
   * Default value: undefined
   */
  113?: any;
  /**
   * 
   * Default value: undefined
   */
  114?: any;
  /**
   * 
   * Default value: undefined
   */
  115?: any;
  /**
   * 
   * Default value: undefined
   */
  116?: any;
  /**
   * 
   * Default value: undefined
   */
  117?: any;
  /**
   * 
   * Default value: undefined
   */
  118?: any;
  /**
   * 
   * Default value: undefined
   */
  119?: any;
  /**
   * 
   * Default value: undefined
   */
  120?: any;
  /**
   * 
   * Default value: undefined
   */
  121?: any;
  /**
   * 
   * Default value: undefined
   */
  122?: any;
  /**
   * 
   * Default value: undefined
   */
  123?: any;
  /**
   * 
   * Default value: undefined
   */
  124?: any;
  /**
   * 
   * Default value: undefined
   */
  125?: any;
  /**
   * 
   * Default value: undefined
   */
  126?: any;
  /**
   * 
   * Default value: undefined
   */
  127?: any;
  /**
   * 
   * Default value: undefined
   */
  128?: any;
  /**
   * 
   * Default value: undefined
   */
  129?: any;
  /**
   * 
   * Default value: undefined
   */
  130?: any;
  /**
   * 
   * Default value: undefined
   */
  131?: any;
  /**
   * 
   * Default value: undefined
   */
  132?: any;
  /**
   * 
   * Default value: undefined
   */
  133?: any;
  /**
   * 
   * Default value: undefined
   */
  134?: any;
  /**
   * 
   * Default value: undefined
   */
  135?: any;
  /**
   * 
   * Default value: undefined
   */
  136?: any;
  /**
   * 
   * Default value: undefined
   */
  137?: any;
  /**
   * 
   * Default value: undefined
   */
  138?: any;
  /**
   * 
   * Default value: undefined
   */
  139?: any;
  /**
   * 
   * Default value: undefined
   */
  140?: any;
  /**
   * 
   * Default value: undefined
   */
  141?: any;
  /**
   * 
   * Default value: undefined
   */
  142?: any;
  /**
   * 
   * Default value: undefined
   */
  143?: any;
  /**
   * 
   * Default value: undefined
   */
  144?: any;
  /**
   * 
   * Default value: undefined
   */
  145?: any;
  /**
   * 
   * Default value: undefined
   */
  146?: any;
  /**
   * 
   * Default value: undefined
   */
  147?: any;
  /**
   * 
   * Default value: undefined
   */
  148?: any;
  /**
   * 
   * Default value: undefined
   */
  149?: any;
  /**
   * 
   * Default value: undefined
   */
  150?: any;
  /**
   * 
   * Default value: undefined
   */
  151?: any;
  /**
   * 
   * Default value: undefined
   */
  152?: any;
  /**
   * 
   * Default value: undefined
   */
  153?: any;
  /**
   * 
   * Default value: undefined
   */
  154?: any;
  /**
   * 
   * Default value: undefined
   */
  155?: any;
  /**
   * 
   * Default value: undefined
   */
  156?: any;
  /**
   * 
   * Default value: undefined
   */
  157?: any;
  /**
   * 
   * Default value: undefined
   */
  158?: any;
  /**
   * 
   * Default value: undefined
   */
  159?: any;
  /**
   * 
   * Default value: undefined
   */
  160?: any;
  /**
   * 
   * Default value: undefined
   */
  161?: any;
  /**
   * 
   * Default value: undefined
   */
  162?: any;
  /**
   * 
   * Default value: undefined
   */
  163?: any;
  /**
   * 
   * Default value: undefined
   */
  164?: any;
  /**
   * 
   * Default value: undefined
   */
  165?: any;
  /**
   * 
   * Default value: undefined
   */
  166?: any;
  /**
   * 
   * Default value: undefined
   */
  167?: any;
  /**
   * 
   * Default value: undefined
   */
  168?: any;
  /**
   * 
   * Default value: undefined
   */
  169?: any;
  /**
   * 
   * Default value: undefined
   */
  170?: any;
  /**
   * 
   * Default value: undefined
   */
  171?: any;
  /**
   * 
   * Default value: undefined
   */
  172?: any;
  /**
   * 
   * Default value: undefined
   */
  173?: any;
  /**
   * 
   * Default value: undefined
   */
  174?: any;
  /**
   * 
   * Default value: undefined
   */
  175?: any;
  /**
   * 
   * Default value: undefined
   */
  176?: any;
  /**
   * 
   * Default value: undefined
   */
  177?: any;
  /**
   * 
   * Default value: undefined
   */
  178?: any;
  /**
   * 
   * Default value: undefined
   */
  179?: any;
  /**
   * 
   * Default value: undefined
   */
  180?: any;
  /**
   * 
   * Default value: undefined
   */
  181?: any;
  /**
   * 
   * Default value: undefined
   */
  182?: any;
  /**
   * 
   * Default value: undefined
   */
  183?: any;
  /**
   * 
   * Default value: undefined
   */
  184?: any;
  /**
   * 
   * Default value: undefined
   */
  185?: any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-filter-builder"): FilterBuilder;
        querySelector(selectors: "smart-filter-builder"): FilterBuilder | null;
        querySelectorAll(selectors: "smart-filter-builder"): NodeListOf<FilterBuilder>;
        getElementsByTagName(qualifiedName: "smart-filter-builder"): HTMLCollectionOf<FilterBuilder>;
        getElementsByName(elementName: "smart-filter-builder"): NodeListOf<FilterBuilder>;
    }
}

