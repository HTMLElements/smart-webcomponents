import  {BaseElement, Animation} from "./smart.element"

export interface BootstrapRangeProperties {
  /**
   * Enables or disables the element. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets the name of the element. 
   * Default value: ""
   */
  name?: string;
  /**
   * Sets or gets the min value
   * Default value: 0
   */
  min?: number;
  /**
   * Sets or gets the max value
   * Default value: 100
   */
  max?: number;
  /**
   * Sets or gets the value
   * Default value: 100
   */
  value?: number;
}
/**
 Defines a Range component, which includes Material and Bootstrap styles
*/
export interface BootstrapRange extends BaseElement, BootstrapRangeProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Change event is triggered when the value of the element is changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
}

declare global {
    interface Document {
        createElement(tagName: "bootstrap-range"): BootstrapRange;
        querySelector(selectors: "bootstrap-range"): BootstrapRange | null;
        querySelectorAll(selectors: "bootstrap-range"): NodeListOf<BootstrapRange>;
        getElementsByTagName(qualifiedName: "bootstrap-range"): HTMLCollectionOf<BootstrapRange>;
        getElementsByName(elementName: "bootstrap-range"): NodeListOf<BootstrapRange>;
    }
}

