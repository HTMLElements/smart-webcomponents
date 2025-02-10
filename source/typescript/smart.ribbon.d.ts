import  {BaseElement, Animation} from "./smart.element"

export interface RibbonProperties {
  /**
   * Determines whether the ribbon is collapsible.
   * Default value: false
   */
  collapsible?: any;
  /**
   * Determines the tab items of the ribbon.
   * Default value: 
   */
  dataSource?: any;
  /**
   * Sets or gets the value indicating whether the element is disabled.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines the file menu options of the ribbon.
   * Default value: undefined
   */
  fileMenu?: RibbonFileMenu;
  /**
   * Sets or gets the unlockKey which unlocks the product.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Determines the locale of the ribbon.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Determines the messages of the ribbon
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the selected tab.
   * Default value: 0
   */
  selectedTab?: any;
}
/**
 Ribbon is a navigation control that allows you to organize your application's commands in a tabbed interface.
*/
export interface Ribbon extends BaseElement, RibbonProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the ribbon is collapsed.
	* @param event. The custom event.    */
  onCollapse?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the ribbon is collapsing. The event can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onCollapsing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the dialog launcher is clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(groupLabel, groupId)
   *  groupLabel - The label of the dialog launcher's ribbon group.
   *  groupId - The id of the dialog launcher's ribbon group.
   */
  onDialogLauncherClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the ribbon is expanded.
	* @param event. The custom event.    */
  onExpand?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the ribbon is expanding. The event can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onExpanding?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the file menu button is clicked.
	* @param event. The custom event.    */
  onFileButtonClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the file menu is opened.
	* @param event. The custom event.    */
  onFileMenuOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the file menu is closed.
	* @param event. The custom event.    */
  onFileMenuClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a file menu item is clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(item)
   *  item - The file menu item.
   */
  onFileMenuItemClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the tab selection is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldIndex, index)
   *  oldIndex - The previous tab index.
   *  index - The new index of the selected tab.
   */
  onSelect?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the tab selection is changing. The event can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldIndex, index)
   *  oldIndex - The previous tab index.
   *  index - The new index of the selected tab.
   */
  onSelecting?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Adds a new ribbon tab to the ribbon. The tab can be added as an object, HTMLElement or id to an HTMLElement.
   * @param {any} tab. The ribbon tab to be added.
   */
  addTab(tab: any): void;
  /**
   * Adds a new group to a ribbon tab. The group can be added as an object, HTMLElement or id to an HTMLElement.
   * @param {any} tab. The id, index or HTMLElement  of the parent ribbon tab.
   * @param {any} group. The ribbon group to be added.
   */
  addGroup(tab: any, group: any): void;
  /**
   * Adds a new ribbon item to a ribbon group. The item can be added as an object, HTMLElement or id to an HTMLElement.
   * @param {string | number | HTMLElement} tab. The id, index or HTMLElement  of the parent ribbon tab.
   * @param {string | HTMLElement} group. The id or HTMLElement of the parent ribbon group.
   * @param {any} item. The ribbon item to be added.
   */
  addItem(tab: string | number | HTMLElement, group: string | HTMLElement, item: any): void;
  /**
   * Collapses the ribbon.
   */
  collapse(): void;
  /**
   * Expands the ribbon.
   */
  expand(): void;
  /**
   * Removes a ribbon tab from the ribbon.
   * @param {string | number} ribbonTab. The id or index of the ribbon tab to be removed.
   */
  removeTab(ribbonTab: string | number): void;
  /**
   * Removes a ribbon group from a ribbon tab.
   * @param {string | number} ribbonTabIndex?. The id or index of the parent ribbon tab.
   * @param {string | number} ribbonGroup?. The id or index of the ribbon group to be removed.
   */
  removeGroup(ribbonTabIndex?: string | number, ribbonGroup?: string | number): void;
  /**
   * Removes a ribbon item from a ribbon group.
   * @param {string | number} ribbonTabIndex?. The id or index of the parent ribbon tab.
   * @param {string | number} ribbonGroup?. The id or index of the parent ribbon group.
   * @param {string | number} ribbonItem?. The id or index of the ribbon item to be removed.
   */
  removeItem(ribbonTabIndex?: string | number, ribbonGroup?: string | number, ribbonItem?: string | number): void;
  /**
   * Selects a ribbon tab.
   * @param {string | number} ribbonTabIndex. The index of the ribbon tab to be selected.
   */
  selectTab(ribbonTabIndex: string | number): void;
}

