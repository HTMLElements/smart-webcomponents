import  {BaseElement, Animation} from "./smart.element"

export interface BootstrapCheckBoxProperties {
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
  styleMode?: BootstrapCheckBoxStyleMode;
}
/**
 Defines a CheckBox component, which includes Material and Bootstrap styles
*/
export interface BootstrapCheckBox extends BaseElement, BootstrapCheckBoxProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Change event is triggered when the value of the checkbox is changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Toggles the checkbox
   */
  toggle(): void;
}

declare global {
    interface Document {
        createElement(tagName: "bootstrap-check-box"): BootstrapCheckBox;
        querySelector(selectors: "bootstrap-check-box"): BootstrapCheckBox | null;
        querySelectorAll(selectors: "bootstrap-check-box"): NodeListOf<BootstrapCheckBox>;
        getElementsByTagName(qualifiedName: "bootstrap-check-box"): HTMLCollectionOf<BootstrapCheckBox>;
        getElementsByName(elementName: "bootstrap-check-box"): NodeListOf<BootstrapCheckBox>;
    }
}

/**Sets or gets the style mode of the element. */
export declare type BootstrapCheckBoxStyleMode = 'primary' | 'secondary' | 'error' | 'warning' | 'success' | null | 'default';
