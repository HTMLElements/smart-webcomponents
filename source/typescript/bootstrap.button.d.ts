import  {BaseElement, Animation} from "./smart.element"

export interface BootstrapButtonProperties {
  /**
   * Enables or disables the button. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets the inner HTML of the element.
   * Default value: """"
   */
  innerHTML: string;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: """"
   */
  name?: string;
  /**
   * Outlines the button. 
   * Default value: false
   */
  outlined?: boolean;
  /**
   * Sets or gets the style mode of the button.
   * Default value: primary
   */
  styleMode?: BootstrapButtonStyleMode;
  /**
   * Sets or gets the size mode of the element.
   * Default value: ""
   */
  sizeMode?: string;
  /**
   * Sets or gets the type of the button.
   * Default value: "Reset"
   */
  type?: string;
  /**
   * Sets or gets the button's value. 
   * Default value: ""
   */
  value?: string;
}
/**
 Defines a Button component, which includes Material and Bootstrap styles
*/
export interface BootstrapButton extends BaseElement, BootstrapButtonProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Click event.
	* @param event. The custom event.    */
  onClick: ((this: any, ev: Event) => any) | null;
}

declare global {
    interface Document {
        createElement(tagName: "bootstrap-button"): BootstrapButton;
        querySelector(selectors: "bootstrap-button"): BootstrapButton | null;
        querySelectorAll(selectors: "bootstrap-button"): NodeListOf<BootstrapButton>;
        getElementsByTagName(qualifiedName: "bootstrap-button"): HTMLCollectionOf<BootstrapButton>;
        getElementsByName(elementName: "bootstrap-button"): NodeListOf<BootstrapButton>;
    }
}

/**Sets or gets the style mode of the button. */
export declare type BootstrapButtonStyleMode = 'primary' | 'secondary' | 'error' | 'warning' | 'success' | null | 'default';