/**Determines the file menu options of the ribbon. */
export interface RibbonFileMenu {
  /**
   * Determines whether the file button is enabled.
   * Default value: true
   */
  enabled?: boolean;
  /**
   * Determines the data source that will be loaded to the FileMenu.
   * Default value: 
   */
  items?: any;
  /**
   * Determines the position of the file menu.
   * Default value: left
   */
  position?: RibbonFileMenuPosition | string;
  /**
   * Determines the label of the file menu.
   * Default value: "File"
   */
  label?: string;
  /**
   * Determines the tooltip of the file menu.
   * Default value: ""
   */
  tooltip?: string;
  /**
   * Determines the template of the file menu. Accepts HTMLTemplateElement, an id of an HTMLTemplateElement or a Function.
   * Default value: ""
   */
  template?: string;
  /**
   * Determines the type of the file menu.
   * Default value: dropDown
   */
  type?: RibbonFileMenuType | string;
  /**
   * Determines the icon of the file menu.
   * Default value: ""
   */
  icon?: string;
}

declare global {
    interface Document {
        createElement(tagName: "smart-ribbon"): Ribbon;
        querySelector(selectors: "smart-ribbon"): Ribbon | null;
        querySelectorAll(selectors: "smart-ribbon"): NodeListOf<Ribbon>;
        getElementsByTagName(qualifiedName: "smart-ribbon"): HTMLCollectionOf<Ribbon>;
        getElementsByName(elementName: "smart-ribbon"): NodeListOf<Ribbon>;
    }
}

/**Determines the position of the file menu. */
export declare type RibbonFileMenuPosition = 'left' | 'right';
/**Determines the type of the file menu. */
export declare type RibbonFileMenuType = 'dropDown' | 'button';
export interface RibbonGroupProperties {
  /**
   * Determines the label of the ribbon group.
   * Default value: ""
   */
  label?: string;
  /**
   * Determines the icon of the ribbon group.
   * Default value: ""
   */
  icon?: string;
  /**
   * Determines the class of the ribbon group.
   * Default value: ""
   */
  cssClass?: string;
  /**
   * Determines the ribbon items of the ribbon group.
   * Default value: 
   */
  ribbonItems?: any;
  /**
   * Determines the direction of the ribbon group.
   * Default value: horizontal
   */
  direction?: RibbonGroupDirection | string;
  /**
   * Determines the settings of the dialog launcher of the ribbon group.
   * Default value: [object Object]
   */
  dialogLauncher?: RibbonGroupDialogLauncher;
  /**
   * Determines the size, below which the ribbon group will be wrapped.
   * Default value: undefined
   */
  wrapSize?: RibbonGroupWrapSize | string;
}
/**
 Defines a ribbon group.
*/
export interface RibbonGroup extends BaseElement, RibbonGroupProperties {

  /* Get a member by its name */
  [name: string]: any;
}

/**Determines the settings of the dialog launcher of the ribbon group. */
export interface RibbonGroupDialogLauncher {
  /**
   * Determines whether the dialog launcher is enabled.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Determines the tooltip of the dialog launcher.
   * Default value: ""
   */
  tooltip?: string;
}

declare global {
    interface Document {
        createElement(tagName: "smart-ribbon-group"): RibbonGroup;
        querySelector(selectors: "smart-ribbon-group"): RibbonGroup | null;
        querySelectorAll(selectors: "smart-ribbon-group"): NodeListOf<RibbonGroup>;
        getElementsByTagName(qualifiedName: "smart-ribbon-group"): HTMLCollectionOf<RibbonGroup>;
        getElementsByName(elementName: "smart-ribbon-group"): NodeListOf<RibbonGroup>;
    }
}

