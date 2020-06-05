import  {BaseElement, Animation} from "./smart.element"

export interface BootstrapToggleButtonProperties {
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
   * Sets or gets the style mode of the element.
   * Default value: primary
   */
  styleMode?: BootstrapToggleButtonStyleMode;
}
/**
 Defines a Toggle Button component, which includes Material and Bootstrap styles
*/
export interface BootstrapToggleButton extends BaseElement, BootstrapToggleButtonProperties {

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
        createElement(tagName: "bootstrap-toggle-button"): BootstrapToggleButton;
        querySelector(selectors: "bootstrap-toggle-button"): BootstrapToggleButton | null;
        querySelectorAll(selectors: "bootstrap-toggle-button"): NodeListOf<BootstrapToggleButton>;
        getElementsByTagName(qualifiedName: "bootstrap-toggle-button"): HTMLCollectionOf<BootstrapToggleButton>;
        getElementsByName(elementName: "bootstrap-toggle-button"): NodeListOf<BootstrapToggleButton>;
    }
}

/**Sets or gets the style mode of the element. */
export declare type BootstrapToggleButtonStyleMode = 'primary' | 'secondary' | 'error' | 'warning' | 'success' | null | 'default';
