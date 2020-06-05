import  {BaseElement, Animation} from "./smart.element"

export interface BootstrapInputProperties {
  /**
   * Enables or disables the element. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Gets or sets whether the element is filled. 
   * Default value: false
   */
  filled?: boolean;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: """"
   */
  name?: string;
  /**
   * Gets or sets whether the element is outlined. 
   * Default value: false
   */
  outlined?: boolean;
  /**
   * Gets or sets the placeholder of the element. 
   * Default value: "false"
   */
  placeholder?: string;
  /**
   * Gets or sets whether the element is required. 
   * Default value: false
   */
  required?: boolean;
  /**
   * Sets or gets the style mode of the element.
   * Default value: primary
   */
  styleMode?: BootstrapInputStyleMode;
  /**
   * Gets or sets the value of the element. 
   * Default value: "false"
   */
  value?: string;
}
/**
 Defines an Input component, which includes Material and Bootstrap styles
*/
export interface BootstrapInput extends BaseElement, BootstrapInputProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Change event is triggered when the value of the element is changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
}

declare global {
    interface Document {
        createElement(tagName: "bootstrap-input"): BootstrapInput;
        querySelector(selectors: "bootstrap-input"): BootstrapInput | null;
        querySelectorAll(selectors: "bootstrap-input"): NodeListOf<BootstrapInput>;
        getElementsByTagName(qualifiedName: "bootstrap-input"): HTMLCollectionOf<BootstrapInput>;
        getElementsByName(elementName: "bootstrap-input"): NodeListOf<BootstrapInput>;
    }
}

/**Sets or gets the style mode of the element. */
export declare type BootstrapInputStyleMode = 'primary' | 'secondary' | 'error' | 'warning' | 'success' | null | 'default';
