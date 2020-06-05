import  {BaseElement, Animation} from "./smart.element"

export interface BootstrapRadioButtonProperties {
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
  styleMode?: BootstrapRadioButtonStyleMode;
}
/**
 Defines a Radio Button component, which includes Material and Bootstrap styles
*/
export interface BootstrapRadioButton extends BaseElement, BootstrapRadioButtonProperties {

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
        createElement(tagName: "bootstrap-radio-button"): BootstrapRadioButton;
        querySelector(selectors: "bootstrap-radio-button"): BootstrapRadioButton | null;
        querySelectorAll(selectors: "bootstrap-radio-button"): NodeListOf<BootstrapRadioButton>;
        getElementsByTagName(qualifiedName: "bootstrap-radio-button"): HTMLCollectionOf<BootstrapRadioButton>;
        getElementsByName(elementName: "bootstrap-radio-button"): NodeListOf<BootstrapRadioButton>;
    }
}

/**Sets or gets the style mode of the element. */
export declare type BootstrapRadioButtonStyleMode = 'primary' | 'secondary' | 'error' | 'warning' | 'success' | null | 'default';
