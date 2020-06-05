import  {BaseElement, Animation} from "./smart.element"

export interface BootstrapInputGroupProperties {
  /**
   * Sets the content before the input.
   * Default value: """"
   */
  contentBefore?: string;
  /**
   * Sets the content after the input.
   * Default value: """"
   */
  contentAfter?: string;
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
   * Enables or disables the wrapping. 
   * Default value: false
   */
  noWrap?: boolean;
  /**
   * Sets or gets the style mode of the input group.
   * Default value: primary
   */
  styleMode?: BootstrapInputGroupStyleMode;
  /**
   * Sets or gets the size mode of the element.
   * Default value: ""
   */
  sizeMode?: string;
  /**
   * Sets or gets the type of the input.
   * Default value: "text"
   */
  type?: string;
  /**
   * Sets the placeholder of the input.
   * Default value: """"
   */
  placeholder?: string;
  /**
   * Sets or gets the button's value. 
   * Default value: ""
   */
  value?: string;
}
/**
 Defines an InputGroup component, which includes Material and Bootstrap styles
*/
export interface BootstrapInputGroup extends BaseElement, BootstrapInputGroupProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Click event.
	* @param event. The custom event.    */
  onClick: ((this: any, ev: Event) => any) | null;
}

declare global {
    interface Document {
        createElement(tagName: "bootstrap-input-group"): BootstrapInputGroup;
        querySelector(selectors: "bootstrap-input-group"): BootstrapInputGroup | null;
        querySelectorAll(selectors: "bootstrap-input-group"): NodeListOf<BootstrapInputGroup>;
        getElementsByTagName(qualifiedName: "bootstrap-input-group"): HTMLCollectionOf<BootstrapInputGroup>;
        getElementsByName(elementName: "bootstrap-input-group"): NodeListOf<BootstrapInputGroup>;
    }
}

/**Sets or gets the style mode of the input group. */
export declare type BootstrapInputGroupStyleMode = 'primary' | 'secondary' | 'error' | 'warning' | 'success' | null | 'default';