/**Determines the direction of the ribbon group. */
export declare type RibbonGroupDirection = 'horizontal' | 'vertical';
/**Determines the size, below which the ribbon group will be wrapped. */
export declare type RibbonGroupWrapSize = 'iconOnly' | 'verySmall' | 'small' | 'normal' | 'large' | 'none';
export interface RibbonItemProperties {
  /**
   * Determines whether the ribbon item is disabled.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines the label of the ribbon item.
   * Default value: ""
   */
  label?: string;
  /**
   * Determines the type of the ribbon item.
   * Default value: button
   */
  type?: RibbonItemType | string;
  /**
   * Determines the template of the ribbon item. Accepts HTMLTemplateElement, an id of an HTMLTemplateElement or a Function.
   * Default value: ""
   */
  template?: string;
  /**
   * Determines the size of the ribbon item.
   * Default value: normal
   */
  size?: RibbonItemSize | string;
  /**
   * 
   * Default value: null
   */
  sizeChanged?: any;
  /**
   * Determines the allowed sizes of the ribbon item.
   * Default value: 
   */
  allowedSizes?: any;
  /**
   * Determines the icon of the ribbon item.
   * Default value: ""
   */
  icon?: string;
  /**
   * Determines the settings of the ribbon item. The settings will be applied as properties if the ribbon item is set to a Smart Element.
   * Default value: [object Object]
   */
  settings?: RibbonItemSettings;
  /**
   * Determines the class of the ribbon item.
   * Default value: ""
   */
  cssClass?: string;
  /**
   * Sets a click event handler for the ribbon item.
   * Default value: null
   */
  onItemClick?: any;
  /**
   * Sets a change event handler for the ribbon item.
   * Default value: null
   */
  onItemChange?: any;
  /**
   * Determines the tooltip of the ribbon item.
   * Default value: ""
   */
  tooltip?: string;
}
/**
 Defines a ribbon item.
*/
export interface RibbonItem extends BaseElement, RibbonItemProperties {

  /* Get a member by its name */
  [name: string]: any;
}

/**Determines the settings of the ribbon item. The settings will be applied as properties if the ribbon item is set to a Smart Element. */
export interface RibbonItemSettings {
}

declare global {
    interface Document {
        createElement(tagName: "smart-ribbon-item"): RibbonItem;
        querySelector(selectors: "smart-ribbon-item"): RibbonItem | null;
        querySelectorAll(selectors: "smart-ribbon-item"): NodeListOf<RibbonItem>;
        getElementsByTagName(qualifiedName: "smart-ribbon-item"): HTMLCollectionOf<RibbonItem>;
        getElementsByName(elementName: "smart-ribbon-item"): NodeListOf<RibbonItem>;
    }
}

/**Determines the type of the ribbon item. */
export declare type RibbonItemType = 'separator' | 'button' | 'toggleButton' | 'multiSplitButton' | 'dropDownButton' | 'input' | 'custom';
/**Determines the size of the ribbon item. */
export declare type RibbonItemSize = 'iconOnly' | 'small' | 'verySmall' | 'normal' | 'large';
export interface RibbonTabProperties {
  /**
   * Determines whether the tab item is disabled.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines the label of the tab item.
   * Default value: ""
   */
  label?: string;
  /**
   * Determines whether the tab item is selected.
   * Default value: false
   */
  selected?: boolean;
  /**
   * Determines the ribbon group of the tab item
   * Default value: undefined
   */
  ribbonGroups?: any;
}
/**
 Defines a ribbon tab.
*/
export interface RibbonTab extends BaseElement, RibbonTabProperties {

  /* Get a member by its name */
  [name: string]: any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-ribbon-tab"): RibbonTab;
        querySelector(selectors: "smart-ribbon-tab"): RibbonTab | null;
        querySelectorAll(selectors: "smart-ribbon-tab"): NodeListOf<RibbonTab>;
        getElementsByTagName(qualifiedName: "smart-ribbon-tab"): HTMLCollectionOf<RibbonTab>;
        getElementsByName(elementName: "smart-ribbon-tab"): NodeListOf<RibbonTab>;
    }
}

