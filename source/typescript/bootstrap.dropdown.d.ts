import  {BaseElement, Animation} from "./smart.element"

export interface BootstrapDropDownProperties {
  /**
   * Enables or disables the element. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the drop down position of the element. 
   * Default value: false
   */
  dropDownPosition?: BootstrapDropDownDropDownPosition;
  /**
   * Sets or gets the Label of the element.
   * Default value: """"
   */
  label?: string;
  /**
   * Sets or gets the Label type of the element.
   * Default value: ""
   */
  labelType?: BootstrapDropDownLabelType;
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
  styleMode?: BootstrapDropDownStyleMode;
  /**
   * Sets or gets the size mode of the element.
   * Default value: ""
   */
  sizeMode?: string;
}
/**
 Defines a DropDown component, which includes Material and Bootstrap styles
*/
export interface BootstrapDropDown extends BaseElement, BootstrapDropDownProperties {

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
        createElement(tagName: "bootstrap-drop-down"): BootstrapDropDown;
        querySelector(selectors: "bootstrap-drop-down"): BootstrapDropDown | null;
        querySelectorAll(selectors: "bootstrap-drop-down"): NodeListOf<BootstrapDropDown>;
        getElementsByTagName(qualifiedName: "bootstrap-drop-down"): HTMLCollectionOf<BootstrapDropDown>;
        getElementsByName(elementName: "bootstrap-drop-down"): NodeListOf<BootstrapDropDown>;
    }
}

/**Sets or gets the drop down position of the element.  */
export declare type BootstrapDropDownDropDownPosition = 'auto' | 'top' | 'bottom' | 'left' | 'right' | 'custom';
/**Sets or gets the Label type of the element. */
export declare type BootstrapDropDownLabelType = 'a' | 'button';
/**Sets or gets the style mode of the element. */
export declare type BootstrapDropDownStyleMode = 'primary' | 'secondary' | 'error' | 'warning' | 'success' | null | 'default';
