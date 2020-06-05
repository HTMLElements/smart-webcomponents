import  {BaseElement, Animation} from "./smart.element"

export interface BootstrapProgressBarProperties {
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
  styleMode?: BootstrapProgressBarStyleMode;
  /**
   * Sets or gets the value
   * Default value: 5
   */
  value?: number;
}
/**
 Defines a Progress component, which includes Material and Bootstrap styles
*/
export interface BootstrapProgressBar extends BaseElement, BootstrapProgressBarProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Change event is triggered when the value of the element is changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
}

declare global {
    interface Document {
        createElement(tagName: "bootstrap-progress-bar"): BootstrapProgressBar;
        querySelector(selectors: "bootstrap-progress-bar"): BootstrapProgressBar | null;
        querySelectorAll(selectors: "bootstrap-progress-bar"): NodeListOf<BootstrapProgressBar>;
        getElementsByTagName(qualifiedName: "bootstrap-progress-bar"): HTMLCollectionOf<BootstrapProgressBar>;
        getElementsByName(elementName: "bootstrap-progress-bar"): NodeListOf<BootstrapProgressBar>;
    }
}

/**Sets or gets the style mode of the button. */
export declare type BootstrapProgressBarStyleMode = 'primary' | 'secondary' | 'error' | 'warning' | 'success' | null | 'default';
