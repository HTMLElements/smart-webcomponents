import  {BaseElement, Animation} from "./smart.element"

export interface BootstrapTabsProperties {
  /**
   * Sets the tabs alignment
   * Default value: 
   */
  alignment?: BootstrapTabsAlignment;
  /**
   * Enables or disables the tabs. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets the tabs fill
   * Default value: false
   */
  fill?: boolean;
  /**
   * Sets the tabs justified
   * Default value: false
   */
  justified?: boolean;
  /**
   * Sets or gets the tab type.
   * Default value: ul
   */
  listType?: BootstrapTabsListType;
  /**
   * Sets or gets the style mode of the tabs.
   * Default value: primary
   */
  styleMode?: BootstrapTabsStyleMode;
  /**
   * Sets or gets the size mode of the element.
   * Default value: ""
   */
  sizeMode?: string;
  /**
   * Sets or gets the tab type .
   * Default value: tabs
   */
  tabType?: BootstrapTabsTabType;
}
/**
 Defines a Tabs component, which includes Material and Bootstrap styles
*/
export interface BootstrapTabs extends BaseElement, BootstrapTabsProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Show event.
	* @param event. The custom event.    */
  onShow?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Shows an item
   * @param {HTMLElement} item. The tab item to be shown.
   */
  show(item: HTMLElement): void;
}

declare global {
    interface Document {
        createElement(tagName: "bootstrap-tabs"): BootstrapTabs;
        querySelector(selectors: "bootstrap-tabs"): BootstrapTabs | null;
        querySelectorAll(selectors: "bootstrap-tabs"): NodeListOf<BootstrapTabs>;
        getElementsByTagName(qualifiedName: "bootstrap-tabs"): HTMLCollectionOf<BootstrapTabs>;
        getElementsByName(elementName: "bootstrap-tabs"): NodeListOf<BootstrapTabs>;
    }
}

/**Sets the tabs alignment */
export declare type BootstrapTabsAlignment = null | 'center' | 'end' | 'vertical';
/**Sets or gets the tab type. */
export declare type BootstrapTabsListType = 'ul' | 'ol' | 'nav';
/**Sets or gets the style mode of the tabs. */
export declare type BootstrapTabsStyleMode = 'primary' | 'secondary' | 'error' | 'warning' | 'success' | null | 'default';
/**Sets or gets the tab type . */
export declare type BootstrapTabsTabType = 'tabs' | 'nav' | 'pills';
