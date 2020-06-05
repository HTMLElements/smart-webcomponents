import  {BaseElement, Animation} from "./smart.element"

export interface BootstrapSwitchButtonProperties {
  /**
   * Gets or sets the checked state of the element. 
   * Default value: false
   */
  checked?: boolean;
  /**
   * Enables or disables the element. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Gets or sets whether the element is in indeterminate state. 
   * Default value: false
   */
  indeterminate?: boolean;
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
   * Gets or sets whether the element is required. 
   * Default value: false
   */
  required?: boolean;
  /**
   * Sets or gets the style mode of the element.
   * Default value: primary
   */
  styleMode?: BootstrapSwitchButtonStyleMode;
}
/**
 Defines a Switch Button component, which includes Material and Bootstrap styles
*/
export interface BootstrapSwitchButton extends BaseElement, BootstrapSwitchButtonProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Change event is triggered when the value of the element is changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Toggles the element
   */
  toggle(): void;
}

declare global {
    interface Document {
        createElement(tagName: "bootstrap-switch-button"): BootstrapSwitchButton;
        querySelector(selectors: "bootstrap-switch-button"): BootstrapSwitchButton | null;
        querySelectorAll(selectors: "bootstrap-switch-button"): NodeListOf<BootstrapSwitchButton>;
        getElementsByTagName(qualifiedName: "bootstrap-switch-button"): HTMLCollectionOf<BootstrapSwitchButton>;
        getElementsByName(elementName: "bootstrap-switch-button"): NodeListOf<BootstrapSwitchButton>;
    }
}

/**Sets or gets the style mode of the element. */
export declare type BootstrapSwitchButtonStyleMode = 'primary' | 'secondary' | 'error' | 'warning' | 'success' | null | 'default';
