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
   * The type of validation the rule makes.
   * Default value: required
   */
  type?: ValidatorRuleType | string;
  /**
   * A callback function to validate the input's value by when the rule's type is 'custom'.
   * Default value: 
   */
  validationCallback?: { (inputElement: any): boolean };
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

/**The type of validation the rule makes. */
export declare type ValidatorRuleType = 'compare' | 'custom' | 'email' | 'notNumber' | 'numeric' | 'pattern' | 'phone' | 'range' | 'required' | 'startWithLetter' | 'stringLength' | 'zipCode';
