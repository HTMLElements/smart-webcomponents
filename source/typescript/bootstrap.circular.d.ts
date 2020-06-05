import  {BaseElement, Animation} from "./smart.element"

export interface BootstrapCircularProperties {
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
   * Default value: 10
   */
  max?: number;
  /**
   * Sets whether stripes are displayed in the progress. 
   * Default value: false
   */
  striped?: boolean;
  /**
   * Sets or gets the style mode of the button.
   * Default value: primary
   */
  styleMode?: BootstrapCircularStyleMode;
  /**
   * Sets or gets the value
   * Default value: 5
   */
  value?: number;
}
/**
 Defines a Circular Progress component, which includes Material and Bootstrap styles
*/
export interface BootstrapCircular extends BaseElement, BootstrapCircularProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Change event is triggered when the value of the element is changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
}

declare global {
    interface Document {
        createElement(tagName: "bootstrap-circular"): BootstrapCircular;
        querySelector(selectors: "bootstrap-circular"): BootstrapCircular | null;
        querySelectorAll(selectors: "bootstrap-circular"): NodeListOf<BootstrapCircular>;
        getElementsByTagName(qualifiedName: "bootstrap-circular"): HTMLCollectionOf<BootstrapCircular>;
        getElementsByName(elementName: "bootstrap-circular"): NodeListOf<BootstrapCircular>;
    }
}

/**Sets or gets the style mode of the button. */
export declare type BootstrapCircularStyleMode = 'primary' | 'secondary' | 'error' | 'warning' | 'success' | null | 'default';
