import  {BaseElement, Animation} from "./smart.element"

export interface BootstrapModalProperties {
  /**
   * Clicking on the modal “backdrop” will automatically close the modal. 
   * Default value: default
   */
  backdrop?: BootstrapModalBackdrop;
  /**
   * Sets or gets whether the modal is centered. 
   * Default value: false
   */
  centered?: boolean;
  /**
   * Enables or disables the element. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Gets or sets whether the modal is opened. 
   * Default value: false
   */
  opened?: boolean;
  /**
   * Gets or sets whether the modal is scrollable. 
   * Default value: false
   */
  scrollable?: boolean;
  /**
   * Sets or gets the style mode of the element.
   * Default value: primary
   */
  styleMode?: BootstrapModalStyleMode;
  /**
   * Sets or gets the size mode of the element.
   * Default value: ""
   */
  sizeMode?: string;
}
/**
 Modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content
*/
export interface BootstrapModal extends BaseElement, BootstrapModalProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Show event is triggered when the modal is going to show.
	* @param event. The custom event.    */
  onShow?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Hide event is triggered when the modal is going to be hidden.
	* @param event. The custom event.    */
  onHide?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Toggles the modal visibility
   */
  toggle(): void;
  /**
   * Shows the modal
   */
  show(): void;
  /**
   * Hides the modal
   */
  hide(): void;
}

declare global {
    interface Document {
        createElement(tagName: "bootstrap-modal"): BootstrapModal;
        querySelector(selectors: "bootstrap-modal"): BootstrapModal | null;
        querySelectorAll(selectors: "bootstrap-modal"): NodeListOf<BootstrapModal>;
        getElementsByTagName(qualifiedName: "bootstrap-modal"): HTMLCollectionOf<BootstrapModal>;
        getElementsByName(elementName: "bootstrap-modal"): NodeListOf<BootstrapModal>;
    }
}

/**Clicking on the modal “backdrop” will automatically close the modal.  */
export declare type BootstrapModalBackdrop = 'static' | 'default' | 'none';
/**Sets or gets the style mode of the element. */
export declare type BootstrapModalStyleMode = 'primary' | 'secondary' | 'error' | 'warning' | 'success' | null | 'default';
