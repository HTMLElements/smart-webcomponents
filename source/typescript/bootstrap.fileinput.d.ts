import  {BaseElement, Animation} from "./smart.element"

export interface BootstrapFileInputProperties {
  /**
   * Enables or disables the element. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: """"
   */
  name?: string;
  /**
   * Gets or sets the placeholder of the element. 
   * Default value: "false"
   */
  placeholder?: string;
  /**
   * Sets or gets the style mode of the element.
   * Default value: primary
   */
  styleMode?: BootstrapFileInputStyleMode;
  /**
   * Gets or sets the value of the element. 
   * Default value: "false"
   */
  value?: string;
}
/**
 Defines a Fileinput component, which includes Material and Bootstrap styles
*/
export interface BootstrapFileInput extends BaseElement, BootstrapFileInputProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Change event is triggered when the value of the element is changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
}

declare global {
    interface Document {
        createElement(tagName: "bootstrap-file-input"): BootstrapFileInput;
        querySelector(selectors: "bootstrap-file-input"): BootstrapFileInput | null;
        querySelectorAll(selectors: "bootstrap-file-input"): NodeListOf<BootstrapFileInput>;
        getElementsByTagName(qualifiedName: "bootstrap-file-input"): HTMLCollectionOf<BootstrapFileInput>;
        getElementsByName(elementName: "bootstrap-file-input"): NodeListOf<BootstrapFileInput>;
    }
}

/**Sets or gets the style mode of the element. */
export declare type BootstrapFileInputStyleMode = 'primary' | 'secondary' | 'error' | 'warning' | 'success' | null | 'default';
