import  {BaseElement, Animation} from "./smart.element"

export interface RibbonProperties {
  /**
   * Specifies whether the ribbon interface can be collapsed or expanded by the user, allowing for a more compact or fully visible display as needed.
   * Default value: false
   */
  collapsible?: any;
  /**
   * Specifies the individual tab items to be displayed within the ribbon interface. Each tab item typically represents a distinct category or section, allowing users to easily navigate and access grouped commands or features within the ribbon.
   * Default value: 
   */
  dataSource?: any;
  /**
   * Specifies or retrieves whether the element is disabled, preventing user interaction and making it unresponsive to mouse and keyboard events. When set to true, the element cannot be activated or receive input focus.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies the available file menu options displayed within the ribbon interface, defining which actions (such as New, Open, Save, Print, etc.) users can access from the file menu.
   * Default value: undefined
   */
  fileMenu?: RibbonFileMenu;
  /**
   * Sets or retrieves the value of the unlockKey property, which is used to authenticate and authorize access to unlock the product. The unlockKey typically functions as a secure code or token required to enable full product functionality.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies the localization settings for the ribbon, determining the language and regional formatting (such as date, time, and number formats) used for displaying text and other interface elements.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Specifies the text and content displayed in the ribbon's message area, allowing customization of informational or notification messages shown to users within the ribbon interface.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Specifies or retrieves a value that determines whether the element’s alignment is optimized for right-to-left (RTL) languages, such as Arabic or Hebrew. This affects the element’s text direction, layout flow, and alignment to accommodate locales that use right-to-left scripts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies which tab is currently selected and active in the tab navigation component, typically by its index or identifier. This property controls which tab's content is visible to the user.
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
   * This event is triggered whenever the ribbon component transitions from its expanded state to a collapsed state. It allows developers to execute custom logic or UI updates in response to the ribbon becoming minimized or hidden from view.
	* @param event. The custom event.    */
  onCollapse?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is fired when the ribbon begins the process of collapsing, allowing you to execute custom logic before the collapse completes. If you wish to prevent the ribbon from collapsing, you can call event.preventDefault() within your event handler. This will cancel the default collapsing action, keeping the ribbon expanded.
	* @param event. The custom event.    */
  onCollapsing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a user clicks the dialog launcher button, typically represented by a small icon (such as an arrow or ellipsis) in a component's toolbar or header. The event indicates the user's intention to open an extended options dialog or advanced settings panel related to the component.
	* @param event. The custom event. Custom data event was created with: ev.detail(groupLabel, groupId)
   *  groupLabel - The label of the dialog launcher's ribbon group.
   *  groupId - The id of the dialog launcher's ribbon group.
   */
  onDialogLauncherClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the ribbon interface transitions from its collapsed state to an expanded state, indicating that additional options or tools have become visible to the user. Use this event to execute custom logic or UI updates whenever the ribbon expands.
	* @param event. The custom event.    */
  onExpand?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is fired when the ribbon component begins to expand. You can intercept and cancel the expansion by calling event.preventDefault() within your event handler function. This allows you to programmatically control whether or not the ribbon expands based on custom logic.
	* @param event. The custom event.    */
  onExpanding?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the file menu button is clicked by the user. It is typically used to open, display, or perform actions related to the file menu, such as showing file options or initializing file-related functions. The event provides an opportunity for developers to execute custom logic in response to user interaction with the file menu button.
	* @param event. The custom event.    */
  onFileButtonClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the user opens the file menu, such as by clicking on the "File" option in the application's main menu bar. It allows developers to execute custom logic immediately when the file menu becomes visible to the user.
	* @param event. The custom event.    */
  onFileMenuOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the file menu is closed, either by user interaction or programmatically. It occurs after all menu actions have completed, signaling that the file menu is no longer visible or active. Developers can use this event to execute cleanup operations, update the user interface, or manage application state in response to the menu being closed.
	* @param event. The custom event.    */
  onFileMenuClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a user clicks on an item within the file menu. It allows you to execute custom actions in response to specific file menu selections, such as opening, saving, or closing a file. The event provides details about the selected menu item, enabling context-aware handling within your application.
	* @param event. The custom event. Custom data event was created with: ev.detail(item)
   *  item - The file menu item.
   */
  onFileMenuItemClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the user selects a different tab, indicating that the active tab within the interface has changed. It allows you to respond to changes in tab selection, such as updating displayed content, fetching new data, or tracking user navigation within tabbed components.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldIndex, index)
   *  oldIndex - The previous tab index.
   *  index - The new index of the selected tab.
   */
  onSelect?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is fired immediately before the active tab changes, allowing you to intercept and potentially prevent the tab switch. To cancel the tab selection change, call event.preventDefault() within your event handler. This provides an opportunity to perform validations or prompt the user before the change is finalized.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldIndex, index)
   *  oldIndex - The previous tab index.
   *  index - The new index of the selected tab.
   */
  onSelecting?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Adds a new tab to the application's ribbon interface. The tab can be specified in one of three ways: as a configuration object defining the tab's properties, as an existing HTMLElement to be used as the tab, or as a string representing the id of an existing HTMLElement to be added as the tab. This provides flexibility in how ribbon tabs are created and integrated.
   * @param {any} tab. The ribbon tab to be added.
   */
  addTab(tab: any): void;
  /**
   * Enhances a ribbon tab by adding a new group. The group can be specified in one of the following ways: as an object defining its properties, as a direct reference to an HTMLElement, or as a string representing the id of an existing HTMLElement. This flexibility allows you to create the group dynamically, use an already created DOM element, or reference an element by its id.
   * @param {any} tab. The id, index or HTMLElement  of the parent ribbon tab.
   * @param {any} group. The ribbon group to be added.
   */
  addGroup(tab: any, group: any): void;
  /**
   * Adds a new item to a specified ribbon group in the ribbon interface. The new item can be provided in one of the following forms: as a configuration object, as an actual HTMLElement, or by specifying the id of an existing HTMLElement. This offers flexibility in how ribbon items are defined and incorporated into the ribbon group.
   * @param {string | number | HTMLElement} tab. The id, index or HTMLElement  of the parent ribbon tab.
   * @param {string | HTMLElement} group. The id or HTMLElement of the parent ribbon group.
   * @param {any} item. The ribbon item to be added.
   */
  addItem(tab: string | number | HTMLElement, group: string | HTMLElement, item: any): void;
  /**
   * Minimizes the ribbon interface, hiding its commands and options, to provide more workspace on the screen.
   */
  collapse(): void;
  /**
   * Expands the ribbon interface to reveal additional tools, features, and options that are otherwise hidden from view. This action increases the available workspace by displaying the full set of ribbon commands and controls.
   */
  expand(): void;
  /**
   * Removes a specified tab from the ribbon interface, effectively hiding it and its associated commands from the user’s view. This action ensures that the tab and its contents are no longer accessible within the ribbon navigation.
   * @param {string | number} ribbonTab. The id or index of the ribbon tab to be removed.
   */
  removeTab(ribbonTab: string | number): void;
  /**
   * Removes a specified ribbon group from the selected ribbon tab, effectively deleting that group's controls and functionalities from the tab's interface.
   * @param {string | number} ribbonTabIndex?. The id or index of the parent ribbon tab.
   * @param {string | number} ribbonGroup?. The id or index of the ribbon group to be removed.
   */
  removeGroup(ribbonTabIndex?: string | number, ribbonGroup?: string | number): void;
  /**
   * Removes a specified ribbon item from its parent ribbon group, effectively deleting the item from the group and updating the user interface accordingly. This operation ensures that the ribbon group no longer displays or interacts with the removed item.
   * @param {string | number} ribbonTabIndex?. The id or index of the parent ribbon tab.
   * @param {string | number} ribbonGroup?. The id or index of the parent ribbon group.
   * @param {string | number} ribbonItem?. The id or index of the ribbon item to be removed.
   */
  removeItem(ribbonTabIndex?: string | number, ribbonGroup?: string | number, ribbonItem?: string | number): void;
  /**
   * Activates the specified ribbon tab, bringing its contents into focus and making its associated controls and options accessible to the user.
   * @param {string | number} ribbonTabIndex. The index of the ribbon tab to be selected.
   */
  selectTab(ribbonTabIndex: string | number): void;
}

