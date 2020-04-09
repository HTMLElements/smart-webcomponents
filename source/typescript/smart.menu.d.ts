import  {BaseElement, Animation} from "./smart.element"

/**
 Horizontal, Vertical and Popup Menu. Popup Menus appear when a user taps an interactive UI element such as an icon, button, action, or content, such as selected items or text.
*/
export interface Menu extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines delay (in milliseconds) before a Menu dropdown is closed when leaving the Menu with the mouse. Applicable only when selectionMode is 'mouseenter'.
   * Default value: 100
   */
  autoCloseDelay?: number;
  /**
   * If set to true, on mouseenter, the element receives focus automatically.
   * Default value: false
   */
  autoFocusOnMouseenter?: boolean;
  /**
   * Allows top-level Menu items (immediate children of the Menu) to be checkable. Sublevels are controlled by setting checkable to the respective smart-menu-items-group.
   * Default value: false
   */
  checkable?: boolean;
  /**
   * Sets or gets whether checkboxes and radio buttons can be displayed in the Menu. This property is applicable only to the Menu itself, and not its smart-menu-item/smart-menu-items-group subitems. See also the property checkable.
   * Default value: false
   */
  checkboxes?: boolean;
  /**
   * Sets the check mode of top-level Menu items (immediate children of the Menu). checkMode can be set to 'checkbox', 'radioButton', or a comma-separated list containing 'checkbox', 'radioButton', or 'none' (e.g. 'checkbox, radioButton, none, checkbox'). When set to a list, each value in the list is applied to groups of Menu items separated by an item with separator (item after the one with separator is the start of a new checkMode context). Sublevels are controlled by setting checkMode to the respective smart-menu-items-group.
   * Default value: checkbox
   */
  checkMode?: MenuCheckMode;
  /**
   * Sets the document event which closes any open Menu drop downs (or the Menu itself when mode is 'dropDown').
   * Default value: up
   */
  closeAction?: MenuCloseAction;
  /**
   * Determines the data source that will be loaded to the Menu. The data source represents an array of objects with the following properties: label - a string representing the text content of the item.value - the value of the item.shortcut - a string representing a shortuct for the item. It will be displayed inside the item.items - allows to define an array of sub menu items.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines the field in the data source that corresponds to an item's label.
   * Default value: "label"
   */
  displayMember?: string;
  /**
   * Sets custom outer container, where all dropdown containers must be appended. By default they are inside the menu. The value of the property can be an HTML element or the id of an HTML element. In mode 'dropDown', the property dropDownAppendTo also controls the parent element of the whole Menu. The open method works relatively to the original place of the Menu in the DOM.
   * Default value: null
   */
  dropDownAppendTo?: string | HTMLElement;
  /**
   * If this property is enabled, when an element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Determines the opening direction of Menu dropdowns.
   * Default value: auto
   */
  dropDownPosition?: MenuDropDownPosition;
  /**
   * Determines the field in the data source that corresponds to an item group's subitems collection.
   * Default value: "items"
   */
  itemsMember?: string;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid '!",
   *     "propertyInvalidValueType": "Invalid '!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": ".",
   *     "htmlTemplateNotSuported": ": Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Used to load a custom minimize icon from an HTMLTemplateElement object. The HTMLTemplateElement is selected by it's id.
   * Default value: "null"
   */
  minimizeIconTemplate?: string;
  /**
   * Determines the minimum width of the Menu at which it will switch from normal to minimized mode. If set to null, the Menu does not minimize automatically.
   * Default value: null
   */
  minimizeWidth?: number;
  /**
   * Determines the menu's display mode.
   * Default value: horizontal
   */
  mode?: MenuMode;
  /**
   * Opens or closes thte menu when it's in 'dropDown' mode.
   * Default value: false
   */
  opened?: boolean;
  /**
   * Sets or gets the menu's scroll buttons behavior. Applicable only when dropDownAppendTo is not null.
   * Default value: auto
   */
  overflow?: Overflow;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the menu's selection mode.
   * Default value: click
   */
  selectionMode?: MenuSelectionMode;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Determines the field in the data source that corresponds to an item's value.
   * Default value: "value"
   */
  valueMember?: string;
  /** 
   * This event is triggered when the menu is closed. The event is fired only in <em>'dropDown'</em> <strong>mode</strong>.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the menu is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function. The event is fired only in <em>'dropDown'</em> <strong>mode</strong>.
	* @param event. The custom event. Custom data event was created with: ev.detail(trigger)
   *  trigger - Indicates whether the event was called from inside the element or programatically.
   */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a jqx-menu-items-group is collapsed.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, value, path, children)
   *  item - The menu item that was collapsed.
   *  label - The label of the toggled item that was collapsed.
   *  value - The value of the toggled item that was collapsed.
   *  path - The path of the toggled item that was collapsed, e.g. '0.1', '1.1.2'.
   *  children - The children items of the toggled item that was collapsed.
   */
  onCollapse?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a jqx-menu-items-group is collapsing.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, value, path, children)
   *  item - The menu item that is going to be collapsed.
   *  label - The label of the toggled item that is going to be collapsed.
   *  value - The value of the toggled item that is going to be collapsed.
   *  path - The path of the toggled item that is going to be collapsed, e.g. '0.1', '1.1.2'.
   *  children - The children items of the toggled item that is going to be collapsed.
   */
  onCollapsing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a jqx-menu-items-group is expanded.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, value, path, children)
   *  item - The menu item that was expanded.
   *  label - The label of the toggled item that was expanded.
   *  value - The value of the toggled item that was expanded.
   *  path - The path of the toggled item that was expanded, e.g. '0.1', '1.1.2'.
   *  children - The children items of the toggled item that was expanded.
   */
  onExpand?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered before a jqx-menu-items-group is expanded.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, value, path, children)
   *  item - The menu item that is going to be expanded.
   *  label - The label of the toggled item that is going to be expanded.
   *  value - The value of the toggled item that is going to be expanded.
   *  path - The path of the toggled item that is going to be expanded, e.g. '0.1', '1.1.2'.
   *  children - The children items of the toggled item that is going to be expanded.
   */
  onExpanding?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a menu item check state is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, value, checked)
   *  item - The menu item which state was changed.
   *  label - The label of the item which state was changed.
   *  value - The value of the item which state was changed.
   *  checked - The checked state of the toggled item. If false the item is not toggled.
   */
  onItemCheckChange?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a menu item is clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, value)
   *  item - The menu item that is toggled.
   *  label - The label of the toggled item.
   *  value - The value of the toggled item.
   */
  onItemClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the menu is opened. The event is fired only in <em>'dropDown'</em> <strong>mode</strong>.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the menu is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function. The event is fired only in <em>'dropDown'</em> <strong>mode</strong>.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | null;
  /**
   * Adds an item to the menu.
   * @param {HTMLElement} Item. A smart-menu-item to add to the Menu.
   * @param {HTMLElement | string} Parent?. The smart-menu-items-group or its id or numeric path to add the item to.
   */
  addItem(Item: HTMLElement, Parent?: HTMLElement | string): void;
  /**
   * Checks an item.
   * @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group or its id or numeric path.
   */
  checkItem(item: HTMLElement | string): void;
  /**
   * Clears all Menu items.
   */
  clear(): void;
  /**
   * Closes the Menu when <strong>mode</strong> is <em>'dropDown'</em>.
   */
  close(): void;
  /**
   * Collapses an item.
   * @param {HTMLElement | string} item?. smart-menu-item/smart-menu-items-group or its id or numeric path. If no item is passed, all open items are collapsed.
   * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
   */
  collapseItem(item?: HTMLElement | string, animation?: boolean): void;
  /**
   * Expands an item.
   * @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group or its id or numeric path.
   * @param {boolean} animation?. If set to false, disables expand animation even if animation is enabled for the element.
   */
  expandItem(item: HTMLElement | string, animation?: boolean): void;
  /**
   * Gets an item by its id or numeric path.
   * @param {string} id. The id or numeric path of an item
   * @returns {HTMLElement}
   */
  getItem(id: string): HTMLElement;
  /**
   * Maximizes the Menu.
   */
  maximize(): void;
  /**
   * Minimizes the Menu.
   */
  minimize(): void;
  /**
   * Opens the Menu when <strong>mode</strong> is <em>'dropDown'</em>.
   * @param {number} left. Horizontal position
   * @param {number} top. Vertical position
   */
  open(left: number, top: number): void;
  /**
   * Removes an item from the menu.
   * @param {HTMLElement | string} item. The smart-menu-item/smart-menu-items-group or its id or numeric path to remove.
   */
  removeItem(item: HTMLElement | string): void;
  /**
   * Unchecks an item.
   * @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group (or its id or numeric path)
   */
  uncheckItem(item: HTMLElement | string): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-menu"): Menu;
			querySelector(selectors: "smart-menu"): Menu | null;	
			querySelectorAll(selectors: "smart-menu"): NodeListOf<Menu>;
			getElementsByTagName(qualifiedName: "smart-menu"): HTMLCollectionOf<Menu>;
			getElementsByName(elementName: "smart-menu"): NodeListOf<Menu>;	
    }
}

