import  {BaseElement, Animation} from "./smart.element"

export interface BootstrapSplitButtonProperties {
  /**
   * Enables or disables the element. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the drop down position of the element. 
   * Default value: false
   */
  dropDownPosition?: BootstrapSplitButtonDropDownPosition;
  /**
   * Sets or gets the Label of the element.
   * Default value: """"
   */
  label?: string;
  /**
   * Sets or gets the Label type of the element.
   * Default value: ""
   */
  labelType?: BootstrapSplitButtonLabelType;
  /**
   * Sets or gets the Href of the element.
   * Default value: "#"
   */
  href?: string;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: """"
   */
  name?: string;
  /**
   * Gets or sets whether the dropdown is opened. 
   * Default value: false
   */
  opened?: boolean;
  /**
   * Gets or sets whether the dropdown is outlined. 
   * Default value: false
   */
  outlined?: boolean;
  /**
   * Sets or gets the style mode of the element.
   * Default value: primary
   */
  styleMode?: BootstrapSplitButtonStyleMode;
  /**
   * Sets or gets the size mode of the element.
   * Default value: ""
   */
  sizeMode?: string;
}
/**
 Defines a Split Button with DropDown component, which includes Material and Bootstrap styles
*/
export interface BootstrapSplitButton extends BaseElement, BootstrapSplitButtonProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Show event is triggered when the dropdown is going to show.
	* @param event. The custom event.    */
  onShow?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Shown event is triggered when the dropdown is shown.
	* @param event. The custom event.    */
  onShown?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Hide event is triggered when the dropdown is going to be hidden.
	* @param event. The custom event.    */
  onHide?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Hidden event is triggered when the dropdown is hidden
	* @param event. The custom event.    */
  onHidden?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Toggles the dropdown visibility
   */
  toggle(): void;
  /**
   * Shows the dropdown
   */
  show(): void;
  /**
   * Hides the dropdown
   */
  hide(): void;
}

declare global {
    interface Document {
        createElement(tagName: "bootstrap-split-button"): BootstrapSplitButton;
        querySelector(selectors: "bootstrap-split-button"): BootstrapSplitButton | null;
        querySelectorAll(selectors: "bootstrap-split-button"): NodeListOf<BootstrapSplitButton>;
        getElementsByTagName(qualifiedName: "bootstrap-split-button"): HTMLCollectionOf<BootstrapSplitButton>;
        getElementsByName(elementName: "bootstrap-split-button"): NodeListOf<BootstrapSplitButton>;
    }
}

/**Sets or gets the drop down position of the element.  */
export declare type BootstrapSplitButtonDropDownPosition = 'auto' | 'top' | 'bottom' | 'left' | 'right' | 'custom';
/**Sets or gets the Label type of the element. */
export declare type BootstrapSplitButtonLabelType = 'a' | 'button';
/**Sets or gets the style mode of the element. */
export declare type BootstrapSplitButtonStyleMode = 'primary' | 'secondary' | 'error' | 'warning' | 'success' | null | 'default';