/**Specifies the available file menu options displayed within the ribbon interface, defining which actions (such as New, Open, Save, Print, etc.) users can access from the file menu. */
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
   * Specifies the text or title displayed as the label for the ribbon group, helping users identify the purpose or category of the grouped controls within the ribbon interface.
   * Default value: ""
   */
  label?: string;
  /**
   * Specifies the icon displayed for the ribbon group. This property defines the visual symbol or image that represents the group within the ribbon interface, enhancing usability and quick identification for users.
   * Default value: ""
   */
  icon?: string;
  /**
   * Specifies the CSS class applied to the ribbon group, which controls its appearance and styling. Use this property to customize the look and feel of the ribbon group by assigning one or more class names.
   * Default value: ""
   */
  cssClass?: string;
  /**
   * Defines the collection of items displayed within the ribbon group, specifying the individual controls, buttons, menus, or tools that appear as part of the ribbon interface. This property allows customization of the content and arrangement of the ribbon group elements.
   * Default value: 
   */
  ribbonItems?: any;
  /**
   * Specifies the orientation of the ribbon group, such as horizontal or vertical, affecting how its contained items are arranged and displayed within the user interface.
   * Default value: horizontal
   */
  direction?: RibbonGroupDirection | string;
  /**
   * Defines the configuration options for the dialog launcher button within the ribbon group, specifying its appearance, behavior, and associated actions when activated by the user.
   * Default value: [object Object]
   */
  dialogLauncher?: RibbonGroupDialogLauncher;
  /**
   * Specifies the minimum width (in pixels) at which the ribbon group will be displayed on a single line. If the available space becomes smaller than this value, the ribbon group will automatically wrap to a new line to maintain a responsive layout.
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

/**Defines the configuration options for the dialog launcher button within the ribbon group, specifying its appearance, behavior, and associated actions when activated by the user. */
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