/**Sets the check mode of top-level Menu items (immediate children of the Menu). checkMode can be set to 'checkbox', 'radioButton', or a comma-separated list containing 'checkbox', 'radioButton', or 'none' (e.g. 'checkbox, radioButton, none, checkbox'). When set to a list, each value in the list is applied to groups of Menu items separated by an item with separator (item after the one with separator is the start of a new checkMode context). Sublevels are controlled by setting checkMode to the respective jqx-menu-items-group. */
export declare type MenuCheckMode = 'checkbox' | 'radioButton';
/**Sets the document event which closes any open Menu drop downs (or the Menu itself when mode is 'dropDown'). */
export declare type MenuCloseAction = 'down' | 'up' | 'none';
/**Determines the opening direction of Menu dropdowns. */
export declare type MenuDropDownPosition = 'auto' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'overlay-left' | 'overlay-right';
/**Determines the menu's display mode. */
export declare type MenuMode = 'horizontal' | 'vertical' | 'dropDown' | 'tree';
/**Sets or gets the menu's scroll buttons behavior. Applicable only when dropDownAppendTo is not null. */
export declare type Overflow = 'auto' | 'hidden' | 'scroll';
/**Determines the menu's selection mode. */
export declare type MenuSelectionMode = 'click' | 'mouseenter';
/**
 Defines a menu item.
*/
export interface MenuItem extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * 
   * Default value: true
   */
  checked?: boolean;
  /**
   * Enables or disables element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * 
   * Default value: 
   */
  label?: any;
  /**
   * 
   * Default value: null
   */
  level?: number;
  /**
   * 
   * Default value: true
   */
  separator?: boolean;
  /**
   * 
   * Default value: ""
   */
  shortcut?: string;
  /**
   * 
   * Default value: null
   */
  value?: any;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-menu-item"): MenuItem;
			querySelector(selectors: "smart-menu-item"): MenuItem | null;	
			querySelectorAll(selectors: "smart-menu-item"): NodeListOf<MenuItem>;
			getElementsByTagName(qualifiedName: "smart-menu-item"): HTMLCollectionOf<MenuItem>;
			getElementsByName(elementName: "smart-menu-item"): NodeListOf<MenuItem>;	
    }
}

/**
 Defines a group of menu items.
*/
export interface MenuItemsGroup extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * 
   * Default value: false
   */
  checkable?: boolean;
  /**
   * 
   * Default value: false
   */
  checked?: boolean;
  /**
   * 
   * Default value: checkbox
   */
  checkMode?: MenuCheckMode;
  /**
   * Enables or disables element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * 
   * Default value: null
   */
  dropDownHeight?: number;
  /**
   * 
   * Default value: false
   */
  expanded?: boolean;
  /**
   * 
   * Default value: 
   */
  label?: any;
  /**
   * 
   * Default value: null
   */
  level?: number;
  /**
   * 
   * Default value: false
   */
  separator?: boolean;
  /**
   * 
   * Default value: null
   */
  value?: any;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-menu-items-group"): MenuItemsGroup;
			querySelector(selectors: "smart-menu-items-group"): MenuItemsGroup | null;	
			querySelectorAll(selectors: "smart-menu-items-group"): NodeListOf<MenuItemsGroup>;
			getElementsByTagName(qualifiedName: "smart-menu-items-group"): HTMLCollectionOf<MenuItemsGroup>;
			getElementsByName(elementName: "smart-menu-items-group"): NodeListOf<MenuItemsGroup>;	
    }
}

