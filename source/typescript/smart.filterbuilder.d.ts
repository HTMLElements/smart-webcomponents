import  {BaseElement, Animation} from "./smart.element"

/**
 FilterBuilder allows you to dynamically build filters.
*/
export interface FilterBuilder extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Adds more operations, that can be used in the filter bilder's conditions structure.
   * Default value: 
   */
  customOperations?: {name: string, caption: string, icon: string}[];
  /**
   * Enables or disables the context menu.
   * Default value: false
   */
  disableContextMenu?: boolean;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Array with filtered fields and their settings.
   * Default value: null
   */
  fields?: any;
  /**
   * Sets or gets the format string of the editor of fields with type 'date'.
   * Default value: "dd-MMM-yy"
   */
  formatStringDate?: string;
  /**
   * Sets or gets the format string of the editor of fields with type 'datetime'.
   * Default value: "dd-MMM-yy HH:mm:ss"
   */
  formatStringDateTime?: string;
  /**
   * Sets hint in form of popup message.
   * Default value: "null"
   */
  hint?: string;
  /**
   * Defines icon's representatino as characters.
   * Default value: { '=': '=', '<>': '<>', '>': '>', '>=': '>=', '<': '<', '<=': '<=', 'startswith': 'a|bc', 'endswith': 'ab|c', 'contains': 'abc', 'notcontains': '!abc', 'isblank': 'o', 'isnotblank': '*'}
   */
  icons?: FilterBuilderIcons;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback, related to localization module. 
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines maximum number of allowed conditions in the element.
   * Default value: null
   */
  maxConditions?: number | null;
  /**
   * Defines maximum number of allowed conditions in group.
   * Default value: null
   */
  maxConditionsPerGroup?: number | null;
  /**
   * Defines maximum level of grouping in the FilterBuilder.
   * Default value: null
   */
  maxLevel?: number | null;
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
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * In restrictedMode set to true, adding of new groups and groups editing by user interaction are denied.
   * Default value: false
   */
  restrictedMode?: boolean;
  /**
   * Enables or disables the display of the icons.
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
   * The value is represented by multidimensional array. The array contains group operators and conditions. Each group can contain nested structures at multiple levels.
   * Default value: or
   */
  value?: string[];
  /**
   * Callback used to format the content of the value fields.
   * Default value: null
   */
  valueFormatFunction?: any;
  /**
   * Sets the placeholder text used in the condition's value box in case the value is not set.
   * Default value: "&lt;enter a value&gt;"
   */
  valuePlaceholder?: string;
  /** 
   * This event is triggered when the element's value is changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an editor is closed.
	* @param event. The custom event.    */
  onEditorClose?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an editor starts to close.
	* @param event. The custom event.    */
  onEditorClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an editor is opened.
	* @param event. The custom event.    */
  onEditorOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an editor starts to open.
	* @param event. The custom event.    */
  onEditorOpening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when some of the filterbuilder's building blocks is clicked.
	* @param event. The custom event.    */
  onItemClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the built-in menu is opened. If the <strong>disableContextMenu</strong> property is set to true this event is not fired.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the built-in menu starts to open. If the <strong>disableContextMenu</strong> property is set to true this event is not fired.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the built-in menu is closed. If the <strong>disableContextMenu</strong> property is set to true this event is not fired.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the built-in menu  starts to close. If the <strong>disableContextMenu</strong> property is set to true this event is not fired.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /**
   * Adds new condition in particular group. 
   * @param {string | HTMLElement} parentGroup. A string, representing the id of the item or an HTML Element referencing this condition.
   * @param {any[]} data. An array, representing condition. Condition's element's role is related to their position in the condition's array. At index 0 - field name, index 1 - condition's opertor, index 2 - condition's value.
   */
  addCondition(parentGroup: string | HTMLElement, data: any[]): void;
  /**
   * Adds new group in particular parent group.
   * @param {string | HTMLElement} parentGroup. A string, representing the id of the item or an HTML Element referencing this group.
   * @param {string} data. A string, representing the group operator.
   */
  addGroup(parentGroup: string | HTMLElement, data: string): void;
  /**
   * Removes condition.
   * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this condition.
   */
  removeCondition(item: string | HTMLElement): void;
  /**
   * Deletes group and all of  it's children
   * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this group.
   */
  removeGroup(item: string | HTMLElement): void;
  /**
   * Returns a string representation of the filter builder's value.
   * @param {boolean} useLabels?. Controls the way of string representation. In mode without labels the value object is stringified only.
   * @returns {string}
   */
  toString(useLabels?: boolean): string;
  /**
   * Updates condition.
   * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing targeted condition.
   * @param {any[]} data. An array, representing condition. Condition's element's role is related to their position in the condition's array. At index 0 - field name, index 1 - condition's opertor, index 2 - condition's value.
   */
  updateCondition(item: string | HTMLElement, data: any[]): void;
  /**
   * Updates group
   * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this group.
   * @param {string} data. A string, representing the group operator.
   */
  updateGroup(item: string | HTMLElement, data: string): void;
}

/**Defines icon's representatino as characters. */
export interface FilterBuilderIcons {

  /* Get a member by its name */
  [name: string]: any;
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