/**Specifies the orientation of the ribbon group, such as horizontal or vertical, affecting how its contained items are arranged and displayed within the user interface. */
export declare type RibbonGroupDirection = 'horizontal' | 'vertical';
/**Specifies the minimum width (in pixels) at which the ribbon group will be displayed on a single line. If the available space becomes smaller than this value, the ribbon group will automatically wrap to a new line to maintain a responsive layout. */
export declare type RibbonGroupWrapSize = 'iconOnly' | 'verySmall' | 'small' | 'normal' | 'large' | 'none';
export interface RibbonItemProperties {
  /**
   * Specifies whether the ribbon item is disabled and unresponsive to user interactions. If set to 'true', the ribbon item will appear visually inactive and cannot be clicked or selected by the user. If 'false', the item remains enabled and fully interactive.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies the text displayed as the label on the ribbon item, providing users with a clear description or name for the ribbon element.
   * Default value: ""
   */
  label?: string;
  /**
   * Specifies the category or function of the ribbon item, such as button, dropdown, separator, or other UI element types. This property helps define how the ribbon item behaves and is displayed within the ribbon interface.
   * Default value: button
   */
  type?: RibbonItemType | string;
  /**
   * Specifies the template used to render the ribbon item. This property accepts one of the following:- An HTMLTemplateElement instance.- The id (string) of an existing HTMLTemplateElement in the DOM.- A function that returns either a template string or an HTML element.This allows you to customize the appearance and content of the ribbon item by providing a static template, referencing a template by id, or generating templates dynamically through a function.
   * Default value: ""
   */
  template?: string;
  /**
   * Specifies the dimensions or size configuration (such as small, medium, or large) for the ribbon item, affecting its visual appearance and layout within the ribbon interface.
   * Default value: normal
   */
  size?: RibbonItemSize | string;
  /**
   * 
   * Default value: null
   */
  sizeChanged?: any;
  /**
   * Specifies the permissible dimensions (such as small, medium, or large) that the ribbon item can be displayed in. This setting controls which size options are available for the ribbon item’s appearance within the user interface.
   * Default value: 
   */
  allowedSizes?: any;
  /**
   * Specifies the icon displayed on the ribbon item. This property sets the visual symbol or graphic that represents the ribbon item in the user interface, allowing users to quickly identify its function. The icon can typically be defined using an icon name, image URL, or SVG markup, depending on the framework or library in use.
   * Default value: ""
   */
  icon?: string;
  /**
   * Controls the configuration options for the ribbon item. When the ribbon item is designated as a Smart Element, these settings are applied as its properties, allowing for dynamic customization of its appearance and behavior within the ribbon interface.
   * Default value: [object Object]
   */
  settings?: RibbonItemSettings;
  /**
   * Specifies the CSS class or classes to be applied to the ribbon item, allowing for customized styling and appearance. This property enables developers to control the visual presentation of individual ribbon items by assigning one or more class names.
   * Default value: ""
   */
  cssClass?: string;
  /**
   * Assigns a custom function to be executed when the ribbon item is clicked, enabling the implementation of specific actions or behaviors in response to user interaction.
   * Default value: null
   */
  onItemClick?: any;
  /**
   * Registers a handler function that will be triggered when the ribbon item's value or state changes, allowing you to respond dynamically to user interactions or programmatic updates.
   * Default value: null
   */
  onItemChange?: any;
  /**
   * Specifies the text that appears as a tooltip when users hover over the ribbon item, providing additional information or guidance about its function.
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

/**Controls the configuration options for the ribbon item. When the ribbon item is designated as a Smart Element, these settings are applied as its properties, allowing for dynamic customization of its appearance and behavior within the ribbon interface. */
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

/**Specifies the category or function of the ribbon item, such as button, dropdown, separator, or other UI element types. This property helps define how the ribbon item behaves and is displayed within the ribbon interface. */
export declare type RibbonItemType = 'separator' | 'button' | 'toggleButton' | 'multiSplitButton' | 'dropDownButton' | 'input' | 'custom';
/**Specifies the dimensions or size configuration (such as small, medium, or large) for the ribbon item, affecting its visual appearance and layout within the ribbon interface. */
export declare type RibbonItemSize = 'iconOnly' | 'small' | 'verySmall' | 'normal' | 'large';
export interface RibbonTabProperties {
  /**
   * Specifies whether the tab item is disabled and unresponsive to user interaction. When set to true, the tab cannot be selected or activated by the user.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies the text displayed as the label for the tab item, allowing users to identify and select the corresponding tab in the interface.
   * Default value: ""
   */
  label?: string;
  /**
   * Indicates whether the tab item is currently active and selected by the user. When set to true, this tab will be visually highlighted and its associated content will be displayed.
   * Default value: false
   */
  selected?: boolean;
  /**
   * Specifies the ribbon group to which the tab item belongs, enabling organization and grouping of related commands within the ribbon interface.
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

