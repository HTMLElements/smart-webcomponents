import  {BaseElement, Animation} from "./smart.element"

export interface ValidatorProperties {
  /**
   * 
   * Default value: null
   */
  rules?: ValidatorRule[];
  /**
   * Specifies a valid CSS selector that identifies the HTML element on the page which will serve as the container for displaying validation error messages. This selector determines where the error messages will appear within the user interface.
   * Default value: ""
   */
  validationSummarySelector?: string;
}
/**
 Validator plug-in is used to validate form elements.
*/
export interface Validator extends BaseElement, ValidatorProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Removes all error messages from the current context, ensuring that no error notifications are displayed to the user. This action resets the error state, allowing for a clean user experience without residual error indicators.
   */
  reset(): void;
  /**
   * Displays the drop-down menu, making its list of options visible to the user.
   * @param {Function} result?. A callback function to call when validating inputs.
   */
  validate(result?: Function): void;
  /**
   * Validates the inputs and always returns a Promise resolving to whether they are all valid, whether or not any rule is asynchronous. Use this when the rules include a <em>'remote'</em> rule or a <strong>validationCallback</strong> that returns a Promise.
   * @returns {any}
   */
  validateAsync(): any;
}

export interface ValidatorRule {
  /**
   * A comma-separated list of events to validate the input(s) on.
   * Default value: ""
   */
  action?: string;
  /**
   * A callback function whose result to compare to the input value by the comparisonType in order to show the validation message. Applicable when type is 'compare'.
   * Default value: 
   */
  comparisonTarget?: { (inputElement: any, rule: ValidatorRule): any };
  /**
   * An operator to compare the input value by with the result of comparisonTarget in order to show the validation message. Applicable when type is 'compare'.
   * Default value: "=="
   */
  comparisonType?: string;
  /**
   * A valid CSS selector of the input(s) to validate.
   * Default value: ""
   */
  input?: string;
  /**
   * The max value of an input when the rule type is 'stringLength' or the max number of characters in the input's value when the rule type is 'range'.
   * Default value: 
   */
  max?: number | Date;
  /**
   * A message to display on focus of the input and in the validation summary if the input's value is not valid.
   * Default value: ""
   */
  message?: string;
  /**
   * The min value of an input when the rule type is 'stringLength' or the min number of characters in the input's value when the rule type is 'range'.
   * Default value: 
   */
  min?: number | Date;
  /**
   * A regular expression the input's value must match when the rule type is 'pattern'.
   * Default value: 
   */
  pattern?: RegExp;
  /**
   * The type of validation the rule makes. Set to 'remote' to validate the value against a server endpoint defined by url.
   * Default value: required
   */
  type?: ValidatorRuleType | string;
  /**
   * A callback function to validate the input's value by when the rule's type is 'custom'. The callback may also return a Promise resolving to a boolean, in which case the input is marked pending until the Promise settles.
   * Default value: 
   */
  validationCallback?: { (inputElement: any): boolean };
  /**
   * The endpoint that validates the input value. Required when type is 'remote'. The value is sent to this URL and the response decides whether the input is valid.
   * Default value: ""
   */
  url?: string;
  /**
   * The HTTP method used by a remote rule. 'POST' sends a JSON body, 'GET' appends the value as a query parameter. Applicable when type is 'remote'.
   * Default value: "POST"
   */
  method?: string;
  /**
   * The name of the field or query parameter that carries the input value in a remote request. Applicable when type is 'remote'.
   * Default value: "value"
   */
  parameterName?: string;
  /**
   * Additional request headers sent with a remote validation request, for example an authorization token. Applicable when type is 'remote'.
   * Default value: 
   */
  headers?: any;
  /**
   * The credentials mode of a remote validation request, for example 'include' to send cookies cross-origin. Applicable when type is 'remote'.
   * Default value: ""
   */
  credentials?: string;
  /**
   * How long to wait, in milliseconds, after the last keystroke before sending a remote validation request. Requests already in flight are aborted, so typing quickly produces a single request. Applicable when type is 'remote'.
   * Default value: 400
   */
  debounce?: number;
  /**
   * A callback that builds the request body of a remote rule from the input value, replacing the default payload. Applicable when type is 'remote'.
   * Default value: 
   */
  requestMapper?: { (value: any, inputElement: any, rule: ValidatorRule): any };
  /**
   * A callback that turns the server response into a verdict. Return a boolean, or an object with a valid member and an optional message that replaces the rule message. Without it, a response is valid when it is true or when its valid, isValid or ok member is truthy. Applicable when type is 'remote'.
   * Default value: 
   */
  responseMapper?: { (response: any, value: any): any };
  /**
   * The message shown when a remote validation request itself fails, for example because the server is unreachable. Such a request is treated as invalid so that an unverified value is not silently accepted. Applicable when type is 'remote'.
   * Default value: ""
   */
  errorMessage?: string;
  /**
   * A callback invoked when a remote validation request fails, useful for logging or for showing a connectivity notice. Applicable when type is 'remote'.
   * Default value: 
   */
  onError?: { (error: any, inputElement: any, rule: ValidatorRule): void };
}

declare global {
    interface Document {
        createElement(tagName: "jqxValidator"): Validator;
        querySelector(selectors: "jqxValidator"): Validator | null;
        querySelectorAll(selectors: "jqxValidator"): NodeListOf<Validator>;
        getElementsByTagName(qualifiedName: "jqxValidator"): HTMLCollectionOf<Validator>;
        getElementsByName(elementName: "jqxValidator"): NodeListOf<Validator>;
    }
}

/**The type of validation the rule makes. Set to 'remote' to validate the value against a server endpoint defined by url. */
export declare type ValidatorRuleType = 'compare' | 'custom' | 'email' | 'notNumber' | 'numeric' | 'pattern' | 'phone' | 'range' | 'remote' | 'required' | 'startWithLetter' | 'stringLength' | 'zipCode';
